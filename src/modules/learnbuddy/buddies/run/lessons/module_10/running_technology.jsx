import React from 'react';

export const runningTechnologyLesson = {
  id: 'r10_m4_running_technology',
  title: {
    en: '10.4 Running Technology & Data',
    de: '10.4 Lauftechnologie & Daten'
  },
  description: {
    en: 'GPS watches, running power meters, data analysis, training platforms, and using technology to optimize performance.',
    de: 'GPS-Uhren, Lauf-Powermeter, Datenanalyse, Trainingsplattformen und Technologie zur Leistungsoptimierung nutzen.'
  },
  category: 'mastery',

  content: {
    de: `
### Lauftechnologie & Daten: Trainieren mit Köpfchen 📊

GPS-Uhren, Powermeter, Apps – die Technologie hat das Laufen revolutioniert. Aber mehr Daten bedeuten nicht automatisch bessere Entscheidungen. Dieses Modul zeigt, welche Geräte sinnvoll sind, wie du Daten interpretierst und wann weniger mehr ist.

---
### GPS-Uhren: Was sie messen

**Standard-Metriken:**
- **Distanz & Pace:** GPS-basiert, Genauigkeit variiert (Bäume, Gebäude)
- **Herzfrequenz:** Optisch (Handgelenk) oder Brustgurt (genauer)
- **Kadenz:** Schritte pro Minute (170-185 optimal)
- **Vertikale Oszillation:** Auf-und-ab Bewegung (weniger = effizienter)
- **Bodenkontaktzeit:** ms pro Schritt (kürzer = schneller)

**Wichtige Funktionen:**
- **Intervall-Timer:** Für strukturierte Workouts
- **Pace-Alerts:** Warnt bei zu schnellem/langsamem Tempo
- **Herzfrequenz-Zonen:** Automatische Zone-Anzeige
- **GPS-Genauigkeit:** Dual-band GPS (z.B. Garmin) = genauer in schwierigem Gelände

<table className="w-full border-collapse my-6">
  <thead>
    <tr className="bg-gray-100 dark:bg-gray-800">
      <th className="border p-3 text-left">Gerätetyp</th>
      <th className="border p-3 text-left">Preis</th>
      <th className="border p-3 text-left">Empfehlung für</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td className="border p-3"><strong>Einsteiger</strong></td>
      <td className="border p-3">100-200€</td>
      <td className="border p-3">Distanz, Pace, HF – Grundfunktionen</td>
    </tr>
    <tr>
      <td className="border p-3"><strong>Mittelklasse</strong></td>
      <td className="border p-3">200-400€</td>
      <td className="border p-3">Trainingspläne, erweiterte Metriken</td>
    </tr>
    <tr>
      <td className="border p-3"><strong>Premium</strong></td>
      <td className="border p-3">400-800€</td>
      <td className="border p-3">Powermeter, Mapping, lange Akkulaufzeit</td>
    </tr>
  </tbody>
</table>

---
### Lauf-Power (Running Power)

**Was ist Running Power?**
- Ähnlich wie Watt beim Radfahren – objektives Maß für Anstrengung
- Unabhängig von Gelände, Wind, Temperatur
- Geräte: Stryd, Garmin (RD-Pod), Polar, Coros

**Vorteile:**
- **Konsistente Intensität:** Bergauf langsamer bei gleicher Power = gleiche Belastung
- **FTP (Functional Threshold Power):** Wie Schwellentempo, aber in Watt
- **Pace-Anpassung:** Bei Hitze/Wind nach Power laufen, nicht nach Pace

**Nachteile:**
- Zusätzliche Kosten (Stryd ~200€)
- Lernkurve – Power-Zonen müssen ermittelt werden

<div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-700 my-6">
  <h4 className="font-bold text-blue-800 dark:text-blue-200 mb-4">💡 Wann lohnt sich Power?</h4>
  <p className="text-sm text-blue-700 dark:text-blue-300">
    Besonders sinnvoll bei: Trail-Laufen (Pace irreführend), Intervall auf Hügeln, Hitze (Pace schwankt stark). Für flache Straßenläufer: HF und Pace reichen oft.
  </p>
</div>

---
### Datenanalyse: Was wirklich zählt

**Wichtige Metriken nach dem Lauf:**

| Metrik | Was bedeutet es | Aktion wenn... |
|--------|-----------------|----------------|
| **Durchschnittspuls** | Belastung | Zu hoch bei Easy Run → langsamer |
| **HRV (Herzfrequenzvariabilität)** | Erholungsstatus | Niedrig → mehr Ruhe |
| **Vertikaler Oszillation** | Effizienz | >10cm → Technik-Drills |
| **Bodenkontaktzeit** | Effizienz | >250ms → Kadenz erhöhen |
| **Training Load / TSS** | Wöchentliche Belastung | Steil ansteigend → Verletzungsrisiko |

**Platformen:**
- **Strava:** Sozial, Segment-Jagd, kostenlose Basis
- **TrainingPeaks:** Professionelle Planung, TSS, Periodisierung
- **Garmin Connect:** Uhr-Daten, Body Battery, Training Status
- **Runalyze:** Kostenlose detaillierte Analyse

---
### Trainings-Apps & Plattformen

**Trainingsplanung:**
- TrainingPeaks, Final Surge, TrainAsOne (KI-basiert)
- Garmin/Coros: Integrierte Coach-Pläne

**Lauf-Apps:**
- **Nike Run Club:** Geführte Läufe, Coaching
- **Runkeeper:** Einfach, sozial
- **Zwift Running:** Indoor-Laufen mit Virtual Worlds

**Wichtig:** Weniger ist mehr. 1-2 Tools konsequent nutzen > 5 Apps nebeneinander

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border border-green-200 dark:border-green-700 my-6">
  <h4 className="font-bold text-green-800 dark:text-green-200 mb-4">🎯 Einfache Wochenanalyse</h4>
  <ol className="list-decimal list-inside space-y-2 text-sm text-green-700 dark:text-green-300">
    <li>Wochenkilometer: Steigerung <10%?</li>
    <li>Easy Runs: War Puls in Zone 2?</li>
    <li>Schlaf & HRV: Regeneration ausreichend?</li>
    <li>Ein qualitativer Lauf pro Woche (Tempo/Intervall)?</li>
  </ol>
</div>

---
### Technologie-Fallen vermeiden

**Zu viel Fokus auf Daten:**
- Nicht jede Sekunde auf die Uhr schauen
- Lauf nach Gefühl validieren – Uhr als Feedback
- "Naked Runs" (ohne Uhr) ab und zu – reconnection

**GPS-Fehler:**
- In Tunneln/unter Brücken: GPS verliert
- Erste 1-2 Min: GPS sucht Satelliten – Warm-up nicht tracken
- Bäume, Schluchten: Strecke kann abweichen

**Batterie & Zuverlässigkeit:**
- Vor langen Läufen laden
- Bei Kälte: Akku leert schneller
- Backup: Handy-App als Fallback

---
### Zusammenfassung

**Key Takeaways:**
- ⌚ **GPS-Uhr:** Basis für Distanz, Pace, HF – Einsteiger-Modelle reichen oft
- ⚡ **Power:** Für Trail/Hügel/Hitze – flache Straße: Pace+HF ok
- 📊 **Analyse:** Wöchentliche Check: Volumen, Puls bei Easy, Regeneration
- 🛠️ **Weniger Tools:** 1-2 Plattformen konsequent > viele halb genutzt
- 🧘 **Balance:** Ab und zu ohne Uhr laufen – Gefühl schulen
    `,
    en: `
### Running Technology & Data: Training Smart 📊

GPS watches, power meters, apps – technology has revolutionized running. But more data doesn't automatically mean better decisions. This module shows which devices make sense, how to interpret data, and when less is more.

---
### GPS Watches: What They Measure

**Standard Metrics:**
- **Distance & Pace:** GPS-based, accuracy varies (trees, buildings)
- **Heart Rate:** Optical (wrist) or chest strap (more accurate)
- **Cadence:** Steps per minute (170-185 optimal)
- **Vertical Oscillation:** Up-down movement (less = more efficient)
- **Ground Contact Time:** ms per step (shorter = faster)

**Important Features:**
- **Interval Timer:** For structured workouts
- **Pace Alerts:** Warns if too fast/slow
- **Heart Rate Zones:** Automatic zone display
- **GPS Accuracy:** Dual-band GPS (e.g. Garmin) = more accurate in difficult terrain

<table className="w-full border-collapse my-6">
  <thead>
    <tr className="bg-gray-100 dark:bg-gray-800">
      <th className="border p-3 text-left">Device Type</th>
      <th className="border p-3 text-left">Price</th>
      <th className="border p-3 text-left">Best For</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td className="border p-3"><strong>Entry Level</strong></td>
      <td className="border p-3">$100-200</td>
      <td className="border p-3">Distance, pace, HR – basics</td>
    </tr>
    <tr>
      <td className="border p-3"><strong>Mid-Range</strong></td>
      <td className="border p-3">$200-400</td>
      <td className="border p-3">Training plans, advanced metrics</td>
    </tr>
    <tr>
      <td className="border p-3"><strong>Premium</strong></td>
      <td className="border p-3">$400-800</td>
      <td className="border p-3">Power meter, mapping, long battery</td>
    </tr>
  </tbody>
</table>

---
### Running Power

**What is Running Power?**
- Similar to watts in cycling – objective measure of effort
- Independent of terrain, wind, temperature
- Devices: Stryd, Garmin (RD-Pod), Polar, Coros

**Advantages:**
- **Consistent Intensity:** Slower uphill at same power = same load
- **FTP (Functional Threshold Power):** Like threshold pace, but in watts
- **Pace Adjustment:** Run by power in heat/wind, not pace

**Disadvantages:**
- Additional cost (Stryd ~$200)
- Learning curve – power zones must be determined

<div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-700 my-6">
  <h4 className="font-bold text-blue-800 dark:text-blue-200 mb-4">💡 When is Power Worth It?</h4>
  <p className="text-sm text-blue-700 dark:text-blue-300">
    Especially useful for: Trail running (pace misleading), intervals on hills, heat (pace fluctuates). For flat road runners: HR and pace often sufficient.
  </p>
</div>

---
### Data Analysis: What Really Matters

**Important Metrics After Run:**

| Metric | Meaning | Action if... |
|--------|---------|--------------|
| **Avg HR** | Load | Too high on easy run → slower |
| **HRV** | Recovery status | Low → more rest |
| **Vertical Oscillation** | Efficiency | >10cm → technique drills |
| **Ground Contact Time** | Efficiency | >250ms → increase cadence |
| **Training Load / TSS** | Weekly load | Steep increase → injury risk |

**Platforms:**
- **Strava:** Social, segment hunting, free base
- **TrainingPeaks:** Professional planning, TSS, periodization
- **Garmin Connect:** Watch data, Body Battery, Training Status
- **Runalyze:** Free detailed analysis

---
### Training Apps & Platforms

**Training Planning:**
- TrainingPeaks, Final Surge, TrainAsOne (AI-based)
- Garmin/Coros: Integrated coach plans

**Running Apps:**
- **Nike Run Club:** Guided runs, coaching
- **Runkeeper:** Simple, social
- **Zwift Running:** Indoor running with virtual worlds

**Important:** Less is more. 1-2 tools used consistently > 5 apps in parallel

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border border-green-200 dark:border-green-700 my-6">
  <h4 className="font-bold text-green-800 dark:text-green-200 mb-4">🎯 Simple Weekly Analysis</h4>
  <ol className="list-decimal list-inside space-y-2 text-sm text-green-700 dark:text-green-300">
    <li>Weekly km: Increase <10%?</li>
    <li>Easy runs: Was HR in Zone 2?</li>
    <li>Sleep & HRV: Recovery sufficient?</li>
    <li>One quality run per week (tempo/intervals)?</li>
  </ol>
</div>

---
### Avoiding Technology Traps

**Too Much Focus on Data:**
- Don't look at watch every second
- Validate run by feel – watch as feedback
- "Naked runs" (no watch) occasionally – reconnect

**GPS Errors:**
- In tunnels/under bridges: GPS lost
- First 1-2 min: GPS finding satellites – don't track warm-up
- Trees, canyons: Distance can vary

**Battery & Reliability:**
- Charge before long runs
- In cold: Battery drains faster
- Backup: Phone app as fallback

---
### Summary

**Key Takeaways:**
- ⌚ **GPS Watch:** Base for distance, pace, HR – entry models often enough
- ⚡ **Power:** For trail/hills/heat – flat road: pace+HR ok
- 📊 **Analysis:** Weekly check: volume, HR on easy, recovery
- 🛠️ **Fewer Tools:** 1-2 platforms consistently > many half-used
- 🧘 **Balance:** Run without watch sometimes – train feel
    `
  },

  task: {
    de: {
      title: 'Datenanalyse durchführen',
      description: 'Analysiere deine Laufdaten der letzten Woche und ziehe Erkenntnisse.',
      checklist: [
        { text: 'Wochenkilometer und Steigerung prüfen (<10%?)' },
        { text: 'Easy Runs: War der Puls in Zone 2?' },
        { text: 'Ein qualitatives Workout diese Woche?' },
        { text: 'Regeneration: Schlaf, HRV, subjektives Gefühl' },
        { text: 'Eine Anpassung für nächste Woche ableiten' }
      ]
    },
    en: {
      title: 'Perform Data Analysis',
      description: 'Analyze your run data from the past week and draw conclusions.',
      checklist: [
        { text: 'Check weekly km and increase (<10%?)' },
        { text: 'Easy runs: Was HR in Zone 2?' },
        { text: 'One quality workout this week?' },
        { text: 'Recovery: Sleep, HRV, subjective feel' },
        { text: 'Derive one adjustment for next week' }
      ]
    }
  },

  notes: {
    de: [
      { front: 'Wann lohnt sich Running Power?', back: 'Trail, Hügel, Hitze – wenn Pace irreführend. Flache Straße: Pace + HF reichen.' },
      { front: 'Wichtige Post-Run-Metriken?', back: 'Puls (Belastung), HRV (Regeneration), Vertikale Oszillation/Bodenkontakt (Effizienz).' },
      { front: 'Technologie-Falle?', back: 'Zu viel auf Uhr starren. Ab und zu "Naked Run" – Gefühl schulen.' }
    ],
    en: [
      { front: 'When is running power worth it?', back: 'Trail, hills, heat – when pace misleading. Flat road: pace + HR sufficient.' },
      { front: 'Important post-run metrics?', back: 'HR (load), HRV (recovery), vertical oscillation/ground contact (efficiency).' },
      { front: 'Technology trap?', back: 'Staring at watch too much. Occasional "naked run" – train feel.' }
    ]
  }
};
