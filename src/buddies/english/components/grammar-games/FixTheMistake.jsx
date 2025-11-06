import React, { useState } from 'react';
import { Check, X, AlertCircle, ArrowRight } from 'lucide-react';

function FixTheMistake({ exercises, language = 'en' }) {
  const [currentExercise, setCurrentExercise] = useState(0);
  const [selectedWord, setSelectedWord] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);
  const [score, setScore] = useState(0);

  const exercise = exercises[currentExercise];
  const words = exercise.sentence.split(' ');

  const handleWordClick = (wordIndex) => {
    if (isCorrect !== null) return;
    setSelectedWord(wordIndex);
  };

  const checkAnswer = () => {
    const correct = selectedWord === exercise.mistakeIndex;
    setIsCorrect(correct);
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
    setSelectedWord(null);
    setIsCorrect(null);
  };

  return (
    <div className="bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 rounded-xl p-6 border-2 border-red-300 dark:border-red-700 my-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-bold text-red-800 dark:text-red-200 flex items-center gap-2">
          <AlertCircle className="text-red-500" />
          {language === 'de' ? 'Fehler finden' : 'Fix the Mistake'}
        </h3>
        <div className="text-sm font-bold text-red-700 dark:text-red-300">
          {language === 'de' ? 'Punkte' : 'Score'}: {score}/{exercises.length}
        </div>
      </div>

      <p className="text-stone-700 dark:text-stone-300 mb-4">
        {language === 'de' 
          ? 'Finde das falsche Wort und klicke darauf!' 
          : 'Find the incorrect word and click on it!'}
      </p>

      {/* Sentence with clickable words */}
      <div className="bg-white dark:bg-stone-800 rounded-lg p-6 mb-4 border-2 border-red-300 dark:border-red-600">
        <div className="flex flex-wrap gap-2 text-lg">
          {words.map((word, idx) => (
            <button
              key={idx}
              onClick={() => handleWordClick(idx)}
              disabled={isCorrect !== null}
              className={`px-3 py-2 rounded-lg font-semibold transition-all transform hover:scale-105 ${
                selectedWord === idx
                  ? 'bg-red-500 text-white shadow-lg'
                  : 'bg-stone-100 dark:bg-stone-700 text-stone-800 dark:text-stone-200 hover:bg-stone-200 dark:hover:bg-stone-600'
              } ${isCorrect !== null ? 'cursor-not-allowed opacity-50' : ''}`}
            >
              {word}
            </button>
          ))}
        </div>
      </div>

      {/* Action Buttons */}
      {isCorrect === null ? (
        <button
          onClick={checkAnswer}
          disabled={selectedWord === null}
          className="w-full bg-red-500 hover:bg-red-600 text-white font-bold py-3 rounded-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
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
      {isCorrect !== null && (
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
                  ? (language === 'de' ? '🎉 Richtig gefunden!' : '🎉 Correct!') 
                  : (language === 'de' ? '❌ Das war nicht der Fehler' : '❌ That\'s not the mistake')
                }
              </p>
              <p className="text-sm text-stone-700 dark:text-stone-300 mt-2">
                <strong>{language === 'de' ? 'Fehler' : 'Mistake'}:</strong> {words[exercise.mistakeIndex]}
              </p>
              <p className="text-sm text-stone-700 dark:text-stone-300">
                <strong>{language === 'de' ? 'Richtig' : 'Correct'}:</strong> {exercise.correction}
              </p>
              <p className="text-sm text-stone-700 dark:text-stone-300 mt-2">
                💡 {exercise.explanation}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default FixTheMistake;

