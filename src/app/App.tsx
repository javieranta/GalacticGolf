/**
 * Main App component for Galactic Golf
 */

import React, { useEffect, useRef } from 'react';
import { useGameStore } from '../store/useGameStore';
import { HUD } from '../game/ui/HUD';
import { Scorecard } from '../game/ui/Scorecard';

export const App: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { initGame, disposeGame, phase } = useGameStore();

  useEffect(() => {
    if (containerRef.current) {
      initGame(containerRef.current);
    }

    return () => {
      disposeGame();
    };
  }, [initGame, disposeGame]);

  return (
    <div className="w-screen h-screen overflow-hidden bg-space-dark relative">
      {/* Three.js canvas container */}
      <div ref={containerRef} className="w-full h-full" />

      {/* HUD Overlay */}
      <HUD />

      {/* Scorecard Modal */}
      {phase === 'scorecard' && <Scorecard />}

      {/* Title */}
      <div className="absolute top-4 left-1/2 -translate-x-1/2 pointer-events-none">
        <h1 className="text-3xl font-bold text-green-400 tracking-wider drop-shadow-lg">
          ALIEN INVASION
        </h1>
        <p className="text-center text-green-300/60 text-sm">Conquer the Solar System!</p>
      </div>
    </div>
  );
};
