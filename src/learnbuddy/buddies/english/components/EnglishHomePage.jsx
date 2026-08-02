import React from 'react';
import { Languages, BookText, Headphones, MessageCircle, Globe, Star } from 'lucide-react';
import { useLanguage } from '../../../context/LanguageContext';
import SupportBanner from '../../../shared/components/SupportBanner';

function EnglishHomePage({ onStartLesson }) {
  const { language } = useLanguage();

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 mt-8">
      <div className="text-center mb-12">
        {/* Language Learning SVG */}
        <div className="relative mb-8">
          <svg viewBox="0 0 400 200" className="w-full max-w-2xl mx-auto">
            {/* Globe */}
            <circle cx="200" cy="100" r="60" fill="#f43f5e" opacity="0.2" className="animate-pulse" style={{ animationDuration: '3s' }} />
            <circle cx="200" cy="100" r="60" fill="none" stroke="#f43f5e" strokeWidth="2" />
            
            {/* Latitude lines */}
            <ellipse cx="200" cy="100" rx="60" ry="20" fill="none" stroke="#f43f5e" strokeWidth="1" opacity="0.5" />
            <ellipse cx="200" cy="100" rx="60" ry="40" fill="none" stroke="#f43f5e" strokeWidth="1" opacity="0.5" />
            
            {/* Longitude lines */}
            <ellipse cx="200" cy="100" rx="20" ry="60" fill="none" stroke="#f43f5e" strokeWidth="1" opacity="0.5" />
            <ellipse cx="200" cy="100" rx="40" ry="60" fill="none" stroke="#f43f5e" strokeWidth="1" opacity="0.5" />
            
            {/* Speech bubbles with English words */}
            <g className="animate-bounce" style={{ animationDuration: '2s' }}>
              <rect x="120" y="40" width="50" height="30" rx="8" fill="#ec4899" />
              <path d="M145,70 L140,80 L150,70 Z" fill="#ec4899" />
              <text x="130" y="60" fill="white" fontSize="14" fontWeight="bold">Hello</text>
            </g>
            
            <g className="animate-bounce" style={{ animationDuration: '2.5s', animationDelay: '0.3s' }}>
              <rect x="230" y="35" width="60" height="30" rx="8" fill="#f43f5e" />
              <path d="M260,65 L255,75 L265,65 Z" fill="#f43f5e" />
              <text x="238" y="55" fill="white" fontSize="14" fontWeight="bold">Learn</text>
            </g>
            
            <g className="animate-bounce" style={{ animationDuration: '3s', animationDelay: '0.6s' }}>
              <rect x="110" y="130" width="60" height="30" rx="8" fill="#fb7185" />
              <path d="M140,130 L135,120 L145,130 Z" fill="#fb7185" />
              <text x="120" y="150" fill="white" fontSize="14" fontWeight="bold">Speak</text>
            </g>
            
            <g className="animate-bounce" style={{ animationDuration: '2.8s', animationDelay: '0.9s' }}>
              <rect x="235" y="135" width="55" height="30" rx="8" fill="#fda4af" />
              <path d="M262,135 L257,125 L267,135 Z" fill="#fda4af" />
              <text x="245" y="155" fill="white" fontSize="14" fontWeight="bold">Read</text>
            </g>
            
            {/* Stars for achievement */}
            <g opacity="0.7" className="animate-pulse">
              <path d="M280,80 L283,87 L291,88 L286,93 L287,101 L280,97 L273,101 L274,93 L269,88 L277,87 Z" fill="#fbbf24" />
              <path d="M310,110 L312,115 L318,116 L314,120 L315,126 L310,123 L305,126 L306,120 L302,116 L308,115 Z" fill="#fbbf24" />
            </g>
          </svg>
        </div>

        <h1 className="text-5xl font-bold bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent mb-4">
          {language === 'en' ? 'Welcome to EnglishBuddy!' : 'Willkommen bei EnglishBuddy!'}
        </h1>
        <p className="text-xl text-stone-600 dark:text-stone-400 max-w-2xl mx-auto leading-relaxed">
          {language === 'en' 
            ? 'Master English with confidence. Build vocabulary, improve grammar, and speak fluently.' 
            : 'Meistere Englisch mit Selbstvertrauen. Baue Vokabular auf, verbessere Grammatik und sprich fließend.'}
        </p>
      </div>

      {/* Feature Cards */}
      <div className="grid md:grid-cols-4 gap-4 mb-12">
        {[
          { icon: BookText, title: language === 'en' ? 'Reading' : 'Lesen', color: 'rose' },
          { icon: MessageCircle, title: language === 'en' ? 'Speaking' : 'Sprechen', color: 'pink' },
          { icon: Headphones, title: language === 'en' ? 'Listening' : 'Hören', color: 'rose' },
          { icon: Languages, title: language === 'en' ? 'Writing' : 'Schreiben', color: 'pink' }
        ].map((feature, idx) => (
          <div key={idx} className="group bg-gradient-to-br from-rose-50 to-pink-50 dark:from-rose-900/20 dark:to-pink-900/20 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 border border-rose-100 dark:border-rose-800">
            <div className={`bg-${feature.color}-500 w-14 h-14 rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 group-hover:rotate-12 transition-all mx-auto`}>
              <feature.icon size={28} className="text-white" />
            </div>
            <h3 className="font-bold text-lg text-center text-stone-800 dark:text-stone-100">{feature.title}</h3>
          </div>
        ))}
      </div>

      {/* Level Progress */}
      <div className="bg-gradient-to-r from-rose-100 to-pink-100 dark:from-rose-900/30 dark:to-pink-900/30 rounded-2xl p-6 mb-12 border border-rose-200 dark:border-rose-800">
        <h3 className="text-xl font-bold text-stone-800 dark:text-stone-100 mb-4 text-center flex items-center justify-center gap-2">
          <Star className="text-rose-500" />
          {language === 'en' ? 'Your Level Path' : 'Dein Level-Pfad'}
        </h3>
        <div className="grid grid-cols-5 gap-3">
          {[
            { level: 'A1', label: language === 'en' ? 'Beginner' : 'Anfänger' },
            { level: 'A2', label: language === 'en' ? 'Elementary' : 'Grundlagen' },
            { level: 'B1', label: language === 'en' ? 'Intermediate' : 'Mittelstufe' },
            { level: 'B2', label: language === 'en' ? 'Upper Int.' : 'Fortgeschr.' },
            { level: 'C1', label: language === 'en' ? 'Advanced' : 'Experte' }
          ].map((item, idx) => (
            <div key={idx} className="bg-white dark:bg-stone-800 rounded-xl p-3 text-center shadow-md border border-rose-200 dark:border-rose-700">
              <div className="text-2xl font-bold text-rose-600 dark:text-rose-400 mb-1">{item.level}</div>
              <div className="text-xs text-stone-600 dark:text-stone-400">{item.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Topics Grid */}
      <div className="grid grid-cols-3 md:grid-cols-6 gap-4 mb-12">
        {[
          { emoji: '👋', label: language === 'en' ? 'Greetings' : 'Begrüßungen' },
          { emoji: '🍕', label: language === 'en' ? 'Food' : 'Essen' },
          { emoji: '✈️', label: language === 'en' ? 'Travel' : 'Reisen' },
          { emoji: '💼', label: language === 'en' ? 'Business' : 'Business' },
          { emoji: '🎬', label: language === 'en' ? 'Culture' : 'Kultur' },
          { emoji: '📱', label: language === 'en' ? 'Tech' : 'Technik' }
        ].map((topic, idx) => (
          <div key={idx} className="bg-white dark:bg-stone-800 rounded-xl p-3 text-center shadow-md hover:shadow-lg transition-all transform hover:scale-105 border border-stone-200 dark:border-stone-700">
            <div className="text-2xl mb-1">{topic.emoji}</div>
            <div className="text-xs font-semibold text-stone-700 dark:text-stone-300">{topic.label}</div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="text-center bg-gradient-to-r from-rose-500 via-pink-500 to-rose-500 rounded-2xl p-8 shadow-xl">
        <Globe size={48} className="mx-auto mb-4 text-white animate-spin" style={{ animationDuration: '8s' }} />
        <h2 className="text-2xl font-bold text-white mb-4">
          {language === 'en' ? 'Ready to Speak English?' : 'Bereit, Englisch zu sprechen?'}
        </h2>
        <button
          onClick={() => onStartLesson()}
          className="bg-white text-rose-600 hover:bg-rose-50 px-8 py-4 rounded-xl text-lg font-bold shadow-lg transition-all transform hover:scale-105"
        >
          {language === 'en' ? '🗣️ Start Learning' : '🗣️ Lernen starten'}
        </button>
      </div>

      <div className="mt-16 text-center text-stone-500 dark:text-stone-400 text-sm">
        <p className="italic">{language === 'en' ? 'Coming soon: Interactive lessons, vocabulary trainer, and conversation practice!' : 'Bald verfügbar: Interaktive Lektionen, Vokabeltrainer und Konversationspraxis!'}</p>
      </div>

      <div className="mt-16">
        <SupportBanner />
      </div>
    </div>
  );
}

export default EnglishHomePage;

