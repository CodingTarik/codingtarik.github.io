import React from 'react';
import GrammarGame from '../../../components/grammar-games/GrammarGame';

const sentenceBuilderData = [
  {
    prompt: { en: "I have ___ apples.", de: "Ich habe ___ Äpfel." },
    words: ["some", "any", "a", "an"],
    correct: "some",
    explanation: { en: "Positive: use 'some' (I have some apples)", de: "Positiv: verwende 'some' (Ich habe einige Äpfel)" }
  },
  {
    prompt: { en: "I don\'t have ___ apples.", de: "Ich habe keine ___ Äpfel." },
    words: ["any", "some", "a", "an"],
    correct: "any",
    explanation: { en: "Negative: use 'any' (I don\'t have any apples)", de: "Negativ: verwende 'any' (Ich habe keine Äpfel)" }
  },
  {
    prompt: { en: "Do you have ___ milk?", de: "Hast du ___ Milch?" },
    words: ["any", "some", "a", "an"],
    correct: "any",
    explanation: { en: "Question: usually use 'any' (Do you have any milk?)", de: "Frage: normalerweise 'any' verwenden (Hast du Milch?)" }
  }
];

const grammarSmashData = [
  {
    prompt: "I have ___ books.",
    options: ["some", "any", "a"],
    correct: "some",
    explanation: "Positive: some"
  },
  {
    prompt: "I don\'t have ___ money.",
    options: ["any", "some", "a"],
    correct: "any",
    explanation: "Negative: any"
  },
  {
    prompt: "Do you have ___ water?",
    options: ["any", "some", "a"],
    correct: "any",
    explanation: "Question: any"
  }
];

export const someAny = {
  id: 'a1_g85',
  title: {
    en: 'Some and Any',
    de: 'Some und Any'
  },
  description: {
    en: "Using 'some' in positive sentences and 'any' in negative sentences and questions.",
    de: "'Some' in positiven Sätzen und 'any' in negativen Sätzen und Fragen verwenden."
  },
  
  components: {
    sentenceBuilder: <GrammarGame type="sentenceBuilder" data={sentenceBuilderData} />,
    grammarSmash: <GrammarGame type="grammarSmash" data={grammarSmashData} />
  },

  content: {
    en: `
## Some vs. Any: The Rule 📋

**Some** and **any** both mean "a few" or "several", but they\'re used in different situations!

### 1. "Some" = Positive Sentences ✅

Use **some** in **positive** (affirmative) sentences.

**Examples:**
- "I have **some** books." (Positive)
- "She wants **some** water." (Positive)
- "We need **some** help." (Positive)

**Pattern:** some + noun (countable plural or uncountable)

<GamePlaceholder id="sentenceBuilder" />

### 2. "Any" = Negative Sentences and Questions ❓

Use **any** in:
- **Negative** sentences (with not)
- **Questions** (usually)

**Examples:**
- "I don\'t have **any** books." (Negative)
- "She doesn't want **any** water." (Negative)
- "Do you have **any** money?" (Question)
- "Is there **any** milk?" (Question)

**Pattern:** any + noun (countable plural or uncountable)

### 3. Special Case: "Some" in Questions 🎁

Sometimes we use **some** in questions when we **offer** something or expect a **positive** answer:

**Examples:**
- "Would you like **some** coffee?" (Offering - expecting yes)
- "Can I have **some** water?" (Request - expecting yes)

**Note:** This is less common than "any" in questions.

<GamePlaceholder id="grammarSmash" />

### 4. Common Mistakes ❌

1. **Using "any" in positive sentences**
   - ❌ "I have any books." → ✅ "I have **some** books."

2. **Using "some" in negative sentences**
   - ❌ "I don\'t have some books." → ✅ "I don\'t have **any** books."

3. **Wrong choice in questions**
   - Usually: "Do you have **any**...?" ✅
   - Offering: "Would you like **some**...?" ✅

**Remember:** Some = positive, Any = negative/questions!
`,
    de: `
## Some vs. Any: Die Regel 📋

**Some** und **any** bedeuten beide "einige" oder "mehrere", aber sie werden in verschiedenen Situationen verwendet!

### 1. "Some" = Positive Sätze ✅

Verwende **some** in **positiven** (bejahenden) Sätzen.

**Beispiele:**
- "I have **some** books." (Positiv)
- "She wants **some** water." (Positiv)
- "We need **some** help." (Positiv)

**Muster:** some + Nomen (zählbar Plural oder unzählbar)

<GamePlaceholder id="sentenceBuilder" />

### 2. "Any" = Negative Sätze und Fragen ❓

Verwende **any** in:
- **Negativen** Sätzen (mit not)
- **Fragen** (normalerweise)

**Beispiele:**
- "I don\'t have **any** books." (Negativ)
- "She doesn't want **any** water." (Negativ)
- "Do you have **any** money?" (Frage)
- "Is there **any** milk?" (Frage)

**Muster:** any + Nomen (zählbar Plural oder unzählbar)

### 3. Besonderer Fall: "Some" in Fragen 🎁

Manchmal verwenden wir **some** in Fragen, wenn wir etwas **anbieten** oder eine **positive** Antwort erwarten:

**Beispiele:**
- "Would you like **some** coffee?" (Angebot - erwarten ja)
- "Can I have **some** water?" (Bitte - erwarten ja)

**Hinweis:** Das ist weniger häufig als "any" in Fragen.

<GamePlaceholder id="grammarSmash" />

### 4. Häufige Fehler ❌

1. **"any" in positiven Sätzen verwenden**
   - ❌ "I have any books." → ✅ "I have **some** books."

2. **"some" in negativen Sätzen verwenden**
   - ❌ "I don\'t have some books." → ✅ "I don\'t have **any** books."

3. **Falsche Wahl in Fragen**
   - Normalerweise: "Do you have **any**...?" ✅
   - Angebot: "Would you like **some**...?" ✅

**Denk daran:** Some = positiv, Any = negativ/Fragen!
`
  },
  task: {
    de: {
      title: 'Some und Any üben',
      description: 'Schreibe Sätze mit some (positiv) und any (negativ/Frage).',
      checklist: [
        { text: 'Positiver Satz mit some', checked: false },
        { text: 'Negativer Satz mit any', checked: false },
        { text: 'Frage mit any', checked: false }
      ]
    },
    en: {
      title: 'Practicing Some and Any',
      description: 'Write sentences with some (positive) and any (negative/question).',
      checklist: [
        { text: 'Positive sentence with some', checked: false },
        { text: 'Negative sentence with any', checked: false },
        { text: 'Question with any', checked: false }
      ]
    }
  },
  quiz: { de: [], en: [] }
};

