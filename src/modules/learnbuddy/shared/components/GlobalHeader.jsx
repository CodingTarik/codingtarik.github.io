import React, { useState, useRef, useEffect } from 'react';
import { Sun, Moon, ChevronDown, Check, Star, Grid3x3, Info, Settings, Newspaper } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { useTheme } from '../../context/ThemeContext';
import { useBuddy } from '../../context/BuddyContext';
import { navigate } from '../../../../utils/navigation';

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
      <div className="max-w-7xl mx-auto px-2 sm:px-4 py-2 sm:py-3">
        <div className="flex justify-between items-center gap-1 sm:gap-4">
          {/* LearnBuddy Logo & Blog Button */}
          <div className="flex items-center gap-1 sm:gap-3 shrink-0">
            <button
              onClick={() => {
                if (onViewChange) {
                  onViewChange('learnbuddy');
                } else {
                  navigate(`/learnbuddy/${activeBuddy}/home`);
                }
                setIsDropdownOpen(false);
              }}
              className="text-lg sm:text-2xl font-bold bg-gradient-to-r from-teal-600 to-orange-600 bg-clip-text text-transparent hover:opacity-80 transition-opacity cursor-pointer"
            >
              <span className="hidden sm:inline">LearnBuddy</span>
              <span className="sm:hidden">LB</span>
            </button>

            {/* Blog Button - nur im Desktop sichtbar */}
            <button
              onClick={() => {
                if (onViewChange) {
                  onViewChange('blog');
                }
              }}
              className={`hidden md:flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${currentView === 'blog'
                ? 'bg-purple-500 text-white shadow-md'
                : 'bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-300 hover:bg-stone-200 dark:hover:bg-stone-700'
                }`}
            >
              <Newspaper size={16} />
              <span>Blog</span>
            </button>
          </div>

          {/* Center: Buddy Selector */}
          <div className="flex-1 flex justify-center min-w-0">
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center gap-1.5 sm:gap-2 bg-gradient-to-r from-stone-100 to-stone-50 dark:from-stone-800 dark:to-stone-700 rounded-xl shadow-sm px-2.5 sm:px-4 py-2 sm:py-2.5 font-semibold text-xs sm:text-sm text-stone-800 dark:text-stone-100 cursor-pointer hover:shadow-md transition-all focus:outline-none focus:ring-2 focus:ring-teal-500 border border-stone-200 dark:border-stone-600 max-w-[180px] sm:max-w-none"
              >
                <CurrentIcon size={16} className="text-teal-500 shrink-0 sm:w-[18px] sm:h-[18px]" />
                <span className="truncate">{currentBuddyConfig.name[language]}</span>
                <ChevronDown size={14} className={`text-stone-600 dark:text-stone-400 transition-transform shrink-0 sm:w-4 sm:h-4 ${isDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {/* Dropdown Menu */}
              {isDropdownOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 sm:left-0 sm:translate-x-0 mt-2 w-[calc(100vw-2rem)] sm:w-80 max-w-80 bg-white dark:bg-stone-800 rounded-xl shadow-2xl border border-stone-200 dark:border-stone-700 overflow-hidden z-50 animate-fade-in">
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
                            className={`w-full flex items-center gap-3 px-4 py-3 transition-all ${isActive
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
                              className={`w-full flex items-center gap-3 px-4 py-3 transition-all ${isActive
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
          <div className="flex gap-1 sm:gap-2 items-center shrink-0">
            {/* Blog Button - Mobile only (icon only) */}
            <button
              onClick={() => {
                if (onViewChange) {
                  onViewChange('blog');
                }
              }}
              className={`md:hidden p-2 rounded-lg transition-all ${currentView === 'blog'
                ? 'bg-purple-500 text-white shadow-md'
                : 'bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-300'
                }`}
              title="Blog"
            >
              <Newspaper size={16} />
            </button>

            {/* Settings Link - hidden on very small screens */}
            <button
              onClick={() => navigate('/settings')}
              className="hidden sm:block p-2 rounded-lg hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors cursor-pointer"
              title={language === 'en' ? 'Settings' : 'Einstellungen'}
            >
              <Settings size={18} className="text-stone-600 dark:text-stone-400" />
            </button>

            {/* Imprint Link - hidden on mobile */}
            <button
              onClick={() => navigate('/imprint')}
              className="hidden md:block p-2 rounded-lg hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors cursor-pointer"
              title={language === 'en' ? 'Imprint' : 'Impressum'}
            >
              <Info size={18} className="text-stone-600 dark:text-stone-400" />
            </button>

            {/* Language Selector */}
            <div className="flex gap-0.5 sm:gap-1 bg-stone-100 dark:bg-stone-800 rounded-lg shadow-sm p-0.5 sm:p-1">
              <button
                onClick={() => changeLanguage('de')}
                className={`px-1.5 sm:px-2 py-1 rounded-md font-semibold text-[10px] sm:text-xs transition-all ${language === 'de'
                  ? 'bg-teal-500 text-white shadow-sm'
                  : 'text-stone-600 dark:text-stone-400 hover:bg-stone-200 dark:hover:bg-stone-700'
                  }`}
              >
                <span className="hidden sm:inline">🇩🇪 </span>DE
              </button>
              <button
                onClick={() => changeLanguage('en')}
                className={`px-1.5 sm:px-2 py-1 rounded-md font-semibold text-[10px] sm:text-xs transition-all ${language === 'en'
                  ? 'bg-teal-500 text-white shadow-sm'
                  : 'text-stone-600 dark:text-stone-400 hover:bg-stone-200 dark:hover:bg-stone-700'
                  }`}
              >
                <span className="hidden sm:inline">🇬🇧 </span>EN
              </button>
            </div>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="bg-stone-100 dark:bg-stone-800 rounded-lg shadow-sm p-1.5 sm:p-2 hover:scale-105 transition-transform"
              title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            >
              {isDark ? (
                <Sun size={16} className="text-amber-500 sm:w-[18px] sm:h-[18px]" />
              ) : (
                <Moon size={16} className="text-stone-600 sm:w-[18px] sm:h-[18px]" />
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GlobalHeader;
