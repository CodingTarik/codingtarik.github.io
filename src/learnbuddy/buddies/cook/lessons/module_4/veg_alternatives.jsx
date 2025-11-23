import React from 'react';

export const vegAlternativesLesson = {
  id: 'c4_m4_veg',
  title: { 
    en: '4.7 Veggie Alternatives', 
    de: '4.7 Vegetarische Alternativen' 
  },
  description: { 
    en: 'Cooking without meat: Proteins and substitutes that taste good.', 
    de: 'Kochen ohne Fleisch: Proteinquellen und Ersatzprodukte, die schmecken.' 
  },
  category: 'theory',
  
  content: {
    de: (
      <div className="space-y-6">
        <div>
          <h2 className="text-3xl font-bold text-purple-700 dark:text-purple-400 mb-4">Pflanzen-Power 🌱</h2>
          <p className="text-lg leading-relaxed">
            Vegetarisch kochen heißt nicht einfach "Fleisch weglassen". Es bedeutet, andere Proteinquellen 
            und Geschmäcker in den Mittelpunkt zu stellen.
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-stone-800 dark:text-stone-100 mb-4">
            1. Die "Big 4" pflanzlichen Proteine
          </h3>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-stone-100 dark:bg-stone-800 p-5 rounded-xl">
              <h4 className="font-bold text-xl mb-2 text-stone-800 dark:text-stone-200">1. Hülsenfrüchte</h4>
              <p className="text-sm mb-2">Linsen, Bohnen, Kichererbsen.</p>
              <ul className="list-disc list-inside text-sm space-y-1">
                <li><strong>Verwendung:</strong> Eintöpfe, Salate, Burger-Patties, Hummus.</li>
                <li><strong>Vorteil:</strong> Billig, gesund, sättigend.</li>
                <li><strong>Tipp:</strong> Dosen abspülen (gegen Blähungen), Trockene einweichen.</li>
              </ul>
            </div>

            <div className="bg-stone-100 dark:bg-stone-800 p-5 rounded-xl">
              <h4 className="font-bold text-xl mb-2 text-stone-800 dark:text-stone-200">2. Tofu</h4>
              <p className="text-sm mb-2">Aus Sojabohnen. Schmeckt nach "nichts" -> braucht Würze!</p>
              <ul className="list-disc list-inside text-sm space-y-1">
                <li><strong>Natur:</strong> Zum Marinieren & Braten.</li>
                <li><strong>Räuchertofu:</strong> Schmeckt wie Speck (würzig!).</li>
                <li><strong>Seidentofu:</strong> Weich wie Pudding (für Desserts/Saucen).</li>
              </ul>
            </div>

            <div className="bg-stone-100 dark:bg-stone-800 p-5 rounded-xl">
              <h4 className="font-bold text-xl mb-2 text-stone-800 dark:text-stone-200">3. Tempeh</h4>
              <p className="text-sm mb-2">Fermentierte Sojabohnen (Ganze Bohnen sichtbar).</p>
              <ul className="list-disc list-inside text-sm space-y-1">
                <li><strong>Geschmack:</strong> Nussig, pilzartig, fester Biss.</li>
                <li><strong>Verwendung:</strong> In Scheiben braten, marinieren.</li>
              </ul>
            </div>

            <div className="bg-stone-100 dark:bg-stone-800 p-5 rounded-xl">
              <h4 className="font-bold text-xl mb-2 text-stone-800 dark:text-stone-200">4. Seitan</h4>
              <p className="text-sm mb-2">Reines Weizengluten (Klebereiweiß).</p>
              <ul className="list-disc list-inside text-sm space-y-1">
                <li><strong>Konsistenz:</strong> Fleischähnlich, faserig, fest.</li>
                <li><strong>Verwendung:</strong> Als "Fleischersatz" für Gulasch, Schnitzel, Gyros.</li>
              </ul>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-stone-800 dark:text-stone-100 mb-4">
            2. Tofu richtig zubereiten (Nie wieder langweilig!)
          </h3>
          
          <div className="bg-amber-50 dark:bg-amber-900/20 p-6 rounded-xl border-2 border-amber-200 dark:border-amber-800 mb-4">
            <p className="mb-3 font-bold">Das Geheimnis für knusprigen Tofu:</p>
            <ol className="list-decimal list-inside space-y-3 ml-4">
              <li><strong>Pressen:</strong> Wickle den Tofu in Küchenpapier und stelle etwas Schweres (Topf) darauf (15 Min). Wasser muss raus!</li>
              <li><strong>Schneiden/Reißen:</strong> In Würfel schneiden oder rustikal reißen (mehr Oberfläche).</li>
              <li><strong>Stärke:</strong> In Speisestärke wälzen (sorgt für Knusprigkeit).</li>
              <li><strong>Braten:</strong> In reichlich Öl goldbraun braten.</li>
              <li><strong>Würzen:</strong> Erst AM ENDE die Sauce dazu (Sojasauce, Sirup, Chili), sonst wird er wieder weich.</li>
            </ol>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-stone-800 dark:text-stone-100 mb-4">
            3. Ersatz beim Backen (Vegan)
          </h3>
          <table className="w-full border-collapse text-sm md:text-base">
            <thead>
              <tr className="bg-stone-200 dark:bg-stone-700">
                <th className="border border-stone-300 dark:border-stone-600 p-3 text-left">Zutat</th>
                <th className="border border-stone-300 dark:border-stone-600 p-3 text-left">Ersatz</th>
                <th className="border border-stone-300 dark:border-stone-600 p-3 text-left">Verwendung</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-stone-300 dark:border-stone-600 p-3"><strong>Milch</strong></td>
                <td className="border border-stone-300 dark:border-stone-600 p-3">Hafermilch, Sojamilch</td>
                <td className="border border-stone-300 dark:border-stone-600 p-3">1:1 ersetzbar</td>
              </tr>
              <tr>
                <td className="border border-stone-300 dark:border-stone-600 p-3"><strong>Butter</strong></td>
                <td className="border border-stone-300 dark:border-stone-600 p-3">Margarine, Kokosöl</td>
                <td className="border border-stone-300 dark:border-stone-600 p-3">Mürbeteig, Rührteig</td>
              </tr>
              <tr>
                <td className="border border-stone-300 dark:border-stone-600 p-3"><strong>Ei (Bindung)</strong></td>
                <td className="border border-stone-300 dark:border-stone-600 p-3">Apfelmus, Banane</td>
                <td className="border border-stone-300 dark:border-stone-600 p-3">Süße Kuchen, Muffins</td>
              </tr>
              <tr>
                <td className="border border-stone-300 dark:border-stone-600 p-3"><strong>Ei (Schnee)</strong></td>
                <td className="border border-stone-300 dark:border-stone-600 p-3">Aquafaba</td>
                <td className="border border-stone-300 dark:border-stone-600 p-3">Kichererbsenwasser aufschlagen!</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border-2 border-green-300 dark:border-green-700">
          <h3 className="text-xl font-bold text-green-800 dark:text-green-100 mb-4">🎯 Praktische Übung</h3>
          <p className="mb-4 font-bold">Mache Tofu lecker:</p>
          <ol className="list-decimal list-inside space-y-2 ml-4">
            <li>Presse einen Block Naturtofu aus.</li>
            <li>Schneide ihn in Würfel.</li>
            <li>Wende ihn in Speisestärke.</li>
            <li>Brate ihn knusprig an.</li>
            <li>Lösche mit einer Mischung aus Sojasauce, etwas Zucker und Knoblauch ab und schwenke kurz, bis die Sauce klebt.</li>
            <li>Serviere mit Reis.</li>
          </ol>
        </div>
      </div>
    ),
    en: (
      <div className="space-y-6">
        <div>
          <h2 className="text-3xl font-bold text-purple-700 dark:text-purple-400 mb-4">Plant Power 🌱</h2>
          <p className="text-lg leading-relaxed">
            Cooking vegetarian doesn't just mean "leaving out the meat". It means putting other protein sources 
            and flavors center stage.
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-stone-800 dark:text-stone-100 mb-4">
            1. The "Big 4" Plant Proteins
          </h3>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-stone-100 dark:bg-stone-800 p-5 rounded-xl">
              <h4 className="font-bold text-xl mb-2 text-stone-800 dark:text-stone-200">1. Legumes</h4>
              <p className="text-sm mb-2">Lentils, beans, chickpeas.</p>
              <ul className="list-disc list-inside text-sm space-y-1">
                <li><strong>Use:</strong> Stews, salads, burger patties, hummus.</li>
                <li><strong>Benefit:</strong> Cheap, healthy, filling.</li>
                <li><strong>Tip:</strong> Rinse canned ones (reduces bloating), soak dried ones.</li>
              </ul>
            </div>

            <div className="bg-stone-100 dark:bg-stone-800 p-5 rounded-xl">
              <h4 className="font-bold text-xl mb-2 text-stone-800 dark:text-stone-200">2. Tofu</h4>
              <p className="text-sm mb-2">From soybeans. Tastes like "nothing" -> needs seasoning!</p>
              <ul className="list-disc list-inside text-sm space-y-1">
                <li><strong>Plain:</strong> For marinating & frying.</li>
                <li><strong>Smoked Tofu:</strong> Tastes like bacon (savory!).</li>
                <li><strong>Silken Tofu:</strong> Soft like pudding (for desserts/sauces).</li>
              </ul>
            </div>

            <div className="bg-stone-100 dark:bg-stone-800 p-5 rounded-xl">
              <h4 className="font-bold text-xl mb-2 text-stone-800 dark:text-stone-200">3. Tempeh</h4>
              <p className="text-sm mb-2">Fermented soybeans (whole beans visible).</p>
              <ul className="list-disc list-inside text-sm space-y-1">
                <li><strong>Taste:</strong> Nutty, mushroom-like, firm bite.</li>
                <li><strong>Use:</strong> Slice and fry, marinate.</li>
              </ul>
            </div>

            <div className="bg-stone-100 dark:bg-stone-800 p-5 rounded-xl">
              <h4 className="font-bold text-xl mb-2 text-stone-800 dark:text-stone-200">4. Seitan</h4>
              <p className="text-sm mb-2">Pure wheat gluten.</p>
              <ul className="list-disc list-inside text-sm space-y-1">
                <li><strong>Texture:</strong> Meat-like, fibrous, firm.</li>
                <li><strong>Use:</strong> As "meat substitute" for goulash, schnitzel, gyros.</li>
              </ul>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-stone-800 dark:text-stone-100 mb-4">
            2. Preparing Tofu Correctly (Never Boring Again!)
          </h3>
          
          <div className="bg-amber-50 dark:bg-amber-900/20 p-6 rounded-xl border-2 border-amber-200 dark:border-amber-800 mb-4">
            <p className="mb-3 font-bold">The secret to crispy tofu:</p>
            <ol className="list-decimal list-inside space-y-3 ml-4">
              <li><strong>Press:</strong> Wrap tofu in paper towel and put something heavy (pot) on it (15 min). Water must go out!</li>
              <li><strong>Cut/Tear:</strong> Cut into cubes or tear rustically (more surface area).</li>
              <li><strong>Starch:</strong> Toss in cornstarch (ensures crispiness).</li>
              <li><strong>Fry:</strong> Fry in plenty of oil until golden brown.</li>
              <li><strong>Season:</strong> Add sauce ONLY AT THE END (soy sauce, syrup, chili), otherwise it gets soft again.</li>
            </ol>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-stone-800 dark:text-stone-100 mb-4">
            3. Baking Substitutes (Vegan)
          </h3>
          <table className="w-full border-collapse text-sm md:text-base">
            <thead>
              <tr className="bg-stone-200 dark:bg-stone-700">
                <th className="border border-stone-300 dark:border-stone-600 p-3 text-left">Ingredient</th>
                <th className="border border-stone-300 dark:border-stone-600 p-3 text-left">Substitute</th>
                <th className="border border-stone-300 dark:border-stone-600 p-3 text-left">Usage</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-stone-300 dark:border-stone-600 p-3"><strong>Milk</strong></td>
                <td className="border border-stone-300 dark:border-stone-600 p-3">Oat milk, Soy milk</td>
                <td className="border border-stone-300 dark:border-stone-600 p-3">Replace 1:1</td>
              </tr>
              <tr>
                <td className="border border-stone-300 dark:border-stone-600 p-3"><strong>Butter</strong></td>
                <td className="border border-stone-300 dark:border-stone-600 p-3">Margarine, Coconut oil</td>
                <td className="border border-stone-300 dark:border-stone-600 p-3">Pastry, batter</td>
              </tr>
              <tr>
                <td className="border border-stone-300 dark:border-stone-600 p-3"><strong>Egg (Binding)</strong></td>
                <td className="border border-stone-300 dark:border-stone-600 p-3">Applesauce, Banana</td>
                <td className="border border-stone-300 dark:border-stone-600 p-3">Sweet cakes, muffins</td>
              </tr>
              <tr>
                <td className="border border-stone-300 dark:border-stone-600 p-3"><strong>Egg (Whites)</strong></td>
                <td className="border border-stone-300 dark:border-stone-600 p-3">Aquafaba</td>
                <td className="border border-stone-300 dark:border-stone-600 p-3">Whip chickpea water!</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border-2 border-green-300 dark:border-green-700">
          <h3 className="text-xl font-bold text-green-800 dark:text-green-100 mb-4">🎯 Practical Exercise</h3>
          <p className="mb-4 font-bold">Make Tofu delicious:</p>
          <ol className="list-decimal list-inside space-y-2 ml-4">
            <li>Press a block of firm tofu.</li>
            <li>Cut into cubes.</li>
            <li>Toss in cornstarch.</li>
            <li>Fry until crispy.</li>
            <li>Deglaze with a mix of soy sauce, sugar, and garlic and toss briefly until sticky.</li>
            <li>Serve with rice.</li>
          </ol>
        </div>
      </div>
    )
  },

  task: {
    de: {
      title: 'Knusprigen Tofu machen',
      description: 'Bereite Tofu so zu, dass er knusprig und würzig ist.',
      checklist: [
        { text: 'Presse das Wasser aus dem Tofu (15 Min)' },
        { text: 'Schneide ihn in Würfel und wende ihn in Stärke' },
        { text: 'Brate ihn knusprig in Öl' },
        { text: 'Lösche ihn erst am Ende mit Würzsauce ab' }
      ]
    },
    en: {
      title: 'Make Crispy Tofu',
      description: 'Prepare tofu so it is crispy and flavorful.',
      checklist: [
        { text: 'Press water out of tofu (15 min)' },
        { text: 'Cut into cubes and toss in starch' },
        { text: 'Fry crispy in oil' },
        { text: 'Deglaze with sauce only at the end' }
      ]
    }
  },
  
  notes: {
    de: [
      { front: 'Warum muss man Tofu pressen?', back: 'Um Wasser zu entfernen, damit er Marinade aufnehmen kann und knusprig wird.' },
      { front: 'Was ist Aquafaba?', back: 'Das Kochwasser von Kichererbsen. Es lässt sich wie Eischnee aufschlagen.' },
      { front: 'Was ist der Unterschied zwischen Tofu und Tempeh?', back: 'Tofu ist aus Sojamilch (weich). Tempeh ist aus ganzen fermentierten Sojabohnen (fest, nussig).' },
      { front: 'Wie ersetzt man Eier in süßem Gebäck?', back: 'Oft mit Apfelmus oder zerdrückter Banane.' }
    ],
    en: [
      { front: 'Why do you have to press tofu?', back: 'To remove water so it can absorb marinade and become crispy.' },
      { front: 'What is Aquafaba?', back: 'Chickpea cooking water. Can be whipped like egg whites.' },
      { front: 'What is the difference between Tofu and Tempeh?', back: 'Tofu is made from soy milk (soft). Tempeh is from whole fermented soybeans (firm, nutty).' },
      { front: 'How do you replace eggs in sweet baking?', back: 'Often with applesauce or mashed banana.' }
    ]
  }
};

