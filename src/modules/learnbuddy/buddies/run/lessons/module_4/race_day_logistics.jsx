import React from 'react';

export const raceDayLogisticsLesson = {
  id: 'r4_m4_race_day_logistics',
  title: { 
    en: '4.4 Race Day Logistics', 
    de: '4.4 Race Day Logistik' 
  },
  description: { 
    en: 'Master the logistics of race day from the night before to the starting line, ensuring you\'re prepared for a smooth start.', 
    de: 'Meistere die Logistik des Race Days vom Abend vorher bis zur Startlinie, um einen reibungslosen Start zu gewährleisten.' 
  },
  category: 'marathon',
  
  content: {
    de: `
### Race Day Logistik: Der Tag, auf den du hingearbeitet hast! 🏃‍♂️

Race Day ist nervenaufreibend – aber mit Planung wird's smooth! Dieser Modul deckt Vorbereitung, Checkliste, Warm-up und Tipps ab. Keine Panik, nur Execution!

---
### Vorbereitung am Tag vorher: Alles bereit!

**Checkliste Tag -1:**
- Ausrüstung überprüfen (Schuhe getestet? Kleidung gewaschen?)
- Frühstück planen (bekanntes Menü)
- Route zum Start (Zeit pufferen, Parken/ÖPNV)
- Nummer holen (falls Expo)
- Früh schlafen (7-9 Std., auch wenn aufgeregt)

**Ernährung Tag -1:**
- Carb-Loading finalisieren (leichte Carbs)
- Hydration: Ausreichend, aber nicht übertreiben
- Keine Neuheiten (kein neues Essen!)

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border border-green-200 dark:border-green-700 my-6">
  <h4 className="font-bold text-green-800 dark:text-green-200 mb-4">💡 Abend-Routine</h4>
  <p className="text-sm text-green-700 dark:text-green-300">
    Lay out everything: Schuhe, Shorts, Shirt, Gels, Uhr. Visualisiere den Tag. Entspanne – kein Hard Training mehr!
  </p>
</div>

**Schlaf-Tipp:**
- Nervosität normal – atme tief, meditiere
- Wecker 1 Std. früher als nötig (Puffer)

**Praktische Übung:** Erstelle deine Race-Day-Checkliste. Packe imaginär (oder real für nächstes Event). Simuliere Abend-Routine.

---
### Race-Day-Checkliste: Nichts vergessen!

**Essentiell:**
- Laufschuhe (getestet, eingelaufen)
- Kleidung (Wetter-angepasst, getestet)
- Gels/Ernährung (Anzahl, Typen)
- Wasserflasche/Getränk (falls nötig)
- Startnummer + Nadeln
- Uhr/GPS (batterievoll)
- ID/Geld (Notfall)

<table className="w-full border-collapse my-6">
  <thead>
    <tr className="bg-gray-100 dark:bg-gray-800">
      <th className="border p-3 text-left">Kategorie</th>
      <th className="border p-3 text-left">Item</th>
      <th className="border p-3 text-left">Check</th>
      <th className="border p-3 text-left">Tipp</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td className="border p-3"><strong>Ausrüstung</strong></td>
      <td className="border p-3">Laufschuhe</td>
      <td className="border p-3">✓ Getestet</td>
      <td className="border p-3">Keine neuen Schuhe!</td>
    </tr>
    <tr>
      <td className="border p-3"><strong>Ausrüstung</strong></td>
      <td className="border p-3">Startnummer</td>
      <td className="border p-3">✓ Befestigt</td>
      <td className="border p-3">Sicherheitsnadeln bereit</td>
    </tr>
    <tr>
      <td className="border p-3"><strong>Ernährung</strong></td>
      <td className="border p-3">Gels (4-6)</td>
      <td className="border p-3">✓ Getestet</td>
      <td className="border p-3">In Taschen/Gürtel</td>
    </tr>
    <tr>
      <td className="border p-3"><strong>Ernährung</strong></td>
      <td className="border p-3">Frühstück</td>
      <td className="border p-3">✓ 3 Std. vor</td>
      <td className="border p-3">Bekanntes Menü</td>
    </tr>
    <tr>
      <td className="border p-3"><strong>Logistik</strong></td>
      <td className="border p-3">Uhr</td>
      <td className="border p-3">✓ Geladen</td>
      <td className="border p-3">Pace-Alarme setzen</td>
    </tr>
    <tr>
      <td className="border p-3"><strong>Notfall</strong></td>
      <td className="border p-3">ID/Geld</td>
      <td className="border p-3">✓ Klein</td>
      <td className="border p-3">Für Taxi/Medizin</td>
    </tr>
  </tbody>
</table>

**Transport zum Start:**
- Früh ankommen (1-2 Std. Puffer)
- ÖPNV nutzen (weniger Stress)
- Mit Lauf-Freunden (Motivation)

**Praktische Übung:** Erstelle personalisierte Checkliste. Nutze sie für nächstes Training/Rennen. Überprüfe 2 Tage vor: Alles ready?

---
### Warm-up vor dem Rennen: Scharf starten!

**Routine (30-45 Min vor Start):**
- 10-15 Min leichtes Joggen (Easy Pace)
- Dynamisches Dehnen (Beinschwingen, Armkreisen)
- 4-6 Strides (100m Beschleunigung, 30 Sek Pause)
- 2-3 Min ruhen (nicht kalt werden)
- Mental: Atmen, visualisieren

**Warum?**
- Blut in Muskeln pumpen
- Nervensystem aktivieren
- Schärfe ohne Ermüdung

<div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-700 my-6">
  <h4 className="font-bold text-blue-800 dark:text-blue-200 mb-4">💡 Strides-Tipp</h4>
  <p className="text-sm text-blue-700 dark:text-blue-300">
    100m auf 80% Effort – schnell, aber kontrolliert. Weckt Beine, ohne Energie zu verbrauchen. Ideal für alle Distanzen.
  </p>
</div>

**Häufige Fehler:**
- ❌ Zu langes Warm-up → Ermüdung
- ❌ Statisches Dehnen → Verletzungsrisiko
- ❌ Kein Warm-up → Steifer Start

**Praktische Übung:** Übe Warm-up-Routine bei Training. 10 Min Joggen + Strides. Spüre: Fühlst du dich bereit, nicht müde?

---
### Tipps für den Startbereich & mehr

**Im Startbereich:**
- Frühe Nummer-Zone (vermeide Stress)
- Toilette nutzen (Warteschlange!)
- Dynamik halten (gehen, nicht frieren)

**Mentale Prep:**
- Mantra wiederholen ("Heute ist mein Tag")
- Crowd nutzen (Energie aufsaugen)
- Pacing-Plan im Kopf (ersten km kontrollieren)

<div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl border border-purple-200 dark:border-purple-700 my-6">
  <h4 className="font-bold text-purple-800 dark:text-purple-200 mb-4">🎯 Praktische Übung</h4>
  <p className="text-sm text-purple-700 dark:text-purple-300">
    Simuliere Race Day: Abend-Routine, Morgen-Checkliste, Warm-up. Zeit es – wie viel Puffer brauchst du?
  </p>
</div>

<div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-xl border border-red-200 dark:border-red-700 my-6">
  <h4 className="font-bold text-red-800 dark:text-red-200 mb-4">⚠️ Warnung</h4>
  <p className="text-sm text-red-700 dark:text-red-300">
    Logistik-Fehler ruinieren Rennen! Teste Route/Zeiten. Bei schlechtem Wetter: Backup-Plan (z.B. Regenjacke).
  </p>
</div>

---
### Zusammenfassung

**Race Day Logistik:**
- ✅ Tag -1: Ausrüstung checken, Route planen, früh schlafen
- ✅ Checkliste: Schuhe, Gels, Nummer, Uhr
- ✅ Warm-up: 10 Min Joggen + Strides (30 Min vor)
- ✅ Start: Frühe Zone, Toilette, mental ready
- ✅ Tipp: Simuliere alles – Panik vermeiden

**Merke dir:** Race Day gewinnt man mit Plan, nicht Talent allein. Deine Vorbereitung zahlt sich aus!
    `,
    en: `
### Race Day Logistics: The Day You've Trained For! 🏃‍♂️

Race day is nerve-wracking – but with planning, it\'s smooth! This module covers prep, checklists, warm-up, and tips. No panic, just execution!

---
### Preparation the Day Before: Get Ready!

**Day -1 Checklist:**
- Gear check (shoes tested? Clothes washed?)
- Breakfast plan (familiar menu)
- Route to start (buffer time, parking/public transport)
- Bib pickup (if expo)
- Early bed (7-9 hours, even if excited)

**Day -1 Nutrition:**
- Finalize carb-loading (light carbs)
- Hydration: Adequate, not overdo
- No new things (no new food!)

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border border-green-200 dark:border-green-700 my-6">
  <h4 className="font-bold text-green-800 dark:text-green-200 mb-4">💡 Evening Routine</h4>
  <p className="text-sm text-green-700 dark:text-green-300">
    Lay out everything: Shoes, shorts, shirt, gels, watch. Visualize the day. Relax – no hard training anymore!
  </p>
</div>

**Sleep Tip:**
- Nervousness normal – deep breathe, meditate
- Alarm 1 hour earlier than needed (buffer)

**Practical Exercise:** Create your race-day checklist. Pack imaginarily (or real for next event). Simulate evening routine.

---
### Race-Day Checklist: Don't Forget Anything!

**Essentials:**
- Running shoes (tested, broken in)
- Clothing (weather-adapted, tested)
- Gels/nutrition (number, types)
- Water bottle/drink (if needed)
- Bib + pins
- Watch/GPS (fully charged)
- ID/money (emergency)

<table className="w-full border-collapse my-6">
  <thead>
    <tr className="bg-gray-100 dark:bg-gray-800">
      <th className="border p-3 text-left">Category</th>
      <th className="border p-3 text-left">Item</th>
      <th className="border p-3 text-left">Check</th>
      <th className="border p-3 text-left">Tip</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td className="border p-3"><strong>Gear</strong></td>
      <td className="border p-3">Running shoes</td>
      <td className="border p-3">✓ Tested</td>
      <td className="border p-3">No new shoes!</td>
    </tr>
    <tr>
      <td className="border p-3"><strong>Gear</strong></td>
      <td className="border p-3">Bib</td>
      <td className="border p-3">✓ Pinned</td>
      <td className="border p-3">Safety pins ready</td>
    </tr>
    <tr>
      <td className="border p-3"><strong>Nutrition</strong></td>
      <td className="border p-3">Gels (4-6)</td>
      <td className="border p-3">✓ Tested</td>
      <td className="border p-3">In pockets/belt</td>
    </tr>
    <tr>
      <td className="border p-3"><strong>Nutrition</strong></td>
      <td className="border p-3">Breakfast</td>
      <td className="border p-3">✓ 3 hours before</td>
      <td className="border p-3">Familiar menu</td>
    </tr>
    <tr>
      <td className="border p-3"><strong>Logistics</strong></td>
      <td className="border p-3">Watch</td>
      <td className="border p-3">✓ Charged</td>
      <td className="border p-3">Set pace alarms</td>
    </tr>
    <tr>
      <td className="border p-3"><strong>Emergency</strong></td>
      <td className="border p-3">ID/money</td>
      <td className="border p-3">✓ Small</td>
      <td className="border p-3">For taxi/medical</td>
    </tr>
  </tbody>
</table>

**Transport to Start:**
- Arrive early (1-2 hours buffer)
- Use public transport (less stress)
- With running friends (motivation)

**Practical Exercise:** Create personalized checklist. Use for next training/race. Check 2 days before: All ready?

---
### Warm-Up Before Race: Sharp Start!

**Routine (30-45 Min Before Start):**
- 10-15 min light jog (easy pace)
- Dynamic stretching (leg swings, arm circles)
- 4-6 strides (100m acceleration, 30 sec rest)
- 2-3 min rest (don\'t get cold)
- Mental: Breathe, visualize

**Why?**
- Pump blood to muscles
- Activate nervous system
- Sharpness without fatigue

<div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-700 my-6">
  <h4 className="font-bold text-blue-800 dark:text-blue-200 mb-4">💡 Strides Tip</h4>
  <p className="text-sm text-blue-700 dark:text-blue-300">
    100m at 80% effort – fast but controlled. Wakes legs without energy drain. Ideal for all distances.
  </p>
</div>

**Common Mistakes:**
- ❌ Too long warm-up → Fatigue
- ❌ Static stretching → Injury risk
- ❌ No warm-up → Stiff start

**Practical Exercise:** Practice warm-up routine in training. 10 min jog + strides. Feel: Ready, not tired?

---
### Tips for Start Area & More

**In Start Area:**
- Early wave (avoid stress)
- Use bathroom (line!)
- Keep dynamic (walk, don\'t freeze)

**Mental Prep:**
- Repeat mantra ("Today's my day")
- Absorb crowd energy
- Pace plan in head (control first km)

<div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl border border-purple-200 dark:border-purple-700 my-6">
  <h4 className="font-bold text-purple-800 dark:text-purple-200 mb-4">🎯 Practical Exercise</h4>
  <p className="text-sm text-purple-700 dark:text-purple-300">
    Simulate race day: Evening routine, morning checklist, warm-up. Time it – how much buffer do you need?
  </p>
</div>

<div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-xl border border-red-200 dark:border-red-700 my-6">
  <h4 className="font-bold text-red-800 dark:text-red-200 mb-4">⚠️ Warning</h4>
  <p className="text-sm text-red-700 dark:text-red-300">
    Logistics errors ruin races! Test route/times. For bad weather: Backup (e.g., rain jacket).
  </p>
</div>

---
### Summary

**Race Day Logistics:**
- ✅ Day -1: Gear check, route plan, early bed
- ✅ Checklist: Shoes, gels, bib, watch
- ✅ Warm-up: 10 min jog + strides (30 min before)
- ✅ Start: Early zone, bathroom, mentally ready
- ✅ Tip: Simulate everything – avoid panic

**Remember:** Race day won with plan, not talent alone. Your prep pays off!
    `
  },

  task: {
    de: {
      title: 'Race-Day-Checkliste erstellen',
      description: 'Erstelle und teste deine personalisierte Race-Day-Checkliste.',
      checklist: [
        { text: 'Ausrüstung auflisten: Schuhe, Kleidung, Gels, Uhr' },
        { text: 'Logistik planen: Route, Zeit, Transport' },
        { text: 'Warm-up-Routine üben (10 Min Joggen + Strides)' },
        { text: 'Checkliste ausdrucken/lagern' },
        { text: 'Bei nächstem Event: Durchführen und reflektieren' },
        { text: 'Anpassen: Was fehlte? Was war super?' }
      ]
    },
    en: {
      title: 'Create Race-Day Checklist',
      description: 'Create and test your personalized race-day checklist.',
      checklist: [
        { text: 'List gear: Shoes, clothing, gels, watch' },
        { text: 'Plan logistics: Route, time, transport' },
        { text: 'Practice warm-up routine (10 min jog + strides)' },
        { text: 'Print/store checklist' },
        { text: 'For next event: Execute and reflect' },
        { text: 'Adjust: What was missing? What was great?' }
      ]
    }
  },

  notes: {
    de: [
      {
        front: 'Was in Race-Day-Checkliste?',
        back: 'Schuhe (getestet), Kleidung, Gels, Startnummer, Uhr, ID. Alles 2 Tage vor checken.'
      },
      {
        front: 'Warm-up Routine?',
        back: '10-15 Min Easy Joggen, dynamisches Dehnen, 4-6 Strides (100m). 30 Min vor Start.'
      },
      {
        front: 'Tag -1 Tipp?',
        back: 'Ausrüstung bereitlegen, Route planen, Carb-Loading, früh schlafen. Keine Neuheiten!'
      }
    ],
    en: [
      {
        front: "What's in race-day checklist?",
        back: 'Shoes (tested), clothing, gels, bib, watch, ID. Check everything 2 days before.'
      },
      {
        front: 'Warm-up routine?',
        back: '10-15 min easy jog, dynamic stretch, 4-6 strides (100m). 30 min before start.'
      },
      {
        front: 'Day -1 tip?',
        back: 'Lay out gear, plan route, carb-loading, early bed. No new things!'
      }
    ]
  }
};
