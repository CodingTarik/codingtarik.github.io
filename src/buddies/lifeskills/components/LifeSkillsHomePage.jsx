import React from 'react';
import { Lightbulb, Target, TrendingUp, Brain, Rocket } from 'lucide-react';
import { useLanguage } from '../../../context/LanguageContext';
import SupportBanner from '../../../shared/components/SupportBanner';

function LifeSkillsHomePage({ onStartLesson }) {
  const { language } = useLanguage();

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 mt-8">
      <div className="text-center mb-12">
        {/* Growth Tree SVG */}
        <div className="relative mb-8">
          <svg viewBox="0 0 400 200" className="w-full max-w-2xl mx-auto">
            {/* Sun */}
            <circle cx="350" cy="30" r="20" fill="#eab308" opacity="0.8" className="animate-pulse" />
            <line x1="350" y1="10" x2="350" y2="0" stroke="#eab308" strokeWidth="2" />
            <line x1="370" y1="30" x2="380" y2="30" stroke="#eab308" strokeWidth="2" />
            <line x1="330" y1="30" x2="320" y2="30" stroke="#eab308" strokeWidth="2" />
            <line x1="365" y1="15" x2="373" y2="7" stroke="#eab308" strokeWidth="2" />
            <line x1="335" y1="15" x2="327" y2="7" stroke="#eab308" strokeWidth="2" />
            
            {/* Tree trunk */}
            <rect x="190" y="120" width="20" height="60" rx="3" fill="#78716c" />
            
            {/* Tree crown - layered circles */}
            <circle cx="200" cy="100" r="40" fill="#22c55e" opacity="0.8" />
            <circle cx="180" cy="90" r="35" fill="#16a34a" opacity="0.8" />
            <circle cx="220" cy="90" r="35" fill="#4ade80" opacity="0.8" />
            <circle cx="200" cy="70" r="30" fill="#86efac" opacity="0.8" />
            
            {/* Lightbulbs as fruits */}
            <g className="animate-bounce" style={{ animationDuration: '2s' }}>
              <circle cx="170" cy="85" r="8" fill="#eab308" />
              <path d="M170,93 L168,98 L172,98 Z" fill="#78716c" />
            </g>
            <g className="animate-bounce" style={{ animationDuration: '2.5s' }}>
              <circle cx="230" cy="80" r="8" fill="#eab308" />
              <path d="M230,88 L228,93 L232,93 Z" fill="#78716c" />
            </g>
            <g className="animate-bounce" style={{ animationDuration: '3s' }}>
              <circle cx="200" cy="60" r="8" fill="#eab308" />
              <path d="M200,68 L198,73 L202,73 Z" fill="#78716c" />
            </g>
            
            {/* Ground */}
            <ellipse cx="200" cy="180" rx="80" ry="10" fill="#a8a29e" opacity="0.5" />
            
            {/* Growth arrows */}
            <path d="M120,140 L120,100 L115,105 M120,100 L125,105" stroke="#eab308" strokeWidth="2" fill="none" className="animate-pulse" />
            <path d="M280,140 L280,100 L275,105 M280,100 L285,105" stroke="#eab308" strokeWidth="2" fill="none" className="animate-pulse" style={{ animationDelay: '0.5s' }} />
          </svg>
        </div>

        <h1 className="text-5xl font-bold bg-gradient-to-r from-yellow-600 to-amber-600 bg-clip-text text-transparent mb-4">
          {language === 'en' ? 'Welcome to LifeSkillsBuddy!' : 'Willkommen bei LifeSkillsBuddy!'}
        </h1>
        <p className="text-xl text-stone-600 dark:text-stone-400 max-w-2xl mx-auto leading-relaxed">
          {language === 'en' 
            ? 'Grow into your best self. Master essential life skills, build confidence, and achieve your goals.' 
            : 'Wachse zu deinem besten Ich. Meistere essenzielle Life Skills, baue Selbstvertrauen auf und erreiche deine Ziele.'}
        </p>
      </div>

      {/* Feature Cards */}
      <div className="grid md:grid-cols-3 gap-6 mb-12">
        {[
          { icon: Brain, title: language === 'en' ? 'Critical Thinking' : 'Kritisches Denken', desc: language === 'en' ? 'Make better decisions' : 'Bessere Entscheidungen treffen', color: 'yellow' },
          { icon: Target, title: language === 'en' ? 'Goal Setting' : 'Zielsetzung', desc: language === 'en' ? 'Achieve what matters most' : 'Erreiche was wirklich zählt', color: 'amber' },
          { icon: TrendingUp, title: language === 'en' ? 'Personal Growth' : 'Persönliches Wachstum', desc: language === 'en' ? 'Continuous improvement' : 'Kontinuierliche Verbesserung', color: 'orange' }
        ].map((feature, idx) => (
          <div key={idx} className="group bg-gradient-to-br from-yellow-50 to-amber-50 dark:from-yellow-900/20 dark:to-amber-900/20 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 border border-yellow-100 dark:border-yellow-800">
            <div className={`bg-${feature.color}-500 w-16 h-16 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-12 transition-all`}>
              <feature.icon size={32} className="text-white" />
            </div>
            <h3 className="font-bold text-xl mb-2 text-stone-800 dark:text-stone-100">{feature.title}</h3>
            <p className="text-stone-600 dark:text-stone-400 text-sm leading-relaxed">{feature.desc}</p>
          </div>
        ))}
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
        {[
          { name: language === 'en' ? 'Communication' : 'Kommunikation', emoji: '💬' },
          { name: language === 'en' ? 'Time Management' : 'Zeitmanagement', emoji: '⏰' },
          { name: language === 'en' ? 'Financial Literacy' : 'Finanzwissen', emoji: '💰' },
          { name: language === 'en' ? 'Emotional Intelligence' : 'Emotionale Intelligenz', emoji: '❤️' }
        ].map((skill, idx) => (
          <div key={idx} className="bg-white dark:bg-stone-800 rounded-xl p-4 text-center shadow-md hover:shadow-lg transition-all transform hover:scale-105 border border-stone-200 dark:border-stone-700">
            <div className="text-3xl mb-2">{skill.emoji}</div>
            <div className="text-sm font-semibold text-stone-700 dark:text-stone-300">{skill.name}</div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="text-center bg-gradient-to-r from-yellow-500 via-amber-500 to-orange-500 rounded-2xl p-8 shadow-xl">
        <Rocket size={48} className="mx-auto mb-4 text-white animate-bounce" />
        <h2 className="text-2xl font-bold text-white mb-4">
          {language === 'en' ? 'Ready to Level Up?' : 'Bereit fürs nächste Level?'}
        </h2>
        <button
          onClick={() => onStartLesson()}
          className="bg-white text-yellow-600 hover:bg-yellow-50 px-8 py-4 rounded-xl text-lg font-bold shadow-lg transition-all transform hover:scale-105"
        >
          {language === 'en' ? '💡 Start Learning' : '💡 Lernen starten'}
        </button>
      </div>

      <div className="mt-16 text-center text-stone-500 dark:text-stone-400 text-sm">
        <p className="italic">{language === 'en' ? 'Coming soon: Comprehensive life skills courses, habit tracking, and personal development tools!' : 'Bald verfügbar: Umfassende Life-Skills-Kurse, Habit-Tracking und persönliche Entwicklungs-Tools!'}</p>
      </div>

      <div className="mt-16">
        <SupportBanner />
      </div>
    </div>
  );
}

export default LifeSkillsHomePage;

