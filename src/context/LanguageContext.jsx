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
    trainingPlanTip: 'Tipp: Jede Lektion enthält praktische Übungen, die du speichern kannst.',
    fromLesson: 'Aus Lektion',
    watchFor: 'Worauf achten:',
    tasks: 'Aufgaben',
    checkboxes: 'Checkboxen',
    progress: 'Fortschritt',
    
    // Training System
    trainingAndWarmup: 'Training & Aufwärmen',
    workouts: 'Workouts',
    createNewWorkout: 'Neues Workout erstellen',
    noWorkoutsYet: 'Noch keine Workouts erstellt',
    noWorkoutsDescription: 'Erstelle dein erstes Workout mit custom Übungen, Pausen und Zielen!',
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
    more: 'mehr',
    
    // Settings
    language: 'Sprache',
    darkMode: 'Dark Mode',
    settings: 'Einstellungen',
    switchToLight: 'Zu hellem Modus wechseln',
    switchToDark: 'Zu dunklem Modus wechseln',
    
    // Session Logger
    sessionLogger: 'Session Logger',
    sessionDetails: 'Session Details',
    duration: 'Dauer',
    durationMinutes: 'Dauer (Minuten)',
    howDoYouFeel: 'Wie fühlst du dich? (1-10)',
    notes: 'Notizen',
    notesOptional: 'Notizen (optional)',
    sessionNotes: 'Wie war die Session? Was lief gut/schlecht?',
    climbedBoulders: 'Gekletterte Boulder',
    addBoulder: 'Boulder hinzufügen',
    noBoulders: 'Noch keine Boulder geloggt',
    grade: 'Grad',
    attempts: 'Versuche',
    sent: 'Geschafft (Sent)',
    flash: 'Flash (1. Versuch)',
    difficulty: 'Schwierigkeit',
    photos: 'Fotos',
    videos: 'Videos',
    takePhoto: 'Foto aufnehmen/hochladen',
    recordVideo: 'Video aufnehmen/hochladen',
    videosAdded: 'Video(s) hinzugefügt',
    exampleNotes: 'Z.B. schwieriger Move, Beta...',
    add: 'Hinzufügen',
    saveSession: 'Session speichern',
    startNewSession: 'Neue Session starten',
    logBoulders: 'Boulder loggen mit Fotos & Videos',
    pleaseEnterDuration: 'Bitte gib die Session-Dauer ein!',
    pleaseSelectGrade: 'Bitte wähle einen Grad!',
    
    // Statistics
    statistics: 'Statistiken',
    noSessionsYet: 'Noch keine Sessions geloggt!',
    startSessionToSeeStats: 'Starte eine neue Session um Stats zu sehen',
    boulders: 'Boulder',
    sendRate: 'Send Rate',
    maxGrade: 'Max Grad',
    boulderPyramid: 'Boulder-Pyramide',
    recentSessions: 'Letzte Sessions',
    recentBoulders: 'Letzte Boulder',
    watchVideo: 'Video ansehen',
    
    // Strength Tests
    strengthTests: 'Kraft-Tests',
    addTest: 'Test hinzufügen',
    noTestsYet: 'Noch keine Tests durchgeführt!',
    addFirstTest: 'Füge deinen ersten Kraft-Test hinzu',
    personalBest: 'Persönliche Bestleistung',
    best: 'Beste',
    currentProgress: 'Aktueller Fortschritt',
    testType: 'Test-Typ',
    value: 'Wert',
    trend: 'Trend',
    improving: 'Aufwärts',
    declining: 'Abwärts',
    maxHang: 'Max Hang (20mm)',
    pullups: 'Klimmzüge',
    weightedPullup: 'Klimmzüge (+kg)',
    plank: 'Plank',
    legRaise: 'Beinheben',
    oneArmHang: 'Einarmiges Hängen',
    exampleAfterWarmup: 'Z.B. "Nach Aufwärmen"',
    
    // Video Player
    videoPlayback: 'Video Playback',
    speed: 'Speed',
    slowMotion: 'Slow Motion',
    fastForward: 'Fast Forward',
    restart: 'Restart',
    
    // Lesson Progress
    yourProgress: 'Dein Fortschritt',
    lessonsCompleted: 'Lektionen abgeschlossen',
    allLessonsComplete: 'Alle Lektionen abgeschlossen!',
    markAsComplete: 'Als abgeschlossen markieren',
    markAsIncomplete: 'Als unvollständig markieren',
    completed: 'Abgeschlossen',
    markAsRead: 'Als gelesen markieren',
    of: 'von',
    nextLesson: 'Nächste Lektion',

    // Quiz
    knowledgeCheck: 'Wissens-Check',
    flipCard: 'Karte umdrehen',
    quizComplete: 'Quiz abgeschlossen!',
    quizCompleteMessage: 'Super! Du hast alle Fragen beantwortet.',
    quizRestart: 'Neustarten'
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
    trainingPlanTip: 'Tip: Every lesson contains practical exercises that you can save.',
    fromLesson: 'From Lesson',
    watchFor: 'Watch for:',
    tasks: 'Tasks',
    checkboxes: 'Checkboxes',
    progress: 'Progress',
    
    // Training System
    trainingAndWarmup: 'Training & Warmup',
    workouts: 'Workouts',
    createNewWorkout: 'Create New Workout',
    noWorkoutsYet: 'No workouts created yet',
    noWorkoutsDescription: 'Create your first workout with custom exercises, breaks and goals!',
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
    more: 'more',
    
    // Settings
    language: 'Language',
    darkMode: 'Dark Mode',
    settings: 'Settings',
    switchToLight: 'Switch to light mode',
    switchToDark: 'Switch to dark mode',
    
    // Session Logger
    sessionLogger: 'Session Logger',
    sessionDetails: 'Session Details',
    duration: 'Duration',
    durationMinutes: 'Duration (Minutes)',
    howDoYouFeel: 'How do you feel? (1-10)',
    notes: 'Notes',
    notesOptional: 'Notes (optional)',
    sessionNotes: 'How was the session? What went well/badly?',
    climbedBoulders: 'Climbed Boulders',
    addBoulder: 'Add Boulder',
    noBoulders: 'No boulders logged yet',
    grade: 'Grade',
    attempts: 'Attempts',
    sent: 'Sent',
    flash: 'Flash (1st try)',
    difficulty: 'Difficulty',
    photos: 'Photos',
    videos: 'Videos',
    takePhoto: 'Take/Upload Photo',
    recordVideo: 'Record/Upload Video',
    videosAdded: 'video(s) added',
    exampleNotes: 'E.g. difficult move, beta...',
    add: 'Add',
    saveSession: 'Save Session',
    startNewSession: 'Start New Session',
    logBoulders: 'Log boulders with photos & videos',
    pleaseEnterDuration: 'Please enter the session duration!',
    pleaseSelectGrade: 'Please select a grade!',
    
    // Statistics
    statistics: 'Statistics',
    noSessionsYet: 'No sessions logged yet!',
    startSessionToSeeStats: 'Start a new session to see stats',
    boulders: 'Boulders',
    sendRate: 'Send Rate',
    maxGrade: 'Max Grade',
    boulderPyramid: 'Boulder Pyramid',
    recentSessions: 'Recent Sessions',
    recentBoulders: 'Recent Boulders',
    watchVideo: 'Watch Video',
    
    // Strength Tests
    strengthTests: 'Strength Tests',
    addTest: 'Add Test',
    noTestsYet: 'No tests performed yet!',
    addFirstTest: 'Add your first strength test',
    personalBest: 'Personal Best',
    best: 'Best',
    currentProgress: 'Current Progress',
    testType: 'Test Type',
    value: 'Value',
    trend: 'Trend',
    improving: 'Improving',
    declining: 'Declining',
    maxHang: 'Max Hang (20mm)',
    pullups: 'Pull-ups',
    weightedPullup: 'Weighted Pull-up (+kg)',
    plank: 'Plank',
    legRaise: 'Leg Raises',
    oneArmHang: 'One-Arm Hang',
    exampleAfterWarmup: 'E.g. "After warmup"',
    
    // Video Player
    videoPlayback: 'Video Playback',
    speed: 'Speed',
    slowMotion: 'Slow Motion',
    fastForward: 'Fast Forward',
    restart: 'Restart',
    
    // Lesson Progress
    yourProgress: 'Your Progress',
    lessonsCompleted: 'lessons completed',
    allLessonsComplete: 'All lessons completed!',
    markAsComplete: 'Mark as complete',
    markAsIncomplete: 'Mark as incomplete',
    completed: 'Completed',
    markAsRead: 'Mark as read',
    of: 'of',
    nextLesson: 'Next Lesson',

    // Quiz
    knowledgeCheck: 'Knowledge Check',
    flipCard: 'Flip Card',
    quizComplete: 'Quiz Complete!',
    quizCompleteMessage: 'Great job! You\'ve answered all the questions.',
    quizRestart: 'Restart'
  }
};

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(() => {
    // Initialize from localStorage immediately
    const saved = localStorage.getItem('boulderBuddyLanguage');
    return (saved && ['de', 'en'].includes(saved)) ? saved : 'en';
  });

  useEffect(() => {
    const saved = localStorage.getItem('boulderBuddyLanguage');
    if (saved && ['de', 'en'].includes(saved)) {
      setLanguage(saved);
    } else {
      // Set default to English
      localStorage.setItem('boulderBuddyLanguage', 'en');
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

