import React, { useState, useEffect, useRef } from 'react';
import { Play, Pause, RotateCcw, Check, Timer, Save, ChevronLeft } from 'lucide-react';

function WarmupTimer({ exercises, title, onBack, onSave }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [timeLeft, setTimeLeft] = useState(exercises[0]?.duration || 30);
  const [isRunning, setIsRunning] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    // Reset timer when exercise changes
    setTimeLeft(exercises[currentIndex]?.duration || 30);
  }, [currentIndex, exercises]);

  useEffect(() => {
    let interval = null;
    if (isRunning && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft(time => {
          if (time <= 1) {
            // Exercise complete - play sound
            if (audioRef.current) {
              audioRef.current.play().catch(() => {});
            }
            
            // Move to next exercise or complete
            if (currentIndex < exercises.length - 1) {
              setCurrentIndex(currentIndex + 1);
              return exercises[currentIndex + 1].duration;
            } else {
              setIsRunning(false);
              setIsComplete(true);
              return 0;
            }
          }
          return time - 1;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isRunning, timeLeft, currentIndex, exercises]);

  const toggleTimer = () => {
    setIsRunning(!isRunning);
  };

  const resetTimer = () => {
    setCurrentIndex(0);
    setTimeLeft(exercises[0]?.duration || 30);
    setIsRunning(false);
    setIsComplete(false);
  };

  const skipToNext = () => {
    if (currentIndex < exercises.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setTimeLeft(exercises[currentIndex + 1].duration);
    }
  };

  const skipToPrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setTimeLeft(exercises[currentIndex - 1].duration);
    }
  };

  const currentExercise = exercises[currentIndex];
  const progress = ((currentIndex + (1 - timeLeft / currentExercise.duration)) / exercises.length) * 100;

  if (isComplete) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-md p-8 text-center">
          <div className="mb-6">
            <Check size={64} className="mx-auto text-teal-500" />
          </div>
          <h2 className="text-2xl font-bold text-stone-800 mb-4">
            🎉 Aufwärmen abgeschlossen!
          </h2>
          <p className="text-stone-600 mb-6">
            Du bist jetzt bereit zum Bouldern. Viel Erfolg!
          </p>
          <div className="flex gap-3 justify-center">
            <button
              onClick={resetTimer}
              className="bg-stone-200 hover:bg-stone-300 text-stone-800 font-semibold py-3 px-6 rounded-lg transition-colors flex items-center gap-2"
            >
              <RotateCcw size={20} />
              Nochmal
            </button>
            <button
              onClick={onBack}
              className="bg-teal-500 hover:bg-teal-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
            >
              Fertig
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      {/* Back Button */}
      <button
        onClick={onBack}
        className="flex items-center gap-2 text-teal-500 hover:text-teal-600 mb-6"
      >
        <ChevronLeft size={20} />
        <span>Zurück</span>
      </button>

      {/* Timer Header */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <h1 className="text-2xl font-bold text-stone-800 mb-2 flex items-center gap-2">
          <Timer className="text-teal-500" />
          {title}
        </h1>
        <p className="text-stone-600 text-sm">
          Übung {currentIndex + 1} von {exercises.length}
        </p>

        {/* Progress Bar */}
        <div className="mt-4">
          <div className="w-full bg-stone-200 rounded-full h-2">
            <div
              className="bg-teal-500 h-2 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>

      {/* Current Exercise */}
      <div className="bg-gradient-to-br from-teal-50 to-orange-50 rounded-lg shadow-md p-8 mb-6 border-2 border-teal-500">
        {/* Timer Display */}
        <div className="text-center mb-6">
          <div className="text-7xl font-bold text-teal-600 mb-2">
            {timeLeft}
          </div>
          <div className="text-stone-600">Sekunden</div>
        </div>

        {/* Exercise Info */}
        <div className="bg-white rounded-lg p-6 mb-6">
          <h2 className="text-2xl font-bold text-stone-800 mb-3">
            {currentExercise.name}
          </h2>
          <p className="text-stone-700 leading-relaxed">
            {currentExercise.description}
          </p>
        </div>

        {/* Controls */}
        <div className="flex gap-3 justify-center mb-4">
          <button
            onClick={skipToPrevious}
            disabled={currentIndex === 0}
            className="bg-stone-300 hover:bg-stone-400 disabled:bg-stone-200 disabled:text-stone-400 text-stone-800 font-semibold py-3 px-6 rounded-lg transition-colors"
          >
            ← Zurück
          </button>
          
          <button
            onClick={toggleTimer}
            className="bg-teal-500 hover:bg-teal-600 text-white font-bold py-3 px-8 rounded-lg shadow-md transition-all transform hover:scale-105 flex items-center gap-2"
          >
            {isRunning ? (
              <>
                <Pause size={24} />
                Pause
              </>
            ) : (
              <>
                <Play size={24} />
                Start
              </>
            )}
          </button>

          <button
            onClick={skipToNext}
            disabled={currentIndex === exercises.length - 1}
            className="bg-stone-300 hover:bg-stone-400 disabled:bg-stone-200 disabled:text-stone-400 text-stone-800 font-semibold py-3 px-6 rounded-lg transition-colors"
          >
            Weiter →
          </button>
        </div>

        <div className="flex gap-3 justify-center">
          <button
            onClick={resetTimer}
            className="text-stone-600 hover:text-stone-800 font-semibold py-2 px-4 rounded-lg transition-colors flex items-center gap-2"
          >
            <RotateCcw size={18} />
            Neustart
          </button>
        </div>
      </div>

      {/* Exercise List */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="font-bold text-stone-800 mb-4">Alle Übungen:</h3>
        <div className="space-y-2">
          {exercises.map((exercise, idx) => (
            <div
              key={exercise.id}
              className={`p-3 rounded-lg flex items-center gap-3 ${
                idx === currentIndex
                  ? 'bg-teal-100 border-2 border-teal-500'
                  : idx < currentIndex
                  ? 'bg-stone-100 opacity-60'
                  : 'bg-stone-50'
              }`}
            >
              <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                idx < currentIndex
                  ? 'bg-teal-500 text-white'
                  : idx === currentIndex
                  ? 'bg-orange-500 text-white'
                  : 'bg-stone-300 text-stone-600'
              }`}>
                {idx < currentIndex ? '✓' : idx + 1}
              </div>
              <div className="flex-1">
                <div className="font-semibold text-stone-800">{exercise.name}</div>
                <div className="text-xs text-stone-600">{exercise.duration} Sekunden</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Audio element for timer sound */}
      <audio ref={audioRef} src="data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBzWO0/HDeCgFIXPD795+OgwWZ7fs3JJGDClKm93nv2IfCDGJ0O+/eCkGInC/7dh5PgsUYbXm4qVYEwxCmtvptmMcBjON0fC/eCkGInC/7dh5Pw" />
    </div>
  );
}

export default WarmupTimer;

