export const mentalTraining = {
  title: {
    de: "Mentales Training für Schwimmer",
    en: "Mental Training for Swimmers"
  },
  description: {
    de: "Visualisierung, Wettkampfangst bewältigen, Fokustechniken und Zielsetzung für bessere Leistung.",
    en: "Visualization, managing race anxiety, focus techniques, and goal setting for better performance."
  },
  content: {
    de: `
<div className="space-y-6">
  <h2 className="text-3xl font-bold text-blue-800 dark:text-blue-200 mb-4">Mentales Training für Schwimmer</h2>

  <p className="text-lg leading-relaxed">
    Der Unterschied zwischen einem guten und einem großartigen Schwimmer liegt oft nicht im Körper, 
    sondern im Kopf. Mentales Training ist kein esoterischer Unsinn - es ist ein wissenschaftlich 
    bewiesenes Werkzeug, das von Olympioniken und Spitzensportlern weltweit eingesetzt wird. 
    Dein Gehirn kann nicht zwischen einer lebhaften Vorstellung und einer realen Erfahrung 
    unterscheiden - nutze das!
  </p>

  <h3 className="text-2xl font-bold mt-8 mb-4">Visualisierung</h3>

  <div className="bg-blue-50 dark:bg-blue-900/40 p-6 rounded-xl border-2 border-blue-200 dark:border-blue-800">
    <p className="text-blue-700 dark:text-blue-300 mb-3">
      Visualisierung bedeutet, dein Rennen oder Training im Kopf durchzuleben - mit allen Sinnen.
    </p>
    <h4 className="font-bold text-blue-800 dark:text-blue-200 mb-2">So funktioniert es:</h4>
    <ol className="list-decimal list-inside space-y-2 text-blue-700 dark:text-blue-300">
      <li><strong>Umgebung:</strong> Setze oder lege dich an einen ruhigen Ort. Schließe die Augen.</li>
      <li><strong>Details:</strong> Stelle dir die Schwimmhalle vor - Geruch, Lichter, das Echo, die Temperatur.</li>
      <li><strong>Körper:</strong> Fühle, wie du auf dem Startblock stehst. Spüre die Spannung in den Beinen.</li>
      <li><strong>Rennen:</strong> Schwimme das komplette Rennen im Kopf. Start, erster Zug, Wende, Endspurt.</li>
      <li><strong>Perfektion:</strong> Stelle dir vor, dass alles perfekt läuft. Kraftvoller Start, saubere Züge, starkes Finish.</li>
      <li><strong>Gefühle:</strong> Fühle die Zufriedenheit und den Stolz beim Anschlag.</li>
    </ol>
    <p className="text-blue-700 dark:text-blue-300 mt-3 italic">
      Tipp: Übe Visualisierung mindestens 5 Minuten täglich, idealerweise vor dem Einschlafen.
    </p>
  </div>

  <h3 className="text-2xl font-bold mt-8 mb-4">Wettkampfangst bewältigen</h3>

  <div className="bg-amber-50 dark:bg-amber-900/40 p-6 rounded-xl border-2 border-amber-200 dark:border-amber-800">
    <p className="text-amber-700 dark:text-amber-300 mb-3">
      Nervosität vor dem Rennen ist normal und sogar nützlich - sie macht dich wach und leistungsbereit. 
      Problematisch wird es, wenn sie dich lähmt.
    </p>
    <h4 className="font-bold text-amber-800 dark:text-amber-200 mb-2">Strategien gegen Wettkampfangst:</h4>
    <ul className="list-disc list-inside space-y-3 text-amber-700 dark:text-amber-300">
      <li><strong>Umdeutung:</strong> Sage dir: "Ich bin nicht nervös, ich bin aufgeregt!" Nervosität und Aufregung fühlen sich körperlich gleich an.</li>
      <li><strong>Box-Breathing:</strong> 4 Sekunden einatmen, 4 halten, 4 ausatmen, 4 halten. 4-5 Zyklen beruhigen das Nervensystem.</li>
      <li><strong>Routine:</strong> Feste Vor-Wettkampf-Routine gibt Sicherheit. Immer gleiche Abfolge: Brille aufsetzen, Arme schwingen, Kopf drehen.</li>
      <li><strong>Fokus nach innen:</strong> Konzentriere dich auf DEIN Rennen, nicht auf die Gegner. Was kannst DU kontrollieren?</li>
      <li><strong>Worst-Case-Akzeptanz:</strong> Was ist das Schlimmste, das passieren kann? Du schwimmst langsam. Und? Dann trainierst du weiter.</li>
    </ul>
  </div>

  <h3 className="text-2xl font-bold mt-8 mb-4">Fokustechniken</h3>

  <div className="bg-blue-50 dark:bg-blue-900/40 p-6 rounded-xl border-2 border-blue-200 dark:border-blue-800">
    <ul className="list-disc list-inside space-y-3 text-blue-700 dark:text-blue-300">
      <li><strong>Mantras:</strong> Kurze, kraftvolle Sätze, die du im Rennen wiederholst. "Stark und lang", "Gleiten und ziehen", "Ich bin schnell".</li>
      <li><strong>Assoziative Technik:</strong> Fokussiere dich auf deine Technik: Wie fühlt sich das Wasser an? Sind meine Züge lang? Ist mein Kick stark?</li>
      <li><strong>Dissoziative Technik:</strong> Bei langen Strecken - denke an etwas Positives, zähle Bahnen, singe im Kopf.</li>
      <li><strong>Trigger-Wörter:</strong> Ein einzelnes Wort, das sofort den richtigen Zustand auslöst: "Feuer!" beim Start, "Gleiten" bei langen Strecken.</li>
      <li><strong>Segmentierung:</strong> Teile lange Rennen in kleine Abschnitte. Nicht "Ich muss 1500m schwimmen", sondern "Noch 3 Bahnen bis zur Hälfte".</li>
    </ul>
  </div>

  <h3 className="text-2xl font-bold mt-8 mb-4">Zielsetzung (SMART-Methode)</h3>

  <div className="bg-green-50 dark:bg-green-900/40 p-6 rounded-xl border-2 border-green-200 dark:border-green-800">
    <table className="w-full border-collapse mt-3">
      <thead>
        <tr className="bg-green-100 dark:bg-green-800/60">
          <th className="border border-green-200 dark:border-green-700 p-2 text-left text-green-800 dark:text-green-200">SMART</th>
          <th className="border border-green-200 dark:border-green-700 p-2 text-left text-green-800 dark:text-green-200">Bedeutung</th>
          <th className="border border-green-200 dark:border-green-700 p-2 text-left text-green-800 dark:text-green-200">Beispiel</th>
        </tr>
      </thead>
      <tbody className="text-green-700 dark:text-green-300">
        <tr><td className="border border-green-200 dark:border-green-700 p-2"><strong>S</strong>pezifisch</td><td className="border border-green-200 dark:border-green-700 p-2">Konkret, nicht vage</td><td className="border border-green-200 dark:border-green-700 p-2">100m Kraul in unter 1:10</td></tr>
        <tr><td className="border border-green-200 dark:border-green-700 p-2"><strong>M</strong>essbar</td><td className="border border-green-200 dark:border-green-700 p-2">In Zahlen messbar</td><td className="border border-green-200 dark:border-green-700 p-2">Zeitnahme mit der Uhr</td></tr>
        <tr><td className="border border-green-200 dark:border-green-700 p-2"><strong>A</strong>ttraktiv</td><td className="border border-green-200 dark:border-green-700 p-2">Motivierend</td><td className="border border-green-200 dark:border-green-700 p-2">Vereinsrekord brechen</td></tr>
        <tr><td className="border border-green-200 dark:border-green-700 p-2"><strong>R</strong>ealistisch</td><td className="border border-green-200 dark:border-green-700 p-2">Erreichbar, aber herausfordernd</td><td className="border border-green-200 dark:border-green-700 p-2">Aktuelle Zeit: 1:15</td></tr>
        <tr><td className="border border-green-200 dark:border-green-700 p-2"><strong>T</strong>erminiert</td><td className="border border-green-200 dark:border-green-700 p-2">Mit Deadline</td><td className="border border-green-200 dark:border-green-700 p-2">Bis zum Stadtmeisterschaft im Juni</td></tr>
      </tbody>
    </table>
  </div>

  <div className="bg-green-50 dark:bg-green-900/40 p-6 rounded-xl border-2 border-green-200 dark:border-green-800 mt-8">
    <h3 className="font-bold text-green-800 dark:text-green-200 mb-4 text-xl">Praktische Übungen</h3>
    <ol className="list-decimal list-inside space-y-3 text-green-700 dark:text-green-300">
      <li><strong>Visualisierung:</strong> 5 Minuten Rennvisualisierung vor dem Einschlafen - 7 Tage lang.</li>
      <li><strong>Box-Breathing:</strong> 5 Zyklen Box-Breathing vor dem nächsten Training. Spüre die Ruhe.</li>
      <li><strong>SMART-Ziel:</strong> Formuliere ein SMART-Ziel für die nächsten 3 Monate.</li>
    </ol>
  </div>
</div>
    `,
    en: `
<div className="space-y-6">
  <h2 className="text-3xl font-bold text-blue-800 dark:text-blue-200 mb-4">Mental Training for Swimmers</h2>

  <p className="text-lg leading-relaxed">
    The difference between a good and a great swimmer often lies not in the body but in the mind. 
    Mental training isn't esoteric nonsense - it's a scientifically proven tool used by Olympians 
    and elite athletes worldwide. Your brain cannot distinguish between a vivid imagination and 
    a real experience - use that to your advantage!
  </p>

  <h3 className="text-2xl font-bold mt-8 mb-4">Visualization</h3>

  <div className="bg-blue-50 dark:bg-blue-900/40 p-6 rounded-xl border-2 border-blue-200 dark:border-blue-800">
    <p className="text-blue-700 dark:text-blue-300 mb-3">
      Visualization means mentally living through your race or training - with all senses engaged.
    </p>
    <h4 className="font-bold text-blue-800 dark:text-blue-200 mb-2">How it works:</h4>
    <ol className="list-decimal list-inside space-y-2 text-blue-700 dark:text-blue-300">
      <li><strong>Environment:</strong> Sit or lie down somewhere quiet. Close your eyes.</li>
      <li><strong>Details:</strong> Imagine the pool - the smell, lights, the echo, the temperature.</li>
      <li><strong>Body:</strong> Feel yourself standing on the starting block. Feel the tension in your legs.</li>
      <li><strong>Race:</strong> Swim the entire race in your mind. Start, first stroke, turns, final sprint.</li>
      <li><strong>Perfection:</strong> Imagine everything going perfectly. Powerful start, clean strokes, strong finish.</li>
      <li><strong>Feelings:</strong> Feel the satisfaction and pride at the touch pad.</li>
    </ol>
    <p className="text-blue-700 dark:text-blue-300 mt-3 italic">
      Tip: Practice visualization at least 5 minutes daily, ideally before falling asleep.
    </p>
  </div>

  <h3 className="text-2xl font-bold mt-8 mb-4">Managing Race Anxiety</h3>

  <div className="bg-amber-50 dark:bg-amber-900/40 p-6 rounded-xl border-2 border-amber-200 dark:border-amber-800">
    <p className="text-amber-700 dark:text-amber-300 mb-3">
      Pre-race nervousness is normal and even useful - it makes you alert and ready to perform. 
      It becomes problematic only when it paralyzes you.
    </p>
    <h4 className="font-bold text-amber-800 dark:text-amber-200 mb-2">Strategies against race anxiety:</h4>
    <ul className="list-disc list-inside space-y-3 text-amber-700 dark:text-amber-300">
      <li><strong>Reframing:</strong> Tell yourself: "I'm not nervous, I'm excited!" Nervousness and excitement feel physically the same.</li>
      <li><strong>Box breathing:</strong> Inhale 4 seconds, hold 4, exhale 4, hold 4. 4-5 cycles calm the nervous system.</li>
      <li><strong>Routine:</strong> A fixed pre-competition routine provides security. Same sequence: put on goggles, swing arms, rotate head.</li>
      <li><strong>Internal focus:</strong> Focus on YOUR race, not opponents. What can YOU control?</li>
      <li><strong>Worst-case acceptance:</strong> What's the worst that can happen? You swim slowly. So what? You keep training.</li>
    </ul>
  </div>

  <h3 className="text-2xl font-bold mt-8 mb-4">Focus Techniques</h3>

  <div className="bg-blue-50 dark:bg-blue-900/40 p-6 rounded-xl border-2 border-blue-200 dark:border-blue-800">
    <ul className="list-disc list-inside space-y-3 text-blue-700 dark:text-blue-300">
      <li><strong>Mantras:</strong> Short, powerful phrases you repeat during a race. "Strong and long", "Glide and pull", "I am fast".</li>
      <li><strong>Associative technique:</strong> Focus on your technique: How does the water feel? Are my strokes long? Is my kick strong?</li>
      <li><strong>Dissociative technique:</strong> For long distances - think about something positive, count laps, sing in your head.</li>
      <li><strong>Trigger words:</strong> A single word that instantly puts you in the right state: "Fire!" at the start, "Glide" for long distances.</li>
      <li><strong>Segmentation:</strong> Divide long races into small sections. Not "I have to swim 1500m" but "3 more laps to halfway".</li>
    </ul>
  </div>

  <h3 className="text-2xl font-bold mt-8 mb-4">Goal Setting (SMART Method)</h3>

  <div className="bg-green-50 dark:bg-green-900/40 p-6 rounded-xl border-2 border-green-200 dark:border-green-800">
    <table className="w-full border-collapse mt-3">
      <thead>
        <tr className="bg-green-100 dark:bg-green-800/60">
          <th className="border border-green-200 dark:border-green-700 p-2 text-left text-green-800 dark:text-green-200">SMART</th>
          <th className="border border-green-200 dark:border-green-700 p-2 text-left text-green-800 dark:text-green-200">Meaning</th>
          <th className="border border-green-200 dark:border-green-700 p-2 text-left text-green-800 dark:text-green-200">Example</th>
        </tr>
      </thead>
      <tbody className="text-green-700 dark:text-green-300">
        <tr><td className="border border-green-200 dark:border-green-700 p-2"><strong>S</strong>pecific</td><td className="border border-green-200 dark:border-green-700 p-2">Concrete, not vague</td><td className="border border-green-200 dark:border-green-700 p-2">100m freestyle under 1:10</td></tr>
        <tr><td className="border border-green-200 dark:border-green-700 p-2"><strong>M</strong>easurable</td><td className="border border-green-200 dark:border-green-700 p-2">Quantifiable</td><td className="border border-green-200 dark:border-green-700 p-2">Timed with a stopwatch</td></tr>
        <tr><td className="border border-green-200 dark:border-green-700 p-2"><strong>A</strong>chievable</td><td className="border border-green-200 dark:border-green-700 p-2">Motivating</td><td className="border border-green-200 dark:border-green-700 p-2">Break club record</td></tr>
        <tr><td className="border border-green-200 dark:border-green-700 p-2"><strong>R</strong>ealistic</td><td className="border border-green-200 dark:border-green-700 p-2">Reachable but challenging</td><td className="border border-green-200 dark:border-green-700 p-2">Current time: 1:15</td></tr>
        <tr><td className="border border-green-200 dark:border-green-700 p-2"><strong>T</strong>ime-bound</td><td className="border border-green-200 dark:border-green-700 p-2">With a deadline</td><td className="border border-green-200 dark:border-green-700 p-2">By city championships in June</td></tr>
      </tbody>
    </table>
  </div>

  <div className="bg-green-50 dark:bg-green-900/40 p-6 rounded-xl border-2 border-green-200 dark:border-green-800 mt-8">
    <h3 className="font-bold text-green-800 dark:text-green-200 mb-4 text-xl">Practice Exercises</h3>
    <ol className="list-decimal list-inside space-y-3 text-green-700 dark:text-green-300">
      <li><strong>Visualization:</strong> 5-minute race visualization before bed - for 7 days straight.</li>
      <li><strong>Box breathing:</strong> 5 cycles of box breathing before your next training. Feel the calm.</li>
      <li><strong>SMART goal:</strong> Formulate one SMART goal for the next 3 months.</li>
    </ol>
  </div>
</div>
    `
  },
  task: {
    de: {
      title: "Mentales Training starten",
      description: "Integriere mentale Übungen in deine Schwimmroutine.",
      checklist: [
        { text: "Übe 5 Minuten Rennvisualisierung vor dem Einschlafen", checked: false },
        { text: "Probiere Box-Breathing vor deinem nächsten Training aus", checked: false },
        { text: "Wähle ein persönliches Mantra für dein nächstes Rennen/Training", checked: false },
        { text: "Formuliere ein SMART-Ziel für die nächsten 3 Monate", checked: false }
      ]
    },
    en: {
      title: "Start Mental Training",
      description: "Integrate mental exercises into your swimming routine.",
      checklist: [
        { text: "Practice 5-minute race visualization before bed", checked: false },
        { text: "Try box breathing before your next training", checked: false },
        { text: "Choose a personal mantra for your next race/training", checked: false },
        { text: "Formulate one SMART goal for the next 3 months", checked: false }
      ]
    }
  },
  quiz: {
    de: [
      { question: "Wie funktioniert Visualisierung im Sport?", answer: "Man stellt sich ein Rennen oder Training mit allen Sinnen lebendig vor. Das Gehirn kann nicht zwischen lebhafter Vorstellung und realer Erfahrung unterscheiden, wodurch neuronale Bahnen gestärkt werden." },
      { question: "Was ist Box-Breathing?", answer: "Eine Atemtechnik: 4 Sekunden einatmen, 4 Sekunden halten, 4 Sekunden ausatmen, 4 Sekunden halten. 4-5 Zyklen beruhigen das Nervensystem und reduzieren Wettkampfangst." },
      { question: "Wofür steht SMART bei der Zielsetzung?", answer: "Spezifisch, Messbar, Attraktiv, Realistisch, Terminiert. Ein SMART-Ziel ist konkret, messbar, motivierend, erreichbar und hat eine Deadline." }
    ],
    en: [
      { question: "How does visualization work in sports?", answer: "You vividly imagine a race or training with all senses. The brain can't distinguish between vivid imagination and real experience, strengthening neural pathways." },
      { question: "What is box breathing?", answer: "A breathing technique: inhale 4 seconds, hold 4 seconds, exhale 4 seconds, hold 4 seconds. 4-5 cycles calm the nervous system and reduce race anxiety." },
      { question: "What does SMART stand for in goal setting?", answer: "Specific, Measurable, Achievable, Realistic, Time-bound. A SMART goal is concrete, quantifiable, motivating, reachable, and has a deadline." }
    ]
  }
};
