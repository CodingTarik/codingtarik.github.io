import React from 'react';
import GrammarGame from '../../../components/grammar-games/GrammarGame';

const sentenceBuilderData = [
  {
    prompt: { en: "Never ___ I seen such a beautiful sunset.", de: "Noch nie habe ich einen so schönen Sonnenuntergang gesehen." },
    words: ["have", "had", "has", "did"],
    correct: "have",
    explanation: { en: "Inversion after 'Never': Never + auxiliary + subject → 'Never have I seen...'", de: "Inversion nach 'Never': Never + Hilfsverb + Subjekt → 'Never have I seen...'" }
  },
  {
    prompt: { en: "Rarely ___ she complain about anything.", de: "Selten beschwert sie sich über irgendetwas." },
    words: ["does", "do", "is", "has"],
    correct: "does",
    explanation: { en: "'Rarely does she...' — inversion with 'does' for present simple.", de: "'Rarely does she...' — Inversion mit 'does' im Present Simple." }
  },
  {
    prompt: { en: "Not only did he arrive late, ___ he also forgot the documents.", de: "Er kam nicht nur zu spät, sondern vergaß auch die Dokumente." },
    words: ["but", "and", "however", "yet"],
    correct: "but",
    explanation: { en: "'Not only... but also' — a fixed correlative structure with inversion in the first clause.", de: "'Not only... but also' — eine feste korrelative Struktur mit Inversion im ersten Satz." }
  },
  {
    prompt: { en: "Hardly had we sat down ___ the phone rang.", de: "Kaum hatten wir uns hingesetzt, da klingelte das Telefon." },
    words: ["when", "than", "that", "before"],
    correct: "when",
    explanation: { en: "'Hardly had... when...' — fixed structure. One thing happened almost immediately after another.", de: "'Hardly had... when...' — feste Struktur. Eine Sache passierte fast unmittelbar nach der anderen." }
  },
  {
    prompt: { en: "No sooner had she left ___ it started to rain.", de: "Kaum war sie gegangen, da fing es an zu regnen." },
    words: ["than", "when", "that", "as"],
    correct: "than",
    explanation: { en: "'No sooner had... than...' — fixed structure (not 'when' here!).", de: "'No sooner had... than...' — feste Struktur (nicht 'when' hier!)." }
  },
  {
    prompt: { en: "Under no circumstances ___ you reveal this information.", de: "Unter keinen Umständen darfst du diese Information preisgeben." },
    words: ["should", "you should", "shall you", "do"],
    correct: "should",
    explanation: { en: "'Under no circumstances should you...' — inversion after a negative adverbial phrase.", de: "'Under no circumstances should you...' — Inversion nach einem negativen Adverbialausdruck." }
  }
];

const fixTheMistakeData = [
  {
    sentence: "Never I have seen such a mess.",
    mistakeIndex: 1,
    correction: "have I",
    explanation: { en: "After 'Never', invert the auxiliary and subject: 'Never have I seen...'", de: "Nach 'Never' Hilfsverb und Subjekt umstellen: 'Never have I seen...'" }
  },
  {
    sentence: "Hardly had we arrived than the show began.",
    mistakeIndex: 4,
    correction: "when",
    explanation: { en: "'Hardly... WHEN' (not 'than'). Compare: 'No sooner... than'.", de: "'Hardly... WHEN' (nicht 'than'). Vergleiche: 'No sooner... than'." }
  },
  {
    sentence: "No sooner had she finished when the boss called.",
    mistakeIndex: 5,
    correction: "than",
    explanation: { en: "'No sooner... THAN' (not 'when'). Compare: 'Hardly... when'.", de: "'No sooner... THAN' (nicht 'when'). Vergleiche: 'Hardly... when'." }
  },
  {
    sentence: "Seldom she does visit her hometown.",
    mistakeIndex: 1,
    correction: "does she",
    explanation: { en: "After 'Seldom', invert: 'Seldom does she visit...' (auxiliary before subject).", de: "Nach 'Seldom' umstellen: 'Seldom does she visit...' (Hilfsverb vor Subjekt)." }
  },
  {
    sentence: "Not only he was tired, but he was also hungry.",
    mistakeIndex: 2,
    correction: "was he",
    explanation: { en: "After 'Not only', invert: 'Not only was he tired, but...'", de: "Nach 'Not only' umstellen: 'Not only was he tired, but...'" }
  }
];

const grammarRacerData = [
  {
    prompt: "Little ___ they know about the surprise.",
    options: ["did", "do", "were"],
    correct: "did",
    explanation: "'Little did they know...' — inversion with past simple."
  },
  {
    prompt: "At no time ___ the students allowed to leave.",
    options: ["were", "was", "did"],
    correct: "were",
    explanation: "'At no time were the students allowed...' — passive inversion."
  },
  {
    prompt: "Seldom ___ we see such dedication.",
    options: ["do", "does", "are"],
    correct: "do",
    explanation: "'Seldom do we see...' — inversion with present simple."
  },
  {
    prompt: "Hardly had I opened the door ___ the cat ran out.",
    options: ["when", "than", "that"],
    correct: "when",
    explanation: "'Hardly... when' is the correct pairing."
  }
];

export const inversionNegativeAdverbials = {
  id: 'b2_g12',
  title: {
    en: 'Inversion after Negative Adverbials',
    de: 'Inversion nach negativen Adverbien'
  },
  description: {
    en: "Never have I..., Rarely does she..., Not only... but also — formal emphasis through inverted word order.",
    de: "Never have I..., Rarely does she..., Not only... but also — formale Betonung durch umgekehrte Wortstellung."
  },
  components: {
    sentenceBuilder: <GrammarGame type="sentenceBuilder" data={sentenceBuilderData} />,
    fixTheMistake: <GrammarGame type="fixTheMistake" data={fixTheMistakeData} />,
    grammarRacer: <GrammarGame type="grammarRacer" data={grammarRacerData} />
  },
  content: {
    en: `
## Inversion after Negative Adverbials 🔄⚡

In English, we sometimes place a **negative adverbial** at the beginning of a sentence for **dramatic emphasis**. When we do this, we **invert** the subject and auxiliary verb — just like in a question. This is a hallmark of formal, literary, and sophisticated English.

### 1. The Basic Rule 📐

**Normal order:** Subject + Auxiliary + Verb
**Inverted order:** Negative adverbial + Auxiliary + Subject + Verb

| Normal | Inverted (formal emphasis) |
|--------|---------------------------|
| "I have **never** seen such beauty." | "**Never have I** seen such beauty." |
| "She **rarely** complains." | "**Rarely does she** complain." |
| "They **little** knew the truth." | "**Little did they** know the truth." |

### 2. Key Negative Adverbials 🔑

Here are the most important negative adverbials that trigger inversion:

| Adverbial | Example |
|-----------|---------|
| **Never** | "**Never have** I felt so alive." |
| **Rarely / Seldom** | "**Rarely does** he lose his temper." |
| **Hardly / Scarcely** | "**Hardly had** she arrived **when** the meeting began." |
| **No sooner** | "**No sooner had** I left **than** it started raining." |
| **Not only... but also** | "**Not only did** she win, **but** she also broke the record." |
| **Little** | "**Little did** they know what awaited them." |
| **At no time** | "**At no time were** we in danger." |
| **Under no circumstances** | "**Under no circumstances should** you open this door." |
| **On no account** | "**On no account must** you tell anyone." |
| **In no way** | "**In no way was** this acceptable." |

### 3. Hardly... when / No sooner... than ⏰

These pairs describe two events happening almost simultaneously:

<div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">📌 Fixed Pairings — Don't Mix Them!</h3>
  <p><strong>Hardly had</strong>... <strong>when</strong>...</p>
  <p><strong>Scarcely had</strong>... <strong>when</strong>...</p>
  <p><strong>No sooner had</strong>... <strong>than</strong>...</p>
  <p>❌ "Hardly had I arrived <strong>than</strong>..." → ✅ "Hardly had I arrived <strong>when</strong>..."</p>
  <p>❌ "No sooner had I left <strong>when</strong>..." → ✅ "No sooner had I left <strong>than</strong>..."</p>
</div>

### 4. Not only... but also 🔗

Inversion happens in the **first** clause only:

- "**Not only did** she pass the exam, **but** she also got the highest score."
- "**Not only was** the food delicious, **but** the service was excellent too."
- "**Not only has** he written a book, **but** he's also made a film."

<GamePlaceholder id="sentenceBuilder" />

### 5. How to Form the Inversion 🛠️

| Tense | Normal | Inverted |
|-------|--------|----------|
| Present Simple | "He rarely comes." | "Rarely **does he** come." |
| Past Simple | "They little knew." | "Little **did they** know." |
| Present Perfect | "I have never seen." | "Never **have I** seen." |
| Past Perfect | "She had hardly started." | "Hardly **had she** started." |
| Modal | "You should never do that." | "Never **should you** do that." |
| Passive | "We were at no time informed." | "At no time **were we** informed." |

### 6. Common Mistakes ❌

- ❌ "Never **I have** seen..." → ✅ "Never **have I** seen..." (invert!)
- ❌ "Hardly... **than**" → ✅ "Hardly... **when**"
- ❌ "No sooner... **when**" → ✅ "No sooner... **than**"
- ❌ "Not only **he was**..." → ✅ "Not only **was he**..."
- ❌ "Seldom **she does**..." → ✅ "Seldom **does she**..."

<GamePlaceholder id="fixTheMistake" />

---

### 🎮 Practice Arena
<GamePlaceholder id="grammarRacer" />
`,
    de: `
## Inversion nach negativen Adverbien 🔄⚡

Im Englischen stellen wir manchmal ein **negatives Adverb** an den Satzanfang für **dramatische Betonung**. Dabei **invertieren** wir Subjekt und Hilfsverb — genau wie bei einer Frage. Dies ist ein Merkmal von formellem, literarischem und gehobenem Englisch.

### 1. Die Grundregel 📐

**Normale Reihenfolge:** Subjekt + Hilfsverb + Verb
**Invertierte Reihenfolge:** Negatives Adverb + Hilfsverb + Subjekt + Verb

| Normal | Invertiert (formale Betonung) |
|--------|-------------------------------|
| "I have **never** seen such beauty." | "**Never have I** seen such beauty." |
| "She **rarely** complains." | "**Rarely does she** complain." |
| "They **little** knew the truth." | "**Little did they** know the truth." |

### 2. Wichtige negative Adverbien 🔑

Hier sind die wichtigsten negativen Adverbien, die Inversion auslösen:

| Adverb | Beispiel |
|--------|----------|
| **Never** | "**Never have** I felt so alive." |
| **Rarely / Seldom** | "**Rarely does** he lose his temper." |
| **Hardly / Scarcely** | "**Hardly had** she arrived **when** the meeting began." |
| **No sooner** | "**No sooner had** I left **than** it started raining." |
| **Not only... but also** | "**Not only did** she win, **but** she also broke the record." |
| **Little** | "**Little did** they know what awaited them." |
| **At no time** | "**At no time were** we in danger." |
| **Under no circumstances** | "**Under no circumstances should** you open this door." |
| **On no account** | "**On no account must** you tell anyone." |
| **In no way** | "**In no way was** this acceptable." |

### 3. Hardly... when / No sooner... than ⏰

Diese Paare beschreiben zwei fast gleichzeitig stattfindende Ereignisse:

<div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">📌 Feste Paarungen — Nicht verwechseln!</h3>
  <p><strong>Hardly had</strong>... <strong>when</strong>...</p>
  <p><strong>Scarcely had</strong>... <strong>when</strong>...</p>
  <p><strong>No sooner had</strong>... <strong>than</strong>...</p>
  <p>❌ "Hardly had I arrived <strong>than</strong>..." → ✅ "Hardly had I arrived <strong>when</strong>..."</p>
  <p>❌ "No sooner had I left <strong>when</strong>..." → ✅ "No sooner had I left <strong>than</strong>..."</p>
</div>

### 4. Not only... but also 🔗

Inversion geschieht nur im **ersten** Satz:

- "**Not only did** she pass the exam, **but** she also got the highest score."
- "**Not only was** the food delicious, **but** the service was excellent too."
- "**Not only has** he written a book, **but** he's also made a film."

<GamePlaceholder id="sentenceBuilder" />

### 5. Wie man die Inversion bildet 🛠️

| Zeitform | Normal | Invertiert |
|----------|--------|------------|
| Present Simple | "He rarely comes." | "Rarely **does he** come." |
| Past Simple | "They little knew." | "Little **did they** know." |
| Present Perfect | "I have never seen." | "Never **have I** seen." |
| Past Perfect | "She had hardly started." | "Hardly **had she** started." |
| Modal | "You should never do that." | "Never **should you** do that." |
| Passiv | "We were at no time informed." | "At no time **were we** informed." |

### 6. Häufige Fehler ❌

- ❌ "Never **I have** seen..." → ✅ "Never **have I** seen..." (invertieren!)
- ❌ "Hardly... **than**" → ✅ "Hardly... **when**"
- ❌ "No sooner... **when**" → ✅ "No sooner... **than**"
- ❌ "Not only **he was**..." → ✅ "Not only **was he**..."
- ❌ "Seldom **she does**..." → ✅ "Seldom **does she**..."

<GamePlaceholder id="fixTheMistake" />

---

### 🎮 Trainings-Arena
<GamePlaceholder id="grammarRacer" />
`
  }
};
