/**
 * Zustand store for game state
 *
 * Bridges the Game class with React components
 */

import { create } from 'zustand';
import { Game, GameState, GamePhase, HoleScore } from '../game/Game';
import { HoleDef } from '../game/sim/holes';
import { DEFAULT_TIME_SCALE } from '../game/sim/units';

interface GameStore {
  // Game instance
  game: Game | null;

  // Synced state from Game
  phase: GamePhase;
  currentHole: number;
  strokes: number;
  scores: HoleScore[];
  timeScale: number;
  aimAssistEnabled: boolean;
  orbitLinesEnabled: boolean;
  hintsEnabled: boolean;
  lastToast: string | null;
  toastTimestamp: number;

  // Current hole def (convenience)
  currentHoleDef: HoleDef | null;

  // Aim state
  isAiming: boolean;
  isDragging: boolean;
  power: number;

  // Actions
  initGame: (container: HTMLElement) => void;
  disposeGame: () => void;
  resetShot: () => void;
  nextHole: () => void;
  restartGame: () => void;
  setTimeScale: (scale: number) => void;
  setAimAssist: (enabled: boolean) => void;
  setOrbitLines: (enabled: boolean) => void;
  setHints: (enabled: boolean) => void;
  focusBall: () => void;
  focusTarget: () => void;
  resetView: () => void;

  // Internal state sync
  syncState: (state: GameState) => void;
}

export const useGameStore = create<GameStore>((set, get) => ({
  // Initial state
  game: null,
  phase: 'aiming',
  currentHole: 1,
  strokes: 0,
  scores: [],
  timeScale: DEFAULT_TIME_SCALE,
  aimAssistEnabled: true,
  orbitLinesEnabled: true,
  hintsEnabled: true,
  lastToast: null,
  toastTimestamp: 0,
  currentHoleDef: null,
  isAiming: false,
  isDragging: false,
  power: 0,

  initGame: (container: HTMLElement) => {
    const { game: existingGame } = get();
    if (existingGame) {
      existingGame.dispose();
    }

    const game = new Game(container);

    // Set up state sync callback
    game.setOnStateChange((gameState) => {
      get().syncState(gameState);
    });

    // Set up periodic aim state sync
    const syncAim = () => {
      const { game } = get();
      if (game) {
        const aimState = game.getAimState();
        set({
          isAiming: aimState.isAiming,
          isDragging: aimState.isDragging,
          power: aimState.power,
        });
      }
    };

    // Sync aim state every frame
    const aimSyncInterval = setInterval(syncAim, 16);

    // Store cleanup function
    (game as any)._aimSyncInterval = aimSyncInterval;

    set({
      game,
      currentHoleDef: game.getCurrentHoleDef(),
    });
  },

  disposeGame: () => {
    const { game } = get();
    if (game) {
      if ((game as any)._aimSyncInterval) {
        clearInterval((game as any)._aimSyncInterval);
      }
      game.dispose();
      set({ game: null });
    }
  },

  syncState: (gameState: GameState) => {
    const { game } = get();
    set({
      phase: gameState.phase,
      currentHole: gameState.currentHole,
      strokes: gameState.strokes,
      scores: gameState.scores,
      timeScale: gameState.timeScale,
      aimAssistEnabled: gameState.aimAssistEnabled,
      orbitLinesEnabled: gameState.orbitLinesEnabled,
      hintsEnabled: gameState.hintsEnabled,
      lastToast: gameState.lastToast,
      toastTimestamp: gameState.toastTimestamp,
      currentHoleDef: game?.getCurrentHoleDef() || null,
    });
  },

  resetShot: () => {
    get().game?.resetShot();
  },

  nextHole: () => {
    get().game?.nextHole();
  },

  restartGame: () => {
    get().game?.restartGame();
  },

  setTimeScale: (scale: number) => {
    get().game?.setTimeScale(scale);
  },

  setAimAssist: (enabled: boolean) => {
    get().game?.setAimAssist(enabled);
  },

  setOrbitLines: (enabled: boolean) => {
    get().game?.setOrbitLines(enabled);
  },

  setHints: (enabled: boolean) => {
    get().game?.setHints(enabled);
  },

  focusBall: () => {
    get().game?.focusBall();
  },

  focusTarget: () => {
    get().game?.focusTarget();
  },

  resetView: () => {
    get().game?.resetView();
  },
}));
