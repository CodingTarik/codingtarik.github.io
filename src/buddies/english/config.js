import { Languages, BookText, Headphones } from 'lucide-react';
import EnglishHomePage from './components/EnglishHomePage';

export const englishBuddyConfig = {
  id: 'english',
  name: {
    en: 'EnglishBuddy',
    de: 'EnglishBuddy'
  },
  icon: Languages,
  theme: {
    primary: 'rose',
    primaryColor: '#f43f5e',
    accent: 'pink',
    background: 'rose'
  },
  homePage: EnglishHomePage,
  lessons: {
    data: [],
    getLessonById: () => null,
    getNextLesson: () => null
  },
  
  sharedTabs: ['home', 'lessons', 'plan'],
  
  customTabs: [
    {
      id: 'vocabulary',
      name: { en: 'Vocabulary', de: 'Vokabeln' },
      icon: BookText,
      component: 'VocabularyTrainer'
    },
    {
      id: 'listening',
      name: { en: 'Listening', de: 'Hörverständnis' },
      icon: Headphones,
      component: 'ListeningPractice'
    }
  ],
  
  planItemType: {
    type: 'english_practice',
    fields: {
      topicName: 'string',
      vocabulary: 'array',
      exercises: 'array',
      notes: 'string'
    }
  },
  
  planTranslations: {
    en: {
      title: 'My Learning Plan',
      emptyMessage: 'Save lessons and vocabulary to build your English skills!',
      emptyTip: '💡 Tip: Practice daily for best results.'
    },
    de: {
      title: 'Mein Lernplan',
      emptyMessage: 'Speichere Lektionen und Vokabeln zum Aufbau deiner Englisch-Kenntnisse!',
      emptyTip: '💡 Tipp: Tägliches Üben bringt die besten Ergebnisse.'
    }
  }
};

