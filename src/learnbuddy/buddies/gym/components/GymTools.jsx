import React, { useState, useEffect } from 'react';
import { Timer, RotateCcw, Play, Pause, Calculator } from 'lucide-react';
import { playTimerSound } from '../../../utils/sounds';

const RestTimer = ({ defaultDuration = 90, onComplete }) => {
  const [timeLeft, setTimeLeft] = useState(defaultDuration);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval = null;
    if (isActive && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft(prev => prev - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      setIsActive(false);
      if (onComplete) onComplete();
      // Optional: Play sound
    }
    return () => clearInterval(interval);
  }, [isActive, timeLeft, onComplete]);

  const toggleTimer = () => setIsActive(!isActive);
  const resetTimer = () => {
    setIsActive(false);
    setTimeLeft(defaultDuration);
  };

  const formatTime = (seconds) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  return (
    <div className="bg-stone-900 text-white p-4 rounded-xl shadow-lg flex items-center justify-between gap-4 border border-stone-700">
      <div className="flex items-center gap-3">
        <Timer className="text-orange-500" />
        <div>
          <div className="text-xs text-stone-400">Satzpause</div>
          <div className="text-2xl font-mono font-bold text-orange-500">{formatTime(timeLeft)}</div>
        </div>
      </div>
      <div className="flex gap-2">
        <button onClick={toggleTimer} className="p-2 bg-stone-800 rounded-full hover:bg-stone-700 transition-colors">
          {isActive ? <Pause size={20} /> : <Play size={20} />}
        </button>
        <button onClick={resetTimer} className="p-2 bg-stone-800 rounded-full hover:bg-stone-700 transition-colors">
          <RotateCcw size={20} />
        </button>
      </div>
    </div>
  );
};

const OneRepMaxCalc = ({ onClose }) => {
  const [weight, setWeight] = useState('');
  const [reps, setReps] = useState('');
  const [orm, setOrm] = useState(null);

  const calculate = () => {
    const w = parseFloat(weight);
    const r = parseInt(reps);
    if (w && r) {
      // Epley formula
      const result = w * (1 + r / 30);
      setOrm(Math.round(result));
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white dark:bg-stone-800 p-6 rounded-2xl max-w-sm w-full shadow-2xl animate-fade-in">
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-bold text-lg">1RM Rechner</h3>
          <button onClick={onClose} className="text-stone-400 hover:text-stone-600">✕</button>
        </div>
        <div className="space-y-4">
          <div>
            <label className="block text-xs font-medium text-stone-500 mb-1">Gewicht (kg)</label>
            <input 
              type="number" 
              value={weight} 
              onChange={e => setWeight(e.target.value)}
              className="w-full p-2 rounded-lg border dark:bg-stone-700 dark:border-stone-600"
              autoFocus
            />
          </div>
          <div>
            <label className="block text-xs font-medium text-stone-500 mb-1">Wiederholungen</label>
            <input 
              type="number" 
              value={reps} 
              onChange={e => setReps(e.target.value)}
              className="w-full p-2 rounded-lg border dark:bg-stone-700 dark:border-stone-600"
            />
          </div>
          <button 
            onClick={calculate}
            className="w-full py-3 bg-gradient-to-r from-red-500 to-orange-500 text-white rounded-xl font-bold shadow-lg"
          >
            Berechnen
          </button>
          {orm && (
            <div className="text-center p-4 bg-stone-100 dark:bg-stone-900 rounded-xl">
              <div className="text-sm text-stone-500">Geschätztes 1RM</div>
              <div className="text-3xl font-bold text-stone-800 dark:text-white">{orm} kg</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export { RestTimer, OneRepMaxCalc };

