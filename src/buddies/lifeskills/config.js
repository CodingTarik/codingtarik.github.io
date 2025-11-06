import { Lightbulb, CheckSquare, BookOpen } from 'lucide-react';
import LifeSkillsHomePage from './components/LifeSkillsHomePage';

export const lifeskillsBuddyConfig = {
  id: 'lifeskills',
  name: {
    en: 'LifeSkillsBuddy',
    de: 'LifeSkillsBuddy'
  },
  icon: Lightbulb,
  theme: {
    primary: 'yellow',
    primaryColor: '#eab308',
    accent: 'amber',
    background: 'yellow'
  },
  homePage: LifeSkillsHomePage,
  lessons: {
    data: [],
    getLessonById: () => null,
    getNextLesson: () => null
  },
  
  sharedTabs: ['home', 'lessons', 'plan'],
  
  customTabs: [
    {
      id: 'habits',
      name: { en: 'Habits', de: 'Gewohnheiten' },
      icon: CheckSquare,
      component: 'HabitTracker'
    },
    {
      id: 'journal',
      name: { en: 'Journal', de: 'Tagebuch' },
      icon: BookOpen,
      component: 'LifeJournal'
    }
  ],
  
  planItemType: {
    type: 'life_skill',
    fields: {
      skillName: 'string',
      steps: 'array',
      resources: 'array',
      deadline: 'string'
    }
  },
  
  planTranslations: {
    en: {
      title: 'My Growth Plan',
      emptyMessage: 'Save life skills from lessons to plan your personal development!',
      emptyTip: '💡 Tip: Track your journey to becoming your best self.'
    },
    de: {
      title: 'Mein Wachstumsplan',
      emptyMessage: 'Speichere Life Skills aus den Lektionen für deine persönliche Entwicklung!',
      emptyTip: '💡 Tipp: Verfolge deine Reise zum besten Ich.'
    }
  }
};

