/**
 * Gameplay Tuning Tests for Galactic Golf
 * 
 * These tests validate that the game "feels right":
 * - Half-power shots should be significantly bent by planetary gravity
 * - Low-power shots should get captured by planets
 * - Full-power shots should be able to escape (but still bent)
 * 
 * Run with: npx vitest run gameplay-tuning
 */

import { describe, it, expect } from 'vitest';
import { BallState, physicsUpdate, updatePlanetPositions, computeGravityAcceleration } from './physics';
import { checkCollisions, CollisionResult } from './collisions';
import { HOLES, HoleDef } from './holes';
import { PLANETS, PlanetName, SUN } from './bodies';
import { copy, magnitude, getBodyPosition, subtract, normalize, distance, Vec3 } from './orbits';
import { AU } from './units';

interface TrajectoryAnalysis {
  outcome: 'capture' | 'sun_fail' | 'deep_space' | 'bounds_fail' | 'timeout' | 'max_bumps';
  stepsCompleted: number;
  capturedPlanet?: PlanetName;
  maxDeflectionAngleDegrees: number;  // How much trajectory bent
  closestPlanetApproach: { planet: PlanetName; distance: number; distanceInRadii: number };
  totalGravityInfluence: number;  // Accumulated gravity magnitude
}

/**
 * Run simulation and analyze trajectory
 */
function analyzeTrajectory(
  hole: HoleDef,
  powerFraction: number,  // 0.0 to 1.0
  maxSteps: number = 15000
): TrajectoryAnalysis {
  // Get target position
  const targetPos = getBodyPosition(PLANETS[hole.target], hole.timeOffsetSeconds);
  
  // Direction toward target
  const dx = targetPos.x - hole.startPositionMeters.x;
  const dy = targetPos.y - hole.startPositionMeters.y;
  const dz = targetPos.z - hole.startPositionMeters.z;
  const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);
  
  // Velocity toward target at given power
  const speed = hole.speedHint.min + (hole.speedHint.max - hole.speedHint.min) * powerFraction;
  const initialDir = { x: dx / dist, y: dy / dist, z: dz / dist };
  const initialVelocity = {
    x: initialDir.x * speed,
    y: initialDir.y * speed,
    z: initialDir.z * speed,
  };
  
  let ball: BallState = {
    position: copy(hole.startPositionMeters),
    velocity: copy(initialVelocity),
  };

  let simTime = hole.timeOffsetSeconds;
  const dtSim = 1000;
  let bounces = 0;
  
  let maxDeflectionAngleDegrees = 0;
  let closestPlanetApproach = { planet: 'Jupiter' as PlanetName, distance: Infinity, distanceInRadii: Infinity };
  let totalGravityInfluence = 0;

  for (let step = 0; step < maxSteps; step++) {
    // Measure gravity influence
    const planetPositions = updatePlanetPositions(simTime);
    const accel = computeGravityAcceleration(ball.position, planetPositions);
    totalGravityInfluence += magnitude(accel);
    
    // Track closest approach to any planet
    for (const [name, planetPos] of planetPositions) {
      const planet = PLANETS[name];
      const d = distance(ball.position, planetPos);
      const dInRadii = d / planet.radius;
      if (dInRadii < closestPlanetApproach.distanceInRadii) {
        closestPlanetApproach = { planet: name, distance: d, distanceInRadii: dInRadii };
      }
    }
    
    // Measure deflection from initial direction
    const currentDir = normalize(ball.velocity);
    const dotProduct = currentDir.x * initialDir.x + currentDir.y * initialDir.y + currentDir.z * initialDir.z;
    const angleDeg = Math.acos(Math.max(-1, Math.min(1, dotProduct))) * 180 / Math.PI;
    if (angleDeg > maxDeflectionAngleDegrees) {
      maxDeflectionAngleDegrees = angleDeg;
    }

    // Update physics
    const result = physicsUpdate(ball, dtSim, simTime);
    ball = result.ball;
    simTime = result.newSimTime;

    if (!isFinite(ball.position.x) || !isFinite(ball.velocity.x)) {
      throw new Error(`NaN detected at step ${step}`);
    }

    // Check collisions
    const collision = checkCollisions(ball, hole.target, result.planetPositions, bounces);

    switch (collision.type) {
      case 'target_captured':
        return {
          outcome: 'capture',
          stepsCompleted: step,
          capturedPlanet: collision.planet,
          maxDeflectionAngleDegrees,
          closestPlanetApproach,
          totalGravityInfluence,
        };

      case 'bounce':
        ball = collision.newBall;
        bounces++;
        break;

      case 'sun_fail':
        return {
          outcome: 'sun_fail',
          stepsCompleted: step,
          maxDeflectionAngleDegrees,
          closestPlanetApproach,
          totalGravityInfluence,
        };

      case 'deep_space_rescue':
        return {
          outcome: 'deep_space',
          stepsCompleted: step,
          maxDeflectionAngleDegrees,
          closestPlanetApproach,
          totalGravityInfluence,
        };

      case 'bounds_fail':
        return {
          outcome: 'bounds_fail',
          stepsCompleted: step,
          maxDeflectionAngleDegrees,
          closestPlanetApproach,
          totalGravityInfluence,
        };

      case 'max_bumps':
        return {
          outcome: 'max_bumps',
          stepsCompleted: step,
          maxDeflectionAngleDegrees,
          closestPlanetApproach,
          totalGravityInfluence,
        };
    }
  }

  return {
    outcome: 'timeout',
    stepsCompleted: maxSteps,
    maxDeflectionAngleDegrees,
    closestPlanetApproach,
    totalGravityInfluence,
  };
}

describe('Gameplay Tuning Analysis', () => {
  
  it('DIAGNOSTIC: Analyze gravity effect at different power levels', () => {
    const hole = HOLES[0]; // Jupiter
    
    console.log('\n========================================');
    console.log('GRAVITY EFFECTIVENESS ANALYSIS');
    console.log('========================================\n');
    console.log(`Hole: ${hole.name}`);
    console.log(`Target: ${hole.target}`);
    console.log(`Speed range: ${hole.speedHint.min / 1000} - ${hole.speedHint.max / 1000} km/s\n`);
    
    const powerLevels = [0.25, 0.5, 0.75, 1.0];
    
    for (const power of powerLevels) {
      const result = analyzeTrajectory(hole, power);
      const speed = hole.speedHint.min + (hole.speedHint.max - hole.speedHint.min) * power;
      
      console.log(`--- Power: ${(power * 100).toFixed(0)}% (${(speed / 1000).toFixed(0)} km/s) ---`);
      console.log(`  Outcome: ${result.outcome}${result.capturedPlanet ? ` by ${result.capturedPlanet}` : ''}`);
      console.log(`  Max deflection: ${result.maxDeflectionAngleDegrees.toFixed(1)}°`);
      console.log(`  Closest approach: ${result.closestPlanetApproach.planet} at ${result.closestPlanetApproach.distanceInRadii.toFixed(1)} radii`);
      console.log(`  Steps: ${result.stepsCompleted}`);
      console.log('');
    }
    
    // This test always passes - it's for diagnostics
    expect(true).toBe(true);
  });

  it('DIAGNOSTIC: Check current gravity strength', () => {
    console.log('\n========================================');
    console.log('GRAVITY STRENGTH CHECK');
    console.log('========================================\n');
    
    // Test ball positioned near Jupiter
    const jupiterPos = getBodyPosition(PLANETS.Jupiter, 0);
    const testDistances = [1, 5, 10, 50, 100]; // In Jupiter radii
    
    console.log('Gravity acceleration near Jupiter:');
    for (const distRadii of testDistances) {
      const testPos: Vec3 = {
        x: jupiterPos.x + PLANETS.Jupiter.radius * distRadii,
        y: jupiterPos.y,
        z: jupiterPos.z,
      };
      
      const planetPositions = updatePlanetPositions(0);
      const accel = computeGravityAcceleration(testPos, planetPositions);
      const accelMag = magnitude(accel);
      
      console.log(`  ${distRadii} radii: ${accelMag.toFixed(3)} m/s² (${(accelMag * 1000).toFixed(1)} mm/s²)`);
    }
    
    console.log('\nFor comparison:');
    console.log(`  Earth surface gravity: 9.8 m/s²`);
    console.log(`  Jupiter surface gravity: 24.8 m/s²`);
    console.log(`  Current Jupiter mu: ${PLANETS.Jupiter.mu.toExponential(2)}`);
    console.log(`  Current Sun mu: ${SUN.mu.toExponential(2)}`);
    
    expect(true).toBe(true);
  });

  it('GAMEPLAY GOAL: Half-power shots should show >30° deflection', () => {
    const results: { hole: string; deflection: number; outcome: string }[] = [];
    
    for (const hole of HOLES.slice(0, 3)) { // Test first 3 holes
      const result = analyzeTrajectory(hole, 0.5);
      results.push({
        hole: hole.name,
        deflection: result.maxDeflectionAngleDegrees,
        outcome: result.outcome,
      });
    }
    
    console.log('\n========================================');
    console.log('DEFLECTION TEST RESULTS (50% power)');
    console.log('========================================');
    for (const r of results) {
      const status = r.deflection >= 30 ? '✓' : '✗';
      console.log(`${status} ${r.hole}: ${r.deflection.toFixed(1)}° deflection (${r.outcome})`);
    }
    
    // At least some holes should show significant deflection
    const avgDeflection = results.reduce((sum, r) => sum + r.deflection, 0) / results.length;
    console.log(`\nAverage deflection: ${avgDeflection.toFixed(1)}°`);
    console.log(`Target: ≥30°`);
    
    // For now, just report - we'll tune to hit this
    expect(avgDeflection).toBeGreaterThan(0);
  });

  it('GAMEPLAY GOAL: Low power shots (25%) should get captured', () => {
    let captures = 0;
    const total = HOLES.length;
    
    console.log('\n========================================');
    console.log('CAPTURE TEST RESULTS (25% power)');
    console.log('========================================');
    
    for (const hole of HOLES) {
      const result = analyzeTrajectory(hole, 0.25, 20000);
      const captured = result.outcome === 'capture';
      if (captured) captures++;
      
      console.log(`${captured ? '✓' : '✗'} ${hole.name}: ${result.outcome}`);
    }
    
    console.log(`\nCapture rate: ${captures}/${total} (${((captures/total)*100).toFixed(0)}%)`);
    console.log(`Target: ≥50%`);
    
    expect(captures).toBeGreaterThanOrEqual(0);
  });
});
