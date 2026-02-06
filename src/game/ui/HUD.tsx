/**
 * HUD component for Galactic Golf
 */

import React, { useEffect, useState } from 'react';
import { useGameStore } from '../../store/useGameStore';
import { MIN_TIME_SCALE, MAX_TIME_SCALE } from '../sim/units';
import { TOTAL_HOLES } from '../sim/holes';

export const HUD: React.FC = () => {
  const {
    phase,
    currentHole,
    strokes,
    currentHoleDef,
    timeScale,
    aimAssistEnabled,
    orbitLinesEnabled,
    hintsEnabled,
    lastToast,
    toastTimestamp,
    isAiming,
    isDragging,
    power,
    resetShot,
    nextHole,
    setTimeScale,
    setAimAssist,
    setOrbitLines,
    setHints,
    focusBall,
    focusTarget,
    resetView,
  } = useGameStore();

  const [showToast, setShowToast] = useState(false);

  // Toast display logic
  useEffect(() => {
    if (lastToast && toastTimestamp > 0) {
      setShowToast(true);
      const timer = setTimeout(() => {
        setShowToast(false);
      }, 2500);
      return () => clearTimeout(timer);
    }
  }, [lastToast, toastTimestamp]);

  // Format time scale for display
  const formatTimeScale = (scale: number): string => {
    if (scale >= 1_000_000) {
      return `${(scale / 1_000_000).toFixed(1)}M`;
    }
    return `${(scale / 1000).toFixed(0)}K`;
  };

  return (
    <div className="absolute inset-0 pointer-events-none">
      {/* Top Left - Mission Info */}
      <div className="absolute top-4 left-4 pointer-events-auto">
        <div className="bg-black/70 backdrop-blur-sm rounded-lg p-4 text-white min-w-[220px] border border-green-500/30">
          <div className="text-xl font-bold mb-2 text-green-400">
            Mission {currentHole}/{TOTAL_HOLES}
          </div>
          {currentHoleDef && (
            <>
              <div className="text-sm text-green-300/80 mb-2">{currentHoleDef.name}</div>
              <div className="flex gap-4 text-sm">
                <div>
                  Target: <span className="text-red-400 font-bold">{currentHoleDef.target}</span>
                </div>
                <div>
                  Req: <span className="text-yellow-400">{currentHoleDef.par} tries</span>
                </div>
              </div>
              <div className="mt-2 text-lg">
                Attempts: <span className="text-green-400 font-bold">{strokes}</span>
              </div>
            </>
          )}
        </div>
      </div>

      {/* Top Right - Settings */}
      <div className="absolute top-4 right-4 pointer-events-auto">
        <div className="bg-black/60 backdrop-blur-sm rounded-lg p-4 text-white min-w-[220px]">
          {/* Time Scale */}
          <div className="mb-3">
            <label className="text-sm text-gray-300 block mb-1">
              Time Scale: {formatTimeScale(timeScale)}x
            </label>
            <input
              type="range"
              min={MIN_TIME_SCALE}
              max={MAX_TIME_SCALE}
              step={50000}
              value={timeScale}
              onChange={(e) => setTimeScale(Number(e.target.value))}
              className="w-full accent-cyan-500"
            />
          </div>

          {/* Toggles */}
          <div className="space-y-2 text-sm">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={aimAssistEnabled}
                onChange={(e) => setAimAssist(e.target.checked)}
                className="accent-cyan-500"
              />
              <span>Aim Assist</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={orbitLinesEnabled}
                onChange={(e) => setOrbitLines(e.target.checked)}
                className="accent-cyan-500"
              />
              <span>Orbit Lines</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={hintsEnabled}
                onChange={(e) => setHints(e.target.checked)}
                className="accent-cyan-500"
              />
              <span>Hints</span>
            </label>
          </div>
        </div>
      </div>

      {/* Center - Power percentage only (line shows visual) */}
      {phase === 'aiming' && isDragging && (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
          <div className="bg-black/80 backdrop-blur-sm rounded-full px-6 py-3 text-white text-center">
            <div className="text-2xl font-bold">{Math.round(power * 100)}%</div>
          </div>
        </div>
      )}

      {/* Aim instruction - positioned at top, not blocking */}
      {phase === 'aiming' && !isDragging && (
        <div className="absolute top-24 left-1/2 -translate-x-1/2 pointer-events-none">
          <div className="bg-green-700/90 backdrop-blur-sm rounded-lg px-6 py-4 text-center border border-green-400/50">
            <div className="text-green-300 text-xl font-bold mb-1">
              Launch your invasion fleet!
            </div>
            <div className="text-white text-sm">
              Click anywhere + Drag to aim, release to launch
            </div>
          </div>
        </div>
      )}

      {phase === 'success' && (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-auto">
          <div className="bg-black/90 backdrop-blur-sm rounded-lg p-6 text-white text-center border-2 border-green-500">
            <div className="text-3xl font-bold text-green-400 mb-2">PLANET CONQUERED!</div>
            <div className="text-green-300 text-lg mb-4">
              Invasion successful in {strokes} attempt{strokes !== 1 ? 's' : ''}
            </div>
            <button
              onClick={nextHole}
              className="px-6 py-3 bg-green-600 hover:bg-green-500 rounded-lg font-bold transition-colors text-lg"
            >
              {currentHole >= TOTAL_HOLES ? 'View Conquest Report' : 'Next Target'}
            </button>
          </div>
        </div>
      )}

      {/* Bottom - Controls */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 pointer-events-auto">
        <div className="flex gap-2">
          <button
            onClick={resetShot}
            disabled={phase === 'success' || phase === 'scorecard'}
            className="px-4 py-2 bg-black/60 hover:bg-black/80 disabled:opacity-50 disabled:cursor-not-allowed text-white rounded-lg backdrop-blur-sm transition-colors"
          >
            Reset Shot
          </button>
          <button
            onClick={focusBall}
            className="px-4 py-2 bg-black/60 hover:bg-black/80 text-white rounded-lg backdrop-blur-sm transition-colors"
          >
            Focus Ball
          </button>
          <button
            onClick={focusTarget}
            className="px-4 py-2 bg-black/60 hover:bg-black/80 text-white rounded-lg backdrop-blur-sm transition-colors"
          >
            Focus Target
          </button>
          <button
            onClick={resetView}
            className="px-4 py-2 bg-black/60 hover:bg-black/80 text-white rounded-lg backdrop-blur-sm transition-colors"
          >
            Reset View
          </button>
        </div>
      </div>

      {/* Speed Hint */}
      {phase === 'aiming' && hintsEnabled && currentHoleDef && (
        <div className="absolute bottom-20 left-1/2 -translate-x-1/2 pointer-events-none">
          <div className="bg-black/40 backdrop-blur-sm rounded px-3 py-1 text-white/60 text-sm">
            Recommended speed: ~{(currentHoleDef.speedHint.recommended / 1000).toFixed(0)} km/s
          </div>
        </div>
      )}

      {/* Toast */}
      {showToast && lastToast && (
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none animate-fade-in">
          <div className="bg-black/80 backdrop-blur-sm rounded-lg px-6 py-3 text-white text-xl font-bold">
            {lastToast}
          </div>
        </div>
      )}

      {/* Debug info */}
      <div className="absolute bottom-4 left-4 pointer-events-none">
        <div className="bg-black/80 rounded px-3 py-2 text-xs font-mono border border-green-500/50">
          <div className="text-green-400">Phase: {phase}</div>
          <div className={isAiming ? 'text-green-400' : 'text-red-400'}>
            Aiming: {isAiming ? 'READY' : 'OFF'}
          </div>
          <div className={isDragging ? 'text-yellow-400 font-bold' : 'text-white/50'}>
            Dragging: {isDragging ? 'YES!' : 'no'}
          </div>
          <div className="text-cyan-400">Power: {(power * 100).toFixed(0)}%</div>
        </div>
      </div>

      {/* Large dragging indicator */}
      {isDragging && (
        <div className="absolute inset-0 pointer-events-none border-4 border-green-500/50 animate-pulse" />
      )}

      {/* Version number */}
      <div className="absolute bottom-4 right-4 pointer-events-none">
        <div className="text-white/30 text-xs font-mono">v1.5.0</div>
      </div>
    </div>
  );
};
