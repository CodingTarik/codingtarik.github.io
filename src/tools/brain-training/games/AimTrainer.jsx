import React, { useState, useCallback, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Crosshair, ArrowLeft, Trophy, Play, Target } from 'lucide-react';

const TOTAL_TARGETS = 30;
const DIFFICULTIES = {
  easy: { size: 60, name: 'Easy', color: 'from-green-500 to-emerald-500' },
  medium: { size: 40, name: 'Medium', color: 'from-yellow-500 to-orange-500' },
  hard: { size: 25, name: 'Hard', color: 'from-red-500 to-pink-500' },
  insane: { size: 15, name: 'Insane', color: 'from-purple-500 to-violet-500' },
};

export default function AimTrainer({ onBack }) {
  const [phase, setPhase] = useState('intro');
  const [difficulty, setDifficulty] = useState('medium');
  const [targetPos, setTargetPos] = useState({ x: 50, y: 50 });
  const [targetsHit, setTargetsHit] = useState(0);
  const [times, setTimes] = useState([]);
  const [lastTime, setLastTime] = useState(null);
  const [startTime, setStartTime] = useState(null);
  const [gameStartTime, setGameStartTime] = useState(null);
  const [misses, setMisses] = useState(0);
  const [highScores, setHighScores] = useState(() => {
    const saved = localStorage.getItem('brain-aim-scores');
    return saved ? JSON.parse(saved) : {};
  });
  const areaRef = useRef(null);

  const spawnTarget = useCallback(() => {
    const size = DIFFICULTIES[difficulty].size;
    const padding = size / 2 + 10;
    const x = padding + Math.random() * (window.innerWidth - padding * 2);
    const y = padding + Math.random() * (window.innerHeight - 200 - padding * 2);
    setTargetPos({ x: (x / window.innerWidth) * 100, y: (y / (window.innerHeight - 200)) * 100 });
    setStartTime(performance.now());
  }, [difficulty]);

  const startGame = useCallback(() => {
    setPhase('playing');
    setTargetsHit(0);
    setTimes([]);
    setMisses(0);
    setLastTime(null);
    setGameStartTime(performance.now());
    spawnTarget();
  }, [spawnTarget]);

  const handleTargetClick = useCallback((e) => {
    e.stopPropagation();
    const elapsed = Math.round(performance.now() - startTime);
    setLastTime(elapsed);
    setTimes(t => [...t, elapsed]);

    const next = targetsHit + 1;
    setTargetsHit(next);

    if (next >= TOTAL_TARGETS) {
      const totalTime = Math.round(performance.now() - gameStartTime);
      const avgTime = Math.round([...times, elapsed].reduce((a, b) => a + b, 0) / TOTAL_TARGETS);
      const key = difficulty;
      if (!highScores[key] || avgTime < highScores[key]) {
        const newScores = { ...highScores, [key]: avgTime };
        setHighScores(newScores);
        localStorage.setItem('brain-aim-scores', JSON.stringify(newScores));
      }
      setPhase('result');
    } else {
      spawnTarget();
    }
  }, [startTime, targetsHit, times, difficulty, highScores, gameStartTime, spawnTarget]);

  const handleMiss = useCallback((e) => {
    if (phase !== 'playing') return;
    // Only count as miss if clicking in the game area
    if (e.target === areaRef.current) {
      setMisses(m => m + 1);
    }
  }, [phase]);

  const avgTime = times.length > 0 ? Math.round(times.reduce((a, b) => a + b, 0) / times.length) : 0;
  const accuracy = times.length + misses > 0 ? Math.round((times.length / (times.length + misses)) * 100) : 100;
  const size = DIFFICULTIES[difficulty].size;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex flex-col">
      {/* Header */}
      <div className="bg-slate-900/80 backdrop-blur border-b border-slate-700 px-4 py-3 flex items-center gap-3 z-10">
        <button onClick={onBack} className="p-2 hover:bg-slate-700 rounded-lg transition-colors">
          <ArrowLeft size={20} className="text-slate-300" />
        </button>
        <Crosshair size={22} className="text-red-400" />
        <h1 className="text-lg font-bold text-white">Aim Trainer</h1>
        {phase === 'playing' && (
          <div className="ml-auto flex gap-4 text-sm">
            <span className="text-slate-400">Targets: <span className="text-white">{targetsHit}/{TOTAL_TARGETS}</span></span>
            {lastTime && <span className="text-slate-400">Last: <span className="text-green-400">{lastTime}ms</span></span>}
            <span className="text-slate-400">Misses: <span className="text-red-400">{misses}</span></span>
          </div>
        )}
      </div>

      <div className="flex-1 flex items-center justify-center relative">
        <AnimatePresence mode="wait">
          {phase === 'intro' && (
            <motion.div key="intro" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="text-center max-w-md z-10">
              <div className="w-20 h-20 mx-auto mb-6 bg-red-500/20 rounded-2xl flex items-center justify-center">
                <Target size={40} className="text-red-400" />
              </div>
              <h2 className="text-3xl font-bold text-white mb-4">Aim Trainer</h2>
              <p className="text-slate-300 mb-6">
                Click the targets as fast as you can! Trains hand-eye coordination and motor skills.
              </p>

              {/* Difficulty Selector */}
              <div className="grid grid-cols-2 gap-3 mb-8 max-w-xs mx-auto">
                {Object.entries(DIFFICULTIES).map(([key, val]) => (
                  <button
                    key={key}
                    onClick={() => setDifficulty(key)}
                    className={`px-4 py-3 rounded-xl font-bold text-sm transition-all ${
                      difficulty === key
                        ? `bg-gradient-to-r ${val.color} text-white scale-105`
                        : 'bg-slate-800 text-slate-400 hover:bg-slate-700'
                    }`}
                  >
                    {val.name}
                    <span className="block text-xs opacity-70">{val.size}px</span>
                  </button>
                ))}
              </div>

              <button
                onClick={startGame}
                className="px-8 py-4 bg-gradient-to-r from-red-600 to-orange-600 text-white rounded-xl font-bold text-lg hover:scale-105 transition-transform flex items-center gap-2 mx-auto"
              >
                <Play size={20} /> Start ({TOTAL_TARGETS} targets)
              </button>

              {highScores[difficulty] && (
                <p className="mt-4 text-slate-400 text-sm">
                  <Trophy size={14} className="inline mr-1 text-yellow-400" />
                  Best avg on {DIFFICULTIES[difficulty].name}: {highScores[difficulty]}ms
                </p>
              )}
            </motion.div>
          )}

          {phase === 'playing' && (
            <motion.div
              key="playing"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              ref={areaRef}
              onClick={handleMiss}
              className="absolute inset-0 top-0 cursor-crosshair"
              style={{ cursor: 'crosshair' }}
            >
              {/* Progress bar */}
              <div className="absolute top-2 left-4 right-4 z-10">
                <div className="w-full bg-slate-800/50 rounded-full h-1.5">
                  <motion.div
                    className="bg-gradient-to-r from-red-500 to-orange-500 h-1.5 rounded-full"
                    animate={{ width: `${(targetsHit / TOTAL_TARGETS) * 100}%` }}
                  />
                </div>
              </div>

              {/* Target */}
              <motion.button
                key={targetsHit}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ type: 'spring', stiffness: 400, damping: 15 }}
                onClick={handleTargetClick}
                className="absolute rounded-full bg-gradient-to-br from-red-500 to-pink-600 shadow-lg shadow-red-500/30 hover:brightness-125 transition-all flex items-center justify-center"
                style={{
                  width: size,
                  height: size,
                  left: `${targetPos.x}%`,
                  top: `${targetPos.y}%`,
                  transform: 'translate(-50%, -50%)',
                }}
              >
                <div className="w-1/3 h-1/3 rounded-full bg-white/80" />
              </motion.button>
            </motion.div>
          )}

          {phase === 'result' && (
            <motion.div key="result" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center max-w-md z-10">
              <Trophy size={64} className={avgTime < 400 ? 'text-yellow-400 mx-auto mb-4' : 'text-slate-400 mx-auto mb-4'} />
              <h2 className="text-3xl font-bold text-white mb-2">Complete!</h2>
              <p className="text-slate-400 mb-6">Difficulty: {DIFFICULTIES[difficulty].name}</p>

              <div className="grid grid-cols-3 gap-3 mb-8">
                <div className="bg-slate-800/50 rounded-xl p-4">
                  <p className="text-3xl font-bold text-green-400">{avgTime}ms</p>
                  <p className="text-xs text-slate-400 mt-1">Avg Time</p>
                </div>
                <div className="bg-slate-800/50 rounded-xl p-4">
                  <p className="text-3xl font-bold text-blue-400">{accuracy}%</p>
                  <p className="text-xs text-slate-400 mt-1">Accuracy</p>
                </div>
                <div className="bg-slate-800/50 rounded-xl p-4">
                  <p className="text-3xl font-bold text-purple-400">{Math.min(...times)}ms</p>
                  <p className="text-xs text-slate-400 mt-1">Fastest</p>
                </div>
              </div>

              {/* Time distribution */}
              <div className="flex items-end justify-center gap-1 h-16 mb-6">
                {times.map((t, i) => (
                  <motion.div
                    key={i}
                    initial={{ height: 0 }}
                    animate={{ height: `${Math.min(100, (t / 800) * 100)}%` }}
                    className={`w-2 rounded-t ${t === Math.min(...times) ? 'bg-green-400' : t === Math.max(...times) ? 'bg-red-400' : 'bg-slate-600'}`}
                    title={`${t}ms`}
                  />
                ))}
              </div>

              <div className="flex gap-3 justify-center">
                <button
                  onClick={startGame}
                  className="px-6 py-3 bg-gradient-to-r from-red-600 to-orange-600 text-white rounded-xl font-bold hover:scale-105 transition-transform"
                >
                  Play Again
                </button>
                <button
                  onClick={() => setPhase('intro')}
                  className="px-6 py-3 bg-slate-800 text-slate-300 rounded-xl font-bold hover:bg-slate-700"
                >
                  Settings
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
