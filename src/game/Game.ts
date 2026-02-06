/**
 * Main game controller for Galactic Golf
 *
 * Manages the simulation loop, hole progression, and game state
 */

import { GameScene } from './scene';
import { AimController } from './input/aim';
import {
  BallState,
  physicsUpdate,
  updatePlanetPositions,
  physicsHealthCheck,
} from './sim/physics';
import { checkCollisions, CollisionResult, getLandingPosition } from './sim/collisions';
import { HOLES, HoleDef, TOTAL_HOLES, getHole } from './sim/holes';
import { PLANETS, PlanetName } from './sim/bodies';
import { Vec3, copy, getBodyPosition, subtract } from './sim/orbits';
import {
  DEFAULT_TIME_SCALE,
  MIN_TIME_SCALE,
  MAX_TIME_SCALE,
  MIN_DT_SIM,
  MAX_DT_SIM,
  ATTEMPT_TIMEOUT_REAL_SECONDS,
} from './sim/units';

export type GamePhase = 'aiming' | 'simulating' | 'success' | 'fail' | 'scorecard';

export interface HoleScore {
  holeId: number;
  strokes: number;
  par: number;
}

export interface GameState {
  phase: GamePhase;
  currentHole: number;
  strokes: number;
  bumpsThisAttempt: number;
  scores: HoleScore[];
  timeScale: number;
  aimAssistEnabled: boolean;
  orbitLinesEnabled: boolean;
  hintsEnabled: boolean;
  lastToast: string | null;
  toastTimestamp: number;
}

export class Game {
  private scene: GameScene;
  private aimController: AimController;

  // Game state
  public state: GameState;

  // Simulation state
  private ball: BallState;
  private simTime: number = 0;
  private realTimeElapsed: number = 0;
  private lastFrameTime: number = 0;
  private animationId: number | null = null;

  // Current hole
  private currentHoleDef: HoleDef;

  // Callbacks for React state sync
  private onStateChange: ((state: GameState) => void) | null = null;

  constructor(container: HTMLElement) {
    // Initialize scene
    this.scene = new GameScene(container);

    // Initialize aim controller
    this.aimController = new AimController(this.scene.camera, this.scene.renderer.domElement);
    this.aimController.setOnLaunch(this.handleLaunch.bind(this));

    // Initialize state
    this.state = {
      phase: 'aiming',
      currentHole: 1,
      strokes: 0,
      bumpsThisAttempt: 0,
      scores: [],
      timeScale: DEFAULT_TIME_SCALE,
      aimAssistEnabled: true,
      orbitLinesEnabled: true,
      hintsEnabled: true,
      lastToast: null,
      toastTimestamp: 0,
    };

    // Initialize ball
    this.ball = {
      position: { x: 0, y: 0, z: 0 },
      velocity: { x: 0, y: 0, z: 0 },
    };

    // Load first hole
    this.currentHoleDef = HOLES[0];
    this.setupHole(this.currentHoleDef);

    // Run health check
    const health = physicsHealthCheck();
    if (!health.ok) {
      console.error('Physics health check failed:', health.message);
      this.showToast(`Error: ${health.message}`);
    }

    // Start render loop
    this.startLoop();
  }

  public setOnStateChange(callback: (state: GameState) => void): void {
    this.onStateChange = callback;
    callback(this.state);
  }

  private notifyStateChange(): void {
    if (this.onStateChange) {
      this.onStateChange({ ...this.state });
    }
  }

  private showToast(message: string): void {
    this.state.lastToast = message;
    this.state.toastTimestamp = Date.now();
    this.notifyStateChange();
  }

  private setupHole(hole: HoleDef): void {
    this.currentHoleDef = hole;
    this.simTime = hole.timeOffsetSeconds;
    this.realTimeElapsed = 0;
    this.state.bumpsThisAttempt = 0;

    // Position ball at start
    this.ball.position = copy(hole.startPositionMeters);
    this.ball.velocity = { x: 0, y: 0, z: 0 };

    const distFromSun = Math.sqrt(
      this.ball.position.x ** 2 +
      this.ball.position.y ** 2 +
      this.ball.position.z ** 2
    ) / 1.496e11; // Convert to AU

    console.log('=== SETTING UP HOLE ===');
    console.log('Hole:', hole.name);
    console.log('Target:', hole.target);
    console.log('Ship distance from Sun:', distFromSun.toFixed(1), 'AU');
    console.log('Speed range:', (hole.speedHint.min / 1000).toFixed(0), '-', (hole.speedHint.max / 1000).toFixed(0), 'km/s');

    // Update scene
    const planetPositions = updatePlanetPositions(this.simTime);
    this.scene.updatePlanetPositions(planetPositions, this.simTime);
    this.scene.updateBallPosition(this.ball.position);
    this.scene.updateStartMarker(this.ball.position);
    this.scene.startMarker.visible = true; // Show start marker during aiming

    console.log('Planet positions:', Object.fromEntries(planetPositions));
    this.scene.clearTrail();

    // Get target position for aim assist
    const targetPos = getBodyPosition(PLANETS[hole.target], this.simTime);

    // Configure aim controller
    this.aimController.setHoleConfig(hole.startPositionMeters, hole.speedHint, targetPos);
    this.aimController.enableAiming();

    // Always focus on ball first so player can see where to aim from
    this.scene.focusBall();

    // DEBUG: Auto-launch disabled for simple movement test
    // setTimeout(() => {
    //   if (this.state.phase === 'aiming') {
    //     console.log('=== DEBUG AUTO-LAUNCH ===');
    //     // Calculate direction toward sun (origin)
    //     const dirX = -this.ball.position.x;
    //     const dirY = -this.ball.position.y;
    //     const dirZ = -this.ball.position.z;
    //     const mag = Math.sqrt(dirX * dirX + dirY * dirY + dirZ * dirZ);

    //     // Launch at 500 km/s toward sun
    //     const speed = 500_000; // 500 km/s
    //     const velocity = {
    //       x: (dirX / mag) * speed,
    //       y: (dirY / mag) * speed,
    //       z: (dirZ / mag) * speed,
    //     };

    //     console.log('Auto-launching toward sun at', speed / 1000, 'km/s');
    //     console.log('Initial position:', this.ball.position);
    //     console.log('Velocity:', velocity);

    //     this.handleLaunch(velocity);
    //   }
    // }, 2000);
  }

  private handleLaunch(velocity: Vec3): void {
    const speed = Math.sqrt(velocity.x ** 2 + velocity.y ** 2 + velocity.z ** 2);
    console.log('=== LAUNCHING ===');
    console.log('Speed:', (speed / 1000).toFixed(0), 'km/s');

    if (this.state.phase !== 'aiming') {
      console.log('Not in aiming phase, ignoring');
      return;
    }

    this.ball.velocity = copy(velocity);
    this.state.strokes += 1;
    this.state.phase = 'simulating';
    this.realTimeElapsed = 0;
    this.aimController.disableAiming();

    // Hide all aim visualization when launching
    this.scene.updateAimLine({ x: 0, y: 0, z: 0 }, { x: 0, y: 0, z: 0 }, false, 0);
    this.scene.updatePreviewLine([], false);
    this.scene.startMarker.visible = false; // Hide start marker too

    console.log('Launch successful! Phase:', this.state.phase);
    this.notifyStateChange();
  }

  private startLoop(): void {
    this.lastFrameTime = performance.now();
    this.loop();
  }

  private loop = (): void => {
    this.animationId = requestAnimationFrame(this.loop);

    const now = performance.now();
    const realDt = (now - this.lastFrameTime) / 1000; // seconds
    this.lastFrameTime = now;

    // Update based on phase
    if (this.state.phase === 'simulating') {
      this.updateSimulation(realDt);
    } else if (this.state.phase === 'aiming') {
      this.updateAiming();
      // Advance simTime during aiming at the SAME time scale as simulation
      // User can adjust via the Time Scale slider in the top right
      this.simTime += realDt * this.state.timeScale;
    }

    // Always update planet positions for display
    const planetPositions = updatePlanetPositions(this.simTime);
    this.scene.updatePlanetPositions(planetPositions, this.simTime);

    // Render
    this.scene.render();
  };

  private updateSimulation(realDt: number): void {
    // Update real time elapsed
    this.realTimeElapsed += realDt;

    const AU = 1.496e11;
    const RENDER_SCALE = 1e9;

    // Log EVERY frame for debugging
    const distFromSun = Math.sqrt(
      this.ball.position.x ** 2 +
      this.ball.position.y ** 2 +
      this.ball.position.z ** 2
    );
    const speed = Math.sqrt(
      this.ball.velocity.x ** 2 +
      this.ball.velocity.y ** 2 +
      this.ball.velocity.z ** 2
    );

    // Log every 0.5 seconds
    if (Math.floor(this.realTimeElapsed * 2) !== Math.floor((this.realTimeElapsed - realDt) * 2)) {
      console.log('=== SIMULATION FRAME ===');
      console.log('Distance from Sun:', (distFromSun / AU).toFixed(2), 'AU');
      console.log('Speed:', (speed / 1000).toFixed(0), 'km/s');
      console.log('Ball position (meters):', {
        x: this.ball.position.x.toExponential(2),
        y: this.ball.position.y.toExponential(2),
        z: this.ball.position.z.toExponential(2)
      });
      console.log('Ball position (render units):', {
        x: (this.ball.position.x / RENDER_SCALE).toFixed(0),
        y: (this.ball.position.y / RENDER_SCALE).toFixed(0),
        z: (this.ball.position.z / RENDER_SCALE).toFixed(0)
      });
      console.log('Ball mesh position:', this.scene.ballMesh.position.toArray().map(v => v.toFixed(0)));
      console.log('Real time elapsed:', this.realTimeElapsed.toFixed(1), 's');
    }

    // Check timeout
    if (this.realTimeElapsed > ATTEMPT_TIMEOUT_REAL_SECONDS) {
      this.handleFail('Time limit exceeded');
      return;
    }

    // Calculate simulation timestep
    let dtSim = realDt * this.state.timeScale;
    dtSim = Math.max(MIN_DT_SIM, Math.min(MAX_DT_SIM, dtSim));

    // Run physics
    const result = physicsUpdate(this.ball, dtSim, this.simTime);
    this.ball = result.ball;
    this.simTime = result.newSimTime;

    // Check collisions
    const collision = checkCollisions(
      this.ball,
      this.currentHoleDef.target,
      result.planetPositions,
      this.state.bumpsThisAttempt
    );

    this.handleCollision(collision, result.planetPositions);

    // Update visuals
    this.scene.updateBallPosition(this.ball.position);
    this.scene.addTrailPoint(this.ball.position);

    // Camera follows ball during simulation
    this.scene.followBall();
  }

  private handleCollision(
    collision: CollisionResult,
    planetPositions: Map<PlanetName, Vec3>
  ): void {
    switch (collision.type) {
      case 'target_captured':
        this.handleSuccess(collision.planet, planetPositions);
        break;

      case 'bounce':
        this.ball = collision.newBall;
        this.state.bumpsThisAttempt += 1;
        this.showToast('Gravity assist!');
        break;

      case 'sun_fail':
        this.handleFail('Incinerated!');
        break;

      case 'deep_space_rescue':
        this.handleFail('Lost in deep space — reset');
        break;

      case 'bounds_fail':
        this.handleFail('Out of bounds');
        break;

      case 'max_bumps':
        this.handleFail('Too many collisions');
        break;

      case 'none':
        // Continue simulation
        break;
    }
  }

  private handleSuccess(
    planet: PlanetName,
    planetPositions: Map<PlanetName, Vec3>
  ): void {
    this.state.phase = 'success';

    // Record score
    this.state.scores.push({
      holeId: this.state.currentHole,
      strokes: this.state.strokes,
      par: this.currentHoleDef.par,
    });

    // Move ball to landing position
    const planetPos = planetPositions.get(planet)!;
    const approachDir = subtract(this.ball.position, planetPos);
    const landingPos = getLandingPosition(
      planetPos,
      PLANETS[planet].radius,
      approachDir
    );
    this.ball.position = landingPos;
    this.scene.updateBallPosition(this.ball.position);

    this.showToast(`Captured by ${planet}!`);
    this.notifyStateChange();
  }

  private handleFail(reason: string): void {
    this.state.phase = 'fail';
    this.showToast(reason);
    this.notifyStateChange();

    // Auto-reset after short delay
    setTimeout(() => {
      this.resetShot();
    }, 1500);
  }

  private updateAiming(): void {
    const aimState = this.aimController.state;

    // Update target position as planets move (for aim assist)
    const targetPos = getBodyPosition(PLANETS[this.currentHoleDef.target], this.simTime);
    this.aimController.updateTargetPosition(targetPos);

    // Update aim line with power-based coloring
    const aimEndpoints = this.aimController.getAimLineEndpoints();
    if (aimEndpoints) {
      this.scene.updateAimLine(aimEndpoints.start, aimEndpoints.end, true, aimState.power);
    } else {
      this.scene.updateAimLine({ x: 0, y: 0, z: 0 }, { x: 0, y: 0, z: 0 }, false, 0);
    }

    // Suggested line removed - user found it confusing

    // Update preview line
    if (aimState.isDragging && aimState.velocity) {
      const previewPoints = this.aimController.getPreviewTrajectory(this.simTime);
      this.scene.updatePreviewLine(previewPoints, true);
    } else {
      this.scene.updatePreviewLine([], false);
    }
  }

  // Public control methods

  public resetShot(): void {
    this.state.phase = 'aiming';
    this.state.bumpsThisAttempt = 0;
    this.setupHole(this.currentHoleDef);
    this.notifyStateChange();
  }

  public nextHole(): void {
    if (this.state.currentHole >= TOTAL_HOLES) {
      // Show scorecard
      this.state.phase = 'scorecard';
      this.notifyStateChange();
      return;
    }

    this.state.currentHole += 1;
    this.state.strokes = 0;
    this.state.phase = 'aiming';

    const nextHole = getHole(this.state.currentHole);
    if (nextHole) {
      this.setupHole(nextHole);
    }

    this.notifyStateChange();
  }

  public restartGame(): void {
    this.state = {
      phase: 'aiming',
      currentHole: 1,
      strokes: 0,
      bumpsThisAttempt: 0,
      scores: [],
      timeScale: this.state.timeScale,
      aimAssistEnabled: this.state.aimAssistEnabled,
      orbitLinesEnabled: this.state.orbitLinesEnabled,
      hintsEnabled: this.state.hintsEnabled,
      lastToast: null,
      toastTimestamp: 0,
    };

    this.setupHole(HOLES[0]);
    this.notifyStateChange();
  }

  public setTimeScale(scale: number): void {
    this.state.timeScale = Math.max(MIN_TIME_SCALE, Math.min(MAX_TIME_SCALE, scale));
    this.notifyStateChange();
  }

  public setAimAssist(enabled: boolean): void {
    this.state.aimAssistEnabled = enabled;
    this.aimController.setAimAssistEnabled(enabled);
    this.notifyStateChange();
  }

  public setOrbitLines(enabled: boolean): void {
    this.state.orbitLinesEnabled = enabled;
    this.scene.setOrbitLinesVisible(enabled);
    this.notifyStateChange();
  }

  public setHints(enabled: boolean): void {
    this.state.hintsEnabled = enabled;
    this.notifyStateChange();
  }

  public focusBall(): void {
    this.scene.focusBall();
  }

  public focusTarget(): void {
    this.scene.focusTarget(this.currentHoleDef.target);
  }

  public resetView(): void {
    this.scene.resetView();
  }

  public getCurrentHoleDef(): HoleDef {
    return this.currentHoleDef;
  }

  public getAimState() {
    return this.aimController.state;
  }

  public dispose(): void {
    if (this.animationId !== null) {
      cancelAnimationFrame(this.animationId);
    }
    this.aimController.dispose();
    this.scene.dispose();
  }
}
