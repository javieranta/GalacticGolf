/**
 * Simulation scenario tests for Galactic Golf
 *
 * These tests run complete gameplay scenarios headlessly
 * to verify game rules and physics don't crash
 */

import { describe, it, expect } from 'vitest';
import { BallState, physicsUpdate, updatePlanetPositions } from './physics';
import { checkCollisions, CollisionResult } from './collisions';
import { HOLES, HoleDef } from './holes';
import { PLANETS, PlanetName } from './bodies';
import { copy, magnitude, getBodyPosition } from './orbits';
import { AU, ATTEMPT_TIMEOUT_REAL_SECONDS } from './units';

interface SimulationResult {
  outcome: 'capture' | 'sun_fail' | 'deep_space' | 'bounds_fail' | 'timeout' | 'max_bumps';
  stepsCompleted: number;
  finalPosition: { x: number; y: number; z: number };
  capturedPlanet?: PlanetName;
  bounces: number;
}

/**
 * Run a complete simulation scenario
 */
function runSimulation(
  hole: HoleDef,
  initialVelocity: { x: number; y: number; z: number },
  maxSteps: number = 10000
): SimulationResult {
  let ball: BallState = {
    position: copy(hole.startPositionMeters),
    velocity: copy(initialVelocity),
  };

  let simTime = hole.timeOffsetSeconds;
  const dtSim = 1000; // 1000 sim seconds per step
  let bounces = 0;

  for (let step = 0; step < maxSteps; step++) {
    // Update physics
    const result = physicsUpdate(ball, dtSim, simTime);
    ball = result.ball;
    simTime = result.newSimTime;

    // Check for NaN (should never happen)
    if (!isFinite(ball.position.x) || !isFinite(ball.velocity.x)) {
      throw new Error(`NaN detected at step ${step}`);
    }

    // Check collisions
    const collision = checkCollisions(
      ball,
      hole.target,
      result.planetPositions,
      bounces
    );

    switch (collision.type) {
      case 'target_captured':
        return {
          outcome: 'capture',
          stepsCompleted: step,
          finalPosition: ball.position,
          capturedPlanet: collision.planet,
          bounces,
        };

      case 'bounce':
        ball = collision.newBall;
        bounces++;
        break;

      case 'sun_fail':
        return {
          outcome: 'sun_fail',
          stepsCompleted: step,
          finalPosition: ball.position,
          bounces,
        };

      case 'deep_space_rescue':
        return {
          outcome: 'deep_space',
          stepsCompleted: step,
          finalPosition: ball.position,
          bounces,
        };

      case 'bounds_fail':
        return {
          outcome: 'bounds_fail',
          stepsCompleted: step,
          finalPosition: ball.position,
          bounces,
        };

      case 'max_bumps':
        return {
          outcome: 'max_bumps',
          stepsCompleted: step,
          finalPosition: ball.position,
          bounces,
        };

      case 'none':
        // Continue simulation
        break;
    }
  }

  return {
    outcome: 'timeout',
    stepsCompleted: maxSteps,
    finalPosition: ball.position,
    bounces,
  };
}

describe('Simulation Scenarios', () => {
  it('should not crash with zero velocity (ball falls toward sun)', () => {
    const hole = HOLES[0]; // Jupiter hole

    const result = runSimulation(
      hole,
      { x: 0, y: 0, z: 0 },
      5000
    );

    // Should either hit sun or time out
    expect(['sun_fail', 'timeout']).toContain(result.outcome);
    expect(result.stepsCompleted).toBeGreaterThan(0);
  });

  it('should reach Jupiter with reasonable velocity toward it', () => {
    const hole = HOLES[0]; // Welcome to Jupiter

    // Get Jupiter's position at hole start time
    const jupiterPos = getBodyPosition(PLANETS.Jupiter, hole.timeOffsetSeconds);

    // Compute direction to Jupiter
    const dx = jupiterPos.x - hole.startPositionMeters.x;
    const dy = jupiterPos.y - hole.startPositionMeters.y;
    const dz = jupiterPos.z - hole.startPositionMeters.z;
    const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);

    // Velocity toward Jupiter at recommended speed
    const speed = hole.speedHint.recommended;
    const velocity = {
      x: (dx / dist) * speed,
      y: (dy / dist) * speed,
      z: (dz / dist) * speed,
    };

    const result = runSimulation(hole, velocity, 20000);

    // Should capture or at least not crash
    expect(['capture', 'deep_space', 'bounds_fail', 'timeout']).toContain(result.outcome);

    if (result.outcome === 'capture') {
      expect(result.capturedPlanet).toBe('Jupiter');
    }
  });

  it('should trigger deep space rescue for escape trajectory', () => {
    const hole = HOLES[0];

    // Very high velocity directly away from sun
    const startDist = magnitude(hole.startPositionMeters);
    const escapeSpeed = Math.sqrt(2 * 1.32712440018e20 / startDist) * 1.5; // 1.5x escape velocity

    const direction = {
      x: hole.startPositionMeters.x / startDist,
      y: hole.startPositionMeters.y / startDist,
      z: 0,
    };

    const velocity = {
      x: direction.x * escapeSpeed,
      y: direction.y * escapeSpeed,
      z: 0,
    };

    const result = runSimulation(hole, velocity, 50000);

    // Should trigger deep space or bounds fail
    expect(['deep_space', 'bounds_fail']).toContain(result.outcome);
  });

  it('should trigger sun fail for high speed toward sun', () => {
    const hole = HOLES[0];

    // High velocity toward sun
    const startDist = magnitude(hole.startPositionMeters);
    const speed = 80000; // 80 km/s

    const velocity = {
      x: (-hole.startPositionMeters.x / startDist) * speed,
      y: (-hole.startPositionMeters.y / startDist) * speed,
      z: 0,
    };

    const result = runSimulation(hole, velocity, 20000);

    expect(result.outcome).toBe('sun_fail');
  });

  it('should not produce NaN for any hole with recommended speed', () => {
    for (const hole of HOLES) {
      // Get target position
      const targetPos = getBodyPosition(PLANETS[hole.target], hole.timeOffsetSeconds);

      // Direction toward target
      const dx = targetPos.x - hole.startPositionMeters.x;
      const dy = targetPos.y - hole.startPositionMeters.y;
      const dz = targetPos.z - hole.startPositionMeters.z;
      const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);

      const speed = hole.speedHint.recommended;
      const velocity = {
        x: (dx / dist) * speed,
        y: (dy / dist) * speed,
        z: (dz / dist) * speed,
      };

      // Should not throw
      expect(() => {
        runSimulation(hole, velocity, 5000);
      }).not.toThrow();
    }
  });

  it('should handle bounces without crashing', () => {
    // Mars hop - start close to Earth path for potential bounce
    const hole = HOLES[2]; // Mars Hop

    // Random-ish velocity
    const velocity = {
      x: 15000,
      y: -8000,
      z: 1000,
    };

    const result = runSimulation(hole, velocity, 20000);

    // Should complete without crashing
    expect(['capture', 'sun_fail', 'deep_space', 'bounds_fail', 'timeout', 'max_bumps']).toContain(
      result.outcome
    );
  });
});

describe('Long-running stability', () => {
  it('should remain stable over extended simulation', () => {
    const hole = HOLES[0];

    // Roughly circular orbit velocity
    const r = magnitude(hole.startPositionMeters);
    const v = Math.sqrt(1.32712440018e20 / r); // Circular velocity

    // Perpendicular to radial direction
    const radialDir = {
      x: hole.startPositionMeters.x / r,
      y: hole.startPositionMeters.y / r,
      z: 0,
    };
    const velocity = {
      x: -radialDir.y * v,
      y: radialDir.x * v,
      z: 0,
    };

    // Run for many steps
    const result = runSimulation(hole, velocity, 50000);

    // Should not crash - either stays in orbit (timeout) or escapes eventually
    expect(['timeout', 'deep_space', 'bounds_fail', 'capture']).toContain(result.outcome);
  });
});

describe('Collision detection integrity', () => {
  it('should correctly identify capture within generous radius', () => {
    const hole = HOLES[0]; // Jupiter

    // Position ball very close to Jupiter
    const jupiterPos = getBodyPosition(PLANETS.Jupiter, hole.timeOffsetSeconds);
    const jupiter = PLANETS.Jupiter;

    // Within capture radius
    const offset = jupiter.radius * 1.1;
    const ball: BallState = {
      position: {
        x: jupiterPos.x + offset,
        y: jupiterPos.y,
        z: jupiterPos.z,
      },
      velocity: { x: 0, y: 0, z: 0 },
    };

    const planetPositions = updatePlanetPositions(hole.timeOffsetSeconds);
    const collision = checkCollisions(ball, hole.target, planetPositions, 0);

    expect(collision.type).toBe('target_captured');
  });

  it('should correctly identify non-target planet bounce', () => {
    const hole = HOLES[0]; // Jupiter is target

    // Position ball very close to Mars
    const marsPos = getBodyPosition(PLANETS.Mars, hole.timeOffsetSeconds);
    const mars = PLANETS.Mars;

    const ball: BallState = {
      position: {
        x: marsPos.x + mars.radius * 0.5,
        y: marsPos.y,
        z: marsPos.z,
      },
      velocity: { x: -10000, y: 0, z: 0 },
    };

    const planetPositions = updatePlanetPositions(hole.timeOffsetSeconds);
    const collision = checkCollisions(ball, hole.target, planetPositions, 0);

    expect(collision.type).toBe('bounce');
    if (collision.type === 'bounce') {
      expect(collision.planet).toBe('Mars');
    }
  });
});
