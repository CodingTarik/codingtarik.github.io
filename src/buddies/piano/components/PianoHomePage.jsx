import React from 'react';
import { Music, Mic2, Heart, Volume2 } from 'lucide-react';
import { useLanguage } from '../../../context/LanguageContext';
import SupportBanner from '../../../shared/components/SupportBanner';

function PianoHomePage({ onStartLesson }) {
  const { language } = useLanguage();

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 mt-8">
      <div className="text-center mb-12">
        {/* Piano SVG */}
        <div className="relative mb-8">
          <svg viewBox="0 0 400 200" className="w-full max-w-2xl mx-auto">
            {/* Piano body */}
            <rect x="80" y="100" width="240" height="80" rx="5" fill="#1e293b" stroke="#0f172a" strokeWidth="2" />
            
            {/* White keys */}
            {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
              <rect 
                key={`white-${i}`}
                x={90 + i * 28} 
                y="105" 
                width="26" 
                height="70" 
                rx="2" 
                fill="#f8fafc" 
                stroke="#cbd5e1" 
                strokeWidth="1"
                className={i === 2 ? "animate-pulse" : ""}
                style={i === 2 ? { fill: '#e0e7ff' } : {}}
              />
            ))}
            
            {/* Black keys */}
            {[0, 1, 3, 4, 5].map((i) => {
              const positions = [0, 1, 3, 4, 5];
              return (
                <rect 
                  key={`black-${i}`}
                  x={108 + positions[i] * 28} 
                  y="105" 
                  width="16" 
                  height="45" 
                  rx="2" 
                  fill="#0f172a" 
                  stroke="#1e293b" 
                  strokeWidth="1"
                />
              );
            })}
            
            {/* Musical notes floating */}
            <g className="animate-bounce" style={{ animationDuration: '2s' }}>
              <circle cx="150" cy="70" r="8" fill="#6366f1" />
              <rect x="158" y="50" width="3" height="20" fill="#6366f1" />
              <text x="145" y="77" fontSize="16" fill="white">♪</text>
            </g>
            
            <g className="animate-bounce" style={{ animationDuration: '2.5s', animationDelay: '0.3s' }}>
              <circle cx="250" cy="60" r="8" fill="#8b5cf6" />
              <rect x="258" y="40" width="3" height="20" fill="#8b5cf6" />
              <text x="245" y="67" fontSize="16" fill="white">♫</text>
            </g>
            
            <g className="animate-bounce" style={{ animationDuration: '3s', animationDelay: '0.6s' }}>
              <circle cx="200" cy="50" r="8" fill="#a855f7" />
              <rect x="208" y="30" width="3" height="20" fill="#a855f7" />
              <text x="195" y="57" fontSize="16" fill="white">♪</text>
            </g>
            
            {/* Sound waves */}
            <path d="M 60,120 Q 50,120 50,130 Q 50,140 60,140" stroke="#6366f1" strokeWidth="2" fill="none" opacity="0.5" className="animate-pulse" />
            <path d="M 340,120 Q 350,120 350,130 Q 350,140 340,140" stroke="#6366f1" strokeWidth="2" fill="none" opacity="0.5" className="animate-pulse" />
          </svg>
        </div>

        <h1 className="text-5xl font-bold bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent mb-4">
          {language === 'en' ? 'Welcome to PianoBuddy!' : 'Willkommen bei PianoBuddy!'}
        </h1>
        <p className="text-xl text-stone-600 dark:text-stone-400 max-w-2xl mx-auto leading-relaxed">
          {language === 'en' 
            ? 'Unlock the magic of music. Master the piano from first notes to beautiful melodies.' 
            : 'Entdecke die Magie der Musik. Meistere das Klavier von den ersten Tönen bis zu wunderschönen Melodien.'}
        </p>
      </div>

      {/* Feature Cards */}
      <div className="grid md:grid-cols-3 gap-6 mb-12">
        {[
          { icon: Music, title: language === 'en' ? 'Music Theory' : 'Musiktheorie', desc: language === 'en' ? 'Understand notes, scales, and chords' : 'Verstehe Noten, Tonleitern und Akkorde', color: 'indigo' },
          { icon: Mic2, title: language === 'en' ? 'Technique' : 'Technik', desc: language === 'en' ? 'Develop proper hand position and touch' : 'Entwickle richtige Handhaltung und Anschlag', color: 'violet' },
          { icon: Heart, title: language === 'en' ? 'Expression' : 'Ausdruck', desc: language === 'en' ? 'Play with emotion and dynamics' : 'Spiele mit Emotion und Dynamik', color: 'purple' }
        ].map((feature, idx) => (
          <div key={idx} className="group bg-gradient-to-br from-indigo-50 to-violet-50 dark:from-indigo-900/20 dark:to-violet-900/20 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 border border-indigo-100 dark:border-indigo-800">
            <div className={`bg-${feature.color}-500 w-16 h-16 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-12 transition-all`}>
              <feature.icon size={32} className="text-white" />
            </div>
            <h3 className="font-bold text-xl mb-2 text-stone-800 dark:text-stone-100">{feature.title}</h3>
            <p className="text-stone-600 dark:text-stone-400 text-sm leading-relaxed">{feature.desc}</p>
          </div>
        ))}
      </div>

      {/* Learning Path */}
      <div className="bg-gradient-to-r from-indigo-100 to-violet-100 dark:from-indigo-900/30 dark:to-violet-900/30 rounded-2xl p-6 mb-12 border border-indigo-200 dark:border-indigo-800">
        <h3 className="text-xl font-bold text-stone-800 dark:text-stone-100 mb-4 text-center">
          {language === 'en' ? 'Your Learning Journey' : 'Deine Lernreise'}
        </h3>
        <div className="flex justify-between items-center">
          {[
            { step: 1, label: language === 'en' ? 'Basics' : 'Grundlagen', emoji: '🎹' },
            { step: 2, label: language === 'en' ? 'Scales' : 'Tonleitern', emoji: '🎼' },
            { step: 3, label: language === 'en' ? 'Songs' : 'Lieder', emoji: '🎵' },
            { step: 4, label: language === 'en' ? 'Master' : 'Meister', emoji: '🎖️' }
          ].map((item, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-white dark:bg-stone-800 flex items-center justify-center text-2xl shadow-lg mb-2 border-2 border-indigo-500">
                {item.emoji}
              </div>
              <div className="text-sm font-semibold text-stone-700 dark:text-stone-300">{item.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="text-center bg-gradient-to-r from-indigo-500 via-violet-500 to-purple-500 rounded-2xl p-8 shadow-xl">
        <Volume2 size={48} className="mx-auto mb-4 text-white animate-pulse" />
        <h2 className="text-2xl font-bold text-white mb-4">
          {language === 'en' ? 'Ready to Make Music?' : 'Bereit, Musik zu machen?'}
        </h2>
        <button
          onClick={() => onStartLesson()}
          className="bg-white text-indigo-600 hover:bg-indigo-50 px-8 py-4 rounded-xl text-lg font-bold shadow-lg transition-all transform hover:scale-105"
        >
          {language === 'en' ? '🎹 Start Piano Lessons' : '🎹 Klavierunterricht starten'}
        </button>
      </div>

      <div className="mt-16 text-center text-stone-500 dark:text-stone-400 text-sm">
        <p className="italic">{language === 'en' ? 'Coming soon: Interactive lessons, sheet music library, and practice tracking!' : 'Bald verfügbar: Interaktive Lektionen, Noten-Bibliothek und Übungs-Tracking!'}</p>
      </div>

      <div className="mt-16">
        <SupportBanner />
      </div>
    </div>
  );
}

export default PianoHomePage;

