import { Apple, Droplets, Moon, AlertTriangle, TrendingUp, Clock, Battery } from 'lucide-react';

export const nutritionRecovery = {
  title: { de: "Ernährung & Regeneration", en: "Nutrition & Recovery" },
  description: { de: "Richtige Ernährung vor und nach dem Training, Hydration, Schlaf und Recovery-Strategien für Kletterer.", en: "Proper nutrition before and after training, hydration, sleep, and recovery strategies for climbers." },
  content: {
    de: `
### Ernährung & Regeneration für Kletterer

Dein Körper ist eine Maschine – und <strong>Ernährung ist der Treibstoff</strong>. Was und wann du isst, beeinflusst deine Leistung, Recovery und langfristige Gesundheit.

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border-2 border-green-300 dark:border-green-700 my-6">
  <h3 className="font-bold text-green-800 dark:text-green-200 mb-4 flex items-center gap-2">
    <Apple className="text-green-600 dark:text-green-400" size={24} />
    Grundlagen der Kletter-Ernährung
  </h3>
  <div className="space-y-2">
    <p className="text-sm text-green-700 dark:text-green-300"><strong>Protein:</strong> 1.6-2g pro kg Körpergewicht – für Muskelregeneration</p>
    <p className="text-sm text-green-700 dark:text-green-300"><strong>Kohlenhydrate:</strong> Dein Energielieferant – vor und nach dem Training</p>
    <p className="text-sm text-green-700 dark:text-green-300"><strong>Gesunde Fette:</strong> Für Hormone und Gelenke (Nüsse, Olivenöl, Avocado)</p>
    <p className="text-sm text-green-700 dark:text-green-300"><strong>Hydration:</strong> Mindestens 2-3 Liter Wasser pro Tag, mehr bei Training</p>
  </div>
</div>

### Timing

<div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border-l-4 border-blue-500 my-6">
  <div className="flex items-start gap-4">
    <Clock className="text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1" size={32} />
    <div>
      <h4 className="font-bold text-blue-800 dark:text-blue-200 mb-2">Wann essen?</h4>
      <div className="space-y-2">
        <p className="text-sm text-blue-700 dark:text-blue-300"><strong>1-2h vor Training:</strong> Leichte Mahlzeit (Banane + Nussbutter, Haferflocken)</p>
        <p className="text-sm text-blue-700 dark:text-blue-300"><strong>30-60 Min nach Training:</strong> Protein + Kohlenhydrate (Protein-Shake, Quark + Obst)</p>
      </div>
    </div>
  </div>
</div>

---

### Regeneration

<div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl my-6">
  <div className="flex items-start gap-4">
    <Moon className="text-purple-600 dark:text-purple-400 flex-shrink-0 mt-1" size={32} />
    <div>
      <h4 className="font-bold text-purple-800 dark:text-purple-200 mb-2">Schlaf: Die wichtigste Recovery!</h4>
      <p className="text-sm text-purple-700 dark:text-purple-300 mb-2">
        <strong>7-9 Stunden</strong> pro Nacht. Im Schlaf repariert dein Körper Muskeln und dein Gehirn verarbeitet Bewegungsmuster (Neuroplastizität). Wenig Schlaf = weniger Fortschritt!
      </p>
    </div>
  </div>
</div>

<div className="bg-amber-50 dark:bg-amber-900/20 p-6 rounded-xl border-l-4 border-amber-500 my-6">
  <div className="flex items-start gap-4">
    <Battery className="text-amber-600 dark:text-amber-400 flex-shrink-0 mt-1" size={32} />
    <div>
      <h4 className="font-bold text-amber-800 dark:text-amber-200 mb-2">Rest Days sind ESSENTIELL!</h4>
      <ul className="text-sm text-amber-700 dark:text-amber-300 space-y-1 list-disc list-inside">
        <li>Mindestens 1-2 komplette Ruhetage pro Woche</li>
        <li>Aktive Regeneration: Yoga, Stretching, leichtes Cardio</li>
        <li>Passive Regeneration: Foam Rolling, Massage</li>
        <li>Übertraining erkennen: Ständige Müdigkeit, schlechte Performance, erhöhter Ruhepuls</li>
      </ul>
    </div>
  </div>
</div>

<div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-xl border-l-4 border-red-500 my-6">
  <div className="flex items-start gap-4">
    <AlertTriangle className="text-red-600 dark:text-red-400 flex-shrink-0 mt-1" size={32} />
    <div>
      <h4 className="font-bold text-red-800 dark:text-red-200 mb-2">Vorsicht: Essstörungen</h4>
      <p className="text-sm text-red-700 dark:text-red-300">
        Essstörungen sind in der Kletter-Community leider verbreitet. <strong>Performance ≠ leicht sein!</strong> Gesundheit geht immer vor. Kraft-zu-Gewicht-Verhältnis verbessern ja, aber nicht auf Kosten der Gesundheit.
      </p>
    </div>
  </div>
</div>

**Merke:** Gute Ernährung und ausreichend Schlaf sind genauso wichtig wie Training. Recovery ist, wo Fortschritt passiert!
    `,
    en: `
### Nutrition & Recovery for Climbers

Your body is a machine – and <strong>nutrition is the fuel</strong>. What and when you eat affects your performance, recovery, and long-term health.

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border-2 border-green-300 dark:border-green-700 my-6">
  <h3 className="font-bold text-green-800 dark:text-green-200 mb-4 flex items-center gap-2">
    <Apple className="text-green-600 dark:text-green-400" size={24} />
    Climbing Nutrition Basics
  </h3>
  <div className="space-y-2">
    <p className="text-sm text-green-700 dark:text-green-300"><strong>Protein:</strong> 1.6-2g per kg bodyweight – for muscle recovery</p>
    <p className="text-sm text-green-700 dark:text-green-300"><strong>Carbohydrates:</strong> Your energy source – before and after training</p>
    <p className="text-sm text-green-700 dark:text-green-300"><strong>Healthy Fats:</strong> For hormones and joints (nuts, olive oil, avocado)</p>
    <p className="text-sm text-green-700 dark:text-green-300"><strong>Hydration:</strong> At least 2-3 liters of water per day, more during training</p>
  </div>
</div>

### Timing

<div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border-l-4 border-blue-500 my-6">
  <div className="flex items-start gap-4">
    <Clock className="text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1" size={32} />
    <div>
      <h4 className="font-bold text-blue-800 dark:text-blue-200 mb-2">When to Eat?</h4>
      <div className="space-y-2">
        <p className="text-sm text-blue-700 dark:text-blue-300"><strong>1-2h before training:</strong> Light meal (banana + nut butter, oatmeal)</p>
        <p className="text-sm text-blue-700 dark:text-blue-300"><strong>30-60 min after training:</strong> Protein + carbs (protein shake, yogurt + fruit)</p>
      </div>
    </div>
  </div>
</div>

---

### Recovery

<div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl my-6">
  <div className="flex items-start gap-4">
    <Moon className="text-purple-600 dark:text-purple-400 flex-shrink-0 mt-1" size={32} />
    <div>
      <h4 className="font-bold text-purple-800 dark:text-purple-200 mb-2">Sleep: The Most Important Recovery!</h4>
      <p className="text-sm text-purple-700 dark:text-purple-300 mb-2">
        <strong>7-9 hours</strong> per night. During sleep, your body repairs muscles and your brain processes movement patterns (neuroplasticity). Less sleep = less progress!
      </p>
    </div>
  </div>
</div>

<div className="bg-amber-50 dark:bg-amber-900/20 p-6 rounded-xl border-l-4 border-amber-500 my-6">
  <div className="flex items-start gap-4">
    <Battery className="text-amber-600 dark:text-amber-400 flex-shrink-0 mt-1" size={32} />
    <div>
      <h4 className="font-bold text-amber-800 dark:text-amber-200 mb-2">Rest Days are ESSENTIAL!</h4>
      <ul className="text-sm text-amber-700 dark:text-amber-300 space-y-1 list-disc list-inside">
        <li>At least 1-2 complete rest days per week</li>
        <li>Active recovery: yoga, stretching, light cardio</li>
        <li>Passive recovery: foam rolling, massage</li>
        <li>Recognize overtraining: constant fatigue, poor performance, elevated resting heart rate</li>
      </ul>
    </div>
  </div>
</div>

<div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-xl border-l-4 border-red-500 my-6">
  <div className="flex items-start gap-4">
    <AlertTriangle className="text-red-600 dark:text-red-400 flex-shrink-0 mt-1" size={32} />
    <div>
      <h4 className="font-bold text-red-800 dark:text-red-200 mb-2">Caution: Eating Disorders</h4>
      <p className="text-sm text-red-700 dark:text-red-300">
        Eating disorders are unfortunately common in the climbing community. <strong>Performance ≠ being light!</strong> Health always comes first. Improving strength-to-weight ratio yes, but not at the cost of health.
      </p>
    </div>
  </div>
</div>

**Remember:** Good nutrition and adequate sleep are just as important as training. Recovery is where progress happens!
    `
  },
  task: {
    de: {
      title: "Praktische Übung: Ernährung & Recovery",
      description: "Optimiere deine Ernährung und Regeneration.",
      checklist: [
        { text: "Iss 1-2h vor dem Training eine leichte Mahlzeit (Kohlenhydrate + etwas Protein)", checked: false },
        { text: "Iss innerhalb von 60 Min nach dem Training Protein + Kohlenhydrate", checked: false },
        { text: "Trinke mindestens 2-3 Liter Wasser am Trainingstag", checked: false },
        { text: "Plane mindestens 1-2 komplette Ruhetage pro Woche ein", checked: false }
      ]
    },
    en: {
      title: "Practical Exercise: Nutrition & Recovery",
      description: "Optimize your nutrition and recovery.",
      checklist: [
        { text: "Eat a light meal 1-2h before training (carbs + some protein)", checked: false },
        { text: "Eat protein + carbs within 60 min after training", checked: false },
        { text: "Drink at least 2-3 liters of water on training days", checked: false },
        { text: "Plan at least 1-2 complete rest days per week", checked: false }
      ]
    }
  },
  quiz: {
    de: [
      { question: "Was solltest du 1-2 Stunden vor dem Training essen?", answer: "Eine leichte Mahlzeit mit Kohlenhydraten und etwas Protein: Banane + Nussbutter, Haferflocken, oder Reiswaffeln. Nicht zu schwer, damit der Magen nicht belastet wird, aber genug Energie für die Session. Kohlenhydrate liefern schnelle Energie." },
      { question: "Warum ist Schlaf so wichtig für Kletter-Fortschritt?", answer: "Im Schlaf (7-9 Stunden) repariert der Körper die Muskeln und das Gehirn verarbeitet Bewegungsmuster durch Neuroplastizität. Ohne ausreichend Schlaf kann der Körper nicht richtig regenerieren, Bewegungen werden nicht 'gespeichert' und der Fortschritt stagniert. Schlaf ist die wichtigste Recovery-Maßnahme." },
      { question: "Woran erkennst du Übertraining?", answer: "Anzeichen von Übertraining sind: Ständige Müdigkeit trotz Schlaf, schlechte Performance trotz Training, erhöhter Ruhepuls, Reizbarkeit, häufige Krankheiten, Schlafprobleme. Die Lösung: Mindestens eine Woche Pause, Trainingsumfang reduzieren und Recovery priorisieren. Rest Days (1-2 pro Woche) verhindern Übertraining." }
    ],
    en: [
      { question: "What should you eat 1-2 hours before training?", answer: "A light meal with carbohydrates and some protein: banana + nut butter, oatmeal, or rice cakes. Not too heavy to avoid stomach issues, but enough energy for the session. Carbohydrates provide quick energy." },
      { question: "Why is sleep so important for climbing progress?", answer: "During sleep (7-9 hours), the body repairs muscles and the brain processes movement patterns through neuroplasticity. Without adequate sleep, the body can't recover properly, movements aren't 'stored,' and progress stagnates. Sleep is the most important recovery measure." },
      { question: "How do you recognize overtraining?", answer: "Signs of overtraining: constant fatigue despite sleep, poor performance despite training, elevated resting heart rate, irritability, frequent illness, sleep problems. Solution: at least one week off, reduce training volume, prioritize recovery. Rest days (1-2 per week) prevent overtraining." }
    ]
  }
};
