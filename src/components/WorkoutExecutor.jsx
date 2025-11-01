import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, Play, Pause, SkipForward, Check, X, Edit, TrendingUp } from 'lucide-react';
import { saveExerciseHistory, getLastExerciseData, saveWorkoutSession } from '../utils/workoutStorage';

function WorkoutExecutor({ workout, onBack, onComplete }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [time, setTime] = useState(0);
  const [completedExercises, setCompletedExercises] = useState([]);
  const [showManualInput, setShowManualInput] = useState(false);
  const [manualValue, setManualValue] = useState('');
  const [manualWeight, setManualWeight] = useState('');
  const audioRef = useRef(null);

  const currentEx = workout.exercises[currentIndex];
  const isLastExercise = currentIndex === workout.exercises.length - 1;

  // Get last performance for challenge mode
  const lastPerformance = currentEx ? getLastExerciseData(currentEx.exerciseId || currentEx.name) : null;

  // Initialize timer based on exercise type
  useEffect(() => {
    if (currentEx) {
      if (currentEx.type === 'timer') {
        if (currentEx.timerMode === 'challenge') {
          setTime(0); // Count up
        } else {
          setTime(currentEx.duration); // Count down
        }
      } else {
        setTime(0);
      }
      setIsRunning(false);
    }
  }, [currentIndex, currentEx]);

  // Timer logic
  useEffect(() => {
    let interval = null;
    
    if (isRunning && currentEx) {
      interval = setInterval(() => {
        if (currentEx.type === 'timer') {
          if (currentEx.timerMode === 'challenge') {
            // Count up
            setTime(t => t + 1);
          } else {
            // Count down
            setTime(t => {
              if (t <= 1) {
                playSound();
                handleExerciseComplete();
                return 0;
              }
              return t - 1;
            });
          }
        }
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isRunning, currentEx]);

  const playSound = () => {
    if (audioRef.current) {
      audioRef.current.play().catch(() => {});
    }
  };

  const handleExerciseComplete = (value = null, weight = null) => {
    setIsRunning(false);

    const result = {
      exerciseId: currentEx.exerciseId || currentEx.name,
      name: currentEx.name,
      type: currentEx.type,
      ...(currentEx.type === 'timer' && { duration: value !== null ? value : time }),
      ...(currentEx.type === 'reps' && { reps: value !== null ? value : currentEx.reps }),
      ...(currentEx.hasWeight && { weight: weight !== null ? weight : currentEx.weight, weightUnit: currentEx.weightUnit })
    };

    // Save to history
    saveExerciseHistory(result.exerciseId, result);

    // Add to completed list
    setCompletedExercises([...completedExercises, result]);

    // Move to next or finish
    if (isLastExercise) {
      handleWorkoutComplete([...completedExercises, result]);
    } else {
      playSound();
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handleWorkoutComplete = (exercises) => {
    // Save workout session
    saveWorkoutSession(workout.id, workout.name, exercises);
    onComplete();
  };

  const handleSkip = () => {
    if (window.confirm('Übung überspringen?')) {
      if (isLastExercise) {
        handleWorkoutComplete(completedExercises);
      } else {
        setCurrentIndex(currentIndex + 1);
      }
    }
  };

  const handleManualComplete = () => {
    const value = currentEx.type === 'timer' 
      ? parseInt(manualValue) || time
      : parseInt(manualValue) || currentEx.reps;
    
    const weight = currentEx.hasWeight ? parseFloat(manualWeight) || currentEx.weight : null;
    
    handleExerciseComplete(value, weight);
    setShowManualInput(false);
    setManualValue('');
    setManualWeight('');
  };

  const toggleTimer = () => {
    setIsRunning(!isRunning);
  };

  const handleRepsComplete = () => {
    if (currentEx.type === 'reps') {
      playSound();
      
      // For challenge mode, show manual input
      if (lastPerformance) {
        setShowManualInput(true);
        setManualValue(currentEx.reps.toString());
        if (currentEx.hasWeight) {
          setManualWeight((currentEx.weight || 0).toString());
        }
      } else {
        handleExerciseComplete();
      }
    }
  };

  const handleChallengeStop = () => {
    setIsRunning(false);
    setShowManualInput(true);
    setManualValue(time.toString());
  };

  if (!currentEx) {
    return null;
  }

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-teal-500 hover:text-teal-600"
        >
          <ChevronLeft size={20} />
          <span>Abbrechen</span>
        </button>
        <div className="text-sm text-stone-600">
          Übung {currentIndex + 1} / {workout.exercises.length}
        </div>
      </div>

      {/* Workout Title */}
      <div className="bg-white rounded-lg shadow-md p-4 mb-6">
        <h2 className="text-xl font-bold text-stone-800">{workout.name}</h2>
      </div>

      {/* Progress Bar */}
      <div className="mb-6">
        <div className="w-full bg-stone-200 rounded-full h-3">
          <div
            className="bg-gradient-to-r from-teal-500 to-orange-500 h-3 rounded-full transition-all duration-300"
            style={{ width: `${((currentIndex + 1) / workout.exercises.length) * 100}%` }}
          />
        </div>
      </div>

      {/* Current Exercise Card */}
      <div className="bg-gradient-to-br from-teal-50 to-orange-50 rounded-lg shadow-lg p-8 mb-6 border-2 border-teal-500">
        {/* Exercise SVG */}
        {currentEx.svg && (
          <div className="flex justify-center mb-6">
            <div
              className="w-32 h-32"
              dangerouslySetInnerHTML={{ __html: currentEx.svg }}
            />
          </div>
        )}

        {/* Exercise Name & Category */}
        <div className="text-center mb-6">
          <div className="text-sm text-teal-600 font-semibold mb-2 uppercase tracking-wide">
            {currentEx.category}
          </div>
          <h3 className="text-3xl font-bold text-stone-800 mb-2">
            {currentEx.name}
          </h3>
          
          {/* Last Performance */}
          {lastPerformance && (
            <div className="inline-flex items-center gap-2 bg-white rounded-lg px-4 py-2 shadow-sm">
              <TrendingUp size={16} className="text-orange-500" />
              <span className="text-sm text-stone-700">
                Letztes Mal: 
                {lastPerformance.duration && ` ${lastPerformance.duration}s`}
                {lastPerformance.reps && ` ${lastPerformance.reps}x`}
                {lastPerformance.weight && ` @ ${lastPerformance.weight}${lastPerformance.weightUnit}`}
              </span>
            </div>
          )}
        </div>

        {/* Timer Display */}
        {currentEx.type === 'timer' && (
          <div className="bg-white rounded-lg p-8 mb-6 shadow-inner">
            <div className="text-center">
              <div className="text-7xl font-bold text-teal-600 mb-2">
                {Math.floor(time / 60).toString().padStart(2, '0')}:{(time % 60).toString().padStart(2, '0')}
              </div>
              <div className="text-stone-600">
                {currentEx.timerMode === 'challenge' ? 'Laufzeit' : 'Verbleibend'}
              </div>
            </div>
          </div>
        )}

        {/* Reps Display */}
        {currentEx.type === 'reps' && (
          <div className="bg-white rounded-lg p-8 mb-6 shadow-inner">
            <div className="text-center">
              <div className="text-7xl font-bold text-orange-600 mb-2">
                {currentEx.reps}
              </div>
              <div className="text-stone-600">
                Wiederholungen
                {currentEx.hasWeight && currentEx.weight > 0 && (
                  <span className="block mt-2 text-sm">
                    @ {currentEx.weight} {currentEx.weightUnit}
                  </span>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Controls */}
        <div className="flex flex-col gap-3">
          {currentEx.type === 'timer' && (
            <>
              <div className="flex gap-3">
                <button
                  onClick={toggleTimer}
                  className="flex-1 bg-teal-500 hover:bg-teal-600 text-white font-bold py-4 px-6 rounded-lg shadow-md transition-all transform hover:scale-[1.02] flex items-center justify-center gap-2"
                >
                  {isRunning ? <Pause size={24} /> : <Play size={24} />}
                  {isRunning ? 'Pause' : 'Start'}
                </button>

                {currentEx.timerMode === 'challenge' && isRunning && (
                  <button
                    onClick={handleChallengeStop}
                    className="flex-1 bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-6 rounded-lg shadow-md transition-all transform hover:scale-[1.02] flex items-center justify-center gap-2"
                  >
                    <Check size={24} />
                    Stop & Speichern
                  </button>
                )}
              </div>

              {currentEx.timerMode === 'countdown' && !isRunning && time === 0 && (
                <button
                  onClick={() => setCurrentIndex(currentIndex + 1)}
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-6 rounded-lg shadow-md transition-all flex items-center justify-center gap-2"
                >
                  <Check size={24} />
                  Weiter zur nächsten Übung
                </button>
              )}
            </>
          )}

          {currentEx.type === 'reps' && (
            <button
              onClick={handleRepsComplete}
              className="w-full bg-teal-500 hover:bg-teal-600 text-white font-bold py-4 px-6 rounded-lg shadow-md transition-all transform hover:scale-[1.02] flex items-center justify-center gap-2"
            >
              <Check size={24} />
              Fertig
            </button>
          )}

          <button
            onClick={handleSkip}
            className="w-full bg-stone-300 hover:bg-stone-400 text-stone-800 font-semibold py-3 px-6 rounded-lg transition-colors flex items-center justify-center gap-2"
          >
            <SkipForward size={20} />
            Überspringen
          </button>
        </div>
      </div>

      {/* Next Exercise Preview */}
      {!isLastExercise && (
        <div className="bg-white rounded-lg shadow-md p-4">
          <div className="text-xs text-stone-500 mb-2 uppercase tracking-wide">
            Als nächstes:
          </div>
          <div className="text-sm font-semibold text-stone-700">
            {workout.exercises[currentIndex + 1].name}
          </div>
        </div>
      )}

      {/* Manual Input Modal */}
      {showManualInput && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl max-w-md w-full p-6">
            <h3 className="text-xl font-bold text-stone-800 mb-4">
              Wert bestätigen/anpassen
            </h3>

            {lastPerformance && (
              <div className="bg-orange-50 border-l-4 border-orange-500 p-4 mb-4 rounded">
                <div className="text-sm font-semibold text-orange-800 mb-1">
                  🎯 Challenge!
                </div>
                <div className="text-sm text-stone-700">
                  Letztes Mal: 
                  {lastPerformance.duration && ` ${lastPerformance.duration}s`}
                  {lastPerformance.reps && ` ${lastPerformance.reps}x`}
                  {lastPerformance.weight && ` @ ${lastPerformance.weight}${lastPerformance.weightUnit}`}
                </div>
              </div>
            )}

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-stone-700 mb-2">
                  {currentEx.type === 'timer' ? 'Zeit (Sekunden)' : 'Wiederholungen'}
                </label>
                <input
                  type="number"
                  value={manualValue}
                  onChange={(e) => setManualValue(e.target.value)}
                  className="w-full px-4 py-2 border-2 border-stone-200 rounded-lg focus:border-teal-500 focus:outline-none"
                  autoFocus
                />
              </div>

              {currentEx.hasWeight && (
                <div>
                  <label className="block text-sm font-semibold text-stone-700 mb-2">
                    Gewicht ({currentEx.weightUnit})
                  </label>
                  <input
                    type="number"
                    step="0.5"
                    value={manualWeight}
                    onChange={(e) => setManualWeight(e.target.value)}
                    className="w-full px-4 py-2 border-2 border-stone-200 rounded-lg focus:border-teal-500 focus:outline-none"
                  />
                </div>
              )}
            </div>

            <div className="flex gap-3 mt-6">
              <button
                onClick={() => setShowManualInput(false)}
                className="flex-1 bg-stone-200 hover:bg-stone-300 text-stone-800 font-semibold py-3 px-6 rounded-lg transition-colors flex items-center justify-center gap-2"
              >
                <X size={20} />
                Abbrechen
              </button>
              <button
                onClick={handleManualComplete}
                className="flex-1 bg-teal-500 hover:bg-teal-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors flex items-center justify-center gap-2"
              >
                <Check size={20} />
                Bestätigen
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Audio element for completion sound */}
      <audio ref={audioRef}>
        <source src="data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBzWO0/HDeCgFIXPD795+OgwWZ7fs3JJGDClKm93nv2IfCDGJ0O+/eCkGInC/7dh5PgsUYbXm4qVYEwxCmtvptmMcBjON0fC/eCkGInC/7dh5Pw" type="audio/wav"/>
      </audio>
    </div>
  );
}

export default WorkoutExecutor;

