import { Flower2, Calendar, TrendingUp } from 'lucide-react';
import YogaHomePage from './components/YogaHomePage';

export const yogaBuddyConfig = {
  id: 'yoga',
  name: {
    en: 'YogaBuddy',
    de: 'YogaBuddy'
  },
  icon: Flower2,
  theme: {
    primary: 'purple',
    primaryColor: '#a855f7',
    accent: 'pink',
    background: 'violet'
  },
  homePage: YogaHomePage,
  lessons: {
    data: [],
    getLessonById: () => null,
    getNextLesson: () => null
  },
  
  sharedTabs: ['home', 'lessons', 'plan'],
  
  customTabs: [
    {
      id: 'sequences',
      name: { en: 'Sequences', de: 'Sequenzen' },
      icon: Calendar,
      component: 'YogaSequences'
    },
    {
      id: 'progress',
      name: { en: 'Progress', de: 'Fortschritt' },
      icon: TrendingUp,
      component: 'YogaProgress'
    }
  ],
  
  planItemType: {
    type: 'yoga_practice',
    fields: {
      practiceName: 'string',
      poses: 'array',
      duration: 'number',
      notes: 'string'
    }
  },
  
  planTranslations: {
    en: {
      title: 'My Practice Plan',
      emptyMessage: 'Save yoga sequences from lessons to plan your practice!',
      emptyTip: '💡 Tip: Build your daily yoga routine here.'
    },
    de: {
      title: 'Mein Übungsplan',
      emptyMessage: 'Speichere Yoga-Sequenzen aus den Lektionen für deine Praxis!',
      emptyTip: '💡 Tipp: Erstelle hier deine tägliche Yoga-Routine.'
    }
  }
};

