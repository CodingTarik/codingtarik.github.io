import React, { createContext, useContext, useState, useEffect } from 'react';

const SettingsContext = createContext();

export const useSettings = () => {
  const context = useContext(SettingsContext);
  if (!context) {
    throw new Error('useSettings must be used within a SettingsProvider');
  }
  return context;
};

// Storage keys
const GLOBAL_SETTINGS_KEY = 'boulderbuddy_global_settings';
const BUDDY_SETTINGS_KEY_PREFIX = 'boulderbuddy_buddy_settings_';

// Default global settings
const DEFAULT_GLOBAL_SETTINGS = {
  chatGptApiKey: '',
  theme: 'light',
  language: 'de'
};

export const SettingsProvider = ({ children }) => {
  const [globalSettings, setGlobalSettings] = useState(() => {
    const stored = localStorage.getItem(GLOBAL_SETTINGS_KEY);
    return stored ? JSON.parse(stored) : DEFAULT_GLOBAL_SETTINGS;
  });

  const [buddySettings, setBuddySettings] = useState({});

  // Save global settings to localStorage
  useEffect(() => {
    localStorage.setItem(GLOBAL_SETTINGS_KEY, JSON.stringify(globalSettings));
  }, [globalSettings]);

  // Update global setting
  const updateGlobalSetting = (key, value) => {
    setGlobalSettings(prev => ({
      ...prev,
      [key]: value
    }));
  };

  // Get buddy settings
  const getBuddySettings = (buddyId) => {
    if (buddySettings[buddyId]) {
      return buddySettings[buddyId];
    }
    
    const stored = localStorage.getItem(BUDDY_SETTINGS_KEY_PREFIX + buddyId);
    return stored ? JSON.parse(stored) : {};
  };

  // Update buddy setting
  const updateBuddySetting = (buddyId, key, value) => {
    const currentSettings = getBuddySettings(buddyId);
    const updatedSettings = {
      ...currentSettings,
      [key]: value
    };
    
    setBuddySettings(prev => ({
      ...prev,
      [buddyId]: updatedSettings
    }));
    
    localStorage.setItem(
      BUDDY_SETTINGS_KEY_PREFIX + buddyId,
      JSON.stringify(updatedSettings)
    );
  };

  // Get all buddy settings (for settings page)
  const getAllBuddySettings = () => {
    const allSettings = {};
    const keys = Object.keys(localStorage);
    
    keys.forEach(key => {
      if (key.startsWith(BUDDY_SETTINGS_KEY_PREFIX)) {
        const buddyId = key.replace(BUDDY_SETTINGS_KEY_PREFIX, '');
        allSettings[buddyId] = JSON.parse(localStorage.getItem(key));
      }
    });
    
    return allSettings;
  };

  const value = {
    globalSettings,
    updateGlobalSetting,
    getBuddySettings,
    updateBuddySetting,
    getAllBuddySettings
  };

  return (
    <SettingsContext.Provider value={value}>
      {children}
    </SettingsContext.Provider>
  );
};

