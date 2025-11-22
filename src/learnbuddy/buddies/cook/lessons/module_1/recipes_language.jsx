import React from 'react';

export const recipesLanguageLesson = {
  id: 'c1_m1_language',
  title: { 
    en: '1.4 Reading Recipes & Kitchen Language', 
    de: '1.4 Rezepte lesen & Sprache verstehen' 
  },
  description: { 
    en: 'Learn to decipher recipes like a code and understand the professional vocabulary of chefs.', 
    de: 'Lerne, Rezepte wie einen Code zu entschlüsseln und verstehe das Fachvokabular der Köche.' 
  },
  category: 'basics',
  
  content: {
    de: `
### Sprichst du "Küchen-Latein"? 🗣️

Rezepte sind wie Bauanleitungen. Wenn du die Symbole und Begriffe nicht kennst, stürzt das Haus ein (oder das Soufflé fällt zusammen). Viele Anfänger scheitern nicht an ihren Fähigkeiten, sondern weil sie das Rezept falsch interpretieren.

---

### 1. Anatomie eines Rezepts

Ein gutes Rezept besteht aus drei Teilen. Übersehe keinen davon!

<div className="space-y-4 my-6">
  <div className="bg-white dark:bg-stone-800 p-4 rounded-lg shadow-sm border border-stone-200 dark:border-stone-700">
    <h4 className="font-bold text-stone-800 dark:text-stone-200 border-b pb-2 mb-2">1. Der Kopf (Infos)</h4>
    <ul className="text-sm text-stone-600 dark:text-stone-400 space-y-1">
      <li><strong>Portionen:</strong> Für wie viele Personen? (Musst du umrechnen?)</li>
      <li><strong>Zeit:</strong> Vorbereitung vs. Kochzeit. "30 Min" kann heißen: 20 Min schnippeln, 10 Min kochen.</li>
      <li><strong>Temperatur:</strong> Ofeneinstellung (Umluft ist heißer als Ober-/Unterhitze!).</li>
    </ul>
  </div>
  
  <div className="bg-white dark:bg-stone-800 p-4 rounded-lg shadow-sm border border-stone-200 dark:border-stone-700">
    <h4 className="font-bold text-stone-800 dark:text-stone-200 border-b pb-2 mb-2">2. Die Zutatenliste (Mise en Place)</h4>
    <p className="text-sm text-stone-600 dark:text-stone-400 mb-2">
      Lies genau! Die Reihenfolge entspricht meist der Verwendung.
    </p>
    <div className="bg-amber-50 dark:bg-amber-900/20 p-2 rounded text-xs text-amber-800 dark:text-amber-200">
      <strong>Achtung Falle:</strong> "1 Tasse gehackte Nüsse" ist etwas anderes als "1 Tasse Nüsse, gehackt".
      <br/>• Erstes: Erst hacken, dann messen (mehr Nüsse).
      <br/>• Zweites: Erst messen, dann hacken.
      <br/>👉 Deshalb: <strong>Benutze eine Waage (Gramm) statt Volumen (Tassen/Löffel)!</strong> Es ist viel präziser.
    </div>
  </div>

  <div className="bg-white dark:bg-stone-800 p-4 rounded-lg shadow-sm border border-stone-200 dark:border-stone-700">
    <h4 className="font-bold text-stone-800 dark:text-stone-200 border-b pb-2 mb-2">3. Die Zubereitung (Der Weg)</h4>
    <p className="text-sm text-stone-600 dark:text-stone-400">
      Lies ALLES durch, bevor du anfängst. Suche nach versteckten Zeitfallen ("über Nacht kühlen", "2 Stunden gehen lassen").
    </p>
  </div>
</div>

---

### 2. Das Vokabular der Profis

Köche nutzen spezifische Begriffe, weil sie präzise sind. "Kochen" ist nicht gleich "Simmern".

<div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">

<div className="p-4 bg-red-50 dark:bg-red-900/20 rounded-lg">
  <h4 className="font-bold text-red-800 dark:text-red-300 mb-2">Hitze & Pfanne</h4>
  <dl className="text-sm space-y-3">
    <div>
      <dt className="font-bold text-red-700 dark:text-red-400">Anbraten (Searing)</dt>
      <dd>Hohe Hitze! Ziel: Braune Kruste (Röstaromen), nicht durchgaren. Das Fleisch muss "zischen".</dd>
    </div>
    <div>
      <dt className="font-bold text-red-700 dark:text-red-400">Anschwitzen (Sweating)</dt>
      <dd>Mittlere Hitze. Zwiebeln/Gemüse glasig und weich machen, ohne Farbe (nicht braun!).</dd>
    </div>
    <div>
      <dt className="font-bold text-red-700 dark:text-red-400">Sautieren</dt>
      <dd>Von "Sauter" (frz. springen). Kurzbraten unter ständiem Schwenken ("Hüpfen") in der Pfanne.</dd>
    </div>
    <div>
      <dt className="font-bold text-red-700 dark:text-red-400">Ablöschen (Deglazing)</dt>
      <dd>Flüssigkeit (Wein, Brühe) in die heiße Pfanne geben, um den Bratensatz vom Boden zu lösen. Das ist pures Gold für Saucen!</dd>
    </div>
  </dl>
</div>

<div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
  <h4 className="font-bold text-blue-800 dark:text-blue-300 mb-2">Wasser & Sauce</h4>
  <dl className="text-sm space-y-3">
    <div>
      <dt className="font-bold text-blue-700 dark:text-blue-400">Kochen (Boiling)</dt>
      <dd>100°C. Große Blasen. Aggressiv. Nur für Nudeln oder Kartoffeln geeignet.</dd>
    </div>
    <div>
      <dt className="font-bold text-blue-700 dark:text-blue-400">Simmern / Köcheln</dt>
      <dd>ca. 90-95°C. Kleine Bläschen steigen gelegentlich auf. Sanft. Für Saucen, Suppen, Fleisch. <strong>Das meiste "Kochen" ist eigentlich Simmern!</strong></dd>
    </div>
    <div>
      <dt className="font-bold text-blue-700 dark:text-blue-400">Blanchieren</dt>
      <dd>Kurz in kochendes Wasser, dann sofort in Eiswasser ("Abschrecken"). Hält Gemüse knackig und grün.</dd>
    </div>
    <div>
      <dt className="font-bold text-blue-700 dark:text-blue-400">Reduzieren (Einkochen)</dt>
      <dd>Flüssigkeit offen kochen lassen, damit Wasser verdampft. Der Geschmack wird intensiver, die Sauce dicker.</dd>
    </div>
  </dl>
</div>

<div className="p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg col-span-1 md:col-span-2">
  <h4 className="font-bold text-yellow-800 dark:text-yellow-300 mb-2">Veredelung</h4>
  <div className="grid md:grid-cols-2 gap-4">
    <dl className="text-sm space-y-2">
      <div>
        <dt className="font-bold text-yellow-700 dark:text-yellow-400">Gratinieren</dt>
        <dd>Überbacken bei starker Oberhitze (Grillfunktion), bis sich eine Kruste bildet (meist Käse).</dd>
      </div>
    </dl>
    <dl className="text-sm space-y-2">
      <div>
        <dt className="font-bold text-yellow-700 dark:text-yellow-400">Montieren</dt>
        <dd>Kalte Butterstückchen in eine heiße (nicht mehr kochende!) Sauce rühren, um sie zu binden und glänzend zu machen.</dd>
      </div>
    </dl>
  </div>
</div>

</div>

### Zusammenfassung

Ein Rezept zu lesen ist wie eine Landkarte zu studieren, bevor man loswandert.
1. Kenne die Begriffe (Simmern vs. Kochen ist ein Riesenunterschied!).
2. Nutze eine Waage (Gramm > Tassen).
3. Lies immer bis zum Ende, bevor du anfängst.

In der nächsten Lektion schauen wir uns das Werkzeug an, das du für all diese Techniken brauchst.
    `,
    en: `
### Do You Speak "Kitchen Latin"? 🗣️

Recipes are like blueprints. If you don't know the symbols and terms, the house will collapse (or the soufflé will fall). Many beginners fail not because of their skills, but because they misinterpret the recipe.

---

### 1. Anatomy of a Recipe

A good recipe consists of three parts. Don't overlook any of them!

<div className="space-y-4 my-6">
  <div className="bg-white dark:bg-stone-800 p-4 rounded-lg shadow-sm border border-stone-200 dark:border-stone-700">
    <h4 className="font-bold text-stone-800 dark:text-stone-200 border-b pb-2 mb-2">1. The Header (Info)</h4>
    <ul className="text-sm text-stone-600 dark:text-stone-400 space-y-1">
      <li><strong>Servings:</strong> For how many people? (Do you need to convert?)</li>
      <li><strong>Time:</strong> Prep vs. Cook time. "30 mins" can mean: 20 mins chopping, 10 mins cooking.</li>
      <li><strong>Temperature:</strong> Oven setting (Fan is hotter than Top/Bottom heat!).</li>
    </ul>
  </div>
  
  <div className="bg-white dark:bg-stone-800 p-4 rounded-lg shadow-sm border border-stone-200 dark:border-stone-700">
    <h4 className="font-bold text-stone-800 dark:text-stone-200 border-b pb-2 mb-2">2. The Ingredient List (Mise en Place)</h4>
    <p className="text-sm text-stone-600 dark:text-stone-400 mb-2">
      Read carefully! The order usually corresponds to usage.
    </p>
    <div className="bg-amber-50 dark:bg-amber-900/20 p-2 rounded text-xs text-amber-800 dark:text-amber-200">
      <strong>Watch out for traps:</strong> "1 cup chopped nuts" is different from "1 cup nuts, chopped".
      <br/>• First: Chop first, then measure (more nuts).
      <br/>• Second: Measure first, then chop.
      <br/>👉 Therefore: <strong>Use a scale (grams) instead of volume (cups/spoons)!</strong> It is much more precise.
    </div>
  </div>

  <div className="bg-white dark:bg-stone-800 p-4 rounded-lg shadow-sm border border-stone-200 dark:border-stone-700">
    <h4 className="font-bold text-stone-800 dark:text-stone-200 border-b pb-2 mb-2">3. The Preparation (The Path)</h4>
    <p className="text-sm text-stone-600 dark:text-stone-400">
      Read EVERYTHING before you start. Look for hidden time traps ("chill overnight", "let rise for 2 hours").
    </p>
  </div>
</div>

---

### 2. Professional Vocabulary

Chefs use specific terms because they are precise. "Cooking" is not the same as "Simmering".

<div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">

<div className="p-4 bg-red-50 dark:bg-red-900/20 rounded-lg">
  <h4 className="font-bold text-red-800 dark:text-red-300 mb-2">Heat & Pan</h4>
  <dl className="text-sm space-y-3">
    <div>
      <dt className="font-bold text-red-700 dark:text-red-400">Searing</dt>
      <dd>High heat! Goal: Brown crust (roasted flavors), not cooked through. The meat must "sizzle".</dd>
    </div>
    <div>
      <dt className="font-bold text-red-700 dark:text-red-400">Sweating</dt>
      <dd>Medium heat. Make onions/vegetables translucent and soft, without color (no browning!).</dd>
    </div>
    <div>
      <dt className="font-bold text-red-700 dark:text-red-400">Sautéing</dt>
      <dd>From "Sauter" (French: to jump). Cooking quickly while constantly tossing ("jumping") in the pan.</dd>
    </div>
    <div>
      <dt className="font-bold text-red-700 dark:text-red-400">Deglazing</dt>
      <dd>Adding liquid (wine, broth) to the hot pan to loosen the browned bits from the bottom. This is pure gold for sauces!</dd>
    </div>
  </dl>
</div>

<div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
  <h4 className="font-bold text-blue-800 dark:text-blue-300 mb-2">Water & Sauce</h4>
  <dl className="text-sm space-y-3">
    <div>
      <dt className="font-bold text-blue-700 dark:text-blue-400">Boiling</dt>
      <dd>100°C (212°F). Large bubbles. Aggressive. Only suitable for pasta or potatoes.</dd>
    </div>
    <div>
      <dt className="font-bold text-blue-700 dark:text-blue-400">Simmering</dt>
      <dd>Approx. 90-95°C (195-205°F). Small bubbles rise occasionally. Gentle. For sauces, soups, meat. <strong>Most "cooking" is actually simmering!</strong></dd>
    </div>
    <div>
      <dt className="font-bold text-blue-700 dark:text-blue-400">Blanching</dt>
      <dd>Briefly in boiling water, then immediately into ice water ("shocking"). Keeps vegetables crisp and green.</dd>
    </div>
    <div>
      <dt className="font-bold text-blue-700 dark:text-blue-400">Reducing</dt>
      <dd>Boiling liquid openly so water evaporates. Flavor becomes more intense, sauce thickens.</dd>
    </div>
  </dl>
</div>

<div className="p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg col-span-1 md:col-span-2">
  <h4 className="font-bold text-yellow-800 dark:text-yellow-300 mb-2">Finishing</h4>
  <div className="grid md:grid-cols-2 gap-4">
    <dl className="text-sm space-y-2">
      <div>
        <dt className="font-bold text-yellow-700 dark:text-yellow-400">Gratinating (Broiling)</dt>
        <dd>Baking with strong top heat until a crust forms (usually cheese).</dd>
      </div>
    </dl>
    <dl className="text-sm space-y-2">
      <div>
        <dt className="font-bold text-yellow-700 dark:text-yellow-400">Mounting (Montieren)</dt>
        <dd>Stirring cold butter pieces into a hot (no longer boiling!) sauce to bind it and make it glossy.</dd>
      </div>
    </dl>
  </div>
</div>

</div>

### Summary

Reading a recipe is like studying a map before hiking.
1. Know the terms (Simmering vs. Boiling is a huge difference!).
2. Use a scale (Grams > Cups).
3. Always read to the end before you start.

In the next lesson, we'll look at the tools you need for all these techniques.
    `
  },

  task: {
    de: {
      title: 'Rezept-Analyse',
      description: 'Nimm ein beliebiges Kochbuch oder ein Online-Rezept. Lies es durch und markiere alle Begriffe, die du nicht zu 100% erklären könntest. Schlage sie nach. Suche außerdem nach Zeitfallen (z.B. Ruhezeiten).',
      checklist: [
        { text: 'Wähle ein Rezept aus' },
        { text: 'Finde alle Fachbegriffe (z.B. unterheben, dünsten, reduzieren)' },
        { text: 'Identifiziere versteckte Zeiten (Marinieren, Ruhen)' },
        { text: 'Stelle dir den Ablauf im Kopf wie einen Film vor' }
      ]
    },
    en: {
      title: 'Recipe Analysis',
      description: 'Take any cookbook or an online recipe. Read it through and mark all terms you couldn\'t explain 100%. Look them up. Also look for time traps (e.g., resting times).',
      checklist: [
        { text: 'Choose a recipe' },
        { text: 'Find all technical terms (e.g., fold in, steam, reduce)' },
        { text: 'Identify hidden times (marinating, resting)' },
        { text: 'Visualize the process in your head like a movie' }
      ]
    }
  },

  notes: {
    de: [
      {
        front: 'Was ist der Unterschied zwischen Kochen und Simmern?',
        back: 'Kochen = 100°C, starke Blasen (für Nudeln). Simmern = ca. 90°C, sanfte Bläschen (für Saucen/Fleisch).'
      },
      {
        front: 'Was bedeutet "Ablöschen"?',
        back: 'Flüssigkeit (Wein/Brühe) in die heiße Pfanne geben, um den Bratensatz zu lösen.'
      },
      {
        front: 'Was bedeutet "Reduzieren"?',
        back: 'Flüssigkeit einkochen lassen, damit Wasser verdampft und der Geschmack intensiver wird.'
      },
      {
        front: 'Was bedeutet "Anschwitzen"?',
        back: 'In Fett bei mittlerer Hitze garen, bis es glasig/weich ist, aber KEINE Farbe (Bräunung) annimmt.'
      },
      {
        front: 'Warum sollte man Zutaten wiegen statt Tassen zu benutzen?',
        back: 'Weil "1 Tasse Mehl" je nach Dichte extrem unterschiedlich viel wiegen kann. Waagen sind präzise und reproduzierbar.'
      }
    ],
    en: [
      {
        front: 'Difference between Boiling and Simmering?',
        back: 'Boiling = 100°C, strong bubbles (for pasta). Simmering = approx. 90°C, gentle bubbles (for sauces/meat).'
      },
      {
        front: 'What does "Deglazing" mean?',
        back: 'Adding liquid (wine/broth) to a hot pan to release the browned bits from the bottom.'
      },
      {
        front: 'What does "Reducing" mean?',
        back: 'Boiling liquid to evaporate water, intensifying flavor and thickening the sauce.'
      },
      {
        front: 'What does "Sweating" mean?',
        back: 'Cooking in fat over medium heat until translucent/soft, but taking on NO color (browning).'
      },
      {
        front: 'Why weigh ingredients instead of using cups?',
        back: 'Because "1 cup of flour" can vary wildly in weight depending on density. Scales are precise and reproducible.'
      }
    ]
  }
};

