import React from 'react';
import GrammarGame from '../../../components/grammar-games/GrammarGame';

const sentenceBuilderData = [
  {
    prompt: { en: "She asked me where I ___.", de: "Sie fragte mich, wo ich wohne." },
    words: ["lived", "live", "did live", "do live"],
    correct: "lived",
    explanation: { en: "Reported questions use statement word order (no inversion) and backshift the tense: 'Where do you live?' → asked where I lived.", de: "Indirekte Fragen verwenden die Aussage-Wortstellung (keine Inversion) und verschieben die Zeit: 'Where do you live?' → asked where I lived." }
  },
  {
    prompt: { en: "He wanted to know ___ I was coming to the party.", de: "Er wollte wissen, ob ich zur Party komme." },
    words: ["whether", "that", "what", "which"],
    correct: "whether",
    explanation: { en: "For reported yes/no questions, use 'whether' or 'if': 'Are you coming?' → asked whether/if I was coming.", de: "Für indirekte Ja/Nein-Fragen verwende 'whether' oder 'if': 'Are you coming?' → fragte, ob ich komme." }
  },
  {
    prompt: { en: "The teacher told us ___ our books to page 42.", de: "Die Lehrerin sagte uns, wir sollten unsere Bücher auf Seite 42 aufschlagen." },
    words: ["to open", "open", "opening", "that open"],
    correct: "to open",
    explanation: { en: "Reported orders/instructions use tell + object + to-infinitive.", de: "Indirekte Befehle/Anweisungen verwenden tell + Objekt + to-Infinitiv." }
  },
  {
    prompt: { en: "She said that the Earth ___ round the Sun.", de: "Sie sagte, dass die Erde sich um die Sonne dreht." },
    words: ["revolves", "revolved", "was revolving", "had revolved"],
    correct: "revolves",
    explanation: { en: "No backshift needed for general truths and scientific facts: the Earth revolves (always true).", de: "Keine Zeitverschiebung nötig bei allgemeinen Wahrheiten und wissenschaftlichen Fakten: die Erde dreht sich (immer wahr)." }
  },
  {
    prompt: { en: "He ___ that I should apply for the scholarship.", de: "Er schlug vor, dass ich mich um das Stipendium bewerben sollte." },
    words: ["suggested", "suggested me", "suggested to me", "told"],
    correct: "suggested",
    explanation: { en: "'Suggest' + that-clause (NOT suggest me/to me): He suggested that I should apply.", de: "'Suggest' + that-Satz (NICHT suggest me/to me): He suggested that I should apply." }
  },
  {
    prompt: { en: "She asked him ___ making so much noise.", de: "Sie bat ihn, aufzuhören, so viel Lärm zu machen." },
    words: ["to stop", "stop", "stopping", "that stop"],
    correct: "to stop",
    explanation: { en: "Reported requests use ask + object + to-infinitive: asked him to stop.", de: "Indirekte Bitten verwenden ask + Objekt + to-Infinitiv: asked him to stop." }
  }
];

const fixTheMistakeData = [
  {
    sentence: "She asked me where did I work.",
    mistakeIndex: 4,
    correction: "where I worked",
    explanation: { en: "Reported questions use statement word order (no 'did' inversion): 'asked me where I worked'.", de: "Indirekte Fragen verwenden Aussage-Wortstellung (keine 'did'-Inversion): 'asked me where I worked'." }
  },
  {
    sentence: "He asked me do I like coffee.",
    mistakeIndex: 3,
    correction: "if I liked",
    explanation: { en: "Reported yes/no questions need 'if/whether' and statement order: 'asked me if I liked coffee'.", de: "Indirekte Ja/Nein-Fragen brauchen 'if/whether' und Aussage-Wortstellung: 'asked me if I liked coffee'." }
  },
  {
    sentence: "The doctor said me to take the medicine twice a day.",
    mistakeIndex: 2,
    correction: "told",
    explanation: { en: "Use 'told' (not 'said') before an object + to-infinitive: 'The doctor told me to take...'", de: "Verwende 'told' (nicht 'said') vor Objekt + to-Infinitiv: 'The doctor told me to take...'" }
  },
  {
    sentence: "She told that she was feeling sick.",
    mistakeIndex: 1,
    correction: "said",
    explanation: { en: "'Tell' always needs a personal object: 'She told ME...' OR use 'said': 'She said that she was feeling sick.'", de: "'Tell' braucht immer ein persönliches Objekt: 'She told ME...' ODER verwende 'said': 'She said that she was feeling sick.'" }
  },
  {
    sentence: "He said that he will call me the next day.",
    mistakeIndex: 4,
    correction: "would",
    explanation: { en: "Backshift 'will' to 'would' in reported speech: 'He said he would call me the next day.'", de: "Verschiebe 'will' zu 'would' in der indirekten Rede: 'He said he would call me the next day.'" }
  }
];

const grammarRacerData = [
  {
    prompt: "She asked me what time the train ___.",
    options: ["left", "does leave", "did leave"],
    correct: "left",
    explanation: "Reported questions: statement word order + backshift."
  },
  {
    prompt: "He wanted to know ___ I had finished the report.",
    options: ["whether", "that", "what"],
    correct: "whether",
    explanation: "'Whether' for reported yes/no questions."
  },
  {
    prompt: "The manager ___ me to rewrite the proposal.",
    options: ["told", "said", "said to"],
    correct: "told",
    explanation: "'Tell' + object + to-infinitive for reported instructions."
  },
  {
    prompt: "She said she ___ never been to Australia.",
    options: ["had", "has", "have"],
    correct: "had",
    explanation: "Backshift: present perfect 'has' → past perfect 'had'."
  },
  {
    prompt: "He mentioned that he ___ looking for a new job.",
    options: ["was", "is", "has been"],
    correct: "was",
    explanation: "Backshift: 'is looking' → 'was looking'."
  }
];

export const advancedReportedSpeech = {
  id: 'b2_g9',
  title: {
    en: 'Advanced Reported Speech Patterns',
    de: 'Fortgeschrittene indirekte Rede'
  },
  description: {
    en: "Master reporting questions, orders, suggestions, and learn when NOT to backshift tenses.",
    de: "Meistere das Berichten von Fragen, Befehlen, Vorschlägen und lerne, wann Zeitverschiebung NICHT nötig ist."
  },
  components: {
    sentenceBuilder: <GrammarGame type="sentenceBuilder" data={sentenceBuilderData} />,
    fixTheMistake: <GrammarGame type="fixTheMistake" data={fixTheMistakeData} />,
    grammarRacer: <GrammarGame type="grammarRacer" data={grammarRacerData} />
  },
  content: {
    en: `
## Advanced Reported Speech – Questions, Orders & Nuances 📣

You already know the basics of reported speech (tense backshifting, pronoun changes). Now let's tackle the trickier aspects: **reporting questions**, **reporting orders and suggestions**, and understanding **when NOT to backshift**.

### 1. Reporting Questions ❓

The two biggest changes when reporting questions:
1. **No inversion** – use statement word order
2. **No do/does/did** – remove the auxiliary

#### Wh-Questions:
| Direct | Reported |
|--------|----------|
| "Where **do you** live?" | She asked where I **lived**. |
| "What **are you** doing?" | He asked what I **was doing**. |
| "Why **did she** leave?" | I asked why she **had left**. |
| "How **will you** get there?" | She asked how I **would** get there. |

**Formula:** ask + wh-word + subject + verb (statement order)

#### Yes/No Questions:
| Direct | Reported |
|--------|----------|
| "**Do you** like pizza?" | She asked **if/whether** I liked pizza. |
| "**Are you** coming?" | He asked **whether** I was coming. |
| "**Can you** swim?" | She asked **if** I could swim. |
| "**Have you** ever been there?" | He asked **whether** I had ever been there. |

**Formula:** ask + **if/whether** + subject + verb (statement order)

> 💡 'Whether' is slightly more formal than 'if'. Use 'whether' when there are two options: "She asked whether I wanted tea **or** coffee."

### 2. Reporting Orders & Instructions 📢

Use **tell/order/command** + object + **to-infinitive**:

| Direct | Reported |
|--------|----------|
| "Sit down!" | The teacher told us **to sit down**. |
| "Don't touch that!" | She told me **not to touch** that. |
| "Leave the building immediately!" | The officer ordered everyone **to leave**. |
| "Stop talking!" | He commanded them **to stop** talking. |

**Negative:** tell/order + object + **not to** + verb
- "Don't be late!" → She told me **not to be** late.

### 3. Reporting Requests 🙏

Use **ask** + object + **to-infinitive**:

| Direct | Reported |
|--------|----------|
| "Could you open the window?" | She asked me **to open** the window. |
| "Would you mind waiting?" | He asked me **to wait**. |
| "Please don't make noise." | She asked us **not to make** noise. |

### 4. Reporting Suggestions & Advice 💡

| Verb | Pattern | Example |
|------|---------|---------|
| **suggest** | suggest + -ing / that | "She suggested **going** home." / "She suggested **that we go** home." |
| **recommend** | recommend + -ing / that | "He recommended **trying** the soup." |
| **advise** | advise + obj + to | "The lawyer advised **me to wait**." |
| **urge** | urge + obj + to | "They urged **him to reconsider**." |

### 5. Tense Backshifting Rules 📏

The standard backshift pattern:

| Direct Speech | Reported Speech |
|--------------|-----------------|
| Present Simple → | Past Simple |
| Present Continuous → | Past Continuous |
| Present Perfect → | Past Perfect |
| Past Simple → | Past Perfect |
| will → | would |
| can → | could |
| may → | might |
| must (obligation) → | had to |

**Time and place references also change:**

| Direct | Reported |
|--------|----------|
| today | that day |
| yesterday | the day before / the previous day |
| tomorrow | the next day / the following day |
| now | then / at that time |
| here | there |
| this | that |
| ago | before / earlier |
| last week | the week before / the previous week |
| next month | the following month |

### 6. When NOT to Backshift 🚫⏪

This is where B2 learners gain an edge. You do NOT need to backshift when:

**a) The information is still true:**
- "I'm a vegetarian." → She said she **is** a vegetarian. (still true now)
- "I work at Google." → He said he **works** at Google. (still works there)

**b) General truths and scientific facts:**
- "The sun rises in the east." → She said the sun **rises** in the east.
- "Water freezes at 0°C." → He said water **freezes** at 0°C.

**c) The reporting verb is in the present tense:**
- She **says** she is tired. (no backshift needed)
- He **tells** me he wants to leave. (present reporting verb)

**d) 'Just now' or very recent speech:**
- "I'm hungry." → He just said he **is** hungry. (moments ago)

> 💡 Backshifting is technically always "correct", but keeping the original tense is also acceptable when the situation hasn't changed. Native speakers often don't backshift if the information is still relevant.

<GamePlaceholder id="sentenceBuilder" />

### 7. Said vs Told – The Eternal Confusion 🔄

| Verb | Pattern | Example |
|------|---------|---------|
| **say** | say (+ that) – NO object | She **said** (that) she was tired. |
| **tell** | tell + object (+ that) | She **told me** (that) she was tired. |

- ❌ "She **said me** that she was tired."
- ❌ "She **told that** she was tired."
- ✅ "She **said** she was tired." / "She **told me** she was tired."

### 8. Common Mistakes ❌

**Mistake 1:** Keeping question word order in reported questions
- ❌ "She asked where **did I** work."
- ✅ "She asked where **I worked**."

**Mistake 2:** Using 'do/does/did' in reported questions
- ❌ "He asked if **do I** like coffee."
- ✅ "He asked if **I liked** coffee."

**Mistake 3:** Using 'said' with an object
- ❌ "He **said me** to wait."
- ✅ "He **told me** to wait."

**Mistake 4:** Using 'told' without an object
- ❌ "She **told** that she was leaving."
- ✅ "She **said** that she was leaving." / "She **told us** that she was leaving."

**Mistake 5:** Backshifting when it creates confusion
- ❌ "She said she **was** a doctor." (if she's still a doctor)
- ✅ "She said she **is** a doctor." (clearer – still true)

<GamePlaceholder id="fixTheMistake" />

<div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">🎯 Key Rules:</h3>
  <ul className="list-disc list-inside space-y-1">
    <li><strong>Reported questions:</strong> statement word order, no do/does/did</li>
    <li><strong>Yes/No questions:</strong> use if/whether</li>
    <li><strong>Orders:</strong> tell + object + to-infinitive</li>
    <li><strong>Requests:</strong> ask + object + to-infinitive</li>
    <li><strong>Said</strong> = no object / <strong>Told</strong> = always needs an object</li>
    <li><strong>Don't backshift</strong> for facts, truths, and still-true situations</li>
  </ul>
</div>

---

### 🎮 Practice Arena
<GamePlaceholder id="grammarRacer" />
`,
    de: `
## Fortgeschrittene indirekte Rede – Fragen, Befehle & Nuancen 📣

Du kennst bereits die Grundlagen der indirekten Rede (Zeitverschiebung, Pronomenänderungen). Jetzt behandeln wir die kniffligeren Aspekte: **Fragen berichten**, **Befehle und Vorschläge berichten**, und verstehen, **wann man NICHT zurückschieben** muss.

### 1. Fragen berichten ❓

Die zwei größten Änderungen beim Berichten von Fragen:
1. **Keine Inversion** – verwende Aussage-Wortstellung
2. **Kein do/does/did** – entferne das Hilfsverb

#### Wh-Fragen:
| Direkt | Indirekt |
|--------|----------|
| "Where **do you** live?" | She asked where I **lived**. |
| "What **are you** doing?" | He asked what I **was doing**. |
| "Why **did she** leave?" | I asked why she **had left**. |

**Formel:** ask + Fragewort + Subjekt + Verb (Aussage-Reihenfolge)

#### Ja/Nein-Fragen:
| Direkt | Indirekt |
|--------|----------|
| "**Do you** like pizza?" | She asked **if/whether** I liked pizza. |
| "**Are you** coming?" | He asked **whether** I was coming. |
| "**Can you** swim?" | She asked **if** I could swim. |

**Formel:** ask + **if/whether** + Subjekt + Verb (Aussage-Reihenfolge)

> 💡 'Whether' ist etwas formeller als 'if'. Verwende 'whether' bei zwei Optionen: "She asked whether I wanted tea **or** coffee."

### 2. Befehle & Anweisungen berichten 📢

Verwende **tell/order** + Objekt + **to-Infinitiv**:

| Direkt | Indirekt |
|--------|----------|
| "Sit down!" | The teacher told us **to sit down**. |
| "Don't touch that!" | She told me **not to touch** that. |
| "Leave immediately!" | The officer ordered everyone **to leave**. |

**Negativ:** tell/order + Objekt + **not to** + Verb

### 3. Bitten berichten 🙏

Verwende **ask** + Objekt + **to-Infinitiv**:

| Direkt | Indirekt |
|--------|----------|
| "Could you open the window?" | She asked me **to open** the window. |
| "Please don't make noise." | She asked us **not to make** noise. |

### 4. Vorschläge & Ratschläge berichten 💡

| Verb | Muster | Beispiel |
|------|--------|----------|
| **suggest** | suggest + -ing / that | "She suggested **going** home." |
| **recommend** | recommend + -ing / that | "He recommended **trying** the soup." |
| **advise** | advise + Obj + to | "The lawyer advised **me to wait**." |

### 5. Regeln der Zeitverschiebung (Backshifting) 📏

Das Standard-Muster:

| Direkte Rede | Indirekte Rede |
|-------------|----------------|
| Present Simple → | Past Simple |
| Present Continuous → | Past Continuous |
| Present Perfect → | Past Perfect |
| Past Simple → | Past Perfect |
| will → | would |
| can → | could |
| may → | might |
| must (Verpflichtung) → | had to |

**Zeit- und Ortsangaben ändern sich auch:**

| Direkt | Indirekt |
|--------|----------|
| today | that day |
| yesterday | the day before |
| tomorrow | the next day |
| now | then / at that time |
| here | there |
| this | that |
| last week | the week before |
| next month | the following month |

### 6. Wann NICHT zurückschieben 🚫⏪

Hier gewinnen B2-Lernende einen Vorteil. Du musst NICHT zurückschieben, wenn:

**a) Die Information noch wahr ist:**
- "I'm a vegetarian." → She said she **is** a vegetarian. (immer noch wahr)

**b) Allgemeine Wahrheiten und wissenschaftliche Fakten:**
- "The sun rises in the east." → She said the sun **rises** in the east.

**c) Das Berichtsverb im Präsens steht:**
- She **says** she is tired. (keine Verschiebung nötig)

**d) Gerade eben gesagt:**
- "I'm hungry." → He just said he **is** hungry.

> 💡 Zeitverschiebung ist technisch immer "korrekt", aber die Originalzeit beizubehalten ist auch akzeptabel, wenn sich die Situation nicht geändert hat.

<GamePlaceholder id="sentenceBuilder" />

### 7. Said vs Told – Die ewige Verwechslung 🔄

| Verb | Muster | Beispiel |
|------|--------|----------|
| **say** | say (+ that) – KEIN Objekt | She **said** (that) she was tired. |
| **tell** | tell + Objekt (+ that) | She **told me** (that) she was tired. |

- ❌ "She **said me** that she was tired."
- ❌ "She **told that** she was tired."
- ✅ "She **said** she was tired." / "She **told me** she was tired."

### 8. Häufige Fehler ❌

**Fehler 1:** Fragereihenfolge in indirekten Fragen beibehalten
- ❌ "She asked where **did I** work."
- ✅ "She asked where **I worked**."

**Fehler 2:** 'Do/does/did' in indirekten Fragen verwenden
- ❌ "He asked if **do I** like coffee."
- ✅ "He asked if **I liked** coffee."

**Fehler 3:** 'Said' mit einem Objekt verwenden
- ❌ "He **said me** to wait."
- ✅ "He **told me** to wait."

**Fehler 4:** 'Told' ohne Objekt verwenden
- ❌ "She **told** that she was leaving."
- ✅ "She **said** that she was leaving." / "She **told us** that she was leaving."

**Fehler 5:** Zurückschieben, wenn es Verwirrung erzeugt
- ❌ "She said she **was** a doctor." (wenn sie noch Ärztin ist)
- ✅ "She said she **is** a doctor." (klarer – immer noch wahr)

<GamePlaceholder id="fixTheMistake" />

<div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">🎯 Wichtige Regeln:</h3>
  <ul className="list-disc list-inside space-y-1">
    <li><strong>Indirekte Fragen:</strong> Aussage-Wortstellung, kein do/does/did</li>
    <li><strong>Ja/Nein-Fragen:</strong> verwende if/whether</li>
    <li><strong>Befehle:</strong> tell + Objekt + to-Infinitiv</li>
    <li><strong>Bitten:</strong> ask + Objekt + to-Infinitiv</li>
    <li><strong>Said</strong> = kein Objekt / <strong>Told</strong> = braucht immer ein Objekt</li>
    <li><strong>Nicht zurückschieben</strong> bei Fakten, Wahrheiten und noch gültigen Situationen</li>
  </ul>
</div>

---

### 🎮 Trainings-Arena
<GamePlaceholder id="grammarRacer" />
`
  }
};
