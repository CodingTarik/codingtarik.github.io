import React from 'react';
import GrammarGame from '../../../components/grammar-games/GrammarGame';

const sentenceBuilderData = [
  {
    prompt: { en: "She ___ have left already — her coat is gone. (logical deduction, high certainty)", de: "Sie muss schon gegangen sein — ihr Mantel ist weg. (logische Schlussfolgerung, hohe Sicherheit)" },
    words: ["must", "might", "could", "may"],
    correct: "must",
    explanation: { en: "'Must have + past participle' expresses a strong logical deduction about a past event. 'Might/may/could' express lower certainty.", de: "'Must have + Partizip Perfekt' drückt eine starke logische Schlussfolgerung über ein vergangenes Ereignis aus. 'Might/may/could' drücken geringere Sicherheit aus." }
  },
  {
    prompt: { en: "You ___ have told me earlier — I would have changed my plans. (criticism/regret about the past)", de: "Du hättest es mir früher sagen können — ich hätte meine Pläne geändert. (Kritik/Bedauern über die Vergangenheit)" },
    words: ["could", "must", "may", "shall"],
    correct: "could",
    explanation: { en: "'Could have + past participle' expresses criticism or regret — the action was possible but did not happen. It implies mild reproach.", de: "'Could have + Partizip Perfekt' drückt Kritik oder Bedauern aus — die Handlung war möglich, ist aber nicht geschehen. Es impliziert leichten Vorwurf." }
  },
  {
    prompt: { en: "The results ___ suggest a correlation, but further research is needed. (tentative, hedged possibility)", de: "Die Ergebnisse könnten auf eine Korrelation hindeuten, aber weitere Forschung ist nötig. (vorsichtig, abgesicherte Möglichkeit)" },
    words: ["may", "must", "will", "shall"],
    correct: "may",
    explanation: { en: "'May' in academic English is used for hedged, tentative claims. It expresses possibility without commitment — essential in scholarly writing.", de: "'May' wird im akademischen Englisch für vorsichtige, vorläufige Aussagen verwendet. Es drückt Möglichkeit ohne Festlegung aus." }
  },
  {
    prompt: { en: "He ___ be the most talented musician I've ever heard — I'm not entirely sure. (speculative possibility)", de: "Er könnte der talentierteste Musiker sein, den ich je gehört habe — ich bin mir nicht ganz sicher. (spekulative Möglichkeit)" },
    words: ["might", "must", "will", "shall"],
    correct: "might",
    explanation: { en: "'Might' expresses a more tentative possibility than 'may'. At C2, the subtle distinction matters: 'might' = less certain, more speculative.", de: "'Might' drückt eine vorsichtigere Möglichkeit aus als 'may'. Auf C2 ist die subtile Unterscheidung wichtig: 'might' = weniger sicher, spekulativer." }
  },
  {
    prompt: { en: "You ___ not have spoken to her like that — it was completely inappropriate. (strong moral criticism)", de: "Du hättest so nicht mit ihr sprechen sollen — es war völlig unangemessen. (starke moralische Kritik)" },
    words: ["should", "could", "might", "would"],
    correct: "should",
    explanation: { en: "'Should not have + past participle' expresses strong moral criticism — the action was wrong and should not have occurred.", de: "'Should not have + Partizip Perfekt' drückt starke moralische Kritik aus — die Handlung war falsch und hätte nicht geschehen sollen." }
  },
  {
    prompt: { en: "The package ___ arrive tomorrow, but don't count on it. (uncertain future possibility)", de: "Das Paket könnte morgen ankommen, aber verlasse dich nicht darauf. (unsichere Zukunftsmöglichkeit)" },
    words: ["could", "will", "must", "shall"],
    correct: "could",
    explanation: { en: "'Could' for future possibility expresses uncertainty — it is less definite than 'may' or 'might' and implies doubt.", de: "'Could' für zukünftige Möglichkeit drückt Unsicherheit aus — es ist weniger bestimmt als 'may' oder 'might' und impliziert Zweifel." }
  }
];

const fixTheMistakeData = [
  {
    sentence: "She must have been at the party — I think I saw her, but I'm not sure.",
    mistakeIndex: 1,
    correction: "may/might",
    explanation: { en: "'Must have been' expresses high certainty, but 'I'm not sure' signals uncertainty. Use 'may/might have been' to match the speaker's doubt.", de: "'Must have been' drückt hohe Sicherheit aus, aber 'I'm not sure' signalisiert Unsicherheit. Verwenden Sie 'may/might have been', um den Zweifel des Sprechers widerzuspiegeln." }
  },
  {
    sentence: "You should have told me — but honestly, it wouldn't have mattered either way.",
    mistakeIndex: 1,
    correction: "could",
    explanation: { en: "If it wouldn't have mattered, 'should have' (implying obligation/criticism) is too strong. 'Could have told me' is more appropriate — it acknowledges possibility without moral judgment.", de: "Wenn es ohnehin egal gewesen wäre, ist 'should have' (das Verpflichtung/Kritik impliziert) zu stark. 'Could have told me' ist angemessener." }
  },
  {
    sentence: "The experiment can prove the hypothesis correct, pending further analysis.",
    mistakeIndex: 2,
    correction: "may",
    explanation: { en: "In academic hedging, 'can' is too assertive for uncertain outcomes. 'May prove' is the appropriate tentative modal for scholarly uncertainty.", de: "Im akademischen Hedging ist 'can' zu bestimmt für unsichere Ergebnisse. 'May prove' ist das angemessene vorsichtige Modal." }
  },
  {
    sentence: "He might have been the murderer — the DNA evidence proves it beyond doubt.",
    mistakeIndex: 1,
    correction: "must",
    explanation: { en: "If DNA evidence 'proves it beyond doubt', then 'might' (low certainty) contradicts the evidence. 'Must have been' expresses the strong deduction warranted here.", de: "Wenn DNA-Beweise 'es zweifelsfrei beweisen', widerspricht 'might' (geringe Sicherheit) den Beweisen. 'Must have been' drückt die hier gerechtfertigte starke Schlussfolgerung aus." }
  },
  {
    sentence: "You shall not have eaten all the cake — there were other people at the party too!",
    mistakeIndex: 1,
    correction: "shouldn't",
    explanation: { en: "'Shall not have' is archaic/unnatural in modern English for expressing criticism. 'Shouldn't have eaten' is the correct form for past criticism.", de: "'Shall not have' ist veraltet/unnatürlich im modernen Englisch für Kritik. 'Shouldn't have eaten' ist die korrekte Form für Kritik an Vergangenem." }
  }
];

const grammarRacerData = [
  {
    prompt: "She ___ be at work — her car is in the parking lot. (strong deduction)",
    options: ["must", "might", "could"],
    correct: "must",
    explanation: "Strong evidence (car in lot) warrants 'must' for logical deduction, not the weaker 'might' or 'could'."
  },
  {
    prompt: "He ___ have forgotten — he's usually very reliable. (tentative speculation)",
    options: ["might", "must", "will"],
    correct: "might",
    explanation: "'Might have' expresses tentative speculation. 'Must have' would be too certain given the speaker's hedging ('usually')."
  },
  {
    prompt: "You ___ have warned us about the danger! (strong past criticism)",
    options: ["should", "could", "might"],
    correct: "should",
    explanation: "'Should have' expresses the strongest moral criticism — it was your obligation and you failed."
  },
  {
    prompt: "The findings ___ indicate a new trend, though more data is required. (academic hedging)",
    options: ["may", "must", "will"],
    correct: "may",
    explanation: "'May' is the standard academic hedging modal — tentative and non-committal, perfect for preliminary conclusions."
  },
  {
    prompt: "I ___ have helped you if you had asked me. (unrealized past ability/willingness)",
    options: ["would", "should", "must"],
    correct: "would",
    explanation: "'Would have + past participle' in the main clause of a third conditional expresses an unrealized past possibility."
  }
];

export const modalNuances = {
  id: 'c2_g4',
  title: {
    en: 'Nuance in Modal Verbs',
    de: 'Nuancen bei Modalverben'
  },
  description: {
    en: "Master the subtle differences between may, might, could for possibility, and past modals for criticism and regret.",
    de: "Meistern Sie die feinen Unterschiede zwischen may, might, could für Möglichkeit und Vergangenheitsmodale für Kritik und Bedauern."
  },
  components: {
    sentenceBuilder: <GrammarGame type="sentenceBuilder" data={sentenceBuilderData} />,
    fixTheMistake: <GrammarGame type="fixTheMistake" data={fixTheMistakeData} />,
    grammarRacer: <GrammarGame type="grammarRacer" data={grammarRacerData} />
  },
  content: {
    en: `
## Nuance in Modal Verbs 🎯

At C2 level, modal verbs are no longer about basic rules — they are about **shades of meaning**. The difference between "may," "might," and "could" for possibility; between "should have," "could have," and "would have" for past commentary — these distinctions are what separate proficient speakers from truly masterful ones.

### 1. The Possibility Spectrum 📊

English has a rich gradient of modals for expressing degrees of certainty:

| Modal | Certainty Level | Example |
|-------|----------------|---------|
| **will** | ~95% (near certainty) | "She **will** be at the office by now." |
| **must** | ~90% (strong logical deduction) | "She **must** be at the office — her car is there." |
| **should** | ~75% (reasonable expectation) | "She **should** be at the office — she usually arrives early." |
| **may** | ~50% (open possibility) | "She **may** be at the office — I'm not sure." |
| **might** | ~35% (tentative possibility) | "She **might** be at the office, but I doubt it." |
| **could** | ~25% (theoretical/remote possibility) | "She **could** be at the office, though it's unlikely." |

<div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">💡 Critical Distinction: May vs. Might</h3>
  <p>Many learners treat 'may' and 'might' as interchangeable. At C2, the distinction matters:</p>
  <ul className="list-disc list-inside space-y-1">
    <li><strong>May</strong> = genuine, open possibility: "It <strong>may</strong> rain tomorrow." (50/50)</li>
    <li><strong>Might</strong> = more tentative, speculative: "It <strong>might</strong> rain, but I doubt it." (less likely)</li>
    <li>In formal/academic writing, <strong>may</strong> is the standard hedging modal.</li>
  </ul>
</div>

### 2. Past Modals: The Commentary System 🔍

Past modals (modal + have + past participle) allow you to **comment on past events** with different pragmatic force:

**a) Deduction about the past:**
- "She **must have** left early." (I'm almost certain she did.)
- "She **may/might have** left early." (It's possible, but I'm not sure.)
- "She **could have** left early." (It's theoretically possible.)

**b) Criticism and regret:**
- "You **should have** told me." (It was your duty — you failed. Strong criticism.)
- "You **could have** told me." (You had the opportunity — why didn't you? Mild reproach.)
- "You **might have** told me!" (British English — an expression of annoyance at not being informed.)
- "You **needn't have** bothered." (You did it, but it was unnecessary.)

**c) Unrealized possibilities:**
- "I **would have** helped, but I didn't know." (Willingness that was never actualized.)
- "She **could have** become a doctor." (She had the ability but chose differently.)

<GamePlaceholder id="sentenceBuilder" />

### 3. Academic Hedging with Modals 🎓

In scholarly writing, modals are essential tools for **epistemic hedging** — expressing claims with appropriate caution:

| Too strong | Appropriately hedged |
|-----------|---------------------|
| "This **proves** that…" | "This **may suggest** that…" |
| "X **causes** Y." | "X **could contribute** to Y." |
| "The data **show**…" | "The data **appear to indicate**…" |

**Common hedging patterns:**
- "It **may** be the case that…"
- "This **could** potentially indicate…"
- "The evidence **might** suggest…"
- "One **might** argue that…"

<div className="bg-amber-50 dark:bg-amber-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">⚠️ Over-hedging</h3>
  <p>While hedging is important, <strong>excessive hedging</strong> weakens your argument:</p>
  <ul className="list-disc list-inside space-y-1">
    <li>❌ "It might possibly perhaps be the case that this could potentially suggest…"</li>
    <li>✅ "The evidence suggests that…" or "This may indicate that…"</li>
  </ul>
</div>

### 4. Modal Nuances in Politeness 🤝

Modals play a crucial role in **pragmatic politeness** — the same request changes dramatically:

| Directness | Example | Politeness Level |
|------------|---------|-----------------|
| Very direct | "Move your car." | Rude |
| Direct | "**Can** you move your car?" | Neutral |
| Polite | "**Could** you move your car?" | Polite |
| Very polite | "**Would** you mind moving your car?" | Very polite |
| Extremely polite | "I was wondering if you **might** be able to move your car?" | Extremely polite |
| Formal/deferential | "**Might** I trouble you to relocate your vehicle?" | Formal/deferential |

### 5. Shall vs. Will: The Lost Distinction 📜

In traditional British English, **shall** and **will** had distinct roles:
- **Shall** (1st person) = simple future: "I **shall** return tomorrow."
- **Will** (1st person) = determination/promise: "I **will** not be defeated!"
- **Shall** (2nd/3rd person) = command/determination: "You **shall** not pass!"
- **Will** (2nd/3rd person) = simple future: "She **will** arrive at noon."

Today, this distinction has largely collapsed in everyday English, but it survives in:
- Legal language: "The tenant **shall** pay rent monthly."
- Literary/formal: "We **shall** overcome."
- Offers/suggestions: "**Shall** I open the window?"

### 6. Common Mistakes ❌

**Mistake 1:** Using 'must' for possibility when you mean speculation.
- ❌ "She must be at the party — I'm not sure though." (Contradictory)
- ✅ "She **might** be at the party — I'm not sure."

**Mistake 2:** Confusing 'should have' and 'could have' for past criticism.
- "You **should have** told me." = It was your obligation. (Stronger criticism)
- "You **could have** told me." = You had the chance. (Milder reproach)

**Mistake 3:** Using 'can' instead of 'may/might' in academic writing.
- ❌ "This **can** indicate a trend." (Too assertive)
- ✅ "This **may** indicate a trend." (Appropriately hedged)

**Mistake 4:** Ignoring the distinction between 'needn't have' and 'didn't need to'.
- "You **needn't have** bought flowers." = You bought them, but it was unnecessary.
- "You **didn't need to** buy flowers." = It was unnecessary (and you may or may not have bought them).

<GamePlaceholder id="fixTheMistake" />

<div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">🎯 Summary</h3>
  <ul className="list-disc list-inside space-y-1">
    <li><strong>Possibility gradient:</strong> will > must > should > may > might > could</li>
    <li><strong>Past modals</strong> comment on past events: deduction, criticism, regret, unrealized possibility.</li>
    <li><strong>Academic hedging</strong> uses may/might/could to temper claims with appropriate caution.</li>
    <li><strong>Politeness</strong> is modulated through modal choice: can < could < would < might.</li>
    <li><strong>Precision</strong> in modal usage is a hallmark of C2 proficiency.</li>
  </ul>
</div>

---

### 🎮 Practice Arena

**🏎️ Grammar Racer: Modal Precision**
<GamePlaceholder id="grammarRacer" />

### 🎯 Practical Exercise

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border-2 border-green-300">
  <h3 className="font-bold text-green-800 dark:text-green-200 mb-4">📝 Modal Nuance Challenge:</h3>
  <ol className="list-decimal list-inside space-y-2">
    <li>Write a paragraph about a historical event using at least 5 different past modals with distinct meanings.</li>
    <li>Rewrite these sentences with increasing politeness using different modals: "Lend me your pen." (4 versions)</li>
    <li>Write an academic paragraph that uses 'may', 'might', and 'could' correctly for hedging.</li>
    <li>Explain the difference in meaning: "You should have called" vs. "You could have called" vs. "You might have called."</li>
    <li>Identify which modal is wrong in 5 sentences your teacher provides and explain why.</li>
  </ol>
</div>
`,
    de: `
## Nuancen bei Modalverben 🎯

Auf C2-Niveau geht es bei Modalverben nicht mehr um Grundregeln — es geht um **Bedeutungsschattierungen**. Der Unterschied zwischen "may," "might" und "could" für Möglichkeit; zwischen "should have," "could have" und "would have" für Kommentare zur Vergangenheit — diese Unterscheidungen trennen kompetente Sprecher von wahrhaft meisterhaften.

### 1. Das Möglichkeitsspektrum 📊

Englisch hat einen reichen Gradienten von Modalverben für den Ausdruck verschiedener Sicherheitsgrade:

| Modal | Sicherheitsgrad | Beispiel |
|-------|----------------|----------|
| **will** | ~95% (nahe Gewissheit) | "She **will** be at the office by now." |
| **must** | ~90% (starke logische Schlussfolgerung) | "She **must** be at the office — her car is there." |
| **should** | ~75% (vernünftige Erwartung) | "She **should** be at the office — she usually arrives early." |
| **may** | ~50% (offene Möglichkeit) | "She **may** be at the office — I'm not sure." |
| **might** | ~35% (vorsichtige Möglichkeit) | "She **might** be at the office, but I doubt it." |
| **could** | ~25% (theoretische/entfernte Möglichkeit) | "She **could** be at the office, though it's unlikely." |

<div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">💡 Kritische Unterscheidung: May vs. Might</h3>
  <p>Viele Lernende behandeln 'may' und 'might' als austauschbar. Auf C2-Niveau ist die Unterscheidung wichtig:</p>
  <ul className="list-disc list-inside space-y-1">
    <li><strong>May</strong> = echte, offene Möglichkeit: "It <strong>may</strong> rain tomorrow." (50/50)</li>
    <li><strong>Might</strong> = vorsichtiger, spekulativer: "It <strong>might</strong> rain, but I doubt it." (weniger wahrscheinlich)</li>
    <li>Im formellen/akademischen Schreiben ist <strong>may</strong> das Standard-Hedging-Modal.</li>
  </ul>
</div>

### 2. Vergangenheitsmodale: Das Kommentarsystem 🔍

Vergangenheitsmodale (Modal + have + Partizip Perfekt) ermöglichen es, **vergangene Ereignisse zu kommentieren** mit unterschiedlicher pragmatischer Kraft:

**a) Schlussfolgerung über die Vergangenheit:**
- "She **must have** left early." (Ich bin fast sicher, dass sie es tat.)
- "She **may/might have** left early." (Es ist möglich, aber ich bin nicht sicher.)
- "She **could have** left early." (Es ist theoretisch möglich.)

**b) Kritik und Bedauern:**
- "You **should have** told me." (Es war deine Pflicht — du hast versagt. Starke Kritik.)
- "You **could have** told me." (Du hattest die Gelegenheit — warum hast du es nicht getan? Milder Vorwurf.)
- "You **might have** told me!" (Britisches Englisch — Ausdruck von Verärgerung, nicht informiert worden zu sein.)
- "You **needn't have** bothered." (Du hast es getan, aber es war unnötig.)

**c) Nicht verwirklichte Möglichkeiten:**
- "I **would have** helped, but I didn't know." (Bereitschaft, die nie umgesetzt wurde.)
- "She **could have** become a doctor." (Sie hatte die Fähigkeit, wählte aber anders.)

<GamePlaceholder id="sentenceBuilder" />

### 3. Akademisches Hedging mit Modalverben 🎓

Im wissenschaftlichen Schreiben sind Modalverben wesentliche Werkzeuge für **epistemisches Hedging** — das Ausdrücken von Behauptungen mit angemessener Vorsicht:

| Zu stark | Angemessen abgesichert |
|----------|----------------------|
| "This **proves** that…" | "This **may suggest** that…" |
| "X **causes** Y." | "X **could contribute** to Y." |
| "The data **show**…" | "The data **appear to indicate**…" |

**Häufige Hedging-Muster:**
- "It **may** be the case that…"
- "This **could** potentially indicate…"
- "The evidence **might** suggest…"
- "One **might** argue that…"

<div className="bg-amber-50 dark:bg-amber-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">⚠️ Über-Hedging</h3>
  <p>Während Hedging wichtig ist, schwächt <strong>übermäßiges Hedging</strong> Ihr Argument:</p>
  <ul className="list-disc list-inside space-y-1">
    <li>❌ "It might possibly perhaps be the case that this could potentially suggest…"</li>
    <li>✅ "The evidence suggests that…" oder "This may indicate that…"</li>
  </ul>
</div>

### 4. Modale Nuancen in der Höflichkeit 🤝

Modalverben spielen eine entscheidende Rolle in der **pragmatischen Höflichkeit** — dieselbe Bitte verändert sich dramatisch:

| Direktheit | Beispiel | Höflichkeitsstufe |
|------------|---------|------------------|
| Sehr direkt | "Move your car." | Unhöflich |
| Direkt | "**Can** you move your car?" | Neutral |
| Höflich | "**Could** you move your car?" | Höflich |
| Sehr höflich | "**Would** you mind moving your car?" | Sehr höflich |
| Extrem höflich | "I was wondering if you **might** be able to move your car?" | Extrem höflich |

### 5. Shall vs. Will: Die verlorene Unterscheidung 📜

Im traditionellen britischen Englisch hatten **shall** und **will** unterschiedliche Rollen:
- **Shall** (1. Person) = einfache Zukunft: "I **shall** return tomorrow."
- **Will** (1. Person) = Entschlossenheit/Versprechen: "I **will** not be defeated!"
- **Shall** (2./3. Person) = Befehl/Entschlossenheit: "You **shall** not pass!"

Heute ist diese Unterscheidung im Alltag weitgehend verschwunden, aber sie überlebt in:
- Juristischer Sprache: "The tenant **shall** pay rent monthly."
- Literarisch/formell: "We **shall** overcome."
- Angeboten/Vorschlägen: "**Shall** I open the window?"

### 6. Häufige Fehler ❌

**Fehler 1:** 'Must' für Möglichkeit verwenden, wenn man Spekulation meint.
- ❌ "She must be at the party — I'm not sure though." (Widersprüchlich)
- ✅ "She **might** be at the party — I'm not sure."

**Fehler 2:** 'Should have' und 'could have' bei Kritik an der Vergangenheit verwechseln.
- "You **should have** told me." = Es war deine Pflicht. (Stärkere Kritik)
- "You **could have** told me." = Du hattest die Chance. (Milderer Vorwurf)

**Fehler 3:** 'Can' statt 'may/might' im akademischen Schreiben verwenden.
- ❌ "This **can** indicate a trend." (Zu bestimmt)
- ✅ "This **may** indicate a trend." (Angemessen abgesichert)

**Fehler 4:** Die Unterscheidung zwischen 'needn't have' und 'didn't need to' ignorieren.
- "You **needn't have** bought flowers." = Du hast sie gekauft, aber es war unnötig.
- "You **didn't need to** buy flowers." = Es war unnötig (und du hast sie vielleicht gekauft oder auch nicht).

<GamePlaceholder id="fixTheMistake" />

<div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">🎯 Zusammenfassung</h3>
  <ul className="list-disc list-inside space-y-1">
    <li><strong>Möglichkeitsgradient:</strong> will > must > should > may > might > could</li>
    <li><strong>Vergangenheitsmodale</strong> kommentieren vergangene Ereignisse: Schlussfolgerung, Kritik, Bedauern, nicht verwirklichte Möglichkeit.</li>
    <li><strong>Akademisches Hedging</strong> nutzt may/might/could, um Behauptungen mit angemessener Vorsicht zu mildern.</li>
    <li><strong>Höflichkeit</strong> wird durch Modalwahl moduliert: can < could < would < might.</li>
    <li><strong>Präzision</strong> im Modalgebrauch ist ein Markenzeichen der C2-Kompetenz.</li>
  </ul>
</div>

---

### 🎮 Trainings-Arena

**🏎️ Grammar Racer: Modale Präzision**
<GamePlaceholder id="grammarRacer" />

### 🎯 Praktische Übung

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border-2 border-green-300">
  <h3 className="font-bold text-green-800 dark:text-green-200 mb-4">📝 Modale Nuancen-Challenge:</h3>
  <ol className="list-decimal list-inside space-y-2">
    <li>Schreiben Sie einen Absatz über ein historisches Ereignis mit mindestens 5 verschiedenen Vergangenheitsmodalen mit unterschiedlichen Bedeutungen.</li>
    <li>Schreiben Sie diese Sätze mit steigender Höflichkeit um: "Lend me your pen." (4 Versionen)</li>
    <li>Verfassen Sie einen akademischen Absatz, der 'may', 'might' und 'could' korrekt für Hedging verwendet.</li>
    <li>Erklären Sie den Bedeutungsunterschied: "You should have called" vs. "You could have called" vs. "You might have called."</li>
    <li>Identifizieren Sie, welches Modal falsch ist in 5 Sätzen und erklären Sie warum.</li>
  </ol>
</div>
`
  }
};
