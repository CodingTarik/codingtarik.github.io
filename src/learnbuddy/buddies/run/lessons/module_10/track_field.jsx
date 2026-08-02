import React from 'react';

export const trackFieldLesson = {
  id: 'r10_m3_track_field',
  title: {
    en: '10.3 Track & Field Running',
    de: '10.3 Laufen auf der Bahn'
  },
  description: {
    en: 'Sprinting technique, starting blocks, track intervals, and race strategies for 100m to 5000m.',
    de: 'Sprinttechnik, Startblöcke, Bahn-Intervalle und Renntaktiken von 100m bis 5000m.'
  },
  category: 'mastery',

  content: {
    de: `
### Laufen auf der Bahn: Von Sprint bis 5000m 🏃‍♂️

Die Tartanbahn ist ein präzises Labor für Läufer. Ob Sprint oder Mittelstrecke – Technik, Taktik und Tempogefühl entscheiden hier über Sekundenbruchteile. Dieses Modul deckt Sprinttechnik, Startblöcke, Bahntraining und Renntaktiken ab.

---
### Die Laufbahn: Grundlagen

**Standardbahn: 400m**
- Innenbahn = 400m pro Runde
- Jede Bahn außerhalb = ~7,5m länger pro Runde
- Bahn 4 bei 800m-Start: "Staggered Start" – versetzter Start

**Tempoumrechnung:**
- 400m in 90 Sek = 3:45/km Pace
- 1 Runde (400m) = 0,4 km
- 4 Runden = 1600m ≈ 1 Meile

---
### Sprinttechnik (100m-400m)

**Die Sprint-Phasen:**
1. **Startphase (0-30m):** Maximale Beschleunigung
2. **Beschleunigungsphase (30-60m):** Aufrecht kommen, Frequenz halten
3. **Maximalgeschwindigkeit (60-80m):** Höchstes Tempo
4. **Erhalten (80-100m):** Tempo halten, nicht einbrechen lassen

**Technik-Elemente:**
- **Körperwinkel:** Von 45° (Start) zu aufrecht (Vollspeed)
- **Armbewegung:** Explosiv, parallel zur Laufrichtung, 90° Ellbogen
- **Fußaufsatz:** Unter dem Schwerpunkt, Vorfuß
- **Schrittfrequenz:** 4-5 Schritte/Sekunde bei Elitesprintern

**Häufige Fehler:**
- Zu frühes Aufrichten (Verlust an Beschleunigung)
- Armschwung über Körpermitte (Drehung)
- Zu lange Schritte (ineffizient)

<div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-700 my-6">
  <h4 className="font-bold text-blue-800 dark:text-blue-200 mb-4">💡 Drive Phase</h4>
  <p className="text-sm text-blue-700 dark:text-blue-300">
    Die ersten 10-15m nach dem Start: Niedriger Körperschwerpunkt, starker Abdruck aus den Beinen, explosive Arme. Der Start gewinnt keine Rennen allein, aber ein schlechter Start kann alles kosten.
  </p>
</div>

---
### Startblöcke nutzen

**Blockposition:**
- **Vorderer Block:** 2 Fußlängen von der Startlinie
- **Hinterer Block:** 3 Fußlängen von der Startlinie
- Beide Füße eng in den Blöcken

**Startkommandos:**
- "Auf die Plätze" – in die Blöcke
- "Fertig" – Hüfte anheben, Gewicht auf Hände
- Schuss/Pfeife – explosiv abdrücken

**Technik:**
- Erster Schritt mit hinterem Bein (kürzer)
- Schnelle Beinfrequenz in den ersten 5-10 Schritten
- Kopf neutral, Blick nach unten-vorn (nicht hoch!)

**Für Hobbyläufer:** Startblöcke sind optional. Sie helfen bei 100-400m, bei 800m+ weniger relevant.

---
### Bahn-Intervalltraining

**Warum Bahn?**
- Exakte Distanzen (400m, 800m, 1000m)
- Flache, konsistente Oberfläche
- Tempokontrolle und Vergleichbarkeit

**Typische Workouts:**

| Workout | Distanz | Pause | Ziel |
|---------|---------|-------|------|
| 400er | 8-12×400m | 90s-2min | VO2max, Tempohärte |
| 800er | 4-6×800m | 2-3min | 5K-Fitness |
| 1000er | 4-5×1000m | 2-3min | 5K-Tempo |
| Mile Repeats | 3-4×1600m | 3-4min | 10K/HM Fitness |

**Laufrichtung:** Immer gegen den Uhrzeigersinn (links herum) – IAAF-Regel

**Etikette:**
- Schnellere Läufer auf der Innenbahn
- "Track!" rufen beim Überholen
- Aufwärmen/Auslaufen außerhalb der Bahn oder Bahn 5-6

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border border-green-200 dark:border-green-700 my-6">
  <h4 className="font-bold text-green-800 dark:text-green-200 mb-4">🎯 5K-Bahn-Workout</h4>
  <p className="text-sm text-green-700 dark:text-green-300">
    2km Aufwärmen → 5×1000m @ 5K-Race-Tempo, 2min Trabpause → 2km Auslaufen. Misst und trainiert dein 5K-Tempo präzise.
  </p>
</div>

---
### Renntaktiken (800m - 5000m)

**800m:**
- Zwei Runden – ein taktischer Sprint
- Option A: Führung von vorne (hohes Tempo)
- Option B: Einpendeln und Endspurt (Kick)
- Erste 400m: Nicht zu schnell, zweite Runde: Alles geben

**1500m / 1 Meile:**
- Mittelstrecke: Tempowechsel, Positionierung
- In der "Box" (Bahn 1-2) bleiben, um Energie zu sparen
- Letzte 300m: Kick vorbereiten

**5000m (12,5 Runden):**
- Ausdauer + Taktik
- Gleichmäßiges Tempo oder negative Splits
- Letzte 2-3 Runden: Temposteigerung möglich

**Lap Counting:**
- Bei 5000m: 12 Runden zählen (oder Schilder beachten)
- Mentale Aufteilung: "Noch 8 Runden" statt "Noch 3200m"

---
### Sprint-Drills für alle Distanzen

**A-Skips:** Knie hoch, Zehen nach oben, schnelle Frequenz
**B-Skips:** Wie A-Skip, Bein streckt nach vorne
**Butt Kicks:** Fersen zum Gesäß, kurze Kontaktzeit
**High Knees:** Explosive Kniehebung, Arme mitnehmen

**Strides (100m):**
- Nach Aufwärmen oder Easy Run
- 4-6×100m mit 90% Effort
- Fokus: Technik, Frequenz, Entspannung

---
### Zusammenfassung

**Key Takeaways:**
- 🏃 **Sprintphasen:** Start → Beschleunigung → MaxSpeed → Erhalten
- 📐 **Startblöcke:** Für 100-400m, korrekte Position wichtig
- 📏 **Bahn = Präzision:** Exakte Intervalle, reproduzierbares Training
- 🎯 **Etikette:** Gegen Uhrzeigersinn, "Track!" beim Überholen
- 📊 **Taktik:** 800m taktisch, 5K gleichmäßig – Plan vor dem Start
    `,
    en: `
### Track & Field Running: From Sprint to 5000m 🏃‍♂️

The tartan track is a precise laboratory for runners. Whether sprint or middle distance – technique, tactics, and pace sense decide races by fractions of seconds. This module covers sprint technique, starting blocks, track intervals, and race strategies.

---
### The Track: Basics

**Standard Track: 400m**
- Inside lane = 400m per lap
- Each outer lane = ~7.5m longer per lap
- Lane 4 at 800m start: "Staggered start" – offset positions

**Pace Conversion:**
- 400m in 90 sec = 3:45/km pace
- 1 lap (400m) = 0.4 km
- 4 laps = 1600m ≈ 1 mile

---
### Sprint Technique (100m-400m)

**Sprint Phases:**
1. **Start Phase (0-30m):** Maximum acceleration
2. **Acceleration Phase (30-60m):** Come upright, maintain frequency
3. **Maximum Velocity (60-80m):** Highest speed
4. **Maintenance (80-100m):** Hold pace, don't fade

**Technique Elements:**
- **Body Angle:** From 45° (start) to upright (full speed)
- **Arm Drive:** Explosive, parallel to running direction, 90° elbows
- **Foot Strike:** Under center of mass, forefoot
- **Stride Frequency:** 4-5 steps/second for elite sprinters

**Common Mistakes:**
- Standing up too early (lose acceleration)
- Arms crossing midline (rotation)
- Overstriding (inefficient)

<div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-700 my-6">
  <h4 className="font-bold text-blue-800 dark:text-blue-200 mb-4">💡 Drive Phase</h4>
  <p className="text-sm text-blue-700 dark:text-blue-300">
    First 10-15m after start: Low center of mass, strong drive from legs, explosive arms. The start doesn't win races alone, but a bad start can cost everything.
  </p>
</div>

---
### Using Starting Blocks

**Block Position:**
- **Front block:** 2 foot-lengths from start line
- **Rear block:** 3 foot-lengths from start line
- Both feet snug in blocks

**Start Commands:**
- "On your marks" – into blocks
- "Set" – raise hips, weight on hands
- Gun/whistle – explode out

**Technique:**
- First step with rear leg (shorter)
- Quick leg turnover in first 5-10 steps
- Head neutral, gaze down-forward (not up!)

**For Recreational Runners:** Starting blocks are optional. They help for 100-400m, less relevant for 800m+.

---
### Track Interval Training

**Why Track?**
- Exact distances (400m, 800m, 1000m)
- Flat, consistent surface
- Pace control and comparability

**Typical Workouts:**

| Workout | Distance | Rest | Goal |
|---------|----------|------|------|
| 400s | 8-12×400m | 90s-2min | VO2max, pace toughness |
| 800s | 4-6×800m | 2-3min | 5K fitness |
| 1000s | 4-5×1000m | 2-3min | 5K pace |
| Mile Repeats | 3-4×1600m | 3-4min | 10K/HM fitness |

**Direction:** Always counterclockwise (left) – IAAF rule

**Etiquette:**
- Faster runners on inside lane
- Call "Track!" when passing
- Warm-up/cool-down outside track or lanes 5-6

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border border-green-200 dark:border-green-700 my-6">
  <h4 className="font-bold text-green-800 dark:text-green-200 mb-4">🎯 5K Track Workout</h4>
  <p className="text-sm text-green-700 dark:text-green-300">
    2km warm-up → 5×1000m @ 5K race pace, 2min jog rest → 2km cool-down. Precisely measures and trains your 5K pace.
  </p>
</div>

---
### Race Tactics (800m - 5000m)

**800m:**
- Two laps – a tactical sprint
- Option A: Lead from front (high pace)
- Option B: Sit in and sprint finish (kick)
- First 400m: Don't go too fast, second lap: give everything

**1500m / 1 Mile:**
- Middle distance: pace changes, positioning
- Stay in "box" (lanes 1-2) to save energy
- Last 300m: Prepare kick

**5000m (12.5 laps):**
- Endurance + tactics
- Even pace or negative splits
- Last 2-3 laps: Can increase pace

**Lap Counting:**
- For 5000m: Count 12 laps (or watch signs)
- Mental break-down: "8 laps to go" instead of "3200m to go"

---
### Sprint Drills for All Distances

**A-Skips:** Knees up, toes up, quick frequency
**B-Skips:** Like A-skip, leg extends forward
**Butt Kicks:** Heels to glutes, short contact time
**High Knees:** Explosive knee drive, arms with you

**Strides (100m):**
- After warm-up or easy run
- 4-6×100m at 90% effort
- Focus: technique, frequency, relaxation

---
### Summary

**Key Takeaways:**
- 🏃 **Sprint phases:** Start → Acceleration → MaxSpeed → Maintenance
- 📐 **Starting blocks:** For 100-400m, correct position matters
- 📏 **Track = Precision:** Exact intervals, reproducible training
- 🎯 **Etiquette:** Counterclockwise, "Track!" when passing
- 📊 **Tactics:** 800m tactical, 5K even – plan before start
    `
  },

  task: {
    de: {
      title: 'Bahn-Training ausprobieren',
      description: 'Finde eine Laufbahn und absolviere dein erstes strukturiertes Bahn-Workout.',
      checklist: [
        { text: 'Öffentliche Laufbahn in der Nähe finden' },
        { text: 'Aufwärmen: 2km Easy + Dynamisches Dehnen' },
        { text: 'Intervall-Workout: 6×400m @ 5K-Tempo, 90s Pause' },
        { text: 'Auslaufen: 1-2km Easy' },
        { text: 'Laufrichtung und Etikette beachten (gegen Uhrzeigersinn)' }
      ]
    },
    en: {
      title: 'Try Track Training',
      description: 'Find a track and complete your first structured track workout.',
      checklist: [
        { text: 'Find public track nearby' },
        { text: 'Warm-up: 2km easy + dynamic stretching' },
        { text: 'Interval workout: 6×400m @ 5K pace, 90s rest' },
        { text: 'Cool-down: 1-2km easy' },
        { text: 'Observe direction and etiquette (counterclockwise)' }
      ]
    }
  },

  notes: {
    de: [
      { front: 'Sprint-Phasen 100m?', back: 'Start (0-30m) → Beschleunigung (30-60m) → MaxSpeed (60-80m) → Erhalten (80-100m).' },
      { front: 'Bahn-Etikette?', back: 'Immer gegen Uhrzeigersinn. "Track!" beim Überholen. Schnellere auf Innenbahn.' },
      { front: 'Typisches 5K-Bahn-Workout?', back: '5×1000m @ 5K-Tempo, 2min Pause. Präzise Tempokontrolle.' }
    ],
    en: [
      { front: 'Sprint phases 100m?', back: 'Start (0-30m) → Acceleration (30-60m) → MaxSpeed (60-80m) → Maintenance (80-100m).' },
      { front: 'Track etiquette?', back: 'Always counterclockwise. "Track!" when passing. Faster runners on inside lane.' },
      { front: 'Typical 5K track workout?', back: '5×1000m @ 5K pace, 2min rest. Precise pace control.' }
    ]
  }
};
