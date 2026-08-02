import React from 'react';
import GrammarGame from '../../../components/grammar-games/GrammarGame';

const sentenceBuilderData = [
  {
    prompt: { en: "___ you need any assistance, please don't hesitate to ask.", de: "Sollten Sie Hilfe benötigen, zögern Sie bitte nicht zu fragen." },
    words: ["Should", "If", "Were", "Had"],
    correct: "Should",
    explanation: { en: "'Should' at the start inverts the conditional for formal style: 'Should you need...' = 'If you should need...'", de: "'Should' am Anfang invertiert den Konditional für formellen Stil: 'Should you need...' = 'If you should need...'" }
  },
  {
    prompt: { en: "___ I to win the lottery, I would travel the world.", de: "Würde ich im Lotto gewinnen, würde ich die Welt bereisen." },
    words: ["Were", "If", "Should", "Had"],
    correct: "Were",
    explanation: { en: "'Were I to...' is a formal inversion of 'If I were to...'. Very common in written English.", de: "'Were I to...' ist eine formelle Inversion von 'If I were to...'. Sehr häufig im geschriebenen Englisch." }
  },
  {
    prompt: { en: "You may borrow the car ___ that you return it by Friday.", de: "Du darfst das Auto leihen, vorausgesetzt, dass du es bis Freitag zurückbringst." },
    words: ["provided", "unless", "but for", "were"],
    correct: "provided",
    explanation: { en: "'Provided (that)' means 'on the condition that' – a formal alternative to 'if'.", de: "'Provided (that)' bedeutet 'unter der Bedingung, dass' – eine formelle Alternative zu 'if'." }
  },
  {
    prompt: { en: "___ it not been for your help, we would have failed.", de: "Wenn deine Hilfe nicht gewesen wäre, hätten wir versagt." },
    words: ["Had", "If", "Were", "Should"],
    correct: "Had",
    explanation: { en: "'Had it not been for...' is a formal inversion of 'If it had not been for...'", de: "'Had it not been for...' ist eine formelle Inversion von 'If it had not been for...'" }
  },
  {
    prompt: { en: "___ for the traffic jam, we would have arrived on time.", de: "Ohne den Stau wären wir pünktlich angekommen." },
    words: ["But for", "Unless", "Provided", "Were"],
    correct: "But for",
    explanation: { en: "'But for' means 'if it were not for / if it had not been for' – used in formal English.", de: "'But for' bedeutet 'wenn nicht wäre / wenn nicht gewesen wäre' – im formellen Englisch verwendet." }
  },
  {
    prompt: { en: "I will attend the meeting ___ I feel better by then.", de: "Ich werde an dem Meeting teilnehmen, vorausgesetzt ich fühle mich bis dahin besser." },
    words: ["providing", "but for", "were", "unless"],
    correct: "providing",
    explanation: { en: "'Providing (that)' = 'on the condition that', a formal synonym of 'if'.", de: "'Providing (that)' = 'unter der Bedingung, dass', ein formelles Synonym von 'if'." }
  }
];

const fixTheMistakeData = [
  {
    sentence: "Were I would be you, I would accept the offer.",
    mistakeIndex: 2,
    correction: "Were I",
    explanation: { en: "Inverted conditional doesn't need 'would' in the if-clause. Simply: 'Were I you, I would accept...'", de: "Der invertierte Konditional braucht kein 'would' im if-Satz. Einfach: 'Were I you, I would accept...'" }
  },
  {
    sentence: "Should you will need anything, let me know.",
    mistakeIndex: 2,
    correction: "need",
    explanation: { en: "After 'should' in inverted conditionals, use the base verb without 'will'.", de: "Nach 'should' in invertierten Konditionalsätzen verwende die Grundform ohne 'will'." }
  },
  {
    sentence: "Provided that you will finish on time, you can leave early.",
    mistakeIndex: 3,
    correction: "finish",
    explanation: { en: "'Provided that' takes Present Simple for future meaning, not 'will + verb'.", de: "'Provided that' nimmt Present Simple für Zukunftsbedeutung, nicht 'will + Verb'." }
  },
  {
    sentence: "But for your help, we will have failed the project.",
    mistakeIndex: 5,
    correction: "would have",
    explanation: { en: "'But for' in past context requires 'would have + past participle', not 'will have'.", de: "'But for' im vergangenen Kontext erfordert 'would have + Partizip Perfekt', nicht 'will have'." }
  }
];

const grammarRacerData = [
  {
    prompt: "___ he to ask me, I would gladly help.",
    options: ["Were", "If", "Should"],
    correct: "Were",
    explanation: "'Were he to ask' = 'If he were to ask' – formal inversion."
  },
  {
    prompt: "You can go out ___ you finish your homework first.",
    options: ["provided", "but for", "were"],
    correct: "provided",
    explanation: "'Provided' = 'on the condition that'."
  },
  {
    prompt: "___ it not been for the scholarship, she couldn't have studied abroad.",
    options: ["Had", "Were", "Should"],
    correct: "Had",
    explanation: "'Had it not been for' = 'If it hadn't been for' – formal 3rd conditional."
  },
  {
    prompt: "___ you require further information, please contact us.",
    options: ["Should", "Were", "Had"],
    correct: "Should",
    explanation: "'Should you require' = 'If you should require' – formal and polite."
  }
];

export const formalConditionals = {
  id: 'b2_g5',
  title: {
    en: 'Formal & Alternative Conditionals',
    de: 'Formelle & Alternative Konditionalsätze'
  },
  description: {
    en: "Learn formal alternatives to 'if': provided that, were to, should, but for, and inverted conditionals.",
    de: "Lerne formelle Alternativen zu 'if': provided that, were to, should, but for und invertierte Konditionalsätze."
  },
  components: {
    sentenceBuilder: <GrammarGame type="sentenceBuilder" data={sentenceBuilderData} />,
    fixTheMistake: <GrammarGame type="fixTheMistake" data={fixTheMistakeData} />,
    grammarRacer: <GrammarGame type="grammarRacer" data={grammarRacerData} />
  },
  content: {
    en: `
## Formal & Alternative Conditionals – Beyond 'If' ✒️

At B2 level and above, you'll encounter more formal and sophisticated ways to express conditions. These are common in academic writing, business English, and formal speech.

### 1. Inverted Conditionals (No 'If') 🔄

In formal English, we can remove 'if' and **invert** the subject and auxiliary verb.

#### a) Were + subject + to + verb (2nd conditional)
- Standard: "**If I were to** lose my job, I would move abroad."
- Inverted: "**Were I to** lose my job, I would move abroad."

- Standard: "**If she were** here, she would know what to do."
- Inverted: "**Were she** here, she would know what to do."

#### b) Had + subject + past participle (3rd conditional)
- Standard: "**If I had known**, I would have helped."
- Inverted: "**Had I known**, I would have helped."

- Standard: "**If it hadn't been** for you, I would have given up."
- Inverted: "**Had it not been** for you, I would have given up."

#### c) Should + subject + verb (1st conditional – formal)
- Standard: "**If you need** any help, call me."
- Inverted: "**Should you need** any help, call me."

- Standard: "**If there are** any problems, please inform us."
- Inverted: "**Should there be** any problems, please inform us."

> 💡 Inverted conditionals sound very formal and are most common in written English, business correspondence, and academic texts.

### 2. Provided / Providing (that) ✅

Meaning: "on the condition that" – a stricter, more formal 'if'.

- "You can leave early **provided that** you finish your work."
- "We'll fund the project **providing** it stays within budget."
- "**Provided** the weather is good, we'll have the party outside."

### 3. But for 🚫

Meaning: "if it were not for" / "if it had not been for"

- "**But for** your support, I would have given up." (= If it hadn't been for your support)
- "**But for** the rain, we would be at the beach." (= If it weren't for the rain)

### 4. As long as / So long as 📏

Meaning: "on the condition that" – less formal than 'provided'

- "You can borrow my car **as long as** you drive carefully."
- "I don't mind waiting **so long as** it's not more than an hour."

### 5. On condition that / On the understanding that 📋

Very formal, often used in contracts and agreements:

- "The loan was approved **on condition that** he provides collateral."
- "She accepted the job **on the understanding that** she could work remotely."

<GamePlaceholder id="sentenceBuilder" />

### 6. Summary Table 📊

| Expression | Meaning | Register |
|-----------|---------|----------|
| **Were I to...** | If I were to... | Very formal |
| **Had I known...** | If I had known... | Very formal |
| **Should you need...** | If you need... | Formal/polite |
| **Provided/Providing that** | On the condition that | Formal |
| **But for** | If it weren't/hadn't been for | Formal |
| **As long as** | If (condition met) | Neutral |
| **On condition that** | Strict condition | Very formal |

### 7. Common Mistakes ❌

**Mistake 1:** Adding 'would' in an inverted if-clause
- ❌ "Were I **would** know the answer..."
- ✅ "**Were I to** know the answer..."

**Mistake 2:** Using 'will' after 'should' in inverted conditionals
- ❌ "Should you **will need** help..."
- ✅ "Should you **need** help..."

**Mistake 3:** Using 'will' after 'provided that'
- ❌ "Provided that you **will come** on time..."
- ✅ "Provided that you **come** on time..."

<GamePlaceholder id="fixTheMistake" />

<div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">🎯 Key Takeaways:</h3>
  <ul className="list-disc list-inside space-y-1">
    <li><strong>Inversion</strong> = remove 'if', put auxiliary first (Were/Had/Should)</li>
    <li><strong>Provided/Providing that</strong> = strict 'if' (formal)</li>
    <li><strong>But for</strong> = without (this thing), the result would be different</li>
    <li>These forms are mainly for <strong>writing and formal speech</strong></li>
    <li>Don't use 'will' in formal conditional clauses</li>
  </ul>
</div>

---

### 🎮 Practice Arena
<GamePlaceholder id="grammarRacer" />
`,
    de: `
## Formelle & Alternative Konditionalsätze – Jenseits von 'If' ✒️

Auf B2-Niveau und darüber wirst du formellere und anspruchsvollere Wege kennenlernen, Bedingungen auszudrücken. Diese sind häufig im akademischen Schreiben, Geschäftsenglisch und in formeller Sprache.

### 1. Invertierte Konditionalsätze (Ohne 'If') 🔄

Im formellen Englisch können wir 'if' entfernen und Subjekt und Hilfsverb **invertieren**.

#### a) Were + Subjekt + to + Verb (2. Konditional)
- Standard: "**If I were to** lose my job, I would move abroad."
- Invertiert: "**Were I to** lose my job, I would move abroad."

#### b) Had + Subjekt + Partizip Perfekt (3. Konditional)
- Standard: "**If I had known**, I would have helped."
- Invertiert: "**Had I known**, I would have helped."

#### c) Should + Subjekt + Verb (1. Konditional – formell)
- Standard: "**If you need** any help, call me."
- Invertiert: "**Should you need** any help, call me."

> 💡 Invertierte Konditionalsätze klingen sehr formell und sind am häufigsten im geschriebenen Englisch und in Geschäftskorrespondenz.

### 2. Provided / Providing (that) ✅

Bedeutung: "unter der Bedingung, dass" – ein strengeres, formelleres 'if'.

- "You can leave early **provided that** you finish your work."
- "We'll fund the project **providing** it stays within budget."

### 3. But for 🚫

Bedeutung: "wenn nicht wäre / wenn nicht gewesen wäre"

- "**But for** your support, I would have given up." (= Ohne deine Unterstützung)
- "**But for** the rain, we would be at the beach." (= Ohne den Regen)

### 4. As long as / So long as 📏

Bedeutung: "unter der Bedingung, dass" – weniger formell als 'provided'

- "You can borrow my car **as long as** you drive carefully."

### 5. On condition that 📋

Sehr formell, oft in Verträgen verwendet:

- "The loan was approved **on condition that** he provides collateral."

<GamePlaceholder id="sentenceBuilder" />

### 6. Übersichtstabelle 📊

| Ausdruck | Bedeutung | Register |
|----------|-----------|----------|
| **Were I to...** | Wenn ich ... würde | Sehr formell |
| **Had I known...** | Wenn ich gewusst hätte... | Sehr formell |
| **Should you need...** | Falls Sie brauchen... | Formell/höflich |
| **Provided/Providing that** | Unter der Bedingung, dass | Formell |
| **But for** | Ohne / Wenn nicht wäre | Formell |
| **As long as** | Solange / Vorausgesetzt | Neutral |
| **On condition that** | Unter der strikten Bedingung | Sehr formell |

### 7. Häufige Fehler ❌

**Fehler 1:** 'Would' in einem invertierten if-Satz hinzufügen
- ❌ "Were I **would** know the answer..."
- ✅ "**Were I to** know the answer..."

**Fehler 2:** 'Will' nach 'should' verwenden
- ❌ "Should you **will need** help..."
- ✅ "Should you **need** help..."

**Fehler 3:** 'Will' nach 'provided that' verwenden
- ❌ "Provided that you **will come** on time..."
- ✅ "Provided that you **come** on time..."

<GamePlaceholder id="fixTheMistake" />

<div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">🎯 Wichtige Erkenntnisse:</h3>
  <ul className="list-disc list-inside space-y-1">
    <li><strong>Inversion</strong> = 'if' entfernen, Hilfsverb zuerst (Were/Had/Should)</li>
    <li><strong>Provided/Providing that</strong> = striktes 'if' (formell)</li>
    <li><strong>But for</strong> = ohne (diese Sache) wäre das Ergebnis anders</li>
    <li>Diese Formen sind hauptsächlich für <strong>Schreiben und formelle Sprache</strong></li>
  </ul>
</div>

---

### 🎮 Trainings-Arena
<GamePlaceholder id="grammarRacer" />
`
  }
};
