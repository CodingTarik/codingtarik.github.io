import React from 'react';

export const drinksLesson = {
  id: 'c4_m4_drinks',
  title: { 
    en: '4.11 Drinks & Refreshments', 
    de: '4.11 Getränke & Erfrischungen' 
  },
  description: { 
    en: 'From perfect coffee to homemade lemonade and smoothies.', 
    de: 'Vom perfekten Kaffee bis zu hausgemachter Limonade und Smoothies.' 
  },
  category: 'theory',
  
  content: {
    de: (
      <div className="space-y-6">
        <div>
          <h2 className="text-3xl font-bold text-purple-700 dark:text-purple-400 mb-4">Flüssiges Gold ☕🍹</h2>
          <p className="text-lg leading-relaxed">
            Kochen hört nicht beim Essen auf. Ein selbstgemachtes Getränk ist oft gesünder und günstiger als Gekauftes. 
            Und Kaffee kochen ist eine Wissenschaft für sich.
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-stone-800 dark:text-stone-100 mb-4">
            1. Die Kaffee-Kunst ☕
          </h3>
          
          <div className="bg-stone-100 dark:bg-stone-800 p-6 rounded-xl border-l-4 border-stone-600">
            <p className="mb-3 font-bold">Die "Golden Rules" für besseren Kaffee:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Frisch mahlen:</strong> Gemahlener Kaffee verliert nach 15 Minuten 60% des Aromas.</li>
              <li><strong>Kein kochendes Wasser:</strong> 100°C verbrennt den Kaffee (wird bitter). Ideal: 92-96°C (nach dem Kochen 1 Min warten).</li>
              <li><strong>French Press:</strong> Grob mahlen, 4 Minuten ziehen lassen.</li>
              <li><strong>Filterkaffee:</strong> Mittel mahlen, Papier vorher ausspülen (entfernt Papiergeschmack).</li>
            </ul>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-stone-800 dark:text-stone-100 mb-4">
            2. Kalte Erfrischungen 🧊
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-yellow-50 dark:bg-yellow-900/20 p-5 rounded-xl">
              <h4 className="font-bold text-xl mb-2 text-yellow-800 dark:text-yellow-100">Hausgemachte Limo 🍋</h4>
              <p className="text-sm mb-2">Vergiss Fanta & Co.</p>
              <ol className="list-decimal list-inside text-sm space-y-1">
                <li><strong>Sirup herstellen:</strong> 1 Teil Zucker + 1 Teil Wasser aufkochen (hält ewig).</li>
                <li><strong>Mischen:</strong> Zitronensaft (frisch!) + Sirup + Sprudelwasser.</li>
                <li><strong>Deko:</strong> Minze, Zitronenscheiben, Eis.</li>
              </ol>
            </div>

            <div className="bg-red-50 dark:bg-red-900/20 p-5 rounded-xl">
              <h4 className="font-bold text-xl mb-2 text-red-800 dark:text-red-100">Eistee (Cold Brew) 🍵</h4>
              <p className="text-sm mb-2">Kein Zucker-Schock aus dem Tetrapack.</p>
              <ol className="list-decimal list-inside text-sm space-y-1">
                <li><strong>Kalt ansetzen:</strong> Teebeutel in kaltes Wasser geben.</li>
                <li><strong>Ziehen:</strong> Über Nacht im Kühlschrank lassen (wird nicht bitter!).</li>
                <li><strong>Verfeinern:</strong> Mit Pfirsichstücken oder Zitrone servieren.</li>
              </ol>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-stone-800 dark:text-stone-100 mb-4">
            3. Smoothies (Die Vitamin-Bombe) 🍌
          </h3>
          <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border-2 border-green-300 dark:border-green-700">
            <h4 className="font-bold text-xl mb-2 text-green-800 dark:text-green-100">Die Formel für perfekte Smoothies</h4>
            <div className="grid grid-cols-2 gap-4 mt-3">
              <div>
                <p className="font-bold">1. Basis (Flüssigkeit)</p>
                <p className="text-sm">Wasser, Kokoswasser, Milch, Hafermilch, Joghurt.</p>
              </div>
              <div>
                <p className="font-bold">2. Cremigkeit</p>
                <p className="text-sm">Banane (gefroren!), Avocado, Mango.</p>
              </div>
              <div>
                <p className="font-bold">3. Geschmack</p>
                <p className="text-sm">Beeren, Ananas, Spinat (schmeckt man nicht!), Kakao.</p>
              </div>
              <div>
                <p className="font-bold">4. Booster (Optional)</p>
                <p className="text-sm">Leinsamen, Chiasamen, Proteinpulver, Ingwer.</p>
              </div>
            </div>
            <p className="mt-4 italic text-sm bg-white dark:bg-stone-700 p-2 rounded">
              💡 <strong>Tipp:</strong> Überreife Bananen schälen, in Stücke brechen und einfrieren. Macht Smoothies eiskalt und cremig wie Milchshake!
            </p>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-stone-800 dark:text-stone-100 mb-4">
            4. Infused Water (Aromatisiertes Wasser) 💧
          </h3>
          <p className="mb-3">Trinken ist wichtig, aber Wasser ist langweilig? Pimp it!</p>
          <table className="w-full border-collapse text-sm md:text-base">
            <thead>
              <tr className="bg-stone-200 dark:bg-stone-700">
                <th className="border border-stone-300 dark:border-stone-600 p-3 text-left">Kombi</th>
                <th className="border border-stone-300 dark:border-stone-600 p-3 text-left">Wirkung</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-stone-300 dark:border-stone-600 p-3"><strong>Zitrone + Ingwer</strong></td>
                <td className="border border-stone-300 dark:border-stone-600 p-3">Erfrischend, stoffwechselanregend.</td>
              </tr>
              <tr>
                <td className="border border-stone-300 dark:border-stone-600 p-3"><strong>Gurke + Minze</strong></td>
                <td className="border border-stone-300 dark:border-stone-600 p-3">Kühlend, wie im Spa.</td>
              </tr>
              <tr>
                <td className="border border-stone-300 dark:border-stone-600 p-3"><strong>Beeren + Rosmarin</strong></td>
                <td className="border border-stone-300 dark:border-stone-600 p-3">Süßlich-herb, interessant.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-xl border-2 border-yellow-300 dark:border-yellow-700">
          <h3 className="text-xl font-bold text-yellow-800 dark:text-yellow-100 mb-4">🎯 Praktische Übung</h3>
          <p className="mb-4 font-bold">Mach deine eigene Limonade:</p>
          <ol className="list-decimal list-inside space-y-2 ml-4">
            <li>Löse 2 EL Zucker in 2 EL heißem Wasser auf (Sirup). Lass abkühlen.</li>
            <li>Presse 1-2 Zitronen aus.</li>
            <li>Gib Sirup und Zitronensaft in ein Glas.</li>
            <li>Fülle mit Eiswürfeln auf.</li>
            <li>Gieße kaltes Mineralwasser darüber.</li>
            <li>Garniere mit Minze.</li>
          </ol>
        </div>
      </div>
    ),
    en: (
      <div className="space-y-6">
        <div>
          <h2 className="text-3xl font-bold text-purple-700 dark:text-purple-400 mb-4">Liquid Gold ☕🍹</h2>
          <p className="text-lg leading-relaxed">
            Cooking doesn't stop at food. A homemade drink is often healthier and cheaper than store-bought. 
            And making coffee is a science in itself.
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-stone-800 dark:text-stone-100 mb-4">
            1. Coffee Art ☕
          </h3>
          
          <div className="bg-stone-100 dark:bg-stone-800 p-6 rounded-xl border-l-4 border-stone-600">
            <p className="mb-3 font-bold">The "Golden Rules" for better coffee:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Grind fresh:</strong> Ground coffee loses 60% of its aroma after 15 minutes.</li>
              <li><strong>No boiling water:</strong> 100°C burns the coffee (becomes bitter). Ideal: 92-96°C (wait 1 min after boiling).</li>
              <li><strong>French Press:</strong> Coarse grind, steep for 4 minutes.</li>
              <li><strong>Filter Coffee:</strong> Medium grind, rinse paper beforehand (removes paper taste).</li>
            </ul>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-stone-800 dark:text-stone-100 mb-4">
            2. Cold Refreshments 🧊
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-yellow-50 dark:bg-yellow-900/20 p-5 rounded-xl">
              <h4 className="font-bold text-xl mb-2 text-yellow-800 dark:text-yellow-100">Homemade Lemonade 🍋</h4>
              <p className="text-sm mb-2">Forget Fanta & Co.</p>
              <ol className="list-decimal list-inside text-sm space-y-1">
                <li><strong>Make Syrup:</strong> Boil 1 part sugar + 1 part water (lasts forever).</li>
                <li><strong>Mix:</strong> Lemon juice (fresh!) + syrup + sparkling water.</li>
                <li><strong>Decor:</strong> Mint, lemon slices, ice.</li>
              </ol>
            </div>

            <div className="bg-red-50 dark:bg-red-900/20 p-5 rounded-xl">
              <h4 className="font-bold text-xl mb-2 text-red-800 dark:text-red-100">Iced Tea (Cold Brew) 🍵</h4>
              <p className="text-sm mb-2">No sugar shock from the carton.</p>
              <ol className="list-decimal list-inside text-sm space-y-1">
                <li><strong>Start Cold:</strong> Put tea bags in cold water.</li>
                <li><strong>Steep:</strong> Leave in fridge overnight (doesn't get bitter!).</li>
                <li><strong>Refine:</strong> Serve with peach pieces or lemon.</li>
              </ol>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-stone-800 dark:text-stone-100 mb-4">
            3. Smoothies (The Vitamin Bomb) 🍌
          </h3>
          <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border-2 border-green-300 dark:border-green-700">
            <h4 className="font-bold text-xl mb-2 text-green-800 dark:text-green-100">The Formula for Perfect Smoothies</h4>
            <div className="grid grid-cols-2 gap-4 mt-3">
              <div>
                <p className="font-bold">1. Base (Liquid)</p>
                <p className="text-sm">Water, coconut water, milk, oat milk, yogurt.</p>
              </div>
              <div>
                <p className="font-bold">2. Creaminess</p>
                <p className="text-sm">Banana (frozen!), avocado, mango.</p>
              </div>
              <div>
                <p className="font-bold">3. Flavor</p>
                <p className="text-sm">Berries, pineapple, spinach (can't taste it!), cocoa.</p>
              </div>
              <div>
                <p className="font-bold">4. Booster (Optional)</p>
                <p className="text-sm">Flax seeds, chia seeds, protein powder, ginger.</p>
              </div>
            </div>
            <p className="mt-4 italic text-sm bg-white dark:bg-stone-700 p-2 rounded">
              💡 <strong>Tip:</strong> Peel overripe bananas, break into pieces and freeze. Makes smoothies ice-cold and creamy like milkshake!
            </p>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-stone-800 dark:text-stone-100 mb-4">
            4. Infused Water 💧
          </h3>
          <p className="mb-3">Drinking is important, but water is boring? Pimp it!</p>
          <table className="w-full border-collapse text-sm md:text-base">
            <thead>
              <tr className="bg-stone-200 dark:bg-stone-700">
                <th className="border border-stone-300 dark:border-stone-600 p-3 text-left">Combo</th>
                <th className="border border-stone-300 dark:border-stone-600 p-3 text-left">Effect</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-stone-300 dark:border-stone-600 p-3"><strong>Lemon + Ginger</strong></td>
                <td className="border border-stone-300 dark:border-stone-600 p-3">Refreshing, boosts metabolism.</td>
              </tr>
              <tr>
                <td className="border border-stone-300 dark:border-stone-600 p-3"><strong>Cucumber + Mint</strong></td>
                <td className="border border-stone-300 dark:border-stone-600 p-3">Cooling, spa-like.</td>
              </tr>
              <tr>
                <td className="border border-stone-300 dark:border-stone-600 p-3"><strong>Berries + Rosemary</strong></td>
                <td className="border border-stone-300 dark:border-stone-600 p-3">Sweet-herbal, interesting.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-xl border-2 border-yellow-300 dark:border-yellow-700">
          <h3 className="text-xl font-bold text-yellow-800 dark:text-yellow-100 mb-4">🎯 Practical Exercise</h3>
          <p className="mb-4 font-bold">Make your own Lemonade:</p>
          <ol className="list-decimal list-inside space-y-2 ml-4">
            <li>Dissolve 2 tbsp sugar in 2 tbsp hot water (syrup). Let cool.</li>
            <li>Squeeze 1-2 lemons.</li>
            <li>Add syrup and lemon juice to a glass.</li>
            <li>Fill with ice cubes.</li>
            <li>Pour cold sparkling water over it.</li>
            <li>Garnish with mint.</li>
          </ol>
        </div>
      </div>
    )
  },

  task: {
    de: {
      title: 'Frische Limonade mixen',
      description: 'Stelle ein Glas frische Limonade her.',
      checklist: [
        { text: 'Stelle Zuckersirup her (Zucker + heißes Wasser)' },
        { text: 'Presse Zitrone frisch aus' },
        { text: 'Mische Sirup, Saft und Eis' },
        { text: 'Fülle mit Sprudelwasser auf' },
        { text: 'Genieße eiskalt' }
      ]
    },
    en: {
      title: 'Mix fresh Lemonade',
      description: 'Make a glass of fresh lemonade.',
      checklist: [
        { text: 'Make sugar syrup (sugar + hot water)' },
        { text: 'Squeeze fresh lemon' },
        { text: 'Mix syrup, juice and ice' },
        { text: 'Fill up with sparkling water' },
        { text: 'Enjoy ice cold' }
      ]
    }
  },
  
  notes: {
    de: [
      { front: 'Warum kein kochendes Wasser für Kaffee?', back: 'Es verbrennt die Bohnen und macht den Kaffee bitter. Ideal: 92-96°C.' },
      { front: 'Was ist der Vorteil von Cold Brew Tee?', back: 'Er wird nicht bitter, da sich Bitterstoffe nur bei Hitze lösen.' },
      { front: 'Wie werden Smoothies cremiger?', back: 'Mit gefrorener Banane oder Avocado.' },
      { front: 'Warum Filterpapier ausspülen?', back: 'Um den Papiergeschmack zu entfernen, bevor der Kaffee durchläuft.' }
    ],
    en: [
      { front: 'Why no boiling water for coffee?', back: 'It burns the beans and makes coffee bitter. Ideal: 92-96°C.' },
      { front: 'What is the benefit of Cold Brew tea?', back: 'It doesn\'t get bitter, as tannins only release with heat.' },
      { front: 'How to make smoothies creamier?', back: 'With frozen banana or avocado.' },
      { front: 'Why rinse filter paper?', back: 'To remove the paper taste before the coffee runs through.' }
    ]
  }
};


