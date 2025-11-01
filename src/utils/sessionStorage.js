// Session & Boulder Logging Storage

const SESSIONS_KEY = 'boulderbuddy_sessions';
const BOULDERS_KEY = 'boulderbuddy_boulders';
const STRENGTH_TESTS_KEY = 'boulderbuddy_strength_tests';

// === SESSIONS ===

export const saveSessions = (sessions) => {
  localStorage.setItem(SESSIONS_KEY, JSON.stringify(sessions));
};

export const loadSessions = () => {
  const data = localStorage.getItem(SESSIONS_KEY);
  return data ? JSON.parse(data) : [];
};

export const createSession = (sessionData) => {
  const sessions = loadSessions();
  const newSession = {
    id: Date.now(),
    date: new Date().toISOString(),
    duration: 0, // in minutes
    feeling: 5, // 1-10
    boulders: [],
    notes: '',
    ...sessionData
  };
  sessions.unshift(newSession); // Add to beginning
  saveSessions(sessions);
  return newSession;
};

export const updateSession = (sessionId, updates) => {
  const sessions = loadSessions();
  const index = sessions.findIndex(s => s.id === sessionId);
  if (index !== -1) {
    sessions[index] = { ...sessions[index], ...updates };
    saveSessions(sessions);
    return sessions[index];
  }
  return null;
};

export const deleteSession = (sessionId) => {
  const sessions = loadSessions();
  const filtered = sessions.filter(s => s.id !== sessionId);
  saveSessions(filtered);
};

// === BOULDERS ===

export const saveBoulders = (boulders) => {
  localStorage.setItem(BOULDERS_KEY, JSON.stringify(boulders));
};

export const loadBoulders = () => {
  const data = localStorage.getItem(BOULDERS_KEY);
  return data ? JSON.parse(data) : [];
};

export const addBoulder = (boulderData) => {
  const boulders = loadBoulders();
  const newBoulder = {
    id: Date.now(),
    timestamp: new Date().toISOString(),
    grade: '5a',
    attempts: 1,
    sent: false,
    flash: false,
    feeling: 5, // 1-5 stars
    notes: '',
    photos: [],
    videos: [],
    ...boulderData
  };
  boulders.unshift(newBoulder);
  saveBoulders(boulders);
  return newBoulder;
};

export const updateBoulder = (boulderId, updates) => {
  const boulders = loadBoulders();
  const index = boulders.findIndex(b => b.id === boulderId);
  if (index !== -1) {
    boulders[index] = { ...boulders[index], ...updates };
    saveBoulders(boulders);
    return boulders[index];
  }
  return null;
};

export const deleteBoulder = (boulderId) => {
  const boulders = loadBoulders();
  const filtered = boulders.filter(b => b.id !== boulderId);
  saveBoulders(filtered);
};

// === STRENGTH TESTS ===

export const saveStrengthTests = (tests) => {
  localStorage.setItem(STRENGTH_TESTS_KEY, JSON.stringify(tests));
};

export const loadStrengthTests = () => {
  const data = localStorage.getItem(STRENGTH_TESTS_KEY);
  return data ? JSON.parse(data) : [];
};

export const addStrengthTest = (testData) => {
  const tests = loadStrengthTests();
  const newTest = {
    id: Date.now(),
    timestamp: new Date().toISOString(),
    type: 'max_hang', // max_hang, pullups, plank, etc.
    value: 0,
    unit: 'seconds',
    notes: '',
    ...testData
  };
  tests.unshift(newTest);
  saveStrengthTests(tests);
  return newTest;
};

// === STATISTICS ===

export const getSessionStats = () => {
  const sessions = loadSessions();
  const boulders = loadBoulders();
  
  if (sessions.length === 0) {
    return {
      totalSessions: 0,
      totalBoulders: 0,
      avgSessionDuration: 0,
      avgFeeling: 0,
      lastSession: null
    };
  }

  const totalDuration = sessions.reduce((sum, s) => sum + (s.duration || 0), 0);
  const totalFeeling = sessions.reduce((sum, s) => sum + (s.feeling || 5), 0);

  return {
    totalSessions: sessions.length,
    totalBoulders: boulders.length,
    avgSessionDuration: Math.round(totalDuration / sessions.length),
    avgFeeling: (totalFeeling / sessions.length).toFixed(1),
    lastSession: sessions[0]
  };
};

export const getBoulderStats = () => {
  const boulders = loadBoulders();
  
  if (boulders.length === 0) {
    return {
      total: 0,
      sent: 0,
      flashed: 0,
      sendRate: 0,
      flashRate: 0,
      gradeDistribution: {}
    };
  }

  const sent = boulders.filter(b => b.sent).length;
  const flashed = boulders.filter(b => b.flash).length;
  
  // Grade distribution
  const gradeDistribution = {};
  boulders.forEach(b => {
    const grade = b.grade || '?';
    gradeDistribution[grade] = (gradeDistribution[grade] || 0) + 1;
  });

  return {
    total: boulders.length,
    sent,
    flashed,
    sendRate: ((sent / boulders.length) * 100).toFixed(0),
    flashRate: ((flashed / boulders.length) * 100).toFixed(0),
    gradeDistribution
  };
};

export const getProgressData = () => {
  const boulders = loadBoulders();
  
  // Group by month
  const byMonth = {};
  boulders.forEach(b => {
    const date = new Date(b.timestamp);
    const monthKey = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}`;
    if (!byMonth[monthKey]) {
      byMonth[monthKey] = { count: 0, sent: 0 };
    }
    byMonth[monthKey].count++;
    if (b.sent) byMonth[monthKey].sent++;
  });

  return byMonth;
};

// === LESSON PROGRESS ===

const LESSON_PROGRESS_KEY = 'boulderbuddy_lesson_progress';

export const saveLessonProgress = (progress) => {
  localStorage.setItem(LESSON_PROGRESS_KEY, JSON.stringify(progress));
};

export const loadLessonProgress = () => {
  const data = localStorage.getItem(LESSON_PROGRESS_KEY);
  return data ? JSON.parse(data) : {};
};

export const markLessonComplete = (lessonId) => {
  const progress = loadLessonProgress();
  progress[lessonId] = {
    completed: true,
    timestamp: new Date().toISOString()
  };
  saveLessonProgress(progress);
  return progress;
};

export const markLessonIncomplete = (lessonId) => {
  const progress = loadLessonProgress();
  delete progress[lessonId];
  saveLessonProgress(progress);
  return progress;
};

export const isLessonComplete = (lessonId) => {
  const progress = loadLessonProgress();
  return progress[lessonId]?.completed || false;
};

export const getLessonProgressStats = (completed, totalLessons) => {
  const percentage = totalLessons > 0 ? Math.round((completed / totalLessons) * 100) : 0;
  
  return {
    completed,
    total: totalLessons,
    percentage
  };
};

// Grade conversion utilities
export const gradeValues = {
  '3a': 1, '3a+': 1.5, '3b': 2, '3b+': 2.5, '3c': 3, '3c+': 3.5,
  '4a': 4, '4a+': 4.5, '4b': 5, '4b+': 5.5, '4c': 6, '4c+': 6.5,
  '5a': 7, '5a+': 7.5, '5b': 8, '5b+': 8.5, '5c': 9, '5c+': 9.5,
  '6a': 10, '6a+': 10.5, '6b': 11, '6b+': 11.5, '6c': 12, '6c+': 12.5,
  '7a': 13, '7a+': 13.5, '7b': 14, '7b+': 14.5, '7c': 15, '7c+': 15.5,
  '8a': 16, '8a+': 16.5, '8b': 17, '8b+': 17.5, '8c': 18
};

export const getMaxGrade = () => {
  const boulders = loadBoulders();
  const sentBoulders = boulders.filter(b => b.sent);
  
  if (sentBoulders.length === 0) return null;
  
  let maxGrade = sentBoulders[0].grade;
  let maxValue = gradeValues[maxGrade] || 0;
  
  sentBoulders.forEach(b => {
    const value = gradeValues[b.grade] || 0;
    if (value > maxValue) {
      maxValue = value;
      maxGrade = b.grade;
    }
  });
  
  return maxGrade;
};

