export const gMajorScale = {
  title: { de: 'G-Dur Tonleiter', en: 'G Major Scale' },
  description: { de: 'Die erste Tonleiter mit einem Vorzeichen: F#.', en: 'The first scale with one accidental: F#.' },
  content: { de: `
### G-Dur: Dein erstes Kreuz

Die **G-Dur Tonleiter** beginnt auf G und folgt dem Dur-Muster GT-GT-HT-GT-GT-GT-HT. Dabei brauchst du ein **F#** (Fis) statt dem normalen F.

<div className="bg-indigo-50 dark:bg-indigo-900/20 p-6 rounded-xl border-l-4 border-indigo-500 my-6">
  <h4 className="font-bold text-indigo-800 dark:text-indigo-200 mb-3">Die Noten</h4>
  <p className="text-sm text-indigo-700 dark:text-indigo-300">
    G – A – H – C – D – E – <strong>F#</strong> – G<br/>
    Nur eine schwarze Taste! Das F# steht als Vorzeichen am Anfang des Stücks.
  </p>
</div>

### Warum F#?

<div className="bg-amber-50 dark:bg-amber-900/20 p-6 rounded-xl my-6">
  <p className="text-sm text-amber-700 dark:text-amber-300">
    Das Dur-Muster verlangt zwischen E und dem nächsten Ton einen Ganztonschritt: E→F wäre nur ein Halbton! Also muss F zu F# erhöht werden, damit E→F# ein Ganztonschritt wird. Dann ist F#→G wieder ein Halbton – genau wie das Muster es verlangt.
  </p>
</div>

### Übung

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border-2 border-green-300 dark:border-green-700 my-6">
  <ol className="text-sm text-green-700 dark:text-green-300 space-y-2 list-decimal list-inside">
    <li>Spiele G-Dur langsam aufwärts und abwärts</li>
    <li>Achte besonders auf F# – die schwarze Taste!</li>
    <li>Spiele G-Dur und C-Dur im Wechsel und höre den Unterschied</li>
  </ol>
</div>
    `, en: `
### G Major: Your First Sharp

The **G major scale** starts on G and follows the major pattern W-W-H-W-W-W-H. You need an **F#** instead of regular F.

<div className="bg-indigo-50 dark:bg-indigo-900/20 p-6 rounded-xl border-l-4 border-indigo-500 my-6">
  <h4 className="font-bold text-indigo-800 dark:text-indigo-200 mb-3">The Notes</h4>
  <p className="text-sm text-indigo-700 dark:text-indigo-300">
    G – A – B – C – D – E – <strong>F#</strong> – G<br/>
    Only one black key! F# appears as a key signature at the beginning of the piece.
  </p>
</div>

### Why F#?

<div className="bg-amber-50 dark:bg-amber-900/20 p-6 rounded-xl my-6">
  <p className="text-sm text-amber-700 dark:text-amber-300">
    The major pattern requires a whole step between E and the next note: E→F would be only a half step! So F must be raised to F# so that E→F# becomes a whole step. Then F#→G is a half step – exactly as the pattern demands.
  </p>
</div>

### Exercise

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border-2 border-green-300 dark:border-green-700 my-6">
  <ol className="text-sm text-green-700 dark:text-green-300 space-y-2 list-decimal list-inside">
    <li>Play G major slowly ascending and descending</li>
    <li>Pay special attention to F# – the black key!</li>
    <li>Alternate G major and C major and hear the difference</li>
  </ol>
</div>
    ` },
  task: { de: { title: 'G-Dur Tonleiter', description: 'Spiele G-Dur mit F# korrekt.', checklist: [{ text: 'Spiele G-Dur aufwärts mit F#', checked: false }, { text: 'Spiele G-Dur abwärts', checked: false }, { text: 'Erkläre warum G-Dur ein F# braucht', checked: false }] }, en: { title: 'G Major Scale', description: 'Play G major with F# correctly.', checklist: [{ text: 'Play G major ascending with F#', checked: false }, { text: 'Play G major descending', checked: false }, { text: 'Explain why G major needs F#', checked: false }] } },
  quiz: { de: [{ question: 'Warum hat G-Dur ein F# als Vorzeichen?', answer: 'Weil das Dur-Muster zwischen dem 6. und 7. Ton (E und F) einen Ganztonschritt verlangt. E→F ist nur ein Halbton, also muss F zu F# erhöht werden. Dann ergibt E→F# einen Ganzton und F#→G einen Halbton.' }], en: [{ question: 'Why does G major have F# as a key signature?', answer: 'Because the major pattern requires a whole step between the 6th and 7th notes (E and F). E→F is only a half step, so F must be raised to F#. Then E→F# gives a whole step and F#→G gives a half step.' }] }
};