import React from 'react';
import GrammarGame from '../../../components/grammar-games/GrammarGame';

const sentenceBuilderData = [
  {
    prompt: { en: "The project was approved ___ the concerns raised by the committee.", de: "Das Projekt wurde trotz der vom Ausschuss geäußerten Bedenken genehmigt." },
    words: ["notwithstanding", "whereby", "inasmuch", "henceforth"],
    correct: "notwithstanding",
    explanation: { en: "'Notwithstanding' = despite / in spite of. Formal synonym for 'despite'.", de: "'Notwithstanding' = trotz. Formelles Synonym für 'despite'." }
  },
  {
    prompt: { en: "They signed a contract ___ all disputes would be settled in court.", de: "Sie unterzeichneten einen Vertrag, wonach alle Streitigkeiten vor Gericht beigelegt werden." },
    words: ["whereby", "albeit", "owing to", "inasmuch as"],
    correct: "whereby",
    explanation: { en: "'Whereby' = by which / through which. Used to explain HOW something works.", de: "'Whereby' = wodurch / wonach. Wird verwendet, um zu erklären, WIE etwas funktioniert." }
  },
  {
    prompt: { en: "The event was cancelled ___ the severe weather warnings.", de: "Die Veranstaltung wurde wegen der schweren Unwetterwarnungen abgesagt." },
    words: ["owing to", "albeit", "whereby", "henceforth"],
    correct: "owing to",
    explanation: { en: "'Owing to' = because of / due to. Formal way to state a reason.", de: "'Owing to' = aufgrund von / wegen. Formelle Art, einen Grund zu nennen." }
  },
  {
    prompt: { en: "The plan was ambitious, ___ somewhat unrealistic.", de: "Der Plan war ehrgeizig, wenn auch etwas unrealistisch." },
    words: ["albeit", "whereby", "henceforth", "owing to"],
    correct: "albeit",
    explanation: { en: "'Albeit' = although / even though. A concessive conjunction for formal contexts.", de: "'Albeit' = obwohl / wenn auch. Eine konzessive Konjunktion für formelle Kontexte." }
  },
  {
    prompt: { en: "All employees must badge in; ___, access will be monitored electronically.", de: "Alle Mitarbeiter müssen sich ausweisen; von nun an wird der Zugang elektronisch überwacht." },
    words: ["henceforth", "whereby", "albeit", "inasmuch as"],
    correct: "henceforth",
    explanation: { en: "'Henceforth' = from this time onward. Very formal, used in rules and announcements.", de: "'Henceforth' = von nun an. Sehr formell, in Regeln und Ankündigungen verwendet." }
  },
  {
    prompt: { en: "She succeeded ___ her determination and hard work.", de: "Sie hatte Erfolg dank ihrer Entschlossenheit und harten Arbeit." },
    words: ["by virtue of", "albeit", "whereby", "henceforth"],
    correct: "by virtue of",
    explanation: { en: "'By virtue of' = because of / thanks to. Emphasises a quality or factor.", de: "'By virtue of' = aufgrund von / kraft. Betont eine Eigenschaft oder einen Faktor." }
  }
];

const fixTheMistakeData = [
  {
    sentence: "The flight was delayed because to the heavy fog.",
    mistakeIndex: 4,
    correction: "owing to",
    explanation: { en: "'Because to' doesn't exist. Use 'owing to' or 'due to' + noun: 'owing to the heavy fog'.", de: "'Because to' gibt es nicht. Verwende 'owing to' oder 'due to' + Nomen: 'owing to the heavy fog'." }
  },
  {
    sentence: "He is a skilled worker, albeit that he lacks experience.",
    mistakeIndex: 6,
    correction: "albeit inexperienced",
    explanation: { en: "'Albeit' is NOT followed by 'that' + clause. Use: 'albeit + adjective/short phrase': 'albeit inexperienced'.", de: "'Albeit' wird NICHT von 'that' + Satz gefolgt. Verwende: 'albeit + Adjektiv/kurze Phrase': 'albeit inexperienced'." }
  },
  {
    sentence: "They established a system whereby to resolve complaints quickly.",
    mistakeIndex: 5,
    correction: "whereby complaints would be resolved",
    explanation: { en: "'Whereby' introduces a clause (with subject + verb), not an infinitive: 'whereby complaints would be resolved quickly'.", de: "'Whereby' leitet einen Satz ein (mit Subjekt + Verb), keinen Infinitiv." }
  },
  {
    sentence: "Henceforward from today, all meetings will be recorded.",
    mistakeIndex: 0,
    correction: "Henceforth,",
    explanation: { en: "'Henceforth' already means 'from now on'. Adding 'from today' is redundant. Simply use 'Henceforth,'.", de: "'Henceforth' bedeutet bereits 'von nun an'. 'from today' ist redundant." }
  }
];

const grammarRacerData = [
  {
    prompt: "The decision was made ___ the objections of several board members.",
    options: ["notwithstanding", "whereby", "henceforth"],
    correct: "notwithstanding",
    explanation: "'Notwithstanding' = despite. The decision was made despite the objections."
  },
  {
    prompt: "He got the promotion ___ his excellent track record.",
    options: ["by virtue of", "albeit", "whereby"],
    correct: "by virtue of",
    explanation: "'By virtue of' = because of / thanks to his track record."
  },
  {
    prompt: "The delay was ___ a technical malfunction.",
    options: ["on account of", "whereby", "albeit"],
    correct: "on account of",
    explanation: "'On account of' = because of. Formal way to state the cause."
  },
  {
    prompt: "She accepted the job, ___ reluctantly.",
    options: ["albeit", "whereby", "henceforth"],
    correct: "albeit",
    explanation: "'Albeit reluctantly' = although reluctantly. Concessive meaning."
  },
  {
    prompt: "___, all data must be encrypted before transmission.",
    options: ["Henceforth", "Albeit", "Whereby"],
    correct: "Henceforth",
    explanation: "'Henceforth' = from now on. Used in formal rules and regulations."
  }
];

export const advancedLinking = {
  id: 'b2_g16',
  title: {
    en: 'Advanced Linking Words',
    de: 'Fortgeschrittene Verbindungswörter'
  },
  description: {
    en: "Master formal connectors: notwithstanding, whereby, albeit, henceforth, owing to, by virtue of.",
    de: "Formelle Konnektoren meistern: notwithstanding, whereby, albeit, henceforth, owing to, by virtue of."
  },
  components: {
    sentenceBuilder: <GrammarGame type="sentenceBuilder" data={sentenceBuilderData} />,
    fixTheMistake: <GrammarGame type="fixTheMistake" data={fixTheMistakeData} />,
    grammarRacer: <GrammarGame type="grammarRacer" data={grammarRacerData} />
  },
  content: {
    en: `
## Advanced Linking Words 🔗📚

At the B2 level, you need to move beyond basic connectors like "but", "because", and "so". These **advanced linking words** will make your writing and speaking more precise, nuanced, and professional.

### 1. Concession: Notwithstanding & Albeit 🤝

These words express contrast or concession — something is true DESPITE another fact.

**Notwithstanding** = despite / in spite of

| Usage | Example |
|-------|---------|
| notwithstanding + noun | "**Notwithstanding** the bad weather, the event went ahead." |
| noun + notwithstanding | "The bad weather **notwithstanding**, the event went ahead." |
| notwithstanding + clause | "He was promoted, **notwithstanding** that he had little experience." |

**Albeit** = although / even though (always followed by an adjective, adverb, or short phrase — NOT a full clause)

- "The food was good, **albeit** expensive." (= although expensive)
- "He made progress, **albeit** slowly." (= although slowly)
- "It was a success, **albeit** a modest one." (= although a modest one)

<div className="bg-amber-50 dark:bg-amber-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">⚠️ 'Albeit' is NOT followed by 'that' or a full clause</h3>
  <p>❌ "Albeit <strong>that</strong> it was expensive..." → ✅ "Albeit expensive..."</p>
  <p>❌ "Albeit <strong>she tried</strong> hard..." → ✅ "Although she tried hard..."</p>
</div>

### 2. Cause & Reason: Owing to, On account of, By virtue of 📋

These formal phrases explain WHY something happened.

| Connector | Meaning | Example |
|-----------|---------|---------|
| **Owing to** | because of | "**Owing to** the strike, all flights were cancelled." |
| **On account of** | because of | "The match was postponed **on account of** rain." |
| **By virtue of** | because of (positive) | "She got the role **by virtue of** her talent." |
| **Inasmuch as** | because / to the extent that | "He is guilty, **inasmuch as** he knew about the plan." |
| **Insofar as** | to the extent that | "The law applies **insofar as** it doesn't conflict with EU regulations." |

<div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">💡 Subtle differences</h3>
  <p><strong>Owing to / On account of:</strong> neutral "because of" (can be positive or negative)</p>
  <p><strong>By virtue of:</strong> often positive — emphasises a <strong>quality</strong> or <strong>advantage</strong></p>
  <p><strong>Inasmuch as / Insofar as:</strong> limits the extent — "to the degree that..."</p>
</div>

<GamePlaceholder id="sentenceBuilder" />

### 3. Method & Process: Whereby 🔧

**Whereby** = by which / through which / according to which

Used to explain HOW a system, process, or agreement works:

- "They introduced a system **whereby** complaints are handled within 24 hours."
- "There is no mechanism **whereby** citizens can challenge the decision."
- "A contract was signed **whereby** profits would be split equally."

### 4. Time: Henceforth, Thereafter, Heretofore ⏰

| Connector | Meaning | Example |
|-----------|---------|---------|
| **Henceforth** | from now on | "**Henceforth**, all visitors must sign in." |
| **Thereafter** | after that | "He graduated in 2015; **thereafter**, he moved abroad." |
| **Heretofore** | up until now | "This technology was **heretofore** unknown." |

### 5. Formal vs. Everyday Equivalents 🔄

| Formal | Everyday |
|--------|----------|
| notwithstanding | despite / in spite of |
| albeit | although / even though |
| owing to | because of / due to |
| on account of | because of |
| by virtue of | because of / thanks to |
| whereby | by which / through which |
| henceforth | from now on |
| thereafter | after that |
| heretofore | until now / previously |
| inasmuch as | because / since |
| insofar as | to the extent that |

### 6. Common Mistakes ❌

- ❌ "Because **to** the rain..." → ✅ "**Owing to** the rain..." or "**Because of** the rain..."
- ❌ "Albeit **that** he tried..." → ✅ "Albeit slowly..." (no 'that', no full clause)
- ❌ "Whereby **to** solve the problem" → ✅ "Whereby the problem **would be solved**" (clause, not infinitive)
- ❌ "Henceforth **from now**..." → ✅ "**Henceforth**,..." (already means 'from now on')

<GamePlaceholder id="fixTheMistake" />

---

### 🎮 Practice Arena
<GamePlaceholder id="grammarRacer" />
`,
    de: `
## Fortgeschrittene Verbindungswörter 🔗📚

Auf B2-Niveau musst du über einfache Konnektoren wie "but", "because" und "so" hinausgehen. Diese **fortgeschrittenen Verbindungswörter** machen dein Schreiben und Sprechen präziser, nuancierter und professioneller.

### 1. Konzession: Notwithstanding & Albeit 🤝

Diese Wörter drücken Kontrast oder Einräumung aus — etwas ist wahr TROTZ einer anderen Tatsache.

**Notwithstanding** = trotz / ungeachtet

| Verwendung | Beispiel |
|------------|----------|
| notwithstanding + Nomen | "**Notwithstanding** the bad weather, the event went ahead." |
| Nomen + notwithstanding | "The bad weather **notwithstanding**, the event went ahead." |
| notwithstanding + Satz | "He was promoted, **notwithstanding** that he had little experience." |

**Albeit** = obwohl / wenn auch (immer gefolgt von einem Adjektiv, Adverb oder kurzer Phrase — NICHT einem ganzen Satz)

- "The food was good, **albeit** expensive." (= obwohl teuer)
- "He made progress, **albeit** slowly." (= obwohl langsam)
- "It was a success, **albeit** a modest one." (= obwohl ein bescheidener)

<div className="bg-amber-50 dark:bg-amber-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">⚠️ 'Albeit' wird NICHT von 'that' oder einem ganzen Satz gefolgt</h3>
  <p>❌ "Albeit <strong>that</strong> it was expensive..." → ✅ "Albeit expensive..."</p>
  <p>❌ "Albeit <strong>she tried</strong> hard..." → ✅ "Although she tried hard..."</p>
</div>

### 2. Ursache & Grund: Owing to, On account of, By virtue of 📋

Diese formellen Ausdrücke erklären, WARUM etwas passiert ist.

| Konnektor | Bedeutung | Beispiel |
|-----------|-----------|----------|
| **Owing to** | wegen / aufgrund | "**Owing to** the strike, all flights were cancelled." |
| **On account of** | wegen / aufgrund | "The match was postponed **on account of** rain." |
| **By virtue of** | kraft / dank | "She got the role **by virtue of** her talent." |
| **Inasmuch as** | insofern als / da | "He is guilty, **inasmuch as** he knew about the plan." |
| **Insofar as** | insoweit als | "The law applies **insofar as** it doesn't conflict with EU regulations." |

<div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">💡 Feine Unterschiede</h3>
  <p><strong>Owing to / On account of:</strong> neutrales "wegen" (kann positiv oder negativ sein)</p>
  <p><strong>By virtue of:</strong> oft positiv — betont eine <strong>Eigenschaft</strong> oder einen <strong>Vorteil</strong></p>
  <p><strong>Inasmuch as / Insofar as:</strong> begrenzt den Umfang — "in dem Maße, wie..."</p>
</div>

<GamePlaceholder id="sentenceBuilder" />

### 3. Methode & Prozess: Whereby 🔧

**Whereby** = wodurch / wonach / gemäß dem

Wird verwendet, um zu erklären, WIE ein System, Prozess oder eine Vereinbarung funktioniert:

- "They introduced a system **whereby** complaints are handled within 24 hours."
- "There is no mechanism **whereby** citizens can challenge the decision."
- "A contract was signed **whereby** profits would be split equally."

### 4. Zeit: Henceforth, Thereafter, Heretofore ⏰

| Konnektor | Bedeutung | Beispiel |
|-----------|-----------|----------|
| **Henceforth** | von nun an | "**Henceforth**, all visitors must sign in." |
| **Thereafter** | danach | "He graduated in 2015; **thereafter**, he moved abroad." |
| **Heretofore** | bis jetzt / bisher | "This technology was **heretofore** unknown." |

### 5. Formell vs. Alltägliche Entsprechungen 🔄

| Formell | Alltäglich |
|---------|------------|
| notwithstanding | despite / in spite of (trotz) |
| albeit | although / even though (obwohl) |
| owing to | because of / due to (wegen) |
| on account of | because of (wegen) |
| by virtue of | because of / thanks to (dank) |
| whereby | by which / through which (wodurch) |
| henceforth | from now on (von nun an) |
| thereafter | after that (danach) |
| heretofore | until now / previously (bisher) |
| inasmuch as | because / since (da / insofern als) |
| insofar as | to the extent that (insoweit als) |

### 6. Häufige Fehler ❌

- ❌ "Because **to** the rain..." → ✅ "**Owing to** the rain..." oder "**Because of** the rain..."
- ❌ "Albeit **that** he tried..." → ✅ "Albeit slowly..." (kein 'that', kein ganzer Satz)
- ❌ "Whereby **to** solve the problem" → ✅ "Whereby the problem **would be solved**" (Satz, kein Infinitiv)
- ❌ "Henceforth **from now**..." → ✅ "**Henceforth**,..." (bedeutet bereits 'von nun an')

<GamePlaceholder id="fixTheMistake" />

---

### 🎮 Trainings-Arena
<GamePlaceholder id="grammarRacer" />
`
  }
};
