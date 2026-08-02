import React, { useState } from 'react';
import { FileText, ArrowLeft, Globe } from 'lucide-react';
import blogConfig from '../../modules/blog/config';

export default function ImprintPageFooter() {
  const [lang, setLang] = useState('de');

  return (
    <div className="min-h-screen bg-background text-text py-8 sm:py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8">
        
        {/* Top Control Bar: Back Button & Language Switcher */}
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
              <FileText size={28} />
            </div>
            <div>
              <h1 className="text-2xl sm:text-4xl font-extrabold bg-gradient-to-r from-text via-primary to-secondary bg-clip-text text-transparent">
                {lang === 'de' ? 'Impressum & Rechtliche Hinweise' : 'Legal Notice & Imprint'}
              </h1>
              <p className="text-xs sm:text-sm text-muted mt-1">
                {lang === 'de' ? 'Informationspflichten gemäß § 5 TMG / DDG' : 'Provider Identification according to German Law (§ 5 TMG / DDG)'}
              </p>
            </div>
          </div>
        </div>

        {/* Content Container */}
        <div className="bg-card/80 backdrop-blur-md rounded-3xl border border-border p-6 sm:p-10 shadow-xl space-y-8 text-sm sm:text-base leading-relaxed">
          
          {/* Information according to § 5 TMG */}
          <section className="border-b border-border/60 pb-6">
            <h2 className="text-lg sm:text-xl font-bold text-text mb-3">
              {lang === 'de' ? 'Angaben gemäß § 5 TMG' : 'Information pursuant to § 5 TMG'}
            </h2>
            <div className="text-muted leading-relaxed space-y-1">
              <p className="font-semibold text-text">{blogConfig.imprint.name}</p>
              <p>{blogConfig.imprint.street}</p>
              <p>{blogConfig.imprint.postalCode} {blogConfig.imprint.city}</p>
              <p>{blogConfig.imprint.country}</p>
            </div>
          </section>

          {/* Contact */}
          <section className="border-b border-border/60 pb-6">
            <h2 className="text-lg sm:text-xl font-bold text-text mb-3">
              {lang === 'de' ? 'Kontakt' : 'Contact Details'}
            </h2>
            <div className="text-muted space-y-2">
              <p>
                <strong className="text-text">{lang === 'de' ? 'Telefon' : 'Phone'}:</strong>{' '}
                <a href={`tel:${blogConfig.imprint.phone}`} className="text-primary hover:underline">
                  {blogConfig.imprint.phone}
                </a>
              </p>
              <p>
                <strong className="text-text">E-Mail:</strong>{' '}
                <a href={`mailto:${blogConfig.imprint.email}`} className="text-primary hover:underline">
                  {blogConfig.imprint.email}
                </a>
              </p>
              <p>
                <strong className="text-text">Website:</strong>{' '}
                <a href={blogConfig.imprint.website} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                  {blogConfig.imprint.website}
                </a>
              </p>
            </div>
          </section>

          {/* Online Profiles */}
          <section className="border-b border-border/60 pb-6">
            <h2 className="text-lg sm:text-xl font-bold text-text mb-3">
              {lang === 'de' ? 'Online-Profile & Social Media' : 'Online Profiles & Social Media'}
            </h2>
            <div className="text-muted space-y-2">
              <p>
                <strong className="text-text">GitHub:</strong>{' '}
                <a href={blogConfig.social.github} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                  github.com/{blogConfig.author.github}
                </a>
              </p>
              <p>
                <strong className="text-text">LinkedIn:</strong>{' '}
                <a href={blogConfig.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                  linkedin.com/in/{blogConfig.author.linkedin}
                </a>
              </p>
            </div>
          </section>

          {/* Liability for Contents */}
          <section className="border-b border-border/60 pb-6">
            <h2 className="text-lg sm:text-xl font-bold text-text mb-3">
              {lang === 'de' ? 'Haftung für Inhalte' : 'Liability for Contents'}
            </h2>
            <p className="text-muted leading-relaxed mb-3">
              {lang === 'de'
                ? 'Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.'
                : 'As a service provider, we are responsible for our own content on these pages in accordance with general laws pursuant to § 7 Para.1 TMG. However, according to §§ 8 to 10 TMG, we are not obligated to monitor transmitted or stored third-party information or to investigate circumstances that indicate illegal activity.'}
            </p>
            <p className="text-muted leading-relaxed">
              {lang === 'de'
                ? 'Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.'
                : 'Obligations to remove or block the use of information in accordance with general laws remain unaffected by this. However, liability in this regard is only possible from the moment of knowledge of a specific infringement. Upon notification of appropriate violations, we will remove this content immediately.'}
            </p>
          </section>

          {/* Liability for Links */}
          <section className="border-b border-border/60 pb-6">
            <h2 className="text-lg sm:text-xl font-bold text-text mb-3">
              {lang === 'de' ? 'Haftung für Links' : 'Liability for Links'}
            </h2>
            <p className="text-muted leading-relaxed mb-3">
              {lang === 'de'
                ? 'Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.'
                : 'Our offer contains links to external third-party websites over whose content we have no influence. Therefore, we cannot accept any liability for these external contents. The respective provider or operator of the pages is always responsible for the content of the linked pages.'}
            </p>
            <p className="text-muted leading-relaxed">
              {lang === 'de'
                ? 'Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.'
                : 'The linked pages were checked for possible legal violations at the time of linking. Illegal content was not recognizable at the time of linking. However, a permanent control of the contents of the linked pages is not reasonable without concrete evidence of an infringement. Upon notification of violations, we will remove such links immediately.'}
            </p>
          </section>

          {/* Copyright */}
          <section className="border-b border-border/60 pb-6">
            <h2 className="text-lg sm:text-xl font-bold text-text mb-3">
              {lang === 'de' ? 'Urheberrecht' : 'Copyright'}
            </h2>
            <p className="text-muted leading-relaxed">
              {lang === 'de'
                ? 'Die durch den Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.'
                : 'The content and works created by the site operator on these pages are subject to German copyright law. Duplication, processing, distribution, and any kind of exploitation outside the limits of copyright law require the written consent of the respective author or creator.'}
            </p>
          </section>

          {/* Dispute Resolution */}
          <section>
            <h2 className="text-lg sm:text-xl font-bold text-text mb-3">
              {lang === 'de' ? 'Streitbeilegung' : 'Dispute Resolution'}
            </h2>
            <p className="text-muted leading-relaxed">
              {lang === 'de'
                ? 'Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: '
                : 'The European Commission provides a platform for online dispute resolution (ODR): '}
              <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                https://ec.europa.eu/consumers/odr/
              </a>.
            </p>
          </section>

        </div>
      </div>
    </div>
  );
}
