import React from 'react';
import GrammarGame from '../../../components/grammar-games/GrammarGame';

const sentenceBuilderData = [
  {
    prompt: { en: "Do you like pizza? Yes, ___", de: "Magst du Pizza? Ja, ___" },
    words: ["I", "do", "Yes", "like"],
    correct: "Yes I do",
    explanation: { en: "Short answer: Yes, I do (not 'Yes, I like')", de: "Kurzantwort: Yes, I do (nicht 'Yes, I like')" }
  },
  {
    prompt: { en: "Are you tired? No, ___", de: "Bist du müde? Nein, ___" },
    words: ["I", "am", "not", "No"],
    correct: "No I am not",
    explanation: { en: "Short answer with 'be': No, I\'m not", de: "Kurzantwort mit 'be': No, I\'m not" }
  },
  {
    prompt: { en: "Can you swim? Yes, ___", de: "Kannst du schwimmen? Ja, ___" },
    words: ["I", "can", "Yes", "swim"],
    correct: "Yes I can",
    explanation: { en: "Short answer with modal: Yes, I can", de: "Kurzantwort mit Modalverb: Yes, I can" }
  }
];

const fixTheMistakeData = [
  {
    sentence: "Do you speak English? Yes, I speak.",
    mistakeIndex: 3,
    correction: "do",
    explanation: { en: "Short answers use auxiliary verb, not main verb: Yes, I do (not 'I speak')", de: "Kurzantworten verwenden Hilfsverb, nicht Hauptverb: Yes, I do (nicht 'I speak')" }
  },
  {
    sentence: "Are you happy? Yes, I am happy.",
    mistakeIndex: 3,
    correction: "am",
    explanation: { en: "Short answer: Yes, I am (not 'I am happy')", de: "Kurzantwort: Yes, I am (nicht 'I am happy')" }
  },
  {
    sentence: "Does she like coffee? No, she doesn't like.",
    mistakeIndex: 3,
    correction: "doesn't",
    explanation: { en: "Short answer: No, she doesn't (not 'doesn't like')", de: "Kurzantwort: No, she doesn't (nicht 'doesn't like')" }
  }
];

const translateThisData = [
  {
    prompt: { en: "Do you like pizza?", de: "Magst du Pizza?" },
    correct: "Yes, I do",
    explanation: { en: "Short answer with 'do'", de: "Kurzantwort mit 'do'" }
  },
  {
    prompt: { en: "Are you ready?", de: "Bist du bereit?" },
    correct: "No, I\'m not",
    explanation: { en: "Short answer with 'be'", de: "Kurzantwort mit 'be'" }
  },
  {
    prompt: { en: "Can you help?", de: "Kannst du helfen?" },
    correct: "Yes, I can",
    explanation: { en: "Short answer with modal verb", de: "Kurzantwort mit Modalverb" }
  },
  {
    prompt: { en: "Does he work here?", de: "Arbeitet er hier?" },
    correct: "No, he doesn't",
    explanation: { en: "Short answer: he doesn't", de: "Kurzantwort: he doesn't" }
  }
];

export const shortAnswers = {
  id: 'a1_short_answers',
  title: {
    en: 'Short Answers: Yes, I do / No, I don\'t',
    de: 'Kurzantworten: Yes, I do / No, I don\'t'
  },
  description: {
    en: "Giving short answers: 'Yes, I do' instead of 'Yes, I like pizza'.",
    de: "Kurzantworten geben: 'Yes, I do' statt 'Yes, I like pizza'."
  },
  
  components: {
    sentenceBuilder: <GrammarGame type="sentenceBuilder" data={sentenceBuilderData} />,
    fixTheMistake: <GrammarGame type="fixTheMistake" data={fixTheMistakeData} />,
    translateThis: <GrammarGame type="translateThis" data={translateThisData} />
  },

  content: {
    en: `
## Short Answers: Quick and Natural! ⚡

In English, we don\'t always need to repeat the whole question in our answer. We use **short answers** instead! They're faster, more natural, and very common in everyday conversation.

Think about it: When someone asks "Do you like pizza?", you don\'t need to say "Yes, I like pizza." You can just say "Yes, I do." That's a short answer!

### 1. What are Short Answers? 🤔

Short answers are quick responses that use:
- **Yes** or **No**
- The **subject** (I, you, he, she, etc.)
- The **auxiliary verb** (do, does, am, is, are, can, will, etc.)

**Important:** Short answers use the **auxiliary verb** from the question, NOT the main verb!

**Examples:**
- Question: "Do you like pizza?"
  - ✅ Short answer: "Yes, I **do**." (Not "Yes, I like.")
  - ✅ Full answer: "Yes, I like pizza." (Also correct, but longer)

### 2. Short Answers with "Do/Does" 📝

When the question uses "do" or "does", the short answer uses "do" or "does" too.

**Structure:** Yes/No + Subject + do/does (or don\'t/doesn't)

**Examples:**
- "Do you speak English?" → "Yes, I **do**." / "No, I **don\'t**."
- "Does she like coffee?" → "Yes, she **does**." / "No, she **doesn't**."
- "Do they play football?" → "Yes, they **do**." / "No, they **don\'t**."

**Important:** 
- Use **do** with I, you, we, they
- Use **does** with he, she, it
- Negative: **don\'t** (do not) or **doesn't** (does not)

<GamePlaceholder id="sentenceBuilder" />

### 3. Short Answers with "Be" (am, is, are) 📝

When the question uses "be", the short answer uses "be" too.

**Structure:** Yes/No + Subject + am/is/are (or am not/isn\'t/aren\'t)

**Examples:**
- "Are you tired?" → "Yes, I **am**." / "No, I\'m **not**."
- "Is he happy?" → "Yes, he **is**." / "No, he **isn\'t**."
- "Are they here?" → "Yes, they **are**." / "No, they **aren\'t**."

**Important:**
- I → **am** / **am not** (or **I\'m not**)
- He/She/It → **is** / **isn\'t** (or **is not**)
- You/We/They → **are** / **aren\'t** (or **are not**)

### 4. Short Answers with Modal Verbs (can, will, etc.) 📝

When the question uses a modal verb, the short answer uses the same modal verb.

**Structure:** Yes/No + Subject + modal verb (or modal + not)

**Examples:**
- "Can you swim?" → "Yes, I **can**." / "No, I **can\'t**."
- "Will you come?" → "Yes, I **will**." / "No, I **won\'t**."
- "Should we go?" → "Yes, we **should**." / "No, we **shouldn\'t**."

**Important:** Modal verbs don\'t change! "Can" stays "can" for all subjects.

<GamePlaceholder id="fixTheMistake" />

### 5. Common Patterns 📋

#### Pattern 1: Yes/No Questions with "Do"
- "Do you like...?" → "Yes, I **do**." / "No, I **don\'t**."
- "Does he work...?" → "Yes, he **does**." / "No, he **doesn't**."

#### Pattern 2: Yes/No Questions with "Be"
- "Are you...?" → "Yes, I **am**." / "No, I\'m **not**."
- "Is she...?" → "Yes, she **is**." / "No, she **isn\'t**."

#### Pattern 3: Yes/No Questions with Modal Verbs
- "Can you...?" → "Yes, I **can**." / "No, I **can\'t**."
- "Will they...?" → "Yes, they **will**." / "No, they **won\'t**."

### 6. Full Answers vs. Short Answers 🔄

Both are correct, but short answers are more common in conversation!

**Full Answer:**
- "Do you like pizza?" → "Yes, I **like pizza**." (Complete sentence)

**Short Answer:**
- "Do you like pizza?" → "Yes, I **do**." (Shorter, more natural)

**When to use which?**
- **Short answers:** In quick conversations, when the information is already clear
- **Full answers:** When you want to be more specific or add information

<GamePlaceholder id="translateThis" />

### 7. Common Mistakes ❌

1. **Using the main verb instead of auxiliary**
   - ❌ "Do you like pizza?" → "Yes, I **like**." 
   - ✅ "Do you like pizza?" → "Yes, I **do**."

2. **Forgetting the subject**
   - ❌ "Do you like pizza?" → "Yes, **do**."
   - ✅ "Do you like pizza?" → "Yes, **I do**."

3. **Using wrong auxiliary**
   - ❌ "Are you tired?" → "Yes, I **do**."
   - ✅ "Are you tired?" → "Yes, I **am**."

4. **Wrong form in negative**
   - ❌ "Do you like pizza?" → "No, I **do not like**."
   - ✅ "Do you like pizza?" → "No, I **don\'t**."

### 8. Practice Makes Perfect! 🎓

Try answering these questions with short answers:

- "Do you speak English?" → "Yes, I **do**." / "No, I **don\'t**."
- "Are you a student?" → "Yes, I **am**." / "No, I\'m **not**."
- "Can you swim?" → "Yes, I **can**." / "No, I **can\'t**."
- "Does she like coffee?" → "Yes, she **does**." / "No, she **doesn't**."

**Remember:** Short answers are quick, natural, and very common in English! Master them, and your conversations will sound more fluent!
`,
    de: `
## Kurzantworten: Schnell und Natürlich! ⚡

Im Englischen müssen wir nicht immer die ganze Frage in unserer Antwort wiederholen. Wir verwenden stattdessen **Kurzantworten**! Sie sind schneller, natürlicher und sehr häufig in alltäglichen Gesprächen.

Denk daran: Wenn jemand fragt "Do you like pizza?", musst du nicht sagen "Yes, I like pizza." Du kannst einfach sagen "Yes, I do." Das ist eine Kurzantwort!

### 1. Was sind Kurzantworten? 🤔

Kurzantworten sind schnelle Antworten, die verwenden:
- **Yes** oder **No**
- Das **Subjekt** (I, you, he, she, etc.)
- Das **Hilfsverb** (do, does, am, is, are, can, will, etc.)

**Wichtig:** Kurzantworten verwenden das **Hilfsverb** aus der Frage, NICHT das Hauptverb!

**Beispiele:**
- Frage: "Do you like pizza?"
  - ✅ Kurzantwort: "Yes, I **do**." (Nicht "Yes, I like.")
  - ✅ Vollständige Antwort: "Yes, I like pizza." (Auch richtig, aber länger)

### 2. Kurzantworten mit "Do/Does" 📝

Wenn die Frage "do" oder "does" verwendet, verwendet die Kurzantwort auch "do" oder "does".

**Struktur:** Yes/No + Subjekt + do/does (oder don\'t/doesn't)

**Beispiele:**
- "Do you speak English?" → "Yes, I **do**." / "No, I **don\'t**."
- "Does she like coffee?" → "Yes, she **does**." / "No, she **doesn't**."
- "Do they play football?" → "Yes, they **do**." / "No, they **don\'t**."

**Wichtig:**
- Verwende **do** mit I, you, we, they
- Verwende **does** mit he, she, it
- Verneinung: **don\'t** (do not) oder **doesn't** (does not)

<GamePlaceholder id="sentenceBuilder" />

### 3. Kurzantworten mit "Be" (am, is, are) 📝

Wenn die Frage "be" verwendet, verwendet die Kurzantwort auch "be".

**Struktur:** Yes/No + Subjekt + am/is/are (oder am not/isn\'t/aren\'t)

**Beispiele:**
- "Are you tired?" → "Yes, I **am**." / "No, I\'m **not**."
- "Is he happy?" → "Yes, he **is**." / "No, he **isn\'t**."
- "Are they here?" → "Yes, they **are**." / "No, they **aren\'t**."

**Wichtig:**
- I → **am** / **am not** (oder **I\'m not**)
- He/She/It → **is** / **isn\'t** (oder **is not**)
- You/We/They → **are** / **aren\'t** (oder **are not**)

### 4. Kurzantworten mit Modalverben (can, will, etc.) 📝

Wenn die Frage ein Modalverb verwendet, verwendet die Kurzantwort dasselbe Modalverb.

**Struktur:** Yes/No + Subjekt + Modalverb (oder Modalverb + not)

**Beispiele:**
- "Can you swim?" → "Yes, I **can**." / "No, I **can\'t**."
- "Will you come?" → "Yes, I **will**." / "No, I **won\'t**."
- "Should we go?" → "Yes, we **should**." / "No, we **shouldn\'t**."

**Wichtig:** Modalverben ändern sich nicht! "Can" bleibt "can" für alle Subjekte.

<GamePlaceholder id="fixTheMistake" />

### 5. Häufige Muster 📋

#### Muster 1: Ja/Nein-Fragen mit "Do"
- "Do you like...?" → "Yes, I **do**." / "No, I **don\'t**."
- "Does he work...?" → "Yes, he **does**." / "No, he **doesn't**."

#### Muster 2: Ja/Nein-Fragen mit "Be"
- "Are you...?" → "Yes, I **am**." / "No, I\'m **not**."
- "Is she...?" → "Yes, she **is**." / "No, she **isn\'t**."

#### Muster 3: Ja/Nein-Fragen mit Modalverben
- "Can you...?" → "Yes, I **can**." / "No, I **can\'t**."
- "Will they...?" → "Yes, they **will**." / "No, they **won\'t**."

### 6. Vollständige Antworten vs. Kurzantworten 🔄

Beide sind richtig, aber Kurzantworten sind in Gesprächen häufiger!

**Vollständige Antwort:**
- "Do you like pizza?" → "Yes, I **like pizza**." (Vollständiger Satz)

**Kurzantwort:**
- "Do you like pizza?" → "Yes, I **do**." (Kürzer, natürlicher)

**Wann welche verwenden?**
- **Kurzantworten:** In schnellen Gesprächen, wenn die Information bereits klar ist
- **Vollständige Antworten:** Wenn du spezifischer sein oder Informationen hinzufügen willst

<GamePlaceholder id="translateThis" />

### 7. Häufige Fehler ❌

1. **Hauptverb statt Hilfsverb verwenden**
   - ❌ "Do you like pizza?" → "Yes, I **like**."
   - ✅ "Do you like pizza?" → "Yes, I **do**."

2. **Subjekt vergessen**
   - ❌ "Do you like pizza?" → "Yes, **do**."
   - ✅ "Do you like pizza?" → "Yes, **I do**."

3. **Falsches Hilfsverb verwenden**
   - ❌ "Are you tired?" → "Yes, I **do**."
   - ✅ "Are you tired?" → "Yes, I **am**."

4. **Falsche Form in der Verneinung**
   - ❌ "Do you like pizza?" → "No, I **do not like**."
   - ✅ "Do you like pizza?" → "No, I **don\'t**."

### 8. Übung macht den Meister! 🎓

Versuche, diese Fragen mit Kurzantworten zu beantworten:

- "Do you speak English?" → "Yes, I **do**." / "No, I **don\'t**."
- "Are you a student?" → "Yes, I **am**." / "No, I\'m **not**."
- "Can you swim?" → "Yes, I **can**." / "No, I **can\'t**."
- "Does she like coffee?" → "Yes, she **does**." / "No, she **doesn't**."

**Denk daran:** Kurzantworten sind schnell, natürlich und sehr häufig im Englischen! Meistere sie, und deine Gespräche werden flüssiger klingen!
`
  },
  task: {
    de: {
      title: 'Kurzantworten üben',
      description: 'Beantworte fünf Fragen mit Kurzantworten (Yes/No + Subjekt + Hilfsverb).',
      checklist: [
        { text: 'Frage mit "do": Yes/No + I do/don\'t', checked: false },
        { text: 'Frage mit "are": Yes/No + I am/am not', checked: false },
        { text: 'Frage mit "can": Yes/No + I can/can\'t', checked: false },
        { text: 'Frage mit "does": Yes/No + he/she does/doesn\'t', checked: false },
        { text: 'Frage mit "is": Yes/No + he/she is/isn\'t', checked: false }
      ]
    },
    en: {
      title: 'Practicing Short Answers',
      description: 'Answer five questions with short answers (Yes/No + Subject + Auxiliary verb).',
      checklist: [
        { text: 'Question with "do": Yes/No + I do/don\'t', checked: false },
        { text: 'Question with "are": Yes/No + I am/am not', checked: false },
        { text: 'Question with "can": Yes/No + I can/can\'t', checked: false },
        { text: 'Question with "does": Yes/No + he/she does/doesn\'t', checked: false },
        { text: 'Question with "is": Yes/No + he/she is/isn\'t', checked: false }
      ]
    }
  },
  quiz: { de: [], en: [] }
};

