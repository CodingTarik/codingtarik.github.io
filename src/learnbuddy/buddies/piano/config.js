import { Music, Mic2, ListMusic, Piano } from 'lucide-react';
import PianoHomePage from './components/PianoHomePage';
import { lessons } from './data/lessons';

// Lesson Component Map - Dynamic imports would be better in a real app, 
// but for this structure we might need a mapping or lazy loading.
// For now, I'll assume the LessonView handles the component loading based on ID
// or we export a map here.

export const pianoBuddyConfig = {
  id: 'piano',
  name: {
    en: 'PianoBuddy',
    de: 'PianoBuddy'
  },
  icon: Piano,
  theme: {
    primary: 'indigo',
    primaryColor: '#6366f1',
    accent: 'violet',
    background: 'slate'
  },
  homePage: PianoHomePage,
  
  lessons: {
    data: lessons,
    getLessonById: (id) => {
      for (const module of lessons) {
        const lesson = module.lessons.find(l => l.id === id);
        if (lesson) return lesson;
      }
      return null;
    },
    getNextLesson: (currentId) => {
      let found = false;
      for (const module of lessons) {
        for (const lesson of module.lessons) {
          if (found) return lesson;
          if (lesson.id === currentId) found = true;
        }
      }
      return null;
    }
  },
  
  sharedTabs: ['home', 'lessons', 'plan'],
  
  customTabs: [
    {
      id: 'practice',
      name: { en: 'Practice', de: 'Freies Spiel' },
      icon: Music,
      component: 'PianoPractice' // Special ID handled by main layout or router
    },
    {
      id: 'songs',
      name: { en: 'Song Library', de: 'Lieder' },
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
      emptyMessage: 'Plan your piano practice sessions here.',
      emptyTip: '💡 Tip: 15 minutes a day is better than 2 hours once a week.'
    },
    de: {
      title: 'Mein Übungsplan',
      emptyMessage: 'Plane hier deine Klavier-Übungseinheiten.',
      emptyTip: '💡 Tipp: 15 Minuten täglich sind besser als 2 Stunden einmal pro Woche.'
    }
  }
};
