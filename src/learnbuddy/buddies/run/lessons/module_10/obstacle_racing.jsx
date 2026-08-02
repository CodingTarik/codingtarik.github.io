import React from 'react';

export const obstacleRacingLesson = {
  id: 'r10_m1_obstacle_racing',
  title: {
    en: '10.1 Obstacle Course Racing (OCR)',
    de: '10.1 Hindernislauf (OCR)'
  },
  description: {
    en: 'OCR preparation, grip strength training, obstacle techniques, and strategies for Spartan Race, Tough Mudder, and similar events.',
    de: 'OCR-Vorbereitung, Griffkraft-Training, Hindernistechnik und Strategien für Spartan Race, Tough Mudder und ähnliche Events.'
  },
  category: 'mastery',

  content: {
    de: `
### Hindernislauf (OCR): Der ultimative Allround-Test 🧗

Obstacle Course Racing kombiniert Laufen mit Klettern, Krabbeln, Hangeln und mentalen Herausforderungen. Spartan Race, Tough Mudder, Strong Viking – diese Events erfordern mehr als nur Laufausdauer. Du brauchst Griffkraft, Oberkörperkraft, Technik und Nerven.

---
### Event-Überblick

<table className="w-full border-collapse my-6">
  <thead>
    <tr className="bg-gray-100 dark:bg-gray-800">
      <th className="border p-3 text-left">Event</th>
      <th className="border p-3 text-left">Distanz</th>
      <th className="border p-3 text-left">Hindernisse</th>
      <th className="border p-3 text-left">Besonderheit</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td className="border p-3"><strong>Sprint</strong></td>
      <td className="border p-3">5 km</td>
      <td className="border p-3">20-25</td>
      <td className="border p-3">Einstieg, Burpees bei Fehlern</td>
    </tr>
    <tr>
      <td className="border p-3"><strong>Super</strong></td>
      <td className="border p-3">10 km</td>
      <td className="border p-3">25-30</td>
      <td className="border p-3">Mehr Laufstrecke</td>
    </tr>
    <tr>
      <td className="border p-3"><strong>Beast</strong></td>
      <td className="border p-3">21 km</td>
      <td className="border p-3">30+</td>
      <td className="border p-3">Ultimate Challenge</td>
    </tr>
    <tr>
      <td className="border p-3"><strong>Tough Mudder</strong></td>
      <td className="border p-3">16-20 km</td>
      <td className="border p-3">20-25</td>
      <td className="border p-3">Team-orientiert, kein Burpee-Penalty</td>
    </tr>
  </tbody>
</table>

---
### Griffkraft: Der Schlüssel zum OCR-Erfolg

**Warum Griffkraft?**
- Die meisten Hindernisse erfordern Hangeln, Ziehen, Festhalten
- Ermüdete Unterarme = Missed Obstacles = Burpees
- Griffkraft ist trainierbar und oft der limitierende Faktor

**Trainingsmethoden:**
- **Dead Hang:** So lange wie möglich an einer Stange hängen
- **Farmer's Carry:** Schwere Gewichte tragen (Kettlebells, Dumbbells)
- **Towel Pull-Ups:** Handtuch um Stange, Pull-Ups – trainiert Crush-Grip
- **Rope Climb:** Seilklettern ohne Beine (nur Arme)
- **Grip Trainer / Hand-Gripper:** Tägliches Training
- **Monkey Bars:** Im Park oder an Stangen – Übung macht den Meister

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border border-green-200 dark:border-green-700 my-6">
  <h4 className="font-bold text-green-800 dark:text-green-200 mb-4">🎯 8-Wochen-Griffkraft-Plan</h4>
  <ul className="list-disc list-inside space-y-2 text-sm text-green-700 dark:text-green-300">
    <li>2-3x pro Woche: Dead Hang (max Zeit, 3-5 Sätze)</li>
    <li>2x pro Woche: Towel Pull-Ups (3×5-8)</li>
    <li>1x pro Woche: Rope Climb oder Monkey Bars</li>
    <li>Farmer's Carry: 2×50m mit schwerem Gewicht</li>
  </ul>
</div>

---
### Kern-Hindernisse und Technik

**Rope Climb (Seilklettern):**
- Füße in "J-Hook" – Seil um einen Fuß, anderes Bein dagegen
- Arme überlappend greifen, Beine schieben
- Ohne Beine = maximale Kraft, aber anstrengend

**Monkey Bars / Rig:**
- Schwung aus der Hüfte nutzen
- Eine Hand immer vor der anderen
- Rhythmus finden, nicht zu hastig

**Wall Climb (Mauern):**
- Sprint zum Wall, Fuß gegen Wand als Sprungbrett
- Arme über die Kante, Beine nachziehen
- Partner kann von unten helfen (bei erlaubten Events)

**Spear Throw:**
- Praxis, Praxis, Praxis! Viele haben keine Speer-Station zum Üben
- Gleichmäßiger Anlauf, stabiler Wurf
- Burpees einplanen – die Durchfallquote ist hoch

**Sandbag Carry:**
- Sandbag eng am Körper, Schulter wechseln bei Ermüdung
- Kürzere Schritte, aufrechte Haltung

---
### OCR-spezifisches Training

**Lauf-Basis:**
- Trail-Laufen (Unebenheiten, Wurzeln, Hügel)
- Intervallläufe mit Hindernis-Simulation (z.B. alle 400m 10 Burpees)

**Kraft:**
- Pull-Ups, Push-Ups, Dips (Oberkörper)
- Core: Planks, Hanging Knee Raises
- Beine: Squats, Lunges, Step-Ups

**Wochenplan (Beispiel):**
- Mo: Ruhe
- Di: Lauf 5-8 km + Griffkraft
- Mi: Kraft (Pull-Ups, Push-Ups, Core)
- Do: Easy Trail Run
- Fr: Ruhe oder Mobility
- Sa: OCR-Simulation (Lauf mit Hindernis-Pausen)
- So: Long Trail Run

<div className="bg-amber-50 dark:bg-amber-900/20 p-6 rounded-xl border border-amber-200 dark:border-amber-700 my-6">
  <h4 className="font-bold text-amber-800 dark:text-amber-200 mb-4">⚠️ Spartan vs. Tough Mudder</h4>
  <p className="text-sm text-amber-700 dark:text-amber-300">
    <strong>Spartan:</strong> Wettkampf, Zeitnahme, 30 Burpees pro verfehltem Hindernis. Technik und Geschwindigkeit zählen.<br />
    <strong>Tough Mudder:</strong> Team-Event, keine Strafen. Hilft euch gegenseitig. Elektro-Schocks beim letzten Hindernis – psychologisch!
  </p>
</div>

---
### Renntag-Strategie

- **Starten:** Nicht zu schnell – die Hindernisse kommen schnell
- **Zwischen Hindernissen:** Joggen, Energie sparen
- **An Hindernissen:** Kontrolliert, Technik vor Geschwindigkeit
- **Burpees:** Schnell und effizient – du wirst sie brauchen
- **Hydration:** Nutze die Stationen, besonders bei Hitze
- **Schlamm:** Akzeptiere es – du wirst nass und dreckig!

---
### Zusammenfassung

**Key Takeaways:**
- 💪 **Griffkraft** ist entscheidend – Dead Hangs, Towel Pull-Ups, Rope Climb
- 🏃 **Trail-Laufen** + Krafttraining = OCR-Basis
- 🧗 **Technik üben:** Monkey Bars, Walls, Rope – vor dem Event
- 📋 **Event wählen:** Sprint zum Start, Beast als Langzeitziel
- 🤝 **Tough Mudder:** Team-Spaß; Spartan: Wettkampf mit Burpees
    `,
    en: `
### Obstacle Course Racing (OCR): The Ultimate All-Rounder Test 🧗

Obstacle course racing combines running with climbing, crawling, hanging, and mental challenges. Spartan Race, Tough Mudder, Strong Viking – these events require more than running endurance. You need grip strength, upper body strength, technique, and nerves.

---
### Event Overview

<table className="w-full border-collapse my-6">
  <thead>
    <tr className="bg-gray-100 dark:bg-gray-800">
      <th className="border p-3 text-left">Event</th>
      <th className="border p-3 text-left">Distance</th>
      <th className="border p-3 text-left">Obstacles</th>
      <th className="border p-3 text-left">Special</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td className="border p-3"><strong>Sprint</strong></td>
      <td className="border p-3">5 km</td>
      <td className="border p-3">20-25</td>
      <td className="border p-3">Entry level, burpees for failures</td>
    </tr>
    <tr>
      <td className="border p-3"><strong>Super</strong></td>
      <td className="border p-3">10 km</td>
      <td className="border p-3">25-30</td>
      <td className="border p-3">More running</td>
    </tr>
    <tr>
      <td className="border p-3"><strong>Beast</strong></td>
      <td className="border p-3">21 km</td>
      <td className="border p-3">30+</td>
      <td className="border p-3">Ultimate challenge</td>
    </tr>
    <tr>
      <td className="border p-3"><strong>Tough Mudder</strong></td>
      <td className="border p-3">16-20 km</td>
      <td className="border p-3">20-25</td>
      <td className="border p-3">Team-oriented, no burpee penalty</td>
    </tr>
  </tbody>
</table>

---
### Grip Strength: The Key to OCR Success

**Why Grip Strength?**
- Most obstacles require hanging, pulling, gripping
- Tired forearms = missed obstacles = burpees
- Grip strength is trainable and often the limiting factor

**Training Methods:**
- **Dead Hang:** Hang from a bar as long as possible
- **Farmer's Carry:** Carry heavy weights (kettlebells, dumbbells)
- **Towel Pull-Ups:** Towel over bar, pull-ups – trains crush grip
- **Rope Climb:** Climb rope without legs (arms only)
- **Grip Trainer / Hand Gripper:** Daily training
- **Monkey Bars:** At park or bars – practice makes perfect

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border border-green-200 dark:border-green-700 my-6">
  <h4 className="font-bold text-green-800 dark:text-green-200 mb-4">🎯 8-Week Grip Strength Plan</h4>
  <ul className="list-disc list-inside space-y-2 text-sm text-green-700 dark:text-green-300">
    <li>2-3x per week: Dead hang (max time, 3-5 sets)</li>
    <li>2x per week: Towel pull-ups (3×5-8)</li>
    <li>1x per week: Rope climb or monkey bars</li>
    <li>Farmer's carry: 2×50m with heavy weight</li>
  </ul>
</div>

---
### Core Obstacles and Technique

**Rope Climb:**
- Feet in "J-hook" – rope around one foot, other leg against it
- Arms grip overlapping, legs push
- Without legs = max strength but exhausting

**Monkey Bars / Rig:**
- Use momentum from hips
- One hand always ahead of the other
- Find rhythm, don't rush

**Wall Climb:**
- Sprint to wall, foot against wall as springboard
- Arms over top, pull legs up
- Partner can help from below (at permitted events)

**Spear Throw:**
- Practice, practice, practice! Many have no spear station to train
- Steady approach, stable throw
- Plan for burpees – failure rate is high

**Sandbag Carry:**
- Sandbag close to body, switch shoulders when tired
- Shorter steps, upright posture

---
### OCR-Specific Training

**Running Base:**
- Trail running (uneven terrain, roots, hills)
- Interval runs with obstacle simulation (e.g., 10 burpees every 400m)

**Strength:**
- Pull-ups, push-ups, dips (upper body)
- Core: Planks, hanging knee raises
- Legs: Squats, lunges, step-ups

**Weekly Plan (Example):**
- Mon: Rest
- Tue: Run 5-8 km + grip work
- Wed: Strength (pull-ups, push-ups, core)
- Thu: Easy trail run
- Fri: Rest or mobility
- Sat: OCR simulation (run with obstacle breaks)
- Sun: Long trail run

<div className="bg-amber-50 dark:bg-amber-900/20 p-6 rounded-xl border border-amber-200 dark:border-amber-700 my-6">
  <h4 className="font-bold text-amber-800 dark:text-amber-200 mb-4">⚠️ Spartan vs. Tough Mudder</h4>
  <p className="text-sm text-amber-700 dark:text-amber-300">
    <strong>Spartan:</strong> Competition, timed, 30 burpees per failed obstacle. Technique and speed matter.<br />
    <strong>Tough Mudder:</strong> Team event, no penalties. Help each other. Electric shocks at final obstacle – psychological!
  </p>
</div>

---
### Race Day Strategy

- **Start:** Don't go too fast – obstacles come quickly
- **Between obstacles:** Jog, conserve energy
- **At obstacles:** Controlled, technique over speed
- **Burpees:** Fast and efficient – you'll need them
- **Hydration:** Use stations, especially in heat
- **Mud:** Accept it – you'll get wet and dirty!

---
### Summary

**Key Takeaways:**
- 💪 **Grip strength** is crucial – dead hangs, towel pull-ups, rope climb
- 🏃 **Trail running** + strength training = OCR base
- 🧗 **Practice technique:** Monkey bars, walls, rope – before event
- 📋 **Choose event:** Sprint to start, Beast as long-term goal
- 🤝 **Tough Mudder:** Team fun; Spartan: competition with burpees
    `
  },

  task: {
    de: {
      title: 'OCR-Vorbereitung starten',
      description: 'Beginne mit Griffkraft-Training und OCR-spezifischen Übungen.',
      checklist: [
        { text: 'Dead Hang: Aktuelle Maximalzeit messen' },
        { text: 'Pull-Up-Fähigkeit testen (Maximalzahl)' },
        { text: '8-Wochen-Griffkraft-Plan starten (2-3x/Woche)' },
        { text: 'Trail-Läufe in den Plan integrieren' },
        { text: 'Für ein OCR-Event anmelden (Sprint als erstes Ziel)' }
      ]
    },
    en: {
      title: 'Start OCR Preparation',
      description: 'Begin grip strength training and OCR-specific exercises.',
      checklist: [
        { text: 'Dead hang: Measure current max time' },
        { text: 'Test pull-up ability (max reps)' },
        { text: 'Start 8-week grip strength plan (2-3x/week)' },
        { text: 'Integrate trail runs into plan' },
        { text: 'Register for OCR event (Sprint as first goal)' }
      ]
    }
  },

  notes: {
    de: [
      { front: 'Wie trainiere ich Griffkraft?', back: 'Dead Hang, Towel Pull-Ups, Rope Climb, Farmer\'s Carry, Monkey Bars. 2-3x pro Woche, 8+ Wochen.' },
      { front: 'Spartan vs Tough Mudder?', back: 'Spartan: Wettkampf, Burpees bei Fehlern. Tough Mudder: Team, keine Strafen, mehr Spaß.' },
      { front: 'OCR Training Fokus?', back: 'Laufen (Trail) + Griffkraft + Oberkörper (Pull-Ups, Push-Ups) + Core. Gleichgewicht ist wichtig.' }
    ],
    en: [
      { front: 'How do I train grip strength?', back: 'Dead hang, towel pull-ups, rope climb, farmer\'s carry, monkey bars. 2-3x per week, 8+ weeks.' },
      { front: 'Spartan vs Tough Mudder?', back: 'Spartan: Competition, burpees for failures. Tough Mudder: Team, no penalties, more fun.' },
      { front: 'OCR training focus?', back: 'Running (trail) + grip strength + upper body (pull-ups, push-ups) + core. Balance is key.' }
    ]
  }
};
