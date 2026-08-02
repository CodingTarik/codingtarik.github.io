import React from 'react';

export const cardioLesson = {
  id: 'g1_m5_cardio',
  title: { 
    en: '5.6 Cardio Integration', 
    de: '5.6 Cardio-Integration' 
  },
  description: { 
    en: 'Cardio doesn\'t kill your gains – if you do it right. How to combine cardio with strength training for optimal results.', 
    de: 'Cardio killt nicht deine Gains – wenn du es richtig machst. Wie du Cardio mit Krafttraining für optimale Ergebnisse kombinierst.' 
  },
  category: 'recovery',
  
  content: {
    de: `
### Modul 5.6: Cardio-Integration

"Cardio killt meine Gains!" – Das ist einer der hartnäckigsten Mythen im Krafttraining. Die Wahrheit? **Cardio macht dich nicht nur gesünder, sondern kann sogar dein Krafttraining verbessern** – wenn du es richtig einsetzt.

---

### Warum Cardio auch bei Krafttraining wichtig ist

<div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-700 my-6">
  <h4 className="font-bold text-blue-800 dark:text-blue-200 mb-4">❤️ Die Vorteile von Cardio für Kraftsportler</h4>
  <ul className="text-sm text-blue-700 dark:text-blue-300 space-y-2">
    <li>• <strong>Bessere Erholung:</strong> Ein starkes Herz-Kreislauf-System transportiert Nährstoffe schneller zu den Muskeln und Abfallprodukte schneller ab.</li>
    <li>• <strong>Mehr Ausdauer im Training:</strong> Du keuchst nicht mehr nach 3 Sätzen Kniebeugen. Mehr Volumen = mehr Wachstum.</li>
    <li>• <strong>Herzgesundheit:</strong> Dein Herz ist ein Muskel. Es braucht auch Training.</li>
    <li>• <strong>Bessere Insulinsensitivität:</strong> Nährstoffe werden effizienter in die Muskeln geschleust (statt in Fettzellen).</li>
    <li>• <strong>Stressabbau & mentale Gesundheit:</strong> Cardio setzt Endorphine frei und reduziert Cortisol.</li>
    <li>• <strong>Fettverbrennung:</strong> Cardio erhöht deinen Gesamtkalorienumsatz.</li>
  </ul>
</div>

---

### LISS vs. HIIT – Zwei Welten

| | LISS (Low Intensity Steady State) | HIIT (High Intensity Interval Training) |
|---|---|---|
| **Intensität** | Niedrig (60-70% max. HF) | Hoch (85-95% max. HF) |
| **Dauer** | 30-60 Minuten | 10-20 Minuten |
| **Beispiele** | Gehen, langsames Radfahren, Crosstrainer | Sprints, Tabata, Battle Ropes |
| **Ermüdung** | Gering – kaum Einfluss auf Krafttraining | Hoch – braucht Erholung wie Krafttraining |
| **Fettverbrennung** | Während der Aktivität | Nachbrenneffekt (EPOC) bis zu 24h danach |
| **Beste für** | Aktive Erholung, tägliche Bewegung | Zeiteffizienz, Konditionsaufbau |

---

### Der Mythos: "Cardio killt Gains"

<div className="bg-amber-50 dark:bg-amber-900/20 p-6 rounded-xl border border-amber-200 dark:border-amber-700 my-6">
  <h4 className="font-bold text-amber-800 dark:text-amber-200 mb-4">🔬 Was die Wissenschaft sagt</h4>
  <p className="text-sm text-amber-700 dark:text-amber-300 mb-3">Der sogenannte "Interference Effect" (Konkurrenzeffekt) besagt, dass gleichzeitiges Kraft- und Ausdauertraining den Muskelaufbau beeinträchtigen KANN. Aber nur unter bestimmten Bedingungen:</p>
  <ul className="text-sm text-amber-700 dark:text-amber-300 space-y-2">
    <li>• ❌ <strong>Exzessives Cardio</strong> (60+ Min intensiv, 5-6x pro Woche) – JA, das kann Gains kosten</li>
    <li>• ❌ <strong>Cardio direkt VOR dem Krafttraining</strong> – reduziert die Leistung im Krafttraining</li>
    <li>• ❌ <strong>Laufen in großem Umfang</strong> – hohe Belastung für Beine, interferiert mit Beintraining</li>
    <li>• ✅ <strong>2-3x pro Woche moderate Cardio</strong> – KEIN negativer Effekt auf Muskelaufbau</li>
    <li>• ✅ <strong>Radfahren statt Laufen</strong> – weniger Muskelschäden, weniger Interference</li>
    <li>• ✅ <strong>Cardio an trainingsfreien Tagen</strong> – optimale Trennung</li>
  </ul>
</div>

**Fazit:** Moderates Cardio (2-3x pro Woche, 20-30 Min) hat **keinen negativen Effekt** auf den Muskelaufbau. Es verbessert sogar die Erholung!

---

### Wie viel Cardio? Die Empfehlungen

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border border-green-200 dark:border-green-700 my-6">
  <h4 className="font-bold text-green-800 dark:text-green-200 mb-4">📋 Cardio-Richtlinien für Kraftsportler</h4>
  <ul className="text-sm text-green-700 dark:text-green-300 space-y-3">
    <li><strong>Minimum:</strong> 2x pro Woche, 20-30 Min LISS (z.B. zügiges Gehen, Radfahren)</li>
    <li><strong>Optimal:</strong> 2-3x LISS + 1x HIIT pro Woche</li>
    <li><strong>Ziel Muskelaufbau (Bulk):</strong> 2x 20-30 Min LISS pro Woche – genug für die Gesundheit, ohne zu viele Kalorien zu verbrennen</li>
    <li><strong>Ziel Fettabbau (Cut):</strong> 3-4x 30-45 Min LISS oder 2x LISS + 2x HIIT – erhöht den Kalorienverbrauch</li>
    <li><strong>WHO-Empfehlung:</strong> Mindestens 150 Min moderate oder 75 Min intensive Aktivität pro Woche</li>
  </ul>
</div>

---

### Timing: Wann ist Cardio am besten?

<div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-700 my-6">
  <h4 className="font-bold text-blue-800 dark:text-blue-200 mb-4">⏰ Timing-Strategien</h4>
  <ul className="text-sm text-blue-700 dark:text-blue-300 space-y-2">
    <li>• <strong>Beste Option:</strong> An trainingsfreien Tagen (komplette Trennung)</li>
    <li>• <strong>Gute Option:</strong> NACH dem Krafttraining (Kraft hat Priorität)</li>
    <li>• <strong>Okay:</strong> Morgens Cardio, abends Kraft (oder umgekehrt) – mindestens 6h Abstand</li>
    <li>• <strong>Vermeiden:</strong> Intensives Cardio direkt VOR dem Krafttraining</li>
  </ul>
</div>

**Warum nicht vor dem Krafttraining?**
*   Du verbrauchst Glykogen (Muskelenergie), die du für schwere Sätze brauchst.
*   Dein ZNS (Zentrales Nervensystem) ist bereits ermüdet.
*   Du wirst weniger Gewicht bewegen können → weniger Muskelwachstumsreiz.

---

### Praktische Cardio-Optionen

**LISS-Favoriten für Kraftsportler:**
1.  **Incline Walking** (Laufband, 10-15% Steigung, 5-6 km/h) – Die #1 Option. Effektiv, gelenkschonend, verbrennt Fett.
2.  **Radfahren** – Gelenkschonend, wenig Muskelschäden.
3.  **Crosstrainer/Stepper** – Ganzkörper, geringe Belastung.
4.  **Schwimmen** – Perfekt für Erholung, nullBelastung für Gelenke.

**HIIT-Favoriten:**
1.  **Sprints** (30 Sek Sprint, 90 Sek Gehen, 8-10 Runden)
2.  **Battle Ropes** (20 Sek on, 40 Sek off, 10 Runden)
3.  **Rudergerät-Intervalle** (500m schnell, 1 Min Pause)
4.  **Assault Bike / Air Bike** (30 Sek all-out, 90 Sek leicht)

<div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-xl border border-red-200 dark:border-red-700 my-6">
  <h4 className="font-bold text-red-800 dark:text-red-200 mb-4">⚠️ Häufige Fehler</h4>
  <ul className="text-sm text-red-700 dark:text-red-300 space-y-2">
    <li>• <strong>Zu viel, zu schnell:</strong> Von 0 auf 5x Cardio pro Woche → Übertraining. Langsam steigern!</li>
    <li>• <strong>Kalorien nicht anpassen:</strong> Wenn du im Bulk bist und Cardio hinzufügst, musst du mehr essen.</li>
    <li>• <strong>Nur HIIT:</strong> HIIT ist großartig, aber es belastet das Nervensystem wie Krafttraining. Nicht jeden Tag HIIT!</li>
    <li>• <strong>Cardio als Bestrafung:</strong> "Ich habe Pizza gegessen, also muss ich 2 Stunden Laufband." – Das ist ein ungesundes Verhältnis zu Sport.</li>
  </ul>
</div>
`,
    en: `
### Module 5.6: Cardio Integration

"Cardio kills my gains!" – This is one of the most persistent myths in strength training. The truth? **Cardio not only makes you healthier, it can even improve your strength training** – if you do it right.

---

### Why Cardio Matters for Strength Training

<div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-700 my-6">
  <h4 className="font-bold text-blue-800 dark:text-blue-200 mb-4">❤️ Benefits of Cardio for Strength Athletes</h4>
  <ul className="text-sm text-blue-700 dark:text-blue-300 space-y-2">
    <li>• <strong>Better recovery:</strong> A strong cardiovascular system transports nutrients to muscles faster and removes waste products quicker.</li>
    <li>• <strong>More endurance in training:</strong> You won't be gasping after 3 sets of squats. More volume = more growth.</li>
    <li>• <strong>Heart health:</strong> Your heart is a muscle. It needs training too.</li>
    <li>• <strong>Better insulin sensitivity:</strong> Nutrients are shuttled more efficiently to muscles (instead of fat cells).</li>
    <li>• <strong>Stress relief & mental health:</strong> Cardio releases endorphins and reduces cortisol.</li>
    <li>• <strong>Fat burning:</strong> Cardio increases your total calorie expenditure.</li>
  </ul>
</div>

---

### LISS vs. HIIT – Two Worlds

| | LISS (Low Intensity Steady State) | HIIT (High Intensity Interval Training) |
|---|---|---|
| **Intensity** | Low (60-70% max HR) | High (85-95% max HR) |
| **Duration** | 30-60 minutes | 10-20 minutes |
| **Examples** | Walking, slow cycling, elliptical | Sprints, Tabata, Battle Ropes |
| **Fatigue** | Low – barely impacts strength training | High – needs recovery like strength training |
| **Fat burning** | During activity | Afterburn effect (EPOC) up to 24h after |
| **Best for** | Active recovery, daily movement | Time efficiency, conditioning |

---

### The Myth: "Cardio Kills Gains"

<div className="bg-amber-50 dark:bg-amber-900/20 p-6 rounded-xl border border-amber-200 dark:border-amber-700 my-6">
  <h4 className="font-bold text-amber-800 dark:text-amber-200 mb-4">🔬 What Science Says</h4>
  <p className="text-sm text-amber-700 dark:text-amber-300 mb-3">The so-called "Interference Effect" states that concurrent strength and endurance training CAN impair muscle growth. But only under certain conditions:</p>
  <ul className="text-sm text-amber-700 dark:text-amber-300 space-y-2">
    <li>• ❌ <strong>Excessive cardio</strong> (60+ min intense, 5-6x per week) – YES, this can cost gains</li>
    <li>• ❌ <strong>Cardio right BEFORE strength training</strong> – reduces performance in strength training</li>
    <li>• ❌ <strong>Running high volume</strong> – high stress on legs, interferes with leg training</li>
    <li>• ✅ <strong>2-3x per week moderate cardio</strong> – NO negative effect on muscle growth</li>
    <li>• ✅ <strong>Cycling instead of running</strong> – less muscle damage, less interference</li>
    <li>• ✅ <strong>Cardio on rest days</strong> – optimal separation</li>
  </ul>
</div>

**Bottom line:** Moderate cardio (2-3x per week, 20-30 min) has **no negative effect** on muscle building. It even improves recovery!

---

### How Much Cardio? The Recommendations

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border border-green-200 dark:border-green-700 my-6">
  <h4 className="font-bold text-green-800 dark:text-green-200 mb-4">📋 Cardio Guidelines for Strength Athletes</h4>
  <ul className="text-sm text-green-700 dark:text-green-300 space-y-3">
    <li><strong>Minimum:</strong> 2x per week, 20-30 min LISS (e.g. brisk walking, cycling)</li>
    <li><strong>Optimal:</strong> 2-3x LISS + 1x HIIT per week</li>
    <li><strong>Goal muscle building (bulk):</strong> 2x 20-30 min LISS per week – enough for health without burning too many calories</li>
    <li><strong>Goal fat loss (cut):</strong> 3-4x 30-45 min LISS or 2x LISS + 2x HIIT – increases calorie burn</li>
    <li><strong>WHO recommendation:</strong> At least 150 min moderate or 75 min intense activity per week</li>
  </ul>
</div>

---

### Timing: When Is Cardio Best?

<div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-700 my-6">
  <h4 className="font-bold text-blue-800 dark:text-blue-200 mb-4">⏰ Timing Strategies</h4>
  <ul className="text-sm text-blue-700 dark:text-blue-300 space-y-2">
    <li>• <strong>Best option:</strong> On rest days (complete separation)</li>
    <li>• <strong>Good option:</strong> AFTER strength training (strength has priority)</li>
    <li>• <strong>Okay:</strong> Morning cardio, evening strength (or vice versa) – at least 6h gap</li>
    <li>• <strong>Avoid:</strong> Intense cardio right BEFORE strength training</li>
  </ul>
</div>

**Why not before strength training?**
*   You burn glycogen (muscle energy) that you need for heavy sets.
*   Your CNS (Central Nervous System) is already fatigued.
*   You'll move less weight → less muscle growth stimulus.

---

### Practical Cardio Options

**LISS Favorites for Strength Athletes:**
1.  **Incline Walking** (treadmill, 10-15% incline, 5-6 km/h) – The #1 option. Effective, joint-friendly, burns fat.
2.  **Cycling** – Easy on joints, minimal muscle damage.
3.  **Elliptical/Stepper** – Full body, low impact.
4.  **Swimming** – Perfect for recovery, zero joint stress.

**HIIT Favorites:**
1.  **Sprints** (30 sec sprint, 90 sec walk, 8-10 rounds)
2.  **Battle Ropes** (20 sec on, 40 sec off, 10 rounds)
3.  **Rowing intervals** (500m fast, 1 min rest)
4.  **Assault Bike / Air Bike** (30 sec all-out, 90 sec easy)

<div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-xl border border-red-200 dark:border-red-700 my-6">
  <h4 className="font-bold text-red-800 dark:text-red-200 mb-4">⚠️ Common Mistakes</h4>
  <ul className="text-sm text-red-700 dark:text-red-300 space-y-2">
    <li>• <strong>Too much, too fast:</strong> From 0 to 5x cardio per week → overtraining. Increase gradually!</li>
    <li>• <strong>Not adjusting calories:</strong> If you're bulking and add cardio, you need to eat more.</li>
    <li>• <strong>Only HIIT:</strong> HIIT is great, but it taxes the nervous system like strength training. Not every day!</li>
    <li>• <strong>Cardio as punishment:</strong> "I ate pizza, so I must do 2 hours of treadmill." – That's an unhealthy relationship with exercise.</li>
  </ul>
</div>
`
  },

  task: {
    de: {
      title: 'Cardio-Integration starten',
      description: 'Füge diese Woche Cardio zu deinem Trainingsplan hinzu.',
      checklist: [
        { text: 'Plane 2 LISS-Sessions (je 20-30 Min) an trainingsfreien Tagen ein.' },
        { text: 'Probiere Incline Walking: 15% Steigung, 5.5 km/h, 20 Minuten.' },
        { text: 'Teste eine HIIT-Session: 8 Runden Sprints (30 Sek Sprint, 90 Sek Gehen).' },
        { text: 'Beobachte: Fühlst du dich nach einer Woche Cardio im Krafttraining besser?' }
      ]
    },
    en: {
      title: 'Start Cardio Integration',
      description: 'Add cardio to your training plan this week.',
      checklist: [
        { text: 'Schedule 2 LISS sessions (20-30 min each) on rest days.' },
        { text: 'Try incline walking: 15% incline, 5.5 km/h, 20 minutes.' },
        { text: 'Test a HIIT session: 8 rounds of sprints (30 sec sprint, 90 sec walk).' },
        { text: 'Observe: Do you feel better in strength training after a week of cardio?' }
      ]
    }
  },

  notes: {
    de: [
      {
        front: 'Killt Cardio wirklich Muskelaufbau?',
        back: 'Nein! Moderates Cardio (2-3x pro Woche, 20-30 Min) hat keinen negativen Effekt. Nur exzessives Cardio (60+ Min, 5-6x/Woche) kann interferieren.'
      },
      {
        front: 'Was ist der Unterschied zwischen LISS und HIIT?',
        back: 'LISS = niedrige Intensität, lange Dauer (30-60 Min, z.B. Gehen). HIIT = hohe Intensität, kurze Dauer (10-20 Min, z.B. Sprints).'
      },
      {
        front: 'Wann ist der beste Zeitpunkt für Cardio?',
        back: 'Am besten an trainingsfreien Tagen. Zweitbeste Option: nach dem Krafttraining. Nicht direkt vor dem Krafttraining!'
      },
      {
        front: 'Was ist die #1 Cardio-Option für Kraftsportler?',
        back: 'Incline Walking (Laufband, 10-15% Steigung, 5-6 km/h) – effektiv, gelenkschonend, verbrennt Fett ohne Muskelschäden.'
      }
    ],
    en: [
      {
        front: 'Does cardio really kill muscle growth?',
        back: 'No! Moderate cardio (2-3x per week, 20-30 min) has no negative effect. Only excessive cardio (60+ min, 5-6x/week) can interfere.'
      },
      {
        front: 'What\'s the difference between LISS and HIIT?',
        back: 'LISS = low intensity, long duration (30-60 min, e.g. walking). HIIT = high intensity, short duration (10-20 min, e.g. sprints).'
      },
      {
        front: 'When is the best time for cardio?',
        back: 'Best on rest days. Second best: after strength training. Not directly before strength training!'
      },
      {
        front: 'What is the #1 cardio option for strength athletes?',
        back: 'Incline walking (treadmill, 10-15% incline, 5-6 km/h) – effective, joint-friendly, burns fat without muscle damage.'
      }
    ]
  }
};
