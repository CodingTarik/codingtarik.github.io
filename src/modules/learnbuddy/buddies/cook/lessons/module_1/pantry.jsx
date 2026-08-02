import React from 'react';

export const pantryLesson = {
  id: 'c1_m1_pantry',
  title: { 
    en: '1.6 The Pantry', 
    de: '1.6 Die Speisekammer (Vorratskammer)' 
  },
  description: { 
    en: 'A well-stocked pantry allows you to cook delicious meals without shopping. Here is your checklist.', 
    de: 'Eine gut gefüllte Speisekammer erlaubt dir, lecker zu kochen, ohne einkaufen zu müssen. Hier ist deine Checkliste.' 
  },
  category: 'basics',
  
  content: {
    de: `
### Deine Schatzkammer 🥫

Stell dir vor: Es regnet, du hast Hunger, und keine Lust einzukaufen. Wenn deine Speisekammer stimmt, ist das kein Problem. Du kannst jederzeit ein Curry, eine Pasta oder einen Salat zaubern.

Eine gute Vorratskammer ist wie ein Baukasten. Du brauchst Bausteine aus verschiedenen Kategorien.

---

### Die Basis-Ausstattung

Hier sind die Dinge, die man *immer* da haben sollte. Sie halten ewig und sind die Grundlage für fast alles.

<div className="space-y-6 my-6">

<div className="bg-amber-50 dark:bg-amber-900/20 p-4 rounded-lg border border-amber-200 dark:border-amber-700">
  <h4 className="font-bold text-amber-800 dark:text-amber-200 mb-2">🌾 Die Sättigungsbeilagen (Kohlenhydrate)</h4>
  <ul className="grid grid-cols-2 gap-2 text-sm text-amber-700 dark:text-amber-300">
    <li>• <strong>Nudeln:</strong> Spaghetti & eine kurze Form (Penne/Fusilli)</li>
    <li>• <strong>Reis:</strong> Basmati (universell) oder Jasmin</li>
    <li>• <strong>Kartoffeln:</strong> (Dunkel lagern!)</li>
    <li>• <strong>Mehl:</strong> Type 405 oder 550 (für Pizza/Brot)</li>
    <li>• <strong>Linsen:</strong> Rote Linsen (schnell gar, kein Einweichen)</li>
  </ul>
</div>

<div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border border-green-200 dark:border-green-700">
  <h4 className="font-bold text-green-800 dark:text-green-200 mb-2">🥫 Konserven & Gläser (Die Retter)</h4>
  <p className="text-sm mb-2 text-green-700 dark:text-green-300">Lange haltbar, sofort einsatzbereit.</p>
  <ul className="grid grid-cols-2 gap-2 text-sm text-green-700 dark:text-green-300">
    <li>• <strong>Gehackte Tomaten:</strong> (Beste Qualität kaufen! Mutti etc.)</li>
    <li>• <strong>Kichererbsen/Bohnen:</strong> Protein für Currys/Salate</li>
    <li>• <strong>Thunfisch:</strong> Für schnelle Pasta oder Salate</li>
    <li>• <strong>Kokosmilch:</strong> Für asiatische Gerichte</li>
    <li>• <strong>Tomatenmark:</strong> Konzentrierter Geschmack ("Umami")</li>
  </ul>
</div>

<div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg border border-yellow-200 dark:border-yellow-700">
  <h4 className="font-bold text-yellow-800 dark:text-yellow-200 mb-2">🧂 Würze & Geschmack</h4>
  <div className="grid md:grid-cols-2 gap-4 text-sm text-yellow-700 dark:text-yellow-300">
    <div>
      <strong>Öle & Fette:</strong>
      <ul className="list-disc list-inside ml-2">
        <li>Olivenöl (Salat, mittlere Hitze)</li>
        <li>Rapsöl/Bratöl (Hohe Hitze, neutral)</li>
      </ul>
    </div>
    <div>
      <strong>Säure (Wichtig!):</strong>
      <ul className="list-disc list-inside ml-2">
        <li>Weißweinessig oder Apfelessig</li>
        <li>Balsamico (Dunkel)</li>
        <li>Zitronen (Frisch hält lange im Kühlschrank)</li>
      </ul>
    </div>
    <div>
      <strong>Die Basics:</strong>
      <ul className="list-disc list-inside ml-2">
        <li>Salz (Jodiert + Meersalz)</li>
        <li>Pfeffer (Ganze Körner in der Mühle!)</li>
        <li>Zucker / Honig</li>
        <li>Gemüsebrühe (Pulver oder Glas)</li>
      </ul>
    </div>
    <div>
      <strong>Aromaten (Frisch):</strong>
      <ul className="list-disc list-inside ml-2">
        <li>Zwiebeln (Dunkel lagern)</li>
        <li>Knoblauch</li>
      </ul>
    </div>
  </div>
</div>

</div>

### Das Prinzip der Balance

Warum brauchst du das alles? Weil Kochen Balance ist.
Wenn dein Essen langweilig schmeckt, fehlt meistens eines dieser Elemente:

1. **Salz:** Hebt den Geschmack.
2. **Säure:** (Essig/Zitrone) Macht das Essen "frisch" und lebendig.
3. **Fett:** Transportiert den Geschmack.
4. **Schärfe/Umami:** Gibt Tiefe.

Mit einer Dose Tomaten, Zwiebeln, Knoblauch, Olivenöl und Nudeln hast du in 15 Minuten ein Festessen. Das ist die Macht der Speisekammer.

    `,
    en: `
### Your Treasure Chamber 🥫

Imagine: It's raining, you\'re hungry, and you don\'t want to go shopping. If your pantry is right, that\'s no problem. You can conjure up a curry, pasta, or salad anytime.

A good pantry is like a construction kit. You need building blocks from different categories.

---

### The Basic Setup

Here are the things you should *always* have. They last forever and are the foundation for almost everything.

<div className="space-y-6 my-6">

<div className="bg-amber-50 dark:bg-amber-900/20 p-4 rounded-lg border border-amber-200 dark:border-amber-700">
  <h4 className="font-bold text-amber-800 dark:text-amber-200 mb-2">🌾 Staples (Carbs)</h4>
  <ul className="grid grid-cols-2 gap-2 text-sm text-amber-700 dark:text-amber-300">
    <li>• <strong>Pasta:</strong> Spaghetti & a short shape (Penne/Fusilli)</li>
    <li>• <strong>Rice:</strong> Basmati (universal) or Jasmine</li>
    <li>• <strong>Potatoes:</strong> (Store in the dark!)</li>
    <li>• <strong>Flour:</strong> All-purpose (for pizza/bread/thickening)</li>
    <li>• <strong>Lentils:</strong> Red lentils (cook fast, no soaking)</li>
  </ul>
</div>

<div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border border-green-200 dark:border-green-700">
  <h4 className="font-bold text-green-800 dark:text-green-200 mb-2">🥫 Canned & Jars (The Saviors)</h4>
  <p className="text-sm mb-2 text-green-700 dark:text-green-300">Long shelf life, ready immediately.</p>
  <ul className="grid grid-cols-2 gap-2 text-sm text-green-700 dark:text-green-300">
    <li>• <strong>Canned Tomatoes:</strong> (Buy best quality! Mutti etc.)</li>
    <li>• <strong>Chickpeas/Beans:</strong> Protein for curries/salads</li>
    <li>• <strong>Tuna:</strong> For quick pasta or salads</li>
    <li>• <strong>Coconut Milk:</strong> For Asian dishes</li>
    <li>• <strong>Tomato Paste:</strong> Concentrated flavor ("Umami")</li>
  </ul>
</div>

<div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg border border-yellow-200 dark:border-yellow-700">
  <h4 className="font-bold text-yellow-800 dark:text-yellow-200 mb-2">🧂 Seasoning & Flavor</h4>
  <div className="grid md:grid-cols-2 gap-4 text-sm text-yellow-700 dark:text-yellow-300">
    <div>
      <strong>Oils & Fats:</strong>
      <ul className="list-disc list-inside ml-2">
        <li>Olive Oil (Salads, medium heat)</li>
        <li>Canola/Vegetable Oil (High heat, neutral)</li>
      </ul>
    </div>
    <div>
      <strong>Acid (Important!):</strong>
      <ul className="list-disc list-inside ml-2">
        <li>White Wine Vinegar or Apple Cider Vinegar</li>
        <li>Balsamic Vinegar (Dark)</li>
        <li>Lemons (Fresh ones last long in fridge)</li>
      </ul>
    </div>
    <div>
      <strong>The Basics:</strong>
      <ul className="list-disc list-inside ml-2">
        <li>Salt (Iodized + Sea Salt)</li>
        <li>Pepper (Whole grains in a mill!)</li>
        <li>Sugar / Honey</li>
        <li>Vegetable Broth (Powder or Jar)</li>
      </ul>
    </div>
    <div>
      <strong>Aromatics (Fresh):</strong>
      <ul className="list-disc list-inside ml-2">
        <li>Onions (Store in dark)</li>
        <li>Garlic</li>
      </ul>
    </div>
  </div>
</div>

</div>

### The Principle of Balance

Why do you need all this? Because cooking is balance.
If your food tastes boring, one of these elements is usually missing:

1. **Salt:** Lifts the flavor.
2. **Acid:** (Vinegar/Lemon) Makes food "fresh" and alive.
3. **Fat:** Transports flavor.
4. **Spice/Umami:** Gives depth.

With a can of tomatoes, onions, garlic, olive oil, and pasta, you have a feast in 15 minutes. That is the power of the pantry.
    `
  },

  task: {
    de: {
      title: 'Vorrats-Check',
      description: 'Gehe deine Schränke durch. Was fehlt?',
      checklist: [
        { text: 'Habe ich gutes Olivenöl UND neutrales Bratöl?' },
        { text: 'Habe ich Essig?' },
        { text: 'Habe ich Dosentomaten und Nudeln für den Notfall?' },
        { text: 'Kauf alles ein, was von der "Basis-Liste" fehlt.' }
      ]
    },
    en: {
      title: 'Pantry Check',
      description: 'Go through your cabinets. What\'s missing?',
      checklist: [
        { text: 'Do I have good olive oil AND neutral cooking oil?' },
        { text: 'Do I have vinegar?' },
        { text: 'Do I have canned tomatoes and pasta for emergencies?' },
        { text: 'Buy everything missing from the "Basic List".' }
      ]
    }
  },
  
  notes: {
    de: [
      { front: 'Was sind die zwei wichtigsten Öle?', back: 'Olivenöl (Geschmack, kalte Küche) und Raps-/Sonnenblumenöl (Neutral, zum Braten).' },
      { front: 'Warum braucht man Säure (Essig/Zitrone) beim Kochen?', back: 'Säure hebt den Geschmack, macht fettes Essen leichter und bringt Frische.' },
      { front: 'Welche Tomatenkonserven sollte man kaufen?', back: 'Ganze Tomaten oder stückige Tomaten von guter Qualität. Sie sind die Basis vieler Saucen.' }
    ],
    en: [
      { front: 'What are the two most important oils?', back: 'Olive oil (flavor, cold dishes) and Canola/Vegetable oil (Neutral, for frying).' },
      { front: 'Why do you need acid (vinegar/lemon) when cooking?', back: 'Acid lifts flavor, cuts through richness/fat, and adds freshness.' },
      { front: 'Which canned tomatoes should you buy?', back: 'Whole peeled or crushed tomatoes of good quality. They are the base of many sauces.' }
    ]
  }
};


