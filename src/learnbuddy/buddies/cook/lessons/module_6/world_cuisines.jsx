import React from 'react';

export const worldCuisinesLesson = {
  id: 'c6_m6_world',
  title: { 
    en: '6.2 World Cuisines', 
    de: '6.2 Weltküchen' 
  },
  description: { 
    en: 'A culinary trip around the world: Pasta, Curry, Tacos.', 
    de: 'Eine kulinarische Weltreise: Pasta, Curry, Tacos.' 
  },
  category: 'world',
  
  content: {
    de: (
      <div className="space-y-6">
        <div>
          <h2 className="text-3xl font-bold text-purple-700 dark:text-purple-400 mb-4">Einmal um die Welt 🌍</h2>
          <p className="text-lg leading-relaxed">
            Jede Kultur hat ihre Geheimnisse. Wenn du die Grundprinzipien der großen Weltküchen verstehst, 
            brauchst du keine Rezepte mehr, um "italienisch" oder "asiatisch" zu kochen.
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-stone-800 dark:text-stone-100 mb-4">
            1. Italien (Weniger ist mehr) 🇮🇹
          </h3>
          <div className="bg-green-50 dark:bg-green-900/20 p-5 rounded-xl border-l-4 border-red-500">
            <p className="mb-3 font-bold">Das Prinzip: Exzellente Produkte, simple Zubereitung.</p>
            <ul className="list-disc list-inside text-sm space-y-2">
              <li><strong>Pasta:</strong> Muss in der Sauce fertig garen ("Mantecare"). Nudelwasser ist Gold wert (Stärke bindet!).</li>
              <li><strong>Soffritto:</strong> Die Basis fast aller Saucen (Zwiebel, Karotte, Stangensellerie - fein gewürfelt, sanft angedünstet).</li>
              <li><strong>Keine Sahne in Carbonara!</strong> Die Cremigkeit kommt von Eigelb + Käse + Nudelwasser.</li>
            </ul>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-stone-800 dark:text-stone-100 mb-4">
            2. Asien (Balance & Wok-Hei) 🌏
          </h3>
          <div className="bg-orange-50 dark:bg-orange-900/20 p-5 rounded-xl border-l-4 border-orange-500">
            <p className="mb-3 font-bold">Das Prinzip: Die 5 Geschmäcker ausbalancieren.</p>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <div><strong>Salzig:</strong> Sojasauce, Fischsauce.</div>
              <div><strong>Süß:</strong> Zucker, Mirin.</div>
              <div><strong>Sauer:</strong> Reisessig, Limette.</div>
              <div><strong>Scharf:</strong> Chili, Ingwer.</div>
              <div><strong>Umami:</strong> MSG, Pilze, Austernsauce.</div>
            </div>
            <p className="mt-3 text-sm">
              <strong>Technik:</strong> Alles vorbereiten (Mise en Place), dann extrem hohe Hitze und schnelles Rühren.
            </p>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-stone-800 dark:text-stone-100 mb-4">
            3. Mexiko (Frische & Feuer) 🇲🇽
          </h3>
          <div className="bg-yellow-50 dark:bg-yellow-900/20 p-5 rounded-xl border-l-4 border-green-500">
            <p className="mb-3 font-bold">Das Prinzip: Fettiges/Scharfes mit Frische kontern.</p>
            <ul className="list-disc list-inside text-sm space-y-2">
              <li><strong>Säure ist König:</strong> Limette gehört überall drauf.</li>
              <li><strong>Kräuter:</strong> Koriander (frisch!).</li>
              <li><strong>Gewürze:</strong> Kreuzkümmel (Cumin) ist der typische "Taco-Geschmack".</li>
              <li><strong>Tex-Mex vs. Echt:</strong> Echte Tacos sind weiche Maistortillas, keine harten Shells.</li>
            </ul>
          </div>
        </div>

        <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border-2 border-blue-300 dark:border-blue-700">
          <h3 className="text-xl font-bold text-blue-800 dark:text-blue-100 mb-4">🎯 Praktische Übung</h3>
          <p className="mb-4 font-bold">Crossover-Analyse:</p>
          <p className="mb-2">Koche Reis. Teile ihn in 3 Schüsseln.</p>
          <ol className="list-decimal list-inside space-y-2 ml-4">
            <li><strong>Italienisch:</strong> Mische mit Tomatenmark, Oregano, Olivenöl.</li>
            <li><strong>Asiatisch:</strong> Mische mit Sojasauce, Ingwer, Sesamöl.</li>
            <li><strong>Mexikanisch:</strong> Mische mit Limette, Koriander, Cumin.</li>
            <li>Probiere alle drei. Verstehe, wie Gewürze die Identität verändern.</li>
          </ol>
        </div>
      </div>
    ),
    en: (
      <div className="space-y-6">
        <div>
          <h2 className="text-3xl font-bold text-purple-700 dark:text-purple-400 mb-4">Around the World 🌍</h2>
          <p className="text-lg leading-relaxed">
            Every culture has its secrets. If you understand the basic principles of major world cuisines, 
            you no longer need recipes to cook "Italian" or "Asian".
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-stone-800 dark:text-stone-100 mb-4">
            1. Italy (Less is More) 🇮🇹
          </h3>
          <div className="bg-green-50 dark:bg-green-900/20 p-5 rounded-xl border-l-4 border-red-500">
            <p className="mb-3 font-bold">The Principle: Excellent products, simple preparation.</p>
            <ul className="list-disc list-inside text-sm space-y-2">
              <li><strong>Pasta:</strong> Must finish cooking in the sauce ("Mantecare"). Pasta water is gold (starch binds!).</li>
              <li><strong>Soffritto:</strong> The base of almost all sauces (Onion, Carrot, Celery - finely diced, gently sautéed).</li>
              <li><strong>No Cream in Carbonara!</strong> Creaminess comes from egg yolks + cheese + pasta water.</li>
            </ul>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-stone-800 dark:text-stone-100 mb-4">
            2. Asia (Balance & Wok-Hei) 🌏
          </h3>
          <div className="bg-orange-50 dark:bg-orange-900/20 p-5 rounded-xl border-l-4 border-orange-500">
            <p className="mb-3 font-bold">The Principle: Balancing the 5 tastes.</p>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <div><strong>Salty:</strong> Soy sauce, fish sauce.</div>
              <div><strong>Sweet:</strong> Sugar, mirin.</div>
              <div><strong>Sour:</strong> Rice vinegar, lime.</div>
              <div><strong>Spicy:</strong> Chili, ginger.</div>
              <div><strong>Umami:</strong> MSG, mushrooms, oyster sauce.</div>
            </div>
            <p className="mt-3 text-sm">
              <strong>Technique:</strong> Prep everything (Mise en Place), then extreme heat and fast stirring.
            </p>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-stone-800 dark:text-stone-100 mb-4">
            3. Mexico (Freshness & Fire) 🇲🇽
          </h3>
          <div className="bg-yellow-50 dark:bg-yellow-900/20 p-5 rounded-xl border-l-4 border-green-500">
            <p className="mb-3 font-bold">The Principle: Countering fatty/spicy with freshness.</p>
            <ul className="list-disc list-inside text-sm space-y-2">
              <li><strong>Acid is King:</strong> Lime goes on everything.</li>
              <li><strong>Herbs:</strong> Cilantro (fresh!).</li>
              <li><strong>Spices:</strong> Cumin is the typical "Taco taste".</li>
              <li><strong>Tex-Mex vs. Real:</strong> Real tacos are soft corn tortillas, not hard shells.</li>
            </ul>
          </div>
        </div>

        <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border-2 border-blue-300 dark:border-blue-700">
          <h3 className="text-xl font-bold text-blue-800 dark:text-blue-100 mb-4">🎯 Practical Exercise</h3>
          <p className="mb-4 font-bold">Crossover Analysis:</p>
          <p className="mb-2">Cook rice. Divide into 3 bowls.</p>
          <ol className="list-decimal list-inside space-y-2 ml-4">
            <li><strong>Italian:</strong> Mix with tomato paste, oregano, olive oil.</li>
            <li><strong>Asian:</strong> Mix with soy sauce, ginger, sesame oil.</li>
            <li><strong>Mexican:</strong> Mix with lime, cilantro, cumin.</li>
            <li>Taste all three. Understand how spices change identity.</li>
          </ol>
        </div>
      </div>
    )
  },

  task: {
    de: {
      title: 'Weltreise kochen',
      description: 'Koche ein Gericht aus einer der 3 Küchen authentisch.',
      checklist: [
        { text: 'Wähle eine Küche (Italien/Asien/Mexiko)' },
        { text: 'Besorge die typischen "Signature"-Zutaten' },
        { text: 'Beachte die Technik (Soffritto / Wok-Hei / Säure)' },
        { text: 'Koche es!' }
      ]
    },
    en: {
      title: 'Cook World Tour',
      description: 'Cook a dish from one of the 3 cuisines authentically.',
      checklist: [
        { text: 'Choose a cuisine (Italy/Asia/Mexico)' },
        { text: 'Get the typical "Signature" ingredients' },
        { text: 'Follow the technique (Soffritto / Wok-Hei / Acid)' },
        { text: 'Cook it!' }
      ]
    }
  },
  
  notes: {
    de: [
      { front: 'Was ist Soffritto?', back: 'Die italienische Basis aus Zwiebel, Karotte und Sellerie.' },
      { front: 'Welche 5 Geschmäcker müssen in Asien balanciert werden?', back: 'Süß, Sauer, Salzig, Scharf, Umami.' },
      { front: 'Was gehört in echte Carbonara?', back: 'Ei, Käse (Pecorino/Parmesan), Guanciale/Speck, Pfeffer. KEINE Sahne!' },
      { front: 'Was ist das wichtigste Gewürz für den "Taco-Geschmack"?', back: 'Kreuzkümmel (Cumin).' }
    ],
    en: [
      { front: 'What is Soffritto?', back: 'The Italian base of onion, carrot, and celery.' },
      { front: 'Which 5 tastes must be balanced in Asia?', back: 'Sweet, Sour, Salty, Spicy, Umami.' },
      { front: 'What goes into real Carbonara?', back: 'Egg, Cheese (Pecorino/Parmesan), Guanciale/Bacon, Pepper. NO Cream!' },
      { front: 'What is the most important spice for "Taco taste"?', back: 'Cumin.' }
    ]
  }
};

