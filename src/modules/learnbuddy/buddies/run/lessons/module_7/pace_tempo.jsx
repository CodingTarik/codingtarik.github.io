import React from 'react';

export const paceTempoLesson = {
  id: 'r7_m2_pace_tempo',
  title: { 
    en: '7.2 Pace & Tempo - Mastering Your Speed', 
    de: '7.2 Pace & Tempo - Geschwindigkeit meistern' 
  },
  description: { 
    en: 'Understand pace concepts, negative splits, race pacing strategies, and how to dial in your speed for every distance.', 
    de: 'Verstehe Pace-Konzepte, Negative Splits, Wettkampf-Pacing-Strategien und wie du deine Geschwindigkeit für jede Distanz optimierst.' 
  },
  category: 'performance',
  
  content: {
    de: `
### Pace & Tempo: Deine Geschwindigkeit meistern! ⏱️

Pace ist die Sprache der Läufer. Ob 5K oder Marathon - wer sein Tempo versteht und kontrolliert, läuft schneller und effizienter. Dieser Modul zeigt Pace-Konzepte, Strategien und wie du für jede Distanz optimal pacen kannst.

---
### Pace verstehen

**Was ist Pace?**
- Pace = Minuten pro Kilometer (z.B. 5:30/km)
- Tempo = Geschwindigkeit (z.B. 10,9 km/h)
- Pace ist in der Lauf-Welt gebräuchlicher als km/h

**Pace-Begriffe:**
- **Easy Pace:** Konversationstempo (Zone 2)
- **Tempo Pace:** Comfortably hard (Zone 4, ca. 1h haltbar)
- **Interval Pace:** Hart (Zone 5, wenige Minuten haltbar)
- **Race Pace:** Zieltempo für Wettkampf
- **Splits:** Tempo pro Kilometer/Abschnitt

**Split-Typen:**

<table className="w-full border-collapse my-6">
  <thead>
    <tr className="bg-gray-100 dark:bg-gray-800">
      <th className="border p-3 text-left">Split-Typ</th>
      <th className="border p-3 text-left">Beschreibung</th>
      <th className="border p-3 text-left">Ideal für</th>
      <th className="border p-3 text-left">Bewertung</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td className="border p-3"><strong>Negative Splits</strong></td>
      <td className="border p-3">Zweite Hälfte schneller</td>
      <td className="border p-3">Marathon, Halbmarathon</td>
      <td className="border p-3">⭐⭐⭐⭐⭐ Optimal</td>
    </tr>
    <tr>
      <td className="border p-3"><strong>Even Splits</strong></td>
      <td className="border p-3">Gleichmäßiges Tempo</td>
      <td className="border p-3">10K, Halbmarathon</td>
      <td className="border p-3">⭐⭐⭐⭐ Sehr gut</td>
    </tr>
    <tr>
      <td className="border p-3"><strong>Positive Splits</strong></td>
      <td className="border p-3">Zweite Hälfte langsamer</td>
      <td className="border p-3">-</td>
      <td className="border p-3">⭐⭐ Zu vermeiden</td>
    </tr>
  </tbody>
</table>

<div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-700 my-6">
  <h4 className="font-bold text-blue-800 dark:text-blue-200 mb-4">💡 Der häufigste Fehler</h4>
  <p className="text-sm text-blue-700 dark:text-blue-300">
    <strong>Zu schnell starten!</strong> 90% aller Läufer starten Wettkämpfe zu schnell. Die Euphorie am Start verführt. Folge: Einbruch in der zweiten Hälfte. Die besten Rennergebnisse kommen von kontrolliertem Start und starkem Finish.
  </p>
</div>

---
### Pacing-Strategien nach Distanz

**5K - Schnell aber kontrolliert:**
- Start: Erste 500m kontrolliert (nicht sprinten!)
- km 1-3: Zieltempo finden und halten
- km 4: Tempo halten oder leicht steigern
- km 5: Alles geben, Finish-Sprint

**10K - Gleichmäßig oder leicht negativ:**
- km 1-3: 5-10 Sek/km langsamer als Zieltempo
- km 4-7: Zieltempo
- km 8-10: Tempo halten oder leicht steigern

**Halbmarathon - Negative Splits ideal:**
- km 1-5: 10-15 Sek/km langsamer als Zieltempo
- km 6-15: Zieltempo
- km 16-21: Tempo halten oder steigern

**Marathon - Sehr konservativ starten:**
- km 1-10: 15-20 Sek/km langsamer als Zieltempo
- km 11-30: Zieltempo
- km 31-42: Tempo halten (Die Wand vermeiden!)

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border-2 border-green-300 dark:border-green-700 my-6">
  <h4 className="font-bold text-green-800 dark:text-green-200 mb-4">🎯 Pace-Tabelle (Beispiel: 5:00/km Zieltempo)</h4>
  <div className="space-y-2 text-sm text-green-700 dark:text-green-300">
    <p><strong>5K:</strong> Start 5:05-5:10, Mitte 5:00, Finish 4:50-4:55</p>
    <p><strong>10K:</strong> Start 5:10, Mitte 5:00, Finish 4:55</p>
    <p><strong>Halbmarathon:</strong> Start 5:15, Mitte 5:00, Finish 4:55-5:00</p>
    <p><strong>Marathon:</strong> Start 5:15-5:20, Mitte 5:00, Finish 5:00-5:05</p>
  </div>
</div>

---
### Pace im Training üben

**Tempo-Gefühl entwickeln:**
- **GPS-Uhr:** Lerne, wie sich verschiedene Tempos anfühlen
- **Perceived Exertion:** Anstrengung auf Skala 1-10 bewerten
- **Blind Runs:** 1 km laufen, dann Pace checken (Ziel: ±10 Sek)
- **Fartlek:** Tempo variieren und spüren lernen

**Praktische Übung: Pace-Kalibrierung:**

<div className="bg-amber-50 dark:bg-amber-900/20 p-6 rounded-xl border border-amber-200 dark:border-amber-700 my-6">
  <h4 className="font-bold text-amber-800 dark:text-amber-200 mb-4">📋 Pace-Kalibrierung</h4>
  <div className="space-y-2 text-sm text-amber-700 dark:text-amber-300">
    <p><strong>Schritt 1:</strong> Laufe 1 km bei deinem "gefühlten Easy Pace". Checke: Stimmt es mit Zone 2 überein?</p>
    <p><strong>Schritt 2:</strong> Laufe 1 km bei deinem "gefühlten Tempo Pace". Checke: Zone 4?</p>
    <p><strong>Schritt 3:</strong> Laufe 400m bei deinem "gefühlten Interval Pace". Checke: Zone 5?</p>
    <p><strong>Ergebnis:</strong> Die meisten laufen Easy zu schnell und Tempo zu langsam!</p>
  </div>
</div>

---
### Zusammenfassung

**Key Takeaways:**
- ⏱️ **Pace** = Min/km, die Sprache der Läufer
- 📉 **Negative Splits** = zweite Hälfte schneller (optimal für Wettkämpfe)
- 🚫 **Häufigster Fehler:** Zu schnell starten (Euphorie!)
- 🎯 **Strategie:** Je länger die Distanz, desto konservativer starten
- 🧠 **Pace-Gefühl:** Durch Training entwickeln (GPS, blind runs)
- 📊 **Even/Negative Splits** anstreben, Positive Splits vermeiden
    `,
    en: `
### Pace & Tempo: Mastering Your Speed! ⏱️

Pace is the language of runners. Whether 5K or marathon - understanding and controlling your tempo makes you faster and more efficient. This module covers pace concepts, strategies, and how to optimally pace for every distance.

---
### Understanding Pace

**What is Pace?**
- Pace = minutes per kilometer (e.g., 5:30/km)
- Speed = km per hour (e.g., 10.9 km/h)
- Pace is more common in the running world than km/h

**Pace Terms:**
- **Easy Pace:** Conversational tempo (Zone 2)
- **Tempo Pace:** Comfortably hard (Zone 4, holdable for ~1h)
- **Interval Pace:** Hard (Zone 5, holdable for a few minutes)
- **Race Pace:** Target tempo for competition
- **Splits:** Tempo per kilometer/segment

**Split Types:**

<table className="w-full border-collapse my-6">
  <thead>
    <tr className="bg-gray-100 dark:bg-gray-800">
      <th className="border p-3 text-left">Split Type</th>
      <th className="border p-3 text-left">Description</th>
      <th className="border p-3 text-left">Ideal For</th>
      <th className="border p-3 text-left">Rating</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td className="border p-3"><strong>Negative Splits</strong></td>
      <td className="border p-3">Second half faster</td>
      <td className="border p-3">Marathon, half marathon</td>
      <td className="border p-3">⭐⭐⭐⭐⭐ Optimal</td>
    </tr>
    <tr>
      <td className="border p-3"><strong>Even Splits</strong></td>
      <td className="border p-3">Consistent pace</td>
      <td className="border p-3">10K, half marathon</td>
      <td className="border p-3">⭐⭐⭐⭐ Very good</td>
    </tr>
    <tr>
      <td className="border p-3"><strong>Positive Splits</strong></td>
      <td className="border p-3">Second half slower</td>
      <td className="border p-3">-</td>
      <td className="border p-3">⭐⭐ Avoid</td>
    </tr>
  </tbody>
</table>

<div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-700 my-6">
  <h4 className="font-bold text-blue-800 dark:text-blue-200 mb-4">💡 The Most Common Mistake</h4>
  <p className="text-sm text-blue-700 dark:text-blue-300">
    <strong>Starting too fast!</strong> 90% of runners start races too fast. Start-line euphoria is tempting. Result: collapse in second half. Best race results come from controlled start and strong finish.
  </p>
</div>

---
### Pacing Strategies by Distance

**5K - Fast but controlled:**
- Start: First 500m controlled (don't sprint!)
- km 1-3: Find and hold target pace
- km 4: Hold or slightly increase pace
- km 5: Give everything, finish sprint

**10K - Even or slightly negative:**
- km 1-3: 5-10 sec/km slower than target pace
- km 4-7: Target pace
- km 8-10: Hold or slightly increase pace

**Half Marathon - Negative splits ideal:**
- km 1-5: 10-15 sec/km slower than target pace
- km 6-15: Target pace
- km 16-21: Hold or increase pace

**Marathon - Very conservative start:**
- km 1-10: 15-20 sec/km slower than target pace
- km 11-30: Target pace
- km 31-42: Hold pace (avoid the wall!)

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border-2 border-green-300 dark:border-green-700 my-6">
  <h4 className="font-bold text-green-800 dark:text-green-200 mb-4">🎯 Pace Table (Example: 5:00/km target pace)</h4>
  <div className="space-y-2 text-sm text-green-700 dark:text-green-300">
    <p><strong>5K:</strong> Start 5:05-5:10, middle 5:00, finish 4:50-4:55</p>
    <p><strong>10K:</strong> Start 5:10, middle 5:00, finish 4:55</p>
    <p><strong>Half Marathon:</strong> Start 5:15, middle 5:00, finish 4:55-5:00</p>
    <p><strong>Marathon:</strong> Start 5:15-5:20, middle 5:00, finish 5:00-5:05</p>
  </div>
</div>

---
### Practicing Pace in Training

**Developing Pace Feel:**
- **GPS Watch:** Learn how different paces feel
- **Perceived Exertion:** Rate effort on scale 1-10
- **Blind Runs:** Run 1 km, then check pace (goal: ±10 sec)
- **Fartlek:** Vary tempo and learn to feel it

**Practical Exercise: Pace Calibration:**

<div className="bg-amber-50 dark:bg-amber-900/20 p-6 rounded-xl border border-amber-200 dark:border-amber-700 my-6">
  <h4 className="font-bold text-amber-800 dark:text-amber-200 mb-4">📋 Pace Calibration</h4>
  <div className="space-y-2 text-sm text-amber-700 dark:text-amber-300">
    <p><strong>Step 1:</strong> Run 1 km at your "felt easy pace." Check: Does it match Zone 2?</p>
    <p><strong>Step 2:</strong> Run 1 km at your "felt tempo pace." Check: Zone 4?</p>
    <p><strong>Step 3:</strong> Run 400m at your "felt interval pace." Check: Zone 5?</p>
    <p><strong>Result:</strong> Most people run easy too fast and tempo too slow!</p>
  </div>
</div>

---
### Summary

**Key Takeaways:**
- ⏱️ **Pace** = min/km, the language of runners
- 📉 **Negative splits** = second half faster (optimal for races)
- 🚫 **Most common mistake:** Starting too fast (euphoria!)
- 🎯 **Strategy:** The longer the distance, the more conservative the start
- 🧠 **Pace feel:** Develop through training (GPS, blind runs)
- 📊 **Aim for** even/negative splits, avoid positive splits
    `
  },

  task: {
    de: {
      title: 'Pace-Gefühl kalibrieren',
      description: 'Kalibriere dein Pace-Gefühl und übe verschiedene Tempos.',
      checklist: [
        { text: 'Easy Pace, Tempo Pace und Race Pace berechnen' },
        { text: 'Pace-Kalibrierung durchführen (1 km blind, dann checken)' },
        { text: 'Easy Run mit GPS: Stimmt dein Gefühl mit Zone 2 überein?' },
        { text: 'Negative Splits üben: 5 km (zweite Hälfte schneller)' },
        { text: 'Fartlek-Lauf: Tempo variieren und verschiedene Paces spüren' },
        { text: 'Pacing-Strategie für nächstes Rennen planen' }
      ]
    },
    en: {
      title: 'Calibrate Pace Feel',
      description: 'Calibrate your pace feel and practice different tempos.',
      checklist: [
        { text: 'Calculate easy pace, tempo pace and race pace' },
        { text: 'Do pace calibration (1 km blind, then check)' },
        { text: 'Easy run with GPS: Does your feel match Zone 2?' },
        { text: 'Practice negative splits: 5 km (second half faster)' },
        { text: 'Fartlek run: Vary tempo and feel different paces' },
        { text: 'Plan pacing strategy for next race' }
      ]
    }
  },

  notes: {
    de: [
      {
        front: 'Was sind Negative Splits?',
        back: 'Die zweite Hälfte des Rennens schneller laufen als die erste. Optimal für HM und Marathon. Erfordert disziplinierten Start.'
      },
      {
        front: 'Marathon-Pacing-Strategie?',
        back: 'km 1-10: 15-20 Sek/km langsamer als Zieltempo. km 11-30: Zieltempo. km 31-42: Tempo halten. Nie zu schnell starten!'
      },
      {
        front: 'Häufigster Pacing-Fehler?',
        back: 'Zu schnell starten! 90% der Läufer starten zu schnell (Euphorie am Start). Folge: Einbruch in zweiter Hälfte. Kontrollierter Start = bessere Endzeit.'
      }
    ],
    en: [
      {
        front: 'What are negative splits?',
        back: 'Running the second half of a race faster than the first. Optimal for HM and marathon. Requires disciplined start.'
      },
      {
        front: 'Marathon pacing strategy?',
        back: 'km 1-10: 15-20 sec/km slower than target. km 11-30: Target pace. km 31-42: Hold pace. Never start too fast!'
      },
      {
        front: 'Most common pacing mistake?',
        back: 'Starting too fast! 90% of runners start too fast (start-line euphoria). Result: collapse in second half. Controlled start = better finish time.'
      }
    ]
  }
};
