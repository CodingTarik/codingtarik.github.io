import React from 'react';

export const soupsStocksLesson = {
  id: 'c3_m3_soups',
  title: { 
    en: '3.3 Soups & Stocks', 
    de: '3.3 Suppen & Fonds' 
  },
  description: { 
    en: 'Stock is the soul of the kitchen. Learn the difference between stock and broth, and how to make soup.', 
    de: 'Ein Fond ist die Seele der Küche. Lerne den Unterschied zwischen Fond und Brühe und wie man Suppen baut.' 
  },
  category: 'preparations',
  
  content: {
    de: `
### Flüssiges Gold 🥣

Eine selbstgemachte Suppe ist Seelentröster Nr. 1. Die Basis für fast jede gute Sauce oder Suppe ist ein **Fond**.

---

### 1. Fond vs. Brühe

*   **Fond (Stock):** Gekocht aus **Knochen** (Kollagen). Ungesalzen (meistens). Hat Körper, geliert im Kühlschrank. Ist eine *Zutat*.
*   **Brühe (Broth):** Gekocht aus **Fleisch** und Gemüse. Gesalzen. Ist ein *fertiges Gericht* (kann man so trinken).

---

### 2. Die zwei Grund-Fonds

1.  **Heller Fond (Geflügel/Gemüse):**
    *   Knochen/Gemüse werden direkt ins kalte Wasser gegeben und ausgekocht.
    *   Ergebnis: Helle Farbe, feiner Geschmack.
    *   Für: Risotto, helle Saucen, Geflügelsuppen.
2.  **Dunkler Fond (Rind/Wild):**
    *   Knochen und Gemüse werden erst **im Ofen dunkel geröstet** (Maillard-Reaktion!), dann gekocht.
    *   Ergebnis: Dunkle Farbe, kräftiger Röstgeschmack.
    *   Für: Bratensaucen, Gulasch.

**Tipp:** Sammle Gemüseabschnitte (Zwiebelschalen, Karottenenden, Sellerie) und Hühnerknochen in einer Tüte im Gefrierfach. Wenn sie voll ist -> Topf -> Wasser -> 2h köcheln -> Gratis Fond!

---

### 3. Suppen-Architektur

Es gibt zwei Hauptarten von Suppen:

**A) Klare Suppen:**
Basis ist ein Fond/Brühe + Einlage (Gemüsewürfel, Nudeln, Fleisch).
*   Wichtig: Trübe Brühe vermeiden (nicht wild kochen lassen, nur simmern!).

**B) Gebundene Suppen (Cremesuppen):**
1.  Zwiebeln in Fett andünsten.
2.  Hauptgemüse (Kürbis, Brokkoli, Kartoffel) dazu.
3.  Mit Fond aufgießen, weich kochen.
4.  **Pürieren.**
5.  **Verfeinern:** Sahne, Kokosmilch oder Butter dazu.
6.  **Säure-Kick:** Spritzer Zitrone/Essig am Ende hebt den Geschmack enorm!

---

### 4. Der "Eintopf" (Stew)

Die Königsklasse. Alles in einem Topf.
*   Beginne mit dem Fleisch (anbraten, rausnehmen).
*   Dann Zwiebeln/Wurzelgemüse (anbraten).
*   Fleisch zurück, Flüssigkeit dazu.
*   Lange simmern.
*   Weiches Gemüse (Erbsen, Spinat) erst 5 Min vor Schluss dazu.

---

### Zusammenfassung

Brühwürfel sind okay für den Notfall. Aber ein selbstgemachter Fond hebt dein Kochen auf ein neues Level. Er bringt Tiefe ("Umami"), die Wasser nicht hat.
    `,
    en: `
### Liquid Gold 🥣

Homemade soup is soul food #1. The base for almost every good sauce or soup is a **Stock**.

---

### 1. Stock vs. Broth

*   **Stock (Fond):** Made from **bones** (collagen). Unsalted (usually). Has body, gels in fridge. Is an *ingredient*.
*   **Broth (Brühe):** Made from **meat** and veggies. Salted. Is a *finished dish* (you can drink it).

---

### 2. The Two Basic Stocks

1.  **White Stock (Poultry/Veggie):**
    *   Bones/Veggies go directly into cold water and simmer.
    *   Result: Light color, delicate flavor.
    *   For: Risotto, light sauces, poultry soups.
2.  **Brown Stock (Beef/Game):**
    *   Bones and veggies are **roasted dark in oven** first (Maillard reaction!), then simmered.
    *   Result: Dark color, strong roasted flavor.
    *   For: Gravy, stews.

**Tip:** Collect veggie scraps (onion skins, carrot ends, celery) and chicken bones in a bag in the freezer. When full -> Pot -> Water -> Simmer 2h -> Free Stock!

---

### 3. Soup Architecture

Two main types:

**A) Clear Soups:**
Base is Stock/Broth + Garnish (diced veggies, pasta, meat).
*   Important: Avoid cloudy broth (don't boil hard, only simmer!).

**B) Thick Soups (Cream Soups/Purée):**
1.  Sweat onions in fat.
2.  Add main veggie (Pumpkin, Broccoli, Potato).
3.  Fill with stock, cook until soft.
4.  **Purée.**
5.  **Refine:** Add cream, coconut milk, or butter.
6.  **Acid Kick:** Splash of lemon/vinegar at end lifts flavor massively!

---

### 4. The Stew

The master class. Everything in one pot.
*   Start with meat (sear, remove).
*   Then onions/root veggies (sear).
*   Meat back in, liquid in.
*   Long simmer.
*   Soft veggies (peas, spinach) only 5 mins before end.

---

### Summary

Bouillon cubes are okay for emergencies. But homemade stock lifts your cooking to a new level. It brings depth ("Umami") that water lacks.
    `
  },

  task: {
    de: {
      title: 'Zero-Waste Fond',
      description: 'Mache aus Müll Gold.',
      checklist: [
        { text: 'Lege eine Tüte im Gefrierfach an.' },
        { text: 'Wirf ab sofort alle Zwiebelschalen, Lauchgrün, Möhrenschalen und Hühnerknochen hinein.' },
        { text: 'Wenn voll: In Topf mit Wasser, 2h simmern.' },
        { text: 'Abseihen. Du hast gratis Gemüse-/Hühnerfond!' }
      ]
    },
    en: {
      title: 'Zero-Waste Stock',
      description: 'Turn trash into gold.',
      checklist: [
        { text: 'Start a bag in the freezer.' },
        { text: 'Throw in all onion skins, leek greens, carrot peels, and chicken bones from now on.' },
        { text: 'When full: Pot with water, simmer 2h.' },
        { text: 'Strain. You have free veggie/chicken stock!' }
      ]
    }
  },
  
  notes: {
    de: [
      { front: 'Was ist der Unterschied zwischen Fond und Brühe?', back: 'Fond = aus Knochen (ungesalzen, Basis). Brühe = aus Fleisch (gesalzen, fertig).' },
      { front: 'Wie bekommt man dunklen Fond?', back: 'Knochen und Gemüse vorher im Ofen rösten (Maillard-Reaktion).' },
      { front: 'Was ist das Geheimnis einer guten Cremesuppe?', back: 'Pürieren und am Ende Säure (Zitrone) und Fett (Sahne/Butter) zur Balance hinzufügen.' }
    ],
    en: [
      { front: 'Difference between Stock and Broth?', back: 'Stock = from bones (unsalted, base). Broth = from meat (salted, finished).' },
      { front: 'How to get brown stock?', back: 'Roast bones and veggies in oven first (Maillard reaction).' },
      { front: 'Secret of a good cream soup?', back: 'Purée and add Acid (Lemon) and Fat (Cream/Butter) at the end for balance.' }
    ]
  }
};
