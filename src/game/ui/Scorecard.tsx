/**
 * Scorecard component for Galactic Golf
 */

import React from 'react';
import { useGameStore } from '../../store/useGameStore';
import { HOLES, getTotalPar } from '../sim/holes';

export const Scorecard: React.FC = () => {
  const { scores, restartGame } = useGameStore();

  const totalStrokes = scores.reduce((sum, s) => sum + s.strokes, 0);
  const totalPar = getTotalPar();
  const totalDiff = totalStrokes - totalPar;

  const getDiffBadge = (diff: number) => {
    if (diff < 0) {
      return (
        <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-green-600 text-white font-bold text-sm">
          {diff}
        </span>
      );
    } else if (diff === 0) {
      return (
        <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-gray-600 text-white font-bold text-sm">
          E
        </span>
      );
    } else {
      return (
        <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-red-600 text-white font-bold text-sm">
          +{diff}
        </span>
      );
    }
  };

  const getHoleName = (holeId: number): string => {
    const hole = HOLES.find((h) => h.id === holeId);
    return hole?.target || '';
  };

  return (
    <div className="fixed inset-0 bg-black/90 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-gray-900 rounded-xl p-8 max-w-2xl w-full mx-4 shadow-2xl border border-gray-700">
        <h1 className="text-4xl font-bold text-center text-white mb-8">
          Final Scorecard
        </h1>

        <div className="overflow-x-auto">
          <table className="w-full text-white">
            <thead>
              <tr className="border-b border-gray-700">
                <th className="py-3 px-4 text-left text-gray-400">Hole</th>
                <th className="py-3 px-4 text-left text-gray-400">Target</th>
                <th className="py-3 px-4 text-center text-gray-400">Par</th>
                <th className="py-3 px-4 text-center text-gray-400">Strokes</th>
                <th className="py-3 px-4 text-center text-gray-400">Diff</th>
              </tr>
            </thead>
            <tbody>
              {scores.map((score) => {
                const diff = score.strokes - score.par;
                return (
                  <tr key={score.holeId} className="border-b border-gray-800">
                    <td className="py-3 px-4 font-bold">{score.holeId}</td>
                    <td className="py-3 px-4 text-cyan-400">
                      {getHoleName(score.holeId)}
                    </td>
                    <td className="py-3 px-4 text-center text-yellow-400">
                      {score.par}
                    </td>
                    <td className="py-3 px-4 text-center text-green-400 font-bold">
                      {score.strokes}
                    </td>
                    <td className="py-3 px-4 text-center">{getDiffBadge(diff)}</td>
                  </tr>
                );
              })}
            </tbody>
            <tfoot>
              <tr className="border-t-2 border-gray-600">
                <td className="py-4 px-4 font-bold text-lg" colSpan={2}>
                  TOTAL
                </td>
                <td className="py-4 px-4 text-center text-yellow-400 font-bold text-lg">
                  {totalPar}
                </td>
                <td className="py-4 px-4 text-center text-green-400 font-bold text-lg">
                  {totalStrokes}
                </td>
                <td className="py-4 px-4 text-center">{getDiffBadge(totalDiff)}</td>
              </tr>
            </tfoot>
          </table>
        </div>

        {/* Result message */}
        <div className="text-center mt-6">
          {totalDiff < 0 && (
            <p className="text-2xl text-green-400 font-bold">
              Under Par! Excellent work!
            </p>
          )}
          {totalDiff === 0 && (
            <p className="text-2xl text-gray-300 font-bold">Even Par! Well played!</p>
          )}
          {totalDiff > 0 && totalDiff <= 5 && (
            <p className="text-2xl text-yellow-400 font-bold">
              Nice round! Keep practicing!
            </p>
          )}
          {totalDiff > 5 && (
            <p className="text-2xl text-orange-400 font-bold">
              The cosmos is challenging. Try again!
            </p>
          )}
        </div>

        <div className="flex justify-center mt-8">
          <button
            onClick={restartGame}
            className="px-8 py-3 bg-cyan-600 hover:bg-cyan-500 text-white rounded-lg font-bold text-lg transition-colors"
          >
            Play Again
          </button>
        </div>
      </div>
    </div>
  );
};
