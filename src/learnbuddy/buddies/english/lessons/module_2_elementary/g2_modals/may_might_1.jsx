import React from 'react';
import GrammarGame from '../../../components/grammar-games/GrammarGame';

const sentenceBuilderData = [
  {
    prompt: { en: "It ___ (rain) tomorrow.", de: "Es ___ (regnen) morgen." },
    words: ["may rain", "might rain", "can rain", "will rain"],
    correct: "may rain",
    explanation: { en: "Possibility: may + verb", de: "Möglichkeit: may + Verb" }
  },
  {
    prompt: { en: "___ I ___ (borrow) your pen?", de: "___ ich deinen Stift ___ (ausleihen)?" },
    words: ["May borrow", "Might borrow", "Can borrow", "Will borrow"],
    correct: "May borrow",
    explanation: { en: "Polite permission: May I...?", de: "Höfliche Erlaubnis: May I...?" }
  },
  {
    prompt: { en: "She ___ (not come) to the party.", de: "Sie ___ (nicht kommen) zur Party." },
    words: ["may not come", "might not come", "can not come", "will not come"],
    correct: "may not come",
    explanation: { en: "Possibility (negative): may not", de: "Möglichkeit (Verneinung): may not" }
  }
];

const fixTheMistakeData = [
  {
    sentence: "I may to go to the cinema tonight.",
    mistakeIndex: 2,
    correction: "go",
    explanation: { en: "May + base verb (no 'to')", de: "May + Grundform (kein 'to')" }
  },
  {
    sentence: "Might you help me?",
    mistakeIndex: 0,
    correction: "Could",
    explanation: { en: "Might is not used for requests (use Could/May)", de: "Might wird nicht für Bitten verwendet (verwende Could/May)" }
  },
  {
    sentence: "It can rain tomorrow.",
    mistakeIndex: 1,
    correction: "may",
    explanation: { en: "Possibility: may/might (not can)", de: "Möglichkeit: may/might (nicht can)" }
  }
];

const grammarRacerData = [
  {
    prompt: "It ___ rain later.",
    options: ["may", "can", "will"],
    correct: "may",
    explanation: "Possibility: may"
  },
  {
    prompt: "___ I use your phone?",
    options: ["May", "Might", "Can"],
    correct: "May",
    explanation: "Polite permission: May"
  },
  {
    prompt: "He ___ be at home.",
    options: ["might", "can", "will"],
    correct: "might",
    explanation: "Possibility: might"
  }
];

export const mayMight1 = {
  id: 'a2_g29',
  title: {
    en: 'May and Might 1 (Possibility & Permission)',
    de: 'May und Might 1 (Möglichkeit & Erlaubnis)'
  },
  description: {
    en: "Using may and might to express possibility and ask for permission. 'It may rain', 'May I go?'",
    de: "May und might verwenden, um Möglichkeit auszudrücken und um Erlaubnis zu bitten. 'Es könnte regnen', 'Darf ich gehen?'"
  },
  
  components: {
    sentenceBuilder: <GrammarGame type="sentenceBuilder" data={sentenceBuilderData} />,
    fixTheMistake: <GrammarGame type="fixTheMistake" data={fixTheMistakeData} />,
    grammarRacer: <GrammarGame type="grammarRacer" data={grammarRacerData} />
  },

  content: {
    en: `
## May and Might: Possibility and Permission 🎲

**May** and **might** are modal verbs that express **possibility** (something might happen) and **permission** (asking politely). They help you talk about uncertain things and make polite requests.

### Why Do We Need May and Might?

Think about these situations:
- "It **may** rain tomorrow." (Possibility - maybe it will rain)
- "**May** I go to the bathroom?" (Polite permission - formal request)
- "She **might** be late." (Possibility - maybe she will be late)

These modals express uncertainty and politeness!

### 1. May/Might: Possibility (Maybe) 🎯

**May** and **might** express **possibility** - something is possible, but not certain.

**Structure:** Subject + **may/might** + base verb

**Examples:**
- "It **may** rain tomorrow." (Maybe it will rain)
- "She **might** come to the party." (Maybe she will come)
- "We **may** be late." (Maybe we will be late)
- "He **might** not be home." (Maybe he is not home)

**Key idea:** **May/might** = "maybe" or "perhaps"

<div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">💡 Remember:</h3>
  <p><strong>May</strong> and <strong>might</strong> both express possibility.</p>
  <p><strong>Might</strong> is slightly less certain than <strong>may</strong>, but the difference is small.</p>
  <p>In everyday English, they are often used interchangeably.</p>
</div>

<GamePlaceholder id="sentenceBuilder" />

### 2. May: Permission (Polite) 🙏

**May** is used to ask for **permission** in a polite, formal way.

**Structure:** **May** + I/we + base verb?

**Examples:**
- "**May** I go to the bathroom?" (Polite request for permission)
- "**May** I borrow your pen?" (Polite request)
- "**May** we leave early?" (Polite request)

**Important:** **Might** is NOT used for permission! Only **may** is used for asking permission.

<div className="bg-amber-50 dark:bg-amber-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">⚠️ Important:</h3>
  <p><strong>May</strong> = Permission (formal, polite)</p>
  <p><strong>Might</strong> = NOT used for permission!</p>
  <p>For permission, use: <strong>May I...?</strong> (formal) or <strong>Can I...?</strong> (informal)</p>
</div>

### 3. Negative Forms ❌

**May not** and **might not** express possibility that something will NOT happen:

**Examples:**
- "It **may not** rain tomorrow." (Maybe it won't rain)
- "She **might not** come." (Maybe she won't come)
- "We **may not** be able to help." (Maybe we won't be able to help)

**Note:** "Mayn't" and "mightn't" are very rare - use "may not" and "might not" instead.

### 4. Questions ❓

**May** in questions (for permission):
- "**May** I help you?" (Asking for permission)
- "**May** we sit here?" (Asking for permission)

**May/Might** in questions (for possibility):
- "**Might** it rain?" (Less common - usually we say "Will it rain?")
- "Do you think it **may** rain?" (Asking about possibility)

**Note:** For possibility questions, we often use other structures like "Do you think...?" or "Will...?"

<GamePlaceholder id="fixTheMistake" />

### 5. May vs Might: What's the Difference? 🔄

Both express possibility, but:

| May | Might |
|-----|-------|
| Slightly more certain | Slightly less certain |
| More formal | Less formal |
| Used for permission | NOT used for permission |
| "It **may** rain." | "It **might** rain." |

**In practice:** The difference is small. Many native speakers use them interchangeably for possibility.

**Important rule:** Only **may** is used for permission!

### 6. May/Might vs Can/Will 🔄

**May/Might** = Possibility (maybe)
- "It **may** rain." (Maybe it will rain)

**Can** = Ability or informal permission
- "I **can** swim." (Ability)
- "**Can** I go?" (Informal permission)

**Will** = Certainty
- "It **will** rain." (I'm sure it will rain)

<div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">🎯 Summary:</h3>
  <ul className="list-disc list-inside space-y-1">
    <li><strong>May/Might</strong> = Possibility (maybe)</li>
    <li><strong>May</strong> = Permission (formal, polite)</li>
    <li><strong>Can</strong> = Ability or informal permission</li>
    <li><strong>Will</strong> = Certainty</li>
  </ul>
</div>

### 7. Common Mistakes ❌

**Mistake 1:** Using "might" for permission
- ❌ "**Might** I go?" (Wrong!)
- ✅ "**May** I go?" (Correct!)

**Mistake 2:** Using "can" for possibility
- ❌ "It **can** rain tomorrow." (Wrong for possibility!)
- ✅ "It **may** rain tomorrow." (Correct!)

**Mistake 3:** Adding "to" after may/might
- ❌ "I may **to** go." (Wrong!)
- ✅ "I may **go**." (Correct!)

---

### 🎮 Practice Arena

**🏎️ Grammar Racer: May and Might**
Choose the correct form! Remember: may/might for possibility, may for permission!
<GamePlaceholder id="grammarRacer" />

### 🎯 Practical Exercise

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border-2 border-green-300">
  <h3 className="font-bold text-green-800 dark:text-green-200 mb-4">📝 Possibility and Permission</h3>
  <p className="mb-4">Write sentences using may and might:</p>
  <ol className="list-decimal list-inside space-y-2">
    <li>One sentence about a possibility for tomorrow (use "may" or "might")</li>
    <li>One polite request for permission (use "May I...?")</li>
    <li>One sentence about something that might not happen (use "may not" or "might not")</li>
    <li>One question asking about possibility</li>
  </ol>
</div>
`,
    de: `
## May und Might: Möglichkeit und Erlaubnis 🎲

**May** und **might** sind Modalverben, die **Möglichkeit** (etwas könnte passieren) und **Erlaubnis** (höflich fragen) ausdrücken. Sie helfen dir, über unsichere Dinge zu sprechen und höfliche Bitten zu machen.

### Warum brauchen wir May und Might?

Denk an diese Situationen:
- "It **may** rain tomorrow." (Möglichkeit - vielleicht regnet es)
- "**May** I go to the bathroom?" (Höfliche Erlaubnis - formelle Bitte)
- "She **might** be late." (Möglichkeit - vielleicht kommt sie zu spät)

Diese Modalverben drücken Unsicherheit und Höflichkeit aus!

### 1. May/Might: Möglichkeit (Vielleicht) 🎯

**May** und **might** drücken **Möglichkeit** aus - etwas ist möglich, aber nicht sicher.

**Struktur:** Subjekt + **may/might** + Grundform

**Beispiele:**
- "It **may** rain tomorrow." (Vielleicht regnet es)
- "She **might** come to the party." (Vielleicht kommt sie)
- "We **may** be late." (Vielleicht kommen wir zu spät)
- "He **might** not be home." (Vielleicht ist er nicht zu Hause)

**Schlüsselidee:** **May/might** = "vielleicht" oder "möglicherweise"

<div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">💡 Merke dir:</h3>
  <p><strong>May</strong> und <strong>might</strong> drücken beide Möglichkeit aus.</p>
  <p><strong>Might</strong> ist etwas weniger sicher als <strong>may</strong>, aber der Unterschied ist klein.</p>
  <p>Im Alltagsenglisch werden sie oft synonym verwendet.</p>
</div>

<GamePlaceholder id="sentenceBuilder" />

### 2. May: Erlaubnis (Höflich) 🙏

**May** wird verwendet, um **Erlaubnis** auf höfliche, formelle Weise zu bitten.

**Struktur:** **May** + I/we + Grundform?

**Beispiele:**
- "**May** I go to the bathroom?" (Höfliche Bitte um Erlaubnis)
- "**May** I borrow your pen?" (Höfliche Bitte)
- "**May** we leave early?" (Höfliche Bitte)

**Wichtig:** **Might** wird NICHT für Erlaubnis verwendet! Nur **may** wird verwendet, um Erlaubnis zu bitten.

<div className="bg-amber-50 dark:bg-amber-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">⚠️ Wichtig:</h3>
  <p><strong>May</strong> = Erlaubnis (formell, höflich)</p>
  <p><strong>Might</strong> = Wird NICHT für Erlaubnis verwendet!</p>
  <p>Für Erlaubnis verwende: <strong>May I...?</strong> (formell) oder <strong>Can I...?</strong> (informell)</p>
</div>

### 3. Verneinungsformen ❌

**May not** und **might not** drücken die Möglichkeit aus, dass etwas NICHT passieren wird:

**Beispiele:**
- "It **may not** rain tomorrow." (Vielleicht regnet es nicht)
- "She **might not** come." (Vielleicht kommt sie nicht)
- "We **may not** be able to help." (Vielleicht können wir nicht helfen)

**Hinweis:** "Mayn't" und "mightn't" sind sehr selten - verwende stattdessen "may not" und "might not".

### 4. Fragen ❓

**May** in Fragen (für Erlaubnis):
- "**May** I help you?" (Um Erlaubnis bitten)
- "**May** we sit here?" (Um Erlaubnis bitten)

**May/Might** in Fragen (für Möglichkeit):
- "**Might** it rain?" (Weniger üblich - normalerweise sagen wir "Will it rain?")
- "Do you think it **may** rain?" (Nach Möglichkeit fragen)

**Hinweis:** Für Möglichkeitsfragen verwenden wir oft andere Strukturen wie "Do you think...?" oder "Will...?"

<GamePlaceholder id="fixTheMistake" />

### 5. May vs Might: Was ist der Unterschied? 🔄

Beide drücken Möglichkeit aus, aber:

| May | Might |
|-----|-------|
| Etwas sicherer | Etwas weniger sicher |
| Formeller | Weniger formell |
| Wird für Erlaubnis verwendet | Wird NICHT für Erlaubnis verwendet |
| "It **may** rain." | "It **might** rain." |

**In der Praxis:** Der Unterschied ist klein. Viele Muttersprachler verwenden sie synonym für Möglichkeit.

**Wichtige Regel:** Nur **may** wird für Erlaubnis verwendet!

### 6. May/Might vs Can/Will 🔄

**May/Might** = Möglichkeit (vielleicht)
- "It **may** rain." (Vielleicht regnet es)

**Can** = Fähigkeit oder informelle Erlaubnis
- "I **can** swim." (Fähigkeit)
- "**Can** I go?" (Informelle Erlaubnis)

**Will** = Gewissheit
- "It **will** rain." (Ich bin sicher, dass es regnen wird)

<div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">🎯 Zusammenfassung:</h3>
  <ul className="list-disc list-inside space-y-1">
    <li><strong>May/Might</strong> = Möglichkeit (vielleicht)</li>
    <li><strong>May</strong> = Erlaubnis (formell, höflich)</li>
    <li><strong>Can</strong> = Fähigkeit oder informelle Erlaubnis</li>
    <li><strong>Will</strong> = Gewissheit</li>
  </ul>
</div>

### 7. Häufige Fehler ❌

**Fehler 1:** "Might" für Erlaubnis verwenden
- ❌ "**Might** I go?" (Falsch!)
- ✅ "**May** I go?" (Richtig!)

**Fehler 2:** "Can" für Möglichkeit verwenden
- ❌ "It **can** rain tomorrow." (Falsch für Möglichkeit!)
- ✅ "It **may** rain tomorrow." (Richtig!)

**Fehler 3:** "To" nach may/might hinzufügen
- ❌ "I may **to** go." (Falsch!)
- ✅ "I may **go**." (Richtig!)

---

### 🎮 Trainings-Arena

**🏎️ Grammar Racer: May und Might**
Wähle die richtige Form! Denk daran: may/might für Möglichkeit, may für Erlaubnis!
<GamePlaceholder id="grammarRacer" />

### 🎯 Praktische Übung

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border-2 border-green-300">
  <h3 className="font-bold text-green-800 dark:text-green-200 mb-4">📝 Möglichkeit und Erlaubnis</h3>
  <p className="mb-4">Schreibe Sätze mit may und might:</p>
  <ol className="list-decimal list-inside space-y-2">
    <li>Ein Satz über eine Möglichkeit für morgen (verwende "may" oder "might")</li>
    <li>Eine höfliche Bitte um Erlaubnis (verwende "May I...?")</li>
    <li>Ein Satz über etwas, das vielleicht nicht passiert (verwende "may not" oder "might not")</li>
    <li>Eine Frage nach Möglichkeit</li>
  </ol>
</div>
`
  },
  task: {
    de: {
      title: 'May und Might - Möglichkeit und Erlaubnis',
      description: 'Schreibe Sätze mit may und might über Möglichkeit und Erlaubnis.',
      checklist: [
        { text: 'Satz über Möglichkeit für morgen (may/might)', checked: false },
        { text: 'Höfliche Bitte um Erlaubnis (May I...?)', checked: false },
        { text: 'Satz über etwas, das vielleicht nicht passiert (may not/might not)', checked: false },
        { text: 'Frage nach Möglichkeit', checked: false }
      ]
    },
    en: {
      title: 'May and Might - Possibility and Permission',
      description: 'Write sentences using may and might about possibility and permission.',
      checklist: [
        { text: 'Sentence about possibility for tomorrow (may/might)', checked: false },
        { text: 'Polite request for permission (May I...?)', checked: false },
        { text: 'Sentence about something that might not happen (may not/might not)', checked: false },
        { text: 'Question about possibility', checked: false }
      ]
    }
  },
  quiz: { de: [], en: [] }
};

