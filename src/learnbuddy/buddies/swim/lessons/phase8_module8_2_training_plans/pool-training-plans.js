export const poolTrainingPlans = {
  title: {
    de: "Pool-Trainingspläne - Strukturierte Workouts",
    en: "Pool Training Plans - Structured Workouts"
  },
  description: {
    de: "Strukturierte Trainingsbeispiele für Anfänger, Fortgeschrittene und Profis: Intervalle, Pyramiden-Sets und periodisierte Pläne.",
    en: "Structured workout examples for beginner, intermediate, and advanced: intervals, pyramid sets, and periodized plans."
  },
  content: {
    de: `
<div className="space-y-6">
  <h2 className="text-3xl font-bold text-blue-800 dark:text-blue-200 mb-4">Pool-Trainingspläne</h2>

  <p className="text-lg leading-relaxed">
    Ein strukturiertes Training ist der Schlüssel zum Fortschritt. Einfach nur Bahnen zu schwimmen 
    bringt zwar Grundfitness, aber ohne Plan verbesserst du weder Technik noch Geschwindigkeit 
    effektiv. Hier findest du Trainingspläne für jedes Level mit Erklärungen zu den wichtigsten 
    Trainingskonzepten.
  </p>

  <div className="bg-amber-50 dark:bg-amber-900/40 p-6 rounded-xl border-2 border-amber-200 dark:border-amber-800">
    <h3 className="font-bold text-amber-800 dark:text-amber-200 mb-3 text-xl">Trainings-Grundbegriffe</h3>
    <ul className="list-disc list-inside space-y-2 text-amber-700 dark:text-amber-300">
      <li><strong>Intervall:</strong> Wiederholte Strecken mit definierter Pause (z.B. 4x100m mit 20s Pause).</li>
      <li><strong>Pyramide:</strong> Strecke steigt an und fällt wieder (z.B. 50-100-200-100-50m).</li>
      <li><strong>Leiter:</strong> Strecke wird nur in eine Richtung verändert (z.B. 50-100-150-200m).</li>
      <li><strong>Einschwimmen:</strong> 200-400m lockeres Schwimmen zum Aufwärmen.</li>
      <li><strong>Ausschwimmen:</strong> 100-200m lockeres Schwimmen zum Cool-Down.</li>
      <li><strong>Hauptserie:</strong> Der intensive Teil des Trainings.</li>
    </ul>
  </div>

  <h3 className="text-2xl font-bold mt-8 mb-4">Anfänger-Plan (30-45 Minuten, ~1000-1500m)</h3>

  <div className="bg-green-50 dark:bg-green-900/40 p-6 rounded-xl border-2 border-green-200 dark:border-green-800">
    <h4 className="font-bold text-green-800 dark:text-green-200 mb-3 text-lg">Workout A: Grundlagen</h4>
    <ol className="list-decimal list-inside space-y-2 text-green-700 dark:text-green-300">
      <li><strong>Einschwimmen:</strong> 200m locker (Mix aus Kraul und Brust)</li>
      <li><strong>Technik:</strong> 4x50m Drill nach Wahl (20s Pause)</li>
      <li><strong>Hauptserie:</strong> 6x50m Kraul mit 20s Pause (moderates Tempo)</li>
      <li><strong>Abwechslung:</strong> 4x25m Brust (15s Pause)</li>
      <li><strong>Ausschwimmen:</strong> 100m locker (beliebiger Stil)</li>
      <li><em>Gesamt: ~1000m</em></li>
    </ol>
  </div>

  <div className="bg-green-50 dark:bg-green-900/40 p-6 rounded-xl border-2 border-green-200 dark:border-green-800 mt-4">
    <h4 className="font-bold text-green-800 dark:text-green-200 mb-3 text-lg">Workout B: Ausdauer-Aufbau</h4>
    <ol className="list-decimal list-inside space-y-2 text-green-700 dark:text-green-300">
      <li><strong>Einschwimmen:</strong> 300m locker (alle 100m den Stil wechseln)</li>
      <li><strong>Pyramide:</strong> 25m - 50m - 75m - 100m - 75m - 50m - 25m Kraul (15s Pause)</li>
      <li><strong>Kick:</strong> 4x25m Kick mit Brett (15s Pause)</li>
      <li><strong>Ausschwimmen:</strong> 200m locker</li>
      <li><em>Gesamt: ~1200m</em></li>
    </ol>
  </div>

  <h3 className="text-2xl font-bold mt-8 mb-4">Fortgeschrittenen-Plan (45-60 Minuten, ~2000-2500m)</h3>

  <div className="bg-blue-50 dark:bg-blue-900/40 p-6 rounded-xl border-2 border-blue-200 dark:border-blue-800">
    <h4 className="font-bold text-blue-800 dark:text-blue-200 mb-3 text-lg">Workout C: Intervall-Training</h4>
    <ol className="list-decimal list-inside space-y-2 text-blue-700 dark:text-blue-300">
      <li><strong>Einschwimmen:</strong> 400m (200 locker, 100 Drill, 100 Kick)</li>
      <li><strong>Vorserie:</strong> 4x100m Kraul mit 15s Pause (moderates Tempo)</li>
      <li><strong>Hauptserie:</strong> 8x50m Kraul mit 15s Pause (schnelles Tempo)</li>
      <li><strong>Pyramide:</strong> 100-200-300-200-100m Kraul (20s Pause)</li>
      <li><strong>Beine:</strong> 4x50m Kick (20s Pause)</li>
      <li><strong>Ausschwimmen:</strong> 200m locker</li>
      <li><em>Gesamt: ~2500m</em></li>
    </ol>
  </div>

  <div className="bg-blue-50 dark:bg-blue-900/40 p-6 rounded-xl border-2 border-blue-200 dark:border-blue-800 mt-4">
    <h4 className="font-bold text-blue-800 dark:text-blue-200 mb-3 text-lg">Workout D: Lagen-Training</h4>
    <ol className="list-decimal list-inside space-y-2 text-blue-700 dark:text-blue-300">
      <li><strong>Einschwimmen:</strong> 400m (je 100m jede Lage: Delfin, Rücken, Brust, Kraul)</li>
      <li><strong>Technik:</strong> 4x50m Drill (je 1 pro Lage, 20s Pause)</li>
      <li><strong>Hauptserie:</strong> 4x(100m Lagen) mit 30s Pause</li>
      <li><strong>Sprint:</strong> 8x25m Sprint (abwechselnd Lagen, 20s Pause)</li>
      <li><strong>Ausschwimmen:</strong> 200m locker</li>
      <li><em>Gesamt: ~2000m</em></li>
    </ol>
  </div>

  <h3 className="text-2xl font-bold mt-8 mb-4">Fortgeschrittenen-Plan (60-75 Minuten, ~3000-4000m)</h3>

  <div className="bg-red-50 dark:bg-red-900/40 p-6 rounded-xl border-2 border-red-200 dark:border-red-800">
    <h4 className="font-bold text-red-800 dark:text-red-200 mb-3 text-lg">Workout E: Leistungs-Training</h4>
    <ol className="list-decimal list-inside space-y-2 text-red-700 dark:text-red-300">
      <li><strong>Einschwimmen:</strong> 600m (200 locker, 200 Drill, 200 Kick)</li>
      <li><strong>Vorserie:</strong> 4x200m Kraul Negativ-Split mit 20s Pause</li>
      <li><strong>Hauptserie 1:</strong> 10x100m Kraul mit 10s Pause (Wettkampftempo)</li>
      <li><strong>Hauptserie 2:</strong> Absteigend 400-300-200-100m (30s Pause, jede Strecke schneller)</li>
      <li><strong>Sprint:</strong> 6x50m All-Out Sprint (40s Pause)</li>
      <li><strong>Ausschwimmen:</strong> 400m locker</li>
      <li><em>Gesamt: ~4000m</em></li>
    </ol>
  </div>

  <div className="bg-amber-50 dark:bg-amber-900/40 p-6 rounded-xl border-2 border-amber-200 dark:border-amber-800 mt-8">
    <h3 className="font-bold text-amber-800 dark:text-amber-200 mb-3 text-xl">Wochenplanung</h3>
    <p className="text-amber-700 dark:text-amber-300 mb-3">Eine ausgewogene Trainingswoche könnte so aussehen:</p>
    <table className="w-full border-collapse mt-3">
      <thead>
        <tr className="bg-amber-100 dark:bg-amber-800/60">
          <th className="border border-amber-200 dark:border-amber-700 p-2 text-left text-amber-800 dark:text-amber-200">Tag</th>
          <th className="border border-amber-200 dark:border-amber-700 p-2 text-left text-amber-800 dark:text-amber-200">Fokus</th>
        </tr>
      </thead>
      <tbody className="text-amber-700 dark:text-amber-300">
        <tr><td className="border border-amber-200 dark:border-amber-700 p-2">Montag</td><td className="border border-amber-200 dark:border-amber-700 p-2">Technik & Drills</td></tr>
        <tr><td className="border border-amber-200 dark:border-amber-700 p-2">Mittwoch</td><td className="border border-amber-200 dark:border-amber-700 p-2">Intervall / Geschwindigkeit</td></tr>
        <tr><td className="border border-amber-200 dark:border-amber-700 p-2">Freitag</td><td className="border border-amber-200 dark:border-amber-700 p-2">Ausdauer / Lange Serien</td></tr>
        <tr><td className="border border-amber-200 dark:border-amber-700 p-2">Samstag</td><td className="border border-amber-200 dark:border-amber-700 p-2">Lagen / Abwechslung</td></tr>
      </tbody>
    </table>
  </div>

  <div className="bg-green-50 dark:bg-green-900/40 p-6 rounded-xl border-2 border-green-200 dark:border-green-800 mt-8">
    <h3 className="font-bold text-green-800 dark:text-green-200 mb-4 text-xl">Praktische Übungen</h3>
    <ol className="list-decimal list-inside space-y-3 text-green-700 dark:text-green-300">
      <li><strong>Plan testen:</strong> Wähle den Plan für dein Level und absolviere ihn diese Woche.</li>
      <li><strong>Zeiten notieren:</strong> Schreibe deine Zeiten für die Hauptserie auf, um Fortschritte zu messen.</li>
      <li><strong>Wochenplan erstellen:</strong> Plane deine Schwimmwoche mit verschiedenen Fokus-Themen.</li>
    </ol>
  </div>
</div>
    `,
    en: `
<div className="space-y-6">
  <h2 className="text-3xl font-bold text-blue-800 dark:text-blue-200 mb-4">Pool Training Plans</h2>

  <p className="text-lg leading-relaxed">
    Structured training is the key to progress. Simply swimming laps builds basic fitness, but 
    without a plan you won't effectively improve technique or speed. Here you'll find training 
    plans for every level with explanations of the most important training concepts.
  </p>

  <div className="bg-amber-50 dark:bg-amber-900/40 p-6 rounded-xl border-2 border-amber-200 dark:border-amber-800">
    <h3 className="font-bold text-amber-800 dark:text-amber-200 mb-3 text-xl">Training Terminology</h3>
    <ul className="list-disc list-inside space-y-2 text-amber-700 dark:text-amber-300">
      <li><strong>Interval:</strong> Repeated distances with defined rest (e.g. 4x100m with 20s rest).</li>
      <li><strong>Pyramid:</strong> Distance increases then decreases (e.g. 50-100-200-100-50m).</li>
      <li><strong>Ladder:</strong> Distance changes in one direction only (e.g. 50-100-150-200m).</li>
      <li><strong>Warm-up:</strong> 200-400m easy swimming to warm up.</li>
      <li><strong>Cool-down:</strong> 100-200m easy swimming to cool down.</li>
      <li><strong>Main set:</strong> The intense part of the workout.</li>
    </ul>
  </div>

  <h3 className="text-2xl font-bold mt-8 mb-4">Beginner Plan (30-45 Minutes, ~1000-1500m)</h3>

  <div className="bg-green-50 dark:bg-green-900/40 p-6 rounded-xl border-2 border-green-200 dark:border-green-800">
    <h4 className="font-bold text-green-800 dark:text-green-200 mb-3 text-lg">Workout A: Fundamentals</h4>
    <ol className="list-decimal list-inside space-y-2 text-green-700 dark:text-green-300">
      <li><strong>Warm-up:</strong> 200m easy (mix of freestyle and breaststroke)</li>
      <li><strong>Technique:</strong> 4x50m drill of choice (20s rest)</li>
      <li><strong>Main set:</strong> 6x50m freestyle with 20s rest (moderate pace)</li>
      <li><strong>Variety:</strong> 4x25m breaststroke (15s rest)</li>
      <li><strong>Cool-down:</strong> 100m easy (any stroke)</li>
      <li><em>Total: ~1000m</em></li>
    </ol>
  </div>

  <div className="bg-green-50 dark:bg-green-900/40 p-6 rounded-xl border-2 border-green-200 dark:border-green-800 mt-4">
    <h4 className="font-bold text-green-800 dark:text-green-200 mb-3 text-lg">Workout B: Endurance Builder</h4>
    <ol className="list-decimal list-inside space-y-2 text-green-700 dark:text-green-300">
      <li><strong>Warm-up:</strong> 300m easy (change stroke every 100m)</li>
      <li><strong>Pyramid:</strong> 25m - 50m - 75m - 100m - 75m - 50m - 25m freestyle (15s rest)</li>
      <li><strong>Kick:</strong> 4x25m kick with board (15s rest)</li>
      <li><strong>Cool-down:</strong> 200m easy</li>
      <li><em>Total: ~1200m</em></li>
    </ol>
  </div>

  <h3 className="text-2xl font-bold mt-8 mb-4">Intermediate Plan (45-60 Minutes, ~2000-2500m)</h3>

  <div className="bg-blue-50 dark:bg-blue-900/40 p-6 rounded-xl border-2 border-blue-200 dark:border-blue-800">
    <h4 className="font-bold text-blue-800 dark:text-blue-200 mb-3 text-lg">Workout C: Interval Training</h4>
    <ol className="list-decimal list-inside space-y-2 text-blue-700 dark:text-blue-300">
      <li><strong>Warm-up:</strong> 400m (200 easy, 100 drill, 100 kick)</li>
      <li><strong>Pre-set:</strong> 4x100m freestyle with 15s rest (moderate pace)</li>
      <li><strong>Main set:</strong> 8x50m freestyle with 15s rest (fast pace)</li>
      <li><strong>Pyramid:</strong> 100-200-300-200-100m freestyle (20s rest)</li>
      <li><strong>Legs:</strong> 4x50m kick (20s rest)</li>
      <li><strong>Cool-down:</strong> 200m easy</li>
      <li><em>Total: ~2500m</em></li>
    </ol>
  </div>

  <div className="bg-blue-50 dark:bg-blue-900/40 p-6 rounded-xl border-2 border-blue-200 dark:border-blue-800 mt-4">
    <h4 className="font-bold text-blue-800 dark:text-blue-200 mb-3 text-lg">Workout D: IM Training</h4>
    <ol className="list-decimal list-inside space-y-2 text-blue-700 dark:text-blue-300">
      <li><strong>Warm-up:</strong> 400m (100m each stroke: butterfly, backstroke, breaststroke, freestyle)</li>
      <li><strong>Technique:</strong> 4x50m drill (1 per stroke, 20s rest)</li>
      <li><strong>Main set:</strong> 4x(100m IM) with 30s rest</li>
      <li><strong>Sprint:</strong> 8x25m sprint (alternating strokes, 20s rest)</li>
      <li><strong>Cool-down:</strong> 200m easy</li>
      <li><em>Total: ~2000m</em></li>
    </ol>
  </div>

  <h3 className="text-2xl font-bold mt-8 mb-4">Advanced Plan (60-75 Minutes, ~3000-4000m)</h3>

  <div className="bg-red-50 dark:bg-red-900/40 p-6 rounded-xl border-2 border-red-200 dark:border-red-800">
    <h4 className="font-bold text-red-800 dark:text-red-200 mb-3 text-lg">Workout E: Performance Training</h4>
    <ol className="list-decimal list-inside space-y-2 text-red-700 dark:text-red-300">
      <li><strong>Warm-up:</strong> 600m (200 easy, 200 drill, 200 kick)</li>
      <li><strong>Pre-set:</strong> 4x200m freestyle negative split with 20s rest</li>
      <li><strong>Main set 1:</strong> 10x100m freestyle with 10s rest (race pace)</li>
      <li><strong>Main set 2:</strong> Descending 400-300-200-100m (30s rest, each distance faster)</li>
      <li><strong>Sprint:</strong> 6x50m all-out sprint (40s rest)</li>
      <li><strong>Cool-down:</strong> 400m easy</li>
      <li><em>Total: ~4000m</em></li>
    </ol>
  </div>

  <div className="bg-amber-50 dark:bg-amber-900/40 p-6 rounded-xl border-2 border-amber-200 dark:border-amber-800 mt-8">
    <h3 className="font-bold text-amber-800 dark:text-amber-200 mb-3 text-xl">Weekly Planning</h3>
    <p className="text-amber-700 dark:text-amber-300 mb-3">A balanced training week could look like this:</p>
    <table className="w-full border-collapse mt-3">
      <thead>
        <tr className="bg-amber-100 dark:bg-amber-800/60">
          <th className="border border-amber-200 dark:border-amber-700 p-2 text-left text-amber-800 dark:text-amber-200">Day</th>
          <th className="border border-amber-200 dark:border-amber-700 p-2 text-left text-amber-800 dark:text-amber-200">Focus</th>
        </tr>
      </thead>
      <tbody className="text-amber-700 dark:text-amber-300">
        <tr><td className="border border-amber-200 dark:border-amber-700 p-2">Monday</td><td className="border border-amber-200 dark:border-amber-700 p-2">Technique & Drills</td></tr>
        <tr><td className="border border-amber-200 dark:border-amber-700 p-2">Wednesday</td><td className="border border-amber-200 dark:border-amber-700 p-2">Intervals / Speed</td></tr>
        <tr><td className="border border-amber-200 dark:border-amber-700 p-2">Friday</td><td className="border border-amber-200 dark:border-amber-700 p-2">Endurance / Long sets</td></tr>
        <tr><td className="border border-amber-200 dark:border-amber-700 p-2">Saturday</td><td className="border border-amber-200 dark:border-amber-700 p-2">IM / Variety</td></tr>
      </tbody>
    </table>
  </div>

  <div className="bg-green-50 dark:bg-green-900/40 p-6 rounded-xl border-2 border-green-200 dark:border-green-800 mt-8">
    <h3 className="font-bold text-green-800 dark:text-green-200 mb-4 text-xl">Practice Exercises</h3>
    <ol className="list-decimal list-inside space-y-3 text-green-700 dark:text-green-300">
      <li><strong>Test the plan:</strong> Choose the plan for your level and complete it this week.</li>
      <li><strong>Log times:</strong> Write down your times for the main set to track progress.</li>
      <li><strong>Create weekly plan:</strong> Plan your swim week with different focus themes.</li>
    </ol>
  </div>
</div>
    `
  },
  task: {
    de: {
      title: "Trainingsplan starten",
      description: "Wähle und absolviere einen strukturierten Trainingsplan.",
      checklist: [
        { text: "Wähle den passenden Plan für dein Level (Anfänger/Fortgeschritten/Profi)", checked: false },
        { text: "Absolviere mindestens 2 Workouts aus deinem Plan diese Woche", checked: false },
        { text: "Notiere deine Zeiten und Pausenzeiten", checked: false },
        { text: "Erstelle einen Wochenplan mit verschiedenen Fokus-Themen", checked: false }
      ]
    },
    en: {
      title: "Start Training Plan",
      description: "Choose and complete a structured training plan.",
      checklist: [
        { text: "Choose the right plan for your level (beginner/intermediate/advanced)", checked: false },
        { text: "Complete at least 2 workouts from your plan this week", checked: false },
        { text: "Log your times and rest periods", checked: false },
        { text: "Create a weekly plan with different focus themes", checked: false }
      ]
    }
  },
  quiz: {
    de: [
      { question: "Was ist der Unterschied zwischen einer Pyramide und einer Leiter?", answer: "Bei einer Pyramide steigt die Strecke an und fällt wieder (z.B. 50-100-200-100-50m), bei einer Leiter wird sie nur in eine Richtung verändert (z.B. 50-100-150-200m)." },
      { question: "Wie viel Meter sollte ein Anfänger-Training umfassen?", answer: "Ein Anfänger-Training umfasst etwa 1000-1500m in 30-45 Minuten, inklusive Einschwimmen, Drills, einer moderaten Hauptserie und Ausschwimmen." },
      { question: "Was bedeutet Negativ-Split?", answer: "Negativ-Split bedeutet, dass die zweite Hälfte einer Strecke schneller geschwommen wird als die erste. Beispiel: Bei 200m wird die zweiten 100m schneller geschwommen als die ersten 100m." }
    ],
    en: [
      { question: "What's the difference between a pyramid and a ladder?", answer: "In a pyramid, the distance increases then decreases (e.g. 50-100-200-100-50m), while a ladder changes in one direction only (e.g. 50-100-150-200m)." },
      { question: "How many meters should a beginner workout cover?", answer: "A beginner workout covers about 1000-1500m in 30-45 minutes, including warm-up, drills, a moderate main set, and cool-down." },
      { question: "What does negative split mean?", answer: "Negative split means swimming the second half of a distance faster than the first. Example: In a 200m, the second 100m is swum faster than the first 100m." }
    ]
  }
};
