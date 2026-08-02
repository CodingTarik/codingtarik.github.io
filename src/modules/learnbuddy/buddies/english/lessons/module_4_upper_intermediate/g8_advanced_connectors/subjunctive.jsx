import React from 'react';
import GrammarGame from '../../../components/grammar-games/GrammarGame';

const sentenceBuilderData = [
  {
    prompt: { en: "The doctor insisted that he ___ more rest.", de: "Der Arzt bestand darauf, dass er sich mehr ausruht." },
    words: ["get", "gets", "got", "getting"],
    correct: "get",
    explanation: { en: "Subjunctive after 'insist': 'insist that + subject + BASE FORM'. No -s, no past tense.", de: "Konjunktiv nach 'insist': 'insist that + Subjekt + GRUNDFORM'. Kein -s, keine Vergangenheit." }
  },
  {
    prompt: { en: "I suggest that she ___ present at the meeting.", de: "Ich schlage vor, dass sie bei der Sitzung anwesend ist." },
    words: ["be", "is", "was", "being"],
    correct: "be",
    explanation: { en: "Subjunctive after 'suggest': use 'be' (not 'is'). 'I suggest that she be present.'", de: "Konjunktiv nach 'suggest': verwende 'be' (nicht 'is'). 'I suggest that she be present.'" }
  },
  {
    prompt: { en: "If I ___ you, I would accept the offer.", de: "Wenn ich du wäre, würde ich das Angebot annehmen." },
    words: ["were", "was", "am", "be"],
    correct: "were",
    explanation: { en: "'If I were you' — subjunctive 'were' for hypothetical situations, even with I/he/she/it.", de: "'If I were you' — Konjunktiv 'were' für hypothetische Situationen, auch bei I/he/she/it." }
  },
  {
    prompt: { en: "It is essential that every student ___ the exam.", de: "Es ist unerlässlich, dass jeder Student die Prüfung ablegt." },
    words: ["take", "takes", "took", "taking"],
    correct: "take",
    explanation: { en: "Subjunctive after 'it is essential that': base form 'take', not 'takes'.", de: "Konjunktiv nach 'it is essential that': Grundform 'take', nicht 'takes'." }
  },
  {
    prompt: { en: "The committee recommended that the policy ___ changed.", de: "Der Ausschuss empfahl, dass die Richtlinie geändert wird." },
    words: ["be", "is", "was", "were"],
    correct: "be",
    explanation: { en: "Subjunctive after 'recommend': 'recommend that + subject + be + past participle' for passive.", de: "Konjunktiv nach 'recommend': 'recommend that + Subjekt + be + Partizip Perfekt' für Passiv." }
  },
  {
    prompt: { en: "If he ___ to resign, who would replace him?", de: "Wenn er zurücktreten würde, wer würde ihn ersetzen?" },
    words: ["were", "was", "is", "would be"],
    correct: "were",
    explanation: { en: "'Were to + infinitive' expresses a hypothetical/unlikely event formally: 'If he were to resign...'", de: "'Were to + Infinitiv' drückt ein hypothetisches/unwahrscheinliches Ereignis formell aus: 'If he were to resign...'" }
  }
];

const fixTheMistakeData = [
  {
    sentence: "I suggest that he goes to the doctor immediately.",
    mistakeIndex: 4,
    correction: "go",
    explanation: { en: "Subjunctive after 'suggest': use the BASE FORM 'go', not 'goes'. 'I suggest that he go...'", de: "Konjunktiv nach 'suggest': verwende die GRUNDFORM 'go', nicht 'goes'. 'I suggest that he go...'" }
  },
  {
    sentence: "The manager demanded that she was transferred.",
    mistakeIndex: 5,
    correction: "be",
    explanation: { en: "Subjunctive after 'demand': 'demand that she BE transferred' (not 'was'). Base form of 'be'.", de: "Konjunktiv nach 'demand': 'demand that she BE transferred' (nicht 'was'). Grundform von 'be'." }
  },
  {
    sentence: "If I was you, I wouldn't sign that contract.",
    mistakeIndex: 2,
    correction: "were",
    explanation: { en: "'If I WERE you' — always use 'were' (not 'was') for hypothetical with I/he/she/it in formal English.", de: "'If I WERE you' — verwende immer 'were' (nicht 'was') für Hypothetisches mit I/he/she/it im formellen Englisch." }
  },
  {
    sentence: "It is vital that the report is submitted on time.",
    mistakeIndex: 7,
    correction: "be",
    explanation: { en: "Subjunctive after 'it is vital that': 'that the report BE submitted' (not 'is submitted').", de: "Konjunktiv nach 'it is vital that': 'that the report BE submitted' (nicht 'is submitted')." }
  },
  {
    sentence: "He proposed that the team meets every Monday.",
    mistakeIndex: 5,
    correction: "meet",
    explanation: { en: "Subjunctive after 'propose': 'propose that the team MEET' (base form, no -s).", de: "Konjunktiv nach 'propose': 'propose that the team MEET' (Grundform, kein -s)." }
  }
];

const grammarRacerData = [
  {
    prompt: "They demanded that he ___ an apology.",
    options: ["make", "makes", "made"],
    correct: "make",
    explanation: "Subjunctive after 'demand': base form 'make' (not 'makes' or 'made')."
  },
  {
    prompt: "If she ___ here, she would know what to do.",
    options: ["were", "was", "is"],
    correct: "were",
    explanation: "'If she were here' — subjunctive 'were' for unreal present."
  },
  {
    prompt: "It is crucial that everyone ___ on time.",
    options: ["arrive", "arrives", "arrived"],
    correct: "arrive",
    explanation: "Subjunctive: 'It is crucial that everyone arrive' (base form)."
  },
  {
    prompt: "She wished she ___ taller.",
    options: ["were", "was", "is"],
    correct: "were",
    explanation: "'I wish I were...' — subjunctive 'were' after 'wish' for unreal states."
  },
  {
    prompt: "The judge ordered that the prisoner ___ released.",
    options: ["be", "is", "was"],
    correct: "be",
    explanation: "Subjunctive after 'order': 'order that + subject + be + past participle'."
  }
];

export const subjunctive = {
  id: 'b2_g18',
  title: {
    en: 'The Subjunctive',
    de: 'Der Konjunktiv (Subjunctive)'
  },
  description: {
    en: "I suggest that he BE there. If I WERE you. Formal subjunctive usage with insist, demand, recommend.",
    de: "I suggest that he BE there. If I WERE you. Formelle Konjunktiv-Verwendung mit insist, demand, recommend."
  },
  components: {
    sentenceBuilder: <GrammarGame type="sentenceBuilder" data={sentenceBuilderData} />,
    fixTheMistake: <GrammarGame type="fixTheMistake" data={fixTheMistakeData} />,
    grammarRacer: <GrammarGame type="grammarRacer" data={grammarRacerData} />
  },
  content: {
    en: `
## The Subjunctive 📜✨

The subjunctive is one of the most **formal and elegant** structures in English. It uses the **base form** of the verb (no -s, no past tense) after certain verbs and expressions. While it may sound unusual, it's essential for academic writing, legal English, and formal communication.

### 1. What Is the Subjunctive? 🤔

The subjunctive uses the **bare infinitive** (base form) of the verb, regardless of the subject:

| Normal (indicative) | Subjunctive |
|---------------------|-------------|
| "He **goes** to school." | "I suggest that he **go** to school." |
| "She **is** present." | "It is important that she **be** present." |
| "The report **is** submitted." | "I demand that the report **be** submitted." |

Notice: no "-s" on "go", no "is" — just the base form "be".

### 2. Verbs That Trigger the Subjunctive 🔑

These verbs of **urging, suggesting, demanding, or recommending** trigger the subjunctive in their that-clauses:

| Verb | Example |
|------|---------|
| **suggest** | "I suggest that he **leave** now." |
| **recommend** | "She recommended that he **take** the job." |
| **insist** | "He insists that she **be** on time." |
| **demand** | "They demanded that the CEO **resign**." |
| **propose** | "We propose that the law **be** changed." |
| **request** | "I request that the meeting **be** postponed." |
| **urge** | "The doctor urged that he **rest** more." |
| **require** | "The rules require that every student **wear** a uniform." |
| **order** | "The judge ordered that the prisoner **be** released." |
| **ask** (formal) | "We ask that you **refrain** from smoking." |

### 3. Adjectives That Trigger the Subjunctive 📋

After "It is + adjective + that...", use the subjunctive with these adjectives:

| Expression | Example |
|-----------|---------|
| It is **essential** that... | "It is essential that he **be** there." |
| It is **important** that... | "It is important that she **attend**." |
| It is **vital** that... | "It is vital that the plan **succeed**." |
| It is **necessary** that... | "It is necessary that he **submit** the form." |
| It is **crucial** that... | "It is crucial that everyone **understand**." |
| It is **imperative** that... | "It is imperative that action **be** taken." |
| It is **desirable** that... | "It is desirable that all members **participate**." |

<div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">💡 Negative subjunctive</h3>
  <p>Add 'not' before the base form:</p>
  <p>"I suggest that he <strong>not go</strong> alone." (NOT "doesn't go")</p>
  <p>"It is important that she <strong>not be</strong> late." (NOT "isn't")</p>
  <p>"They insisted that he <strong>not leave</strong> early." (NOT "didn't leave")</p>
</div>

<GamePlaceholder id="sentenceBuilder" />

### 4. "If I Were..." — Subjunctive with 'Were' 🔮

In **hypothetical** (unreal) situations, formal English uses **were** for ALL persons, including I/he/she/it:

| Informal (common) | Formal (subjunctive) |
|-------------------|----------------------|
| "If I **was** rich..." | "If I **were** rich..." |
| "If he **was** here..." | "If he **were** here..." |
| "I wish she **was** taller." | "I wish she **were** taller." |

**Common phrases with subjunctive 'were':**

- "**If I were you**, I'd apologise." (advice)
- "**If it were** up to me, I'd change the rules." (hypothetical)
- "She acts **as if she were** the boss." (unreal comparison)
- "I wish I **were** there with you." (unreal wish)
- "**Were I** to win the lottery, I'd travel the world." (very formal conditional)

### 5. "Were to" — Formal Hypotheticals ✍️

**"If + subject + were to + infinitive"** is a very formal way to talk about unlikely events:

- "**If the president were to resign**, there would be elections."
- "**If it were to rain** tomorrow, we would cancel."
- "**Were he to find out**, he would be furious." (inversion — even more formal!)

<div className="bg-amber-50 dark:bg-amber-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">⚠️ British vs. American English</h3>
  <p><strong>American English:</strong> Uses the subjunctive regularly: "I suggest that he <strong>go</strong>."</p>
  <p><strong>British English:</strong> Often uses 'should' instead: "I suggest that he <strong>should go</strong>."</p>
  <p>Both are correct! But in formal writing, the subjunctive without 'should' is preferred in both varieties.</p>
</div>

### 6. Common Mistakes ❌

- ❌ "I suggest that he **goes**." → ✅ "I suggest that he **go**." (base form!)
- ❌ "It is vital that she **is** present." → ✅ "...that she **be** present."
- ❌ "If I **was** you..." → ✅ "If I **were** you..." (formal hypothetical)
- ❌ "They demanded that he **doesn't** leave." → ✅ "...that he **not leave**." (no auxiliaries)
- ❌ "The policy requires that each person **has** ID." → ✅ "...that each person **have** ID."

<GamePlaceholder id="fixTheMistake" />

---

### 🎮 Practice Arena
<GamePlaceholder id="grammarRacer" />
`,
    de: `
## Der Konjunktiv (Subjunctive) 📜✨

Der Konjunktiv ist eine der **formellsten und elegantesten** Strukturen im Englischen. Er verwendet die **Grundform** des Verbs (kein -s, keine Vergangenheit) nach bestimmten Verben und Ausdrücken. Obwohl er ungewöhnlich klingen mag, ist er unerlässlich für akademisches Schreiben, juristisches Englisch und formelle Kommunikation.

### 1. Was ist der Konjunktiv? 🤔

Der Konjunktiv verwendet den **bloßen Infinitiv** (Grundform) des Verbs, unabhängig vom Subjekt:

| Normal (Indikativ) | Konjunktiv |
|---------------------|------------|
| "He **goes** to school." | "I suggest that he **go** to school." |
| "She **is** present." | "It is important that she **be** present." |
| "The report **is** submitted." | "I demand that the report **be** submitted." |

Beachte: kein "-s" bei "go", kein "is" — nur die Grundform "be".

### 2. Verben, die den Konjunktiv auslösen 🔑

Diese Verben des **Drängens, Vorschlagens, Forderns oder Empfehlens** lösen den Konjunktiv in ihren that-Sätzen aus:

| Verb | Beispiel |
|------|----------|
| **suggest** | "I suggest that he **leave** now." |
| **recommend** | "She recommended that he **take** the job." |
| **insist** | "He insists that she **be** on time." |
| **demand** | "They demanded that the CEO **resign**." |
| **propose** | "We propose that the law **be** changed." |
| **request** | "I request that the meeting **be** postponed." |
| **urge** | "The doctor urged that he **rest** more." |
| **require** | "The rules require that every student **wear** a uniform." |
| **order** | "The judge ordered that the prisoner **be** released." |
| **ask** (formell) | "We ask that you **refrain** from smoking." |

### 3. Adjektive, die den Konjunktiv auslösen 📋

Nach "It is + Adjektiv + that..." verwende den Konjunktiv mit diesen Adjektiven:

| Ausdruck | Beispiel |
|----------|----------|
| It is **essential** that... | "It is essential that he **be** there." |
| It is **important** that... | "It is important that she **attend**." |
| It is **vital** that... | "It is vital that the plan **succeed**." |
| It is **necessary** that... | "It is necessary that he **submit** the form." |
| It is **crucial** that... | "It is crucial that everyone **understand**." |
| It is **imperative** that... | "It is imperative that action **be** taken." |
| It is **desirable** that... | "It is desirable that all members **participate**." |

<div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">💡 Verneinender Konjunktiv</h3>
  <p>Füge 'not' vor die Grundform ein:</p>
  <p>"I suggest that he <strong>not go</strong> alone." (NICHT "doesn't go")</p>
  <p>"It is important that she <strong>not be</strong> late." (NICHT "isn't")</p>
  <p>"They insisted that he <strong>not leave</strong> early." (NICHT "didn't leave")</p>
</div>

<GamePlaceholder id="sentenceBuilder" />

### 4. "If I Were..." — Konjunktiv mit 'Were' 🔮

In **hypothetischen** (irrealen) Situationen verwendet formelles Englisch **were** für ALLE Personen, einschließlich I/he/she/it:

| Informell (üblich) | Formell (Konjunktiv) |
|---------------------|----------------------|
| "If I **was** rich..." | "If I **were** rich..." |
| "If he **was** here..." | "If he **were** here..." |
| "I wish she **was** taller." | "I wish she **were** taller." |

**Häufige Phrasen mit Konjunktiv 'were':**

- "**If I were you**, I'd apologise." (Rat)
- "**If it were** up to me, I'd change the rules." (hypothetisch)
- "She acts **as if she were** the boss." (irrealer Vergleich)
- "I wish I **were** there with you." (irrealer Wunsch)
- "**Were I** to win the lottery, I'd travel the world." (sehr formelle Bedingung)

### 5. "Were to" — Formelle Hypothesen ✍️

**"If + Subjekt + were to + Infinitiv"** ist eine sehr formelle Art, über unwahrscheinliche Ereignisse zu sprechen:

- "**If the president were to resign**, there would be elections."
- "**If it were to rain** tomorrow, we would cancel."
- "**Were he to find out**, he would be furious." (Inversion — noch formeller!)

<div className="bg-amber-50 dark:bg-amber-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">⚠️ Britisches vs. Amerikanisches Englisch</h3>
  <p><strong>Amerikanisches Englisch:</strong> Verwendet den Konjunktiv regelmäßig: "I suggest that he <strong>go</strong>."</p>
  <p><strong>Britisches Englisch:</strong> Verwendet oft 'should' stattdessen: "I suggest that he <strong>should go</strong>."</p>
  <p>Beides ist korrekt! Aber in formeller Schriftsprache wird der Konjunktiv ohne 'should' in beiden Varianten bevorzugt.</p>
</div>

### 6. Häufige Fehler ❌

- ❌ "I suggest that he **goes**." → ✅ "I suggest that he **go**." (Grundform!)
- ❌ "It is vital that she **is** present." → ✅ "...that she **be** present."
- ❌ "If I **was** you..." → ✅ "If I **were** you..." (formell hypothetisch)
- ❌ "They demanded that he **doesn't** leave." → ✅ "...that he **not leave**." (keine Hilfsverben)
- ❌ "The policy requires that each person **has** ID." → ✅ "...that each person **have** ID."

<GamePlaceholder id="fixTheMistake" />

---

### 🎮 Trainings-Arena
<GamePlaceholder id="grammarRacer" />
`
  }
};
