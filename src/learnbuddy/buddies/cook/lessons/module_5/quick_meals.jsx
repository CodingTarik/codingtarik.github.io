import React from 'react';

export const quickMealsLesson = {
  id: 'c5_m5_quick',
  title: { 
    en: '5.6 30-Minute Kitchen', 
    de: '5.6 30-Minuten-Küche' 
  },
  description: { 
    en: 'Fast food, but homemade. Healthy meals in under 30 minutes.', 
    de: 'Fast Food, aber selbstgemacht. Gesunde Gerichte in unter 30 Minuten.' 
  },
  category: 'management',
  
  content: {
    de: (
      <div className="space-y-6">
        <div>
          <h2 className="text-3xl font-bold text-purple-700 dark:text-purple-400 mb-4">Der Turbo am Herd 🏎️</h2>
          <p className="text-lg leading-relaxed">
            "Ich habe keine Zeit zum Kochen" ist eine Ausrede. Wenn du weißt wie, bist du schneller fertig als der Lieferdienst klingelt.
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-stone-800 dark:text-stone-100 mb-4">
            1. Zeitsparende Techniken
          </h3>
          <div className="bg-stone-100 dark:bg-stone-800 p-5 rounded-xl">
            <ul className="list-disc list-inside space-y-2">
              <li><strong>Wasserkocher nutzen:</strong> Nudelwasser im Wasserkocher vorheizen spart 5-10 Minuten.</li>
              <li><strong>Klein schneiden:</strong> Kleingeschnittenes Gemüse/Fleisch gart viel schneller.</li>
              <li><strong>Parallel arbeiten:</strong> Während das Wasser kocht, Gemüse schneiden. Während es brät, Sauce rühren.</li>
              <li><strong>One-Pot:</strong> Alles in einem Topf = weniger Abwasch = weniger Zeit.</li>
            </ul>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-stone-800 dark:text-stone-100 mb-4">
            2. Die 15-Minuten-Klassiker
          </h3>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-red-50 dark:bg-red-900/20 p-5 rounded-xl">
              <h4 className="font-bold text-xl mb-2 text-red-800 dark:text-red-100">Pasta Aglio e Olio 🍝</h4>
              <p className="text-sm mb-2">Dauer: 12 Min (Kochzeit Nudeln).</p>
              <ol className="list-decimal list-inside text-sm space-y-1">
                <li>Nudeln kochen.</li>
                <li>Nebenbei Knoblauch und Chili in viiiiiel Olivenöl anschwitzen (nicht verbrennen!).</li>
                <li>Nudeln direkt in die Pfanne geben, Kelle Nudelwasser dazu. Emulgieren. Fertig.</li>
              </ol>
            </div>

            <div className="bg-orange-50 dark:bg-orange-900/20 p-5 rounded-xl">
              <h4 className="font-bold text-xl mb-2 text-orange-800 dark:text-orange-100">Stir-Fry (Wok) 🥢</h4>
              <p className="text-sm mb-2">Dauer: 15 Min.</p>
              <ol className="list-decimal list-inside text-sm space-y-1">
                <li>Reis (oder Mie-Nudeln) kochen.</li>
                <li>Gemüse klein schnippeln.</li>
                <li>Wok HEISS machen. Gemüse 3 Min scharf anbraten.</li>
                <li>Sojasauce drüber. Fertig.</li>
              </ol>
            </div>

            <div className="bg-yellow-50 dark:bg-yellow-900/20 p-5 rounded-xl">
              <h4 className="font-bold text-xl mb-2 text-yellow-800 dark:text-yellow-100">Quesadillas 🌮</h4>
              <p className="text-sm mb-2">Dauer: 10 Min.</p>
              <ol className="list-decimal list-inside text-sm space-y-1">
                <li>Tortilla in Pfanne legen.</li>
                <li>Käse + Reste (Bohnen, Mais, Huhn) drauf.</li>
                <li>Zweite Tortilla drauf.</li>
                <li>Wenden, bis Käse schmilzt.</li>
              </ol>
            </div>

            <div className="bg-green-50 dark:bg-green-900/20 p-5 rounded-xl">
              <h4 className="font-bold text-xl mb-2 text-green-800 dark:text-green-100">Salat mit Protein 🥗</h4>
              <p className="text-sm mb-2">Dauer: 10 Min.</p>
              <ol className="list-decimal list-inside text-sm space-y-1">
                <li>Salat waschen.</li>
                <li>Dose Thunfisch oder Kichererbsen (abgespült) dazu.</li>
                <li>Dressing (Öl, Essig, Senf) im Glas schütteln.</li>
                <li>Drüber gießen. Fertig.</li>
              </ol>
            </div>
          </div>
        </div>

        <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border-2 border-green-300 dark:border-green-700">
          <h3 className="text-xl font-bold text-green-800 dark:text-green-100 mb-4">🎯 Praktische Übung</h3>
          <p className="mb-4 font-bold">Stoppuhr-Challenge:</p>
          <p className="mb-2">Koche ein Gericht in unter 20 Minuten.</p>
          <div className="bg-white dark:bg-stone-800 p-4 rounded text-sm italic">
            <p>Vorschlag: Pasta mit Kirschtomaten-Sauce.</p>
            <ol className="list-decimal list-inside">
              <li>Wasserkocher an.</li>
              <li>Kirschtomaten halbieren, Knoblauch hacken.</li>
              <li>Nudeln ins Wasser.</li>
              <li>Tomaten & Knoblauch in Öl anbraten, bis sie zerfallen.</li>
              <li>Nudeln abgießen, zur Sauce geben, Basilikum dazu.</li>
              <li>Zeit stoppen!</li>
            </ol>
          </div>
        </div>
      </div>
    ),
    en: (
      <div className="space-y-6">
        <div>
          <h2 className="text-3xl font-bold text-purple-700 dark:text-purple-400 mb-4">Turbo Kitchen 🏎️</h2>
          <p className="text-lg leading-relaxed">
            "I don't have time to cook" is an excuse. If you know how, you're done faster than the delivery guy rings the bell.
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-stone-800 dark:text-stone-100 mb-4">
            1. Time-Saving Techniques
          </h3>
          <div className="bg-stone-100 dark:bg-stone-800 p-5 rounded-xl">
            <ul className="list-disc list-inside space-y-2">
              <li><strong>Use the Kettle:</strong> Pre-boiling pasta water saves 5-10 minutes.</li>
              <li><strong>Cut Small:</strong> Finely chopped veggies/meat cook much faster.</li>
              <li><strong>Work Parallel:</strong> Chop veggies while water boils. Stir sauce while it fries.</li>
              <li><strong>One-Pot:</strong> Everything in one pot = less washing up = less time.</li>
            </ul>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-stone-800 dark:text-stone-100 mb-4">
            2. The 15-Minute Classics
          </h3>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-red-50 dark:bg-red-900/20 p-5 rounded-xl">
              <h4 className="font-bold text-xl mb-2 text-red-800 dark:text-red-100">Pasta Aglio e Olio 🍝</h4>
              <p className="text-sm mb-2">Time: 12 min (Pasta cooking time).</p>
              <ol className="list-decimal list-inside text-sm space-y-1">
                <li>Boil pasta.</li>
                <li>Meanwhile, sauté garlic and chili in loooots of olive oil (don't burn!).</li>
                <li>Add pasta directly to pan, add ladle of pasta water. Emulsify. Done.</li>
              </ol>
            </div>

            <div className="bg-orange-50 dark:bg-orange-900/20 p-5 rounded-xl">
              <h4 className="font-bold text-xl mb-2 text-orange-800 dark:text-orange-100">Stir-Fry (Wok) 🥢</h4>
              <p className="text-sm mb-2">Time: 15 min.</p>
              <ol className="list-decimal list-inside text-sm space-y-1">
                <li>Cook rice (or noodles).</li>
                <li>Chop veggies small.</li>
                <li>Heat wok HOT. Fry veggies for 3 min on high heat.</li>
                <li>Soy sauce on top. Done.</li>
              </ol>
            </div>

            <div className="bg-yellow-50 dark:bg-yellow-900/20 p-5 rounded-xl">
              <h4 className="font-bold text-xl mb-2 text-yellow-800 dark:text-yellow-100">Quesadillas 🌮</h4>
              <p className="text-sm mb-2">Time: 10 min.</p>
              <ol className="list-decimal list-inside text-sm space-y-1">
                <li>Put tortilla in pan.</li>
                <li>Add cheese + leftovers (beans, corn, chicken).</li>
                <li>Put second tortilla on top.</li>
                <li>Flip until cheese melts.</li>
              </ol>
            </div>

            <div className="bg-green-50 dark:bg-green-900/20 p-5 rounded-xl">
              <h4 className="font-bold text-xl mb-2 text-green-800 dark:text-green-100">Salad with Protein 🥗</h4>
              <p className="text-sm mb-2">Time: 10 min.</p>
              <ol className="list-decimal list-inside text-sm space-y-1">
                <li>Wash lettuce.</li>
                <li>Add can of tuna or chickpeas (rinsed).</li>
                <li>Shake dressing (oil, vinegar, mustard) in a jar.</li>
                <li>Pour over. Done.</li>
              </ol>
            </div>
          </div>
        </div>

        <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border-2 border-green-300 dark:border-green-700">
          <h3 className="text-xl font-bold text-green-800 dark:text-green-100 mb-4">🎯 Practical Exercise</h3>
          <p className="mb-4 font-bold">Stopwatch Challenge:</p>
          <p className="mb-2">Cook a meal in under 20 minutes.</p>
          <div className="bg-white dark:bg-stone-800 p-4 rounded text-sm italic">
            <p>Suggestion: Pasta with Cherry Tomato Sauce.</p>
            <ol className="list-decimal list-inside">
              <li>Kettle on.</li>
              <li>Halve cherry tomatoes, chop garlic.</li>
              <li>Pasta in water.</li>
              <li>Fry tomatoes & garlic in oil until they break down.</li>
              <li>Drain pasta, add to sauce, add basil.</li>
              <li>Stop time!</li>
            </ol>
          </div>
        </div>
      </div>
    )
  },

  task: {
    de: {
      title: '20-Minuten-Gericht',
      description: 'Koche ein Gericht in unter 20 Minuten.',
      checklist: [
        { text: 'Nutze den Wasserkocher zum Vorheizen' },
        { text: 'Schneide Zutaten klein' },
        { text: 'Arbeite parallel' },
        { text: 'Serviere in unter 20 Minuten' }
      ]
    },
    en: {
      title: '20-Minute Meal',
      description: 'Cook a meal in under 20 minutes.',
      checklist: [
        { text: 'Use kettle to preheat water' },
        { text: 'Cut ingredients small' },
        { text: 'Work in parallel' },
        { text: 'Serve in under 20 minutes' }
      ]
    }
  },
  
  notes: {
    de: [
      { front: 'Was ist der Vorteil von "One-Pot"?', back: 'Weniger Abwasch und oft schneller.' },
      { front: 'Warum gart Kleingeschnittenes schneller?', back: 'Größere Oberfläche, Hitze dringt schneller ein.' },
      { front: 'Was ist Aglio e Olio?', back: 'Pasta mit Knoblauch und Öl (der schnellste Klassiker).' },
      { front: 'Wie spart der Wasserkocher Zeit?', back: 'Er erhitzt Wasser effizienter und schneller als der Herd.' }
    ],
    en: [
      { front: 'What is the benefit of "One-Pot"?', back: 'Less washing up and often faster.' },
      { front: 'Why does small chopped food cook faster?', back: 'Larger surface area, heat penetrates faster.' },
      { front: 'What is Aglio e Olio?', back: 'Pasta with garlic and oil (the fastest classic).' },
      { front: 'How does the kettle save time?', back: 'It heats water more efficiently and faster than the stove.' }
    ]
  }
};


