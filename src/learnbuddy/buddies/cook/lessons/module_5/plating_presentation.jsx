import React from 'react';

export const platingPresentationLesson = {
  id: 'c5_m5_plating',
  title: { 
    en: '5.2 Plating & Presentation', 
    de: '5.2 Präsentation & Anrichten' 
  },
  description: { 
    en: 'You eat with your eyes first. Simple tricks for restaurant-style plates.', 
    de: 'Das Auge isst mit. Einfache Tricks für Teller wie im Restaurant.' 
  },
  category: 'management',
  
  content: {
    de: (
      <div className="space-y-6">
        <div>
          <h2 className="text-3xl font-bold text-purple-700 dark:text-purple-400 mb-4">Das Auge isst mit 🎨</h2>
          <p className="text-lg leading-relaxed">
            Selbst das leckerste Essen schmeckt langweilig, wenn es wie ein Unfall auf dem Teller liegt. 
            Du brauchst keine Pinzette, nur ein paar Grundregeln der Optik.
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-stone-800 dark:text-stone-100 mb-4">
            1. Der Teller als Leinwand
          </h3>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white dark:bg-stone-700 p-5 rounded-xl shadow-sm">
              <h4 className="font-bold text-xl mb-2">Die Wahl des Tellers</h4>
              <ul className="list-disc list-inside text-sm space-y-1">
                <li><strong>Weiß & Groß:</strong> Der Standard. Lässt Farben strahlen.</li>
                <li><strong>Dunkel:</strong> Dramatisch, aber schluckt Farben. Gut für helles Essen (Püree).</li>
                <li><strong>Größe:</strong> Der Teller sollte nie überladen sein. <span className="font-bold">Freier Rand = Eleganz.</span></li>
              </ul>
            </div>

            <div className="bg-white dark:bg-stone-700 p-5 rounded-xl shadow-sm">
              <h4 className="font-bold text-xl mb-2">Die Architektur</h4>
              <ul className="list-disc list-inside text-sm space-y-1">
                <li><strong>Höhe bauen:</strong> Nicht alles flach verteilen. Lege das Fleisch AUF das Gemüse oder Püree.</li>
                <li><strong>Ungerade Zahlen:</strong> 3 Kartoffeln sehen besser aus als 4. Das Gehirn mag Asymmetrie.</li>
                <li><strong>Zentrum:</strong> Baue das Gericht in der Mitte auf, nicht am Rand.</li>
              </ul>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-stone-800 dark:text-stone-100 mb-4">
            2. Farbkontraste & Garnitur
          </h3>
          <p className="mb-3">
            Ein braunes Steak mit brauner Sauce und braunen Kartoffeln? <span className="text-red-600 font-bold">Langweilig!</span>
          </p>
          
          <div className="space-y-4">
            <div className="bg-green-50 dark:bg-green-900/20 p-5 rounded-lg border-l-4 border-green-500">
              <h4 className="font-bold text-lg mb-1 text-green-800 dark:text-green-100">Das Grün (Kräuter)</h4>
              <p className="text-sm">
                Frische Kräuter bringen Leben. 
                <br/><strong>Aber:</strong> Nicht einfach einen ganzen Petersilienzweig draufwerfen (sieht aus wie 1980). 
                Hacken oder kleine Blättchen zupfen.
              </p>
            </div>

            <div className="bg-red-50 dark:bg-red-900/20 p-5 rounded-lg border-l-4 border-red-500">
              <h4 className="font-bold text-lg mb-1 text-red-800 dark:text-red-100">Das Rot (Akzente)</h4>
              <p className="text-sm">
                Chiliflocken, Paprikawürfel, Granatapfelkerne oder Tomatenwürfel.
              </p>
            </div>

            <div className="bg-yellow-50 dark:bg-yellow-900/20 p-5 rounded-lg border-l-4 border-yellow-500">
              <h4 className="font-bold text-lg mb-1 text-yellow-800 dark:text-yellow-100">Der Glanz (Öl & Sauce)</h4>
              <p className="text-sm">
                Träufle gutes Olivenöl oder Bratensaft über Fleisch/Gemüse kurz vor dem Servieren. Glanz signalisiert Frische.
                <br/><strong>Sauce:</strong> Nicht alles ertränken! Sauce <span className="italic">unter</span> das Fleisch (Spiegel) oder dekorativ <span className="italic">darüber</span> träufeln.
              </p>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-stone-800 dark:text-stone-100 mb-4">
            3. Der wichtigste Handgriff
          </h3>
          <div className="bg-stone-200 dark:bg-stone-600 p-6 rounded-xl text-center">
            <p className="text-xl font-bold mb-2">🧻 Der Tellerrand-Wisch</p>
            <p>
              Bevor der Teller die Küche verlässt: Nimm ein sauberes Tuch oder Küchenpapier und wische den Rand sauber. 
              Ein einziger Saucenspritzer am Rand ruiniert die Optik.
            </p>
          </div>
        </div>

        <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border-2 border-green-300 dark:border-green-700">
          <h3 className="text-xl font-bold text-green-800 dark:text-green-100 mb-4">🎯 Praktische Übung</h3>
          <p className="mb-4 font-bold">Der Foto-Vergleich:</p>
          <ol className="list-decimal list-inside space-y-2 ml-4">
            <li>Koche ein einfaches Gericht (z.B. Pasta oder Reis mit Gemüse).</li>
            <li><strong>Teller 1 (Kantine):</strong> Klatsche alles lieblos drauf. Mache ein Foto.</li>
            <li><strong>Teller 2 (Restaurant):</strong> 
              <ul className="list-disc list-inside ml-4 mt-1 text-sm">
                <li>Baue einen kleinen Berg in der Mitte.</li>
                <li>Wische den Rand sauber.</li>
                <li>Streue frische Kräuter oder Pfeffer darüber.</li>
                <li>Träufle etwas Öl darüber.</li>
              </ul>
            </li>
            <li>Mache ein Foto und vergleiche. Welches würdest du lieber essen?</li>
          </ol>
        </div>
      </div>
    ),
    en: (
      <div className="space-y-6">
        <div>
          <h2 className="text-3xl font-bold text-purple-700 dark:text-purple-400 mb-4">Eye Appeal 🎨</h2>
          <p className="text-lg leading-relaxed">
            Even the most delicious food tastes boring if it looks like an accident on the plate. 
            You don't need tweezers, just a few basic optical rules.
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-stone-800 dark:text-stone-100 mb-4">
            1. The Plate as Canvas
          </h3>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white dark:bg-stone-700 p-5 rounded-xl shadow-sm">
              <h4 className="font-bold text-xl mb-2">Choosing the Plate</h4>
              <ul className="list-disc list-inside text-sm space-y-1">
                <li><strong>White & Large:</strong> The standard. Makes colors pop.</li>
                <li><strong>Dark:</strong> Dramatic, but swallows colors. Good for light food (mash).</li>
                <li><strong>Size:</strong> The plate should never be overcrowded. <span className="font-bold">Free rim = Elegance.</span></li>
              </ul>
            </div>

            <div className="bg-white dark:bg-stone-700 p-5 rounded-xl shadow-sm">
              <h4 className="font-bold text-xl mb-2">Architecture</h4>
              <ul className="list-disc list-inside text-sm space-y-1">
                <li><strong>Build Height:</strong> Don't spread everything flat. Place meat ON TOP of veggies or mash.</li>
                <li><strong>Odd Numbers:</strong> 3 potatoes look better than 4. The brain likes asymmetry.</li>
                <li><strong>Center:</strong> Build the dish in the center, not on the edge.</li>
              </ul>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-stone-800 dark:text-stone-100 mb-4">
            2. Color Contrasts & Garnish
          </h3>
          <p className="mb-3">
            Brown steak with brown sauce and brown potatoes? <span className="text-red-600 font-bold">Boring!</span>
          </p>
          
          <div className="space-y-4">
            <div className="bg-green-50 dark:bg-green-900/20 p-5 rounded-lg border-l-4 border-green-500">
              <h4 className="font-bold text-lg mb-1 text-green-800 dark:text-green-100">The Green (Herbs)</h4>
              <p className="text-sm">
                Fresh herbs bring life. 
                <br/><strong>But:</strong> Don't just throw a whole sprig of parsley on top (looks like 1980). 
                Chop or pick small leaves.
              </p>
            </div>

            <div className="bg-red-50 dark:bg-red-900/20 p-5 rounded-lg border-l-4 border-red-500">
              <h4 className="font-bold text-lg mb-1 text-red-800 dark:text-red-100">The Red (Accents)</h4>
              <p className="text-sm">
                Chili flakes, diced peppers, pomegranate seeds, or diced tomatoes.
              </p>
            </div>

            <div className="bg-yellow-50 dark:bg-yellow-900/20 p-5 rounded-lg border-l-4 border-yellow-500">
              <h4 className="font-bold text-lg mb-1 text-yellow-800 dark:text-yellow-100">The Shine (Oil & Sauce)</h4>
              <p className="text-sm">
                Drizzle good olive oil or meat juices over meat/veggies just before serving. Shine signals freshness.
                <br/><strong>Sauce:</strong> Don't drown everything! Put sauce <span className="italic">under</span> the meat (mirror) or drizzle decoratively <span className="italic">over</span> it.
              </p>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-stone-800 dark:text-stone-100 mb-4">
            3. The Most Important Move
          </h3>
          <div className="bg-stone-200 dark:bg-stone-600 p-6 rounded-xl text-center">
            <p className="text-xl font-bold mb-2">🧻 The Rim Wipe</p>
            <p>
              Before the plate leaves the kitchen: Take a clean cloth or paper towel and wipe the rim clean. 
              A single splatter of sauce on the rim ruins the look.
            </p>
          </div>
        </div>

        <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border-2 border-green-300 dark:border-green-700">
          <h3 className="text-xl font-bold text-green-800 dark:text-green-100 mb-4">🎯 Practical Exercise</h3>
          <p className="mb-4 font-bold">Photo Comparison:</p>
          <ol className="list-decimal list-inside space-y-2 ml-4">
            <li>Cook a simple dish (e.g., pasta or rice with veggies).</li>
            <li><strong>Plate 1 (Canteen):</strong> Slap everything on carelessly. Take a photo.</li>
            <li><strong>Plate 2 (Restaurant):</strong> 
              <ul className="list-disc list-inside ml-4 mt-1 text-sm">
                <li>Build a small mountain in the center.</li>
                <li>Wipe the rim clean.</li>
                <li>Sprinkle fresh herbs or pepper on top.</li>
                <li>Drizzle some oil over it.</li>
              </ul>
            </li>
            <li>Take a photo and compare. Which one would you rather eat?</li>
          </ol>
        </div>
      </div>
    )
  },

  task: {
    de: {
      title: 'Restaurant-Anrichten',
      description: 'Richte ein Gericht nach allen Regeln der Kunst an.',
      checklist: [
        { text: 'Wähle einen großen Teller' },
        { text: 'Baue in die Höhe (Zentrum)' },
        { text: 'Nutze Kontrastfarben (Kräuter)' },
        { text: 'Sorge für Glanz (Öl/Sauce)' },
        { text: 'Wische den Tellerrand sauber' }
      ]
    },
    en: {
      title: 'Restaurant Plating',
      description: 'Plate a dish according to all the rules of art.',
      checklist: [
        { text: 'Choose a large plate' },
        { text: 'Build height (Center)' },
        { text: 'Use contrast colors (Herbs)' },
        { text: 'Ensure shine (Oil/Sauce)' },
        { text: 'Wipe the rim clean' }
      ]
    }
  },
  
  notes: {
    de: [
      { front: 'Warum sollte man in die Höhe bauen?', back: 'Es sieht dynamischer aus und schafft Platz auf dem Teller.' },
      { front: 'Warum ist der Tellerrand so wichtig?', back: 'Er rahmt das Essen ein. Ein schmutziger Rand wirkt unhygienisch und nachlässig.' },
      { front: 'Was bedeutet "Ungerade Zahlen"?', back: 'Elemente (z.B. 3 Garnelen) wirken natürlicher als gerade Zahlen.' },
      { front: 'Wie bringt man Glanz auf das Essen?', back: 'Mit einem Tropfen Öl oder Butter kurz vor dem Servieren.' }
    ],
    en: [
      { front: 'Why build height?', back: 'It looks more dynamic and creates space on the plate.' },
      { front: 'Why is the plate rim so important?', back: 'It frames the food. A dirty rim looks unhygienic and careless.' },
      { front: 'What means "Odd Numbers"?', back: 'Elements (e.g. 3 shrimps) look more natural than even numbers.' },
      { front: 'How to add shine to food?', back: 'With a drop of oil or butter just before serving.' }
    ]
  }
};

