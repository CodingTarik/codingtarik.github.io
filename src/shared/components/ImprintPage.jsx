import React from 'react';
import { Mail, Globe, Shield } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

function ImprintPage() {
  const { language } = useLanguage();

  return (
    <div className="max-w-3xl mx-auto px-4 py-8 mt-8">
      <h1 className="text-4xl font-bold text-stone-800 dark:text-stone-100 mb-8">
        {language === 'en' ? 'Imprint' : 'Impressum'}
      </h1>

      <div className="bg-white dark:bg-stone-800 rounded-xl shadow-lg p-8 space-y-6">
        {/* Information according to § 5 TMG */}
        <section>
          <h2 className="text-2xl font-bold text-stone-800 dark:text-stone-100 mb-4 flex items-center gap-2">
            <Globe className="text-teal-500" />
            {language === 'en' ? 'Information according to § 5 TMG' : 'Angaben gemäß § 5 TMG'}
          </h2>
          <div className="space-y-2 text-stone-700 dark:text-stone-300">
            <p className="font-semibold">LearnBuddy</p>
            <p>[Your Name / Company Name]</p>
            <p>[Street Address]</p>
            <p>[Postal Code, City]</p>
            <p>[Country]</p>
          </div>
        </section>

        {/* Contact */}
        <section>
          <h2 className="text-2xl font-bold text-stone-800 dark:text-stone-100 mb-4 flex items-center gap-2">
            <Mail className="text-teal-500" />
            {language === 'en' ? 'Contact' : 'Kontakt'}
          </h2>
          <div className="space-y-2 text-stone-700 dark:text-stone-300">
            <p>
              {language === 'en' ? 'Email: ' : 'E-Mail: '}
              <a href="mailto:contact@learnbuddy.app" className="text-teal-500 hover:underline">
                contact@learnbuddy.app
              </a>
            </p>
            <p>
              {language === 'en' ? 'Website: ' : 'Webseite: '}
              <a href="https://learnbuddy.app" className="text-teal-500 hover:underline" target="_blank" rel="noopener noreferrer">
                learnbuddy.app
              </a>
            </p>
          </div>
        </section>

        {/* Disclaimer */}
        <section>
          <h2 className="text-2xl font-bold text-stone-800 dark:text-stone-100 mb-4 flex items-center gap-2">
            <Shield className="text-teal-500" />
            {language === 'en' ? 'Disclaimer' : 'Haftungsausschluss'}
          </h2>
          <div className="space-y-4 text-stone-700 dark:text-stone-300 text-sm">
            <div>
              <h3 className="font-semibold mb-2">
                {language === 'en' ? 'Liability for content' : 'Haftung für Inhalte'}
              </h3>
              <p>
                {language === 'en'
                  ? 'The contents of our pages were created with the greatest care. However, we cannot guarantee the accuracy, completeness and timeliness of the content. As a service provider, we are responsible for our own content on these pages in accordance with general laws. However, we are not obligated to monitor transmitted or stored third-party information or to investigate circumstances that indicate illegal activity.'
                  : 'Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen. Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.'}
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">
                {language === 'en' ? 'Liability for links' : 'Haftung für Links'}
              </h3>
              <p>
                {language === 'en'
                  ? 'Our offer contains links to external websites of third parties, on whose contents we have no influence. Therefore, we cannot assume any liability for these external contents. The respective provider or operator of the pages is always responsible for the content of the linked pages.'
                  : 'Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.'}
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">
                {language === 'en' ? 'Copyright' : 'Urheberrecht'}
              </h3>
              <p>
                {language === 'en'
                  ? 'The content and works created by the site operators on these pages are subject to German copyright law. Duplication, processing, distribution and any kind of exploitation outside the limits of copyright require the written consent of the respective author or creator.'
                  : 'Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.'}
              </p>
            </div>
          </div>
        </section>

        {/* Open Source Notice */}
        <section className="bg-gradient-to-r from-teal-50 to-orange-50 dark:from-teal-900/20 dark:to-orange-900/20 rounded-lg p-6 border border-teal-200 dark:border-teal-800">
          <h3 className="font-bold text-lg text-stone-800 dark:text-stone-100 mb-2">
            {language === 'en' ? '💚 Open Source Project' : '💚 Open Source Projekt'}
          </h3>
          <p className="text-stone-700 dark:text-stone-300 text-sm">
            {language === 'en'
              ? 'LearnBuddy is a free and open-source project. The source code is available on GitHub. We welcome contributions from the community!'
              : 'LearnBuddy ist ein kostenloses Open-Source-Projekt. Der Quellcode ist auf GitHub verfügbar. Wir freuen uns über Beiträge aus der Community!'}
          </p>
          <a
            href="https://github.com/yourusername/learnbuddy"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-3 text-teal-600 dark:text-teal-400 hover:underline font-semibold"
          >
            {language === 'en' ? 'View on GitHub →' : 'Auf GitHub ansehen →'}
          </a>
        </section>
      </div>

      {/* Back Button */}
      <div className="mt-8 text-center">
        <button
          onClick={() => window.history.back()}
          className="bg-teal-500 hover:bg-teal-600 text-white font-semibold px-6 py-3 rounded-lg shadow-md transition-all transform hover:scale-105"
        >
          {language === 'en' ? '← Back' : '← Zurück'}
        </button>
      </div>
    </div>
  );
}

export default ImprintPage;

