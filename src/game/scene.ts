/**
 * Three.js scene setup for Galactic Golf
 */

import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { SUN, PLANETS, PlanetName, PLANET_NAMES, CelestialBody, VISUAL_RADIUS_MULTIPLIER, SUN_VISUAL_RADIUS_MULTIPLIER } from './sim/bodies';
import { Vec3, generateOrbitPath, getBodyVisualPosition } from './sim/orbits';
import { toRender as unitToRender } from './sim/units';

// Trail configuration
const TRAIL_MAX_POINTS = 500;
const TRAIL_FADE_START = 0.3;

export class GameScene {
  public scene: THREE.Scene;
  public camera: THREE.PerspectiveCamera;
  public renderer: THREE.WebGLRenderer;
  public controls: OrbitControls;

  // Celestial body meshes
  public sunMesh: THREE.Mesh;
  public planetMeshes: Map<PlanetName, THREE.Mesh> = new Map();
  public orbitLines: Map<PlanetName, THREE.Line> = new Map();

  // Ball and trail
  public ballMesh: THREE.Object3D;
  public trailLine: THREE.Line;
  public trailPositions: THREE.Vector3[] = [];
  public trailGeometry: THREE.BufferGeometry;

  // Aim visualization
  public aimLine: THREE.Line;
  public aimTube: THREE.Mesh; // Thick visible tube for aiming
  public aimSprites: THREE.Sprite[] = []; // Array of sprites along aim line
  public suggestedLine: THREE.Line;
  public previewLine: THREE.Line;
  public startMarker: THREE.Mesh;

  // State
  public showOrbitLines: boolean = true;
  private disposed: boolean = false;

  constructor(container: HTMLElement) {
    // Scene setup
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0x0a0a1a);

    // Camera - far plane needs to be HUGE for interplanetary distances
    this.camera = new THREE.PerspectiveCamera(
      60,
      container.clientWidth / container.clientHeight,
      1,
      100000
    );
    // Start looking at the solar system from far away
    this.camera.position.set(0, 5000, 10000);

    // Renderer
    this.renderer = new THREE.WebGLRenderer({
      antialias: true,
      powerPreference: 'high-performance',
    });
    this.renderer.setSize(container.clientWidth, container.clientHeight);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(this.renderer.domElement);

    // Controls - middle-click for pan, right-click for rotate, scroll for zoom
    this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    this.controls.enableDamping = true;
    this.controls.dampingFactor = 0.05;
    this.controls.minDistance = 50;
    this.controls.maxDistance = 80000; // Ship starts at ~9000 render units (60 AU)
    // Left-click is for aiming, so we use middle/right for camera
    this.controls.enableRotate = true;
    this.controls.enablePan = true;
    this.controls.enableZoom = true;
    // Set mouse buttons: middle=pan, right=rotate, left=disabled (for aiming)
    this.controls.mouseButtons = {
      LEFT: THREE.MOUSE.PAN, // Pan with left (aiming uses document events, not canvas)
      MIDDLE: THREE.MOUSE.DOLLY,
      RIGHT: THREE.MOUSE.ROTATE,
    };
    // Also allow touch controls
    this.controls.touches = {
      ONE: THREE.TOUCH.ROTATE,
      TWO: THREE.TOUCH.DOLLY_PAN,
    };

    // Prevent right-click context menu so rotation works
    this.renderer.domElement.addEventListener('contextmenu', (e) => {
      e.preventDefault();
    });

    // Lighting
    this.setupLighting();

    // Create starfield
    this.createStarfield();

    // Create celestial bodies
    this.sunMesh = this.createSun();
    this.createPlanets();
    this.createOrbitLines();

    // Create ball
    this.ballMesh = this.createBall();

    // Create trail
    const { line, geometry } = this.createTrail();
    this.trailLine = line;
    this.trailGeometry = geometry;

    // Create aim visualization
    this.aimLine = this.createAimLine();
    this.aimTube = this.createAimTube();
    this.createAimSprites(); // Create sprite chain for aim visualization
    this.suggestedLine = this.createSuggestedLine();
    this.previewLine = this.createPreviewLine();
    this.startMarker = this.createStartMarker();

    // Handle resize
    window.addEventListener('resize', this.handleResize);
  }

  private setupLighting(): void {
    // Sun point light
    const sunLight = new THREE.PointLight(0xffffff, 2, 0, 0.5);
    sunLight.position.set(0, 0, 0);
    this.scene.add(sunLight);

    // Ambient light for visibility
    const ambientLight = new THREE.AmbientLight(0x404060, 0.4);
    this.scene.add(ambientLight);
  }

  private createStarfield(): void {
    const starCount = 8000;
    const positions = new Float32Array(starCount * 3);
    const colors = new Float32Array(starCount * 3);

    for (let i = 0; i < starCount; i++) {
      // Random position on a HUGE sphere (ship starts at ~9000 render units = 60 AU)
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const r = 25000 + Math.random() * 10000; // 25000-35000 render units

      positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = r * Math.cos(phi);

      // Slightly varied colors (white to blue-ish)
      const brightness = 0.5 + Math.random() * 0.5;
      colors[i * 3] = brightness;
      colors[i * 3 + 1] = brightness;
      colors[i * 3 + 2] = brightness + Math.random() * 0.2;
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const material = new THREE.PointsMaterial({
      size: 3.0, // Larger stars visible at interplanetary distances
      vertexColors: true,
      transparent: true,
      opacity: 0.9,
    });

    const stars = new THREE.Points(geometry, material);
    this.scene.add(stars);
  }

  private createSun(): THREE.Mesh {
    const renderRadius = this.getBodyRenderRadius(SUN);
    const geometry = new THREE.SphereGeometry(renderRadius, 32, 32);
    const material = new THREE.MeshBasicMaterial({
      color: new THREE.Color(SUN.color),
    });

    const mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(0, 0, 0);
    this.scene.add(mesh);

    // Sun glow sprite
    const spriteMaterial = new THREE.SpriteMaterial({
      map: this.createGlowTexture(),
      color: 0xffdd44,
      transparent: true,
      blending: THREE.AdditiveBlending,
    });
    const sprite = new THREE.Sprite(spriteMaterial);
    sprite.scale.set(renderRadius * 6, renderRadius * 6, 1);
    mesh.add(sprite);

    return mesh;
  }

  private createGlowTexture(): THREE.Texture {
    const canvas = document.createElement('canvas');
    canvas.width = 128;
    canvas.height = 128;
    const ctx = canvas.getContext('2d')!;

    const gradient = ctx.createRadialGradient(64, 64, 0, 64, 64, 64);
    gradient.addColorStop(0, 'rgba(255, 255, 200, 1)');
    gradient.addColorStop(0.2, 'rgba(255, 220, 100, 0.5)');
    gradient.addColorStop(0.5, 'rgba(255, 180, 50, 0.2)');
    gradient.addColorStop(1, 'rgba(255, 150, 0, 0)');

    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 128, 128);

    const texture = new THREE.CanvasTexture(canvas);
    return texture;
  }

  private getBodyRenderRadius(body: CelestialBody): number {
    // Use the visual radius multipliers for arcade-style massive planets
    const multiplier = body.name === 'Sun' ? SUN_VISUAL_RADIUS_MULTIPLIER : VISUAL_RADIUS_MULTIPLIER;
    const baseRadius = unitToRender(body.radius * multiplier);
    // MINIMUM 80 render units - every planet must be CLEARLY visible!
    // With camera at ~10000 units, 80 units is still small but visible
    return Math.max(80.0, baseRadius);
  }

  private createPlanets(): void {
    for (const name of PLANET_NAMES) {
      const planet = PLANETS[name];
      const renderRadius = this.getBodyRenderRadius(planet);

      const geometry = new THREE.SphereGeometry(renderRadius, 48, 48);
      
      // Create unique texture for each planet
      const texture = this.createPlanetTexture(name);
      const material = new THREE.MeshStandardMaterial({
        map: texture,
        roughness: 0.7,
        metalness: 0.1,
      });

      const mesh = new THREE.Mesh(geometry, material);
      this.scene.add(mesh);
      this.planetMeshes.set(name, mesh);

      // Add atmosphere glow for planets with atmospheres
      if (['Earth', 'Venus', 'Jupiter', 'Saturn', 'Uranus', 'Neptune'].includes(name)) {
        const atmosphereGlow = this.createAtmosphereGlow(renderRadius, planet.color);
        mesh.add(atmosphereGlow);
      }

      // Add GLOW SPRITE to every planet for visibility at any distance
      const glowMaterial = new THREE.SpriteMaterial({
        map: this.createPlanetGlowTexture(planet.color),
        transparent: true,
        blending: THREE.AdditiveBlending,
      });
      const glow = new THREE.Sprite(glowMaterial);
      glow.scale.set(renderRadius * 4, renderRadius * 4, 1);
      mesh.add(glow);

      // Add rings for Saturn and Uranus
      if (name === 'Saturn') {
        this.addSaturnRings(mesh, renderRadius);
      } else if (name === 'Uranus') {
        this.addUranusRings(mesh, renderRadius);
      }
    }
  }

  private createPlanetTexture(name: PlanetName): THREE.Texture {
    const canvas = document.createElement('canvas');
    canvas.width = 512;
    canvas.height = 256;
    const ctx = canvas.getContext('2d')!;

    switch (name) {
      case 'Mercury':
        this.drawMercuryTexture(ctx);
        break;
      case 'Venus':
        this.drawVenusTexture(ctx);
        break;
      case 'Earth':
        this.drawEarthTexture(ctx);
        break;
      case 'Mars':
        this.drawMarsTexture(ctx);
        break;
      case 'Jupiter':
        this.drawJupiterTexture(ctx);
        break;
      case 'Saturn':
        this.drawSaturnTexture(ctx);
        break;
      case 'Uranus':
        this.drawUranusTexture(ctx);
        break;
      case 'Neptune':
        this.drawNeptuneTexture(ctx);
        break;
    }

    const texture = new THREE.CanvasTexture(canvas);
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.ClampToEdgeWrapping;
    return texture;
  }

  private drawMercuryTexture(ctx: CanvasRenderingContext2D): void {
    // Gray cratered surface
    const gradient = ctx.createLinearGradient(0, 0, 512, 256);
    gradient.addColorStop(0, '#8a8a8a');
    gradient.addColorStop(0.5, '#6e6e6e');
    gradient.addColorStop(1, '#5a5a5a');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 512, 256);
    
    // Add craters
    for (let i = 0; i < 60; i++) {
      const x = Math.random() * 512;
      const y = Math.random() * 256;
      const r = 3 + Math.random() * 15;
      ctx.beginPath();
      ctx.arc(x, y, r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(80, 80, 80, ${0.3 + Math.random() * 0.4})`;
      ctx.fill();
      // Crater rim
      ctx.beginPath();
      ctx.arc(x, y, r, 0, Math.PI * 2);
      ctx.strokeStyle = `rgba(120, 120, 120, 0.5)`;
      ctx.lineWidth = 2;
      ctx.stroke();
    }
  }

  private drawVenusTexture(ctx: CanvasRenderingContext2D): void {
    // Yellowish clouds with swirls
    const gradient = ctx.createLinearGradient(0, 0, 0, 256);
    gradient.addColorStop(0, '#e8d5a3');
    gradient.addColorStop(0.3, '#d4c08a');
    gradient.addColorStop(0.7, '#c9b07a');
    gradient.addColorStop(1, '#bfa06a');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 512, 256);
    
    // Cloud bands
    for (let i = 0; i < 8; i++) {
      const y = i * 32 + Math.random() * 20;
      ctx.beginPath();
      ctx.moveTo(0, y);
      for (let x = 0; x < 512; x += 20) {
        ctx.lineTo(x, y + Math.sin(x * 0.02) * 10);
      }
      ctx.strokeStyle = `rgba(200, 180, 140, ${0.3 + Math.random() * 0.3})`;
      ctx.lineWidth = 8 + Math.random() * 12;
      ctx.stroke();
    }
  }

  private drawEarthTexture(ctx: CanvasRenderingContext2D): void {
    // Ocean base
    ctx.fillStyle = '#1a5f8a';
    ctx.fillRect(0, 0, 512, 256);
    
    // Continents - simplified shapes
    ctx.fillStyle = '#3d7a3d';
    
    // North America
    ctx.beginPath();
    ctx.ellipse(100, 80, 60, 50, 0, 0, Math.PI * 2);
    ctx.fill();
    
    // South America
    ctx.beginPath();
    ctx.ellipse(130, 180, 30, 50, 0.3, 0, Math.PI * 2);
    ctx.fill();
    
    // Europe/Africa
    ctx.beginPath();
    ctx.ellipse(270, 100, 35, 40, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.ellipse(280, 170, 40, 55, 0, 0, Math.PI * 2);
    ctx.fill();
    
    // Asia
    ctx.beginPath();
    ctx.ellipse(380, 80, 80, 50, 0, 0, Math.PI * 2);
    ctx.fill();
    
    // Australia
    ctx.beginPath();
    ctx.ellipse(430, 190, 35, 25, 0.5, 0, Math.PI * 2);
    ctx.fill();
    
    // Ice caps
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, 512, 20);
    ctx.fillRect(0, 236, 512, 20);
    
    // Clouds
    ctx.fillStyle = 'rgba(255, 255, 255, 0.4)';
    for (let i = 0; i < 15; i++) {
      const x = Math.random() * 512;
      const y = 30 + Math.random() * 196;
      ctx.beginPath();
      ctx.ellipse(x, y, 30 + Math.random() * 40, 10 + Math.random() * 15, Math.random(), 0, Math.PI * 2);
      ctx.fill();
    }
  }

  private drawMarsTexture(ctx: CanvasRenderingContext2D): void {
    // Red/orange base
    const gradient = ctx.createLinearGradient(0, 0, 512, 256);
    gradient.addColorStop(0, '#c1440e');
    gradient.addColorStop(0.5, '#a33c0e');
    gradient.addColorStop(1, '#8b3008');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 512, 256);
    
    // Darker regions (maria)
    ctx.fillStyle = 'rgba(100, 40, 20, 0.5)';
    ctx.beginPath();
    ctx.ellipse(200, 120, 80, 40, 0.2, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.ellipse(400, 150, 60, 50, -0.3, 0, Math.PI * 2);
    ctx.fill();
    
    // Polar ice caps
    ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
    ctx.beginPath();
    ctx.ellipse(256, 10, 100, 20, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.ellipse(256, 246, 80, 15, 0, 0, Math.PI * 2);
    ctx.fill();
    
    // Olympus Mons (large volcano)
    ctx.fillStyle = 'rgba(150, 80, 50, 0.6)';
    ctx.beginPath();
    ctx.arc(150, 100, 25, 0, Math.PI * 2);
    ctx.fill();
  }

  private drawJupiterTexture(ctx: CanvasRenderingContext2D): void {
    // Base color
    ctx.fillStyle = '#d4a574';
    ctx.fillRect(0, 0, 512, 256);
    
    // Horizontal bands
    const bandColors = ['#c9a06a', '#e8c896', '#a87d50', '#d4b08a', '#8b6340', '#c4956a'];
    let y = 0;
    for (let i = 0; i < 12; i++) {
      const height = 15 + Math.random() * 25;
      ctx.fillStyle = bandColors[i % bandColors.length];
      ctx.fillRect(0, y, 512, height);
      y += height;
    }
    
    // Great Red Spot
    ctx.fillStyle = '#c85a3a';
    ctx.beginPath();
    ctx.ellipse(350, 140, 40, 25, 0.1, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#a84828';
    ctx.beginPath();
    ctx.ellipse(350, 140, 25, 15, 0.1, 0, Math.PI * 2);
    ctx.fill();
    
    // Storm swirls
    for (let i = 0; i < 20; i++) {
      const x = Math.random() * 512;
      const y = Math.random() * 256;
      ctx.beginPath();
      ctx.ellipse(x, y, 5 + Math.random() * 15, 3 + Math.random() * 8, Math.random() * Math.PI, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(200, 160, 120, ${0.2 + Math.random() * 0.3})`;
      ctx.fill();
    }
  }

  private drawSaturnTexture(ctx: CanvasRenderingContext2D): void {
    // Pale yellow base
    ctx.fillStyle = '#e8d8a8';
    ctx.fillRect(0, 0, 512, 256);
    
    // Subtle horizontal bands
    const bandColors = ['#dcc890', '#f0e8c0', '#c8b878', '#e0d0a0', '#d0c088'];
    let y = 0;
    for (let i = 0; i < 10; i++) {
      const height = 20 + Math.random() * 30;
      ctx.fillStyle = bandColors[i % bandColors.length];
      ctx.fillRect(0, y, 512, height);
      y += height;
    }
  }

  private drawUranusTexture(ctx: CanvasRenderingContext2D): void {
    // Cyan/teal gradient
    const gradient = ctx.createLinearGradient(0, 0, 0, 256);
    gradient.addColorStop(0, '#7de3f4');
    gradient.addColorStop(0.5, '#5ac8dc');
    gradient.addColorStop(1, '#4ab8cc');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 512, 256);
    
    // Subtle bands
    for (let i = 0; i < 6; i++) {
      const y = i * 45;
      ctx.fillStyle = `rgba(100, 200, 220, ${0.1 + Math.random() * 0.2})`;
      ctx.fillRect(0, y, 512, 20 + Math.random() * 20);
    }
  }

  private drawNeptuneTexture(ctx: CanvasRenderingContext2D): void {
    // Deep blue gradient
    const gradient = ctx.createLinearGradient(0, 0, 0, 256);
    gradient.addColorStop(0, '#4a6eff');
    gradient.addColorStop(0.5, '#3858d0');
    gradient.addColorStop(1, '#2848b0');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 512, 256);
    
    // Cloud bands
    for (let i = 0; i < 5; i++) {
      const y = 30 + i * 50;
      ctx.beginPath();
      ctx.moveTo(0, y);
      for (let x = 0; x < 512; x += 10) {
        ctx.lineTo(x, y + Math.sin(x * 0.03 + i) * 8);
      }
      ctx.strokeStyle = `rgba(100, 140, 255, ${0.3 + Math.random() * 0.3})`;
      ctx.lineWidth = 10 + Math.random() * 15;
      ctx.stroke();
    }
    
    // Great Dark Spot
    ctx.fillStyle = 'rgba(30, 50, 120, 0.6)';
    ctx.beginPath();
    ctx.ellipse(200, 130, 35, 20, 0, 0, Math.PI * 2);
    ctx.fill();
  }

  private createAtmosphereGlow(radius: number, color: string): THREE.Mesh {
    const geometry = new THREE.SphereGeometry(radius * 1.05, 32, 32);
    const material = new THREE.MeshBasicMaterial({
      color: new THREE.Color(color),
      transparent: true,
      opacity: 0.15,
      side: THREE.BackSide,
    });
    return new THREE.Mesh(geometry, material);
  }

  private addSaturnRings(mesh: THREE.Mesh, radius: number): void {
    // Multiple ring layers for detail
    const ringData = [
      { inner: 1.2, outer: 1.5, color: '#a08060', opacity: 0.7 },
      { inner: 1.5, outer: 1.8, color: '#c0a080', opacity: 0.5 },
      { inner: 1.85, outer: 2.2, color: '#d0b090', opacity: 0.6 },
    ];

    for (const ring of ringData) {
      const geometry = new THREE.RingGeometry(radius * ring.inner, radius * ring.outer, 64);
      const material = new THREE.MeshBasicMaterial({
        color: ring.color,
        side: THREE.DoubleSide,
        transparent: true,
        opacity: ring.opacity,
      });
      const ringMesh = new THREE.Mesh(geometry, material);
      ringMesh.rotation.x = Math.PI / 2;
      mesh.add(ringMesh);
    }
  }

  private addUranusRings(mesh: THREE.Mesh, radius: number): void {
    // Uranus has thin, dark rings
    const geometry = new THREE.RingGeometry(radius * 1.5, radius * 1.7, 64);
    const material = new THREE.MeshBasicMaterial({
      color: '#404050',
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.3,
    });
    const ring = new THREE.Mesh(geometry, material);
    // Uranus is tilted ~98 degrees
    ring.rotation.x = Math.PI / 2;
    ring.rotation.z = Math.PI * 0.1;
    mesh.add(ring);
  }

  private createPlanetGlowTexture(colorHex: string): THREE.Texture {
    const canvas = document.createElement('canvas');
    canvas.width = 128;
    canvas.height = 128;
    const ctx = canvas.getContext('2d')!;

    const color = new THREE.Color(colorHex);
    const r = Math.floor(color.r * 255);
    const g = Math.floor(color.g * 255);
    const b = Math.floor(color.b * 255);

    const gradient = ctx.createRadialGradient(64, 64, 0, 64, 64, 64);
    gradient.addColorStop(0, `rgba(${r}, ${g}, ${b}, 1)`);
    gradient.addColorStop(0.2, `rgba(${r}, ${g}, ${b}, 0.6)`);
    gradient.addColorStop(0.5, `rgba(${r}, ${g}, ${b}, 0.2)`);
    gradient.addColorStop(1, `rgba(${r}, ${g}, ${b}, 0)`);

    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 128, 128);

    return new THREE.CanvasTexture(canvas);
  }

  private createOrbitLines(): void {
    for (const name of PLANET_NAMES) {
      const planet = PLANETS[name];
      const orbitPath = generateOrbitPath(planet, 128);

      const points = orbitPath.map(
        (p) =>
          new THREE.Vector3(
            unitToRender(p.x),
            unitToRender(p.z), // swap y/z for Three.js
            unitToRender(p.y)
          )
      );

      const geometry = new THREE.BufferGeometry().setFromPoints(points);
      const material = new THREE.LineBasicMaterial({
        color: new THREE.Color(planet.color),
        transparent: true,
        opacity: 0.25,
      });

      const line = new THREE.Line(geometry, material);
      this.scene.add(line);
      this.orbitLines.set(name, line);
    }
  }

  private createBall(): THREE.Object3D {
    // Create sleek alien invasion craft
    const shipGroup = new THREE.Group();
    const scale = 120;

    // Main hull - sleek metallic body
    const hullGeometry = new THREE.SphereGeometry(4 * scale, 48, 32);
    hullGeometry.scale(1, 0.25, 1);
    const hullMaterial = new THREE.MeshStandardMaterial({
      color: 0x2a3a4a,
      metalness: 0.9,
      roughness: 0.2,
      emissive: 0x1a2a3a,
      emissiveIntensity: 0.3,
    });
    const hull = new THREE.Mesh(hullGeometry, hullMaterial);
    shipGroup.add(hull);

    // Central command dome - glowing cyan
    const domeGeometry = new THREE.SphereGeometry(2 * scale, 32, 24, 0, Math.PI * 2, 0, Math.PI / 2);
    const domeMaterial = new THREE.MeshBasicMaterial({
      color: 0x00ffff,
      transparent: true,
      opacity: 0.85,
    });
    const dome = new THREE.Mesh(domeGeometry, domeMaterial);
    dome.position.y = 0.7 * scale;
    shipGroup.add(dome);

    // Inner dome light
    const innerDomeGeometry = new THREE.SphereGeometry(1.2 * scale, 24, 16, 0, Math.PI * 2, 0, Math.PI / 2);
    const innerDomeMaterial = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 0.5,
    });
    const innerDome = new THREE.Mesh(innerDomeGeometry, innerDomeMaterial);
    innerDome.position.y = 0.9 * scale;
    shipGroup.add(innerDome);

    // Bottom hull piece
    const bottomGeometry = new THREE.ConeGeometry(2 * scale, 1.5 * scale, 32);
    const bottomMaterial = new THREE.MeshStandardMaterial({
      color: 0x1a2a3a,
      metalness: 0.9,
      roughness: 0.3,
    });
    const bottom = new THREE.Mesh(bottomGeometry, bottomMaterial);
    bottom.rotation.x = Math.PI;
    bottom.position.y = -0.8 * scale;
    shipGroup.add(bottom);

    // Glowing propulsion ring
    const ringGeometry = new THREE.TorusGeometry(4.2 * scale, 0.4 * scale, 16, 48);
    const ringMaterial = new THREE.MeshBasicMaterial({
      color: 0x00ff88,
    });
    const ring = new THREE.Mesh(ringGeometry, ringMaterial);
    ring.rotation.x = Math.PI / 2;
    shipGroup.add(ring);

    // Outer accent ring
    const outerRingGeometry = new THREE.TorusGeometry(4.8 * scale, 0.15 * scale, 8, 48);
    const outerRingMaterial = new THREE.MeshBasicMaterial({
      color: 0xff4466,
    });
    const outerRing = new THREE.Mesh(outerRingGeometry, outerRingMaterial);
    outerRing.rotation.x = Math.PI / 2;
    shipGroup.add(outerRing);

    // Engine lights around the edge
    for (let i = 0; i < 12; i++) {
      const lightGeometry = new THREE.SphereGeometry(0.6 * scale, 12, 12);
      const isMainEngine = i % 3 === 0;
      const lightMaterial = new THREE.MeshBasicMaterial({
        color: isMainEngine ? 0x00ffff : 0xff6644,
      });
      const light = new THREE.Mesh(lightGeometry, lightMaterial);
      const angle = (i / 12) * Math.PI * 2;
      light.position.x = Math.cos(angle) * 4.5 * scale;
      light.position.z = Math.sin(angle) * 4.5 * scale;
      light.position.y = -0.3 * scale;
      shipGroup.add(light);
    }

    // Weapon arrays (front-facing)
    for (let i = -1; i <= 1; i += 2) {
      const weaponGeometry = new THREE.CylinderGeometry(0.3 * scale, 0.5 * scale, 2 * scale, 8);
      const weaponMaterial = new THREE.MeshStandardMaterial({
        color: 0x3a4a5a,
        metalness: 0.95,
        roughness: 0.1,
      });
      const weapon = new THREE.Mesh(weaponGeometry, weaponMaterial);
      weapon.rotation.x = Math.PI / 2;
      weapon.position.set(i * 2.5 * scale, 0, 3 * scale);
      shipGroup.add(weapon);

      // Weapon tip glow
      const tipGeometry = new THREE.SphereGeometry(0.4 * scale, 8, 8);
      const tipMaterial = new THREE.MeshBasicMaterial({ color: 0xff0044 });
      const tip = new THREE.Mesh(tipGeometry, tipMaterial);
      tip.position.set(i * 2.5 * scale, 0, 4 * scale);
      shipGroup.add(tip);
    }

    this.scene.add(shipGroup);

    // Engine glow effect below ship
    const engineGlowMaterial = new THREE.SpriteMaterial({
      map: this.createEngineGlowTexture(),
      color: 0x00ff88,
      transparent: true,
      blending: THREE.AdditiveBlending,
    });
    const engineGlow = new THREE.Sprite(engineGlowMaterial);
    engineGlow.scale.set(600, 600, 1);
    engineGlow.position.y = -50;
    shipGroup.add(engineGlow);

    // Main visibility glow
    const glowMaterial = new THREE.SpriteMaterial({
      map: this.createBallGlowTexture(),
      color: 0x44ff88,
      transparent: true,
      blending: THREE.AdditiveBlending,
    });
    const glow = new THREE.Sprite(glowMaterial);
    glow.scale.set(1000, 1000, 1);
    shipGroup.add(glow);

    return shipGroup;
  }

  private createEngineGlowTexture(): THREE.Texture {
    const canvas = document.createElement('canvas');
    canvas.width = 128;
    canvas.height = 128;
    const ctx = canvas.getContext('2d')!;

    const gradient = ctx.createRadialGradient(64, 64, 0, 64, 64, 64);
    gradient.addColorStop(0, 'rgba(0, 255, 136, 1)');
    gradient.addColorStop(0.3, 'rgba(0, 255, 136, 0.5)');
    gradient.addColorStop(0.6, 'rgba(0, 200, 100, 0.2)');
    gradient.addColorStop(1, 'rgba(0, 150, 80, 0)');

    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 128, 128);

    return new THREE.CanvasTexture(canvas);
  }

  private createBallGlowTexture(): THREE.Texture {
    const canvas = document.createElement('canvas');
    canvas.width = 128;
    canvas.height = 128;
    const ctx = canvas.getContext('2d')!;

    const gradient = ctx.createRadialGradient(64, 64, 0, 64, 64, 64);
    gradient.addColorStop(0, 'rgba(68, 255, 170, 1)');
    gradient.addColorStop(0.2, 'rgba(68, 255, 170, 0.6)');
    gradient.addColorStop(0.5, 'rgba(68, 255, 170, 0.2)');
    gradient.addColorStop(1, 'rgba(68, 255, 170, 0)');

    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 128, 128);

    return new THREE.CanvasTexture(canvas);
  }

  private createTrail(): { line: THREE.Line; geometry: THREE.BufferGeometry } {
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(TRAIL_MAX_POINTS * 3);
    const colors = new Float32Array(TRAIL_MAX_POINTS * 3);

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    geometry.setDrawRange(0, 0);

    const material = new THREE.LineBasicMaterial({
      vertexColors: true,
      transparent: true,
    });

    const line = new THREE.Line(geometry, material);
    this.scene.add(line);

    return { line, geometry };
  }

  private createAimLine(): THREE.Line {
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(2 * 3);
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    // Fallback thin line (mostly hidden, tube is primary)
    const material = new THREE.LineBasicMaterial({
      color: 0x00ff00,
      transparent: false,
    });

    const line = new THREE.Line(geometry, material);
    line.visible = false;
    this.scene.add(line);

    return line;
  }

  private createAimTube(): THREE.Mesh {
    // Create a cylinder that we'll reposition as the aim line
    // MASSIVE radius to be visible at interplanetary scale
    const geometry = new THREE.CylinderGeometry(500, 500, 1, 8); // HUGE - 500 render units radius
    const material = new THREE.MeshBasicMaterial({
      color: 0x00ff00,
    });

    const mesh = new THREE.Mesh(geometry, material);
    mesh.visible = false;
    this.scene.add(mesh);

    return mesh;
  }

  private createAimSprites(): void {
    // Create 20 sprites that will be positioned along the aim line
    // Sprites always face the camera, so they're always visible
    const spriteCount = 20;

    for (let i = 0; i < spriteCount; i++) {
      const spriteMaterial = new THREE.SpriteMaterial({
        map: this.createAimSpriteTexture(),
        color: 0x00ff00,
        transparent: true,
        blending: THREE.AdditiveBlending,
      });
      const sprite = new THREE.Sprite(spriteMaterial);
      sprite.scale.set(400, 400, 1); // Large sprites
      sprite.visible = false;
      this.scene.add(sprite);
      this.aimSprites.push(sprite);
    }
  }

  private createAimSpriteTexture(): THREE.Texture {
    const canvas = document.createElement('canvas');
    canvas.width = 64;
    canvas.height = 64;
    const ctx = canvas.getContext('2d')!;

    // Create a bright circle
    const gradient = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
    gradient.addColorStop(0, 'rgba(255, 255, 255, 1)');
    gradient.addColorStop(0.3, 'rgba(255, 255, 255, 0.8)');
    gradient.addColorStop(0.7, 'rgba(255, 255, 255, 0.3)');
    gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');

    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 64, 64);

    return new THREE.CanvasTexture(canvas);
  }

  private createSuggestedLine(): THREE.Line {
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(2 * 3);
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    const material = new THREE.LineDashedMaterial({
      color: 0xffaa44,
      transparent: true,
      opacity: 0.5,
      dashSize: 1,
      gapSize: 0.5,
    });

    const line = new THREE.Line(geometry, material);
    line.visible = false;
    this.scene.add(line);

    return line;
  }

  private createPreviewLine(): THREE.Line {
    const maxPoints = 100;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(maxPoints * 3);
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setDrawRange(0, 0);

    const material = new THREE.LineBasicMaterial({
      color: 0x44ffaa,
      transparent: true,
      opacity: 0.4,
    });

    const line = new THREE.Line(geometry, material);
    line.visible = false;
    this.scene.add(line);

    return line;
  }

  private createStartMarker(): THREE.Mesh {
    // HUGE pulsing ring around the start position
    const geometry = new THREE.RingGeometry(500, 800, 64); // 500-800 render units!
    const material = new THREE.MeshBasicMaterial({
      color: 0x44ffaa,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.8,
    });

    const mesh = new THREE.Mesh(geometry, material);
    mesh.rotation.x = -Math.PI / 2;
    this.scene.add(mesh);

    return mesh;
  }

  // Update methods

  public updatePlanetPositions(positions: Map<PlanetName, Vec3>, simTime?: number): void {
    for (const [name, pos] of positions) {
      const mesh = this.planetMeshes.get(name);
      if (mesh) {
        // Use visual positions (expanded inner orbits) if simTime provided
        const planet = PLANETS[name];
        const visualPos = simTime !== undefined 
          ? getBodyVisualPosition(planet, simTime)
          : pos;
        
        mesh.position.set(
          unitToRender(visualPos.x),
          unitToRender(visualPos.z), // swap y/z for Three.js coordinate system
          unitToRender(visualPos.y)
        );
      }
    }
  }

  public updateBallPosition(pos: Vec3): void {
    const renderX = unitToRender(pos.x);
    const renderY = unitToRender(pos.z); // physics z -> three.js y
    const renderZ = unitToRender(pos.y); // physics y -> three.js z

    this.ballMesh.position.set(renderX, renderY, renderZ);
  }

  public addTrailPoint(pos: Vec3): void {
    const point = new THREE.Vector3(
      unitToRender(pos.x),
      unitToRender(pos.z),
      unitToRender(pos.y)
    );

    this.trailPositions.push(point);

    // Limit trail length
    if (this.trailPositions.length > TRAIL_MAX_POINTS) {
      this.trailPositions.shift();
    }

    this.updateTrailGeometry();
  }

  private updateTrailGeometry(): void {
    const positions = this.trailGeometry.attributes.position.array as Float32Array;
    const colors = this.trailGeometry.attributes.color.array as Float32Array;

    const count = this.trailPositions.length;

    for (let i = 0; i < count; i++) {
      const p = this.trailPositions[i];
      positions[i * 3] = p.x;
      positions[i * 3 + 1] = p.y;
      positions[i * 3 + 2] = p.z;

      // Fade trail
      const t = i / count;
      const alpha = t < TRAIL_FADE_START ? t / TRAIL_FADE_START : 1;
      colors[i * 3] = 0.27 * alpha; // R
      colors[i * 3 + 1] = 1.0 * alpha; // G
      colors[i * 3 + 2] = 0.67 * alpha; // B
    }

    this.trailGeometry.attributes.position.needsUpdate = true;
    this.trailGeometry.attributes.color.needsUpdate = true;
    this.trailGeometry.setDrawRange(0, count);
  }

  public clearTrail(): void {
    this.trailPositions = [];
    this.trailGeometry.setDrawRange(0, 0);
  }

  public updateAimLine(start: Vec3, end: Vec3, visible: boolean, power: number = 0): void {
    this.aimLine.visible = false;
    this.aimTube.visible = false; // Don't use tube, use sprites instead

    // Hide all sprites first
    for (const sprite of this.aimSprites) {
      sprite.visible = false;
    }

    if (!visible) return;

    // Convert to render coordinates
    const startRender = new THREE.Vector3(
      unitToRender(start.x),
      unitToRender(start.z),
      unitToRender(start.y)
    );
    const endRender = new THREE.Vector3(
      unitToRender(end.x),
      unitToRender(end.z),
      unitToRender(end.y)
    );

    // Calculate color based on power: green (0%) -> yellow (50%) -> red (100%)
    let r: number, g: number, b: number;
    if (power < 0.5) {
      const t = power * 2;
      r = t; g = 1; b = 0;
    } else {
      const t = (power - 0.5) * 2;
      r = 1; g = 1 - t; b = 0;
    }

    // Position sprites along the line
    for (let i = 0; i < this.aimSprites.length; i++) {
      const t = i / (this.aimSprites.length - 1);
      const sprite = this.aimSprites[i];

      // Interpolate position
      sprite.position.lerpVectors(startRender, endRender, t);
      sprite.visible = true;

      // Scale sprites - larger toward the end, smaller at start
      const size = 200 + t * 600; // 200 to 800 render units
      sprite.scale.set(size, size, 1);

      // Set color
      (sprite.material as THREE.SpriteMaterial).color.setRGB(r, g, b);
    }

  }

  public updateSuggestedLine(_start: Vec3, _end: Vec3, _visible: boolean): void {
    // Suggested line removed - always hidden
    this.suggestedLine.visible = false;
  }

  public updatePreviewLine(points: Vec3[], visible: boolean): void {
    this.previewLine.visible = visible;
    if (!visible || points.length === 0) return;

    const positions = this.previewLine.geometry.attributes.position.array as Float32Array;
    const count = Math.min(points.length, 100);

    for (let i = 0; i < count; i++) {
      positions[i * 3] = unitToRender(points[i].x);
      positions[i * 3 + 1] = unitToRender(points[i].z);
      positions[i * 3 + 2] = unitToRender(points[i].y);
    }

    this.previewLine.geometry.attributes.position.needsUpdate = true;
    this.previewLine.geometry.setDrawRange(0, count);
  }

  public updateStartMarker(pos: Vec3): void {
    this.startMarker.position.set(
      unitToRender(pos.x),
      unitToRender(pos.z),
      unitToRender(pos.y)
    );
  }

  public setOrbitLinesVisible(visible: boolean): void {
    this.showOrbitLines = visible;
    for (const line of this.orbitLines.values()) {
      line.visible = visible;
    }
  }

  // Camera controls

  public focusBall(): void {
    const shipPos = this.ballMesh.position;

    // Ship at ~9000 render units from origin
    const shipDist = Math.sqrt(shipPos.x * shipPos.x + shipPos.y * shipPos.y + shipPos.z * shipPos.z);

    // Camera looks at a point between ship and sun (weighted toward ship)
    const lookWeight = 0.7; // 70% toward ship
    const lookAt = new THREE.Vector3(
      shipPos.x * lookWeight,
      shipPos.y * lookWeight,
      shipPos.z * lookWeight
    );

    this.controls.target.copy(lookAt);

    // Position camera above the scene, far enough to see everything
    // Camera should be roughly 1.5x the ship distance away, looking down at 45 degrees
    const camDist = Math.max(5000, shipDist * 1.2);

    // Camera above and to the side
    this.camera.position.set(
      lookAt.x,
      camDist, // High above
      lookAt.z + camDist * 0.5
    );

    this.controls.update();
  }

  public focusTarget(targetName: PlanetName): void {
    const mesh = this.planetMeshes.get(targetName);
    if (!mesh) return;

    const pos = mesh.position;
    this.controls.target.set(pos.x, pos.y, pos.z);

    // Position camera at a reasonable distance based on planet size
    const planet = PLANETS[targetName];
    const dist = this.getBodyRenderRadius(planet) * 8;
    this.camera.position.set(pos.x + dist, pos.y + dist * 0.5, pos.z + dist);
  }

  public resetView(): void {
    this.controls.target.set(0, 0, 0);
    this.camera.position.set(0, 3000, 5000);
    this.controls.update();
  }

  public focusSystem(): void {
    this.controls.target.set(0, 0, 0);
    this.camera.position.set(0, 3000, 5000);
    this.controls.update();
  }

  public followBall(): void {
    // Keep controls enabled - don't jarring change the view!
    // Just smoothly update the target to track the ball
    const shipPos = this.ballMesh.position;
    
    // Smoothly look at a point between ship and sun (60% toward ship)
    const targetX = shipPos.x * 0.6;
    const targetY = shipPos.y * 0.6;
    const targetZ = shipPos.z * 0.6;
    
    // Smooth interpolation toward target (lerp factor)
    const lerp = 0.05;
    this.controls.target.x += (targetX - this.controls.target.x) * lerp;
    this.controls.target.y += (targetY - this.controls.target.y) * lerp;
    this.controls.target.z += (targetZ - this.controls.target.z) * lerp;
    
    this.controls.update();
  }

  // Rendering

  private handleResize = (): void => {
    if (this.disposed) return;

    const container = this.renderer.domElement.parentElement;
    if (!container) return;

    const width = container.clientWidth;
    const height = container.clientHeight;

    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(width, height);
  };

  public render(): void {
    if (this.disposed) return;

    // Update controls for smooth damping
    this.controls.update();

    // Render the scene
    this.renderer.render(this.scene, this.camera);
  }

  public dispose(): void {
    this.disposed = true;
    window.removeEventListener('resize', this.handleResize);

    // CRITICAL: Remove the canvas from DOM so it doesn't block the new one!
    if (this.renderer.domElement.parentElement) {
      this.renderer.domElement.parentElement.removeChild(this.renderer.domElement);
      console.log('Canvas removed from DOM on dispose');
    }

    this.renderer.dispose();
    this.controls.dispose();
  }
}
