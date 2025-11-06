import React from 'react';
import { Mountain, BookOpen, Target, TrendingUp, Zap, Award, Users } from 'lucide-react';
import { useLanguage } from '../../../context/LanguageContext';
import SupportBanner from '../../../shared/components/SupportBanner';

function BoulderHomePage({ onStartLesson, onStartWarmup }) {
  const { language, t } = useLanguage();

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 mt-8">
      <div className="text-center mb-12">
        {/* Animated Climbing Wall SVG */}
        <div className="relative mb-8">
          <svg viewBox="0 0 400 250" className="w-full max-w-2xl mx-auto">
            {/* Wall with texture */}
            <defs>
              <pattern id="wallTexture" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <circle cx="10" cy="10" r="1" fill="#a8a29e" opacity="0.3" />
              </pattern>
            </defs>
            <rect x="50" y="20" width="300" height="210" fill="#d6d3d1" stroke="#78716c" strokeWidth="3" rx="10" />
            <rect x="50" y="20" width="300" height="210" fill="url(#wallTexture)" rx="10" />
            
            {/* Animated holds with glow effect */}
            <g className="animate-pulse" style={{ animationDuration: '3s', animationDelay: '0s' }}>
              <ellipse cx="100" cy="80" rx="22" ry="16" fill="#14b8a6" opacity="0.3" />
              <ellipse cx="100" cy="80" rx="20" ry="15" fill="#14b8a6" />
            </g>
            
            <g className="animate-pulse" style={{ animationDuration: '3s', animationDelay: '0.5s' }}>
              <circle cx="180" cy="100" r="20" fill="#f97316" opacity="0.3" />
              <circle cx="180" cy="100" r="18" fill="#f97316" />
            </g>
            
            <g className="animate-pulse" style={{ animationDuration: '3s', animationDelay: '1s' }}>
              <rect x="248" y="68" width="37" height="27" rx="9" fill="#14b8a6" opacity="0.3" />
              <rect x="250" y="70" width="35" height="25" rx="8" fill="#14b8a6" />
            </g>
            
            <g className="animate-pulse" style={{ animationDuration: '3s', animationDelay: '1.5s' }}>
              <ellipse cx="120" cy="160" rx="27" ry="20" fill="#f97316" opacity="0.3" />
              <ellipse cx="120" cy="160" rx="25" ry="18" fill="#f97316" />
            </g>
            
            <g className="animate-pulse" style={{ animationDuration: '3s', animationDelay: '2s' }}>
              <circle cx="220" cy="150" r="17" fill="#14b8a6" opacity="0.3" />
              <circle cx="220" cy="150" r="15" fill="#14b8a6" />
            </g>
            
            <g className="animate-pulse" style={{ animationDuration: '3s', animationDelay: '2.5s' }}>
              <ellipse cx="300" cy="180" rx="24" ry="18" fill="#f97316" opacity="0.3" />
              <ellipse cx="300" cy="180" rx="22" ry="16" fill="#f97316" />
            </g>
            
            {/* Animated climber */}
            <g className="animate-bounce" style={{ animationDuration: '2s' }}>
              {/* Head */}
              <circle cx="220" cy="200" r="15" fill="#f59e0b" />
              {/* Helmet */}
              <path d="M210,195 Q220,185 230,195" fill="#ef4444" />
              {/* Body */}
              <ellipse cx="220" cy="225" rx="12" ry="18" fill="#3b82f6" />
              {/* Arms reaching */}
              <path d="M208,215 L180,100" stroke="#f59e0b" strokeWidth="5" strokeLinecap="round" />
              <path d="M232,215 L285,180" stroke="#f59e0b" strokeWidth="5" strokeLinecap="round" />
              {/* Legs */}
              <path d="M215,240 L120,160" stroke="#1e293b" strokeWidth="5" strokeLinecap="round" />
              <path d="M225,240 L220,150" stroke="#1e293b" strokeWidth="5" strokeLinecap="round" />
              {/* Chalk bag */}
              <ellipse cx="210" cy="235" rx="8" ry="6" fill="#fbbf24" />
            </g>
            
            {/* Climbing route line */}
            <path 
              d="M 150,230 Q 120,160 180,100 Q 220,150 300,180" 
              stroke="#14b8a6" 
              strokeWidth="3" 
              strokeDasharray="5,5" 
              fill="none" 
              opacity="0.5"
              className="animate-pulse"
            />
            
            {/* Crash pad */}
            <rect x="80" y="230" width="240" height="15" rx="3" fill="#1e293b" opacity="0.7" />
            <rect x="85" y="232" width="230" height="11" rx="2" fill="#ef4444" opacity="0.5" />
            
            {/* Chalk cloud */}
            <g className="animate-ping" opacity="0.4" style={{ animationDuration: '2s' }}>
              <circle cx="180" cy="95" r="8" fill="#f8fafc" />
              <circle cx="185" cy="98" r="6" fill="#f8fafc" />
              <circle cx="175" cy="98" r="5" fill="#f8fafc" />
            </g>
            
            {/* Achievement stars */}
            <g className="animate-pulse" opacity="0.7">
              <path d="M70,50 L73,58 L82,59 L76,65 L78,74 L70,69 L62,74 L64,65 L58,59 L67,58 Z" fill="#fbbf24" />
              <path d="M330,100 L332,106 L339,107 L334,112 L336,119 L330,115 L324,119 L326,112 L321,107 L328,106 Z" fill="#fbbf24" />
            </g>
          </svg>
        </div>

        <h1 className="text-5xl font-bold bg-gradient-to-r from-teal-600 to-orange-600 bg-clip-text text-transparent mb-4">
          {t('welcome')} 🧗
        </h1>
        <p className="text-xl text-stone-600 dark:text-stone-400 max-w-2xl mx-auto leading-relaxed">
          {t('welcomeSubtitle')}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
          <button
            onClick={onStartLesson}
            className="group bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white font-bold py-4 px-8 rounded-xl shadow-lg transition-all transform hover:scale-105"
          >
            <span className="flex items-center justify-center gap-2 text-lg">
              <Mountain size={24} className="group-hover:animate-bounce" />
              {t('startLesson')}
            </span>
          </button>

          <button
            onClick={onStartWarmup}
            className="group bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold py-4 px-8 rounded-xl shadow-lg transition-all transform hover:scale-105"
          >
            <span className="flex items-center justify-center gap-2 text-lg">
              <Zap size={24} className="group-hover:animate-bounce" />
              {t('warmupTimer')}
            </span>
          </button>
        </div>
      </div>

      {/* Feature Cards */}
      <div className="grid md:grid-cols-3 gap-6 mb-12">
        {[
          { 
            icon: BookOpen, 
            title: t('lessonsCount'), 
            desc: language === 'de' ? 'Von Basics bis Profi-Techniken' : 'From basics to pro techniques',
            color: 'teal'
          },
          { 
            icon: Target, 
            title: t('practicalTasks'), 
            desc: language === 'de' ? 'Direkt an der Wand anwendbar' : 'Directly applicable at the wall',
            color: 'orange'
          },
          { 
            icon: TrendingUp, 
            title: t('trainingPlan'), 
            desc: language === 'de' ? 'Speichere & tracke deinen Fortschritt' : 'Save & track your progress',
            color: 'teal'
          }
        ].map((feature, idx) => (
          <div key={idx} className="group bg-gradient-to-br from-stone-50 to-stone-100 dark:from-stone-800 dark:to-stone-900 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 border border-stone-200 dark:border-stone-700">
            <div className={`bg-${feature.color}-500 w-16 h-16 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-12 transition-all`}>
              <feature.icon size={32} className="text-white" />
            </div>
            <h3 className="font-bold text-xl mb-2 text-stone-800 dark:text-stone-100">{feature.title}</h3>
            <p className="text-stone-600 dark:text-stone-400 text-sm leading-relaxed">{feature.desc}</p>
          </div>
        ))}
      </div>

      {/* Boulder Grades */}
      <div className="bg-gradient-to-r from-teal-100 to-orange-100 dark:from-teal-900/30 dark:to-orange-900/30 rounded-2xl p-6 mb-12 border border-teal-200 dark:border-teal-800">
        <h3 className="text-xl font-bold text-stone-800 dark:text-stone-100 mb-4 text-center flex items-center justify-center gap-2">
          <Award className="text-teal-500" />
          {language === 'de' ? 'Deine Boulder-Reise' : 'Your Bouldering Journey'}
        </h3>
        <div className="flex justify-between items-center">
          {[
            { grade: 'V0-V2', label: language === 'de' ? 'Anfänger' : 'Beginner', emoji: '🟢' },
            { grade: 'V3-V4', label: language === 'de' ? 'Fortgeschritten' : 'Intermediate', emoji: '🔵' },
            { grade: 'V5-V7', label: language === 'de' ? 'Erfahren' : 'Advanced', emoji: '🟣' },
            { grade: 'V8+', label: language === 'de' ? 'Experte' : 'Expert', emoji: '⚫' }
          ].map((item, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-white dark:bg-stone-800 flex items-center justify-center text-2xl shadow-lg mb-2 border-2 border-teal-500">
                {item.emoji}
              </div>
              <div className="text-sm font-bold text-stone-800 dark:text-stone-100">{item.grade}</div>
              <div className="text-xs text-stone-600 dark:text-stone-400">{item.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* What You'll Learn */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
        {[
          { emoji: '🧗‍♀️', label: language === 'de' ? 'Grundlagen' : 'Basics' },
          { emoji: '💪', label: language === 'de' ? 'Kraft' : 'Strength' },
          { emoji: '🧠', label: language === 'de' ? 'Technik' : 'Technique' },
          { emoji: '🎯', label: language === 'de' ? 'Strategie' : 'Strategy' },
          { emoji: '🤸', label: language === 'de' ? 'Beweglichkeit' : 'Flexibility' },
          { emoji: '🔥', label: language === 'de' ? 'Ausdauer' : 'Endurance' },
          { emoji: '🧘', label: language === 'de' ? 'Balance' : 'Balance' },
          { emoji: '🎉', label: language === 'de' ? 'Spaß' : 'Fun' }
        ].map((item, idx) => (
          <div key={idx} className="bg-white dark:bg-stone-800 rounded-xl p-4 text-center shadow-md hover:shadow-lg transition-all transform hover:scale-105 border border-stone-200 dark:border-stone-700">
            <div className="text-3xl mb-2">{item.emoji}</div>
            <div className="text-sm font-semibold text-stone-700 dark:text-stone-300">{item.label}</div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="text-center bg-gradient-to-r from-teal-500 via-cyan-500 to-orange-500 rounded-2xl p-8 shadow-xl">
        <Mountain size={48} className="mx-auto mb-4 text-white animate-bounce" />
        <h2 className="text-2xl font-bold text-white mb-4">
          {t('readyToStart')}
        </h2>
        <p className="text-white/90 mb-6 max-w-xl mx-auto">
          {language === 'de' 
            ? 'Starte mit den Grundlagen oder wärme dich mit unserem interaktiven Timer auf. Jede große Reise beginnt mit dem ersten Griff!'
            : 'Start with the basics or warm up with our interactive timer. Every great journey begins with the first grip!'
          }
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <button
            onClick={onStartLesson}
            className="bg-white text-teal-600 hover:bg-teal-50 px-6 py-3 rounded-xl font-bold shadow-lg transition-all transform hover:scale-105"
          >
            {language === 'de' ? '📚 Lektionen ansehen' : '📚 View Lessons'}
          </button>
          <button
            onClick={onStartWarmup}
            className="bg-white text-orange-600 hover:bg-orange-50 px-6 py-3 rounded-xl font-bold shadow-lg transition-all transform hover:scale-105"
          >
            {language === 'de' ? '🔥 Warm-up starten' : '🔥 Start Warm-up'}
          </button>
        </div>
      </div>

      <div className="mt-16">
        <SupportBanner />
      </div>
    </div>
  );
}

export default BoulderHomePage;

