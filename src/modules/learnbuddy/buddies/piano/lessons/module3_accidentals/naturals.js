export const naturals = {
  title: { de: "Das Auflösungszeichen", en: "The Natural Sign" },
  description: { de: "Macht Kreuz und B rückgängig – zurück zur weißen Taste.", en: "Cancels sharps and flats – back to the white key." },
  content: { de: `
### Das Auflösungszeichen: Zurück zum Original

Das **Auflösungszeichen** (♮) hebt ein Kreuz oder B auf und setzt die Note auf ihren **natürlichen** Wert zurück – also auf die weiße Taste.

<div className="bg-indigo-50 dark:bg-indigo-900/20 p-6 rounded-xl border-l-4 border-indigo-500 my-6">
  <h4 className="font-bold text-indigo-800 dark:text-indigo-200 mb-2">Wann braucht man es?</h4>
  <p className="text-sm text-indigo-700 dark:text-indigo-300">
    Wenn ein Stück Vorzeichen hat (z.B. F# in G-Dur) und du ausnahmsweise ein normales F spielen sollst, steht ein Auflösungszeichen vor dem F. Es sagt: "Vergiss das Kreuz, spiel die normale weiße Taste!"
  </p>
</div>

### Regeln

<div className="bg-amber-50 dark:bg-amber-900/20 p-6 rounded-xl my-6">
  <ul className="text-sm text-amber-700 dark:text-amber-300 space-y-2 list-disc list-inside">
    <li>Das Auflösungszeichen gilt nur für den <strong>aktuellen Takt</strong></li>
    <li>Im nächsten Takt gelten wieder die Vorzeichen des Stücks</li>
    <li>Es sieht aus wie ein kleines Kästchen mit Linien oben und unten</li>
  </ul>
</div>

### Übung

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border-2 border-green-300 dark:border-green-700 my-6">
  <h4 className="font-bold text-green-800 dark:text-green-200 mb-3">Auflösungszeichen spielen</h4>
  <ol className="text-sm text-green-700 dark:text-green-300 space-y-2 list-decimal list-inside">
    <li>Stell dir vor: Vorzeichen F#. Spiele: G-A-F#-G</li>
    <li>Jetzt mit Auflösung: G-A-F♮-G (normales F!)</li>
    <li>Höre den Unterschied zwischen F# und F♮</li>
    <li>Übe auch mit Bb→B♮</li>
  </ol>
</div>
    `, en: `
### The Natural Sign: Back to Original

The **natural sign** (♮) cancels a sharp or flat and returns the note to its **natural** value – the white key.

<div className="bg-indigo-50 dark:bg-indigo-900/20 p-6 rounded-xl border-l-4 border-indigo-500 my-6">
  <h4 className="font-bold text-indigo-800 dark:text-indigo-200 mb-2">When Do You Need It?</h4>
  <p className="text-sm text-indigo-700 dark:text-indigo-300">
    If a piece has key signature sharps/flats (e.g. F# in G major) and you need to play a regular F, a natural sign appears before the F. It says: "Forget the sharp, play the normal white key!"
  </p>
</div>

### Rules

<div className="bg-amber-50 dark:bg-amber-900/20 p-6 rounded-xl my-6">
  <ul className="text-sm text-amber-700 dark:text-amber-300 space-y-2 list-disc list-inside">
    <li>The natural sign only applies for the <strong>current measure</strong></li>
    <li>In the next measure, the key signature takes effect again</li>
    <li>It looks like a small box with lines above and below</li>
  </ul>
</div>

### Exercise

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border-2 border-green-300 dark:border-green-700 my-6">
  <h4 className="font-bold text-green-800 dark:text-green-200 mb-3">Playing Natural Signs</h4>
  <ol className="text-sm text-green-700 dark:text-green-300 space-y-2 list-decimal list-inside">
    <li>Imagine: Key signature F#. Play: G-A-F#-G</li>
    <li>Now with natural: G-A-F♮-G (normal F!)</li>
    <li>Hear the difference between F# and F♮</li>
    <li>Practice also with Bb→B♮</li>
  </ol>
</div>
    ` },
  task: { de: { title: "Auflösungszeichen", description: "Verstehe wann und wie das Auflösungszeichen eingesetzt wird.", checklist: [{ text: "Spiele eine Passage mit F# und dann mit F♮ – höre den Unterschied", checked: false }, { text: "Erkläre die Regel: Auflösung gilt nur für den aktuellen Takt", checked: false }, { text: "Erkenne Auflösungszeichen in einem Notenblatt", checked: false }] }, en: { title: "Natural Signs", description: "Understand when and how the natural sign is used.", checklist: [{ text: "Play a passage with F# then F♮ – hear the difference", checked: false }, { text: "Explain the rule: natural only applies for the current measure", checked: false }, { text: "Recognize natural signs in sheet music", checked: false }] } },
  quiz: { de: [{ question: "Was bewirkt das Auflösungszeichen?", answer: "Es hebt ein vorher gesetztes Kreuz oder B auf und setzt die Note auf ihren natürlichen Wert (die weiße Taste) zurück. Es gilt nur für den aktuellen Takt – im nächsten Takt gelten wieder die Vorzeichen des Stücks." }], en: [{ question: "What does the natural sign do?", answer: "It cancels a previously set sharp or flat and returns the note to its natural value (the white key). It only applies for the current measure – in the next measure, the key signature takes effect again." }] }
};
