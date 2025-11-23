import React from 'react';

export const intensityLesson = {
  id: 'g1_m3_intensity',
  title: { 
    en: '3.3 Intensity (RIR & Failure)', 
    de: '3.3 Intensität (RIR & Muskelversagen)' 
  },
  description: { 
    en: 'How hard should you train? Understanding Reps In Reserve (RIR).', 
    de: 'Wie hart musst du trainieren? Reps In Reserve (RIR) verstehen.' 
  },
  category: 'planning',
  
  content: {
    de: `
### Modul 3.3: Intensität steuern

Viele Anfänger trainieren zu leicht ("Kaffeekränzchen") oder zu hart ("jedes Training bis zum Kotzen"). Die Wahrheit liegt, wie so oft, in der Mitte.

---

### 1. Wie viele Wiederholungen? (Rep Ranges)
Es gibt drei Hauptbereiche:

*   **1-5 Reps:** Fokus auf **Maximalkraft** (Powerlifting).
*   **6-12 Reps:** Der "Sweet Spot" für **Muskelaufbau** (Hypertrophie).
*   **15+ Reps:** Fokus auf **Kraftausdauer**.

**Für die meisten:** Trainiere hauptsächlich im Bereich **6-15 Reps**. Das gibt dir den besten Mix aus Kraft und Masse, ohne die Gelenke mit extremen Gewichten zu zerstören.

---

### 2. RIR - Reps In Reserve (Wiederholungen im Tank)
Das beste Tool, um deine Intensität zu messen.

Frage dich nach jedem Satz: *"Wie viele saubere Wiederholungen hätte ich noch geschafft?"*

*   **RIR 5+:** Zu leicht. Das ist Aufwärmen. Kein Wachstumsreiz.
*   **RIR 3:** Guter Einstieg.
*   **RIR 1-2 (Optimal):** Du hörst auf, wenn es richtig schwer wird, aber die Technik noch sauber ist. **Hier passiert das Wachstum.**
*   **RIR 0 (Muskelversagen):** Die Hantel bewegt sich keinen Millimeter mehr.

<div className="my-6 p-4 bg-red-50 dark:bg-red-900/20 rounded-xl border-l-4 border-red-500">
  <h4 className="font-bold text-red-800 dark:text-red-200 mb-2">🔥 Muss ich bis zum Muskelversagen trainieren?</h4>
  <p className="text-sm text-red-700 dark:text-red-300">
    Nein, nicht immer! Studien zeigen, dass 1-2 Reps vor dem Versagen fast denselben Effekt haben, aber viel weniger Ermüdung erzeugen.
    <br/><br/>
    <strong>Faustregel:</strong>
    <ul className="list-disc list-inside mt-1">
      <li>Schwere Grundübungen (Kniebeuge/Kreuzheben): <strong>RIR 2-3</strong> (Sicherheit!).</li>
      <li>Isolationsübungen (Curls/Seitheben): <strong>RIR 0-1</strong> (Hier kannst du ans Limit gehen).</li>
    </ul>
  </p>
</div>

---

### 3. Deload (Die aktive Erholung)
Du kannst nicht jede Woche Vollgas geben. Nach 4-8 Wochen härtem Training braucht der Körper eine Pause.

**Anzeichen für einen Deload:**
*   Du wirst schwächer oder stagnierst.
*   Gelenke tun weh.
*   Du fühlst dich dauernd müde.
*   Keine Lust auf Training.

**Was tun?**
Mach eine Woche lang "Halbgas":
*   Gleiche Übungen.
*   Nur 50% der Sätze oder 80% des Gewichts.
*   Fokus auf Technik und Regeneration.
Danach kommst du oft stärker zurück!
`,
    en: `
### Module 3.3: Managing Intensity

Many beginners train too lightly ("Coffee break") or too hard ("puking every session"). The truth lies, as usual, in the middle.

---

### 1. How many Repetitions? (Rep Ranges)
There are three main ranges:

*   **1-5 Reps:** Focus on **Max Strength** (Powerlifting).
*   **6-12 Reps:** The "Sweet Spot" for **Muscle Growth** (Hypertrophy).
*   **15+ Reps:** Focus on **Muscular Endurance**.

**For most people:** Train mainly in the **6-15 Reps** range. This gives you the best mix of strength and mass without destroying joints with extreme weights.

---

### 2. RIR - Reps In Reserve (Reps in the Tank)
The best tool to measure your intensity.

Ask yourself after every set: *"How many clean reps could I have done?"*

*   **RIR 5+:** Too light. That's a warm-up. No growth stimulus.
*   **RIR 3:** Good entry point.
*   **RIR 1-2 (Optimal):** You stop when it gets really hard, but technique is still clean. **This is where growth happens.**
*   **RIR 0 (Failure):** The weight doesn't move another millimeter.

<div className="my-6 p-4 bg-red-50 dark:bg-red-900/20 rounded-xl border-l-4 border-red-500">
  <h4 className="font-bold text-red-800 dark:text-red-200 mb-2">🔥 Do I have to train to failure?</h4>
  <p className="text-sm text-red-700 dark:text-red-300">
    No, not always! Studies show that 1-2 reps before failure have almost the same effect but generate much less fatigue.
    <br/><br/>
    <strong>Rule of Thumb:</strong>
    <ul className="list-disc list-inside mt-1">
      <li>Heavy Compounds (Squats/Deadlifts): <strong>RIR 2-3</strong> (Safety!).</li>
      <li>Isolation Exercises (Curls/Lateral Raises): <strong>RIR 0-1</strong> (Here you can go to the limit).</li>
    </ul>
  </p>
</div>

---

### 3. Deload (Active Recovery)
You can't go full throttle every week. After 4-8 weeks of hard training, the body needs a break.

**Signs you need a Deload:**
*   You are getting weaker or stalling.
*   Joints hurt.
*   You feel constantly tired.
*   No motivation to train.

**What to do?**
Go "half throttle" for a week:
*   Same exercises.
*   Only 50% of sets or 80% of weight.
*   Focus on technique and regeneration.
You often come back stronger afterwards!
`
  },

  task: {
    de: {
      title: 'RIR schätzen lernen',
      description: 'Teste deine Einschätzung beim nächsten Training.',
      checklist: [
        { text: 'Mache einen Satz bis du denkst "noch 2 gehen" (RIR 2).' },
        { text: 'Bitte einen Spotter (Partner) dich zu sichern.' },
        { text: 'Versuche nun wirklich so viele wie möglich zu machen.' },
        { text: 'Waren es wirklich noch 2? Oder doch 5? (Die meisten unterschätzen sich!).' }
      ]
    },
    en: {
      title: 'Learn to estimate RIR',
      description: 'Test your estimation in the next workout.',
      checklist: [
        { text: 'Do a set until you think "2 more left" (RIR 2).' },
        { text: 'Ask a spotter (partner) to secure you.' },
        { text: 'Now try to do as many as possible really.' },
        { text: 'Was it really 2 more? Or 5? (Most people underestimate themselves!).' }
      ]
    }
  },

  notes: {
    de: [
      {
        front: 'Was bedeutet RIR?',
        back: 'Reps In Reserve (Wie viele Wiederholungen noch möglich gewesen wären).'
      },
      {
        front: 'Welcher RIR-Bereich ist optimal für Muskelaufbau?',
        back: 'RIR 1-2 (Nah am Versagen, aber nicht ganz).'
      },
      {
        front: 'Was ist ein Deload?',
        back: 'Eine geplante Woche mit leichterem Training zur Erholung.'
      }
    ],
    en: [
      {
        front: 'What does RIR mean?',
        back: 'Reps In Reserve (How many reps were still possible).'
      },
      {
        front: 'Which RIR range is optimal for muscle growth?',
        back: 'RIR 1-2 (Close to failure, but not quite).'
      },
      {
        front: 'What is a Deload?',
        back: 'A planned week with lighter training for recovery.'
      }
    ]
  }
};

