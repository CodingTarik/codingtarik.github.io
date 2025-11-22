import React from 'react';
import GrammarGame from '../../../components/grammar-games/GrammarGame';

const sentenceBuilderData = [
  {
    prompt: { en: "If it ___ (rain), we will stay home.", de: "Wenn es ___ (regnen), bleiben wir zu Hause." },
    words: ["rains", "will rain", "rain", "is raining"],
    correct: "rains",
    explanation: { en: "First conditional: If + present simple, will + base verb", de: "Erste Bedingung: If + Present Simple, will + Grundform" }
  },
  {
    prompt: { en: "If you ___ (study) hard, you will pass the exam.", de: "Wenn du ___ (lernen) hart, wirst du die Prüfung bestehen." },
    words: ["study", "will study", "studies", "studied"],
    correct: "study",
    explanation: { en: "First conditional: If + present simple (you study)", de: "Erste Bedingung: If + Present Simple (you study)" }
  },
  {
    prompt: { en: "If I ___ (have) time, I will call you.", de: "Wenn ich ___ (haben) Zeit, rufe ich dich an." },
    words: ["have", "will have", "has", "had"],
    correct: "have",
    explanation: { en: "First conditional: If + present simple (I have)", de: "Erste Bedingung: If + Present Simple (I have)" }
  }
];

const fixTheMistakeData = [
  {
    sentence: "If it will rain, we will stay home.",
    mistakeIndex: 2,
    correction: "rains",
    explanation: { en: "First conditional: If + present simple (not 'will rain')", de: "Erste Bedingung: If + Present Simple (nicht 'will rain')" }
  },
  {
    sentence: "If you study hard, you pass the exam.",
    mistakeIndex: 4,
    correction: "will pass",
    explanation: { en: "First conditional: result clause needs 'will'", de: "Erste Bedingung: Ergebnissatz braucht 'will'" }
  }
];

const grammarRacerData = [
  {
    prompt: "If it ___ sunny, we will go to the beach.",
    options: ["is", "will be", "was"],
    correct: "is",
    explanation: "First conditional: If + present"
  },
  {
    prompt: "If you ___ early, you will catch the train.",
    options: ["leave", "will leave", "left"],
    correct: "leave",
    explanation: "First conditional: If + present"
  }
];

export const ifIDo = {
  id: 'a2_g38',
  title: {
    en: 'If I do... and If I did... - Focus on Type 1: If I do...',
    de: 'If I do... und If I did... - Fokus auf Typ 1: If I do...'
  },
  description: {
    en: "First conditional: real possibilities in the future. 'If it rains, I will stay home', 'If you study, you will pass'.",
    de: "Erste Bedingung: reale Möglichkeiten in der Zukunft. 'Wenn es regnet, bleibe ich zu Hause', 'Wenn du lernst, wirst du bestehen'."
  },
  
  components: {
    sentenceBuilder: <GrammarGame type="sentenceBuilder" data={sentenceBuilderData} />,
    fixTheMistake: <GrammarGame type="fixTheMistake" data={fixTheMistakeData} />,
    grammarRacer: <GrammarGame type="grammarRacer" data={grammarRacerData} />
  },

  content: {
    en: `
## First Conditional: Real Future Possibilities 🔮

The **First Conditional** (If I do...) talks about **real possibilities** in the future. It's used when something is **possible** or **likely** to happen.

### Why First Conditional?

Think about these situations:
- "If it **rains** tomorrow, I **will stay** home." (It might rain - real possibility)
- "If you **study** hard, you **will pass** the exam." (Possible if you study)
- "If I **have** time, I **will call** you." (Possible if I have time)

The key idea: **Real possibility** in the future = **First Conditional**

### 1. Form: If + Present Simple, Will + Base Verb 📝

**Structure:** **If** + Present Simple, **will** + base verb

**Important:** 
- The **if-clause** uses **Present Simple** (not future!)
- The **result clause** uses **will** + base verb

**Examples:**
- "If it **rains**, I **will stay** home." (If + present, will + base)
- "If you **study**, you **will pass**." (If + present, will + base)
- "If she **comes**, we **will be** happy." (If + present, will + base)

<div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">💡 Remember:</h3>
  <p><strong>If</strong> + Present Simple, <strong>will</strong> + base verb</p>
  <p>Don't use "will" in the if-clause! Use Present Simple!</p>
</div>

<GamePlaceholder id="sentenceBuilder" />

### 2. When to Use First Conditional 🎯

Use First Conditional for:

#### A) Real Future Possibilities
- "If it **rains**, I **will take** an umbrella." (Possible - it might rain)
- "If you **work** hard, you **will succeed**." (Possible if you work hard)

#### B) Promises or Warnings
- "If you **study**, I **will help** you." (Promise)
- "If you **don't hurry**, you **will be** late." (Warning)

#### C) Plans Dependent on Conditions
- "If I **have** time, I **will visit** you." (Plan depends on having time)
- "If the weather **is** good, we **will go** to the beach." (Plan depends on weather)

**Key point:** The condition is **possible** or **likely** to happen in the future.

### 3. The Structure Breakdown 🔍

**Part 1: If-clause (condition)**
- Uses **Present Simple**
- Can come first or second in the sentence
- "If it **rains**..." / "If you **study**..."

**Part 2: Result clause (consequence)**
- Uses **will** + base verb
- "I **will stay** home" / "you **will pass**"

**Order:** You can swap the order!
- "If it rains, I will stay home." (If first)
- "I will stay home if it rains." (If second)

**Note:** When "if" comes second, don't use a comma!

<div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">✅ Remember:</h3>
  <p>You can say it two ways:</p>
  <p>"If it rains, I will stay." OR "I will stay if it rains."</p>
  <p>Both are correct!</p>
</div>

<GamePlaceholder id="fixTheMistake" />

### 4. Common Mistakes ❌

**Mistake 1:** Using "will" in the if-clause
- ❌ "If it **will rain**, I will stay." (Wrong!)
- ✅ "If it **rains**, I will stay." (Correct!)

**Mistake 2:** Forgetting "will" in the result
- ❌ "If you study, you pass." (Wrong - missing 'will'!)
- ✅ "If you study, you **will pass**." (Correct!)

**Mistake 3:** Using past tense
- ❌ "If it **rained**, I will stay." (Wrong - this is mixed conditional!)
- ✅ "If it **rains**, I will stay." (Correct!)

### 5. Negative Forms ❌

**Negative if-clause:**
- "If it **doesn't rain**, we **will go** to the park."
- "If you **don't study**, you **won't pass**."

**Negative result:**
- "If it rains, I **won't go** out."
- "If you don't hurry, you **won't catch** the train."

### 6. Questions ❓

**Questions with first conditional:**
- "What **will** you do if it **rains**?"
- "**Will** you come if I **invite** you?"
- "If you **win**, what **will** you do?"

---

### 🎮 Practice Arena

**🏎️ Grammar Racer: First Conditional**
Choose the correct form!
<GamePlaceholder id="grammarRacer" />

### 🎯 Practical Exercise

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border-2 border-green-300">
  <h3 className="font-bold text-green-800 dark:text-green-200 mb-4">📝 Real Possibilities</h3>
  <p className="mb-4">Write sentences using first conditional:</p>
  <ol className="list-decimal list-inside space-y-2">
    <li>One sentence about a real future possibility (If + present, will...)</li>
    <li>One sentence with the if-clause second (will... if + present)</li>
    <li>One sentence with a negative if-clause</li>
    <li>One question using first conditional</li>
  </ol>
</div>
`,
    de: `
## Erste Bedingung: Reale Zukunfts-Möglichkeiten 🔮

Die **Erste Bedingung** (If I do...) spricht über **reale Möglichkeiten** in der Zukunft. Sie wird verwendet, wenn etwas **möglich** oder **wahrscheinlich** ist zu passieren.

### Warum Erste Bedingung?

Denk an diese Situationen:
- "If it **rains** tomorrow, I **will stay** home." (Es könnte regnen - reale Möglichkeit)
- "If you **study** hard, you **will pass** the exam." (Möglich, wenn du lernst)
- "If I **have** time, I **will call** you." (Möglich, wenn ich Zeit habe)

Die Schlüsselidee: **Reale Möglichkeit** in der Zukunft = **Erste Bedingung**

### 1. Form: If + Present Simple, Will + Grundform 📝

**Struktur:** **If** + Present Simple, **will** + Grundform

**Wichtig:** 
- Der **If-Satz** verwendet **Present Simple** (nicht Zukunft!)
- Der **Ergebnissatz** verwendet **will** + Grundform

**Beispiele:**
- "If it **rains**, I **will stay** home." (If + Present, will + Grundform)
- "If you **study**, you **will pass**." (If + Present, will + Grundform)
- "If she **comes**, we **will be** happy." (If + Present, will + Grundform)

<div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">💡 Merke dir:</h3>
  <p><strong>If</strong> + Present Simple, <strong>will</strong> + Grundform</p>
  <p>Verwende kein "will" im If-Satz! Verwende Present Simple!</p>
</div>

<GamePlaceholder id="sentenceBuilder" />

### 2. Wann Erste Bedingung verwenden 🎯

Verwende Erste Bedingung für:

#### A) Reale Zukunfts-Möglichkeiten
- "If it **rains**, I **will take** an umbrella." (Möglich - es könnte regnen)
- "If you **work** hard, you **will succeed**." (Möglich, wenn du hart arbeitest)

#### B) Versprechen oder Warnungen
- "If you **study**, I **will help** you." (Versprechen)
- "If you **don't hurry**, you **will be** late." (Warnung)

#### C) Pläne abhängig von Bedingungen
- "If I **have** time, I **will visit** you." (Plan hängt von Zeit ab)
- "If the weather **is** good, we **will go** to the beach." (Plan hängt vom Wetter ab)

**Schlüsselpunkt:** Die Bedingung ist **möglich** oder **wahrscheinlich** in der Zukunft zu passieren.

### 3. Die Struktur im Detail 🔍

**Teil 1: If-Satz (Bedingung)**
- Verwendet **Present Simple**
- Kann zuerst oder zweitens im Satz kommen
- "If it **rains**..." / "If you **study**..."

**Teil 2: Ergebnissatz (Konsequenz)**
- Verwendet **will** + Grundform
- "I **will stay** home" / "you **will pass**"

**Reihenfolge:** Du kannst die Reihenfolge tauschen!
- "If it rains, I will stay home." (If zuerst)
- "I will stay home if it rains." (If zweitens)

**Hinweis:** Wenn "if" zweitens kommt, verwende kein Komma!

<div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">✅ Merke dir:</h3>
  <p>Du kannst es auf zwei Arten sagen:</p>
  <p>"If it rains, I will stay." ODER "I will stay if it rains."</p>
  <p>Beide sind richtig!</p>
</div>

<GamePlaceholder id="fixTheMistake" />

### 4. Häufige Fehler ❌

**Fehler 1:** "Will" im If-Satz verwenden
- ❌ "If it **will rain**, I will stay." (Falsch!)
- ✅ "If it **rains**, I will stay." (Richtig!)

**Fehler 2:** "Will" im Ergebnis vergessen
- ❌ "If you study, you pass." (Falsch - 'will' fehlt!)
- ✅ "If you study, you **will pass**." (Richtig!)

**Fehler 3:** Vergangenheitsform verwenden
- ❌ "If it **rained**, I will stay." (Falsch - das ist gemischte Bedingung!)
- ✅ "If it **rains**, I will stay." (Richtig!)

### 5. Verneinungsformen ❌

**Negativer If-Satz:**
- "If it **doesn't rain**, we **will go** to the park."
- "If you **don't study**, you **won't pass**."

**Negatives Ergebnis:**
- "If it rains, I **won't go** out."
- "If you don't hurry, you **won't catch** the train."

### 6. Fragen ❓

**Fragen mit erster Bedingung:**
- "What **will** you do if it **rains**?"
- "**Will** you come if I **invite** you?"
- "If you **win**, what **will** you do?"

---

### 🎮 Trainings-Arena

**🏎️ Grammar Racer: Erste Bedingung**
Wähle die richtige Form!
<GamePlaceholder id="grammarRacer" />

### 🎯 Praktische Übung

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border-2 border-green-300">
  <h3 className="font-bold text-green-800 dark:text-green-200 mb-4">📝 Reale Möglichkeiten</h3>
  <p className="mb-4">Schreibe Sätze mit erster Bedingung:</p>
  <ol className="list-decimal list-inside space-y-2">
    <li>Ein Satz über eine reale Zukunfts-Möglichkeit (If + Present, will...)</li>
    <li>Ein Satz mit dem If-Satz zweitens (will... if + Present)</li>
    <li>Ein Satz mit negativem If-Satz</li>
    <li>Eine Frage mit erster Bedingung</li>
  </ol>
</div>
`
  },
  task: {
    de: {
      title: 'Erste Bedingung',
      description: 'Schreibe Sätze mit erster Bedingung über reale Möglichkeiten.',
      checklist: [
        { text: 'Satz über reale Zukunfts-Möglichkeit (If + Present, will...)', checked: false },
        { text: 'Satz mit If-Satz zweitens (will... if + Present)', checked: false },
        { text: 'Satz mit negativem If-Satz', checked: false },
        { text: 'Frage mit erster Bedingung', checked: false }
      ]
    },
    en: {
      title: 'First Conditional',
      description: 'Write sentences using first conditional about real possibilities.',
      checklist: [
        { text: 'Sentence about real future possibility (If + Present, will...)', checked: false },
        { text: 'Sentence with if-clause second (will... if + Present)', checked: false },
        { text: 'Sentence with negative if-clause', checked: false },
        { text: 'Question using first conditional', checked: false }
      ]
    }
  },
  quiz: { de: [], en: [] }
};

