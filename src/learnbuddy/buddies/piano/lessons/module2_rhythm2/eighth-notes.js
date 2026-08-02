export const eighthNotes = {
  title: { de: "Achtelnoten", en: "Eighth Notes" },
  description: { de: "Doppelt so schnell wie Viertelnoten – die Achtelnote.", en: "Twice as fast as quarter notes – the eighth note." },
  content: {
    de: `
### Achtelnoten: Doppeltes Tempo

Die **Achtelnote** dauert nur einen **halben Schlag** – sie ist doppelt so schnell wie die Viertelnote. In einen 4/4-Takt passen **8 Achtelnoten**.

<div className="bg-indigo-50 dark:bg-indigo-900/20 p-6 rounded-xl border-l-4 border-indigo-500 my-6">
  <h4 className="font-bold text-indigo-800 dark:text-indigo-200 mb-2">Aussehen</h4>
  <p className="text-sm text-indigo-700 dark:text-indigo-300">
    Die Achtelnote sieht aus wie eine Viertelnote mit einem <strong>Fähnchen</strong> am Hals. Wenn mehrere hintereinander stehen, werden sie durch einen <strong>Balken</strong> verbunden.
  </p>
</div>

### Zählen mit "Und"

<div className="bg-amber-50 dark:bg-amber-900/20 p-6 rounded-xl my-6">
  <h4 className="font-bold text-amber-800 dark:text-amber-200 mb-3">So zählt man Achtelnoten</h4>
  <p className="text-sm text-amber-700 dark:text-amber-300 mb-2">
    Achtelnoten werden mit <strong>"und"</strong> gezählt:
  </p>
  <p className="text-sm text-amber-700 dark:text-amber-300 font-mono">
    "1 und 2 und 3 und 4 und"
  </p>
  <p className="text-sm text-amber-700 dark:text-amber-300 mt-2">
    Jede Zahl UND jedes "und" = eine Achtelnote. Pro Schlag spielst du <strong>zwei</strong> Noten.
  </p>
</div>

### Kombinationen

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border-2 border-green-300 dark:border-green-700 my-6">
  <h4 className="font-bold text-green-800 dark:text-green-200 mb-3">Mische Viertel und Achtel</h4>
  <ul className="text-sm text-green-700 dark:text-green-300 space-y-2 list-disc list-inside">
    <li><strong>Muster 1:</strong> Viertel – Viertel – Achtel-Achtel – Viertel</li>
    <li><strong>Muster 2:</strong> Achtel-Achtel – Achtel-Achtel – Halbe</li>
    <li>Klopfe die Muster zuerst, dann spiele sie auf dem Klavier</li>
  </ul>
</div>
    `,
    en: `
### Eighth Notes: Double Speed

The **eighth note** lasts only **half a beat** – it's twice as fast as the quarter note. **8 eighth notes** fit in a 4/4 measure.

<div className="bg-indigo-50 dark:bg-indigo-900/20 p-6 rounded-xl border-l-4 border-indigo-500 my-6">
  <h4 className="font-bold text-indigo-800 dark:text-indigo-200 mb-2">Appearance</h4>
  <p className="text-sm text-indigo-700 dark:text-indigo-300">
    The eighth note looks like a quarter note with a <strong>flag</strong> on the stem. When several appear in a row, they're connected by a <strong>beam</strong>.
  </p>
</div>

### Counting with "And"

<div className="bg-amber-50 dark:bg-amber-900/20 p-6 rounded-xl my-6">
  <h4 className="font-bold text-amber-800 dark:text-amber-200 mb-3">How to Count Eighth Notes</h4>
  <p className="text-sm text-amber-700 dark:text-amber-300 mb-2">
    Eighth notes are counted with <strong>"and"</strong>:
  </p>
  <p className="text-sm text-amber-700 dark:text-amber-300 font-mono">
    "1 and 2 and 3 and 4 and"
  </p>
  <p className="text-sm text-amber-700 dark:text-amber-300 mt-2">
    Each number AND each "and" = one eighth note. You play <strong>two</strong> notes per beat.
  </p>
</div>

### Combinations

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border-2 border-green-300 dark:border-green-700 my-6">
  <h4 className="font-bold text-green-800 dark:text-green-200 mb-3">Mix Quarters and Eighths</h4>
  <ul className="text-sm text-green-700 dark:text-green-300 space-y-2 list-disc list-inside">
    <li><strong>Pattern 1:</strong> Quarter – Quarter – Eighth-Eighth – Quarter</li>
    <li><strong>Pattern 2:</strong> Eighth-Eighth – Eighth-Eighth – Half</li>
    <li>Tap the patterns first, then play them on the piano</li>
  </ul>
</div>
    `
  },
  task: {
    de: {
      title: "Achtelnoten üben",
      description: "Lerne Achtelnoten zu zählen und zu spielen.",
      checklist: [
        { text: "Zähle laut: '1 und 2 und 3 und 4 und' im gleichmäßigen Tempo", checked: false },
        { text: "Klopfe 8 Achtelnoten pro Takt gleichmäßig", checked: false },
        { text: "Spiele Achtelnoten C-D-E-F-G-F-E-D auf dem Klavier", checked: false },
        { text: "Mische Viertelnoten und Achtelnoten in einem Muster", checked: false }
      ]
    },
    en: {
      title: "Practice Eighth Notes",
      description: "Learn to count and play eighth notes.",
      checklist: [
        { text: "Count aloud: '1 and 2 and 3 and 4 and' at steady tempo", checked: false },
        { text: "Tap 8 eighth notes per measure evenly", checked: false },
        { text: "Play eighth notes C-D-E-F-G-F-E-D on the piano", checked: false },
        { text: "Mix quarter notes and eighth notes in a pattern", checked: false }
      ]
    }
  },
  quiz: {
    de: [
      { question: "Wie viele Achtelnoten passen in einen 4/4-Takt?", answer: "8 Achtelnoten passen in einen 4/4-Takt. Jede Achtelnote dauert einen halben Schlag, also passen pro Schlag 2 Achtelnoten, und bei 4 Schlägen sind das 8 insgesamt." },
      { question: "Wie zählt man Achtelnoten?", answer: "Man zählt '1 und 2 und 3 und 4 und'. Die Zahlen fallen auf die Hauptschläge (downbeats), das 'und' auf die Nebenschläge (upbeats). So entstehen 8 gleichmäßig verteilte Zählzeiten." }
    ],
    en: [
      { question: "How many eighth notes fit in a 4/4 measure?", answer: "8 eighth notes fit in a 4/4 measure. Each eighth note lasts half a beat, so 2 eighth notes fit per beat, and with 4 beats that's 8 total." },
      { question: "How do you count eighth notes?", answer: "Count '1 and 2 and 3 and 4 and'. The numbers fall on the main beats (downbeats), the 'and' on the off-beats (upbeats). This creates 8 evenly distributed count points." }
    ]
  }
};
