import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Zap, Trophy, RotateCcw, ArrowRight, Target, Flame } from 'lucide-react';

/**
 * GrammarQuiz - Timed Multiple Choice Quiz
 * Fast-paced quiz with a countdown timer per question.
 *
 * exercises prop: [{ question, options: string[], correct: string, explanation?: string }]
 *   - question: the question text
 *   - options: array of 4 answer strings
 *   - correct: the correct answer string (must match one of the options)
 *   - explanation: optional explanation shown after answering
 */
const GrammarQuiz = ({ exercises = [], language = 'en' }) => {
  const [gameState, setGameState] = useState('intro'); // intro | playing | results
  const [currentIndex, setCurrentIndex] = useState(0);
  const [timeLeft, setTimeLeft] = useState(15);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [bestStreak, setBestStreak] = useState(0);
  const [multiplier, setMultiplier] = useState(1);
  const [results, setResults] = useState([]); // { correct: bool, answer, timeSpent }
  const [animate, setAnimate] = useState(''); // 'correct' | 'wrong' | 'timeout' | ''

  const timerRef = useRef(null);
  const TIME_PER_QUESTION = 15;

  const currentExercise = exercises[currentIndex] || {};
  const totalQuestions = exercises.length;
  const optionLabels = ['A', 'B', 'C', 'D'];

  const startGame = () => {
    setCurrentIndex(0);
    setScore(0);
    setStreak(0);
    setBestStreak(0);
    setMultiplier(1);
    setResults([]);
    setSelectedAnswer(null);
    setShowFeedback(false);
    setAnimate('');
    setTimeLeft(TIME_PER_QUESTION);
    setGameState('playing');
  };

  // Timer countdown
  useEffect(() => {
    if (gameState !== 'playing' || showFeedback) return;

    timerRef.current = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          clearInterval(timerRef.current);
          handleTimeout();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timerRef.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [gameState, currentIndex, showFeedback]);

  const handleTimeout = useCallback(() => {
    setShowFeedback(true);
    setAnimate('timeout');
    setStreak(0);
    setMultiplier(1);
    setResults(prev => [...prev, { correct: false, answer: null, timeSpent: TIME_PER_QUESTION, timedOut: true }]);
  }, []);

  const handleAnswer = (option) => {
    if (showFeedback || selectedAnswer !== null) return;
    clearInterval(timerRef.current);

    const isCorrect = option === currentExercise.correct;
    const timeSpent = TIME_PER_QUESTION - timeLeft;
    setSelectedAnswer(option);
    setShowFeedback(true);

    if (isCorrect) {
      const timeBonus = Math.max(0, Math.floor(timeLeft * 5));
      const points = (100 + timeBonus) * multiplier;
      setScore(prev => prev + points);
      setStreak(prev => {
        const newStreak = prev + 1;
        if (newStreak > bestStreak) setBestStreak(newStreak);
        return newStreak;
      });
      setMultiplier(prev => Math.min(prev + 0.5, 4));
      setAnimate('correct');
    } else {
      setStreak(0);
      setMultiplier(1);
      setAnimate('wrong');
    }

    setResults(prev => [...prev, { correct: isCorrect, answer: option, timeSpent, timedOut: false }]);
  };

  const handleNext = () => {
    if (currentIndex < totalQuestions - 1) {
      setCurrentIndex(prev => prev + 1);
      setSelectedAnswer(null);
      setShowFeedback(false);
      setAnimate('');
      setTimeLeft(TIME_PER_QUESTION);
    } else {
      setGameState('results');
    }
  };

  const timerPercent = (timeLeft / TIME_PER_QUESTION) * 100;
  const timerColor = timeLeft > 10 ? 'bg-green-500' : timeLeft > 5 ? 'bg-yellow-500' : 'bg-red-500';

  const getOptionStyle = (option) => {
    if (!showFeedback) {
      return 'bg-white dark:bg-stone-800 border-2 border-stone-200 dark:border-stone-700 hover:border-teal-400 dark:hover:border-teal-500 hover:bg-teal-50 dark:hover:bg-teal-900/20 hover:shadow-md cursor-pointer';
    }
    if (option === currentExercise.correct) {
      return 'bg-green-100 dark:bg-green-900/50 border-2 border-green-400 dark:border-green-600 text-green-800 dark:text-green-200';
    }
    if (option === selectedAnswer && option !== currentExercise.correct) {
      return 'bg-red-100 dark:bg-red-900/50 border-2 border-red-400 dark:border-red-600 text-red-800 dark:text-red-200';
    }
    return 'bg-stone-100 dark:bg-stone-800 border-2 border-stone-200 dark:border-stone-700 opacity-50';
  };

  // --- INTRO ---
  if (gameState === 'intro') {
    return (
      <div className="bg-gradient-to-br from-teal-500 to-cyan-600 rounded-xl p-8 text-center text-white shadow-xl">
        <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-2xl mb-5 animate-bounce">
          <Zap size={44} className="text-yellow-300" />
        </div>
        <h2 className="text-3xl sm:text-4xl font-black mb-2 drop-shadow">
          {language === 'de' ? 'Grammatik-Quiz' : 'Grammar Quiz'}
        </h2>
        <p className="text-teal-100 text-lg mb-6 max-w-md mx-auto">
          {language === 'de'
            ? 'Beantworte Grammatik-Fragen gegen die Uhr! Baue Serien auf für einen Score-Multiplikator.'
            : 'Answer grammar questions against the clock! Build streaks for a score multiplier.'}
        </p>

        <div className="bg-white/10 backdrop-blur rounded-xl p-4 mb-6 max-w-sm mx-auto text-left space-y-2 text-sm">
          <div className="flex items-center gap-2">
            <span className="w-6 h-6 rounded bg-yellow-300 text-teal-900 font-bold flex items-center justify-center text-xs">1</span>
            <span>{language === 'de' ? '15 Sekunden pro Frage' : '15 seconds per question'}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-6 h-6 rounded bg-yellow-300 text-teal-900 font-bold flex items-center justify-center text-xs">2</span>
            <span>{language === 'de' ? 'Schnellere Antworten = mehr Punkte' : 'Faster answers = more points'}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-6 h-6 rounded bg-yellow-300 text-teal-900 font-bold flex items-center justify-center text-xs">3</span>
            <span>{language === 'de' ? 'Serien erhöhen den Multiplikator (bis x4)' : 'Streaks increase multiplier (up to x4)'}</span>
          </div>
        </div>

        <button
          onClick={startGame}
          className="bg-yellow-300 hover:bg-yellow-200 text-teal-900 font-black text-lg px-10 py-3 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105 active:scale-95"
        >
          {language === 'de' ? 'Quiz starten' : 'Start Quiz'}
        </button>
      </div>
    );
  }

  // --- RESULTS ---
  if (gameState === 'results') {
    const correctCount = results.filter(r => r.correct).length;
    const accuracy = totalQuestions > 0 ? Math.round((correctCount / totalQuestions) * 100) : 0;
    const timedOutCount = results.filter(r => r.timedOut).length;
    const stars = accuracy >= 90 ? 3 : accuracy >= 60 ? 2 : 1;

    return (
      <div className="bg-gradient-to-br from-teal-500 to-cyan-600 rounded-xl p-8 text-center text-white shadow-xl">
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
          {language === 'de' ? 'Quiz beendet!' : 'Quiz Complete!'}
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-lg mx-auto mb-6">
          <div className="bg-white/10 backdrop-blur rounded-xl p-3">
            <div className="text-2xl font-black text-yellow-300">{score}</div>
            <div className="text-xs text-teal-200 uppercase tracking-wide">{language === 'de' ? 'Punkte' : 'Score'}</div>
          </div>
          <div className="bg-white/10 backdrop-blur rounded-xl p-3">
            <div className="text-2xl font-black text-yellow-300">{accuracy}%</div>
            <div className="text-xs text-teal-200 uppercase tracking-wide">{language === 'de' ? 'Genauigkeit' : 'Accuracy'}</div>
          </div>
          <div className="bg-white/10 backdrop-blur rounded-xl p-3">
            <div className="text-2xl font-black text-yellow-300">{bestStreak}</div>
            <div className="text-xs text-teal-200 uppercase tracking-wide">{language === 'de' ? 'Beste Serie' : 'Best Streak'}</div>
          </div>
          <div className="bg-white/10 backdrop-blur rounded-xl p-3">
            <div className="text-2xl font-black text-yellow-300">{correctCount}/{totalQuestions}</div>
            <div className="text-xs text-teal-200 uppercase tracking-wide">{language === 'de' ? 'Richtig' : 'Correct'}</div>
          </div>
        </div>

        {timedOutCount > 0 && (
          <p className="text-teal-200 text-sm mb-4">
            {language === 'de'
              ? `${timedOutCount} ${timedOutCount === 1 ? 'Frage' : 'Fragen'} durch Zeitablauf verloren`
              : `Timed out on ${timedOutCount} ${timedOutCount === 1 ? 'question' : 'questions'}`}
          </p>
        )}

        <button
          onClick={startGame}
          className="bg-yellow-300 hover:bg-yellow-200 text-teal-900 font-black text-lg px-10 py-3 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105 active:scale-95 inline-flex items-center gap-2"
        >
          <RotateCcw size={20} />
          {language === 'de' ? 'Nochmal spielen' : 'Play Again'}
        </button>
      </div>
    );
  }

  // --- PLAYING ---
  return (
    <div className="bg-gradient-to-br from-teal-50 to-cyan-50 dark:from-teal-950/40 dark:to-cyan-950/40 rounded-xl p-4 sm:p-6 border-2 border-teal-200 dark:border-teal-800 shadow-lg">
      {/* HUD */}
      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5 bg-teal-100 dark:bg-teal-900/60 px-3 py-1.5 rounded-lg">
            <Target size={16} className="text-teal-600 dark:text-teal-400" />
            <span className="font-bold text-teal-800 dark:text-teal-200 text-sm">{score}</span>
          </div>
          {streak > 1 && (
            <div className="flex items-center gap-1 bg-orange-100 dark:bg-orange-900/60 px-3 py-1.5 rounded-lg animate-pulse">
              <Flame size={16} className="text-orange-500" />
              <span className="font-bold text-orange-800 dark:text-orange-200 text-sm">{streak}x</span>
            </div>
          )}
          {multiplier > 1 && (
            <div className="bg-yellow-100 dark:bg-yellow-900/60 px-2 py-1 rounded text-xs font-bold text-yellow-700 dark:text-yellow-300">
              x{multiplier}
            </div>
          )}
        </div>
        <div className="text-sm font-semibold text-teal-700 dark:text-teal-300">
          {currentIndex + 1}/{totalQuestions}
        </div>
      </div>

      {/* Timer Bar */}
      <div className="w-full h-2.5 bg-stone-200 dark:bg-stone-700 rounded-full mb-5 overflow-hidden">
        <div
          className={`h-full rounded-full transition-all duration-1000 ease-linear ${timerColor}`}
          style={{ width: `${timerPercent}%` }}
        />
      </div>

      {/* Timer Text */}
      <div className="text-center mb-4">
        <span className={`
          inline-block px-3 py-1 rounded-full text-sm font-bold
          ${timeLeft <= 5 && !showFeedback ? 'bg-red-100 dark:bg-red-900/50 text-red-600 dark:text-red-400 animate-pulse' : 'bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-400'}
        `}>
          {showFeedback
            ? (animate === 'correct'
              ? (language === 'de' ? 'Richtig!' : 'Correct!')
              : animate === 'timeout'
                ? (language === 'de' ? 'Zeit abgelaufen!' : 'Time\'s up!')
                : (language === 'de' ? 'Falsch!' : 'Wrong!'))
            : `${timeLeft}s`}
        </span>
      </div>

      {/* Question */}
      <div className="bg-white dark:bg-stone-800 rounded-xl p-5 mb-5 shadow-sm border border-stone-200 dark:border-stone-700">
        <p className="text-lg font-semibold text-stone-800 dark:text-stone-200 text-center leading-relaxed">
          {currentExercise.question || currentExercise.prompt}
        </p>
      </div>

      {/* Options */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
        {(currentExercise.options || []).map((option, i) => (
          <button
            key={i}
            onClick={() => handleAnswer(option)}
            disabled={showFeedback}
            className={`
              flex items-center gap-3 p-4 rounded-xl text-left transition-all duration-200
              ${getOptionStyle(option)}
              ${!showFeedback ? 'active:scale-95' : ''}
            `}
          >
            <span className={`
              w-8 h-8 rounded-lg flex items-center justify-center font-bold text-sm shrink-0
              ${showFeedback && option === currentExercise.correct
                ? 'bg-green-500 text-white'
                : showFeedback && option === selectedAnswer && option !== currentExercise.correct
                  ? 'bg-red-500 text-white'
                  : 'bg-teal-100 dark:bg-teal-900/60 text-teal-700 dark:text-teal-300'}
            `}>
              {optionLabels[i]}
            </span>
            <span className="font-medium text-sm text-stone-800 dark:text-stone-200">{option}</span>
            {showFeedback && option === currentExercise.correct && (
              <span className="ml-auto text-green-500 text-lg">&#10003;</span>
            )}
            {showFeedback && option === selectedAnswer && option !== currentExercise.correct && (
              <span className="ml-auto text-red-500 text-lg">&#10007;</span>
            )}
          </button>
        ))}
      </div>

      {/* Explanation */}
      {showFeedback && currentExercise.explanation && (
        <div className={`
          text-sm px-4 py-3 rounded-lg mb-4 text-center border
          ${animate === 'correct'
            ? 'bg-green-100 dark:bg-green-900/40 text-green-800 dark:text-green-200 border-green-300 dark:border-green-700'
            : 'bg-amber-100 dark:bg-amber-900/40 text-amber-800 dark:text-amber-200 border-amber-300 dark:border-amber-700'}
        `}>
          {currentExercise.explanation}
        </div>
      )}

      {/* Next Button */}
      {showFeedback && (
        <div className="text-center">
          <button
            onClick={handleNext}
            className="inline-flex items-center gap-1.5 px-6 py-2.5 bg-teal-500 hover:bg-teal-400 text-white rounded-lg font-bold transition-all shadow hover:shadow-lg hover:scale-105 active:scale-95 cursor-pointer"
          >
            {currentIndex < totalQuestions - 1
              ? (language === 'de' ? 'Nächste Frage' : 'Next Question')
              : (language === 'de' ? 'Ergebnis' : 'See Results')}
            <ArrowRight size={18} />
          </button>
        </div>
      )}
    </div>
  );
};

export default GrammarQuiz;
