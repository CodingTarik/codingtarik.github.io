import React from 'react';
import GrammarGame from '../../../components/grammar-games/GrammarGame';

const sentenceBuilderData = [
  {
    prompt: { en: "In formal correspondence, 'I want to complain' becomes 'I wish to ___ my dissatisfaction.'", de: "In formeller Korrespondenz wird 'I want to complain' zu 'I wish to ___ my dissatisfaction.'" },
    words: ["express", "say", "tell", "speak"],
    correct: "express",
    explanation: { en: "In formal register, 'complain' is elevated to 'express dissatisfaction' — a hallmark of diplomatic and professional tone.", de: "Im formellen Register wird 'complain' zu 'express dissatisfaction' angehoben — ein Kennzeichen diplomatischen und professionellen Tons." }
  },
  {
    prompt: { en: "The report ___ that current policies are inadequate for addressing systemic inequality.", de: "Der Bericht stellt fest, dass aktuelle Maßnahmen unzureichend sind, um systemische Ungleichheit zu bekämpfen." },
    words: ["contends", "says", "thinks", "goes"],
    correct: "contends",
    explanation: { en: "'Contends' is a formal reporting verb appropriate for academic/professional writing. 'Says' is neutral; 'thinks' implies opinion; 'goes' is informal.", de: "'Contends' ist ein formelles Berichtsverb für akademisches/professionelles Schreiben. 'Says' ist neutral; 'thinks' impliziert Meinung; 'goes' ist informell." }
  },
  {
    prompt: { en: "Moving from academic to lay language: 'The aetiology remains unclear' becomes 'We still don't know what ___ it.'", de: "Wechsel von akademischer zu Laiensprache: 'The aetiology remains unclear' wird zu 'We still don't know what ___ it.'" },
    words: ["causes", "aetiologises", "originates", "derives"],
    correct: "causes",
    explanation: { en: "When shifting to lay register, technical terms like 'aetiology' must be replaced with accessible equivalents like 'what causes it'.", de: "Beim Wechsel zum Laienregister müssen Fachbegriffe wie 'aetiology' durch verständliche Entsprechungen wie 'what causes it' ersetzt werden." }
  },
  {
    prompt: { en: "In a casual email to a friend: 'The party was amazing — you really ___ have come!'", de: "In einer lockeren E-Mail an einen Freund: 'Die Party war toll — du hättest wirklich ___ sollen!'" },
    words: ["should", "ought to", "must", "shall"],
    correct: "should",
    explanation: { en: "'Should have come' is the natural informal choice. 'Ought to have' is more formal; 'must have' changes meaning; 'shall have' is archaic.", de: "'Should have come' ist die natürliche informelle Wahl. 'Ought to have' ist formeller; 'must have' ändert die Bedeutung; 'shall have' ist veraltet." }
  },
  {
    prompt: { en: "A doctor speaking to a patient: 'The test results are ___, so there's nothing to worry about.'", de: "Ein Arzt zum Patienten: 'Die Testergebnisse sind ___, also gibt es keinen Grund zur Sorge.'" },
    words: ["normal", "unremarkable", "within established parameters", "asymptomatic"],
    correct: "normal",
    explanation: { en: "When a doctor shifts register to speak with patients, technical jargon like 'unremarkable' or 'within established parameters' becomes simply 'normal'.", de: "Wenn ein Arzt das Register für Patienten wechselt, wird Fachjargon wie 'unremarkable' oder 'within established parameters' einfach zu 'normal'." }
  },
  {
    prompt: { en: "Formal: 'We regret to inform you.' → Informal: 'I'm sorry, but we ___ do it.'", de: "Formell: 'We regret to inform you.' → Informell: 'Es tut mir leid, aber wir ___ es nicht tun.'" },
    words: ["can't", "are unable to", "cannot", "have no capacity to"],
    correct: "can't",
    explanation: { en: "The informal register uses contractions ('can't') and simpler structures. 'Cannot' is more formal, 'are unable to' is bureaucratic.", de: "Das informelle Register verwendet Kontraktionen ('can't') und einfachere Strukturen. 'Cannot' ist formeller, 'are unable to' ist bürokratisch." }
  }
];

const fixTheMistakeData = [
  {
    sentence: "Dear Professor, I wanna ask if you could maybe check out my essay when you get a sec.",
    mistakeIndex: 3,
    correction: "would like to inquire whether you might review",
    explanation: { en: "In formal academic correspondence, 'wanna ask if you could check out' must be elevated: 'would like to inquire whether you might review'.", de: "In formeller akademischer Korrespondenz muss 'wanna ask if you could check out' angehoben werden: 'would like to inquire whether you might review'." }
  },
  {
    sentence: "The patient is presenting with a really bad headache and keeps throwing up.",
    mistakeIndex: 6,
    correction: "severe cephalalgia and persistent emesis",
    explanation: { en: "Medical register requires technical terminology: 'really bad headache' becomes 'severe cephalalgia'; 'keeps throwing up' becomes 'persistent emesis'.", de: "Medizinisches Register erfordert Fachterminologie: 'really bad headache' wird zu 'severe cephalalgia'; 'keeps throwing up' wird zu 'persistent emesis'." }
  },
  {
    sentence: "Furthermore, the aforementioned individual proceeded to consume the sandwich with considerable alacrity.",
    mistakeIndex: 0,
    correction: "He quickly ate the sandwich",
    explanation: { en: "This sentence is absurdly over-formal for describing someone eating. Register must match context — everyday events need everyday language.", de: "Dieser Satz ist absurd überformell für die Beschreibung, wie jemand isst. Das Register muss zum Kontext passen." }
  },
  {
    sentence: "Yo, the committee has reached a consensus regarding the implementation of the new policy framework.",
    mistakeIndex: 0,
    correction: "The",
    explanation: { en: "'Yo' is slang and completely inappropriate at the start of a formal statement. The rest of the sentence is in formal register — maintain consistency.", de: "'Yo' ist Slang und völlig unangemessen am Anfang einer formellen Aussage. Der Rest des Satzes ist im formellen Register — Konsistenz wahren." }
  },
  {
    sentence: "The CEO stated in the press conference that profits had gone down the drain this quarter.",
    mistakeIndex: 9,
    correction: "declined significantly",
    explanation: { en: "In formal business communication, the idiom 'gone down the drain' is too colloquial. Use 'declined significantly' to maintain professional register.", de: "In formeller Geschäftskommunikation ist die Redewendung 'gone down the drain' zu umgangssprachlich. Verwenden Sie 'declined significantly'." }
  }
];

const grammarRacerData = [
  {
    prompt: "Formal equivalent of 'get better': The patient's condition is expected to ___.",
    options: ["improve", "get better", "perk up"],
    correct: "improve",
    explanation: "'Improve' is the standard formal/medical register equivalent of the informal 'get better'."
  },
  {
    prompt: "Which is appropriate in a legal document? 'The party shall ___ the terms.'",
    options: ["comply with", "stick to", "follow"],
    correct: "comply with",
    explanation: "'Comply with' is the standard legal register. 'Stick to' is informal; 'follow' is neutral but less precise in legal contexts."
  },
  {
    prompt: "Informal version of 'I shall endeavour to attend': 'I'll ___ to make it.'",
    options: ["try", "endeavour", "attempt"],
    correct: "try",
    explanation: "'Try' is the natural informal equivalent. 'Endeavour' is formal/literary; 'attempt' sits between the two."
  },
  {
    prompt: "In a children's science book: 'Photosynthesis is how plants ___ food from sunlight.'",
    options: ["make", "synthesize", "photosynthesize"],
    correct: "make",
    explanation: "For a lay audience (children), 'make food from sunlight' is the appropriate register shift from technical 'photosynthesize'."
  },
  {
    prompt: "Which register mismatch is INCORRECT in an academic paper? 'The results were ___.'",
    options: ["pretty cool", "statistically significant", "noteworthy"],
    correct: "pretty cool",
    explanation: "'Pretty cool' is informal/slang and inappropriate in academic writing. Both 'statistically significant' and 'noteworthy' fit the academic register."
  }
];

export const registerShifting = {
  id: 'c2_g3',
  title: {
    en: 'Register Shifting & Code-Switching',
    de: 'Registerwechsel & Code-Switching'
  },
  description: {
    en: "Master the art of moving between formal and informal, technical and lay language, adapting your English to any audience.",
    de: "Meistern Sie die Kunst des Wechsels zwischen formellem und informellem, technischem und allgemeinverstaendlichem Englisch."
  },
  components: {
    sentenceBuilder: <GrammarGame type="sentenceBuilder" data={sentenceBuilderData} />,
    fixTheMistake: <GrammarGame type="fixTheMistake" data={fixTheMistakeData} />,
    grammarRacer: <GrammarGame type="grammarRacer" data={grammarRacerData} />
  },
  content: {
    en: `
## Register Shifting & Code-Switching 🎭

At C2 level, true mastery of English means being able to **seamlessly shift** between registers — moving from a boardroom presentation to a casual chat, from a medical journal to a patient consultation, from an academic paper to a blog post — all while sounding **natural and appropriate** in each context.

### 1. What Is Register? 📊

**Register** refers to the variety of language used in a particular social setting. It encompasses:

- **Vocabulary choices** (lexis)
- **Grammatical complexity** (syntax)
- **Tone and formality** (pragmatics)
- **Conventions and expectations** (genre norms)

The five main registers in English:

| Register | Context | Example |
|----------|---------|---------|
| **Frozen/Static** | Laws, oaths, sacred texts | "We the People of the United States…" |
| **Formal** | Academic papers, business reports | "The findings suggest a correlation…" |
| **Consultative** | Professional conversations, interviews | "Could you elaborate on that point?" |
| **Casual** | Friends, family, colleagues | "Hey, what did you think of the meeting?" |
| **Intimate** | Close relationships, private | "Love you — see you tonight." |

### 2. Key Dimensions of Register Shift 🔑

**a) Lexical Shifts (Vocabulary)**

The most visible marker of register change is word choice:

| Informal | Neutral | Formal |
|----------|---------|--------|
| kids | children | minors / juveniles |
| get | obtain / receive | procure / acquire |
| help | assist | facilitate |
| fire (someone) | dismiss | terminate employment |
| buy | purchase | procure |
| ask | inquire | solicit |
| enough | sufficient | adequate |
| start | begin | commence / initiate |

**b) Grammatical Shifts (Structure)**

| Feature | Informal | Formal |
|---------|----------|--------|
| Contractions | "can't", "won't" | "cannot", "will not" |
| Passive voice | Rare | Common: "It was determined that…" |
| Nominalizations | "We decided to…" | "The decision was made to…" |
| Relative pronouns | "the guy who…" | "the individual whom…" |
| Sentence length | Short, fragmented | Long, subordinated |
| Phrasal verbs | "put up with", "come up with" | "tolerate", "devise" |

**c) Pragmatic Shifts (Tone & Intent)**

| Informal | Formal |
|----------|--------|
| "That's rubbish." | "I respectfully disagree with this assessment." |
| "You messed up." | "An error appears to have occurred." |
| "Can I have…?" | "I would be grateful if you could provide…" |

<div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">💡 C2 Insight</h3>
  <p>At C2, it's not just about <strong>knowing</strong> formal and informal options — it's about making the shift <strong>seamlessly and naturally</strong>, matching the audience's expectations without sounding forced or artificial.</p>
</div>

<GamePlaceholder id="sentenceBuilder" />

### 3. Code-Switching in Professional Contexts 💼

**Code-switching** originally refers to alternating between languages, but in C2 English, it also means switching registers within the same language depending on:

- **Audience:** A surgeon explains a procedure differently to a colleague vs. a patient.
- **Purpose:** The same data appears differently in a research paper vs. a press release.
- **Medium:** A LinkedIn post vs. a WhatsApp message about the same event.
- **Power dynamics:** Speaking to a superior vs. a peer vs. a subordinate.

**Example — The same information in three registers:**

| Register | Version |
|----------|---------|
| Academic | "The data indicate a statistically significant inverse correlation between socioeconomic status and educational attainment." |
| Journalistic | "New research shows that poorer families are less likely to achieve high levels of education." |
| Casual | "Basically, the study found that if you're from a low-income background, you're more likely to struggle in school." |

### 4. Technical to Lay Language (Popularization) 🔬

One of the most important C2 skills is **making complex ideas accessible** without losing accuracy:

| Technical | Lay |
|-----------|-----|
| "The patient presents with acute myocardial infarction." | "The patient is having a heart attack." |
| "The algorithm employs stochastic gradient descent." | "The system learns by gradually improving its guesses." |
| "Anthropogenic climate forcing mechanisms" | "Human-caused factors that drive climate change" |

<div className="bg-amber-50 dark:bg-amber-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">⚠️ The Trap of Over-Simplification</h3>
  <p>When shifting to lay language, avoid <strong>losing essential meaning</strong>. "The economy is bad" is too vague for "GDP contracted by 2.3% year-on-year." Find the balance: "The economy shrank by about 2% compared to last year."</p>
</div>

### 5. Common Register Mistakes ❌

**Mistake 1:** Mixing registers inconsistently.
- ❌ "The committee has reached a consensus, and basically everyone's on board, so yeah."
- ✅ "The committee has reached a consensus." OR "Everyone agrees, so we're good to go."

**Mistake 2:** Using overly formal language in casual contexts.
- ❌ (to a friend) "I wish to convey my gratitude for your hospitality."
- ✅ "Thanks so much for having me over!"

**Mistake 3:** Using slang in formal writing.
- ❌ (in an essay) "Shakespeare was lowkey a genius."
- ✅ "Shakespeare's genius is widely acknowledged."

**Mistake 4:** Failing to adapt technical language for non-specialists.
- ❌ (to a patient) "You have idiopathic thrombocytopenic purpura."
- ✅ "You have a condition where your blood doesn't clot properly — it's called ITP."

<GamePlaceholder id="fixTheMistake" />

### 6. Strategies for Effective Register Shifting 🎯

1. **Identify your audience** — Who are they? What do they know? What do they expect?
2. **Choose vocabulary deliberately** — Select words that match the register.
3. **Adjust grammatical complexity** — Longer sentences with subordination for formal; shorter, direct sentences for casual.
4. **Monitor tone** — Formal is not cold; casual is not sloppy. Match warmth to context.
5. **Be consistent** — Do not mix registers within the same communication unless intentionally (e.g., humor).

<div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">🎯 Summary</h3>
  <ul className="list-disc list-inside space-y-1">
    <li><strong>Register</strong> = the variety of language appropriate to a context (frozen to intimate).</li>
    <li><strong>Lexical, grammatical, and pragmatic</strong> dimensions all shift with register.</li>
    <li><strong>Code-switching</strong> in English means adapting register for audience, purpose, and medium.</li>
    <li><strong>Technical to lay</strong> simplification is a key C2 skill without sacrificing accuracy.</li>
    <li><strong>Consistency</strong> within a register is crucial — register clashes sound jarring.</li>
  </ul>
</div>

---

### 🎮 Practice Arena

**🏎️ Grammar Racer: Register Recognition**
<GamePlaceholder id="grammarRacer" />

### 🎯 Practical Exercise

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border-2 border-green-300">
  <h3 className="font-bold text-green-800 dark:text-green-200 mb-4">📝 Register Transformation Challenge:</h3>
  <ol className="list-decimal list-inside space-y-2">
    <li>Rewrite this academic sentence as a casual explanation: "The proliferation of misinformation on social media platforms has precipitated a crisis of epistemic trust."</li>
    <li>Elevate this casual sentence to formal register: "The boss basically said we're all getting pay cuts because the company's broke."</li>
    <li>Convert this medical jargon for a patient: "You present with bilateral otitis media with effusion requiring myringotomy."</li>
    <li>Write the same restaurant review in three registers: frozen/legal, formal, and casual.</li>
    <li>Identify and fix 5 register clashes in a sample text your teacher provides.</li>
  </ol>
</div>
`,
    de: `
## Registerwechsel & Code-Switching 🎭

Auf C2-Niveau bedeutet wahre Beherrschung des Englischen, **nahtlos zwischen Registern wechseln** zu können — von einer Vorstandspräsentation zum lockeren Gespräch, von einer medizinischen Fachzeitschrift zur Patientenberatung, von einer wissenschaftlichen Arbeit zum Blog-Beitrag — und dabei in jedem Kontext **natürlich und angemessen** zu klingen.

### 1. Was ist Register? 📊

**Register** bezieht sich auf die Sprachvarietät, die in einem bestimmten sozialen Umfeld verwendet wird. Es umfasst:

- **Wortschatzauswahl** (Lexik)
- **Grammatische Komplexität** (Syntax)
- **Ton und Formalität** (Pragmatik)
- **Konventionen und Erwartungen** (Genrenormen)

Die fünf Hauptregister im Englischen:

| Register | Kontext | Beispiel |
|----------|---------|----------|
| **Starr/Statisch** | Gesetze, Eide, heilige Texte | "We the People of the United States…" |
| **Formell** | Akademische Arbeiten, Geschäftsberichte | "The findings suggest a correlation…" |
| **Konsultativ** | Berufliche Gespräche, Interviews | "Could you elaborate on that point?" |
| **Umgangssprachlich** | Freunde, Familie, Kollegen | "Hey, what did you think of the meeting?" |
| **Intim** | Enge Beziehungen, privat | "Love you — see you tonight." |

### 2. Schlüsseldimensionen des Registerwechsels 🔑

**a) Lexikalische Verschiebungen (Wortschatz)**

Der sichtbarste Marker eines Registerwechsels ist die Wortwahl:

| Informell | Neutral | Formell |
|-----------|---------|---------|
| kids | children | minors / juveniles |
| get | obtain / receive | procure / acquire |
| help | assist | facilitate |
| fire (someone) | dismiss | terminate employment |
| buy | purchase | procure |
| ask | inquire | solicit |
| enough | sufficient | adequate |
| start | begin | commence / initiate |

**b) Grammatische Verschiebungen (Struktur)**

| Merkmal | Informell | Formell |
|---------|-----------|---------|
| Kontraktionen | "can't", "won't" | "cannot", "will not" |
| Passiv | Selten | Häufig: "It was determined that…" |
| Nominalisierungen | "We decided to…" | "The decision was made to…" |
| Relativpronomen | "the guy who…" | "the individual whom…" |
| Satzlänge | Kurz, fragmentiert | Lang, untergeordnet |
| Phrasal Verbs | "put up with", "come up with" | "tolerate", "devise" |

**c) Pragmatische Verschiebungen (Ton & Absicht)**

| Informell | Formell |
|-----------|---------|
| "That's rubbish." | "I respectfully disagree with this assessment." |
| "You messed up." | "An error appears to have occurred." |
| "Can I have…?" | "I would be grateful if you could provide…" |

<div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">💡 C2-Einsicht</h3>
  <p>Auf C2-Niveau geht es nicht nur darum, formelle und informelle Optionen zu <strong>kennen</strong> — es geht darum, den Wechsel <strong>nahtlos und natürlich</strong> zu vollziehen und die Erwartungen des Publikums zu erfüllen, ohne gezwungen oder künstlich zu klingen.</p>
</div>

<GamePlaceholder id="sentenceBuilder" />

### 3. Code-Switching in beruflichen Kontexten 💼

**Code-Switching** bezieht sich ursprünglich auf den Wechsel zwischen Sprachen, aber im C2-Englisch bedeutet es auch den Registerwechsel innerhalb derselben Sprache je nach:

- **Publikum:** Ein Chirurg erklärt einem Kollegen einen Eingriff anders als einem Patienten.
- **Zweck:** Dieselben Daten erscheinen unterschiedlich in einer Forschungsarbeit vs. einer Pressemitteilung.
- **Medium:** Ein LinkedIn-Beitrag vs. eine WhatsApp-Nachricht über dasselbe Ereignis.
- **Machtverhältnisse:** Zu einem Vorgesetzten sprechen vs. zu einem Gleichgestellten vs. zu einem Untergebenen.

**Beispiel — Dieselbe Information in drei Registern:**

| Register | Version |
|----------|---------|
| Akademisch | "The data indicate a statistically significant inverse correlation between socioeconomic status and educational attainment." |
| Journalistisch | "New research shows that poorer families are less likely to achieve high levels of education." |
| Umgangssprachlich | "Basically, the study found that if you're from a low-income background, you're more likely to struggle in school." |

### 4. Technisch zu Laiensprache (Popularisierung) 🔬

Eine der wichtigsten C2-Fähigkeiten ist es, **komplexe Ideen zugänglich zu machen**, ohne an Genauigkeit zu verlieren:

| Technisch | Laiensprache |
|-----------|-------------|
| "The patient presents with acute myocardial infarction." | "The patient is having a heart attack." |
| "The algorithm employs stochastic gradient descent." | "The system learns by gradually improving its guesses." |
| "Anthropogenic climate forcing mechanisms" | "Human-caused factors that drive climate change" |

<div className="bg-amber-50 dark:bg-amber-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">⚠️ Die Falle der Über-Vereinfachung</h3>
  <p>Beim Wechsel zur Laiensprache vermeiden Sie es, <strong>wesentliche Bedeutung zu verlieren</strong>. "The economy is bad" ist zu vage für "GDP contracted by 2.3% year-on-year." Finden Sie die Balance: "The economy shrank by about 2% compared to last year."</p>
</div>

### 5. Häufige Register-Fehler ❌

**Fehler 1:** Register inkonsistent mischen.
- ❌ "The committee has reached a consensus, and basically everyone's on board, so yeah."
- ✅ "The committee has reached a consensus." ODER "Everyone agrees, so we're good to go."

**Fehler 2:** Übertrieben formelle Sprache in lockeren Kontexten verwenden.
- ❌ (zu einem Freund) "I wish to convey my gratitude for your hospitality."
- ✅ "Thanks so much for having me over!"

**Fehler 3:** Slang in formellem Schreiben verwenden.
- ❌ (in einem Aufsatz) "Shakespeare was lowkey a genius."
- ✅ "Shakespeare's genius is widely acknowledged."

**Fehler 4:** Fachsprache nicht für Nicht-Spezialisten anpassen.
- ❌ (zum Patienten) "You have idiopathic thrombocytopenic purpura."
- ✅ "You have a condition where your blood doesn't clot properly — it's called ITP."

<GamePlaceholder id="fixTheMistake" />

### 6. Strategien für effektiven Registerwechsel 🎯

1. **Identifizieren Sie Ihr Publikum** — Wer sind sie? Was wissen sie? Was erwarten sie?
2. **Wählen Sie Vokabular bewusst** — Wählen Sie Wörter, die zum Register passen.
3. **Passen Sie die grammatische Komplexität an** — Längere Sätze mit Unterordnung für formell; kürzere, direkte Sätze für locker.
4. **Überwachen Sie den Ton** — Formell ist nicht kalt; locker ist nicht schlampig.
5. **Seien Sie konsistent** — Mischen Sie keine Register innerhalb derselben Kommunikation, es sei denn absichtlich (z.B. für Humor).

<div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">🎯 Zusammenfassung</h3>
  <ul className="list-disc list-inside space-y-1">
    <li><strong>Register</strong> = die Sprachvarietät, die einem Kontext angemessen ist (starr bis intim).</li>
    <li><strong>Lexikalische, grammatische und pragmatische</strong> Dimensionen verschieben sich alle mit dem Register.</li>
    <li><strong>Code-Switching</strong> im Englischen bedeutet, das Register für Publikum, Zweck und Medium anzupassen.</li>
    <li><strong>Technisch zu Laien</strong>-Vereinfachung ist eine Schlüsselkompetenz auf C2-Niveau ohne Genauigkeitsverlust.</li>
    <li><strong>Konsistenz</strong> innerhalb eines Registers ist entscheidend — Registerbrüche klingen störend.</li>
  </ul>
</div>

---

### 🎮 Trainings-Arena

**🏎️ Grammar Racer: Register-Erkennung**
<GamePlaceholder id="grammarRacer" />

### 🎯 Praktische Übung

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border-2 border-green-300">
  <h3 className="font-bold text-green-800 dark:text-green-200 mb-4">📝 Register-Transformations-Challenge:</h3>
  <ol className="list-decimal list-inside space-y-2">
    <li>Schreiben Sie diesen akademischen Satz als lockere Erklärung um: "The proliferation of misinformation on social media platforms has precipitated a crisis of epistemic trust."</li>
    <li>Heben Sie diesen lockeren Satz ins formelle Register: "The boss basically said we're all getting pay cuts because the company's broke."</li>
    <li>Übersetzen Sie diesen medizinischen Jargon für einen Patienten: "You present with bilateral otitis media with effusion requiring myringotomy."</li>
    <li>Schreiben Sie dieselbe Restaurantkritik in drei Registern: starr/juristisch, formell und umgangssprachlich.</li>
    <li>Identifizieren und korrigieren Sie 5 Registerbrüche in einem Beispieltext.</li>
  </ol>
</div>
`
  }
};
