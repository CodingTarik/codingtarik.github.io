import { Waves, Timer, TrendingUp } from 'lucide-react';
import SwimHomePage from './components/SwimHomePage';

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
    data: [],
    getLessonById: () => null,
    getNextLesson: () => null
  },
  
  sharedTabs: ['home', 'lessons', 'plan'],
  
  customTabs: [
    {
      id: 'workouts',
      name: { en: 'Workouts', de: 'Workouts' },
      icon: Timer,
      component: 'SwimWorkouts'
    },
    {
      id: 'progress',
      name: { en: 'Progress', de: 'Fortschritt' },
      icon: TrendingUp,
      component: 'SwimProgress'
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

