import React from 'react';

export const intervalsLesson = {
  id: 'r2_m3_intervals',
  title: { 
    en: '2.3 Interval Training Basics', 
    de: '2.3 Intervalltraining (Basics)' 
  },
  description: { 
    en: 'Learn what intervals are, how to structure them, and how to incorporate Fartlek training into your routine.', 
    de: 'Lerne, was Intervalle sind, wie du sie strukturierst und wie du Fartlek-Training in deine Routine integrierst.' 
  },
  category: 'building',
  
  content: {
    de: `
### Intervalltraining: Schnell-Langsam-Wechsel ⚡

Intervalle sind eine der effektivsten Methoden, um schneller zu werden. Aber: Nicht zu oft! Für Anfänger: Maximal 1x pro Woche.

---

### Was sind Intervalle?

**Schnelle Phasen + Erholungsphasen**

- **Schnelle Phase:** Anstrengend, aber kontrolliert
- **Erholungsphase:** Gehen oder langsames Joggen
- **Wiederholung:** Mehrere Durchgänge

**Warum Intervalle?**

- ✅ Verbessert Geschwindigkeit
- ✅ Erhöht VO2max (maximale Sauerstoffaufnahme)
- ✅ Verbessert Laktattoleranz
- ✅ Effizient (kurze, intensive Sessions)

<div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-xl border border-red-200 dark:border-red-700 my-6">
  <h4 className="font-bold text-red-800 dark:text-red-200 mb-4">⚠️ Wichtig: Nicht zu oft!</h4>
  <p className="text-sm text-red-700 dark:text-red-300">
    Für Anfänger: Maximal 1x pro Woche! Intervalle sind anstrengend. Zu viele führen zu Überlastung und Verletzungen. Easy Runs sind wichtiger!
  </p>
</div>

---

### Einfache Intervalle für Anfänger

**Struktur:**

1. **Aufwärmen:** 10 Minuten leichtes Joggen
2. **Hauptteil:** Intervalle
3. **Abkühlen:** 10 Minuten leichtes Joggen

**Beispiel 1: Zeit-basierte Intervalle**

- 4x 2 Minuten schnell
- 2 Minuten Erholung (gehen/joggen) zwischen den Intervallen
- Tempo: "Schnell, aber nicht Sprint"

**Beispiel 2: Kürzere Intervalle**

- 6x 1 Minute schnell
- 1 Minute Erholung zwischen den Intervallen

**Das Tempo:**

- Schnell genug, um anstrengend zu sein
- Aber nicht so schnell, dass du nach 30 Sekunden aufgeben musst
- Du solltest alle Wiederholungen schaffen können

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border border-green-200 dark:border-green-700 my-6">
  <h4 className="font-bold text-green-800 dark:text-green-200 mb-4">💡 Praktische Übung</h4>
  <p className="text-sm text-green-700 dark:text-green-300">
    Aufwärmen 10 Min, dann 4x 2 Min schnell (2 Min Erholung), Abkühlen 10 Min. Tempo: Schnell, aber kontrolliert. Du solltest alle 4 Intervalle schaffen können.
  </p>
</div>

---

### Fartlek - Spiel mit dem Tempo

**"Fartlek"** = Schwedisch für "Tempospiel"

**Was ist Fartlek?**

- Unstrukturierte Intervalle
- Flexibel und spaßig
- Keine festen Zeiten oder Distanzen
- "Lauf schnell bis zur nächsten Laterne, dann langsam"

**Warum Fartlek?**

- ✅ Spaßig und abwechslungsreich
- ✅ Flexibel (keine Uhr nötig)
- ✅ Gute Einführung in schnelleres Laufen
- ✅ Mentale Abwechslung

**Wie macht man Fartlek?**

1. Wähle Objekte auf deiner Route (Laternen, Bäume, Häuser)
2. Lauf schnell bis zum nächsten Objekt
3. Lauf langsam bis zum übernächsten Objekt
4. Wiederhole

**Beispiel-Route:**

- Schnell bis zur nächsten Laterne
- Langsam bis zur übernächsten Laterne
- Schnell bis zum nächsten Baum
- Langsam bis zum nächsten Haus
- Wiederhole für 20-30 Minuten

<div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-700 my-6">
  <h4 className="font-bold text-blue-800 dark:text-blue-200 mb-4">💡 Praktische Übung</h4>
  <p className="text-sm text-blue-700 dark:text-blue-300">
    30 Minuten Fartlek: Wähle Objekte (Laternen, Bäume) und lauf schnell dorthin, dann langsam. Flexibel, spaßig, keine Uhr nötig!
  </p>
</div>

---

### Intervalle vs. Fartlek

<table className="w-full border-collapse my-6">
  <thead>
    <tr className="bg-gray-100 dark:bg-gray-800">
      <th className="border p-3 text-left">Aspekt</th>
      <th className="border p-3 text-left">Intervalle</th>
      <th className="border p-3 text-left">Fartlek</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td className="border p-3"><strong>Struktur</strong></td>
      <td className="border p-3">Fest (z.B. 4x 2 Min)</td>
      <td className="border p-3">Flexibel</td>
    </tr>
    <tr>
      <td className="border p-3"><strong>Uhr nötig?</strong></td>
      <td className="border p-3">Ja</td>
      <td className="border p-3">Nein</td>
    </tr>
    <tr>
      <td className="border p-3"><strong>Für Anfänger</strong></td>
      <td className="border p-3">Gut</td>
      <td className="border p-3">Sehr gut (spaßiger!)</td>
    </tr>
    <tr>
      <td className="border p-3"><strong>Zweck</strong></td>
      <td className="border p-3">Spezifische Verbesserung</td>
      <td className="border p-3">Spaß + Variation</td>
    </tr>
  </tbody>
</table>

---

### Zusammenfassung

**Intervalle:**

- ✅ Schnelle Phasen + Erholungsphasen
- ✅ Maximal 1x pro Woche für Anfänger
- ✅ Strukturiert (z.B. 4x 2 Min schnell, 2 Min Erholung)
- ✅ Verbessert Geschwindigkeit & VO2max

**Fartlek:**

- ✅ Unstrukturierte Intervalle
- ✅ Flexibel und spaßig
- ✅ Keine Uhr nötig
- ✅ Gute Einführung in schnelleres Laufen

**Merke dir:** Intervalle sind anstrengend! Nicht zu oft. Easy Runs sind wichtiger für langfristigen Fortschritt.
    `,
    en: `
### Interval Training: Fast-Slow Alternation ⚡

Intervals are one of the most effective methods to get faster. But: Not too often! For beginners: Maximum 1x per week.

---

### What are Intervals?

**Fast Phases + Recovery Phases**

- **Fast Phase:** Strenuous, but controlled
- **Recovery Phase:** Walking or slow jogging
- **Repetition:** Multiple rounds

**Why Intervals?**

- ✅ Improves speed
- ✅ Increases VO2max (maximum oxygen uptake)
- ✅ Improves lactate tolerance
- ✅ Efficient (short, intense sessions)

---

### Simple Intervals for Beginners

**Structure:**

1. **Warm-up:** 10 minutes light jogging
2. **Main:** Intervals
3. **Cool-down:** 10 minutes light jogging

**Example 1: Time-based Intervals**

- 4x 2 minutes fast
- 2 minutes recovery (walk/jog) between intervals
- Pace: "Fast, but not sprint"

**Example 2: Shorter Intervals**

- 6x 1 minute fast
- 1 minute recovery between intervals

---

### Fartlek - Playing with Pace

**"Fartlek"** = Swedish for "speed play"

**What is Fartlek?**

- Unstructured intervals
- Flexible and fun
- No fixed times or distances
- "Run fast to the next lamp post, then slow"

**Why Fartlek?**

- ✅ Fun and varied
- ✅ Flexible (no watch needed)
- ✅ Good introduction to faster running
- ✅ Mental variety

---

### Summary

**Intervals:**

- ✅ Fast phases + recovery phases
- ✅ Maximum 1x per week for beginners
- ✅ Structured (e.g., 4x 2 min fast, 2 min recovery)
- ✅ Improves speed & VO2max

**Fartlek:**

- ✅ Unstructured intervals
- ✅ Flexible and fun
- ✅ No watch needed
- ✅ Good introduction to faster running

**Remember:** Intervals are strenuous! Not too often. Easy Runs are more important for long-term progress.
    `
  },

  task: {
    de: {
      title: 'Erstes Intervalltraining',
      description: 'Führe dein erstes strukturiertes Intervalltraining durch.',
      checklist: [
        { text: 'Aufwärmen: 10 Min leichtes Joggen' },
        { text: 'Hauptteil: 4x 2 Min schnell, 2 Min Erholung (gehen/joggen)' },
        { text: 'Tempo: Schnell, aber kontrolliert - du solltest alle 4 Intervalle schaffen' },
        { text: 'Abkühlen: 10 Min leichtes Joggen' },
        { text: 'Notiere: Wie fühlst du dich? War das Tempo richtig?' },
        { text: 'Nächste Woche: Versuche Fartlek (30 Min, flexibel)' }
      ]
    },
    en: {
      title: 'First Interval Training',
      description: 'Complete your first structured interval training.',
      checklist: [
        { text: 'Warm-up: 10 min light jogging' },
        { text: 'Main: 4x 2 min fast, 2 min recovery (walk/jog)' },
        { text: 'Pace: Fast, but controlled - you should be able to complete all 4 intervals' },
        { text: 'Cool-down: 10 min light jogging' },
        { text: 'Note: How do you feel? Was the pace right?' },
        { text: 'Next week: Try Fartlek (30 min, flexible)' }
      ]
    }
  },

  notes: {
    de: [
      {
        front: 'Was sind Intervalle?',
        back: 'Schnelle Phasen + Erholungsphasen. Verbessern Geschwindigkeit & VO2max. Maximal 1x pro Woche für Anfänger.'
      },
      {
        front: 'Was ist Fartlek?',
        back: 'Unstrukturierte Intervalle. "Tempospiel" - lauf schnell bis zum nächsten Objekt, dann langsam. Flexibel und spaßig.'
      },
      {
        front: 'Wie oft sollte man Intervalle machen?',
        back: 'Maximal 1x pro Woche für Anfänger. Intervalle sind anstrengend. Easy Runs sind wichtiger für langfristigen Fortschritt.'
      }
    ],
    en: [
      {
        front: 'What are intervals?',
        back: 'Fast phases + recovery phases. Improve speed & VO2max. Maximum 1x per week for beginners.'
      },
      {
        front: 'What is Fartlek?',
        back: 'Unstructured intervals. "Speed play" - run fast to next object, then slow. Flexible and fun.'
      }
    ]
  }
};

