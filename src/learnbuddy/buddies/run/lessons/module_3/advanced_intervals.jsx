import React from 'react';

export const advancedIntervalsLesson = {
  id: 'r3_m4_advanced_intervals',
  title: { 
    en: '3.4 Advanced Interval Training', 
    de: '3.4 Intervalltraining fortgeschritten' 
  },
  description: { 
    en: 'Master VO2max and lactate threshold intervals to boost speed and endurance for longer races.', 
    de: 'Meistere VO2max- und Laktatschwelle-Intervalle, um Geschwindigkeit und Ausdauer für längere Rennen zu steigern.' 
  },
  category: 'specialization',
  
  content: {
    de: `
### Intervalltraining fortgeschritten: Geschwindigkeit & Kapazität pushen! ⚡

Nach den Basics (Phase 2) geht es um fortgeschrittene Intervalle. Diese verbessern deine VO2max (maximale Sauerstoffaufnahme) und Laktatschwelle (wie lange du "hart" laufen kannst). Perfekt für 5K-10K-Halbmarathon!

---
### Was sind fortgeschrittene Intervalle?

**VO2max-Intervalle:**
- Hohe Intensität (90-100% maxHF oder 5K-Race-Tempo)
- 800m-1600m Wiederholungen
- Erholung: 50-100% der Laufzeit (joggen oder gehen)
- Warum? Erhöht maximale Sauerstoffaufnahme – mehr Power!

**Laktat-Threshold-Intervalle:**
- "Comfortably Hard" (80-90% maxHF, 10K-Tempo)
- 1-2 km Wiederholungen
- Kurze Erholung (1-2 Min)
- Warum? Verzögert Milchsäure-Ansammlung – längeres hohes Tempo!

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border border-green-200 dark:border-green-700 my-6">
  <h4 className="font-bold text-green-800 dark:text-green-200 mb-4">💡 Wann einsetzen?</h4>
  <p className="text-sm text-green-700 dark:text-green-300">
    1x pro Woche max. für Intermediate! Nicht zu oft – Erholung ist entscheidend. Nach Easy Run oder Ruhetag planen.
  </p>
</div>

**Häufigkeit & Progression:**
- Anfänger-Intermediate: 1x/Woche, 4-6 Wiederholungen
- Fortgeschritten: 1-2x/Woche, 6-8 Wiederholungen
- Steigere: Mehr Wiederholungen oder Distanz, nicht Tempo!

---
### VO2max-Intervalle: Die Power-Booster

**Beispiel-Workout:**
- Aufwärmen: 10-15 Min Easy Run + Drills
- Hauptteil: 5x 1000m bei 5K-Tempo (3 Min Erholung joggen)
- Abkühlen: 10 Min Easy + Dehnen
- Gesamt: 45-60 Min

**Warum 1000m?**
- Optimal für VO2max-Stimulation (3-5 Min Anstrengung)
- Erholung: Vollständig recovern, aber nicht kalt werden

<table className="w-full border-collapse my-6">
  <thead>
    <tr className="bg-gray-100 dark:bg-gray-800">
      <th className="border p-3 text-left">Wiederholung</th>
      <th className="border p-3 text-left">Distanz</th>
      <th className="border p-3 text-left">Tempo</th>
      <th className="border p-3 text-left">Erholung</th>
      <th className="border p-3 text-left">Ziel</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td className="border p-3"><strong>800m</strong></td>
      <td className="border p-3">800m</td>
      <td className="border p-3">5K-Race-Tempo</td>
      <td className="border p-3">2-3 Min joggen</td>
      <td className="border p-3">Anfänger: 4-6x</td>
    </tr>
    <tr>
      <td className="border p-3"><strong>1000m</strong></td>
      <td className="border p-3">1000m</td>
      <td className="border p-3">Etwas schneller als 5K</td>
      <td className="border p-3">3 Min joggen</td>
      <td className="border p-3">Intermediate: 5x</td>
    </tr>
    <tr>
      <td className="border p-3"><strong>1600m</strong></td>
      <td className="border p-3">1600m</td>
      <td className="border p-3">5K-Tempo</td>
      <td className="border p-3">4 Min joggen</td>
      <td className="border p-3">Fortgeschritten: 3-4x</td>
    </tr>
  </tbody>
</table>

**Praktische Übung:** Aufwärmen, dann 4x 1000m schnell (3 Min Erholung), Abkühlen. Notiere: Wie fühlt sich das Tempo an? Passe nächste Woche an (z.B. 5x).

---
### Laktat-Threshold-Intervalle: Ausdauer bei hohem Tempo

**Beispiel-Workout:**
- Aufwärmen: 10 Min Easy + Strides
- Hauptteil: 3x 2000m bei Threshold-Tempo (1 Min Erholung)
- Abkühlen: 10 Min Easy
- Gesamt: 50-70 Min

**Warum Threshold?**
- Baut anaerobe Kapazität auf
- Ermöglicht längeres Rennen bei hohem Tempo
- Tempo: "Kannst du noch Sätze sagen?" (nicht sprinten!)

<div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-700 my-6">
  <h4 className="font-bold text-blue-800 dark:text-blue-200 mb-4">💡 Threshold-Tempo bestimmen</h4>
  <p className="text-sm text-blue-700 dark:text-blue-300">
    Ca. 10K- bis Halbmarathon-Tempo. Oder: 20-Min-Test-Lauf (letzte 5 Min Durchschnitt). Zu hart? Langsamer machen!
  </p>
</div>

**Progression-Beispiele:**
- Woche 1: 3x 1600m (2 Min Erholung)
- Woche 4: 4x 2000m (1 Min Erholung)
- Woche 8: 2x 3000m (2 Min Erholung)

**Praktische Übung:** 3x 2000m im Threshold-Tempo (1 Min Erholung). Spüre den Unterschied zu VO2max: Länger, aber kontrolliert.

---
### Integration & Tipps

**In deine Woche einbauen:**
- Dienstag: VO2max-Intervalle
- Donnerstag: Threshold oder Tempo Run
- Samstag: Long Run (Easy)
- Montag/Freitag: Easy Runs
- Ruhetage: Cross oder Kraft

**Häufige Fehler:**
- ❌ Zu häufig (mehr als 1-2x/Woche) → Übertraining
- ❌ Zu wenig Erholung → Schlechte Performance
- ❌ Falsches Tempo (zu langsam = nutzlos, zu schnell = Verletzung)

<div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-xl border border-red-200 dark:border-red-700 my-6">
  <h4 className="font-bold text-red-800 dark:text-red-200 mb-4">⚠️ Warnung</h4>
  <p className="text-sm text-red-700 dark:text-red-300">
    Intervalle sind intensiv! Bei Schmerzen stoppen. Starte mit kürzeren Distanzen und baue auf. Erholung ist 50% des Erfolgs.
  </p>
</div>

<div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl border border-purple-200 dark:border-purple-700 my-6">
  <h4 className="font-bold text-purple-800 dark:text-purple-200 mb-4">🎯 Praktische Übung</h4>
  <p className="text-sm text-purple-700 dark:text-purple-300">
    Wähle ein Workout (z.B. 5x 1000m VO2max). Führe es durch und tracke: HF, Pace, Gefühl. Vergleiche mit Easy Run – spürst du den Boost?
  </p>
</div>

---
### Zusammenfassung

**Intervalltraining fortgeschritten:**
- ✅ VO2max: 800-1600m bei 5K-Tempo (lange Erholung)
- ✅ Threshold: 1-2 km bei "Comfortably Hard" (kurze Erholung)
- ✅ 1x/Woche, Progression durch Wiederholungen
- ✅ Vorteile: Mehr Speed, höhere Schwelle, bessere Race-Paces
- ✅ Tipp: Immer aufwärmen/abkühlen, Tempo kontrollieren

**Merke dir:** Intervalle sind wie Gewichte heben für Läufer – kurz, intensiv, transformierend. Aber ohne Erholung nutzlos!
    `,
    en: `
### Advanced Interval Training: Push Speed & Capacity! ⚡

After basics (Phase 2), it's time for advanced intervals. These improve your VO2max (max oxygen uptake) and lactate threshold (how long you can sustain "hard" effort). Perfect for 5K-10K-half marathon!

---
### What Are Advanced Intervals?

**VO2max Intervals:**
- High intensity (90-100% max HR or 5K race pace)
- 800m-1600m repeats
- Recovery: 50-100% of run time (jog or walk)
- Why? Increases max oxygen uptake – more power!

**Lactate Threshold Intervals:**
- "Comfortably hard" (80-90% max HR, 10K pace)
- 1-2 km repeats
- Short recovery (1-2 min)
- Why? Delays lactate buildup – sustain high pace longer!

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border border-green-200 dark:border-green-700 my-6">
  <h4 className="font-bold text-green-800 dark:text-green-200 mb-4">💡 When to Use?</h4>
  <p className="text-sm text-green-700 dark:text-green-300">
    Max 1x per week for intermediates! Not too often – recovery is key. Schedule after easy run or rest day.
  </p>
</div>

**Frequency & Progression:**
- Beginner-intermediate: 1x/week, 4-6 reps
- Advanced: 1-2x/week, 6-8 reps
- Progress: More reps or distance, not pace!

---
### VO2max Intervals: The Power Boosters

**Example Workout:**
- Warm-up: 10-15 min easy run + drills
- Main: 5x 1000m at 5K pace (3 min jog recovery)
- Cool-down: 10 min easy + stretch
- Total: 45-60 min

**Why 1000m?**
- Optimal for VO2max stimulation (3-5 min effort)
- Recovery: Fully recover but don't get cold

<table className="w-full border-collapse my-6">
  <thead>
    <tr className="bg-gray-100 dark:bg-gray-800">
      <th className="border p-3 text-left">Repeat</th>
      <th className="border p-3 text-left">Distance</th>
      <th className="border p-3 text-left">Pace</th>
      <th className="border p-3 text-left">Recovery</th>
      <th className="border p-3 text-left">Goal</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td className="border p-3"><strong>800m</strong></td>
      <td className="border p-3">800m</td>
      <td className="border p-3">5K race pace</td>
      <td className="border p-3">2-3 min jog</td>
      <td className="border p-3">Beginner: 4-6x</td>
    </tr>
    <tr>
      <td className="border p-3"><strong>1000m</strong></td>
      <td className="border p-3">1000m</td>
      <td className="border p-3">Slightly faster than 5K</td>
      <td className="border p-3">3 min jog</td>
      <td className="border p-3">Intermediate: 5x</td>
    </tr>
    <tr>
      <td className="border p-3"><strong>1600m</strong></td>
      <td className="border p-3">1600m</td>
      <td className="border p-3">5K pace</td>
      <td className="border p-3">4 min jog</td>
      <td className="border p-3">Advanced: 3-4x</td>
    </tr>
  </tbody>
</table>

**Practical Exercise:** Warm-up, then 4x 1000m fast (3 min recovery), cool-down. Note: How does the pace feel? Adjust next week (e.g., 5x).

---
### Lactate Threshold Intervals: Endurance at High Pace

**Example Workout:**
- Warm-up: 10 min easy + strides
- Main: 3x 2000m at threshold pace (1 min recovery)
- Cool-down: 10 min easy
- Total: 50-70 min

**Why Threshold?**
- Builds anaerobic capacity
- Allows sustaining high pace longer
- Pace: "Can you still say sentences?" (not sprinting!)

<div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-700 my-6">
  <h4 className="font-bold text-blue-800 dark:text-blue-200 mb-4">💡 Determine Threshold Pace</h4>
  <p className="text-sm text-blue-700 dark:text-blue-300">
    About 10K to half marathon pace. Or: 20-min test run (average last 5 min). Too hard? Slow it down!
  </p>
</div>

**Progression Examples:**
- Week 1: 3x 1600m (2 min recovery)
- Week 4: 4x 2000m (1 min recovery)
- Week 8: 2x 3000m (2 min recovery)

**Practical Exercise:** 3x 2000m at threshold pace (1 min recovery). Feel the difference from VO2max: Longer, but controlled.

---
### Integration & Tips

**Fit into Your Week:**
- Tuesday: VO2max intervals
- Thursday: Threshold or tempo run
- Saturday: Long run (easy)
- Monday/Friday: Easy runs
- Rest days: Cross or strength

**Common Mistakes:**
- ❌ Too frequent (more than 1-2x/week) → Overtraining
- ❌ Too little recovery → Poor performance
- ❌ Wrong pace (too slow = useless, too fast = injury)

<div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-xl border border-red-200 dark:border-red-700 my-6">
  <h4 className="font-bold text-red-800 dark:text-red-200 mb-4">⚠️ Warning</h4>
  <p className="text-sm text-red-700 dark:text-red-300">
    Intervals are intense! Stop at pain. Start with shorter distances and build up. Recovery is 50% of success.
  </p>
</div>

<div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl border border-purple-200 dark:border-purple-700 my-6">
  <h4 className="font-bold text-purple-800 dark:text-purple-200 mb-4">🎯 Practical Exercise</h4>
  <p className="text-sm text-purple-700 dark:text-purple-300">
    Choose a workout (e.g., 5x 1000m VO2max). Do it and track: HR, pace, feel. Compare to easy run – do you feel the boost?
  </p>
</div>

---
### Summary

**Advanced Interval Training:**
- ✅ VO2max: 800-1600m at 5K pace (long recovery)
- ✅ Threshold: 1-2 km at "comfortably hard" (short recovery)
- ✅ 1x/week, progress via reps
- ✅ Benefits: More speed, higher threshold, better race paces
- ✅ Tip: Always warm-up/cool-down, control pace

**Remember:** Intervals are like weightlifting for runners – short, intense, transformative. But useless without recovery!
    `
  },

  task: {
    de: {
      title: 'Intervall-Workout testen',
      description: 'Führe ein fortgeschrittenes Intervall-Workout durch und analysiere.',
      checklist: [
        { text: 'VO2max-Workout wählen (z.B. 4x 1000m bei 5K-Tempo)' },
        { text: 'Aufwärmen: 10-15 Min Easy + Drills' },
        { text: 'Hauptteil: Intervalle mit Erholung durchführen' },
        { text: 'Abkühlen: 10 Min Easy + Dehnen' },
        { text: 'Tracken: Pace, HF, Gefühl (App nutzen)' },
        { text: 'Nächste Woche: Progression (z.B. 5x statt 4x)' }
      ]
    },
    en: {
      title: 'Test Interval Workout',
      description: 'Perform an advanced interval workout and analyze.',
      checklist: [
        { text: 'Choose VO2max workout (e.g., 4x 1000m at 5K pace)' },
        { text: 'Warm-up: 10-15 min easy + drills' },
        { text: 'Main: Do intervals with recovery' },
        { text: 'Cool-down: 10 min easy + stretch' },
        { text: 'Track: Pace, HR, feel (use app)' },
        { text: 'Next week: Progress (e.g., 5x instead of 4x)' }
      ]
    }
  },

  notes: {
    de: [
      {
        front: 'Was ist VO2max-Training?',
        back: 'Hohe Intensität (5K-Tempo), 800-1600m Wiederholungen, 50-100% Erholung. Steigert maximale Sauerstoffaufnahme.'
      },
      {
        front: 'Threshold-Tempo?',
        back: '"Comfortably Hard" (10K-Tempo), 1-2 km Intervalle, kurze Erholung. Verzögert Laktat-Ansammlung.'
      },
      {
        front: 'Wie oft Intervalle?',
        back: '1x pro Woche für Intermediate, max. 1-2x. Immer Erholung einplanen, nicht hintereinander mit Long Run.'
      }
    ],
    en: [
      {
        front: 'What is VO2max training?',
        back: 'High intensity (5K pace), 800-1600m repeats, 50-100% recovery. Boosts max oxygen uptake.'
      },
      {
        front: 'Threshold pace?',
        back: '"Comfortably hard" (10K pace), 1-2 km intervals, short recovery. Delays lactate buildup.'
      },
      {
        front: 'How often intervals?',
        back: '1x per week for intermediates, max 1-2x. Always plan recovery, not back-to-back with long run.'
      }
    ]
  }
};
