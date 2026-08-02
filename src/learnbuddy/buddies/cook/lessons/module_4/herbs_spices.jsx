import React from 'react';

export const herbsSpicesLesson = {
  id: 'c4_m4_herbs',
  title: { 
    en: '4.5 Herbs & Spices', 
    de: '4.5 Kräuter & Gewürze' 
  },
  description: { 
    en: 'Deep dive into flavor: How to use fresh herbs and spices correctly.', 
    de: 'Vertiefung in den Geschmack: Wie man frische Kräuter und Gewürze richtig einsetzt.' 
  },
  category: 'theory',
  
  content: {
    de: (
      <div className="space-y-6">
        <div>
          <h2 className="text-3xl font-bold text-purple-700 dark:text-purple-400 mb-4">Die Seele des Gerichts 🌿</h2>
          <p className="text-lg leading-relaxed">
            Kräuter und Gewürze machen aus bloßen Zutaten ein echtes Gericht. Aber wann nimmt man was? 
            Und wann kommt es in den Topf? Hier lernst du die Regeln der Aromatik.
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-stone-800 dark:text-stone-100 mb-4">
            1. Frische Kräuter: Hart vs. Weich
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-stone-100 dark:bg-stone-800 p-5 rounded-xl border-l-4 border-stone-500">
              <h4 className="font-bold text-xl mb-2">Harte Kräuter (Woody Herbs)</h4>
              <p className="text-sm mb-2 text-stone-600 dark:text-stone-400">Haben feste Stiele und robuste Blätter.</p>
              <ul className="list-disc list-inside space-y-1 mb-3">
                <li>Rosmarin</li>
                <li>Thymian</li>
                <li>Salbei</li>
                <li>Lorbeer</li>
                <li>Oregano (meistens)</li>
              </ul>
              <div className="bg-white dark:bg-stone-700 p-3 rounded-lg text-sm">
                <strong>Regel:</strong> <span className="text-red-600 font-bold">Mitkochen!</span><br/>
                Sie brauchen Zeit und Hitze, um ihre ätherischen Öle freizusetzen.
              </div>
            </div>

            <div className="bg-green-50 dark:bg-green-900/20 p-5 rounded-xl border-l-4 border-green-500">
              <h4 className="font-bold text-xl mb-2">Weiche Kräuter (Soft Herbs)</h4>
              <p className="text-sm mb-2 text-stone-600 dark:text-stone-400">Haben weiche Stiele und zarte Blätter.</p>
              <ul className="list-disc list-inside space-y-1 mb-3">
                <li>Basilikum</li>
                <li>Petersilie</li>
                <li>Koriander</li>
                <li>Dill</li>
                <li>Schnittlauch</li>
                <li>Minze</li>
              </ul>
              <div className="bg-white dark:bg-stone-700 p-3 rounded-lg text-sm">
                <strong>Regel:</strong> <span className="text-green-600 font-bold">Am Ende!</span><br/>
                Hitze zerstört ihr feines Aroma. Erst kurz vor dem Servieren hinzufügen.
              </div>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-stone-800 dark:text-stone-100 mb-4">
            2. Gewürze: Das volle Potenzial wecken
          </h3>
          
          <div className="bg-amber-50 dark:bg-amber-900/20 p-6 rounded-xl border-2 border-amber-200 dark:border-amber-800 mb-4">
            <h4 className="text-xl font-bold text-amber-900 dark:text-amber-100 mb-3">
              Ganz vs. Gemahlen
            </h4>
            <p className="mb-3">
              Kaufst du gemahlenen Pfeffer? <strong>Hör damit auf!</strong>
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Ganze Gewürze</strong> (Körner, Samen) halten ihr Aroma jahrelang. Das Aroma ist "eingeschlossen".</li>
              <li><strong>Gemahlene Gewürze</strong> verlieren ihr Aroma innerhalb von Monaten, da die Öle verfliegen.</li>
            </ul>
            <p className="mt-3 font-bold">💡 Tipp: Kaufe Gewürze im Ganzen und mörser/mahle sie frisch.</p>
          </div>

          <div className="bg-red-50 dark:bg-red-900/20 p-5 rounded-lg">
            <h4 className="font-bold mb-3">🔥 Der Profi-Trick: Anrösten (Blooming)</h4>
            <p className="mb-3">
              Viele Gewürze sind fettlöslich und entfalten ihr Aroma durch Hitze.
            </p>
            <div className="space-y-2">
              <p><strong>Methode 1 (Trocken):</strong> Ganze Gewürze (Kümmel, Koriander, Pfeffer) in einer trockenen Pfanne erhitzen, bis sie duften. Dann mörsern.</p>
              <p><strong>Methode 2 (In Öl):</strong> Gewürze (Currypaste, Paprikapulver, Chili) kurz im heißen Öl anbraten (Vorsicht: Verbrennt schnell!). Das Öl nimmt den Geschmack an.</p>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-stone-800 dark:text-stone-100 mb-4">
            3. Klassische Kombinationen
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-white dark:bg-stone-700 p-4 rounded-lg shadow-sm">
              <h4 className="font-bold text-red-600 mb-2">🇮🇹 Italienisch</h4>
              <p>Basilikum, Oregano, Rosmarin, Thymian, Knoblauch</p>
            </div>
            <div className="bg-white dark:bg-stone-700 p-4 rounded-lg shadow-sm">
              <h4 className="font-bold text-blue-600 mb-2">🇫🇷 Französisch</h4>
              <p>Estragon, Thymian, Lorbeer, Petersilie ("Fines Herbes")</p>
            </div>
            <div className="bg-white dark:bg-stone-700 p-4 rounded-lg shadow-sm">
              <h4 className="font-bold text-orange-600 mb-2">🌏 Asiatisch</h4>
              <p>Ingwer, Knoblauch, Chili, Koriander, Sternanis</p>
            </div>
            <div className="bg-white dark:bg-stone-700 p-4 rounded-lg shadow-sm">
              <h4 className="font-bold text-green-600 mb-2">🇲🇽 Mexikanisch</h4>
              <p>Kreuzkümmel (Cumin), Koriander, Chili, Oregano</p>
            </div>
            <div className="bg-white dark:bg-stone-700 p-4 rounded-lg shadow-sm">
              <h4 className="font-bold text-yellow-600 mb-2">🇮🇳 Indisch</h4>
              <p>Kardamom, Kurkuma, Kreuzkümmel, Koriandersamen, Senfsaat</p>
            </div>
            <div className="bg-white dark:bg-stone-700 p-4 rounded-lg shadow-sm">
              <h4 className="font-bold text-amber-800 mb-2">🇩🇪 Deutsch/Heimisch</h4>
              <p>Petersilie, Schnittlauch, Liebstöckel, Lorbeer, Wacholder</p>
            </div>
          </div>
        </div>

        <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border-2 border-green-300 dark:border-green-700">
          <h3 className="text-xl font-bold text-green-800 dark:text-green-100 mb-4">🎯 Praktische Übung</h3>
          <p className="mb-4 font-bold">Der Röst-Test:</p>
          <ol className="list-decimal list-inside space-y-2 ml-4">
            <li>Nimm ganze Gewürze (z.B. Kreuzkümmel oder Koriandersamen).</li>
            <li>Rieche daran.</li>
            <li>Gib sie in eine kleine, trockene Pfanne bei mittlerer Hitze.</li>
            <li>Schwenke sie ca. 1-2 Minuten, bis ein intensiver Duft aufsteigt. (Nicht verbrennen lassen!)</li>
            <li>Nimm sie sofort aus der Pfanne (sonst rösten sie nach).</li>
            <li>Rieche erneut. Der Unterschied ist gewaltig!</li>
            <li>Zerstoße sie im Mörser und verwende sie für ein Gericht.</li>
          </ol>
        </div>
      </div>
    ),
    en: (
      <div className="space-y-6">
        <div>
          <h2 className="text-3xl font-bold text-purple-700 dark:text-purple-400 mb-4">The Soul of the Dish 🌿</h2>
          <p className="text-lg leading-relaxed">
            Herbs and spices turn mere ingredients into a real dish. But when do you use what? 
            And when does it go into the pot? Here you learn the rules of aromatics.
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-stone-800 dark:text-stone-100 mb-4">
            1. Fresh Herbs: Hard vs. Soft
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-stone-100 dark:bg-stone-800 p-5 rounded-xl border-l-4 border-stone-500">
              <h4 className="font-bold text-xl mb-2">Woody Herbs (Hard)</h4>
              <p className="text-sm mb-2 text-stone-600 dark:text-stone-400">Have tough stems and robust leaves.</p>
              <ul className="list-disc list-inside space-y-1 mb-3">
                <li>Rosemary</li>
                <li>Thyme</li>
                <li>Sage</li>
                <li>Bay leaf</li>
                <li>Oregano (mostly)</li>
              </ul>
              <div className="bg-white dark:bg-stone-700 p-3 rounded-lg text-sm">
                <strong>Rule:</strong> <span className="text-red-600 font-bold">Cook with them!</span><br/>
                They need time and heat to release their essential oils.
              </div>
            </div>

            <div className="bg-green-50 dark:bg-green-900/20 p-5 rounded-xl border-l-4 border-green-500">
              <h4 className="font-bold text-xl mb-2">Soft Herbs</h4>
              <p className="text-sm mb-2 text-stone-600 dark:text-stone-400">Have soft stems and delicate leaves.</p>
              <ul className="list-disc list-inside space-y-1 mb-3">
                <li>Basil</li>
                <li>Parsley</li>
                <li>Cilantro (Coriander leaves)</li>
                <li>Dill</li>
                <li>Chives</li>
                <li>Mint</li>
              </ul>
              <div className="bg-white dark:bg-stone-700 p-3 rounded-lg text-sm">
                <strong>Rule:</strong> <span className="text-green-600 font-bold">At the end!</span><br/>
                Heat destroys their delicate flavor. Add just before serving.
              </div>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-stone-800 dark:text-stone-100 mb-4">
            2. Spices: Awakening Full Potential
          </h3>
          
          <div className="bg-amber-50 dark:bg-amber-900/20 p-6 rounded-xl border-2 border-amber-200 dark:border-amber-800 mb-4">
            <h4 className="text-xl font-bold text-amber-900 dark:text-amber-100 mb-3">
              Whole vs. Ground
            </h4>
            <p className="mb-3">
              Do you buy ground pepper? <strong>Stop it!</strong>
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Whole spices</strong> (grains, seeds) keep their flavor for years. The aroma is "locked in".</li>
              <li><strong>Ground spices</strong> lose their flavor within months as oils evaporate.</li>
            </ul>
            <p className="mt-3 font-bold">💡 Tip: Buy spices whole and mortar/grind them fresh.</p>
          </div>

          <div className="bg-red-50 dark:bg-red-900/20 p-5 rounded-lg">
            <h4 className="font-bold mb-3">🔥 Pro Trick: Toasting (Blooming)</h4>
            <p className="mb-3">
              Many spices are fat-soluble and release flavor through heat.
            </p>
            <div className="space-y-2">
              <p><strong>Method 1 (Dry):</strong> Heat whole spices (cumin, coriander, pepper) in a dry pan until fragrant. Then mortar.</p>
              <p><strong>Method 2 (In Oil):</strong> Briefly fry spices (curry paste, paprika powder, chili) in hot oil (Careful: burns quickly!). The oil absorbs the flavor.</p>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-stone-800 dark:text-stone-100 mb-4">
            3. Classic Combinations
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-white dark:bg-stone-700 p-4 rounded-lg shadow-sm">
              <h4 className="font-bold text-red-600 mb-2">🇮🇹 Italian</h4>
              <p>Basil, Oregano, Rosemary, Thyme, Garlic</p>
            </div>
            <div className="bg-white dark:bg-stone-700 p-4 rounded-lg shadow-sm">
              <h4 className="font-bold text-blue-600 mb-2">🇫🇷 French</h4>
              <p>Tarragon, Thyme, Bay leaf, Parsley ("Fines Herbes")</p>
            </div>
            <div className="bg-white dark:bg-stone-700 p-4 rounded-lg shadow-sm">
              <h4 className="font-bold text-orange-600 mb-2">🌏 Asian</h4>
              <p>Ginger, Garlic, Chili, Cilantro, Star Anise</p>
            </div>
            <div className="bg-white dark:bg-stone-700 p-4 rounded-lg shadow-sm">
              <h4 className="font-bold text-green-600 mb-2">🇲🇽 Mexican</h4>
              <p>Cumin, Cilantro, Chili, Oregano</p>
            </div>
            <div className="bg-white dark:bg-stone-700 p-4 rounded-lg shadow-sm">
              <h4 className="font-bold text-yellow-600 mb-2">🇮🇳 Indian</h4>
              <p>Cardamom, Turmeric, Cumin, Coriander seeds, Mustard seeds</p>
            </div>
            <div className="bg-white dark:bg-stone-700 p-4 rounded-lg shadow-sm">
              <h4 className="font-bold text-amber-800 mb-2">🇩🇪 German/Local</h4>
              <p>Parsley, Chives, Lovage, Bay leaf, Juniper</p>
            </div>
          </div>
        </div>

        <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border-2 border-green-300 dark:border-green-700">
          <h3 className="text-xl font-bold text-green-800 dark:text-green-100 mb-4">🎯 Practical Exercise</h3>
          <p className="mb-4 font-bold">The Toast Test:</p>
          <ol className="list-decimal list-inside space-y-2 ml-4">
            <li>Take whole spices (e.g., cumin or coriander seeds).</li>
            <li>Smell them.</li>
            <li>Put them in a small, dry pan over medium heat.</li>
            <li>Toss them for approx. 1-2 minutes until an intense scent rises. (Don't let burn!)</li>
            <li>Remove from pan immediately (otherwise they keep roasting).</li>
            <li>Smell again. The difference is huge!</li>
            <li>Crush in mortar and use for a dish.</li>
          </ol>
        </div>
      </div>
    )
  },

  task: {
    de: {
      title: 'Gewürze anrösten',
      description: 'Röste ganze Gewürze an und verarbeite sie.',
      checklist: [
        { text: 'Wähle ein ganzes Gewürz (Kümmel, Koriander, Pfeffer)' },
        { text: 'Erhitze eine trockene Pfanne' },
        { text: 'Röste die Gewürze bis sie duften' },
        { text: 'Nimm sie sofort aus der Pfanne' },
        { text: 'Mörser oder mahle sie' }
      ]
    },
    en: {
      title: 'Toast Spices',
      description: 'Toast whole spices and process them.',
      checklist: [
        { text: 'Choose a whole spice (cumin, coriander, pepper)' },
        { text: 'Heat a dry pan' },
        { text: 'Toast spices until fragrant' },
        { text: 'Remove from pan immediately' },
        { text: 'Mortar or grind them' }
      ]
    }
  },
  
  notes: {
    de: [
      { front: 'Wann gibt man weiche Kräuter (Basilikum, Petersilie) dazu?', back: 'Erst am Ende! Hitze zerstört das Aroma.' },
      { front: 'Wann gibt man harte Kräuter (Rosmarin, Thymian) dazu?', back: 'Mitkochen! Sie brauchen Zeit, um Geschmack abzugeben.' },
      { front: 'Warum ganze Gewürze kaufen?', back: 'Sie halten das Aroma viel länger. Gemahlene verlieren schnell an Geschmack.' },
      { front: 'Was bewirkt das Anrösten von Gewürzen?', back: 'Es intensiviert den Geschmack durch Freisetzung ätherischer Öle.' }
    ],
    en: [
      { front: 'When do you add soft herbs (basil, parsley)?', back: 'At the very end! Heat destroys the flavor.' },
      { front: 'When do you add hard herbs (rosemary, thyme)?', back: 'Cook with them! They need time to release flavor.' },
      { front: 'Why buy whole spices?', back: 'They keep flavor much longer. Ground ones lose taste quickly.' },
      { front: 'What does toasting spices do?', back: 'It intensifies flavor by releasing essential oils.' }
    ]
  }
};

