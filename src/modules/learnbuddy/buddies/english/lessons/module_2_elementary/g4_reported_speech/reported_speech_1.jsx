import React from 'react';
import GrammarGame from '../../../components/grammar-games/GrammarGame';

const sentenceBuilderData = [
  {
    prompt: { en: "She said that she ___ (be) tired.", de: "Sie sagte, dass sie ___ (sein) müde." },
    words: ["was", "is", "be", "being"],
    correct: "was",
    explanation: { en: "Reported speech: past tense (she said -> was)", de: "Indirekte Rede: Vergangenheitsform (she said -> was)" }
  },
  {
    prompt: { en: "He told me that he ___ (like) pizza.", de: "Er sagte mir, dass er Pizza ___ (mögen)." },
    words: ["liked", "likes", "like", "liking"],
    correct: "liked",
    explanation: { en: "Reported speech: past tense after 'told'", de: "Indirekte Rede: Vergangenheitsform nach 'told'" }
  },
  {
    prompt: { en: "They said they ___ (go) to the cinema.", de: "Sie sagten, sie ___ (gehen) ins Kino." },
    words: ["went", "go", "are going", "will go"],
    correct: "went",
    explanation: { en: "Reported speech: past tense (said -> went)", de: "Indirekte Rede: Vergangenheitsform (said -> went)" }
  }
];

const fixTheMistakeData = [
  {
    sentence: "She said that she is happy.",
    mistakeIndex: 3,
    correction: "was",
    explanation: { en: "Reported speech: 'said' -> use past tense 'was'", de: "Indirekte Rede: 'said' -> verwende Vergangenheitsform 'was'" }
  },
  {
    sentence: "He told me that he will come.",
    mistakeIndex: 3,
    correction: "would",
    explanation: { en: "Reported speech: 'told' -> 'will' becomes 'would'", de: "Indirekte Rede: 'told' -> 'will' wird zu 'would'" }
  }
];

const grammarRacerData = [
  {
    prompt: "She said she ___ tired.",
    options: ["was", "is", "be"],
    correct: "was",
    explanation: "Reported speech: was"
  },
  {
    prompt: "He told me he ___ pizza.",
    options: ["liked", "likes", "like"],
    correct: "liked",
    explanation: "Reported speech: liked"
  }
];

export const reportedSpeech1 = {
  id: 'a2_g47',
  title: {
    en: 'Reported Speech 1 (he said that ...) - Introduction',
    de: 'Indirekte Rede 1 (er sagte, dass ...) - Einführung'
  },
  description: {
    en: "Reporting what someone said. 'She said that she was tired', 'He told me that he liked pizza'.",
    de: "Wiedergeben, was jemand gesagt hat. 'Sie sagte, dass sie müde war', 'Er sagte mir, dass er Pizza mochte'."
  },
  
  components: {
    sentenceBuilder: <GrammarGame type="sentenceBuilder" data={sentenceBuilderData} />,
    fixTheMistake: <GrammarGame type="fixTheMistake" data={fixTheMistakeData} />,
    grammarRacer: <GrammarGame type="grammarRacer" data={grammarRacerData} />
  },

  content: {
    en: `
## Reported Speech: Telling What Someone Said 🗣️

**Reported Speech** (also called Indirect Speech) is when you tell someone what another person said. Instead of repeating their exact words, you report what they said.

### Why Reported Speech?

Think about these situations:
- Direct: "I am tired," she said.
- Reported: She **said that** she **was** tired.

- Direct: "I like pizza," he told me.
- Reported: He **told me that** he **liked** pizza.

The key idea: When you report what someone said, you often need to change the **tense**!

### 1. Basic Structure: Said/Told That 📝

**Structure:** Subject + **said/told** + (that) + reported clause

**Said vs Told:**
- **Said** = Just reporting speech
- **Told** = Reporting speech **to someone** (told + object)

**Examples:**
- "She **said** (that) she was tired." (Just reporting)
- "He **told me** (that) he liked pizza." (Told to me)
- "They **said** (that) they were happy." (Just reporting)

**Note:** "That" is optional - you can say "she said that" or "she said"!

<div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">💡 Remember:</h3>
  <p><strong>Said</strong> = Just reporting</p>
  <p><strong>Told</strong> = Reporting to someone (told + object: told me, told him, told us)</p>
</div>

<GamePlaceholder id="sentenceBuilder" />

### 2. Tense Changes: Present → Past 🔄

When the reporting verb is in the **past** (said, told), you usually change the tense in the reported clause:

| Direct Speech | Reported Speech |
|---------------|----------------|
| "I **am** tired." | She said she **was** tired. |
| "I **like** pizza." | He said he **liked** pizza. |
| "I **will** come." | She said she **would** come. |
| "I **have** finished." | He said he **had** finished. |

**Key rule:** If the reporting verb is **past** (said, told), the reported clause usually goes **one step back** in time!

### 3. Common Tense Changes 📋

**Present Simple → Past Simple**
- "I **work** here." → He said he **worked** there.
- "I **like** coffee." → She said she **liked** coffee.

**Present Continuous → Past Continuous**
- "I **am studying**." → He said he **was studying**.

**Will → Would**
- "I **will** help." → She said she **would** help.

**Can → Could**
- "I **can** swim." → He said he **could** swim.

<div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">✅ Remember:</h3>
  <p>When reporting past speech (said/told), tenses usually go back one step!</p>
  <p>Present → Past, Will → Would, Can → Could</p>
</div>

<GamePlaceholder id="fixTheMistake" />

### 4. Pronouns and Time Words Change Too! 🔄

When reporting, you also need to change pronouns and time words:

**Pronouns:**
- "I am tired." → She said **she** was tired. (I → she)
- "We like it." → They said **they** liked it. (We → they)

**Time words:**
- "I will come **tomorrow**." → He said he would come **the next day**.
- "I saw her **yesterday**." → She said she had seen her **the day before**.

### 5. When NOT to Change Tense ⚠️

You **don't** need to change the tense if:
- The reporting verb is **present** (says, tells)
- The information is **still true** now

**Examples:**
- "She **says** she **is** tired." (Present - no change needed)
- "He **tells** me he **likes** pizza." (Present - no change needed)

**But:** If the reporting verb is **past** (said, told), you usually **do** change the tense!

### 6. Common Reporting Verbs 📋

**Said:**
- "She **said** (that) she was tired."

**Told:**
- "He **told me** (that) he liked pizza."
- "She **told him** (that) she was coming."

**Other verbs:**
- "He **explained** (that) it was difficult."
- "She **mentioned** (that) she was busy."

---

### 🎮 Practice Arena

**🏎️ Grammar Racer: Reported Speech**
Choose the correct form!
<GamePlaceholder id="grammarRacer" />

### 🎯 Practical Exercise

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border-2 border-green-300">
  <h3 className="font-bold text-green-800 dark:text-green-200 mb-4">📝 Report What They Said</h3>
  <p className="mb-4">Convert direct speech to reported speech:</p>
  <ol className="list-decimal list-inside space-y-2">
    <li>Convert: "I am happy" → She said...</li>
    <li>Convert: "I like chocolate" → He told me...</li>
    <li>Convert: "I will come tomorrow" → They said...</li>
    <li>Write your own sentence using reported speech</li>
  </ol>
</div>
`,
    de: `
## Indirekte Rede: Wiedergeben, was jemand gesagt hat 🗣️

Die **Indirekte Rede** (auch Reported Speech genannt) ist, wenn du jemandem erzählst, was eine andere Person gesagt hat. Anstatt ihre genauen Worte zu wiederholen, gibst du wieder, was sie gesagt haben.

### Warum Indirekte Rede?

Denk an diese Situationen:
- Direkt: "I am tired," she said. (Ich bin müde, sagte sie.)
- Indirekt: She **said that** she **was** tired. (Sie sagte, dass sie müde war.)

- Direkt: "I like pizza," he told me. (Ich mag Pizza, sagte er mir.)
- Indirekt: He **told me that** he **liked** pizza. (Er sagte mir, dass er Pizza mochte.)

Die Schlüsselidee: Wenn du wiedergibst, was jemand gesagt hat, musst du oft die **Zeitform** ändern!

### 1. Grundstruktur: Said/Told That 📝

**Struktur:** Subjekt + **said/told** + (that) + wiedergegebener Satz

**Said vs Told:**
- **Said** = Nur Rede wiedergeben
- **Told** = Rede **jemandem** wiedergeben (told + Objekt)

**Beispiele:**
- "She **said** (that) she was tired." (Nur wiedergeben)
- "He **told me** (that) he liked pizza." (Mir gesagt)
- "They **said** (that) they were happy." (Nur wiedergeben)

**Hinweis:** "That" ist optional - du kannst "she said that" oder "she said" sagen!

<div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">💡 Merke dir:</h3>
  <p><strong>Said</strong> = Nur wiedergeben</p>
  <p><strong>Told</strong> = Jemandem wiedergeben (told + Objekt: told me, told him, told us)</p>
</div>

<GamePlaceholder id="sentenceBuilder" />

### 2. Zeitformänderungen: Gegenwart → Vergangenheit 🔄

Wenn das Verb des Wiedergebens in der **Vergangenheit** steht (said, told), änderst du normalerweise die Zeitform im wiedergegebenen Satz:

| Direkte Rede | Indirekte Rede |
|--------------|---------------|
| "I **am** tired." | She said she **was** tired. |
| "I **like** pizza." | He said he **liked** pizza. |
| "I **will** come." | She said she **would** come. |
| "I **have** finished." | He said he **had** finished. |

**Hauptregel:** Wenn das Verb des Wiedergebens in der **Vergangenheit** steht (said, told), geht der wiedergegebene Satz normalerweise **einen Schritt zurück** in der Zeit!

### 3. Häufige Zeitformänderungen 📋

**Present Simple → Past Simple**
- "I **work** here." → He said he **worked** there.
- "I **like** coffee." → She said she **liked** coffee.

**Present Continuous → Past Continuous**
- "I **am studying**." → He said he **was studying**.

**Will → Would**
- "I **will** help." → She said she **would** help.

**Can → Could**
- "I **can** swim." → He said he **could** swim.

<div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">✅ Merke dir:</h3>
  <p>Beim Wiedergeben von Vergangenheitsrede (said/told) gehen Zeitformen normalerweise einen Schritt zurück!</p>
  <p>Gegenwart → Vergangenheit, Will → Would, Can → Could</p>
</div>

<GamePlaceholder id="fixTheMistake" />

### 4. Pronomen und Zeitwörter ändern sich auch! 🔄

Beim Wiedergeben musst du auch Pronomen und Zeitwörter ändern:

**Pronomen:**
- "I am tired." → She said **she** was tired. (I → she)
- "We like it." → They said **they** liked it. (We → they)

**Zeitwörter:**
- "I will come **tomorrow**." → He said he would come **the next day**.
- "I saw her **yesterday**." → She said she had seen her **the day before**.

### 5. Wann NICHT die Zeitform ändern ⚠️

Du **musst** die Zeitform **nicht** ändern, wenn:
- Das Verb des Wiedergebens in der **Gegenwart** steht (says, tells)
- Die Information **noch wahr** ist

**Beispiele:**
- "She **says** she **is** tired." (Gegenwart - keine Änderung nötig)
- "He **tells** me he **likes** pizza." (Gegenwart - keine Änderung nötig)

**Aber:** Wenn das Verb des Wiedergebens in der **Vergangenheit** steht (said, told), änderst du normalerweise **doch** die Zeitform!

### 6. Häufige Verben des Wiedergebens 📋

**Said:**
- "She **said** (that) she was tired."

**Told:**
- "He **told me** (that) he liked pizza."
- "She **told him** (that) she was coming."

**Andere Verben:**
- "He **explained** (that) it was difficult."
- "She **mentioned** (that) she was busy."

---

### 🎮 Trainings-Arena

**🏎️ Grammar Racer: Indirekte Rede**
Wähle die richtige Form!
<GamePlaceholder id="grammarRacer" />

### 🎯 Praktische Übung

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border-2 border-green-300">
  <h3 className="font-bold text-green-800 dark:text-green-200 mb-4">📝 Gib wieder, was sie gesagt haben</h3>
  <p className="mb-4">Wandle direkte Rede in indirekte Rede um:</p>
  <ol className="list-decimal list-inside space-y-2">
    <li>Wandle um: "I am happy" → She said...</li>
    <li>Wandle um: "I like chocolate" → He told me...</li>
    <li>Wandle um: "I will come tomorrow" → They said...</li>
    <li>Schreibe deinen eigenen Satz mit indirekter Rede</li>
  </ol>
</div>
`
  },
  task: {
    de: {
      title: 'Indirekte Rede 1',
      description: 'Wandle direkte Rede in indirekte Rede um.',
      checklist: [
        { text: 'Direkte Rede zu indirekter Rede umwandeln (said)', checked: false },
        { text: 'Direkte Rede zu indirekter Rede umwandeln (told)', checked: false },
        { text: 'Zeitformänderung zeigen (Present → Past)', checked: false },
        { text: 'Eigener Satz mit indirekter Rede', checked: false }
      ]
    },
    en: {
      title: 'Reported Speech 1',
      description: 'Convert direct speech to reported speech.',
      checklist: [
        { text: 'Convert direct to reported (said)', checked: false },
        { text: 'Convert direct to reported (told)', checked: false },
        { text: 'Show tense change (Present → Past)', checked: false },
        { text: 'Own sentence with reported speech', checked: false }
      ]
    }
  },
  quiz: { de: [], en: [] }
};


