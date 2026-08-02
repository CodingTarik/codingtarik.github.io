export const timingRhythm = {
  title: {
    de: "Timing & Rhythmus - Atemzählung, Flow vs. Halten",
    en: "Timing & Rhythm - Breath Counting, Flow vs. Holding"
  },
  description: {
    de: "Lerne, wie lange du Posen halten solltest und wie du den richtigen Rhythmus findest.",
    en: "Learn how long to hold poses and how to find the right rhythm."
  },
  content: {
    de: `
<div className="space-y-6">
  <h2 className="text-3xl font-bold text-purple-800 dark:text-purple-200 mb-4">Timing & Rhythmus</h2>
  
  <p className="text-lg leading-relaxed">
    Wie lange man eine Pose hält und ob man fließt oder verweilt - das verändert die gesamte 
    Wirkung der Praxis. Lerne die Kunst des Timings.
  </p>

  <div className="bg-purple-50 dark:bg-purple-900/40 p-6 rounded-xl border-2 border-purple-200 dark:border-purple-800">
    <h3 className="font-bold text-purple-800 dark:text-purple-200 mb-3 text-xl">Atemzählung in Posen</h3>
    <table className="w-full border-collapse mt-3">
      <thead>
        <tr className="bg-purple-100 dark:bg-purple-800/40">
          <th className="border border-purple-300 dark:border-purple-700 p-2 text-left text-purple-800 dark:text-purple-200">Posentyp</th>
          <th className="border border-purple-300 dark:border-purple-700 p-2 text-left text-purple-800 dark:text-purple-200">Atemzüge</th>
          <th className="border border-purple-300 dark:border-purple-700 p-2 text-left text-purple-800 dark:text-purple-200">Beispiele</th>
        </tr>
      </thead>
      <tbody className="text-purple-700 dark:text-purple-300">
        <tr>
          <td className="border border-purple-300 dark:border-purple-700 p-2">Herausfordernd</td>
          <td className="border border-purple-300 dark:border-purple-700 p-2">3-5</td>
          <td className="border border-purple-300 dark:border-purple-700 p-2">Krieger III, Plank, Chaturanga</td>
        </tr>
        <tr>
          <td className="border border-purple-300 dark:border-purple-700 p-2">Standard</td>
          <td className="border border-purple-300 dark:border-purple-700 p-2">5-10</td>
          <td className="border border-purple-300 dark:border-purple-700 p-2">Krieger I/II, Dreieck, Baum</td>
        </tr>
        <tr>
          <td className="border border-purple-300 dark:border-purple-700 p-2">Entspannung</td>
          <td className="border border-purple-300 dark:border-purple-700 p-2">10+</td>
          <td className="border border-purple-300 dark:border-purple-700 p-2">Savasana, Child's Pose</td>
        </tr>
        <tr>
          <td className="border border-purple-300 dark:border-purple-700 p-2">Yin Yoga</td>
          <td className="border border-purple-300 dark:border-purple-700 p-2">3-5 Minuten</td>
          <td className="border border-purple-300 dark:border-purple-700 p-2">Schmetterling, Pigeon, Sphinx</td>
        </tr>
      </tbody>
    </table>
  </div>

  <div className="bg-amber-50 dark:bg-amber-900/40 p-6 rounded-xl border-2 border-amber-200 dark:border-amber-800 mt-6">
    <h3 className="font-bold text-amber-800 dark:text-amber-200 mb-3 text-xl">Flow vs. Halten</h3>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3">
      <div className="bg-white dark:bg-amber-800/20 p-4 rounded-lg">
        <h4 className="font-bold text-amber-800 dark:text-amber-200 mb-2">Vinyasa (Flow)</h4>
        <ul className="list-disc list-inside space-y-1 text-amber-700 dark:text-amber-300 text-sm">
          <li>Dynamisch, 1 Atem pro Bewegung</li>
          <li>Erwärmt den Körper</li>
          <li>Ausdauer und Kardio</li>
          <li>Meditativ durch Rhythmus</li>
        </ul>
      </div>
      <div className="bg-white dark:bg-amber-800/20 p-4 rounded-lg">
        <h4 className="font-bold text-amber-800 dark:text-amber-200 mb-2">Hatha (Halten)</h4>
        <ul className="list-disc list-inside space-y-1 text-amber-700 dark:text-amber-300 text-sm">
          <li>Ruhig, 5-10 Atemzüge pro Pose</li>
          <li>Vertieft die Dehnung</li>
          <li>Kraft durch Halten</li>
          <li>Bewusstsein für Ausrichtung</li>
        </ul>
      </div>
    </div>
  </div>

  <div className="bg-blue-50 dark:bg-blue-900/40 p-6 rounded-xl border-2 border-blue-200 dark:border-blue-800 mt-6">
    <h3 className="font-bold text-blue-800 dark:text-blue-200 mb-3 text-xl">Die beste Kombination</h3>
    <p className="text-blue-700 dark:text-blue-300">
      Eine ausgewogene Praxis kombiniert beides: Beginne mit Flow (Sonnengrüße, Vinyasas), 
      halte dann stehende und sitzende Posen länger und beende mit langem Halten im Cool-down. 
      Höre auf deinen Körper - manche Tage brauchen mehr Energie, andere mehr Ruhe.
    </p>
  </div>

  <div className="bg-green-50 dark:bg-green-900/40 p-6 rounded-xl border-2 border-green-300 dark:border-green-800 mt-6">
    <h3 className="font-bold text-green-800 dark:text-green-200 mb-4">Praktische Übung</h3>
    <p className="text-green-700 dark:text-green-300">Führe dieselbe Sequenz zweimal durch - einmal als Flow, einmal als Halten:</p>
    <ol className="list-decimal list-inside space-y-2 text-green-700 dark:text-green-300">
      <li>Krieger I → Krieger II → Dreieck → Vorbeuge</li>
      <li><strong>Runde 1:</strong> 1 Atem pro Pose (Flow-Stil)</li>
      <li><strong>Runde 2:</strong> 5 Atemzüge pro Pose (Halte-Stil)</li>
      <li>Spüre den Unterschied in deinem Körper und Geist</li>
    </ol>
  </div>
</div>
    `,
    en: `
<div className="space-y-6">
  <h2 className="text-3xl font-bold text-purple-800 dark:text-purple-200 mb-4">Timing & Rhythm</h2>
  
  <p className="text-lg leading-relaxed">
    How long you hold a pose and whether you flow or stay - this changes the entire effect 
    of the practice. Learn the art of timing.
  </p>

  <div className="bg-purple-50 dark:bg-purple-900/40 p-6 rounded-xl border-2 border-purple-200 dark:border-purple-800">
    <h3 className="font-bold text-purple-800 dark:text-purple-200 mb-3 text-xl">Breath Counting in Poses</h3>
    <table className="w-full border-collapse mt-3">
      <thead>
        <tr className="bg-purple-100 dark:bg-purple-800/40">
          <th className="border border-purple-300 dark:border-purple-700 p-2 text-left text-purple-800 dark:text-purple-200">Pose Type</th>
          <th className="border border-purple-300 dark:border-purple-700 p-2 text-left text-purple-800 dark:text-purple-200">Breaths</th>
          <th className="border border-purple-300 dark:border-purple-700 p-2 text-left text-purple-800 dark:text-purple-200">Examples</th>
        </tr>
      </thead>
      <tbody className="text-purple-700 dark:text-purple-300">
        <tr>
          <td className="border border-purple-300 dark:border-purple-700 p-2">Challenging</td>
          <td className="border border-purple-300 dark:border-purple-700 p-2">3-5</td>
          <td className="border border-purple-300 dark:border-purple-700 p-2">Warrior III, Plank, Chaturanga</td>
        </tr>
        <tr>
          <td className="border border-purple-300 dark:border-purple-700 p-2">Standard</td>
          <td className="border border-purple-300 dark:border-purple-700 p-2">5-10</td>
          <td className="border border-purple-300 dark:border-purple-700 p-2">Warrior I/II, Triangle, Tree</td>
        </tr>
        <tr>
          <td className="border border-purple-300 dark:border-purple-700 p-2">Relaxation</td>
          <td className="border border-purple-300 dark:border-purple-700 p-2">10+</td>
          <td className="border border-purple-300 dark:border-purple-700 p-2">Savasana, Child's Pose</td>
        </tr>
        <tr>
          <td className="border border-purple-300 dark:border-purple-700 p-2">Yin Yoga</td>
          <td className="border border-purple-300 dark:border-purple-700 p-2">3-5 minutes</td>
          <td className="border border-purple-300 dark:border-purple-700 p-2">Butterfly, Pigeon, Sphinx</td>
        </tr>
      </tbody>
    </table>
  </div>

  <div className="bg-amber-50 dark:bg-amber-900/40 p-6 rounded-xl border-2 border-amber-200 dark:border-amber-800 mt-6">
    <h3 className="font-bold text-amber-800 dark:text-amber-200 mb-3 text-xl">Flow vs. Holding</h3>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3">
      <div className="bg-white dark:bg-amber-800/20 p-4 rounded-lg">
        <h4 className="font-bold text-amber-800 dark:text-amber-200 mb-2">Vinyasa (Flow)</h4>
        <ul className="list-disc list-inside space-y-1 text-amber-700 dark:text-amber-300 text-sm">
          <li>Dynamic, 1 breath per movement</li>
          <li>Warms the body</li>
          <li>Endurance and cardio</li>
          <li>Meditative through rhythm</li>
        </ul>
      </div>
      <div className="bg-white dark:bg-amber-800/20 p-4 rounded-lg">
        <h4 className="font-bold text-amber-800 dark:text-amber-200 mb-2">Hatha (Holding)</h4>
        <ul className="list-disc list-inside space-y-1 text-amber-700 dark:text-amber-300 text-sm">
          <li>Calm, 5-10 breaths per pose</li>
          <li>Deepens the stretch</li>
          <li>Strength through holding</li>
          <li>Alignment awareness</li>
        </ul>
      </div>
    </div>
  </div>

  <div className="bg-blue-50 dark:bg-blue-900/40 p-6 rounded-xl border-2 border-blue-200 dark:border-blue-800 mt-6">
    <h3 className="font-bold text-blue-800 dark:text-blue-200 mb-3 text-xl">The Best Combination</h3>
    <p className="text-blue-700 dark:text-blue-300">
      A balanced practice combines both: Start with flow (Sun Salutations, vinyasas), then 
      hold standing and seated poses longer, and finish with long holds in cool-down. Listen 
      to your body - some days need more energy, others more rest.
    </p>
  </div>

  <div className="bg-green-50 dark:bg-green-900/40 p-6 rounded-xl border-2 border-green-300 dark:border-green-800 mt-6">
    <h3 className="font-bold text-green-800 dark:text-green-200 mb-4">Practice Exercise</h3>
    <p className="text-green-700 dark:text-green-300">Perform the same sequence twice - once as flow, once as holding:</p>
    <ol className="list-decimal list-inside space-y-2 text-green-700 dark:text-green-300">
      <li>Warrior I → Warrior II → Triangle → Forward Fold</li>
      <li><strong>Round 1:</strong> 1 breath per pose (flow style)</li>
      <li><strong>Round 2:</strong> 5 breaths per pose (holding style)</li>
      <li>Feel the difference in your body and mind</li>
    </ol>
  </div>
</div>
    `
  },
  task: {
    de: {
      title: "Timing & Rhythmus finden",
      description: "Experimentiere mit verschiedenen Tempi und Haltezeiten.",
      checklist: [
        { text: "Übe eine Sequenz im Flow-Stil (1 Atem pro Pose)", checked: false },
        { text: "Übe dieselbe Sequenz im Halte-Stil (5 Atemzüge pro Pose)", checked: false },
        { text: "Notiere den Unterschied in Körper und Geist", checked: false },
        { text: "Finde deinen persönlichen Rhythmus und dein bevorzugtes Tempo", checked: false }
      ]
    },
    en: {
      title: "Find Timing & Rhythm",
      description: "Experiment with different tempos and hold times.",
      checklist: [
        { text: "Practice a sequence in flow style (1 breath per pose)", checked: false },
        { text: "Practice the same sequence in holding style (5 breaths per pose)", checked: false },
        { text: "Note the difference in body and mind", checked: false },
        { text: "Find your personal rhythm and preferred tempo", checked: false }
      ]
    }
  },
  quiz: {
    de: [
      {
        question: "Wie viele Atemzüge hält man typischerweise herausfordernde vs. Standard-Posen?",
        answer: "Herausfordernd: 3-5 Atemzüge (z.B. Krieger III, Plank). Standard: 5-10 Atemzüge (z.B. Krieger I/II, Dreieck)."
      },
      {
        question: "Was ist der Hauptunterschied zwischen Flow und Halte-Praxis?",
        answer: "Flow (Vinyasa) ist dynamisch mit 1 Atem pro Bewegung und baut Ausdauer auf. Halten (Hatha) ist ruhig mit 5-10 Atemzügen und vertieft Dehnung und Ausrichtung."
      },
      {
        question: "Wie kombiniert man Flow und Halten am besten?",
        answer: "Beginne mit Flow (Sonnengrüße), halte dann stehende Posen länger, und beende mit langem Halten im Cool-down und Savasana."
      }
    ],
    en: [
      {
        question: "How many breaths do you typically hold challenging vs. standard poses?",
        answer: "Challenging: 3-5 breaths (e.g., Warrior III, Plank). Standard: 5-10 breaths (e.g., Warrior I/II, Triangle)."
      },
      {
        question: "What is the main difference between flow and holding practice?",
        answer: "Flow (Vinyasa) is dynamic with 1 breath per movement and builds endurance. Holding (Hatha) is calm with 5-10 breaths and deepens stretch and alignment."
      },
      {
        question: "How do you best combine flow and holding?",
        answer: "Start with flow (Sun Salutations), then hold standing poses longer, and finish with long holds in cool-down and Savasana."
      }
    ]
  }
};
