import React from 'react';
import GrammarGame from '../../../components/grammar-games/GrammarGame';

const sentenceBuilderData = [
  {
    prompt: { en: "The report ___ by Friday.", de: "Der Bericht muss bis Freitag fertiggestellt werden." },
    words: ["must be completed", "must completed", "must be completing", "must have completed"],
    correct: "must be completed",
    explanation: { en: "Passive with modal: must + be + past participle. The report receives the action.", de: "Passiv mit Modalverb: must + be + Partizip Perfekt. Der Bericht empfängt die Handlung." }
  },
  {
    prompt: { en: "The package ___ yesterday, but it wasn't.", de: "Das Paket hätte gestern geliefert werden sollen, aber es wurde nicht." },
    words: ["should have been delivered", "should be delivered", "should delivered", "should have delivered"],
    correct: "should have been delivered",
    explanation: { en: "Past modal passive: should + have been + past participle for an unfulfilled past obligation.", de: "Vergangenes Modal-Passiv: should + have been + Partizip Perfekt für eine nicht erfüllte vergangene Verpflichtung." }
  },
  {
    prompt: { en: "This issue ___ more carefully before we proceed.", de: "Dieses Thema muss sorgfältiger geprüft werden, bevor wir fortfahren." },
    words: ["needs to be examined", "needs be examined", "needs examining to be", "needs to examining"],
    correct: "needs to be examined",
    explanation: { en: "Passive infinitive after 'needs': needs + to be + past participle.", de: "Passiver Infinitiv nach 'needs': needs + to be + Partizip Perfekt." }
  },
  {
    prompt: { en: "The window appears ___.", de: "Das Fenster scheint von innen aufgebrochen worden zu sein." },
    words: ["to have been broken", "to be broken", "to have broken", "being broken"],
    correct: "to have been broken",
    explanation: { en: "Perfect passive infinitive: to have been + past participle for a completed passive action.", de: "Perfekter passiver Infinitiv: to have been + Partizip Perfekt für eine abgeschlossene passive Handlung." }
  },
  {
    prompt: { en: "The files ___ without the manager's permission.", de: "Die Dateien dürfen nicht ohne die Erlaubnis des Managers gelöscht werden." },
    words: ["must not be deleted", "must not delete", "must not been deleted", "must not be deleting"],
    correct: "must not be deleted",
    explanation: { en: "Negative passive with modal: must not + be + past participle.", de: "Negatives Passiv mit Modalverb: must not + be + Partizip Perfekt." }
  },
  {
    prompt: { en: "She doesn't like ___ what to do.", de: "Sie mag es nicht, gesagt zu bekommen, was sie tun soll." },
    words: ["being told", "be told", "to told", "been told"],
    correct: "being told",
    explanation: { en: "Passive gerund: being + past participle after 'like/enjoy/hate/mind'.", de: "Passives Gerundium: being + Partizip Perfekt nach 'like/enjoy/hate/mind'." }
  }
];

const fixTheMistakeData = [
  {
    sentence: "The homework should been handed in yesterday.",
    mistakeIndex: 2,
    correction: "should have been",
    explanation: { en: "Past modal passive requires 'should have been' + past participle, not 'should been'.", de: "Das vergangene Modal-Passiv erfordert 'should have been' + Partizip Perfekt, nicht 'should been'." }
  },
  {
    sentence: "The car needs to repaired before the trip.",
    mistakeIndex: 3,
    correction: "to be repaired",
    explanation: { en: "Passive infinitive needs 'to be' + past participle: 'needs to be repaired'.", de: "Der passive Infinitiv braucht 'to be' + Partizip Perfekt: 'needs to be repaired'." }
  },
  {
    sentence: "He hates been criticized in front of others.",
    mistakeIndex: 2,
    correction: "being",
    explanation: { en: "Passive gerund uses 'being' + past participle, not 'been': 'hates being criticized'.", de: "Das passive Gerundium verwendet 'being' + Partizip Perfekt, nicht 'been': 'hates being criticized'." }
  },
  {
    sentence: "The project could completed by next week if we hurry.",
    mistakeIndex: 2,
    correction: "could be completed",
    explanation: { en: "Modal passive always needs 'be': could + be + past participle.", de: "Das Modal-Passiv braucht immer 'be': could + be + Partizip Perfekt." }
  },
  {
    sentence: "These documents might have being lost in the move.",
    mistakeIndex: 3,
    correction: "have been",
    explanation: { en: "Perfect modal passive uses 'have been' (not 'have being'): might have been lost.", de: "Das perfekte Modal-Passiv verwendet 'have been' (nicht 'have being'): might have been lost." }
  }
];

const grammarRacerData = [
  {
    prompt: "The email ___ before the meeting starts.",
    options: ["should be sent", "should send", "should been sent"],
    correct: "should be sent",
    explanation: "Modal passive: should + be + past participle."
  },
  {
    prompt: "The documents ___ ages ago. Why are they still here?",
    options: ["should have been filed", "should be filed", "should filed"],
    correct: "should have been filed",
    explanation: "Past modal passive for an unfulfilled past obligation."
  },
  {
    prompt: "Nobody enjoys ___ unfairly.",
    options: ["being treated", "been treated", "be treated"],
    correct: "being treated",
    explanation: "Passive gerund: being + past participle after 'enjoy'."
  },
  {
    prompt: "The building is thought ___ over 500 years old.",
    options: ["to be", "being", "to been"],
    correct: "to be",
    explanation: "Passive infinitive: is thought + to be."
  },
  {
    prompt: "This problem can ___ solved with a simple update.",
    options: ["be", "been", "being"],
    correct: "be",
    explanation: "Modal passive: can + be + past participle."
  }
];

export const passiveWithModals = {
  id: 'b2_g6',
  title: {
    en: 'Passive with Modals & Complex Passives',
    de: 'Passiv mit Modalverben & komplexe Passivformen'
  },
  description: {
    en: "Master passive constructions with modal verbs, passive infinitives, and passive gerunds.",
    de: "Meistere Passivkonstruktionen mit Modalverben, passiven Infinitiven und passiven Gerundien."
  },
  components: {
    sentenceBuilder: <GrammarGame type="sentenceBuilder" data={sentenceBuilderData} />,
    fixTheMistake: <GrammarGame type="fixTheMistake" data={fixTheMistakeData} />,
    grammarRacer: <GrammarGame type="grammarRacer" data={grammarRacerData} />
  },
  content: {
    en: `
## Passive with Modals & Complex Passives 🔧

At B2 level, you need to go beyond simple passive sentences (The cake **was eaten**) and master passive structures with **modal verbs**, **infinitives**, and **gerunds**. These are essential for academic writing, news reports, and formal communication.

### 1. Passive with Modal Verbs 🔑

**Structure:** modal + be + past participle

| Modal | Active | Passive |
|-------|--------|---------|
| **can** | She can fix it. | It **can be fixed**. |
| **must** | You must finish the report. | The report **must be finished**. |
| **should** | They should inform the staff. | The staff **should be informed**. |
| **may** | Someone may cancel the event. | The event **may be cancelled**. |
| **might** | They might delay the flight. | The flight **might be delayed**. |
| **could** | We could solve the problem. | The problem **could be solved**. |
| **will** | They will announce the results. | The results **will be announced**. |

**Key formula:** Subject + modal + **be** + past participle

- "This form **must be signed** by both parties."
- "The noise **can be heard** from miles away."
- "Passengers **should be advised** of the delay."

### 2. Past Modal Passives ⏪

**Structure:** modal + have been + past participle

Use this for talking about **past** situations in the passive:

| Form | Example |
|------|---------|
| **should have been** | "The letter **should have been sent** yesterday." |
| **could have been** | "The accident **could have been prevented**." |
| **might have been** | "The data **might have been deleted** accidentally." |
| **must have been** | "The door **must have been left** open." (deduction) |
| **would have been** | "The project **would have been completed** if..." |

- "You **should have been told** about the meeting." (= but you weren't)
- "The mistake **could have been avoided**." (= but it wasn't)
- "The car **must have been stolen** overnight." (= I'm almost certain)

### 3. Passive Infinitives 📐

**Structure:** to be + past participle (present) / to have been + past participle (past)

Used after verbs like: want, expect, need, appear, seem, happen, tend

**Present passive infinitive:**
- "The contract **needs to be reviewed**."
- "She **wants to be promoted** this year."
- "The building **appears to be abandoned**."

**Perfect passive infinitive (for past reference):**
- "He **seems to have been given** wrong information."
- "The painting is **believed to have been stolen** in 1945."
- "She **appears to have been promoted** recently."

### 4. Passive Gerunds 📝

**Structure:** being + past participle

Used after prepositions, and verbs that take -ing:

- "She hates **being interrupted** during meetings."
- "He's tired of **being told** what to do."
- "Nobody enjoys **being criticised** in public."
- "**Being selected** for the team was a great honour."

**Perfect passive gerund:** having been + past participle
- "**Having been warned** about the traffic, we left early."
- "He denied **having been involved** in the scandal."

<GamePlaceholder id="sentenceBuilder" />

### 5. Need + Passive 🔄

There are two ways to express passive meaning with 'need':

| Structure | Example | Style |
|-----------|---------|-------|
| **needs to be + pp** | "The car needs **to be washed**." | Standard |
| **needs + -ing** | "The car needs **washing**." | Informal/British |

Both mean the same thing! The second form (needs + -ing) has a passive meaning despite looking active.

- "The garden needs **watering**." (= needs to be watered)
- "This shirt needs **ironing**." (= needs to be ironed)

### 6. Common Mistakes ❌

**Mistake 1:** Forgetting 'be' in modal passives
- ❌ "The report must **finished** by Friday."
- ✅ "The report must **be finished** by Friday."

**Mistake 2:** Confusing 'being' and 'been' in gerunds
- ❌ "She hates **been** ignored."
- ✅ "She hates **being** ignored."

**Mistake 3:** Wrong form for past modal passives
- ❌ "The homework should **been** handed in."
- ✅ "The homework should **have been** handed in."

**Mistake 4:** Mixing up passive infinitive forms
- ❌ "The house appears **to been** renovated."
- ✅ "The house appears **to have been** renovated."

<GamePlaceholder id="fixTheMistake" />

<div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">🎯 Key Rules:</h3>
  <ul className="list-disc list-inside space-y-1">
    <li><strong>Modal passive:</strong> modal + be + past participle</li>
    <li><strong>Past modal passive:</strong> modal + have been + past participle</li>
    <li><strong>Passive infinitive:</strong> to be / to have been + past participle</li>
    <li><strong>Passive gerund:</strong> being / having been + past participle</li>
    <li>Always include <strong>'be'</strong> – it's the most common mistake to drop it!</li>
  </ul>
</div>

---

### 🎮 Practice Arena
<GamePlaceholder id="grammarRacer" />
`,
    de: `
## Passiv mit Modalverben & komplexe Passivformen 🔧

Auf B2-Niveau musst du über einfache Passivsätze (The cake **was eaten**) hinausgehen und Passivstrukturen mit **Modalverben**, **Infinitiven** und **Gerundien** meistern. Diese sind essenziell für akademisches Schreiben, Nachrichtenberichte und formelle Kommunikation.

### 1. Passiv mit Modalverben 🔑

**Struktur:** Modalverb + be + Partizip Perfekt

| Modal | Aktiv | Passiv |
|-------|-------|--------|
| **can** | She can fix it. | It **can be fixed**. |
| **must** | You must finish the report. | The report **must be finished**. |
| **should** | They should inform the staff. | The staff **should be informed**. |
| **may** | Someone may cancel the event. | The event **may be cancelled**. |
| **might** | They might delay the flight. | The flight **might be delayed**. |

**Schlüsselformel:** Subjekt + Modalverb + **be** + Partizip Perfekt

- "This form **must be signed** by both parties."
- "The noise **can be heard** from miles away."
- "Passengers **should be advised** of the delay."

### 2. Vergangene Modal-Passive ⏪

**Struktur:** Modalverb + have been + Partizip Perfekt

Verwende dies für **vergangene** Situationen im Passiv:

| Form | Beispiel |
|------|----------|
| **should have been** | "The letter **should have been sent** yesterday." |
| **could have been** | "The accident **could have been prevented**." |
| **might have been** | "The data **might have been deleted** accidentally." |
| **must have been** | "The door **must have been left** open." (Schlussfolgerung) |

- "You **should have been told** about the meeting." (= aber wurdest du nicht)
- "The mistake **could have been avoided**." (= aber wurde es nicht)
- "The car **must have been stolen** overnight." (= ich bin fast sicher)

### 3. Passive Infinitive 📐

**Struktur:** to be + Partizip Perfekt (Gegenwart) / to have been + Partizip Perfekt (Vergangenheit)

Nach Verben wie: want, expect, need, appear, seem

**Gegenwärtiger passiver Infinitiv:**
- "The contract **needs to be reviewed**."
- "She **wants to be promoted** this year."
- "The building **appears to be abandoned**."

**Perfekter passiver Infinitiv (für Vergangenheitsbezug):**
- "He **seems to have been given** wrong information."
- "The painting is **believed to have been stolen** in 1945."

### 4. Passive Gerundien 📝

**Struktur:** being + Partizip Perfekt

Nach Präpositionen und Verben, die -ing nehmen:

- "She hates **being interrupted** during meetings."
- "He's tired of **being told** what to do."
- "Nobody enjoys **being criticised** in public."

**Perfektes passives Gerundium:** having been + Partizip Perfekt
- "**Having been warned** about the traffic, we left early."

<GamePlaceholder id="sentenceBuilder" />

### 5. Need + Passiv 🔄

Es gibt zwei Wege, passive Bedeutung mit 'need' auszudrücken:

| Struktur | Beispiel | Stil |
|----------|----------|------|
| **needs to be + PP** | "The car needs **to be washed**." | Standard |
| **needs + -ing** | "The car needs **washing**." | Informell/Britisch |

Beide bedeuten das Gleiche! Die zweite Form hat passive Bedeutung, obwohl sie aktiv aussieht.

### 6. Häufige Fehler ❌

**Fehler 1:** 'Be' in Modal-Passiven vergessen
- ❌ "The report must **finished** by Friday."
- ✅ "The report must **be finished** by Friday."

**Fehler 2:** 'Being' und 'been' in Gerundien verwechseln
- ❌ "She hates **been** ignored."
- ✅ "She hates **being** ignored."

**Fehler 3:** Falsche Form für vergangene Modal-Passive
- ❌ "The homework should **been** handed in."
- ✅ "The homework should **have been** handed in."

**Fehler 4:** Passive Infinitivformen verwechseln
- ❌ "The house appears **to been** renovated."
- ✅ "The house appears **to have been** renovated."

<GamePlaceholder id="fixTheMistake" />

<div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">🎯 Wichtige Regeln:</h3>
  <ul className="list-disc list-inside space-y-1">
    <li><strong>Modal-Passiv:</strong> Modalverb + be + Partizip Perfekt</li>
    <li><strong>Vergangenes Modal-Passiv:</strong> Modalverb + have been + Partizip Perfekt</li>
    <li><strong>Passiver Infinitiv:</strong> to be / to have been + Partizip Perfekt</li>
    <li><strong>Passives Gerundium:</strong> being / having been + Partizip Perfekt</li>
    <li>Vergiss nie <strong>'be'</strong> – das ist der häufigste Fehler!</li>
  </ul>
</div>

---

### 🎮 Trainings-Arena
<GamePlaceholder id="grammarRacer" />
`
  }
};
