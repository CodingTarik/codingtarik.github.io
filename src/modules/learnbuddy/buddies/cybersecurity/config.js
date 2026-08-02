import { Shield, Terminal, Lock } from 'lucide-react';
import CyberSecurityHomePage from './components/CyberSecurityHomePage';

export const cybersecurityBuddyConfig = {
  id: 'cybersecurity',
  name: {
    en: 'CyberSecurityBuddy',
    de: 'CyberSecurityBuddy'
  },
  icon: Shield,
  theme: {
    primary: 'slate',
    primaryColor: '#64748b',
    accent: 'cyan',
    background: 'slate'
  },
  homePage: CyberSecurityHomePage,
  lessons: {
    data: [],
    getLessonById: () => null,
    getNextLesson: () => null
  },
  
  sharedTabs: ['home', 'lessons', 'plan'],
  
  customTabs: [
    {
      id: 'labs',
      name: { en: 'Labs', de: 'Labs' },
      icon: Terminal,
      component: 'SecurityLabs'
    },
    {
      id: 'challenges',
      name: { en: 'Challenges', de: 'Challenges' },
      icon: Lock,
      component: 'SecurityChallenges'
    }
  ],
  
  planItemType: {
    type: 'security_topic',
    fields: {
      topicName: 'string',
      concepts: 'array',
      practiceExercises: 'array',
      resources: 'array'
    }
  },
  
  planTranslations: {
    en: {
      title: 'My Learning Path',
      emptyMessage: 'Save security topics from lessons to build your expertise!',
      emptyTip: '💡 Tip: Master cybersecurity one concept at a time.'
    },
    de: {
      title: 'Mein Lernpfad',
      emptyMessage: 'Speichere Security-Themen aus den Lektionen zum Aufbau deiner Expertise!',
      emptyTip: '💡 Tipp: Meistere Cybersecurity Schritt für Schritt.'
    }
  }
};

