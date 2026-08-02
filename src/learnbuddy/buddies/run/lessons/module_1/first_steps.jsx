import React from 'react';

export const firstStepsLesson = {
  id: 'r1_m1_first_steps',
  title: { 
    en: '1.4 First Steps: From Walking to Running', 
    de: '1.4 Erste Schritte: Vom Gehen zum Laufen' 
  },
  description: { 
    en: 'Learn the walk-run method, proper pacing, and how to structure your first running sessions with warm-up and cool-down.', 
    de: 'Lerne die Walk-Run-Methode, das richtige Tempo und wie du deine ersten Lauf-Sessions mit Aufwärmen und Abkühlen strukturierst.' 
  },
  category: 'basics',
  
  content: {
    de: `
### Erste Schritte: Vom Gehen zum Laufen 🚶→🏃

Du hast die Ausrüstung, du kennst die Technik – jetzt ist es Zeit, loszulegen! Aber nicht zu schnell. Der häufigste Fehler von Anfängern: Sie laufen zu schnell oder zu weit beim ersten Mal.

**Merke dir:** Es geht nicht darum, wie schnell oder weit du läufst. Es geht darum, regelmäßig zu laufen und langsam aufzubauen.

---

### Walk-Run-Methode (Couch to 5K Prinzip)

Die Walk-Run-Methode ist der beste Weg, um vom Gehen zum Laufen zu kommen. Sie ist bewährt und funktioniert für fast jeden.

**Warum Walk-Run?**

<div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-700 my-6">
  <h4 className="font-bold text-blue-800 dark:text-blue-200 mb-4">✓ Die Vorteile</h4>
  <ul className="text-sm space-y-2 text-blue-700 dark:text-blue-300">
    <li><strong>Gelenke gewöhnen sich langsam:</strong> Deine Gelenke, Sehnen und Bänder brauchen Zeit, sich an die Belastung zu gewöhnen</li>
    <li><strong>Verletzungen vermeiden:</strong> Zu schnelles Steigern führt zu Überlastungen</li>
    <li><strong>Kardio-System baut auf:</strong> Dein Herz und deine Lunge lernen langsam, mit der Belastung umzugehen</li>
    <li><strong>Mental machbar:</strong> Es fühlt sich nicht unmöglich an</li>
    <li><strong>Erfolgserlebnisse:</strong> Jedes Mal, wenn du länger läufst, ist das ein Erfolg</li>
  </ul>
</div>

**Die Struktur: Gehen → Laufen → Gehen → Laufen**

Das Prinzip ist einfach: Du wechselst zwischen Gehen und Laufen. Die Laufphasen werden länger, die Gehpausen kürzer (oder seltener).

**Beispiel: Woche 1**

- Aufwärmen: 5 Minuten Gehen
- Hauptteil: 1 Minute laufen, 2 Minuten gehen → 8x wiederholen (insgesamt 24 Minuten)
- Abkühlen: 5 Minuten Gehen
- **Gesamt:** Ca. 35 Minuten

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border border-green-200 dark:border-green-700 my-6">
  <h4 className="font-bold text-green-800 dark:text-green-200 mb-4">💡 Progression Beispiel</h4>
  <p className="text-sm text-green-700 dark:text-green-300 mb-3">
    So könnte deine Progression aussehen:
  </p>
  <ul className="text-sm space-y-1 text-green-700 dark:text-green-300">
    <li><strong>Woche 1:</strong> 1 Min laufen, 2 Min gehen (8x)</li>
    <li><strong>Woche 2:</strong> 1,5 Min laufen, 1,5 Min gehen (8x)</li>
    <li><strong>Woche 3:</strong> 2 Min laufen, 1 Min gehen (8x)</li>
    <li><strong>Woche 4:</strong> 3 Min laufen, 1 Min gehen (6x)</li>
    <li><strong>Woche 5:</strong> 5 Min laufen, 1 Min gehen (4x)</li>
    <li><strong>Woche 6:</strong> 8 Min laufen, 1 Min gehen (3x)</li>
    <li><strong>Woche 7:</strong> 10 Min laufen, 1 Min gehen (2x)</li>
    <li><strong>Woche 8:</strong> 20-30 Minuten durchlaufen!</li>
  </ul>
</div>

**Wichtig:** Das sind Beispiele! Jeder ist anders. Wenn etwas zu schwer ist, wiederhole die Woche. Wenn es zu leicht ist, geh zur nächsten.

<div className="bg-amber-50 dark:bg-amber-900/20 p-6 rounded-xl border border-amber-200 dark:border-amber-700 my-6">
  <h4 className="font-bold text-amber-800 dark:text-amber-200 mb-4">💡 Praktische Übung</h4>
  <p className="text-sm text-amber-700 dark:text-amber-300">
    Starte mit 20 Minuten: 5 Min Aufwärmen (Gehen), dann 1 Min laufen, 2 Min gehen (6x wiederholen), dann 5 Min Abkühlen (Gehen).
  </p>
</div>

---

### Laufzeiten & Distanzen (Anfänger)

**Die wichtigste Regel: Nicht zu schnell!**

Das Tempo sollte so sein, dass du während des Laufens **sprechen** kannst. Das nennt man "Konversationstempo" oder "Talk Test".

<div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-xl border border-red-200 dark:border-red-700 my-6">
  <h4 className="font-bold text-red-800 dark:text-red-200 mb-4">❌ Wenn du nicht sprechen kannst...</h4>
  <p className="text-sm text-red-700 dark:text-red-300">
    Dann läufst du zu schnell! Langsamer werden. Es ist besser, langsam zu laufen als zu schnell zu gehen (oder ganz aufzugeben).
  </p>
</div>

**Die erste Woche**

- **Häufigkeit:** 3x pro Woche (z.B. Montag, Mittwoch, Freitag)
- **Dauer:** 20-30 Minuten total (inklusive Aufwärmen und Abkühlen)
- **Distanz:** Zweitrangig! Zeit ist wichtiger als Distanz.
- **Tempo:** Langsam! Konversationstempo.

**Warum Zeit wichtiger ist als Distanz:**

- Zeit ist konsistenter (Wetter, Route spielen keine Rolle)
- Fokus auf Ausdauer, nicht Geschwindigkeit
- Weniger Druck ("Ich muss X Kilometer schaffen")
- Besser für Anfänger-Motivation

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border border-green-200 dark:border-green-700 my-6">
  <h4 className="font-bold text-green-800 dark:text-green-200 mb-4">💡 Praktische Übung</h4>
  <p className="text-sm text-green-700 dark:text-green-300">
    Lauf 3x diese Woche: 20 Minuten Walk-Run (1 Min laufen, 2 Min gehen). Nutze eine Uhr oder eine App, um die Zeit zu tracken. Achte nicht auf die Distanz!
  </p>
</div>

---

### Aufwärmen & Abkühlen

**Warum Aufwärmen?**

- Erhöht Körpertemperatur
- Lockert Muskeln und Gelenke
- Bereitet Herz-Kreislauf-System vor
- Reduziert Verletzungsrisiko
- Mentale Vorbereitung

**Aufwärmen: 5-10 Minuten**

1. **Leichtes Gehen:** 3-5 Minuten in normalem Tempo
2. **Dynamisches Dehnen:** NICHT statisch! Bewegliche Übungen:
   - Armkreisen (vorwärts/rückwärts)
   - Beinschwingen (vor/zurück, seitlich)
   - Hüftkreise
   - Leichte Knieheben
   - Leichte Hampelmänner

<div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-700 my-6">
  <h4 className="font-bold text-blue-800 dark:text-blue-200 mb-4">⚠️ Wichtig: NICHT statisch dehnen!</h4>
  <p className="text-sm text-blue-700 dark:text-blue-300">
    Statisches Dehnen (Dehnungen halten) vor dem Laufen kann die Performance verschlechtern und das Verletzungsrisiko erhöhen. Nutze dynamisches Dehnen – Bewegungen, die den Körper aufwärmen.
  </p>
</div>

**Abkühlen: 5-10 Minuten**

1. **Langsames Gehen:** 5-10 Minuten, um Herzfrequenz langsam zu senken
2. **Optional: Statisches Dehnen:** NACH dem Laufen kannst du statisch dehnen, wenn du willst
   - Waden
   - Oberschenkelrückseite (Hamstrings)
   - Oberschenkelvorderseite (Quadrizeps)
   - Hüftbeuger

**Warum Abkühlen?**

- Hilft dem Körper, sich zu erholen
- Reduziert Muskelkater
- Verhindert Schwindel (wenn man abrupt stoppt)
- Hilft, Flexibilität zu erhalten

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border border-green-200 dark:border-green-700 my-6">
  <h4 className="font-bold text-green-800 dark:text-green-200 mb-4">💡 Praktische Übung</h4>
  <p className="text-sm text-green-700 dark:text-green-300">
    Entwickle eine 5-Minuten-Aufwärmroutine:
  </p>
  <ol className="text-sm space-y-1 text-green-700 dark:text-green-300 mt-3 list-decimal list-inside">
    <li>2 Min leichtes Gehen</li>
    <li>10x Armkreisen (vorwärts)</li>
    <li>10x Armkreisen (rückwärts)</li>
    <li>10x Beinschwingen pro Bein (vor/zurück)</li>
    <li>10x leichte Knieheben</li>
    <li>Langsam starten!</li>
  </ol>
</div>

---

### Die erste Woche: Ein Beispiel

**Montag - Erster Lauf**
- Aufwärmen: 5 Min Gehen
- Hauptteil: 1 Min laufen, 2 Min gehen (6x = 18 Min)
- Abkühlen: 5 Min Gehen
- **Gesamt:** 28 Minuten

**Mittwoch - Zweiter Lauf**
- Gleiches Programm wie Montag

**Freitag - Dritter Lauf**
- Gleiches Programm

**Samstag/Sonntag**
- Ruhetag oder leichtes Spazieren

<div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl border border-purple-200 dark:border-purple-700 my-6">
  <h4 className="font-bold text-purple-800 dark:text-purple-200 mb-4">💡 Erwartungen vs. Realität</h4>
  <p className="text-sm text-purple-700 dark:text-purple-300 mb-3">
    <strong>Realistische Erwartungen:</strong>
  </p>
  <ul className="text-sm space-y-1 text-purple-700 dark:text-purple-300">
    <li>✓ Es wird anstrengend sein (das ist normal!)</li>
    <li>✓ Du wirst schnaufen (das ist normal!)</li>
    <li>✓ Dein Herz wird schneller schlagen (das ist normal!)</li>
    <li>✓ Du wirst stolz sein danach (das ist verdient!)</li>
  </ul>
  <p className="text-sm text-purple-700 dark:text-purple-300 mt-3">
    <strong>Es wird einfacher!</strong> Die ersten paar Läufe sind am schwersten. Danach wird es leichter.
  </p>
</div>

---

### Häufige Fehler (und wie du sie vermeidest)

**Fehler 1: Zu schnell laufen**
- **Symptom:** Außer Atem, kann nicht sprechen, muss schnell stoppen
- **Lösung:** Langsamer! Konversationstempo.

**Fehler 2: Zu weit/t zu lang laufen**
- **Symptom:** Völlig erschöpft, kann nächsten Tag nicht mehr
- **Lösung:** Kürzer! 20-30 Min total ist genug am Anfang.

**Fehler 3: Keine Ruhetage**
- **Symptom:** Erschöpfung, weniger Motivation
- **Lösung:** Mindestens ein Ruhetag zwischen Läufen!

**Fehler 4: Kein Aufwärmen/Abkühlen**
- **Symptom:** Verletzungen, Muskelkater
- **Lösung:** Immer Aufwärmen und Abkühlen!

**Fehler 5: Zu hohe Erwartungen**
- **Symptom:** Frustration, aufgeben
- **Lösung:** Geduld! Fortschritt kommt langsam.

---

### Zusammenfassung

**Dein erster Lauf sollte so aussehen:**

1. ✅ **5 Min Aufwärmen** (Gehen + dynamisches Dehnen)
2. ✅ **Walk-Run:** 1 Min laufen, 2 Min gehen (6x)
3. ✅ **5 Min Abkühlen** (langsames Gehen)
4. ✅ **3x pro Woche** (mit Ruhetagen dazwischen)
5. ✅ **Langsames Tempo** (Konversationstempo!)

**Merke dir:** Es geht nicht um Geschwindigkeit oder Distanz. Es geht darum, regelmäßig zu laufen und langsam aufzubauen. Jeder Lauf ist ein Erfolg!

**Bist du bereit für deinen ersten Lauf?** Dann los! 🏃‍♀️
    `,
    en: `
### First Steps: From Walking to Running 🚶→🏃

You have the equipment, you know the technique – now it's time to start! But not too fast. The most common beginner mistake: running too fast or too far the first time.

**Remember:** It's not about how fast or far you run. It's about running regularly and building slowly.

---

### Walk-Run Method (Couch to 5K Principle)

The walk-run method is the best way to go from walking to running. It's proven and works for almost everyone.

**Why Walk-Run?**

- Joints adapt slowly: Your joints, tendons, and ligaments need time to adapt to the load
- Prevent injuries: Too rapid progress leads to overload
- Cardio system builds: Your heart and lungs learn slowly to handle the effort
- Mentally manageable: Doesn't feel impossible
- Success experiences: Each time you run longer is a success

**The Structure: Walk → Run → Walk → Run**

The principle is simple: You alternate between walking and running. Run phases get longer, walk breaks shorter (or less frequent).

**Example: Week 1**

- Warm-up: 5 minutes walking
- Main: 1 minute running, 2 minutes walking → repeat 8x (total 24 minutes)
- Cool-down: 5 minutes walking
- **Total:** About 35 minutes

---

### Running Times & Distances (Beginners)

**The Most Important Rule: Not Too Fast!**

The pace should be such that you can **talk** while running. This is called "conversation pace" or "Talk Test".

**The First Week**

- **Frequency:** 3x per week (e.g., Monday, Wednesday, Friday)
- **Duration:** 20-30 minutes total (including warm-up and cool-down)
- **Distance:** Secondary! Time is more important than distance.
- **Pace:** Slow! Conversation pace.

**Why Time is More Important Than Distance:**

- Time is more consistent (weather, route don't matter)
- Focus on endurance, not speed
- Less pressure ("I have to complete X kilometers")
- Better for beginner motivation

---

### Warm-Up & Cool-Down

**Why Warm-Up?**

- Increases body temperature
- Loosens muscles and joints
- Prepares cardiovascular system
- Reduces injury risk
- Mental preparation

**Warm-Up: 5-10 Minutes**

1. **Light walking:** 3-5 minutes at normal pace
2. **Dynamic stretching:** NOT static! Mobile exercises

**Cool-Down: 5-10 Minutes**

1. **Slow walking:** 5-10 minutes to slowly lower heart rate
2. **Optional: Static stretching:** AFTER running you can stretch statically if you want

---

### Common Mistakes (and How to Avoid Them)

**Mistake 1: Running too fast**
- **Symptom:** Out of breath, can't talk, have to stop quickly
- **Solution:** Slower! Conversation pace.

**Mistake 2: Running too far/t long**
- **Symptom:** Completely exhausted, can't go next day
- **Solution:** Shorter! 20-30 min total is enough at the start.

**Mistake 3: No rest days**
- **Symptom:** Exhaustion, less motivation
- **Solution:** At least one rest day between runs!

**Mistake 4: No warm-up/cool-down**
- **Symptom:** Injuries, muscle soreness
- **Solution:** Always warm up and cool down!

**Mistake 5: Expectations too high**
- **Symptom:** Frustration, giving up
- **Solution:** Patience! Progress comes slowly.

---

### Summary

**Your first run should look like:**

1. ✅ **5 min warm-up** (walking + dynamic stretching)
2. ✅ **Walk-run:** 1 min running, 2 min walking (6x)
3. ✅ **5 min cool-down** (slow walking)
4. ✅ **3x per week** (with rest days in between)
5. ✅ **Slow pace** (conversation pace!)

**Remember:** It's not about speed or distance. It's about running regularly and building slowly. Every run is a success!

**Are you ready for your first run?** Then go! 🏃‍♀️
    `
  },

  task: {
    de: {
      title: 'Dein erster Walk-Run',
      description: 'Führe deinen ersten strukturierten Walk-Run durch. Folge dem Programm genau.',
      checklist: [
        { text: 'Vorbereitung: Schuhe anziehen, Kleidung checken, Wasser bereitstellen' },
        { text: 'Aufwärmen: 5 Minuten leichtes Gehen + dynamisches Dehnen' },
        { text: 'Hauptteil: 1 Minute laufen, 2 Minuten gehen (6x wiederholen)' },
        { text: 'Abkühlen: 5 Minuten langsames Gehen' },
        { text: 'Notiere: Wie hast du dich gefühlt? War das Tempo richtig?' },
        { text: 'Plane deine nächsten 2 Läufe dieser Woche (mit Ruhetagen dazwischen!)' }
      ]
    },
    en: {
      title: 'Your First Walk-Run',
      description: 'Complete your first structured walk-run. Follow the program exactly.',
      checklist: [
        { text: 'Preparation: Put on shoes, check clothing, have water ready' },
        { text: 'Warm-up: 5 minutes light walking + dynamic stretching' },
        { text: 'Main: 1 minute running, 2 minutes walking (repeat 6x)' },
        { text: 'Cool-down: 5 minutes slow walking' },
        { text: 'Note: How did you feel? Was the pace right?' },
        { text: 'Plan your next 2 runs this week (with rest days in between!)' }
      ]
    }
  },

  notes: {
    de: [
      {
        front: 'Was ist die Walk-Run-Methode?',
        back: 'Wechsel zwischen Gehen und Laufen. Laufphasen werden länger, Gehpausen kürzer. Beste Methode für Anfänger.'
      },
      {
        front: 'Wie schnell sollte ich beim ersten Lauf laufen?',
        back: 'Konversationstempo – du solltest während des Laufens sprechen können. Wenn nicht, langsamer werden!'
      },
      {
        front: 'Wie oft sollte ich in der ersten Woche laufen?',
        back: '3x pro Woche mit Ruhetagen dazwischen. Zeit ist wichtiger als Distanz – 20-30 Minuten total.'
      },
      {
        front: 'Was ist beim Aufwärmen wichtig?',
        back: '5-10 Min leichtes Gehen + dynamisches Dehnen. NICHT statisch dehnen vor dem Laufen!'
      },
      {
        front: 'Warum ist Abkühlen wichtig?',
        back: 'Hilft dem Körper sich zu erholen, reduziert Muskelkater, verhindert Schwindel, hilft Flexibilität zu erhalten'
      }
    ],
    en: [
      {
        front: 'What is the walk-run method?',
        back: 'Alternating between walking and running. Run phases get longer, walk breaks shorter. Best method for beginners.'
      },
      {
        front: 'How fast should I run on my first run?',
        back: 'Conversation pace – you should be able to talk while running. If not, slow down!'
      },
      {
        front: 'How often should I run in the first week?',
        back: '3x per week with rest days in between. Time is more important than distance – 20-30 minutes total.'
      },
      {
        front: 'What\'s important about warm-up?',
        back: '5-10 min light walking + dynamic stretching. DO NOT stretch statically before running!'
      },
      {
        front: 'Why is cool-down important?',
        back: 'Helps body recover, reduces muscle soreness, prevents dizziness, helps maintain flexibility'
      }
    ]
  }
};


