export const minorTriad = {
  title: { de: 'Moll-Dreiklang', en: 'Minor Triad' },
  description: { de: 'Der traurige Dreiklang – Grundton + kleine Terz + große Terz.', en: 'The sad chord – root + minor third + major third.' },
  content: { de: `
### Der Moll-Dreiklang: Traurig und dunkel

Ein **Moll-Dreiklang** ist das Gegenstück zum Dur-Dreiklang. Er besteht aus: Grundton + **kleine Terz** + **große Terz**. Er klingt traurig, nachdenklich oder melancholisch.

<div className="bg-indigo-50 dark:bg-indigo-900/20 p-6 rounded-xl border-l-4 border-indigo-500 my-6">
  <h4 className="font-bold text-indigo-800 dark:text-indigo-200 mb-3">Aufbau</h4>
  <ul className="text-sm text-indigo-700 dark:text-indigo-300 space-y-1">
    <li><strong>C-Moll (Cm):</strong> C – Eb – G (Grundton + kleine Terz + Quinte)</li>
    <li><strong>A-Moll (Am):</strong> A – C – E (nur weiße Tasten!)</li>
    <li><strong>D-Moll (Dm):</strong> D – F – A</li>
  </ul>
  <p className="text-sm text-indigo-700 dark:text-indigo-300 mt-2">Formel: <strong>3 Halbtöne + 4 Halbtöne</strong> (kleine Terz + große Terz)</p>
</div>

### Dur vs. Moll hören

<div className="bg-amber-50 dark:bg-amber-900/20 p-6 rounded-xl my-6">
  <p className="text-sm text-amber-700 dark:text-amber-300">
    Spiele C-Dur (C-E-G) und direkt danach C-Moll (C-Eb-G). Der einzige Unterschied ist die <strong>Terz</strong>: E (groß) vs. Eb (klein). Dieser eine Halbton verändert den gesamten Charakter!
  </p>
</div>

### Übung

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border-2 border-green-300 dark:border-green-700 my-6">
  <ol className="text-sm text-green-700 dark:text-green-300 space-y-2 list-decimal list-inside">
    <li>Spiele A-Moll (A-C-E) – der einfachste Moll-Dreiklang (nur weiße Tasten)</li>
    <li>Spiele D-Moll (D-F-A) und E-Moll (E-G-H)</li>
    <li>Vergleiche: C-Dur vs. C-Moll – höre den Stimmungswechsel</li>
  </ol>
</div>
    `, en: `
### The Minor Triad: Sad and Dark

A **minor triad** is the counterpart to the major triad. It consists of: root + **minor third** + **major third**. It sounds sad, thoughtful, or melancholic.

<div className="bg-indigo-50 dark:bg-indigo-900/20 p-6 rounded-xl border-l-4 border-indigo-500 my-6">
  <h4 className="font-bold text-indigo-800 dark:text-indigo-200 mb-3">Construction</h4>
  <ul className="text-sm text-indigo-700 dark:text-indigo-300 space-y-1">
    <li><strong>C minor (Cm):</strong> C – Eb – G (root + minor third + fifth)</li>
    <li><strong>A minor (Am):</strong> A – C – E (white keys only!)</li>
    <li><strong>D minor (Dm):</strong> D – F – A</li>
  </ul>
  <p className="text-sm text-indigo-700 dark:text-indigo-300 mt-2">Formula: <strong>3 half steps + 4 half steps</strong> (minor third + major third)</p>
</div>

### Hearing Major vs. Minor

<div className="bg-amber-50 dark:bg-amber-900/20 p-6 rounded-xl my-6">
  <p className="text-sm text-amber-700 dark:text-amber-300">
    Play C major (C-E-G) then immediately C minor (C-Eb-G). The only difference is the <strong>third</strong>: E (major) vs. Eb (minor). This single half step changes the entire character!
  </p>
</div>

### Exercise

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border-2 border-green-300 dark:border-green-700 my-6">
  <ol className="text-sm text-green-700 dark:text-green-300 space-y-2 list-decimal list-inside">
    <li>Play A minor (A-C-E) – the easiest minor triad (white keys only)</li>
    <li>Play D minor (D-F-A) and E minor (E-G-B)</li>
    <li>Compare: C major vs. C minor – hear the mood change</li>
  </ol>
</div>
    ` },
  task: { de: { title: 'Moll-Dreiklänge', description: 'Spiele und höre den Unterschied zu Dur.', checklist: [{ text: 'Spiele Am (A-C-E), Dm (D-F-A), Em (E-G-H)', checked: false }, { text: 'Vergleiche C-Dur mit C-Moll', checked: false }, { text: 'Erkenne blind ob Dur oder Moll gespielt wird', checked: false }] }, en: { title: 'Minor Triads', description: 'Play and hear the difference from major.', checklist: [{ text: 'Play Am (A-C-E), Dm (D-F-A), Em (E-G-B)', checked: false }, { text: 'Compare C major with C minor', checked: false }, { text: 'Identify by ear if major or minor is played', checked: false }] } },
  quiz: { de: [{ question: 'Was ist der Unterschied zwischen Dur und Moll?', answer: 'Der einzige Unterschied ist die Terz: Dur hat eine große Terz (4 Halbtöne), Moll hat eine kleine Terz (3 Halbtöne). Die Quinte bleibt gleich. Dur klingt fröhlich, Moll traurig.' }], en: [{ question: 'What is the difference between major and minor?', answer: 'The only difference is the third: major has a major third (4 half steps), minor has a minor third (3 half steps). The fifth stays the same. Major sounds happy, minor sounds sad.' }] }
};