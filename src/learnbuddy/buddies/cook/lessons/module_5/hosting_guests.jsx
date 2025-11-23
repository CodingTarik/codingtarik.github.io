import React from 'react';

export const hostingGuestsLesson = {
  id: 'c5_m5_hosting',
  title: { 
    en: '5.4 Hosting Guests', 
    de: '5.4 Gäste bewirten' 
  },
  description: { 
    en: 'The art of being a host without sweating in the kitchen all night.', 
    de: 'Die Kunst, Gastgeber zu sein, ohne den ganzen Abend in der Küche zu schwitzen.' 
  },
  category: 'management',
  
  content: {
    de: (
      <div className="space-y-6">
        <div>
          <h2 className="text-3xl font-bold text-purple-700 dark:text-purple-400 mb-4">Dinnerparty ohne Panik 🥂</h2>
          <p className="text-lg leading-relaxed">
            Gäste erinnern sich an die Atmosphäre, nicht daran, ob die Bohnen perfekt al dente waren. 
            Dein Ziel: Zeit mit deinen Freunden verbringen, nicht mit dem Backofen.
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-stone-800 dark:text-stone-100 mb-4">
            1. Die Goldene Regel
          </h3>
          
          <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-xl border-l-4 border-red-600 mb-6">
            <p className="text-xl font-bold text-red-800 dark:text-red-100 text-center">
              ⚠️ Koche NIEMALS etwas zum ersten Mal für Gäste!
            </p>
            <p className="mt-2 text-center">
              Experimente macht man alleine. Für Gäste kochst du deine "Signature Dishes" – Dinge, die du im Schlaf kannst.
            </p>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-stone-800 dark:text-stone-100 mb-4">
            2. Das "Stressfreie Menü"
          </h3>
          <p className="mb-4">Ein kluges Menü verteilt die Arbeit:</p>
          
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-stone-100 dark:bg-stone-800 p-5 rounded-xl">
              <h4 className="font-bold text-xl mb-2 text-green-700">Vorspeise (Kalt)</h4>
              <p className="text-sm">
                Muss <strong>vorbereitet</strong> im Kühlschrank stehen.
                <br/><em>Beispiel:</em> Salat, Suppe (nur aufwärmen), Bruschetta-Masse (vorbereitet), Antipasti.
              </p>
            </div>

            <div className="bg-stone-100 dark:bg-stone-800 p-5 rounded-xl">
              <h4 className="font-bold text-xl mb-2 text-orange-700">Hauptgang (Ofen)</h4>
              <p className="text-sm">
                Vermeide À-la-minute (Steaks für 6 Personen braten ist Hölle). 
                <br/><em>Besser:</em> <strong>Schmorgerichte</strong> oder Ofengerichte (Lasagne, Braten, Curry). Die warten geduldig im Ofen.
              </p>
            </div>

            <div className="bg-stone-100 dark:bg-stone-800 p-5 rounded-xl">
              <h4 className="font-bold text-xl mb-2 text-purple-700">Dessert (Vortag)</h4>
              <p className="text-sm">
                Muss <strong>fertig</strong> sein.
                <br/><em>Beispiel:</em> Mousse, Tiramisu, Panna Cotta. Dinge, die durchziehen müssen.
              </p>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-stone-800 dark:text-stone-100 mb-4">
            3. Gastgeber-Checkliste
          </h3>
          <div className="bg-white dark:bg-stone-700 shadow-sm rounded-lg p-5">
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-green-500 font-bold">✓</span>
                <span><strong>Diäten abfragen:</strong> Vegetarier? Glutenfrei? Allergien? (Vorher fragen spart Peinlichkeit).</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-500 font-bold">✓</span>
                <span><strong>Getränke kühlen:</strong> Wein/Bier/Wasser morgens kaltstellen. Eiswürfel machen!</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-500 font-bold">✓</span>
                <span><strong>Tisch decken:</strong> Bevor die Gäste klingeln. Kerzen an, Musik an.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-500 font-bold">✓</span>
                <span><strong>Spülmaschine leer:</strong> Damit dreckiges Geschirr sofort verschwinden kann (aus den Augen, aus dem Sinn).</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border-2 border-green-300 dark:border-green-700">
          <h3 className="text-xl font-bold text-green-800 dark:text-green-100 mb-4">🎯 Praktische Übung</h3>
          <p className="mb-4 font-bold">Plane dein Menü:</p>
          <p className="mb-2">Du erwartest 4 Freunde. Einer ist Vegetarier. Plane ein Menü, bei dem du maximal 15 Min in der Küche stehst, wenn die Gäste da sind.</p>
          <div className="bg-white dark:bg-stone-800 p-4 rounded text-sm italic">
            <p>Vorschlag:</p>
            <ul className="list-disc list-inside">
              <li>Vorspeise: Gemischte Antipasti (Oliven, Käse, Brot) - Steht schon auf dem Tisch.</li>
              <li>Hauptgang: Vegetarisches Thai-Curry (Vorbereitet, nur Reis frisch kochen).</li>
              <li>Dessert: Schokomousse im Glas (Am Vortag gemacht).</li>
            </ul>
          </div>
        </div>
      </div>
    ),
    en: (
      <div className="space-y-6">
        <div>
          <h2 className="text-3xl font-bold text-purple-700 dark:text-purple-400 mb-4">Dinner Party without Panic 🥂</h2>
          <p className="text-lg leading-relaxed">
            Guests remember the atmosphere, not whether the beans were perfectly al dente. 
            Your goal: Spend time with your friends, not with the oven.
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-stone-800 dark:text-stone-100 mb-4">
            1. The Golden Rule
          </h3>
          
          <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-xl border-l-4 border-red-600 mb-6">
            <p className="text-xl font-bold text-red-800 dark:text-red-100 text-center">
              ⚠️ NEVER cook something for the first time for guests!
            </p>
            <p className="mt-2 text-center">
              Experiments are for solo dining. For guests, cook your "Signature Dishes" – things you can do in your sleep.
            </p>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-stone-800 dark:text-stone-100 mb-4">
            2. The "Stress-Free Menu"
          </h3>
          <p className="mb-4">A smart menu distributes the work:</p>
          
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-stone-100 dark:bg-stone-800 p-5 rounded-xl">
              <h4 className="font-bold text-xl mb-2 text-green-700">Starter (Cold)</h4>
              <p className="text-sm">
                Must be <strong>prepped</strong> in the fridge.
                <br/><em>Example:</em> Salad, Soup (just reheat), Bruschetta mix (prepped), Antipasti.
              </p>
            </div>

            <div className="bg-stone-100 dark:bg-stone-800 p-5 rounded-xl">
              <h4 className="font-bold text-xl mb-2 text-orange-700">Main (Oven)</h4>
              <p className="text-sm">
                Avoid À-la-minute (Frying steaks for 6 people is hell). 
                <br/><em>Better:</em> <strong>Braised dishes</strong> or Oven dishes (Lasagna, Roast, Curry). They wait patiently in the oven.
              </p>
            </div>

            <div className="bg-stone-100 dark:bg-stone-800 p-5 rounded-xl">
              <h4 className="font-bold text-xl mb-2 text-purple-700">Dessert (Day Before)</h4>
              <p className="text-sm">
                Must be <strong>ready</strong>.
                <br/><em>Example:</em> Mousse, Tiramisu, Panna Cotta. Things that need to set.
              </p>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-stone-800 dark:text-stone-100 mb-4">
            3. Host Checklist
          </h3>
          <div className="bg-white dark:bg-stone-700 shadow-sm rounded-lg p-5">
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-green-500 font-bold">✓</span>
                <span><strong>Check Diets:</strong> Vegetarian? Gluten-free? Allergies? (Asking beforehand saves embarrassment).</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-500 font-bold">✓</span>
                <span><strong>Chill Drinks:</strong> Put wine/beer/water in fridge in the morning. Make ice cubes!</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-500 font-bold">✓</span>
                <span><strong>Set Table:</strong> Before guests ring. Candles on, music on.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-500 font-bold">✓</span>
                <span><strong>Dishwasher Empty:</strong> So dirty dishes can disappear immediately (out of sight, out of mind).</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border-2 border-green-300 dark:border-green-700">
          <h3 className="text-xl font-bold text-green-800 dark:text-green-100 mb-4">🎯 Practical Exercise</h3>
          <p className="mb-4 font-bold">Plan your Menu:</p>
          <p className="mb-2">You expect 4 friends. One is vegetarian. Plan a menu where you spend max 15 min in the kitchen once guests are there.</p>
          <div className="bg-white dark:bg-stone-800 p-4 rounded text-sm italic">
            <p>Suggestion:</p>
            <ul className="list-disc list-inside">
              <li>Starter: Mixed Antipasti (Olives, Cheese, Bread) - Already on the table.</li>
              <li>Main: Vegetarian Thai Curry (Prepped, just cook rice fresh).</li>
              <li>Dessert: Chocolate Mousse in glass (Made day before).</li>
            </ul>
          </div>
        </div>
      </div>
    )
  },

  task: {
    de: {
      title: 'Menüplanung für Gäste',
      description: 'Plane ein stressfreies Menü für 4 Personen.',
      checklist: [
        { text: 'Frage Diäten ab' },
        { text: 'Wähle eine kalte Vorspeise' },
        { text: 'Wähle einen Hauptgang aus dem Ofen/Topf' },
        { text: 'Wähle ein Dessert vom Vortag' },
        { text: 'Schreibe Einkaufsliste' }
      ]
    },
    en: {
      title: 'Guest Menu Planning',
      description: 'Plan a stress-free menu for 4 people.',
      checklist: [
        { text: 'Check dietary restrictions' },
        { text: 'Choose a cold starter' },
        { text: 'Choose an oven/pot main course' },
        { text: 'Choose a day-before dessert' },
        { text: 'Write shopping list' }
      ]
    }
  },
  
  notes: {
    de: [
      { front: 'Was ist die wichtigste Regel für Gäste?', back: 'Koche niemals etwas zum ersten Mal!' },
      { front: 'Welche Hauptgerichte sind stressfrei?', back: 'Schmorgerichte (Gulasch, Curry) oder Ofengerichte (Auflauf). Sie verzeihen Zeitfehler.' },
      { front: 'Warum sollte die Spülmaschine leer sein?', back: 'Damit man schmutziges Geschirr während des Abends sofort verstecken kann.' },
      { front: 'Wann sollte der Tisch gedeckt sein?', back: 'Bevor die Gäste kommen.' }
    ],
    en: [
      { front: 'What is the most important rule for guests?', back: 'Never cook something for the first time!' },
      { front: 'Which main courses are stress-free?', back: 'Braised dishes (Goulash, Curry) or oven dishes (Casserole). They forgive timing errors.' },
      { front: 'Why should the dishwasher be empty?', back: 'So you can hide dirty dishes immediately during the evening.' },
      { front: 'When should the table be set?', back: 'Before the guests arrive.' }
    ]
  }
};

