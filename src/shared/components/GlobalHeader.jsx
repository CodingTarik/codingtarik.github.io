import React, { useState, useRef, useEffect } from 'react';
import { Sun, Moon, ChevronDown, Check } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { useTheme } from '../../context/ThemeContext';
import { useBuddy } from '../../context/BuddyContext';

function GlobalHeader() {
  const { language, changeLanguage } = useLanguage();
  const { isDark, toggleTheme } = useTheme();
  const { activeBuddy, currentBuddyConfig, allBuddies, switchBuddy } = useBuddy();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const CurrentIcon = currentBuddyConfig.icon;

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleBuddySelect = (buddyId) => {
    switchBuddy(buddyId);
    setIsDropdownOpen(false);
  };

  return (
    <div className="fixed top-0 left-0 right-0 bg-white dark:bg-stone-900 border-b border-stone-200 dark:border-stone-700 shadow-sm z-40">
      <div className="max-w-2xl mx-auto px-4 py-3">
        <div className="flex justify-between items-center gap-3">
          {/* Buddy Selector Dropdown - Custom Design */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex items-center gap-2 bg-gradient-to-r from-stone-100 to-stone-50 dark:from-stone-800 dark:to-stone-700 rounded-xl shadow-sm px-4 py-2.5 font-semibold text-sm text-stone-800 dark:text-stone-100 cursor-pointer hover:shadow-md transition-all focus:outline-none focus:ring-2 focus:ring-teal-500 border border-stone-200 dark:border-stone-600"
            >
              <CurrentIcon size={18} className="text-teal-500" />
              <span>{currentBuddyConfig.name[language]}</span>
              <ChevronDown size={16} className={`text-stone-600 dark:text-stone-400 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
            </button>

            {/* Dropdown Menu */}
            {isDropdownOpen && (
              <div className="absolute top-full left-0 mt-2 w-56 bg-white dark:bg-stone-800 rounded-xl shadow-2xl border border-stone-200 dark:border-stone-700 overflow-hidden z-50 animate-fade-in">
                {Object.entries(allBuddies).map(([id, config]) => {
                  const Icon = config.icon;
                  const isActive = id === activeBuddy;
                  return (
                    <button
                      key={id}
                      onClick={() => handleBuddySelect(id)}
                      className={`w-full flex items-center gap-3 px-4 py-3 transition-all ${
                        isActive 
                          ? 'bg-teal-50 dark:bg-teal-900/30 text-teal-700 dark:text-teal-300' 
                          : 'hover:bg-stone-50 dark:hover:bg-stone-700 text-stone-700 dark:text-stone-300'
                      }`}
                    >
                      <div className={`p-2 rounded-lg ${isActive ? 'bg-teal-100 dark:bg-teal-800' : 'bg-stone-100 dark:bg-stone-700'}`}>
                        <Icon size={18} className={isActive ? 'text-teal-600 dark:text-teal-400' : 'text-stone-600 dark:text-stone-400'} />
                      </div>
                      <span className="flex-1 text-left font-medium">{config.name[language]}</span>
                      {isActive && <Check size={16} className="text-teal-600 dark:text-teal-400" />}
                    </button>
                  );
                })}
              </div>
            )}
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

