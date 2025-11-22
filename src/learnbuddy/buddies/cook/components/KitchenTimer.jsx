import React, { useState, useEffect } from 'react';
import { Timer, Play, Pause, RotateCcw, Plus, Bell } from 'lucide-react';
import toast from 'react-hot-toast';

const PRESET_TIMERS = [
  { name: 'Eier kochen (weich)', time: 6 * 60, icon: '🥚' },
  { name: 'Eier kochen (hart)', time: 10 * 60, icon: '🥚' },
  { name: 'Pasta al dente', time: 8 * 60, icon: '🍝' },
  { name: 'Reis köcheln', time: 15 * 60, icon: '🍚' },
  { name: 'Steak (Medium)', time: 4 * 60, icon: '🥩' },
  { name: 'Pizza backen', time: 12 * 60, icon: '🍕' }
];

const KitchenTimer = () => {
  const [timers, setTimers] = useState(() => {
    const saved = localStorage.getItem('cookbuddy_timers');
    return saved ? JSON.parse(saved) : [];
  });
  const [showAddModal, setShowAddModal] = useState(false);
  const [newTimer, setNewTimer] = useState({ name: '', minutes: 0, seconds: 0 });

  useEffect(() => {
    localStorage.setItem('cookbuddy_timers', JSON.stringify(timers));
  }, [timers]);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimers(prevTimers => 
        prevTimers.map(timer => {
          if (!timer.isRunning || timer.remaining <= 0) return timer;
          
          const newRemaining = timer.remaining - 1;
          
          if (newRemaining === 0) {
            // Timer finished
            playSound();
            toast.success(`⏰ Timer "${timer.name}" ist abgelaufen!`, {
              duration: 5000,
              icon: '🔔'
            });
            return { ...timer, remaining: 0, isRunning: false };
          }
          
          return { ...timer, remaining: newRemaining };
        })
      );
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const playSound = () => {
    // Simple beep sound
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    oscillator.frequency.value = 800;
    oscillator.type = 'sine';
    
    gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.5);
    
    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + 0.5);
  };

  const addTimer = (name, totalSeconds) => {
    const newTimer = {
      id: Date.now(),
      name,
      total: totalSeconds,
      remaining: totalSeconds,
      isRunning: false
    };
    setTimers([...timers, newTimer]);
    toast.success(`Timer "${name}" hinzugefügt`);
  };

  const addCustomTimer = () => {
    const totalSeconds = (parseInt(newTimer.minutes) || 0) * 60 + (parseInt(newTimer.seconds) || 0);
    if (totalSeconds === 0 || !newTimer.name.trim()) {
      toast.error('Bitte Namen und Zeit eingeben');
      return;
    }
    addTimer(newTimer.name, totalSeconds);
    setNewTimer({ name: '', minutes: 0, seconds: 0 });
    setShowAddModal(false);
  };

  const toggleTimer = (id) => {
    setTimers(timers.map(t => 
      t.id === id ? { ...t, isRunning: !t.isRunning } : t
    ));
  };

  const resetTimer = (id) => {
    setTimers(timers.map(t => 
      t.id === id ? { ...t, remaining: t.total, isRunning: false } : t
    ));
  };

  const deleteTimer = (id) => {
    setTimers(timers.filter(t => t.id !== id));
    toast.success('Timer gelöscht');
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const getProgress = (timer) => {
    return ((timer.total - timer.remaining) / timer.total) * 100;
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <Timer className="w-8 h-8 text-amber-500" />
            <div>
              <h2 className="text-2xl font-bold">Küchen-Timer</h2>
              <p className="text-sm text-gray-600 dark:text-gray-400">Behalte mehrere Gerichte im Blick</p>
            </div>
          </div>
          <button
            onClick={() => setShowAddModal(true)}
            className="bg-amber-500 hover:bg-amber-600 text-white px-4 py-2 rounded-lg font-medium flex items-center gap-2"
          >
            <Plus className="w-5 h-5" />
            Timer
          </button>
        </div>

        {/* Preset Timers */}
        {timers.length === 0 && (
          <div className="mb-8">
            <h3 className="font-semibold mb-3">Schnellstart</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {PRESET_TIMERS.map((preset, idx) => (
                <button
                  key={idx}
                  onClick={() => addTimer(preset.name, preset.time)}
                  className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors text-left"
                >
                  <div className="text-2xl mb-1">{preset.icon}</div>
                  <div className="font-medium text-sm">{preset.name}</div>
                  <div className="text-xs text-gray-500">{formatTime(preset.time)}</div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Active Timers */}
        {timers.length > 0 ? (
          <div className="space-y-4">
            {timers.map(timer => (
              <div
                key={timer.id}
                className={`p-6 rounded-xl border-2 transition-all ${
                  timer.isRunning
                    ? 'border-amber-500 bg-amber-50 dark:bg-amber-900/20'
                    : timer.remaining === 0
                    ? 'border-green-500 bg-green-50 dark:bg-green-900/20'
                    : 'border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800'
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold">{timer.name}</h3>
                  <button
                    onClick={() => deleteTimer(timer.id)}
                    className="text-gray-400 hover:text-red-500 text-sm"
                  >
                    Löschen
                  </button>
                </div>

                <div className="text-center mb-4">
                  <div className={`text-5xl font-mono font-bold ${
                    timer.remaining === 0 ? 'text-green-600' :
                    timer.remaining < 60 ? 'text-red-600' :
                    'text-gray-800 dark:text-gray-100'
                  }`}>
                    {formatTime(timer.remaining)}
                  </div>
                  {timer.remaining === 0 && (
                    <div className="text-green-600 font-bold mt-2 flex items-center justify-center gap-2">
                      <Bell className="w-5 h-5 animate-bounce" />
                      Fertig!
                    </div>
                  )}
                </div>

                {/* Progress Bar */}
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 mb-4">
                  <div
                    className={`h-2 rounded-full transition-all ${
                      timer.remaining === 0 ? 'bg-green-500' : 'bg-amber-500'
                    }`}
                    style={{ width: `${getProgress(timer)}%` }}
                  />
                </div>

                {/* Controls */}
                <div className="flex gap-2 justify-center">
                  <button
                    onClick={() => toggleTimer(timer.id)}
                    disabled={timer.remaining === 0}
                    className={`px-6 py-2 rounded-lg font-medium transition-colors flex items-center gap-2 ${
                      timer.remaining === 0
                        ? 'bg-gray-300 dark:bg-gray-700 text-gray-500 cursor-not-allowed'
                        : timer.isRunning
                        ? 'bg-red-500 hover:bg-red-600 text-white'
                        : 'bg-green-500 hover:bg-green-600 text-white'
                    }`}
                  >
                    {timer.isRunning ? (
                      <><Pause className="w-4 h-4" /> Pause</>
                    ) : (
                      <><Play className="w-4 h-4" /> Start</>
                    )}
                  </button>
                  <button
                    onClick={() => resetTimer(timer.id)}
                    className="px-6 py-2 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 rounded-lg font-medium transition-colors flex items-center gap-2"
                  >
                    <RotateCcw className="w-4 h-4" /> Reset
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-8 text-gray-500">
            <Timer className="w-16 h-16 mx-auto mb-4 opacity-20" />
            <p>Keine aktiven Timer</p>
            <p className="text-sm mt-1">Wähle einen Schnellstart oder erstelle einen eigenen Timer</p>
          </div>
        )}

        {/* Add Timer Modal */}
        {showAddModal && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 max-w-md w-full">
              <h3 className="text-xl font-bold mb-4">Neuer Timer</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Name</label>
                  <input
                    type="text"
                    value={newTimer.name}
                    onChange={(e) => setNewTimer({...newTimer, name: e.target.value})}
                    placeholder="z.B. Braten im Ofen"
                    className="w-full p-3 border border-gray-200 dark:border-gray-700 rounded-lg bg-gray-50 dark:bg-gray-900"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">Minuten</label>
                    <input
                      type="number"
                      value={newTimer.minutes}
                      onChange={(e) => setNewTimer({...newTimer, minutes: e.target.value})}
                      min="0"
                      className="w-full p-3 border border-gray-200 dark:border-gray-700 rounded-lg bg-gray-50 dark:bg-gray-900"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Sekunden</label>
                    <input
                      type="number"
                      value={newTimer.seconds}
                      onChange={(e) => setNewTimer({...newTimer, seconds: e.target.value})}
                      min="0"
                      max="59"
                      className="w-full p-3 border border-gray-200 dark:border-gray-700 rounded-lg bg-gray-50 dark:bg-gray-900"
                    />
                  </div>
                </div>
                <div className="flex gap-3 pt-2">
                  <button
                    onClick={addCustomTimer}
                    className="flex-1 bg-amber-500 hover:bg-amber-600 text-white py-2 rounded-lg font-medium"
                  >
                    Timer erstellen
                  </button>
                  <button
                    onClick={() => setShowAddModal(false)}
                    className="px-6 border border-gray-300 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700"
                  >
                    Abbrechen
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default KitchenTimer;

