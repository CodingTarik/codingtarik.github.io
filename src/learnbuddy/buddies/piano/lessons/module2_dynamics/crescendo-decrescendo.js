export const crescendoDecrescendo = {
  title: { de: "Crescendo und Decrescendo", en: "Crescendo and Decrescendo" },
  description: { de: "Allmählich lauter oder leiser werden – fließende Dynamik.", en: "Gradually getting louder or softer – flowing dynamics." },
  content: {
    de: `
### Crescendo & Decrescendo: Fließende Lautstärke

Statt abrupt zwischen leise und laut zu wechseln, kannst du die Lautstärke **allmählich** verändern. Das macht Musik lebendig und emotional!

<div className="bg-indigo-50 dark:bg-indigo-900/20 p-6 rounded-xl border-l-4 border-indigo-500 my-6">
  <h4 className="font-bold text-indigo-800 dark:text-indigo-200 mb-3">Die Zeichen</h4>
  <ul className="text-sm text-indigo-700 dark:text-indigo-300 space-y-2">
    <li><strong>Crescendo (cresc.):</strong> Allmählich lauter werden. Zeichen: öffnende Gabel &lt; </li>
    <li><strong>Decrescendo (decresc.) / Diminuendo (dim.):</strong> Allmählich leiser werden. Zeichen: schließende Gabel &gt; </li>
  </ul>
</div>

### So spielst du es

<div className="bg-amber-50 dark:bg-amber-900/20 p-6 rounded-xl my-6">
  <h4 className="font-bold text-amber-800 dark:text-amber-200 mb-3">Tipps</h4>
  <ul className="text-sm text-amber-700 dark:text-amber-300 space-y-2 list-disc list-inside">
    <li><strong>Crescendo:</strong> Beginne leise und steigere langsam das Armgewicht mit jeder Note</li>
    <li><strong>Decrescendo:</strong> Beginne laut und nimm schrittweise Gewicht weg</li>
    <li>Die Veränderung sollte <strong>gleichmäßig</strong> sein – nicht plötzlich!</li>
    <li>Stelle dir eine Rampe vor, nicht eine Treppe</li>
  </ul>
</div>

### Übung

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border-2 border-green-300 dark:border-green-700 my-6">
  <h4 className="font-bold text-green-800 dark:text-green-200 mb-3">Crescendo/Decrescendo üben</h4>
  <ol className="text-sm text-green-700 dark:text-green-300 space-y-2 list-decimal list-inside">
    <li><strong>Crescendo:</strong> Spiele C-D-E-F-G, starte in pp und ende in ff</li>
    <li><strong>Decrescendo:</strong> Spiele G-F-E-D-C, starte in ff und ende in pp</li>
    <li><strong>Welle:</strong> C-D-E-F-G-F-E-D-C – crescendo aufwärts, decrescendo abwärts</li>
    <li>Die Lautstärke soll sich wie eine Welle anfühlen</li>
  </ol>
</div>
    `,
    en: `
### Crescendo & Decrescendo: Flowing Volume

Instead of abruptly switching between soft and loud, you can change volume **gradually**. This makes music vibrant and emotional!

<div className="bg-indigo-50 dark:bg-indigo-900/20 p-6 rounded-xl border-l-4 border-indigo-500 my-6">
  <h4 className="font-bold text-indigo-800 dark:text-indigo-200 mb-3">The Symbols</h4>
  <ul className="text-sm text-indigo-700 dark:text-indigo-300 space-y-2">
    <li><strong>Crescendo (cresc.):</strong> Gradually get louder. Symbol: opening hairpin &lt; </li>
    <li><strong>Decrescendo (decresc.) / Diminuendo (dim.):</strong> Gradually get softer. Symbol: closing hairpin &gt; </li>
  </ul>
</div>

### How to Play It

<div className="bg-amber-50 dark:bg-amber-900/20 p-6 rounded-xl my-6">
  <h4 className="font-bold text-amber-800 dark:text-amber-200 mb-3">Tips</h4>
  <ul className="text-sm text-amber-700 dark:text-amber-300 space-y-2 list-disc list-inside">
    <li><strong>Crescendo:</strong> Start soft and slowly increase arm weight with each note</li>
    <li><strong>Decrescendo:</strong> Start loud and gradually remove weight</li>
    <li>The change should be <strong>even</strong> – not sudden!</li>
    <li>Imagine a ramp, not stairs</li>
  </ul>
</div>

### Exercise

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border-2 border-green-300 dark:border-green-700 my-6">
  <h4 className="font-bold text-green-800 dark:text-green-200 mb-3">Practice Crescendo/Decrescendo</h4>
  <ol className="text-sm text-green-700 dark:text-green-300 space-y-2 list-decimal list-inside">
    <li><strong>Crescendo:</strong> Play C-D-E-F-G, start at pp and end at ff</li>
    <li><strong>Decrescendo:</strong> Play G-F-E-D-C, start at ff and end at pp</li>
    <li><strong>Wave:</strong> C-D-E-F-G-F-E-D-C – crescendo going up, decrescendo coming down</li>
    <li>The volume should feel like a wave</li>
  </ol>
</div>
    `
  },
  task: {
    de: {
      title: "Crescendo und Decrescendo",
      description: "Übe allmähliche Lautstärkeveränderungen.",
      checklist: [
        { text: "Spiele ein 5-Noten Crescendo von pp nach ff", checked: false },
        { text: "Spiele ein 5-Noten Decrescendo von ff nach pp", checked: false },
        { text: "Spiele eine 'Welle': crescendo aufwärts, decrescendo abwärts", checked: false },
        { text: "Die Lautstärke verändert sich gleichmäßig (keine Sprünge)", checked: false }
      ]
    },
    en: {
      title: "Crescendo and Decrescendo",
      description: "Practice gradual volume changes.",
      checklist: [
        { text: "Play a 5-note crescendo from pp to ff", checked: false },
        { text: "Play a 5-note decrescendo from ff to pp", checked: false },
        { text: "Play a 'wave': crescendo going up, decrescendo coming down", checked: false },
        { text: "Volume changes smoothly (no jumps)", checked: false }
      ]
    }
  },
  quiz: {
    de: [
      { question: "Was ist der Unterschied zwischen Crescendo und Decrescendo?", answer: "Crescendo bedeutet allmählich lauter werden (Gabel öffnet sich: <). Decrescendo (oder Diminuendo) bedeutet allmählich leiser werden (Gabel schließt sich: >). Beide beschreiben eine fließende, nicht abrupte Lautstärkeveränderung." },
      { question: "Wie erzeugt man ein gleichmäßiges Crescendo?", answer: "Indem man mit jeder Note schrittweise mehr Armgewicht einsetzt. Die Steigerung sollte gleichmäßig wie eine Rampe sein, nicht stufenweise. Man beginnt leise und steigert die Geschwindigkeit des Fingeranschlags und das Armgewicht kontinuierlich." }
    ],
    en: [
      { question: "What's the difference between crescendo and decrescendo?", answer: "Crescendo means gradually getting louder (hairpin opens: <). Decrescendo (or diminuendo) means gradually getting softer (hairpin closes: >). Both describe a flowing, not abrupt, volume change." },
      { question: "How do you create an even crescendo?", answer: "By gradually increasing arm weight with each note. The increase should be smooth like a ramp, not step-wise. Start soft and continuously increase finger attack speed and arm weight." }
    ]
  }
};
