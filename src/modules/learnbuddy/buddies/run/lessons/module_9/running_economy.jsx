import React from 'react';

export const runningEconomyLesson = {
  id: 'r9_m2_running_economy',
  title: { 
    en: '9.2 Running Economy', 
    de: '9.2 Laufökonomie' 
  },
  description: { 
    en: 'Optimize cadence, ground contact time, vertical oscillation, and efficiency drills to become a more economical runner.', 
    de: 'Optimiere Schrittfrequenz, Bodenkontaktzeit, vertikale Oszillation und Effizienzübungen, um ein ökonomischerer Läufer zu werden.' 
  },
  category: 'advancedPerformance',
  
  content: {
    de: `
### Laufökonomie: Schneller laufen mit weniger Energie ⚡

Laufökonomie beschreibt, wie viel Sauerstoff du bei einem bestimmten Tempo verbrauchst. Je weniger Sauerstoff du bei gleichem Tempo benötigst, desto ökonomischer läufst du. Zwei Läufer mit identischem VO2max können völlig unterschiedliche Leistungen bringen – die Laufökonomie macht den Unterschied!

---
### Was bestimmt die Laufökonomie?

**Die vier Hauptfaktoren:**

<table className="w-full border-collapse my-6">
  <thead>
    <tr className="bg-gray-100 dark:bg-gray-800">
      <th className="border p-3 text-left">Faktor</th>
      <th className="border p-3 text-left">Optimum</th>
      <th className="border p-3 text-left">Einfluss</th>
      <th className="border p-3 text-left">Trainierbar?</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td className="border p-3"><strong>Schrittfrequenz (Kadenz)</strong></td>
      <td className="border p-3">170-185 spm</td>
      <td className="border p-3">Sehr hoch</td>
      <td className="border p-3">Ja, mit Übung</td>
    </tr>
    <tr>
      <td className="border p-3"><strong>Bodenkontaktzeit</strong></td>
      <td className="border p-3">200-250 ms</td>
      <td className="border p-3">Hoch</td>
      <td className="border p-3">Ja, durch Drills</td>
    </tr>
    <tr>
      <td className="border p-3"><strong>Vertikale Oszillation</strong></td>
      <td className="border p-3">6-10 cm</td>
      <td className="border p-3">Hoch</td>
      <td className="border p-3">Ja, durch Technik</td>
    </tr>
    <tr>
      <td className="border p-3"><strong>Schrittlänge</strong></td>
      <td className="border p-3">Individuell optimal</td>
      <td className="border p-3">Mittel</td>
      <td className="border p-3">Natürlich reguliert</td>
    </tr>
  </tbody>
</table>

---
### Schrittfrequenz (Kadenz) optimieren

**Warum 180 Schritte/Minute?**
- Jack Daniels beobachtete, dass Eliteläufer meist bei 180+ spm laufen
- Höhere Kadenz = kürzere Bodenkontaktzeit = weniger Energieverlust
- Weniger Aufprallkräfte = geringeres Verletzungsrisiko
- ABER: Es gibt kein magisches "180" – dein Optimum ist individuell!

**Deine aktuelle Kadenz messen:**
- GPS-Uhr mit Kadenz-Messung
- Manuell: 30 Sek rechten Fuß zählen × 4
- Typisch für Hobbyläufer: 155-170 spm

**Kadenz verbessern:**
- Nicht sofort 180 erzwingen! Erhöhe um 5% pro Monat
- Metronom-App nutzen (z.B. auf Zieltakt einstellen)
- Schnellere Musik (BPM = Zielkadenz)
- "Quick feet"-Drills: Kurze, schnelle Schritte auf der Stelle

<div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-700 my-6">
  <h4 className="font-bold text-blue-800 dark:text-blue-200 mb-4">💡 Die 5%-Regel</h4>
  <p className="text-sm text-blue-700 dark:text-blue-300">
    Wenn deine Kadenz bei 160 spm liegt, erhöhe auf 168 spm (5%). Laufe 2-3 Wochen damit, bevor du weiter steigerst. Plötzliche Änderungen fühlen sich unnatürlich an und erhöhen das Verletzungsrisiko.
  </p>
</div>

---
### Bodenkontaktzeit (GCT) reduzieren

**Was ist GCT?**
- Ground Contact Time = Zeit, die dein Fuß am Boden verbringt
- Eliteläufer: 180-200 ms
- Hobbyläufer: 250-350 ms
- Je kürzer, desto effizienter (weniger Bremsphase)

**GCT verbessern:**
- Plyometrisches Training (Sprünge, Hüpfer)
- Schnelles Lauf-ABC (Skippings, Anfersen)
- Steigerungsläufe (6-8 × 80-100m)
- Barfuß-Drills auf Rasen
- Krafttraining für Waden und Füße

**Drills für kürzere GCT:**

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border border-green-200 dark:border-green-700 my-6">
  <h4 className="font-bold text-green-800 dark:text-green-200 mb-4">🎯 Effizienz-Drills (2x pro Woche)</h4>
  <ol className="list-decimal list-inside space-y-2 text-sm text-green-700 dark:text-green-300">
    <li><strong>High Knees:</strong> 3 × 30 Sek – Schnell, Knie hoch, kurze Bodenkontaktzeit</li>
    <li><strong>Butt Kicks:</strong> 3 × 30 Sek – Ferse zum Gesäß, schnelle Frequenz</li>
    <li><strong>Bounding:</strong> 3 × 40m – Übertrieben lange, hohe Sprünge</li>
    <li><strong>Steigerungsläufe:</strong> 6 × 80m – Von locker bis 90% Sprint</li>
    <li><strong>Single-Leg Hops:</strong> 3 × 10 pro Bein – Kraftvolle Einbeinsprünge</li>
    <li><strong>Carioca/Seitwärts-Kreuzschritte:</strong> 3 × 30m pro Richtung</li>
  </ol>
</div>

---
### Vertikale Oszillation minimieren

**Was ist vertikale Oszillation?**
- Auf-und-ab-Bewegung deines Körperschwerpunkts beim Laufen
- Eliteläufer: 6-8 cm
- Hobbyläufer: 8-12 cm
- Jeder cm "Hüpfen" kostet Energie, die nicht vorwärts geht

**Strategien zur Reduktion:**
- Vorstellung: "Laufe unter einer niedrigen Decke"
- Vorwärtslehnung statt Aufwärtsbewegung
- Kadenz erhöhen (automatisch weniger Hüpfen)
- Hüftstreckung verbessern (Gluteus aktivieren!)
- "Quiet running" – Möglichst leise laufen

**Der Leise-Lauf-Test:**
- Laufe auf hartem Untergrund
- Höre auf deine Schritte
- Ziel: So leise wie möglich (= weniger Aufprallkraft = weniger Energieverlust)

---
### Effizienz durch Krafttraining

**Die wichtigsten Übungen für Laufökonomie:**

<table className="w-full border-collapse my-6">
  <thead>
    <tr className="bg-gray-100 dark:bg-gray-800">
      <th className="border p-3 text-left">Übung</th>
      <th className="border p-3 text-left">Sets × Reps</th>
      <th className="border p-3 text-left">Ziel</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td className="border p-3">Einbeinige Kniebeugen</td>
      <td className="border p-3">3 × 8 pro Bein</td>
      <td className="border p-3">Beinstabilität</td>
    </tr>
    <tr>
      <td className="border p-3">Wadenheben (einbeinig)</td>
      <td className="border p-3">3 × 15 pro Bein</td>
      <td className="border p-3">Achillessehnen-Steifigkeit</td>
    </tr>
    <tr>
      <td className="border p-3">Glute Bridges</td>
      <td className="border p-3">3 × 12</td>
      <td className="border p-3">Hüftstreckung</td>
    </tr>
    <tr>
      <td className="border p-3">Box Jumps</td>
      <td className="border p-3">3 × 8</td>
      <td className="border p-3">Explosivkraft</td>
    </tr>
    <tr>
      <td className="border p-3">Plank</td>
      <td className="border p-3">3 × 45 Sek</td>
      <td className="border p-3">Rumpfstabilität</td>
    </tr>
  </tbody>
</table>

<div className="bg-amber-50 dark:bg-amber-900/20 p-6 rounded-xl border border-amber-200 dark:border-amber-700 my-6">
  <h4 className="font-bold text-amber-800 dark:text-amber-200 mb-4">⚠️ Wichtig: Sehnen-Steifigkeit</h4>
  <p className="text-sm text-amber-700 dark:text-amber-300">
    Die Achillessehne funktioniert wie eine Feder – sie speichert bei jedem Schritt Energie und gibt sie beim Abstoß zurück. Steifere Sehnen = mehr Energierückgabe = bessere Ökonomie. Plyometrisches Training und Wadenheben verbessern die Sehnen-Steifigkeit über Monate hinweg.
  </p>
</div>

---
### Zusammenfassung

**Key Takeaways:**
- ⚡ **Laufökonomie > VO2max:** Effizienz schlägt rohe Kapazität
- 🦶 **Kadenz:** Schrittweise auf 170-185 spm erhöhen (5% pro Monat)
- ⏱️ **Bodenkontaktzeit:** Drills + Plyometrics für kürzere GCT
- 📐 **Vertikale Oszillation:** "Leise laufen", Kadenz erhöhen, Gluteus aktivieren
- 💪 **Krafttraining:** Einbeinig, Waden, Plyometrics 2x pro Woche
- 🔄 **Langfristiger Prozess:** Ökonomie verbessert sich über Monate und Jahre

**Starte heute:** Miss deine Kadenz beim nächsten Lauf und mache die Effizienz-Drills! 🏃‍♂️
    `,
    en: `
### Running Economy: Run Faster with Less Energy ⚡

Running economy describes how much oxygen you consume at a given pace. The less oxygen you need at the same pace, the more economical you run. Two runners with identical VO2max can perform very differently – running economy makes the difference!

---
### What Determines Running Economy?

**The Four Main Factors:**

<table className="w-full border-collapse my-6">
  <thead>
    <tr className="bg-gray-100 dark:bg-gray-800">
      <th className="border p-3 text-left">Factor</th>
      <th className="border p-3 text-left">Optimum</th>
      <th className="border p-3 text-left">Impact</th>
      <th className="border p-3 text-left">Trainable?</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td className="border p-3"><strong>Cadence (Step Rate)</strong></td>
      <td className="border p-3">170-185 spm</td>
      <td className="border p-3">Very high</td>
      <td className="border p-3">Yes, with practice</td>
    </tr>
    <tr>
      <td className="border p-3"><strong>Ground Contact Time</strong></td>
      <td className="border p-3">200-250 ms</td>
      <td className="border p-3">High</td>
      <td className="border p-3">Yes, through drills</td>
    </tr>
    <tr>
      <td className="border p-3"><strong>Vertical Oscillation</strong></td>
      <td className="border p-3">6-10 cm</td>
      <td className="border p-3">High</td>
      <td className="border p-3">Yes, through technique</td>
    </tr>
    <tr>
      <td className="border p-3"><strong>Stride Length</strong></td>
      <td className="border p-3">Individually optimal</td>
      <td className="border p-3">Medium</td>
      <td className="border p-3">Naturally regulated</td>
    </tr>
  </tbody>
</table>

---
### Optimizing Cadence (Step Rate)

**Why 180 Steps/Minute?**
- Jack Daniels observed that elite runners mostly run at 180+ spm
- Higher cadence = shorter ground contact = less energy loss
- Less impact forces = lower injury risk
- BUT: There is no magic "180" – your optimum is individual!

**Measuring Your Current Cadence:**
- GPS watch with cadence measurement
- Manual: Count right foot for 30 sec × 4
- Typical for recreational runners: 155-170 spm

**Improving Cadence:**
- Don't force 180 immediately! Increase by 5% per month
- Use a metronome app (set to target cadence)
- Faster music (BPM = target cadence)
- "Quick feet" drills: Short, fast steps in place

<div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-700 my-6">
  <h4 className="font-bold text-blue-800 dark:text-blue-200 mb-4">💡 The 5% Rule</h4>
  <p className="text-sm text-blue-700 dark:text-blue-300">
    If your cadence is at 160 spm, increase to 168 spm (5%). Run 2-3 weeks at that rate before increasing further. Sudden changes feel unnatural and increase injury risk.
  </p>
</div>

---
### Reducing Ground Contact Time (GCT)

**What is GCT?**
- Ground Contact Time = time your foot spends on the ground
- Elite runners: 180-200 ms
- Recreational runners: 250-350 ms
- Shorter = more efficient (less braking phase)

**Improving GCT:**
- Plyometric training (jumps, hops)
- Running drills (skipping, butt kicks)
- Strides (6-8 × 80-100m)
- Barefoot drills on grass
- Strength training for calves and feet

**Drills for Shorter GCT:**

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border border-green-200 dark:border-green-700 my-6">
  <h4 className="font-bold text-green-800 dark:text-green-200 mb-4">🎯 Efficiency Drills (2x per week)</h4>
  <ol className="list-decimal list-inside space-y-2 text-sm text-green-700 dark:text-green-300">
    <li><strong>High Knees:</strong> 3 × 30 sec – Fast, knees up, short ground contact</li>
    <li><strong>Butt Kicks:</strong> 3 × 30 sec – Heel to glute, fast frequency</li>
    <li><strong>Bounding:</strong> 3 × 40m – Exaggerated long, high leaps</li>
    <li><strong>Strides:</strong> 6 × 80m – From easy to 90% sprint</li>
    <li><strong>Single-Leg Hops:</strong> 3 × 10 per leg – Powerful single-leg jumps</li>
    <li><strong>Carioca/Lateral Crossovers:</strong> 3 × 30m each direction</li>
  </ol>
</div>

---
### Minimizing Vertical Oscillation

**What is Vertical Oscillation?**
- Up-and-down movement of your center of mass while running
- Elite runners: 6-8 cm
- Recreational runners: 8-12 cm
- Every cm of "bouncing" costs energy that doesn't move you forward

**Strategies to Reduce It:**
- Visualization: "Run under a low ceiling"
- Forward lean instead of upward movement
- Increase cadence (automatically less bouncing)
- Improve hip extension (activate glutes!)
- "Quiet running" – Run as silently as possible

**The Quiet Running Test:**
- Run on a hard surface
- Listen to your footsteps
- Goal: As quiet as possible (= less impact = less energy waste)

---
### Efficiency Through Strength Training

**Key Exercises for Running Economy:**

<table className="w-full border-collapse my-6">
  <thead>
    <tr className="bg-gray-100 dark:bg-gray-800">
      <th className="border p-3 text-left">Exercise</th>
      <th className="border p-3 text-left">Sets × Reps</th>
      <th className="border p-3 text-left">Target</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td className="border p-3">Single-Leg Squats</td>
      <td className="border p-3">3 × 8 per leg</td>
      <td className="border p-3">Leg stability</td>
    </tr>
    <tr>
      <td className="border p-3">Calf Raises (single-leg)</td>
      <td className="border p-3">3 × 15 per leg</td>
      <td className="border p-3">Achilles tendon stiffness</td>
    </tr>
    <tr>
      <td className="border p-3">Glute Bridges</td>
      <td className="border p-3">3 × 12</td>
      <td className="border p-3">Hip extension</td>
    </tr>
    <tr>
      <td className="border p-3">Box Jumps</td>
      <td className="border p-3">3 × 8</td>
      <td className="border p-3">Explosive power</td>
    </tr>
    <tr>
      <td className="border p-3">Plank</td>
      <td className="border p-3">3 × 45 sec</td>
      <td className="border p-3">Core stability</td>
    </tr>
  </tbody>
</table>

<div className="bg-amber-50 dark:bg-amber-900/20 p-6 rounded-xl border border-amber-200 dark:border-amber-700 my-6">
  <h4 className="font-bold text-amber-800 dark:text-amber-200 mb-4">⚠️ Important: Tendon Stiffness</h4>
  <p className="text-sm text-amber-700 dark:text-amber-300">
    The Achilles tendon works like a spring – it stores energy with each step and returns it during push-off. Stiffer tendons = more energy return = better economy. Plyometric training and calf raises improve tendon stiffness over months.
  </p>
</div>

---
### Summary

**Key Takeaways:**
- ⚡ **Running Economy > VO2max:** Efficiency beats raw capacity
- 🦶 **Cadence:** Gradually increase to 170-185 spm (5% per month)
- ⏱️ **Ground Contact Time:** Drills + plyometrics for shorter GCT
- 📐 **Vertical Oscillation:** "Run quietly", increase cadence, activate glutes
- 💪 **Strength Training:** Single-leg, calves, plyometrics 2x per week
- 🔄 **Long-term process:** Economy improves over months and years

**Start today:** Measure your cadence on your next run and do the efficiency drills! 🏃‍♂️
    `
  },

  task: {
    de: {
      title: 'Laufökonomie analysieren und verbessern',
      description: 'Analysiere deine aktuelle Laufökonomie und starte mit gezielten Effizienz-Drills.',
      checklist: [
        { text: 'Aktuelle Kadenz messen (30 Sek rechten Fuß zählen × 4)' },
        { text: 'Vertikale Oszillation prüfen (falls GPS-Uhr verfügbar)' },
        { text: 'Effizienz-Drill-Routine 2x durchführen (High Knees, Butt Kicks, Strides)' },
        { text: '"Leise laufen"-Test auf hartem Untergrund machen' },
        { text: 'Krafttraining-Routine starten (Einbein-Kniebeugen, Wadenheben)' },
        { text: 'Kadenz-Ziel setzen und mit Metronom-App trainieren' }
      ]
    },
    en: {
      title: 'Analyze and Improve Running Economy',
      description: 'Analyze your current running economy and start with targeted efficiency drills.',
      checklist: [
        { text: 'Measure current cadence (count right foot 30 sec × 4)' },
        { text: 'Check vertical oscillation (if GPS watch available)' },
        { text: 'Do efficiency drill routine 2x (high knees, butt kicks, strides)' },
        { text: 'Do "quiet running" test on hard surface' },
        { text: 'Start strength training routine (single-leg squats, calf raises)' },
        { text: 'Set cadence target and train with metronome app' }
      ]
    }
  },

  notes: {
    de: [
      {
        front: 'Die vier Hauptfaktoren der Laufökonomie?',
        back: '1) Schrittfrequenz (Kadenz, 170-185 spm), 2) Bodenkontaktzeit (200-250 ms), 3) Vertikale Oszillation (6-10 cm), 4) Schrittlänge (individuell optimal). Alle sind trainierbar!'
      },
      {
        front: 'Wie erhöhe ich meine Kadenz sicher?',
        back: '5%-Regel: Schrittweise um 5% pro Monat erhöhen. Metronom-App oder Musik mit passender BPM nutzen. Quick-Feet-Drills machen. Nicht sofort 180 spm erzwingen!'
      },
      {
        front: 'Warum ist Sehnen-Steifigkeit wichtig?',
        back: 'Die Achillessehne wirkt wie eine Feder – speichert Energie beim Aufsetzen und gibt sie beim Abstoß zurück. Steifere Sehnen = mehr Energierückgabe = bessere Ökonomie. Training: Plyometrics + Wadenheben.'
      }
    ],
    en: [
      {
        front: 'The four main factors of running economy?',
        back: '1) Cadence (170-185 spm), 2) Ground Contact Time (200-250 ms), 3) Vertical Oscillation (6-10 cm), 4) Stride Length (individually optimal). All are trainable!'
      },
      {
        front: 'How do I safely increase cadence?',
        back: '5% rule: Gradually increase by 5% per month. Use metronome app or music with matching BPM. Do quick-feet drills. Don\'t force 180 spm immediately!'
      },
      {
        front: 'Why is tendon stiffness important?',
        back: 'The Achilles tendon works like a spring – stores energy on landing and returns it on push-off. Stiffer tendons = more energy return = better economy. Training: Plyometrics + calf raises.'
      }
    ]
  }
};
