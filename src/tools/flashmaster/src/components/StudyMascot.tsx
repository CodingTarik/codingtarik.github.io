/**
 * StudyMascot — An animated mascot that reacts to your study performance.
 *
 * Tracks consecutive correct/incorrect answers and displays:
 * - Combo counter with escalating excitement for streaks
 * - Encouraging phrases when you fail
 * - Celebratory phrases for big streaks
 * - Sad/motivating phrases when the streak breaks
 *
 * The mascot is an owl 🦉 named "Flashy"
 */

import { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { Rating } from '../types';

// ── Mascot Faces ──

type MascotMood = 'idle' | 'happy' | 'excited' | 'ecstatic' | 'fire' | 'sad' | 'encourage' | 'think';

const MASCOT_FACES: Record<MascotMood, string> = {
  idle: '🦉',
  happy: '😊',
  excited: '🤩',
  ecstatic: '🥳',
  fire: '🔥',
  sad: '😢',
  encourage: '💪',
  think: '🤔',
};

// ── Phrases ──

const STREAK_PHRASES: Record<number, string[]> = {
  2: ['Nice!', 'Good one!', 'Keep going!', 'Solid!'],
  3: ['Hat trick! 🎩', 'Awesome streak!', 'On a roll!', 'Smooth!'],
  5: ['5 in a row! 🔥', "You're on fire!", 'Unstoppable!', 'Killing it!'],
  7: ['7 streak! 💫', 'Incredible!', 'Genius mode!', 'Machine!'],
  10: ['10 COMBO!! 🏆', 'LEGENDARY!', 'S-RANK!', 'GODLIKE! 🌟'],
  15: ['15?! INSANE! 🤯', 'ULTRA COMBO!', 'TRANSCENDENT!', 'UNBREAKABLE!'],
  20: ['20!! MYTHIC! 🌌', 'BEYOND LIMITS!', 'ULTIMATE BRAIN!', 'ARE YOU HUMAN?! 🤖'],
  30: ['30!!! 👑👑👑', 'ABSOLUTE LEGEND!', 'GALAXY BRAIN!', 'FLASHCARD GOD!'],
};

const FAIL_PHRASES = [
  "It's okay, mistakes help you learn!",
  "Don't worry, try again! 💪",
  'Everyone stumbles sometimes.',
  'Learning means failing forward!',
  'This one will stick next time.',
  'Keep going, you got this!',
  "Tough card? You'll nail it soon.",
  'Progress, not perfection! ✨',
  'Even geniuses need retries!',
  "That's how memory works — repeat!",
];

const STREAK_BREAK_PHRASES = [
  'Aww, streak broken! But what a run!',
  "Good effort! Let's start a new one!",
  'That was impressive, try again!',
  'Shake it off, new streak incoming!',
  "No worries, you'll beat it next time!",
  'Great streak! Ready for round two?',
];

const IDLE_PHRASES = [
  'Ready to learn? 📚',
  "Let's go! 🚀",
  'Focus time! 🧠',
  "You've got this!",
  'Time to study!',
];

function pickRandom<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

function getStreakPhrase(combo: number): string {
  // Find highest matching threshold
  const thresholds = Object.keys(STREAK_PHRASES).map(Number).sort((a, b) => b - a);
  for (const t of thresholds) {
    if (combo >= t) return pickRandom(STREAK_PHRASES[t]);
  }
  return pickRandom(STREAK_PHRASES[2]);
}

function getMoodForCombo(combo: number): MascotMood {
  if (combo >= 20) return 'fire';
  if (combo >= 10) return 'ecstatic';
  if (combo >= 5) return 'excited';
  if (combo >= 2) return 'happy';
  return 'idle';
}

// ── Component ──

interface Props {
  /** Call this from the parent whenever a card is rated */
  lastRating: { rating: Rating; cardId: string; timestamp: number } | null;
}

export default function StudyMascot({ lastRating }: Props) {
  const [combo, setCombo] = useState(0);
  const [maxCombo, setMaxCombo] = useState(0);
  const [mood, setMood] = useState<MascotMood>('idle');
  const [phrase, setPhrase] = useState(pickRandom(IDLE_PHRASES));
  const [showPhrase, setShowPhrase] = useState(true);
  const [showCombo, setShowCombo] = useState(false);
  const [shake, setShake] = useState(false);
  const [failCount, setFailCount] = useState(0);
  const prevRatingRef = useRef<typeof lastRating>(null);
  const phraseTimer = useRef<ReturnType<typeof setTimeout>>();

  const triggerPhrase = useCallback((text: string, duration = 3000) => {
    setPhrase(text);
    setShowPhrase(true);
    if (phraseTimer.current) clearTimeout(phraseTimer.current);
    phraseTimer.current = setTimeout(() => setShowPhrase(false), duration);
  }, []);

  useEffect(() => {
    if (!lastRating || lastRating === prevRatingRef.current) return;
    prevRatingRef.current = lastRating;

    const { rating } = lastRating;
    const isCorrect = rating === 'good' || rating === 'easy';
    const isHard = rating === 'hard';
    const isFail = rating === 'again';

    if (isCorrect || isHard) {
      const newCombo = combo + 1;
      setCombo(newCombo);
      setMaxCombo(prev => Math.max(prev, newCombo));
      setFailCount(0);

      if (newCombo >= 2) {
        setShowCombo(true);
        setMood(getMoodForCombo(newCombo));
        triggerPhrase(getStreakPhrase(newCombo), newCombo >= 10 ? 4000 : 3000);
      } else {
        setMood('happy');
        setShowCombo(false);
        setShowPhrase(false);
      }
    } else if (isFail) {
      const prevCombo = combo;
      setCombo(0);
      setShowCombo(false);
      setFailCount(prev => prev + 1);

      if (prevCombo >= 3) {
        // Streak was broken
        setMood('sad');
        triggerPhrase(pickRandom(STREAK_BREAK_PHRASES), 3500);
        setShake(true);
        setTimeout(() => setShake(false), 500);
      } else {
        setMood('encourage');
        triggerPhrase(pickRandom(FAIL_PHRASES), 3000);
      }

      // After multiple fails, be extra encouraging
      if (failCount >= 2) {
        setTimeout(() => {
          setMood('encourage');
          triggerPhrase("You're learning — that's what matters! 🌟", 3500);
        }, 2000);
      }
    }
  }, [lastRating, combo, failCount, triggerPhrase]);

  // Combo glow colors
  const comboColor = combo >= 20
    ? 'from-rose-500 to-orange-500'
    : combo >= 10
    ? 'from-amber-400 to-red-500'
    : combo >= 5
    ? 'from-emerald-400 to-cyan-400'
    : 'from-blue-400 to-indigo-400';

  const comboBorderColor = combo >= 20
    ? 'border-rose-500/50 shadow-rose-500/20'
    : combo >= 10
    ? 'border-amber-500/50 shadow-amber-500/20'
    : combo >= 5
    ? 'border-emerald-500/50 shadow-emerald-500/20'
    : 'border-blue-500/50 shadow-blue-500/20';

  const comboTextSize = combo >= 20 ? 'text-2xl' : combo >= 10 ? 'text-xl' : 'text-lg';

  return (
    <div className="flex items-center gap-2 select-none">
      {/* Mascot */}
      <motion.div
        className="relative"
        animate={shake ? { x: [-4, 4, -3, 3, -2, 2, 0] } : {}}
        transition={{ duration: 0.4 }}
      >
        <motion.div
          className="w-10 h-10 rounded-xl bg-slate-800/60 border border-slate-700/40 flex items-center justify-center text-xl cursor-default"
          animate={
            combo >= 10
              ? { scale: [1, 1.15, 1], rotate: [0, -5, 5, 0] }
              : combo >= 5
              ? { scale: [1, 1.08, 1] }
              : {}
          }
          transition={{ duration: 0.6, repeat: combo >= 5 ? Infinity : 0, repeatDelay: 1.5 }}
          title={maxCombo > 0 ? `Best combo: ${maxCombo}` : 'Study mascot'}
        >
          {MASCOT_FACES[mood]}
        </motion.div>

        {/* Combo flames effect for big streaks */}
        {combo >= 10 && (
          <motion.span
            className="absolute -top-2 -right-1 text-sm"
            animate={{ y: [0, -3, 0], opacity: [1, 0.7, 1] }}
            transition={{ duration: 0.8, repeat: Infinity }}
          >
            🔥
          </motion.span>
        )}
      </motion.div>

      {/* Combo counter */}
      <AnimatePresence>
        {showCombo && combo >= 2 && (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ type: 'spring', damping: 15, stiffness: 300 }}
            className={`flex items-center gap-1.5 px-2.5 py-1 rounded-xl border shadow-lg ${comboBorderColor} bg-slate-900/80 backdrop-blur-sm`}
          >
            <span className={`font-black bg-gradient-to-r ${comboColor} bg-clip-text text-transparent ${comboTextSize}`}>
              {combo}×
            </span>
            <span className="text-[10px] text-slate-400 font-medium uppercase tracking-wider">
              {combo >= 20 ? 'GODLIKE' : combo >= 10 ? 'MEGA' : combo >= 5 ? 'COMBO' : 'streak'}
            </span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Speech bubble */}
      <AnimatePresence>
        {showPhrase && phrase && (
          <motion.div
            initial={{ opacity: 0, y: 5, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -5, scale: 0.9 }}
            transition={{ duration: 0.25 }}
            className="relative px-3 py-1.5 rounded-xl bg-slate-800/80 border border-slate-700/40 backdrop-blur-sm max-w-[200px]"
          >
            {/* Speech bubble arrow */}
            <div className="absolute left-0 top-1/2 -translate-x-1 -translate-y-1/2 w-2 h-2 bg-slate-800/80 border-l border-b border-slate-700/40 rotate-45" />
            <p className="text-[11px] text-slate-200 font-medium leading-tight">{phrase}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
