import React from 'react';

export const injuryPreventionLesson = {
  id: 'r1_m1_injury_prevention',
  title: { 
    en: '1.6 Injury Prevention', 
    de: '1.6 Verletzungsprävention' 
  },
  description: { 
    en: 'Learn to recognize common running injuries and how to prevent them through strengthening and mobility work.', 
    de: 'Lerne häufige Laufverletzungen zu erkennen und wie du sie durch Kräftigung und Mobilität verhindern kannst.' 
  },
  category: 'basics',
  
  content: {
    de: `
### Verletzungsprävention: Früh lernen! 🛡️

Verletzungen sind der größte Feind des Läufers. Die gute Nachricht: Die meisten Verletzungen sind vermeidbar! Prävention ist einfacher als Behandlung.

<div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-xl border border-red-200 dark:border-red-700 my-6">
  <h4 className="font-bold text-red-800 dark:text-red-200 mb-4">⚠️ Die wichtigste Regel</h4>
  <p className="text-sm text-red-700 dark:text-red-300">
    <strong>Bei Schmerzen: STOPPEN! Nicht durch Schmerz laufen!</strong> Schmerz ist ein Warnsignal deines Körpers. Ignoriere es nicht.
  </p>
</div>

---

### Häufige Laufverletzungen erkennen

<div className="space-y-4 my-6">
  <div className="p-4 bg-blue-50 dark:bg-blue-900/40 rounded-lg">
    <h4 className="font-bold text-blue-800 dark:text-blue-200 mb-2">Läuferknie (ITBS)</h4>
    <p className="text-sm text-blue-700 dark:text-blue-300 mb-2">
      <strong>Symptome:</strong> Schmerz außen am Knie, besonders beim Laufen bergab oder Treppensteigen
    </p>
    <p className="text-sm text-blue-700 dark:text-blue-300">
      <strong>Ursache:</strong> Zu schnelle Steigerung, schwache Hüftmuskulatur, IT-Band zu eng
    </p>
  </div>
  
  <div className="p-4 bg-green-50 dark:bg-green-900/40 rounded-lg">
    <h4 className="font-bold text-green-800 dark:text-green-200 mb-2">Shin Splints</h4>
    <p className="text-sm text-green-700 dark:text-green-300 mb-2">
      <strong>Symptome:</strong> Schmerz an der Schienbeinvorderseite, besonders zu Laufbeginn
    </p>
    <p className="text-sm text-green-700 dark:text-green-300">
      <strong>Ursache:</strong> Zu schnelle Steigerung, falsche Schuhe, harter Untergrund
    </p>
  </div>
  
  <div className="p-4 bg-purple-50 dark:bg-purple-900/40 rounded-lg">
    <h4 className="font-bold text-purple-800 dark:text-purple-200 mb-2">Plantarfasziitis</h4>
    <p className="text-sm text-purple-700 dark:text-purple-300 mb-2">
      <strong>Symptome:</strong> Schmerz an der Ferse, besonders morgens beim Aufstehen
    </p>
    <p className="text-sm text-purple-700 dark:text-purple-300">
      <strong>Ursache:</strong> Überlastung, enge Waden, falsche Schuhe
    </p>
  </div>
  
  <div className="p-4 bg-amber-50 dark:bg-amber-900/40 rounded-lg">
    <h4 className="font-bold text-amber-800 dark:text-amber-200 mb-2">Achillessehnenprobleme</h4>
    <p className="text-sm text-amber-700 dark:text-amber-300 mb-2">
      <strong>Symptome:</strong> Schmerz an der Achillessehne (Ferse hinten), Steifheit morgens
    </p>
    <p className="text-sm text-amber-700 dark:text-amber-300">
      <strong>Ursache:</strong> Zu schnelle Steigerung, enge Waden, zu viel Hügel-Training
    </p>
  </div>
</div>

---

### Prävention durch Kräftigung

Starke Muskeln schützen deine Gelenke und Sehnen. Kräftigung ist nicht optional – sie ist essentiell!

**Core-Training (Rumpfstabilität)**

Ein starker Core hilft, die richtige Haltung zu halten und reduziert Belastung auf Beine.

**Übungen:**

- **Plank:** 30-60 Sekunden, 3x
- **Side Plank:** 30 Sekunden pro Seite, 2x
- **Bird Dog:** 10x pro Seite
- **Dead Bug:** 10x pro Seite

**Beinmuskulatur**

- **Squats:** 10-15x, 3x
- **Lunges:** 10x pro Bein, 2x
- **Calf Raises:** 15x, 3x
- **Glute Bridges:** 15x, 3x

**Hüftstabilisatoren (sehr wichtig!)**

Schwache Hüfte ist oft die Wurzel vieler Knieprobleme.

- **Clamshells:** 15x pro Seite, 2x
- **Hip Bridges:** 15x, 3x
- **Side Leg Lifts:** 15x pro Seite, 2x
- **Monster Walks:** Mit Theraband, 10 Schritte pro Richtung

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border border-green-200 dark:border-green-700 my-6">
  <h4 className="font-bold text-green-800 dark:text-green-200 mb-4">💡 Praktische Übung</h4>
  <p className="text-sm text-green-700 dark:text-green-300">
    Integriere 2x pro Woche 15 Minuten Kräftigung:
  </p>
  <ul className="text-sm space-y-1 text-green-700 dark:text-green-300 mt-3 list-disc list-inside">
    <li>Plank: 3x 30-60 Sek</li>
    <li>Squats: 3x 10-15 Wiederholungen</li>
    <li>Lunges: 2x 10 pro Bein</li>
    <li>Hip Bridges: 3x 15</li>
    <li>Clamshells: 2x 15 pro Seite</li>
  </ul>
</div>

---

### Dehnen & Mobilität

**Dynamisches Dehnen VOR dem Laufen**

- Beinschwingen (vor/zurück, seitlich)
- Hüftkreise
- Leichte Knieheben
- Armkreisen

**Statisches Dehnen NACH dem Laufen (optional)**

Fokus auf:
- **Waden:** Stehend oder sitzend, 30 Sek halten
- **Oberschenkelrückseite (Hamstrings):** Stehend oder sitzend, 30 Sek
- **Oberschenkelvorderseite (Quadrizeps):** Stehend, Fuß zum Gesäß ziehen, 30 Sek
- **Hüftbeuger:** Ausfallschritt-Position, 30 Sek

<div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-700 my-6">
  <h4 className="font-bold text-blue-800 dark:text-blue-200 mb-4">💡 Praktische Übung</h4>
  <p className="text-sm text-blue-700 dark:text-blue-300">
    Entwickle eine 10-Minuten-Dehnroutine für nach dem Laufen:
  </p>
  <ol className="text-sm space-y-1 text-blue-700 dark:text-blue-300 mt-3 list-decimal list-inside">
    <li>Waden dehnen (30 Sek pro Bein)</li>
    <li>Hamstrings dehnen (30 Sek pro Bein)</li>
    <li>Quadrizeps dehnen (30 Sek pro Bein)</li>
    <li>Hüftbeuger dehnen (30 Sek pro Bein)</li>
    <li>Optional: Rücken und Schultern</li>
  </ol>
</div>

---

### Die beste Prävention: Langsamer Aufbau

Die meisten Verletzungen kommen von:
1. **Zu schneller Steigerung** (10%-Regel beachten!)
2. **Zu viel, zu schnell** (Regelmäßigkeit > Intensität)
3. **Zu wenig Ruhe** (Ruhetage sind Training!)

---

### Zusammenfassung

**Verletzungsprävention Checkliste:**

- ✅ 10%-Regel befolgen
- ✅ 2x pro Woche Kräftigung
- ✅ Dynamisches Dehnen vor dem Laufen
- ✅ Optional: Statisches Dehnen nach dem Laufen
- ✅ Ruhetage einhalten
- ✅ Auf Schmerzen hören und pausieren

**Bei Schmerzen:** STOPPEN, Pause, bei Bedarf Arzt aufsuchen!
    `,
    en: `
### Injury Prevention 🛡️

Injuries are the runner's biggest enemy. The good news: Most injuries are preventable! Prevention is easier than treatment.

<div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-xl border border-red-200 dark:border-red-700 my-6">
  <h4 className="font-bold text-red-800 dark:text-red-200 mb-4">⚠️ The Most Important Rule</h4>
  <p className="text-sm text-red-700 dark:text-red-300">
    <strong>When in pain: STOP! Don't run through pain!</strong> Pain is a warning signal from your body. Don't ignore it.
  </p>
</div>

---

### Common Running Injuries

**Runner's Knee (ITBS):** Pain on outside of knee, especially when running downhill or climbing stairs.

**Shin Splints:** Pain on front of shin, especially at start of run.

**Plantar Fasciitis:** Pain at heel, especially in morning when getting up.

**Achilles Problems:** Pain at Achilles tendon (back of heel), morning stiffness.

---

### Prevention Through Strengthening

Strong muscles protect your joints and tendons. Strengthening is not optional – it's essential!

**Core Training:** Plank, Side Plank, Bird Dog, Dead Bug

**Leg Muscles:** Squats, Lunges, Calf Raises, Glute Bridges

**Hip Stabilizers (very important!):** Clamshells, Hip Bridges, Side Leg Lifts

---

### Stretching & Mobility

**Dynamic Stretching BEFORE Running**

- Leg swings
- Hip circles
- Light knee lifts

**Static Stretching AFTER Running (optional)**

Focus on: Calves, Hamstrings, Quadriceps, Hip Flexors

---

### Best Prevention: Slow Build-Up

Most injuries come from:
1. Too rapid progression (follow 10% rule!)
2. Too much, too fast (regularity > intensity)
3. Too little rest (rest days ARE training!)

---

### Summary

**Injury Prevention Checklist:**

- ✅ Follow 10% rule
- ✅ Strength training 2x per week
- ✅ Dynamic stretching before running
- ✅ Optional: Static stretching after running
- ✅ Take rest days
- ✅ Listen to pain and pause

**When in pain:** STOP, rest, see doctor if needed!
    `
  },

  task: {
    de: {
      title: 'Kräftigungsroutine etablieren',
      description: 'Erstelle eine 15-minütige Kräftigungsroutine und führe sie 2x pro Woche durch.',
      checklist: [
        { text: 'Plank: 3x 30-60 Sekunden' },
        { text: 'Squats: 3x 10-15 Wiederholungen' },
        { text: 'Lunges: 2x 10 pro Bein' },
        { text: 'Hip Bridges: 3x 15 Wiederholungen' },
        { text: 'Clamshells: 2x 15 pro Seite' },
        { text: 'Integriere diese Routine 2x pro Woche (z.B. Dienstag und Freitag)' },
        { text: 'Nach 2 Wochen: Erhöhe langsam Wiederholungen oder Zeit' }
      ]
    },
    en: {
      title: 'Establish Strength Routine',
      description: 'Create a 15-minute strength routine and perform it 2x per week.',
      checklist: [
        { text: 'Plank: 3x 30-60 seconds' },
        { text: 'Squats: 3x 10-15 repetitions' },
        { text: 'Lunges: 2x 10 per leg' },
        { text: 'Hip Bridges: 3x 15 repetitions' },
        { text: 'Clamshells: 2x 15 per side' },
        { text: 'Integrate this routine 2x per week (e.g., Tuesday and Friday)' },
        { text: 'After 2 weeks: Slowly increase repetitions or time' }
      ]
    }
  },

  notes: {
    de: [
      {
        front: 'Was sind die häufigsten Laufverletzungen?',
        back: 'Läuferknie (ITBS), Schienbeinkantensyndrom (Shin Splints), Plantarfasziitis, Achillessehnenprobleme'
      },
      {
        front: 'Was ist die beste Verletzungsprävention?',
        back: 'Langsamer Aufbau (10%-Regel), Kräftigung 2x/Woche, Ruhetage einhalten, auf Schmerzen hören'
      },
      {
        front: 'Was sollte man bei Schmerzen tun?',
        back: 'STOPPEN! Nicht durch Schmerz laufen. Schmerz ist ein Warnsignal. Pause, bei Bedarf Arzt aufsuchen.'
      },
      {
        front: 'Welche Muskeln sind besonders wichtig zu kräftigen?',
        back: 'Core (Rumpfstabilität), Hüftstabilisatoren (oft Wurzel von Knieproblemen), Beinmuskulatur'
      }
    ],
    en: [
      {
        front: 'What are the most common running injuries?',
        back: 'Runner\'s knee (ITBS), Shin Splints, Plantar Fasciitis, Achilles problems'
      },
      {
        front: 'What is the best injury prevention?',
        back: 'Slow build-up (10% rule), strength training 2x/week, take rest days, listen to pain'
      },
      {
        front: 'What should you do when in pain?',
        back: 'STOP! Don\'t run through pain. Pain is a warning signal. Rest, see doctor if needed.'
      }
    ]
  }
};

