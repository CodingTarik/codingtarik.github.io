import React from 'react';
import GrammarGame from '../../../components/grammar-games/GrammarGame';

const sentenceBuilderData = [
  {
    prompt: { en: "I ___ (not be) able to come tomorrow.", de: "Ich ___ (nicht sein) morgen kommen können." },
    words: ["may not be", "might not be", "will not be", "am not"],
    correct: "may not be",
    explanation: { en: "Uncertainty about ability: may/might not be able to", de: "Unsicherheit über Fähigkeit: may/might not be able to" }
  },
  {
    prompt: { en: "You ___ (want) to check this again.", de: "Du ___ (wollen) das vielleicht nochmal überprüfen." },
    words: ["might want", "may want", "want", "will want"],
    correct: "might want",
    explanation: { en: "Suggestion/advice: might want to", de: "Vorschlag/Ratschlag: might want to" }
  },
  {
    prompt: { en: "It ___ (be) a good idea to call first.", de: "Es ___ (sein) eine gute Idee, zuerst anzurufen." },
    words: ["might be", "may be", "is", "will be"],
    correct: "might be",
    explanation: { en: "Suggestion: might be a good idea", de: "Vorschlag: might be a good idea" }
  }
];

const fixTheMistakeData = [
  {
    sentence: "You may to want to check this.",
    mistakeIndex: 2,
    correction: "want",
    explanation: { en: "May/might + base verb: may want (not 'may to want')", de: "May/might + Grundform: may want (nicht 'may to want')" }
  },
  {
    sentence: "It mights be better to wait.",
    mistakeIndex: 1,
    correction: "might",
    explanation: { en: "Might doesn't change: might be (not 'mights')", de: "Might ändert sich nicht: might be (nicht 'mights')" }
  }
];

const grammarRacerData = [
  {
    prompt: "You ___ want to try this.",
    options: ["might", "mights", "might to"],
    correct: "might",
    explanation: "Suggestion: might want"
  },
  {
    prompt: "It ___ be too late.",
    options: ["may", "mays", "may to"],
    correct: "may",
    explanation: "Possibility: may be"
  }
];

export const mayAndMight2 = {
  id: 'a2_g30',
  title: {
    en: 'May and Might 2 - Advanced Uses',
    de: 'May und Might 2 - Fortgeschrittene Verwendungen'
  },
  description: {
    en: "More advanced uses of may and might: suggestions, polite advice, and expressing uncertainty in different contexts.",
    de: "Fortgeschrittenere Verwendungen von may und might: Vorschläge, höfliche Ratschläge und Unsicherheit in verschiedenen Kontexten ausdrücken."
  },
  
  components: {
    sentenceBuilder: <GrammarGame type="sentenceBuilder" data={sentenceBuilderData} />,
    fixTheMistake: <GrammarGame type="fixTheMistake" data={fixTheMistakeData} />,
    grammarRacer: <GrammarGame type="grammarRacer" data={grammarRacerData} />
  },

  content: {
    en: `
## May and Might 2: Advanced Uses 🎓

In this lesson, we'll explore more advanced uses of **may** and **might** - beyond just possibility. These modal verbs are very versatile and can express suggestions, polite advice, and uncertainty in many different situations.

### 1. Suggestions: Might Want To / Might Be A Good Idea 💡

Use **might** to make **polite suggestions** or give **gentle advice**. This is softer and more polite than saying "You should..."

**Structure:** You might want to + verb / It might be a good idea to + verb

**Examples:**
- "You **might want to** check this again." (Polite suggestion)
- "You **might want to** call before you visit." (Gentle advice)
- "It **might be** a good idea to save your work." (Polite suggestion)
- "It **might be** better to wait." (Gentle suggestion)

**Why use "might"?** It's less direct and more polite than "should" or "must".

**Compare:**
- "You **should** check this." (Direct advice)
- "You **might want to** check this." (Polite suggestion - softer)

<div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">💡 Remember:</h3>
  <p><strong>Might want to</strong> = Polite, gentle suggestion</p>
  <p>Use this when you want to be less direct and more polite!</p>
</div>

<GamePlaceholder id="sentenceBuilder" />

### 2. Uncertainty About Ability: May/Might Not Be Able To 🤷

Use **may not** or **might not** to express **uncertainty** about whether someone can do something.

**Structure:** Subject + may/might not be able to + verb

**Examples:**
- "I **may not be able to** come tomorrow." (I\'m not sure if I can come)
- "She **might not be able to** help." (I\'m not sure if she can help)
- "We **may not be able to** finish today." (Uncertain if we can finish)

**Compare:**
- "I **can\'t** come." (I\'m sure - I cannot come)
- "I **may not be able to** come." (I\'m not sure - maybe I can, maybe I can\'t)

### 3. Polite Expressions: May I Suggest...? 🙏

Use **may** in formal, polite expressions.

**Examples:**
- "**May I suggest** we try a different approach?" (Very polite)
- "**May I offer** some advice?" (Polite)
- "**Might I add** something?" (Very formal, polite)

**Note:** These are very formal expressions, often used in business or formal situations.

<GamePlaceholder id="fixTheMistake" />

### 4. Expressing Doubt: May/Might Not 🧐

Use **may not** or **might not** to express **doubt** or **uncertainty** about something.

**Examples:**
- "That **may not be** true." (I\'m not sure if it\'s true)
- "She **might not** know about this." (I\'m not sure if she knows)
- "It **may not** work." (I\'m not sure if it will work)

**Compare:**
- "That **isn\'t** true." (I\'m sure it\'s not true)
- "That **may not be** true." (I\'m not sure - maybe it\'s not true)

### 5. Common Patterns 📋

**Pattern 1: Might want to**
- "You **might want to** consider this option."
- "You **might want to** think about it."

**Pattern 2: Might be a good idea**
- "It **might be** a good idea to call first."
- "It **might be** better to wait."

**Pattern 3: May/might not be able to**
- "I **may not be able to** help."
- "She **might not be able to** come."

---

### 🎮 Practice Arena

**🏎️ Grammar Racer: Advanced May/Might**
Choose the correct form!
<GamePlaceholder id="grammarRacer" />

### 🎯 Practical Exercise

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border-2 border-green-300">
  <h3 className="font-bold text-green-800 dark:text-green-200 mb-4">📝 Advanced Uses</h3>
  <p className="mb-4">Write sentences using advanced may/might:</p>
  <ol className="list-decimal list-inside space-y-2">
    <li>One polite suggestion with "might want to"</li>
    <li>One sentence with "might be a good idea"</li>
    <li>One sentence expressing uncertainty about ability with "may not be able to"</li>
    <li>One sentence expressing doubt with "might not"</li>
  </ol>
</div>
`,
    de: `
## May und Might 2: Fortgeschrittene Verwendungen 🎓

In dieser Lektion erkunden wir fortgeschrittenere Verwendungen von **may** und **might** - über bloße Möglichkeit hinaus. Diese Modalverben sind sehr vielseitig und können Vorschläge, höfliche Ratschläge und Unsicherheit in vielen verschiedenen Situationen ausdrücken.

### 1. Vorschläge: Might Want To / Might Be A Good Idea 💡

Verwende **might**, um **höfliche Vorschläge** zu machen oder **sanfte Ratschläge** zu geben. Das ist weicher und höflicher als "You should..." zu sagen.

**Struktur:** You might want to + Verb / It might be a good idea to + Verb

**Beispiele:**
- "You **might want to** check this again." (Höflicher Vorschlag)
- "You **might want to** call before you visit." (Sanfter Ratschlag)
- "It **might be** a good idea to save your work." (Höflicher Vorschlag)
- "It **might be** better to wait." (Sanfter Vorschlag)

**Warum "might" verwenden?** Es ist weniger direkt und höflicher als "should" oder "must".

**Vergleiche:**
- "You **should** check this." (Direkter Ratschlag)
- "You **might want to** check this." (Höflicher Vorschlag - weicher)

<div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">💡 Merke dir:</h3>
  <p><strong>Might want to</strong> = Höflicher, sanfter Vorschlag</p>
  <p>Verwende dies, wenn du weniger direkt und höflicher sein willst!</p>
</div>

<GamePlaceholder id="sentenceBuilder" />

### 2. Unsicherheit über Fähigkeit: May/Might Not Be Able To 🤷

Verwende **may not** oder **might not**, um **Unsicherheit** darüber auszudrücken, ob jemand etwas tun kann.

**Struktur:** Subjekt + may/might not be able to + Verb

**Beispiele:**
- "I **may not be able to** come tomorrow." (Ich bin nicht sicher, ob ich kommen kann)
- "She **might not be able to** help." (Ich bin nicht sicher, ob sie helfen kann)
- "We **may not be able to** finish today." (Unsicher, ob wir fertig werden können)

**Vergleiche:**
- "I **can\'t** come." (Ich bin sicher - ich kann nicht kommen)
- "I **may not be able to** come." (Ich bin nicht sicher - vielleicht kann ich, vielleicht nicht)

### 3. Höfliche Ausdrücke: May I Suggest...? 🙏

Verwende **may** in formellen, höflichen Ausdrücken.

**Beispiele:**
- "**May I suggest** we try a different approach?" (Sehr höflich)
- "**May I offer** some advice?" (Höflich)
- "**Might I add** something?" (Sehr formal, höflich)

**Hinweis:** Das sind sehr formelle Ausdrücke, oft in Geschäftssituationen oder formellen Situationen verwendet.

<GamePlaceholder id="fixTheMistake" />

### 4. Zweifel ausdrücken: May/Might Not 🧐

Verwende **may not** oder **might not**, um **Zweifel** oder **Unsicherheit** über etwas auszudrücken.

**Beispiele:**
- "That **may not be** true." (Ich bin nicht sicher, ob es wahr ist)
- "She **might not** know about this." (Ich bin nicht sicher, ob sie es weiß)
- "It **may not** work." (Ich bin nicht sicher, ob es funktionieren wird)

**Vergleiche:**
- "That **isn\'t** true." (Ich bin sicher, es ist nicht wahr)
- "That **may not be** true." (Ich bin nicht sicher - vielleicht ist es nicht wahr)

### 5. Häufige Muster 📋

**Muster 1: Might want to**
- "You **might want to** consider this option."
- "You **might want to** think about it."

**Muster 2: Might be a good idea**
- "It **might be** a good idea to call first."
- "It **might be** better to wait."

**Muster 3: May/might not be able to**
- "I **may not be able to** help."
- "She **might not be able to** come."

---

### 🎮 Trainings-Arena

**🏎️ Grammar Racer: Fortgeschrittenes May/Might**
Wähle die richtige Form!
<GamePlaceholder id="grammarRacer" />

### 🎯 Praktische Übung

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border-2 border-green-300">
  <h3 className="font-bold text-green-800 dark:text-green-200 mb-4">📝 Fortgeschrittene Verwendungen</h3>
  <p className="mb-4">Schreibe Sätze mit fortgeschrittenem may/might:</p>
  <ol className="list-decimal list-inside space-y-2">
    <li>Ein höflicher Vorschlag mit "might want to"</li>
    <li>Ein Satz mit "might be a good idea"</li>
    <li>Ein Satz, der Unsicherheit über Fähigkeit mit "may not be able to" ausdrückt</li>
    <li>Ein Satz, der Zweifel mit "might not" ausdrückt</li>
  </ol>
</div>
`
  },
  task: {
    de: {
      title: 'May und Might Fortgeschritten',
      description: 'Schreibe Sätze mit fortgeschrittenem may/might.',
      checklist: [
        { text: 'Höflicher Vorschlag mit "might want to"', checked: false },
        { text: 'Satz mit "might be a good idea"', checked: false },
        { text: 'Unsicherheit über Fähigkeit mit "may not be able to"', checked: false },
        { text: 'Zweifel mit "might not"', checked: false }
      ]
    },
    en: {
      title: 'May and Might Advanced',
      description: 'Write sentences using advanced may/might.',
      checklist: [
        { text: 'Polite suggestion with "might want to"', checked: false },
        { text: 'Sentence with "might be a good idea"', checked: false },
        { text: 'Uncertainty about ability with "may not be able to"', checked: false },
        { text: 'Doubt with "might not"', checked: false }
      ]
    }
  },
  quiz: { de: [], en: [] }
};


