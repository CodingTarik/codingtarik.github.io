/**
 * Consent Manager - DSGVO/GDPR-konforme Einwilligungsverwaltung
 * 
 * Verwaltet die Einwilligungen der Nutzer fuer verschiedene Kategorien
 * und speichert diese in localStorage.
 * 
 * Kategorien:
 * - essential: Immer aktiv (technisch notwendig)
 * - analytics: Umami Analytics -- standardmaessig aktiv (berechtigtes Interesse, Art. 6 Abs. 1 lit. f DSGVO)
 *              Umami ist cookiefrei, speichert keine IPs und erhebt keine personenbezogenen Daten.
 *              Nutzer kann per Opt-out widersprechen.
 * - external: Externe Inhalte (Google Fonts) -- Opt-in erforderlich (Einwilligung, Art. 6 Abs. 1 lit. a DSGVO)
 */

const CONSENT_KEY = 'cookie-consent';
const CONSENT_VERSION = 2; // Version 2: Analytics default ON (berechtigtes Interesse)

/**
 * Standard-Consent:
 * - analytics: true (berechtigtes Interesse -- Umami ist cookiefrei & speichert keine personenbezogenen Daten)
 * - external: false (erfordert Einwilligung -- Google Fonts uebermittelt IP an Google)
 */
const DEFAULT_CONSENT = {
  version: CONSENT_VERSION,
  timestamp: null,
  decided: false,
  categories: {
    essential: true,   // Immer aktiv
    analytics: true,   // Berechtigtes Interesse (Opt-out)
    external: false,   // Einwilligung erforderlich (Opt-in)
  }
};

/**
 * Consent aus localStorage laden
 */
export const getConsent = () => {
  try {
    const stored = localStorage.getItem(CONSENT_KEY);
    if (!stored) return { ...DEFAULT_CONSENT, categories: { ...DEFAULT_CONSENT.categories } };
    
    const parsed = JSON.parse(stored);
    
    // Reset consent state if consent schema version has updated
    if (parsed.version !== CONSENT_VERSION) {
      return { ...DEFAULT_CONSENT, categories: { ...DEFAULT_CONSENT.categories } };
    }
    
    return parsed;
  } catch (e) {
    return { ...DEFAULT_CONSENT, categories: { ...DEFAULT_CONSENT.categories } };
  }
};

/**
 * Pruefen ob der Nutzer bereits eine Entscheidung getroffen hat
 */
export const hasConsented = () => {
  const consent = getConsent();
  return consent.decided === true;
};

/**
 * Pruefen ob eine bestimmte Kategorie erlaubt ist
 */
export const isConsentGiven = (category) => {
  if (category === 'essential') return true;
  const consent = getConsent();
  return consent.categories[category] === true;
};

/**
 * Consent speichern
 */
export const saveConsent = (categories) => {
  const consent = {
    version: CONSENT_VERSION,
    timestamp: new Date().toISOString(),
    decided: true,
    categories: {
      essential: true, // Immer aktiv
      ...categories,
    }
  };
  
  try {
    localStorage.setItem(CONSENT_KEY, JSON.stringify(consent));
  } catch (e) {
    console.warn('Could not save consent to localStorage:', e);
  }
  
  // Event dispatchen, damit andere Komponenten reagieren koennen
  window.dispatchEvent(new CustomEvent('consent-changed', { detail: consent }));
  
  return consent;
};

/**
 * Alle Kategorien akzeptieren
 */
export const acceptAll = () => {
  return saveConsent({
    analytics: true,
    external: true,
  });
};

/**
 * Nur essentielle Kategorien akzeptieren (Opt-out von allem Optionalen)
 */
export const acceptEssentialOnly = () => {
  return saveConsent({
    analytics: false,
    external: false,
  });
};

/**
 * Consent zuruecksetzen (Banner wird wieder angezeigt)
 */
export const resetConsent = () => {
  try {
    localStorage.removeItem(CONSENT_KEY);
  } catch (e) {
    console.warn('Could not reset consent:', e);
  }
  window.dispatchEvent(new CustomEvent('consent-changed', { detail: DEFAULT_CONSENT }));
};

/**
 * Umami Analytics Script dynamisch laden
 */
let umamiLoaded = false;

export const loadUmamiAnalytics = () => {
  if (umamiLoaded) return;
  if (!isConsentGiven('analytics')) return;
  
  const script = document.createElement('script');
  script.defer = true;
  script.src = 'https://cloud.umami.is/script.js';
  script.setAttribute('data-website-id', 'c31b6302-2d85-48b8-8dc6-1418e541d2be');
  document.head.appendChild(script);
  umamiLoaded = true;
};

/**
 * Umami Analytics Script entfernen (nach Opt-out)
 */
export const removeUmamiAnalytics = () => {
  const script = document.querySelector('script[data-website-id="c31b6302-2d85-48b8-8dc6-1418e541d2be"]');
  if (script) {
    script.remove();
    umamiLoaded = false;
    // Umami global entfernen
    if (window.umami) {
      delete window.umami;
    }
  }
};

/**
 * Google Fonts dynamisch laden
 */
let fontsLoaded = false;

export const loadGoogleFonts = () => {
  if (fontsLoaded) return;
  if (!isConsentGiven('external')) return;
  
  // Preconnect
  const preconnect1 = document.createElement('link');
  preconnect1.rel = 'preconnect';
  preconnect1.href = 'https://fonts.googleapis.com';
  document.head.appendChild(preconnect1);
  
  const preconnect2 = document.createElement('link');
  preconnect2.rel = 'preconnect';
  preconnect2.href = 'https://fonts.gstatic.com';
  preconnect2.crossOrigin = 'anonymous';
  document.head.appendChild(preconnect2);
  
  // Font stylesheet
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap';
  document.head.appendChild(link);
  fontsLoaded = true;
};

/**
 * Services basierend auf aktuellem Consent laden/entladen
 */
export const applyConsent = () => {
  if (isConsentGiven('analytics')) {
    loadUmamiAnalytics();
  } else {
    removeUmamiAnalytics();
  }
  if (isConsentGiven('external')) {
    loadGoogleFonts();
  }
};

/**
 * Consent-Kategorien mit Beschreibungen (fuer UI)
 */
export const CONSENT_CATEGORIES = {
  essential: {
    id: 'essential',
    name: { de: 'Technisch notwendig', en: 'Essential' },
    description: {
      de: 'Diese Funktionen sind fuer den Betrieb der Website erforderlich. Dazu gehoeren das Speichern deiner Einstellungen (Sprache, Dark Mode) und die grundlegende Funktionalitaet der Seite. Es werden keine Daten an Dritte uebermittelt.',
      en: 'These features are required for the website to function. This includes saving your settings (language, dark mode) and basic site functionality. No data is transmitted to third parties.'
    },
    required: true,
    defaultOn: true,
  },
  analytics: {
    id: 'analytics',
    name: { de: 'Statistiken (Umami)', en: 'Analytics (Umami)' },
    description: {
      de: 'Anonyme Nutzungsstatistiken mit Umami Analytics. Umami ist cookiefrei, speichert keine IP-Adressen und erhebt keine personenbezogenen Daten. Aktiviert auf Basis unseres berechtigten Interesses (Art. 6 Abs. 1 lit. f DSGVO). Du kannst jederzeit widersprechen.',
      en: 'Anonymous usage statistics via Umami Analytics. Umami is cookie-free, does not store IP addresses and does not collect personal data. Enabled based on legitimate interest (Art. 6(1)(f) GDPR). You can opt out at any time.'
    },
    required: false,
    defaultOn: true,
  },
  external: {
    id: 'external',
    name: { de: 'Externe Inhalte', en: 'External Content' },
    description: {
      de: 'Laden von Schriftarten (Google Fonts) von externen Servern. Dabei wird deine IP-Adresse an Google uebermittelt. Ohne diese Einwilligung werden Systemschriftarten verwendet.',
      en: 'Loading fonts (Google Fonts) from external servers. Your IP address will be transmitted to Google. Without consent, system fonts will be used instead.'
    },
    required: false,
    defaultOn: false,
  }
};
