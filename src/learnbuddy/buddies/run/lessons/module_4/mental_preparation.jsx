import React from 'react';

export const mentalPreparationLesson = {
  id: 'r4_m5_mental_preparation',
  title: { 
    en: '4.5 Mental Preparation', 
    de: '4.5 Mentale Vorbereitung' 
  },
  description: { 
    en: 'Build mental resilience with visualization, mantras, and pain management strategies to conquer race-day challenges.', 
    de: 'Baue mentale Resilienz mit Visualisierung, Mantras und Schmerz-Management-Strategien auf, um Race-Day-Herausforderungen zu meistern.' 
  },
  category: 'marathon',
  
  content: {
    de: `
### Mentale Vorbereitung: Dein Kopf gewinnt Rennen! 🧠

Laufen ist 90% mental – besonders bei Marathon! Dieser Modul zeigt Techniken wie Visualisierung, Mantras und Schmerz-Umgang. Trainiere deinen Geist wie deinen Körper!

---
### Warum mentale Stärke?

**Fakten:**
- 80% DNFs (Did Not Finish) sind mental (nicht physisch)
- Elite-Läufer: Mentales Training = körperliches
- Vorteile: Weniger Panik, bessere Pacing, Wand überwinden

**Schlüsselbereiche:**
- **Visualisierung:** Rennen im Kopf durchspielen
- **Mantras:** Positive Affirmationen wiederholen
- **Schmerz vs. Unbehagen:** Unterscheiden lernen
- **Mentale Ausdauer:** Lange Läufe als Training nutzen

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border border-green-200 dark:border-green-700 my-6">
  <h4 className="font-bold text-green-800 dark:text-green-200 mb-4">💡 Wissenschaft</h4>
  <p className="text-sm text-green-700 dark:text-green-300">
    Studien (z.B. Harvard): Mentales Training verbessert Performance um 20-30%! Visualisierung aktiviert dieselben Gehirnregionen wie reales Laufen.
  </p>
</div>

**Wann starten?**
- Täglich 5-10 Min, besonders in Taper
- Vor jedem Long Run: 2 Min visualisieren

---
### Visualisierung: Das Rennen vorab laufen

**Wie?**
- Stelle dir den gesamten Verlauf vor: Start, km 10, Wand, Finish
- Positive Bilder: Stark laufen, Crowd jubeln, Ziellinie
- Sinnlich: Füße auf Asphalt, Atmung, Mantra
- Dauer: 5 Min täglich, sitzend oder liegend

**Beispiel-Session:**
1. Atme tief (3x ein/aus)
2. Visualisiere Start: Ruhig, Pacing halten
3. Schwierige Momente: km 30, "Ich bin stark" sagen
4. Finish: Euphorie, Medaille

<table className="w-full border-collapse my-6">
  <thead>
    <tr className="bg-gray-100 dark:bg-gray-800">
      <th className="border p-3 text-left">Phase</th>
      <th className="border p-3 text-left">Visualisieren</th>
      <th className="border p-3 text-left">Emotion</th>
      <th className="border p-3 text-left">Mantra</th>
      <th className="border p-3 text-left">Dauer</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td className="border p-3"><strong>Start (km 0-10)</strong></td>
      <td className="border p-3">Kontrolle, Pace halten</td>
      <td className="border p-3">Ruhig, fokussiert</td>
      <td className="border p-3">"Steady, strong"</td>
      <td className="border p-3">1 Min</td>
    </tr>
    <tr>
      <td className="border p-3"><strong>Mitte (km 10-30)</strong></td>
      <td className="border p-3">Steady Tempo, Hydration</td>
      <td className="border p-3">Entschlossen</td>
      <td className="border p-3">"One step at a time"</td>
      <td className="border p-3">2 Min</td>
    </tr>
    <tr>
      <td className="border p-3"><strong>Wand (km 30-35)</strong></td>
      <td className="border p-3">Durchhalten, Gels</td>
      <td className="border p-3">Mutig</td>
      <td className="border p-3">"I've trained for this"</td>
      <td className="border p-3">1 Min</td>
    </tr>
    <tr>
      <td className="border p-3"><strong>Finish (km 35-42)</strong></td>
      <td className="border p-3">Push, Ziellinie</td>
      <td className="border p-3">Euphorisch</td>
      <td className="border p-3">"Almost there!"</td>
      <td className="border p-3">1 Min</td>
    </tr>
  </tbody>
</table>

**Praktische Übung:** Visualisiere täglich 5 Min dein Rennen. Fokussiere schwierige Momente. Nach Long Run: Reflektiere, was half.

---
### Mantras & Affirmationen: Dein innerer Coach

**Was sind Mantras?**
- Kurze, positive Sätze (wiederholen bei Müdigkeit)
- Beispiele: "Ich bin stark", "Ein Schritt nach dem anderen", "Prozess vertrauen"

**Wie nutzen?**
- Bei Training: Bei km 20+ wiederholen
- Race Day: Bei Wand oder Zweifel
- Personalisieren: Dein Warum (z.B. "Für Familie")

**Effektive Mantras:**
- Physisch: "Leicht und stark"
- Mental: "Ich kontrolliere das"
- Schmerz: "Das ist temporär"

<div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-700 my-6">
  <h4 className="font-bold text-blue-800 dark:text-blue-200 mb-4">💡 Mantra-Tipp</h4>
  <p className="text-sm text-blue-700 dark:text-blue-300">
    Wähle 2-3, die zu dir passen. Übe in Training: Sage laut bei Intervallen. Sie werden dein Anker!
  </p>
</div>

**Praktische Übung:** Finde dein Mantra (z.B. "Stark und steady"). Wiederhole bei nächstem Lauf. Notiere: Hilft es bei Müdigkeit?

---
### Umgang mit Schmerz: Unterscheiden lernen

**Schmerz vs. Unbehagen:**
- **Unbehagen:** Müdigkeit, Muskelbrennen (normal, durchhalten)
- **Schmerz:** Stechend, einseitig (Verletzung? Stoppen!)
- Regel: "Besser als gestern" – wenn es schlimmer wird, pausieren

**Strategien:**
- Ablenkung: Crowd zählen, Musik (falls erlaubt)
- Rhythmus: Atmung mit Schritten synchronisieren
- Positive Reframing: "Das macht mich stärker"

<div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl border border-purple-200 dark:border-purple-700 my-6">
  <h4 className="font-bold text-purple-800 dark:text-purple-200 mb-4">🎯 Praktische Übung</h4>
  <p className="text-sm text-purple-700 dark:text-purple-300">
    Bei schwierigem Lauf: Schmerz vs. Unbehagen analysieren. Nutze Mantra. Nachher: Journal – wann stoppen, wann durchhalten?
  </p>
</div>

**Häufige Fehler:**
- ❌ Immer durchlaufen → Verletzung
- ❌ Panik bei Unbehagen → Frühes Aufgeben
- ❌ Kein mentales Training → Race-Crash

<div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-xl border border-red-200 dark:border-red-700 my-6">
  <h4 className="font-bold text-red-800 dark:text-red-200 mb-4">⚠️ Warnung</h4>
  <p className="text-sm text-red-700 dark:text-red-300">
    Schmerz ignorieren ist gefährlich! Lerne deinen Körper lesen. Bei Zweifel: Walker-Modus oder DNF – Gesundheit first.
  </p>
</div>

---
### Zusammenfassung

**Mentale Vorbereitung:**
- ✅ Visualisierung: Täglich 5 Min Rennen durchspielen
- ✅ Mantras: Positive Sätze bei Müdigkeit ("Stark und steady")
- ✅ Schmerz: Unbehagen durchhalten, echten Schmerz stoppen
- ✅ Tipp: Geist trainieren wie Körper – täglich!
- ✅ Vorteil: 20-30% bessere Performance

**Merke dir:** Rennen gewinnt der Kopf. Dein Training ist da – jetzt der Geist übernehmen!
    `,
    en: `
### Mental Preparation: Your Mind Wins Races! 🧠

Running is 90% mental – especially marathon! This module shows techniques like visualization, mantras, and pain coping. Train your mind like your body!

---
### Why Mental Strength?

**Facts:**
- 80% DNFs (Did Not Finish) are mental (not physical)
- Elite runners: Mental training = physical
- Benefits: Less panic, better pacing, overcome wall

**Key Areas:**
- **Visualization:** Run the race in your head
- **Mantras:** Repeat positive affirmations
- **Pain vs. Discomfort:** Learn to distinguish
- **Mental Endurance:** Use long runs as practice

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border border-green-200 dark:border-green-700 my-6">
  <h4 className="font-bold text-green-800 dark:text-green-200 mb-4">💡 Science</h4>
  <p className="text-sm text-green-700 dark:text-green-300">
    Studies (e.g., Harvard): Mental training improves performance by 20-30%! Visualization activates same brain regions as real running.
  </p>
</div>

**When to Start?**
- Daily 5-10 min, especially in taper
- Before every long run: 2 min visualize

---
### Visualization: Run the Race Beforehand

**How?**
- Imagine the whole course: Start, km 10, wall, finish
- Positive images: Strong running, crowd cheering, finish line
- Sensory: Feet on asphalt, breathing, mantra
- Duration: 5 min daily, sitting or lying

**Example Session:**
1. Deep breathe (3x in/out)
2. Visualize start: Calm, hold pace
3. Tough moments: km 30, say "I'm strong"
4. Finish: Euphoria, medal

<table className="w-full border-collapse my-6">
  <thead>
    <tr className="bg-gray-100 dark:bg-gray-800">
      <th className="border p-3 text-left">Phase</th>
      <th className="border p-3 text-left">Visualize</th>
      <th className="border p-3 text-left">Emotion</th>
      <th className="border p-3 text-left">Mantra</th>
      <th className="border p-3 text-left">Duration</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td className="border p-3"><strong>Start (km 0-10)</strong></td>
      <td className="border p-3">Control, hold pace</td>
      <td className="border p-3">Calm, focused</td>
      <td className="border p-3">"Steady, strong"</td>
      <td className="border p-3">1 min</td>
    </tr>
    <tr>
      <td className="border p-3"><strong>Middle (km 10-30)</strong></td>
      <td className="border p-3">Steady tempo, hydration</td>
      <td className="border p-3">Determined</td>
      <td className="border p-3">"One step at a time"</td>
      <td className="border p-3">2 min</td>
    </tr>
    <tr>
      <td className="border p-3"><strong>Wall (km 30-35)</strong></td>
      <td className="border p-3">Persevere, gels</td>
      <td className="border p-3">Brave</td>
      <td className="border p-3">"I've trained for this"</td>
      <td className="border p-3">1 min</td>
    </tr>
    <tr>
      <td className="border p-3"><strong>Finish (km 35-42)</strong></td>
      <td className="border p-3">Push, finish line</td>
      <td className="border p-3">Euphoric</td>
      <td className="border p-3">"Almost there!"</td>
      <td className="border p-3">1 min</td>
    </tr>
  </tbody>
</table>

**Practical Exercise:** Visualize your race 5 min daily. Focus on tough moments. After long run: Reflect what helped.

---
### Mantras & Affirmations: Your Inner Coach

**What Are Mantras?**
- Short, positive phrases (repeat when tired)
- Examples: "I am strong", "One step at a time", "Trust the process"

**How to Use?**
- In training: Repeat at km 20+
- Race day: At wall or doubt
- Personalize: Your why (e.g., "For family")

**Effective Mantras:**
- Physical: "Light and strong"
- Mental: "I control this"
- Pain: "This is temporary"

<div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-700 my-6">
  <h4 className="font-bold text-blue-800 dark:text-blue-200 mb-4">💡 Mantra Tip</h4>
  <p className="text-sm text-blue-700 dark:text-blue-300">
    Choose 2-3 that fit you. Practice in training: Say aloud during intervals. They'll be your anchor!
  </p>
</div>

**Practical Exercise:** Find your mantra (e.g., "Strong and steady"). Repeat on next run. Note: Helps with fatigue?

---
### Dealing with Pain: Learn to Distinguish

**Pain vs. Discomfort:**
- **Discomfort:** Fatigue, muscle burn (normal, push through)
- **Pain:** Sharp, one-sided (injury? Stop!)
- Rule: "Better than yesterday" – if worsening, pause

**Strategies:**
- Distraction: Count crowd, music (if allowed)
- Rhythm: Sync breathing with steps
- Positive reframing: "This makes me stronger"

<div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl border border-purple-200 dark:border-purple-700 my-6">
  <h4 className="font-bold text-purple-800 dark:text-purple-200 mb-4">🎯 Practical Exercise</h4>
  <p className="text-sm text-purple-700 dark:text-purple-300">
    On tough run: Analyze pain vs. discomfort. Use mantra. After: Journal – when to stop, when to push?
  </p>
</div>

**Common Mistakes:**
- ❌ Always push through → Injury
- ❌ Panic at discomfort → Early quit
- ❌ No mental training → Race crash

<div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-xl border border-red-200 dark:border-red-700 my-6">
  <h4 className="font-bold text-red-800 dark:text-red-200 mb-4">⚠️ Warning</h4>
  <p className="text-sm text-red-700 dark:text-red-300">
    Ignoring pain is dangerous! Learn to read your body. If doubt: Walk mode or DNF – health first.
  </p>
</div>

---
### Summary

**Mental Preparation:**
- ✅ Visualization: 5 min daily race walkthrough
- ✅ Mantras: Positive phrases at fatigue ("Strong and steady")
- ✅ Pain: Push discomfort, stop real pain
- ✅ Tip: Train mind like body – daily!
- ✅ Benefit: 20-30% better performance

**Remember:** Races won by the mind. Your training is there – now let the mind take over!
    `
  },

  task: {
    de: {
      title: 'Mentales Training implementieren',
      description: 'Integriere Visualisierung und Mantras in dein Training.',
      checklist: [
        { text: 'Mantra wählen (z.B. "Ich bin stark")' },
        { text: 'Täglich 5 Min visualisieren: Vollständiges Rennen' },
        { text: 'Bei Long Run >20 km: Mantra nutzen' },
        { text: 'Schmerz vs. Unbehagen tracken (Journal)' },
        { text: 'Woche reflektieren: Mentale Fortschritte notieren' },
        { text: 'In Taper intensivieren: Täglich 10 Min' }
      ]
    },
    en: {
      title: 'Implement Mental Training',
      description: 'Integrate visualization and mantras into training.',
      checklist: [
        { text: 'Choose mantra (e.g., "I am strong")' },
        { text: 'Daily 5 min visualize: Full race' },
        { text: 'On long run >20 km: Use mantra' },
        { text: 'Track pain vs. discomfort (journal)' },
        { text: 'Weekly reflect: Note mental progress' },
        { text: 'Intensify in taper: Daily 10 min' }
      ]
    }
  },

  notes: {
    de: [
      {
        front: 'Visualisierung wie?',
        back: 'Täglich 5 Min: Rennen durchspielen (Start, Wand, Finish). Sinnlich, positiv. Aktiviert Gehirnregionen.'
      },
      {
        front: 'Mantras Beispiele?',
        back: '"Ich bin stark", "Ein Schritt nach dem anderen", "Vertrau dem Prozess". Bei Müdigkeit wiederholen.'
      },
      {
        front: 'Schmerz vs. Unbehagen?',
        back: 'Unbehagen (Brennen): Durchhalten. Schmerz (stechend): Stoppen. Besser als gestern-Regel.'
      }
    ],
    en: [
      {
        front: 'Visualization how?',
        back: 'Daily 5 min: Run the race (start, wall, finish). Sensory, positive. Activates brain regions.'
      },
      {
        front: 'Mantra examples?',
        back: '"I am strong", "One step at a time", "Trust the process". Repeat at fatigue.'
      },
      {
        front: 'Pain vs. discomfort?',
        back: 'Discomfort (burn): Push through. Pain (sharp): Stop. "Better than yesterday" rule.'
      }
    ]
  }
};

