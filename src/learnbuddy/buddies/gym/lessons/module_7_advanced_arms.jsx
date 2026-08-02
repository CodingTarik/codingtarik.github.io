import React from 'react';

export const advancedArmsLesson = {
  id: 'g1_m7_adv_arms',
  title: { 
    en: '7.5 Advanced Arm Training', 
    de: '7.5 Fortgeschrittenes Armtraining' 
  },
  description: { 
    en: 'Bicep peak training, long head tricep emphasis, forearm development, and advanced arm specialization techniques.', 
    de: 'Bizeps-Peak-Training, langer Trizepskopf, Unterarmentwicklung und fortgeschrittene Arm-Spezialisierungstechniken.' 
  },
  category: 'advanced_bodybuilding',
  
  content: {
    de: `
### Modul 7.5: Fortgeschrittenes Armtraining

Arme sind das Aushängeschild eines trainierten Körpers. Aber die meisten stagnieren nach den ersten Monaten, weil sie nur Standardcurls und Pushdowns machen. Fortgeschrittenes Armtraining erfordert Verständnis der Anatomie und gezielte Variation.

**Ziel:** Jeden einzelnen Kopf des Bizeps und Trizeps gezielt ansteuern, die Unterarme nicht vergessen und Intensitätstechniken für maximales Wachstum einsetzen.

---

### 1. Bizeps – Die drei Schlüssel zum Peak

<div className="space-y-4 my-6">

<div className="p-5 bg-stone-50 dark:bg-stone-900 rounded-lg border border-stone-200 dark:border-stone-700">
  <h4 className="font-bold text-stone-800 dark:text-stone-200 mb-2">💪 Bizeps-Anatomie</h4>
  <p className="text-sm text-stone-600 dark:text-stone-400 mb-2">
    Der Bizeps hat zwei Köpfe (daher "bi-ceps") plus den Brachialis darunter:
  </p>
  <ul className="text-sm text-stone-500 dark:text-stone-500 list-disc list-inside space-y-1">
    <li><strong>Langer Kopf (außen):</strong> Bildet den "Peak" – die Spitze beim Anspannen. Wird in gedehnter Position am besten trainiert.</li>
    <li><strong>Kurzer Kopf (innen):</strong> Gibt dem Bizeps Breite/Dicke von vorne betrachtet.</li>
    <li><strong>Brachialis:</strong> Liegt UNTER dem Bizeps. Wenn er wächst, "drückt" er den Bizeps nach oben = optisch größere Arme.</li>
  </ul>
</div>

<div className="p-5 bg-stone-50 dark:bg-stone-900 rounded-lg border border-stone-200 dark:border-stone-700">
  <h4 className="font-bold text-stone-800 dark:text-stone-200 mb-2">🎯 Übungen für den Bizeps-Peak (Langer Kopf)</h4>
  <ul className="text-sm text-stone-500 dark:text-stone-500 list-disc list-inside space-y-1">
    <li><strong>Incline Dumbbell Curl:</strong> Schrägbank 45-60°, Arme hängen nach hinten. Maximale Dehnung des langen Kopfes. DER Peak-Builder.</li>
    <li><strong>Bayesian Cable Curl:</strong> Kabel hinter dir, Arm gestreckt nach hinten. Gleicher Effekt wie Incline Curl, aber mit konstanter Spannung.</li>
    <li><strong>Drag Curl:</strong> Langhantel eng am Körper nach oben "ziehen" statt curlen. Ellenbogen gehen nach hinten. Isoliert den langen Kopf.</li>
    <li><strong>Behind-the-Back Cable Curl:</strong> Einarmig, Kabel hinter dem Rücken. Extreme Dehnung des langen Kopfes.</li>
  </ul>
</div>

<div className="p-5 bg-stone-50 dark:bg-stone-900 rounded-lg border border-stone-200 dark:border-stone-700">
  <h4 className="font-bold text-stone-800 dark:text-stone-200 mb-2">📐 Übungen für Breite (Kurzer Kopf) & Brachialis</h4>
  <ul className="text-sm text-stone-500 dark:text-stone-500 list-disc list-inside space-y-1">
    <li><strong>Preacher Curl / Spider Curl:</strong> Arme VOR dem Körper = kurzer Kopf dominiert. Am Scott-Pult oder über Incline-Bank gelehnt.</li>
    <li><strong>Concentration Curl:</strong> Sitzend, Ellenbogen am inneren Oberschenkel. Maximale Kontraktion des kurzen Kopfes.</li>
    <li><strong>Hammer Curl:</strong> Neutraler Griff (Daumen nach oben). Trainiert primär den Brachialis. Macht den Arm "dicker".</li>
    <li><strong>Cross-Body Hammer Curl:</strong> Hammer Curl diagonal vor den Körper. Noch mehr Brachialis-Isolation.</li>
    <li><strong>Reverse Curl (Obergriff):</strong> Langhantel mit Obergriff curlen. Brachialis + Brachioradialis (Unterarm).</li>
  </ul>
</div>

</div>

---

### 2. Trizeps – Der wahre Arm-Volumen-Muskel

<div className="my-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl border-l-4 border-blue-500">
  <h4 className="font-bold text-blue-800 dark:text-blue-200 mb-2">📊 Wusstest du?</h4>
  <p className="text-sm text-blue-700 dark:text-blue-300">
    Der Trizeps macht ca. 2/3 des Armumfangs aus! Wenn du dickere Arme willst, ist Trizeps-Training wichtiger als Bizeps.
  </p>
</div>

<div className="space-y-4 my-6">

<div className="p-5 bg-stone-50 dark:bg-stone-900 rounded-lg border border-stone-200 dark:border-stone-700">
  <h4 className="font-bold text-stone-800 dark:text-stone-200 mb-2">🔱 Trizeps-Anatomie (Drei Köpfe)</h4>
  <ul className="text-sm text-stone-500 dark:text-stone-500 list-disc list-inside space-y-1">
    <li><strong>Langer Kopf:</strong> Verläuft vom Schulterblatt zum Ellenbogen. Der größte Kopf. Wird in Überkopf-Position am besten gedehnt und trainiert.</li>
    <li><strong>Lateraler Kopf:</strong> Gibt dem Trizeps die "Hufeisenform" von der Seite betrachtet.</li>
    <li><strong>Medialer Kopf:</strong> Liegt tief, wird bei allen Trizeps-Übungen aktiviert.</li>
  </ul>
</div>

<div className="p-5 bg-stone-50 dark:bg-stone-900 rounded-lg border border-stone-200 dark:border-stone-700">
  <h4 className="font-bold text-stone-800 dark:text-stone-200 mb-2">🎯 Langer Kopf (Overhead-Übungen)</h4>
  <p className="text-sm text-stone-600 dark:text-stone-400 mb-2">
    Der lange Kopf wird NUR richtig trainiert, wenn der Arm über dem Kopf ist (gedehnte Position).
  </p>
  <ul className="text-sm text-stone-500 dark:text-stone-500 list-disc list-inside space-y-1">
    <li><strong>Overhead Cable Extension:</strong> Seilgriff am Kabel, Rücken zum Turm. DER Long-Head-Builder.</li>
    <li><strong>Overhead Dumbbell Extension:</strong> Eine Kurzhantel mit beiden Händen hinter dem Kopf. Klassiker.</li>
    <li><strong>Incline Overhead Extension:</strong> Schrägbank, Kurzhanteln hinter dem Kopf ablassen. Maximale Dehnung.</li>
    <li><strong>Skull Crusher (JM Press Variante):</strong> Langhantel/EZ-Bar, ablassen hinter den Kopf statt zur Stirn. Mehr Dehnung im langen Kopf.</li>
  </ul>
</div>

<div className="p-5 bg-stone-50 dark:bg-stone-900 rounded-lg border border-stone-200 dark:border-stone-700">
  <h4 className="font-bold text-stone-800 dark:text-stone-200 mb-2">🔥 Lateraler & Medialer Kopf</h4>
  <ul className="text-sm text-stone-500 dark:text-stone-500 list-disc list-inside space-y-1">
    <li><strong>Cable Pushdown (Seil):</strong> Am Ende auseinanderdrehen für maximale Kontraktion.</li>
    <li><strong>Cable Pushdown (V-Bar):</strong> Erlaubt schwerere Gewichte. Mehr lateraler Kopf.</li>
    <li><strong>Kickbacks (Kabel):</strong> Arm hinten vollständig strecken und 1 Sek. halten. Isoliert den lateralen Kopf.</li>
    <li><strong>Close-Grip Bench Press:</strong> Die beste Compound-Übung für den Trizeps. Hände schulterbreit.</li>
    <li><strong>Dips (Trizeps-Variante):</strong> Aufrechter Oberkörper, enger Griff. Massiv für alle drei Köpfe.</li>
  </ul>
</div>

</div>

---

### 3. Unterarme – Der vergessene Muskel

<div className="space-y-4 my-6">

<div className="p-5 bg-stone-50 dark:bg-stone-900 rounded-lg border border-stone-200 dark:border-stone-700">
  <h4 className="font-bold text-stone-800 dark:text-stone-200 mb-2">🦾 Warum Unterarme trainieren?</h4>
  <p className="text-sm text-stone-600 dark:text-stone-400 mb-2">
    Dünne Unterarme lassen selbst große Oberarme klein wirken. Plus: Griffkraft limitiert oft Übungen wie Kreuzheben und Rudern.
  </p>
  <ul className="text-sm text-stone-500 dark:text-stone-500 list-disc list-inside space-y-1">
    <li><strong>Wrist Curls:</strong> Unterarme auf den Oberschenkeln, Handgelenke curlen. 3x15-20.</li>
    <li><strong>Reverse Wrist Curls:</strong> Gleich, aber mit Obergriff. Trainiert die Extensoren (Oberseite des Unterarms).</li>
    <li><strong>Farmer's Walk:</strong> Schwere Kurzhanteln tragen und gehen. 3x30-40 Sekunden. Hervorragend für Griffkraft und Unterarme.</li>
    <li><strong>Dead Hangs:</strong> An der Klimmzugstange hängen, so lange wie möglich. Griffkraft + Schulter-Dekompression.</li>
    <li><strong>Plate Pinch:</strong> Zwei Hantelscheiben mit den Fingern zusammendrücken und halten. 3x20 Sekunden.</li>
  </ul>
</div>

</div>

---

### 4. Häufige Fehler beim Armtraining

<div className="my-6 p-4 bg-red-50 dark:bg-red-900/20 rounded-xl border-l-4 border-red-500">
  <h4 className="font-bold text-red-800 dark:text-red-200 mb-2">❌ Häufige Fehler</h4>
  <ul className="text-sm text-red-700 dark:text-red-300 list-disc list-inside space-y-1">
    <li><strong>Zu schwer curlen:</strong> Schwung aus dem Rücken holen = Bizeps wird kaum belastet. Senke das Gewicht!</li>
    <li><strong>Keine Overhead-Arbeit:</strong> Ohne Überkopf-Extensions bleibt der lange Trizepskopf unterentwickelt.</li>
    <li><strong>Nur mittlerer Bereich:</strong> Die meiste Arbeit passiert im mittleren ROM. Trainiere volle Dehnung UND volle Kontraktion.</li>
    <li><strong>Zu viel Volumen:</strong> Arme erholen sich schnell. 10-15 direkte Sätze pro Muskel pro Woche reichen.</li>
    <li><strong>Unterarme ignorieren:</strong> Geben dem Arm ein unfertiges Aussehen und limitieren die Griffkraft.</li>
  </ul>
</div>

---

### Fortgeschrittenes Arm-Workout

**Bizeps (10-12 Sätze):**
1.  **Incline Dumbbell Curl (Peak):** 3 Sätze x 10-12 Reps
2.  **Preacher Curl (Breite):** 3 Sätze x 10-12 Reps
3.  **Hammer Curl (Brachialis):** 3 Sätze x 12 Reps
4.  **Bayesian Cable Curl (Finisher):** 2 Sätze x 12-15 Reps + Drop-Set

**Trizeps (10-12 Sätze):**
1.  **Overhead Cable Extension:** 3 Sätze x 12-15 Reps
2.  **Close-Grip Bench Press:** 3 Sätze x 8-10 Reps
3.  **Cable Pushdown (Seil):** 3 Sätze x 12-15 Reps
4.  **Kickbacks (Kabel):** 2 Sätze x 15 Reps + Drop-Set

**Unterarme (4-6 Sätze):**
1.  **Reverse Curl:** 3 Sätze x 12-15 Reps
2.  **Farmer's Walk:** 2 Sätze x 30-40 Sekunden

`,
    en: `
### Module 7.5: Advanced Arm Training

Arms are the showcase of a trained physique. But most lifters stagnate after the first few months because they only do standard curls and pushdowns. Advanced arm training requires understanding anatomy and using targeted variation.

**Goal:** Target each individual head of the biceps and triceps, don't neglect forearms, and use intensity techniques for maximum growth.

---

### 1. Biceps – The Three Keys to Peak

<div className="space-y-4 my-6">

<div className="p-5 bg-stone-50 dark:bg-stone-900 rounded-lg border border-stone-200 dark:border-stone-700">
  <h4 className="font-bold text-stone-800 dark:text-stone-200 mb-2">💪 Biceps Anatomy</h4>
  <p className="text-sm text-stone-600 dark:text-stone-400 mb-2">
    The biceps has two heads (hence "bi-ceps") plus the brachialis underneath:
  </p>
  <ul className="text-sm text-stone-500 dark:text-stone-500 list-disc list-inside space-y-1">
    <li><strong>Long Head (outer):</strong> Creates the "peak" – the pointy top when flexing. Best trained in the stretched position.</li>
    <li><strong>Short Head (inner):</strong> Gives the biceps width/thickness when viewed from the front.</li>
    <li><strong>Brachialis:</strong> Sits UNDER the biceps. When it grows, it "pushes" the biceps up = visually larger arms.</li>
  </ul>
</div>

<div className="p-5 bg-stone-50 dark:bg-stone-900 rounded-lg border border-stone-200 dark:border-stone-700">
  <h4 className="font-bold text-stone-800 dark:text-stone-200 mb-2">🎯 Exercises for the Bicep Peak (Long Head)</h4>
  <ul className="text-sm text-stone-500 dark:text-stone-500 list-disc list-inside space-y-1">
    <li><strong>Incline Dumbbell Curl:</strong> Incline bench 45-60°, arms hanging back. Maximum stretch on the long head. THE peak builder.</li>
    <li><strong>Bayesian Cable Curl:</strong> Cable behind you, arm extended backward. Same effect as incline curl but with constant tension.</li>
    <li><strong>Drag Curl:</strong> Barbell "drags" up close to the body instead of curling. Elbows go back. Isolates the long head.</li>
    <li><strong>Behind-the-Back Cable Curl:</strong> Single-arm, cable behind back. Extreme long head stretch.</li>
  </ul>
</div>

<div className="p-5 bg-stone-50 dark:bg-stone-900 rounded-lg border border-stone-200 dark:border-stone-700">
  <h4 className="font-bold text-stone-800 dark:text-stone-200 mb-2">📐 Exercises for Width (Short Head) & Brachialis</h4>
  <ul className="text-sm text-stone-500 dark:text-stone-500 list-disc list-inside space-y-1">
    <li><strong>Preacher Curl / Spider Curl:</strong> Arms IN FRONT of body = short head dominates. On preacher bench or leaning over incline bench.</li>
    <li><strong>Concentration Curl:</strong> Seated, elbow on inner thigh. Maximum contraction of the short head.</li>
    <li><strong>Hammer Curl:</strong> Neutral grip (thumbs up). Primarily trains the brachialis. Makes the arm "thicker."</li>
    <li><strong>Cross-Body Hammer Curl:</strong> Hammer curl diagonally across the body. Even more brachialis isolation.</li>
    <li><strong>Reverse Curl (Overhand):</strong> Curl barbell with overhand grip. Brachialis + brachioradialis (forearm).</li>
  </ul>
</div>

</div>

---

### 2. Triceps – The Real Arm Volume Muscle

<div className="my-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl border-l-4 border-blue-500">
  <h4 className="font-bold text-blue-800 dark:text-blue-200 mb-2">📊 Did You Know?</h4>
  <p className="text-sm text-blue-700 dark:text-blue-300">
    The triceps makes up approximately 2/3 of your arm circumference! If you want bigger arms, triceps training is more important than biceps.
  </p>
</div>

<div className="space-y-4 my-6">

<div className="p-5 bg-stone-50 dark:bg-stone-900 rounded-lg border border-stone-200 dark:border-stone-700">
  <h4 className="font-bold text-stone-800 dark:text-stone-200 mb-2">🔱 Triceps Anatomy (Three Heads)</h4>
  <ul className="text-sm text-stone-500 dark:text-stone-500 list-disc list-inside space-y-1">
    <li><strong>Long Head:</strong> Runs from the scapula to the elbow. The largest head. Best stretched and trained in the overhead position.</li>
    <li><strong>Lateral Head:</strong> Gives the triceps the "horseshoe shape" when viewed from the side.</li>
    <li><strong>Medial Head:</strong> Sits deep, activated during all triceps exercises.</li>
  </ul>
</div>

<div className="p-5 bg-stone-50 dark:bg-stone-900 rounded-lg border border-stone-200 dark:border-stone-700">
  <h4 className="font-bold text-stone-800 dark:text-stone-200 mb-2">🎯 Long Head (Overhead Exercises)</h4>
  <p className="text-sm text-stone-600 dark:text-stone-400 mb-2">
    The long head is ONLY properly trained when the arm is overhead (stretched position).
  </p>
  <ul className="text-sm text-stone-500 dark:text-stone-500 list-disc list-inside space-y-1">
    <li><strong>Overhead Cable Extension:</strong> Rope attachment on cable, back to the tower. THE long head builder.</li>
    <li><strong>Overhead Dumbbell Extension:</strong> One dumbbell with both hands behind the head. Classic.</li>
    <li><strong>Incline Overhead Extension:</strong> Incline bench, lower dumbbells behind head. Maximum stretch.</li>
    <li><strong>Skull Crusher (JM Press Variation):</strong> Barbell/EZ-bar, lower behind the head instead of to the forehead. More long head stretch.</li>
  </ul>
</div>

<div className="p-5 bg-stone-50 dark:bg-stone-900 rounded-lg border border-stone-200 dark:border-stone-700">
  <h4 className="font-bold text-stone-800 dark:text-stone-200 mb-2">🔥 Lateral & Medial Head</h4>
  <ul className="text-sm text-stone-500 dark:text-stone-500 list-disc list-inside space-y-1">
    <li><strong>Cable Pushdown (Rope):</strong> Twist apart at the bottom for maximum contraction.</li>
    <li><strong>Cable Pushdown (V-Bar):</strong> Allows heavier weight. More lateral head.</li>
    <li><strong>Kickbacks (Cable):</strong> Fully extend arm behind and hold 1 sec. Isolates the lateral head.</li>
    <li><strong>Close-Grip Bench Press:</strong> The best compound exercise for triceps. Hands shoulder-width apart.</li>
    <li><strong>Dips (Triceps Variation):</strong> Upright torso, narrow grip. Massive for all three heads.</li>
  </ul>
</div>

</div>

---

### 3. Forearms – The Forgotten Muscle

<div className="space-y-4 my-6">

<div className="p-5 bg-stone-50 dark:bg-stone-900 rounded-lg border border-stone-200 dark:border-stone-700">
  <h4 className="font-bold text-stone-800 dark:text-stone-200 mb-2">🦾 Why Train Forearms?</h4>
  <p className="text-sm text-stone-600 dark:text-stone-400 mb-2">
    Thin forearms make even big upper arms look small. Plus: grip strength often limits exercises like deadlifts and rows.
  </p>
  <ul className="text-sm text-stone-500 dark:text-stone-500 list-disc list-inside space-y-1">
    <li><strong>Wrist Curls:</strong> Forearms on thighs, curl at the wrist. 3x15-20.</li>
    <li><strong>Reverse Wrist Curls:</strong> Same but overhand grip. Trains the extensors (top of the forearm).</li>
    <li><strong>Farmer's Walk:</strong> Carry heavy dumbbells and walk. 3x30-40 seconds. Excellent for grip and forearms.</li>
    <li><strong>Dead Hangs:</strong> Hang from pull-up bar as long as possible. Grip strength + shoulder decompression.</li>
    <li><strong>Plate Pinch:</strong> Squeeze two weight plates together with fingers and hold. 3x20 seconds.</li>
  </ul>
</div>

</div>

---

### 4. Common Arm Training Mistakes

<div className="my-6 p-4 bg-red-50 dark:bg-red-900/20 rounded-xl border-l-4 border-red-500">
  <h4 className="font-bold text-red-800 dark:text-red-200 mb-2">❌ Common Mistakes</h4>
  <ul className="text-sm text-red-700 dark:text-red-300 list-disc list-inside space-y-1">
    <li><strong>Curling too heavy:</strong> Using momentum from the back = biceps barely loaded. Lower the weight!</li>
    <li><strong>No overhead work:</strong> Without overhead extensions, the long triceps head stays underdeveloped.</li>
    <li><strong>Only mid-range:</strong> Most work happens in the middle ROM. Train full stretch AND full contraction.</li>
    <li><strong>Too much volume:</strong> Arms recover quickly. 10-15 direct sets per muscle per week is enough.</li>
    <li><strong>Ignoring forearms:</strong> Gives the arm an unfinished look and limits grip strength.</li>
  </ul>
</div>

---

### Advanced Arm Workout

**Biceps (10-12 sets):**
1.  **Incline Dumbbell Curl (Peak):** 3 sets x 10-12 reps
2.  **Preacher Curl (Width):** 3 sets x 10-12 reps
3.  **Hammer Curl (Brachialis):** 3 sets x 12 reps
4.  **Bayesian Cable Curl (Finisher):** 2 sets x 12-15 reps + drop set

**Triceps (10-12 sets):**
1.  **Overhead Cable Extension:** 3 sets x 12-15 reps
2.  **Close-Grip Bench Press:** 3 sets x 8-10 reps
3.  **Cable Pushdown (Rope):** 3 sets x 12-15 reps
4.  **Kickbacks (Cable):** 2 sets x 15 reps + drop set

**Forearms (4-6 sets):**
1.  **Reverse Curl:** 3 sets x 12-15 reps
2.  **Farmer's Walk:** 2 sets x 30-40 seconds

    `
  },

  task: {
    de: {
      title: 'Bizeps-Peak vs. Breite Drill',
      description: 'Spüre den Unterschied zwischen Long-Head- und Short-Head-Übungen.',
      checklist: [
        { text: 'Starte mit Incline Dumbbell Curls (3x10) – spüre die Dehnung im langen Kopf.' },
        { text: 'Wechsle zu Preacher Curls (3x10) – spüre die Kontraktion im kurzen Kopf.' },
        { text: 'Mache 2 Sätze Hammer Curls – achte auf den "Druck" unter dem Bizeps (Brachialis).' },
        { text: 'Beende mit Overhead Cable Extension für den langen Trizepskopf (3x12).' },
        { text: 'Notiere: Wo spürst du den größten Pump – Peak, Breite oder Trizeps?' }
      ]
    },
    en: {
      title: 'Bicep Peak vs. Width Drill',
      description: 'Feel the difference between long head and short head exercises.',
      checklist: [
        { text: 'Start with Incline Dumbbell Curls (3x10) – feel the stretch in the long head.' },
        { text: 'Switch to Preacher Curls (3x10) – feel the contraction in the short head.' },
        { text: 'Do 2 sets Hammer Curls – notice the "push" under the biceps (brachialis).' },
        { text: 'Finish with Overhead Cable Extension for the long triceps head (3x12).' },
        { text: 'Note: Where do you feel the biggest pump – peak, width, or triceps?' }
      ]
    }
  },

  notes: {
    de: [
      {
        front: 'Welcher Bizepskopf bildet den "Peak" und wie trainiert man ihn?',
        back: 'Der lange Kopf (außen). Training in gedehnter Position: Incline Curls, Bayesian Curls, Drag Curls.'
      },
      {
        front: 'Warum ist Trizeps-Training wichtiger als Bizeps für Armumfang?',
        back: 'Der Trizeps macht ca. 2/3 des Armumfangs aus. Drei Köpfe vs. zwei.'
      },
      {
        front: 'Wie trainiert man den langen Trizepskopf am besten?',
        back: 'Überkopf-Übungen: Overhead Cable Extension, Overhead DB Extension, Skull Crushers hinter den Kopf.'
      }
    ],
    en: [
      {
        front: 'Which bicep head creates the "peak" and how do you train it?',
        back: 'The long head (outer). Train in stretched position: Incline Curls, Bayesian Curls, Drag Curls.'
      },
      {
        front: 'Why is triceps training more important than biceps for arm circumference?',
        back: 'Triceps makes up approximately 2/3 of arm circumference. Three heads vs. two.'
      },
      {
        front: 'How do you best train the long triceps head?',
        back: 'Overhead exercises: Overhead Cable Extension, Overhead DB Extension, Skull Crushers behind head.'
      }
    ]
  }
};
