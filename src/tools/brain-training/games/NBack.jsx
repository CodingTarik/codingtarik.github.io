import React, { useState, useCallback, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Brain, ArrowLeft, Trophy, Play, Square } from 'lucide-react';

const GRID_SIZE = 3;
const TOTAL_TRIALS = 25;
const DISPLAY_TIME = 2000;
const MATCH_PROBABILITY = 0.33;

export default function NBack({ onBack }) {
  const [phase, setPhase] = useState('intro'); // intro, playing, feedback, result
  const [nLevel, setNLevel] = useState(2);
  const [trial, setTrial] = useState(0);
  const [sequence, setSequence] = useState([]);
  const [currentPos, setCurrentPos] = useState(null);
  const [showingStimulus, setShowingStimulus] = useState(false);
  const [userResponded, setUserResponded] = useState(false);
  const [feedback, setFeedback] = useState(null); // 'hit', 'miss', 'false_alarm', 'correct_reject'
  const [hits, setHits] = useState(0);
  const [misses, setMisses] = useState(0);
  const [falseAlarms, setFalseAlarms] = useState(0);
  const [correctRejects, setCorrectRejects] = useState(0);
  const [highScores, setHighScores] = useState(() => {
    const saved = localStorage.getItem('brain-nback-scores');
    return saved ? JSON.parse(saved) : {};
  });
  const intervalRef = useRef(null);
  const trialRef = useRef(0);

  const generateSequence = useCallback((n) => {
    const seq = [];
    for (let i = 0; i < TOTAL_TRIALS; i++) {
      if (i >= n && Math.random() < MATCH_PROBABILITY) {
        seq.push(seq[i - n]); // Match
      } else {
        let pos;
        do {
          pos = Math.floor(Math.random() * (GRID_SIZE * GRID_SIZE));
        } while (i >= n && pos === seq[i - n]);
        seq.push(pos);
      }
    }
    return seq;
  }, []);

  const isMatch = useCallback((seq, index, n) => {
    if (index < n) return false;
    return seq[index] === seq[index - n];
  }, []);

  const startGame = useCallback(() => {
    const seq = generateSequence(nLevel);
    setSequence(seq);
    setTrial(0);
    trialRef.current = 0;
    setHits(0);
    setMisses(0);
    setFalseAlarms(0);
    setCorrectRejects(0);
    setPhase('playing');
    setUserResponded(false);
    setFeedback(null);

    // Show first stimulus
    setCurrentPos(seq[0]);
    setShowingStimulus(true);
  }, [nLevel, generateSequence]);

  // Auto-advance trials
  useEffect(() => {
    if (phase !== 'playing') return;

    intervalRef.current = setInterval(() => {
      const currentTrial = trialRef.current;

      // Check if user missed a match
      if (!userResponded && isMatch(sequence, currentTrial, nLevel)) {
        setMisses(m => m + 1);
      } else if (!userResponded && !isMatch(sequence, currentTrial, nLevel)) {
        setCorrectRejects(cr => cr + 1);
      }

      const nextTrial = currentTrial + 1;
      if (nextTrial >= TOTAL_TRIALS) {
        clearInterval(intervalRef.current);
        setPhase('result');
        setShowingStimulus(false);
        // Save high score
        const finalHits = hits + (!userResponded && isMatch(sequence, currentTrial, nLevel) ? 0 : 0);
        return;
      }

      trialRef.current = nextTrial;
      setTrial(nextTrial);
      setCurrentPos(sequence[nextTrial]);
      setShowingStimulus(true);
      setUserResponded(false);
      setFeedback(null);
    }, DISPLAY_TIME);

    return () => clearInterval(intervalRef.current);
  }, [phase, sequence, nLevel, userResponded, isMatch]);

  // Save scores on result
  useEffect(() => {
    if (phase === 'result') {
      const totalMatches = sequence.filter((_, i) => isMatch(sequence, i, nLevel)).length;
      const accuracy = totalMatches > 0 ? Math.round((hits / totalMatches) * 100) : 100;
      const key = `n${nLevel}`;
      if (!highScores[key] || accuracy > highScores[key]) {
        const newScores = { ...highScores, [key]: accuracy };
        setHighScores(newScores);
        localStorage.setItem('brain-nback-scores', JSON.stringify(newScores));
      }
    }
  }, [phase]);

  const handleMatch = useCallback(() => {
    if (phase !== 'playing' || userResponded) return;
    setUserResponded(true);

    if (isMatch(sequence, trialRef.current, nLevel)) {
      setHits(h => h + 1);
      setFeedback('hit');
    } else {
      setFalseAlarms(fa => fa + 1);
      setFeedback('false_alarm');
    }
  }, [phase, userResponded, sequence, nLevel, isMatch]);

  // Keyboard support
  useEffect(() => {
    const handler = (e) => {
      if (e.code === 'Space' || e.code === 'KeyM') {
        e.preventDefault();
        handleMatch();
      }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [handleMatch]);

  const totalMatches = sequence.filter((_, i) => isMatch(sequence, i, nLevel)).length;
  const accuracy = totalMatches > 0 ? Math.round((hits / Math.max(totalMatches, 1)) * 100) : 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 flex flex-col">
      {/* Header */}
      <div className="bg-slate-900/80 backdrop-blur border-b border-slate-700 px-4 py-3 flex items-center gap-3">
        <button onClick={onBack} className="p-2 hover:bg-slate-700 rounded-lg transition-colors">
          <ArrowLeft size={20} className="text-slate-300" />
        </button>
        <Brain size={22} className="text-indigo-400" />
        <h1 className="text-lg font-bold text-white">{nLevel}-Back Test</h1>
        {phase === 'playing' && (
          <div className="ml-auto text-sm text-slate-400">
            Trial: <span className="text-white">{trial + 1}/{TOTAL_TRIALS}</span>
          </div>
        )}
      </div>

      <div className="flex-1 flex items-center justify-center p-4">
        <AnimatePresence mode="wait">
          {phase === 'intro' && (
            <motion.div key="intro" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="text-center max-w-md">
              <div className="w-20 h-20 mx-auto mb-6 bg-indigo-500/20 rounded-2xl flex items-center justify-center">
                <Brain size={40} className="text-indigo-400" />
              </div>
              <h2 className="text-3xl font-bold text-white mb-4">N-Back Test</h2>
              <p className="text-slate-300 mb-6">
                A square will light up on a 3x3 grid. Press <kbd className="px-2 py-1 bg-slate-700 rounded text-white text-sm">Space</kbd> or tap the button when the current position matches the one from <strong className="text-indigo-400">{nLevel} steps ago</strong>.
              </p>

              <p className="text-slate-400 text-sm mb-6">
                This is a scientifically validated working memory task used in cognitive neuroscience research.
              </p>

              {/* N-Level Selector */}
              <div className="flex items-center justify-center gap-3 mb-8">
                <span className="text-slate-400">Level:</span>
                {[1, 2, 3, 4].map(n => (
                  <button
                    key={n}
                    onClick={() => setNLevel(n)}
                    className={`w-12 h-12 rounded-xl font-bold text-lg transition-all ${
                      nLevel === n
                        ? 'bg-indigo-600 text-white scale-110'
                        : 'bg-slate-800 text-slate-400 hover:bg-slate-700'
                    }`}
                  >
                    {n}
                  </button>
                ))}
              </div>

              <button
                onClick={startGame}
                className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl font-bold text-lg hover:scale-105 transition-transform flex items-center gap-2 mx-auto"
              >
                <Play size={20} /> Start {nLevel}-Back
              </button>

              {highScores[`n${nLevel}`] && (
                <p className="mt-4 text-slate-400 text-sm">
                  <Trophy size={14} className="inline mr-1 text-yellow-400" />
                  Best accuracy at {nLevel}-Back: {highScores[`n${nLevel}`]}%
                </p>
              )}
            </motion.div>
          )}

          {phase === 'playing' && (
            <motion.div key="playing" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center">
              {/* Progress */}
              <div className="w-64 mx-auto bg-slate-800 rounded-full h-2 mb-6">
                <motion.div
                  className="bg-gradient-to-r from-indigo-500 to-purple-500 h-2 rounded-full"
                  animate={{ width: `${((trial + 1) / TOTAL_TRIALS) * 100}%` }}
                />
              </div>

              {/* Grid */}
              <div className="inline-grid grid-cols-3 gap-2 mb-8">
                {Array.from({ length: GRID_SIZE * GRID_SIZE }).map((_, i) => (
                  <motion.div
                    key={i}
                    animate={{
                      backgroundColor: currentPos === i && showingStimulus ? '#6366f1' : '#1e293b',
                      scale: currentPos === i && showingStimulus ? 1.05 : 1,
                    }}
                    transition={{ duration: 0.15 }}
                    className="w-20 h-20 md:w-24 md:h-24 rounded-xl border-2 border-slate-700"
                  />
                ))}
              </div>

              {/* Feedback */}
              <AnimatePresence>
                {feedback && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className={`mb-4 text-lg font-bold ${
                      feedback === 'hit' ? 'text-green-400' : 'text-red-400'
                    }`}
                  >
                    {feedback === 'hit' ? 'Correct Match!' : 'Wrong — No Match!'}
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Match Button */}
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={handleMatch}
                disabled={userResponded}
                className={`px-8 py-4 rounded-xl font-bold text-lg transition-all ${
                  userResponded
                    ? 'bg-slate-700 text-slate-500 cursor-not-allowed'
                    : 'bg-indigo-600 hover:bg-indigo-500 text-white'
                }`}
              >
                {userResponded ? 'Responded' : 'Match! (Space)'}
              </motion.button>

              <p className="text-slate-500 text-sm mt-3">
                Press when current position = position from {nLevel} steps ago
              </p>
            </motion.div>
          )}

          {phase === 'result' && (
            <motion.div key="result" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center max-w-md">
              <Trophy size={64} className={accuracy >= 80 ? 'text-yellow-400 mx-auto mb-4' : 'text-slate-400 mx-auto mb-4'} />
              <h2 className="text-3xl font-bold text-white mb-2">{nLevel}-Back Complete!</h2>

              <div className="grid grid-cols-2 gap-3 mt-6 mb-8">
                <div className="bg-slate-800/50 rounded-xl p-4">
                  <p className="text-3xl font-bold text-green-400">{hits}</p>
                  <p className="text-xs text-slate-400 mt-1">Hits</p>
                </div>
                <div className="bg-slate-800/50 rounded-xl p-4">
                  <p className="text-3xl font-bold text-red-400">{misses}</p>
                  <p className="text-xs text-slate-400 mt-1">Misses</p>
                </div>
                <div className="bg-slate-800/50 rounded-xl p-4">
                  <p className="text-3xl font-bold text-orange-400">{falseAlarms}</p>
                  <p className="text-xs text-slate-400 mt-1">False Alarms</p>
                </div>
                <div className="bg-slate-800/50 rounded-xl p-4">
                  <p className="text-3xl font-bold text-indigo-400">{accuracy}%</p>
                  <p className="text-xs text-slate-400 mt-1">Hit Accuracy</p>
                </div>
              </div>

              <p className="text-slate-400 text-sm mb-6">
                Total matches in sequence: {totalMatches} / {TOTAL_TRIALS}
              </p>

              <div className="flex gap-3 justify-center">
                <button
                  onClick={startGame}
                  className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl font-bold hover:scale-105 transition-transform"
                >
                  Try Again
                </button>
                <button
                  onClick={() => setPhase('intro')}
                  className="px-6 py-3 bg-slate-800 text-slate-300 rounded-xl font-bold hover:bg-slate-700 transition-colors"
                >
                  Change Level
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
