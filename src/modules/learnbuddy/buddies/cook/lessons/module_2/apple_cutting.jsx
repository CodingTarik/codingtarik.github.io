import React from 'react';

export const appleCuttingLesson = {
  id: 'c2_m2_apple_cutting',
  title: { 
    en: '2.10 Apple Cutting Techniques', 
    de: '2.10 Apfel-Schneidetechniken' 
  },
  description: { 
    en: 'Learn to quarter, slice, dice, and core apples like a pro. From simple snack prep to elegant dessert garnishes.', 
    de: 'Lerne Äpfel wie ein Profi zu vierteln, in Scheiben und Würfel zu schneiden und zu entkernen. Von einfacher Snack-Vorbereitung bis zur eleganten Dessert-Garnitur.' 
  },
  category: 'techniques',
  
  content: {
    de: `
### Äpfel richtig schneiden: Mehr als nur vierteln 🍎

Der Apfel ist eines der häufigsten Lebensmittel in der Küche – ob als Snack, im Kuchen, im Salat oder als Beilage. Trotzdem schneiden die meisten Menschen Äpfel einfach irgendwie. Dabei gibt es Techniken, die dir Zeit sparen, weniger Abfall produzieren und bessere Ergebnisse liefern.

<div className="bg-amber-50 dark:bg-amber-900/20 p-4 rounded-lg border-l-4 border-amber-500 my-4">
  <h4 className="font-bold text-amber-800 dark:text-amber-300 mb-2">Warum ist das wichtig?</h4>
  <p className="text-sm text-amber-700 dark:text-amber-300">Gleichmäßig geschnittene Apfelstücke garen gleichmäßig (z.B. beim Backen), sehen professionell aus und oxidieren (bräunen) weniger schnell, weil die Schnittflächen sauber sind.</p>
</div>

---

### 1. Den Apfel richtig vorbereiten

Bevor du schneidest, wasche den Apfel gründlich unter fließendem Wasser. Bio-Äpfel reicht kaltes Wasser; konventionelle Äpfel solltest du mit einer Gemüsebürste reinigen, um Wachsrückstände zu entfernen.

**Schälen – ja oder nein?**
- **Für Kuchen & Kompott:** Schäle den Apfel mit einem Sparschäler. Arbeite in langen Streifen von oben nach unten.
- **Für Salate & Snacks:** Schale dranlassen! Sie enthält die meisten Vitamine und gibt Biss.
- **Für Saucen (Apfelmus):** Schälen, da die Schale eine unangenehme Textur ergibt.

---

### 2. Vierteln (Die Basis-Technik)

Die einfachste und häufigste Methode. Perfekt für Snacks, Obstsalat und als Ausgangspunkt für weitere Schnitte.

<div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border-l-4 border-blue-500 my-4">
  <h4 className="font-bold text-blue-800 dark:text-blue-300 mb-2">Schritt für Schritt:</h4>
  <ol className="list-decimal list-inside text-sm text-blue-700 dark:text-blue-300 space-y-2">
    <li>Stelle den Apfel aufrecht hin (Stiel nach oben).</li>
    <li>Schneide **seitlich am Kerngehäuse** vorbei – nicht durch die Mitte! Setze das Messer ca. 1 cm neben dem Stiel an.</li>
    <li>Drehe den Apfel um 90° und schneide erneut seitlich am Kern vorbei.</li>
    <li>Wiederhole für alle 4 Seiten. Du erhältst 4 kernlose "Wangen" und einen würfelförmigen Kern in der Mitte.</li>
    <li>Schneide noch das restliche Fruchtfleisch vom Kerngehäuse ab.</li>
  </ol>
</div>

**Vorteil dieser Methode:** Du musst nie das Kerngehäuse ausstanzen oder herausschneiden. Der Kern bleibt als kompaktes Reststück übrig – minimaler Abfall!

---

### 3. Scheiben schneiden (Für Kuchen & Tartes)

Gleichmäßige Scheiben sind der Schlüssel zu einem schönen Apfelkuchen.

#### Schritt für Schritt:
1. Viertle den Apfel wie oben beschrieben.
2. Lege ein Viertel mit der flachen Seite nach unten auf das Brett. **Wackelschutz!**
3. Schneide gleichmäßige Scheiben (ca. 3-4 mm für Kuchen, 5-6 mm für Tarte Tatin).
4. Halte das Viertel mit dem Krallengriff zusammen und schneide gleichmäßig.

<div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg my-4">
  <h4 className="font-bold text-green-800 dark:text-green-300 mb-2">Profi-Tipp: Fächerung</h4>
  <p className="text-sm text-green-700 dark:text-green-300">Für eine elegante Präsentation: Schneide ein Viertel in dünne Scheiben, aber schneide NICHT ganz durch am oberen Ende. Dann fächere die Scheiben auseinander wie ein Kartenspiel. Sieht auf Kuchen oder Desserts fantastisch aus!</p>
</div>

---

### 4. Würfel schneiden (Für Salate, Chutneys, Füllungen)

Gleichmäßige Apfelwürfel sind perfekt für Waldorf-Salat, Chutneys oder Pfannkuchen-Füllungen.

#### Schritt für Schritt:
1. Viertle und entferne den Kern.
2. Schneide jedes Viertel in Streifen (ca. 1 cm breit).
3. Drehe die Streifen um 90° und schneide quer durch – fertige Würfel!
4. Für feinere Würfel (Brunoise): Schneide dünnere Streifen (3-4 mm).

---

### 5. Das Kerngehäuse entfernen

<div className="grid md:grid-cols-2 gap-4 my-6">
  <div className="bg-white dark:bg-stone-800 p-4 rounded-lg shadow-sm">
    <h4 className="font-bold text-stone-800 dark:text-stone-200 mb-2">Methode A: Seitlich vorbei (empfohlen)</h4>
    <p className="text-sm text-stone-600 dark:text-stone-400">Schneide 4 "Wangen" seitlich vom Kern ab. Schnellste Methode, kein Spezialwerkzeug nötig. Ideal für Alltagskochen.</p>
  </div>
  <div className="bg-white dark:bg-stone-800 p-4 rounded-lg shadow-sm">
    <h4 className="font-bold text-stone-800 dark:text-stone-200 mb-2">Methode B: Apfelentkerner</h4>
    <p className="text-sm text-stone-600 dark:text-stone-400">Setze den Entkerner mittig an und drücke gerade durch. Gut für Bratäpfel, wenn du den Apfel ganz lassen willst.</p>
  </div>
  <div className="bg-white dark:bg-stone-800 p-4 rounded-lg shadow-sm">
    <h4 className="font-bold text-stone-800 dark:text-stone-200 mb-2">Methode C: Löffel-Methode</h4>
    <p className="text-sm text-stone-600 dark:text-stone-400">Halbiere den Apfel, schabe das Kerngehäuse mit einem Kugelausstecher oder Teelöffel heraus. Gut für halbe Äpfel.</p>
  </div>
  <div className="bg-white dark:bg-stone-800 p-4 rounded-lg shadow-sm">
    <h4 className="font-bold text-stone-800 dark:text-stone-200 mb-2">Methode D: V-Schnitt</h4>
    <p className="text-sm text-stone-600 dark:text-stone-400">Halbiere den Apfel, schneide zwei V-förmige Kerben links und rechts des Kerngehäuses. Funktioniert mit jedem Messer.</p>
  </div>
</div>

---

### 6. Gegen Bräunung: Der Oxidations-Trick

Geschnittene Äpfel werden braun. Das ist Oxidation (Enzyme reagieren mit Sauerstoff). Für Salate und Dekoration ist das unerwünscht.

<div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border-l-4 border-blue-500 my-4">
  <h4 className="font-bold text-blue-800 dark:text-blue-300 mb-2">Anti-Bräunungs-Methoden:</h4>
  <ul className="list-disc list-inside text-sm text-blue-700 dark:text-blue-300 space-y-2">
    <li><strong>Zitronenwasser:</strong> 1 EL Zitronensaft auf 500 ml Wasser. Apfelstücke kurz eintauchen. Die Säure blockiert die Enzyme.</li>
    <li><strong>Salzwasser:</strong> 1/2 TL Salz auf 500 ml Wasser. Kurz eintauchen, abspülen. Kein salziger Geschmack!</li>
    <li><strong>Schnell arbeiten:</strong> Schneide erst kurz vor dem Servieren. Klingt simpel, ist aber die beste Methode.</li>
    <li><strong>Vakuumieren:</strong> Kein Sauerstoff = keine Bräunung. Für Meal Prep ideal.</li>
  </ul>
</div>

---

### Sicherheitshinweise

<div className="p-4 bg-red-50 dark:bg-red-900/20 rounded-lg border-l-4 border-red-500 my-4">
  <h4 className="font-bold text-red-800 dark:text-red-300 mb-2">Achtung – Häufige Gefahren:</h4>
  <ul className="list-disc list-inside text-sm text-red-700 dark:text-red-300 space-y-2">
    <li><strong>Rutschgefahr:</strong> Äpfel sind rund! Schneide IMMER zuerst eine flache Seite, bevor du weiter schneidest.</li>
    <li><strong>Scharfes Messer nutzen:</strong> Ein stumpfes Messer rutscht auf der glatten Schale ab – das ist gefährlicher als ein scharfes Messer!</li>
    <li><strong>Krallengriff:</strong> Halte den Apfel IMMER mit dem Krallengriff. Fingerkuppen nach innen!</li>
    <li><strong>Stabiles Brett:</strong> Lege ein feuchtes Tuch unter das Schneidebrett, damit es nicht verrutscht.</li>
  </ul>
</div>

---

### Häufige Fehler

<div className="space-y-3 my-4">
  <div className="flex items-start gap-3 p-3 bg-stone-50 dark:bg-stone-800 rounded-lg">
    <span className="text-red-500 font-bold text-lg">✗</span>
    <div>
      <p className="font-semibold text-stone-800 dark:text-stone-200">Durch die Mitte schneiden</p>
      <p className="text-sm text-stone-600 dark:text-stone-400">Du schneidest durch das Kerngehäuse, bekommst Kerne überall, und musst sie mühsam einzeln entfernen.</p>
    </div>
  </div>
  <div className="flex items-start gap-3 p-3 bg-stone-50 dark:bg-stone-800 rounded-lg">
    <span className="text-red-500 font-bold text-lg">✗</span>
    <div>
      <p className="font-semibold text-stone-800 dark:text-stone-200">Ungleichmäßige Scheiben</p>
      <p className="text-sm text-stone-600 dark:text-stone-400">Dicke und dünne Scheiben garen unterschiedlich schnell. Beim Backen werden dünne Scheiben matschig, dicke noch roh.</p>
    </div>
  </div>
  <div className="flex items-start gap-3 p-3 bg-stone-50 dark:bg-stone-800 rounded-lg">
    <span className="text-red-500 font-bold text-lg">✗</span>
    <div>
      <p className="font-semibold text-stone-800 dark:text-stone-200">Zu früh schneiden</p>
      <p className="text-sm text-stone-600 dark:text-stone-400">Äpfel 30 Minuten vor dem Servieren schneiden = braune, unappetitliche Stücke.</p>
    </div>
  </div>
</div>

---

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border-2 border-green-300 my-4">
  <h3 className="font-bold text-green-800 dark:text-green-300 mb-4">🎯 Praktische Übung</h3>
  <ol className="list-decimal list-inside space-y-2 text-green-700 dark:text-green-300">
    <li>Nimm 2 Äpfel. Viertle den ersten mit der "Wangen"-Methode (seitlich am Kern vorbei). Wie viel Abfall hast du?</li>
    <li>Schneide die Viertel in gleichmäßige 4mm-Scheiben. Versuche, sie alle gleich dick zu machen.</li>
    <li>Nimm den zweiten Apfel und würfle ihn in 1cm-Würfel für einen Obstsalat.</li>
    <li>Teste die Anti-Bräunungsmethode: Lege die Hälfte in Zitronenwasser, die andere nicht. Vergleiche nach 20 Minuten.</li>
    <li>Bonus: Versuche die Fächer-Technik mit einem Apfelviertel.</li>
  </ol>
</div>
    `,
    en: `
### Cutting Apples the Right Way: More Than Just Quartering 🍎

The apple is one of the most common foods in the kitchen – whether as a snack, in a cake, in a salad, or as a side. Yet most people just cut apples haphazardly. There are techniques that save you time, reduce waste, and deliver better results.

<div className="bg-amber-50 dark:bg-amber-900/20 p-4 rounded-lg border-l-4 border-amber-500 my-4">
  <h4 className="font-bold text-amber-800 dark:text-amber-300 mb-2">Why does this matter?</h4>
  <p className="text-sm text-amber-700 dark:text-amber-300">Evenly cut apple pieces cook uniformly (e.g., when baking), look professional, and oxidize (brown) less quickly because the cut surfaces are clean.</p>
</div>

---

### 1. Preparing the Apple

Before cutting, wash the apple thoroughly under running water. Organic apples just need cold water; conventional apples should be scrubbed with a vegetable brush to remove wax residue.

**To peel or not to peel?**
- **For cakes & compote:** Peel with a vegetable peeler. Work in long strips from top to bottom.
- **For salads & snacks:** Leave the skin on! It contains the most vitamins and adds texture.
- **For sauces (applesauce):** Peel, as the skin creates an unpleasant texture.

---

### 2. Quartering (The Basic Technique)

The simplest and most common method. Perfect for snacks, fruit salad, and as a starting point for further cuts.

<div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border-l-4 border-blue-500 my-4">
  <h4 className="font-bold text-blue-800 dark:text-blue-300 mb-2">Step by Step:</h4>
  <ol className="list-decimal list-inside text-sm text-blue-700 dark:text-blue-300 space-y-2">
    <li>Stand the apple upright (stem up).</li>
    <li>Cut **alongside the core** – not through the middle! Place the knife about 1 cm beside the stem.</li>
    <li>Rotate the apple 90° and cut alongside the core again.</li>
    <li>Repeat for all 4 sides. You get 4 coreless "cheeks" and a cube-shaped core in the middle.</li>
    <li>Cut any remaining flesh off the core.</li>
  </ol>
</div>

**Advantage of this method:** You never need to punch out or cut around the core. The core stays as a compact waste piece – minimal waste!

---

### 3. Slicing (For Cakes & Tarts)

Even slices are the key to a beautiful apple cake.

#### Step by Step:
1. Quarter the apple as described above.
2. Place a quarter flat side down on the board. **Anti-wobble!**
3. Cut even slices (about 3-4 mm for cakes, 5-6 mm for tarte tatin).
4. Hold the quarter with the claw grip and cut uniformly.

<div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg my-4">
  <h4 className="font-bold text-green-800 dark:text-green-300 mb-2">Pro Tip: Fanning</h4>
  <p className="text-sm text-green-700 dark:text-green-300">For elegant presentation: Slice a quarter into thin slices, but DON'T cut all the way through at the top. Then fan the slices out like a deck of cards. Looks fantastic on cakes or desserts!</p>
</div>

---

### 4. Dicing (For Salads, Chutneys, Fillings)

Uniform apple cubes are perfect for Waldorf salad, chutneys, or pancake fillings.

#### Step by Step:
1. Quarter and remove the core.
2. Cut each quarter into strips (about 1 cm wide).
3. Rotate the strips 90° and cut across – finished cubes!
4. For finer dice (brunoise): Cut thinner strips (3-4 mm).

---

### 5. Removing the Core

<div className="grid md:grid-cols-2 gap-4 my-6">
  <div className="bg-white dark:bg-stone-800 p-4 rounded-lg shadow-sm">
    <h4 className="font-bold text-stone-800 dark:text-stone-200 mb-2">Method A: Cut Around (recommended)</h4>
    <p className="text-sm text-stone-600 dark:text-stone-400">Cut 4 "cheeks" alongside the core. Fastest method, no special tool needed. Ideal for everyday cooking.</p>
  </div>
  <div className="bg-white dark:bg-stone-800 p-4 rounded-lg shadow-sm">
    <h4 className="font-bold text-stone-800 dark:text-stone-200 mb-2">Method B: Apple Corer</h4>
    <p className="text-sm text-stone-600 dark:text-stone-400">Place corer in center and push straight through. Good for baked apples when you want to keep the apple whole.</p>
  </div>
  <div className="bg-white dark:bg-stone-800 p-4 rounded-lg shadow-sm">
    <h4 className="font-bold text-stone-800 dark:text-stone-200 mb-2">Method C: Spoon Method</h4>
    <p className="text-sm text-stone-600 dark:text-stone-400">Halve the apple, scoop out the core with a melon baller or teaspoon. Good for apple halves.</p>
  </div>
  <div className="bg-white dark:bg-stone-800 p-4 rounded-lg shadow-sm">
    <h4 className="font-bold text-stone-800 dark:text-stone-200 mb-2">Method D: V-Cut</h4>
    <p className="text-sm text-stone-600 dark:text-stone-400">Halve the apple, cut two V-shaped notches on each side of the core. Works with any knife.</p>
  </div>
</div>

---

### 6. Preventing Browning: The Oxidation Trick

Cut apples turn brown. That's oxidation (enzymes reacting with oxygen). For salads and decoration, this is undesirable.

<div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border-l-4 border-blue-500 my-4">
  <h4 className="font-bold text-blue-800 dark:text-blue-300 mb-2">Anti-Browning Methods:</h4>
  <ul className="list-disc list-inside text-sm text-blue-700 dark:text-blue-300 space-y-2">
    <li><strong>Lemon water:</strong> 1 tbsp lemon juice in 500 ml water. Dip apple pieces briefly. The acid blocks the enzymes.</li>
    <li><strong>Salt water:</strong> 1/2 tsp salt in 500 ml water. Dip briefly, rinse. No salty taste!</li>
    <li><strong>Work quickly:</strong> Cut just before serving. Sounds simple, but it's the best method.</li>
    <li><strong>Vacuum seal:</strong> No oxygen = no browning. Ideal for meal prep.</li>
  </ul>
</div>

---

### Safety Tips

<div className="p-4 bg-red-50 dark:bg-red-900/20 rounded-lg border-l-4 border-red-500 my-4">
  <h4 className="font-bold text-red-800 dark:text-red-300 mb-2">Watch Out – Common Hazards:</h4>
  <ul className="list-disc list-inside text-sm text-red-700 dark:text-red-300 space-y-2">
    <li><strong>Slip danger:</strong> Apples are round! ALWAYS cut a flat side first before continuing.</li>
    <li><strong>Use a sharp knife:</strong> A dull knife slides off the smooth skin – that's more dangerous than a sharp knife!</li>
    <li><strong>Claw grip:</strong> ALWAYS hold the apple with the claw grip. Fingertips tucked inward!</li>
    <li><strong>Stable board:</strong> Place a damp cloth under the cutting board so it doesn't slip.</li>
  </ul>
</div>

---

### Common Mistakes

<div className="space-y-3 my-4">
  <div className="flex items-start gap-3 p-3 bg-stone-50 dark:bg-stone-800 rounded-lg">
    <span className="text-red-500 font-bold text-lg">✗</span>
    <div>
      <p className="font-semibold text-stone-800 dark:text-stone-200">Cutting through the middle</p>
      <p className="text-sm text-stone-600 dark:text-stone-400">You cut through the core, get seeds everywhere, and must tediously remove them one by one.</p>
    </div>
  </div>
  <div className="flex items-start gap-3 p-3 bg-stone-50 dark:bg-stone-800 rounded-lg">
    <span className="text-red-500 font-bold text-lg">✗</span>
    <div>
      <p className="font-semibold text-stone-800 dark:text-stone-200">Uneven slices</p>
      <p className="text-sm text-stone-600 dark:text-stone-400">Thick and thin slices cook at different speeds. When baking, thin slices turn mushy while thick ones are still raw.</p>
    </div>
  </div>
  <div className="flex items-start gap-3 p-3 bg-stone-50 dark:bg-stone-800 rounded-lg">
    <span className="text-red-500 font-bold text-lg">✗</span>
    <div>
      <p className="font-semibold text-stone-800 dark:text-stone-200">Cutting too early</p>
      <p className="text-sm text-stone-600 dark:text-stone-400">Cutting apples 30 minutes before serving = brown, unappetizing pieces.</p>
    </div>
  </div>
</div>

---

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border-2 border-green-300 my-4">
  <h3 className="font-bold text-green-800 dark:text-green-300 mb-4">🎯 Practice Exercise</h3>
  <ol className="list-decimal list-inside space-y-2 text-green-700 dark:text-green-300">
    <li>Take 2 apples. Quarter the first using the "cheeks" method (cutting alongside the core). How much waste do you have?</li>
    <li>Cut the quarters into uniform 4mm slices. Try to make them all the same thickness.</li>
    <li>Take the second apple and dice it into 1cm cubes for a fruit salad.</li>
    <li>Test the anti-browning method: Put half in lemon water, leave the other half out. Compare after 20 minutes.</li>
    <li>Bonus: Try the fanning technique with an apple quarter.</li>
  </ol>
</div>
    `
  },

  task: {
    de: {
      title: 'Apfel-Meisterklasse',
      description: 'Übe alle Apfel-Schneidetechniken. Nimm dir 2 Äpfel und arbeite dich durch die verschiedenen Methoden.',
      checklist: [
        { text: 'Viertle einen Apfel mit der "Wangen"-Methode (seitlich am Kern vorbei).' },
        { text: 'Schneide gleichmäßige 4mm-Scheiben aus den Vierteln.' },
        { text: 'Würfle den zweiten Apfel in 1cm-Würfel.' },
        { text: 'Teste die Zitronenwasser-Methode gegen Bräunung.' },
        { text: 'Versuche die Fächer-Technik mit einem Apfelviertel.' },
        { text: 'Bewerte: Wie gleichmäßig sind deine Schnitte? Wo kannst du dich verbessern?' }
      ]
    },
    en: {
      title: 'Apple Masterclass',
      description: 'Practice all apple cutting techniques. Take 2 apples and work through the different methods.',
      checklist: [
        { text: 'Quarter an apple using the "cheeks" method (cutting alongside the core).' },
        { text: 'Cut uniform 4mm slices from the quarters.' },
        { text: 'Dice the second apple into 1cm cubes.' },
        { text: 'Test the lemon water method against browning.' },
        { text: 'Try the fanning technique with an apple quarter.' },
        { text: 'Evaluate: How uniform are your cuts? Where can you improve?' }
      ]
    }
  },
  
  notes: {
    de: [
      { front: 'Was ist die "Wangen"-Methode beim Apfel?', back: 'Seitlich am Kerngehäuse vorbei schneiden, 4 kernlose Stücke erhalten. Kein Entkerner nötig, minimaler Abfall.' },
      { front: 'Wie verhindert man Bräunung bei geschnittenen Äpfeln?', back: 'Zitronenwasser (1 EL auf 500ml), Salzwasser (1/2 TL auf 500ml), kurz vor Servieren schneiden, oder vakuumieren.' },
      { front: 'Wie dick schneidet man Apfelscheiben für Kuchen?', back: 'Ca. 3-4 mm für normalen Kuchen, 5-6 mm für Tarte Tatin.' },
      { front: 'Warum nie durch die Mitte des Apfels schneiden?', back: 'Man schneidet durch das Kerngehäuse, Kerne verteilen sich überall und müssen mühsam entfernt werden.' },
      { front: 'Was ist die Fächer-Technik?', back: 'Apfelviertel in dünne Scheiben schneiden, oben nicht ganz durchschneiden, dann auffächern wie Karten. Elegante Deko für Desserts.' }
    ],
    en: [
      { front: 'What is the "cheeks" method for apples?', back: 'Cut alongside the core to get 4 coreless pieces. No apple corer needed, minimal waste.' },
      { front: 'How to prevent browning of cut apples?', back: 'Lemon water (1 tbsp per 500ml), salt water (1/2 tsp per 500ml), cut just before serving, or vacuum seal.' },
      { front: 'How thick to slice apples for cakes?', back: 'About 3-4 mm for regular cakes, 5-6 mm for tarte tatin.' },
      { front: 'Why never cut through the middle of an apple?', back: 'You cut through the core, seeds spread everywhere and must be tediously removed.' },
      { front: 'What is the fanning technique?', back: 'Slice an apple quarter thinly, don\'t cut all the way through at the top, then fan out like cards. Elegant dessert decoration.' }
    ]
  }
};
