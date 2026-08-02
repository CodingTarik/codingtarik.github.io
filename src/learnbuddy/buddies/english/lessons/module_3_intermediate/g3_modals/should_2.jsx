import React from 'react';
import GrammarGame from '../../../components/grammar-games/GrammarGame';

const sentenceBuilderData = [
  {
    prompt: { en: "I failed the exam. I ___ studied harder.", de: "Ich habe die Prüfung nicht bestanden. Ich hätte härter lernen sollen." },
    words: ["should have", "should", "must have", "could"],
    correct: "should have",
    explanation: { en: "Should have done = the right thing to do, but you didn't.", de: "Should have done = das Richtige, aber du hast es nicht getan." }
  },
  {
    prompt: { en: "You ___ told me earlier! Now it's too late.", de: "Du hättest es mir früher sagen sollen! Jetzt ist es zu spät." },
    words: ["should have", "should", "must have", "would have"],
    correct: "should have",
    explanation: { en: "Criticism about a past action (or lack of action).", de: "Kritik an einer vergangenen Handlung (oder fehlenden Handlung)." }
  },
  {
    prompt: { en: "She ___ eaten so much cake. Now she feels sick.", de: "Sie hätte nicht so viel Kuchen essen sollen. Jetzt ist ihr schlecht." },
    words: ["shouldn't have", "shouldn't", "mustn't have", "needn't have"],
    correct: "shouldn't have",
    explanation: { en: "Shouldn't have done = it was a bad idea (and you did it).", de: "Shouldn't have done = es war eine schlechte Idee (und du hast es getan)." }
  }
];

const fixTheMistakeData = [
  {
    sentence: "I should go to the doctor yesterday.",
    mistakeIndex: 2,
    correction: "should have gone",
    explanation: { en: "For past regret/advice, use 'should have + past participle', not 'should + base verb'.", de: "Für vergangenen Rat/Bedauern benutze 'should have + Partizip Perfekt'." }
  },
  {
    sentence: "You shouldn't told him the truth.",
    mistakeIndex: 1,
    correction: "shouldn't have told",
    explanation: { en: "After shouldn't, you need 'have + past participle' for past situations.", de: "Nach shouldn't brauchst du 'have + Partizip Perfekt' für vergangene Situationen." }
  },
  {
    sentence: "He should have listen to his parents.",
    mistakeIndex: 4,
    correction: "listened",
    explanation: { en: "After 'should have', use the past participle: 'listened', not 'listen'.", de: "Nach 'should have' benutze das Partizip Perfekt: 'listened', nicht 'listen'." }
  }
];

const grammarRacerData = [
  {
    prompt: "I got sunburned. I ___ worn sunscreen.",
    options: ["should have", "should", "must have"],
    correct: "should have",
    explanation: "Past regret – I didn't wear sunscreen."
  },
  {
    prompt: "He ___ said that. It was very rude.",
    options: ["shouldn't have", "shouldn't", "mustn't have"],
    correct: "shouldn't have",
    explanation: "He said it, but it was wrong."
  },
  {
    prompt: "We ___ left earlier. Now we're stuck in traffic.",
    options: ["should have", "should", "could"],
    correct: "should have",
    explanation: "Past regret – we didn't leave early enough."
  }
];

export const should2 = {
  id: 'b1_g34',
  title: {
    en: 'Should 2 – Should have done',
    de: 'Should 2 – Should have done'
  },
  description: {
    en: "Past advice and regret: 'I should have studied harder' / 'You shouldn't have said that'.",
    de: "Vergangener Rat und Bedauern: 'I should have studied harder' / 'You shouldn't have said that'."
  },
  components: {
    sentenceBuilder: <GrammarGame type="sentenceBuilder" data={sentenceBuilderData} />,
    fixTheMistake: <GrammarGame type="fixTheMistake" data={fixTheMistakeData} />,
    grammarRacer: <GrammarGame type="grammarRacer" data={grammarRacerData} />
  },
  content: {
    en: `
## Should have done – Past Advice & Regret 😔

**Should have + past participle** is used to talk about the past – something that was the right thing to do, but **didn't happen**.

### 1. Should have done = It was the right thing (but you didn't do it) ✅➡️❌

- "I **should have studied** harder." (I didn't study enough – I regret it).
- "You **should have told** me!" (You didn't tell me, but you should have).
- "We **should have left** earlier."

### 2. Shouldn't have done = It was a bad idea (but you did it) ❌➡️✅

- "I **shouldn't have eaten** so much." (I ate too much – mistake!).
- "You **shouldn't have said** that. It was rude."
- "She **shouldn't have spent** all her money."

### 3. Structure 📐

| Form | Structure | Meaning |
|------|-----------|---------|
| **should have done** | should + have + past participle | Right thing, but didn't happen |
| **shouldn't have done** | shouldn't + have + past participle | Wrong thing, but it happened |

### 4. Should vs. Should have 🔄

| Form | Time | Example |
|------|------|---------|
| **should do** | Present/Future advice | "You **should go** to bed." |
| **should have done** | Past regret | "You **should have gone** to bed earlier." |

<div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">💡 Uses of 'should have done':</h3>
  <ul className="list-disc list-inside space-y-1">
    <li><strong>Regret:</strong> "I should have been nicer to her."</li>
    <li><strong>Criticism:</strong> "You should have called me!"</li>
    <li><strong>Advice about past:</strong> "He should have seen a doctor."</li>
  </ul>
</div>

<GamePlaceholder id="sentenceBuilder" />

### 5. Common Mistakes ❌

**Mistake 1:** Using 'should + base verb' for the past.
- ❌ "I **should study** harder last week."
- ✅ "I **should have studied** harder last week."

**Mistake 2:** Forgetting 'have' after should.
- ❌ "You **should told** me."
- ✅ "You **should have told** me."

<GamePlaceholder id="fixTheMistake" />

<div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">🎯 Summary:</h3>
  <ul className="list-disc list-inside space-y-1">
    <li><strong>Should have done</strong> = The right thing in the past (but didn't happen).</li>
    <li><strong>Shouldn't have done</strong> = A mistake in the past (it happened, but shouldn't have).</li>
  </ul>
</div>

---

### 🎮 Practice Arena

**🏎️ Grammar Racer**
<GamePlaceholder id="grammarRacer" />

### 🎯 Practical Exercise

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border-2 border-green-300">
  <h3 className="font-bold text-green-800 dark:text-green-200 mb-4">📝 Regrets and Criticism</h3>
  <p className="mb-4">Think about last week. Write about things you regret:</p>
  <ol className="list-decimal list-inside space-y-2">
    <li>"I should have ___" (something you didn't do)</li>
    <li>"I shouldn't have ___" (something you did but shouldn't have)</li>
    <li>Give past advice to a friend about a problem</li>
  </ol>
</div>
`,
    de: `
## Should have done – Vergangener Rat & Bedauern 😔

**Should have + Partizip Perfekt** wird benutzt, um über die Vergangenheit zu sprechen – etwas, das das Richtige gewesen wäre, aber **nicht passiert ist**.

### 1. Should have done = Es wäre richtig gewesen (aber du hast es nicht getan) ✅➡️❌

- "I **should have studied** harder." (Ich habe nicht genug gelernt – ich bereue es).
- "You **should have told** me!" (Du hast es mir nicht gesagt, aber du hättest es tun sollen).
- "We **should have left** earlier."

### 2. Shouldn't have done = Es war eine schlechte Idee (aber du hast es getan) ❌➡️✅

- "I **shouldn't have eaten** so much." (Ich habe zu viel gegessen – Fehler!).
- "You **shouldn't have said** that. It was rude."
- "She **shouldn't have spent** all her money."

### 3. Struktur 📐

| Form | Struktur | Bedeutung |
|------|----------|-----------|
| **should have done** | should + have + Partizip Perfekt | Richtig, aber nicht passiert |
| **shouldn't have done** | shouldn't + have + Partizip Perfekt | Falsch, aber es ist passiert |

### 4. Should vs. Should have 🔄

| Form | Zeit | Beispiel |
|------|------|----------|
| **should do** | Gegenwart/Zukunft Rat | "You **should go** to bed." |
| **should have done** | Vergangenes Bedauern | "You **should have gone** to bed earlier." |

<div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">💡 Verwendung von 'should have done':</h3>
  <ul className="list-disc list-inside space-y-1">
    <li><strong>Bedauern:</strong> "I should have been nicer to her."</li>
    <li><strong>Kritik:</strong> "You should have called me!"</li>
    <li><strong>Rat über die Vergangenheit:</strong> "He should have seen a doctor."</li>
  </ul>
</div>

<GamePlaceholder id="sentenceBuilder" />

### 5. Häufige Fehler ❌

**Fehler 1:** 'Should + Grundform' für die Vergangenheit benutzen.
- ❌ "I **should study** harder last week."
- ✅ "I **should have studied** harder last week."

**Fehler 2:** 'Have' nach should vergessen.
- ❌ "You **should told** me."
- ✅ "You **should have told** me."

<GamePlaceholder id="fixTheMistake" />

<div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">🎯 Zusammenfassung:</h3>
  <ul className="list-disc list-inside space-y-1">
    <li><strong>Should have done</strong> = Das Richtige in der Vergangenheit (aber nicht passiert).</li>
    <li><strong>Shouldn't have done</strong> = Ein Fehler in der Vergangenheit (es ist passiert, hätte aber nicht sollen).</li>
  </ul>
</div>

---

### 🎮 Trainings-Arena

**🏎️ Grammar Racer**
<GamePlaceholder id="grammarRacer" />

### 🎯 Praktische Übung

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border-2 border-green-300">
  <h3 className="font-bold text-green-800 dark:text-green-200 mb-4">📝 Bedauern und Kritik</h3>
  <p className="mb-4">Denke an letzte Woche. Schreibe über Dinge, die du bereust:</p>
  <ol className="list-decimal list-inside space-y-2">
    <li>"I should have ___" (etwas, das du nicht getan hast)</li>
    <li>"I shouldn't have ___" (etwas, das du getan hast, aber nicht hättest tun sollen)</li>
    <li>Gib einem Freund Rat über ein vergangenes Problem</li>
  </ol>
</div>
`
  },
  task: {
    en: {
      title: 'Should have done',
      description: 'Practice expressing past regret and criticism.',
      checklist: [
        { text: "Write 3 sentences with 'should have done' (regret)", checked: false },
        { text: "Write 3 sentences with 'shouldn't have done' (mistake)", checked: false },
        { text: 'Give past advice to a friend about a real situation', checked: false }
      ]
    },
    de: {
      title: 'Should have done',
      description: 'Übe vergangenes Bedauern und Kritik auszudrücken.',
      checklist: [
        { text: "Schreibe 3 Sätze mit 'should have done' (Bedauern)", checked: false },
        { text: "Schreibe 3 Sätze mit 'shouldn't have done' (Fehler)", checked: false },
        { text: 'Gib einem Freund Rat über eine echte vergangene Situation', checked: false }
      ]
    }
  },
  quiz: { en: [], de: [] }
};
