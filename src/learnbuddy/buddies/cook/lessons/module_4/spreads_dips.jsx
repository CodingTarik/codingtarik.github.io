import React from 'react';

export const spreadsDipsLesson = {
  id: 'c4_m4_spreads',
  title: { 
    en: '4.9 Spreads & Dips', 
    de: '4.9 Brotaufstriche & Dips' 
  },
  description: { 
    en: 'More than just butter: Homemade spreads, pestos, and classic dips.', 
    de: 'Mehr als nur Butter: Hausgemachte Aufstriche, Pestos und klassische Dips.' 
  },
  category: 'theory',
  
  content: {
    de: (
      <div className="space-y-6">
        <div>
          <h2 className="text-3xl font-bold text-purple-700 dark:text-purple-400 mb-4">Der Held der Party 🥣</h2>
          <p className="text-lg leading-relaxed">
            Ein guter Dip oder Aufstrich kann aus einfachem Brot oder Gemüse ein Festmahl machen. 
            Das Beste: Sie sind meistens blitzschnell gemacht und schmecken 100x besser als aus dem Supermarkt.
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-stone-800 dark:text-stone-100 mb-4">
            1. Die Klassiker (Aufstriche)
          </h3>
          
          <div className="space-y-4">
            <div className="bg-yellow-50 dark:bg-yellow-900/20 p-5 rounded-lg border-l-4 border-yellow-400">
              <h4 className="font-bold text-xl mb-2">Butter-Upgrades 🧈</h4>
              <p className="mb-2">Langweilige Butter war gestern.</p>
              <ul className="list-disc list-inside text-sm space-y-1">
                <li><strong>Kräuterbutter:</strong> Weiche Butter + gehackte Kräuter + Knoblauch + Salz. (Rolle formen, kühlen).</li>
                <li><strong>Tomatenbutter:</strong> Mit Tomatenmark und getrockneten Tomaten.</li>
                <li><strong>Honig-Senf-Butter:</strong> Perfekt zu Fisch oder Hähnchen.</li>
              </ul>
            </div>

            <div className="bg-white dark:bg-stone-700 p-5 rounded-lg shadow-sm">
              <h4 className="font-bold text-xl mb-2">Frischkäse-Variationen</h4>
              <p className="text-sm">Basis: Neutraler Frischkäse.</p>
              <ul className="list-disc list-inside text-sm space-y-1 mt-2">
                <li>+ Radieschen & Schnittlauch (Frühling)</li>
                <li>+ Geräucherter Lachs & Dill (Edel)</li>
                <li>+ Curry & Datteln (Orientalisch)</li>
              </ul>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-stone-800 dark:text-stone-100 mb-4">
            2. Die Welt der Dips
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-amber-50 dark:bg-amber-900/20 p-4 rounded-xl">
              <h4 className="font-bold text-lg mb-1 text-amber-800 dark:text-amber-100">Hummus (Kichererbsen) 🇮🇱</h4>
              <p className="text-sm mb-2">Die Basis ist Kichererbsen + Tahini (Sesammus) + Zitrone + Knoblauch + Kreuzkümmel.</p>
              <p className="text-xs italic">Geheimtipp: Eiswürfel beim Mixen machen ihn ultra-cremig!</p>
            </div>
            
            <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-xl">
              <h4 className="font-bold text-lg mb-1 text-green-800 dark:text-green-100">Guacamole (Avocado) 🇲🇽</h4>
              <p className="text-sm mb-2">Reife Avocado + Zwiebelwürfel + Tomatenwürfel + Limette + Salz + Koriander.</p>
              <p className="text-xs italic">Tipp: Den Kern in den Dip legen verhindert das Braunwerden (etwas).</p>
            </div>

            <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl">
              <h4 className="font-bold text-lg mb-1 text-blue-800 dark:text-blue-100">Tzatziki (Joghurt) 🇬🇷</h4>
              <p className="text-sm mb-2">Griechischer Joghurt (10%) + geriebene Gurke + Knoblauch + Dill.</p>
              <p className="text-xs italic">Wichtig: Gurke raspeln und Wasser ausdrücken, sonst wird es suppig!</p>
            </div>

            <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-xl">
              <h4 className="font-bold text-lg mb-1 text-yellow-800 dark:text-yellow-100">Aioli (Knoblauch) 🇪🇸</h4>
              <p className="text-sm mb-2">Mayonnaise + viiiiiel Knoblauch + Zitrone.</p>
              <p className="text-xs italic">Traditionell nur Knoblauch & Öl, aber mit Mayo gelingsicher.</p>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-stone-800 dark:text-stone-100 mb-4">
            3. Pesto & Chutney (Haltbares)
          </h3>
          <table className="w-full border-collapse text-sm md:text-base">
            <thead>
              <tr className="bg-stone-200 dark:bg-stone-700">
                <th className="border border-stone-300 dark:border-stone-600 p-3 text-left">Typ</th>
                <th className="border border-stone-300 dark:border-stone-600 p-3 text-left">Formel</th>
                <th className="border border-stone-300 dark:border-stone-600 p-3 text-left">Verwendung</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-stone-300 dark:border-stone-600 p-3"><strong>Pesto Genovese</strong></td>
                <td className="border border-stone-300 dark:border-stone-600 p-3">Basilikum + Pinienkerne + Parmesan + Knoblauch + Olivenöl</td>
                <td className="border border-stone-300 dark:border-stone-600 p-3">Pasta, Salatdressing, Sandwich</td>
              </tr>
              <tr>
                <td className="border border-stone-300 dark:border-stone-600 p-3"><strong>Pesto Rosso</strong></td>
                <td className="border border-stone-300 dark:border-stone-600 p-3">Getrocknete Tomaten + Mandeln + Parmesan + Öl</td>
                <td className="border border-stone-300 dark:border-stone-600 p-3">Pasta, Grillfleisch</td>
              </tr>
              <tr>
                <td className="border border-stone-300 dark:border-stone-600 p-3"><strong>Chutney</strong></td>
                <td className="border border-stone-300 dark:border-stone-600 p-3">Früchte (Mango/Pflaume) + Essig + Zucker + Gewürze (eingekocht)</td>
                <td className="border border-stone-300 dark:border-stone-600 p-3">Käse, Curry, Fleisch</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border-2 border-green-300 dark:border-green-700">
          <h3 className="text-xl font-bold text-green-800 dark:text-green-100 mb-4">🎯 Praktische Übung</h3>
          <p className="mb-4 font-bold">Das Dips-Trio für den Abend:</p>
          <ol className="list-decimal list-inside space-y-2 ml-4">
            <li><strong>Hummus:</strong> Püriere eine Dose Kichererbsen mit 2 EL Tahini, Saft einer halben Zitrone, 1 Knoblauchzehe, Salz und etwas Wasser/Eiswürfel bis es cremig ist.</li>
            <li><strong>Kräuterquark:</strong> Mische Magerquark mit einem Schuss Mineralwasser (macht ihn fluffig), Salz, Pfeffer und Schnittlauch.</li>
            <li><strong>Schnelle Guacamole:</strong> Zerdrücke eine Avocado mit der Gabel, mische Salz, Pfeffer und Limettensaft unter.</li>
            <li>Serviere alles mit Rohkost-Sticks (Karotte, Paprika, Gurke) oder frischem Brot.</li>
          </ol>
        </div>
      </div>
    ),
    en: (
      <div className="space-y-6">
        <div>
          <h2 className="text-3xl font-bold text-purple-700 dark:text-purple-400 mb-4">Party Hero 🥣</h2>
          <p className="text-lg leading-relaxed">
            A good dip or spread can turn simple bread or vegetables into a feast.
            Best of all: They are usually lightning fast to make and taste 100x better than store-bought.
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-stone-800 dark:text-stone-100 mb-4">
            1. The Classics (Spreads)
          </h3>
          
          <div className="space-y-4">
            <div className="bg-yellow-50 dark:bg-yellow-900/20 p-5 rounded-lg border-l-4 border-yellow-400">
              <h4 className="font-bold text-xl mb-2">Butter Upgrades 🧈</h4>
              <p className="mb-2">Boring butter is history.</p>
              <ul className="list-disc list-inside text-sm space-y-1">
                <li><strong>Herb Butter:</strong> Soft butter + chopped herbs + garlic + salt. (Form roll, chill).</li>
                <li><strong>Tomato Butter:</strong> With tomato paste and sun-dried tomatoes.</li>
                <li><strong>Honey Mustard Butter:</strong> Perfect for fish or chicken.</li>
              </ul>
            </div>

            <div className="bg-white dark:bg-stone-700 p-5 rounded-lg shadow-sm">
              <h4 className="font-bold text-xl mb-2">Cream Cheese Variations</h4>
              <p className="text-sm">Base: Plain cream cheese.</p>
              <ul className="list-disc list-inside text-sm space-y-1 mt-2">
                <li>+ Radish & Chives (Spring)</li>
                <li>+ Smoked Salmon & Dill (Fancy)</li>
                <li>+ Curry & Dates (Oriental)</li>
              </ul>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-stone-800 dark:text-stone-100 mb-4">
            2. World of Dips
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-amber-50 dark:bg-amber-900/20 p-4 rounded-xl">
              <h4 className="font-bold text-lg mb-1 text-amber-800 dark:text-amber-100">Hummus (Chickpeas) 🇮🇱</h4>
              <p className="text-sm mb-2">Base is chickpeas + tahini (sesame paste) + lemon + garlic + cumin.</p>
              <p className="text-xs italic">Secret tip: Ice cubes when blending make it ultra-creamy!</p>
            </div>
            
            <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-xl">
              <h4 className="font-bold text-lg mb-1 text-green-800 dark:text-green-100">Guacamole (Avocado) 🇲🇽</h4>
              <p className="text-sm mb-2">Ripe avocado + diced onion + diced tomato + lime + salt + cilantro.</p>
              <p className="text-xs italic">Tip: Putting the pit in the dip prevents browning (somewhat).</p>
            </div>

            <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl">
              <h4 className="font-bold text-lg mb-1 text-blue-800 dark:text-blue-100">Tzatziki (Yogurt) 🇬🇷</h4>
              <p className="text-sm mb-2">Greek yogurt (10%) + grated cucumber + garlic + dill.</p>
              <p className="text-xs italic">Important: Grate cucumber and squeeze out water, otherwise it gets soupy!</p>
            </div>

            <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-xl">
              <h4 className="font-bold text-lg mb-1 text-yellow-800 dark:text-yellow-100">Aioli (Garlic) 🇪🇸</h4>
              <p className="text-sm mb-2">Mayonnaise + loooots of garlic + lemon.</p>
              <p className="text-xs italic">Traditionally only garlic & oil, but foolproof with mayo.</p>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-stone-800 dark:text-stone-100 mb-4">
            3. Pesto & Chutney (Preservable)
          </h3>
          <table className="w-full border-collapse text-sm md:text-base">
            <thead>
              <tr className="bg-stone-200 dark:bg-stone-700">
                <th className="border border-stone-300 dark:border-stone-600 p-3 text-left">Type</th>
                <th className="border border-stone-300 dark:border-stone-600 p-3 text-left">Formula</th>
                <th className="border border-stone-300 dark:border-stone-600 p-3 text-left">Usage</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-stone-300 dark:border-stone-600 p-3"><strong>Pesto Genovese</strong></td>
                <td className="border border-stone-300 dark:border-stone-600 p-3">Basil + Pine nuts + Parmesan + Garlic + Olive oil</td>
                <td className="border border-stone-300 dark:border-stone-600 p-3">Pasta, salad dressing, sandwich</td>
              </tr>
              <tr>
                <td className="border border-stone-300 dark:border-stone-600 p-3"><strong>Pesto Rosso</strong></td>
                <td className="border border-stone-300 dark:border-stone-600 p-3">Dried tomatoes + Almonds + Parmesan + Oil</td>
                <td className="border border-stone-300 dark:border-stone-600 p-3">Pasta, grilled meat</td>
              </tr>
              <tr>
                <td className="border border-stone-300 dark:border-stone-600 p-3"><strong>Chutney</strong></td>
                <td className="border border-stone-300 dark:border-stone-600 p-3">Fruit (Mango/Plum) + Vinegar + Sugar + Spices (cooked)</td>
                <td className="border border-stone-300 dark:border-stone-600 p-3">Cheese, curry, meat</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border-2 border-green-300 dark:border-green-700">
          <h3 className="text-xl font-bold text-green-800 dark:text-green-100 mb-4">🎯 Practical Exercise</h3>
          <p className="mb-4 font-bold">The Dip Trio for the Evening:</p>
          <ol className="list-decimal list-inside space-y-2 ml-4">
            <li><strong>Hummus:</strong> Blend a can of chickpeas with 2 tbsp tahini, juice of half a lemon, 1 clove garlic, salt and some water/ice cubes until creamy.</li>
            <li><strong>Herb Quark:</strong> Mix low-fat quark with a splash of sparkling water (makes it fluffy), salt, pepper and chives.</li>
            <li><strong>Quick Guacamole:</strong> Mash an avocado with a fork, mix in salt, pepper and lime juice.</li>
            <li>Serve everything with raw veggie sticks (carrot, pepper, cucumber) or fresh bread.</li>
          </ol>
        </div>
      </div>
    )
  },

  task: {
    de: {
      title: 'Hummus selber machen',
      description: 'Stelle deinen eigenen Hummus her.',
      checklist: [
        { text: 'Püriere Kichererbsen (gewaschen) mit Tahini' },
        { text: 'Füge Zitrone, Knoblauch und Salz hinzu' },
        { text: 'Nutze Eiswasser für die Cremigkeit' },
        { text: 'Schmecke ab (mehr Zitrone? mehr Salz?)' },
        { text: 'Serviere mit Olivenöl und Brot' }
      ]
    },
    en: {
      title: 'Make your own Hummus',
      description: 'Create your own hummus.',
      checklist: [
        { text: 'Blend chickpeas (rinsed) with tahini' },
        { text: 'Add lemon, garlic and salt' },
        { text: 'Use ice water for creaminess' },
        { text: 'Season to taste (more lemon? more salt?)' },
        { text: 'Serve with olive oil and bread' }
      ]
    }
  },
  
  notes: {
    de: [
      { front: 'Warum sollte man Gurken für Tzatziki ausdrücken?', back: 'Weil sie viel Wasser enthalten und den Dip sonst verwässern.' },
      { front: 'Was ist Tahini?', back: 'Eine Paste aus gerösteten Sesamsamen (Sesammus).' },
      { front: 'Wie wird Pesto haltbar?', back: 'Sauberes Arbeiten und immer mit einer Schicht Öl bedecken.' },
      { front: 'Was macht Quark fluffig?', back: 'Ein Schuss Mineralwasser mit Kohlensäure.' }
    ],
    en: [
      { front: 'Why squeeze cucumbers for Tzatziki?', back: 'Because they contain a lot of water and would water down the dip.' },
      { front: 'What is Tahini?', back: 'A paste made from toasted sesame seeds.' },
      { front: 'How to preserve Pesto?', back: 'Clean utensils and always cover with a layer of oil.' },
      { front: 'What makes quark/curd fluffy?', back: 'A splash of sparkling mineral water.' }
    ]
  }
};


