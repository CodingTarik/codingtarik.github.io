import React, { useState, useEffect } from 'react';
import { exercises } from '../data/exercises';
import { logSession } from '../utils/storage';
import { Timer, CheckCircle2, XCircle, Dumbbell, MoreHorizontal, Save } from 'lucide-react';
import { RestTimer, OneRepMaxCalc } from './GymTools';

const ActiveSession = ({ workout, onFinish }) => {
  const [logs, setLogs] = useState({});
  const [startTime] = useState(Date.now());
  const [timer, setTimer] = useState(0);
  const [activeRestTimer, setActiveRestTimer] = useState(false);
  const [showCalc, setShowCalc] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer(Math.floor((Date.now() - startTime) / 1000));
    }, 1000);
    return () => clearInterval(interval);
  }, [startTime]);

  const formatTime = (seconds) => {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    return `${h > 0 ? h + ':' : ''}${m < 10 ? '0' : ''}${m}:${s < 10 ? '0' : ''}${s}`;
  };

  const getExerciseName = (id) => exercises.find(e => e.id === id)?.name || id;

  const updateLog = (exIdx, setIdx, field, value) => {
    const newLogs = { ...logs };
    if (!newLogs[exIdx]) newLogs[exIdx] = [];
    if (!newLogs[exIdx][setIdx]) newLogs[exIdx][setIdx] = { weight: '', reps: '', completed: false };
    
    newLogs[exIdx][setIdx][field] = value;
    setLogs(newLogs);
  };

  const toggleComplete = (exIdx, setIdx) => {
    const newLogs = { ...logs };
    if (!newLogs[exIdx]) newLogs[exIdx] = [];
    if (!newLogs[exIdx][setIdx]) newLogs[exIdx][setIdx] = { weight: '', reps: '', completed: false };
    
    const isNowComplete = !newLogs[exIdx][setIdx].completed;
    newLogs[exIdx][setIdx].completed = isNowComplete;
    setLogs(newLogs);

    // Auto-start rest timer if set is completed
    if (isNowComplete) {
      setActiveRestTimer(true);
    }
  };

  const finishWorkout = () => {
    const duration = Math.floor((Date.now() - startTime) / 1000);
    
    const sessionExercises = workout.exercises.map((ex, idx) => {
      const setLogs = logs[idx] || [];
      const validSets = setLogs.filter(s => s && s.completed).map(s => ({
        weight: parseFloat(s.weight),
        reps: parseInt(s.reps)
      }));
      
      return {
        exerciseId: ex.exerciseId,
        sets: validSets
      };
    });

    const session = {
      workoutId: workout.id,
      workoutName: workout.name,
      duration,
      exercises: sessionExercises
    };

    logSession(session);
    onFinish();
  };

  return (
    <div className="relative pb-20">
      {/* Top Bar */}
      <div className="sticky top-0 bg-white/95 dark:bg-stone-900/95 backdrop-blur p-4 shadow-sm z-20 flex justify-between items-center border-b border-stone-200 dark:border-stone-800">
        <div>
          <div className="text-xs text-stone-500 font-medium uppercase tracking-wider">Dauer</div>
          <div className="font-mono text-xl font-bold text-stone-800 dark:text-stone-100">{formatTime(timer)}</div>
        </div>
        <div className="flex gap-3">
          <button 
            onClick={() => setShowCalc(true)}
            className="p-2 bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-300 rounded-lg hover:bg-stone-200"
          >
            <Dumbbell size={20} />
          </button>
          <button 
            onClick={finishWorkout}
            className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg font-bold shadow-md flex items-center gap-2"
          >
            <Save size={18} />
            <span>Beenden</span>
          </button>
        </div>
      </div>

      {/* Rest Timer Overlay */}
      {activeRestTimer && (
        <div className="fixed bottom-24 right-4 z-30 animate-slide-up">
          <RestTimer onComplete={() => setActiveRestTimer(false)} />
          <button 
            onClick={() => setActiveRestTimer(false)}
            className="absolute -top-2 -right-2 bg-stone-500 text-white rounded-full p-1 text-xs"
          >
            ✕
          </button>
        </div>
      )}

      {/* 1RM Calc Modal */}
      {showCalc && <OneRepMaxCalc onClose={() => setShowCalc(false)} />}

      {/* Exercises List */}
      <div className="space-y-6 p-4 max-w-3xl mx-auto">
        {workout.exercises.map((ex, exIdx) => (
          <div key={exIdx} className="bg-white dark:bg-stone-800 rounded-2xl shadow-lg overflow-hidden border border-stone-100 dark:border-stone-700">
            <div className="bg-stone-50 dark:bg-stone-900/50 p-4 border-b border-stone-100 dark:border-stone-700 flex justify-between items-center">
              <h3 className="font-bold text-lg text-stone-800 dark:text-stone-100 flex items-center gap-2">
                <span className="bg-blue-500 text-white w-6 h-6 rounded-full flex items-center justify-center text-xs">{exIdx + 1}</span>
                {getExerciseName(ex.exerciseId)}
              </h3>
              <button className="text-stone-400 hover:text-stone-600">
                <MoreHorizontal size={20} />
              </button>
            </div>
            
            <div className="p-4">
              <div className="grid grid-cols-10 gap-2 text-xs font-medium text-stone-400 mb-3 px-2 uppercase tracking-wider text-center">
                <span className="col-span-1">Set</span>
                <span className="col-span-3">kg</span>
                <span className="col-span-3">Reps</span>
                <span className="col-span-3">Done</span>
              </div>
              
              <div className="space-y-3">
                {Array.from({ length: ex.sets }).map((_, setIdx) => {
                  const setLog = logs[exIdx]?.[setIdx] || {};
                  const isCompleted = setLog.completed;
                  
                  return (
                    <div 
                      key={setIdx} 
                      className={`grid grid-cols-10 gap-2 items-center p-2 rounded-xl transition-all ${
                        isCompleted 
                          ? 'bg-green-50 dark:bg-green-900/10 border border-green-200 dark:border-green-900/30' 
                          : 'bg-stone-50 dark:bg-stone-900/30 border border-transparent'
                      }`}
                    >
                      <span className="col-span-1 font-bold text-stone-500 text-center">{setIdx + 1}</span>
                      
                      <div className="col-span-3 relative">
                        <input
                          type="number"
                          placeholder={ex.targetWeight || '-'}
                          value={setLog.weight || ''}
                          onChange={(e) => updateLog(exIdx, setIdx, 'weight', e.target.value)}
                          className="w-full p-2 text-center rounded-lg bg-white dark:bg-stone-800 border border-stone-200 dark:border-stone-700 focus:ring-2 focus:ring-blue-500 outline-none font-mono"
                        />
                      </div>
                      
                      <div className="col-span-3 relative">
                        <input
                          type="number"
                          placeholder={ex.reps || '-'}
                          value={setLog.reps || ''}
                          onChange={(e) => updateLog(exIdx, setIdx, 'reps', e.target.value)}
                          className="w-full p-2 text-center rounded-lg bg-white dark:bg-stone-800 border border-stone-200 dark:border-stone-700 focus:ring-2 focus:ring-blue-500 outline-none font-mono"
                        />
                      </div>
                      
                      <div className="col-span-3 flex justify-center">
                        <button
                          onClick={() => toggleComplete(exIdx, setIdx)}
                          className={`h-10 w-full rounded-lg flex items-center justify-center transition-all shadow-sm active:scale-95 ${
                            isCompleted 
                              ? 'bg-green-500 text-white hover:bg-green-600' 
                              : 'bg-stone-200 dark:bg-stone-700 text-stone-400 hover:bg-stone-300 dark:hover:bg-stone-600'
                          }`}
                        >
                          {isCompleted ? <CheckCircle2 size={20} /> : <span className="text-xs font-bold">LOG</span>}
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActiveSession;
