import React from 'react';

export const runningInjuriesLesson = {
  id: 'r10_m2_running_injuries',
  title: {
    en: '10.2 Running Injuries & Return to Run',
    de: '10.2 Laufverletzungen & Rückkehr zum Laufen'
  },
  description: {
    en: 'Return-to-running protocols, graded loading, cross-training during injury, and injury prevention strategies.',
    de: 'Return-to-Running-Protokolle, graduelle Belastungssteigerung, Cross-Training bei Verletzung und Präventionsstrategien.'
  },
  category: 'mastery',

  content: {
    de: `
### Laufverletzungen & Rückkehr zum Laufen: Sicher zurückkommen 🩹

Verletzungen sind Teil des Läuferlebens. Die Frage ist nicht ob, sondern wann – und vor allem: Wie kommst du sicher und dauerhaft zurück? Dieses Modul deckt Return-to-Running-Protokolle, Cross-Training-Optionen und Strategien ab, um erneute Verletzungen zu vermeiden.

---
### Return to Running: Das Grundprinzip

**Graduelle Belastungssteigerung:**
- Nicht "von Null auf Vollgas" – das führt zu Rückfällen
- Schrittweise Volumen und Intensität erhöhen
- Schmerz ist der Leitfaden: Kein Schmerz während oder nach dem Lauf

**Die 10%-Regel bei Rückkehr:**
- Noch konservativer als bei gesunden Läufern
- Maximal 10% Steigerung pro Woche – oft weniger
- Bei Schmerz: Stopp, Ruhe, neu evaluieren

<div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-700 my-6">
  <h4 className="font-bold text-blue-800 dark:text-blue-200 mb-4">💡 Schmerz-Skala</h4>
  <p className="text-sm text-blue-700 dark:text-blue-300">
    <strong>0-2:</strong> Kein/m minimaler Schmerz – weitermachen<br />
    <strong>3-4:</strong> Leichter Schmerz – reduzieren, beobachten<br />
    <strong>5+:</strong> Moderater bis starker Schmerz – STOPPEN, Arzt konsultieren
  </p>
</div>

---
### Return-to-Run Protokoll (Beispiel)

**Phase 1: Walk-Run (Woche 1-2)**
- 1 Min laufen, 4 Min gehen – 5-6 Wiederholungen
- 3x pro Woche, flache Strecke
- Kein Schmerz = nächste Phase

**Phase 2: Erhöhtes Lauf-Verhältnis (Woche 3-4)**
- 2 Min laufen, 3 Min gehen – 5-6 Wiederholungen
- Oder: 1:3, dann 1:2 Ratio
- Langsam das Lauf-Verhältnis erhöhen

**Phase 3: Kontinuierliches Laufen (Woche 5-6)**
- 20-30 Min kontinuierlich laufen
- Easy Pace nur (Zone 2)
- Keine Tempoläufe, keine Intervalle

**Phase 4: Volle Rückkehr (Woche 7+)**
- Normaler Trainingsplan – aber vorsichtig
- Erst Easy Runs, dann Tempo, dann Intervalle
- 2-4 Wochen pro Intensitätsstufe

<table className="w-full border-collapse my-6">
  <thead>
    <tr className="bg-gray-100 dark:bg-gray-800">
      <th className="border p-3 text-left">Woche</th>
      <th className="border p-3 text-left">Protokoll</th>
      <th className="border p-3 text-left">Häufigkeit</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td className="border p-3">1-2</td>
      <td className="border p-3">1:4 Walk-Run (5-6 Runden)</td>
      <td className="border p-3">3x</td>
    </tr>
    <tr>
      <td className="border p-3">3-4</td>
      <td className="border p-3">2:3 Walk-Run → 3:2</td>
      <td className="border p-3">3-4x</td>
    </tr>
    <tr>
      <td className="border p-3">5-6</td>
      <td className="border p-3">20-30 Min kontinuierlich Easy</td>
      <td className="border p-3">4x</td>
    </tr>
    <tr>
      <td className="border p-3">7+</td>
      <td className="border p-3">Schrittweise Intensität hinzufügen</td>
      <td className="border p-3">Nach Plan</td>
    </tr>
  </tbody>
</table>

---
### Cross-Training bei Verletzung

**Ziel:** Fitness erhalten, verletzte Struktur schonen

**Geeignete Optionen:**

| Verletzung | Gut | Vermeiden |
|------------|-----|-----------|
| Knie (ITBS, Läuferknie) | Radfahren, Schwimmen, Rudern | Laufen, Sprünge |
| Fuß/Plantarfasziitis | Schwimmen, Rad (ohne Klick), Elliptical | Laufen, Sprünge |
| Achillessehne | Schwimmen, Rad, Elliptical | Laufen, Bergablaufen |
| Schienbein (Shin Splints) | Schwimmen, Rad, Aqua-Jogging | Laufen, Sprungübungen |
| Hüfte | Rad, Elliptical, Krafttraining | Tiefe Kniebeugen, Laufen |

**Aqua-Jogging:**
- Mit Auftriebsgürtel im tiefen Wasser
- Laufbewegung ohne Aufprall
- Erhält Lauf-Fitness am besten
- 2-3x pro Woche, gleicher Umfang wie Laufplan

**Radfahren:**
- Geringe Belastung für Knie (wenn Sattelhöhe korrekt)
- Gute Cardio-Erhaltung
- Vermeide bei Achillessehnen-Problemen (Klick-Pedale)

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border border-green-200 dark:border-green-700 my-6">
  <h4 className="font-bold text-green-800 dark:text-green-200 mb-4">🎯 Cross-Training-Wochenplan</h4>
  <p className="text-sm text-green-700 dark:text-green-300">
    Ersetze Läufe 1:1 durch Cross-Training:<br />
    Easy Run 45 Min → 45 Min Rad/Schwimmen/Aqua-Jogging<br />
    Tempo Run 30 Min → 30 Min Intervall-Rad (hochintensiv)<br />
    Long Run 90 Min → 90 Min Rad oder Aqua-Jogging
  </p>
</div>

---
### Verletzungsprävention: Rückfall vermeiden

**Warum Rückfälle passieren:**
1. Zu frühe Rückkehr (nicht vollständig ausgeheilt)
2. Zu schnelle Steigerung
3. Ursache nicht behoben (schwache Hüfte, falsche Schuhe, etc.)

**Präventions-Checkliste:**
- **Krafttraining:** Core, Hüftstabilisatoren, Waden – 2x pro Woche
- **Mobilität:** Dehnen, Foam Rolling – regelmäßig
- **Lauftechnik:** Video-Analyse, ggf. Lauf-ABC
- **Schuhe:** Laufanalyse, rechtzeitig wechseln (600-800 km)
- **Belastungsmanagement:** 10%-Regel, Deload-Wochen

**Wann zum Arzt?**
- Schmerz verschlimmert sich trotz Ruhe
- Schwellung, Instabilität
- Keine Besserung nach 2 Wochen Selbstbehandlung
- Bei Unsicherheit: Immer abklären lassen

---
### Zusammenfassung

**Key Takeaways:**
- 📋 **Return-to-Run:** Graduell, Walk-Run zu kontinuierlich, Wochen nicht Tage
- 🏊 **Cross-Training:** Aqua-Jogging, Rad, Schwimmen – Fitness erhalten
- 🩹 **Schmerz-Skala:** 0-2 ok, 3-4 reduzieren, 5+ stoppen
- 💪 **Prävention:** Krafttraining, Mobilität, Ursache beheben
- ⏱️ **Geduld:** Besser 2 Wochen länger warten als erneut verletzen
    `,
    en: `
### Running Injuries & Return to Run: Coming Back Safely 🩹

Injuries are part of the runner's life. The question isn't if but when – and especially: How do you come back safely and permanently? This module covers return-to-running protocols, cross-training options, and strategies to prevent re-injury.

---
### Return to Running: The Basic Principle

**Gradual Load Progression:**
- Not "zero to full gas" – that leads to setbacks
- Gradually increase volume and intensity
- Pain is the guide: No pain during or after the run

**The 10% Rule on Return:**
- Even more conservative than for healthy runners
- Maximum 10% increase per week – often less
- If pain: Stop, rest, re-evaluate

<div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-700 my-6">
  <h4 className="font-bold text-blue-800 dark:text-blue-200 mb-4">💡 Pain Scale</h4>
  <p className="text-sm text-blue-700 dark:text-blue-300">
    <strong>0-2:</strong> No/minimal pain – continue<br />
    <strong>3-4:</strong> Mild pain – reduce, monitor<br />
    <strong>5+:</strong> Moderate to severe pain – STOP, consult doctor
  </p>
</div>

---
### Return-to-Run Protocol (Example)

**Phase 1: Walk-Run (Week 1-2)**
- 1 min run, 4 min walk – 5-6 repeats
- 3x per week, flat course
- No pain = next phase

**Phase 2: Increased Run Ratio (Week 3-4)**
- 2 min run, 3 min walk – 5-6 repeats
- Or: 1:3, then 1:2 ratio
- Gradually increase run ratio

**Phase 3: Continuous Running (Week 5-6)**
- 20-30 min continuous running
- Easy pace only (Zone 2)
- No tempo runs, no intervals

**Phase 4: Full Return (Week 7+)**
- Normal training plan – but cautiously
- First easy runs, then tempo, then intervals
- 2-4 weeks per intensity level

<table className="w-full border-collapse my-6">
  <thead>
    <tr className="bg-gray-100 dark:bg-gray-800">
      <th className="border p-3 text-left">Week</th>
      <th className="border p-3 text-left">Protocol</th>
      <th className="border p-3 text-left">Frequency</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td className="border p-3">1-2</td>
      <td className="border p-3">1:4 walk-run (5-6 rounds)</td>
      <td className="border p-3">3x</td>
    </tr>
    <tr>
      <td className="border p-3">3-4</td>
      <td className="border p-3">2:3 walk-run → 3:2</td>
      <td className="border p-3">3-4x</td>
    </tr>
    <tr>
      <td className="border p-3">5-6</td>
      <td className="border p-3">20-30 min continuous easy</td>
      <td className="border p-3">4x</td>
    </tr>
    <tr>
      <td className="border p-3">7+</td>
      <td className="border p-3">Gradually add intensity</td>
      <td className="border p-3">Per plan</td>
    </tr>
  </tbody>
</table>

---
### Cross-Training During Injury

**Goal:** Maintain fitness, spare injured structure

**Suitable Options:**

| Injury | Good | Avoid |
|--------|------|-------|
| Knee (ITBS, runner's knee) | Cycling, swimming, rowing | Running, jumps |
| Foot/Plantar fasciitis | Swimming, bike (no clips), elliptical | Running, jumps |
| Achilles tendon | Swimming, bike, elliptical | Running, downhill |
| Shin (shin splints) | Swimming, bike, aqua jogging | Running, plyometrics |
| Hip | Bike, elliptical, strength training | Deep squats, running |

**Aqua Jogging:**
- With flotation belt in deep water
- Running motion without impact
- Best preserves running fitness
- 2-3x per week, same volume as run plan

**Cycling:**
- Low impact for knee (if saddle height correct)
- Good cardio maintenance
- Avoid with Achilles issues (clipless pedals)

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border border-green-200 dark:border-green-700 my-6">
  <h4 className="font-bold text-green-800 dark:text-green-200 mb-4">🎯 Cross-Training Weekly Plan</h4>
  <p className="text-sm text-green-700 dark:text-green-300">
    Replace runs 1:1 with cross-training:<br />
    Easy run 45 min → 45 min bike/swim/aqua jogging<br />
    Tempo run 30 min → 30 min interval bike (high intensity)<br />
    Long run 90 min → 90 min bike or aqua jogging
  </p>
</div>

---
### Injury Prevention: Avoiding Relapse

**Why Relapses Happen:**
1. Too early return (not fully healed)
2. Too rapid increase
3. Cause not addressed (weak hip, wrong shoes, etc.)

**Prevention Checklist:**
- **Strength training:** Core, hip stabilizers, calves – 2x per week
- **Mobility:** Stretching, foam rolling – regularly
- **Running form:** Video analysis, maybe running ABCs
- **Shoes:** Gait analysis, replace in time (600-800 km)
- **Load management:** 10% rule, deload weeks

**When to See a Doctor?**
- Pain worsens despite rest
- Swelling, instability
- No improvement after 2 weeks self-care
- When in doubt: Always get it checked

---
### Summary

**Key Takeaways:**
- 📋 **Return-to-run:** Gradual, walk-run to continuous, weeks not days
- 🏊 **Cross-training:** Aqua jogging, bike, swim – maintain fitness
- 🩹 **Pain scale:** 0-2 ok, 3-4 reduce, 5+ stop
- 💪 **Prevention:** Strength training, mobility, fix the cause
- ⏱️ **Patience:** Better wait 2 more weeks than get injured again
    `
  },

  task: {
    de: {
      title: 'Return-to-Run Protokoll verstehen',
      description: 'Falls du verletzt bist oder warst: Plane deine schrittweise Rückkehr.',
      checklist: [
        { text: 'Aktuelle Verletzung/Schmerz dokumentieren (wo, wann, Stärke)' },
        { text: 'Passendes Cross-Training identifizieren (je nach Verletzung)' },
        { text: 'Return-to-Run Phasen einplanen (Walk-Run starten)' },
        { text: 'Schmerz-Skala nutzen: Bei 5+ sofort stoppen' },
        { text: 'Prävention: Krafttraining und Mobilität in Plan integrieren' }
      ]
    },
    en: {
      title: 'Understand Return-to-Run Protocol',
      description: 'If injured or were injured: Plan your gradual return.',
      checklist: [
        { text: 'Document current injury/pain (where, when, severity)' },
        { text: 'Identify suitable cross-training (depending on injury)' },
        { text: 'Plan return-to-run phases (start with walk-run)' },
        { text: 'Use pain scale: Stop immediately at 5+' },
        { text: 'Prevention: Integrate strength and mobility into plan' }
      ]
    }
  },

  notes: {
    de: [
      { front: 'Return-to-Run Phasen?', back: '1: Walk-Run (1:4), 2: Erhöhtes Verhältnis (2:3, 3:2), 3: Kontinuierlich 20-30 Min, 4: Volle Rückkehr. Wochen, nicht Tage!' },
      { front: 'Bestes Cross-Training bei Verletzung?', back: 'Aqua-Jogging erhält Lauf-Fitness am besten. Rad und Schwimmen je nach Verletzung.' },
      { front: 'Wann zum Arzt?', back: 'Schmerz verschlimmert sich, Schwellung, Instabilität, keine Besserung nach 2 Wochen. Bei Unsicherheit: abklären!' }
    ],
    en: [
      { front: 'Return-to-run phases?', back: '1: Walk-run (1:4), 2: Increased ratio (2:3, 3:2), 3: Continuous 20-30 min, 4: Full return. Weeks not days!' },
      { front: 'Best cross-training when injured?', back: 'Aqua jogging best preserves running fitness. Bike and swim depending on injury.' },
      { front: 'When to see a doctor?', back: 'Pain worsens, swelling, instability, no improvement after 2 weeks. When in doubt: get it checked!' }
    ]
  }
};
