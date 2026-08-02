import React from 'react';

export const warmupCooldownLesson = {
  id: 'g1_m5_warmup',
  title: { 
    en: '5.3 Warm-Up & Cool-Down', 
    de: '5.3 Dehnung, Warm-Up & Cool-Down' 
  },
  description: { 
    en: 'A structured warm-up prevents injuries and boosts performance. A proper cool-down speeds recovery.', 
    de: 'Ein strukturiertes Warm-Up beugt Verletzungen vor und steigert die Leistung. Ein gutes Cool-Down beschleunigt die Regeneration.' 
  },
  category: 'recovery',
  
  content: {
    de: `
### Modul 5.3: Dehnung, Warm-Up & Cool-Down

Stell dir vor, du willst ein Gummiband maximal dehnen. Wenn es eiskalt ist, reißt es sofort. Wenn du es langsam erwärmst, lässt es sich viel weiter ziehen. Genau so funktionieren deine Muskeln, Sehnen und Bänder.

Ein gutes Warm-Up ist **keine optionale Zugabe** – es ist ein unverzichtbarer Teil deines Trainings. Und ein Cool-Down hilft deinem Körper, schneller in den Erholungsmodus zu schalten.

---

### Das 3-Phasen Warm-Up System

<div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-700 my-6">
  <h4 className="font-bold text-blue-800 dark:text-blue-200 mb-4">🔥 Phase 1: Allgemeines Aufwärmen (5 Minuten)</h4>
  <p className="text-sm text-blue-700 dark:text-blue-300 mb-3">Ziel: Herzfrequenz erhöhen, Blut in die Muskeln pumpen, Körpertemperatur steigern.</p>
  <ul className="text-sm text-blue-700 dark:text-blue-300 space-y-1">
    <li>• <strong>Rudergerät</strong> – ideal, weil es Ober- und Unterkörper aktiviert</li>
    <li>• <strong>Crosstrainer</strong> – gelenkschonend, Ganzkörper</li>
    <li>• <strong>Seilspringen</strong> – aktiviert die Waden und koordiniert den gesamten Körper</li>
    <li>• <strong>Hampelmänner</strong> – braucht kein Equipment</li>
  </ul>
  <p className="text-sm text-blue-700 dark:text-blue-300 mt-3"><strong>Intensität:</strong> Du solltest leicht ins Schwitzen kommen, aber NICHT ermüden. Denke an 50-60% deiner maximalen Herzfrequenz.</p>
</div>

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border border-green-200 dark:border-green-700 my-6">
  <h4 className="font-bold text-green-800 dark:text-green-200 mb-4">🤸 Phase 2: Dynamisches Dehnen (5 Minuten)</h4>
  <p className="text-sm text-green-700 dark:text-green-300 mb-3">Ziel: Gelenke durch den vollen Bewegungsradius bewegen. Die Muskeln werden aktiv gedehnt, ohne in der Endposition zu verharren.</p>
  <ul className="text-sm text-green-700 dark:text-green-300 space-y-2">
    <li>• <strong>Armkreisen</strong> – vorwärts & rückwärts (Schultergelenk aufwärmen)</li>
    <li>• <strong>Beinpendel</strong> – seitlich & vor/zurück (Hüftgelenk mobilisieren)</li>
    <li>• <strong>Rumpfrotation</strong> – Oberkörper links/rechts drehen (Wirbelsäule)</li>
    <li>• <strong>Cat-Cow</strong> – auf allen Vieren: Buckel machen → Hohlkreuz (Wirbelsäule mobilisieren)</li>
    <li>• <strong>Tiefe Kniebeuge halten</strong> – 30 Sekunden in der tiefen Hocke bleiben</li>
    <li>• <strong>Inchworms</strong> – Stehen → Hände zum Boden → rauslaufen in Liegestützposition → zurück</li>
  </ul>
</div>

<div className="bg-amber-50 dark:bg-amber-900/20 p-6 rounded-xl border border-amber-200 dark:border-amber-700 my-6">
  <h4 className="font-bold text-amber-800 dark:text-amber-200 mb-4">🎯 Phase 3: Spezifisches Aufwärmen (5-10 Minuten)</h4>
  <p className="text-sm text-amber-700 dark:text-amber-300 mb-3">Ziel: Den Körper genau auf die kommende Übung vorbereiten – mit Aufwärmsätzen.</p>
  <p className="text-sm text-amber-700 dark:text-amber-300 mb-2"><strong>Beispiel: Du willst 80kg Bankdrücken:</strong></p>
  <ul className="text-sm text-amber-700 dark:text-amber-300 space-y-1">
    <li>1. Nur die Stange (20kg) × 15 Wiederholungen</li>
    <li>2. 40kg × 10 Wiederholungen</li>
    <li>3. 60kg × 5 Wiederholungen</li>
    <li>4. 70kg × 3 Wiederholungen</li>
    <li>5. <strong>80kg – Arbeits-Sätze beginnen!</strong></li>
  </ul>
  <p className="text-sm text-amber-700 dark:text-amber-300 mt-3"><strong>Faustregel:</strong> Je schwerer das Arbeitsgewicht, desto mehr Aufwärmsätze brauchst du. Die Aufwärmsätze sollen die Muskeln aktivieren, aber NICHT ermüden.</p>
</div>

---

### ⚠️ Statisches Dehnen VOR dem Training – Warum NICHT?

<div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-xl border border-red-200 dark:border-red-700 my-6">
  <h4 className="font-bold text-red-800 dark:text-red-200 mb-4">⛔ Wichtig: Kein statisches Dehnen VOR dem Krafttraining!</h4>
  <p className="text-sm text-red-700 dark:text-red-300 mb-3">Studien zeigen, dass statisches Dehnen (eine Position 30+ Sekunden halten) vor dem Training:</p>
  <ul className="text-sm text-red-700 dark:text-red-300 space-y-1">
    <li>• Die <strong>maximale Kraftleistung um bis zu 5-8%</strong> reduzieren kann</li>
    <li>• Die <strong>Explosivkraft</strong> verringert</li>
    <li>• Die <strong>neuromuskuläre Stabilität</strong> vorübergehend beeinträchtigt</li>
    <li>• Das <strong>Verletzungsrisiko paradoxerweise erhöhen</strong> kann (weil die Gelenke instabiler werden)</li>
  </ul>
  <p className="text-sm text-red-700 dark:text-red-300 mt-3"><strong>Merke:</strong> Dynamisches Dehnen = VOR dem Training. Statisches Dehnen = NACH dem Training.</p>
</div>

---

### Das perfekte Cool-Down (10-15 Minuten)

Nach dem Training schaltet dein Körper langsam vom "Kampfmodus" (sympathisches Nervensystem) in den "Erholungsmodus" (parasympathisches Nervensystem). Ein Cool-Down beschleunigt diesen Übergang.

**1. Leichtes Cardio (3-5 Min)**
*   Gehen auf dem Laufband oder langsames Radfahren.
*   Senkt den Puls sanft und fördert den Abtransport von Stoffwechselprodukten.

**2. Statisches Dehnen (5-10 Min)**
*   Jetzt ist die perfekte Zeit! Die Muskeln sind warm und durchblutet.
*   Halte jede Dehnung **30-60 Sekunden**.
*   Fokus auf die trainierten Muskelgruppen.

**3. Foam Rolling / Faszienrolle (Optional, 5-10 Min)**
*   Rollt über verspannte Muskelgruppen.
*   Löst Verklebungen in den Faszien (dem Bindegewebe um die Muskeln).
*   Kann anfangs schmerzhaft sein – das ist normal.

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border border-green-200 dark:border-green-700 my-6">
  <h4 className="font-bold text-green-800 dark:text-green-200 mb-4">✅ Die wichtigsten Dehnübungen nach dem Training</h4>
  <ul className="text-sm text-green-700 dark:text-green-300 space-y-2">
    <li>• <strong>Brust:</strong> Arm an Türrahmen, Oberkörper wegdrehen</li>
    <li>• <strong>Rücken:</strong> Hängen an der Klimmzugstange (Dead Hang)</li>
    <li>• <strong>Schultern:</strong> Arm quer über die Brust ziehen</li>
    <li>• <strong>Beinbeuger:</strong> Stehend, ein Bein auf Hüfthöhe ablegen, Oberkörper vorbeugen</li>
    <li>• <strong>Quadrizeps:</strong> Im Stehen Ferse zum Po ziehen</li>
    <li>• <strong>Hüftbeuger:</strong> Ausfallschritt, hinteres Knie am Boden</li>
    <li>• <strong>Waden:</strong> An der Wand abstützen, Ferse zum Boden drücken</li>
  </ul>
</div>

---

### Wann ist extra Mobilitätsarbeit nötig?

Nicht jeder braucht dasselbe Warm-Up. Wenn du bei bestimmten Übungen eingeschränkt bist, solltest du gezielt an der Mobilität arbeiten:

| Problem | Ursache | Lösung |
|---|---|---|
| Kniebeuge: Fersen heben ab | Steife Sprunggelenke | Waden dehnen, Malasana (tiefe Hocke) üben |
| Überkopfdrücken: Rücken überstreckt | Eingeschränkte Schultermobilität | Wand-Engel, Band Pull-Aparts |
| Kreuzheben: Runder Rücken | Steife Beinbeuger / schwache Rumpfstabilität | Rumänisches Kreuzheben mit leichtem Gewicht, Jefferson Curl |
| Bankdrücken: Schulter-Impingement | Enge Brustmuskulatur | Brustdehnung am Türrahmen, Face Pulls |
`,
    en: `
### Module 5.3: Warm-Up & Cool-Down

Imagine you want to stretch a rubber band to its maximum. If it's ice cold, it snaps immediately. If you slowly warm it up, it stretches much further. That's exactly how your muscles, tendons, and ligaments work.

A good warm-up is **not optional** – it's an essential part of your training. And a cool-down helps your body switch to recovery mode faster.

---

### The 3-Phase Warm-Up System

<div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-700 my-6">
  <h4 className="font-bold text-blue-800 dark:text-blue-200 mb-4">🔥 Phase 1: General Warm-Up (5 Minutes)</h4>
  <p className="text-sm text-blue-700 dark:text-blue-300 mb-3">Goal: Increase heart rate, pump blood to muscles, raise body temperature.</p>
  <ul className="text-sm text-blue-700 dark:text-blue-300 space-y-1">
    <li>• <strong>Rowing machine</strong> – ideal as it activates upper and lower body</li>
    <li>• <strong>Elliptical</strong> – easy on joints, full body</li>
    <li>• <strong>Jump rope</strong> – activates calves and coordinates the whole body</li>
    <li>• <strong>Jumping jacks</strong> – no equipment needed</li>
  </ul>
  <p className="text-sm text-blue-700 dark:text-blue-300 mt-3"><strong>Intensity:</strong> You should break a light sweat but NOT fatigue yourself. Think 50-60% of max heart rate.</p>
</div>

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border border-green-200 dark:border-green-700 my-6">
  <h4 className="font-bold text-green-800 dark:text-green-200 mb-4">🤸 Phase 2: Dynamic Stretching (5 Minutes)</h4>
  <p className="text-sm text-green-700 dark:text-green-300 mb-3">Goal: Move joints through full range of motion. Muscles are actively stretched without holding the end position.</p>
  <ul className="text-sm text-green-700 dark:text-green-300 space-y-2">
    <li>• <strong>Arm circles</strong> – forward & backward (warm up shoulder joint)</li>
    <li>• <strong>Leg swings</strong> – sideways & front/back (mobilize hip joint)</li>
    <li>• <strong>Torso rotation</strong> – rotate upper body left/right (spine)</li>
    <li>• <strong>Cat-Cow</strong> – on all fours: round back → arch back (mobilize spine)</li>
    <li>• <strong>Deep squat hold</strong> – hold deep squat position for 30 seconds</li>
    <li>• <strong>Inchworms</strong> – stand → hands to floor → walk out to push-up → walk back</li>
  </ul>
</div>

<div className="bg-amber-50 dark:bg-amber-900/20 p-6 rounded-xl border border-amber-200 dark:border-amber-700 my-6">
  <h4 className="font-bold text-amber-800 dark:text-amber-200 mb-4">🎯 Phase 3: Specific Warm-Up (5-10 Minutes)</h4>
  <p className="text-sm text-amber-700 dark:text-amber-300 mb-3">Goal: Prepare the body for the specific exercise – with warm-up sets.</p>
  <p className="text-sm text-amber-700 dark:text-amber-300 mb-2"><strong>Example: You want to Bench Press 80kg:</strong></p>
  <ul className="text-sm text-amber-700 dark:text-amber-300 space-y-1">
    <li>1. Bar only (20kg) × 15 reps</li>
    <li>2. 40kg × 10 reps</li>
    <li>3. 60kg × 5 reps</li>
    <li>4. 70kg × 3 reps</li>
    <li>5. <strong>80kg – Working sets begin!</strong></li>
  </ul>
  <p className="text-sm text-amber-700 dark:text-amber-300 mt-3"><strong>Rule of thumb:</strong> The heavier your working weight, the more warm-up sets you need. Warm-up sets should activate muscles but NOT fatigue them.</p>
</div>

---

### ⚠️ Static Stretching BEFORE Training – Why NOT?

<div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-xl border border-red-200 dark:border-red-700 my-6">
  <h4 className="font-bold text-red-800 dark:text-red-200 mb-4">⛔ Important: No Static Stretching BEFORE Strength Training!</h4>
  <p className="text-sm text-red-700 dark:text-red-300 mb-3">Studies show that static stretching (holding a position for 30+ seconds) before training can:</p>
  <ul className="text-sm text-red-700 dark:text-red-300 space-y-1">
    <li>• <strong>Reduce maximum strength by up to 5-8%</strong></li>
    <li>• <strong>Decrease explosive power</strong></li>
    <li>• <strong>Temporarily impair neuromuscular stability</strong></li>
    <li>• <strong>Paradoxically increase injury risk</strong> (joints become less stable)</li>
  </ul>
  <p className="text-sm text-red-700 dark:text-red-300 mt-3"><strong>Remember:</strong> Dynamic stretching = BEFORE training. Static stretching = AFTER training.</p>
</div>

---

### The Perfect Cool-Down (10-15 Minutes)

After training, your body slowly switches from "fight mode" (sympathetic nervous system) to "recovery mode" (parasympathetic nervous system). A cool-down accelerates this transition.

**1. Light Cardio (3-5 Min)**
*   Walking on treadmill or slow cycling.
*   Gently lowers heart rate and helps remove metabolic waste products.

**2. Static Stretching (5-10 Min)**
*   Now is the perfect time! Muscles are warm and full of blood.
*   Hold each stretch for **30-60 seconds**.
*   Focus on the muscle groups you trained.

**3. Foam Rolling (Optional, 5-10 Min)**
*   Roll over tight muscle groups.
*   Releases adhesions in fascia (connective tissue around muscles).
*   May be painful at first – that's normal.

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border border-green-200 dark:border-green-700 my-6">
  <h4 className="font-bold text-green-800 dark:text-green-200 mb-4">✅ Key Stretches After Training</h4>
  <ul className="text-sm text-green-700 dark:text-green-300 space-y-2">
    <li>• <strong>Chest:</strong> Arm on doorframe, rotate torso away</li>
    <li>• <strong>Back:</strong> Hang from pull-up bar (Dead Hang)</li>
    <li>• <strong>Shoulders:</strong> Pull arm across chest</li>
    <li>• <strong>Hamstrings:</strong> Standing, one leg on hip-height surface, lean forward</li>
    <li>• <strong>Quads:</strong> Standing, pull heel to glutes</li>
    <li>• <strong>Hip flexors:</strong> Lunge position, back knee on floor</li>
    <li>• <strong>Calves:</strong> Lean against wall, press heel to floor</li>
  </ul>
</div>

---

### When Is Extra Mobility Work Needed?

Not everyone needs the same warm-up. If you're limited in certain exercises, you should work on mobility specifically:

| Problem | Cause | Solution |
|---|---|---|
| Squat: Heels lift off | Stiff ankles | Stretch calves, practice Malasana (deep squat) |
| Overhead press: Back overextends | Limited shoulder mobility | Wall angels, Band pull-aparts |
| Deadlift: Rounded back | Tight hamstrings / weak core | Romanian deadlift with light weight, Jefferson Curl |
| Bench press: Shoulder impingement | Tight chest muscles | Doorframe chest stretch, Face pulls |
`
  },

  task: {
    de: {
      title: 'Perfektes Warm-Up & Cool-Down',
      description: 'Führe vor und nach deinem nächsten Training das komplette Protokoll durch.',
      checklist: [
        { text: 'Phase 1: 5 Min allgemeines Cardio (leichtes Schwitzen).' },
        { text: 'Phase 2: 5 Min dynamisches Dehnen (Armkreisen, Beinpendel, Cat-Cow, Inchworms).' },
        { text: 'Phase 3: Mindestens 3 Aufwärmsätze für die erste Hauptübung.' },
        { text: 'Cool-Down: 3-5 Min leichtes Cardio + 5-10 Min statisches Dehnen nach dem Training.' }
      ]
    },
    en: {
      title: 'Perfect Warm-Up & Cool-Down',
      description: 'Perform the complete protocol before and after your next workout.',
      checklist: [
        { text: 'Phase 1: 5 min general cardio (light sweat).' },
        { text: 'Phase 2: 5 min dynamic stretching (arm circles, leg swings, cat-cow, inchworms).' },
        { text: 'Phase 3: At least 3 warm-up sets for the first main exercise.' },
        { text: 'Cool-down: 3-5 min light cardio + 5-10 min static stretching after training.' }
      ]
    }
  },

  notes: {
    de: [
      {
        front: 'Warum kein statisches Dehnen VOR dem Krafttraining?',
        back: 'Es reduziert die maximale Kraft um bis zu 5-8%, verringert die Explosivkraft und kann die Gelenke instabiler machen.'
      },
      {
        front: 'Was sind die 3 Phasen eines guten Warm-Ups?',
        back: '1. Allgemeines Aufwärmen (5 Min Cardio), 2. Dynamisches Dehnen (5 Min), 3. Spezifische Aufwärmsätze (5-10 Min).'
      },
      {
        front: 'Was gehört zu einem guten Cool-Down?',
        back: 'Leichtes Cardio (3-5 Min), statisches Dehnen (5-10 Min), optional Foam Rolling (5-10 Min).'
      },
      {
        front: 'Wie lange sollte man jede statische Dehnung halten?',
        back: '30-60 Sekunden pro Dehnung, nach dem Training wenn die Muskeln warm sind.'
      }
    ],
    en: [
      {
        front: 'Why no static stretching BEFORE strength training?',
        back: 'It reduces maximum strength by up to 5-8%, decreases explosive power, and can make joints less stable.'
      },
      {
        front: 'What are the 3 phases of a good warm-up?',
        back: '1. General warm-up (5 min cardio), 2. Dynamic stretching (5 min), 3. Specific warm-up sets (5-10 min).'
      },
      {
        front: 'What belongs to a good cool-down?',
        back: 'Light cardio (3-5 min), static stretching (5-10 min), optional foam rolling (5-10 min).'
      },
      {
        front: 'How long should you hold each static stretch?',
        back: '30-60 seconds per stretch, after training when muscles are warm.'
      }
    ]
  }
};
