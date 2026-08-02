import React from 'react';

export const firstMealLesson = {
  id: 'c1_m1_first_meal',
  title: { 
    en: '1.10 Your First Complete Meal', 
    de: '1.10 Dein erstes komplettes Gericht' 
  },
  description: { 
    en: 'Step-by-step guide to cooking a complete simple meal from scratch: pasta with fresh tomato sauce, salad, and garlic bread.', 
    de: 'Schritt-für-Schritt-Anleitung für ein komplettes einfaches Gericht von Grund auf: Pasta mit frischer Tomatensauce, Salat und Knoblauchbrot.' 
  },
  category: 'basics',
  
  content: {
    de: `
### Dein erstes komplettes Gericht: Von Null auf Teller 🍝

Jetzt wird es ernst – aber auf die beste Art. Du wirst dein erstes richtiges Gericht komplett selbst kochen: **Pasta mit frischer Tomatensauce, grüner Salat und Knoblauchbrot.** Dieses Gericht vereint alles, was du bisher gelernt hast: Mise en Place, Messerarbeit, Timing und verschiedene Techniken.

<div className="bg-amber-50 dark:bg-amber-900/20 p-4 rounded-lg border-l-4 border-amber-500 my-4">
  <h4 className="font-bold text-amber-800 dark:text-amber-300 mb-2">Warum dieses Gericht?</h4>
  <p className="text-sm text-amber-700 dark:text-amber-300">Es ist einfach genug für Anfänger, aber komplex genug, um echte Fähigkeiten zu trainieren. Du übst: Zwiebelschneiden, Knoblauch hacken, Tomaten vorbereiten, Wasser kochen, Timing, Abschmecken, Kräuter verwenden und Workflow. Und am Ende hast du ein leckeres Essen!</p>
</div>

---

### Einkaufsliste (für 2 Personen)

<div className="grid md:grid-cols-2 gap-4 my-6">
  <div className="bg-white dark:bg-stone-800 p-4 rounded-lg shadow-sm">
    <h4 className="font-bold text-stone-800 dark:text-stone-200 mb-2">Tomatensauce</h4>
    <ul className="text-sm text-stone-600 dark:text-stone-400 list-disc list-inside space-y-1">
      <li>1 Dose geschälte Tomaten (400g) ODER 6 reife Tomaten</li>
      <li>1 mittelgroße Zwiebel</li>
      <li>2-3 Knoblauchzehen</li>
      <li>2 EL Olivenöl</li>
      <li>Salz, Pfeffer</li>
      <li>1 TL Zucker (optional, gegen Säure)</li>
      <li>Frisches Basilikum (ein kleiner Bund)</li>
    </ul>
  </div>
  <div className="bg-white dark:bg-stone-800 p-4 rounded-lg shadow-sm">
    <h4 className="font-bold text-stone-800 dark:text-stone-200 mb-2">Rest</h4>
    <ul className="text-sm text-stone-600 dark:text-stone-400 list-disc list-inside space-y-1">
      <li>250g Pasta (Spaghetti oder Penne)</li>
      <li>Parmesan (ein Stück zum Reiben)</li>
      <li>1 Baguette oder Ciabatta</li>
      <li>1-2 Knoblauchzehen (für Brot)</li>
      <li>Butter (weich)</li>
      <li>Gemischter Salat (gewaschen)</li>
      <li>Olivenöl, Essig, Senf (Dressing)</li>
    </ul>
  </div>
</div>

---

### Phase 1: Mise en Place (15 Minuten)

<div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border-l-4 border-blue-500 my-4">
  <h4 className="font-bold text-blue-800 dark:text-blue-300 mb-2">Alles vorbereiten, bevor du den Herd anstellst!</h4>
  <ol className="list-decimal list-inside text-sm text-blue-700 dark:text-blue-300 space-y-2">
    <li><strong>Zwiebel</strong> fein würfeln (5mm). Erinnere dich: Wurzel dranlassen, vertikale Schnitte, Querschnitte.</li>
    <li><strong>Knoblauch</strong> (2-3 Zehen) fein hacken. Grünen Keim entfernen!</li>
    <li><strong>Basilikum</strong> waschen, Blätter abzupfen (Stiele aufheben!), in Chiffonade schneiden.</li>
    <li><strong>Knoblauch fürs Brot</strong> (1-2 Zehen) fein hacken und mit weicher Butter mischen.</li>
    <li><strong>Baguette</strong> schräg einschneiden (nicht ganz durch), Knoblauchbutter in die Einschnitte schmieren.</li>
    <li><strong>Salat</strong> waschen, trockenschleudern. Dressing anrühren: 3 EL Olivenöl + 1 EL Essig + 1 TL Senf + Salz + Pfeffer.</li>
    <li><strong>Parmesan</strong> reiben (ca. 4 EL).</li>
    <li>Alles in kleinen Schüsseln bereitstellen. <strong>Abfallschüssel</strong> neben das Brett!</li>
  </ol>
</div>

---

### Phase 2: Kochen beginnen (30 Minuten)

#### Timing-Plan:

<div className="my-6 p-4 bg-stone-50 dark:bg-stone-800 rounded-lg">
  <div className="space-y-3">
    <div className="flex items-center gap-3 p-2 bg-blue-100 dark:bg-blue-900/30 rounded">
      <span className="font-bold text-blue-800 dark:text-blue-300 w-16">0:00</span>
      <span className="text-sm text-blue-700 dark:text-blue-300">Großen Topf mit Wasser aufsetzen (Deckel drauf = schneller heiß)</span>
    </div>
    <div className="flex items-center gap-3 p-2 bg-orange-100 dark:bg-orange-900/30 rounded">
      <span className="font-bold text-orange-800 dark:text-orange-300 w-16">0:02</span>
      <span className="text-sm text-orange-700 dark:text-orange-300">Ofen auf 180°C vorheizen (für Knoblauchbrot)</span>
    </div>
    <div className="flex items-center gap-3 p-2 bg-green-100 dark:bg-green-900/30 rounded">
      <span className="font-bold text-green-800 dark:text-green-300 w-16">0:03</span>
      <span className="text-sm text-green-700 dark:text-green-300">Sauce starten: Olivenöl in Pfanne, Zwiebeln anschwitzen (mittlere Hitze, 5 Min)</span>
    </div>
    <div className="flex items-center gap-3 p-2 bg-green-100 dark:bg-green-900/30 rounded">
      <span className="font-bold text-green-800 dark:text-green-300 w-16">0:08</span>
      <span className="text-sm text-green-700 dark:text-green-300">Knoblauch zu den Zwiebeln geben (nur 30-60 Sek!), Basilikumstiele dazu</span>
    </div>
    <div className="flex items-center gap-3 p-2 bg-green-100 dark:bg-green-900/30 rounded">
      <span className="font-bold text-green-800 dark:text-green-300 w-16">0:09</span>
      <span className="text-sm text-green-700 dark:text-green-300">Tomaten dazugeben, mit Holzlöffel zerdrücken, Salz + Pfeffer + Zucker</span>
    </div>
    <div className="flex items-center gap-3 p-2 bg-green-100 dark:bg-green-900/30 rounded">
      <span className="font-bold text-green-800 dark:text-green-300 w-16">0:10</span>
      <span className="text-sm text-green-700 dark:text-green-300">Sauce auf niedrige Hitze köcheln lassen (15-20 Min)</span>
    </div>
    <div className="flex items-center gap-3 p-2 bg-orange-100 dark:bg-orange-900/30 rounded">
      <span className="font-bold text-orange-800 dark:text-orange-300 w-16">0:10</span>
      <span className="text-sm text-orange-700 dark:text-orange-300">Knoblauchbrot in den Ofen (10-12 Min)</span>
    </div>
    <div className="flex items-center gap-3 p-2 bg-blue-100 dark:bg-blue-900/30 rounded">
      <span className="font-bold text-blue-800 dark:text-blue-300 w-16">0:12</span>
      <span className="text-sm text-blue-700 dark:text-blue-300">Wasser kocht → großzügig salzen → Pasta rein (Kochzeit laut Packung)</span>
    </div>
    <div className="flex items-center gap-3 p-2 bg-purple-100 dark:bg-purple-900/30 rounded">
      <span className="font-bold text-purple-800 dark:text-purple-300 w-16">0:15</span>
      <span className="text-sm text-purple-700 dark:text-purple-300">WARTEZEIT → Aufräumen! Mise-en-Place-Schüsseln spülen, Brett abwischen</span>
    </div>
    <div className="flex items-center gap-3 p-2 bg-orange-100 dark:bg-orange-900/30 rounded">
      <span className="font-bold text-orange-800 dark:text-orange-300 w-16">0:22</span>
      <span className="text-sm text-orange-700 dark:text-orange-300">Knoblauchbrot aus dem Ofen nehmen</span>
    </div>
    <div className="flex items-center gap-3 p-2 bg-blue-100 dark:bg-blue-900/30 rounded">
      <span className="font-bold text-blue-800 dark:text-blue-300 w-16">0:23</span>
      <span className="text-sm text-blue-700 dark:text-blue-300">Pasta PROBIEREN (al dente? noch etwas Biss = perfekt)</span>
    </div>
    <div className="flex items-center gap-3 p-2 bg-green-100 dark:bg-green-900/30 rounded">
      <span className="font-bold text-green-800 dark:text-green-300 w-16">0:25</span>
      <span className="text-sm text-green-700 dark:text-green-300">Sauce abschmecken! Salz? Pfeffer? Zucker (gegen Säure)? Basilikumstiele entfernen</span>
    </div>
    <div className="flex items-center gap-3 p-2 bg-red-100 dark:bg-red-900/30 rounded">
      <span className="font-bold text-red-800 dark:text-red-300 w-16">0:26</span>
      <span className="text-sm text-red-700 dark:text-red-300">EINE TASSE PASTA-WASSER RETTEN! Dann Pasta abgießen</span>
    </div>
    <div className="flex items-center gap-3 p-2 bg-green-100 dark:bg-green-900/30 rounded">
      <span className="font-bold text-green-800 dark:text-green-300 w-16">0:27</span>
      <span className="text-sm text-green-700 dark:text-green-300">Pasta zur Sauce geben, frisches Basilikum drüber, etwas Pasta-Wasser</span>
    </div>
    <div className="flex items-center gap-3 p-2 bg-yellow-100 dark:bg-yellow-900/30 rounded">
      <span className="font-bold text-yellow-800 dark:text-yellow-300 w-16">0:28</span>
      <span className="text-sm text-yellow-700 dark:text-yellow-300">Salat mit Dressing anmachen (erst jetzt, sonst wird er labberig)</span>
    </div>
    <div className="flex items-center gap-3 p-2 bg-red-100 dark:bg-red-900/30 rounded">
      <span className="font-bold text-red-800 dark:text-red-300 w-16">0:30</span>
      <span className="text-sm text-red-700 dark:text-red-300">SERVIEREN! Pasta auf Teller, Parmesan drüber, Brot und Salat dazu. Fertig!</span>
    </div>
  </div>
</div>

---

### Die Sauce im Detail

<div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border-l-4 border-green-500 my-4">
  <h4 className="font-bold text-green-800 dark:text-green-300 mb-2">Wichtige Details:</h4>
  <ul className="list-disc list-inside text-sm text-green-700 dark:text-green-300 space-y-2">
    <li><strong>Zwiebeln anschwitzen, NICHT bräunen:</strong> Mittlere Hitze, rühren, bis sie glasig und weich sind (5 Min). Bräunen = bitter.</li>
    <li><strong>Knoblauch nur 30-60 Sek:</strong> Er verbrennt sofort! Erst reinwerfen, wenn Zwiebeln fertig sind.</li>
    <li><strong>Tomaten zerdrücken:</strong> Mit Holzlöffel gegen den Pfannenboden drücken. Nicht pürieren – Textur ist gewollt!</li>
    <li><strong>Zucker gegen Säure:</strong> 1 TL Zucker nimmt die Schärfe der Tomaten. Kein süßer Geschmack, nur Balance.</li>
    <li><strong>Basilikumstiele mitkochen:</strong> Sie geben Aroma ab. Vor dem Servieren entfernen. Frische Blätter erst am Ende!</li>
  </ul>
</div>

---

### Der geheime Tipp: Pasta-Wasser

<div className="p-4 bg-amber-50 dark:bg-amber-900/20 rounded-lg border-l-4 border-amber-500 my-4">
  <h4 className="font-bold text-amber-800 dark:text-amber-300 mb-2">Warum Pasta-Wasser Gold wert ist</h4>
  <p className="text-sm text-amber-700 dark:text-amber-300">Das stärkehaltige Kochwasser der Pasta bindet die Sauce und lässt sie seidig an der Pasta haften. <strong>Immer eine Tasse aufheben</strong> bevor du abgießt! 2-3 EL in die Sauce rühren → magische Konsistenz.</p>
</div>

---

### Abschmecken: Der letzte Schliff

<div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border-l-4 border-blue-500 my-4">
  <h4 className="font-bold text-blue-800 dark:text-blue-300 mb-2">Probieren, probieren, probieren!</h4>
  <ol className="list-decimal list-inside text-sm text-blue-700 dark:text-blue-300 space-y-2">
    <li>Schmecke die Sauce mit einem sauberen Löffel ab.</li>
    <li><strong>Zu fade?</strong> Mehr Salz. (Immer in kleinen Schritten!)</li>
    <li><strong>Zu sauer?</strong> Eine Prise Zucker.</li>
    <li><strong>Zu flach?</strong> Etwas Pfeffer oder ein Schuss Olivenöl.</li>
    <li><strong>Zu dick?</strong> Etwas Pasta-Wasser.</li>
    <li><strong>Perfekt?</strong> Ab auf den Teller!</li>
  </ol>
</div>

---

### Sicherheitshinweise

<div className="p-4 bg-red-50 dark:bg-red-900/20 rounded-lg border-l-4 border-red-500 my-4">
  <h4 className="font-bold text-red-800 dark:text-red-300 mb-2">Sicherheit beim ersten Gericht:</h4>
  <ul className="list-disc list-inside text-sm text-red-700 dark:text-red-300 space-y-2">
    <li><strong>Kochendes Wasser:</strong> Vorsicht beim Abgießen der Pasta! Dampf verbrennt. Sieb ins Spülbecken stellen.</li>
    <li><strong>Heißes Öl spritzt:</strong> Nasse Zutaten in heißes Öl = Spritzer! Zwiebeln abtupfen.</li>
    <li><strong>Heiße Pfanne:</strong> Griff wird heiß. Topflappen benutzen!</li>
    <li><strong>Ofen:</strong> Knoblauchbrot mit Ofenhandschuhen herausnehmen.</li>
  </ul>
</div>

---

### Häufige Fehler beim ersten Gericht

<div className="space-y-3 my-4">
  <div className="flex items-start gap-3 p-3 bg-stone-50 dark:bg-stone-800 rounded-lg">
    <span className="text-red-500 font-bold text-lg">✗</span>
    <div>
      <p className="font-semibold text-stone-800 dark:text-stone-200">Wasser nicht genug salzen</p>
      <p className="text-sm text-stone-600 dark:text-stone-400">Pasta-Wasser soll "wie das Meer" schmecken. Unsalzene Pasta ist fade, egal wie gut die Sauce ist.</p>
    </div>
  </div>
  <div className="flex items-start gap-3 p-3 bg-stone-50 dark:bg-stone-800 rounded-lg">
    <span className="text-red-500 font-bold text-lg">✗</span>
    <div>
      <p className="font-semibold text-stone-800 dark:text-stone-200">Pasta abspülen</p>
      <p className="text-sm text-stone-600 dark:text-stone-400">NIEMALS Pasta nach dem Kochen abspülen! Du spülst die Stärke weg, die die Sauce haften lässt.</p>
    </div>
  </div>
  <div className="flex items-start gap-3 p-3 bg-stone-50 dark:bg-stone-800 rounded-lg">
    <span className="text-red-500 font-bold text-lg">✗</span>
    <div>
      <p className="font-semibold text-stone-800 dark:text-stone-200">Nicht abschmecken</p>
      <p className="text-sm text-stone-600 dark:text-stone-400">Du MUSST die Sauce vor dem Servieren probieren und korrigieren. Abschmecken ist keine Option, sondern Pflicht.</p>
    </div>
  </div>
</div>

---

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border-2 border-green-300 my-4">
  <h3 className="font-bold text-green-800 dark:text-green-300 mb-4">🎯 Deine Mission: Koch das Gericht!</h3>
  <p className="text-sm text-green-700 dark:text-green-300 mb-4">Folge dem Timing-Plan oben und koche dein erstes komplettes Gericht. Sei stolz auf das Ergebnis – egal wie es aussieht!</p>
  <ol className="list-decimal list-inside space-y-2 text-green-700 dark:text-green-300">
    <li>Kaufe alle Zutaten ein.</li>
    <li>Bereite alles als Mise en Place vor (Phase 1).</li>
    <li>Folge dem Timing-Plan (Phase 2).</li>
    <li>Schmecke die Sauce ab und korrigiere.</li>
    <li>Serviere: Pasta + Sauce + Parmesan + Basilikum, Salat daneben, Brot dazu.</li>
    <li>Genieße dein Essen!</li>
    <li>Bewerte: Was war gut? Was würdest du ändern? Notiere es!</li>
  </ol>
</div>
    `,
    en: `
### Your First Complete Meal: From Zero to Plate 🍝

Now it gets real – in the best way. You're going to cook your first proper meal completely by yourself: **Pasta with fresh tomato sauce, green salad, and garlic bread.** This dish combines everything you've learned so far: mise en place, knife work, timing, and various techniques.

<div className="bg-amber-50 dark:bg-amber-900/20 p-4 rounded-lg border-l-4 border-amber-500 my-4">
  <h4 className="font-bold text-amber-800 dark:text-amber-300 mb-2">Why This Dish?</h4>
  <p className="text-sm text-amber-700 dark:text-amber-300">It's simple enough for beginners but complex enough to train real skills. You'll practice: dicing onions, mincing garlic, prepping tomatoes, boiling water, timing, seasoning, using herbs, and workflow. And at the end, you have a delicious meal!</p>
</div>

---

### Shopping List (for 2 people)

<div className="grid md:grid-cols-2 gap-4 my-6">
  <div className="bg-white dark:bg-stone-800 p-4 rounded-lg shadow-sm">
    <h4 className="font-bold text-stone-800 dark:text-stone-200 mb-2">Tomato Sauce</h4>
    <ul className="text-sm text-stone-600 dark:text-stone-400 list-disc list-inside space-y-1">
      <li>1 can whole peeled tomatoes (400g) OR 6 ripe tomatoes</li>
      <li>1 medium onion</li>
      <li>2-3 garlic cloves</li>
      <li>2 tbsp olive oil</li>
      <li>Salt, pepper</li>
      <li>1 tsp sugar (optional, against acidity)</li>
      <li>Fresh basil (a small bunch)</li>
    </ul>
  </div>
  <div className="bg-white dark:bg-stone-800 p-4 rounded-lg shadow-sm">
    <h4 className="font-bold text-stone-800 dark:text-stone-200 mb-2">The Rest</h4>
    <ul className="text-sm text-stone-600 dark:text-stone-400 list-disc list-inside space-y-1">
      <li>250g pasta (spaghetti or penne)</li>
      <li>Parmesan (a block to grate)</li>
      <li>1 baguette or ciabatta</li>
      <li>1-2 garlic cloves (for bread)</li>
      <li>Butter (softened)</li>
      <li>Mixed salad greens (washed)</li>
      <li>Olive oil, vinegar, mustard (dressing)</li>
    </ul>
  </div>
</div>

---

### Phase 1: Mise en Place (15 Minutes)

<div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border-l-4 border-blue-500 my-4">
  <h4 className="font-bold text-blue-800 dark:text-blue-300 mb-2">Prep everything before you turn on the stove!</h4>
  <ol className="list-decimal list-inside text-sm text-blue-700 dark:text-blue-300 space-y-2">
    <li><strong>Onion</strong> finely diced (5mm). Remember: root on, vertical cuts, cross cuts.</li>
    <li><strong>Garlic</strong> (2-3 cloves) finely minced. Remove green germ!</li>
    <li><strong>Basil</strong> washed, leaves picked (save stems!), cut into chiffonade.</li>
    <li><strong>Garlic for bread</strong> (1-2 cloves) finely minced and mixed with soft butter.</li>
    <li><strong>Baguette</strong> sliced diagonally (not all the way through), garlic butter spread into cuts.</li>
    <li><strong>Salad</strong> washed, spun dry. Whisk dressing: 3 tbsp olive oil + 1 tbsp vinegar + 1 tsp mustard + salt + pepper.</li>
    <li><strong>Parmesan</strong> grated (about 4 tbsp).</li>
    <li>Everything in small bowls. <strong>Scrap bowl</strong> next to the board!</li>
  </ol>
</div>

---

### Phase 2: Start Cooking (30 Minutes)

#### Timing Plan:

<div className="my-6 p-4 bg-stone-50 dark:bg-stone-800 rounded-lg">
  <div className="space-y-3">
    <div className="flex items-center gap-3 p-2 bg-blue-100 dark:bg-blue-900/30 rounded">
      <span className="font-bold text-blue-800 dark:text-blue-300 w-16">0:00</span>
      <span className="text-sm text-blue-700 dark:text-blue-300">Put large pot of water on (lid on = heats faster)</span>
    </div>
    <div className="flex items-center gap-3 p-2 bg-orange-100 dark:bg-orange-900/30 rounded">
      <span className="font-bold text-orange-800 dark:text-orange-300 w-16">0:02</span>
      <span className="text-sm text-orange-700 dark:text-orange-300">Preheat oven to 180°C/350°F (for garlic bread)</span>
    </div>
    <div className="flex items-center gap-3 p-2 bg-green-100 dark:bg-green-900/30 rounded">
      <span className="font-bold text-green-800 dark:text-green-300 w-16">0:03</span>
      <span className="text-sm text-green-700 dark:text-green-300">Start sauce: olive oil in pan, sweat onions (medium heat, 5 min)</span>
    </div>
    <div className="flex items-center gap-3 p-2 bg-green-100 dark:bg-green-900/30 rounded">
      <span className="font-bold text-green-800 dark:text-green-300 w-16">0:08</span>
      <span className="text-sm text-green-700 dark:text-green-300">Add garlic to onions (only 30-60 sec!), add basil stems</span>
    </div>
    <div className="flex items-center gap-3 p-2 bg-green-100 dark:bg-green-900/30 rounded">
      <span className="font-bold text-green-800 dark:text-green-300 w-16">0:09</span>
      <span className="text-sm text-green-700 dark:text-green-300">Add tomatoes, crush with wooden spoon, add salt + pepper + sugar</span>
    </div>
    <div className="flex items-center gap-3 p-2 bg-green-100 dark:bg-green-900/30 rounded">
      <span className="font-bold text-green-800 dark:text-green-300 w-16">0:10</span>
      <span className="text-sm text-green-700 dark:text-green-300">Reduce sauce to low simmer (15-20 min)</span>
    </div>
    <div className="flex items-center gap-3 p-2 bg-orange-100 dark:bg-orange-900/30 rounded">
      <span className="font-bold text-orange-800 dark:text-orange-300 w-16">0:10</span>
      <span className="text-sm text-orange-700 dark:text-orange-300">Garlic bread into oven (10-12 min)</span>
    </div>
    <div className="flex items-center gap-3 p-2 bg-blue-100 dark:bg-blue-900/30 rounded">
      <span className="font-bold text-blue-800 dark:text-blue-300 w-16">0:12</span>
      <span className="text-sm text-blue-700 dark:text-blue-300">Water boils → salt generously → pasta in (cook time per package)</span>
    </div>
    <div className="flex items-center gap-3 p-2 bg-purple-100 dark:bg-purple-900/30 rounded">
      <span className="font-bold text-purple-800 dark:text-purple-300 w-16">0:15</span>
      <span className="text-sm text-purple-700 dark:text-purple-300">WAIT TIME → Clean up! Wash mise en place bowls, wipe board</span>
    </div>
    <div className="flex items-center gap-3 p-2 bg-orange-100 dark:bg-orange-900/30 rounded">
      <span className="font-bold text-orange-800 dark:text-orange-300 w-16">0:22</span>
      <span className="text-sm text-orange-700 dark:text-orange-300">Take garlic bread out of oven</span>
    </div>
    <div className="flex items-center gap-3 p-2 bg-blue-100 dark:bg-blue-900/30 rounded">
      <span className="font-bold text-blue-800 dark:text-blue-300 w-16">0:23</span>
      <span className="text-sm text-blue-700 dark:text-blue-300">TASTE pasta (al dente? still a bit of bite = perfect)</span>
    </div>
    <div className="flex items-center gap-3 p-2 bg-green-100 dark:bg-green-900/30 rounded">
      <span className="font-bold text-green-800 dark:text-green-300 w-16">0:25</span>
      <span className="text-sm text-green-700 dark:text-green-300">Taste sauce! Salt? Pepper? Sugar (against acidity)? Remove basil stems</span>
    </div>
    <div className="flex items-center gap-3 p-2 bg-red-100 dark:bg-red-900/30 rounded">
      <span className="font-bold text-red-800 dark:text-red-300 w-16">0:26</span>
      <span className="text-sm text-red-700 dark:text-red-300">SAVE ONE CUP OF PASTA WATER! Then drain pasta</span>
    </div>
    <div className="flex items-center gap-3 p-2 bg-green-100 dark:bg-green-900/30 rounded">
      <span className="font-bold text-green-800 dark:text-green-300 w-16">0:27</span>
      <span className="text-sm text-green-700 dark:text-green-300">Add pasta to sauce, fresh basil on top, splash of pasta water</span>
    </div>
    <div className="flex items-center gap-3 p-2 bg-yellow-100 dark:bg-yellow-900/30 rounded">
      <span className="font-bold text-yellow-800 dark:text-yellow-300 w-16">0:28</span>
      <span className="text-sm text-yellow-700 dark:text-yellow-300">Dress the salad (only now, otherwise it goes soggy)</span>
    </div>
    <div className="flex items-center gap-3 p-2 bg-red-100 dark:bg-red-900/30 rounded">
      <span className="font-bold text-red-800 dark:text-red-300 w-16">0:30</span>
      <span className="text-sm text-red-700 dark:text-red-300">SERVE! Pasta on plates, parmesan on top, bread and salad alongside. Done!</span>
    </div>
  </div>
</div>

---

### The Sauce in Detail

<div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border-l-4 border-green-500 my-4">
  <h4 className="font-bold text-green-800 dark:text-green-300 mb-2">Important Details:</h4>
  <ul className="list-disc list-inside text-sm text-green-700 dark:text-green-300 space-y-2">
    <li><strong>Sweat onions, DON'T brown:</strong> Medium heat, stir until translucent and soft (5 min). Browning = bitter.</li>
    <li><strong>Garlic only 30-60 sec:</strong> It burns instantly! Only add when onions are done.</li>
    <li><strong>Crush tomatoes:</strong> Press with wooden spoon against pan bottom. Don't purée – texture is wanted!</li>
    <li><strong>Sugar against acidity:</strong> 1 tsp sugar takes the edge off tomatoes. No sweet taste, just balance.</li>
    <li><strong>Cook basil stems along:</strong> They release aroma. Remove before serving. Fresh leaves only at the end!</li>
  </ul>
</div>

---

### The Secret Tip: Pasta Water

<div className="p-4 bg-amber-50 dark:bg-amber-900/20 rounded-lg border-l-4 border-amber-500 my-4">
  <h4 className="font-bold text-amber-800 dark:text-amber-300 mb-2">Why Pasta Water is Liquid Gold</h4>
  <p className="text-sm text-amber-700 dark:text-amber-300">The starchy cooking water from pasta binds the sauce and makes it cling silkily to the pasta. <strong>Always save a cup</strong> before draining! Stir 2-3 tbsp into the sauce → magical consistency.</p>
</div>

---

### Seasoning: The Final Touch

<div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border-l-4 border-blue-500 my-4">
  <h4 className="font-bold text-blue-800 dark:text-blue-300 mb-2">Taste, taste, taste!</h4>
  <ol className="list-decimal list-inside text-sm text-blue-700 dark:text-blue-300 space-y-2">
    <li>Taste the sauce with a clean spoon.</li>
    <li><strong>Too bland?</strong> More salt. (Always in small increments!)</li>
    <li><strong>Too acidic?</strong> A pinch of sugar.</li>
    <li><strong>Too flat?</strong> Some pepper or a drizzle of olive oil.</li>
    <li><strong>Too thick?</strong> Some pasta water.</li>
    <li><strong>Perfect?</strong> Onto the plate!</li>
  </ol>
</div>

---

### Safety Tips

<div className="p-4 bg-red-50 dark:bg-red-900/20 rounded-lg border-l-4 border-red-500 my-4">
  <h4 className="font-bold text-red-800 dark:text-red-300 mb-2">Safety for Your First Dish:</h4>
  <ul className="list-disc list-inside text-sm text-red-700 dark:text-red-300 space-y-2">
    <li><strong>Boiling water:</strong> Careful when draining pasta! Steam burns. Place colander in the sink.</li>
    <li><strong>Hot oil splatters:</strong> Wet ingredients in hot oil = splatter! Pat onions dry.</li>
    <li><strong>Hot pan:</strong> Handle gets hot. Use pot holders!</li>
    <li><strong>Oven:</strong> Use oven mitts to remove garlic bread.</li>
  </ul>
</div>

---

### Common Mistakes for the First Dish

<div className="space-y-3 my-4">
  <div className="flex items-start gap-3 p-3 bg-stone-50 dark:bg-stone-800 rounded-lg">
    <span className="text-red-500 font-bold text-lg">✗</span>
    <div>
      <p className="font-semibold text-stone-800 dark:text-stone-200">Not salting the water enough</p>
      <p className="text-sm text-stone-600 dark:text-stone-400">Pasta water should taste "like the sea." Unsalted pasta is bland, no matter how good the sauce.</p>
    </div>
  </div>
  <div className="flex items-start gap-3 p-3 bg-stone-50 dark:bg-stone-800 rounded-lg">
    <span className="text-red-500 font-bold text-lg">✗</span>
    <div>
      <p className="font-semibold text-stone-800 dark:text-stone-200">Rinsing pasta</p>
      <p className="text-sm text-stone-600 dark:text-stone-400">NEVER rinse pasta after cooking! You wash away the starch that makes sauce cling.</p>
    </div>
  </div>
  <div className="flex items-start gap-3 p-3 bg-stone-50 dark:bg-stone-800 rounded-lg">
    <span className="text-red-500 font-bold text-lg">✗</span>
    <div>
      <p className="font-semibold text-stone-800 dark:text-stone-200">Not tasting</p>
      <p className="text-sm text-stone-600 dark:text-stone-400">You MUST taste and adjust the sauce before serving. Tasting isn't optional, it's mandatory.</p>
    </div>
  </div>
</div>

---

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border-2 border-green-300 my-4">
  <h3 className="font-bold text-green-800 dark:text-green-300 mb-4">🎯 Your Mission: Cook the Meal!</h3>
  <p className="text-sm text-green-700 dark:text-green-300 mb-4">Follow the timing plan above and cook your first complete meal. Be proud of the result – no matter how it looks!</p>
  <ol className="list-decimal list-inside space-y-2 text-green-700 dark:text-green-300">
    <li>Buy all ingredients.</li>
    <li>Prep everything as mise en place (Phase 1).</li>
    <li>Follow the timing plan (Phase 2).</li>
    <li>Taste the sauce and adjust.</li>
    <li>Serve: pasta + sauce + parmesan + basil, salad on the side, bread alongside.</li>
    <li>Enjoy your meal!</li>
    <li>Evaluate: What went well? What would you change? Write it down!</li>
  </ol>
</div>
    `
  },

  task: {
    de: {
      title: 'Dein erstes Gericht kochen!',
      description: 'Koche das komplette Menü: Pasta mit Tomatensauce, Salat und Knoblauchbrot.',
      checklist: [
        { text: 'Alle Zutaten einkaufen.' },
        { text: 'Mise en Place vorbereiten: Zwiebeln würfeln, Knoblauch hacken, Basilikum schneiden, Dressing mischen.' },
        { text: 'Sauce kochen: Zwiebeln anschwitzen → Knoblauch → Tomaten → köcheln lassen.' },
        { text: 'Pasta al dente kochen (EINE TASSE WASSER AUFHEBEN!).' },
        { text: 'Knoblauchbrot im Ofen goldbraun backen.' },
        { text: 'Sauce abschmecken und korrigieren.' },
        { text: 'Alles zusammenbringen: Pasta + Sauce + Parmesan + Basilikum + Salat + Brot.' },
        { text: 'Notizen machen: Was war gut? Was nächstes Mal anders?' }
      ]
    },
    en: {
      title: 'Cook Your First Meal!',
      description: 'Cook the complete menu: pasta with tomato sauce, salad, and garlic bread.',
      checklist: [
        { text: 'Buy all ingredients.' },
        { text: 'Prepare mise en place: dice onions, mince garlic, cut basil, mix dressing.' },
        { text: 'Cook sauce: sweat onions → garlic → tomatoes → simmer.' },
        { text: 'Cook pasta al dente (SAVE ONE CUP OF WATER!).' },
        { text: 'Bake garlic bread golden in the oven.' },
        { text: 'Taste and adjust the sauce.' },
        { text: 'Bring it all together: pasta + sauce + parmesan + basil + salad + bread.' },
        { text: 'Take notes: What went well? What differently next time?' }
      ]
    }
  },
  
  notes: {
    de: [
      { front: 'Warum Pasta-Wasser aufheben?', back: 'Stärkehaltiges Kochwasser bindet die Sauce und lässt sie seidig an der Pasta haften. 2-3 EL einrühren = magische Konsistenz.' },
      { front: 'Wie salzt man Pasta-Wasser richtig?', back: '"Wie das Meer" – großzügig salzen! Unsalzene Pasta wird fade, egal wie gut die Sauce ist.' },
      { front: 'Warum Pasta nie abspülen?', back: 'Abspülen entfernt die Stärke, die die Sauce an der Pasta haften lässt. Direkt aus dem Topf in die Sauce.' },
      { front: 'Wann kommt Knoblauch in die Pfanne?', back: 'NACH den Zwiebeln, nur 30-60 Sek. Knoblauch verbrennt in Sekunden bei hoher Hitze und wird dann bitter.' },
      { front: 'Was tun wenn die Tomatensauce zu sauer ist?', back: '1 TL Zucker einrühren. Kein süßer Geschmack, nur Balance. Alternative: etwas Butter oder ein Stück Parmesan-Rinde mitkochen.' },
      { front: 'Was ist die richtige Reihenfolge für dieses Gericht?', back: '1. Mise en Place\n2. Wasser aufsetzen + Ofen vorheizen\n3. Sauce starten\n4. Brot in Ofen\n5. Pasta kochen\n6. Aufräumen während Wartezeiten\n7. Alles zusammen servieren' }
    ],
    en: [
      { front: 'Why save pasta water?', back: 'Starchy cooking water binds the sauce and makes it cling silkily to pasta. Stir in 2-3 tbsp = magical consistency.' },
      { front: 'How to salt pasta water properly?', back: '"Like the sea" – salt generously! Unsalted pasta tastes bland no matter how good the sauce.' },
      { front: 'Why never rinse pasta?', back: 'Rinsing removes the starch that makes sauce cling to pasta. Go directly from pot into sauce.' },
      { front: 'When does garlic go in the pan?', back: 'AFTER onions, only 30-60 sec. Garlic burns in seconds at high heat and becomes bitter.' },
      { front: 'What to do if tomato sauce is too acidic?', back: 'Stir in 1 tsp sugar. No sweet taste, just balance. Alternative: a bit of butter or a parmesan rind cooked along.' },
      { front: 'What is the correct order for this dish?', back: '1. Mise en place\n2. Water on + preheat oven\n3. Start sauce\n4. Bread in oven\n5. Cook pasta\n6. Clean during wait times\n7. Serve everything together' }
    ]
  }
};
