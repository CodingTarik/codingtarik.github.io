import React from 'react';

export const cookingPhilosophyLesson = {
  id: 'c6_m6_philosophy',
  title: { 
    en: '6.5 Your Cooking Philosophy', 
    de: '6.5 Deine Koch-Philosophie' 
  },
  description: { 
    en: 'The end of the beginning. Intuitive cooking and finding your own style.', 
    de: 'Das Ende vom Anfang. Intuitives Kochen und deinen eigenen Stil finden.' 
  },
  category: 'world',
  
  content: {
    de: (
      <div className="space-y-6">
        <div>
          <h2 className="text-3xl font-bold text-purple-700 dark:text-purple-400 mb-4">Der Kreis schließt sich ⭕</h2>
          <p className="text-lg leading-relaxed">
            Du hast nun die Techniken, die Theorie und die Rezepte. Jetzt beginnt der wichtigste Teil: 
            Vergiss die Rezepte. Kochen ist keine Malen-nach-Zahlen-Übung, sondern Ausdruck deiner Persönlichkeit.
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-stone-800 dark:text-stone-100 mb-4">
            1. Intuitives Kochen
          </h3>
          <div className="bg-stone-100 dark:bg-stone-800 p-5 rounded-xl">
            <p className="mb-3 font-bold">Wie kocht man ohne Rezept?</p>
            <ul className="list-disc list-inside text-sm space-y-2">
              <li><strong>Verstehe die Struktur:</strong> Jedes Curry, jeder Eintopf, jede Pasta folgt dem gleichen Muster (Anbraten -> Ablöschen -> Köcheln -> Abschmecken).</li>
              <li><strong>Schmecke ständig ab:</strong> Dein Gaumen ist dein Kompass. Wenn es langweilig schmeckt, fehlt Säure, Salz oder Fett.</li>
              <li><strong>Improvisiere:</strong> Kein Thymian da? Nimm Oregano. Kein Wein? Nimm Essig und Wasser.</li>
            </ul>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-stone-800 dark:text-stone-100 mb-4">
            2. Dein eigener Stil
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white dark:bg-stone-700 p-5 rounded-xl shadow-sm">
              <h4 className="font-bold text-xl mb-2">Der Perfektionist</h4>
              <p className="text-sm">Du wiegst alles ab, nutzt Sous-Vide und Pinzette. Dein Essen sieht aus wie Kunst.</p>
            </div>
            <div className="bg-white dark:bg-stone-700 p-5 rounded-xl shadow-sm">
              <h4 className="font-bold text-xl mb-2">Der Rustikale</h4>
              <p className="text-sm">Du kochst große Töpfe, schmorst stundenlang und servierst in der Pfanne. Hauptsache lecker.</p>
            </div>
            <div className="bg-white dark:bg-stone-700 p-5 rounded-xl shadow-sm">
              <h4 className="font-bold text-xl mb-2">Der Experimentierer</h4>
              <p className="text-sm">Du fermentierst, dörrst und kombinierst wild. Nicht alles gelingt, aber es ist nie langweilig.</p>
            </div>
            <div className="bg-white dark:bg-stone-700 p-5 rounded-xl shadow-sm">
              <h4 className="font-bold text-xl mb-2">Der Ernährungs-Bewusste</h4>
              <p className="text-sm">Du optimierst Makros, Mikros und Gesundheit. Dein Essen ist Treibstoff für den Körper.</p>
            </div>
          </div>
          <p className="mt-4 text-center italic">Finde heraus, wer du bist. Es gibt kein "Richtig" oder "Falsch".</p>
        </div>

        <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border-2 border-green-300 dark:border-green-700">
          <h3 className="text-xl font-bold text-green-800 dark:text-green-100 mb-4">🎯 Die Abschluss-Prüfung</h3>
          <p className="mb-4 font-bold">Das "Schwarze Kiste"-Kochen:</p>
          <ol className="list-decimal list-inside space-y-2 ml-4">
            <li>Gehe in den Supermarkt ohne Plan.</li>
            <li>Kaufe 3 Zutaten, die gut aussehen (Saisonal!).</li>
            <li>Gehe nach Hause und koche daraus ein Gericht, nur mit dem, was du im Vorratsschrank hast.</li>
            <li><strong>Kein Rezept erlaubt!</strong> Nutze dein Wissen über Gartechniken und Würzen.</li>
            <li>Wenn es schmeckt: <strong>Herzlichen Glückwunsch, du bist ein Koch!</strong> 🎓👨‍🍳</li>
          </ol>
        </div>
      </div>
    ),
    en: (
      <div className="space-y-6">
        <div>
          <h2 className="text-3xl font-bold text-purple-700 dark:text-purple-400 mb-4">Full Circle ⭕</h2>
          <p className="text-lg leading-relaxed">
            You now have the techniques, the theory, and the recipes. Now begins the most important part: 
            Forget the recipes. Cooking is not painting by numbers, it's an expression of your personality.
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-stone-800 dark:text-stone-100 mb-4">
            1. Intuitive Cooking
          </h3>
          <div className="bg-stone-100 dark:bg-stone-800 p-5 rounded-xl">
            <p className="mb-3 font-bold">How to cook without a recipe?</p>
            <ul className="list-disc list-inside text-sm space-y-2">
              <li><strong>Understand the structure:</strong> Every curry, stew, pasta follows the same pattern (Sauté -> Deglaze -> Simmer -> Season).</li>
              <li><strong>Taste constantly:</strong> Your palate is your compass. If it tastes boring, acid, salt, or fat is missing.</li>
              <li><strong>Improvise:</strong> No thyme? Use oregano. No wine? Use vinegar and water.</li>
            </ul>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-stone-800 dark:text-stone-100 mb-4">
            2. Your Own Style
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white dark:bg-stone-700 p-5 rounded-xl shadow-sm">
              <h4 className="font-bold text-xl mb-2">The Perfectionist</h4>
              <p className="text-sm">You weigh everything, use sous-vide and tweezers. Your food looks like art.</p>
            </div>
            <div className="bg-white dark:bg-stone-700 p-5 rounded-xl shadow-sm">
              <h4 className="font-bold text-xl mb-2">The Rustic</h4>
              <p className="text-sm">You cook big pots, braise for hours, and serve in the pan. As long as it's tasty.</p>
            </div>
            <div className="bg-white dark:bg-stone-700 p-5 rounded-xl shadow-sm">
              <h4 className="font-bold text-xl mb-2">The Experimenter</h4>
              <p className="text-sm">You ferment, dehydrate, and combine wildly. Not everything succeeds, but it's never boring.</p>
            </div>
            <div className="bg-white dark:bg-stone-700 p-5 rounded-xl shadow-sm">
              <h4 className="font-bold text-xl mb-2">The Health-Conscious</h4>
              <p className="text-sm">You optimize macros, micros, and health. Your food is fuel for the body.</p>
            </div>
          </div>
          <p className="mt-4 text-center italic">Find out who you are. There is no "Right" or "Wrong".</p>
        </div>

        <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border-2 border-green-300 dark:border-green-700">
          <h3 className="text-xl font-bold text-green-800 dark:text-green-100 mb-4">🎯 The Final Exam</h3>
          <p className="mb-4 font-bold">The "Black Box" Cooking:</p>
          <ol className="list-decimal list-inside space-y-2 ml-4">
            <li>Go to the supermarket without a plan.</li>
            <li>Buy 3 ingredients that look good (Seasonal!).</li>
            <li>Go home and cook a dish from them, using only what you have in your pantry.</li>
            <li><strong>No recipe allowed!</strong> Use your knowledge of cooking techniques and seasoning.</li>
            <li>If it tastes good: <strong>Congratulations, you are a Cook!</strong> 🎓👨‍🍳</li>
          </ol>
        </div>
      </div>
    )
  },

  task: {
    de: {
      title: 'Black Box Kochen',
      description: 'Koche ein Gericht ohne Rezept aus zufälligen Zutaten.',
      checklist: [
        { text: 'Kaufe 3 ungeplante Zutaten' },
        { text: 'Kombiniere sie mit Vorräten' },
        { text: 'Koche ohne Rezept' },
        { text: 'Schmecke ab bis es perfekt ist' },
        { text: 'Genieße deinen Erfolg' }
      ]
    },
    en: {
      title: 'Black Box Cooking',
      description: 'Cook a dish without a recipe from random ingredients.',
      checklist: [
        { text: 'Buy 3 unplanned ingredients' },
        { text: 'Combine them with pantry staples' },
        { text: 'Cook without a recipe' },
        { text: 'Season until perfect' },
        { text: 'Enjoy your success' }
      ]
    }
  },
  
  notes: {
    de: [
      { front: 'Was ist intuitives Kochen?', back: 'Kochen nach Gefühl und Geschmack, nicht nach starren Anweisungen.' },
      { front: 'Was ist das Wichtigste beim Kochen ohne Rezept?', back: 'Das ständige Abschmecken und Anpassen.' },
      { front: 'Was tun, wenn eine Zutat fehlt?', back: 'Ersatz suchen, der eine ähnliche Funktion (Säure/Fett/Schärfe) hat.' },
      { front: 'Wann ist man ein "guter" Koch?', back: 'Wenn man aus einfachen Zutaten etwas Leckeres machen kann und Spaß dabei hat.' }
    ],
    en: [
      { front: 'What is intuitive cooking?', back: 'Cooking by feel and taste, not by rigid instructions.' },
      { front: 'What is most important when cooking without a recipe?', back: 'Constant tasting and adjusting.' },
      { front: 'What to do if an ingredient is missing?', back: 'Find a substitute that has a similar function (acid/fat/heat).' },
      { front: 'When are you a "good" cook?', back: 'When you can make something tasty from simple ingredients and have fun doing it.' }
    ]
  }
};


