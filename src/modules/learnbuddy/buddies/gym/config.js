import { Dumbbell, Calendar, BarChart3, Activity, Map, BookOpen } from 'lucide-react';
import GymHomePage from './components/GymHomePage';
import WorkoutTracker from './components/WorkoutTracker';
import GymSkillPath from './components/GymSkillPath';
import GymSummary from './components/GymSummary';
import { lessons, getLessonById, getNextLesson } from './data/lessons';

export const gymBuddyConfig = {
  id: 'gym',
  name: {
    en: 'GymBuddy',
    de: 'GymBuddy'
  },
  icon: Dumbbell,
  theme: {
    primary: 'red',
    primaryColor: '#ef4444',
    accent: 'orange',
    background: 'stone'
  },
  homePage: GymHomePage,
  lessons: {
    data: lessons,
    getLessonById: getLessonById,
    getNextLesson: getNextLesson
  },
  
  sharedTabs: ['home', 'lessons', 'plan'],
  
  customTabs: [
    {
      id: 'tracker',
      name: { en: 'Tracker', de: 'Tracker' },
      icon: Activity,
      component: WorkoutTracker
    },
    {
      id: 'curriculum',
      name: { en: 'Path', de: 'Wegweiser' },
      icon: Map,
      component: GymSkillPath
    },
    {
      id: 'summary',
      name: { en: 'Summary', de: 'Summary' },
      icon: BookOpen,
      component: GymSummary
    }
  ],
  
  planItemType: {
    type: 'gym_workout',
    fields: {
      workoutName: 'string',
      exercises: 'array',
      sets: 'number',
      reps: 'number'
    }
  },
  
  planTranslations: {
    en: {
      title: 'My Workout Plan',
      emptyMessage: 'Save workouts from lessons to plan your gym sessions!',
      emptyTip: '💡 Tip: Build your weekly gym routine here.'
    },
    de: {
      title: 'Mein Trainingsplan',
      emptyMessage: 'Speichere Workouts aus den Lektionen für deine Gym-Sessions!',
      emptyTip: '💡 Tipp: Erstelle hier deine wöchentliche Gym-Routine.'
    }
  }
};
