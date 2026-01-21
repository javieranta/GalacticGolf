# Galactic Golf

A 3D browser game where you launch a golf ball through a simulated solar system. Planets move on realistic Keplerian orbits, and the ball is influenced by Newtonian gravity from the Sun and all 8 planets.

## Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Open http://localhost:3000 in your browser
```

## How to Play

1. **Aim**: Click and drag in the game view to aim your shot. The drag direction (opposite to launch) sets the trajectory.
2. **Power**: The length of your drag determines the launch power (shown in the power meter).
3. **Release**: Let go to launch the ball toward your target planet.
4. **Score**: Each shot counts as a stroke. Try to reach each planet in as few strokes as possible.

### Controls

- **Mouse drag**: Aim and set power
- **Reset Shot**: Return ball to starting position
- **Focus Ball/Target**: Move camera to ball or target planet
- **Reset View**: Return camera to default position

### Settings

- **Time Scale**: Adjust simulation speed (faster = quicker orbits)
- **Aim Assist**: Helps guide your shots toward the target (recommended for beginners)
- **Orbit Lines**: Toggle visibility of planetary orbit paths
- **Hints**: Show/hide recommended speed hints

## The 9 Holes

| Hole | Name | Target | Par |
|------|------|--------|-----|
| 1 | Welcome to Jupiter | Jupiter | 2 |
| 2 | Saturn Rings Run | Saturn | 3 |
| 3 | Mars Hop | Mars | 2 |
| 4 | Venus Whip | Venus | 3 |
| 5 | Mercury Dive | Mercury | 4 |
| 6 | Earth Home | Earth | 2 |
| 7 | Uranus Drift | Uranus | 4 |
| 8 | Neptune Long Shot | Neptune | 5 |
| 9 | Pluto-ish Finale | Neptune | 5 |

## Physics

### Orbital Mechanics

Planets follow Keplerian orbits computed from J2000 epoch orbital elements:

- **Kepler's Equation**: `M = E - e*sin(E)` solved via Newton-Raphson iteration
- **Position**: Computed from semi-major axis, eccentricity, inclination, and angular elements
- **Mean Motion**: `n = sqrt(μ_sun / a³)` determines orbital period

### Gravity Simulation

The ball experiences Newtonian gravity from all celestial bodies:

```
a = Σ(-μᵢ * (r - rᵢ) / |r - rᵢ|³)
```

Where μ = G*M for each body (Sun + 8 planets).

### Integration

Uses Velocity-Verlet integration for stability:

1. `v(t+dt/2) = v(t) + a(t)*dt/2`
2. `x(t+dt) = x(t) + v(t+dt/2)*dt`
3. `a(t+dt) = accel(x(t+dt))`
4. `v(t+dt) = v(t+dt/2) + a(t+dt)*dt/2`

Adaptive substepping increases precision near planets:
- Within 25 radii: 16 substeps
- Within 60 radii: 8 substeps
- Otherwise: 2 substeps

### Units

- **Physics**: SI units (meters, seconds, kilograms)
- **Rendering**: 1 render unit = 10⁹ meters
- **Planetary radii**: Scaled up for visibility (physics uses real radii)

## Arcade Assists

The game includes several assists to make gameplay fun while maintaining physical realism:

1. **Generous Capture**: Target planets have enlarged capture zones
2. **Bounce Mechanics**: Hitting non-target planets bounces you off (with energy loss) instead of instant failure
3. **Deep Space Rescue**: Balls headed into deep space are rescued early
4. **Aim Assist**: Subtle guidance toward your target when aiming nearby
5. **Preview Arc**: Shows predicted trajectory while aiming

## Testing

```bash
# Run unit tests (Kepler solver, physics, etc.)
npm run test

# Run simulation scenario tests
npm run test:sim

# Build for production
npm run build
```

### Test Coverage

- **Kepler Solver**: Verifies E - e*sin(E) = M within tolerance
- **Orbit Positions**: Checks planets stay within perihelion/aphelion bounds
- **Gravity**: Validates acceleration direction and magnitude
- **Integration**: Tests energy conservation over time
- **Scenarios**: Full simulation runs for each hole configuration

## Tech Stack

- **Vite** - Build tool and dev server
- **TypeScript** - Type-safe JavaScript
- **Three.js** - 3D rendering
- **React** - UI components
- **Zustand** - State management
- **Tailwind CSS** - Styling
- **Vitest** - Testing framework

## Project Structure

```
src/
├── main.tsx              # Entry point
├── app/App.tsx           # Main React component
├── styles.css            # Tailwind + custom styles
├── store/
│   └── useGameStore.ts   # Zustand state management
└── game/
    ├── Game.ts           # Main game loop
    ├── scene.ts          # Three.js scene setup
    ├── input/
    │   └── aim.ts        # Mouse/touch input handling
    ├── ui/
    │   ├── HUD.tsx       # Heads-up display
    │   └── Scorecard.tsx # Final scorecard
    └── sim/
        ├── units.ts      # Constants and conversions
        ├── bodies.ts     # Planetary data
        ├── orbits.ts     # Kepler solver
        ├── physics.ts    # Gravity and integration
        ├── collisions.ts # Hit detection and rules
        └── holes.ts      # Hole definitions
```

## Performance

- Target: 60 FPS
- Adaptive time scaling degrades gracefully
- Efficient substep count based on proximity
- Trail rendering with vertex colors (no texture swaps)

## License

MIT
