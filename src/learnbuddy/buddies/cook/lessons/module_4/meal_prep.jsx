import React from 'react';

export const mealPrepLesson = {
  id: 'c4_m4_mealprep',
  title: { 
    en: '4.6 Meal Prep & Leftovers', 
    de: '4.6 Meal Prep & Resteverwertung' 
  },
  description: { 
    en: 'Cooking strategically: How to cook once and eat multiple times.', 
    de: 'Strategisch Kochen: Wie man einmal kocht und mehrmals isst.' 
  },
  category: 'theory',
  
  content: {
    de: (
      <div className="space-y-6">
        <div>
          <h2 className="text-3xl font-bold text-purple-700 dark:text-purple-400 mb-4">Einmal kochen, dreimal essen 🍱</h2>
          <p className="text-lg leading-relaxed">
            Meal Prep ist kein Trend, sondern alte Hauswirtschaft. Es spart Zeit, Geld und Stress.
            Du musst nicht jeden Tag 2 Stunden in der Küche stehen, um gut zu essen.
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-stone-800 dark:text-stone-100 mb-4">
            1. Die Komponenten-Methode
          </h3>
          
          <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border-2 border-blue-200 dark:border-blue-800 mb-4">
            <p className="mb-3">
              Statt fertige Gerichte vorzukochen ("Montag gibt es Auflauf"), koche <strong>Komponenten</strong>, die du kombinieren kannst.
            </p>
            <div className="grid md:grid-cols-3 gap-4 mt-4">
              <div className="bg-white dark:bg-stone-700 p-4 rounded-lg">
                <h4 className="font-bold mb-2 text-blue-800 dark:text-blue-200">1. Kohlenhydrate</h4>
                <ul className="list-disc list-inside text-sm">
                  <li>Topf Reis</li>
                  <li>Quinoa</li>
                  <li>Gekochte Kartoffeln</li>
                  <li>Nudeln (al dente)</li>
                </ul>
              </div>
              <div className="bg-white dark:bg-stone-700 p-4 rounded-lg">
                <h4 className="font-bold mb-2 text-green-800 dark:text-green-200">2. Gemüse</h4>
                <ul className="list-disc list-inside text-sm">
                  <li>Blech Ofengemüse</li>
                  <li>Gedämpfter Brokkoli</li>
                  <li>Rohkost-Sticks</li>
                  <li>Gewaschener Salat</li>
                </ul>
              </div>
              <div className="bg-white dark:bg-stone-700 p-4 rounded-lg">
                <h4 className="font-bold mb-2 text-red-800 dark:text-red-200">3. Protein</h4>
                <ul className="list-disc list-inside text-sm">
                  <li>Gebratene Hähnchenbrust</li>
                  <li>Gekochte Eier</li>
                  <li>Kichererbsen/Bohnen</li>
                  <li>Tofu-Würfel</li>
                </ul>
              </div>
            </div>
            <p className="mt-4 text-sm italic">
              <strong>Das Prinzip:</strong> Kombiniere diese Bausteine täglich neu mit verschiedenen Saucen/Dips!
            </p>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-stone-800 dark:text-stone-100 mb-4">
            2. Kreative Resteverwertung
          </h3>
          <p className="mb-4">Reste sind keine Abfälle, sondern Zutaten für das nächste Gericht.</p>
          
          <div className="space-y-4">
            <div className="bg-stone-100 dark:bg-stone-800 p-5 rounded-lg">
              <h4 className="font-bold mb-2">Kartoffeln vom Vortag 🥔</h4>
              <ul className="list-disc list-inside text-sm space-y-1">
                <li><strong>Bratkartoffeln:</strong> Perfekt, da Stärke fest geworden ist.</li>
                <li><strong>Kartoffelsalat:</strong> Saugt Dressing besser auf.</li>
                <li><strong>Gnocchi/Schupfnudeln:</strong> Teig aus kalten Kartoffeln.</li>
                <li><strong>Frittata:</strong> Mit Ei in der Pfanne backen.</li>
              </ul>
            </div>

            <div className="bg-stone-100 dark:bg-stone-800 p-5 rounded-lg">
              <h4 className="font-bold mb-2">Reis vom Vortag 🍚</h4>
              <ul className="list-disc list-inside text-sm space-y-1">
                <li><strong>Fried Rice (Gebratener Reis):</strong> Geht NUR mit kaltem Reis (klebt nicht).</li>
                <li><strong>Reissalat:</strong> Mit Gemüse und Vinaigrette.</li>
                <li><strong>Milchreis:</strong> In Milch aufkochen.</li>
              </ul>
            </div>

            <div className="bg-stone-100 dark:bg-stone-800 p-5 rounded-lg">
              <h4 className="font-bold mb-2">Nudeln vom Vortag 🍝</h4>
              <ul className="list-disc list-inside text-sm space-y-1">
                <li><strong>Nudelsalat:</strong> Der Klassiker.</li>
                <li><strong>Nudelauflauf:</strong> Mit Sauce und Käse überbacken.</li>
                <li><strong>Gebratene Nudeln:</strong> Asiatisch oder mit Ei.</li>
              </ul>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-stone-800 dark:text-stone-100 mb-4">
            3. Kühlschrank-Kochen (Kreativität)
          </h3>
          <div className="bg-amber-50 dark:bg-amber-900/20 p-5 rounded-lg">
            <p className="mb-3">
              Du hast "nichts" im Haus? Wetten doch? Das "Baukasten-System" rettet dich:
            </p>
            <ol className="list-decimal list-inside space-y-2 ml-4">
              <li><strong>Basis wählen:</strong> Nudeln? Reis? Kartoffeln? Brot?</li>
              <li><strong>Gemüse suchen:</strong> Egal was (frisch, TK oder Dose).</li>
              <li><strong>Protein finden:</strong> Ei? Dose Thunfisch? Bohnen? Käse?</li>
              <li><strong>Geschmack geben:</strong> Zwiebel, Knoblauch, Gewürze, Sojasauce, Pesto.</li>
            </ol>
            <p className="mt-3 font-bold text-amber-800 dark:text-amber-100">
              Beispiel "Reispfanne": Alter Reis + TK-Erbsen + Ei + Sojasauce = Fertig!
            </p>
          </div>
        </div>

        <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border-2 border-green-300 dark:border-green-700">
          <h3 className="text-xl font-bold text-green-800 dark:text-green-100 mb-4">🎯 Praktische Übung</h3>
          <p className="mb-4 font-bold">Das 3-Tage-Meal-Prep:</p>
          <ol className="list-decimal list-inside space-y-2 ml-4">
            <li>Koche am Sonntag eine große Portion Reis oder Quinoa.</li>
            <li>Brate 3 Hähnchenbrüste (oder Tofu-Blöcke) und schneide sie in Streifen.</li>
            <li>Röste ein Blech gemischtes Gemüse im Ofen.</li>
            <li>Verteile alles auf 3 Dosen.</li>
            <li><strong>Tag 1:</strong> Iss es mit Sojasauce (Asiatisch).</li>
            <li><strong>Tag 2:</strong> Iss es mit Pesto oder Joghurt-Dip (Mediterran).</li>
            <li><strong>Tag 3:</strong> Brate es in der Pfanne an (Fried Rice).</li>
          </ol>
        </div>
      </div>
    ),
    en: (
      <div className="space-y-6">
        <div>
          <h2 className="text-3xl font-bold text-purple-700 dark:text-purple-400 mb-4">Cook Once, Eat Thrice 🍱</h2>
          <p className="text-lg leading-relaxed">
            Meal Prep isn't a trend, it's old-school home economics. It saves time, money, and stress.
            You don't have to spend 2 hours in the kitchen every day to eat well.
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-stone-800 dark:text-stone-100 mb-4">
            1. The Component Method
          </h3>
          
          <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border-2 border-blue-200 dark:border-blue-800 mb-4">
            <p className="mb-3">
              Instead of pre-cooking finished meals ("Monday is casserole day"), cook <strong>components</strong> that you can combine.
            </p>
            <div className="grid md:grid-cols-3 gap-4 mt-4">
              <div className="bg-white dark:bg-stone-700 p-4 rounded-lg">
                <h4 className="font-bold mb-2 text-blue-800 dark:text-blue-200">1. Carbs</h4>
                <ul className="list-disc list-inside text-sm">
                  <li>Pot of rice</li>
                  <li>Quinoa</li>
                  <li>Boiled potatoes</li>
                  <li>Pasta (al dente)</li>
                </ul>
              </div>
              <div className="bg-white dark:bg-stone-700 p-4 rounded-lg">
                <h4 className="font-bold mb-2 text-green-800 dark:text-green-200">2. Veggies</h4>
                <ul className="list-disc list-inside text-sm">
                  <li>Tray of roasted veggies</li>
                  <li>Steamed broccoli</li>
                  <li>Raw veggie sticks</li>
                  <li>Washed lettuce</li>
                </ul>
              </div>
              <div className="bg-white dark:bg-stone-700 p-4 rounded-lg">
                <h4 className="font-bold mb-2 text-red-800 dark:text-red-200">3. Protein</h4>
                <ul className="list-disc list-inside text-sm">
                  <li>Fried chicken breast</li>
                  <li>Boiled eggs</li>
                  <li>Chickpeas/Beans</li>
                  <li>Tofu cubes</li>
                </ul>
              </div>
            </div>
            <p className="mt-4 text-sm italic">
              <strong>The Principle:</strong> Combine these building blocks daily with different sauces/dips!
            </p>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-stone-800 dark:text-stone-100 mb-4">
            2. Creative Leftovers
          </h3>
          <p className="mb-4">Leftovers aren't waste, they are ingredients for the next dish.</p>
          
          <div className="space-y-4">
            <div className="bg-stone-100 dark:bg-stone-800 p-5 rounded-lg">
              <h4 className="font-bold mb-2">Day-Old Potatoes 🥔</h4>
              <ul className="list-disc list-inside text-sm space-y-1">
                <li><strong>Fried Potatoes:</strong> Perfect because starch has set.</li>
                <li><strong>Potato Salad:</strong> Absorbs dressing better.</li>
                <li><strong>Gnocchi:</strong> Dough made from cold potatoes.</li>
                <li><strong>Frittata:</strong> Bake with egg in the pan.</li>
              </ul>
            </div>

            <div className="bg-stone-100 dark:bg-stone-800 p-5 rounded-lg">
              <h4 className="font-bold mb-2">Day-Old Rice 🍚</h4>
              <ul className="list-disc list-inside text-sm space-y-1">
                <li><strong>Fried Rice:</strong> ONLY works with cold rice (doesn't stick).</li>
                <li><strong>Rice Salad:</strong> With veggies and vinaigrette.</li>
                <li><strong>Rice Pudding:</strong> Reheat in milk.</li>
              </ul>
            </div>

            <div className="bg-stone-100 dark:bg-stone-800 p-5 rounded-lg">
              <h4 className="font-bold mb-2">Day-Old Pasta 🍝</h4>
              <ul className="list-disc list-inside text-sm space-y-1">
                <li><strong>Pasta Salad:</strong> The classic.</li>
                <li><strong>Pasta Bake:</strong> Bake with sauce and cheese.</li>
                <li><strong>Fried Noodles:</strong> Asian style or with egg.</li>
              </ul>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-stone-800 dark:text-stone-100 mb-4">
            3. Fridge Cooking (Creativity)
          </h3>
          <div className="bg-amber-50 dark:bg-amber-900/20 p-5 rounded-lg">
            <p className="mb-3">
              You have "nothing" in the house? Bet you do. The "Construction Kit" saves you:
            </p>
            <ol className="list-decimal list-inside space-y-2 ml-4">
              <li><strong>Choose Base:</strong> Pasta? Rice? Potatoes? Bread?</li>
              <li><strong>Find Veggies:</strong> Anything (fresh, frozen, or canned).</li>
              <li><strong>Find Protein:</strong> Egg? Can of tuna? Beans? Cheese?</li>
              <li><strong>Add Flavor:</strong> Onion, garlic, spices, soy sauce, pesto.</li>
            </ol>
            <p className="mt-3 font-bold text-amber-800 dark:text-amber-100">
              Example "Rice Pan": Old rice + frozen peas + egg + soy sauce = Done!
            </p>
          </div>
        </div>

        <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border-2 border-green-300 dark:border-green-700">
          <h3 className="text-xl font-bold text-green-800 dark:text-green-100 mb-4">🎯 Practical Exercise</h3>
          <p className="mb-4 font-bold">The 3-Day Meal Prep:</p>
          <ol className="list-decimal list-inside space-y-2 ml-4">
            <li>Cook a large portion of rice or quinoa on Sunday.</li>
            <li>Fry 3 chicken breasts (or tofu blocks) and cut into strips.</li>
            <li>Roast a tray of mixed veggies in the oven.</li>
            <li>Distribute everything into 3 containers.</li>
            <li><strong>Day 1:</strong> Eat with soy sauce (Asian).</li>
            <li><strong>Day 2:</strong> Eat with pesto or yogurt dip (Mediterranean).</li>
            <li><strong>Day 3:</strong> Fry it in the pan (Fried Rice).</li>
          </ol>
        </div>
      </div>
    )
  },

  task: {
    de: {
      title: '3-Tage Meal Prep',
      description: 'Bereite Komponenten für 3 Tage vor.',
      checklist: [
        { text: 'Koche Kohlenhydrate (Reis/Nudeln) vor' },
        { text: 'Bereite Gemüse vor (Ofen/Dämpfen)' },
        { text: 'Bereite Protein vor (Fleisch/Tofu/Eier)' },
        { text: 'Verteile es auf 3 Mahlzeiten' },
        { text: 'Variiere jeden Tag die Sauce/Würzung' }
      ]
    },
    en: {
      title: '3-Day Meal Prep',
      description: 'Prepare components for 3 days.',
      checklist: [
        { text: 'Pre-cook carbs (rice/pasta)' },
        { text: 'Prepare veggies (oven/steam)' },
        { text: 'Prepare protein (meat/tofu/eggs)' },
        { text: 'Distribute into 3 meals' },
        { text: 'Vary sauce/seasoning each day' }
      ]
    }
  },
  
  notes: {
    de: [
      { front: 'Was ist die Komponenten-Methode?', back: 'Einzelne Zutaten (Carbs, Veggie, Protein) vorkochen und täglich neu kombinieren.' },
      { front: 'Warum ist kalter Reis vom Vortag besser zum Braten?', back: 'Die Stärke ist fest geworden, er klebt nicht mehr.' },
      { front: 'Was kann man mit alten Kartoffeln machen?', back: 'Bratkartoffeln, Kartoffelsalat, Gnocchi.' },
      { front: 'Wie lange halten vorgekochte Speisen im Kühlschrank?', back: 'In der Regel 3-4 Tage.' }
    ],
    en: [
      { front: 'What is the component method?', back: 'Pre-cooking individual ingredients (carbs, veggies, protein) and combining them differently each day.' },
      { front: 'Why is cold day-old rice better for frying?', back: 'The starch has set, it no longer sticks.' },
      { front: 'What can you do with old potatoes?', back: 'Fried potatoes, potato salad, gnocchi.' },
      { front: 'How long do pre-cooked meals last in the fridge?', back: 'Usually 3-4 days.' }
    ]
  }
};

