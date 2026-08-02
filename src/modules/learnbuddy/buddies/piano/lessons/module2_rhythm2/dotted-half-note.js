export const dottedHalfNote = {
  title: { de: "Punktierte Halbe Note", en: "Dotted Half Note" },
  description: { de: "Der Punkt verlängert eine Note um die Hälfte ihres Wertes.", en: "The dot extends a note by half its value." },
  content: {
    de: `
### Die punktierte Halbe Note: 3 Schläge

Ein **Punkt** hinter einer Note verlängert sie um die **Hälfte ihres eigenen Wertes**. Eine halbe Note dauert 2 Schläge. Die Hälfte davon ist 1 Schlag. Also: **2 + 1 = 3 Schläge**.

<div className="bg-indigo-50 dark:bg-indigo-900/20 p-6 rounded-xl border-l-4 border-indigo-500 my-6">
  <h4 className="font-bold text-indigo-800 dark:text-indigo-200 mb-2">Die Punktregel</h4>
  <p className="text-sm text-indigo-700 dark:text-indigo-300">
    <strong>Notenwert + Hälfte des Notenwerts = Punktierter Wert</strong><br/>
    Halbe (2) + Hälfte der Halben (1) = Punktierte Halbe (3 Schläge)
  </p>
</div>

### Praktische Anwendung

<div className="bg-amber-50 dark:bg-amber-900/20 p-6 rounded-xl my-6">
  <h4 className="font-bold text-amber-800 dark:text-amber-200 mb-3">Wo kommt die punktierte Halbe vor?</h4>
  <p className="text-sm text-amber-700 dark:text-amber-300 mb-2">
    Die punktierte Halbe ist besonders wichtig im <strong>3/4-Takt</strong> (Walzer-Takt): Dort füllt sie den ganzen Takt (3 Schläge).
  </p>
  <p className="text-sm text-amber-700 dark:text-amber-300">
    Im 4/4-Takt: Punktierte Halbe (3 Schläge) + Viertelnote (1 Schlag) = 4 Schläge ✓
  </p>
</div>

### Übung

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border-2 border-green-300 dark:border-green-700 my-6">
  <h4 className="font-bold text-green-800 dark:text-green-200 mb-3">Punktierte Halbe spielen</h4>
  <ol className="text-sm text-green-700 dark:text-green-300 space-y-2 list-decimal list-inside">
    <li>Spiele C und halte es 3 Schläge lang (zähle "1-2-3")</li>
    <li>Dann D als Viertelnote auf Schlag 4</li>
    <li>Muster im 4/4-Takt: Punktierte Halbe C + Viertel D | Punktierte Halbe E + Viertel F</li>
    <li>Spüre den Unterschied zwischen 2 Schlägen (Halbe) und 3 Schlägen (punktierte Halbe)</li>
  </ol>
</div>
    `,
    en: `
### The Dotted Half Note: 3 Beats

A **dot** after a note extends it by **half its own value**. A half note lasts 2 beats. Half of that is 1 beat. So: **2 + 1 = 3 beats**.

<div className="bg-indigo-50 dark:bg-indigo-900/20 p-6 rounded-xl border-l-4 border-indigo-500 my-6">
  <h4 className="font-bold text-indigo-800 dark:text-indigo-200 mb-2">The Dot Rule</h4>
  <p className="text-sm text-indigo-700 dark:text-indigo-300">
    <strong>Note value + half the note value = dotted value</strong><br/>
    Half (2) + half of a half (1) = dotted half (3 beats)
  </p>
</div>

### Practical Application

<div className="bg-amber-50 dark:bg-amber-900/20 p-6 rounded-xl my-6">
  <h4 className="font-bold text-amber-800 dark:text-amber-200 mb-3">Where does the dotted half appear?</h4>
  <p className="text-sm text-amber-700 dark:text-amber-300 mb-2">
    The dotted half is especially important in <strong>3/4 time</strong> (waltz time): there it fills the entire measure (3 beats).
  </p>
  <p className="text-sm text-amber-700 dark:text-amber-300">
    In 4/4 time: Dotted half (3 beats) + quarter note (1 beat) = 4 beats ✓
  </p>
</div>

### Exercise

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border-2 border-green-300 dark:border-green-700 my-6">
  <h4 className="font-bold text-green-800 dark:text-green-200 mb-3">Play Dotted Half Notes</h4>
  <ol className="text-sm text-green-700 dark:text-green-300 space-y-2 list-decimal list-inside">
    <li>Play C and hold it for 3 beats (count "1-2-3")</li>
    <li>Then D as a quarter note on beat 4</li>
    <li>Pattern in 4/4: Dotted half C + quarter D | Dotted half E + quarter F</li>
    <li>Feel the difference between 2 beats (half) and 3 beats (dotted half)</li>
  </ol>
</div>
    `
  },
  task: {
    de: {
      title: "Punktierte Halbe Note",
      description: "Verstehe und spiele die punktierte Halbe Note.",
      checklist: [
        { text: "Erkläre die Punktregel: Notenwert + Hälfte = punktierter Wert", checked: false },
        { text: "Halte eine Note genau 3 Schläge lang", checked: false },
        { text: "Spiele: Punktierte Halbe + Viertel im 4/4-Takt", checked: false },
        { text: "Erkenne punktierte Halbe Noten in Notenblättern", checked: false }
      ]
    },
    en: {
      title: "Dotted Half Note",
      description: "Understand and play the dotted half note.",
      checklist: [
        { text: "Explain the dot rule: note value + half = dotted value", checked: false },
        { text: "Hold a note for exactly 3 beats", checked: false },
        { text: "Play: Dotted half + quarter in 4/4 time", checked: false },
        { text: "Recognize dotted half notes in sheet music", checked: false }
      ]
    }
  },
  quiz: {
    de: [
      { question: "Wie lange dauert eine punktierte Halbe Note?", answer: "3 Schläge. Die Halbe Note dauert 2 Schläge, der Punkt fügt die Hälfte davon hinzu (1 Schlag): 2 + 1 = 3 Schläge." },
      { question: "Was bewirkt ein Punkt hinter einer Note allgemein?", answer: "Ein Punkt verlängert eine Note um die Hälfte ihres eigenen Wertes. Punktierte Ganze = 6 Schläge (4+2), Punktierte Halbe = 3 Schläge (2+1), Punktierte Viertel = 1,5 Schläge (1+0,5)." }
    ],
    en: [
      { question: "How long does a dotted half note last?", answer: "3 beats. The half note lasts 2 beats, the dot adds half of that (1 beat): 2 + 1 = 3 beats." },
      { question: "What does a dot after a note generally do?", answer: "A dot extends a note by half its own value. Dotted whole = 6 beats (4+2), dotted half = 3 beats (2+1), dotted quarter = 1.5 beats (1+0.5)." }
    ]
  }
};
