/**
 * Pomodoro Timer Component v2
 * Clean, intuitive inline timer that doesn't obscure the study view.
 * Expands/collapses smoothly, shows phase context, and feels native.
 */

import { useState, useEffect, useCallback, useRef } from 'react';
import {
  Timer,
  Play,
  Pause,
  RotateCcw,
  SkipForward,
  Coffee,
  Brain,
  X,
  ChevronDown,
  Settings2,
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useT } from '../lib/i18n';

type Phase = 'focus' | 'short-break' | 'long-break';

interface PhaseConfig {
  duration: number;
  label: string;
  color: string;
  bgGlow: string;
  gradient: string;
  icon: typeof Timer;
}

const PHASE_CONFIG: Record<Phase, PhaseConfig> = {
  focus: {
    duration: 25 * 60,
    label: 'Focus',
    color: 'text-rose-400',
    bgGlow: 'shadow-rose-500/20',
    gradient: 'from-rose-500 to-orange-500',
    icon: Brain,
  },
  'short-break': {
    duration: 5 * 60,
    label: 'Break',
    color: 'text-emerald-400',
    bgGlow: 'shadow-emerald-500/20',
    gradient: 'from-emerald-500 to-teal-500',
    icon: Coffee,
  },
  'long-break': {
    duration: 15 * 60,
    label: 'Long Break',
    color: 'text-sky-400',
    bgGlow: 'shadow-sky-500/20',
    gradient: 'from-sky-500 to-blue-500',
    icon: Coffee,
  },
};

const FOCUS_OPTIONS = [15, 20, 25, 30, 45, 50, 60];
const SHORT_BREAK_OPTIONS = [3, 5, 10];
const LONG_BREAK_OPTIONS = [10, 15, 20, 30];

interface Props {
  onPomodoroComplete?: () => void;
}

export default function PomodoroTimer({ onPomodoroComplete }: Props) {
  const { t } = useT();
  const [isOpen, setIsOpen] = useState(false);
  const [phase, setPhase] = useState<Phase>('focus');
  const [isRunning, setIsRunning] = useState(false);
  const [pomodoroCount, setPomodoroCount] = useState(0);
  const [showSettings, setShowSettings] = useState(false);

  // Custom durations (in minutes)
  const [focusMin, setFocusMin] = useState(25);
  const [shortBreakMin, setShortBreakMin] = useState(5);
  const [longBreakMin, setLongBreakMin] = useState(15);

  // Computed duration based on phase + custom settings
  const phaseDuration = useCallback(() => {
    if (phase === 'focus') return focusMin * 60;
    if (phase === 'short-break') return shortBreakMin * 60;
    return longBreakMin * 60;
  }, [phase, focusMin, shortBreakMin, longBreakMin]);

  const [timeLeft, setTimeLeft] = useState(focusMin * 60);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  const config = PHASE_CONFIG[phase];
  const totalDuration = phaseDuration();
  const progress = 1 - timeLeft / totalDuration;

  // Close panel on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (panelRef.current && !panelRef.current.contains(e.target as Node)) {
        if (showSettings) setShowSettings(false);
        else if (!isRunning) setIsOpen(false);
      }
    };
    if (isOpen) document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, [isOpen, showSettings, isRunning]);

  // Timer tick
  useEffect(() => {
    if (isRunning && timeLeft > 0) {
      intervalRef.current = setInterval(() => {
        setTimeLeft(t => {
          if (t <= 1) {
            setIsRunning(false);
            handlePhaseComplete();
            return 0;
          }
          return t - 1;
        });
      }, 1000);
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isRunning]);

  const handlePhaseComplete = useCallback(() => {
    // Notification sound — pleasant chime
    try {
      const ctx = new AudioContext();
      const now = ctx.currentTime;
      [523.25, 659.25, 783.99].forEach((freq, i) => {
        const osc = ctx.createOscillator();
        osc.type = 'triangle';
        const g = ctx.createGain();
        g.gain.setValueAtTime(0, now + i * 0.12);
        g.gain.linearRampToValueAtTime(0.12, now + i * 0.12 + 0.01);
        g.gain.exponentialRampToValueAtTime(0.001, now + i * 0.12 + 0.8);
        osc.connect(g);
        g.connect(ctx.destination);
        osc.start(now + i * 0.12);
        osc.stop(now + i * 0.12 + 0.8);
        osc.frequency.value = freq;
      });
    } catch {}

    if (phase === 'focus') {
      const newCount = pomodoroCount + 1;
      setPomodoroCount(newCount);
      onPomodoroComplete?.();
      if (newCount % 4 === 0) {
        setPhase('long-break');
        setTimeLeft(longBreakMin * 60);
      } else {
        setPhase('short-break');
        setTimeLeft(shortBreakMin * 60);
      }
    } else {
      setPhase('focus');
      setTimeLeft(focusMin * 60);
    }
  }, [phase, pomodoroCount, onPomodoroComplete, focusMin, shortBreakMin, longBreakMin]);

  const toggleTimer = () => setIsRunning(r => !r);

  const resetTimer = () => {
    setIsRunning(false);
    setTimeLeft(phaseDuration());
  };

  const skipPhase = () => {
    setIsRunning(false);
    handlePhaseComplete();
  };

  const formatTime = (s: number) => {
    const m = Math.floor(s / 60);
    const sec = s % 60;
    return `${m.toString().padStart(2, '0')}:${sec.toString().padStart(2, '0')}`;
  };

  const Icon = config.icon;

  // ─── Trigger button (when closed) ───
  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
          isRunning
            ? `bg-gradient-to-r ${config.gradient} text-white shadow-md ${config.bgGlow}`
            : 'bg-slate-800/60 text-slate-400 hover:text-white hover:bg-slate-700/60'
        }`}
        title={t('pomodoro.title')}
      >
        <Timer size={13} />
        {isRunning ? (
          <span className="tabular-nums font-mono font-semibold">{formatTime(timeLeft)}</span>
        ) : (
          <span className="hidden sm:inline">{t('pomodoro.title')}</span>
        )}
      </button>
    );
  }

  // ─── Expanded Panel ───
  return (
    <div ref={panelRef} className="relative z-50">
      <AnimatePresence mode="wait">
        <motion.div
          key="pomodoro-panel"
          initial={{ opacity: 0, y: -8, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -8, scale: 0.95 }}
          transition={{ duration: 0.2, ease: 'easeOut' }}
          className={`absolute right-0 top-full mt-2 w-72 rounded-2xl border border-slate-700/40 bg-slate-900/95 backdrop-blur-xl shadow-2xl ${config.bgGlow} overflow-hidden`}
        >
          {/* Phase tabs */}
          <div className="flex border-b border-slate-800/60">
            {(['focus', 'short-break', 'long-break'] as Phase[]).map(p => {
              const pc = PHASE_CONFIG[p];
              const PIcon = pc.icon;
              const isActive = phase === p;
              return (
                <button
                  key={p}
                  onClick={() => {
                    if (!isRunning) {
                      setPhase(p);
                      if (p === 'focus') setTimeLeft(focusMin * 60);
                      else if (p === 'short-break') setTimeLeft(shortBreakMin * 60);
                      else setTimeLeft(longBreakMin * 60);
                    }
                  }}
                  disabled={isRunning}
                  className={`flex-1 py-2.5 flex items-center justify-center gap-1.5 text-[11px] font-semibold tracking-wide uppercase transition-all ${
                    isActive
                      ? `${pc.color} border-b-2 border-current bg-white/[0.03]`
                      : 'text-slate-500 hover:text-slate-300 disabled:hover:text-slate-500'
                  }`}
                >
                  <PIcon size={12} />
                  {p === 'focus' ? t('pomodoro.focus') : p === 'short-break' ? t('pomodoro.shortBreak') : t('pomodoro.longBreak')}
                </button>
              );
            })}
          </div>

          {/* Timer body */}
          <div className="px-5 pt-5 pb-4">
            {/* Circular progress + time */}
            <div className="relative w-36 h-36 mx-auto mb-5">
              {/* Background ring */}
              <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                <circle
                  cx="50" cy="50" r="43"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  className="text-slate-800/60"
                />
                {/* Progress ring */}
                <circle
                  cx="50" cy="50" r="43"
                  fill="none"
                  strokeWidth="3.5"
                  strokeDasharray={`${progress * 2 * Math.PI * 43} ${2 * Math.PI * 43}`}
                  strokeLinecap="round"
                  className={config.color}
                  style={{ transition: 'stroke-dasharray 0.8s ease', filter: 'drop-shadow(0 0 4px currentColor)' }}
                />
              </svg>
              {/* Center content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className={`text-3xl font-bold font-mono tabular-nums tracking-tight ${config.color}`}>
                  {formatTime(timeLeft)}
                </span>
                <span className="text-[10px] text-slate-500 mt-0.5 uppercase tracking-wider">
                  {phase === 'focus' ? t('pomodoro.focus') : phase === 'short-break' ? t('pomodoro.shortBreak') : t('pomodoro.longBreak')}
                </span>
              </div>
            </div>

            {/* Controls */}
            <div className="flex items-center justify-center gap-3 mb-4">
              <button
                onClick={resetTimer}
                className="w-9 h-9 rounded-full bg-slate-800/70 flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-700/70 transition-all active:scale-95"
                title={t('pomodoro.reset')}
              >
                <RotateCcw size={14} />
              </button>
              <button
                onClick={toggleTimer}
                className={`w-14 h-14 rounded-full flex items-center justify-center transition-all shadow-lg active:scale-95 ${
                  isRunning
                    ? 'bg-slate-700/80 text-white hover:bg-slate-600/80'
                    : `bg-gradient-to-br ${config.gradient} text-white hover:shadow-xl`
                }`}
              >
                {isRunning ? <Pause size={20} /> : <Play size={20} className="ml-0.5" />}
              </button>
              <button
                onClick={skipPhase}
                className="w-9 h-9 rounded-full bg-slate-800/70 flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-700/70 transition-all active:scale-95"
                title={t('pomodoro.skipPhase')}
              >
                <SkipForward size={14} />
              </button>
            </div>

            {/* Pomodoro progress dots */}
            <div className="flex items-center justify-center gap-2 mb-3">
              {[0, 1, 2, 3].map(i => (
                <div
                  key={i}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    i < pomodoroCount % 4
                      ? 'bg-rose-400 shadow-sm shadow-rose-400/40 scale-110'
                      : 'bg-slate-700/80'
                  }`}
                />
              ))}
              {pomodoroCount > 0 && (
                <span className="text-[10px] text-slate-500 ml-1.5 tabular-nums">
                  {pomodoroCount} session{pomodoroCount !== 1 ? 's' : ''}
                </span>
              )}
            </div>

            {/* Settings toggle */}
            <button
              onClick={() => setShowSettings(s => !s)}
              className={`w-full flex items-center justify-center gap-1.5 py-1.5 rounded-lg text-[11px] transition-all ${
                showSettings
                  ? 'text-slate-300 bg-slate-800/50'
                  : 'text-slate-500 hover:text-slate-300 hover:bg-slate-800/30'
              }`}
            >
              {showSettings ? <ChevronDown size={12} /> : <Settings2 size={11} />}
              {showSettings ? t('pomodoro.hideSettings') : t('pomodoro.adjustDurations')}
            </button>

            {/* Settings panel */}
            <AnimatePresence>
              {showSettings && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="overflow-hidden"
                >
                  <div className="pt-3 space-y-3">
                    {/* Focus duration */}
                    <div>
                      <label className="text-[10px] text-slate-500 uppercase tracking-wider font-semibold mb-1.5 block">
                        {t('pomodoro.focusDuration')}
                      </label>
                      <div className="flex gap-1.5 flex-wrap">
                        {FOCUS_OPTIONS.map(m => (
                          <button
                            key={m}
                            onClick={() => {
                              setFocusMin(m);
                              if (phase === 'focus' && !isRunning) setTimeLeft(m * 60);
                            }}
                            className={`px-2.5 py-1 rounded-md text-[11px] font-medium transition-all ${
                              focusMin === m
                                ? 'bg-rose-500/20 text-rose-400 ring-1 ring-rose-500/30'
                                : 'bg-slate-800/50 text-slate-400 hover:bg-slate-700/50 hover:text-slate-300'
                            }`}
                          >
                            {m}m
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Short break */}
                    <div>
                      <label className="text-[10px] text-slate-500 uppercase tracking-wider font-semibold mb-1.5 block">
                        {t('pomodoro.shortBreak')}
                      </label>
                      <div className="flex gap-1.5 flex-wrap">
                        {SHORT_BREAK_OPTIONS.map(m => (
                          <button
                            key={m}
                            onClick={() => {
                              setShortBreakMin(m);
                              if (phase === 'short-break' && !isRunning) setTimeLeft(m * 60);
                            }}
                            className={`px-2.5 py-1 rounded-md text-[11px] font-medium transition-all ${
                              shortBreakMin === m
                                ? 'bg-emerald-500/20 text-emerald-400 ring-1 ring-emerald-500/30'
                                : 'bg-slate-800/50 text-slate-400 hover:bg-slate-700/50 hover:text-slate-300'
                            }`}
                          >
                            {m}m
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Long break */}
                    <div>
                      <label className="text-[10px] text-slate-500 uppercase tracking-wider font-semibold mb-1.5 block">
                        {t('pomodoro.longBreak')}
                      </label>
                      <div className="flex gap-1.5 flex-wrap">
                        {LONG_BREAK_OPTIONS.map(m => (
                          <button
                            key={m}
                            onClick={() => {
                              setLongBreakMin(m);
                              if (phase === 'long-break' && !isRunning) setTimeLeft(m * 60);
                            }}
                            className={`px-2.5 py-1 rounded-md text-[11px] font-medium transition-all ${
                              longBreakMin === m
                                ? 'bg-sky-500/20 text-sky-400 ring-1 ring-sky-500/30'
                                : 'bg-slate-800/50 text-slate-400 hover:bg-slate-700/50 hover:text-slate-300'
                            }`}
                          >
                            {m}m
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Close button - bottom bar */}
          <button
            onClick={() => { setIsOpen(false); setShowSettings(false); }}
            className="w-full py-2 flex items-center justify-center gap-1.5 text-[11px] text-slate-500 hover:text-slate-300 border-t border-slate-800/50 transition-colors hover:bg-slate-800/30"
          >
            <X size={12} />
            {t('action.close')}
          </button>
        </motion.div>
      </AnimatePresence>

      {/* Trigger button (visible when open, acts as anchor) */}
      <button
        onClick={() => { setIsOpen(false); setShowSettings(false); }}
        className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-medium transition-all bg-gradient-to-r ${config.gradient} text-white shadow-md ${config.bgGlow}`}
      >
        <Timer size={13} />
        <span className="tabular-nums font-mono font-semibold">{formatTime(timeLeft)}</span>
      </button>
    </div>
  );
}
