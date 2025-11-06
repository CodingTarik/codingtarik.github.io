import React from 'react';
import { Shield, Lock, Terminal, AlertTriangle, Eye, Zap } from 'lucide-react';
import { useLanguage } from '../../../context/LanguageContext';
import SupportBanner from '../../../shared/components/SupportBanner';

function CyberSecurityHomePage({ onStartLesson }) {
  const { language } = useLanguage();

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 mt-8">
      <div className="text-center mb-12">
        {/* Cybersecurity Shield SVG */}
        <div className="relative mb-8">
          <svg viewBox="0 0 400 200" className="w-full max-w-2xl mx-auto">
            {/* Digital grid background */}
            <defs>
              <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#64748b" strokeWidth="0.5" opacity="0.3" />
              </pattern>
            </defs>
            <rect width="400" height="200" fill="url(#grid)" />
            
            {/* Main shield */}
            <path d="M200,30 L240,50 L240,100 Q240,130 200,150 Q160,130 160,100 L160,50 Z" 
                  fill="#64748b" opacity="0.9" className="animate-pulse" style={{ animationDuration: '3s' }} />
            
            {/* Shield highlight */}
            <path d="M200,35 L235,52 L235,100 Q235,127 200,145 Q165,127 165,100 L165,52 Z" 
                  fill="#06b6d4" opacity="0.3" />
            
            {/* Lock icon on shield */}
            <rect x="192" y="80" width="16" height="20" rx="2" fill="#06b6d4" />
            <path d="M195,80 L195,73 Q195,68 200,68 Q205,68 205,73 L205,80" 
                  stroke="#06b6d4" strokeWidth="3" fill="none" />
            
            {/* Binary code streams */}
            <g className="animate-pulse" opacity="0.6">
              <text x="120" y="80" fill="#06b6d4" fontSize="12" fontFamily="monospace">1010</text>
              <text x="120" y="100" fill="#06b6d4" fontSize="12" fontFamily="monospace">0110</text>
              <text x="120" y="120" fill="#06b6d4" fontSize="12" fontFamily="monospace">1100</text>
            </g>
            <g className="animate-pulse" opacity="0.6" style={{ animationDelay: '0.5s' }}>
              <text x="260" y="80" fill="#06b6d4" fontSize="12" fontFamily="monospace">0101</text>
              <text x="260" y="100" fill="#06b6d4" fontSize="12" fontFamily="monospace">1001</text>
              <text x="260" y="120" fill="#06b6d4" fontSize="12" fontFamily="monospace">0011</text>
            </g>
            
            {/* Threat indicators */}
            <g className="animate-ping" style={{ animationDuration: '2s' }}>
              <circle cx="140" cy="60" r="5" fill="#ef4444" opacity="0.7" />
              <circle cx="260" cy="65" r="5" fill="#ef4444" opacity="0.7" />
            </g>
            
            {/* Defense waves */}
            <circle cx="200" cy="90" r="60" stroke="#06b6d4" strokeWidth="2" fill="none" opacity="0.3" className="animate-ping" style={{ animationDuration: '3s' }} />
            <circle cx="200" cy="90" r="70" stroke="#06b6d4" strokeWidth="2" fill="none" opacity="0.2" className="animate-ping" style={{ animationDuration: '3s', animationDelay: '0.5s' }} />
          </svg>
        </div>

        <h1 className="text-5xl font-bold bg-gradient-to-r from-slate-600 to-cyan-600 bg-clip-text text-transparent mb-4">
          {language === 'en' ? 'Welcome to CyberSecurityBuddy!' : 'Willkommen bei CyberSecurityBuddy!'}
        </h1>
        <p className="text-xl text-stone-600 dark:text-stone-400 max-w-2xl mx-auto leading-relaxed">
          {language === 'en' 
            ? 'Become a digital defender. Master security fundamentals, learn ethical hacking, and protect what matters.' 
            : 'Werde zum digitalen Verteidiger. Meistere Security-Grundlagen, lerne ethisches Hacking und schütze was zählt.'}
        </p>
      </div>

      {/* Feature Cards */}
      <div className="grid md:grid-cols-3 gap-6 mb-12">
        {[
          { icon: Shield, title: language === 'en' ? 'Defense' : 'Verteidigung', desc: language === 'en' ? 'Protect systems and data' : 'Schütze Systeme und Daten', color: 'slate' },
          { icon: Eye, title: language === 'en' ? 'Detection' : 'Erkennung', desc: language === 'en' ? 'Identify threats early' : 'Erkenne Bedrohungen früh', color: 'cyan' },
          { icon: Terminal, title: language === 'en' ? 'Response' : 'Reaktion', desc: language === 'en' ? 'Handle incidents effectively' : 'Reagiere effektiv auf Vorfälle', color: 'blue' }
        ].map((feature, idx) => (
          <div key={idx} className="group bg-gradient-to-br from-slate-50 to-cyan-50 dark:from-slate-900/20 dark:to-cyan-900/20 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 border border-slate-200 dark:border-slate-700">
            <div className={`bg-${feature.color}-500 w-16 h-16 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-all`}>
              <feature.icon size={32} className="text-white" />
            </div>
            <h3 className="font-bold text-xl mb-2 text-stone-800 dark:text-stone-100">{feature.title}</h3>
            <p className="text-stone-600 dark:text-stone-400 text-sm leading-relaxed">{feature.desc}</p>
          </div>
        ))}
      </div>

      {/* Security Topics */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12">
        {[
          { name: language === 'en' ? 'Network Security' : 'Netzwerk-Sicherheit', icon: '🌐' },
          { name: language === 'en' ? 'Cryptography' : 'Kryptographie', icon: '🔐' },
          { name: language === 'en' ? 'Penetration Testing' : 'Penetration Testing', icon: '🎯' },
          { name: language === 'en' ? 'Malware Analysis' : 'Malware-Analyse', icon: '🦠' },
          { name: language === 'en' ? 'Web Security' : 'Web-Sicherheit', icon: '🌍' },
          { name: language === 'en' ? 'Forensics' : 'Forensik', icon: '🔍' }
        ].map((topic, idx) => (
          <div key={idx} className="bg-slate-800 dark:bg-slate-900 rounded-xl p-4 text-center shadow-md hover:shadow-lg transition-all transform hover:scale-105 border border-cyan-500/30">
            <div className="text-3xl mb-2">{topic.icon}</div>
            <div className="text-sm font-semibold text-cyan-400">{topic.name}</div>
          </div>
        ))}
      </div>

      {/* Threat Level Indicator (fun visual) */}
      <div className="bg-slate-900 rounded-2xl p-6 mb-12 border border-cyan-500/30">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <AlertTriangle className="text-green-500" size={24} />
            <span className="text-white font-bold">{language === 'en' ? 'Current Threat Level:' : 'Aktuelle Bedrohungsstufe:'}</span>
          </div>
          <span className="text-green-500 font-bold">{language === 'en' ? 'LOW' : 'NIEDRIG'}</span>
        </div>
        <div className="w-full bg-slate-700 rounded-full h-4">
          <div className="bg-green-500 h-4 rounded-full w-1/4 animate-pulse"></div>
        </div>
      </div>

      {/* CTA */}
      <div className="text-center bg-gradient-to-r from-slate-700 via-cyan-600 to-blue-600 rounded-2xl p-8 shadow-xl">
        <Zap size={48} className="mx-auto mb-4 text-white animate-pulse" />
        <h2 className="text-2xl font-bold text-white mb-4">
          {language === 'en' ? 'Ready to Secure the Digital World?' : 'Bereit, die digitale Welt zu sichern?'}
        </h2>
        <button
          onClick={() => onStartLesson()}
          className="bg-white text-slate-700 hover:bg-cyan-50 px-8 py-4 rounded-xl text-lg font-bold shadow-lg transition-all transform hover:scale-105"
        >
          {language === 'en' ? '🛡️ Start Security Training' : '🛡️ Security-Training starten'}
        </button>
      </div>

      <div className="mt-16 text-center text-stone-500 dark:text-stone-400 text-sm">
        <p className="italic">{language === 'en' ? 'Coming soon: Hands-on labs, CTF challenges, and comprehensive security courses!' : 'Bald verfügbar: Praktische Labs, CTF-Challenges und umfassende Security-Kurse!'}</p>
      </div>

      <div className="mt-16">
        <SupportBanner />
      </div>
    </div>
  );
}

export default CyberSecurityHomePage;

