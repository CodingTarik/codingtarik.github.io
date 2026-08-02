/**
 * LearnBuddy Configuration
 * Zentrale Konfiguration für das LearnBuddy-System
 */

export const learnBuddyConfig = {
  // App Informationen
  appName: "LearnBuddy",
  version: "1.0.0",
  description: "Your personal learning companion for various skills and topics",

  // URLs
  siteUrl: "https://codingtarik.github.io",
  learnBuddyUrl: "https://codingtarik.github.io/#/learnbuddy",

  // Support
  support: {
    buyMeCoffee: "https://buymeacoffee.com/codingtarik",
    email: "BlogCodingTarik@web.de",
    github: "https://github.com/CodingTarik",
  },

  // Features
  features: {
    multiLanguage: true,
    darkMode: true,
    pwa: true,
    offline: true,
    plan: true,
  },

  // Default Settings
  defaults: {
    language: "en", // 'en' oder 'de'
    theme: "light", // 'light' oder 'dark'
    buddy: "boulder", // Default Buddy
  },

  // Storage Keys (LocalStorage)
  storageKeys: {
    activeBuddy: "activeBuddy",
    favoriteBuddies: "favoriteBuddies",
    planItems: "planItems",
    completedLessons: "completedLessons",
    language: "language",
    theme: "theme",
    settings: "settings",
  },

  // Available Languages
  languages: [
    { code: "en", name: "English", flag: "🇬🇧" },
    { code: "de", name: "Deutsch", flag: "🇩🇪" },
  ],

  // PWA
  pwa: {
    name: "LearnBuddy",
    shortName: "LearnBuddy",
    description: "Your personal learning companion",
    themeColor: "#3b82f6",
    backgroundColor: "#ffffff",
  },
};

export default learnBuddyConfig;

