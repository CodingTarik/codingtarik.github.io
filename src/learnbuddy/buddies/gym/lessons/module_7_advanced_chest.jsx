import React from 'react';

export const advancedChestLesson = {
  id: 'g1_m7_adv_chest',
  title: { 
    en: '7.1 Advanced Chest Training', 
    de: '7.1 Fortgeschrittenes Brusttraining' 
  },
  description: { 
    en: 'Incline/decline variations, cable work, drop sets, pre-exhaust, and mind-muscle connection for maximum chest development.', 
    de: 'Schräg-/Negativbankvarianten, Kabelzug, Drop-Sets, Vorermüdung und Mind-Muscle-Connection für maximale Brustentwicklung.' 
  },
  category: 'advanced_bodybuilding',
  
  content: {
    de: `
### Modul 7.1: Fortgeschrittenes Brusttraining

Du kennst bereits Bankdrücken und Flys. Jetzt gehen wir tiefer: Wie baust du eine komplette, dreidimensionale Brust auf, die von oben bis unten und von innen nach außen voll entwickelt ist?

**Ziel:** Schwachstellen identifizieren, gezielte Übungsvarianten einsetzen und fortgeschrittene Intensitätstechniken nutzen, um Plateaus zu durchbrechen.

---

### 1. Die drei Regionen der Brust gezielt ansteuern

<div className="space-y-4 my-6">

<div className="p-5 bg-stone-50 dark:bg-stone-900 rounded-lg border border-stone-200 dark:border-stone-700">
  <h4 className="font-bold text-stone-800 dark:text-stone-200 mb-2">📐 Obere Brust (Claviculärer Anteil)</h4>
  <p className="text-sm text-stone-600 dark:text-stone-400 mb-2">
    Der Schlüssel zu einer vollen Brust. Bei den meisten Trainierenden die schwächste Region.
  </p>
  <ul className="text-sm text-stone-500 dark:text-stone-500 list-disc list-inside space-y-1">
    <li><strong>Schrägbank 15-30°:</strong> Der Sweet Spot. Steiler = mehr Schulter.</li>
    <li><strong>Reverse-Grip Bench Press:</strong> Untergriff-Bankdrücken aktiviert die obere Brust bis zu 30% stärker (Studie: Trebs et al.).</li>
    <li><strong>Low-to-High Cable Fly:</strong> Kabel von unten nach oben ziehen. Konstante Spannung im oberen Pec.</li>
  </ul>
</div>

<div className="p-5 bg-stone-50 dark:bg-stone-900 rounded-lg border border-stone-200 dark:border-stone-700">
  <h4 className="font-bold text-stone-800 dark:text-stone-200 mb-2">⬇️ Untere Brust (Abdominaler Anteil)</h4>
  <p className="text-sm text-stone-600 dark:text-stone-400 mb-2">
    Gibt der Brust die klare Abgrenzung zum Bauch – die "Linie" unten.
  </p>
  <ul className="text-sm text-stone-500 dark:text-stone-500 list-disc list-inside space-y-1">
    <li><strong>Decline Bench Press (-15°):</strong> Negativbank-Drücken. Erlaubt oft schwerere Gewichte als Flachbank.</li>
    <li><strong>High-to-Low Cable Fly:</strong> Kabel von oben nach unten. Fokus auf die untere Kontraktion.</li>
    <li><strong>Dips (Brust-Variante):</strong> Oberkörper nach vorne lehnen, breiter Griff. Massiv für die untere Brust.</li>
  </ul>
</div>

<div className="p-5 bg-stone-50 dark:bg-stone-900 rounded-lg border border-stone-200 dark:border-stone-700">
  <h4 className="font-bold text-stone-800 dark:text-stone-200 mb-2">🎯 Innere Brust (Kontraktion)</h4>
  <p className="text-sm text-stone-600 dark:text-stone-400 mb-2">
    Die "Spalte" in der Mitte. Kein separater Muskel, aber durch maximale Kontraktion trainierbar.
  </p>
  <ul className="text-sm text-stone-500 dark:text-stone-500 list-disc list-inside space-y-1">
    <li><strong>Cable Crossover mit Squeeze:</strong> Hände kreuzen am Ende für 2 Sekunden.</li>
    <li><strong>Svend Press:</strong> Zwei Hantelscheiben zwischen den Handflächen zusammendrücken und nach vorne pressen.</li>
    <li><strong>Pec-Deck mit Pause:</strong> Am Ende der Bewegung 2-3 Sekunden halten.</li>
  </ul>
</div>

</div>

---

### 2. Intensitätstechniken für die Brust

<div className="my-6 p-4 bg-red-50 dark:bg-red-900/20 rounded-xl border-l-4 border-red-500">
  <h4 className="font-bold text-red-800 dark:text-red-200 mb-2">🔥 Drop-Sets</h4>
  <p className="text-sm text-red-700 dark:text-red-300">
    Mache einen Satz bis zum Muskelversagen, reduziere das Gewicht sofort um 20-30% und mache weiter. 2-3 Drops pro Satz.
  </p>
  <p className="text-sm text-red-700 dark:text-red-300 mt-1">
    <strong>Ideal bei:</strong> Kabelzug-Flys, Butterfly, Maschinendrücken (schneller Gewichtswechsel möglich).
  </p>
</div>

<div className="my-6 p-4 bg-amber-50 dark:bg-amber-900/20 rounded-xl border-l-4 border-amber-500">
  <h4 className="font-bold text-amber-800 dark:text-amber-200 mb-2">💡 Vorermüdung (Pre-Exhaust)</h4>
  <p className="text-sm text-amber-700 dark:text-amber-300">
    Starte mit einer Isolation (z.B. Flys) BEVOR du die Grundübung (Bankdrücken) machst. So ist die Brust schon "vorermüdet" und der Trizeps limitiert dich nicht mehr beim Drücken.
  </p>
  <p className="text-sm text-amber-700 dark:text-amber-300 mt-1">
    <strong>Beispiel:</strong> 2 Sätze Cable Flys → direkt danach Bankdrücken.
  </p>
</div>

<div className="my-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl border-l-4 border-blue-500">
  <h4 className="font-bold text-blue-800 dark:text-blue-200 mb-2">🧠 Mind-Muscle Connection</h4>
  <p className="text-sm text-blue-700 dark:text-blue-300">
    Die mentale Verbindung zum Zielmuskel ist bei der Brust entscheidend. Viele "pressen" nur und fühlen nichts in der Brust.
  </p>
  <ul className="text-sm text-blue-700 dark:text-blue-300 list-disc list-inside mt-1">
    <li>Starte jedes Brusttraining mit einer leichten Isolation (Pec-Deck, 2 Sätze à 20 Reps).</li>
    <li>Konzentriere dich darauf, die Brust "zusammenzuquetschen".</li>
    <li>Senke das Gewicht und erhöhe die Spürintensität.</li>
    <li>Kontrolliertes Tempo: 3 Sekunden runter, 1 Sekunde Pause, 2 Sekunden hoch.</li>
  </ul>
</div>

---

### 3. Häufige Fehler bei fortgeschrittenem Brusttraining

<div className="my-6 p-4 bg-red-50 dark:bg-red-900/20 rounded-xl border-l-4 border-red-500">
  <h4 className="font-bold text-red-800 dark:text-red-200 mb-2">❌ Häufige Fehler</h4>
  <ul className="text-sm text-red-700 dark:text-red-300 list-disc list-inside space-y-1">
    <li><strong>Zu viel Flachbank:</strong> 80% des Brusttrainings nur flach = unterentwickelte obere Brust.</li>
    <li><strong>Ego-Lifting:</strong> Zu schwer, zu wenig ROM. Die Brust braucht volle Dehnung UND volle Kontraktion.</li>
    <li><strong>Schultern übernehmen:</strong> Wenn die Schulterblätter nicht retrahiert sind, übernimmt die vordere Schulter.</li>
    <li><strong>Kein Kabelzug:</strong> Freie Gewichte allein liefern am oberen Punkt kaum Spannung. Kabel ergänzen das perfekt.</li>
  </ul>
</div>

---

### Fortgeschrittenes Brust-Workout

1.  **Pec-Deck (Vorermüdung):** 2 Sätze x 15-20 Reps (leicht, Fokus Spüren)
2.  **Schrägbank-Kurzhanteldrücken (30°):** 4 Sätze x 8-10 Reps
3.  **Flachbank-Langhanteldrücken:** 3 Sätze x 6-8 Reps
4.  **Dips (Brust-Variante):** 3 Sätze x 10-12 Reps (gewichtet)
5.  **Cable Crossover (Low-to-High):** 3 Sätze x 12-15 Reps + Drop-Set am letzten Satz
6.  **Svend Press oder Kabel-Squeeze:** 2 Sätze x 15 Reps (Finisher)

**Volumen:** 18 Sätze pro Woche. Fortgeschrittene können auf 20-25 Sätze aufstocken (aufgeteilt auf 2 Tage).

`,
    en: `
### Module 7.1: Advanced Chest Training

You already know bench press and flys. Now we go deeper: How do you build a complete, three-dimensional chest that's fully developed from top to bottom and from inside to out?

**Goal:** Identify weak points, use targeted exercise variations, and employ advanced intensity techniques to break through plateaus.

---

### 1. Targeting the Three Regions of the Chest

<div className="space-y-4 my-6">

<div className="p-5 bg-stone-50 dark:bg-stone-900 rounded-lg border border-stone-200 dark:border-stone-700">
  <h4 className="font-bold text-stone-800 dark:text-stone-200 mb-2">📐 Upper Chest (Clavicular Head)</h4>
  <p className="text-sm text-stone-600 dark:text-stone-400 mb-2">
    The key to a full chest. The weakest region for most lifters.
  </p>
  <ul className="text-sm text-stone-500 dark:text-stone-500 list-disc list-inside space-y-1">
    <li><strong>Incline Bench 15-30°:</strong> The sweet spot. Steeper = more shoulder involvement.</li>
    <li><strong>Reverse-Grip Bench Press:</strong> Underhand grip bench activates upper chest up to 30% more (Study: Trebs et al.).</li>
    <li><strong>Low-to-High Cable Fly:</strong> Cables from low to high. Constant tension on upper pec.</li>
  </ul>
</div>

<div className="p-5 bg-stone-50 dark:bg-stone-900 rounded-lg border border-stone-200 dark:border-stone-700">
  <h4 className="font-bold text-stone-800 dark:text-stone-200 mb-2">⬇️ Lower Chest (Abdominal Head)</h4>
  <p className="text-sm text-stone-600 dark:text-stone-400 mb-2">
    Gives the chest a clear separation from the abs – the defined "line" at the bottom.
  </p>
  <ul className="text-sm text-stone-500 dark:text-stone-500 list-disc list-inside space-y-1">
    <li><strong>Decline Bench Press (-15°):</strong> Often allows heavier weight than flat bench.</li>
    <li><strong>High-to-Low Cable Fly:</strong> Cables from high to low. Focus on lower contraction.</li>
    <li><strong>Dips (Chest Variation):</strong> Lean torso forward, wide grip. Massive for lower chest.</li>
  </ul>
</div>

<div className="p-5 bg-stone-50 dark:bg-stone-900 rounded-lg border border-stone-200 dark:border-stone-700">
  <h4 className="font-bold text-stone-800 dark:text-stone-200 mb-2">🎯 Inner Chest (Contraction)</h4>
  <p className="text-sm text-stone-600 dark:text-stone-400 mb-2">
    The "cleavage" in the middle. Not a separate muscle, but trainable through maximum contraction.
  </p>
  <ul className="text-sm text-stone-500 dark:text-stone-500 list-disc list-inside space-y-1">
    <li><strong>Cable Crossover with Squeeze:</strong> Cross hands at the end and hold for 2 seconds.</li>
    <li><strong>Svend Press:</strong> Squeeze two plates between palms and press forward.</li>
    <li><strong>Pec-Deck with Pause:</strong> Hold at the end position for 2-3 seconds.</li>
  </ul>
</div>

</div>

---

### 2. Intensity Techniques for Chest

<div className="my-6 p-4 bg-red-50 dark:bg-red-900/20 rounded-xl border-l-4 border-red-500">
  <h4 className="font-bold text-red-800 dark:text-red-200 mb-2">🔥 Drop Sets</h4>
  <p className="text-sm text-red-700 dark:text-red-300">
    Perform a set to failure, immediately reduce weight by 20-30%, and continue. 2-3 drops per set.
  </p>
  <p className="text-sm text-red-700 dark:text-red-300 mt-1">
    <strong>Ideal for:</strong> Cable flys, butterfly, machine press (quick weight changes possible).
  </p>
</div>

<div className="my-6 p-4 bg-amber-50 dark:bg-amber-900/20 rounded-xl border-l-4 border-amber-500">
  <h4 className="font-bold text-amber-800 dark:text-amber-200 mb-2">💡 Pre-Exhaust</h4>
  <p className="text-sm text-amber-700 dark:text-amber-300">
    Start with an isolation (e.g., flys) BEFORE your compound (bench press). This way, the chest is already "pre-fatigued" and your triceps won't be the limiting factor during pressing.
  </p>
  <p className="text-sm text-amber-700 dark:text-amber-300 mt-1">
    <strong>Example:</strong> 2 sets Cable Flys → immediately followed by Bench Press.
  </p>
</div>

<div className="my-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl border-l-4 border-blue-500">
  <h4 className="font-bold text-blue-800 dark:text-blue-200 mb-2">🧠 Mind-Muscle Connection</h4>
  <p className="text-sm text-blue-700 dark:text-blue-300">
    The mental connection to the target muscle is crucial for chest. Many just "press" and feel nothing in the chest.
  </p>
  <ul className="text-sm text-blue-700 dark:text-blue-300 list-disc list-inside mt-1">
    <li>Start every chest session with a light isolation (Pec-Deck, 2 sets of 20 reps).</li>
    <li>Focus on "squeezing" the chest together.</li>
    <li>Lower the weight and increase the feeling intensity.</li>
    <li>Controlled tempo: 3 seconds down, 1 second pause, 2 seconds up.</li>
  </ul>
</div>

---

### 3. Common Mistakes in Advanced Chest Training

<div className="my-6 p-4 bg-red-50 dark:bg-red-900/20 rounded-xl border-l-4 border-red-500">
  <h4 className="font-bold text-red-800 dark:text-red-200 mb-2">❌ Common Mistakes</h4>
  <ul className="text-sm text-red-700 dark:text-red-300 list-disc list-inside space-y-1">
    <li><strong>Too much flat bench:</strong> 80% of chest training only flat = underdeveloped upper chest.</li>
    <li><strong>Ego lifting:</strong> Too heavy, too little ROM. Chest needs full stretch AND full contraction.</li>
    <li><strong>Shoulders take over:</strong> If shoulder blades aren't retracted, front delts dominate.</li>
    <li><strong>No cables:</strong> Free weights alone provide almost no tension at the top. Cables complement perfectly.</li>
  </ul>
</div>

---

### Advanced Chest Workout

1.  **Pec-Deck (Pre-Exhaust):** 2 sets x 15-20 reps (light, focus on feeling)
2.  **Incline Dumbbell Press (30°):** 4 sets x 8-10 reps
3.  **Flat Barbell Bench Press:** 3 sets x 6-8 reps
4.  **Dips (Chest Variation):** 3 sets x 10-12 reps (weighted)
5.  **Cable Crossover (Low-to-High):** 3 sets x 12-15 reps + drop set on last set
6.  **Svend Press or Cable Squeeze:** 2 sets x 15 reps (finisher)

**Volume:** 18 sets per week. Advanced lifters can increase to 20-25 sets (split across 2 days).

    `
  },

  task: {
    de: {
      title: 'Mind-Muscle-Connection Drill',
      description: 'Trainiere die mentale Verbindung zu deiner Brustmuskulatur.',
      checklist: [
        { text: 'Starte mit 2 Sätzen Pec-Deck bei sehr leichtem Gewicht (20 Reps).' },
        { text: 'Schließe die Augen und konzentriere dich nur auf die Brust-Kontraktion.' },
        { text: 'Halte jede Wiederholung am Kontraktionspunkt für 2 Sekunden.' },
        { text: 'Wechsle danach zu Incline Dumbbell Press und behalte den Fokus bei.' },
        { text: 'Beobachte, ob du die Brust mehr spürst als sonst.' }
      ]
    },
    en: {
      title: 'Mind-Muscle Connection Drill',
      description: 'Train the mental connection to your chest muscles.',
      checklist: [
        { text: 'Start with 2 sets of Pec-Deck at very light weight (20 reps).' },
        { text: 'Close your eyes and focus only on chest contraction.' },
        { text: 'Hold every rep at the contraction point for 2 seconds.' },
        { text: 'Switch to Incline Dumbbell Press and maintain the focus.' },
        { text: 'Observe if you feel the chest more than usual.' }
      ]
    }
  },

  notes: {
    de: [
      {
        front: 'Was ist Pre-Exhaust und warum nutzt man es für die Brust?',
        back: 'Vorermüdung: Isolation VOR Compound. So limitiert der Trizeps nicht mehr das Brusttraining.'
      },
      {
        front: 'Welcher Bankwinkel ist optimal für die obere Brust?',
        back: '15-30 Grad. Steiler als 45° verlagert zu viel auf die Schulter.'
      },
      {
        front: 'Was sind die drei Brustregionen, die man gezielt trainieren kann?',
        back: 'Obere Brust (Incline), Untere Brust (Decline/Dips), Innere Brust (Kabel-Squeeze).'
      }
    ],
    en: [
      {
        front: 'What is Pre-Exhaust and why use it for chest?',
        back: 'Pre-fatigue: Isolation BEFORE compound. This way triceps no longer limits chest training.'
      },
      {
        front: 'What bench angle is optimal for upper chest?',
        back: '15-30 degrees. Steeper than 45° shifts too much to shoulders.'
      },
      {
        front: 'What are the three chest regions you can target?',
        back: 'Upper chest (Incline), Lower chest (Decline/Dips), Inner chest (Cable squeeze).'
      }
    ]
  }
};
