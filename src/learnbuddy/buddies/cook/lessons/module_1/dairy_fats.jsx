import React from 'react';

export const dairyFatsLesson = {
  id: 'c1_m1_dairy',
  title: { 
    en: '1.7 Dairy & Fats', 
    de: '1.7 Milchprodukte & Fette' 
  },
  description: { 
    en: 'Cream, Crème fraîche, Sour Cream? Learn the difference and how to use them correctly.', 
    de: 'Sahne, Crème fraîche, Schmand? Lerne den Unterschied und wie man sie richtig einsetzt.' 
  },
  category: 'basics',
  
  content: {
    de: `
### Die weiße Vielfalt 🥛

Im Supermarkt stehst du vor einem riesigen Regal: Sahne, Schmand, Saure Sahne, Crème fraîche... Was ist der Unterschied? Und kann ich das eine durch das andere ersetzen?

Die Antwort liegt fast immer im **Fettgehalt** und der **Säure**.

---

### 1. Sahne & Co. (Die Hierarchie der Fette)

<div className="space-y-4 my-6">

<div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border-l-4 border-blue-500">
  <h4 className="font-bold text-blue-800 dark:text-blue-300 flex justify-between">
    <span>Schlagsahne (Süße Sahne)</span>
    <span className="bg-white dark:bg-blue-900 px-2 rounded text-sm">Min. 30% Fett</span>
  </h4>
  <p className="text-sm text-blue-700 dark:text-blue-300 mt-2">
    Der Klassiker. Flüssig, ungesäuert.
    <br/><strong>Funktion:</strong>
    <ul className="list-disc list-inside pl-2">
      <li>Lässt sich aufschlagen (Volumen für Desserts).</li>
      <li>Bindet Saucen beim Kochen (gerinnt nicht bei Hitze).</li>
      <li>Geschmacksträger.</li>
    </ul>
  </p>
</div>

<div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg border-l-4 border-purple-500">
  <h4 className="font-bold text-purple-800 dark:text-purple-300 flex justify-between">
    <span>Crème fraîche</span>
    <span className="bg-white dark:bg-purple-900 px-2 rounded text-sm">Min. 30% Fett</span>
  </h4>
  <p className="text-sm text-purple-700 dark:text-purple-300 mt-2">
    Die "Königin". Gesäuert (dickflüssig), aber sehr fettreich.
    <br/><strong>Funktion:</strong>
    <ul className="list-disc list-inside pl-2">
      <li><strong>Kochfest!</strong> Flockt nicht aus in heißen Saucen.</li>
      <li>Luxuriös, cremig, leichte Säure.</li>
      <li>Perfekt für Saucen-Finish oder Dips.</li>
    </ul>
  </p>
</div>

<div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border-l-4 border-green-500">
  <h4 className="font-bold text-green-800 dark:text-green-300 flex justify-between">
    <span>Schmand</span>
    <span className="bg-white dark:bg-green-900 px-2 rounded text-sm">20-29% Fett</span>
  </h4>
  <p className="text-sm text-green-700 dark:text-green-300 mt-2">
    Der deutsche Klassiker. Liegt zwischen Sahne und Saure Sahne.
    <br/><strong>Funktion:</strong>
    <ul className="list-disc list-inside pl-2">
      <li>Meistens kochfest (aber vorsichtig sein).</li>
      <li>Fester als Sahne, milder als Crème fraîche.</li>
      <li>Super für Schmandkuchen oder auf Suppen.</li>
    </ul>
  </p>
</div>

<div className="p-4 bg-red-50 dark:bg-red-900/20 rounded-lg border-l-4 border-red-500">
  <h4 className="font-bold text-red-800 dark:text-red-300 flex justify-between">
    <span>Saure Sahne (Sauerrahm)</span>
    <span className="bg-white dark:bg-red-900 px-2 rounded text-sm">10% Fett</span>
  </h4>
  <p className="text-sm text-red-700 dark:text-red-300 mt-2">
    Die Leichte.
    <br/><strong>Funktion:</strong>
    <ul className="list-disc list-inside pl-2">
      <li><strong>NICHT kochfest!</strong> Flockt aus, wenn sie kocht (grieselig).</li>
      <li>Nur für die <strong>Kalte Küche</strong> (Dips, Salatdressing) oder erst ganz zum Schluss in die nicht mehr kochende Suppe geben.</li>
    </ul>
  </p>
</div>

</div>

---

### 2. Butter & Fette

<ul className="space-y-4 my-6">
  <li className="bg-white dark:bg-stone-800 p-4 rounded-lg shadow-sm">
    <strong className="text-lg text-yellow-600 block mb-1">🧈 Butter</strong>
    <span className="text-stone-600 dark:text-stone-300 text-sm">
      Der Geschmackskönig. Besteht aus Fett, Wasser und Milcheiweiß.
      <br/>⚠️ <strong>Achtung:</strong> Verbrennt schnell (das Milcheiweiß wird schwarz). Nicht für sehr hohe Hitze (Steaks) geeignet, außer man mischt sie mit Öl oder gibt sie erst am Ende dazu.
    </span>
  </li>
  <li className="bg-white dark:bg-stone-800 p-4 rounded-lg shadow-sm">
    <strong className="text-lg text-yellow-600 block mb-1">🍯 Butterschmalz / Ghee</strong>
    <span className="text-stone-600 dark:text-stone-300 text-sm">
      Geklärte Butter (Wasser & Eiweiß entfernt). Reines Fett.
      <br/>✅ <strong>Vorteil:</strong> Schmeckt wie Butter, ist aber extrem hocherhitzbar! Perfekt für Wiener Schnitzel.
    </span>
  </li>
</ul>

---

### 3. Joghurt & Quark

* **Joghurt:** (3.5% oder 10% "Griechisch"). Die Säure im Joghurt macht Fleisch zart (toll für Marinaden!). Griechischer Joghurt hat mehr Fett und weniger Wasser – er ist cremiger.
* **Quark:** Viel Eiweiß. Zum Backen (Öl-Quark-Teig) oder für Dips. Magerquark ist trocken, Sahnequark (40%) ist cremig.

---

### Zusammenfassung

* **Kochen/Hitze:** Nimm Sahne, Crème fraîche oder Schmand.
* **Kalt/Dips:** Nimm Saure Sahne, Joghurt oder Quark.
* **Braten:** Nimm Öl oder Butterschmalz (keine normale Butter bei starker Hitze).

    `,
    en: `
### The White Variety 🥛

You stand in front of a huge shelf in the supermarket: Cream, Sour Cream, Crème fraîche, Heavy Cream... What's the difference? And can I substitute one for the other?

The answer almost always lies in **fat content** and **acidity**.

---

### 1. Cream & Co. (The Hierarchy of Fats)

<div className="space-y-4 my-6">

<div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border-l-4 border-blue-500">
  <h4 className="font-bold text-blue-800 dark:text-blue-300 flex justify-between">
    <span>Heavy Cream / Whipping Cream</span>
    <span className="bg-white dark:bg-blue-900 px-2 rounded text-sm">Min. 30% Fat</span>
  </h4>
  <p className="text-sm text-blue-700 dark:text-blue-300 mt-2">
    The classic (Schlagsahne). Liquid, not acidified.
    <br/><strong>Function:</strong>
    <ul className="list-disc list-inside pl-2">
      <li>Can be whipped (volume for desserts).</li>
      <li>Binds sauces when cooked (doesn't curdle with heat).</li>
      <li>Carrier of flavor.</li>
    </ul>
  </p>
</div>

<div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg border-l-4 border-purple-500">
  <h4 className="font-bold text-purple-800 dark:text-purple-300 flex justify-between">
    <span>Crème fraîche</span>
    <span className="bg-white dark:bg-purple-900 px-2 rounded text-sm">Min. 30% Fat</span>
  </h4>
  <p className="text-sm text-purple-700 dark:text-purple-300 mt-2">
    The "Queen". Acidified (thick), but very high in fat.
    <br/><strong>Function:</strong>
    <ul className="list-disc list-inside pl-2">
      <li><strong>Heat stable!</strong> Doesn't curdle in hot sauces.</li>
      <li>Luxurious, creamy, slight acidity.</li>
      <li>Perfect for finishing sauces or dips.</li>
    </ul>
  </p>
</div>

<div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border-l-4 border-green-500">
  <h4 className="font-bold text-green-800 dark:text-green-300 flex justify-between">
    <span>Schmand (Sour Cream 20%)</span>
    <span className="bg-white dark:bg-green-900 px-2 rounded text-sm">20-29% Fat</span>
  </h4>
  <p className="text-sm text-green-700 dark:text-green-300 mt-2">
    Between cream and sour cream.
    <br/><strong>Function:</strong>
    <ul className="list-disc list-inside pl-2">
      <li>Mostly heat stable (but be careful).</li>
      <li>Firmer than cream, milder than Crème fraîche.</li>
      <li>Great for baking or topping soups.</li>
    </ul>
  </p>
</div>

<div className="p-4 bg-red-50 dark:bg-red-900/20 rounded-lg border-l-4 border-red-500">
  <h4 className="font-bold text-red-800 dark:text-red-300 flex justify-between">
    <span>Sour Cream</span>
    <span className="bg-white dark:bg-red-900 px-2 rounded text-sm">10% Fat</span>
  </h4>
  <p className="text-sm text-red-700 dark:text-red-300 mt-2">
    The light one.
    <br/><strong>Function:</strong>
    <ul className="list-disc list-inside pl-2">
      <li><strong>NOT heat stable!</strong> Curdles if boiled (grainy).</li>
      <li>Only for <strong>Cold Kitchen</strong> (dips, dressings) or add at the very end to non-boiling soups.</li>
    </ul>
  </p>
</div>

</div>

---

### 2. Butter & Fats

<ul className="space-y-4 my-6">
  <li className="bg-white dark:bg-stone-800 p-4 rounded-lg shadow-sm">
    <strong className="text-lg text-yellow-600 block mb-1">🧈 Butter</strong>
    <span className="text-stone-600 dark:text-stone-300 text-sm">
      The flavor king. Consists of fat, water, and milk solids.
      <br/>⚠️ <strong>Warning:</strong> Burns quickly (milk solids turn black). Not suitable for very high heat (steaks) unless mixed with oil or added at the end.
    </span>
  </li>
  <li className="bg-white dark:bg-stone-800 p-4 rounded-lg shadow-sm">
    <strong className="text-lg text-yellow-600 block mb-1">🍯 Clarified Butter / Ghee</strong>
    <span className="text-stone-600 dark:text-stone-300 text-sm">
      Butter with water & solids removed. Pure fat.
      <br/>✅ <strong>Advantage:</strong> Tastes like butter, but can take extremely high heat! Perfect for Schnitzel.
    </span>
  </li>
</ul>

---

### 3. Yogurt & Quark

* **Yogurt:** (3.5% or 10% "Greek"). The acid in yogurt tenderizes meat (great for marinades!). Greek yogurt has more fat and less water – it's creamier.
* **Quark:** High protein. For baking or dips. Low-fat is dry, 40% fat is creamy.

---

### Summary

* **Cooking/Heat:** Use Heavy Cream, Crème fraîche, or Schmand.
* **Cold/Dips:** Use Sour Cream, Yogurt, or Quark.
* **Frying:** Use Oil or Clarified Butter (no regular butter at high heat).
    `
  },

  task: {
    de: {
      title: 'Sahne-Experiment',
      description: 'Verstehe die Physik von Sahne.',
      checklist: [
        { text: 'Kaufe einen Becher Schlagsahne.' },
        { text: 'Schlage ihn mit dem Handmixer steif.' },
        { text: 'Beobachte die Phasen: Flüssig -> Cremig -> Steif.' },
        { text: 'Schlage weiter! (Wenn du zu lange schlägst, trennt sich das Fett vom Wasser -> Du hast Butter gemacht!)' }
      ]
    },
    en: {
      title: 'Cream Experiment',
      description: 'Understand the physics of cream.',
      checklist: [
        { text: 'Buy a cup of heavy whipping cream.' },
        { text: 'Whip it with a hand mixer until stiff.' },
        { text: 'Observe the phases: Liquid -> Creamy -> Stiff.' },
        { text: 'Keep whipping! (If you whip too long, the fat separates from the water -> You made butter!)' }
      ]
    }
  },

  notes: {
    de: [
      { front: 'Welche Sahne ist kochfest?', back: 'Schlagsahne, Crème fraîche und (meistens) Schmand. Sie haben genug Fett.' },
      { front: 'Warum darf Saure Sahne nicht kochen?', back: 'Sie hat zu wenig Fett (10%) und flockt bei Hitze aus (gerinnt).' },
      { front: 'Was ist der Unterschied zwischen Butter und Butterschmalz?', back: 'Butter enthält Wasser und Eiweiß (verbrennt schnell). Butterschmalz ist reines Fett (hoch erhitzbar).' }
    ],
    en: [
      { front: 'Which cream is heat stable?', back: 'Heavy cream, Crème fraîche, and (mostly) Schmand. They have enough fat.' },
      { front: 'Why shouldn\'t sour cream boil?', back: 'It has too little fat (10%) and curdles with heat.' },
      { front: 'Difference between Butter and Ghee/Clarified Butter?', back: 'Butter contains water and milk solids (burns fast). Ghee is pure fat (high heat stable).' }
    ]
  }
};

