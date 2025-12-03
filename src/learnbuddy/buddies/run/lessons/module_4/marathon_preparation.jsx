import React from 'react';

export const marathonPreparationLesson = {
  id: 'r4_m1_marathon_preparation',
  title: { 
    en: '4.1 Marathon Preparation (42.2 km)', 
    de: '4.1 Marathon Vorbereitung (42,2 km)' 
  },
  description: { 
    en: 'Gear up for the ultimate challenge with an 18-week marathon plan, focusing on high volume, long runs up to 32 km, and mental strategies to beat the wall.', 
    de: 'Rüste dich für die ultimative Herausforderung mit einem 18-wöchigen Marathon-Plan, der hohes Volumen, Long Runs bis 32 km und mentale Strategien gegen die Wand betont.' 
  },
  category: 'marathon',
  
  content: {
    de: `
### Marathon Vorbereitung: Die ultimative Reise! 🏆

Der Marathon (42,2 km) ist der Heilige Gral des Laufens – 16-20 Wochen harte Arbeit, unendlicher Stolz. Dieser Plan baut auf Halbmarathon auf und macht dich bereit. Respekt vor der Distanz, smarte Strategie!

---
### Die ultimative Herausforderung

**Was macht den Marathon besonders?**
- 16-20 Wochen Vorbereitung (Respekt!)
- Mentale Vorbereitung = körperliche (mehr als bei Halb)
- Wöchentliches Volumen: 50-80 km (Peak: 80-100 km)
- Long Run: Bis 32-35 km (nicht mehr – Risiko!)
- Die "Wand" (km 30-35): Glykogen leer, Fettverbrennung

**Voraussetzungen:**
- Halbmarathon abgeschlossen (Phase 3.3)
- Starke Basis (Phase 1-3)
- Fokus: Volumen aufbauen, Tapering, Ernährung

**Vorteile:**
- ✅ Lebensverändernd (mentale Stärke)
- ✅ Viele Majors (Berlin, New York)
- ✅ Basis für Ultras

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border border-green-200 dark:border-green-700 my-6">
  <h4 className="font-bold text-green-800 dark:text-green-200 mb-4">💡 Realismus</h4>
  <p className="text-sm text-green-700 dark:text-green-300">
    Long Runs nie über 32-35 km (Risiko > Nutzen). Der Rest kommt aus Training, Ernährung und Mental. Ziel: Finishen!
  </p>
</div>

---
### Trainingsstruktur: 5-6x pro Woche

**Grundprinzipien:**
- 5-6 Läufe/Woche (Ruhetage heilig!)
- Volumen: 50-80 km (langsam steigern, 10%-Regel)
- Long Run: 1x/Woche, sehr langsam (Zone 2)
- Peak Week: 80-100 km (dann Taper)
- Variation: Easy (80%), Tempo/Intervalle (20%)

**Wöchentliche Struktur (Beispiel):**
- Montag: Easy oder Cross
- Dienstag: Tempo/Threshold
- Mittwoch: Easy oder Ruhetag
- Donnerstag: Intervall
- Freitag: Easy
- Samstag: Long Run
- Sonntag: Recovery Easy

<div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-700 my-6">
  <h4 className="font-bold text-blue-800 dark:text-blue-200 mb-4">💡 Progression</h4>
  <p className="text-sm text-blue-700 dark:text-blue-300">
    10%-Regel strikt: Von 50 km auf max 55 km/Woche. Restwochen alle 3-4 Wochen (70% Volumen). Konsistenz > Intensität.
  </p>
</div>

**18-Wochen-Marathon-Plan (Übersicht – Phasen):**

<table className="w-full border-collapse my-6">
  <thead>
    <tr className="bg-gray-100 dark:bg-gray-800">
      <th className="border p-3 text-left">Phase</th>
      <th className="border p-3 text-left">Wochen</th>
      <th className="border p-3 text-left">Volumen</th>
      <th className="border p-3 text-left">Long Run</th>
      <th className="border p-3 text-left">Intensiv</th>
      <th className="border p-3 text-left">Fokus</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td className="border p-3"><strong>Basis</strong></td>
      <td className="border p-3">1-6</td>
      <td className="border p-3">50-60 km</td>
      <td className="border p-3">16-20 km</td>
      <td className="border p-3">Tempo 8 km</td>
      <td className="border p-3">Volumen aufbauen</td>
    </tr>
    <tr>
      <td className="border p-3"><strong>Aufbau</strong></td>
      <td className="border p-3">7-12</td>
      <td className="border p-3">60-70 km</td>
      <td className="border p-3">22-28 km</td>
      <td className="border p-3">Threshold 10-12 km</td>
      <td className="border p-3">Ausdauer + Speed</td>
    </tr>
    <tr>
      <td className="border p-3"><strong>Peak</strong></td>
      <td className="border p-3">13-15</td>
      <td className="border p-3">70-80 km</td>
      <td className="border p-3">30-32 km</td>
      <td className="border p-3">Marathon-Pace Runs</td>
      <td className="border p-3">Max Volumen</td>
    </tr>
    <tr>
      <td className="border p-3"><strong>Taper</strong></td>
      <td className="border p-3">16-17</td>
      <td className="border p-3">40-50 km</td>
      <td className="border p-3">16-20 km</td>
      <td className="border p-3">Leicht</td>
      <td className="border p-3">Regeneration</td>
    </tr>
    <tr>
      <td className="border p-3"><strong>Race</strong></td>
      <td className="border p-3">18</td>
      <td className="border p-3">15-20 km</td>
      <td className="border p-3">42,2 km!</td>
      <td className="border p-3">Strides</td>
      <td className="border p-3">Race Day</td>
    </tr>
  </tbody>
</table>

**Long Run-Tipps:**
- Sehr langsam (Zone 2, reden möglich)
- Mit Gels/Wasser (Race-Simulation)
- Mentale Übung: "Nur bis km 20" teilen

**Praktische Übung:** Plane 18 Wochen. Starte Woche 1: 50 km Volumen, Long Run 16 km. Tracke und passe an.

---
### Marathon-Strategie: Negative Splits & Die Wand

**Pacing:**
- **Erste 10 km:** Sehr konservativ (10-15 Sek/km langsamer)
- **Nächste 20 km:** Zieltempo halten
- **Letzte 12 km:** Durchhalten oder pushen
- Negative Splits: Zweite Hälfte schneller (ideal)

**Die Wand vermeiden:**
- Carb-Loading 3 Tage vorher
- Gels alle 45 Min (km 5,10,15,20,25,30,35)
- Hydration: Alle 15 Min (Elektrolyte!)
- Mentale: "Ich bin trainiert", Visualisierung

<div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl border border-purple-200 dark:border-purple-700 my-6">
  <h4 className="font-bold text-purple-800 dark:text-purple-200 mb-4">🎯 Praktische Übung</h4>
  <p className="text-sm text-purple-700 dark:text-purple-300">
    Simuliere bei 30-km-Long Run: Race-Pacing (erste 15 km langsam, nächste 15 steady). Mit Gels testen. Spüre "Wand"-Prävention?
  </p>
</div>

**Häufige Fehler:**
- ❌ Zu schnell starten → Wand früh
- ❌ Kein Taper → Erschöpft
- ❌ Ungetestete Ernährung → Crash

<div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-xl border border-red-200 dark:border-red-700 my-6">
  <h4 className="font-bold text-red-800 dark:text-red-200 mb-4">⚠️ Warnung</h4>
  <p className="text-sm text-red-700 dark:text-red-300">
    Marathon ist riskant! Bei Überlastung pausieren. Medizinische Checks, kein "durchlaufen". Dein Leben > Finish.
  </p>
</div>

---
### Zusammenfassung

**Marathon Vorbereitung:**
- ✅ 18 Wochen: 5-6 Läufe, 50-80 km Volumen
- ✅ Long Run bis 32 km (sehr langsam)
- ✅ Strategie: Negative Splits, Gels alle 45 Min
- ✅ Wand: Carb-Loading, Mental, Pacing
- ✅ Peak: 80-100 km, dann Taper

**Merke dir:** Marathon ist Marathon – Respekt, Plan, Passion. Du wirst ein neuer Mensch sein!
    `,
    en: `
### Marathon Preparation: The Ultimate Journey! 🏆

The marathon (42.2 km) is running's holy grail – 16-20 weeks of hard work, endless pride. This plan builds on half marathon and gets you ready. Respect the distance, smart strategy!

---
### The Ultimate Challenge

**What Makes Marathon Special?**
- 16-20 weeks prep (respect!)
- Mental prep = physical (more than half)
- Weekly volume: 50-80 km (peak: 80-100 km)
- Long run: Up to 32-35 km (no more – risk!)
- The "wall" (km 30-35): Glycogen empty, fat burning

**Prerequisites:**
- Half marathon completed (Phase 3.3)
- Strong base (Phase 1-3)
- Focus: Build volume, tapering, nutrition

**Benefits:**
- ✅ Life-changing (mental strength)
- ✅ Many majors (Berlin, New York)
- ✅ Base for ultras

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border border-green-200 dark:border-green-700 my-6">
  <h4 className="font-bold text-green-800 dark:text-green-200 mb-4">💡 Realism</h4>
  <p className="text-sm text-green-700 dark:text-green-300">
    Never train long runs over 32-35 km (risk > benefit). The rest from training, nutrition, mental. Goal: Finish!
  </p>
</div>

---
### Training Structure: 5-6x Per Week

**Core Principles:**
- 5-6 runs/week (rest days sacred!)
- Volume: 50-80 km (slow build, 10% rule)
- Long run: 1x/week, very slow (Zone 2)
- Peak week: 80-100 km (then taper)
- Variation: Easy (80%), tempo/intervals (20%)

**Weekly Structure (Example):**
- Monday: Easy or cross
- Tuesday: Tempo/threshold
- Wednesday: Easy or rest
- Thursday: Intervals
- Friday: Easy
- Saturday: Long run
- Sunday: Recovery easy

<div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-700 my-6">
  <h4 className="font-bold text-blue-800 dark:text-blue-200 mb-4">💡 Progression</h4>
  <p className="text-sm text-blue-700 dark:text-blue-300">
    Strict 10% rule: From 50 km to max 55 km/week. Rest weeks every 3-4 (70% volume). Consistency > intensity.
  </p>
</div>

**18-Week Marathon Plan (Overview – Phases):**

<table className="w-full border-collapse my-6">
  <thead>
    <tr className="bg-gray-100 dark:bg-gray-800">
      <th className="border p-3 text-left">Phase</th>
      <th className="border p-3 text-left">Weeks</th>
      <th className="border p-3 text-left">Volume</th>
      <th className="border p-3 text-left">Long Run</th>
      <th className="border p-3 text-left">Intense</th>
      <th className="border p-3 text-left">Focus</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td className="border p-3"><strong>Base</strong></td>
      <td className="border p-3">1-6</td>
      <td className="border p-3">50-60 km</td>
      <td className="border p-3">16-20 km</td>
      <td className="border p-3">Tempo 8 km</td>
      <td className="border p-3">Build volume</td>
    </tr>
    <tr>
      <td className="border p-3"><strong>Build</strong></td>
      <td className="border p-3">7-12</td>
      <td className="border p-3">60-70 km</td>
      <td className="border p-3">22-28 km</td>
      <td className="border p-3">Threshold 10-12 km</td>
      <td className="border p-3">Endurance + speed</td>
    </tr>
    <tr>
      <td className="border p-3"><strong>Peak</strong></td>
      <td className="border p-3">13-15</td>
      <td className="border p-3">70-80 km</td>
      <td className="border p-3">30-32 km</td>
      <td className="border p-3">Marathon pace runs</td>
      <td className="border p-3">Max volume</td>
    </tr>
    <tr>
      <td className="border p-3"><strong>Taper</strong></td>
      <td className="border p-3">16-17</td>
      <td className="border p-3">40-50 km</td>
      <td className="border p-3">16-20 km</td>
      <td className="border p-3">Light</td>
      <td className="border p-3">Recovery</td>
    </tr>
    <tr>
      <td className="border p-3"><strong>Race</strong></td>
      <td className="border p-3">18</td>
      <td className="border p-3">15-20 km</td>
      <td className="border p-3">42.2 km!</td>
      <td className="border p-3">Strides</td>
      <td className="border p-3">Race day</td>
    </tr>
  </tbody>
</table>

**Long Run Tips:**
- Very slow (Zone 2, can talk)
- With gels/water (race simulation)
- Mental: Break "just to km 20"

**Practical Exercise:** Plan 18 weeks. Start week 1: 50 km volume, long run 16 km. Track and adjust.

---
### Marathon Strategy: Negative Splits & The Wall

**Pacing:**
- **First 10 km:** Very conservative (10-15 sec/km slower)
- **Next 20 km:** Hold goal pace
- **Last 12 km:** Hang on or push
- Negative splits: Second half faster (ideal)

**Avoid the Wall:**
- Carb-loading 3 days before
- Gels every 45 min (km 5,10,15,20,25,30,35)
- Hydration: Every 15 min (electrolytes!)
- Mental: "I'm trained", visualization

<div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl border border-purple-200 dark:border-purple-700 my-6">
  <h4 className="font-bold text-purple-800 dark:text-purple-200 mb-4">🎯 Practical Exercise</h4>
  <p className="text-sm text-purple-700 dark:text-purple-300">
    Simulate on 30-km long run: Race pacing (first 15 km slow, next 15 steady). Test gels. Feel wall prevention?
  </p>
</div>

**Common Mistakes:**
- ❌ Start too fast → Early wall
- ❌ No taper → Exhausted
- ❌ Untested nutrition → Crash

<div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-xl border border-red-200 dark:border-red-700 my-6">
  <h4 className="font-bold text-red-800 dark:text-red-200 mb-4">⚠️ Warning</h4>
  <p className="text-sm text-red-700 dark:text-red-300">
    Marathon is risky! Pause at overload. Medical checks, no "pushing through". Your life > finish.
  </p>
</div>

---
### Summary

**Marathon Preparation:**
- ✅ 18 weeks: 5-6 runs, 50-80 km volume
- ✅ Long run up to 32 km (very slow)
- ✅ Strategy: Negative splits, gels every 45 min
- ✅ Wall: Carb-loading, mental, pacing
- ✅ Peak: 80-100 km, then taper

**Remember:** Marathon is marathon – respect, plan, passion. You'll be a new person!
    `
  },

  task: {
    de: {
      title: 'Marathon-Plan planen',
      description: 'Entwickle deinen 18-Wochen-Marathon-Plan.',
      checklist: [
        { text: 'Voraussetzung prüfen: Halbmarathon-Basis?' },
        { text: 'Phase 1-6: 50-60 km Volumen, Long Run 16-20 km' },
        { text: 'Volumen tracken: 10%-Regel, Restwochen einbauen' },
        { text: 'Long Run mit Gels simulieren (ab 20 km)' },
        { text: 'Mentale Übung: Visualisiere Race (täglich 5 Min)' },
        { text: 'Rennen anmelden (z.B. lokaler Marathon)' }
      ]
    },
    en: {
      title: 'Plan Marathon Training',
      description: 'Develop your 18-week marathon plan.',
      checklist: [
        { text: 'Check prerequisite: Half marathon base?' },
        { text: 'Phase 1-6: 50-60 km volume, long run 16-20 km' },
        { text: 'Track volume: 10% rule, include rest weeks' },
        { text: 'Simulate gels on long runs (from 20 km)' },
        { text: 'Mental exercise: Visualize race (5 min daily)' },
        { text: 'Sign up for race (e.g., local marathon)' }
      ]
    }
  },

  notes: {
    de: [
      {
        front: 'Warum Long Runs bis 32 km?',
        back: 'Baut Ausdauer, simuliert Race. Nie volle Distanz – Risiko hoch. Sehr langsam (Zone 2).'
      },
      {
        front: 'Marathon-Pacing?',
        back: 'Erste 10 km konservativ, nächste 20 steady, letzte 12 push. Negative Splits ideal.'
      },
      {
        front: 'Die Wand vermeiden?',
        back: 'Carb-Loading, Gels alle 45 Min, Hydration. Mentale Vorbereitung: Training + Visualisierung.'
      }
    ],
    en: [
      {
        front: 'Why long runs up to 32 km?',
        back: 'Builds endurance, simulates race. Never full distance – high risk. Very slow (Zone 2).'
      },
      {
        front: 'Marathon pacing?',
        back: 'First 10 km conservative, next 20 steady, last 12 push. Negative splits ideal.'
      },
      {
        front: 'Avoid the wall?',
        back: 'Carb-loading, gels every 45 min, hydration. Mental prep: Training + visualization.'
      }
    ]
  }
};

