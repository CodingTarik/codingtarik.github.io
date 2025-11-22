import React from 'react';
import GrammarGame from '../../../components/grammar-games/GrammarGame';

const sentenceBuilderData = [
  {
    prompt: { en: "I ___ (work) tomorrow. It's required.", de: "Ich ___ (arbeiten) morgen. Es ist erforderlich." },
    words: ["have to work", "must work", "work", "am working"],
    correct: "have to work",
    explanation: { en: "External obligation (rules/requirements) → have to", de: "Externe Verpflichtung (Regeln/Anforderungen) → have to" }
  },
  {
    prompt: { en: "You ___ (stop) at red lights. It's the law.", de: "Du ___ (anhalten) bei roten Ampeln. Es ist das Gesetz." },
    words: ["must stop", "have to stop", "stop", "will stop"],
    correct: "must stop",
    explanation: { en: "Strong obligation/rules → must or have to (both possible)", de: "Starke Verpflichtung/Regeln → must oder have to (beide möglich)" }
  },
  {
    prompt: { en: "I ___ (finish) this today. It's very important.", de: "Ich ___ (fertig machen) das heute. Es ist sehr wichtig." },
    words: ["must finish", "have to finish", "finish", "am finishing"],
    correct: "must finish",
    explanation: { en: "Personal obligation/strong feeling → must", de: "Persönliche Verpflichtung/starkes Gefühl → must" }
  }
];

const fixTheMistakeData = [
  {
    sentence: "I must to go now.",
    mistakeIndex: 2,
    correction: "go",
    explanation: { en: "Must + base verb (not 'must to go')", de: "Must + Grundform (nicht 'must to go')" }
  },
  {
    sentence: "She has to works hard.",
    mistakeIndex: 3,
    correction: "work",
    explanation: { en: "Have to + base verb: has to work (not 'works')", de: "Have to + Grundform: has to work (nicht 'works')" }
  },
  {
    sentence: "You mustn't to smoke here.",
    mistakeIndex: 2,
    correction: "smoke",
    explanation: { en: "Mustn't + base verb: mustn't smoke (not 'mustn't to smoke')", de: "Mustn't + Grundform: mustn't smoke (nicht 'mustn't to smoke')" }
  }
];

const grammarRacerData = [
  {
    prompt: "I ___ go to work tomorrow.",
    options: ["have to", "has to", "must to"],
    correct: "have to",
    explanation: "Obligation: have to"
  },
  {
    prompt: "You ___ be careful.",
    options: ["must", "musts", "must to"],
    correct: "must",
    explanation: "Strong obligation: must"
  },
  {
    prompt: "She ___ study tonight.",
    options: ["has to", "have to", "musts"],
    correct: "has to",
    explanation: "She has to (third person)"
  }
];

export const haveToAndMust = {
  id: 'a2_g31',
  title: {
    en: 'Have to and Must',
    de: 'Have to und Must'
  },
  description: {
    en: "Expressing obligation and necessity. 'I have to work', 'You must stop', understanding when to use each.",
    de: "Verpflichtung und Notwendigkeit ausdrücken. 'Ich muss arbeiten', 'Du musst anhalten', verstehen, wann man welches verwendet."
  },
  
  components: {
    sentenceBuilder: <GrammarGame type="sentenceBuilder" data={sentenceBuilderData} />,
    fixTheMistake: <GrammarGame type="fixTheMistake" data={fixTheMistakeData} />,
    grammarRacer: <GrammarGame type="grammarRacer" data={grammarRacerData} />
  },

  content: {
    en: `
## Have To and Must: Obligation and Necessity ⚖️

Both **have to** and **must** express **obligation** and **necessity** - things you need to do. But there are important differences in how and when to use them!

### The Core Difference

**HAVE TO** = External obligation (rules, laws, requirements from outside)
**MUST** = Personal obligation (your own feeling, strong personal necessity)

However, in many situations, you can use either one - especially for rules and laws!

### 1. Form: Have To 📝

**Structure:** Subject + have/has to + base verb

**Important:** "Have to" changes with the subject (I have to, you have to, he/she/it **has to**)

**Examples:**
- "I **have to** work tomorrow." (I have an obligation)
- "She **has to** finish this today." (She has an obligation)
- "We **have to** be there at 9am." (We have an obligation)

**Negative:** don\'t/doesn't have to = No obligation (it\'s not necessary)
- "I **don\'t have to** work tomorrow." (It's not necessary)
- "She **doesn't have to** come." (It's not necessary)

<div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">💡 Remember:</h3>
  <p><strong>Have to</strong> changes: I/you/we/they <strong>have to</strong>, he/she/it <strong>has to</strong></p>
  <p>After "have to" or "has to", use the <strong>base form</strong> of the verb!</p>
</div>

<GamePlaceholder id="sentenceBuilder" />

### 2. Form: Must 📝

**Structure:** Subject + **must** + base verb

**Important:** "Must" stays the same for all subjects (I must, you must, he must, etc.)

**Examples:**
- "I **must** finish this today." (I feel it\'s necessary)
- "You **must** stop at red lights." (Rule/law)
- "We **must** be careful." (Strong feeling)

**Negative:** mustn't = Prohibition (you must NOT do this)
- "You **mustn't** smoke here." (It's forbidden)
- "You **mustn't** tell anyone." (Don't do it!)

<div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">✅ Remember:</h3>
  <p><strong>Must</strong> doesn't change: I must, you must, he must (not "he musts")</p>
  <p>After "must", use the <strong>base form</strong> of the verb!</p>
</div>

### 3. When to Use Have To 🎯

Use **have to** for:

#### A) External Obligations (Rules, Laws, Requirements)
- "I **have to** wear a uniform at work." (Company rule)
- "You **have to** have a license to drive." (Law)
- "We **have to** finish this by Friday." (Requirement)

#### B) Things You Need to Do (External Pressure)
- "I **have to** go to the dentist." (Appointment)
- "She **has to** study for the exam." (Requirement)
- "We **have to** pay the rent." (Obligation)

**Key idea:** The obligation comes from **outside** - rules, laws, requirements, or circumstances.

### 4. When to Use Must 🎯

Use **must** for:

#### A) Strong Personal Obligation (Your Own Feeling)
- "I **must** call my mother." (I feel it\'s necessary)
- "I **must** finish this today." (Strong personal feeling)

#### B) Rules and Laws (Formal/Strong)
- "You **must** stop at red lights." (Law - very strong)
- "You **must** be 18 to vote." (Law)

**Note:** For rules and laws, both "have to" and "must" are often possible!

**Key idea:** The obligation comes from **your own feeling** or is a **very strong rule**.

<GamePlaceholder id="fixTheMistake" />

### 5. Don't Have To vs Mustn't ⚠️

This is very important! They mean completely different things:

| Expression | Meaning | Example |
|------------|---------|---------|
| **Don't have to** | No obligation (optional) | "You **don\'t have to** come." (You can come if you want, but it\'s not necessary) |
| **Mustn't** | Prohibition (forbidden) | "You **mustn't** come." (Don't come! It's forbidden) |

**Compare:**
- "You **don\'t have to** wear a tie." (It's optional - you can if you want)
- "You **mustn't** wear a tie." (Don't wear one - it\'s forbidden!)

<div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-4 my-4">
  <strong className="text-red-800 dark:text-red-200">⚠️ Critical Difference!</strong>
  <br/>
  <p className="mt-2"><strong>Don't have to</strong> = Optional (you can, but don\'t need to)</p>
  <p><strong>Mustn't</strong> = Forbidden (don\'t do it!)</p>
</div>

### 6. Questions ❓

**Have to questions:**
- "**Do** you **have to** work tomorrow?" (Is it necessary?)
- "**Does** she **have to** come?" (Is it necessary?)

**Must questions:**
- "**Must** I finish this today?" (Is it necessary?)
- "**Must** we wait?" (Is it necessary?)

**Note:** "Have to" questions are more common in everyday English.

### 7. Common Mistakes ❌

**Mistake 1:** Using "to" after "must"
- ❌ "I must **to** go." (Wrong!)
- ✅ "I **must go**." (Correct!)

**Mistake 2:** Using "s" with "must"
- ❌ "He **musts** work." (Wrong!)
- ✅ "He **must** work." (Correct!)

**Mistake 3:** Confusing "don\'t have to" and "mustn't"
- ❌ "You don\'t have to smoke here." (If you mean "forbidden" → mustn't)
- ✅ "You **mustn't** smoke here." (Forbidden)

---

### 🎮 Practice Arena

**🏎️ Grammar Racer: Have To or Must?**
Choose the correct form!
<GamePlaceholder id="grammarRacer" />

### 🎯 Practical Exercise

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border-2 border-green-300">
  <h3 className="font-bold text-green-800 dark:text-green-200 mb-4">📝 Obligations</h3>
  <p className="mb-4">Write sentences about obligations using have to and must:</p>
  <ol className="list-decimal list-inside space-y-2">
    <li>One sentence with "have to" about an external obligation (rule/law)</li>
    <li>One sentence with "must" about a personal obligation</li>
    <li>One sentence with "don\'t have to" (optional)</li>
    <li>One sentence with "mustn't" (forbidden)</li>
  </ol>
</div>
`,
    de: `
## Have To und Must: Verpflichtung und Notwendigkeit ⚖️

Sowohl **have to** als auch **must** drücken **Verpflichtung** und **Notwendigkeit** aus - Dinge, die du tun musst. Aber es gibt wichtige Unterschiede darin, wie und wann man sie verwendet!

### Der Kernunterschied

**HAVE TO** = Externe Verpflichtung (Regeln, Gesetze, Anforderungen von außen)
**MUST** = Persönliche Verpflichtung (dein eigenes Gefühl, starke persönliche Notwendigkeit)

In vielen Situationen kannst du jedoch beide verwenden - besonders für Regeln und Gesetze!

### 1. Form: Have To 📝

**Struktur:** Subjekt + have/has to + Grundform

**Wichtig:** "Have to" ändert sich mit dem Subjekt (I have to, you have to, he/she/it **has to**)

**Beispiele:**
- "I **have to** work tomorrow." (Ich habe eine Verpflichtung)
- "She **has to** finish this today." (Sie hat eine Verpflichtung)
- "We **have to** be there at 9am." (Wir haben eine Verpflichtung)

**Verneinung:** don\'t/doesn't have to = Keine Verpflichtung (es ist nicht notwendig)
- "I **don\'t have to** work tomorrow." (Es ist nicht notwendig)
- "She **doesn't have to** come." (Es ist nicht notwendig)

<div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">💡 Merke dir:</h3>
  <p><strong>Have to</strong> ändert sich: I/you/we/they <strong>have to</strong>, he/she/it <strong>has to</strong></p>
  <p>Nach "have to" oder "has to" verwende die <strong>Grundform</strong> des Verbs!</p>
</div>

<GamePlaceholder id="sentenceBuilder" />

### 2. Form: Must 📝

**Struktur:** Subjekt + **must** + Grundform

**Wichtig:** "Must" bleibt für alle Subjekte gleich (I must, you must, he must, etc.)

**Beispiele:**
- "I **must** finish this today." (Ich fühle, es ist notwendig)
- "You **must** stop at red lights." (Regel/Gesetz)
- "We **must** be careful." (Starkes Gefühl)

**Verneinung:** mustn't = Verbot (du darfst das NICHT tun)
- "You **mustn't** smoke here." (Es ist verboten)
- "You **mustn't** tell anyone." (Tu es nicht!)

<div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">✅ Merke dir:</h3>
  <p><strong>Must</strong> ändert sich nicht: I must, you must, he must (nicht "he musts")</p>
  <p>Nach "must" verwende die <strong>Grundform</strong> des Verbs!</p>
</div>

### 3. Wann Have To verwenden 🎯

Verwende **have to** für:

#### A) Externe Verpflichtungen (Regeln, Gesetze, Anforderungen)
- "I **have to** wear a uniform at work." (Firmenregel)
- "You **have to** have a license to drive." (Gesetz)
- "We **have to** finish this by Friday." (Anforderung)

#### B) Dinge, die du tun musst (Externer Druck)
- "I **have to** go to the dentist." (Termin)
- "She **has to** study for the exam." (Anforderung)
- "We **have to** pay the rent." (Verpflichtung)

**Schlüsselidee:** Die Verpflichtung kommt von **außen** - Regeln, Gesetze, Anforderungen oder Umstände.

### 4. Wann Must verwenden 🎯

Verwende **must** für:

#### A) Starke persönliche Verpflichtung (Dein eigenes Gefühl)
- "I **must** call my mother." (Ich fühle, es ist notwendig)
- "I **must** finish this today." (Starkes persönliches Gefühl)

#### B) Regeln und Gesetze (Formal/Stark)
- "You **must** stop at red lights." (Gesetz - sehr stark)
- "You **must** be 18 to vote." (Gesetz)

**Hinweis:** Für Regeln und Gesetze sind oft sowohl "have to" als auch "must" möglich!

**Schlüsselidee:** Die Verpflichtung kommt von **deinem eigenen Gefühl** oder ist eine **sehr starke Regel**.

<GamePlaceholder id="fixTheMistake" />

### 5. Don't Have To vs Mustn't ⚠️

Das ist sehr wichtig! Sie bedeuten völlig unterschiedliche Dinge:

| Ausdruck | Bedeutung | Beispiel |
|----------|-----------|----------|
| **Don't have to** | Keine Verpflichtung (optional) | "You **don\'t have to** come." (Du kannst kommen, wenn du willst, aber es ist nicht notwendig) |
| **Mustn't** | Verbot (verboten) | "You **mustn't** come." (Komm nicht! Es ist verboten) |

**Vergleiche:**
- "You **don\'t have to** wear a tie." (Es ist optional - du kannst, wenn du willst)
- "You **mustn't** wear a tie." (Trage keinen - es ist verboten!)

<div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-4 my-4">
  <strong className="text-red-800 dark:text-red-200">⚠️ Kritischer Unterschied!</strong>
  <br/>
  <p className="mt-2"><strong>Don't have to</strong> = Optional (du kannst, aber musst nicht)</p>
  <p><strong>Mustn't</strong> = Verboten (tu es nicht!)</p>
</div>

### 6. Fragen ❓

**Have to Fragen:**
- "**Do** you **have to** work tomorrow?" (Ist es notwendig?)
- "**Does** she **have to** come?" (Ist es notwendig?)

**Must Fragen:**
- "**Must** I finish this today?" (Ist es notwendig?)
- "**Must** we wait?" (Ist es notwendig?)

**Hinweis:** "Have to" Fragen sind im alltäglichen Englisch häufiger.

### 7. Häufige Fehler ❌

**Fehler 1:** "To" nach "must" verwenden
- ❌ "I must **to** go." (Falsch!)
- ✅ "I **must go**." (Richtig!)

**Fehler 2:** "s" mit "must" verwenden
- ❌ "He **musts** work." (Falsch!)
- ✅ "He **must** work." (Richtig!)

**Fehler 3:** "Don't have to" und "mustn't" verwechseln
- ❌ "You don\'t have to smoke here." (Wenn du "verboten" meinst → mustn't)
- ✅ "You **mustn't** smoke here." (Verboten)

---

### 🎮 Trainings-Arena

**🏎️ Grammar Racer: Have To oder Must?**
Wähle die richtige Form!
<GamePlaceholder id="grammarRacer" />

### 🎯 Praktische Übung

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border-2 border-green-300">
  <h3 className="font-bold text-green-800 dark:text-green-200 mb-4">📝 Verpflichtungen</h3>
  <p className="mb-4">Schreibe Sätze über Verpflichtungen mit have to und must:</p>
  <ol className="list-decimal list-inside space-y-2">
    <li>Ein Satz mit "have to" über eine externe Verpflichtung (Regel/Gesetz)</li>
    <li>Ein Satz mit "must" über eine persönliche Verpflichtung</li>
    <li>Ein Satz mit "don\'t have to" (optional)</li>
    <li>Ein Satz mit "mustn't" (verboten)</li>
  </ol>
</div>
`
  },
  task: {
    de: {
      title: 'Have To und Must',
      description: 'Schreibe Sätze über Verpflichtungen mit have to und must.',
      checklist: [
        { text: 'Satz mit "have to" über externe Verpflichtung', checked: false },
        { text: 'Satz mit "must" über persönliche Verpflichtung', checked: false },
        { text: 'Satz mit "don\'t have to" (optional)', checked: false },
        { text: 'Satz mit "mustn\'t" (verboten)', checked: false }
      ]
    },
    en: {
      title: 'Have To and Must',
      description: 'Write sentences about obligations using have to and must.',
      checklist: [
        { text: 'Sentence with "have to" about external obligation', checked: false },
        { text: 'Sentence with "must" about personal obligation', checked: false },
        { text: 'Sentence with "don\'t have to" (optional)', checked: false },
        { text: 'Sentence with "mustn\'t" (forbidden)', checked: false }
      ]
    }
  },
  quiz: { de: [], en: [] }
};

