// Storage utilities for LifeSkills Buddy tools

// === POMODORO ===
const POMODORO_SESSIONS_KEY = 'lifeskills_pomodoro_sessions';
const POMODORO_SETTINGS_KEY = 'lifeskills_pomodoro_settings';

export const savePomodoroSessions = (sessions) => {
  localStorage.setItem(POMODORO_SESSIONS_KEY, JSON.stringify(sessions));
};

export const loadPomodoroSessions = () => {
  const data = localStorage.getItem(POMODORO_SESSIONS_KEY);
  return data ? JSON.parse(data) : [];
};

export const addPomodoroSession = (sessionData) => {
  const sessions = loadPomodoroSessions();
  const newSession = {
    id: Date.now(),
    timestamp: new Date().toISOString(),
    task: '',
    duration: 0, // in minutes
    completed: false,
    ...sessionData
  };
  sessions.unshift(newSession);
  savePomodoroSessions(sessions);
  return newSession;
};

export const updatePomodoroSession = (sessionId, updates) => {
  const sessions = loadPomodoroSessions();
  const index = sessions.findIndex(s => s.id === sessionId);
  if (index !== -1) {
    sessions[index] = { ...sessions[index], ...updates };
    savePomodoroSessions(sessions);
    return sessions[index];
  }
  return null;
};

export const getPomodoroSettings = () => {
  const data = localStorage.getItem(POMODORO_SETTINGS_KEY);
  return data ? JSON.parse(data) : {
    workDuration: 25, // minutes
    shortBreak: 5,
    longBreak: 15,
    longBreakInterval: 4,
    soundEnabled: true
  };
};

export const savePomodoroSettings = (settings) => {
  localStorage.setItem(POMODORO_SETTINGS_KEY, JSON.stringify(settings));
};

export const getPomodoroStats = () => {
  const sessions = loadPomodoroSessions();
  const completed = sessions.filter(s => s.completed);
  
  // Calculate streak
  const sortedCompleted = completed
    .map(s => new Date(s.timestamp).toDateString())
    .filter((date, index, self) => self.indexOf(date) === index)
    .sort((a, b) => new Date(b) - new Date(a));
  
  let streak = 0;
  const today = new Date().toDateString();
  let checkDate = new Date();
  
  for (let i = 0; i < sortedCompleted.length; i++) {
    const dateStr = checkDate.toDateString();
    if (sortedCompleted.includes(dateStr)) {
      streak++;
      checkDate.setDate(checkDate.getDate() - 1);
    } else {
      break;
    }
  }
  
  // Calculate XP and Level
  const totalXP = completed.length * 10; // 10 XP per completed pomodoro
  let level = 1;
  let xpForCurrentLevel = 0;
  let xpForNextLevel = 100;
  
  for (let l = 1; l <= 100; l++) {
    const xpNeeded = l === 1 ? 0 : 100 * Math.pow(1.5, l - 2);
    const xpForLevel = l === 1 ? 100 : 100 * Math.pow(1.5, l - 1);
    
    if (totalXP >= xpNeeded && totalXP < xpNeeded + xpForLevel) {
      level = l;
      xpForCurrentLevel = totalXP - xpNeeded;
      xpForNextLevel = xpForLevel;
      break;
    }
  }
  
  // Calculate achievements
  const achievements = [];
  if (streak >= 3) achievements.push({ id: 'streak_3', name: { en: 'Getting Started', de: 'Erste Schritte' }, icon: '🔥' });
  if (streak >= 7) achievements.push({ id: 'streak_7', name: { en: 'Week Warrior', de: 'Wochenkrieger' }, icon: '💪' });
  if (streak >= 30) achievements.push({ id: 'streak_30', name: { en: 'Monthly Master', de: 'Monatsmeister' }, icon: '👑' });
  if (completed.length >= 10) achievements.push({ id: 'pomodoro_10', name: { en: 'First 10', de: 'Erste 10' }, icon: '🎯' });
  if (completed.length >= 50) achievements.push({ id: 'pomodoro_50', name: { en: 'Half Century', de: 'Halbes Jahrhundert' }, icon: '⭐' });
  if (completed.length >= 100) achievements.push({ id: 'pomodoro_100', name: { en: 'Centurion', de: 'Zenturio' }, icon: '🏆' });
  if (completed.length >= 500) achievements.push({ id: 'pomodoro_500', name: { en: 'Pomodoro Master', de: 'Pomodoro Meister' }, icon: '🌟' });
  
  return {
    totalSessions: sessions.length,
    completedSessions: completed.length,
    totalMinutes: completed.reduce((sum, s) => sum + (s.duration || 0), 0),
    todaySessions: completed.filter(s => {
      const date = new Date(s.timestamp);
      const today = new Date();
      return date.toDateString() === today.toDateString();
    }).length,
    weekSessions: completed.filter(s => {
      const date = new Date(s.timestamp);
      const weekAgo = new Date();
      weekAgo.setDate(weekAgo.getDate() - 7);
      return date >= weekAgo;
    }).length,
    streak,
    level,
    totalXP,
    xpForCurrentLevel,
    xpForNextLevel,
    achievements
  };
};

// === TIME AUDIT ===
const TIME_AUDIT_ENTRIES_KEY = 'lifeskills_time_audit_entries';

export const saveTimeAuditEntries = (entries) => {
  localStorage.setItem(TIME_AUDIT_ENTRIES_KEY, JSON.stringify(entries));
};

export const loadTimeAuditEntries = () => {
  const data = localStorage.getItem(TIME_AUDIT_ENTRIES_KEY);
  return data ? JSON.parse(data) : [];
};

export const addTimeAuditEntry = (entryData) => {
  const entries = loadTimeAuditEntries();
  const newEntry = {
    id: Date.now(),
    timestamp: new Date().toISOString(),
    category: '',
    activity: '',
    duration: 0, // in minutes
    ...entryData
  };
  entries.unshift(newEntry);
  saveTimeAuditEntries(entries);
  return newEntry;
};

export const updateTimeAuditEntry = (entryId, updates) => {
  const entries = loadTimeAuditEntries();
  const index = entries.findIndex(e => e.id === entryId);
  if (index !== -1) {
    entries[index] = { ...entries[index], ...updates };
    saveTimeAuditEntries(entries);
    return entries[index];
  }
  return null;
};

export const deleteTimeAuditEntry = (entryId) => {
  const entries = loadTimeAuditEntries();
  const filtered = entries.filter(e => e.id !== entryId);
  saveTimeAuditEntries(filtered);
};

export const getTimeAuditStats = (days = 7) => {
  const entries = loadTimeAuditEntries();
  const cutoff = new Date();
  cutoff.setDate(cutoff.getDate() - days);
  
  const recentEntries = entries.filter(e => new Date(e.timestamp) >= cutoff);
  
  // Group by category
  const byCategory = {};
  recentEntries.forEach(entry => {
    const cat = entry.category || 'Other';
    if (!byCategory[cat]) {
      byCategory[cat] = { total: 0, entries: [] };
    }
    byCategory[cat].total += entry.duration || 0;
    byCategory[cat].entries.push(entry);
  });
  
  // Group by day
  const byDay = {};
  recentEntries.forEach(entry => {
    const date = new Date(entry.timestamp);
    const dayKey = date.toISOString().split('T')[0];
    if (!byDay[dayKey]) {
      byDay[dayKey] = { total: 0, entries: [] };
    }
    byDay[dayKey].total += entry.duration || 0;
    byDay[dayKey].entries.push(entry);
  });

  // 24-hour circle diagram data
  // Create 24 hour slots (each hour = 60 minutes)
  const hourlyData = Array(24).fill(0).map(() => ({
    total: 0,
    entries: [],
    categories: {}
  }));

  recentEntries.forEach(entry => {
    if (entry.startTime && entry.endTime) {
      const start = new Date(entry.startTime);
      const end = new Date(entry.endTime);
      const startHour = start.getHours();
      const endHour = end.getHours();
      const startMinute = start.getMinutes();
      const endMinute = end.getMinutes();

      // Calculate minutes in each hour
      if (startHour === endHour) {
        // Same hour
        const minutes = endMinute - startMinute;
        hourlyData[startHour].total += minutes;
        hourlyData[startHour].entries.push(entry);
        const cat = entry.category || 'Other';
        hourlyData[startHour].categories[cat] = (hourlyData[startHour].categories[cat] || 0) + minutes;
      } else {
        // Span multiple hours
        // First hour
        const firstHourMinutes = 60 - startMinute;
        hourlyData[startHour].total += firstHourMinutes;
        hourlyData[startHour].entries.push(entry);
        const cat = entry.category || 'Other';
        hourlyData[startHour].categories[cat] = (hourlyData[startHour].categories[cat] || 0) + firstHourMinutes;

        // Middle hours
        for (let h = startHour + 1; h < endHour; h++) {
          hourlyData[h].total += 60;
          hourlyData[h].entries.push(entry);
          hourlyData[h].categories[cat] = (hourlyData[h].categories[cat] || 0) + 60;
        }

        // Last hour
        hourlyData[endHour].total += endMinute;
        hourlyData[endHour].entries.push(entry);
        hourlyData[endHour].categories[cat] = (hourlyData[endHour].categories[cat] || 0) + endMinute;
      }
    } else if (entry.duration) {
      // Fallback: if no start/end time, distribute evenly or use timestamp hour
      const entryDate = new Date(entry.timestamp);
      const hour = entryDate.getHours();
      hourlyData[hour].total += entry.duration;
      hourlyData[hour].entries.push(entry);
      const cat = entry.category || 'Other';
      hourlyData[hour].categories[cat] = (hourlyData[hour].categories[cat] || 0) + entry.duration;
    }
  });
  
  // Aggregate hourly data across all days (for 90-day overview)
  const aggregateHourlyData = Array(24).fill(0).map(() => ({
    total: 0,
    entries: [],
    categories: {}
  }));

  recentEntries.forEach(entry => {
    if (entry.startTime && entry.endTime) {
      const start = new Date(entry.startTime);
      const end = new Date(entry.endTime);
      const startHour = start.getHours();
      const endHour = end.getHours();
      const startMinute = start.getMinutes();
      const endMinute = end.getMinutes();

      if (startHour === endHour) {
        const minutes = endMinute - startMinute;
        aggregateHourlyData[startHour].total += minutes;
        aggregateHourlyData[startHour].entries.push(entry);
        const cat = entry.category || 'Other';
        aggregateHourlyData[startHour].categories[cat] = (aggregateHourlyData[startHour].categories[cat] || 0) + minutes;
      } else {
        const firstHourMinutes = 60 - startMinute;
        aggregateHourlyData[startHour].total += firstHourMinutes;
        aggregateHourlyData[startHour].entries.push(entry);
        const cat = entry.category || 'Other';
        aggregateHourlyData[startHour].categories[cat] = (aggregateHourlyData[startHour].categories[cat] || 0) + firstHourMinutes;

        for (let h = startHour + 1; h < endHour; h++) {
          aggregateHourlyData[h].total += 60;
          aggregateHourlyData[h].entries.push(entry);
          aggregateHourlyData[h].categories[cat] = (aggregateHourlyData[h].categories[cat] || 0) + 60;
        }

        aggregateHourlyData[endHour].total += endMinute;
        aggregateHourlyData[endHour].entries.push(entry);
        aggregateHourlyData[endHour].categories[cat] = (aggregateHourlyData[endHour].categories[cat] || 0) + endMinute;
      }
    } else if (entry.duration) {
      const entryDate = new Date(entry.timestamp);
      const hour = entryDate.getHours();
      aggregateHourlyData[hour].total += entry.duration;
      aggregateHourlyData[hour].entries.push(entry);
      const cat = entry.category || 'Other';
      aggregateHourlyData[hour].categories[cat] = (aggregateHourlyData[hour].categories[cat] || 0) + entry.duration;
    }
  });

  return {
    totalMinutes: recentEntries.reduce((sum, e) => sum + (e.duration || 0), 0),
    totalHours: (recentEntries.reduce((sum, e) => sum + (e.duration || 0), 0) / 60).toFixed(1),
    byCategory,
    byDay,
    hourlyData,
    aggregateHourlyData,
    totalEntries: recentEntries.length
  };
};

// Get hourly data for a specific day
export const getDayHourlyData = (date) => {
  const entries = loadTimeAuditEntries();
  const dayKey = date instanceof Date ? date.toISOString().split('T')[0] : date;
  
  const dayEntries = entries.filter(e => {
    const entryDate = new Date(e.timestamp).toISOString().split('T')[0];
    return entryDate === dayKey;
  });

  const hourlyData = Array(24).fill(0).map(() => ({
    total: 0,
    entries: [],
    categories: {}
  }));

  dayEntries.forEach(entry => {
    if (entry.startTime && entry.endTime) {
      const start = new Date(entry.startTime);
      const end = new Date(entry.endTime);
      const startHour = start.getHours();
      const endHour = end.getHours();
      const startMinute = start.getMinutes();
      const endMinute = end.getMinutes();

      if (startHour === endHour) {
        const minutes = endMinute - startMinute;
        hourlyData[startHour].total += minutes;
        hourlyData[startHour].entries.push(entry);
        const cat = entry.category || 'Other';
        hourlyData[startHour].categories[cat] = (hourlyData[startHour].categories[cat] || 0) + minutes;
      } else {
        const firstHourMinutes = 60 - startMinute;
        hourlyData[startHour].total += firstHourMinutes;
        hourlyData[startHour].entries.push(entry);
        const cat = entry.category || 'Other';
        hourlyData[startHour].categories[cat] = (hourlyData[startHour].categories[cat] || 0) + firstHourMinutes;

        for (let h = startHour + 1; h < endHour; h++) {
          hourlyData[h].total += 60;
          hourlyData[h].entries.push(entry);
          hourlyData[h].categories[cat] = (hourlyData[h].categories[cat] || 0) + 60;
        }

        hourlyData[endHour].total += endMinute;
        hourlyData[endHour].entries.push(entry);
        hourlyData[endHour].categories[cat] = (hourlyData[endHour].categories[cat] || 0) + endMinute;
      }
    } else if (entry.duration) {
      const entryDate = new Date(entry.timestamp);
      const hour = entryDate.getHours();
      hourlyData[hour].total += entry.duration;
      hourlyData[hour].entries.push(entry);
      const cat = entry.category || 'Other';
      hourlyData[hour].categories[cat] = (hourlyData[hour].categories[cat] || 0) + entry.duration;
    }
  });

  return hourlyData;
};

// === HABITS ===
const HABITS_KEY = 'lifeskills_habits';
const HABIT_LOGS_KEY = 'lifeskills_habit_logs';

export const saveHabits = (habits) => {
  localStorage.setItem(HABITS_KEY, JSON.stringify(habits));
};

export const loadHabits = () => {
  const data = localStorage.getItem(HABITS_KEY);
  return data ? JSON.parse(data) : [];
};

export const addHabit = (habitData) => {
  const habits = loadHabits();
  const newHabit = {
    id: Date.now(),
    name: '',
    description: '',
    color: '#eab308',
    frequency: 'daily', // daily, weekly
    createdAt: new Date().toISOString(),
    ...habitData
  };
  habits.push(newHabit);
  saveHabits(habits);
  return newHabit;
};

export const updateHabit = (habitId, updates) => {
  const habits = loadHabits();
  const index = habits.findIndex(h => h.id === habitId);
  if (index !== -1) {
    habits[index] = { ...habits[index], ...updates };
    saveHabits(habits);
    return habits[index];
  }
  return null;
};

export const deleteHabit = (habitId) => {
  const habits = loadHabits();
  const filtered = habits.filter(h => h.id !== habitId);
  saveHabits(filtered);
};

export const saveHabitLogs = (logs) => {
  localStorage.setItem(HABIT_LOGS_KEY, JSON.stringify(logs));
};

export const loadHabitLogs = () => {
  const data = localStorage.getItem(HABIT_LOGS_KEY);
  return data ? JSON.parse(data) : [];
};

export const logHabit = (habitId, date = new Date().toISOString().split('T')[0]) => {
  const logs = loadHabitLogs();
  const logKey = `${habitId}-${date}`;
  const existing = logs.find(l => l.key === logKey);
  
  if (existing) {
    return existing; // Already logged
  }
  
  const newLog = {
    key: logKey,
    habitId,
    date,
    timestamp: new Date().toISOString()
  };
  logs.push(newLog);
  saveHabitLogs(logs);
  return newLog;
};

export const unlogHabit = (habitId, date) => {
  const logs = loadHabitLogs();
  const logKey = `${habitId}-${date}`;
  const filtered = logs.filter(l => l.key !== logKey);
  saveHabitLogs(filtered);
};

export const isHabitLogged = (habitId, date = new Date().toISOString().split('T')[0]) => {
  const logs = loadHabitLogs();
  const logKey = `${habitId}-${date}`;
  return logs.some(l => l.key === logKey);
};

export const getHabitStats = (habitId) => {
  const logs = loadHabitLogs();
  const habitLogs = logs.filter(l => l.habitId === habitId);
  
  // Get streak
  let streak = 0;
  const sortedLogs = habitLogs.sort((a, b) => new Date(b.date) - new Date(a.date));
  const today = new Date().toISOString().split('T')[0];
  
  for (let i = 0; i < sortedLogs.length; i++) {
    const expectedDate = new Date();
    expectedDate.setDate(expectedDate.getDate() - i);
    const expectedDateStr = expectedDate.toISOString().split('T')[0];
    
    if (sortedLogs[i]?.date === expectedDateStr) {
      streak++;
    } else {
      break;
    }
  }
  
  return {
    totalCompletions: habitLogs.length,
    streak,
    thisWeek: habitLogs.filter(l => {
      const logDate = new Date(l.date);
      const weekAgo = new Date();
      weekAgo.setDate(weekAgo.getDate() - 7);
      return logDate >= weekAgo;
    }).length,
    thisMonth: habitLogs.filter(l => {
      const logDate = new Date(l.date);
      const monthAgo = new Date();
      monthAgo.setMonth(monthAgo.getMonth() - 1);
      return logDate >= monthAgo;
    }).length
  };
};

// === GOALS ===
const GOALS_KEY = 'lifeskills_goals';

export const saveGoals = (goals) => {
  localStorage.setItem(GOALS_KEY, JSON.stringify(goals));
};

export const loadGoals = () => {
  const data = localStorage.getItem(GOALS_KEY);
  return data ? JSON.parse(data) : [];
};

export const addGoal = (goalData) => {
  const goals = loadGoals();
  const newGoal = {
    id: Date.now(),
    title: '',
    description: '',
    targetDate: null,
    progress: 0, // 0-100
    status: 'active', // active, completed, paused
    milestones: [],
    createdAt: new Date().toISOString(),
    ...goalData
  };
  goals.push(newGoal);
  saveGoals(goals);
  return newGoal;
};

export const updateGoal = (goalId, updates) => {
  const goals = loadGoals();
  const index = goals.findIndex(g => g.id === goalId);
  if (index !== -1) {
    goals[index] = { ...goals[index], ...updates };
    saveGoals(goals);
    return goals[index];
  }
  return null;
};

export const deleteGoal = (goalId) => {
  const goals = loadGoals();
  const filtered = goals.filter(g => g.id !== goalId);
  saveGoals(filtered);
};

// === REFLECTION ===
const REFLECTIONS_KEY = 'lifeskills_reflections';

export const saveReflections = (reflections) => {
  localStorage.setItem(REFLECTIONS_KEY, JSON.stringify(reflections));
};

export const loadReflections = () => {
  const data = localStorage.getItem(REFLECTIONS_KEY);
  return data ? JSON.parse(data) : [];
};

export const addReflection = (reflectionData) => {
  const reflections = loadReflections();
  const newReflection = {
    id: Date.now(),
    timestamp: new Date().toISOString(),
    answers: {},
    notes: '',
    ...reflectionData
  };
  reflections.unshift(newReflection);
  saveReflections(reflections);
  return newReflection;
};

export const updateReflection = (reflectionId, updates) => {
  const reflections = loadReflections();
  const index = reflections.findIndex(r => r.id === reflectionId);
  if (index !== -1) {
    reflections[index] = { ...reflections[index], ...updates };
    saveReflections(reflections);
    return reflections[index];
  }
  return null;
};

export const deleteReflection = (reflectionId) => {
  const reflections = loadReflections();
  const filtered = reflections.filter(r => r.id !== reflectionId);
  saveReflections(filtered);
};

// === DAY PLANNER ===
const DAY_PLANNER_KEY = 'lifeskills_day_planner';

// Get week key from date (Monday of the week)
export const getWeekKey = (date = new Date()) => {
  const d = new Date(date);
  const day = d.getDay();
  const diff = d.getDate() - day + (day === 0 ? -6 : 1); // Monday as start
  const monday = new Date(d.setDate(diff));
  return monday.toISOString().split('T')[0];
};

export const saveDayPlans = (plans) => {
  localStorage.setItem(DAY_PLANNER_KEY, JSON.stringify(plans));
};

export const loadDayPlans = () => {
  const data = localStorage.getItem(DAY_PLANNER_KEY);
  return data ? JSON.parse(data) : {};
};

export const updateDayPlan = (dayOfWeek, slots, weekKey = null) => {
  const plans = loadDayPlans();
  const week = weekKey || getWeekKey();
  
  if (!plans[week]) {
    plans[week] = {};
  }
  plans[week][dayOfWeek] = slots;
  saveDayPlans(plans);
  return plans[week][dayOfWeek];
};

export const getDayPlan = (dayOfWeek, weekKey = null) => {
  const plans = loadDayPlans();
  const week = weekKey || getWeekKey();
  
  // If current week has no data, try to get from a previous week (template)
  if (!plans[week] || !plans[week][dayOfWeek]) {
    // Find the most recent week with data for this day
    const allWeeks = Object.keys(plans).sort().reverse();
    for (const w of allWeeks) {
      if (plans[w] && plans[w][dayOfWeek] && plans[w][dayOfWeek].length > 0) {
        // Copy the template to current week
        if (!plans[week]) {
          plans[week] = {};
        }
        plans[week][dayOfWeek] = JSON.parse(JSON.stringify(plans[w][dayOfWeek]));
        saveDayPlans(plans);
        return plans[week][dayOfWeek];
      }
    }
    return [];
  }
  return plans[week][dayOfWeek];
};

export const getWeekPlan = (weekKey = null) => {
  const plans = loadDayPlans();
  const week = weekKey || getWeekKey();
  
  return plans[week] || {};
};

export const getAllWeeks = () => {
  const plans = loadDayPlans();
  return Object.keys(plans).sort().reverse();
};

