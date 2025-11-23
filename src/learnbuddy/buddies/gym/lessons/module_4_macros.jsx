import React from 'react';

export const macrosLesson = {
  id: 'g1_m4_macros',
  title: { 
    en: '4.2 Macronutrients', 
    de: '4.2 Makronährstoffe' 
  },
  description: { 
    en: 'Protein, Carbs, Fats: What they do and how much you need.', 
    de: 'Protein, Kohlenhydrate, Fette: Was sie tun und wie viel du brauchst.' 
  },
  category: 'nutrition',
  
  content: {
    de: `
### Modul 4.2: Die Makronährstoffe

Kalorien bestimmen das Gewicht. Makros bestimmen, woraus das Gewicht besteht (Fett oder Muskeln).

---

### 1. Protein (Der Baustoff)
Ohne Protein kein Muskelwachstum. Punkt.
Es ist der wichtigste Makronährstoff für Athleten.

*   **Wie viel?** 1.6g bis 2.2g pro kg Körpergewicht.
    *   *Beispiel 80kg:* 130g - 175g Protein pro Tag.
*   **Quellen:** Fleisch, Fisch, Eier, Milchprodukte, Linsen, Bohnen, Tofu, Whey.
*   **Timing:** Verteile es auf 3-5 Mahlzeiten (der Körper hat keinen "Protein-Speicher").

---

### 2. Fette (Der Hormon-Booster)
Fette sind nicht böse! Sie sind essentiell für Hormonproduktion (Testosteron!) und Gesundheit.

*   **Wie viel?** ca. 0.8g bis 1.0g pro kg Körpergewicht.
    *   *Beispiel 80kg:* 65g - 80g Fett pro Tag.
*   **Quellen:**
    *   *Gut:* Nüsse, Avocado, Olivenöl, Lachs (Omega-3).
    *   *Schlecht:* Transfette (Frittiertes, Fertiggebäck).
*   **Vorsicht:** Fett hat 9 kcal pro Gramm (Protein/Carbs nur 4 kcal). Die Kalorien summieren sich schnell!

---

### 3. Kohlenhydrate (Der Treibstoff)
Carbs geben dir Energie für harte Workouts. Sie sind nicht essentiell zum Überleben (siehe Keto), aber **optimal** für sportliche Leistung.

*   **Wie viel?** Der "Rest" deiner Kalorien.
*   **Quellen:**
    *   *Komplex (Langsam):* Haferflocken, Reis, Kartoffeln, Vollkorn. (Gut für Sättigung).
    *   *Einfach (Schnell):* Obst, Zucker. (Gut direkt vor/nach dem Training).
*   **Timing:** Iss den Großteil deiner Carbs um das Training herum (davor für Energie, danach für die Speicher).

---

### Zusammenfassung: Die Prioritäten-Pyramide

1.  **Kalorienbilanz** (Das Wichtigste!)
2.  **Genug Protein** (Muskelschutz & Aufbau)
3.  **Genug Fett** (Hormone & Gesundheit)
4.  **Rest Carbs** (Energie)
5.  ...
6.  ...
7.  Supplements (Ganz oben, am unwichtigsten!)

---

### Beispiel-Tag (80kg, 2600 kcal)

*   **Protein:** 160g (= 640 kcal)
*   **Fett:** 80g (= 720 kcal)
*   **Carbs:** 310g (= 1240 kcal) - *Der Rest*
*   **Summe:** 2600 kcal
`,
    en: `
### Module 4.2: Macronutrients

Calories determine weight. Macros determine what that weight consists of (fat or muscle).

---

### 1. Protein (The Builder)
No protein, no muscle growth. Period.
It is the most important macronutrient for athletes.

*   **How much?** 1.6g to 2.2g per kg bodyweight.
    *   *Example 80kg:* 130g - 175g protein per day.
*   **Sources:** Meat, fish, eggs, dairy, lentils, beans, tofu, whey.
*   **Timing:** Spread across 3-5 meals (the body has no "protein store").

---

### 2. Fats (The Hormonal Booster)
Fats are not evil! They are essential for hormone production (Testosterone!) and health.

*   **How much?** approx. 0.8g to 1.0g per kg bodyweight.
    *   *Example 80kg:* 65g - 80g fat per day.
*   **Sources:**
    *   *Good:* Nuts, avocado, olive oil, salmon (Omega-3).
    *   *Bad:* Trans fats (Fried food, processed pastries).
*   **Caution:** Fat has 9 kcal per gram (Protein/Carbs only 4 kcal). Calories add up quickly!

---

### 3. Carbohydrates (The Fuel)
Carbs give you energy for hard workouts. They are not essential for survival (see Keto), but **optimal** for athletic performance.

*   **How much?** The "rest" of your calories.
*   **Sources:**
    *   *Complex (Slow):* Oats, rice, potatoes, whole grains. (Good for satiety).
    *   *Simple (Fast):* Fruit, sugar. (Good directly before/after training).
*   **Timing:** Eat the majority of your carbs around your workout (before for energy, after for stores).

---

### Summary: The Priority Pyramid

1.  **Calorie Balance** (Most important!)
2.  **Enough Protein** (Muscle protection & growth)
3.  **Enough Fat** (Hormones & Health)
4.  **Rest Carbs** (Energy)
5.  ...
6.  ...
7.  Supplements (At the top, least important!)

---

### Example Day (80kg, 2600 kcal)

*   **Protein:** 160g (= 640 kcal)
*   **Fat:** 80g (= 720 kcal)
*   **Carbs:** 310g (= 1240 kcal) - *The rest*
*   **Sum:** 2600 kcal
`
  },

  task: {
    de: {
      title: 'Protein-Check',
      description: 'Isst du genug Protein?',
      checklist: [
        { text: 'Berechne dein Ziel: Körpergewicht x 2.' },
        { text: 'Tracke einen Tag lang nur dein Protein.' },
        { text: 'Erreichst du den Wert? (Meistens essen Leute zu wenig).' },
        { text: 'Wenn nicht: Füge einen Shake oder Quark hinzu.' }
      ]
    },
    en: {
      title: 'Protein Check',
      description: 'Are you eating enough protein?',
      checklist: [
        { text: 'Calculate your goal: Bodyweight x 2.' },
        { text: 'Track only your protein for one day.' },
        { text: 'Do you hit the number? (Most people eat too little).' },
        { text: 'If not: Add a shake or quark/yogurt.' }
      ]
    }
  },

  notes: {
    de: [
      {
        front: 'Warum ist Protein so wichtig?',
        back: 'Es liefert die Aminosäuren, die für den Muskelaufbau notwendig sind.'
      },
      {
        front: 'Haben Fette mehr Kalorien als Kohlenhydrate?',
        back: 'Ja. Fett = 9 kcal/g. Kohlenhydrate = 4 kcal/g.'
      },
      {
        front: 'Wann sollte man schnelle Kohlenhydrate essen?',
        back: 'Um das Training herum (für schnelle Energie).'
      }
    ],
    en: [
      {
        front: 'Why is protein so important?',
        back: 'It provides the amino acids necessary for muscle growth.'
      },
      {
        front: 'Do fats have more calories than carbs?',
        back: 'Yes. Fat = 9 kcal/g. Carbs = 4 kcal/g.'
      },
      {
        front: 'When should you eat fast carbs?',
        back: 'Around your workout (for quick energy).'
      }
    ]
  }
};

