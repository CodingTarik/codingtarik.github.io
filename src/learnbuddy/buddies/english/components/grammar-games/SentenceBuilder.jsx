import React, { useState, useEffect } from 'react';
import { Check, X, RefreshCw, Sparkles } from 'lucide-react';

function SentenceBuilder({ exercises, language = 'en' }) {
  const [currentExercise, setCurrentExercise] = useState(0);
  const [selectedWords, setSelectedWords] = useState([]);
  const [availableWords, setAvailableWords] = useState([]);
  const [isCorrect, setIsCorrect] = useState(null);
  const [score, setScore] = useState(0);

  const exercise = exercises[currentExercise];

  useEffect(() => {
    // Shuffle words when exercise changes
    const shuffled = [...exercise.words].sort(() => Math.random() - 0.5);
    setAvailableWords(shuffled);
    setSelectedWords([]);
    setIsCorrect(null);
  }, [currentExercise, exercise.words]);

  const handleWordClick = (word, fromAvailable) => {
    if (isCorrect !== null) return; // Don't allow changes after checking

    if (fromAvailable) {
      setSelectedWords([...selectedWords, word]);
      setAvailableWords(availableWords.filter(w => w !== word));
    } else {
      setAvailableWords([...availableWords, word]);
      setSelectedWords(selectedWords.filter(w => w !== word));
    }
  };

  const checkAnswer = () => {
    const userSentence = selectedWords.join(' ');
    const correct = userSentence === exercise.correct;
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
  };

  const reset = () => {
    const shuffled = [...exercise.words].sort(() => Math.random() - 0.5);
    setAvailableWords(shuffled);
    setSelectedWords([]);
    setIsCorrect(null);
  };

  return (
    <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-xl p-6 border-2 border-purple-300 dark:border-purple-700 my-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-bold text-purple-800 dark:text-purple-200 flex items-center gap-2">
          <Sparkles className="text-purple-500" />
          {language === 'de' ? 'Satz-Baumeister' : 'Sentence Builder'}
        </h3>
        <div className="text-sm font-bold text-purple-700 dark:text-purple-300">
          {language === 'de' ? 'Punkte' : 'Score'}: {score}/{exercises.length}
        </div>
      </div>

      <p className="text-stone-700 dark:text-stone-300 mb-4">
        {exercise.prompt}
      </p>

      {/* Selected Words Area */}
      <div className="bg-white dark:bg-stone-800 rounded-lg p-4 min-h-[80px] mb-4 border-2 border-dashed border-purple-300 dark:border-purple-600">
        <div className="flex flex-wrap gap-2">
          {selectedWords.length === 0 ? (
            <span className="text-stone-400 dark:text-stone-500 italic">
              {language === 'de' ? 'Wähle Wörter aus...' : 'Select words...'}
            </span>
          ) : (
            selectedWords.map((word, idx) => (
              <button
                key={idx}
                onClick={() => handleWordClick(word, false)}
                disabled={isCorrect !== null}
                className="px-4 py-2 bg-purple-500 text-white rounded-lg font-semibold hover:bg-purple-600 transition-all transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {word}
              </button>
            ))
          )}
        </div>
      </div>

      {/* Available Words */}
      <div className="flex flex-wrap gap-2 mb-4">
        {availableWords.map((word, idx) => (
          <button
            key={idx}
            onClick={() => handleWordClick(word, true)}
            disabled={isCorrect !== null}
            className="px-4 py-2 bg-stone-200 dark:bg-stone-700 text-stone-800 dark:text-stone-200 rounded-lg font-semibold hover:bg-stone-300 dark:hover:bg-stone-600 transition-all transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {word}
          </button>
        ))}
      </div>

      {/* Action Buttons */}
      <div className="flex gap-2">
        {isCorrect === null ? (
          <>
            <button
              onClick={checkAnswer}
              disabled={selectedWords.length === 0}
              className="flex-1 bg-purple-500 hover:bg-purple-600 text-white font-bold py-3 rounded-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              <Check size={20} />
              {language === 'de' ? 'Prüfen' : 'Check'}
            </button>
            <button
              onClick={reset}
              className="bg-stone-300 dark:bg-stone-700 hover:bg-stone-400 dark:hover:bg-stone-600 text-stone-800 dark:text-stone-200 font-bold py-3 px-4 rounded-lg transition-all"
            >
              <RefreshCw size={20} />
            </button>
          </>
        ) : (
          <button
            onClick={nextExercise}
            className="flex-1 bg-teal-500 hover:bg-teal-600 text-white font-bold py-3 rounded-lg transition-all flex items-center justify-center gap-2"
          >
            {currentExercise < exercises.length - 1 
              ? (language === 'de' ? 'Nächste Übung' : 'Next Exercise')
              : (language === 'de' ? 'Neu starten' : 'Restart')
            }
          </button>
        )}
      </div>

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
                  ? (language === 'de' ? '🎉 Perfekt!' : '🎉 Perfect!') 
                  : (language === 'de' ? '❌ Nicht ganz richtig' : '❌ Not quite right')
                }
              </p>
              {!isCorrect && (
                <p className="text-sm text-red-700 dark:text-red-300 mt-1">
                  {language === 'de' ? 'Richtig wäre' : 'Correct answer'}: <strong>{exercise.correct}</strong>
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

export default SentenceBuilder;

