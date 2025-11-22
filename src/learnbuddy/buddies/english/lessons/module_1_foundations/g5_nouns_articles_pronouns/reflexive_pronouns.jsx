import React from 'react';
import GrammarGame from '../../../components/grammar-games/GrammarGame';

const sentenceBuilderData = [
  {
    prompt: { en: "I hurt ___", de: "Ich habe ___ verletzt." },
    words: ["myself", "me", "I", "my"],
    correct: "myself",
    explanation: { en: "Reflexive: I hurt myself (subject and object are the same)", de: "Reflexiv: Ich habe mich verletzt (Subjekt und Objekt sind gleich)" }
  },
  {
    prompt: { en: "She cut ___", de: "Sie hat ___ geschnitten." },
    words: ["herself", "her", "she", "hers"],
    correct: "herself",
    explanation: { en: "Reflexive: She cut herself", de: "Reflexiv: Sie hat sich geschnitten" }
  },
  {
    prompt: { en: "We enjoyed ___", de: "Wir haben ___ amüsiert." },
    words: ["ourselves", "us", "we", "our"],
    correct: "ourselves",
    explanation: { en: "Reflexive: We enjoyed ourselves", de: "Reflexiv: Wir haben uns amüsiert" }
  }
];

const grammarSmashData = [
  {
    prompt: "I hurt ___",
    options: ["myself", "me", "I"],
    correct: "myself",
    explanation: "I + myself"
  },
  {
    prompt: "She cut ___",
    options: ["herself", "her", "she"],
    correct: "herself",
    explanation: "She + herself"
  },
  {
    prompt: "They enjoyed ___",
    options: ["themselves", "them", "they"],
    correct: "themselves",
    explanation: "They + themselves"
  }
];

export const reflexivePronouns = {
  id: 'a1_g82',
  title: {
    en: 'Reflexive Pronouns: myself, yourself, themselves',
    de: 'Reflexivpronomen: myself, yourself, themselves'
  },
  description: {
    en: "When subject and object are the same: 'I hurt myself', 'She cut herself'.",
    de: "Wenn Subjekt und Objekt gleich sind: 'Ich habe mich verletzt', 'Sie hat sich geschnitten'."
  },
  
  components: {
    sentenceBuilder: <GrammarGame type="sentenceBuilder" data={sentenceBuilderData} />,
    grammarSmash: <GrammarGame type="grammarSmash" data={grammarSmashData} />
  },

  content: {
    en: `
## Reflexive Pronouns: When Subject = Object 🔄

Reflexive pronouns are used when the **subject** and **object** of a sentence are the **same person**. Think: "I hurt **myself**" - I am doing the action to myself!

### 1. The Reflexive Pronouns List 📋

| Subject | Reflexive Pronoun |
|---------|-------------------|
| I | **myself** |
| You | **yourself** |
| He | **himself** |
| She | **herself** |
| It | **itself** |
| We | **ourselves** |
| You (plural) | **yourselves** |
| They | **themselves** |

**Pattern:** Subject + verb + **reflexive pronoun**

<GamePlaceholder id="sentenceBuilder" />

### 2. When to Use Reflexive Pronouns 🎯

Use reflexive pronouns when:
- The subject does something **to itself**
- The subject and object are **the same person**

**Examples:**
- "I hurt **myself**." (I hurt me)
- "She cut **herself**." (She cut her)
- "We enjoyed **ourselves**." (We enjoyed us)
- "They blamed **themselves**." (They blamed them)

### 3. Common Verbs with Reflexive Pronouns 🔧

**Common verbs that often use reflexive pronouns:**
- **hurt**: "I hurt myself."
- **cut**: "She cut herself."
- **enjoy**: "We enjoyed ourselves."
- **blame**: "They blamed themselves."
- **introduce**: "Let me introduce myself."
- **teach**: "I taught myself English."

<GamePlaceholder id="grammarSmash" />

### 4. Common Mistakes ❌

1. **Using object pronouns instead**
   - ❌ "I hurt me." → ✅ "I hurt **myself**."

2. **Wrong reflexive pronoun**
   - ❌ "She hurt himself." → ✅ "She hurt **herself**."

3. **Using reflexive when not needed**
   - ❌ "I saw myself in the mirror." (This is correct!)
   - But: "I saw me in the mirror." (Also correct, but less common)

**Remember:** Use reflexive pronouns when subject = object!
`,
    de: `
## Reflexivpronomen: Wenn Subjekt = Objekt 🔄

Reflexivpronomen werden verwendet, wenn das **Subjekt** und das **Objekt** eines Satzes die **gleiche Person** sind. Denk: "I hurt **myself**" - Ich tue die Handlung an mir selbst!

### 1. Die Liste der Reflexivpronomen 📋

| Subjekt | Reflexivpronomen |
|---------|-------------------|
| I | **myself** |
| You | **yourself** |
| He | **himself** |
| She | **herself** |
| It | **itself** |
| We | **ourselves** |
| You (Plural) | **yourselves** |
| They | **themselves** |

**Muster:** Subjekt + Verb + **Reflexivpronomen**

<GamePlaceholder id="sentenceBuilder" />

### 2. Wann Reflexivpronomen Verwenden 🎯

Verwende Reflexivpronomen, wenn:
- Das Subjekt etwas **an sich selbst** tut
- Das Subjekt und Objekt die **gleiche Person** sind

**Beispiele:**
- "I hurt **myself**." (Ich habe mich verletzt)
- "She cut **herself**." (Sie hat sich geschnitten)
- "We enjoyed **ourselves**." (Wir haben uns amüsiert)
- "They blamed **themselves**." (Sie haben sich beschuldigt)

### 3. Häufige Verben mit Reflexivpronomen 🔧

**Häufige Verben, die oft Reflexivpronomen verwenden:**
- **hurt**: "I hurt myself."
- **cut**: "She cut herself."
- **enjoy**: "We enjoyed ourselves."
- **blame**: "They blamed themselves."
- **introduce**: "Let me introduce myself."
- **teach**: "I taught myself English."

<GamePlaceholder id="grammarSmash" />

### 4. Häufige Fehler ❌

1. **Objektpronomen statt Reflexivpronomen verwenden**
   - ❌ "I hurt me." → ✅ "I hurt **myself**."

2. **Falsches Reflexivpronomen**
   - ❌ "She hurt himself." → ✅ "She hurt **herself**."

3. **Reflexivpronomen verwenden, wenn nicht nötig**
   - ❌ "I saw myself in the mirror." (Das ist richtig!)
   - Aber: "I saw me in the mirror." (Auch richtig, aber weniger häufig)

**Denk daran:** Verwende Reflexivpronomen, wenn Subjekt = Objekt!
`
  },
  task: {
    de: {
      title: 'Reflexivpronomen üben',
      description: 'Schreibe Sätze mit Reflexivpronomen (myself, yourself, herself, etc.).',
      checklist: [
        { text: 'Satz mit myself', checked: false },
        { text: 'Satz mit herself/himself', checked: false },
        { text: 'Satz mit ourselves/themselves', checked: false }
      ]
    },
    en: {
      title: 'Practicing Reflexive Pronouns',
      description: 'Write sentences with reflexive pronouns (myself, yourself, herself, etc.).',
      checklist: [
        { text: 'Sentence with myself', checked: false },
        { text: 'Sentence with herself/himself', checked: false },
        { text: 'Sentence with ourselves/themselves', checked: false }
      ]
    }
  },
  quiz: { de: [], en: [] }
};

