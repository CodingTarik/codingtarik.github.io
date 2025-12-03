import React from 'react';

export const timingLesson = {
  id: 'g1_m4_timing',
  title: { 
    en: '4.3 Timing & Hydration', 
    de: '4.3 Timing & Hydration' 
  },
  description: { 
    en: 'When to eat what? Pre- and Post-Workout nutrition and correct hydration.', 
    de: 'Wann was essen? Pre- und Post-Workout Ernährung und richtiges Trinken.' 
  },
  category: 'nutrition',
  
  content: {
    de: `
### Modul 4.3: Timing & Hydration

"Muss ich mein Proteinshake 5 Minuten nach dem Training trinken?" – Nein.
Aber Timing spielt eine Rolle für deine Energie im Training und die Erholung danach.

---

### 1. Pre-Workout (Der Treibstoff)
*Ziel:* Energie für das Training haben, ohne mit vollem Magen zu kämpfen.

*   **Wann?** 1-3 Stunden vor dem Training.
*   **Was?** Kohlenhydrate + etwas Protein. Wenig Fett/Ballaststoffe (verdaut langsam).
*   **Beispiele:**
    *   Haferflocken mit Whey und Banane.
    *   Reiswaffeln mit Honig.
    *   Toast mit Marmelade/Erdnussbutter.
*   **Der "Pump"-Booster:** Salz! Eine Prise Salz im Wasser vor dem Training hilft beim Pump und der Hydration.
*   **Koffein:** 30-60 Min vorher (Kaffee oder Booster). Optional!

---

### 2. Post-Workout (Die Reparatur)
*Ziel:* Speicher auffüllen und Reparatur starten.

*   **Das "Anabole Fenster":** Der Mythos sagt, du musst sofort essen. Die Wahrheit: Du hast entspannt 1-2 Stunden Zeit (länger, wenn du davor gegessen hast).
*   **Was?** Protein (wichtig!) + Kohlenhydrate.
*   **Beispiele:**
    *   Klassisch: Hähnchen mit Reis.
    *   Schnell: Proteinshake + Banane.
    *   Frühstück (wenn morgens trainiert): Eier + Toast.

---

### 3. Hydration (Das unterschätzte Element)
Ein dehydrierter Muskel ist ein schwacher Muskel. Schon 2% Flüssigkeitsverlust reduzieren die Kraft messbar.

*   **Wie viel?** 3-4 Liter pro Tag (inkl. Sport).
*   **Farbe-Check:** Dein Urin sollte hellgelb sein (wie Limonade), nicht dunkel (wie Apfelsaft).
*   **Elektrolyte:** Wenn du viel schwitzt, verlierst du Salz. Wasser allein reicht dann nicht. Salze dein Essen oder nutze Elektrolyt-Pulver bei sehr langen Einheiten.

---

### Zusammenfassung
Timing ist das "Feintuning". Die Gesamt-Kalorien (Modul 4.1) sind das Fundament. Wenn die Kalorien nicht stimmen, rettet dich auch der perfekte Shake nach dem Training nicht.
`,
    en: `
### Module 4.3: Timing & Hydration

"Do I have to drink my protein shake 5 minutes after training?" – No.
But timing plays a role in your energy during training and recovery afterwards.

---

### 1. Pre-Workout (The Fuel)
*Goal:* Have energy for training without struggling with a full stomach.

*   **When?** 1-3 hours before training.
*   **What?** Carbohydrates + some protein. Low fat/fiber (digests slowly).
*   **Examples:**
    *   Oats with whey and banana.
    *   Rice cakes with honey.
    *   Toast with jam/peanut butter.
*   **The "Pump" Booster:** Salt! A pinch of salt in water before training helps with pump and hydration.
*   **Caffeine:** 30-60 min before (Coffee or Booster). Optional!

---

### 2. Post-Workout (The Repair)
*Goal:* Refill stores and start repair.

*   **The "Anabolic Window":** Myth says you must eat immediately. Truth: You have a relaxed 1-2 hours (longer if you ate before).
*   **What?** Protein (important!) + Carbohydrates.
*   **Examples:**
    *   Classic: Chicken and rice.
    *   Quick: Protein shake + banana.
    *   Breakfast (if training in the morning): Eggs + toast.

---

### 3. Hydration (The Underrated Element)
A dehydrated muscle is a weak muscle. Even 2% fluid loss measurably reduces strength.

*   **How much?** 3-4 liters per day (incl. sports).
*   **Color Check:** Your urine should be pale yellow (like lemonade), not dark (like apple juice).
*   **Electrolytes:** If you sweat a lot, you lose salt. Water alone is not enough. Salt your food or use electrolyte powder for very long sessions.

---

### Summary
Timing is "fine-tuning". Total calories (Module 4.1) are the foundation. If calories are off, even the perfect post-workout shake won't save you.
`
  },

  task: {
    de: {
      title: 'Pre-Workout Experiment',
      description: 'Finde heraus, was dir Energie gibt.',
      checklist: [
        { text: 'Iss 90 Min vor dem nächsten Training eine Kohlenhydrat-Quelle (z.B. Banane, Haferflocken).' },
        { text: 'Trinke 500ml Wasser dazu.' },
        { text: 'Beobachte im Training: Hast du mehr Energie als sonst? Liegt es schwer im Magen?' }
      ]
    },
    en: {
      title: 'Pre-Workout Experiment',
      description: 'Find out what gives you energy.',
      checklist: [
        { text: 'Eat a carbohydrate source (e.g., banana, oats) 90 min before next workout.' },
        { text: 'Drink 500ml water with it.' },
        { text: 'Observe during training: Do you have more energy? Is it heavy on the stomach?' }
      ]
    }
  },

  notes: {
    de: [
      {
        front: 'Wie schnell muss man nach dem Training essen?',
        back: 'Innerhalb von 1-2 Stunden ist optimal (kein Stress!).'
      },
      {
        front: 'Warum sollte man vor dem Training wenig Fett essen?',
        back: 'Fett verlangsamt die Verdauung und kann schwer im Magen liegen.'
      },
      {
        front: 'Wie erkennt man, ob man genug trinkt?',
        back: 'Am Urin (sollte hellgelb sein).'
      }
    ],
    en: [
      {
        front: 'How quickly must you eat after training?',
        back: 'Within 1-2 hours is optimal (no stress!).'
      },
      {
        front: 'Why should you eat low fat before training?',
        back: 'Fat slows digestion and can sit heavy in the stomach.'
      },
      {
        front: 'How do you know if you drink enough?',
        back: 'By urine color (should be pale yellow).'
      }
    ]
  }
};


