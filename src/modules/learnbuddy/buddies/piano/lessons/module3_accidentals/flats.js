export const flats = {
  title: { de: "Das B (b) – Flat", en: "The Flat (b)" },
  description: { de: "Einen Halbton tiefer – die schwarzen Tasten links.", en: "One half step lower – the black keys to the left." },
  content: { de: `
### Das B (b): Einen Halbton tiefer

Das **B** (b) vor einer Note bedeutet: Spiele diese Note einen **Halbton tiefer**. Meistens landest du auf einer schwarzen Taste – dieselbe schwarze Taste kann also sowohl ein Kreuz als auch ein B sein!

<div className="bg-indigo-50 dark:bg-indigo-900/20 p-6 rounded-xl border-l-4 border-indigo-500 my-6">
  <h4 className="font-bold text-indigo-800 dark:text-indigo-200 mb-3">Beispiele</h4>
  <ul className="text-sm text-indigo-700 dark:text-indigo-300 space-y-1">
    <li><strong>Db (Des):</strong> Die schwarze Taste links von D = gleiche Taste wie C#!</li>
    <li><strong>Eb (Es):</strong> Die schwarze Taste links von E = gleiche Taste wie D#!</li>
    <li><strong>Bb (B):</strong> Die schwarze Taste links von H</li>
    <li><strong>Fb = E</strong> und <strong>Cb = H</strong> (Sonderfälle)</li>
  </ul>
</div>

### Enharmonische Verwechslung

<div className="bg-amber-50 dark:bg-amber-900/20 p-6 rounded-xl my-6">
  <h4 className="font-bold text-amber-800 dark:text-amber-200 mb-3">Zwei Namen, eine Taste</h4>
  <p className="text-sm text-amber-700 dark:text-amber-300">
    Jede schwarze Taste hat <strong>zwei Namen</strong>: C# = Db, D# = Eb, F# = Gb, G# = Ab, A# = Bb. Der Klang ist identisch – nur der Name hängt vom musikalischen Kontext ab.
  </p>
</div>

### Übung

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border-2 border-green-300 dark:border-green-700 my-6">
  <h4 className="font-bold text-green-800 dark:text-green-200 mb-3">B-Noten spielen</h4>
  <ol className="text-sm text-green-700 dark:text-green-300 space-y-2 list-decimal list-inside">
    <li>Spiele D, dann Db – höre den Unterschied</li>
    <li>Spiele alle Bs: Db, Eb, Gb, Ab, Bb</li>
    <li>Bestätige: C# = Db (gleiche Taste!)</li>
    <li>Spiele abwärts chromatisch: E-Eb-D-Db-C</li>
  </ol>
</div>
    `, en: `
### The Flat (b): One Half Step Lower

The **flat** (b) before a note means: play this note one **half step lower**. Most often you'll land on a black key – the same black key can be both a sharp and a flat!

<div className="bg-indigo-50 dark:bg-indigo-900/20 p-6 rounded-xl border-l-4 border-indigo-500 my-6">
  <h4 className="font-bold text-indigo-800 dark:text-indigo-200 mb-3">Examples</h4>
  <ul className="text-sm text-indigo-700 dark:text-indigo-300 space-y-1">
    <li><strong>Db:</strong> The black key left of D = same key as C#!</li>
    <li><strong>Eb:</strong> The black key left of E = same key as D#!</li>
    <li><strong>Bb:</strong> The black key left of B</li>
    <li><strong>Fb = E</strong> and <strong>Cb = B</strong> (special cases)</li>
  </ul>
</div>

### Enharmonic Equivalents

<div className="bg-amber-50 dark:bg-amber-900/20 p-6 rounded-xl my-6">
  <h4 className="font-bold text-amber-800 dark:text-amber-200 mb-3">Two Names, One Key</h4>
  <p className="text-sm text-amber-700 dark:text-amber-300">
    Every black key has <strong>two names</strong>: C# = Db, D# = Eb, F# = Gb, G# = Ab, A# = Bb. The sound is identical – only the name depends on the musical context.
  </p>
</div>

### Exercise

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border-2 border-green-300 dark:border-green-700 my-6">
  <h4 className="font-bold text-green-800 dark:text-green-200 mb-3">Playing Flat Notes</h4>
  <ol className="text-sm text-green-700 dark:text-green-300 space-y-2 list-decimal list-inside">
    <li>Play D, then Db – hear the difference</li>
    <li>Play all flats: Db, Eb, Gb, Ab, Bb</li>
    <li>Confirm: C# = Db (same key!)</li>
    <li>Play descending chromatic: E-Eb-D-Db-C</li>
  </ol>
</div>
    ` },
  task: { de: { title: "B-Noten lernen", description: "Verstehe und spiele Noten mit B-Vorzeichen.", checklist: [{ text: "Spiele alle 5 B-Noten (Db, Eb, Gb, Ab, Bb)", checked: false }, { text: "Bestätige: Jedes B ist die gleiche Taste wie ein Kreuz", checked: false }, { text: "Spiele chromatisch abwärts von E nach C", checked: false }] }, en: { title: "Learn Flat Notes", description: "Understand and play flat notes.", checklist: [{ text: "Play all 5 flat notes (Db, Eb, Gb, Ab, Bb)", checked: false }, { text: "Confirm: each flat is the same key as a sharp", checked: false }, { text: "Play chromatically descending from E to C", checked: false }] } },
  quiz: { de: [{ question: "Was ist eine enharmonische Verwechslung?", answer: "Wenn dieselbe Taste zwei verschiedene Namen hat, z.B. C# = Db. Die Taste und der Klang sind identisch, aber je nach musikalischem Zusammenhang wird der eine oder andere Name verwendet." }], en: [{ question: "What is an enharmonic equivalent?", answer: "When the same key has two different names, e.g. C# = Db. The key and sound are identical, but depending on musical context, one name or the other is used." }] }
};
