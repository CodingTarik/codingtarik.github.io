import React from 'react';

export const altitudeTrainingLesson = {
  id: 'r9_m3_altitude_training',
  title: { 
    en: '9.3 Altitude Training', 
    de: '9.3 Höhentraining' 
  },
  description: { 
    en: 'Understand the effects of altitude on performance, acclimatization strategies, live-high train-low protocols, and simulated altitude training.', 
    de: 'Verstehe die Auswirkungen der Höhe auf die Leistung, Akklimatisationsstrategien, Live-High Train-Low-Protokolle und simuliertes Höhentraining.' 
  },
  category: 'advancedPerformance',
  
  content: {
    de: `
### Höhentraining: Dünne Luft, starke Leistung 🏔️

Höhentraining ist eine der effektivsten legalen Methoden zur Leistungssteigerung im Ausdauersport. Die Grundidee: Trainiere oder lebe in der Höhe, wo weniger Sauerstoff verfügbar ist, und dein Körper passt sich an, indem er mehr rote Blutkörperchen produziert.

---
### Die Physiologie der Höhe

**Was passiert in der Höhe?**
- Der Luftdruck sinkt → weniger Sauerstoffmoleküle pro Atemzug
- Auf 2.000m: ~16% weniger Sauerstoff als auf Meereshöhe
- Auf 3.000m: ~25% weniger Sauerstoff
- Dein Körper reagiert mit einer Kaskade von Anpassungen

**Akute Reaktionen (erste Stunden/Tage):**
- Erhöhte Atemfrequenz und Herzfrequenz
- Reduziertes Blutplasma (Hämokonzentration)
- Leistungsabfall von 3-5% pro 1.000m über 1.500m
- Mögliche Symptome: Kopfschmerzen, Übelkeit, Schlafstörungen

**Chronische Anpassungen (2-4 Wochen):**
- Erhöhte EPO-Produktion (Erythropoietin)
- Mehr rote Blutkörperchen (höherer Hämatokrit)
- Verbesserte Sauerstofftransportkapazität
- Erhöhte Kapillardichte in den Muskeln
- Verbesserte mitochondriale Effizienz

<div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-700 my-6">
  <h4 className="font-bold text-blue-800 dark:text-blue-200 mb-4">💡 EPO und rote Blutkörperchen</h4>
  <p className="text-sm text-blue-700 dark:text-blue-300">
    In der Höhe produzieren deine Nieren mehr Erythropoietin (EPO). EPO stimuliert das Knochenmark, mehr rote Blutkörperchen zu bilden. Mehr rote Blutkörperchen = mehr Hämoglobin = mehr Sauerstofftransport = bessere Ausdauerleistung. Der Effekt hält 2-3 Wochen nach Rückkehr auf Meereshöhe an.
  </p>
</div>

---
### Höhentrainings-Modelle

<table className="w-full border-collapse my-6">
  <thead>
    <tr className="bg-gray-100 dark:bg-gray-800">
      <th className="border p-3 text-left">Modell</th>
      <th className="border p-3 text-left">Prinzip</th>
      <th className="border p-3 text-left">Vorteil</th>
      <th className="border p-3 text-left">Nachteil</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td className="border p-3"><strong>Live High – Train High</strong></td>
      <td className="border p-3">Leben + Training in der Höhe</td>
      <td className="border p-3">Maximale Akklimatisation</td>
      <td className="border p-3">Trainingsqualität leidet</td>
    </tr>
    <tr>
      <td className="border p-3"><strong>Live High – Train Low</strong></td>
      <td className="border p-3">Schlafen in Höhe, Training tief</td>
      <td className="border p-3">Beste Evidenz für Leistung</td>
      <td className="border p-3">Logistisch aufwendig</td>
    </tr>
    <tr>
      <td className="border p-3"><strong>Live Low – Train High</strong></td>
      <td className="border p-3">Leben tief, Training in Höhe</td>
      <td className="border p-3">Einfach umsetzbar</td>
      <td className="border p-3">Geringster Effekt</td>
    </tr>
    <tr>
      <td className="border p-3"><strong>Intermittent Hypoxic</strong></td>
      <td className="border p-3">Kurze Höhenexposition</td>
      <td className="border p-3">Minimal invasiv</td>
      <td className="border p-3">Evidenz begrenzt</td>
    </tr>
  </tbody>
</table>

---
### Live High – Train Low (LHTL): Der Goldstandard

**Das Konzept:**
- Schlafe und erhole dich auf 2.000-2.500m Höhe
- Trainiere auf unter 1.200m (nahe Meereshöhe)
- Kombination: Höhenanpassung + volle Trainingsintensität

**Optimales Protokoll:**
- **Höhe:** 2.000-2.500m zum Schlafen
- **Dauer:** Mindestens 3-4 Wochen (ideal: 4-6 Wochen)
- **Stunden pro Tag in Höhe:** Minimum 12-14 Stunden
- **Training:** Intensive Einheiten unten, Easy Runs können oben stattfinden

**Erwartete Leistungsverbesserung:**
- VO2max: +1-3%
- Hämoglobinmasse: +3-7%
- Leistung auf Meereshöhe: +1-2% (klingt wenig, ist aber auf Elitelevel entscheidend!)
- Effekt hält 2-3 Wochen nach Rückkehr an

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border border-green-200 dark:border-green-700 my-6">
  <h4 className="font-bold text-green-800 dark:text-green-200 mb-4">🎯 Beliebte Höhentraining-Standorte</h4>
  <ul className="list-disc list-inside space-y-2 text-sm text-green-700 dark:text-green-300">
    <li><strong>St. Moritz, Schweiz:</strong> 1.800m – Klassiker für europäische Athleten</li>
    <li><strong>Iten, Kenia:</strong> 2.400m – Mekka des Langstreckenlaufs</li>
    <li><strong>Flagstaff, Arizona:</strong> 2.100m – Populär bei US-Eliteläufern</li>
    <li><strong>Font Romeu, Frankreich:</strong> 1.800m – Olympisches Trainingszentrum</li>
    <li><strong>Livigno, Italien:</strong> 1.800m – Beliebt bei Radsportlern und Läufern</li>
  </ul>
</div>

---
### Simuliertes Höhentraining

**Für wen?**
- Läufer, die kein echtes Höhentrainingslager machen können
- Ergänzung zum normalen Training

**Methoden:**

**1. Höhenzelte (Altitude Tents):**
- Hypoxisches Zelt über dem Bett
- Simuliert 2.000-3.000m Höhe
- 8-10 Stunden/Nacht
- Kosten: 2.000-5.000€ Kauf oder 200-400€/Monat Miete

**2. Höhenmasken (Training Masks):**
- Atemwiderstand-Masken
- Simulieren NICHT echte Höhe (nur Atemmuskeltraining)
- Nicht dasselbe wie Hypoxie!
- Können für Atemmuskeltraining nützlich sein

**3. Hypoxie-Kammern:**
- Professionelle Einrichtungen
- Kontrollierte Sauerstoffreduktion
- Intermittent Hypoxic Training (IHT): 1 Stunde/Sitzung

<div className="bg-amber-50 dark:bg-amber-900/20 p-6 rounded-xl border border-amber-200 dark:border-amber-700 my-6">
  <h4 className="font-bold text-amber-800 dark:text-amber-200 mb-4">⚠️ Risiken und Vorsichtsmaßnahmen</h4>
  <ul className="list-disc list-inside space-y-2 text-sm text-amber-700 dark:text-amber-300">
    <li><strong>Höhenkrankheit:</strong> Ab 2.500m möglich – Kopfschmerzen, Übelkeit, Schwindel</li>
    <li><strong>Eisenmangel:</strong> Der Körper braucht Eisen für neue rote Blutkörperchen – Ferritinwert vor Höhenlager prüfen (Ziel: >50 ng/ml)</li>
    <li><strong>Übertraining:</strong> Trainingsintensität in den ersten Tagen reduzieren</li>
    <li><strong>Schlafqualität:</strong> In der Höhe oft gestört – Schlafhygiene priorisieren</li>
    <li><strong>Individuell:</strong> Manche Menschen reagieren kaum auf Höhe (Non-Responder)</li>
  </ul>
</div>

---
### Zusammenfassung

**Key Takeaways:**
- 🏔️ **Höhe reduziert Sauerstoff:** ~16% weniger auf 2.000m, ~25% auf 3.000m
- 🩸 **Anpassung:** Mehr EPO → mehr rote Blutkörperchen → besserer O₂-Transport
- 🏆 **LHTL ist Goldstandard:** Schlafen hoch (2.000-2.500m), Training tief
- ⏰ **Dauer:** Mindestens 3-4 Wochen für signifikante Effekte
- 🏠 **Alternativen:** Höhenzelte für Amateurathleten, aber kostspielig
- ⚠️ **Vorbereitung:** Eisenwerte prüfen, langsam akklimatisieren

**Nächster Schritt:** Recherchiere, ob ein Höhentrainingslager oder Höhenzelt für dich infrage kommt! 🏔️
    `,
    en: `
### Altitude Training: Thin Air, Strong Performance 🏔️

Altitude training is one of the most effective legal methods for improving endurance performance. The basic idea: Train or live at altitude where less oxygen is available, and your body adapts by producing more red blood cells.

---
### The Physiology of Altitude

**What Happens at Altitude?**
- Air pressure drops → fewer oxygen molecules per breath
- At 2,000m: ~16% less oxygen than at sea level
- At 3,000m: ~25% less oxygen
- Your body responds with a cascade of adaptations

**Acute Responses (first hours/days):**
- Increased breathing rate and heart rate
- Reduced blood plasma (hemoconcentration)
- Performance decline of 3-5% per 1,000m above 1,500m
- Possible symptoms: headaches, nausea, sleep disturbances

**Chronic Adaptations (2-4 weeks):**
- Increased EPO production (erythropoietin)
- More red blood cells (higher hematocrit)
- Improved oxygen transport capacity
- Increased capillary density in muscles
- Improved mitochondrial efficiency

<div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-700 my-6">
  <h4 className="font-bold text-blue-800 dark:text-blue-200 mb-4">💡 EPO and Red Blood Cells</h4>
  <p className="text-sm text-blue-700 dark:text-blue-300">
    At altitude, your kidneys produce more erythropoietin (EPO). EPO stimulates bone marrow to create more red blood cells. More red blood cells = more hemoglobin = more oxygen transport = better endurance performance. The effect persists 2-3 weeks after returning to sea level.
  </p>
</div>

---
### Altitude Training Models

<table className="w-full border-collapse my-6">
  <thead>
    <tr className="bg-gray-100 dark:bg-gray-800">
      <th className="border p-3 text-left">Model</th>
      <th className="border p-3 text-left">Principle</th>
      <th className="border p-3 text-left">Advantage</th>
      <th className="border p-3 text-left">Disadvantage</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td className="border p-3"><strong>Live High – Train High</strong></td>
      <td className="border p-3">Live + train at altitude</td>
      <td className="border p-3">Maximum acclimatization</td>
      <td className="border p-3">Training quality suffers</td>
    </tr>
    <tr>
      <td className="border p-3"><strong>Live High – Train Low</strong></td>
      <td className="border p-3">Sleep at altitude, train low</td>
      <td className="border p-3">Best evidence for performance</td>
      <td className="border p-3">Logistically demanding</td>
    </tr>
    <tr>
      <td className="border p-3"><strong>Live Low – Train High</strong></td>
      <td className="border p-3">Live low, train at altitude</td>
      <td className="border p-3">Easy to implement</td>
      <td className="border p-3">Smallest effect</td>
    </tr>
    <tr>
      <td className="border p-3"><strong>Intermittent Hypoxic</strong></td>
      <td className="border p-3">Brief altitude exposure</td>
      <td className="border p-3">Minimally invasive</td>
      <td className="border p-3">Limited evidence</td>
    </tr>
  </tbody>
</table>

---
### Live High – Train Low (LHTL): The Gold Standard

**The Concept:**
- Sleep and recover at 2,000-2,500m altitude
- Train below 1,200m (near sea level)
- Combination: altitude adaptation + full training intensity

**Optimal Protocol:**
- **Altitude:** 2,000-2,500m for sleeping
- **Duration:** Minimum 3-4 weeks (ideal: 4-6 weeks)
- **Hours per day at altitude:** Minimum 12-14 hours
- **Training:** Intense sessions down low, easy runs can be done up high

**Expected Performance Improvement:**
- VO2max: +1-3%
- Hemoglobin mass: +3-7%
- Sea-level performance: +1-2% (sounds small but is decisive at elite level!)
- Effect lasts 2-3 weeks after return

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border border-green-200 dark:border-green-700 my-6">
  <h4 className="font-bold text-green-800 dark:text-green-200 mb-4">🎯 Popular Altitude Training Locations</h4>
  <ul className="list-disc list-inside space-y-2 text-sm text-green-700 dark:text-green-300">
    <li><strong>St. Moritz, Switzerland:</strong> 1,800m – Classic for European athletes</li>
    <li><strong>Iten, Kenya:</strong> 2,400m – Mecca of distance running</li>
    <li><strong>Flagstaff, Arizona:</strong> 2,100m – Popular with US elite runners</li>
    <li><strong>Font Romeu, France:</strong> 1,800m – Olympic training center</li>
    <li><strong>Livigno, Italy:</strong> 1,800m – Popular with cyclists and runners</li>
  </ul>
</div>

---
### Simulated Altitude Training

**For Whom?**
- Runners who can't do real altitude camps
- Supplement to normal training

**Methods:**

**1. Altitude Tents:**
- Hypoxic tent over the bed
- Simulates 2,000-3,000m altitude
- 8-10 hours/night
- Cost: $2,000-5,000 purchase or $200-400/month rental

**2. Training Masks:**
- Breathing resistance masks
- Do NOT simulate real altitude (only respiratory muscle training)
- Not the same as hypoxia!
- Can be useful for respiratory muscle training

**3. Hypoxic Chambers:**
- Professional facilities
- Controlled oxygen reduction
- Intermittent Hypoxic Training (IHT): 1 hour/session

<div className="bg-amber-50 dark:bg-amber-900/20 p-6 rounded-xl border border-amber-200 dark:border-amber-700 my-6">
  <h4 className="font-bold text-amber-800 dark:text-amber-200 mb-4">⚠️ Risks and Precautions</h4>
  <ul className="list-disc list-inside space-y-2 text-sm text-amber-700 dark:text-amber-300">
    <li><strong>Altitude Sickness:</strong> Possible above 2,500m – headaches, nausea, dizziness</li>
    <li><strong>Iron Deficiency:</strong> Body needs iron for new red blood cells – check ferritin before altitude camp (target: >50 ng/ml)</li>
    <li><strong>Overtraining:</strong> Reduce training intensity in first days</li>
    <li><strong>Sleep Quality:</strong> Often disturbed at altitude – prioritize sleep hygiene</li>
    <li><strong>Individual:</strong> Some people barely respond to altitude (non-responders)</li>
  </ul>
</div>

---
### Summary

**Key Takeaways:**
- 🏔️ **Altitude reduces oxygen:** ~16% less at 2,000m, ~25% at 3,000m
- 🩸 **Adaptation:** More EPO → more red blood cells → better O₂ transport
- 🏆 **LHTL is gold standard:** Sleep high (2,000-2,500m), train low
- ⏰ **Duration:** Minimum 3-4 weeks for significant effects
- 🏠 **Alternatives:** Altitude tents for amateur athletes, but costly
- ⚠️ **Preparation:** Check iron levels, acclimatize gradually

**Next step:** Research whether an altitude camp or altitude tent is right for you! 🏔️
    `
  },

  task: {
    de: {
      title: 'Höhentraining planen und verstehen',
      description: 'Verstehe die Prinzipien des Höhentrainings und plane eine mögliche Integration in dein Training.',
      checklist: [
        { text: 'Physiologische Grundlagen der Höhenanpassung verstehen' },
        { text: 'Die vier Höhentrainings-Modelle kennen und vergleichen' },
        { text: 'Eigene Eisenwerte prüfen lassen (Ferritin-Spiegel)' },
        { text: 'Recherche: Höhentrainingslager oder Höhenzelt-Optionen' },
        { text: 'Wenn möglich: Einen Lauf auf über 1.500m Höhe planen' },
        { text: 'Reaktion auf Höhe dokumentieren (HF, Gefühl, Leistung)' }
      ]
    },
    en: {
      title: 'Plan and Understand Altitude Training',
      description: 'Understand altitude training principles and plan possible integration into your training.',
      checklist: [
        { text: 'Understand physiological basics of altitude adaptation' },
        { text: 'Know and compare the four altitude training models' },
        { text: 'Get iron levels checked (ferritin levels)' },
        { text: 'Research: altitude camp or altitude tent options' },
        { text: 'If possible: Plan a run above 1,500m elevation' },
        { text: 'Document response to altitude (HR, feeling, performance)' }
      ]
    }
  },

  notes: {
    de: [
      {
        front: 'Was ist Live High – Train Low (LHTL)?',
        back: 'Goldstandard des Höhentrainings: Schlafen auf 2.000-2.500m (Höhenanpassung, mehr EPO), Training unter 1.200m (volle Intensität möglich). Dauer: mindestens 3-4 Wochen. Effekt: +1-3% VO2max, +3-7% Hämoglobinmasse.'
      },
      {
        front: 'Wie reagiert der Körper auf Höhe?',
        back: 'Akut: Erhöhte Atem-/Herzfrequenz, Leistungsabfall. Chronisch (2-4 Wochen): Mehr EPO → mehr rote Blutkörperchen → besserer O₂-Transport → mehr Kapillaren → bessere Mitochondrien.'
      },
      {
        front: 'Simuliertes Höhentraining – Optionen?',
        back: 'Höhenzelte (echte Hypoxie, 8-10h/Nacht, teuer), Atemmasken (KEIN echtes Höhentraining, nur Atemmuskeltraining), Hypoxie-Kammern (professionell, kontrolliert). Wichtig: Eisenwerte vorher prüfen!'
      }
    ],
    en: [
      {
        front: 'What is Live High – Train Low (LHTL)?',
        back: 'Gold standard of altitude training: Sleep at 2,000-2,500m (altitude adaptation, more EPO), train below 1,200m (full intensity possible). Duration: minimum 3-4 weeks. Effect: +1-3% VO2max, +3-7% hemoglobin mass.'
      },
      {
        front: 'How does the body respond to altitude?',
        back: 'Acute: Increased breathing/heart rate, performance decline. Chronic (2-4 weeks): More EPO → more red blood cells → better O₂ transport → more capillaries → better mitochondria.'
      },
      {
        front: 'Simulated altitude training – options?',
        back: 'Altitude tents (real hypoxia, 8-10h/night, expensive), training masks (NOT real altitude training, only respiratory muscle training), hypoxic chambers (professional, controlled). Important: Check iron levels first!'
      }
    ]
  }
};
