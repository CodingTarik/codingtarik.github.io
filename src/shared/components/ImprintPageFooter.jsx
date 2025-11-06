import React from 'react';
import { FileText, ArrowLeft } from 'lucide-react';

export default function ImprintPageFooter() {
  return (
    <div className="min-h-screen bg-stone-50 dark:bg-stone-900 py-8">
      <div className="max-w-4xl mx-auto px-4 md:px-8">
        {/* Back Button */}
        <button
          onClick={() => window.history.back()}
          className="flex items-center gap-2 text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100 mb-6 transition-colors"
        >
          <ArrowLeft size={20} />
          <span>Back</span>
        </button>

        {/* Header */}
        <div className="bg-white dark:bg-stone-800 rounded-lg shadow-sm border border-stone-200 dark:border-stone-700 p-6 md:p-8 mb-6">
          <div className="flex items-center gap-3 mb-4">
            <FileText size={32} className="text-stone-900 dark:text-stone-100" />
            <h1 className="text-3xl md:text-4xl font-bold text-stone-900 dark:text-stone-100">
              Impressum
            </h1>
          </div>
        </div>

        {/* Content */}
        <div className="bg-white dark:bg-stone-800 rounded-lg shadow-sm border border-stone-200 dark:border-stone-700 p-6 md:p-8">
          <div className="prose dark:prose-invert max-w-none">
            <h2>Angaben gemäß § 5 TMG</h2>
            <p>
              <strong>Tarik Azzouzi</strong><br />
              {/* TODO: Vollständige Adresse hinzufügen */}
              Straße und Hausnummer<br />
              PLZ Ort<br />
              Deutschland
            </p>

            <h2>Kontakt</h2>
            <p>
              E-Mail: your.email@example.com<br />
              GitHub: <a href="https://github.com/CodingTarik" target="_blank" rel="noopener noreferrer">@CodingTarik</a>
            </p>

            <h2>Haftung für Inhalte</h2>
            <p>
              Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den 
              allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht 
              verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen 
              zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
            </p>

            <h2>Haftung für Links</h2>
            <p>
              Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. 
              Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten 
              Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
            </p>

            <h2>Urheberrecht</h2>
            <p>
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen 
              Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der 
              Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
            </p>

            <h2>Open Source</h2>
            <p>
              Teile dieser Website basieren auf Open-Source-Software. Der Quellcode ist auf GitHub verfügbar:<br />
              <a href="https://github.com/CodingTarik/learn_bouldering" target="_blank" rel="noopener noreferrer">
                github.com/CodingTarik/learn_bouldering
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

