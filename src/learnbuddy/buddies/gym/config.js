import { Dumbbell, Calendar, BarChart3 } from 'lucide-react';
import GymHomePage from './components/GymHomePage';

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
      id: 'exercises',
      name: { en: 'Exercises', de: 'Übungen' },
      icon: Dumbbell,
      component: 'GymExercises'
    },
    {
      id: 'stats',
      name: { en: 'Stats', de: 'Statistiken' },
      icon: BarChart3,
      component: 'GymStats'
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

