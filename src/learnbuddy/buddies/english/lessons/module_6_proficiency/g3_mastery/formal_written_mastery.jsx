import React from 'react';
import GrammarGame from '../../../components/grammar-games/GrammarGame';

const sentenceBuilderData = [
  {
    prompt: { en: "The policy has failed not only to reduce poverty ___ to address its root causes.", de: "Die Politik hat es nicht nur versäumt, Armut zu reduzieren, ___ auch deren Grundursachen anzugehen." },
    words: ["but also", "and also", "as well as", "and even"],
    correct: "but also",
    explanation: { en: "'Not only… but also' is a correlative conjunction that creates a balanced parallel structure. It is essential in formal written English for emphasis.", de: "'Not only… but also' ist eine korrelative Konjunktion, die eine ausgewogene Parallelstruktur erzeugt. Sie ist im formellen geschriebenen Englisch unverzichtbar." }
  },
  {
    prompt: { en: "The report examines the economic, social, ___ environmental consequences of urbanization.", de: "Der Bericht untersucht die wirtschaftlichen, sozialen ___ ökologischen Folgen der Urbanisierung." },
    words: ["and", "or", "but", "with"],
    correct: "and",
    explanation: { en: "In a parallel list of adjectives modifying the same noun, items are separated by commas with 'and' before the final item (Oxford comma usage). This creates clean, readable parallel structure.", de: "In einer parallelen Liste von Adjektiven, die dasselbe Substantiv modifizieren, werden Elemente durch Kommas getrennt, mit 'and' vor dem letzten Element (Oxford-Komma)." }
  },
  {
    prompt: { en: "___ the evidence is inconclusive, several trends merit further investigation.", de: "___ die Beweise nicht schlüssig sind, verdienen mehrere Trends weitere Untersuchung." },
    words: ["Although", "Because", "Since", "When"],
    correct: "Although",
    explanation: { en: "'Although' introduces a concessive subordinate clause — acknowledging a point before presenting a contrasting main clause. This is a hallmark of balanced academic argumentation.", de: "'Although' leitet einen konzessiven Nebensatz ein — einen Punkt anerkennen, bevor ein kontrastierender Hauptsatz präsentiert wird." }
  },
  {
    prompt: { en: "The government must either reform the tax system ___ face prolonged economic stagnation.", de: "Die Regierung muss entweder das Steuersystem reformieren ___ mit anhaltender wirtschaftlicher Stagnation rechnen." },
    words: ["or", "and", "but", "nor"],
    correct: "or",
    explanation: { en: "'Either… or' is a correlative conjunction presenting two mutually exclusive alternatives. Both elements must be grammatically parallel.", de: "'Either… or' ist eine korrelative Konjunktion, die zwei sich gegenseitig ausschließende Alternativen präsentiert. Beide Elemente müssen grammatisch parallel sein." }
  },
  {
    prompt: { en: "The study was conducted meticulously; ___, the sample size was too small to be conclusive.", de: "Die Studie wurde sorgfältig durchgeführt; ___ war die Stichprobengröße zu klein, um schlüssig zu sein." },
    words: ["nevertheless", "therefore", "furthermore", "consequently"],
    correct: "nevertheless",
    explanation: { en: "'Nevertheless' is a conjunctive adverb introducing a concession/contrast after a semicolon. It signals that the following point contrasts with the preceding one.", de: "'Nevertheless' ist ein konjunktives Adverb, das eine Konzession/einen Kontrast nach einem Semikolon einleitet." }
  },
  {
    prompt: { en: "Not only did the reforms improve efficiency, ___ they also enhanced public trust.", de: "Die Reformen verbesserten nicht nur die Effizienz, ___ sie stärkten auch das öffentliche Vertrauen." },
    words: ["but", "and", "yet", "so"],
    correct: "but",
    explanation: { en: "The correlative 'Not only… but (also)' requires 'but' in the second clause. This structure creates emphasis through both inversion and addition.", de: "Das Korrelativ 'Not only… but (also)' erfordert 'but' im zweiten Teilsatz. Diese Struktur erzeugt Betonung durch Inversion und Addition." }
  }
];

const fixTheMistakeData = [
  {
    sentence: "The company plans to increase revenue, reducing costs, and will expand into new markets.",
    mistakeIndex: 5,
    correction: "reduce costs, and expand",
    explanation: { en: "Broken parallelism: 'to increase' / 'reducing' / 'will expand' mix infinitive, gerund, and future. All three must match: 'to increase, reduce, and expand' (bare infinitives after 'to').", de: "Gebrochene Parallelstruktur: 'to increase' / 'reducing' / 'will expand' mischen Infinitiv, Gerundium und Futur. Alle drei müssen übereinstimmen." }
  },
  {
    sentence: "The findings are significant. And they warrant further investigation by the research community.",
    mistakeIndex: 3,
    correction: ", and they warrant",
    explanation: { en: "In formal written English, beginning a sentence with 'And' is considered stylistically weak. Join the clauses: 'The findings are significant, and they warrant further investigation.'", de: "Im formellen schriftlichen Englisch gilt es als stilistisch schwach, einen Satz mit 'And' zu beginnen. Verbinden Sie die Teilsätze." }
  },
  {
    sentence: "The study examines how pollution affects health and the economic impact of environmental degradation.",
    mistakeIndex: 5,
    correction: "how pollution affects health and how environmental degradation affects the economy",
    explanation: { en: "The two noun phrases after 'examines' are not parallel: 'how pollution affects health' (clause) and 'the economic impact' (NP). Restructure for clarity and parallelism.", de: "Die zwei Nominalphrasen nach 'examines' sind nicht parallel. Umstrukturieren für Klarheit und Parallelismus." }
  },
  {
    sentence: "Furthermore, the data suggests that the hypothesis is correct, however, more testing is needed.",
    mistakeIndex: 9,
    correction: "; however,",
    explanation: { en: "'However' is a conjunctive adverb, not a coordinating conjunction. It cannot join two independent clauses with just a comma (comma splice). Use a semicolon: '…correct; however, more testing…'.", de: "'However' ist ein konjunktives Adverb, keine koordinierende Konjunktion. Es kann nicht zwei Hauptsätze nur mit einem Komma verbinden. Verwenden Sie ein Semikolon." }
  },
  {
    sentence: "The researchers neither found evidence of fraud, nor they found any irregularities in the data.",
    mistakeIndex: 8,
    correction: "nor did they find",
    explanation: { en: "After 'nor', subject-auxiliary inversion is required: 'nor did they find'. The structure 'neither… nor' demands parallel and inverted clauses.", de: "Nach 'nor' ist Subjekt-Hilfsverb-Inversion erforderlich: 'nor did they find'. Die Struktur 'neither… nor' erfordert parallele und invertierte Teilsätze." }
  }
];

const grammarRacerData = [
  {
    prompt: "Which cohesive device shows CONTRAST? 'The economy grew; ___, unemployment rose.'",
    options: ["however", "therefore", "moreover"],
    correct: "however",
    explanation: "'However' signals contrast between two ideas. 'Therefore' shows cause-effect; 'moreover' adds supporting information."
  },
  {
    prompt: "Correct parallel structure: 'She likes reading, ___, and swimming.'",
    options: ["writing", "to write", "she writes"],
    correct: "writing",
    explanation: "Parallel structure requires the same grammatical form: reading, writing, swimming (all gerunds)."
  },
  {
    prompt: "Which subordinator expresses CONCESSION? '___ the budget was limited, the project succeeded.'",
    options: ["Although", "Because", "Since"],
    correct: "Although",
    explanation: "'Although' introduces a concessive clause — acknowledging a negative point before presenting a contrasting positive outcome."
  },
  {
    prompt: "Formal alternative to 'Also': '___, the study found a link between diet and health.'",
    options: ["Furthermore", "And", "Plus"],
    correct: "Furthermore",
    explanation: "'Furthermore' is a formal additive conjunctive adverb. 'And' is a conjunction (not an adverb), and 'Plus' is informal."
  },
  {
    prompt: "Which creates the STRONGEST emphasis? '___ is it illegal, ___ it is also immoral.'",
    options: ["Not only / but", "Both / and", "Either / or"],
    correct: "Not only / but",
    explanation: "'Not only… but (also)' creates the strongest emphasis through a two-part correlative structure that builds expectation."
  }
];

export const formalWrittenMastery = {
  id: 'c2_g7',
  title: {
    en: 'Formal Written English Mastery',
    de: 'Meisterschaft im formellen schriftlichen Englisch'
  },
  description: {
    en: "Master complex sentence structures, subordination, parallel structures, and cohesive devices for C2-level formal writing.",
    de: "Meistern Sie komplexe Satzstrukturen, Unterordnung, Parallelstrukturen und kohäsive Mittel für formelles Schreiben auf C2-Niveau."
  },
  components: {
    sentenceBuilder: <GrammarGame type="sentenceBuilder" data={sentenceBuilderData} />,
    fixTheMistake: <GrammarGame type="fixTheMistake" data={fixTheMistakeData} />,
    grammarRacer: <GrammarGame type="grammarRacer" data={grammarRacerData} />
  },
  content: {
    en: `
## Formal Written English Mastery ✍️

At C2 level, your written English must demonstrate **architectural precision** — every sentence constructed with purpose, every paragraph flowing logically into the next. This lesson covers the structural pillars of masterful formal writing: complex sentences, subordination, parallelism, and cohesion.

### 1. Complex Sentence Architecture 🏗️

Formal writing demands a variety of sentence structures. At C2, you should command:

**a) Simple sentences (for impact):**
- "The experiment failed."
- Used sparingly for dramatic effect or to state key conclusions.

**b) Compound sentences (for balance):**
- "The economy grew, **but** inequality widened."
- Two independent clauses joined by a coordinating conjunction (FANBOYS: for, and, nor, but, or, yet, so).

**c) Complex sentences (for nuance):**
- "**Although** the economy grew, inequality widened."
- A dependent clause + an independent clause, showing the relationship between ideas.

**d) Compound-complex sentences (for sophistication):**
- "**Although** the economy grew, inequality widened, **and** this trend is likely to continue."
- Multiple clauses showing layered relationships.

<div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">💡 The Art of Sentence Variety</h3>
  <p>C2 writing is not about always using complex sentences. It is about <strong>varying sentence length and structure</strong> for rhythm and emphasis. A short sentence after a long one creates impact. Monotonous structure — even complex monotony — fatigues the reader.</p>
</div>

### 2. Subordination: The Hierarchy of Ideas 📐

Subordination allows you to show which ideas are primary and which are secondary:

**Types of subordinate clauses:**

| Type | Subordinator | Example |
|------|-------------|---------|
| **Concessive** | although, though, even though, while | "**Although** the data is limited, the trend is clear." |
| **Causal** | because, since, as, given that | "The project was delayed **because** funding was cut." |
| **Conditional** | if, unless, provided that, on condition that | "**Provided that** conditions improve, growth will resume." |
| **Temporal** | when, while, before, after, until, as soon as | "**Before** the reforms took effect, the economy stagnated." |
| **Purpose** | so that, in order that, so as to | "Measures were introduced **so that** inflation could be controlled." |
| **Result** | so… that, such… that | "The damage was **so** severe **that** repairs took years." |

**Advanced subordination techniques:**
- **Reduced relative clauses:** "The data **collected** over five years shows…" (= that was collected)
- **Participle clauses:** "**Having analyzed** the results, the team published their findings."
- **Absolute constructions:** "**All things considered**, the policy was a success."

### 3. Parallel Structure (Parallelism) ⚖️

Parallelism means expressing similar ideas in the **same grammatical form**. It is essential for clarity, rhythm, and elegance:

**a) In lists:**
- ❌ "The plan aims to reduce costs, **improving** efficiency, and **the expansion** of operations."
- ✅ "The plan aims to **reduce** costs, **improve** efficiency, and **expand** operations."

**b) With correlative conjunctions:**
- ❌ "She is **not only** a brilliant researcher **but also** she teaches well."
- ✅ "She is **not only** a brilliant researcher **but also** an excellent teacher."

**c) In comparisons:**
- ❌ "Running a marathon is harder than **if you swim** a mile."
- ✅ "Running a marathon is harder than **swimming** a mile."

<GamePlaceholder id="sentenceBuilder" />

### 4. Cohesive Devices: The Glue of Formal Writing 🔗

Cohesion refers to the linguistic devices that connect ideas **within and across sentences**:

**a) Conjunctive adverbs (sentence connectors):**

| Function | Connectors |
|----------|-----------|
| **Addition** | furthermore, moreover, in addition, additionally |
| **Contrast** | however, nevertheless, nonetheless, conversely, on the other hand |
| **Cause/Effect** | therefore, consequently, as a result, hence, thus |
| **Clarification** | in other words, that is to say, namely, specifically |
| **Example** | for instance, for example, to illustrate |
| **Conclusion** | in conclusion, to summarize, ultimately, in sum |

**b) Referencing devices:**
- **Pronouns:** "The policy was introduced in 2020. **It** aimed to reduce emissions."
- **Demonstratives:** "**This** approach proved more effective than expected."
- **Synonyms/Paraphrases:** "The government… **the administration**… **the authorities**…"

**c) Lexical cohesion:**
- **Repetition:** Deliberate reuse of key terms for emphasis.
- **Collocation chains:** Related words that create a thematic thread.

<div className="bg-amber-50 dark:bg-amber-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">⚠️ Over-use of Connectors</h3>
  <p>A common C2 mistake is <strong>overusing formal connectors</strong>. Not every sentence needs "furthermore" or "moreover." Let the logic of your ideas do the connecting work — use explicit connectors only when the relationship might be unclear.</p>
</div>

### 5. Punctuation as Structure 📌

At C2, punctuation is not just a formality — it is a **structural tool**:

| Punctuation | Use | Example |
|------------|-----|---------|
| **Semicolon (;)** | Joins related independent clauses without a conjunction | "The results were clear**;** the hypothesis was confirmed." |
| **Colon (:)** | Introduces an explanation, list, or elaboration | "One factor was decisive**:** funding." |
| **Dash (—)** | Adds a parenthetical or emphatic interruption | "The policy — **controversial though it was** — succeeded." |
| **Parentheses ()** | Adds supplementary information | "The GDP (adjusted for inflation) rose by 2%." |

### 6. Common Mistakes ❌

**Mistake 1:** Comma splice — joining independent clauses with only a comma.
- ❌ "The results were promising, more research is needed."
- ✅ "The results were promising**;** more research is needed."
- ✅ "The results were promising**,** **but** more research is needed."

**Mistake 2:** Broken parallelism.
- ❌ "The company aims to increase revenue, reducing costs, and will expand."
- ✅ "The company aims to increase revenue, reduce costs, and expand."

**Mistake 3:** Dangling modifiers.
- ❌ "**Having** completed the study, the results were published."
- ✅ "**Having** completed the study, **the team** published the results."

**Mistake 4:** Run-on sentences.
- ❌ "The policy was effective it reduced crime significantly and improved public safety."
- ✅ "The policy was effective: it reduced crime significantly and improved public safety."

<GamePlaceholder id="fixTheMistake" />

<div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">🎯 Summary</h3>
  <ul className="list-disc list-inside space-y-1">
    <li><strong>Sentence variety</strong> — simple, compound, complex, compound-complex for rhythm and emphasis.</li>
    <li><strong>Subordination</strong> — shows hierarchy: concessive, causal, conditional, temporal, purpose, result clauses.</li>
    <li><strong>Parallelism</strong> — same grammatical form for similar ideas: in lists, correlatives, comparisons.</li>
    <li><strong>Cohesive devices</strong> — conjunctive adverbs, referencing, and lexical chains connect ideas.</li>
    <li><strong>Punctuation</strong> — semicolons, colons, and dashes as structural tools, not decorations.</li>
  </ul>
</div>

---

### 🎮 Practice Arena

**🏎️ Grammar Racer: Formal Writing Precision**
<GamePlaceholder id="grammarRacer" />

### 🎯 Practical Exercise

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border-2 border-green-300">
  <h3 className="font-bold text-green-800 dark:text-green-200 mb-4">📝 Formal Writing Mastery Challenge:</h3>
  <ol className="list-decimal list-inside space-y-2">
    <li>Write a paragraph using all four sentence types (simple, compound, complex, compound-complex).</li>
    <li>Fix the parallelism in 5 broken sentences your teacher provides.</li>
    <li>Rewrite an informal email as a formal report using subordination and cohesive devices.</li>
    <li>Identify and correct 5 comma splices in a sample text.</li>
    <li>Write a 200-word academic paragraph using at least 5 different cohesive devices appropriately.</li>
  </ol>
</div>
`,
    de: `
## Meisterschaft im formellen schriftlichen Englisch ✍️

Auf C2-Niveau muss Ihr geschriebenes Englisch **architektonische Präzision** demonstrieren — jeder Satz mit Absicht konstruiert, jeder Absatz logisch in den nächsten fließend. Diese Lektion behandelt die strukturellen Säulen meisterhaften formellen Schreibens: komplexe Sätze, Unterordnung, Parallelismus und Kohäsion.

### 1. Komplexe Satzarchitektur 🏗️

Formelles Schreiben erfordert eine Vielfalt von Satzstrukturen. Auf C2 sollten Sie beherrschen:

**a) Einfache Sätze (für Wirkung):**
- "The experiment failed."
- Sparsam eingesetzt für dramatische Wirkung oder um Schlüsselfolgerungen zu formulieren.

**b) Zusammengesetzte Sätze (für Balance):**
- "The economy grew, **but** inequality widened."
- Zwei Hauptsätze, verbunden durch eine koordinierende Konjunktion.

**c) Komplexe Sätze (für Nuance):**
- "**Although** the economy grew, inequality widened."
- Ein Nebensatz + ein Hauptsatz, der die Beziehung zwischen Ideen zeigt.

**d) Zusammengesetzt-komplexe Sätze (für Raffinesse):**
- "**Although** the economy grew, inequality widened, **and** this trend is likely to continue."
- Mehrere Teilsätze, die geschichtete Beziehungen zeigen.

<div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">💡 Die Kunst der Satzvariation</h3>
  <p>C2-Schreiben bedeutet nicht, immer komplexe Sätze zu verwenden. Es geht darum, <strong>Satzlänge und -struktur zu variieren</strong> für Rhythmus und Betonung. Ein kurzer Satz nach einem langen erzeugt Wirkung. Monotone Struktur ermüdet den Leser.</p>
</div>

### 2. Unterordnung: Die Hierarchie der Ideen 📐

Unterordnung ermöglicht es, zu zeigen, welche Ideen primär und welche sekundär sind:

**Arten von Nebensätzen:**

| Typ | Subordinator | Beispiel |
|-----|-------------|----------|
| **Konzessiv** | although, though, even though, while | "**Although** the data is limited, the trend is clear." |
| **Kausal** | because, since, as, given that | "The project was delayed **because** funding was cut." |
| **Konditional** | if, unless, provided that | "**Provided that** conditions improve, growth will resume." |
| **Temporal** | when, while, before, after, until | "**Before** the reforms took effect, the economy stagnated." |
| **Final** | so that, in order that | "Measures were introduced **so that** inflation could be controlled." |
| **Konsekutiv** | so… that, such… that | "The damage was **so** severe **that** repairs took years." |

**Fortgeschrittene Unterordnungstechniken:**
- **Reduzierte Relativsätze:** "The data **collected** over five years shows…" (= that was collected)
- **Partizipialsätze:** "**Having analyzed** the results, the team published their findings."
- **Absolute Konstruktionen:** "**All things considered**, the policy was a success."

### 3. Parallelstruktur (Parallelismus) ⚖️

Parallelismus bedeutet, ähnliche Ideen in der **gleichen grammatischen Form** auszudrücken:

**a) In Listen:**
- ❌ "The plan aims to reduce costs, **improving** efficiency, and **the expansion** of operations."
- ✅ "The plan aims to **reduce** costs, **improve** efficiency, and **expand** operations."

**b) Mit korrelativen Konjunktionen:**
- ❌ "She is **not only** a brilliant researcher **but also** she teaches well."
- ✅ "She is **not only** a brilliant researcher **but also** an excellent teacher."

**c) In Vergleichen:**
- ❌ "Running a marathon is harder than **if you swim** a mile."
- ✅ "Running a marathon is harder than **swimming** a mile."

<GamePlaceholder id="sentenceBuilder" />

### 4. Kohäsive Mittel: Der Klebstoff formellen Schreibens 🔗

Kohäsion bezieht sich auf die sprachlichen Mittel, die Ideen **innerhalb und zwischen Sätzen** verbinden:

**a) Konjunktive Adverbien (Satzkonnektoren):**

| Funktion | Konnektoren |
|----------|------------|
| **Addition** | furthermore, moreover, in addition, additionally |
| **Kontrast** | however, nevertheless, nonetheless, conversely |
| **Ursache/Wirkung** | therefore, consequently, as a result, hence, thus |
| **Verdeutlichung** | in other words, that is to say, namely, specifically |
| **Beispiel** | for instance, for example, to illustrate |
| **Schlussfolgerung** | in conclusion, to summarize, ultimately, in sum |

**b) Referenzmittel:**
- **Pronomen:** "The policy was introduced in 2020. **It** aimed to reduce emissions."
- **Demonstrativa:** "**This** approach proved more effective than expected."
- **Synonyme/Paraphrasen:** "The government… **the administration**… **the authorities**…"

**c) Lexikalische Kohäsion:**
- **Wiederholung:** Bewusste Wiederverwendung von Schlüsselbegriffen für Betonung.
- **Kollokationsketten:** Verwandte Wörter, die einen thematischen Faden bilden.

<div className="bg-amber-50 dark:bg-amber-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">⚠️ Übermäßiger Gebrauch von Konnektoren</h3>
  <p>Ein häufiger C2-Fehler ist der <strong>übermäßige Gebrauch formeller Konnektoren</strong>. Nicht jeder Satz braucht "furthermore" oder "moreover." Lassen Sie die Logik Ihrer Ideen die Verbindungsarbeit leisten.</p>
</div>

### 5. Interpunktion als Struktur 📌

Auf C2-Niveau ist Interpunktion nicht nur eine Formalität — sie ist ein **strukturelles Werkzeug**:

| Zeichen | Verwendung | Beispiel |
|---------|-----------|----------|
| **Semikolon (;)** | Verbindet verwandte Hauptsätze ohne Konjunktion | "The results were clear**;** the hypothesis was confirmed." |
| **Doppelpunkt (:)** | Leitet eine Erklärung, Liste oder Ausführung ein | "One factor was decisive**:** funding." |
| **Gedankenstrich (—)** | Fügt eine parenthetische oder emphatische Unterbrechung hinzu | "The policy — **controversial though it was** — succeeded." |

### 6. Häufige Fehler ❌

**Fehler 1:** Komma-Splice — Hauptsätze nur mit einem Komma verbinden.
- ❌ "The results were promising, more research is needed."
- ✅ "The results were promising**;** more research is needed."

**Fehler 2:** Gebrochener Parallelismus.
- ❌ "The company aims to increase revenue, reducing costs, and will expand."
- ✅ "The company aims to increase revenue, reduce costs, and expand."

**Fehler 3:** Hängende Modifikatoren.
- ❌ "**Having** completed the study, the results were published."
- ✅ "**Having** completed the study, **the team** published the results."

**Fehler 4:** Satzkettenbildung (Run-on Sentences).
- ❌ "The policy was effective it reduced crime significantly and improved public safety."
- ✅ "The policy was effective: it reduced crime significantly and improved public safety."

<GamePlaceholder id="fixTheMistake" />

<div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">🎯 Zusammenfassung</h3>
  <ul className="list-disc list-inside space-y-1">
    <li><strong>Satzvariation</strong> — einfach, zusammengesetzt, komplex, zusammengesetzt-komplex für Rhythmus und Betonung.</li>
    <li><strong>Unterordnung</strong> — zeigt Hierarchie: konzessive, kausale, konditionale, temporale, finale, konsekutive Nebensätze.</li>
    <li><strong>Parallelismus</strong> — gleiche grammatische Form für ähnliche Ideen: in Listen, Korrelativen, Vergleichen.</li>
    <li><strong>Kohäsive Mittel</strong> — konjunktive Adverbien, Referenzmittel und lexikalische Ketten verbinden Ideen.</li>
    <li><strong>Interpunktion</strong> — Semikolons, Doppelpunkte und Gedankenstriche als strukturelle Werkzeuge.</li>
  </ul>
</div>

---

### 🎮 Trainings-Arena

**🏎️ Grammar Racer: Formelle Schreibpräzision**
<GamePlaceholder id="grammarRacer" />

### 🎯 Praktische Übung

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border-2 border-green-300">
  <h3 className="font-bold text-green-800 dark:text-green-200 mb-4">📝 Formelle Schreibmeisterschafts-Challenge:</h3>
  <ol className="list-decimal list-inside space-y-2">
    <li>Schreiben Sie einen Absatz mit allen vier Satztypen (einfach, zusammengesetzt, komplex, zusammengesetzt-komplex).</li>
    <li>Korrigieren Sie den Parallelismus in 5 fehlerhaften Sätzen.</li>
    <li>Schreiben Sie eine informelle E-Mail als formellen Bericht um mit Unterordnung und kohäsiven Mitteln.</li>
    <li>Identifizieren und korrigieren Sie 5 Komma-Splices in einem Beispieltext.</li>
    <li>Schreiben Sie einen akademischen Absatz von 200 Wörtern mit mindestens 5 verschiedenen kohäsiven Mitteln.</li>
  </ol>
</div>
`
  }
};
