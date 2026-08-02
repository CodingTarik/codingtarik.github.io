import React from 'react';

export const herbsPrepLesson = {
  id: 'c2_m2_herbs_prep',
  title: { 
    en: '2.16 Herbs & Fresh Ingredients Prep', 
    de: '2.16 Kräuter & Frische Zutaten vorbereiten' 
  },
  description: { 
    en: 'Learn chiffonade, rough chop, and fine chop for different herbs. When to add them, how to store, and maximum flavor extraction.', 
    de: 'Lerne Chiffonade, grob und fein Hacken für verschiedene Kräuter. Wann hinzufügen, wie lagern und maximale Aromenentfaltung.' 
  },
  category: 'techniques',
  
  content: {
    de: `
### Kräuter richtig vorbereiten: Der Unterschied zwischen gut und großartig 🌿

Kräuter sind das "Finish" eines Gerichts – sie verwandeln ein solides Gericht in ein großartiges. Aber: Kräuter falsch behandeln (zerquetschen, zu früh hinzufügen, falsch lagern) zerstört ihr Aroma. Lerne die richtigen Techniken und deine Gerichte werden sofort besser.

<div className="bg-amber-50 dark:bg-amber-900/20 p-4 rounded-lg border-l-4 border-amber-500 my-4">
  <h4 className="font-bold text-amber-800 dark:text-amber-300 mb-2">Die goldene Regel</h4>
  <p className="text-sm text-amber-700 dark:text-amber-300"><strong>Harte Kräuter</strong> (Rosmarin, Thymian, Lorbeer) halten Hitze aus → früh hinzufügen, mitkochen. <strong>Weiche Kräuter</strong> (Basilikum, Petersilie, Koriander, Dill, Minze) verlieren ihr Aroma bei Hitze → erst am Ende oder roh hinzufügen.</p>
</div>

---

### 1. Chiffonade – Der elegante Schnitt für Blätter

Chiffonade (französisch: "aus Stoff") ergibt hauchdünne Streifen. Perfekt für Basilikum, Minze, Spinat, Mangold.

<div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border-l-4 border-blue-500 my-4">
  <h4 className="font-bold text-blue-800 dark:text-blue-300 mb-2">Schritt für Schritt:</h4>
  <ol className="list-decimal list-inside text-sm text-blue-700 dark:text-blue-300 space-y-2">
    <li><strong>Blätter stapeln:</strong> Lege 5-8 Blätter übereinander (größtes unten, kleinstes oben).</li>
    <li><strong>Aufrollen:</strong> Rolle den Stapel von einer Seite zur anderen auf wie eine Zigarre.</li>
    <li><strong>Fein schneiden:</strong> Schneide quer in dünne Streifen (1-2 mm). Das Messer muss SCHARF sein!</li>
    <li><strong>Auflockern:</strong> Lockere die Streifen mit den Fingern auf. Nicht zusammendrücken!</li>
  </ol>
</div>

<div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg border-l-4 border-red-500 my-4">
  <h4 className="font-bold text-red-800 dark:text-red-300 mb-2">Wichtig bei Basilikum!</h4>
  <p className="text-sm text-red-700 dark:text-red-300">Basilikum oxidiert (wird schwarz) wenn es gequetscht oder zu stark geschnitten wird. Immer mit einem <strong>extrem scharfen Messer</strong> schneiden und <strong>sofort verwenden</strong>. Nie hacken!</p>
</div>

---

### 2. Feines Hacken (Fine Chop) – Der Standard

Die häufigste Methode für die meisten Kräuter. Perfekt für Petersilie, Koriander, Schnittlauch, Dill.

#### Schritt für Schritt:
1. **Blätter von Stielen trennen** (bei Petersilie, Koriander). Stiele aufheben – sie haben auch Geschmack!
2. **Blätter sammeln** und zu einem lockeren Haufen formen.
3. **Wiegeschnitt anwenden:** Messerspitze bleibt auf dem Brett, das Messer wiegt hin und her.
4. **Regelmäßig zusammenschieben** und erneut hacken, bis die gewünschte Feinheit erreicht ist.

<div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg my-4">
  <h4 className="font-bold text-green-800 dark:text-green-300 mb-2">Profi-Tipp: Die Stiele verwenden!</h4>
  <p className="text-sm text-green-700 dark:text-green-300">Petersilien- und Korianderstiele haben <strong>mehr Geschmack</strong> als die Blätter! Hacke sie fein und verwende sie in Saucen, Suppen und Marinaden. Nur die dicken, holzigen unteren Enden wegwerfen.</p>
</div>

---

### 3. Grobes Hacken (Rough Chop) – Für rustikale Gerichte

Schnell und unkompliziert. Für Eintöpfe, Pestos und Gerichte, wo Textur gewünscht ist.

#### Technik:
1. Blätter (und feine Stiele) sammeln.
2. Einige Male quer durchschneiden.
3. Nicht perfektionistisch sein – Ungleichmäßigkeit ist hier gewollt!

---

### 4. Harte Kräuter zupfen und vorbereiten

<div className="grid md:grid-cols-2 gap-4 my-6">
  <div className="bg-white dark:bg-stone-800 p-4 rounded-lg shadow-sm">
    <h4 className="font-bold text-stone-800 dark:text-stone-200 mb-2">Rosmarin</h4>
    <p className="text-sm text-stone-600 dark:text-stone-400">Nadeln vom Stiel streifen (von oben nach unten gegenläufig). Fein hacken. Holzige Stiele für Fonds aufheben oder als Spieß verwenden.</p>
  </div>
  <div className="bg-white dark:bg-stone-800 p-4 rounded-lg shadow-sm">
    <h4 className="font-bold text-stone-800 dark:text-stone-200 mb-2">Thymian</h4>
    <p className="text-sm text-stone-600 dark:text-stone-400">Stiel am oberen Ende festhalten, mit Daumen und Zeigefinger nach unten streifen. Blättchen fallen ab. Frische Thymianblätter sind so klein, dass sie nicht gehackt werden müssen.</p>
  </div>
  <div className="bg-white dark:bg-stone-800 p-4 rounded-lg shadow-sm">
    <h4 className="font-bold text-stone-800 dark:text-stone-200 mb-2">Salbei</h4>
    <p className="text-sm text-stone-600 dark:text-stone-400">Blätter einzeln abzupfen. Ganz verwenden (in Butter braten!), in Chiffonade schneiden oder fein hacken. Salbei ist stark – sparsam dosieren.</p>
  </div>
  <div className="bg-white dark:bg-stone-800 p-4 rounded-lg shadow-sm">
    <h4 className="font-bold text-stone-800 dark:text-stone-200 mb-2">Lorbeer</h4>
    <p className="text-sm text-stone-600 dark:text-stone-400">Ganzes Blatt mitkochen, vor dem Servieren entfernen. Nie hacken oder essen – die Blätter sind zu zäh.</p>
  </div>
</div>

---

### 5. Spezial-Kräuter

<div className="space-y-4 my-4">
  <div className="p-4 bg-stone-50 dark:bg-stone-800 rounded-lg">
    <h4 className="font-bold text-stone-800 dark:text-stone-200 mb-2">Schnittlauch</h4>
    <p className="text-sm text-stone-600 dark:text-stone-400">Mit der Schere in feine Röllchen schneiden (Messer zerquetscht sie). Nie mitkochen – immer roh als Garnitur. Alternative: Frühlingszwiebel-Grün.</p>
  </div>
  <div className="p-4 bg-stone-50 dark:bg-stone-800 rounded-lg">
    <h4 className="font-bold text-stone-800 dark:text-stone-200 mb-2">Dill</h4>
    <p className="text-sm text-stone-600 dark:text-stone-400">Federartige Spitzen abzupfen, dicke Stiele entsorgen. Grob hacken reicht. Erst am Ende hinzufügen. Klassiker zu Fisch, Gurke, Joghurt.</p>
  </div>
  <div className="p-4 bg-stone-50 dark:bg-stone-800 rounded-lg">
    <h4 className="font-bold text-stone-800 dark:text-stone-200 mb-2">Minze</h4>
    <p className="text-sm text-stone-600 dark:text-stone-400">Blätter abzupfen, Chiffonade oder grob reißen (nicht hacken – oxidiert). Perfekt für Salate, Getränke, Desserts, orientalische Küche.</p>
  </div>
</div>

---

### Wann Kräuter hinzufügen?

<table className="w-full border-collapse my-4">
  <thead>
    <tr className="bg-gray-100 dark:bg-stone-700">
      <th className="border dark:border-stone-600 p-2 text-left">Zeitpunkt</th>
      <th className="border dark:border-stone-600 p-2 text-left">Kräuter</th>
      <th className="border dark:border-stone-600 p-2 text-left">Warum</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td className="border dark:border-stone-600 p-2 font-semibold">Zu Beginn (mitkochen)</td>
      <td className="border dark:border-stone-600 p-2">Rosmarin, Thymian, Lorbeer, Oregano (getrocknet)</td>
      <td className="border dark:border-stone-600 p-2">Brauchen Hitze und Zeit, um Aroma abzugeben</td>
    </tr>
    <tr>
      <td className="border dark:border-stone-600 p-2 font-semibold">In der Mitte</td>
      <td className="border dark:border-stone-600 p-2">Salbei, getrockneter Oregano</td>
      <td className="border dark:border-stone-600 p-2">Brauchen etwas Hitze, verlieren aber bei langem Kochen Geschmack</td>
    </tr>
    <tr>
      <td className="border dark:border-stone-600 p-2 font-semibold">Am Ende / Roh</td>
      <td className="border dark:border-stone-600 p-2">Basilikum, Petersilie, Koriander, Dill, Minze, Schnittlauch</td>
      <td className="border dark:border-stone-600 p-2">Aroma ist flüchtig, Hitze zerstört es</td>
    </tr>
  </tbody>
</table>

---

### Lagerung: So bleiben Kräuter frisch

<div className="grid md:grid-cols-2 gap-4 my-6">
  <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
    <h4 className="font-bold text-blue-800 dark:text-blue-300 mb-2">Weiche Kräuter (Petersilie, Koriander, Dill)</h4>
    <p className="text-sm text-blue-700 dark:text-blue-300">Wie Blumen behandeln: Stiele ins Wasser stellen, lockere Tüte drüber, in den Kühlschrank. Hält 1-2 Wochen!</p>
  </div>
  <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
    <h4 className="font-bold text-blue-800 dark:text-blue-300 mb-2">Basilikum</h4>
    <p className="text-sm text-blue-700 dark:text-blue-300">NICHT in den Kühlschrank! Wird schwarz bei Kälte. Bei Raumtemperatur in einem Glas Wasser auf der Fensterbank.</p>
  </div>
  <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
    <h4 className="font-bold text-blue-800 dark:text-blue-300 mb-2">Harte Kräuter (Rosmarin, Thymian)</h4>
    <p className="text-sm text-blue-700 dark:text-blue-300">In feuchtes Küchenpapier wickeln, in einem Beutel im Kühlschrank. Hält 2-3 Wochen.</p>
  </div>
  <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
    <h4 className="font-bold text-blue-800 dark:text-blue-300 mb-2">Einfrieren</h4>
    <p className="text-sm text-blue-700 dark:text-blue-300">Kräuter hacken, in Eiswürfelformen mit Olivenöl oder Wasser füllen, einfrieren. Fertige Aromawürfel für Saucen!</p>
  </div>
</div>

---

### Sicherheitshinweise

<div className="p-4 bg-red-50 dark:bg-red-900/20 rounded-lg border-l-4 border-red-500 my-4">
  <h4 className="font-bold text-red-800 dark:text-red-300 mb-2">Sicherheit bei Kräutern:</h4>
  <ul className="list-disc list-inside text-sm text-red-700 dark:text-red-300 space-y-2">
    <li><strong>Scharfes Messer ist Pflicht:</strong> Kräuter sind dünn und empfindlich. Ein stumpfes Messer zerquetscht sie, statt zu schneiden.</li>
    <li><strong>Krallengriff beim Hacken:</strong> Besonders bei kleinen Kräuterhaufen rutscht das Messer leicht ab.</li>
    <li><strong>Wiegeschnitt kontrollieren:</strong> Die Messerspitze muss auf dem Brett bleiben. Nicht das ganze Messer heben!</li>
    <li><strong>Schere für Schnittlauch:</strong> Sicherer und besser als ein Messer für röhrenförmige Kräuter.</li>
  </ul>
</div>

---

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border-2 border-green-300 my-4">
  <h3 className="font-bold text-green-800 dark:text-green-300 mb-4">🎯 Praktische Übung</h3>
  <ol className="list-decimal list-inside space-y-2 text-green-700 dark:text-green-300">
    <li>Kaufe einen Bund Petersilie, Basilikum und frischen Rosmarin.</li>
    <li><strong>Petersilie:</strong> Trenne Blätter von Stielen. Hacke Blätter fein mit dem Wiegeschnitt. Hacke Stiele separat – probiere beide!</li>
    <li><strong>Basilikum:</strong> Schneide Chiffonade aus 8-10 Blättern. Wie dünn schaffst du die Streifen?</li>
    <li><strong>Rosmarin:</strong> Streife Nadeln ab und hacke sie fein. Wie fein kannst du sie bekommen?</li>
    <li><strong>Kräuterbutter:</strong> Mische alle gehackten Kräuter mit weicher Butter und Salz. Fertig ist eine Kräuterbutter!</li>
    <li><strong>Lagerungstest:</strong> Stelle Petersilie ins Wasser im Kühlschrank. Prüfe nach 1 Woche – immer noch frisch?</li>
  </ol>
</div>
    `,
    en: `
### Preparing Herbs the Right Way: The Difference Between Good and Great 🌿

Herbs are the "finish" of a dish – they transform a solid dish into a great one. But: treating herbs wrong (crushing, adding too early, storing incorrectly) destroys their aroma. Learn the right techniques and your dishes will immediately improve.

<div className="bg-amber-50 dark:bg-amber-900/20 p-4 rounded-lg border-l-4 border-amber-500 my-4">
  <h4 className="font-bold text-amber-800 dark:text-amber-300 mb-2">The Golden Rule</h4>
  <p className="text-sm text-amber-700 dark:text-amber-300"><strong>Hard herbs</strong> (rosemary, thyme, bay leaf) withstand heat → add early, cook along. <strong>Soft herbs</strong> (basil, parsley, cilantro, dill, mint) lose aroma with heat → add at the end or raw.</p>
</div>

---

### 1. Chiffonade – The Elegant Cut for Leaves

Chiffonade (French: "made of fabric") yields paper-thin ribbons. Perfect for basil, mint, spinach, chard.

<div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border-l-4 border-blue-500 my-4">
  <h4 className="font-bold text-blue-800 dark:text-blue-300 mb-2">Step by Step:</h4>
  <ol className="list-decimal list-inside text-sm text-blue-700 dark:text-blue-300 space-y-2">
    <li><strong>Stack leaves:</strong> Place 5-8 leaves on top of each other (largest at bottom, smallest on top).</li>
    <li><strong>Roll up:</strong> Roll the stack from one side to the other like a cigar.</li>
    <li><strong>Slice thin:</strong> Cut across in thin strips (1-2 mm). The knife MUST be sharp!</li>
    <li><strong>Fluff up:</strong> Loosen the strips with your fingers. Don't squeeze together!</li>
  </ol>
</div>

<div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg border-l-4 border-red-500 my-4">
  <h4 className="font-bold text-red-800 dark:text-red-300 mb-2">Important with Basil!</h4>
  <p className="text-sm text-red-700 dark:text-red-300">Basil oxidizes (turns black) when crushed or cut too aggressively. Always cut with an <strong>extremely sharp knife</strong> and <strong>use immediately</strong>. Never chop!</p>
</div>

---

### 2. Fine Chop – The Standard

The most common method for most herbs. Perfect for parsley, cilantro, chives, dill.

#### Step by Step:
1. **Separate leaves from stems** (for parsley, cilantro). Save stems – they have flavor too!
2. **Gather leaves** and form a loose pile.
3. **Apply rocking motion:** Knife tip stays on the board, the knife rocks back and forth.
4. **Gather regularly** and chop again until desired fineness is reached.

<div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg my-4">
  <h4 className="font-bold text-green-800 dark:text-green-300 mb-2">Pro Tip: Use the Stems!</h4>
  <p className="text-sm text-green-700 dark:text-green-300">Parsley and cilantro stems have <strong>more flavor</strong> than the leaves! Chop them fine and use in sauces, soups, and marinades. Only discard the thick, woody lower ends.</p>
</div>

---

### 3. Rough Chop – For Rustic Dishes

Quick and uncomplicated. For stews, pestos, and dishes where texture is desired.

#### Technique:
1. Gather leaves (and thin stems).
2. Cut through a few times.
3. Don't be a perfectionist – unevenness is intentional here!

---

### 4. Preparing Hard Herbs

<div className="grid md:grid-cols-2 gap-4 my-6">
  <div className="bg-white dark:bg-stone-800 p-4 rounded-lg shadow-sm">
    <h4 className="font-bold text-stone-800 dark:text-stone-200 mb-2">Rosemary</h4>
    <p className="text-sm text-stone-600 dark:text-stone-400">Strip needles from stem (run fingers from top to bottom against growth). Chop finely. Save woody stems for stocks or use as skewers.</p>
  </div>
  <div className="bg-white dark:bg-stone-800 p-4 rounded-lg shadow-sm">
    <h4 className="font-bold text-stone-800 dark:text-stone-200 mb-2">Thyme</h4>
    <p className="text-sm text-stone-600 dark:text-stone-400">Hold stem at top, strip downward with thumb and index finger. Leaves fall off. Fresh thyme leaves are so small they don't need chopping.</p>
  </div>
  <div className="bg-white dark:bg-stone-800 p-4 rounded-lg shadow-sm">
    <h4 className="font-bold text-stone-800 dark:text-stone-200 mb-2">Sage</h4>
    <p className="text-sm text-stone-600 dark:text-stone-400">Pluck individual leaves. Use whole (fry in butter!), cut chiffonade, or chop fine. Sage is strong – use sparingly.</p>
  </div>
  <div className="bg-white dark:bg-stone-800 p-4 rounded-lg shadow-sm">
    <h4 className="font-bold text-stone-800 dark:text-stone-200 mb-2">Bay Leaf</h4>
    <p className="text-sm text-stone-600 dark:text-stone-400">Cook whole leaf along, remove before serving. Never chop or eat – leaves are too tough.</p>
  </div>
</div>

---

### 5. Special Herbs

<div className="space-y-4 my-4">
  <div className="p-4 bg-stone-50 dark:bg-stone-800 rounded-lg">
    <h4 className="font-bold text-stone-800 dark:text-stone-200 mb-2">Chives</h4>
    <p className="text-sm text-stone-600 dark:text-stone-400">Cut into fine rings with scissors (a knife crushes them). Never cook – always use raw as garnish. Alternative: scallion greens.</p>
  </div>
  <div className="p-4 bg-stone-50 dark:bg-stone-800 rounded-lg">
    <h4 className="font-bold text-stone-800 dark:text-stone-200 mb-2">Dill</h4>
    <p className="text-sm text-stone-600 dark:text-stone-400">Pluck feathery tips, discard thick stems. Rough chop is sufficient. Add at the end. Classic with fish, cucumber, yogurt.</p>
  </div>
  <div className="p-4 bg-stone-50 dark:bg-stone-800 rounded-lg">
    <h4 className="font-bold text-stone-800 dark:text-stone-200 mb-2">Mint</h4>
    <p className="text-sm text-stone-600 dark:text-stone-400">Pluck leaves, chiffonade or roughly tear (don't chop – oxidizes). Perfect for salads, drinks, desserts, Middle Eastern cuisine.</p>
  </div>
</div>

---

### When to Add Herbs

<table className="w-full border-collapse my-4">
  <thead>
    <tr className="bg-gray-100 dark:bg-stone-700">
      <th className="border dark:border-stone-600 p-2 text-left">Timing</th>
      <th className="border dark:border-stone-600 p-2 text-left">Herbs</th>
      <th className="border dark:border-stone-600 p-2 text-left">Why</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td className="border dark:border-stone-600 p-2 font-semibold">At the start (cook along)</td>
      <td className="border dark:border-stone-600 p-2">Rosemary, thyme, bay leaf, dried oregano</td>
      <td className="border dark:border-stone-600 p-2">Need heat and time to release aroma</td>
    </tr>
    <tr>
      <td className="border dark:border-stone-600 p-2 font-semibold">In the middle</td>
      <td className="border dark:border-stone-600 p-2">Sage, dried oregano</td>
      <td className="border dark:border-stone-600 p-2">Need some heat but lose flavor with long cooking</td>
    </tr>
    <tr>
      <td className="border dark:border-stone-600 p-2 font-semibold">At the end / Raw</td>
      <td className="border dark:border-stone-600 p-2">Basil, parsley, cilantro, dill, mint, chives</td>
      <td className="border dark:border-stone-600 p-2">Aroma is volatile, heat destroys it</td>
    </tr>
  </tbody>
</table>

---

### Storage: Keeping Herbs Fresh

<div className="grid md:grid-cols-2 gap-4 my-6">
  <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
    <h4 className="font-bold text-blue-800 dark:text-blue-300 mb-2">Soft herbs (parsley, cilantro, dill)</h4>
    <p className="text-sm text-blue-700 dark:text-blue-300">Treat like flowers: stems in water, loose bag over top, into the fridge. Lasts 1-2 weeks!</p>
  </div>
  <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
    <h4 className="font-bold text-blue-800 dark:text-blue-300 mb-2">Basil</h4>
    <p className="text-sm text-blue-700 dark:text-blue-300">Do NOT refrigerate! Turns black in cold. Keep at room temperature in a glass of water on the windowsill.</p>
  </div>
  <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
    <h4 className="font-bold text-blue-800 dark:text-blue-300 mb-2">Hard herbs (rosemary, thyme)</h4>
    <p className="text-sm text-blue-700 dark:text-blue-300">Wrap in damp paper towel, place in a bag in the fridge. Lasts 2-3 weeks.</p>
  </div>
  <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
    <h4 className="font-bold text-blue-800 dark:text-blue-300 mb-2">Freezing</h4>
    <p className="text-sm text-blue-700 dark:text-blue-300">Chop herbs, fill ice cube trays with olive oil or water, freeze. Ready-made flavor cubes for sauces!</p>
  </div>
</div>

---

### Safety Tips

<div className="p-4 bg-red-50 dark:bg-red-900/20 rounded-lg border-l-4 border-red-500 my-4">
  <h4 className="font-bold text-red-800 dark:text-red-300 mb-2">Herb Safety:</h4>
  <ul className="list-disc list-inside text-sm text-red-700 dark:text-red-300 space-y-2">
    <li><strong>Sharp knife is mandatory:</strong> Herbs are thin and delicate. A dull knife crushes instead of cuts.</li>
    <li><strong>Claw grip when chopping:</strong> Especially with small herb piles, the knife easily slips.</li>
    <li><strong>Control the rocking motion:</strong> The knife tip must stay on the board. Don't lift the entire knife!</li>
    <li><strong>Scissors for chives:</strong> Safer and better than a knife for tubular herbs.</li>
  </ul>
</div>

---

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border-2 border-green-300 my-4">
  <h3 className="font-bold text-green-800 dark:text-green-300 mb-4">🎯 Practice Exercise</h3>
  <ol className="list-decimal list-inside space-y-2 text-green-700 dark:text-green-300">
    <li>Buy a bunch of parsley, basil, and fresh rosemary.</li>
    <li><strong>Parsley:</strong> Separate leaves from stems. Finely chop leaves using rocking motion. Chop stems separately – taste both!</li>
    <li><strong>Basil:</strong> Cut chiffonade from 8-10 leaves. How thin can you get the strips?</li>
    <li><strong>Rosemary:</strong> Strip needles and chop finely. How fine can you get them?</li>
    <li><strong>Herb butter:</strong> Mix all chopped herbs with soft butter and salt. Done – herb butter!</li>
    <li><strong>Storage test:</strong> Put parsley in water in the fridge. Check after 1 week – still fresh?</li>
  </ol>
</div>
    `
  },

  task: {
    de: {
      title: 'Kräuter-Workshop',
      description: 'Übe verschiedene Schneidtechniken für Kräuter und stelle Kräuterbutter her.',
      checklist: [
        { text: 'Schneide Basilikum in Chiffonade (hauchdünne Streifen).' },
        { text: 'Hacke Petersilie fein mit dem Wiegeschnitt.' },
        { text: 'Hacke Petersilienstiele separat und probiere den Geschmack.' },
        { text: 'Streife Rosmarinnadeln ab und hacke sie fein.' },
        { text: 'Stelle Kräuterbutter her (Kräuter + weiche Butter + Salz).' },
        { text: 'Teste die Lagerung: Petersilie im Wasserglas im Kühlschrank.' }
      ]
    },
    en: {
      title: 'Herb Workshop',
      description: 'Practice different cutting techniques for herbs and make herb butter.',
      checklist: [
        { text: 'Cut basil in chiffonade (paper-thin ribbons).' },
        { text: 'Finely chop parsley using the rocking motion.' },
        { text: 'Chop parsley stems separately and taste the flavor.' },
        { text: 'Strip rosemary needles and chop finely.' },
        { text: 'Make herb butter (herbs + soft butter + salt).' },
        { text: 'Test storage: parsley in water glass in fridge.' }
      ]
    }
  },
  
  notes: {
    de: [
      { front: 'Was ist Chiffonade?', back: 'Blätter stapeln, aufrollen wie Zigarre, quer in hauchdünne Streifen schneiden. Für Basilikum, Minze, Spinat.' },
      { front: 'Wann harte vs. weiche Kräuter hinzufügen?', back: 'Hart (Rosmarin, Thymian, Lorbeer) → früh, mitkochen.\nWeich (Basilikum, Petersilie, Koriander, Dill) → am Ende oder roh.' },
      { front: 'Wie lagert man frische Kräuter?', back: 'Weiche: Stiele ins Wasser, Tüte drüber, Kühlschrank (1-2 Wochen).\nBasilikum: Raumtemperatur, NIE Kühlschrank.\nHarte: Feuchtes Papier, Beutel, Kühlschrank.' },
      { front: 'Warum Petersilienstiele nicht wegwerfen?', back: 'Sie haben mehr Geschmack als die Blätter! Fein hacken für Saucen, Suppen, Marinaden. Nur die dicken unteren Enden wegwerfen.' },
      { front: 'Warum Basilikum mit scharfem Messer schneiden?', back: 'Basilikum oxidiert (wird schwarz) bei Quetschung. Scharfes Messer = sauberer Schnitt = weniger Oxidation = grünes Basilikum.' }
    ],
    en: [
      { front: 'What is chiffonade?', back: 'Stack leaves, roll up like a cigar, slice across into paper-thin ribbons. For basil, mint, spinach.' },
      { front: 'When to add hard vs. soft herbs?', back: 'Hard (rosemary, thyme, bay leaf) → early, cook along.\nSoft (basil, parsley, cilantro, dill) → at the end or raw.' },
      { front: 'How to store fresh herbs?', back: 'Soft: stems in water, bag over top, fridge (1-2 weeks).\nBasil: room temp, NEVER fridge.\nHard: damp paper, bag, fridge.' },
      { front: 'Why not throw away parsley stems?', back: 'They have more flavor than the leaves! Chop fine for sauces, soups, marinades. Only discard thick lower ends.' },
      { front: 'Why cut basil with a sharp knife?', back: 'Basil oxidizes (turns black) when crushed. Sharp knife = clean cut = less oxidation = green basil.' }
    ]
  }
};
