import React from 'react';
import { Mountain, BookOpen, Target, TrendingUp, Zap, Globe } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import SupportBanner from './SupportBanner';

function HomePage({ onStartLesson, onStartWarmup }) {
  const { language, t } = useLanguage();

  return (
    <div className="max-w-2xl mx-auto px-4 py-8 mt-8">{/* Added top margin for spacing */}

      {/* Hero Section */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-stone-800 dark:text-stone-100 mb-4">
          {t('welcome')} 🧗
        </h1>
        
        {/* Climbing Wall SVG */}
        <div className="my-8">
          <svg viewBox="0 0 400 300" className="w-full max-w-md mx-auto drop-shadow-lg">
            {/* Wall */}
            <rect x="50" y="20" width="300" height="260" fill="#d6d3d1" stroke="#78716c" strokeWidth="2" rx="8" />
            
            {/* Holds - various shapes */}
            <ellipse cx="100" cy="80" rx="20" ry="15" fill="#14b8a6" />
            <circle cx="180" cy="100" r="18" fill="#f97316" />
            <rect x="250" y="70" width="35" height="25" rx="8" fill="#14b8a6" />
            <ellipse cx="120" cy="160" rx="25" ry="18" fill="#f97316" />
            <circle cx="220" cy="150" r="15" fill="#14b8a6" />
            <ellipse cx="300" cy="180" rx="22" ry="16" fill="#f97316" />
            <circle cx="150" cy="230" r="20" fill="#14b8a6" />
            <rect x="260" y="220" width="30" height="20" rx="6" fill="#f97316" />
            
            {/* Climber stick figure */}
            <circle cx="220" cy="200" r="15" fill="#57534e" />
            <line x1="220" y1="215" x2="220" y2="260" stroke="#57534e" strokeWidth="4" strokeLinecap="round" />
            <line x1="220" y1="230" x2="190" y2="250" stroke="#57534e" strokeWidth="4" strokeLinecap="round" />
            <line x1="220" y1="230" x2="250" y2="250" stroke="#57534e" strokeWidth="4" strokeLinecap="round" />
            <line x1="220" y1="260" x2="200" y2="285" stroke="#57534e" strokeWidth="4" strokeLinecap="round" />
            <line x1="220" y1="260" x2="240" y2="285" stroke="#57534e" strokeWidth="4" strokeLinecap="round" />
          </svg>
        </div>

        <p className="text-lg text-stone-700 dark:text-stone-300 mb-6 leading-relaxed">
          {t('welcomeSubtitle')}
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center mb-8">
          <button
            onClick={onStartLesson}
            className="bg-teal-500 hover:bg-teal-600 text-white font-bold py-4 px-8 rounded-lg shadow-md transition-all transform hover:scale-105"
          >
            <span className="flex items-center justify-center gap-2 text-lg">
              <Mountain size={24} />
              {t('startLesson')}
            </span>
          </button>

          <button
            onClick={onStartWarmup}
            className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-lg shadow-md transition-all transform hover:scale-105"
          >
            <span className="flex items-center justify-center gap-2 text-lg">
              <Zap size={24} />
              {t('warmupTimer')}
            </span>
          </button>
        </div>
      </div>

      {/* Quick Info Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-12">
        <div className="bg-white dark:bg-stone-800 rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow">
          <BookOpen size={32} className="mx-auto mb-3 text-teal-500" />
          <h3 className="font-bold text-stone-800 dark:text-stone-100 mb-2">{t('lessonsCount')}</h3>
          <p className="text-sm text-stone-600 dark:text-stone-400">
            {language === 'de' ? 'Von Basics bis Profi-Techniken' : 'From basics to pro techniques'}
          </p>
        </div>
        <div className="bg-white dark:bg-stone-800 rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow">
          <Target size={32} className="mx-auto mb-3 text-orange-500" />
          <h3 className="font-bold text-stone-800 dark:text-stone-100 mb-2">{t('practicalTasks')}</h3>
          <p className="text-sm text-stone-600 dark:text-stone-400">
            {language === 'de' ? 'Direkt an der Wand anwendbar' : 'Directly applicable at the wall'}
          </p>
        </div>
        <div className="bg-white dark:bg-stone-800 rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow">
          <TrendingUp size={32} className="mx-auto mb-3 text-teal-500" />
          <h3 className="font-bold text-stone-800 dark:text-stone-100 mb-2">{t('trainingPlan')}</h3>
          <p className="text-sm text-stone-600 dark:text-stone-400">
            {language === 'de' ? 'Speichere & tracke deinen Fortschritt' : 'Save & track your progress'}
          </p>
        </div>
      </div>

      {/* Call to Action */}
      <div className="mt-12 bg-gradient-to-br from-teal-50 to-orange-50 dark:from-teal-900/20 dark:to-orange-900/20 rounded-lg shadow-md p-8 border-2 border-teal-300 dark:border-teal-700">
        <h2 className="text-2xl font-bold text-stone-800 dark:text-stone-100 mb-4 text-center">
          🎯 {t('readyToStart')}
        </h2>
        <p className="text-stone-700 dark:text-stone-300 text-center mb-6">
          {language === 'de' 
            ? 'Starte mit den Grundlagen oder wärme dich mit unserem interaktiven Timer auf. Jede große Reise beginnt mit dem ersten Schritt – oder in diesem Fall, dem ersten Griff!'
            : 'Start with the basics or warm up with our interactive timer. Every great journey begins with the first step – or in this case, the first grip!'
          }
        </p>
        <div className="flex justify-center gap-4">
          <div className="text-center">
            <div className="text-3xl mb-2">🧗‍♀️</div>
            <div className="text-sm text-stone-600">Für Anfänger</div>
          </div>
          <div className="text-center">
            <div className="text-3xl mb-2">💪</div>
            <div className="text-sm text-stone-600">Kraft entwickeln</div>
          </div>
          <div className="text-center">
            <div className="text-3xl mb-2">🧠</div>
            <div className="text-sm text-stone-600">Technik lernen</div>
          </div>
          <div className="text-center">
            <div className="text-3xl mb-2">🎉</div>
            <div className="text-sm text-stone-600">Spaß haben</div>
          </div>
        </div>
      </div>

      {/* Support Banner - with top margin for spacing */}
      <div className="mt-12">
        <SupportBanner />
      </div>
    </div>
  );
}

export default HomePage;

