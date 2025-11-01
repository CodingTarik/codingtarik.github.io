import React from 'react';
import { X, Globe, Moon, Sun } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';

function SettingsModal({ onClose }) {
  const { language, changeLanguage, t } = useLanguage();
  const { isDark, toggleTheme } = useTheme();

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white dark:bg-stone-800 rounded-lg shadow-xl max-w-md w-full">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-stone-200 dark:border-stone-700">
          <h2 className="text-2xl font-bold text-stone-800 dark:text-stone-100 flex items-center gap-2">
            ⚙️ {t('settings')}
          </h2>
          <button
            onClick={onClose}
            className="text-stone-500 hover:text-stone-700 dark:text-stone-400 dark:hover:text-stone-200"
          >
            <X size={24} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Language Selection */}
          <div>
            <label className="flex items-center gap-2 text-sm font-semibold text-stone-700 dark:text-stone-300 mb-3">
              <Globe size={20} />
              {t('language')}
            </label>
            <div className="grid grid-cols-2 gap-3">
              <button
                onClick={() => changeLanguage('de')}
                className={`py-3 px-4 rounded-lg font-semibold transition-all ${
                  language === 'de'
                    ? 'bg-teal-500 text-white shadow-md'
                    : 'bg-stone-100 dark:bg-stone-700 text-stone-700 dark:text-stone-300 hover:bg-stone-200 dark:hover:bg-stone-600'
                }`}
              >
                🇩🇪 Deutsch
              </button>
              <button
                onClick={() => changeLanguage('en')}
                className={`py-3 px-4 rounded-lg font-semibold transition-all ${
                  language === 'en'
                    ? 'bg-teal-500 text-white shadow-md'
                    : 'bg-stone-100 dark:bg-stone-700 text-stone-700 dark:text-stone-300 hover:bg-stone-200 dark:hover:bg-stone-600'
                }`}
              >
                🇬🇧 English
              </button>
            </div>
          </div>

          {/* Dark Mode Toggle */}
          <div>
            <label className="flex items-center gap-2 text-sm font-semibold text-stone-700 dark:text-stone-300 mb-3">
              {isDark ? <Moon size={20} /> : <Sun size={20} />}
              {t('darkMode')}
            </label>
            <button
              onClick={toggleTheme}
              className={`w-full py-3 px-4 rounded-lg font-semibold transition-all ${
                isDark
                  ? 'bg-stone-700 text-white hover:bg-stone-600'
                  : 'bg-amber-100 text-amber-900 hover:bg-amber-200'
              }`}
            >
              <span className="flex items-center justify-center gap-2">
                {isDark ? (
                  <>
                    <Moon size={20} />
                    Dark Mode: ON
                  </>
                ) : (
                  <>
                    <Sun size={20} />
                    Dark Mode: OFF
                  </>
                )}
              </span>
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-stone-200 dark:border-stone-700">
          <button
            onClick={onClose}
            className="w-full bg-teal-500 hover:bg-teal-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
          >
            {t('done')}
          </button>
        </div>
      </div>
    </div>
  );
}

export default SettingsModal;

