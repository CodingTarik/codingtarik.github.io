import React from 'react';

export const lactateThresholdLesson = {
  id: 'r9_m1_lactate_threshold',
  title: { 
    en: '9.1 Lactate Threshold Training', 
    de: '9.1 Laktatschwellen-Training' 
  },
  description: { 
    en: 'Deep dive into lactate physiology, tempo runs, threshold intervals, field testing protocols, and how to systematically raise your threshold pace.', 
    de: 'Tiefgehender Einblick in die Laktatphysiologie, Tempoläufe, Schwellenintervalle, Feldtest-Protokolle und wie du systematisch dein Schwellentempo verbesserst.' 
  },
  category: 'advancedPerformance',
  
  content: {
    de: `
### Laktatschwellen-Training: Der Schlüssel zur Ausdauerleistung 🔬

Die Laktatschwelle ist einer der wichtigsten leistungsbestimmenden Faktoren im Laufsport. Sie bestimmt, wie schnell du über längere Strecken laufen kannst, ohne dass deine Muskeln "zumachen". In diesem Modul tauchen wir tief in die Wissenschaft und das Training der Laktatschwelle ein.

---
### Was ist Laktat?

**Die Grundlagen:**
- Laktat ist ein Stoffwechselprodukt der anaeroben Energiegewinnung
- Es wird IMMER produziert – auch in Ruhe (ca. 1-2 mmol/l Blut)
- Laktat ist KEIN Abfallprodukt, sondern ein wertvoller Energieträger
- Dein Herz und deine langsamen Muskelfasern nutzen Laktat als Brennstoff

**Der Mythos "Milchsäure":**
- Milchsäure existiert im Körper praktisch nicht
- Laktat und Wasserstoffionen (H⁺) werden separat freigesetzt
- Die H⁺-Ionen verursachen das "Brennen" – nicht das Laktat selbst
- Laktat wird sogar als Energiequelle recycelt (Cori-Zyklus)

<div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-700 my-6">
  <h4 className="font-bold text-blue-800 dark:text-blue-200 mb-4">💡 Wusstest du?</h4>
  <p className="text-sm text-blue-700 dark:text-blue-300">
    Laktat ist ein wichtiger Energieträger! Dein Herz bevorzugt Laktat als Brennstoff gegenüber Glukose. Gut trainierte Läufer können mehr Laktat produzieren UND effizienter verwerten – das ist der Schlüssel zur Leistung.
  </p>
</div>

---
### Die Laktatschwelle verstehen

**Zwei Schwellen:**

<table className="w-full border-collapse my-6">
  <thead>
    <tr className="bg-gray-100 dark:bg-gray-800">
      <th className="border p-3 text-left">Schwelle</th>
      <th className="border p-3 text-left">Laktatwert</th>
      <th className="border p-3 text-left">Beschreibung</th>
      <th className="border p-3 text-left">Trainingszone</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td className="border p-3"><strong>LT1 (Aerobe Schwelle)</strong></td>
      <td className="border p-3">~2 mmol/l</td>
      <td className="border p-3">Erste Laktatanstieg über Ruheniveau</td>
      <td className="border p-3">Obergrenze Zone 2</td>
    </tr>
    <tr>
      <td className="border p-3"><strong>LT2 (Anaerobe Schwelle)</strong></td>
      <td className="border p-3">~4 mmol/l</td>
      <td className="border p-3">Laktat steigt exponentiell an</td>
      <td className="border p-3">Zone 4 (Threshold)</td>
    </tr>
  </tbody>
</table>

**Was passiert an der Schwelle?**
- Unter LT1: Laktat wird schneller abgebaut als produziert → stundenlang laufen möglich
- Zwischen LT1 und LT2: Laktat steigt langsam → 60-90 Min haltbar
- Über LT2: Laktat akkumuliert schnell → 20-40 Min bis zur Erschöpfung

---
### Laktatschwelle testen

**Methode 1: Labortest (Goldstandard)**
- Stufentest auf Laufband beim Sportmediziner
- Blutlaktatmessung alle 3-5 Minuten
- Kosten: 80-200€, Ergebnis: exakte Schwellenwerte

**Methode 2: 30-Minuten-Feldtest**
- 10 Min Aufwärmen
- 30 Min so schnell wie möglich laufen (gleichmäßig!)
- Durchschnittstempo der letzten 20 Min ≈ Schwellentempo
- Durchschnitts-HF der letzten 20 Min ≈ Schwellen-HF

**Methode 3: Talk-Test**
- Laufe zunehmend schneller
- Tempo, bei dem du gerade noch in kurzen Sätzen reden kannst = nahe LT2
- Einfach, aber ungenau

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border border-green-200 dark:border-green-700 my-6">
  <h4 className="font-bold text-green-800 dark:text-green-200 mb-4">🎯 Der 30-Minuten-Test Schritt für Schritt</h4>
  <ol className="list-decimal list-inside space-y-2 text-sm text-green-700 dark:text-green-300">
    <li>Flache Strecke wählen (Bahn oder flacher Weg)</li>
    <li>10 Min locker einlaufen</li>
    <li>Stoppuhr + HF-Monitor starten</li>
    <li>30 Min so schnell wie möglich (GLEICHMÄSSIG!)</li>
    <li>Die ersten 10 Min verwerfen (zu frisch)</li>
    <li>Durchschnitt der letzten 20 Min = dein Schwellentempo</li>
    <li>Alle 6-8 Wochen wiederholen zur Fortschrittskontrolle</li>
  </ol>
</div>

---
### Schwellentraining: Die Workouts

**1. Klassischer Tempo Run**
- 15 Min Aufwärmen
- 20-40 Min bei Schwellentempo (LT2)
- 10 Min Auslaufen
- Gefühl: "Comfortably hard" – angenehm anstrengend

**2. Cruise Intervals (Jack Daniels)**
- 4-6 × 5-8 Min bei Schwellentempo
- 60-90 Sek Trabpause zwischen den Intervallen
- Vorteil: Mehr Gesamtzeit bei Schwellentempo als klassischer Tempo Run

**3. Progression Run**
- 40-60 Min Gesamtdauer
- Erste Hälfte: Easy Pace (Zone 2)
- Letzte 15-20 Min: Steigerung auf Schwellentempo
- Simuliert Rennbedingungen (Ermüdung + Tempo)

**4. Tempo-Intervalle mit Steigung**
- 4-6 × 4 Min am Hügel bei Schwellenanstrengung
- Runtertrabpause
- Stärkt Muskelkraft + Schwelle gleichzeitig

<div className="bg-amber-50 dark:bg-amber-900/20 p-6 rounded-xl border border-amber-200 dark:border-amber-700 my-6">
  <h4 className="font-bold text-amber-800 dark:text-amber-200 mb-4">⚠️ Häufige Fehler</h4>
  <ul className="list-disc list-inside space-y-2 text-sm text-amber-700 dark:text-amber-300">
    <li><strong>Zu schnell starten:</strong> Das Tempo muss haltbar sein – nicht der erste Kilometer zählt, sondern der letzte!</li>
    <li><strong>Zu häufig:</strong> Maximal 1-2 Schwellenworkouts pro Woche</li>
    <li><strong>Pausen zu lang:</strong> Bei Cruise Intervals sollte Laktat NICHT komplett abgebaut werden</li>
    <li><strong>Schwelle nicht kennen:</strong> Ohne Test trainierst du im Dunkeln</li>
  </ul>
</div>

---
### Trainingsplan: Schwelle verbessern (8 Wochen)

<table className="w-full border-collapse my-6">
  <thead>
    <tr className="bg-gray-100 dark:bg-gray-800">
      <th className="border p-3 text-left">Woche</th>
      <th className="border p-3 text-left">Schwellenworkout</th>
      <th className="border p-3 text-left">Volumen</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td className="border p-3">1-2</td>
      <td className="border p-3">3 × 8 Min Cruise Intervals</td>
      <td className="border p-3">24 Min @ LT2</td>
    </tr>
    <tr>
      <td className="border p-3">3-4</td>
      <td className="border p-3">4 × 8 Min Cruise Intervals</td>
      <td className="border p-3">32 Min @ LT2</td>
    </tr>
    <tr>
      <td className="border p-3">5-6</td>
      <td className="border p-3">25 Min Tempo Run</td>
      <td className="border p-3">25 Min @ LT2</td>
    </tr>
    <tr>
      <td className="border p-3">7-8</td>
      <td className="border p-3">30-35 Min Tempo Run</td>
      <td className="border p-3">30-35 Min @ LT2</td>
    </tr>
  </tbody>
</table>

---
### Zusammenfassung

**Key Takeaways:**
- 🔬 **Laktat ist kein Feind:** Es ist ein Energieträger, nicht Abfallprodukt
- 📊 **Zwei Schwellen:** LT1 (~2 mmol/l) und LT2 (~4 mmol/l) kennen
- 🧪 **Testen:** 30-Min-Feldtest oder Labortest alle 6-8 Wochen
- 🏃 **Workouts:** Tempo Runs, Cruise Intervals, Progression Runs
- ⚡ **Frequenz:** 1-2 Schwellenworkouts pro Woche
- 📈 **Progression:** Erst Intervalle, dann längere Tempo Runs

**Dein nächster Schritt:** Mach den 30-Minuten-Feldtest und bestimme dein Schwellentempo! 🏃‍♂️
    `,
    en: `
### Lactate Threshold Training: The Key to Endurance Performance 🔬

The lactate threshold is one of the most important performance-determining factors in running. It determines how fast you can run over longer distances without your muscles "shutting down." In this module, we dive deep into the science and training of the lactate threshold.

---
### What is Lactate?

**The Basics:**
- Lactate is a metabolic byproduct of anaerobic energy production
- It is ALWAYS produced – even at rest (about 1-2 mmol/l blood)
- Lactate is NOT a waste product but a valuable energy source
- Your heart and slow-twitch muscle fibers use lactate as fuel

**The "Lactic Acid" Myth:**
- Lactic acid practically doesn't exist in the body
- Lactate and hydrogen ions (H⁺) are released separately
- The H⁺ ions cause the "burn" – not the lactate itself
- Lactate is actually recycled as an energy source (Cori cycle)

<div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-700 my-6">
  <h4 className="font-bold text-blue-800 dark:text-blue-200 mb-4">💡 Did You Know?</h4>
  <p className="text-sm text-blue-700 dark:text-blue-300">
    Lactate is an important energy source! Your heart actually prefers lactate over glucose as fuel. Well-trained runners can produce MORE lactate AND utilize it more efficiently – that's the key to performance.
  </p>
</div>

---
### Understanding the Lactate Threshold

**Two Thresholds:**

<table className="w-full border-collapse my-6">
  <thead>
    <tr className="bg-gray-100 dark:bg-gray-800">
      <th className="border p-3 text-left">Threshold</th>
      <th className="border p-3 text-left">Lactate Level</th>
      <th className="border p-3 text-left">Description</th>
      <th className="border p-3 text-left">Training Zone</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td className="border p-3"><strong>LT1 (Aerobic Threshold)</strong></td>
      <td className="border p-3">~2 mmol/l</td>
      <td className="border p-3">First rise above resting level</td>
      <td className="border p-3">Upper Zone 2</td>
    </tr>
    <tr>
      <td className="border p-3"><strong>LT2 (Anaerobic Threshold)</strong></td>
      <td className="border p-3">~4 mmol/l</td>
      <td className="border p-3">Lactate rises exponentially</td>
      <td className="border p-3">Zone 4 (Threshold)</td>
    </tr>
  </tbody>
</table>

**What Happens at the Threshold?**
- Below LT1: Lactate is cleared faster than produced → can run for hours
- Between LT1 and LT2: Lactate rises slowly → sustainable for 60-90 min
- Above LT2: Lactate accumulates rapidly → 20-40 min to exhaustion

---
### Testing Your Lactate Threshold

**Method 1: Lab Test (Gold Standard)**
- Step test on treadmill with sports physician
- Blood lactate measurement every 3-5 minutes
- Cost: $80-200, Result: exact threshold values

**Method 2: 30-Minute Field Test**
- 10 min warm-up
- 30 min as fast as possible (evenly paced!)
- Average pace of last 20 min ≈ threshold pace
- Average HR of last 20 min ≈ threshold HR

**Method 3: Talk Test**
- Run at progressively faster speeds
- Pace where you can just barely speak in short sentences ≈ near LT2
- Simple but imprecise

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border border-green-200 dark:border-green-700 my-6">
  <h4 className="font-bold text-green-800 dark:text-green-200 mb-4">🎯 The 30-Minute Test Step by Step</h4>
  <ol className="list-decimal list-inside space-y-2 text-sm text-green-700 dark:text-green-300">
    <li>Choose a flat course (track or flat path)</li>
    <li>10 min easy warm-up</li>
    <li>Start stopwatch + HR monitor</li>
    <li>30 min as fast as possible (EVENLY PACED!)</li>
    <li>Discard the first 10 min (too fresh)</li>
    <li>Average of last 20 min = your threshold pace</li>
    <li>Repeat every 6-8 weeks to track progress</li>
  </ol>
</div>

---
### Threshold Workouts

**1. Classic Tempo Run**
- 15 min warm-up
- 20-40 min at threshold pace (LT2)
- 10 min cool-down
- Feel: "Comfortably hard" – pleasantly challenging

**2. Cruise Intervals (Jack Daniels)**
- 4-6 × 5-8 min at threshold pace
- 60-90 sec jog recovery between intervals
- Advantage: More total time at threshold than a classic tempo run

**3. Progression Run**
- 40-60 min total duration
- First half: Easy pace (Zone 2)
- Last 15-20 min: Build to threshold pace
- Simulates race conditions (fatigue + pace)

**4. Tempo Intervals with Incline**
- 4-6 × 4 min uphill at threshold effort
- Jog down recovery
- Builds muscle strength + threshold simultaneously

<div className="bg-amber-50 dark:bg-amber-900/20 p-6 rounded-xl border border-amber-200 dark:border-amber-700 my-6">
  <h4 className="font-bold text-amber-800 dark:text-amber-200 mb-4">⚠️ Common Mistakes</h4>
  <ul className="list-disc list-inside space-y-2 text-sm text-amber-700 dark:text-amber-300">
    <li><strong>Starting too fast:</strong> The pace must be sustainable – it's not the first kilometer that counts, but the last!</li>
    <li><strong>Too frequent:</strong> Maximum 1-2 threshold workouts per week</li>
    <li><strong>Recoveries too long:</strong> In cruise intervals, lactate should NOT fully clear</li>
    <li><strong>Not knowing your threshold:</strong> Without testing, you're training in the dark</li>
  </ul>
</div>

---
### Training Plan: Improve Threshold (8 Weeks)

<table className="w-full border-collapse my-6">
  <thead>
    <tr className="bg-gray-100 dark:bg-gray-800">
      <th className="border p-3 text-left">Week</th>
      <th className="border p-3 text-left">Threshold Workout</th>
      <th className="border p-3 text-left">Volume</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td className="border p-3">1-2</td>
      <td className="border p-3">3 × 8 min cruise intervals</td>
      <td className="border p-3">24 min @ LT2</td>
    </tr>
    <tr>
      <td className="border p-3">3-4</td>
      <td className="border p-3">4 × 8 min cruise intervals</td>
      <td className="border p-3">32 min @ LT2</td>
    </tr>
    <tr>
      <td className="border p-3">5-6</td>
      <td className="border p-3">25 min tempo run</td>
      <td className="border p-3">25 min @ LT2</td>
    </tr>
    <tr>
      <td className="border p-3">7-8</td>
      <td className="border p-3">30-35 min tempo run</td>
      <td className="border p-3">30-35 min @ LT2</td>
    </tr>
  </tbody>
</table>

---
### Summary

**Key Takeaways:**
- 🔬 **Lactate is not the enemy:** It's an energy source, not waste
- 📊 **Two thresholds:** Know LT1 (~2 mmol/l) and LT2 (~4 mmol/l)
- 🧪 **Test:** 30-min field test or lab test every 6-8 weeks
- 🏃 **Workouts:** Tempo runs, cruise intervals, progression runs
- ⚡ **Frequency:** 1-2 threshold workouts per week
- 📈 **Progression:** Intervals first, then longer tempo runs

**Your next step:** Do the 30-minute field test and determine your threshold pace! 🏃‍♂️
    `
  },

  task: {
    de: {
      title: 'Laktatschwelle testen und trainieren',
      description: 'Bestimme deine individuelle Laktatschwelle und absolviere dein erstes gezieltes Schwellentraining.',
      checklist: [
        { text: '30-Minuten-Feldtest auf flacher Strecke durchführen' },
        { text: 'Schwellentempo und Schwellen-HF notieren' },
        { text: 'Persönliche Schwellenzonen berechnen (LT1 und LT2)' },
        { text: 'Erstes Cruise-Interval-Workout absolvieren (3×8 Min)' },
        { text: 'Tempo-Empfindungen dokumentieren ("comfortably hard?")' },
        { text: 'Test in 6-8 Wochen wiederholen und Fortschritt vergleichen' }
      ]
    },
    en: {
      title: 'Test and Train Lactate Threshold',
      description: 'Determine your individual lactate threshold and complete your first targeted threshold workout.',
      checklist: [
        { text: 'Perform 30-minute field test on flat course' },
        { text: 'Record threshold pace and threshold HR' },
        { text: 'Calculate personal threshold zones (LT1 and LT2)' },
        { text: 'Complete first cruise interval workout (3×8 min)' },
        { text: 'Document pace sensations ("comfortably hard?")' },
        { text: 'Repeat test in 6-8 weeks and compare progress' }
      ]
    }
  },

  notes: {
    de: [
      {
        front: 'Was ist der Unterschied zwischen LT1 und LT2?',
        back: 'LT1 (Aerobe Schwelle, ~2 mmol/l): Erste Laktatanstieg, Obergrenze Zone 2. LT2 (Anaerobe Schwelle, ~4 mmol/l): Laktat steigt exponentiell, Zone 4 Threshold. Zwischen beiden liegt der optimale Marathontempo-Bereich.'
      },
      {
        front: 'Wie teste ich meine Laktatschwelle im Feld?',
        back: '30-Min-Feldtest: 10 Min warmup, dann 30 Min maximal gleichmäßig laufen. Durchschnittspace und HF der letzten 20 Min = Schwellenwerte. Alle 6-8 Wochen wiederholen.'
      },
      {
        front: 'Welche Schwellenworkouts gibt es?',
        back: '1) Tempo Run (20-40 Min bei LT2), 2) Cruise Intervals (4-6×5-8 Min, 60-90s Pause), 3) Progression Run (Easy → Threshold), 4) Hügel-Tempo-Intervalle. Max 1-2x pro Woche.'
      }
    ],
    en: [
      {
        front: 'What is the difference between LT1 and LT2?',
        back: 'LT1 (Aerobic Threshold, ~2 mmol/l): First lactate rise, upper Zone 2. LT2 (Anaerobic Threshold, ~4 mmol/l): Lactate rises exponentially, Zone 4 Threshold. Between both lies the optimal marathon pace range.'
      },
      {
        front: 'How do I field test my lactate threshold?',
        back: '30-min field test: 10 min warm-up, then 30 min max even pace. Average pace and HR of last 20 min = threshold values. Repeat every 6-8 weeks.'
      },
      {
        front: 'What threshold workouts are there?',
        back: '1) Tempo Run (20-40 min at LT2), 2) Cruise Intervals (4-6×5-8 min, 60-90s rest), 3) Progression Run (Easy → Threshold), 4) Hill tempo intervals. Max 1-2x per week.'
      }
    ]
  }
};
