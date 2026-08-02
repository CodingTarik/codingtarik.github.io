export const endurance = {
  title: {
    de: "Ausdauer aufbauen - Länger und weiter schwimmen",
    en: "Building Endurance - Swim Longer and Farther"
  },
  description: {
    de: "Lerne, wie du deine Schwimm-Ausdauer systematisch aufbaust: Trainingsplanung, Intervalle und Progression.",
    en: "Learn how to systematically build swimming endurance: training planning, intervals, and progression."
  },
  content: {
    de: `
<div className="space-y-6">
  <h2 className="text-3xl font-bold text-blue-800 dark:text-blue-200 mb-4">Ausdauer aufbauen</h2>

  <p className="text-lg leading-relaxed">
    Ausdauer ist die Fähigkeit, über einen längeren Zeitraum effizient zu schwimmen, ohne dass 
    die Technik zusammenbricht. Es geht nicht darum, einfach mehr Bahnen zu schwimmen, sondern 
    die Ausdauer systematisch und intelligent aufzubauen.
  </p>

  <div className="bg-blue-50 dark:bg-blue-900/40 p-6 rounded-xl border-2 border-blue-200 dark:border-blue-800">
    <h3 className="font-bold text-blue-800 dark:text-blue-200 mb-3 text-xl">Grundprinzipien des Ausdauertrainings</h3>
    <ul className="list-disc list-inside space-y-2 text-blue-700 dark:text-blue-300">
      <li><strong>Progressionsregel:</strong> Steigere das Volumen um maximal 10% pro Woche.</li>
      <li><strong>Konsistenz:</strong> Regelmäßiges Training (3-4x/Woche) ist wichtiger als einzelne Mammut-Sessions.</li>
      <li><strong>Technik vor Strecke:</strong> Nie die Technik für mehr Strecke opfern.</li>
      <li><strong>Erholung:</strong> Ruhetage sind genauso wichtig wie Trainingstage.</li>
    </ul>
  </div>

  <h3 className="text-2xl font-bold mt-8 mb-4">Trainingsstruktur</h3>

  <div className="bg-amber-50 dark:bg-amber-900/40 p-6 rounded-xl border-2 border-amber-200 dark:border-amber-800">
    <h3 className="font-bold text-amber-800 dark:text-amber-200 mb-3 text-xl">Aufbau einer Trainingseinheit</h3>
    <ol className="list-decimal list-inside space-y-3 text-amber-700 dark:text-amber-300">
      <li><strong>Warm-up (10-15 Min):</strong> Lockeres Schwimmen, gemischte Stile, leichte Drills.</li>
      <li><strong>Hauptteil (20-40 Min):</strong> Ausdauer-Sets, Intervalle oder Distanztraining.</li>
      <li><strong>Cool-down (5-10 Min):</strong> Lockeres Ausschwimmen, Dehnung im Wasser.</li>
    </ol>
  </div>

  <h3 className="text-2xl font-bold mt-8 mb-4">Intervalltraining</h3>

  <div className="bg-green-50 dark:bg-green-900/40 p-6 rounded-xl border-2 border-green-200 dark:border-green-800">
    <h3 className="font-bold text-green-800 dark:text-green-200 mb-3 text-xl">Beispiel-Intervalle für Anfänger</h3>
    <ul className="list-disc list-inside space-y-2 text-green-700 dark:text-green-300">
      <li><strong>4 x 50m:</strong> Moderate Intensität, 20 Sekunden Pause zwischen den Wiederholungen.</li>
      <li><strong>2 x 100m:</strong> Gleichmäßiges Tempo, 30 Sekunden Pause.</li>
      <li><strong>8 x 25m:</strong> Abwechselnd schnell und langsam.</li>
    </ul>
    <h3 className="font-bold text-green-800 dark:text-green-200 mb-3 mt-4 text-xl">Beispiel-Intervalle für Fortgeschrittene</h3>
    <ul className="list-disc list-inside space-y-2 text-green-700 dark:text-green-300">
      <li><strong>10 x 100m:</strong> Auf Abgangszeit (z.B. alle 1:45), gleichmäßiges Tempo.</li>
      <li><strong>5 x 200m:</strong> Moderate Intensität, 20 Sekunden Pause.</li>
      <li><strong>Pyramide:</strong> 100-200-300-400-300-200-100m mit kurzen Pausen.</li>
    </ul>
  </div>

  <h3 className="text-2xl font-bold mt-8 mb-4">Progression</h3>

  <div className="bg-blue-50 dark:bg-blue-900/40 p-6 rounded-xl border-2 border-blue-200 dark:border-blue-800">
    <h3 className="font-bold text-blue-800 dark:text-blue-200 mb-3 text-xl">8-Wochen-Plan für Anfänger</h3>
    <table className="w-full border-collapse mt-3">
      <thead>
        <tr className="bg-blue-100 dark:bg-blue-800/60">
          <th className="border border-blue-200 dark:border-blue-700 p-2 text-left text-blue-800 dark:text-blue-200">Woche</th>
          <th className="border border-blue-200 dark:border-blue-700 p-2 text-left text-blue-800 dark:text-blue-200">Gesamtdistanz</th>
          <th className="border border-blue-200 dark:border-blue-700 p-2 text-left text-blue-800 dark:text-blue-200">Längste Strecke</th>
        </tr>
      </thead>
      <tbody className="text-blue-700 dark:text-blue-300">
        <tr><td className="border border-blue-200 dark:border-blue-700 p-2">1-2</td><td className="border border-blue-200 dark:border-blue-700 p-2">500-800m</td><td className="border border-blue-200 dark:border-blue-700 p-2">50m am Stück</td></tr>
        <tr><td className="border border-blue-200 dark:border-blue-700 p-2">3-4</td><td className="border border-blue-200 dark:border-blue-700 p-2">800-1200m</td><td className="border border-blue-200 dark:border-blue-700 p-2">100m am Stück</td></tr>
        <tr><td className="border border-blue-200 dark:border-blue-700 p-2">5-6</td><td className="border border-blue-200 dark:border-blue-700 p-2">1200-1600m</td><td className="border border-blue-200 dark:border-blue-700 p-2">200m am Stück</td></tr>
        <tr><td className="border border-blue-200 dark:border-blue-700 p-2">7-8</td><td className="border border-blue-200 dark:border-blue-700 p-2">1600-2000m</td><td className="border border-blue-200 dark:border-blue-700 p-2">400m am Stück</td></tr>
      </tbody>
    </table>
  </div>

  <div className="bg-red-50 dark:bg-red-900/40 p-6 rounded-xl border-2 border-red-200 dark:border-red-800 mt-4">
    <h3 className="font-bold text-red-800 dark:text-red-200 mb-3 text-xl">Warnsignale für Übertraining</h3>
    <ul className="list-disc list-inside space-y-2 text-red-700 dark:text-red-300">
      <li>Anhaltende Müdigkeit auch nach Ruhetagen</li>
      <li>Schmerzen in Schultern, Knien oder im Rücken</li>
      <li>Sinkende Leistung trotz mehr Training</li>
      <li>Schlafprobleme oder Appetitlosigkeit</li>
    </ul>
  </div>

  <div className="bg-green-50 dark:bg-green-900/40 p-6 rounded-xl border-2 border-green-200 dark:border-green-800 mt-8">
    <h3 className="font-bold text-green-800 dark:text-green-200 mb-4 text-xl">Übungen</h3>
    <ol className="list-decimal list-inside space-y-3 text-green-700 dark:text-green-300">
      <li><strong>Basis-Test:</strong> Schwimme so weit wie möglich am Stück. Notiere die Distanz als Ausgangswert.</li>
      <li><strong>Intervall-Training:</strong> Schwimme 8 x 50m mit 15 Sekunden Pause. Halte ein gleichmäßiges Tempo.</li>
      <li><strong>Distanz-Schwimmen:</strong> Schwimme 20 Minuten ohne Pause in moderatem Tempo.</li>
    </ol>
  </div>
</div>
    `,
    en: `
<div className="space-y-6">
  <h2 className="text-3xl font-bold text-blue-800 dark:text-blue-200 mb-4">Building Endurance</h2>

  <p className="text-lg leading-relaxed">
    Endurance is the ability to swim efficiently over a longer period without technique breaking 
    down. It's not about simply swimming more laps, but building endurance systematically and 
    intelligently.
  </p>

  <div className="bg-blue-50 dark:bg-blue-900/40 p-6 rounded-xl border-2 border-blue-200 dark:border-blue-800">
    <h3 className="font-bold text-blue-800 dark:text-blue-200 mb-3 text-xl">Core Principles of Endurance Training</h3>
    <ul className="list-disc list-inside space-y-2 text-blue-700 dark:text-blue-300">
      <li><strong>Progression rule:</strong> Increase volume by maximum 10% per week.</li>
      <li><strong>Consistency:</strong> Regular training (3-4x/week) is more important than single marathon sessions.</li>
      <li><strong>Technique before distance:</strong> Never sacrifice technique for more distance.</li>
      <li><strong>Recovery:</strong> Rest days are as important as training days.</li>
    </ul>
  </div>

  <h3 className="text-2xl font-bold mt-8 mb-4">Training Structure</h3>

  <div className="bg-amber-50 dark:bg-amber-900/40 p-6 rounded-xl border-2 border-amber-200 dark:border-amber-800">
    <h3 className="font-bold text-amber-800 dark:text-amber-200 mb-3 text-xl">Training Session Structure</h3>
    <ol className="list-decimal list-inside space-y-3 text-amber-700 dark:text-amber-300">
      <li><strong>Warm-up (10-15 min):</strong> Easy swimming, mixed styles, light drills.</li>
      <li><strong>Main set (20-40 min):</strong> Endurance sets, intervals, or distance training.</li>
      <li><strong>Cool-down (5-10 min):</strong> Easy swimming, stretching in water.</li>
    </ol>
  </div>

  <h3 className="text-2xl font-bold mt-8 mb-4">Interval Training</h3>

  <div className="bg-green-50 dark:bg-green-900/40 p-6 rounded-xl border-2 border-green-200 dark:border-green-800">
    <h3 className="font-bold text-green-800 dark:text-green-200 mb-3 text-xl">Example Intervals for Beginners</h3>
    <ul className="list-disc list-inside space-y-2 text-green-700 dark:text-green-300">
      <li><strong>4 x 50m:</strong> Moderate intensity, 20 seconds rest between repeats.</li>
      <li><strong>2 x 100m:</strong> Steady pace, 30 seconds rest.</li>
      <li><strong>8 x 25m:</strong> Alternating fast and slow.</li>
    </ul>
    <h3 className="font-bold text-green-800 dark:text-green-200 mb-3 mt-4 text-xl">Example Intervals for Advanced</h3>
    <ul className="list-disc list-inside space-y-2 text-green-700 dark:text-green-300">
      <li><strong>10 x 100m:</strong> On interval (e.g., every 1:45), steady pace.</li>
      <li><strong>5 x 200m:</strong> Moderate intensity, 20 seconds rest.</li>
      <li><strong>Pyramid:</strong> 100-200-300-400-300-200-100m with short rests.</li>
    </ul>
  </div>

  <h3 className="text-2xl font-bold mt-8 mb-4">Progression</h3>

  <div className="bg-blue-50 dark:bg-blue-900/40 p-6 rounded-xl border-2 border-blue-200 dark:border-blue-800">
    <h3 className="font-bold text-blue-800 dark:text-blue-200 mb-3 text-xl">8-Week Plan for Beginners</h3>
    <table className="w-full border-collapse mt-3">
      <thead>
        <tr className="bg-blue-100 dark:bg-blue-800/60">
          <th className="border border-blue-200 dark:border-blue-700 p-2 text-left text-blue-800 dark:text-blue-200">Week</th>
          <th className="border border-blue-200 dark:border-blue-700 p-2 text-left text-blue-800 dark:text-blue-200">Total Distance</th>
          <th className="border border-blue-200 dark:border-blue-700 p-2 text-left text-blue-800 dark:text-blue-200">Longest Continuous</th>
        </tr>
      </thead>
      <tbody className="text-blue-700 dark:text-blue-300">
        <tr><td className="border border-blue-200 dark:border-blue-700 p-2">1-2</td><td className="border border-blue-200 dark:border-blue-700 p-2">500-800m</td><td className="border border-blue-200 dark:border-blue-700 p-2">50m non-stop</td></tr>
        <tr><td className="border border-blue-200 dark:border-blue-700 p-2">3-4</td><td className="border border-blue-200 dark:border-blue-700 p-2">800-1200m</td><td className="border border-blue-200 dark:border-blue-700 p-2">100m non-stop</td></tr>
        <tr><td className="border border-blue-200 dark:border-blue-700 p-2">5-6</td><td className="border border-blue-200 dark:border-blue-700 p-2">1200-1600m</td><td className="border border-blue-200 dark:border-blue-700 p-2">200m non-stop</td></tr>
        <tr><td className="border border-blue-200 dark:border-blue-700 p-2">7-8</td><td className="border border-blue-200 dark:border-blue-700 p-2">1600-2000m</td><td className="border border-blue-200 dark:border-blue-700 p-2">400m non-stop</td></tr>
      </tbody>
    </table>
  </div>

  <div className="bg-red-50 dark:bg-red-900/40 p-6 rounded-xl border-2 border-red-200 dark:border-red-800 mt-4">
    <h3 className="font-bold text-red-800 dark:text-red-200 mb-3 text-xl">Warning Signs of Overtraining</h3>
    <ul className="list-disc list-inside space-y-2 text-red-700 dark:text-red-300">
      <li>Persistent fatigue even after rest days</li>
      <li>Pain in shoulders, knees, or back</li>
      <li>Declining performance despite more training</li>
      <li>Sleep problems or loss of appetite</li>
    </ul>
  </div>

  <div className="bg-green-50 dark:bg-green-900/40 p-6 rounded-xl border-2 border-green-200 dark:border-green-800 mt-8">
    <h3 className="font-bold text-green-800 dark:text-green-200 mb-4 text-xl">Exercises</h3>
    <ol className="list-decimal list-inside space-y-3 text-green-700 dark:text-green-300">
      <li><strong>Baseline test:</strong> Swim as far as possible non-stop. Record the distance as your starting point.</li>
      <li><strong>Interval training:</strong> Swim 8 x 50m with 15 seconds rest. Maintain a steady pace.</li>
      <li><strong>Distance swimming:</strong> Swim for 20 minutes non-stop at moderate pace.</li>
    </ol>
  </div>
</div>
    `
  },
  task: {
    de: {
      title: "Ausdauer aufbauen",
      description: "Starte mit einem strukturierten Ausdauertraining.",
      checklist: [
        { text: "Mache einen Basis-Test: Schwimme so weit wie möglich am Stück", checked: false },
        { text: "Absolviere ein Intervalltraining: 8 x 50m mit 15s Pause", checked: false },
        { text: "Schwimme 20 Minuten ohne Pause in moderatem Tempo", checked: false },
        { text: "Erstelle einen Wochenplan mit 3 Trainingseinheiten", checked: false }
      ]
    },
    en: {
      title: "Build Endurance",
      description: "Start with a structured endurance training program.",
      checklist: [
        { text: "Do a baseline test: swim as far as possible non-stop", checked: false },
        { text: "Complete an interval workout: 8 x 50m with 15s rest", checked: false },
        { text: "Swim 20 minutes non-stop at moderate pace", checked: false },
        { text: "Create a weekly plan with 3 training sessions", checked: false }
      ]
    }
  },
  quiz: {
    de: [
      {
        question: "Um wie viel Prozent sollte das Trainingsvolumen maximal pro Woche gesteigert werden?",
        answer: "Maximal 10% pro Woche, um Übertraining und Verletzungen zu vermeiden."
      },
      {
        question: "Was sind die drei Teile einer Trainingseinheit?",
        answer: "Warm-up (10-15 Min), Hauptteil (20-40 Min) und Cool-down (5-10 Min)."
      },
      {
        question: "Was ist wichtiger: Technik oder Strecke?",
        answer: "Technik ist immer wichtiger als Strecke. Man sollte nie die Technik für mehr Distanz opfern, da schlechte Technik zu Verletzungen und Ineffizienz führt."
      }
    ],
    en: [
      {
        question: "By what maximum percentage should training volume increase per week?",
        answer: "Maximum 10% per week to avoid overtraining and injuries."
      },
      {
        question: "What are the three parts of a training session?",
        answer: "Warm-up (10-15 min), main set (20-40 min), and cool-down (5-10 min)."
      },
      {
        question: "What is more important: technique or distance?",
        answer: "Technique is always more important than distance. Never sacrifice technique for more distance, as poor technique leads to injuries and inefficiency."
      }
    ]
  }
};
