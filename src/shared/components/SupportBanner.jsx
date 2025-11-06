import React from 'react';
import { Heart, Code, Coffee } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

function SupportBanner() {
  const { language } = useLanguage();

  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-teal-500 via-teal-600 to-teal-700 dark:from-teal-700 dark:via-teal-800 dark:to-teal-900 rounded-2xl shadow-2xl p-8 mb-8">
      {/* Animated Background Circles */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20">
        <div className="absolute -top-10 -left-10 w-40 h-40 bg-white rounded-full animate-pulse"></div>
        <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-white rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-white rounded-full animate-ping" style={{ animationDelay: '0.5s' }}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white">
        <div className="flex justify-center gap-4 mb-4">
          <Heart size={32} className="animate-bounce" />
          <Code size={32} className="animate-bounce" style={{ animationDelay: '0.2s' }} />
          <Coffee size={32} className="animate-bounce" style={{ animationDelay: '0.4s' }} />
        </div>
        
        <h3 className="text-2xl font-bold mb-3">
          {language === 'en' ? '100% Free & Open Source' : '100% Kostenlos & Open Source'}
        </h3>
        
        <p className="text-white/90 mb-4 max-w-xl mx-auto leading-relaxed">
          {language === 'en' 
            ? 'This app is completely free, ad-free, and open source. However, development and maintenance cost time and resources.' 
            : 'Diese App ist komplett kostenlos, werbefrei und Open Source. Entwicklung und Wartung kosten jedoch Zeit und Ressourcen.'}
        </p>
        
        <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
          <a
            href="https://buymeacoffee.com/yourname"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-teal-600 hover:bg-teal-50 px-6 py-3 rounded-lg font-semibold shadow-lg transition-all transform hover:scale-105 flex items-center gap-2"
          >
            <Coffee size={20} />
            {language === 'en' ? 'Buy me a coffee' : 'Spendiere mir einen Kaffee'}
          </a>
          
          <a
            href="https://github.com/yourname/learnbuddy"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-lg font-semibold backdrop-blur-sm transition-all transform hover:scale-105 flex items-center gap-2"
          >
            <Code size={20} />
            {language === 'en' ? 'View on GitHub' : 'Auf GitHub ansehen'}
          </a>
        </div>
      </div>
    </div>
  );
}

export default SupportBanner;

