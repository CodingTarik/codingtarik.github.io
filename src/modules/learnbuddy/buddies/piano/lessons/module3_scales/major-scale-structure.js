export const majorScaleStructure = {
  title: { de: 'Aufbau einer Dur-Tonleiter', en: 'Major Scale Structure' },
  description: { de: 'Das Muster GT-GT-HT-GT-GT-GT-HT verstehen.', en: 'Understanding the W-W-H-W-W-W-H pattern.' },
  content: { de: `
### Die Dur-Tonleiter: Das Fundament der westlichen Musik

Eine **Dur-Tonleiter** besteht aus 8 Tönen mit einem festen Muster von Ganz- und Halbtonschritten: **GT-GT-HT-GT-GT-GT-HT** (Ganzton-Ganzton-Halbton-Ganzton-Ganzton-Ganzton-Halbton).

<div className="bg-indigo-50 dark:bg-indigo-900/20 p-6 rounded-xl border-l-4 border-indigo-500 my-6">
  <h4 className="font-bold text-indigo-800 dark:text-indigo-200 mb-3">Das Muster</h4>
  <p className="text-sm text-indigo-700 dark:text-indigo-300">
    <strong>GT – GT – HT – GT – GT – GT – HT</strong><br/>
    Dieses Muster erzeugt den typischen "fröhlichen" Dur-Klang. Egal von welchem Ton du startest – wenn du dieses Muster anwendest, bekommst du immer eine Dur-Tonleiter.
  </p>
</div>

### Am Beispiel C-Dur

<div className="bg-amber-50 dark:bg-amber-900/20 p-6 rounded-xl my-6">
  <p className="text-sm text-amber-700 dark:text-amber-300">
    C →(GT)→ D →(GT)→ E →(HT)→ F →(GT)→ G →(GT)→ A →(GT)→ H →(HT)→ C<br/><br/>
    C-Dur verwendet nur weiße Tasten! Die Halbtöne fallen natürlich auf E→F und H→C.
  </p>
</div>

### Übung

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border-2 border-green-300 dark:border-green-700 my-6">
  <ol className="text-sm text-green-700 dark:text-green-300 space-y-2 list-decimal list-inside">
    <li>Spiele C-Dur und sage bei jedem Schritt laut "Ganz" oder "Halb"</li>
    <li>Beginne auf D und wende das Muster GT-GT-HT-GT-GT-GT-HT an</li>
    <li>Welche schwarzen Tasten brauchst du für D-Dur?</li>
  </ol>
</div>
    `, en: `
### The Major Scale: Foundation of Western Music

A **major scale** consists of 8 notes with a fixed pattern of whole and half steps: **W-W-H-W-W-W-H** (Whole-Whole-Half-Whole-Whole-Whole-Half).

<div className="bg-indigo-50 dark:bg-indigo-900/20 p-6 rounded-xl border-l-4 border-indigo-500 my-6">
  <h4 className="font-bold text-indigo-800 dark:text-indigo-200 mb-3">The Pattern</h4>
  <p className="text-sm text-indigo-700 dark:text-indigo-300">
    <strong>W – W – H – W – W – W – H</strong><br/>
    This pattern creates the typical "happy" major sound. No matter which note you start from – applying this pattern always gives you a major scale.
  </p>
</div>

### C Major Example

<div className="bg-amber-50 dark:bg-amber-900/20 p-6 rounded-xl my-6">
  <p className="text-sm text-amber-700 dark:text-amber-300">
    C →(W)→ D →(W)→ E →(H)→ F →(W)→ G →(W)→ A →(W)→ B →(H)→ C<br/><br/>
    C major uses only white keys! The half steps naturally fall on E→F and B→C.
  </p>
</div>

### Exercise

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border-2 border-green-300 dark:border-green-700 my-6">
  <ol className="text-sm text-green-700 dark:text-green-300 space-y-2 list-decimal list-inside">
    <li>Play C major and say "whole" or "half" aloud at each step</li>
    <li>Start on D and apply the pattern W-W-H-W-W-W-H</li>
    <li>Which black keys do you need for D major?</li>
  </ol>
</div>
    ` },
  task: { de: { title: 'Dur-Tonleiter Aufbau', description: 'Verstehe das GT-GT-HT-GT-GT-GT-HT Muster.', checklist: [{ text: 'Sage das Dur-Tonleiter-Muster auswendig', checked: false }, { text: 'Spiele C-Dur und benenne jeden Schritt', checked: false }, { text: 'Baue eine D-Dur Tonleiter mit dem Muster', checked: false }] }, en: { title: 'Major Scale Structure', description: 'Understand the W-W-H-W-W-W-H pattern.', checklist: [{ text: 'Recite the major scale pattern from memory', checked: false }, { text: 'Play C major and name each step', checked: false }, { text: 'Build a D major scale using the pattern', checked: false }] } },
  quiz: { de: [{ question: 'Wie lautet das Muster einer Dur-Tonleiter?', answer: 'GT-GT-HT-GT-GT-GT-HT (Ganzton-Ganzton-Halbton-Ganzton-Ganzton-Ganzton-Halbton). Dieses Muster erzeugt den typischen Dur-Klang und funktioniert von jedem Startton aus.' }], en: [{ question: 'What is the pattern of a major scale?', answer: 'W-W-H-W-W-W-H (Whole-Whole-Half-Whole-Whole-Whole-Half). This pattern creates the typical major sound and works from any starting note.' }] }
};