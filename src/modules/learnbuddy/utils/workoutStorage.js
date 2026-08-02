// LocalStorage utilities for workouts and history

const WORKOUTS_KEY = 'boulderbuddy_workouts';
const HISTORY_KEY = 'boulderbuddy_exercise_history';

// === WORKOUTS (Custom Workout Sets) ===

export const saveWorkouts = (workouts) => {
  localStorage.setItem(WORKOUTS_KEY, JSON.stringify(workouts));
};

export const loadWorkouts = () => {
  const data = localStorage.getItem(WORKOUTS_KEY);
  return data ? JSON.parse(data) : [];
};

export const addWorkout = (workout) => {
  const workouts = loadWorkouts();
  const newWorkout = {
    ...workout,
    id: Date.now(),
    createdAt: new Date().toISOString()
  };
  workouts.push(newWorkout);
  saveWorkouts(workouts);
  return newWorkout;
};

export const updateWorkout = (id, updates) => {
  const workouts = loadWorkouts();
  const index = workouts.findIndex(w => w.id === id);
  if (index !== -1) {
    workouts[index] = { ...workouts[index], ...updates };
    saveWorkouts(workouts);
    return workouts[index];
  }
  return null;
};

export const deleteWorkout = (id) => {
  const workouts = loadWorkouts();
  const filtered = workouts.filter(w => w.id !== id);
  saveWorkouts(filtered);
};

// === EXERCISE HISTORY (Logging) ===

export const saveExerciseHistory = (exerciseId, data) => {
  const history = loadExerciseHistory();
  
  if (!history[exerciseId]) {
    history[exerciseId] = [];
  }
  
  history[exerciseId].push({
    ...data,
    timestamp: new Date().toISOString()
  });
  
  // Keep only last 100 entries per exercise
  if (history[exerciseId].length > 100) {
    history[exerciseId] = history[exerciseId].slice(-100);
  }
  
  localStorage.setItem(HISTORY_KEY, JSON.stringify(history));
};

export const loadExerciseHistory = () => {
  const data = localStorage.getItem(HISTORY_KEY);
  return data ? JSON.parse(data) : {};
};

export const getLastExerciseData = (exerciseId) => {
  const history = loadExerciseHistory();
  const exerciseHistory = history[exerciseId];
  
  if (!exerciseHistory || exerciseHistory.length === 0) {
    return null;
  }
  
  return exerciseHistory[exerciseHistory.length - 1];
};

export const getExerciseStats = (exerciseId) => {
  const history = loadExerciseHistory();
  const exerciseHistory = history[exerciseId];
  
  if (!exerciseHistory || exerciseHistory.length === 0) {
    return null;
  }
  
  const stats = {
    total: exerciseHistory.length,
    lastDate: exerciseHistory[exerciseHistory.length - 1].timestamp,
    best: null,
    average: null
  };
  
  // Calculate best & average based on type
  const values = exerciseHistory.map(h => {
    if (h.reps) return h.reps;
    if (h.duration) return h.duration;
    return 0;
  }).filter(v => v > 0);
  
  if (values.length > 0) {
    stats.best = Math.max(...values);
    stats.average = Math.round(values.reduce((a, b) => a + b, 0) / values.length);
  }
  
  return stats;
};

// === WORKOUT SESSION HISTORY ===

const SESSIONS_KEY = 'boulderbuddy_workout_sessions';

export const saveWorkoutSession = (workoutId, workoutName, exercises) => {
  const sessions = loadWorkoutSessions();
  
  const session = {
    id: Date.now(),
    workoutId,
    workoutName,
    exercises,
    timestamp: new Date().toISOString(),
    duration: null // Could be calculated
  };
  
  sessions.push(session);
  
  // Keep only last 50 sessions
  if (sessions.length > 50) {
    sessions.shift();
  }
  
  localStorage.setItem(SESSIONS_KEY, JSON.stringify(sessions));
  return session;
};

export const loadWorkoutSessions = () => {
  const data = localStorage.getItem(SESSIONS_KEY);
  return data ? JSON.parse(data) : [];
};

export const getWorkoutSessionStats = (workoutId) => {
  const sessions = loadWorkoutSessions();
  const workoutSessions = sessions.filter(s => s.workoutId === workoutId);
  
  if (workoutSessions.length === 0) {
    return null;
  }
  
  return {
    total: workoutSessions.length,
    lastDate: workoutSessions[workoutSessions.length - 1].timestamp,
    lastSession: workoutSessions[workoutSessions.length - 1]
  };
};

