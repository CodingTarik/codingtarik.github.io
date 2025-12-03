import React from 'react';

export const snacksFingerfoodLesson = {
  id: 'c4_m4_snacks',
  title: { 
    en: '4.10 Snacks & Fingerfood', 
    de: '4.10 Snacks & Fingerfood' 
  },
  description: { 
    en: 'Perfect for movie nights or guests: Homemade chips, antipasti, and more.', 
    de: 'Perfekt für Filmabende oder Gäste: Hausgemachte Chips, Antipasti und mehr.' 
  },
  category: 'theory',
  
  content: {
    de: (
      <div className="space-y-6">
        <div>
          <h2 className="text-3xl font-bold text-purple-700 dark:text-purple-400 mb-4">Kleine Happen, großer Genuss 🥨</h2>
          <p className="text-lg leading-relaxed">
            Snacks müssen nicht aus der Tüte kommen. Selbstgemachtes Fingerfood ist gesünder, 
            günstiger und beeindruckt jeden Gast.
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-stone-800 dark:text-stone-100 mb-4">
            1. Aus dem Backofen (Gesünder knabbern)
          </h3>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-orange-50 dark:bg-orange-900/20 p-5 rounded-xl">
              <h4 className="font-bold text-xl mb-2 text-orange-800 dark:text-orange-100">Ofengemüse / Pommes 🍟</h4>
              <ul className="list-disc list-inside text-sm space-y-1">
                <li><strong>Die Technik:</strong> Kartoffeln, Süßkartoffeln oder Karotten in Stifte schneiden.</li>
                <li><strong>Der Trick:</strong> In einer Schüssel mit Öl und Gewürzen mischen, nicht auf dem Blech ertränken!</li>
                <li><strong>Knusprig:</strong> Nicht übereinander stapeln. Luft muss zirkulieren.</li>
              </ul>
            </div>

            <div className="bg-stone-100 dark:bg-stone-800 p-5 rounded-xl">
              <h4 className="font-bold text-xl mb-2">Geröstete Nüsse 🥜</h4>
              <ul className="list-disc list-inside text-sm space-y-1">
                <li><strong>Warum?</strong> Warme Nüsse schmecken 10x intensiver.</li>
                <li><strong>Wie?</strong> Mandeln, Cashews oder Walnüsse mit Gewürzen (Rosmarin, Chili, Honig) mischen.</li>
                <li><strong>Backen:</strong> 10-15 Min bei 160°C (Vorsicht, verbrennen schnell!).</li>
              </ul>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-stone-800 dark:text-stone-100 mb-4">
            2. Frittierte Sünden (Manchmal muss es sein)
          </h3>
          <div className="space-y-4">
            <div className="bg-yellow-50 dark:bg-yellow-900/20 p-5 rounded-lg border-l-4 border-yellow-400">
              <h4 className="font-bold text-xl mb-2">Falafel (Kichererbsenbällchen) 🥙</h4>
              <p className="text-sm mb-2">
                Der vegane König des Streetfoods.
              </p>
              <div className="bg-white dark:bg-stone-700 p-3 rounded text-sm">
                <strong>WICHTIG:</strong> Nutze <span className="text-red-600 font-bold">eingeweichte ROHE</span> Kichererbsen, KEINE aus der Dose! 
                Dosen-Kichererbsen sind gekocht und zerfallen im Fett zu Brei.
              </div>
              <p className="text-sm mt-2">
                Alles im Mixer zerkleinern (Kichererbsen, Zwiebel, Petersilie, Koriander, Kreuzkümmel), Bällchen formen, frittieren.
              </p>
            </div>

            <div className="bg-yellow-50 dark:bg-yellow-900/20 p-5 rounded-lg border-l-4 border-yellow-400">
              <h4 className="font-bold text-xl mb-2">Onion Rings (Zwiebelringe) 🧅</h4>
              <p className="text-sm">
                Zwiebelscheiben in Bierteig (Mehl + Bier + Salz) tauchen und schwimmend ausbacken.
              </p>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-stone-800 dark:text-stone-100 mb-4">
            3. Kalte Platten (Antipasti)
          </h3>
          <div className="bg-white dark:bg-stone-800 shadow-md rounded-xl overflow-hidden">
            <table className="w-full text-left text-sm md:text-base">
              <thead className="bg-stone-200 dark:bg-stone-700">
                <tr>
                  <th className="p-3">Gericht</th>
                  <th className="p-3">Zutaten</th>
                  <th className="p-3">Tipp</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-200 dark:divide-stone-700">
                <tr>
                  <td className="p-3 font-bold">Caprese</td>
                  <td className="p-3">Tomate, Mozzarella, Basilikum</td>
                  <td className="p-3">Gutes Olivenöl & Balsamico sind Pflicht!</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold">Bruschetta</td>
                  <td className="p-3">Geröstetes Brot, Tomatenwürfel, Knoblauch</td>
                  <td className="p-3">Brot mit Knoblauchzehe abreiben.</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold">Mariniertes Gemüse</td>
                  <td className="p-3">Zucchini, Paprika, Auberginen (gegrillt)</td>
                  <td className="p-3">In Öl und Kräutern einlegen. Hält ewig.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border-2 border-green-300 dark:border-green-700">
          <h3 className="text-xl font-bold text-green-800 dark:text-green-100 mb-4">🎯 Praktische Übung</h3>
          <p className="mb-4 font-bold">Schnelle Bruschetta:</p>
          <ol className="list-decimal list-inside space-y-2 ml-4">
            <li>Schneide Tomaten in feine Würfel (Kerngehäuse entfernen, damit es nicht matscht).</li>
            <li>Mische sie mit gehacktem Basilikum, Salz, Pfeffer und Olivenöl.</li>
            <li>Röste Weißbrotscheiben (Toaster oder Pfanne).</li>
            <li>Reibe eine halbe Knoblauchzehe über das raue, geröstete Brot (gibt feines Aroma).</li>
            <li>Belege das Brot mit den Tomaten. Sofort essen!</li>
          </ol>
        </div>
      </div>
    ),
    en: (
      <div className="space-y-6">
        <div>
          <h2 className="text-3xl font-bold text-purple-700 dark:text-purple-400 mb-4">Small Bites, Big Joy 🥨</h2>
          <p className="text-lg leading-relaxed">
            Snacks don't have to come from a bag. Homemade finger food is healthier, 
            cheaper, and impresses every guest.
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-stone-800 dark:text-stone-100 mb-4">
            1. From the Oven (Healthier Nibbling)
          </h3>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-orange-50 dark:bg-orange-900/20 p-5 rounded-xl">
              <h4 className="font-bold text-xl mb-2 text-orange-800 dark:text-orange-100">Oven Veggies / Fries 🍟</h4>
              <ul className="list-disc list-inside text-sm space-y-1">
                <li><strong>The Technique:</strong> Cut potatoes, sweet potatoes, or carrots into sticks.</li>
                <li><strong>The Trick:</strong> Mix in a bowl with oil and spices, don't drown them on the tray!</li>
                <li><strong>Crispy:</strong> Do not stack. Air must circulate.</li>
              </ul>
            </div>

            <div className="bg-stone-100 dark:bg-stone-800 p-5 rounded-xl">
              <h4 className="font-bold text-xl mb-2">Roasted Nuts 🥜</h4>
              <ul className="list-disc list-inside text-sm space-y-1">
                <li><strong>Why?</strong> Warm nuts taste 10x more intense.</li>
                <li><strong>How?</strong> Mix almonds, cashews, or walnuts with spices (rosemary, chili, honey).</li>
                <li><strong>Bake:</strong> 10-15 min at 160°C (Careful, burn quickly!).</li>
              </ul>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-stone-800 dark:text-stone-100 mb-4">
            2. Fried Sins (Sometimes necessary)
          </h3>
          <div className="space-y-4">
            <div className="bg-yellow-50 dark:bg-yellow-900/20 p-5 rounded-lg border-l-4 border-yellow-400">
              <h4 className="font-bold text-xl mb-2">Falafel (Chickpea Balls) 🥙</h4>
              <p className="text-sm mb-2">
                The vegan king of street food.
              </p>
              <div className="bg-white dark:bg-stone-700 p-3 rounded text-sm">
                <strong>IMPORTANT:</strong> Use <span className="text-red-600 font-bold">soaked RAW</span> chickpeas, NOT canned ones! 
                Canned chickpeas are cooked and fall apart into mush in the fat.
              </div>
              <p className="text-sm mt-2">
                Blitz everything in a mixer (chickpeas, onion, parsley, cilantro, cumin), form balls, fry.
              </p>
            </div>

            <div className="bg-yellow-50 dark:bg-yellow-900/20 p-5 rounded-lg border-l-4 border-yellow-400">
              <h4 className="font-bold text-xl mb-2">Onion Rings 🧅</h4>
              <p className="text-sm">
                Dip onion slices in beer batter (flour + beer + salt) and deep fry.
              </p>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-stone-800 dark:text-stone-100 mb-4">
            3. Cold Platters (Antipasti)
          </h3>
          <div className="bg-white dark:bg-stone-800 shadow-md rounded-xl overflow-hidden">
            <table className="w-full text-left text-sm md:text-base">
              <thead className="bg-stone-200 dark:bg-stone-700">
                <tr>
                  <th className="p-3">Dish</th>
                  <th className="p-3">Ingredients</th>
                  <th className="p-3">Tip</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-200 dark:divide-stone-700">
                <tr>
                  <td className="p-3 font-bold">Caprese</td>
                  <td className="p-3">Tomato, Mozzarella, Basil</td>
                  <td className="p-3">Good olive oil & balsamic are mandatory!</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold">Bruschetta</td>
                  <td className="p-3">Toasted bread, diced tomatoes, garlic</td>
                  <td className="p-3">Rub bread with garlic clove.</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold">Marinated Veggies</td>
                  <td className="p-3">Zucchini, Peppers, Eggplant (grilled)</td>
                  <td className="p-3">Pickle in oil and herbs. Lasts forever.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border-2 border-green-300 dark:border-green-700">
          <h3 className="text-xl font-bold text-green-800 dark:text-green-100 mb-4">🎯 Practical Exercise</h3>
          <p className="mb-4 font-bold">Quick Bruschetta:</p>
          <ol className="list-decimal list-inside space-y-2 ml-4">
            <li>Cut tomatoes into fine cubes (remove seeds so it doesn't get soggy).</li>
            <li>Mix with chopped basil, salt, pepper, and olive oil.</li>
            <li>Toast white bread slices (toaster or pan).</li>
            <li>Rub half a garlic clove over the rough, toasted bread (gives subtle aroma).</li>
            <li>Top bread with tomatoes. Eat immediately!</li>
          </ol>
        </div>
      </div>
    )
  },

  task: {
    de: {
      title: 'Bruschetta machen',
      description: 'Bereite klassische italienische Bruschetta zu.',
      checklist: [
        { text: 'Würfle Tomaten fein' },
        { text: 'Mische mit Öl und Basilikum' },
        { text: 'Röste Brot knusprig' },
        { text: 'Reibe Knoblauch über das Brot' },
        { text: 'Belege und serviere sofort' }
      ]
    },
    en: {
      title: 'Make Bruschetta',
      description: 'Prepare classic Italian Bruschetta.',
      checklist: [
        { text: 'Dice tomatoes finely' },
        { text: 'Mix with oil and basil' },
        { text: 'Toast bread until crispy' },
        { text: 'Rub garlic over the bread' },
        { text: 'Top and serve immediately' }
      ]
    }
  },
  
  notes: {
    de: [
      { front: 'Warum zerfallen Falafel oft beim Frittieren?', back: 'Weil Dosen-Kichererbsen verwendet wurden. Man muss rohe, eingeweichte nehmen!' },
      { front: 'Wie werden Ofenpommes knusprig?', back: 'Nicht stapeln, Platz lassen, hohe Hitze, vorher trocknen.' },
      { front: 'Was ist der Schlüssel zu guter Bruschetta?', back: 'Das Abreiben des gerösteten Brotes mit frischem Knoblauch.' },
      { front: 'Was ist Caprese?', back: 'Tomate, Mozzarella und Basilikum (die Farben Italiens).' }
    ],
    en: [
      { front: 'Why do falafels often fall apart when frying?', back: 'Because canned chickpeas were used. You must use raw, soaked ones!' },
      { front: 'How do oven fries get crispy?', back: 'Don\'t stack, leave space, high heat, dry beforehand.' },
      { front: 'What is the key to good Bruschetta?', back: 'Rubbing the toasted bread with fresh garlic.' },
      { front: 'What is Caprese?', back: 'Tomato, Mozzarella, and Basil (the colors of Italy).' }
    ]
  }
};


