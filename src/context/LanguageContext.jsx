import React, { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

export const translations = {
  de: {
    // Navigation
    home: 'Home',
    lessons: 'Lektionen',
    training: 'Training',
    plan: 'Plan',
    gear: 'Gear',
    
    // HomePage
    welcome: 'Willkommen beim BoulderBuddy!',
    welcomeSubtitle: 'Dein kostenloser Begleiter auf dem Weg zum Bouldern. Lerne die Grundlagen, entdecke Techniken und plane dein nächstes Training.',
    startLesson: 'Starte Lektion 1',
    warmupTimer: 'Aufwärm-Timer',
    lessonsCount: '9+ Lektionen',
    practicalTasks: 'Praktische Aufgaben',
    trainingPlan: 'Trainingsplan',
    readyToStart: 'Bereit loszulegen?',
    
    // Lessons
    boulderLessons: 'Boulder-Lektionen',
    backToLessons: 'Zurück zu Lektionen',
    saveForTraining: 'Fürs Training speichern',
    yourTrainingFocus: 'Dein Trainings-Fokus',
    whatToWatch: 'Worauf du achten musst:',
    
    // Training Plan
    myNextTraining: 'Mein nächstes Training',
    noTasksSaved: 'Speichere Aufgaben aus den Lektionen, um dein Training zu planen!',
    fromLesson: 'Aus Lektion',
    watchFor: 'Worauf achten:',
    tasks: 'Aufgaben',
    checkboxes: 'Checkboxen',
    progress: 'Fortschritt',
    
    // Training System
    trainingAndWarmup: 'Training & Aufwärmen',
    createNewWorkout: 'Neues Workout erstellen',
    noWorkoutsYet: 'Noch keine Workouts erstellt',
    exercises: 'Übungen',
    sessions: 'Sessions',
    lastTraining: 'Letztes Training',
    startWorkout: 'Workout starten',
    
    // Common
    back: 'Zurück',
    cancel: 'Abbrechen',
    save: 'Speichern',
    delete: 'Löschen',
    edit: 'Bearbeiten',
    done: 'Fertig',
    saved: 'Gespeichert!',
    
    // Settings
    language: 'Sprache',
    darkMode: 'Dark Mode',
    settings: 'Einstellungen'
  },
  en: {
    // Navigation
    home: 'Home',
    lessons: 'Lessons',
    training: 'Training',
    plan: 'Plan',
    gear: 'Gear',
    
    // HomePage
    welcome: 'Welcome to BoulderBuddy!',
    welcomeSubtitle: 'Your free companion on your bouldering journey. Learn the basics, discover techniques, and plan your next training.',
    startLesson: 'Start Lesson 1',
    warmupTimer: 'Warmup Timer',
    lessonsCount: '9+ Lessons',
    practicalTasks: 'Practical Tasks',
    trainingPlan: 'Training Plan',
    readyToStart: 'Ready to start?',
    
    // Lessons
    boulderLessons: 'Bouldering Lessons',
    backToLessons: 'Back to Lessons',
    saveForTraining: 'Save for Training',
    yourTrainingFocus: 'Your Training Focus',
    whatToWatch: 'What to watch for:',
    
    // Training Plan
    myNextTraining: 'My Next Training',
    noTasksSaved: 'Save tasks from lessons to plan your training!',
    fromLesson: 'From Lesson',
    watchFor: 'Watch for:',
    tasks: 'Tasks',
    checkboxes: 'Checkboxes',
    progress: 'Progress',
    
    // Training System
    trainingAndWarmup: 'Training & Warmup',
    createNewWorkout: 'Create New Workout',
    noWorkoutsYet: 'No workouts created yet',
    exercises: 'Exercises',
    sessions: 'Sessions',
    lastTraining: 'Last Training',
    startWorkout: 'Start Workout',
    
    // Common
    back: 'Back',
    cancel: 'Cancel',
    save: 'Save',
    delete: 'Delete',
    edit: 'Edit',
    done: 'Done',
    saved: 'Saved!',
    
    // Settings
    language: 'Language',
    darkMode: 'Dark Mode',
    settings: 'Settings'
  }
};

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(() => {
    // Initialize from localStorage immediately
    const saved = localStorage.getItem('boulderBuddyLanguage');
    return (saved && ['de', 'en'].includes(saved)) ? saved : 'de';
  });

  useEffect(() => {
    const saved = localStorage.getItem('boulderBuddyLanguage');
    if (saved && ['de', 'en'].includes(saved)) {
      setLanguage(saved);
    } else {
      // Set default to German
      localStorage.setItem('boulderBuddyLanguage', 'de');
    }
  }, []);

  const changeLanguage = (lang) => {
    setLanguage(lang);
    localStorage.setItem('boulderBuddyLanguage', lang);
  };

  const t = (key) => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
}

