import React from 'react';

export const periodizationLesson = {
  id: 'g1_m3_periodization',
  title: { 
    en: '3.6 Periodization (Long-term Planning)', 
    de: '3.6 Periodisierung (Langfristige Planung)' 
  },
  description: { 
    en: 'How to plan over months to avoid plateaus. Linear, Undulating, and Block Periodization.', 
    de: 'Wie du über Monate planst, um Plateaus zu vermeiden. Lineare, Wellenförmige und Block-Periodisierung.' 
  },
  category: 'planning',
  
  content: {
    de: `
### Modul 3.6: Periodisierung

Du kannst nicht das ganze Jahr über "Vollgas" geben. Irgendwann stagnierst du.
Periodisierung ist die Kunst, das Training in Phasen einzuteilen.

---

### 1. Lineare Periodisierung
*Der Klassiker.* Du startest mit wenig Gewicht und vielen Wiederholungen. Über Wochen hinweg erhöhst du das Gewicht und senkst die Wiederholungen.

*   **Woche 1-4 (Hypertrophie):** 3x12 Reps @ 60% 1RM (Leicht)
*   **Woche 5-8 (Kraft-Ausdauer):** 3x8 Reps @ 75% 1RM (Mittel)
*   **Woche 9-12 (Maximalkraft):** 3x5 Reps @ 85% 1RM (Schwer)
*   **Woche 13:** Deload oder neuer Zyklus.

**Gut für:** Anfänger und lineare Fortschritte.

---

### 2. Wellenförmige Periodisierung (DUP - Daily Undulating Periodization)
*Der moderne Standard.* Du wechselst die Intensität innerhalb einer Woche.

*   **Montag (Hypertrophie):** 3x12 (Leicht, Fokus Muskelgefühl)
*   **Mittwoch (Power):** 5x3 (Explosiv, Schnellkraft)
*   **Freitag (Kraft):** 4x6 (Schwer)

**Vorteil:** Du trainierst alle Eigenschaften gleichzeitig und verlierst nie das Gefühl für schweres Gewicht.
**Gut für:** Fortgeschrittene.

---

### 3. Block-Periodisierung
Du fokussierst dich für 4-6 Wochen auf **ein einziges Ziel**.

*   **Block 1 (Akkumulation):** Viel Volumen (viele Sätze/Reps), wenig Gewicht. Ziel: Muskelaufbau.
*   **Block 2 (Intensivierung):** Weniger Volumen, mehr Gewicht. Ziel: Kraftaufbau.
*   **Block 3 (Realisierung):** Sehr wenig Volumen, maximales Gewicht. Ziel: Neue Bestleistung (PR) testen.

---

### 4. Autoregulation (Intuitives Training)
Du passt das Training tagesaktuell an deine Form an.

*   *"Heute fühle ich mich schwach, ich mache nur RIR 3."*
*   *"Heute habe ich Energie, ich versuche einen PR."*
*   **Gefahr:** Man neigt dazu, faul zu sein. Erfordert Ehrlichkeit zu sich selbst.

---

### Zusammenfassung
Als Anfänger reicht meist die einfache **lineare Progression** (einfach jedes Training Gewicht draufpacken). Sobald das nicht mehr geht (nach 6-12 Monaten), ist DUP oder Block-Periodisierung der nächste logische Schritt.
`,
    en: `
### Module 3.6: Periodization

You can't go "full throttle" all year round. Eventually, you will stall.
Periodization is the art of organizing training into phases.

---

### 1. Linear Periodization
*The classic.* You start with light weight and high reps. Over weeks, you increase weight and decrease reps.

*   **Week 1-4 (Hypertrophy):** 3x12 Reps @ 60% 1RM (Light)
*   **Week 5-8 (Strength-Endurance):** 3x8 Reps @ 75% 1RM (Medium)
*   **Week 9-12 (Max Strength):** 3x5 Reps @ 85% 1RM (Heavy)
*   **Week 13:** Deload or new cycle.

**Good for:** Beginners and linear progress.

---

### 2. Daily Undulating Periodization (DUP)
*The modern standard.* You change intensity within the week.

*   **Monday (Hypertrophy):** 3x12 (Light, focus on muscle feeling)
*   **Wednesday (Power):** 5x3 (Explosive, speed strength)
*   **Friday (Strength):** 4x6 (Heavy)

**Advantage:** You train all qualities simultaneously and never lose the feel for heavy weights.
**Good for:** Intermediates.

---

### 3. Block Periodization
You focus on **one single goal** for 4-6 weeks.

*   **Block 1 (Accumulation):** High volume (many sets/reps), low weight. Goal: Muscle growth.
*   **Block 2 (Intensification):** Lower volume, higher weight. Goal: Strength gain.
*   **Block 3 (Realization):** Very low volume, maximum weight. Goal: Test new PR.

---

### 4. Autoregulation (Intuitive Training)
You adjust training daily based on your condition.

*   *"I feel weak today, I'll only do RIR 3."*
*   *"I have energy today, I'll attempt a PR."*
*   **Danger:** Tendency to be lazy. Requires honesty with yourself.

---

### Summary
As a beginner, simple **linear progression** (just adding weight every workout) is usually enough. Once that stops working (after 6-12 months), DUP or Block Periodization is the next logical step.
`
  },

  task: {
    de: {
      title: 'Erkenne deine Phase',
      description: 'Analysiere dein aktuelles Training.',
      checklist: [
        { text: 'Trainierst du seit Wochen mit denselben Wiederholungen (z.B. immer 3x10)?' },
        { text: 'Wenn ja: Versuche mal einen Zyklus mit 3x5 (schwerer) für 4 Wochen.' },
        { text: 'Notiere, wie sich deine Kraftwerte verändern.' }
      ]
    },
    en: {
      title: 'Identify Your Phase',
      description: 'Analyze your current training.',
      checklist: [
        { text: 'Have you been training with the same reps for weeks (e.g., always 3x10)?' },
        { text: 'If yes: Try a cycle with 3x5 (heavier) for 4 weeks.' },
        { text: 'Note how your strength levels change.' }
      ]
    }
  },

  notes: {
    de: [
      {
        front: 'Was ist das Ziel von Periodisierung?',
        back: 'Plateaus vermeiden und langfristigen Fortschritt sichern.'
      },
      {
        front: 'Wie funktioniert Lineare Periodisierung?',
        back: 'Gewicht hoch, Wiederholungen runter (über Zeit).'
      },
      {
        front: 'Was ist DUP?',
        back: 'Daily Undulating Periodization (Täglicher Wechsel der Intensität).'
      }
    ],
    en: [
      {
        front: 'What is the goal of periodization?',
        back: 'Avoid plateaus and ensure long-term progress.'
      },
      {
        front: 'How does Linear Periodization work?',
        back: 'Weight up, reps down (over time).'
      },
      {
        front: 'What is DUP?',
        back: 'Daily Undulating Periodization (Daily change of intensity).'
      }
    ]
  }
};


