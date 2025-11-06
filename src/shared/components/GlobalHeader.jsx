import React from 'react';
import { Sun, Moon, ChevronDown } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { useTheme } from '../../context/ThemeContext';
import { useBuddy } from '../../context/BuddyContext';

function GlobalHeader() {
  const { language, changeLanguage } = useLanguage();
  const { isDark, toggleTheme } = useTheme();
  const { activeBuddy, allBuddies, switchBuddy } = useBuddy();

  return (
    <div className="fixed top-0 left-0 right-0 bg-white dark:bg-stone-900 border-b border-stone-200 dark:border-stone-700 shadow-sm z-40">
      <div className="max-w-2xl mx-auto px-4 py-3">
        <div className="flex justify-between items-center gap-3">
          {/* Buddy Selector Dropdown */}
          <div className="relative">
            <select
              value={activeBuddy}
              onChange={(e) => switchBuddy(e.target.value)}
              className="appearance-none bg-stone-100 dark:bg-stone-800 rounded-lg shadow-sm px-4 py-2 pr-10 font-semibold text-sm text-stone-800 dark:text-stone-100 cursor-pointer hover:shadow-md transition-all focus:outline-none focus:ring-2 focus:ring-teal-500"
            >
              {Object.entries(allBuddies).map(([id, config]) => (
                <option key={id} value={id}>
                  {config.name[language]}
                </option>
              ))}
            </select>
            <ChevronDown size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-600 dark:text-stone-400 pointer-events-none" />
          </div>

          <div className="flex gap-2">
            {/* Language Selector */}
            <div className="flex gap-1 bg-stone-100 dark:bg-stone-800 rounded-lg shadow-sm p-1">
              <button
                onClick={() => changeLanguage('de')}
                className={`px-2 py-1 rounded text-xs font-semibold transition-all ${
                  language === 'de'
                    ? 'bg-teal-500 text-white shadow-sm'
                    : 'text-stone-600 dark:text-stone-400 hover:bg-stone-200 dark:hover:bg-stone-700'
                }`}
              >
                🇩🇪 DE
              </button>
              <button
                onClick={() => changeLanguage('en')}
                className={`px-2 py-1 rounded text-xs font-semibold transition-all ${
                  language === 'en'
                    ? 'bg-teal-500 text-white shadow-sm'
                    : 'text-stone-600 dark:text-stone-400 hover:bg-stone-200 dark:hover:bg-stone-700'
                }`}
              >
                🇬🇧 EN
              </button>
            </div>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="bg-stone-100 dark:bg-stone-800 rounded-lg shadow-sm p-2 hover:scale-105 transition-transform"
              title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            >
              {isDark ? (
                <Sun size={16} className="text-amber-500" />
              ) : (
                <Moon size={16} className="text-stone-600" />
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GlobalHeader;

