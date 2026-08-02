import React, { useState, useCallback, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Eye, ArrowLeft, Trophy, Play } from 'lucide-react';

const TOTAL_ROUNDS = 20;
const DISPLAY_TIME = 1000; // ms to show the stimulus
const ARROWS = ['↑', '↓', '←', '→'];
const ARROW_KEYS = { '↑': 'up', '↓': 'down', '←': 'left', '→': 'right' };

export default function PeripheralVision({ onBack }) {
  const [phase, setPhase] = useState('intro');
  const [round, setRound] = useState(0);
  const [score, setScore] = useState(0);
  const [difficulty, setDifficulty] = useState('medium'); // easy, medium, hard
  const [currentArrow, setCurrentArrow] = useState(null);
  const [arrowPosition, setArrowPosition] = useState({ x: 0, y: 0 });
  const [feedback, setFeedback] = useState(null);
  const [showArrow, setShowArrow] = useState(false);
  const [waitingForResponse, setWaitingForResponse] = useState(false);
  const [times, setTimes] = useState([]);
  const [startTime, setStartTime] = useState(null);
  const [highScores, setHighScores] = useState(() => {
    const saved = localStorage.getItem('brain-peripheral-scores');
    return saved ? JSON.parse(saved) : {};
  });
  const timeoutRef = useRef(null);

  const DISTANCES = {
    easy: { min: 15, max: 25, label: 'Easy' },
    medium: { min: 25, max: 40, label: 'Medium' },
    hard: { min: 35, max: 48, label: 'Hard' },
  };

  const generateTrial = useCallback(() => {
    const arrow = ARROWS[Math.floor(Math.random() * ARROWS.length)];
    const dist = DISTANCES[difficulty];
    const distance = dist.min + Math.random() * (dist.max - dist.min);
    const angle = Math.random() * Math.PI * 2;
    const x = Math.cos(angle) * distance;
    const y = Math.sin(angle) * distance;

    setCurrentArrow(arrow);
    setArrowPosition({ x, y });
    setShowArrow(true);
    setWaitingForResponse(true);
    setFeedback(null);
    setStartTime(performance.now());

    // Auto-hide arrow after display time
    timeoutRef.current = setTimeout(() => {
      setShowArrow(false);
    }, DISPLAY_TIME);
  }, [difficulty]);

  const startGame = useCallback(() => {
    setPhase('playing');
    setRound(0);
    setScore(0);
    setTimes([]);
    setFeedback(null);
    setTimeout(() => generateTrial(), 500);
  }, [generateTrial]);

  const handleResponse = useCallback((direction) => {
    if (!waitingForResponse || phase !== 'playing') return;
    setWaitingForResponse(false);
    clearTimeout(timeoutRef.current);
    setShowArrow(false);

    const elapsed = Math.round(performance.now() - startTime);
    const isCorrect = ARROW_KEYS[currentArrow] === direction;

    setFeedback(isCorrect ? 'correct' : 'wrong');
    if (isCorrect) {
      setScore(s => s + 1);
      setTimes(t => [...t, elapsed]);
    }

    setTimeout(() => {
      const nextRound = round + 1;
      if (nextRound >= TOTAL_ROUNDS) {
        const finalScore = isCorrect ? score + 1 : score;
        const key = difficulty;
        if (!highScores[key] || finalScore > highScores[key]) {
          const newScores = { ...highScores, [key]: finalScore };
          setHighScores(newScores);
          localStorage.setItem('brain-peripheral-scores', JSON.stringify(newScores));
        }
        setPhase('result');
      } else {
        setRound(nextRound);
        generateTrial();
      }
    }, 600);
  }, [waitingForResponse, phase, startTime, currentArrow, round, score, difficulty, highScores, generateTrial]);

  // Keyboard support
  useEffect(() => {
    const handler = (e) => {
      if (e.key === 'ArrowUp') handleResponse('up');
      else if (e.key === 'ArrowDown') handleResponse('down');
      else if (e.key === 'ArrowLeft') handleResponse('left');
      else if (e.key === 'ArrowRight') handleResponse('right');
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [handleResponse]);

  useEffect(() => {
    return () => { if (timeoutRef.current) clearTimeout(timeoutRef.current); };
  }, []);

  const avgTime = times.length > 0 ? Math.round(times.reduce((a, b) => a + b, 0) / times.length) : 0;
  const accuracy = Math.round((score / TOTAL_ROUNDS) * 100);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-cyan-950 to-slate-900 flex flex-col">
      {/* Header */}
      <div className="bg-slate-900/80 backdrop-blur border-b border-slate-700 px-4 py-3 flex items-center gap-3">
        <button onClick={onBack} className="p-2 hover:bg-slate-700 rounded-lg transition-colors">
          <ArrowLeft size={20} className="text-slate-300" />
        </button>
        <Eye size={22} className="text-cyan-400" />
        <h1 className="text-lg font-bold text-white">Peripheral Vision</h1>
        {phase === 'playing' && (
          <div className="ml-auto flex gap-4 text-sm">
            <span className="text-slate-400">Round: <span className="text-white">{round + 1}/{TOTAL_ROUNDS}</span></span>
            <span className="text-slate-400">Score: <span className="text-green-400">{score}</span></span>
          </div>
        )}
      </div>

      <div className="flex-1 flex items-center justify-center p-4">
        <AnimatePresence mode="wait">
          {phase === 'intro' && (
            <motion.div key="intro" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="text-center max-w-md">
              <div className="w-20 h-20 mx-auto mb-6 bg-cyan-500/20 rounded-2xl flex items-center justify-center">
                <Eye size={40} className="text-cyan-400" />
              </div>
              <h2 className="text-3xl font-bold text-white mb-4">Peripheral Vision</h2>
              <p className="text-slate-300 mb-3">
                Focus on the center dot. An arrow will briefly appear in your peripheral vision.
              </p>
              <p className="text-slate-300 mb-6">
                Identify the arrow direction using <strong>arrow keys</strong> or the on-screen buttons without moving your eyes!
              </p>

              {/* Difficulty */}
              <div className="flex gap-3 justify-center mb-8">
                {Object.entries(DISTANCES).map(([key, val]) => (
                  <button
                    key={key}
                    onClick={() => setDifficulty(key)}
                    className={`px-5 py-3 rounded-xl font-bold transition-all ${
                      difficulty === key
                        ? 'bg-cyan-600 text-white scale-105'
                        : 'bg-slate-800 text-slate-400 hover:bg-slate-700'
                    }`}
                  >
                    {val.label}
                  </button>
                ))}
              </div>

              <button
                onClick={startGame}
                className="px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-xl font-bold text-lg hover:scale-105 transition-transform flex items-center gap-2 mx-auto"
              >
                <Play size={20} /> Start Test
              </button>

              {highScores[difficulty] && (
                <p className="mt-4 text-slate-400 text-sm">
                  <Trophy size={14} className="inline mr-1 text-yellow-400" />
                  Best on {DISTANCES[difficulty].label}: {highScores[difficulty]}/{TOTAL_ROUNDS}
                </p>
              )}
            </motion.div>
          )}

          {phase === 'playing' && (
            <motion.div key="playing" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center w-full max-w-2xl">
              {/* Progress */}
              <div className="w-full bg-slate-800 rounded-full h-2 mb-6">
                <motion.div
                  className="bg-gradient-to-r from-cyan-500 to-blue-500 h-2 rounded-full"
                  animate={{ width: `${((round + 1) / TOTAL_ROUNDS) * 100}%` }}
                />
              </div>

              {/* Game Area */}
              <div className="relative w-full aspect-square max-w-[500px] mx-auto bg-slate-800/30 rounded-2xl border border-slate-700 overflow-hidden">
                {/* Center fixation point */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    className="w-4 h-4 bg-white rounded-full"
                  />
                </div>

                {/* Arrow stimulus */}
                <AnimatePresence>
                  {showArrow && currentArrow && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="absolute text-4xl font-bold text-cyan-400"
                      style={{
                        top: `${50 + arrowPosition.y}%`,
                        left: `${50 + arrowPosition.x}%`,
                        transform: 'translate(-50%, -50%)',
                      }}
                    >
                      {currentArrow}
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Feedback */}
                <AnimatePresence>
                  {feedback && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      className={`absolute top-4 left-1/2 transform -translate-x-1/2 px-4 py-2 rounded-full text-sm font-bold ${
                        feedback === 'correct' ? 'bg-green-600 text-white' : 'bg-red-600 text-white'
                      }`}
                    >
                      {feedback === 'correct' ? 'Correct!' : 'Wrong!'}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Direction Buttons */}
              <div className="mt-6 grid grid-cols-3 gap-2 max-w-[200px] mx-auto">
                <div />
                <button
                  onClick={() => handleResponse('up')}
                  className="p-3 bg-slate-800 hover:bg-slate-700 rounded-xl text-2xl text-white transition-colors"
                >↑</button>
                <div />
                <button
                  onClick={() => handleResponse('left')}
                  className="p-3 bg-slate-800 hover:bg-slate-700 rounded-xl text-2xl text-white transition-colors"
                >←</button>
                <button
                  onClick={() => handleResponse('down')}
                  className="p-3 bg-slate-800 hover:bg-slate-700 rounded-xl text-2xl text-white transition-colors"
                >↓</button>
                <button
                  onClick={() => handleResponse('right')}
                  className="p-3 bg-slate-800 hover:bg-slate-700 rounded-xl text-2xl text-white transition-colors"
                >→</button>
              </div>
            </motion.div>
          )}

          {phase === 'result' && (
            <motion.div key="result" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center max-w-md">
              <Trophy size={64} className={accuracy >= 80 ? 'text-yellow-400 mx-auto mb-4' : 'text-slate-400 mx-auto mb-4'} />
              <h2 className="text-3xl font-bold text-white mb-2">Test Complete!</h2>
              <p className="text-slate-400 mb-6">Difficulty: {DISTANCES[difficulty].label}</p>

              <div className="grid grid-cols-3 gap-3 mb-8">
                <div className="bg-slate-800/50 rounded-xl p-4">
                  <p className="text-3xl font-bold text-green-400">{score}/{TOTAL_ROUNDS}</p>
                  <p className="text-xs text-slate-400 mt-1">Correct</p>
                </div>
                <div className="bg-slate-800/50 rounded-xl p-4">
                  <p className="text-3xl font-bold text-blue-400">{accuracy}%</p>
                  <p className="text-xs text-slate-400 mt-1">Accuracy</p>
                </div>
                <div className="bg-slate-800/50 rounded-xl p-4">
                  <p className="text-3xl font-bold text-cyan-400">{avgTime > 0 ? avgTime : '-'}ms</p>
                  <p className="text-xs text-slate-400 mt-1">Avg Time</p>
                </div>
              </div>

              <div className="flex gap-3 justify-center">
                <button
                  onClick={startGame}
                  className="px-6 py-3 bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-xl font-bold hover:scale-105 transition-transform"
                >
                  Try Again
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
