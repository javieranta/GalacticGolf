/**
 * Physics simulation for Galactic Golf
 *
 * Implements Newtonian gravity and Velocity-Verlet integration
 */

import { SUN, PLANETS, getPlanets, PlanetName, CelestialBody } from './bodies';
import {
  Vec3,
  getBodyPosition,
  subtract,
  add,
  scale,
  magnitude,
  distance,
  zero,
  copy,
} from './orbits';

export interface BallState {
  position: Vec3; // meters
  velocity: Vec3; // m/s
}

export interface SimulationState {
  ball: BallState;
  simTime: number; // seconds since epoch
  realTimeElapsed: number; // real seconds since shot started
  planetPositions: Map<PlanetName, Vec3>;
}

/**
 * Compute gravitational acceleration on the ball from all bodies
 *
 * a = Σ( -mu_i * (r - r_i) / |r - r_i|^3 )
 */
export function computeGravityAcceleration(
  ballPos: Vec3,
  planetPositions: Map<PlanetName, Vec3>
): Vec3 {
  let accel: Vec3 = zero();

  // Gravity from Sun (at origin)
  const toSun = subtract(zero(), ballPos); // vector from ball to sun
  const distToSun = magnitude(toSun);
  if (distToSun > 0) {
    // a = mu / r^2 in direction of body
    const accelMag = SUN.mu / (distToSun * distToSun);
    const sunAccel = scale(toSun, accelMag / distToSun); // normalize and scale
    accel = add(accel, sunAccel);
  }

  // Gravity from each planet
  for (const [name, planetPos] of planetPositions) {
    const planet = PLANETS[name];
    const toBody = subtract(planetPos, ballPos);
    const dist = magnitude(toBody);

    if (dist > 0) {
      const accelMag = planet.mu / (dist * dist);
      const bodyAccel = scale(toBody, accelMag / dist);
      accel = add(accel, bodyAccel);
    }
  }

  return accel;
}

/**
 * Single Velocity-Verlet integration step
 *
 * v(t+dt/2) = v(t) + a(t)*dt/2
 * x(t+dt) = x(t) + v(t+dt/2)*dt
 * a(t+dt) = accel(x(t+dt))
 * v(t+dt) = v(t+dt/2) + a(t+dt)*dt/2
 */
export function velocityVerletStep(
  ball: BallState,
  planetPositions: Map<PlanetName, Vec3>,
  dt: number
): BallState {
  // Current acceleration
  const a0 = computeGravityAcceleration(ball.position, planetPositions);

  // Half-step velocity
  const vHalf: Vec3 = {
    x: ball.velocity.x + a0.x * dt * 0.5,
    y: ball.velocity.y + a0.y * dt * 0.5,
    z: ball.velocity.z + a0.z * dt * 0.5,
  };

  // Full-step position
  const newPos: Vec3 = {
    x: ball.position.x + vHalf.x * dt,
    y: ball.position.y + vHalf.y * dt,
    z: ball.position.z + vHalf.z * dt,
  };

  // New acceleration at new position
  const a1 = computeGravityAcceleration(newPos, planetPositions);

  // Full-step velocity
  const newVel: Vec3 = {
    x: vHalf.x + a1.x * dt * 0.5,
    y: vHalf.y + a1.y * dt * 0.5,
    z: vHalf.z + a1.z * dt * 0.5,
  };

  return {
    position: newPos,
    velocity: newVel,
  };
}

/**
 * Determine number of substeps based on proximity to planets
 */
export function getSubstepCount(
  ballPos: Vec3,
  planetPositions: Map<PlanetName, Vec3>
): number {
  let minDistanceRatio = Infinity;

  // Check distance to each planet relative to its radius
  for (const [name, planetPos] of planetPositions) {
    const planet = PLANETS[name];
    const dist = distance(ballPos, planetPos);
    const ratio = dist / planet.radius;

    if (ratio < minDistanceRatio) {
      minDistanceRatio = ratio;
    }
  }

  // Adaptive substeps based on proximity
  if (minDistanceRatio < 25) {
    return 16;
  } else if (minDistanceRatio < 60) {
    return 8;
  } else {
    return 2;
  }
}

/**
 * Update planet positions for a given simulation time
 */
export function updatePlanetPositions(simTime: number): Map<PlanetName, Vec3> {
  const positions = new Map<PlanetName, Vec3>();

  for (const planet of getPlanets()) {
    const pos = getBodyPosition(planet, simTime);
    positions.set(planet.name as PlanetName, pos);
  }

  return positions;
}

/**
 * Perform a full physics update with adaptive substepping
 *
 * @param ball Current ball state
 * @param dtSim Total simulation time to advance (seconds)
 * @param simTime Current simulation time
 * @returns New ball state and updated planet positions
 */
export function physicsUpdate(
  ball: BallState,
  dtSim: number,
  simTime: number
): { ball: BallState; planetPositions: Map<PlanetName, Vec3>; newSimTime: number } {
  // Get current planet positions at start of frame
  // (planets move slowly compared to substep dt, so we use start-of-frame positions)
  const planetPositions = updatePlanetPositions(simTime);

  // Determine substeps
  const substeps = getSubstepCount(ball.position, planetPositions);
  const subDt = dtSim / substeps;

  let currentBall = { ...ball, position: copy(ball.position), velocity: copy(ball.velocity) };

  for (let i = 0; i < substeps; i++) {
    currentBall = velocityVerletStep(currentBall, planetPositions, subDt);
  }

  return {
    ball: currentBall,
    planetPositions,
    newSimTime: simTime + dtSim,
  };
}

/**
 * Compute specific orbital energy (for testing/diagnostics)
 * E = v²/2 - mu/r
 */
export function specificOrbitalEnergy(ball: BallState, centralMu: number): number {
  const v2 = ball.velocity.x ** 2 + ball.velocity.y ** 2 + ball.velocity.z ** 2;
  const r = magnitude(ball.position);
  return v2 / 2 - centralMu / r;
}

/**
 * Quick sanity check for physics
 */
export function physicsHealthCheck(): { ok: boolean; message: string } {
  try {
    // Create test ball near Earth's orbit
    const testBall: BallState = {
      position: { x: 1.5e11, y: 0, z: 0 }, // ~1 AU
      velocity: { x: 0, y: 0, z: 0 },
    };

    const planetPositions = updatePlanetPositions(0);

    // Check planet positions are finite
    for (const [name, pos] of planetPositions) {
      if (!isFinite(pos.x) || !isFinite(pos.y) || !isFinite(pos.z)) {
        return { ok: false, message: `Planet ${name} has non-finite position` };
      }
    }

    // Check gravity returns finite values
    const accel = computeGravityAcceleration(testBall.position, planetPositions);
    if (!isFinite(accel.x) || !isFinite(accel.y) || !isFinite(accel.z)) {
      return { ok: false, message: 'Gravity returns non-finite values' };
    }

    // Quick integration test
    const result = physicsUpdate(testBall, 1000, 0);
    if (
      !isFinite(result.ball.position.x) ||
      !isFinite(result.ball.velocity.x)
    ) {
      return { ok: false, message: 'Integration produces non-finite values' };
    }

    return { ok: true, message: 'Physics OK' };
  } catch (e) {
    return { ok: false, message: `Physics check threw: ${e}` };
  }
}
