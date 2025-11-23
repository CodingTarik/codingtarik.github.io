import React from 'react';
import GrammarGame from '../../../components/grammar-games/GrammarGame';

const sentenceBuilderData = [
  {
    prompt: { en: "I will call you when I ___ home.", de: "Ich rufe dich an, wenn ich nach Hause komme." },
    words: ["get", "will get", "got", "am getting"],
    correct: "get",
    explanation: { en: "In future time clauses (when, as soon as, if), use Present Simple, not Will.", de: "In zukünftigen Zeit-Sätzen (wenn, sobald, falls), benutze Present Simple, nicht Will." }
  },
  {
    prompt: { en: "We will wait until she ___ .", de: "Wir warten, bis sie ankommt." },
    words: ["arrives", "will arrive", "arrived", "is arriving"],
    correct: "arrives",
    explanation: { en: "Until + Present Simple (for future meaning).", de: "Until + Present Simple (für zukünftige Bedeutung)." }
  },
  {
    prompt: { en: "As soon as I ___ finished, I will help you.", de: "Sobald ich fertig bin, helfe ich dir." },
    words: ["have", "will have", "had", "am"],
    correct: "have",
    explanation: { en: "As soon as I have finished (Present Perfect for completion before future action).", de: "Sobald ich fertig bin (Present Perfect für Abschluss vor zukünftiger Handlung)." }
  }
];

const fixTheMistakeData = [
  {
    sentence: "I will call you when I will arrive.",
    mistakeIndex: 6,
    correction: "arrive",
    explanation: { en: "Never use 'will' after 'when' in time clauses. Use Present Simple.", de: "Benutze nie 'will' nach 'when' in Zeitsätzen. Benutze Present Simple." }
  },
  {
    sentence: "If it will rain, we will stay home.",
    mistakeIndex: 3,
    correction: "rains",
    explanation: { en: "If + Present Simple (Conditional Type 1).", de: "If + Present Simple (Konditional Typ 1)." }
  },
  {
    sentence: "I will tell him as soon as I will see him.",
    mistakeIndex: 8,
    correction: "see",
    explanation: { en: "As soon as + Present Simple.", de: "As soon as + Present Simple." }
  }
];

const grammarRacerData = [
  {
    prompt: "When I ___ older, I will be a pilot.",
    options: ["get", "will get", "got"],
    correct: "get",
    explanation: "When + Present Simple."
  },
  {
    prompt: "I won't go out until it ___ raining.",
    options: ["stops", "will stop", "stopped"],
    correct: "stops",
    explanation: "Until + Present Simple."
  },
  {
    prompt: "After I ___ the book, I will lend it to you.",
    options: ["have read", "will read", "read"],
    correct: "have read",
    explanation: "After I have read (Present Perfect emphasizes completion)."
  }
];

export const futureTimeClauses = {
  id: 'b1_g25',
  title: {
    en: 'Future Time Clauses (When I do)',
    de: 'Zukünftige Zeitsätze (When I do)'
  },
  description: {
    en: "Rules for 'when', 'if', 'as soon as'. No 'will' in the time clause!",
    de: "Regeln für 'when', 'if', 'as soon as'. Kein 'will' im Nebensatz!"
  },
  
  components: {
    sentenceBuilder: <GrammarGame type="sentenceBuilder" data={sentenceBuilderData} />,
    fixTheMistake: <GrammarGame type="fixTheMistake" data={fixTheMistakeData} />,
    grammarRacer: <GrammarGame type="grammarRacer" data={grammarRacerData} />
  },

  content: {
    en: `
## Future Time Clauses: No 'Will' Allowed! 🚫🔮

When we talk about the future, we normally use **will**. But there is a very important rule for time clauses and condition clauses.

### 1. The Rule 📏

After words like **when, if, as soon as, until, before, after, while**, use a **PRESENT** tense to talk about the future. **Do NOT use 'will'.**

**Structure:**
- Main Clause (Future) + Time Clause (Present)
- Time Clause (Present) + Main Clause (Future)

### 2. Examples 🗣️

**When:**
- ❌ "I will call you when I **will get** home." (Wrong!)
- ✅ "I will call you when I **get** home." (Correct!)

**If:**
- ❌ "If it **will rain**, we will stay home."
- ✅ "If it **rains**, we will stay home."

**As soon as:**
- "I will tell you **as soon as** I **know**."

**Until:**
- "I will wait here **until** you **come** back."

### 3. Present Perfect in Time Clauses 🏁

You can also use the **Present Perfect** (have done) in the time clause to emphasize that the first action is **completed** before the second one starts.

- "When I **have read** the book, I will give it to you." (First finish reading, then give).
- "We will go out **after** it **has stopped** raining."

**Difference:**
- "When I **arrive**..." (Simple: The moment I arrive).
- "When I **have arrived**..." (Perfect: After my arrival is complete).
(Often there is little difference in meaning).

<div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">💡 Key List:</h3>
  <p>Don't use 'will' after:</p>
  <ul className="list-disc list-inside">
    <li>when</li>
    <li>if</li>
    <li>as soon as</li>
    <li>until / till</li>
    <li>before / after</li>
    <li>unless</li>
    <li>in case</li>
  </ul>
</div>

<GamePlaceholder id="sentenceBuilder" />

### 4. Exception: 'When' as a question word ❓

If 'when' introduces a question (direct or indirect), you CAN use 'will'.

- "When **will** you come?" (Question).
- "I don't know when he **will** arrive." (Indirect Question - not a time clause).

**Compare:**
1. "I will tell you when he **arrives**." (Time clause: I will tell you at that moment).
2. "Tell me when he **will** arrive." (Question: Tell me the time).

### 5. Common Mistakes ❌

**Mistake 1:** The double 'will'.
- ❌ "If he **will come**, I **will go**."
- ✅ "If he **comes**, I **will go**."

**Mistake 2:** Using 'will' after 'until'.
- ❌ "Wait until I **will come** back."
- ✅ "Wait until I **come** back."

<GamePlaceholder id="fixTheMistake" />

<div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">🎯 Summary:</h3>
  <ul className="list-disc list-inside space-y-1">
    <li>Main Clause: **will** (or imperative/modal).</li>
    <li>Time Clause (when/if/until): **Present Simple** (or Present Perfect).</li>
    <li>Never use **will** after **when/if** for future time references!</li>
  </ul>
</div>

---

### 🎮 Practice Arena

**🏎️ Grammar Racer: Future Time Clauses**
<GamePlaceholder id="grammarRacer" />

### 🎯 Practical Exercise

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border-2 border-green-300">
  <h3 className="font-bold text-green-800 dark:text-green-200 mb-4">📝 Combine Sentences</h3>
  <p className="mb-4">Make one sentence from two, using the word in brackets:</p>
  <ol className="list-decimal list-inside space-y-2">
    <li>I will arrive. Then I will call you. (when) -> "When I..."</li>
    <li>You will finish work. Then we will go for dinner. (as soon as)</li>
    <li>It will stop raining. Then I will go out. (until) -> "I won't..."</li>
  </ol>
</div>
`,
    de: `
## Zukünftige Zeitsätze: Kein 'Will' erlaubt! 🚫🔮

Wenn wir über die Zukunft sprechen, benutzen wir normalerweise **will**. Aber es gibt eine sehr wichtige Regel für Zeit- und Bedingungssätze.

### 1. Die Regel 📏

Nach Wörtern wie **when, if, as soon as, until, before, after, while**, benutze eine **GEGENWARTSFORM** (Present), um über die Zukunft zu sprechen. **Benutze NICHT 'will'.**

**Struktur:**
- Hauptsatz (Future) + Nebensatz (Present)
- Nebensatz (Present) + Hauptsatz (Future)

### 2. Beispiele 🗣️

**When:**
- ❌ "I will call you when I **will get** home." (Falsch!)
- ✅ "I will call you when I **get** home." (Richtig!)

**If:**
- ❌ "If it **will rain**, we will stay home."
- ✅ "If it **rains**, we will stay home."

**As soon as:**
- "I will tell you **as soon as** I **know**." (Sobald ich es weiß).

**Until:**
- "I will wait here **until** you **come** back." (Bis du zurückkommst).

### 3. Present Perfect in Zeitsätzen 🏁

Du kannst auch das **Present Perfect** (have done) im Nebensatz benutzen, um zu betonen, dass die erste Handlung **abgeschlossen** ist, bevor die zweite beginnt.

- "When I **have read** the book, I will give it to you." (Erst fertig lesen, dann geben).
- "We will go out **after** it **has stopped** raining."

**Unterschied:**
- "When I **arrive**..." (Simple: Der Moment, in dem ich ankomme).
- "When I **have arrived**..." (Perfect: Nachdem meine Ankunft abgeschlossen ist).
(Oft gibt es kaum einen Bedeutungsunterschied).

<div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">💡 Liste:</h3>
  <p>Kein 'will' nach:</p>
  <ul className="list-disc list-inside">
    <li>when</li>
    <li>if</li>
    <li>as soon as</li>
    <li>until / till</li>
    <li>before / after</li>
    <li>unless</li>
    <li>in case</li>
  </ul>
</div>

<GamePlaceholder id="sentenceBuilder" />

### 4. Ausnahme: 'When' als Fragewort ❓

Wenn 'when' eine Frage einleitet (direkt oder indirekt), DARFST du 'will' benutzen.

- "When **will** you come?" (Frage).
- "I don't know when he **will** arrive." (Indirekte Frage - kein Zeitsatz).

**Vergleiche:**
1. "I will tell you when he **arrives**." (Zeitsatz: Ich sage es dir in dem Moment).
2. "Tell me when he **will** arrive." (Frage: Sag mir die Uhrzeit).

### 5. Häufige Fehler ❌

**Fehler 1:** Das doppelte 'will'.
- ❌ "If he **will come**, I **will go**."
- ✅ "If he **comes**, I **will go**."

**Fehler 2:** 'Will' nach 'until' benutzen.
- ❌ "Wait until I **will come** back."
- ✅ "Wait until I **come** back."

<GamePlaceholder id="fixTheMistake" />

<div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">🎯 Zusammenfassung:</h3>
  <ul className="list-disc list-inside space-y-1">
    <li>Hauptsatz: **will** (oder Imperativ/Modal).</li>
    <li>Nebensatz (when/if/until): **Present Simple** (oder Present Perfect).</li>
    <li>Niemals **will** nach **when/if** für Zeitreferenzen!</li>
  </ul>
</div>

---

### 🎮 Trainings-Arena

**🏎️ Grammar Racer: Future Time Clauses**
<GamePlaceholder id="grammarRacer" />

### 🎯 Praktische Übung

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border-2 border-green-300">
  <h3 className="font-bold text-green-800 dark:text-green-200 mb-4">📝 Sätze verbinden</h3>
  <p className="mb-4">Mache einen Satz aus zwei, mit dem Wort in Klammern:</p>
  <ol className="list-decimal list-inside space-y-2">
    <li>I will arrive. Then I will call you. (when) -> "When I..."</li>
    <li>You will finish work. Then we will go for dinner. (as soon as)</li>
    <li>It will stop raining. Then I will go out. (until) -> "I won't..."</li>
  </ol>
</div>
`
  },
  task: {
    de: {
      title: 'Future Time Clauses',
      description: 'Verbinde Zukunftssätze mit when/if/until.',
      checklist: [
        { text: 'Satz mit "When I... (Present Simple)"', checked: false },
        { text: 'Satz mit "If it... (Present Simple)"', checked: false },
        { text: 'Satz mit "As soon as..."', checked: false }
      ]
    },
    en: {
      title: 'Future Time Clauses',
      description: 'Connect future sentences with when/if/until.',
      checklist: [
        { text: 'Sentence with "When I... (Present Simple)"', checked: false },
        { text: 'Sentence with "If it... (Present Simple)"', checked: false },
        { text: 'Sentence with "As soon as..."', checked: false }
      ]
    }
  },
  quiz: { de: [], en: [] }
};

