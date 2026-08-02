import React from 'react';

export const tenKPlanLesson = {
  id: 'r3_m2_10k_plan',
  title: { 
    en: '3.2 10K Training Plan', 
    de: '3.2 10K Trainingsplan' 
  },
  description: { 
    en: 'Advance from 5K to 10K with a 10-week plan focusing on increased endurance, longer long runs, and tempo variation.', 
    de: 'Von 5K zu 10K aufbauen mit einem 10-wöchigen Plan, der erhöhte Ausdauer, längere Long Runs und Tempo-Variation betont.' 
  },
  category: 'specialization',
  
  content: {
    de: `
### 10K Trainingsplan: Die nächste Stufe der Ausdauer! 🏃‍♂️

10K (10 Kilometer) ist die logische Weiterentwicklung vom 5K. Es fordert mehr mentale und körperliche Ausdauer, aber mit diesem 10-Wochen-Plan wirst du bereit sein. Von 5 km auf 10 km – doppelte Distanz, doppelter Stolz!

---
### Von 5K zu 10K: Die Herausforderung

**Was macht 10K besonders?**
- Steigerung der Ausdauer (mehr Long Runs)
- Tempo-Variation wird wichtiger (nicht nur Easy Runs)
- Mentale Stärke: Länger durchhalten lernen
- Distanz: 10 km = ca. 45-60 Min (je nach Tempo)

**Voraussetzungen:**
- Du hast den 5K-Plan abgeschlossen oder kannst 5 km komfortabel laufen
- Basis-Ausdauer vorhanden (Phase 1-2)
- Fokus: Mehr Volumen (4-5x pro Woche), längere Long Runs (12-15 km)

**Vorteile:**
- ✅ Stärkere aerobe Basis für Halbmarathon
- ✅ Mehr Events (10K-Rennen weltweit)
- ✅ Balance zwischen Geschwindigkeit und Ausdauer

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border border-green-200 dark:border-green-700 my-6">
  <h4 className="font-bold text-green-800 dark:text-green-200 mb-4">💡 Dein Start</h4>
  <p className="text-sm text-green-700 dark:text-green-300">
    Kannst du 5 km in 25-30 Min laufen? Super! Wenn nicht, wiederhole den 5K-Plan. Ziel: 10K durchlaufen mit kontrolliertem Tempo.
  </p>
</div>

---
### Trainingsstruktur: 4-5x pro Woche

**Grundprinzipien:**
- 4-5 Läufe pro Woche (Ruhetage zwischen harten Einheiten!)
- Long Run: 12-15 km (wöchentliche Steigerung)
- Intervalltraining: 800m-1600m Wiederholungen (Geschwindigkeit)
- 10%-Regel strikt einhalten
- Kraft/Cross: 2x pro Woche (Hüfte, Core)

**Wöchentliche Struktur (Beispiel):**
- Montag: Easy Run oder Cross-Training
- Dienstag: Intervall-Training
- Mittwoch: Ruhetag
- Donnerstag: Tempo Run
- Freitag: Easy Run oder Ruhetag
- Samstag: Long Run
- Sonntag: Recovery Run (sehr leicht)

<div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-700 my-6">
  <h4 className="font-bold text-blue-800 dark:text-blue-200 mb-4">💡 Variation</h4>
  <p className="text-sm text-blue-700 dark:text-blue-300">
    Nicht jeden Tag gleich! 70% Easy, 20% Tempo/Intervalle, 10% Long Run. Das verhindert Überlastung und baut Balance auf.
  </p>
</div>

**10-Wochen-10K-Plan (Übersicht):**

<table className="w-full border-collapse my-6">
  <thead>
    <tr className="bg-gray-100 dark:bg-gray-800">
      <th className="border p-3 text-left">Woche</th>
      <th className="border p-3 text-left">Easy Runs (x2-3)</th>
      <th className="border p-3 text-left">Tempo/Intervalle</th>
      <th className="border p-3 text-left">Long Run</th>
      <th className="border p-3 text-left">Gesamt km</th>
      <th className="border p-3 text-left">Fokus</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td className="border p-3"><strong>1</strong></td>
      <td className="border p-3">5 km, 5 km, 4 km</td>
      <td className="border p-3">4x 800m Tempo / 2 Min Erholung</td>
      <td className="border p-3">7 km</td>
      <td className="border p-3">21 km</td>
      <td className="border p-3">Übergang von 5K</td>
    </tr>
    <tr>
      <td className="border p-3"><strong>2</strong></td>
      <td className="border p-3">5 km, 5.5 km, 4.5 km</td>
      <td className="border p-3">5x 800m Tempo / 2 Min Erholung</td>
      <td className="border p-3">8 km</td>
      <td className="border p-3">23 km</td>
      <td className="border p-3">Steigerung</td>
    </tr>
    <tr>
      <td className="border p-3"><strong>3</strong></td>
      <td className="border p-3">5.5 km, 6 km, 5 km</td>
      <td className="border p-3">3x 1.6 km Tempo / 3 Min Erholung</td>
      <td className="border p-3">9 km</td>
      <td className="border p-3">25.5 km</td>
      <td className="border p-3">Intervall-Fokus</td>
    </tr>
    <tr>
      <td className="border p-3"><strong>4</strong></td>
      <td className="border p-3">6 km, 6 km, 5 km</td>
      <td className="border p-3">Restwoche: Leichte Tempo</td>
      <td className="border p-3">9 km</td>
      <td className="border p-3">26 km</td>
      <td className="border p-3">Erholung</td>
    </tr>
    <tr>
      <td className="border p-3"><strong>5</strong></td>
      <td className="border p-3">6 km, 6.5 km, 5.5 km</td>
      <td className="border p-3">6x 800m Tempo / 2.5 Min Erholung</td>
      <td className="border p-3">10 km</td>
      <td className="border p-3">28.5 km</td>
      <td className="border p-3">Geschwindigkeit</td>
    </tr>
    <tr>
      <td className="border p-3"><strong>6</strong></td>
      <td className="border p-3">6.5 km, 7 km, 6 km</td>
      <td className="border p-3">25 Min kontinuierlich Tempo</td>
      <td className="border p-3">11 km</td>
      <td className="border p-3">30.5 km</td>
      <td className="border p-3">Tempo-Ausdauer</td>
    </tr>
    <tr>
      <td className="border p-3"><strong>7</strong></td>
      <td className="border p-3">7 km, 7 km, 6.5 km</td>
      <td className="border p-3">4x 1.6 km Tempo / 3 Min Erholung</td>
      <td className="border p-3">12 km</td>
      <td className="border p-3">32.5 km</td>
      <td className="border p-3">Peak Volumen</td>
    </tr>
    <tr>
      <td className="border p-3"><strong>8</strong></td>
      <td className="border p-3">6 km, 6 km, 5 km</td>
      <td className="border p-3">Restwoche: Leichte Intervalle</td>
      <td className="border p-3">12 km</td>
      <td className="border p-3">29 km</td>
      <td className="border p-3">Erholung vor Peak</td>
    </tr>
    <tr>
      <td className="border p-3"><strong>9</strong></td>
      <td className="border p-3">7 km, 7.5 km, 6.5 km</td>
      <td className="border p-3">5 km Tempo Run</td>
      <td className="border p-3">13 km</td>
      <td className="border p-3">34 km</td>
      <td className="border p-3">Finale Steigerung</td>
    </tr>
    <tr>
      <td className="border p-3"><strong>10</strong></td>
      <td className="border p-3">5 km easy, 4 km easy</td>
      <td className="border p-3">Race Week: Leicht + Strides</td>
      <td className="border p-3">Rennen: 10K!</td>
      <td className="border p-3">19 km</td>
      <td className="border p-3">Taper & Race</td>
    </tr>
  </tbody>
</table>

**Tempo-Anleitung:**
- Easy Run: Konversationstempo
- Tempo/Intervalle: 10K-Race-Tempo (anstrengend, aber kontrolliert)
- Long Run: Sehr langsam (Ausdauer aufbauen)

**Praktische Übung:** Starte mit Woche 1. Tracke Fortschritte und integriere 2x Krafttraining. Nach Woche 5: Test-10K laufen.

---
### 10K Race-Strategie: Kontrolliertes Durchhalten

**Pacing-Strategien:**
- **Erste 3 km:** Kontrolliert (5-10 Sek/km langsamer als Zieltempo)
- **Mittlere 4 km:** Tempo halten (konstant, atmen!)
- **Letzte 3 km:** Alles geben (Beschleunigung, wenn möglich)

**Race-Day-Tipps:**
- Carb-Loading 2 Tage vorher (mehr Carbs!)
- Gels bei km 5 und 8 (mit Wasser)
- Mentale Phasen: "Erste Hälfte easy, zweite Hälfte stark"
- Nach km 7: Mantras ("Ein Schritt nach dem anderen")

<div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl border border-purple-200 dark:border-purple-700 my-6">
  <h4 className="font-bold text-purple-800 dark:text-purple-200 mb-4">🎯 Praktische Übung</h4>
  <p className="text-sm text-purple-700 dark:text-purple-300">
    Simuliere die 10K-Strategie: Laufe 10 km im Trainings-Tempo (ersten 3 km langsam, mittlere 4 km steady, letzte 3 km push). Analysiere Splits.
  </p>
</div>

**Häufige Fehler:**
- ❌ Gleichmäßiges Tempo von Anfang (verliert Energie)
- ❌ Zu wenig Long Runs (fehlende Ausdauer)
- ❌ Keine Ernährungstest (Gels im Rennen floppen)

<div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-xl border border-red-200 dark:border-red-700 my-6">
  <h4 className="font-bold text-red-800 dark:text-red-200 mb-4">⚠️ Warnung</h4>
  <p className="text-sm text-red-700 dark:text-red-300">
  10K ist anspruchsvoller – bei Schmerzen pausieren! Integriere Erholung, um Überlastung zu vermeiden. Deine Gesundheit geht vor.
  </p>
</div>

---
### Zusammenfassung

**10K Trainingsplan:**
- ✅ 10 Wochen: 4-5 Läufe/Woche, 21-34 km Volumen
- ✅ Long Run bis 13 km, Intervalle 800m-1.6 km
- ✅ Strategie: Kontrollierter Start, starker Finish
- ✅ Fokus: Ausdauersteigerung, Tempo-Variation
- ✅ Nach dem Plan: Du bist Halbmarathon-ready!

**Merke dir:** 10K testet deine Disziplin. Bleib konsistent – der Erfolg kommt mit der Zeit!
    `,
    en: `
### 10K Training Plan: The Next Level of Endurance! 🏃‍♂️

10K (10 kilometers) is the logical progression from 5K. It demands more mental and physical endurance, but with this 10-week plan, you'll be ready. From 5 km to 10 km – double the distance, double the pride!

---
### From 5K to 10K: The Challenge

**What Makes 10K Special?**
- Increased endurance (more long runs)
- Tempo variation becomes crucial (not just easy runs)
- Mental strength: Learn to endure longer
- Distance: 10 km = about 45-60 min (depending on pace)

**Prerequisites:**
- Completed 5K plan or can comfortably run 5 km
- Base endurance from Phase 1-2
- Focus: Higher volume (4-5x per week), longer long runs (12-15 km)

**Benefits:**
- ✅ Stronger aerobic base for half marathon
- ✅ More events (10K races worldwide)
- ✅ Balance between speed and endurance

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border border-green-200 dark:border-green-700 my-6">
  <h4 className="font-bold text-green-800 dark:text-green-200 mb-4">💡 Your Start</h4>
  <p className="text-sm text-green-700 dark:text-green-300">
    Can you run 5 km in 25-30 min? Great! If not, repeat the 5K plan. Goal: Complete 10K with controlled pace.
  </p>
</div>

---
### Training Structure: 4-5x Per Week

**Core Principles:**
- 4-5 runs per week (rest days between hard sessions!)
- Long run: 12-15 km (weekly increase)
- Interval training: 800m-1600m repeats (speed)
- Strictly follow 10% rule
- Strength/cross: 2x per week (hips, core)

**Weekly Structure (Example):**
- Monday: Easy run or cross-training
- Tuesday: Interval training
- Wednesday: Rest
- Thursday: Tempo run
- Friday: Easy run or rest
- Saturday: Long run
- Sunday: Recovery run (very easy)

<div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-700 my-6">
  <h4 className="font-bold text-blue-800 dark:text-blue-200 mb-4">💡 Variation</h4>
  <p className="text-sm text-blue-700 dark:text-blue-300">
    Not every day the same! 70% easy, 20% tempo/intervals, 10% long run. This prevents overload and builds balance.
  </p>
</div>

**10-Week 10K Plan (Overview):**

<table className="w-full border-collapse my-6">
  <thead>
    <tr className="bg-gray-100 dark:bg-gray-800">
      <th className="border p-3 text-left">Week</th>
      <th className="border p-3 text-left">Easy Runs (x2-3)</th>
      <th className="border p-3 text-left">Tempo/Intervals</th>
      <th className="border p-3 text-left">Long Run</th>
      <th className="border p-3 text-left">Total km</th>
      <th className="border p-3 text-left">Focus</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td className="border p-3"><strong>1</strong></td>
      <td className="border p-3">5 km, 5 km, 4 km</td>
      <td className="border p-3">4x 800m tempo / 2 min recovery</td>
      <td className="border p-3">7 km</td>
      <td className="border p-3">21 km</td>
      <td className="border p-3">Transition from 5K</td>
    </tr>
    <tr>
      <td className="border p-3"><strong>2</strong></td>
      <td className="border p-3">5 km, 5.5 km, 4.5 km</td>
      <td className="border p-3">5x 800m tempo / 2 min recovery</td>
      <td className="border p-3">8 km</td>
      <td className="border p-3">23 km</td>
      <td className="border p-3">Increase</td>
    </tr>
    <tr>
      <td className="border p-3"><strong>3</strong></td>
      <td className="border p-3">5.5 km, 6 km, 5 km</td>
      <td className="border p-3">3x 1.6 km tempo / 3 min recovery</td>
      <td className="border p-3">9 km</td>
      <td className="border p-3">25.5 km</td>
      <td className="border p-3">Interval focus</td>
    </tr>
    <tr>
      <td className="border p-3"><strong>4</strong></td>
      <td className="border p-3">6 km, 6 km, 5 km</td>
      <td className="border p-3">Rest week: Light tempo</td>
      <td className="border p-3">9 km</td>
      <td className="border p-3">26 km</td>
      <td className="border p-3">Recovery</td>
    </tr>
    <tr>
      <td className="border p-3"><strong>5</strong></td>
      <td className="border p-3">6 km, 6.5 km, 5.5 km</td>
      <td className="border p-3">6x 800m tempo / 2.5 min recovery</td>
      <td className="border p-3">10 km</td>
      <td className="border p-3">28.5 km</td>
      <td className="border p-3">Speed</td>
    </tr>
    <tr>
      <td className="border p-3"><strong>6</strong></td>
      <td className="border p-3">6.5 km, 7 km, 6 km</td>
      <td className="border p-3">25 min continuous tempo</td>
      <td className="border p-3">11 km</td>
      <td className="border p-3">30.5 km</td>
      <td className="border p-3">Tempo endurance</td>
    </tr>
    <tr>
      <td className="border p-3"><strong>7</strong></td>
      <td className="border p-3">7 km, 7 km, 6.5 km</td>
      <td className="border p-3">4x 1.6 km tempo / 3 min recovery</td>
      <td className="border p-3">12 km</td>
      <td className="border p-3">32.5 km</td>
      <td className="border p-3">Peak volume</td>
    </tr>
    <tr>
      <td className="border p-3"><strong>8</strong></td>
      <td className="border p-3">6 km, 6 km, 5 km</td>
      <td className="border p-3">Rest week: Light intervals</td>
      <td className="border p-3">12 km</td>
      <td className="border p-3">29 km</td>
      <td className="border p-3">Recovery before peak</td>
    </tr>
    <tr>
      <td className="border p-3"><strong>9</strong></td>
      <td className="border p-3">7 km, 7.5 km, 6.5 km</td>
      <td className="border p-3">5 km tempo run</td>
      <td className="border p-3">13 km</td>
      <td className="border p-3">34 km</td>
      <td className="border p-3">Final increase</td>
    </tr>
    <tr>
      <td className="border p-3"><strong>10</strong></td>
      <td className="border p-3">5 km easy, 4 km easy</td>
      <td className="border p-3">Race week: Light + strides</td>
      <td className="border p-3">Race: 10K!</td>
      <td className="border p-3">19 km</td>
      <td className="border p-3">Taper & race</td>
    </tr>
  </tbody>
</table>

**Pace Guide:**
- Easy run: Conversational pace
- Tempo/intervals: 10K race pace (hard but controlled)
- Long run: Very slow (build endurance)

**Practical Exercise:** Start with week 1. Track progress and include 2x strength training. After week 5: Run a test 10K.

---
### 10K Race Strategy: Controlled Endurance

**Pacing Strategies:**
- **First 3 km:** Controlled (5-10 sec/km slower than goal pace)
- **Middle 4 km:** Hold pace (steady, breathe!)
- **Last 3 km:** Go all out (accelerate if possible)

**Race-Day Tips:**
- Carb-loading 2 days before (more carbs!)
- Gels at km 5 and 8 (with water)
- Mental phases: "First half easy, second half strong"
- After km 7: Mantras ("One step at a time")

<div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl border border-purple-200 dark:border-purple-700 my-6">
  <h4 className="font-bold text-purple-800 dark:text-purple-200 mb-4">🎯 Practical Exercise</h4>
  <p className="text-sm text-purple-700 dark:text-purple-300">
    Simulate 10K strategy: Run 10 km in training pace (first 3 km slow, middle 4 km steady, last 3 km push). Analyze splits.
  </p>
</div>

**Common Mistakes:**
- ❌ Even pace from start (loses energy)
- ❌ Too few long runs (lacks endurance)
- ❌ No nutrition test (gels flop on race day)

<div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-xl border border-red-200 dark:border-red-700 my-6">
  <h4 className="font-bold text-red-800 dark:text-red-200 mb-4">⚠️ Warning</h4>
  <p className="text-sm text-red-700 dark:text-red-300">
    10K is more demanding – pause at pain! Include recovery to avoid overload. Your health comes first.
  </p>
</div>

---
### Summary

**10K Training Plan:**
- ✅ 10 weeks: 4-5 runs/week, 21-34 km volume
- ✅ Long run up to 13 km, intervals 800m-1.6 km
- ✅ Strategy: Controlled start, strong finish
- ✅ Focus: Endurance increase, tempo variation
- ✅ After plan: You're half marathon-ready!

**Remember:** 10K tests your discipline. Stay consistent – success comes with time!
    `
  },

  task: {
    de: {
      title: '10K-Plan implementieren',
      description: 'Starte den 10-Wochen-Plan und baue systematisch auf.',
      checklist: [
        { text: 'Voraussetzung prüfen: Kannst du 5 km komfortabel laufen?' },
        { text: 'Woche 1: 3x Easy, 1x Intervalle, 1x Long Run (7 km)' },
        { text: 'Tracke Volumen: Ziel 21-34 km/Woche' },
        { text: 'Integriere 2x Kraft/Cross pro Woche' },
        { text: 'Nach Woche 5: Test-10K durchführen und analysieren' },
        { text: 'Race anmelden und Strategie üben (z.B. Gels testen)' }
      ]
    },
    en: {
      title: 'Implement 10K Plan',
      description: 'Start the 10-week plan and build systematically.',
      checklist: [
        { text: 'Check prerequisite: Can you comfortably run 5 km?' },
        { text: 'Week 1: 3x easy, 1x intervals, 1x long run (7 km)' },
        { text: 'Track volume: Goal 21-34 km/week' },
        { text: 'Include 2x strength/cross per week' },
        { text: 'After week 5: Do test 10K and analyze' },
        { text: 'Sign up for race and practice strategy (e.g., test gels)' }
      ]
    }
  },

  notes: {
    de: [
      {
        front: 'Wie viele Läufe im 10K-Plan?',
        back: '4-5 Läufe pro Woche. Long Run bis 13 km, Intervalle 800m-1.6 km. 10%-Regel für Steigerung.'
      },
      {
        front: '10K-Pacing-Strategie?',
        back: 'Erste 3 km kontrolliert, mittlere 4 km steady, letzte 3 km push. Gels bei km 5+8.'
      },
      {
        front: 'Warum mehr Long Runs?',
        back: 'Baut Ausdauer für die doppelte Distanz. Sehr langsam laufen, Fokus auf Zeit auf den Beinen.'
      }
    ],
    en: [
      {
        front: 'How many runs in 10K plan?',
        back: '4-5 runs per week. Long run up to 13 km, intervals 800m-1.6 km. 10% rule for progression.'
      },
      {
        front: '10K pacing strategy?',
        back: 'First 3 km controlled, middle 4 km steady, last 3 km push. Gels at km 5+8.'
      },
      {
        front: 'Why more long runs?',
        back: 'Builds endurance for double distance. Run very slow, focus on time on feet.'
      }
    ]
  }
};

