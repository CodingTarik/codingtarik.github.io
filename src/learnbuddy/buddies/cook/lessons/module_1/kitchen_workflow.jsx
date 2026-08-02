import React from 'react';

export const kitchenWorkflowLesson = {
  id: 'c1_m1_kitchen_workflow',
  title: { 
    en: '1.9 Basic Kitchen Workflow', 
    de: '1.9 Grundlegender Küchen-Workflow' 
  },
  description: { 
    en: 'Set up your workspace efficiently, clean as you go, and develop the habits that separate chaos from calm in the kitchen.', 
    de: 'Richte deinen Arbeitsplatz effizient ein, räume während des Kochens auf und entwickle die Gewohnheiten, die Chaos von Ruhe in der Küche trennen.' 
  },
  category: 'basics',
  
  content: {
    de: `
### Küchen-Workflow: Vom Chaos zur Ruhe 🧹

Hast du schon mal jemandem beim Kochen zugesehen, der völlig entspannt war? Keine Hektik, kein Durcheinander, alles zur richtigen Zeit fertig? Das ist kein Talent – das ist **Workflow**. Ein guter Workflow macht den Unterschied zwischen einer stressigen Kochsession und einem entspannten Erlebnis.

<div className="bg-amber-50 dark:bg-amber-900/20 p-4 rounded-lg border-l-4 border-amber-500 my-4">
  <h4 className="font-bold text-amber-800 dark:text-amber-300 mb-2">Die Profi-Wahrheit</h4>
  <p className="text-sm text-amber-700 dark:text-amber-300">In Profiküchen ist der Workflow ALLES. Köche sprechen von "Flow" – einem Zustand, in dem alles ineinandergreift wie ein Uhrwerk. Du kannst das auch zu Hause erreichen. Es braucht nur ein paar Gewohnheiten.</p>
</div>

---

### 1. Vor dem Kochen: Die Vorbereitung

#### Schritt 1: Rezept komplett lesen

<div className="p-4 bg-red-50 dark:bg-red-900/20 rounded-lg border-l-4 border-red-500 my-4">
  <h4 className="font-bold text-red-800 dark:text-red-300 mb-2">Fehler Nr. 1 aller Anfänger:</h4>
  <p className="text-sm text-red-700 dark:text-red-300">Das Rezept erst lesen, während man schon kocht. Das führt zu: "Oh, der Teig muss 2 Stunden ruhen?!" oder "Wo ist das Mehl, während die Butter verbrennt?!" <strong>Lies IMMER das komplette Rezept durch, bevor du einen Finger rührst.</strong></p>
</div>

#### Schritt 2: Arbeitsplatz aufräumen

Bevor du kochst, räume die Küche auf. Eine überladene Arbeitsfläche ist dein größter Feind.

<div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border-l-4 border-blue-500 my-4">
  <h4 className="font-bold text-blue-800 dark:text-blue-300 mb-2">Checkliste: Arbeitsplatz einrichten</h4>
  <ul className="list-disc list-inside text-sm text-blue-700 dark:text-blue-300 space-y-2">
    <li><strong>Arbeitsfläche frei:</strong> Alles weg, was nicht gebraucht wird.</li>
    <li><strong>Schneidebrett:</strong> Groß genug! Feuchtes Tuch unterlegen (rutschfest).</li>
    <li><strong>Messer:</strong> Geschärft und bereit.</li>
    <li><strong>Abfallschüssel:</strong> Eine Schüssel direkt neben dem Brett für Schalen, Enden, Kerne. Spart 20 Gänge zum Mülleimer!</li>
    <li><strong>Kleine Schüsseln:</strong> Für vorbereitete Zutaten (Mise en Place!).</li>
    <li><strong>Küchentücher:</strong> Eins zum Hände trocknen, eins zum Aufwischen. Immer griffbereit.</li>
    <li><strong>Spülbecken:</strong> Leer und bereit (zum Waschen und Abgießen).</li>
  </ul>
</div>

#### Schritt 3: Mise en Place (Alles an seinem Platz)

Lies das Rezept und bereite ALLE Zutaten vor, bevor du den Herd anstellst.

1. **Wiegen und Abmessen:** Alle Zutaten in kleinen Schüsseln bereitstellen.
2. **Schneiden:** Alles vorschneiden – Zwiebeln würfeln, Knoblauch hacken, Gemüse schneiden.
3. **Ordnung nach Timing:** Stelle die Zutaten in der Reihenfolge auf, in der du sie brauchst.

---

### 2. Während des Kochens: "Clean as You Go"

Die wichtigste Gewohnheit überhaupt. Wer aufräumt während er kocht, hat am Ende nur noch wenig zu tun.

<div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border-l-4 border-green-500 my-4">
  <h4 className="font-bold text-green-800 dark:text-green-300 mb-2">Die 5 Regeln von "Clean as You Go":</h4>
  <ol className="list-decimal list-inside text-sm text-green-700 dark:text-green-300 space-y-2">
    <li><strong>Wartezeiten nutzen:</strong> Während etwas köchelt oder im Ofen ist → abspülen, aufwischen, aufräumen.</li>
    <li><strong>Sofort abspülen:</strong> Ein Topf, den du nicht mehr brauchst? Sofort ausspülen (oder in die Spülmaschine). Eingetrocknetes ist 10x schwerer zu reinigen.</li>
    <li><strong>Abfallschüssel immer leeren:</strong> Wenn sie voll ist, ab in den Müll und zurück ans Brett.</li>
    <li><strong>Brett sauber wischen:</strong> Zwischen verschiedenen Zutaten das Brett abwischen (besonders nach Zwiebeln vor Obst!).</li>
    <li><strong>Gewürze und Zutaten zurückstellen:</strong> Was du nicht mehr brauchst, kommt sofort weg.</li>
  </ol>
</div>

---

### 3. Effizienz-Tipps: Arbeiten wie ein Profi

<div className="grid md:grid-cols-2 gap-4 my-6">
  <div className="bg-white dark:bg-stone-800 p-4 rounded-lg shadow-sm">
    <h4 className="font-bold text-stone-800 dark:text-stone-200 mb-2">Batch-Verarbeitung</h4>
    <p className="text-sm text-stone-600 dark:text-stone-400">Alle Zwiebeln zusammen schneiden, alle Karotten zusammen, alle Kräuter zusammen. Nicht ständig zwischen Zutaten wechseln.</p>
  </div>
  <div className="bg-white dark:bg-stone-800 p-4 rounded-lg shadow-sm">
    <h4 className="font-bold text-stone-800 dark:text-stone-200 mb-2">Dominante Hand = Messer</h4>
    <p className="text-sm text-stone-600 dark:text-stone-400">Dein Messer bleibt in der dominanten Hand. Du wechselst die Zutat, nicht das Werkzeug. Spart enorm Zeit.</p>
  </div>
  <div className="bg-white dark:bg-stone-800 p-4 rounded-lg shadow-sm">
    <h4 className="font-bold text-stone-800 dark:text-stone-200 mb-2">Vom Groben zum Feinen</h4>
    <p className="text-sm text-stone-600 dark:text-stone-400">Erst alles grob schneiden, dann fein. Erst Gemüse, dann Kräuter. Erst trockene Zutaten, dann nasse. Spart Putzarbeit.</p>
  </div>
  <div className="bg-white dark:bg-stone-800 p-4 rounded-lg shadow-sm">
    <h4 className="font-bold text-stone-800 dark:text-stone-200 mb-2">Timer nutzen</h4>
    <p className="text-sm text-stone-600 dark:text-stone-400">Stelle Timer für alles. Kartoffeln kochen? Timer. Brot im Ofen? Timer. Verlass dich nie auf "ich merke das schon". Du merkst es nicht.</p>
  </div>
</div>

---

### 4. Nach dem Kochen: Der schnelle Abschluss

Wenn du während des Kochens aufgeräumt hast, bleibt jetzt nur noch wenig:

1. **Herd ausschalten** und Töpfe vom Herd nehmen.
2. **Servieren** – auf vorgewärmte Teller (30 Sek in der Mikrowelle oder 5 Min im 60°C-Ofen).
3. **Letzte Utensilien** spülen (Pfanne, Schneidebrett).
4. **Arbeitsfläche abwischen** mit einem feuchten Tuch.
5. **Müll rausbringen** und Geschirrtuch aufhängen.

<div className="bg-amber-50 dark:bg-amber-900/20 p-4 rounded-lg my-4">
  <h4 className="font-bold text-amber-800 dark:text-amber-300 mb-2">Das Ziel</h4>
  <p className="text-sm text-amber-700 dark:text-amber-300">Wenn du dein Essen auf dem Teller hast, sollte die Küche <strong>fast sauber</strong> sein. Nur die letzten Teller und Pfannen bleiben. Kein Berg von Geschirr, kein Schlachtfeld.</p>
</div>

---

### 5. Mentale Einstellung: Ruhe in der Küche

<div className="space-y-4 my-6">
  <div className="flex items-start gap-4 p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg border border-purple-200 dark:border-purple-700">
    <div className="text-3xl flex-shrink-0">🧘</div>
    <div>
      <h4 className="font-bold text-purple-800 dark:text-purple-200 mb-2">Nicht hetzen</h4>
      <p className="text-sm text-purple-700 dark:text-purple-300">Kochen braucht Zeit. Plane genug davon ein. Hetze führt zu Fehlern, Verbrennungen und schlechtem Essen. Lieber 10 Minuten mehr einplanen als in Stress zu geraten.</p>
    </div>
  </div>
  <div className="flex items-start gap-4 p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg border border-purple-200 dark:border-purple-700">
    <div className="text-3xl flex-shrink-0">🎵</div>
    <div>
      <h4 className="font-bold text-purple-800 dark:text-purple-200 mb-2">Atmosphäre schaffen</h4>
      <p className="text-sm text-purple-700 dark:text-purple-300">Musik an, ein Getränk daneben, Fenster auf. Kochen soll Spaß machen. Wenn du gestresst bist, schmeckt auch das Essen danach.</p>
    </div>
  </div>
  <div className="flex items-start gap-4 p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg border border-purple-200 dark:border-purple-700">
    <div className="text-3xl flex-shrink-0">📝</div>
    <div>
      <h4 className="font-bold text-purple-800 dark:text-purple-200 mb-2">Notizen machen</h4>
      <p className="text-sm text-purple-700 dark:text-purple-300">Schreibe auf, was funktioniert hat und was nicht. "Nächstes Mal weniger Salz", "5 Min kürzer im Ofen". Diese Notizen sind Gold wert.</p>
    </div>
  </div>
</div>

---

### Sicherheitshinweise

<div className="p-4 bg-red-50 dark:bg-red-900/20 rounded-lg border-l-4 border-red-500 my-4">
  <h4 className="font-bold text-red-800 dark:text-red-300 mb-2">Workflow-Sicherheit:</h4>
  <ul className="list-disc list-inside text-sm text-red-700 dark:text-red-300 space-y-2">
    <li><strong>Nasser Boden = Sturzgefahr:</strong> Sofort aufwischen, wenn etwas auf den Boden tropft.</li>
    <li><strong>Messer nie im Spülwasser:</strong> Unsichtbare Klinge unter dem Schaum = Schnittverletzung.</li>
    <li><strong>Griffe nach innen:</strong> Topf- und Pfannengriffe immer zur Seite oder nach hinten drehen, nie nach vorne.</li>
    <li><strong>Trockene Hände am Messer:</strong> Nasse Hände + Messer = Rutschgefahr.</li>
    <li><strong>"Heiß! Hinter dir!":</strong> In der Profiküche ruft man, wenn man sich mit heißen Sachen bewegt. Auch zu Hause sinnvoll, wenn andere in der Küche sind.</li>
  </ul>
</div>

---

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border-2 border-green-300 my-4">
  <h3 className="font-bold text-green-800 dark:text-green-300 mb-4">🎯 Praktische Übung</h3>
  <ol className="list-decimal list-inside space-y-2 text-green-700 dark:text-green-300">
    <li>Suche dir ein einfaches Rezept aus (z.B. Pasta mit Tomatensauce).</li>
    <li><strong>Vor dem Kochen:</strong> Lies das Rezept komplett. Räume die Küche auf. Stelle Mise en Place bereit.</li>
    <li><strong>Während dem Kochen:</strong> Versuche, "Clean as You Go" konsequent umzusetzen. Wie viel Geschirr steht am Ende noch rum?</li>
    <li><strong>Nach dem Kochen:</strong> Wie sauber ist die Küche, wenn du dich zum Essen hinsetzt?</li>
    <li>Bewerte dich selbst: War es stressig oder entspannt? Was würdest du nächstes Mal anders machen?</li>
  </ol>
</div>
    `,
    en: `
### Kitchen Workflow: From Chaos to Calm 🧹

Have you ever watched someone cook who was completely relaxed? No rushing, no mess, everything done at the right time? That's not talent – that's **workflow**. A good workflow makes the difference between a stressful cooking session and a relaxed experience.

<div className="bg-amber-50 dark:bg-amber-900/20 p-4 rounded-lg border-l-4 border-amber-500 my-4">
  <h4 className="font-bold text-amber-800 dark:text-amber-300 mb-2">The Professional Truth</h4>
  <p className="text-sm text-amber-700 dark:text-amber-300">In professional kitchens, workflow is EVERYTHING. Chefs talk about "flow" – a state where everything interlocks like clockwork. You can achieve this at home too. It just takes a few habits.</p>
</div>

---

### 1. Before Cooking: The Preparation

#### Step 1: Read the Recipe Completely

<div className="p-4 bg-red-50 dark:bg-red-900/20 rounded-lg border-l-4 border-red-500 my-4">
  <h4 className="font-bold text-red-800 dark:text-red-300 mb-2">Mistake #1 of All Beginners:</h4>
  <p className="text-sm text-red-700 dark:text-red-300">Reading the recipe while already cooking. This leads to: "Oh, the dough needs to rest 2 hours?!" or "Where's the flour while the butter is burning?!" <strong>ALWAYS read the complete recipe before you lift a finger.</strong></p>
</div>

#### Step 2: Clear Your Workspace

Before cooking, clean up the kitchen. A cluttered counter is your biggest enemy.

<div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border-l-4 border-blue-500 my-4">
  <h4 className="font-bold text-blue-800 dark:text-blue-300 mb-2">Checklist: Setting Up Your Workspace</h4>
  <ul className="list-disc list-inside text-sm text-blue-700 dark:text-blue-300 space-y-2">
    <li><strong>Counter clear:</strong> Remove everything you don't need.</li>
    <li><strong>Cutting board:</strong> Big enough! Damp cloth underneath (non-slip).</li>
    <li><strong>Knife:</strong> Sharpened and ready.</li>
    <li><strong>Scrap bowl:</strong> A bowl right next to the board for peels, ends, seeds. Saves 20 trips to the trash!</li>
    <li><strong>Small bowls:</strong> For prepped ingredients (Mise en Place!).</li>
    <li><strong>Kitchen towels:</strong> One to dry hands, one to wipe. Always within reach.</li>
    <li><strong>Sink:</strong> Empty and ready (for washing and draining).</li>
  </ul>
</div>

#### Step 3: Mise en Place (Everything in Its Place)

Read the recipe and prep ALL ingredients before turning on the stove.

1. **Weigh and measure:** Set out all ingredients in small bowls.
2. **Cut:** Pre-cut everything – dice onions, mince garlic, chop vegetables.
3. **Organize by timing:** Arrange ingredients in the order you'll need them.

---

### 2. During Cooking: "Clean as You Go"

The most important habit of all. Those who clean while cooking have barely anything left to do at the end.

<div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border-l-4 border-green-500 my-4">
  <h4 className="font-bold text-green-800 dark:text-green-300 mb-2">The 5 Rules of "Clean as You Go":</h4>
  <ol className="list-decimal list-inside text-sm text-green-700 dark:text-green-300 space-y-2">
    <li><strong>Use wait times:</strong> While something simmers or is in the oven → wash dishes, wipe down, tidy up.</li>
    <li><strong>Wash immediately:</strong> A pot you no longer need? Rinse it now (or dishwasher). Dried-on food is 10x harder to clean.</li>
    <li><strong>Empty scrap bowl regularly:</strong> When it's full, dump it and get back to the board.</li>
    <li><strong>Wipe down board:</strong> Between different ingredients, wipe the board clean (especially after onions before fruit!).</li>
    <li><strong>Put away spices and ingredients:</strong> What you no longer need goes back immediately.</li>
  </ol>
</div>

---

### 3. Efficiency Tips: Working Like a Pro

<div className="grid md:grid-cols-2 gap-4 my-6">
  <div className="bg-white dark:bg-stone-800 p-4 rounded-lg shadow-sm">
    <h4 className="font-bold text-stone-800 dark:text-stone-200 mb-2">Batch Processing</h4>
    <p className="text-sm text-stone-600 dark:text-stone-400">Cut all onions together, all carrots together, all herbs together. Don't constantly switch between ingredients.</p>
  </div>
  <div className="bg-white dark:bg-stone-800 p-4 rounded-lg shadow-sm">
    <h4 className="font-bold text-stone-800 dark:text-stone-200 mb-2">Dominant Hand = Knife</h4>
    <p className="text-sm text-stone-600 dark:text-stone-400">Your knife stays in your dominant hand. You switch the ingredient, not the tool. Saves enormous time.</p>
  </div>
  <div className="bg-white dark:bg-stone-800 p-4 rounded-lg shadow-sm">
    <h4 className="font-bold text-stone-800 dark:text-stone-200 mb-2">Rough to Fine</h4>
    <p className="text-sm text-stone-600 dark:text-stone-400">Cut everything rough first, then fine. Vegetables first, then herbs. Dry ingredients first, then wet. Saves cleaning.</p>
  </div>
  <div className="bg-white dark:bg-stone-800 p-4 rounded-lg shadow-sm">
    <h4 className="font-bold text-stone-800 dark:text-stone-200 mb-2">Use Timers</h4>
    <p className="text-sm text-stone-600 dark:text-stone-400">Set timers for everything. Potatoes boiling? Timer. Bread in oven? Timer. Never rely on "I'll remember." You won't.</p>
  </div>
</div>

---

### 4. After Cooking: The Quick Finish

If you cleaned during cooking, only a little remains:

1. **Turn off stove** and remove pots from heat.
2. **Serve** – on pre-warmed plates (30 sec in microwave or 5 min in 60°C/140°F oven).
3. **Wash last utensils** (pan, cutting board).
4. **Wipe down counters** with a damp cloth.
5. **Take out trash** and hang up dish towel.

<div className="bg-amber-50 dark:bg-amber-900/20 p-4 rounded-lg my-4">
  <h4 className="font-bold text-amber-800 dark:text-amber-300 mb-2">The Goal</h4>
  <p className="text-sm text-amber-700 dark:text-amber-300">When food is on your plate, the kitchen should be <strong>almost clean</strong>. Only the last plates and pans remain. No mountain of dishes, no battlefield.</p>
</div>

---

### 5. Mental Approach: Calm in the Kitchen

<div className="space-y-4 my-6">
  <div className="flex items-start gap-4 p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg border border-purple-200 dark:border-purple-700">
    <div className="text-3xl flex-shrink-0">🧘</div>
    <div>
      <h4 className="font-bold text-purple-800 dark:text-purple-200 mb-2">Don't Rush</h4>
      <p className="text-sm text-purple-700 dark:text-purple-300">Cooking takes time. Plan enough of it. Rushing leads to mistakes, burns, and bad food. Better to plan 10 extra minutes than to stress out.</p>
    </div>
  </div>
  <div className="flex items-start gap-4 p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg border border-purple-200 dark:border-purple-700">
    <div className="text-3xl flex-shrink-0">🎵</div>
    <div>
      <h4 className="font-bold text-purple-800 dark:text-purple-200 mb-2">Create Atmosphere</h4>
      <p className="text-sm text-purple-700 dark:text-purple-300">Music on, a drink nearby, window open. Cooking should be fun. If you're stressed, the food tastes like it.</p>
    </div>
  </div>
  <div className="flex items-start gap-4 p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg border border-purple-200 dark:border-purple-700">
    <div className="text-3xl flex-shrink-0">📝</div>
    <div>
      <h4 className="font-bold text-purple-800 dark:text-purple-200 mb-2">Take Notes</h4>
      <p className="text-sm text-purple-700 dark:text-purple-300">Write down what worked and what didn't. "Less salt next time", "5 min less in oven". These notes are worth gold.</p>
    </div>
  </div>
</div>

---

### Safety Tips

<div className="p-4 bg-red-50 dark:bg-red-900/20 rounded-lg border-l-4 border-red-500 my-4">
  <h4 className="font-bold text-red-800 dark:text-red-300 mb-2">Workflow Safety:</h4>
  <ul className="list-disc list-inside text-sm text-red-700 dark:text-red-300 space-y-2">
    <li><strong>Wet floor = slip hazard:</strong> Wipe immediately when something drips on the floor.</li>
    <li><strong>Never put knives in dishwater:</strong> Invisible blade under suds = cut injury.</li>
    <li><strong>Handles inward:</strong> Always turn pot and pan handles to the side or back, never forward.</li>
    <li><strong>Dry hands for knife:</strong> Wet hands + knife = slip risk.</li>
    <li><strong>"Hot! Behind you!":</strong> In pro kitchens, chefs call out when moving with hot items. Smart at home too when others are in the kitchen.</li>
  </ul>
</div>

---

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border-2 border-green-300 my-4">
  <h3 className="font-bold text-green-800 dark:text-green-300 mb-4">🎯 Practice Exercise</h3>
  <ol className="list-decimal list-inside space-y-2 text-green-700 dark:text-green-300">
    <li>Choose a simple recipe (e.g., pasta with tomato sauce).</li>
    <li><strong>Before cooking:</strong> Read the recipe completely. Clean the kitchen. Set up mise en place.</li>
    <li><strong>During cooking:</strong> Try to consistently practice "clean as you go." How many dishes are left at the end?</li>
    <li><strong>After cooking:</strong> How clean is the kitchen when you sit down to eat?</li>
    <li>Self-evaluate: Was it stressful or relaxed? What would you do differently next time?</li>
  </ol>
</div>
    `
  },

  task: {
    de: {
      title: 'Workflow-Challenge',
      description: 'Koche ein einfaches Gericht und fokussiere dich ausschließlich auf den Workflow.',
      checklist: [
        { text: 'Lies das Rezept komplett durch, bevor du anfängst.' },
        { text: 'Räume die Küche auf und richte deinen Arbeitsplatz ein.' },
        { text: 'Stelle alle Zutaten als Mise en Place bereit.' },
        { text: 'Übe "Clean as You Go" während des Kochens.' },
        { text: 'Wenn das Essen fertig ist: Wie sauber ist die Küche?' },
        { text: 'Schreibe 3 Dinge auf, die du beim nächsten Mal besser machen würdest.' }
      ]
    },
    en: {
      title: 'Workflow Challenge',
      description: 'Cook a simple dish and focus exclusively on the workflow.',
      checklist: [
        { text: 'Read the recipe completely before starting.' },
        { text: 'Clean the kitchen and set up your workspace.' },
        { text: 'Set out all ingredients as mise en place.' },
        { text: 'Practice "clean as you go" during cooking.' },
        { text: 'When food is done: How clean is the kitchen?' },
        { text: 'Write down 3 things you would do better next time.' }
      ]
    }
  },
  
  notes: {
    de: [
      { front: 'Was ist "Clean as You Go"?', back: 'Während des Kochens aufräumen: Wartezeiten nutzen, sofort abspülen, Abfall entsorgen, Brett abwischen, Zutaten zurückstellen.' },
      { front: 'Was ist der häufigste Anfänger-Fehler beim Workflow?', back: 'Das Rezept erst lesen, während man schon kocht. Immer VORHER komplett durchlesen!' },
      { front: 'Was gehört zur Arbeitsplatz-Einrichtung?', back: 'Freie Arbeitsfläche, großes Schneidebrett (mit feuchtem Tuch), Messer, Abfallschüssel, kleine Schüsseln für Mise en Place, Küchentücher.' },
      { front: 'Was ist Batch-Verarbeitung in der Küche?', back: 'Alle gleichen Zutaten zusammen schneiden (alle Zwiebeln, dann alle Karotten). Nicht ständig zwischen Zutaten wechseln.' },
      { front: 'Wie soll die Küche aussehen, wenn das Essen auf dem Teller ist?', back: 'Fast sauber! Nur die letzten Pfannen und Teller bleiben. Kein Berg von Geschirr. Das ist das Ziel von Clean as You Go.' }
    ],
    en: [
      { front: 'What is "Clean as You Go"?', back: 'Cleaning during cooking: use wait times, wash immediately, dispose of scraps, wipe board, put ingredients away.' },
      { front: 'What is the most common beginner workflow mistake?', back: 'Reading the recipe while already cooking. Always read COMPLETELY beforehand!' },
      { front: 'What belongs to workspace setup?', back: 'Clear counter, large cutting board (with damp cloth), knife, scrap bowl, small bowls for mise en place, kitchen towels.' },
      { front: 'What is batch processing in the kitchen?', back: 'Cut all same ingredients together (all onions, then all carrots). Don\'t constantly switch between ingredients.' },
      { front: 'How should the kitchen look when food is plated?', back: 'Almost clean! Only last pans and plates remain. No mountain of dishes. That\'s the goal of clean as you go.' }
    ]
  }
};
