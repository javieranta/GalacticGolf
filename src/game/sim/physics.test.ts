/**
 * Unit tests for physics simulation
 */

import { describe, it, expect } from 'vitest';
import {
  computeGravityAcceleration,
  velocityVerletStep,
  physicsUpdate,
  specificOrbitalEnergy,
  physicsHealthCheck,
  updatePlanetPositions,
  BallState,
} from './physics';
import { SUN, PLANETS, PlanetName } from './bodies';
import { magnitude, normalize, dot } from './orbits';
import { AU } from './units';

describe('Gravity Acceleration', () => {
  it('should point toward the Sun for ball at positive x', () => {
    const ballPos = { x: 1.5e11, y: 0, z: 0 }; // ~1 AU on x-axis
    const planetPositions = new Map<PlanetName, { x: number; y: number; z: number }>();

    const accel = computeGravityAcceleration(ballPos, planetPositions);

    // Should point in -x direction (toward Sun at origin)
    expect(accel.x).toBeLessThan(0);
    expect(Math.abs(accel.y)).toBeLessThan(Math.abs(accel.x) * 0.01);
    expect(Math.abs(accel.z)).toBeLessThan(Math.abs(accel.x) * 0.01);
  });

  it('should have correct magnitude at known distance (approx mu/r^2)', () => {
    const r = 1.5e11; // ~1 AU
    const ballPos = { x: r, y: 0, z: 0 };
    const planetPositions = new Map<PlanetName, { x: number; y: number; z: number }>();

    const accel = computeGravityAcceleration(ballPos, planetPositions);
    const accelMag = magnitude(accel);

    // Expected: mu_sun / r^2
    const expected = SUN.mu / (r * r);

    // Should be close (within 1% since planets contribute)
    expect(Math.abs(accelMag - expected) / expected).toBeLessThan(0.01);
  });

  it('should include planetary gravity contributions', () => {
    const ballPos = { x: 1.5e11, y: 0, z: 0 };

    // Without planets
    const accelNoplanets = computeGravityAcceleration(
      ballPos,
      new Map<PlanetName, { x: number; y: number; z: number }>()
    );

    // With planets
    const planetPositions = updatePlanetPositions(0);
    const accelWithPlanets = computeGravityAcceleration(ballPos, planetPositions);

    // Should be different (planets add their gravity)
    const diff = Math.sqrt(
      (accelWithPlanets.x - accelNoplanets.x) ** 2 +
        (accelWithPlanets.y - accelNoplanets.y) ** 2 +
        (accelWithPlanets.z - accelNoplanets.z) ** 2
    );

    expect(diff).toBeGreaterThan(0);
  });

  it('should return finite values for all positions', () => {
    const testPositions = [
      { x: 1e11, y: 0, z: 0 },
      { x: 0, y: 5e11, z: 0 },
      { x: -3e11, y: 2e11, z: 1e10 },
      { x: 5e12, y: -1e12, z: 5e11 }, // Far out
    ];

    const planetPositions = updatePlanetPositions(0);

    for (const pos of testPositions) {
      const accel = computeGravityAcceleration(pos, planetPositions);
      expect(isFinite(accel.x)).toBe(true);
      expect(isFinite(accel.y)).toBe(true);
      expect(isFinite(accel.z)).toBe(true);
    }
  });
});

describe('Velocity Verlet Integrator', () => {
  it('should move ball in direction of velocity', () => {
    const ball: BallState = {
      position: { x: 1.5e11, y: 0, z: 0 },
      velocity: { x: 0, y: 30000, z: 0 }, // 30 km/s in y direction
    };

    const planetPositions = new Map<PlanetName, { x: number; y: number; z: number }>();
    const dt = 1000; // 1000 seconds

    const newBall = velocityVerletStep(ball, planetPositions, dt);

    // Should have moved in +y direction
    expect(newBall.position.y).toBeGreaterThan(ball.position.y);
  });

  it('should conserve energy approximately in circular orbit setup', () => {
    // Set up circular orbit at 1 AU
    const r = AU;
    const v = Math.sqrt(SUN.mu / r); // Circular orbit velocity

    const ball: BallState = {
      position: { x: r, y: 0, z: 0 },
      velocity: { x: 0, y: v, z: 0 },
    };

    const planetPositions = new Map<PlanetName, { x: number; y: number; z: number }>();
    const dt = 86400; // 1 day

    // Initial energy
    const E0 = specificOrbitalEnergy(ball, SUN.mu);

    // Integrate for many steps
    let currentBall = ball;
    for (let i = 0; i < 100; i++) {
      currentBall = velocityVerletStep(currentBall, planetPositions, dt);
    }

    // Final energy
    const E1 = specificOrbitalEnergy(currentBall, SUN.mu);

    // Energy should be conserved within 1% (Verlet is symplectic)
    const relativeError = Math.abs(E1 - E0) / Math.abs(E0);
    expect(relativeError).toBeLessThan(0.01);
  });

  it('should not produce NaN values', () => {
    const ball: BallState = {
      position: { x: 1.5e11, y: 0, z: 0 },
      velocity: { x: 10000, y: 20000, z: 5000 },
    };

    const planetPositions = updatePlanetPositions(0);
    const dt = 3600;

    const newBall = velocityVerletStep(ball, planetPositions, dt);

    expect(isFinite(newBall.position.x)).toBe(true);
    expect(isFinite(newBall.position.y)).toBe(true);
    expect(isFinite(newBall.position.z)).toBe(true);
    expect(isFinite(newBall.velocity.x)).toBe(true);
    expect(isFinite(newBall.velocity.y)).toBe(true);
    expect(isFinite(newBall.velocity.z)).toBe(true);
  });
});

describe('Physics Update with Substepping', () => {
  it('should advance simulation time correctly', () => {
    const ball: BallState = {
      position: { x: 1.5e11, y: 0, z: 0 },
      velocity: { x: 0, y: 0, z: 0 },
    };

    const simTime = 1000;
    const dtSim = 3600;

    const result = physicsUpdate(ball, dtSim, simTime);

    expect(result.newSimTime).toBe(simTime + dtSim);
  });

  it('should return updated planet positions', () => {
    const ball: BallState = {
      position: { x: 1.5e11, y: 0, z: 0 },
      velocity: { x: 0, y: 0, z: 0 },
    };

    const result = physicsUpdate(ball, 1000, 0);

    expect(result.planetPositions.size).toBe(8); // All 8 planets
    for (const pos of result.planetPositions.values()) {
      expect(isFinite(pos.x)).toBe(true);
      expect(isFinite(pos.y)).toBe(true);
      expect(isFinite(pos.z)).toBe(true);
    }
  });

  it('should handle large timesteps without exploding', () => {
    const ball: BallState = {
      position: { x: 2e11, y: 0, z: 0 },
      velocity: { x: 0, y: 25000, z: 0 },
    };

    const dtSim = 2400; // Max allowed

    const result = physicsUpdate(ball, dtSim, 0);

    expect(isFinite(result.ball.position.x)).toBe(true);
    expect(isFinite(result.ball.position.y)).toBe(true);
    expect(isFinite(result.ball.velocity.x)).toBe(true);
    expect(isFinite(result.ball.velocity.y)).toBe(true);
  });
});

describe('Physics Health Check', () => {
  it('should pass health check', () => {
    const result = physicsHealthCheck();
    expect(result.ok).toBe(true);
    expect(result.message).toBe('Physics OK');
  });
});

describe('Specific Orbital Energy', () => {
  it('should be negative for bound orbit', () => {
    // Circular orbit at 1 AU
    const r = AU;
    const v = Math.sqrt(SUN.mu / r) * 0.9; // Slightly below circular velocity

    const ball: BallState = {
      position: { x: r, y: 0, z: 0 },
      velocity: { x: 0, y: v, z: 0 },
    };

    const energy = specificOrbitalEnergy(ball, SUN.mu);
    expect(energy).toBeLessThan(0); // Bound orbit
  });

  it('should be positive for escape trajectory', () => {
    const r = AU;
    const escapeV = Math.sqrt(2 * SUN.mu / r) * 1.1; // Above escape velocity

    const ball: BallState = {
      position: { x: r, y: 0, z: 0 },
      velocity: { x: 0, y: escapeV, z: 0 },
    };

    const energy = specificOrbitalEnergy(ball, SUN.mu);
    expect(energy).toBeGreaterThan(0); // Escape trajectory
  });
});
