import React, { useState, useRef, useEffect } from 'react';
import { Sun, Moon, ChevronDown, Check, Star, Grid3x3, Info, Settings, Newspaper } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { useTheme } from '../../context/ThemeContext';
import { useBuddy } from '../../context/BuddyContext';

function GlobalHeader({ currentView, onViewChange }) {
  const { language, changeLanguage } = useLanguage();
  const { isDark, toggleTheme } = useTheme();
  const { activeBuddy, currentBuddyConfig, allBuddies, switchBuddy } = useBuddy();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [showAllBuddies, setShowAllBuddies] = useState(false);
  const [favoriteBuddies, setFavoriteBuddies] = useState(() => {
    const saved = localStorage.getItem('favoriteBuddies');
    return saved ? JSON.parse(saved) : ['boulder', 'swim', 'run'];
  });
  const dropdownRef = useRef(null);

  const CurrentIcon = currentBuddyConfig.icon;

  // Save favorites to localStorage
  useEffect(() => {
    localStorage.setItem('favoriteBuddies', JSON.stringify(favoriteBuddies));
  }, [favoriteBuddies]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
        setShowAllBuddies(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleBuddySelect = (buddyId) => {
    switchBuddy(buddyId);
    setIsDropdownOpen(false);
    setShowAllBuddies(false);
  };

  const toggleFavorite = (buddyId, e) => {
    e.stopPropagation();
    setFavoriteBuddies(prev => {
      if (prev.includes(buddyId)) {
        return prev.filter(id => id !== buddyId);
      } else {
        return [...prev, buddyId];
      }
    });
  };

  const favoriteBuddiesList = Object.entries(allBuddies).filter(([id]) => favoriteBuddies.includes(id));
  const otherBuddiesList = Object.entries(allBuddies).filter(([id]) => !favoriteBuddies.includes(id));

  return (
    <div className="fixed top-0 left-0 right-0 bg-white dark:bg-stone-900 border-b border-stone-200 dark:border-stone-700 shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 py-3">
        <div className="flex justify-between items-center gap-4">
          {/* LearnBuddy Logo & Blog Button */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => {
                if (onViewChange) {
                  onViewChange('learnbuddy');
                } else {
                  window.location.hash = `#/learnbuddy/${activeBuddy}/home`;
                }
                setIsDropdownOpen(false);
              }}
              className="text-2xl font-bold bg-gradient-to-r from-teal-600 to-orange-600 bg-clip-text text-transparent hover:opacity-80 transition-opacity cursor-pointer"
            >
              LearnBuddy
            </button>
            
            {/* Blog Button - nur im Desktop sichtbar */}
            <button
              onClick={() => {
                if (onViewChange) {
                  onViewChange('blog');
                }
              }}
              className={`hidden md:flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
                currentView === 'blog'
                  ? 'bg-purple-500 text-white shadow-md'
                  : 'bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-300 hover:bg-stone-200 dark:hover:bg-stone-700'
              }`}
            >
              <Newspaper size={16} />
              <span>Blog</span>
            </button>
          </div>

          {/* Center: Buddy Selector */}
          <div className="flex-1 flex justify-center">
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
                <div className="absolute top-full left-0 mt-2 w-80 bg-white dark:bg-stone-800 rounded-xl shadow-2xl border border-stone-200 dark:border-stone-700 overflow-hidden z-50 animate-fade-in">
                  {/* Favorites Section */}
                  {favoriteBuddiesList.length > 0 && (
                    <>
                      <div className="px-4 py-2 bg-stone-50 dark:bg-stone-900/50 border-b border-stone-200 dark:border-stone-700">
                        <div className="flex items-center gap-2 text-xs font-semibold text-stone-600 dark:text-stone-400">
                          <Star size={14} className="text-amber-500" />
                          {language === 'en' ? 'Favorites' : 'Favoriten'}
                        </div>
                      </div>
                      {favoriteBuddiesList.map(([id, config]) => {
                        const Icon = config.icon;
                        const isActive = id === activeBuddy;
                        return (
                          <div
                            key={id}
                            className={`w-full flex items-center gap-3 px-4 py-3 transition-all ${
                              isActive 
                                ? 'bg-teal-50 dark:bg-teal-900/30 text-teal-700 dark:text-teal-300' 
                                : 'hover:bg-stone-50 dark:hover:bg-stone-700 text-stone-700 dark:text-stone-300'
                            }`}
                          >
                            <button
                              onClick={() => handleBuddySelect(id)}
                              className="flex-1 flex items-center gap-3"
                            >
                              <div className={`p-2 rounded-lg ${isActive ? 'bg-teal-100 dark:bg-teal-800' : 'bg-stone-100 dark:bg-stone-700'}`}>
                                <Icon size={18} className={isActive ? 'text-teal-600 dark:text-teal-400' : 'text-stone-600 dark:text-stone-400'} />
                              </div>
                              <span className="flex-1 text-left font-medium">{config.name[language]}</span>
                            </button>
                            <button
                              onClick={(e) => toggleFavorite(id, e)}
                              className="p-1 hover:bg-stone-200 dark:hover:bg-stone-600 rounded transition-colors"
                            >
                              <Star size={16} className="fill-amber-500 text-amber-500" />
                            </button>
                            {isActive && <Check size={16} className="text-teal-600 dark:text-teal-400" />}
                          </div>
                        );
                      })}
                    </>
                  )}

                  {/* Show All Buddies Button */}
                  {!showAllBuddies && otherBuddiesList.length > 0 && (
                    <button
                      onClick={() => setShowAllBuddies(true)}
                      className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-stone-50 dark:bg-stone-900/50 hover:bg-stone-100 dark:hover:bg-stone-700 text-stone-700 dark:text-stone-300 font-medium transition-all border-t border-stone-200 dark:border-stone-700"
                    >
                      <Grid3x3 size={16} />
                      {language === 'en' ? `Show all ${otherBuddiesList.length} Buddies` : `Alle ${otherBuddiesList.length} Buddies anzeigen`}
                    </button>
                  )}

                  {/* All Buddies Section */}
                  {showAllBuddies && otherBuddiesList.length > 0 && (
                    <>
                      <div className="px-4 py-2 bg-stone-50 dark:bg-stone-900/50 border-t border-stone-200 dark:border-stone-700">
                        <div className="flex items-center gap-2 text-xs font-semibold text-stone-600 dark:text-stone-400">
                          <Grid3x3 size={14} />
                          {language === 'en' ? 'All Buddies' : 'Alle Buddies'}
                        </div>
                      </div>
                      <div className="max-h-64 overflow-y-auto">
                        {otherBuddiesList.map(([id, config]) => {
                          const Icon = config.icon;
                          const isActive = id === activeBuddy;
                          return (
                            <div
                              key={id}
                              className={`w-full flex items-center gap-3 px-4 py-3 transition-all ${
                                isActive 
                                  ? 'bg-teal-50 dark:bg-teal-900/30 text-teal-700 dark:text-teal-300' 
                                  : 'hover:bg-stone-50 dark:hover:bg-stone-700 text-stone-700 dark:text-stone-300'
                              }`}
                            >
                              <button
                                onClick={() => handleBuddySelect(id)}
                                className="flex-1 flex items-center gap-3"
                              >
                                <div className={`p-2 rounded-lg ${isActive ? 'bg-teal-100 dark:bg-teal-800' : 'bg-stone-100 dark:bg-stone-700'}`}>
                                  <Icon size={18} className={isActive ? 'text-teal-600 dark:text-teal-400' : 'text-stone-600 dark:text-stone-400'} />
                                </div>
                                <span className="flex-1 text-left font-medium">{config.name[language]}</span>
                              </button>
                              <button
                                onClick={(e) => toggleFavorite(id, e)}
                                className="p-1 hover:bg-stone-200 dark:hover:bg-stone-600 rounded transition-colors"
                              >
                                <Star size={16} className="text-stone-400 hover:text-amber-500" />
                              </button>
                              {isActive && <Check size={16} className="text-teal-600 dark:text-teal-400" />}
                            </div>
                          );
                        })}
                      </div>
                    </>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* Right: Controls */}
          <div className="flex gap-2 items-center">
            {/* Settings Link */}
            <a
              href="#/settings"
              className="p-2 rounded-lg hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors"
              title={language === 'en' ? 'Settings' : 'Einstellungen'}
            >
              <Settings size={18} className="text-stone-600 dark:text-stone-400" />
            </a>

            {/* Imprint Link */}
            <a
              href="#/imprint"
              className="p-2 rounded-lg hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors"
              title={language === 'en' ? 'Imprint' : 'Impressum'}
            >
              <Info size={18} className="text-stone-600 dark:text-stone-400" />
            </a>

            {/* Language Selector */}
            <div className="flex gap-1 bg-stone-100 dark:bg-stone-800 rounded-lg shadow-sm p-1">
              <button
                onClick={() => changeLanguage('de')}
                className={`px-2 py-1 rounded-md font-semibold text-xs transition-all ${
                  language === 'de'
                    ? 'bg-teal-500 text-white shadow-sm'
                    : 'text-stone-600 dark:text-stone-400 hover:bg-stone-200 dark:hover:bg-stone-700'
                }`}
              >
                🇩🇪 DE
              </button>
              <button
                onClick={() => changeLanguage('en')}
                className={`px-2 py-1 rounded-md font-semibold text-xs transition-all ${
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
                <Sun size={18} className="text-amber-500" />
              ) : (
                <Moon size={18} className="text-stone-600" />
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GlobalHeader;
