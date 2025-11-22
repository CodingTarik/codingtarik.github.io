import { Dumbbell, Calendar, BarChart3, Activity } from 'lucide-react';
import GymHomePage from './components/GymHomePage';
import WorkoutTracker from './components/WorkoutTracker';

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
    data: [],
    getLessonById: () => null,
    getNextLesson: () => null
  },
  
  sharedTabs: ['home', 'lessons', 'plan'],
  
  customTabs: [
    {
      id: 'tracker',
      name: { en: 'Tracker', de: 'Tracker' },
      icon: Activity,
      component: WorkoutTracker
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

