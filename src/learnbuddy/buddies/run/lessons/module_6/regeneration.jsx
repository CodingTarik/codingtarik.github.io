import React from 'react';

export const regenerationLesson = {
  id: 'r6_m1_regeneration',
  title: { 
    en: '6.1 Regeneration & Recovery - The Secret to Progress', 
    de: '6.1 Regeneration & Erholung - Das Geheimnis des Fortschritts' 
  },
  description: { 
    en: 'Learn why recovery is essential for progress and master active recovery, sleep optimization, and nutrition for regeneration.', 
    de: 'Lerne, warum Erholung essentiell für Fortschritt ist und meistere aktive Regeneration, Schlaf-Optimierung und Ernährung für Regeneration.' 
  },
  category: 'intermediate',
  
  content: {
    de: `
### Regeneration & Erholung: Das Geheimnis des Fortschritts! 💤

Training bricht den Körper ab - Regeneration baut ihn stärker auf! Viele Läufer trainieren zu viel und erholen sich zu wenig. Dieser Modul zeigt, warum Ruhe genauso wichtig ist wie Training und wie du optimal regenerierst.

---
### Warum Regeneration so wichtig ist

**Die Wahrheit über Fortschritt:**
- Training = Stimulus (Körper wird belastet)
- Regeneration = Adaptation (Körper wird stärker)
- **Fortschritt passiert während der Ruhe, nicht während des Trainings!**

**Was passiert während der Regeneration?**
- **Muskelreparatur:** Mikrorisse heilen, Muskeln werden stärker
- **Glykogen-Auffüllung:** Energiespeicher werden wieder gefüllt
- **Hormonbalance:** Testosteron steigt, Cortisol sinkt
- **Nervensystem:** Parasympathikus (Ruhe-Modus) aktiviert
- **Immunsystem:** Stärkt sich, Entzündungen heilen

<div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-xl border border-red-200 dark:border-red-700 my-6">
  <h4 className="font-bold text-red-800 dark:text-red-200 mb-4">⚠️ Ohne Regeneration: Übertraining!</h4>
  <p className="text-sm text-red-700 dark:text-red-300 mb-3">
    Zu viel Training + zu wenig Ruhe = Übertraining (Overtraining Syndrome)
  </p>
  <p className="text-sm text-red-700 dark:text-red-300">
    Symptome: Chronische Müdigkeit, schlechtere Performance, häufige Krankheiten, Lustlosigkeit, erhöhte Ruheherzfrequenz, Schlafprobleme
  </p>
</div>

**Die Regenerations-Pyramide:**

<table className="w-full border-collapse my-6">
  <thead>
    <tr className="bg-gray-100 dark:bg-gray-800">
      <th className="border p-3 text-left">Ebene</th>
      <th className="border p-3 text-left">Maßnahme</th>
      <th className="border p-3 text-left">Wichtigkeit</th>
      <th className="border p-3 text-left">Häufigkeit</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td className="border p-3"><strong>1. Basis</strong></td>
      <td className="border p-3">Schlaf (7-9 Std.)</td>
      <td className="border p-3">⭐⭐⭐⭐⭐</td>
      <td className="border p-3">Täglich</td>
    </tr>
    <tr>
      <td className="border p-3"><strong>2. Ernährung</strong></td>
      <td className="border p-3">Protein + Kohlenhydrate nach Training</td>
      <td className="border p-3">⭐⭐⭐⭐⭐</td>
      <td className="border p-3">Nach jedem Training</td>
    </tr>
    <tr>
      <td className="border p-3"><strong>3. Ruhetage</strong></td>
      <td className="border p-3">1-2 komplette Ruhetage/Woche</td>
      <td className="border p-3">⭐⭐⭐⭐</td>
      <td className="border p-3">Wöchentlich</td>
    </tr>
    <tr>
      <td className="border p-3"><strong>4. Aktive Erholung</strong></td>
      <td className="border p-3">Easy Runs, Spazieren, Yoga</td>
      <td className="border p-3">⭐⭐⭐⭐</td>
      <td className="border p-3">2-3x/Woche</td>
    </tr>
    <tr>
      <td className="border p-3"><strong>5. Extras</strong></td>
      <td className="border p-3">Massage, Foam Rolling, Eisbad</td>
      <td className="border p-3">⭐⭐⭐</td>
      <td className="border p-3">Optional</td>
    </tr>
  </tbody>
</table>

---
### Schlaf: Die mächtigste Regenerations-Waffe 😴

**Warum Schlaf so wichtig ist:**
- **Wachstumshormon:** Wird hauptsächlich im Tiefschlaf ausgeschüttet
- **Muskelreparatur:** Passiert primär im Schlaf
- **Gedächtnis:** Training wird "gespeichert" (motorisches Lernen)
- **Immunsystem:** Stärkt sich während des Schlafs
- **Cortisol-Reduktion:** Stresshormon sinkt

**Optimaler Schlaf für Läufer:**
- **Dauer:** 7-9 Stunden pro Nacht (individuell!)
- **Qualität:** Durchschlafen wichtiger als Dauer
- **Timing:** Regelmäßige Schlafenszeiten (Zirkadischer Rhythmus)
- **Tiefschlaf:** Erste 3-4 Stunden am wichtigsten

**Schlaf-Optimierung - Die Basics:**

<div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-700 my-6">
  <h4 className="font-bold text-blue-800 dark:text-blue-200 mb-4">💡 Schlaf-Hygiene für Läufer</h4>
  <ul className="list-disc list-inside space-y-2 text-sm text-blue-700 dark:text-blue-300">
    <li><strong>Dunkelheit:</strong> Komplett dunkles Zimmer (Melatonin-Produktion)</li>
    <li><strong>Temperatur:</strong> 16-19°C ideal für Schlaf</li>
    <li><strong>Kein Bildschirm:</strong> 1 Std. vor Schlaf (Blaulicht hemmt Melatonin)</li>
    <li><strong>Kein Koffein:</strong> Nach 14 Uhr vermeiden (Halbwertszeit 6 Std.)</li>
    <li><strong>Routine:</strong> Gleiche Schlafenszeit jeden Tag (auch Wochenende!)</li>
    <li><strong>Kein intensives Training:</strong> 3-4 Std. vor Schlaf (Adrenalin)</li>
    <li><strong>Entspannung:</strong> Lesen, Meditation, leichtes Dehnen</li>
  </ul>
</div>

**Power Naps - Der Turbo-Boost:**
- **Dauer:** 20-30 Minuten (nicht länger! Sonst Tiefschlaf)
- **Timing:** Früher Nachmittag (13-15 Uhr)
- **Effekt:** Reduziert Müdigkeit, verbessert Performance
- **Ideal:** Nach hartem Training oder bei Schlafmangel

**Schlaf tracken:**
- Ruheherzfrequenz morgens messen (erhöht = schlechte Regeneration)
- Schlaf-Apps (Schlafphasen, Qualität)
- Subjektives Gefühl (wie fühlst du dich?)

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border border-green-200 dark:border-green-700 my-6">
  <h4 className="font-bold text-green-800 dark:text-green-200 mb-4">🎯 Praktische Übung: Schlaf-Experiment</h4>
  <p className="text-sm text-green-700 dark:text-green-300 mb-3">
    <strong>Woche 1-2:</strong> Tracke deinen Schlaf (Dauer, Qualität, Ruheherzfrequenz morgens)
  </p>
  <p className="text-sm text-green-700 dark:text-green-300 mb-3">
    <strong>Woche 3-4:</strong> Optimiere: Feste Schlafenszeit, dunkles Zimmer, kein Bildschirm 1 Std. vorher
  </p>
  <p className="text-sm text-green-700 dark:text-green-300">
    <strong>Vergleich:</strong> Wie hat sich deine Performance verändert?
  </p>
</div>

---
### Ernährung für Regeneration 🍽️

**Die Post-Workout-Mahlzeit:**
- **Timing:** Innerhalb 30-60 Minuten nach Training (anaboles Fenster)
- **Protein:** 20-30g (Muskelreparatur)
- **Kohlenhydrate:** 40-60g (Glykogen-Auffüllung)
- **Verhältnis:** 1:2 bis 1:3 (Protein:Kohlenhydrate)

**Beispiele für Post-Workout-Mahlzeiten:**

<table className="w-full border-collapse my-6">
  <thead>
    <tr className="bg-gray-100 dark:bg-gray-800">
      <th className="border p-3 text-left">Mahlzeit</th>
      <th className="border p-3 text-left">Protein</th>
      <th className="border p-3 text-left">Kohlenhydrate</th>
      <th className="border p-3 text-left">Einfachheit</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td className="border p-3">Protein-Shake + Banane</td>
      <td className="border p-3">25g</td>
      <td className="border p-3">30g</td>
      <td className="border p-3">⭐⭐⭐⭐⭐</td>
    </tr>
    <tr>
      <td className="border p-3">Griechischer Joghurt + Müsli + Beeren</td>
      <td className="border p-3">20g</td>
      <td className="border p-3">45g</td>
      <td className="border p-3">⭐⭐⭐⭐⭐</td>
    </tr>
    <tr>
      <td className="border p-3">Rührei (2 Eier) + Toast + Avocado</td>
      <td className="border p-3">18g</td>
      <td className="border p-3">40g</td>
      <td className="border p-3">⭐⭐⭐⭐</td>
    </tr>
    <tr>
      <td className="border p-3">Hähnchen + Reis + Gemüse</td>
      <td className="border p-3">30g</td>
      <td className="border p-3">50g</td>
      <td className="border p-3">⭐⭐⭐</td>
    </tr>
    <tr>
      <td className="border p-3">Thunfisch-Sandwich + Obst</td>
      <td className="border p-3">25g</td>
      <td className="border p-3">45g</td>
      <td className="border p-3">⭐⭐⭐⭐</td>
    </tr>
  </tbody>
</table>

**Antioxidantien - Die Entzündungs-Killer:**
- **Beeren:** Blaubeeren, Himbeeren (hoher ORAC-Wert)
- **Dunkles Blattgemüse:** Spinat, Grünkohl
- **Nüsse:** Walnüsse, Mandeln
- **Gewürze:** Kurkuma, Ingwer
- **Grüner Tee:** Catechine (starke Antioxidantien)

**Hydration nach dem Training:**
- **Regel:** 1,5x Gewichtsverlust in ml trinken
- **Beispiel:** 1 kg Gewichtsverlust = 1,5 Liter trinken
- **Elektrolyte:** Bei Läufen >60 Min oder starkem Schwitzen
- **Urinfarbe:** Hellgelb = gut hydriert

---
### Aktive Regeneration: Bewegen ohne Belasten 🚶

**Was ist aktive Regeneration?**
- Leichte Bewegung, die Durchblutung fördert ohne zu belasten
- Hilft beim Abtransport von Stoffwechselprodukten
- Lockert Muskeln, reduziert Steifheit
- Mental entspannend

**Aktive Regenerations-Methoden:**

**1. Recovery Run (Regenerationslauf):**
- **Tempo:** Sehr langsam (Zone 1, Konversationstempo++)
- **Dauer:** 20-40 Minuten
- **Herzfrequenz:** <60% maxHF
- **Gefühl:** Sollte sich leicht anfühlen, nicht anstrengend
- **Häufigkeit:** 1-2x pro Woche (Tag nach hartem Training)

**2. Spazieren gehen:**
- **Tempo:** Gemütlich
- **Dauer:** 30-60 Minuten
- **Effekt:** Durchblutung, mental entspannend
- **Ideal:** An Ruhetagen

**3. Yoga für Läufer:**
- **Fokus:** Dehnung, Mobilität, Entspannung
- **Dauer:** 20-45 Minuten
- **Stile:** Yin Yoga (passiv), Hatha Yoga (sanft)
- **Häufigkeit:** 1-2x pro Woche

**4. Schwimmen:**
- **Tempo:** Locker
- **Dauer:** 20-30 Minuten
- **Effekt:** Gelenkschonend, Durchblutung
- **Ideal:** Nach harten Läufen

**5. Radfahren (leicht):**
- **Tempo:** Sehr locker (niedriger Gang)
- **Dauer:** 30-45 Minuten
- **Effekt:** Beine bewegen ohne Impact
- **Ideal:** Tag nach Long Run

<div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl border border-purple-200 dark:border-purple-700 my-6">
  <h4 className="font-bold text-purple-800 dark:text-purple-200 mb-4">📋 Beispiel-Woche mit Regeneration</h4>
  <div className="space-y-2 text-sm text-purple-700 dark:text-purple-300">
    <p><strong>Montag:</strong> Easy Run 8 km</p>
    <p><strong>Dienstag:</strong> Intervall-Training (hart)</p>
    <p><strong>Mittwoch:</strong> Recovery Run 5 km (sehr langsam) + Yoga 20 Min</p>
    <p><strong>Donnerstag:</strong> Tempo Run 10 km</p>
    <p><strong>Freitag:</strong> Ruhetag (Spazieren 30 Min)</p>
    <p><strong>Samstag:</strong> Long Run 18 km</p>
    <p><strong>Sonntag:</strong> Aktive Regeneration: Schwimmen 30 Min oder Radfahren 45 Min</p>
  </div>
</div>

---
### Ruhetage: Komplette Pause ist okay! 🛋️

**Warum komplette Ruhetage wichtig sind:**
- Körper braucht Zeit für tiefe Regeneration
- Nervensystem erholt sich
- Mental wichtig (Motivation bleibt hoch)
- Verletzungsprävention

**Wie viele Ruhetage?**
- **Anfänger:** 2-3 Ruhetage pro Woche
- **Fortgeschrittene:** 1-2 Ruhetage pro Woche
- **Elite:** 1 Ruhetag pro Woche (+ aktive Regeneration)

**Was tun an Ruhetagen?**
- **Ideal:** Leichte Bewegung (Spazieren, Dehnen)
- **Okay:** Komplett nichts (auf Couch liegen)
- **Nicht:** Andere intensive Sportarten (Fußball, Tennis, etc.)

**Deload-Wochen:**
- Alle 3-4 Wochen: Volumen um 40-50% reduzieren
- Intensität kann bleiben, aber weniger Umfang
- Körper kann "aufholen" mit Regeneration
- Danach oft Performance-Sprung!

---
### Regenerations-Extras: Das Sahnehäubchen 🎁

**Foam Rolling (Selbstmassage):**
- **Effekt:** Löst Verspannungen, verbessert Durchblutung
- **Dauer:** 10-15 Minuten
- **Häufigkeit:** 3-5x pro Woche
- **Mehr Details:** Siehe Modul 6.4

**Massage:**
- **Sportmassage:** 1x pro Monat (bei intensivem Training)
- **Effekt:** Tiefe Entspannung, löst Verklebungen
- **Kosten:** 50-80€ pro Stunde

**Kompressionskleidung:**
- **Effekt:** Umstritten, aber viele Läufer schwören darauf
- **Theorie:** Verbesserte Durchblutung, weniger Muskelschädigung
- **Anwendung:** Nach hartem Training für 2-4 Stunden

**Kälte-Therapie (Eisbad):**
- **Temperatur:** 10-15°C
- **Dauer:** 10-15 Minuten
- **Effekt:** Reduziert Entzündungen, Muskelschmerzen
- **Achtung:** Nicht für jeden! Kann Regeneration auch hemmen

**Wärme-Therapie (Sauna):**
- **Temperatur:** 80-90°C
- **Dauer:** 10-15 Minuten, 2-3 Durchgänge
- **Effekt:** Entspannung, Durchblutung
- **Timing:** Nicht direkt nach hartem Training (Entzündung!)

<div className="bg-amber-50 dark:bg-amber-900/20 p-6 rounded-xl border border-amber-200 dark:border-amber-700 my-6">
  <h4 className="font-bold text-amber-800 dark:text-amber-200 mb-4">💡 Regenerations-Prioritäten</h4>
  <p className="text-sm text-amber-700 dark:text-amber-300 mb-3">
    Fokussiere auf die Basics, bevor du Extras machst:
  </p>
  <ol className="list-decimal list-inside space-y-2 text-sm text-amber-700 dark:text-amber-300">
    <li><strong>Schlaf:</strong> 7-9 Stunden pro Nacht (wichtigster Faktor!)</li>
    <li><strong>Ernährung:</strong> Post-Workout-Mahlzeit innerhalb 60 Min</li>
    <li><strong>Ruhetage:</strong> 1-2 pro Woche einhalten</li>
    <li><strong>Aktive Regeneration:</strong> Recovery Runs, Spazieren</li>
    <li><strong>Extras:</strong> Foam Rolling, Massage, Sauna (nice to have)</li>
  </ol>
</div>

---
### Regeneration tracken & optimieren 📊

**Ruheherzfrequenz (RHR) - Der beste Indikator:**
- **Messen:** Morgens direkt nach Aufwachen (noch im Bett)
- **Baseline:** Durchschnitt über 7 Tage
- **Erhöht (+5-10 bpm):** Schlechte Regeneration, Übertraining, Krankheit
- **Normal:** Gute Regeneration
- **Niedriger:** Fitness verbessert sich

**Subjektive Indikatoren:**
- **Müdigkeit:** Fühlst du dich erholt?
- **Motivation:** Hast du Lust zu laufen?
- **Muskelkater:** Wie stark? (leicht okay, stark = mehr Ruhe)
- **Schlafqualität:** Gut durchgeschlafen?
- **Appetit:** Normal? (Übertraining = Appetitverlust)

**HRV (Heart Rate Variability):**
- **Was:** Variation zwischen Herzschlägen
- **Hoch:** Gute Regeneration, Parasympathikus aktiv
- **Niedrig:** Schlechte Regeneration, Stress
- **Messen:** Mit Apps (HRV4Training, Elite HRV)

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border-2 border-green-300 dark:border-green-700 my-6">
  <h4 className="font-bold text-green-800 dark:text-green-200 mb-4">🎯 4-Wochen Regenerations-Optimierung</h4>
  <div className="space-y-3 text-sm text-green-700 dark:text-green-300">
    <p><strong>Woche 1:</strong> Baseline - Tracke Ruheherzfrequenz, Schlaf, subjektives Gefühl</p>
    <p><strong>Woche 2:</strong> Schlaf optimieren - Feste Zeiten, dunkles Zimmer, kein Bildschirm</p>
    <p><strong>Woche 3:</strong> Ernährung - Post-Workout-Mahlzeit innerhalb 60 Min, mehr Antioxidantien</p>
    <p><strong>Woche 4:</strong> Aktive Regeneration - 2x Recovery Run, 1x Yoga, 1 Deload-Woche</p>
  </div>
</div>

---
### Zusammenfassung

**Key Takeaways:**
- 💤 **Schlaf ist König:** 7-9 Stunden, Qualität vor Quantität
- 🍽️ **Post-Workout-Mahlzeit:** 20-30g Protein + 40-60g Kohlenhydrate innerhalb 60 Min
- 🚶 **Aktive Regeneration:** Recovery Runs, Spazieren, Yoga (Durchblutung!)
- 🛋️ **Ruhetage:** 1-2 pro Woche sind essentiell, nicht optional
- 📊 **Tracken:** Ruheherzfrequenz morgens (Indikator für Regeneration)
- 🔄 **Deload:** Alle 3-4 Wochen Volumen reduzieren
- 🎁 **Extras:** Foam Rolling, Massage, Sauna (nach Basics!)

**Nächste Schritte:**
1. Tracke deine Ruheherzfrequenz jeden Morgen (7 Tage Baseline)
2. Optimiere deinen Schlaf (feste Zeiten, dunkles Zimmer)
3. Plane Post-Workout-Mahlzeiten (Protein + Kohlenhydrate)
4. Integriere 1-2 Ruhetage pro Woche (nicht verhandelbar!)
5. Teste aktive Regeneration (Recovery Run nach hartem Training)

Erinnere dich: **Du wirst nicht während des Trainings stärker, sondern während der Regeneration!** 💪
    `,
    en: `
### Regeneration & Recovery: The Secret to Progress! 💤

Training breaks down the body - recovery builds it stronger! Many runners train too much and recover too little. This module shows why rest is as important as training and how to optimize recovery.

---
### Why Regeneration is So Important

**The Truth About Progress:**
- Training = Stimulus (body is stressed)
- Regeneration = Adaptation (body gets stronger)
- **Progress happens during rest, not during training!**

**What Happens During Regeneration?**
- **Muscle Repair:** Micro-tears heal, muscles get stronger
- **Glycogen Replenishment:** Energy stores refilled
- **Hormone Balance:** Testosterone rises, cortisol drops
- **Nervous System:** Parasympathetic (rest mode) activated
- **Immune System:** Strengthens, inflammation heals

<div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-xl border border-red-200 dark:border-red-700 my-6">
  <h4 className="font-bold text-red-800 dark:text-red-200 mb-4">⚠️ Without Regeneration: Overtraining!</h4>
  <p className="text-sm text-red-700 dark:text-red-300 mb-3">
    Too much training + too little rest = Overtraining Syndrome
  </p>
  <p className="text-sm text-red-700 dark:text-red-300">
    Symptoms: Chronic fatigue, worse performance, frequent illness, lack of motivation, elevated resting heart rate, sleep problems
  </p>
</div>

**The Recovery Pyramid:**

<table className="w-full border-collapse my-6">
  <thead>
    <tr className="bg-gray-100 dark:bg-gray-800">
      <th className="border p-3 text-left">Level</th>
      <th className="border p-3 text-left">Method</th>
      <th className="border p-3 text-left">Importance</th>
      <th className="border p-3 text-left">Frequency</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td className="border p-3"><strong>1. Foundation</strong></td>
      <td className="border p-3">Sleep (7-9 hrs)</td>
      <td className="border p-3">⭐⭐⭐⭐⭐</td>
      <td className="border p-3">Daily</td>
    </tr>
    <tr>
      <td className="border p-3"><strong>2. Nutrition</strong></td>
      <td className="border p-3">Protein + carbs after training</td>
      <td className="border p-3">⭐⭐⭐⭐⭐</td>
      <td className="border p-3">After every workout</td>
    </tr>
    <tr>
      <td className="border p-3"><strong>3. Rest Days</strong></td>
      <td className="border p-3">1-2 complete rest days/week</td>
      <td className="border p-3">⭐⭐⭐⭐</td>
      <td className="border p-3">Weekly</td>
    </tr>
    <tr>
      <td className="border p-3"><strong>4. Active Recovery</strong></td>
      <td className="border p-3">Easy runs, walking, yoga</td>
      <td className="border p-3">⭐⭐⭐⭐</td>
      <td className="border p-3">2-3x/week</td>
    </tr>
    <tr>
      <td className="border p-3"><strong>5. Extras</strong></td>
      <td className="border p-3">Massage, foam rolling, ice bath</td>
      <td className="border p-3">⭐⭐⭐</td>
      <td className="border p-3">Optional</td>
    </tr>
  </tbody>
</table>

---
### Sleep: The Most Powerful Recovery Tool 😴

**Why Sleep is So Important:**
- **Growth Hormone:** Released mainly in deep sleep
- **Muscle Repair:** Happens primarily during sleep
- **Memory:** Training is "saved" (motor learning)
- **Immune System:** Strengthens during sleep
- **Cortisol Reduction:** Stress hormone drops

**Optimal Sleep for Runners:**
- **Duration:** 7-9 hours per night (individual!)
- **Quality:** Sleeping through more important than duration
- **Timing:** Regular sleep times (circadian rhythm)
- **Deep Sleep:** First 3-4 hours most important

**Sleep Optimization - The Basics:**

<div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-700 my-6">
  <h4 className="font-bold text-blue-800 dark:text-blue-200 mb-4">💡 Sleep Hygiene for Runners</h4>
  <ul className="list-disc list-inside space-y-2 text-sm text-blue-700 dark:text-blue-300">
    <li><strong>Darkness:</strong> Completely dark room (melatonin production)</li>
    <li><strong>Temperature:</strong> 16-19°C ideal for sleep</li>
    <li><strong>No screens:</strong> 1 hr before sleep (blue light inhibits melatonin)</li>
    <li><strong>No caffeine:</strong> Avoid after 2 PM (half-life 6 hrs)</li>
    <li><strong>Routine:</strong> Same bedtime every day (weekends too!)</li>
    <li><strong>No intense training:</strong> 3-4 hrs before sleep (adrenaline)</li>
    <li><strong>Relaxation:</strong> Reading, meditation, light stretching</li>
  </ul>
</div>

**Power Naps - The Turbo Boost:**
- **Duration:** 20-30 minutes (not longer! Otherwise deep sleep)
- **Timing:** Early afternoon (1-3 PM)
- **Effect:** Reduces fatigue, improves performance
- **Ideal:** After hard training or with sleep deficit

**Track Sleep:**
- Measure resting heart rate in morning (elevated = poor recovery)
- Sleep apps (sleep phases, quality)
- Subjective feeling (how do you feel?)

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border border-green-200 dark:border-green-700 my-6">
  <h4 className="font-bold text-green-800 dark:text-green-200 mb-4">🎯 Practical Exercise: Sleep Experiment</h4>
  <p className="text-sm text-green-700 dark:text-green-300 mb-3">
    <strong>Week 1-2:</strong> Track your sleep (duration, quality, resting heart rate in morning)
  </p>
  <p className="text-sm text-green-700 dark:text-green-300 mb-3">
    <strong>Week 3-4:</strong> Optimize: Fixed bedtime, dark room, no screens 1 hr before
  </p>
  <p className="text-sm text-green-700 dark:text-green-300">
    <strong>Compare:</strong> How has your performance changed?
  </p>
</div>

---
### Nutrition for Recovery 🍽️

**The Post-Workout Meal:**
- **Timing:** Within 30-60 minutes after training (anabolic window)
- **Protein:** 20-30g (muscle repair)
- **Carbohydrates:** 40-60g (glycogen replenishment)
- **Ratio:** 1:2 to 1:3 (protein:carbs)

**Examples of Post-Workout Meals:**

<table className="w-full border-collapse my-6">
  <thead>
    <tr className="bg-gray-100 dark:bg-gray-800">
      <th className="border p-3 text-left">Meal</th>
      <th className="border p-3 text-left">Protein</th>
      <th className="border p-3 text-left">Carbs</th>
      <th className="border p-3 text-left">Simplicity</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td className="border p-3">Protein shake + banana</td>
      <td className="border p-3">25g</td>
      <td className="border p-3">30g</td>
      <td className="border p-3">⭐⭐⭐⭐⭐</td>
    </tr>
    <tr>
      <td className="border p-3">Greek yogurt + granola + berries</td>
      <td className="border p-3">20g</td>
      <td className="border p-3">45g</td>
      <td className="border p-3">⭐⭐⭐⭐⭐</td>
    </tr>
    <tr>
      <td className="border p-3">Scrambled eggs (2) + toast + avocado</td>
      <td className="border p-3">18g</td>
      <td className="border p-3">40g</td>
      <td className="border p-3">⭐⭐⭐⭐</td>
    </tr>
    <tr>
      <td className="border p-3">Chicken + rice + vegetables</td>
      <td className="border p-3">30g</td>
      <td className="border p-3">50g</td>
      <td className="border p-3">⭐⭐⭐</td>
    </tr>
    <tr>
      <td className="border p-3">Tuna sandwich + fruit</td>
      <td className="border p-3">25g</td>
      <td className="border p-3">45g</td>
      <td className="border p-3">⭐⭐⭐⭐</td>
    </tr>
  </tbody>
</table>

**Antioxidants - The Inflammation Killers:**
- **Berries:** Blueberries, raspberries (high ORAC value)
- **Dark leafy greens:** Spinach, kale
- **Nuts:** Walnuts, almonds
- **Spices:** Turmeric, ginger
- **Green tea:** Catechins (strong antioxidants)

**Hydration After Training:**
- **Rule:** Drink 1.5x weight loss in ml
- **Example:** 1 kg weight loss = 1.5 liters drink
- **Electrolytes:** For runs >60 min or heavy sweating
- **Urine color:** Light yellow = well hydrated

---
### Active Recovery: Moving Without Stressing 🚶

**What is Active Recovery?**
- Light movement that promotes circulation without stressing
- Helps remove metabolic waste products
- Loosens muscles, reduces stiffness
- Mentally relaxing

**Active Recovery Methods:**

**1. Recovery Run:**
- **Pace:** Very slow (Zone 1, conversational pace++)
- **Duration:** 20-40 minutes
- **Heart Rate:** <60% maxHR
- **Feel:** Should feel easy, not strenuous
- **Frequency:** 1-2x per week (day after hard training)

**2. Walking:**
- **Pace:** Leisurely
- **Duration:** 30-60 minutes
- **Effect:** Circulation, mentally relaxing
- **Ideal:** On rest days

**3. Yoga for Runners:**
- **Focus:** Stretching, mobility, relaxation
- **Duration:** 20-45 minutes
- **Styles:** Yin yoga (passive), Hatha yoga (gentle)
- **Frequency:** 1-2x per week

**4. Swimming:**
- **Pace:** Easy
- **Duration:** 20-30 minutes
- **Effect:** Low-impact, circulation
- **Ideal:** After hard runs

**5. Cycling (easy):**
- **Pace:** Very easy (low gear)
- **Duration:** 30-45 minutes
- **Effect:** Move legs without impact
- **Ideal:** Day after long run

<div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl border border-purple-200 dark:border-purple-700 my-6">
  <h4 className="font-bold text-purple-800 dark:text-purple-200 mb-4">📋 Sample Week with Recovery</h4>
  <div className="space-y-2 text-sm text-purple-700 dark:text-purple-300">
    <p><strong>Monday:</strong> Easy run 8 km</p>
    <p><strong>Tuesday:</strong> Interval training (hard)</p>
    <p><strong>Wednesday:</strong> Recovery run 5 km (very slow) + yoga 20 min</p>
    <p><strong>Thursday:</strong> Tempo run 10 km</p>
    <p><strong>Friday:</strong> Rest day (walk 30 min)</p>
    <p><strong>Saturday:</strong> Long run 18 km</p>
    <p><strong>Sunday:</strong> Active recovery: Swimming 30 min or cycling 45 min</p>
  </div>
</div>

---
### Rest Days: Complete Rest is Okay! 🛋️

**Why Complete Rest Days are Important:**
- Body needs time for deep recovery
- Nervous system recovers
- Mentally important (motivation stays high)
- Injury prevention

**How Many Rest Days?**
- **Beginners:** 2-3 rest days per week
- **Intermediate:** 1-2 rest days per week
- **Elite:** 1 rest day per week (+ active recovery)

**What to Do on Rest Days?**
- **Ideal:** Light movement (walking, stretching)
- **Okay:** Complete nothing (couch potato)
- **Not:** Other intense sports (soccer, tennis, etc.)

**Deload Weeks:**
- Every 3-4 weeks: Reduce volume by 40-50%
- Intensity can stay, but less volume
- Body can "catch up" with recovery
- Often performance jump afterward!

---
### Recovery Extras: The Cherry on Top 🎁

**Foam Rolling (Self-Massage):**
- **Effect:** Releases tension, improves circulation
- **Duration:** 10-15 minutes
- **Frequency:** 3-5x per week
- **More Details:** See Module 6.4

**Massage:**
- **Sports Massage:** 1x per month (with intense training)
- **Effect:** Deep relaxation, releases adhesions
- **Cost:** $50-80 per hour

**Compression Clothing:**
- **Effect:** Controversial, but many runners swear by it
- **Theory:** Improved circulation, less muscle damage
- **Use:** After hard training for 2-4 hours

**Cold Therapy (Ice Bath):**
- **Temperature:** 10-15°C
- **Duration:** 10-15 minutes
- **Effect:** Reduces inflammation, muscle soreness
- **Caution:** Not for everyone! Can also inhibit recovery

**Heat Therapy (Sauna):**
- **Temperature:** 80-90°C
- **Duration:** 10-15 minutes, 2-3 rounds
- **Effect:** Relaxation, circulation
- **Timing:** Not directly after hard training (inflammation!)

<div className="bg-amber-50 dark:bg-amber-900/20 p-6 rounded-xl border border-amber-200 dark:border-amber-700 my-6">
  <h4 className="font-bold text-amber-800 dark:text-amber-200 mb-4">💡 Recovery Priorities</h4>
  <p className="text-sm text-amber-700 dark:text-amber-300 mb-3">
    Focus on basics before doing extras:
  </p>
  <ol className="list-decimal list-inside space-y-2 text-sm text-amber-700 dark:text-amber-300">
    <li><strong>Sleep:</strong> 7-9 hours per night (most important factor!)</li>
    <li><strong>Nutrition:</strong> Post-workout meal within 60 min</li>
    <li><strong>Rest Days:</strong> Keep 1-2 per week</li>
    <li><strong>Active Recovery:</strong> Recovery runs, walking</li>
    <li><strong>Extras:</strong> Foam rolling, massage, sauna (nice to have)</li>
  </ol>
</div>

---
### Track & Optimize Recovery 📊

**Resting Heart Rate (RHR) - The Best Indicator:**
- **Measure:** In morning right after waking (still in bed)
- **Baseline:** Average over 7 days
- **Elevated (+5-10 bpm):** Poor recovery, overtraining, illness
- **Normal:** Good recovery
- **Lower:** Fitness improving

**Subjective Indicators:**
- **Fatigue:** Do you feel recovered?
- **Motivation:** Do you want to run?
- **Muscle Soreness:** How strong? (light okay, severe = more rest)
- **Sleep Quality:** Slept well?
- **Appetite:** Normal? (overtraining = loss of appetite)

**HRV (Heart Rate Variability):**
- **What:** Variation between heartbeats
- **High:** Good recovery, parasympathetic active
- **Low:** Poor recovery, stress
- **Measure:** With apps (HRV4Training, Elite HRV)

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border-2 border-green-300 dark:border-green-700 my-6">
  <h4 className="font-bold text-green-800 dark:text-green-200 mb-4">🎯 4-Week Recovery Optimization</h4>
  <div className="space-y-3 text-sm text-green-700 dark:text-green-300">
    <p><strong>Week 1:</strong> Baseline - Track resting heart rate, sleep, subjective feeling</p>
    <p><strong>Week 2:</strong> Optimize sleep - Fixed times, dark room, no screens</p>
    <p><strong>Week 3:</strong> Nutrition - Post-workout meal within 60 min, more antioxidants</p>
    <p><strong>Week 4:</strong> Active recovery - 2x recovery run, 1x yoga, 1 deload week</p>
  </div>
</div>

---
### Summary

**Key Takeaways:**
- 💤 **Sleep is King:** 7-9 hours, quality over quantity
- 🍽️ **Post-Workout Meal:** 20-30g protein + 40-60g carbs within 60 min
- 🚶 **Active Recovery:** Recovery runs, walking, yoga (circulation!)
- 🛋️ **Rest Days:** 1-2 per week are essential, not optional
- 📊 **Track:** Resting heart rate in morning (recovery indicator)
- 🔄 **Deload:** Every 3-4 weeks reduce volume
- 🎁 **Extras:** Foam rolling, massage, sauna (after basics!)

**Next Steps:**
1. Track your resting heart rate every morning (7-day baseline)
2. Optimize your sleep (fixed times, dark room)
3. Plan post-workout meals (protein + carbs)
4. Integrate 1-2 rest days per week (non-negotiable!)
5. Test active recovery (recovery run after hard training)

Remember: **You don't get stronger during training, but during recovery!** 💪
    `
  }
};

