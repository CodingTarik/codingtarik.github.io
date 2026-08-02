import React from 'react';

export const trainingPlanningLesson = {
  id: 'r1_m1_training_planning',
  title: { 
    en: '1.5 Training Planning Fundamentals', 
    de: '1.5 Grundlagen der Trainingsplanung' 
  },
  description: { 
    en: 'Learn training principles, intensity zones, and the 10% rule - essential concepts for building your running safely and effectively.', 
    de: 'Lerne Trainingsprinzipien, Intensitätszonen und die 10%-Regel - essentielle Konzepte für sicheres und effektives Aufbauen deines Laufens.' 
  },
  category: 'basics',
  
  content: {
    de: `
### Grundlagen der Trainingsplanung 📅

Ein guter Trainingsplan ist wie eine Landkarte – er zeigt dir den Weg und hilft dir, deine Ziele zu erreichen. Aber er ist kein rigides Gefängnis. Flexibilität ist wichtig.

**Die vier Grundprinzipien der Trainingsplanung:**

---

### Trainingsprinzipien

<div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
  <div className="p-4 bg-blue-50 dark:bg-blue-900/40 rounded-lg">
    <h4 className="font-bold text-blue-800 dark:text-blue-200 mb-2">1. Progression</h4>
    <p className="text-sm text-blue-700 dark:text-blue-300">
      Langsam steigern! Dein Körper braucht Zeit, sich anzupassen. Zu schnelle Steigerung führt zu Verletzungen.
    </p>
  </div>
  <div className="p-4 bg-green-50 dark:bg-green-900/40 rounded-lg">
    <h4 className="font-bold text-green-800 dark:text-green-200 mb-2">2. Regelmäßigkeit</h4>
    <p className="text-sm text-green-700 dark:text-green-300">
      Minimum 3x pro Woche. Konsistenz ist wichtiger als einzelne intensive Sessions.
    </p>
  </div>
  <div className="p-4 bg-purple-50 dark:bg-purple-900/40 rounded-lg">
    <h4 className="font-bold text-purple-800 dark:text-purple-200 mb-2">3. Regeneration</h4>
    <p className="text-sm text-purple-700 dark:text-purple-300">
      Ruhetage sind Training! Dein Körper wird stärker während der Pause, nicht während des Laufens.
    </p>
  </div>
  <div className="p-4 bg-amber-50 dark:bg-amber-900/40 rounded-lg">
    <h4 className="font-bold text-amber-800 dark:text-amber-200 mb-2">4. Spezifität</h4>
    <p className="text-sm text-amber-700 dark:text-amber-300">
      Trainiere, was du erreichen willst. Für 5K brauchst du andere Training als für Marathon.
    </p>
  </div>
</div>

---

### Trainingsintensitäten verstehen

Die meisten Läufe sollten **leicht** sein! Das ist der häufigste Fehler: Zu viele harte Läufe.

<table className="w-full border-collapse my-6">
  <thead>
    <tr className="bg-gray-100 dark:bg-gray-800">
      <th className="border p-3 text-left">Zone</th>
      <th className="border p-3 text-left">Intensität</th>
      <th className="border p-3 text-left">Sprechen möglich?</th>
      <th className="border p-3 text-left">Anteil</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td className="border p-3"><strong>Zone 1</strong></td>
      <td className="border p-3">Sehr leicht (Gehen)</td>
      <td className="border p-3">Ja, komfortabel</td>
      <td className="border p-3">Warm-up/Cool-down</td>
    </tr>
    <tr>
      <td className="border p-3"><strong>Zone 2</strong></td>
      <td className="border p-3">Leicht (Easy Run)</td>
      <td className="border p-3">Ja, Konversation</td>
      <td className="border p-3"><strong>80%!</strong></td>
    </tr>
    <tr>
      <td className="border p-3"><strong>Zone 3</strong></td>
      <td className="border p-3">Moderat</td>
      <td className="border p-3">Kurze Sätze</td>
      <td className="border p-3">10-15%</td>
    </tr>
    <tr>
      <td className="border p-3"><strong>Zone 4</strong></td>
      <td className="border p-3">Schwer (Threshold)</td>
      <td className="border p-3">Nein</td>
      <td className="border p-3">5-10%</td>
    </tr>
    <tr>
      <td className="border p-3"><strong>Zone 5</strong></td>
      <td className="border p-3">Sehr schwer (Sprint)</td>
      <td className="border p-3">Definitiv nicht</td>
      <td className="border p-3">Selten</td>
    </tr>
  </tbody>
</table>

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border border-green-200 dark:border-green-700 my-6">
  <h4 className="font-bold text-green-800 dark:text-green-200 mb-4">💡 Die 80%-Regel</h4>
  <p className="text-sm text-green-700 dark:text-green-300">
    <strong>80% deiner Läufe sollten in Zone 2 sein!</strong> Das ist leicht, konversationstempo. Viele Anfänger laufen zu schnell, was zu Überlastung führt. Leichtes Laufen baut Ausdauer auf, ohne den Körper zu überlasten.
  </p>
</div>

---

### Die 10%-Regel

Die goldene Regel für Steigerung: **Steigere Distanz oder Zeit um maximal 10% pro Woche.**

**Beispiel:**

- Woche 1: 20 km total
- Woche 2: Maximal 22 km (20 km × 1.1)
- Woche 3: Maximal 24,2 km (22 km × 1.1)
- Woche 4: Maximal 26,6 km

**Warum 10%?**

- Gibt deinem Körper Zeit, sich anzupassen
- Reduziert Verletzungsrisiko massiv
- Langfristig schnellerer Fortschritt als zu schnelle Steigerung
- Mental machbarer

<div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-xl border border-red-200 dark:border-red-700 my-6">
  <h4 className="font-bold text-red-800 dark:text-red-200 mb-4">⚠️ Was passiert bei zu schneller Steigerung?</h4>
  <ul className="text-sm space-y-1 text-red-700 dark:text-red-300">
    <li>❌ Verletzungen (Shin Splints, ITBS, Stressfrakturen)</li>
    <li>❌ Übertraining (Erschöpfung, weniger Motivation)</li>
    <li>❌ Frustration (zu ehrgeizige Ziele)</li>
    <li>❌ Langfristig langsamerer Fortschritt</li>
  </ul>
</div>

**Die 10%-Regel gilt für:**

- Wochenkilometer gesamt
- Längster Lauf der Woche
- Laufzeiten gesamt
- Anzahl der Läufe pro Woche (mit Vorsicht)

**Aber:** Nicht für alle Parameter gleichzeitig! Wenn du Distanz steigerst, steigere nicht gleichzeitig auch die Intensität.

<div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-700 my-6">
  <h4 className="font-bold text-blue-800 dark:text-blue-200 mb-4">💡 Praktische Übung</h4>
  <p className="text-sm text-blue-700 dark:text-blue-300">
    Plane deine nächsten 4 Wochen mit der 10%-Regel:
  </p>
  <ol className="text-sm space-y-1 text-blue-700 dark:text-blue-300 mt-3 list-decimal list-inside">
    <li>Schreibe deine aktuelle Wochenkilometer auf</li>
    <li>Berechne jede Woche: Aktuelle × 1.1</li>
    <li>Plane deine Läufe entsprechend</li>
    <li>Übertreibe es nicht – weniger ist oft mehr!</li>
  </ol>
</div>

---

### Deload-Wochen (Entlastungswochen)

Alle 3-4 Wochen: Eine Woche mit reduziertem Volumen (70-80% der normalen Woche).

**Warum?**

- Körper regeneriert sich
- Verhindert Übertraining
- Langfristig bessere Progression

---

### Zusammenfassung

**Die wichtigsten Regeln:**

1. ✅ **Progression:** Langsam steigern (10%-Regel)
2. ✅ **Regelmäßigkeit:** Minimum 3x pro Woche
3. ✅ **Regeneration:** Ruhetage sind essentiell
4. ✅ **80% Easy:** Die meisten Läufe sollten leicht sein
5. ✅ **Spezifität:** Trainiere für dein Ziel

**Merke dir:** Ein guter Plan ist flexibel. Wenn du müde bist, passe an. Wenn du Schmerzen hast, pausiere. Höre auf deinen Körper!
    `,
    en: `
### Training Planning Fundamentals 📅

A good training plan is like a map – it shows you the way and helps you reach your goals. But it's not a rigid prison. Flexibility is important.

**The Four Basic Principles of Training Planning:**

1. **Progression:** Slow increase! Your body needs time to adapt.
2. **Regularity:** Minimum 3x per week. Consistency is more important than individual intensive sessions.
3. **Regeneration:** Rest days ARE training! Your body gets stronger during rest, not during running.
4. **Specificity:** Train for what you want to achieve.

---

### Understanding Training Intensities

Most runs should be **light**! This is the most common mistake: Too many hard runs.

- **Zone 1:** Very light (walking) - Warm-up/Cool-down
- **Zone 2:** Light (Easy Run) - **80% of your runs!**
- **Zone 3:** Moderate - 10-15%
- **Zone 4:** Hard (Threshold) - 5-10%
- **Zone 5:** Very hard (Sprint) - Rare

---

### The 10% Rule

The golden rule for progression: **Increase distance or time by maximum 10% per week.**

**Why 10%?**

- Gives your body time to adapt
- Massively reduces injury risk
- Long-term faster progress than too rapid increase
- Mentally manageable

---

### Summary

**The Most Important Rules:**

1. ✅ **Progression:** Slow increase (10% rule)
2. ✅ **Regularity:** Minimum 3x per week
3. ✅ **Regeneration:** Rest days are essential
4. ✅ **80% Easy:** Most runs should be light
5. ✅ **Specificity:** Train for your goal

**Remember:** A good plan is flexible. If you're tired, adjust. If you have pain, pause. Listen to your body!
    `
  },

  task: {
    de: {
      title: '4-Wochen-Trainingsplan erstellen',
      description: 'Erstelle einen 4-Wochen-Plan mit der 10%-Regel. Plane realistisch und berücksichtige Ruhetage.',
      checklist: [
        { text: 'Notiere deine aktuelle Wochenkilometer oder Laufzeit' },
        { text: 'Berechne Woche 2: Aktuelle × 1.1' },
        { text: 'Berechne Woche 3: Woche 2 × 1.1' },
        { text: 'Berechne Woche 4: Woche 3 × 1.1' },
        { text: 'Plane 3-4 Läufe pro Woche mit Ruhetagen dazwischen' },
        { text: 'Stelle sicher, dass 80% der Läufe leicht sind (Zone 2)' },
        { text: 'Plane eine Deload-Woche nach 3-4 Wochen' }
      ]
    },
    en: {
      title: 'Create 4-Week Training Plan',
      description: 'Create a 4-week plan with the 10% rule. Plan realistically and account for rest days.',
      checklist: [
        { text: 'Note your current weekly kilometers or running time' },
        { text: 'Calculate Week 2: Current × 1.1' },
        { text: 'Calculate Week 3: Week 2 × 1.1' },
        { text: 'Calculate Week 4: Week 3 × 1.1' },
        { text: 'Plan 3-4 runs per week with rest days in between' },
        { text: 'Ensure 80% of runs are light (Zone 2)' },
        { text: 'Plan a deload week after 3-4 weeks' }
      ]
    }
  },

  notes: {
    de: [
      {
        front: 'Was sind die vier Trainingsprinzipien?',
        back: 'Progression (langsam steigern), Regelmäßigkeit (3x/Woche), Regeneration (Ruhetage), Spezifität (trainiere für dein Ziel)'
      },
      {
        front: 'Was ist die 80%-Regel?',
        back: '80% deiner Läufe sollten leicht sein (Zone 2, Konversationstempo). Leichtes Laufen baut Ausdauer auf ohne Überlastung.'
      },
      {
        front: 'Was ist die 10%-Regel?',
        back: 'Steigere Distanz oder Zeit um maximal 10% pro Woche. Gibt dem Körper Zeit sich anzupassen und reduziert Verletzungsrisiko.'
      },
      {
        front: 'Was sind die Intensitätszonen?',
        back: 'Zone 1: Sehr leicht (Gehen). Zone 2: Leicht/Easy Run (80%!). Zone 3: Moderat. Zone 4: Schwer/Threshold. Zone 5: Sehr schwer/Sprint.'
      }
    ],
    en: [
      {
        front: 'What are the four training principles?',
        back: 'Progression (slow increase), Regularity (3x/week), Regeneration (rest days), Specificity (train for your goal)'
      },
      {
        front: 'What is the 80% rule?',
        back: '80% of your runs should be light (Zone 2, conversation pace). Light running builds endurance without overload.'
      },
      {
        front: 'What is the 10% rule?',
        back: 'Increase distance or time by maximum 10% per week. Gives body time to adapt and reduces injury risk.'
      }
    ]
  }
};


