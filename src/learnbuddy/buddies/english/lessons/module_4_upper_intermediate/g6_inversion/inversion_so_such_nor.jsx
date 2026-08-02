import React from 'react';
import GrammarGame from '../../../components/grammar-games/GrammarGame';

const sentenceBuilderData = [
  {
    prompt: { en: "So great ___ the damage that the building had to be demolished.", de: "So groß war der Schaden, dass das Gebäude abgerissen werden musste." },
    words: ["was", "is", "were", "did"],
    correct: "was",
    explanation: { en: "'So + adjective + was/were + subject': 'So great was the damage that...'", de: "'So + Adjektiv + was/were + Subjekt': 'So great was the damage that...'" }
  },
  {
    prompt: { en: "Such ___ the confusion that nobody knew what to do.", de: "So groß war die Verwirrung, dass niemand wusste, was zu tun war." },
    words: ["was", "is", "were", "did"],
    correct: "was",
    explanation: { en: "'Such was + noun': 'Such was the confusion that...' = The confusion was so great that...", de: "'Such was + Nomen': 'Such was the confusion that...' = Die Verwirrung war so groß, dass..." }
  },
  {
    prompt: { en: "I don't like spicy food. — ___ do I.", de: "Ich mag kein scharfes Essen. — Ich auch nicht." },
    words: ["Neither", "So", "Nor also", "Not"],
    correct: "Neither",
    explanation: { en: "'Neither do I' = I also don't. Used to agree with a negative statement.", de: "'Neither do I' = Ich auch nicht. Wird verwendet, um einer negativen Aussage zuzustimmen." }
  },
  {
    prompt: { en: "She couldn't swim, nor ___ she ride a bicycle.", de: "Sie konnte nicht schwimmen, und sie konnte auch nicht Fahrrad fahren." },
    words: ["could", "can", "did", "was"],
    correct: "could",
    explanation: { en: "'Nor could she...' — inversion after 'nor' to add another negative fact.", de: "'Nor could she...' — Inversion nach 'nor', um eine weitere negative Tatsache hinzuzufügen." }
  },
  {
    prompt: { en: "So impressed ___ the judges that they gave her full marks.", de: "So beeindruckt waren die Juroren, dass sie ihr die volle Punktzahl gaben." },
    words: ["were", "was", "did", "had"],
    correct: "were",
    explanation: { en: "'So impressed were the judges that...' — inversion with 'so + adjective'.", de: "'So impressed were the judges that...' — Inversion mit 'so + Adjektiv'." }
  }
];

const fixTheMistakeData = [
  {
    sentence: "So the damage was great that they closed the road.",
    mistakeIndex: 0,
    correction: "So great was the damage",
    explanation: { en: "Inverted order: 'So great was the damage that...' (not 'So the damage was great').", de: "Invertierte Reihenfolge: 'So great was the damage that...' (nicht 'So the damage was great')." }
  },
  {
    sentence: "I can't speak French. Neither I can.",
    mistakeIndex: 5,
    correction: "Neither can I.",
    explanation: { en: "Inversion after 'Neither': 'Neither can I' (not 'Neither I can').", de: "Inversion nach 'Neither': 'Neither can I' (nicht 'Neither I can')." }
  },
  {
    sentence: "He didn't apologise, nor he did explain.",
    mistakeIndex: 5,
    correction: "nor did he",
    explanation: { en: "Inversion after 'nor': 'nor did he explain' (auxiliary before subject).", de: "Inversion nach 'nor': 'nor did he explain' (Hilfsverb vor Subjekt)." }
  },
  {
    sentence: "Such the chaos was that the event was cancelled.",
    mistakeIndex: 1,
    correction: "was the chaos",
    explanation: { en: "'Such was the chaos that...' — 'such' + inverted verb + subject.", de: "'Such was the chaos that...' — 'such' + invertiertes Verb + Subjekt." }
  }
];

const grammarRacerData = [
  {
    prompt: "So beautiful ___ the sunset that everyone stopped to watch.",
    options: ["was", "were", "did"],
    correct: "was",
    explanation: "'So beautiful was the sunset that...' — inversion with 'so + adjective'."
  },
  {
    prompt: "I've never been to Japan. — Neither ___ I.",
    options: ["have", "do", "am"],
    correct: "have",
    explanation: "'Neither have I' — matches the auxiliary in the original statement (have been)."
  },
  {
    prompt: "She didn't complain, nor ___ she ask for help.",
    options: ["did", "does", "was"],
    correct: "did",
    explanation: "'Nor did she...' — past simple inversion matching the first clause."
  },
  {
    prompt: "Such ___ his talent that he was offered a scholarship.",
    options: ["was", "were", "is"],
    correct: "was",
    explanation: "'Such was his talent that...' — formal emphasis with inversion."
  }
];

export const inversionSoSuchNor = {
  id: 'b2_g13',
  title: {
    en: 'Inversion with So/Such/Nor/Neither',
    de: 'Inversion mit So/Such/Nor/Neither'
  },
  description: {
    en: "So great was the damage..., Such was the confusion..., Nor did he..., Neither do I.",
    de: "So great was the damage..., Such was the confusion..., Nor did he..., Neither do I."
  },
  components: {
    sentenceBuilder: <GrammarGame type="sentenceBuilder" data={sentenceBuilderData} />,
    fixTheMistake: <GrammarGame type="fixTheMistake" data={fixTheMistakeData} />,
    grammarRacer: <GrammarGame type="grammarRacer" data={grammarRacerData} />
  },
  content: {
    en: `
## Inversion with So/Such/Nor/Neither 🔄🎯

Beyond negative adverbials, English also uses inversion with **So**, **Such**, **Nor**, and **Neither** for emphasis and to agree with statements. These structures are common in formal writing and everyday conversation alike.

### 1. Inversion with "So" 🔵

**Structure: So + adjective/adverb + auxiliary + subject + that...**

This emphasises HOW extreme something was:

| Normal | Inverted (emphatic) |
|--------|---------------------|
| "The damage was **so** great that..." | "**So great was** the damage that..." |
| "She spoke **so** eloquently that..." | "**So eloquently did** she speak that..." |
| "He was **so** tired that he fell asleep." | "**So tired was** he that he fell asleep." |

More examples:
- "**So impressed were** the judges that they gave a standing ovation."
- "**So quickly did** the fire spread that nothing could be saved."
- "**So rarely does** this happen that it made national news."

### 2. Inversion with "Such" 📘

**Structure: Such + be + subject + that...**

| Normal | Inverted |
|--------|----------|
| "The confusion was such that..." | "**Such was** the confusion that..." |
| "Her beauty was such that..." | "**Such was** her beauty that..." |
| "The noise was such that..." | "**Such was** the noise that..." |

- "**Such was** the demand for tickets that they sold out in minutes."
- "**Such were** the problems that the project was abandoned."
- "**Such is** the power of music that it can change your mood instantly."

<div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">💡 So vs. Such — What's the difference?</h3>
  <p><strong>So</strong> + adjective/adverb: "So <strong>great</strong> was the damage..."</p>
  <p><strong>Such</strong> + be + noun: "Such was the <strong>damage</strong>..."</p>
  <p>Both express the same idea, but 'so' focuses on the <strong>quality</strong> and 'such' on the <strong>thing</strong>.</p>
</div>

<GamePlaceholder id="sentenceBuilder" />

### 3. Inversion with "Nor" 🔴

**Nor** adds another negative fact, and requires inversion:

**Structure: ..., nor + auxiliary + subject + verb**

- "He didn't apologise, **nor did he** offer an explanation."
- "She couldn't swim, **nor could she** ride a bicycle."
- "The hotel wasn't clean, **nor was it** comfortable."
- "I didn't know the answer, **nor did** anyone else."

### 4. Inversion with "Neither" & "So" (Agreeing) 🤝

**Agreeing with negative statements: Neither + auxiliary + subject**

| Statement | Agreement |
|-----------|-----------|
| "I don't like spiders." | "**Neither do** I." / "**Nor do** I." |
| "She hasn't finished." | "**Neither have** I." |
| "He can't come." | "**Neither can** we." |
| "I won't be there." | "**Neither will** she." |

**Agreeing with positive statements: So + auxiliary + subject**

| Statement | Agreement |
|-----------|-----------|
| "I love pizza." | "**So do** I." |
| "She has been to Paris." | "**So have** I." |
| "He can speak French." | "**So can** she." |

<div className="bg-amber-50 dark:bg-amber-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">⚠️ Match the auxiliary!</h3>
  <p>The auxiliary in your response must <strong>match</strong> the one in the original statement:</p>
  <p>"I <strong>have</strong> been there." → "So <strong>have</strong> I." (not 'So do I')</p>
  <p>"She <strong>can</strong> swim." → "So <strong>can</strong> he." (not 'So does he')</p>
  <p>"They <strong>don't</strong> agree." → "Neither <strong>do</strong> we." (not 'Neither are we')</p>
</div>

### 5. Common Mistakes ❌

- ❌ "Neither **I can**." → ✅ "Neither **can I**." (must invert!)
- ❌ "Nor **he did** explain." → ✅ "Nor **did he** explain."
- ❌ "So the damage **was** great that..." → ✅ "So great **was the damage** that..."
- ❌ "I like coffee." — "**Neither** do I." → ✅ "**So** do I." (Neither = negative agreement only!)

<GamePlaceholder id="fixTheMistake" />

---

### 🎮 Practice Arena
<GamePlaceholder id="grammarRacer" />
`,
    de: `
## Inversion mit So/Such/Nor/Neither 🔄🎯

Neben negativen Adverbien verwendet Englisch auch Inversion mit **So**, **Such**, **Nor** und **Neither** zur Betonung und um Aussagen zuzustimmen. Diese Strukturen sind sowohl in formeller Schriftsprache als auch in der Alltagskonversation verbreitet.

### 1. Inversion mit "So" 🔵

**Struktur: So + Adjektiv/Adverb + Hilfsverb + Subjekt + that...**

Dies betont, WIE extrem etwas war:

| Normal | Invertiert (betont) |
|--------|---------------------|
| "The damage was **so** great that..." | "**So great was** the damage that..." |
| "She spoke **so** eloquently that..." | "**So eloquently did** she speak that..." |
| "He was **so** tired that he fell asleep." | "**So tired was** he that he fell asleep." |

Weitere Beispiele:
- "**So impressed were** the judges that they gave a standing ovation."
- "**So quickly did** the fire spread that nothing could be saved."
- "**So rarely does** this happen that it made national news."

### 2. Inversion mit "Such" 📘

**Struktur: Such + be + Subjekt + that...**

| Normal | Invertiert |
|--------|------------|
| "The confusion was such that..." | "**Such was** the confusion that..." |
| "Her beauty was such that..." | "**Such was** her beauty that..." |
| "The noise was such that..." | "**Such was** the noise that..." |

- "**Such was** the demand for tickets that they sold out in minutes."
- "**Such were** the problems that the project was abandoned."
- "**Such is** the power of music that it can change your mood instantly."

<div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">💡 So vs. Such — Was ist der Unterschied?</h3>
  <p><strong>So</strong> + Adjektiv/Adverb: "So <strong>great</strong> was the damage..."</p>
  <p><strong>Such</strong> + be + Nomen: "Such was the <strong>damage</strong>..."</p>
  <p>Beide drücken dieselbe Idee aus, aber 'so' fokussiert auf die <strong>Eigenschaft</strong> und 'such' auf die <strong>Sache</strong>.</p>
</div>

<GamePlaceholder id="sentenceBuilder" />

### 3. Inversion mit "Nor" 🔴

**Nor** fügt eine weitere negative Tatsache hinzu und erfordert Inversion:

**Struktur: ..., nor + Hilfsverb + Subjekt + Verb**

- "He didn't apologise, **nor did he** offer an explanation."
- "She couldn't swim, **nor could she** ride a bicycle."
- "The hotel wasn't clean, **nor was it** comfortable."
- "I didn't know the answer, **nor did** anyone else."

### 4. Inversion mit "Neither" & "So" (Zustimmung) 🤝

**Zustimmung zu negativen Aussagen: Neither + Hilfsverb + Subjekt**

| Aussage | Zustimmung |
|---------|------------|
| "I don't like spiders." | "**Neither do** I." / "**Nor do** I." |
| "She hasn't finished." | "**Neither have** I." |
| "He can't come." | "**Neither can** we." |
| "I won't be there." | "**Neither will** she." |

**Zustimmung zu positiven Aussagen: So + Hilfsverb + Subjekt**

| Aussage | Zustimmung |
|---------|------------|
| "I love pizza." | "**So do** I." |
| "She has been to Paris." | "**So have** I." |
| "He can speak French." | "**So can** she." |

<div className="bg-amber-50 dark:bg-amber-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">⚠️ Hilfsverb anpassen!</h3>
  <p>Das Hilfsverb in deiner Antwort muss zum Hilfsverb der Originalaussage <strong>passen</strong>:</p>
  <p>"I <strong>have</strong> been there." → "So <strong>have</strong> I." (nicht 'So do I')</p>
  <p>"She <strong>can</strong> swim." → "So <strong>can</strong> he." (nicht 'So does he')</p>
  <p>"They <strong>don't</strong> agree." → "Neither <strong>do</strong> we." (nicht 'Neither are we')</p>
</div>

### 5. Häufige Fehler ❌

- ❌ "Neither **I can**." → ✅ "Neither **can I**." (muss invertiert werden!)
- ❌ "Nor **he did** explain." → ✅ "Nor **did he** explain."
- ❌ "So the damage **was** great that..." → ✅ "So great **was the damage** that..."
- ❌ "I like coffee." — "**Neither** do I." → ✅ "**So** do I." (Neither = nur negative Zustimmung!)

<GamePlaceholder id="fixTheMistake" />

---

### 🎮 Trainings-Arena
<GamePlaceholder id="grammarRacer" />
`
  }
};
