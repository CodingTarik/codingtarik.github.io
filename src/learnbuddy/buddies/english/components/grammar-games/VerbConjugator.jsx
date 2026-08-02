import React, { useState } from 'react';
import { Wand2, Check, X, ArrowRight } from 'lucide-react';

function VerbConjugator({ exercises, language = 'en' }) {
  const [currentExercise, setCurrentExercise] = useState(0);
  const [userAnswer, setUserAnswer] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  const [isCorrect, setIsCorrect] = useState(null);
  const [score, setScore] = useState(0);
  const [showAnimation, setShowAnimation] = useState(false);

  const exercise = exercises[currentExercise];

  const checkAnswer = () => {
    const correct = userAnswer.toLowerCase().trim() === exercise.correct.toLowerCase();
    setIsCorrect(correct);
    setIsChecked(true);
    if (correct) {
      setScore(score + 1);
      setShowAnimation(true);
      setTimeout(() => setShowAnimation(false), 1000);
    }
  };

  const nextExercise = () => {
    if (currentExercise < exercises.length - 1) {
      setCurrentExercise(currentExercise + 1);
    } else {
      setCurrentExercise(0);
      setScore(0);
    }
    setUserAnswer('');
    setIsChecked(false);
    setIsCorrect(null);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !isChecked && userAnswer.trim()) {
      checkAnswer();
    }
  };

  return (
    <div className="bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 rounded-xl p-6 border-2 border-indigo-300 dark:border-indigo-700 my-6 relative overflow-hidden">
      {showAnimation && (
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500 opacity-20 animate-pulse pointer-events-none"></div>
      )}
      
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-bold text-indigo-800 dark:text-indigo-200 flex items-center gap-2">
          <Wand2 className="text-indigo-500" />
          {language === 'de' ? 'Verb-Konjugator' : 'Verb Conjugator'}
        </h3>
        <div className="text-sm font-bold text-indigo-700 dark:text-indigo-300">
          {language === 'de' ? 'Punkte' : 'Score'}: {score}/{exercises.length}
        </div>
      </div>

      <p className="text-stone-700 dark:text-stone-300 mb-6">
        {language === 'de' 
          ? 'Konjugiere das Verb für die angegebene Person:' 
          : 'Conjugate the verb for the given subject:'}
      </p>

      {/* The "Machine" */}
      <div className="bg-white dark:bg-stone-800 rounded-xl p-6 mb-4 border-2 border-indigo-400 dark:border-indigo-600 shadow-lg">
        <div className="flex items-center justify-center gap-4 mb-6">
          {/* Subject */}
          <div className="bg-gradient-to-br from-indigo-100 to-purple-100 dark:from-indigo-800 dark:to-purple-800 px-6 py-4 rounded-lg border-2 border-indigo-300 dark:border-indigo-600">
            <p className="text-sm text-indigo-600 dark:text-indigo-300 font-semibold mb-1">
              {language === 'de' ? 'Subjekt' : 'Subject'}
            </p>
            <p className="text-2xl font-bold text-indigo-900 dark:text-indigo-100">
              {exercise.subject}
            </p>
          </div>

          {/* Plus sign */}
          <div className="text-3xl font-bold text-indigo-500">+</div>

          {/* Verb */}
          <div className="bg-gradient-to-br from-pink-100 to-purple-100 dark:from-pink-800 dark:to-purple-800 px-6 py-4 rounded-lg border-2 border-pink-300 dark:border-pink-600">
            <p className="text-sm text-pink-600 dark:text-pink-300 font-semibold mb-1">
              {language === 'de' ? 'Verb' : 'Verb'}
            </p>
            <p className="text-2xl font-bold text-pink-900 dark:text-pink-100">
              {exercise.verb}
            </p>
          </div>
        </div>

        {/* Arrow pointing down */}
        <div className="flex justify-center mb-4">
          <div className="text-indigo-500 animate-bounce">
            <ArrowRight size={32} className="rotate-90" />
          </div>
        </div>

        {/* Input/Result */}
        <div className="bg-gradient-to-br from-yellow-100 to-orange-100 dark:from-yellow-800 dark:to-orange-800 px-6 py-4 rounded-lg border-2 border-yellow-400 dark:border-yellow-600">
          <p className="text-sm text-yellow-700 dark:text-yellow-300 font-semibold mb-2">
            {language === 'de' ? 'Konjugiertes Verb' : 'Conjugated Verb'}
          </p>
          {!isChecked ? (
            <input
              type="text"
              value={userAnswer}
              onChange={(e) => setUserAnswer(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="?"
              className="w-full p-3 rounded-lg border-2 border-yellow-500 dark:border-yellow-600 bg-white dark:bg-stone-900 text-stone-800 dark:text-stone-200 font-bold text-2xl text-center focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
          ) : (
            <p className={`text-2xl font-bold text-center ${
              isCorrect ? 'text-green-700 dark:text-green-300' : 'text-red-700 dark:text-red-300'
            }`}>
              {exercise.correct}
            </p>
          )}
        </div>
      </div>

      {/* Action Buttons */}
      {!isChecked ? (
        <button
          onClick={checkAnswer}
          disabled={!userAnswer.trim()}
          className="w-full bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-3 rounded-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          <Check size={20} />
          {language === 'de' ? 'Prüfen' : 'Check'}
        </button>
      ) : (
        <button
          onClick={nextExercise}
          className="w-full bg-teal-500 hover:bg-teal-600 text-white font-bold py-3 rounded-lg transition-all flex items-center justify-center gap-2"
        >
          {currentExercise < exercises.length - 1 
            ? (language === 'de' ? 'Nächste Übung' : 'Next Exercise')
            : (language === 'de' ? 'Neu starten' : 'Restart')
          }
          <ArrowRight size={20} />
        </button>
      )}

      {/* Feedback */}
      {isChecked && (
        <div className={`mt-4 p-4 rounded-lg ${
          isCorrect 
            ? 'bg-green-100 dark:bg-green-900/30 border-2 border-green-500' 
            : 'bg-red-100 dark:bg-red-900/30 border-2 border-red-500'
        }`}>
          <div className="flex items-start gap-2">
            {isCorrect ? (
              <Check className="text-green-600 dark:text-green-400 flex-shrink-0 mt-1" size={24} />
            ) : (
              <X className="text-red-600 dark:text-red-400 flex-shrink-0 mt-1" size={24} />
            )}
            <div>
              <p className={`font-bold ${isCorrect ? 'text-green-800 dark:text-green-200' : 'text-red-800 dark:text-red-200'}`}>
                {isCorrect 
                  ? (language === 'de' ? '🎉 Perfekt konjugiert!' : '🎉 Perfect conjugation!') 
                  : (language === 'de' ? '❌ Nicht ganz richtig' : '❌ Not quite right')
                }
              </p>
              {!isCorrect && (
                <p className="text-sm text-red-700 dark:text-red-300 mt-2">
                  <strong>{language === 'de' ? 'Deine Antwort' : 'Your answer'}:</strong> {userAnswer}
                </p>
              )}
              {exercise.explanation && (
                <p className="text-sm text-stone-700 dark:text-stone-300 mt-2">
                  💡 {exercise.explanation}
                </p>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default VerbConjugator;

