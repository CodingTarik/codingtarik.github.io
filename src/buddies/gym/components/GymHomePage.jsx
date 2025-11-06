import React from 'react';
import { Dumbbell, BarChart3, Target } from 'lucide-react';
import { useLanguage } from '../../../context/LanguageContext';
import SupportBanner from '../../../shared/components/SupportBanner';

function GymHomePage({ onStartLesson }) {
  const { language } = useLanguage();

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 mt-8">
      <div className="text-center mb-12">
        <div className="flex justify-center mb-6">
          <div className="bg-gradient-to-br from-red-400 to-orange-500 p-8 rounded-full shadow-2xl">
            <Dumbbell size={80} className="text-white" />
          </div>
        </div>
        <h1 className="text-5xl font-bold text-stone-800 dark:text-stone-100 mb-4">
          {language === 'en' ? 'Welcome to GymBuddy!' : 'Willkommen bei GymBuddy!'}
        </h1>
        <p className="text-xl text-stone-600 dark:text-stone-400 max-w-2xl mx-auto">
          {language === 'en' 
            ? 'Your free companion for strength training. Learn proper form, build muscle, and track your progress.' 
            : 'Dein kostenloser Begleiter fürs Krafttraining. Lerne richtige Form, baue Muskeln auf und verfolge deinen Fortschritt.'}
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mb-12">
        <div className="bg-white dark:bg-stone-800 p-6 rounded-xl shadow-lg text-center">
          <Dumbbell size={48} className="mx-auto mb-4 text-red-500" />
          <h3 className="font-bold text-lg mb-2 text-stone-800 dark:text-stone-100">
            {language === 'en' ? 'Exercise Library' : 'Übungs-Bibliothek'}
          </h3>
          <p className="text-stone-600 dark:text-stone-400 text-sm">
            {language === 'en' 
              ? 'Learn proper form for every exercise' 
              : 'Lerne richtige Ausführung für jede Übung'}
          </p>
        </div>
        <div className="bg-white dark:bg-stone-800 p-6 rounded-xl shadow-lg text-center">
          <Target size={48} className="mx-auto mb-4 text-orange-500" />
          <h3 className="font-bold text-lg mb-2 text-stone-800 dark:text-stone-100">
            {language === 'en' ? 'Workout Plans' : 'Trainingspläne'}
          </h3>
          <p className="text-stone-600 dark:text-stone-400 text-sm">
            {language === 'en' 
              ? 'Structured programs for all goals' 
              : 'Strukturierte Programme für alle Ziele'}
          </p>
        </div>
        <div className="bg-white dark:bg-stone-800 p-6 rounded-xl shadow-lg text-center">
          <BarChart3 size={48} className="mx-auto mb-4 text-amber-500" />
          <h3 className="font-bold text-lg mb-2 text-stone-800 dark:text-stone-100">
            {language === 'en' ? 'Progress Tracking' : 'Fortschrittsverfolgung'}
          </h3>
          <p className="text-stone-600 dark:text-stone-400 text-sm">
            {language === 'en' 
              ? 'Monitor your strength gains over time' 
              : 'Verfolge deine Kraftzuwächse über die Zeit'}
          </p>
        </div>
      </div>

      <div className="text-center">
        <button
          onClick={() => onStartLesson()}
          className="bg-red-500 hover:bg-red-600 text-white px-8 py-4 rounded-lg text-lg font-semibold shadow-lg transition-all transform hover:scale-105"
        >
          {language === 'en' ? '💪 Start First Lesson' : '💪 Erste Lektion starten'}
        </button>
      </div>

      <div className="mt-16 text-center text-stone-500 dark:text-stone-400 text-sm">
        <p>{language === 'en' ? 'Coming soon: Full gym lessons and workout plans!' : 'Bald verfügbar: Vollständige Gym-Lektionen und Trainingspläne!'}</p>
      </div>

      {/* Support Banner at the bottom */}
      <div className="mt-16">
        <SupportBanner />
      </div>
    </div>
  );
}

export default GymHomePage;

