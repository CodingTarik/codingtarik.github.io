const STORAGE_KEYS = {
  WORKOUTS: 'gymbuddy_workouts',
  HISTORY: 'gymbuddy_history',
  SETTINGS: 'gymbuddy_settings'
};

// Workouts
export const getWorkouts = () => {
  try {
    const data = localStorage.getItem(STORAGE_KEYS.WORKOUTS);
    return data ? JSON.parse(data) : [];
  } catch (e) {
    console.error('Error loading workouts', e);
    return [];
  }
};

// Simple UUID generator to avoid crypto.randomUUID compatibility issues
const generateId = () => {
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
};

export const saveWorkout = (workout) => {
  const workouts = getWorkouts();
  if (workout.id) {
    const index = workouts.findIndex(w => w.id === workout.id);
    if (index >= 0) {
      workouts[index] = { ...workout, updatedAt: new Date().toISOString() };
    } else {
      workouts.push({ ...workout, updatedAt: new Date().toISOString() });
    }
  } else {
    workouts.push({
      ...workout,
      id: generateId(),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    });
  }
  localStorage.setItem(STORAGE_KEYS.WORKOUTS, JSON.stringify(workouts));
  return workouts;
};

export const deleteWorkout = (id) => {
  const workouts = getWorkouts().filter(w => w.id !== id);
  localStorage.setItem(STORAGE_KEYS.WORKOUTS, JSON.stringify(workouts));
  return workouts;
};

// History / Logs
export const getHistory = () => {
  try {
    const data = localStorage.getItem(STORAGE_KEYS.HISTORY);
    return data ? JSON.parse(data) : [];
  } catch (e) {
    return [];
  }
};

export const logSession = (session) => {
  const history = getHistory();
  const newSession = {
    ...session,
    id: generateId(),
    completedAt: new Date().toISOString()
  };
  // Add to beginning
  history.unshift(newSession);
  localStorage.setItem(STORAGE_KEYS.HISTORY, JSON.stringify(history));
  return newSession;
};

export const getStats = () => {
  const history = getHistory();
  const totalWorkouts = history.length;
  const totalTime = history.reduce((acc, sess) => acc + (sess.duration || 0), 0);
  
  // Exercise stats
  const exerciseStats = {};
  history.forEach(sess => {
    sess.exercises.forEach(ex => {
      if (!exerciseStats[ex.exerciseId]) {
        exerciseStats[ex.exerciseId] = { count: 0, maxWeight: 0, totalReps: 0 };
      }
      exerciseStats[ex.exerciseId].count += 1;
      ex.sets.forEach(set => {
        if (set.weight > exerciseStats[ex.exerciseId].maxWeight) {
          exerciseStats[ex.exerciseId].maxWeight = set.weight;
        }
        exerciseStats[ex.exerciseId].totalReps += (parseInt(set.reps) || 0);
      });
    });
  });

  return {
    totalWorkouts,
    totalTime,
    exerciseStats
  };
};

