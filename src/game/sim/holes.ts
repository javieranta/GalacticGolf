/**
 * Hole definitions for Galactic Golf
 *
 * 9 curated holes with increasing difficulty
 */

import { PlanetName } from './bodies';
import { AU } from './units';

export type CameraHint = 'SYSTEM' | 'TARGET' | 'BALL';

export interface HoleDef {
  id: number;
  name: string;
  target: PlanetName;
  par: number;
  timeOffsetSeconds: number;
  startPositionMeters: { x: number; y: number; z: number };
  speedHint: { min: number; max: number; recommended: number };
  cameraHint?: CameraHint;
}

// Speed hints in m/s (divide by 1000 to get km/s)
// 100,000 m/s = 100 km/s, 500,000 m/s = 500 km/s
export const HOLES: HoleDef[] = [
  {
    id: 1,
    name: 'Invade Jupiter',
    target: 'Jupiter',
    par: 2,
    timeOffsetSeconds: 0,
    // Start from outside solar system (Neptune is at 30 AU)
    startPositionMeters: {
      x: 60 * AU,
      y: 20 * AU,
      z: 0,
    },
    speedHint: { min: 100_000, max: 400_000, recommended: 200_000 }, // 100-400 km/s
    cameraHint: 'BALL',
  },
  {
    id: 2,
    name: 'Conquer Saturn',
    target: 'Saturn',
    par: 3,
    timeOffsetSeconds: 1_200_000,
    startPositionMeters: {
      x: 70 * AU,
      y: -25 * AU,
      z: 0,
    },
    speedHint: { min: 120_000, max: 450_000, recommended: 250_000 },
    cameraHint: 'BALL',
  },
  {
    id: 3,
    name: 'Assault on Mars',
    target: 'Mars',
    par: 2,
    timeOffsetSeconds: 2_600_000,
    startPositionMeters: {
      x: 50 * AU,
      y: 30 * AU,
      z: 0,
    },
    speedHint: { min: 80_000, max: 350_000, recommended: 180_000 },
    cameraHint: 'BALL',
  },
  {
    id: 4,
    name: 'Venus Strike',
    target: 'Venus',
    par: 3,
    timeOffsetSeconds: 3_200_000,
    startPositionMeters: {
      x: -55 * AU,
      y: 35 * AU,
      z: 0,
    },
    speedHint: { min: 100_000, max: 400_000, recommended: 220_000 },
    cameraHint: 'BALL',
  },
  {
    id: 5,
    name: 'Mercury Raid',
    target: 'Mercury',
    par: 4,
    timeOffsetSeconds: 4_400_000,
    startPositionMeters: {
      x: -45 * AU,
      y: -50 * AU,
      z: 0,
    },
    speedHint: { min: 120_000, max: 500_000, recommended: 280_000 },
    cameraHint: 'BALL',
  },
  {
    id: 6,
    name: 'DESTROY EARTH',
    target: 'Earth',
    par: 2,
    timeOffsetSeconds: 5_600_000,
    startPositionMeters: {
      x: 55 * AU,
      y: -20 * AU,
      z: 0,
    },
    speedHint: { min: 90_000, max: 380_000, recommended: 200_000 },
    cameraHint: 'BALL',
  },
  {
    id: 7,
    name: 'Uranus Ambush',
    target: 'Uranus',
    par: 4,
    timeOffsetSeconds: 6_900_000,
    startPositionMeters: {
      x: 80 * AU,
      y: 40 * AU,
      z: 0,
    },
    speedHint: { min: 140_000, max: 550_000, recommended: 320_000 },
    cameraHint: 'BALL',
  },
  {
    id: 8,
    name: 'Neptune Siege',
    target: 'Neptune',
    par: 5,
    timeOffsetSeconds: 7_800_000,
    startPositionMeters: {
      x: 100 * AU,
      y: -35 * AU,
      z: 0,
    },
    speedHint: { min: 160_000, max: 600_000, recommended: 360_000 },
    cameraHint: 'BALL',
  },
  {
    id: 9,
    name: 'FINAL CONQUEST',
    target: 'Neptune',
    par: 5,
    timeOffsetSeconds: 9_000_000,
    startPositionMeters: {
      x: -80 * AU,
      y: 90 * AU,
      z: 5 * AU,
    },
    speedHint: { min: 200_000, max: 800_000, recommended: 500_000 },
    cameraHint: 'BALL',
  },
];

/**
 * Get hole by ID (1-indexed)
 */
export function getHole(id: number): HoleDef | undefined {
  return HOLES.find((h) => h.id === id);
}

/**
 * Get total par for all holes
 */
export function getTotalPar(): number {
  return HOLES.reduce((sum, hole) => sum + hole.par, 0);
}

/**
 * Number of holes
 */
export const TOTAL_HOLES = HOLES.length;
