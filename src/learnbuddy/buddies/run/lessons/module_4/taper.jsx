import React from 'react';

export const taperLesson = {
  id: 'r4_m3_taper',
  title: { 
    en: '4.3 Taper: The Final Weeks', 
    de: '4.3 Taper (Die letzten Wochen)' 
  },
  description: { 
    en: 'Understand tapering to peak on race day by reducing volume while maintaining sharpness and managing taper madness.', 
    de: 'Verstehe Tapering, um am Renntag zu peaken, indem du Volumen reduzierst, Schärfe hältst und Taper-Madness managst.' 
  },
  category: 'marathon',
  
  content: {
    de: `
### Taper: Die letzten Wochen – Regeneration & Peak! 📉

Tapering ist die Reduktion des Trainings vor dem Rennen – kontraintuitiv, aber essenziell. Dein Körper regeneriert, speichert Energie und wird stärker. 2-3 Wochen vor Marathon/Halb: Volumen runter, Intensität hoch!

---
### Was ist Tapering & warum?

**Definition:**
- Reduktion des Trainingsvolumens (50-70% weniger)
- Intensität bleibt (kurze, scharfe Einheiten)
- Dauer: 2-3 Wochen vor Rennen
- Warum? Körper repariert Mikrorisse, Glykogen-Speicher füllen, Supercompensation (mehr Leistung!)

**Vorteile:**
- ✅ Bessere Erholung (frisch am Start)
- ✅ Höhere Performance (5-10% schneller)
- ✅ Mentale Vorbereitung (Ruhe statt Stress)

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border border-green-200 dark:border-green-700 my-6">
  <h4 className="font-bold text-green-800 dark:text-green-200 mb-4">💡 Wissenschaft</h4>
  <p className="text-sm text-green-700 dark:text-green-300">
    Studien zeigen: 2-3 Wochen Taper verbessert Zeit um 2-3%! Volumen runter, aber Strides/Tempo halten Schärfe.
  </p>
</div>

**Taper-Madness (Psychologie):**
- Gefühl: "Ich bin untrainiert!" (normal!)
- Realität: Körper regeneriert, du wirst stärker
- Umgang: Vertrau dem Prozess, visualisiere Erfolg

---
### Taper-Strategie: Woche für Woche

**Grundregeln:**
- Woche -3: 70% normalem Volumen
- Woche -2: 50% Volumen
- Woche -1: 30% Volumen (letzte 3 Tage sehr leicht)
- Intensität: Bleibt (Strides, kurze Tempo)
- Long Run: Reduziert, aber mit Race-Pace-Abschnitten

**Beispiel-Taper für Marathon (von 70 km Peak):**

<table className="w-full border-collapse my-6">
  <thead>
    <tr className="bg-gray-100 dark:bg-gray-800">
      <th className="border p-3 text-left">Woche</th>
      <th className="border p-3 text-left">Volumen (%)</th>
      <th className="border p-3 text-left">Long Run</th>
      <th className="border p-3 text-left">Intensiv</th>
      <th className="border p-3 text-left">Ruhe</th>
      <th className="border p-3 text-left">Fokus</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td className="border p-3"><strong>-3</strong></td>
      <td className="border p-3">70% (50 km)</td>
      <td className="border p-3">20 km (mit 5 km Race Pace)</td>
      <td className="border p-3">8 km Tempo</td>
      <td className="border p-3">1 Ruhetag</td>
      <td className="border p-3">Leichte Reduktion</td>
    </tr>
    <tr>
      <td className="border p-3"><strong>-2</strong></td>
      <td className="border p-3">50% (35 km)</td>
      <td className="border p-3">16 km Easy</td>
      <td className="border p-3">6 km Threshold</td>
      <td className="border p-3">2 Ruhetage</td>
      <td className="border p-3">Regeneration</td>
    </tr>
    <tr>
      <td className="border p-3"><strong>-1</strong></td>
      <td className="border p-3">30% (20 km)</td>
      <td className="border p-3">8 km Easy</td>
      <td className="border p-3">4x Strides</td>
      <td className="border p-3">3 Ruhetage</td>
      <td className="border p-3">Schärfe halten</td>
    </tr>
    <tr>
      <td className="border p-3"><strong>Race</strong></td>
      <td className="border p-3">Race!</td>
      <td className="border p-3">42,2 km</td>
      <td className="border p-3">Warm-up Strides</td>
      <td className="border p-3">Ruhe</td>
      <td className="border p-3">Peak!</td>
    </tr>
  </tbody>
</table>

**Anpassung für Halbmarathon:**
- Kürzer: 1-2 Wochen Taper
- Volumen: 40-50% Reduktion

**Praktische Übung:** Plane deine Taper-Wochen. Woche -3: 70% Volumen. Tracke Gefühl: Weniger Müdigkeit? Mehr Energie?

---
### Taper-Madness managen

**Symptome:**
- Unruhe, Zweifel ("Bin ich fit?")
- Gewichtszunahme (normal, Glykogen)
- "Zu viel Zeit" (Ruhe nervt)

**Strategien:**
- Visualisiere: Täglich 5 Min Rennen durchspielen
- Leichte Aktivität: Yoga, Spazieren (kein Hard Training)
- Journal: Fortschritte notieren, Erfolge feiern
- Ernährung: Carb-Loading starten (Energie fühlen)

<div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl border border-purple-200 dark:border-purple-700 my-6">
  <h4 className="font-bold text-purple-800 dark:text-purple-200 mb-4">🎯 Praktische Übung</h4>
  <p className="text-sm text-purple-700 dark:text-purple-300">
  Führe einen Mini-Taper durch (1 Woche vor hartem Training): Volumen 50% runter. Notiere: Fühlst du dich frischer? Taper-Madness? Lerne daraus.
  </p>
</div>

**Häufige Fehler:**
- ❌ Zu wenig Taper → Erschöpft am Start
- ❌ Komplett aufhören → Verlust Schärfe
- ❌ Panik bei Madness → Plan ignorieren

<div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-xl border border-red-200 dark:border-red-700 my-6">
  <h4 className="font-bold text-red-800 dark:text-red-200 mb-4">⚠️ Warnung</h4>
  <p className="text-sm text-red-700 dark:text-red-300">
    Taper ist hart mental! Wenn Angst zu stark, mit Coach sprechen. Aber: Vertrau – es funktioniert bei allen Top-Läufern.
  </p>
</div>

---
### Zusammenfassung

**Taper (Die letzten Wochen):**
- ✅ Volumen runter (70% → 50% → 30%), Intensität hoch
- ✅ 2-3 Wochen vor Rennen
- ✅ Vorteile: Erholung, Supercompensation, Peak-Performance
- ✅ Madness: Normal, managen mit Visualisierung
- ✅ Tipp: Plan strikt, aber flexibel bei Gefühl

**Merke dir:** Taper ist kein Faulenzen – es ist strategische Vorbereitung. Dein Peak wartet!
    `,
    en: `
### Taper: The Final Weeks – Recovery & Peak! 📉

Tapering is reducing training before race – counterintuitive but essential. Your body recovers, stores energy, gets stronger. 2-3 weeks before marathon/half: Volume down, intensity up!

---
### What is Tapering & Why?

**Definition:**
- Reduce training volume (50-70% less)
- Intensity stays (short, sharp sessions)
- Duration: 2-3 weeks before race
- Why? Body repairs micro-tears, glycogen fills, supercompensation (more power!)

**Benefits:**
- ✅ Better recovery (fresh at start)
- ✅ Higher performance (5-10% faster)
- ✅ Mental prep (rest vs. stress)

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border border-green-200 dark:border-green-700 my-6">
  <h4 className="font-bold text-green-800 dark:text-green-200 mb-4">💡 Science</h4>
  <p className="text-sm text-green-700 dark:text-green-300">
    Studies show: 2-3 weeks taper improves time by 2-3%! Volume down, but strides/tempo keep sharpness.
  </p>
</div>

**Taper Madness (Psychology):**
- Feeling: "I'm unfit!" (normal!)
- Reality: Body regenerating, getting stronger
- Cope: Trust the process, visualize success

---
### Taper Strategy: Week by Week

**Core Rules:**
- Week -3: 70% normal volume
- Week -2: 50% volume
- Week -1: 30% volume (last 3 days very light)
- Intensity: Stays (strides, short tempo)
- Long run: Reduced, with race-pace segments

**Example Taper for Marathon (from 70 km peak):**

<table className="w-full border-collapse my-6">
  <thead>
    <tr className="bg-gray-100 dark:bg-gray-800">
      <th className="border p-3 text-left">Week</th>
      <th className="border p-3 text-left">Volume (%)</th>
      <th className="border p-3 text-left">Long Run</th>
      <th className="border p-3 text-left">Intense</th>
      <th className="border p-3 text-left">Rest</th>
      <th className="border p-3 text-left">Focus</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td className="border p-3"><strong>-3</strong></td>
      <td className="border p-3">70% (50 km)</td>
      <td className="border p-3">20 km (with 5 km race pace)</td>
      <td className="border p-3">8 km tempo</td>
      <td className="border p-3">1 rest day</td>
      <td className="border p-3">Light reduction</td>
    </tr>
    <tr>
      <td className="border p-3"><strong>-2</strong></td>
      <td className="border p-3">50% (35 km)</td>
      <td className="border p-3">16 km easy</td>
      <td className="border p-3">6 km threshold</td>
      <td className="border p-3">2 rest days</td>
      <td className="border p-3">Regeneration</td>
    </tr>
    <tr>
      <td className="border p-3"><strong>-1</strong></td>
      <td className="border p-3">30% (20 km)</td>
      <td className="border p-3">8 km easy</td>
      <td className="border p-3">4x strides</td>
      <td className="border p-3">3 rest days</td>
      <td className="border p-3">Keep sharpness</td>
    </tr>
    <tr>
      <td className="border p-3"><strong>Race</strong></td>
      <td className="border p-3">Race!</td>
      <td className="border p-3">42.2 km</td>
      <td className="border p-3">Warm-up strides</td>
      <td className="border p-3">Rest</td>
      <td className="border p-3">Peak!</td>
    </tr>
  </tbody>
</table>

**Adjustment for Half Marathon:**
- Shorter: 1-2 weeks taper
- Volume: 40-50% reduction

**Practical Exercise:** Plan your taper weeks. Week -3: 70% volume. Track feel: Less fatigue? More energy?

---
### Manage Taper Madness

**Symptoms:**
- Restlessness, doubt ("Am I fit?")
- Weight gain (normal, glycogen)
- "Too much time" (rest annoys)

**Strategies:**
- Visualize: 5 min daily race walkthrough
- Light activity: Yoga, walking (no hard training)
- Journal: Note progress, celebrate wins
- Nutrition: Start carb-loading (feel energy)

<div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl border border-purple-200 dark:border-purple-700 my-6">
  <h4 className="font-bold text-purple-800 dark:text-purple-200 mb-4">🎯 Practical Exercise</h4>
  <p className="text-sm text-purple-700 dark:text-purple-300">
    Do a mini-taper (1 week before hard training): Volume 50% down. Note: Feel fresher? Taper madness? Learn from it.
  </p>
</div>

**Common Mistakes:**
- ❌ Too little taper → Exhausted at start
- ❌ Stop completely → Lose sharpness
- ❌ Panic at madness → Ignore plan

<div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-xl border border-red-200 dark:border-red-700 my-6">
  <h4 className="font-bold text-red-800 dark:text-red-200 mb-4">⚠️ Warning</h4>
  <p className="text-sm text-red-700 dark:text-red-300">
    Taper is mentally hard! If anxiety too strong, talk to coach. But: Trust – it works for all top runners.
  </p>
</div>

---
### Summary

**Taper (The Final Weeks):**
- ✅ Volume down (70% → 50% → 30%), intensity up
- ✅ 2-3 weeks before race
- ✅ Benefits: Recovery, supercompensation, peak performance
- ✅ Madness: Normal, manage with visualization
- ✅ Tip: Stick to plan, but flexible on feel

**Remember:** Taper isn't slacking – it's strategic prep. Your peak awaits!
    `
  },

  task: {
    de: {
      title: 'Taper planen & testen',
      description: 'Plane und teste einen Taper für dein nächstes Rennen.',
      checklist: [
        { text: 'Taper-Dauer festlegen (2-3 Wochen vor Race)' },
        { text: 'Volumen reduzieren: Woche -3 70%, -2 50%, -1 30%' },
        { text: 'Intensität halten: Strides, kurze Tempo' },
        { text: 'Madness managen: Täglich 5 Min visualisieren' },
        { text: 'Mini-Taper testen: 1 Woche vor hartem Training' },
        { text: 'Nachher reflektieren: Frischer? Besser performt?' }
      ]
    },
    en: {
      title: 'Plan & Test Taper',
      description: 'Plan and test a taper for your next race.',
      checklist: [
        { text: 'Set taper duration (2-3 weeks before race)' },
        { text: 'Reduce volume: Week -3 70%, -2 50%, -1 30%' },
        { text: 'Keep intensity: Strides, short tempo' },
        { text: 'Manage madness: Visualize 5 min daily' },
        { text: 'Test mini-taper: 1 week before hard training' },
        { text: 'Reflect after: Fresher? Better performance?' }
      ]
    }
  },

  notes: {
    de: [
      {
        front: 'Was ist Taper-Madness?',
        back: 'Gefühl untrainiert zu sein (normal!). Körper regeneriert. Managen mit Visualisierung und Vertrauen.'
      },
      {
        front: 'Taper-Volumen-Reduktion?',
        back: 'Woche -3: 70%, -2: 50%, -1: 30%. Intensität bleibt (Strides). 2-3 Wochen vor Race.'
      },
      {
        front: 'Warum Taper?',
        back: 'Erholung, Glykogen-Füllung, Supercompensation. Verbessert Performance um 2-3%.'
      }
    ],
    en: [
      {
        front: 'What is taper madness?',
        back: 'Feeling unfit (normal!). Body regenerating. Manage with visualization and trust.'
      },
      {
        front: 'Taper volume reduction?',
        back: 'Week -3: 70%, -2: 50%, -1: 30%. Intensity stays (strides). 2-3 weeks before race.'
      },
      {
        front: 'Why taper?',
        back: 'Recovery, glycogen fill, supercompensation. Improves performance by 2-3%.'
      }
    ]
  }
};

