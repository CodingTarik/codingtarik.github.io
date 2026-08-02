export const techniqueImprovement = {
  title: {
    de: "Technik-Verbesserung - Effizienter schwimmen",
    en: "Technique Improvement - Swim More Efficiently"
  },
  description: {
    de: "Verbessere deine Schwimmtechnik: Videoanalyse, Drills, Fehlerkorrektur und Feinschliff.",
    en: "Improve your swimming technique: video analysis, drills, error correction, and fine-tuning."
  },
  content: {
    de: `
<div className="space-y-6">
  <h2 className="text-3xl font-bold text-blue-800 dark:text-blue-200 mb-4">Technik-Verbesserung</h2>

  <p className="text-lg leading-relaxed">
    Gute Technik ist der Schlüssel zu effizientem Schwimmen. Selbst kleine Verbesserungen in der 
    Technik können große Auswirkungen auf Geschwindigkeit und Ausdauer haben. Technikarbeit sollte 
    ein fester Bestandteil jedes Trainings sein.
  </p>

  <div className="bg-blue-50 dark:bg-blue-900/40 p-6 rounded-xl border-2 border-blue-200 dark:border-blue-800">
    <h3 className="font-bold text-blue-800 dark:text-blue-200 mb-3 text-xl">SWOLF - Deine Effizienzzahl</h3>
    <p className="text-blue-700 dark:text-blue-300">
      SWOLF = Züge pro Bahn + Zeit in Sekunden. Eine niedrigere SWOLF-Zahl bedeutet effizienteres 
      Schwimmen. Beispiel: 15 Züge + 30 Sekunden = SWOLF 45. Versuche, diese Zahl über die Zeit 
      zu senken, ohne eine der beiden Variablen zu verschlechtern.
    </p>
  </div>

  <h3 className="text-2xl font-bold mt-8 mb-4">Technik-Analyse</h3>

  <div className="bg-amber-50 dark:bg-amber-900/40 p-6 rounded-xl border-2 border-amber-200 dark:border-amber-800">
    <h3 className="font-bold text-amber-800 dark:text-amber-200 mb-3 text-xl">Methoden der Technikanalyse</h3>
    <ul className="list-disc list-inside space-y-2 text-amber-700 dark:text-amber-300">
      <li><strong>Videoanalyse:</strong> Lass dich filmen - über und unter Wasser. Vergleiche mit Profis.</li>
      <li><strong>Züge zählen:</strong> Zähle die Züge pro Bahn. Weniger Züge = bessere Effizienz.</li>
      <li><strong>Feedback von Trainer:</strong> Ein geschultes Auge sieht Fehler, die du selbst nicht spürst.</li>
      <li><strong>Körpergefühl:</strong> Achte auf das Gefühl des Wassers. Gutes Schwimmen fühlt sich leicht an.</li>
    </ul>
  </div>

  <h3 className="text-2xl font-bold mt-8 mb-4">Universelle Technik-Drills</h3>

  <div className="bg-green-50 dark:bg-green-900/40 p-6 rounded-xl border-2 border-green-200 dark:border-green-800">
    <h3 className="font-bold text-green-800 dark:text-green-200 mb-3 text-xl">Die wichtigsten Drills</h3>
    <ol className="list-decimal list-inside space-y-3 text-green-700 dark:text-green-300">
      <li><strong>Catch-up Drill:</strong> Ein Arm bleibt vorne, bis der andere ihn berührt. Verbessert Timing.</li>
      <li><strong>Fingertip Drag:</strong> Fingerspitzen über Wasser ziehen. Trainiert hohe Ellenbogen.</li>
      <li><strong>Faust-Schwimmen:</strong> Mit Fäusten schwimmen. Verbessert das Wassergefühl der Unterarme.</li>
      <li><strong>Einbeinig kicken:</strong> Nur mit einem Bein kicken. Identifiziert Asymmetrien.</li>
      <li><strong>3-3-3:</strong> 3 Züge links, 3 Züge rechts, 3 Züge normal. Verbessert Balance.</li>
    </ol>
  </div>

  <h3 className="text-2xl font-bold mt-8 mb-4">Häufige Technikfehler</h3>

  <div className="bg-red-50 dark:bg-red-900/40 p-6 rounded-xl border-2 border-red-200 dark:border-red-800">
    <table className="w-full border-collapse mt-3">
      <thead>
        <tr className="bg-red-100 dark:bg-red-800/60">
          <th className="border border-red-200 dark:border-red-700 p-2 text-left text-red-800 dark:text-red-200">Fehler</th>
          <th className="border border-red-200 dark:border-red-700 p-2 text-left text-red-800 dark:text-red-200">Auswirkung</th>
          <th className="border border-red-200 dark:border-red-700 p-2 text-left text-red-800 dark:text-red-200">Korrektur</th>
        </tr>
      </thead>
      <tbody className="text-red-700 dark:text-red-300 text-sm">
        <tr>
          <td className="border border-red-200 dark:border-red-700 p-2">Kopf zu hoch</td>
          <td className="border border-red-200 dark:border-red-700 p-2">Beine sinken ab</td>
          <td className="border border-red-200 dark:border-red-700 p-2">Blick auf den Beckenboden richten</td>
        </tr>
        <tr>
          <td className="border border-red-200 dark:border-red-700 p-2">Flacher Ellenbogen</td>
          <td className="border border-red-200 dark:border-red-700 p-2">Weniger Vortrieb</td>
          <td className="border border-red-200 dark:border-red-700 p-2">Catch-up und Fingertip Drill</td>
        </tr>
        <tr>
          <td className="border border-red-200 dark:border-red-700 p-2">Überkreuzen</td>
          <td className="border border-red-200 dark:border-red-700 p-2">Schlangenbewegung</td>
          <td className="border border-red-200 dark:border-red-700 p-2">Auf Schulterbreite achten</td>
        </tr>
        <tr>
          <td className="border border-red-200 dark:border-red-700 p-2">Luft anhalten</td>
          <td className="border border-red-200 dark:border-red-700 p-2">Verspannung, Atemnot</td>
          <td className="border border-red-200 dark:border-red-700 p-2">Kontinuierlich unter Wasser ausatmen</td>
        </tr>
      </tbody>
    </table>
  </div>

  <div className="bg-green-50 dark:bg-green-900/40 p-6 rounded-xl border-2 border-green-200 dark:border-green-800 mt-8">
    <h3 className="font-bold text-green-800 dark:text-green-200 mb-4 text-xl">Übungen</h3>
    <ol className="list-decimal list-inside space-y-3 text-green-700 dark:text-green-300">
      <li><strong>SWOLF berechnen:</strong> Zähle Züge und Zeit für 50m. Berechne deine SWOLF-Zahl.</li>
      <li><strong>Drill-Set:</strong> 4 x 50m (je ein anderer Drill), dann 4 x 50m normales Schwimmen.</li>
      <li><strong>Züge reduzieren:</strong> Schwimme 4 Bahnen und versuche, jede Bahn mit einem Zug weniger zu schaffen.</li>
    </ol>
  </div>
</div>
    `,
    en: `
<div className="space-y-6">
  <h2 className="text-3xl font-bold text-blue-800 dark:text-blue-200 mb-4">Technique Improvement</h2>

  <p className="text-lg leading-relaxed">
    Good technique is the key to efficient swimming. Even small improvements in technique 
    can have big impacts on speed and endurance. Technique work should be a regular part 
    of every training session.
  </p>

  <div className="bg-blue-50 dark:bg-blue-900/40 p-6 rounded-xl border-2 border-blue-200 dark:border-blue-800">
    <h3 className="font-bold text-blue-800 dark:text-blue-200 mb-3 text-xl">SWOLF - Your Efficiency Number</h3>
    <p className="text-blue-700 dark:text-blue-300">
      SWOLF = Strokes per length + Time in seconds. A lower SWOLF number means more efficient 
      swimming. Example: 15 strokes + 30 seconds = SWOLF 45. Try to lower this number over time 
      without worsening either variable.
    </p>
  </div>

  <h3 className="text-2xl font-bold mt-8 mb-4">Technique Analysis</h3>

  <div className="bg-amber-50 dark:bg-amber-900/40 p-6 rounded-xl border-2 border-amber-200 dark:border-amber-800">
    <h3 className="font-bold text-amber-800 dark:text-amber-200 mb-3 text-xl">Analysis Methods</h3>
    <ul className="list-disc list-inside space-y-2 text-amber-700 dark:text-amber-300">
      <li><strong>Video analysis:</strong> Have yourself filmed - above and underwater. Compare with pros.</li>
      <li><strong>Stroke counting:</strong> Count strokes per length. Fewer strokes = better efficiency.</li>
      <li><strong>Coach feedback:</strong> A trained eye sees errors you can't feel yourself.</li>
      <li><strong>Body feel:</strong> Pay attention to the water feel. Good swimming feels effortless.</li>
    </ul>
  </div>

  <h3 className="text-2xl font-bold mt-8 mb-4">Universal Technique Drills</h3>

  <div className="bg-green-50 dark:bg-green-900/40 p-6 rounded-xl border-2 border-green-200 dark:border-green-800">
    <h3 className="font-bold text-green-800 dark:text-green-200 mb-3 text-xl">The Most Important Drills</h3>
    <ol className="list-decimal list-inside space-y-3 text-green-700 dark:text-green-300">
      <li><strong>Catch-up drill:</strong> One arm stays front until the other touches it. Improves timing.</li>
      <li><strong>Fingertip drag:</strong> Drag fingertips across water surface. Trains high elbows.</li>
      <li><strong>Fist swimming:</strong> Swim with fists. Improves forearm water feel.</li>
      <li><strong>Single-leg kick:</strong> Kick with one leg only. Identifies asymmetries.</li>
      <li><strong>3-3-3:</strong> 3 strokes left, 3 strokes right, 3 strokes normal. Improves balance.</li>
    </ol>
  </div>

  <h3 className="text-2xl font-bold mt-8 mb-4">Common Technical Errors</h3>

  <div className="bg-red-50 dark:bg-red-900/40 p-6 rounded-xl border-2 border-red-200 dark:border-red-800">
    <table className="w-full border-collapse mt-3">
      <thead>
        <tr className="bg-red-100 dark:bg-red-800/60">
          <th className="border border-red-200 dark:border-red-700 p-2 text-left text-red-800 dark:text-red-200">Error</th>
          <th className="border border-red-200 dark:border-red-700 p-2 text-left text-red-800 dark:text-red-200">Effect</th>
          <th className="border border-red-200 dark:border-red-700 p-2 text-left text-red-800 dark:text-red-200">Fix</th>
        </tr>
      </thead>
      <tbody className="text-red-700 dark:text-red-300 text-sm">
        <tr>
          <td className="border border-red-200 dark:border-red-700 p-2">Head too high</td>
          <td className="border border-red-200 dark:border-red-700 p-2">Legs sink</td>
          <td className="border border-red-200 dark:border-red-700 p-2">Look at pool floor</td>
        </tr>
        <tr>
          <td className="border border-red-200 dark:border-red-700 p-2">Dropped elbow</td>
          <td className="border border-red-200 dark:border-red-700 p-2">Less propulsion</td>
          <td className="border border-red-200 dark:border-red-700 p-2">Catch-up and fingertip drill</td>
        </tr>
        <tr>
          <td className="border border-red-200 dark:border-red-700 p-2">Crossover</td>
          <td className="border border-red-200 dark:border-red-700 p-2">Snaking movement</td>
          <td className="border border-red-200 dark:border-red-700 p-2">Focus on shoulder width</td>
        </tr>
        <tr>
          <td className="border border-red-200 dark:border-red-700 p-2">Holding breath</td>
          <td className="border border-red-200 dark:border-red-700 p-2">Tension, breathlessness</td>
          <td className="border border-red-200 dark:border-red-700 p-2">Continuously exhale underwater</td>
        </tr>
      </tbody>
    </table>
  </div>

  <div className="bg-green-50 dark:bg-green-900/40 p-6 rounded-xl border-2 border-green-200 dark:border-green-800 mt-8">
    <h3 className="font-bold text-green-800 dark:text-green-200 mb-4 text-xl">Exercises</h3>
    <ol className="list-decimal list-inside space-y-3 text-green-700 dark:text-green-300">
      <li><strong>Calculate SWOLF:</strong> Count strokes and time for 50m. Calculate your SWOLF number.</li>
      <li><strong>Drill set:</strong> 4 x 50m (different drill each), then 4 x 50m normal swimming.</li>
      <li><strong>Reduce strokes:</strong> Swim 4 lengths and try to use one fewer stroke each length.</li>
    </ol>
  </div>
</div>
    `
  },
  task: {
    de: {
      title: "Technik verbessern",
      description: "Analysiere und verbessere deine Schwimmtechnik.",
      checklist: [
        { text: "Berechne deine SWOLF-Zahl für 50m Kraul", checked: false },
        { text: "Absolviere ein Drill-Set mit 4 verschiedenen Drills", checked: false },
        { text: "Lass dich beim Schwimmen filmen und analysiere das Video", checked: false },
        { text: "Versuche, deine Züge pro Bahn um 1-2 zu reduzieren", checked: false }
      ]
    },
    en: {
      title: "Improve Technique",
      description: "Analyze and improve your swimming technique.",
      checklist: [
        { text: "Calculate your SWOLF number for 50m freestyle", checked: false },
        { text: "Complete a drill set with 4 different drills", checked: false },
        { text: "Have yourself filmed swimming and analyze the video", checked: false },
        { text: "Try to reduce your strokes per length by 1-2", checked: false }
      ]
    }
  },
  quiz: {
    de: [
      {
        question: "Was ist SWOLF und wie berechnet man es?",
        answer: "SWOLF = Züge pro Bahn + Zeit in Sekunden. Eine niedrigere Zahl bedeutet effizienteres Schwimmen."
      },
      {
        question: "Warum ist das Schwimmen mit Fäusten ein guter Drill?",
        answer: "Es zwingt dich, den Unterarm als Paddelfläche zu nutzen, was das Wassergefühl und die Catch-Phase verbessert."
      },
      {
        question: "Was passiert, wenn man den Kopf beim Kraulschwimmen zu hoch hält?",
        answer: "Die Beine sinken ab, was den Wasserwiderstand erhöht und das Schwimmen viel anstrengender und langsamer macht."
      }
    ],
    en: [
      {
        question: "What is SWOLF and how is it calculated?",
        answer: "SWOLF = Strokes per length + Time in seconds. A lower number means more efficient swimming."
      },
      {
        question: "Why is fist swimming a good drill?",
        answer: "It forces you to use the forearm as a paddle surface, which improves water feel and the catch phase."
      },
      {
        question: "What happens when you hold your head too high in freestyle?",
        answer: "The legs sink, which increases drag and makes swimming much more tiring and slower."
      }
    ]
  }
};
