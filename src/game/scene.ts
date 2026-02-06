/**
 * Three.js scene setup for Galactic Golf
 */

import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { SUN, PLANETS, PlanetName, PLANET_NAMES, CelestialBody, VISUAL_RADIUS_MULTIPLIER, SUN_VISUAL_RADIUS_MULTIPLIER } from './sim/bodies';
import { Vec3, generateOrbitPath } from './sim/orbits';
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
    // MINIMUM 15 render units - every planet must be clearly visible!
    // This ensures even Mercury is a decent size on screen
    return Math.max(15.0, baseRadius);
  }

  private createPlanets(): void {
    for (const name of PLANET_NAMES) {
      const planet = PLANETS[name];
      const renderRadius = this.getBodyRenderRadius(planet);

      const geometry = new THREE.SphereGeometry(renderRadius, 24, 24);
      const material = new THREE.MeshStandardMaterial({
        color: new THREE.Color(planet.color),
        roughness: 0.8,
        metalness: 0.1,
      });

      const mesh = new THREE.Mesh(geometry, material);
      this.scene.add(mesh);
      this.planetMeshes.set(name, mesh);

      // Add rings for Saturn
      if (name === 'Saturn') {
        const ringGeometry = new THREE.RingGeometry(
          renderRadius * 1.4,
          renderRadius * 2.2,
          64
        );
        const ringMaterial = new THREE.MeshBasicMaterial({
          color: 0xd4a574,
          side: THREE.DoubleSide,
          transparent: true,
          opacity: 0.6,
        });
        const ring = new THREE.Mesh(ringGeometry, ringMaterial);
        ring.rotation.x = Math.PI / 2;
        mesh.add(ring);
      }
    }
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
    // Create alien UFO spaceship - MASSIVELY scaled for visibility at interplanetary distances!
    const shipGroup = new THREE.Group(); // Must be Group, not Mesh!
    const scale = 100; // HUGE scale factor - 100x bigger than before

    // Main saucer body (flattened sphere)
    const saucerGeometry = new THREE.SphereGeometry(4 * scale, 32, 16);
    saucerGeometry.scale(1, 0.3, 1);
    const saucerMaterial = new THREE.MeshBasicMaterial({
      color: 0x44ff88,
    });
    const saucer = new THREE.Mesh(saucerGeometry, saucerMaterial);
    shipGroup.add(saucer);

    // Cockpit dome on top
    const domeGeometry = new THREE.SphereGeometry(2 * scale, 24, 16, 0, Math.PI * 2, 0, Math.PI / 2);
    const domeMaterial = new THREE.MeshBasicMaterial({
      color: 0x88ffff,
      transparent: true,
      opacity: 0.7,
    });
    const dome = new THREE.Mesh(domeGeometry, domeMaterial);
    dome.position.y = 0.8 * scale;
    shipGroup.add(dome);

    // Glowing ring around the saucer
    const ringGeometry = new THREE.TorusGeometry(4.5 * scale, 0.8 * scale, 8, 32);
    const ringMaterial = new THREE.MeshBasicMaterial({
      color: 0xff4444,
    });
    const ring = new THREE.Mesh(ringGeometry, ringMaterial);
    ring.rotation.x = Math.PI / 2;
    shipGroup.add(ring);

    // Pulsing lights around the edge
    for (let i = 0; i < 8; i++) {
      const lightGeometry = new THREE.SphereGeometry(1 * scale, 8, 8);
      const lightMaterial = new THREE.MeshBasicMaterial({
        color: i % 2 === 0 ? 0xff0000 : 0x00ff00,
      });
      const light = new THREE.Mesh(lightGeometry, lightMaterial);
      const angle = (i / 8) * Math.PI * 2;
      light.position.x = Math.cos(angle) * 4.5 * scale;
      light.position.z = Math.sin(angle) * 4.5 * scale;
      light.position.y = 0;
      shipGroup.add(light);
    }

    this.scene.add(shipGroup);

    // Add HUGE glow sprite for visibility at interplanetary scale
    const glowMaterial = new THREE.SpriteMaterial({
      map: this.createBallGlowTexture(),
      color: 0x44ff88,
      transparent: true,
      blending: THREE.AdditiveBlending,
    });
    const glow = new THREE.Sprite(glowMaterial);
    glow.scale.set(800, 800, 1); // 10x bigger glow
    shipGroup.add(glow);

    return shipGroup;
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

  public updatePlanetPositions(positions: Map<PlanetName, Vec3>): void {
    for (const [name, pos] of positions) {
      const mesh = this.planetMeshes.get(name);
      if (mesh) {
        mesh.position.set(
          unitToRender(pos.x),
          unitToRender(pos.z), // swap y/z for Three.js coordinate system
          unitToRender(pos.y)
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
    // DEBUG: Disable OrbitControls completely and set camera manually
    this.controls.enabled = false;

    const shipPos = this.ballMesh.position;

    // Debug camera info occasionally
    if (Math.random() < 0.02) {
      console.log('=== CAMERA DEBUG ===');
      console.log('Ship mesh position:', shipPos.toArray().map(v => v.toFixed(0)));
      console.log('Camera position:', this.camera.position.toArray().map(v => v.toFixed(0)));
    }

    // Set camera to fixed position looking at origin
    // This way we should clearly see the ship moving toward sun
    this.camera.position.set(0, 15000, 15000); // High above, looking down
    this.camera.lookAt(0, 0, 0); // Look at sun/origin
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
