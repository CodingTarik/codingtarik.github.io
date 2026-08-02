export const intervalsOnKeyboard = {
  title: { de: "Intervalle auf der Tastatur", en: "Intervals on the Keyboard" },
  description: { de: "Intervalle sehen, spielen und in Stücken erkennen.", en: "See, play, and recognize intervals in pieces." },
  content: {
    de: `
### Intervalle auf der Tastatur finden

Jetzt verbinden wir Intervalle mit der **Tastatur**. Du lernst, Intervalle sofort zu erkennen – visuell auf den Tasten und auditiv beim Hören.

<div className="bg-indigo-50 dark:bg-indigo-900/20 p-6 rounded-xl border-l-4 border-indigo-500 my-6">
  <h4 className="font-bold text-indigo-800 dark:text-indigo-200 mb-3">Schnelle Erkennung auf den Tasten</h4>
  <ul className="text-sm text-indigo-700 dark:text-indigo-300 space-y-2">
    <li><strong>Sekunde:</strong> Direkt benachbarte weiße Tasten (keine Lücke)</li>
    <li><strong>Terz:</strong> Eine weiße Taste dazwischen übersprungen</li>
    <li><strong>Quarte:</strong> Zwei weiße Tasten übersprungen</li>
    <li><strong>Quinte:</strong> Drei weiße Tasten übersprungen</li>
    <li><strong>Oktave:</strong> Derselbe Ton, 8 Stufen höher (z.B. C4→C5)</li>
  </ul>
</div>

### Intervalle in der Musik erkennen

<div className="bg-amber-50 dark:bg-amber-900/20 p-6 rounded-xl my-6">
  <h4 className="font-bold text-amber-800 dark:text-amber-200 mb-3">Bekannte Melodien als Eselsbrücke</h4>
  <ul className="text-sm text-amber-700 dark:text-amber-300 space-y-1 list-disc list-inside">
    <li><strong>Große Sekunde aufwärts:</strong> "Happy Birthday" (Hap-PY)</li>
    <li><strong>Große Terz aufwärts:</strong> "Oh When The Saints" (Oh-WHEN)</li>
    <li><strong>Quarte aufwärts:</strong> Hochzeitsmarsch (Da-DA)</li>
    <li><strong>Quinte aufwärts:</strong> Star Wars Thema (Da-DAA)</li>
    <li><strong>Oktave aufwärts:</strong> "Somewhere Over The Rainbow" (Some-WHERE)</li>
  </ul>
</div>

### Übung

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border-2 border-green-300 dark:border-green-700 my-6">
  <h4 className="font-bold text-green-800 dark:text-green-200 mb-3">Intervall-Training</h4>
  <ol className="text-sm text-green-700 dark:text-green-300 space-y-2 list-decimal list-inside">
    <li>Spiele alle Intervalle von C aus: C-D (2), C-E (3), C-F (4), C-G (5), C-C (8)</li>
    <li>Spiele sie als Zweiklang (beide Töne gleichzeitig)</li>
    <li>Lass jemanden ein Intervall spielen – rate welches es ist</li>
    <li>Singe die Referenz-Melodien und spüre den Klang</li>
  </ol>
</div>
    `,
    en: `
### Finding Intervals on the Keyboard

Now we connect intervals with the **keyboard**. You'll learn to recognize intervals instantly – visually on the keys and aurally by hearing.

<div className="bg-indigo-50 dark:bg-indigo-900/20 p-6 rounded-xl border-l-4 border-indigo-500 my-6">
  <h4 className="font-bold text-indigo-800 dark:text-indigo-200 mb-3">Quick Recognition on Keys</h4>
  <ul className="text-sm text-indigo-700 dark:text-indigo-300 space-y-2">
    <li><strong>Second:</strong> Directly adjacent white keys (no gap)</li>
    <li><strong>Third:</strong> One white key skipped</li>
    <li><strong>Fourth:</strong> Two white keys skipped</li>
    <li><strong>Fifth:</strong> Three white keys skipped</li>
    <li><strong>Octave:</strong> Same note, 8 steps higher (e.g. C4→C5)</li>
  </ul>
</div>

### Recognizing Intervals in Music

<div className="bg-amber-50 dark:bg-amber-900/20 p-6 rounded-xl my-6">
  <h4 className="font-bold text-amber-800 dark:text-amber-200 mb-3">Famous Melodies as Memory Aids</h4>
  <ul className="text-sm text-amber-700 dark:text-amber-300 space-y-1 list-disc list-inside">
    <li><strong>Major second up:</strong> "Happy Birthday" (Hap-PY)</li>
    <li><strong>Major third up:</strong> "Oh When The Saints" (Oh-WHEN)</li>
    <li><strong>Fourth up:</strong> Wedding March (Da-DA)</li>
    <li><strong>Fifth up:</strong> Star Wars Theme (Da-DAA)</li>
    <li><strong>Octave up:</strong> "Somewhere Over The Rainbow" (Some-WHERE)</li>
  </ul>
</div>

### Exercise

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border-2 border-green-300 dark:border-green-700 my-6">
  <h4 className="font-bold text-green-800 dark:text-green-200 mb-3">Interval Training</h4>
  <ol className="text-sm text-green-700 dark:text-green-300 space-y-2 list-decimal list-inside">
    <li>Play all intervals from C: C-D (2nd), C-E (3rd), C-F (4th), C-G (5th), C-C (8ve)</li>
    <li>Play them as dyads (both notes simultaneously)</li>
    <li>Have someone play an interval – guess which one it is</li>
    <li>Sing the reference melodies and feel the sound</li>
  </ol>
</div>
    `
  },
  task: { de: { title: "Intervalle auf der Tastatur", description: "Übe Intervalle visuell und auditiv auf dem Klavier.", checklist: [{ text: "Spiele alle 5 Grundintervalle von C aus", checked: false }, { text: "Lerne die Melodie-Eselsbrücken für jedes Intervall", checked: false }, { text: "Erkenne 5 gespielte Intervalle korrekt nach Gehör", checked: false }] }, en: { title: "Intervals on the Keyboard", description: "Practice intervals visually and aurally on the piano.", checklist: [{ text: "Play all 5 basic intervals from C", checked: false }, { text: "Learn the melody mnemonics for each interval", checked: false }, { text: "Correctly identify 5 played intervals by ear", checked: false }] } },
  quiz: { de: [{ question: "Wie erkennt man eine Quinte auf der Tastatur?", answer: "Bei einer Quinte werden 3 weiße Tasten übersprungen (z.B. C→G). Im Notenbild ist es ein deutlicher Abstand. Klanglich erinnert sie an den Anfang von Star Wars – offen und kraftvoll." }], en: [{ question: "How do you recognize a fifth on the keyboard?", answer: "For a fifth, 3 white keys are skipped (e.g. C→G). In notation it's a clear gap. Sound-wise it reminds of the Star Wars opening – open and powerful." }] }
};
