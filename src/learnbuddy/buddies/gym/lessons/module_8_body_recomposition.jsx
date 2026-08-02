import React from 'react';

export const bodyRecompositionLesson = {
  id: 'g1_m8_body_recomp',
  title: { 
    en: '8.3 Body Recomposition', 
    de: '8.3 Body Recomposition' 
  },
  description: { 
    en: 'Simultaneous fat loss and muscle gain, calorie cycling, protein timing, and recomp strategies for different levels.', 
    de: 'Gleichzeitiger Fettabbau und Muskelaufbau, Calorie Cycling, Protein-Timing und Recomp-Strategien für verschiedene Levels.' 
  },
  category: 'athletic_performance',
  
  content: {
    de: `
### Modul 8.3: Body Recomposition

Body Recomposition ("Recomp") ist der heilige Gral des Kraftsports: Gleichzeitig Muskeln aufbauen UND Fett verlieren. Lange galt das als unmöglich, aber die Wissenschaft zeigt: Es funktioniert – unter bestimmten Bedingungen.

---

### 1. Kann man gleichzeitig Muskeln aufbauen und Fett verlieren?

<div className="my-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl border-l-4 border-blue-500">
  <h4 className="font-bold text-blue-800 dark:text-blue-200 mb-2">📊 Die Wissenschaft sagt: Ja, aber...</h4>
  <p className="text-sm text-blue-700 dark:text-blue-300">
    Recomp funktioniert am besten bei bestimmten Personengruppen. Je weiter fortgeschritten du bist, desto schwieriger wird es.
  </p>
  <ul className="text-sm text-blue-700 dark:text-blue-300 list-disc list-inside mt-2 space-y-1">
    <li><strong>Anfänger (< 1 Jahr Training):</strong> Recomp ist fast garantiert. "Newbie Gains" ermöglichen Muskelwachstum auch im Defizit.</li>
    <li><strong>Übergewichtige Trainierende:</strong> Hohe Fettreserven liefern Energie für Muskelaufbau. Ideale Recomp-Kandidaten.</li>
    <li><strong>Wiedereinsteiger:</strong> Muscle Memory macht schnellen Wiederaufbau möglich, auch im Defizit.</li>
    <li><strong>Fortgeschrittene (3+ Jahre):</strong> Recomp ist langsam und schwierig. Bulk/Cut-Zyklen sind effizienter.</li>
  </ul>
</div>

---

### 2. Die drei Säulen der Recomposition

<div className="space-y-4 my-6">

<div className="p-5 bg-stone-50 dark:bg-stone-900 rounded-lg border border-stone-200 dark:border-stone-700">
  <h4 className="font-bold text-stone-800 dark:text-stone-200 mb-2">🔑 Säule 1: Moderate Kaloriensteuerung</h4>
  <p className="text-sm text-stone-600 dark:text-stone-400 mb-2">
    Weder großes Defizit noch großer Überschuss. Recomp lebt von der "Grauzone":
  </p>
  <ul className="text-sm text-stone-500 dark:text-stone-500 list-disc list-inside space-y-1">
    <li><strong>Option A – Maintenance:</strong> Iss auf Erhaltungskalorien (TDEE). Körper nutzt Fettreserven für Muskelaufbau.</li>
    <li><strong>Option B – Leichtes Defizit:</strong> 200-300 kcal unter TDEE. Langsamer Fettabbau bei Muskelerhalt/minimalem Aufbau.</li>
    <li><strong>Option C – Calorie Cycling:</strong> Trainingstage: leichter Überschuss (+200-300 kcal). Ruhetage: leichtes Defizit (-300-500 kcal). Wochenkalorienbilanz nahe Maintenance.</li>
  </ul>
</div>

<div className="p-5 bg-stone-50 dark:bg-stone-900 rounded-lg border border-stone-200 dark:border-stone-700">
  <h4 className="font-bold text-stone-800 dark:text-stone-200 mb-2">🥩 Säule 2: Hohe Proteinzufuhr</h4>
  <p className="text-sm text-stone-600 dark:text-stone-400 mb-2">
    Protein ist der wichtigste Makronährstoff bei Recomp. Es schützt Muskeln im Defizit und baut sie auf.
  </p>
  <ul className="text-sm text-stone-500 dark:text-stone-500 list-disc list-inside space-y-1">
    <li><strong>Minimum:</strong> 1,6g Protein pro kg Körpergewicht pro Tag.</li>
    <li><strong>Optimal für Recomp:</strong> 2,0-2,4g pro kg. Höher als bei normalem Aufbau!</li>
    <li><strong>Verteilung:</strong> 4-5 Mahlzeiten à 30-50g Protein. Alle 3-4 Stunden.</li>
    <li><strong>Post-Workout:</strong> 40-50g Protein innerhalb von 2 Stunden nach dem Training.</li>
  </ul>
</div>

<div className="p-5 bg-stone-50 dark:bg-stone-900 rounded-lg border border-stone-200 dark:border-stone-700">
  <h4 className="font-bold text-stone-800 dark:text-stone-200 mb-2">🏋️ Säule 3: Progressives Krafttraining</h4>
  <p className="text-sm text-stone-600 dark:text-stone-400 mb-2">
    Ohne progressiven Reiz gibt es keinen Grund für den Körper, Muskeln aufzubauen. Training ist der SIGNAL-Geber.
  </p>
  <ul className="text-sm text-stone-500 dark:text-stone-500 list-disc list-inside space-y-1">
    <li><strong>Trainingsfrequenz:</strong> 4-5x pro Woche. Upper/Lower oder Push/Pull/Legs Split.</li>
    <li><strong>Jede Muskelgruppe 2x pro Woche</strong> für optimale Proteinsynthese.</li>
    <li><strong>Progressive Overload:</strong> Mehr Gewicht, mehr Reps oder mehr Sätze jede Woche. Das Logbuch ist Pflicht!</li>
    <li><strong>Volumen:</strong> 10-20 Sätze pro Muskelgruppe pro Woche.</li>
  </ul>
</div>

</div>

---

### 3. Calorie Cycling im Detail

<div className="my-6 p-4 bg-amber-50 dark:bg-amber-900/20 rounded-xl border-l-4 border-amber-500">
  <h4 className="font-bold text-amber-800 dark:text-amber-200 mb-2">🔄 Calorie Cycling – Das Recomp-Werkzeug</h4>
  <p className="text-sm text-amber-700 dark:text-amber-300 mb-2">
    Beispiel für eine Person mit 2500 kcal TDEE (80kg, 4x Training/Woche):
  </p>
  <ul className="text-sm text-amber-700 dark:text-amber-300 list-disc list-inside space-y-1">
    <li><strong>Trainingstage (4x/Woche):</strong> 2700 kcal (200g Protein, 320g Carbs, 70g Fett)</li>
    <li><strong>Ruhetage (3x/Woche):</strong> 2100 kcal (200g Protein, 150g Carbs, 75g Fett)</li>
    <li><strong>Wochenschnitt:</strong> ~2442 kcal/Tag (leichtes Defizit)</li>
  </ul>
  <p className="text-sm text-amber-700 dark:text-amber-300 mt-2">
    <strong>Prinzip:</strong> Mehr Kohlenhydrate an Trainingstagen (Muskelaufbau-Signal), weniger an Ruhetagen (Fettabbau-Fenster). Protein bleibt JEDEN Tag hoch.
  </p>
</div>

---

### 4. Protein-Timing für Recomp

<div className="space-y-4 my-6">

<div className="p-5 bg-stone-50 dark:bg-stone-900 rounded-lg border border-stone-200 dark:border-stone-700">
  <h4 className="font-bold text-stone-800 dark:text-stone-200 mb-2">⏰ Wann Protein essen?</h4>
  <ul className="text-sm text-stone-500 dark:text-stone-500 list-disc list-inside space-y-1">
    <li><strong>Pre-Workout (1-2h vorher):</strong> 30-40g Protein + Kohlenhydrate. Startet die Proteinsynthese.</li>
    <li><strong>Post-Workout (0-2h danach):</strong> 40-50g Protein. Das "anabole Fenster" ist breiter als gedacht (2-3 Stunden), aber existiert.</li>
    <li><strong>Vor dem Schlafen:</strong> 30-40g Casein oder Magerquark. Langsam verdaulich, füttert die Muskeln über Nacht.</li>
    <li><strong>Morgens:</strong> Protein-reiche Mahlzeit nach dem Aufwachen, um die Fastenperiode zu brechen.</li>
  </ul>
</div>

</div>

---

### 5. Wie misst man Fortschritt bei Recomp?

<div className="my-6 p-4 bg-red-50 dark:bg-red-900/20 rounded-xl border-l-4 border-red-500">
  <h4 className="font-bold text-red-800 dark:text-red-200 mb-2">⚠️ Die Waage lügt bei Recomp!</h4>
  <p className="text-sm text-red-700 dark:text-red-300">
    Dein Gewicht kann GLEICH bleiben, während du gleichzeitig Muskeln aufbaust und Fett verlierst. Nutze stattdessen:
  </p>
  <ul className="text-sm text-red-700 dark:text-red-300 list-disc list-inside mt-2 space-y-1">
    <li><strong>Umfangmessungen:</strong> Brust, Arme, Taille, Oberschenkel. Taille kleiner + Arme größer = Recomp funktioniert.</li>
    <li><strong>Spiegelbilder / Fotos:</strong> Alle 2-4 Wochen, gleiche Beleuchtung, gleiche Pose. Ehrlichster Indikator.</li>
    <li><strong>Kraftwerte:</strong> Gehen die Gewichte hoch? Dann baust du Muskeln auf.</li>
    <li><strong>Kaliper / Körperfettmessung:</strong> Alle 4-6 Wochen. 7-Falten-Methode oder DEXA-Scan für Genauigkeit.</li>
  </ul>
</div>

`,
    en: `
### Module 8.3: Body Recomposition

Body Recomposition ("Recomp") is the holy grail of strength sports: Building muscle AND losing fat simultaneously. For a long time this was considered impossible, but science shows: it works – under certain conditions.

---

### 1. Can You Build Muscle and Lose Fat at the Same Time?

<div className="my-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl border-l-4 border-blue-500">
  <h4 className="font-bold text-blue-800 dark:text-blue-200 mb-2">📊 Science Says: Yes, But...</h4>
  <p className="text-sm text-blue-700 dark:text-blue-300">
    Recomp works best for certain groups. The more advanced you are, the harder it becomes.
  </p>
  <ul className="text-sm text-blue-700 dark:text-blue-300 list-disc list-inside mt-2 space-y-1">
    <li><strong>Beginners (< 1 year training):</strong> Recomp is almost guaranteed. "Newbie gains" allow muscle growth even in a deficit.</li>
    <li><strong>Overweight trainees:</strong> High fat reserves provide energy for muscle building. Ideal recomp candidates.</li>
    <li><strong>Returning lifters:</strong> Muscle memory enables rapid rebuilding, even in a deficit.</li>
    <li><strong>Advanced (3+ years):</strong> Recomp is slow and difficult. Bulk/cut cycles are more efficient.</li>
  </ul>
</div>

---

### 2. The Three Pillars of Recomposition

<div className="space-y-4 my-6">

<div className="p-5 bg-stone-50 dark:bg-stone-900 rounded-lg border border-stone-200 dark:border-stone-700">
  <h4 className="font-bold text-stone-800 dark:text-stone-200 mb-2">🔑 Pillar 1: Moderate Calorie Management</h4>
  <p className="text-sm text-stone-600 dark:text-stone-400 mb-2">
    Neither a large deficit nor a large surplus. Recomp lives in the "gray zone":
  </p>
  <ul className="text-sm text-stone-500 dark:text-stone-500 list-disc list-inside space-y-1">
    <li><strong>Option A – Maintenance:</strong> Eat at maintenance calories (TDEE). Body uses fat reserves for muscle building.</li>
    <li><strong>Option B – Slight Deficit:</strong> 200-300 kcal below TDEE. Slow fat loss while maintaining/minimally building muscle.</li>
    <li><strong>Option C – Calorie Cycling:</strong> Training days: slight surplus (+200-300 kcal). Rest days: slight deficit (-300-500 kcal). Weekly calorie balance near maintenance.</li>
  </ul>
</div>

<div className="p-5 bg-stone-50 dark:bg-stone-900 rounded-lg border border-stone-200 dark:border-stone-700">
  <h4 className="font-bold text-stone-800 dark:text-stone-200 mb-2">🥩 Pillar 2: High Protein Intake</h4>
  <p className="text-sm text-stone-600 dark:text-stone-400 mb-2">
    Protein is the most important macronutrient during recomp. It protects muscles in a deficit and builds them.
  </p>
  <ul className="text-sm text-stone-500 dark:text-stone-500 list-disc list-inside space-y-1">
    <li><strong>Minimum:</strong> 1.6g protein per kg bodyweight per day.</li>
    <li><strong>Optimal for Recomp:</strong> 2.0-2.4g per kg. Higher than during normal bulking!</li>
    <li><strong>Distribution:</strong> 4-5 meals of 30-50g protein. Every 3-4 hours.</li>
    <li><strong>Post-Workout:</strong> 40-50g protein within 2 hours after training.</li>
  </ul>
</div>

<div className="p-5 bg-stone-50 dark:bg-stone-900 rounded-lg border border-stone-200 dark:border-stone-700">
  <h4 className="font-bold text-stone-800 dark:text-stone-200 mb-2">🏋️ Pillar 3: Progressive Strength Training</h4>
  <p className="text-sm text-stone-600 dark:text-stone-400 mb-2">
    Without progressive stimulus, there's no reason for the body to build muscle. Training is the SIGNAL.
  </p>
  <ul className="text-sm text-stone-500 dark:text-stone-500 list-disc list-inside space-y-1">
    <li><strong>Training frequency:</strong> 4-5x per week. Upper/Lower or Push/Pull/Legs split.</li>
    <li><strong>Each muscle group 2x per week</strong> for optimal protein synthesis.</li>
    <li><strong>Progressive Overload:</strong> More weight, more reps, or more sets each week. The logbook is mandatory!</li>
    <li><strong>Volume:</strong> 10-20 sets per muscle group per week.</li>
  </ul>
</div>

</div>

---

### 3. Calorie Cycling in Detail

<div className="my-6 p-4 bg-amber-50 dark:bg-amber-900/20 rounded-xl border-l-4 border-amber-500">
  <h4 className="font-bold text-amber-800 dark:text-amber-200 mb-2">🔄 Calorie Cycling – The Recomp Tool</h4>
  <p className="text-sm text-amber-700 dark:text-amber-300 mb-2">
    Example for a person with 2500 kcal TDEE (175 lbs, 4x training/week):
  </p>
  <ul className="text-sm text-amber-700 dark:text-amber-300 list-disc list-inside space-y-1">
    <li><strong>Training days (4x/week):</strong> 2700 kcal (200g protein, 320g carbs, 70g fat)</li>
    <li><strong>Rest days (3x/week):</strong> 2100 kcal (200g protein, 150g carbs, 75g fat)</li>
    <li><strong>Weekly average:</strong> ~2442 kcal/day (slight deficit)</li>
  </ul>
  <p className="text-sm text-amber-700 dark:text-amber-300 mt-2">
    <strong>Principle:</strong> More carbs on training days (muscle building signal), fewer on rest days (fat loss window). Protein stays HIGH every day.
  </p>
</div>

---

### 4. Protein Timing for Recomp

<div className="space-y-4 my-6">

<div className="p-5 bg-stone-50 dark:bg-stone-900 rounded-lg border border-stone-200 dark:border-stone-700">
  <h4 className="font-bold text-stone-800 dark:text-stone-200 mb-2">⏰ When to Eat Protein?</h4>
  <ul className="text-sm text-stone-500 dark:text-stone-500 list-disc list-inside space-y-1">
    <li><strong>Pre-Workout (1-2h before):</strong> 30-40g protein + carbs. Starts protein synthesis.</li>
    <li><strong>Post-Workout (0-2h after):</strong> 40-50g protein. The "anabolic window" is wider than thought (2-3 hours), but it exists.</li>
    <li><strong>Before bed:</strong> 30-40g casein or cottage cheese. Slow-digesting, feeds muscles overnight.</li>
    <li><strong>Morning:</strong> Protein-rich meal after waking to break the fasting period.</li>
  </ul>
</div>

</div>

---

### 5. How to Measure Progress During Recomp?

<div className="my-6 p-4 bg-red-50 dark:bg-red-900/20 rounded-xl border-l-4 border-red-500">
  <h4 className="font-bold text-red-800 dark:text-red-200 mb-2">⚠️ The Scale Lies During Recomp!</h4>
  <p className="text-sm text-red-700 dark:text-red-300">
    Your weight can stay the SAME while you simultaneously build muscle and lose fat. Use these instead:
  </p>
  <ul className="text-sm text-red-700 dark:text-red-300 list-disc list-inside mt-2 space-y-1">
    <li><strong>Circumference measurements:</strong> Chest, arms, waist, thighs. Waist smaller + arms bigger = recomp is working.</li>
    <li><strong>Mirror / Photos:</strong> Every 2-4 weeks, same lighting, same pose. Most honest indicator.</li>
    <li><strong>Strength numbers:</strong> Are weights going up? Then you're building muscle.</li>
    <li><strong>Calipers / Body fat measurement:</strong> Every 4-6 weeks. 7-fold method or DEXA scan for accuracy.</li>
  </ul>
</div>

    `
  },

  task: {
    de: {
      title: 'Recomp-Plan erstellen',
      description: 'Berechne deine Recomp-Kalorien und erstelle einen Wochenplan.',
      checklist: [
        { text: 'Berechne deinen TDEE (Gesamtkalorienbedarf) mit einem Online-Rechner.' },
        { text: 'Plane Trainingstage: TDEE + 200-300 kcal (mehr Kohlenhydrate).' },
        { text: 'Plane Ruhetage: TDEE - 300-500 kcal (weniger Kohlenhydrate).' },
        { text: 'Stelle sicher, dass du jeden Tag mindestens 2g Protein/kg zu dir nimmst.' },
        { text: 'Miss Taille und Arme heute und erneut in 4 Wochen.' }
      ]
    },
    en: {
      title: 'Create Recomp Plan',
      description: 'Calculate your recomp calories and create a weekly plan.',
      checklist: [
        { text: 'Calculate your TDEE (total daily energy expenditure) with an online calculator.' },
        { text: 'Plan training days: TDEE + 200-300 kcal (more carbs).' },
        { text: 'Plan rest days: TDEE - 300-500 kcal (fewer carbs).' },
        { text: 'Ensure you eat at least 2g protein/kg bodyweight every day.' },
        { text: 'Measure waist and arms today and again in 4 weeks.' }
      ]
    }
  },

  notes: {
    de: [
      {
        front: 'Für wen funktioniert Body Recomposition am besten?',
        back: 'Anfänger (< 1 Jahr), Übergewichtige und Wiedereinsteiger. Je fortgeschrittener, desto schwieriger.'
      },
      {
        front: 'Wie viel Protein braucht man für eine erfolgreiche Recomp?',
        back: '2,0-2,4g pro kg Körpergewicht pro Tag. Höher als bei normalem Muskelaufbau.'
      },
      {
        front: 'Warum ist die Waage kein guter Indikator bei Recomp?',
        back: 'Gewicht kann gleich bleiben, da Muskelaufbau den Fettverlust auf der Waage ausgleicht. Nutze Fotos, Maße und Kraftwerte.'
      }
    ],
    en: [
      {
        front: 'Who does body recomposition work best for?',
        back: 'Beginners (< 1 year), overweight individuals, and returning lifters. The more advanced, the harder.'
      },
      {
        front: 'How much protein is needed for successful recomp?',
        back: '2.0-2.4g per kg bodyweight per day. Higher than during normal muscle building.'
      },
      {
        front: 'Why is the scale a poor indicator during recomp?',
        back: 'Weight can stay the same as muscle gain offsets fat loss on the scale. Use photos, measurements, and strength numbers.'
      }
    ]
  }
};
