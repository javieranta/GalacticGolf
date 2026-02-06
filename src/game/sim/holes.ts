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
// Boosted 5x for faster, more exciting gameplay
// Starting positions MUCH closer for better visuals and less empty space
export const HOLES: HoleDef[] = [
  {
    id: 1,
    name: 'Invade Jupiter',
    target: 'Jupiter',
    par: 2,
    timeOffsetSeconds: 0,
    // Closer start - just outside Jupiter's orbit
    startPositionMeters: {
      x: 20 * AU,
      y: 8 * AU,
      z: 0,
    },
    speedHint: { min: 200_000, max: 800_000, recommended: 400_000 }, // Slower speeds for closer distance
    cameraHint: 'BALL',
  },
  {
    id: 2,
    name: 'Conquer Saturn',
    target: 'Saturn',
    par: 3,
    timeOffsetSeconds: 1_200_000,
    startPositionMeters: {
      x: 25 * AU,
      y: -10 * AU,
      z: 0,
    },
    speedHint: { min: 250_000, max: 900_000, recommended: 500_000 },
    cameraHint: 'BALL',
  },
  {
    id: 3,
    name: 'Assault on Mars',
    target: 'Mars',
    par: 2,
    timeOffsetSeconds: 2_600_000,
    startPositionMeters: {
      x: 15 * AU,
      y: 10 * AU,
      z: 0,
    },
    speedHint: { min: 150_000, max: 600_000, recommended: 300_000 },
    cameraHint: 'BALL',
  },
  {
    id: 4,
    name: 'Venus Strike',
    target: 'Venus',
    par: 3,
    timeOffsetSeconds: 3_200_000,
    startPositionMeters: {
      x: -18 * AU,
      y: 12 * AU,
      z: 0,
    },
    speedHint: { min: 180_000, max: 700_000, recommended: 350_000 },
    cameraHint: 'BALL',
  },
  {
    id: 5,
    name: 'Mercury Raid',
    target: 'Mercury',
    par: 4,
    timeOffsetSeconds: 4_400_000,
    startPositionMeters: {
      x: -15 * AU,
      y: -15 * AU,
      z: 0,
    },
    speedHint: { min: 200_000, max: 800_000, recommended: 450_000 },
    cameraHint: 'BALL',
  },
  {
    id: 6,
    name: 'DESTROY EARTH',
    target: 'Earth',
    par: 2,
    timeOffsetSeconds: 5_600_000,
    startPositionMeters: {
      x: 16 * AU,
      y: -8 * AU,
      z: 0,
    },
    speedHint: { min: 150_000, max: 600_000, recommended: 320_000 },
    cameraHint: 'BALL',
  },
  {
    id: 7,
    name: 'Uranus Ambush',
    target: 'Uranus',
    par: 4,
    timeOffsetSeconds: 6_900_000,
    startPositionMeters: {
      x: 30 * AU,
      y: 15 * AU,
      z: 0,
    },
    speedHint: { min: 300_000, max: 1_100_000, recommended: 600_000 },
    cameraHint: 'BALL',
  },
  {
    id: 8,
    name: 'Neptune Siege',
    target: 'Neptune',
    par: 5,
    timeOffsetSeconds: 7_800_000,
    startPositionMeters: {
      x: 40 * AU,
      y: -15 * AU,
      z: 0,
    },
    speedHint: { min: 350_000, max: 1_200_000, recommended: 700_000 },
    cameraHint: 'BALL',
  },
  {
    id: 9,
    name: 'FINAL CONQUEST',
    target: 'Neptune',
    par: 5,
    timeOffsetSeconds: 9_000_000,
    startPositionMeters: {
      x: -35 * AU,
      y: 35 * AU,
      z: 2 * AU,
    },
    speedHint: { min: 400_000, max: 1_500_000, recommended: 800_000 },
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
