import React from 'react';
import { Shield, ArrowLeft } from 'lucide-react';

export default function PrivacyPage() {
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
            <Shield size={32} className="text-light-primary dark:text-dark-primary" />
            <h1 className="text-3xl md:text-4xl font-bold">
              Privacy Policy
            </h1>
          </div>
          <p className="text-gray-500 dark:text-gray-400">
            Stand: Februar 2026
          </p>
        </div>

        {/* Content */}
        <div className="bg-light-card dark:bg-dark-card rounded-lg border border-light-border dark:border-dark-border p-6 md:p-8 prose dark:prose-invert max-w-none">
          
          {/* 1. Verantwortlicher */}
          <h2>1. Verantwortlicher</h2>
          <p>
            Verantwortlicher im Sinne der Datenschutz-Grundverordnung (DSGVO) und anderer nationaler
            Datenschutzgesetze sowie sonstiger datenschutzrechtlicher Bestimmungen ist:
          </p>
          <p>
            <strong>Tarik Azzouzi</strong><br />
            Nieder-Ramstaedter-Strasse 187<br />
            64285 Darmstadt<br />
            Deutschland<br />
            E-Mail: <a href="mailto:BlogCodingTarik@web.de">BlogCodingTarik@web.de</a>
          </p>

          {/* 2. Allgemeines zur Datenverarbeitung */}
          <h2>2. Allgemeines zur Datenverarbeitung</h2>
          <p>
            Der Schutz deiner persoenlichen Daten ist uns wichtig. Diese Datenschutzerklaerung informiert
            dich ueber Art, Umfang und Zweck der Verarbeitung personenbezogener Daten auf dieser Website.
          </p>
          <p>
            Wir verarbeiten personenbezogene Daten grundsaetzlich nur, soweit dies zur Bereitstellung
            einer funktionsfaehigen Website sowie unserer Inhalte und Leistungen erforderlich ist. Die
            Verarbeitung personenbezogener Daten erfolgt nur nach Einwilligung des Nutzers oder wenn
            eine gesetzliche Grundlage dies erlaubt.
          </p>

          {/* 3. Rechtsgrundlagen */}
          <h2>3. Rechtsgrundlagen der Verarbeitung</h2>
          <p>Die Verarbeitung personenbezogener Daten erfolgt auf Grundlage folgender Rechtsgrundlagen:</p>
          <ul>
            <li>
              <strong>Art. 6 Abs. 1 lit. a DSGVO (Einwilligung):</strong> Soweit wir fuer Verarbeitungsvorgaenge
              eine Einwilligung einholen, z.B. fuer das Laden externer Schriftarten (Google Fonts).
            </li>
            <li>
              <strong>Art. 6 Abs. 1 lit. f DSGVO (Berechtigtes Interesse):</strong> Fuer die technische
              Bereitstellung der Website, die Gewaehrleistung der IT-Sicherheit sowie fuer die anonyme
              Webanalyse mit Umami Analytics (cookiefrei, keine Speicherung personenbezogener Daten).
              Du kannst der Verarbeitung auf Basis berechtigter Interessen jederzeit widersprechen
              (Art. 21 DSGVO).
            </li>
          </ul>

          {/* 4. Hosting */}
          <h2>4. Hosting</h2>
          <p>
            Diese Website wird ueber <strong>GitHub Pages</strong> gehostet, einen Dienst der GitHub Inc.,
            88 Colin P Kelly Jr St, San Francisco, CA 94107, USA (ein Unternehmen der Microsoft Corporation).
          </p>
          <p>
            Beim Aufrufen dieser Website werden automatisch Informationen in sogenannten Server-Logfiles
            gespeichert. Folgende Daten werden dabei erhoben:
          </p>
          <ul>
            <li>IP-Adresse des anfragenden Rechners</li>
            <li>Datum und Uhrzeit des Zugriffs</li>
            <li>Name und URL der abgerufenen Datei</li>
            <li>Uebertragene Datenmenge</li>
            <li>Browser-Typ und -Version</li>
            <li>Verwendetes Betriebssystem</li>
            <li>Referrer URL (zuvor besuchte Seite)</li>
          </ul>
          <p>
            Diese Daten werden von GitHub im Rahmen des Hosting-Dienstes erhoben. Wir haben keinen direkten
            Zugriff auf diese Server-Logfiles. Die Verarbeitung erfolgt auf Grundlage unseres berechtigten
            Interesses an einer zuverlaessigen Bereitstellung der Website (Art. 6 Abs. 1 lit. f DSGVO).
          </p>
          <p>
            GitHub kann die Daten in den USA verarbeiten. Die Uebermittlung in die USA wird durch die
            EU-Standardvertragsklauseln abgesichert. Weitere Informationen findest du in der{' '}
            <a href="https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement" target="_blank" rel="noopener noreferrer">
              GitHub's Privacy Policy
            </a>.
          </p>

          {/* 5. Webanalyse */}
          <h2>5. Webanalyse (Umami Analytics)</h2>
          <p>
            Wir verwenden <strong>Umami Analytics</strong>, einen datenschutzfreundlichen Webanalysedienst,
            um anonyme Nutzungsstatistiken zu erheben.
          </p>
          <p>
            <strong>Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse).</strong>{' '}
            Unser berechtigtes Interesse liegt in der Verbesserung unseres Webangebots. Umami ist als
            besonders datenschutzfreundliche Loesung konzipiert und erhebt <strong>keine personenbezogenen Daten</strong>:
          </p>
          <ul>
            <li>Es werden <strong>keine Cookies</strong> gesetzt</li>
            <li>Es werden <strong>keine IP-Adressen</strong> gespeichert</li>
            <li>Es erfolgt <strong>kein Tracking ueber mehrere Websites</strong> hinweg</li>
            <li>Es werden <strong>keine persoenlichen Profile</strong> erstellt</li>
          </ul>
          <p>Folgende anonyme, aggregierte Daten werden erhoben:</p>
          <ul>
            <li>Aufgerufene Seiten-URL</li>
            <li>HTTP-Referrer (Herkunft des Besuchs)</li>
            <li>Browser-Typ und -Version</li>
            <li>Geraetetyp (Desktop, Mobil, Tablet)</li>
            <li>Betriebssystem</li>
            <li>Land (abgeleitet aus der IP-Adresse, die IP selbst wird nicht gespeichert)</li>
            <li>Anonyme Interaktions-Events (z.B. Klicks auf Kategorien, Suchbegriffe)</li>
          </ul>
          <p>
            Die Daten werden an <strong>cloud.umami.is</strong> (Umami Inc.) uebermittelt.
            Umami Analytics ist standardmaessig aktiviert. Du hast jederzeit das <strong>Recht zu 
            widersprechen</strong> (Art. 21 DSGVO), indem du die{' '}
            <button
              onClick={() => window.dispatchEvent(new CustomEvent('open-consent-banner'))}
              className="text-light-primary dark:text-dark-primary underline hover:no-underline cursor-pointer bg-transparent border-none p-0 font-inherit"
            >
              Privacy Settings
            </button>{' '}
            in the footer and disable "Statistics".
          </p>
          <p>
            Weitere Informationen zu Umami:{' '}
            <a href="https://umami.is/docs/privacy" target="_blank" rel="noopener noreferrer">
              umami.is/docs/privacy
            </a>
          </p>

          {/* 6. Google Fonts */}
          <h2>6. Externe Schriftarten (Google Fonts)</h2>
          <p>
            Diese Website kann die Schriftart <strong>&quot;Inter&quot;</strong> von Google Fonts verwenden, einem
            Dienst der Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland.
          </p>
          <p>
            Google Fonts werden <strong>nur nach deiner ausdruecklichen Einwilligung</strong> geladen
            (Rechtsgrundlage: Art. 6 Abs. 1 lit. a DSGVO). Ohne Einwilligung werden Systemschriftarten
            deines Geraetes verwendet.
          </p>
          <p>
            Beim Laden der Schriftarten von Google-Servern wird deine IP-Adresse an Google uebermittelt.
            Google kann die Daten in den USA verarbeiten. Weitere Informationen:{' '}
            <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">
              Google's Privacy Policy
            </a>{' '}
            und{' '}
            <a href="https://developers.google.com/fonts/faq/privacy" target="_blank" rel="noopener noreferrer">
              Google Fonts FAQ
            </a>.
          </p>
          <p>
            Du kannst deine Einwilligung jederzeit ueber die{' '}
            <button
              onClick={() => window.dispatchEvent(new CustomEvent('open-consent-banner'))}
              className="text-light-primary dark:text-dark-primary underline hover:no-underline cursor-pointer bg-transparent border-none p-0 font-inherit"
            >
              Privacy Settings
            </button>{' '}
            widerrufen.
          </p>

          {/* 7. Lokale Datenspeicherung */}
          <h2>7. Lokale Datenspeicherung (Local Storage)</h2>
          <p>
            Diese Website verwendet den <strong>Local Storage</strong> und <strong>Session Storage</strong> deines
            Browsers, um Einstellungen und Praeferenzen zu speichern. Diese Daten bleiben ausschliesslich auf
            deinem Geraet und werden <strong>nicht an Server uebermittelt</strong>.
          </p>
          <p>Folgende Daten werden lokal gespeichert:</p>
          <ul>
            <li>Your privacy settings (consent decision)</li>
            <li>Spracheinstellungen (Deutsch/Englisch)</li>
            <li>Farbschema-Praeferenz (Hell/Dunkel)</li>
            <li>Lernfortschritt und persoenliche Notizen in LearnBuddy</li>
            <li>Gespeicherte Rezepte, Vokabeln, Trainingsplaene etc.</li>
            <li>Suchhistorie</li>
          </ul>
          <p>
            Du kannst diese Daten jederzeit loeschen, indem du die Browser-Daten fuer diese Seite loeschst
            (Einstellungen &rarr; Datenschutz &rarr; Browserdaten loeschen).
          </p>
          <p>
            Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der Bereitstellung
            einer funktionsfaehigen Website mit Nutzerpraeferenzen).
          </p>

          {/* 8. Cookies */}
          <h2>8. Cookies</h2>
          <p>
            Diese Website setzt <strong>keine eigenen Cookies</strong>. Fuer die Speicherung von
            Einstellungen verwenden wir ausschliesslich den Local Storage deines Browsers (siehe Abschnitt 7).
          </p>
          <p>
            Cookies koennen durch eingewilligte Drittanbieter-Dienste (z.B. Google Fonts) gesetzt werden.
            Diese werden nur geladen, wenn du dem ausdruecklich zugestimmt hast.
          </p>

          {/* 9. Progressive Web App */}
          <h2>9. Progressive Web App (PWA)</h2>
          <p>
            Diese Website kann als Progressive Web App installiert werden. Dabei wird ein Service Worker
            verwendet, um Inhalte fuer die Offline-Nutzung zwischenzuspeichern. Dieser Cache liegt
            ausschliesslich auf deinem Geraet. Der Service Worker uebertraegt keine personenbezogenen Daten.
          </p>

          {/* 10. Betroffenenrechte */}
          <h2>10. Deine Rechte</h2>
          <p>
            Du hast gegenueber uns folgende Rechte hinsichtlich der dich betreffenden personenbezogenen Daten:
          </p>
          <ul>
            <li><strong>Recht auf Auskunft</strong> (Art. 15 DSGVO)</li>
            <li><strong>Recht auf Berichtigung</strong> (Art. 16 DSGVO)</li>
            <li><strong>Recht auf Loeschung</strong> (Art. 17 DSGVO)</li>
            <li><strong>Recht auf Einschraenkung der Verarbeitung</strong> (Art. 18 DSGVO)</li>
            <li><strong>Recht auf Datenuebertragbarkeit</strong> (Art. 20 DSGVO)</li>
            <li><strong>Widerspruchsrecht</strong> (Art. 21 DSGVO)</li>
            <li><strong>Recht auf Widerruf erteilter Einwilligungen</strong> (Art. 7 Abs. 3 DSGVO)</li>
          </ul>
          <p>
            Du kannst deine Einwilligung zur Datenverarbeitung jederzeit mit Wirkung fuer die Zukunft
            widerrufen. Oeffne dazu die{' '}
            <button
              onClick={() => window.dispatchEvent(new CustomEvent('open-consent-banner'))}
              className="text-light-primary dark:text-dark-primary underline hover:no-underline cursor-pointer bg-transparent border-none p-0 font-inherit"
            >
              Privacy Settings
            </button>{' '}
            oder kontaktiere uns per E-Mail.
          </p>

          {/* 11. Aufsichtsbehoerde */}
          <h2>11. Beschwerderecht bei einer Aufsichtsbehoerde</h2>
          <p>
            Du hast das Recht, dich bei einer Datenschutz-Aufsichtsbehoerde ueber die Verarbeitung 
            deiner personenbezogenen Daten zu beschweren. Die fuer uns zustaendige Aufsichtsbehoerde ist:
          </p>
          <p>
            <strong>Der Hessische Beauftragte fuer Datenschutz und Informationsfreiheit</strong><br />
            Postfach 3163<br />
            65021 Wiesbaden<br />
            Telefon: +49 611 1408-0<br />
            E-Mail: poststelle@datenschutz.hessen.de<br />
            Website:{' '}
            <a href="https://datenschutz.hessen.de" target="_blank" rel="noopener noreferrer">
              datenschutz.hessen.de
            </a>
          </p>

          {/* 12. Datensicherheit */}
          <h2>12. Datensicherheit</h2>
          <p>
            Diese Website wird ueber HTTPS ausgeliefert. Die Uebertragung zwischen deinem Browser und dem
            Server ist damit verschluesselt. Wir setzen technische und organisatorische Sicherheitsmassnahmen
            ein, um deine Daten gegen zufaellige oder vorsaetzliche Manipulation, Verlust, Zerstoerung oder
            den Zugriff unberechtigter Personen zu schuetzen.
          </p>

          {/* 13. Aenderungen */}
          <h2>13. Aenderungen dieser Datenschutzerklaerung</h2>
          <p>
            Wir behalten uns vor, diese Datenschutzerklaerung anzupassen, damit sie stets den aktuellen
            rechtlichen Anforderungen entspricht oder um Aenderungen unserer Leistungen umzusetzen.
            Fuer deinen erneuten Besuch gilt dann die neue Datenschutzerklaerung.
          </p>

          {/* 14. Kontakt */}
          <h2>14. Kontakt</h2>
          <p>
            Bei Fragen zum Datenschutz kannst du dich jederzeit an uns wenden:
          </p>
          <p>
            <strong>Tarik Azzouzi</strong><br />
            E-Mail: <a href="mailto:BlogCodingTarik@web.de">BlogCodingTarik@web.de</a>
          </p>
        </div>
      </div>
    </div>
  );
}
