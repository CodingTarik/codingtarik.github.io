export const wholeHalfSteps = {
  title: { de: "Ganzton- und Halbtonschritte", en: "Whole Steps and Half Steps" },
  description: { de: "Die kleinsten Bausteine der Musik verstehen.", en: "Understanding the smallest building blocks of music." },
  content: {
    de: `
### Ganzton- und Halbtonschritte

Der **Halbtonschritt** ist der kleinste Abstand zwischen zwei Tönen auf dem Klavier. Ein **Ganztonschritt** besteht aus zwei Halbtönen. Diese Abstände sind die Grundlage aller Tonleitern und Akkorde!

<div className="bg-indigo-50 dark:bg-indigo-900/20 p-6 rounded-xl border-l-4 border-indigo-500 my-6">
  <h4 className="font-bold text-indigo-800 dark:text-indigo-200 mb-3">Halbtonschritt (HT)</h4>
  <p className="text-sm text-indigo-700 dark:text-indigo-300">
    Der Abstand von einer Taste zur <strong>nächsten benachbarten Taste</strong> – egal ob weiß oder schwarz. Beispiele: E→F (kein schwarzer dazwischen!), H→C, C→C#.
  </p>
</div>

<div className="bg-amber-50 dark:bg-amber-900/20 p-6 rounded-xl border-l-4 border-amber-500 my-6">
  <h4 className="font-bold text-amber-800 dark:text-amber-200 mb-3">Ganztonschritt (GT)</h4>
  <p className="text-sm text-amber-700 dark:text-amber-300">
    Zwei Halbtöne zusammen = ein <strong>Ganztonschritt</strong>. Dabei wird immer eine Taste übersprungen. Beispiele: C→D (C# dazwischen), D→E (D# dazwischen).
  </p>
</div>

### Die natürlichen Halbtöne

<div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg my-4">
  <p className="text-sm text-purple-800 dark:text-purple-200">
    Auf den weißen Tasten gibt es nur <strong>zwei natürliche Halbtonschritte</strong>: <strong>E→F</strong> und <strong>H→C</strong>. Zwischen diesen Paaren gibt es keine schwarze Taste! Alle anderen weißen Tasten haben einen Ganztonschritt zueinander.
  </p>
</div>

### Übung

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border-2 border-green-300 dark:border-green-700 my-6">
  <h4 className="font-bold text-green-800 dark:text-green-200 mb-3">Halbtöne und Ganztöne hören</h4>
  <ol className="text-sm text-green-700 dark:text-green-300 space-y-2 list-decimal list-inside">
    <li>Spiele alle Halbtöne von C nach C (chromatisch – jede Taste)</li>
    <li>Spiele nur Ganztöne: C-D-E-F#-G#-A#-C (Ganztonleiter)</li>
    <li>Identifiziere E→F und H→C als die natürlichen Halbtöne</li>
    <li>Höre den Unterschied: HT klingt "eng", GT klingt "weit"</li>
  </ol>
</div>
    `,
    en: `
### Whole Steps and Half Steps

The **half step** is the smallest distance between two notes on the piano. A **whole step** consists of two half steps. These intervals are the foundation of all scales and chords!

<div className="bg-indigo-50 dark:bg-indigo-900/20 p-6 rounded-xl border-l-4 border-indigo-500 my-6">
  <h4 className="font-bold text-indigo-800 dark:text-indigo-200 mb-3">Half Step (H)</h4>
  <p className="text-sm text-indigo-700 dark:text-indigo-300">
    The distance from one key to the <strong>very next adjacent key</strong> – whether white or black. Examples: E→F (no black key between!), B→C, C→C#.
  </p>
</div>

<div className="bg-amber-50 dark:bg-amber-900/20 p-6 rounded-xl border-l-4 border-amber-500 my-6">
  <h4 className="font-bold text-amber-800 dark:text-amber-200 mb-3">Whole Step (W)</h4>
  <p className="text-sm text-amber-700 dark:text-amber-300">
    Two half steps together = one <strong>whole step</strong>. Always skips one key. Examples: C→D (C# between), D→E (D# between).
  </p>
</div>

### The Natural Half Steps

<div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg my-4">
  <p className="text-sm text-purple-800 dark:text-purple-200">
    On the white keys, there are only <strong>two natural half steps</strong>: <strong>E→F</strong> and <strong>B→C</strong>. Between these pairs there's no black key! All other white keys have a whole step between them.
  </p>
</div>

### Exercise

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border-2 border-green-300 dark:border-green-700 my-6">
  <h4 className="font-bold text-green-800 dark:text-green-200 mb-3">Hear Half Steps and Whole Steps</h4>
  <ol className="text-sm text-green-700 dark:text-green-300 space-y-2 list-decimal list-inside">
    <li>Play all half steps from C to C (chromatic – every key)</li>
    <li>Play only whole steps: C-D-E-F#-G#-A#-C (whole tone scale)</li>
    <li>Identify E→F and B→C as the natural half steps</li>
    <li>Hear the difference: half step sounds "narrow", whole step sounds "wide"</li>
  </ol>
</div>
    `
  },
  task: { de: { title: "Halb- und Ganztöne", description: "Lerne den Unterschied zwischen Halb- und Ganztonschritten.", checklist: [{ text: "Spiele eine chromatische Tonleiter (alle Halbtöne) von C bis C", checked: false }, { text: "Identifiziere E→F und H→C als natürliche Halbtöne", checked: false }, { text: "Spiele 5 Ganztonschritte nacheinander", checked: false }, { text: "Höre blind den Unterschied zwischen HT und GT", checked: false }] }, en: { title: "Half and Whole Steps", description: "Learn the difference between half and whole steps.", checklist: [{ text: "Play a chromatic scale (all half steps) from C to C", checked: false }, { text: "Identify E→F and B→C as natural half steps", checked: false }, { text: "Play 5 whole steps in a row", checked: false }, { text: "Hear the difference between H and W steps by ear", checked: false }] } },
  quiz: { de: [{ question: "Wo liegen die natürlichen Halbtöne auf den weißen Tasten?", answer: "Zwischen E und F sowie zwischen H und C. Nur an diesen Stellen gibt es keine schwarze Taste dazwischen. Alle anderen weißen Tasten haben einen Ganztonschritt (mit schwarzer Taste dazwischen)." }], en: [{ question: "Where are the natural half steps on the white keys?", answer: "Between E and F, and between B and C. Only at these spots is there no black key between them. All other white keys have a whole step (with a black key between)." }] }
};
