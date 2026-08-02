import React from 'react';

export const mentalStrengthLesson = {
  id: 'r8_m2_mental_strength',
  title: { 
    en: '8.2 Mental Strength for Runners', 
    de: '8.2 Mentale Stärke für Läufer' 
  },
  description: { 
    en: 'Build mental toughness through visualization, mantras, mindfulness techniques, and strategies for dealing with pain and race-day anxiety.', 
    de: 'Baue mentale Stärke auf durch Visualisierung, Mantras, Achtsamkeitstechniken und Strategien für den Umgang mit Schmerz und Wettkampf-Nervosität.' 
  },
  category: 'lifestyle',
  
  content: {
    de: `
### Mentale Stärke: Der Kopf entscheidet! 🧠

Laufen ist zu 50% mental. Dein Körper kann mehr als dein Kopf glaubt. Mentale Stärke ist der Unterschied zwischen Aufgeben und Durchhalten. Dieser Modul zeigt Techniken für mentale Härte, Visualisierung und den Umgang mit Schmerz.

---
### Mentales Training: Die Grundlagen

**Warum mentales Training?**
- Dein Gehirn will dich "beschützen" (stoppt vor körperlichem Limit)
- Mentale Grenzen kommen vor körperlichen
- Trainierbar wie ein Muskel
- Top-Athleten trainieren mental genauso wie körperlich

**Die 4 Säulen mentaler Stärke:**

<table className="w-full border-collapse my-6">
  <thead>
    <tr className="bg-gray-100 dark:bg-gray-800">
      <th className="border p-3 text-left">Säule</th>
      <th className="border p-3 text-left">Beschreibung</th>
      <th className="border p-3 text-left">Technik</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td className="border p-3"><strong>Visualisierung</strong></td>
      <td className="border p-3">Erfolg mental durchspielen</td>
      <td className="border p-3">Rennen im Kopf vorstellen</td>
    </tr>
    <tr>
      <td className="border p-3"><strong>Self-Talk</strong></td>
      <td className="border p-3">Innerer Dialog steuern</td>
      <td className="border p-3">Mantras, positive Sätze</td>
    </tr>
    <tr>
      <td className="border p-3"><strong>Achtsamkeit</strong></td>
      <td className="border p-3">Im Moment sein</td>
      <td className="border p-3">Körper-Scan, Atem-Fokus</td>
    </tr>
    <tr>
      <td className="border p-3"><strong>Schmerzmanagement</strong></td>
      <td className="border p-3">Mit Unbehagen umgehen</td>
      <td className="border p-3">Dissoziation, Association</td>
    </tr>
  </tbody>
</table>

---
### Visualisierung

**Was ist Visualisierung?**
- Mentales Durchspielen von Situationen
- So realistisch wie möglich (alle Sinne einbeziehen)
- Gehirn kann nicht unterscheiden zwischen real und vorgestellt
- Aktiviert gleiche Nervenbahnen wie tatsächliche Bewegung

**Visualisierungs-Übung für Renntag:**
1. Setz dich ruhig hin, Augen schließen
2. Stelle dir den Renntag vor: Aufwachen, Frühstück, Anreise
3. Am Start: Nervosität akzeptieren, tiefes Atmen
4. Laufen: Spüre deine Beine, Atem, Rhythmus
5. Schwierige Phase (km 30+): Du hältst durch, Mantra
6. Ziellinie: Gefühl des Stolzes und der Freude
7. 5-10 Minuten, 3x pro Woche (letzte Woche vor Rennen: täglich)

---
### Mantras & Self-Talk

**Was sind Mantras?**
- Kurze, kraftvolle Sätze, die du innerlich wiederholst
- Ersetzen negative Gedanken
- Geben Fokus und Energie in schwierigen Momenten

**Mantra-Beispiele:**
- "Ein Schritt nach dem anderen"
- "Ich bin stark, ich bin bereit"
- "Schmerz ist temporär, Stolz ist für immer"
- "Relax, run, repeat"
- "Ich kann das"
- "Jeder Kilometer zählt"

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border border-green-200 dark:border-green-700 my-6">
  <h4 className="font-bold text-green-800 dark:text-green-200 mb-4">🎯 Finde dein persönliches Mantra</h4>
  <p className="text-sm text-green-700 dark:text-green-300 mb-3">
    Dein Mantra muss für DICH funktionieren. Teste verschiedene bei harten Trainingsläufen:
  </p>
  <ul className="list-disc list-inside space-y-2 text-sm text-green-700 dark:text-green-300">
    <li>Motivierend? (Gibt dir Energie)</li>
    <li>Kurz? (Max. 5-7 Wörter)</li>
    <li>Rhythmisch? (Passt zum Schrittrhythmus)</li>
    <li>Persönlich? (Hat Bedeutung für dich)</li>
  </ul>
</div>

**Negativen Self-Talk erkennen:**
- "Ich kann nicht mehr" → "Ich entscheide, weiterzulaufen"
- "Das ist zu hart" → "Ich bin härter als das"
- "Warum tue ich mir das an?" → "Weil ich es kann"
- "Noch so weit" → "Nur noch dieser Kilometer"

---
### Achtsamkeit beim Laufen

**Laufen als Meditation:**
- Fokus auf den Moment (nicht auf km 35 denken bei km 10)
- Körper-Scan: Wie fühlen sich Füße, Beine, Atem an?
- Gedanken beobachten, nicht bewerten
- Umgebung wahrnehmen (Geräusche, Gerüche, Sicht)

**Atem-Techniken:**
- **Box Breathing:** 4 Schritte ein, 4 halten, 4 aus, 4 halten (beruhigend)
- **Rhythmus-Atmung:** 3 Schritte ein, 2 aus (oder 2:2) - synchronisiert Laufen
- **Tiefes Ausatmen:** Bei Anspannung lang ausatmen (aktiviert Parasympathikus)

---
### Umgang mit Schmerz & Wettkampf-Nervosität

**Schmerz vs. Verletzung:**
- **Unbehagen:** Muskelermüdung, schwere Beine, Atemnot → normal, durchlaufbar
- **Schmerz:** Lokal, scharf, wird schlimmer → STOPPEN, potenzielle Verletzung

**Strategien für Unbehagen:**
- **Assoziation:** Fokus auf Körper (Technik, Atem, Form optimieren)
- **Dissoziation:** Ablenkung (Musik, Gedanken, Umgebung)
- **Chunking:** Rennen in kleine Stücke teilen ("nur noch bis zur Laterne")
- **Countdown:** Rückwärts zählen (gibt Kontrollgefühl)

<div className="bg-amber-50 dark:bg-amber-900/20 p-6 rounded-xl border border-amber-200 dark:border-amber-700 my-6">
  <h4 className="font-bold text-amber-800 dark:text-amber-200 mb-4">💡 Wettkampf-Nervosität</h4>
  <p className="text-sm text-amber-700 dark:text-amber-300 mb-3">
    Nervosität ist normal und sogar nützlich! Sie zeigt, dass dir etwas wichtig ist.
  </p>
  <ul className="list-disc list-inside space-y-2 text-sm text-amber-700 dark:text-amber-300">
    <li><strong>Umdeuten:</strong> "Ich bin nicht nervös, ich bin aufgeregt!"</li>
    <li><strong>Routine:</strong> Fester Ablauf vor dem Rennen (Kontrolle)</li>
    <li><strong>Atmen:</strong> Box Breathing vor dem Start</li>
    <li><strong>Fokus:</strong> Auf das, was du kontrollieren kannst (Tempo, Atem)</li>
    <li><strong>Erfahrung:</strong> Je mehr Rennen, desto weniger Nervosität</li>
  </ul>
</div>

---
### Zusammenfassung

**Key Takeaways:**
- 🧠 **Laufen ist 50% mental** - trainiere deinen Kopf wie deinen Körper
- 🎬 **Visualisierung:** Rennen mental durchspielen (alle Sinne, 3x/Woche)
- 💬 **Mantras:** Kurze, kraftvolle Sätze für schwierige Momente
- 🧘 **Achtsamkeit:** Im Moment sein, Körper-Scan, Atem-Fokus
- 💪 **Schmerz:** Unterscheide Unbehagen (ok) vs. Verletzung (stopp)
- 😰 **Nervosität:** Normal! Umdeuten: "Ich bin aufgeregt, nicht nervös"
    `,
    en: `
### Mental Strength: The Mind Decides! 🧠

Running is 50% mental. Your body can do more than your mind believes. Mental strength is the difference between giving up and pushing through. This module covers techniques for mental toughness, visualization, and dealing with pain.

---
### Mental Training: The Basics

**Why Mental Training?**
- Your brain wants to "protect" you (stops before physical limit)
- Mental limits come before physical ones
- Trainable like a muscle
- Top athletes train mentally as much as physically

**The 4 Pillars of Mental Strength:**

<table className="w-full border-collapse my-6">
  <thead>
    <tr className="bg-gray-100 dark:bg-gray-800">
      <th className="border p-3 text-left">Pillar</th>
      <th className="border p-3 text-left">Description</th>
      <th className="border p-3 text-left">Technique</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td className="border p-3"><strong>Visualization</strong></td>
      <td className="border p-3">Mentally rehearse success</td>
      <td className="border p-3">Imagine race in your mind</td>
    </tr>
    <tr>
      <td className="border p-3"><strong>Self-Talk</strong></td>
      <td className="border p-3">Control inner dialogue</td>
      <td className="border p-3">Mantras, positive phrases</td>
    </tr>
    <tr>
      <td className="border p-3"><strong>Mindfulness</strong></td>
      <td className="border p-3">Be in the moment</td>
      <td className="border p-3">Body scan, breath focus</td>
    </tr>
    <tr>
      <td className="border p-3"><strong>Pain Management</strong></td>
      <td className="border p-3">Deal with discomfort</td>
      <td className="border p-3">Dissociation, association</td>
    </tr>
  </tbody>
</table>

---
### Visualization

**What is Visualization?**
- Mentally rehearsing situations
- As realistic as possible (engage all senses)
- Brain can't distinguish between real and imagined
- Activates same neural pathways as actual movement

**Visualization Exercise for Race Day:**
1. Sit quietly, close eyes
2. Imagine race day: Waking up, breakfast, arrival
3. At the start: Accept nervousness, deep breathing
4. Running: Feel your legs, breath, rhythm
5. Tough phase (km 30+): You push through, mantra
6. Finish line: Feeling of pride and joy
7. 5-10 minutes, 3x per week (last week before race: daily)

---
### Mantras & Self-Talk

**What are Mantras?**
- Short, powerful phrases you repeat internally
- Replace negative thoughts
- Provide focus and energy in difficult moments

**Mantra Examples:**
- "One step at a time"
- "I am strong, I am ready"
- "Pain is temporary, pride is forever"
- "Relax, run, repeat"
- "I can do this"
- "Every kilometer counts"

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border border-green-200 dark:border-green-700 my-6">
  <h4 className="font-bold text-green-800 dark:text-green-200 mb-4">🎯 Find Your Personal Mantra</h4>
  <p className="text-sm text-green-700 dark:text-green-300 mb-3">
    Your mantra must work for YOU. Test different ones during hard training runs:
  </p>
  <ul className="list-disc list-inside space-y-2 text-sm text-green-700 dark:text-green-300">
    <li>Motivating? (Gives you energy)</li>
    <li>Short? (Max 5-7 words)</li>
    <li>Rhythmic? (Matches your step rhythm)</li>
    <li>Personal? (Has meaning for you)</li>
  </ul>
</div>

**Recognizing Negative Self-Talk:**
- "I can't anymore" → "I choose to keep running"
- "This is too hard" → "I'm tougher than this"
- "Why am I doing this?" → "Because I can"
- "Still so far" → "Just this kilometer"

---
### Mindfulness in Running

**Running as Meditation:**
- Focus on the moment (don't think about km 35 at km 10)
- Body scan: How do feet, legs, breath feel?
- Observe thoughts, don't judge
- Notice surroundings (sounds, smells, sights)

**Breathing Techniques:**
- **Box Breathing:** 4 steps in, 4 hold, 4 out, 4 hold (calming)
- **Rhythmic Breathing:** 3 steps in, 2 out (or 2:2) - synchronizes running
- **Deep Exhale:** When tense, exhale long (activates parasympathetic)

---
### Dealing with Pain & Race-Day Anxiety

**Discomfort vs. Injury:**
- **Discomfort:** Muscle fatigue, heavy legs, breathlessness → normal, run through
- **Pain:** Local, sharp, gets worse → STOP, potential injury

**Strategies for Discomfort:**
- **Association:** Focus on body (optimize technique, breath, form)
- **Dissociation:** Distraction (music, thoughts, surroundings)
- **Chunking:** Break race into small pieces ("just to the next lamppost")
- **Countdown:** Count backwards (gives sense of control)

<div className="bg-amber-50 dark:bg-amber-900/20 p-6 rounded-xl border border-amber-200 dark:border-amber-700 my-6">
  <h4 className="font-bold text-amber-800 dark:text-amber-200 mb-4">💡 Race-Day Anxiety</h4>
  <p className="text-sm text-amber-700 dark:text-amber-300 mb-3">
    Nervousness is normal and even useful! It shows something matters to you.
  </p>
  <ul className="list-disc list-inside space-y-2 text-sm text-amber-700 dark:text-amber-300">
    <li><strong>Reframe:</strong> "I'm not nervous, I'm excited!"</li>
    <li><strong>Routine:</strong> Fixed pre-race routine (control)</li>
    <li><strong>Breathe:</strong> Box breathing before start</li>
    <li><strong>Focus:</strong> On what you can control (pace, breathing)</li>
    <li><strong>Experience:</strong> More races = less nervousness</li>
  </ul>
</div>

---
### Summary

**Key Takeaways:**
- 🧠 **Running is 50% mental** - train your mind like your body
- 🎬 **Visualization:** Mentally rehearse races (all senses, 3x/week)
- 💬 **Mantras:** Short, powerful phrases for difficult moments
- 🧘 **Mindfulness:** Be in the moment, body scan, breath focus
- 💪 **Pain:** Distinguish discomfort (ok) vs. injury (stop)
- 😰 **Anxiety:** Normal! Reframe: "I'm excited, not nervous"
    `
  },

  task: {
    de: {
      title: 'Mentales Training starten',
      description: 'Beginne mit mentalem Training und finde deine persönlichen Techniken.',
      checklist: [
        { text: 'Visualisierungs-Übung durchführen (5-10 Min, Augen zu)' },
        { text: '3 verschiedene Mantras bei hartem Lauf testen' },
        { text: 'Einen Lauf ohne Musik machen (Achtsamkeit üben)' },
        { text: 'Negativen Self-Talk identifizieren und umformulieren' },
        { text: 'Box Breathing vor dem nächsten Lauf üben' },
        { text: 'Persönliches Mantra festlegen' }
      ]
    },
    en: {
      title: 'Start Mental Training',
      description: 'Begin mental training and find your personal techniques.',
      checklist: [
        { text: 'Do visualization exercise (5-10 min, eyes closed)' },
        { text: 'Test 3 different mantras during a hard run' },
        { text: 'Do one run without music (practice mindfulness)' },
        { text: 'Identify negative self-talk and reframe it' },
        { text: 'Practice box breathing before next run' },
        { text: 'Choose your personal mantra' }
      ]
    }
  },

  notes: {
    de: [
      {
        front: '4 Säulen mentaler Stärke?',
        back: '1) Visualisierung (Erfolg mental durchspielen), 2) Self-Talk (Mantras, positive Sätze), 3) Achtsamkeit (im Moment sein), 4) Schmerzmanagement (Dissoziation/Assoziation).'
      },
      {
        front: 'Wettkampf-Nervosität?',
        back: 'Normal und nützlich! Umdeuten: "Aufgeregt, nicht nervös". Routine vor dem Rennen. Box Breathing. Fokus auf Kontrollierbares (Tempo, Atem).'
      },
      {
        front: 'Unbehagen vs. Verletzung?',
        back: 'Unbehagen: Muskelermüdung, schwere Beine, Atemnot = normal, durchlaufbar. Verletzung: Lokal, scharf, wird schlimmer = STOPP!'
      }
    ],
    en: [
      {
        front: '4 pillars of mental strength?',
        back: '1) Visualization (mentally rehearse success), 2) Self-talk (mantras, positive phrases), 3) Mindfulness (be in the moment), 4) Pain management (dissociation/association).'
      },
      {
        front: 'Race-day anxiety?',
        back: 'Normal and useful! Reframe: "Excited, not nervous". Pre-race routine. Box breathing. Focus on controllables (pace, breathing).'
      },
      {
        front: 'Discomfort vs. injury?',
        back: 'Discomfort: Muscle fatigue, heavy legs, breathlessness = normal, run through. Injury: Local, sharp, gets worse = STOP!'
      }
    ]
  }
};
