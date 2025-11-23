import React from 'react';

export const vocabularyLesson = {
  id: 'g1_m1_vocabulary',
  title: { 
    en: '1.3 Fundamental Vocabulary (The Gym ABC)', 
    de: '1.3 Fundamentales Vokabular (Das Gym-ABC)' 
  },
  description: { 
    en: 'Learn the essential gym terminology so you understand what everyone is talking about.', 
    de: 'Lerne die wichtigsten Gym-Begriffe, damit du verstehst, wovon alle reden.' 
  },
  category: 'basics',
  
  content: {
    de: `
### Das Gym-ABC: Sprich die Sprache des Krafttrainings 💬

Wenn du zum ersten Mal ins Studio gehst, wirst du Begriffe hören wie "3x10", "RIR", "Progressive Overload" oder "Compound". 
Was bedeutet das alles? In dieser Lektion lernst du das fundamentale Vokabular, das du brauchst, um Trainingspläne zu verstehen und mit anderen zu kommunizieren.

---

### Die Grundbegriffe: Sets, Reps & Pausen

<div className="space-y-6 my-6">

<div className="p-6 bg-blue-50 dark:bg-blue-900/20 rounded-lg border-l-4 border-blue-500">
  <h4 className="font-bold text-blue-800 dark:text-blue-200 mb-3 text-lg">🔄 Wiederholung (Rep / Repetition)</h4>
  <p className="text-sm text-blue-700 dark:text-blue-300 mb-3">
    Die <strong>einmalige Ausführung</strong> einer Übung. 
  </p>
  <div className="bg-blue-100 dark:bg-blue-900/40 p-4 rounded-lg">
    <p className="text-sm text-blue-800 dark:text-blue-200 font-semibold mb-2">Beispiel:</p>
    <p className="text-sm text-blue-700 dark:text-blue-300">
      Beim Bankdrücken: 1x die Stange runter zur Brust und wieder hoch = 1 Wiederholung (1 Rep)
    </p>
  </div>
</div>

<div className="p-6 bg-green-50 dark:bg-green-900/20 rounded-lg border-l-4 border-green-500">
  <h4 className="font-bold text-green-800 dark:text-green-200 mb-3 text-lg">📦 Satz (Set)</h4>
  <p className="text-sm text-green-700 dark:text-green-300 mb-3">
    Eine <strong>Gruppe von Wiederholungen</strong> ohne Pause dazwischen.
  </p>
  <div className="bg-green-100 dark:bg-green-900/40 p-4 rounded-lg">
    <p className="text-sm text-green-800 dark:text-green-200 font-semibold mb-2">Beispiel:</p>
    <p className="text-sm text-green-700 dark:text-green-300">
      "3 Sätze à 10 Wiederholungen" = <strong>3x10</strong>
      <br/>Das bedeutet: 10 Reps → Pause → 10 Reps → Pause → 10 Reps
    </p>
  </div>
</div>

<div className="p-6 bg-purple-50 dark:bg-purple-900/20 rounded-lg border-l-4 border-purple-500">
  <h4 className="font-bold text-purple-800 dark:text-purple-200 mb-3 text-lg">⏸️ Pause (Rest)</h4>
  <p className="text-sm text-purple-700 dark:text-purple-300 mb-3">
    Die <strong>Erholungszeit zwischen den Sätzen</strong>. Essentiell für Regeneration!
  </p>
  <div className="bg-purple-100 dark:bg-purple-900/40 p-4 rounded-lg space-y-2">
    <p className="text-sm text-purple-800 dark:text-purple-200 font-semibold">Typische Pausen:</p>
    <ul className="text-sm text-purple-700 dark:text-purple-300 space-y-1">
      <li><strong>60-90 Sek:</strong> Isolationsübungen (z.B. Bizeps Curls)</li>
      <li><strong>90-120 Sek:</strong> Hypertrophie-Training (8-12 Reps)</li>
      <li><strong>2-5 Min:</strong> Schwere Grundübungen (Kniebeuge, Kreuzheben)</li>
    </ul>
  </div>
</div>

</div>

---

### Training-Parameter: Intensität, Volumen & Frequenz

Diese drei Begriffe sind die Stellschrauben deines Trainings. Verstehe sie, und du verstehst, wie Training funktioniert!

<div className="grid md:grid-cols-3 gap-4 my-6">

<div className="p-5 bg-red-50 dark:bg-red-900/20 rounded-lg border border-red-200 dark:border-red-700">
  <div className="text-3xl mb-3">⚡</div>
  <h4 className="font-bold text-red-800 dark:text-red-200 mb-2">Intensität</h4>
  <p className="text-sm text-red-700 dark:text-red-300 mb-3">
    <strong>Wie schwer</strong> das Gewicht im Verhältnis zu deiner Maximalkraft ist.
  </p>
  <div className="bg-red-100 dark:bg-red-900/40 p-3 rounded text-sm text-red-800 dark:text-red-200">
    Oft in % der 1RM angegeben (1 Rep Maximum = das maximale Gewicht für 1 Wiederholung)
  </div>
</div>

<div className="p-5 bg-orange-50 dark:bg-orange-900/20 rounded-lg border border-orange-200 dark:border-orange-700">
  <div className="text-3xl mb-3">📊</div>
  <h4 className="font-bold text-orange-800 dark:text-orange-200 mb-2">Volumen</h4>
  <p className="text-sm text-orange-700 dark:text-orange-300 mb-3">
    Die <strong>Gesamtbelastung</strong> deines Trainings.
  </p>
  <div className="bg-orange-100 dark:bg-orange-900/40 p-3 rounded text-sm text-orange-800 dark:text-orange-200">
    Formel: Sätze × Wiederholungen × Gewicht
    <br/>Beispiel: 3 × 10 × 50kg = 1500kg Volumen
  </div>
</div>

<div className="p-5 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-700">
  <div className="text-3xl mb-3">📅</div>
  <h4 className="font-bold text-blue-800 dark:text-blue-200 mb-2">Frequenz</h4>
  <p className="text-sm text-blue-700 dark:text-blue-300 mb-3">
    <strong>Wie oft</strong> du eine Muskelgruppe oder Übung pro Woche trainierst.
  </p>
  <div className="bg-blue-100 dark:bg-blue-900/40 p-3 rounded text-sm text-blue-800 dark:text-blue-200">
    Beispiel: Brust 2x pro Woche = Frequenz von 2
  </div>
</div>

</div>

---

### Das Kernprinzip: Progressive Overload

<div className="my-6 p-6 bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 rounded-xl border-2 border-amber-300 dark:border-amber-700">

<div className="flex items-center gap-3 mb-4">
  <div className="text-4xl">📈</div>
  <h3 className="text-2xl font-bold text-amber-900 dark:text-amber-100">Progressive Overload</h3>
</div>

<p className="text-amber-800 dark:text-amber-200 mb-4 text-lg">
  <strong>Das wichtigste Konzept im Krafttraining!</strong>
</p>

<p className="text-amber-700 dark:text-amber-300 mb-4">
  Um stärker zu werden oder Muskeln aufzubauen, muss der Trainingsreiz <strong>mit der Zeit gesteigert werden</strong>. 
  Der Körper passt sich nur an, wenn er muss. Wenn du immer das Gleiche machst, passiert nichts mehr.
</p>

<div className="bg-amber-100 dark:bg-amber-900/40 p-5 rounded-lg">
  <p className="font-semibold text-amber-900 dark:text-amber-100 mb-3">5 Wege, Progressive Overload zu erreichen:</p>
  <ol className="space-y-2 text-sm text-amber-800 dark:text-amber-200">
    <li><strong>1. Gewicht steigern:</strong> 50kg → 52,5kg (häufigste Methode)</li>
    <li><strong>2. Wiederholungen steigern:</strong> 3x8 → 3x9 → 3x10</li>
    <li><strong>3. Sätze steigern:</strong> 3x10 → 4x10</li>
    <li><strong>4. Pausen verkürzen:</strong> 120 Sek → 90 Sek (für Kraftausdauer)</li>
    <li><strong>5. Technik verbessern:</strong> Bessere ROM oder Mind-Muscle-Connection</li>
  </ol>
</div>

</div>

---

### Bewegungsarten: Konzentrisch vs. Exzentrisch

Jede Wiederholung besteht aus zwei Phasen. Beide sind wichtig!

<div className="grid md:grid-cols-2 gap-6 my-6">

<div className="p-6 bg-green-50 dark:bg-green-900/20 rounded-lg border-l-4 border-green-500">
  <h4 className="font-bold text-green-800 dark:text-green-200 mb-3 flex items-center gap-2">
    <span className="text-2xl">💪</span> Konzentrisch (Positiv)
  </h4>
  <p className="text-sm text-green-700 dark:text-green-300 mb-3">
    Die <strong>Muskelverkürzung</strong> – das Drücken/Ziehen des Gewichts.
  </p>
  <div className="bg-green-100 dark:bg-green-900/40 p-4 rounded-lg">
    <p className="text-sm text-green-800 dark:text-green-200 font-semibold mb-2">Beispiele:</p>
    <ul className="text-sm text-green-700 dark:text-green-300 space-y-1">
      <li>Bankdrücken: Die Stange nach oben drücken</li>
      <li>Klimmzug: Sich nach oben ziehen</li>
      <li>Kniebeuge: Aus der Hocke hochkommen</li>
    </ul>
  </div>
</div>

<div className="p-6 bg-blue-50 dark:bg-blue-900/20 rounded-lg border-l-4 border-blue-500">
  <h4 className="font-bold text-blue-800 dark:text-blue-200 mb-3 flex items-center gap-2">
    <span className="text-2xl">🔽</span> Exzentrisch (Negativ)
  </h4>
  <p className="text-sm text-blue-700 dark:text-blue-300 mb-3">
    Die <strong>Muskelverlängerung</strong> – das kontrollierte Ablassen des Gewichts.
  </p>
  <div className="bg-blue-100 dark:bg-blue-900/40 p-4 rounded-lg">
    <p className="text-sm text-blue-800 dark:text-blue-200 font-semibold mb-2">Beispiele:</p>
    <ul className="text-sm text-blue-700 dark:text-blue-300 space-y-1">
      <li>Bankdrücken: Die Stange zur Brust ablassen</li>
      <li>Klimmzug: Sich kontrolliert ablassen</li>
      <li>Kniebeuge: In die Hocke gehen</li>
    </ul>
  </div>
  <div className="mt-3 p-3 bg-blue-200 dark:bg-blue-800/40 rounded">
    <p className="text-sm text-blue-900 dark:text-blue-100 font-semibold">
      ⚠️ Die exzentrische Phase ist besonders wichtig für Muskelwachstum! Nicht einfach fallen lassen!
    </p>
  </div>
</div>

</div>

---

### Übungstypen: Compound vs. Isolation

Nicht alle Übungen sind gleich. Es gibt zwei Hauptkategorien:

<div className="space-y-6 my-6">

<div className="p-6 bg-purple-50 dark:bg-purple-900/20 rounded-lg border-l-4 border-purple-500">
  <h4 className="font-bold text-purple-800 dark:text-purple-200 mb-3 text-lg flex items-center gap-2">
    <span className="text-2xl">🏋️</span> Compound (Verbundübung / Grundübung)
  </h4>
  <p className="text-sm text-purple-700 dark:text-purple-300 mb-4">
    Trainiert <strong>mehrere Gelenke und Muskeln gleichzeitig</strong>. Die Basis jedes guten Trainingsplans!
  </p>
  
  <div className="bg-purple-100 dark:bg-purple-900/40 p-4 rounded-lg mb-4">
    <p className="text-sm text-purple-800 dark:text-purple-200 font-semibold mb-2">Vorteile:</p>
    <ul className="text-sm text-purple-700 dark:text-purple-300 space-y-1 list-disc list-inside">
      <li>Trainiert viele Muskeln auf einmal (effizient!)</li>
      <li>Erlaubt schwere Gewichte (mehr Kraft)</li>
      <li>Verbrennt mehr Kalorien</li>
      <li>Funktionell (ähnlich wie Alltagsbewegungen)</li>
    </ul>
  </div>

  <div className="bg-purple-100 dark:bg-purple-900/40 p-4 rounded-lg">
    <p className="text-sm text-purple-800 dark:text-purple-200 font-semibold mb-2">Beispiele:</p>
    <ul className="text-sm text-purple-700 dark:text-purple-300 space-y-1">
      <li><strong>Kniebeuge (Squat):</strong> Quads, Gluteus, Hamstrings, Core</li>
      <li><strong>Bankdrücken (Bench Press):</strong> Brust, Trizeps, vordere Schulter</li>
      <li><strong>Kreuzheben (Deadlift):</strong> Rücken, Gluteus, Hamstrings, Core</li>
      <li><strong>Klimmzüge (Pull-ups):</strong> Rücken, Bizeps, Core</li>
      <li><strong>Überkopfdrücken (Overhead Press):</strong> Schultern, Trizeps, Core</li>
    </ul>
  </div>
</div>

<div className="p-6 bg-orange-50 dark:bg-orange-900/20 rounded-lg border-l-4 border-orange-500">
  <h4 className="font-bold text-orange-800 dark:text-orange-200 mb-3 text-lg flex items-center gap-2">
    <span className="text-2xl">🎯</span> Isolation (Isolationsübung)
  </h4>
  <p className="text-sm text-orange-700 dark:text-orange-300 mb-4">
    Trainiert <strong>nur ein Gelenk und einen Muskel</strong>. Für gezieltes Training einzelner Muskeln.
  </p>
  
  <div className="bg-orange-100 dark:bg-orange-900/40 p-4 rounded-lg mb-4">
    <p className="text-sm text-orange-800 dark:text-orange-200 font-semibold mb-2">Vorteile:</p>
    <ul className="text-sm text-orange-700 dark:text-orange-300 space-y-1 list-disc list-inside">
      <li>Gezieltes Training schwacher Muskeln</li>
      <li>Weniger Erschöpfung (gut am Ende des Trainings)</li>
      <li>Guter "Pump" (Muskel fühlt sich voll an)</li>
      <li>Ausgleich von Dysbalancen</li>
    </ul>
  </div>

  <div className="bg-orange-100 dark:bg-orange-900/40 p-4 rounded-lg">
    <p className="text-sm text-orange-800 dark:text-orange-200 font-semibold mb-2">Beispiele:</p>
    <ul className="text-sm text-orange-700 dark:text-orange-300 space-y-1">
      <li><strong>Bizeps Curls:</strong> Nur Bizeps</li>
      <li><strong>Trizeps Pushdowns:</strong> Nur Trizeps</li>
      <li><strong>Seitheben (Lateral Raises):</strong> Nur seitliche Schulter</li>
      <li><strong>Beinstrecker (Leg Extensions):</strong> Nur Quadrizeps</li>
      <li><strong>Beinbeuger (Leg Curls):</strong> Nur Hamstrings</li>
    </ul>
  </div>
</div>

</div>

<div className="my-6 p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg border border-yellow-200 dark:border-yellow-700">
  <p className="text-sm text-yellow-800 dark:text-yellow-200">
    <strong>💡 Faustregel:</strong> Beginne dein Training mit Compound-Übungen (wenn du frisch bist), 
    beende es mit Isolation (wenn du schon müde bist). 80% Compound, 20% Isolation ist ein guter Mix für Anfänger!
  </p>
</div>

---

### Weitere wichtige Begriffe

<div className="grid md:grid-cols-2 gap-4 my-6">

<div className="p-4 bg-stone-50 dark:bg-stone-900 rounded-lg border border-stone-200 dark:border-stone-700">
  <h5 className="font-bold text-stone-800 dark:text-stone-200 mb-2">ROM (Range of Motion)</h5>
  <p className="text-sm text-stone-700 dark:text-stone-300">
    Der volle Bewegungsumfang einer Übung. Wichtig für vollständiges Muskelwachstum!
  </p>
</div>

<div className="p-4 bg-stone-50 dark:bg-stone-900 rounded-lg border border-stone-200 dark:border-stone-700">
  <h5 className="font-bold text-stone-800 dark:text-stone-200 mb-2">RIR (Reps in Reserve)</h5>
  <p className="text-sm text-stone-700 dark:text-stone-300">
    "Wie viele Wiederholungen hättest du noch geschafft?" RIR 2 = du hättest noch 2 Reps geschafft.
  </p>
</div>

<div className="p-4 bg-stone-50 dark:bg-stone-900 rounded-lg border border-stone-200 dark:border-stone-700">
  <h5 className="font-bold text-stone-800 dark:text-stone-200 mb-2">1RM (One Rep Maximum)</h5>
  <p className="text-sm text-stone-700 dark:text-stone-300">
    Das maximale Gewicht, das du für genau 1 saubere Wiederholung schaffst.
  </p>
</div>

<div className="p-4 bg-stone-50 dark:bg-stone-900 rounded-lg border border-stone-200 dark:border-stone-700">
  <h5 className="font-bold text-stone-800 dark:text-stone-200 mb-2">Deload</h5>
  <p className="text-sm text-stone-700 dark:text-stone-300">
    Eine Woche mit stark reduziertem Volumen/Intensität zur Regeneration (alle 4-8 Wochen).
  </p>
</div>

<div className="p-4 bg-stone-50 dark:bg-stone-900 rounded-lg border border-stone-200 dark:border-stone-700">
  <h5 className="font-bold text-stone-800 dark:text-stone-200 mb-2">Superset</h5>
  <p className="text-sm text-stone-700 dark:text-stone-300">
    Zwei Übungen hintereinander ohne Pause (z.B. Bizeps Curls → Trizeps Pushdowns).
  </p>
</div>

<div className="p-4 bg-stone-50 dark:bg-stone-900 rounded-lg border border-stone-200 dark:border-stone-700">
  <h5 className="font-bold text-stone-800 dark:text-stone-200 mb-2">Drop Set</h5>
  <p className="text-sm text-stone-700 dark:text-stone-300">
    Satz bis Versagen, dann sofort Gewicht reduzieren und weitermachen. Sehr intensiv!
  </p>
</div>

</div>

---

### Zusammenfassung: Dein Gym-Vokabular

<div className="my-6 p-6 bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 rounded-xl border border-red-200 dark:border-red-700">

#### ✅ Die wichtigsten Begriffe auf einen Blick:

- **Rep:** 1 Wiederholung | **Set:** Gruppe von Reps | **3x10:** 3 Sätze à 10 Wiederholungen
- **Intensität:** Wie schwer | **Volumen:** Gesamtbelastung | **Frequenz:** Wie oft pro Woche
- **Progressive Overload:** Mit der Zeit steigern (Gewicht, Reps, Sätze)
- **Konzentrisch:** Muskel verkürzt sich (heben) | **Exzentrisch:** Muskel verlängert sich (senken)
- **Compound:** Mehrere Muskeln | **Isolation:** Ein Muskel
- **ROM:** Voller Bewegungsumfang | **RIR:** Reps in Reserve

</div>

**In der nächsten Lektion** lernst du die **Basis-Anatomie** – deine Muskel-Landkarte. 
Damit weißt du, welche Muskeln du trainierst und warum!

📚 **Jetzt sprichst du die Sprache des Gyms!**
    `,
    en: `
### The Gym ABC: Speak the Language of Strength Training 💬

When you first go to the gym, you'll hear terms like "3x10", "RIR", "Progressive Overload" or "Compound". 
What does it all mean? In this lesson, you'll learn the fundamental vocabulary you need to understand training plans and communicate with others.

---

### The Basic Terms: Sets, Reps & Rest

<div className="space-y-6 my-6">

<div className="p-6 bg-blue-50 dark:bg-blue-900/20 rounded-lg border-l-4 border-blue-500">
  <h4 className="font-bold text-blue-800 dark:text-blue-200 mb-3 text-lg">🔄 Repetition (Rep)</h4>
  <p className="text-sm text-blue-700 dark:text-blue-300 mb-3">
    The <strong>single execution</strong> of an exercise.
  </p>
  <div className="bg-blue-100 dark:bg-blue-900/40 p-4 rounded-lg">
    <p className="text-sm text-blue-800 dark:text-blue-200 font-semibold mb-2">Example:</p>
    <p className="text-sm text-blue-700 dark:text-blue-300">
      For bench press: 1x lowering the bar to chest and back up = 1 repetition (1 rep)
    </p>
  </div>
</div>

<div className="p-6 bg-green-50 dark:bg-green-900/20 rounded-lg border-l-4 border-green-500">
  <h4 className="font-bold text-green-800 dark:text-green-200 mb-3 text-lg">📦 Set</h4>
  <p className="text-sm text-green-700 dark:text-green-300 mb-3">
    A <strong>group of repetitions</strong> without rest in between.
  </p>
  <div className="bg-green-100 dark:bg-green-900/40 p-4 rounded-lg">
    <p className="text-sm text-green-800 dark:text-green-200 font-semibold mb-2">Example:</p>
    <p className="text-sm text-green-700 dark:text-green-300">
      "3 sets of 10 repetitions" = <strong>3x10</strong>
      <br/>This means: 10 reps → rest → 10 reps → rest → 10 reps
    </p>
  </div>
</div>

<div className="p-6 bg-purple-50 dark:bg-purple-900/20 rounded-lg border-l-4 border-purple-500">
  <h4 className="font-bold text-purple-800 dark:text-purple-200 mb-3 text-lg">⏸️ Rest</h4>
  <p className="text-sm text-purple-700 dark:text-purple-300 mb-3">
    The <strong>recovery time between sets</strong>. Essential for regeneration!
  </p>
  <div className="bg-purple-100 dark:bg-purple-900/40 p-4 rounded-lg space-y-2">
    <p className="text-sm text-purple-800 dark:text-purple-200 font-semibold">Typical rest periods:</p>
    <ul className="text-sm text-purple-700 dark:text-purple-300 space-y-1">
      <li><strong>60-90 sec:</strong> Isolation exercises (e.g., bicep curls)</li>
      <li><strong>90-120 sec:</strong> Hypertrophy training (8-12 reps)</li>
      <li><strong>2-5 min:</strong> Heavy compound exercises (squat, deadlift)</li>
    </ul>
  </div>
</div>

</div>

---

### Training Parameters: Intensity, Volume & Frequency

These three terms are the levers of your training. Understand them, and you understand how training works!

<div className="grid md:grid-cols-3 gap-4 my-6">

<div className="p-5 bg-red-50 dark:bg-red-900/20 rounded-lg border border-red-200 dark:border-red-700">
  <div className="text-3xl mb-3">⚡</div>
  <h4 className="font-bold text-red-800 dark:text-red-200 mb-2">Intensity</h4>
  <p className="text-sm text-red-700 dark:text-red-300 mb-3">
    <strong>How heavy</strong> the weight is relative to your maximum strength.
  </p>
  <div className="bg-red-100 dark:bg-red-900/40 p-3 rounded text-sm text-red-800 dark:text-red-200">
    Often expressed as % of 1RM (1 Rep Maximum = the maximum weight for 1 repetition)
  </div>
</div>

<div className="p-5 bg-orange-50 dark:bg-orange-900/20 rounded-lg border border-orange-200 dark:border-orange-700">
  <div className="text-3xl mb-3">📊</div>
  <h4 className="font-bold text-orange-800 dark:text-orange-200 mb-2">Volume</h4>
  <p className="text-sm text-orange-700 dark:text-orange-300 mb-3">
    The <strong>total load</strong> of your training.
  </p>
  <div className="bg-orange-100 dark:bg-orange-900/40 p-3 rounded text-sm text-orange-800 dark:text-orange-200">
    Formula: Sets × Reps × Weight
    <br/>Example: 3 × 10 × 50kg = 1500kg volume
  </div>
</div>

<div className="p-5 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-700">
  <div className="text-3xl mb-3">📅</div>
  <h4 className="font-bold text-blue-800 dark:text-blue-200 mb-2">Frequency</h4>
  <p className="text-sm text-blue-700 dark:text-blue-300 mb-3">
    <strong>How often</strong> you train a muscle group or exercise per week.
  </p>
  <div className="bg-blue-100 dark:bg-blue-900/40 p-3 rounded text-sm text-blue-800 dark:text-blue-200">
    Example: Chest 2x per week = frequency of 2
  </div>
</div>

</div>

---

### The Core Principle: Progressive Overload

<div className="my-6 p-6 bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 rounded-xl border-2 border-amber-300 dark:border-amber-700">

<div className="flex items-center gap-3 mb-4">
  <div className="text-4xl">📈</div>
  <h3 className="text-2xl font-bold text-amber-900 dark:text-amber-100">Progressive Overload</h3>
</div>

<p className="text-amber-800 dark:text-amber-200 mb-4 text-lg">
  <strong>The most important concept in strength training!</strong>
</p>

<p className="text-amber-700 dark:text-amber-300 mb-4">
  To get stronger or build muscle, the training stimulus must <strong>increase over time</strong>. 
  The body only adapts when it must. If you always do the same thing, nothing more happens.
</p>

<div className="bg-amber-100 dark:bg-amber-900/40 p-5 rounded-lg">
  <p className="font-semibold text-amber-900 dark:text-amber-100 mb-3">5 ways to achieve Progressive Overload:</p>
  <ol className="space-y-2 text-sm text-amber-800 dark:text-amber-200">
    <li><strong>1. Increase weight:</strong> 50kg → 52.5kg (most common method)</li>
    <li><strong>2. Increase reps:</strong> 3x8 → 3x9 → 3x10</li>
    <li><strong>3. Increase sets:</strong> 3x10 → 4x10</li>
    <li><strong>4. Shorten rest:</strong> 120 sec → 90 sec (for endurance)</li>
    <li><strong>5. Improve technique:</strong> Better ROM or mind-muscle connection</li>
  </ol>
</div>

</div>

---

### Movement Types: Concentric vs. Eccentric

Every repetition consists of two phases. Both are important!

<div className="grid md:grid-cols-2 gap-6 my-6">

<div className="p-6 bg-green-50 dark:bg-green-900/20 rounded-lg border-l-4 border-green-500">
  <h4 className="font-bold text-green-800 dark:text-green-200 mb-3 flex items-center gap-2">
    <span className="text-2xl">💪</span> Concentric (Positive)
  </h4>
  <p className="text-sm text-green-700 dark:text-green-300 mb-3">
    The <strong>muscle shortening</strong> – pushing/pulling the weight.
  </p>
  <div className="bg-green-100 dark:bg-green-900/40 p-4 rounded-lg">
    <p className="text-sm text-green-800 dark:text-green-200 font-semibold mb-2">Examples:</p>
    <ul className="text-sm text-green-700 dark:text-green-300 space-y-1">
      <li>Bench press: Pushing the bar up</li>
      <li>Pull-up: Pulling yourself up</li>
      <li>Squat: Coming up from the bottom</li>
    </ul>
  </div>
</div>

<div className="p-6 bg-blue-50 dark:bg-blue-900/20 rounded-lg border-l-4 border-blue-500">
  <h4 className="font-bold text-blue-800 dark:text-blue-200 mb-3 flex items-center gap-2">
    <span className="text-2xl">🔽</span> Eccentric (Negative)
  </h4>
  <p className="text-sm text-blue-700 dark:text-blue-300 mb-3">
    The <strong>muscle lengthening</strong> – controlled lowering of the weight.
  </p>
  <div className="bg-blue-100 dark:bg-blue-900/40 p-4 rounded-lg">
    <p className="text-sm text-blue-800 dark:text-blue-200 font-semibold mb-2">Examples:</p>
    <ul className="text-sm text-blue-700 dark:text-blue-300 space-y-1">
      <li>Bench press: Lowering the bar to chest</li>
      <li>Pull-up: Lowering yourself in control</li>
      <li>Squat: Going down into the squat</li>
    </ul>
  </div>
  <div className="mt-3 p-3 bg-blue-200 dark:bg-blue-800/40 rounded">
    <p className="text-sm text-blue-900 dark:text-blue-100 font-semibold">
      ⚠️ The eccentric phase is especially important for muscle growth! Don't just drop it!
    </p>
  </div>
</div>

</div>

---

### Exercise Types: Compound vs. Isolation

Not all exercises are equal. There are two main categories:

<div className="space-y-6 my-6">

<div className="p-6 bg-purple-50 dark:bg-purple-900/20 rounded-lg border-l-4 border-purple-500">
  <h4 className="font-bold text-purple-800 dark:text-purple-200 mb-3 text-lg flex items-center gap-2">
    <span className="text-2xl">🏋️</span> Compound (Multi-joint Exercise)
  </h4>
  <p className="text-sm text-purple-700 dark:text-purple-300 mb-4">
    Trains <strong>multiple joints and muscles simultaneously</strong>. The foundation of every good training plan!
  </p>
  
  <div className="bg-purple-100 dark:bg-purple-900/40 p-4 rounded-lg mb-4">
    <p className="text-sm text-purple-800 dark:text-purple-200 font-semibold mb-2">Benefits:</p>
    <ul className="text-sm text-purple-700 dark:text-purple-300 space-y-1 list-disc list-inside">
      <li>Trains many muscles at once (efficient!)</li>
      <li>Allows heavy weights (more strength)</li>
      <li>Burns more calories</li>
      <li>Functional (similar to daily movements)</li>
    </ul>
  </div>

  <div className="bg-purple-100 dark:bg-purple-900/40 p-4 rounded-lg">
    <p className="text-sm text-purple-800 dark:text-purple-200 font-semibold mb-2">Examples:</p>
    <ul className="text-sm text-purple-700 dark:text-purple-300 space-y-1">
      <li><strong>Squat:</strong> Quads, glutes, hamstrings, core</li>
      <li><strong>Bench Press:</strong> Chest, triceps, front shoulder</li>
      <li><strong>Deadlift:</strong> Back, glutes, hamstrings, core</li>
      <li><strong>Pull-ups:</strong> Back, biceps, core</li>
      <li><strong>Overhead Press:</strong> Shoulders, triceps, core</li>
    </ul>
  </div>
</div>

<div className="p-6 bg-orange-50 dark:bg-orange-900/20 rounded-lg border-l-4 border-orange-500">
  <h4 className="font-bold text-orange-800 dark:text-orange-200 mb-3 text-lg flex items-center gap-2">
    <span className="text-2xl">🎯</span> Isolation (Single-joint Exercise)
  </h4>
  <p className="text-sm text-orange-700 dark:text-orange-300 mb-4">
    Trains <strong>only one joint and one muscle</strong>. For targeted training of individual muscles.
  </p>
  
  <div className="bg-orange-100 dark:bg-orange-900/40 p-4 rounded-lg mb-4">
    <p className="text-sm text-orange-800 dark:text-orange-200 font-semibold mb-2">Benefits:</p>
    <ul className="text-sm text-orange-700 dark:text-orange-300 space-y-1 list-disc list-inside">
      <li>Targeted training of weak muscles</li>
      <li>Less fatigue (good at end of training)</li>
      <li>Good "pump" (muscle feels full)</li>
      <li>Balancing imbalances</li>
    </ul>
  </div>

  <div className="bg-orange-100 dark:bg-orange-900/40 p-4 rounded-lg">
    <p className="text-sm text-orange-800 dark:text-orange-200 font-semibold mb-2">Examples:</p>
    <ul className="text-sm text-orange-700 dark:text-orange-300 space-y-1">
      <li><strong>Bicep Curls:</strong> Only biceps</li>
      <li><strong>Tricep Pushdowns:</strong> Only triceps</li>
      <li><strong>Lateral Raises:</strong> Only lateral shoulder</li>
      <li><strong>Leg Extensions:</strong> Only quadriceps</li>
      <li><strong>Leg Curls:</strong> Only hamstrings</li>
    </ul>
  </div>
</div>

</div>

<div className="my-6 p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg border border-yellow-200 dark:border-yellow-700">
  <p className="text-sm text-yellow-800 dark:text-yellow-200">
    <strong>💡 Rule of thumb:</strong> Start your training with compound exercises (when you're fresh), 
    end with isolation (when you're tired). 80% compound, 20% isolation is a good mix for beginners!
  </p>
</div>

---

### Other Important Terms

<div className="grid md:grid-cols-2 gap-4 my-6">

<div className="p-4 bg-stone-50 dark:bg-stone-900 rounded-lg border border-stone-200 dark:border-stone-700">
  <h5 className="font-bold text-stone-800 dark:text-stone-200 mb-2">ROM (Range of Motion)</h5>
  <p className="text-sm text-stone-700 dark:text-stone-300">
    The full movement range of an exercise. Important for complete muscle growth!
  </p>
</div>

<div className="p-4 bg-stone-50 dark:bg-stone-900 rounded-lg border border-stone-200 dark:border-stone-700">
  <h5 className="font-bold text-stone-800 dark:text-stone-200 mb-2">RIR (Reps in Reserve)</h5>
  <p className="text-sm text-stone-700 dark:text-stone-300">
    "How many reps could you still do?" RIR 2 = you could have done 2 more reps.
  </p>
</div>

<div className="p-4 bg-stone-50 dark:bg-stone-900 rounded-lg border border-stone-200 dark:border-stone-700">
  <h5 className="font-bold text-stone-800 dark:text-stone-200 mb-2">1RM (One Rep Maximum)</h5>
  <p className="text-sm text-stone-700 dark:text-stone-300">
    The maximum weight you can lift for exactly 1 clean repetition.
  </p>
</div>

<div className="p-4 bg-stone-50 dark:bg-stone-900 rounded-lg border border-stone-200 dark:border-stone-700">
  <h5 className="font-bold text-stone-800 dark:text-stone-200 mb-2">Deload</h5>
  <p className="text-sm text-stone-700 dark:text-stone-300">
    A week with greatly reduced volume/intensity for recovery (every 4-8 weeks).
  </p>
</div>

<div className="p-4 bg-stone-50 dark:bg-stone-900 rounded-lg border border-stone-200 dark:border-stone-700">
  <h5 className="font-bold text-stone-800 dark:text-stone-200 mb-2">Superset</h5>
  <p className="text-sm text-stone-700 dark:text-stone-300">
    Two exercises back-to-back without rest (e.g., bicep curls → tricep pushdowns).
  </p>
</div>

<div className="p-4 bg-stone-50 dark:bg-stone-900 rounded-lg border border-stone-200 dark:border-stone-700">
  <h5 className="font-bold text-stone-800 dark:text-stone-200 mb-2">Drop Set</h5>
  <p className="text-sm text-stone-700 dark:text-stone-300">
    Set to failure, then immediately reduce weight and continue. Very intense!
  </p>
</div>

</div>

---

### Summary: Your Gym Vocabulary

<div className="my-6 p-6 bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 rounded-xl border border-red-200 dark:border-red-700">

#### ✅ The most important terms at a glance:

- **Rep:** 1 repetition | **Set:** Group of reps | **3x10:** 3 sets of 10 repetitions
- **Intensity:** How heavy | **Volume:** Total load | **Frequency:** How often per week
- **Progressive Overload:** Increase over time (weight, reps, sets)
- **Concentric:** Muscle shortens (lifting) | **Eccentric:** Muscle lengthens (lowering)
- **Compound:** Multiple muscles | **Isolation:** One muscle
- **ROM:** Full range of motion | **RIR:** Reps in reserve

</div>

**In the next lesson** you'll learn **basic anatomy** – your muscle map. 
Then you'll know which muscles you're training and why!

📚 **Now you speak the language of the gym!**
    `
  },

  task: {
    de: {
      title: 'Vokabular-Praxis: Verstehe deinen ersten Trainingsplan',
      description: 'Wende dein neues Vokabular an, indem du einen Beispiel-Trainingsplan analysierst.',
      checklist: [
        { text: 'Finde einen Trainingsplan online oder im Studio (z.B. "Ganzkörper-Plan für Anfänger")' },
        { text: 'Identifiziere alle Compound-Übungen im Plan (markiere sie)' },
        { text: 'Identifiziere alle Isolation-Übungen im Plan (markiere sie anders)' },
        { text: 'Berechne das Volumen einer Übung (z.B. 3x10 mit 50kg = 1500kg)' },
        { text: 'Erkläre jemandem (oder dir selbst laut) was "Progressive Overload" bedeutet' }
      ]
    },
    en: {
      title: 'Vocabulary Practice: Understand Your First Training Plan',
      description: 'Apply your new vocabulary by analyzing a sample training plan.',
      checklist: [
        { text: 'Find a training plan online or at the gym (e.g., "Full-body plan for beginners")' },
        { text: 'Identify all compound exercises in the plan (mark them)' },
        { text: 'Identify all isolation exercises in the plan (mark them differently)' },
        { text: 'Calculate the volume of one exercise (e.g., 3x10 with 50kg = 1500kg)' },
        { text: 'Explain to someone (or yourself out loud) what "Progressive Overload" means' }
      ]
    }
  },

  notes: {
    de: [
      {
        front: 'Was bedeutet "3x10" in einem Trainingsplan?',
        back: '3 Sätze à 10 Wiederholungen. Das bedeutet: 10 Reps → Pause → 10 Reps → Pause → 10 Reps'
      },
      {
        front: 'Was sind die 3 Trainings-Parameter?',
        back: '1. Intensität (wie schwer)\n2. Volumen (Gesamtbelastung: Sätze × Reps × Gewicht)\n3. Frequenz (wie oft pro Woche)'
      },
      {
        front: 'Was ist Progressive Overload?',
        back: 'Das Kernprinzip des Krafttrainings: Der Trainingsreiz muss mit der Zeit gesteigert werden (Gewicht, Reps, Sätze, etc.). Sonst passt sich der Körper nicht mehr an.'
      },
      {
        front: 'Was ist der Unterschied zwischen konzentrisch und exzentrisch?',
        back: 'Konzentrisch: Muskel verkürzt sich (heben/drücken)\nExzentrisch: Muskel verlängert sich (kontrolliert senken)\nDie exzentrische Phase ist besonders wichtig für Muskelwachstum!'
      },
      {
        front: 'Was ist der Unterschied zwischen Compound und Isolation?',
        back: 'Compound: Mehrere Gelenke/Muskeln (z.B. Kniebeuge, Bankdrücken)\nIsolation: Ein Gelenk/Muskel (z.B. Bizeps Curls, Seitheben)\nFaustregel: 80% Compound, 20% Isolation'
      },
      {
        front: 'Was bedeutet RIR?',
        back: 'Reps in Reserve = "Wie viele Wiederholungen hättest du noch geschafft?"\nRIR 2 = du hättest noch 2 Reps geschafft\nOptimal für Hypertrophie: RIR 1-2'
      }
    ],
    en: [
      {
        front: 'What does "3x10" mean in a training plan?',
        back: '3 sets of 10 repetitions. This means: 10 reps → rest → 10 reps → rest → 10 reps'
      },
      {
        front: 'What are the 3 training parameters?',
        back: '1. Intensity (how heavy)\n2. Volume (total load: sets × reps × weight)\n3. Frequency (how often per week)'
      },
      {
        front: 'What is Progressive Overload?',
        back: 'The core principle of strength training: The training stimulus must increase over time (weight, reps, sets, etc.). Otherwise the body stops adapting.'
      },
      {
        front: 'What is the difference between concentric and eccentric?',
        back: 'Concentric: Muscle shortens (lifting/pushing)\nEccentric: Muscle lengthens (controlled lowering)\nThe eccentric phase is especially important for muscle growth!'
      },
      {
        front: 'What is the difference between compound and isolation?',
        back: 'Compound: Multiple joints/muscles (e.g., squat, bench press)\nIsolation: One joint/muscle (e.g., bicep curls, lateral raises)\nRule of thumb: 80% compound, 20% isolation'
      },
      {
        front: 'What does RIR mean?',
        back: 'Reps in Reserve = "How many reps could you still do?"\nRIR 2 = you could have done 2 more reps\nOptimal for hypertrophy: RIR 1-2'
      }
    ]
  }
};

