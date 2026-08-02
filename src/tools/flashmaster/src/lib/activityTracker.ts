/**
 * Activity Tracker — tracks active vs idle time on the site.
 *
 * "Active" = user moved mouse, typed, scrolled, touched screen, or clicked
 * in the last IDLE_THRESHOLD_MS. Otherwise considered idle.
 *
 * Persists cumulative active time and total time per day to IndexedDB.
 */

import { format } from 'date-fns';
import { db } from './db';

const IDLE_THRESHOLD_MS = 60_000; // 60 seconds of no activity = idle
const TICK_INTERVAL_MS = 5_000;   // check every 5 seconds

let lastActivityAt = Date.now();
let sessionStartedAt = Date.now();
let tickInterval: ReturnType<typeof setInterval> | null = null;
let isRunning = false;

// Accumulated time since last flush
let pendingTotalMs = 0;
let pendingActiveMs = 0;
let lastTickAt = Date.now();

/** Record user activity (mouse, keyboard, touch, scroll) */
function onActivity() {
  lastActivityAt = Date.now();
}

/** Called every TICK_INTERVAL_MS to accumulate time */
function tick() {
  const now = Date.now();
  const elapsed = now - lastTickAt;
  lastTickAt = now;

  // Cap elapsed to prevent huge jumps (e.g. laptop sleep)
  const capped = Math.min(elapsed, TICK_INTERVAL_MS * 3);
  pendingTotalMs += capped;

  // Check if user was active during this interval
  const isActive = (now - lastActivityAt) < IDLE_THRESHOLD_MS;
  if (isActive) {
    pendingActiveMs += capped;
  }

  // Flush to DB every 30 seconds
  if (pendingTotalMs >= 30_000) {
    flush();
  }
}

/** Write accumulated time to the database */
async function flush() {
  if (pendingTotalMs === 0 && pendingActiveMs === 0) return;

  const totalToAdd = pendingTotalMs;
  const activeToAdd = pendingActiveMs;
  pendingTotalMs = 0;
  pendingActiveMs = 0;

  try {
    const todayStr = format(new Date(), 'yyyy-MM-dd');
    const stats = await db.userStats.get('main');
    if (!stats) return;

    // Update global totals
    const newTotalTime = (stats.totalTimeStudied || 0) + totalToAdd;
    const newActiveTime = (stats.totalActiveTime || 0) + activeToAdd;

    // Update daily entry
    const history = stats.studyHistory || {};
    const todayEntry = history[todayStr] || { cards: 0, xp: 0, timeMs: 0 };
    todayEntry.timeMs = (todayEntry.timeMs || 0) + totalToAdd;
    todayEntry.activeTimeMs = (todayEntry.activeTimeMs || 0) + activeToAdd;
    history[todayStr] = todayEntry;

    await db.userStats.update('main', {
      totalTimeStudied: newTotalTime,
      totalActiveTime: newActiveTime,
      studyHistory: history,
    });
  } catch {
    // Silently ignore DB errors
  }
}

/** Start tracking */
export function startActivityTracking() {
  if (isRunning) return;
  isRunning = true;
  sessionStartedAt = Date.now();
  lastTickAt = Date.now();
  lastActivityAt = Date.now();

  // Listen for user activity events
  const events = ['mousemove', 'mousedown', 'keydown', 'touchstart', 'scroll', 'pointerdown', 'wheel'];
  events.forEach(evt => {
    window.addEventListener(evt, onActivity, { passive: true });
  });

  // Start the tick timer
  tickInterval = setInterval(tick, TICK_INTERVAL_MS);

  // Flush before page unload
  window.addEventListener('beforeunload', flush);
  document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'hidden') {
      flush();
    }
  });
}

/** Stop tracking and flush remaining data */
export function stopActivityTracking() {
  if (!isRunning) return;
  isRunning = false;
  if (tickInterval) {
    clearInterval(tickInterval);
    tickInterval = null;
  }
  tick(); // final tick
  flush();

  const events = ['mousemove', 'mousedown', 'keydown', 'touchstart', 'scroll', 'pointerdown', 'wheel'];
  events.forEach(evt => {
    window.removeEventListener(evt, onActivity);
  });
}

/** Get current session duration in ms */
export function getSessionDuration(): number {
  return Date.now() - sessionStartedAt;
}

/** Check if user is currently idle */
export function isIdle(): boolean {
  return (Date.now() - lastActivityAt) >= IDLE_THRESHOLD_MS;
}
