import React from 'react';

export const explosivePowerLesson = {
  id: 'g1_m8_explosive_power',
  title: { 
    en: '8.1 Explosive Power Training', 
    de: '8.1 Explosivkraft-Training' 
  },
  description: { 
    en: 'Plyometrics, power cleans, box jumps, medicine ball throws, and Olympic lift basics for athletic power.', 
    de: 'Plyometrie, Power Cleans, Box Jumps, Medizinball-Würfe und olympische Hebe-Basics für athletische Explosivkraft.' 
  },
  category: 'athletic_performance',
  
  content: {
    de: `
### Modul 8.1: Explosivkraft-Training

Explosivkraft ist die Fähigkeit, in kürzester Zeit maximale Kraft zu erzeugen. Sie unterscheidet einen Bodybuilder von einem Athleten. Egal ob Sprung, Sprint, Wurf oder Schlag – Explosivkraft ist der Schlüssel zur Athletik.

**Warum ist das wichtig?** Muskeln, die nur langsam kontrahieren können, sind im Sport und Alltag limitiert. Explosivtraining rekrutiert schnell-zuckende Muskelfasern (Typ II), die das größte Wachstumspotenzial haben.

---

### 1. Plyometrie (Sprungkrafttraining)

<div className="space-y-4 my-6">

<div className="p-5 bg-stone-50 dark:bg-stone-900 rounded-lg border border-stone-200 dark:border-stone-700">
  <h4 className="font-bold text-stone-800 dark:text-stone-200 mb-2">🦘 Was ist Plyometrie?</h4>
  <p className="text-sm text-stone-600 dark:text-stone-400 mb-2">
    Plyometrische Übungen nutzen den Dehnungs-Verkürzungs-Zyklus (SSC): Eine schnelle exzentrische Phase gefolgt von einer explosiven konzentrischen Phase. Denk an eine Sprungfeder, die zusammengedrückt und losgelassen wird.
  </p>
  <ul className="text-sm text-stone-500 dark:text-stone-500 list-disc list-inside space-y-1">
    <li><strong>Box Jumps:</strong> Auf eine Box springen (60-90cm). NICHT runter springen – runter STEIGEN (Gelenke schonen). 4x5 Reps.</li>
    <li><strong>Depth Jumps:</strong> Von einer Box (30-50cm) runterfallen und sofort maximal hochspringen. Fortgeschritten! 3x3-5 Reps.</li>
    <li><strong>Broad Jumps:</strong> Standweitsprung. Maximale horizontale Kraft. 4x3-5 Reps.</li>
    <li><strong>Squat Jumps:</strong> Aus tiefer Hocke maximal hochspringen. 3x5-8 Reps. Kann mit Kurzhanteln belastet werden.</li>
    <li><strong>Split Squat Jumps:</strong> Ausfallschritt-Sprünge mit Beinwechsel in der Luft. 3x6 Reps pro Seite.</li>
  </ul>
</div>

<div className="my-6 p-4 bg-red-50 dark:bg-red-900/20 rounded-xl border-l-4 border-red-500">
  <h4 className="font-bold text-red-800 dark:text-red-200 mb-2">⚠️ Sicherheitsregeln für Plyometrie</h4>
  <ul className="text-sm text-red-700 dark:text-red-300 list-disc list-inside space-y-1">
    <li>Erst wenn du mindestens das 1,5-fache deines Körpergewichts beugen kannst.</li>
    <li>Immer auf weichem Untergrund landen (kein harter Beton).</li>
    <li>Qualität vor Quantität – maximal 25-40 Bodenkontakte pro Session.</li>
    <li>Volle Erholung zwischen Sätzen (2-3 Minuten).</li>
    <li>Nicht bei Müdigkeit oder Muskelkater durchführen.</li>
  </ul>
</div>

</div>

---

### 2. Oberkörper-Explosivkraft

<div className="space-y-4 my-6">

<div className="p-5 bg-stone-50 dark:bg-stone-900 rounded-lg border border-stone-200 dark:border-stone-700">
  <h4 className="font-bold text-stone-800 dark:text-stone-200 mb-2">💥 Medizinball-Übungen</h4>
  <p className="text-sm text-stone-600 dark:text-stone-400 mb-2">
    Medizinbälle sind ideal für Oberkörper-Explosivkraft, da du den Ball LOSLASSEN kannst (anders als bei Hanteln).
  </p>
  <ul className="text-sm text-stone-500 dark:text-stone-500 list-disc list-inside space-y-1">
    <li><strong>Slam Ball:</strong> Ball über Kopf nehmen und mit voller Kraft auf den Boden schleudern. Ganzkörper-Power. 4x6.</li>
    <li><strong>Chest Pass:</strong> Brustpass gegen Wand. Explosives Drücken. 3x8.</li>
    <li><strong>Rotational Throw:</strong> Seitliche Rotation, Ball gegen Wand werfen. Core-Power für Kampfsport/Tennis. 3x6 pro Seite.</li>
    <li><strong>Overhead Throw:</strong> Ball über den Kopf nach hinten werfen. Hip Extension Power. 3x6.</li>
  </ul>
</div>

<div className="p-5 bg-stone-50 dark:bg-stone-900 rounded-lg border border-stone-200 dark:border-stone-700">
  <h4 className="font-bold text-stone-800 dark:text-stone-200 mb-2">🏋️ Explosive Hantel-Übungen</h4>
  <ul className="text-sm text-stone-500 dark:text-stone-500 list-disc list-inside space-y-1">
    <li><strong>Push Press:</strong> Überkopfdrücken mit leichtem Kniebeugen-Schwung. 4x5 bei 70-80% 1RM OHP.</li>
    <li><strong>Speed Bench Press:</strong> Bankdrücken bei 50-60% 1RM, so schnell wie möglich drücken. 8x3 mit 60 Sek. Pause.</li>
    <li><strong>Plyometric Push-ups:</strong> Explosiv abdrücken, Hände lösen sich vom Boden. Klatsch-Liegestütze. 3x5-8.</li>
  </ul>
</div>

</div>

---

### 3. Olympische Hebe-Basics

<div className="space-y-4 my-6">

<div className="p-5 bg-stone-50 dark:bg-stone-900 rounded-lg border border-stone-200 dark:border-stone-700">
  <h4 className="font-bold text-stone-800 dark:text-stone-200 mb-2">🏋️ Power Clean & Hang Clean</h4>
  <p className="text-sm text-stone-600 dark:text-stone-400 mb-2">
    Der Power Clean ist DIE Übung für athletische Explosivkraft. Er trainiert die gesamte hintere Kette explosiv.
  </p>
  <ul className="text-sm text-stone-500 dark:text-stone-500 list-disc list-inside space-y-1">
    <li><strong>Hang Clean:</strong> Stange auf Oberschenkelhöhe starten. Hüftexplosion → Stange auf Schultern "fangen". 5x3.</li>
    <li><strong>Power Clean:</strong> Vom Boden. Erfordert Technik-Training! Leicht starten und langsam steigern.</li>
    <li><strong>Clean Pull / High Pull:</strong> Nur der Zuganteil ohne Fangen. Einfacher zu lernen, trotzdem explosiv.</li>
    <li><strong>Kettlebell Swing:</strong> Der "arme Manns Power Clean". Einfach, effektiv, sicher. 4x10-15.</li>
  </ul>
</div>

<div className="my-6 p-4 bg-amber-50 dark:bg-amber-900/20 rounded-xl border-l-4 border-amber-500">
  <h4 className="font-bold text-amber-800 dark:text-amber-200 mb-2">💡 Lernreihenfolge für Olympic Lifts</h4>
  <ol className="text-sm text-amber-700 dark:text-amber-300 list-decimal list-inside space-y-1">
    <li>Kettlebell Swings (Grundlage: Hüftexplosion)</li>
    <li>Clean Pulls / High Pulls (nur Zugphase)</li>
    <li>Hang Clean (verkürzte Bewegung)</li>
    <li>Power Clean (volle Bewegung vom Boden)</li>
    <li>Optional: Hang Snatch / Power Snatch</li>
  </ol>
  <p className="text-sm text-amber-700 dark:text-amber-300 mt-2">
    <strong>Idealerweise:</strong> Lass dir die Technik von einem erfahrenen Trainer oder Weightlifting-Coach zeigen!
  </p>
</div>

</div>

---

### 4. Programmierung: Explosivkraft integrieren

<div className="my-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl border-l-4 border-blue-500">
  <h4 className="font-bold text-blue-800 dark:text-blue-200 mb-2">📊 Grundregeln</h4>
  <ul className="text-sm text-blue-700 dark:text-blue-300 list-disc list-inside space-y-1">
    <li><strong>Reihenfolge:</strong> IMMER Explosivübungen ZUERST im Training (frisch, nicht müde).</li>
    <li><strong>Reps:</strong> Niedrig halten (1-5 Reps). Explosive Arbeit ist kein Ausdauertraining.</li>
    <li><strong>Pausen:</strong> 2-3 Minuten zwischen Sätzen. Volle ATP-Regeneration.</li>
    <li><strong>Volumen:</strong> 3-6 Sätze pro Übung. Weniger ist mehr.</li>
    <li><strong>Häufigkeit:</strong> 2-3x pro Woche. Nicht täglich – das ZNS braucht Erholung.</li>
  </ul>
</div>

---

### Beispiel Explosivkraft-Tag

1.  **Box Jumps:** 4 Sätze x 5 Reps (90 Sek. Pause)
2.  **Hang Clean:** 5 Sätze x 3 Reps (2 Min. Pause)
3.  **Push Press:** 4 Sätze x 5 Reps
4.  **Med Ball Slams:** 3 Sätze x 6 Reps
5.  **Broad Jumps:** 3 Sätze x 3 Reps

**Danach:** Normales Krafttraining (Squat, Bench, etc.) mit moderatem Gewicht.

`,
    en: `
### Module 8.1: Explosive Power Training

Explosive power is the ability to produce maximum force in the shortest possible time. It's what separates a bodybuilder from an athlete. Whether it's jumping, sprinting, throwing, or striking – explosive power is the key to athleticism.

**Why does it matter?** Muscles that can only contract slowly are limited in sport and daily life. Explosive training recruits fast-twitch muscle fibers (Type II), which have the greatest growth potential.

---

### 1. Plyometrics (Jump Training)

<div className="space-y-4 my-6">

<div className="p-5 bg-stone-50 dark:bg-stone-900 rounded-lg border border-stone-200 dark:border-stone-700">
  <h4 className="font-bold text-stone-800 dark:text-stone-200 mb-2">🦘 What is Plyometrics?</h4>
  <p className="text-sm text-stone-600 dark:text-stone-400 mb-2">
    Plyometric exercises use the stretch-shortening cycle (SSC): a rapid eccentric phase followed by an explosive concentric phase. Think of a spring being compressed and released.
  </p>
  <ul className="text-sm text-stone-500 dark:text-stone-500 list-disc list-inside space-y-1">
    <li><strong>Box Jumps:</strong> Jump onto a box (24-36 inches). DON'T jump down – STEP down (protect joints). 4x5 reps.</li>
    <li><strong>Depth Jumps:</strong> Drop from a box (12-20 inches) and immediately jump as high as possible. Advanced! 3x3-5 reps.</li>
    <li><strong>Broad Jumps:</strong> Standing long jump. Maximum horizontal force. 4x3-5 reps.</li>
    <li><strong>Squat Jumps:</strong> From deep squat, jump as high as possible. 3x5-8 reps. Can be loaded with dumbbells.</li>
    <li><strong>Split Squat Jumps:</strong> Lunge jumps switching legs mid-air. 3x6 reps per side.</li>
  </ul>
</div>

<div className="my-6 p-4 bg-red-50 dark:bg-red-900/20 rounded-xl border-l-4 border-red-500">
  <h4 className="font-bold text-red-800 dark:text-red-200 mb-2">⚠️ Safety Rules for Plyometrics</h4>
  <ul className="text-sm text-red-700 dark:text-red-300 list-disc list-inside space-y-1">
    <li>Only when you can squat at least 1.5x your bodyweight.</li>
    <li>Always land on soft surface (no hard concrete).</li>
    <li>Quality over quantity – maximum 25-40 ground contacts per session.</li>
    <li>Full recovery between sets (2-3 minutes).</li>
    <li>Don't perform when fatigued or sore.</li>
  </ul>
</div>

</div>

---

### 2. Upper Body Explosive Power

<div className="space-y-4 my-6">

<div className="p-5 bg-stone-50 dark:bg-stone-900 rounded-lg border border-stone-200 dark:border-stone-700">
  <h4 className="font-bold text-stone-800 dark:text-stone-200 mb-2">💥 Medicine Ball Exercises</h4>
  <p className="text-sm text-stone-600 dark:text-stone-400 mb-2">
    Medicine balls are ideal for upper body explosiveness because you can RELEASE the ball (unlike dumbbells).
  </p>
  <ul className="text-sm text-stone-500 dark:text-stone-500 list-disc list-inside space-y-1">
    <li><strong>Slam Ball:</strong> Raise ball overhead and slam to the ground with full force. Full-body power. 4x6.</li>
    <li><strong>Chest Pass:</strong> Chest pass against wall. Explosive pushing. 3x8.</li>
    <li><strong>Rotational Throw:</strong> Lateral rotation, throw ball against wall. Core power for combat sports/tennis. 3x6 per side.</li>
    <li><strong>Overhead Throw:</strong> Throw ball over head backward. Hip extension power. 3x6.</li>
  </ul>
</div>

<div className="p-5 bg-stone-50 dark:bg-stone-900 rounded-lg border border-stone-200 dark:border-stone-700">
  <h4 className="font-bold text-stone-800 dark:text-stone-200 mb-2">🏋️ Explosive Barbell Exercises</h4>
  <ul className="text-sm text-stone-500 dark:text-stone-500 list-disc list-inside space-y-1">
    <li><strong>Push Press:</strong> Overhead press with slight knee bend drive. 4x5 at 70-80% 1RM OHP.</li>
    <li><strong>Speed Bench Press:</strong> Bench press at 50-60% 1RM, push as fast as possible. 8x3 with 60 sec rest.</li>
    <li><strong>Plyometric Push-ups:</strong> Push off explosively, hands leave the ground. Clap push-ups. 3x5-8.</li>
  </ul>
</div>

</div>

---

### 3. Olympic Lifting Basics

<div className="space-y-4 my-6">

<div className="p-5 bg-stone-50 dark:bg-stone-900 rounded-lg border border-stone-200 dark:border-stone-700">
  <h4 className="font-bold text-stone-800 dark:text-stone-200 mb-2">🏋️ Power Clean & Hang Clean</h4>
  <p className="text-sm text-stone-600 dark:text-stone-400 mb-2">
    The Power Clean is THE exercise for athletic explosiveness. It trains the entire posterior chain explosively.
  </p>
  <ul className="text-sm text-stone-500 dark:text-stone-500 list-disc list-inside space-y-1">
    <li><strong>Hang Clean:</strong> Start with bar at thigh height. Hip explosion → "catch" bar on shoulders. 5x3.</li>
    <li><strong>Power Clean:</strong> From the floor. Requires technique training! Start light and progress slowly.</li>
    <li><strong>Clean Pull / High Pull:</strong> Only the pull portion without the catch. Easier to learn, still explosive.</li>
    <li><strong>Kettlebell Swing:</strong> The "poor man's power clean." Simple, effective, safe. 4x10-15.</li>
  </ul>
</div>

<div className="my-6 p-4 bg-amber-50 dark:bg-amber-900/20 rounded-xl border-l-4 border-amber-500">
  <h4 className="font-bold text-amber-800 dark:text-amber-200 mb-2">💡 Learning Order for Olympic Lifts</h4>
  <ol className="text-sm text-amber-700 dark:text-amber-300 list-decimal list-inside space-y-1">
    <li>Kettlebell Swings (foundation: hip explosion)</li>
    <li>Clean Pulls / High Pulls (pull phase only)</li>
    <li>Hang Clean (shortened range of motion)</li>
    <li>Power Clean (full movement from the floor)</li>
    <li>Optional: Hang Snatch / Power Snatch</li>
  </ol>
  <p className="text-sm text-amber-700 dark:text-amber-300 mt-2">
    <strong>Ideally:</strong> Have an experienced coach or weightlifting trainer teach you the technique!
  </p>
</div>

</div>

---

### 4. Programming: Integrating Explosive Power

<div className="my-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl border-l-4 border-blue-500">
  <h4 className="font-bold text-blue-800 dark:text-blue-200 mb-2">📊 Fundamental Rules</h4>
  <ul className="text-sm text-blue-700 dark:text-blue-300 list-disc list-inside space-y-1">
    <li><strong>Order:</strong> ALWAYS perform explosive exercises FIRST in training (fresh, not fatigued).</li>
    <li><strong>Reps:</strong> Keep low (1-5 reps). Explosive work is not endurance training.</li>
    <li><strong>Rest:</strong> 2-3 minutes between sets. Full ATP regeneration.</li>
    <li><strong>Volume:</strong> 3-6 sets per exercise. Less is more.</li>
    <li><strong>Frequency:</strong> 2-3x per week. Not daily – the CNS needs recovery.</li>
  </ul>
</div>

---

### Sample Explosive Power Day

1.  **Box Jumps:** 4 sets x 5 reps (90 sec rest)
2.  **Hang Clean:** 5 sets x 3 reps (2 min rest)
3.  **Push Press:** 4 sets x 5 reps
4.  **Med Ball Slams:** 3 sets x 6 reps
5.  **Broad Jumps:** 3 sets x 3 reps

**After:** Regular strength training (Squat, Bench, etc.) at moderate weight.

    `
  },

  task: {
    de: {
      title: 'Erste Explosivkraft-Session',
      description: 'Integriere plyometrische Übungen in dein Training.',
      checklist: [
        { text: 'Gründliches Warm-up: 5 Min. Cardio + dynamisches Stretching.' },
        { text: 'Box Jumps: 4x5 auf eine stabile Box (starte niedrig, 40-50cm).' },
        { text: 'Squat Jumps: 3x5 ohne Gewicht, fokussiere maximale Höhe.' },
        { text: 'Med Ball Slams: 3x6 mit 5-8kg Ball.' },
        { text: 'Notiere: Wie fühlt sich die Explosivität an? Musst du die Boxhöhe anpassen?' }
      ]
    },
    en: {
      title: 'First Explosive Power Session',
      description: 'Integrate plyometric exercises into your training.',
      checklist: [
        { text: 'Thorough warm-up: 5 min cardio + dynamic stretching.' },
        { text: 'Box Jumps: 4x5 onto a stable box (start low, 16-20 inches).' },
        { text: 'Squat Jumps: 3x5 without weight, focus on maximum height.' },
        { text: 'Med Ball Slams: 3x6 with 10-15lb ball.' },
        { text: 'Note: How does the explosiveness feel? Do you need to adjust box height?' }
      ]
    }
  },

  notes: {
    de: [
      {
        front: 'Was ist der Dehnungs-Verkürzungs-Zyklus (SSC)?',
        back: 'Eine schnelle exzentrische Phase gefolgt von einer explosiven konzentrischen Phase – wie eine Sprungfeder.'
      },
      {
        front: 'Warum sollten Explosivübungen IMMER zuerst im Training kommen?',
        back: 'Sie erfordern ein frisches ZNS und volle Muskelrekrutierung. Müdigkeit senkt die Explosivität und erhöht Verletzungsgefahr.'
      },
      {
        front: 'Was ist die Lernreihenfolge für Olympic Lifts?',
        back: 'KB Swings → Clean Pulls → Hang Clean → Power Clean → Optional: Snatch.'
      }
    ],
    en: [
      {
        front: 'What is the stretch-shortening cycle (SSC)?',
        back: 'A rapid eccentric phase followed by an explosive concentric phase – like a spring.'
      },
      {
        front: 'Why should explosive exercises ALWAYS come first in training?',
        back: 'They require a fresh CNS and full muscle recruitment. Fatigue decreases explosiveness and increases injury risk.'
      },
      {
        front: 'What is the learning order for Olympic lifts?',
        back: 'KB Swings → Clean Pulls → Hang Clean → Power Clean → Optional: Snatch.'
      }
    ]
  }
};
