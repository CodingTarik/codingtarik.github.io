import React from 'react';
import GrammarGame from '../../../components/grammar-games/GrammarGame';

const sentenceBuilderData = [
  {
    prompt: { en: "I ___ speak English.", de: "Ich ___ Englisch sprechen." },
    words: ["can", "speak", "English", "I"],
    correct: "I can speak English",
    explanation: { en: "Can + verb (no 'to')", de: "Can + Verb (kein 'to')" }
  },
  {
    prompt: { en: "She ___ swim very well.", de: "Sie ___ sehr gut schwimmen." },
    words: ["can", "swim", "very", "well"],
    correct: "She can swim very well",
    explanation: { en: "Can never changes (no 's')", de: "Can ändert sich nie (kein 's')" }
  },
  {
    prompt: { en: "___ you help me?", de: "___ du mir helfen?" },
    words: ["Can", "you", "help", "me"],
    correct: "Can you help me",
    explanation: { en: "Question: Can + subject + verb", de: "Frage: Can + Subjekt + Verb" }
  },
  {
    prompt: { en: "I ___ not drive.", de: "Ich ___ nicht fahren." },
    words: ["can", "not", "drive", "I"],
    correct: "I can not drive",
    explanation: { en: "Negative: can not / cannot / can't", de: "Verneinung: can not / cannot / can't" }
  }
];

const verbConjugatorData = [
  {
    subject: "I",
    verb: "can",
    correct: "can",
    explanation: { en: "I can", de: "I can" }
  },
  {
    subject: "You",
    verb: "can",
    correct: "can",
    explanation: { en: "You can", de: "You can" }
  },
  {
    subject: "He",
    verb: "can",
    correct: "can",
    explanation: { en: "He can (no 's'!)", de: "He can (kein 's'!)" }
  },
  {
    subject: "She",
    verb: "can",
    correct: "can",
    explanation: { en: "She can (no 's'!)", de: "She can (kein 's'!)" }
  },
  {
    subject: "It",
    verb: "can",
    correct: "can",
    explanation: { en: "It can (no 's'!)", de: "It can (kein 's'!)" }
  },
  {
    subject: "We",
    verb: "can",
    correct: "can",
    explanation: { en: "We can", de: "We can" }
  },
  {
    subject: "They",
    verb: "can",
    correct: "can",
    explanation: { en: "They can", de: "They can" }
  }
];

const fixTheMistakeData = [
  {
    sentence: "I can to swim.",
    mistakeIndex: 1,
    correction: "swim",
    explanation: { en: "No 'to' after can! Can + verb directly.", de: "Kein 'to' nach can! Can + Verb direkt." }
  },
  {
    sentence: "She cans speak French.",
    mistakeIndex: 1,
    correction: "can",
    explanation: { en: "Can never changes! No 's' for he/she/it.", de: "Can ändert sich nie! Kein 's' bei he/she/it." }
  },
  {
    sentence: "Can I helps you?",
    mistakeIndex: 2,
    correction: "help",
    explanation: { en: "After can, use base verb (no 's', no 'to').", de: "Nach can, Grundform des Verbs (kein 's', kein 'to')." }
  }
];

const grammarSmashData = [
  {
    prompt: "I ___ play the piano.",
    options: ["can", "can to", "cans"],
    correct: "can",
    explanation: "Ability: I can play"
  },
  {
    prompt: "___ you speak Spanish?",
    options: ["Can", "Do", "Are"],
    correct: "Can",
    explanation: "Question about ability"
  },
  {
    prompt: "She ___ not come today.",
    options: ["can", "cans", "is can"],
    correct: "can",
    explanation: "Negative: can not / can't"
  },
  {
    prompt: "We ___ see the mountains from here.",
    options: ["can", "are can", "can to"],
    correct: "can",
    explanation: "Possibility / Ability"
  }
];

export const canCouldAbleTo = {
  id: 'a1_g26',
  title: {
    en: 'Can, Could and (be) able to',
    de: 'Can, Could und (be) able to (Können)'
  },
  description: {
    en: "Expressing ability: 'I can swim' vs 'I am able to swim'.",
    de: "Fähigkeiten ausdrücken: 'I can swim' vs 'I am able to swim'."
  },
  
  components: {
    sentenceBuilder: <GrammarGame type="sentenceBuilder" data={sentenceBuilderData} />,
    verbConjugator: <GrammarGame type="verbConjugator" data={verbConjugatorData} />,
    fixTheMistake: <GrammarGame type="fixTheMistake" data={fixTheMistakeData} />,
    grammarSmash: <GrammarGame type="grammarSmash" data={grammarSmashData} />
  },

  content: {
    en: `
## Can: The Power Word 💪

**Can** is one of the most useful words in English! We use it to talk about **ability** (what you are able to do), **possibility** (what is possible), and **permission** (what you're allowed to do).

Think about it: When you want to say "I know how to swim" or "I am able to speak English," you use **can**. It's that simple!

### 1. What is "Can"? 🤔

**Can** is a **modal verb**. This means:
- It never changes! No 's' for he/she/it (unlike normal verbs)
- It's followed by the **base form** of the verb (no 'to')
- It helps other verbs express ability, possibility, or permission

**Examples:**
- "I **can** swim." (I have the ability)
- "She **can** speak three languages." (She has the ability)
- "**Can** I go to the bathroom?" (Asking for permission)

### 2. Forms of Can 📝

| Form | Example | Short Form |
|------|---------|------------|
| Positive | I can swim | I can swim |
| Negative | I cannot swim | I **can't** swim |
| Question | Can you swim? | Can you swim? |

**Important Rules:**
- ✅ **Can** + verb (no 'to'): "I can **swim**" (not "I can to swim")
- ✅ **Can** never changes: "He can" (not "He cans")
- ✅ Negative: **can not** / **cannot** / **can't** (all correct!)

<GamePlaceholder id="verbConjugator" />

### 3. When Do We Use "Can"? 🎯

#### A) Ability (What You Can Do) 💪

This is the most common use. You're saying what you are able to do.

- "I **can** speak English." (I have this skill)
- "She **can** drive a car." (She knows how)
- "They **can** play football." (They have the ability)

#### B) Possibility (What Is Possible) 🌟

When something is possible or available.

- "You **can** buy bread at the supermarket." (It's possible)
- "We **can** see the ocean from here." (It's possible to see it)
- "It **can** rain tomorrow." (It's possible)

#### C) Permission (Asking/Allowing) 🚪

When asking for or giving permission.

- "**Can** I use your phone?" (May I?)
- "Yes, you **can**." (Permission granted)
- "**Can** we leave early?" (Asking)

<GamePlaceholder id="sentenceBuilder" />

### 4. Can vs. Could: The Past Connection ⏰

**Could** is the past form of **can**, but it's also used for:
- **Polite requests**: "**Could** you help me?" (more polite than "Can you help me?")
- **Past ability**: "When I was young, I **could** run fast." (past)
- **Possibility**: "It **could** rain." (less certain than "can")

**For A1 level, focus on "can" for ability!** We'll learn "could" in more detail later.

### 5. Can vs. (be) able to 🔄

Both mean the same thing, but **can** is much more common in everyday English.

- "I **can** swim." ✅ (Natural, common)
- "I **am able to** swim." ✅ (Correct, but more formal)

**Use "can" in most situations!** "Able to" is used when:
- You need a different tense: "I **will be able to** come tomorrow." (future)
- You want to be more formal: "I **am able to** assist you." (formal)

<GamePlaceholder id="fixTheMistake" />

### 6. Common Mistakes to Avoid ❌

1. **Don't add 'to'**: ❌ "I can to swim" → ✅ "I can swim"
2. **Don't add 's'**: ❌ "She cans swim" → ✅ "She can swim"
3. **Don't use 'do' in questions**: ❌ "Do you can swim?" → ✅ "Can you swim?"

<GamePlaceholder id="grammarSmash" />

### 7. Practice Makes Perfect! 🎓

Try to use "can" in your daily English practice:
- Talk about your abilities: "I can..."
- Ask questions: "Can you...?"
- Describe possibilities: "We can..."

Remember: **Can** is your friend for expressing what you're able to do! It's simple, powerful, and used everywhere in English.
`,
    de: `
## Can: Das Machtwort 💪

**Can** ist eines der nützlichsten Wörter im Englischen! Wir benutzen es, um über **Fähigkeiten** (was du kannst), **Möglichkeiten** (was möglich ist) und **Erlaubnis** (was erlaubt ist) zu sprechen.

Denk daran: Wenn du sagen willst "Ich kann schwimmen" oder "Ich bin in der Lage, Englisch zu sprechen," benutzt du **can**. So einfach ist das!

### 1. Was ist "Can"? 🤔

**Can** ist ein **Modalverb**. Das bedeutet:
- Es ändert sich nie! Kein 's' bei he/she/it (anders als normale Verben)
- Es wird von der **Grundform** des Verbs gefolgt (kein 'to')
- Es hilft anderen Verben, Fähigkeit, Möglichkeit oder Erlaubnis auszudrücken

**Beispiele:**
- "I **can** swim." (Ich habe die Fähigkeit)
- "She **can** speak three languages." (Sie hat die Fähigkeit)
- "**Can** I go to the bathroom?" (Um Erlaubnis fragen)

### 2. Formen von Can 📝

| Form | Beispiel | Kurzform |
|------|----------|----------|
| Positiv | I can swim | I can swim |
| Negativ | I cannot swim | I **can't** swim |
| Frage | Can you swim? | Can you swim? |

**Wichtige Regeln:**
- ✅ **Can** + Verb (kein 'to'): "I can **swim**" (nicht "I can to swim")
- ✅ **Can** ändert sich nie: "He can" (nicht "He cans")
- ✅ Verneinung: **can not** / **cannot** / **can't** (alle richtig!)

<GamePlaceholder id="verbConjugator" />

### 3. Wann benutzen wir "Can"? 🎯

#### A) Fähigkeit (Was du kannst) 💪

Das ist die häufigste Verwendung. Du sagst, was du kannst.

- "I **can** speak English." (Ich habe diese Fähigkeit)
- "She **can** drive a car." (Sie weiß, wie)
- "They **can** play football." (Sie haben die Fähigkeit)

#### B) Möglichkeit (Was möglich ist) 🌟

Wenn etwas möglich oder verfügbar ist.

- "You **can** buy bread at the supermarket." (Es ist möglich)
- "We **can** see the ocean from here." (Es ist möglich, es zu sehen)
- "It **can** rain tomorrow." (Es ist möglich)

#### C) Erlaubnis (Fragen/Erlauben) 🚪

Wenn du um Erlaubnis fragst oder sie gibst.

- "**Can** I use your phone?" (Darf ich?)
- "Yes, you **can**." (Erlaubnis erteilt)
- "**Can** we leave early?" (Fragen)

<GamePlaceholder id="sentenceBuilder" />

### 4. Can vs. Could: Die Vergangenheits-Verbindung ⏰

**Could** ist die Vergangenheitsform von **can**, aber es wird auch verwendet für:
- **Höfliche Bitten**: "**Could** you help me?" (höflicher als "Can you help me?")
- **Vergangene Fähigkeit**: "When I was young, I **could** run fast." (Vergangenheit)
- **Möglichkeit**: "It **could** rain." (weniger sicher als "can")

**Für A1-Niveau, konzentriere dich auf "can" für Fähigkeiten!** Wir lernen "could" später genauer.

### 5. Can vs. (be) able to 🔄

Beide bedeuten dasselbe, aber **can** ist im Alltagsenglisch viel häufiger.

- "I **can** swim." ✅ (Natürlich, häufig)
- "I **am able to** swim." ✅ (Richtig, aber formeller)

**Benutze "can" in den meisten Situationen!** "Able to" wird verwendet, wenn:
- Du eine andere Zeitform brauchst: "I **will be able to** come tomorrow." (Zukunft)
- Du formeller sein willst: "I **am able to** assist you." (formell)

<GamePlaceholder id="fixTheMistake" />

### 6. Häufige Fehler, die du vermeiden solltest ❌

1. **Kein 'to' hinzufügen**: ❌ "I can to swim" → ✅ "I can swim"
2. **Kein 's' hinzufügen**: ❌ "She cans swim" → ✅ "She can swim"
3. **Kein 'do' in Fragen**: ❌ "Do you can swim?" → ✅ "Can you swim?"

<GamePlaceholder id="grammarSmash" />

### 7. Übung macht den Meister! 🎓

Versuche, "can" in deiner täglichen Englischpraxis zu verwenden:
- Sprich über deine Fähigkeiten: "I can..."
- Stelle Fragen: "Can you...?"
- Beschreibe Möglichkeiten: "We can..."

Denk daran: **Can** ist dein Freund, um auszudrücken, was du kannst! Es ist einfach, mächtig und wird überall im Englischen verwendet.
`
  },
  task: {
    de: {
      title: 'Fähigkeiten beschreiben',
      description: 'Beschreibe drei Dinge, die du kannst (z.B. Sprachen, Sport, Musik).',
      checklist: [
        { text: 'Satz 1: I can...', checked: false },
        { text: 'Satz 2: I can...', checked: false },
        { text: 'Satz 3: I can...', checked: false }
      ]
    },
    en: {
      title: 'Describing Abilities',
      description: 'Describe three things you can do (e.g., languages, sports, music).',
      checklist: [
        { text: 'Sentence 1: I can...', checked: false },
        { text: 'Sentence 2: I can...', checked: false },
        { text: 'Sentence 3: I can...', checked: false }
      ]
    }
  },
  quiz: { de: [], en: [] }
};

