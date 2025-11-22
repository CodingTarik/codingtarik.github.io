import React from 'react';

export const vegetablePrepLesson = {
  id: 'c2_m2_veg_prep',
  title: { 
    en: '2.3 Vegetable Preparation', 
    de: '2.3 Gemüse-Vorbereitung' 
  },
  description: { 
    en: 'How to tame broccoli, peel tomatoes, and handle peppers properly. Efficient techniques for everyday veggies.', 
    de: 'Wie man Brokkoli bändigt, Tomaten häutet und Paprika richtig bearbeitet. Effiziente Techniken für Alltagsgemüse.' 
  },
  category: 'techniques',
  
  content: {
    de: `
### Gemüse-Vorbereitung: Von der Wurzel bis zur Blüte 🥕🥦

Gemüse richtig vorzubereiten ist der Schlüssel zu besseren Gerichten. Jede Sorte hat ihre Besonderheiten – lerne sie zu meistern, um Abfall zu minimieren, Geschmack zu maximieren und Zeit zu sparen. Wir gehen Schritt für Schritt durch die gängigsten Gemüse, mit Tipps, Tricks und warum es wichtig ist.

<div className="bg-amber-50 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">Warum ist Vorbereitung entscheidend?</h3>
  <p>Gleichmäßige Stücke garen gleichmäßig. Der Strunk vom Brokkoli ist essbar und nährstoffreich – wegwerfen ist Verschwendung. Richtig vorbereitetes Gemüse behält Farbe, Knackigkeit und Vitamine.</p>
</div>

---

### 1. Brokkoli & Blumenkohl: Zero Waste und maximale Frische

Viele werfen den Strunk weg – ein Fehler! Er ist der zarteste Teil, wenn man ihn richtig behandelt. Brokkoli und Blumenkohl sind verwandt, die Technik ist ähnlich.

#### Schritt-für-Schritt:
1. **Röschen trennen:** Halte den Brokkoli kopfüber. Schneide die Röschen von unten ab, direkt am Stiel. Ziehe sie auseinander, um Bröckchen zu vermeiden.
2. **Strunk nutzen:** Schneide das holzige Ende ab (ca. 2 cm). Schäle die äußere Schicht mit einem Sparschäler (wie eine Karotte). Schneide das weiche Innere in Scheiben oder Würfel – es schmeckt mild und ist super für Suppen oder als Beilage.
3. **Waschen:** Erst NACH dem Schneiden waschen, um Vitamine nicht auszuspülen.

<ul className="list-disc list-inside space-y-2 my-4">
  <li><strong>Tipp:</strong> Brokkoli-Röschen sollten etwa gleich groß sein für gleichmäßiges Garen.</li>
  <li><strong>Warum wichtig?</strong> Der Strunk hat mehr Nährstoffe als die Röschen!</li>
</ul>

<div className="bg-green-50 p-4 rounded-lg">
  <h3 className="font-bold mb-2">Beispiel: Brokkoli in der Praxis</h3>
  <p>Dämpfe die Röschen 3-4 Min (bleiben knackig), brate den Strunk in Butter – eine tolle Beilage zu Fisch.</p>
</div>

---

### 2. Paprika: Sauber und ohne Chaos

Paprika entkernen kann chaotisch sein, wenn man es falsch macht. Diese Methode ist sauber und effizient.

#### Schritt-für-Schritt:
1. **Deckel und Boden abschneiden:** Schneide oben und unten ca. 1 cm ab.
2. **Vertikalen Schnitt machen:** Schneide die Paprika an einer Seite auf.
3. **Ausrollen:** Öffne sie wie ein Buch. Schneide das Kerngehäuse mit einem flachen Schnitt heraus – es bleibt in einem Stück.
4. **In Streifen oder Würfel schneiden:** Jetzt hast du sauberes Fruchtfleisch ohne Kerne.

<table className="w-full border-collapse my-4">
  <thead>
    <tr className="bg-gray-100">
      <th className="border p-2">Farbe</th>
      <th className="border p-2">Geschmack</th>
      <th className="border p-2">Bester Einsatz</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td className="border p-2">Rot</td>
      <td className="border p-2">Süß</td>
      <td className="border p-2">Salate, Grillen</td>
    </tr>
    <tr>
      <td className="border p-2">Gelb</td>
      <td className="border p-2">Mild-süß</td>
      <td className="border p-2">Füllungen, Saucen</td>
    </tr>
    <tr>
      <td className="border p-2">Grün</td>
      <td className="border p-2">Bitter-herb</td>
      <td className="border p-2">Currys, Eintöpfe</td>
    </tr>
  </tbody>
</table>

<div className="bg-blue-50 p-4 rounded-lg">
  <h3 className="font-bold mb-2">Tipp gegen Bitterkeit</h3>
  <p>Entferne die weißen Rippen im Inneren – sie sind oft bitter.</p>
</div>

---

### 3. Tomaten häuten und entkernen: Für perfekte Saucen

Für glatte Saucen oder Füllungen stört die Haut und die Kerne.

#### Schritt-für-Schritt (Concassée):
1. **Einritzen:** Schneide am unteren Ende ein Kreuz in die Haut (nicht zu tief).
2. **Blanchieren:** In kochendes Wasser für 10-30 Sekunden (je nach Reife).
3. **Abschrecken:** Sofort in Eiswasser. Die Haut platzt auf.
4. **Häuten:** Ziehe die Haut ab – sie löst sich leicht.
5. **Entkernen:** Viertle die Tomate, drücke die Kerne mit dem Daumen heraus. Das Fruchtfleisch ist jetzt bereit.

<ol className="list-decimal list-inside space-y-2 my-4">
  <li><strong>Warum blanchieren?</strong> Die Hitze löst die Haut, das Eiswasser stoppt den Garprozess – die Tomate bleibt fest.</li>
  <li><strong>Alternative:</strong> Für viele: Röste Tomaten im Ofen (Haut platzt auch).</li>
</ol>

---

### 4. Zwiebeln: Perfekte Würfel ohne Tränen

Zwiebeln sind Basis für fast alles. Diese Methode minimiert Tränen (kühle Zwiebeln schneiden weniger Reizstoffe frei).

#### Schritt-für-Schritt:
1. **Halbieren:** Durch die Wurzel schneiden, um die Struktur zu halten.
2. **Spitze abschneiden, Wurzel dranlassen:** Die Wurzel hält alles zusammen.
3. **Schälen:** Äußere Schichten abziehen.
4. **Vertikale Schnitte:** Parallel zur Wurzel, nicht durchschneiden.
5. **Horizontale Schnitte:** Optional für feine Würfel.
6. **Querschnitte:** Von vorne nach hinten – perfekte Würfel fallen raus.

<div className="bg-red-50 p-4 rounded-lg">
  <h3 className="font-bold mb-2">Warnung</h3>
  <p>Schneide Zwiebeln immer mit scharfem Messer – stumpfe Messer rutschen ab!</p>
</div>

---

### 5. Knoblauch: Von der Zehe zur Paste

Knoblauch ist ein Aroma-Booster. Frisch ist besser als gepresst (Presse macht bitter).

#### Schritt-für-Schritt:
1. **Zerdrücken:** Lege die Zehe hin, drücke mit der flachen Messerseite drauf – Schale löst sich.
2. **Schälen und hacken:** Schälen, in Scheiben schneiden, dann fein hacken.
3. **Paste machen:** Streue Salz drüber, zerdrücke mit der Messerseite zu Paste.

<ul className="list-disc list-inside space-y-2 my-4">
  <li><strong>Tipp:</strong> Für milden Knoblauch: Blanchiere die Zehen kurz.</li>
  <li><strong>Warum Salz?</strong> Es wirkt abrasiv und hilft beim Zerdrücken.</li>
</ul>

---

### Weitere Gemüse-Tipps
- **Karotten:** Schäle immer, schneide in gleichmäßige Stücke für gleichmäßiges Garen.
- **Zucchini:** Wasche, Enden abschneiden – schälen nicht nötig, Haut ist essbar.
- **Pilze:** Bürste trocken, nie waschen (saugen Wasser auf wie Schwämme).

<div className="bg-green-50 p-6 rounded-xl border-2 border-green-300 my-4">
  <h3 className="font-bold text-green-800 mb-4">🎯 Praktische Übungen</h3>
  <ol className="list-decimal list-inside space-y-2">
    <li>Verarbeite einen ganzen Brokkoli: Trenne Röschen, schäle Strunk, schneide alles. Dämpfe und vergleiche Geschmack.</li>
    <li>Häute 4 Tomaten, entkerne sie und mache eine einfache Sauce. Beobachte die glatte Textur.</li>
    <li>Schneide 2 Zwiebeln in Würfel: Eine mit Wurzel, eine ohne. Sieh den Unterschied in der Handhabung.</li>
    <li>Bereite eine Paprika vor und schneide sie in Julienne-Streifen für einen Salat.</li>
    <li>Mache Knoblauchpaste aus 3 Zehen und verwende sie in einem Dressing.</li>
  </ol>
</div>

### Zusammenfassung
Mit diesen Techniken wird Gemüse-Vorbereitung zum Kinderspiel. Übe regelmäßig – bald machst du es intuitiv. Denke an Mise en Place: Bereite alles vor, bevor du kochst!
    `,
    en: `
### Vegetable Preparation: From Root to Bloom 🥕🥦

Properly preparing vegetables is key to better dishes. Each type has its quirks – master them to minimize waste, maximize flavor, and save time. We'll go through common veggies step by step, with tips, tricks, and why it matters.

<div className="bg-amber-50 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">Why Preparation Matters</h3>
  <p>Even pieces cook evenly. The broccoli stem is edible and nutritious – throwing it away is waste. Properly prepped veggies retain color, crunch, and vitamins.</p>
</div>

---

### 1. Broccoli & Cauliflower: Zero Waste and Maximum Freshness

Many discard the stem – a mistake! It's the tenderest part when peeled. Broccoli and cauliflower are related; the technique is similar.

#### Step-by-Step:
1. **Separate Florets:** Hold broccoli upside down. Cut florets from bottom, right at the stem. Pull apart to avoid crumbs.
2. **Use the Stem:** Cut off woody end (about 1 inch). Peel outer layer with peeler (like a carrot). Slice or dice soft inside – tastes like kohlrabi!
3. **Washing:** Wash AFTER cutting to avoid leaching vitamins.

<ul className="list-disc list-inside space-y-2 my-4">
  <li><strong>Tip:</strong> Florets should be roughly same size for even cooking.</li>
  <li><strong>Why important?</strong> Stem has more nutrients than florets!</li>
</ul>

<div className="bg-green-50 p-4 rounded-lg">
  <h3 className="font-bold mb-2">Example: Broccoli in Practice</h3>
  <p>Steam florets 3-4 min (stay crisp), sauté stem in butter – great side for fish.</p>
</div>

---

### 2. Peppers: Clean and No Mess

Coring peppers can be messy if done wrong. This method is clean and efficient.

#### Step-by-Step:
1. **Cut Top and Bottom:** Slice off about 0.5 inch from top and bottom.
2. **Vertical Cut:** Slice pepper on one side.
3. **Roll Out:** Open like a book. Cut out core with flat cut – it stays in one piece.
4. **Slice or Dice:** Now you have clean flesh without seeds.

<table className="w-full border-collapse my-4">
  <thead>
    <tr className="bg-gray-100">
      <th className="border p-2">Color</th>
      <th className="border p-2">Flavor</th>
      <th className="border p-2">Best Use</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td className="border p-2">Red</td>
      <td className="border p-2">Sweet</td>
      <td className="border p-2">Salads, Grilling</td>
    </tr>
    <tr>
      <td className="border p-2">Yellow</td>
      <td className="border p-2">Mild-sweet</td>
      <td className="border p-2">Stuffings, Sauces</td>
    </tr>
    <tr>
      <td className="border p-2">Green</td>
      <td className="border p-2">Bitter-herbal</td>
      <td className="border p-2">Curries, Stews</td>
    </tr>
  </tbody>
</table>

<div className="bg-blue-50 p-4 rounded-lg">
  <h3 className="font-bold mb-2">Tip Against Bitterness</h3>
  <p>Remove white ribs inside – they're often bitter.</p>
</div>

---

### 3. Peeling and Seeding Tomatoes: For Perfect Sauces

For smooth sauces or fillings, skin and seeds interfere.

#### Step-by-Step (Concassée):
1. **Score:** Cut a cross on bottom end (not too deep).
2. **Blanch:** In boiling water for 10-30 seconds (depending on ripeness).
3. **Shock:** Immediately into ice water. Skin bursts.
4. **Peel:** Pull off skin – comes off easily.
5. **Seed:** Quarter tomato, squeeze out seeds with thumb. Flesh is now ready.

<ol className="list-decimal list-inside space-y-2 my-4">
  <li><strong>Why blanch?</strong> Heat loosens skin, ice water stops cooking – tomato stays firm.</li>
  <li><strong>Alternative:</strong> For many: Roast tomatoes in oven (skin bursts too).</li>
</ol>

---

### 4. Onions: Perfect Dice Without Tears

Onions are base for almost everything. This method minimizes tears (cold onions release fewer irritants).

#### Step-by-Step:
1. **Halve:** Cut through root to keep structure.
2. **Trim Tip, Leave Root:** Root holds it together.
3. **Peel:** Remove outer layers.
4. **Vertical Cuts:** Parallel to root, don't cut through.
5. **Horizontal Cuts:** Optional for fine dice.
6. **Cross Cuts:** Front to back – perfect cubes fall out.

<div className="bg-red-50 p-4 rounded-lg">
  <h3 className="font-bold mb-2">Warning</h3>
  <p>Always cut onions with sharp knife – dull ones slip!</p>
</div>

---

### 5. Garlic: From Clove to Paste

Garlic is flavor booster. Fresh is better than pressed (press makes bitter).

#### Step-by-Step:
1. **Crush:** Place clove down, press with flat knife side – skin loosens.
2. **Peel and Chop:** Peel, slice, then finely chop.
3. **Make Paste:** Sprinkle salt, crush to paste with knife side.

<ul className="list-disc list-inside space-y-2 my-4">
  <li><strong>Tip:</strong> For mild garlic: Blanch cloves briefly.</li>
  <li><strong>Why salt?</strong> Acts abrasive and helps crushing.</li>
</ul>

---

### Additional Veggie Tips
- **Carrots:** Always peel, cut even pieces for even cooking.
- **Zucchini:** Wash, trim ends – no need to peel, skin is edible.
- **Mushrooms:** Brush dry, never wash (absorb water like sponges).

<div className="bg-green-50 p-6 rounded-xl border-2 border-green-300 my-4">
  <h3 className="font-bold text-green-800 mb-4">🎯 Practice Exercises</h3>
  <ol className="list-decimal list-inside space-y-2">
    <li>Process a whole broccoli: Separate florets, peel stem, cut all. Steam and compare taste.</li>
    <li>Peel 4 tomatoes, seed them, make simple sauce. Note smooth texture.</li>
    <li>Dice 2 onions: One with root, one without. See handling difference.</li>
    <li>Prep a pepper and cut into Julienne strips for salad.</li>
    <li>Make garlic paste from 3 cloves and use in dressing.</li>
  </ol>
</div>

### Summary
With these techniques, veggie prep becomes child's play. Practice regularly – soon it'll be intuitive. Remember Mise en Place: Prep everything before cooking!
  `
  },

  task: {
    de: {
      title: 'Gemüse-Challenge',
      description: 'Wende die Techniken an.',
      checklist: [
        { text: 'Verarbeite einen kompletten Brokkoli inklusive Strunk.' },
        { text: 'Schneide eine Zwiebel in Würfel, ohne dass sie auseinanderfällt (Wurzel dranlassen!).' },
        { text: 'Schäle eine Knoblauchzehe mit der "Smash"-Methode.' },
        { text: 'Schneide eine Paprika mit der "Ausroll"-Methode.' }
      ]
    },
    en: {
      title: 'Veggie Challenge',
      description: 'Apply the techniques.',
      checklist: [
        { text: 'Process a whole broccoli including the stalk.' },
        { text: 'Dice an onion without it falling apart (leave the root on!).' },
        { text: 'Peel a garlic clove using the "Smash" method.' },
        { text: 'Cut a pepper using the "Roll-out" method.' }
      ]
    }
  },
  
  notes: {
    de: [
      { front: 'Warum lässt man beim Zwiebelschneiden die Wurzel dran?', back: 'Sie hält die Zwiebel zusammen, damit man saubere Würfel schneiden kann.' },
      { front: 'Ist der Brokkoli-Strunk essbar?', back: 'Ja! Geschält ist er der zarteste und süßeste Teil des Brokkolis.' },
      { front: 'Wie häutet man Tomaten?', back: 'Einritzen, kurz blanchieren (kochendes Wasser), abschrecken (Eiswasser).' }
    ],
    en: [
      { front: 'Why leave the root on when dicing onions?', back: 'It holds the onion together so you can cut clean cubes.' },
      { front: 'Is the broccoli stalk edible?', back: 'Yes! Peeled, it is the most tender and sweet part of the broccoli.' },
      { front: 'How to peel tomatoes?', back: 'Score, blanch briefly (boiling water), shock (ice water).' }
    ]
  }
};

