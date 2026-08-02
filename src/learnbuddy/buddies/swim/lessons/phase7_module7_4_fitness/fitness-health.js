export const fitnessHealth = {
  title: {
    de: "Schwimmen für Fitness & Gesundheit",
    en: "Swimming for Fitness & Health"
  },
  description: {
    de: "Nutze Schwimmen als Fitness-Tool: Kalorienverbrennung, Aqua-Fitness, Rehabilitation und Wellness.",
    en: "Use swimming as a fitness tool: calorie burning, aqua fitness, rehabilitation, and wellness."
  },
  content: {
    de: `
<div className="space-y-6">
  <h2 className="text-3xl font-bold text-blue-800 dark:text-blue-200 mb-4">Schwimmen für Fitness & Gesundheit</h2>

  <p className="text-lg leading-relaxed">
    Schwimmen ist eines der besten Ganzkörper-Workouts überhaupt. Es verbrennt Kalorien, 
    baut Muskeln auf, verbessert die kardiovaskuläre Fitness und ist dabei gelenkschonend. 
    Ob als Hauptsport oder als Ergänzung - Schwimmen macht fit und hält gesund.
  </p>

  <div className="bg-blue-50 dark:bg-blue-900/40 p-6 rounded-xl border-2 border-blue-200 dark:border-blue-800">
    <h3 className="font-bold text-blue-800 dark:text-blue-200 mb-3 text-xl">Kalorienverbrauch pro 30 Minuten</h3>
    <table className="w-full border-collapse mt-3">
      <thead>
        <tr className="bg-blue-100 dark:bg-blue-800/60">
          <th className="border border-blue-200 dark:border-blue-700 p-2 text-left text-blue-800 dark:text-blue-200">Stil</th>
          <th className="border border-blue-200 dark:border-blue-700 p-2 text-left text-blue-800 dark:text-blue-200">Kalorien (70kg)</th>
        </tr>
      </thead>
      <tbody className="text-blue-700 dark:text-blue-300">
        <tr><td className="border border-blue-200 dark:border-blue-700 p-2">Kraul (moderat)</td><td className="border border-blue-200 dark:border-blue-700 p-2">~250 kcal</td></tr>
        <tr><td className="border border-blue-200 dark:border-blue-700 p-2">Brust (moderat)</td><td className="border border-blue-200 dark:border-blue-700 p-2">~200 kcal</td></tr>
        <tr><td className="border border-blue-200 dark:border-blue-700 p-2">Rücken</td><td className="border border-blue-200 dark:border-blue-700 p-2">~220 kcal</td></tr>
        <tr><td className="border border-blue-200 dark:border-blue-700 p-2">Delfin</td><td className="border border-blue-200 dark:border-blue-700 p-2">~300 kcal</td></tr>
      </tbody>
    </table>
  </div>

  <h3 className="text-2xl font-bold mt-8 mb-4">Fitness-Workouts im Wasser</h3>

  <div className="bg-green-50 dark:bg-green-900/40 p-6 rounded-xl border-2 border-green-200 dark:border-green-800">
    <h3 className="font-bold text-green-800 dark:text-green-200 mb-3 text-xl">30-Minuten Fitness-Workout</h3>
    <ol className="list-decimal list-inside space-y-2 text-green-700 dark:text-green-300">
      <li>5 Min: Lockeres Einschwimmen (gemischte Stile)</li>
      <li>4 x 50m: Kraul mit 15s Pause (moderate Intensität)</li>
      <li>4 x 25m: Sprint (maximale Intensität, 30s Pause)</li>
      <li>4 x 50m: Wechsel zwischen Brust und Rücken (20s Pause)</li>
      <li>2 x 100m: Kraul in moderatem Tempo (30s Pause)</li>
      <li>5 Min: Lockeres Ausschwimmen</li>
    </ol>
  </div>

  <h3 className="text-2xl font-bold mt-8 mb-4">Rehabilitation & Therapie</h3>

  <div className="bg-amber-50 dark:bg-amber-900/40 p-6 rounded-xl border-2 border-amber-200 dark:border-amber-800">
    <ul className="list-disc list-inside space-y-2 text-amber-700 dark:text-amber-300">
      <li><strong>Gelenkschonung:</strong> Im Wasser trägst du nur 10% deines Körpergewichts.</li>
      <li><strong>Nach Verletzungen:</strong> Schwimmen eignet sich hervorragend für die Rehabilitation.</li>
      <li><strong>Rückenschmerzen:</strong> Rückenschwimmen stärkt die Rückenmuskulatur und entlastet die Wirbelsäule.</li>
      <li><strong>Arthritis:</strong> Warmes Wasser und sanfte Bewegung lindern Gelenkschmerzen.</li>
      <li><strong>Mental Health:</strong> Schwimmen reduziert Stress, Angst und Depressionen.</li>
    </ul>
  </div>

  <h3 className="text-2xl font-bold mt-8 mb-4">Aqua-Fitness</h3>

  <div className="bg-blue-50 dark:bg-blue-900/40 p-6 rounded-xl border-2 border-blue-200 dark:border-blue-800">
    <ul className="list-disc list-inside space-y-2 text-blue-700 dark:text-blue-300">
      <li><strong>Aqua-Jogging:</strong> Laufen im tiefen Wasser mit Schwimmgürtel. Intensives Cardio ohne Gelenkbelastung.</li>
      <li><strong>Wasser-Aerobic:</strong> Gymnastik-Übungen im Wasser gegen den Widerstand.</li>
      <li><strong>Aqua-HIIT:</strong> Hochintensive Intervalle im Wasser - Sprints, Jumps, Kicks.</li>
      <li><strong>Wasser-Yoga:</strong> Yoga-Posen im flachen Wasser für Balance und Flexibilität.</li>
    </ul>
  </div>

  <div className="bg-green-50 dark:bg-green-900/40 p-6 rounded-xl border-2 border-green-200 dark:border-green-800 mt-8">
    <h3 className="font-bold text-green-800 dark:text-green-200 mb-4 text-xl">Übungen</h3>
    <ol className="list-decimal list-inside space-y-3 text-green-700 dark:text-green-300">
      <li><strong>30-Min-Workout:</strong> Absolviere das oben beschriebene 30-Minuten Fitness-Workout.</li>
      <li><strong>Aqua-Jogging:</strong> Probiere 10 Minuten Aqua-Jogging im tiefen Wasser.</li>
      <li><strong>Kalorienzähler:</strong> Notiere dein Training und schätze den Kalorienverbrauch.</li>
    </ol>
  </div>
</div>
    `,
    en: `
<div className="space-y-6">
  <h2 className="text-3xl font-bold text-blue-800 dark:text-blue-200 mb-4">Swimming for Fitness & Health</h2>

  <p className="text-lg leading-relaxed">
    Swimming is one of the best full-body workouts there is. It burns calories, builds muscle, 
    improves cardiovascular fitness, and is gentle on joints. Whether as a main sport or supplement 
    - swimming keeps you fit and healthy.
  </p>

  <div className="bg-blue-50 dark:bg-blue-900/40 p-6 rounded-xl border-2 border-blue-200 dark:border-blue-800">
    <h3 className="font-bold text-blue-800 dark:text-blue-200 mb-3 text-xl">Calories Burned per 30 Minutes</h3>
    <table className="w-full border-collapse mt-3">
      <thead>
        <tr className="bg-blue-100 dark:bg-blue-800/60">
          <th className="border border-blue-200 dark:border-blue-700 p-2 text-left text-blue-800 dark:text-blue-200">Style</th>
          <th className="border border-blue-200 dark:border-blue-700 p-2 text-left text-blue-800 dark:text-blue-200">Calories (70kg/154lbs)</th>
        </tr>
      </thead>
      <tbody className="text-blue-700 dark:text-blue-300">
        <tr><td className="border border-blue-200 dark:border-blue-700 p-2">Freestyle (moderate)</td><td className="border border-blue-200 dark:border-blue-700 p-2">~250 kcal</td></tr>
        <tr><td className="border border-blue-200 dark:border-blue-700 p-2">Breaststroke (moderate)</td><td className="border border-blue-200 dark:border-blue-700 p-2">~200 kcal</td></tr>
        <tr><td className="border border-blue-200 dark:border-blue-700 p-2">Backstroke</td><td className="border border-blue-200 dark:border-blue-700 p-2">~220 kcal</td></tr>
        <tr><td className="border border-blue-200 dark:border-blue-700 p-2">Butterfly</td><td className="border border-blue-200 dark:border-blue-700 p-2">~300 kcal</td></tr>
      </tbody>
    </table>
  </div>

  <h3 className="text-2xl font-bold mt-8 mb-4">Water Fitness Workouts</h3>

  <div className="bg-green-50 dark:bg-green-900/40 p-6 rounded-xl border-2 border-green-200 dark:border-green-800">
    <h3 className="font-bold text-green-800 dark:text-green-200 mb-3 text-xl">30-Minute Fitness Workout</h3>
    <ol className="list-decimal list-inside space-y-2 text-green-700 dark:text-green-300">
      <li>5 min: Easy warm-up (mixed styles)</li>
      <li>4 x 50m: Freestyle with 15s rest (moderate intensity)</li>
      <li>4 x 25m: Sprint (maximum intensity, 30s rest)</li>
      <li>4 x 50m: Alternating breaststroke and backstroke (20s rest)</li>
      <li>2 x 100m: Freestyle at moderate pace (30s rest)</li>
      <li>5 min: Easy cool-down</li>
    </ol>
  </div>

  <h3 className="text-2xl font-bold mt-8 mb-4">Rehabilitation & Therapy</h3>

  <div className="bg-amber-50 dark:bg-amber-900/40 p-6 rounded-xl border-2 border-amber-200 dark:border-amber-800">
    <ul className="list-disc list-inside space-y-2 text-amber-700 dark:text-amber-300">
      <li><strong>Joint-friendly:</strong> In water, you carry only 10% of your body weight.</li>
      <li><strong>After injuries:</strong> Swimming is excellent for rehabilitation.</li>
      <li><strong>Back pain:</strong> Backstroke strengthens back muscles and relieves the spine.</li>
      <li><strong>Arthritis:</strong> Warm water and gentle movement relieve joint pain.</li>
      <li><strong>Mental health:</strong> Swimming reduces stress, anxiety, and depression.</li>
    </ul>
  </div>

  <h3 className="text-2xl font-bold mt-8 mb-4">Aqua Fitness</h3>

  <div className="bg-blue-50 dark:bg-blue-900/40 p-6 rounded-xl border-2 border-blue-200 dark:border-blue-800">
    <ul className="list-disc list-inside space-y-2 text-blue-700 dark:text-blue-300">
      <li><strong>Aqua jogging:</strong> Running in deep water with a flotation belt. Intense cardio without joint stress.</li>
      <li><strong>Water aerobics:</strong> Exercise movements in water against resistance.</li>
      <li><strong>Aqua HIIT:</strong> High-intensity intervals in water - sprints, jumps, kicks.</li>
      <li><strong>Water yoga:</strong> Yoga poses in shallow water for balance and flexibility.</li>
    </ul>
  </div>

  <div className="bg-green-50 dark:bg-green-900/40 p-6 rounded-xl border-2 border-green-200 dark:border-green-800 mt-8">
    <h3 className="font-bold text-green-800 dark:text-green-200 mb-4 text-xl">Exercises</h3>
    <ol className="list-decimal list-inside space-y-3 text-green-700 dark:text-green-300">
      <li><strong>30-min workout:</strong> Complete the 30-minute fitness workout described above.</li>
      <li><strong>Aqua jogging:</strong> Try 10 minutes of aqua jogging in deep water.</li>
      <li><strong>Calorie tracker:</strong> Log your training and estimate calorie burn.</li>
    </ol>
  </div>
</div>
    `
  },
  task: {
    de: {
      title: "Fitness-Schwimmen starten",
      description: "Nutze Schwimmen als Fitness-Workout.",
      checklist: [
        { text: "Absolviere das 30-Minuten Fitness-Workout", checked: false },
        { text: "Probiere 10 Minuten Aqua-Jogging im tiefen Wasser", checked: false },
        { text: "Erstelle einen wöchentlichen Fitness-Schwimmplan (3x pro Woche)", checked: false },
        { text: "Tracke deinen Kalorienverbrauch für eine Woche", checked: false }
      ]
    },
    en: {
      title: "Start Fitness Swimming",
      description: "Use swimming as a fitness workout.",
      checklist: [
        { text: "Complete the 30-minute fitness workout", checked: false },
        { text: "Try 10 minutes of aqua jogging in deep water", checked: false },
        { text: "Create a weekly fitness swimming plan (3x per week)", checked: false },
        { text: "Track your calorie burn for one week", checked: false }
      ]
    }
  },
  quiz: {
    de: [
      { question: "Welcher Schwimmstil verbrennt die meisten Kalorien?", answer: "Delfin (Butterfly) verbrennt mit etwa 300 kcal pro 30 Minuten die meisten Kalorien, gefolgt von Kraul mit etwa 250 kcal." },
      { question: "Warum ist Schwimmen besonders gelenkschonend?", answer: "Im Wasser trägt man nur etwa 10% seines Körpergewichts dank des Auftriebs. Gelenke, Wirbelsäule und Bänder werden entlastet." },
      { question: "Was ist Aqua-Jogging?", answer: "Laufen im tiefen Wasser mit einem Schwimmgürtel. Es bietet intensives Cardio-Training ohne Gelenkbelastung." }
    ],
    en: [
      { question: "Which swimming style burns the most calories?", answer: "Butterfly burns the most at about 300 kcal per 30 minutes, followed by freestyle at about 250 kcal." },
      { question: "Why is swimming particularly joint-friendly?", answer: "In water, you carry only about 10% of your body weight thanks to buoyancy. Joints, spine, and ligaments are relieved." },
      { question: "What is aqua jogging?", answer: "Running in deep water with a flotation belt. It provides intense cardio training without joint stress." }
    ]
  }
};
