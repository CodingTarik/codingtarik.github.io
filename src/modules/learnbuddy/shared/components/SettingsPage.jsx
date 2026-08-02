import React, { useState } from 'react';
import { useSettings } from '../../context/SettingsContext';
import { useLanguage } from '../../context/LanguageContext';
import { useBuddy } from '../../context/BuddyContext';
import { Settings, Save, Eye, EyeOff, ChevronDown, ChevronUp } from 'lucide-react';
import { englishBuddyConfig } from '../../buddies/english/config';

// Import other buddy configs as they add settings
const buddyConfigs = {
  english: englishBuddyConfig,
  // Add more buddy configs here as needed
};

function SettingsPage() {
  const { language } = useLanguage();
  const { globalSettings, updateGlobalSetting, getBuddySettings, updateBuddySetting } = useSettings();
  const [showApiKey, setShowApiKey] = useState(false);
  const [expandedSections, setExpandedSections] = useState({
    global: true,
    english: true
  });
  const [tempApiKey, setTempApiKey] = useState(globalSettings.chatGptApiKey);
  const [saved, setSaved] = useState(false);

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const handleGlobalSave = () => {
    updateGlobalSetting('chatGptApiKey', tempApiKey);
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  const handleBuddySettingChange = (buddyId, settingKey, value) => {
    updateBuddySetting(buddyId, settingKey, value);
  };

  const renderSettingInput = (buddyId, setting) => {
    const currentValue = getBuddySettings(buddyId)[setting.key] ?? setting.default;
    const label = typeof setting.label === 'object' ? setting.label[language] : setting.label;
    const description = typeof setting.description === 'object' ? setting.description[language] : setting.description;

    switch (setting.type) {
      case 'boolean':
        return (
          <div key={setting.key} className="bg-white dark:bg-stone-800 rounded-lg p-4 border border-stone-200 dark:border-stone-700">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <label className="font-semibold text-stone-800 dark:text-stone-200 block mb-1">
                  {label}
                </label>
                <p className="text-sm text-stone-600 dark:text-stone-400">
                  {description}
                </p>
              </div>
              <button
                onClick={() => handleBuddySettingChange(buddyId, setting.key, !currentValue)}
                className={`ml-4 relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  currentValue ? 'bg-green-500' : 'bg-stone-300 dark:bg-stone-600'
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    currentValue ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>
          </div>
        );

      case 'enum':
        return (
          <div key={setting.key} className="bg-white dark:bg-stone-800 rounded-lg p-4 border border-stone-200 dark:border-stone-700">
            <label className="font-semibold text-stone-800 dark:text-stone-200 block mb-1">
              {label}
            </label>
            <p className="text-sm text-stone-600 dark:text-stone-400 mb-3">
              {description}
            </p>
            <select
              value={currentValue}
              onChange={(e) => handleBuddySettingChange(buddyId, setting.key, e.target.value)}
              className="w-full px-4 py-2 rounded-lg border border-stone-300 dark:border-stone-600 bg-white dark:bg-stone-700 text-stone-800 dark:text-stone-200 focus:ring-2 focus:ring-rose-500 focus:border-transparent"
            >
              {setting.options.map(option => {
                const optionLabel = typeof option.label === 'object' ? option.label[language] : option.label;
                return (
                  <option key={option.value} value={option.value}>
                    {optionLabel}
                  </option>
                );
              })}
            </select>
          </div>
        );

      case 'string':
        return (
          <div key={setting.key} className="bg-white dark:bg-stone-800 rounded-lg p-4 border border-stone-200 dark:border-stone-700">
            <label className="font-semibold text-stone-800 dark:text-stone-200 block mb-1">
              {label}
            </label>
            <p className="text-sm text-stone-600 dark:text-stone-400 mb-3">
              {description}
            </p>
            <input
              type="text"
              value={currentValue}
              onChange={(e) => handleBuddySettingChange(buddyId, setting.key, e.target.value)}
              className="w-full px-4 py-2 rounded-lg border border-stone-300 dark:border-stone-600 bg-white dark:bg-stone-700 text-stone-800 dark:text-stone-200 focus:ring-2 focus:ring-rose-500 focus:border-transparent"
            />
          </div>
        );

      case 'int':
        return (
          <div key={setting.key} className="bg-white dark:bg-stone-800 rounded-lg p-4 border border-stone-200 dark:border-stone-700">
            <label className="font-semibold text-stone-800 dark:text-stone-200 block mb-1">
              {label}
            </label>
            <p className="text-sm text-stone-600 dark:text-stone-400 mb-3">
              {description}
            </p>
            <input
              type="number"
              value={currentValue}
              onChange={(e) => handleBuddySettingChange(buddyId, setting.key, parseInt(e.target.value))}
              className="w-full px-4 py-2 rounded-lg border border-stone-300 dark:border-stone-600 bg-white dark:bg-stone-700 text-stone-800 dark:text-stone-200 focus:ring-2 focus:ring-rose-500 focus:border-transparent"
            />
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-stone-50 dark:bg-stone-900 pb-24">
      {/* Header */}
      <div className="bg-gradient-to-r from-rose-500 to-pink-600 text-white p-6 shadow-lg">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-2">
            <Settings size={32} />
            <h1 className="text-3xl font-bold">
              {language === 'de' ? 'Einstellungen' : 'Settings'}
            </h1>
          </div>
          <p className="text-rose-100">
            {language === 'de' 
              ? 'Konfiguriere BoulderBuddy und deine Learning Buddies' 
              : 'Configure BoulderBuddy and your Learning Buddies'}
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-6 space-y-6">
        {/* Global Settings */}
        <div className="bg-stone-100 dark:bg-stone-800 rounded-xl overflow-hidden shadow-lg">
          <button
            onClick={() => toggleSection('global')}
            className="w-full px-6 py-4 flex items-center justify-between bg-gradient-to-r from-purple-500 to-indigo-600 text-white hover:from-purple-600 hover:to-indigo-700 transition-all"
          >
            <div className="flex items-center gap-3">
              <Settings size={24} />
              <div className="text-left">
                <h2 className="text-xl font-bold">
                  {language === 'de' ? '🌍 Globale Einstellungen' : '🌍 Global Settings'}
                </h2>
                <p className="text-sm text-purple-100">
                  {language === 'de' 
                    ? 'Einstellungen für alle Buddies' 
                    : 'Settings for all buddies'}
                </p>
              </div>
            </div>
            {expandedSections.global ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
          </button>

          {expandedSections.global && (
            <div className="p-6 space-y-4">
              {/* ChatGPT API Key */}
              <div className="bg-white dark:bg-stone-700 rounded-lg p-4 border border-stone-200 dark:border-stone-600">
                <label className="font-semibold text-stone-800 dark:text-stone-200 block mb-1">
                  🤖 ChatGPT API Key
                </label>
                <p className="text-sm text-stone-600 dark:text-stone-400 mb-3">
                  {language === 'de' 
                    ? 'Benötigt für KI-gestützte Übersetzungen und Erklärungen. Hol dir deinen Key von OpenAI.' 
                    : 'Required for AI-powered translations and explanations. Get your key from OpenAI.'}
                </p>
                <div className="flex gap-2">
                  <div className="flex-1 relative">
                    <input
                      type={showApiKey ? 'text' : 'password'}
                      value={tempApiKey}
                      onChange={(e) => setTempApiKey(e.target.value)}
                      placeholder="sk-..."
                      className="w-full px-4 py-2 pr-12 rounded-lg border border-stone-300 dark:border-stone-600 bg-white dark:bg-stone-800 text-stone-800 dark:text-stone-200 focus:ring-2 focus:ring-rose-500 focus:border-transparent font-mono text-sm"
                    />
                    <button
                      onClick={() => setShowApiKey(!showApiKey)}
                      className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-stone-500 hover:text-stone-700 dark:hover:text-stone-300"
                    >
                      {showApiKey ? <EyeOff size={20} /> : <Eye size={20} />}
                    </button>
                  </div>
                  <button
                    onClick={handleGlobalSave}
                    className={`px-6 py-2 rounded-lg font-semibold flex items-center gap-2 transition-all ${
                      saved 
                        ? 'bg-green-500 text-white' 
                        : 'bg-rose-500 hover:bg-rose-600 text-white'
                    }`}
                  >
                    <Save size={20} />
                    {saved 
                      ? (language === 'de' ? '✓ Gespeichert' : '✓ Saved') 
                      : (language === 'de' ? 'Speichern' : 'Save')}
                  </button>
                </div>
                <a 
                  href="https://platform.openai.com/api-keys" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sm text-rose-500 hover:text-rose-600 dark:text-rose-400 dark:hover:text-rose-300 mt-2 inline-block"
                >
                  {language === 'de' ? '→ OpenAI API Key erhalten' : '→ Get OpenAI API Key'}
                </a>
              </div>
            </div>
          )}
        </div>

          {/* Buddy-Specific Settings */}
        {Object.entries(buddyConfigs).map(([buddyId, config]) => {
          if (!config.settings || config.settings.length === 0) return null;

          const BuddyIcon = config.icon;
          const buddyName = typeof config.name === 'object' ? config.name[language] : config.name;

          return (
            <div key={buddyId} className="bg-stone-100 dark:bg-stone-800 rounded-xl overflow-hidden shadow-lg">
              <button
                onClick={() => toggleSection(buddyId)}
                className="w-full px-6 py-4 flex items-center justify-between bg-gradient-to-r from-rose-500 to-orange-600 text-white hover:from-rose-600 hover:to-orange-700 transition-all"
              >
                <div className="flex items-center gap-3">
                  <div className="text-white">
                    <BuddyIcon size={32} />
                  </div>
                  <div className="text-left">
                    <h2 className="text-xl font-bold">
                      {buddyName} {language === 'de' ? 'Einstellungen' : 'Settings'}
                    </h2>
                    <p className="text-sm text-rose-100">
                      {language === 'de' 
                        ? `Personalisiere deinen ${buddyName} Buddy` 
                        : `Personalize your ${buddyName} Buddy`}
                    </p>
                  </div>
                </div>
                {expandedSections[buddyId] ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
              </button>

              {expandedSections[buddyId] && (
                <div className="p-6 space-y-4">
                  {config.settings.map(setting => renderSettingInput(buddyId, setting))}
                </div>
              )}
            </div>
          );
        })}

        {/* Info Box */}
        <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
          <p className="text-sm text-blue-800 dark:text-blue-200">
            💡 {language === 'de' 
              ? 'Deine Einstellungen werden lokal in deinem Browser gespeichert und nicht auf einen Server hochgeladen.' 
              : 'Your settings are stored locally in your browser and not uploaded to any server.'}
          </p>
        </div>
      </div>
    </div>
  );
}

export default SettingsPage;

