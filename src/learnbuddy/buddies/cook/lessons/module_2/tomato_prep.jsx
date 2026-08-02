import React from 'react';

export const tomatoPrepLesson = {
  id: 'c2_m2_tomato_prep',
  title: { 
    en: '2.15 Tomato Preparation', 
    de: '2.15 Tomaten-Zubereitung' 
  },
  description: { 
    en: 'Master concassé, slicing, dicing, peeling, and deseeding tomatoes. Essential techniques for sauces, salads, and more.', 
    de: 'Meistere Concassé, Schneiden, Würfeln, Häuten und Entkernen von Tomaten. Unverzichtbare Techniken für Saucen, Salate und mehr.' 
  },
  category: 'techniques',
  
  content: {
    de: `
### Tomaten meistern: Von der Sauce bis zum Salat 🍅

Die Tomate ist die Königin der mediterranen Küche. Ob roh, gekocht, geröstet oder als Sauce – sie ist unglaublich vielseitig. Aber: Verschiedene Gerichte erfordern verschiedene Vorbereitungstechniken. Eine Sauce braucht geschälte, entkernte Tomaten. Ein Salat braucht sauber geschnittene Scheiben. Lerne die richtige Technik für jeden Zweck.

<div className="bg-amber-50 dark:bg-amber-900/20 p-4 rounded-lg border-l-4 border-amber-500 my-4">
  <h4 className="font-bold text-amber-800 dark:text-amber-300 mb-2">Das richtige Messer macht den Unterschied</h4>
  <p className="text-sm text-amber-700 dark:text-amber-300">Tomaten haben eine glatte, feste Haut und weiches Fruchtfleisch. Ein <strong>stumpfes Messer zerquetscht</strong> die Tomate statt sie zu schneiden – der Saft läuft aus, die Scheiben werden matschig. Ein scharfes Messer oder ein <strong>Brotmesser (Wellenschliff)</strong> gleitet mühelos durch die Haut.</p>
</div>

---

### 1. Concassé: Die Profi-Technik für Saucen

Tomates Concassées (gehäutete, entkernte, gewürfelte Tomaten) sind die Basis für perfekte Saucen. Die Technik klingt aufwendig, ist aber schnell gelernt.

<div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border-l-4 border-blue-500 my-4">
  <h4 className="font-bold text-blue-800 dark:text-blue-300 mb-2">Schritt für Schritt:</h4>
  <ol className="list-decimal list-inside text-sm text-blue-700 dark:text-blue-300 space-y-2">
    <li><strong>Einritzen:</strong> Am Boden der Tomate ein flaches Kreuz in die Haut ritzen. Nicht zu tief – nur die Haut!</li>
    <li><strong>Stielansatz entfernen:</strong> Den harten Bereich um den Stiel mit einem kleinen V-Schnitt herauslösen.</li>
    <li><strong>Blanchieren:</strong> Tomaten in kochendes Wasser legen. <strong>10-30 Sekunden</strong> (reife Tomaten brauchen weniger, feste mehr).</li>
    <li><strong>Abschrecken:</strong> Sofort in Eiswasser! Die Haut platzt am Kreuz auf.</li>
    <li><strong>Häuten:</strong> Die Haut vom Kreuz ausgehend mit den Fingern abziehen – sie löst sich mühelos.</li>
    <li><strong>Vierteln:</strong> Die gehäutete Tomate in Viertel schneiden.</li>
    <li><strong>Entkernen:</strong> Kerne und gallertiges Innere mit Daumen oder Löffel herausdrücken.</li>
    <li><strong>Würfeln:</strong> Das Fruchtfleisch in gleichmäßige Würfel (ca. 5-10 mm) schneiden.</li>
  </ol>
</div>

<div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg my-4">
  <h4 className="font-bold text-green-800 dark:text-green-300 mb-2">Warum Concassé?</h4>
  <p className="text-sm text-green-700 dark:text-green-300">Haut wird in Saucen zu unschönen Fetzen. Kerne machen Saucen wässrig und leicht bitter. Concassé ergibt eine seidig-glatte Sauce mit reinem Tomatengeschmack.</p>
</div>

---

### 2. Scheiben schneiden (Für Salate, Burger, Sandwiches)

<div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border-l-4 border-blue-500 my-4">
  <h4 className="font-bold text-blue-800 dark:text-blue-300 mb-2">Schritt für Schritt:</h4>
  <ol className="list-decimal list-inside text-sm text-blue-700 dark:text-blue-300 space-y-2">
    <li>Scharfes Messer oder Brotmesser verwenden.</li>
    <li>Tomate auf die Seite legen (Stielansatz seitlich).</li>
    <li>Mit leichtem <strong>Säge-Bewegung</strong> ansetzen – die Haut muss "greifen". Nicht drücken!</li>
    <li>Gleichmäßige Scheiben schneiden (5-8 mm für Salat, 8-10 mm für Burger).</li>
    <li>Den ersten und letzten Schnitt (Endstücke) für Saucen aufheben – nicht verschwenden.</li>
  </ol>
</div>

---

### 3. Würfel schneiden (Für Salsa, Bruschetta, Salate)

#### Methode A: Schnelle Würfel (mit Haut und Kernen)
1. Tomate halbieren (durch den Äquator, nicht durch den Stiel).
2. Hälften mit der Schnittfläche nach unten legen.
3. In Streifen schneiden, dann um 90° drehen und quer schneiden.

#### Methode B: Saubere Würfel (ohne Kerne)
1. Tomate vierteln.
2. Kerne mit dem Daumen herausdrücken.
3. Fruchtfleisch in Streifen, dann in Würfel schneiden.

<div className="bg-amber-50 dark:bg-amber-900/20 p-4 rounded-lg my-4">
  <h4 className="font-bold text-amber-800 dark:text-amber-300 mb-2">Wann entkernen?</h4>
  <p className="text-sm text-amber-700 dark:text-amber-300"><strong>Saucen:</strong> Immer entkernen (wässrig, bitter). <strong>Salsa/Bruschetta:</strong> Optional (Kerne geben Saftigkeit). <strong>Salate:</strong> Meistens nicht nötig.</p>
</div>

---

### 4. Tomaten häuten ohne Blanchieren: Alternativen

<div className="grid md:grid-cols-2 gap-4 my-6">
  <div className="bg-white dark:bg-stone-800 p-4 rounded-lg shadow-sm">
    <h4 className="font-bold text-stone-800 dark:text-stone-200 mb-2">Flammen-Methode</h4>
    <p className="text-sm text-stone-600 dark:text-stone-400">Tomate auf eine Gabel spießen und über einer Gasflamme drehen, bis die Haut blasen wirft. Dann abziehen. Ergibt leichte Raucharomen.</p>
  </div>
  <div className="bg-white dark:bg-stone-800 p-4 rounded-lg shadow-sm">
    <h4 className="font-bold text-stone-800 dark:text-stone-200 mb-2">Ofen-Methode</h4>
    <p className="text-sm text-stone-600 dark:text-stone-400">Tomaten bei 200°C auf Backblech rösten, bis die Haut platzt (15-20 Min). Abkühlen lassen, Haut abziehen. Bonus: konzentrierter Geschmack.</p>
  </div>
  <div className="bg-white dark:bg-stone-800 p-4 rounded-lg shadow-sm">
    <h4 className="font-bold text-stone-800 dark:text-stone-200 mb-2">Tiefkühl-Methode</h4>
    <p className="text-sm text-stone-600 dark:text-stone-400">Tomaten einfrieren. Nach dem Auftauen lässt sich die Haut leicht abziehen. Allerdings nur für gekochte Gerichte geeignet (Textur wird weich).</p>
  </div>
  <div className="bg-white dark:bg-stone-800 p-4 rounded-lg shadow-sm">
    <h4 className="font-bold text-stone-800 dark:text-stone-200 mb-2">Sparschäler</h4>
    <p className="text-sm text-stone-600 dark:text-stone-400">Nur für feste, unreife Tomaten. Ein normaler Sparschäler funktioniert hier. Für reife Tomaten zu weich.</p>
  </div>
</div>

---

### 5. Tomatensorten und ihre Verwendung

<table className="w-full border-collapse my-4">
  <thead>
    <tr className="bg-gray-100 dark:bg-stone-700">
      <th className="border dark:border-stone-600 p-2 text-left">Sorte</th>
      <th className="border dark:border-stone-600 p-2 text-left">Eigenschaft</th>
      <th className="border dark:border-stone-600 p-2 text-left">Beste Verwendung</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td className="border dark:border-stone-600 p-2">Roma/San Marzano</td>
      <td className="border dark:border-stone-600 p-2">Fleischig, wenig Kerne</td>
      <td className="border dark:border-stone-600 p-2">Saucen, Concassé, Pizza</td>
    </tr>
    <tr>
      <td className="border dark:border-stone-600 p-2">Rispentomaten</td>
      <td className="border dark:border-stone-600 p-2">Aromatisch, saftig</td>
      <td className="border dark:border-stone-600 p-2">Salate, Rösten, Allrounder</td>
    </tr>
    <tr>
      <td className="border dark:border-stone-600 p-2">Ochsenherz</td>
      <td className="border dark:border-stone-600 p-2">Groß, fleischig, wenig Saft</td>
      <td className="border dark:border-stone-600 p-2">Scheiben für Salate, Burger</td>
    </tr>
    <tr>
      <td className="border dark:border-stone-600 p-2">Kirschtomaten</td>
      <td className="border dark:border-stone-600 p-2">Klein, süß, intensiv</td>
      <td className="border dark:border-stone-600 p-2">Snacks, Salate, Rösten (halbiert)</td>
    </tr>
    <tr>
      <td className="border dark:border-stone-600 p-2">Dosentomaten</td>
      <td className="border dark:border-stone-600 p-2">Reif geerntet, konsistent</td>
      <td className="border dark:border-stone-600 p-2">Saucen (oft besser als frische im Winter!)</td>
    </tr>
  </tbody>
</table>

---

### Sicherheitshinweise

<div className="p-4 bg-red-50 dark:bg-red-900/20 rounded-lg border-l-4 border-red-500 my-4">
  <h4 className="font-bold text-red-800 dark:text-red-300 mb-2">Sicherheit bei Tomaten:</h4>
  <ul className="list-disc list-inside text-sm text-red-700 dark:text-red-300 space-y-2">
    <li><strong>Scharfes Messer ist entscheidend:</strong> Ein stumpfes Messer zerquetscht die Tomate und rutscht auf der glatten Haut ab.</li>
    <li><strong>Säge-Bewegung:</strong> Nicht drücken, sondern leicht hin und her sägen. Die Haut muss "greifen".</li>
    <li><strong>Kochendes Wasser beim Blanchieren:</strong> Tomaten mit Schaumkelle einlegen. Vorsicht vor Spritzern!</li>
    <li><strong>Nasse Hände nach dem Abschrecken:</strong> Trockne deine Hände, bevor du das Messer in die Hand nimmst.</li>
  </ul>
</div>

---

### Häufige Fehler

<div className="space-y-3 my-4">
  <div className="flex items-start gap-3 p-3 bg-stone-50 dark:bg-stone-800 rounded-lg">
    <span className="text-red-500 font-bold text-lg">✗</span>
    <div>
      <p className="font-semibold text-stone-800 dark:text-stone-200">Tomate zerdrücken statt schneiden</p>
      <p className="text-sm text-stone-600 dark:text-stone-400">Stumpfes Messer + Druck = zerquetschte Tomate, Saft überall. Lösung: Scharfes Messer, Säge-Bewegung.</p>
    </div>
  </div>
  <div className="flex items-start gap-3 p-3 bg-stone-50 dark:bg-stone-800 rounded-lg">
    <span className="text-red-500 font-bold text-lg">✗</span>
    <div>
      <p className="font-semibold text-stone-800 dark:text-stone-200">Zu langes Blanchieren</p>
      <p className="text-sm text-stone-600 dark:text-stone-400">Mehr als 30 Sekunden = die Tomate beginnt zu garen. Das Fruchtfleisch wird weich und matschig.</p>
    </div>
  </div>
  <div className="flex items-start gap-3 p-3 bg-stone-50 dark:bg-stone-800 rounded-lg">
    <span className="text-red-500 font-bold text-lg">✗</span>
    <div>
      <p className="font-semibold text-stone-800 dark:text-stone-200">Tomaten im Kühlschrank lagern</p>
      <p className="text-sm text-stone-600 dark:text-stone-400">Kälte zerstört Geschmack und Textur! Tomaten bei Raumtemperatur lagern und innerhalb weniger Tage verbrauchen.</p>
    </div>
  </div>
</div>

---

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border-2 border-green-300 my-4">
  <h3 className="font-bold text-green-800 dark:text-green-300 mb-4">🎯 Praktische Übung</h3>
  <ol className="list-decimal list-inside space-y-2 text-green-700 dark:text-green-300">
    <li>Kaufe 6 Tomaten (am besten Rispentomaten).</li>
    <li><strong>Concassé üben:</strong> Häute und entkerne 3 Tomaten. Schneide das Fruchtfleisch in 1cm-Würfel. Wie sauber sind deine Würfel?</li>
    <li><strong>Scheiben:</strong> Schneide 2 Tomaten in gleichmäßige 5mm-Scheiben. Zerquetschen sie oder bleiben sie intakt?</li>
    <li><strong>Schnelle Salsa:</strong> Würfle die letzte Tomate mit etwas Zwiebel, Koriander, Limette und Salz.</li>
    <li><strong>Sauce-Test:</strong> Koche die Concassé-Würfel 10 Min mit Olivenöl, Knoblauch und Basilikum. Wie glatt ist die Sauce?</li>
  </ol>
</div>
    `,
    en: `
### Mastering Tomatoes: From Sauce to Salad 🍅

The tomato is the queen of Mediterranean cooking. Whether raw, cooked, roasted, or as sauce – it's incredibly versatile. But: different dishes require different preparation techniques. A sauce needs peeled, deseeded tomatoes. A salad needs cleanly cut slices. Learn the right technique for every purpose.

<div className="bg-amber-50 dark:bg-amber-900/20 p-4 rounded-lg border-l-4 border-amber-500 my-4">
  <h4 className="font-bold text-amber-800 dark:text-amber-300 mb-2">The Right Knife Makes the Difference</h4>
  <p className="text-sm text-amber-700 dark:text-amber-300">Tomatoes have smooth, firm skin and soft flesh. A <strong>dull knife crushes</strong> the tomato instead of cutting it – juice runs out, slices turn mushy. A sharp knife or a <strong>serrated bread knife</strong> glides effortlessly through the skin.</p>
</div>

---

### 1. Concassé: The Professional Sauce Technique

Tomates concassées (peeled, deseeded, diced tomatoes) are the base for perfect sauces. The technique sounds elaborate but is quickly learned.

<div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border-l-4 border-blue-500 my-4">
  <h4 className="font-bold text-blue-800 dark:text-blue-300 mb-2">Step by Step:</h4>
  <ol className="list-decimal list-inside text-sm text-blue-700 dark:text-blue-300 space-y-2">
    <li><strong>Score:</strong> Cut a shallow cross into the skin on the bottom. Not too deep – just the skin!</li>
    <li><strong>Remove stem core:</strong> Cut out the hard area around the stem with a small V-cut.</li>
    <li><strong>Blanch:</strong> Place tomatoes in boiling water. <strong>10-30 seconds</strong> (ripe tomatoes need less, firm ones more).</li>
    <li><strong>Shock:</strong> Into ice water immediately! The skin bursts open at the cross.</li>
    <li><strong>Peel:</strong> Pull skin off starting from the cross – it comes off effortlessly.</li>
    <li><strong>Quarter:</strong> Cut the peeled tomato into quarters.</li>
    <li><strong>Deseed:</strong> Push out seeds and jelly with thumb or spoon.</li>
    <li><strong>Dice:</strong> Cut the flesh into uniform cubes (about 5-10 mm).</li>
  </ol>
</div>

<div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg my-4">
  <h4 className="font-bold text-green-800 dark:text-green-300 mb-2">Why Concassé?</h4>
  <p className="text-sm text-green-700 dark:text-green-300">Skin turns into ugly shreds in sauces. Seeds make sauces watery and slightly bitter. Concassé yields a silky-smooth sauce with pure tomato flavor.</p>
</div>

---

### 2. Slicing (For Salads, Burgers, Sandwiches)

<div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border-l-4 border-blue-500 my-4">
  <h4 className="font-bold text-blue-800 dark:text-blue-300 mb-2">Step by Step:</h4>
  <ol className="list-decimal list-inside text-sm text-blue-700 dark:text-blue-300 space-y-2">
    <li>Use a sharp knife or serrated bread knife.</li>
    <li>Place tomato on its side (stem end to the side).</li>
    <li>Start with a light <strong>sawing motion</strong> – the skin needs to "catch." Don't press!</li>
    <li>Cut uniform slices (5-8 mm for salad, 8-10 mm for burgers).</li>
    <li>Save the first and last cuts (end pieces) for sauces – don't waste them.</li>
  </ol>
</div>

---

### 3. Dicing (For Salsa, Bruschetta, Salads)

#### Method A: Quick Dice (with skin and seeds)
1. Halve the tomato (through the equator, not through the stem).
2. Place halves cut-side down.
3. Cut into strips, then rotate 90° and cut across.

#### Method B: Clean Dice (without seeds)
1. Quarter the tomato.
2. Push out seeds with your thumb.
3. Cut flesh into strips, then into cubes.

<div className="bg-amber-50 dark:bg-amber-900/20 p-4 rounded-lg my-4">
  <h4 className="font-bold text-amber-800 dark:text-amber-300 mb-2">When to deseed?</h4>
  <p className="text-sm text-amber-700 dark:text-amber-300"><strong>Sauces:</strong> Always deseed (watery, bitter). <strong>Salsa/Bruschetta:</strong> Optional (seeds add juiciness). <strong>Salads:</strong> Usually not necessary.</p>
</div>

---

### 4. Peeling Without Blanching: Alternatives

<div className="grid md:grid-cols-2 gap-4 my-6">
  <div className="bg-white dark:bg-stone-800 p-4 rounded-lg shadow-sm">
    <h4 className="font-bold text-stone-800 dark:text-stone-200 mb-2">Flame Method</h4>
    <p className="text-sm text-stone-600 dark:text-stone-400">Spear tomato on a fork and rotate over a gas flame until skin blisters. Then peel off. Adds light smoky flavors.</p>
  </div>
  <div className="bg-white dark:bg-stone-800 p-4 rounded-lg shadow-sm">
    <h4 className="font-bold text-stone-800 dark:text-stone-200 mb-2">Oven Method</h4>
    <p className="text-sm text-stone-600 dark:text-stone-400">Roast tomatoes at 200°C/400°F on baking sheet until skin bursts (15-20 min). Cool, peel. Bonus: concentrated flavor.</p>
  </div>
  <div className="bg-white dark:bg-stone-800 p-4 rounded-lg shadow-sm">
    <h4 className="font-bold text-stone-800 dark:text-stone-200 mb-2">Freezing Method</h4>
    <p className="text-sm text-stone-600 dark:text-stone-400">Freeze tomatoes. After thawing, skin peels off easily. Only suitable for cooked dishes though (texture becomes soft).</p>
  </div>
  <div className="bg-white dark:bg-stone-800 p-4 rounded-lg shadow-sm">
    <h4 className="font-bold text-stone-800 dark:text-stone-200 mb-2">Vegetable Peeler</h4>
    <p className="text-sm text-stone-600 dark:text-stone-400">Only for firm, unripe tomatoes. A regular peeler works here. Too soft for ripe tomatoes.</p>
  </div>
</div>

---

### 5. Tomato Varieties and Their Uses

<table className="w-full border-collapse my-4">
  <thead>
    <tr className="bg-gray-100 dark:bg-stone-700">
      <th className="border dark:border-stone-600 p-2 text-left">Variety</th>
      <th className="border dark:border-stone-600 p-2 text-left">Properties</th>
      <th className="border dark:border-stone-600 p-2 text-left">Best Use</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td className="border dark:border-stone-600 p-2">Roma/San Marzano</td>
      <td className="border dark:border-stone-600 p-2">Meaty, few seeds</td>
      <td className="border dark:border-stone-600 p-2">Sauces, concassé, pizza</td>
    </tr>
    <tr>
      <td className="border dark:border-stone-600 p-2">Vine-ripened</td>
      <td className="border dark:border-stone-600 p-2">Aromatic, juicy</td>
      <td className="border dark:border-stone-600 p-2">Salads, roasting, all-purpose</td>
    </tr>
    <tr>
      <td className="border dark:border-stone-600 p-2">Beefsteak/Oxheart</td>
      <td className="border dark:border-stone-600 p-2">Large, meaty, little juice</td>
      <td className="border dark:border-stone-600 p-2">Slices for salads, burgers</td>
    </tr>
    <tr>
      <td className="border dark:border-stone-600 p-2">Cherry tomatoes</td>
      <td className="border dark:border-stone-600 p-2">Small, sweet, intense</td>
      <td className="border dark:border-stone-600 p-2">Snacks, salads, roasting (halved)</td>
    </tr>
    <tr>
      <td className="border dark:border-stone-600 p-2">Canned tomatoes</td>
      <td className="border dark:border-stone-600 p-2">Picked ripe, consistent</td>
      <td className="border dark:border-stone-600 p-2">Sauces (often better than fresh in winter!)</td>
    </tr>
  </tbody>
</table>

---

### Safety Tips

<div className="p-4 bg-red-50 dark:bg-red-900/20 rounded-lg border-l-4 border-red-500 my-4">
  <h4 className="font-bold text-red-800 dark:text-red-300 mb-2">Tomato Safety:</h4>
  <ul className="list-disc list-inside text-sm text-red-700 dark:text-red-300 space-y-2">
    <li><strong>Sharp knife is crucial:</strong> A dull knife crushes the tomato and slides off the smooth skin.</li>
    <li><strong>Sawing motion:</strong> Don't press, gently saw back and forth. The skin needs to "catch."</li>
    <li><strong>Boiling water when blanching:</strong> Lower tomatoes in with a slotted spoon. Watch for splashes!</li>
    <li><strong>Wet hands after shocking:</strong> Dry your hands before picking up the knife.</li>
  </ul>
</div>

---

### Common Mistakes

<div className="space-y-3 my-4">
  <div className="flex items-start gap-3 p-3 bg-stone-50 dark:bg-stone-800 rounded-lg">
    <span className="text-red-500 font-bold text-lg">✗</span>
    <div>
      <p className="font-semibold text-stone-800 dark:text-stone-200">Crushing instead of cutting</p>
      <p className="text-sm text-stone-600 dark:text-stone-400">Dull knife + pressure = crushed tomato, juice everywhere. Solution: Sharp knife, sawing motion.</p>
    </div>
  </div>
  <div className="flex items-start gap-3 p-3 bg-stone-50 dark:bg-stone-800 rounded-lg">
    <span className="text-red-500 font-bold text-lg">✗</span>
    <div>
      <p className="font-semibold text-stone-800 dark:text-stone-200">Blanching too long</p>
      <p className="text-sm text-stone-600 dark:text-stone-400">More than 30 seconds = the tomato starts cooking. Flesh becomes soft and mushy.</p>
    </div>
  </div>
  <div className="flex items-start gap-3 p-3 bg-stone-50 dark:bg-stone-800 rounded-lg">
    <span className="text-red-500 font-bold text-lg">✗</span>
    <div>
      <p className="font-semibold text-stone-800 dark:text-stone-200">Storing tomatoes in the fridge</p>
      <p className="text-sm text-stone-600 dark:text-stone-400">Cold destroys flavor and texture! Store tomatoes at room temperature and use within a few days.</p>
    </div>
  </div>
</div>

---

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border-2 border-green-300 my-4">
  <h3 className="font-bold text-green-800 dark:text-green-300 mb-4">🎯 Practice Exercise</h3>
  <ol className="list-decimal list-inside space-y-2 text-green-700 dark:text-green-300">
    <li>Buy 6 tomatoes (preferably vine-ripened).</li>
    <li><strong>Practice concassé:</strong> Peel and deseed 3 tomatoes. Dice the flesh into 1cm cubes. How clean are your cubes?</li>
    <li><strong>Slicing:</strong> Cut 2 tomatoes into uniform 5mm slices. Do they crush or stay intact?</li>
    <li><strong>Quick salsa:</strong> Dice the last tomato with some onion, cilantro, lime, and salt.</li>
    <li><strong>Sauce test:</strong> Cook the concassé cubes 10 min with olive oil, garlic, and basil. How smooth is the sauce?</li>
  </ol>
</div>
    `
  },

  task: {
    de: {
      title: 'Tomaten-Technik-Training',
      description: 'Übe die wichtigsten Tomaten-Zubereitungstechniken.',
      checklist: [
        { text: 'Häute 3 Tomaten mit der Blanchier-Methode (Einritzen → Kochendes Wasser → Eiswasser → Abziehen).' },
        { text: 'Entkerne die gehäuteten Tomaten und schneide Concassé-Würfel (1cm).' },
        { text: 'Schneide 2 Tomaten in gleichmäßige Scheiben (5mm) ohne sie zu zerquetschen.' },
        { text: 'Koche eine einfache Sauce aus den Concassé-Würfeln.' },
        { text: 'Bonus: Probiere die Ofenmethode zum Häuten.' }
      ]
    },
    en: {
      title: 'Tomato Technique Training',
      description: 'Practice the most important tomato preparation techniques.',
      checklist: [
        { text: 'Peel 3 tomatoes using blanching method (Score → Boiling water → Ice water → Peel).' },
        { text: 'Deseed the peeled tomatoes and cut concassé cubes (1cm).' },
        { text: 'Cut 2 tomatoes into uniform slices (5mm) without crushing them.' },
        { text: 'Cook a simple sauce from the concassé cubes.' },
        { text: 'Bonus: Try the oven method for peeling.' }
      ]
    }
  },
  
  notes: {
    de: [
      { front: 'Was ist Concassé?', back: 'Tomaten häuten, entkernen und in gleichmäßige Würfel schneiden. Basis für Saucen mit reinem Tomatengeschmack.' },
      { front: 'Wie häutet man Tomaten?', back: '1. Kreuz in die Haut ritzen\n2. 10-30 Sek blanchieren (kochendes Wasser)\n3. In Eiswasser abschrecken\n4. Haut abziehen' },
      { front: 'Warum Tomaten für Saucen entkernen?', back: 'Kerne machen die Sauce wässrig und leicht bitter. Ohne Kerne wird die Sauce glatter und intensiver.' },
      { front: 'Welche Tomate für Saucen?', back: 'Roma/San Marzano – fleischig, wenig Kerne, ideal für Saucen. Im Winter sind Dosentomaten oft besser als frische!' },
      { front: 'Warum Tomaten nicht im Kühlschrank lagern?', back: 'Kälte zerstört die Aromastoffe und die Textur. Tomaten bei Raumtemperatur lagern und schnell verbrauchen.' }
    ],
    en: [
      { front: 'What is concassé?', back: 'Peeling tomatoes, deseeding, and cutting into uniform cubes. Basis for sauces with pure tomato flavor.' },
      { front: 'How to peel tomatoes?', back: '1. Score a cross in the skin\n2. Blanch 10-30 sec (boiling water)\n3. Shock in ice water\n4. Peel off skin' },
      { front: 'Why deseed tomatoes for sauces?', back: 'Seeds make sauce watery and slightly bitter. Without seeds, the sauce is smoother and more intense.' },
      { front: 'Which tomato for sauces?', back: 'Roma/San Marzano – meaty, few seeds, ideal for sauces. In winter, canned tomatoes are often better than fresh!' },
      { front: 'Why not store tomatoes in the fridge?', back: 'Cold destroys the flavor compounds and texture. Store at room temperature and use quickly.' }
    ]
  }
};
