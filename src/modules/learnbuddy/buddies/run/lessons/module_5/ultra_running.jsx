import React from 'react';

export const ultraRunningLesson = {
  id: 'r5_m2_ultra_running',
  title: { 
    en: '5.2 Ultra Running (Beyond Marathon)', 
    de: '5.2 Ultra Running (Über Marathon)' 
  },
  description: { 
    en: 'Explore ultra distances over 42.2 km with adapted training, power hiking, and advanced nutrition for 50K to 100-mile events.', 
    de: 'Erkunde Ultra-Distanzen über 42,2 km mit angepasstem Training, Power Hiking und fortgeschrittener Ernährung für 50K bis 100-Meilen-Events.' 
  },
  category: 'advanced',
  
  content: {
    de: `
### Ultra Running: Die Grenzen überschreiten! 🌌

Ultra Running sind Distanzen über Marathon (50 km, 50/100 Meilen) – mentale Monster, physische Abenteuer! Dieser Modul zeigt Anpassungen: Back-to-Back Runs, Power Hiking, feste Nahrung. Von Marathon zu Ultra – neues Mindset!

---
### Was ist Ultra Running?

**Distanzen & Typen:**
- 50K (ca. 5-8 Std.)
- 50 Meilen (80 km, 8-12 Std.)
- 100 km/Meilen (10-30+ Std.)
- Typen: Road Ultras, Trail Ultras, Multi-Stage

**Herausforderungen:**
- Stundenlang (nicht Minuten)
- Mentale: Einsamkeit, Dunkelheit, Schmerz
- Physisch: Blasen, Schlaf, Navigation
- Warum? Persönliche Grenzen pushen, Natur erleben

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border border-green-200 dark:border-green-700 my-6">
  <h4 className="font-bold text-green-800 dark:text-green-200 mb-4">💡 Einstieg</h4>
  <p className="text-sm text-green-700 dark:text-green-300">
    Nach Marathon: Starte mit 50K Trail. Baue von 42 km auf – mentale Prep entscheidend. Nicht für Anfänger!
  </p>
</div>

**Voraussetzungen:**
- Marathon-Erfahrung
- Starke mentale Basis (Phase 4.5)
- Crew/Pacing-Team für Längeres

---
### Ultra-Training: Anpassungen ans Extreme

**Back-to-Back Runs:**
- 2 Tage hintereinander lange Läufe (z.B. Sa 30 km, So 20 km)
- Warum? Ermüdung simulieren, Erholung trainieren
- Beispiel: Wochenende 50 km total

**Power Hiking:**
- Gehen ist okay! (bei Steigungen >15%)
- Technik: Große Schritte, Sticks nutzen
- Warum? Spart Energie, verhindert Burnout

**Volumen & Intensität:**
- Wöchentlich 80-120 km (mehr als Marathon)
- Fokus: Zeit auf Füßen (4-6 Std. Long Runs)
- Weniger Speed: Ausdauer > Tempo

<table className="w-full border-collapse my-6">
  <thead>
    <tr className="bg-gray-100 dark:bg-gray-800">
      <th className="border p-3 text-left">Training</th>
      <th className="border p-3 text-left">Beispiel</th>
      <th className="border p-3 text-left">Warum?</th>
      <th className="border p-3 text-left">Häufigkeit</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td className="border p-3"><strong>Back-to-Back</strong></td>
      <td className="border p-3">Sa 30 km, So 20 km</td>
      <td className="border p-3">Ermüdung trainieren</td>
      <td className="border p-3">1x/2 Wochen</td>
    </tr>
    <tr>
      <td className="border p-3"><strong>Power Hiking</strong></td>
      <td className="border p-3">1 Std. steil mit Sticks</td>
      <td className="border p-3">Energie sparen</td>
      <td className="border p-3">In Long Runs</td>
    </tr>
    <tr>
      <td className="border p-3"><strong>Long Run</strong></td>
      <td className="border p-3">4-6 Std. Trail</td>
      <td className="border p-3">Zeit auf Füßen</td>
      <td className="border p-3">1x/Woche</td>
    </tr>
    <tr>
      <td className="border p-3"><strong>Recovery</strong></td>
      <td className="border p-3">Yoga + Foam Rolling</td>
      <td className="border p-3">Regeneration</td>
      <td className="border p-3">Nach Back-to-Back</td>
    </tr>
  </tbody>
</table>

**Praktische Übung:** Plane 50-km-Trail-Run: Integriere Gehen (Power Hiking bei Steigungen). Tracke Zeit/Energie. Spüre Unterschied zu Marathon.

---
### Ultra-Ernährung: Feste Nahrung & Strategie

**Grundsätze:**
- Nicht nur Gels (Magen hält nicht 10+ Std.)
- 200-300 kcal/Stunde (Carbs + Fette)
- Testen: Alles im Training!

**Was essen?**
- Feste: Sandwiches, Bananen, Energy Bars, Nüsse
- Flüssig: Getränke mit Elektrolyten
- Salzig: Chips, Suppe (bei Schweiß)

<table className="w-full border-collapse my-6">
  <thead>
    <tr className="bg-gray-100 dark:bg-gray-800">
      <th className="border p-3 text-left">Stunde</th>
      <th className="border p-3 text-left">Kcal</th>
      <th className="border p-3 text-left">Beispiel</th>
      <th className="border p-3 text-left">Carbs (g)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td className="border p-3"><strong>1-4</strong></td>
      <td className="border p-3">200-250</td>
      <td className="border p-3">Gels + Banane</td>
      <td className="border p-3">40-60</td>
    </tr>
    <tr>
      <td className="border p-3"><strong>5-8</strong></td>
      <td className="border p-3">250-300</td>
      <td className="border p-3">Bar + Sandwich</td>
      <td className="border p-3">50-70</td>
    </tr>
    <tr>
      <td className="border p-3"><strong>9+</strong></td>
      <td className="border p-3">300+</td>
      <td className="border p-3">Suppe + Nüsse</td>
      <td className="border p-3">60-80 + Fette</td>
    </tr>
  </tbody>
</table>

**Crew/Pacing:**
- Support bei Checkpoints (Essen, Wechsel)
- Pacer für Nacht (Motivation, Sicherheit)

**Praktische Übung:** Teste feste Nahrung bei Long Run (>4 Std.): Sandwich + Bar. Notiere: Verdaulich? Energie?

---
### Sicherheit & Mentale Aspekte

**Sicherheit:**
- Crew/Pacer für 100+ km
- Nacht: Lampe, Reflektoren
- Wetter: Backup-Plan (Regenponcho)
- Medizinisch: Blasen-Care, Salbe

**Mentale:**
- Einsamkeit: Podcasts, Mantras
- Dunkelheit: Positive Gedanken
- Schmerz: Kleine Ziele ("Nur bis Aid Station")

<div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-xl border border-red-200 dark:border-red-700 my-6">
  <h4 className="font-bold text-red-800 dark:text-red-200 mb-4">⚠️ Warnung</h4>
  <p className="text-sm text-red-700 dark:text-red-300">
    Ultras sind extrem! Medizinische Support, Crew essenziell. Bei Halluzinationen/Schwindel: Stoppen. Leben > Finish.
  </p>
</div>

<div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl border border-purple-200 dark:border-purple-700 my-6">
  <h4 className="font-bold text-purple-800 dark:text-purple-200 mb-4">🎯 Praktische Übung</h4>
  <p className="text-sm text-purple-700 dark:text-purple-300">
    Plane 50-km-Ultra: Back-to-Back (30+20 km), Power Hiking einbauen, feste Nahrung testen. Mentale Mantras vorbereiten.
  </p>
</div>

---
### Zusammenfassung

**Ultra Running:**
- ✅ Distanzen: 50K-100 Meilen, Stundenlang
- ✅ Training: Back-to-Back, Power Hiking, Zeit auf Füßen
- ✅ Ernährung: Feste + Gels, 200-300 kcal/Stunde
- ✅ Sicherheit: Crew, Nacht-Licht, Medizin
- ✅ Mental: Kleine Ziele, Mantras

**Merke dir:** Ultras sind Abenteuer – Pace dich, genieße die Reise. Du bist stärker als du denkst!
    `,
    en: `
### Ultra Running: Beyond the Limits! 🌌

Ultra running is distances over marathon (50 km, 50/100 miles) – mental monsters, physical adventures! This module shows adaptations: Back-to-back runs, power hiking, solid food. From marathon to ultra – new mindset!

---
### What is Ultra Running?

**Distances & Types:**
- 50K (5-8 hours)
- 50 miles (80 km, 8-12 hours)
- 100 km/miles (10-30+ hours)
- Types: Road ultras, trail ultras, multi-stage

**Challenges:**
- Hours long (not minutes)
- Mental: Loneliness, dark, pain
- Physical: Blisters, sleep, navigation
- Why? Push personal limits, experience nature

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border border-green-200 dark:border-green-700 my-6">
  <h4 className="font-bold text-green-800 dark:text-green-200 mb-4">💡 Entry</h4>
  <p className="text-sm text-green-700 dark:text-green-300">
    After marathon: Start with 50K trail. Build from 42 km – mental prep key. Not for beginners!
  </p>
</div>

**Prerequisites:**
- Marathon experience
- Strong mental base (Phase 4.5)
- Crew/pacing team for longer

---
### Ultra Training: Adapt to Extreme

**Back-to-Back Runs:**
- Long runs 2 days in row (e.g., Sat 30 km, Sun 20 km)
- Why? Simulate fatigue, train recovery
- Example: Weekend 50 km total

**Power Hiking:**
- Walking OK! (steeps >15%)
- Technique: Big steps, use poles
- Why? Saves energy, prevents burnout

**Volume & Intensity:**
- Weekly 80-120 km (more than marathon)
- Focus: Time on feet (4-6 hour long runs)
- Less speed: Endurance > tempo

<table className="w-full border-collapse my-6">
  <thead>
    <tr className="bg-gray-100 dark:bg-gray-800">
      <th className="border p-3 text-left">Training</th>
      <th className="border p-3 text-left">Example</th>
      <th className="border p-3 text-left">Why?</th>
      <th className="border p-3 text-left">Frequency</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td className="border p-3"><strong>Back-to-Back</strong></td>
      <td className="border p-3">Sat 30 km, Sun 20 km</td>
      <td className="border p-3">Train fatigue</td>
      <td className="border p-3">1x/2 weeks</td>
    </tr>
    <tr>
      <td className="border p-3"><strong>Power Hiking</strong></td>
      <td className="border p-3">1 hour steep with poles</td>
      <td className="border p-3">Save energy</td>
      <td className="border p-3">In long runs</td>
    </tr>
    <tr>
      <td className="border p-3"><strong>Long Run</strong></td>
      <td className="border p-3">4-6 hours trail</td>
      <td className="border p-3">Time on feet</td>
      <td className="border p-3">1x/week</td>
    </tr>
    <tr>
      <td className="border p-3"><strong>Recovery</strong></td>
      <td className="border p-3">Yoga + foam rolling</td>
      <td className="border p-3">Regenerate</td>
      <td className="border p-3">After back-to-back</td>
    </tr>
  </tbody>
</table>

**Practical Exercise:** Plan 50-km trail run: Include walking (power hiking on steeps). Track time/energy. Feel difference from marathon.

---
### Ultra Nutrition: Solid Food & Strategy

**Principles:**
- Not just gels (stomach can't handle 10+ hours)
- 200-300 kcal/hour (carbs + fats)
- Test: Everything in training!

**What to Eat?**
- Solid: Sandwiches, bananas, energy bars, nuts
- Liquid: Drinks with electrolytes
- Salty: Chips, soup (for sweat)

<table className="w-full border-collapse my-6">
  <thead>
    <tr className="bg-gray-100 dark:bg-gray-800">
      <th className="border p-3 text-left">Hour</th>
      <th className="border p-3 text-left">Kcal</th>
      <th className="border p-3 text-left">Example</th>
      <th className="border p-3 text-left">Carbs (g)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td className="border p-3"><strong>1-4</strong></td>
      <td className="border p-3">200-250</td>
      <td className="border p-3">Gels + banana</td>
      <td className="border p-3">40-60</td>
    </tr>
    <tr>
      <td className="border p-3"><strong>5-8</strong></td>
      <td className="border p-3">250-300</td>
      <td className="border p-3">Bar + sandwich</td>
      <td className="border p-3">50-70</td>
    </tr>
    <tr>
      <td className="border p-3"><strong>9+</strong></td>
      <td className="border p-3">300+</td>
      <td className="border p-3">Soup + nuts</td>
      <td className="border p-3">60-80 + fats</td>
    </tr>
  </tbody>
</table>

**Crew/Pacing:**
- Support at checkpoints (food, changes)
- Pacer for night (motivation, safety)

**Practical Exercise:** Test solid food on long run (>4 hours): Sandwich + bar. Note: Digestible? Energy?

---
### Safety & Mental Aspects

**Safety:**
- Crew/pacer for 100+ km
- Night: Light, reflectors
- Weather: Backup (rain poncho)
- Medical: Blister care, salve

**Mental:**
- Loneliness: Podcasts, mantras
- Dark: Positive thoughts
- Pain: Small goals ("Just to aid station")

<div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-xl border border-red-200 dark:border-red-700 my-6">
  <h4 className="font-bold text-red-800 dark:text-red-200 mb-4">⚠️ Warning</h4>
  <p className="text-sm text-red-700 dark:text-red-300">
    Ultras extreme! Medical support, crew essential. At hallucinations/dizziness: Stop. Life > finish.
  </p>
</div>

<div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl border border-purple-200 dark:border-purple-700 my-6">
  <h4 className="font-bold text-purple-800 dark:text-purple-200 mb-4">🎯 Practical Exercise</h4>
  <p className="text-sm text-purple-700 dark:text-purple-300">
    Plan 50-km ultra: Back-to-back (30+20 km), include power hiking, test solid food. Prep mental mantras.
  </p>
</div>

---
### Summary

**Ultra Running:**
- ✅ Distances: 50K-100 miles, hours long
- ✅ Training: Back-to-back, power hiking, time on feet
- ✅ Nutrition: Solid + gels, 200-300 kcal/hour
- ✅ Safety: Crew, night light, medical
- ✅ Mental: Small goals, mantras

**Remember:** Ultras adventure – pace yourself, enjoy journey. You're stronger than you think!
    `
  },

  task: {
    de: {
      title: 'Ultra-Plan entwickeln',
      description: 'Plane deinen ersten Ultra (z.B. 50K) mit Anpassungen.',
      checklist: [
        { text: 'Distanz wählen: 50K Trail als Einstieg' },
        { text: 'Training anpassen: Back-to-Back (30+20 km Wochenende)' },
        { text: 'Power Hiking üben: 1 Std. steil mit Sticks' },
        { text: 'Ernährung testen: Feste Nahrung + Gels (>4 Std.)' },
        { text: 'Crew/Pacer planen: Checkpoints, Support' },
        { ref: 'Mentale Prep: Mantras für Einsamkeit/Dunkelheit' }
      ]
    },
    en: {
      title: 'Develop Ultra Plan',
      description: 'Plan your first ultra (e.g., 50K) with adaptations.',
      checklist: [
        { text: 'Choose distance: 50K trail as entry' },
        { text: 'Adapt training: Back-to-back (30+20 km weekend)' },
        { text: 'Practice power hiking: 1 hour steep with poles' },
        { text: 'Test nutrition: Solid + gels (>4 hours)' },
        { text: 'Plan crew/pacer: Checkpoints, support' },
        { text: 'Mental prep: Mantras for loneliness/dark' }
      ]
    }
  },

  notes: {
    de: [
      {
        front: 'Back-to-Back Runs?',
        back: '2 Tage lange Läufe (z.B. 30+20 km). Simuliert Ermüdung, trainiert Recovery. 1x/2 Wochen.'
      },
      {
        front: 'Power Hiking wann?',
        back: 'Bei Steigungen >15%. Große Schritte, Sticks. Spart Energie für Ultras (Gehen = Laufen!).'
      },
      {
        front: 'Ultra-Ernährung?',
        back: '200-300 kcal/Stunde, feste Nahrung (Sandwiches, Bars) + Gels. Testen essenziell – Magen hält nicht ewig.'
      }
    ],
    en: [
      {
        front: 'Back-to-back runs?',
        back: '2 days long runs (e.g., 30+20 km). Simulates fatigue, trains recovery. 1x/2 weeks.'
      },
      {
        front: 'Power hiking when?',
        back: 'Steeps >15%. Big steps, poles. Saves energy for ultras (walking = running!).'
      },
      {
        front: 'Ultra nutrition?',
        back: '200-300 kcal/hour, solid (sandwiches, bars) + gels. Testing essential – stomach won\'t last forever.'
      }
    ]
  }
};
