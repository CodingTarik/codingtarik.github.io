import React from 'react';

export const progressionLesson = {
  id: 'g1_m3_progression',
  title: { 
    en: '3.2 Progressive Overload', 
    de: '3.2 Progressive Overload' 
  },
  description: { 
    en: 'The most important principle of building muscle: How to get stronger.', 
    de: 'Das wichtigste Prinzip für Muskelaufbau: Wie du stärker wirst.' 
  },
  category: 'planning',
  
  content: {
    de: `
### Modul 3.2: Progressive Overload (Der Heilige Gral)

Wenn du aus diesem ganzen Kurs nur EINE Sache mitnimmst, dann das:
**Der Körper baut nur Muskeln auf, wenn er gezwungen wird, sich an eine höhere Belastung anzupassen.**

Wenn du heute 50kg drückst und in einem Jahr immer noch 50kg drückst, wirst du **exakt gleich aussehen**.

---

### Wie steigert man sich? (Die 5 Methoden)

Es geht nicht nur darum, mehr Gewicht aufzulegen.

1.  **Gewicht erhöhen (Intensity):**
    *   Woche 1: 60kg x 10
    *   Woche 2: **62.5kg** x 10
    *   *Der Klassiker.*

2.  **Wiederholungen erhöhen (Volume):**
    *   Woche 1: 60kg x 10
    *   Woche 2: 60kg x **11**
    *   *Oft einfacher als Gewicht zu steigern.*

3.  **Sätze erhöhen (Volume):**
    *   Woche 1: 3 Sätze
    *   Woche 2: **4 Sätze**
    *   *Vorsicht: Erhöht die Zeit im Gym.*

4.  **Pausen verkürzen (Density):**
    *   Gleiche Arbeit in weniger Zeit. Gut für Kondition/Stoffwechsel.

5.  **Bessere Technik (Efficiency):**
    *   Gleiches Gewicht, aber langsamere Ausführung oder größere Bewegung (ROM).

---

### Das "Double Progression" Modell
*Die beste Methode für Anfänger/Fortgeschrittene.*

Du hast einen Ziel-Bereich, z.B. **8-12 Wiederholungen**.

1.  Wähle ein Gewicht, mit dem du 8 saubere Reps schaffst.
2.  Bleibe bei diesem Gewicht, bis du 12 saubere Reps schaffst.
3.  Erst DANN erhöhst du das Gewicht.
4.  Du fällst wahrscheinlich wieder auf 8 Reps zurück.
5.  Wiederhole den Prozess.

<div className="my-6 p-4 bg-green-50 dark:bg-green-900/20 rounded-xl border-l-4 border-green-500">
  <h4 className="font-bold text-green-800 dark:text-green-200 mb-2">📈 Beispiel Double Progression:</h4>
  <ul className="text-sm text-green-700 dark:text-green-300 space-y-1">
    <li>Training 1: 60kg - 8, 8, 8 Reps</li>
    <li>Training 2: 60kg - 9, 9, 8 Reps</li>
    <li>Training 3: 60kg - 10, 9, 9 Reps</li>
    <li>...</li>
    <li>Training X: 60kg - 12, 12, 12 Reps (Ziel erreicht!)</li>
    <li>Training Y: <strong>62.5kg</strong> - 8, 8, 8 Reps (Neuer Zyklus)</li>
  </ul>
</div>

---

### Was tun bei Stillstand (Plateaus)?
Wenn es mal nicht weitergeht:
*   **Technik checken:** Fälschst du ab?
*   **Erholung checken:** Schlaf? Essen? Stress?
*   **Deload:** Mach mal eine Woche Pause (leichtes Training).
`,
    en: `
### Module 3.2: Progressive Overload (The Holy Grail)

If you only take ONE thing from this course, let it be this:
**The body only builds muscle if it is forced to adapt to a higher load.**

If you press 50kg today and still press 50kg in a year, you will look **exactly the same**.

---

### How to Progress? (The 5 Methods)

It's not just about adding weight.

1.  **Increase Weight (Intensity):**
    *   Week 1: 60kg x 10
    *   Week 2: **62.5kg** x 10
    *   *The classic.*

2.  **Increase Reps (Volume):**
    *   Week 1: 60kg x 10
    *   Week 2: 60kg x **11**
    *   *Often easier than adding weight.*

3.  **Increase Sets (Volume):**
    *   Week 1: 3 Sets
    *   Week 2: **4 Sets**
    *   *Caution: Increases time in gym.*

4.  **Shorten Rest (Density):**
    *   Same work in less time. Good for conditioning/metabolism.

5.  **Better Technique (Efficiency):**
    *   Same weight, but slower execution or larger range of motion (ROM).

---

### The "Double Progression" Model
*The best method for beginners/intermediates.*

You have a target range, e.g., **8-12 repetitions**.

1.  Choose a weight you can do for 8 clean reps.
2.  Stay with this weight until you can do 12 clean reps.
3.  Only THEN increase the weight.
4.  You will likely fall back to 8 reps.
5.  Repeat the process.

<div className="my-6 p-4 bg-green-50 dark:bg-green-900/20 rounded-xl border-l-4 border-green-500">
  <h4 className="font-bold text-green-800 dark:text-green-200 mb-2">📈 Example Double Progression:</h4>
  <ul className="text-sm text-green-700 dark:text-green-300 space-y-1">
    <li>Session 1: 60kg - 8, 8, 8 Reps</li>
    <li>Session 2: 60kg - 9, 9, 8 Reps</li>
    <li>Session 3: 60kg - 10, 9, 9 Reps</li>
    <li>...</li>
    <li>Session X: 60kg - 12, 12, 12 Reps (Goal reached!)</li>
    <li>Session Y: <strong>62.5kg</strong> - 8, 8, 8 Reps (New Cycle)</li>
  </ul>
</div>

---

### What to do when stuck (Plateaus)?
If progress stops:
*   **Check Technique:** Are you cheating?
*   **Check Recovery:** Sleep? Food? Stress?
*   **Deload:** Take a week off (light training).
`
  },

  task: {
    de: {
      title: 'Plane deinen nächsten Fortschritt',
      description: 'Schaue in dein letztes Training und setze ein Ziel für das nächste.',
      checklist: [
        { text: 'Nimm eine Übung (z.B. Bankdrücken).' },
        { text: 'Was hast du letztes Mal geschafft? (z.B. 3x8 mit 50kg).' },
        { text: 'Ziel für nächstes Mal: 3x9 mit 50kg ODER 3x8 mit 52.5kg.' },
        { text: 'Schreibe dieses Ziel auf (visualisiere es!).' }
      ]
    },
    en: {
      title: 'Plan Your Next Progress',
      description: 'Look at your last workout and set a goal for the next one.',
      checklist: [
        { text: 'Pick one exercise (e.g., Bench Press).' },
        { text: 'What did you do last time? (e.g., 3x8 with 50kg).' },
        { text: 'Goal for next time: 3x9 with 50kg OR 3x8 with 52.5kg.' },
        { text: 'Write this goal down (visualize it!).' }
      ]
    }
  },

  notes: {
    de: [
      {
        front: 'Was ist Progressive Overload?',
        back: 'Die stetige Steigerung der Trainingsbelastung über Zeit.'
      },
      {
        front: 'Wie funktioniert "Double Progression"?',
        back: 'Erst Wiederholungen steigern (bis Obergrenze), dann Gewicht steigern.'
      },
      {
        front: 'Was passiert, wenn man das Gewicht nie steigert?',
        back: 'Der Muskel passt sich an und wächst nicht weiter (Erhaltung).'
      }
    ],
    en: [
      {
        front: 'What is Progressive Overload?',
        back: 'The continuous increase of training load over time.'
      },
      {
        front: 'How does "Double Progression" work?',
        back: 'First increase reps (to upper limit), then increase weight.'
      },
      {
        front: 'What happens if you never increase the weight?',
        back: 'The muscle adapts and stops growing (maintenance).'
      }
    ]
  }
};


