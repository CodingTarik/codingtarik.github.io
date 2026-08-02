import React from 'react';

export const progressionsLesson = {
  id: 'g1_m6_progressions',
  title: { 
    en: '6.2 The Progressions', 
    de: '6.2 Die Progressionen' 
  },
  description: { 
    en: 'In the gym you add weight. In calisthenics you change leverage. Learn the progression systems for every movement.', 
    de: 'Im Gym legst du Gewicht auf. Bei Calisthenics änderst du den Hebel. Lerne die Progressions-Systeme für jede Bewegung.' 
  },
  category: 'calisthenics',
  
  content: {
    de: `
### Modul 6.2: Die Progressionen

Im Gym ist Progression einfach: Du legst mehr Gewicht auf die Stange. Bei Calisthenics gibt es kein "mehr Gewicht" – dein Körper wiegt immer gleich viel. Stattdessen veränderst du den **Hebel**, den **Winkel** oder die **Stabilität**, um Übungen schwieriger zu machen. Das ist das **Progressionssystem** – und es ist das Herzstück von Calisthenics.

---

### Das Prinzip: Hebel ändern

<div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-700 my-6">
  <h4 className="font-bold text-blue-800 dark:text-blue-200 mb-4">🔧 Wie macht man Eigengewichtsübungen schwieriger?</h4>
  <ul className="text-sm text-blue-700 dark:text-blue-300 space-y-2">
    <li>• <strong>Hebel verlängern:</strong> Arme/Beine weiter vom Körper → mehr Last (z.B. Tuck → Straddle → Full Front Lever)</li>
    <li>• <strong>Winkel verändern:</strong> Steiler = schwieriger (z.B. Liegestütz → Pike Push-Up → Handstand Push-Up)</li>
    <li>• <strong>Stabilität reduzieren:</strong> Instabile Unterlage oder einarmig/einbeinig (z.B. Klimmzug → Einarmiger Klimmzug)</li>
    <li>• <strong>Tempo verändern:</strong> Langsamer = schwieriger (z.B. 5-Sekunden-Negative)</li>
    <li>• <strong>Pause einbauen:</strong> In der schwierigsten Position anhalten (z.B. 3 Sek. am tiefsten Punkt)</li>
  </ul>
</div>

---

### Progression: Liegestütze (Push-Up)

Von der Wand bis zum einarmigen Liegestütz – die komplette Progression:

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border border-green-200 dark:border-green-700 my-6">
  <h4 className="font-bold text-green-800 dark:text-green-200 mb-4">📈 Push-Up Progression (Anfänger → Fortgeschritten)</h4>
  <ol className="text-sm text-green-700 dark:text-green-300 space-y-2">
    <li><strong>1. Wand-Liegestütze</strong> – Stehend an der Wand drücken. Für absolute Anfänger.</li>
    <li><strong>2. Erhöhte Liegestütze (Incline)</strong> – Hände auf Bank/Tisch. Je tiefer, desto schwerer.</li>
    <li><strong>3. Knie-Liegestütze</strong> – Auf den Knien. Voller Bewegungsradius!</li>
    <li><strong>4. Volle Liegestütze</strong> – Standard. Der Klassiker. Erst weiter, wenn du 3×12 sauber schaffst.</li>
    <li><strong>5. Diamond Push-Ups</strong> – Hände eng zusammen (Dreieck). Mehr Trizeps.</li>
    <li><strong>6. Decline Push-Ups</strong> – Füße erhöht. Mehr Schulter, schwieriger.</li>
    <li><strong>7. Pseudo-Planche Push-Ups</strong> – Hände neben der Hüfte, Finger zeigen nach hinten. Brutal für die Schultern.</li>
    <li><strong>8. Archer Push-Ups</strong> – Ein Arm streckt sich seitlich. Vorstufe zum einarmigen.</li>
    <li><strong>9. Einarmige Liegestütze</strong> – Das Endziel. Erfordert extreme Kraft und Balance.</li>
  </ol>
  <p className="text-sm text-green-700 dark:text-green-300 mt-3"><strong>Regel:</strong> Beherrsche 3×8-12 saubere Wiederholungen, bevor du zur nächsten Stufe gehst.</p>
</div>

---

### Progression: Klimmzüge (Pull-Up)

<div className="bg-amber-50 dark:bg-amber-900/20 p-6 rounded-xl border border-amber-200 dark:border-amber-700 my-6">
  <h4 className="font-bold text-amber-800 dark:text-amber-200 mb-4">📈 Pull-Up Progression (Anfänger → Fortgeschritten)</h4>
  <ol className="text-sm text-amber-700 dark:text-amber-300 space-y-2">
    <li><strong>1. Dead Hangs</strong> – Einfach an der Stange hängen (30-60 Sek). Baut Griffkraft und Schulterstabilität auf.</li>
    <li><strong>2. Scapular Pulls</strong> – Hängen + Schulterblätter zusammenziehen (ohne Arme beugen). Aktiviert den Rücken.</li>
    <li><strong>3. Negative Klimmzüge</strong> – Hochspringen, dann 5 Sekunden kontrolliert ablassen. DER Schlüssel zum ersten Klimmzug!</li>
    <li><strong>4. Band-Assistierte Klimmzüge</strong> – Widerstandsband um die Stange, Fuß rein. Das Band hilft unten am meisten.</li>
    <li><strong>5. Volle Klimmzüge (Chin-Up)</strong> – Untergriff (Handflächen zu dir). Leichter als Obergriff.</li>
    <li><strong>6. Volle Klimmzüge (Pull-Up)</strong> – Obergriff. Der Standard. Erst weiter bei 3×8.</li>
    <li><strong>7. L-Sit Pull-Ups</strong> – Klimmzüge mit Beinen im 90° Winkel. Mehr Core.</li>
    <li><strong>8. Typewriter Pull-Ups</strong> – Oben von links nach rechts bewegen. Extrem anspruchsvoll.</li>
    <li><strong>9. Archer Pull-Ups</strong> – Ein Arm greift weit, der andere eng. Vorstufe zum einarmigen.</li>
    <li><strong>10. Einarmiger Klimmzug</strong> – Das Calisthenics-Endziel. Erfordert jahrelanges Training.</li>
  </ol>
</div>

---

### Progression: Dips

<div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-700 my-6">
  <h4 className="font-bold text-blue-800 dark:text-blue-200 mb-4">📈 Dip Progression</h4>
  <ol className="text-sm text-blue-700 dark:text-blue-300 space-y-2">
    <li><strong>1. Bench Dips</strong> – Hände auf Bank hinter dem Rücken. Beine angewinkelt (leichter) oder gestreckt (schwerer).</li>
    <li><strong>2. Band-Assistierte Dips</strong> – Widerstandsband an Barren, Knie rein.</li>
    <li><strong>3. Negative Dips</strong> – Hochspringen, 5 Sek kontrolliert ablassen.</li>
    <li><strong>4. Volle Dips</strong> – Am Barren. Mindestens 90° Beugung.</li>
    <li><strong>5. Ring Dips</strong> – Auf Turnringen. Exponentiell schwieriger wegen Instabilität.</li>
    <li><strong>6. Gewichtete Dips</strong> – Mit Gürtel + Gewichtsscheibe (Übergang zum Hybrid-Training).</li>
  </ol>
</div>

---

### Progression: Kniebeugen (Squats)

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border border-green-200 dark:border-green-700 my-6">
  <h4 className="font-bold text-green-800 dark:text-green-200 mb-4">📈 Squat Progression</h4>
  <ol className="text-sm text-green-700 dark:text-green-300 space-y-2">
    <li><strong>1. Assistierte Kniebeugen</strong> – An einem Stuhl oder Türrahmen festhalten.</li>
    <li><strong>2. Bodyweight Squats</strong> – Volle Tiefe, kontrolliert.</li>
    <li><strong>3. Jump Squats</strong> – Explosiv nach oben springen.</li>
    <li><strong>4. Bulgarian Split Squats</strong> – Hinterer Fuß erhöht. Einbeinige Stabilität.</li>
    <li><strong>5. Shrimp Squats</strong> – Ein Bein nach hinten greifen, auf einem Bein beugen.</li>
    <li><strong>6. Pistol Squats</strong> – Einbeinig, anderes Bein vor dem Körper gestreckt. Erfordert Kraft, Balance UND Mobilität.</li>
  </ol>
</div>

---

### Wann zur nächsten Stufe wechseln?

<div className="bg-amber-50 dark:bg-amber-900/20 p-6 rounded-xl border border-amber-200 dark:border-amber-700 my-6">
  <h4 className="font-bold text-amber-800 dark:text-amber-200 mb-4">✅ Die Progressions-Regel</h4>
  <p className="text-sm text-amber-700 dark:text-amber-300 mb-3">Du bist bereit für die nächste Stufe, wenn du die aktuelle Stufe mit <strong>3 Sätzen × 8-12 sauberen Wiederholungen</strong> beherrschst.</p>
  <ul className="text-sm text-amber-700 dark:text-amber-300 space-y-2">
    <li>• Schaffst du 3×12? → Nächste Progressionsstufe.</li>
    <li>• Schaffst du 3×5 auf der neuen Stufe? → Perfekt, arbeite dich hoch.</li>
    <li>• Schaffst du weniger als 3×3? → Gehe eine Stufe zurück und trainiere dort weiter.</li>
  </ul>
  <p className="text-sm text-amber-700 dark:text-amber-300 mt-3"><strong>Geduld!</strong> Einige Progressionsstufen brauchen Wochen, andere Monate. Das ist normal und teil des Prozesses.</p>
</div>
`,
    en: `
### Module 6.2: The Progressions

In the gym, progression is simple: you add more weight to the bar. In calisthenics, there's no "more weight" – your body always weighs the same. Instead, you change the **leverage**, the **angle**, or the **stability** to make exercises harder. This is the **progression system** – and it's the heart of calisthenics.

---

### The Principle: Changing Leverage

<div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-700 my-6">
  <h4 className="font-bold text-blue-800 dark:text-blue-200 mb-4">🔧 How Do You Make Bodyweight Exercises Harder?</h4>
  <ul className="text-sm text-blue-700 dark:text-blue-300 space-y-2">
    <li>• <strong>Extend leverage:</strong> Arms/legs further from body → more load (e.g. Tuck → Straddle → Full Front Lever)</li>
    <li>• <strong>Change angle:</strong> Steeper = harder (e.g. Push-up → Pike Push-Up → Handstand Push-Up)</li>
    <li>• <strong>Reduce stability:</strong> Unstable surface or one-armed/one-legged (e.g. Pull-up → One-arm Pull-up)</li>
    <li>• <strong>Change tempo:</strong> Slower = harder (e.g. 5-second negatives)</li>
    <li>• <strong>Add pauses:</strong> Hold at the hardest position (e.g. 3 sec at the bottom)</li>
  </ul>
</div>

---

### Progression: Push-Ups

From wall to one-arm – the complete progression:

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border border-green-200 dark:border-green-700 my-6">
  <h4 className="font-bold text-green-800 dark:text-green-200 mb-4">📈 Push-Up Progression (Beginner → Advanced)</h4>
  <ol className="text-sm text-green-700 dark:text-green-300 space-y-2">
    <li><strong>1. Wall Push-Ups</strong> – Push against wall standing. For absolute beginners.</li>
    <li><strong>2. Incline Push-Ups</strong> – Hands on bench/table. Lower = harder.</li>
    <li><strong>3. Knee Push-Ups</strong> – On knees. Full range of motion!</li>
    <li><strong>4. Full Push-Ups</strong> – Standard. The classic. Don't progress until you can do 3×12 clean.</li>
    <li><strong>5. Diamond Push-Ups</strong> – Hands close together (triangle). More triceps.</li>
    <li><strong>6. Decline Push-Ups</strong> – Feet elevated. More shoulder, harder.</li>
    <li><strong>7. Pseudo-Planche Push-Ups</strong> – Hands next to hips, fingers pointing backward. Brutal for shoulders.</li>
    <li><strong>8. Archer Push-Ups</strong> – One arm extends to the side. Stepping stone to one-arm.</li>
    <li><strong>9. One-Arm Push-Ups</strong> – The end goal. Requires extreme strength and balance.</li>
  </ol>
  <p className="text-sm text-green-700 dark:text-green-300 mt-3"><strong>Rule:</strong> Master 3×8-12 clean reps before moving to the next level.</p>
</div>

---

### Progression: Pull-Ups

<div className="bg-amber-50 dark:bg-amber-900/20 p-6 rounded-xl border border-amber-200 dark:border-amber-700 my-6">
  <h4 className="font-bold text-amber-800 dark:text-amber-200 mb-4">📈 Pull-Up Progression (Beginner → Advanced)</h4>
  <ol className="text-sm text-amber-700 dark:text-amber-300 space-y-2">
    <li><strong>1. Dead Hangs</strong> – Simply hang from the bar (30-60 sec). Builds grip strength and shoulder stability.</li>
    <li><strong>2. Scapular Pulls</strong> – Hang + squeeze shoulder blades together (without bending arms). Activates back.</li>
    <li><strong>3. Negative Pull-Ups</strong> – Jump up, then lower yourself for 5 seconds. THE key to your first pull-up!</li>
    <li><strong>4. Band-Assisted Pull-Ups</strong> – Resistance band around bar, foot in loop. Band helps most at the bottom.</li>
    <li><strong>5. Full Chin-Ups</strong> – Underhand grip (palms facing you). Easier than overhand.</li>
    <li><strong>6. Full Pull-Ups</strong> – Overhand grip. The standard. Don't progress until 3×8.</li>
    <li><strong>7. L-Sit Pull-Ups</strong> – Pull-ups with legs at 90°. More core.</li>
    <li><strong>8. Typewriter Pull-Ups</strong> – Move side to side at the top. Extremely demanding.</li>
    <li><strong>9. Archer Pull-Ups</strong> – One arm grips wide, other close. Stepping stone to one-arm.</li>
    <li><strong>10. One-Arm Pull-Up</strong> – The calisthenics end goal. Requires years of training.</li>
  </ol>
</div>

---

### Progression: Dips

<div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-700 my-6">
  <h4 className="font-bold text-blue-800 dark:text-blue-200 mb-4">📈 Dip Progression</h4>
  <ol className="text-sm text-blue-700 dark:text-blue-300 space-y-2">
    <li><strong>1. Bench Dips</strong> – Hands on bench behind back. Legs bent (easier) or straight (harder).</li>
    <li><strong>2. Band-Assisted Dips</strong> – Resistance band on parallel bars, knees in loop.</li>
    <li><strong>3. Negative Dips</strong> – Jump up, lower for 5 sec controlled.</li>
    <li><strong>4. Full Dips</strong> – On parallel bars. At least 90° bend.</li>
    <li><strong>5. Ring Dips</strong> – On gymnastic rings. Exponentially harder due to instability.</li>
    <li><strong>6. Weighted Dips</strong> – With belt + weight plate (transition to hybrid training).</li>
  </ol>
</div>

---

### Progression: Squats

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border border-green-200 dark:border-green-700 my-6">
  <h4 className="font-bold text-green-800 dark:text-green-200 mb-4">📈 Squat Progression</h4>
  <ol className="text-sm text-green-700 dark:text-green-300 space-y-2">
    <li><strong>1. Assisted Squats</strong> – Hold onto a chair or doorframe.</li>
    <li><strong>2. Bodyweight Squats</strong> – Full depth, controlled.</li>
    <li><strong>3. Jump Squats</strong> – Explode upward into a jump.</li>
    <li><strong>4. Bulgarian Split Squats</strong> – Rear foot elevated. Single-leg stability.</li>
    <li><strong>5. Shrimp Squats</strong> – Grab one leg behind, squat on the other.</li>
    <li><strong>6. Pistol Squats</strong> – Single-leg, other leg extended forward. Requires strength, balance AND mobility.</li>
  </ol>
</div>

---

### When to Move to the Next Level?

<div className="bg-amber-50 dark:bg-amber-900/20 p-6 rounded-xl border border-amber-200 dark:border-amber-700 my-6">
  <h4 className="font-bold text-amber-800 dark:text-amber-200 mb-4">✅ The Progression Rule</h4>
  <p className="text-sm text-amber-700 dark:text-amber-300 mb-3">You're ready for the next level when you can master the current level with <strong>3 sets × 8-12 clean reps</strong>.</p>
  <ul className="text-sm text-amber-700 dark:text-amber-300 space-y-2">
    <li>• Can do 3×12? → Next progression level.</li>
    <li>• Can do 3×5 at the new level? → Perfect, work your way up.</li>
    <li>• Less than 3×3? → Go back one level and keep training there.</li>
  </ul>
  <p className="text-sm text-amber-700 dark:text-amber-300 mt-3"><strong>Patience!</strong> Some progression levels take weeks, others months. That's normal and part of the process.</p>
</div>
`
  },

  task: {
    de: {
      title: 'Finde deine Progressionsstufe',
      description: 'Bestimme dein aktuelles Level in den 4 Grundbewegungen.',
      checklist: [
        { text: 'Liegestütze: Finde deine aktuelle Stufe (welche Variante schaffst du 3×8?).' },
        { text: 'Klimmzüge: Teste dein Level (Dead Hang? Negative? Volle Klimmzüge?).' },
        { text: 'Dips: Wo stehst du (Bench Dips? Volle Dips?).' },
        { text: 'Kniebeugen: Teste dich (Bodyweight Squats sauber? Bulgarian Split Squats? Pistol Squat?).' }
      ]
    },
    en: {
      title: 'Find Your Progression Level',
      description: 'Determine your current level in the 4 basic movements.',
      checklist: [
        { text: 'Push-ups: Find your current level (which variation can you do 3×8?).' },
        { text: 'Pull-ups: Test your level (dead hang? Negatives? Full pull-ups?).' },
        { text: 'Dips: Where are you (bench dips? Full dips?).' },
        { text: 'Squats: Test yourself (clean bodyweight squats? Bulgarian split squats? Pistol squat?).' }
      ]
    }
  },

  notes: {
    de: [
      {
        front: 'Wie progressiert man bei Calisthenics statt mehr Gewicht?',
        back: 'Durch Hebel-Änderungen (Arme/Beine weiter vom Körper), Winkel-Änderungen (steiler), weniger Stabilität (einarmig/einbeinig), Tempo und Pausen.'
      },
      {
        front: 'Was ist die Progressions-Regel für den Stufenwechsel?',
        back: 'Beherrsche 3 Sätze × 8-12 saubere Wiederholungen auf der aktuellen Stufe, bevor du zur nächsten wechselst.'
      },
      {
        front: 'Was ist die beste Methode, um den ersten Klimmzug zu lernen?',
        back: 'Negative Klimmzüge! Hochspringen und 5 Sekunden kontrolliert ablassen. Plus Dead Hangs und Scapular Pulls.'
      },
      {
        front: 'Was ist die Push-Up Progression vom Anfänger zum Profi?',
        back: 'Wand → Erhöht → Knie → Voll → Diamond → Decline → Pseudo-Planche → Archer → Einarmig.'
      }
    ],
    en: [
      {
        front: 'How do you progress in calisthenics instead of adding weight?',
        back: 'Through leverage changes (arms/legs further from body), angle changes (steeper), less stability (one-arm/one-leg), tempo, and pauses.'
      },
      {
        front: 'What\'s the progression rule for moving to the next level?',
        back: 'Master 3 sets × 8-12 clean reps at the current level before moving to the next one.'
      },
      {
        front: 'What\'s the best method to learn your first pull-up?',
        back: 'Negative pull-ups! Jump up and lower for 5 seconds controlled. Plus dead hangs and scapular pulls.'
      },
      {
        front: 'What\'s the push-up progression from beginner to advanced?',
        back: 'Wall → Incline → Knee → Full → Diamond → Decline → Pseudo-Planche → Archer → One-Arm.'
      }
    ]
  }
};
