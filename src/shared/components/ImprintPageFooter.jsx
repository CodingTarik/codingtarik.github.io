import React from 'react';
import { FileText, ArrowLeft } from 'lucide-react';
import blogConfig from '../../blog/config';

export default function ImprintPageFooter() {
  return (
    <div className="min-h-screen bg-light-background dark:bg-dark-background text-light-text dark:text-dark-text py-8">
      <div className="max-w-4xl mx-auto px-4 md:px-8">
        {/* Back Button */}
        <button
          onClick={() => window.history.back()}
          className="flex items-center gap-2 text-gray-500 dark:text-gray-400 hover:text-light-primary dark:hover:text-dark-primary mb-6 transition-colors font-medium"
        >
          <ArrowLeft size={20} />
          <span>Zurueck</span>
        </button>

        {/* Header */}
        <div className="bg-light-card dark:bg-dark-card rounded-lg border border-light-border dark:border-dark-border p-6 md:p-8 mb-6">
          <div className="flex items-center gap-3 mb-4">
            <FileText size={32} className="text-light-primary dark:text-dark-primary" />
            <h1 className="text-3xl md:text-4xl font-bold">
              Impressum
            </h1>
          </div>
        </div>

        {/* Content */}
        <div className="bg-light-card dark:bg-dark-card rounded-lg border border-light-border dark:border-dark-border p-6 md:p-8">
          <div className="prose dark:prose-invert max-w-none">
            
            <h2>Angaben gemaess &sect; 5 TMG</h2>
            <p>
              <strong>{blogConfig.imprint.name}</strong><br />
              {blogConfig.imprint.street}<br />
              {blogConfig.imprint.postalCode} {blogConfig.imprint.city}<br />
              {blogConfig.imprint.country}
            </p>

            <h2>Kontakt</h2>
            <p>
              Telefon: <a href={`tel:${blogConfig.imprint.phone}`}>{blogConfig.imprint.phone}</a><br />
              E-Mail: <a href={`mailto:${blogConfig.imprint.email}`}>{blogConfig.imprint.email}</a><br />
              Website: <a href={blogConfig.imprint.website} target="_blank" rel="noopener noreferrer">{blogConfig.imprint.website}</a>
            </p>

            <h2>Online-Profile</h2>
            <p>
              GitHub: <a href={blogConfig.social.github} target="_blank" rel="noopener noreferrer">github.com/{blogConfig.author.github}</a><br />
              LinkedIn: <a href={blogConfig.social.linkedin} target="_blank" rel="noopener noreferrer">linkedin.com/in/{blogConfig.author.linkedin}</a>
            </p>

            <h2>Haftung fuer Inhalte</h2>
            <p>
              Als Diensteanbieter sind wir gemaess &sect; 7 Abs. 1 TMG fuer eigene Inhalte auf diesen Seiten nach
              den allgemeinen Gesetzen verantwortlich. Nach &sect;&sect; 8 bis 10 TMG sind wir als Diensteanbieter
              jedoch nicht verpflichtet, uebermittelte oder gespeicherte fremde Informationen zu ueberwachen oder
              nach Umstaenden zu forschen, die auf eine rechtswidrige Taetigkeit hinweisen.
            </p>
            <p>
              Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen
              Gesetzen bleiben hiervon unberuehrt. Eine diesbezuegliche Haftung ist jedoch erst ab dem Zeitpunkt der
              Kenntnis einer konkreten Rechtsverletzung moeglich. Bei Bekanntwerden von entsprechenden
              Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
            </p>

            <h2>Haftung fuer Links</h2>
            <p>
              Unser Angebot enthaelt Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss
              haben. Deshalb koennen wir fuer diese fremden Inhalte auch keine Gewaehr uebernehmen. Fuer die Inhalte
              der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
            </p>
            <p>
              Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf moegliche Rechtsverstoesse ueberprueft.
              Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche
              Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht
              zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.
            </p>

            <h2>Urheberrecht</h2>
            <p>
              Die durch den Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen
              Urheberrecht. Die Vervielfaeltigung, Bearbeitung, Verbreitung und jede Art der Verwertung ausserhalb
              der Grenzen des Urheberrechtes beduerfen der schriftlichen Zustimmung des jeweiligen Autors bzw.
              Erstellers. Downloads und Kopien dieser Seite sind nur fuer den privaten, nicht kommerziellen
              Gebrauch gestattet.
            </p>
            <p>
              Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte
              Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Solltest du trotzdem
              auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei
              Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
            </p>

            <h2>Open Source</h2>
            <p>
              Teile dieser Website basieren auf Open-Source-Software. Der Quellcode ist auf GitHub verfuegbar:<br />
              <a href={`https://github.com/${blogConfig.github.owner}/${blogConfig.github.repo}`} target="_blank" rel="noopener noreferrer">
                github.com/{blogConfig.github.owner}/{blogConfig.github.repo}
              </a>
            </p>

            <h2>Streitbeilegung</h2>
            <p>
              Die Europaeische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{' '}
              <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer">
                https://ec.europa.eu/consumers/odr/
              </a>
            </p>
            <p>
              Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
              Verbraucherschlichtungsstelle teilzunehmen.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
