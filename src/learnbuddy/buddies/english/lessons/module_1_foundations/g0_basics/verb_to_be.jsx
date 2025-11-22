import React from 'react';
import GrammarGame from '../../../components/grammar-games/GrammarGame';

// --- Game Data ---

const sentenceBuilderData = [
  {
    prompt: { en: "I ___ happy today.", de: "Ich ___ heute glücklich." },
    words: ["I", "am", "happy", "today"],
    correct: "I am happy today",
    explanation: { en: "I + am", de: "I + am" }
  },
  {
    prompt: { en: "She ___ a doctor.", de: "Sie ___ Ärztin." },
    words: ["She", "is", "a", "doctor"],
    correct: "She is a doctor",
    explanation: { en: "He/She/It + is", de: "He/She/It + is" }
  },
  {
    prompt: { en: "They ___ at home.", de: "Sie ___ zuhause." },
    words: ["They", "are", "at", "home"],
    correct: "They are at home",
    explanation: { en: "We/You/They + are", de: "We/You/They + are" }
  },
  {
    prompt: { en: "It ___ cold outside.", de: "Es ___ draußen kalt." },
    words: ["It", "is", "cold", "outside"],
    correct: "It is cold outside",
    explanation: { en: "It + is", de: "It + is" }
  }
];

const verbConjugatorData = [
  {
    subject: "I",
    verb: "be",
    correct: "am",
    explanation: { en: "I am", de: "I am" }
  },
  {
    subject: "You",
    verb: "be",
    correct: "are",
    explanation: { en: "You are", de: "You are" }
  },
  {
    subject: "He",
    verb: "be",
    correct: "is",
    explanation: { en: "He is", de: "He is" }
  },
  {
    subject: "She",
    verb: "be",
    correct: "is",
    explanation: { en: "She is", de: "She is" }
  },
  {
    subject: "It",
    verb: "be",
    correct: "is",
    explanation: { en: "It is", de: "It is" }
  },
  {
    subject: "We",
    verb: "be",
    correct: "are",
    explanation: { en: "We are", de: "We are" }
  },
  {
    subject: "They",
    verb: "be",
    correct: "are",
    explanation: { en: "They are", de: "They are" }
  }
];

const fixTheMistakeData = [
  {
    sentence: "I is happy.",
    mistakeIndex: 1,
    correction: "am",
    explanation: { en: "I am, not I is.", de: "I am, nicht I is." }
  },
  {
    sentence: "You is my friend.",
    mistakeIndex: 1,
    correction: "are",
    explanation: { en: "You are, not You is.", de: "You are, nicht You is." }
  },
  {
    sentence: "He are nice.",
    mistakeIndex: 1,
    correction: "is",
    explanation: { en: "He is, not He are.", de: "He is, nicht He are." }
  },
  {
    sentence: "They am here.",
    mistakeIndex: 1,
    correction: "are",
    explanation: { en: "They are, not They am.", de: "They are, nicht They am." }
  }
];

const translateThisData = [
  {
    german: "Ich bin müde.",
    correct: "I am tired",
    explanation: { en: "I + am", de: "I + am" }
  },
  {
    german: "Du bist groß.",
    correct: "You are tall",
    explanation: { en: "You + are", de: "You + are" }
  },
  {
    german: "Er ist mein Bruder.",
    correct: "He is my brother",
    explanation: { en: "He + is", de: "He + is" }
  },
  {
    german: "Wir sind glücklich.",
    correct: "We are happy",
    explanation: { en: "We + are", de: "We + are" }
  }
];

const grammarRacerData = [
  {
    prompt: "I ___ a student.",
    options: ["is", "am", "are"],
    correct: "am",
    explanation: "I am"
  },
  {
    prompt: "She ___ hungry.",
    options: ["are", "am", "is"],
    correct: "is",
    explanation: "She is"
  },
  {
    prompt: "They ___ from Spain.",
    options: ["is", "are", "am"],
    correct: "are",
    explanation: "They are"
  },
  {
    prompt: "It ___ a cat.",
    options: ["is", "are", "am"],
    correct: "is",
    explanation: "It is"
  },
  {
    prompt: "We ___ ready.",
    options: ["am", "is", "are"],
    correct: "are",
    explanation: "We are"
  }
];

// --- Lesson Content ---

export const verbToBe = {
  id: 'a1_g0a',
  title: {
    en: 'The Verb "to be"',
    de: 'Das Verb "to be" (sein)'
  },
  description: {
    en: "The absolute foundation. Learn 'I am', 'You are', 'He is' thoroughly.",
    de: "Die absolute Grundlage. Lerne 'I am', 'You are', 'He is' gründlich."
  },
  
  components: {
    sentenceBuilder: <GrammarGame type="sentenceBuilder" data={sentenceBuilderData} />,
    verbConjugator: <GrammarGame type="verbConjugator" data={verbConjugatorData} />,
    fixTheMistake: <GrammarGame type="fixTheMistake" data={fixTheMistakeData} />,
    translateThis: <GrammarGame type="translateThis" data={translateThisData} />,
    grammarRacer: <GrammarGame type="grammarRacer" data={grammarRacerData} />
  },

  content: {
    en: `
## Introduction to the Verb "to be"

The verb **to be** is the most important verb in the English language. It is used to describe **who** we are, **how** we feel, and **where** we are. Unlike other verbs, it changes its form depending on the person (I, you, he, she, etc.).

Imagine you are introducing yourself at a party. You would say:
- "I **am** Tom." (Who?)
- "I **am** happy." (How?)
- "I **am** from London." (Where?)

Without this verb, we couldn't say very much! Let's look at how it works.

---

### 1. Positive Forms (+)

We use positive forms to state facts.

| Subject | Long Form | Short Form (Contraction) | Example |
|---------|-----------|--------------------------|---------|
| **I** | **am** | I'm | I'm hungry. 🍔 |
| **You** | **are** | You're | You're nice. 😊 |
| **He** | **is** | He's | He's my brother. 👦 |
| **She** | **is** | She's | She's a doctor. 👩‍⚕️ |
| **It** | **is** | It's | It's cold. ❄️ |
| **We** | **are** | We're | We're friends. 🤝 |
| **They** | **are** | They're | They're here. 📍 |

**Note:** In spoken English, we almost always use the **Short Form** because it is faster and more natural.

<GamePlaceholder id="verbConjugator" />

### 2. Negative Forms (-)

To make a sentence negative (to say something is *not* true), we simply add **not** after the verb.

| Subject | Long Form | Short Form | Example |
|---------|-----------|------------|---------|
| **I** | **am not** | I'm not | I'm not sad. |
| **You** | **are not** | You aren't | You aren't late. |
| **He/She/It** | **is not** | He isn't | He isn't home. |
| **We/They** | **are not** | We aren't | We aren't tired. |

<GamePlaceholder id="fixTheMistake" />

### 3. Questions (?)

To ask a question, we swap the subject and the verb! This is called "inversion".

- **You are** happy. → **Are you** happy?
- **He is** rich. → **Is he** rich?
- **They are** students. → **Are they** students?

This is very different from many other languages, so practice this pattern!

<GamePlaceholder id="sentenceBuilder" />

---

### 🎮 Practice Arena

**Translate into English:**
<GamePlaceholder id="translateThis" />

**🏎️ Grammar Racer: Speed Round!**
Select the correct form of "to be" as fast as you can!
<GamePlaceholder id="grammarRacer" />
`,
    de: `
## Einführung in das Verb "to be" (sein)

Das Verb **to be** (sein) ist das wichtigste Verb in der englischen Sprache. Es wird verwendet, um zu beschreiben, **wer** wir sind, **wie** wir uns fühlen und **wo** wir sind. Im Gegensatz zu anderen Verben ändert es seine Form je nach Person (ich, du, er, sie usw.) sehr stark.

Stell dir vor, du stellst dich auf einer Party vor. Du würdest sagen:
- "I **am** Tom." (Wer? -> Ich bin Tom.)
- "I **am** happy." (Wie? -> Ich bin glücklich.)
- "I **am** from London." (Woher? -> Ich bin aus London.)

Ohne dieses Verb könnten wir kaum etwas sagen! Schauen wir uns an, wie es funktioniert.

---

### 1. Positive Formen (+)

Wir verwenden positive Formen, um Fakten auszusprechen.

| Subjekt | Langform | Kurzform | Beispiel |
|---------|----------|----------|----------|
| **I** (Ich) | **am** | I'm | I'm hungry. (Ich bin hungrig.) 🍔 |
| **You** (Du) | **are** | You're | You're nice. (Du bist nett.) 😊 |
| **He** (Er) | **is** | He's | He's my brother. (Er ist mein Bruder.) 👦 |
| **She** (Sie) | **is** | She's | She's a doctor. (Sie ist Ärztin.) 👩‍⚕️ |
| **It** (Es) | **is** | It's | It's cold. (Es ist kalt.) ❄️ |
| **We** (Wir) | **are** | We're | We're friends. (Wir sind Freunde.) 🤝 |
| **They** (Sie/Pl.) | **are** | They're | They're here. (Sie sind hier.) 📍 |

**Hinweis:** Im gesprochenen Englisch verwenden wir fast immer die **Kurzform**, weil es schneller und natürlicher klingt!

<GamePlaceholder id="verbConjugator" />

### 2. Negative Formen (-)

Um einen Satz zu verneinen (zu sagen, dass etwas *nicht* wahr ist), fügen wir einfach **not** nach dem Verb hinzu.

| Subjekt | Langform | Kurzform | Beispiel |
|---------|----------|----------|----------|
| **I** | **am not** | I'm not | I'm not sad. (Ich bin nicht traurig.) |
| **You** | **are not** | You aren't | You aren't late. (Du bist nicht spät.) |
| **He/She/It** | **is not** | He isn't | He isn't home. (Er ist nicht zuhause.) |
| **We/They** | **are not** | We aren't | We aren't tired. (Wir sind nicht müde.) |

<GamePlaceholder id="fixTheMistake" />

### 3. Fragen (?)

Um eine Frage zu stellen, tauschen wir das Subjekt und das Verb! Das nennt man "Inversion".

- **You are** happy. → **Are you** happy? (Bist du glücklich?)
- **He is** rich. → **Is he** rich? (Ist er reich?)
- **They are** students. → **Are they** students? (Sind sie Studenten?)

Das ist anders als im Deutschen, wo man oft nur die Betonung ändert ("Du bist glücklich?"). Im Englischen muss die Wortstellung geändert werden!

<GamePlaceholder id="sentenceBuilder" />

---

### 🎮 Trainings-Arena

**Übersetze ins Englische:**
<GamePlaceholder id="translateThis" />

**🏎️ Grammar Racer: Schnellrunde!**
Wähle so schnell wie möglich die richtige Form von "to be"!
<GamePlaceholder id="grammarRacer" />
`
  },
  task: {
      de: {
          title: 'Wer bist du?',
          description: 'Schreibe 3 Sätze mit "to be" über dich (Name, Herkunft, Alter).',
          checklist: [
              { text: 'I am [Name].', checked: false },
              { text: 'I am from [Stadt/Land].', checked: false },
              { text: 'I am [Alter] years old.', checked: false }
          ]
      },
      en: {
          title: 'Who are you?',
          description: 'Write 3 sentences with "to be" about yourself (Name, Origin, Age).',
          checklist: [
              { text: 'I am [Name].', checked: false },
              { text: 'I am from [City/Country].', checked: false },
              { text: 'I am [Age] years old.', checked: false }
          ]
      }
  },
  quiz: {
      de: [
          { question: 'Was ist die Kurzform von "I am"?', answer: "I'm" },
          { question: 'Ergänze: She ___ my sister.', answer: 'is' },
          { question: 'Verneine: We are ready.', answer: "We aren't ready. / We are not ready." }
      ],
      en: [
          { question: 'What is the short form of "I am"?', answer: "I'm" },
          { question: 'Complete: She ___ my sister.', answer: 'is' },
          { question: 'Make negative: We are ready.', answer: "We aren't ready. / We are not ready." }
      ]
  }
};
