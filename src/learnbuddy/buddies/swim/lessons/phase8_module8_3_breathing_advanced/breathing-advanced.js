export const breathingAdvanced = {
  title: {
    de: "Fortgeschrittene Atemtechniken",
    en: "Advanced Breathing Techniques"
  },
  description: {
    de: "Bilaterale Atmung, Atemmuster für jede Lage, Atmung unter Belastung und Atemkontrolle im Wettkampf.",
    en: "Bilateral breathing, breathing patterns for each stroke, breathing under pressure, and breath control in competition."
  },
  content: {
    de: `
<div className="space-y-6">
  <h2 className="text-3xl font-bold text-blue-800 dark:text-blue-200 mb-4">Fortgeschrittene Atemtechniken</h2>

  <p className="text-lg leading-relaxed">
    Atmen ist der am meisten unterschätzte Aspekt beim Schwimmen. Anfänger atmen oft panisch, 
    Fortgeschrittene atmen ineffizient. Perfekte Atemtechnik ist der Schlüssel zu mehr Ausdauer, 
    besserer Körperlage und schnelleren Zeiten. In dieser Lektion lernst du fortgeschrittene 
    Atemmuster, die dein Schwimmen auf ein neues Level heben.
  </p>

  <h3 className="text-2xl font-bold mt-8 mb-4">Bilaterale Atmung (Kraul)</h3>

  <div className="bg-blue-50 dark:bg-blue-900/40 p-6 rounded-xl border-2 border-blue-200 dark:border-blue-800">
    <p className="text-blue-700 dark:text-blue-300 mb-3">
      Bilaterale Atmung bedeutet, abwechselnd auf beiden Seiten zu atmen - typischerweise alle 3 Züge.
    </p>
    <h4 className="font-bold text-blue-800 dark:text-blue-200 mb-2">Vorteile:</h4>
    <ul className="list-disc list-inside space-y-2 text-blue-700 dark:text-blue-300">
      <li><strong>Symmetrischer Armzug:</strong> Verhindert muskuläre Dysbalancen und Schieflagen.</li>
      <li><strong>Bessere Orientierung:</strong> Du siehst beide Seiten - wichtig im Freiwasser und beim Wettkampf.</li>
      <li><strong>Gleichmäßige Rotation:</strong> Die Körperrotation wird symmetrisch, was den Vortrieb verbessert.</li>
      <li><strong>Taktischer Vorteil:</strong> Du kannst im Rennen jederzeit den Gegner auf beiden Seiten beobachten.</li>
    </ul>
    <h4 className="font-bold text-blue-800 dark:text-blue-200 mt-4 mb-2">Lernprogression:</h4>
    <ol className="list-decimal list-inside space-y-2 text-blue-700 dark:text-blue-300">
      <li>Beginne mit einzelnen Bahnen: Hinbahn rechts, Rückbahn links atmen.</li>
      <li>Dann 3er-Atmung auf kurze Strecken (25m).</li>
      <li>Steigere auf 50m, dann 100m mit 3er-Atmung.</li>
      <li>Ziel: 3er-Atmung als Standard im Training.</li>
    </ol>
  </div>

  <h3 className="text-2xl font-bold mt-8 mb-4">Atemmuster je nach Lage</h3>

  <div className="bg-green-50 dark:bg-green-900/40 p-6 rounded-xl border-2 border-green-200 dark:border-green-800">
    <table className="w-full border-collapse mt-3">
      <thead>
        <tr className="bg-green-100 dark:bg-green-800/60">
          <th className="border border-green-200 dark:border-green-700 p-2 text-left text-green-800 dark:text-green-200">Lage</th>
          <th className="border border-green-200 dark:border-green-700 p-2 text-left text-green-800 dark:text-green-200">Atemmuster</th>
          <th className="border border-green-200 dark:border-green-700 p-2 text-left text-green-800 dark:text-green-200">Technik</th>
        </tr>
      </thead>
      <tbody className="text-green-700 dark:text-green-300">
        <tr>
          <td className="border border-green-200 dark:border-green-700 p-2"><strong>Kraul</strong></td>
          <td className="border border-green-200 dark:border-green-700 p-2">Alle 2, 3 oder 5 Züge</td>
          <td className="border border-green-200 dark:border-green-700 p-2">Kopf dreht mit Körperrotation, ein Auge bleibt im Wasser</td>
        </tr>
        <tr>
          <td className="border border-green-200 dark:border-green-700 p-2"><strong>Brust</strong></td>
          <td className="border border-green-200 dark:border-green-700 p-2">Jeder Zug</td>
          <td className="border border-green-200 dark:border-green-700 p-2">Einatmen beim Heben, Ausatmen beim Gleiten unter Wasser</td>
        </tr>
        <tr>
          <td className="border border-green-200 dark:border-green-700 p-2"><strong>Rücken</strong></td>
          <td className="border border-green-200 dark:border-green-700 p-2">Rhythmisch (Ein bei einem Arm, Aus beim anderen)</td>
          <td className="border border-green-200 dark:border-green-700 p-2">Gesicht über Wasser, fester Atemrhythmus an Armzüge koppeln</td>
        </tr>
        <tr>
          <td className="border border-green-200 dark:border-green-700 p-2"><strong>Delfin</strong></td>
          <td className="border border-green-200 dark:border-green-700 p-2">Jeder oder jeder 2. Zug</td>
          <td className="border border-green-200 dark:border-green-700 p-2">Kopf geht mit Körperwelle nach vorne, nicht nach oben</td>
        </tr>
      </tbody>
    </table>
  </div>

  <h3 className="text-2xl font-bold mt-8 mb-4">Hypoxisches Training (Atemreduktion)</h3>

  <div className="bg-amber-50 dark:bg-amber-900/40 p-6 rounded-xl border-2 border-amber-200 dark:border-amber-800">
    <p className="text-amber-700 dark:text-amber-300 mb-3">
      Hypoxisches Training reduziert bewusst die Atemfrequenz, um die CO2-Toleranz zu steigern 
      und die Atemanpassung unter Belastung zu verbessern.
    </p>
    <ul className="list-disc list-inside space-y-2 text-amber-700 dark:text-amber-300">
      <li><strong>Stufe 1:</strong> 4x50m mit 3er-Atmung, 15s Pause.</li>
      <li><strong>Stufe 2:</strong> 4x50m mit 5er-Atmung, 20s Pause.</li>
      <li><strong>Stufe 3:</strong> 4x50m mit 7er-Atmung, 30s Pause.</li>
      <li><strong>Stufe 4:</strong> 25m komplett ohne Atmung (nur für Fortgeschrittene!).</li>
    </ul>
    <div className="bg-red-100 dark:bg-red-900/60 p-3 rounded-lg mt-3">
      <p className="text-red-700 dark:text-red-300 font-bold">Sicherheitshinweis: Niemals alleine hypoxisches Training machen! Immer mit Trainingspartner oder unter Aufsicht.</p>
    </div>
  </div>

  <h3 className="text-2xl font-bold mt-8 mb-4">Atmung unter Wettkampf-Belastung</h3>

  <div className="bg-blue-50 dark:bg-blue-900/40 p-6 rounded-xl border-2 border-blue-200 dark:border-blue-800">
    <ul className="list-disc list-inside space-y-3 text-blue-700 dark:text-blue-300">
      <li><strong>Sprint (50m):</strong> Minimale Atmung. Maximal 2-3 Atemzüge auf 50m Kraul. Jeder Atemzug kostet Zeit.</li>
      <li><strong>Mittelstrecke (100-200m):</strong> 2er-Atmung für maximale Sauerstoffversorgung bei hohem Tempo.</li>
      <li><strong>Langstrecke (400m+):</strong> 3er-Atmung für Effizienz, bei Bedarf auf 2er wechseln.</li>
      <li><strong>Start & Wenden:</strong> Nach dem Start und jeder Wende - 3 Delfinkicks unter Wasser, dann erster Atemzug verzögern.</li>
    </ul>
  </div>

  <div className="bg-green-50 dark:bg-green-900/40 p-6 rounded-xl border-2 border-green-200 dark:border-green-800 mt-8">
    <h3 className="font-bold text-green-800 dark:text-green-200 mb-4 text-xl">Praktische Übungen</h3>
    <ol className="list-decimal list-inside space-y-3 text-green-700 dark:text-green-300">
      <li><strong>Bilateral-Challenge:</strong> Schwimme 400m mit durchgehender 3er-Atmung. Keine Ausnahmen!</li>
      <li><strong>Hypoxischer Stufentest:</strong> Je 50m mit 3er, 5er und 7er-Atmung. Wie fühlst du dich?</li>
      <li><strong>Sprint-Atmung:</strong> 4x25m Sprint mit nur 1 Atemzug pro Bahn. Notiere die Zeiten.</li>
    </ol>
  </div>
</div>
    `,
    en: `
<div className="space-y-6">
  <h2 className="text-3xl font-bold text-blue-800 dark:text-blue-200 mb-4">Advanced Breathing Techniques</h2>

  <p className="text-lg leading-relaxed">
    Breathing is the most underrated aspect of swimming. Beginners often breathe in panic, 
    intermediate swimmers breathe inefficiently. Perfect breathing technique is the key to more 
    endurance, better body position, and faster times. In this lesson, you'll learn advanced 
    breathing patterns that will take your swimming to the next level.
  </p>

  <h3 className="text-2xl font-bold mt-8 mb-4">Bilateral Breathing (Freestyle)</h3>

  <div className="bg-blue-50 dark:bg-blue-900/40 p-6 rounded-xl border-2 border-blue-200 dark:border-blue-800">
    <p className="text-blue-700 dark:text-blue-300 mb-3">
      Bilateral breathing means alternating breathing on both sides - typically every 3 strokes.
    </p>
    <h4 className="font-bold text-blue-800 dark:text-blue-200 mb-2">Benefits:</h4>
    <ul className="list-disc list-inside space-y-2 text-blue-700 dark:text-blue-300">
      <li><strong>Symmetrical stroke:</strong> Prevents muscular imbalances and body drift.</li>
      <li><strong>Better orientation:</strong> You see both sides - crucial in open water and competition.</li>
      <li><strong>Even rotation:</strong> Body rotation becomes symmetrical, improving propulsion.</li>
      <li><strong>Tactical advantage:</strong> You can observe competitors on both sides during a race.</li>
    </ul>
    <h4 className="font-bold text-blue-800 dark:text-blue-200 mt-4 mb-2">Learning Progression:</h4>
    <ol className="list-decimal list-inside space-y-2 text-blue-700 dark:text-blue-300">
      <li>Start with single laps: breathe right going out, left coming back.</li>
      <li>Then 3-stroke breathing on short distances (25m).</li>
      <li>Progress to 50m, then 100m with 3-stroke breathing.</li>
      <li>Goal: 3-stroke breathing as your training default.</li>
    </ol>
  </div>

  <h3 className="text-2xl font-bold mt-8 mb-4">Breathing Patterns by Stroke</h3>

  <div className="bg-green-50 dark:bg-green-900/40 p-6 rounded-xl border-2 border-green-200 dark:border-green-800">
    <table className="w-full border-collapse mt-3">
      <thead>
        <tr className="bg-green-100 dark:bg-green-800/60">
          <th className="border border-green-200 dark:border-green-700 p-2 text-left text-green-800 dark:text-green-200">Stroke</th>
          <th className="border border-green-200 dark:border-green-700 p-2 text-left text-green-800 dark:text-green-200">Pattern</th>
          <th className="border border-green-200 dark:border-green-700 p-2 text-left text-green-800 dark:text-green-200">Technique</th>
        </tr>
      </thead>
      <tbody className="text-green-700 dark:text-green-300">
        <tr>
          <td className="border border-green-200 dark:border-green-700 p-2"><strong>Freestyle</strong></td>
          <td className="border border-green-200 dark:border-green-700 p-2">Every 2, 3, or 5 strokes</td>
          <td className="border border-green-200 dark:border-green-700 p-2">Head turns with body rotation, one eye stays in water</td>
        </tr>
        <tr>
          <td className="border border-green-200 dark:border-green-700 p-2"><strong>Breaststroke</strong></td>
          <td className="border border-green-200 dark:border-green-700 p-2">Every stroke</td>
          <td className="border border-green-200 dark:border-green-700 p-2">Inhale while lifting, exhale during glide underwater</td>
        </tr>
        <tr>
          <td className="border border-green-200 dark:border-green-700 p-2"><strong>Backstroke</strong></td>
          <td className="border border-green-200 dark:border-green-700 p-2">Rhythmic (in with one arm, out with the other)</td>
          <td className="border border-green-200 dark:border-green-700 p-2">Face above water, fixed breathing rhythm linked to arm strokes</td>
        </tr>
        <tr>
          <td className="border border-green-200 dark:border-green-700 p-2"><strong>Butterfly</strong></td>
          <td className="border border-green-200 dark:border-green-700 p-2">Every stroke or every 2nd</td>
          <td className="border border-green-200 dark:border-green-700 p-2">Head goes forward with body wave, not upward</td>
        </tr>
      </tbody>
    </table>
  </div>

  <h3 className="text-2xl font-bold mt-8 mb-4">Hypoxic Training (Breath Reduction)</h3>

  <div className="bg-amber-50 dark:bg-amber-900/40 p-6 rounded-xl border-2 border-amber-200 dark:border-amber-800">
    <p className="text-amber-700 dark:text-amber-300 mb-3">
      Hypoxic training deliberately reduces breathing frequency to increase CO2 tolerance 
      and improve breathing adaptation under stress.
    </p>
    <ul className="list-disc list-inside space-y-2 text-amber-700 dark:text-amber-300">
      <li><strong>Level 1:</strong> 4x50m with 3-stroke breathing, 15s rest.</li>
      <li><strong>Level 2:</strong> 4x50m with 5-stroke breathing, 20s rest.</li>
      <li><strong>Level 3:</strong> 4x50m with 7-stroke breathing, 30s rest.</li>
      <li><strong>Level 4:</strong> 25m with no breathing (advanced only!).</li>
    </ul>
    <div className="bg-red-100 dark:bg-red-900/60 p-3 rounded-lg mt-3">
      <p className="text-red-700 dark:text-red-300 font-bold">Safety note: Never do hypoxic training alone! Always with a training partner or under supervision.</p>
    </div>
  </div>

  <h3 className="text-2xl font-bold mt-8 mb-4">Breathing Under Race Pressure</h3>

  <div className="bg-blue-50 dark:bg-blue-900/40 p-6 rounded-xl border-2 border-blue-200 dark:border-blue-800">
    <ul className="list-disc list-inside space-y-3 text-blue-700 dark:text-blue-300">
      <li><strong>Sprint (50m):</strong> Minimal breathing. Maximum 2-3 breaths over 50m freestyle. Every breath costs time.</li>
      <li><strong>Middle distance (100-200m):</strong> 2-stroke breathing for maximum oxygen at high speed.</li>
      <li><strong>Long distance (400m+):</strong> 3-stroke breathing for efficiency, switch to 2-stroke when needed.</li>
      <li><strong>Starts & turns:</strong> After start and each turn - 3 dolphin kicks underwater, then delay first breath.</li>
    </ul>
  </div>

  <div className="bg-green-50 dark:bg-green-900/40 p-6 rounded-xl border-2 border-green-200 dark:border-green-800 mt-8">
    <h3 className="font-bold text-green-800 dark:text-green-200 mb-4 text-xl">Practice Exercises</h3>
    <ol className="list-decimal list-inside space-y-3 text-green-700 dark:text-green-300">
      <li><strong>Bilateral challenge:</strong> Swim 400m with consistent 3-stroke breathing. No exceptions!</li>
      <li><strong>Hypoxic step test:</strong> 50m each with 3, 5, and 7-stroke breathing. How do you feel?</li>
      <li><strong>Sprint breathing:</strong> 4x25m sprint with only 1 breath per lap. Record the times.</li>
    </ol>
  </div>
</div>
    `
  },
  task: {
    de: {
      title: "Atemtechniken meistern",
      description: "Verbessere deine Atemtechnik mit fortgeschrittenen Übungen.",
      checklist: [
        { text: "Schwimme 400m mit durchgehender bilateraler (3er) Atmung", checked: false },
        { text: "Absolviere den hypoxischen Stufentest (3er, 5er, 7er Atmung)", checked: false },
        { text: "Übe Sprint-Atmung: 4x25m mit minimaler Atmung", checked: false },
        { text: "Koppele bei Rücken die Atmung bewusst an die Armzüge", checked: false }
      ]
    },
    en: {
      title: "Master Breathing Techniques",
      description: "Improve your breathing technique with advanced exercises.",
      checklist: [
        { text: "Swim 400m with consistent bilateral (3-stroke) breathing", checked: false },
        { text: "Complete the hypoxic step test (3, 5, 7-stroke breathing)", checked: false },
        { text: "Practice sprint breathing: 4x25m with minimal breathing", checked: false },
        { text: "Consciously link breathing to arm strokes during backstroke", checked: false }
      ]
    }
  },
  quiz: {
    de: [
      { question: "Was bedeutet bilaterale Atmung?", answer: "Bilaterale Atmung bedeutet abwechselnd auf beiden Seiten zu atmen, typischerweise alle 3 Armzüge. Dies fördert symmetrischen Armzug, bessere Orientierung und gleichmäßige Körperrotation." },
      { question: "Warum ist hypoxisches Training effektiv?", answer: "Hypoxisches Training steigert die CO2-Toleranz und verbessert die Atemanpassung unter Belastung. Durch bewusste Reduzierung der Atemfrequenz lernt der Körper, effizienter mit Sauerstoff umzugehen." },
      { question: "Wie viele Atemzüge sollte man auf 50m Sprint nehmen?", answer: "Maximal 2-3 Atemzüge auf 50m Kraul-Sprint. Jeder Atemzug kostet Zeit durch die Kopfdrehung und die damit verbundene Verlangsamung." }
    ],
    en: [
      { question: "What is bilateral breathing?", answer: "Bilateral breathing means alternating breathing on both sides, typically every 3 arm strokes. This promotes symmetrical stroke, better orientation, and even body rotation." },
      { question: "Why is hypoxic training effective?", answer: "Hypoxic training increases CO2 tolerance and improves breathing adaptation under stress. By deliberately reducing breathing frequency, the body learns to use oxygen more efficiently." },
      { question: "How many breaths should you take in a 50m sprint?", answer: "Maximum 2-3 breaths over 50m freestyle sprint. Each breath costs time due to head rotation and the associated deceleration." }
    ]
  }
};
