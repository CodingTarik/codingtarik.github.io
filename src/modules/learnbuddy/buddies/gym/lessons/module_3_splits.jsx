import React from 'react';

export const splitsLesson = {
  id: 'g1_m3_splits',
  title: { 
    en: '3.1 Training Splits', 
    de: '3.1 Trainingspläne (Splits)' 
  },
  description: { 
    en: 'Full Body vs. Split? How to organize your training week.', 
    de: 'Ganzkörper vs. Split? Wie du deine Trainingswoche organisierst.' 
  },
  category: 'planning',
  
  content: {
    de: `
### Modul 3.1: Trainingspläne gestalten

"Welcher Split ist der beste?" – Die Antwort ist: Der, den du durchziehen kannst!
Jeder Muskel sollte idealerweise **2x pro Woche** trainiert werden.

---

### 1. Ganzkörperplan (GK)
*Ideal für Anfänger (2-3x pro Woche)*

Du trainierst in jeder Einheit den gesamten Körper.

<div className="my-4 p-4 bg-stone-50 dark:bg-stone-900 rounded-lg">
  <h4 className="font-bold mb-2">Beispiel (Mo, Mi, Fr):</h4>
  <ul className="list-disc list-inside text-sm space-y-1">
    <li>Kniebeuge (Beine)</li>
    <li>Bankdrücken (Druck)</li>
    <li>Rudern (Zug)</li>
    <li>Überkopfdrücken (Schulter)</li>
    <li>Plank (Core)</li>
  </ul>
</div>

**Vorteil:** Hohe Frequenz (jeder Muskel 3x/Woche), man lernt die Übungen schnell.
**Nachteil:** Einheiten können lang werden.

---

### 2. Oberkörper / Unterkörper (OK/UK)
*Ideal für Fortgeschrittene (4x pro Woche)*

Du teilst den Körper in zwei Hälften.

*   **Tag A (Oberkörper):** Brust, Rücken, Schultern, Arme.
*   **Tag B (Unterkörper):** Beine, Waden, Bauch.

<div className="my-4 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border-l-4 border-blue-500">
  <h4 className="font-bold text-blue-800 dark:text-blue-200 mb-2">🗓️ Wochenplan:</h4>
  <p className="text-sm text-blue-700 dark:text-blue-300">
    Mo: OK | Di: UK | Mi: Pause | Do: OK | Fr: UK | Sa/So: Pause
  </p>
</div>

---

### 3. Push / Pull / Legs (PPL)
*Für Ambitionierte (3-6x pro Woche)*

Der beliebteste Split im Internet.

1.  **Push:** Alles was drückt (Brust, Schulter, Trizeps).
2.  **Pull:** Alles was zieht (Rücken, Bizeps).
3.  **Legs:** Beine & Bauch.

**Vorteil:** Sehr logische Aufteilung, Muskelgruppen stören sich nicht gegenseitig.
**Nachteil:** Man muss oft ins Gym (ideal 6x, oder rotierend 3-5x).

---

### 4. Der "Bro-Split"
*Jeder Muskel 1x pro Woche (z.B. Montag = Brusttag)*

Funktioniert, ist aber für Naturals (ohne Stoff) meist **weniger effektiv**, da die Frequenz zu niedrig ist. Nach 48h ist der Muskel bereit für neuen Reiz, muss aber eine Woche warten.

---

### Fazit
*   **2-3 Tage Zeit:** Ganzkörper.
*   **4 Tage Zeit:** Oberkörper/Unterkörper.
*   **5-6 Tage Zeit:** PPL.
`,
    en: `
### Module 3.1: Designing a Training Plan (Splits)

"Which split is the best?" – The answer is: The one you can stick to!
Ideally, each muscle should be trained **twice a week**.

---

### 1. Full Body (FB)
*Ideal for Beginners (2-3x per week)*

You train the entire body in every session.

<div className="my-4 p-4 bg-stone-50 dark:bg-stone-900 rounded-lg">
  <h4 className="font-bold mb-2">Example (Mon, Wed, Fri):</h4>
  <ul className="list-disc list-inside text-sm space-y-1">
    <li>Squat (Legs)</li>
    <li>Bench Press (Push)</li>
    <li>Rows (Pull)</li>
    <li>Overhead Press (Shoulders)</li>
    <li>Plank (Core)</li>
  </ul>
</div>

**Pros:** High frequency (each muscle 3x/week), learn exercises quickly.
**Cons:** Sessions can get long.

---

### 2. Upper / Lower (UL)
*Ideal for Intermediates (4x per week)*

You split the body into two halves.

*   **Day A (Upper):** Chest, Back, Shoulders, Arms.
*   **Day B (Lower):** Legs, Calves, Abs.

<div className="my-4 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border-l-4 border-blue-500">
  <h4 className="font-bold text-blue-800 dark:text-blue-200 mb-2">🗓️ Weekly Schedule:</h4>
  <p className="text-sm text-blue-700 dark:text-blue-300">
    Mon: Upper | Tue: Lower | Wed: Rest | Thu: Upper | Fri: Lower | Sat/Sun: Rest
  </p>
</div>

---

### 3. Push / Pull / Legs (PPL)
*For Ambitious Lifters (3-6x per week)*

The most popular split on the internet.

1.  **Push:** Everything that pushes (Chest, Shoulders, Triceps).
2.  **Pull:** Everything that pulls (Back, Biceps).
3.  **Legs:** Legs & Abs.

**Pros:** Very logical split, muscle groups don't interfere.
**Cons:** Requires frequent gym visits (ideally 6x, or rotating 3-5x).

---

### 4. The "Bro-Split"
*Each muscle 1x per week (e.g., Monday = Chest Day)*

Works, but is usually **less effective** for naturals (drug-free) because frequency is too low. After 48h the muscle is ready again but has to wait a week.

---

### Conclusion
*   **2-3 Days Time:** Full Body.
*   **4 Days Time:** Upper/Lower.
*   **5-6 Days Time:** PPL.
`
  },

  task: {
    de: {
      title: 'Wähle deinen Plan',
      description: 'Entscheide dich basierend auf deinem Zeitbudget für einen Split.',
      checklist: [
        { text: 'Wie oft pro Woche kannst du REALISTISCH trainieren?' },
        { text: '2-3x -> Wähle Ganzkörper.' },
        { text: '4x -> Wähle Oberkörper/Unterkörper.' },
        { text: '5-6x -> Wähle Push/Pull/Legs.' },
        { text: 'Schreibe deine geplanten Trainingstage in deinen Kalender.' }
      ]
    },
    en: {
      title: 'Choose Your Plan',
      description: 'Decide on a split based on your time budget.',
      checklist: [
        { text: 'How often per week can you REALISTICALLY train?' },
        { text: '2-3x -> Choose Full Body.' },
        { text: '4x -> Choose Upper/Lower.' },
        { text: '5-6x -> Choose Push/Pull/Legs.' },
        { text: 'Write your planned training days in your calendar.' }
      ]
    }
  },

  notes: {
    de: [
      {
        front: 'Wie oft sollte man jeden Muskel pro Woche trainieren?',
        back: 'Ideal ist 2x pro Woche (für Protein-Synthese).'
      },
      {
        front: 'Was ist ein "Push"-Tag?',
        back: 'Übungen, bei denen man drückt (Brust, Schulter, Trizeps).'
      },
      {
        front: 'Warum ist ein Ganzkörperplan gut für Anfänger?',
        back: 'Man übt die Technik öfter (3x/Woche) und nutzt die schnelle Erholung.'
      }
    ],
    en: [
      {
        front: 'How often should you train each muscle per week?',
        back: 'Ideally 2x per week (for protein synthesis).'
      },
      {
        front: 'What is a "Push" day?',
        back: 'Exercises where you push weight (Chest, Shoulders, Triceps).'
      },
      {
        front: 'Why is a Full Body plan good for beginners?',
        back: 'You practice technique more often (3x/week) and utilize fast recovery.'
      }
    ]
  }
};


