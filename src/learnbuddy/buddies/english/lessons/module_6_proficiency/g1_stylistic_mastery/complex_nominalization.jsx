import React from 'react';
import GrammarGame from '../../../components/grammar-games/GrammarGame';

const sentenceBuilderData = [
  {
    prompt: { en: "The ___ of sustainable practices across industries has become a global priority.", de: "Die Einführung nachhaltiger Praktiken in allen Branchen ist zu einer globalen Priorität geworden." },
    words: ["implementation", "implementing", "implemented", "implement"],
    correct: "implementation",
    explanation: { en: "'Implementation' is the nominalized form of 'implement', used as the subject of a formal sentence.", de: "'Implementation' ist die nominalisierte Form von 'implement', verwendet als Subjekt eines formellen Satzes." }
  },
  {
    prompt: { en: "Her ___ to the complexities of quantum mechanics was immediately evident.", de: "Ihr Verständnis der Komplexitäten der Quantenmechanik war sofort offensichtlich." },
    words: ["comprehension", "comprehending", "comprehend", "comprehensive"],
    correct: "comprehension",
    explanation: { en: "'Comprehension' nominalizes the verb 'comprehend' to create an abstract noun suitable for formal academic writing.", de: "'Comprehension' nominalisiert das Verb 'comprehend' zu einem abstrakten Substantiv für formelles akademisches Schreiben." }
  },
  {
    prompt: { en: "The ___ of the hypothesis required extensive peer review before publication.", de: "Die Überprüfung der Hypothese erforderte eine umfassende Begutachtung durch Fachkollegen vor der Veröffentlichung." },
    words: ["verification", "verifying", "verify", "verified"],
    correct: "verification",
    explanation: { en: "Multi-level nominalization: 'verification of the hypothesis' compresses an entire clause ('someone verified the hypothesis') into a dense noun phrase.", de: "Mehrstufige Nominalisierung: 'verification of the hypothesis' komprimiert einen ganzen Satz in eine dichte Nominalphrase." }
  },
  {
    prompt: { en: "The government's ___ of the economic downturn led to widespread criticism.", de: "Die Fehleinschätzung der wirtschaftlichen Rezession durch die Regierung führte zu weitreichender Kritik." },
    words: ["underestimation", "underestimating", "underestimate", "underestimated"],
    correct: "underestimation",
    explanation: { en: "'Underestimation' creates a complex nominal structure with the possessive 'government's', packing agent and action into a single phrase.", de: "'Underestimation' erzeugt eine komplexe Nominalstruktur mit dem Possessiv 'government's', die Agens und Handlung in eine Phrase packt." }
  },
  {
    prompt: { en: "The ___ between theoretical predictions and empirical findings remains unexplained.", de: "Die Diskrepanz zwischen theoretischen Vorhersagen und empirischen Ergebnissen bleibt ungeklärt." },
    words: ["discrepancy", "discrepant", "discrepancies", "discrepance"],
    correct: "discrepancy",
    explanation: { en: "'Discrepancy' is an abstract nominalization that allows a complex comparison to function as the sentence subject.", de: "'Discrepancy' ist eine abstrakte Nominalisierung, die einen komplexen Vergleich als Satzsubjekt fungieren lässt." }
  },
  {
    prompt: { en: "Their ___ of the regulatory framework facilitated smoother cross-border transactions.", de: "Ihre Harmonisierung des regulatorischen Rahmens erleichterte reibungslosere grenzüberschreitende Transaktionen." },
    words: ["harmonization", "harmonizing", "harmonize", "harmonized"],
    correct: "harmonization",
    explanation: { en: "'Harmonization' is a high-register nominalization common in legal and policy discourse, derived from 'harmonize'.", de: "'Harmonization' ist eine Nominalisierung im gehobenen Register, üblich in Rechts- und Politikdiskursen, abgeleitet von 'harmonize'." }
  }
];

const fixTheMistakeData = [
  {
    sentence: "The establishing of new trade agreements requires careful negotiation between parties.",
    mistakeIndex: 1,
    correction: "establishment",
    explanation: { en: "Use the nominalized noun 'establishment', not the gerund 'establishing', in formal written English for maximum density.", de: "Verwenden Sie das nominalisierte Substantiv 'establishment', nicht das Gerundium 'establishing', im formellen schriftlichen Englisch." }
  },
  {
    sentence: "The rapid growth of technology has led to the transforming of how we communicate.",
    mistakeIndex: 11,
    correction: "transformation",
    explanation: { en: "'Transformation' is the appropriate nominalization in formal academic style, not 'the transforming of'.", de: "'Transformation' ist die angemessene Nominalisierung im formellen akademischen Stil, nicht 'the transforming of'." }
  },
  {
    sentence: "Her repeatedly failing to meet deadlines caused frustration among her colleagues.",
    mistakeIndex: 1,
    correction: "repeated failure",
    explanation: { en: "In formal writing, 'repeated failure' (adjective + nominalization) is preferred over 'repeatedly failing' (adverb + gerund).", de: "Im formellen Schreiben wird 'repeated failure' (Adjektiv + Nominalisierung) gegenüber 'repeatedly failing' bevorzugt." }
  },
  {
    sentence: "The fact that resources were allocated efficiently contributed to the project's success.",
    mistakeIndex: 1,
    correction: "The efficient allocation of resources",
    explanation: { en: "Nominalization compresses 'the fact that resources were allocated efficiently' into the dense phrase 'the efficient allocation of resources'.", de: "Nominalisierung komprimiert 'the fact that resources were allocated efficiently' in die dichte Phrase 'the efficient allocation of resources'." }
  },
  {
    sentence: "They criticized the way in which the government responded to the crisis.",
    mistakeIndex: 2,
    correction: "the government's response",
    explanation: { en: "Nominalization replaces the clause 'the way in which the government responded' with the compact 'the government's response'.", de: "Nominalisierung ersetzt die Klausel 'the way in which the government responded' durch das kompakte 'the government's response'." }
  }
];

const grammarRacerData = [
  {
    prompt: "The ___ of democratic principles is fundamental to civil society. (erode)",
    options: ["erosion", "eroding", "eroded"],
    correct: "erosion",
    explanation: "'Erosion' is the correct nominalized form of 'erode' for use in formal academic sentences."
  },
  {
    prompt: "His ___ to the cause inspired many others to join. (dedicate)",
    options: ["dedication", "dedicating", "dedicated"],
    correct: "dedication",
    explanation: "'Dedication' nominalizes 'dedicate' and functions naturally as the sentence subject."
  },
  {
    prompt: "The ___ of the data revealed significant patterns. (analyze)",
    options: ["analysis", "analyzing", "analytical"],
    correct: "analysis",
    explanation: "'Analysis' is the standard nominalization of 'analyze' in academic English."
  },
  {
    prompt: "The gradual ___ of biodiversity poses an existential threat. (deplete)",
    options: ["depletion", "depleting", "depleted"],
    correct: "depletion",
    explanation: "'Depletion' is the formal nominalization of 'deplete', common in scientific discourse."
  },
  {
    prompt: "The ___ between theory and practice remains a challenge. (reconcile)",
    options: ["reconciliation", "reconciling", "reconciled"],
    correct: "reconciliation",
    explanation: "'Reconciliation' converts the verb 'reconcile' into an abstract noun for formal contexts."
  }
];

export const complexNominalization = {
  id: 'c2_g2',
  title: {
    en: 'Complex Nominalization & Abstract Language',
    de: 'Komplexe Nominalisierung & Abstrakte Sprache'
  },
  description: {
    en: "Master multi-level nominalization, academic abstraction, and dense noun phrases for C2-level formal writing.",
    de: "Meistern Sie mehrstufige Nominalisierung, akademische Abstraktion und dichte Nominalphrasen für formelles Schreiben auf C2-Niveau."
  },
  components: {
    sentenceBuilder: <GrammarGame type="sentenceBuilder" data={sentenceBuilderData} />,
    fixTheMistake: <GrammarGame type="fixTheMistake" data={fixTheMistakeData} />,
    grammarRacer: <GrammarGame type="grammarRacer" data={grammarRacerData} />
  },
  content: {
    en: `
## Complex Nominalization & Abstract Language 🏛️

Nominalization — the process of turning verbs and adjectives into nouns — is one of the defining features of advanced academic, legal, and professional English. At C2, you must not only understand it but use it **strategically** to create dense, authoritative prose.

### 1. What Is Nominalization? 🔄

Nominalization converts actions (verbs) or qualities (adjectives) into **things** (nouns):

| Verb/Adjective | Nominalization | Example |
|----------------|---------------|---------|
| investigate | investigation | "The **investigation** revealed new evidence." |
| decide | decision | "The **decision** was unanimous." |
| complex | complexity | "The **complexity** of the issue was underestimated." |
| able | ability | "Her **ability** to adapt impressed everyone." |
| grow | growth | "Economic **growth** has slowed." |

### 2. Why Nominalization Matters 📖

Nominalization is the backbone of academic English because it allows you to:

**a) Compress information:** An entire clause becomes a single noun phrase.
- Verbal: "The researchers **discovered** that the compound **was** toxic."
- Nominalized: "The researchers' **discovery** of the compound's **toxicity**…"

**b) Create abstract concepts:** Nominalization lets you discuss processes and ideas as entities.
- "**Globalization** has accelerated **urbanization**." (Two abstract concepts as concrete entities)

**c) Remove agency:** By nominalizing, you can omit the agent — useful in impersonal or diplomatic writing.
- Agent present: "The committee **rejected** the proposal."
- Agent removed: "The **rejection** of the proposal was unexpected."

**d) Build dense noun phrases:** Multiple modifiers can be stacked around a nominalized head.
- "The **rapid implementation** of **cost-effective** sustainable energy **solutions**."

### 3. Multi-Level Nominalization 🏗️

At C2, you encounter sentences where **multiple nominalizations** interact within a single structure:

- "The **institutionalization** of the **marginalization** of minority voices represents a fundamental **failure** of democratic **governance**."

Breaking this down:
- *institutionalization* ← institutionalize ← institution
- *marginalization* ← marginalize ← margin
- *failure* ← fail
- *governance* ← govern

<div className="bg-amber-50 dark:bg-amber-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">⚠️ Readability Warning</h3>
  <p>While nominalization adds density and formality, <strong>over-nominalization</strong> creates impenetrable prose. Even in academic writing, balance nominalized structures with verbal ones for clarity. The goal is precision, not obscurity.</p>
</div>

<GamePlaceholder id="sentenceBuilder" />

### 4. Common Nominalization Patterns 📐

**Verb → Noun suffixes:**

| Suffix | Examples |
|--------|----------|
| -tion / -sion | investigate → investigation, decide → decision |
| -ment | develop → development, achieve → achievement |
| -ance / -ence | perform → performance, exist → existence |
| -al | arrive → arrival, approve → approval |
| -ure | fail → failure, expose → exposure |
| -sis | analyze → analysis, synthesize → synthesis |
| -th | grow → growth, warm → warmth |

**Adjective → Noun suffixes:**

| Suffix | Examples |
|--------|----------|
| -ity / -ty | complex → complexity, safe → safety |
| -ness | aware → awareness, dark → darkness |
| -ance / -ence | important → importance, different → difference |

### 5. Dense Noun Phrases in Academic English 📚

C2 proficiency requires constructing and deconstructing **dense noun phrases** — nominal groups with multiple layers of modification:

**Structure:** Determiner + Pre-modifiers + Head Noun + Post-modifiers

Example: "The **recently published** comprehensive **analysis** of **long-term environmental impact assessment procedures** in developing nations"

- Head noun: *analysis*
- Pre-modifiers: *recently published, comprehensive*
- Post-modifiers: *of long-term environmental impact assessment procedures in developing nations*

### 6. Nominalization vs. Verbal Style: When to Use Each ⚖️

| Context | Prefer Nominalization | Prefer Verbal Style |
|---------|----------------------|-------------------|
| Academic papers | ✅ "The **analysis** of the data…" | |
| Legal documents | ✅ "Upon **termination** of the contract…" | |
| Creative writing | | ✅ "She **analyzed** the data carefully…" |
| Casual emails | | ✅ "I **decided** to go ahead…" |
| News headlines | ✅ "**Investigation** into corruption" | |

### 7. Common Mistakes ❌

**Mistake 1:** Over-nominalizing simple ideas.
- ❌ "The **commencement** of the **implementation** of the **renovation** of the building…"
- ✅ "The building renovation has begun."

**Mistake 2:** Using gerunds where nominalizations are more appropriate in formal writing.
- ❌ "The **establishing** of new guidelines was necessary."
- ✅ "The **establishment** of new guidelines was necessary."

**Mistake 3:** Creating noun chains that are ambiguous.
- ❌ "Student performance evaluation system improvement committee report" (Which noun modifies which?)
- ✅ "Report by the committee for improving the student performance evaluation system."

<GamePlaceholder id="fixTheMistake" />

<div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">🎯 Summary</h3>
  <ul className="list-disc list-inside space-y-1">
    <li><strong>Nominalization</strong> converts verbs/adjectives into nouns for density and formality.</li>
    <li><strong>Multi-level nominalization</strong> stacks abstract concepts for academic precision.</li>
    <li><strong>Dense noun phrases</strong> are the hallmark of advanced academic and legal English.</li>
    <li><strong>Balance</strong> is key — avoid over-nominalization that obscures meaning.</li>
    <li>Use nominalizations to <strong>compress, abstract, and depersonalize</strong> information.</li>
  </ul>
</div>

---

### 🎮 Practice Arena

**🏎️ Grammar Racer: Nominalization Sprint**
<GamePlaceholder id="grammarRacer" />

### 🎯 Practical Exercise

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border-2 border-green-300">
  <h3 className="font-bold text-green-800 dark:text-green-200 mb-4">📝 Nominalize these sentences:</h3>
  <ol className="list-decimal list-inside space-y-2">
    <li>"The researchers discovered that the drug was effective." → "The researchers' ___ of the drug's ___…"</li>
    <li>"The government failed to respond quickly enough." → "The government's ___ to respond…"</li>
    <li>"People are increasingly aware that the climate is changing." → "The increasing ___ of climate ___…"</li>
    <li>"The committee decided to allocate funds differently." → "The committee's ___ to reallocate…"</li>
    <li>Rewrite an informal paragraph from a newspaper using nominalized academic style.</li>
  </ol>
</div>
`,
    de: `
## Komplexe Nominalisierung & Abstrakte Sprache 🏛️

Nominalisierung — der Prozess, Verben und Adjektive in Substantive umzuwandeln — ist eines der prägenden Merkmale des fortgeschrittenen akademischen, juristischen und professionellen Englisch. Auf C2-Niveau müssen Sie sie nicht nur verstehen, sondern **strategisch einsetzen**, um dichte, autoritative Prosa zu verfassen.

### 1. Was ist Nominalisierung? 🔄

Nominalisierung wandelt Handlungen (Verben) oder Eigenschaften (Adjektive) in **Dinge** (Substantive) um:

| Verb/Adjektiv | Nominalisierung | Beispiel |
|---------------|----------------|----------|
| investigate | investigation | "The **investigation** revealed new evidence." |
| decide | decision | "The **decision** was unanimous." |
| complex | complexity | "The **complexity** of the issue was underestimated." |
| able | ability | "Her **ability** to adapt impressed everyone." |
| grow | growth | "Economic **growth** has slowed." |

### 2. Warum Nominalisierung wichtig ist 📖

Nominalisierung ist das Rückgrat des akademischen Englisch, weil sie Ihnen ermöglicht:

**a) Information zu komprimieren:** Ein ganzer Nebensatz wird zu einer einzigen Nominalphrase.
- Verbal: "The researchers **discovered** that the compound **was** toxic."
- Nominalisiert: "The researchers' **discovery** of the compound's **toxicity**…"

**b) Abstrakte Konzepte zu bilden:** Nominalisierung erlaubt es, Prozesse und Ideen als Entitäten zu diskutieren.
- "**Globalization** has accelerated **urbanization**."

**c) Agens zu entfernen:** Durch Nominalisierung kann der Handelnde ausgelassen werden — nützlich in unpersönlichem oder diplomatischem Schreiben.
- Mit Agens: "The committee **rejected** the proposal."
- Ohne Agens: "The **rejection** of the proposal was unexpected."

**d) Dichte Nominalphrasen zu bilden:** Mehrere Modifikatoren können um ein nominalisiertes Hauptwort gestapelt werden.
- "The **rapid implementation** of **cost-effective** sustainable energy **solutions**."

### 3. Mehrstufige Nominalisierung 🏗️

Auf C2-Niveau begegnen Sie Sätzen, in denen **mehrere Nominalisierungen** in einer einzigen Struktur interagieren:

- "The **institutionalization** of the **marginalization** of minority voices represents a fundamental **failure** of democratic **governance**."

Aufgeschlüsselt:
- *institutionalization* ← institutionalize ← institution
- *marginalization* ← marginalize ← margin
- *failure* ← fail
- *governance* ← govern

<div className="bg-amber-50 dark:bg-amber-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">⚠️ Lesbarkeitswarnung</h3>
  <p>Während Nominalisierung Dichte und Formalität hinzufügt, erzeugt <strong>Über-Nominalisierung</strong> undurchdringliche Prosa. Auch in akademischem Schreiben sollten nominalisierte Strukturen mit verbalen für Klarheit ausbalanciert werden.</p>
</div>

<GamePlaceholder id="sentenceBuilder" />

### 4. Häufige Nominalisierungsmuster 📐

**Verb → Substantiv-Suffixe:**

| Suffix | Beispiele |
|--------|-----------|
| -tion / -sion | investigate → investigation, decide → decision |
| -ment | develop → development, achieve → achievement |
| -ance / -ence | perform → performance, exist → existence |
| -al | arrive → arrival, approve → approval |
| -ure | fail → failure, expose → exposure |
| -sis | analyze → analysis, synthesize → synthesis |

**Adjektiv → Substantiv-Suffixe:**

| Suffix | Beispiele |
|--------|-----------|
| -ity / -ty | complex → complexity, safe → safety |
| -ness | aware → awareness, dark → darkness |
| -ance / -ence | important → importance, different → difference |

### 5. Dichte Nominalphrasen im akademischen Englisch 📚

C2-Kompetenz erfordert das Konstruieren und Dekonstruieren **dichter Nominalphrasen** — nominale Gruppen mit mehreren Modifikationsebenen:

**Struktur:** Determinator + Prä-Modifikatoren + Hauptsubstantiv + Post-Modifikatoren

Beispiel: "The **recently published** comprehensive **analysis** of **long-term environmental impact assessment procedures** in developing nations"

- Hauptsubstantiv: *analysis*
- Prä-Modifikatoren: *recently published, comprehensive*
- Post-Modifikatoren: *of long-term environmental impact assessment procedures in developing nations*

### 6. Nominalisierung vs. verbaler Stil: Wann was verwenden ⚖️

| Kontext | Nominalisierung bevorzugen | Verbalen Stil bevorzugen |
|---------|---------------------------|------------------------|
| Akademische Arbeiten | ✅ "The **analysis** of the data…" | |
| Rechtsdokumente | ✅ "Upon **termination** of the contract…" | |
| Kreatives Schreiben | | ✅ "She **analyzed** the data carefully…" |
| Informelle E-Mails | | ✅ "I **decided** to go ahead…" |
| Nachrichtenüberschriften | ✅ "**Investigation** into corruption" | |

### 7. Häufige Fehler ❌

**Fehler 1:** Einfache Ideen über-nominalisieren.
- ❌ "The **commencement** of the **implementation** of the **renovation** of the building…"
- ✅ "The building renovation has begun."

**Fehler 2:** Gerundien verwenden, wo Nominalisierungen im formellen Schreiben angemessener sind.
- ❌ "The **establishing** of new guidelines was necessary."
- ✅ "The **establishment** of new guidelines was necessary."

**Fehler 3:** Substantivketten bilden, die mehrdeutig sind.
- ❌ "Student performance evaluation system improvement committee report"
- ✅ "Report by the committee for improving the student performance evaluation system."

<GamePlaceholder id="fixTheMistake" />

<div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">🎯 Zusammenfassung</h3>
  <ul className="list-disc list-inside space-y-1">
    <li><strong>Nominalisierung</strong> wandelt Verben/Adjektive in Substantive um für Dichte und Formalität.</li>
    <li><strong>Mehrstufige Nominalisierung</strong> stapelt abstrakte Konzepte für akademische Präzision.</li>
    <li><strong>Dichte Nominalphrasen</strong> sind das Markenzeichen fortgeschrittenen akademischen und juristischen Englisch.</li>
    <li><strong>Balance</strong> ist der Schlüssel — vermeiden Sie Über-Nominalisierung, die Bedeutung verschleiert.</li>
    <li>Verwenden Sie Nominalisierungen, um Information zu <strong>komprimieren, abstrahieren und entpersonalisieren</strong>.</li>
  </ul>
</div>

---

### 🎮 Trainings-Arena

**🏎️ Grammar Racer: Nominalisierungs-Sprint**
<GamePlaceholder id="grammarRacer" />

### 🎯 Praktische Übung

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border-2 border-green-300">
  <h3 className="font-bold text-green-800 dark:text-green-200 mb-4">📝 Nominalisieren Sie diese Sätze:</h3>
  <ol className="list-decimal list-inside space-y-2">
    <li>"The researchers discovered that the drug was effective." → "The researchers' ___ of the drug's ___…"</li>
    <li>"The government failed to respond quickly enough." → "The government's ___ to respond…"</li>
    <li>"People are increasingly aware that the climate is changing." → "The increasing ___ of climate ___…"</li>
    <li>"The committee decided to allocate funds differently." → "The committee's ___ to reallocate…"</li>
    <li>Schreiben Sie einen informellen Zeitungsabsatz in nominalisiertem akademischem Stil um.</li>
  </ol>
</div>
`
  }
};
