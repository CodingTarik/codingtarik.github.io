import React from 'react';
import { ChefHat, Utensils, Clock, Flame, Heart, Star } from 'lucide-react';
import { useLanguage } from '../../../context/LanguageContext';
import SupportBanner from '../../../shared/components/SupportBanner';

function CookHomePage({ onStartLesson }) {
  const { language } = useLanguage();

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 mt-8">
      <div className="text-center mb-12">
        {/* Cooking Scene SVG */}
        <div className="relative mb-8">
          <svg viewBox="0 0 400 200" className="w-full max-w-2xl mx-auto">
            {/* Stove */}
            <rect x="140" y="120" width="120" height="60" rx="5" fill="#78716c" />
            <rect x="145" y="125" width="110" height="50" rx="3" fill="#57534e" />
            
            {/* Burner */}
            <circle cx="200" cy="140" r="25" fill="#1e293b" />
            <circle cx="200" cy="140" r="20" fill="#ef4444" opacity="0.3" className="animate-pulse" />
            
            {/* Flames */}
            <g className="animate-pulse" style={{ animationDuration: '1.5s' }}>
              <path d="M190,140 Q185,130 190,120 Q195,130 190,140" fill="#f97316" opacity="0.8" />
              <path d="M200,140 Q195,125 200,115 Q205,125 200,140" fill="#fbbf24" opacity="0.9" />
              <path d="M210,140 Q205,130 210,120 Q215,130 210,140" fill="#f97316" opacity="0.8" />
            </g>
            
            {/* Cooking pot */}
            <g className="animate-bounce" style={{ animationDuration: '2s' }}>
              <ellipse cx="200" cy="100" rx="45" ry="12" fill="#94a3b8" />
              <rect x="155" y="100" width="90" height="40" fill="#cbd5e1" />
              <ellipse cx="200" cy="140" rx="45" ry="12" fill="#94a3b8" />
              
              {/* Handles */}
              <path d="M150,110 Q140,110 140,120" stroke="#78716c" strokeWidth="4" fill="none" strokeLinecap="round" />
              <path d="M250,110 Q260,110 260,120" stroke="#78716c" strokeWidth="4" fill="none" strokeLinecap="round" />
              
              {/* Lid */}
              <ellipse cx="200" cy="95" rx="48" ry="15" fill="#e2e8f0" />
              <circle cx="200" cy="90" r="8" fill="#78716c" />
            </g>
            
            {/* Steam */}
            <g className="animate-pulse" opacity="0.6">
              <path d="M180,80 Q175,70 180,60 Q185,70 180,80" fill="#94a3b8" />
              <path d="M200,75 Q195,65 200,55 Q205,65 200,75" fill="#94a3b8" />
              <path d="M220,80 Q215,70 220,60 Q225,70 220,80" fill="#94a3b8" />
            </g>
            
            {/* Chef character */}
            <g transform="translate(280, 100)">
              {/* Head */}
              <circle cx="0" cy="0" r="15" fill="#f59e0b" />
              {/* Chef hat */}
              <ellipse cx="0" cy="-10" rx="18" ry="8" fill="white" />
              <rect x="-12" y="-20" width="24" height="15" rx="3" fill="white" />
              {/* Body */}
              <rect x="-12" y="10" width="24" height="30" rx="5" fill="white" />
              {/* Apron */}
              <rect x="-10" y="15" width="20" height="25" rx="3" fill="#f59e0b" />
              {/* Arms */}
              <path d="M-12,20 L-25,30" stroke="#f59e0b" strokeWidth="4" strokeLinecap="round" />
              <path d="M12,20 L25,25" stroke="#f59e0b" strokeWidth="4" strokeLinecap="round" />
              {/* Wooden spoon */}
              <ellipse cx="28" cy="25" rx="5" ry="8" fill="#78716c" />
              <rect x="25" y="25" width="3" height="15" fill="#78716c" />
            </g>
            
            {/* Ingredients floating */}
            <g className="animate-bounce" style={{ animationDuration: '3s', animationDelay: '0.5s' }}>
              <circle cx="80" cy="80" r="8" fill="#ef4444" />
              <path d="M80,75 L78,70 L82,70 Z" fill="#22c55e" />
            </g>
            
            <g className="animate-bounce" style={{ animationDuration: '2.5s', animationDelay: '1s' }}>
              <ellipse cx="320" cy="60" rx="10" ry="6" fill="#fbbf24" />
            </g>
            
            {/* Sparkles for deliciousness */}
            <circle cx="100" cy="50" r="2" fill="#fbbf24" opacity="0.8" className="animate-ping" />
            <circle cx="300" cy="90" r="2" fill="#fbbf24" opacity="0.8" className="animate-ping" style={{ animationDelay: '0.7s' }} />
            <circle cx="120" cy="120" r="2" fill="#fbbf24" opacity="0.8" className="animate-ping" style={{ animationDelay: '1.4s' }} />
          </svg>
        </div>

        <h1 className="text-5xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent mb-4">
          {language === 'en' ? 'Welcome to CookBuddy!' : 'Willkommen bei CookBuddy!'}
        </h1>
        <p className="text-xl text-stone-600 dark:text-stone-400 max-w-2xl mx-auto leading-relaxed">
          {language === 'en' 
            ? 'Master the art of cooking. Learn techniques, discover recipes, and create delicious meals.' 
            : 'Meistere die Kunst des Kochens. Lerne Techniken, entdecke Rezepte und kreiere köstliche Mahlzeiten.'}
        </p>
      </div>

      {/* Feature Cards */}
      <div className="grid md:grid-cols-3 gap-6 mb-12">
        {[
          { icon: ChefHat, title: language === 'en' ? 'Techniques' : 'Techniken', desc: language === 'en' ? 'Master knife skills and cooking methods' : 'Meistere Messertechniken und Kochmethoden', color: 'amber' },
          { icon: Utensils, title: language === 'en' ? 'Recipes' : 'Rezepte', desc: language === 'en' ? 'From basics to gourmet dishes' : 'Von Basics bis Gourmet-Gerichten', color: 'orange' },
          { icon: Clock, title: language === 'en' ? 'Meal Planning' : 'Essensplanung', desc: language === 'en' ? 'Organize your weekly meals' : 'Organisiere deine Wochenmahlzeiten', color: 'yellow' }
        ].map((feature, idx) => (
          <div key={idx} className="group bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 border border-amber-100 dark:border-amber-800">
            <div className={`bg-${feature.color}-500 w-16 h-16 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-12 transition-all`}>
              <feature.icon size={32} className="text-white" />
            </div>
            <h3 className="font-bold text-xl mb-2 text-stone-800 dark:text-stone-100">{feature.title}</h3>
            <p className="text-stone-600 dark:text-stone-400 text-sm leading-relaxed">{feature.desc}</p>
          </div>
        ))}
      </div>

      {/* Cuisine Types */}
      <div className="grid grid-cols-3 md:grid-cols-6 gap-4 mb-12">
        {[
          { name: language === 'en' ? 'Italian' : 'Italienisch', emoji: '🍝' },
          { name: language === 'en' ? 'Asian' : 'Asiatisch', emoji: '🍜' },
          { name: language === 'en' ? 'Mexican' : 'Mexikanisch', emoji: '🌮' },
          { name: language === 'en' ? 'French' : 'Französisch', emoji: '🥐' },
          { name: language === 'en' ? 'Desserts' : 'Desserts', emoji: '🍰' },
          { name: language === 'en' ? 'Healthy' : 'Gesund', emoji: '🥗' }
        ].map((cuisine, idx) => (
          <div key={idx} className="bg-white dark:bg-stone-800 rounded-xl p-4 text-center shadow-md hover:shadow-lg transition-all transform hover:scale-105 border border-stone-200 dark:border-stone-700">
            <div className="text-3xl mb-2">{cuisine.emoji}</div>
            <div className="text-xs font-semibold text-stone-700 dark:text-stone-300">{cuisine.name}</div>
          </div>
        ))}
      </div>

      {/* Skill Levels */}
      <div className="bg-gradient-to-r from-amber-100 to-orange-100 dark:from-amber-900/30 dark:to-orange-900/30 rounded-2xl p-6 mb-12 border border-amber-200 dark:border-amber-800">
        <h3 className="text-xl font-bold text-stone-800 dark:text-stone-100 mb-4 text-center flex items-center justify-center gap-2">
          <Star className="text-amber-500" />
          {language === 'en' ? 'Your Cooking Journey' : 'Deine Koch-Reise'}
        </h3>
        <div className="flex justify-between items-center">
          {[
            { level: language === 'en' ? 'Beginner' : 'Anfänger', emoji: '👨‍🍳' },
            { level: language === 'en' ? 'Home Cook' : 'Hobbykoch', emoji: '🍳' },
            { level: language === 'en' ? 'Advanced' : 'Fortgeschritten', emoji: '👨‍🍳' },
            { level: language === 'en' ? 'Chef' : 'Chefkoch', emoji: '⭐' }
          ].map((item, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-white dark:bg-stone-800 flex items-center justify-center text-2xl shadow-lg mb-2 border-2 border-amber-500">
                {item.emoji}
              </div>
              <div className="text-sm font-semibold text-stone-700 dark:text-stone-300 text-center">{item.level}</div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="text-center bg-gradient-to-r from-amber-500 via-orange-500 to-yellow-500 rounded-2xl p-8 shadow-xl">
        <Flame size={48} className="mx-auto mb-4 text-white animate-pulse" />
        <h2 className="text-2xl font-bold text-white mb-4">
          {language === 'en' ? 'Ready to Cook?' : 'Bereit zu kochen?'}
        </h2>
        <button
          onClick={() => onStartLesson()}
          className="bg-white text-amber-600 hover:bg-amber-50 px-8 py-4 rounded-xl text-lg font-bold shadow-lg transition-all transform hover:scale-105"
        >
          {language === 'en' ? '👨‍🍳 Start Cooking' : '👨‍🍳 Kochen starten'}
        </button>
      </div>

      <div className="mt-16 text-center text-stone-500 dark:text-stone-400 text-sm">
        <p className="italic">{language === 'en' ? 'Coming soon: Step-by-step recipes, video tutorials, and meal planning tools!' : 'Bald verfügbar: Schritt-für-Schritt-Rezepte, Video-Tutorials und Essensplanungs-Tools!'}</p>
      </div>

      <div className="mt-16">
        <SupportBanner />
      </div>
    </div>
  );
}

export default CookHomePage;
