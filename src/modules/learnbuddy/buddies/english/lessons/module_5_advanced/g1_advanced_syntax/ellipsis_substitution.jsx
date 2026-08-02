import React from 'react';
import GrammarGame from '../../../components/grammar-games/GrammarGame';

const sentenceBuilderData = [
  {
    prompt: { en: "'Will they accept the offer?' 'I believe ___.'", de: "'Werden sie das Angebot annehmen?' 'Ich glaube schon.'" },
    words: ["so", "it", "that", "yes"],
    correct: "so",
    explanation: { en: "'I believe so' uses 'so' as a substitute for 'they will accept the offer'. Common with think, believe, hope, expect, suppose.", de: "'I believe so' verwendet 'so' als Ersatz für 'they will accept the offer'. Üblich mit think, believe, hope, expect, suppose." }
  },
  {
    prompt: { en: "'Is the project going to be delayed?' 'I hope ___.'", de: "'Wird das Projekt verzögert?' 'Ich hoffe nicht.'" },
    words: ["not", "so", "it won't", "no"],
    correct: "not",
    explanation: { en: "'I hope not' is the negative form. With 'hope' and 'be afraid', use 'not'. (Compare: 'I don't think so' with think/believe.)", de: "'I hope not' ist die negative Form. Bei 'hope' und 'be afraid' verwendet man 'not'. (Vergleiche: 'I don't think so' bei think/believe.)" }
  },
  {
    prompt: { en: "She wanted to travel abroad, and eventually she managed to ___ .", de: "Sie wollte ins Ausland reisen, und schließlich schaffte sie es." },
    words: ["do so", "do it", "travel", "make"],
    correct: "do so",
    explanation: { en: "'Do so' is a formal substitute for a previously mentioned verb phrase. 'She managed to do so' = 'She managed to travel abroad'.", de: "'Do so' ist ein formeller Ersatz für ein zuvor erwähntes Verb. 'She managed to do so' = 'She managed to travel abroad'." }
  },
  {
    prompt: { en: "I need a laptop. I'm looking for a lightweight ___ with a long battery life.", de: "Ich brauche einen Laptop. Ich suche einen leichten mit langer Akkulaufzeit." },
    words: ["one", "it", "laptop", "thing"],
    correct: "one",
    explanation: { en: "'One' substitutes for a singular countable noun already mentioned: 'a lightweight one' = 'a lightweight laptop'.", de: "'One' ersetzt ein bereits erwähntes zählbares Substantiv im Singular: 'a lightweight one' = 'a lightweight laptop'." }
  },
  {
    prompt: { en: "'Can you finish the report today?' 'I'll try ___.'", de: "'Kannst du den Bericht heute fertigstellen?' 'Ich werde es versuchen.'" },
    words: ["to", "it", "so", "doing"],
    correct: "to",
    explanation: { en: "After certain verbs (try, want, like, need, have), the infinitive marker 'to' alone can replace the full verb phrase: 'I'll try to' = 'I'll try to finish the report'.", de: "Nach bestimmten Verben (try, want, like, need, have) kann das Infinitivzeichen 'to' allein das volle Verb ersetzen." }
  },
  {
    prompt: { en: "The first experiment failed, but the second ___ didn't.", de: "Das erste Experiment scheiterte, aber das zweite nicht." },
    words: ["one", "it", "experiment", "try"],
    correct: "one",
    explanation: { en: "'One' is used to avoid repeating 'experiment': 'the second one didn't (fail)'.", de: "'One' wird verwendet, um die Wiederholung von 'experiment' zu vermeiden: 'the second one didn't (fail)'." }
  }
];

const fixTheMistakeData = [
  {
    sentence: "She can play the piano beautifully, and her sister can too play.",
    mistakeIndex: 9,
    correction: "can too",
    explanation: { en: "With auxiliary ellipsis, remove the repeated main verb: 'her sister can too' (= can play the piano beautifully too). The verb is omitted.", de: "Bei der Hilfsverb-Ellipse wird das wiederholte Hauptverb entfernt: 'her sister can too' (= can play the piano beautifully too)." }
  },
  {
    sentence: "'Will it rain tomorrow?' 'I don't hope so.'",
    mistakeIndex: 5,
    correction: "hope not",
    explanation: { en: "With 'hope', the negative form is 'I hope not', NOT 'I don't hope so'. (Compare: 'I don't think so' is correct with think.)", de: "Bei 'hope' ist die negative Form 'I hope not', NICHT 'I don't hope so'. (Vergleiche: 'I don't think so' ist korrekt bei think.)" }
  },
  {
    sentence: "I haven't read the book yet, but I intend to do.",
    mistakeIndex: 10,
    correction: "to",
    explanation: { en: "After 'intend', use 'to' alone without 'do': 'I intend to' (= I intend to read it). The infinitive marker stands alone.", de: "Nach 'intend' verwendet man 'to' allein ohne 'do': 'I intend to' (= I intend to read it)." }
  },
  {
    sentence: "These shoes are too small. I need bigger it.",
    mistakeIndex: 8,
    correction: "ones",
    explanation: { en: "Use 'ones' (plural) to substitute for a plural noun: 'I need bigger ones' = 'I need bigger shoes'.", de: "Verwende 'ones' (Plural), um ein Substantiv im Plural zu ersetzen: 'I need bigger ones' = 'I need bigger shoes'." }
  }
];

const grammarRacerData = [
  {
    prompt: "'Is the meeting cancelled?' 'I'm afraid ___.'",
    options: ["so", "it", "yes"],
    correct: "so",
    explanation: "'I'm afraid so' = 'I'm afraid the meeting is cancelled.' 'So' substitutes the whole clause."
  },
  {
    prompt: "He said he would help, and he ___ so without hesitation.",
    options: ["did", "made", "had"],
    correct: "did",
    explanation: "'Did so' is a formal substitute: 'he did so' = 'he helped'."
  },
  {
    prompt: "'Are you going to apply?' 'I'd like ___, but I'm not sure I qualify.'",
    options: ["to", "so", "it"],
    correct: "to",
    explanation: "'I'd like to' — the infinitive marker 'to' stands alone, replacing 'to apply'."
  },
  {
    prompt: "My old laptop is slow. I need a new ___.",
    options: ["one", "it", "laptop"],
    correct: "one",
    explanation: "'One' substitutes for 'laptop' to avoid repetition: 'a new one'."
  }
];

export const ellipsisSubstitution = {
  id: 'c1_g2',
  title: {
    en: 'Ellipsis & Substitution',
    de: 'Ellipse & Substitution'
  },
  description: {
    en: "Learn to omit and substitute repeated elements using so, not, do so, one/ones, and auxiliaries.",
    de: "Lerne, wiederholte Elemente mit so, not, do so, one/ones und Hilfsverben auszulassen und zu ersetzen."
  },
  components: {
    sentenceBuilder: <GrammarGame type="sentenceBuilder" data={sentenceBuilderData} />,
    fixTheMistake: <GrammarGame type="fixTheMistake" data={fixTheMistakeData} />,
    grammarRacer: <GrammarGame type="grammarRacer" data={grammarRacerData} />,
  },
  content: {
    en: `
## Ellipsis & Substitution ✂️🔄

At the C1 level, natural and sophisticated English depends on **avoiding unnecessary repetition**. Two key tools are **ellipsis** (omitting words) and **substitution** (replacing words with shorter forms).

### 1. Substitution with "so" and "not" 💬

After verbs like **think, believe, hope, expect, suppose, be afraid, guess, imagine**, you can use **"so"** or **"not"** to replace a whole clause:

| Question | Positive | Negative |
|---|---|---|
| Will it rain? | I think **so**. | I **don't** think **so**. / I think **not**. |
| Is she coming? | I hope **so**. | I hope **not**. |
| Will they win? | I expect **so**. | I **don't** expect **so**. |
| Is it true? | I'm afraid **so**. | I'm afraid **not**. |

<div className="bg-amber-50 dark:bg-amber-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">⚠️ Negative forms vary!</h3>
  <p>With <strong>think, believe, expect, suppose</strong>: "I <strong>don't</strong> think so" (negate the verb)</p>
  <p>With <strong>hope, be afraid</strong>: "I hope <strong>not</strong>" / "I'm afraid <strong>not</strong>" (add "not" after the verb)</p>
  <p>❌ "I don't hope so" — this is incorrect!</p>
</div>

### 2. Substitution with "do so" 📝

**"Do so"** replaces a verb phrase in formal English:

- "The company decided to expand overseas, and they **did so** in 2019." (= they expanded overseas)
- "If you wish to apply, you may **do so** online." (= you may apply)
- "She wanted to protest, but she didn't dare **to do so**." (= to protest)

<div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">💡 "Do so" vs "Do it" vs "Do that":</h3>
  <p><strong>"Do so"</strong> — formal, used in writing and formal speech</p>
  <p><strong>"Do it"</strong> — informal, used in everyday speech</p>
  <p><strong>"Do that"</strong> — informal, slightly more emphatic/demonstrative</p>
</div>

### 3. Substitution with "one / ones" 🔢

**"One"** replaces a singular countable noun, **"ones"** replaces a plural:

- "I need a new phone. My current **one** is broken." (one = phone)
- "These shoes are too tight. I prefer the black **ones**." (ones = shoes)
- "Which laptop? The expensive **one** or the budget **one**?"

<GamePlaceholder id="sentenceBuilder" />

### 4. Ellipsis: Omitting Repeated Words ✂️

#### a) Auxiliary ellipsis
Keep the auxiliary, drop the main verb:
- "She **can** swim well, and her brother **can** too." (= can swim well)
- "I haven't finished, but she **has**." (= has finished)

#### b) Infinitive ellipsis
Keep "to", drop the verb:
- "'Would you like to come?' 'I'd love **to**.'" (= to come)
- "You don't have to help, but I'd like you **to**." (= to help)

#### c) Clausal ellipsis
Omit an entire clause that is understood:
- "A: 'Who broke the vase?' B: 'Not me.'" (= It was not me who broke the vase)
- "A: 'When?' B: 'Tomorrow.'" (= We'll do it tomorrow)

### 5. Common Mistakes ❌

**Mistake 1:** Wrong negative form with "hope."
- ❌ "I don't hope so."
- ✅ "I hope **not**."

**Mistake 2:** Adding "do" after infinitive ellipsis.
- ❌ "I'd like to do."
- ✅ "I'd like **to**."

**Mistake 3:** Using "it" instead of "one" for substitution.
- ❌ "I need a new laptop. I'll buy a fast it."
- ✅ "I need a new laptop. I'll buy a fast **one**."

<GamePlaceholder id="fixTheMistake" />

<div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">🎯 Summary:</h3>
  <ul className="list-disc list-inside space-y-1">
    <li><strong>"So" / "not":</strong> Replace clauses after think, hope, believe, etc.</li>
    <li><strong>"Do so":</strong> Formal substitute for a verb phrase.</li>
    <li><strong>"One / ones":</strong> Replace countable nouns.</li>
    <li><strong>Ellipsis:</strong> Omit repeated verbs, keeping auxiliaries or "to".</li>
  </ul>
</div>

---

### 🎮 Practice Arena
<GamePlaceholder id="grammarRacer" />
`,
    de: `
## Ellipse & Substitution ✂️🔄

Auf C1-Niveau hängt natürliches und anspruchsvolles Englisch davon ab, **unnötige Wiederholungen zu vermeiden**. Zwei wichtige Werkzeuge sind **Ellipse** (Wörter auslassen) und **Substitution** (Wörter durch kürzere Formen ersetzen).

### 1. Substitution mit "so" und "not" 💬

Nach Verben wie **think, believe, hope, expect, suppose, be afraid, guess, imagine** kann man **"so"** oder **"not"** verwenden, um einen ganzen Satz zu ersetzen:

| Frage | Positiv | Negativ |
|---|---|---|
| Will it rain? | I think **so**. | I **don't** think **so**. / I think **not**. |
| Is she coming? | I hope **so**. | I hope **not**. |
| Will they win? | I expect **so**. | I **don't** expect **so**. |
| Is it true? | I'm afraid **so**. | I'm afraid **not**. |

<div className="bg-amber-50 dark:bg-amber-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">⚠️ Negative Formen variieren!</h3>
  <p>Bei <strong>think, believe, expect, suppose</strong>: "I <strong>don't</strong> think so" (das Verb verneinen)</p>
  <p>Bei <strong>hope, be afraid</strong>: "I hope <strong>not</strong>" / "I'm afraid <strong>not</strong>" ("not" nach dem Verb hinzufügen)</p>
  <p>❌ "I don't hope so" — das ist falsch!</p>
</div>

### 2. Substitution mit "do so" 📝

**"Do so"** ersetzt eine Verbphrase im formellen Englisch:

- "The company decided to expand overseas, and they **did so** in 2019." (= sie expandierten ins Ausland)
- "If you wish to apply, you may **do so** online." (= Sie können sich bewerben)
- "She wanted to protest, but she didn't dare **to do so**." (= zu protestieren)

<div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">💡 "Do so" vs "Do it" vs "Do that":</h3>
  <p><strong>"Do so"</strong> — formell, in Schrift und formeller Sprache verwendet</p>
  <p><strong>"Do it"</strong> — informell, im Alltag verwendet</p>
  <p><strong>"Do that"</strong> — informell, etwas betonender/demonstrativer</p>
</div>

### 3. Substitution mit "one / ones" 🔢

**"One"** ersetzt ein zählbares Substantiv im Singular, **"ones"** im Plural:

- "I need a new phone. My current **one** is broken." (one = phone)
- "These shoes are too tight. I prefer the black **ones**." (ones = shoes)
- "Which laptop? The expensive **one** or the budget **one**?"

<GamePlaceholder id="sentenceBuilder" />

### 4. Ellipse: Wiederholte Wörter weglassen ✂️

#### a) Hilfsverb-Ellipse
Das Hilfsverb behalten, das Hauptverb weglassen:
- "She **can** swim well, and her brother **can** too." (= can swim well)
- "I haven't finished, but she **has**." (= has finished)

#### b) Infinitiv-Ellipse
"To" behalten, das Verb weglassen:
- "'Would you like to come?' 'I'd love **to**.'" (= to come)
- "You don't have to help, but I'd like you **to**." (= to help)

#### c) Satz-Ellipse
Einen ganzen verstandenen Satz weglassen:
- "A: 'Who broke the vase?' B: 'Not me.'" (= It was not me who broke the vase)
- "A: 'When?' B: 'Tomorrow.'" (= We'll do it tomorrow)

### 5. Häufige Fehler ❌

**Fehler 1:** Falsche negative Form bei "hope."
- ❌ "I don't hope so."
- ✅ "I hope **not**."

**Fehler 2:** "Do" nach Infinitiv-Ellipse hinzufügen.
- ❌ "I'd like to do."
- ✅ "I'd like **to**."

**Fehler 3:** "It" statt "one" für die Substitution verwenden.
- ❌ "I need a new laptop. I'll buy a fast it."
- ✅ "I need a new laptop. I'll buy a fast **one**."

<GamePlaceholder id="fixTheMistake" />

<div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">🎯 Zusammenfassung:</h3>
  <ul className="list-disc list-inside space-y-1">
    <li><strong>"So" / "not":</strong> Ersetzen Sätze nach think, hope, believe, usw.</li>
    <li><strong>"Do so":</strong> Formeller Ersatz für eine Verbphrase.</li>
    <li><strong>"One / ones":</strong> Ersetzen zählbare Substantive.</li>
    <li><strong>Ellipse:</strong> Wiederholte Verben weglassen, Hilfsverben oder "to" behalten.</li>
  </ul>
</div>

---

### 🎮 Trainings-Arena
<GamePlaceholder id="grammarRacer" />
`
  },
  task: {
    en: {
      title: 'Ellipsis & Substitution',
      description: 'Practice omitting and substituting repeated elements.',
      checklist: [
        { text: 'Write 5 mini-dialogues using "so" and "not" with different verbs (think, hope, expect, believe, be afraid)', checked: false },
        { text: 'Rewrite 3 formal sentences using "do so" instead of repeating the verb', checked: false },
        { text: 'Replace repeated nouns with "one/ones" in a paragraph', checked: false }
      ]
    },
    de: {
      title: 'Ellipse & Substitution',
      description: 'Übe das Auslassen und Ersetzen von wiederholten Elementen.',
      checklist: [
        { text: 'Schreibe 5 Mini-Dialoge mit "so" und "not" mit verschiedenen Verben (think, hope, expect, believe, be afraid)', checked: false },
        { text: 'Schreibe 3 formelle Sätze um und verwende "do so" statt das Verb zu wiederholen', checked: false },
        { text: 'Ersetze wiederholte Substantive mit "one/ones" in einem Absatz', checked: false }
      ]
    }
  },
  quiz: { en: [], de: [] }
};
