import React, { useState } from 'react';
import { Shield, ArrowLeft, Globe } from 'lucide-react';

export default function PrivacyPage() {
  const [lang, setLang] = useState('de');

  return (
    <div className="min-h-screen bg-background text-text py-8 sm:py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8">
        
        {/* Top Control Bar */}
        <div className="flex items-center justify-between mb-6">
          <button
            onClick={() => window.history.back()}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-card border border-border text-muted hover:text-text hover:border-primary transition-all font-semibold text-xs sm:text-sm cursor-pointer shadow-sm"
          >
            <ArrowLeft size={16} />
            <span>{lang === 'de' ? 'Zurück' : 'Back'}</span>
          </button>

          {/* Language Switcher */}
          <div className="flex items-center bg-card border border-border rounded-xl p-1 shadow-sm">
            <button
              onClick={() => setLang('de')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                lang === 'de' ? 'bg-primary text-white shadow-sm' : 'text-muted hover:text-text'
              }`}
            >
              🇩🇪 Deutsch
            </button>
            <button
              onClick={() => setLang('en')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                lang === 'en' ? 'bg-primary text-white shadow-sm' : 'text-muted hover:text-text'
              }`}
            >
              🇬🇧 English
            </button>
          </div>
        </div>

        {/* Header Hero Banner */}
        <div className="bg-card/80 backdrop-blur-md rounded-3xl border border-border p-6 sm:p-8 mb-8 shadow-xl">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-2xl bg-primary/10 text-primary border border-primary/20">
              <Shield size={28} />
            </div>
            <div>
              <h1 className="text-2xl sm:text-4xl font-extrabold bg-gradient-to-r from-text via-primary to-secondary bg-clip-text text-transparent">
                {lang === 'de' ? 'Datenschutzerklärung' : 'Privacy Policy'}
              </h1>
              <p className="text-xs sm:text-sm text-muted mt-1">
                {lang === 'de' ? 'Stand: Februar 2026 • DSGVO-konform & Cookiefrei' : 'Last updated: February 2026 • GDPR Compliant & Cookie-Free'}
              </p>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="bg-card/80 backdrop-blur-md rounded-3xl border border-border p-6 sm:p-10 shadow-xl space-y-8 text-sm sm:text-base leading-relaxed text-muted">
          
          {/* Section 1 */}
          <section className="border-b border-border/60 pb-6">
            <h2 className="text-lg sm:text-xl font-bold text-text mb-3">
              {lang === 'de' ? '1. Verantwortlicher' : '1. Controller'}
            </h2>
            <p className="mb-3">
              {lang === 'de'
                ? 'Verantwortlicher im Sinne der Datenschutz-Grundverordnung (DSGVO) und anderer nationaler Datenschutzgesetze ist:'
                : 'Data controller within the meaning of the General Data Protection Regulation (GDPR) and other national data protection laws is:'}
            </p>
            <div className="bg-background/60 p-4 rounded-2xl border border-border text-text font-medium space-y-1">
              <p className="font-bold text-primary">Tarik Azzouzi</p>
              <p>Nieder-Ramstädter-Straße 187</p>
              <p>64285 Darmstadt, Deutschland</p>
              <p>E-Mail: <a href="mailto:BlogCodingTarik@web.de" className="text-primary hover:underline">BlogCodingTarik@web.de</a></p>
            </div>
          </section>

          {/* Section 2 */}
          <section className="border-b border-border/60 pb-6">
            <h2 className="text-lg sm:text-xl font-bold text-text mb-3">
              {lang === 'de' ? '2. Allgemeines zur Datenverarbeitung' : '2. General Information on Data Processing'}
            </h2>
            <p className="mb-3">
              {lang === 'de'
                ? 'Der Schutz deiner persönlichen Daten ist uns ein wichtiges Anliegen. Wir verarbeiten personenbezogene Daten grundsätzlich nur, soweit dies zur Bereitstellung einer funktionsfähigen Website sowie unserer Inhalte und Leistungen erforderlich ist.'
                : 'The protection of your personal data is an important concern for us. As a rule, we process personal data only to the extent necessary to provide a functional website as well as our content and services.'}
            </p>
          </section>

          {/* Section 3 */}
          <section className="border-b border-border/60 pb-6">
            <h2 className="text-lg sm:text-xl font-bold text-text mb-3">
              {lang === 'de' ? '3. Rechtsgrundlagen der Verarbeitung' : '3. Legal Basis for Processing'}
            </h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong className="text-text">Art. 6 Abs. 1 lit. a DSGVO (Einwilligung):</strong>{' '}
                {lang === 'de'
                  ? 'Soweit wir für Verarbeitungsvorgänge eine Einwilligung einholen (z. B. für externe Schriftarten).'
                  : 'Insofar as we obtain consent for processing operations (e.g. for external fonts).'}
              </li>
              <li>
                <strong className="text-text">Art. 6 Abs. 1 lit. f DSGVO (Berechtigtes Interesse):</strong>{' '}
                {lang === 'de'
                  ? 'Für die technische Bereitstellung der Website und datenschutzfreundliche Webanalyse mit Umami Analytics (cookiefrei, keine Speicherung persönlicher Daten).'
                  : 'For technical website delivery and privacy-friendly web analytics with Umami Analytics (cookie-free, zero personal data stored).'}
              </li>
            </ul>
          </section>

          {/* Section 4 */}
          <section className="border-b border-border/60 pb-6">
            <h2 className="text-lg sm:text-xl font-bold text-text mb-3">
              {lang === 'de' ? '4. Webanalyse (Umami Analytics)' : '4. Web Analytics (Umami Analytics)'}
            </h2>
            <p className="mb-3">
              {lang === 'de'
                ? 'Wir verwenden Umami Analytics zur anonymen Analyse der Nutzung unserer Website.'
                : 'We use Umami Analytics for anonymous website usage statistics.'}
            </p>
            <ul className="list-disc pl-5 space-y-1 mb-3">
              <li>{lang === 'de' ? 'Keine Cookies' : 'Zero cookies set'}</li>
              <li>{lang === 'de' ? 'Keine Speicherung von IP-Adressen' : 'Zero IP addresses stored'}</li>
              <li>{lang === 'de' ? 'Kein Cross-Site Tracking' : 'No cross-site tracking'}</li>
            </ul>
            <p>
              {lang === 'de' ? 'Du kannst Einstellungen jederzeit über die ' : 'You can adjust preferences anytime via '}
              <button
                onClick={() => window.dispatchEvent(new CustomEvent('open-consent-banner'))}
                className="text-primary font-bold underline hover:no-underline cursor-pointer"
              >
                {lang === 'de' ? 'Datenschutz-Einstellungen' : 'Privacy Settings'}
              </button>{' '}
              {lang === 'de' ? 'anpassen.' : 'in the footer.'}
            </p>
          </section>

          {/* Section 5 */}
          <section className="border-b border-border/60 pb-6">
            <h2 className="text-lg sm:text-xl font-bold text-text mb-3">
              {lang === 'de' ? '5. Lokale Datenspeicherung (Local Storage)' : '5. Local Data Storage (Local Storage)'}
            </h2>
            <p>
              {lang === 'de'
                ? 'Diese Website nutzt den Local Storage Ihres Browsers für Benutzereinstellungen (Sprache, Theme, Privacy-Auswahl). Diese Daten bleiben 100% auf Ihrem Gerät und werden niemals an Server übertragen.'
                : 'This website utilizes your browser local storage for user preferences (language, theme, consent choices). Data remains 100% client-side and is never sent to external servers.'}
            </p>
          </section>

          {/* Section 6 */}
          <section>
            <h2 className="text-lg sm:text-xl font-bold text-text mb-3">
              {lang === 'de' ? '6. Ihre Rechte' : '6. Your Rights'}
            </h2>
            <p className="mb-2">
              {lang === 'de'
                ? 'Sie haben jederzeit das Recht auf Auskunft, Berichtigung, Löschung und Einschränkung der Verarbeitung Ihrer Daten gemäß DSGVO.'
                : 'Under the GDPR, you have the right to access, rectify, erase, and restrict the processing of your personal data at any time.'}
            </p>
          </section>

        </div>
      </div>
    </div>
  );
}
