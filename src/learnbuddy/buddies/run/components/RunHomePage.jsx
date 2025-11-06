import React from 'react';
import { Footprints, MapPin, Timer, Zap, Heart } from 'lucide-react';
import { useLanguage } from '../../../context/LanguageContext';
import SupportBanner from '../../../shared/components/SupportBanner';

function RunHomePage({ onStartLesson }) {
  const { language } = useLanguage();

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 mt-8">
      <div className="text-center mb-12">
        {/* Animated Running SVG */}
        <div className="relative mb-8">
          <svg viewBox="0 0 400 200" className="w-full max-w-2xl mx-auto">
            {/* Running track */}
            <ellipse cx="200" cy="150" rx="180" ry="30" fill="#22c55e" opacity="0.2" />
            <ellipse cx="200" cy="150" rx="150" ry="25" fill="#16a34a" opacity="0.3" />
            
            {/* Runner */}
            <g className="animate-bounce" style={{ animationDuration: '1s' }}>
              {/* Head */}
              <circle cx="200" cy="60" r="18" fill="#f59e0b" />
              {/* Headband */}
              <ellipse cx="200" cy="55" rx="18" ry="5" fill="#22c55e" />
              {/* Body */}
              <ellipse cx="200" cy="90" rx="15" ry="25" fill="#3b82f6" />
              {/* Arms */}
              <path d="M185,80 L170,100" stroke="#f59e0b" strokeWidth="5" strokeLinecap="round" />
              <path d="M215,80 L230,70" stroke="#f59e0b" strokeWidth="5" strokeLinecap="round" />
              {/* Legs */}
              <path d="M195,110 L185,140" stroke="#1e293b" strokeWidth="5" strokeLinecap="round" />
              <path d="M205,110 L220,135" stroke="#1e293b" strokeWidth="5" strokeLinecap="round" />
              {/* Shoes */}
              <ellipse cx="185" cy="142" rx="8" ry="5" fill="#22c55e" />
              <ellipse cx="220" cy="137" rx="8" ry="5" fill="#22c55e" />
            </g>
            
            {/* Speed lines */}
            <line x1="150" y1="70" x2="120" y2="70" stroke="#22c55e" strokeWidth="3" strokeLinecap="round" opacity="0.6" className="animate-pulse" />
            <line x1="150" y1="85" x2="130" y2="85" stroke="#22c55e" strokeWidth="3" strokeLinecap="round" opacity="0.6" className="animate-pulse" style={{ animationDelay: '0.2s' }} />
            <line x1="150" y1="100" x2="125" y2="100" stroke="#22c55e" strokeWidth="3" strokeLinecap="round" opacity="0.6" className="animate-pulse" style={{ animationDelay: '0.4s' }} />
            
            {/* Footprints on track */}
            <g opacity="0.3" className="animate-ping" style={{ animationDuration: '2s' }}>
              <ellipse cx="140" cy="150" rx="8" ry="12" fill="#16a34a" transform="rotate(-20 140 150)" />
              <ellipse cx="170" cy="148" rx="8" ry="12" fill="#16a34a" transform="rotate(15 170 148)" />
            </g>
          </svg>
        </div>

        <h1 className="text-5xl font-bold text-stone-800 dark:text-stone-100 mb-4">
          {language === 'en' ? 'Welcome to RunBuddy!' : 'Willkommen bei RunBuddy!'}
        </h1>
        <p className="text-xl text-stone-600 dark:text-stone-400 max-w-2xl mx-auto leading-relaxed">
          {language === 'en' 
            ? 'Your journey to becoming a better runner starts here. Master form, build endurance, and crush your goals!' 
            : 'Deine Reise zum besseren Läufer beginnt hier. Meistere die Form, baue Ausdauer auf und erreiche deine Ziele!'}
        </p>
      </div>

      {/* Feature Cards with Animations */}
      <div className="grid md:grid-cols-3 gap-6 mb-12">
        <div className="group bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 border border-green-100 dark:border-green-800">
          <div className="bg-green-500 w-16 h-16 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-12 transition-all">
            <Footprints size={32} className="text-white" />
          </div>
          <h3 className="font-bold text-xl mb-2 text-stone-800 dark:text-stone-100">
            {language === 'en' ? 'Perfect Running Form' : 'Perfekte Lauftechnik'}
          </h3>
          <p className="text-stone-600 dark:text-stone-400 text-sm leading-relaxed">
            {language === 'en' 
              ? 'Learn efficient running mechanics, proper foot strike, and posture to prevent injuries and run faster' 
              : 'Lerne effiziente Laufmechanik, richtigen Fußaufsatz und Haltung zur Verletzungsprävention'}
          </p>
        </div>

        <div className="group bg-gradient-to-br from-emerald-50 to-lime-50 dark:from-emerald-900/20 dark:to-lime-900/20 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 border border-emerald-100 dark:border-emerald-800">
          <div className="bg-emerald-500 w-16 h-16 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-12 transition-all">
            <Timer size={32} className="text-white" />
          </div>
          <h3 className="font-bold text-xl mb-2 text-stone-800 dark:text-stone-100">
            {language === 'en' ? 'Training Plans' : 'Trainingspläne'}
          </h3>
          <p className="text-stone-600 dark:text-stone-400 text-sm leading-relaxed">
            {language === 'en' 
              ? 'Structured programs for 5K, 10K, half-marathon, and marathon distances tailored to your level' 
              : 'Strukturierte Programme für 5K, 10K, Halbmarathon und Marathon, angepasst an dein Level'}
          </p>
        </div>

        <div className="group bg-gradient-to-br from-lime-50 to-green-50 dark:from-lime-900/20 dark:to-green-900/20 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 border border-lime-100 dark:border-lime-800">
          <div className="bg-lime-500 w-16 h-16 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-12 transition-all">
            <MapPin size={32} className="text-white" />
          </div>
          <h3 className="font-bold text-xl mb-2 text-stone-800 dark:text-stone-100">
            {language === 'en' ? 'Route Tracking' : 'Routen-Tracking'}
          </h3>
          <p className="text-stone-600 dark:text-stone-400 text-sm leading-relaxed">
            {language === 'en' 
              ? 'Discover, save, and share your favorite running routes with detailed elevation and pace data' 
              : 'Entdecke, speichere und teile deine Lieblings-Laufrouten mit detaillierten Höhen- und Tempo-Daten'}
          </p>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-3 gap-4 mb-12">
        <div className="bg-white dark:bg-stone-800 rounded-xl p-6 text-center shadow-lg border border-stone-200 dark:border-stone-700">
          <Zap size={32} className="mx-auto mb-2 text-green-500" />
          <div className="text-3xl font-bold text-stone-800 dark:text-stone-100 mb-1">∞</div>
          <div className="text-sm text-stone-600 dark:text-stone-400">{language === 'en' ? 'Lessons' : 'Lektionen'}</div>
        </div>
        <div className="bg-white dark:bg-stone-800 rounded-xl p-6 text-center shadow-lg border border-stone-200 dark:border-stone-700">
          <Heart size={32} className="mx-auto mb-2 text-red-500" />
          <div className="text-3xl font-bold text-stone-800 dark:text-stone-100 mb-1">100%</div>
          <div className="text-sm text-stone-600 dark:text-stone-400">{language === 'en' ? 'Free' : 'Kostenlos'}</div>
        </div>
        <div className="bg-white dark:bg-stone-800 rounded-xl p-6 text-center shadow-lg border border-stone-200 dark:border-stone-700">
          <Footprints size={32} className="mx-auto mb-2 text-emerald-500" />
          <div className="text-3xl font-bold text-stone-800 dark:text-stone-100 mb-1">0→∞</div>
          <div className="text-sm text-stone-600 dark:text-stone-400">{language === 'en' ? 'All Levels' : 'Alle Level'}</div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center bg-gradient-to-r from-green-500 via-emerald-500 to-lime-500 rounded-2xl p-8 shadow-xl">
        <h2 className="text-2xl font-bold text-white mb-4">
          {language === 'en' ? 'Ready to Hit the Road?' : 'Bereit, loszulaufen?'}
        </h2>
        <button
          onClick={() => onStartLesson()}
          className="bg-white text-green-600 hover:bg-green-50 px-8 py-4 rounded-xl text-lg font-bold shadow-lg transition-all transform hover:scale-105"
        >
          {language === 'en' ? '🏃 Start Running Journey' : '🏃 Lauf-Reise starten'}
        </button>
      </div>

      <div className="mt-16 text-center text-stone-500 dark:text-stone-400 text-sm">
        <p className="italic">{language === 'en' ? 'Coming soon: Complete running lessons, form analysis, and personalized training plans!' : 'Bald verfügbar: Vollständige Lauf-Lektionen, Formanalyse und personalisierte Trainingspläne!'}</p>
      </div>

      {/* Support Banner at the bottom */}
      <div className="mt-16">
        <SupportBanner />
      </div>
    </div>
  );
}

export default RunHomePage;
