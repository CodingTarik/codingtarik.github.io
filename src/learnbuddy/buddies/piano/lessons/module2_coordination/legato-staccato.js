export const legatoStaccato = {
  title: { de: "Legato vs. Staccato", en: "Legato vs. Staccato" },
  description: { de: "Gebunden vs. kurz – zwei gegensätzliche Spielweisen.", en: "Connected vs. short – two contrasting playing styles." },
  content: {
    de: `
### Legato und Staccato: Wie du Noten verbindest oder trennst

**Artikulation** bestimmt, wie Noten miteinander verbunden oder getrennt werden. Die zwei Grundarten sind **Legato** (gebunden) und **Staccato** (kurz abgestoßen).

<div className="bg-indigo-50 dark:bg-indigo-900/20 p-6 rounded-xl border-l-4 border-indigo-500 my-6">
  <h4 className="font-bold text-indigo-800 dark:text-indigo-200 mb-3">Legato (gebunden)</h4>
  <p className="text-sm text-indigo-700 dark:text-indigo-300">
    Die Noten fließen <strong>nahtlos ineinander</strong>. Erst wenn die nächste Taste gedrückt wird, lässt du die vorherige los. Zeichen: ein Bogen über den Noten.
  </p>
</div>

<div className="bg-amber-50 dark:bg-amber-900/20 p-6 rounded-xl border-l-4 border-amber-500 my-6">
  <h4 className="font-bold text-amber-800 dark:text-amber-200 mb-3">Staccato (kurz)</h4>
  <p className="text-sm text-amber-700 dark:text-amber-300">
    Die Noten werden <strong>kurz und abgestoßen</strong> gespielt. Du lässt die Taste schnell los, es entsteht eine kleine Lücke. Zeichen: ein Punkt über/unter der Note.
  </p>
</div>

### Technik

<div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl my-6">
  <h4 className="font-bold text-purple-800 dark:text-purple-200 mb-3">So spielst du es</h4>
  <ul className="text-sm text-purple-700 dark:text-purple-300 space-y-2 list-disc list-inside">
    <li><strong>Legato:</strong> Gewicht von Finger zu Finger übertragen – wie Gehen. Immer ein Finger unten, bevor der andere hochgeht</li>
    <li><strong>Staccato:</strong> Finger "springt" von der Taste ab, wie ein Gummiball. Kurz und federnd</li>
  </ul>
</div>

### Übung

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border-2 border-green-300 dark:border-green-700 my-6">
  <h4 className="font-bold text-green-800 dark:text-green-200 mb-3">Artikulation üben</h4>
  <ol className="text-sm text-green-700 dark:text-green-300 space-y-2 list-decimal list-inside">
    <li>Spiele C-D-E-F-G ganz <strong>legato</strong> – die Töne verschmelzen</li>
    <li>Spiele dasselbe ganz <strong>staccato</strong> – kurz und hüpfend</li>
    <li>Mische: Legato aufwärts, Staccato abwärts</li>
    <li>Höre den dramatischen Unterschied!</li>
  </ol>
</div>
    `,
    en: `
### Legato and Staccato: Connecting or Separating Notes

**Articulation** determines how notes are connected or separated. The two basic types are **legato** (connected) and **staccato** (short, detached).

<div className="bg-indigo-50 dark:bg-indigo-900/20 p-6 rounded-xl border-l-4 border-indigo-500 my-6">
  <h4 className="font-bold text-indigo-800 dark:text-indigo-200 mb-3">Legato (connected)</h4>
  <p className="text-sm text-indigo-700 dark:text-indigo-300">
    Notes flow <strong>seamlessly into each other</strong>. Only release the previous key when the next one is pressed. Symbol: a slur (curved line) over the notes.
  </p>
</div>

<div className="bg-amber-50 dark:bg-amber-900/20 p-6 rounded-xl border-l-4 border-amber-500 my-6">
  <h4 className="font-bold text-amber-800 dark:text-amber-200 mb-3">Staccato (short)</h4>
  <p className="text-sm text-amber-700 dark:text-amber-300">
    Notes are played <strong>short and detached</strong>. Release the key quickly, creating a small gap. Symbol: a dot above/below the note.
  </p>
</div>

### Technique

<div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl my-6">
  <h4 className="font-bold text-purple-800 dark:text-purple-200 mb-3">How to Play It</h4>
  <ul className="text-sm text-purple-700 dark:text-purple-300 space-y-2 list-disc list-inside">
    <li><strong>Legato:</strong> Transfer weight from finger to finger – like walking. Always one finger down before the other lifts</li>
    <li><strong>Staccato:</strong> Finger "bounces" off the key, like a rubber ball. Short and springy</li>
  </ul>
</div>

### Exercise

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border-2 border-green-300 dark:border-green-700 my-6">
  <h4 className="font-bold text-green-800 dark:text-green-200 mb-3">Practice Articulation</h4>
  <ol className="text-sm text-green-700 dark:text-green-300 space-y-2 list-decimal list-inside">
    <li>Play C-D-E-F-G fully <strong>legato</strong> – notes blend together</li>
    <li>Play the same fully <strong>staccato</strong> – short and bouncy</li>
    <li>Mix: Legato ascending, staccato descending</li>
    <li>Hear the dramatic difference!</li>
  </ol>
</div>
    `
  },
  task: {
    de: {
      title: "Legato und Staccato",
      description: "Meistere die zwei grundlegenden Artikulationsarten.",
      checklist: [
        { text: "Spiele eine 5-Noten-Passage komplett legato", checked: false },
        { text: "Spiele dieselbe Passage komplett staccato", checked: false },
        { text: "Wechsle innerhalb einer Passage zwischen legato und staccato", checked: false },
        { text: "Spiele ein Stück mit markierter Artikulation korrekt", checked: false }
      ]
    },
    en: {
      title: "Legato and Staccato",
      description: "Master the two basic articulation types.",
      checklist: [
        { text: "Play a 5-note passage fully legato", checked: false },
        { text: "Play the same passage fully staccato", checked: false },
        { text: "Switch between legato and staccato within a passage", checked: false },
        { text: "Play a piece with marked articulation correctly", checked: false }
      ]
    }
  },
  quiz: {
    de: [
      { question: "Was ist der Unterschied zwischen Legato und Staccato?", answer: "Legato bedeutet gebunden – die Noten fließen nahtlos ineinander, man hält die vorherige Taste, bis die nächste gedrückt wird. Staccato bedeutet kurz abgestoßen – die Taste wird schnell losgelassen, es gibt Lücken zwischen den Noten. Legato hat einen Bogen als Zeichen, Staccato einen Punkt." },
      { question: "Wie erzeugt man Legato auf dem Klavier?", answer: "Man überträgt das Gewicht von Finger zu Finger, wie beim Gehen. Die neue Taste wird gedrückt, bevor die alte losgelassen wird, sodass immer mindestens eine Taste unten ist. Die Töne 'überlappen' sich minimal." }
    ],
    en: [
      { question: "What's the difference between legato and staccato?", answer: "Legato means connected – notes flow seamlessly, you hold the previous key until the next is pressed. Staccato means short and detached – the key is released quickly, creating gaps. Legato uses a slur, staccato uses a dot." },
      { question: "How do you create legato on the piano?", answer: "Transfer weight from finger to finger, like walking. Press the new key before releasing the old one, so at least one key is always down. The notes 'overlap' minimally." }
    ]
  }
};
