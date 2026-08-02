export const intervals = {
  title: { de: "Intervalle: Sekunde, Terz, Quinte", en: "Intervals: Second, Third, Fifth" },
  description: { de: "Die wichtigsten Abstände zwischen Tönen benennen und hören.", en: "Name and hear the most important distances between notes." },
  content: {
    de: `
### Intervalle: Abstände zwischen Tönen

Ein **Intervall** ist der Abstand zwischen zwei Tönen. Intervalle haben Namen, die auf lateinischen Zahlen basieren. Die drei wichtigsten für Anfänger sind **Sekunde**, **Terz** und **Quinte**.

<div className="bg-indigo-50 dark:bg-indigo-900/20 p-6 rounded-xl border-l-4 border-indigo-500 my-6">
  <h4 className="font-bold text-indigo-800 dark:text-indigo-200 mb-3">Die drei Grundintervalle</h4>
  <ul className="text-sm text-indigo-700 dark:text-indigo-300 space-y-2">
    <li><strong>Sekunde (2):</strong> Nachbartöne – C→D (eine Stufe). Klingt "eng"</li>
    <li><strong>Terz (3):</strong> Ein Ton wird übersprungen – C→E (zwei Stufen). Klingt "warm"</li>
    <li><strong>Quinte (5):</strong> Drei Töne übersprungen – C→G (vier Stufen). Klingt "offen/stark"</li>
  </ul>
</div>

### Wie man Intervalle erkennt

<div className="bg-amber-50 dark:bg-amber-900/20 p-6 rounded-xl my-6">
  <h4 className="font-bold text-amber-800 dark:text-amber-200 mb-3">Visuelle Erkennung</h4>
  <ul className="text-sm text-amber-700 dark:text-amber-300 space-y-2 list-disc list-inside">
    <li><strong>Sekunde:</strong> Im Notenbild direkt nebeneinander (Linie→Zwischenraum oder umgekehrt)</li>
    <li><strong>Terz:</strong> Beide auf Linien ODER beide in Zwischenräumen (eine Stufe übersprungen)</li>
    <li><strong>Quinte:</strong> Größerer Abstand – von Linie zu Linie mit einer Linie dazwischen</li>
  </ul>
</div>

### Klangcharakter

<div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl my-6">
  <ul className="text-sm text-purple-700 dark:text-purple-300 space-y-2 list-disc list-inside">
    <li><strong>Sekunde:</strong> Spannung, Reibung (wie ein Seufzer)</li>
    <li><strong>Terz:</strong> Harmonie, Wärme (Dur=fröhlich, Moll=traurig)</li>
    <li><strong>Quinte:</strong> Kraft, Stabilität (wie Fanfaren)</li>
  </ul>
</div>

### Übung

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border-2 border-green-300 dark:border-green-700 my-6">
  <h4 className="font-bold text-green-800 dark:text-green-200 mb-3">Intervalle spielen und hören</h4>
  <ol className="text-sm text-green-700 dark:text-green-300 space-y-2 list-decimal list-inside">
    <li>Spiele Sekunden: C-D, D-E, E-F, F-G</li>
    <li>Spiele Terzen: C-E, D-F, E-G</li>
    <li>Spiele Quinten: C-G, D-A, E-H</li>
    <li>Spiele alle drei von C aus gleichzeitig (als Zweiklang) und höre den Unterschied</li>
  </ol>
</div>
    `,
    en: `
### Intervals: Distances Between Notes

An **interval** is the distance between two notes. Intervals have names based on Latin numbers. The three most important for beginners are **second**, **third**, and **fifth**.

<div className="bg-indigo-50 dark:bg-indigo-900/20 p-6 rounded-xl border-l-4 border-indigo-500 my-6">
  <h4 className="font-bold text-indigo-800 dark:text-indigo-200 mb-3">The Three Basic Intervals</h4>
  <ul className="text-sm text-indigo-700 dark:text-indigo-300 space-y-2">
    <li><strong>Second (2nd):</strong> Neighboring notes – C→D (one step). Sounds "narrow"</li>
    <li><strong>Third (3rd):</strong> One note skipped – C→E (two steps). Sounds "warm"</li>
    <li><strong>Fifth (5th):</strong> Three notes skipped – C→G (four steps). Sounds "open/strong"</li>
  </ul>
</div>

### How to Recognize Intervals

<div className="bg-amber-50 dark:bg-amber-900/20 p-6 rounded-xl my-6">
  <h4 className="font-bold text-amber-800 dark:text-amber-200 mb-3">Visual Recognition</h4>
  <ul className="text-sm text-amber-700 dark:text-amber-300 space-y-2 list-disc list-inside">
    <li><strong>Second:</strong> Notes right next to each other (line→space or vice versa)</li>
    <li><strong>Third:</strong> Both on lines OR both in spaces (one step skipped)</li>
    <li><strong>Fifth:</strong> Larger gap – from line to line with one line between</li>
  </ul>
</div>

### Sound Character

<div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl my-6">
  <ul className="text-sm text-purple-700 dark:text-purple-300 space-y-2 list-disc list-inside">
    <li><strong>Second:</strong> Tension, friction (like a sigh)</li>
    <li><strong>Third:</strong> Harmony, warmth (major=happy, minor=sad)</li>
    <li><strong>Fifth:</strong> Power, stability (like fanfares)</li>
  </ul>
</div>

### Exercise

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border-2 border-green-300 dark:border-green-700 my-6">
  <h4 className="font-bold text-green-800 dark:text-green-200 mb-3">Play and Hear Intervals</h4>
  <ol className="text-sm text-green-700 dark:text-green-300 space-y-2 list-decimal list-inside">
    <li>Play seconds: C-D, D-E, E-F, F-G</li>
    <li>Play thirds: C-E, D-F, E-G</li>
    <li>Play fifths: C-G, D-A, E-B</li>
    <li>Play all three from C simultaneously (as dyads) and hear the difference</li>
  </ol>
</div>
    `
  },
  task: { de: { title: "Intervalle erkennen", description: "Lerne Sekunden, Terzen und Quinten zu spielen und hören.", checklist: [{ text: "Spiele 4 verschiedene Sekunden", checked: false }, { text: "Spiele 3 verschiedene Terzen", checked: false }, { text: "Spiele 3 verschiedene Quinten", checked: false }, { text: "Erkenne blind ob Sekunde, Terz oder Quinte gespielt wird", checked: false }] }, en: { title: "Recognize Intervals", description: "Learn to play and hear seconds, thirds, and fifths.", checklist: [{ text: "Play 4 different seconds", checked: false }, { text: "Play 3 different thirds", checked: false }, { text: "Play 3 different fifths", checked: false }, { text: "Identify by ear if a second, third, or fifth is played", checked: false }] } },
  quiz: { de: [{ question: "Was ist ein Intervall und wie werden die drei Grundintervalle gezählt?", answer: "Ein Intervall ist der Abstand zwischen zwei Tönen. Sekunde = 2 Stufen (Nachbartöne, z.B. C-D), Terz = 3 Stufen (ein Ton übersprungen, z.B. C-E), Quinte = 5 Stufen (drei Töne übersprungen, z.B. C-G)." }], en: [{ question: "What is an interval and how are the three basic intervals counted?", answer: "An interval is the distance between two notes. Second = 2 steps (neighboring notes, e.g. C-D), Third = 3 steps (one note skipped, e.g. C-E), Fifth = 5 steps (three notes skipped, e.g. C-G)." }] }
};
