import { BookOpen, Headphones, MessageCircle, Languages, BookText } from 'lucide-react';
import EnglishHomePage from './components/EnglishHomePage';
import { lessons, getLessonById, getNextLesson } from './data/lessons';

export const englishBuddyConfig = {
  id: 'english',
  name: {
    en: 'EnglishBuddy',
    de: 'EnglishBuddy'
  },
  icon: BookOpen,
  theme: {
    primary: 'rose',
    primaryColor: '#f43f5e',
    accent: 'pink',
    background: 'stone'
  },
  homePage: EnglishHomePage,
  
  lessons: {
    data: lessons,
    getLessonById: getLessonById,
    getNextLesson: getNextLesson
  },
  
  // Rename lessons tab to Grammar
  lessonsTabName: {
    en: 'Grammar',
    de: 'Grammatik'
  },
  
  // Hide Plan tab
  hidePlanTab: true,
  
  // Shared tabs (always present)
  sharedTabs: ['home', 'lessons'],
  
  // Buddy-specific tabs in correct order: Grammar (lessons), Vocabulary, Writing, Speaking, Listening, Reading
  customTabs: [
    {
      id: 'vocabulary',
      name: { en: 'Vocabulary', de: 'Vokabeln' },
      icon: BookOpen,
      component: 'VocabularyPage'
    },
    {
      id: 'writing',
      name: { en: 'Writing', de: 'Schreiben' },
      icon: Languages,
      component: 'WritingPage'
    },
    {
      id: 'speaking',
      name: { en: 'Speaking', de: 'Sprechen' },
      icon: MessageCircle,
      component: 'SpeakingPage'
    },
    {
      id: 'listening',
      name: { en: 'Listening', de: 'Hören' },
      icon: Headphones,
      component: 'ListeningPage'
    },
    {
      id: 'reading',
      name: { en: 'Reading', de: 'Lesen' },
      icon: BookText,
      component: 'ReadingLibrary'
    }
  ],
  
  // Settings configuration
  settings: [
    {
      key: 'nativeLanguage',
      label: {
        en: 'Native Language',
        de: 'Muttersprache'
      },
      description: {
        en: 'Select your native language for translations',
        de: 'Wähle deine Muttersprache für Übersetzungen'
      },
      type: 'enum',
      options: [
        { value: 'de', label: 'Deutsch 🇩🇪' },
        { value: 'es', label: 'Español 🇪🇸' },
        { value: 'fr', label: 'Français 🇫🇷' },
        { value: 'it', label: 'Italiano 🇮🇹' },
        { value: 'pt', label: 'Português 🇵🇹' },
        { value: 'ru', label: 'Русский 🇷🇺' },
        { value: 'zh', label: '中文 🇨🇳' },
        { value: 'ja', label: '日本語 🇯🇵' },
        { value: 'ko', label: '한국어 🇰🇷' },
        { value: 'ar', label: 'العربية 🇸🇦' },
        { value: 'tr', label: 'Türkçe 🇹🇷' },
      ],
      default: 'de'
    },
    {
      key: 'autoPlayAudio',
      label: {
        en: 'Auto-play pronunciation',
        de: 'Aussprache automatisch abspielen'
      },
      description: {
        en: 'Automatically play audio when showing translations',
        de: 'Audio automatisch abspielen beim Anzeigen von Übersetzungen'
      },
      type: 'boolean',
      default: false
    },
    {
      key: 'showPhonetics',
      label: {
        en: 'Show phonetic transcription',
        de: 'Phonetische Umschrift anzeigen'
      },
      description: {
        en: 'Display IPA phonetic transcription for words',
        de: 'IPA-Lautschrift für Wörter anzeigen'
      },
      type: 'boolean',
      default: true
    },
    {
      key: 'translationDetail',
      label: {
        en: 'Translation Detail Level',
        de: 'Übersetzungsdetailgrad'
      },
      description: {
        en: 'How detailed should translations be?',
        de: 'Wie detailliert sollen Übersetzungen sein?'
      },
      type: 'enum',
      options: [
        { value: 'simple', label: { en: 'Simple', de: 'Einfach' } },
        { value: 'normal', label: { en: 'Normal', de: 'Normal' } },
        { value: 'detailed', label: { en: 'Detailed', de: 'Detailliert' } }
      ],
      default: 'normal'
    }
  ]
};
