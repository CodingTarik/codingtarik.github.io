import React from 'react';
import { Shield, ArrowLeft } from 'lucide-react';

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-stone-50 dark:bg-stone-900 py-8">
      <div className="max-w-4xl mx-auto px-4 md:px-8">
        {/* Back Button */}
        <button
          onClick={() => window.history.back()}
          className="flex items-center gap-2 text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100 mb-6 transition-colors"
        >
          <ArrowLeft size={20} />
          <span>Zurück</span>
        </button>

        {/* Header */}
        <div className="bg-white dark:bg-stone-800 rounded-lg shadow-sm border border-stone-200 dark:border-stone-700 p-6 md:p-8 mb-6">
          <div className="flex items-center gap-3 mb-4">
            <Shield size={32} className="text-stone-900 dark:text-stone-100" />
            <h1 className="text-3xl md:text-4xl font-bold text-stone-900 dark:text-stone-100">
              Datenschutzerklärung
            </h1>
          </div>
          <p className="text-stone-600 dark:text-stone-400">
            Zuletzt aktualisiert: {new Date().toLocaleDateString('de-DE')}
          </p>
        </div>

        {/* Content */}
        <div className="bg-white dark:bg-stone-800 rounded-lg shadow-sm border border-stone-200 dark:border-stone-700 p-6 md:p-8 prose dark:prose-invert max-w-none">
          <h2>1. Einleitung</h2>
          <p>
            Diese Datenschutzerklärung informiert Sie über die Art, den Umfang und Zweck der Verarbeitung von 
            personenbezogenen Daten auf dieser Website.
          </p>

          <h2>2. Verantwortlicher</h2>
          <p>
            Verantwortlich für die Datenverarbeitung auf dieser Website ist:<br />
            <strong>Tarik Azzouzi</strong><br />
            {/* TODO: Adresse hinzufügen */}
            E-Mail: your.email@example.com
          </p>

          <h2>3. Erhobene Daten</h2>
          <p>
            Diese Website erhebt und speichert automatisch in sogenannten Server-Log-Dateien Informationen, 
            die Ihr Browser automatisch an uns übermittelt. Dies sind:
          </p>
          <ul>
            <li>Browsertyp und Browserversion</li>
            <li>Verwendetes Betriebssystem</li>
            <li>Referrer URL</li>
            <li>Hostname des zugreifenden Rechners</li>
            <li>Uhrzeit der Serveranfrage</li>
            <li>IP-Adresse</li>
          </ul>

          <h2>4. Lokale Speicherung</h2>
          <p>
            Diese Website verwendet Local Storage und Session Storage zur Speicherung von Benutzereinstellungen 
            und Präferenzen. Diese Daten bleiben auf Ihrem Gerät und werden nicht an Server übertragen.
          </p>

          <h2>5. Cookies</h2>
          <p>
            Diese Website verwendet minimal notwendige Cookies für die Funktionalität. Sie können die Cookie-Einstellungen 
            jederzeit im Footer anpassen.
          </p>

          <h2>6. Ihre Rechte</h2>
          <p>Sie haben das Recht auf:</p>
          <ul>
            <li>Auskunft über Ihre gespeicherten Daten</li>
            <li>Berichtigung unrichtiger Daten</li>
            <li>Löschung Ihrer Daten</li>
            <li>Einschränkung der Verarbeitung</li>
            <li>Datenübertragbarkeit</li>
            <li>Widerspruch gegen die Verarbeitung</li>
          </ul>

          <h2>7. Kontakt</h2>
          <p>
            Bei Fragen zum Datenschutz können Sie sich jederzeit an uns wenden:<br />
            E-Mail: your.email@example.com
          </p>
        </div>
      </div>
    </div>
  );
}

