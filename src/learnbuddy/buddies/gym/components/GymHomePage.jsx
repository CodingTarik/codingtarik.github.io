import React from 'react';
import { Dumbbell, BarChart3, Target, Zap, TrendingUp, Award } from 'lucide-react';
import { useLanguage } from '../../../context/LanguageContext';
import SupportBanner from '../../../shared/components/SupportBanner';

function GymHomePage({ onStartLesson }) {
  const { language } = useLanguage();

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 mt-8">
      <div className="text-center mb-12">
        {/* Gym Training SVG */}
        <div className="relative mb-8">
          <svg viewBox="0 0 400 200" className="w-full max-w-2xl mx-auto">
            {/* Background gym floor */}
            <rect x="0" y="160" width="400" height="40" fill="#78716c" opacity="0.3" />
            <line x1="0" y1="160" x2="400" y2="160" stroke="#57534e" strokeWidth="2" />
            
            {/* Barbell */}
            <g className="animate-bounce" style={{ animationDuration: '2s' }}>
              {/* Bar */}
              <rect x="120" y="95" width="160" height="10" rx="5" fill="#78716c" />
              
              {/* Left weight plates */}
              <rect x="100" y="80" width="25" height="40" rx="3" fill="#ef4444" />
              <rect x="95" y="75" width="25" height="50" rx="3" fill="#dc2626" />
              <rect x="90" y="70" width="25" height="60" rx="3" fill="#b91c1c" />
              
              {/* Right weight plates */}
              <rect x="275" y="80" width="25" height="40" rx="3" fill="#ef4444" />
              <rect x="280" y="75" width="25" height="50" rx="3" fill="#dc2626" />
              <rect x="285" y="70" width="25" height="60" rx="3" fill="#b91c1c" />
              
              {/* Weight numbers */}
              <text x="98" y="105" fill="white" fontSize="12" fontWeight="bold">45</text>
              <text x="293" y="105" fill="white" fontSize="12" fontWeight="bold">45</text>
            </g>
            
            {/* Person lifting */}
            <g className="animate-pulse" style={{ animationDuration: '2s' }}>
              {/* Head */}
              <circle cx="200" cy="120" r="12" fill="#f59e0b" />
              {/* Body */}
              <ellipse cx="200" cy="145" rx="15" ry="20" fill="#3b82f6" />
              {/* Arms reaching up */}
              <path d="M185,130 L130,100" stroke="#f59e0b" strokeWidth="5" strokeLinecap="round" />
              <path d="M215,130 L270,100" stroke="#f59e0b" strokeWidth="5" strokeLinecap="round" />
              {/* Legs */}
              <path d="M195,160 L190,180" stroke="#1e293b" strokeWidth="5" strokeLinecap="round" />
              <path d="M205,160 L210,180" stroke="#1e293b" strokeWidth="5" strokeLinecap="round" />
            </g>
            
            {/* Effort lines */}
            <g className="animate-pulse" opacity="0.6">
              <line x1="170" y1="115" x2="160" y2="110" stroke="#ef4444" strokeWidth="2" strokeLinecap="round" />
              <line x1="165" y1="120" x2="155" y2="120" stroke="#ef4444" strokeWidth="2" strokeLinecap="round" />
              <line x1="230" y1="115" x2="240" y2="110" stroke="#ef4444" strokeWidth="2" strokeLinecap="round" />
              <line x1="235" y1="120" x2="245" y2="120" stroke="#ef4444" strokeWidth="2" strokeLinecap="round" />
            </g>
            
            {/* Dumbbells on the floor */}
            <g opacity="0.7">
              <rect x="40" y="155" width="30" height="8" rx="4" fill="#78716c" />
              <circle cx="40" cy="159" r="8" fill="#ef4444" />
              <circle cx="70" cy="159" r="8" fill="#ef4444" />
              
              <rect x="330" y="155" width="30" height="8" rx="4" fill="#78716c" />
              <circle cx="330" cy="159" r="8" fill="#f97316" />
              <circle cx="360" cy="159" r="8" fill="#f97316" />
            </g>
            
            {/* Motivational sparks */}
            <circle cx="200" cy="60" r="3" fill="#fbbf24" opacity="0.8" className="animate-ping" />
            <circle cx="180" cy="70" r="2" fill="#fbbf24" opacity="0.8" className="animate-ping" style={{ animationDelay: '0.5s' }} />
            <circle cx="220" cy="70" r="2" fill="#fbbf24" opacity="0.8" className="animate-ping" style={{ animationDelay: '1s' }} />
          </svg>
        </div>

        <h1 className="text-5xl font-bold bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent mb-4">
          {language === 'en' ? 'Welcome to GymBuddy!' : 'Willkommen bei GymBuddy!'}
        </h1>
        <p className="text-xl text-stone-600 dark:text-stone-400 max-w-2xl mx-auto leading-relaxed">
          {language === 'en' 
            ? 'Build strength, gain muscle, and transform your body. Your complete gym training companion.' 
            : 'Baue Kraft auf, gewinne Muskeln und transformiere deinen Körper. Dein kompletter Gym-Trainingsbegleiter.'}
        </p>
      </div>

      {/* Feature Cards */}
      <div className="grid md:grid-cols-3 gap-6 mb-12">
        {[
          { icon: Dumbbell, title: language === 'en' ? 'Strength Training' : 'Krafttraining', desc: language === 'en' ? 'Build muscle with proven programs' : 'Baue Muskeln mit bewährten Programmen', color: 'red' },
          { icon: Target, title: language === 'en' ? 'Goal Tracking' : 'Ziel-Tracking', desc: language === 'en' ? 'Track weights, reps, and progress' : 'Verfolge Gewichte, Wiederholungen und Fortschritt', color: 'orange' },
          { icon: TrendingUp, title: language === 'en' ? 'Progressive Overload' : 'Progressive Steigerung', desc: language === 'en' ? 'Systematic strength gains' : 'Systematischer Kraftzuwachs', color: 'amber' }
        ].map((feature, idx) => (
          <div key={idx} className="group bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 border border-red-100 dark:border-red-800">
            <div className={`bg-${feature.color}-500 w-16 h-16 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-12 transition-all`}>
              <feature.icon size={32} className="text-white" />
            </div>
            <h3 className="font-bold text-xl mb-2 text-stone-800 dark:text-stone-100">{feature.title}</h3>
            <p className="text-stone-600 dark:text-stone-400 text-sm leading-relaxed">{feature.desc}</p>
          </div>
        ))}
      </div>

      {/* Workout Categories */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
        {[
          { name: language === 'en' ? 'Chest' : 'Brust', emoji: '💪' },
          { name: language === 'en' ? 'Back' : 'Rücken', emoji: '🦾' },
          { name: language === 'en' ? 'Legs' : 'Beine', emoji: '🦵' },
          { name: language === 'en' ? 'Arms' : 'Arme', emoji: '💪' },
          { name: language === 'en' ? 'Shoulders' : 'Schultern', emoji: '🏋️' },
          { name: language === 'en' ? 'Core' : 'Core', emoji: '🔥' },
          { name: language === 'en' ? 'Cardio' : 'Cardio', emoji: '❤️' },
          { name: language === 'en' ? 'Full Body' : 'Ganzkörper', emoji: '⚡' }
        ].map((category, idx) => (
          <div key={idx} className="bg-white dark:bg-stone-800 rounded-xl p-4 text-center shadow-md hover:shadow-lg transition-all transform hover:scale-105 border border-stone-200 dark:border-stone-700">
            <div className="text-3xl mb-2">{category.emoji}</div>
            <div className="text-sm font-semibold text-stone-700 dark:text-stone-300">{category.name}</div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="text-center bg-gradient-to-r from-red-500 via-orange-500 to-amber-500 rounded-2xl p-8 shadow-xl">
        <Zap size={48} className="mx-auto mb-4 text-white animate-bounce" />
        <h2 className="text-2xl font-bold text-white mb-4">
          {language === 'en' ? 'Ready to Get Strong?' : 'Bereit, stark zu werden?'}
        </h2>
        <button
          onClick={() => onStartLesson()}
          className="bg-white text-red-600 hover:bg-red-50 px-8 py-4 rounded-xl text-lg font-bold shadow-lg transition-all transform hover:scale-105"
        >
          {language === 'en' ? '💪 Start Training' : '💪 Training starten'}
        </button>
      </div>

      <div className="mt-16 text-center text-stone-500 dark:text-stone-400 text-sm">
        <p className="italic">{language === 'en' ? 'Check out the "Tracker" tab to log your workouts!' : 'Nutze den "Tracker" Tab unten, um deine Workouts zu loggen!'}</p>
      </div>

      <div className="mt-16">
        <SupportBanner />
      </div>
    </div>
  );
}

export default GymHomePage;
