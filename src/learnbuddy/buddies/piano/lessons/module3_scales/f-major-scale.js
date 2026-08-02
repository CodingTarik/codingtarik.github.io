export const fMajorScale = {
  title: { de: 'F-Dur Tonleiter', en: 'F Major Scale' },
  description: { de: 'Die erste Tonleiter mit einem B-Vorzeichen: Bb.', en: 'The first scale with a flat: Bb.' },
  content: { de: `
### F-Dur: Dein erstes B

Die **F-Dur Tonleiter** beginnt auf F und braucht ein **Bb** (B) statt dem normalen H.

<div className="bg-indigo-50 dark:bg-indigo-900/20 p-6 rounded-xl border-l-4 border-indigo-500 my-6">
  <h4 className="font-bold text-indigo-800 dark:text-indigo-200 mb-3">Die Noten</h4>
  <p className="text-sm text-indigo-700 dark:text-indigo-300">
    F – G – A – <strong>Bb</strong> – C – D – E – F<br/>
    Nur eine schwarze Taste! Das Bb steht als Vorzeichen am Anfang.
  </p>
</div>

### Warum Bb?

<div className="bg-amber-50 dark:bg-amber-900/20 p-6 rounded-xl my-6">
  <p className="text-sm text-amber-700 dark:text-amber-300">
    Das Dur-Muster verlangt zwischen A und dem nächsten Ton einen Halbtonschritt (der 3.→4. Ton). A→H wäre ein Ganzton! Also muss H zu Bb erniedrigt werden: A→Bb = Halbton ✓
  </p>
</div>

### Übung

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border-2 border-green-300 dark:border-green-700 my-6">
  <ol className="text-sm text-green-700 dark:text-green-300 space-y-2 list-decimal list-inside">
    <li>Spiele F-Dur langsam und achte auf Bb</li>
    <li>Vergleiche F-Dur, C-Dur und G-Dur – höre die Unterschiede</li>
    <li>Jetzt kennst du 3 Dur-Tonleitern!</li>
  </ol>
</div>
    `, en: `
### F Major: Your First Flat

The **F major scale** starts on F and needs a **Bb** instead of regular B.

<div className="bg-indigo-50 dark:bg-indigo-900/20 p-6 rounded-xl border-l-4 border-indigo-500 my-6">
  <h4 className="font-bold text-indigo-800 dark:text-indigo-200 mb-3">The Notes</h4>
  <p className="text-sm text-indigo-700 dark:text-indigo-300">
    F – G – A – <strong>Bb</strong> – C – D – E – F<br/>
    Only one black key! Bb appears as a key signature at the beginning.
  </p>
</div>

### Why Bb?

<div className="bg-amber-50 dark:bg-amber-900/20 p-6 rounded-xl my-6">
  <p className="text-sm text-amber-700 dark:text-amber-300">
    The major pattern requires a half step between A and the next note (3rd→4th note). A→B would be a whole step! So B must be lowered to Bb: A→Bb = half step ✓
  </p>
</div>

### Exercise

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border-2 border-green-300 dark:border-green-700 my-6">
  <ol className="text-sm text-green-700 dark:text-green-300 space-y-2 list-decimal list-inside">
    <li>Play F major slowly and watch for Bb</li>
    <li>Compare F major, C major, and G major – hear the differences</li>
    <li>Now you know 3 major scales!</li>
  </ol>
</div>
    ` },
  task: { de: { title: 'F-Dur Tonleiter', description: 'Spiele F-Dur mit Bb korrekt.', checklist: [{ text: 'Spiele F-Dur aufwärts mit Bb', checked: false }, { text: 'Spiele F-Dur abwärts', checked: false }, { text: 'Spiele C-Dur, G-Dur und F-Dur nacheinander', checked: false }] }, en: { title: 'F Major Scale', description: 'Play F major with Bb correctly.', checklist: [{ text: 'Play F major ascending with Bb', checked: false }, { text: 'Play F major descending', checked: false }, { text: 'Play C major, G major, and F major in sequence', checked: false }] } },
  quiz: { de: [{ question: 'Warum hat F-Dur ein Bb als Vorzeichen?', answer: 'Weil das Dur-Muster zwischen dem 3. und 4. Ton (A und dem nächsten) einen Halbtonschritt verlangt. A→H wäre ein Ganzton, also muss H zu Bb erniedrigt werden. A→Bb = Halbton ✓' }], en: [{ question: 'Why does F major have Bb as a key signature?', answer: 'Because the major pattern requires a half step between the 3rd and 4th notes (A and the next). A→B would be a whole step, so B must be lowered to Bb. A→Bb = half step ✓' }] }
};