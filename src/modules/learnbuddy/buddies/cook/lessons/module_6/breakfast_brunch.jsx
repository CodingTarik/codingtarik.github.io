import React from 'react';

export const breakfastBrunchLesson = {
  id: 'c6_m6_breakfast',
  title: { 
    en: '6.4 Breakfast & Brunch', 
    de: '6.4 Frühstück & Brunch' 
  },
  description: { 
    en: 'The best meal of the day. Eggs Benedict, Pancakes, and more.', 
    de: 'Die beste Mahlzeit des Tages. Eggs Benedict, Pancakes und mehr.' 
  },
  category: 'world',
  
  content: {
    de: (
      <div className="space-y-6">
        <div>
          <h2 className="text-3xl font-bold text-purple-700 dark:text-purple-400 mb-4">Der Start in den Tag ☀️</h2>
          <p className="text-lg leading-relaxed">
            Frühstück ist die einzige Mahlzeit, bei der man Süßes und Herzhaftes auf einem Teller mischen darf. 
            Hier lernst du die Klassiker, für die andere Leute 20€ im Café zahlen.
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-stone-800 dark:text-stone-100 mb-4">
            1. Die Eier-Liga (Königsdisziplin)
          </h3>
          <div className="bg-yellow-50 dark:bg-yellow-900/20 p-5 rounded-xl border-l-4 border-yellow-500">
            <p className="mb-3 font-bold">Vergiss das gekochte Ei. Wir machen:</p>
            <div className="space-y-3">
              <div className="bg-white dark:bg-stone-700 p-3 rounded-lg">
                <h4 className="font-bold text-yellow-800 dark:text-yellow-100">Pochiertes Ei (Verlorenes Ei)</h4>
                <p className="text-sm">
                  <strong>Trick:</strong> Ei erst in eine Tasse schlagen. Wasser mit Essig sieden (nicht kochen!). Strudel erzeugen. Ei sanft hineingleiten lassen. 3 Min ziehen lassen.
                </p>
              </div>
              <div className="bg-white dark:bg-stone-700 p-3 rounded-lg">
                <h4 className="font-bold text-yellow-800 dark:text-yellow-100">Eggs Benedict</h4>
                <p className="text-sm">
                  Toastie + Schinken + Pochiertes Ei + Hollandaise.
                  <br/><strong>Blitz-Hollandaise:</strong> Eigelb, Zitrone, Salz in hohen Becher. Stabmixer rein. Heiße Butter langsam reinträufeln während man mixt. (Gelingt immer!).
                </p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-stone-800 dark:text-stone-100 mb-4">
            2. Süße Sünden
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-orange-50 dark:bg-orange-900/20 p-5 rounded-xl">
              <h4 className="font-bold text-xl mb-2 text-orange-800 dark:text-orange-100">Pancakes (USA) 🥞</h4>
              <ul className="list-disc list-inside text-sm space-y-1">
                <li><strong>Geheimnis:</strong> Buttermilch und Natron für Fluffigkeit.</li>
                <li><strong>Nicht rühren:</strong> Klümpchen sind okay! Zu viel Rühren macht sie zäh (Gluten).</li>
                <li><strong>Wenden:</strong> Wenn Bläschen auf der Oberseite platzen.</li>
              </ul>
            </div>

            <div className="bg-stone-100 dark:bg-stone-800 p-5 rounded-xl">
              <h4 className="font-bold text-xl mb-2">French Toast (Armer Ritter) 🍞</h4>
              <ul className="list-disc list-inside text-sm space-y-1">
                <li><strong>Resteverwertung:</strong> Perfekt für altes, trockenes Brot.</li>
                <li><strong>Custard:</strong> Ei + Milch + Zucker + Zimt verquirlen.</li>
                <li><strong>Saugen:</strong> Brot vollsaugen lassen, dann in Butter braten.</li>
              </ul>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-stone-800 dark:text-stone-100 mb-4">
            3. Hipster-Frühstück (Gesund & Teuer)
          </h3>
          <div className="bg-green-50 dark:bg-green-900/20 p-5 rounded-xl">
            <h4 className="font-bold text-green-800 dark:text-green-100 mb-2">Avocado Toast 🥑</h4>
            <p className="text-sm mb-2">Warum schmeckt der im Café besser?</p>
            <ol className="list-decimal list-inside text-sm space-y-1">
              <li><strong>Das Brot:</strong> Gutes Sauerteigbrot, dick geschnitten, geröstet.</li>
              <li><strong>Die Avocado:</strong> Zerdrückt (Mash) ist besser als Scheiben (fällt nicht runter).</li>
              <li><strong>Die Würze:</strong> Zitronensaft, Salz, Chiliflocken (Chili Flakes) und ein Schuss gutes Olivenöl OBEN drauf.</li>
              <li><strong>Das Topping:</strong> Ein pochiertes Ei oder Feta.</li>
            </ol>
          </div>
        </div>

        <div className="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-xl border-2 border-yellow-300 dark:border-yellow-700">
          <h3 className="text-xl font-bold text-yellow-800 dark:text-yellow-100 mb-4">🎯 Praktische Übung</h3>
          <p className="mb-4 font-bold">Das ultimative Sonntags-Ei:</p>
          <ol className="list-decimal list-inside space-y-2 ml-4">
            <li>Versuche dich an einem <strong>pochierten Ei</strong>.</li>
            <li>Nutze den Strudel-Trick und Essig im Wasser.</li>
            <li>Wenn es misslingt: Keine Panik, es schmeckt trotzdem.</li>
            <li>Serviere es auf einem getoasteten Brot mit Avocado.</li>
            <li>Schneide es an und filme den "Yolk Porn" (flüssiges Eigelb).</li>
          </ol>
        </div>
      </div>
    ),
    en: (
      <div className="space-y-6">
        <div>
          <h2 className="text-3xl font-bold text-purple-700 dark:text-purple-400 mb-4">Start Your Day ☀️</h2>
          <p className="text-lg leading-relaxed">
            Breakfast is the only meal where you can mix sweet and savory on one plate. 
            Here you learn the classics that others pay $20 for in a café.
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-stone-800 dark:text-stone-100 mb-4">
            1. The Egg League (Royal Discipline)
          </h3>
          <div className="bg-yellow-50 dark:bg-yellow-900/20 p-5 rounded-xl border-l-4 border-yellow-500">
            <p className="mb-3 font-bold">Forget boiled eggs. We make:</p>
            <div className="space-y-3">
              <div className="bg-white dark:bg-stone-700 p-3 rounded-lg">
                <h4 className="font-bold text-yellow-800 dark:text-yellow-100">Poached Egg</h4>
                <p className="text-sm">
                  <strong>Trick:</strong> Crack egg into cup first. Simmer water with vinegar (don't boil!). Create vortex. Gently slide egg in. Steep 3 min.
                </p>
              </div>
              <div className="bg-white dark:bg-stone-700 p-3 rounded-lg">
                <h4 className="font-bold text-yellow-800 dark:text-yellow-100">Eggs Benedict</h4>
                <p className="text-sm">
                  Muffin + Ham + Poached Egg + Hollandaise.
                  <br/><strong>Blitz Hollandaise:</strong> Egg yolk, lemon, salt in tall cup. Stick blender in. Drizzle hot butter in slowly while blending. (Foolproof!).
                </p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-stone-800 dark:text-stone-100 mb-4">
            2. Sweet Sins
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-orange-50 dark:bg-orange-900/20 p-5 rounded-xl">
              <h4 className="font-bold text-xl mb-2 text-orange-800 dark:text-orange-100">Pancakes (USA) 🥞</h4>
              <ul className="list-disc list-inside text-sm space-y-1">
                <li><strong>Secret:</strong> Buttermilk and baking soda for fluffiness.</li>
                <li><strong>Don't stir:</strong> Lumps are okay! Over-mixing makes them tough (gluten).</li>
                <li><strong>Flip:</strong> When bubbles on top burst.</li>
              </ul>
            </div>

            <div className="bg-stone-100 dark:bg-stone-800 p-5 rounded-xl">
              <h4 className="font-bold text-xl mb-2">French Toast 🍞</h4>
              <ul className="list-disc list-inside text-sm space-y-1">
                <li><strong>Leftovers:</strong> Perfect for old, dry bread.</li>
                <li><strong>Custard:</strong> Whisk egg + milk + sugar + cinnamon.</li>
                <li><strong>Soak:</strong> Let bread soak fully, then fry in butter.</li>
              </ul>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-stone-800 dark:text-stone-100 mb-4">
            3. Hipster Breakfast (Healthy & Pricey)
          </h3>
          <div className="bg-green-50 dark:bg-green-900/20 p-5 rounded-xl">
            <h4 className="font-bold text-green-800 dark:text-green-100 mb-2">Avocado Toast 🥑</h4>
            <p className="text-sm mb-2">Why does it taste better at the café?</p>
            <ol className="list-decimal list-inside text-sm space-y-1">
              <li><strong>The Bread:</strong> Good sourdough, thick slice, toasted.</li>
              <li><strong>The Avocado:</strong> Mashed is better than sliced (doesn't fall off).</li>
              <li><strong>The Seasoning:</strong> Lemon juice, salt, chili flakes, and a drizzle of good olive oil ON TOP.</li>
              <li><strong>The Topping:</strong> A poached egg or feta.</li>
            </ol>
          </div>
        </div>

        <div className="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-xl border-2 border-yellow-300 dark:border-yellow-700">
          <h3 className="text-xl font-bold text-yellow-800 dark:text-yellow-100 mb-4">🎯 Practical Exercise</h3>
          <p className="mb-4 font-bold">The Ultimate Sunday Egg:</p>
          <ol className="list-decimal list-inside space-y-2 ml-4">
            <li>Try making a <strong>poached egg</strong>.</li>
            <li>Use the vortex trick and vinegar in the water.</li>
            <li>If it fails: Don't panic, it still tastes good.</li>
            <li>Serve on toasted bread with avocado.</li>
            <li>Cut open and film the "Yolk Porn" (runny yolk).</li>
          </ol>
        </div>
      </div>
    )
  },

  task: {
    de: {
      title: 'Pochiertes Ei machen',
      description: 'Meistere das Pochieren eines Eis.',
      checklist: [
        { text: 'Wasser mit Essig zum Sieden bringen' },
        { text: 'Ei in Tasse schlagen' },
        { text: 'Strudel erzeugen' },
        { text: 'Ei hineingleiten lassen (3 Min)' },
        { text: 'Auf Toast servieren' }
      ]
    },
    en: {
      title: 'Poach an Egg',
      description: 'Master poaching an egg.',
      checklist: [
        { text: 'Bring water with vinegar to simmer' },
        { text: 'Crack egg into cup' },
        { text: 'Create vortex' },
        { text: 'Slide egg in (3 min)' },
        { text: 'Serve on toast' }
      ]
    }
  },
  
  notes: {
    de: [
      { front: 'Warum Essig im Wasser beim Pochieren?', back: 'Hilft dem Eiweiß, schneller zu stocken und die Form zu halten.' },
      { front: 'Warum Pancakes nicht zu viel rühren?', back: 'Weil sich sonst Gluten bildet und sie zäh statt fluffig werden.' },
      { front: 'Was ist die Basis für French Toast?', back: 'Altbackenes Brot und eine Mischung aus Ei und Milch.' },
      { front: 'Wie macht man Blitz-Hollandaise?', back: 'Mit dem Stabmixer und heißer Butter.' }
    ],
    en: [
      { front: 'Why vinegar in water when poaching?', back: 'Helps the egg white coagulate faster and hold shape.' },
      { front: 'Why not overmix pancakes?', back: 'Because gluten develops and they become tough instead of fluffy.' },
      { front: 'What is the base for French Toast?', back: 'Stale bread and a mixture of egg and milk.' },
      { front: 'How to make Blitz Hollandaise?', back: 'With a stick blender and hot butter.' }
    ]
  }
};


