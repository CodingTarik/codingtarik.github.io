export const mezzoForte = {
  title: { de: "mf (mezzoforte) und mp (mezzopiano)", en: "mf (mezzo forte) and mp (mezzo piano)" },
  description: { de: "Die mittleren Lautstärken zwischen leise und laut.", en: "The middle volumes between soft and loud." },
  content: {
    de: `
### Die Zwischenstufen: mf und mp

Zwischen leise (p) und laut (f) gibt es Zwischenstufen: **mf (mezzoforte)** = mittel-laut und **mp (mezzopiano)** = mittel-leise. "Mezzo" bedeutet auf Italienisch "halb" oder "mittel".

<div className="bg-indigo-50 dark:bg-indigo-900/20 p-6 rounded-xl border-l-4 border-indigo-500 my-6">
  <h4 className="font-bold text-indigo-800 dark:text-indigo-200 mb-3">Die Dynamik-Skala (leise → laut)</h4>
  <ul className="text-sm text-indigo-700 dark:text-indigo-300 space-y-1">
    <li><strong>pp</strong> (pianissimo) – sehr leise</li>
    <li><strong>p</strong> (piano) – leise</li>
    <li><strong>mp</strong> (mezzopiano) – mittel-leise</li>
    <li><strong>mf</strong> (mezzoforte) – mittel-laut</li>
    <li><strong>f</strong> (forte) – laut</li>
    <li><strong>ff</strong> (fortissimo) – sehr laut</li>
  </ul>
</div>

### Der Unterschied zwischen mf und mp

<div className="bg-amber-50 dark:bg-amber-900/20 p-6 rounded-xl my-6">
  <h4 className="font-bold text-amber-800 dark:text-amber-200 mb-3">Subtile Unterschiede</h4>
  <p className="text-sm text-amber-700 dark:text-amber-300">
    <strong>mf</strong> ist die "normale Gesprächslautstärke" – du spielst mit mittlerem Gewicht, natürlich und entspannt. Das ist die häufigste Dynamikstufe in vielen Stücken.<br/><br/>
    <strong>mp</strong> ist etwas leiser als mf – wie ein ruhiges Gespräch. Sanft, aber nicht flüsternd.
  </p>
</div>

### Übung

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border-2 border-green-300 dark:border-green-700 my-6">
  <h4 className="font-bold text-green-800 dark:text-green-200 mb-3">Dynamik-Stufen üben</h4>
  <ol className="text-sm text-green-700 dark:text-green-300 space-y-2 list-decimal list-inside">
    <li>Spiele C-D-E-F-G in pp (sehr leise)</li>
    <li>Wiederhole in p (leise), dann mp (mittel-leise)</li>
    <li>Dann mf (mittel-laut), f (laut), ff (sehr laut)</li>
    <li>Spüre 6 verschiedene Lautstärke-Stufen – gleichmäßig gesteigert</li>
  </ol>
</div>
    `,
    en: `
### The In-Betweens: mf and mp

Between soft (p) and loud (f), there are intermediate levels: **mf (mezzo forte)** = moderately loud and **mp (mezzo piano)** = moderately soft. "Mezzo" means "half" or "medium" in Italian.

<div className="bg-indigo-50 dark:bg-indigo-900/20 p-6 rounded-xl border-l-4 border-indigo-500 my-6">
  <h4 className="font-bold text-indigo-800 dark:text-indigo-200 mb-3">The Dynamic Scale (soft → loud)</h4>
  <ul className="text-sm text-indigo-700 dark:text-indigo-300 space-y-1">
    <li><strong>pp</strong> (pianissimo) – very soft</li>
    <li><strong>p</strong> (piano) – soft</li>
    <li><strong>mp</strong> (mezzo piano) – moderately soft</li>
    <li><strong>mf</strong> (mezzo forte) – moderately loud</li>
    <li><strong>f</strong> (forte) – loud</li>
    <li><strong>ff</strong> (fortissimo) – very loud</li>
  </ul>
</div>

### The Difference Between mf and mp

<div className="bg-amber-50 dark:bg-amber-900/20 p-6 rounded-xl my-6">
  <h4 className="font-bold text-amber-800 dark:text-amber-200 mb-3">Subtle Differences</h4>
  <p className="text-sm text-amber-700 dark:text-amber-300">
    <strong>mf</strong> is "normal conversation volume" – you play with medium weight, naturally and relaxed. This is the most common dynamic level in many pieces.<br/><br/>
    <strong>mp</strong> is slightly softer than mf – like a quiet conversation. Gentle, but not whispering.
  </p>
</div>

### Exercise

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border-2 border-green-300 dark:border-green-700 my-6">
  <h4 className="font-bold text-green-800 dark:text-green-200 mb-3">Practice Dynamic Levels</h4>
  <ol className="text-sm text-green-700 dark:text-green-300 space-y-2 list-decimal list-inside">
    <li>Play C-D-E-F-G in pp (very soft)</li>
    <li>Repeat in p (soft), then mp (moderately soft)</li>
    <li>Then mf (moderately loud), f (loud), ff (very loud)</li>
    <li>Feel 6 different volume levels – evenly graduated</li>
  </ol>
</div>
    `
  },
  task: {
    de: {
      title: "Dynamik-Stufen beherrschen",
      description: "Übe alle sechs Dynamikstufen von pp bis ff.",
      checklist: [
        { text: "Spiele die gleiche Passage in pp, p, mp, mf, f, ff", checked: false },
        { text: "Erkenne den Unterschied zwischen mp und mf beim Spielen", checked: false },
        { text: "Spiele ein Stück mit markierten Dynamikwechseln", checked: false }
      ]
    },
    en: {
      title: "Master Dynamic Levels",
      description: "Practice all six dynamic levels from pp to ff.",
      checklist: [
        { text: "Play the same passage in pp, p, mp, mf, f, ff", checked: false },
        { text: "Recognize the difference between mp and mf while playing", checked: false },
        { text: "Play a piece with marked dynamic changes", checked: false }
      ]
    }
  },
  quiz: {
    de: [
      { question: "Was bedeutet 'mezzo' in mf und mp?", answer: "'Mezzo' ist Italienisch für 'halb' oder 'mittel'. Mezzoforte (mf) = mittel-laut, Mezzopiano (mp) = mittel-leise. Sie liegen in der Dynamikskala zwischen p (leise) und f (laut)." },
      { question: "Ordne die Dynamikzeichen von leise nach laut.", answer: "Von leise nach laut: pp (pianissimo) → p (piano) → mp (mezzopiano) → mf (mezzoforte) → f (forte) → ff (fortissimo). Es gibt noch extremere Stufen wie ppp und fff." }
    ],
    en: [
      { question: "What does 'mezzo' mean in mf and mp?", answer: "'Mezzo' is Italian for 'half' or 'medium'. Mezzo forte (mf) = moderately loud, mezzo piano (mp) = moderately soft. They sit between p (soft) and f (loud) on the dynamic scale." },
      { question: "Order the dynamic markings from soft to loud.", answer: "From soft to loud: pp (pianissimo) → p (piano) → mp (mezzo piano) → mf (mezzo forte) → f (forte) → ff (fortissimo). Even more extreme levels like ppp and fff exist." }
    ]
  }
};
