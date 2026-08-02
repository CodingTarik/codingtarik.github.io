import React, { useState, useEffect } from 'react';
import { Shield, ChevronDown, ChevronUp, Check, Settings, Globe } from 'lucide-react';
import {
  getConsent,
  hasConsented,
  saveConsent,
  acceptAll,
  acceptEssentialOnly,
  applyConsent,
  CONSENT_CATEGORIES,
} from '../utils/consentManager';

const BANNER_TEXT = {
  en: {
    title: 'Privacy Settings',
    description: (
      <>
        We use cookie-free statistics (Umami) to improve the website — without storing
        any personal data. External fonts are only loaded with your consent. Details in our{' '}
      </>
    ),
    privacyLink: 'Privacy Policy',
    detailsShow: 'Customize services',
    detailsHide: 'Show less',
    alwaysActive: 'Always active',
    recommended: 'Recommended',
    saveSelection: 'Save selection',
    acceptAll: 'Accept all',
    essentialOnly: 'Essential only',
  },
  de: {
    title: 'Datenschutz-Einstellungen',
    description: (
      <>
        Wir nutzen cookiefreie Statistiken (Umami) zur Verbesserung der Website — 
        ohne persoenliche Daten zu speichern. Externe Schriftarten werden nur mit 
        deiner Zustimmung geladen. Details in unserer{' '}
      </>
    ),
    privacyLink: 'Datenschutzerklaerung',
    detailsShow: 'Einzelne Dienste anpassen',
    detailsHide: 'Weniger anzeigen',
    alwaysActive: 'Immer aktiv',
    recommended: 'Empfohlen',
    saveSelection: 'Auswahl speichern',
    acceptAll: 'Alle akzeptieren',
    essentialOnly: 'Nur notwendige',
  },
};

/**
 * GDPR/DSGVO-compliant Consent Banner
 * 
 * Shows an info banner on first visit.
 * Analytics (Umami) is enabled by default (legitimate interest).
 * External content (Google Fonts) requires consent.
 * Can be reopened via the footer ("Privacy Settings").
 */
export default function ConsentBanner({ forceOpen = false, onClose }) {
  const [isVisible, setIsVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [lang, setLang] = useState('en');
  const [categories, setCategories] = useState(() => {
    const consent = getConsent();
    return {
      analytics: consent.categories.analytics,
      external: consent.categories.external,
    };
  });

  // Banner anzeigen wenn noch kein Consent vorliegt oder forceOpen
  useEffect(() => {
    if (forceOpen) {
      const consent = getConsent();
      setCategories({
        analytics: consent.categories.analytics,
        external: consent.categories.external,
      });
      setIsVisible(true);
    } else if (!hasConsented()) {
      setIsVisible(true);
    }
  }, [forceOpen]);

  // Auf externe "open-consent-banner" Events reagieren
  useEffect(() => {
    const handleOpenBanner = () => {
      const consent = getConsent();
      setCategories({
        analytics: consent.categories.analytics,
        external: consent.categories.external,
      });
      setShowDetails(true);
      setIsVisible(true);
    };

    window.addEventListener('open-consent-banner', handleOpenBanner);
    return () => window.removeEventListener('open-consent-banner', handleOpenBanner);
  }, []);

  const handleAcceptAll = () => {
    acceptAll();
    applyConsent();
    setIsVisible(false);
    onClose?.();
  };

  const handleAcceptEssentialOnly = () => {
    acceptEssentialOnly();
    applyConsent();
    setIsVisible(false);
    onClose?.();
  };

  const handleSaveSelection = () => {
    saveConsent(categories);
    applyConsent();
    setIsVisible(false);
    onClose?.();
  };

  const toggleCategory = (categoryId) => {
    setCategories(prev => ({
      ...prev,
      [categoryId]: !prev[categoryId],
    }));
  };

  const t = BANNER_TEXT[lang];

  if (!isVisible) return null;

  return (
    <>
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/50 z-[9998] backdrop-blur-sm" />

      {/* Banner */}
      <div className="fixed inset-x-0 bottom-0 z-[9999] p-4 sm:p-6">
        <div className="max-w-2xl mx-auto bg-white dark:bg-stone-900 rounded-2xl shadow-2xl border border-stone-200 dark:border-stone-700 overflow-hidden">
          
          {/* Header */}
          <div className="p-5 sm:p-6">
            <div className="flex items-start gap-3 mb-3">
              <div className="p-2 rounded-xl bg-teal-50 dark:bg-teal-900/30 flex-shrink-0">
                <Shield size={22} className="text-teal-600 dark:text-teal-400" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between gap-2">
                  <h2 className="text-lg font-bold text-stone-900 dark:text-stone-100">
                    {t.title}
                  </h2>
                  {/* Language Toggle */}
                  <button
                    onClick={() => setLang(prev => prev === 'en' ? 'de' : 'en')}
                    className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-medium text-stone-500 dark:text-stone-400 hover:text-stone-700 dark:hover:text-stone-300 hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors border border-stone-200 dark:border-stone-700"
                    aria-label={lang === 'en' ? 'Auf Deutsch wechseln' : 'Switch to English'}
                  >
                    <Globe size={13} />
                    {lang === 'en' ? 'DE' : 'EN'}
                  </button>
                </div>
                <p className="text-sm text-stone-600 dark:text-stone-400 mt-1 leading-relaxed">
                  {t.description}
                  <a 
                    href="/privacy" 
                    className="text-teal-600 dark:text-teal-400 underline hover:no-underline"
                    onClick={() => { setIsVisible(false); onClose?.(); }}
                  >
                    {t.privacyLink}
                  </a>.
                </p>
              </div>
            </div>

            {/* Details Toggle */}
            <button
              onClick={() => setShowDetails(!showDetails)}
              className="flex items-center gap-1.5 text-sm font-medium text-teal-600 dark:text-teal-400 hover:text-teal-700 dark:hover:text-teal-300 transition-colors mt-2"
            >
              <Settings size={14} />
              <span>{showDetails ? t.detailsHide : t.detailsShow}</span>
              {showDetails ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
            </button>
          </div>

          {/* Detailed Settings */}
          {showDetails && (
            <div className="px-5 sm:px-6 pb-2 space-y-3">
              {Object.values(CONSENT_CATEGORIES).map((cat) => {
                const isOn = cat.required || categories[cat.id];

                return (
                  <div
                    key={cat.id}
                    className="flex items-start gap-3 p-3 rounded-xl bg-stone-50 dark:bg-stone-800/50 border border-stone-200 dark:border-stone-700"
                  >
                    {/* Toggle Switch */}
                    <button
                      onClick={() => !cat.required && toggleCategory(cat.id)}
                      disabled={cat.required}
                      role="switch"
                      aria-checked={isOn}
                      aria-label={`${cat.name[lang]} ${cat.required ? `(${t.alwaysActive})` : isOn ? (lang === 'en' ? 'disable' : 'deaktivieren') : (lang === 'en' ? 'enable' : 'aktivieren')}`}
                      className={`
                        mt-0.5 flex-shrink-0 w-11 h-6 rounded-full relative transition-colors duration-200
                        ${isOn
                          ? 'bg-teal-500 dark:bg-teal-600'
                          : 'bg-stone-300 dark:bg-stone-600'
                        }
                        ${cat.required ? 'opacity-70 cursor-not-allowed' : 'cursor-pointer hover:opacity-90'}
                      `}
                    >
                      <span
                        className={`
                          block absolute top-[2px] left-[2px] w-5 h-5 rounded-full bg-white shadow transition-transform duration-200
                          ${isOn ? 'translate-x-5' : 'translate-x-0'}
                        `}
                      />
                    </button>

                    {/* Info */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="font-semibold text-sm text-stone-900 dark:text-stone-100">
                          {cat.name[lang]}
                        </span>
                        {cat.required && (
                          <span className="text-[11px] px-2 py-0.5 rounded-full bg-stone-200 dark:bg-stone-700 text-stone-500 dark:text-stone-400 font-medium">
                            {t.alwaysActive}
                          </span>
                        )}
                        {cat.defaultOn && !cat.required && (
                          <span className="text-[11px] px-2 py-0.5 rounded-full bg-teal-100 dark:bg-teal-900/40 text-teal-700 dark:text-teal-400 font-medium">
                            {t.recommended}
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-stone-500 dark:text-stone-400 mt-1 leading-relaxed">
                        {cat.description[lang]}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {/* Buttons */}
          <div className="p-5 sm:p-6 flex flex-col sm:flex-row gap-2.5">
            {showDetails ? (
              <>
                <button
                  onClick={handleSaveSelection}
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl font-semibold text-sm bg-teal-600 hover:bg-teal-700 text-white transition-colors shadow-sm"
                >
                  <Check size={16} />
                  {t.saveSelection}
                </button>
                <button
                  onClick={handleAcceptAll}
                  className="flex-1 px-4 py-2.5 rounded-xl font-semibold text-sm bg-stone-100 dark:bg-stone-800 hover:bg-stone-200 dark:hover:bg-stone-700 text-stone-800 dark:text-stone-200 transition-colors border border-stone-200 dark:border-stone-700"
                >
                  {t.acceptAll}
                </button>
              </>
            ) : (
              <>
                <button
                  onClick={handleAcceptAll}
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl font-semibold text-sm bg-teal-600 hover:bg-teal-700 text-white transition-colors shadow-sm"
                >
                  <Check size={16} />
                  {t.acceptAll}
                </button>
                <button
                  onClick={handleAcceptEssentialOnly}
                  className="flex-1 px-4 py-2.5 rounded-xl font-semibold text-sm bg-stone-100 dark:bg-stone-800 hover:bg-stone-200 dark:hover:bg-stone-700 text-stone-800 dark:text-stone-200 transition-colors border border-stone-200 dark:border-stone-700"
                >
                  {t.essentialOnly}
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
