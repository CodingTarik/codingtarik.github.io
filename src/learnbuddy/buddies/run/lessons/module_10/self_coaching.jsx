import React from 'react';

export const selfCoachingLesson = {
  id: 'r10_m5_self_coaching',
  title: {
    en: '10.5 Self-Coaching & Plan Design',
    de: '10.5 Selbstcoaching & Planerstellung'
  },
  description: {
    en: 'Writing training plans, monitoring training load, adapting for stress and recovery, and becoming your own coach.',
    de: 'Trainingspläne schreiben, Belastung überwachen, Anpassung bei Stress und Regeneration, dein eigener Coach werden.'
  },
  category: 'mastery',

  content: {
    de: `
### Selbstcoaching & Planerstellung: Dein eigener Coach werden 📋

Die besten Läufer verstehen ihr Training tief – nicht nur "Laufen gehen", sondern warum, wie viel, wann. Selbstcoaching bedeutet, deine Pläne zu schreiben, Belastung zu überwachen und flexibel auf Stress und Erholung zu reagieren.

---
### Die Grundprinzipien der Periodisierung

**Makrozyklus (Saison/Jahr):**
- Basisphase (Ausdauer aufbauen)
- Intensitätsphase (Tempo, Intervalle)
- Wettkampfphase (Taper, Rennen)
- Übergangsphase (Regeneration, Cross-Training)

**Mesozyklus (4-6 Wochen):**
- Ein klares Ziel pro Block
- Beispiel: 4 Wochen Laktatschwelle verbessern
- 3 Wochen Aufbau, 1 Woche Erholung (Deload)

**Mikrozyklus (1 Woche):**
- Die Bausteine des Plans
- Mix aus Easy, Tempo, Intervall, Long Run
- Ruhetage strategisch platzieren

<div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-700 my-6">
  <h4 className="font-bold text-blue-800 dark:text-blue-200 mb-4">💡 Die 80/20-Regel</h4>
  <p className="text-sm text-blue-700 dark:text-blue-300">
    80% der Läufe in niedriger Intensität (Zone 1-2), 20% in mittlerer bis hoher Intensität (Zone 3-5). Die häufigsten Fehler: Zu viel Zone 3 ("Grauzone") – zu schnell für Easy, zu langsam für Tempo.
  </p>
</div>

---
### Einen Wochenplan strukturieren

**Grundgerüst (4-5 Läufe/Woche):**

| Tag | Lauftyp | Umfang | Intensität |
|-----|---------|--------|------------|
| Mo | Ruhe | - | - |
| Di | Easy Run | 40-50 Min | Zone 2 |
| Mi | Qualität (Tempo oder Intervall) | 45-60 Min | Zone 4-5 |
| Do | Easy Run | 30-40 Min | Zone 2 |
| Fr | Ruhe oder Kreuztraining | - | - |
| Sa | Long Run | 90-120 Min | Zone 2 |
| So | Easy oder Ruhe | 30 Min | Zone 2 |

**Variabler Faktor:** Je nach Ziel (5K vs. Marathon) verschieben sich Long Run Länge und Qualitäts-Fokus.

---
### Belastungsüberwachung (Training Load)

**Akute Belastung vs. Chronische Belastung:**
- **Akut (7 Tage):** Wie viel hast du diese Woche trainiert?
- **Chronisch (42 Tage):** Durchschnitt der letzten 6 Wochen
- **Verhältnis Akut:Chronisch:** Idealerweise 0,8-1,3

**Zu schnelle Steigerung (ACWR >1,5):**
- Erhöhtes Verletzungsrisiko erheblich
- Wenn du viel steigerst: Deload-Woche einplanen

**TSS (Training Stress Score) / Trimp:**
- Viele Uhren/Apps berechnen automatisch
- Nutze es für wöchentliche Belastungs-Trends

<div className="bg-amber-50 dark:bg-amber-900/20 p-6 rounded-xl border border-amber-200 dark:border-amber-700 my-6">
  <h4 className="font-bold text-amber-800 dark:text-amber-200 mb-4">⚠️ Warnsignale für Überlastung</h4>
  <ul className="list-disc list-inside space-y-2 text-sm text-amber-700 dark:text-amber-300">
    <li>Ruheherzfrequenz morgens erhöht (>5 bpm über Normal)</li>
    <li>HRV sinkt über mehrere Tage</li>
    <li>Schlafqualität schlechter</li>
    <li>Motivation im Keller, Gefühl "erschlagen"</li>
    <li>Performance trotz Training schlechter</li>
  </ul>
</div>

---
### Anpassung bei Stress & Lebensumständen

**Wenn das Leben dazwischenfunkt:**
- **Schlafmangel:** Intensität reduzieren, Volumen halten oder reduzieren
- **Arbeitsstress:** Easy Runs priorisieren, Qualität verschieben
- **Krankheit:** Bei Fieber: KEIN Training. Bei Schnupfen: Nur sehr leicht
- **Reise/Jetlag:** Erste 2-3 Tage nur leicht, kein Intervall

**Die "Flexibilitäts-Regel":**
- Plan ist ein Leitfaden, kein Gesetz
- 1-2 "Joker-Wochen" pro Jahr einplanen (nur Easy, kein Plan)
- Lieber eine Session weglassen als krank/injured trainieren

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border border-green-200 dark:border-green-700 my-6">
  <h4 className="font-bold text-green-800 dark:text-green-200 mb-4">🎯 Selbstcoaching-Fragen (wöchentlich)</h4>
  <ol className="list-decimal list-inside space-y-2 text-sm text-green-700 dark:text-green-300">
    <li>Habe ich mich von der letzten Woche erholt?</li>
    <li>Wie ist mein Schlaf, Stress, Energielevel?</li>
    <li>Passt der geplante Umfang noch, oder muss ich reduzieren?</li>
    <li>Was war mein wichtigster Lauf und was habe ich gelernt?</li>
  </ol>
</div>

---
### Einen 12-Wochen-Block planen

**Beispiel: Halbmarathon-Vorbereitung**

| Woche | Fokus | Long Run | Qualität |
|-------|-------|----------|----------|
| 1-4 | Basis | 12→15 km | Tempo 20-25 Min |
| 5-8 | Intensität | 15→18 km | Intervall 5×1km |
| 9-10 | Spezifisch | 18→20 km | HM-Tempo 8-10 km |
| 11 | Taper | 12 km | Kurze Intervalle |
| 12 | Rennen | - | Halbmarathon! |

**Deload alle 4 Wochen:** Woche 4, 8 = 60-70% des normalen Volumens

---
### Zusammenfassung

**Key Takeaways:**
- 📅 **Periodisierung:** Makro (Saison) → Meso (Block) → Mikro (Woche)
- ⚖️ **80/20:** 80% leicht, 20% intensiv – Grauzone vermeiden
- 📊 **Belastung:** ACWR 0,8-1,3, Warnsignale ernst nehmen
- 🧘 **Flexibilität:** Plan anpassen bei Stress, Krankheit, Schlafmangel
- 🔄 **Wöchentliche Reflexion:** Erholung, Umfang, Learnings
    `,
    en: `
### Self-Coaching & Plan Design: Becoming Your Own Coach 📋

The best runners understand their training deeply – not just "going for a run," but why, how much, when. Self-coaching means writing your own plans, monitoring training load, and flexibly adapting to stress and recovery.

---
### Basic Periodization Principles

**Macrocycle (Season/Year):**
- Base phase (build endurance)
- Intensity phase (tempo, intervals)
- Competition phase (taper, races)
- Transition phase (recovery, cross-training)

**Mesocycle (4-6 Weeks):**
- One clear goal per block
- Example: 4 weeks improve lactate threshold
- 3 weeks build, 1 week recovery (deload)

**Microcycle (1 Week):**
- The building blocks of the plan
- Mix of easy, tempo, interval, long run
- Rest days strategically placed

<div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-700 my-6">
  <h4 className="font-bold text-blue-800 dark:text-blue-200 mb-4">💡 The 80/20 Rule</h4>
  <p className="text-sm text-blue-700 dark:text-blue-300">
    80% of runs at low intensity (Zone 1-2), 20% at moderate to high intensity (Zone 3-5). Most common mistake: Too much Zone 3 ("gray zone") – too fast for easy, too slow for tempo.
  </p>
</div>

---
### Structuring a Weekly Plan

**Basic Template (4-5 runs/week):**

| Day | Run Type | Duration | Intensity |
|-----|----------|----------|-----------|
| Mon | Rest | - | - |
| Tue | Easy Run | 40-50 min | Zone 2 |
| Wed | Quality (Tempo or Intervals) | 45-60 min | Zone 4-5 |
| Thu | Easy Run | 30-40 min | Zone 2 |
| Fri | Rest or Cross-Training | - | - |
| Sat | Long Run | 90-120 min | Zone 2 |
| Sun | Easy or Rest | 30 min | Zone 2 |

**Variable Factor:** Depending on goal (5K vs. marathon), long run length and quality focus shift.

---
### Monitoring Training Load

**Acute vs. Chronic Load:**
- **Acute (7 days):** How much did you train this week?
- **Chronic (42 days):** Average of last 6 weeks
- **Acute:Chronic Ratio:** Ideally 0.8-1.3

**Too Rapid Increase (ACWR >1.5):**
- Significantly increased injury risk
- If increasing a lot: Plan deload week

**TSS (Training Stress Score) / Trimp:**
- Many watches/apps calculate automatically
- Use for weekly load trends

<div className="bg-amber-50 dark:bg-amber-900/20 p-6 rounded-xl border border-amber-200 dark:border-amber-700 my-6">
  <h4 className="font-bold text-amber-800 dark:text-amber-200 mb-4">⚠️ Overload Warning Signs</h4>
  <ul className="list-disc list-inside space-y-2 text-sm text-amber-700 dark:text-amber-300">
    <li>Morning resting HR elevated (>5 bpm above normal)</li>
    <li>HRV drops over several days</li>
    <li>Sleep quality worse</li>
    <li>Motivation low, feeling "beaten down"</li>
    <li>Performance worse despite training</li>
  </ul>
</div>

---
### Adapting to Stress & Life Circumstances

**When Life Gets in the Way:**
- **Sleep deprivation:** Reduce intensity, maintain or reduce volume
- **Work stress:** Prioritize easy runs, shift quality
- **Illness:** With fever: NO training. With cold: Only very light
- **Travel/Jetlag:** First 2-3 days only light, no intervals

**The "Flexibility Rule":**
- Plan is a guide, not law
- Plan 1-2 "joker weeks" per year (easy only, no plan)
- Better to skip a session than train sick/injured

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border border-green-200 dark:border-green-700 my-6">
  <h4 className="font-bold text-green-800 dark:text-green-200 mb-4">🎯 Self-Coaching Questions (Weekly)</h4>
  <ol className="list-decimal list-inside space-y-2 text-sm text-green-700 dark:text-green-300">
    <li>Have I recovered from last week?</li>
    <li>How is my sleep, stress, energy level?</li>
    <li>Does planned volume still fit, or do I need to reduce?</li>
    <li>What was my most important run and what did I learn?</li>
  </ol>
</div>

---
### Planning a 12-Week Block

**Example: Half Marathon Preparation**

| Week | Focus | Long Run | Quality |
|------|-------|----------|---------|
| 1-4 | Base | 12→15 km | Tempo 20-25 min |
| 5-8 | Intensity | 15→18 km | Intervals 5×1km |
| 9-10 | Specific | 18→20 km | HM pace 8-10 km |
| 11 | Taper | 12 km | Short intervals |
| 12 | Race | - | Half marathon! |

**Deload every 4 weeks:** Week 4, 8 = 60-70% of normal volume

---
### Summary

**Key Takeaways:**
- 📅 **Periodization:** Macro (season) → Meso (block) → Micro (week)
- ⚖️ **80/20:** 80% easy, 20% intense – avoid gray zone
- 📊 **Load:** ACWR 0.8-1.3, take warning signs seriously
- 🧘 **Flexibility:** Adjust plan for stress, illness, sleep deprivation
- 🔄 **Weekly reflection:** Recovery, volume, learnings
    `
  },

  task: {
    de: {
      title: 'Eigenen Trainingsplan erstellen',
      description: 'Erstelle einen 4-Wochen-Mesozyklus mit klarem Fokus.',
      checklist: [
        { text: 'Ziel definieren (z.B. 5K-Tempo verbessern)' },
        { text: '4-Wochen-Struktur: 3 Aufbau, 1 Deload' },
        { text: 'Wöchentliches Grundgerüst (Easy, Qualität, Long Run)' },
        { text: 'ACWR im Blick: Keine Steigerung >1,5' },
        { text: 'Wöchentliche Reflexions-Fragen etablieren' }
      ]
    },
    en: {
      title: 'Create Your Own Training Plan',
      description: 'Create a 4-week mesocycle with clear focus.',
      checklist: [
        { text: 'Define goal (e.g. improve 5K pace)' },
        { text: '4-week structure: 3 build, 1 deload' },
        { text: 'Weekly template (Easy, Quality, Long Run)' },
        { text: 'Watch ACWR: No increase >1.5' },
        { text: 'Establish weekly reflection questions' }
      ]
    }
  },

  notes: {
    de: [
      { front: 'Periodisierung Ebenen?', back: 'Makro (Saison), Meso (4-6 Wo Block), Mikro (1 Wo). Jede Ebene hat klares Ziel.' },
      { front: 'ACWR – was ist optimal?', back: 'Akut:Chronisch = 0,8-1,3. >1,5 = Verletzungsrisiko. Deload bei zu schneller Steigerung.' },
      { front: 'Bei Stress/Krankheit anpassen?', back: 'Intensität reduzieren, Volumen halten oder runter. Bei Fieber: gar kein Training.' }
    ],
    en: [
      { front: 'Periodization levels?', back: 'Macro (season), Meso (4-6 wk block), Micro (1 wk). Each level has clear goal.' },
      { front: 'ACWR – what is optimal?', back: 'Acute:Chronic = 0.8-1.3. >1.5 = injury risk. Deload if increasing too fast.' },
      { front: 'Adjust for stress/illness?', back: 'Reduce intensity, maintain or reduce volume. With fever: no training at all.' }
    ]
  }
};
