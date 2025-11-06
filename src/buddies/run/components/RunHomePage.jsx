import React from 'react';
import { Footprints, MapPin, Timer } from 'lucide-react';
import { useLanguage } from '../../../context/LanguageContext';
import SupportBanner from '../../../shared/components/SupportBanner';

function RunHomePage({ onStartLesson }) {
  const { language } = useLanguage();

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 mt-8">
      <div className="text-center mb-12">
        <div className="flex justify-center mb-6">
          <div className="bg-gradient-to-br from-green-400 to-emerald-500 p-8 rounded-full shadow-2xl">
            <Footprints size={80} className="text-white" />
          </div>
        </div>
        <h1 className="text-5xl font-bold text-stone-800 dark:text-stone-100 mb-4">
          {language === 'en' ? 'Welcome to RunBuddy!' : 'Willkommen bei RunBuddy!'}
        </h1>
        <p className="text-xl text-stone-600 dark:text-stone-400 max-w-2xl mx-auto">
          {language === 'en' 
            ? 'Your free companion for becoming a better runner. Learn proper form, build endurance, and reach your goals.' 
            : 'Dein kostenloser Begleiter zum besseren Läufer werden. Lerne richtige Form, baue Ausdauer auf und erreiche deine Ziele.'}
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mb-12">
        <div className="bg-white dark:bg-stone-800 p-6 rounded-xl shadow-lg text-center">
          <Footprints size={48} className="mx-auto mb-4 text-green-500" />
          <h3 className="font-bold text-lg mb-2 text-stone-800 dark:text-stone-100">
            {language === 'en' ? 'Running Form' : 'Lauftechnik'}
          </h3>
          <p className="text-stone-600 dark:text-stone-400 text-sm">
            {language === 'en' 
              ? 'Master efficient running mechanics' 
              : 'Meistere effiziente Lauftechnik'}
          </p>
        </div>
        <div className="bg-white dark:bg-stone-800 p-6 rounded-xl shadow-lg text-center">
          <Timer size={48} className="mx-auto mb-4 text-emerald-500" />
          <h3 className="font-bold text-lg mb-2 text-stone-800 dark:text-stone-100">
            {language === 'en' ? 'Training Plans' : 'Trainingspläne'}
          </h3>
          <p className="text-stone-600 dark:text-stone-400 text-sm">
            {language === 'en' 
              ? 'Structured programs for all distances' 
              : 'Strukturierte Programme für alle Distanzen'}
          </p>
        </div>
        <div className="bg-white dark:bg-stone-800 p-6 rounded-xl shadow-lg text-center">
          <MapPin size={48} className="mx-auto mb-4 text-lime-500" />
          <h3 className="font-bold text-lg mb-2 text-stone-800 dark:text-stone-100">
            {language === 'en' ? 'Routes' : 'Routen'}
          </h3>
          <p className="text-stone-600 dark:text-stone-400 text-sm">
            {language === 'en' 
              ? 'Track and plan your running routes' 
              : 'Verfolge und plane deine Laufrouten'}
          </p>
        </div>
      </div>

      <div className="text-center">
        <button
          onClick={() => onStartLesson()}
          className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg text-lg font-semibold shadow-lg transition-all transform hover:scale-105"
        >
          {language === 'en' ? '🏃 Start First Lesson' : '🏃 Erste Lektion starten'}
        </button>
      </div>

      <div className="mt-16 text-center text-stone-500 dark:text-stone-400 text-sm">
        <p>{language === 'en' ? 'Coming soon: Full running lessons and training plans!' : 'Bald verfügbar: Vollständige Lauf-Lektionen und Trainingspläne!'}</p>
      </div>

      {/* Support Banner at the bottom */}
      <div className="mt-16">
        <SupportBanner />
      </div>
    </div>
  );
}

export default RunHomePage;

