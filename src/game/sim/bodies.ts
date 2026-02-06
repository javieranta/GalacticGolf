/**
 * Celestial body definitions for Galactic Golf
 *
 * Uses J2000 epoch orbital elements (approximate, suitable for gameplay)
 * All values in SI units (meters, kilograms, radians, seconds)
 */

import { G, AU } from './units';

export type PlanetName =
  | 'Mercury'
  | 'Venus'
  | 'Earth'
  | 'Mars'
  | 'Jupiter'
  | 'Saturn'
  | 'Uranus'
  | 'Neptune';

export interface OrbitalElements {
  a: number; // semi-major axis (meters)
  e: number; // eccentricity
  i: number; // inclination (radians)
  omega: number; // longitude of ascending node Ω (radians)
  w: number; // argument of perihelion ω (radians)
  M0: number; // mean anomaly at epoch (radians)
}

export interface CelestialBody {
  name: string;
  mass: number; // kg
  radius: number; // meters
  mu: number; // G * mass (m^3/s^2)
  color: string; // hex color for rendering
  orbitalElements?: OrbitalElements;
  meanMotion?: number; // n = sqrt(muSun / a^3) rad/s
  renderScaleFactor: number; // multiplier for visual size
}

// Degrees to radians
const deg = (d: number) => (d * Math.PI) / 180;

// Gameplay gravity multiplier - makes planets "pull" HARD for dramatic effect
// 1500x gives dramatic trajectory bending even at high speeds
const GRAVITY_BOOST = 1500;

// Visual/collision radius multiplier - planets appear MASSIVE for arcade gameplay
// This affects both rendering AND collision/capture detection
export const VISUAL_RADIUS_MULTIPLIER = 500;

// Sun uses a smaller visual multiplier (otherwise it swallows inner planets)
export const SUN_VISUAL_RADIUS_MULTIPLIER = 30;

// Orbit speed multiplier - makes planets visibly move during gameplay
export const ORBIT_SPEED_MULTIPLIER = 50;

// Sun data
export const SUN: CelestialBody = {
  name: 'Sun',
  mass: 1.989e30,
  radius: 6.9634e8,
  mu: G * 1.989e30 * GRAVITY_BOOST,
  color: '#ffdd44',
  renderScaleFactor: 1500, // HUGE for visibility
};

// Planet data with J2000 orbital elements
// Visual sizes (renderScaleFactor) boosted 10x for MASSIVE visibility
// Gravity (mu) boosted 150x for intense gravitational gameplay
export const PLANETS: Record<PlanetName, CelestialBody> = {
  Mercury: {
    name: 'Mercury',
    mass: 3.3011e23,
    radius: 2.4397e6,
    mu: G * 3.3011e23 * GRAVITY_BOOST,
    color: '#b5b5b5',
    renderScaleFactor: 80000, // 10x original
    orbitalElements: {
      a: 0.387098 * AU,
      e: 0.205630,
      i: deg(7.005),
      omega: deg(48.331),
      w: deg(29.124),
      M0: deg(174.796),
    },
  },
  Venus: {
    name: 'Venus',
    mass: 4.8675e24,
    radius: 6.0518e6,
    mu: G * 4.8675e24 * GRAVITY_BOOST,
    color: '#e6c87a',
    renderScaleFactor: 50000, // 10x original
    orbitalElements: {
      a: 0.723332 * AU,
      e: 0.006772,
      i: deg(3.39458),
      omega: deg(76.680),
      w: deg(54.884),
      M0: deg(50.115),
    },
  },
  Earth: {
    name: 'Earth',
    mass: 5.97237e24,
    radius: 6.371e6,
    mu: G * 5.97237e24 * GRAVITY_BOOST,
    color: '#4a9eff',
    renderScaleFactor: 50000, // 10x original
    orbitalElements: {
      a: 1.000001018 * AU,
      e: 0.0167086,
      i: deg(0.00005),
      omega: deg(-11.26064),
      w: deg(114.20783),
      M0: deg(358.617),
    },
  },
  Mars: {
    name: 'Mars',
    mass: 6.4171e23,
    radius: 3.3895e6,
    mu: G * 6.4171e23 * GRAVITY_BOOST,
    color: '#ff6644',
    renderScaleFactor: 60000, // 10x original
    orbitalElements: {
      a: 1.52368055 * AU,
      e: 0.0934,
      i: deg(1.850),
      omega: deg(49.558),
      w: deg(286.502),
      M0: deg(19.373),
    },
  },
  Jupiter: {
    name: 'Jupiter',
    mass: 1.8982e27,
    radius: 6.9911e7,
    mu: G * 1.8982e27 * GRAVITY_BOOST,
    color: '#d4a574',
    renderScaleFactor: 15000, // 10x original
    orbitalElements: {
      a: 5.2038 * AU,
      e: 0.0489,
      i: deg(1.303),
      omega: deg(100.464),
      w: deg(273.867),
      M0: deg(20.020),
    },
  },
  Saturn: {
    name: 'Saturn',
    mass: 5.6834e26,
    radius: 5.8232e7,
    mu: G * 5.6834e26 * GRAVITY_BOOST,
    color: '#f4d59e',
    renderScaleFactor: 18000, // 10x original
    orbitalElements: {
      a: 9.5826 * AU,
      e: 0.0565,
      i: deg(2.485),
      omega: deg(113.665),
      w: deg(339.392),
      M0: deg(317.020),
    },
  },
  Uranus: {
    name: 'Uranus',
    mass: 8.6810e25,
    radius: 2.5362e7,
    mu: G * 8.6810e25 * GRAVITY_BOOST,
    color: '#7de3f4',
    renderScaleFactor: 30000, // 10x original
    orbitalElements: {
      a: 19.19126 * AU,
      e: 0.04717,
      i: deg(0.773),
      omega: deg(74.006),
      w: deg(96.998857),
      M0: deg(142.2386),
    },
  },
  Neptune: {
    name: 'Neptune',
    mass: 1.02413e26,
    radius: 2.4622e7,
    mu: G * 1.02413e26 * GRAVITY_BOOST,
    color: '#4a6eff',
    renderScaleFactor: 30000, // 10x original
    orbitalElements: {
      a: 30.07 * AU,
      e: 0.008678,
      i: deg(1.77),
      omega: deg(131.784),
      w: deg(276.336),
      M0: deg(256.228),
    },
  },
};

// Precompute mean motion for each planet
// n = sqrt(muSun / a^3)
for (const planet of Object.values(PLANETS)) {
  if (planet.orbitalElements) {
    const a = planet.orbitalElements.a;
    planet.meanMotion = Math.sqrt(SUN.mu / (a * a * a));
  }
}

// Helper to get all bodies (Sun + planets) as an array
export function getAllBodies(): CelestialBody[] {
  return [SUN, ...Object.values(PLANETS)];
}

// Helper to get only planets as an array
export function getPlanets(): CelestialBody[] {
  return Object.values(PLANETS);
}

// Helper to get a planet by name
export function getPlanetByName(name: PlanetName): CelestialBody {
  return PLANETS[name];
}

// Planet names array for iteration
export const PLANET_NAMES: PlanetName[] = [
  'Mercury',
  'Venus',
  'Earth',
  'Mars',
  'Jupiter',
  'Saturn',
  'Uranus',
  'Neptune',
];
