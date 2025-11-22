import React from 'react';
import { Flower2, Heart, Sparkles, Sun } from 'lucide-react';
import { useLanguage } from '../../../context/LanguageContext';
import SupportBanner from '../../../shared/components/SupportBanner';

function YogaHomePage({ onStartLesson }) {
  const { language } = useLanguage();

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 mt-8">
      <div className="text-center mb-12">
        {/* Yoga Meditation SVG */}
        <div className="relative mb-8">
          <svg viewBox="0 0 400 200" className="w-full max-w-2xl mx-auto">
            {/* Lotus background */}
            <defs>
              <radialGradient id="lotusGradient">
                <stop offset="0%" stopColor="#a855f7" stopOpacity="0.2" />
                <stop offset="100%" stopColor="#ec4899" stopOpacity="0.1" />
              </radialGradient>
            </defs>
            <circle cx="200" cy="100" r="80" fill="url(#lotusGradient)" className="animate-pulse" style={{ animationDuration: '3s' }} />
            
            {/* Lotus flower petals */}
            <g opacity="0.6">
              <ellipse cx="200" cy="140" rx="30" ry="15" fill="#a855f7" transform="rotate(0 200 140)" />
              <ellipse cx="200" cy="140" rx="30" ry="15" fill="#c084fc" transform="rotate(60 200 140)" />
              <ellipse cx="200" cy="140" rx="30" ry="15" fill="#d946ef" transform="rotate(120 200 140)" />
              <ellipse cx="200" cy="140" rx="30" ry="15" fill="#e879f9" transform="rotate(180 200 140)" />
              <ellipse cx="200" cy="140" rx="30" ry="15" fill="#f0abfc" transform="rotate(240 200 140)" />
              <ellipse cx="200" cy="140" rx="30" ry="15" fill="#fae8ff" transform="rotate(300 200 140)" />
            </g>
            
            {/* Person in lotus position */}
            <g className="animate-bounce" style={{ animationDuration: '4s' }}>
              {/* Head */}
              <circle cx="200" cy="70" r="15" fill="#f59e0b" />
              {/* Body */}
              <ellipse cx="200" cy="95" rx="18" ry="25" fill="#a855f7" />
              {/* Arms in meditation */}
              <path d="M182,90 Q170,95 175,105" stroke="#f59e0b" strokeWidth="4" fill="none" strokeLinecap="round" />
              <path d="M218,90 Q230,95 225,105" stroke="#f59e0b" strokeWidth="4" fill="none" strokeLinecap="round" />
              {/* Legs crossed */}
              <ellipse cx="200" cy="115" rx="35" ry="12" fill="#6366f1" />
            </g>
            
            {/* Energy particles */}
            <circle cx="160" cy="60" r="3" fill="#a855f7" opacity="0.7" className="animate-ping" />
            <circle cx="240" cy="65" r="2" fill="#ec4899" opacity="0.7" className="animate-ping" style={{ animationDelay: '0.5s' }} />
            <circle cx="180" cy="50" r="2" fill="#d946ef" opacity="0.7" className="animate-ping" style={{ animationDelay: '1s' }} />
            <circle cx="220" cy="55" r="3" fill="#c084fc" opacity="0.7" className="animate-ping" style={{ animationDelay: '1.5s' }} />
          </svg>
        </div>

        <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
          {language === 'en' ? 'Welcome to YogaBuddy!' : 'Willkommen bei YogaBuddy!'}
        </h1>
        <p className="text-xl text-stone-600 dark:text-stone-400 max-w-2xl mx-auto leading-relaxed">
          {language === 'en' 
            ? 'Find your inner peace and strength. Master poses, build flexibility, and harmonize body and mind.' 
            : 'Finde deine innere Ruhe und Stärke. Meistere Asanas, baue Flexibilität auf und harmonisiere Körper und Geist.'}
        </p>
      </div>

      {/* Feature Cards */}
      <div className="grid md:grid-cols-3 gap-6 mb-12">
        {[
          { icon: Flower2, title: language === 'en' ? 'Mindfulness' : 'Achtsamkeit', desc: language === 'en' ? 'Cultivate presence and awareness' : 'Kultiviere Präsenz und Bewusstsein', color: 'purple' },
          { icon: Heart, title: language === 'en' ? 'Flexibility' : 'Flexibilität', desc: language === 'en' ? 'Improve range of motion safely' : 'Verbessere Beweglichkeit sicher', color: 'pink' },
          { icon: Sparkles, title: language === 'en' ? 'Balance' : 'Balance', desc: language === 'en' ? 'Find harmony in body and mind' : 'Finde Harmonie in Körper und Geist', color: 'violet' }
        ].map((feature, idx) => (
          <div key={idx} className="group bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 border border-purple-100 dark:border-purple-800">
            <div className={`bg-${feature.color}-500 w-16 h-16 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-12 transition-all`}>
              <feature.icon size={32} className="text-white" />
            </div>
            <h3 className="font-bold text-xl mb-2 text-stone-800 dark:text-stone-100">{feature.title}</h3>
            <p className="text-stone-600 dark:text-stone-400 text-sm leading-relaxed">{feature.desc}</p>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="text-center bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 rounded-2xl p-8 shadow-xl">
        <Sun size={48} className="mx-auto mb-4 text-white animate-pulse" />
        <h2 className="text-2xl font-bold text-white mb-4">
          {language === 'en' ? 'Begin Your Journey' : 'Beginne deine Reise'}
        </h2>
        <button
          onClick={() => onStartLesson()}
          className="bg-white text-purple-600 hover:bg-purple-50 px-8 py-4 rounded-xl text-lg font-bold shadow-lg transition-all transform hover:scale-105"
        >
          {language === 'en' ? '🧘 Start Yoga Practice' : '🧘 Yoga-Praxis starten'}
        </button>
      </div>

      <div className="mt-16 text-center">
        <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-xl p-6 border border-purple-100 dark:border-purple-800">
          <h3 className="text-xl font-bold text-stone-800 dark:text-stone-100 mb-2">
            {language === 'en' ? '✨ Tools Available Now!' : '✨ Tools jetzt verfügbar!'}
          </h3>
          <p className="text-stone-600 dark:text-stone-400 mb-4">
            {language === 'en' 
              ? 'Explore our yoga tools: Session Timer, Breathing Guide, Pose Library, and Sequence Builder!'
              : 'Entdecke unsere Yoga-Tools: Session-Timer, Atemführer, Posen-Bibliothek und Sequenz-Builder!'}
          </p>
          <button
            onClick={() => {
              window.location.hash = '#/learnbuddy/yoga/custom-tools';
            }}
            className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-xl font-bold shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
          >
            {language === 'en' ? '🚀 Explore Tools' : '🚀 Tools erkunden'}
          </button>
        </div>
      </div>

      <div className="mt-16">
        <SupportBanner />
      </div>
    </div>
  );
}

export default YogaHomePage;

