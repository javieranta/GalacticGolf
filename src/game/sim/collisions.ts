/**
 * Collision detection and arcade assist rules for Galactic Golf
 */

import { SUN, PLANETS, PlanetName, CelestialBody, VISUAL_RADIUS_MULTIPLIER, CAPTURE_RADIUS_MULTIPLIER, SUN_VISUAL_RADIUS_MULTIPLIER } from './bodies';
import {
  Vec3,
  distance,
  magnitude,
  normalize,
  subtract,
  add,
  scale,
  dot,
  zero,
} from './orbits';
import { BallState } from './physics';
import {
  BALL_RADIUS_METERS,
  DEEP_SPACE_RESCUE_DISTANCE,
  BOUNDS_FAIL_DISTANCE,
  DEEP_SPACE_PLANET_CHECK,
} from './units';

export type CollisionResult =
  | { type: 'none' }
  | { type: 'target_captured'; planet: PlanetName }
  | { type: 'bounce'; planet: PlanetName; newBall: BallState }
  | { type: 'sun_fail' }
  | { type: 'deep_space_rescue' }
  | { type: 'bounds_fail' }
  | { type: 'max_bumps' };

/**
 * Compute generous capture radius for target planet
 * Uses capture radius multiplier - LARGER than visual for forgiving gameplay
 */
export function getTargetCaptureRadius(targetPlanet: CelestialBody): number {
  // Capture zone is larger than visual size - ships should get captured!
  return targetPlanet.radius * CAPTURE_RADIUS_MULTIPLIER;
}

/**
 * Capture speed limit (m/s) - if ball is faster, still count as success in arcade mode
 */
export const TARGET_CAPTURE_SPEED_LIMIT = 40_000;

/**
 * Sun fail radius multiplier
 */
export const SUN_FAIL_RADIUS_MULTIPLIER = 1.2;

/**
 * Max bumps before fail (very forgiving)
 */
export const MAX_BUMPS = 3;

/**
 * Inelastic bounce coefficient
 */
export const BOUNCE_COEFFICIENT = 0.55;

/**
 * Check for target capture
 */
export function checkTargetCapture(
  ballPos: Vec3,
  ballVel: Vec3,
  targetName: PlanetName,
  planetPositions: Map<PlanetName, Vec3>
): boolean {
  const targetPlanet = PLANETS[targetName];
  const targetPos = planetPositions.get(targetName);

  if (!targetPos) return false;

  const dist = distance(ballPos, targetPos);
  const captureRadius = getTargetCaptureRadius(targetPlanet);

  // Generous capture - just need to be within radius
  return dist < captureRadius;
}

/**
 * Check collision with Sun
 */
export function checkSunCollision(ballPos: Vec3): boolean {
  const distToSun = magnitude(ballPos);
  // Use smaller visual multiplier for Sun (otherwise it swallows inner planets)
  return distToSun < SUN.radius * SUN_VISUAL_RADIUS_MULTIPLIER * SUN_FAIL_RADIUS_MULTIPLIER;
}

/**
 * Check collision with non-target planet and apply bounce
 */
export function checkPlanetBounce(
  ball: BallState,
  targetName: PlanetName,
  planetPositions: Map<PlanetName, Vec3>
): { bounced: boolean; planet?: PlanetName; newBall?: BallState } {
  for (const [name, planetPos] of planetPositions) {
    // Skip target planet (handled by capture logic)
    if (name === targetName) continue;

    const planet = PLANETS[name];
    const dist = distance(ball.position, planetPos);
    // Use visual radius for collision (arcade gameplay)
    const collisionRadius = planet.radius * VISUAL_RADIUS_MULTIPLIER + BALL_RADIUS_METERS;

    if (dist < collisionRadius) {
      // Apply inelastic reflection
      const normal = normalize(subtract(ball.position, planetPos));

      // v_ref = v - 2*dot(v,n)*n (reflection)
      const vDotN = dot(ball.velocity, normal);
      const vReflect: Vec3 = {
        x: ball.velocity.x - 2 * vDotN * normal.x,
        y: ball.velocity.y - 2 * vDotN * normal.y,
        z: ball.velocity.z - 2 * vDotN * normal.z,
      };

      // Apply damping
      const newVel = scale(vReflect, BOUNCE_COEFFICIENT);

      // Reposition ball outside collision radius
      const epsilon = 1000; // small buffer in meters
      const newPos = add(planetPos, scale(normal, collisionRadius + epsilon));

      return {
        bounced: true,
        planet: name,
        newBall: { position: newPos, velocity: newVel },
      };
    }
  }

  return { bounced: false };
}

/**
 * Check for deep space rescue conditions
 */
export function checkDeepSpaceRescue(
  ballPos: Vec3,
  ballVel: Vec3,
  planetPositions: Map<PlanetName, Vec3>
): boolean {
  const distFromSun = magnitude(ballPos);

  // Must be far from Sun
  if (distFromSun < DEEP_SPACE_RESCUE_DISTANCE) return false;

  // Check radial velocity (outward)
  const radialDir = normalize(ballPos);
  const radialVel = dot(ballVel, radialDir);

  // Must be moving outward
  if (radialVel <= 0) return false;

  // Check no planet within range
  for (const planetPos of planetPositions.values()) {
    if (distance(ballPos, planetPos) < DEEP_SPACE_PLANET_CHECK) {
      return false;
    }
  }

  return true;
}

/**
 * Check bounds fail
 */
export function checkBoundsFail(ballPos: Vec3): boolean {
  return magnitude(ballPos) > BOUNDS_FAIL_DISTANCE;
}

/**
 * Full collision check for a simulation step
 */
export function checkCollisions(
  ball: BallState,
  targetName: PlanetName,
  planetPositions: Map<PlanetName, Vec3>,
  bumpsThisAttempt: number
): CollisionResult {
  // 1. Check target capture (highest priority for success)
  if (checkTargetCapture(ball.position, ball.velocity, targetName, planetPositions)) {
    return { type: 'target_captured', planet: targetName };
  }

  // 2. Check Sun collision (instant fail)
  if (checkSunCollision(ball.position)) {
    return { type: 'sun_fail' };
  }

  // 3. Check bounds fail
  if (checkBoundsFail(ball.position)) {
    return { type: 'bounds_fail' };
  }

  // 4. Check deep space rescue
  if (checkDeepSpaceRescue(ball.position, ball.velocity, planetPositions)) {
    return { type: 'deep_space_rescue' };
  }

  // 5. Check non-target planet collision (bounce)
  const bounceResult = checkPlanetBounce(ball, targetName, planetPositions);
  if (bounceResult.bounced && bounceResult.newBall && bounceResult.planet) {
    // Check if max bumps exceeded
    if (bumpsThisAttempt >= MAX_BUMPS) {
      return { type: 'max_bumps' };
    }
    return {
      type: 'bounce',
      planet: bounceResult.planet,
      newBall: bounceResult.newBall,
    };
  }

  return { type: 'none' };
}

/**
 * Get a visually pleasing landing position on planet surface
 */
export function getLandingPosition(
  planetPos: Vec3,
  planetRadius: number,
  approachDir: Vec3
): Vec3 {
  // Place ball on visual surface in direction of approach
  const surfaceDir = normalize(approachDir);
  return add(planetPos, scale(surfaceDir, planetRadius * VISUAL_RADIUS_MULTIPLIER * 1.1));
}
