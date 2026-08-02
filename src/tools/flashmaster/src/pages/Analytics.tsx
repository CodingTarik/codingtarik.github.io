import { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLiveQuery } from 'dexie-react-hooks';
import {
  ArrowLeft,
  TrendingUp,
  Target,
  Award,
  Clock,
  Zap,
  BookOpen,
  Activity,
  Timer,
  Calendar,
  BarChart3,
  LineChart as LineChartIcon,
  Percent,
  Brain,
} from 'lucide-react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  AreaChart,
  Area,
  LineChart,
  Line,
} from 'recharts';
import { format, subDays, subMonths, addDays, startOfWeek, differenceInDays } from 'date-fns';
import { db } from '../lib/db';
import { useT } from '../lib/i18n';
import type { UserStats } from '../types';
import { MATURE_INTERVAL } from '../lib/srs';
import XPBar from '../components/XPBar';
import StreakTracker from '../components/StreakTracker';

interface Props {
  stats: UserStats | null;
}

export default function Analytics({ stats }: Props) {
  const { t } = useT();
  const navigate = useNavigate();
  const reviewLogs = useLiveQuery(() => db.reviewLogs.toArray());
  const cards = useLiveQuery(() => db.cards.toArray());

  // Compute chart data
  const last7DaysData = useMemo(() => {
    if (!reviewLogs) return [];
    const days = [];
    for (let i = 6; i >= 0; i--) {
      const date = format(subDays(new Date(), i), 'yyyy-MM-dd');
      const dayLabel = format(subDays(new Date(), i), 'EEE');
      const dayLogs = reviewLogs.filter(l =>
        format(new Date(l.reviewedAt), 'yyyy-MM-dd') === date
      );
      const histEntry = stats?.studyHistory?.[date];
      const totalMinutes = Math.round((histEntry?.timeMs || 0) / 60000);
      const activeMinutes = Math.round((histEntry?.activeTimeMs || 0) / 60000);
      const idleMinutes = Math.max(0, totalMinutes - activeMinutes);
      days.push({
        day: dayLabel,
        date,
        cards: dayLogs.length,
        xp: stats?.weeklyXpHistory[date] || 0,
        avgTime: dayLogs.length > 0
          ? Math.round(dayLogs.reduce((sum, l) => sum + l.timeTaken, 0) / dayLogs.length / 1000)
          : 0,
        totalMinutes,
        activeMinutes,
        idleMinutes,
      });
    }
    return days;
  }, [reviewLogs, stats]);

  const cardStatusData = useMemo(() => {
    if (!cards) return [];
    const counts: Record<string, number> = {};
    for (const card of cards) {
      counts[card.status] = (counts[card.status] || 0) + 1;
    }
    return [
      { name: t('status.new'), value: counts['new'] || 0, color: '#3b82f6' },
      { name: t('status.learning'), value: counts['learning'] || 0, color: '#f97316' },
      { name: t('status.review'), value: counts['review'] || 0, color: '#22c55e' },
      { name: t('status.relearning'), value: counts['relearning'] || 0, color: '#eab308' },
      { name: t('status.suspended'), value: counts['suspended'] || 0, color: '#64748b' },
    ].filter(d => d.value > 0);
  }, [cards, t]);

  const ratingDistribution = useMemo(() => {
    if (!reviewLogs) return [];
    const counts: Record<string, number> = {};
    for (const log of reviewLogs) {
      counts[log.rating] = (counts[log.rating] || 0) + 1;
    }
    return [
      { name: t('rating.again'), value: counts['again'] || 0, color: '#ef4444' },
      { name: t('rating.hard'), value: counts['hard'] || 0, color: '#f97316' },
      { name: t('rating.good'), value: counts['good'] || 0, color: '#22c55e' },
      { name: t('rating.easy'), value: counts['easy'] || 0, color: '#3b82f6' },
    ];
  }, [reviewLogs, t]);

  // ── Review Heatmap (last 365 days) ──
  const heatmapData = useMemo(() => {
    if (!reviewLogs) return [];
    const countByDate: Record<string, number> = {};
    for (const log of reviewLogs) {
      const d = format(new Date(log.reviewedAt), 'yyyy-MM-dd');
      countByDate[d] = (countByDate[d] || 0) + 1;
    }
    const result: { date: string; count: number; weekday: number; week: number }[] = [];
    const today = new Date();
    const start = subDays(today, 364);
    const startWeek = startOfWeek(start, { weekStartsOn: 1 });
    for (let i = 0; i <= differenceInDays(today, startWeek); i++) {
      const d = addDays(startWeek, i);
      const dateStr = format(d, 'yyyy-MM-dd');
      const weekday = d.getDay() === 0 ? 6 : d.getDay() - 1; // Mon=0..Sun=6
      const week = Math.floor(differenceInDays(d, startWeek) / 7);
      result.push({ date: dateStr, count: countByDate[dateStr] || 0, weekday, week });
    }
    return result;
  }, [reviewLogs]);

  const heatmapMax = useMemo(() => Math.max(1, ...heatmapData.map(d => d.count)), [heatmapData]);

  // ── Retention Rate ──
  const retentionRate = useMemo(() => {
    if (!reviewLogs || reviewLogs.length === 0) return null;
    const passed = reviewLogs.filter(l => l.rating !== 'again').length;
    return Math.round((passed / reviewLogs.length) * 100);
  }, [reviewLogs]);

  const matureRetentionRate = useMemo(() => {
    if (!reviewLogs || !cards) return null;
    const matureIds = new Set(cards.filter(c => c.interval >= MATURE_INTERVAL).map(c => c.id));
    const matureLogs = reviewLogs.filter(l => matureIds.has(l.cardId));
    if (matureLogs.length === 0) return null;
    const passed = matureLogs.filter(l => l.rating !== 'again').length;
    return Math.round((passed / matureLogs.length) * 100);
  }, [reviewLogs, cards]);

  // ── Future Due Forecast (next 30 days) ──
  const futureDueData = useMemo(() => {
    if (!cards) return [];
    const result: { day: string; count: number }[] = [];
    const today = new Date();
    for (let i = 0; i < 30; i++) {
      const d = addDays(today, i);
      const dayStart = new Date(d.getFullYear(), d.getMonth(), d.getDate()).getTime();
      const dayEnd = dayStart + 24 * 60 * 60 * 1000;
      const count = cards.filter(c =>
        (c.status === 'review' || c.status === 'learning' || c.status === 'relearning') &&
        c.dueDate >= dayStart && c.dueDate < dayEnd
      ).length;
      result.push({ day: format(d, i < 7 ? 'EEE' : 'MMM d'), count });
    }
    return result;
  }, [cards]);

  // ── Interval Distribution ──
  const intervalDistribution = useMemo(() => {
    if (!cards) return [];
    const buckets: Record<string, number> = {
      '0d': 0, '1d': 0, '2-3d': 0, '4-7d': 0, '1-2w': 0,
      '2w-1m': 0, '1-3m': 0, '3-6m': 0, '6m-1y': 0, '1y+': 0,
    };
    for (const c of cards) {
      if (c.status === 'new' || c.status === 'suspended') continue;
      const iv = c.interval;
      if (iv < 1) buckets['0d']++;
      else if (iv === 1) buckets['1d']++;
      else if (iv <= 3) buckets['2-3d']++;
      else if (iv <= 7) buckets['4-7d']++;
      else if (iv <= 14) buckets['1-2w']++;
      else if (iv <= 30) buckets['2w-1m']++;
      else if (iv <= 90) buckets['1-3m']++;
      else if (iv <= 180) buckets['3-6m']++;
      else if (iv <= 365) buckets['6m-1y']++;
      else buckets['1y+']++;
    }
    return Object.entries(buckets).map(([name, value]) => ({ name, value }));
  }, [cards]);

  // ── Ease Factor Distribution ──
  const easeDistribution = useMemo(() => {
    if (!cards) return [];
    const buckets: Record<string, number> = {};
    for (const c of cards) {
      if (c.status === 'new' || c.status === 'suspended') continue;
      const bucket = (Math.round(c.ease * 10) / 10).toFixed(1);
      buckets[bucket] = (buckets[bucket] || 0) + 1;
    }
    return Object.entries(buckets)
      .sort(([a], [b]) => parseFloat(a) - parseFloat(b))
      .map(([name, value]) => ({ name, value }));
  }, [cards]);

  // ── Hourly Review Breakdown ──
  const hourlyBreakdown = useMemo(() => {
    if (!reviewLogs) return [];
    const hours: number[] = new Array(24).fill(0);
    for (const log of reviewLogs) {
      const h = new Date(log.reviewedAt).getHours();
      hours[h]++;
    }
    return hours.map((count, hour) => ({ hour: `${hour}:00`, count }));
  }, [reviewLogs]);

  // ── Card Maturity ──
  const maturityStats = useMemo(() => {
    if (!cards) return { newCount: 0, young: 0, mature: 0, suspended: 0, buried: 0 };
    let newCount = 0, young = 0, mature = 0, suspended = 0, buried = 0;
    for (const c of cards) {
      if (c.status === 'suspended') { suspended++; continue; }
      if (c.status === 'buried') { buried++; continue; }
      if (c.status === 'new') { newCount++; continue; }
      if (c.interval >= MATURE_INTERVAL) mature++;
      else young++;
    }
    return { newCount, young, mature, suspended, buried };
  }, [cards]);

  // ── Average answer time ──
  const avgAnswerTime = useMemo(() => {
    if (!reviewLogs || reviewLogs.length === 0) return 0;
    const total = reviewLogs.reduce((sum, l) => sum + l.timeTaken, 0);
    return Math.round(total / reviewLogs.length / 1000 * 10) / 10;
  }, [reviewLogs]);

  const totalTime = stats?.totalTimeStudied || 0;
  const totalActive = stats?.totalActiveTime || 0;
  const totalIdle = Math.max(0, totalTime - totalActive);
  const hours = Math.floor(totalTime / 3600000);
  const minutes = Math.floor((totalTime % 3600000) / 60000);
  const activeHours = Math.floor(totalActive / 3600000);
  const activeMinutes = Math.floor((totalActive % 3600000) / 60000);
  const idleHours = Math.floor(totalIdle / 3600000);
  const idleMinutes = Math.floor((totalIdle % 3600000) / 60000);
  const focusPercent = totalTime > 0 ? Math.round((totalActive / totalTime) * 100) : 0;

  // Today's time
  const todayStr = format(new Date(), 'yyyy-MM-dd');
  const todayEntry = stats?.studyHistory?.[todayStr];
  const todayTotalMin = Math.round((todayEntry?.timeMs || 0) / 60000);
  const todayActiveMin = Math.round((todayEntry?.activeTimeMs || 0) / 60000);
  const todayIdleMin = Math.max(0, todayTotalMin - todayActiveMin);

  return (
    <div className="max-w-4xl mx-auto px-4 py-6">
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <button
          onClick={() => navigate('/')}
          className="w-10 h-10 rounded-xl bg-slate-800/50 flex items-center justify-center hover:bg-slate-700/50 transition-colors"
        >
          <ArrowLeft size={20} />
        </button>
        <div>
          <h1 className="text-2xl font-bold">{t('analytics.title')}</h1>
          <p className="text-sm text-slate-400">{t('analytics.subtitle')}</p>
        </div>
      </div>

      {/* XP Bar */}
      {stats && (
        <div className="mb-6">
          <XPBar xp={stats.xp} level={stats.level} />
        </div>
      )}

      {/* Streak Tracker (full) */}
      {stats && (
        <div className="mb-6">
          <StreakTracker stats={stats} />
        </div>
      )}

      {/* Quick Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
        <QuickStat
          icon={<BookOpen size={18} />}
          label={t('analytics.totalReviews')}
          value={reviewLogs?.length || 0}
          color="text-blue-400"
        />
        <QuickStat
          icon={<Target size={18} />}
          label={t('analytics.totalCards')}
          value={cards?.length || 0}
          color="text-emerald-400"
        />
        <QuickStat
          icon={<Clock size={18} />}
          label={t('analytics.timeStudied')}
          value={`${hours}h ${minutes}m`}
          color="text-purple-400"
          subtitle={`Active: ${activeHours}h ${activeMinutes}m`}
        />
        <QuickStat
          icon={<Zap size={18} />}
          label="Total XP"
          value={stats?.xp?.toLocaleString() || '0'}
          color="text-amber-400"
        />
      </div>

      {/* Time Tracking Section */}
      <div className="glass-card rounded-2xl p-5 mb-6">
        <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
          <Timer size={18} className="text-cyan-400" />
          {t('time.title')}
        </h2>

        {/* Today's time */}
        <div className="grid grid-cols-3 gap-3 mb-5">
          <div className="rounded-xl bg-slate-800/40 p-3 text-center">
            <p className="text-xs text-slate-500 mb-1">{t('time.todayTotal')}</p>
            <p className="text-lg font-bold text-slate-200">{todayTotalMin}m</p>
          </div>
          <div className="rounded-xl bg-emerald-500/10 p-3 text-center">
            <p className="text-xs text-emerald-400/70 mb-1">{t('time.active')}</p>
            <p className="text-lg font-bold text-emerald-400">{todayActiveMin}m</p>
          </div>
          <div className="rounded-xl bg-slate-500/10 p-3 text-center">
            <p className="text-xs text-slate-500 mb-1">{t('time.idle')}</p>
            <p className="text-lg font-bold text-slate-400">{todayIdleMin}m</p>
          </div>
        </div>

        {/* Focus score */}
        <div className="mb-5">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-slate-400 flex items-center gap-1.5">
              <Activity size={14} className="text-emerald-400" />
              {t('time.focusScore')}
            </span>
            <span className={`text-sm font-bold ${focusPercent >= 70 ? 'text-emerald-400' : focusPercent >= 40 ? 'text-amber-400' : 'text-red-400'}`}>
              {focusPercent}%
            </span>
          </div>
          <div className="h-2.5 bg-slate-800 rounded-full overflow-hidden">
            <div
              className={`h-full rounded-full transition-all duration-500 ${
                focusPercent >= 70 ? 'bg-emerald-500' : focusPercent >= 40 ? 'bg-amber-500' : 'bg-red-500'
              }`}
              style={{ width: `${focusPercent}%` }}
            />
          </div>
          <p className="text-[10px] text-slate-600 mt-1">
            {focusPercent >= 70 ? t('time.focusExcellent') : focusPercent >= 40 ? t('time.focusGood') : t('time.focusLow')}
          </p>
        </div>

        {/* Weekly active vs idle time chart */}
        <h3 className="text-sm font-semibold mb-3 text-slate-300">{t('time.weeklyChart')}</h3>
        <div className="h-48">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={last7DaysData}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(99,102,241,0.1)" />
              <XAxis dataKey="day" stroke="#64748b" fontSize={12} />
              <YAxis stroke="#64748b" fontSize={12} unit="m" />
              <Tooltip
                contentStyle={{
                  background: '#1e293b',
                  border: '1px solid rgba(99,102,241,0.2)',
                  borderRadius: '12px',
                  color: '#e2e8f0',
                }}
                formatter={(value: number, name: string) => [`${value} min`, name]}
              />
              <Bar dataKey="activeMinutes" name={t('time.active')} fill="#22c55e" stackId="time" radius={[0, 0, 0, 0]} />
              <Bar dataKey="idleMinutes" name={t('time.idle')} fill="#475569" stackId="time" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="flex items-center justify-center gap-4 mt-2">
          <div className="flex items-center gap-1.5 text-xs">
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
            <span className="text-slate-400">{t('time.active')}</span>
          </div>
          <div className="flex items-center gap-1.5 text-xs">
            <div className="w-2.5 h-2.5 rounded-full bg-slate-600" />
            <span className="text-slate-400">{t('time.idle')}</span>
          </div>
        </div>

        {/* Lifetime totals */}
        <div className="grid grid-cols-3 gap-3 mt-5 pt-4 border-t border-slate-800/50">
          <div className="text-center">
            <p className="text-xs text-slate-500 mb-0.5">{t('time.lifetimeTotal')}</p>
            <p className="text-sm font-bold">{hours}h {minutes}m</p>
          </div>
          <div className="text-center">
            <p className="text-xs text-emerald-400/60 mb-0.5">{t('time.lifetimeActive')}</p>
            <p className="text-sm font-bold text-emerald-400">{activeHours}h {activeMinutes}m</p>
          </div>
          <div className="text-center">
            <p className="text-xs text-slate-500 mb-0.5">{t('time.lifetimeIdle')}</p>
            <p className="text-sm font-bold text-slate-400">{idleHours}h {idleMinutes}m</p>
          </div>
        </div>
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        {/* Weekly Activity */}
        <div className="glass-card rounded-2xl p-5">
          <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
            <TrendingUp size={18} className="text-emerald-400" />
            Weekly Reviews
          </h2>
          <div className="h-48">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={last7DaysData}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(99,102,241,0.1)" />
                <XAxis dataKey="day" stroke="#64748b" fontSize={12} />
                <YAxis stroke="#64748b" fontSize={12} />
                <Tooltip
                  contentStyle={{
                    background: '#1e293b',
                    border: '1px solid rgba(99,102,241,0.2)',
                    borderRadius: '12px',
                    color: '#e2e8f0',
                  }}
                />
                <Bar dataKey="cards" fill="#6366f1" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* XP Trend */}
        <div className="glass-card rounded-2xl p-5">
          <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
            <Zap size={18} className="text-amber-400" />
            {t('analytics.xpEarned')}
          </h2>
          <div className="h-48">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={last7DaysData}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(99,102,241,0.1)" />
                <XAxis dataKey="day" stroke="#64748b" fontSize={12} />
                <YAxis stroke="#64748b" fontSize={12} />
                <Tooltip
                  contentStyle={{
                    background: '#1e293b',
                    border: '1px solid rgba(99,102,241,0.2)',
                    borderRadius: '12px',
                    color: '#e2e8f0',
                  }}
                />
                <Area
                  type="monotone"
                  dataKey="xp"
                  stroke="#f59e0b"
                  fill="rgba(245,158,11,0.1)"
                  strokeWidth={2}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Pie Charts Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        {/* Card Status */}
        <div className="glass-card rounded-2xl p-5">
          <h2 className="text-lg font-bold mb-4">{t('analytics.statusDist')}</h2>
          <div className="h-48 flex items-center">
            {cardStatusData.length > 0 ? (
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={cardStatusData}
                    cx="50%"
                    cy="50%"
                    innerRadius={50}
                    outerRadius={70}
                    dataKey="value"
                    paddingAngle={3}
                  >
                    {cardStatusData.map((entry, index) => (
                      <Cell key={index} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip
                    contentStyle={{
                      background: '#1e293b',
                      border: '1px solid rgba(99,102,241,0.2)',
                      borderRadius: '12px',
                      color: '#e2e8f0',
                    }}
                  />
                </PieChart>
              </ResponsiveContainer>
            ) : (
              <p className="text-slate-400 text-sm text-center w-full">{t('analytics.noCards')}</p>
            )}
          </div>
          <div className="flex flex-wrap gap-3 justify-center mt-2">
            {cardStatusData.map(d => (
              <div key={d.name} className="flex items-center gap-1.5 text-xs">
                <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: d.color }} />
                <span className="text-slate-400">{d.name}: {d.value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Rating Distribution */}
        <div className="glass-card rounded-2xl p-5">
          <h2 className="text-lg font-bold mb-4">{t('analytics.ratingDist')}</h2>
          <div className="h-48">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={ratingDistribution} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(99,102,241,0.1)" />
                <XAxis type="number" stroke="#64748b" fontSize={12} />
                <YAxis type="category" dataKey="name" stroke="#64748b" fontSize={12} width={50} />
                <Tooltip
                  contentStyle={{
                    background: '#1e293b',
                    border: '1px solid rgba(99,102,241,0.2)',
                    borderRadius: '12px',
                    color: '#e2e8f0',
                  }}
                />
                <Bar dataKey="value" radius={[0, 4, 4, 0]}>
                  {ratingDistribution.map((entry, index) => (
                    <Cell key={index} fill={entry.color} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* ── Review Heatmap (GitHub-style) ── */}
      <div className="glass-card rounded-2xl p-5 mb-6">
        <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
          <Calendar size={18} className="text-emerald-400" />
          Review Heatmap (last year)
        </h2>
        <div className="overflow-x-auto pb-2">
          <div className="inline-flex gap-px" style={{ minWidth: '720px' }}>
            {(() => {
              // Group by week
              const weeks = new Map<number, typeof heatmapData>();
              heatmapData.forEach(d => {
                const w = weeks.get(d.week) || [];
                w.push(d);
                weeks.set(d.week, w);
              });
              return [...weeks.entries()].map(([week, days]) => (
                <div key={week} className="flex flex-col gap-px">
                  {days.map(d => {
                    const intensity = d.count === 0 ? 0 : Math.min(4, Math.ceil((d.count / heatmapMax) * 4));
                    const colors = ['bg-slate-800/50', 'bg-emerald-900/50', 'bg-emerald-700/60', 'bg-emerald-500/70', 'bg-emerald-400'];
                    const today = format(new Date(), 'yyyy-MM-dd');
                    return (
                      <div
                        key={d.date}
                        className={`w-3 h-3 rounded-[2px] ${colors[intensity]} ${d.date === today ? 'ring-1 ring-white/30' : ''}`}
                        title={`${d.date}: ${d.count} reviews`}
                      />
                    );
                  })}
                </div>
              ));
            })()}
          </div>
        </div>
        <div className="flex items-center gap-2 mt-3 text-[10px] text-slate-500">
          <span>Less</span>
          <div className="w-3 h-3 rounded-[2px] bg-slate-800/50" />
          <div className="w-3 h-3 rounded-[2px] bg-emerald-900/50" />
          <div className="w-3 h-3 rounded-[2px] bg-emerald-700/60" />
          <div className="w-3 h-3 rounded-[2px] bg-emerald-500/70" />
          <div className="w-3 h-3 rounded-[2px] bg-emerald-400" />
          <span>More</span>
        </div>
      </div>

      {/* ── Retention & Maturity Stats ── */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
        <QuickStat
          icon={<Percent size={18} />}
          label="Retention Rate"
          value={retentionRate !== null ? `${retentionRate}%` : '—'}
          color={retentionRate !== null && retentionRate >= 80 ? 'text-emerald-400' : retentionRate !== null && retentionRate >= 60 ? 'text-amber-400' : 'text-red-400'}
          subtitle={matureRetentionRate !== null ? `Mature: ${matureRetentionRate}%` : undefined}
        />
        <QuickStat
          icon={<Brain size={18} />}
          label="Mature Cards"
          value={maturityStats.mature}
          color="text-purple-400"
          subtitle={`Young: ${maturityStats.young}`}
        />
        <QuickStat
          icon={<Timer size={18} />}
          label="Avg Answer Time"
          value={`${avgAnswerTime}s`}
          color="text-cyan-400"
        />
        <QuickStat
          icon={<Target size={18} />}
          label="Total Lapses"
          value={cards?.reduce((sum, c) => sum + c.lapses, 0) || 0}
          color="text-red-400"
          subtitle={`Leeches: ${cards?.filter(c => c.isLeech).length || 0}`}
        />
      </div>

      {/* ── Future Due Forecast ── */}
      <div className="glass-card rounded-2xl p-5 mb-6">
        <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
          <LineChartIcon size={18} className="text-blue-400" />
          Future Due (Next 30 Days)
        </h2>
        <div className="h-48">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={futureDueData}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(99,102,241,0.1)" />
              <XAxis dataKey="day" stroke="#64748b" fontSize={10} interval="preserveStartEnd" />
              <YAxis stroke="#64748b" fontSize={12} />
              <Tooltip
                contentStyle={{
                  background: '#1e293b',
                  border: '1px solid rgba(99,102,241,0.2)',
                  borderRadius: '12px',
                  color: '#e2e8f0',
                }}
              />
              <Bar dataKey="count" fill="#3b82f6" radius={[2, 2, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* ── Interval Distribution & Ease Distribution ── */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        {/* Interval Distribution */}
        <div className="glass-card rounded-2xl p-5">
          <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
            <BarChart3 size={18} className="text-teal-400" />
            Interval Distribution
          </h2>
          <div className="h-48">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={intervalDistribution}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(99,102,241,0.1)" />
                <XAxis dataKey="name" stroke="#64748b" fontSize={10} angle={-45} textAnchor="end" height={50} />
                <YAxis stroke="#64748b" fontSize={12} />
                <Tooltip
                  contentStyle={{
                    background: '#1e293b',
                    border: '1px solid rgba(99,102,241,0.2)',
                    borderRadius: '12px',
                    color: '#e2e8f0',
                  }}
                />
                <Bar dataKey="value" fill="#14b8a6" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Ease Factor Distribution */}
        <div className="glass-card rounded-2xl p-5">
          <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
            <Activity size={18} className="text-violet-400" />
            Ease Factor Distribution
          </h2>
          <div className="h-48">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={easeDistribution}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(99,102,241,0.1)" />
                <XAxis dataKey="name" stroke="#64748b" fontSize={10} />
                <YAxis stroke="#64748b" fontSize={12} />
                <Tooltip
                  contentStyle={{
                    background: '#1e293b',
                    border: '1px solid rgba(99,102,241,0.2)',
                    borderRadius: '12px',
                    color: '#e2e8f0',
                  }}
                />
                <Bar dataKey="value" fill="#8b5cf6" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* ── Hourly Review Breakdown ── */}
      <div className="glass-card rounded-2xl p-5 mb-6">
        <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
          <Clock size={18} className="text-amber-400" />
          Reviews by Hour of Day
        </h2>
        <div className="h-48">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={hourlyBreakdown}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(99,102,241,0.1)" />
              <XAxis dataKey="hour" stroke="#64748b" fontSize={10} interval={2} />
              <YAxis stroke="#64748b" fontSize={12} />
              <Tooltip
                contentStyle={{
                  background: '#1e293b',
                  border: '1px solid rgba(99,102,241,0.2)',
                  borderRadius: '12px',
                  color: '#e2e8f0',
                }}
              />
              <Area
                type="monotone"
                dataKey="count"
                stroke="#f59e0b"
                fill="rgba(245,158,11,0.15)"
                strokeWidth={2}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* ── Card Maturity Breakdown ── */}
      <div className="glass-card rounded-2xl p-5 mb-6">
        <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
          <Brain size={18} className="text-purple-400" />
          Card Maturity
        </h2>
        <div className="h-12 flex rounded-xl overflow-hidden mb-3">
          {[
            { label: 'New', value: maturityStats.newCount, color: 'bg-blue-500' },
            { label: 'Young', value: maturityStats.young, color: 'bg-orange-500' },
            { label: 'Mature', value: maturityStats.mature, color: 'bg-emerald-500' },
            { label: 'Suspended', value: maturityStats.suspended, color: 'bg-slate-600' },
          ].filter(s => s.value > 0).map(s => {
            const total = (cards?.length || 1);
            const pct = Math.max(2, (s.value / total) * 100);
            return (
              <div
                key={s.label}
                className={`${s.color} flex items-center justify-center text-xs font-bold transition-all`}
                style={{ width: `${pct}%` }}
                title={`${s.label}: ${s.value} (${Math.round(s.value / total * 100)}%)`}
              >
                {pct > 8 && <span>{s.value}</span>}
              </div>
            );
          })}
        </div>
        <div className="flex flex-wrap gap-3 justify-center">
          {[
            { label: 'New', value: maturityStats.newCount, color: 'text-blue-400', bg: 'bg-blue-500/15' },
            { label: `Young (<${MATURE_INTERVAL}d)`, value: maturityStats.young, color: 'text-orange-400', bg: 'bg-orange-500/15' },
            { label: `Mature (≥${MATURE_INTERVAL}d)`, value: maturityStats.mature, color: 'text-emerald-400', bg: 'bg-emerald-500/15' },
            { label: 'Suspended', value: maturityStats.suspended, color: 'text-slate-400', bg: 'bg-slate-500/15' },
          ].map(s => (
            <span key={s.label} className={`${s.color} ${s.bg} text-xs px-2.5 py-1 rounded-full font-medium`}>
              {s.label}: {s.value}
            </span>
          ))}
        </div>
      </div>

      {/* Achievements */}
      {stats && (
        <div className="glass-card rounded-2xl p-5">
          <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
            <Award size={18} className="text-amber-400" />
            Achievements ({stats.achievements.filter(a => a.unlockedAt).length}/{stats.achievements.length})
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {stats.achievements.map(a => (
              <div
                key={a.id}
                className={`rounded-xl p-4 text-center transition-all
                  ${a.unlockedAt
                    ? 'glass-card border-amber-500/20'
                    : 'bg-slate-800/30 opacity-40'
                  }`}
              >
                <span className="text-3xl block mb-2">{a.icon}</span>
                <p className="text-sm font-medium">{a.name}</p>
                <p className="text-xs text-slate-400 mt-0.5">{a.description}</p>
                {a.unlockedAt && (
                  <p className="text-[10px] text-amber-400/60 mt-1">
                    {format(new Date(a.unlockedAt), 'MMM d, yyyy')}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function QuickStat({ icon, label, value, color, subtitle }: {
  icon: React.ReactNode;
  label: string;
  value: string | number;
  color: string;
  subtitle?: string;
}) {
  return (
    <div className="glass-card rounded-xl p-4">
      <div className={`mb-2 ${color}`}>{icon}</div>
      <p className="text-xl font-bold">{value}</p>
      <p className="text-xs text-slate-400">{label}</p>
      {subtitle && <p className="text-[10px] text-emerald-400/60 mt-0.5">{subtitle}</p>}
    </div>
  );
}
