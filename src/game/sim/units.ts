/**
 * Unit conversion helpers for Galactic Golf
 *
 * Physics uses SI units (meters, seconds, kilograms)
 * Rendering uses scaled units where 1 render unit = 1e9 meters
 */

// Astronomical constants
export const AU = 149_597_870_700; // meters per astronomical unit
export const G = 6.67430e-11; // gravitational constant (m^3 kg^-1 s^-2)

// Rendering scale: 1 render unit = SCALE_FACTOR meters
export const SCALE_FACTOR = 1e9;

/**
 * Convert meters to render units
 */
export function toRender(meters: number): number {
  return meters / SCALE_FACTOR;
}

/**
 * Convert render units to meters
 */
export function toMeters(renderUnits: number): number {
  return renderUnits * SCALE_FACTOR;
}

/**
 * Convert AU to meters
 */
export function auToMeters(au: number): number {
  return au * AU;
}

/**
 * Convert meters to AU
 */
export function metersToAu(meters: number): number {
  return meters / AU;
}

/**
 * Convert AU directly to render units
 */
export function auToRender(au: number): number {
  return toRender(auToMeters(au));
}

// Ball radius for collision detection (gameplay purposes)
export const BALL_RADIUS_METERS = 2_000_000;

// Deep space thresholds (in meters)
export const DEEP_SPACE_RESCUE_DISTANCE = 150 * AU; // 150 AU - very far
export const BOUNDS_FAIL_DISTANCE = 200 * AU; // 200 AU - edge of simulation
export const DEEP_SPACE_PLANET_CHECK = 15 * AU; // no planet within this range

// Time limits
export const ATTEMPT_TIMEOUT_REAL_SECONDS = 90;

// Time scale bounds (sim seconds per real second)
// At 1M scale, 1 real second = ~11.5 days of sim time
// Time scale range - user can adjust via slider
export const MIN_TIME_SCALE = 100_000;
export const MAX_TIME_SCALE = 5_000_000;
export const DEFAULT_TIME_SCALE = 300_000; // 3x faster for better ship movement

// Simulation timestep bounds (in sim seconds per frame)
// Higher values = faster simulation but less accurate
export const MIN_DT_SIM = 100;
export const MAX_DT_SIM = 10000; // Reasonable for stability
