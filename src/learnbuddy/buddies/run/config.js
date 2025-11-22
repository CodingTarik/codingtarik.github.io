import { Footprints, MapPin, Trophy, Calculator } from 'lucide-react';
import RunHomePage from './components/RunHomePage';
import RunTools from './components/RunTools';
import { lessons, getLessonById, getNextLesson } from './data/lessons';

export const runBuddyConfig = {
  id: 'run',
  name: {
    en: 'RunBuddy',
    de: 'RunBuddy'
  },
  icon: Footprints,
  theme: {
    primary: 'green',
    primaryColor: '#22c55e',
    accent: 'lime',
    background: 'emerald'
  },
  homePage: RunHomePage,
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
      component: RunTools
    }
  ],
  
  planItemType: {
    type: 'run_plan',
    fields: {
      runType: 'string',
      distance: 'number',
      pace: 'string',
      notes: 'string'
    }
  },
  
  planTranslations: {
    en: {
      title: 'My Running Plan',
      emptyMessage: 'Save runs from lessons to plan your training!',
      emptyTip: '💡 Tip: Create your weekly running schedule here.'
    },
    de: {
      title: 'Mein Laufplan',
      emptyMessage: 'Speichere Läufe aus den Lektionen für dein Training!',
      emptyTip: '💡 Tipp: Erstelle hier deinen wöchentlichen Laufplan.'
    }
  }
};

