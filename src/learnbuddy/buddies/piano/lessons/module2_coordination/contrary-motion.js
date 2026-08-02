export const contraryMotion = {
  title: { de: "Gegenbewegung vs. Parallelbewegung", en: "Contrary Motion vs. Parallel Motion" },
  description: { de: "Zwei grundlegende Arten, wie sich beide Hände bewegen.", en: "Two fundamental ways both hands can move." },
  content: {
    de: `
### Bewegungsarten: Parallel und Gegen

Wenn beide Hände gleichzeitig spielen, können sie sich auf verschiedene Weisen bewegen. Die zwei Grundformen sind **Parallelbewegung** und **Gegenbewegung**.

<div className="bg-indigo-50 dark:bg-indigo-900/20 p-6 rounded-xl border-l-4 border-indigo-500 my-6">
  <h4 className="font-bold text-indigo-800 dark:text-indigo-200 mb-3">Parallelbewegung</h4>
  <p className="text-sm text-indigo-700 dark:text-indigo-300">
    Beide Hände bewegen sich in die <strong>gleiche Richtung</strong>: Beide aufwärts oder beide abwärts. Das klingt einheitlich und verstärkend.
  </p>
</div>

<div className="bg-amber-50 dark:bg-amber-900/20 p-6 rounded-xl border-l-4 border-amber-500 my-6">
  <h4 className="font-bold text-amber-800 dark:text-amber-200 mb-3">Gegenbewegung</h4>
  <p className="text-sm text-amber-700 dark:text-amber-300">
    Die Hände bewegen sich in <strong>entgegengesetzte Richtungen</strong>: Eine Hand geht hoch, die andere runter. Das klingt spannend und öffnend.
  </p>
</div>

### Übungen

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border-2 border-green-300 dark:border-green-700 my-6">
  <h4 className="font-bold text-green-800 dark:text-green-200 mb-3">Beide Arten üben</h4>
  <ol className="text-sm text-green-700 dark:text-green-300 space-y-3 list-decimal list-inside">
    <li><strong>Parallel aufwärts:</strong> Beide Hände: C-D-E-F-G gleichzeitig</li>
    <li><strong>Parallel abwärts:</strong> Beide Hände: G-F-E-D-C gleichzeitig</li>
    <li><strong>Gegenbewegung:</strong> RH: C-D-E-F-G aufwärts, LH: G-F-E-D-C abwärts (gleichzeitig)</li>
    <li><strong>Gegenbewegung umgekehrt:</strong> RH: G-F-E-D-C abwärts, LH: C-D-E-F-G aufwärts</li>
  </ol>
</div>
    `,
    en: `
### Movement Types: Parallel and Contrary

When both hands play simultaneously, they can move in different ways. The two basic forms are **parallel motion** and **contrary motion**.

<div className="bg-indigo-50 dark:bg-indigo-900/20 p-6 rounded-xl border-l-4 border-indigo-500 my-6">
  <h4 className="font-bold text-indigo-800 dark:text-indigo-200 mb-3">Parallel Motion</h4>
  <p className="text-sm text-indigo-700 dark:text-indigo-300">
    Both hands move in the <strong>same direction</strong>: both ascending or both descending. This sounds unified and reinforcing.
  </p>
</div>

<div className="bg-amber-50 dark:bg-amber-900/20 p-6 rounded-xl border-l-4 border-amber-500 my-6">
  <h4 className="font-bold text-amber-800 dark:text-amber-200 mb-3">Contrary Motion</h4>
  <p className="text-sm text-amber-700 dark:text-amber-300">
    Hands move in <strong>opposite directions</strong>: one hand goes up, the other goes down. This sounds exciting and opening.
  </p>
</div>

### Exercises

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border-2 border-green-300 dark:border-green-700 my-6">
  <h4 className="font-bold text-green-800 dark:text-green-200 mb-3">Practice Both Types</h4>
  <ol className="text-sm text-green-700 dark:text-green-300 space-y-3 list-decimal list-inside">
    <li><strong>Parallel ascending:</strong> Both hands: C-D-E-F-G simultaneously</li>
    <li><strong>Parallel descending:</strong> Both hands: G-F-E-D-C simultaneously</li>
    <li><strong>Contrary motion:</strong> RH: C-D-E-F-G up, LH: G-F-E-D-C down (simultaneously)</li>
    <li><strong>Contrary reversed:</strong> RH: G-F-E-D-C down, LH: C-D-E-F-G up</li>
  </ol>
</div>
    `
  },
  task: {
    de: {
      title: "Parallel- und Gegenbewegung",
      description: "Übe beide Bewegungsarten mit beiden Händen.",
      checklist: [
        { text: "Spiele Parallelbewegung aufwärts fehlerfrei", checked: false },
        { text: "Spiele Parallelbewegung abwärts fehlerfrei", checked: false },
        { text: "Spiele Gegenbewegung (RH hoch, LH runter)", checked: false },
        { text: "Wechsle zwischen Parallel und Gegen ohne Pause", checked: false }
      ]
    },
    en: {
      title: "Parallel and Contrary Motion",
      description: "Practice both movement types with both hands.",
      checklist: [
        { text: "Play parallel motion ascending without errors", checked: false },
        { text: "Play parallel motion descending without errors", checked: false },
        { text: "Play contrary motion (RH up, LH down)", checked: false },
        { text: "Switch between parallel and contrary without pausing", checked: false }
      ]
    }
  },
  quiz: {
    de: [
      { question: "Was ist der Unterschied zwischen Parallel- und Gegenbewegung?", answer: "Bei der Parallelbewegung gehen beide Hände in die gleiche Richtung (beide hoch oder beide runter). Bei der Gegenbewegung gehen sie in entgegengesetzte Richtungen (eine hoch, die andere runter). Parallelbewegung klingt einheitlich, Gegenbewegung klingt öffnend." }
    ],
    en: [
      { question: "What's the difference between parallel and contrary motion?", answer: "In parallel motion both hands move in the same direction (both up or both down). In contrary motion they move in opposite directions (one up, the other down). Parallel sounds unified, contrary sounds opening." }
    ]
  }
};
