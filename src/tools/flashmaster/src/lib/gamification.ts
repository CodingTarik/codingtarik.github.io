import { format, subDays, differenceInCalendarDays, parseISO } from 'date-fns';
import { db } from './db';
import {
  ACHIEVEMENTS_LIST,
  XP_PER_CARD,
  XP_STREAK_BONUS,
  XP_PER_LEVEL,
  type UserStats,
  type Achievement,
  type Rating,
  type DailyStudyEntry,
} from '../types';

// ── Helpers ──

function today(): string {
  return format(new Date(), 'yyyy-MM-dd');
}

/**
 * Compute current & longest streak from the studyHistory map.
 * This is the canonical streak calculation -- works correctly after sync merge.
 */
export function computeStreaksFromHistory(
  studyHistory: Record<string, DailyStudyEntry>
): { currentStreak: number; longestStreak: number } {
  if (!studyHistory || Object.keys(studyHistory).length === 0) {
    return { currentStreak: 0, longestStreak: 0 };
  }

  // Sort all study dates descending
  const dates = Object.keys(studyHistory)
    .filter(d => studyHistory[d].cards > 0) // only count days with actual reviews
    .sort()
    .reverse();

  if (dates.length === 0) return { currentStreak: 0, longestStreak: 0 };

  const todayStr = today();
  const yesterdayStr = format(subDays(new Date(), 1), 'yyyy-MM-dd');

  // Current streak: count consecutive days back from today (or yesterday)
  let currentStreak = 0;
  const startDate = dates[0] === todayStr ? todayStr : (dates[0] === yesterdayStr ? yesterdayStr : null);

  if (startDate) {
    let checkDate = parseISO(startDate);
    while (true) {
      const dateStr = format(checkDate, 'yyyy-MM-dd');
      if (studyHistory[dateStr] && studyHistory[dateStr].cards > 0) {
        currentStreak++;
        checkDate = subDays(checkDate, 1);
      } else {
        break;
      }
    }
  }

  // Longest streak: scan all dates sorted ascending
  const datesAsc = [...dates].reverse();
  let longestStreak = 0;
  let runLength = 1;

  for (let i = 1; i < datesAsc.length; i++) {
    const prev = parseISO(datesAsc[i - 1]);
    const curr = parseISO(datesAsc[i]);
    const diff = differenceInCalendarDays(curr, prev);
    if (diff === 1) {
      runLength++;
    } else {
      longestStreak = Math.max(longestStreak, runLength);
      runLength = 1;
    }
  }
  longestStreak = Math.max(longestStreak, runLength);

  return { currentStreak, longestStreak };
}

// ── Stats CRUD ──

export async function getOrCreateStats(): Promise<UserStats> {
  let stats = await db.userStats.get('main');
  if (!stats) {
    stats = {
      id: 'main',
      xp: 0,
      level: 1,
      currentStreak: 0,
      longestStreak: 0,
      lastStudyDate: '',
      totalCardsStudied: 0,
      totalTimeStudied: 0,
      achievements: ACHIEVEMENTS_LIST.map(a => ({ ...a })),
      dailyGoal: 20,
      weeklyXpHistory: {},
      studyHistory: {},
    };
    await db.userStats.put(stats);
  }

  // Ensure studyHistory exists (migration for existing users)
  if (!stats.studyHistory) {
    stats.studyHistory = {};
    // Migrate weeklyXpHistory into studyHistory
    if (stats.weeklyXpHistory) {
      for (const [date, xp] of Object.entries(stats.weeklyXpHistory)) {
        stats.studyHistory[date] = {
          cards: Math.round(xp / XP_PER_CARD) || 0,
          xp,
          timeMs: 0,
        };
      }
    }
    await db.userStats.put(stats);
  }

  // Recompute streaks from history (ensures correctness after sync)
  const streaks = computeStreaksFromHistory(stats.studyHistory);
  if (streaks.currentStreak !== stats.currentStreak || streaks.longestStreak !== stats.longestStreak) {
    stats.currentStreak = streaks.currentStreak;
    stats.longestStreak = streaks.longestStreak;
    await db.userStats.put(stats);
  }

  return stats;
}

export function calculateLevel(xp: number): number {
  return Math.floor(xp / XP_PER_LEVEL) + 1;
}

export function xpForCurrentLevel(xp: number): number {
  return xp % XP_PER_LEVEL;
}

export function xpToNextLevel(): number {
  return XP_PER_LEVEL;
}

export async function recordStudySession(
  _rating: Rating,
  xpEarned: number,
  timeTaken: number
): Promise<{ stats: UserStats; newAchievements: Achievement[] }> {
  const stats = await getOrCreateStats();
  const todayStr = today();

  // Initialize studyHistory if missing
  if (!stats.studyHistory) stats.studyHistory = {};

  // Update studyHistory for today
  const todayEntry = stats.studyHistory[todayStr] || { cards: 0, xp: 0, timeMs: 0 };
  todayEntry.cards += 1;
  todayEntry.timeMs += timeTaken;

  // Compute XP
  const streakBonus = Math.min(stats.currentStreak, 30) * XP_STREAK_BONUS;
  const totalXp = xpEarned + Math.floor(streakBonus / 10);
  todayEntry.xp += totalXp;
  stats.studyHistory[todayStr] = todayEntry;

  // Update legacy fields
  stats.lastStudyDate = todayStr;

  // Recompute streaks from history
  const streaks = computeStreaksFromHistory(stats.studyHistory);
  stats.currentStreak = streaks.currentStreak;
  stats.longestStreak = streaks.longestStreak;

  // Update XP & level
  stats.xp += totalXp;
  stats.level = calculateLevel(stats.xp);

  // Weekly XP history (keep for backward compat)
  stats.weeklyXpHistory[todayStr] = (stats.weeklyXpHistory[todayStr] || 0) + totalXp;

  // Update totals
  stats.totalCardsStudied += 1;
  stats.totalTimeStudied += timeTaken;

  // Check achievements
  const newAchievements: Achievement[] = [];
  for (const achievement of stats.achievements) {
    if (!achievement.unlockedAt) {
      if (checkAchievementCondition(achievement, stats)) {
        achievement.unlockedAt = Date.now();
        newAchievements.push(achievement);
      }
    }
  }

  await db.userStats.put(stats);
  return { stats, newAchievements };
}

function checkAchievementCondition(achievement: Achievement, stats: UserStats): boolean {
  const { condition } = achievement;
  try {
    const fn = new Function(
      'totalCardsStudied',
      'currentStreak',
      'level',
      'totalTimeStudied',
      `return ${condition};`
    );
    return fn(stats.totalCardsStudied, stats.currentStreak, stats.level, stats.totalTimeStudied);
  } catch {
    return false;
  }
}

export function getXpForRating(rating: Rating): number {
  switch (rating) {
    case 'easy': return XP_PER_CARD + 5;
    case 'good': return XP_PER_CARD;
    case 'hard': return XP_PER_CARD - 2;
    case 'again': return 5;
  }
}
