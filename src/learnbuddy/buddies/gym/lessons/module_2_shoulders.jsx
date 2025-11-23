import React from 'react';

export const shouldersLesson = {
  id: 'g1_m2_shoulders',
  title: { 
    en: '2.3 Shoulders (Deltoids)', 
    de: '2.3 Schultern (Deltoideus)' 
  },
  description: { 
    en: 'Complete shoulder development: Overhead pressing, side delts for width, and rear delts for health.', 
    de: 'Komplettes Schultertraining: Überkopfdrücken, seitliche Schulter für Breite und hintere Schulter für Gesundheit.' 
  },
  category: 'exercises',
  
  content: {
    de: `
### Modul 2.3: Schultern (Deltoideus)

Breite Schultern sind das Kennzeichen eines athletischen Körpers. Sie lassen die Taille schmaler wirken (V-Form).

**Anatomie:** Der Deltamuskel hat drei Köpfe:
1.  **Vordere Schulter** (Anterior): Drücken.
2.  **Seitliche Schulter** (Lateral): Arm heben (Breite).
3.  **Hintere Schulter** (Posterior): Arm nach hinten ziehen (Haltung).

---

### 1. Vordere Schulter (Drücken)

Die Basis für Schulterkraft. Wird auch beim Bankdrücken stark mittrainiert.

<div className="p-5 bg-stone-50 dark:bg-stone-900 rounded-lg border border-stone-200 dark:border-stone-700 my-4">
  <h4 className="font-bold text-stone-800 dark:text-stone-200 mb-2">🏋️ Überkopfdrücken (Overhead Press / OHP)</h4>
  <p className="text-sm text-stone-600 dark:text-stone-400 mb-2">
    (Auch Military Press genannt). Du drückst die Langhantel im Stehen über den Kopf.
  </p>
  <div className="bg-red-50 dark:bg-red-900/20 p-3 rounded text-sm text-red-800 dark:text-red-200">
    <strong>Wichtig:</strong> Spanne Po und Bauch fest an ("kein Hohlkreuz!"). Kopf leicht zurücknehmen, wenn die Stange passiert, dann "durch das Fenster" schauen.
  </div>
</div>

*   **Kurzhantel-Schulterdrücken:** Sitzend oder stehend. Sicherer für Anfänger und schonender für Schultergelenke.

---

### 2. Seitliche Schulter (Für die "Kanonenkugel"-Optik)

Dieser Teil macht dich breit. Er wird durch Drückübungen kaum trainiert, daher brauchst du **Seitheben**.

<div className="my-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl border-l-4 border-blue-500">
  <h4 className="font-bold text-blue-800 dark:text-blue-200 mb-2">🦋 Seitheben (Lateral Raises)</h4>
  <p className="text-sm text-blue-700 dark:text-blue-300">
    Die wichtigste Übung für optische Breite.
  </p>
  <ul className="list-disc list-inside mt-2 text-sm text-blue-700 dark:text-blue-300">
    <li><strong>Technik-Hack:</strong> Denke nicht "Gewicht hochheben", sondern "Wände wegschieben".</li>
    <li>Der Ellenbogen führt die Bewegung, nicht die Hand. (Wie eine Wasserkanne ausgießen).</li>
    <li>Lieber leichtes Gewicht und saubere Technik! Kein Schwung.</li>
  </ul>
</div>

---

### 3. Hintere Schulter (Die vergessene Seite)

Essentiell für gesunde Schultern und gegen den "Rundrücken" (Computer-Haltung).

*   **Face Pulls:** Am Kabelzug. Ziehe das Seil auf Augenhöhe zum Gesicht. *Der ultimative "Prehab"-Move für Schultergesundheit.*
*   **Reverse Flys:** Vorgebeugt mit Kurzhanteln oder an der Maschine (Butterfly Reverse).

---

### Beispiel-Schulter-Workout

1.  **Überkopfdrücken (Langhantel):** 3 Sätze x 6-8 Wiederholungen (Schwer)
2.  **Seitheben (Kurzhantel):** 3 Sätze x 12-15 Wiederholungen (Sauber!)
3.  **Face Pulls:** 3 Sätze x 15-20 Wiederholungen (Fokus auf Haltung)

`,
    en: `
### Module 2.3: Shoulders (Deltoids)

Broad shoulders are the hallmark of an athletic physique. They make the waist appear smaller (V-taper).

**Anatomy:** The deltoid muscle has three heads:
1.  **Front Delt** (Anterior): Pushing.
2.  **Side Delt** (Lateral): Lifting arm (Width).
3.  **Rear Delt** (Posterior): Pulling arm back (Posture).

---

### 1. Front Delt (Pressing)

The foundation for shoulder strength. Also heavily trained during bench press.

<div className="p-5 bg-stone-50 dark:bg-stone-900 rounded-lg border border-stone-200 dark:border-stone-700 my-4">
  <h4 className="font-bold text-stone-800 dark:text-stone-200 mb-2">🏋️ Overhead Press (OHP)</h4>
  <p className="text-sm text-stone-600 dark:text-stone-400 mb-2">
    (Also called Military Press). You press the barbell overhead while standing.
  </p>
  <div className="bg-red-50 dark:bg-red-900/20 p-3 rounded text-sm text-red-800 dark:text-red-200">
    <strong>Important:</strong> Squeeze glutes and abs tight ("no arched back!"). Tilt head back slightly as bar passes, then look "through the window".
  </div>
</div>

*   **Dumbbell Shoulder Press:** Seated or standing. Safer for beginners and easier on shoulder joints.

---

### 2. Side Delt (For the "Cannonball" Look)

This part makes you wide. It is barely trained by pressing exercises, so you need **Lateral Raises**.

<div className="my-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl border-l-4 border-blue-500">
  <h4 className="font-bold text-blue-800 dark:text-blue-200 mb-2">🦋 Lateral Raises</h4>
  <p className="text-sm text-blue-700 dark:text-blue-300">
    The most important exercise for visual width.
  </p>
  <ul className="list-disc list-inside mt-2 text-sm text-blue-700 dark:text-blue-300">
    <li><strong>Technique Hack:</strong> Don't think "lift weight up", think "push walls away".</li>
    <li>The elbow leads the movement, not the hand. (Like pouring a watering can).</li>
    <li>Better light weight and clean technique! No momentum.</li>
  </ul>
</div>

---

### 3. Rear Delt (The Forgotten Side)

Essential for healthy shoulders and against "rounded back" (computer posture).

*   **Face Pulls:** At cable station. Pull rope to eye level towards face. *The ultimate "prehab" move for shoulder health.*
*   **Reverse Flys:** Bent over with dumbbells or at machine (Reverse Pec Deck).

---

### Example Shoulder Workout

1.  **Overhead Press (Barbell):** 3 sets x 6-8 reps (Heavy)
2.  **Lateral Raises (Dumbbell):** 3 sets x 12-15 reps (Clean!)
3.  **Face Pulls:** 3 sets x 15-20 reps (Focus on posture)
    `
  },

  task: {
    de: {
      title: 'Technik-Check: Seitheben',
      description: 'Meistere die wichtigste Übung für Schulterbreite ohne abzufälschen.',
      checklist: [
        { text: 'Nimm zwei sehr leichte Hanteln (oder Wasserflaschen).' },
        { text: 'Stehe stabil, Oberkörper leicht nach vorne geneigt.' },
        { text: 'Hebe die Arme seitlich hoch, Ellenbogen leicht gebeugt.' },
        { text: 'Führe mit dem Ellenbogen (er ist der höchste Punkt).' },
        { text: 'Halte oben kurz an und senke langsam ab.' }
      ]
    },
    en: {
      title: 'Technique Check: Lateral Raises',
      description: 'Master the most important exercise for shoulder width without cheating.',
      checklist: [
        { text: 'Take two very light dumbbells (or water bottles).' },
        { text: 'Stand stable, torso slightly leaned forward.' },
        { text: 'Lift arms to the side, elbows slightly bent.' },
        { text: 'Lead with the elbow (it is the highest point).' },
        { text: 'Hold briefly at the top and lower slowly.' }
      ]
    }
  },

  notes: {
    de: [
      {
        front: 'Welche 3 Teile hat der Schultermuskel?',
        back: 'Vordere (Drücken), Seitliche (Breite), Hintere (Haltung).'
      },
      {
        front: 'Warum ist die hintere Schulter so wichtig?',
        back: 'Für die Schultergesundheit und eine aufrechte Haltung (wirkt dem "Computer-Rücken" entgegen).'
      },
      {
        front: 'Was ist der häufigste Fehler beim Seitheben?',
        back: 'Zu viel Gewicht und Schwung (Trap übernimmt die Arbeit) oder Hand höher als Ellenbogen.'
      }
    ],
    en: [
      {
        front: 'What are the 3 parts of the shoulder muscle?',
        back: 'Front (Pressing), Side (Width), Rear (Posture).'
      },
      {
        front: 'Why is the rear delt so important?',
        back: 'For shoulder health and upright posture (counteracts "computer back").'
      },
      {
        front: 'What is the most common mistake in Lateral Raises?',
        back: 'Too much weight and momentum (trap takes over) or hand higher than elbow.'
      }
    ]
  }
};

