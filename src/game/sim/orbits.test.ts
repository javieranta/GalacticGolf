/**
 * Unit tests for Kepler solver and orbit calculations
 */

import { describe, it, expect } from 'vitest';
import {
  solveKepler,
  eccentricToTrueAnomaly,
  orbitalRadius,
  orbitalToHeliocentric,
  getBodyPosition,
  magnitude,
  normalize,
  distance,
} from './orbits';
import { PLANETS, SUN } from './bodies';
import { AU } from './units';

describe('Kepler Solver', () => {
  it('should return E = M for circular orbit (e = 0)', () => {
    const testCases = [0, Math.PI / 4, Math.PI / 2, Math.PI, 3 * Math.PI / 2];

    for (const M of testCases) {
      const E = solveKepler(M, 0);
      expect(Math.abs(E - M)).toBeLessThan(1e-10);
    }
  });

  it('should satisfy Kepler equation |E - e*sin(E) - M| < tolerance for various e', () => {
    const eccentricities = [0.01, 0.1, 0.3, 0.5, 0.7, 0.9];
    const meanAnomalies = [0.1, 1.0, Math.PI, 5.0];

    for (const e of eccentricities) {
      for (const M of meanAnomalies) {
        const E = solveKepler(M, e);
        const residual = Math.abs(E - e * Math.sin(E) - (M % (2 * Math.PI)));
        expect(residual).toBeLessThan(1e-9);
      }
    }
  });

  it('should handle high eccentricity (e = 0.9)', () => {
    const M = Math.PI / 2;
    const e = 0.9;
    const E = solveKepler(M, e);
    const residual = Math.abs(E - e * Math.sin(E) - M);
    expect(residual).toBeLessThan(1e-9);
  });

  it('should handle negative mean anomaly', () => {
    const M = -Math.PI / 4;
    const e = 0.2;
    const E = solveKepler(M, e);
    // Should normalize and solve correctly
    expect(isFinite(E)).toBe(true);
  });

  it('should handle large mean anomaly (multiple orbits)', () => {
    const M = 10 * Math.PI + 0.5; // Many orbits
    const e = 0.3;
    const E = solveKepler(M, e);
    expect(isFinite(E)).toBe(true);
    // Check residual with normalized M
    const normalizedM = M % (2 * Math.PI);
    const residual = Math.abs(E - e * Math.sin(E) - normalizedM);
    expect(residual).toBeLessThan(1e-9);
  });
});

describe('Orbital Position', () => {
  it('should compute orbital radius correctly at perihelion and aphelion', () => {
    const a = 1.0 * AU; // 1 AU
    const e = 0.2;

    // At perihelion, E = 0, r = a(1-e)
    const rPeri = orbitalRadius(a, e, 0);
    expect(Math.abs(rPeri - a * (1 - e))).toBeLessThan(1);

    // At aphelion, E = PI, r = a(1+e)
    const rApo = orbitalRadius(a, e, Math.PI);
    expect(Math.abs(rApo - a * (1 + e))).toBeLessThan(1);
  });

  it('should return position at origin for Sun', () => {
    const pos = getBodyPosition(SUN, 0);
    expect(pos.x).toBe(0);
    expect(pos.y).toBe(0);
    expect(pos.z).toBe(0);
  });

  it('should return finite positions for all planets at t=0', () => {
    for (const planet of Object.values(PLANETS)) {
      const pos = getBodyPosition(planet, 0);
      expect(isFinite(pos.x)).toBe(true);
      expect(isFinite(pos.y)).toBe(true);
      expect(isFinite(pos.z)).toBe(true);
    }
  });

  it('should return positions within expected orbital range', () => {
    for (const planet of Object.values(PLANETS)) {
      if (!planet.orbitalElements) continue;

      const { a, e } = planet.orbitalElements;
      const perihelion = a * (1 - e);
      const aphelion = a * (1 + e);

      const pos = getBodyPosition(planet, 0);
      const r = magnitude(pos);

      // Allow 1% tolerance for numerical error
      expect(r).toBeGreaterThan(perihelion * 0.99);
      expect(r).toBeLessThan(aphelion * 1.01);
    }
  });

  it('should return stable positions for large t (1e8 seconds)', () => {
    const t = 1e8; // ~3 years

    for (const planet of Object.values(PLANETS)) {
      const pos = getBodyPosition(planet, t);
      expect(isFinite(pos.x)).toBe(true);
      expect(isFinite(pos.y)).toBe(true);
      expect(isFinite(pos.z)).toBe(true);

      // Position should still be in valid range
      if (planet.orbitalElements) {
        const { a, e } = planet.orbitalElements;
        const r = magnitude(pos);
        const perihelion = a * (1 - e);
        const aphelion = a * (1 + e);
        expect(r).toBeGreaterThan(perihelion * 0.99);
        expect(r).toBeLessThan(aphelion * 1.01);
      }
    }
  });

  it('should return different positions at different times', () => {
    const earth = PLANETS.Earth;
    const pos1 = getBodyPosition(earth, 0);
    const pos2 = getBodyPosition(earth, 86400 * 30); // 30 days

    const d = distance(pos1, pos2);
    expect(d).toBeGreaterThan(1e9); // Should have moved significantly
  });
});

describe('Vector utilities', () => {
  it('should normalize vectors correctly', () => {
    const v = { x: 3, y: 4, z: 0 };
    const n = normalize(v);

    expect(Math.abs(magnitude(n) - 1)).toBeLessThan(1e-10);
    expect(n.x).toBeCloseTo(0.6);
    expect(n.y).toBeCloseTo(0.8);
  });

  it('should handle zero vector in normalize', () => {
    const v = { x: 0, y: 0, z: 0 };
    const n = normalize(v);
    expect(n.x).toBe(0);
    expect(n.y).toBe(0);
    expect(n.z).toBe(0);
  });

  it('should compute distance correctly', () => {
    const a = { x: 0, y: 0, z: 0 };
    const b = { x: 3, y: 4, z: 0 };
    expect(distance(a, b)).toBe(5);
  });
});

describe('Orbital rotation', () => {
  it('should preserve distance from origin', () => {
    const x = 1e11;
    const y = 0;
    const z = 0;

    const result = orbitalToHeliocentric(x, y, z, Math.PI / 4, Math.PI / 6, Math.PI / 3);
    const r = Math.sqrt(result.x ** 2 + result.y ** 2 + result.z ** 2);

    expect(Math.abs(r - x)).toBeLessThan(1); // Should be same distance
  });

  it('should return input for zero angles', () => {
    const x = 1e11;
    const y = 5e10;
    const z = 0;

    const result = orbitalToHeliocentric(x, y, z, 0, 0, 0);

    expect(Math.abs(result.x - x)).toBeLessThan(1);
    expect(Math.abs(result.y - y)).toBeLessThan(1);
    expect(Math.abs(result.z - z)).toBeLessThan(1);
  });
});
