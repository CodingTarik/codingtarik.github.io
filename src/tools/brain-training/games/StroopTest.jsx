import React, { useState, useCallback, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Palette, ArrowLeft, Trophy, Timer, CheckCircle, XCircle } from 'lucide-react';

const COLORS = [
  { name: 'RED', hex: '#ef4444', label: 'Red' },
  { name: 'BLUE', hex: '#3b82f6', label: 'Blue' },
  { name: 'GREEN', hex: '#22c55e', label: 'Green' },
  { name: 'YELLOW', hex: '#eab308', label: 'Yellow' },
  { name: 'PURPLE', hex: '#a855f7', label: 'Purple' },
  { name: 'ORANGE', hex: '#f97316', label: 'Orange' },
];

const ROUNDS_TOTAL = 20;

export default function StroopTest({ onBack }) {
  const [phase, setPhase] = useState('intro'); // intro, playing, result
  const [round, setRound] = useState(0);
  const [score, setScore] = useState(0);
  const [currentWord, setCurrentWord] = useState(null);
  const [currentColor, setCurrentColor] = useState(null);
  const [options, setOptions] = useState([]);
  const [feedback, setFeedback] = useState(null);
  const [times, setTimes] = useState([]);
  const [startTime, setStartTime] = useState(null);
  const [highScore, setHighScore] = useState(() => {
    const saved = localStorage.getItem('brain-stroop-highscore');
    return saved ? parseInt(saved) : 0;
  });

  const generateRound = useCallback(() => {
    const wordColor = COLORS[Math.floor(Math.random() * COLORS.length)];
    let displayColor;
    do {
      displayColor = COLORS[Math.floor(Math.random() * COLORS.length)];
    } while (displayColor.name === wordColor.name && Math.random() > 0.2);

    // Generate 4 options including the correct answer
    const correctAnswer = displayColor;
    const wrongOptions = COLORS.filter(c => c.name !== correctAnswer.name)
      .sort(() => Math.random() - 0.5)
      .slice(0, 3);
    const allOptions = [correctAnswer, ...wrongOptions].sort(() => Math.random() - 0.5);

    setCurrentWord(wordColor);
    setCurrentColor(displayColor);
    setOptions(allOptions);
    setStartTime(performance.now());
    setFeedback(null);
  }, []);

  const startGame = useCallback(() => {
    setPhase('playing');
    setRound(0);
    setScore(0);
    setTimes([]);
    setFeedback(null);
    generateRound();
  }, [generateRound]);

  useEffect(() => {
    if (round > 0 && round < ROUNDS_TOTAL && phase === 'playing' && !feedback) {
      generateRound();
    }
  }, [round, phase, feedback]);

  const handleAnswer = useCallback((color) => {
    if (feedback) return;
    const elapsed = Math.round(performance.now() - startTime);
    const isCorrect = color.name === currentColor.name;

    setFeedback({ correct: isCorrect, time: elapsed, selected: color.name });
    if (isCorrect) setScore(s => s + 1);
    setTimes(t => [...t, elapsed]);

    setTimeout(() => {
      const nextRound = round + 1;
      if (nextRound >= ROUNDS_TOTAL) {
        const finalScore = isCorrect ? score + 1 : score;
        if (finalScore > highScore) {
          setHighScore(finalScore);
          localStorage.setItem('brain-stroop-highscore', finalScore.toString());
        }
        setPhase('result');
      } else {
        setRound(nextRound);
        generateRound();
      }
    }, 600);
  }, [feedback, startTime, currentColor, round, score, highScore, generateRound]);

  const avgTime = times.length > 0 ? Math.round(times.reduce((a, b) => a + b, 0) / times.length) : 0;
  const accuracy = ROUNDS_TOTAL > 0 ? Math.round((score / ROUNDS_TOTAL) * 100) : 0;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-950 to-slate-900 flex flex-col">
      {/* Header */}
      <div className="bg-slate-900/80 backdrop-blur border-b border-slate-700 px-4 py-3 flex items-center gap-3">
        <button onClick={onBack} className="p-2 hover:bg-slate-700 rounded-lg transition-colors">
          <ArrowLeft size={20} className="text-slate-300" />
        </button>
        <Palette size={22} className="text-purple-400" />
        <h1 className="text-lg font-bold text-white">Stroop Test</h1>
        {phase === 'playing' && (
          <div className="ml-auto flex gap-4 text-sm">
            <span className="text-slate-400">Round: <span className="text-white">{round + 1}/{ROUNDS_TOTAL}</span></span>
            <span className="text-slate-400">Score: <span className="text-green-400">{score}</span></span>
          </div>
        )}
      </div>

      <div className="flex-1 flex items-center justify-center p-4">
        <AnimatePresence mode="wait">
          {phase === 'intro' && (
            <motion.div key="intro" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="text-center max-w-md">
              <div className="w-20 h-20 mx-auto mb-6 bg-purple-500/20 rounded-2xl flex items-center justify-center">
                <Palette size={40} className="text-purple-400" />
              </div>
              <h2 className="text-3xl font-bold text-white mb-4">Stroop Test</h2>
              <p className="text-slate-300 mb-3">
                A word will appear in a <strong>different color</strong> than what it says.
              </p>
              <p className="text-slate-300 mb-6">
                Your task: identify the <strong>COLOR</strong> of the text, not the word itself!
              </p>

              {/* Example */}
              <div className="bg-slate-800/50 rounded-xl p-6 mb-8">
                <p className="text-sm text-slate-400 mb-3">Example:</p>
                <p className="text-4xl font-black mb-3" style={{ color: '#3b82f6' }}>RED</p>
                <p className="text-slate-400">The word says "RED" but the color is <span className="text-blue-400 font-bold">BLUE</span></p>
                <p className="text-slate-400">Correct answer: <span className="text-blue-400 font-bold">BLUE</span></p>
              </div>

              <button
                onClick={startGame}
                className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-bold text-lg hover:scale-105 transition-transform"
              >
                Start Test ({ROUNDS_TOTAL} Rounds)
              </button>

              {highScore > 0 && (
                <p className="mt-4 text-slate-400 text-sm">
                  <Trophy size={14} className="inline mr-1 text-yellow-400" /> High Score: {highScore}/{ROUNDS_TOTAL}
                </p>
              )}
            </motion.div>
          )}

          {phase === 'playing' && currentWord && currentColor && (
            <motion.div key={`round-${round}`} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center w-full max-w-lg">
              {/* Progress bar */}
              <div className="w-full bg-slate-800 rounded-full h-2 mb-8">
                <motion.div
                  className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full"
                  initial={{ width: `${(round / ROUNDS_TOTAL) * 100}%` }}
                  animate={{ width: `${((round + 1) / ROUNDS_TOTAL) * 100}%` }}
                />
              </div>

              <p className="text-slate-400 mb-4 text-sm">What COLOR is this text displayed in?</p>

              {/* The Stroop Word */}
              <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="mb-10"
              >
                <span
                  className="text-5xl md:text-7xl font-black select-none"
                  style={{ color: currentColor.hex }}
                >
                  {currentWord.name}
                </span>
              </motion.div>

              {/* Answer Options */}
              <div className="grid grid-cols-2 gap-3 max-w-sm mx-auto">
                {options.map((color) => (
                  <motion.button
                    key={color.name}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleAnswer(color)}
                    disabled={!!feedback}
                    className={`relative px-6 py-4 rounded-xl font-bold text-lg transition-all ${
                      feedback
                        ? feedback.selected === color.name
                          ? feedback.correct
                            ? 'bg-green-600 text-white ring-2 ring-green-400'
                            : 'bg-red-600 text-white ring-2 ring-red-400'
                          : color.name === currentColor.name
                            ? 'bg-green-600/50 text-white ring-2 ring-green-400'
                            : 'bg-slate-700 text-slate-400'
                        : 'bg-slate-800 hover:bg-slate-700 text-white border border-slate-600'
                    }`}
                  >
                    <span className="inline-block w-4 h-4 rounded-full mr-2" style={{ backgroundColor: color.hex }} />
                    {color.label}
                    {feedback && color.name === currentColor.name && (
                      <CheckCircle size={18} className="absolute top-2 right-2 text-green-300" />
                    )}
                    {feedback && feedback.selected === color.name && !feedback.correct && (
                      <XCircle size={18} className="absolute top-2 right-2 text-red-300" />
                    )}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}

          {phase === 'result' && (
            <motion.div key="result" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center max-w-md">
              <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: 'spring' }}>
                <Trophy size={64} className={score >= ROUNDS_TOTAL * 0.8 ? 'text-yellow-400 mx-auto mb-4' : 'text-slate-400 mx-auto mb-4'} />
              </motion.div>

              <h2 className="text-3xl font-bold text-white mb-2">Test Complete!</h2>

              <div className="grid grid-cols-3 gap-3 mt-6 mb-8">
                <div className="bg-slate-800/50 rounded-xl p-4">
                  <p className="text-3xl font-bold text-green-400">{score}/{ROUNDS_TOTAL}</p>
                  <p className="text-xs text-slate-400 mt-1">Correct</p>
                </div>
                <div className="bg-slate-800/50 rounded-xl p-4">
                  <p className="text-3xl font-bold text-blue-400">{accuracy}%</p>
                  <p className="text-xs text-slate-400 mt-1">Accuracy</p>
                </div>
                <div className="bg-slate-800/50 rounded-xl p-4">
                  <p className="text-3xl font-bold text-purple-400">{avgTime}ms</p>
                  <p className="text-xs text-slate-400 mt-1">Avg Time</p>
                </div>
              </div>

              {score === highScore && score > 0 && (
                <p className="text-yellow-400 font-bold mb-4">New High Score!</p>
              )}

              <button
                onClick={startGame}
                className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-bold text-lg hover:scale-105 transition-transform"
              >
                Try Again
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
