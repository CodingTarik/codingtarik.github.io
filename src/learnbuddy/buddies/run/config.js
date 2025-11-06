import { Footprints, MapPin, Trophy } from 'lucide-react';
import RunHomePage from './components/RunHomePage';

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
    data: [],
    getLessonById: () => null,
    getNextLesson: () => null
  },
  
  sharedTabs: ['home', 'lessons', 'plan'],
  
  customTabs: [
    {
      id: 'routes',
      name: { en: 'Routes', de: 'Routen' },
      icon: MapPin,
      component: 'RunRoutes'
    },
    {
      id: 'races',
      name: { en: 'Races', de: 'Wettkämpfe' },
      icon: Trophy,
      component: 'RunRaces'
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

