import React from 'react';
import { Waves, Droplets, Timer } from 'lucide-react';
import { useLanguage } from '../../../context/LanguageContext';
import SupportBanner from '../../../shared/components/SupportBanner';

function SwimHomePage({ onStartLesson }) {
  const { language } = useLanguage();

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 mt-8">
      <div className="text-center mb-12">
        <div className="flex justify-center mb-6">
          <div className="bg-gradient-to-br from-blue-400 to-cyan-500 p-8 rounded-full shadow-2xl">
            <Waves size={80} className="text-white" />
          </div>
        </div>
        <h1 className="text-5xl font-bold text-stone-800 dark:text-stone-100 mb-4">
          {language === 'en' ? 'Welcome to SwimBuddy!' : 'Willkommen bei SwimBuddy!'}
        </h1>
        <p className="text-xl text-stone-600 dark:text-stone-400 max-w-2xl mx-auto">
          {language === 'en' 
            ? 'Your free companion for learning to swim efficiently and confidently. Master techniques, build endurance, and enjoy the water.' 
            : 'Dein kostenloser Begleiter zum effizienten und selbstbewussten Schwimmen lernen. Meistere Techniken, baue Ausdauer auf und genieße das Wasser.'}
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mb-12">
        <div className="bg-white dark:bg-stone-800 p-6 rounded-xl shadow-lg text-center">
          <Waves size={48} className="mx-auto mb-4 text-blue-500" />
          <h3 className="font-bold text-lg mb-2 text-stone-800 dark:text-stone-100">
            {language === 'en' ? 'Technique' : 'Technik'}
          </h3>
          <p className="text-stone-600 dark:text-stone-400 text-sm">
            {language === 'en' 
              ? 'Learn proper stroke mechanics and breathing patterns' 
              : 'Lerne richtige Schwimmtechnik und Atemmuster'}
          </p>
        </div>
        <div className="bg-white dark:bg-stone-800 p-6 rounded-xl shadow-lg text-center">
          <Timer size={48} className="mx-auto mb-4 text-cyan-500" />
          <h3 className="font-bold text-lg mb-2 text-stone-800 dark:text-stone-100">
            {language === 'en' ? 'Workouts' : 'Workouts'}
          </h3>
          <p className="text-stone-600 dark:text-stone-400 text-sm">
            {language === 'en' 
              ? 'Structured training plans for all levels' 
              : 'Strukturierte Trainingspläne für alle Level'}
          </p>
        </div>
        <div className="bg-white dark:bg-stone-800 p-6 rounded-xl shadow-lg text-center">
          <Droplets size={48} className="mx-auto mb-4 text-blue-400" />
          <h3 className="font-bold text-lg mb-2 text-stone-800 dark:text-stone-100">
            {language === 'en' ? 'Progress' : 'Fortschritt'}
          </h3>
          <p className="text-stone-600 dark:text-stone-400 text-sm">
            {language === 'en' 
              ? 'Track your improvement over time' 
              : 'Verfolge deine Verbesserung über die Zeit'}
          </p>
        </div>
      </div>

      <div className="text-center">
        <button
          onClick={() => onStartLesson()}
          className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold shadow-lg transition-all transform hover:scale-105"
        >
          {language === 'en' ? '🏊 Start First Lesson' : '🏊 Erste Lektion starten'}
        </button>
      </div>

      <div className="mt-16 text-center text-stone-500 dark:text-stone-400 text-sm">
        <p>{language === 'en' ? 'Coming soon: Full swim lessons and workouts!' : 'Bald verfügbar: Vollständige Schwimm-Lektionen und Workouts!'}</p>
      </div>

      {/* Support Banner at the bottom */}
      <div className="mt-16">
        <SupportBanner />
      </div>
    </div>
  );
}

export default SwimHomePage;

