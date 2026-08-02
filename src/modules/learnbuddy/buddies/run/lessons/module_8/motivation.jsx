import React from 'react';

export const motivationLesson = {
  id: 'r8_m1_motivation',
  title: { 
    en: '8.1 Motivation - Finding Your Why', 
    de: '8.1 Motivation - Finde dein Warum' 
  },
  description: { 
    en: 'Discover your running motivation, set effective goals, track progress, and build reward systems to stay consistent.', 
    de: 'Entdecke deine Lauf-Motivation, setze effektive Ziele, tracke Fortschritt und baue Belohnungssysteme für Beständigkeit auf.' 
  },
  category: 'lifestyle',
  
  content: {
    de: `
### Motivation: Finde dein Warum! 🔥

Warum läufst du? Die Antwort auf diese Frage ist der Schlüssel zu langfristiger Motivation. Talent bringt dich zum Start, aber Motivation bringt dich über die Ziellinie. Dieser Modul zeigt, wie du dein "Warum" findest und Motivation langfristig aufrecht erhältst.

---
### Dein Warum finden

**Intrinsisch vs. Extrinsisch:**
- **Intrinsisch:** Laufen aus Freude, Flow, Selbstverbesserung (langfristig stärker!)
- **Extrinsisch:** Medaillen, Zeiten, Anerkennung (kurzfristig motivierend)
- **Ideal:** Mix aus beiden, aber intrinsisch als Fundament

**Häufige "Warums":**
- Gesundheit und Fitness
- Stressabbau und mentale Gesundheit
- Gewichtskontrolle
- Selbstherausforderung und persönliches Wachstum
- Gemeinschaft und soziale Kontakte
- Natur erleben
- Wettkampf und Bestzeiten

<div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-700 my-6">
  <h4 className="font-bold text-blue-800 dark:text-blue-200 mb-4">💡 Übung: Dein Warum</h4>
  <p className="text-sm text-blue-700 dark:text-blue-300 mb-3">
    Beantworte diese Fragen schriftlich:
  </p>
  <ul className="list-disc list-inside space-y-2 text-sm text-blue-700 dark:text-blue-300">
    <li>Warum habe ich mit dem Laufen angefangen?</li>
    <li>Wie fühle ich mich NACH einem Lauf?</li>
    <li>Was würde fehlen, wenn ich aufhöre zu laufen?</li>
    <li>Welches Lauf-Erlebnis hat mich am meisten berührt?</li>
    <li>Wer bin ich als Läufer?</li>
  </ul>
</div>

---
### SMART-Ziele setzen

**Was sind SMART-Ziele?**
- **S**pezifisch: Genau definiert (nicht "schneller werden")
- **M**essbar: Mit Zahlen (z.B. 5K in 25 Min)
- **A**ttraktiv: Motivierend und erstrebenswert
- **R**ealistisch: Erreichbar, aber herausfordernd
- **T**erminiert: Mit Deadline (z.B. bis Juni 2026)

**Ziel-Pyramide:**

<table className="w-full border-collapse my-6">
  <thead>
    <tr className="bg-gray-100 dark:bg-gray-800">
      <th className="border p-3 text-left">Zeithorizont</th>
      <th className="border p-3 text-left">Beispiel</th>
      <th className="border p-3 text-left">Funktion</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td className="border p-3"><strong>Langfristig (1 Jahr+)</strong></td>
      <td className="border p-3">Marathon finishen</td>
      <td className="border p-3">Richtung, Vision</td>
    </tr>
    <tr>
      <td className="border p-3"><strong>Mittelfristig (3-6 Monate)</strong></td>
      <td className="border p-3">Halbmarathon unter 2:00</td>
      <td className="border p-3">Meilenstein</td>
    </tr>
    <tr>
      <td className="border p-3"><strong>Kurzfristig (1-4 Wochen)</strong></td>
      <td className="border p-3">3x pro Woche laufen</td>
      <td className="border p-3">Tägliche Aktion</td>
    </tr>
    <tr>
      <td className="border p-3"><strong>Prozess-Ziele</strong></td>
      <td className="border p-3">Heute: 30 Min Easy Run</td>
      <td className="border p-3">Sofortige Umsetzung</td>
    </tr>
  </tbody>
</table>

---
### Fortschritt tracken

**Lauf-Tagebuch:**
- Distanz, Tempo, Herzfrequenz
- Gefühl (1-10: Energie, Motivation, Freude)
- Wetter, Route, Besonderheiten
- Wöchentlicher Rückblick

**Digitale Tools:**
- Strava (Community, Challenges)
- Garmin Connect (Detaillierte Analyse)
- Nike Run Club (Geführte Läufe)
- TrainingPeaks (Fortgeschritten)

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border border-green-200 dark:border-green-700 my-6">
  <h4 className="font-bold text-green-800 dark:text-green-200 mb-4">🎯 Motivations-Strategien</h4>
  <ul className="list-disc list-inside space-y-2 text-sm text-green-700 dark:text-green-300">
    <li><strong>Die 10-Minuten-Regel:</strong> Keine Lust? Lauf 10 Min. Wenn es immer noch nicht geht: Aufhören. Meistens wird es besser!</li>
    <li><strong>Streaks:</strong> Lauf-Serie aufbauen (z.B. 30 Tage hintereinander mindestens 1 km)</li>
    <li><strong>Belohnungen:</strong> Nach Meilensteinen: Neue Schuhe, Massage, besonderes Essen</li>
    <li><strong>Laufpartner:</strong> Verabredung = Verpflichtung (schwerer abzusagen!)</li>
    <li><strong>Events anmelden:</strong> Rennen im Kalender = Training mit Ziel</li>
    <li><strong>Musik/Podcasts:</strong> Lieblingsinhalte nur beim Laufen hören</li>
  </ul>
</div>

---
### Umgang mit Motivationslöchern

**Normal!** Jeder Läufer hat Phasen ohne Motivation. Das ist kein Versagen.

**Strategien:**
- **Pause erlauben:** 2-3 Tage komplett frei (mentaler Reset)
- **Routine ändern:** Neue Route, andere Tageszeit, Trail statt Straße
- **Druck rausnehmen:** Kein Tempo, keine Distanz, nur laufen
- **Sozial werden:** Laufgruppe, Parkrun, mit Freund laufen
- **Zurück zum Warum:** Warum hast du angefangen?

<div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl border border-purple-200 dark:border-purple-700 my-6">
  <h4 className="font-bold text-purple-800 dark:text-purple-200 mb-4">📋 Wenn nichts hilft...</h4>
  <p className="text-sm text-purple-700 dark:text-purple-300">
    Manchmal ist Motivationsmangel ein Signal: Übertraining? Zu viel Druck? Dann höre auf deinen Körper. Eine Woche Pause kann Wunder wirken. Laufen soll Freude machen - nicht Pflicht sein.
  </p>
</div>

---
### Zusammenfassung

**Key Takeaways:**
- 🔥 **Finde dein Warum:** Intrinsische Motivation ist der Schlüssel
- 🎯 **SMART-Ziele:** Spezifisch, messbar, attraktiv, realistisch, terminiert
- 📊 **Fortschritt tracken:** Lauf-Tagebuch, Apps, wöchentlicher Rückblick
- 💪 **Strategien:** 10-Min-Regel, Streaks, Belohnungen, Laufpartner
- 🔄 **Motivationslöcher:** Normal! Pause, Routine ändern, Druck rausnehmen
- ❤️ **Laufen soll Spaß machen** - nicht nur Pflicht sein!
    `,
    en: `
### Motivation: Finding Your Why! 🔥

Why do you run? The answer to this question is the key to long-term motivation. Talent gets you to the start, but motivation gets you across the finish line. This module shows how to find your "why" and maintain motivation long-term.

---
### Finding Your Why

**Intrinsic vs. Extrinsic:**
- **Intrinsic:** Running for joy, flow, self-improvement (stronger long-term!)
- **Extrinsic:** Medals, times, recognition (motivating short-term)
- **Ideal:** Mix of both, but intrinsic as foundation

**Common "Whys":**
- Health and fitness
- Stress relief and mental health
- Weight management
- Self-challenge and personal growth
- Community and social connections
- Experiencing nature
- Competition and personal bests

<div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-700 my-6">
  <h4 className="font-bold text-blue-800 dark:text-blue-200 mb-4">💡 Exercise: Your Why</h4>
  <p className="text-sm text-blue-700 dark:text-blue-300 mb-3">
    Answer these questions in writing:
  </p>
  <ul className="list-disc list-inside space-y-2 text-sm text-blue-700 dark:text-blue-300">
    <li>Why did I start running?</li>
    <li>How do I feel AFTER a run?</li>
    <li>What would be missing if I stopped running?</li>
    <li>Which running experience touched me the most?</li>
    <li>Who am I as a runner?</li>
  </ul>
</div>

---
### Setting SMART Goals

**What are SMART Goals?**
- **S**pecific: Clearly defined (not "get faster")
- **M**easurable: With numbers (e.g., 5K in 25 min)
- **A**chievable: Motivating and desirable
- **R**ealistic: Attainable but challenging
- **T**ime-bound: With deadline (e.g., by June 2026)

**Goal Pyramid:**

<table className="w-full border-collapse my-6">
  <thead>
    <tr className="bg-gray-100 dark:bg-gray-800">
      <th className="border p-3 text-left">Time Horizon</th>
      <th className="border p-3 text-left">Example</th>
      <th className="border p-3 text-left">Function</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td className="border p-3"><strong>Long-term (1 year+)</strong></td>
      <td className="border p-3">Finish a marathon</td>
      <td className="border p-3">Direction, vision</td>
    </tr>
    <tr>
      <td className="border p-3"><strong>Medium-term (3-6 months)</strong></td>
      <td className="border p-3">Half marathon under 2:00</td>
      <td className="border p-3">Milestone</td>
    </tr>
    <tr>
      <td className="border p-3"><strong>Short-term (1-4 weeks)</strong></td>
      <td className="border p-3">Run 3x per week</td>
      <td className="border p-3">Daily action</td>
    </tr>
    <tr>
      <td className="border p-3"><strong>Process Goals</strong></td>
      <td className="border p-3">Today: 30 min easy run</td>
      <td className="border p-3">Immediate execution</td>
    </tr>
  </tbody>
</table>

---
### Tracking Progress

**Running Journal:**
- Distance, pace, heart rate
- Feel (1-10: Energy, motivation, joy)
- Weather, route, notes
- Weekly review

**Digital Tools:**
- Strava (Community, challenges)
- Garmin Connect (detailed analysis)
- Nike Run Club (guided runs)
- TrainingPeaks (advanced)

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border border-green-200 dark:border-green-700 my-6">
  <h4 className="font-bold text-green-800 dark:text-green-200 mb-4">🎯 Motivation Strategies</h4>
  <ul className="list-disc list-inside space-y-2 text-sm text-green-700 dark:text-green-300">
    <li><strong>The 10-Minute Rule:</strong> No motivation? Run 10 min. If still bad: stop. Usually it gets better!</li>
    <li><strong>Streaks:</strong> Build run streaks (e.g., 30 days in a row at least 1 km)</li>
    <li><strong>Rewards:</strong> After milestones: New shoes, massage, special meal</li>
    <li><strong>Running partner:</strong> Appointment = commitment (harder to cancel!)</li>
    <li><strong>Sign up for events:</strong> Race in calendar = training with purpose</li>
    <li><strong>Music/Podcasts:</strong> Save favorite content only for running</li>
  </ul>
</div>

---
### Dealing with Motivation Dips

**Normal!** Every runner has phases without motivation. It's not failure.

**Strategies:**
- **Allow a break:** 2-3 days completely off (mental reset)
- **Change routine:** New route, different time of day, trail instead of road
- **Remove pressure:** No pace, no distance, just run
- **Go social:** Running group, parkrun, run with a friend
- **Back to why:** Why did you start?

<div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl border border-purple-200 dark:border-purple-700 my-6">
  <h4 className="font-bold text-purple-800 dark:text-purple-200 mb-4">📋 When nothing helps...</h4>
  <p className="text-sm text-purple-700 dark:text-purple-300">
    Sometimes lack of motivation is a signal: Overtraining? Too much pressure? Then listen to your body. A week off can work wonders. Running should be joy - not obligation.
  </p>
</div>

---
### Summary

**Key Takeaways:**
- 🔥 **Find your why:** Intrinsic motivation is the key
- 🎯 **SMART goals:** Specific, measurable, achievable, realistic, time-bound
- 📊 **Track progress:** Running journal, apps, weekly review
- 💪 **Strategies:** 10-min rule, streaks, rewards, running partners
- 🔄 **Motivation dips:** Normal! Break, change routine, remove pressure
- ❤️ **Running should be fun** - not just duty!
    `
  },

  task: {
    de: {
      title: 'Motivations-System aufbauen',
      description: 'Baue ein persönliches Motivations-System für dein Lauftraining auf.',
      checklist: [
        { text: '"Warum"-Übung schriftlich durchführen (5 Fragen beantworten)' },
        { text: '3 SMART-Ziele setzen (kurz-, mittel-, langfristig)' },
        { text: 'Lauf-Tagebuch starten (oder App einrichten)' },
        { text: 'Belohnungssystem definieren (Meilensteine + Belohnungen)' },
        { text: 'Laufpartner finden oder Laufgruppe ausprobieren' },
        { text: '10-Minuten-Regel beim nächsten Motivationstief testen' }
      ]
    },
    en: {
      title: 'Build Motivation System',
      description: 'Build a personal motivation system for your running training.',
      checklist: [
        { text: 'Do "why" exercise in writing (answer 5 questions)' },
        { text: 'Set 3 SMART goals (short, medium, long-term)' },
        { text: 'Start running journal (or set up app)' },
        { text: 'Define reward system (milestones + rewards)' },
        { text: 'Find running partner or try running group' },
        { text: 'Test 10-minute rule at next motivation dip' }
      ]
    }
  },

  notes: {
    de: [
      {
        front: 'Intrinsisch vs. extrinsisch?',
        back: 'Intrinsisch = aus Freude, Flow, Selbstverbesserung (langfristig stärker). Extrinsisch = Medaillen, Zeiten, Anerkennung. Ideal: Mix, aber intrinsisch als Fundament.'
      },
      {
        front: 'SMART-Ziele?',
        back: 'Spezifisch, Messbar, Attraktiv, Realistisch, Terminiert. Beispiel: "5K unter 25 Min bis Juni 2026" statt "schneller werden".'
      },
      {
        front: 'Motivationsloch - was tun?',
        back: '10-Min-Regel (nur 10 Min laufen), Pause erlauben, Routine ändern, Laufpartner, zurück zum "Warum". Manchmal ist Pause die beste Medizin.'
      }
    ],
    en: [
      {
        front: 'Intrinsic vs. extrinsic?',
        back: 'Intrinsic = from joy, flow, self-improvement (stronger long-term). Extrinsic = medals, times, recognition. Ideal: Mix, but intrinsic as foundation.'
      },
      {
        front: 'SMART goals?',
        back: 'Specific, Measurable, Achievable, Realistic, Time-bound. Example: "5K under 25 min by June 2026" instead of "get faster".'
      },
      {
        front: 'Motivation dip - what to do?',
        back: '10-min rule (just run 10 min), allow a break, change routine, running partner, back to "why". Sometimes a break is the best medicine.'
      }
    ]
  }
};
