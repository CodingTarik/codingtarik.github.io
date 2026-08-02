import { Waves, Timer, TrendingUp, Calculator } from 'lucide-react';
import SwimHomePage from './components/SwimHomePage';
import SwimTools from './components/SwimTools';
import { lessons, getLessonById, getNextLesson } from './data/lessons';

export const swimBuddyConfig = {
  id: 'swim',
  name: {
    en: 'SwimBuddy',
    de: 'SwimBuddy'
  },
  icon: Waves,
  theme: {
    primary: 'blue',
    primaryColor: '#3b82f6',
    accent: 'cyan',
    background: 'slate'
  },
  homePage: SwimHomePage,
  lessons: {
    data: lessons,
    getLessonById: getLessonById,
    getNextLesson: getNextLesson
  },
  
  sharedTabs: ['home', 'lessons', 'plan'],
  
  customTabs: [
    {
      id: 'tools',
      name: { en: 'Tools', de: 'Tools' },
      icon: Calculator,
      component: SwimTools
    }
  ],
  
  planItemType: {
    type: 'swim_workout',
    fields: {
      workoutName: 'string',
      distance: 'number',
      sets: 'array',
      notes: 'string'
    }
  },
  
  planTranslations: {
    en: {
      title: 'My Swim Plan',
      emptyMessage: 'Save workouts from lessons to plan your swim sessions!',
      emptyTip: '💡 Tip: Build your weekly swim routine here.'
    },
    de: {
      title: 'Mein Schwimmplan',
      emptyMessage: 'Speichere Workouts aus den Lektionen für deine Schwimm-Sessions!',
      emptyTip: '💡 Tipp: Erstelle hier deine wöchentliche Schwimmroutine.'
    }
  }
};

