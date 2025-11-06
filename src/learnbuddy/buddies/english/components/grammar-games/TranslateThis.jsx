import React, { useState } from 'react';
import { Check, X, Languages, ArrowRight } from 'lucide-react';

function TranslateThis({ exercises, language = 'en' }) {
  const [currentExercise, setCurrentExercise] = useState(0);
  const [userAnswer, setUserAnswer] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  const [isCorrect, setIsCorrect] = useState(null);
  const [score, setScore] = useState(0);

  const exercise = exercises[currentExercise];

  const normalizeText = (text) => {
    return text.toLowerCase().trim().replace(/[.,!?]/g, '');
  };

  const checkAnswer = () => {
    const normalized = normalizeText(userAnswer);
    const correctNormalized = normalizeText(exercise.correct);
    const correct = normalized === correctNormalized;
    
    setIsCorrect(correct);
    setIsChecked(true);
    if (correct) {
      setScore(score + 1);
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
    <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-xl p-6 border-2 border-blue-300 dark:border-blue-700 my-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-bold text-blue-800 dark:text-blue-200 flex items-center gap-2">
          <Languages className="text-blue-500" />
          {language === 'de' ? 'Übersetze das' : 'Translate This'}
        </h3>
        <div className="text-sm font-bold text-blue-700 dark:text-blue-300">
          {language === 'de' ? 'Punkte' : 'Score'}: {score}/{exercises.length}
        </div>
      </div>

      <p className="text-stone-700 dark:text-stone-300 mb-4">
        {language === 'de' 
          ? 'Übersetze den folgenden Satz ins Englische:' 
          : 'Translate the following sentence to English:'}
      </p>

      {/* German sentence to translate */}
      <div className="bg-white dark:bg-stone-800 rounded-lg p-4 mb-4 border-l-4 border-blue-500">
        <p className="text-lg font-semibold text-stone-800 dark:text-stone-200">
          🇩🇪 {exercise.german}
        </p>
      </div>

      {/* Input field */}
      <input
        type="text"
        value={userAnswer}
        onChange={(e) => setUserAnswer(e.target.value)}
        onKeyPress={handleKeyPress}
        disabled={isChecked}
        placeholder={language === 'de' ? 'Deine Übersetzung...' : 'Your translation...'}
        className="w-full p-4 rounded-lg border-2 border-blue-300 dark:border-blue-600 bg-white dark:bg-stone-800 text-stone-800 dark:text-stone-200 font-semibold text-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
      />

      {/* Action Buttons */}
      {!isChecked ? (
        <button
          onClick={checkAnswer}
          disabled={!userAnswer.trim()}
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 rounded-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
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
            : 'bg-orange-100 dark:bg-orange-900/30 border-2 border-orange-500'
        }`}>
          <div className="flex items-start gap-2">
            {isCorrect ? (
              <Check className="text-green-600 dark:text-green-400 flex-shrink-0 mt-1" size={24} />
            ) : (
              <X className="text-orange-600 dark:text-orange-400 flex-shrink-0 mt-1" size={24} />
            )}
            <div>
              <p className={`font-bold ${isCorrect ? 'text-green-800 dark:text-green-200' : 'text-orange-800 dark:text-orange-200'}`}>
                {isCorrect 
                  ? (language === 'de' ? '🎉 Perfekt übersetzt!' : '🎉 Perfect translation!') 
                  : (language === 'de' ? '💡 Nicht ganz, aber gut versucht!' : '💡 Not quite, but good try!')
                }
              </p>
              {!isCorrect && (
                <>
                  <p className="text-sm text-orange-700 dark:text-orange-300 mt-2">
                    <strong>{language === 'de' ? 'Deine Antwort' : 'Your answer'}:</strong> {userAnswer}
                  </p>
                  <p className="text-sm text-orange-700 dark:text-orange-300">
                    <strong>{language === 'de' ? 'Richtige Antwort' : 'Correct answer'}:</strong> {exercise.correct}
                  </p>
                </>
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

export default TranslateThis;

