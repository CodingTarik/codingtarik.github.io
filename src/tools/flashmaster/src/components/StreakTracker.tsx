import { useMemo } from 'react';
import { format, subDays, startOfWeek, addDays, parseISO, isToday } from 'date-fns';
import { Flame, Calendar, Trophy, TrendingUp, Target } from 'lucide-react';
import { motion } from 'framer-motion';
import type { UserStats, DailyStudyEntry } from '../types';

interface Props {
  stats: UserStats;
  compact?: boolean; // compact mode for dashboard
}

export default function StreakTracker({ stats, compact = false }: Props) {
  const history = stats.studyHistory || {};

  const todayStr = format(new Date(), 'yyyy-MM-dd');
  const studiedToday = history[todayStr] && history[todayStr].cards > 0;

  // ── Calendar heatmap (last 90 days for full, 35 for compact) ──
  const days = compact ? 35 : 90;
  const heatmapData = useMemo(() => {
    const data: { date: string; count: number; xp: number; timeMs: number; isToday: boolean }[] = [];
    for (let i = days - 1; i >= 0; i--) {
      const d = subDays(new Date(), i);
      const dateStr = format(d, 'yyyy-MM-dd');
      const entry = history[dateStr];
      data.push({
        date: dateStr,
        count: entry?.cards || 0,
        xp: entry?.xp || 0,
        timeMs: entry?.timeMs || 0,
        isToday: isToday(d),
      });
    }
    return data;
  }, [history, days]);

  const maxCount = Math.max(...heatmapData.map(d => d.count), 1);

  // ── Weekly grid (GitHub-style) for full view ──
  const weekGrid = useMemo(() => {
    if (compact) return [];
    // Start from the Monday of the week 90 days ago
    const startDate = startOfWeek(subDays(new Date(), days - 1), { weekStartsOn: 1 });
    const endDate = new Date();
    const weeks: { date: string; count: number; xp: number; isToday: boolean }[][] = [];
    let currentWeek: typeof weeks[0] = [];
    let d = startDate;

    while (d <= endDate) {
      const dateStr = format(d, 'yyyy-MM-dd');
      const entry = history[dateStr];
      currentWeek.push({
        date: dateStr,
        count: entry?.cards || 0,
        xp: entry?.xp || 0,
        isToday: isToday(d),
      });
      if (currentWeek.length === 7) {
        weeks.push(currentWeek);
        currentWeek = [];
      }
      d = addDays(d, 1);
    }
    if (currentWeek.length > 0) weeks.push(currentWeek);
    return weeks;
  }, [history, compact, days]);

  // ── Stats summary ──
  const thisWeekCards = useMemo(() => {
    let total = 0;
    for (let i = 0; i < 7; i++) {
      const dateStr = format(subDays(new Date(), i), 'yyyy-MM-dd');
      total += history[dateStr]?.cards || 0;
    }
    return total;
  }, [history]);

  const thisMonthCards = useMemo(() => {
    let total = 0;
    for (let i = 0; i < 30; i++) {
      const dateStr = format(subDays(new Date(), i), 'yyyy-MM-dd');
      total += history[dateStr]?.cards || 0;
    }
    return total;
  }, [history]);

  const activeDaysCount = Object.values(history).filter(e => e.cards > 0).length;

  // ── Color intensity ──
  function getHeatColor(count: number): string {
    if (count === 0) return 'rgba(30, 41, 59, 0.5)';
    const intensity = Math.min(count / maxCount, 1);
    // Warm orange-red gradient for streak theme
    if (intensity < 0.25) return 'rgba(251, 146, 60, 0.25)';
    if (intensity < 0.5) return 'rgba(251, 146, 60, 0.45)';
    if (intensity < 0.75) return 'rgba(249, 115, 22, 0.65)';
    return 'rgba(234, 88, 12, 0.85)';
  }

  // ── Compact mode (for Dashboard) ──
  if (compact) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass-card rounded-2xl p-4"
      >
        {/* Streak header */}
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <div
              className="relative"
              style={{
                filter: `drop-shadow(0 0 ${6 + Math.min(stats.currentStreak / 30, 1) * 10}px rgba(251, 146, 60, ${0.3 + Math.min(stats.currentStreak / 30, 1) * 0.5}))`,
              }}
            >
              <Flame
                size={22}
                className="text-orange-400"
                fill={stats.currentStreak > 0 ? 'rgba(251, 146, 60, 0.7)' : 'none'}
              />
            </div>
            <div>
              <span className="text-lg font-bold text-orange-400">{stats.currentStreak}</span>
              <span className="text-xs text-slate-400 ml-1.5">day streak</span>
            </div>
          </div>
          {studiedToday ? (
            <span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-400">
              Done today
            </span>
          ) : (
            <span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-amber-500/15 text-amber-400 animate-pulse">
              Study to keep streak!
            </span>
          )}
        </div>

        {/* Mini heatmap (last 5 weeks as a row) */}
        <div className="flex gap-[3px] flex-wrap">
          {heatmapData.map((d, i) => (
            <div
              key={i}
              className={`w-[14px] h-[14px] rounded-[3px] transition-colors ${
                d.isToday ? 'ring-1 ring-orange-400/50' : ''
              }`}
              style={{ backgroundColor: getHeatColor(d.count) }}
              title={`${format(parseISO(d.date), 'MMM d')}: ${d.count} cards`}
            />
          ))}
        </div>

        {/* Quick stats row */}
        <div className="flex items-center gap-4 mt-3 text-xs">
          <span className="text-slate-500">Best: <span className="text-slate-300 font-medium">{stats.longestStreak}d</span></span>
          <span className="text-slate-500">Week: <span className="text-slate-300 font-medium">{thisWeekCards}</span></span>
          <span className="text-slate-500">Month: <span className="text-slate-300 font-medium">{thisMonthCards}</span></span>
        </div>
      </motion.div>
    );
  }

  // ── Full mode (for Analytics) ──
  return (
    <div className="space-y-4">
      {/* Streak Hero Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="glass-card rounded-2xl p-6 relative overflow-hidden"
      >
        {/* Background glow */}
        {stats.currentStreak > 0 && (
          <div
            className="absolute inset-0 opacity-10"
            style={{
              background: `radial-gradient(ellipse at 30% 50%, rgba(251, 146, 60, ${Math.min(stats.currentStreak / 30, 1) * 0.4}), transparent 60%)`,
            }}
          />
        )}

        <div className="relative flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div
              className="relative"
              style={{
                filter: `drop-shadow(0 0 ${8 + Math.min(stats.currentStreak / 30, 1) * 14}px rgba(251, 146, 60, ${0.4 + Math.min(stats.currentStreak / 30, 1) * 0.5}))`,
              }}
            >
              <Flame
                size={40}
                className="text-orange-400"
                fill={stats.currentStreak > 0 ? `rgba(251, 146, 60, ${0.5 + Math.min(stats.currentStreak / 30, 1) * 0.5})` : 'none'}
              />
            </div>
            <div>
              <p className="text-4xl font-bold text-orange-400">{stats.currentStreak}</p>
              <p className="text-sm text-slate-400">day streak</p>
            </div>
          </div>

          <div className="text-right space-y-1">
            {studiedToday ? (
              <span className="text-xs font-medium px-3 py-1 rounded-full bg-emerald-500/15 text-emerald-400 inline-flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" /> Studied today
              </span>
            ) : (
              <span className="text-xs font-medium px-3 py-1 rounded-full bg-amber-500/15 text-amber-400 animate-pulse">
                Study today to keep your streak!
              </span>
            )}
            <p className="text-xs text-slate-500">Best: {stats.longestStreak} days</p>
          </div>
        </div>
      </motion.div>

      {/* Stats Grid */}
      <div className="grid grid-cols-4 gap-3">
        <StreakStat icon={<Flame size={16} />} label="Current" value={`${stats.currentStreak}d`} color="text-orange-400" />
        <StreakStat icon={<Trophy size={16} />} label="Best" value={`${stats.longestStreak}d`} color="text-amber-400" />
        <StreakStat icon={<TrendingUp size={16} />} label="This Week" value={String(thisWeekCards)} color="text-emerald-400" />
        <StreakStat icon={<Target size={16} />} label="Active Days" value={String(activeDaysCount)} color="text-primary-400" />
      </div>

      {/* GitHub-style calendar heatmap */}
      <div className="glass-card rounded-2xl p-5">
        <h3 className="text-sm font-bold mb-3 flex items-center gap-2 text-slate-300">
          <Calendar size={15} className="text-orange-400" />
          Study Calendar
          <span className="text-xs text-slate-500 font-normal ml-auto">Last {days} days</span>
        </h3>

        {/* Day labels */}
        <div className="flex gap-1">
          <div className="flex flex-col gap-[3px] mr-1 text-[9px] text-slate-600">
            <span className="h-[13px] leading-[13px]">M</span>
            <span className="h-[13px] leading-[13px]">T</span>
            <span className="h-[13px] leading-[13px]">W</span>
            <span className="h-[13px] leading-[13px]">T</span>
            <span className="h-[13px] leading-[13px]">F</span>
            <span className="h-[13px] leading-[13px]">S</span>
            <span className="h-[13px] leading-[13px]">S</span>
          </div>

          {/* Weeks */}
          <div className="flex gap-[3px] flex-1 overflow-x-auto">
            {weekGrid.map((week, wi) => (
              <div key={wi} className="flex flex-col gap-[3px]">
                {week.map((day, di) => (
                  <div
                    key={di}
                    className={`w-[13px] h-[13px] rounded-[2px] transition-colors ${
                      day.isToday ? 'ring-1 ring-orange-400/60' : ''
                    }`}
                    style={{ backgroundColor: getHeatColor(day.count) }}
                    title={`${format(parseISO(day.date), 'MMM d, yyyy')}: ${day.count} cards, ${day.xp} XP`}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Legend */}
        <div className="flex items-center justify-end gap-1.5 mt-3 text-[10px] text-slate-500">
          <span>Less</span>
          <div className="w-[10px] h-[10px] rounded-[2px]" style={{ backgroundColor: 'rgba(30, 41, 59, 0.5)' }} />
          <div className="w-[10px] h-[10px] rounded-[2px]" style={{ backgroundColor: 'rgba(251, 146, 60, 0.25)' }} />
          <div className="w-[10px] h-[10px] rounded-[2px]" style={{ backgroundColor: 'rgba(251, 146, 60, 0.45)' }} />
          <div className="w-[10px] h-[10px] rounded-[2px]" style={{ backgroundColor: 'rgba(249, 115, 22, 0.65)' }} />
          <div className="w-[10px] h-[10px] rounded-[2px]" style={{ backgroundColor: 'rgba(234, 88, 12, 0.85)' }} />
          <span>More</span>
        </div>
      </div>
    </div>
  );
}

function StreakStat({ icon, label, value, color }: {
  icon: React.ReactNode;
  label: string;
  value: string;
  color: string;
}) {
  return (
    <div className="glass-card rounded-xl p-3 text-center">
      <div className={`flex justify-center mb-1 ${color}`}>{icon}</div>
      <p className="text-lg font-bold">{value}</p>
      <p className="text-[10px] text-slate-500">{label}</p>
    </div>
  );
}
