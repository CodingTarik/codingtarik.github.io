export const swimmingFitness = {
  title: {
    de: "Schwimm-Fitness - HIIT, Aqua-Jogging & Cross-Training",
    en: "Swimming Fitness - HIIT, Aqua Jogging & Cross-Training"
  },
  description: {
    de: "HIIT im Becken, Aqua-Jogging, Pool-Übungen und sinnvolle ergänzende Sportarten für Schwimmer.",
    en: "HIIT in the pool, aqua jogging, pool exercises, and complementary sports for swimmers."
  },
  content: {
    de: `
<div className="space-y-6">
  <h2 className="text-3xl font-bold text-blue-800 dark:text-blue-200 mb-4">Schwimm-Fitness</h2>

  <p className="text-lg leading-relaxed">
    Schwimmen ist mehr als Bahnen ziehen. Mit gezielten Fitness-Methoden im Wasser kannst du 
    Kraft, Ausdauer und athletische Fähigkeiten steigern - ohne die typischen Schwimmer-Bahnen. 
    HIIT im Pool, Aqua-Jogging, funktionale Übungen und Cross-Training ergänzen dein 
    Schwimmtraining optimal.
  </p>

  <h3 className="text-2xl font-bold mt-8 mb-4">HIIT im Pool</h3>

  <div className="bg-blue-50 dark:bg-blue-900/40 p-6 rounded-xl border-2 border-blue-200 dark:border-blue-800">
    <p className="text-blue-700 dark:text-blue-300 mb-3">
      Hochintensive Intervalle im Wasser maximieren den Trainingseffekt bei minimaler Zeit.
    </p>
    <h4 className="font-bold text-blue-800 dark:text-blue-200 mb-2">HIIT-Workout Beispiel (20 Min)</h4>
    <ol className="list-decimal list-inside space-y-2 text-blue-700 dark:text-blue-300">
      <li><strong>Warm-up:</strong> 200m locker schwimmen</li>
      <li><strong>Intervall 1:</strong> 8x25m All-Out Sprint (20s Pause) - 100% Einsatz</li>
      <li><strong>Intervall 2:</strong> 4x50m Sprint (30s Pause) - 90% Einsatz</li>
      <li><strong>Intervall 3:</strong> 2x100m schnell (60s Pause) - 85% Einsatz</li>
      <li><strong>Cool-down:</strong> 200m locker</li>
    </ol>
    <p className="text-blue-700 dark:text-blue-300 mt-3">
      <strong>Tabata-Variante:</strong> 20 Sekunden Sprint, 10 Sekunden Pause, 8 Runden. Mit Kick oder Ganzkörper.
    </p>
  </div>

  <h3 className="text-2xl font-bold mt-8 mb-4">Aqua-Jogging</h3>

  <div className="bg-green-50 dark:bg-green-900/40 p-6 rounded-xl border-2 border-green-200 dark:border-green-800">
    <p className="text-green-700 dark:text-green-300 mb-3">
      Laufen im tiefen Wasser mit Schwimmgürtel - intensives Cardio ohne Gelenkbelastung.
    </p>
    <ul className="list-disc list-inside space-y-2 text-green-700 dark:text-green-300">
      <li><strong>Ausrüstung:</strong> Schwimmgürtel (Floatation Belt) für Auftrieb. Optional: Aqua-Jogging-Schuhe für mehr Widerstand.</li>
      <li><strong>Technik:</strong> Aufrechter Oberkörper, Hände pumpen mit (wie beim Laufen). Knie hoch, Füße unter dem Körper.</li>
      <li><strong>Intensität:</strong> Kann genauso intensiv sein wie Land-Laufen. Herzfrequenz steigt stark.</li>
      <li><strong>Einsatz:</strong> Verletzungsprävention, Rehabilitation, Cross-Training, Abwechslung.</li>
      <li><strong>Workout:</strong> 30 Sekunden Sprint / 30 Sekunden locker, 10 Runden. Oder 20 Min. Dauerlauf im tiefen Wasser.</li>
    </ul>
  </div>

  <h3 className="text-2xl font-bold mt-8 mb-4">Pool-Übungen (ohne zu schwimmen)</h3>

  <div className="bg-amber-50 dark:bg-amber-900/40 p-6 rounded-xl border-2 border-amber-200 dark:border-amber-800">
    <table className="w-full border-collapse mt-3">
      <thead>
        <tr className="bg-amber-100 dark:bg-amber-800/60">
          <th className="border border-amber-200 dark:border-amber-700 p-2 text-left text-amber-800 dark:text-amber-200">Übung</th>
          <th className="border border-amber-200 dark:border-amber-700 p-2 text-left text-amber-800 dark:text-amber-200">Beschreibung</th>
          <th className="border border-amber-200 dark:border-amber-700 p-2 text-left text-amber-800 dark:text-amber-200">Fokus</th>
        </tr>
      </thead>
      <tbody className="text-amber-700 dark:text-amber-300">
        <tr><td className="border border-amber-200 dark:border-amber-700 p-2">Wasser-Jumps</td><td className="border border-amber-200 dark:border-amber-700 p-2">Im hüfttiefen Wasser springen, Knie zur Brust</td><td className="border border-amber-200 dark:border-amber-700 p-2">Beinkraft, Explosivität</td></tr>
        <tr><td className="border border-amber-200 dark:border-amber-700 p-2">Wasser-Walking</td><td className="border border-amber-200 dark:border-amber-700 p-2">Schnelles Gehen gegen Widerstand, Arme mitswingen</td><td className="border border-amber-200 dark:border-amber-700 p-2">Cardio, Ganzkörper</td></tr>
        <tr><td className="border border-amber-200 dark:border-amber-700 p-2">Sculling am Rand</td><td className="border border-amber-200 dark:border-amber-700 p-2">Handbewegungen für Wasser-Fühl am Beckenrand</td><td className="border border-amber-200 dark:border-amber-700 p-2">Armtechnik, Catch</td></tr>
        <tr><td className="border border-amber-200 dark:border-amber-700 p-2">Vertikaler Kick</td><td className="border border-amber-200 dark:border-amber-700 p-2">Senkrecht im tiefen Wasser kicken, Arme über Wasser</td><td className="border border-amber-200 dark:border-amber-700 p-2">Kern, Beinkraft</td></tr>
        <tr><td className="border border-amber-200 dark:border-amber-700 p-2">Wasser-Squats</td><td className="border border-amber-200 dark:border-amber-700 p-2">Kniebeugen im brusttiefen Wasser</td><td className="border border-amber-200 dark:border-amber-700 p-2">Beine, Po</td></tr>
      </tbody>
    </table>
  </div>

  <h3 className="text-2xl font-bold mt-8 mb-4">Cross-Training für Schwimmer</h3>

  <div className="bg-blue-50 dark:bg-blue-900/40 p-6 rounded-xl border-2 border-blue-200 dark:border-blue-800">
    <p className="text-blue-700 dark:text-blue-300 mb-3">
      Ergänzende Sportarten verbessern Schwächen und verhindern einseitige Belastung.
    </p>
    <ul className="list-disc list-inside space-y-2 text-blue-700 dark:text-blue-300">
      <li><strong>Laufen:</strong> Beinkraft, Grundlagenausdauer. Vorsicht bei intensivem Laufen - kann die Schultern entlasten, aber Überlastung vermeiden.</li>
      <li><strong>Radfahren:</strong> Beinkraft, Cardio. Keine Armbelastung - gut als Erholungstag.</li>
      <li><strong>Krafttraining:</strong> Rumpf, Rücken, Schultern. Latzug, Rudern, Core-Übungen. Verletzungsprävention.</li>
      <li><strong>Yoga/Pilates:</strong> Flexibilität, Mobilität, Atmung. Besonders wichtig für Schwimmer.</li>
      <li><strong>Rudern (Ergometer):</strong> Ähnliche Bewegungsmuster, Kraftausdauer. Gute Ergänzung.</li>
    </ul>
  </div>

  <div className="bg-green-50 dark:bg-green-900/40 p-6 rounded-xl border-2 border-green-200 dark:border-green-800 mt-8">
    <h3 className="font-bold text-green-800 dark:text-green-200 mb-4 text-xl">Praktische Übungen</h3>
    <ol className="list-decimal list-inside space-y-3 text-green-700 dark:text-green-300">
      <li><strong>HIIT-Session:</strong> Absolviere das 20-Minuten HIIT-Workout im Pool.</li>
      <li><strong>Aqua-Jogging:</strong> 15 Minuten Aqua-Jogging im tiefen Wasser mit Gürtel.</li>
      <li><strong>Pool-Circuit:</strong> 3 Runden: 2 Min Wasser-Walking, 1 Min Jumps, 1 Min vertikaler Kick.</li>
    </ol>
  </div>
</div>
    `,
    en: `
<div className="space-y-6">
  <h2 className="text-3xl font-bold text-blue-800 dark:text-blue-200 mb-4">Swimming Fitness</h2>

  <p className="text-lg leading-relaxed">
    Swimming is more than just lap swimming. With targeted fitness methods in the water you can 
    improve strength, endurance, and athletic abilities - without typical swimmer laps. Pool HIIT, 
    aqua jogging, functional exercises, and cross-training optimally complement your swim training.
  </p>

  <h3 className="text-2xl font-bold mt-8 mb-4">Pool HIIT</h3>

  <div className="bg-blue-50 dark:bg-blue-900/40 p-6 rounded-xl border-2 border-blue-200 dark:border-blue-800">
    <p className="text-blue-700 dark:text-blue-300 mb-3">
      High-intensity intervals in water maximize training effect with minimal time.
    </p>
    <h4 className="font-bold text-blue-800 dark:text-blue-200 mb-2">HIIT Workout Example (20 Min)</h4>
    <ol className="list-decimal list-inside space-y-2 text-blue-700 dark:text-blue-300">
      <li><strong>Warm-up:</strong> 200m easy swim</li>
      <li><strong>Interval 1:</strong> 8x25m all-out sprint (20s rest) - 100% effort</li>
      <li><strong>Interval 2:</strong> 4x50m sprint (30s rest) - 90% effort</li>
      <li><strong>Interval 3:</strong> 2x100m fast (60s rest) - 85% effort</li>
      <li><strong>Cool-down:</strong> 200m easy</li>
    </ol>
    <p className="text-blue-700 dark:text-blue-300 mt-3">
      <strong>Tabata variant:</strong> 20 seconds sprint, 10 seconds rest, 8 rounds. With kick or full body.
    </p>
  </div>

  <h3 className="text-2xl font-bold mt-8 mb-4">Aqua Jogging</h3>

  <div className="bg-green-50 dark:bg-green-900/40 p-6 rounded-xl border-2 border-green-200 dark:border-green-800">
    <p className="text-green-700 dark:text-green-300 mb-3">
      Running in deep water with flotation belt - intense cardio without joint stress.
    </p>
    <ul className="list-disc list-inside space-y-2 text-green-700 dark:text-green-300">
      <li><strong>Equipment:</strong> Flotation belt for buoyancy. Optional: aqua jogging shoes for more resistance.</li>
      <li><strong>Technique:</strong> Upright torso, arms pump with movement (like running). High knees, feet under body.</li>
      <li><strong>Intensity:</strong> Can be as intense as land running. Heart rate rises strongly.</li>
      <li><strong>Use:</strong> Injury prevention, rehabilitation, cross-training, variety.</li>
      <li><strong>Workout:</strong> 30 seconds sprint / 30 seconds easy, 10 rounds. Or 20 min steady run in deep water.</li>
    </ul>
  </div>

  <h3 className="text-2xl font-bold mt-8 mb-4">Pool Exercises (Without Swimming)</h3>

  <div className="bg-amber-50 dark:bg-amber-900/40 p-6 rounded-xl border-2 border-amber-200 dark:border-amber-800">
    <table className="w-full border-collapse mt-3">
      <thead>
        <tr className="bg-amber-100 dark:bg-amber-800/60">
          <th className="border border-amber-200 dark:border-amber-700 p-2 text-left text-amber-800 dark:text-amber-200">Exercise</th>
          <th className="border border-amber-200 dark:border-amber-700 p-2 text-left text-amber-800 dark:text-amber-200">Description</th>
          <th className="border border-amber-200 dark:border-amber-700 p-2 text-left text-amber-800 dark:text-amber-200">Focus</th>
        </tr>
      </thead>
      <tbody className="text-amber-700 dark:text-amber-300">
        <tr><td className="border border-amber-200 dark:border-amber-700 p-2">Water jumps</td><td className="border border-amber-200 dark:border-amber-700 p-2">Jump in hip-deep water, knees to chest</td><td className="border border-amber-200 dark:border-amber-700 p-2">Leg power, explosiveness</td></tr>
        <tr><td className="border border-amber-200 dark:border-amber-700 p-2">Water walking</td><td className="border border-amber-200 dark:border-amber-700 p-2">Fast walking against resistance, arms swinging</td><td className="border border-amber-200 dark:border-amber-700 p-2">Cardio, full body</td></tr>
        <tr><td className="border border-amber-200 dark:border-amber-700 p-2">Sculling at wall</td><td className="border border-amber-200 dark:border-amber-700 p-2">Hand movements for water feel at pool edge</td><td className="border border-amber-200 dark:border-amber-700 p-2">Arm technique, catch</td></tr>
        <tr><td className="border border-amber-200 dark:border-amber-700 p-2">Vertical kick</td><td className="border border-amber-200 dark:border-amber-700 p-2">Kick vertically in deep water, arms above surface</td><td className="border border-amber-200 dark:border-amber-700 p-2">Core, leg power</td></tr>
        <tr><td className="border border-amber-200 dark:border-amber-700 p-2">Water squats</td><td className="border border-amber-200 dark:border-amber-700 p-2">Squats in chest-deep water</td><td className="border border-amber-200 dark:border-amber-700 p-2">Legs, glutes</td></tr>
      </tbody>
    </table>
  </div>

  <h3 className="text-2xl font-bold mt-8 mb-4">Cross-Training for Swimmers</h3>

  <div className="bg-blue-50 dark:bg-blue-900/40 p-6 rounded-xl border-2 border-blue-200 dark:border-blue-800">
    <p className="text-blue-700 dark:text-blue-300 mb-3">
      Complementary sports address weaknesses and prevent one-sided load.
    </p>
    <ul className="list-disc list-inside space-y-2 text-blue-700 dark:text-blue-300">
      <li><strong>Running:</strong> Leg power, base endurance. Caution with intense running - can relieve shoulders but avoid overload.</li>
      <li><strong>Cycling:</strong> Leg power, cardio. No arm load - good as recovery day.</li>
      <li><strong>Strength training:</strong> Core, back, shoulders. Lat pull, rows, core exercises. Injury prevention.</li>
      <li><strong>Yoga/Pilates:</strong> Flexibility, mobility, breathing. Especially important for swimmers.</li>
      <li><strong>Rowing (ergometer):</strong> Similar movement patterns, strength endurance. Good complement.</li>
    </ul>
  </div>

  <div className="bg-green-50 dark:bg-green-900/40 p-6 rounded-xl border-2 border-green-200 dark:border-green-800 mt-8">
    <h3 className="font-bold text-green-800 dark:text-green-200 mb-4 text-xl">Practice Exercises</h3>
    <ol className="list-decimal list-inside space-y-3 text-green-700 dark:text-green-300">
      <li><strong>HIIT session:</strong> Complete the 20-minute pool HIIT workout.</li>
      <li><strong>Aqua jogging:</strong> 15 minutes aqua jogging in deep water with belt.</li>
      <li><strong>Pool circuit:</strong> 3 rounds: 2 min water walking, 1 min jumps, 1 min vertical kick.</li>
    </ol>
  </div>
</div>
    `
  },
  task: {
    de: {
      title: "Schwimm-Fitness integrieren",
      description: "Ergänze dein Training mit Pool-Fitness und Cross-Training.",
      checklist: [
        { text: "Absolviere das 20-Minuten Pool-HIIT-Workout", checked: false },
        { text: "Probiere 15 Minuten Aqua-Jogging im tiefen Wasser", checked: false },
        { text: "Mache einen Pool-Circuit (Walking, Jumps, Vertikaler Kick)", checked: false },
        { text: "Füge 1 Cross-Training-Einheit pro Woche hinzu (Rad, Lauf oder Kraft)", checked: false }
      ]
    },
    en: {
      title: "Integrate Swimming Fitness",
      description: "Supplement your training with pool fitness and cross-training.",
      checklist: [
        { text: "Complete the 20-minute pool HIIT workout", checked: false },
        { text: "Try 15 minutes aqua jogging in deep water", checked: false },
        { text: "Do a pool circuit (walking, jumps, vertical kick)", checked: false },
        { text: "Add 1 cross-training session per week (bike, run, or strength)", checked: false }
      ]
    }
  },
  quiz: {
    de: [
      { question: "Was ist Aqua-Jogging und wofür eignet es sich?", answer: "Laufen im tiefen Wasser mit Schwimmgürtel. Eignet sich für Verletzungsprävention, Rehabilitation, Cross-Training und Abwechslung. Intensives Cardio ohne Gelenkbelastung." },
      { question: "Warum ist Cross-Training für Schwimmer sinnvoll?", answer: "Schwimmen ist einseitig (viele Arm- und Schulterbewegungen). Cross-Training verbessert Beinkraft, Rumpfstabilität, Flexibilität und verhindert Überlastung. Radfahren, Laufen, Krafttraining, Yoga ergänzen optimal." },
      { question: "Was ist Tabata im Wasser?", answer: "20 Sekunden maximale Belastung (Sprint/Kick), 10 Sekunden Pause, 8 Runden. Ein klassisches HIIT-Format, das auch im Pool sehr intensiv ist." }
    ],
    en: [
      { question: "What is aqua jogging and what is it good for?", answer: "Running in deep water with flotation belt. Good for injury prevention, rehabilitation, cross-training, and variety. Intense cardio without joint stress." },
      { question: "Why is cross-training useful for swimmers?", answer: "Swimming is one-sided (lots of arm and shoulder movement). Cross-training improves leg power, core stability, flexibility, and prevents overload. Cycling, running, strength training, yoga complement optimally." },
      { question: "What is Tabata in the water?", answer: "20 seconds maximum effort (sprint/kick), 10 seconds rest, 8 rounds. A classic HIIT format that's also very intense in the pool." }
    ]
  }
};
