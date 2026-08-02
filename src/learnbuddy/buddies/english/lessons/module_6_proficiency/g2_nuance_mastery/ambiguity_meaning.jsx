import React from 'react';
import GrammarGame from '../../../components/grammar-games/GrammarGame';

const sentenceBuilderData = [
  {
    prompt: { en: "'Visiting relatives can be boring.' This sentence is structurally ___.", de: "'Visiting relatives can be boring.' Dieser Satz ist strukturell ___." },
    words: ["ambiguous", "incorrect", "passive", "complex"],
    correct: "ambiguous",
    explanation: { en: "This is a classic structural ambiguity: 'visiting' can be a gerund (the act of visiting) or a participle (relatives who visit). Both parses are grammatically valid.", de: "Dies ist eine klassische Strukturambiguität: 'visiting' kann ein Gerundium (das Besuchen) oder ein Partizip (Verwandte, die besuchen) sein. Beide Interpretationen sind grammatisch gültig." }
  },
  {
    prompt: { en: "'I saw the man with the telescope.' The ambiguity here is about PP ___.", de: "'I saw the man with the telescope.' Die Ambiguität hier betrifft PP ___." },
    words: ["attachment", "agreement", "movement", "deletion"],
    correct: "attachment",
    explanation: { en: "This is PP (prepositional phrase) attachment ambiguity: 'with the telescope' can modify 'saw' (I used a telescope) or 'the man' (he had a telescope).", de: "Dies ist PP-Anbindungsambiguität: 'with the telescope' kann 'saw' modifizieren (ich benutzte ein Teleskop) oder 'the man' (er hatte ein Teleskop)." }
  },
  {
    prompt: { en: "The word 'bank' in 'I went to the bank' is an example of lexical ___.", de: "Das Wort 'bank' in 'I went to the bank' ist ein Beispiel für lexikalische ___." },
    words: ["ambiguity", "redundancy", "complexity", "inversion"],
    correct: "ambiguity",
    explanation: { en: "'Bank' has multiple unrelated meanings (financial institution / river bank / blood bank). Without context, the referent is ambiguous — this is lexical (or homonymic) ambiguity.", de: "'Bank' hat mehrere nicht verwandte Bedeutungen (Finanzinstitut / Flussufer / Blutbank). Ohne Kontext ist der Referent mehrdeutig — das ist lexikalische (oder homonyme) Ambiguität." }
  },
  {
    prompt: { en: "'The chicken is ready to eat.' The pragmatic inference depends on whether the chicken is ___ or alive.", de: "'The chicken is ready to eat.' Die pragmatische Schlussfolgerung hängt davon ab, ob das Huhn ___ oder lebendig ist." },
    words: ["cooked", "raw", "frozen", "fresh"],
    correct: "cooked",
    explanation: { en: "If cooked: 'ready to eat' = ready to be eaten (passive). If alive: 'ready to eat' = it wants to eat (active). Context determines which pragmatic inference the listener draws.", de: "Wenn gekocht: 'ready to eat' = bereit, gegessen zu werden (passiv). Wenn lebendig: 'ready to eat' = es will essen (aktiv). Der Kontext bestimmt die pragmatische Schlussfolgerung." }
  },
  {
    prompt: { en: "'She told her friend she needed help.' The pronoun 'she' in the subordinate clause creates ___ ambiguity.", de: "'She told her friend she needed help.' Das Pronomen 'she' im Nebensatz erzeugt ___ Ambiguität." },
    words: ["referential", "structural", "lexical", "phonological"],
    correct: "referential",
    explanation: { en: "The pronoun 'she' in 'she needed help' could refer to the subject or the friend — this is referential ambiguity, resolved only by context.", de: "Das Pronomen 'she' in 'she needed help' könnte sich auf das Subjekt oder die Freundin beziehen — dies ist referenzielle Ambiguität, die nur durch Kontext aufgelöst wird." }
  },
  {
    prompt: { en: "'Time flies like an arrow; fruit flies like a banana.' This joke exploits ___ ambiguity.", de: "'Time flies like an arrow; fruit flies like a banana.' Dieser Witz nutzt ___ Ambiguität aus." },
    words: ["syntactic", "phonological", "morphological", "semantic"],
    correct: "syntactic",
    explanation: { en: "In the first clause, 'flies' is a verb and 'like' is a preposition. In the second, 'flies' can be a noun (fruit flies) and 'like' a verb. The joke exploits the syntactic reanalysis.", de: "Im ersten Teilsatz ist 'flies' ein Verb und 'like' eine Präposition. Im zweiten kann 'flies' ein Substantiv (Fruchtfliegen) und 'like' ein Verb sein. Der Witz nutzt die syntaktische Neuanalyse aus." }
  }
];

const fixTheMistakeData = [
  {
    sentence: "The professor said on Monday he would give the exam.",
    mistakeIndex: 3,
    correction: "said that, on Monday, he",
    explanation: { en: "The original is ambiguous: did the professor speak on Monday, or is the exam on Monday? Adding 'that' and commas disambiguates: he spoke (at some point) and the exam is on Monday.", de: "Das Original ist mehrdeutig: Hat der Professor am Montag gesprochen, oder ist die Prüfung am Montag? Durch 'that' und Kommas wird disambiguiert." }
  },
  {
    sentence: "The police were ordered to stop drinking after midnight.",
    mistakeIndex: 5,
    correction: "to stop people from drinking",
    explanation: { en: "Structural ambiguity: Are the police drinking, or are they stopping others from drinking? 'Stop people from drinking' removes the ambiguity.", de: "Strukturambiguität: Trinkt die Polizei, oder hindert sie andere am Trinken? 'Stop people from drinking' beseitigt die Mehrdeutigkeit." }
  },
  {
    sentence: "I once shot an elephant in my pajamas.",
    mistakeIndex: 5,
    correction: "while I was wearing my pajamas",
    explanation: { en: "Classic PP-attachment ambiguity (Groucho Marx): Was the elephant wearing pajamas, or was the speaker? 'While I was wearing' disambiguates.", de: "Klassische PP-Anbindungsambiguität (Groucho Marx): Trug der Elefant den Pyjama oder der Sprecher? 'While I was wearing' disambiguiert." }
  },
  {
    sentence: "Every student didn't pass the exam.",
    mistakeIndex: 0,
    correction: "Not every student",
    explanation: { en: "Scope ambiguity: Does 'every student' have wide scope (no students passed) or narrow scope (some didn't pass)? 'Not every student' clarifies the intended meaning.", de: "Skopusambiguität: Hat 'every student' weiten Skopus (kein Student bestand) oder engen Skopus (manche bestanden nicht)? 'Not every student' klärt die beabsichtigte Bedeutung." }
  },
  {
    sentence: "The lawyer argued the defendant's case was strong.",
    mistakeIndex: 2,
    correction: "argued that",
    explanation: { en: "Without 'that', the sentence is ambiguous: did the lawyer argue (the case) or argue (that the case was strong)? Adding 'that' makes the complementizer explicit.", de: "Ohne 'that' ist der Satz mehrdeutig: Hat der Anwalt (den Fall) argumentiert oder argumentiert (dass der Fall stark war)? 'That' macht den Komplementierer explizit." }
  }
];

const grammarRacerData = [
  {
    prompt: "'Flying planes can be dangerous.' What type of ambiguity is this?",
    options: ["Structural", "Lexical", "Phonological"],
    correct: "Structural",
    explanation: "'Flying' can be a gerund (the act of flying planes) or a participle (planes that are flying) — this is structural/syntactic ambiguity."
  },
  {
    prompt: "'He found the bat in the cave.' 'Bat' creates ___ ambiguity.",
    options: ["Lexical", "Structural", "Pragmatic"],
    correct: "Lexical",
    explanation: "'Bat' has multiple unrelated meanings (animal / cricket bat). Without more context, the reader cannot determine which is meant — lexical ambiguity."
  },
  {
    prompt: "'Can you pass the salt?' is literally a question but pragmatically a ___.",
    options: ["request", "question", "command"],
    correct: "request",
    explanation: "This is a classic indirect speech act: the literal meaning is a yes/no question about ability, but the pragmatic meaning is a polite request."
  },
  {
    prompt: "In 'John told Bill that he was wrong,' 'he' is a case of ___ ambiguity.",
    options: ["referential", "structural", "lexical"],
    correct: "referential",
    explanation: "'He' could refer to John or Bill — this is referential (or pronominal) ambiguity, resolved only by context or intonation."
  },
  {
    prompt: "'Nothing is better than a steak dinner. A hot dog is better than nothing. So...' exploits ___ ambiguity.",
    options: ["Scope/logical", "Lexical", "Phonological"],
    correct: "Scope/logical",
    explanation: "This syllogism exploits the scope ambiguity of 'nothing' — it shifts between meaning 'no thing' and being a quantifier in different propositions."
  }
];

export const ambiguityMeaning = {
  id: 'c2_g6',
  title: {
    en: 'Ambiguity & Multiple Meanings',
    de: 'Ambiguität & Mehrfachbedeutungen'
  },
  description: {
    en: "Master structural ambiguity, lexical ambiguity, pragmatic inference, and context-dependent meaning at the highest level.",
    de: "Meistern Sie Strukturambiguität, lexikalische Ambiguität, pragmatische Schlussfolgerungen und kontextabhängige Bedeutung auf höchstem Niveau."
  },
  components: {
    sentenceBuilder: <GrammarGame type="sentenceBuilder" data={sentenceBuilderData} />,
    fixTheMistake: <GrammarGame type="fixTheMistake" data={fixTheMistakeData} />,
    grammarRacer: <GrammarGame type="grammarRacer" data={grammarRacerData} />
  },
  content: {
    en: `
## Ambiguity & Multiple Meanings 🔮

At C2 level, you must be able to **identify, analyze, and resolve** ambiguities in English — and even exploit them for rhetorical or humorous effect. Ambiguity is not a flaw in language; it is a fundamental feature that speakers navigate constantly.

### 1. Types of Ambiguity 📊

English ambiguity falls into several distinct categories:

| Type | Definition | Example |
|------|-----------|---------|
| **Lexical** | A word has multiple meanings | "I went to the **bank**." (financial / river) |
| **Structural/Syntactic** | A sentence can be parsed in multiple ways | "**Visiting** relatives can be boring." |
| **Referential** | A pronoun or expression has multiple possible referents | "**She** told **her** friend **she** was wrong." |
| **Scope** | Quantifiers or negation can be interpreted differently | "**Every** student didn't pass." |
| **Pragmatic** | The intended meaning differs from the literal meaning | "**Can** you pass the salt?" |

### 2. Lexical Ambiguity (Homonymy & Polysemy) 📖

**Homonymy:** Completely unrelated meanings sharing the same form.
- "**bat**" — flying mammal / cricket equipment
- "**bank**" — financial institution / side of a river
- "**bark**" — dog sound / tree covering
- "**spring**" — season / water source / to jump / metal coil

**Polysemy:** Related meanings extending from a core sense.
- "**head**" — body part / leader / top of a nail / head of lettuce
- "**run**" — to jog / to manage / a run in stockings / a river runs
- "**bright**" — luminous / intelligent / vivid (colors) / cheerful

<div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">💡 C2 Insight: Homonymy vs. Polysemy</h3>
  <p>The distinction matters: <strong>homonyms</strong> are separate lexical entries (unrelated origins), while <strong>polysemous</strong> words are a single entry with extended senses. Dictionaries list homonyms as separate entries and polysemous meanings under one entry.</p>
</div>

### 3. Structural Ambiguity 🏗️

Structural (syntactic) ambiguity arises when a sentence has **two or more valid grammatical parses**:

**PP-Attachment Ambiguity:**
- "I saw the man **with the telescope**."
  - Parse 1: I used a telescope to see him. ("with the telescope" modifies "saw")
  - Parse 2: The man had a telescope. ("with the telescope" modifies "the man")

**Gerund/Participle Ambiguity:**
- "**Flying** planes can be dangerous."
  - Parse 1: The act of flying planes is dangerous. ("flying" = gerund)
  - Parse 2: Planes that are flying are dangerous. ("flying" = participle)

**Coordination Ambiguity:**
- "Old men and women were evacuated."
  - Parse 1: [Old men] and [women] — only the men are old.
  - Parse 2: [Old [men and women]] — both are old.

<GamePlaceholder id="sentenceBuilder" />

### 4. Scope Ambiguity 🔍

Scope ambiguity occurs when **quantifiers, negation, or modals** can be interpreted with different scope:

- "**Every** student didn't pass the exam."
  - Wide scope: No students passed. (Every > Not)
  - Narrow scope: Not all students passed. (Not > Every)

- "Someone loves **everyone**."
  - Reading 1: There is one person who loves all people.
  - Reading 2: For each person, there exists someone who loves them.

- "You **may** not leave."
  - Permission denied: "You are not permitted to leave."
  - Possibility: "It is possible that you will not leave."

### 5. Pragmatic Ambiguity & Inference 🧠

Pragmatic ambiguity arises from the gap between **what is said** and **what is meant**:

**Indirect Speech Acts:**
- "**Can** you close the window?" (Literal: ability question / Pragmatic: request)
- "It's cold in here." (Literal: statement / Pragmatic: request to close window/turn on heat)

**Conversational Implicature:**
- A: "Are you coming to the party?" B: "I have an exam tomorrow."
  - B doesn't say "no" directly, but implies it through relevance.

**Irony & Sarcasm:**
- "Oh, **great**, another meeting." (Literal: positive / Pragmatic: negative)
- Context, tone, and shared knowledge determine the intended meaning.

<div className="bg-amber-50 dark:bg-amber-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">⚠️ Cross-Cultural Warning</h3>
  <p>Pragmatic inference is <strong>culturally dependent</strong>. What counts as a polite indirect request in British English may be interpreted literally in other varieties. C2 speakers must be aware of these cross-cultural pragmatic differences.</p>
</div>

### 6. Disambiguation Strategies 🎯

How do skilled speakers and writers resolve ambiguity?

**a) Lexical context:** Surrounding words clarify meaning.
- "I deposited money at the **bank**." (financial meaning clear)
- "We walked along the **bank** of the river." (geographical meaning clear)

**b) Syntactic restructuring:** Rewrite to eliminate multiple parses.
- Ambiguous: "The professor said on Monday he would give the exam."
- Clear: "On Monday, the professor said he would give the exam."
- Or: "The professor said that the exam would be on Monday."

**c) Prosody/Intonation:** In speech, stress and pausing disambiguate.
- "I saw [the man] [with the telescope]." vs. "I saw [the man with the telescope]."

**d) World knowledge:** Common sense rules out implausible readings.
- "The chicken is ready to eat." — We know chickens on plates don't eat.

### 7. Ambiguity as a Literary Device ✍️

At C2, you should appreciate how writers **deliberately exploit** ambiguity:

- **Puns:** "Time flies like an arrow; fruit flies like a banana." (Groucho Marx)
- **Double entendre:** A phrase with two meanings, one often risque.
- **Poetic ambiguity:** Keats's "Ode on a Grecian Urn" — "Beauty is truth, truth beauty" invites multiple interpretations.
- **Legal ambiguity:** Contracts can be contested when clauses have multiple readings.

### 8. Common Mistakes ❌

**Mistake 1:** Creating unintentional ambiguity in formal writing.
- ❌ "The committee discussed the report that was overdue." (Which was overdue — the discussion or the report?)
- ✅ "The committee discussed the overdue report."

**Mistake 2:** Failing to use 'that' as a complementizer.
- ❌ "She argued the policy was flawed." (ambiguous)
- ✅ "She argued **that** the policy was flawed." (clear)

**Mistake 3:** Dangling modifiers creating absurd ambiguity.
- ❌ "Walking down the street, the trees were beautiful."
- ✅ "Walking down the street, **I** found the trees beautiful."

<GamePlaceholder id="fixTheMistake" />

<div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">🎯 Summary</h3>
  <ul className="list-disc list-inside space-y-1">
    <li><strong>Lexical ambiguity</strong> — same word, different meanings (bank, bat, spring).</li>
    <li><strong>Structural ambiguity</strong> — same sentence, different grammatical parses.</li>
    <li><strong>Referential ambiguity</strong> — unclear pronoun references.</li>
    <li><strong>Scope ambiguity</strong> — quantifiers and negation interact unpredictably.</li>
    <li><strong>Pragmatic ambiguity</strong> — what is said vs. what is meant.</li>
    <li><strong>Disambiguation</strong> uses context, restructuring, intonation, and world knowledge.</li>
  </ul>
</div>

---

### 🎮 Practice Arena

**🏎️ Grammar Racer: Ambiguity Analysis**
<GamePlaceholder id="grammarRacer" />

### 🎯 Practical Exercise

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border-2 border-green-300">
  <h3 className="font-bold text-green-800 dark:text-green-200 mb-4">📝 Ambiguity Analysis Challenge:</h3>
  <ol className="list-decimal list-inside space-y-2">
    <li>Find and explain 3 examples of structural ambiguity in newspaper headlines.</li>
    <li>Write 5 sentences that are deliberately ambiguous, then provide both interpretations.</li>
    <li>Disambiguate these: "The professor said on Friday he would cancel class" (two readings).</li>
    <li>Analyze the ambiguity in "Everyone loves someone" — draw the two scope readings.</li>
    <li>Create a short humorous text that exploits lexical ambiguity (puns) for comedic effect.</li>
  </ol>
</div>
`,
    de: `
## Ambiguität & Mehrfachbedeutungen 🔮

Auf C2-Niveau müssen Sie in der Lage sein, Mehrdeutigkeiten im Englischen zu **identifizieren, analysieren und auflösen** — und sie sogar für rhetorische oder humorvolle Zwecke auszunutzen. Ambiguität ist kein Fehler in der Sprache; sie ist ein grundlegendes Merkmal, das Sprecher ständig navigieren.

### 1. Arten der Ambiguität 📊

Englische Ambiguität fällt in mehrere verschiedene Kategorien:

| Typ | Definition | Beispiel |
|-----|-----------|----------|
| **Lexikalisch** | Ein Wort hat mehrere Bedeutungen | "I went to the **bank**." (Finanzinstitut / Flussufer) |
| **Strukturell/Syntaktisch** | Ein Satz kann auf mehrere Arten geparst werden | "**Visiting** relatives can be boring." |
| **Referenziell** | Ein Pronomen hat mehrere mögliche Referenten | "**She** told **her** friend **she** was wrong." |
| **Skopus** | Quantoren oder Negation können unterschiedlich interpretiert werden | "**Every** student didn't pass." |
| **Pragmatisch** | Die beabsichtigte Bedeutung weicht von der wörtlichen ab | "**Can** you pass the salt?" |

### 2. Lexikalische Ambiguität (Homonymie & Polysemie) 📖

**Homonymie:** Völlig unverwandte Bedeutungen, die dieselbe Form teilen.
- "**bat**" — Fledermaus / Kricketschläger
- "**bank**" — Finanzinstitut / Flussufer
- "**bark**" — Hundebellen / Baumrinde
- "**spring**" — Frühling / Quelle / springen / Metallfeder

**Polysemie:** Verwandte Bedeutungen, die von einem Kernsinn ausgehen.
- "**head**" — Kopf / Anführer / Nagelkopf / Salatkopf
- "**run**" — laufen / leiten / Laufmasche / ein Fluss fließt
- "**bright**" — leuchtend / intelligent / lebhaft (Farben) / fröhlich

<div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">💡 C2-Einsicht: Homonymie vs. Polysemie</h3>
  <p>Die Unterscheidung ist wichtig: <strong>Homonyme</strong> sind separate lexikalische Einträge (unverwandte Ursprünge), während <strong>polyseme</strong> Wörter ein einzelner Eintrag mit erweiterten Bedeutungen sind. Wörterbücher listen Homonyme als separate Einträge und polyseme Bedeutungen unter einem Eintrag.</p>
</div>

### 3. Strukturelle Ambiguität 🏗️

Strukturelle (syntaktische) Ambiguität entsteht, wenn ein Satz **zwei oder mehr gültige grammatische Interpretationen** hat:

**PP-Anbindungsambiguität:**
- "I saw the man **with the telescope**."
  - Interpretation 1: Ich benutzte ein Teleskop, um ihn zu sehen.
  - Interpretation 2: Der Mann hatte ein Teleskop.

**Gerundium/Partizip-Ambiguität:**
- "**Flying** planes can be dangerous."
  - Interpretation 1: Das Fliegen von Flugzeugen ist gefährlich. ("flying" = Gerundium)
  - Interpretation 2: Fliegende Flugzeuge sind gefährlich. ("flying" = Partizip)

**Koordinationsambiguität:**
- "Old men and women were evacuated."
  - Interpretation 1: [Alte Männer] und [Frauen] — nur die Männer sind alt.
  - Interpretation 2: [Alte [Männer und Frauen]] — beide sind alt.

<GamePlaceholder id="sentenceBuilder" />

### 4. Skopusambiguität 🔍

Skopusambiguität tritt auf, wenn **Quantoren, Negation oder Modalverben** mit unterschiedlichem Skopus interpretiert werden können:

- "**Every** student didn't pass the exam."
  - Weiter Skopus: Kein Student bestand. (Every > Not)
  - Enger Skopus: Nicht alle Studenten bestanden. (Not > Every)

- "Someone loves **everyone**."
  - Lesart 1: Es gibt eine Person, die alle liebt.
  - Lesart 2: Für jede Person gibt es jemanden, der sie liebt.

### 5. Pragmatische Ambiguität & Inferenz 🧠

Pragmatische Ambiguität entsteht aus der Kluft zwischen **dem, was gesagt wird** und **dem, was gemeint ist**:

**Indirekte Sprechakte:**
- "**Can** you close the window?" (Wörtlich: Fähigkeitsfrage / Pragmatisch: Bitte)
- "It's cold in here." (Wörtlich: Feststellung / Pragmatisch: Bitte, Fenster zu schließen)

**Konversationelle Implikatur:**
- A: "Are you coming to the party?" B: "I have an exam tomorrow."
  - B sagt nicht direkt "nein", impliziert es aber durch Relevanz.

**Ironie & Sarkasmus:**
- "Oh, **great**, another meeting." (Wörtlich: positiv / Pragmatisch: negativ)
- Kontext, Ton und geteiltes Wissen bestimmen die beabsichtigte Bedeutung.

<div className="bg-amber-50 dark:bg-amber-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">⚠️ Interkulturelle Warnung</h3>
  <p>Pragmatische Inferenz ist <strong>kulturabhängig</strong>. Was im britischen Englisch als höfliche indirekte Bitte gilt, kann in anderen Varietäten wörtlich interpretiert werden. C2-Sprecher müssen sich dieser interkulturellen pragmatischen Unterschiede bewusst sein.</p>
</div>

### 6. Disambiguierungsstrategien 🎯

Wie lösen versierte Sprecher und Schreiber Ambiguität auf?

**a) Lexikalischer Kontext:** Umgebende Wörter klären die Bedeutung.
- "I deposited money at the **bank**." (finanzielle Bedeutung klar)
- "We walked along the **bank** of the river." (geographische Bedeutung klar)

**b) Syntaktische Umstrukturierung:** Umschreiben, um mehrere Interpretationen zu eliminieren.
- Mehrdeutig: "The professor said on Monday he would give the exam."
- Klar: "On Monday, the professor said he would give the exam."
- Oder: "The professor said that the exam would be on Monday."

**c) Prosodie/Intonation:** In der gesprochenen Sprache disambiguieren Betonung und Pausen.

**d) Weltwissen:** Gesunder Menschenverstand schließt unplausible Lesarten aus.
- "The chicken is ready to eat." — Wir wissen, dass Hühner auf Tellern nicht essen.

### 7. Ambiguität als literarisches Stilmittel ✍️

Auf C2-Niveau sollten Sie schätzen, wie Schriftsteller Ambiguität **absichtlich ausnutzen**:

- **Wortspiele:** "Time flies like an arrow; fruit flies like a banana." (Groucho Marx)
- **Doppeldeutigkeit:** Eine Phrase mit zwei Bedeutungen, eine oft anzüglich.
- **Poetische Ambiguität:** Keats' "Ode on a Grecian Urn" — "Beauty is truth, truth beauty" lädt zu mehreren Interpretationen ein.
- **Juristische Ambiguität:** Verträge können angefochten werden, wenn Klauseln mehrere Lesarten haben.

### 8. Häufige Fehler ❌

**Fehler 1:** Unbeabsichtigte Ambiguität in formellem Schreiben erzeugen.
- ❌ "The committee discussed the report that was overdue." (Was war überfällig — die Diskussion oder der Bericht?)
- ✅ "The committee discussed the overdue report."

**Fehler 2:** 'That' als Komplementierer nicht verwenden.
- ❌ "She argued the policy was flawed." (mehrdeutig)
- ✅ "She argued **that** the policy was flawed." (klar)

**Fehler 3:** Hängende Modifikatoren, die absurde Ambiguität erzeugen.
- ❌ "Walking down the street, the trees were beautiful."
- ✅ "Walking down the street, **I** found the trees beautiful."

<GamePlaceholder id="fixTheMistake" />

<div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">🎯 Zusammenfassung</h3>
  <ul className="list-disc list-inside space-y-1">
    <li><strong>Lexikalische Ambiguität</strong> — gleiches Wort, verschiedene Bedeutungen (bank, bat, spring).</li>
    <li><strong>Strukturelle Ambiguität</strong> — gleicher Satz, verschiedene grammatische Interpretationen.</li>
    <li><strong>Referenzielle Ambiguität</strong> — unklare Pronomenreferenzen.</li>
    <li><strong>Skopusambiguität</strong> — Quantoren und Negation interagieren unvorhersehbar.</li>
    <li><strong>Pragmatische Ambiguität</strong> — was gesagt wird vs. was gemeint ist.</li>
    <li><strong>Disambiguierung</strong> nutzt Kontext, Umstrukturierung, Intonation und Weltwissen.</li>
  </ul>
</div>

---

### 🎮 Trainings-Arena

**🏎️ Grammar Racer: Ambiguitätsanalyse**
<GamePlaceholder id="grammarRacer" />

### 🎯 Praktische Übung

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border-2 border-green-300">
  <h3 className="font-bold text-green-800 dark:text-green-200 mb-4">📝 Ambiguitätsanalyse-Challenge:</h3>
  <ol className="list-decimal list-inside space-y-2">
    <li>Finden und erklären Sie 3 Beispiele für strukturelle Ambiguität in Zeitungsüberschriften.</li>
    <li>Schreiben Sie 5 absichtlich mehrdeutige Sätze und liefern Sie beide Interpretationen.</li>
    <li>Disambiguieren Sie: "The professor said on Friday he would cancel class" (zwei Lesarten).</li>
    <li>Analysieren Sie die Ambiguität in "Everyone loves someone" — zeichnen Sie die zwei Skopuslesarten.</li>
    <li>Erstellen Sie einen kurzen humorvollen Text, der lexikalische Ambiguität (Wortspiele) für komische Wirkung ausnutzt.</li>
  </ol>
</div>
`
  }
};
