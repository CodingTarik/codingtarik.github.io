import React from 'react';
import GrammarGame from '../../../components/grammar-games/GrammarGame';

const sentenceBuilderData = [
  {
    prompt: { en: "It ___ that the company is planning to expand.", de: "Es wird berichtet, dass das Unternehmen plant zu expandieren." },
    words: ["is reported", "reports", "is reporting", "has reporting"],
    correct: "is reported",
    explanation: { en: "Impersonal passive with 'It': It + is + past participle + that-clause. Used for distancing.", de: "Unpersönliches Passiv mit 'It': It + is + Partizip Perfekt + that-Satz. Wird zur Distanzierung verwendet." }
  },
  {
    prompt: { en: "The suspect ___ to have left the country.", de: "Der Verdächtige soll das Land verlassen haben." },
    words: ["is believed", "believes", "is believing", "has believed"],
    correct: "is believed",
    explanation: { en: "Personal passive: Subject + is + past participle + to-infinitive. 'The suspect is believed to have left...'", de: "Persönliches Passiv: Subjekt + is + Partizip Perfekt + to-Infinitiv. 'Der Verdächtige soll ... haben.'" }
  },
  {
    prompt: { en: "It ___ that over 1,000 people attended the protest.", de: "Es wird geschätzt, dass über 1.000 Menschen an dem Protest teilnahmen." },
    words: ["is estimated", "estimates", "was estimating", "has estimated"],
    correct: "is estimated",
    explanation: { en: "Impersonal passive with reporting verb: It is estimated that + clause.", de: "Unpersönliches Passiv mit Berichtsverb: It is estimated that + Satz." }
  },
  {
    prompt: { en: "She ___ to be one of the best surgeons in the country.", de: "Sie gilt als eine der besten Chirurginnen des Landes." },
    words: ["is considered", "considers", "is considering", "has considered"],
    correct: "is considered",
    explanation: { en: "Personal passive with 'consider': She is considered to be... (formal reporting).", de: "Persönliches Passiv mit 'consider': Sie wird als ... angesehen (formelle Berichterstattung)." }
  },
  {
    prompt: { en: "The CEO ___ to have resigned over the scandal.", de: "Der CEO soll wegen des Skandals zurückgetreten sein." },
    words: ["is said", "says", "is saying", "has saying"],
    correct: "is said",
    explanation: { en: "Personal passive: Subject + is said + to have + past participle (for past events).", de: "Persönliches Passiv: Subjekt + is said + to have + Partizip Perfekt (für vergangene Ereignisse)." }
  },
  {
    prompt: { en: "It ___ that stress causes many health problems.", de: "Es ist bekannt, dass Stress viele Gesundheitsprobleme verursacht." },
    words: ["is known", "knows", "is knowing", "has known"],
    correct: "is known",
    explanation: { en: "Impersonal passive: It is known that + clause – a common academic structure.", de: "Unpersönliches Passiv: It is known that + Satz – eine häufige akademische Struktur." }
  }
];

const fixTheMistakeData = [
  {
    sentence: "It is believe that the Earth is approximately 4.5 billion years old.",
    mistakeIndex: 2,
    correction: "believed",
    explanation: { en: "Use the past participle 'believed', not the base form: 'It is believed that...'", de: "Verwende das Partizip Perfekt 'believed', nicht die Grundform: 'It is believed that...'" }
  },
  {
    sentence: "The president is said that he will resign next month.",
    mistakeIndex: 4,
    correction: "to be planning to resign",
    explanation: { en: "Personal passive uses 'to-infinitive', not 'that': 'The president is said to be planning to resign...'", de: "Das persönliche Passiv verwendet 'to-Infinitiv', nicht 'that': 'The president is said to be planning to resign...'" }
  },
  {
    sentence: "She is thought to has been working abroad.",
    mistakeIndex: 4,
    correction: "to have been",
    explanation: { en: "After passive reporting verbs, use 'to have been' (not 'to has been'): 'is thought to have been working'.", de: "Nach passiven Berichtsverben verwende 'to have been' (nicht 'to has been'): 'is thought to have been working'." }
  },
  {
    sentence: "It is reported the company will close several branches.",
    mistakeIndex: 3,
    correction: "reported that",
    explanation: { en: "The impersonal passive structure needs 'that': 'It is reported THAT the company...'", de: "Die unpersönliche Passivstruktur braucht 'that': 'It is reported THAT the company...'" }
  }
];

const grammarRacerData = [
  {
    prompt: "It ___ that the missing hiker has been found safe.",
    options: ["has been confirmed", "has confirmed", "is confirming"],
    correct: "has been confirmed",
    explanation: "Impersonal passive: It has been confirmed that..."
  },
  {
    prompt: "The actor ___ to be living in a small village in France.",
    options: ["is rumoured", "rumours", "is rumouring"],
    correct: "is rumoured",
    explanation: "Personal passive with reporting verb: is rumoured + to-infinitive."
  },
  {
    prompt: "He ___ to have committed the crime, but there's no proof.",
    options: ["is alleged", "alleges", "was alleging"],
    correct: "is alleged",
    explanation: "Personal passive: He is alleged to have + past participle."
  },
  {
    prompt: "It ___ that regular exercise improves mental health.",
    options: ["has been shown", "has shown", "is showing"],
    correct: "has been shown",
    explanation: "Impersonal passive: It has been shown that + fact."
  },
  {
    prompt: "The disease ___ to affect over 5 million people worldwide.",
    options: ["is estimated", "estimates", "was estimating"],
    correct: "is estimated",
    explanation: "Personal passive: The disease is estimated to + infinitive."
  }
];

export const advancedPassiveStructures = {
  id: 'b2_g7',
  title: {
    en: 'Advanced Passive – Distancing & Impersonal Structures',
    de: 'Fortgeschrittenes Passiv – Distanzierung & unpersönliche Strukturen'
  },
  description: {
    en: "Master impersonal passives with reporting verbs: 'It is believed that...', 'He is said to be...'",
    de: "Meistere unpersönliche Passive mit Berichtsverben: 'It is believed that...', 'He is said to be...'"
  },
  components: {
    sentenceBuilder: <GrammarGame type="sentenceBuilder" data={sentenceBuilderData} />,
    fixTheMistake: <GrammarGame type="fixTheMistake" data={fixTheMistakeData} />,
    grammarRacer: <GrammarGame type="grammarRacer" data={grammarRacerData} />
  },
  content: {
    en: `
## Advanced Passive Structures – Distancing & Reporting 📰

In formal English – especially in news, academic writing, and official reports – we often use **impersonal passive structures** to create distance from the source. Instead of saying "People believe that...", we say "**It is believed that...**" This makes statements sound more objective and authoritative.

### 1. Why Use These Structures? 🤔

- To report information **without naming the source** ("People say..." → "It is said...")
- To sound **objective and neutral** in academic/formal writing
- To create **distance** from unverified claims ("He is alleged to...")
- Common in **news reports**, **scientific writing**, and **official documents**

### 2. Impersonal Passive (It + passive + that-clause) 📋

**Structure:** It + is/was + past participle + that + clause

| Reporting Verb | Example |
|---------------|---------|
| **believe** | "It **is believed** that the universe is expanding." |
| **say** | "It **is said** that she speaks seven languages." |
| **report** | "It **is reported** that three people were injured." |
| **think** | "It **is thought** that the fire started accidentally." |
| **know** | "It **is known** that vitamin C boosts immunity." |
| **estimate** | "It **is estimated** that 8 billion people live on Earth." |
| **expect** | "It **is expected** that prices will rise." |
| **claim** | "It **is claimed** that the product cures headaches." |
| **allege** | "It **is alleged** that funds were misused." |
| **understand** | "It **is understood** that the talks have broken down." |

> 💡 The source is deliberately left vague. Who believes/says/reports this? We don't specify – that's the point!

### 3. Personal Passive (Subject + passive + to-infinitive) 👤

**Structure:** Subject + is/was + past participle + to + infinitive

This structure makes the **person/thing** the subject instead of 'it':

| Impersonal (It...) | Personal (Subject...) |
|--------------------|-----------------------|
| It is said **that** he is rich. | He **is said to be** rich. |
| It is believed **that** she lives abroad. | She **is believed to live** abroad. |
| It was reported **that** the bridge collapsed. | The bridge **was reported to have collapsed**. |
| It is known **that** they left early. | They **are known to have left** early. |

#### Time reference in personal passives:

| Time | Structure | Example |
|------|-----------|---------|
| **Present/General** | is said **to be** / **to do** | "He **is said to be** a genius." |
| **Ongoing** | is said **to be doing** | "She **is thought to be working** on a new book." |
| **Past** | is said **to have done** | "He **is believed to have left** the country." |
| **Past ongoing** | is said **to have been doing** | "They **are thought to have been planning** this for months." |

### 4. Common Reporting Verbs for This Structure 📝

These verbs work with both impersonal and personal passive:

**believe, say, report, think, know, consider, expect, estimate, claim, allege, understand, assume, feel, suppose, rumour**

- "She **is considered** to be the best candidate."
- "The company **is rumoured** to be in financial trouble."
- "The results **are assumed** to be accurate."

<GamePlaceholder id="sentenceBuilder" />

### 5. Passive with 'Have/Get Something Done' 🔄

A related structure used when someone **arranges** for something to be done by someone else:

| Structure | Example | Meaning |
|-----------|---------|---------|
| **have + object + pp** | "I **had my car repaired**." | I arranged for someone to repair it. |
| **get + object + pp** | "She **got her hair cut**." | She arranged for someone to cut it. |

- "We need to **have the roof fixed** before winter."
- "He **got his suit dry-cleaned** for the wedding."

This is NOT the same as "I repaired my car" (= I did it myself).

### 6. Common Mistakes ❌

**Mistake 1:** Using 'that' in personal passive
- ❌ "He is said **that** he is rich."
- ✅ "He **is said to be** rich."

**Mistake 2:** Wrong infinitive form for past reference
- ❌ "She is believed **to leave** the country last year."
- ✅ "She is believed **to have left** the country last year."

**Mistake 3:** Using 'has' instead of 'have' in infinitive
- ❌ "He is thought to **has** won the election."
- ✅ "He is thought to **have** won the election."

**Mistake 4:** Forgetting 'that' in impersonal passive
- ❌ "It is reported the bridge collapsed."
- ✅ "It is reported **that** the bridge collapsed."

<GamePlaceholder id="fixTheMistake" />

<div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">💡 Impersonal vs Personal – Quick Guide:</h3>
  <ul className="list-disc list-inside space-y-1">
    <li><strong>Impersonal:</strong> "It is said <strong>that</strong> he is rich." (It + passive + that)</li>
    <li><strong>Personal:</strong> "He is said <strong>to be</strong> rich." (Subject + passive + to)</li>
    <li>Both are correct – personal passive is more common in modern English</li>
    <li>Use <strong>to have + pp</strong> when the reported event is in the <strong>past</strong></li>
  </ul>
</div>

---

### 🎮 Practice Arena
<GamePlaceholder id="grammarRacer" />
`,
    de: `
## Fortgeschrittene Passivstrukturen – Distanzierung & Berichterstattung 📰

Im formellen Englisch – besonders in Nachrichten, akademischem Schreiben und offiziellen Berichten – verwenden wir oft **unpersönliche Passivstrukturen**, um Distanz zur Quelle zu schaffen. Statt "People believe that..." sagen wir "**It is believed that...**" Das macht Aussagen objektiver und autoritativer.

### 1. Warum diese Strukturen verwenden? 🤔

- Um Informationen **ohne Nennung der Quelle** zu berichten
- Um **objektiv und neutral** in akademischem/formellem Schreiben zu klingen
- Um **Distanz** zu unverifizierten Behauptungen zu schaffen
- Häufig in **Nachrichtenberichten**, **wissenschaftlichem Schreiben** und **offiziellen Dokumenten**

### 2. Unpersönliches Passiv (It + Passiv + that-Satz) 📋

**Struktur:** It + is/was + Partizip Perfekt + that + Satz

| Berichtsverb | Beispiel |
|-------------|----------|
| **believe** | "It **is believed** that the universe is expanding." |
| **say** | "It **is said** that she speaks seven languages." |
| **report** | "It **is reported** that three people were injured." |
| **think** | "It **is thought** that the fire started accidentally." |
| **know** | "It **is known** that vitamin C boosts immunity." |
| **estimate** | "It **is estimated** that 8 billion people live on Earth." |
| **expect** | "It **is expected** that prices will rise." |
| **claim** | "It **is claimed** that the product cures headaches." |

> 💡 Die Quelle wird absichtlich vage gelassen. Wer glaubt/sagt/berichtet das? Wir spezifizieren es nicht – das ist der Punkt!

### 3. Persönliches Passiv (Subjekt + Passiv + to-Infinitiv) 👤

**Struktur:** Subjekt + is/was + Partizip Perfekt + to + Infinitiv

| Unpersönlich (It...) | Persönlich (Subjekt...) |
|---------------------|------------------------|
| It is said **that** he is rich. | He **is said to be** rich. |
| It is believed **that** she lives abroad. | She **is believed to live** abroad. |
| It was reported **that** the bridge collapsed. | The bridge **was reported to have collapsed**. |

#### Zeitbezug in persönlichen Passiven:

| Zeit | Struktur | Beispiel |
|------|----------|----------|
| **Gegenwart** | is said **to be / to do** | "He **is said to be** a genius." |
| **Andauernd** | is said **to be doing** | "She **is thought to be working** on a book." |
| **Vergangenheit** | is said **to have done** | "He **is believed to have left** the country." |

### 4. Häufige Berichtsverben 📝

Diese Verben funktionieren mit beiden Strukturen:

**believe, say, report, think, know, consider, expect, estimate, claim, allege, understand, assume, suppose, rumour**

- "She **is considered** to be the best candidate."
- "The company **is rumoured** to be in financial trouble."

<GamePlaceholder id="sentenceBuilder" />

### 5. Passiv mit 'Have/Get Something Done' 🔄

Eine verwandte Struktur, wenn jemand **veranlasst**, dass etwas von jemand anderem getan wird:

| Struktur | Beispiel | Bedeutung |
|----------|----------|-----------|
| **have + Objekt + PP** | "I **had my car repaired**." | Ich habe jemanden beauftragt, es zu reparieren. |
| **get + Objekt + PP** | "She **got her hair cut**." | Sie hat sich die Haare schneiden lassen. |

### 6. Häufige Fehler ❌

**Fehler 1:** 'That' im persönlichen Passiv verwenden
- ❌ "He is said **that** he is rich."
- ✅ "He **is said to be** rich."

**Fehler 2:** Falsche Infinitivform für Vergangenheitsbezug
- ❌ "She is believed **to leave** the country last year."
- ✅ "She is believed **to have left** the country last year."

**Fehler 3:** 'Has' statt 'have' im Infinitiv
- ❌ "He is thought to **has** won the election."
- ✅ "He is thought to **have** won the election."

**Fehler 4:** 'That' im unpersönlichen Passiv vergessen
- ❌ "It is reported the bridge collapsed."
- ✅ "It is reported **that** the bridge collapsed."

<GamePlaceholder id="fixTheMistake" />

<div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">💡 Unpersönlich vs Persönlich – Schnellguide:</h3>
  <ul className="list-disc list-inside space-y-1">
    <li><strong>Unpersönlich:</strong> "It is said <strong>that</strong> he is rich." (It + Passiv + that)</li>
    <li><strong>Persönlich:</strong> "He is said <strong>to be</strong> rich." (Subjekt + Passiv + to)</li>
    <li>Beide sind korrekt – persönliches Passiv ist im modernen Englisch häufiger</li>
    <li>Verwende <strong>to have + PP</strong> wenn das berichtete Ereignis in der <strong>Vergangenheit</strong> liegt</li>
  </ul>
</div>

---

### 🎮 Trainings-Arena
<GamePlaceholder id="grammarRacer" />
`
  }
};
