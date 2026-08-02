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
        We use cookie-free analytics (Umami) to improve our website — without storing personal data. External services like Google Fonts are only loaded with your consent. Learn more in our{' '}
      </>
    ),
    privacyLink: 'Privacy Policy',
    detailsShow: 'Customize individual services',
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
        Wir nutzen cookiefreie Web-Analysen (Umami) zur Verbesserung unserer Website — ohne persönliche Daten zu speichern. Externe Schriftarten geladen wir erst nach deiner Zustimmung. Details in unserer{' '}
      </>
    ),
    privacyLink: 'Datenschutzerklärung',
    detailsShow: 'Einzelne Dienste anpassen',
    detailsHide: 'Weniger anzeigen',
    alwaysActive: 'Immer aktiv',
    recommended: 'Empfohlen',
    saveSelection: 'Auswahl speichern',
    acceptAll: 'Alle akzeptieren',
    essentialOnly: 'Nur notwendige',
  },
};

export default function ConsentBanner({ forceOpen = false, onClose }) {
  const [isVisible, setIsVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [lang, setLang] = useState('de');
  const [categories, setCategories] = useState(() => {
    const consent = getConsent();
    return {
      analytics: consent.categories.analytics,
      external: consent.categories.external,
    };
  });

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
      <div className="fixed inset-0 bg-black/70 z-[9998] backdrop-blur-md transition-opacity" />

      {/* Banner Modal */}
      <div className="fixed inset-x-0 bottom-0 z-[9999] p-4 sm:p-6">
        <div className="max-w-2xl mx-auto bg-card border border-border/80 rounded-3xl shadow-2xl overflow-hidden text-text backdrop-blur-xl">
          
          {/* Header */}
          <div className="p-6 sm:p-7">
            <div className="flex items-start gap-4 mb-4">
              <div className="p-3 rounded-2xl bg-primary/10 text-primary border border-primary/20 flex-shrink-0">
                <Shield size={24} />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-2 mb-1">
                  <h2 className="text-xl font-bold bg-gradient-to-r from-text to-primary bg-clip-text text-transparent">
                    {t.title}
                  </h2>
                  {/* Language Switcher */}
                  <div className="flex items-center bg-background border border-border rounded-xl p-1 shadow-sm">
                    <button
                      onClick={() => setLang('de')}
                      className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                        lang === 'de' ? 'bg-primary text-white' : 'text-muted hover:text-text'
                      }`}
                    >
                      DE
                    </button>
                    <button
                      onClick={() => setLang('en')}
                      className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                        lang === 'en' ? 'bg-primary text-white' : 'text-muted hover:text-text'
                      }`}
                    >
                      EN
                    </button>
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-muted leading-relaxed">
                  {t.description}
                  <a 
                    href="/privacy" 
                    className="text-primary font-semibold underline hover:no-underline ml-1"
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
              className="inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:opacity-80 transition-opacity mt-1 cursor-pointer"
            >
              <Settings size={14} />
              <span>{showDetails ? t.detailsHide : t.detailsShow}</span>
              {showDetails ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
            </button>
          </div>

          {/* Detailed Settings */}
          {showDetails && (
            <div className="px-6 pb-2 space-y-3">
              {Object.values(CONSENT_CATEGORIES).map((cat) => {
                const isOn = cat.required || categories[cat.id];

                return (
                  <div
                    key={cat.id}
                    className="flex items-start gap-3.5 p-4 rounded-2xl bg-background/60 border border-border/70"
                  >
                    {/* Toggle Switch */}
                    <button
                      onClick={() => !cat.required && toggleCategory(cat.id)}
                      disabled={cat.required}
                      role="switch"
                      aria-checked={isOn}
                      className={`
                        mt-0.5 flex-shrink-0 w-11 h-6 rounded-full relative transition-colors duration-200
                        ${isOn ? 'bg-primary' : 'bg-border'}
                        ${cat.required ? 'opacity-60 cursor-not-allowed' : 'cursor-pointer hover:opacity-90'}
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
                      <div className="flex items-center gap-2 flex-wrap mb-1">
                        <span className="font-bold text-sm text-text">
                          {cat.name[lang]}
                        </span>
                        {cat.required && (
                          <span className="text-[10px] px-2 py-0.5 rounded-full bg-border text-muted font-bold">
                            {t.alwaysActive}
                          </span>
                        )}
                        {cat.defaultOn && !cat.required && (
                          <span className="text-[10px] px-2 py-0.5 rounded-full bg-primary/10 text-primary font-bold border border-primary/20">
                            {t.recommended}
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-muted leading-relaxed">
                        {cat.description[lang]}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {/* Action Buttons */}
          <div className="p-6 flex flex-col sm:flex-row gap-3 border-t border-border/50 bg-background/30">
            {showDetails ? (
              <>
                <button
                  onClick={handleSaveSelection}
                  className="flex-1 flex items-center justify-center gap-2 px-5 py-3 rounded-2xl font-bold text-xs sm:text-sm bg-gradient-to-r from-primary to-secondary text-white shadow-lg shadow-primary/20 hover:opacity-90 transition-all cursor-pointer"
                >
                  <Check size={16} />
                  {t.saveSelection}
                </button>
                <button
                  onClick={handleAcceptAll}
                  className="flex-1 px-5 py-3 rounded-2xl font-bold text-xs sm:text-sm bg-card border border-border hover:bg-border/40 text-text transition-all cursor-pointer"
                >
                  {t.acceptAll}
                </button>
              </>
            ) : (
              <>
                <button
                  onClick={handleAcceptAll}
                  className="flex-1 flex items-center justify-center gap-2 px-5 py-3 rounded-2xl font-bold text-xs sm:text-sm bg-gradient-to-r from-primary to-secondary text-white shadow-lg shadow-primary/20 hover:opacity-90 transition-all cursor-pointer"
                >
                  <Check size={16} />
                  {t.acceptAll}
                </button>
                <button
                  onClick={handleAcceptEssentialOnly}
                  className="flex-1 px-5 py-3 rounded-2xl font-bold text-xs sm:text-sm bg-card border border-border hover:bg-border/40 text-text transition-all cursor-pointer"
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
