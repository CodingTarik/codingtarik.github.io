import React from 'react';

export const troubleshootingLesson = {
  id: 'c5_m5_trouble',
  title: { 
    en: '5.3 Troubleshooting & Rescue', 
    de: '5.3 Fehlerbehebung & Rettung' 
  },
  description: { 
    en: 'Salty? Burnt? Too spicy? Don\'t throw it away, save it!', 
    de: 'Versalzen? Angebrannt? Zu scharf? Nicht wegwerfen, retten!' 
  },
  category: 'management',
  
  content: {
    de: (
      <div className="space-y-6">
        <div>
          <h2 className="text-3xl font-bold text-purple-700 dark:text-purple-400 mb-4">Erste Hilfe am Herd 🚑</h2>
          <p className="text-lg leading-relaxed">
            Jeder Koch macht Fehler. Der Unterschied zwischen Anfänger und Profi ist nicht, keine Fehler zu machen, 
            sondern zu wissen, wie man sie vertuscht (oder rettet).
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-stone-800 dark:text-stone-100 mb-4">
            1. Die Geschmacks-Waage
          </h3>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-red-50 dark:bg-red-900/20 p-5 rounded-xl">
              <h4 className="font-bold text-xl mb-2 text-red-800 dark:text-red-100">Zu Salzig 🧂</h4>
              <p className="text-sm mb-2">Der Klassiker.</p>
              <ul className="list-disc list-inside text-sm space-y-1">
                <li><strong>Mythos:</strong> Kartoffel mitkochen. (Zieht kaum Salz raus, saugt nur Flüssigkeit auf).</li>
                <li><strong>Lösung 1 (Verdünnen):</strong> Mehr Wasser/Brühe/Sahne dazu. Menge vergrößern.</li>
                <li><strong>Lösung 2 (Fett/Säure):</strong> Sahne, Butter oder ein Spritzer Zitrone maskieren das Salz etwas.</li>
                <li><strong>Lösung 3 (Beilage):</strong> Serviere es mit extrem ungesalzenem Reis/Nudeln.</li>
              </ul>
            </div>

            <div className="bg-orange-50 dark:bg-orange-900/20 p-5 rounded-xl">
              <h4 className="font-bold text-xl mb-2 text-orange-800 dark:text-orange-100">Zu Scharf 🌶️</h4>
              <ul className="list-disc list-inside text-sm space-y-1">
                <li><strong>Lösung:</strong> Fett und Zucker.</li>
                <li>Milchprodukte (Joghurt, Sahne, Kokosmilch) binden Capsaicin.</li>
                <li>Ein Löffel Honig oder Zucker mildert die Schärfe.</li>
              </ul>
            </div>
            
            <div className="bg-green-50 dark:bg-green-900/20 p-5 rounded-xl">
              <h4 className="font-bold text-xl mb-2 text-green-800 dark:text-green-100">Zu Sauer 🍋</h4>
              <ul className="list-disc list-inside text-sm space-y-1">
                <li><strong>Lösung:</strong> Süße (Zucker, Honig, Karotten) oder Fett (Sahne).</li>
                <li>Auch eine Prise Natron kann Säure neutralisieren (schäumt!).</li>
              </ul>
            </div>

            <div className="bg-yellow-50 dark:bg-yellow-900/20 p-5 rounded-xl">
              <h4 className="font-bold text-xl mb-2 text-yellow-800 dark:text-yellow-100">Zu Süß 🍬</h4>
              <ul className="list-disc list-inside text-sm space-y-1">
                <li><strong>Lösung:</strong> Säure (Zitrone, Essig) bringt Balance.</li>
              </ul>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-stone-800 dark:text-stone-100 mb-4">
            2. Technische Pannen
          </h3>
          <div className="space-y-4">
            <div className="bg-stone-800 text-white p-5 rounded-lg">
              <h4 className="font-bold text-lg mb-1">🔥 Angebrannt!</h4>
              <p className="text-sm font-bold text-red-400">REGEL NR. 1: NICHT RÜHREN!</p>
              <p className="text-sm mt-2">
                Wenn du rührst, verteilst du den verbrannten Geschmack im ganzen Essen.
                <br/><strong>Rettung:</strong> Topf vom Herd nehmen. Inhalt vorsichtig in einen neuen Topf umfüllen, OHNE den Boden abzukratzen.
              </p>
            </div>

            <div className="bg-blue-50 dark:bg-blue-900/20 p-5 rounded-lg border-l-4 border-blue-500">
              <h4 className="font-bold text-lg mb-1 text-blue-800 dark:text-blue-100">Sauce zu dünn 💧</h4>
              <ul className="list-disc list-inside text-sm space-y-1">
                <li><strong>Reduzieren:</strong> Kochen lassen, bis Wasser verdampft (intensiviert Geschmack).</li>
                <li><strong>Stärke:</strong> Speisestärke in kaltem Wasser anrühren, einrühren, aufkochen.</li>
                <li><strong>Mehlbutter:</strong> Weiche Butter mit Mehl verkneten und stückchenweise einrühren.</li>
              </ul>
            </div>

            <div className="bg-stone-100 dark:bg-stone-700 p-5 rounded-lg border-l-4 border-stone-500">
              <h4 className="font-bold text-lg mb-1 text-stone-800 dark:text-stone-100">Fleisch zu trocken 🥩</h4>
              <p className="text-sm">
                Das Steak ist "Well Done" statt "Medium"? Das kannst du nicht rückgängig machen.
                <br/><strong>Rettung:</strong> Schneide es in dünne Streifen und serviere es IN der Sauce oder als Ragout. Fett und Flüssigkeit kaschieren die Trockenheit.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border-2 border-green-300 dark:border-green-700">
          <h3 className="text-xl font-bold text-green-800 dark:text-green-100 mb-4">🎯 Praktische Übung</h3>
          <p className="mb-4 font-bold">Rette die Sauce:</p>
          <ol className="list-decimal list-inside space-y-2 ml-4">
            <li>Nimm eine Tasse Wasser, gib zu viel Salz hinein (es soll eklig schmecken).</li>
            <li>Versuche, es genießbar zu machen:</li>
            <li>Gib mehr Wasser dazu (Verdünnen).</li>
            <li>Gib einen Löffel Sahne/Milch dazu (Fett).</li>
            <li>Gib einen Spritzer Zitrone dazu (Ablenkung).</li>
            <li>Probiere nach jedem Schritt. Verstehe, wie sich der Salzgeschmack verändert.</li>
          </ol>
        </div>
      </div>
    ),
    en: (
      <div className="space-y-6">
        <div>
          <h2 className="text-3xl font-bold text-purple-700 dark:text-purple-400 mb-4">First Aid at the Stove 🚑</h2>
          <p className="text-lg leading-relaxed">
            Every cook makes mistakes. The difference between a beginner and a pro is not making zero mistakes, 
            but knowing how to cover them up (or fix them).
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-stone-800 dark:text-stone-100 mb-4">
            1. The Flavor Scale
          </h3>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-red-50 dark:bg-red-900/20 p-5 rounded-xl">
              <h4 className="font-bold text-xl mb-2 text-red-800 dark:text-red-100">Too Salty 🧂</h4>
              <p className="text-sm mb-2">The classic.</p>
              <ul className="list-disc list-inside text-sm space-y-1">
                <li><strong>Myth:</strong> Cooking a potato with it. (Draws out barely any salt, just soaks up liquid).</li>
                <li><strong>Solution 1 (Dilute):</strong> Add more water/broth/cream. Increase volume.</li>
                <li><strong>Solution 2 (Fat/Acid):</strong> Cream, butter, or a splash of lemon mask the salt a bit.</li>
                <li><strong>Solution 3 (Side Dish):</strong> Serve with extremely unsalted rice/pasta.</li>
              </ul>
            </div>

            <div className="bg-orange-50 dark:bg-orange-900/20 p-5 rounded-xl">
              <h4 className="font-bold text-xl mb-2 text-orange-800 dark:text-orange-100">Too Spicy 🌶️</h4>
              <ul className="list-disc list-inside text-sm space-y-1">
                <li><strong>Solution:</strong> Fat and sugar.</li>
                <li>Dairy products (yogurt, cream, coconut milk) bind capsaicin.</li>
                <li>A spoon of honey or sugar mellows the heat.</li>
              </ul>
            </div>
            
            <div className="bg-green-50 dark:bg-green-900/20 p-5 rounded-xl">
              <h4 className="font-bold text-xl mb-2 text-green-800 dark:text-green-100">Too Sour 🍋</h4>
              <ul className="list-disc list-inside text-sm space-y-1">
                <li><strong>Solution:</strong> Sweetness (sugar, honey, carrots) or Fat (cream).</li>
                <li>A pinch of baking soda can also neutralize acid (foams!).</li>
              </ul>
            </div>

            <div className="bg-yellow-50 dark:bg-yellow-900/20 p-5 rounded-xl">
              <h4 className="font-bold text-xl mb-2 text-yellow-800 dark:text-yellow-100">Too Sweet 🍬</h4>
              <ul className="list-disc list-inside text-sm space-y-1">
                <li><strong>Solution:</strong> Acid (lemon, vinegar) brings balance.</li>
              </ul>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-stone-800 dark:text-stone-100 mb-4">
            2. Technical Failures
          </h3>
          <div className="space-y-4">
            <div className="bg-stone-800 text-white p-5 rounded-lg">
              <h4 className="font-bold text-lg mb-1">🔥 Burnt!</h4>
              <p className="text-sm font-bold text-red-400">RULE NO. 1: DO NOT STIR!</p>
              <p className="text-sm mt-2">
                If you stir, you spread the burnt taste throughout the food.
                <br/><strong>Rescue:</strong> Take pot off heat. Carefully pour contents into a new pot WITHOUT scraping the bottom.
              </p>
            </div>

            <div className="bg-blue-50 dark:bg-blue-900/20 p-5 rounded-lg border-l-4 border-blue-500">
              <h4 className="font-bold text-lg mb-1 text-blue-800 dark:text-blue-100">Sauce too thin 💧</h4>
              <ul className="list-disc list-inside text-sm space-y-1">
                <li><strong>Reduce:</strong> Let boil until water evaporates (intensifies flavor).</li>
                <li><strong>Starch:</strong> Mix cornstarch in cold water, stir in, bring to boil.</li>
                <li><strong>Beurre Manié:</strong> Knead soft butter with flour and stir in pieces.</li>
              </ul>
            </div>

            <div className="bg-stone-100 dark:bg-stone-700 p-5 rounded-lg border-l-4 border-stone-500">
              <h4 className="font-bold text-lg mb-1 text-stone-800 dark:text-stone-100">Meat too dry 🥩</h4>
              <p className="text-sm">
                The steak is "Well Done" instead of "Medium"? You can't undo that.
                <br/><strong>Rescue:</strong> Cut into thin strips and serve IN the sauce or as a ragout. Fat and liquid mask dryness.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border-2 border-green-300 dark:border-green-700">
          <h3 className="text-xl font-bold text-green-800 dark:text-green-100 mb-4">🎯 Practical Exercise</h3>
          <p className="mb-4 font-bold">Save the Sauce:</p>
          <ol className="list-decimal list-inside space-y-2 ml-4">
            <li>Take a cup of water, add too much salt (it should taste gross).</li>
            <li>Try to make it edible:</li>
            <li>Add more water (Dilute).</li>
            <li>Add a spoon of cream/milk (Fat).</li>
            <li>Add a splash of lemon (Distraction).</li>
            <li>Taste after each step. Understand how the salty taste changes.</li>
          </ol>
        </div>
      </div>
    )
  },

  task: {
    de: {
      title: 'Rettungsaktion',
      description: 'Simuliere einen Fehler und rette ihn.',
      checklist: [
        { text: 'Versalze eine Test-Flüssigkeit' },
        { text: 'Verdünne sie' },
        { text: 'Füge Fett hinzu' },
        { text: 'Füge Säure hinzu' },
        { text: 'Beobachte die Veränderung' }
      ]
    },
    en: {
      title: 'Rescue Mission',
      description: 'Simulate a mistake and fix it.',
      checklist: [
        { text: 'Oversalt a test liquid' },
        { text: 'Dilute it' },
        { text: 'Add fat' },
        { text: 'Add acid' },
        { text: 'Observe the change' }
      ]
    }
  },
  
  notes: {
    de: [
      { front: 'Was tun, wenn das Essen angebrannt ist?', back: 'NICHT rühren! Sofort in neuen Topf umfüllen.' },
      { front: 'Hilft eine Kartoffel gegen versalzenes Essen?', back: 'Nein, das ist ein Mythos. Verdünnen ist besser.' },
      { front: 'Was neutralisiert Schärfe?', back: 'Fett und Zucker (Milchprodukte, Honig).' },
      { front: 'Wie dickt man eine Sauce nach?', back: 'Mit Stärke (kalt angerührt), kalter Butter (montieren) oder Einkochen.' }
    ],
    en: [
      { front: 'What to do if food is burnt?', back: 'Do NOT stir! Transfer to new pot immediately.' },
      { front: 'Does a potato help with salty food?', back: 'No, that\'s a myth. Diluting is better.' },
      { front: 'What neutralizes spiciness?', back: 'Fat and sugar (dairy, honey).' },
      { front: 'How to thicken a sauce?', back: 'With starch (mixed cold), cold butter (mounting) or reducing.' }
    ]
  }
};

