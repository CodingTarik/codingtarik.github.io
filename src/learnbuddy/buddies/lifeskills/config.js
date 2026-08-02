import { Lightbulb, CheckSquare, BookOpen, Timer, Clock, Target, Brain, Calendar, Sparkles } from 'lucide-react';
import LifeSkillsHomePage from './components/LifeSkillsHomePage';
import { lessons, getLessonById, getNextLesson } from './data/lessons';

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
    data: lessons,
    getLessonById: getLessonById,
    getNextLesson: getNextLesson
  },
  
  sharedTabs: ['home', 'lessons', 'plan'],
  
  customTabs: [
    {
      id: 'pomodoro',
      name: { en: 'Pomodoro', de: 'Pomodoro' },
      icon: Timer,
      component: 'PomodoroTimer'
    },
    {
      id: 'timeaudit',
      name: { en: 'Time Audit', de: 'Zeitanalyse' },
      icon: Clock,
      component: 'TimeAudit'
    },
    {
      id: 'habits',
      name: { en: 'Habits', de: 'Gewohnheiten' },
      icon: CheckSquare,
      component: 'HabitTracker'
    },
    {
      id: 'goals',
      name: { en: 'Goals', de: 'Ziele' },
      icon: Target,
      component: 'GoalTracker'
    },
    {
      id: 'reflection',
      name: { en: 'Reflection', de: 'Reflexion' },
      icon: Brain,
      component: 'ReflectionTool'
    },
    {
      id: 'dayplanner',
      name: { en: 'Day Planner', de: 'Tagesplan' },
      icon: Calendar,
      component: 'DayPlanner'
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

