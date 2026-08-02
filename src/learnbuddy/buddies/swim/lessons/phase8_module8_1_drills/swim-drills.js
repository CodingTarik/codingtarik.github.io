export const swimDrills = {
  title: {
    de: "Schwimm-Übungsbibliothek - Drills für jede Lage",
    en: "Swim Drills Library - Drills for Every Stroke"
  },
  description: {
    de: "Umfangreiche Sammlung von Schwimmübungen: Catch-Up, Fingertip Drag, Faust-Schwimmen, Zipper Drill und Kick-Drills für alle Lagen.",
    en: "Comprehensive collection of swim drills: catch-up, fingertip drag, fist swimming, zipper drill, and kick drills for all strokes."
  },
  content: {
    de: `
<div className="space-y-6">
  <h2 className="text-3xl font-bold text-blue-800 dark:text-blue-200 mb-4">Schwimm-Übungsbibliothek</h2>

  <p className="text-lg leading-relaxed">
    Drills (Technikübungen) sind das Fundament für technisch sauberes Schwimmen. Selbst 
    Olympia-Schwimmer absolvieren regelmäßig Drill-Einheiten. Jeder Drill isoliert einen 
    bestimmten Aspekt der Schwimmbewegung und hilft dir, ihn bewusst zu verbessern. 
    Plane in jedes Training mindestens 10-15 Minuten Drill-Arbeit ein.
  </p>

  <h3 className="text-2xl font-bold mt-8 mb-4">Kraul-Drills (Freestyle)</h3>

  <div className="bg-blue-50 dark:bg-blue-900/40 p-6 rounded-xl border-2 border-blue-200 dark:border-blue-800">
    <h4 className="font-bold text-blue-800 dark:text-blue-200 mb-3 text-lg">1. Catch-Up Drill</h4>
    <p className="text-blue-700 dark:text-blue-300 mb-2">
      <strong>Zweck:</strong> Verbessert die Streckung und das Timing des Armzugs.
    </p>
    <ul className="list-disc list-inside space-y-2 text-blue-700 dark:text-blue-300">
      <li>Beide Arme beginnen in Streckposition nach vorne.</li>
      <li>Ein Arm zieht einen kompletten Zug, während der andere vorne wartet.</li>
      <li>Erst wenn die Hand des ziehenden Arms die ruhende Hand berührt, beginnt der andere Arm.</li>
      <li>Fokus: Lange, gestreckte Wasserlage. Keine Hektik.</li>
    </ul>
  </div>

  <div className="bg-blue-50 dark:bg-blue-900/40 p-6 rounded-xl border-2 border-blue-200 dark:border-blue-800 mt-4">
    <h4 className="font-bold text-blue-800 dark:text-blue-200 mb-3 text-lg">2. Fingertip Drag (Fingerschlepp-Drill)</h4>
    <p className="text-blue-700 dark:text-blue-300 mb-2">
      <strong>Zweck:</strong> Fördert hohen Ellbogen in der Rückholphase und entspannten Arm.
    </p>
    <ul className="list-disc list-inside space-y-2 text-blue-700 dark:text-blue-300">
      <li>Schwimme normales Kraul, aber schleppe die Fingerspitzen über die Wasseroberfläche.</li>
      <li>Der Ellbogen bleibt dabei der höchste Punkt des Arms über Wasser.</li>
      <li>Sanfte Berührung der Wasseroberfläche mit den Fingerspitzen.</li>
      <li>Fokus: Hoher Ellbogen, lockere Schulter, entspannter Arm.</li>
    </ul>
  </div>

  <div className="bg-blue-50 dark:bg-blue-900/40 p-6 rounded-xl border-2 border-blue-200 dark:border-blue-800 mt-4">
    <h4 className="font-bold text-blue-800 dark:text-blue-200 mb-3 text-lg">3. Faust-Schwimmen (Fist Swimming)</h4>
    <p className="text-blue-700 dark:text-blue-300 mb-2">
      <strong>Zweck:</strong> Verbessert das Wassergefühl und den Einsatz des Unterarms.
    </p>
    <ul className="list-disc list-inside space-y-2 text-blue-700 dark:text-blue-300">
      <li>Balle beide Hände zu Fäusten und schwimme Kraul.</li>
      <li>Du wirst den Unterarm stärker als Paddeloberfläche einsetzen müssen.</li>
      <li>Nach 50m Faust öffne die Hände wieder - du wirst ein gigantisches Wassergefühl haben.</li>
      <li>Fokus: Unterarm-Einsatz, Catch-Phase, Gefühl für Wassergriff.</li>
    </ul>
  </div>

  <div className="bg-blue-50 dark:bg-blue-900/40 p-6 rounded-xl border-2 border-blue-200 dark:border-blue-800 mt-4">
    <h4 className="font-bold text-blue-800 dark:text-blue-200 mb-3 text-lg">4. Zipper Drill (Reißverschluss-Drill)</h4>
    <p className="text-blue-700 dark:text-blue-300 mb-2">
      <strong>Zweck:</strong> Trainiert hohen Ellbogen und aktive Rückholphase.
    </p>
    <ul className="list-disc list-inside space-y-2 text-blue-700 dark:text-blue-300">
      <li>Beim Rückholen des Arms streifst du mit dem Daumen an der Körperseite entlang.</li>
      <li>Wie einen Reißverschluss ziehen - von der Hüfte bis zur Achsel.</li>
      <li>Der Ellbogen zeigt dabei nach oben.</li>
      <li>Fokus: Körpernahe Armführung, hoher Ellbogen.</li>
    </ul>
  </div>

  <h3 className="text-2xl font-bold mt-8 mb-4">Brust-Drills</h3>

  <div className="bg-green-50 dark:bg-green-900/40 p-6 rounded-xl border-2 border-green-200 dark:border-green-800">
    <ul className="list-disc list-inside space-y-3 text-green-700 dark:text-green-300">
      <li><strong>2-Kick-1-Pull:</strong> Zwei Beinschläge, ein Armzug. Fokussiert den Beinschlag-Rhythmus und die Gleitphase.</li>
      <li><strong>Brust mit Kraul-Beinen:</strong> Brust-Armzug mit Kraul-Beinschlag. Isoliert die Armbewegung.</li>
      <li><strong>Beinschlag mit Brett:</strong> Nur Beinschlag, Hände am Schwimmbrett. Füße müssen nach außen gedreht werden.</li>
      <li><strong>Unterwasser-Armzug:</strong> Armzüge unter Wasser bleiben, Kopf oben. Fokus auf Catch und Pull.</li>
    </ul>
  </div>

  <h3 className="text-2xl font-bold mt-8 mb-4">Rücken-Drills</h3>

  <div className="bg-amber-50 dark:bg-amber-900/40 p-6 rounded-xl border-2 border-amber-200 dark:border-amber-800">
    <ul className="list-disc list-inside space-y-3 text-amber-700 dark:text-amber-300">
      <li><strong>Einarm-Rücken:</strong> Nur ein Arm arbeitet, der andere liegt am Körper. Abwechselnd Seiten.</li>
      <li><strong>Balance-Drill:</strong> Rückenlage, Arme am Körper, nur Beinschlag. Ein Becher Wasser auf der Stirn (imaginär).</li>
      <li><strong>Catch-Up Rücken:</strong> Wie Kraul Catch-Up, aber auf dem Rücken. Arme treffen sich oben.</li>
      <li><strong>6-3-6 Drill:</strong> 6 Kick-Schläge auf einer Seite, 3 Armzüge, 6 Kick-Schläge auf der anderen Seite.</li>
    </ul>
  </div>

  <h3 className="text-2xl font-bold mt-8 mb-4">Kick-Drills (für alle Lagen)</h3>

  <div className="bg-blue-50 dark:bg-blue-900/40 p-6 rounded-xl border-2 border-blue-200 dark:border-blue-800">
    <table className="w-full border-collapse mt-3">
      <thead>
        <tr className="bg-blue-100 dark:bg-blue-800/60">
          <th className="border border-blue-200 dark:border-blue-700 p-2 text-left text-blue-800 dark:text-blue-200">Drill</th>
          <th className="border border-blue-200 dark:border-blue-700 p-2 text-left text-blue-800 dark:text-blue-200">Beschreibung</th>
          <th className="border border-blue-200 dark:border-blue-700 p-2 text-left text-blue-800 dark:text-blue-200">Lage</th>
        </tr>
      </thead>
      <tbody className="text-blue-700 dark:text-blue-300">
        <tr><td className="border border-blue-200 dark:border-blue-700 p-2">Vertikaler Kick</td><td className="border border-blue-200 dark:border-blue-700 p-2">Senkrecht im tiefen Wasser kicken, Arme über Wasser</td><td className="border border-blue-200 dark:border-blue-700 p-2">Alle</td></tr>
        <tr><td className="border border-blue-200 dark:border-blue-700 p-2">Seitlage-Kick</td><td className="border border-blue-200 dark:border-blue-700 p-2">Auf der Seite liegend kicken, unterer Arm gestreckt</td><td className="border border-blue-200 dark:border-blue-700 p-2">Kraul</td></tr>
        <tr><td className="border border-blue-200 dark:border-blue-700 p-2">Delfin-Kick mit Flossen</td><td className="border border-blue-200 dark:border-blue-700 p-2">Unterwasser-Delfinkick in Streamline, mit Flossen</td><td className="border border-blue-200 dark:border-blue-700 p-2">Delfin</td></tr>
        <tr><td className="border border-blue-200 dark:border-blue-700 p-2">Brett-Kick mit Tempo</td><td className="border border-blue-200 dark:border-blue-700 p-2">25m Sprint-Kick am Schwimmbrett, 25m locker</td><td className="border border-blue-200 dark:border-blue-700 p-2">Alle</td></tr>
      </tbody>
    </table>
  </div>

  <div className="bg-green-50 dark:bg-green-900/40 p-6 rounded-xl border-2 border-green-200 dark:border-green-800 mt-8">
    <h3 className="font-bold text-green-800 dark:text-green-200 mb-4 text-xl">Praktische Übungen</h3>
    <ol className="list-decimal list-inside space-y-3 text-green-700 dark:text-green-300">
      <li><strong>Drill-Serie:</strong> Schwimme 4x50m mit je einem anderen Kraul-Drill. 15s Pause dazwischen.</li>
      <li><strong>Faust-Challenge:</strong> 100m Faust-Schwimmen, dann 100m normales Kraul. Spüre den Unterschied!</li>
      <li><strong>Kick-Test:</strong> 4x25m Kick-Drills auf Zeit - zwei Wochen lang tracken und Fortschritt messen.</li>
    </ol>
  </div>
</div>
    `,
    en: `
<div className="space-y-6">
  <h2 className="text-3xl font-bold text-blue-800 dark:text-blue-200 mb-4">Swim Drills Library</h2>

  <p className="text-lg leading-relaxed">
    Drills are the foundation for technically clean swimming. Even Olympic swimmers regularly 
    do drill sessions. Each drill isolates a specific aspect of the swimming movement and helps 
    you consciously improve it. Plan at least 10-15 minutes of drill work into every training 
    session.
  </p>

  <h3 className="text-2xl font-bold mt-8 mb-4">Freestyle Drills</h3>

  <div className="bg-blue-50 dark:bg-blue-900/40 p-6 rounded-xl border-2 border-blue-200 dark:border-blue-800">
    <h4 className="font-bold text-blue-800 dark:text-blue-200 mb-3 text-lg">1. Catch-Up Drill</h4>
    <p className="text-blue-700 dark:text-blue-300 mb-2">
      <strong>Purpose:</strong> Improves extension and arm pull timing.
    </p>
    <ul className="list-disc list-inside space-y-2 text-blue-700 dark:text-blue-300">
      <li>Both arms start in an extended position pointing forward.</li>
      <li>One arm completes a full stroke while the other waits in front.</li>
      <li>Only when the pulling hand touches the resting hand does the other arm begin.</li>
      <li>Focus: Long, extended body position. No rushing.</li>
    </ul>
  </div>

  <div className="bg-blue-50 dark:bg-blue-900/40 p-6 rounded-xl border-2 border-blue-200 dark:border-blue-800 mt-4">
    <h4 className="font-bold text-blue-800 dark:text-blue-200 mb-3 text-lg">2. Fingertip Drag Drill</h4>
    <p className="text-blue-700 dark:text-blue-300 mb-2">
      <strong>Purpose:</strong> Promotes high elbow recovery and relaxed arm movement.
    </p>
    <ul className="list-disc list-inside space-y-2 text-blue-700 dark:text-blue-300">
      <li>Swim normal freestyle, but drag your fingertips along the water surface.</li>
      <li>The elbow stays the highest point of the arm above water.</li>
      <li>Gentle contact of fingertips with the water surface.</li>
      <li>Focus: High elbow, relaxed shoulder, loose arm.</li>
    </ul>
  </div>

  <div className="bg-blue-50 dark:bg-blue-900/40 p-6 rounded-xl border-2 border-blue-200 dark:border-blue-800 mt-4">
    <h4 className="font-bold text-blue-800 dark:text-blue-200 mb-3 text-lg">3. Fist Swimming</h4>
    <p className="text-blue-700 dark:text-blue-300 mb-2">
      <strong>Purpose:</strong> Improves water feel and forearm engagement.
    </p>
    <ul className="list-disc list-inside space-y-2 text-blue-700 dark:text-blue-300">
      <li>Clench both hands into fists and swim freestyle.</li>
      <li>You'll need to use your forearm more as a paddle surface.</li>
      <li>After 50m with fists, open your hands again - you'll have an incredible water feel.</li>
      <li>Focus: Forearm engagement, catch phase, feeling for water grip.</li>
    </ul>
  </div>

  <div className="bg-blue-50 dark:bg-blue-900/40 p-6 rounded-xl border-2 border-blue-200 dark:border-blue-800 mt-4">
    <h4 className="font-bold text-blue-800 dark:text-blue-200 mb-3 text-lg">4. Zipper Drill</h4>
    <p className="text-blue-700 dark:text-blue-300 mb-2">
      <strong>Purpose:</strong> Trains high elbow and active recovery phase.
    </p>
    <ul className="list-disc list-inside space-y-2 text-blue-700 dark:text-blue-300">
      <li>During arm recovery, drag your thumb along the side of your body.</li>
      <li>Like pulling a zipper - from hip to armpit.</li>
      <li>The elbow points upward throughout.</li>
      <li>Focus: Close arm path, high elbow position.</li>
    </ul>
  </div>

  <h3 className="text-2xl font-bold mt-8 mb-4">Breaststroke Drills</h3>

  <div className="bg-green-50 dark:bg-green-900/40 p-6 rounded-xl border-2 border-green-200 dark:border-green-800">
    <ul className="list-disc list-inside space-y-3 text-green-700 dark:text-green-300">
      <li><strong>2-Kick-1-Pull:</strong> Two kicks, one arm pull. Focuses on kick rhythm and glide phase.</li>
      <li><strong>Breaststroke arms with flutter kick:</strong> Breaststroke arms with freestyle legs. Isolates the arm movement.</li>
      <li><strong>Kick with board:</strong> Kick only, hands on kickboard. Feet must turn outward properly.</li>
      <li><strong>Underwater pull:</strong> Arm pulls stay underwater, head up. Focus on catch and pull.</li>
    </ul>
  </div>

  <h3 className="text-2xl font-bold mt-8 mb-4">Backstroke Drills</h3>

  <div className="bg-amber-50 dark:bg-amber-900/40 p-6 rounded-xl border-2 border-amber-200 dark:border-amber-800">
    <ul className="list-disc list-inside space-y-3 text-amber-700 dark:text-amber-300">
      <li><strong>Single-arm backstroke:</strong> Only one arm works, the other rests at your side. Alternate sides.</li>
      <li><strong>Balance drill:</strong> On back, arms at sides, kick only. Imagine a cup of water on your forehead.</li>
      <li><strong>Catch-up backstroke:</strong> Like freestyle catch-up, but on your back. Arms meet at the top.</li>
      <li><strong>6-3-6 Drill:</strong> 6 kicks on one side, 3 arm strokes, 6 kicks on the other side.</li>
    </ul>
  </div>

  <h3 className="text-2xl font-bold mt-8 mb-4">Kick Drills (All Strokes)</h3>

  <div className="bg-blue-50 dark:bg-blue-900/40 p-6 rounded-xl border-2 border-blue-200 dark:border-blue-800">
    <table className="w-full border-collapse mt-3">
      <thead>
        <tr className="bg-blue-100 dark:bg-blue-800/60">
          <th className="border border-blue-200 dark:border-blue-700 p-2 text-left text-blue-800 dark:text-blue-200">Drill</th>
          <th className="border border-blue-200 dark:border-blue-700 p-2 text-left text-blue-800 dark:text-blue-200">Description</th>
          <th className="border border-blue-200 dark:border-blue-700 p-2 text-left text-blue-800 dark:text-blue-200">Stroke</th>
        </tr>
      </thead>
      <tbody className="text-blue-700 dark:text-blue-300">
        <tr><td className="border border-blue-200 dark:border-blue-700 p-2">Vertical kick</td><td className="border border-blue-200 dark:border-blue-700 p-2">Kick vertically in deep water, arms above surface</td><td className="border border-blue-200 dark:border-blue-700 p-2">All</td></tr>
        <tr><td className="border border-blue-200 dark:border-blue-700 p-2">Side kick</td><td className="border border-blue-200 dark:border-blue-700 p-2">Kick on your side, bottom arm extended</td><td className="border border-blue-200 dark:border-blue-700 p-2">Freestyle</td></tr>
        <tr><td className="border border-blue-200 dark:border-blue-700 p-2">Dolphin kick with fins</td><td className="border border-blue-200 dark:border-blue-700 p-2">Underwater dolphin kick in streamline with fins</td><td className="border border-blue-200 dark:border-blue-700 p-2">Butterfly</td></tr>
        <tr><td className="border border-blue-200 dark:border-blue-700 p-2">Board kick with tempo</td><td className="border border-blue-200 dark:border-blue-700 p-2">25m sprint kick on board, 25m easy</td><td className="border border-blue-200 dark:border-blue-700 p-2">All</td></tr>
      </tbody>
    </table>
  </div>

  <div className="bg-green-50 dark:bg-green-900/40 p-6 rounded-xl border-2 border-green-200 dark:border-green-800 mt-8">
    <h3 className="font-bold text-green-800 dark:text-green-200 mb-4 text-xl">Practice Exercises</h3>
    <ol className="list-decimal list-inside space-y-3 text-green-700 dark:text-green-300">
      <li><strong>Drill series:</strong> Swim 4x50m using a different freestyle drill each time. 15s rest between sets.</li>
      <li><strong>Fist challenge:</strong> 100m fist swimming, then 100m normal freestyle. Feel the difference!</li>
      <li><strong>Kick test:</strong> 4x25m kick drills for time - track for two weeks and measure progress.</li>
    </ol>
  </div>
</div>
    `
  },
  task: {
    de: {
      title: "Drill-Training absolvieren",
      description: "Integriere Drills systematisch in dein Schwimmtraining.",
      checklist: [
        { text: "Absolviere alle 4 Kraul-Drills jeweils 50m", checked: false },
        { text: "Mache den Faust-Challenge: 100m Faust + 100m normal", checked: false },
        { text: "Probiere 2 Kick-Drills aus der Tabelle aus", checked: false },
        { text: "Baue 15 Minuten Drill-Arbeit in dein nächstes Training ein", checked: false }
      ]
    },
    en: {
      title: "Complete Drill Training",
      description: "Systematically integrate drills into your swim training.",
      checklist: [
        { text: "Complete all 4 freestyle drills for 50m each", checked: false },
        { text: "Do the fist challenge: 100m fist + 100m normal", checked: false },
        { text: "Try 2 kick drills from the table", checked: false },
        { text: "Build 15 minutes of drill work into your next training", checked: false }
      ]
    }
  },
  quiz: {
    de: [
      { question: "Was ist der Zweck des Catch-Up Drills?", answer: "Der Catch-Up Drill verbessert die Streckung und das Timing des Armzugs. Ein Arm wartet vorne, bis der andere ihn berührt, was eine lange, gestreckte Wasserlage fördert." },
      { question: "Warum schwimmt man mit Fäusten?", answer: "Faust-Schwimmen verbessert das Wassergefühl und den Unterarm-Einsatz. Ohne offene Handfläche muss der Unterarm als Paddeloberfläche arbeiten. Wenn man danach die Hände öffnet, ist das Wassergefühl enorm." },
      { question: "Was trainiert der Zipper Drill?", answer: "Der Zipper Drill trainiert einen hohen Ellbogen und eine körpernahe Armführung in der Rückholphase. Man streift mit dem Daumen die Körperseite entlang wie einen Reißverschluss." }
    ],
    en: [
      { question: "What is the purpose of the catch-up drill?", answer: "The catch-up drill improves extension and arm pull timing. One arm waits in front until the other touches it, promoting a long, extended body position." },
      { question: "Why swim with fists?", answer: "Fist swimming improves water feel and forearm engagement. Without open palms, the forearm must work as a paddle surface. When you open your hands afterward, the water feel is incredible." },
      { question: "What does the zipper drill train?", answer: "The zipper drill trains high elbow and close arm path during recovery. You drag your thumb along the side of your body like pulling a zipper." }
    ]
  }
};
