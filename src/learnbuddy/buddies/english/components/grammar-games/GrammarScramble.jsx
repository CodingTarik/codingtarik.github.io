import React, { useState, useEffect, useRef } from 'react';
import { Shuffle, RotateCcw, Trophy, ArrowRight, Lightbulb, Undo2, Clock } from 'lucide-react';

/**
 * GrammarScramble - Word/Sentence Unscrambling Game
 * Words in a sentence are shuffled. Player clicks them in the correct order.
 *
 * exercises prop: [{ words: string[], correct: string, hint?: string, explanation?: string }]
 *   - words: array of scrambled word fragments (e.g. ["eaten", "have", "I"])
 *   - correct: the correct sentence (e.g. "I have eaten")
 *   - hint: optional hint string
 *   - explanation: shown after answering
 */
const GrammarScramble = ({ exercises = [], language = 'en' }) => {
  const [gameState, setGameState] = useState('intro'); // intro | playing | results
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selected, setSelected] = useState([]); // words picked in order
  const [available, setAvailable] = useState([]); // remaining scrambled words { text, originalIndex }
  const [feedback, setFeedback] = useState(null); // 'correct' | 'wrong' | null
  const [showHint, setShowHint] = useState(false);
  const [score, setScore] = useState(0);
  const [attempts, setAttempts] = useState(0);
  const [totalMistakes, setTotalMistakes] = useState(0);
  const [elapsed, setElapsed] = useState(0);
  const [results, setResults] = useState([]); // per-exercise results

  const timerRef = useRef(null);

  const currentExercise = exercises[currentIndex] || {};
  const totalExercises = exercises.length;

  // Shuffle available words when exercise changes
  useEffect(() => {
    if (gameState === 'playing') {
      resetCurrentExercise();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentIndex, gameState]);

  // Timer
  useEffect(() => {
    if (gameState === 'playing') {
      timerRef.current = setInterval(() => setElapsed(prev => prev + 1), 1000);
    }
    return () => clearInterval(timerRef.current);
  }, [gameState]);

  const resetCurrentExercise = () => {
    const words = currentExercise.words || [];
    const shuffled = words
      .map((text, i) => ({ text, originalIndex: i }))
      .sort(() => Math.random() - 0.5);
    setAvailable(shuffled);
    setSelected([]);
    setFeedback(null);
    setShowHint(false);
  };

  const startGame = () => {
    setCurrentIndex(0);
    setScore(0);
    setAttempts(0);
    setTotalMistakes(0);
    setElapsed(0);
    setResults([]);
    setGameState('playing');
  };

  const handleSelectWord = (wordObj, availableIdx) => {
    if (feedback) return;
    setSelected(prev => [...prev, wordObj]);
    setAvailable(prev => prev.filter((_, i) => i !== availableIdx));
  };

  const handleUndo = () => {
    if (feedback || selected.length === 0) return;
    const lastWord = selected[selected.length - 1];
    setSelected(prev => prev.slice(0, -1));
    setAvailable(prev => [...prev, lastWord]);
  };

  const handleCheck = () => {
    const userSentence = selected.map(w => w.text).join(' ');
    const isCorrect = userSentence === currentExercise.correct;
    setAttempts(prev => prev + 1);

    if (isCorrect) {
      setFeedback('correct');
      setScore(prev => prev + Math.max(50, 100 - (attempts * 20)));
      setResults(prev => [...prev, { correct: true, attempts: attempts + 1 }]);
    } else {
      setFeedback('wrong');
      setTotalMistakes(prev => prev + 1);
      // Auto-reset after short delay on wrong answer
      setTimeout(() => {
        setFeedback(null);
        resetCurrentExercise();
      }, 1200);
    }
  };

  const handleNext = () => {
    if (currentIndex < totalExercises - 1) {
      setCurrentIndex(prev => prev + 1);
      setAttempts(0);
    } else {
      clearInterval(timerRef.current);
      setGameState('results');
    }
  };

  const formatTime = (seconds) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}:${s.toString().padStart(2, '0')}`;
  };

  const progress = ((currentIndex + (feedback === 'correct' ? 1 : 0)) / totalExercises) * 100;

  // --- INTRO ---
  if (gameState === 'intro') {
    return (
      <div className="bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl p-8 text-center text-white shadow-xl">
        <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-2xl mb-5 animate-bounce">
          <Shuffle size={44} className="text-yellow-200" />
        </div>
        <h2 className="text-3xl sm:text-4xl font-black mb-2 drop-shadow">
          {language === 'de' ? 'Wort-Scramble' : 'Grammar Scramble'}
        </h2>
        <p className="text-amber-100 text-lg mb-6 max-w-md mx-auto">
          {language === 'de'
            ? 'Die Wörter sind durcheinander! Klicke sie in der richtigen Reihenfolge, um den Satz zu bilden.'
            : 'The words are mixed up! Click them in the right order to build the correct sentence.'}
        </p>

        <div className="bg-white/10 backdrop-blur rounded-xl p-4 mb-6 max-w-sm mx-auto text-left space-y-2 text-sm">
          <div className="flex items-center gap-2">
            <span className="w-6 h-6 rounded bg-yellow-300 text-orange-900 font-bold flex items-center justify-center text-xs">1</span>
            <span>{language === 'de' ? 'Klicke auf die Wörter in der richtigen Reihenfolge' : 'Tap words in the correct order'}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-6 h-6 rounded bg-yellow-300 text-orange-900 font-bold flex items-center justify-center text-xs">2</span>
            <span>{language === 'de' ? 'Nutze "Rückgängig" um den letzten Schritt zu korrigieren' : 'Use "Undo" to fix the last pick'}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-6 h-6 rounded bg-yellow-300 text-orange-900 font-bold flex items-center justify-center text-xs">3</span>
            <span>{language === 'de' ? 'Weniger Versuche = mehr Punkte!' : 'Fewer attempts = more points!'}</span>
          </div>
        </div>

        <button
          onClick={startGame}
          className="bg-yellow-300 hover:bg-yellow-200 text-orange-900 font-black text-lg px-10 py-3 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105 active:scale-95"
        >
          {language === 'de' ? 'Los geht\'s!' : 'Start Game'}
        </button>
      </div>
    );
  }

  // --- RESULTS ---
  if (gameState === 'results') {
    const correctCount = results.filter(r => r.correct).length;
    const accuracy = totalExercises > 0 ? Math.round((correctCount / totalExercises) * 100) : 0;
    const stars = accuracy >= 90 ? 3 : accuracy >= 60 ? 2 : 1;

    return (
      <div className="bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl p-8 text-center text-white shadow-xl">
        <div className="flex justify-center gap-2 mb-4">
          {[1, 2, 3].map(i => (
            <Trophy
              key={i}
              size={40}
              className={`transition-all duration-500 ${i <= stars ? 'text-yellow-300 scale-110' : 'text-white/20'}`}
              style={{ transitionDelay: `${i * 200}ms` }}
            />
          ))}
        </div>
        <h2 className="text-3xl font-black mb-4 drop-shadow">
          {language === 'de' ? 'Ergebnis' : 'Results'}
        </h2>

        <div className="grid grid-cols-3 gap-4 max-w-sm mx-auto mb-6">
          <div className="bg-white/10 backdrop-blur rounded-xl p-3">
            <div className="text-2xl font-black text-yellow-300">{score}</div>
            <div className="text-xs text-amber-200 uppercase tracking-wide">{language === 'de' ? 'Punkte' : 'Score'}</div>
          </div>
          <div className="bg-white/10 backdrop-blur rounded-xl p-3">
            <div className="text-2xl font-black text-yellow-300">{formatTime(elapsed)}</div>
            <div className="text-xs text-amber-200 uppercase tracking-wide">{language === 'de' ? 'Zeit' : 'Time'}</div>
          </div>
          <div className="bg-white/10 backdrop-blur rounded-xl p-3">
            <div className="text-2xl font-black text-yellow-300">{accuracy}%</div>
            <div className="text-xs text-amber-200 uppercase tracking-wide">{language === 'de' ? 'Genauigkeit' : 'Accuracy'}</div>
          </div>
        </div>

        <p className="text-amber-100 text-sm mb-6">
          {language === 'de'
            ? `${correctCount}/${totalExercises} richtig, ${totalMistakes} Fehler insgesamt`
            : `${correctCount}/${totalExercises} correct, ${totalMistakes} total mistakes`}
        </p>

        <button
          onClick={startGame}
          className="bg-yellow-300 hover:bg-yellow-200 text-orange-900 font-black text-lg px-10 py-3 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105 active:scale-95 inline-flex items-center gap-2"
        >
          <RotateCcw size={20} />
          {language === 'de' ? 'Nochmal spielen' : 'Play Again'}
        </button>
      </div>
    );
  }

  // --- PLAYING ---
  return (
    <div className="bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-950/40 dark:to-orange-950/40 rounded-xl p-4 sm:p-6 border-2 border-amber-200 dark:border-amber-800 shadow-lg">
      {/* HUD */}
      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
        <div className="flex items-center gap-3">
          <div className="bg-amber-100 dark:bg-amber-900/60 px-3 py-1.5 rounded-lg text-sm font-bold text-amber-800 dark:text-amber-200">
            {language === 'de' ? 'Punkte' : 'Score'}: {score}
          </div>
          <div className="flex items-center gap-1.5 bg-amber-100 dark:bg-amber-900/60 px-3 py-1.5 rounded-lg">
            <Clock size={14} className="text-amber-600 dark:text-amber-400" />
            <span className="font-bold text-amber-800 dark:text-amber-200 text-sm">{formatTime(elapsed)}</span>
          </div>
        </div>
        <div className="text-sm font-semibold text-amber-700 dark:text-amber-300">
          {currentIndex + 1}/{totalExercises}
        </div>
      </div>

      {/* Progress Bar */}
      <div className="w-full h-2 bg-amber-200 dark:bg-amber-900 rounded-full mb-4 overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-amber-500 to-orange-500 rounded-full transition-all duration-500 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Prompt */}
      {currentExercise.prompt && (
        <p className="text-stone-700 dark:text-stone-300 text-center mb-3 font-medium">
          {currentExercise.prompt}
        </p>
      )}

      {/* Selected sentence area */}
      <div className={`
        bg-white dark:bg-stone-800 rounded-xl p-4 min-h-[60px] mb-4 border-2 border-dashed
        flex flex-wrap gap-2 items-center
        transition-colors duration-300
        ${feedback === 'correct' ? 'border-green-400 dark:border-green-600 bg-green-50 dark:bg-green-900/30' :
          feedback === 'wrong' ? 'border-red-400 dark:border-red-600 bg-red-50 dark:bg-red-900/30' :
          'border-amber-300 dark:border-amber-700'}
      `}>
        {selected.length === 0 ? (
          <span className="text-stone-400 dark:text-stone-500 italic text-sm">
            {language === 'de' ? 'Klicke auf die Wörter unten...' : 'Click the words below to build the sentence...'}
          </span>
        ) : (
          selected.map((wordObj, i) => (
            <span
              key={`${wordObj.originalIndex}-${i}`}
              className={`
                inline-block px-3 py-1.5 rounded-lg text-sm font-semibold transition-all
                ${feedback === 'correct'
                  ? 'bg-green-200 dark:bg-green-800 text-green-800 dark:text-green-200'
                  : feedback === 'wrong'
                    ? 'bg-red-200 dark:bg-red-800 text-red-800 dark:text-red-200 animate-[shake_0.3s_ease-in-out]'
                    : 'bg-amber-100 dark:bg-amber-900/60 text-amber-800 dark:text-amber-200'}
              `}
            >
              {wordObj.text}
            </span>
          ))
        )}
      </div>

      {/* Available word tiles */}
      {!feedback && (
        <div className="flex flex-wrap gap-2 justify-center mb-4">
          {available.map((wordObj, i) => (
            <button
              key={`${wordObj.originalIndex}-avail-${i}`}
              onClick={() => handleSelectWord(wordObj, i)}
              className="px-4 py-2 bg-white dark:bg-stone-700 border-2 border-amber-300 dark:border-amber-600 rounded-xl text-amber-800 dark:text-amber-200 font-semibold text-sm hover:bg-amber-100 dark:hover:bg-amber-900/40 hover:border-amber-400 hover:scale-105 active:scale-95 transition-all shadow-sm cursor-pointer"
            >
              {wordObj.text}
            </button>
          ))}
        </div>
      )}

      {/* Feedback + Explanation */}
      {feedback === 'correct' && currentExercise.explanation && (
        <div className="bg-green-100 dark:bg-green-900/40 text-green-800 dark:text-green-200 text-sm px-4 py-3 rounded-lg mb-4 text-center border border-green-300 dark:border-green-700">
          {currentExercise.explanation}
        </div>
      )}

      {feedback === 'wrong' && (
        <div className="bg-red-100 dark:bg-red-900/40 text-red-800 dark:text-red-200 text-sm px-4 py-2 rounded-lg mb-4 text-center border border-red-300 dark:border-red-700">
          {language === 'de' ? 'Nicht ganz richtig! Versuch es nochmal.' : 'Not quite right! Try again.'}
        </div>
      )}

      {/* Action buttons */}
      <div className="flex justify-center gap-3">
        {!feedback && (
          <>
            <button
              onClick={handleUndo}
              disabled={selected.length === 0}
              className="flex items-center gap-1.5 px-4 py-2 bg-stone-200 dark:bg-stone-700 text-stone-700 dark:text-stone-300 rounded-lg text-sm font-semibold hover:bg-stone-300 dark:hover:bg-stone-600 disabled:opacity-40 disabled:cursor-not-allowed transition-all cursor-pointer"
            >
              <Undo2 size={16} />
              {language === 'de' ? 'Rückgängig' : 'Undo'}
            </button>

            {currentExercise.hint && (
              <button
                onClick={() => setShowHint(true)}
                className="flex items-center gap-1.5 px-4 py-2 bg-yellow-100 dark:bg-yellow-900/40 text-yellow-800 dark:text-yellow-200 rounded-lg text-sm font-semibold hover:bg-yellow-200 dark:hover:bg-yellow-800/40 transition-all cursor-pointer"
              >
                <Lightbulb size={16} />
                {language === 'de' ? 'Tipp' : 'Hint'}
              </button>
            )}

            <button
              onClick={handleCheck}
              disabled={available.length > 0}
              className="flex items-center gap-1.5 px-5 py-2 bg-amber-500 hover:bg-amber-400 text-white rounded-lg text-sm font-bold disabled:opacity-40 disabled:cursor-not-allowed transition-all shadow cursor-pointer"
            >
              {language === 'de' ? 'Prüfen' : 'Check'}
            </button>
          </>
        )}

        {feedback === 'correct' && (
          <button
            onClick={handleNext}
            className="flex items-center gap-1.5 px-6 py-2.5 bg-green-500 hover:bg-green-400 text-white rounded-lg font-bold transition-all shadow hover:shadow-lg hover:scale-105 active:scale-95 cursor-pointer"
          >
            {currentIndex < totalExercises - 1
              ? (language === 'de' ? 'Weiter' : 'Next')
              : (language === 'de' ? 'Ergebnis' : 'Results')}
            <ArrowRight size={18} />
          </button>
        )}
      </div>

      {/* Hint display */}
      {showHint && currentExercise.hint && !feedback && (
        <div className="mt-3 bg-yellow-50 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-200 text-sm px-4 py-2 rounded-lg text-center border border-yellow-300 dark:border-yellow-700">
          <Lightbulb size={14} className="inline mr-1.5 -mt-0.5" />
          {currentExercise.hint}
        </div>
      )}

      {/* Shake keyframe */}
      <style>{`
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-4px); }
          50% { transform: translateX(4px); }
          75% { transform: translateX(-2px); }
        }
      `}</style>
    </div>
  );
};

export default GrammarScramble;
