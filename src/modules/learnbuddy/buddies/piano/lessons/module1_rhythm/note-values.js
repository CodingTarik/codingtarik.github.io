export const noteValues = {
  title: {
    de: "Notenwerte: Ganze, Halbe, Viertel",
    en: "Note Values: Whole, Half, Quarter"
  },
  description: {
    de: "Lerne die drei grundlegenden Notenwerte und wie lange jeder dauert.",
    en: "Learn the three basic note values and how long each one lasts."
  },
  content: {
    de: `
### Notenwerte: Die Sprache der Dauer

In der Musik reicht es nicht, nur zu wissen, **welche** Taste du drückst – du musst auch wissen, **wie lange** du sie gedrückt hältst. Dafür gibt es **Notenwerte**. Sie sind wie ein Code, der dir sagt: "Halte diese Note genau so viele Schläge."

<div className="bg-indigo-50 dark:bg-indigo-900/20 p-6 rounded-xl border-l-4 border-indigo-500 my-6">
  <h4 className="font-bold text-indigo-800 dark:text-indigo-200 mb-2">Das Grundprinzip</h4>
  <p className="text-sm text-indigo-700 dark:text-indigo-300">
    Stell dir einen gleichmäßigen Herzschlag vor: <strong>"1 - 2 - 3 - 4"</strong>. Das ist der <strong>Puls</strong> der Musik. Jeder Notenwert sagt dir, wie viele dieser "Herzschläge" du eine Taste gedrückt hältst.
  </p>
</div>

---

### 1. Die Ganze Note (4 Schläge)

Die ganze Note sieht aus wie ein **leerer Kreis** (ein Ei oder ein "O"). Sie ist der längste Grundnotenwert und dauert **4 Schläge**.

<div className="bg-amber-50 dark:bg-amber-900/20 p-4 rounded-lg my-4">
  <p className="text-sm text-amber-800 dark:text-amber-200">
    <strong>So zählst du:</strong> Drücke eine Taste und zähle laut: <em>"Eins – Zwei – Drei – Vier"</em>. Erst bei "Vier" lässt du los. Die ganze Note füllt einen kompletten 4/4-Takt.
  </p>
</div>

- **Aussehen:** Leerer ovaler Notenkopf, kein Hals
- **Dauer:** 4 Schläge
- **Merkspruch:** "Ganze Note – ganzer Takt"

---

### 2. Die Halbe Note (2 Schläge)

Die halbe Note hat einen **leeren Notenkopf** (wie die ganze) PLUS einen **Notenhals** (ein Strich nach oben oder unten). Sie dauert **2 Schläge**.

<div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg my-4">
  <p className="text-sm text-green-800 dark:text-green-200">
    <strong>So zählst du:</strong> Drücke eine Taste und zähle: <em>"Eins – Zwei"</em>. In einen 4/4-Takt passen genau <strong>zwei</strong> halbe Noten.
  </p>
</div>

- **Aussehen:** Leerer Notenkopf + Hals
- **Dauer:** 2 Schläge
- **Merkspruch:** "Halbe Note – halber Takt"

---

### 3. Die Viertelnote (1 Schlag)

Die Viertelnote hat einen **ausgefüllten (schwarzen) Notenkopf** und einen **Hals**. Sie dauert **1 Schlag** – das ist der "Herzschlag" der Musik.

<div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg my-4">
  <p className="text-sm text-blue-800 dark:text-blue-200">
    <strong>So zählst du:</strong> Pro Schlag eine neue Note. In einen 4/4-Takt passen genau <strong>vier</strong> Viertelnoten.
  </p>
</div>

- **Aussehen:** Ausgefüllter Notenkopf + Hals
- **Dauer:** 1 Schlag
- **Merkspruch:** "Viertelnote – ein Schlag, der Puls der Musik"

---

### Zusammenhang der Notenwerte

<div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl my-6">
  <h4 className="font-bold text-purple-800 dark:text-purple-200 mb-3">Die Notenwert-Pyramide</h4>
  <ul className="text-sm text-purple-700 dark:text-purple-300 space-y-2">
    <li><strong>1 Ganze</strong> = 2 Halbe = 4 Viertel</li>
    <li><strong>1 Halbe</strong> = 2 Viertel</li>
    <li>In einem 4/4-Takt müssen die Notenwerte immer <strong>genau 4 Schläge</strong> ergeben</li>
  </ul>
</div>

### Praktische Übung am Klavier

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border-2 border-green-300 dark:border-green-700 my-6">
  <h4 className="font-bold text-green-800 dark:text-green-200 mb-3">Übung: Notenwerte fühlen</h4>
  <ol className="text-sm text-green-700 dark:text-green-300 space-y-2 list-decimal list-inside">
    <li>Spiele das mittlere C als <strong>ganze Note</strong> – zähle "1-2-3-4" dabei laut</li>
    <li>Spiele C als <strong>zwei halbe Noten</strong> – drücke bei "1" und bei "3"</li>
    <li>Spiele C als <strong>vier Viertelnoten</strong> – bei jedem Schlag eine neue Note</li>
    <li>Mische: Halbe + zwei Viertel (2+1+1 = 4 Schläge)</li>
  </ol>
</div>
    `,
    en: `
### Note Values: The Language of Duration

In music, it's not enough to know **which** key to press – you also need to know **how long** to hold it. That's what **note values** are for. They're like a code telling you: "Hold this note for exactly this many beats."

<div className="bg-indigo-50 dark:bg-indigo-900/20 p-6 rounded-xl border-l-4 border-indigo-500 my-6">
  <h4 className="font-bold text-indigo-800 dark:text-indigo-200 mb-2">The Basic Principle</h4>
  <p className="text-sm text-indigo-700 dark:text-indigo-300">
    Imagine a steady heartbeat: <strong>"1 - 2 - 3 - 4"</strong>. That's the <strong>pulse</strong> of the music. Each note value tells you how many of these "heartbeats" to hold a key down.
  </p>
</div>

---

### 1. The Whole Note (4 Beats)

The whole note looks like an **empty circle** (an egg or an "O"). It's the longest basic note value and lasts **4 beats**.

<div className="bg-amber-50 dark:bg-amber-900/20 p-4 rounded-lg my-4">
  <p className="text-sm text-amber-800 dark:text-amber-200">
    <strong>How to count:</strong> Press a key and count aloud: <em>"One – Two – Three – Four"</em>. Only release at "Four". The whole note fills an entire 4/4 measure.
  </p>
</div>

- **Appearance:** Empty oval note head, no stem
- **Duration:** 4 beats
- **Memory aid:** "Whole note – whole measure"

---

### 2. The Half Note (2 Beats)

The half note has an **empty note head** (like the whole) PLUS a **stem** (a line going up or down). It lasts **2 beats**.

<div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg my-4">
  <p className="text-sm text-green-800 dark:text-green-200">
    <strong>How to count:</strong> Press a key and count: <em>"One – Two"</em>. Exactly <strong>two</strong> half notes fit in a 4/4 measure.
  </p>
</div>

- **Appearance:** Empty note head + stem
- **Duration:** 2 beats
- **Memory aid:** "Half note – half a measure"

---

### 3. The Quarter Note (1 Beat)

The quarter note has a **filled (black) note head** and a **stem**. It lasts **1 beat** – this is the "heartbeat" of music.

<div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg my-4">
  <p className="text-sm text-blue-800 dark:text-blue-200">
    <strong>How to count:</strong> One new note per beat. Exactly <strong>four</strong> quarter notes fit in a 4/4 measure.
  </p>
</div>

- **Appearance:** Filled note head + stem
- **Duration:** 1 beat
- **Memory aid:** "Quarter note – one beat, the pulse of music"

---

### How Note Values Relate

<div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl my-6">
  <h4 className="font-bold text-purple-800 dark:text-purple-200 mb-3">The Note Value Pyramid</h4>
  <ul className="text-sm text-purple-700 dark:text-purple-300 space-y-2">
    <li><strong>1 Whole</strong> = 2 Halves = 4 Quarters</li>
    <li><strong>1 Half</strong> = 2 Quarters</li>
    <li>In a 4/4 measure, note values must always add up to <strong>exactly 4 beats</strong></li>
  </ul>
</div>

### Practical Exercise at the Piano

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border-2 border-green-300 dark:border-green-700 my-6">
  <h4 className="font-bold text-green-800 dark:text-green-200 mb-3">Exercise: Feel the Note Values</h4>
  <ol className="text-sm text-green-700 dark:text-green-300 space-y-2 list-decimal list-inside">
    <li>Play middle C as a <strong>whole note</strong> – count "1-2-3-4" aloud</li>
    <li>Play C as <strong>two half notes</strong> – press on "1" and on "3"</li>
    <li>Play C as <strong>four quarter notes</strong> – one new note on each beat</li>
    <li>Mix them: Half + two quarters (2+1+1 = 4 beats)</li>
  </ol>
</div>
    `
  },
  task: {
    de: {
      title: "Übung: Notenwerte am Klavier",
      description: "Spüre den Unterschied zwischen ganzen, halben und Viertelnoten.",
      checklist: [
        { text: "Spiele eine ganze Note auf C und zähle laut bis 4", checked: false },
        { text: "Spiele zwei halbe Noten (C, E) in einem Takt", checked: false },
        { text: "Spiele vier Viertelnoten (C, D, E, F) in einem Takt", checked: false },
        { text: "Kombiniere: Halbe Note + zwei Viertelnoten in einem Takt", checked: false }
      ]
    },
    en: {
      title: "Exercise: Note Values at the Piano",
      description: "Feel the difference between whole, half, and quarter notes.",
      checklist: [
        { text: "Play a whole note on C and count aloud to 4", checked: false },
        { text: "Play two half notes (C, E) in one measure", checked: false },
        { text: "Play four quarter notes (C, D, E, F) in one measure", checked: false },
        { text: "Combine: Half note + two quarter notes in one measure", checked: false }
      ]
    }
  },
  quiz: {
    de: [
      {
        question: "Wie viele Schläge dauert eine ganze Note?",
        answer: "Eine ganze Note dauert 4 Schläge. Sie füllt einen kompletten 4/4-Takt und sieht aus wie ein leerer ovaler Notenkopf ohne Hals."
      },
      {
        question: "Wie unterscheiden sich halbe und Viertelnoten optisch?",
        answer: "Beide haben einen Notenhals, aber die halbe Note hat einen leeren (weißen) Notenkopf, während die Viertelnote einen ausgefüllten (schwarzen) Notenkopf hat. Die halbe Note dauert 2 Schläge, die Viertelnote nur 1 Schlag."
      },
      {
        question: "Wie viele Viertelnoten passen in einen 4/4-Takt?",
        answer: "Genau 4 Viertelnoten passen in einen 4/4-Takt, da jede Viertelnote 1 Schlag dauert und der Takt 4 Schläge hat. Man kann auch 2 Halbe oder 1 Ganze spielen – die Summe muss immer 4 Schläge ergeben."
      }
    ],
    en: [
      {
        question: "How many beats does a whole note last?",
        answer: "A whole note lasts 4 beats. It fills an entire 4/4 measure and looks like an empty oval note head without a stem."
      },
      {
        question: "How do half notes and quarter notes differ visually?",
        answer: "Both have a stem, but the half note has an empty (white) note head, while the quarter note has a filled (black) note head. The half note lasts 2 beats, the quarter note only 1 beat."
      },
      {
        question: "How many quarter notes fit in a 4/4 measure?",
        answer: "Exactly 4 quarter notes fit in a 4/4 measure, since each quarter note lasts 1 beat and the measure has 4 beats. You can also play 2 halves or 1 whole – the sum must always equal 4 beats."
      }
    ]
  }
};
