import React from 'react';
import GrammarGame from '../../../components/grammar-games/GrammarGame';

const sentenceBuilderData = [
  {
    prompt: { en: "The ___ of the new policy led to widespread protests.", de: "Die Einführung der neuen Politik führte zu weit verbreiteten Protesten." },
    words: ["implementation", "implement", "implementing", "implemented"],
    correct: "implementation",
    explanation: { en: "The verb 'implement' becomes the noun 'implementation'. Nominalization creates a more formal, academic tone.", de: "Das Verb 'implement' wird zum Substantiv 'implementation'. Nominalisierung erzeugt einen formelleren, akademischen Ton." }
  },
  {
    prompt: { en: "There is growing ___ that climate change is accelerating.", de: "Es gibt wachsende Besorgnis, dass der Klimawandel sich beschleunigt." },
    words: ["awareness", "aware", "awaring", "awaredom"],
    correct: "awareness",
    explanation: { en: "The adjective 'aware' becomes the noun 'awareness' (+ -ness). This is a common adjective-to-noun pattern.", de: "Das Adjektiv 'aware' wird zum Substantiv 'awareness' (+ -ness). Das ist ein häufiges Adjektiv-zu-Substantiv-Muster." }
  },
  {
    prompt: { en: "The ___ to cooperate resulted in the project's failure.", de: "Die Weigerung zu kooperieren führte zum Scheitern des Projekts." },
    words: ["refusal", "refuse", "refusing", "refused"],
    correct: "refusal",
    explanation: { en: "'Refuse' (verb) → 'refusal' (noun). The suffix -al converts verbs into nouns.", de: "'Refuse' (Verb) → 'refusal' (Substantiv). Das Suffix -al wandelt Verben in Substantive um." }
  },
  {
    prompt: { en: "The ___ of the evidence convinced the jury.", de: "Die Stärke der Beweislage überzeugte die Geschworenen." },
    words: ["strength", "strong", "strongly", "strengthen"],
    correct: "strength",
    explanation: { en: "The adjective 'strong' becomes the noun 'strength'. This is an irregular nominalization pattern.", de: "Das Adjektiv 'strong' wird zum Substantiv 'strength'. Das ist ein unregelmäßiges Nominalisierungsmuster." }
  },
  {
    prompt: { en: "The government's ___ to invest in education has been widely praised.", de: "Die Entscheidung der Regierung, in Bildung zu investieren, wurde weithin gelobt." },
    words: ["decision", "decide", "deciding", "decisive"],
    correct: "decision",
    explanation: { en: "'Decide' (verb) → 'decision' (noun). The suffix -ion/-tion is one of the most common nominalization patterns.", de: "'Decide' (Verb) → 'decision' (Substantiv). Das Suffix -ion/-tion ist eines der häufigsten Nominalisierungsmuster." }
  },
  {
    prompt: { en: "The ___ of the findings confirmed previous research.", de: "Die Zuverlässigkeit der Ergebnisse bestätigte frühere Forschung." },
    words: ["reliability", "reliable", "reliably", "rely"],
    correct: "reliability",
    explanation: { en: "'Reliable' (adj) → 'reliability' (noun). The suffix -ity converts adjectives into abstract nouns.", de: "'Reliable' (Adj) → 'reliability' (Substantiv). Das Suffix -ity wandelt Adjektive in abstrakte Substantive um." }
  }
];

const fixTheMistakeData = [
  {
    sentence: "The important of education cannot be overstated.",
    mistakeIndex: 1,
    correction: "importance",
    explanation: { en: "The adjective 'important' should be nominalized as 'importance' (-ance suffix). 'Important' is an adjective, not a noun.", de: "Das Adjektiv 'important' sollte als 'importance' (-ance Suffix) nominalisiert werden. 'Important' ist ein Adjektiv, kein Substantiv." }
  },
  {
    sentence: "His fail to meet the deadline caused serious problems.",
    mistakeIndex: 1,
    correction: "failure",
    explanation: { en: "'Fail' is a verb. The correct noun form is 'failure': 'His failure to meet the deadline...'", de: "'Fail' ist ein Verb. Die korrekte Substantivform ist 'failure': 'His failure to meet the deadline...'" }
  },
  {
    sentence: "The discover of penicillin revolutionized medicine.",
    mistakeIndex: 1,
    correction: "discovery",
    explanation: { en: "'Discover' is a verb. The noun form is 'discovery' (-y suffix): 'The discovery of penicillin...'", de: "'Discover' ist ein Verb. Die Substantivform ist 'discovery' (-y Suffix): 'The discovery of penicillin...'" }
  },
  {
    sentence: "There has been a significant reduce in pollution levels.",
    mistakeIndex: 5,
    correction: "reduction",
    explanation: { en: "'Reduce' is a verb. The noun form is 'reduction' (-tion suffix): 'a significant reduction in pollution'.", de: "'Reduce' ist ein Verb. Die Substantivform ist 'reduction' (-tion Suffix): 'a significant reduction in pollution'." }
  },
  {
    sentence: "The maintain of the equipment is essential for safety.",
    mistakeIndex: 1,
    correction: "maintenance",
    explanation: { en: "'Maintain' is a verb. The noun form is 'maintenance' (irregular pattern): 'The maintenance of the equipment...'", de: "'Maintain' ist ein Verb. Die Substantivform ist 'maintenance' (unregelmäßiges Muster): 'The maintenance of the equipment...'" }
  }
];

const grammarRacerData = [
  {
    prompt: "The ___ between the two countries improved over time.",
    options: ["relationship", "relate", "relative"],
    correct: "relationship",
    explanation: "'Relate' (verb) → 'relationship' (noun). The -ship suffix denotes a state or condition."
  },
  {
    prompt: "His ___ to violence was well known in the community.",
    options: ["opposition", "oppose", "opposite"],
    correct: "opposition",
    explanation: "'Oppose' (verb) → 'opposition' (noun). -tion/-sion is the most productive suffix."
  },
  {
    prompt: "The ___ of the problem required immediate action.",
    options: ["severity", "severe", "severely"],
    correct: "severity",
    explanation: "'Severe' (adjective) → 'severity' (noun). The -ity suffix is common for abstract qualities."
  },
  {
    prompt: "We need to ensure the ___ of the data before publishing.",
    options: ["accuracy", "accurate", "accurately"],
    correct: "accuracy",
    explanation: "'Accurate' (adjective) → 'accuracy' (noun). The -cy suffix works with -ate adjectives."
  }
];

export const nominalization = {
  id: 'c1_g3',
  title: {
    en: 'Nominalization',
    de: 'Nominalisierung'
  },
  description: {
    en: "Turn verbs and adjectives into nouns for formal, academic writing.",
    de: "Verben und Adjektive in Substantive umwandeln für formelles, akademisches Schreiben."
  },
  components: {
    sentenceBuilder: <GrammarGame type="sentenceBuilder" data={sentenceBuilderData} />,
    fixTheMistake: <GrammarGame type="fixTheMistake" data={fixTheMistakeData} />,
    grammarRacer: <GrammarGame type="grammarRacer" data={grammarRacerData} />,
  },
  content: {
    en: `
## Nominalization 📖✨

**Nominalization** is the process of turning **verbs** and **adjectives** into **nouns**. It is one of the most important features of formal and academic English.

### 1. Why Nominalize? 🎯

Compare these pairs:

| Informal (verb-based) | Formal (nominalized) |
|---|---|
| We need to **investigate** the issue. | An **investigation** of the issue is needed. |
| The team **failed** to deliver. | The team's **failure** to deliver... |
| It is **important** that we act now. | The **importance** of acting now... |
| They **decided** to restructure. | Their **decision** to restructure... |

Nominalization makes writing:
- ✅ More **formal** and **impersonal**
- ✅ More **concise** (packing more information into fewer words)
- ✅ More **objective** (removing personal agency)
- ✅ Easier to use as **subjects** of sentences

### 2. Common Verb → Noun Patterns 🔧

| Suffix | Verb → Noun | Examples |
|---|---|---|
| **-tion / -sion** | decide → decision | investigate → investigation, conclude → conclusion |
| **-ment** | develop → development | achieve → achievement, manage → management |
| **-al** | refuse → refusal | arrive → arrival, approve → approval |
| **-ance / -ence** | perform → performance | exist → existence, prefer → preference |
| **-ure** | fail → failure | expose → exposure, depart → departure |
| **-ing** | understand → understanding | build → building, train → training |
| **-y** | discover → discovery | deliver → delivery, recover → recovery |

### 3. Common Adjective → Noun Patterns 📋

| Suffix | Adjective → Noun | Examples |
|---|---|---|
| **-ness** | aware → awareness | sad → sadness, dark → darkness |
| **-ity / -ty** | complex → complexity | reliable → reliability, safe → safety |
| **-ance / -ence** | important → importance | intelligent → intelligence, relevant → relevance |
| **-th** | strong → strength | wide → width, grow → growth |
| **-cy** | accurate → accuracy | frequent → frequency, private → privacy |

<div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">💡 Irregular Nominalizations:</h3>
  <p>Some common ones don't follow patterns:</p>
  <p>• choose → <strong>choice</strong></p>
  <p>• lose → <strong>loss</strong></p>
  <p>• prove → <strong>proof</strong></p>
  <p>• succeed → <strong>success</strong></p>
  <p>• maintain → <strong>maintenance</strong></p>
</div>

<GamePlaceholder id="sentenceBuilder" />

### 4. Nominalization in Practice ✍️

**Transforming sentences:**

1. **"The researchers discovered a new compound."**
   → "The **discovery** of a new compound was made by the researchers."

2. **"We analysed the data and found it was significant."**
   → "**Analysis** of the data revealed its **significance**."

3. **"They refused to cooperate, which complicated the process."**
   → "Their **refusal** to cooperate led to **complications** in the process."

<div className="bg-amber-50 dark:bg-amber-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">⚠️ Don't Over-Nominalize!</h3>
  <p>Too much nominalization makes writing <strong>dense and difficult</strong> to read:</p>
  <p>❌ "The implementation of the optimization of the utilization of resources..."</p>
  <p>✅ "Implementing ways to optimize how resources are used..."</p>
  <p>Balance is key — use nominalization strategically, not everywhere.</p>
</div>

### 5. Common Mistakes ❌

**Mistake 1:** Using the verb form where a noun is needed.
- ❌ "The **discover** of DNA changed biology."
- ✅ "The **discovery** of DNA changed biology."

**Mistake 2:** Using the wrong suffix.
- ❌ "The **importantness** of this issue..."
- ✅ "The **importance** of this issue..."

**Mistake 3:** Confusing related forms.
- ❌ "We need more **informations**." (uncountable!)
- ✅ "We need more **information**."

<GamePlaceholder id="fixTheMistake" />

<div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">🎯 Summary:</h3>
  <ul className="list-disc list-inside space-y-1">
    <li><strong>Nominalization</strong> converts verbs/adjectives into nouns for formal writing.</li>
    <li>Key suffixes: <strong>-tion, -ment, -ness, -ity, -ance, -al, -ure</strong></li>
    <li>Makes writing more <strong>formal, concise, and objective</strong>.</li>
    <li>Don't overuse it — balance with clear, active sentences.</li>
  </ul>
</div>

---

### 🎮 Practice Arena
<GamePlaceholder id="grammarRacer" />
`,
    de: `
## Nominalisierung 📖✨

**Nominalisierung** ist der Prozess, **Verben** und **Adjektive** in **Substantive** umzuwandeln. Sie ist eines der wichtigsten Merkmale des formellen und akademischen Englisch.

### 1. Warum nominalisieren? 🎯

Vergleiche diese Paare:

| Informell (verb-basiert) | Formell (nominalisiert) |
|---|---|
| We need to **investigate** the issue. | An **investigation** of the issue is needed. |
| The team **failed** to deliver. | The team's **failure** to deliver... |
| It is **important** that we act now. | The **importance** of acting now... |
| They **decided** to restructure. | Their **decision** to restructure... |

Nominalisierung macht Texte:
- ✅ **Formeller** und **unpersönlicher**
- ✅ **Prägnanter** (mehr Information in weniger Wörtern)
- ✅ **Objektiver** (entfernt persönliche Handlungsträger)
- ✅ Leichter als **Subjekte** von Sätzen verwendbar

### 2. Häufige Verb → Substantiv-Muster 🔧

| Suffix | Verb → Substantiv | Beispiele |
|---|---|---|
| **-tion / -sion** | decide → decision | investigate → investigation, conclude → conclusion |
| **-ment** | develop → development | achieve → achievement, manage → management |
| **-al** | refuse → refusal | arrive → arrival, approve → approval |
| **-ance / -ence** | perform → performance | exist → existence, prefer → preference |
| **-ure** | fail → failure | expose → exposure, depart → departure |
| **-ing** | understand → understanding | build → building, train → training |
| **-y** | discover → discovery | deliver → delivery, recover → recovery |

### 3. Häufige Adjektiv → Substantiv-Muster 📋

| Suffix | Adjektiv → Substantiv | Beispiele |
|---|---|---|
| **-ness** | aware → awareness | sad → sadness, dark → darkness |
| **-ity / -ty** | complex → complexity | reliable → reliability, safe → safety |
| **-ance / -ence** | important → importance | intelligent → intelligence, relevant → relevance |
| **-th** | strong → strength | wide → width, grow → growth |
| **-cy** | accurate → accuracy | frequent → frequency, private → privacy |

<div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">💡 Unregelmäßige Nominalisierungen:</h3>
  <p>Einige häufige folgen keinem Muster:</p>
  <p>• choose → <strong>choice</strong></p>
  <p>• lose → <strong>loss</strong></p>
  <p>• prove → <strong>proof</strong></p>
  <p>• succeed → <strong>success</strong></p>
  <p>• maintain → <strong>maintenance</strong></p>
</div>

<GamePlaceholder id="sentenceBuilder" />

### 4. Nominalisierung in der Praxis ✍️

**Sätze umformen:**

1. **"The researchers discovered a new compound."**
   → "The **discovery** of a new compound was made by the researchers."

2. **"We analysed the data and found it was significant."**
   → "**Analysis** of the data revealed its **significance**."

3. **"They refused to cooperate, which complicated the process."**
   → "Their **refusal** to cooperate led to **complications** in the process."

<div className="bg-amber-50 dark:bg-amber-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">⚠️ Nicht über-nominalisieren!</h3>
  <p>Zu viel Nominalisierung macht Texte <strong>dicht und schwer</strong> lesbar:</p>
  <p>❌ "The implementation of the optimization of the utilization of resources..."</p>
  <p>✅ "Implementing ways to optimize how resources are used..."</p>
  <p>Balance ist wichtig — Nominalisierung strategisch einsetzen, nicht überall.</p>
</div>

### 5. Häufige Fehler ❌

**Fehler 1:** Die Verbform verwenden, wo ein Substantiv gebraucht wird.
- ❌ "The **discover** of DNA changed biology."
- ✅ "The **discovery** of DNA changed biology."

**Fehler 2:** Das falsche Suffix verwenden.
- ❌ "The **importantness** of this issue..."
- ✅ "The **importance** of this issue..."

**Fehler 3:** Verwandte Formen verwechseln.
- ❌ "We need more **informations**." (unzählbar!)
- ✅ "We need more **information**."

<GamePlaceholder id="fixTheMistake" />

<div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">🎯 Zusammenfassung:</h3>
  <ul className="list-disc list-inside space-y-1">
    <li><strong>Nominalisierung</strong> wandelt Verben/Adjektive in Substantive für formelles Schreiben um.</li>
    <li>Wichtige Suffixe: <strong>-tion, -ment, -ness, -ity, -ance, -al, -ure</strong></li>
    <li>Macht Texte <strong>formeller, prägnanter und objektiver</strong>.</li>
    <li>Nicht übermäßig verwenden — mit klaren, aktiven Sätzen ausbalancieren.</li>
  </ul>
</div>

---

### 🎮 Trainings-Arena
<GamePlaceholder id="grammarRacer" />
`
  },
  task: {
    en: {
      title: 'Nominalization',
      description: 'Practice converting verbs and adjectives into nouns.',
      checklist: [
        { text: 'Transform 5 informal sentences into formal ones using nominalization', checked: false },
        { text: 'Create a table of 10 verb → noun conversions with their suffixes', checked: false },
        { text: 'Rewrite an email from casual to formal style using nominalization', checked: false }
      ]
    },
    de: {
      title: 'Nominalisierung',
      description: 'Übe das Umwandeln von Verben und Adjektiven in Substantive.',
      checklist: [
        { text: 'Wandle 5 informelle Sätze mit Nominalisierung in formelle um', checked: false },
        { text: 'Erstelle eine Tabelle mit 10 Verb → Substantiv-Umwandlungen und ihren Suffixen', checked: false },
        { text: 'Schreibe eine E-Mail von lässig zu formell um, indem du Nominalisierung verwendest', checked: false }
      ]
    }
  },
  quiz: { en: [], de: [] }
};
