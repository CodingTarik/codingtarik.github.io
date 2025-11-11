import React, { useState, useEffect, useRef } from 'react';
import { Play, Pause, RotateCcw, Settings, X, Save, BarChart3, Clock, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../../../context/LanguageContext';
import {
  loadPomodoroSessions,
  addPomodoroSession,
  updatePomodoroSession,
  getPomodoroSettings,
  savePomodoroSettings,
  getPomodoroStats
} from '../utils/storage';
import { playTimerSound } from '../../../utils/sounds';

function PomodoroTimer() {
  const { language } = useLanguage();
  const [timeLeft, setTimeLeft] = useState(25 * 60); // 25 minutes in seconds
  const [isRunning, setIsRunning] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [mode, setMode] = useState('work'); // 'work', 'shortBreak', 'longBreak'
  const [pomodoroCount, setPomodoroCount] = useState(0);
  const [currentTask, setCurrentTask] = useState('');
  const [showSettings, setShowSettings] = useState(false);
  const [showStats, setShowStats] = useState(false);
  const [showTaskInput, setShowTaskInput] = useState(false);
  const [settings, setSettings] = useState(getPomodoroSettings());
  const [sessions, setSessions] = useState(loadPomodoroSessions());
  const [currentSessionId, setCurrentSessionId] = useState(null);
  const intervalRef = useRef(null);
  const audioContextRef = useRef(null);

  useEffect(() => {
    const savedSettings = getPomodoroSettings();
    setSettings(savedSettings);
    setTimeLeft(savedSettings.workDuration * 60);
    setSessions(loadPomodoroSessions());
  }, []);

  useEffect(() => {
    if (isRunning && !isPaused) {
      intervalRef.current = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            handleTimerComplete();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isRunning, isPaused]);

  const handleTimerComplete = () => {
    setIsRunning(false);
    setIsPaused(false);
    
    if (settings.soundEnabled) {
      playTimerSound();
    }

    if (mode === 'work') {
      const newCount = pomodoroCount + 1;
      setPomodoroCount(newCount);
      
      // Update session if exists
      if (currentSessionId) {
        updatePomodoroSession(currentSessionId, {
          completed: true,
          duration: settings.workDuration
        });
      }

      // Determine next break
      const nextBreak = newCount % settings.longBreakInterval === 0 ? 'longBreak' : 'shortBreak';
      setMode(nextBreak);
      setTimeLeft(nextBreak === 'longBreak' ? settings.longBreak * 60 : settings.shortBreak * 60);
    } else {
      // Break finished, back to work
      setMode('work');
      setTimeLeft(settings.workDuration * 60);
    }

    setSessions(loadPomodoroSessions());
  };

  const handleStart = () => {
    // Task is now optional - can start without task
    if (!currentSessionId && currentTask) {
      // Create new session only if task is provided
      const session = addPomodoroSession({
        task: currentTask,
        duration: 0,
        completed: false
      });
      setCurrentSessionId(session.id);
      setSessions(loadPomodoroSessions());
    }

    setIsRunning(true);
    setIsPaused(false);
  };

  const handlePause = () => {
    setIsPaused(true);
    setIsRunning(false);
  };

  const handleResume = () => {
    setIsRunning(true);
    setIsPaused(false);
  };

  const handleReset = () => {
    setIsRunning(false);
    setIsPaused(false);
    if (mode === 'work') {
      setTimeLeft(settings.workDuration * 60);
    } else if (mode === 'shortBreak') {
      setTimeLeft(settings.shortBreak * 60);
    } else {
      setTimeLeft(settings.longBreak * 60);
    }
  };

  const handleSkip = () => {
    handleTimerComplete();
  };

  const handleSaveTask = () => {
    if (currentTask.trim()) {
      const session = addPomodoroSession({
        task: currentTask,
        duration: 0,
        completed: false
      });
      setCurrentSessionId(session.id);
      setSessions(loadPomodoroSessions());
      setShowTaskInput(false);
      handleStart();
    }
  };

  const handleSaveSettings = () => {
    savePomodoroSettings(settings);
    setShowSettings(false);
    // Reset timer with new settings
    if (mode === 'work') {
      setTimeLeft(settings.workDuration * 60);
    } else if (mode === 'shortBreak') {
      setTimeLeft(settings.shortBreak * 60);
    } else {
      setTimeLeft(settings.longBreak * 60);
    }
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  };

  const progress = mode === 'work' 
    ? ((settings.workDuration * 60 - timeLeft) / (settings.workDuration * 60)) * 100
    : mode === 'shortBreak'
    ? ((settings.shortBreak * 60 - timeLeft) / (settings.shortBreak * 60)) * 100
    : ((settings.longBreak * 60 - timeLeft) / (settings.longBreak * 60)) * 100;

  const stats = getPomodoroStats();

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 mt-8">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-yellow-600 to-amber-600 bg-clip-text text-transparent">
          {language === 'en' ? 'Pomodoro Timer' : 'Pomodoro Timer'}
        </h1>
        <div className="flex gap-2">
          <button
            onClick={() => setShowStats(!showStats)}
            className="p-2 bg-yellow-100 dark:bg-yellow-900/30 rounded-lg hover:bg-yellow-200 dark:hover:bg-yellow-900/50 transition-colors"
          >
            <BarChart3 size={20} className="text-yellow-600 dark:text-yellow-400" />
          </button>
          <button
            onClick={() => setShowSettings(!showSettings)}
            className="p-2 bg-yellow-100 dark:bg-yellow-900/30 rounded-lg hover:bg-yellow-200 dark:hover:bg-yellow-900/50 transition-colors"
          >
            <Settings size={20} className="text-yellow-600 dark:text-yellow-400" />
          </button>
        </div>
      </div>

      {/* Stats Panel */}
      {showStats && (
        <div className="mb-6 bg-gradient-to-br from-yellow-50 to-amber-50 dark:from-yellow-900/20 dark:to-amber-900/20 rounded-2xl p-6 border border-yellow-200 dark:border-yellow-800">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-600 dark:text-yellow-400">{stats.totalSessions}</div>
              <div className="text-sm text-stone-600 dark:text-stone-400">{language === 'en' ? 'Total Sessions' : 'Sessions gesamt'}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-600 dark:text-yellow-400">{stats.completedSessions}</div>
              <div className="text-sm text-stone-600 dark:text-stone-400">{language === 'en' ? 'Completed' : 'Abgeschlossen'}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-600 dark:text-yellow-400">{Math.floor(stats.totalMinutes / 60)}h</div>
              <div className="text-sm text-stone-600 dark:text-stone-400">{language === 'en' ? 'Total Time' : 'Gesamtzeit'}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-600 dark:text-yellow-400">{stats.todaySessions}</div>
              <div className="text-sm text-stone-600 dark:text-stone-400">{language === 'en' ? 'Today' : 'Heute'}</div>
            </div>
          </div>
        </div>
      )}

      {/* Settings Panel */}
      {showSettings && (
        <div className="mb-6 bg-white dark:bg-stone-800 rounded-2xl p-6 border border-stone-200 dark:border-stone-700 shadow-lg">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold text-stone-800 dark:text-stone-100">
              {language === 'en' ? 'Settings' : 'Einstellungen'}
            </h2>
            <button
              onClick={() => setShowSettings(false)}
              className="p-1 hover:bg-stone-100 dark:hover:bg-stone-700 rounded"
            >
              <X size={20} />
            </button>
          </div>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-stone-700 dark:text-stone-300 mb-2">
                {language === 'en' ? 'Work Duration (minutes)' : 'Arbeitsdauer (Minuten)'}
              </label>
              <input
                type="number"
                min="1"
                max="60"
                value={settings.workDuration}
                onChange={(e) => setSettings({ ...settings, workDuration: parseInt(e.target.value) || 25 })}
                className="w-full px-4 py-2 border border-stone-300 dark:border-stone-600 rounded-lg bg-white dark:bg-stone-700 text-stone-900 dark:text-stone-100"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-stone-700 dark:text-stone-300 mb-2">
                {language === 'en' ? 'Short Break (minutes)' : 'Kurze Pause (Minuten)'}
              </label>
              <input
                type="number"
                min="1"
                max="30"
                value={settings.shortBreak}
                onChange={(e) => setSettings({ ...settings, shortBreak: parseInt(e.target.value) || 5 })}
                className="w-full px-4 py-2 border border-stone-300 dark:border-stone-600 rounded-lg bg-white dark:bg-stone-700 text-stone-900 dark:text-stone-100"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-stone-700 dark:text-stone-300 mb-2">
                {language === 'en' ? 'Long Break (minutes)' : 'Lange Pause (Minuten)'}
              </label>
              <input
                type="number"
                min="1"
                max="60"
                value={settings.longBreak}
                onChange={(e) => setSettings({ ...settings, longBreak: parseInt(e.target.value) || 15 })}
                className="w-full px-4 py-2 border border-stone-300 dark:border-stone-600 rounded-lg bg-white dark:bg-stone-700 text-stone-900 dark:text-stone-100"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-stone-700 dark:text-stone-300 mb-2">
                {language === 'en' ? 'Long Break Interval' : 'Lange Pause Intervall'}
              </label>
              <input
                type="number"
                min="2"
                max="10"
                value={settings.longBreakInterval}
                onChange={(e) => setSettings({ ...settings, longBreakInterval: parseInt(e.target.value) || 4 })}
                className="w-full px-4 py-2 border border-stone-300 dark:border-stone-600 rounded-lg bg-white dark:bg-stone-700 text-stone-900 dark:text-stone-100"
              />
            </div>
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="soundEnabled"
                checked={settings.soundEnabled}
                onChange={(e) => setSettings({ ...settings, soundEnabled: e.target.checked })}
                className="w-4 h-4"
              />
              <label htmlFor="soundEnabled" className="text-sm font-medium text-stone-700 dark:text-stone-300">
                {language === 'en' ? 'Enable Sounds' : 'Sounds aktivieren'}
              </label>
            </div>
            <button
              onClick={handleSaveSettings}
              className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors flex items-center justify-center gap-2"
            >
              <Save size={18} />
              {language === 'en' ? 'Save Settings' : 'Einstellungen speichern'}
            </button>
          </div>
        </div>
      )}

      {/* Task Input */}
      {showTaskInput && (
        <div className="mb-6 bg-white dark:bg-stone-800 rounded-2xl p-6 border border-stone-200 dark:border-stone-700 shadow-lg">
          <h2 className="text-xl font-bold text-stone-800 dark:text-stone-100 mb-4">
            {language === 'en' ? 'What are you working on? (Optional)' : 'Woran arbeitest du? (Optional)'}
          </h2>
          <input
            type="text"
            value={currentTask}
            onChange={(e) => setCurrentTask(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSaveTask()}
            placeholder={language === 'en' ? 'Enter your task (optional)...' : 'Aufgabe eingeben (optional)...'}
            className="w-full px-4 py-3 border border-stone-300 dark:border-stone-600 rounded-lg bg-white dark:bg-stone-700 text-stone-900 dark:text-stone-100 mb-4"
            autoFocus
          />
          <div className="flex gap-2">
            <button
              onClick={handleSaveTask}
              className="flex-1 bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors"
            >
              {language === 'en' ? 'Start' : 'Starten'}
            </button>
            <button
              onClick={() => {
                setShowTaskInput(false);
                setCurrentTask('');
                handleStart(); // Start without task
              }}
              className="px-4 py-2 border border-stone-300 dark:border-stone-600 rounded-lg hover:bg-stone-100 dark:hover:bg-stone-700 transition-colors"
            >
              {language === 'en' ? 'Start without task' : 'Ohne Aufgabe starten'}
            </button>
            <button
              onClick={() => {
                setShowTaskInput(false);
                setCurrentTask('');
              }}
              className="px-4 py-2 border border-stone-300 dark:border-stone-600 rounded-lg hover:bg-stone-100 dark:hover:bg-stone-700 transition-colors"
            >
              {language === 'en' ? 'Cancel' : 'Abbrechen'}
            </button>
          </div>
        </div>
      )}

      {/* Current Task Display */}
      {currentTask && !showTaskInput && (
        <div className="mb-6 bg-gradient-to-r from-yellow-100 to-amber-100 dark:from-yellow-900/30 dark:to-amber-900/30 rounded-xl p-4 border border-yellow-200 dark:border-yellow-800">
          <div className="flex items-center gap-2">
            <CheckCircle2 size={20} className="text-yellow-600 dark:text-yellow-400" />
            <span className="font-semibold text-stone-800 dark:text-stone-100">{currentTask}</span>
          </div>
        </div>
      )}

      {/* Timer Display */}
      <div className="relative mb-8">
        {/* Tomato Animation */}
        <div className="flex justify-center mb-8">
          <div className="relative">
            {/* Tomato SVG */}
            <svg width="200" height="200" viewBox="0 0 200 200" className={`transition-transform duration-300 ${isRunning ? 'animate-pulse' : ''}`}>
              {/* Tomato body */}
              <ellipse cx="100" cy="120" rx="70" ry="80" fill="#ef4444" className="drop-shadow-lg" />
              <ellipse cx="100" cy="120" rx="60" ry="70" fill="#f87171" />
              
              {/* Highlight */}
              <ellipse cx="85" cy="100" rx="20" ry="25" fill="#fee2e2" opacity="0.6" />
              
              {/* Stem */}
              <rect x="95" y="40" width="10" height="30" rx="5" fill="#22c55e" />
              <ellipse cx="100" cy="40" rx="15" ry="8" fill="#22c55e" />
              
              {/* Face when timer is running */}
              {isRunning && (
                <>
                  <circle cx="90" cy="110" r="5" fill="#1f2937" />
                  <circle cx="110" cy="110" r="5" fill="#1f2937" />
                  <path d="M 85 125 Q 100 135 115 125" stroke="#1f2937" strokeWidth="3" fill="none" strokeLinecap="round" />
                </>
              )}
              
              {/* Progress ring */}
              <circle
                cx="100"
                cy="120"
                r="75"
                fill="none"
                stroke="#fbbf24"
                strokeWidth="8"
                strokeDasharray={`${2 * Math.PI * 75}`}
                strokeDashoffset={`${2 * Math.PI * 75 * (1 - progress / 100)}`}
                transform="rotate(-90 100 120)"
                className="transition-all duration-1000"
                opacity="0.3"
              />
            </svg>
          </div>
        </div>

        {/* Timer Text */}
        <div className="text-center mb-8">
          <div className="text-7xl font-bold text-stone-800 dark:text-stone-100 mb-4 font-mono">
            {formatTime(timeLeft)}
          </div>
          <div className="text-xl text-stone-600 dark:text-stone-400">
            {mode === 'work' 
              ? (language === 'en' ? 'Focus Time' : 'Fokus-Zeit')
              : mode === 'shortBreak'
              ? (language === 'en' ? 'Short Break' : 'Kurze Pause')
              : (language === 'en' ? 'Long Break' : 'Lange Pause')}
          </div>
          {mode === 'work' && (
            <div className="mt-2 text-sm text-yellow-600 dark:text-yellow-400">
              {language === 'en' ? `Pomodoro #${pomodoroCount + 1}` : `Pomodoro #${pomodoroCount + 1}`}
            </div>
          )}
        </div>

        {/* Controls */}
        <div className="flex justify-center gap-4">
          {!isRunning && !isPaused && (
            <button
              onClick={handleStart}
              className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-3 px-8 rounded-full transition-all transform hover:scale-105 flex items-center gap-2 shadow-lg"
            >
              <Play size={24} />
              {language === 'en' ? 'Start' : 'Starten'}
            </button>
          )}
          {isRunning && (
            <button
              onClick={handlePause}
              className="bg-amber-500 hover:bg-amber-600 text-white font-semibold py-3 px-8 rounded-full transition-all transform hover:scale-105 flex items-center gap-2 shadow-lg"
            >
              <Pause size={24} />
              {language === 'en' ? 'Pause' : 'Pausieren'}
            </button>
          )}
          {isPaused && (
            <>
              <button
                onClick={handleResume}
                className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-3 px-8 rounded-full transition-all transform hover:scale-105 flex items-center gap-2 shadow-lg"
              >
                <Play size={24} />
                {language === 'en' ? 'Resume' : 'Fortsetzen'}
              </button>
              <button
                onClick={handleReset}
                className="bg-stone-500 hover:bg-stone-600 text-white font-semibold py-3 px-8 rounded-full transition-all transform hover:scale-105 flex items-center gap-2 shadow-lg"
              >
                <RotateCcw size={24} />
                {language === 'en' ? 'Reset' : 'Zurücksetzen'}
              </button>
            </>
          )}
          {(isRunning || isPaused) && (
            <button
              onClick={handleSkip}
              className="bg-stone-400 hover:bg-stone-500 text-white font-semibold py-3 px-6 rounded-full transition-all transform hover:scale-105 shadow-lg"
            >
              {language === 'en' ? 'Skip' : 'Überspringen'}
            </button>
          )}
        </div>
      </div>

      {/* Recent Sessions */}
      {sessions.length > 0 && (
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-stone-800 dark:text-stone-100 mb-4">
            {language === 'en' ? 'Recent Sessions' : 'Letzte Sessions'}
          </h2>
          <div className="space-y-2">
            {sessions.slice(0, 5).map((session) => (
              <div
                key={session.id}
                className={`bg-white dark:bg-stone-800 rounded-lg p-4 border ${
                  session.completed
                    ? 'border-green-300 dark:border-green-700 bg-green-50 dark:bg-green-900/20'
                    : 'border-stone-200 dark:border-stone-700'
                }`}
              >
                <div className="flex justify-between items-center">
                  <div className="flex-1">
                    <div className="font-semibold text-stone-800 dark:text-stone-100">{session.task || (language === 'en' ? 'Untitled Task' : 'Unbenannte Aufgabe')}</div>
                    <div className="text-sm text-stone-600 dark:text-stone-400 flex items-center gap-2 mt-1">
                      <Clock size={14} />
                      {new Date(session.timestamp).toLocaleString()}
                      {session.completed && (
                        <>
                          <span className="mx-2">•</span>
                          <span className="text-green-600 dark:text-green-400 font-medium">
                            {session.duration} {language === 'en' ? 'min' : 'Min'}
                          </span>
                        </>
                      )}
                    </div>
                  </div>
                  {session.completed && (
                    <CheckCircle2 size={20} className="text-green-500" />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default PomodoroTimer;

