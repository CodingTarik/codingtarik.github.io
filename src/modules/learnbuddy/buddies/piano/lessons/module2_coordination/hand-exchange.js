export const handExchange = {
  title: { de: "Handwechsel (Übergabe der Melodie)", en: "Hand Exchange (Melody Handoff)" },
  description: { de: "Die Melodie fließend von einer Hand zur anderen übergeben.", en: "Smoothly passing the melody from one hand to the other." },
  content: {
    de: `
### Handwechsel: Nahtlose Übergabe

In vielen Stücken wandert die **Melodie** von der rechten Hand zur linken und zurück. Die Kunst ist, diesen Wechsel so **fließend** zu gestalten, dass der Zuhörer keinen Bruch hört.

<div className="bg-indigo-50 dark:bg-indigo-900/20 p-6 rounded-xl border-l-4 border-indigo-500 my-6">
  <h4 className="font-bold text-indigo-800 dark:text-indigo-200 mb-2">Das Prinzip</h4>
  <p className="text-sm text-indigo-700 dark:text-indigo-300">
    Stell dir vor, du übergibst einen Staffelstab: Die <strong>übernehmende Hand</strong> muss bereit sein und die <strong>abgebende Hand</strong> muss sauber loslassen. Überlappung im Timing ist der Schlüssel.
  </p>
</div>

### Technik

<div className="bg-amber-50 dark:bg-amber-900/20 p-6 rounded-xl my-6">
  <ul className="text-sm text-amber-700 dark:text-amber-300 space-y-2 list-disc list-inside">
    <li>Die <strong>neue Hand</strong> beginnt etwas bevor die alte aufhört</li>
    <li>Halte die <strong>Lautstärke konstant</strong> über den Wechsel hinweg</li>
    <li>Übe den Übergabepunkt isoliert – nur die 2-3 Noten um den Wechsel</li>
    <li>Die Melodie muss wie <strong>eine Stimme</strong> klingen, nicht wie zwei</li>
  </ul>
</div>

### Übung

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border-2 border-green-300 dark:border-green-700 my-6">
  <h4 className="font-bold text-green-800 dark:text-green-200 mb-3">Handwechsel üben</h4>
  <ol className="text-sm text-green-700 dark:text-green-300 space-y-2 list-decimal list-inside">
    <li>RH spielt: C-D-E (aufwärts)</li>
    <li>LH übernimmt: F-G (weiter aufwärts, am mittleren C beginnen)</li>
    <li>Der Übergang E→F muss fließend sein – gleiche Lautstärke!</li>
    <li>Dann rückwärts: LH: G-F, RH übernimmt: E-D-C</li>
  </ol>
</div>
    `,
    en: `
### Hand Exchange: Seamless Handoff

In many pieces, the **melody** travels from the right hand to the left and back. The art is making this exchange so **smooth** that the listener hears no break.

<div className="bg-indigo-50 dark:bg-indigo-900/20 p-6 rounded-xl border-l-4 border-indigo-500 my-6">
  <h4 className="font-bold text-indigo-800 dark:text-indigo-200 mb-2">The Principle</h4>
  <p className="text-sm text-indigo-700 dark:text-indigo-300">
    Imagine passing a relay baton: the <strong>receiving hand</strong> must be ready and the <strong>giving hand</strong> must release cleanly. Overlap in timing is key.
  </p>
</div>

### Technique

<div className="bg-amber-50 dark:bg-amber-900/20 p-6 rounded-xl my-6">
  <ul className="text-sm text-amber-700 dark:text-amber-300 space-y-2 list-disc list-inside">
    <li>The <strong>new hand</strong> starts slightly before the old one stops</li>
    <li>Keep <strong>volume constant</strong> across the exchange</li>
    <li>Practice the handoff point in isolation – just the 2-3 notes around the switch</li>
    <li>The melody must sound like <strong>one voice</strong>, not two</li>
  </ul>
</div>

### Exercise

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border-2 border-green-300 dark:border-green-700 my-6">
  <h4 className="font-bold text-green-800 dark:text-green-200 mb-3">Practice Hand Exchange</h4>
  <ol className="text-sm text-green-700 dark:text-green-300 space-y-2 list-decimal list-inside">
    <li>RH plays: C-D-E (ascending)</li>
    <li>LH takes over: F-G (continuing upward)</li>
    <li>The transition E→F must be smooth – same volume!</li>
    <li>Then reverse: LH: G-F, RH takes over: E-D-C</li>
  </ol>
</div>
    `
  },
  task: {
    de: {
      title: "Handwechsel meistern",
      description: "Übe die fließende Melodie-Übergabe zwischen den Händen.",
      checklist: [
        { text: "RH→LH Übergabe aufwärts ohne Unterbrechung", checked: false },
        { text: "LH→RH Übergabe abwärts ohne Unterbrechung", checked: false },
        { text: "Die Lautstärke bleibt über den Wechsel konstant", checked: false },
        { text: "Ein Zuhörer kann den Handwechsel nicht heraushören", checked: false }
      ]
    },
    en: {
      title: "Master Hand Exchange",
      description: "Practice smooth melody handoffs between hands.",
      checklist: [
        { text: "RH→LH handoff ascending without interruption", checked: false },
        { text: "LH→RH handoff descending without interruption", checked: false },
        { text: "Volume stays constant across the exchange", checked: false },
        { text: "A listener cannot detect the hand change", checked: false }
      ]
    }
  },
  quiz: {
    de: [
      { question: "Worauf muss man bei einem Handwechsel achten?", answer: "Die Lautstärke muss konstant bleiben, der Übergang fließend sein. Die übernehmende Hand beginnt leicht bevor die abgebende aufhört. Die Melodie soll wie eine Stimme klingen, nicht wie zwei getrennte Hände." }
    ],
    en: [
      { question: "What should you pay attention to during a hand exchange?", answer: "Volume must stay constant, the transition must be smooth. The receiving hand begins slightly before the giving hand stops. The melody should sound like one voice, not two separate hands." }
    ]
  }
};
