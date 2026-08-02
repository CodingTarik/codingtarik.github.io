import React from 'react';

export const advancedProgrammingLesson = {
  id: 'g1_m8_advanced_programming',
  title: {
    en: '8.5 Advanced Programming',
    de: '8.5 Fortgeschrittene Programmierung'
  },
  description: {
    en: 'DUP, block periodization, deload strategies, and autoregulation for sustainable long-term progress.',
    de: 'DUP, Block-Periodisierung, Deload-Strategien und Autoregulation für nachhaltigen Langzeitfortschritt.'
  },
  category: 'athletic_performance',

  content: {
    de: `
### Modul 8.5: Fortgeschrittene Programmierung

Wenn du Jahre trainierst, funktioniert "einfach jeden Tag hart drücken" nicht mehr. Fortgeschrittene brauchen strukturierte Periodisierung, intelligente Deloads und Autoregulation – sonst stagnierst du oder wirst verletzt.

**Ziel:** Lernen, wie du dein Training über Wochen und Monate planst, um Plateaus zu vermeiden und nachhaltig stärker zu werden.

---

### 1. Daily Undulating Periodization (DUP)

<div className="space-y-4 my-6">

<div className="p-5 bg-stone-50 dark:bg-stone-900 rounded-lg border border-stone-200 dark:border-stone-700">
  <h4 className="font-bold text-stone-800 dark:text-stone-200 mb-2">📊 Was ist DUP?</h4>
  <p className="text-sm text-stone-600 dark:text-stone-400 mb-2">
    DUP bedeutet: Jede Einheit innerhalb einer Woche hat eine andere Intensität und Wiederholungsanzahl. Statt immer 4x8 machst du Mo schwer (4x5), Mi mittel (4x8), Fr leicht (4x12).
  </p>
  <ul className="text-sm text-stone-500 dark:text-stone-500 list-disc list-inside space-y-1">
    <li><strong>Vorteil:</strong> Du trainierst verschiedene motorische Qualitäten (Kraft, Hypertrophie, Kraftausdauer) in einer Woche.</li>
    <li><strong>Vorteil:</strong> Mehr neuronale Vielfalt = mehr Reize für Anpassung.</li>
    <li><strong>Vorteil:</strong> Weniger monotone Belastung für Gelenke und ZNS.</li>
    <li><strong>Ideal für:</strong> Fortgeschrittene mit 3-5 Trainingstagen pro Woche pro Muskelgruppe.</li>
  </ul>
</div>

<div className="my-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl border-l-4 border-blue-500">
  <h4 className="font-bold text-blue-800 dark:text-blue-200 mb-2">📅 Beispiel DUP-Woche (Kniebeuge, Bankdrücken, Kreuzheben)</h4>
  <ul className="text-sm text-blue-700 dark:text-blue-300 list-disc list-inside space-y-1">
    <li><strong>Tag 1 (Schwer):</strong> 4x5 @ 85% 1RM – Fokus Maximalkraft</li>
    <li><strong>Tag 2 (Mittel):</strong> 4x8 @ 75% 1RM – Fokus Hypertrophie</li>
    <li><strong>Tag 3 (Leicht):</strong> 4x12 @ 65% 1RM – Fokus Volumen, Technik</li>
  </ul>
  <p className="text-sm text-blue-700 dark:text-blue-300 mt-2">
    Jede Woche kann das Gewicht für jede "Wellenform" leicht steigen (z.B. +2,5kg pro Woche auf der schweren Einheit).
  </p>
</div>

</div>

---

### 2. Block-Periodisierung

<div className="space-y-4 my-6">

<div className="p-5 bg-stone-50 dark:bg-stone-900 rounded-lg border border-stone-200 dark:border-stone-700">
  <h4 className="font-bold text-stone-800 dark:text-stone-200 mb-2">🏗️ Drei Blöcke für langfristigen Aufbau</h4>
  <p className="text-sm text-stone-600 dark:text-stone-400 mb-2">
    Block-Periodisierung unterteilt dein Makrozyklus (z.B. 12-16 Wochen) in Phasen mit verschiedenen Zielen.
  </p>
  <ul className="text-sm text-stone-500 dark:text-stone-500 list-disc list-inside space-y-1">
    <li><strong>Anpassungsblock (4-6 Wochen):</strong> Hohes Volumen, mittlere Intensität (8-12 Reps). Ziel: Muskelaufbau, Technik festigen. Beispiel: 5x10.</li>
    <li><strong>Kraftblock (4-6 Wochen):</strong> Reduziertes Volumen, hohe Intensität (4-6 Reps). Ziel: Maximalkraft steigern. Beispiel: 4x5.</li>
    <li><strong>Peaking/Realization (2-3 Wochen):</strong> Sehr hohe Intensität, sehr geringes Volumen (1-3 Reps). Ziel: Leistung abrufen, 1RM testen.</li>
  </ul>
  <p className="text-sm text-stone-500 dark:text-stone-500 mt-2">
    Danach: Deload-Woche und neuer Zyklus mit angepassten Gewichten.
  </p>
</div>

<div className="my-6 p-4 bg-amber-50 dark:bg-amber-900/20 rounded-xl border-l-4 border-amber-500">
  <h4 className="font-bold text-amber-800 dark:text-amber-200 mb-2">💡 Warum Blöcke?</h4>
  <p className="text-sm text-amber-700 dark:text-amber-300">
    Der Körper passt sich spezifisch an. Wenn du 12 Wochen lang nur 10er-Sätze machst, baust du Masse auf, aber deine Maximalkraft stagniert. Wenn du 12 Wochen nur 3er-Sätze machst, wirst du stark, aber der Muskelaufbau ist limitiert. Blöcke kombinieren beides optimal.
  </p>
</div>

</div>

---

### 3. Deload-Strategien – Wann und wie?

<div className="space-y-4 my-6">

<div className="p-5 bg-stone-50 dark:bg-stone-900 rounded-lg border border-stone-200 dark:border-stone-700">
  <h4 className="font-bold text-stone-800 dark:text-stone-200 mb-2">🔄 Geplante vs. Reaktive Deloads</h4>
  <ul className="text-sm text-stone-500 dark:text-stone-500 list-disc list-inside space-y-1">
    <li><strong>Geplant:</strong> Alle 4. Woche oder nach jedem Block. 1 Woche mit 50-60% Volumen und/oder 60-70% Intensität.</li>
    <li><strong>Reaktiv:</strong> Wenn du müde bist, Gewichte nicht mehr steigern kannst, oder Schmerzen spürst. Sofort Deload einlegen!</li>
    <li><strong>Regel:</strong> Besser ein Deload zu viel als einer zu wenig. Übertraining kostet Monate.</li>
  </ul>
</div>

<div className="p-5 bg-stone-50 dark:bg-stone-900 rounded-lg border border-stone-200 dark:border-stone-700">
  <h4 className="font-bold text-stone-800 dark:text-stone-200 mb-2">📐 Deload-Optionen</h4>
  <ul className="text-sm text-stone-500 dark:text-stone-500 list-disc list-inside space-y-1">
    <li><strong>Volumen-Deload:</strong> Gleiches Gewicht, halbe Sätze (z.B. 2x8 statt 4x8).</li>
    <li><strong>Intensitäts-Deload:</strong> Gleiche Sätze, 60-70% des Gewichts. Leicht und kontrolliert.</li>
    <li><strong>Komplett-Deload:</strong> Nur 1-2 leichte Einheiten in der Woche oder komplett frei.</li>
    <li><strong>Active Rest:</strong> Kein Krafttraining, aber leichte Aktivität (Spazieren, Schwimmen, Radfahren).</li>
  </ul>
</div>

</div>

---

### 4. Autoregulation – Auf deinen Körper hören

<div className="space-y-4 my-6">

<div className="p-5 bg-stone-50 dark:bg-stone-900 rounded-lg border border-stone-200 dark:border-stone-700">
  <h4 className="font-bold text-stone-800 dark:text-stone-200 mb-2">🧠 Was ist Autoregulation?</h4>
  <p className="text-sm text-stone-600 dark:text-stone-400 mb-2">
    Anstatt stur einen Plan zu folgen, passt du Gewicht, Sätze und Pausen an dein Tagesform an. Du fühlst dich stark? Schwerer drücken. Du fühlst dich schlapp? Leichter oder weniger.
  </p>
</div>

<div className="p-5 bg-stone-50 dark:bg-stone-900 rounded-lg border border-stone-200 dark:border-stone-700">
  <h4 className="font-bold text-stone-800 dark:text-stone-200 mb-2">📊 RPE und RIR – Die Werkzeuge</h4>
  <ul className="text-sm text-stone-500 dark:text-stone-500 list-disc list-inside space-y-1">
    <li><strong>RPE (Rate of Perceived Exertion):</strong> 1-10 Skala. RPE 8 = 2 Reps im Tank (RIR 2). RPE 9 = 1 Rep im Tank.</li>
    <li><strong>RIR (Reps in Reserve):</strong> Wie viele saubere Reps hättest du noch geschafft? RIR 2-3 = optimal für Hypertrophie.</li>
    <li><strong>Anwendung:</strong> Plane "4x8 @ RPE 8" statt "4x8 @ 80kg". Wenn du an einem Tag nur RPE 8 bei 75kg erreichst, mach 75kg. Kein Ego.</li>
  </ul>
</div>

<div className="my-6 p-4 bg-green-50 dark:bg-green-900/20 rounded-xl border-l-4 border-green-500">
  <h4 className="font-bold text-green-800 dark:text-green-200 mb-2">✅ Velocity-Based Training (VBT) – Für Nerds</h4>
  <p className="text-sm text-green-700 dark:text-green-300">
    Mit einem Gerät misst du die Bewegungsgeschwindigkeit der Hantel. Langsamer = müder. Wenn die Bar Speed unter einen Schwellenwert fällt, stoppst du den Satz oder reduzierst das Gewicht. Die präziseste Form der Autoregulation – aber teuer und nicht nötig für die meisten.
  </p>
</div>

</div>

---

### 5. Praktische Programmierung: Ein 12-Wochen-Beispiel

<div className="my-6 p-4 bg-stone-50 dark:bg-stone-900 rounded-xl border border-stone-200 dark:border-stone-700">
  <h4 className="font-bold text-stone-800 dark:text-stone-200 mb-3">📅 Hypertrophie → Kraft → Deload</h4>
  <ul className="text-sm text-stone-600 dark:text-stone-400 space-y-2">
    <li><strong>Woche 1-4 (Hypertrophie):</strong> 4x8-12, 65-75% 1RM. Hohes Volumen.</li>
    <li><strong>Woche 5:</strong> Deload. 2-3x8 @ 60%.</li>
    <li><strong>Woche 6-9 (Kraft):</strong> 4x5-6, 80-85% 1RM. Reduziertes Volumen.</li>
    <li><strong>Woche 10:</strong> Deload. 2x5 @ 70%.</li>
    <li><strong>Woche 11-12 (Peaking):</strong> 3x3, 85-90% 1RM. Optional 1RM-Test in Woche 12.</li>
  </ul>
  <p className="text-sm text-stone-500 dark:text-stone-500 mt-3">
    Nach Woche 12: 1 Woche komplett Deload oder Active Rest, dann neuer Zyklus mit angepassten Gewichten (basierend auf neuem 1RM oder geschätzter Kraft).
  </p>
</div>

---

### Zusammenfassung

<div className="my-6 p-4 bg-red-50 dark:bg-red-900/20 rounded-xl border-l-4 border-red-500">
  <h4 className="font-bold text-red-800 dark:text-red-200 mb-2">🎯 Die goldenen Regeln fortgeschrittener Programmierung</h4>
  <ul className="text-sm text-red-700 dark:text-red-300 list-disc list-inside space-y-1">
    <li>DUP nutzen für wöchentliche Intensitätsvariation.</li>
    <li>Block-Periodisierung für langfristige Zyklen (12-16 Wochen).</li>
    <li>Deload alle 4 Wochen oder bei Warnsignalen (Müdigkeit, Plateaus, Schmerzen).</li>
    <li>Autoregulation mit RPE/RIR für Tagesform-Anpassung.</li>
    <li>Logbuch führen – ohne Daten keine sinnvolle Steuerung!</li>
  </ul>
</div>
`,
    en: `
### Module 8.5: Advanced Programming

When you've trained for years, "just push hard every day" no longer works. Advanced lifters need structured periodization, smart deloads, and autoregulation – otherwise you stagnate or get injured.

**Goal:** Learn how to plan your training over weeks and months to avoid plateaus and sustainably get stronger.

---

### 1. Daily Undulating Periodization (DUP)

<div className="space-y-4 my-6">

<div className="p-5 bg-stone-50 dark:bg-stone-900 rounded-lg border border-stone-200 dark:border-stone-700">
  <h4 className="font-bold text-stone-800 dark:text-stone-200 mb-2">📊 What is DUP?</h4>
  <p className="text-sm text-stone-600 dark:text-stone-400 mb-2">
    DUP means: Each session within a week has different intensity and rep ranges. Instead of always 4x8, you do Mon heavy (4x5), Wed medium (4x8), Fri light (4x12).
  </p>
  <ul className="text-sm text-stone-500 dark:text-stone-500 list-disc list-inside space-y-1">
    <li><strong>Benefit:</strong> You train different motor qualities (strength, hypertrophy, endurance) in one week.</li>
    <li><strong>Benefit:</strong> More neural variety = more adaptation stimuli.</li>
    <li><strong>Benefit:</strong> Less monotonous stress on joints and CNS.</li>
    <li><strong>Ideal for:</strong> Advanced lifters with 3-5 training days per week per muscle group.</li>
  </ul>
</div>

<div className="my-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl border-l-4 border-blue-500">
  <h4 className="font-bold text-blue-800 dark:text-blue-200 mb-2">📅 Example DUP Week (Squat, Bench, Deadlift)</h4>
  <ul className="text-sm text-blue-700 dark:text-blue-300 list-disc list-inside space-y-1">
    <li><strong>Day 1 (Heavy):</strong> 4x5 @ 85% 1RM – Focus maximal strength</li>
    <li><strong>Day 2 (Medium):</strong> 4x8 @ 75% 1RM – Focus hypertrophy</li>
    <li><strong>Day 3 (Light):</strong> 4x12 @ 65% 1RM – Focus volume, technique</li>
  </ul>
  <p className="text-sm text-blue-700 dark:text-blue-300 mt-2">
    Each week the weight can increase slightly for each "wave" (e.g., +2.5kg per week on the heavy session).
  </p>
</div>

</div>

---

### 2. Block Periodization

<div className="space-y-4 my-6">

<div className="p-5 bg-stone-50 dark:bg-stone-900 rounded-lg border border-stone-200 dark:border-stone-700">
  <h4 className="font-bold text-stone-800 dark:text-stone-200 mb-2">🏗️ Three Blocks for Long-Term Progress</h4>
  <p className="text-sm text-stone-600 dark:text-stone-400 mb-2">
    Block periodization divides your macro-cycle (e.g., 12-16 weeks) into phases with different goals.
  </p>
  <ul className="text-sm text-stone-500 dark:text-stone-500 list-disc list-inside space-y-1">
    <li><strong>Accumulation Block (4-6 weeks):</strong> High volume, moderate intensity (8-12 reps). Goal: Muscle building, solidify technique. Example: 5x10.</li>
    <li><strong>Intensification Block (4-6 weeks):</strong> Reduced volume, high intensity (4-6 reps). Goal: Increase maximal strength. Example: 4x5.</li>
    <li><strong>Peaking/Realization (2-3 weeks):</strong> Very high intensity, very low volume (1-3 reps). Goal: Express performance, test 1RM.</li>
  </ul>
  <p className="text-sm text-stone-500 dark:text-stone-500 mt-2">
    After: Deload week and new cycle with adjusted weights.
  </p>
</div>

<div className="my-6 p-4 bg-amber-50 dark:bg-amber-900/20 rounded-xl border-l-4 border-amber-500">
  <h4 className="font-bold text-amber-800 dark:text-amber-200 mb-2">💡 Why Blocks?</h4>
  <p className="text-sm text-amber-700 dark:text-amber-300">
    The body adapts specifically. If you do only 10-rep sets for 12 weeks, you build mass but maximal strength stagnates. If you do only 3-rep sets for 12 weeks, you get strong but muscle growth is limited. Blocks combine both optimally.
  </p>
</div>

</div>

---

### 3. Deload Strategies – When and How?

<div className="space-y-4 my-6">

<div className="p-5 bg-stone-50 dark:bg-stone-900 rounded-lg border border-stone-200 dark:border-stone-700">
  <h4 className="font-bold text-stone-800 dark:text-stone-200 mb-2">🔄 Planned vs. Reactive Deloads</h4>
  <ul className="text-sm text-stone-500 dark:text-stone-500 list-disc list-inside space-y-1">
    <li><strong>Planned:</strong> Every 4th week or after each block. 1 week at 50-60% volume and/or 60-70% intensity.</li>
    <li><strong>Reactive:</strong> When you feel fatigued, can't increase weights, or feel pain. Deload immediately!</li>
    <li><strong>Rule:</strong> Better one deload too many than one too few. Overtraining costs months.</li>
  </ul>
</div>

<div className="p-5 bg-stone-50 dark:bg-stone-900 rounded-lg border border-stone-200 dark:border-stone-700">
  <h4 className="font-bold text-stone-800 dark:text-stone-200 mb-2">📐 Deload Options</h4>
  <ul className="text-sm text-stone-500 dark:text-stone-500 list-disc list-inside space-y-1">
    <li><strong>Volume Deload:</strong> Same weight, half the sets (e.g., 2x8 instead of 4x8).</li>
    <li><strong>Intensity Deload:</strong> Same sets, 60-70% of the weight. Light and controlled.</li>
    <li><strong>Complete Deload:</strong> Only 1-2 light sessions per week or complete rest.</li>
    <li><strong>Active Rest:</strong> No strength training, but light activity (walking, swimming, cycling).</li>
  </ul>
</div>

</div>

---

### 4. Autoregulation – Listening to Your Body

<div className="space-y-4 my-6">

<div className="p-5 bg-stone-50 dark:bg-stone-900 rounded-lg border border-stone-200 dark:border-stone-700">
  <h4 className="font-bold text-stone-800 dark:text-stone-200 mb-2">🧠 What is Autoregulation?</h4>
  <p className="text-sm text-stone-600 dark:text-stone-400 mb-2">
    Instead of blindly following a plan, you adapt weight, sets, and rest to your daily readiness. Feel strong? Go heavier. Feel beat? Go lighter or do less.
  </p>
</div>

<div className="p-5 bg-stone-50 dark:bg-stone-900 rounded-lg border border-stone-200 dark:border-stone-700">
  <h4 className="font-bold text-stone-800 dark:text-stone-200 mb-2">📊 RPE and RIR – The Tools</h4>
  <ul className="text-sm text-stone-500 dark:text-stone-500 list-disc list-inside space-y-1">
    <li><strong>RPE (Rate of Perceived Exertion):</strong> 1-10 scale. RPE 8 = 2 reps in reserve (RIR 2). RPE 9 = 1 rep in reserve.</li>
    <li><strong>RIR (Reps in Reserve):</strong> How many clean reps could you have done? RIR 2-3 = optimal for hypertrophy.</li>
    <li><strong>Application:</strong> Plan "4x8 @ RPE 8" instead of "4x8 @ 80kg". If on a given day you only hit RPE 8 at 75kg, do 75kg. No ego.</li>
  </ul>
</div>

<div className="my-6 p-4 bg-green-50 dark:bg-green-900/20 rounded-xl border-l-4 border-green-500">
  <h4 className="font-bold text-green-800 dark:text-green-200 mb-2">✅ Velocity-Based Training (VBT) – For Nerds</h4>
  <p className="text-sm text-green-700 dark:text-green-300">
    With a device you measure bar speed. Slower = more fatigued. When bar speed drops below a threshold, you stop the set or reduce weight. The most precise form of autoregulation – but expensive and unnecessary for most.
  </p>
</div>

</div>

---

### 5. Practical Programming: A 12-Week Example

<div className="my-6 p-4 bg-stone-50 dark:bg-stone-900 rounded-xl border border-stone-200 dark:border-stone-700">
  <h4 className="font-bold text-stone-800 dark:text-stone-200 mb-3">📅 Hypertrophy → Strength → Deload</h4>
  <ul className="text-sm text-stone-600 dark:text-stone-400 space-y-2">
    <li><strong>Weeks 1-4 (Hypertrophy):</strong> 4x8-12, 65-75% 1RM. High volume.</li>
    <li><strong>Week 5:</strong> Deload. 2-3x8 @ 60%.</li>
    <li><strong>Weeks 6-9 (Strength):</strong> 4x5-6, 80-85% 1RM. Reduced volume.</li>
    <li><strong>Week 10:</strong> Deload. 2x5 @ 70%.</li>
    <li><strong>Weeks 11-12 (Peaking):</strong> 3x3, 85-90% 1RM. Optional 1RM test in week 12.</li>
  </ul>
  <p className="text-sm text-stone-500 dark:text-stone-500 mt-3">
    After week 12: 1 week complete deload or active rest, then new cycle with adjusted weights (based on new 1RM or estimated strength).
  </p>
</div>

---

### Summary

<div className="my-6 p-4 bg-red-50 dark:bg-red-900/20 rounded-xl border-l-4 border-red-500">
  <h4 className="font-bold text-red-800 dark:text-red-200 mb-2">🎯 The Golden Rules of Advanced Programming</h4>
  <ul className="text-sm text-red-700 dark:text-red-300 list-disc list-inside space-y-1">
    <li>Use DUP for weekly intensity variation.</li>
    <li>Block periodization for long-term cycles (12-16 weeks).</li>
    <li>Deload every 4 weeks or when warning signs appear (fatigue, plateaus, pain).</li>
    <li>Autoregulation with RPE/RIR for daily readiness adjustment.</li>
    <li>Keep a logbook – without data, no meaningful steering!</li>
  </ul>
</div>
    `
  },

  task: {
    de: {
      title: '12-Wochen-Plan skizzieren',
      description: 'Erstelle einen groben Periodisierungsplan für die nächsten 12 Wochen.',
      checklist: [
        { text: 'Bestimme dein Ziel: Hypertrophie, Kraft oder beides in Blöcken.' },
        { text: 'Teile in 3-4 Blöcke (z.B. 4 Wo Hypertrophie, 4 Wo Kraft, 2 Wo Peaking).' },
        { text: 'Plane Deload-Wochen: Nach jedem Block und/oder alle 4 Wochen.' },
        { text: 'Wähle für eine Woche DUP: 3 Tage pro Hauptübung mit unterschiedlichen Rep-Ranges.' },
        { text: 'Trage RPE/RIR in dein Logbuch ein – mindestens 1 Woche lang.' }
      ]
    },
    en: {
      title: 'Sketch a 12-Week Plan',
      description: 'Create a rough periodization plan for the next 12 weeks.',
      checklist: [
        { text: 'Determine your goal: Hypertrophy, strength, or both in blocks.' },
        { text: 'Divide into 3-4 blocks (e.g., 4 wks hypertrophy, 4 wks strength, 2 wks peaking).' },
        { text: 'Plan deload weeks: After each block and/or every 4 weeks.' },
        { text: 'Implement DUP for one week: 3 days per main lift with different rep ranges.' },
        { text: 'Log RPE/RIR in your training log – at least for 1 week.' }
      ]
    }
  },

  notes: {
    de: [
      {
        front: 'Was ist DUP und was ist der Hauptvorteil?',
        back: 'Daily Undulating Periodization: Jede Wocheneinheit hat andere Intensität (z.B. schwer/mittel/leicht). Vorteil: Verschiedene motorische Qualitäten in einer Woche, weniger monotone Belastung.'
      },
      {
        front: 'Welche drei Blöcke gibt es in der Block-Periodisierung?',
        back: '1. Anpassung (Hypertrophie, 8-12 Reps) 2. Kraft (4-6 Reps) 3. Peaking (1-3 Reps).'
      },
      {
        front: 'Wann sollte man einen Deload einlegen?',
        back: 'Geplant alle 4 Wochen ODER reaktiv bei Müdigkeit, Plateaus oder Schmerzen.'
      },
      {
        front: 'Was bedeutet RPE 8 bzw. RIR 2?',
        back: 'RPE 8 = subjektiv 8/10 Anstrengung. RIR 2 = 2 saubere Wiederholungen noch im Tank. Beide bedeuten: nah am Limit, aber nicht komplett bis zum Muskelversagen.'
      }
    ],
    en: [
      {
        front: 'What is DUP and what is the main benefit?',
        back: 'Daily Undulating Periodization: Each weekly session has different intensity (e.g., heavy/medium/light). Benefit: Different motor qualities in one week, less monotonous stress.'
      },
      {
        front: 'What are the three blocks in block periodization?',
        back: '1. Accumulation (Hypertrophy, 8-12 reps) 2. Intensification (4-6 reps) 3. Peaking (1-3 reps).'
      },
      {
        front: 'When should you schedule a deload?',
        back: 'Planned every 4 weeks OR reactive when fatigued, plateauing, or in pain.'
      },
      {
        front: 'What does RPE 8 or RIR 2 mean?',
        back: 'RPE 8 = subjectively 8/10 effort. RIR 2 = 2 clean reps left in the tank. Both mean: close to limit but not complete muscular failure.'
      }
    ]
  }
};
