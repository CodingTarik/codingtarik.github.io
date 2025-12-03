import React from 'react';

export const fiveKPlanLesson = {
  id: 'r3_m1_5k_plan',
  title: { 
    en: '3.1 5K Training Plan', 
    de: '3.1 5K Trainingsplan' 
  },
  description: { 
    en: 'Build endurance for your first 5K race with an 8-week structured plan, mixing easy runs, intervals, and long runs.', 
    de: 'Baue Ausdauer für dein erstes 5K-Rennen mit einem 8-wöchigen strukturierten Plan auf, der Easy Runs, Intervalle und Long Runs mischt.' 
  },
  category: 'specialization',
  
  content: {
    de: `
### 5K Trainingsplan: Dein erster Meilenstein! 🏁

5K (5 Kilometer) ist das perfekte Einstiegsrennen für Anfänger. Es ist machbar, motivierend und baut eine starke Basis auf. Dieser 8-Wochen-Plan führt dich vom Walk-Run zum sicheren 5K-Finish!

---
### Warum 5K als Ziel?

**Realistisches Ziel für Anfänger:**
- 8-12 Wochen Vorbereitung (je nach Startlevel)
- Fokus: Ausdauer aufbauen, Technik verfeinern
- Mentale Stärke: Dein erstes Rennen – unvergesslich!
- Distanz: 5 km = ca. 25-40 Min (je nach Tempo)

**Vorteile:**
- ✅ Kurze Vorbereitung, schnelle Erfolge
- ✅ Viele Events (Parkruns, Fun Runs)
- ✅ Basis für längere Distanzen (10K, Halbmarathon)

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border border-green-200 dark:border-green-700 my-6">
  <h4 className="font-bold text-green-800 dark:text-green-200 mb-4">💡 Dein Startpunkt</h4>
  <p className="text-sm text-green-700 dark:text-green-300">
    Kannst du schon 20-30 Min kontinuierlich laufen? Perfekt! Wenn nicht, wiederhole Phase 2. Ziel: 5K durchlaufen, nicht sprinten!
  </p>
</div>

---
### Die Trainingsstruktur: 3-4x pro Woche

**Grundprinzipien:**
- 3-4 Läufe pro Woche (Ruhetage dazwischen!)
- Mix: Easy Runs (80%), Tempo/Intervalle (20%)
- Long Run: 6-8 km (langsam steigern)
- 10%-Regel: Wöchentliche Steigerung max. 10%
- Cross-Training: 1x pro Woche (Yoga oder Radfahren)

**Wöchentliche Struktur (Beispiel):**
- Montag: Ruhetag
- Dienstag: Easy Run oder Intervalle
- Mittwoch: Ruhetag oder Cross
- Donnerstag: Easy Run
- Freitag: Ruhetag
- Samstag: Long Run
- Sonntag: Easy Run oder Ruhetag

<div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-700 my-6">
  <h4 className="font-bold text-blue-800 dark:text-blue-200 mb-4">💡 Progression</h4>
  <p className="text-sm text-blue-700 dark:text-blue-300">
    Starte langsam! Wenn Woche 1 zu schwer ist, wiederhole sie. Höre auf deinen Körper – Konsistenz vor Tempo.
  </p>
</div>

**8-Wochen-5K-Plan (Übersicht):**

<table className="w-full border-collapse my-6">
  <thead>
    <tr className="bg-gray-100 dark:bg-gray-800">
      <th className="border p-3 text-left">Woche</th>
      <th className="border p-3 text-left">Easy Runs (x2)</th>
      <th className="border p-3 text-left">Tempo/Intervalle</th>
      <th className="border p-3 text-left">Long Run</th>
      <th className="border p-3 text-left">Gesamt km</th>
      <th className="border p-3 text-left">Fokus</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td className="border p-3"><strong>1</strong></td>
      <td className="border p-3">3 km, 3 km</td>
      <td className="border p-3">4x 1 Min schnell / 2 Min langsam</td>
      <td className="border p-3">4 km</td>
      <td className="border p-3">10 km</td>
      <td className="border p-3">Basis aufbauen</td>
    </tr>
    <tr>
      <td className="border p-3"><strong>2</strong></td>
      <td className="border p-3">3 km, 3.5 km</td>
      <td className="border p-3">5x 1 Min schnell / 2 Min langsam</td>
      <td className="border p-3">4.5 km</td>
      <td className="border p-3">11 km</td>
      <td className="border p-3">Steigerung</td>
    </tr>
    <tr>
      <td className="border p-3"><strong>3</strong></td>
      <td className="border p-3">3.5 km, 4 km</td>
      <td className="border p-3">4x 2 Min Tempo / 2 Min Easy</td>
      <td className="border p-3">5 km</td>
      <td className="border p-3">12.5 km</td>
      <td className="border p-3">Tempo einführen</td>
    </tr>
    <tr>
      <td className="border p-3"><strong>4</strong></td>
      <td className="border p-3">4 km, 4 km</td>
      <td className="border p-3">Restwoche: Leichte Intervalle</td>
      <td className="border p-3">5 km</td>
      <td className="border p-3">13 km</td>
      <td className="border p-3">Erholung</td>
    </tr>
    <tr>
      <td className="border p-3"><strong>5</strong></td>
      <td className="border p-3">4 km, 4.5 km</td>
      <td className="border p-3">6x 400m Tempo / 2 Min Erholung</td>
      <td className="border p-3">6 km</td>
      <td className="border p-3">14.5 km</td>
      <td className="border p-3">Geschwindigkeit</td>
    </tr>
    <tr>
      <td className="border p-3"><strong>6</strong></td>
      <td className="border p-3">4.5 km, 5 km</td>
      <td className="border p-3">20 Min kontinuierlich Tempo</td>
      <td className="border p-3">7 km</td>
      <td className="border p-3">16.5 km</td>
      <td className="border p-3">Ausdauer</td>
    </tr>
    <tr>
      <td className="border p-3"><strong>7</strong></td>
      <td className="border p-3">5 km, 5 km</td>
      <td className="border p-3">3 km Tempo Run</td>
      <td className="border p-3">8 km</td>
      <td className="border p-3">18 km</td>
      <td className="border p-3">Peak</td>
    </tr>
    <tr>
      <td className="border p-3"><strong>8</strong></td>
      <td className="border p-3">3 km easy, 2 km easy</td>
      <td className="border p-3">Race Week: Leicht + Strides</td>
      <td className="border p-3">Rennen: 5K!</td>
      <td className="border p-3">10 km</td>
      <td className="border p-3">Taper & Race</td>
    </tr>
  </tbody>
</table>

**Tempo-Anleitung:**
- Easy Run: Konversationstempo (reden möglich)
- Tempo/Intervalle: "Comfortably Hard" (kurze Sätze möglich)
- Long Run: Noch langsamer als Easy (Ausdauer!)

**Praktische Übung:** Folge Woche 1 des Plans. Tracke alle Läufe (Distanz, Tempo, Gefühl). Passe bei Bedarf an (z.B. mehr Walk-Phasen).

---
### 5K Race-Strategie: Intelligentes Rennen

**Pacing-Strategien:**
- **Negative Splits:** Zweite Hälfte schneller (ideal für Anfänger)
  - Erste 2.5 km: Konservativ (10-15 Sek/km langsamer)
  - Letzte 2.5 km: Beschleunigen, wenn Kräfte da
- **Gleichmäßiges Tempo:** Konstante Pace halten (für Erfahrene)

**Race-Day-Tipps:**
- Starte nicht zu schnell! (Häufigster Fehler)
- Hydration: Kleine Schlucke bei Bedarf
- Mentale Tricks: "Nur bis km 3", dann "Einatmen, ausatmen"
- Nach dem Rennen: Stolz sein – du hast es geschafft!

<div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl border border-purple-200 dark:border-purple-700 my-6">
  <h4 className="font-bold text-purple-800 dark:text-purple-200 mb-4">🎯 Praktische Übung</h4>
  <p className="text-sm text-purple-700 dark:text-purple-300">
    Lauf einen Test-5K (nicht im Rennen!). Analysiere dein Tempo pro Kilometer. Übe negative Splits: Starte langsam, ende stark.
  </p>
</div>

**Häufige Fehler:**
- ❌ Zu schnell starten → Wand bei km 3
- ❌ Kein Taper → Müde am Renntag
- ❌ Ernährung ignorieren → Energie-Crash

<div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-xl border border-red-200 dark:border-red-700 my-6">
  <h4 className="font-bold text-red-800 dark:text-red-200 mb-4">⚠️ Warnung</h4>
  <p className="text-sm text-red-700 dark:text-red-300">
    Höre auf Warnsignale (Schmerzen, extreme Müdigkeit). Bei Verletzungen: Pause einlegen. Das Rennen wartet – deine Gesundheit nicht!
  </p>
</div>

---
### Zusammenfassung

**5K Trainingsplan:**
- ✅ 8 Wochen: 3-4 Läufe/Woche, 10-18 km Volumen
- ✅ Mix: Easy (80%), Tempo/Intervalle (20%), Long Run (6-8 km)
- ✅ Strategie: Negative Splits, konservativer Start
- ✅ Fokus: Ausdauer, Konsistenz, Spaß
- ✅ Nach dem Plan: Feiere! Du bist bereit für mehr.

**Merke dir:** 5K ist der Anfang deiner Lauf-Reise. Genieße den Prozess – das Rennen ist der Bonus!
    `,
    en: `
### 5K Training Plan: Your First Milestone! 🏁

5K (5 kilometers) is the perfect entry-level race for beginners. It's achievable, motivating, and builds a strong foundation. This 8-week plan takes you from walk-run to a confident 5K finish!

---
### Why 5K as a Goal?

**Realistic Goal for Beginners:**
- 8-12 weeks preparation (depending on starting level)
- Focus: Build endurance, refine technique
- Mental strength: Your first race – unforgettable!
- Distance: 5 km = about 25-40 min (depending on pace)

**Benefits:**
- ✅ Short prep, quick wins
- ✅ Many events (Parkruns, fun runs)
- ✅ Base for longer distances (10K, half marathon)

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border border-green-200 dark:border-green-700 my-6">
  <h4 className="font-bold text-green-800 dark:text-green-200 mb-4">💡 Your Starting Point</h4>
  <p className="text-sm text-green-700 dark:text-green-300">
    Can you run continuously for 20-30 min? Perfect! If not, repeat Phase 2. Goal: Complete 5K, not sprint it!
  </p>
</div>

---
### Training Structure: 3-4x Per Week

**Core Principles:**
- 3-4 runs per week (rest days in between!)
- Mix: Easy runs (80%), tempo/intervals (20%)
- Long run: 6-8 km (gradually increase)
- 10% rule: Max 10% weekly increase
- Cross-training: 1x per week (yoga or cycling)

**Weekly Structure (Example):**
- Monday: Rest
- Tuesday: Easy run or intervals
- Wednesday: Rest or cross
- Thursday: Easy run
- Friday: Rest
- Saturday: Long run
- Sunday: Easy run or rest

<div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-700 my-6">
  <h4 className="font-bold text-blue-800 dark:text-blue-200 mb-4">💡 Progression</h4>
  <p className="text-sm text-blue-700 dark:text-blue-300">
    Start slow! If week 1 is too hard, repeat it. Listen to your body – consistency over speed.
  </p>
</div>

**8-Week 5K Plan (Overview):**

<table className="w-full border-collapse my-6">
  <thead>
    <tr className="bg-gray-100 dark:bg-gray-800">
      <th className="border p-3 text-left">Week</th>
      <th className="border p-3 text-left">Easy Runs (x2)</th>
      <th className="border p-3 text-left">Tempo/Intervals</th>
      <th className="border p-3 text-left">Long Run</th>
      <th className="border p-3 text-left">Total km</th>
      <th className="border p-3 text-left">Focus</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td className="border p-3"><strong>1</strong></td>
      <td className="border p-3">3 km, 3 km</td>
      <td className="border p-3">4x 1 min fast / 2 min slow</td>
      <td className="border p-3">4 km</td>
      <td className="border p-3">10 km</td>
      <td className="border p-3">Build base</td>
    </tr>
    <tr>
      <td className="border p-3"><strong>2</strong></td>
      <td className="border p-3">3 km, 3.5 km</td>
      <td className="border p-3">5x 1 min fast / 2 min slow</td>
      <td className="border p-3">4.5 km</td>
      <td className="border p-3">11 km</td>
      <td className="border p-3">Increase</td>
    </tr>
    <tr>
      <td className="border p-3"><strong>3</strong></td>
      <td className="border p-3">3.5 km, 4 km</td>
      <td className="border p-3">4x 2 min tempo / 2 min easy</td>
      <td className="border p-3">5 km</td>
      <td className="border p-3">12.5 km</td>
      <td className="border p-3">Introduce tempo</td>
    </tr>
    <tr>
      <td className="border p-3"><strong>4</strong></td>
      <td className="border p-3">4 km, 4 km</td>
      <td className="border p-3">Rest week: Light intervals</td>
      <td className="border p-3">5 km</td>
      <td className="border p-3">13 km</td>
      <td className="border p-3">Recovery</td>
    </tr>
    <tr>
      <td className="border p-3"><strong>5</strong></td>
      <td className="border p-3">4 km, 4.5 km</td>
      <td className="border p-3">6x 400m tempo / 2 min recovery</td>
      <td className="border p-3">6 km</td>
      <td className="border p-3">14.5 km</td>
      <td className="border p-3">Speed</td>
    </tr>
    <tr>
      <td className="border p-3"><strong>6</strong></td>
      <td className="border p-3">4.5 km, 5 km</td>
      <td className="border p-3">20 min continuous tempo</td>
      <td className="border p-3">7 km</td>
      <td className="border p-3">16.5 km</td>
      <td className="border p-3">Endurance</td>
    </tr>
    <tr>
      <td className="border p-3"><strong>7</strong></td>
      <td className="border p-3">5 km, 5 km</td>
      <td className="border p-3">3 km tempo run</td>
      <td className="border p-3">8 km</td>
      <td className="border p-3">18 km</td>
      <td className="border p-3">Peak</td>
    </tr>
    <tr>
      <td className="border p-3"><strong>8</strong></td>
      <td className="border p-3">3 km easy, 2 km easy</td>
      <td className="border p-3">Race week: Light + strides</td>
      <td className="border p-3">Race: 5K!</td>
      <td className="border p-3">10 km</td>
      <td className="border p-3">Taper & Race</td>
    </tr>
  </tbody>
</table>

**Pace Guide:**
- Easy run: Conversational pace (can talk)
- Tempo/intervals: "Comfortably hard" (short sentences possible)
- Long run: Even slower than easy (endurance!)

**Practical Exercise:** Follow week 1 of the plan. Track all runs (distance, pace, feel). Adjust as needed (e.g., more walk phases).

---
### 5K Race Strategy: Smart Racing

**Pacing Strategies:**
- **Negative Splits:** Second half faster (ideal for beginners)
  - First 2.5 km: Conservative (10-15 sec/km slower)
  - Last 2.5 km: Accelerate if energy left
- **Even Pace:** Maintain constant pace (for experienced)

**Race-Day Tips:**
- Don't start too fast! (Most common mistake)
- Hydration: Small sips if needed
- Mental tricks: "Just to km 3", then "Breathe in, out"
- After race: Be proud – you did it!

<div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl border border-purple-200 dark:border-purple-700 my-6">
  <h4 className="font-bold text-purple-800 dark:text-purple-200 mb-4">🎯 Practical Exercise</h4>
  <p className="text-sm text-purple-700 dark:text-purple-300">
    Run a test 5K (not in race!). Analyze your pace per kilometer. Practice negative splits: Start slow, finish strong.
  </p>
</div>

**Common Mistakes:**
- ❌ Start too fast → Wall at km 3
- ❌ No taper → Tired on race day
- ❌ Ignore nutrition → Energy crash

<div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-xl border border-red-200 dark:border-red-700 my-6">
  <h4 className="font-bold text-red-800 dark:text-red-200 mb-4">⚠️ Warning</h4>
  <p className="text-sm text-red-700 dark:text-red-300">
    Listen to warning signs (pain, extreme fatigue). If injured: Take a break. The race waits – your health doesn't!
  </p>
</div>

---
### Summary

**5K Training Plan:**
- ✅ 8 weeks: 3-4 runs/week, 10-18 km volume
- ✅ Mix: Easy (80%), tempo/intervals (20%), long run (6-8 km)
- ✅ Strategy: Negative splits, conservative start
- ✅ Focus: Endurance, consistency, fun
- ✅ After plan: Celebrate! You're ready for more.

**Remember:** 5K is the start of your running journey. Enjoy the process – the race is the bonus!
    `
  },

  task: {
    de: {
      title: '5K-Plan starten',
      description: 'Starte den 8-Wochen-Plan und tracke deinen Fortschritt.',
      checklist: [
        { text: 'Woche 1: 2x Easy Run (3 km), 1x Intervalle, 1x Long Run (4 km)' },
        { text: 'Tracke jeden Lauf: Distanz, Tempo, Gefühl (App oder Notizbuch)' },
        { text: 'Integriere Ruhetage und 1x Cross-Training' },
        { text: 'Nach Woche 4: Test-5K laufen und analysieren' },
        { text: 'Passe an: Bei Müdigkeit mehr Erholung' },
        { text: 'Melde dich für ein 5K-Rennen an (Motivation!)' }
      ]
    },
    en: {
      title: 'Start 5K Plan',
      description: 'Start the 8-week plan and track your progress.',
      checklist: [
        { text: 'Week 1: 2x easy run (3 km), 1x intervals, 1x long run (4 km)' },
        { text: 'Track every run: Distance, pace, feel (app or notebook)' },
        { text: 'Include rest days and 1x cross-training' },
        { text: 'After week 4: Run a test 5K and analyze' },
        { text: 'Adjust: More recovery if tired' },
        { text: 'Sign up for a 5K race (motivation!)' }
      ]
    }
  },

  notes: {
    de: [
      {
        front: 'Wie viele Läufe pro Woche im 5K-Plan?',
        back: '3-4 Läufe pro Woche. Mix: 2x Easy, 1x Tempo/Intervalle, 1x Long Run. Ruhetage dazwischen!'
      },
      {
        front: 'Was sind negative Splits?',
        back: 'Zweite Hälfte schneller als erste. Konservativer Start, dann Beschleunigung. Ideal für Anfänger-5K.'
      },
      {
        front: 'Wie steigere ich im Plan?',
        back: '10%-Regel: Max. 10% mehr Distanz/Zeit pro Woche. Restwochen einbauen (z.B. Woche 4).'
      }
    ],
    en: [
      {
        front: 'How many runs per week in 5K plan?',
        back: '3-4 runs per week. Mix: 2x easy, 1x tempo/intervals, 1x long run. Rest days in between!'
      },
      {
        front: 'What are negative splits?',
        back: 'Second half faster than first. Conservative start, then accelerate. Ideal for beginner 5K.'
      },
      {
        front: 'How to progress in the plan?',
        back: '10% rule: Max 10% more distance/time per week. Include rest weeks (e.g., week 4).'
      }
    ]
  }
};

