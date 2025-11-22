import React from 'react';

export const equipmentLesson = {
  id: 'c1_m1_equipment',
  title: { 
    en: '1.5 Equipment & Tools', 
    de: '1.5 Ausrüstung & Geräte-Kunde' 
  },
  description: { 
    en: 'You don\'t need a lot of gadgets. You need the RIGHT tools. Learn what really matters.', 
    de: 'Du brauchst nicht viele Gadgets. Du brauchst die RICHTIGEN Werkzeuge. Lerne, was wirklich zählt.' 
  },
  category: 'basics',
  
  content: {
    de: `
### Weniger ist mehr 🛠️

Die Werbung will dir einen "Avocadoschneider" und einen "Eierschalensollbruchstellenverursacher" verkaufen. Spar dir das Geld. Ein Profi braucht nur eine Handvoll guter Werkzeuge. Qualität schlägt Quantität immer.

---

### 1. Die Heilige Dreifaltigkeit der Messer 🔪

Du brauchst keine 20 Messer im Block. Du brauchst genau drei:

<div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
  <div className="bg-white dark:bg-stone-800 p-4 rounded-lg border border-stone-200 dark:border-stone-700 flex flex-col items-center text-center">
    <div className="text-4xl mb-2">🗡️</div>
    <h4 className="font-bold mb-1">Das Kochmesser</h4>
    <p className="text-xs text-stone-500 uppercase mb-2">(Chef's Knife)</p>
    <p className="text-sm text-stone-600 dark:text-stone-400">
      Dein Hauptwerkzeug (20cm Klinge). Für 90% aller Arbeiten: Hacken, Schneiden, Wiegen. Investiere hier dein meistes Geld. Es muss gut in der Hand liegen.
    </p>
  </div>

  <div className="bg-white dark:bg-stone-800 p-4 rounded-lg border border-stone-200 dark:border-stone-700 flex flex-col items-center text-center">
    <div className="text-4xl mb-2">🤏</div>
    <h4 className="font-bold mb-1">Das Officemesser</h4>
    <p className="text-xs text-stone-500 uppercase mb-2">(Paring Knife)</p>
    <p className="text-sm text-stone-600 dark:text-stone-400">
      Klein, wendig. Für alles Feine: Schälen, Entkernen, kleine Arbeiten in der Hand (nicht auf dem Brett).
    </p>
  </div>

  <div className="bg-white dark:bg-stone-800 p-4 rounded-lg border border-stone-200 dark:border-stone-700 flex flex-col items-center text-center">
    <div className="text-4xl mb-2">🥖</div>
    <h4 className="font-bold mb-1">Das Sägemesser</h4>
    <p className="text-xs text-stone-500 uppercase mb-2">(Bread Knife)</p>
    <p className="text-sm text-stone-600 dark:text-stone-400">
      Mit Wellenschliff. Für alles mit harter Kruste und weichem Kern: Brot, Tomaten (!), Bratenkruste.
    </p>
  </div>
</div>

---

### 2. Töpfe & Pfannen: Die Materialkunde

Nicht jede Pfanne kann alles.

<div className="space-y-4 my-6">
  <div className="p-4 bg-stone-100 dark:bg-stone-900 rounded-lg border-l-4 border-stone-500">
    <h4 className="font-bold text-stone-800 dark:text-stone-200">🍳 Beschichtet (Teflon/Keramik)</h4>
    <p className="text-sm text-stone-700 dark:text-stone-400">
      <strong>Gut für:</strong> Eier, Pfannkuchen, Fisch. Alles was klebt.
      <br/><strong>Nachteil:</strong> Keine hohen Temperaturen! Nicht für Steaks geeignet (Beschichtung geht kaputt).
    </p>
  </div>

  <div className="p-4 bg-zinc-100 dark:bg-zinc-800 rounded-lg border-l-4 border-zinc-400">
    <h4 className="font-bold text-zinc-800 dark:text-zinc-200">🥘 Edelstahl</h4>
    <p className="text-sm text-zinc-700 dark:text-zinc-400">
      <strong>Gut für:</strong> Saucen, Kochen, Anbraten (wenn man weiß wie). Unzerstörbar. Spülmaschinenfest.
      <br/><strong>Nachteil:</strong> Essen klebt an, wenn die Pfanne nicht heiß genug ist oder zu wenig Fett benutzt wird.
    </p>
  </div>

  <div className="p-4 bg-slate-200 dark:bg-slate-800 rounded-lg border-l-4 border-slate-900">
    <h4 className="font-bold text-slate-900 dark:text-slate-100">🏋️ Gusseisen</h4>
    <p className="text-sm text-slate-800 dark:text-slate-300">
      <strong>Gut für:</strong> Steaks! Speichert Hitze extrem gut und lange. Hält ewig.
      <br/><strong>Nachteil:</strong> Schwer, darf nicht in die Spülmaschine, muss gepflegt werden ("einbrennen").
    </p>
  </div>
</div>

---

### 3. Dein Herd & Ofen

<div className="grid md:grid-cols-2 gap-6 my-6">
  
  <div className="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-lg">
    <h4 className="font-bold text-orange-800 dark:text-orange-300 mb-2">Der Ofen</h4>
    <ul className="text-sm space-y-2 text-orange-700 dark:text-orange-300 list-disc list-inside">
      <li>
        <strong>Ober-/Unterhitze:</strong> Der Standard. Hitze kommt von oben und unten. Gut für Kuchen, Aufläufe. Trocknet nicht so stark aus.
      </li>
      <li>
        <strong>Umluft (Heißluft):</strong> Ein Ventilator verteilt die Hitze. Schneller und gleichmäßiger.
        <br/>👉 <strong>Regel:</strong> Bei Umluft immer <strong>20°C weniger</strong> einstellen als im Rezept für Ober-/Unterhitze steht!
      </li>
      <li>
        <strong>Grill:</strong> Extreme Hitze nur von oben. Zum Gratinieren (Käsekruste) oder Bräunen. Achtung: Verbrennt in Sekunden!
      </li>
    </ul>
  </div>

  <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg">
    <h4 className="font-bold text-red-800 dark:text-red-300 mb-2">Der Herd</h4>
    <ul className="text-sm space-y-2 text-red-700 dark:text-red-300 list-disc list-inside">
      <li><strong>Gas:</strong> Sofortige Hitze, visuelle Kontrolle (Flamme). Profi-Liebling.</li>
      <li><strong>Ceran (Elektro):</strong> Träge. Bleibt lange heiß, braucht lange zum Aufheizen. Restwärme nutzen!</li>
      <li><strong>Induktion:</strong> Schnell wie Gas, effizient wie Elektro. Die Platte selbst wird nicht heiß (nur durch den Topf). Braucht magnetische Töpfe.</li>
    </ul>
  </div>

</div>

### 4. Die "Kleinen Helden"

Unverzichtbar in jeder Schublade:
* **Sparschäler:** Y-Form ist oft ergonomischer.
* **Microplane (Reibe):** Für Zitronenschale, Parmesan, Muskat.
* **Schneebesen:** Zum Emulgieren von Saucen.
* **Teigschaber (Gummilippe):** Damit du Saucen restlos aus dem Topf bekommst ("Geizhals").

### Zusammenfassung

Kaufe lieber **ein** gutes Messer für 50€ als einen Block mit 10 schlechten für 30€. Gute Ausrüstung macht das Kochen leichter und sicherer. Behandle deine Pfannen richtig (keine Gabel in der beschichteten Pfanne!), und sie halten ein Leben lang.
    `,
    en: `
### Less is More 🛠️

Commercials want to sell you an "avocado slicer" and a "banana peeler". Save your money. A pro only needs a handful of good tools. Quality always beats quantity.

---

### 1. The Holy Trinity of Knives 🔪

You don't need 20 knives in a block. You need exactly three:

<div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
  <div className="bg-white dark:bg-stone-800 p-4 rounded-lg border border-stone-200 dark:border-stone-700 flex flex-col items-center text-center">
    <div className="text-4xl mb-2">🗡️</div>
    <h4 className="font-bold mb-1">The Chef's Knife</h4>
    <p className="text-xs text-stone-500 uppercase mb-2">(Kochmesser)</p>
    <p className="text-sm text-stone-600 dark:text-stone-400">
      Your main tool (8 inch / 20cm blade). For 90% of all tasks: Chopping, slicing, mincing. Invest most of your money here. It must feel good in your hand.
    </p>
  </div>

  <div className="bg-white dark:bg-stone-800 p-4 rounded-lg border border-stone-200 dark:border-stone-700 flex flex-col items-center text-center">
    <div className="text-4xl mb-2">🤏</div>
    <h4 className="font-bold mb-1">The Paring Knife</h4>
    <p className="text-xs text-stone-500 uppercase mb-2">(Officemesser)</p>
    <p className="text-sm text-stone-600 dark:text-stone-400">
      Small, agile. For delicate work: Peeling, coring, small tasks in hand (not on the board).
    </p>
  </div>

  <div className="bg-white dark:bg-stone-800 p-4 rounded-lg border border-stone-200 dark:border-stone-700 flex flex-col items-center text-center">
    <div className="text-4xl mb-2">🥖</div>
    <h4 className="font-bold mb-1">The Bread Knife</h4>
    <p className="text-xs text-stone-500 uppercase mb-2">(Sägemesser)</p>
    <p className="text-sm text-stone-600 dark:text-stone-400">
      Serrated edge. For anything with a hard crust and soft interior: Bread, tomatoes (!), roast crusts.
    </p>
  </div>
</div>

---

### 2. Pots & Pans: Material Science

Not every pan can do everything.

<div className="space-y-4 my-6">
  <div className="p-4 bg-stone-100 dark:bg-stone-900 rounded-lg border-l-4 border-stone-500">
    <h4 className="font-bold text-stone-800 dark:text-stone-200">🍳 Non-Stick (Teflon/Ceramic)</h4>
    <p className="text-sm text-stone-700 dark:text-stone-400">
      <strong>Good for:</strong> Eggs, pancakes, fish. Anything that sticks.
      <br/><strong>Downside:</strong> No high heat! Not suitable for steaks (coating gets damaged).
    </p>
  </div>

  <div className="p-4 bg-zinc-100 dark:bg-zinc-800 rounded-lg border-l-4 border-zinc-400">
    <h4 className="font-bold text-zinc-800 dark:text-zinc-200">🥘 Stainless Steel</h4>
    <p className="text-sm text-zinc-700 dark:text-zinc-400">
      <strong>Good for:</strong> Sauces, boiling, searing (if you know how). Indestructible. Dishwasher safe.
      <br/><strong>Downside:</strong> Food sticks if pan isn't hot enough or too little fat is used.
    </p>
  </div>

  <div className="p-4 bg-slate-200 dark:bg-slate-800 rounded-lg border-l-4 border-slate-900">
    <h4 className="font-bold text-slate-900 dark:text-slate-100">🏋️ Cast Iron</h4>
    <p className="text-sm text-slate-800 dark:text-slate-300">
      <strong>Good for:</strong> Steaks! Retains heat extremely well and long. Lasts forever.
      <br/><strong>Downside:</strong> Heavy, no dishwasher, needs maintenance ("seasoning").
    </p>
  </div>
</div>

---

### 3. Your Stove & Oven

<div className="grid md:grid-cols-2 gap-6 my-6">
  
  <div className="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-lg">
    <h4 className="font-bold text-orange-800 dark:text-orange-300 mb-2">The Oven</h4>
    <ul className="text-sm space-y-2 text-orange-700 dark:text-orange-300 list-disc list-inside">
      <li>
        <strong>Top/Bottom Heat:</strong> The standard. Heat from top and bottom. Good for cakes, casseroles. Doesn't dry out as much.
      </li>
      <li>
        <strong>Convection (Fan):</strong> A fan distributes heat. Faster and more even.
        <br/>👉 <strong>Rule:</strong> With convection, always set <strong>20°C (40°F) lower</strong> than stated for Top/Bottom heat!
      </li>
      <li>
        <strong>Broil (Grill):</strong> Extreme heat from top only. For gratinating (cheese crust) or browning. Warning: Burns in seconds!
      </li>
    </ul>
  </div>

  <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg">
    <h4 className="font-bold text-red-800 dark:text-red-300 mb-2">The Stove</h4>
    <ul className="text-sm space-y-2 text-red-700 dark:text-red-300 list-disc list-inside">
      <li><strong>Gas:</strong> Instant heat, visual control (flame). Pro favorite.</li>
      <li><strong>Electric (Ceramic):</strong> Sluggish. Stays hot long, takes long to heat up. Use residual heat!</li>
      <li><strong>Induction:</strong> Fast like gas, efficient like electric. The plate itself doesn't get hot (only via the pot). Needs magnetic pots.</li>
    </ul>
  </div>

</div>

### 4. The "Little Heroes"

Indispensable in every drawer:
* **Peeler:** Y-shape is often more ergonomic.
* **Microplane (Grater):** For lemon zest, parmesan, nutmeg.
* **Whisk:** For emulsifying sauces.
* **Spatula (Rubber scraper):** To get every bit of sauce out of the pot.

### Summary

Better to buy **one** good knife for $50 than a block with 10 bad ones for $30. Good equipment makes cooking easier and safer. Treat your pans right (no metal forks in non-stick pans!), and they will last a lifetime.
    `
  },

  task: {
    de: {
      title: 'Geräte-Check',
      description: 'Lerne deinen Ofen und deine Pfannen kennen.',
      checklist: [
        { text: 'Prüfe deine Pfannen: Welche ist beschichtet? Welche ist Stahl?' },
        { text: 'Ofen-Test: Backe einfache Brötchen einmal mit Umluft und einmal mit Ober-/Unterhitze. Schmecke den Unterschied (Umluft trocknet mehr aus, ist aber knuspriger).' },
        { text: 'Messer-Test: Schneide eine Tomate. Wenn du drücken musst und die Haut nicht sofort durchschnitten wird, ist dein Messer stumpf. Zeit zum Schärfen!' }
      ]
    },
    en: {
      title: 'Equipment Check',
      description: 'Get to know your oven and pans.',
      checklist: [
        { text: 'Check your pans: Which is non-stick? Which is steel?' },
        { text: 'Oven Test: Bake simple rolls once with convection and once with top/bottom heat. Taste the difference (convection dries out more but is crispier).' },
        { text: 'Knife Test: Cut a tomato. If you have to press and the skin isn\'t cut immediately, your knife is dull. Time to sharpen!' }
      ]
    }
  },

  notes: {
    de: [
      {
        front: 'Welche 3 Messer brauchst du wirklich?',
        back: '1. Kochmesser (groß, Allrounder)\n2. Officemesser (klein, Schälen)\n3. Sägemesser (Brot, Krusten)'
      },
      {
        front: 'Wofür nutzt man eine beschichtete Pfanne?',
        back: 'Für alles, was klebt (Eier, Fisch, Pfannkuchen). Niemals zu stark erhitzen!'
      },
      {
        front: 'Was ist der Unterschied zwischen Umluft und Ober-/Unterhitze?',
        back: 'Umluft nutzt einen Ventilator (schneller, gleichmäßiger, trockener). Ober-/Unterhitze ist sanfter (besser für Kuchen). Bei Umluft 20°C weniger einstellen!'
      },
      {
        front: 'Wofür ist die Grillfunktion im Ofen?',
        back: 'Starke Hitze nur von oben. Zum Gratinieren (Überbacken) oder Bräunen. Achtung: Verbrennt schnell!'
      }
    ],
    en: [
      {
        front: 'Which 3 knives do you really need?',
        back: '1. Chef\'s Knife (large, all-rounder)\n2. Paring Knife (small, peeling)\n3. Bread Knife (serrated, crusts)'
      },
      {
        front: 'What do you use a non-stick pan for?',
        back: 'For anything that sticks (eggs, fish, pancakes). Never heat too high!'
      },
      {
        front: 'Difference between Convection and Top/Bottom Heat?',
        back: 'Convection uses a fan (faster, more even, drier). Top/Bottom is gentler (better for cakes). Set 20°C lower for convection!'
      },
      {
        front: 'What is the Broil/Grill function for?',
        back: 'Strong heat from above only. For gratinating or browning. Warning: Burns quickly!'
      }
    ]
  }
};

