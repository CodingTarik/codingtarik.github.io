import React from 'react';

export const specialDisciplinesLesson = {
  id: 'c6_m6_special',
  title: {
    en: '6.3 Special Disciplines',
    de: '6.3 Spezial-Disziplinen'
  },
  description: {
    en: 'Sous-Vide, Fermentation, and Canning. The nerd level of cooking.',
    de: 'Sous-Vide, Fermentation und Einkochen. Das Nerd-Level des Kochens.'
  },
  category: 'world',

  content: {
    de: (
      <div className="space-y-6">
        <div>
          <h2 className="text-3xl font-bold text-purple-700 dark:text-purple-400 mb-4">Das Labor in der Küche 🧪</h2>
          <p className="text-lg leading-relaxed">
            Wenn du die Grundlagen beherrschst, kannst du anfangen zu experimentieren.
            Hier verlassen wir das Handwerk und betreten die Wissenschaft.
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-stone-800 dark:text-stone-100 mb-4">
            1. Fermentation (Leben im Glas)
          </h3>
          <div className="bg-stone-100 dark:bg-stone-800 p-5 rounded-xl">
            <p className="mb-3">
              Fermentation ist kontrolliertes Verderben. "Gute" Bakterien fressen Zucker und produzieren Säure (Haltbarkeit) und Umami (Geschmack).
            </p>
            <div className="space-y-3">
              <div className="bg-white dark:bg-stone-700 p-3 rounded-lg">
                <h4 className="font-bold text-green-700">Sauerkraut (Lacto-Fermentation)</h4>
                <p className="text-sm">Weißkohl + 2% Salz. Kneten bis Wasser kommt. Luftdicht lagern. Warten. Magie.</p>
              </div>
              <div className="bg-white dark:bg-stone-700 p-3 rounded-lg">
                <h4 className="font-bold text-yellow-700">Sauerteig</h4>
                <p className="text-sm">Mehl + Wasser. Wilde Hefen aus der Luft züchten. Braucht tägliche Pflege ("Füttern").</p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-stone-800 dark:text-stone-100 mb-4">
            2. Sous-Vide (Vakuumgaren)
          </h3>
          <div className="bg-blue-50 dark:bg-blue-900/20 p-5 rounded-xl border-l-4 border-blue-500">
            <p className="mb-3 font-bold">Das Prinzip: Absolute Präzision.</p>
            <ul className="list-disc list-inside text-sm space-y-2">
              <li>Lebensmittel wird vakuumiert.</li>
              <li>Garen im Wasserbad bei exakter Zieltemperatur (z.B. Steak bei 54°C für 2 Stunden).</li>
              <li><strong>Vorteil:</strong> Übergaren unmöglich. Das Fleisch hat durchgehend die perfekte Farbe (kein grauer Rand).</li>
              <li><strong>Nachteil:</strong> Keine Röstaromen &rarr; Danach kurz scharf anbraten!</li>
            </ul>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-stone-800 dark:text-stone-100 mb-4">
            3. Einkochen (Konservieren)
          </h3>
          <div className="bg-red-50 dark:bg-red-900/20 p-5 rounded-xl border-l-4 border-red-500">
            <p className="mb-3 font-bold">Der Sommer im Glas.</p>
            <ul className="list-disc list-inside text-sm space-y-2">
              <li><strong>Heiß einfüllen:</strong> Marmelade kochend heiß in sterile Gläser füllen, zuschrauben, umdrehen.</li>
              <li><strong>Vakuum:</strong> Beim Abkühlen zieht sich die Luft zusammen ("Plop"-Geräusch).</li>
              <li><strong>Botulismus:</strong> Achtung bei nicht-sauren Lebensmitteln (Fleisch, Bohnen). Diese müssen unter Druck eingekocht werden (Pressure Canner)! Marmelade/Obst (sauer) ist sicher.</li>
            </ul>
          </div>
        </div>

        <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border-2 border-green-300 dark:border-green-700">
          <h3 className="text-xl font-bold text-green-800 dark:text-green-100 mb-4">🎯 Praktische Übung</h3>
          <p className="mb-4 font-bold">Schnelles Kimchi (Fake-Fermentation):</p>
          <ol className="list-decimal list-inside space-y-2 ml-4">
            <li>Schneide Chinakohl in Stücke. Salze ihn stark, lasse ihn 30 Min stehen (Wasser ziehen).</li>
            <li>Wasche das Salz ab.</li>
            <li>Mische eine Paste aus Gochugaru (Chiliflocken), Knoblauch, Ingwer, Fischsauce und etwas Zucker.</li>
            <li>Massiere die Paste in den Kohl (Handschuhe!).</li>
            <li>Fülle es in ein Glas. Lass es 2 Tage bei Raumtemperatur stehen (Deckel locker!). Dann in den Kühlschrank.</li>
          </ol>
        </div>
      </div>
    ),
    en: (
      <div className="space-y-6">
        <div>
          <h2 className="text-3xl font-bold text-purple-700 dark:text-purple-400 mb-4">Kitchen Lab 🧪</h2>
          <p className="text-lg leading-relaxed">
            Once you master the basics, you can start experimenting.
            Here we leave craftmanship behind and enter science.
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-stone-800 dark:text-stone-100 mb-4">
            1. Fermentation (Life in a Jar)
          </h3>
          <div className="bg-stone-100 dark:bg-stone-800 p-5 rounded-xl">
            <p className="mb-3">
              Fermentation is controlled spoilage. "Good" bacteria eat sugar and produce acid (preservation) and Umami (flavor).
            </p>
            <div className="space-y-3">
              <div className="bg-white dark:bg-stone-700 p-3 rounded-lg">
                <h4 className="font-bold text-green-700">Sauerkraut (Lacto-Fermentation)</h4>
                <p className="text-sm">Cabbage + 2% Salt. Knead until water comes out. Store airtight. Wait. Magic.</p>
              </div>
              <div className="bg-white dark:bg-stone-700 p-3 rounded-lg">
                <h4 className="font-bold text-yellow-700">Sourdough</h4>
                <p className="text-sm">Flour + Water. Breed wild yeast from the air. Needs daily care ("Feeding").</p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-stone-800 dark:text-stone-100 mb-4">
            2. Sous-Vide (Vacuum Cooking)
          </h3>
          <div className="bg-blue-50 dark:bg-blue-900/20 p-5 rounded-xl border-l-4 border-blue-500">
            <p className="mb-3 font-bold">The Principle: Absolute Precision.</p>
            <ul className="list-disc list-inside text-sm space-y-2">
              <li>Food is vacuum sealed.</li>
              <li>Cooked in water bath at exact target temp (e.g. Steak at 54°C for 2 hours).</li>
              <li><strong>Benefit:</strong> Overcooking impossible. Meat has perfect color throughout (no grey band).</li>
              <li><strong>Downside:</strong> No roasted flavors &rarr; Sear briefly afterwards!</li>
            </ul>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-stone-800 dark:text-stone-100 mb-4">
            3. Canning (Preserving)
          </h3>
          <div className="bg-red-50 dark:bg-red-900/20 p-5 rounded-xl border-l-4 border-red-500">
            <p className="mb-3 font-bold">Summer in a Jar.</p>
            <ul className="list-disc list-inside text-sm space-y-2">
              <li><strong>Fill hot:</strong> Fill boiling jam into sterile jars, close, flip.</li>
              <li><strong>Vacuum:</strong> Air contracts while cooling ("Pop" sound).</li>
              <li><strong>Botulism:</strong> Warning with non-acidic foods (meat, beans). These must be pressure canned! Jam/Fruit (acidic) is safe.</li>
            </ul>
          </div>
        </div>

        <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border-2 border-green-300 dark:border-green-700">
          <h3 className="text-xl font-bold text-green-800 dark:text-green-100 mb-4">🎯 Practical Exercise</h3>
          <p className="mb-4 font-bold">Quick Kimchi (Fake Fermentation):</p>
          <ol className="list-decimal list-inside space-y-2 ml-4">
            <li>Cut Napa cabbage. Salt heavily, let sit 30 min (draw water).</li>
            <li>Rinse off salt.</li>
            <li>Mix paste of Gochugaru (chili flakes), garlic, ginger, fish sauce and some sugar.</li>
            <li>Massage paste into cabbage (gloves!).</li>
            <li>Fill into jar. Let sit 2 days at room temp (lid loose!). Then fridge.</li>
          </ol>
        </div>
      </div>
    )
  },

  task: {
    de: {
      title: 'Fermentations-Start',
      description: 'Setze ein einfaches Ferment an.',
      checklist: [
        { text: 'Hobel Weißkohl fein' },
        { text: 'Wiege 2% Salz ab (z.B. 20g auf 1kg Kohl)' },
        { text: 'Knete Kohl und Salz bis Lake entsteht' },
        { text: 'Drücke es fest in ein Glas (unter die Lake)' },
        { text: 'Warte 1 Woche' }
      ]
    },
    en: {
      title: 'Start Fermentation',
      description: 'Start a simple ferment.',
      checklist: [
        { text: 'Shred cabbage finely' },
        { text: 'Weigh 2% salt (e.g. 20g for 1kg cabbage)' },
        { text: 'Knead cabbage and salt until brine forms' },
        { text: 'Press tightly into jar (submerge in brine)' },
        { text: 'Wait 1 week' }
      ]
    }
  },

  notes: {
    de: [
      { front: 'Was ist Lacto-Fermentation?', back: 'Milchsäurebakterien wandeln Zucker in Milchsäure um (macht sauer und haltbar).' },
      { front: 'Warum ist Sous-Vide so zart?', back: 'Kollagen wird über lange Zeit bei niedriger Temperatur in Gelatine umgewandelt.' },
      { front: 'Welche Gefahr besteht beim Einkochen von Fleisch?', back: 'Botulismus (tödliches Toxin). Benötigt 120°C (Pressure Canner) zum Abtöten.' },
      { front: 'Was ist Sauerteig?', back: 'Eine Symbiose aus Hefen und Milchsäurebakterien.' }
    ],
    en: [
      { front: 'What is Lacto-Fermentation?', back: 'Lactic acid bacteria convert sugar into lactic acid (makes sour and preservable).' },
      { front: 'Why is Sous-Vide so tender?', back: 'Collagen converts to gelatin over long time at low temp.' },
      { front: 'What is the danger when canning meat?', back: 'Botulism (deadly toxin). Needs 120°C (Pressure Canner) to kill.' },
      { front: 'What is Sourdough?', back: 'A symbiosis of yeast and lactic acid bacteria.' }
    ]
  }
};


