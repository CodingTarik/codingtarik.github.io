import { Music, Mic2, ListMusic } from 'lucide-react';
import PianoHomePage from './components/PianoHomePage';

export const pianoBuddyConfig = {
  id: 'piano',
  name: {
    en: 'PianoBuddy',
    de: 'PianoBuddy'
  },
  icon: Music,
  theme: {
    primary: 'indigo',
    primaryColor: '#6366f1',
    accent: 'violet',
    background: 'indigo'
  },
  homePage: PianoHomePage,
  lessons: {
    data: [],
    getLessonById: () => null,
    getNextLesson: () => null
  },
  
  sharedTabs: ['home', 'lessons', 'plan'],
  
  customTabs: [
    {
      id: 'practice',
      name: { en: 'Practice', de: 'Üben' },
      icon: Mic2,
      component: 'PianoPractice'
    },
    {
      id: 'songs',
      name: { en: 'Songs', de: 'Lieder' },
      icon: ListMusic,
      component: 'SongLibrary'
    }
  ],
  
  planItemType: {
    type: 'piano_practice',
    fields: {
      songName: 'string',
      techniques: 'array',
      tempo: 'number',
      notes: 'string'
    }
  },
  
  planTranslations: {
    en: {
      title: 'My Practice Schedule',
      emptyMessage: 'Save songs and exercises from lessons to plan your practice!',
      emptyTip: '💡 Tip: Consistent practice makes perfect.'
    },
    de: {
      title: 'Mein Übungsplan',
      emptyMessage: 'Speichere Lieder und Übungen aus den Lektionen für dein Training!',
      emptyTip: '💡 Tipp: Regelmäßiges Üben führt zur Perfektion.'
    }
  }
};

