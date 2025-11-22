import React from 'react';

export const soupsLesson = {
  id: 'c3_m3_soups',
  title: { 
    en: '3.3 Soups & Stocks', 
    de: '3.3 Suppen & Fonds' 
  },
  description: { 
    en: 'The soul of the kitchen. Why homemade stock beats any cube and how to construct a soup.', 
    de: 'Die Seele der Küche. Warum selbstgemachter Fond jeden Würfel schlägt und wie man eine Suppe aufbaut.' 
  },
  category: 'preparations',
  
  content: {
    de: `
### Flüssiges Gold 🥣

Eine gute Suppe wärmt die Seele. Die Basis jeder guten Suppe (und jeder guten Sauce) ist ein **Fond**.

---

### 1. Was ist ein Fond? (Stock/Broth)

Wasser, das Geschmack angenommen hat.
*   **Gemüsefond:** Gemüseabschnitte, Zwiebelschalen, Kräuterstiele. 30-45 Min köcheln.
*   **Hühnerfond:** Karkassen (Knochen) vom Huhn, Gemüse. 2-4 Stunden köcheln.
*   **Rinderfond:** Geröstete Knochen. 4-8+ Stunden köcheln.

**Der Unterschied zum Brühwürfel:**
Ein Würfel besteht aus Salz, Geschmacksverstärker und Palmfett. Ein echter Fond enthält Gelatine (aus den Knochen) und tiefen, echten Geschmack. Gelatine gibt der Suppe ein "Mundgefühl" (Körper), das Wasser nie haben kann.

---

### 2. Der Suppen-Baukasten

Fast jede Suppe folgt diesem Muster:

1.  **Die Basis (Soffritto/Mirepoix):**
    Zwiebeln, Karotten, Sellerie in Würfeln schneiden. In Fett (Butter/Öl) sanft andünsten (**Anschwitzen**). Das baut das Geschmacksfundament.
2.  **Die Hauptzutat:**
    Kartoffeln, Kürbis, Linsen, Brokkoli hinzufügen. Kurz mitdünsten.
3.  **Die Flüssigkeit:**
    Mit Fond (oder Wasser + Würze) aufgießen.
4.  **Das Kochen:**
    Simmern lassen, bis das Gemüse weich ist.
5.  **Das Finish:**
    *   **Klar:** Stückig lassen.
    *   **Cremig:** Pürieren. Eventuell Sahne oder Kokosmilch dazu.
    *   **Säure-Kick:** Ein Spritzer Zitrone oder Essig am Ende (WICHTIG!).

---

### 3. Eintöpfe (Stew)

Der große Bruder der Suppe. Weniger Flüssigkeit, mehr Inhalt.
Hier wird oft Fleisch zuerst angebraten, dann kommt das Gemüse, dann die Flüssigkeit.
Geduld ist hier die wichtigste Zutat. Eintöpfe schmecken am nächsten Tag oft noch besser (Aromen verbinden sich).

---

### 4. Suppen retten

*   **Zu salzig?** Rohe Kartoffel mitkochen (saugt etwas Salz auf), dann entfernen. Oder mit Wasser/Sahne strecken.
*   **Zu dünn?** Etwas Flüssigkeit entnehmen, mit Stärke mischen, zurückrühren. Oder: Einen Teil des Gemüses pürieren.

---

### Zusammenfassung

Wirf Gemüseabschnitte (Zwiebelschalen, Karottenenden, Lauchgrün) nicht weg! Sammle sie in einer Tüte im Gefrierfach. Wenn die Tüte voll ist: Wasser drauf, 30 Min kochen -> Gratis Gemüsefond!
    `,
    en: `
### Liquid Gold 🥣

A good soup warms the soul. The base of every good soup (and every good sauce) is a **Stock** (Fond).

---

### 1. What is Stock?

Water that has taken on flavor.
*   **Vegetable Stock:** Veggie scraps, onion skins, herb stems. Simmer 30-45 mins.
*   **Chicken Stock:** Chicken carcasses (bones), veggies. Simmer 2-4 hours.
*   **Beef Stock:** Roasted bones. Simmer 4-8+ hours.

**Difference to Bouillon Cube:**
A cube consists of salt, flavor enhancers, and palm fat. Real stock contains gelatin (from bones) and deep, real flavor. Gelatin gives the soup "mouthfeel" (body) that water can never have.

---

### 2. The Soup Blueprint

Almost every soup follows this pattern:

1.  **The Base (Soffritto/Mirepoix):**
    Dice onions, carrots, celery. Sweat gently in fat (butter/oil). Builds the flavor foundation.
2.  **The Main Ingredient:**
    Add potatoes, pumpkin, lentils, broccoli. Sweat briefly.
3.  **The Liquid:**
    Pour in stock (or water + seasoning).
4.  **The Cooking:**
    Simmer until veggies are soft.
5.  **The Finish:**
    *   **Clear:** Leave chunky.
    *   **Creamy:** Puree. Maybe add cream or coconut milk.
    *   **Acid Kick:** A splash of lemon or vinegar at the end (IMPORTANT!).

---

### 3. Stews

The big brother of soup. Less liquid, more content.
Here meat is often seared first, then veggies, then liquid.
Patience is the most important ingredient. Stews often taste better the next day (flavors meld).

---

### 4. Saving Soups

*   **Too salty?** Cook raw potato in it (absorbs some salt), then remove. Or dilute with water/cream.
*   **Too thin?** Take out some liquid, mix with starch, stir back in. Or: Puree part of the vegetables.

---

### Summary

Don't throw away veggie scraps (onion skins, carrot ends, leek greens)! Collect them in a bag in the freezer. When bag is full: Add water, boil 30 mins -> Free Vegetable Stock!
    `
  },

  task: {
    de: {
      title: 'Zero-Waste Fond',
      description: 'Mache deinen ersten eigenen Gemüsefond.',
      checklist: [
        { text: 'Sammle eine Woche lang Gemüseabschnitte (Zwiebeln, Karotten, Sellerie, Pilze) im Gefrierfach.' },
        { text: 'Gib alles in einen Topf, bedecke es mit Wasser.' },
        { text: 'Füge Pfefferkörner und ein Lorbeerblatt hinzu (kein Salz!).' },
        { text: 'Köchle es 45 Minuten.' },
        { text: 'Seihe es ab. Benutze diesen Fond für deine nächste Suppe oder Risotto.' }
      ]
    },
    en: {
      title: 'Zero-Waste Stock',
      description: 'Make your first own vegetable stock.',
      checklist: [
        { text: 'Collect veggie scraps (onions, carrots, celery, mushrooms) in freezer for a week.' },
        { text: 'Put all in a pot, cover with water.' },
        { text: 'Add peppercorns and a bay leaf (no salt!).' },
        { text: 'Simmer for 45 minutes.' },
        { text: 'Strain. Use this stock for your next soup or risotto.' }
      ]
    }
  },
  
  notes: {
    de: [
      { front: 'Was ist Mirepoix?', back: 'Die heilige Dreifaltigkeit der Suppenbasis: Zwiebel, Karotte, Sellerie (würfelig geschnitten und angeschwitzt).' },
      { front: 'Warum ist selbstgemachter Fond besser als Würfel?', back: 'Er enthält natürliche Gelatine (Mundgefühl) und echten Geschmack statt nur Salz und Chemie.' },
      { front: 'Was gehört in fast jede Suppe am Ende?', back: 'Säure! Ein Spritzer Zitrone oder Essig hebt den Geschmack.' }
    ],
    en: [
      { front: 'What is Mirepoix?', back: 'The holy trinity of soup base: Onion, Carrot, Celery (diced and sweated).' },
      { front: 'Why is homemade stock better than cubes?', back: 'It contains natural gelatin (mouthfeel) and real flavor instead of just salt and chemicals.' },
      { front: 'What belongs in almost every soup at the end?', back: 'Acid! A splash of lemon or vinegar lifts the flavor.' }
    ]
  }
};

