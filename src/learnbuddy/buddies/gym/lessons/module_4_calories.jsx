import React from 'react';

export const caloriesLesson = {
  id: 'g1_m4_calories',
  title: { 
    en: '4.1 Calorie Balance', 
    de: '4.1 Kalorienbilanz' 
  },
  description: { 
    en: 'The foundation of nutrition: Bulk, Cut, or Maintain? Calculating your TDEE.', 
    de: 'Das Fundament der Ernährung: Aufbau, Diät oder Erhalten? Deinen Bedarf berechnen.' 
  },
  category: 'nutrition',
  
  content: {
    de: `
### Modul 4.1: Die Kalorienbilanz

Egal wie gesund du isst:
*   Isst du **mehr** als du verbrauchst ➞ Nimmst du zu.
*   Isst du **weniger** als du verbrauchst ➞ Nimmst du ab.

Das ist Physik (Thermodynamik). Keine Diät der Welt (Keto, Paleo, Low-Carb) kann dieses Gesetz umgehen.

---

### 1. Deinen Bedarf berechnen (TDEE)
Der TDEE (Total Daily Energy Expenditure) ist dein Gesamtumsatz.

1.  **Grundumsatz (BMR):** Was dein Körper im Koma verbraucht (Atmung, Organe).
    *   *Faustformel:* Körpergewicht (kg) x 24.
2.  **Aktivitätsfaktor:**
    *   Bürojob + wenig Sport: x 1.2
    *   Bürojob + 3-4x Training: x 1.35
    *   Körperliche Arbeit + Training: x 1.5+

**Beispiel (80kg Mann, Büro, 3x Training):**
80 x 24 = 1920 kcal (BMR)
1920 x 1.35 = **2592 kcal (TDEE)**

*Hinweis: Das ist nur eine Schätzung! Die Waage sagt dir die Wahrheit.*

---

### 2. Deine Ziele
Was willst du erreichen?

#### A) Muskelaufbau ("Bulk")
Du brauchst einen **Überschuss**. Du kannst keine Materie (Muskeln) aus dem Nichts erschaffen.
*   **Ziel:** +200 bis 400 kcal über TDEE.
*   **Gewichtszunahme:** ca. 0.5 - 1% Körpergewicht pro Monat.
*   **Dirty Bulk?** (+1000 kcal) ➞ Nein! Du wirst nur fett. Muskeln wachsen langsam.

#### B) Fettabbau ("Cut")
Du brauchst ein **Defizit**.
*   **Ziel:** -300 bis 500 kcal unter TDEE.
*   **Gewichtsverlust:** ca. 0.5 - 1% Körpergewicht pro Woche.
*   **Zu aggressiv?** (-1000 kcal) ➞ Du verlierst Muskeln und Energie.

#### C) Body Recomposition
Muskeln aufbauen und Fett abbauen gleichzeitig.
*   Funktioniert gut bei **Anfängern** oder bei **hohem Körperfettanteil**.
*   Iss deine **Erhaltungskalorien** (TDEE) und trainiere hart.

---

### 3. Tracking
Um sicherzugehen, musst du tracken.
*   Nutze Apps wie **MyFitnessPal** oder **Yazio**.
*   Wiege dein Essen (zumindest für 2 Wochen, um ein Gefühl zu bekommen).
*   Wiege dich jeden Morgen nüchtern und nimm den Wochendurchschnitt (Gewicht schwankt täglich durch Wasser!).
`,
    en: `
### Module 4.1: Calorie Balance

No matter how healthy you eat:
*   Eat **more** than you burn ➞ Gain weight.
*   Eat **less** than you burn ➞ Lose weight.

This is physics (thermodynamics). No diet in the world (Keto, Paleo, Low-Carb) can bypass this law.

---

### 1. Calculate Your Need (TDEE)
TDEE (Total Daily Energy Expenditure) is your total burn.

1.  **Basal Metabolic Rate (BMR):** What your body burns in a coma (breathing, organs).
    *   *Rule of thumb:* Bodyweight (kg) x 24.
2.  **Activity Factor:**
    *   Office job + little sports: x 1.2
    *   Office job + 3-4x training: x 1.35
    *   Physical job + training: x 1.5+

**Example (80kg male, office, 3x training):**
80 x 24 = 1920 kcal (BMR)
1920 x 1.35 = **2592 kcal (TDEE)**

*Note: This is just an estimate! The scale tells the truth.*

---

### 2. Your Goals
What do you want to achieve?

#### A) Muscle Build ("Bulk")
You need a **surplus**. You cannot create matter (muscle) from nothing.
*   **Goal:** +200 to 400 kcal above TDEE.
*   **Weight Gain:** approx. 0.5 - 1% bodyweight per month.
*   **Dirty Bulk?** (+1000 kcal) ➞ No! You just get fat. Muscle grows slowly.

#### B) Fat Loss ("Cut")
You need a **deficit**.
*   **Goal:** -300 to 500 kcal below TDEE.
*   **Weight Loss:** approx. 0.5 - 1% bodyweight per week.
*   **Too aggressive?** (-1000 kcal) ➞ You lose muscle and energy.

#### C) Body Recomposition
Build muscle and lose fat simultaneously.
*   Works well for **beginners** or those with **high body fat**.
*   Eat at **maintenance** (TDEE) and train hard.

---

### 3. Tracking
To be sure, you have to track.
*   Use apps like **MyFitnessPal** or **Yazio**.
*   Weigh your food (at least for 2 weeks to get a feeling).
*   Weigh yourself every morning fasted and take the weekly average (weight fluctuates daily due to water!).
`
  },

  task: {
    de: {
      title: 'Berechne deinen Bedarf',
      description: 'Nutze die Formel oder einen Online-Rechner.',
      checklist: [
        { text: 'Berechne deinen BMR (Gewicht x 24).' },
        { text: 'Schätze deinen Aktivitätsfaktor ehrlich ein.' },
        { text: 'Multipliziere beides = TDEE.' },
        { text: 'Entscheide: Willst du aufbauen (+300) oder abnehmen (-300)?' },
        { text: 'Das ist dein Kalorienziel für die nächste Woche.' }
      ]
    },
    en: {
      title: 'Calculate Your Need',
      description: 'Use the formula or an online calculator.',
      checklist: [
        { text: 'Calculate your BMR (Weight x 24).' },
        { text: 'Honestly estimate your activity factor.' },
        { text: 'Multiply both = TDEE.' },
        { text: 'Decide: Build (+300) or Cut (-300)?' },
        { text: 'This is your calorie goal for the next week.' }
      ]
    }
  },

  notes: {
    de: [
      {
        front: 'Was ist die wichtigste Regel der Ernährung?',
        back: 'Kalorienbilanz (Calories in vs. Calories out).'
      },
      {
        front: 'Was passiert im "Dirty Bulk"?',
        back: 'Man nimmt unnötig viel Fett zu, weil Muskeln nicht so schnell wachsen können.'
      },
      {
        front: 'Warum sollte man den Wochendurchschnitt beim Gewicht nehmen?',
        back: 'Weil das tägliche Gewicht durch Wasser, Salz und Mageninhalt stark schwankt.'
      }
    ],
    en: [
      {
        front: 'What is the most important rule of nutrition?',
        back: 'Calorie Balance (Calories in vs. Calories out).'
      },
      {
        front: 'What happens in a "Dirty Bulk"?',
        back: 'You gain unnecessary fat because muscles cannot grow that fast.'
      },
      {
        front: 'Why use the weekly average for weight?',
        back: 'Because daily weight fluctuates heavily due to water, salt, and stomach content.'
      }
    ]
  }
};


