import React from 'react';
import { Waves, Droplets, Timer, Award, TrendingUp } from 'lucide-react';
import { useLanguage } from '../../../context/LanguageContext';
import SupportBanner from '../../../shared/components/SupportBanner';

function SwimHomePage({ onStartLesson }) {
  const { language } = useLanguage();

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 mt-8">
      <div className="text-center mb-12">
        {/* Animated Swimming SVG */}
        <div className="relative mb-8">
          <svg viewBox="0 0 400 200" className="w-full max-w-2xl mx-auto">
            {/* Water waves */}
            <defs>
              <linearGradient id="waterGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.6" />
              </linearGradient>
            </defs>
            
            {/* Water surface */}
            <path d="M0,100 Q50,90 100,100 T200,100 T300,100 T400,100 L400,200 L0,200 Z" fill="url(#waterGradient)" className="animate-pulse" />
            
            {/* Swimmer */}
            <g className="animate-bounce" style={{ animationDuration: '2s' }}>
              {/* Head */}
              <circle cx="200" cy="80" r="15" fill="#f59e0b" />
              {/* Goggles */}
              <ellipse cx="200" cy="80" rx="12" ry="6" fill="#3b82f6" opacity="0.7" />
              {/* Body */}
              <ellipse cx="200" cy="100" rx="20" ry="12" fill="#f59e0b" />
              {/* Arms */}
              <path d="M180,95 Q160,85 150,90" stroke="#f59e0b" strokeWidth="4" fill="none" strokeLinecap="round" />
              <path d="M220,95 Q240,85 250,90" stroke="#f59e0b" strokeWidth="4" fill="none" strokeLinecap="round" />
              {/* Legs */}
              <path d="M195,110 L190,125" stroke="#f59e0b" strokeWidth="4" strokeLinecap="round" />
              <path d="M205,110 L210,125" stroke="#f59e0b" strokeWidth="4" strokeLinecap="round" />
            </g>
            
            {/* Bubbles */}
            <circle cx="150" cy="120" r="3" fill="#3b82f6" opacity="0.5" className="animate-ping" />
            <circle cx="250" cy="130" r="4" fill="#06b6d4" opacity="0.5" className="animate-ping" style={{ animationDelay: '0.5s' }} />
            <circle cx="180" cy="140" r="2" fill="#3b82f6" opacity="0.5" className="animate-ping" style={{ animationDelay: '1s' }} />
            
            {/* Lane lines */}
            <line x1="0" y1="95" x2="400" y2="95" stroke="#3b82f6" strokeWidth="1" strokeDasharray="10,5" opacity="0.3" />
            <line x1="0" y1="105" x2="400" y2="105" stroke="#3b82f6" strokeWidth="1" strokeDasharray="10,5" opacity="0.3" />
          </svg>
        </div>

        <h1 className="text-5xl font-bold text-stone-800 dark:text-stone-100 mb-4">
          {language === 'en' ? 'Welcome to SwimBuddy!' : 'Willkommen bei SwimBuddy!'}
        </h1>
        <p className="text-xl text-stone-600 dark:text-stone-400 max-w-2xl mx-auto leading-relaxed">
          {language === 'en' 
            ? 'Dive into the world of swimming! Master strokes, build endurance, and glide through water with confidence.' 
            : 'Tauche ein in die Welt des Schwimmens! Meistere Schwimmstile, baue Ausdauer auf und gleite selbstbewusst durchs Wasser.'}
        </p>
      </div>

      {/* Feature Cards with Animations */}
      <div className="grid md:grid-cols-3 gap-6 mb-12">
        <div className="group bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 border border-blue-100 dark:border-blue-800">
          <div className="bg-blue-500 w-16 h-16 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
            <Waves size={32} className="text-white" />
          </div>
          <h3 className="font-bold text-xl mb-2 text-stone-800 dark:text-stone-100">
            {language === 'en' ? 'Perfect Technique' : 'Perfekte Technik'}
          </h3>
          <p className="text-stone-600 dark:text-stone-400 text-sm leading-relaxed">
            {language === 'en' 
              ? 'Learn proper stroke mechanics, breathing patterns, and body positioning for maximum efficiency' 
              : 'Lerne richtige Schwimmtechnik, Atemmuster und Körperhaltung für maximale Effizienz'}
          </p>
        </div>

        <div className="group bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-cyan-900/20 dark:to-blue-900/20 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 border border-cyan-100 dark:border-cyan-800">
          <div className="bg-cyan-500 w-16 h-16 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
            <Timer size={32} className="text-white" />
          </div>
          <h3 className="font-bold text-xl mb-2 text-stone-800 dark:text-stone-100">
            {language === 'en' ? 'Structured Workouts' : 'Strukturierte Workouts'}
          </h3>
          <p className="text-stone-600 dark:text-stone-400 text-sm leading-relaxed">
            {language === 'en' 
              ? 'Follow progressive training plans designed for all levels, from beginner to competitive swimmer' 
              : 'Folge progressiven Trainingsplänen für alle Level, vom Anfänger bis zum Wettkampfschwimmer'}
          </p>
        </div>

        <div className="group bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 border border-blue-100 dark:border-indigo-800">
          <div className="bg-indigo-500 w-16 h-16 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
            <TrendingUp size={32} className="text-white" />
          </div>
          <h3 className="font-bold text-xl mb-2 text-stone-800 dark:text-stone-100">
            {language === 'en' ? 'Track Progress' : 'Fortschritt tracken'}
          </h3>
          <p className="text-stone-600 dark:text-stone-400 text-sm leading-relaxed">
            {language === 'en' 
              ? 'Monitor your improvement with detailed analytics on speed, distance, and technique mastery' 
              : 'Verfolge deine Verbesserung mit detaillierten Analysen zu Geschwindigkeit, Distanz und Technik'}
          </p>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl p-8 shadow-xl">
        <div className="flex justify-center mb-4">
          <Award size={48} className="text-white animate-pulse" />
        </div>
        <h2 className="text-2xl font-bold text-white mb-4">
          {language === 'en' ? 'Ready to Make Waves?' : 'Bereit, Wellen zu schlagen?'}
        </h2>
        <button
          onClick={() => onStartLesson()}
          className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-xl text-lg font-bold shadow-lg transition-all transform hover:scale-105"
        >
          {language === 'en' ? '🏊 Start Swimming Journey' : '🏊 Schwimm-Reise starten'}
        </button>
      </div>

      <div className="mt-16 text-center text-stone-500 dark:text-stone-400 text-sm">
        <p className="italic">{language === 'en' ? 'Coming soon: Comprehensive swim lessons, technique videos, and training plans!' : 'Bald verfügbar: Umfassende Schwimm-Lektionen, Technik-Videos und Trainingspläne!'}</p>
      </div>

      {/* Support Banner at the bottom */}
      <div className="mt-16">
        <SupportBanner />
      </div>
    </div>
  );
}

export default SwimHomePage;
