import React from 'react';
import GrammarGame from '../../../components/grammar-games/GrammarGame';

const sentenceBuilderData = [
  {
    prompt: { en: "The data ___ collected over a period of three years.", de: "Die Daten wurden über einen Zeitraum von drei Jahren gesammelt." },
    words: ["were", "was", "has", "have"],
    correct: "were",
    explanation: { en: "Passive voice is standard in academic writing for objectivity: 'The data were collected' (not 'We collected the data').", de: "Passiv ist Standard in akademischer Schrift für Objektivität: 'The data were collected'." }
  },
  {
    prompt: { en: "The ___ of these findings has significant implications for future research.", de: "Die Zuverlässigkeit dieser Ergebnisse hat bedeutende Implikationen für zukünftige Forschung." },
    words: ["reliability", "reliable", "reliably", "relied"],
    correct: "reliability",
    explanation: { en: "Nominalization: 'reliable' (adj) becomes 'reliability' (noun). Academic writing favors nouns over adjectives/verbs.", de: "Nominalisierung: 'reliable' (Adj) wird zu 'reliability' (Substantiv). Akademische Schrift bevorzugt Substantive." }
  },
  {
    prompt: { en: "It ___ be argued that the current system is no longer fit for purpose.", de: "Es könnte argumentiert werden, dass das derzeitige System nicht mehr zweckmäßig ist." },
    words: ["could", "must", "will", "shall"],
    correct: "could",
    explanation: { en: "'It could be argued' is a classic academic hedge — impersonal, cautious, and objective.", de: "'It could be argued' ist ein klassischer akademischer Hedge — unpersönlich, vorsichtig und objektiv." }
  },
  {
    prompt: { en: "The relationship between poverty and ___ outcomes has been extensively studied.", de: "Der Zusammenhang zwischen Armut und Bildungsergebnissen wurde umfassend untersucht." },
    words: ["educational", "education", "educating", "educated"],
    correct: "educational",
    explanation: { en: "Complex noun phrase: 'educational outcomes' — academic English stacks nouns and adjectives into dense noun phrases.", de: "Komplexe Nominalphrase: 'educational outcomes' — akademisches Englisch stapelt Nomen und Adjektive." }
  },
  {
    prompt: { en: "These results are ___ with previous findings in the field.", de: "Diese Ergebnisse stimmen mit früheren Befunden in dem Bereich überein." },
    words: ["consistent", "same", "equal", "similar"],
    correct: "consistent",
    explanation: { en: "'Consistent with' is a formal academic expression for agreement between findings.", de: "'Consistent with' ist ein formeller akademischer Ausdruck für Übereinstimmung zwischen Befunden." }
  }
];

const fixTheMistakeData = [
  {
    sentence: "We found out that the treatment works really well for most patients.",
    mistakeIndex: 0,
    correction: "It was found that",
    explanation: { en: "Academic writing avoids first person ('We'). Use impersonal constructions: 'It was found that...' or 'The findings indicate...'", de: "Akademische Schrift vermeidet erste Person ('We'). Verwende unpersönliche Konstruktionen." }
  },
  {
    sentence: "The experiment totally proves that this theory is right.",
    mistakeIndex: 2,
    correction: "strongly suggests",
    explanation: { en: "Avoid 'totally' (too informal) and 'proves' (too absolute). Use 'strongly suggests' — appropriate academic hedging.", de: "Vermeide 'totally' (zu informell) und 'proves' (zu absolut). Verwende 'strongly suggests'." }
  },
  {
    sentence: "Lots of researchers have looked into this topic before.",
    mistakeIndex: 0,
    correction: "Numerous",
    explanation: { en: "'Lots of' is informal. Use 'Numerous', 'A significant number of', or 'Many' in academic writing.", de: "'Lots of' ist informell. Verwende 'Numerous' oder 'A significant number of'." }
  },
  {
    sentence: "The thing is that climate change affects poor countries more.",
    mistakeIndex: 1,
    correction: "key finding is",
    explanation: { en: "'The thing is' is too informal. Use 'The key finding is', 'The central issue is', or 'Notably'.", de: "'The thing is' ist zu informell. Verwende 'The key finding is' oder 'The central issue is'." }
  }
];

const grammarRacerData = [
  {
    prompt: "The participants ___ randomly assigned to two groups.",
    options: ["were", "got", "have"],
    correct: "were",
    explanation: "Passive voice for objectivity: 'were assigned' is standard in academic methodology sections."
  },
  {
    prompt: "The ___ of the sample limits the generalizability of the findings.",
    options: ["size", "big", "large"],
    correct: "size",
    explanation: "Nominalization: 'The size of the sample' is more formal than 'The sample is small'."
  },
  {
    prompt: "It is ___ noting that these results have not been replicated.",
    options: ["worth", "well", "good"],
    correct: "worth",
    explanation: "'It is worth noting that...' is a formal academic expression to highlight important caveats."
  },
  {
    prompt: "This study ___ to contribute to the growing body of literature.",
    options: ["aims", "wants", "tries"],
    correct: "aims",
    explanation: "'Aims to' is formal academic language. 'Wants to' and 'tries to' are too informal."
  }
];

export const academicWriting = {
  id: 'c1_g10',
  title: {
    en: 'Academic Writing Structures',
    de: 'Akademische Schreibstrukturen'
  },
  description: {
    en: "Master passive for objectivity, hedging, nominalizations, and complex noun phrases in academic English.",
    de: "Passiv für Objektivität, Hedging, Nominalisierungen und komplexe Nominalphrasen in akademischem Englisch meistern."
  },
  components: {
    sentenceBuilder: <GrammarGame type="sentenceBuilder" data={sentenceBuilderData} />,
    fixTheMistake: <GrammarGame type="fixTheMistake" data={fixTheMistakeData} />,
    grammarRacer: <GrammarGame type="grammarRacer" data={grammarRacerData} />,
  },
  content: {
    en: `
## Academic Writing Structures ✍️🎓

Academic English has its own grammar conventions that differ from everyday English. At C1 level, mastering these structures is essential for **essays, research papers, reports, and formal presentations**.

### 1. Passive Voice for Objectivity 🔬

Academic writing prefers the passive to sound **impersonal and objective**:

| Too Personal | Academic (Passive) |
|---|---|
| **We** conducted the experiment. | The experiment **was conducted**. |
| **I** analyzed the data. | The data **were analyzed**. |
| **Researchers** have found that... | **It has been found** that... |

<div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">💡 When to use passive in academic writing:</h3>
  <p>• <strong>Methods sections:</strong> "Participants were recruited..." / "Data were collected..."</p>
  <p>• <strong>Reporting findings:</strong> "A significant difference was observed..."</p>
  <p>• <strong>Attributing ideas:</strong> "It has been argued that..." / "It is widely accepted that..."</p>
  <p><strong>Note:</strong> Modern academic style allows limited first person ("We argue that..."), but passive is still dominant in many fields.</p>
</div>

### 2. Hedging for Caution 🌫️

Academic writing avoids absolute claims:

| Too Absolute | Hedged |
|---|---|
| X **causes** Y. | X **appears to influence** Y. |
| This **proves**... | This **suggests** / **indicates**... |
| **All** studies show... | **Most** / **The majority of** studies show... |
| It **is** the best approach. | It **may be** / **could be** the most effective approach. |

### 3. Nominalization for Formality 📚

Convert verbs and adjectives to nouns for a more formal, dense style:

| Informal (Verb-Based) | Academic (Nominalized) |
|---|---|
| We **decided** to change... | The **decision** to change... |
| It is **important** to note... | The **importance** of noting... |
| They **failed** to comply... | Their **failure** to comply... |
| Because X **developed**... | The **development** of X... |

<GamePlaceholder id="sentenceBuilder" />

### 4. Complex Noun Phrases 🧱

Academic English packs information into **dense noun phrases** with pre- and post-modifiers:

**Structure:** (determiner) + (adjective/noun modifiers) + **head noun** + (of-phrase / relative clause / participle)

Examples:
- "**The** recently published **findings** of the longitudinal study..."
- "**A** significant **increase** in global surface temperatures..."
- "**The** well-documented **relationship** between socioeconomic status and health outcomes..."
- "**Several** previously unidentified **risk factors** associated with cardiovascular disease..."

### 5. Impersonal Constructions 🎭

Avoid "I think" — use impersonal structures:

| Personal | Impersonal/Academic |
|---|---|
| I think that... | **It could be argued** that... |
| I believe... | **There is reason to believe** that... |
| You can see that... | **It is evident** that... / **It can be observed** that... |
| People say... | **It is widely held** that... |

### 6. Common Mistakes ❌

**Mistake 1:** Using informal language.
- ❌ "**Lots of** people think..."
- ✅ "**A considerable number of** scholars argue..."

**Mistake 2:** Being too certain.
- ❌ "This **proves** the hypothesis."
- ✅ "These findings **lend support to** the hypothesis."

**Mistake 3:** Using contractions.
- ❌ "The data **doesn't** support..."
- ✅ "The data **does not** support..."

<GamePlaceholder id="fixTheMistake" />

<div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">🎯 Summary:</h3>
  <ul className="list-disc list-inside space-y-1">
    <li><strong>Passive voice:</strong> "It was found that..." — for objectivity</li>
    <li><strong>Hedging:</strong> "suggests", "may", "appears to" — for caution</li>
    <li><strong>Nominalization:</strong> "decision", "importance", "failure" — for formality</li>
    <li><strong>Complex noun phrases:</strong> Dense pre/post-modification — for conciseness</li>
    <li><strong>Impersonal constructions:</strong> "It could be argued" — avoid first person</li>
  </ul>
</div>

---

### 🎮 Practice Arena
<GamePlaceholder id="grammarRacer" />
`,
    de: `
## Akademische Schreibstrukturen ✍️🎓

Akademisches Englisch hat eigene Grammatikkonventionen, die sich vom Alltagsenglisch unterscheiden. Auf C1-Niveau ist die Beherrschung dieser Strukturen für **Aufsätze, Forschungsarbeiten, Berichte und formelle Präsentationen** unverzichtbar.

### 1. Passiv für Objektivität 🔬

Akademische Schrift bevorzugt das Passiv, um **unpersönlich und objektiv** zu klingen:

| Zu persönlich | Akademisch (Passiv) |
|---|---|
| **We** conducted the experiment. | The experiment **was conducted**. |
| **I** analyzed the data. | The data **were analyzed**. |
| **Researchers** have found that... | **It has been found** that... |

<div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">💡 Wann Passiv in akademischer Schrift:</h3>
  <p>• <strong>Methodenabschnitte:</strong> "Participants were recruited..."</p>
  <p>• <strong>Ergebnisse berichten:</strong> "A significant difference was observed..."</p>
  <p>• <strong>Ideen zuordnen:</strong> "It has been argued that..."</p>
  <p><strong>Hinweis:</strong> Moderner akademischer Stil erlaubt begrenzte erste Person, aber Passiv dominiert noch.</p>
</div>

### 2. Hedging für Vorsicht 🌫️

Akademische Schrift vermeidet absolute Behauptungen:

| Zu absolut | Abgeschwächt |
|---|---|
| X **causes** Y. | X **appears to influence** Y. |
| This **proves**... | This **suggests** / **indicates**... |
| **All** studies show... | **Most** studies show... |
| It **is** the best approach. | It **may be** the most effective approach. |

### 3. Nominalisierung für Formalität 📚

Verben und Adjektive in Substantive umwandeln für einen formelleren, dichteren Stil:

| Informell (Verb-basiert) | Akademisch (Nominalisiert) |
|---|---|
| We **decided** to change... | The **decision** to change... |
| It is **important** to note... | The **importance** of noting... |
| They **failed** to comply... | Their **failure** to comply... |

<GamePlaceholder id="sentenceBuilder" />

### 4. Komplexe Nominalphrasen 🧱

Akademisches Englisch packt Information in **dichte Nominalphrasen**:

**Struktur:** (Determiner) + (Adjektiv/Nomen-Modifizierer) + **Kernnomen** + (of-Phrase / Relativsatz / Partizip)

Beispiele:
- "**The** recently published **findings** of the longitudinal study..."
- "**A** significant **increase** in global surface temperatures..."
- "**The** well-documented **relationship** between socioeconomic status and health outcomes..."

### 5. Unpersönliche Konstruktionen 🎭

Vermeide "I think" — verwende unpersönliche Strukturen:

| Persönlich | Unpersönlich/Akademisch |
|---|---|
| I think that... | **It could be argued** that... |
| I believe... | **There is reason to believe** that... |
| You can see that... | **It is evident** that... |
| People say... | **It is widely held** that... |

### 6. Häufige Fehler ❌

**Fehler 1:** Informelle Sprache verwenden.
- ❌ "**Lots of** people think..."
- ✅ "**A considerable number of** scholars argue..."

**Fehler 2:** Zu sicher sein.
- ❌ "This **proves** the hypothesis."
- ✅ "These findings **lend support to** the hypothesis."

**Fehler 3:** Kontraktionen verwenden.
- ❌ "The data **doesn't** support..."
- ✅ "The data **does not** support..."

<GamePlaceholder id="fixTheMistake" />

<div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">🎯 Zusammenfassung:</h3>
  <ul className="list-disc list-inside space-y-1">
    <li><strong>Passiv:</strong> "It was found that..." — für Objektivität</li>
    <li><strong>Hedging:</strong> "suggests", "may", "appears to" — für Vorsicht</li>
    <li><strong>Nominalisierung:</strong> "decision", "importance" — für Formalität</li>
    <li><strong>Komplexe Nominalphrasen:</strong> Dichte Modifikation — für Kürze</li>
    <li><strong>Unpersönliche Konstruktionen:</strong> "It could be argued" — erste Person vermeiden</li>
  </ul>
</div>

---

### 🎮 Trainings-Arena
<GamePlaceholder id="grammarRacer" />
`
  },
  task: {
    en: {
      title: 'Academic Writing Structures',
      description: 'Practice using academic writing conventions in English.',
      checklist: [
        { text: 'Rewrite 5 informal sentences in academic style using passive, hedging, and nominalization', checked: false },
        { text: 'Write an academic paragraph with at least 3 complex noun phrases', checked: false },
        { text: 'Transform personal opinions into impersonal academic constructions', checked: false }
      ]
    },
    de: {
      title: 'Akademische Schreibstrukturen',
      description: 'Übe die Verwendung akademischer Schreibkonventionen auf Englisch.',
      checklist: [
        { text: 'Schreibe 5 informelle Sätze im akademischen Stil um', checked: false },
        { text: 'Schreibe einen akademischen Absatz mit mindestens 3 komplexen Nominalphrasen', checked: false },
        { text: 'Wandle persönliche Meinungen in unpersönliche akademische Konstruktionen um', checked: false }
      ]
    }
  },
  quiz: { en: [], de: [] }
};
