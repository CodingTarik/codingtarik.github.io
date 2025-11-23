import React from 'react';

export const timingStressLesson = {
  id: 'c5_m5_timing',
  title: { 
    en: '5.1 Timing & Stress Management', 
    de: '5.1 Timing & Stressmanagement' 
  },
  description: { 
    en: 'How to cook multiple things at once without freaking out.', 
    de: 'Wie man mehrere Dinge gleichzeitig kocht, ohne durchzudrehen.' 
  },
  category: 'management',
  
  content: {
    de: (
      <div className="space-y-6">
        <div>
          <h2 className="text-3xl font-bold text-purple-700 dark:text-purple-400 mb-4">Der Dirigent in der Küche ⏱️</h2>
          <p className="text-lg leading-relaxed">
            Kennst du das? Das Fleisch ist fertig, aber die Kartoffeln sind noch hart und die Sauce ist kalt. 
            Gutes Kochen ist zu 50% Logistik. Hier lernst du, wie Profis den Überblick behalten.
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-stone-800 dark:text-stone-100 mb-4">
            1. Der Schlachtplan (Rückwärts planen)
          </h3>
          
          <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border-2 border-blue-200 dark:border-blue-800 mb-4">
            <p className="mb-3 font-bold">Die wichtigste Regel: Plane vom Zielzeitpunkt rückwärts!</p>
            <p className="mb-4">Beispiel: Du willst um <strong>20:00 Uhr</strong> essen.</p>
            
            <div className="space-y-3 bg-white dark:bg-stone-700 p-4 rounded-lg text-sm">
              <div className="flex gap-3">
                <span className="font-bold text-blue-600 w-16">20:00</span>
                <span>ESSEN (Servieren)</span>
              </div>
              <div className="flex gap-3">
                <span className="font-bold text-stone-500 w-16">19:55</span>
                <span>Anrichten (Teller fertig machen)</span>
              </div>
              <div className="flex gap-3">
                <span className="font-bold text-stone-500 w-16">19:50</span>
                <span>Fleisch ruhen lassen (Pfanne aus)</span>
              </div>
              <div className="flex gap-3">
                <span className="font-bold text-stone-500 w-16">19:40</span>
                <span>Fleisch braten (starten)</span>
              </div>
              <div className="flex gap-3">
                <span className="font-bold text-stone-500 w-16">19:30</span>
                <span>Beilage (Reis) aufsetzen (dauert 20 Min + Puffer)</span>
              </div>
              <div className="flex gap-3">
                <span className="font-bold text-stone-500 w-16">19:15</span>
                <span>Mise en Place fertig haben (Alles geschnitten)</span>
              </div>
            </div>
            <p className="mt-3 italic text-sm">
              Siehst du? Du musst schon um 19:15 Uhr fertig mit Schneiden sein, nicht erst anfangen!
            </p>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-stone-800 dark:text-stone-100 mb-4">
            2. Mise en Place (Der Stress-Killer)
          </h3>
          <div className="bg-stone-100 dark:bg-stone-800 p-5 rounded-lg">
            <p className="mb-3">
              Wir haben es in Modul 1 gelernt, aber jetzt wird es ernst. Wenn du für Gäste kochst oder mehrere Gänge hast, 
              muss das Mise en Place <strong>beendet</strong> sein, bevor die erste Pfanne heiß wird.
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4 text-sm">
              <li>Alles Gemüse geschnitten in Schüsseln.</li>
              <li>Fleisch pariert und gewürzt.</li>
              <li>Kräuter gehackt.</li>
              <li>Müll weggeräumt, Arbeitsfläche sauber.</li>
              <li>Werkzeuge (Löffel, Kellen) bereitgelegt.</li>
            </ul>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-stone-800 dark:text-stone-100 mb-4">
            3. Multitasking & Puffer
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-yellow-50 dark:bg-yellow-900/20 p-5 rounded-xl">
              <h4 className="font-bold text-xl mb-2 text-yellow-800 dark:text-yellow-100">Aktive vs. Passive Zeit</h4>
              <p className="text-sm mb-2">Unterscheide:</p>
              <ul className="list-disc list-inside text-sm space-y-1">
                <li><strong>Passiv:</strong> Ofengemüse (30 Min), Reis kochen (20 Min), Schmoren (2 Std). Hier hast du Hände frei!</li>
                <li><strong>Aktiv:</strong> Risotto rühren, Fleisch braten, Gemüse schnippeln. Hier bist du gebunden.</li>
              </ul>
              <p className="text-sm mt-2 font-bold">Regel: Kombiniere Passiv mit Aktiv. Mach kein Risotto UND Steak gleichzeitig!</p>
            </div>

            <div className="bg-green-50 dark:bg-green-900/20 p-5 rounded-xl">
              <h4 className="font-bold text-xl mb-2 text-green-800 dark:text-green-100">Das Puffer-Gesetz</h4>
              <p className="text-sm mb-2">
                Dinge dauern immer länger als im Rezept.
              </p>
              <ul className="list-disc list-inside text-sm space-y-1">
                <li>Rezept sagt 30 Min? Plane 45 Min.</li>
                <li>Gäste kommen um 19:00? Sei um 18:30 fertig.</li>
                <li><strong>Nutze Timer!</strong> Nicht raten. Stell dir für alles einen Wecker (Handy, Uhr).</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border-2 border-green-300 dark:border-green-700">
          <h3 className="text-xl font-bold text-green-800 dark:text-green-100 mb-4">🎯 Praktische Übung</h3>
          <p className="mb-4 font-bold">Plane ein fiktives Dinner:</p>
          <div className="mb-4">
            <p><strong>Menü:</strong></p>
            <ul className="list-disc list-inside ml-4">
              <li>Vorspeise: Tomatensuppe (20 Min kochzeit)</li>
              <li>Hauptgang: Steak mit Ofenkartoffeln (Steak 10 Min, Kartoffeln 40 Min)</li>
              <li>Dessert: Eis (fertig gekauft)</li>
            </ul>
            <p className="mt-2"><strong>Ziel:</strong> Essen um 20:00 Uhr.</p>
          </div>
          <p><strong>Deine Aufgabe:</strong> Schreibe einen Zeitplan (rückwärts). Wann kommen die Kartoffeln rein? Wann startest du die Suppe? Wann brätst du das Steak?</p>
        </div>
      </div>
    ),
    en: (
      <div className="space-y-6">
        <div>
          <h2 className="text-3xl font-bold text-purple-700 dark:text-purple-400 mb-4">The Conductor in the Kitchen ⏱️</h2>
          <p className="text-lg leading-relaxed">
            Sound familiar? The meat is done, but the potatoes are still hard and the sauce is cold. 
            Good cooking is 50% logistics. Here you learn how pros keep track.
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-stone-800 dark:text-stone-100 mb-4">
            1. The Battle Plan (Planning Backwards)
          </h3>
          
          <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border-2 border-blue-200 dark:border-blue-800 mb-4">
            <p className="mb-3 font-bold">The most important rule: Plan backwards from the target time!</p>
            <p className="mb-4">Example: You want to eat at <strong>8:00 PM</strong>.</p>
            
            <div className="space-y-3 bg-white dark:bg-stone-700 p-4 rounded-lg text-sm">
              <div className="flex gap-3">
                <span className="font-bold text-blue-600 w-16">20:00</span>
                <span>EAT (Serve)</span>
              </div>
              <div className="flex gap-3">
                <span className="font-bold text-stone-500 w-16">19:55</span>
                <span>Plating (Assemble plates)</span>
              </div>
              <div className="flex gap-3">
                <span className="font-bold text-stone-500 w-16">19:50</span>
                <span>Rest meat (Pan off)</span>
              </div>
              <div className="flex gap-3">
                <span className="font-bold text-stone-500 w-16">19:40</span>
                <span>Fry meat (start)</span>
              </div>
              <div className="flex gap-3">
                <span className="font-bold text-stone-500 w-16">19:30</span>
                <span>Start side dish (Rice) (takes 20 min + buffer)</span>
              </div>
              <div className="flex gap-3">
                <span className="font-bold text-stone-500 w-16">19:15</span>
                <span>Finish Mise en Place (Everything chopped)</span>
              </div>
            </div>
            <p className="mt-3 italic text-sm">
              See? You need to be DONE chopping by 7:15 PM, not just starting!
            </p>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-stone-800 dark:text-stone-100 mb-4">
            2. Mise en Place (The Stress Killer)
          </h3>
          <div className="bg-stone-100 dark:bg-stone-800 p-5 rounded-lg">
            <p className="mb-3">
              We learned it in Module 1, but now it gets serious. If you cook for guests or multiple courses, 
              Mise en Place must be <strong>finished</strong> before the first pan gets hot.
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4 text-sm">
              <li>All veggies chopped in bowls.</li>
              <li>Meat trimmed and seasoned.</li>
              <li>Herbs chopped.</li>
              <li>Trash cleared, workspace clean.</li>
              <li>Tools (spoons, ladles) ready.</li>
            </ul>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-stone-800 dark:text-stone-100 mb-4">
            3. Multitasking & Buffers
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-yellow-50 dark:bg-yellow-900/20 p-5 rounded-xl">
              <h4 className="font-bold text-xl mb-2 text-yellow-800 dark:text-yellow-100">Active vs. Passive Time</h4>
              <p className="text-sm mb-2">Distinguish:</p>
              <ul className="list-disc list-inside text-sm space-y-1">
                <li><strong>Passive:</strong> Oven veggies (30 min), boiling rice (20 min), braising (2 hrs). Hands free!</li>
                <li><strong>Active:</strong> Stirring risotto, frying meat, chopping veggies. Tied up.</li>
              </ul>
              <p className="text-sm mt-2 font-bold">Rule: Combine Passive with Active. Don't do Risotto AND Steak at the same time!</p>
            </div>

            <div className="bg-green-50 dark:bg-green-900/20 p-5 rounded-xl">
              <h4 className="font-bold text-xl mb-2 text-green-800 dark:text-green-100">The Buffer Law</h4>
              <p className="text-sm mb-2">
                Things always take longer than in the recipe.
              </p>
              <ul className="list-disc list-inside text-sm space-y-1">
                <li>Recipe says 30 min? Plan 45 min.</li>
                <li>Guests arrive at 7:00 PM? Be ready by 6:30 PM.</li>
                <li><strong>Use Timers!</strong> Don't guess. Set an alarm for everything.</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border-2 border-green-300 dark:border-green-700">
          <h3 className="text-xl font-bold text-green-800 dark:text-green-100 mb-4">🎯 Practical Exercise</h3>
          <p className="mb-4 font-bold">Plan a fictional dinner:</p>
          <div className="mb-4">
            <p><strong>Menu:</strong></p>
            <ul className="list-disc list-inside ml-4">
              <li>Starter: Tomato Soup (20 min cooking time)</li>
              <li>Main: Steak with Roast Potatoes (Steak 10 min, Potatoes 40 min)</li>
              <li>Dessert: Ice Cream (store bought)</li>
            </ul>
            <p className="mt-2"><strong>Goal:</strong> Eat at 8:00 PM.</p>
          </div>
          <p><strong>Your Task:</strong> Write a time schedule (backwards). When do the potatoes go in? When do you start the soup? When do you fry the steak?</p>
        </div>
      </div>
    )
  },

  task: {
    de: {
      title: 'Zeitplan erstellen',
      description: 'Erstelle einen Rückwärts-Zeitplan für ein 3-Gänge-Menü.',
      checklist: [
        { text: 'Definiere die Essenszeit (Ziel)' },
        { text: 'Liste alle Garzeiten auf' },
        { text: 'Plane Puffer ein (5-10 Min)' },
        { text: 'Bestimme den Startzeitpunkt für jedes Gericht' },
        { text: 'Bestimme den Startzeitpunkt für das Mise en Place' }
      ]
    },
    en: {
      title: 'Create Schedule',
      description: 'Create a backward schedule for a 3-course menu.',
      checklist: [
        { text: 'Define eating time (Goal)' },
        { text: 'List all cooking times' },
        { text: 'Plan buffers (5-10 min)' },
        { text: 'Determine start time for each dish' },
        { text: 'Determine start time for Mise en Place' }
      ]
    }
  },
  
  notes: {
    de: [
      { front: 'Was ist "Rückwärts planen"?', back: 'Vom Servier-Zeitpunkt ausgehend die Startzeiten berechnen.' },
      { front: 'Was ist der Unterschied zwischen aktiver und passiver Kochzeit?', back: 'Aktiv = Du musst dabei stehen (Rühren/Schneiden). Passiv = Es kocht von allein (Ofen/Köcheln).' },
      { front: 'Wann sollte das Mise en Place fertig sein?', back: 'Bevor der eigentliche Kochprozess (Hitze) beginnt.' },
      { front: 'Warum Puffer einplanen?', back: 'Weil alles immer länger dauert (Wasser kochen, Ofen vorheizen, etc.).' }
    ],
    en: [
      { front: 'What is "planning backwards"?', back: 'Calculating start times starting from the serving time.' },
      { front: 'What is the difference between active and passive cooking time?', back: 'Active = You must attend (Stir/Chop). Passive = It cooks by itself (Oven/Simmer).' },
      { front: 'When should Mise en Place be finished?', back: 'Before the actual cooking process (heat) begins.' },
      { front: 'Why plan buffers?', back: 'Because everything always takes longer (boiling water, preheating oven, etc.).' }
    ]
  }
};

