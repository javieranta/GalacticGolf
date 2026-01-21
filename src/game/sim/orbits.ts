/**
 * Keplerian orbit calculations
 *
 * Computes planet positions from orbital elements using Kepler's equation
 */

import { CelestialBody, SUN, PLANETS, PlanetName } from './bodies';

export interface Vec3 {
  x: number;
  y: number;
  z: number;
}

/**
 * Solve Kepler's equation: E - e*sin(E) = M
 * Using Newton-Raphson iteration
 *
 * @param M Mean anomaly (radians)
 * @param e Eccentricity
 * @param tolerance Convergence tolerance
 * @param maxIter Maximum iterations
 * @returns Eccentric anomaly E (radians)
 */
export function solveKepler(
  M: number,
  e: number,
  tolerance: number = 1e-10,
  maxIter: number = 50
): number {
  // Normalize M to [0, 2π)
  M = M % (2 * Math.PI);
  if (M < 0) M += 2 * Math.PI;

  // Initial guess: E = M for small e, better guess for larger e
  let E = e < 0.8 ? M : Math.PI;

  for (let i = 0; i < maxIter; i++) {
    const sinE = Math.sin(E);
    const f = E - e * sinE - M;
    const fPrime = 1 - e * Math.cos(E);

    // Newton-Raphson step
    const dE = f / fPrime;
    E = E - dE;

    if (Math.abs(dE) < tolerance) {
      return E;
    }
  }

  // Return best estimate even if not fully converged
  return E;
}

/**
 * Compute true anomaly from eccentric anomaly
 */
export function eccentricToTrueAnomaly(E: number, e: number): number {
  const cosE = Math.cos(E);
  const sinE = Math.sin(E);

  // True anomaly calculation
  const x = Math.cos(E) - e;
  const y = Math.sqrt(1 - e * e) * Math.sin(E);

  return Math.atan2(y, x);
}

/**
 * Compute orbital radius from eccentric anomaly
 */
export function orbitalRadius(a: number, e: number, E: number): number {
  return a * (1 - e * Math.cos(E));
}

/**
 * Rotate a point from orbital plane to heliocentric ecliptic coordinates
 *
 * @param x Orbital plane x (toward perihelion)
 * @param y Orbital plane y (perpendicular in plane)
 * @param z Orbital plane z (normal to plane, 0 for in-plane points)
 * @param omega Argument of perihelion ω
 * @param i Inclination
 * @param Omega Longitude of ascending node Ω
 */
export function orbitalToHeliocentric(
  x: number,
  y: number,
  z: number,
  omega: number,
  i: number,
  Omega: number
): Vec3 {
  const cosOmega = Math.cos(Omega);
  const sinOmega = Math.sin(Omega);
  const cosI = Math.cos(i);
  const sinI = Math.sin(i);
  const cosW = Math.cos(omega);
  const sinW = Math.sin(omega);

  // Combined rotation matrix elements
  const Px = cosOmega * cosW - sinOmega * sinW * cosI;
  const Py = sinOmega * cosW + cosOmega * sinW * cosI;
  const Pz = sinW * sinI;

  const Qx = -cosOmega * sinW - sinOmega * cosW * cosI;
  const Qy = -sinOmega * sinW + cosOmega * cosW * cosI;
  const Qz = cosW * sinI;

  return {
    x: x * Px + y * Qx,
    y: x * Py + y * Qy,
    z: x * Pz + y * Qz,
  };
}

/**
 * Get the position of a celestial body at a given simulation time
 *
 * @param body The celestial body
 * @param t Simulation time in seconds since epoch
 * @returns Position in heliocentric coordinates (meters)
 */
export function getBodyPosition(body: CelestialBody, t: number): Vec3 {
  // Sun is at origin
  if (body.name === 'Sun' || !body.orbitalElements || !body.meanMotion) {
    return { x: 0, y: 0, z: 0 };
  }

  const { a, e, i, omega, w, M0 } = body.orbitalElements;
  const n = body.meanMotion;

  // Mean anomaly at time t
  const M = M0 + n * t;

  // Solve Kepler's equation for eccentric anomaly
  const E = solveKepler(M, e);

  // True anomaly
  const nu = eccentricToTrueAnomaly(E, e);

  // Orbital radius
  const r = orbitalRadius(a, e, E);

  // Position in orbital plane
  const xOrbital = r * Math.cos(nu);
  const yOrbital = r * Math.sin(nu);
  const zOrbital = 0;

  // Transform to heliocentric coordinates
  return orbitalToHeliocentric(xOrbital, yOrbital, zOrbital, w, i, omega);
}

/**
 * Get positions of all planets at a given time
 */
export function getAllPlanetPositions(
  t: number
): Map<PlanetName, Vec3> {
  const positions = new Map<PlanetName, Vec3>();

  for (const [name, body] of Object.entries(PLANETS)) {
    positions.set(name as PlanetName, getBodyPosition(body, t));
  }

  return positions;
}

/**
 * Generate orbit path points for visualization
 *
 * @param body The celestial body
 * @param numPoints Number of points around the orbit
 * @returns Array of positions in heliocentric coordinates
 */
export function generateOrbitPath(
  body: CelestialBody,
  numPoints: number = 128
): Vec3[] {
  if (!body.orbitalElements) {
    return [];
  }

  const { a, e, i, omega, w } = body.orbitalElements;
  const points: Vec3[] = [];

  for (let j = 0; j <= numPoints; j++) {
    // Parametric angle around the ellipse (true anomaly values)
    const nu = (j / numPoints) * 2 * Math.PI;

    // For visualization, we compute r directly from true anomaly
    // r = a(1-e²) / (1 + e*cos(ν))
    const r = (a * (1 - e * e)) / (1 + e * Math.cos(nu));

    // Position in orbital plane
    const xOrbital = r * Math.cos(nu);
    const yOrbital = r * Math.sin(nu);
    const zOrbital = 0;

    // Transform to heliocentric
    const pos = orbitalToHeliocentric(xOrbital, yOrbital, zOrbital, w, i, omega);
    points.push(pos);
  }

  return points;
}

/**
 * Compute distance between two Vec3 points
 */
export function distance(a: Vec3, b: Vec3): number {
  const dx = a.x - b.x;
  const dy = a.y - b.y;
  const dz = a.z - b.z;
  return Math.sqrt(dx * dx + dy * dy + dz * dz);
}

/**
 * Compute magnitude of a Vec3
 */
export function magnitude(v: Vec3): number {
  return Math.sqrt(v.x * v.x + v.y * v.y + v.z * v.z);
}

/**
 * Normalize a Vec3
 */
export function normalize(v: Vec3): Vec3 {
  const m = magnitude(v);
  if (m === 0) return { x: 0, y: 0, z: 0 };
  return { x: v.x / m, y: v.y / m, z: v.z / m };
}

/**
 * Add two Vec3
 */
export function add(a: Vec3, b: Vec3): Vec3 {
  return { x: a.x + b.x, y: a.y + b.y, z: a.z + b.z };
}

/**
 * Subtract Vec3: a - b
 */
export function subtract(a: Vec3, b: Vec3): Vec3 {
  return { x: a.x - b.x, y: a.y - b.y, z: a.z - b.z };
}

/**
 * Scale a Vec3
 */
export function scale(v: Vec3, s: number): Vec3 {
  return { x: v.x * s, y: v.y * s, z: v.z * s };
}

/**
 * Dot product of two Vec3
 */
export function dot(a: Vec3, b: Vec3): number {
  return a.x * b.x + a.y * b.y + a.z * b.z;
}

/**
 * Lerp between two Vec3
 */
export function lerp(a: Vec3, b: Vec3, t: number): Vec3 {
  return {
    x: a.x + (b.x - a.x) * t,
    y: a.y + (b.y - a.y) * t,
    z: a.z + (b.z - a.z) * t,
  };
}

/**
 * Copy a Vec3
 */
export function copy(v: Vec3): Vec3 {
  return { x: v.x, y: v.y, z: v.z };
}

/**
 * Zero Vec3
 */
export function zero(): Vec3 {
  return { x: 0, y: 0, z: 0 };
}
