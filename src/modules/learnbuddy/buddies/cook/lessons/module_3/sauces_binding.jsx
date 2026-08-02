import React from 'react';

export const saucesBindingLesson = {
  id: 'c3_m3_sauces_binding',
  title: { 
    en: '3.4 Sauces & Binding', 
    de: '3.4 Saucen & Binden' 
  },
  description: { 
    en: 'Béchamel, Roux, Montieren. The techniques that transform liquid into silk.', 
    de: 'Béchamel, Roux, Montieren. Die Techniken, die Flüssigkeit in Seide verwandeln.' 
  },
  category: 'preparations',
  
  content: {
    de: (
      <div className="space-y-6">
        <div>
          <h2 className="text-3xl font-bold text-amber-900 mb-4">Die Magie der Saucen 🥄</h2>
          <p className="text-lg leading-relaxed">
            Eine gute Sauce ist das, was ein Gericht von "okay" zu "wow" macht. Sie verbindet alle Komponenten, 
            bringt Feuchtigkeit und trägt Geschmack. Aber wie macht man eine dünne Flüssigkeit sämig?
          </p>
        </div>

        <div className="bg-amber-50 dark:bg-amber-900/20 p-6 rounded-xl border-2 border-amber-200 dark:border-amber-800">
          <h3 className="text-xl font-bold text-amber-900 dark:text-amber-100 mb-3">
            Die 5 "Mutter-Saucen" der französischen Küche
          </h3>
          <p className="mb-4">
            Alle klassischen Saucen stammen von diesen 5 ab:
          </p>
          <ol className="list-decimal list-inside space-y-2 ml-4">
            <li><strong>Béchamel</strong> (Weiße Sauce) - Milch + Roux</li>
            <li><strong>Velouté</strong> (Helle Sauce) - Heller Fond + Roux</li>
            <li><strong>Espagnole</strong> (Braune Sauce) - Dunkler Fond + Roux</li>
            <li><strong>Tomatensauce</strong> - Tomaten + Aromaten</li>
            <li><strong>Hollandaise</strong> - Eigelb + Butter (Emulsion)</li>
          </ol>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-stone-800 dark:text-stone-100 mb-4">
            1. Die Mehlschwitze (Roux) - Das Fundament
          </h3>
          <p className="mb-4">
            <strong>Roux</strong> ist eine Mischung aus Fett und Mehl, die zum Binden von Saucen verwendet wird.
          </p>
          
          <div className="bg-stone-100 dark:bg-stone-800 p-5 rounded-lg mb-4">
            <h4 className="font-bold mb-3 text-lg">Die 3 Stufen des Roux:</h4>
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-stone-200 dark:bg-stone-700">
                  <th className="border border-stone-300 dark:border-stone-600 p-3 text-left">Stufe</th>
                  <th className="border border-stone-300 dark:border-stone-600 p-3 text-left">Dauer</th>
                  <th className="border border-stone-300 dark:border-stone-600 p-3 text-left">Verwendung</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-stone-300 dark:border-stone-600 p-3">
                    <strong>Heller Roux (Weiß)</strong><br/>
                    1-2 Min anschwitzen
                  </td>
                  <td className="border border-stone-300 dark:border-stone-600 p-3">
                    Keine Bräunung
                  </td>
                  <td className="border border-stone-300 dark:border-stone-600 p-3">
                    Béchamel, helle Saucen
                  </td>
                </tr>
                <tr>
                  <td className="border border-stone-300 dark:border-stone-600 p-3">
                    <strong>Blonder Roux (Gelb)</strong><br/>
                    3-5 Min anschwitzen
                  </td>
                  <td className="border border-stone-300 dark:border-stone-600 p-3">
                    Leichte Bräunung
                  </td>
                  <td className="border border-stone-300 dark:border-stone-600 p-3">
                    Velouté, Geflügelsaucen
                  </td>
                </tr>
                <tr>
                  <td className="border border-stone-300 dark:border-stone-600 p-3">
                    <strong>Brauner Roux (Dunkel)</strong><br/>
                    10-15 Min anschwitzen
                  </td>
                  <td className="border border-stone-300 dark:border-stone-600 p-3">
                    Nussbraun
                  </td>
                  <td className="border border-stone-300 dark:border-stone-600 p-3">
                    Dunkle Saucen, Gumbo
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-blue-50 dark:bg-blue-900/20 p-5 rounded-lg">
            <h4 className="font-bold mb-3">📝 Béchamel-Sauce (Die Basis-Sauce)</h4>
            <p className="mb-3"><strong>Zutaten:</strong></p>
            <ul className="list-disc list-inside space-y-1 mb-4 ml-4">
              <li>30g Butter</li>
              <li>30g Mehl</li>
              <li>500ml Milch (warm!)</li>
              <li>Salz, Pfeffer, Muskat</li>
            </ul>
            <p className="mb-3"><strong>Anleitung:</strong></p>
            <ol className="list-decimal list-inside space-y-2 ml-4">
              <li>Butter schmelzen, Mehl dazu → 2 Min anschwitzen (hell bleiben!)</li>
              <li><strong>Wichtig:</strong> Warme Milch nach und nach einrühren (nicht alles auf einmal!)</li>
              <li>Ständig rühren, bis die Sauce eindickt (5-7 Min köcheln)</li>
              <li>Abschmecken mit Salz, Pfeffer, Muskat</li>
            </ol>
            <p className="mt-4 text-sm italic">
              💡 <strong>Warum warme Milch?</strong> Kalte Milch kühlt den Roux ab und es bilden sich Klumpen!
            </p>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-stone-800 dark:text-stone-100 mb-4">
            2. Stärke (Speisestärke / Mondamin)
          </h3>
          <p className="mb-4">
            Schneller als Roux, aber weniger Geschmack. Perfekt für asiatische Gerichte oder schnelle Saucen.
          </p>
          <div className="bg-green-50 dark:bg-green-900/20 p-5 rounded-lg">
            <p className="font-bold mb-2">Die goldene Regel:</p>
            <p className="mb-4">
              Stärke IMMER in <strong>kalter</strong> Flüssigkeit anrühren, dann zur heißen Sauce geben!
            </p>
            <p className="text-sm">
              <strong>Warum?</strong> In heißer Flüssigkeit verkleistert Stärke sofort → Klumpen!
            </p>
            <p className="mt-3">
              <strong>Faustregel:</strong> 1 EL Stärke bindet ca. 250ml Flüssigkeit.
            </p>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-stone-800 dark:text-stone-100 mb-4">
            3. Montieren (Mit Butter binden)
          </h3>
          <p className="mb-4">
            Die eleganteste Methode. Gibt der Sauce Glanz und Geschmack.
          </p>
          <div className="bg-amber-50 dark:bg-amber-900/20 p-5 rounded-lg">
            <p className="mb-3">
              <strong>Technik:</strong>
            </p>
            <ol className="list-decimal list-inside space-y-2 ml-4">
              <li>Sauce fast fertig kochen (reduzieren)</li>
              <li>Herd ausschalten oder auf niedrigste Stufe</li>
              <li>Kalte Butter in Würfeln nach und nach einrühren</li>
              <li><strong>Nicht mehr kochen!</strong> Butter darf nicht schmelzen, nur emulgieren</li>
            </ol>
            <p className="mt-4 text-sm italic">
              ⚠️ <strong>Wichtig:</strong> Montierte Saucen nicht mehr aufkochen (Emulsion bricht → fettig!)
            </p>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-stone-800 dark:text-stone-100 mb-4">
            4. Reduktion (Einkochen)
          </h3>
          <p className="mb-4">
            Die natürlichste Methode: Wasser verdampfen lassen → Geschmack konzentriert sich.
          </p>
          <div className="bg-red-50 dark:bg-red-900/20 p-5 rounded-lg">
            <p className="mb-3">
              <strong>Technik:</strong> Sauce ohne Deckel bei mittlerer Hitze köcheln lassen, bis die gewünschte 
              Konsistenz erreicht ist.
            </p>
            <p className="mb-3">
              <strong>Faustregel:</strong> Auf die Hälfte reduzieren = doppelt so intensiv!
            </p>
            <p className="text-sm italic">
              💡 <strong>Tipp:</strong> Erst am Ende salzen! Durch die Reduktion wird die Sauce salziger.
            </p>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-stone-800 dark:text-stone-100 mb-4">
            5. Liaison (Eigelb & Sahne)
          </h3>
          <p className="mb-4">
            Für feine, cremige Saucen (z.B. Blanquette).
          </p>
          <div className="bg-yellow-50 dark:bg-yellow-900/20 p-5 rounded-lg">
            <p className="mb-3">
              <strong>Technik:</strong>
            </p>
            <ol className="list-decimal list-inside space-y-2 ml-4">
              <li>Eigelb + Sahne in einer Schüssel verquirlen</li>
              <li>Etwas heiße Sauce zur Eigelb-Mischung geben (temperieren!)</li>
              <li>Alles zurück in die Sauce rühren</li>
              <li><strong>Nicht mehr kochen!</strong> Nur noch warm halten (sonst gerinnt das Ei)</li>
            </ol>
          </div>
        </div>

        <div className="bg-stone-100 dark:bg-stone-800 p-6 rounded-xl">
          <h3 className="text-xl font-bold mb-4">🎯 Zusammenfassung: Welche Technik wann?</h3>
          <table className="w-full">
            <thead>
              <tr className="bg-stone-200 dark:bg-stone-700">
                <th className="p-3 text-left">Technik</th>
                <th className="p-3 text-left">Beste Verwendung</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-3 border-t border-stone-300 dark:border-stone-600"><strong>Roux</strong></td>
                <td className="p-3 border-t border-stone-300 dark:border-stone-600">Klassische Saucen, Lasagne, Aufläufe</td>
              </tr>
              <tr>
                <td className="p-3 border-t border-stone-300 dark:border-stone-600"><strong>Stärke</strong></td>
                <td className="p-3 border-t border-stone-300 dark:border-stone-600">Asiatische Gerichte, schnelle Saucen</td>
              </tr>
              <tr>
                <td className="p-3 border-t border-stone-300 dark:border-stone-600"><strong>Montieren</strong></td>
                <td className="p-3 border-t border-stone-300 dark:border-stone-600">Bratensaucen, Weinsaucen (Eleganz!)</td>
              </tr>
              <tr>
                <td className="p-3 border-t border-stone-300 dark:border-stone-600"><strong>Reduktion</strong></td>
                <td className="p-3 border-t border-stone-300 dark:border-stone-600">Wenn Zeit da ist, natürlicher Geschmack</td>
              </tr>
              <tr>
                <td className="p-3 border-t border-stone-300 dark:border-stone-600"><strong>Liaison</strong></td>
                <td className="p-3 border-t border-stone-300 dark:border-stone-600">Feine Saucen, Suppen (Vorsicht: nicht kochen!)</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border-2 border-green-300 dark:border-green-700">
          <h3 className="text-xl font-bold text-green-800 dark:text-green-100 mb-4">🎯 Praktische Übung</h3>
          <p className="mb-4 font-semibold">Stelle eine Béchamel-Sauce her und verwende sie für eine Lasagne oder einen Auflauf.</p>
          <ol className="list-decimal list-inside space-y-2 ml-4">
            <li>Mache einen hellen Roux (Butter + Mehl, 2 Min anschwitzen)</li>
            <li>Gib warme Milch nach und nach dazu, rühre ständig</li>
            <li>Lasse die Sauce 5-7 Min köcheln, bis sie eindickt</li>
            <li>Schmecke ab mit Salz, Pfeffer, Muskat</li>
            <li>Verwende sie für dein Gericht</li>
          </ol>
        </div>
      </div>
    ),
    en: (
      <div className="space-y-6">
        <div>
          <h2 className="text-3xl font-bold text-amber-900 mb-4">The Magic of Sauces 🥄</h2>
          <p className="text-lg leading-relaxed">
            A good sauce is what takes a dish from "okay" to "wow". It connects all components, 
            brings moisture and carries flavor. But how do you make a thin liquid creamy?
          </p>
        </div>

        <div className="bg-amber-50 dark:bg-amber-900/20 p-6 rounded-xl border-2 border-amber-200 dark:border-amber-800">
          <h3 className="text-xl font-bold text-amber-900 dark:text-amber-100 mb-3">
            The 5 "Mother Sauces" of French Cuisine
          </h3>
          <p className="mb-4">
            All classic sauces derive from these 5:
          </p>
          <ol className="list-decimal list-inside space-y-2 ml-4">
            <li><strong>Béchamel</strong> (White Sauce) - Milk + Roux</li>
            <li><strong>Velouté</strong> (Light Sauce) - Light Stock + Roux</li>
            <li><strong>Espagnole</strong> (Brown Sauce) - Dark Stock + Roux</li>
            <li><strong>Tomato Sauce</strong> - Tomatoes + Aromatics</li>
            <li><strong>Hollandaise</strong> - Egg Yolk + Butter (Emulsion)</li>
          </ol>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-stone-800 dark:text-stone-100 mb-4">
            1. Roux - The Foundation
          </h3>
          <p className="mb-4">
            <strong>Roux</strong> is a mixture of fat and flour used to thicken sauces.
          </p>
          
          <div className="bg-stone-100 dark:bg-stone-800 p-5 rounded-lg mb-4">
            <h4 className="font-bold mb-3 text-lg">The 3 Stages of Roux:</h4>
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-stone-200 dark:bg-stone-700">
                  <th className="border border-stone-300 dark:border-stone-600 p-3 text-left">Stage</th>
                  <th className="border border-stone-300 dark:border-stone-600 p-3 text-left">Duration</th>
                  <th className="border border-stone-300 dark:border-stone-600 p-3 text-left">Use</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-stone-300 dark:border-stone-600 p-3">
                    <strong>White Roux</strong><br/>
                    1-2 min cooking
                  </td>
                  <td className="border border-stone-300 dark:border-stone-600 p-3">
                    No browning
                  </td>
                  <td className="border border-stone-300 dark:border-stone-600 p-3">
                    Béchamel, light sauces
                  </td>
                </tr>
                <tr>
                  <td className="border border-stone-300 dark:border-stone-600 p-3">
                    <strong>Blond Roux</strong><br/>
                    3-5 min cooking
                  </td>
                  <td className="border border-stone-300 dark:border-stone-600 p-3">
                    Light browning
                  </td>
                  <td className="border border-stone-300 dark:border-stone-600 p-3">
                    Velouté, poultry sauces
                  </td>
                </tr>
                <tr>
                  <td className="border border-stone-300 dark:border-stone-600 p-3">
                    <strong>Brown Roux</strong><br/>
                    10-15 min cooking
                  </td>
                  <td className="border border-stone-300 dark:border-stone-600 p-3">
                    Nut brown
                  </td>
                  <td className="border border-stone-300 dark:border-stone-600 p-3">
                    Dark sauces, Gumbo
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-blue-50 dark:bg-blue-900/20 p-5 rounded-lg">
            <h4 className="font-bold mb-3">📝 Béchamel Sauce (The Base Sauce)</h4>
            <p className="mb-3"><strong>Ingredients:</strong></p>
            <ul className="list-disc list-inside space-y-1 mb-4 ml-4">
              <li>30g Butter</li>
              <li>30g Flour</li>
              <li>500ml Milk (warm!)</li>
              <li>Salt, Pepper, Nutmeg</li>
            </ul>
            <p className="mb-3"><strong>Instructions:</strong></p>
            <ol className="list-decimal list-inside space-y-2 ml-4">
              <li>Melt butter, add flour → cook 2 min (keep light!)</li>
              <li><strong>Important:</strong> Add warm milk gradually (not all at once!)</li>
              <li>Stir constantly until sauce thickens (simmer 5-7 min)</li>
              <li>Season with salt, pepper, nutmeg</li>
            </ol>
            <p className="mt-4 text-sm italic">
              💡 <strong>Why warm milk?</strong> Cold milk cools the roux and creates lumps!
            </p>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-stone-800 dark:text-stone-100 mb-4">
            2. Cornstarch
          </h3>
          <p className="mb-4">
            Faster than roux, but less flavor. Perfect for Asian dishes or quick sauces.
          </p>
          <div className="bg-green-50 dark:bg-green-900/20 p-5 rounded-lg">
            <p className="font-bold mb-2">The golden rule:</p>
            <p className="mb-4">
              ALWAYS mix cornstarch in <strong>cold</strong> liquid, then add to hot sauce!
            </p>
            <p className="text-sm">
              <strong>Why?</strong> In hot liquid, starch gelatinizes instantly → lumps!
            </p>
            <p className="mt-3">
              <strong>Rule of thumb:</strong> 1 tbsp cornstarch thickens about 250ml liquid.
            </p>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-stone-800 dark:text-stone-100 mb-4">
            3. Monter au Beurre (Mounting with Butter)
          </h3>
          <p className="mb-4">
            The most elegant method. Gives sauce shine and flavor.
          </p>
          <div className="bg-amber-50 dark:bg-amber-900/20 p-5 rounded-lg">
            <p className="mb-3">
              <strong>Technique:</strong>
            </p>
            <ol className="list-decimal list-inside space-y-2 ml-4">
              <li>Cook sauce almost done (reduce)</li>
              <li>Turn off heat or lowest setting</li>
              <li>Whisk in cold butter cubes gradually</li>
              <li><strong>Don't cook anymore!</strong> Butter should emulsify, not melt</li>
            </ol>
            <p className="mt-4 text-sm italic">
              ⚠️ <strong>Important:</strong> Don't boil mounted sauces (emulsion breaks → greasy!)
            </p>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-stone-800 dark:text-stone-100 mb-4">
            4. Reduction
          </h3>
          <p className="mb-4">
            The most natural method: let water evaporate → flavor concentrates.
          </p>
          <div className="bg-red-50 dark:bg-red-900/20 p-5 rounded-lg">
            <p className="mb-3">
              <strong>Technique:</strong> Simmer sauce uncovered at medium heat until desired 
              consistency is reached.
            </p>
            <p className="mb-3">
              <strong>Rule of thumb:</strong> Reduce by half = twice as intense!
            </p>
            <p className="text-sm italic">
              💡 <strong>Tip:</strong> Salt at the end! Reduction makes sauce saltier.
            </p>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-stone-800 dark:text-stone-100 mb-4">
            5. Liaison (Egg Yolk & Cream)
          </h3>
          <p className="mb-4">
            For fine, creamy sauces (e.g., Blanquette).
          </p>
          <div className="bg-yellow-50 dark:bg-yellow-900/20 p-5 rounded-lg">
            <p className="mb-3">
              <strong>Technique:</strong>
            </p>
            <ol className="list-decimal list-inside space-y-2 ml-4">
              <li>Whisk egg yolk + cream in a bowl</li>
              <li>Add some hot sauce to egg mixture (temper!)</li>
              <li>Stir everything back into sauce</li>
              <li><strong>Don't cook anymore!</strong> Just keep warm (or egg will curdle)</li>
            </ol>
          </div>
        </div>

        <div className="bg-stone-100 dark:bg-stone-800 p-6 rounded-xl">
          <h3 className="text-xl font-bold mb-4">🎯 Summary: Which Technique When?</h3>
          <table className="w-full">
            <thead>
              <tr className="bg-stone-200 dark:bg-stone-700">
                <th className="p-3 text-left">Technique</th>
                <th className="p-3 text-left">Best Use</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-3 border-t border-stone-300 dark:border-stone-600"><strong>Roux</strong></td>
                <td className="p-3 border-t border-stone-300 dark:border-stone-600">Classic sauces, lasagna, casseroles</td>
              </tr>
              <tr>
                <td className="p-3 border-t border-stone-300 dark:border-stone-600"><strong>Cornstarch</strong></td>
                <td className="p-3 border-t border-stone-300 dark:border-stone-600">Asian dishes, quick sauces</td>
              </tr>
              <tr>
                <td className="p-3 border-t border-stone-300 dark:border-stone-600"><strong>Mounting</strong></td>
                <td className="p-3 border-t border-stone-300 dark:border-stone-600">Pan sauces, wine sauces (elegance!)</td>
              </tr>
              <tr>
                <td className="p-3 border-t border-stone-300 dark:border-stone-600"><strong>Reduction</strong></td>
                <td className="p-3 border-t border-stone-300 dark:border-stone-600">When time allows, natural flavor</td>
              </tr>
              <tr>
                <td className="p-3 border-t border-stone-300 dark:border-stone-600"><strong>Liaison</strong></td>
                <td className="p-3 border-t border-stone-300 dark:border-stone-600">Fine sauces, soups (careful: don't boil!)</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border-2 border-green-300 dark:border-green-700">
          <h3 className="text-xl font-bold text-green-800 dark:text-green-100 mb-4">🎯 Practical Exercise</h3>
          <p className="mb-4 font-semibold">Make a Béchamel sauce and use it for lasagna or a casserole.</p>
          <ol className="list-decimal list-inside space-y-2 ml-4">
            <li>Make a white roux (butter + flour, cook 2 min)</li>
            <li>Add warm milk gradually, stir constantly</li>
            <li>Simmer sauce 5-7 min until it thickens</li>
            <li>Season with salt, pepper, nutmeg</li>
            <li>Use it for your dish</li>
          </ol>
        </div>
      </div>
    )
  },

  task: {
    de: {
      title: 'Die perfekte Béchamel',
      description: 'Stelle eine klumpenfreie Béchamel-Sauce her.',
      checklist: [
        { text: 'Mache einen hellen Roux (Butter + Mehl, 2 Min anschwitzen)' },
        { text: 'Erwärme die Milch separat' },
        { text: 'Gib die warme Milch nach und nach zum Roux, rühre ständig' },
        { text: 'Lasse die Sauce 5-7 Min köcheln, bis sie eindickt' },
        { text: 'Schmecke ab mit Salz, Pfeffer, Muskat' },
        { text: 'Ist die Sauce glatt und cremig ohne Klumpen? Perfekt!' }
      ]
    },
    en: {
      title: 'The Perfect Béchamel',
      description: 'Make a lump-free Béchamel sauce.',
      checklist: [
        { text: 'Make a white roux (butter + flour, cook 2 min)' },
        { text: 'Heat the milk separately' },
        { text: 'Add warm milk gradually to roux, stir constantly' },
        { text: 'Simmer sauce 5-7 min until it thickens' },
        { text: 'Season with salt, pepper, nutmeg' },
        { text: 'Is the sauce smooth and creamy without lumps? Perfect!' }
      ]
    }
  },
  
  notes: {
    de: [
      { front: 'Was ist ein Roux?', back: 'Eine Mischung aus Fett und Mehl, die zum Binden von Saucen verwendet wird. Es gibt 3 Stufen: hell, blond, braun.' },
      { front: 'Warum muss man Stärke in kalter Flüssigkeit anrühren?', back: 'Weil Stärke in heißer Flüssigkeit sofort verkleistert und Klumpen bildet.' },
      { front: 'Was bedeutet "Montieren"?', back: 'Mit kalter Butter binden. Die Butter wird bei niedriger Hitze eingerührt und emulgiert (nicht geschmolzen). Gibt Glanz und Geschmack.' },
      { front: 'Was ist eine Liaison?', back: 'Eine Mischung aus Eigelb und Sahne zum Binden feiner Saucen. Darf nicht mehr kochen (Ei gerinnt)!' }
    ],
    en: [
      { front: 'What is a roux?', back: 'A mixture of fat and flour used to thicken sauces. There are 3 stages: white, blond, brown.' },
      { front: 'Why must cornstarch be mixed in cold liquid?', back: 'Because starch gelatinizes instantly in hot liquid and forms lumps.' },
      { front: 'What does "Monter au Beurre" mean?', back: 'Mounting with cold butter. Butter is whisked in at low heat and emulsifies (not melted). Gives shine and flavor.' },
      { front: 'What is a liaison?', back: 'A mixture of egg yolk and cream for thickening fine sauces. Must not boil anymore (egg curdles)!' }
    ]
  }
};
