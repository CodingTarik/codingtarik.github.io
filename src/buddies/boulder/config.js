import { Mountain, Dumbbell, Calendar, Camera } from 'lucide-react';
import BoulderHomePage from './components/BoulderHomePage';
import { lessons, getLessonById, getNextLesson } from './data/lessons';

export const boulderBuddyConfig = {
  id: 'boulder',
  name: {
    en: 'BoulderBuddy',
    de: 'BoulderBuddy'
  },
  icon: Mountain,
  theme: {
    primary: 'teal',
    primaryColor: '#14b8a6',
    accent: 'orange',
    background: 'stone'
  },
  homePage: BoulderHomePage,
  
  lessons: {
    data: lessons,
    getLessonById: getLessonById,
    getNextLesson: getNextLesson
  },
  
  // Shared tabs (always present)
  sharedTabs: ['home', 'lessons', 'plan'],
  
  // Buddy-specific tabs
  customTabs: [
    {
      id: 'training',
      name: { en: 'Training', de: 'Training' },
      icon: Dumbbell,
      component: 'TrainingPage' // Will be lazy-loaded from buddies/boulder/components
    },
    {
      id: 'sessions',
      name: { en: 'Sessions', de: 'Sessions' },
      icon: Camera,
      component: 'SessionLogger'
    }
  ],
  
  // Plan item structure
  planItemType: {
    type: 'training_task',
    fields: {
      lessonTitle: 'string',
      taskDescription: 'string',
      checklist: 'array'
    }
  },
  
  // Translations for plan
  planTranslations: {
    en: {
      title: 'My Training Plan',
      emptyMessage: 'Save tasks from lessons to plan your training!',
      emptyTip: '💡 Tip: Each lesson contains practical exercises you can save.'
    },
    de: {
      title: 'Mein Trainingsplan',
      emptyMessage: 'Speichere Aufgaben aus den Lektionen, um dein Training zu planen!',
      emptyTip: '💡 Tipp: Jede Lektion enthält praktische Übungen, die du speichern kannst.'
    }
  }
};

