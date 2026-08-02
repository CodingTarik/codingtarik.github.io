import React from 'react';
import GrammarGame from '../../../components/grammar-games/GrammarGame';

const sentenceBuilderData = [
  {
    prompt: { en: "___ I known about the delay, I would have taken an earlier flight.", de: "Hätte ich von der Verspätung gewusst, hätte ich einen früheren Flug genommen." },
    words: ["Had", "Have", "Would", "If"],
    correct: "Had",
    explanation: { en: "Inversion replaces 'if' in formal conditionals: 'Had I known' = 'If I had known'.", de: "Inversion ersetzt 'if' in formellen Konditionalsätzen: 'Had I known' = 'If I had known'." }
  },
  {
    prompt: { en: "Only by working tirelessly ___ they achieve their ambitious goal.", de: "Nur durch unermüdliche Arbeit konnten sie ihr ehrgeiziges Ziel erreichen." },
    words: ["did", "had", "were", "do"],
    correct: "did",
    explanation: { en: "After 'Only by + -ing', we invert subject and auxiliary: 'Only by working... did they achieve'.", de: "Nach 'Only by + -ing' wird Subjekt und Hilfsverb invertiert: 'Only by working... did they achieve'." }
  },
  {
    prompt: { en: "Not until the results were published ___ the researchers celebrate.", de: "Erst als die Ergebnisse veröffentlicht wurden, feierten die Forscher." },
    words: ["did", "had", "were", "have"],
    correct: "did",
    explanation: { en: "'Not until...' triggers inversion in the main clause: 'Not until X did Y happen'.", de: "'Not until...' löst Inversion im Hauptsatz aus: 'Not until X did Y happen'." }
  },
  {
    prompt: { en: "Little ___ she realise that her decision would change everything.", de: "Kaum war ihr bewusst, dass ihre Entscheidung alles verändern würde." },
    words: ["did", "had", "was", "has"],
    correct: "did",
    explanation: { en: "'Little' as a negative adverb triggers inversion: 'Little did she realise...'", de: "'Little' als negatives Adverb löst Inversion aus: 'Little did she realise...'" }
  },
  {
    prompt: { en: "___ it not been for your help, we would have failed.", de: "Wäre es nicht für deine Hilfe gewesen, hätten wir versagt." },
    words: ["Had", "Were", "Should", "Would"],
    correct: "Had",
    explanation: { en: "'Had it not been for' is a formal inverted conditional meaning 'If it had not been for'.", de: "'Had it not been for' ist ein formeller invertierter Konditionalsatz und bedeutet 'If it had not been for'." }
  },
  {
    prompt: { en: "Rarely ___ one encounter such dedication in a young professional.", de: "Selten trifft man auf solch eine Hingabe bei einem jungen Berufstätigen." },
    words: ["does", "do", "is", "has"],
    correct: "does",
    explanation: { en: "'Rarely' is a negative frequency adverb that triggers inversion: 'Rarely does one encounter...'", de: "'Rarely' ist ein negatives Häufigkeitsadverb, das Inversion auslöst: 'Rarely does one encounter...'" }
  }
];

const fixTheMistakeData = [
  {
    sentence: "Only after she had left she realised her mistake.",
    mistakeIndex: 6,
    correction: "did she realise",
    explanation: { en: "After 'Only after...', the main clause requires inversion: 'Only after she had left did she realise...'", de: "Nach 'Only after...' erfordert der Hauptsatz Inversion: 'Only after she had left did she realise...'" }
  },
  {
    sentence: "Hardly I had arrived when the phone started ringing.",
    mistakeIndex: 1,
    correction: "had I",
    explanation: { en: "'Hardly' triggers inversion: 'Hardly had I arrived...' not 'Hardly I had arrived'.", de: "'Hardly' löst Inversion aus: 'Hardly had I arrived...' nicht 'Hardly I had arrived'." }
  },
  {
    sentence: "Not only he passed the exam, but he also got the highest mark.",
    mistakeIndex: 2,
    correction: "did he pass",
    explanation: { en: "'Not only' requires inversion: 'Not only did he pass the exam...'", de: "'Not only' erfordert Inversion: 'Not only did he pass the exam...'" }
  },
  {
    sentence: "Were I to know the answer, I will tell you immediately.",
    mistakeIndex: 7,
    correction: "would",
    explanation: { en: "Inverted conditionals with 'were' express hypothetical situations and need 'would', not 'will': 'Were I to know... I would tell you'.", de: "Invertierte Konditionalsätze mit 'were' drücken hypothetische Situationen aus und brauchen 'would', nicht 'will'." }
  },
  {
    sentence: "Never I have seen such a beautiful sunset in my life.",
    mistakeIndex: 1,
    correction: "have I",
    explanation: { en: "'Never' requires inversion: 'Never have I seen...' not 'Never I have seen'.", de: "'Never' erfordert Inversion: 'Never have I seen...' nicht 'Never I have seen'." }
  }
];

const grammarRacerData = [
  {
    prompt: "Seldom ___ such talent been witnessed on this stage.",
    options: ["has", "have", "had"],
    correct: "has",
    explanation: "'Seldom' triggers inversion: 'Seldom has such talent been witnessed...'"
  },
  {
    prompt: "___ should you need assistance, do not hesitate to ask.",
    options: ["Should", "Would", "Had"],
    correct: "Should",
    explanation: "'Should you need' = 'If you should need' — formal inverted conditional."
  },
  {
    prompt: "No sooner had we sat down ___ the waiter brought the menus.",
    options: ["than", "when", "that"],
    correct: "than",
    explanation: "The pattern is 'No sooner had... than...' (not 'when' or 'that')."
  },
  {
    prompt: "Under no circumstances ___ this door be left unlocked.",
    options: ["should", "will", "does"],
    correct: "should",
    explanation: "'Under no circumstances' triggers inversion with a modal: 'should this door be left unlocked'."
  },
  {
    prompt: "Only when the sun set ___ the temperature finally drop.",
    options: ["did", "does", "had"],
    correct: "did",
    explanation: "'Only when...' triggers inversion in the main clause: '...did the temperature finally drop'."
  }
];

export const advancedInversion = {
  id: 'c1_g1',
  title: {
    en: 'Advanced Inversion Patterns',
    de: 'Fortgeschrittene Inversionsmuster'
  },
  description: {
    en: "Master formal inversion in conditionals, after negative adverbs, and in wishes.",
    de: "Formelle Inversion in Konditionalsätzen, nach negativen Adverbien und in Wünschen meistern."
  },
  components: {
    sentenceBuilder: <GrammarGame type="sentenceBuilder" data={sentenceBuilderData} />,
    fixTheMistake: <GrammarGame type="fixTheMistake" data={fixTheMistakeData} />,
    grammarRacer: <GrammarGame type="grammarRacer" data={grammarRacerData} />,
  },
  content: {
    en: `
## Advanced Inversion Patterns 🔄

**Inversion** means placing the auxiliary verb before the subject, as in questions. In advanced English, inversion is used for **emphasis, formality, and style** — not to ask a question.

### 1. Inversion in Conditionals (Formal) 📜

Instead of using "if," you can **drop "if" and invert** the subject and auxiliary:

| Standard Conditional | Inverted Form |
|---|---|
| If I **had** known... | **Had** I known... |
| If she **were** to leave... | **Were** she to leave... |
| If you **should** need help... | **Should** you need help... |

- "**Had** I known about the risks, I would never have invested."
- "**Were** the government to act now, the crisis could be averted."
- "**Should** any problems arise, please contact us immediately."

<div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">💡 Key Point:</h3>
  <p>This is <strong>very formal</strong> — used in academic writing, legal texts, and formal speeches. In everyday English, "if" is preferred.</p>
</div>

### 2. Inversion After Negative / Restrictive Adverbs 🚫

When certain negative or restrictive expressions begin a sentence, the subject and auxiliary are inverted:

**Common triggers:**
- Never, rarely, seldom, hardly, scarcely, barely
- Not only... but also, not until, not since
- Only after, only when, only by, only then
- Little, at no time, under no circumstances, on no account, in no way

**Examples:**
- "**Never** have I seen such a magnificent performance."
- "**Not only** did she win the race, but she also broke the record."
- "**Only after** extensive testing **did** the team release the product."
- "**Little** did they know that their discovery would change the world."
- "**Under no circumstances** should confidential data be shared."

### 3. Hardly / No sooner / Scarcely ⏰

These expressions describe two events happening in quick succession:

| Pattern | Example |
|---|---|
| Hardly had... when... | Hardly **had** I arrived **when** the phone rang. |
| No sooner had... than... | No sooner **had** we left **than** it started raining. |
| Scarcely had... when... | Scarcely **had** she spoken **when** the door opened. |

<div className="bg-amber-50 dark:bg-amber-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">⚠️ Watch out:</h3>
  <p><strong>No sooner</strong> pairs with <strong>than</strong> (not "when").</p>
  <p><strong>Hardly / Scarcely</strong> pair with <strong>when</strong> (not "than").</p>
</div>

<GamePlaceholder id="sentenceBuilder" />

### 4. Inversion in Wishes and Exclamations 🌟

- "**Were** I a millionaire, I'd travel the world." (= If I were a millionaire...)
- "**Had** I but one more chance!" (= If only I had one more chance!)
- "**May** you live a long and happy life!" (Formal wish / blessing)

### 5. Common Mistakes ❌

**Mistake 1:** Inverting in the wrong clause.
- ❌ "Only after the exam did finish, we celebrated."
- ✅ "Only after the exam finished **did we** celebrate."

**Mistake 2:** Forgetting that inversion requires an auxiliary.
- ❌ "Never I have seen..."
- ✅ "Never **have I** seen..."

**Mistake 3:** Using "will" instead of "would" in inverted hypotheticals.
- ❌ "Were she to call, I will answer."
- ✅ "Were she to call, I **would** answer."

<GamePlaceholder id="fixTheMistake" />

<div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">🎯 Summary:</h3>
  <ul className="list-disc list-inside space-y-1">
    <li><strong>Conditional inversion:</strong> Had I known / Were she to / Should you need</li>
    <li><strong>Negative adverb inversion:</strong> Never have I / Not only did she / Little did they</li>
    <li><strong>Sequence inversion:</strong> No sooner had... than / Hardly had... when</li>
    <li>Inversion is <strong>formal/literary</strong> — essential for C1 writing and reading.</li>
  </ul>
</div>

---

### 🎮 Practice Arena
<GamePlaceholder id="grammarRacer" />
`,
    de: `
## Fortgeschrittene Inversionsmuster 🔄

**Inversion** bedeutet, das Hilfsverb vor das Subjekt zu stellen — wie bei Fragen. Im fortgeschrittenen Englisch wird Inversion für **Betonung, Formalität und Stil** verwendet — nicht um eine Frage zu stellen.

### 1. Inversion in Konditionalsätzen (Formell) 📜

Anstatt "if" zu verwenden, kann man **"if" weglassen und invertieren**:

| Standard-Konditionalsatz | Invertierte Form |
|---|---|
| If I **had** known... | **Had** I known... |
| If she **were** to leave... | **Were** she to leave... |
| If you **should** need help... | **Should** you need help... |

- "**Had** I known about the risks, I would never have invested."
- "**Were** the government to act now, the crisis could be averted."
- "**Should** any problems arise, please contact us immediately."

<div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">💡 Wichtiger Hinweis:</h3>
  <p>Das ist <strong>sehr formell</strong> — wird in akademischen Texten, juristischen Dokumenten und formellen Reden verwendet. Im Alltag wird "if" bevorzugt.</p>
</div>

### 2. Inversion nach negativen / einschränkenden Adverbien 🚫

Wenn bestimmte negative oder einschränkende Ausdrücke am Satzanfang stehen, werden Subjekt und Hilfsverb invertiert:

**Häufige Auslöser:**
- Never, rarely, seldom, hardly, scarcely, barely
- Not only... but also, not until, not since
- Only after, only when, only by, only then
- Little, at no time, under no circumstances, on no account, in no way

**Beispiele:**
- "**Never** have I seen such a magnificent performance." (Nie habe ich so eine großartige Aufführung gesehen.)
- "**Not only** did she win the race, but she also broke the record." (Sie gewann nicht nur das Rennen, sondern brach auch den Rekord.)
- "**Only after** extensive testing **did** the team release the product." (Erst nach ausführlichen Tests veröffentlichte das Team das Produkt.)
- "**Little** did they know that their discovery would change the world." (Sie wussten kaum, dass ihre Entdeckung die Welt verändern würde.)

### 3. Hardly / No sooner / Scarcely ⏰

Diese Ausdrücke beschreiben zwei Ereignisse in schneller Abfolge:

| Muster | Beispiel |
|---|---|
| Hardly had... when... | Hardly **had** I arrived **when** the phone rang. |
| No sooner had... than... | No sooner **had** we left **than** it started raining. |
| Scarcely had... when... | Scarcely **had** she spoken **when** the door opened. |

<div className="bg-amber-50 dark:bg-amber-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">⚠️ Achtung:</h3>
  <p><strong>No sooner</strong> wird mit <strong>than</strong> gepaart (nicht "when").</p>
  <p><strong>Hardly / Scarcely</strong> werden mit <strong>when</strong> gepaart (nicht "than").</p>
</div>

<GamePlaceholder id="sentenceBuilder" />

### 4. Inversion in Wünschen und Ausrufen 🌟

- "**Were** I a millionaire, I'd travel the world." (= If I were a millionaire... / Wäre ich Millionär...)
- "**Had** I but one more chance!" (= If only I had one more chance! / Hätte ich nur noch eine Chance!)
- "**May** you live a long and happy life!" (Formeller Wunsch / Segen)

### 5. Häufige Fehler ❌

**Fehler 1:** Inversion in der falschen Klausel.
- ❌ "Only after the exam did finish, we celebrated."
- ✅ "Only after the exam finished **did we** celebrate."

**Fehler 2:** Vergessen, dass Inversion ein Hilfsverb erfordert.
- ❌ "Never I have seen..."
- ✅ "Never **have I** seen..."

**Fehler 3:** "Will" statt "would" in invertierten Hypothesen verwenden.
- ❌ "Were she to call, I will answer."
- ✅ "Were she to call, I **would** answer."

<GamePlaceholder id="fixTheMistake" />

<div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">🎯 Zusammenfassung:</h3>
  <ul className="list-disc list-inside space-y-1">
    <li><strong>Konditionale Inversion:</strong> Had I known / Were she to / Should you need</li>
    <li><strong>Negative Adverb-Inversion:</strong> Never have I / Not only did she / Little did they</li>
    <li><strong>Abfolge-Inversion:</strong> No sooner had... than / Hardly had... when</li>
    <li>Inversion ist <strong>formell/literarisch</strong> — unverzichtbar für C1-Schreiben und -Lesen.</li>
  </ul>
</div>

---

### 🎮 Trainings-Arena
<GamePlaceholder id="grammarRacer" />
`
  },
  task: {
    en: {
      title: 'Advanced Inversion',
      description: 'Practice using inversion for emphasis and formality.',
      checklist: [
        { text: 'Rewrite 3 conditional sentences using inverted forms (Had I / Were she / Should you)', checked: false },
        { text: 'Write 3 sentences beginning with negative adverbs (Never / Not only / Little)', checked: false },
        { text: 'Transform a paragraph from informal to formal using inversion', checked: false }
      ]
    },
    de: {
      title: 'Fortgeschrittene Inversion',
      description: 'Übe die Verwendung von Inversion für Betonung und Formalität.',
      checklist: [
        { text: 'Schreibe 3 Konditionalsätze in invertierter Form um (Had I / Were she / Should you)', checked: false },
        { text: 'Schreibe 3 Sätze, die mit negativen Adverbien beginnen (Never / Not only / Little)', checked: false },
        { text: 'Wandle einen Absatz von informell zu formell um, indem du Inversion verwendest', checked: false }
      ]
    }
  },
  quiz: { en: [], de: [] }
};
