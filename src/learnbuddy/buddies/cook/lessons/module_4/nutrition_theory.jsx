import React from 'react';

export const nutritionTheoryLesson = {
  id: 'c4_m4_nutrition',
  title: { 
    en: '4.1 Nutrition Theory', 
    de: '4.1 Ernährungstheorie' 
  },
  description: { 
    en: 'What are calories? Macros? How to read a nutrition label.', 
    de: 'Was sind Kalorien? Makros? Wie man eine Nährwerttabelle liest.' 
  },
  category: 'theory',
  
  content: {
    de: (
      <div className="space-y-6">
        <div>
          <h2 className="text-3xl font-bold text-blue-700 dark:text-blue-400 mb-4">Essen ist Treibstoff ⚡</h2>
          <p className="text-lg leading-relaxed">
            Du musst kein Ernährungswissenschaftler sein, um gut zu kochen. Aber ein paar Basics helfen dir, 
            bewusster zu essen und zu verstehen, warum manche Gerichte satt machen und andere nicht.
          </p>
        </div>

        <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border-2 border-blue-200 dark:border-blue-800">
          <h3 className="text-xl font-bold text-blue-900 dark:text-blue-100 mb-3">
            Was sind Kalorien?
          </h3>
          <p className="mb-3">
            Eine <strong>Kalorie</strong> (genauer: Kilokalorie, kcal) ist eine Einheit für Energie. 
            Dein Körper braucht Energie für alles: Atmen, Denken, Bewegen.
          </p>
          <div className="bg-white dark:bg-stone-700 p-4 rounded-lg">
            <p className="mb-2"><strong>Faustregel für den Tagesbedarf:</strong></p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li><strong>Frauen:</strong> ca. 2000 kcal/Tag</li>
              <li><strong>Männer:</strong> ca. 2500 kcal/Tag</li>
              <li>Mehr bei Sport, weniger bei Bürojob</li>
            </ul>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-stone-800 dark:text-stone-100 mb-4">
            Die 3 Makronährstoffe
          </h3>
          <p className="mb-4">
            Makronährstoffe ("Makros") sind die Hauptbestandteile unserer Nahrung. Sie liefern Energie.
          </p>

          <div className="space-y-4">
            <div className="bg-yellow-50 dark:bg-yellow-900/20 p-5 rounded-lg">
              <h4 className="font-bold mb-3 text-lg flex items-center">
                <span className="text-3xl mr-3">🍞</span>
                1. Kohlenhydrate (Carbs)
              </h4>
              <p className="mb-3">
                <strong>Energielieferant:</strong> 4 kcal pro Gramm
              </p>
              <p className="mb-3">
                <strong>Funktion:</strong> Schnelle Energie für Gehirn und Muskeln
              </p>
              <div className="bg-white dark:bg-stone-700 p-4 rounded-lg mb-3">
                <p className="font-semibold mb-2">Wo sind sie?</p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Brot, Nudeln, Reis, Kartoffeln</li>
                  <li>Zucker, Honig, Früchte</li>
                  <li>Gemüse (weniger)</li>
                </ul>
              </div>
              <div className="bg-amber-50 dark:bg-amber-900/20 p-3 rounded">
                <p className="font-semibold mb-2">Gut zu wissen:</p>
                <p className="text-sm">
                  <strong>Einfache Kohlenhydrate</strong> (Zucker) geben schnelle Energie, aber auch schnellen Absturz. 
                  <strong>Komplexe Kohlenhydrate</strong> (Vollkorn) geben langsame, stabile Energie.
                </p>
              </div>
            </div>

            <div className="bg-red-50 dark:bg-red-900/20 p-5 rounded-lg">
              <h4 className="font-bold mb-3 text-lg flex items-center">
                <span className="text-3xl mr-3">🥩</span>
                2. Proteine (Eiweiß)
              </h4>
              <p className="mb-3">
                <strong>Energielieferant:</strong> 4 kcal pro Gramm
              </p>
              <p className="mb-3">
                <strong>Funktion:</strong> Baumaterial für Muskeln, Haut, Haare, Enzyme
              </p>
              <div className="bg-white dark:bg-stone-700 p-4 rounded-lg mb-3">
                <p className="font-semibold mb-2">Wo sind sie?</p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Fleisch, Fisch, Eier</li>
                  <li>Milchprodukte (Quark, Käse, Joghurt)</li>
                  <li>Hülsenfrüchte (Linsen, Bohnen, Kichererbsen)</li>
                  <li>Nüsse, Tofu, Tempeh</li>
                </ul>
              </div>
              <div className="bg-red-100 dark:bg-red-900/30 p-3 rounded">
                <p className="font-semibold mb-2">Gut zu wissen:</p>
                <p className="text-sm">
                  Protein macht lange satt und hilft beim Muskelaufbau. 
                  <strong>Faustregel:</strong> 0.8-1g Protein pro kg Körpergewicht pro Tag.
                </p>
              </div>
            </div>

            <div className="bg-green-50 dark:bg-green-900/20 p-5 rounded-lg">
              <h4 className="font-bold mb-3 text-lg flex items-center">
                <span className="text-3xl mr-3">🥑</span>
                3. Fette (Lipide)
              </h4>
              <p className="mb-3">
                <strong>Energielieferant:</strong> 9 kcal pro Gramm (mehr als doppelt so viel wie Carbs/Protein!)
              </p>
              <p className="mb-3">
                <strong>Funktion:</strong> Energiespeicher, Zellmembranen, Vitaminaufnahme (A, D, E, K)
              </p>
              <div className="bg-white dark:bg-stone-700 p-4 rounded-lg mb-3">
                <p className="font-semibold mb-2">Wo sind sie?</p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Öle (Olivenöl, Rapsöl, Kokosöl)</li>
                  <li>Butter, Sahne, Käse</li>
                  <li>Nüsse, Avocado</li>
                  <li>Fetter Fisch (Lachs, Makrele)</li>
                  <li>Fleisch (je nach Schnitt)</li>
                </ul>
              </div>
              <div className="bg-green-100 dark:bg-green-900/30 p-3 rounded">
                <p className="font-semibold mb-2">Gut zu wissen:</p>
                <p className="text-sm mb-2">
                  Fett ist NICHT böse! Es macht Essen schmackhaft und satt. Aber: Es hat viele Kalorien.
                </p>
                <p className="text-sm">
                  <strong>Gesunde Fette:</strong> Olivenöl, Nüsse, Avocado, fetter Fisch (Omega-3)
                  <br/>
                  <strong>Weniger gesund:</strong> Transfette (frittiert, industriell verarbeitet)
                </p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-stone-800 dark:text-stone-100 mb-4">
            Mikronährstoffe (Vitamine & Mineralstoffe)
          </h3>
          <p className="mb-4">
            Mikronährstoffe liefern keine Energie, aber sind essentiell für alle Körperfunktionen.
          </p>
          <div className="bg-purple-50 dark:bg-purple-900/20 p-5 rounded-lg">
            <p className="mb-3">
              <strong>Vitamine:</strong> A, B, C, D, E, K (z.B. Vitamin C in Zitrusfrüchten, Vitamin D in Fisch)
            </p>
            <p className="mb-3">
              <strong>Mineralstoffe:</strong> Eisen, Calcium, Magnesium, Zink (z.B. Eisen in Fleisch, Calcium in Milch)
            </p>
            <p className="text-sm italic">
              💡 <strong>Tipp:</strong> Iss bunt! Verschiedene Farben = verschiedene Nährstoffe.
            </p>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-stone-800 dark:text-stone-100 mb-4">
            Eine Nährwerttabelle lesen
          </h3>
          <div className="bg-stone-100 dark:bg-stone-800 p-5 rounded-lg">
            <p className="mb-3 font-semibold">Beispiel: Vollmilch (pro 100ml)</p>
            <table className="w-full border-collapse mb-4">
              <tbody>
                <tr className="border-b border-stone-300 dark:border-stone-600">
                  <td className="p-2"><strong>Energie</strong></td>
                  <td className="p-2 text-right">64 kcal</td>
                </tr>
                <tr className="border-b border-stone-300 dark:border-stone-600">
                  <td className="p-2">Fett</td>
                  <td className="p-2 text-right">3.5g</td>
                </tr>
                <tr className="border-b border-stone-300 dark:border-stone-600">
                  <td className="p-2">Kohlenhydrate</td>
                  <td className="p-2 text-right">4.8g</td>
                </tr>
                <tr className="border-b border-stone-300 dark:border-stone-600">
                  <td className="p-2 pl-6 text-sm">davon Zucker</td>
                  <td className="p-2 text-right text-sm">4.8g</td>
                </tr>
                <tr className="border-b border-stone-300 dark:border-stone-600">
                  <td className="p-2">Protein</td>
                  <td className="p-2 text-right">3.3g</td>
                </tr>
                <tr>
                  <td className="p-2">Salz</td>
                  <td className="p-2 text-right">0.1g</td>
                </tr>
              </tbody>
            </table>
            <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded">
              <p className="text-sm mb-2"><strong>Rechnung:</strong></p>
              <ul className="list-disc list-inside space-y-1 text-sm ml-4">
                <li>Fett: 3.5g × 9 kcal = 31.5 kcal</li>
                <li>Kohlenhydrate: 4.8g × 4 kcal = 19.2 kcal</li>
                <li>Protein: 3.3g × 4 kcal = 13.2 kcal</li>
                <li><strong>Gesamt: ca. 64 kcal</strong></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-stone-100 dark:bg-stone-800 p-6 rounded-xl">
          <h3 className="text-xl font-bold mb-4">🎯 Die goldenen Regeln</h3>
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="text-2xl mr-3">1️⃣</span>
              <span><strong>Balance:</strong> Alle 3 Makros sind wichtig (Carbs, Protein, Fett)</span>
            </li>
            <li className="flex items-start">
              <span className="text-2xl mr-3">2️⃣</span>
              <span><strong>Vielfalt:</strong> Iss bunt und abwechslungsreich</span>
            </li>
            <li className="flex items-start">
              <span className="text-2xl mr-3">3️⃣</span>
              <span><strong>Verarbeitung:</strong> Frisch > verarbeitet (mehr Nährstoffe)</span>
            </li>
            <li className="flex items-start">
              <span className="text-2xl mr-3">4️⃣</span>
              <span><strong>Hör auf deinen Körper:</strong> Hunger ≠ Langeweile</span>
            </li>
          </ul>
        </div>

        <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border-2 border-green-300 dark:border-green-700">
          <h3 className="text-xl font-bold text-green-800 dark:text-green-100 mb-4">🎯 Praktische Übung</h3>
          <p className="mb-4 font-semibold">Analysiere ein Gericht, das du oft kochst:</p>
          <ol className="list-decimal list-inside space-y-2 ml-4">
            <li>Schreibe alle Zutaten auf</li>
            <li>Identifiziere die Hauptquelle für:
              <ul className="list-disc list-inside ml-6 mt-1 space-y-1">
                <li>Kohlenhydrate (z.B. Nudeln, Reis)</li>
                <li>Protein (z.B. Fleisch, Tofu)</li>
                <li>Fett (z.B. Öl, Butter)</li>
              </ul>
            </li>
            <li>Ist das Gericht ausgewogen? Fehlt etwas?</li>
            <li>Wie könntest du es nährstoffreicher machen? (z.B. mehr Gemüse, Vollkorn statt Weißmehl)</li>
          </ol>
        </div>
      </div>
    ),
    en: (
      <div className="space-y-6">
        <div>
          <h2 className="text-3xl font-bold text-blue-700 dark:text-blue-400 mb-4">Food is Fuel ⚡</h2>
          <p className="text-lg leading-relaxed">
            You don't need to be a nutritionist to cook well. But knowing a few basics helps you 
            eat more consciously and understand why some dishes fill you up and others don't.
          </p>
        </div>

        <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border-2 border-blue-200 dark:border-blue-800">
          <h3 className="text-xl font-bold text-blue-900 dark:text-blue-100 mb-3">
            What are Calories?
          </h3>
          <p className="mb-3">
            A <strong>calorie</strong> (more precisely: kilocalorie, kcal) is a unit of energy. 
            Your body needs energy for everything: breathing, thinking, moving.
          </p>
          <div className="bg-white dark:bg-stone-700 p-4 rounded-lg">
            <p className="mb-2"><strong>Rule of thumb for daily needs:</strong></p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li><strong>Women:</strong> approx. 2000 kcal/day</li>
              <li><strong>Men:</strong> approx. 2500 kcal/day</li>
              <li>More with exercise, less with desk job</li>
            </ul>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-stone-800 dark:text-stone-100 mb-4">
            The 3 Macronutrients
          </h3>
          <p className="mb-4">
            Macronutrients ("macros") are the main components of our food. They provide energy.
          </p>

          <div className="space-y-4">
            <div className="bg-yellow-50 dark:bg-yellow-900/20 p-5 rounded-lg">
              <h4 className="font-bold mb-3 text-lg flex items-center">
                <span className="text-3xl mr-3">🍞</span>
                1. Carbohydrates (Carbs)
              </h4>
              <p className="mb-3">
                <strong>Energy source:</strong> 4 kcal per gram
              </p>
              <p className="mb-3">
                <strong>Function:</strong> Quick energy for brain and muscles
              </p>
              <div className="bg-white dark:bg-stone-700 p-4 rounded-lg mb-3">
                <p className="font-semibold mb-2">Where are they?</p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Bread, pasta, rice, potatoes</li>
                  <li>Sugar, honey, fruits</li>
                  <li>Vegetables (less)</li>
                </ul>
              </div>
              <div className="bg-amber-50 dark:bg-amber-900/20 p-3 rounded">
                <p className="font-semibold mb-2">Good to know:</p>
                <p className="text-sm">
                  <strong>Simple carbs</strong> (sugar) give quick energy but also quick crash. 
                  <strong>Complex carbs</strong> (whole grain) give slow, stable energy.
                </p>
              </div>
            </div>

            <div className="bg-red-50 dark:bg-red-900/20 p-5 rounded-lg">
              <h4 className="font-bold mb-3 text-lg flex items-center">
                <span className="text-3xl mr-3">🥩</span>
                2. Proteins
              </h4>
              <p className="mb-3">
                <strong>Energy source:</strong> 4 kcal per gram
              </p>
              <p className="mb-3">
                <strong>Function:</strong> Building material for muscles, skin, hair, enzymes
              </p>
              <div className="bg-white dark:bg-stone-700 p-4 rounded-lg mb-3">
                <p className="font-semibold mb-2">Where are they?</p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Meat, fish, eggs</li>
                  <li>Dairy (quark, cheese, yogurt)</li>
                  <li>Legumes (lentils, beans, chickpeas)</li>
                  <li>Nuts, tofu, tempeh</li>
                </ul>
              </div>
              <div className="bg-red-100 dark:bg-red-900/30 p-3 rounded">
                <p className="font-semibold mb-2">Good to know:</p>
                <p className="text-sm">
                  Protein keeps you full longer and helps build muscle. 
                  <strong>Rule of thumb:</strong> 0.8-1g protein per kg body weight per day.
                </p>
              </div>
            </div>

            <div className="bg-green-50 dark:bg-green-900/20 p-5 rounded-lg">
              <h4 className="font-bold mb-3 text-lg flex items-center">
                <span className="text-3xl mr-3">🥑</span>
                3. Fats (Lipids)
              </h4>
              <p className="mb-3">
                <strong>Energy source:</strong> 9 kcal per gram (more than double carbs/protein!)
              </p>
              <p className="mb-3">
                <strong>Function:</strong> Energy storage, cell membranes, vitamin absorption (A, D, E, K)
              </p>
              <div className="bg-white dark:bg-stone-700 p-4 rounded-lg mb-3">
                <p className="font-semibold mb-2">Where are they?</p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Oils (olive oil, canola oil, coconut oil)</li>
                  <li>Butter, cream, cheese</li>
                  <li>Nuts, avocado</li>
                  <li>Fatty fish (salmon, mackerel)</li>
                  <li>Meat (depending on cut)</li>
                </ul>
              </div>
              <div className="bg-green-100 dark:bg-green-900/30 p-3 rounded">
                <p className="font-semibold mb-2">Good to know:</p>
                <p className="text-sm mb-2">
                  Fat is NOT evil! It makes food tasty and filling. But: It has many calories.
                </p>
                <p className="text-sm">
                  <strong>Healthy fats:</strong> Olive oil, nuts, avocado, fatty fish (Omega-3)
                  <br/>
                  <strong>Less healthy:</strong> Trans fats (fried, industrially processed)
                </p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-stone-800 dark:text-stone-100 mb-4">
            Micronutrients (Vitamins & Minerals)
          </h3>
          <p className="mb-4">
            Micronutrients provide no energy but are essential for all body functions.
          </p>
          <div className="bg-purple-50 dark:bg-purple-900/20 p-5 rounded-lg">
            <p className="mb-3">
              <strong>Vitamins:</strong> A, B, C, D, E, K (e.g. Vitamin C in citrus, Vitamin D in fish)
            </p>
            <p className="mb-3">
              <strong>Minerals:</strong> Iron, Calcium, Magnesium, Zinc (e.g. Iron in meat, Calcium in milk)
            </p>
            <p className="text-sm italic">
              💡 <strong>Tip:</strong> Eat colorful! Different colors = different nutrients.
            </p>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-stone-800 dark:text-stone-100 mb-4">
            Reading a Nutrition Label
          </h3>
          <div className="bg-stone-100 dark:bg-stone-800 p-5 rounded-lg">
            <p className="mb-3 font-semibold">Example: Whole Milk (per 100ml)</p>
            <table className="w-full border-collapse mb-4">
              <tbody>
                <tr className="border-b border-stone-300 dark:border-stone-600">
                  <td className="p-2"><strong>Energy</strong></td>
                  <td className="p-2 text-right">64 kcal</td>
                </tr>
                <tr className="border-b border-stone-300 dark:border-stone-600">
                  <td className="p-2">Fat</td>
                  <td className="p-2 text-right">3.5g</td>
                </tr>
                <tr className="border-b border-stone-300 dark:border-stone-600">
                  <td className="p-2">Carbohydrates</td>
                  <td className="p-2 text-right">4.8g</td>
                </tr>
                <tr className="border-b border-stone-300 dark:border-stone-600">
                  <td className="p-2 pl-6 text-sm">of which sugars</td>
                  <td className="p-2 text-right text-sm">4.8g</td>
                </tr>
                <tr className="border-b border-stone-300 dark:border-stone-600">
                  <td className="p-2">Protein</td>
                  <td className="p-2 text-right">3.3g</td>
                </tr>
                <tr>
                  <td className="p-2">Salt</td>
                  <td className="p-2 text-right">0.1g</td>
                </tr>
              </tbody>
            </table>
            <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded">
              <p className="text-sm mb-2"><strong>Calculation:</strong></p>
              <ul className="list-disc list-inside space-y-1 text-sm ml-4">
                <li>Fat: 3.5g × 9 kcal = 31.5 kcal</li>
                <li>Carbs: 4.8g × 4 kcal = 19.2 kcal</li>
                <li>Protein: 3.3g × 4 kcal = 13.2 kcal</li>
                <li><strong>Total: approx. 64 kcal</strong></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-stone-100 dark:bg-stone-800 p-6 rounded-xl">
          <h3 className="text-xl font-bold mb-4">🎯 The Golden Rules</h3>
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="text-2xl mr-3">1️⃣</span>
              <span><strong>Balance:</strong> All 3 macros are important (carbs, protein, fat)</span>
            </li>
            <li className="flex items-start">
              <span className="text-2xl mr-3">2️⃣</span>
              <span><strong>Variety:</strong> Eat colorful and varied</span>
            </li>
            <li className="flex items-start">
              <span className="text-2xl mr-3">3️⃣</span>
              <span><strong>Processing:</strong> Fresh > processed (more nutrients)</span>
            </li>
            <li className="flex items-start">
              <span className="text-2xl mr-3">4️⃣</span>
              <span><strong>Listen to your body:</strong> Hunger ≠ Boredom</span>
            </li>
          </ul>
        </div>

        <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border-2 border-green-300 dark:border-green-700">
          <h3 className="text-xl font-bold text-green-800 dark:text-green-100 mb-4">🎯 Practical Exercise</h3>
          <p className="mb-4 font-semibold">Analyze a dish you often cook:</p>
          <ol className="list-decimal list-inside space-y-2 ml-4">
            <li>Write down all ingredients</li>
            <li>Identify the main source for:
              <ul className="list-disc list-inside ml-6 mt-1 space-y-1">
                <li>Carbohydrates (e.g. pasta, rice)</li>
                <li>Protein (e.g. meat, tofu)</li>
                <li>Fat (e.g. oil, butter)</li>
              </ul>
            </li>
            <li>Is the dish balanced? Is something missing?</li>
            <li>How could you make it more nutritious? (e.g. more vegetables, whole grain instead of white flour)</li>
          </ol>
        </div>
      </div>
    )
  },

  task: {
    de: {
      title: 'Nährwert-Analyse',
      description: 'Analysiere ein Gericht, das du oft kochst.',
      checklist: [
        { text: 'Wähle ein Gericht (z.B. Spaghetti Bolognese)' },
        { text: 'Identifiziere die Hauptquelle für Kohlenhydrate (z.B. Nudeln)' },
        { text: 'Identifiziere die Hauptquelle für Protein (z.B. Hackfleisch)' },
        { text: 'Identifiziere die Hauptquelle für Fett (z.B. Öl, Parmesan)' },
        { text: 'Ist das Gericht ausgewogen? Was könntest du hinzufügen?' }
      ]
    },
    en: {
      title: 'Nutrition Analysis',
      description: 'Analyze a dish you often cook.',
      checklist: [
        { text: 'Choose a dish (e.g. Spaghetti Bolognese)' },
        { text: 'Identify main source of carbohydrates (e.g. pasta)' },
        { text: 'Identify main source of protein (e.g. ground beef)' },
        { text: 'Identify main source of fat (e.g. oil, Parmesan)' },
        { text: 'Is the dish balanced? What could you add?' }
      ]
    }
  },
  
  notes: {
    de: [
      { front: 'Was sind die 3 Makronährstoffe?', back: 'Kohlenhydrate, Proteine, Fette. Sie liefern Energie und haben unterschiedliche Funktionen im Körper.' },
      { front: 'Wie viele Kalorien hat 1g Fett?', back: '9 kcal (mehr als doppelt so viel wie Kohlenhydrate oder Protein mit je 4 kcal)' },
      { front: 'Warum ist Protein wichtig?', back: 'Protein ist Baumaterial für Muskeln, Haut, Haare und Enzyme. Es macht auch lange satt.' },
      { front: 'Was sind Mikronährstoffe?', back: 'Vitamine und Mineralstoffe. Sie liefern keine Energie, sind aber essentiell für alle Körperfunktionen.' }
    ],
    en: [
      { front: 'What are the 3 macronutrients?', back: 'Carbohydrates, proteins, fats. They provide energy and have different functions in the body.' },
      { front: 'How many calories does 1g of fat have?', back: '9 kcal (more than double carbs or protein at 4 kcal each)' },
      { front: 'Why is protein important?', back: 'Protein is building material for muscles, skin, hair and enzymes. It also keeps you full longer.' },
      { front: 'What are micronutrients?', back: 'Vitamins and minerals. They provide no energy but are essential for all body functions.' }
    ]
  }
};

