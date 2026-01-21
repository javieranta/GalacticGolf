# Galactic Golf Development Log

## Project Overview
A 3D browser game where alien spaceships invade planets in the solar system using slingshot-style aiming mechanics.

**Tech Stack:** Vite + TypeScript + React + Three.js + Zustand + Tailwind CSS

---

## MAJOR BUG FIX: Ship Movement Not Rendering (2026-01-21)

### Problem
The ship's position was updating correctly in the physics simulation (verified via console logs), but the visual representation did not move on screen.

### Debugging Journey

#### What We Observed
1. Physics simulation worked - distance from sun decreased in logs
2. `ballMesh.position.set()` was called with changing values
3. Before/After positions differed in console
4. Mesh was visible and in scene
5. Camera was in scene with correct position logged

#### What We Tried (Didn't Work)
1. Changed ship container from `THREE.Mesh()` to `THREE.Group()` - no effect
2. Added debug spheres (red=moving, blue=static) - they didn't move either
3. Disabled OrbitControls completely - no effect
4. Fixed camera position manually - no effect
5. Added explicit `matrixAutoUpdate = true` and `updateMatrix()` calls - no effect
6. Created fresh camera each frame - no effect

#### The Breakthrough
Created a **standalone Three.js test** (`?test=standalone`) that worked perfectly. This proved Three.js itself was fine.

Then we noticed:
- Frame counter in debug panel was incrementing (render() was called)
- Object position values were changing in memory
- But visuals were completely static

**Key Insight**: The standalone test clears `document.body.innerHTML` before adding its canvas. The game doesn't.

### Root Cause Found
**React StrictMode double-mounting** was the culprit:

1. React creates GameScene instance #1 → canvas #1 added to container
2. React StrictMode unmounts → `dispose()` called, but **canvas #1 stays in DOM**
3. React creates GameScene instance #2 → canvas #2 added to container
4. **Canvas #1 (dead, static) is stacked ON TOP of canvas #2 (active, animating)**
5. User sees canvas #1 which never updates!

### The Fix
Added canvas removal in `scene.ts` `dispose()`:

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

### Lessons Learned

1. **Always remove DOM elements in cleanup/dispose functions** - WebGL dispose() doesn't remove the canvas
2. **React StrictMode reveals disposal bugs** - double-mounting is a feature, not a bug
3. **"Values change but visuals don't" = consider overlapping elements** - multiple canvases, z-index issues
4. **Create standalone tests** - isolating Three.js from React/game logic helped identify the issue
5. **Debug panels that update prove render() is called** - if panel updates but scene doesn't, it's not a render loop issue

---

## Previously Solved Issues

### 1. Aim Line Not Visible
**Problem**: The slingshot aim line wasn't showing when dragging
**Solution**: Changed from THREE.Line (thin, hard to see at interplanetary scale) to sprites (billboards that always face camera)
**Files**: `src/game/scene.ts`, `src/game/input/aim.ts`

### 2. Ship Going Out of Bounds Immediately
**Problem**: Ship would get "lost in space" instantly after launch
**Solution**: Reduced launch speeds from 5-40 million m/s to 100-800 thousand m/s
**Files**: `src/game/sim/holes.ts`, `src/game/sim/units.ts`

### 3. Starfield Clustered Around Inner Planets
**Problem**: Stars appeared concentrated near the sun instead of as distant backdrop
**Solution**: Increased starfield sphere radius from 800-1000 to 25000-35000 render units
**Files**: `src/game/scene.ts` - `createStarfield()`

### 4. Forward Line Showing (Suggested Direction)
**Problem**: A confusing line appeared pointing toward target
**Solution**: Disabled the suggested line entirely
**Files**: `src/game/Game.ts`, `src/game/scene.ts`

### 5. Right-Click Context Menu Blocking Camera Rotation
**Problem**: Right-click opened browser menu instead of rotating camera
**Solution**: Added `e.preventDefault()` on contextmenu event
**Files**: `src/game/scene.ts`

---

## Architecture Notes

### Game Loop (Game.ts)
1. `requestAnimationFrame` loop in `Game.ts`
2. Each frame:
   - If aiming: update aim visualization
   - If simulating: run physics, check collisions, update visuals
   - Always: update planet positions, call `scene.render()`

### Physics
- Newtonian gravity with Velocity-Verlet integration
- Adaptive substepping based on proximity to planets
- Time scale: ~1.5M sim seconds per real second

### Rendering Scale
- 1 AU = 149.6 billion meters
- 1 render unit = 1 billion meters
- So 1 AU ≈ 150 render units
- Ship starts at 60 AU ≈ 9000 render units

### Coordinate Conversion
- Physics uses meters (SI units)
- Render uses: 1 render unit = 1e9 meters
- Physics (x, y, z) → Three.js (x, z, y) - Y and Z are swapped

---

## Debug Tools Available

### Standalone Three.js Test
Access via: `http://localhost:3000/?test=standalone`
- Bypasses all game code
- Simple rotating cube
- If this works but game doesn't, issue is in game code

### Key Files for Debugging
- **Physics update**: `src/game/Game.ts` - `updateSimulation()` method
- **Position update**: `src/game/scene.ts` - `updateBallPosition()` method
- **Ship creation**: `src/game/scene.ts` - `createBall()` method
- **Render loop**: `src/game/scene.ts` - `render()` method
- **Camera follow**: `src/game/scene.ts` - `followBall()` method

---

## Current State (2026-01-21)

### What's Working
- Ship movement renders correctly
- Physics simulation
- Slingshot aiming
- Planet orbits
- Camera controls (OrbitControls)
- Collision detection
- Trail rendering

### Known Remaining Issues
- None currently documented

### Files Modified in This Session
- `src/game/scene.ts` - Added canvas removal in dispose(), cleaned up debug code
- `src/game/Game.ts` - Auto-launch is commented out (was for testing)
- `src/main.tsx` - Added standalone test mode
- `src/test-standalone.ts` - Created for debugging
