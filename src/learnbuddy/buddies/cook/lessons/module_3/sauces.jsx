import React from 'react';

export const saucesLesson = {
  id: 'c3_m3_sauces',
  title: { 
    en: '3.4 Sauces & Binding', 
    de: '3.4 Saucen & Binden' 
  },
  description: { 
    en: 'A sauce makes the dish. Learn the mother sauces and how to thicken any liquid.', 
    de: 'Eine Sauce macht das Gericht. Lerne die Mutter-Saucen und wie man jede Flüssigkeit bindet.' 
  },
  category: 'preparations',
  
  content: {
    de: `
### Die Königsdisziplin 👑

In der französischen Küche ist der "Saucier" der wichtigste Posten. Warum? Weil die Sauce alles verbindet.
Du musst keine 100 Saucen lernen. Du musst nur wissen, wie man **bindet** (andickt).

---

### 1. Die Mehlschwitze (Roux)

Die Basis für Béchamel (Lasagne) und viele Cremesuppen.

1.  **Fett:** Schmilz Butter im Topf.
2.  **Mehl:** Gib die gleiche Menge Mehl dazu.
3.  **Anschwitzen:** Rühre und lass es kurz blubbern (damit der Mehlgeschmack verschwindet).
    *   *Helle Roux:* Nur kurz (für weiße Saucen).
    *   *Dunkle Roux:* Lange bräunen (für braune Saucen, nussiger Geschmack).
4.  **Ablöschen:** Kalte Flüssigkeit (Milch oder Brühe) in die heiße Roux gießen. (Oder heiße Flüssigkeit in kalte Roux).
5.  **Kochen:** Aufkochen lassen! Die Stärke bindet erst beim Kochen.

---

### 2. Stärke (Slurry)

Für asiatische Saucen oder wenn man nachträglich binden will.

*   **Regel:** Rühre Stärke (Maisstärke/Mondamin) IMMER in **kaltem** Wasser an, bevor du sie in die heiße Sauce gibst.
*   Gibst du Pulver direkt in heiße Sauce -> **Klumpen-Alarm!**
*   Sauce aufkochen, Stärke-Mix langsam einrühren, bis die gewünschte Dicke erreicht ist.

---

### 3. Reduktion

Die reinste Form.

*   Lass Sahne oder Fond einfach offen köcheln. Das Wasser verdampft, der Geschmack konzentriert sich, die Konsistenz wird dicker (sirupartig).
*   Perfekt für Sahnesaucen oder Balsamico-Glace.

---

### 4. Montieren (Mit Butter binden)

Der Restaurant-Trick für Glanz.

*   Wenn die Sauce fertig ist und NICHT mehr kocht (wichtig!):
*   Rühre kalte Butterstückchen ein.
*   Die Sauce wird sämig, bindet leicht ab und bekommt einen wunderschönen Glanz.

---

### 5. Die Emulsion (Das Fett-Wasser-Wunder)

Fett und Wasser hassen sich. Eine Emulsion zwingt sie zusammen.
*   **Kalt:** Vinaigrette (Senf hilft als Emulgator), Mayonnaise (Eigelb hilft).
*   **Warm:** Hollandaise (Butter in Eigelb).

---

### Zusammenfassung

Eine Sauce sollte den Löffel überziehen (nappieren), nicht wie Wasser runterlaufen.
*   **Weiß/Cremig:** Mehlschwitze.
*   **Klar/Glänzend:** Stärke.
*   **Intensiv:** Reduktion.
*   **Finish:** Kalte Butter.
    `,
    en: `
### The Supreme Discipline 👑

In French cuisine, the "Saucier" is the most important station. Why? Because the sauce connects everything.
You don't need to learn 100 sauces. You just need to know how to **bind** (thicken).

---

### 1. The Roux

The base for Béchamel (Lasagna) and many cream soups.

1.  **Fat:** Melt butter in pot.
2.  **Flour:** Add equal amount of flour.
3.  **Sweat:** Stir and let bubble briefly (to remove raw flour taste).
    *   *White Roux:* Brief (for white sauces).
    *   *Dark Roux:* Brown long (for brown sauces, nutty flavor).
4.  **Deglaze:** Pour cold liquid (milk or stock) into hot Roux. (Or hot liquid into cold Roux).
5.  **Boil:** Bring to boil! Starch only thickens when boiling.

---

### 2. Cornstarch (Slurry)

For Asian sauces or fixing consistency later.

*   **Rule:** ALWAYS mix starch in **cold** water before adding to hot sauce.
*   Powder directly into hot sauce -> **Lump Alarm!**
*   Boil sauce, stir in slurry slowly until desired thickness.

---

### 3. Reduction

The purest form.

*   Let cream or stock simmer openly. Water evaporates, flavor concentrates, consistency gets thicker (syrupy).
*   Perfect for cream sauces or Balsamic glaze.

---

### 4. Mounting (Monté au Beurre)

The restaurant trick for shine.

*   When sauce is done and NO LONGER boiling (important!):
*   Stir in cold butter pieces.
*   Sauce becomes velvety, thickens slightly, and gets beautiful shine.

---

### 5. Emulsion (The Fat-Water Miracle)

Fat and water hate each other. An emulsion forces them together.
*   **Cold:** Vinaigrette (Mustard helps as emulsifier), Mayonnaise (Yolk helps).
*   **Warm:** Hollandaise (Butter in Yolk).

---

### Summary

A sauce should coat the spoon (nappé), not run off like water.
*   **White/Creamy:** Roux.
*   **Clear/Shiny:** Starch.
*   **Intense:** Reduction.
*   **Finish:** Cold Butter.
    `
  },

  task: {
    de: {
      title: 'Béchamel-Training',
      description: 'Mache eine klassische Béchamel-Sauce.',
      checklist: [
        { text: 'Schmilz 1 EL Butter.' },
        { text: 'Rühre 1 EL Mehl ein und lass es kurz blubbern (nicht braun werden!).' },
        { text: 'Gieße langsam 200ml kalte Milch dazu, dabei ständig mit dem Schneebesen rühren.' },
        { text: 'Lass es aufkochen (es dickt ein).' },
        { text: 'Würze mit Salz, Pfeffer und Muskatnuss.' }
      ]
    },
    en: {
      title: 'Béchamel Training',
      description: 'Make a classic Béchamel sauce.',
      checklist: [
        { text: 'Melt 1 tbsp butter.' },
        { text: 'Stir in 1 tbsp flour and let bubble briefly (don\'t brown!).' },
        { text: 'Slowly pour in 200ml cold milk, whisking constantly.' },
        { text: 'Bring to a boil (it thickens).' },
        { text: 'Season with salt, pepper, and nutmeg.' }
      ]
    }
  },
  
  notes: {
    de: [
      { front: 'Was ist eine Mehlschwitze (Roux)?', back: 'Mischung aus Fett und Mehl (1:1), die erhitzt wird. Bindet Saucen (z.B. Béchamel).' },
      { front: 'Wie verwendet man Speisestärke richtig?', back: 'Immer in kaltem Wasser anrühren, dann in die kochende Sauce geben.' },
      { front: 'Was bedeutet "Montieren"?', back: 'Kalte Butter in eine heiße (nicht mehr kochende) Sauce rühren für Glanz und Bindung.' }
    ],
    en: [
      { front: 'What is a Roux?', back: 'Mixture of fat and flour (1:1) that is heated. Thickens sauces (e.g., Béchamel).' },
      { front: 'How to use cornstarch correctly?', back: 'Always mix in cold water, then add to boiling sauce.' },
      { front: 'What does "Mounting" mean?', back: 'Stirring cold butter into hot (not boiling) sauce for shine and binding.' }
    ]
  }
};

