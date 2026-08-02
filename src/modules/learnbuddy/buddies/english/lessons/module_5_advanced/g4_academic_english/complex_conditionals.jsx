import React from 'react';
import GrammarGame from '../../../components/grammar-games/GrammarGame';

const sentenceBuilderData = [
  {
    prompt: { en: "___ I to win the lottery, I would donate half to charity.", de: "Sollte ich im Lotto gewinnen, würde ich die Hälfte für wohltätige Zwecke spenden." },
    words: ["Were", "Would", "Had", "Should"],
    correct: "Were",
    explanation: { en: "Inverted conditional: 'Were I to win' = 'If I were to win'. Formal style without 'if'.", de: "Invertierter Konditionalsatz: 'Were I to win' = 'If I were to win'. Formeller Stil ohne 'if'." }
  },
  {
    prompt: { en: "___ the government invested more in education, the economy would improve.", de: "Wenn die Regierung mehr in Bildung investieren würde, würde die Wirtschaft sich verbessern." },
    words: ["Were", "Had", "Should", "Would"],
    correct: "Were",
    explanation: { en: "'Were the government to invest' = 'If the government invested/were to invest'. Formal inverted second conditional.", de: "'Were the government to invest' = 'If the government invested'. Formell invertierter zweiter Konditionalsatz." }
  },
  {
    prompt: { en: "I would have helped you, ___ you asked me.", de: "Ich hätte dir geholfen, hättest du mich gefragt." },
    words: ["had", "if", "should", "were"],
    correct: "had",
    explanation: { en: "'...had you asked me' = 'if you had asked me'. Inverted third conditional with the 'if' clause at the end.", de: "'...had you asked me' = 'if you had asked me'. Invertierter dritter Konditionalsatz." }
  },
  {
    prompt: { en: "___ that I had more time, I would learn another language.", de: "Vorausgesetzt, dass ich mehr Zeit hätte, würde ich eine weitere Sprache lernen." },
    words: ["Supposing", "Unless", "Although", "Despite"],
    correct: "Supposing",
    explanation: { en: "'Supposing (that)' is an alternative to 'if' that introduces a hypothetical scenario. Similar to 'What if...'", de: "'Supposing (that)' ist eine Alternative zu 'if', die ein hypothetisches Szenario einführt." }
  },
  {
    prompt: { en: "You can borrow my car ___ you return it by Friday.", de: "Du kannst mein Auto ausleihen, vorausgesetzt, du gibst es bis Freitag zurück." },
    words: ["provided", "unless", "supposing", "although"],
    correct: "provided",
    explanation: { en: "'Provided (that)' = 'only if' / 'on the condition that'. A stronger, more formal version of 'if'.", de: "'Provided (that)' = 'nur wenn' / 'unter der Bedingung, dass'. Eine stärkere, formellere Version von 'if'." }
  },
  {
    prompt: { en: "If she ___ to have studied medicine, she might have become a surgeon.", de: "Wenn sie Medizin studiert hätte, wäre sie vielleicht Chirurgin geworden." },
    words: ["were", "was", "had", "would"],
    correct: "were",
    explanation: { en: "Mixed conditional with modal: 'If she were to have studied' blends hypothetical and past. Less common but possible in formal English.", de: "Gemischter Konditionalsatz mit Modal: 'If she were to have studied' vermischt hypothetisch und Vergangenheit." }
  }
];

const fixTheMistakeData = [
  {
    sentence: "If I would have known, I would have come earlier.",
    mistakeIndex: 1,
    correction: "had",
    explanation: { en: "Never use 'would' in the if-clause! 'If I had known' (not 'If I would have known'). 'Would' goes in the result clause only.", de: "Niemals 'would' in der if-Klausel! 'If I had known' (nicht 'If I would have known')." }
  },
  {
    sentence: "Unless you don't submit the form, your application will be processed.",
    mistakeIndex: 2,
    correction: "you submit",
    explanation: { en: "'Unless' already means 'if not'. Double negative: 'unless you don't' = 'if you do'. Remove the 'don't': 'Unless you submit...'", de: "'Unless' bedeutet bereits 'wenn nicht'. Doppelte Verneinung entfernen: 'Unless you submit...'" }
  },
  {
    sentence: "Provided you would arrive on time, we can start the meeting.",
    mistakeIndex: 2,
    correction: "arrive",
    explanation: { en: "After 'provided (that)', use present simple (not 'would'): 'Provided you arrive on time...'", de: "Nach 'provided (that)' steht das Präsens (nicht 'would'): 'Provided you arrive on time...'" }
  },
  {
    sentence: "Had she knew about the delay, she would have made other arrangements.",
    mistakeIndex: 2,
    correction: "known",
    explanation: { en: "Inverted conditionals use 'had + past participle': 'Had she known' (not 'Had she knew').", de: "Invertierte Konditionalsätze verwenden 'had + Partizip Perfekt': 'Had she known' (nicht 'Had she knew')." }
  }
];

const grammarRacerData = [
  {
    prompt: "___ you need any further assistance, please do not hesitate to contact us.",
    options: ["Should", "Would", "Had"],
    correct: "Should",
    explanation: "'Should you need' = 'If you should need' — formal inverted first conditional."
  },
  {
    prompt: "We'll proceed with the plan ___ there are any major objections.",
    options: ["unless", "provided", "supposing"],
    correct: "unless",
    explanation: "'Unless' = 'if there are not'. The plan goes ahead except if there are objections."
  },
  {
    prompt: "___ it not been for her quick thinking, the situation could have been worse.",
    options: ["Had", "Were", "Should"],
    correct: "Had",
    explanation: "'Had it not been for' = 'If it had not been for' — inverted third conditional."
  },
  {
    prompt: "I'll lend you the money ___ that you pay me back within a month.",
    options: ["on condition", "unless", "supposing"],
    correct: "on condition",
    explanation: "'On condition that' = 'only if' — a formal conditional connector."
  }
];

export const complexConditionals = {
  id: 'c1_g11',
  title: {
    en: 'Complex Conditionals',
    de: 'Komplexe Konditionalsätze'
  },
  description: {
    en: "Master inverted, implied, and mixed conditionals with modals, plus unless/provided at C1 level.",
    de: "Invertierte, implizite und gemischte Konditionalsätze mit Modalverben, plus unless/provided auf C1-Niveau meistern."
  },
  components: {
    sentenceBuilder: <GrammarGame type="sentenceBuilder" data={sentenceBuilderData} />,
    fixTheMistake: <GrammarGame type="fixTheMistake" data={fixTheMistakeData} />,
    grammarRacer: <GrammarGame type="grammarRacer" data={grammarRacerData} />,
  },
  content: {
    en: `
## Complex Conditionals 🔀📜

At C1 level, conditionals go far beyond the "first/second/third" formula. You need to master **inverted conditionals**, **implied conditions**, **mixed forms with modals**, and **formal conditional connectors**.

### 1. Inverted Conditionals (No "If") 📜

Drop "if" and invert the subject and auxiliary for a **formal, literary** tone:

| Standard | Inverted |
|---|---|
| **If** I **had** known... | **Had** I known... |
| **If** she **were** to accept... | **Were** she to accept... |
| **If** you **should** need help... | **Should** you need help... |

- "**Had** the company invested earlier, profits would have been higher."
- "**Were** the proposal accepted, it would transform the industry."
- "**Should** any issues arise, please notify us immediately."

<div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">💡 Three inversion patterns:</h3>
  <p>• <strong>Had + subject + pp</strong> = Third conditional (past hypothetical)</p>
  <p>• <strong>Were + subject + to infinitive</strong> = Second conditional (present/future hypothetical)</p>
  <p>• <strong>Should + subject + verb</strong> = First conditional (unlikely but possible)</p>
</div>

### 2. Implied Conditionals 🫥

Sometimes the "if" clause is **implied** rather than stated:

- "A wise person **would have** acted differently." (= If they were wise, they would have...)
- "**Without** your support, we **couldn't have** succeeded." (= If it hadn't been for your support...)
- "**But for** the rain, we **would have** gone hiking." (= If it hadn't been for the rain...)
- "**Otherwise**, we **would have** missed the deadline." (= If we hadn't done that...)

### 3. Mixed Conditionals with Modals 🎛️

Combine conditionals with **modals** for nuanced meaning:

- "If she **had studied** harder, she **might** be a doctor now." (past → present, with uncertainty)
- "If he **were** more careful, he **wouldn't have** made that mistake." (general → past)
- "If they **had** invested wisely, they **could** be millionaires today." (past → present possibility)
- "**Had** we known, we **might have** been able to help." (inverted + modal = uncertainty about past)

<GamePlaceholder id="sentenceBuilder" />

### 4. Formal Conditional Connectors 🔗

Beyond "if" and "unless," C1 English uses formal alternatives:

| Connector | Meaning | Example |
|---|---|---|
| **Provided (that)** | Only if | "You can stay, **provided that** you follow the rules." |
| **On condition (that)** | Only if (very formal) | "I'll agree, **on condition that** the terms are fair." |
| **Supposing (that)** | What if / Imagine | "**Supposing** it rained, what would we do?" |
| **As long as** | If and only if | "You'll succeed **as long as** you stay focused." |
| **Even if** | Despite the condition | "I'll go **even if** it rains." |
| **But for** | If not for (formal) | "**But for** your help, I'd have failed." |

### 5. "Unless" Revisited at C1 ⚠️

**"Unless" = "if not"** — but be careful with double negatives:

- ✅ "**Unless** you hurry, we'll be late." (= If you don't hurry)
- ❌ "**Unless** you **don't** hurry, we'll be late." (Double negative = wrong!)
- ✅ "**Unless** otherwise stated, all prices include tax."

### 6. Common Mistakes ❌

**Mistake 1:** "Would" in the if-clause.
- ❌ "If I **would have** known..."
- ✅ "If I **had** known..."

**Mistake 2:** Double negative with "unless."
- ❌ "Unless you **don't** finish..."
- ✅ "Unless you finish..." (= if you don't finish)

**Mistake 3:** Wrong participle form in inversion.
- ❌ "Had she **knew** about it..."
- ✅ "Had she **known** about it..."

<GamePlaceholder id="fixTheMistake" />

<div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">🎯 Summary:</h3>
  <ul className="list-disc list-inside space-y-1">
    <li><strong>Inverted:</strong> Had I / Were she / Should you — formal, no "if"</li>
    <li><strong>Implied:</strong> Without, but for, otherwise — condition understood</li>
    <li><strong>Mixed + modals:</strong> might/could in result clause for nuance</li>
    <li><strong>Formal connectors:</strong> provided, on condition, supposing, as long as</li>
  </ul>
</div>

---

### 🎮 Practice Arena
<GamePlaceholder id="grammarRacer" />
`,
    de: `
## Komplexe Konditionalsätze 🔀📜

Auf C1-Niveau gehen Konditionalsätze weit über die "erste/zweite/dritte" Formel hinaus. Du musst **invertierte Konditionalsätze**, **implizite Bedingungen**, **gemischte Formen mit Modalverben** und **formelle Konnektoren** beherrschen.

### 1. Invertierte Konditionalsätze (Ohne "If") 📜

Lasse "if" weg und invertiere Subjekt und Hilfsverb für einen **formellen, literarischen** Ton:

| Standard | Invertiert |
|---|---|
| **If** I **had** known... | **Had** I known... |
| **If** she **were** to accept... | **Were** she to accept... |
| **If** you **should** need help... | **Should** you need help... |

- "**Had** the company invested earlier, profits would have been higher."
- "**Were** the proposal accepted, it would transform the industry."
- "**Should** any issues arise, please notify us immediately."

<div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">💡 Drei Inversionsmuster:</h3>
  <p>• <strong>Had + Subjekt + pp</strong> = Dritter Konditionalsatz (vergangene Hypothese)</p>
  <p>• <strong>Were + Subjekt + to + Infinitiv</strong> = Zweiter Konditionalsatz (Gegenwart/Zukunft)</p>
  <p>• <strong>Should + Subjekt + Verb</strong> = Erster Konditionalsatz (unwahrscheinlich aber möglich)</p>
</div>

### 2. Implizite Konditionalsätze 🫥

Manchmal wird die "if"-Klausel **impliziert** statt ausgesprochen:

- "A wise person **would have** acted differently." (= Wenn sie weise wären, hätten sie...)
- "**Without** your support, we **couldn't have** succeeded." (= Wenn es nicht für deine Unterstützung gewesen wäre...)
- "**But for** the rain, we **would have** gone hiking." (= Wenn der Regen nicht gewesen wäre...)
- "**Otherwise**, we **would have** missed the deadline." (= Wenn wir das nicht getan hätten...)

### 3. Gemischte Konditionalsätze mit Modalverben 🎛️

Kombiniere Konditionalsätze mit **Modalverben** für nuancierte Bedeutung:

- "If she **had studied** harder, she **might** be a doctor now." (Vergangenheit → Gegenwart, mit Unsicherheit)
- "If he **were** more careful, he **wouldn't have** made that mistake." (allgemein → Vergangenheit)
- "If they **had** invested wisely, they **could** be millionaires today." (Vergangenheit → gegenwärtige Möglichkeit)

<GamePlaceholder id="sentenceBuilder" />

### 4. Formelle Konditionale Konnektoren 🔗

Über "if" und "unless" hinaus verwendet C1-Englisch formelle Alternativen:

| Konnektor | Bedeutung | Beispiel |
|---|---|---|
| **Provided (that)** | Nur wenn | "You can stay, **provided that** you follow the rules." |
| **On condition (that)** | Nur wenn (sehr formell) | "I'll agree, **on condition that** the terms are fair." |
| **Supposing (that)** | Was wenn / Stell dir vor | "**Supposing** it rained, what would we do?" |
| **As long as** | Wenn und nur wenn | "You'll succeed **as long as** you stay focused." |
| **But for** | Wenn nicht für (formell) | "**But for** your help, I'd have failed." |

### 5. "Unless" auf C1-Niveau ⚠️

**"Unless" = "if not"** — aber Vorsicht mit doppelter Verneinung:

- ✅ "**Unless** you hurry, we'll be late." (= If you don't hurry)
- ❌ "**Unless** you **don't** hurry, we'll be late." (Doppelte Verneinung = falsch!)
- ✅ "**Unless** otherwise stated, all prices include tax."

### 6. Häufige Fehler ❌

**Fehler 1:** "Would" in der if-Klausel.
- ❌ "If I **would have** known..."
- ✅ "If I **had** known..."

**Fehler 2:** Doppelte Verneinung mit "unless."
- ❌ "Unless you **don't** finish..."
- ✅ "Unless you finish..."

**Fehler 3:** Falsche Partizipform bei Inversion.
- ❌ "Had she **knew** about it..."
- ✅ "Had she **known** about it..."

<GamePlaceholder id="fixTheMistake" />

<div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">🎯 Zusammenfassung:</h3>
  <ul className="list-disc list-inside space-y-1">
    <li><strong>Invertiert:</strong> Had I / Were she / Should you — formell, ohne "if"</li>
    <li><strong>Implizit:</strong> Without, but for, otherwise — Bedingung verstanden</li>
    <li><strong>Gemischt + Modalverben:</strong> might/could in der Ergebnisklausel für Nuance</li>
    <li><strong>Formelle Konnektoren:</strong> provided, on condition, supposing, as long as</li>
  </ul>
</div>

---

### 🎮 Trainings-Arena
<GamePlaceholder id="grammarRacer" />
`
  },
  task: {
    en: {
      title: 'Complex Conditionals',
      description: 'Practice advanced conditional patterns beyond basic first/second/third.',
      checklist: [
        { text: 'Rewrite 5 standard conditionals using inverted forms (Had/Were/Should)', checked: false },
        { text: 'Write 3 sentences with implied conditionals (without, but for, otherwise)', checked: false },
        { text: 'Create 3 mixed conditionals with modals (might/could in result clause)', checked: false }
      ]
    },
    de: {
      title: 'Komplexe Konditionalsätze',
      description: 'Übe fortgeschrittene Konditionalmuster jenseits der Grundformen.',
      checklist: [
        { text: 'Schreibe 5 Standard-Konditionalsätze in invertierter Form um (Had/Were/Should)', checked: false },
        { text: 'Schreibe 3 Sätze mit impliziten Bedingungen (without, but for, otherwise)', checked: false },
        { text: 'Erstelle 3 gemischte Konditionalsätze mit Modalverben', checked: false }
      ]
    }
  },
  quiz: { en: [], de: [] }
};
