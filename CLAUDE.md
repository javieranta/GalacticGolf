# Claude Code Instructions for Galactic Golf (Alien Invasion)

## FIRST: Read the Development Log
**IMPORTANT**: Read `DEVELOPMENT_LOG.md` at the start of each session. It contains:
- History of bugs found and fixed
- What approaches were tried and their results
- Architecture decisions and key code locations
- Lessons learned that will save you debugging time

## Project Overview
A 3D browser game where alien spaceships invade planets in the solar system using slingshot-style aiming mechanics.

**Tech Stack:** Vite + TypeScript + React + Three.js + Zustand + Tailwind CSS

## Project Structure
```
src/
├── app/App.tsx           # Main React app component
├── store/useGameStore.ts # Zustand state management (bridges Game ↔ React)
├── game/
│   ├── Game.ts           # Main game controller, loop, state machine
│   ├── scene.ts          # Three.js scene, rendering, camera, visual objects
│   ├── input/aim.ts      # Slingshot aiming mechanics
│   ├── sim/              # Physics simulation
│   │   ├── physics.ts    # Gravity, Velocity-Verlet integration
│   │   ├── orbits.ts     # Planet orbital mechanics
│   │   ├── collisions.ts # Collision detection
│   │   ├── bodies.ts     # Planet/Sun definitions
│   │   ├── holes.ts      # Level definitions (missions)
│   │   └── units.ts      # Unit conversion, time scales
│   └── ui/               # React UI components
│       ├── HUD.tsx       # In-game HUD
│       └── Scorecard.tsx # End-game scorecard
├── styles.css            # Tailwind + custom styles
├── main.tsx              # Entry point
└── test-standalone.ts    # Minimal Three.js test (for debugging)
```

## Key Technical Details

### Coordinate Systems
- **Physics**: Uses SI units (meters, seconds)
- **Rendering**: 1 render unit = 1e9 meters (1 billion meters)
- **Coordinate swap**: Physics (x, y, z) → Three.js (x, z, y) - Y and Z are swapped
- Ship starts at ~60 AU = ~9000 render units from sun

### Game Loop Flow
1. `Game.ts` runs `requestAnimationFrame` loop
2. Each frame:
   - If aiming: `updateAiming()` → updates aim visualization
   - If simulating: `updateSimulation()` → physics, collisions, ball position
   - Always: `updatePlanetPositions()` → move planets in orbits
   - Always: `scene.render()` → Three.js render call

### React Integration
- `App.tsx` creates a container div and calls `useGameStore.initGame(container)`
- `useGameStore` creates `Game` instance which creates `GameScene`
- React StrictMode causes mount/unmount/remount cycles - dispose must clean up properly!

## Running the Project
```bash
npm run dev    # Start dev server at http://localhost:3000
npm run build  # Production build
npx tsc --noEmit  # Type check without building
```

### Debug Mode
Add `?test=standalone` to URL for minimal Three.js test:
- http://localhost:3000/?test=standalone
- Shows a simple rotating cube to verify Three.js works independently

## Critical Bug Fix (2026-01-21)

### The "Movement Not Rendering" Bug
**Symptom**: Physics worked (console showed positions changing) but visuals were static.

**Root Cause**: React StrictMode double-mounting caused multiple canvas elements. The `dispose()` function didn't remove the canvas from DOM, so the old dead canvas was stacked on top of the new active one.

**Fix**: Added canvas removal in `scene.ts` dispose():
```typescript
public dispose(): void {
  this.disposed = true;
  window.removeEventListener('resize', this.handleResize);

  // CRITICAL: Remove the canvas from DOM so it doesn't block the new one!
  if (this.renderer.domElement.parentElement) {
    this.renderer.domElement.parentElement.removeChild(this.renderer.domElement);
  }

  this.renderer.dispose();
  this.controls.dispose();
}
```

**Key Lesson**: Always remove DOM elements in cleanup functions. If values change but visuals don't update, consider multiple overlapping elements.

## Common Issues & Solutions

### "Changes don't appear after editing"
- `scene.ts` changes require full page reload (Cmd+Shift+R)
- HMR only works for React components and CSS
- Check vite terminal for compilation errors

### "Objects visible but don't move"
1. Check if dispose() properly removes old canvases
2. Verify render() is being called (add frame counter)
3. Check console for errors
4. Try the standalone test (`?test=standalone`)

### "Can't see objects"
- Objects might be hidden behind the sun (move away from origin)
- Camera might be pointing wrong direction
- Check near/far clipping planes (currently 1 to 100000)
- Scale might be wrong (render units are huge)

## Update the Development Log
**Update `DEVELOPMENT_LOG.md`** when:
- A significant bug is found or fixed
- A new approach is tried (document result)
- Important architecture decisions are made
- You learn something that would help future debugging
