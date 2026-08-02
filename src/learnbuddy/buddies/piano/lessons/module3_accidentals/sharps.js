export const sharps = {
  title: { de: "Das Kreuz (#) – Sharp", en: "The Sharp (#)" },
  description: { de: "Einen Halbton höher – die schwarzen Tasten rechts.", en: "One half step higher – the black keys to the right." },
  content: { de: `
### Das Kreuz (#): Einen Halbton höher

Das **Kreuz** (#) vor einer Note bedeutet: Spiele diese Note einen **Halbton höher**. Meistens landest du auf einer schwarzen Taste.

<div className="bg-indigo-50 dark:bg-indigo-900/20 p-6 rounded-xl border-l-4 border-indigo-500 my-6">
  <h4 className="font-bold text-indigo-800 dark:text-indigo-200 mb-3">Beispiele</h4>
  <ul className="text-sm text-indigo-700 dark:text-indigo-300 space-y-1">
    <li><strong>C# (Cis):</strong> Die schwarze Taste rechts von C</li>
    <li><strong>F# (Fis):</strong> Die schwarze Taste rechts von F</li>
    <li><strong>G# (Gis):</strong> Die schwarze Taste rechts von G</li>
    <li><strong>E# = F</strong> (Sonderfall: E hat keine schwarze Taste rechts daneben)</li>
    <li><strong>H# = C</strong> (Sonderfall: H hat keine schwarze Taste rechts daneben)</li>
  </ul>
</div>

### Wo steht das Kreuz?

<div className="bg-amber-50 dark:bg-amber-900/20 p-6 rounded-xl my-6">
  <h4 className="font-bold text-amber-800 dark:text-amber-200 mb-3">Zwei Möglichkeiten</h4>
  <ul className="text-sm text-amber-700 dark:text-amber-300 space-y-2 list-disc list-inside">
    <li><strong>Versetzungszeichen:</strong> Direkt vor einer einzelnen Note. Gilt nur für diesen Takt.</li>
    <li><strong>Vorzeichen:</strong> Am Anfang des Stücks, nach dem Schlüssel. Gilt für das ganze Stück.</li>
  </ul>
</div>

### Übung

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border-2 border-green-300 dark:border-green-700 my-6">
  <h4 className="font-bold text-green-800 dark:text-green-200 mb-3">Kreuz-Noten spielen</h4>
  <ol className="text-sm text-green-700 dark:text-green-300 space-y-2 list-decimal list-inside">
    <li>Spiele C, dann C# – höre den kleinen Unterschied</li>
    <li>Spiele alle Kreuze: C#, D#, F#, G#, A#</li>
    <li>Spiele die Tonfolge: C-C#-D-D#-E (chromatisch aufwärts)</li>
    <li>Finde F# und G# blind auf der Tastatur</li>
  </ol>
</div>
    `, en: `
### The Sharp (#): One Half Step Higher

The **sharp** (#) before a note means: play this note one **half step higher**. Most often you'll land on a black key.

<div className="bg-indigo-50 dark:bg-indigo-900/20 p-6 rounded-xl border-l-4 border-indigo-500 my-6">
  <h4 className="font-bold text-indigo-800 dark:text-indigo-200 mb-3">Examples</h4>
  <ul className="text-sm text-indigo-700 dark:text-indigo-300 space-y-1">
    <li><strong>C#:</strong> The black key to the right of C</li>
    <li><strong>F#:</strong> The black key to the right of F</li>
    <li><strong>G#:</strong> The black key to the right of G</li>
    <li><strong>E# = F</strong> (Special case: E has no black key to its right)</li>
    <li><strong>B# = C</strong> (Special case: B has no black key to its right)</li>
  </ul>
</div>

### Where Does the Sharp Appear?

<div className="bg-amber-50 dark:bg-amber-900/20 p-6 rounded-xl my-6">
  <h4 className="font-bold text-amber-800 dark:text-amber-200 mb-3">Two Possibilities</h4>
  <ul className="text-sm text-amber-700 dark:text-amber-300 space-y-2 list-disc list-inside">
    <li><strong>Accidental:</strong> Directly before a single note. Only applies for that measure.</li>
    <li><strong>Key signature:</strong> At the beginning of the piece, after the clef. Applies for the whole piece.</li>
  </ul>
</div>

### Exercise

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border-2 border-green-300 dark:border-green-700 my-6">
  <h4 className="font-bold text-green-800 dark:text-green-200 mb-3">Playing Sharp Notes</h4>
  <ol className="text-sm text-green-700 dark:text-green-300 space-y-2 list-decimal list-inside">
    <li>Play C, then C# – hear the small difference</li>
    <li>Play all sharps: C#, D#, F#, G#, A#</li>
    <li>Play the sequence: C-C#-D-D#-E (chromatic ascending)</li>
    <li>Find F# and G# blindly on the keyboard</li>
  </ol>
</div>
    ` },
  task: { de: { title: "Kreuz-Noten lernen", description: "Verstehe und spiele Noten mit Kreuz.", checklist: [{ text: "Spiele alle 5 Kreuz-Noten (C#, D#, F#, G#, A#)", checked: false }, { text: "Erkenne den Klangunterschied zwischen C und C#", checked: false }, { text: "Finde alle Kreuze blind auf der Tastatur", checked: false }] }, en: { title: "Learn Sharp Notes", description: "Understand and play sharp notes.", checklist: [{ text: "Play all 5 sharp notes (C#, D#, F#, G#, A#)", checked: false }, { text: "Hear the sound difference between C and C#", checked: false }, { text: "Find all sharps blindly on the keyboard", checked: false }] } },
  quiz: { de: [{ question: "Was bedeutet ein Kreuz (#) vor einer Note?", answer: "Das Kreuz erhöht die Note um einen Halbton. C# ist die schwarze Taste rechts von C. Sonderfälle: E# = F und H# = C (dort gibt es keine schwarze Taste)." }], en: [{ question: "What does a sharp (#) before a note mean?", answer: "A sharp raises the note by one half step. C# is the black key to the right of C. Special cases: E# = F and B# = C (there's no black key there)." }] }
};
