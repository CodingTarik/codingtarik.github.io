import React from 'react';
import GrammarGame from '../../../components/grammar-games/GrammarGame';

const sentenceBuilderData = [
  {
    prompt: { en: "It ___ (rain) tomorrow.", de: "Es ___ (regnen) morgen." },
    words: ["might rain", "may rain", "rains", "will rain"],
    correct: "might rain",
    explanation: { en: "Possibility: might/may + base verb", de: "Möglichkeit: might/may + Grundform" }
  },
  {
    prompt: { en: "She ___ (come) to the party, but I'm not sure.", de: "Sie ___ (kommen) zur Party, aber ich bin nicht sicher." },
    words: ["might come", "may come", "comes", "will come"],
    correct: "might come",
    explanation: { en: "Uncertain possibility: might/may", de: "Unsichere Möglichkeit: might/may" }
  },
  {
    prompt: { en: "___ I borrow your pen?", de: "___ ich deinen Stift ausleihen?" },
    words: ["May", "Might", "Can", "Will"],
    correct: "May",
    explanation: { en: "Polite request: May I...? (more formal than Can I...?)", de: "Höfliche Bitte: May I...? (formeller als Can I...?)" }
  }
];

const fixTheMistakeData = [
  {
    sentence: "It may to rain later.",
    mistakeIndex: 2,
    correction: "rain",
    explanation: { en: "May/might + base verb (not 'to rain')", de: "May/might + Grundform (nicht 'to rain')" }
  },
  {
    sentence: "Might I can help you?",
    mistakeIndex: 2,
    correction: "help",
    explanation: { en: "Don't use 'can' after might/may: might I help", de: "Verwende kein 'can' nach might/may: might I help" }
  },
  {
    sentence: "She mights be late.",
    mistakeIndex: 1,
    correction: "might",
    explanation: { en: "Might doesn't change: might (not 'mights')", de: "Might ändert sich nicht: might (nicht 'mights')" }
  }
];

const grammarRacerData = [
  {
    prompt: "It ___ snow tomorrow.",
    options: ["might", "mights", "might to"],
    correct: "might",
    explanation: "Possibility: might"
  },
  {
    prompt: "___ I ask a question?",
    options: ["May", "Might", "Can"],
    correct: "May",
    explanation: "Polite request: May"
  },
  {
    prompt: "He ___ not be here.",
    options: ["may", "mays", "may to"],
    correct: "may",
    explanation: "Possibility: may"
  }
];

export const mayAndMight1 = {
  id: 'a2_g29',
  title: {
    en: 'May and Might 1',
    de: 'May und Might 1'
  },
  description: {
    en: "Expressing possibility and uncertainty. 'It may rain', 'She might come', 'May I...?' for polite requests.",
    de: "Möglichkeit und Unsicherheit ausdrücken. 'Es könnte regnen', 'Sie könnte kommen', 'Darf ich...?' für höfliche Bitten."
  },
  
  components: {
    sentenceBuilder: <GrammarGame type="sentenceBuilder" data={sentenceBuilderData} />,
    fixTheMistake: <GrammarGame type="fixTheMistake" data={fixTheMistakeData} />,
    grammarRacer: <GrammarGame type="grammarRacer" data={grammarRacerData} />
  },

  content: {
    en: `
## May and Might: Possibility and Uncertainty 🤔

**May** and **might** are modal verbs that express **possibility** and **uncertainty**. They're perfect for when you're not sure about something - when something is possible but not certain.

### Why May and Might?

Think about these situations:
- "It **may rain** tomorrow." (It's possible, but I'm not sure)
- "She **might come** to the party." (It's possible, but uncertain)
- "**May** I ask a question?" (Polite way to ask permission)

The key idea: **Possible but not certain** = **May/Might**

### 1. Form: May/Might + Base Verb 📝

**Structure:** Subject + **may/might** + base form of verb

**Important:** After "may" and "might", you use the **base form** (infinitive without "to"), NOT "to" + verb!

**Examples:**
- "It **may rain**." (Not "may to rain")
- "She **might come**." (Not "might to come")
- "They **may be** late." (Not "may to be")

**No changes:** May and might stay the same for all subjects (I may, you may, he may, etc.)

<div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">💡 Remember:</h3>
  <p>May/might + <strong>base form</strong> (rain, come, be), NOT "to rain" or "rains"!</p>
  <p>May and might don't change: I may, you may, he may (not "he mays")</p>
</div>

<GamePlaceholder id="sentenceBuilder" />

### 2. Use 1: Possibility (Maybe It Will Happen) 🎯

Use **may** or **might** to say that something is **possible** but you're **not certain**.

**May** and **might** are very similar - you can often use either one. **Might** is slightly less certain than **may**.

**Examples:**
- "It **may rain** tomorrow." (It's possible - maybe yes, maybe no)
- "She **might come** to the party." (It's possible, but I'm not sure)
- "He **may be** at home." (It's possible)
- "We **might go** to the cinema." (It's possible)

**Compare:**
- "It **may rain**." (Maybe 50% chance)
- "It **might rain**." (Maybe 40% chance - slightly less certain)

<div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">✅ Remember:</h3>
  <p><strong>May/Might</strong> = Possible but not certain</p>
  <p>If you're sure → Use "will"</p>
  <p>If you're not sure → Use "may" or "might"</p>
</div>

### 3. Use 2: Polite Requests (May I...?) 🙏

Use **May I...?** to ask for permission in a **polite, formal** way.

**May I...?** is more formal than **Can I...?**

**Examples:**
- "**May I** borrow your pen?" (Polite request)
- "**May I** ask a question?" (Polite request)
- "**May I** come in?" (Polite request)

**Compare:**
- "**Can I** borrow your pen?" (Informal, friendly)
- "**May I** borrow your pen?" (More formal, polite)

**Note:** We don't usually use "Might I...?" for requests - use "May I...?" instead.

<GamePlaceholder id="fixTheMistake" />

### 4. Negative: May Not / Might Not ❌

**Structure:** Subject + **may not** / **might not** + base verb

**Examples:**
- "It **may not rain** tomorrow." (It's possible it won't rain)
- "She **might not come**." (It's possible she won't come)
- "He **may not be** here." (It's possible he's not here)

**Contractions:** We don't usually contract "may not" or "might not" in formal writing, but in speech you might hear "mightn't" (rare).

### 5. Questions ❓

**Possibility questions:**
- "**Might** it rain?" (Is it possible it will rain?)
- "**May** she come?" (Is it possible she will come?)

**Permission questions:**
- "**May I** help you?" (Polite request)
- "**May I** use your phone?" (Polite request)

**Note:** We don't usually ask "Might I...?" for permission - use "May I...?" instead.

### 6. May/Might vs Will vs Can 🔄

| Word | Use | Example |
|------|-----|---------|
| **Will** | Certain (sure) | "It **will** rain." (I'm sure) |
| **May/Might** | Possible (not sure) | "It **may** rain." (Maybe) |
| **Can** | Ability or informal permission | "I **can** swim." / "**Can I** go?" |

**Compare:**
- "It **will** rain." (I'm certain - 100%)
- "It **may** rain." (Possible - maybe 50%)
- "It **might** rain." (Possible - maybe 40%)

---

### 🎮 Practice Arena

**🏎️ Grammar Racer: May or Might?**
Choose the correct form! Remember: base form after may/might!
<GamePlaceholder id="grammarRacer" />

### 🎯 Practical Exercise

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border-2 border-green-300">
  <h3 className="font-bold text-green-800 dark:text-green-200 mb-4">📝 Possibilities and Requests</h3>
  <p className="mb-4">Write sentences using may and might:</p>
  <ol className="list-decimal list-inside space-y-2">
    <li>One sentence about a possibility using "may" (e.g., "It may rain")</li>
    <li>One sentence about a possibility using "might" (e.g., "She might come")</li>
    <li>One polite request using "May I...?"</li>
    <li>One sentence about something that may not happen</li>
  </ol>
</div>
`,
    de: `
## May und Might: Möglichkeit und Unsicherheit 🤔

**May** und **might** sind Modalverben, die **Möglichkeit** und **Unsicherheit** ausdrücken. Sie sind perfekt, wenn du dir nicht sicher bist - wenn etwas möglich ist, aber nicht sicher.

### Warum May und Might?

Denk an diese Situationen:
- "It **may rain** tomorrow." (Es ist möglich, aber ich bin nicht sicher)
- "She **might come** to the party." (Es ist möglich, aber unsicher)
- "**May** I ask a question?" (Höfliche Art, um Erlaubnis zu fragen)

Die Schlüsselidee: **Möglich, aber nicht sicher** = **May/Might**

### 1. Form: May/Might + Grundform 📝

**Struktur:** Subjekt + **may/might** + Grundform des Verbs

**Wichtig:** Nach "may" und "might" verwendest du die **Grundform** (Infinitiv ohne "to"), NICHT "to" + Verb!

**Beispiele:**
- "It **may rain**." (Nicht "may to rain")
- "She **might come**." (Nicht "might to come")
- "They **may be** late." (Nicht "may to be")

**Keine Änderungen:** May und might bleiben für alle Subjekte gleich (I may, you may, he may, etc.)

<div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">💡 Merke dir:</h3>
  <p>May/might + <strong>Grundform</strong> (rain, come, be), NICHT "to rain" oder "rains"!</p>
  <p>May und might ändern sich nicht: I may, you may, he may (nicht "he mays")</p>
</div>

<GamePlaceholder id="sentenceBuilder" />

### 2. Verwendung 1: Möglichkeit (Vielleicht wird es passieren) 🎯

Verwende **may** oder **might**, um zu sagen, dass etwas **möglich** ist, aber du **nicht sicher** bist.

**May** und **might** sind sehr ähnlich - du kannst oft beide verwenden. **Might** ist etwas weniger sicher als **may**.

**Beispiele:**
- "It **may rain** tomorrow." (Es ist möglich - vielleicht ja, vielleicht nein)
- "She **might come** to the party." (Es ist möglich, aber ich bin nicht sicher)
- "He **may be** at home." (Es ist möglich)
- "We **might go** to the cinema." (Es ist möglich)

**Vergleiche:**
- "It **may rain**." (Vielleicht 50% Chance)
- "It **might rain**." (Vielleicht 40% Chance - etwas weniger sicher)

<div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">✅ Merke dir:</h3>
  <p><strong>May/Might</strong> = Möglich, aber nicht sicher</p>
  <p>Wenn du sicher bist → Verwende "will"</p>
  <p>Wenn du nicht sicher bist → Verwende "may" oder "might"</p>
</div>

### 3. Verwendung 2: Höfliche Bitten (May I...?) 🙏

Verwende **May I...?**, um auf eine **höfliche, formelle** Art um Erlaubnis zu bitten.

**May I...?** ist formeller als **Can I...?**

**Beispiele:**
- "**May I** borrow your pen?" (Höfliche Bitte)
- "**May I** ask a question?" (Höfliche Bitte)
- "**May I** come in?" (Höfliche Bitte)

**Vergleiche:**
- "**Can I** borrow your pen?" (Informell, freundlich)
- "**May I** borrow your pen?" (Formeller, höflich)

**Hinweis:** Wir verwenden normalerweise nicht "Might I...?" für Bitten - verwende stattdessen "May I...?".

<GamePlaceholder id="fixTheMistake" />

### 4. Verneinung: May Not / Might Not ❌

**Struktur:** Subjekt + **may not** / **might not** + Grundform

**Beispiele:**
- "It **may not rain** tomorrow." (Es ist möglich, dass es nicht regnet)
- "She **might not come**." (Es ist möglich, dass sie nicht kommt)
- "He **may not be** here." (Es ist möglich, dass er nicht hier ist)

**Kontraktionen:** Wir kontrahieren normalerweise nicht "may not" oder "might not" in formellem Schreiben, aber in der Sprache könntest du "mightn't" hören (selten).

### 5. Fragen ❓

**Möglichkeitsfragen:**
- "**Might** it rain?" (Ist es möglich, dass es regnet?)
- "**May** she come?" (Ist es möglich, dass sie kommt?)

**Erlaubnisfragen:**
- "**May I** help you?" (Höfliche Bitte)
- "**May I** use your phone?" (Höfliche Bitte)

**Hinweis:** Wir fragen normalerweise nicht "Might I...?" um Erlaubnis - verwende stattdessen "May I...?".

### 6. May/Might vs Will vs Can 🔄

| Wort | Verwendung | Beispiel |
|------|------------|----------|
| **Will** | Sicher (gewiss) | "It **will** rain." (Ich bin sicher) |
| **May/Might** | Möglich (nicht sicher) | "It **may** rain." (Vielleicht) |
| **Can** | Fähigkeit oder informelle Erlaubnis | "I **can** swim." / "**Can I** go?" |

**Vergleiche:**
- "It **will** rain." (Ich bin sicher - 100%)
- "It **may** rain." (Möglich - vielleicht 50%)
- "It **might** rain." (Möglich - vielleicht 40%)

---

### 🎮 Trainings-Arena

**🏎️ Grammar Racer: May oder Might?**
Wähle die richtige Form! Denk daran: Grundform nach may/might!
<GamePlaceholder id="grammarRacer" />

### 🎯 Praktische Übung

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border-2 border-green-300">
  <h3 className="font-bold text-green-800 dark:text-green-200 mb-4">📝 Möglichkeiten und Bitten</h3>
  <p className="mb-4">Schreibe Sätze mit may und might:</p>
  <ol className="list-decimal list-inside space-y-2">
    <li>Ein Satz über eine Möglichkeit mit "may" (z.B. "It may rain")</li>
    <li>Ein Satz über eine Möglichkeit mit "might" (z.B. "She might come")</li>
    <li>Eine höfliche Bitte mit "May I...?"</li>
    <li>Ein Satz über etwas, das vielleicht nicht passiert</li>
  </ol>
</div>
`
  },
  task: {
    de: {
      title: 'May und Might',
      description: 'Schreibe Sätze mit may und might über Möglichkeiten und Bitten.',
      checklist: [
        { text: 'Satz über Möglichkeit mit "may"', checked: false },
        { text: 'Satz über Möglichkeit mit "might"', checked: false },
        { text: 'Höfliche Bitte mit "May I...?"', checked: false },
        { text: 'Satz mit "may not" oder "might not"', checked: false }
      ]
    },
    en: {
      title: 'May and Might',
      description: 'Write sentences with may and might about possibilities and requests.',
      checklist: [
        { text: 'Sentence about possibility with "may"', checked: false },
        { text: 'Sentence about possibility with "might"', checked: false },
        { text: 'Polite request with "May I...?"', checked: false },
        { text: 'Sentence with "may not" or "might not"', checked: false }
      ]
    }
  },
  quiz: { de: [], en: [] }
};


