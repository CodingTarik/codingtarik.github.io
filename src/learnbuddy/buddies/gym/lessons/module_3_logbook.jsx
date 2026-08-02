import React from 'react';

export const logbookLesson = {
  id: 'g1_m3_logbook',
  title: { 
    en: '3.4 The Training Log', 
    de: '3.4 Das Logbuch' 
  },
  description: { 
    en: 'You can\'t improve what you don\'t measure. Why tracking is essential.', 
    de: 'Was du nicht misst, kannst du nicht verbessern. Warum Tracking essentiell ist.' 
  },
  category: 'planning',
  
  content: {
    de: `
### Modul 3.4: Das Trainings-Logbuch

Stell dir vor, du fährst mit dem Auto, aber der Tacho ist abgeklebt. Woher weißt du, ob du schneller wirst?
Genau so trainieren die meisten Leute im Gym. Sie gehen rein, machen "irgendwas", fühlen sich gut und gehen heim.

Das ist **Bewegung**, aber kein **Training**. Training erfordert **Planung und Messung**.

---

### Warum aufschreiben?

1.  **Progressive Overload garantieren:** Du musst wissen, was du letzte Woche gemacht hast, um es diese Woche zu schlagen.
    *   *Letzte Woche: 60kg x 9 Reps.*
    *   *Heute Ziel: 60kg x 10 Reps.*
2.  **Motivation:** Es ist extrem befriedigend, im Buch zurückzublättern und zu sehen, dass man vor 3 Monaten noch 20kg schwächer war.
3.  **Objektivität:** Gefühle lügen. Zahlen nicht. Du fühlst dich vielleicht schwach, bist aber laut Logbuch stärker geworden.

---

### Was muss rein?

<div className="p-5 bg-stone-50 dark:bg-stone-900 rounded-lg border border-stone-200 dark:border-stone-700 my-4">
  <h4 className="font-bold text-stone-800 dark:text-stone-200 mb-2">📝 Das Minimal-Logbuch:</h4>
  <ul className="list-disc list-inside text-sm text-stone-600 dark:text-stone-400">
    <li>Datum</li>
    <li>Übung</li>
    <li>Gewicht</li>
    <li>Sätze</li>
    <li>Wiederholungen</li>
  </ul>
</div>

**Profis notieren zusätzlich:**
*   **RIR:** Wie schwer war es? (z.B. "@8" für RIR 2).
*   **Befinden:** "Schlecht geschlafen", "Schulter zwickt".
*   **Pausenzeiten.**

---

### Analog vs. Digital?

*   **App (Empfohlen):** Praktisch, rechnet oft automatisch das Volumen aus, hat Timer.
    *   *Empfehlungen:* **Strong**, **Hevy** (beide haben gute Gratis-Versionen), **Jefit**.
*   **Notizbuch:** Oldschool, Akku geht nie leer, weniger Ablenkung durchs Handy.
*   **Excel/Notes:** Funktioniert auch.

**Fazit:** Das Werkzeug ist egal. Hauptsache du nutzt es **JEDES** Training.

<div className="my-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl border-l-4 border-blue-500">
  <h4 className="font-bold text-blue-800 dark:text-blue-200 mb-2">💡 Der "Tracker" Tab</h4>
  <p className="text-sm text-blue-700 dark:text-blue-300">
    Der GymBuddy hat einen eingebauten **Workout Tracker** (siehe Tab unten). Du kannst ihn nutzen, um deine Trainingseinheiten direkt hier zu planen und abzuhaken!
  </p>
</div>
`,
    en: `
### Module 3.4: The Training Log

Imagine driving a car, but the speedometer is taped over. How do you know if you're getting faster?
That's exactly how most people train in the gym. They go in, do "something", feel good, and go home.

That is **Exercise**, but not **Training**. Training requires **Planning and Measurement**.

---

### Why write it down?

1.  **Guarantee Progressive Overload:** You need to know what you did last week to beat it this week.
    *   *Last week: 60kg x 9 Reps.*
    *   *Today's Goal: 60kg x 10 Reps.*
2.  **Motivation:** It is extremely satisfying to flip back in the book and see that you were 20kg weaker 3 months ago.
3.  **Objectivity:** Feelings lie. Numbers don't. You might feel weak, but according to the logbook, you got stronger.

---

### What goes in?

<div className="p-5 bg-stone-50 dark:bg-stone-900 rounded-lg border border-stone-200 dark:border-stone-700 my-4">
  <h4 className="font-bold text-stone-800 dark:text-stone-200 mb-2">📝 The Minimal Logbook:</h4>
  <ul className="list-disc list-inside text-sm text-stone-600 dark:text-stone-400">
    <li>Date</li>
    <li>Exercise</li>
    <li>Weight</li>
    <li>Sets</li>
    <li>Reps</li>
  </ul>
</div>

**Pros also note:**
*   **RIR:** How hard was it? (e.g., "@8" for RIR 2).
*   **Condition:** "Slept badly", "Shoulder twinges".
*   **Rest times.**

---

### Analog vs. Digital?

*   **App (Recommended):** Convenient, often calculates volume automatically, has timer.
    *   *Recommendations:* **Strong**, **Hevy** (both have good free versions), **Jefit**.
*   **Notebook:** Oldschool, battery never dies, less distraction from phone.
*   **Excel/Notes:** Also works.

**Conclusion:** The tool doesn't matter. As long as you use it **EVERY** workout.

<div className="my-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl border-l-4 border-blue-500">
  <h4 className="font-bold text-blue-800 dark:text-blue-200 mb-2">💡 The "Tracker" Tab</h4>
  <p className="text-sm text-blue-700 dark:text-blue-300">
    GymBuddy has a built-in **Workout Tracker** (see tab below). You can use it to plan and check off your workouts directly here!
  </p>
</div>
`
  },

  task: {
    de: {
      title: 'Starte dein Logbuch',
      description: 'Richte dein Tracking-Tool ein.',
      checklist: [
        { text: 'Entscheide dich: App oder Papier?' },
        { text: 'Wenn App: Lade Strong oder Hevy herunter (oder nutze den GymBuddy Tracker).' },
        { text: 'Erstelle dein erstes Workout (oder kopiere einen Plan).' },
        { text: 'Trage dein nächstes Training ein.' }
      ]
    },
    en: {
      title: 'Start Your Logbook',
      description: 'Set up your tracking tool.',
      checklist: [
        { text: 'Decide: App or Paper?' },
        { text: 'If App: Download Strong or Hevy (or use GymBuddy Tracker).' },
        { text: 'Create your first workout (or copy a plan).' },
        { text: 'Enter your next workout.' }
      ]
    }
  },

  notes: {
    de: [
      {
        front: 'Warum ist ein Logbuch wichtig?',
        back: 'Um Progressive Overload sicherzustellen (man vergisst die Zahlen sonst).'
      },
      {
        front: 'Was ist der Unterschied zwischen "Bewegung" und "Training"?',
        back: 'Training ist geplant und zielt auf Fortschritt ab. Bewegung ist nur Aktivität.'
      },
      {
        front: 'Welche Apps werden empfohlen?',
        back: 'Strong, Hevy, Jefit.'
      }
    ],
    en: [
      {
        front: 'Why is a logbook important?',
        back: 'To ensure Progressive Overload (you forget the numbers otherwise).'
      },
      {
        front: 'What is the difference between "Exercise" and "Training"?',
        back: 'Training is planned and aims for progress. Exercise is just activity.'
      },
      {
        front: 'Which apps are recommended?',
        back: 'Strong, Hevy, Jefit.'
      }
    ]
  }
};


