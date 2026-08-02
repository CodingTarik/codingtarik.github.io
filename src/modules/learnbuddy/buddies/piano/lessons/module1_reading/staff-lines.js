export const staffLines = {
  title: {
    de: "Das Notensystem (5 Linien)",
    en: "The Staff (5 Lines)"
  },
  description: {
    de: "Die fünf Linien und vier Zwischenräume – die Landkarte der Musik.",
    en: "The five lines and four spaces – the map of music."
  },
  content: {
    de: `
### Das Notensystem: Die Landkarte der Musik

Um Musik aufzuschreiben, brauchen wir ein System. Das **Notensystem** (oder **Notenlinien**) besteht aus **5 horizontalen Linien** und den **4 Zwischenräumen** dazwischen. Die Position einer Note auf diesen Linien zeigt dir, welchen Ton du spielen musst.

<div className="bg-indigo-50 dark:bg-indigo-900/20 p-6 rounded-xl border-l-4 border-indigo-500 my-6">
  <h4 className="font-bold text-indigo-800 dark:text-indigo-200 mb-2">Das Prinzip</h4>
  <p className="text-sm text-indigo-700 dark:text-indigo-300">
    <strong>Je höher die Note auf den Linien steht, desto höher klingt sie.</strong> Je tiefer sie steht, desto tiefer klingt sie. Die 5 Linien werden von unten nach oben gezählt: Linie 1 (unten) bis Linie 5 (oben).
  </p>
</div>

---

### Die 5 Linien

Die Linien werden von unten nach oben nummeriert:
- **Linie 1** (unterste) = tiefster regulärer Ton
- **Linie 2**
- **Linie 3** (Mitte)
- **Linie 4**
- **Linie 5** (oberste) = höchster regulärer Ton

---

### Die 4 Zwischenräume

Zwischen den Linien gibt es 4 Zwischenräume. Auch hier können Noten platziert werden:
- **Zwischenraum 1** (zwischen Linie 1 und 2)
- **Zwischenraum 2** (zwischen Linie 2 und 3)
- **Zwischenraum 3** (zwischen Linie 3 und 4)
- **Zwischenraum 4** (zwischen Linie 4 und 5)

---

### Hilfslinien

<div className="bg-amber-50 dark:bg-amber-900/20 p-4 rounded-lg my-4">
  <h4 className="font-bold text-amber-800 dark:text-amber-200 mb-2">Was passiert bei sehr hohen oder tiefen Tönen?</h4>
  <p className="text-sm text-amber-700 dark:text-amber-300">
    Wenn eine Note höher oder tiefer ist als die 5 Linien reichen, werden kleine <strong>Hilfslinien</strong> (Ledger Lines) hinzugefügt. Das mittlere C (C4) liegt z.B. auf einer Hilfslinie unterhalb des Violinschlüssels.
  </p>
</div>

### Takte und Taktstriche

<div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl my-6">
  <h4 className="font-bold text-purple-800 dark:text-purple-200 mb-3">Ordnung im Notensystem</h4>
  <p className="text-sm text-purple-700 dark:text-purple-300 mb-2">
    Das Notensystem wird durch <strong>Taktstriche</strong> (senkrechte Linien) in gleichmäßige Abschnitte unterteilt – die <strong>Takte</strong>. Am Ende eines Stücks steht ein <strong>Doppelstrich</strong>.
  </p>
</div>

### Übung: Das Notensystem erkunden

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border-2 border-green-300 dark:border-green-700 my-6">
  <h4 className="font-bold text-green-800 dark:text-green-200 mb-3">Praktische Aufgabe</h4>
  <ol className="text-sm text-green-700 dark:text-green-300 space-y-2 list-decimal list-inside">
    <li>Zeichne 5 parallele Linien auf ein Blatt Papier</li>
    <li>Nummeriere die Linien von unten (1) nach oben (5)</li>
    <li>Zeichne Noten AUF die Linien und IN die Zwischenräume</li>
    <li>Merke: Höher = höherer Ton, Tiefer = tieferer Ton</li>
  </ol>
</div>
    `,
    en: `
### The Staff: The Map of Music

To write down music, we need a system. The **staff** (or **stave**) consists of **5 horizontal lines** and the **4 spaces** between them. The position of a note on these lines tells you which pitch to play.

<div className="bg-indigo-50 dark:bg-indigo-900/20 p-6 rounded-xl border-l-4 border-indigo-500 my-6">
  <h4 className="font-bold text-indigo-800 dark:text-indigo-200 mb-2">The Principle</h4>
  <p className="text-sm text-indigo-700 dark:text-indigo-300">
    <strong>The higher a note sits on the lines, the higher it sounds.</strong> The lower it sits, the lower it sounds. The 5 lines are counted from bottom to top: Line 1 (bottom) to Line 5 (top).
  </p>
</div>

---

### The 5 Lines

Lines are numbered from bottom to top:
- **Line 1** (bottom) = lowest regular pitch
- **Line 2**
- **Line 3** (middle)
- **Line 4**
- **Line 5** (top) = highest regular pitch

---

### The 4 Spaces

Between the lines there are 4 spaces. Notes can also be placed here:
- **Space 1** (between lines 1 and 2)
- **Space 2** (between lines 2 and 3)
- **Space 3** (between lines 3 and 4)
- **Space 4** (between lines 4 and 5)

---

### Ledger Lines

<div className="bg-amber-50 dark:bg-amber-900/20 p-4 rounded-lg my-4">
  <h4 className="font-bold text-amber-800 dark:text-amber-200 mb-2">What happens with very high or low notes?</h4>
  <p className="text-sm text-amber-700 dark:text-amber-300">
    When a note is higher or lower than the 5 lines can cover, small <strong>ledger lines</strong> are added. Middle C (C4), for example, sits on a ledger line below the treble clef.
  </p>
</div>

### Measures and Bar Lines

<div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl my-6">
  <h4 className="font-bold text-purple-800 dark:text-purple-200 mb-3">Organization in the Staff</h4>
  <p className="text-sm text-purple-700 dark:text-purple-300 mb-2">
    The staff is divided into equal sections by <strong>bar lines</strong> (vertical lines) – these sections are called <strong>measures</strong>. At the end of a piece, there's a <strong>double bar line</strong>.
  </p>
</div>

### Exercise: Explore the Staff

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border-2 border-green-300 dark:border-green-700 my-6">
  <h4 className="font-bold text-green-800 dark:text-green-200 mb-3">Practical Task</h4>
  <ol className="text-sm text-green-700 dark:text-green-300 space-y-2 list-decimal list-inside">
    <li>Draw 5 parallel lines on a piece of paper</li>
    <li>Number the lines from bottom (1) to top (5)</li>
    <li>Draw notes ON the lines and IN the spaces</li>
    <li>Remember: Higher = higher pitch, Lower = lower pitch</li>
  </ol>
</div>
    `
  },
  task: {
    de: {
      title: "Das Notensystem verstehen",
      description: "Mache dich mit den 5 Linien und 4 Zwischenräumen vertraut.",
      checklist: [
        { text: "Zeichne ein Notensystem mit 5 Linien auf Papier", checked: false },
        { text: "Nummeriere alle Linien und Zwischenräume korrekt", checked: false },
        { text: "Zeichne eine Note auf jede Linie und in jeden Zwischenraum", checked: false },
        { text: "Erkläre jemandem, warum höher = höherer Ton bedeutet", checked: false }
      ]
    },
    en: {
      title: "Understanding the Staff",
      description: "Familiarize yourself with the 5 lines and 4 spaces.",
      checklist: [
        { text: "Draw a staff with 5 lines on paper", checked: false },
        { text: "Number all lines and spaces correctly", checked: false },
        { text: "Draw a note on each line and in each space", checked: false },
        { text: "Explain to someone why higher = higher pitch", checked: false }
      ]
    }
  },
  quiz: {
    de: [
      {
        question: "Wie viele Linien und Zwischenräume hat ein Notensystem?",
        answer: "Ein Notensystem hat 5 Linien und 4 Zwischenräume. Die Linien werden von unten (1) nach oben (5) gezählt. Auf den Linien und in den Zwischenräumen werden Noten platziert – je höher, desto höher der Ton."
      },
      {
        question: "Was sind Hilfslinien und wann braucht man sie?",
        answer: "Hilfslinien (Ledger Lines) sind kleine zusätzliche Linien über oder unter dem Notensystem. Man braucht sie, wenn Töne höher oder tiefer sind als die 5 regulären Linien abdecken. Das mittlere C liegt z.B. auf einer Hilfslinie unter dem Violinschlüssel."
      }
    ],
    en: [
      {
        question: "How many lines and spaces does a staff have?",
        answer: "A staff has 5 lines and 4 spaces. Lines are counted from bottom (1) to top (5). Notes are placed on the lines and in the spaces – the higher they are, the higher the pitch."
      },
      {
        question: "What are ledger lines and when do you need them?",
        answer: "Ledger lines are small additional lines above or below the staff. They're needed when notes are higher or lower than the 5 regular lines can cover. Middle C, for example, sits on a ledger line below the treble clef."
      }
    ]
  }
};
