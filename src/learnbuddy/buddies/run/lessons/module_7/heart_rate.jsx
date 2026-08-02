import React from 'react';

export const heartRateLesson = {
  id: 'r7_m1_heart_rate',
  title: { 
    en: '7.1 Heart Rate Training', 
    de: '7.1 Herzfrequenz-Training' 
  },
  description: { 
    en: 'Master heart rate zone training, the MAF method, threshold training, and using heart rate monitors for optimal performance.', 
    de: 'Meistere Herzfrequenz-Zonentraining, die MAF-Methode, Schwellentraining und die Nutzung von Herzfrequenzmessern für optimale Performance.' 
  },
  category: 'performance',
  
  content: {
    de: `
### Herzfrequenz-Training: Trainiere smart, nicht nur hart! ❤️

Die Herzfrequenz ist einer der besten Indikatoren für Trainingsintensität. Statt nach Gefühl zu laufen, kannst du präzise in der richtigen Zone trainieren. Dieser Modul zeigt Herzfrequenz-Zonen, die MAF-Methode und wie du einen Brustgurt oder eine Uhr optimal nutzt.

---
### Herzfrequenz-Zonen verstehen

**Maximale Herzfrequenz (maxHF) bestimmen:**
- **Formel:** 220 - Alter (ungenau, aber einfach)
- **Besser:** 208 - (0,7 × Alter) (Tanaka-Formel)
- **Am besten:** Feldtest (5 Min Aufwärmen → 3 Min All-Out → höchster Wert)
- **Professionell:** Leistungsdiagnostik beim Sportarzt

<table className="w-full border-collapse my-6">
  <thead>
    <tr className="bg-gray-100 dark:bg-gray-800">
      <th className="border p-3 text-left">Zone</th>
      <th className="border p-3 text-left">% maxHF</th>
      <th className="border p-3 text-left">Beschreibung</th>
      <th className="border p-3 text-left">Gefühl</th>
      <th className="border p-3 text-left">Trainingseffekt</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td className="border p-3"><strong>Zone 1</strong></td>
      <td className="border p-3">50-60%</td>
      <td className="border p-3">Recovery</td>
      <td className="border p-3">Sehr leicht, Spazieren</td>
      <td className="border p-3">Aktive Erholung</td>
    </tr>
    <tr>
      <td className="border p-3"><strong>Zone 2</strong></td>
      <td className="border p-3">60-70%</td>
      <td className="border p-3">Aerobic/Easy</td>
      <td className="border p-3">Konversationstempo</td>
      <td className="border p-3">Fettverbrennung, Ausdauer</td>
    </tr>
    <tr>
      <td className="border p-3"><strong>Zone 3</strong></td>
      <td className="border p-3">70-80%</td>
      <td className="border p-3">Moderate</td>
      <td className="border p-3">Anstrengend, kurze Sätze</td>
      <td className="border p-3">Aerobe Kapazität</td>
    </tr>
    <tr>
      <td className="border p-3"><strong>Zone 4</strong></td>
      <td className="border p-3">80-90%</td>
      <td className="border p-3">Threshold</td>
      <td className="border p-3">Hart, kaum reden</td>
      <td className="border p-3">Laktatschwelle</td>
    </tr>
    <tr>
      <td className="border p-3"><strong>Zone 5</strong></td>
      <td className="border p-3">90-100%</td>
      <td className="border p-3">VO2max</td>
      <td className="border p-3">Maximal, kein Reden</td>
      <td className="border p-3">Maximale Leistung</td>
    </tr>
  </tbody>
</table>

<div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-700 my-6">
  <h4 className="font-bold text-blue-800 dark:text-blue-200 mb-4">💡 Die 80/20-Regel</h4>
  <p className="text-sm text-blue-700 dark:text-blue-300">
    <strong>80% Zone 1-2</strong> (leicht) + <strong>20% Zone 3-5</strong> (intensiv). Die meisten Hobbyläufer trainieren zu viel in Zone 3 (zu schnell für Easy, zu langsam für Tempo). Das Ergebnis: Übertraining ohne maximalen Fortschritt.
  </p>
</div>

---
### Die MAF-Methode (Maximum Aerobic Function)

**Was ist MAF?**
- Von Dr. Phil Maffetone entwickelt
- Trainiere ausschließlich in der aeroben Zone
- MAF-Herzfrequenz = 180 - Alter (± Anpassungen)
- Baue eine massive aerobe Basis auf

**MAF-Formel:**
- Basis: 180 - dein Alter
- +5 wenn du >2 Jahre verletzungsfrei trainierst
- -5 wenn du häufig krank/verletzt bist
- -10 wenn du Anfänger bist

**Beispiel (Alter 35):**
- MAF = 180 - 35 = 145 bpm
- Dein Training: Alle Easy Runs unter 145 bpm

**Vorteile:**
- Verletzungsprävention (immer aerob)
- Langfristiger Fortschritt (aerobe Basis wächst)
- Fettverbrennung optimiert
- Keine Übertraining-Gefahr

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border border-green-200 dark:border-green-700 my-6">
  <h4 className="font-bold text-green-800 dark:text-green-200 mb-4">🎯 MAF-Test</h4>
  <p className="text-sm text-green-700 dark:text-green-300 mb-3">
    Monatlicher Test: Laufe 5 km auf flacher Strecke mit exakt deiner MAF-Herzfrequenz. Tracke die Zeit.
  </p>
  <p className="text-sm text-green-700 dark:text-green-300">
    <strong>Wenn du schneller wirst bei gleicher HF = aerobe Fitness verbessert sich!</strong> Das ist der beste Indikator für Fortschritt.
  </p>
</div>

---
### Schwellentraining (Threshold Training)

**Was ist die Laktatschwelle?**
- Intensität, bei der Laktat schneller produziert wird als abgebaut
- Ungefähr Zone 4 (80-90% maxHF)
- Tempo, das du ca. 60 Min halten kannst
- Verbesserung = schneller bei gleicher HF

**Threshold-Workouts:**
- **Tempo Run:** 20-30 Min bei Schwellenherzfrequenz
- **Cruise Intervals:** 3-4x 8 Min bei Schwelle, 2 Min Pause
- **Progression Run:** Letzte 15-20 Min in Schwellenzone

**Herzfrequenz-Monitoring:**

<table className="w-full border-collapse my-6">
  <thead>
    <tr className="bg-gray-100 dark:bg-gray-800">
      <th className="border p-3 text-left">Gerät</th>
      <th className="border p-3 text-left">Genauigkeit</th>
      <th className="border p-3 text-left">Komfort</th>
      <th className="border p-3 text-left">Preis</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td className="border p-3"><strong>Brustgurt</strong></td>
      <td className="border p-3">⭐⭐⭐⭐⭐</td>
      <td className="border p-3">⭐⭐⭐</td>
      <td className="border p-3">40-80€</td>
    </tr>
    <tr>
      <td className="border p-3"><strong>Optische Uhr (Handgelenk)</strong></td>
      <td className="border p-3">⭐⭐⭐</td>
      <td className="border p-3">⭐⭐⭐⭐⭐</td>
      <td className="border p-3">200-500€</td>
    </tr>
    <tr>
      <td className="border p-3"><strong>Armband-Sensor</strong></td>
      <td className="border p-3">⭐⭐⭐⭐</td>
      <td className="border p-3">⭐⭐⭐⭐</td>
      <td className="border p-3">80-100€</td>
    </tr>
  </tbody>
</table>

<div className="bg-amber-50 dark:bg-amber-900/20 p-6 rounded-xl border border-amber-200 dark:border-amber-700 my-6">
  <h4 className="font-bold text-amber-800 dark:text-amber-200 mb-4">⚠️ Herzfrequenz-Fallen</h4>
  <ul className="list-disc list-inside space-y-2 text-sm text-amber-700 dark:text-amber-300">
    <li><strong>Koffein:</strong> Erhöht HF um 5-10 bpm</li>
    <li><strong>Hitze:</strong> HF steigt bei gleicher Anstrengung (Cardiac Drift)</li>
    <li><strong>Schlafmangel:</strong> Erhöhte Ruheherzfrequenz</li>
    <li><strong>Stress:</strong> HF kann grundlos erhöht sein</li>
    <li><strong>Medikamente:</strong> Betablocker senken HF künstlich</li>
  </ul>
</div>

---
### Zusammenfassung

**Key Takeaways:**
- ❤️ **Zonen kennen:** 5 Zonen von Recovery (50-60%) bis VO2max (90-100%)
- 📊 **80/20-Regel:** 80% leicht (Zone 1-2), 20% intensiv (Zone 3-5)
- 🏃 **MAF-Methode:** 180 - Alter = maximale aerobe HF, monatlich testen
- 🎯 **Threshold:** Zone 4, Tempo/Cruise Intervals für Laktatschwelle
- ⌚ **Equipment:** Brustgurt am genauesten, Uhr am bequemsten
- ⚠️ **Beachte:** Koffein, Hitze, Stress beeinflussen HF

**Starte heute:** Berechne deine Zonen und laufe einen Easy Run nur nach Herzfrequenz! 🏃‍♂️
    `,
    en: `
### Heart Rate Training: Train Smart, Not Just Hard! ❤️

Heart rate is one of the best indicators of training intensity. Instead of running by feel, you can precisely train in the right zone. This module covers heart rate zones, the MAF method, and how to optimally use a chest strap or watch.

---
### Understanding Heart Rate Zones

**Determining Maximum Heart Rate (maxHR):**
- **Formula:** 220 - age (inaccurate, but simple)
- **Better:** 208 - (0.7 × age) (Tanaka formula)
- **Best:** Field test (5 min warm-up → 3 min all-out → highest value)
- **Professional:** Performance diagnostics with sports doctor

<table className="w-full border-collapse my-6">
  <thead>
    <tr className="bg-gray-100 dark:bg-gray-800">
      <th className="border p-3 text-left">Zone</th>
      <th className="border p-3 text-left">% maxHR</th>
      <th className="border p-3 text-left">Description</th>
      <th className="border p-3 text-left">Feel</th>
      <th className="border p-3 text-left">Training Effect</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td className="border p-3"><strong>Zone 1</strong></td>
      <td className="border p-3">50-60%</td>
      <td className="border p-3">Recovery</td>
      <td className="border p-3">Very easy, walking</td>
      <td className="border p-3">Active recovery</td>
    </tr>
    <tr>
      <td className="border p-3"><strong>Zone 2</strong></td>
      <td className="border p-3">60-70%</td>
      <td className="border p-3">Aerobic/Easy</td>
      <td className="border p-3">Conversational pace</td>
      <td className="border p-3">Fat burning, endurance</td>
    </tr>
    <tr>
      <td className="border p-3"><strong>Zone 3</strong></td>
      <td className="border p-3">70-80%</td>
      <td className="border p-3">Moderate</td>
      <td className="border p-3">Strenuous, short sentences</td>
      <td className="border p-3">Aerobic capacity</td>
    </tr>
    <tr>
      <td className="border p-3"><strong>Zone 4</strong></td>
      <td className="border p-3">80-90%</td>
      <td className="border p-3">Threshold</td>
      <td className="border p-3">Hard, barely talk</td>
      <td className="border p-3">Lactate threshold</td>
    </tr>
    <tr>
      <td className="border p-3"><strong>Zone 5</strong></td>
      <td className="border p-3">90-100%</td>
      <td className="border p-3">VO2max</td>
      <td className="border p-3">Maximum, no talking</td>
      <td className="border p-3">Maximum performance</td>
    </tr>
  </tbody>
</table>

<div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-700 my-6">
  <h4 className="font-bold text-blue-800 dark:text-blue-200 mb-4">💡 The 80/20 Rule</h4>
  <p className="text-sm text-blue-700 dark:text-blue-300">
    <strong>80% Zone 1-2</strong> (easy) + <strong>20% Zone 3-5</strong> (intense). Most recreational runners train too much in Zone 3 (too fast for easy, too slow for tempo). The result: overtraining without maximum progress.
  </p>
</div>

---
### The MAF Method (Maximum Aerobic Function)

**What is MAF?**
- Developed by Dr. Phil Maffetone
- Train exclusively in the aerobic zone
- MAF heart rate = 180 - age (± adjustments)
- Build a massive aerobic base

**MAF Formula:**
- Base: 180 - your age
- +5 if you've trained injury-free for >2 years
- -5 if you're frequently sick/injured
- -10 if you're a beginner

**Example (Age 35):**
- MAF = 180 - 35 = 145 bpm
- Your training: All easy runs under 145 bpm

**Benefits:**
- Injury prevention (always aerobic)
- Long-term progress (aerobic base grows)
- Optimized fat burning
- No overtraining risk

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border border-green-200 dark:border-green-700 my-6">
  <h4 className="font-bold text-green-800 dark:text-green-200 mb-4">🎯 MAF Test</h4>
  <p className="text-sm text-green-700 dark:text-green-300 mb-3">
    Monthly test: Run 5 km on flat course at exactly your MAF heart rate. Track the time.
  </p>
  <p className="text-sm text-green-700 dark:text-green-300">
    <strong>If you get faster at the same HR = aerobic fitness improving!</strong> This is the best indicator of progress.
  </p>
</div>

---
### Threshold Training

**What is Lactate Threshold?**
- Intensity where lactate is produced faster than cleared
- Approximately Zone 4 (80-90% maxHR)
- Pace you can hold for about 60 min
- Improvement = faster at same HR

**Threshold Workouts:**
- **Tempo Run:** 20-30 min at threshold heart rate
- **Cruise Intervals:** 3-4x 8 min at threshold, 2 min rest
- **Progression Run:** Last 15-20 min in threshold zone

**Heart Rate Monitoring Equipment:**

<table className="w-full border-collapse my-6">
  <thead>
    <tr className="bg-gray-100 dark:bg-gray-800">
      <th className="border p-3 text-left">Device</th>
      <th className="border p-3 text-left">Accuracy</th>
      <th className="border p-3 text-left">Comfort</th>
      <th className="border p-3 text-left">Price</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td className="border p-3"><strong>Chest Strap</strong></td>
      <td className="border p-3">⭐⭐⭐⭐⭐</td>
      <td className="border p-3">⭐⭐⭐</td>
      <td className="border p-3">$40-80</td>
    </tr>
    <tr>
      <td className="border p-3"><strong>Optical Watch (Wrist)</strong></td>
      <td className="border p-3">⭐⭐⭐</td>
      <td className="border p-3">⭐⭐⭐⭐⭐</td>
      <td className="border p-3">$200-500</td>
    </tr>
    <tr>
      <td className="border p-3"><strong>Arm Band Sensor</strong></td>
      <td className="border p-3">⭐⭐⭐⭐</td>
      <td className="border p-3">⭐⭐⭐⭐</td>
      <td className="border p-3">$80-100</td>
    </tr>
  </tbody>
</table>

<div className="bg-amber-50 dark:bg-amber-900/20 p-6 rounded-xl border border-amber-200 dark:border-amber-700 my-6">
  <h4 className="font-bold text-amber-800 dark:text-amber-200 mb-4">⚠️ Heart Rate Pitfalls</h4>
  <ul className="list-disc list-inside space-y-2 text-sm text-amber-700 dark:text-amber-300">
    <li><strong>Caffeine:</strong> Raises HR by 5-10 bpm</li>
    <li><strong>Heat:</strong> HR rises at same effort (cardiac drift)</li>
    <li><strong>Sleep deprivation:</strong> Elevated resting heart rate</li>
    <li><strong>Stress:</strong> HR can be elevated without reason</li>
    <li><strong>Medication:</strong> Beta blockers artificially lower HR</li>
  </ul>
</div>

---
### Summary

**Key Takeaways:**
- ❤️ **Know your zones:** 5 zones from recovery (50-60%) to VO2max (90-100%)
- 📊 **80/20 rule:** 80% easy (Zone 1-2), 20% intense (Zone 3-5)
- 🏃 **MAF method:** 180 - age = max aerobic HR, test monthly
- 🎯 **Threshold:** Zone 4, tempo/cruise intervals for lactate threshold
- ⌚ **Equipment:** Chest strap most accurate, watch most comfortable
- ⚠️ **Note:** Caffeine, heat, stress all affect HR

**Start today:** Calculate your zones and run an easy run by heart rate only! 🏃‍♂️
    `
  },

  task: {
    de: {
      title: 'Herzfrequenz-Zonen berechnen und testen',
      description: 'Berechne deine persönlichen HF-Zonen und teste das Training nach Herzfrequenz.',
      checklist: [
        { text: 'Maximale Herzfrequenz bestimmen (Formel oder Feldtest)' },
        { text: 'Alle 5 Zonen berechnen und notieren' },
        { text: 'MAF-Herzfrequenz berechnen (180 - Alter)' },
        { text: 'Easy Run nur nach Zone 2 laufen (HF überwachen)' },
        { text: 'MAF-Test durchführen (5 km bei MAF-HF, Zeit notieren)' },
        { text: 'Ergebnis: War es schwer, in Zone 2 zu bleiben?' }
      ]
    },
    en: {
      title: 'Calculate and Test Heart Rate Zones',
      description: 'Calculate your personal HR zones and test heart rate-based training.',
      checklist: [
        { text: 'Determine maximum heart rate (formula or field test)' },
        { text: 'Calculate and note all 5 zones' },
        { text: 'Calculate MAF heart rate (180 - age)' },
        { text: 'Run easy run by Zone 2 only (monitor HR)' },
        { text: 'Do MAF test (5 km at MAF HR, note time)' },
        { text: 'Reflect: Was it hard to stay in Zone 2?' }
      ]
    }
  },

  notes: {
    de: [
      {
        front: 'Die 5 Herzfrequenz-Zonen?',
        back: 'Z1: 50-60% (Recovery), Z2: 60-70% (Easy/Aerobic), Z3: 70-80% (Moderate), Z4: 80-90% (Threshold), Z5: 90-100% (VO2max).'
      },
      {
        front: 'Was ist die MAF-Methode?',
        back: '180 - Alter = max. aerobe HF. Alle Easy Runs unter dieser HF. Monatlich 5-km-Test bei MAF-HF. Schneller werden bei gleicher HF = Fortschritt!'
      },
      {
        front: '80/20-Regel beim HF-Training?',
        back: '80% der Läufe in Zone 1-2 (leicht, Konversationstempo), 20% in Zone 3-5 (Tempo, Intervalle). Häufigster Fehler: zu viel Zone 3.'
      }
    ],
    en: [
      {
        front: 'The 5 heart rate zones?',
        back: 'Z1: 50-60% (recovery), Z2: 60-70% (easy/aerobic), Z3: 70-80% (moderate), Z4: 80-90% (threshold), Z5: 90-100% (VO2max).'
      },
      {
        front: 'What is the MAF method?',
        back: '180 - age = max aerobic HR. All easy runs under this HR. Monthly 5km test at MAF HR. Getting faster at same HR = progress!'
      },
      {
        front: '80/20 rule in HR training?',
        back: '80% of runs in Zone 1-2 (easy, conversational), 20% in Zone 3-5 (tempo, intervals). Most common mistake: too much Zone 3.'
      }
    ]
  }
};
