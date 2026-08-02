import React from 'react';

export const potatoCuttingLesson = {
  id: 'c2_m2_potato_cutting',
  title: { 
    en: '2.17 Potato Cutting Techniques', 
    de: '2.17 Kartoffel-Schneidetechniken' 
  },
  description: { 
    en: 'Wedges, cubes, fries, hasselback, and more. The potato is incredibly versatile – master the cuts for every dish.', 
    de: 'Spalten, Würfel, Pommes, Hasselback und mehr. Die Kartoffel ist unglaublich vielseitig – meistere die Schnitte für jedes Gericht.' 
  },
  category: 'techniques',
  
  content: {
    de: `
### Die Kartoffel: Tausend Formen, tausend Möglichkeiten 🥔

Die Kartoffel ist eines der vielseitigsten Lebensmittel überhaupt. Ob Pommes, Gratins, Bratkartoffeln, Kartoffelsalat oder Hasselback – die Schnittform bestimmt maßgeblich Textur und Geschmack. Lerne die wichtigsten Schnitte und du kannst aus einer einfachen Kartoffel dutzende verschiedene Gerichte zaubern.

<div className="bg-amber-50 dark:bg-amber-900/20 p-4 rounded-lg border-l-4 border-amber-500 my-4">
  <h4 className="font-bold text-amber-800 dark:text-amber-300 mb-2">Kartoffelsorten und ihre beste Verwendung</h4>
  <ul className="list-disc list-inside text-sm text-amber-700 dark:text-amber-300 space-y-1">
    <li><strong>Festkochend</strong> (z.B. Drillinge, Charlotte): Salat, Bratkartoffeln, Gratins – behält Form</li>
    <li><strong>Vorwiegend festkochend:</strong> Allrounder – für fast alles geeignet</li>
    <li><strong>Mehligkochend</strong> (z.B. Bintje, Agria): Püree, Suppen, Knödel – wird beim Kochen weich und fluffig</li>
  </ul>
</div>

---

### Vorbereitung: Schälen oder nicht?

<div className="grid md:grid-cols-2 gap-4 my-6">
  <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
    <h4 className="font-bold text-green-800 dark:text-green-300 mb-2">Schale dran lassen</h4>
    <p className="text-sm text-green-700 dark:text-green-300">Spalten, Bratkartoffeln, Ofenkartoffeln, Hasselback, Country-Pommes. Die Schale gibt extra Textur und Nährstoffe. Gründlich waschen!</p>
  </div>
  <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
    <h4 className="font-bold text-blue-800 dark:text-blue-300 mb-2">Schälen</h4>
    <p className="text-sm text-blue-700 dark:text-blue-300">Püree, Gratin, Kartoffelsalat, klassische Pommes, Knödel. Für glatte Textur und elegante Optik. Mit dem Sparschäler dünn schälen.</p>
  </div>
</div>

**Wichtig nach dem Schälen:** Geschälte Kartoffeln in kaltes Wasser legen! Sonst oxidieren sie (werden grau/braun). In Wasser halten sie sich einige Stunden.

---

### 1. Pommes Frites – Der Klassiker

<div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border-l-4 border-blue-500 my-4">
  <h4 className="font-bold text-blue-800 dark:text-blue-300 mb-2">Schritt für Schritt:</h4>
  <ol className="list-decimal list-inside text-sm text-blue-700 dark:text-blue-300 space-y-2">
    <li>Kartoffel schälen (optional bei Country-Style).</li>
    <li>Eine <strong>flache Seite abschneiden</strong> → die Kartoffel liegt stabil.</li>
    <li>In <strong>Scheiben</strong> schneiden (ca. 8-10 mm dick für klassische Pommes, 12-15 mm für dicke).</li>
    <li>Scheiben <strong>übereinanderlegen</strong> und in gleichmäßige Stäbchen schneiden (gleiche Breite wie Dicke).</li>
    <li>Fertige Pommes in <strong>kaltes Wasser</strong> legen (30 Min), um Stärke auszuspülen → crispigeres Ergebnis!</li>
    <li>Vor dem Frittieren/Backen gut <strong>trockentupfen</strong> (Wasser + heißes Fett = Spritzer!).</li>
  </ol>
</div>

<table className="w-full border-collapse my-4">
  <thead>
    <tr className="bg-gray-100 dark:bg-stone-700">
      <th className="border dark:border-stone-600 p-2 text-left">Typ</th>
      <th className="border dark:border-stone-600 p-2 text-left">Maße</th>
      <th className="border dark:border-stone-600 p-2 text-left">Stil</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td className="border dark:border-stone-600 p-2">Pommes Allumettes</td>
      <td className="border dark:border-stone-600 p-2">3 mm x 3 mm</td>
      <td className="border dark:border-stone-600 p-2">Streichholz-Pommes, super knusprig</td>
    </tr>
    <tr>
      <td className="border dark:border-stone-600 p-2">Klassische Pommes</td>
      <td className="border dark:border-stone-600 p-2">8-10 mm x 8-10 mm</td>
      <td className="border dark:border-stone-600 p-2">Standard, außen knusprig, innen weich</td>
    </tr>
    <tr>
      <td className="border dark:border-stone-600 p-2">Steak Fries</td>
      <td className="border dark:border-stone-600 p-2">12-15 mm x 12-15 mm</td>
      <td className="border dark:border-stone-600 p-2">Dick, rustikal, innen cremig</td>
    </tr>
  </tbody>
</table>

---

### 2. Spalten (Wedges) – Rustikal und lecker

Perfekt für Ofenkartoffeln, Grillbeilagen und schnelle Abendessen.

#### Schritt für Schritt:
1. Kartoffel waschen (Schale bleibt dran!).
2. Kartoffel <strong>längs halbieren</strong>.
3. Hälften mit der flachen Seite aufs Brett, erneut <strong>längs halbieren</strong> → 4 Spalten.
4. Für kleinere Spalten: Jedes Viertel nochmal halbieren → 8 Spalten.
5. Alle Spalten sollten ähnlich dick sein!

<div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg my-4">
  <h4 className="font-bold text-green-800 dark:text-green-300 mb-2">Profi-Tipp: Perfekte Ofenspalten</h4>
  <p className="text-sm text-green-700 dark:text-green-300">Mische Spalten mit Olivenöl, Salz, Pfeffer, Paprika und Knoblauchpulver. Auf Backblech in einer Schicht bei 220°C für 30-35 Min. Einmal wenden. Die flache Seite auf dem Blech = maximale Knusprigkeit.</p>
</div>

---

### 3. Würfel – Für Suppen, Eintöpfe, Bratkartoffeln

#### Schritt für Schritt:
1. Kartoffel schälen, eine flache Seite abschneiden.
2. In Scheiben schneiden (Dicke = gewünschte Würfelgröße).
3. Scheiben in Streifen schneiden.
4. Streifen quer in Würfel schneiden.

**Größen:** 1 cm für Suppen, 1,5-2 cm für Eintöpfe, 2-3 cm für Bratkartoffeln.

---

### 4. Hasselback – Das Showpiece

Hasselback-Kartoffeln sehen spektakulär aus und sind einfacher als man denkt. Das Prinzip: Viele dünne Einschnitte, die im Ofen auffächern.

<div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border-l-4 border-blue-500 my-4">
  <h4 className="font-bold text-blue-800 dark:text-blue-300 mb-2">Schritt für Schritt:</h4>
  <ol className="list-decimal list-inside text-sm text-blue-700 dark:text-blue-300 space-y-2">
    <li>Kartoffel waschen (Schale dran lassen).</li>
    <li>Lege die Kartoffel zwischen zwei <strong>Essstäbchen</strong> oder Löffelstiele (als Stopper).</li>
    <li>Schneide dünne Scheiben (2-3 mm) quer – die Stäbchen verhindern, dass du ganz durchschneidest!</li>
    <li>Die Kartoffel bleibt unten verbunden, aber die Scheiben fächern beim Backen auf.</li>
    <li>Mit Olivenöl und Butter beträufeln, Salz, ggf. Knoblauch und Kräuter in die Einschnitte drücken.</li>
    <li>Bei 200°C für 50-60 Min backen, bis sie goldbraun und knusprig sind.</li>
  </ol>
</div>

---

### 5. Scheiben – Für Gratins und Bratkartoffeln

#### Schritt für Schritt:
1. Kartoffel schälen.
2. Eine Seite flach schneiden für Stabilität.
3. Gleichmäßige Scheiben schneiden:
   - **2-3 mm** für Gratin (dünn = gleichmäßig durchgegart)
   - **5-6 mm** für Bratkartoffeln (dicker = mehr Biss)

<div className="bg-amber-50 dark:bg-amber-900/20 p-4 rounded-lg my-4">
  <h4 className="font-bold text-amber-800 dark:text-amber-300 mb-2">Tipp für Bratkartoffeln</h4>
  <p className="text-sm text-amber-700 dark:text-amber-300">Die besten Bratkartoffeln macht man aus <strong>vorgekochten</strong> Kartoffeln! Am Vortag kochen, über Nacht kühlen, dann in Scheiben schneiden und braten. Die Stärke verändert sich und sie werden viel knuspriger.</p>
</div>

---

### 6. Tournierte Kartoffeln (Turned Potatoes) – Die hohe Schule

Eine klassische Profi-Technik: Kartoffeln in gleichmäßige, olivenförmige Stücke schnitzen. Rein ästhetisch, nicht nötig für den Alltag – aber beeindruckend.

#### Technik:
1. Kartoffel schälen und in 5-6 cm Stücke schneiden.
2. Mit einem kleinen, scharfen Messer die Kanten abschneiden.
3. 7 gleichmäßige Schnitte im Bogen ausführen → olivenförmiges Stück.
4. Viel Verschnitt (für Suppe verwenden!), aber beeindruckendes Ergebnis.

---

### Sicherheitshinweise

<div className="p-4 bg-red-50 dark:bg-red-900/20 rounded-lg border-l-4 border-red-500 my-4">
  <h4 className="font-bold text-red-800 dark:text-red-300 mb-2">Sicherheit bei Kartoffeln:</h4>
  <ul className="list-disc list-inside text-sm text-red-700 dark:text-red-300 space-y-2">
    <li><strong>Kartoffeln sind rund und hart!</strong> IMMER zuerst eine flache Seite schneiden für Stabilität.</li>
    <li><strong>Nasse Kartoffeln:</strong> Nach dem Waschen abtrocknen. Nasse Kartoffeln rutschen leicht.</li>
    <li><strong>Stärke ist rutschig:</strong> Schneide auf einem trockenen Brett. Spüle stärkehaltige Hände ab, bevor du das Messer wechselst.</li>
    <li><strong>Grüne Stellen entfernen:</strong> Grüne Kartoffeln enthalten Solanin (giftig!). Großzügig wegschneiden oder ganz entsorgen.</li>
    <li><strong>Hasselback:</strong> Die Essstäbchen-Technik ist der sicherste Weg. Ohne Stopper schneidest du leicht ganz durch.</li>
  </ul>
</div>

---

### Häufige Fehler

<div className="space-y-3 my-4">
  <div className="flex items-start gap-3 p-3 bg-stone-50 dark:bg-stone-800 rounded-lg">
    <span className="text-red-500 font-bold text-lg">✗</span>
    <div>
      <p className="font-semibold text-stone-800 dark:text-stone-200">Ungleichmäßige Stücke</p>
      <p className="text-sm text-stone-600 dark:text-stone-400">Kleine Stücke werden matschig, große bleiben roh. Gilt besonders bei Pommes und Gratin.</p>
    </div>
  </div>
  <div className="flex items-start gap-3 p-3 bg-stone-50 dark:bg-stone-800 rounded-lg">
    <span className="text-red-500 font-bold text-lg">✗</span>
    <div>
      <p className="font-semibold text-stone-800 dark:text-stone-200">Stärke nicht ausspülen</p>
      <p className="text-sm text-stone-600 dark:text-stone-400">Für knusprige Pommes MUSS die Stärke raus! 30 Min in kaltem Wasser, dann trockentupfen.</p>
    </div>
  </div>
  <div className="flex items-start gap-3 p-3 bg-stone-50 dark:bg-stone-800 rounded-lg">
    <span className="text-red-500 font-bold text-lg">✗</span>
    <div>
      <p className="font-semibold text-stone-800 dark:text-stone-200">Keine flache Seite schneiden</p>
      <p className="text-sm text-stone-600 dark:text-stone-400">Runde Kartoffeln rollen – Verletzungsgefahr! Immer zuerst stabilisieren.</p>
    </div>
  </div>
  <div className="flex items-start gap-3 p-3 bg-stone-50 dark:bg-stone-800 rounded-lg">
    <span className="text-red-500 font-bold text-lg">✗</span>
    <div>
      <p className="font-semibold text-stone-800 dark:text-stone-200">Falsche Sorte für den falschen Zweck</p>
      <p className="text-sm text-stone-600 dark:text-stone-400">Mehlige Kartoffeln im Salat = Brei. Festkochende als Püree = Klumpen. Die Sorte muss zum Gericht passen!</p>
    </div>
  </div>
</div>

---

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border-2 border-green-300 my-4">
  <h3 className="font-bold text-green-800 dark:text-green-300 mb-4">🎯 Praktische Übung</h3>
  <ol className="list-decimal list-inside space-y-2 text-green-700 dark:text-green-300">
    <li>Kaufe 6-8 festkochende Kartoffeln.</li>
    <li><strong>Pommes:</strong> Schneide 2 Kartoffeln in klassische Pommes (8-10mm). Lege sie 30 Min in Wasser, trockne ab, backe bei 220°C.</li>
    <li><strong>Spalten:</strong> Schneide 2 Kartoffeln in 8 Spalten. Mit Öl und Gewürzen im Ofen rösten.</li>
    <li><strong>Würfel:</strong> Schneide eine Kartoffel in 1,5cm-Würfel für einen Eintopf oder Bratkartoffeln.</li>
    <li><strong>Hasselback:</strong> Mache eine Hasselback-Kartoffel mit der Essstäbchen-Technik. Backe sie 50-60 Min.</li>
    <li>Vergleiche: Welche Form gefällt dir am besten? Welche ist am knusprigsten?</li>
  </ol>
</div>
    `,
    en: `
### The Potato: A Thousand Shapes, A Thousand Possibilities 🥔

The potato is one of the most versatile foods out there. Whether fries, gratins, pan-fried, potato salad, or hasselback – the cut fundamentally determines texture and flavor. Learn the essential cuts and you can create dozens of different dishes from a simple potato.

<div className="bg-amber-50 dark:bg-amber-900/20 p-4 rounded-lg border-l-4 border-amber-500 my-4">
  <h4 className="font-bold text-amber-800 dark:text-amber-300 mb-2">Potato Varieties and Their Best Use</h4>
  <ul className="list-disc list-inside text-sm text-amber-700 dark:text-amber-300 space-y-1">
    <li><strong>Waxy</strong> (e.g., Yukon Gold, fingerling): Salad, pan-fried, gratins – holds shape</li>
    <li><strong>All-purpose:</strong> Versatile – suitable for almost everything</li>
    <li><strong>Starchy</strong> (e.g., Russet, Idaho): Mash, soups, dumplings – becomes soft and fluffy when cooked</li>
  </ul>
</div>

---

### Preparation: To Peel or Not?

<div className="grid md:grid-cols-2 gap-4 my-6">
  <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
    <h4 className="font-bold text-green-800 dark:text-green-300 mb-2">Leave skin on</h4>
    <p className="text-sm text-green-700 dark:text-green-300">Wedges, pan-fried, baked potatoes, hasselback, country fries. Skin adds texture and nutrients. Scrub thoroughly!</p>
  </div>
  <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
    <h4 className="font-bold text-blue-800 dark:text-blue-300 mb-2">Peel</h4>
    <p className="text-sm text-blue-700 dark:text-blue-300">Mash, gratin, potato salad, classic fries, dumplings. For smooth texture and elegant appearance. Peel thinly with a vegetable peeler.</p>
  </div>
</div>

**Important after peeling:** Place peeled potatoes in cold water! Otherwise they oxidize (turn gray/brown). They keep in water for several hours.

---

### 1. French Fries – The Classic

<div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border-l-4 border-blue-500 my-4">
  <h4 className="font-bold text-blue-800 dark:text-blue-300 mb-2">Step by Step:</h4>
  <ol className="list-decimal list-inside text-sm text-blue-700 dark:text-blue-300 space-y-2">
    <li>Peel potato (optional for country-style).</li>
    <li>Cut a <strong>flat side</strong> → potato sits stable.</li>
    <li>Cut into <strong>planks</strong> (about 8-10 mm for classic fries, 12-15 mm for thick).</li>
    <li><strong>Stack planks</strong> and cut into uniform sticks (same width as thickness).</li>
    <li>Place finished fries in <strong>cold water</strong> (30 min) to rinse out starch → crispier result!</li>
    <li>Before frying/baking, <strong>pat thoroughly dry</strong> (water + hot fat = splatter!).</li>
  </ol>
</div>

<table className="w-full border-collapse my-4">
  <thead>
    <tr className="bg-gray-100 dark:bg-stone-700">
      <th className="border dark:border-stone-600 p-2 text-left">Type</th>
      <th className="border dark:border-stone-600 p-2 text-left">Dimensions</th>
      <th className="border dark:border-stone-600 p-2 text-left">Style</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td className="border dark:border-stone-600 p-2">Pommes Allumettes</td>
      <td className="border dark:border-stone-600 p-2">3 mm x 3 mm</td>
      <td className="border dark:border-stone-600 p-2">Matchstick fries, super crispy</td>
    </tr>
    <tr>
      <td className="border dark:border-stone-600 p-2">Classic Fries</td>
      <td className="border dark:border-stone-600 p-2">8-10 mm x 8-10 mm</td>
      <td className="border dark:border-stone-600 p-2">Standard, crispy outside, soft inside</td>
    </tr>
    <tr>
      <td className="border dark:border-stone-600 p-2">Steak Fries</td>
      <td className="border dark:border-stone-600 p-2">12-15 mm x 12-15 mm</td>
      <td className="border dark:border-stone-600 p-2">Thick, rustic, creamy inside</td>
    </tr>
  </tbody>
</table>

---

### 2. Wedges – Rustic and Delicious

Perfect for oven-roasted sides, barbecue companions, and quick dinners.

#### Step by Step:
1. Wash potato (skin stays on!).
2. <strong>Halve lengthwise</strong>.
3. Place halves flat side down, <strong>halve lengthwise again</strong> → 4 wedges.
4. For smaller wedges: halve each quarter again → 8 wedges.
5. All wedges should be similar thickness!

<div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg my-4">
  <h4 className="font-bold text-green-800 dark:text-green-300 mb-2">Pro Tip: Perfect Oven Wedges</h4>
  <p className="text-sm text-green-700 dark:text-green-300">Toss wedges with olive oil, salt, pepper, paprika, and garlic powder. Single layer on baking sheet at 220°C/425°F for 30-35 min. Flip once. Flat side on the sheet = maximum crispiness.</p>
</div>

---

### 3. Cubes – For Soups, Stews, Pan-Frying

#### Step by Step:
1. Peel potato, cut a flat side.
2. Cut into planks (thickness = desired cube size).
3. Cut planks into strips.
4. Cut strips across into cubes.

**Sizes:** 1 cm for soups, 1.5-2 cm for stews, 2-3 cm for pan-fried potatoes.

---

### 4. Hasselback – The Showpiece

Hasselback potatoes look spectacular and are easier than you think. The principle: Many thin cuts that fan out in the oven.

<div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border-l-4 border-blue-500 my-4">
  <h4 className="font-bold text-blue-800 dark:text-blue-300 mb-2">Step by Step:</h4>
  <ol className="list-decimal list-inside text-sm text-blue-700 dark:text-blue-300 space-y-2">
    <li>Wash potato (skin stays on).</li>
    <li>Place potato between two <strong>chopsticks</strong> or spoon handles (as stoppers).</li>
    <li>Cut thin slices (2-3 mm) across – the chopsticks prevent you from cutting all the way through!</li>
    <li>The potato stays connected at the bottom, but slices fan out during baking.</li>
    <li>Drizzle with olive oil and butter, add salt, optionally press garlic and herbs into the cuts.</li>
    <li>Bake at 200°C/400°F for 50-60 min until golden and crispy.</li>
  </ol>
</div>

---

### 5. Slices – For Gratins and Pan-Fried

#### Step by Step:
1. Peel potato.
2. Cut one side flat for stability.
3. Cut uniform slices:
   - **2-3 mm** for gratin (thin = evenly cooked)
   - **5-6 mm** for pan-fried (thicker = more bite)

<div className="bg-amber-50 dark:bg-amber-900/20 p-4 rounded-lg my-4">
  <h4 className="font-bold text-amber-800 dark:text-amber-300 mb-2">Tip for Pan-Fried Potatoes</h4>
  <p className="text-sm text-amber-700 dark:text-amber-300">The best pan-fried potatoes are made from <strong>pre-cooked</strong> potatoes! Cook the day before, cool overnight, then slice and fry. The starch structure changes and they become much crispier.</p>
</div>

---

### 6. Turned Potatoes (Tournée) – The High Art

A classic professional technique: carving potatoes into uniform, olive-shaped pieces. Purely aesthetic, not necessary for everyday cooking – but impressive.

#### Technique:
1. Peel potato and cut into 5-6 cm pieces.
2. With a small, sharp knife, trim the edges.
3. Make 7 even curved cuts → olive-shaped piece.
4. Lots of trim (use for soup!), but impressive result.

---

### Safety Tips

<div className="p-4 bg-red-50 dark:bg-red-900/20 rounded-lg border-l-4 border-red-500 my-4">
  <h4 className="font-bold text-red-800 dark:text-red-300 mb-2">Potato Safety:</h4>
  <ul className="list-disc list-inside text-sm text-red-700 dark:text-red-300 space-y-2">
    <li><strong>Potatoes are round and hard!</strong> ALWAYS cut a flat side first for stability.</li>
    <li><strong>Wet potatoes:</strong> Dry after washing. Wet potatoes slip easily.</li>
    <li><strong>Starch is slippery:</strong> Cut on a dry board. Rinse starchy hands before switching knives.</li>
    <li><strong>Remove green spots:</strong> Green potatoes contain solanine (toxic!). Cut away generously or discard entirely.</li>
    <li><strong>Hasselback:</strong> The chopstick technique is the safest way. Without stoppers, you easily cut all the way through.</li>
  </ul>
</div>

---

### Common Mistakes

<div className="space-y-3 my-4">
  <div className="flex items-start gap-3 p-3 bg-stone-50 dark:bg-stone-800 rounded-lg">
    <span className="text-red-500 font-bold text-lg">✗</span>
    <div>
      <p className="font-semibold text-stone-800 dark:text-stone-200">Uneven pieces</p>
      <p className="text-sm text-stone-600 dark:text-stone-400">Small pieces turn mushy, large ones stay raw. Especially critical for fries and gratin.</p>
    </div>
  </div>
  <div className="flex items-start gap-3 p-3 bg-stone-50 dark:bg-stone-800 rounded-lg">
    <span className="text-red-500 font-bold text-lg">✗</span>
    <div>
      <p className="font-semibold text-stone-800 dark:text-stone-200">Not rinsing starch</p>
      <p className="text-sm text-stone-600 dark:text-stone-400">For crispy fries, starch MUST come out! 30 min in cold water, then pat dry.</p>
    </div>
  </div>
  <div className="flex items-start gap-3 p-3 bg-stone-50 dark:bg-stone-800 rounded-lg">
    <span className="text-red-500 font-bold text-lg">✗</span>
    <div>
      <p className="font-semibold text-stone-800 dark:text-stone-200">Not cutting a flat side</p>
      <p className="text-sm text-stone-600 dark:text-stone-400">Round potatoes roll – injury risk! Always stabilize first.</p>
    </div>
  </div>
  <div className="flex items-start gap-3 p-3 bg-stone-50 dark:bg-stone-800 rounded-lg">
    <span className="text-red-500 font-bold text-lg">✗</span>
    <div>
      <p className="font-semibold text-stone-800 dark:text-stone-200">Wrong variety for wrong purpose</p>
      <p className="text-sm text-stone-600 dark:text-stone-400">Starchy potatoes in salad = mush. Waxy as mash = lumps. Variety must match the dish!</p>
    </div>
  </div>
</div>

---

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border-2 border-green-300 my-4">
  <h3 className="font-bold text-green-800 dark:text-green-300 mb-4">🎯 Practice Exercise</h3>
  <ol className="list-decimal list-inside space-y-2 text-green-700 dark:text-green-300">
    <li>Buy 6-8 waxy potatoes.</li>
    <li><strong>Fries:</strong> Cut 2 potatoes into classic fries (8-10mm). Soak 30 min in water, dry off, bake at 220°C/425°F.</li>
    <li><strong>Wedges:</strong> Cut 2 potatoes into 8 wedges each. Roast with oil and spices in the oven.</li>
    <li><strong>Cubes:</strong> Cut one potato into 1.5cm cubes for a stew or pan-frying.</li>
    <li><strong>Hasselback:</strong> Make one hasselback potato using the chopstick technique. Bake 50-60 min.</li>
    <li>Compare: Which shape do you like best? Which is crispiest?</li>
  </ol>
</div>
    `
  },

  task: {
    de: {
      title: 'Kartoffel-Vielfalt',
      description: 'Schneide Kartoffeln in verschiedene Formen und vergleiche die Ergebnisse nach dem Garen.',
      checklist: [
        { text: 'Schneide Pommes Frites (8-10mm) und lege sie 30 Min in Wasser.' },
        { text: 'Schneide Spalten (Wedges) aus 2 Kartoffeln und röste sie im Ofen.' },
        { text: 'Schneide 1,5cm-Würfel für Bratkartoffeln oder Eintopf.' },
        { text: 'Mache eine Hasselback-Kartoffel mit der Essstäbchen-Technik.' },
        { text: 'Schneide dünne Scheiben (2-3mm) für ein Gratin.' },
        { text: 'Vergleiche: Welche Form wird am knusprigsten? Welche am cremigsten?' }
      ]
    },
    en: {
      title: 'Potato Variety',
      description: 'Cut potatoes into different shapes and compare results after cooking.',
      checklist: [
        { text: 'Cut french fries (8-10mm) and soak 30 min in water.' },
        { text: 'Cut wedges from 2 potatoes and roast in the oven.' },
        { text: 'Cut 1.5cm cubes for pan-frying or stew.' },
        { text: 'Make a hasselback potato using the chopstick technique.' },
        { text: 'Cut thin slices (2-3mm) for a gratin.' },
        { text: 'Compare: Which shape gets crispiest? Which gets creamiest?' }
      ]
    }
  },
  
  notes: {
    de: [
      { front: 'Warum Pommes Frites in kaltes Wasser legen?', back: 'Wasser spült die Stärke aus → knusprigeres Ergebnis. 30 Min einweichen, dann gründlich trockentupfen.' },
      { front: 'Was ist die Hasselback-Technik?', back: 'Kartoffel zwischen zwei Essstäbchen legen (als Stopper), dünne Schnitte machen. Im Ofen fächern die Scheiben auf. 200°C, 50-60 Min.' },
      { front: 'Welche Kartoffelsorte für welchen Zweck?', back: 'Festkochend: Salat, Bratkartoffeln, Gratin (hält Form).\nMehligkochend: Püree, Suppen, Knödel (wird weich und fluffig).' },
      { front: 'Warum werden geschälte Kartoffeln grau?', back: 'Oxidation! Geschälte Kartoffeln sofort in kaltes Wasser legen. Hält sich einige Stunden.' },
      { front: 'Was tun bei grünen Stellen auf Kartoffeln?', back: 'Grüne Stellen enthalten Solanin (giftig!). Großzügig wegschneiden. Bei stark grünen Kartoffeln: komplett entsorgen.' }
    ],
    en: [
      { front: 'Why soak french fries in cold water?', back: 'Water rinses out starch → crispier result. Soak 30 min, then pat thoroughly dry.' },
      { front: 'What is the hasselback technique?', back: 'Place potato between two chopsticks (as stoppers), make thin cuts. Slices fan out in the oven. 200°C/400°F, 50-60 min.' },
      { front: 'Which potato variety for which purpose?', back: 'Waxy: salad, pan-fried, gratin (holds shape).\nStarchy: mash, soups, dumplings (becomes soft and fluffy).' },
      { front: 'Why do peeled potatoes turn gray?', back: 'Oxidation! Place peeled potatoes in cold water immediately. Keeps for several hours.' },
      { front: 'What to do about green spots on potatoes?', back: 'Green spots contain solanine (toxic!). Cut away generously. For heavily green potatoes: discard entirely.' }
    ]
  }
};
