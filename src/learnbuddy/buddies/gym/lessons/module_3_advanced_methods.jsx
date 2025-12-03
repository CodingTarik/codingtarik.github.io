import React from 'react';

export const advancedMethodsLesson = {
  id: 'g1_m3_advanced_methods',
  title: { 
    en: '3.5 Extended Methods (Advanced)', 
    de: '3.5 Erweiterte Methoden (Fortgeschritten)' 
  },
  description: { 
    en: 'Supersets, Dropsets, and more: How to increase intensity when weight alone is not enough.', 
    de: 'Supersätze, Dropsätze und mehr: Wie du die Intensität erhöhst, wenn Gewicht allein nicht reicht.' 
  },
  category: 'planning',
  
  content: {
    de: `
### Modul 3.5: Erweiterte Trainingsmethoden

Du trainierst seit einer Weile, die Gewichte steigen, aber du suchst nach neuen Reizen oder willst Zeit sparen? Hier kommen Intensitätstechniken ins Spiel.

**Warnung:** Diese Methoden sind **sehr anstrengend**. Nutze sie sparsam (nicht in jedem Satz, nicht bei jeder Übung), sonst riskierst du Übertraining.

---

### 1. Supersätze (Supersets)
Zwei Übungen direkt hintereinander ohne Pause.

*   **Antagonisten-Supersatz:** Trainiert Gegenspieler. Spart Zeit, ohne die Leistung zu mindern.
    *   *Beispiel:* Bankdrücken (Brust) ➞ sofort ➞ Rudern (Rücken).
    *   *Beispiel:* Bizeps Curls ➞ sofort ➞ Trizeps Drücken.
*   **Gleiche Muskelgruppe:** Sehr hart, nur für Isolation empfohlen.
    *   *Beispiel:* Seitheben ➞ sofort ➞ Frontheben.

---

### 2. Dropsätze (Drop Sets)
Du trainierst bis zum Muskelversagen, reduzierst das Gewicht sofort und machst weiter.

*   *Ablauf:*
    1.  Bizeps Curls mit 15kg bis nichts mehr geht (z.B. 10 Reps).
    2.  Sofort Hanteln ablegen, 10kg nehmen.
    3.  Wieder bis zum Versagen (z.B. 6 Reps).
    4.  (Optional) Sofort 5kg nehmen...
*   **Wann?** Am Ende des Trainings für den ultimativen "Pump".

---

### 3. Rest-Pause
Du machst kurze Pausen innerhalb eines Satzes, um mehr Wiederholungen mit schwerem Gewicht zu schaffen.

*   *Ablauf:*
    1.  Mache so viele Reps wie möglich (z.B. 8 Reps).
    2.  Lege das Gewicht ab, atme 15-20 Sekunden tief durch.
    3.  Mache mit demselben Gewicht noch so viele Reps wie möglich (z.B. 3 Reps).
    4.  Nochmal 15 Sek Pause, nochmal 2 Reps.
*   **Ergebnis:** 13 Reps mit einem Gewicht, mit dem du eigentlich nur 8 schaffst. Extrem effektiv!

---

### 4. Tempo-Training (Time Under Tension)
Du veränderst die Geschwindigkeit der Bewegung.

*   **Code:** 3-1-X-0 (Exzentrisch - Pause unten - Konzentrisch - Pause oben).
*   **3-0-1-0:** 3 Sekunden ablassen, 0 Sek Pause, 1 Sek explosiv hoch, 0 Sek Pause.
*   **Fokus:** Das langsame Ablassen (Exzentrik) verursacht die meisten Mikrorisse im Muskel (= Wachstum).

---

### 5. Pyramiden-Sätze
Klassisch, aber gut.
*   Satz 1: Leichtes Gewicht, viele Reps (15).
*   Satz 2: Mittleres Gewicht (10-12).
*   Satz 3: Schweres Gewicht (6-8).
*   (Optional) "Reverse Pyramid": Mit dem schwersten Satz beginnen (nach Aufwärmen), dann Gewicht reduzieren.
`,
    en: `
### Module 3.5: Extended Training Methods

You've been training for a while, weights are going up, but you're looking for new stimuli or want to save time? This is where intensity techniques come in.

**Warning:** These methods are **very taxing**. Use them sparingly (not every set, not every exercise), otherwise you risk overtraining.

---

### 1. Supersets
Two exercises performed back-to-back without rest.

*   **Antagonist Superset:** Trains opposing muscles. Saves time without reducing performance.
    *   *Example:* Bench Press (Chest) ➞ immediately ➞ Rows (Back).
    *   *Example:* Bicep Curls ➞ immediately ➞ Tricep Pushdowns.
*   **Same Muscle Group:** Very hard, only recommended for isolation.
    *   *Example:* Lateral Raises ➞ immediately ➞ Front Raises.

---

### 2. Drop Sets
You train to failure, immediately reduce the weight, and continue.

*   *Process:*
    1.  Bicep Curls with 15kg until failure (e.g., 10 reps).
    2.  Immediately put dumbbells down, pick up 10kg.
    3.  Again until failure (e.g., 6 reps).
    4.  (Optional) Immediately pick up 5kg...
*   **When?** At the end of the workout for the ultimate "pump".

---

### 3. Rest-Pause
You take short breaks within a set to squeeze out more reps with heavy weight.

*   *Process:*
    1.  Do as many reps as possible (e.g., 8 reps).
    2.  Rack the weight, breathe deeply for 15-20 seconds.
    3.  Do as many reps as possible with same weight (e.g., 3 reps).
    4.  Another 15 sec rest, another 2 reps.
*   **Result:** 13 reps with a weight you can normally only lift 8 times. Extremely effective!

---

### 4. Tempo Training (Time Under Tension)
You change the speed of the movement.

*   **Code:** 3-1-X-0 (Eccentric - Pause bottom - Concentric - Pause top).
*   **3-0-1-0:** Lower for 3 seconds, 0 sec pause, 1 sec explosive up, 0 sec pause.
*   **Focus:** Slow lowering (eccentric) causes the most micro-tears in the muscle (= growth).

---

### 5. Pyramid Sets
Classic but good.
*   Set 1: Light weight, high reps (15).
*   Set 2: Medium weight (10-12).
*   Set 3: Heavy weight (6-8).
*   (Optional) "Reverse Pyramid": Start with heaviest set (after warm-up), then reduce weight.
`
  },

  task: {
    de: {
      title: 'Probiere einen Supersatz',
      description: 'Integriere einen Antagonisten-Supersatz in dein nächstes Arm-Training.',
      checklist: [
        { text: 'Wähle eine Bizeps-Übung (z.B. Curls).' },
        { text: 'Wähle eine Trizeps-Übung (z.B. Pushdowns).' },
        { text: 'Führe den Bizeps-Satz aus.' },
        { text: 'Wechsle OHNE Pause direkt zum Trizeps.' },
        { text: 'Erst danach machst du Pause (90 Sek).' },
        { text: 'Wiederhole das 3 Mal.' }
      ]
    },
    en: {
      title: 'Try a Superset',
      description: 'Integrate an antagonist superset into your next arm workout.',
      checklist: [
        { text: 'Choose a Bicep exercise (e.g., Curls).' },
        { text: 'Choose a Tricep exercise (e.g., Pushdowns).' },
        { text: 'Perform the Bicep set.' },
        { text: 'Switch IMMEDIATELY to Triceps without rest.' },
        { text: 'Only then take a break (90 sec).' },
        { text: 'Repeat 3 times.' }
      ]
    }
  },

  notes: {
    de: [
      {
        front: 'Was ist ein Antagonisten-Supersatz?',
        back: 'Zwei Übungen für gegensätzliche Muskelgruppen (z.B. Brust/Rücken) direkt hintereinander.'
      },
      {
        front: 'Was ist das Ziel von Dropsätzen?',
        back: 'Maximale metabolische Erschöpfung ("Pump") und Zeiteffizienz.'
      },
      {
        front: 'Was bedeutet "3-0-1-0" beim Tempo?',
        back: '3 Sek ablassen, keine Pause, 1 Sek hoch, keine Pause.'
      }
    ],
    en: [
      {
        front: 'What is an antagonist superset?',
        back: 'Two exercises for opposing muscle groups (e.g., Chest/Back) back-to-back.'
      },
      {
        front: 'What is the goal of Drop Sets?',
        back: 'Maximum metabolic exhaustion ("Pump") and time efficiency.'
      },
      {
        front: 'What does "3-0-1-0" mean in tempo?',
        back: '3 sec down, no pause, 1 sec up, no pause.'
      }
    ]
  }
};


