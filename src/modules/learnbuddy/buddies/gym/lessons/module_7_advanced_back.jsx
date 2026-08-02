import React from 'react';

export const advancedBackLesson = {
  id: 'g1_m7_adv_back',
  title: { 
    en: '7.2 Advanced Back Training', 
    de: '7.2 Fortgeschrittenes Rückentraining' 
  },
  description: { 
    en: 'Row variations, pull-up progressions, lat isolation, deadlift variations for a complete back.', 
    de: 'Rudervarianten, Klimmzug-Progressionen, Lat-Isolation, Kreuzhebe-Varianten für einen kompletten Rücken.' 
  },
  category: 'advanced_bodybuilding',
  
  content: {
    de: `
### Modul 7.2: Fortgeschrittenes Rückentraining

Der Rücken ist die größte Muskelgruppe des Oberkörpers – und die komplexeste. Ein fortgeschrittener Rücken erfordert gezieltes Training in drei Dimensionen: Breite (Lats), Dichte/Dicke (Traps/Rhomboide) und unterer Rücken (Erector Spinae).

---

### 1. Pull-Up Progressionen (Klimmzug-Varianten)

<div className="space-y-4 my-6">

<div className="p-5 bg-stone-50 dark:bg-stone-900 rounded-lg border border-stone-200 dark:border-stone-700">
  <h4 className="font-bold text-stone-800 dark:text-stone-200 mb-2">🧗 Vom Anfänger zum Fortgeschrittenen</h4>
  <p className="text-sm text-stone-600 dark:text-stone-400 mb-2">
    Klimmzüge sind DIE Übung für den Lat. Hier ist die Progression:
  </p>
  <ul className="text-sm text-stone-500 dark:text-stone-500 list-disc list-inside space-y-1">
    <li><strong>Stufe 1:</strong> Assisted Pull-ups (Band oder Maschine)</li>
    <li><strong>Stufe 2:</strong> Bodyweight Pull-ups (3x8-12)</li>
    <li><strong>Stufe 3:</strong> Weighted Pull-ups (Gewichtsgürtel, +5-20kg)</li>
    <li><strong>Stufe 4:</strong> Tempo Pull-ups (3 Sek. runter, 1 Sek. Pause unten)</li>
    <li><strong>Stufe 5:</strong> L-Sit Pull-ups / Typewriter Pull-ups (maximale Kontrolle)</li>
  </ul>
</div>

<div className="p-5 bg-stone-50 dark:bg-stone-900 rounded-lg border border-stone-200 dark:border-stone-700">
  <h4 className="font-bold text-stone-800 dark:text-stone-200 mb-2">🔄 Griffvarianten und ihre Wirkung</h4>
  <ul className="text-sm text-stone-500 dark:text-stone-500 list-disc list-inside space-y-1">
    <li><strong>Weiter Obergriff:</strong> Maximale Lat-Breite. Klassischer Pull-up.</li>
    <li><strong>Enger Untergriff (Chin-up):</strong> Mehr Bizeps-Beteiligung, trotzdem exzellent für den Lat.</li>
    <li><strong>Neutraler Griff (parallel):</strong> Schulterfreundlichste Variante. Gleiche Lat-Aktivierung.</li>
    <li><strong>Mixed Grip / Towel Grip:</strong> Für Griffkraft und Unterarmentwicklung.</li>
  </ul>
</div>

</div>

---

### 2. Ruder-Varianten für maximale Dichte

<div className="space-y-4 my-6">

<div className="p-5 bg-stone-50 dark:bg-stone-900 rounded-lg border border-stone-200 dark:border-stone-700">
  <h4 className="font-bold text-stone-800 dark:text-stone-200 mb-2">🏋️ Langhantel-Varianten</h4>
  <ul className="text-sm text-stone-500 dark:text-stone-500 list-disc list-inside space-y-1">
    <li><strong>Pendlay Row:</strong> Stange berührt jede Rep den Boden. Explosiv hochziehen. Massiver Kraftaufbau.</li>
    <li><strong>Yates Row (Untergriff):</strong> 45°-Neigung, Untergriff. Mehr unterer Lat und Bizeps-Beteiligung.</li>
    <li><strong>Seal Row (Auf Bank liegend):</strong> Bauchlage auf erhöhter Bank. Eliminiert Schwung komplett. Reines Rückentraining.</li>
    <li><strong>T-Bar Row:</strong> Landmine oder T-Bar Maschine. Erlaubt schwere Gewichte mit neutralem Griff.</li>
  </ul>
</div>

<div className="p-5 bg-stone-50 dark:bg-stone-900 rounded-lg border border-stone-200 dark:border-stone-700">
  <h4 className="font-bold text-stone-800 dark:text-stone-200 mb-2">💪 Kurzhantel- & Kabel-Varianten</h4>
  <ul className="text-sm text-stone-500 dark:text-stone-500 list-disc list-inside space-y-1">
    <li><strong>Meadows Row:</strong> Einarmig an der Landmine. Rudern seitlich zur Hüfte. Exzellent für den unteren Lat.</li>
    <li><strong>Chest-Supported Row:</strong> Brust auf Incline-Bank. Kein Schwung möglich. Isolation pur.</li>
    <li><strong>Single-Arm Cable Row:</strong> Kabel ermöglicht konstante Spannung und maximale Rotation.</li>
    <li><strong>Face Pull + External Rotation:</strong> Für Rear Delts, Traps und Schultergesundheit. Unverzichtbar!</li>
  </ul>
</div>

</div>

---

### 3. Lat-Isolation

<div className="my-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl border-l-4 border-blue-500">
  <h4 className="font-bold text-blue-800 dark:text-blue-200 mb-2">🎯 Straight-Arm Pulldown (Überzug am Kabel)</h4>
  <p className="text-sm text-blue-700 dark:text-blue-300">
    Die einzige echte Lat-Isolation. Arme bleiben gestreckt, nur die Schulter bewegt sich. 
    Stehe 1-2 Schritte vom Kabelturm entfernt, leichtes Gewicht, 12-15 Reps. 
    Perfekt als erstes Übung (Aktivierung) oder letzte (Finisher).
  </p>
</div>

---

### 4. Kreuzhebe-Varianten

<div className="space-y-4 my-6">

<div className="p-5 bg-stone-50 dark:bg-stone-900 rounded-lg border border-stone-200 dark:border-stone-700">
  <h4 className="font-bold text-stone-800 dark:text-stone-200 mb-2">💀 Varianten für verschiedene Ziele</h4>
  <ul className="text-sm text-stone-500 dark:text-stone-500 list-disc list-inside space-y-1">
    <li><strong>Konventionelles Kreuzheben:</strong> Gesamte hintere Kette. Die Basis.</li>
    <li><strong>Sumo Deadlift:</strong> Breitere Fußstellung, aufrechter Oberkörper. Mehr Adduktoren und Quads.</li>
    <li><strong>Rumänisches Kreuzheben (RDL):</strong> Beine leicht gebeugt, Stange bleibt nah am Körper. Fokus Hamstrings und unterer Rücken.</li>
    <li><strong>Rack Pulls:</strong> Stange startet auf Kniehöhe. Erlaubt supraschwere Gewichte für den oberen Rücken und Traps.</li>
    <li><strong>Deficit Deadlift:</strong> Auf Erhöhung stehen. Größerer ROM = mehr Kraft vom Boden.</li>
  </ul>
</div>

</div>

<div className="my-6 p-4 bg-amber-50 dark:bg-amber-900/20 rounded-xl border-l-4 border-amber-500">
  <h4 className="font-bold text-amber-800 dark:text-amber-200 mb-2">⚠️ Häufige Fehler</h4>
  <ul className="text-sm text-amber-700 dark:text-amber-300 list-disc list-inside space-y-1">
    <li><strong>Bizeps dominiert:</strong> Beim Rudern/Ziehen immer zuerst die Ellenbogen zurückziehen, nicht die Hände.</li>
    <li><strong>Zu viel Schwung:</strong> Wenn der gesamte Oberkörper schwingt, ist das Gewicht zu schwer.</li>
    <li><strong>Nur vertikales Ziehen:</strong> Lats brauchen auch horizontales Rudern für 3D-Entwicklung.</li>
    <li><strong>Rear Delts ignoriert:</strong> Ohne Face Pulls/Reverse Flys entstehen Schulterprobleme.</li>
  </ul>
</div>

---

### Fortgeschrittenes Rücken-Workout

1.  **Straight-Arm Pulldown (Aktivierung):** 2 Sätze x 15 Reps
2.  **Weighted Pull-ups:** 4 Sätze x 6-8 Reps
3.  **Seal Row oder Pendlay Row:** 4 Sätze x 8-10 Reps
4.  **Meadows Row (einarmig):** 3 Sätze x 10-12 Reps pro Seite
5.  **Rumänisches Kreuzheben:** 3 Sätze x 8-10 Reps
6.  **Face Pulls:** 3 Sätze x 15-20 Reps

**Volumen:** 19 Sätze pro Sitzung. Rücken kann 2x pro Woche trainiert werden (einmal schwer, einmal leichter mit Pump-Fokus).

`,
    en: `
### Module 7.2: Advanced Back Training

The back is the largest muscle group of the upper body – and the most complex. An advanced back requires targeted training in three dimensions: Width (Lats), Thickness (Traps/Rhomboids), and Lower Back (Erector Spinae).

---

### 1. Pull-Up Progressions

<div className="space-y-4 my-6">

<div className="p-5 bg-stone-50 dark:bg-stone-900 rounded-lg border border-stone-200 dark:border-stone-700">
  <h4 className="font-bold text-stone-800 dark:text-stone-200 mb-2">🧗 From Beginner to Advanced</h4>
  <p className="text-sm text-stone-600 dark:text-stone-400 mb-2">
    Pull-ups are THE exercise for lats. Here's the progression:
  </p>
  <ul className="text-sm text-stone-500 dark:text-stone-500 list-disc list-inside space-y-1">
    <li><strong>Level 1:</strong> Assisted Pull-ups (band or machine)</li>
    <li><strong>Level 2:</strong> Bodyweight Pull-ups (3x8-12)</li>
    <li><strong>Level 3:</strong> Weighted Pull-ups (dip belt, +5-20kg)</li>
    <li><strong>Level 4:</strong> Tempo Pull-ups (3 sec down, 1 sec pause at bottom)</li>
    <li><strong>Level 5:</strong> L-Sit Pull-ups / Typewriter Pull-ups (maximum control)</li>
  </ul>
</div>

<div className="p-5 bg-stone-50 dark:bg-stone-900 rounded-lg border border-stone-200 dark:border-stone-700">
  <h4 className="font-bold text-stone-800 dark:text-stone-200 mb-2">🔄 Grip Variations and Their Effects</h4>
  <ul className="text-sm text-stone-500 dark:text-stone-500 list-disc list-inside space-y-1">
    <li><strong>Wide Overhand:</strong> Maximum lat width. Classic pull-up.</li>
    <li><strong>Close Underhand (Chin-up):</strong> More biceps involvement, still excellent for lats.</li>
    <li><strong>Neutral Grip (parallel):</strong> Most shoulder-friendly variation. Same lat activation.</li>
    <li><strong>Mixed Grip / Towel Grip:</strong> For grip strength and forearm development.</li>
  </ul>
</div>

</div>

---

### 2. Row Variations for Maximum Thickness

<div className="space-y-4 my-6">

<div className="p-5 bg-stone-50 dark:bg-stone-900 rounded-lg border border-stone-200 dark:border-stone-700">
  <h4 className="font-bold text-stone-800 dark:text-stone-200 mb-2">🏋️ Barbell Variations</h4>
  <ul className="text-sm text-stone-500 dark:text-stone-500 list-disc list-inside space-y-1">
    <li><strong>Pendlay Row:</strong> Bar touches floor every rep. Pull explosively. Massive strength builder.</li>
    <li><strong>Yates Row (Underhand):</strong> 45° angle, underhand grip. More lower lat and biceps involvement.</li>
    <li><strong>Seal Row (Lying on bench):</strong> Prone on elevated bench. Eliminates momentum completely. Pure back training.</li>
    <li><strong>T-Bar Row:</strong> Landmine or T-Bar machine. Allows heavy weights with neutral grip.</li>
  </ul>
</div>

<div className="p-5 bg-stone-50 dark:bg-stone-900 rounded-lg border border-stone-200 dark:border-stone-700">
  <h4 className="font-bold text-stone-800 dark:text-stone-200 mb-2">💪 Dumbbell & Cable Variations</h4>
  <ul className="text-sm text-stone-500 dark:text-stone-500 list-disc list-inside space-y-1">
    <li><strong>Meadows Row:</strong> Single-arm at landmine. Row laterally to hip. Excellent for lower lat.</li>
    <li><strong>Chest-Supported Row:</strong> Chest on incline bench. No momentum possible. Pure isolation.</li>
    <li><strong>Single-Arm Cable Row:</strong> Cable allows constant tension and maximum rotation.</li>
    <li><strong>Face Pull + External Rotation:</strong> For rear delts, traps, and shoulder health. Essential!</li>
  </ul>
</div>

</div>

---

### 3. Lat Isolation

<div className="my-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl border-l-4 border-blue-500">
  <h4 className="font-bold text-blue-800 dark:text-blue-200 mb-2">🎯 Straight-Arm Pulldown</h4>
  <p className="text-sm text-blue-700 dark:text-blue-300">
    The only true lat isolation. Arms stay straight, only the shoulder moves. 
    Stand 1-2 steps from the cable tower, light weight, 12-15 reps. 
    Perfect as first exercise (activation) or last (finisher).
  </p>
</div>

---

### 4. Deadlift Variations

<div className="space-y-4 my-6">

<div className="p-5 bg-stone-50 dark:bg-stone-900 rounded-lg border border-stone-200 dark:border-stone-700">
  <h4 className="font-bold text-stone-800 dark:text-stone-200 mb-2">💀 Variations for Different Goals</h4>
  <ul className="text-sm text-stone-500 dark:text-stone-500 list-disc list-inside space-y-1">
    <li><strong>Conventional Deadlift:</strong> Entire posterior chain. The foundation.</li>
    <li><strong>Sumo Deadlift:</strong> Wider stance, more upright torso. More adductors and quads.</li>
    <li><strong>Romanian Deadlift (RDL):</strong> Slight knee bend, bar stays close to body. Focus hamstrings and lower back.</li>
    <li><strong>Rack Pulls:</strong> Bar starts at knee height. Allows supra-heavy weights for upper back and traps.</li>
    <li><strong>Deficit Deadlift:</strong> Stand on platform. Greater ROM = more strength off the floor.</li>
  </ul>
</div>

</div>

<div className="my-6 p-4 bg-amber-50 dark:bg-amber-900/20 rounded-xl border-l-4 border-amber-500">
  <h4 className="font-bold text-amber-800 dark:text-amber-200 mb-2">⚠️ Common Mistakes</h4>
  <ul className="text-sm text-amber-700 dark:text-amber-300 list-disc list-inside space-y-1">
    <li><strong>Biceps dominate:</strong> During rows/pulls, always pull elbows back first, not your hands.</li>
    <li><strong>Too much momentum:</strong> If your entire torso is swinging, the weight is too heavy.</li>
    <li><strong>Only vertical pulling:</strong> Lats also need horizontal rowing for 3D development.</li>
    <li><strong>Ignoring rear delts:</strong> Without Face Pulls/Reverse Flys, shoulder problems develop.</li>
  </ul>
</div>

---

### Advanced Back Workout

1.  **Straight-Arm Pulldown (Activation):** 2 sets x 15 reps
2.  **Weighted Pull-ups:** 4 sets x 6-8 reps
3.  **Seal Row or Pendlay Row:** 4 sets x 8-10 reps
4.  **Meadows Row (single-arm):** 3 sets x 10-12 reps per side
5.  **Romanian Deadlift:** 3 sets x 8-10 reps
6.  **Face Pulls:** 3 sets x 15-20 reps

**Volume:** 19 sets per session. Back can be trained 2x per week (once heavy, once lighter with pump focus).

    `
  },

  task: {
    de: {
      title: 'Rücken-Breite vs. Dichte',
      description: 'Trainiere bewusst den Unterschied zwischen Breite- und Dicke-Übungen.',
      checklist: [
        { text: 'Starte mit 3 Sätzen Lat Pulldown (weiter Griff) – spüre die Breite.' },
        { text: 'Wechsle zu Seal Row oder Chest-Supported Row – spüre die Dichte.' },
        { text: 'Beende mit Straight-Arm Pulldown und fokussiere den Lat-Squeeze.' },
        { text: 'Notiere: Welche Region fühlst du am schwächsten?' },
        { text: 'Plane dein nächstes Rückentraining mit Fokus auf die schwache Stelle.' }
      ]
    },
    en: {
      title: 'Back Width vs. Thickness',
      description: 'Consciously train the difference between width and thickness exercises.',
      checklist: [
        { text: 'Start with 3 sets Lat Pulldown (wide grip) – feel the width.' },
        { text: 'Switch to Seal Row or Chest-Supported Row – feel the thickness.' },
        { text: 'Finish with Straight-Arm Pulldown and focus on lat squeeze.' },
        { text: 'Note: Which region feels the weakest?' },
        { text: 'Plan your next back session with a focus on the weak area.' }
      ]
    }
  },

  notes: {
    de: [
      {
        front: 'Was trainiert vertikales Ziehen primär?',
        back: 'Lat-Breite (V-Form). Beispiele: Klimmzüge, Latzug.'
      },
      {
        front: 'Was ist der Vorteil der Seal Row gegenüber normalem Rudern?',
        back: 'Kein Schwung möglich. 100% Rückenbelastung, da man auf der Bank liegt.'
      },
      {
        front: 'Welche Übung ist die einzige echte Lat-Isolation?',
        back: 'Straight-Arm Pulldown (Arme bleiben gestreckt).'
      }
    ],
    en: [
      {
        front: 'What does vertical pulling primarily train?',
        back: 'Lat width (V-taper). Examples: Pull-ups, Lat Pulldown.'
      },
      {
        front: 'What is the advantage of Seal Row over regular rows?',
        back: 'No momentum possible. 100% back load since you lie on the bench.'
      },
      {
        front: 'What exercise is the only true lat isolation?',
        back: 'Straight-Arm Pulldown (arms stay straight).'
      }
    ]
  }
};
