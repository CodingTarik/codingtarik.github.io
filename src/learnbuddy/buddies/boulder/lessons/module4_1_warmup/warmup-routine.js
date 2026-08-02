import { Flame, Heart, Activity, RotateCcw, TrendingUp, AlertCircle, Timer } from 'lucide-react';

export const warmupRoutine = {
  title: { de: "Aufwärm-Routine", en: "Warm-Up Routine" },
  description: {
    de: "Die 4 Phasen des perfekten Aufwärmens: Puls erhöhen, dynamische Dehnung, Aktivierung und kletterspezifisches Warm-up.",
    en: "The 4 phases of the perfect warm-up: raise pulse, dynamic stretching, activation, and climbing-specific warm-up."
  },
  content: {
    de: `
### Die perfekte Aufwärm-Routine

Aufwärmen ist <strong>nicht optional</strong> – es ist der wichtigste Schutz vor Verletzungen. Kalte Muskeln, Sehnen und Gelenke sind verletzungsanfällig. Ein gutes Warm-up dauert 20-25 Minuten und bereitet deinen Körper auf die Belastung vor.

<div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-xl border-l-4 border-red-500 my-6">
  <div className="flex items-start gap-4">
    <AlertCircle className="text-red-600 dark:text-red-400 flex-shrink-0 mt-1" size={32} />
    <div>
      <h4 className="font-bold text-red-800 dark:text-red-200 mb-2">Kein Warm-up = Verletzungsrisiko!</h4>
      <p className="text-sm text-red-700 dark:text-red-300">
        Die häufigsten Kletterverletzungen (Pulley-Riss, Sehnenentzündung, Schulterprobleme) passieren bei <strong>unzureichendem Aufwärmen</strong>. 20 Minuten Warm-up können monatelange Verletzungspausen verhindern!
      </p>
    </div>
  </div>
</div>

---

### Phase 1: Puls erhöhen (5 Minuten)

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border-2 border-green-300 dark:border-green-700 my-6">
  <h3 className="font-bold text-green-800 dark:text-green-200 mb-4 flex items-center gap-2">
    <Heart className="text-green-600 dark:text-green-400" size={24} />
    Kreislauf ankurbeln
  </h3>
  <ul className="text-sm text-green-700 dark:text-green-300 space-y-2 list-disc list-inside">
    <li>Seilspringen (2-3 Minuten)</li>
    <li>Hampelmänner / Jumping Jacks</li>
    <li>Leichtes Joggen auf der Stelle</li>
    <li>Knieheben, Anfersen</li>
    <li><strong>Ziel:</strong> Leicht schwitzen, Puls erhöhen, Blut in Muskeln pumpen</li>
  </ul>
</div>

### Phase 2: Dynamische Dehnung & Mobilität (5 Minuten)

<div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border-l-4 border-blue-500 my-6">
  <div className="flex items-start gap-4">
    <RotateCcw className="text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1" size={32} />
    <div>
      <h4 className="font-bold text-blue-800 dark:text-blue-200 mb-2">Gelenke mobilisieren</h4>
      <ul className="text-sm text-blue-700 dark:text-blue-300 space-y-1 list-disc list-inside">
        <li>Armkreisen (vorwärts + rückwärts)</li>
        <li>Beinpendel (seitlich + vor/zurück)</li>
        <li>Hüftrotationen (Kreise machen)</li>
        <li>Handgelenk-Kreise</li>
        <li>Schulterblatt-Mobilisation</li>
        <li><strong>Wichtig:</strong> Dynamisch! Kein statisches Dehnen vor dem Klettern!</li>
      </ul>
    </div>
  </div>
</div>

### Phase 3: Aktivierung (5 Minuten)

<div className="bg-amber-50 dark:bg-amber-900/20 p-6 rounded-xl border-l-4 border-amber-500 my-6">
  <div className="flex items-start gap-4">
    <Activity className="text-amber-600 dark:text-amber-400 flex-shrink-0 mt-1" size={32} />
    <div>
      <h4 className="font-bold text-amber-800 dark:text-amber-200 mb-2">Muskeln aktivieren</h4>
      <ul className="text-sm text-amber-700 dark:text-amber-300 space-y-1 list-disc list-inside">
        <li>Schulter-Aktivierung mit Theraband</li>
        <li>Plank (30 Sekunden) für Core</li>
        <li>Knetball oder Fingerübungen für Finger</li>
        <li>Leichte Liegestütze (5-10)</li>
        <li><strong>Ziel:</strong> Muskeln "anschalten", nicht ermüden</li>
      </ul>
    </div>
  </div>
</div>

### Phase 4: Kletterspezifisch (10-15 Minuten)

<div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl my-6">
  <div className="flex items-start gap-4">
    <Flame className="text-purple-600 dark:text-purple-400 flex-shrink-0 mt-1" size={32} />
    <div>
      <h4 className="font-bold text-purple-800 dark:text-purple-200 mb-2">An die Wand!</h4>
      <ul className="text-sm text-purple-700 dark:text-purple-300 space-y-1 list-disc list-inside">
        <li>Traversieren (seitwärts an leichten Griffen)</li>
        <li>2-3 sehr leichte Boulder klettern (weit unter deinem Niveau)</li>
        <li>Fokus auf saubere, langsame Bewegung</li>
        <li>Alle Grifftypen mindestens einmal belastet haben</li>
        <li><strong>Erst dann:</strong> Langsam Schwierigkeit steigern</li>
      </ul>
    </div>
  </div>
</div>

---

### Cool-Down (nach dem Klettern)

<div className="bg-teal-50 dark:bg-teal-900/20 p-6 rounded-xl border-2 border-teal-300 dark:border-teal-700 my-6">
  <h3 className="font-bold text-teal-800 dark:text-teal-200 mb-4 flex items-center gap-2">
    <Timer className="text-teal-600 dark:text-teal-400" size={24} />
    Abwärmen nicht vergessen!
  </h3>
  <ul className="text-sm text-teal-700 dark:text-teal-300 space-y-2 list-disc list-inside">
    <li>Leichtes statisches Dehnen: Unterarme, Schultern, Hüfte (30 Sek pro Dehnung)</li>
    <li>Finger-Strecker-Übungen mit Gummiband (5 Minuten)</li>
    <li>Leichte Antagonisten-Übungen: 10 Liegestütze, Dips</li>
    <li>Foam Rolling bei Bedarf</li>
  </ul>
</div>

**Merke:** 20 Minuten Aufwärmen können monatelange Verletzungspausen verhindern. Nie überspringen!
    `,
    en: `
### The Perfect Warm-Up Routine

Warming up is <strong>not optional</strong> – it's the most important protection against injuries. Cold muscles, tendons, and joints are injury-prone. A good warm-up takes 20-25 minutes and prepares your body for the load.

<div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-xl border-l-4 border-red-500 my-6">
  <div className="flex items-start gap-4">
    <AlertCircle className="text-red-600 dark:text-red-400 flex-shrink-0 mt-1" size={32} />
    <div>
      <h4 className="font-bold text-red-800 dark:text-red-200 mb-2">No Warm-Up = Injury Risk!</h4>
      <p className="text-sm text-red-700 dark:text-red-300">
        The most common climbing injuries (pulley tears, tendinitis, shoulder problems) happen with <strong>insufficient warming up</strong>. 20 minutes of warm-up can prevent months of injury breaks!
      </p>
    </div>
  </div>
</div>

---

### Phase 1: Raise Pulse (5 Minutes)

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border-2 border-green-300 dark:border-green-700 my-6">
  <h3 className="font-bold text-green-800 dark:text-green-200 mb-4 flex items-center gap-2">
    <Heart className="text-green-600 dark:text-green-400" size={24} />
    Get the Blood Flowing
  </h3>
  <ul className="text-sm text-green-700 dark:text-green-300 space-y-2 list-disc list-inside">
    <li>Jump rope (2-3 minutes)</li>
    <li>Jumping jacks</li>
    <li>Light jogging in place</li>
    <li>High knees, butt kicks</li>
    <li><strong>Goal:</strong> Light sweat, elevated pulse, blood pumping to muscles</li>
  </ul>
</div>

### Phase 2: Dynamic Stretching & Mobility (5 Minutes)

<div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border-l-4 border-blue-500 my-6">
  <div className="flex items-start gap-4">
    <RotateCcw className="text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1" size={32} />
    <div>
      <h4 className="font-bold text-blue-800 dark:text-blue-200 mb-2">Mobilize Joints</h4>
      <ul className="text-sm text-blue-700 dark:text-blue-300 space-y-1 list-disc list-inside">
        <li>Arm circles (forward + backward)</li>
        <li>Leg swings (sideways + front/back)</li>
        <li>Hip rotations (circles)</li>
        <li>Wrist circles</li>
        <li>Shoulder blade mobilization</li>
        <li><strong>Important:</strong> Dynamic! No static stretching before climbing!</li>
      </ul>
    </div>
  </div>
</div>

### Phase 3: Activation (5 Minutes)

<div className="bg-amber-50 dark:bg-amber-900/20 p-6 rounded-xl border-l-4 border-amber-500 my-6">
  <div className="flex items-start gap-4">
    <Activity className="text-amber-600 dark:text-amber-400 flex-shrink-0 mt-1" size={32} />
    <div>
      <h4 className="font-bold text-amber-800 dark:text-amber-200 mb-2">Activate Muscles</h4>
      <ul className="text-sm text-amber-700 dark:text-amber-300 space-y-1 list-disc list-inside">
        <li>Shoulder activation with resistance band</li>
        <li>Plank (30 seconds) for core</li>
        <li>Squeeze ball or finger exercises for fingers</li>
        <li>Light push-ups (5-10)</li>
        <li><strong>Goal:</strong> "Switch on" muscles, not fatigue them</li>
      </ul>
    </div>
  </div>
</div>

### Phase 4: Climbing-Specific (10-15 Minutes)

<div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl my-6">
  <div className="flex items-start gap-4">
    <Flame className="text-purple-600 dark:text-purple-400 flex-shrink-0 mt-1" size={32} />
    <div>
      <h4 className="font-bold text-purple-800 dark:text-purple-200 mb-2">Get On the Wall!</h4>
      <ul className="text-sm text-purple-700 dark:text-purple-300 space-y-1 list-disc list-inside">
        <li>Traverse (sideways on easy holds)</li>
        <li>Climb 2-3 very easy boulders (well below your level)</li>
        <li>Focus on clean, slow movement</li>
        <li>Load all grip types at least once</li>
        <li><strong>Only then:</strong> Gradually increase difficulty</li>
      </ul>
    </div>
  </div>
</div>

---

### Cool-Down (After Climbing)

<div className="bg-teal-50 dark:bg-teal-900/20 p-6 rounded-xl border-2 border-teal-300 dark:border-teal-700 my-6">
  <h3 className="font-bold text-teal-800 dark:text-teal-200 mb-4 flex items-center gap-2">
    <Timer className="text-teal-600 dark:text-teal-400" size={24} />
    Don't Forget the Cool-Down!
  </h3>
  <ul className="text-sm text-teal-700 dark:text-teal-300 space-y-2 list-disc list-inside">
    <li>Light static stretching: forearms, shoulders, hips (30 sec per stretch)</li>
    <li>Finger extensor exercises with rubber band (5 minutes)</li>
    <li>Light antagonist exercises: 10 push-ups, dips</li>
    <li>Foam rolling as needed</li>
  </ul>
</div>

**Remember:** 20 minutes of warm-up can prevent months of injury breaks. Never skip it!
    `
  },
  task: {
    de: {
      title: "Praktische Übung: Aufwärm-Routine",
      description: "Entwickle eine komplette Aufwärm-Routine für deine Klettersessions.",
      checklist: [
        { text: "Phase 1: 5 Minuten Cardio (Seilspringen, Hampelmänner, Joggen)", checked: false },
        { text: "Phase 2: 5 Minuten dynamische Dehnung (Armkreisen, Beinpendel, Hüftrotation)", checked: false },
        { text: "Phase 3: 5 Minuten Aktivierung (Plank, Theraband, Fingerübungen)", checked: false },
        { text: "Phase 4: 10-15 Minuten kletterspezifisch (Traversieren, leichte Boulder)", checked: false }
      ]
    },
    en: {
      title: "Practical Exercise: Warm-Up Routine",
      description: "Develop a complete warm-up routine for your climbing sessions.",
      checklist: [
        { text: "Phase 1: 5 minutes cardio (jump rope, jumping jacks, jogging)", checked: false },
        { text: "Phase 2: 5 minutes dynamic stretching (arm circles, leg swings, hip rotations)", checked: false },
        { text: "Phase 3: 5 minutes activation (plank, resistance band, finger exercises)", checked: false },
        { text: "Phase 4: 10-15 minutes climbing-specific (traversing, easy boulders)", checked: false }
      ]
    }
  },
  quiz: {
    de: [
      { question: "Warum ist Aufwärmen vor dem Klettern so wichtig?", answer: "Aufwärmen schützt vor den häufigsten Kletterverletzungen wie Pulley-Riss, Sehnenentzündung und Schulterprobleme. Kalte Muskeln, Sehnen und Gelenke sind verletzungsanfällig. 20 Minuten Warm-up können monatelange Verletzungspausen verhindern. Es bereitet Kreislauf, Gelenke, Muskeln und Sehnen auf die Belastung vor." },
      { question: "Was sind die 4 Phasen des Aufwärmens?", answer: "1) Puls erhöhen (5 Min): Cardio wie Seilspringen, Joggen. 2) Dynamische Dehnung (5 Min): Armkreisen, Beinpendel, Hüftrotation – kein statisches Dehnen! 3) Aktivierung (5 Min): Theraband, Plank, Fingerübungen. 4) Kletterspezifisch (10-15 Min): Traversieren und sehr leichte Boulder klettern." },
      { question: "Warum sollst du vor dem Klettern NICHT statisch dehnen?", answer: "Statisches Dehnen vor dem Training reduziert kurzfristig die Muskelkraft und -spannung. Das kann beim Klettern kontraproduktiv sein und sogar das Verletzungsrisiko erhöhen. Vor dem Klettern nutzt man dynamische Dehnung (Bewegung), statisches Dehnen ist für das Cool-down nach dem Klettern gedacht." }
    ],
    en: [
      { question: "Why is warming up before climbing so important?", answer: "Warming up protects against the most common climbing injuries like pulley tears, tendinitis, and shoulder problems. Cold muscles, tendons, and joints are injury-prone. 20 minutes of warm-up can prevent months of injury breaks. It prepares circulation, joints, muscles, and tendons for the load." },
      { question: "What are the 4 phases of warming up?", answer: "1) Raise pulse (5 min): Cardio like jump rope, jogging. 2) Dynamic stretching (5 min): Arm circles, leg swings, hip rotations – no static stretching! 3) Activation (5 min): Resistance band, plank, finger exercises. 4) Climbing-specific (10-15 min): Traversing and climbing very easy boulders." },
      { question: "Why shouldn't you statically stretch BEFORE climbing?", answer: "Static stretching before training temporarily reduces muscle strength and tension. This can be counterproductive for climbing and may even increase injury risk. Before climbing, use dynamic stretching (movement); static stretching is for the cool-down after climbing." }
    ]
  }
};
