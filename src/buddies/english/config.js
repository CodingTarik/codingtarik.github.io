import { Languages, BookText, Headphones, MessageCircle, PenTool, BookOpen, GraduationCap } from 'lucide-react';
import EnglishHomePage from './components/EnglishHomePage';
import { lessons, getLessonById, getNextLesson } from './data/lessons';

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
    data: lessons,
    getLessonById: getLessonById,
    getNextLesson: getNextLesson
  },
  
  // Rename Lessons tab to Grammar
  lessonsTabName: {
    en: 'Grammar',
    de: 'Grammatik'
  },
  
  // Hide the plan tab for EnglishBuddy
  hidePlanTab: true,
  
  customTabs: [
    {
      id: 'vocabulary',
      name: { en: 'Vocabulary', de: 'Vokabeln' },
      icon: BookText,
      component: 'VocabularyTrainer'
    },
    {
      id: 'speaking',
      name: { en: 'Speaking', de: 'Sprechen' },
      icon: MessageCircle,
      component: 'SpeakingPractice'
    },
    {
      id: 'listening',
      name: { en: 'Listening', de: 'Hörverständnis' },
      icon: Headphones,
      component: 'ListeningPractice'
    },
    {
      id: 'writing',
      name: { en: 'Writing', de: 'Schreiben' },
      icon: PenTool,
      component: 'WritingExercises'
    },
    {
      id: 'reading',
      name: { en: 'Reading', de: 'Lesen' },
      icon: BookOpen,
      component: 'ReadingLibrary'
    }
  ]
};
