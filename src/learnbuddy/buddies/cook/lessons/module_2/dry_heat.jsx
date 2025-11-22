import React from 'react';

export const dryHeatLesson = {
  id: 'c2_m2_dry_heat',
  title: { 
    en: '2.4 Dry Heat Cooking (Browning)', 
    de: '2.4 Trockene Hitze (Bräunung)' 
  },
  description: { 
    en: 'Frying, Roasting, Grilling. How to create flavor through the Maillard reaction.', 
    de: 'Braten, Rösten, Grillen. Wie man durch die Maillard-Reaktion Geschmack erzeugt.' 
  },
  category: 'techniques',
  
  content: {
    de: `
### Die Kunst der Bräunung 🔥

Trockene Hitze bedeutet: Temperaturen weit über 100°C. Hier passiert Magie.

Der Fachbegriff ist **Maillard-Reaktion**. Wenn Proteine und Zucker bei ca. 140°C reagieren, entstehen Hunderte neuer Aromen und die Farbe wird braun. Das ist der Grund, warum eine gebratene Hähnchenbrust besser schmeckt als eine gekochte.

---

### 1. Braten (Sauté / Pan-Frying)

Das Garen in einer Pfanne mit etwas Fett.

*   **Das Wichtigste:** Die Pfanne muss **HEISS** sein, bevor das Fleisch reinkommt.
*   **Der Test:** Halte die Hand über die Pfanne. Spürst du Hitze? Gut. Gib Öl rein. Wenn das Öl "schliert", ist es bereit.
*   **Der Fehler:** Pfanne zu kalt -> Fleisch saftet aus -> es kocht im eigenen Saft statt zu braten -> wird grau und zäh.
*   **Der zweite Fehler:** Zu viel auf einmal in der Pfanne. Das kühlt die Pfanne ab -> wieder Kochen statt Braten. Lass dem Fleisch Platz!

---

### 2. Rösten (Roasting)

Garen im Ofen mit trockener Luft (Umluft oder Ober-/Unterhitze).

*   **Für:** Gemüse (Ofengemüse), große Fleischstücke (Braten), Kartoffeln.
*   **Trick:** Gemüse mit Öl und Salz massieren. Auf dem Blech verteilen (nicht stapeln!). Bei 200°C rösten, bis es braune Ränder hat. Das ist Geschmack!

---

### 3. Frittieren (Deep Frying)

Garen schwimmend in heißem Fett (ca. 170°C).

*   **Mythos:** "Frittiertes ist immer fettig."
*   **Wahrheit:** Wenn das Fett heiß genug ist, bildet sich sofort eine Kruste, und das Fett dringt kaum ein. Das Essen dämpft von innen im eigenen Saft.
*   **Gefahr:** Fett zu kalt -> Kruste bildet sich nicht -> Essen saugt sich voll wie ein Schwamm. Eklig.

---

### 4. Grillen

Strahlungshitze (meist von unten). Extrem heiß.

*   Für Steaks und Burger. Erzeugt Raucharomen, die man in der Pfanne nicht hinbekommt.

---

### Zusammenfassung

Trockene Hitze = Farbe = Geschmack.
Habe keine Angst vor Hitze. Ein Steak, das bei niedriger Hitze in die Pfanne kommt, ist verloren. Es muss ZISCHEN!
    `,
    en: `
### The Art of Browning 🔥

Dry heat means: Temperatures way above 100°C (212°F). Magic happens here.

The technical term is **Maillard Reaction**. When proteins and sugars react at approx. 140°C (285°F), hundreds of new flavors are created and the color turns brown. That's why a roasted chicken breast tastes better than a boiled one.

---

### 1. Sauté / Pan-Frying

Cooking in a pan with some fat.

*   **Most Important:** The pan must be **HOT** before the meat goes in.
*   **The Test:** Hold your hand over the pan. Feel heat? Good. Add oil. If the oil "shimmers", it's ready.
*   **The Mistake:** Pan too cold -> meat releases juice -> cooks in its own juice instead of frying -> becomes gray and tough.
*   **The Second Mistake:** Overcrowding the pan. Cools the pan down -> boiling instead of frying again. Give the meat space!

---

### 2. Roasting

Cooking in the oven with dry air.

*   **For:** Vegetables (roasted veggies), large cuts of meat (roasts), potatoes.
*   **Trick:** Massage veggies with oil and salt. Spread on sheet (don't pile!). Roast at 200°C (400°F) until edges are brown. That is flavor!

---

### 3. Deep Frying

Cooking submerged in hot fat (approx. 170°C / 340°F).

*   **Myth:** "Fried food is always greasy."
*   **Truth:** If the fat is hot enough, a crust forms immediately, and fat barely penetrates. The food steams from the inside in its own juice.
*   **Danger:** Fat too cold -> crust doesn't form -> food soaks it up like a sponge. Gross.

---

### 4. Grilling

Radiant heat (usually from below). Extremely hot.

*   For steaks and burgers. Creates smoky flavors you can't get in a pan.

---

### Summary

Dry Heat = Color = Flavor.
Don't be afraid of heat. A steak put into a cold pan is lost. It must SIZZLE!
    `
  },

  task: {
    de: {
      title: 'Röstaromen-Check',
      description: 'Verstehe den Unterschied zwischen Kochen und Braten.',
      checklist: [
        { text: 'Schneide eine Zwiebel in Würfel.' },
        { text: 'Teile sie in zwei Hälften.' },
        { text: 'Hälfte 1: Gib sie in einen Topf mit etwas Wasser und dünste sie weich. (Keine Farbe, süßlich-mild).' },
        { text: 'Hälfte 2: Gib sie in eine heiße Pfanne mit Öl. Brate sie, bis sie braun ist. (Röstaromen, herzhaft).' },
        { text: 'Probiere beide. Das ist der Unterschied!' }
      ]
    },
    en: {
      title: 'Flavor Check',
      description: 'Understand the difference between boiling and frying.',
      checklist: [
        { text: 'Dice an onion.' },
        { text: 'Split into two halves.' },
        { text: 'Half 1: Put in a pot with some water and steam until soft. (No color, sweet-mild).' },
        { text: 'Half 2: Put in a hot pan with oil. Fry until brown. (Roasted flavors, savory).' },
        { text: 'Taste both. That is the difference!' }
      ]
    }
  },
  
  notes: {
    de: [
      { front: 'Was ist die Maillard-Reaktion?', back: 'Reaktion von Eiweiß und Zucker bei Hitze (ab 140°C). Erzeugt Bräunung und Röstaromen (Geschmack!).' },
      { front: 'Warum darf man die Pfanne nicht überfüllen?', back: 'Die Temperatur sinkt zu stark. Das Fleisch beginnt im eigenen Saft zu kochen (wird grau) statt zu braten.' },
      { front: 'Wann ist das Fett zum Frittieren heiß genug?', back: 'Wenn ein Holzlöffelstiel Blasen wirft oder ein Stück Brot in 30 Sekunden braun wird (ca. 170°C).' }
    ],
    en: [
      { front: 'What is the Maillard reaction?', back: 'Reaction of protein and sugar at heat (above 140°C/285°F). Creates browning and roasted flavors (Taste!).' },
      { front: 'Why shouldn\'t you overcrowd the pan?', back: 'Temperature drops too much. Meat starts boiling in its own juice (turns gray) instead of searing.' },
      { front: 'When is fat hot enough for frying?', back: 'When bubbles form around a wooden spoon handle or a piece of bread browns in 30 seconds (approx. 170°C/340°F).' }
    ]
  }
};

