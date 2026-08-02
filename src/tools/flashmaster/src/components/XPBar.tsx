import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronRight, Trophy, Zap, Star } from 'lucide-react';
import { xpForCurrentLevel, xpToNextLevel } from '../lib/gamification';
import { XP_PER_LEVEL } from '../types';
import { useT } from '../lib/i18n';

// ── Level tiers with titles, icons, and colors ──

interface LevelTier {
  level: number;
  title: string;
  icon: string;
  color: string;        // tailwind text color
  bgGradient: string;   // tailwind gradient classes
  borderColor: string;
}

const LEVEL_TIERS: LevelTier[] = [
  { level: 1,  title: 'Beginner',        icon: '🌱', color: 'text-slate-400',   bgGradient: 'from-slate-600 to-slate-700',     borderColor: 'border-slate-500/30' },
  { level: 2,  title: 'Novice',          icon: '📖', color: 'text-slate-300',   bgGradient: 'from-slate-500 to-slate-600',     borderColor: 'border-slate-400/30' },
  { level: 3,  title: 'Student',         icon: '📝', color: 'text-blue-400',    bgGradient: 'from-blue-600 to-blue-700',       borderColor: 'border-blue-500/30' },
  { level: 5,  title: 'Apprentice',      icon: '⭐', color: 'text-blue-300',    bgGradient: 'from-blue-500 to-indigo-600',     borderColor: 'border-blue-400/30' },
  { level: 7,  title: 'Learner',         icon: '🔵', color: 'text-indigo-400',  bgGradient: 'from-indigo-500 to-indigo-600',   borderColor: 'border-indigo-400/30' },
  { level: 10, title: 'Journeyman',      icon: '🌟', color: 'text-emerald-400', bgGradient: 'from-emerald-500 to-emerald-600', borderColor: 'border-emerald-400/30' },
  { level: 13, title: 'Adept',           icon: '🟢', color: 'text-emerald-300', bgGradient: 'from-emerald-400 to-teal-500',    borderColor: 'border-emerald-300/30' },
  { level: 15, title: 'Scholar',         icon: '🎓', color: 'text-teal-400',    bgGradient: 'from-teal-500 to-cyan-600',       borderColor: 'border-teal-400/30' },
  { level: 18, title: 'Specialist',      icon: '🔷', color: 'text-cyan-400',    bgGradient: 'from-cyan-500 to-cyan-600',       borderColor: 'border-cyan-400/30' },
  { level: 20, title: 'Veteran',         icon: '💫', color: 'text-violet-400',  bgGradient: 'from-violet-500 to-violet-600',   borderColor: 'border-violet-400/30' },
  { level: 25, title: 'Expert',          icon: '✨', color: 'text-purple-400',  bgGradient: 'from-purple-500 to-purple-600',   borderColor: 'border-purple-400/30' },
  { level: 30, title: 'Master',          icon: '🏅', color: 'text-amber-400',   bgGradient: 'from-amber-500 to-amber-600',     borderColor: 'border-amber-400/30' },
  { level: 35, title: 'Grandmaster',     icon: '🥇', color: 'text-amber-300',   bgGradient: 'from-amber-400 to-orange-500',    borderColor: 'border-amber-300/30' },
  { level: 40, title: 'Virtuoso',        icon: '💎', color: 'text-cyan-300',    bgGradient: 'from-cyan-400 to-blue-500',       borderColor: 'border-cyan-300/30' },
  { level: 50, title: 'Sage',            icon: '🔮', color: 'text-fuchsia-400', bgGradient: 'from-fuchsia-500 to-purple-600',  borderColor: 'border-fuchsia-400/30' },
  { level: 60, title: 'Legend',          icon: '👑', color: 'text-yellow-400',  bgGradient: 'from-yellow-500 to-amber-600',    borderColor: 'border-yellow-400/30' },
  { level: 75, title: 'Mythic',          icon: '🌌', color: 'text-indigo-300',  bgGradient: 'from-indigo-400 to-purple-500',   borderColor: 'border-indigo-300/30' },
  { level: 100, title: 'Transcendent',   icon: '🌠', color: 'text-rose-400',    bgGradient: 'from-rose-500 to-pink-600',       borderColor: 'border-rose-400/30' },
];

/** Get the current tier for a given level */
function getTierForLevel(level: number): LevelTier {
  let tier = LEVEL_TIERS[0];
  for (const t of LEVEL_TIERS) {
    if (level >= t.level) tier = t;
    else break;
  }
  return tier;
}

/** Get total XP needed to reach a given level */
function xpForLevel(level: number): number {
  return (level - 1) * XP_PER_LEVEL;
}

// ── Component ──

interface Props {
  xp: number;
  level: number;
  compact?: boolean;
}

export default function XPBar({ xp, level, compact = false }: Props) {
  const { t } = useT();
  const [showPanel, setShowPanel] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const currentXp = xpForCurrentLevel(xp);
  const needed = xpToNextLevel();
  const progress = (currentXp / needed) * 100;
  const currentTier = getTierForLevel(level);

  // Close on outside click
  useEffect(() => {
    if (!showPanel) return;
    const handleClick = (e: MouseEvent) => {
      if (panelRef.current && !panelRef.current.contains(e.target as Node)) {
        setShowPanel(false);
      }
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [showPanel]);

  // Close on Escape
  useEffect(() => {
    if (!showPanel) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setShowPanel(false);
    };
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [showPanel]);

  if (compact) {
    return (
      <>
        <div
          className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity"
          onClick={() => setShowPanel(true)}
          title="View all levels"
        >
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-yellow-500 to-amber-600 flex items-center justify-center text-xs font-bold shadow-lg">
            {level}
          </div>
          <div className="flex-1">
            <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-yellow-500 to-amber-500 rounded-full transition-all duration-500"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        </div>
        <AnimatePresence>
          {showPanel && <LevelPanel level={level} xp={xp} currentTier={currentTier} onClose={() => setShowPanel(false)} panelRef={panelRef} />}
        </AnimatePresence>
      </>
    );
  }

  return (
    <>
      <div
        className="glass-card rounded-2xl p-4 cursor-pointer hover:ring-1 hover:ring-amber-500/30 transition-all"
        onClick={() => setShowPanel(true)}
        title="View all levels"
      >
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-3">
            <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${currentTier.bgGradient} flex items-center justify-center text-lg font-bold shadow-lg`}>
              {currentTier.icon}
            </div>
            <div>
              <p className={`text-sm font-medium ${currentTier.color}`}>{currentTier.title}</p>
              <p className="text-xs text-slate-500">Level {level} &middot; {currentXp} / {needed} XP</p>
            </div>
          </div>
          <div className="text-right flex items-center gap-2">
            <div>
              <p className="text-lg font-bold text-amber-400">{xp.toLocaleString()}</p>
              <p className="text-xs text-slate-500">Total XP</p>
            </div>
            <ChevronRight size={16} className="text-slate-600" />
          </div>
        </div>
        <div className="h-3 bg-slate-700/50 rounded-full overflow-hidden">
          <div
            className={`h-full bg-gradient-to-r ${currentTier.bgGradient} rounded-full transition-all duration-700 ease-out relative`}
            style={{ width: `${progress}%` }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/20 rounded-full" />
          </div>
        </div>
      </div>

      <AnimatePresence>
        {showPanel && <LevelPanel level={level} xp={xp} currentTier={currentTier} onClose={() => setShowPanel(false)} panelRef={panelRef} />}
      </AnimatePresence>
    </>
  );
}

// ── Level Detail Panel (Modal) ──

function LevelPanel({
  level,
  xp,
  currentTier,
  onClose,
  panelRef,
}: {
  level: number;
  xp: number;
  currentTier: LevelTier;
  onClose: () => void;
  panelRef: React.RefObject<HTMLDivElement | null>;
}) {
  const currentXp = xpForCurrentLevel(xp);
  const needed = xpToNextLevel();
  const scrollRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to current level
  useEffect(() => {
    if (scrollRef.current) {
      const activeEl = scrollRef.current.querySelector('[data-active="true"]');
      if (activeEl) {
        activeEl.scrollIntoView({ block: 'center', behavior: 'smooth' });
      }
    }
  }, []);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        ref={panelRef}
        className="w-full max-w-lg max-h-[85vh] bg-slate-900 rounded-2xl border border-slate-700/50 shadow-2xl overflow-hidden flex flex-col"
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0, y: 20 }}
        transition={{ type: 'spring', damping: 25, stiffness: 350 }}
        onClick={e => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-5 border-b border-slate-800/60">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-lg font-bold flex items-center gap-2">
              <Trophy size={20} className="text-amber-400" />
              Level Overview
            </h2>
            <button onClick={onClose} className="w-8 h-8 rounded-lg bg-slate-800/50 flex items-center justify-center hover:bg-slate-700/50 transition-colors">
              <X size={16} />
            </button>
          </div>

          {/* Current status */}
          <div className="flex items-center gap-3 p-3 rounded-xl bg-gradient-to-r from-slate-800/80 to-slate-800/40 border border-slate-700/30">
            <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${currentTier.bgGradient} flex items-center justify-center text-2xl shadow-lg`}>
              {currentTier.icon}
            </div>
            <div className="flex-1">
              <p className={`font-bold ${currentTier.color}`}>{currentTier.title}</p>
              <p className="text-xs text-slate-500">Level {level}</p>
              <div className="flex items-center gap-2 mt-1">
                <div className="flex-1 h-2 bg-slate-700 rounded-full overflow-hidden">
                  <div
                    className={`h-full bg-gradient-to-r ${currentTier.bgGradient} rounded-full transition-all duration-500`}
                    style={{ width: `${(currentXp / needed) * 100}%` }}
                  />
                </div>
                <span className="text-[10px] text-slate-500 whitespace-nowrap">{currentXp}/{needed} XP</span>
              </div>
            </div>
            <div className="text-right">
              <p className="text-lg font-bold text-amber-400 flex items-center gap-1">
                <Zap size={14} />
                {xp.toLocaleString()}
              </p>
              <p className="text-[10px] text-slate-500">Total XP</p>
            </div>
          </div>
        </div>

        {/* Level list */}
        <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-1.5">
          {LEVEL_TIERS.map((tier, idx) => {
            const nextTier = LEVEL_TIERS[idx + 1];
            const tierXp = xpForLevel(tier.level);
            const nextTierXp = nextTier ? xpForLevel(nextTier.level) : Infinity;
            const isActive = level >= tier.level && (nextTier ? level < nextTier.level : true);
            const isUnlocked = level >= tier.level;
            const isNext = !isUnlocked && (idx === 0 || level >= LEVEL_TIERS[idx - 1].level);

            // Progress within this tier
            let tierProgress = 0;
            if (isActive) {
              const tierTotalXp = nextTierXp - tierXp;
              const tierCurrentXp = xp - tierXp;
              tierProgress = tierTotalXp > 0 ? Math.min(100, (tierCurrentXp / tierTotalXp) * 100) : 100;
            } else if (isUnlocked) {
              tierProgress = 100;
            }

            return (
              <div
                key={tier.level}
                data-active={isActive ? 'true' : 'false'}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all ${
                  isActive
                    ? `bg-gradient-to-r ${tier.bgGradient}/10 border ${tier.borderColor} ring-1 ring-current/10`
                    : isUnlocked
                    ? 'bg-slate-800/30 border border-transparent'
                    : 'bg-slate-800/10 border border-transparent opacity-50'
                }`}
              >
                {/* Icon */}
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center text-lg flex-shrink-0 ${
                  isActive ? `bg-gradient-to-br ${tier.bgGradient} shadow-lg` :
                  isUnlocked ? 'bg-slate-800/60' : 'bg-slate-800/30'
                }`}>
                  {isUnlocked ? tier.icon : '🔒'}
                </div>

                {/* Info */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <p className={`text-sm font-medium ${isActive ? tier.color : isUnlocked ? 'text-slate-300' : 'text-slate-600'}`}>
                      {tier.title}
                    </p>
                    {isActive && (
                      <span className="px-1.5 py-0.5 rounded text-[9px] bg-amber-500/20 text-amber-400 font-bold uppercase tracking-wider">
                        Current
                      </span>
                    )}
                    {isNext && (
                      <span className="px-1.5 py-0.5 rounded text-[9px] bg-slate-700/50 text-slate-400 font-medium">
                        Next
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] text-slate-500">
                      Lvl {tier.level}{nextTier ? `–${nextTier.level - 1}` : '+'}
                    </span>
                    <span className="text-[10px] text-slate-600">•</span>
                    <span className="text-[10px] text-slate-500">
                      {tierXp.toLocaleString()} XP
                      {nextTier && ` → ${(nextTierXp - 1).toLocaleString()} XP`}
                    </span>
                  </div>
                  {/* Progress bar for active tier */}
                  {(isActive || (isUnlocked && tierProgress > 0)) && (
                    <div className="h-1.5 bg-slate-700/40 rounded-full overflow-hidden mt-1">
                      <div
                        className={`h-full rounded-full transition-all duration-500 bg-gradient-to-r ${tier.bgGradient}`}
                        style={{ width: `${tierProgress}%` }}
                      />
                    </div>
                  )}
                </div>

                {/* XP badge */}
                <div className="text-right flex-shrink-0">
                  {isUnlocked ? (
                    <Star size={14} className={isActive ? 'text-amber-400' : 'text-slate-600'} fill={isActive ? 'currentColor' : 'none'} />
                  ) : (
                    <span className="text-[10px] text-slate-600">
                      {(tierXp - xp).toLocaleString()} XP
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-slate-800/60">
          <div className="flex items-center justify-between text-xs text-slate-500">
            <span>{XP_PER_LEVEL} XP per level</span>
            <span>Keep studying to level up!</span>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
