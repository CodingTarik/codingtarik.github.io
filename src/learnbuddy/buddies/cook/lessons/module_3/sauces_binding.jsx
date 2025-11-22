import React from 'react';

export const saucesBindingLesson = {
  id: 'c3_m3_sauces',
  title: { 
    en: '3.4 Sauces & Binding', 
    de: '3.4 Saucen & Binden' 
  },
  description: { 
    en: 'A sauce makes the dish. Learn the 5 Mother Sauces and how to thicken any liquid.', 
    de: 'Eine Sauce macht das Gericht. Lerne die 5 Mutter-Saucen und wie man jede Flüssigkeit andickt.' 
  },
  category: 'preparations',
  
  content: {
    de: `
### Die Seele des Gerichts 🥄

Ein Stück Fleisch ist nur ein Stück Fleisch. Mit der richtigen Sauce wird es ein Gedicht.

---

### 1. Binden (Thickening)

Wie mache ich aus Wasser eine Sauce?

*   **Mehlschwitze (Roux):** Der Klassiker. Butter schmelzen, gleich viel Mehl dazu, kurz anschwitzen.
    *   *Hell:* Nur kurz (für Béchamel).
    *   *Dunkel:* Lange rösten bis es braun riecht (für Bratensauce/Gumbo).
*   **Stärke (Slurry):** Speisestärke in KALTEN Wasser anrühren (sonst Klümpchen!), dann in die kochende Flüssigkeit rühren. Macht die Sauce glänzend (typisch asiatisch).
*   **Reduktion:** Einfach lange köcheln lassen, bis Wasser verdampft. Konzentriert den Geschmack extrem.
*   **Montieren:** Kalte Butterstückchen in die nicht mehr kochende Sauce rühren. Bindet leicht und gibt Glanz.

---

### 2. Die 5 Mutter-Saucen (Auguste Escoffier)

Fast jede westliche Sauce stammt von diesen 5 ab:

1.  **Béchamel:** Milch + Helle Mehlschwitze. (Basis für Lasagne, Mac & Cheese).
2.  **Velouté:** Heller Fond + Helle Mehlschwitze. (Basis für Pilzrahmsauce).
3.  **Espagnole (Braune Sauce):** Dunkler Fond + Dunkle Mehlschwitze + Tomatenmark. (Basis für Bratensoßen).
4.  **Hollandaise:** Eigelb + Butter + Säure (Emulsion). (Für Spargel, Eggs Benedict).
5.  **Tomate:** Tomaten (Püree) eingekocht. (Pasta, Pizza).

---

### 3. Emulsionen (Fett und Wasser vereinen)

Öl und Wasser hassen sich. Um sie zu mischen (Emulsion), brauchst du einen Vermittler (Emulgator), meistens **Senf** oder **Eigelb**.

*   **Vinaigrette:** Essig (Wasser) + Öl + Senf. Schütteln! Hält kurz.
*   **Mayonnaise:** Eigelb + Öl (langsam eingeträufelt). Hält lange.

---

### Zusammenfassung

Lerne Béchamel. Es ist einfach und du wirst nie wieder Fertigsauce für Lasagne kaufen.
    `,
    en: `
### The Soul of the Dish 🥄

A piece of meat is just a piece of meat. With the right sauce, it becomes poetry.

---

### 1. Binding (Thickening)

How do I turn water into sauce?

*   **Roux (Mehlschwitze):** The classic. Melt butter, add equal amount flour, cook briefly.
    *   *White:* Short cook (for Béchamel).
    *   *Dark:* Roast long until it smells nutty (for Gravy/Gumbo).
*   **Cornstarch (Slurry):** Mix starch in COLD water (avoids lumps!), then stir into boiling liquid. Makes sauce glossy (typical Asian).
*   **Reduction:** Just simmer until water evaporates. Concentrates flavor extremely.
*   **Mounting (Montieren):** Stir cold butter pieces into non-boiling sauce. Binds lightly and adds shine.

---

### 2. The 5 Mother Sauces (Auguste Escoffier)

Almost every western sauce descends from these 5:

1.  **Béchamel:** Milk + White Roux. (Base for Lasagna, Mac & Cheese).
2.  **Velouté:** Light Stock + White Roux. (Base for Mushroom Cream Sauce).
3.  **Espagnole (Brown Sauce):** Dark Stock + Dark Roux + Tomato Paste. (Base for Gravies).
4.  **Hollandaise:** Yolk + Butter + Acid (Emulsion). (For Asparagus, Eggs Benedict).
5.  **Tomato:** Tomatoes (puree) cooked down. (Pasta, Pizza).

---

### 3. Emulsions (Uniting Fat and Water)

Oil and water hate each other. To mix them (Emulsion), you need a mediator (Emulsifier), usually **Mustard** or **Yolk**.

*   **Vinaigrette:** Vinegar (Water) + Oil + Mustard. Shake! Lasts briefly.
*   **Mayonnaise:** Yolk + Oil (drizzled slowly). Lasts long.

---

### Summary

Learn Béchamel. It's easy and you will never buy jarred sauce for lasagna again.
    `
  },

  task: {
    de: {
      title: 'Béchamel-Training',
      description: 'Mache eine Béchamel ohne Klümpchen.',
      checklist: [
        { text: 'Schmelze 30g Butter im Topf.' },
        { text: 'Rühre 30g Mehl ein und lass es kurz blubbern (nicht braun werden).' },
        { text: 'Gieße langsam 500ml Milch dazu, während du stetig mit dem Schneebesen rührst.' },
        { text: 'Lass es aufkochen (Mehl bindet erst bei Hitze).' },
        { text: 'Würze mit Salz, Pfeffer und Muskatnuss.' }
      ]
    },
    en: {
      title: 'Béchamel Training',
      description: 'Make a lump-free Béchamel.',
      checklist: [
        { text: 'Melt 30g butter in pot.' },
        { text: 'Stir in 30g flour and let bubble briefly (don\'t brown).' },
        { text: 'Pour in 500ml milk slowly while whisking constantly.' },
        { text: 'Bring to boil (flour thickens only at heat).' },
        { text: 'Season with salt, pepper, nutmeg.' }
      ]
    }
  },
  
  notes: {
    de: [
      { front: 'Was ist eine Mehlschwitze (Roux)?', back: 'Mischung aus Fett (Butter) und Mehl, erhitzt. Dient zum Binden von Saucen.' },
      { front: 'Warum rührt man Stärke in kaltem Wasser an?', back: 'In heißem Wasser würde sie sofort verklumpen.' },
      { front: 'Was sind die 5 Mutter-Saucen?', back: 'Béchamel, Velouté, Espagnole, Hollandaise, Tomate.' }
    ],
    en: [
      { front: 'What is a Roux?', back: 'Mixture of fat (butter) and flour, cooked. Used to thicken sauces.' },
      { front: 'Why mix cornstarch in cold water?', back: 'In hot water it would lump immediately.' },
      { front: 'What are the 5 Mother Sauces?', back: 'Béchamel, Velouté, Espagnole, Hollandaise, Tomato.' }
    ]
  }
};

