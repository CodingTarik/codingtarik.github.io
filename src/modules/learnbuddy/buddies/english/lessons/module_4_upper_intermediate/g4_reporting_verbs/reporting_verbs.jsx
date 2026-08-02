import React from 'react';
import GrammarGame from '../../../components/grammar-games/GrammarGame';

const sentenceBuilderData = [
  {
    prompt: { en: "She advised me ___ a lawyer before signing the contract.", de: "Sie riet mir, einen Anwalt zu konsultieren, bevor ich den Vertrag unterschreibe." },
    words: ["to consult", "consulting", "consult", "that consult"],
    correct: "to consult",
    explanation: { en: "'Advise' follows the pattern: advise + object + to-infinitive.", de: "'Advise' folgt dem Muster: advise + Objekt + to-Infinitiv." }
  },
  {
    prompt: { en: "He suggested ___ the meeting to Monday.", de: "Er schlug vor, das Meeting auf Montag zu verschieben." },
    words: ["postponing", "to postpone", "postpone", "that postpone"],
    correct: "postponing",
    explanation: { en: "'Suggest' takes a gerund (-ing): suggest + -ing. NOT suggest + to-infinitive!", de: "'Suggest' nimmt ein Gerundium (-ing): suggest + -ing. NICHT suggest + to-Infinitiv!" }
  },
  {
    prompt: { en: "The teacher encouraged the students ___ more books.", de: "Die Lehrerin ermutigte die Schüler, mehr Bücher zu lesen." },
    words: ["to read", "reading", "read", "that read"],
    correct: "to read",
    explanation: { en: "'Encourage' follows: encourage + object + to-infinitive.", de: "'Encourage' folgt: encourage + Objekt + to-Infinitiv." }
  },
  {
    prompt: { en: "The doctor recommended ___ more water daily.", de: "Der Arzt empfahl, täglich mehr Wasser zu trinken." },
    words: ["drinking", "to drink", "drink", "that drinking"],
    correct: "drinking",
    explanation: { en: "'Recommend' takes a gerund when no object follows: recommend + -ing.", de: "'Recommend' nimmt ein Gerundium, wenn kein Objekt folgt: recommend + -ing." }
  },
  {
    prompt: { en: "She warned us ___ the dark alley at night.", de: "Sie warnte uns davor, nachts die dunkle Gasse zu benutzen." },
    words: ["not to use", "to not use", "not using", "don't use"],
    correct: "not to use",
    explanation: { en: "'Warn' + object + (not) + to-infinitive: warned us not to use.", de: "'Warn' + Objekt + (not) + to-Infinitiv: warned us not to use." }
  },
  {
    prompt: { en: "He insisted ___ paying for the meal.", de: "Er bestand darauf, das Essen zu bezahlen." },
    words: ["on", "to", "for", "about"],
    correct: "on",
    explanation: { en: "'Insist' takes 'on' + gerund: insist on doing something.", de: "'Insist' nimmt 'on' + Gerundium: insist on doing something." }
  }
];

const fixTheMistakeData = [
  {
    sentence: "She suggested me to take the earlier train.",
    mistakeIndex: 2,
    correction: "suggested taking",
    explanation: { en: "'Suggest' does NOT take object + to-infinitive. Use: suggest + -ing OR suggest + that-clause.", de: "'Suggest' nimmt NICHT Objekt + to-Infinitiv. Verwende: suggest + -ing ODER suggest + that-Satz." }
  },
  {
    sentence: "He recommended me to see a specialist.",
    mistakeIndex: 2,
    correction: "recommended that I see",
    explanation: { en: "'Recommend' doesn't take object + to-infinitive. Use: recommend + -ing OR recommend + that + subject + base verb.", de: "'Recommend' nimmt nicht Objekt + to-Infinitiv. Verwende: recommend + -ing ODER recommend + that + Subjekt + Grundform." }
  },
  {
    sentence: "The police warned to not cross the barrier.",
    mistakeIndex: 2,
    correction: "warned us not to",
    explanation: { en: "'Warn' needs an object AND 'not' goes before 'to': warn + object + not to + verb.", de: "'Warn' braucht ein Objekt UND 'not' steht vor 'to': warn + Objekt + not to + Verb." }
  },
  {
    sentence: "She reminded that I should bring my passport.",
    mistakeIndex: 1,
    correction: "reminded me to",
    explanation: { en: "'Remind' takes object + to-infinitive: remind + someone + to do something.", de: "'Remind' nimmt Objekt + to-Infinitiv: remind + jemanden + to do something." }
  },
  {
    sentence: "He denied to have stolen the money.",
    mistakeIndex: 2,
    correction: "denied having stolen",
    explanation: { en: "'Deny' takes a gerund: deny + -ing. For past: deny + having + past participle.", de: "'Deny' nimmt ein Gerundium: deny + -ing. Für die Vergangenheit: deny + having + Partizip Perfekt." }
  }
];

const grammarRacerData = [
  {
    prompt: "She suggested ___ a break after the long meeting.",
    options: ["taking", "to take", "take"],
    correct: "taking",
    explanation: "'Suggest' takes a gerund: suggest + -ing."
  },
  {
    prompt: "My mother reminded me ___ the door before leaving.",
    options: ["to lock", "locking", "lock"],
    correct: "to lock",
    explanation: "'Remind' takes object + to-infinitive: reminded me to lock."
  },
  {
    prompt: "The manager insisted ___ seeing the documents personally.",
    options: ["on", "to", "for"],
    correct: "on",
    explanation: "'Insist' takes 'on' + gerund: insist on + -ing."
  },
  {
    prompt: "He admitted ___ the window by accident.",
    options: ["breaking", "to break", "break"],
    correct: "breaking",
    explanation: "'Admit' takes a gerund: admit + -ing."
  },
  {
    prompt: "They encouraged us ___ for the competition.",
    options: ["to sign up", "signing up", "sign up"],
    correct: "to sign up",
    explanation: "'Encourage' takes object + to-infinitive."
  }
];

export const reportingVerbs = {
  id: 'b2_g8',
  title: {
    en: 'Reporting Verbs – Beyond Said & Told',
    de: 'Berichtsverben – Über said & told hinaus'
  },
  description: {
    en: "Master reporting verbs like advise, suggest, recommend, warn, remind, insist and their grammatical patterns.",
    de: "Meistere Berichtsverben wie advise, suggest, recommend, warn, remind, insist und ihre grammatischen Muster."
  },
  components: {
    sentenceBuilder: <GrammarGame type="sentenceBuilder" data={sentenceBuilderData} />,
    fixTheMistake: <GrammarGame type="fixTheMistake" data={fixTheMistakeData} />,
    grammarRacer: <GrammarGame type="grammarRacer" data={grammarRacerData} />
  },
  content: {
    en: `
## Reporting Verbs – Beyond 'Said' and 'Told' 🗣️

In reported speech, beginners use "He **said** that..." and "She **told** me that..." for everything. At B2 level, you need a richer vocabulary of **reporting verbs** – and each one follows its own grammatical pattern. Getting the pattern right is the key challenge.

### 1. Why Use Reporting Verbs? 🤔

Reporting verbs tell us **how** something was said – not just that it was said:

- "He **said** he would help." (neutral)
- "He **promised** to help." (commitment)
- "He **offered** to help." (voluntary)
- "He **refused** to help." (negative)
- "He **insisted on** helping." (emphatic)

### 2. The Four Main Patterns 📐

#### Pattern 1: verb + to-infinitive
Used for verbs of **commitment, refusal, decision**:

| Verb | Example |
|------|---------|
| **agree** | She agreed **to help**. |
| **offer** | He offered **to drive** us. |
| **promise** | They promised **to be** on time. |
| **refuse** | She refused **to answer**. |
| **threaten** | He threatened **to call** the police. |
| **claim** | She claimed **to be** an expert. |

#### Pattern 2: verb + object + to-infinitive
Used for verbs of **instruction, encouragement, permission**:

| Verb | Example |
|------|---------|
| **advise** | She advised **me to see** a doctor. |
| **encourage** | He encouraged **her to apply**. |
| **invite** | They invited **us to join** them. |
| **order** | The officer ordered **them to stop**. |
| **remind** | She reminded **me to call**. |
| **warn** | He warned **us not to go** there. |
| **persuade** | She persuaded **him to stay**. |
| **tell** | He told **me to wait**. |
| **ask** | She asked **him to help**. |
| **forbid** | They forbade **him to leave**. |

#### Pattern 3: verb + -ing (gerund)
Used for verbs of **admission, denial, suggestion**:

| Verb | Example |
|------|---------|
| **admit** | He admitted **making** a mistake. |
| **deny** | She denied **stealing** anything. |
| **suggest** | He suggested **going** to the cinema. |
| **recommend** | She recommended **visiting** the museum. |
| **regret** | I regret **not studying** harder. |
| **mention** | He mentioned **seeing** her at the party. |

> ⚠️ **IMPORTANT:** 'Suggest' and 'recommend' NEVER take object + to-infinitive!
> - ❌ "She suggested **me to go**."
> - ✅ "She suggested **going**." OR "She suggested **that I go**."

#### Pattern 4: verb + preposition + -ing
Used for verbs with **fixed prepositions**:

| Verb | Example |
|------|---------|
| **insist on** | He insisted **on paying**. |
| **apologise for** | She apologised **for being** late. |
| **accuse ... of** | They accused him **of lying**. |
| **blame ... for** | She blamed me **for breaking** it. |
| **congratulate ... on** | He congratulated her **on passing**. |
| **complain about** | She complained **about waiting**. |

### 3. The That-Clause Alternative 📋

Many reporting verbs also accept a **that-clause**, sometimes with subjunctive:

- "He **suggested that** we **(should) leave** early." (subjunctive – no '-s', no 'to')
- "She **recommended that** he **(should) see** a doctor."
- "They **insisted that** she **(should) be** included."
- "He **demanded that** the work **(should) be** finished."

> 💡 After suggest/recommend/insist/demand, use the **base form** (subjunctive) in the that-clause, NOT 'to + verb' or 'will + verb'.

<GamePlaceholder id="sentenceBuilder" />

### 4. Negative Reporting 🚫

For negative reporting, the position of 'not' depends on the pattern:

| Pattern | Negative | Example |
|---------|----------|---------|
| verb + to | verb + **not to** | "He promised **not to tell** anyone." |
| verb + obj + to | verb + obj + **not to** | "She warned me **not to touch** it." |
| verb + -ing | verb + **not** + -ing | "He admitted **not knowing** the answer." |
| verb + that | verb + that + **didn't** | "She said that she **didn't** agree." |

### 5. Quick Reference Table 📊

| Verb | Pattern | Example |
|------|---------|---------|
| advise | obj + to | advised me to rest |
| suggest | -ing / that | suggested going / suggested that we go |
| recommend | -ing / that | recommended seeing / recommended that I see |
| warn | obj + not to | warned us not to swim |
| remind | obj + to | reminded me to call |
| encourage | obj + to | encouraged her to try |
| insist | on + -ing / that | insisted on paying / insisted that he pay |
| admit | -ing | admitted cheating |
| deny | -ing | denied being involved |
| promise | to | promised to return |
| refuse | to | refused to cooperate |
| offer | to | offered to help |
| threaten | to | threatened to quit |

### 6. Common Mistakes ❌

**Mistake 1:** suggest/recommend + object + to-infinitive
- ❌ "She suggested **me to try** the fish."
- ✅ "She suggested **trying** the fish." / "She suggested **that I try** the fish."

**Mistake 2:** Forgetting the object with 'warn/remind/advise'
- ❌ "He warned **to be** careful."
- ✅ "He warned **us to be** careful."

**Mistake 3:** Using 'to' after 'deny/admit/suggest'
- ❌ "He denied **to steal** the money."
- ✅ "He denied **stealing** the money."

**Mistake 4:** Wrong preposition with 'insist'
- ❌ "She insisted **to** pay." / "She insisted **for** paying."
- ✅ "She insisted **on** paying."

<GamePlaceholder id="fixTheMistake" />

<div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">🎯 Key Rules:</h3>
  <ul className="list-disc list-inside space-y-1">
    <li><strong>Suggest/Recommend</strong> → -ing or that-clause (NEVER object + to)</li>
    <li><strong>Advise/Warn/Remind</strong> → object + to-infinitive</li>
    <li><strong>Admit/Deny</strong> → -ing (gerund)</li>
    <li><strong>Insist/Apologise/Accuse</strong> → preposition + -ing</li>
    <li><strong>Promise/Offer/Refuse/Threaten</strong> → to-infinitive (no object)</li>
    <li>Learn the <strong>pattern</strong>, not just the meaning!</li>
  </ul>
</div>

---

### 🎮 Practice Arena
<GamePlaceholder id="grammarRacer" />
`,
    de: `
## Berichtsverben – Über 'said' und 'told' hinaus 🗣️

In der indirekten Rede verwenden Anfänger "He **said** that..." und "She **told** me that..." für alles. Auf B2-Niveau brauchst du einen reicheren Wortschatz an **Berichtsverben** – und jedes folgt seinem eigenen grammatischen Muster. Das richtige Muster zu treffen ist die Hauptherausforderung.

### 1. Warum Berichtsverben verwenden? 🤔

Berichtsverben sagen uns **wie** etwas gesagt wurde – nicht nur, dass es gesagt wurde:

- "He **said** he would help." (neutral)
- "He **promised** to help." (Verpflichtung)
- "He **offered** to help." (freiwillig)
- "He **refused** to help." (negativ)
- "He **insisted on** helping." (nachdrücklich)

### 2. Die vier Hauptmuster 📐

#### Muster 1: Verb + to-Infinitiv
Für Verben der **Verpflichtung, Ablehnung, Entscheidung**:

| Verb | Beispiel |
|------|----------|
| **agree** | She agreed **to help**. |
| **offer** | He offered **to drive** us. |
| **promise** | They promised **to be** on time. |
| **refuse** | She refused **to answer**. |
| **threaten** | He threatened **to call** the police. |

#### Muster 2: Verb + Objekt + to-Infinitiv
Für Verben der **Anweisung, Ermutigung, Erlaubnis**:

| Verb | Beispiel |
|------|----------|
| **advise** | She advised **me to see** a doctor. |
| **encourage** | He encouraged **her to apply**. |
| **remind** | She reminded **me to call**. |
| **warn** | He warned **us not to go** there. |
| **persuade** | She persuaded **him to stay**. |
| **tell** | He told **me to wait**. |
| **ask** | She asked **him to help**. |

#### Muster 3: Verb + -ing (Gerundium)
Für Verben des **Zugebens, Leugnens, Vorschlagens**:

| Verb | Beispiel |
|------|----------|
| **admit** | He admitted **making** a mistake. |
| **deny** | She denied **stealing** anything. |
| **suggest** | He suggested **going** to the cinema. |
| **recommend** | She recommended **visiting** the museum. |
| **mention** | He mentioned **seeing** her. |

> ⚠️ **WICHTIG:** 'Suggest' und 'recommend' nehmen NIE Objekt + to-Infinitiv!
> - ❌ "She suggested **me to go**."
> - ✅ "She suggested **going**." ODER "She suggested **that I go**."

#### Muster 4: Verb + Präposition + -ing
Für Verben mit **festen Präpositionen**:

| Verb | Beispiel |
|------|----------|
| **insist on** | He insisted **on paying**. |
| **apologise for** | She apologised **for being** late. |
| **accuse ... of** | They accused him **of lying**. |
| **blame ... for** | She blamed me **for breaking** it. |
| **congratulate ... on** | He congratulated her **on passing**. |

### 3. Die That-Satz-Alternative 📋

Viele Berichtsverben akzeptieren auch einen **that-Satz**, manchmal mit Konjunktiv:

- "He **suggested that** we **(should) leave** early." (Konjunktiv)
- "She **recommended that** he **(should) see** a doctor."
- "They **insisted that** she **(should) be** included."

> 💡 Nach suggest/recommend/insist/demand verwende die **Grundform** (Konjunktiv) im that-Satz, NICHT 'to + Verb' oder 'will + Verb'.

<GamePlaceholder id="sentenceBuilder" />

### 4. Negative Berichterstattung 🚫

| Muster | Negativ | Beispiel |
|--------|---------|----------|
| Verb + to | Verb + **not to** | "He promised **not to tell** anyone." |
| Verb + Obj + to | Verb + Obj + **not to** | "She warned me **not to touch** it." |
| Verb + -ing | Verb + **not** + -ing | "He admitted **not knowing** the answer." |

### 5. Schnellreferenztabelle 📊

| Verb | Muster | Beispiel |
|------|--------|----------|
| advise | Obj + to | advised me to rest |
| suggest | -ing / that | suggested going |
| recommend | -ing / that | recommended seeing |
| warn | Obj + not to | warned us not to swim |
| remind | Obj + to | reminded me to call |
| encourage | Obj + to | encouraged her to try |
| insist | on + -ing / that | insisted on paying |
| admit | -ing | admitted cheating |
| deny | -ing | denied being involved |
| promise | to | promised to return |
| refuse | to | refused to cooperate |
| offer | to | offered to help |

### 6. Häufige Fehler ❌

**Fehler 1:** suggest/recommend + Objekt + to-Infinitiv
- ❌ "She suggested **me to try** the fish."
- ✅ "She suggested **trying** the fish." / "She suggested **that I try** the fish."

**Fehler 2:** Objekt bei 'warn/remind/advise' vergessen
- ❌ "He warned **to be** careful."
- ✅ "He warned **us to be** careful."

**Fehler 3:** 'To' nach 'deny/admit/suggest' verwenden
- ❌ "He denied **to steal** the money."
- ✅ "He denied **stealing** the money."

**Fehler 4:** Falsche Präposition bei 'insist'
- ❌ "She insisted **to** pay."
- ✅ "She insisted **on** paying."

<GamePlaceholder id="fixTheMistake" />

<div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">🎯 Wichtige Regeln:</h3>
  <ul className="list-disc list-inside space-y-1">
    <li><strong>Suggest/Recommend</strong> → -ing oder that-Satz (NIE Objekt + to)</li>
    <li><strong>Advise/Warn/Remind</strong> → Objekt + to-Infinitiv</li>
    <li><strong>Admit/Deny</strong> → -ing (Gerundium)</li>
    <li><strong>Insist/Apologise/Accuse</strong> → Präposition + -ing</li>
    <li><strong>Promise/Offer/Refuse/Threaten</strong> → to-Infinitiv (ohne Objekt)</li>
    <li>Lerne das <strong>Muster</strong>, nicht nur die Bedeutung!</li>
  </ul>
</div>

---

### 🎮 Trainings-Arena
<GamePlaceholder id="grammarRacer" />
`
  }
};
