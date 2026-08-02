import React, { useState, useEffect } from 'react';
import { Mountain, Users, BrainCircuit, Target, Sparkles, ChevronRight } from 'lucide-react';

// Animated Counter Component
function AnimatedCounter({ end, duration = 2000, suffix = '' }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime = null;
    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    requestAnimationFrame(animate);
  }, [end, duration]);

  return <span>{count}{suffix}</span>;
}

// Interactive Card Component
function InteractiveCard({ icon: Icon, title, description, color, delay = 0, isRevealed = true }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`relative overflow-hidden rounded-xl p-6 cursor-pointer transform transition-all duration-500 ${
        isRevealed ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
      }`}
      style={{
        transitionDelay: `${delay}ms`,
        background: isHovered
          ? `linear-gradient(135deg, ${color}20 0%, ${color}10 100%)`
          : `linear-gradient(135deg, ${color}10 0%, ${color}05 100%)`,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Animated background circles */}
      <div
        className={`absolute -top-10 -right-10 w-32 h-32 rounded-full transition-all duration-700 ${
          isHovered ? 'scale-150 opacity-20' : 'scale-100 opacity-10'
        }`}
        style={{ backgroundColor: color }}
      />
      
      <div className="relative z-10">
        <div className="flex items-center gap-3 mb-3">
          <div
            className={`p-3 rounded-lg transition-all duration-300 ${
              isHovered ? 'scale-110 rotate-6' : 'scale-100 rotate-0'
            }`}
            style={{ backgroundColor: `${color}20` }}
          >
            <Icon size={28} style={{ color }} />
          </div>
          <h4 className="font-bold text-lg text-stone-800 dark:text-stone-100">{title}</h4>
        </div>
        <p className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed">{description}</p>
        
        {/* Hover indicator */}
        <div
          className={`flex items-center gap-2 mt-4 text-xs font-semibold transition-all duration-300 ${
            isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-2'
          }`}
          style={{ color }}
        >
          <span>Explore</span>
          <ChevronRight size={16} />
        </div>
      </div>
    </div>
  );
}

// Climbing Wall SVG Animation
function ClimbingWallAnimation() {
  const [activeHold, setActiveHold] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveHold((prev) => (prev + 1) % 5);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const holds = [
    { cx: 50, cy: 180, color: '#14b8a6' },
    { cx: 120, cy: 150, color: '#f97316' },
    { cx: 180, cy: 120, color: '#14b8a6' },
    { cx: 140, cy: 80, color: '#f97316' },
    { cx: 100, cy: 40, color: '#14b8a6' },
  ];

  return (
    <div className="flex justify-center my-8">
      <svg
        width="250"
        height="220"
        viewBox="0 0 250 220"
        className="drop-shadow-lg"
      >
        {/* Wall background */}
        <rect
          x="10"
          y="10"
          width="230"
          height="200"
          fill="url(#wallGradient)"
          rx="10"
        />
        <defs>
          <linearGradient id="wallGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#d6d3d1" />
            <stop offset="100%" stopColor="#a8a29e" />
          </linearGradient>
        </defs>

        {/* Climbing holds */}
        {holds.map((hold, index) => (
          <g key={index}>
            {/* Glow effect for active hold */}
            {activeHold === index && (
              <circle
                cx={hold.cx}
                cy={hold.cy}
                r="20"
                fill={hold.color}
                opacity="0.3"
                className="animate-ping"
              />
            )}
            {/* Hold */}
            <circle
              cx={hold.cx}
              cy={hold.cy}
              r="12"
              fill={hold.color}
              className={`transition-all duration-300 ${
                activeHold === index ? 'scale-110' : 'scale-100'
              }`}
              style={{
                filter: activeHold === index ? 'brightness(1.2)' : 'brightness(1)',
                transform: `scale(${activeHold === index ? 1.1 : 1})`,
                transformOrigin: `${hold.cx}px ${hold.cy}px`,
              }}
            />
            {/* Hold shadow */}
            <circle
              cx={hold.cx + 2}
              cy={hold.cy + 2}
              r="12"
              fill="black"
              opacity="0.2"
            />
          </g>
        ))}

        {/* Climber stick figure */}
        <g className="animate-pulse">
          {/* Head */}
          <circle cx={holds[activeHold].cx} cy={holds[activeHold].cy - 30} r="8" fill="#78716c" />
          {/* Body */}
          <line
            x1={holds[activeHold].cx}
            y1={holds[activeHold].cy - 22}
            x2={holds[activeHold].cx}
            y2={holds[activeHold].cy + 5}
            stroke="#78716c"
            strokeWidth="3"
            strokeLinecap="round"
          />
          {/* Arms */}
          <line
            x1={holds[activeHold].cx}
            y1={holds[activeHold].cy - 15}
            x2={holds[activeHold].cx - 15}
            y2={holds[activeHold].cy}
            stroke="#78716c"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <line
            x1={holds[activeHold].cx}
            y1={holds[activeHold].cy - 15}
            x2={holds[activeHold].cx + 15}
            y2={holds[activeHold].cy - 5}
            stroke="#78716c"
            strokeWidth="3"
            strokeLinecap="round"
          />
          {/* Legs */}
          <line
            x1={holds[activeHold].cx}
            y1={holds[activeHold].cy + 5}
            x2={holds[activeHold].cx - 10}
            y2={holds[activeHold].cy + 25}
            stroke="#78716c"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <line
            x1={holds[activeHold].cx}
            y1={holds[activeHold].cy + 5}
            x2={holds[activeHold].cx + 10}
            y2={holds[activeHold].cy + 20}
            stroke="#78716c"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </g>
      </svg>
    </div>
  );
}

// Main Interactive Welcome Component
export function InteractiveWelcome({ language = 'en' }) {
  const [cardsRevealed, setCardsRevealed] = useState(false);

  useEffect(() => {
    // Trigger card animations after component mounts
    setTimeout(() => setCardsRevealed(true), 300);
  }, []);

  const content = {
    de: {
      hero: {
        title: "Willkommen in der Welt des Boulderns!",
        subtitle: "Eine Reise beginnt...",
      },
      stats: [
        { value: 100, suffix: '%', label: 'Ganzkörper-Workout' },
        { value: 0, suffix: '', label: 'Seil benötigt' },
        { value: 1000, suffix: '+', label: 'Mögliche Lösungen' },
      ],
      cards: [
        {
          icon: Mountain,
          title: 'Abenteuer',
          description: 'Jeder Boulder ist eine neue Herausforderung, ein Rätsel, das darauf wartet, gelöst zu werden.',
          color: '#14b8a6',
        },
        {
          icon: Users,
          title: 'Gemeinschaft',
          description: 'Eine unterstützende Community, die zusammen wächst und Erfolge feiert.',
          color: '#f97316',
        },
        {
          icon: BrainCircuit,
          title: 'Mental & Physisch',
          description: 'Trainiere Körper und Geist gleichzeitig. Flow-Zustand garantiert!',
          color: '#14b8a6',
        },
        {
          icon: Target,
          title: 'Persönliches Wachstum',
          description: 'Fortschritt ist individuell. Vergleiche dich nur mit dir selbst von gestern.',
          color: '#f97316',
        },
      ],
    },
    en: {
      hero: {
        title: 'Welcome to the World of Bouldering!',
        subtitle: 'A journey begins...',
      },
      stats: [
        { value: 100, suffix: '%', label: 'Full-Body Workout' },
        { value: 0, suffix: '', label: 'Rope Required' },
        { value: 1000, suffix: '+', label: 'Possible Solutions' },
      ],
      cards: [
        {
          icon: Mountain,
          title: 'Adventure',
          description: 'Every boulder is a new challenge, a puzzle waiting to be solved.',
          color: '#14b8a6',
        },
        {
          icon: Users,
          title: 'Community',
          description: 'A supportive community that grows together and celebrates successes.',
          color: '#f97316',
        },
        {
          icon: BrainCircuit,
          title: 'Mental & Physical',
          description: 'Train body and mind simultaneously. Flow state guaranteed!',
          color: '#14b8a6',
        },
        {
          icon: Target,
          title: 'Personal Growth',
          description: 'Progress is individual. Only compare yourself to yesterday\'s you.',
          color: '#f97316',
        },
      ],
    },
  };

  const t = content[language] || content.en;

  return (
    <div className="my-8">
      {/* Hero Section with Animation */}
      <div className="text-center mb-12 animate-fade-in">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-teal-500 to-orange-500 rounded-full text-white text-sm font-semibold mb-4 animate-bounce">
          <Sparkles size={16} />
          <span>{t.hero.subtitle}</span>
        </div>
        <h2 className="text-4xl font-bold text-stone-800 dark:text-stone-100 mb-6">
          {t.hero.title}
        </h2>
        
        {/* Animated Climbing Wall */}
        <ClimbingWallAnimation />
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-3 gap-4 mb-12">
        {t.stats.map((stat, index) => (
          <div
            key={index}
            className="text-center p-6 bg-gradient-to-br from-stone-100 to-stone-50 dark:from-stone-800 dark:to-stone-900 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            <div className="text-3xl font-bold text-teal-600 dark:text-teal-400 mb-2">
              <AnimatedCounter end={stat.value} suffix={stat.suffix} />
            </div>
            <div className="text-sm text-stone-600 dark:text-stone-400 font-medium">
              {stat.label}
            </div>
          </div>
        ))}
      </div>

      {/* Interactive Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {t.cards.map((card, index) => (
          <InteractiveCard
            key={index}
            icon={card.icon}
            title={card.title}
            description={card.description}
            color={card.color}
            delay={index * 100}
            isRevealed={cardsRevealed}
          />
        ))}
      </div>

      {/* Call to Action */}
      <div className="mt-12 text-center">
        <div className="inline-block p-6 bg-gradient-to-r from-teal-500 to-orange-500 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
          <p className="text-white text-lg font-semibold mb-2">
            {language === 'de' ? '🎯 Bereit loszulegen?' : '🎯 Ready to start?'}
          </p>
          <p className="text-teal-100 text-sm">
            {language === 'de' 
              ? 'Lies weiter und entdecke die Grundlagen des Boulderns!' 
              : 'Keep reading and discover the fundamentals of bouldering!'}
          </p>
        </div>
      </div>
    </div>
  );
}

