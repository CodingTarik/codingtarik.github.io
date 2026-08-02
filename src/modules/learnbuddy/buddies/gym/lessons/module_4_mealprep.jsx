import React from 'react';

export const mealPrepLesson = {
  id: 'g1_m4_mealprep',
  title: { 
    en: '4.5 Meal Prep & Practical Tips', 
    de: '4.5 Meal Prep & Praxis-Tipps' 
  },
  description: { 
    en: 'Cooking for success. How to save time and money while hitting your macros.', 
    de: 'Kochen für den Erfolg. Wie du Zeit und Geld sparst und deine Makros triffst.' 
  },
  category: 'nutrition',
  
  content: {
    de: `
### Modul 4.5: Meal Prep (Vorkochen)

Der häufigste Grund, warum Diäten scheitern: **"Ich hatte nichts Gesundes da und hatte Hunger."**
Meal Prep ist die Lösung. Wenn das Essen schon fertig ist, greifst du nicht zur Pizza.

---

### Die Basics
Du musst nicht 7 Tage im Voraus kochen (schmeckt eh nicht mehr).
**Die 2-Tage-Regel:** Koche am Sonntag für Mo/Di. Koche am Mittwoch für Do/Fr.

1.  **Kohlenhydrat-Quelle (Topf 1):** Reis, Quinoa, Kartoffeln oder Nudeln. (Koche gleich 500g-1kg).
2.  **Protein-Quelle (Pfanne/Ofen):** 1kg Hähnchen, Rinderhack oder Tofu anbraten.
3.  **Gemüse (Topf 2/Ofen):** TK-Gemüse (Brokkoli, Kaiser-Mix) ist billig, gesund und schon geschnitten!

**Zusammenwerfen:** Tupperdosen füllen. Soße drauf. Fertig.

---

### Budget-Tipps (Muskeln für wenig Geld)
*   **Protein:** Magerquark (unschlagbar günstig), Eier, Dosen-Thunfisch, Linsen (getrocknet), Hähnchen im Angebot (einfrieren!).
*   **Carbs:** Reis (im 5kg Sack beim Asiaten), Haferflocken (50 Cent), Kartoffeln.
*   **Fett:** Erdnüsse, Olivenöl.

---

### Essen gehen & Soziale Events
Du musst nicht als Eremit leben.
*   **Die 80/20 Regel:** Wenn du 80% der Zeit sauber isst, sind die 20% (Pizza mit Freunden, Bier am Geburtstag) egal.
*   **Restaurant-Taktik:** "Gegrilltes Fleisch/Fisch mit Gemüse und Reis/Kartoffeln" gibt es fast überall (beim Griechen, Steakhouse, Italiener).
*   **Alkohol:** Hat viele Kalorien (7 kcal/g) und hemmt den Muskelaufbau. Trink in Maßen, nicht in Massen.

---

### Ein einfaches Rezept: "Gym-Bowl"
*   200g gekochter Reis
*   200g Hähnchen/Tofu
*   Halbe Avocado (Fett)
*   Handvoll Spinat/Tomaten
*   Soße: Sojasauce oder etwas Kräuterquark.
*   *Dauer: 15 Min.*

`,
    en: `
### Module 4.5: Meal Prep (Pre-Cooking)

The most common reason diets fail: **"I didn't have anything healthy and was hungry."**
Meal Prep is the solution. If the food is already ready, you won't grab the pizza.

---

### The Basics
You don't have to cook 7 days in advance (doesn't taste good anyway).
**The 2-Day Rule:** Cook on Sunday for Mon/Tue. Cook on Wednesday for Thu/Fri.

1.  **Carb Source (Pot 1):** Rice, Quinoa, Potatoes, or Pasta. (Cook 500g-1kg at once).
2.  **Protein Source (Pan/Oven):** Fry 1kg Chicken, Ground Beef, or Tofu.
3.  **Vegetables (Pot 2/Oven):** Frozen veggies (Broccoli, Mix) are cheap, healthy, and pre-cut!

**Combine:** Fill Tupperware. Add sauce. Done.

---

### Budget Tips (Muscles for little money)
*   **Protein:** Low-fat quark/Greek yogurt (unbeatably cheap), Eggs, Canned Tuna, Lentils (dried), Chicken on sale (freeze it!).
*   **Carbs:** Rice (5kg bag from Asian store), Oats, Potatoes.
*   **Fat:** Peanuts, Olive oil.

---

### Eating Out & Social Events
You don't have to live like a hermit.
*   **The 80/20 Rule:** If you eat clean 80% of the time, the 20% (Pizza with friends, Beer at birthday) don't matter.
*   **Restaurant Tactic:** "Grilled Meat/Fish with Veggies and Rice/Potatoes" is available almost everywhere.
*   **Alcohol:** Has many calories (7 kcal/g) and inhibits muscle growth. Drink in moderation.

---

### A Simple Recipe: "Gym Bowl"
*   200g cooked rice
*   200g Chicken/Tofu
*   Half Avocado (Fat)
*   Handful Spinach/Tomatoes
*   Sauce: Soy sauce or herb quark/yogurt.
*   *Time: 15 Min.*

`
  },

  task: {
    de: {
      title: 'Dein erster Meal Prep',
      description: 'Koche 3 Portionen auf einmal.',
      checklist: [
        { text: 'Kaufe 600g Fleisch/Tofu, 300g Reis (roh) und 1 Beutel TK-Gemüse.' },
        { text: 'Koche alles parallel.' },
        { text: 'Verteile es auf 3 Dosen.' },
        { text: 'Genieße das Gefühl, morgen nicht kochen zu müssen!' }
      ]
    },
    en: {
      title: 'Your First Meal Prep',
      description: 'Cook 3 portions at once.',
      checklist: [
        { text: 'Buy 600g Meat/Tofu, 300g Rice (raw), and 1 bag Frozen Veggies.' },
        { text: 'Cook everything in parallel.' },
        { text: 'Distribute into 3 containers.' },
        { text: 'Enjoy the feeling of not having to cook tomorrow!' }
      ]
    }
  },

  notes: {
    de: [
      {
        front: 'Warum scheitern Diäten oft?',
        back: 'Mangelnde Vorbereitung (Hunger + nichts Gesundes da = Fast Food).'
      },
      {
        front: 'Was ist eine gute, günstige Proteinquelle?',
        back: 'Magerquark, Eier, Linsen, Dosen-Thunfisch.'
      },
      {
        front: 'Was ist die 80/20 Regel?',
        back: '80% gesund essen, 20% "Gönnen" (für die Psyche).'
      }
    ],
    en: [
      {
        front: 'Why do diets often fail?',
        back: 'Lack of preparation (Hunger + nothing healthy available = Fast Food).'
      },
      {
        front: 'What is a good, cheap protein source?',
        back: 'Quark/Greek Yogurt, Eggs, Lentils, Canned Tuna.'
      },
      {
        front: 'What is the 80/20 rule?',
        back: 'Eat healthy 80% of the time, 20% "treats" (for mental health).'
      }
    ]
  }
};


