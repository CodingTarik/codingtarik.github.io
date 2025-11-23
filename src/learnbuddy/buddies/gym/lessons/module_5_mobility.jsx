import React from 'react';

export const mobilityLesson = {
  id: 'g1_m5_mobility',
  title: { 
    en: '5.2 Warm-up & Mobility', 
    de: '5.2 Warm-up & Mobilität' 
  },
  description: { 
    en: 'Don\'t skip the warm-up! How to prepare for heavy lifting.', 
    de: 'Überspringe nicht das Aufwärmen! Wie du dich auf schweres Training vorbereitest.' 
  },
  category: 'recovery',
  
  content: {
    de: `
### Modul 5.2: Dehnung & Warm-up

"Kaltes Gummi reißt."
Ein gutes Warm-up erhöht deine Leistung und verhindert, dass du dich verletzt.

---

### Das 3-Phasen Warm-up (Dauer: 10-15 Min)

#### Phase 1: Allgemein (Puls hoch) - 3-5 Min
Bring das Blut in Wallung.
*   Rudergerät, Crosstrainer, Seilspringen oder Hampelmänner.
*   **Ziel:** Leicht schwitzen, nicht ermüden!

#### Phase 2: Dynamisches Dehnen (Beweglichkeit) - 5 Min
Bewege die Gelenke durch den vollen Radius.
*   **Armkreisen** (Schulter).
*   **Beinpendel** (Hüfte).
*   **Cat-Cow** (Wirbelsäule).
*   **Kniebeugen ohne Gewicht.**
*   *Wichtig: Kein statisches Dehnen (Dehnung halten) VOR dem Training! Das reduziert die Kraft.*

#### Phase 3: Spezifisch (Aufwärmsätze) - 5-10 Min
Bevor du dein Arbeitsgewicht nimmst, taste dich heran.
*   *Beispiel: Du willst 60kg Bankdrücken.*
    1.  Nur Stange (20kg) x 10 Reps.
    2.  40kg x 5 Reps.
    3.  50kg x 3 Reps.
    4.  **60kg (Arbeits-Sätze).**

---

### Cool-Down & Dehnen (Nach dem Training)
Jetzt ist Zeit für statisches Dehnen oder Foam Rolling.
*   Hilft, den Muskeltonus zu senken (Entspannung).
*   Fördert die Durchblutung (Abtransport von Abfallstoffen).
*   Ist gut für die langfristige Beweglichkeit.

---

### Mobilität für Kniebeugen
Viele kommen bei der Kniebeuge nicht tief runter ("Butt Wink").
*   **Problem:** Oft steife Sprunggelenke oder Hüften.
*   **Lösung:** Täglich in der tiefen Hocke sitzen (Malasana), Waden dehnen.

`,
    en: `
### Module 5.2: Warm-up & Mobility

"Cold rubber snaps."
A good warm-up increases performance and prevents injury.

---

### The 3-Phase Warm-up (Duration: 10-15 Min)

#### Phase 1: General (Pulse up) - 3-5 Min
Get the blood flowing.
*   Rower, Crosstrainer, Jump rope, or Jumping Jacks.
*   **Goal:** Light sweat, don't fatigue!

#### Phase 2: Dynamic Stretching (Mobility) - 5 Min
Move joints through full range of motion.
*   **Arm circles** (Shoulder).
*   **Leg swings** (Hip).
*   **Cat-Cow** (Spine).
*   **Bodyweight Squats.**
*   *Important: No static stretching (holding stretch) BEFORE training! Reduces strength.*

#### Phase 3: Specific (Warm-up Sets) - 5-10 Min
Before using your working weight, ramp up.
*   *Example: You want to Bench Press 60kg.*
    1.  Bar only (20kg) x 10 Reps.
    2.  40kg x 5 Reps.
    3.  50kg x 3 Reps.
    4.  **60kg (Working Sets).**

---

### Cool-Down & Stretching (After Training)
Now is the time for static stretching or foam rolling.
*   Helps lower muscle tone (relaxation).
*   Promotes blood flow (removal of waste products).
*   Good for long-term flexibility.

---

### Mobility for Squats
Many can't go deep in squats ("Butt Wink").
*   **Problem:** Often stiff ankles or hips.
*   **Solution:** Sit in deep squat daily (Malasana), stretch calves.

`
  },

  task: {
    de: {
      title: 'Perfektes Warm-up',
      description: 'Führe vor dem nächsten Training alle 3 Phasen durch.',
      checklist: [
        { text: 'Phase 1: 5 Min Cardio (Puls hoch).' },
        { text: 'Phase 2: Armkreisen, Beinpendel, Kniebeugen.' },
        { text: 'Phase 3: Mindestens 3 Aufwärmsätze für die erste Übung.' },
        { text: 'Merkst du einen Unterschied in der Leistung?' }
      ]
    },
    en: {
      title: 'Perfect Warm-up',
      description: 'Perform all 3 phases before next workout.',
      checklist: [
        { text: 'Phase 1: 5 Min Cardio (Pulse up).' },
        { text: 'Phase 2: Arm circles, Leg swings, Squats.' },
        { text: 'Phase 3: At least 3 warm-up sets for the first exercise.' },
        { text: 'Do you notice a difference in performance?' }
      ]
    }
  },

  notes: {
    de: [
      {
        front: 'Warum kein statisches Dehnen vor dem Training?',
        back: 'Es kann die Explosivkraft und Stabilität kurzzeitig reduzieren.'
      },
      {
        front: 'Was sind Aufwärmsätze?',
        back: 'Sätze mit leichtem Gewicht vor den eigentlichen Arbeits-Sätzen.'
      },
      {
        front: 'Was tun bei steifen Sprunggelenken (Kniebeuge)?',
        back: 'Waden dehnen und täglich in der tiefen Hocke sitzen.'
      }
    ],
    en: [
      {
        front: 'Why no static stretching before training?',
        back: 'It can temporarily reduce explosive power and stability.'
      },
      {
        front: 'What are warm-up sets?',
        back: 'Sets with light weight before the actual working sets.'
      },
      {
        front: 'What to do for stiff ankles (Squat)?',
        back: 'Stretch calves and sit in deep squat daily.'
      }
    ]
  }
};

