/**
 * Aiming system for Galactic Golf
 *
 * Handles mouse input for slingshot-style aim and launch
 */

import * as THREE from 'three';
import {
  Vec3,
  normalize,
  subtract,
  magnitude,
  scale,
  dot,
  add,
  lerp,
  copy,
} from '../sim/orbits';
import { BallState, updatePlanetPositions, velocityVerletStep } from '../sim/physics';
import { HoleDef } from '../sim/holes';
import { PlanetName } from '../sim/bodies';
import { toMeters } from '../sim/units';

export interface AimState {
  isAiming: boolean;
  isDragging: boolean;
  startScreenPos: { x: number; y: number } | null;
  currentScreenPos: { x: number; y: number } | null;
  aimDirection: Vec3 | null;
  power: number; // 0 to 1
  velocity: Vec3 | null;
}

// Power mapping constants
const MIN_DRAG_PIXELS = 5; // Reduced from 20 to make it easier to trigger
const MAX_DRAG_PIXELS = 300;

// Aim assist constants
const AIM_ASSIST_ANGLE_THRESHOLD = 70 * (Math.PI / 180); // 70 degrees in radians
const AIM_ASSIST_LERP_FACTOR = 0.12;

// Preview constants
const PREVIEW_SIM_TIME = 3; // seconds of sim time
const PREVIEW_STEPS = 50;

export class AimController {
  private camera: THREE.Camera;
  private domElement: HTMLElement;
  private raycaster: THREE.Raycaster;

  public state: AimState = {
    isAiming: false,
    isDragging: false,
    startScreenPos: null,
    currentScreenPos: null,
    aimDirection: null,
    power: 0,
    velocity: null,
  };

  private ballStartPosition: Vec3 = { x: 0, y: 0, z: 0 };
  private speedHint = { min: 0, max: 0, recommended: 0 };
  private targetPosition: Vec3 | null = null;
  private aimAssistEnabled: boolean = true;

  private onLaunch: ((velocity: Vec3) => void) | null = null;

  constructor(camera: THREE.Camera, domElement: HTMLElement) {
    this.camera = camera;
    this.domElement = domElement;
    this.raycaster = new THREE.Raycaster();

    this.bindEvents();
  }

  private bindEvents(): void {
    // Bind to document so events work even with overlays
    document.addEventListener('mousedown', this.handleMouseDown);
    document.addEventListener('mousemove', this.handleMouseMove);
    document.addEventListener('mouseup', this.handleMouseUp);

    // Touch support
    document.addEventListener('touchstart', this.handleTouchStart, { passive: false });
    document.addEventListener('touchmove', this.handleTouchMove, { passive: false });
    document.addEventListener('touchend', this.handleTouchEnd);
  }

  public setHoleConfig(
    startPos: Vec3,
    speedHint: { min: number; max: number; recommended: number },
    targetPos: Vec3
  ): void {
    this.ballStartPosition = copy(startPos);
    this.speedHint = speedHint;
    this.targetPosition = copy(targetPos);
  }

  public updateTargetPosition(targetPos: Vec3): void {
    this.targetPosition = copy(targetPos);
  }

  public setAimAssistEnabled(enabled: boolean): void {
    this.aimAssistEnabled = enabled;
  }

  public setOnLaunch(callback: (velocity: Vec3) => void): void {
    this.onLaunch = callback;
  }

  public enableAiming(): void {
    this.state.isAiming = true;
    console.log('Aiming ENABLED - click and drag to aim');
  }

  public disableAiming(): void {
    this.state.isAiming = false;
    this.state.isDragging = false;
    this.state.aimDirection = null;
    this.state.velocity = null;
  }

  private handleMouseDown = (event: MouseEvent): void => {
    console.log('mousedown', { isAiming: this.state.isAiming, button: event.button });
    if (!this.state.isAiming || event.button !== 0) return;

    this.state.isDragging = true;
    this.state.startScreenPos = { x: event.clientX, y: event.clientY };
    this.state.currentScreenPos = { x: event.clientX, y: event.clientY };
    console.log('Started dragging');
  };

  private handleMouseMove = (event: MouseEvent): void => {
    if (!this.state.isDragging) return;

    this.state.currentScreenPos = { x: event.clientX, y: event.clientY };
    this.updateAimFromDrag();
  };

  private handleMouseUp = (_event: MouseEvent): void => {
    console.log('mouseup', { isDragging: this.state.isDragging, velocity: this.state.velocity });
    if (!this.state.isDragging) {
      return;
    }

    // Use computed velocity, or fallback to default if none
    let launchVelocity = this.state.velocity;

    if (!launchVelocity) {
      // Fallback: launch towards the target with recommended speed
      console.log('Using fallback velocity');
      if (this.targetPosition) {
        const dir = normalize(subtract(this.targetPosition, this.ballStartPosition));
        launchVelocity = scale(dir, this.speedHint.recommended || 10000);
      } else {
        // Ultimate fallback: just go in +x direction
        launchVelocity = { x: this.speedHint.recommended || 10000, y: 0, z: 0 };
      }
    }

    console.log('Launching with velocity:', launchVelocity);
    if (launchVelocity && this.onLaunch) {
      this.onLaunch(launchVelocity);
    }

    this.state.isDragging = false;
    this.state.startScreenPos = null;
    this.state.currentScreenPos = null;
    this.state.aimDirection = null;
    this.state.power = 0;
    this.state.velocity = null;
  };

  private handleMouseLeave = (): void => {
    if (this.state.isDragging) {
      this.state.isDragging = false;
      this.state.startScreenPos = null;
      this.state.currentScreenPos = null;
      this.state.aimDirection = null;
      this.state.power = 0;
      this.state.velocity = null;
    }
  };

  // Touch handlers
  private handleTouchStart = (event: TouchEvent): void => {
    if (!this.state.isAiming || event.touches.length !== 1) return;

    const touch = event.touches[0];
    this.state.isDragging = true;
    this.state.startScreenPos = { x: touch.clientX, y: touch.clientY };
    this.state.currentScreenPos = { x: touch.clientX, y: touch.clientY };
  };

  private handleTouchMove = (event: TouchEvent): void => {
    if (!this.state.isDragging || event.touches.length !== 1) return;

    event.preventDefault();
    const touch = event.touches[0];
    this.state.currentScreenPos = { x: touch.clientX, y: touch.clientY };
    this.updateAimFromDrag();
  };

  private handleTouchEnd = (): void => {
    if (!this.state.isDragging) return;

    if (this.state.velocity && this.onLaunch) {
      this.onLaunch(this.state.velocity);
    }

    this.state.isDragging = false;
    this.state.startScreenPos = null;
    this.state.currentScreenPos = null;
    this.state.aimDirection = null;
    this.state.power = 0;
    this.state.velocity = null;
  };

  private updateAimFromDrag(): void {
    if (!this.state.startScreenPos || !this.state.currentScreenPos) {
      return;
    }

    const dx = this.state.currentScreenPos.x - this.state.startScreenPos.x;
    const dy = this.state.currentScreenPos.y - this.state.startScreenPos.y;
    const dragLength = Math.sqrt(dx * dx + dy * dy);

    if (dragLength < MIN_DRAG_PIXELS) {
      this.state.aimDirection = null;
      this.state.power = 0;
      this.state.velocity = null;
      return;
    }

    // Convert drag to 3D direction using ecliptic plane
    // Drag direction is opposite to launch direction (slingshot style)
    const normalizedDx = -dx / dragLength;
    const normalizedDy = dy / dragLength; // Invert Y since screen Y is down

    // Create direction in physics coordinates (ecliptic plane, z=0)
    let finalDir: Vec3 = normalize({
      x: normalizedDx,
      y: normalizedDy,
      z: 0
    });

    // Apply aim assist if enabled
    if (this.aimAssistEnabled && this.targetPosition) {
      finalDir = this.applyAimAssist(finalDir);
    }

    this.state.aimDirection = finalDir;

    // Map drag length to power (0 to 1)
    this.state.power = Math.min(
      1,
      Math.max(0, (dragLength - MIN_DRAG_PIXELS) / (MAX_DRAG_PIXELS - MIN_DRAG_PIXELS))
    );

    // Compute velocity based on power and speed hint
    const speed =
      this.speedHint.min + this.state.power * (this.speedHint.max - this.speedHint.min);
    this.state.velocity = scale(finalDir, speed);
  }

  // Note: This method is currently unused - using simplified direction calculation instead
  private screenDragToWorldDir(screenDx: number, screenDy: number): Vec3 {
    // Get camera's right and up vectors in world space
    const cameraRight = new THREE.Vector3();
    const cameraUp = new THREE.Vector3();

    this.camera.getWorldDirection(new THREE.Vector3());
    cameraRight.setFromMatrixColumn(this.camera.matrixWorld, 0);
    cameraUp.setFromMatrixColumn(this.camera.matrixWorld, 1);

    // Project onto ecliptic plane (z=0 in physics coordinates, y=0 in Three.js)
    let eclipticRight = new THREE.Vector3(cameraRight.x, 0, cameraRight.z);
    let eclipticForward = new THREE.Vector3(cameraUp.x, 0, cameraUp.z);

    // If vectors are too small (camera looking straight down), use defaults
    if (eclipticRight.length() < 0.01) {
      eclipticRight.set(1, 0, 0);
    } else {
      eclipticRight.normalize();
    }

    if (eclipticForward.length() < 0.01) {
      eclipticForward.set(0, 0, 1);
    } else {
      eclipticForward.normalize();
    }

    // Combine based on screen drag
    const worldDir = new THREE.Vector3()
      .addScaledVector(eclipticRight, screenDx)
      .addScaledVector(eclipticForward, -screenDy);

    // Handle edge case where drag is zero
    if (worldDir.length() < 0.001) {
      return { x: 1, y: 0, z: 0 };
    }

    worldDir.normalize();

    // Convert from Three.js (x, y, z) to physics (x, z, y)
    return {
      x: worldDir.x,
      y: worldDir.z,
      z: worldDir.y,
    };
  }

  private applyAimAssist(playerDir: Vec3): Vec3 {
    if (!this.targetPosition) return playerDir;

    // Direction to target projected onto ecliptic plane
    const toTarget = subtract(this.targetPosition, this.ballStartPosition);
    const toTargetFlat: Vec3 = { x: toTarget.x, y: toTarget.y, z: 0 };
    const toTargetDir = normalize(toTargetFlat);

    // Check angle between player direction and target direction
    const playerDirFlat: Vec3 = { x: playerDir.x, y: playerDir.y, z: 0 };
    const playerDirNorm = normalize(playerDirFlat);

    const dotProduct = dot(playerDirNorm, toTargetDir);
    const angle = Math.acos(Math.min(1, Math.max(-1, dotProduct)));

    // Only assist if within threshold
    if (angle < AIM_ASSIST_ANGLE_THRESHOLD) {
      // Lerp towards target direction
      const assisted = lerp(playerDir, toTargetDir, AIM_ASSIST_LERP_FACTOR);
      return normalize(assisted);
    }

    return playerDir;
  }

  /**
   * Get suggested direction to target (for UI display)
   */
  public getSuggestedDirection(): Vec3 | null {
    if (!this.targetPosition) return null;

    const toTarget = subtract(this.targetPosition, this.ballStartPosition);
    return normalize(toTarget);
  }

  /**
   * Generate preview trajectory
   */
  public getPreviewTrajectory(simTime: number): Vec3[] {
    if (!this.state.velocity) return [];

    const points: Vec3[] = [];
    const ball: BallState = {
      position: copy(this.ballStartPosition),
      velocity: copy(this.state.velocity),
    };

    // Get planet positions at current sim time (frozen for preview)
    const planetPositions = updatePlanetPositions(simTime);

    // Simulate for PREVIEW_SIM_TIME
    const dtSim = (PREVIEW_SIM_TIME * 1_000_000) / PREVIEW_STEPS; // Adjust for time scale
    let currentBall = ball;

    for (let i = 0; i < PREVIEW_STEPS; i++) {
      points.push(copy(currentBall.position));
      currentBall = velocityVerletStep(currentBall, planetPositions, dtSim);
    }

    return points;
  }

  /**
   * Get aim line endpoints for visualization - SLINGSHOT STYLE
   * The line shows the drag direction (opposite of launch direction)
   */
  public getAimLineEndpoints(): { start: Vec3; end: Vec3 } | null {
    if (!this.state.aimDirection) return null;

    // Line in OPPOSITE direction (slingshot: pull back to launch forward)
    const dragDirection = scale(this.state.aimDirection, -1);

    // Line length is proportional to distance from origin (where the sun is)
    // This makes the line visible regardless of how far away the ship is
    const distFromOrigin = magnitude(this.ballStartPosition);
    const minLength = distFromOrigin * 0.2;  // 20% of distance at min power
    const maxLength = distFromOrigin * 0.8;  // 80% of distance at max power
    const lineLength = minLength + (maxLength - minLength) * this.state.power;
    const end = add(this.ballStartPosition, scale(dragDirection, lineLength));

    return {
      start: this.ballStartPosition,
      end,
    };
  }

  /**
   * Get suggested line endpoints
   */
  public getSuggestedLineEndpoints(): { start: Vec3; end: Vec3 } | null {
    const dir = this.getSuggestedDirection();
    if (!dir) return null;

    // Much longer line to be visible at interplanetary scale (ship at ~9000 render units)
    const lineLength = toMeters(4000);
    const end = add(this.ballStartPosition, scale(dir, lineLength));

    return {
      start: this.ballStartPosition,
      end,
    };
  }

  public dispose(): void {
    document.removeEventListener('mousedown', this.handleMouseDown);
    document.removeEventListener('mousemove', this.handleMouseMove);
    document.removeEventListener('mouseup', this.handleMouseUp);
    document.removeEventListener('touchstart', this.handleTouchStart);
    document.removeEventListener('touchmove', this.handleTouchMove);
    document.removeEventListener('touchend', this.handleTouchEnd);
  }
}
