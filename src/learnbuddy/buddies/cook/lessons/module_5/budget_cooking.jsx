import React from 'react';

export const budgetCookingLesson = {
  id: 'c5_m5_budget',
  title: { 
    en: '5.5 Budget Cooking & Shopping', 
    de: '5.5 Budget-Kochen & Einkaufen' 
  },
  description: { 
    en: 'Eat like a king on a student budget. Smart shopping strategies.', 
    de: 'Essen wie ein König mit Studenten-Budget. Smarte Einkaufsstrategien.' 
  },
  category: 'management',
  
  content: {
    de: (
      <div className="space-y-6">
        <div>
          <h2 className="text-3xl font-bold text-purple-700 dark:text-purple-400 mb-4">Gourmet für wenig Geld 💰</h2>
          <p className="text-lg leading-relaxed">
            Gutes Essen muss nicht teuer sein. Die teuersten Zutaten (Filet, Trüffel) sind oft die langweiligsten. 
            Die wahren Schätze liegen im "Arme-Leute-Essen" der Weltküche.
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-stone-800 dark:text-stone-100 mb-4">
            1. Die Fleisch-Lüge
          </h3>
          <div className="bg-red-50 dark:bg-red-900/20 p-5 rounded-xl border-l-4 border-red-500">
            <p className="mb-3">
              Viele denken: "Gutes Fleisch = Teures Kurzbratfleisch (Filet, Steak)". <br/>
              <strong>Falsch!</strong>
            </p>
            <p className="text-sm mb-2">
              Günstige Stücke (Schulter, Keule, Nacken) haben viel mehr Geschmack, brauchen aber Zeit.
            </p>
            <ul className="list-disc list-inside text-sm space-y-1">
              <li><strong>Hähnchenschenkel</strong> statt Brust (saftiger, halber Preis).</li>
              <li><strong>Schweinenacken</strong> statt Schnitzel (perfekt für Pulled Pork/Gulasch).</li>
              <li><strong>Suppenfleisch</strong> statt Rinderfilet (wird nach 3h butterzart).</li>
            </ul>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-stone-800 dark:text-stone-100 mb-4">
            2. Die günstigen Helden (Sattmacher)
          </h3>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-yellow-50 dark:bg-yellow-900/20 p-5 rounded-xl">
              <h4 className="font-bold text-xl mb-2 text-yellow-800 dark:text-yellow-100">Kartoffeln & Reis</h4>
              <p className="text-sm">
                Kauf sie im großen Sack (2kg, 5kg). Kilopreis sinkt drastisch.
                <br/>Sie sind die Leinwand für deine Saucen.
              </p>
            </div>

            <div className="bg-green-50 dark:bg-green-900/20 p-5 rounded-xl">
              <h4 className="font-bold text-xl mb-2 text-green-800 dark:text-green-100">Hülsenfrüchte</h4>
              <p className="text-sm">
                Linsen, Bohnen, Kichererbsen.
                <br/>Die billigste Proteinquelle der Welt. Trocken gekauft noch günstiger als in der Dose (aber Einweichzeit beachten!).
              </p>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-stone-800 dark:text-stone-100 mb-4">
            3. Einkaufs-Strategien
          </h3>
          <div className="bg-white dark:bg-stone-700 shadow-sm rounded-lg p-5">
            <ol className="list-decimal list-inside space-y-3">
              <li>
                <strong>Saisonal ist billiger:</strong>
                <br/><span className="text-sm text-stone-600 dark:text-stone-400">Erdbeeren im Winter? Teuer & geschmacklos. Kohl im Winter? Billig & lecker. Google einen "Saisonkalender".</span>
              </li>
              <li>
                <strong>No-Name ist (oft) gleich:</strong>
                <br/><span className="text-sm text-stone-600 dark:text-stone-400">Mehl, Zucker, Salz, passierte Tomaten, Nudeln – hier schmeckt die Marke meist nicht anders.</span>
              </li>
              <li>
                <strong>Unten im Regal schauen:</strong>
                <br/><span className="text-sm text-stone-600 dark:text-stone-400">Teure Produkte stehen auf Augenhöhe ("Bückware" ist günstiger).</span>
              </li>
              <li>
                <strong>Niemals hungrig einkaufen:</strong>
                <br/><span className="text-sm text-stone-600 dark:text-stone-400">Du kaufst 30% mehr unnützes Zeug.</span>
              </li>
            </ol>
          </div>
        </div>

        <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border-2 border-green-300 dark:border-green-700">
          <h3 className="text-xl font-bold text-green-800 dark:text-green-100 mb-4">🎯 Praktische Übung</h3>
          <p className="mb-4 font-bold">Die 5-Euro-Challenge:</p>
          <p className="mb-2">Koche ein gesundes Abendessen für 2 Personen für unter 5 Euro.</p>
          <div className="bg-white dark:bg-stone-800 p-4 rounded text-sm italic">
            <p>Idee:</p>
            <ul className="list-disc list-inside">
              <li>Linseneintopf mit Karotten und Kartoffeln.</li>
              <li>Pasta mit selbstgemachter Tomatensauce (Dose Tomaten, Zwiebel, Knoblauch).</li>
              <li>Ofenkartoffeln mit Kräuterquark.</li>
            </ul>
          </div>
        </div>
      </div>
    ),
    en: (
      <div className="space-y-6">
        <div>
          <h2 className="text-3xl font-bold text-purple-700 dark:text-purple-400 mb-4">Gourmet on a Budget 💰</h2>
          <p className="text-lg leading-relaxed">
            Good food doesn't have to be expensive. The most expensive ingredients (fillet, truffle) are often the most boring. 
            The true treasures lie in the "poor man's food" of world cuisine.
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-stone-800 dark:text-stone-100 mb-4">
            1. The Meat Lie
          </h3>
          <div className="bg-red-50 dark:bg-red-900/20 p-5 rounded-xl border-l-4 border-red-500">
            <p className="mb-3">
              Many think: "Good meat = Expensive quick-fry meat (Fillet, Steak)". <br/>
              <strong>Wrong!</strong>
            </p>
            <p className="text-sm mb-2">
              Cheap cuts (shoulder, leg, neck) have much more flavor but need time.
            </p>
            <ul className="list-disc list-inside text-sm space-y-1">
              <li><strong>Chicken Thighs</strong> instead of breast (juicier, half the price).</li>
              <li><strong>Pork Neck</strong> instead of cutlet (perfect for Pulled Pork/Goulash).</li>
              <li><strong>Stewing Beef</strong> instead of fillet (becomes butter-tender after 3h).</li>
            </ul>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-stone-800 dark:text-stone-100 mb-4">
            2. The Cheap Heroes (Fillers)
          </h3>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-yellow-50 dark:bg-yellow-900/20 p-5 rounded-xl">
              <h4 className="font-bold text-xl mb-2 text-yellow-800 dark:text-yellow-100">Potatoes & Rice</h4>
              <p className="text-sm">
                Buy them in big bags (2kg, 5kg). Price per kg drops drastically.
                <br/>They are the canvas for your sauces.
              </p>
            </div>

            <div className="bg-green-50 dark:bg-green-900/20 p-5 rounded-xl">
              <h4 className="font-bold text-xl mb-2 text-green-800 dark:text-green-100">Legumes</h4>
              <p className="text-sm">
                Lentils, beans, chickpeas.
                <br/>The cheapest protein source in the world. Dried even cheaper than canned (but mind soaking time!).
              </p>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-stone-800 dark:text-stone-100 mb-4">
            3. Shopping Strategies
          </h3>
          <div className="bg-white dark:bg-stone-700 shadow-sm rounded-lg p-5">
            <ol className="list-decimal list-inside space-y-3">
              <li>
                <strong>Seasonal is cheaper:</strong>
                <br/><span className="text-sm text-stone-600 dark:text-stone-400">Strawberries in winter? Expensive & tasteless. Cabbage in winter? Cheap & tasty. Google a "seasonal calendar".</span>
              </li>
              <li>
                <strong>No-Name is (often) the same:</strong>
                <br/><span className="text-sm text-stone-600 dark:text-stone-400">Flour, sugar, salt, canned tomatoes, pasta – the brand usually doesn't taste different.</span>
              </li>
              <li>
                <strong>Look at the bottom shelf:</strong>
                <br/><span className="text-sm text-stone-600 dark:text-stone-400">Expensive products are at eye level (cheaper ones are lower down).</span>
              </li>
              <li>
                <strong>Never shop hungry:</strong>
                <br/><span className="text-sm text-stone-600 dark:text-stone-400">You buy 30% more useless stuff.</span>
              </li>
            </ol>
          </div>
        </div>

        <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border-2 border-green-300 dark:border-green-700">
          <h3 className="text-xl font-bold text-green-800 dark:text-green-100 mb-4">🎯 Practical Exercise</h3>
          <p className="mb-4 font-bold">The 5-Euro Challenge:</p>
          <p className="mb-2">Cook a healthy dinner for 2 people for under 5 Euro.</p>
          <div className="bg-white dark:bg-stone-800 p-4 rounded text-sm italic">
            <p>Idea:</p>
            <ul className="list-disc list-inside">
              <li>Lentil stew with carrots and potatoes.</li>
              <li>Pasta with homemade tomato sauce (canned tomatoes, onion, garlic).</li>
              <li>Oven potatoes with herb quark.</li>
            </ul>
          </div>
        </div>
      </div>
    )
  },

  task: {
    de: {
      title: 'Budget-Einkauf',
      description: 'Plane ein Gericht für unter 2,50€ pro Person.',
      checklist: [
        { text: 'Wähle eine günstige Basis (Reis/Kartoffel/Nudel)' },
        { text: 'Wähle saisonales Gemüse' },
        { text: 'Wähle günstiges Protein (Ei, Hülsenfrucht, Huhn)' },
        { text: 'Vergleiche Preise im Supermarkt (Kilo-Preis!)' },
        { text: 'Koche es!' }
      ]
    },
    en: {
      title: 'Budget Shopping',
      description: 'Plan a dish for under 2.50€ per person.',
      checklist: [
        { text: 'Choose a cheap base (Rice/Potato/Pasta)' },
        { text: 'Choose seasonal veggies' },
        { text: 'Choose cheap protein (Egg, Legume, Chicken)' },
        { text: 'Compare prices in supermarket (Price per kg!)' },
        { text: 'Cook it!' }
      ]
    }
  },
  
  notes: {
    de: [
      { front: 'Warum ist saisonales Einkaufen besser?', back: 'Es ist günstiger, umweltfreundlicher und schmeckt besser.' },
      { front: 'Was ist die "Bückware"?', back: 'Günstige Produkte, die im Regal ganz unten stehen.' },
      { front: 'Welches Fleisch ist am günstigsten?', back: 'Schulter, Nacken, Keule (Schmorstücke) und Hähnchenteile mit Knochen.' },
      { front: 'Was ist der Kilopreis?', back: 'Die kleine Zahl am Preisschild, die den echten Vergleich ermöglicht.' }
    ],
    en: [
      { front: 'Why is seasonal shopping better?', back: 'It is cheaper, more eco-friendly, and tastes better.' },
      { front: 'What are "bottom shelf goods"?', back: 'Cheaper products placed at the bottom of the shelf.' },
      { front: 'Which meat is cheapest?', back: 'Shoulder, neck, leg (braising cuts) and chicken parts with bone.' },
      { front: 'What is the price per kg?', back: 'The small number on the price tag that allows real comparison.' }
    ]
  }
};

