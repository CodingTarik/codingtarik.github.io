import React, { useState, useRef, useCallback, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Zap, RotateCcw, Trophy, Clock, TrendingUp, ArrowLeft } from 'lucide-react';

const STATES = { IDLE: 'idle', WAITING: 'waiting', READY: 'ready', RESULT: 'result', TOO_EARLY: 'too_early' };

export default function ReactionTime({ onBack }) {
  const [gameState, setGameState] = useState(STATES.IDLE);
  const [reactionTime, setReactionTime] = useState(null);
  const [results, setResults] = useState([]);
  const [bestTime, setBestTime] = useState(() => {
    const saved = localStorage.getItem('brain-reaction-best');
    return saved ? parseInt(saved) : null;
  });
  const startTimeRef = useRef(null);
  const timeoutRef = useRef(null);

  useEffect(() => {
    return () => { if (timeoutRef.current) clearTimeout(timeoutRef.current); };
  }, []);

  const startGame = useCallback(() => {
    setGameState(STATES.WAITING);
    setReactionTime(null);
    const delay = 1500 + Math.random() * 4000;
    timeoutRef.current = setTimeout(() => {
      startTimeRef.current = performance.now();
      setGameState(STATES.READY);
    }, delay);
  }, []);

  const handleClick = useCallback(() => {
    if (gameState === STATES.IDLE || gameState === STATES.RESULT || gameState === STATES.TOO_EARLY) {
      startGame();
      return;
    }
    if (gameState === STATES.WAITING) {
      clearTimeout(timeoutRef.current);
      setGameState(STATES.TOO_EARLY);
      return;
    }
    if (gameState === STATES.READY) {
      const time = Math.round(performance.now() - startTimeRef.current);
      setReactionTime(time);
      const newResults = [...results, time].slice(-20);
      setResults(newResults);
      if (!bestTime || time < bestTime) {
        setBestTime(time);
        localStorage.setItem('brain-reaction-best', time.toString());
      }
      setGameState(STATES.RESULT);
    }
  }, [gameState, results, bestTime, startGame]);

  const avg = results.length > 0 ? Math.round(results.reduce((a, b) => a + b, 0) / results.length) : null;

  const getPercentile = (ms) => {
    if (ms < 150) return 'Superhuman';
    if (ms < 200) return 'Excellent';
    if (ms < 250) return 'Great';
    if (ms < 300) return 'Average';
    if (ms < 350) return 'Below Average';
    return 'Slow';
  };

  const getColor = (ms) => {
    if (ms < 200) return 'text-green-400';
    if (ms < 250) return 'text-emerald-400';
    if (ms < 300) return 'text-yellow-400';
    if (ms < 350) return 'text-orange-400';
    return 'text-red-400';
  };

  const bgClasses = {
    [STATES.IDLE]: 'bg-gradient-to-br from-blue-600 to-indigo-800',
    [STATES.WAITING]: 'bg-gradient-to-br from-red-600 to-red-800',
    [STATES.READY]: 'bg-gradient-to-br from-green-500 to-emerald-700',
    [STATES.RESULT]: 'bg-gradient-to-br from-slate-800 to-slate-950',
    [STATES.TOO_EARLY]: 'bg-gradient-to-br from-orange-600 to-red-700',
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <div className="bg-slate-900/80 backdrop-blur border-b border-slate-700 px-4 py-3 flex items-center gap-3">
        <button onClick={onBack} className="p-2 hover:bg-slate-700 rounded-lg transition-colors">
          <ArrowLeft size={20} className="text-slate-300" />
        </button>
        <Zap size={22} className="text-yellow-400" />
        <h1 className="text-lg font-bold text-white">Reaction Time Test</h1>
        {results.length > 0 && (
          <div className="ml-auto flex gap-4 text-sm">
            {avg && <span className="text-slate-400">Avg: <span className={getColor(avg)}>{avg}ms</span></span>}
            {bestTime && <span className="text-slate-400">Best: <span className="text-green-400">{bestTime}ms</span></span>}
          </div>
        )}
      </div>

      {/* Game Area */}
      <div
        className={`flex-1 flex flex-col items-center justify-center cursor-pointer select-none transition-colors duration-200 ${bgClasses[gameState]}`}
        onClick={handleClick}
      >
        <AnimatePresence mode="wait">
          {gameState === STATES.IDLE && (
            <motion.div key="idle" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} className="text-center px-4">
              <motion.div animate={{ scale: [1, 1.1, 1] }} transition={{ repeat: Infinity, duration: 2 }} className="w-24 h-24 mx-auto mb-8 bg-white/10 rounded-full flex items-center justify-center">
                <Zap size={48} className="text-yellow-300" />
              </motion.div>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Reaction Time</h2>
              <p className="text-xl text-blue-200 mb-2">When the screen turns green, click as fast as you can!</p>
              <p className="text-blue-300/70 text-lg mt-8">Click anywhere to start</p>
            </motion.div>
          )}

          {gameState === STATES.WAITING && (
            <motion.div key="waiting" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="text-center px-4">
              <div className="w-24 h-24 mx-auto mb-8 bg-white/10 rounded-full flex items-center justify-center">
                <Clock size={48} className="text-red-200" />
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Wait for green...</h2>
              <p className="text-red-200 text-lg">Don't click yet!</p>
            </motion.div>
          )}

          {gameState === STATES.READY && (
            <motion.div key="ready" initial={{ opacity: 0, scale: 1.2 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} className="text-center px-4">
              <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ repeat: Infinity, duration: 0.5 }} className="w-24 h-24 mx-auto mb-8 bg-white/20 rounded-full flex items-center justify-center">
                <Zap size={48} className="text-white" />
              </motion.div>
              <h2 className="text-4xl md:text-6xl font-bold text-white">CLICK NOW!</h2>
            </motion.div>
          )}

          {gameState === STATES.TOO_EARLY && (
            <motion.div key="early" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="text-center px-4">
              <div className="w-24 h-24 mx-auto mb-8 bg-white/10 rounded-full flex items-center justify-center text-5xl">
                ⚠️
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Too early!</h2>
              <p className="text-orange-200 text-lg mb-2">Wait for the green screen</p>
              <p className="text-orange-300/70 text-lg mt-8">Click to try again</p>
            </motion.div>
          )}

          {gameState === STATES.RESULT && (
            <motion.div key="result" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="text-center px-4">
              <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: 'spring', stiffness: 200 }}>
                <span className={`text-7xl md:text-9xl font-black ${getColor(reactionTime)}`}>{reactionTime}</span>
                <span className="text-3xl md:text-4xl text-slate-400 ml-2">ms</span>
              </motion.div>

              <p className={`text-xl md:text-2xl font-semibold mt-4 ${getColor(reactionTime)}`}>
                {getPercentile(reactionTime)}
              </p>

              {/* Stats Bar */}
              {results.length > 1 && (
                <div className="mt-8 flex gap-6 justify-center text-sm">
                  <div className="bg-slate-800/50 rounded-lg px-4 py-2">
                    <TrendingUp size={14} className="inline mr-1 text-slate-400" />
                    <span className="text-slate-400">Avg: </span>
                    <span className={getColor(avg)}>{avg}ms</span>
                  </div>
                  <div className="bg-slate-800/50 rounded-lg px-4 py-2">
                    <Trophy size={14} className="inline mr-1 text-yellow-400" />
                    <span className="text-slate-400">Best: </span>
                    <span className="text-green-400">{bestTime}ms</span>
                  </div>
                  <div className="bg-slate-800/50 rounded-lg px-4 py-2">
                    <span className="text-slate-400">Tries: </span>
                    <span className="text-blue-400">{results.length}</span>
                  </div>
                </div>
              )}

              {/* Mini Chart */}
              {results.length > 1 && (
                <div className="mt-6 flex items-end justify-center gap-1 h-16">
                  {results.slice(-15).map((r, i) => (
                    <motion.div
                      key={i}
                      initial={{ height: 0 }}
                      animate={{ height: `${Math.min(100, (r / 500) * 100)}%` }}
                      className={`w-3 rounded-t ${r === reactionTime ? 'bg-yellow-400' : 'bg-slate-600'}`}
                      title={`${r}ms`}
                    />
                  ))}
                </div>
              )}

              <p className="text-slate-500 text-lg mt-8">Click to try again</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
