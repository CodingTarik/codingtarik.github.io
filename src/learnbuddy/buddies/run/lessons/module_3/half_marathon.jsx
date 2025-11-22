import React from 'react';

export const halfMarathonLesson = {
  id: 'r3_m3_half_marathon',
  title: { 
    en: '3.3 Half Marathon Preparation (21.1 km)', 
    de: '3.3 Halbmarathon Vorbereitung (21,1 km)' 
  },
  description: { 
    en: 'Prepare for the half marathon with a 16-week plan emphasizing long runs up to 20 km, threshold training, and race-day nutrition strategy.', 
    de: 'Bereite dich auf den Halbmarathon mit einem 16-wöchigen Plan vor, der Long Runs bis 20 km, Threshold-Training und Race-Day-Ernährungsstrategie betont.' 
  },
  category: 'specialization',
  
  content: {
    de: `
### Halbmarathon Vorbereitung: Die große Herausforderung! 🏅

Der Halbmarathon (21,1 km) ist eine der beliebtesten Distanzen – anspruchsvoll, aber machbar. Dieser 16-Wochen-Plan baut auf 10K auf und macht dich fit für die Distanz. Doppelte 10K, aber mit smarter Strategie!

---
### Die Herausforderung des Halbmarathons

**Was macht 21,1 km besonders?**
- Doppelte Distanz von 10K (ca. 1,5-2,5 Stunden)
- Mentale & körperliche Ausdauer gefordert
- 12-16 Wochen Vorbereitung (je nach Basis)
- Wöchentliches Volumen: 40-60 km

**Voraussetzungen:**
- Du kannst 10 km komfortabel laufen (aus Phase 3.2)
- Starke Basis-Ausdauer (Phase 1-2)
- Fokus: Long Runs bis 20-22 km (nicht die volle Distanz!), Tempo Runs 8-12 km

**Vorteile:**
- ✅ Perfekter Schritt zum Marathon
- ✅ Viele Events (Halbmarathon-Rennen)
- ✅ Mentale Stärke und Ausdauer boosten

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border border-green-200 dark:border-green-700 my-6">
  <h4 className="font-bold text-green-800 dark:text-green-200 mb-4">💡 Realistische Erwartung</h4>
  <p className="text-sm text-green-700 dark:text-green-300">
    Long Runs nie über 20-22 km trainieren (Risiko vs. Nutzen!). Der Rest kommt aus Ausdauer und Mentalem. Ziel: Finishen, nicht PB jagen.
  </p>
</div>

---
### Trainingsstruktur: 4-6x pro Woche

**Grundprinzipien:**
- 4-6 Läufe pro Woche (Ruhetage essenziell!)
- Long Run: Bis 20-22 km (sehr langsam)
- Wöchentliches Volumen: 40-60 km (Peak: 60 km)
- Tempo Runs: 8-12 km "Comfortably Hard"
- Intervall/Threshold: VO2max und Laktatschwelle
- Kraft/Cross: 2x pro Woche (Core, Hüfte)

**Wöchentliche Struktur (Beispiel):**
- Montag: Easy Run oder Cross
- Dienstag: Intervall/Threshold
- Mittwoch: Ruhetag
- Donnerstag: Tempo Run
- Freitag: Easy Run
- Samstag: Long Run
- Sonntag: Recovery Run oder Ruhetag

<div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-700 my-6">
  <h4 className="font-bold text-blue-800 dark:text-blue-200 mb-4">💡 Balance</h4>
  <p className="text-sm text-blue-700 dark:text-blue-300">
    80% Easy Runs, 20% intensive Einheiten. Integriere Restwochen alle 4 Wochen (70% Volumen). Regeneration ist Schlüssel!
  </p>
</div>

**16-Wochen-Halbmarathon-Plan (Übersicht – gekürzt für Lektion):**

<table className="w-full border-collapse my-6">
  <thead>
    <tr className="bg-gray-100 dark:bg-gray-800">
      <th className="border p-3 text-left">Woche</th>
      <th className="border p-3 text-left">Easy Runs (x3)</th>
      <th className="border p-3 text-left">Tempo/Threshold</th>
      <th className="border p-3 text-left">Long Run</th>
      <th className="border p-3 text-left">Gesamt km</th>
      <th className="border p-3 text-left">Fokus</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td className="border p-3"><strong>1-4</strong></td>
      <td className="border p-3">6-8 km</td>
      <td className="border p-3">6-8 km Tempo</td>
      <td className="border p-3">10-12 km</td>
      <td className="border p-3">30-40 km</td>
      <td className="border p-3">Basis-Ausdauer</td>
    </tr>
    <tr>
      <td className="border p-3"><strong>5-8</strong></td>
      <td className="border p-3">8-10 km</td>
      <td className="border p-3">8-10 km Threshold</td>
      <td className="border p-3">14-16 km</td>
      <td className="border p-3">45-50 km</td>
      <td className="border p-3">Steigerung + Restwoche</td>
    </tr>
    <tr>
      <td className="border p-3"><strong>9-12</strong></td>
      <td className="border p-3">10-12 km</td>
      <td className="border p-3">10-12 km Tempo</td>
      <td className="border p-3">18-20 km</td>
      <td className="border p-3">55-60 km</td>
      <td className="border p-3">Peak + Intervall</td>
    </tr>
    <tr>
      <td className="border p-3"><strong>13-15</strong></td>
      <td className="border p-3">8-10 km</td>
      <td className="border p-3">8 km leicht</td>
      <td className="border p-3">16-18 km</td>
      <td className="border p-3">40-50 km</td>
      <td className="border p-3">Taper</td>
    </tr>
    <tr>
      <td className="border p-3"><strong>16</strong></td>
      <td className="border p-3">5 km easy</td>
      <td className="border p-3">Strides</td>
      <td className="border p-3">Rennen: 21,1 km!</td>
      <td className="border p-3">15 km</td>
      <td className="border p-3">Race Week</td>
    </tr>
  </tbody>
</table>

**Tempo-Anleitung:**
- Easy Run: Konversationstempo
- Tempo/Threshold: "Comfortably Hard" (Halbmarathon-Pace)
- Long Run: Sehr langsam (ca. 30-60 Sek/km langsamer)

**Praktische Übung:** Folge den ersten 4 Wochen. Tracke Volumen und integriere Ernährungstests (Gels bei Long Runs >90 Min).

---
### Halbmarathon-Strategie: Pacing & Ernährung

**Pacing-Strategien:**
- **Erste Hälfte (10,5 km):** Konservativ (5-10 Sek/km langsamer als Zieltempo)
- **Zweite Hälfte:** Tempo halten oder leicht beschleunigen
- Negative Splits ideal (aber realistisch bleiben)

**Race-Day-Ernährung:**
- Frühstück: 3-4 Std. vorher (Carbs + wenig Fett)
- Gels: Bei km 7, 14 (mit Wasser, alle 45 Min)
- Hydration: Alle 15-20 Min kleine Schlucke (Sportgetränk bei Schweiß)
- Carb-Loading: 2-3 Tage vorher

<div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl border border-purple-200 dark:border-purple-700 my-6">
  <h4 className="font-bold text-purple-800 dark:text-purple-200 mb-4">🎯 Praktische Übung</h4>
  <p className="text-sm text-purple-700 dark:text-purple-300">
    Simuliere Race-Ernährung bei einem 20-km-Long Run: Gels bei "km 7" und "km 14", trinke regelmäßig. Notiere: Energielevel? Magen?
  </p>
</div>

**Mentale Strategie:**
- Teile in Abschnitte: "Nur bis km 10", dann "Halb geschafft!"
- Mantras: "Stark und steady", "Ich bin vorbereitet"

**Häufige Fehler:**
- ❌ Zu aggressives Pacing (Wand bei km 15)
- ❌ Keine Taper (erschöpft am Start)
- ❌ Ungetestete Gels (Magenprobleme)

<div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-xl border border-red-200 dark:border-red-700 my-6">
  <h4 className="font-bold text-red-800 dark:text-red-200 mb-4">⚠️ Warnung</h4>
  <p className="text-sm text-red-700 dark:text-red-300">
    Halbmarathon ist ernst – bei Verletzungen stoppen! Integriere medizinische Checks und höre auf deinen Körper.
  </p>
</div>

---
### Zusammenfassung

**Halbmarathon Vorbereitung:**
- ✅ 16 Wochen: 4-6 Läufe/Woche, 40-60 km Volumen
- ✅ Long Run bis 20-22 km, Tempo 8-12 km
- ✅ Strategie: Konservativer Start, Gels bei km 7/14
- ✅ Fokus: Ausdauer, Threshold, Ernährung
- ✅ Nach dem Plan: Marathon next? Du schaffst das!

**Merke dir:** Halbmarathon ist mentale Disziplin. Trainiere smart, erhole richtig – der Finish ist magisch!
    `,
    en: `
### Half Marathon Preparation: The Big Challenge! 🏅

The half marathon (21.1 km) is one of the most popular distances – demanding but achievable. This 16-week plan builds on 10K and gets you race-ready. Double the 10K, but with smart strategy!

---
### The Half Marathon Challenge

**What Makes 21.1 km Special?**
- Double the 10K distance (about 1.5-2.5 hours)
- Demands mental & physical endurance
- 12-16 weeks preparation (depending on base)
- Weekly volume: 40-60 km

**Prerequisites:**
- Can comfortably run 10 km (from Phase 3.2)
- Strong base endurance (Phase 1-2)
- Focus: Long runs up to 20-22 km (not full distance!), tempo runs 8-12 km

**Benefits:**
- ✅ Perfect step to marathon
- ✅ Many events (half marathon races)
- ✅ Boosts mental strength and endurance

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border border-green-200 dark:border-green-700 my-6">
  <h4 className="font-bold text-green-800 dark:text-green-200 mb-4">💡 Realistic Expectation</h4>
  <p className="text-sm text-green-700 dark:text-green-300">
    Never train long runs over 20-22 km (risk vs. benefit!). The rest comes from endurance and mental prep. Goal: Finish, not PB chase.
  </p>
</div>

---
### Training Structure: 4-6x Per Week

**Core Principles:**
- 4-6 runs per week (rest days essential!)
- Long run: Up to 20-22 km (very slow)
- Weekly volume: 40-60 km (peak: 60 km)
- Tempo runs: 8-12 km "comfortably hard"
- Interval/threshold: VO2max and lactate threshold
- Strength/cross: 2x per week (core, hips)

**Weekly Structure (Example):**
- Monday: Easy run or cross
- Tuesday: Interval/threshold
- Wednesday: Rest
- Thursday: Tempo run
- Friday: Easy run
- Saturday: Long run
- Sunday: Recovery run or rest

<div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-700 my-6">
  <h4 className="font-bold text-blue-800 dark:text-blue-200 mb-4">💡 Balance</h4>
  <p className="text-sm text-blue-700 dark:text-blue-300">
    80% easy runs, 20% intense sessions. Include rest weeks every 4 weeks (70% volume). Recovery is key!
  </p>
</div>

**16-Week Half Marathon Plan (Overview – condensed for lesson):**

<table className="w-full border-collapse my-6">
  <thead>
    <tr className="bg-gray-100 dark:bg-gray-800">
      <th className="border p-3 text-left">Week</th>
      <th className="border p-3 text-left">Easy Runs (x3)</th>
      <th className="border p-3 text-left">Tempo/Threshold</th>
      <th className="border p-3 text-left">Long Run</th>
      <th className="border p-3 text-left">Total km</th>
      <th className="border p-3 text-left">Focus</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td className="border p-3"><strong>1-4</strong></td>
      <td className="border p-3">6-8 km</td>
      <td className="border p-3">6-8 km tempo</td>
      <td className="border p-3">10-12 km</td>
      <td className="border p-3">30-40 km</td>
      <td className="border p-3">Base endurance</td>
    </tr>
    <tr>
      <td className="border p-3"><strong>5-8</strong></td>
      <td className="border p-3">8-10 km</td>
      <td className="border p-3">8-10 km threshold</td>
      <td className="border p-3">14-16 km</td>
      <td className="border p-3">45-50 km</td>
      <td className="border p-3">Build + rest week</td>
    </tr>
    <tr>
      <td className="border p-3"><strong>9-12</strong></td>
      <td className="border p-3">10-12 km</td>
      <td className="border p-3">10-12 km tempo</td>
      <td className="border p-3">18-20 km</td>
      <td className="border p-3">55-60 km</td>
      <td className="border p-3">Peak + intervals</td>
    </tr>
    <tr>
      <td className="border p-3"><strong>13-15</strong></td>
      <td className="border p-3">8-10 km</td>
      <td className="border p-3">8 km light</td>
      <td className="border p-3">16-18 km</td>
      <td className="border p-3">40-50 km</td>
      <td className="border p-3">Taper</td>
    </tr>
    <tr>
      <td className="border p-3"><strong>16</strong></td>
      <td className="border p-3">5 km easy</td>
      <td className="border p-3">Strides</td>
      <td className="border p-3">Race: 21.1 km!</td>
      <td className="border p-3">15 km</td>
      <td className="border p-3">Race week</td>
    </tr>
  </tbody>
</table>

**Pace Guide:**
- Easy run: Conversational pace
- Tempo/threshold: "Comfortably hard" (half marathon pace)
- Long run: Very slow (30-60 sec/km slower)

**Practical Exercise:** Follow the first 4 weeks. Track volume and test nutrition (gels on long runs >90 min).

---
### Half Marathon Strategy: Pacing & Nutrition

**Pacing Strategies:**
- **First Half (10.5 km):** Conservative (5-10 sec/km slower than goal pace)
- **Second Half:** Hold pace or slightly accelerate
- Negative splits ideal (but realistic)

**Race-Day Nutrition:**
- Breakfast: 3-4 hours before (carbs + low fat)
- Gels: At km 7, 14 (with water, every 45 min)
- Hydration: Small sips every 15-20 min (sports drink if sweating)
- Carb-loading: 2-3 days before

<div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl border border-purple-200 dark:border-purple-700 my-6">
  <h4 className="font-bold text-purple-800 dark:text-purple-200 mb-4">🎯 Practical Exercise</h4>
  <p className="text-sm text-purple-700 dark:text-purple-300">
    Simulate race nutrition on a 20-km long run: Gels at "km 7" and "km 14", drink regularly. Note: Energy levels? Stomach?
  </p>
</div>

**Mental Strategy:**
- Break into sections: "Just to km 10", then "Halfway!"
- Mantras: "Strong and steady", "I'm prepared"

**Common Mistakes:**
- ❌ Aggressive pacing (wall at km 15)
- ❌ No taper (exhausted at start)
- ❌ Untested gels (stomach issues)

<div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-xl border border-red-200 dark:border-red-700 my-6">
  <h4 className="font-bold text-red-800 dark:text-red-200 mb-4">⚠️ Warning</h4>
  <p className="text-sm text-red-700 dark:text-red-300">
    Half marathon is serious – stop at injuries! Include medical checks and listen to your body.
  </p>
</div>

---
### Summary

**Half Marathon Preparation:**
- ✅ 16 weeks: 4-6 runs/week, 40-60 km volume
- ✅ Long run up to 20-22 km, tempo 8-12 km
- ✅ Strategy: Conservative start, gels at km 7/14
- ✅ Focus: Endurance, threshold, nutrition
- ✅ After plan: Marathon next? You got this!

**Remember:** Half marathon is mental discipline. Train smart, recover right – the finish is magical!
    `
  },

  task: {
    de: {
      title: 'Halbmarathon-Plan starten',
      description: 'Beginne den 16-Wochen-Plan mit Fokus auf Long Runs und Ernährung.',
      checklist: [
        { text: 'Voraussetzung: 10 km komfortabel laufen können?' },
        { text: 'Wochen 1-4: 3x Easy (6-8 km), 1x Tempo, 1x Long Run (10-12 km)' },
        { text: 'Volumen tracken: Aufbau zu 40-60 km/Woche' },
        { text: '2x Kraft/Cross einbauen (Core, Hüfte)' },
        { text: 'Bei Long Run >90 Min: Race-Ernährung testen (Gels, Hydration)' },
        { text: 'Nach Woche 8: 18-km-Test-Long Run mit Strategie' }
      ]
    },
    en: {
      title: 'Start Half Marathon Plan',
      description: 'Begin the 16-week plan focusing on long runs and nutrition.',
      checklist: [
        { text: 'Prerequisite: Can run 10 km comfortably?' },
        { text: 'Weeks 1-4: 3x easy (6-8 km), 1x tempo, 1x long run (10-12 km)' },
        { text: 'Track volume: Build to 40-60 km/week' },
        { text: 'Include 2x strength/cross (core, hips)' },
        { text: 'On long runs >90 min: Test race nutrition (gels, hydration)' },
        { text: 'After week 8: 18-km test long run with strategy' }
      ]
    }
  },

  notes: {
    de: [
      {
        front: 'Warum Long Runs bis 20-22 km?',
        back: 'Baut Ausdauer ohne Überlastung. Nie die volle Distanz trainieren – Risiko zu hoch. Sehr langsam laufen.'
      },
      {
        front: 'Halbmarathon-Pacing?',
        back: 'Erste Hälfte konservativ (langsamer), zweite Hälfte steady. Negative Splits ideal.'
      },
      {
        front: 'Race-Ernährung?',
        back: 'Gels bei km 7/14, regelmäßige Hydration. Carb-Loading 2-3 Tage vorher. Alles im Training testen!'
      }
    ],
    en: [
      {
        front: 'Why long runs up to 20-22 km?',
        back: 'Builds endurance without overload. Never train full distance – too risky. Run very slow.'
      },
      {
        front: 'Half marathon pacing?',
        back: 'First half conservative (slower), second half steady. Negative splits ideal.'
      },
      {
        front: 'Race nutrition?',
        back: 'Gels at km 7/14, regular hydration. Carb-loading 2-3 days before. Test everything in training!'
      }
    ]
  }
};
