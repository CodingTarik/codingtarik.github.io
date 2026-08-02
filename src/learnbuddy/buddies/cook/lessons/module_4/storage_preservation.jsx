import React from 'react';

export const storagePreservationLesson = {
  id: 'c4_m4_storage',
  title: { 
    en: '4.4 Storage & Preservation', 
    de: '4.4 Lagerung & Haltbarkeit' 
  },
  description: { 
    en: 'How to store food correctly to reduce waste and save money.', 
    de: 'Wie man Lebensmittel richtig lagert, um Verschwendung zu vermeiden und Geld zu sparen.' 
  },
  category: 'theory',
  
  content: {
    de: (
      <div className="space-y-6">
        <div>
          <h2 className="text-3xl font-bold text-purple-700 dark:text-purple-400 mb-4">Länger frisch, weniger wegwerfen 🧊</h2>
          <p className="text-lg leading-relaxed">
            Richtige Lagerung ist der Schlüssel zu weniger Lebensmittelverschwendung und besserem Geschmack. 
            Viele Lebensmittel verderben nicht, weil sie alt sind, sondern weil sie falsch gelagert wurden.
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-stone-800 dark:text-stone-100 mb-4">
            1. Der Kühlschrank - Klimazonen verstehen
          </h3>
          
          <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border-2 border-blue-200 dark:border-blue-800 mb-4">
            <p className="mb-3">
              Ein Kühlschrank ist nicht überall gleich kalt. Nutze die Zonen!
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Oben (am wärmsten):</strong> Marmelade, Saucen, Gekochtes, Käse</li>
              <li><strong>Mitte:</strong> Milchprodukte (Joghurt, Quark, Sahne)</li>
              <li><strong>Unten (über dem Gemüsefach, am kältesten):</strong> Fleisch, Fisch, Wurst (schnell verderblich!)</li>
              <li><strong>Gemüsefach (feucht & mild):</strong> Obst, Gemüse, Salat</li>
              <li><strong>Tür (am wärmsten & schwankend):</strong> Eier, Butter, Getränke, Ketchup/Senf</li>
            </ul>
          </div>

          <div className="bg-red-50 dark:bg-red-900/20 p-5 rounded-lg">
            <h4 className="font-bold mb-3 text-red-800 dark:text-red-100">⚠️ Was gehört NICHT in den Kühlschrank?</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="font-bold">Tomaten 🍅</p>
                <p className="text-sm">Verlieren Aroma, werden mehlig.</p>
              </div>
              <div>
                <p className="font-bold">Kartoffeln 🥔</p>
                <p className="text-sm">Stärke wandelt sich in Zucker um (werden süß & glasig).</p>
              </div>
              <div>
                <p className="font-bold">Zwiebeln & Knoblauch 🧅</p>
                <p className="text-sm">Werden weich und schimmeln schneller (brauchen Luft!).</p>
              </div>
              <div>
                <p className="font-bold">Brot 🍞</p>
                <p className="text-sm">Trocknet schneller aus (Stärke retrogradiert).</p>
              </div>
              <div>
                <p className="font-bold">Honig 🍯</p>
                <p className="text-sm">Kristallisiert (wird fest).</p>
              </div>
              <div>
                <p className="font-bold">Basilikum 🌿</p>
                <p className="text-sm">Wird schwarz und welk (Kälteschock).</p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-stone-800 dark:text-stone-100 mb-4">
            2. Einfrieren - Die Zeit anhalten
          </h3>
          
          <div className="space-y-4">
            <div className="bg-indigo-50 dark:bg-indigo-900/20 p-5 rounded-lg">
              <h4 className="font-bold mb-3">Was lässt sich gut einfrieren?</h4>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li><strong>Brot:</strong> In Scheiben einfrieren, im Toaster auftauen (wie frisch!)</li>
                <li><strong>Fleisch/Fisch:</strong> Am besten vakuumiert (verhindert Gefrierbrand)</li>
                <li><strong>Suppen & Saucen:</strong> Portionsweise in Behältern/Beuteln</li>
                <li><strong>Kräuter:</strong> Gehackt in Eiswürfelformen (mit Wasser oder Öl)</li>
                <li><strong>Butter:</strong> Hält ewig</li>
              </ul>
            </div>

            <div className="bg-orange-50 dark:bg-orange-900/20 p-5 rounded-lg">
              <h4 className="font-bold mb-3">Was lässt sich SCHLECHT einfrieren?</h4>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li><strong>Salat & Gurken:</strong> Werden matschig (zu viel Wasser)</li>
                <li><strong>Rohe Kartoffeln:</strong> Werden süß und matschig</li>
                <li><strong>Sahne/Joghurt:</strong> Flocken aus (besser zum Kochen verwenden)</li>
                <li><strong>Gekochte Eier:</strong> Werden gummiartig</li>
                <li><strong>Mayonnaise:</strong> Emulsion trennt sich</li>
              </ul>
            </div>
            
            <div className="bg-stone-100 dark:bg-stone-800 p-4 rounded-lg">
               <p className="font-bold mb-2">❄️ Was ist Gefrierbrand?</p>
               <p className="text-sm">
                 Graue, trockene Stellen am Gefriergut. Entsteht, wenn Luft an das Lebensmittel kommt (Wasser sublimiert).
                 <br/><strong>Lösung:</strong> Luftdicht verpacken! (Vakuumieren oder Luft aus dem Beutel drücken).
               </p>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-stone-800 dark:text-stone-100 mb-4">
            3. Konservierungsmethoden (Überblick)
          </h3>
          <table className="w-full border-collapse text-sm md:text-base">
            <thead>
              <tr className="bg-stone-200 dark:bg-stone-700">
                <th className="border border-stone-300 dark:border-stone-600 p-3 text-left">Methode</th>
                <th className="border border-stone-300 dark:border-stone-600 p-3 text-left">Prinzip</th>
                <th className="border border-stone-300 dark:border-stone-600 p-3 text-left">Beispiele</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-stone-300 dark:border-stone-600 p-3"><strong>Einkochen (Einwecken)</strong></td>
                <td className="border border-stone-300 dark:border-stone-600 p-3">Hitze tötet Bakterien, Vakuum verschließt</td>
                <td className="border border-stone-300 dark:border-stone-600 p-3">Marmelade, Tomatensauce, Kompott</td>
              </tr>
              <tr>
                <td className="border border-stone-300 dark:border-stone-600 p-3"><strong>Einlegen (Sauer)</strong></td>
                <td className="border border-stone-300 dark:border-stone-600 p-3">Säure (Essig) verhindert Bakterienwachstum</td>
                <td className="border border-stone-300 dark:border-stone-600 p-3">Essiggurken, Mixed Pickles</td>
              </tr>
              <tr>
                <td className="border border-stone-300 dark:border-stone-600 p-3"><strong>Fermentieren</strong></td>
                <td className="border border-stone-300 dark:border-stone-600 p-3">Gute Bakterien (Milchsäure) verdrängen schlechte</td>
                <td className="border border-stone-300 dark:border-stone-600 p-3">Sauerkraut, Kimchi, Joghurt</td>
              </tr>
              <tr>
                <td className="border border-stone-300 dark:border-stone-600 p-3"><strong>Trocknen (Dörren)</strong></td>
                <td className="border border-stone-300 dark:border-stone-600 p-3">Wasserentzug stoppt Verderb</td>
                <td className="border border-stone-300 dark:border-stone-600 p-3">Trockenfrüchte, Pilze, Kräuter</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border-2 border-green-300 dark:border-green-700">
          <h3 className="text-xl font-bold text-green-800 dark:text-green-100 mb-4">🎯 Praktische Übung</h3>
          <p className="mb-4"><strong>Friere eine Suppe richtig ein:</strong></p>
          <ol className="list-decimal list-inside space-y-2 ml-4">
            <li>Koche eine Suppe (z.B. Gemüsesuppe).</li>
            <li>Lasse sie <strong>schnell abkühlen</strong> (Topf in kaltes Wasserbad stellen). Nie heiß in den Gefrierschrank!</li>
            <li>Fülle sie portionsweise in Behälter oder Gefrierbeutel.</li>
            <li>Lasse ca. 2cm Platz zum Rand (Flüssigkeit dehnt sich beim Gefrieren aus!).</li>
            <li>Beschrifte den Behälter (Inhalt + Datum).</li>
            <li>Friere sie ein.</li>
            <li><strong>Test:</strong> Taue sie nach einer Woche auf und erwärme sie. Schmeckt sie noch gut?</li>
          </ol>
        </div>
      </div>
    ),
    en: (
      <div className="space-y-6">
        <div>
          <h2 className="text-3xl font-bold text-purple-700 dark:text-purple-400 mb-4">Fresher for Longer, Less Waste 🧊</h2>
          <p className="text-lg leading-relaxed">
            Proper storage is the key to less food waste and better taste. 
            Many foods spoil not because they are old, but because they were stored incorrectly.
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-stone-800 dark:text-stone-100 mb-4">
            1. The Fridge - Understanding Climate Zones
          </h3>
          
          <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border-2 border-blue-200 dark:border-blue-800 mb-4">
            <p className="mb-3">
              A fridge is not equally cold everywhere. Use the zones!
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Top (warmest):</strong> Jam, sauces, cooked food, cheese</li>
              <li><strong>Middle:</strong> Dairy products (yogurt, quark, cream)</li>
              <li><strong>Bottom (above veggie drawer, coldest):</strong> Meat, fish, sausages (spoil quickly!)</li>
              <li><strong>Veggie Drawer (humid & mild):</strong> Fruit, vegetables, lettuce</li>
              <li><strong>Door (warmest & fluctuating):</strong> Eggs, butter, drinks, ketchup/mustard</li>
            </ul>
          </div>

          <div className="bg-red-50 dark:bg-red-900/20 p-5 rounded-lg">
            <h4 className="font-bold mb-3 text-red-800 dark:text-red-100">⚠️ What does NOT belong in the fridge?</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="font-bold">Tomatoes 🍅</p>
                <p className="text-sm">Lose flavor, become mealy.</p>
              </div>
              <div>
                <p className="font-bold">Potatoes 🥔</p>
                <p className="text-sm">Starch turns to sugar (become sweet & glassy).</p>
              </div>
              <div>
                <p className="font-bold">Onions & Garlic 🧅</p>
                <p className="text-sm">Become soft and mold faster (need air!).</p>
              </div>
              <div>
                <p className="font-bold">Bread 🍞</p>
                <p className="text-sm">Dries out faster (starch retrogradation).</p>
              </div>
              <div>
                <p className="font-bold">Honey 🍯</p>
                <p className="text-sm">Crystallizes (becomes hard).</p>
              </div>
              <div>
                <p className="font-bold">Basil 🌿</p>
                <p className="text-sm">Turns black and wilts (cold shock).</p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-stone-800 dark:text-stone-100 mb-4">
            2. Freezing - Pausing Time
          </h3>
          
          <div className="space-y-4">
            <div className="bg-indigo-50 dark:bg-indigo-900/20 p-5 rounded-lg">
              <h4 className="font-bold mb-3">What freezes well?</h4>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li><strong>Bread:</strong> Freeze in slices, toast directly (tastes fresh!)</li>
                <li><strong>Meat/Fish:</strong> Best vacuum-sealed (prevents freezer burn)</li>
                <li><strong>Soups & Sauces:</strong> In portions in containers/bags</li>
                <li><strong>Herbs:</strong> Chopped in ice cube trays (with water or oil)</li>
                <li><strong>Butter:</strong> Lasts forever</li>
              </ul>
            </div>

            <div className="bg-orange-50 dark:bg-orange-900/20 p-5 rounded-lg">
              <h4 className="font-bold mb-3">What freezes POORLY?</h4>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li><strong>Lettuce & Cucumber:</strong> Become mushy (too much water)</li>
                <li><strong>Raw Potatoes:</strong> Become sweet and mushy</li>
                <li><strong>Cream/Yogurt:</strong> Curdle (better used for cooking)</li>
                <li><strong>Cooked Eggs:</strong> Become rubbery</li>
                <li><strong>Mayonnaise:</strong> Emulsion separates</li>
              </ul>
            </div>
            
            <div className="bg-stone-100 dark:bg-stone-800 p-4 rounded-lg">
               <p className="font-bold mb-2">❄️ What is freezer burn?</p>
               <p className="text-sm">
                 Grey, dry spots on frozen food. Happens when air touches the food (water sublimates).
                 <br/><strong>Solution:</strong> Pack airtight! (Vacuum seal or squeeze air out of the bag).
               </p>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-stone-800 dark:text-stone-100 mb-4">
            3. Preservation Methods (Overview)
          </h3>
          <table className="w-full border-collapse text-sm md:text-base">
            <thead>
              <tr className="bg-stone-200 dark:bg-stone-700">
                <th className="border border-stone-300 dark:border-stone-600 p-3 text-left">Method</th>
                <th className="border border-stone-300 dark:border-stone-600 p-3 text-left">Principle</th>
                <th className="border border-stone-300 dark:border-stone-600 p-3 text-left">Examples</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-stone-300 dark:border-stone-600 p-3"><strong>Canning</strong></td>
                <td className="border border-stone-300 dark:border-stone-600 p-3">Heat kills bacteria, vacuum seals</td>
                <td className="border border-stone-300 dark:border-stone-600 p-3">Jam, tomato sauce, compote</td>
              </tr>
              <tr>
                <td className="border border-stone-300 dark:border-stone-600 p-3"><strong>Pickling</strong></td>
                <td className="border border-stone-300 dark:border-stone-600 p-3">Acid (vinegar) prevents bacteria growth</td>
                <td className="border border-stone-300 dark:border-stone-600 p-3">Pickles, mixed pickles</td>
              </tr>
              <tr>
                <td className="border border-stone-300 dark:border-stone-600 p-3"><strong>Fermenting</strong></td>
                <td className="border border-stone-300 dark:border-stone-600 p-3">Good bacteria (lactic acid) displace bad ones</td>
                <td className="border border-stone-300 dark:border-stone-600 p-3">Sauerkraut, kimchi, yogurt</td>
              </tr>
              <tr>
                <td className="border border-stone-300 dark:border-stone-600 p-3"><strong>Drying</strong></td>
                <td className="border border-stone-300 dark:border-stone-600 p-3">Removing water stops spoilage</td>
                <td className="border border-stone-300 dark:border-stone-600 p-3">Dried fruit, mushrooms, herbs</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border-2 border-green-300 dark:border-green-700">
          <h3 className="text-xl font-bold text-green-800 dark:text-green-100 mb-4">🎯 Practical Exercise</h3>
          <p className="mb-4"><strong>Freeze soup correctly:</strong></p>
          <ol className="list-decimal list-inside space-y-2 ml-4">
            <li>Cook a soup (e.g., vegetable soup).</li>
            <li>Let it <strong>cool down fast</strong> (place pot in cold water bath). Never put hot food in the freezer!</li>
            <li>Fill into containers or freezer bags in portions.</li>
            <li>Leave approx. 2cm space to the rim (liquid expands when freezing!).</li>
            <li>Label the container (Content + Date).</li>
            <li>Freeze it.</li>
            <li><strong>Test:</strong> Defrost after a week and reheat. Does it still taste good?</li>
          </ol>
        </div>
      </div>
    )
  },

  task: {
    de: {
      title: 'Suppe einfrieren',
      description: 'Friere eine Portion Suppe korrekt ein.',
      checklist: [
        { text: 'Koche eine Suppe und lasse sie abkühlen' },
        { text: 'Fülle sie in einen gefriergeeigneten Behälter' },
        { text: 'Lasse Platz zum Rand (Ausdehnung!)' },
        { text: 'Beschrifte den Behälter mit Datum und Inhalt' },
        { text: 'Friere sie ein' }
      ]
    },
    en: {
      title: 'Freeze Soup',
      description: 'Freeze a portion of soup correctly.',
      checklist: [
        { text: 'Cook a soup and let it cool' },
        { text: 'Fill into a freezer-safe container' },
        { text: 'Leave space at the rim (expansion!)' },
        { text: 'Label container with date and content' },
        { text: 'Freeze it' }
      ]
    }
  },
  
  notes: {
    de: [
      { front: 'Wo ist der kälteste Ort im Kühlschrank?', back: 'Ganz unten über dem Gemüsefach (für Fleisch/Fisch).' },
      { front: 'Warum gehören Tomaten nicht in den Kühlschrank?', back: 'Sie verlieren Aroma und werden mehlig.' },
      { front: 'Was ist Gefrierbrand?', back: 'Austrocknung an der Oberfläche durch Luftkontakt. Lösung: Luftdicht verpacken.' },
      { front: 'Warum sollte man warme Speisen nicht direkt in den Kühlschrank stellen?', back: 'Erhöht die Temperatur im ganzen Kühlschrank -> andere Lebensmittel verderben schneller.' }
    ],
    en: [
      { front: 'Where is the coldest place in the fridge?', back: 'At the very bottom above the veggie drawer (for meat/fish).' },
      { front: 'Why don\'t tomatoes belong in the fridge?', back: 'They lose flavor and become mealy.' },
      { front: 'What is freezer burn?', back: 'Surface dehydration due to air contact. Solution: Pack airtight.' },
      { front: 'Why shouldn\'t you put hot food directly in the fridge?', back: 'Raises temperature inside the fridge -> other food spoils faster.' }
    ]
  }
};

