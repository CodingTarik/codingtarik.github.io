import React from 'react';
import GrammarGame from '../../../components/grammar-games/GrammarGame';

const sentenceBuilderData = [
  {
    prompt: { en: "You ___ (study) more if you want to pass.", de: "Du ___ (lernen) mehr, wenn du bestehen willst." },
    words: ["should study", "should to study", "studies", "study"],
    correct: "should study",
    explanation: { en: "Advice: should + base verb", de: "Ratschlag: should + Grundform" }
  },
  {
    prompt: { en: "I think you ___ (see) a doctor.", de: "Ich denke, du ___ (sehen) einen Arzt." },
    words: ["should see", "should to see", "sees", "see"],
    correct: "should see",
    explanation: { en: "Advice/recommendation: should", de: "Ratschlag/Empfehlung: should" }
  },
  {
    prompt: { en: "We ___ (not worry) about it. Everything will be fine.", de: "Wir ___ (nicht sorgen) uns darüber. Alles wird gut." },
    words: ["shouldn\'t worry", "should not worry", "don\'t should worry", "should worry not"],
    correct: "shouldn\'t worry",
    explanation: { en: "Negative advice: shouldn\'t + base verb", de: "Negativer Ratschlag: shouldn\'t + Grundform" }
  }
];

const fixTheMistakeData = [
  {
    sentence: "You should to eat more vegetables.",
    mistakeIndex: 2,
    correction: "eat",
    explanation: { en: "Should + base verb (not 'should to eat')", de: "Should + Grundform (nicht 'should to eat')" }
  },
  {
    sentence: "He shoulds be more careful.",
    mistakeIndex: 1,
    correction: "should",
    explanation: { en: "Should doesn't change: should be (not 'shoulds')", de: "Should ändert sich nicht: should be (nicht 'shoulds')" }
  },
  {
    sentence: "You don\'t should smoke.",
    mistakeIndex: 1,
    correction: "shouldn\'t",
    explanation: { en: "Negative: shouldn\'t (not 'don\'t should')", de: "Verneinung: shouldn\'t (nicht 'don\'t should')" }
  }
];

const grammarRacerData = [
  {
    prompt: "You ___ be more careful.",
    options: ["should", "shoulds", "should to"],
    correct: "should",
    explanation: "Advice: should"
  },
  {
    prompt: "She ___ not worry.",
    options: ["should", "shoulds", "should to"],
    correct: "should",
    explanation: "Negative: should not"
  },
  {
    prompt: "I think we ___ go now.",
    options: ["should", "shoulds", "should to"],
    correct: "should",
    explanation: "Recommendation: should"
  }
];

export const should1 = {
  id: 'a2_g33',
  title: {
    en: 'Should 1 - Advice and Recommendations',
    de: 'Should 1 - Ratschläge und Empfehlungen'
  },
  description: {
    en: "Giving advice and making recommendations. 'You should study more', 'I think you should see a doctor'.",
    de: "Ratschläge geben und Empfehlungen machen. 'Du solltest mehr lernen', 'Ich denke, du solltest einen Arzt aufsuchen'."
  },
  
  components: {
    sentenceBuilder: <GrammarGame type="sentenceBuilder" data={sentenceBuilderData} />,
    fixTheMistake: <GrammarGame type="fixTheMistake" data={fixTheMistakeData} />,
    grammarRacer: <GrammarGame type="grammarRacer" data={grammarRacerData} />
  },

  content: {
    en: `
## Should: Advice and Recommendations 💡

**Should** is one of the most useful modal verbs! It's perfect for giving **advice**, making **recommendations**, and saying what you think is the **right thing to do**.

### Why Should?

Think about these situations:
- "You **should** study more." (I\'m giving you advice)
- "I think you **should** see a doctor." (I\'m recommending this)
- "We **should** leave now." (I think it\'s the right thing to do)

The key idea: **Should** = What I think is good/right/wise to do

### 1. Form: Should + Base Verb 📝

**Structure:** Subject + **should** + base form of verb

**Important:** 
- "Should" stays the same for all subjects (I should, you should, he should, etc.)
- After "should", use the **base form** (infinitive without "to"), NOT "to" + verb!

**Examples:**
- "You **should study** more." (Not "should to study")
- "She **should see** a doctor." (Not "should to see")
- "We **should go** now." (Not "should to go")

<div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">💡 Remember:</h3>
  <p><strong>Should</strong> doesn't change: I should, you should, he should (not "he shoulds")</p>
  <p>After "should", use the <strong>base form</strong> of the verb!</p>
</div>

<GamePlaceholder id="sentenceBuilder" />

### 2. Use 1: Giving Advice 💬

Use **should** to give **advice** - to tell someone what you think is good for them.

**Examples:**
- "You **should** eat more vegetables." (My advice)
- "You **should** exercise regularly." (My advice)
- "You **should** get more sleep." (My advice)

**Common phrases:**
- "I think you **should**..."
- "You **should** probably..."
- "Maybe you **should**..."

### 3. Use 2: Making Recommendations 📋

Use **should** to make **recommendations** - to suggest what someone should do.

**Examples:**
- "I think you **should** see a doctor." (I recommend this)
- "You **should** try this restaurant." (I recommend it)
- "We **should** visit Paris." (I recommend this)

**Compare:**
- "You **must** see a doctor." (Strong obligation - you have to)
- "You **should** see a doctor." (Recommendation - it\'s a good idea)

<div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">✅ Remember:</h3>
  <p><strong>Should</strong> = Advice/recommendation (not obligation)</p>
  <p>It's softer than "must" - it suggests, it doesn't demand!</p>
</div>

### 4. Use 3: What's Right or Wise ✅

Use **should** to say what you think is the **right** or **wise** thing to do.

**Examples:**
- "We **should** be careful." (It's wise to be careful)
- "You **should** apologize." (It's the right thing to do)
- "I **should** save more money." (It's wise)

### 5. Negative: Shouldn't ❌

**Structure:** Subject + **shouldn\'t** (should not) + base verb

**Meaning:** It's not a good idea / You shouldn\'t do this

**Examples:**
- "You **shouldn\'t** smoke." (It's not good for you)
- "You **shouldn\'t** worry about it." (It's not necessary)
- "We **shouldn\'t** be late." (It's not a good idea)

**Note:** "Shouldn't" is advice NOT to do something - it\'s the opposite of "should".

<GamePlaceholder id="fixTheMistake" />

### 6. Questions: Should I/We/You...? ❓

**Structure:** **Should** + subject + base verb?

**Examples:**
- "**Should** I call him?" (Is it a good idea?)
- "**Should** we leave now?" (Is it wise?)
- "What **should** I do?" (What do you recommend?)

**Common question patterns:**
- "**Should** I...?" (Asking for advice)
- "What **should** I...?" (Asking what to do)
- "**Should** we...?" (Asking if it\'s a good idea)

### 7. Should vs Must vs Have To 🔄

| Word | Use | Strength |
|------|-----|----------|
| **Should** | Advice/recommendation | Soft suggestion |
| **Must** | Strong obligation | Very strong |
| **Have to** | External obligation | Strong |

**Compare:**
- "You **should** study." (Advice - it\'s a good idea)
- "You **must** study." (Strong obligation - you have to)
- "You **have to** study." (Obligation - required)

**Should** is the **softest** - it\'s advice, not a command!

### 8. Common Mistakes ❌

**Mistake 1:** Using "to" after "should"
- ❌ "You should **to** study." (Wrong!)
- ✅ "You **should study**." (Correct!)

**Mistake 2:** Using "s" with "should"
- ❌ "He **shoulds** work harder." (Wrong!)
- ✅ "He **should** work harder." (Correct!)

**Mistake 3:** Using "don\'t should"
- ❌ "You don\'t should smoke." (Wrong!)
- ✅ "You **shouldn\'t** smoke." (Correct!)

---

### 🎮 Practice Arena

**🏎️ Grammar Racer: Should**
Choose the correct form!
<GamePlaceholder id="grammarRacer" />

### 🎯 Practical Exercise

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border-2 border-green-300">
  <h3 className="font-bold text-green-800 dark:text-green-200 mb-4">📝 Advice and Recommendations</h3>
  <p className="mb-4">Write sentences giving advice using should:</p>
  <ol className="list-decimal list-inside space-y-2">
    <li>One piece of advice with "You should..."</li>
    <li>One recommendation with "I think you should..."</li>
    <li>One sentence with "shouldn\'t" (advice NOT to do something)</li>
    <li>One question asking for advice with "Should I...?"</li>
  </ol>
</div>
`,
    de: `
## Should: Ratschläge und Empfehlungen 💡

**Should** ist eines der nützlichsten Modalverben! Es ist perfekt, um **Ratschläge** zu geben, **Empfehlungen** zu machen und zu sagen, was du denkst, ist das **Richtige zu tun**.

### Warum Should?

Denk an diese Situationen:
- "You **should** study more." (Ich gebe dir einen Ratschlag)
- "I think you **should** see a doctor." (Ich empfehle das)
- "We **should** leave now." (Ich denke, es ist das Richtige zu tun)

Die Schlüsselidee: **Should** = Was ich denke, ist gut/richtig/weise zu tun

### 1. Form: Should + Grundform 📝

**Struktur:** Subjekt + **should** + Grundform des Verbs

**Wichtig:** 
- "Should" bleibt für alle Subjekte gleich (I should, you should, he should, etc.)
- Nach "should" verwende die **Grundform** (Infinitiv ohne "to"), NICHT "to" + Verb!

**Beispiele:**
- "You **should study** more." (Nicht "should to study")
- "She **should see** a doctor." (Nicht "should to see")
- "We **should go** now." (Nicht "should to go")

<div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">💡 Merke dir:</h3>
  <p><strong>Should</strong> ändert sich nicht: I should, you should, he should (nicht "he shoulds")</p>
  <p>Nach "should" verwende die <strong>Grundform</strong> des Verbs!</p>
</div>

<GamePlaceholder id="sentenceBuilder" />

### 2. Verwendung 1: Ratschläge geben 💬

Verwende **should**, um **Ratschläge** zu geben - um jemandem zu sagen, was du denkst, ist gut für ihn.

**Beispiele:**
- "You **should** eat more vegetables." (Mein Ratschlag)
- "You **should** exercise regularly." (Mein Ratschlag)
- "You **should** get more sleep." (Mein Ratschlag)

**Häufige Phrasen:**
- "I think you **should**..."
- "You **should** probably..."
- "Maybe you **should**..."

### 3. Verwendung 2: Empfehlungen machen 📋

Verwende **should**, um **Empfehlungen** zu machen - um vorzuschlagen, was jemand tun sollte.

**Beispiele:**
- "I think you **should** see a doctor." (Ich empfehle das)
- "You **should** try this restaurant." (Ich empfehle es)
- "We **should** visit Paris." (Ich empfehle das)

**Vergleiche:**
- "You **must** see a doctor." (Starke Verpflichtung - du musst)
- "You **should** see a doctor." (Empfehlung - es ist eine gute Idee)

<div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">✅ Merke dir:</h3>
  <p><strong>Should</strong> = Ratschlag/Empfehlung (keine Verpflichtung)</p>
  <p>Es ist weicher als "must" - es schlägt vor, es verlangt nicht!</p>
</div>

### 4. Verwendung 3: Was richtig oder weise ist ✅

Verwende **should**, um zu sagen, was du denkst, ist das **Richtige** oder **Weise** zu tun.

**Beispiele:**
- "We **should** be careful." (Es ist weise, vorsichtig zu sein)
- "You **should** apologize." (Es ist das Richtige zu tun)
- "I **should** save more money." (Es ist weise)

### 5. Verneinung: Shouldn't ❌

**Struktur:** Subjekt + **shouldn\'t** (should not) + Grundform

**Bedeutung:** Es ist keine gute Idee / Du solltest das nicht tun

**Beispiele:**
- "You **shouldn\'t** smoke." (Es ist nicht gut für dich)
- "You **shouldn\'t** worry about it." (Es ist nicht notwendig)
- "We **shouldn\'t** be late." (Es ist keine gute Idee)

**Hinweis:** "Shouldn't" ist ein Ratschlag, etwas NICHT zu tun - es ist das Gegenteil von "should".

<GamePlaceholder id="fixTheMistake" />

### 6. Fragen: Should I/We/You...? ❓

**Struktur:** **Should** + Subjekt + Grundform?

**Beispiele:**
- "**Should** I call him?" (Ist es eine gute Idee?)
- "**Should** we leave now?" (Ist es weise?)
- "What **should** I do?" (Was empfiehlst du?)

**Häufige Fragemuster:**
- "**Should** I...?" (Nach Ratschlag fragen)
- "What **should** I...?" (Fragen, was zu tun ist)
- "**Should** we...?" (Fragen, ob es eine gute Idee ist)

### 7. Should vs Must vs Have To 🔄

| Wort | Verwendung | Stärke |
|------|------------|--------|
| **Should** | Ratschlag/Empfehlung | Sanfter Vorschlag |
| **Must** | Starke Verpflichtung | Sehr stark |
| **Have to** | Externe Verpflichtung | Stark |

**Vergleiche:**
- "You **should** study." (Ratschlag - es ist eine gute Idee)
- "You **must** study." (Starke Verpflichtung - du musst)
- "You **have to** study." (Verpflichtung - erforderlich)

**Should** ist das **Weichste** - es ist ein Ratschlag, kein Befehl!

### 8. Häufige Fehler ❌

**Fehler 1:** "To" nach "should" verwenden
- ❌ "You should **to** study." (Falsch!)
- ✅ "You **should study**." (Richtig!)

**Fehler 2:** "s" mit "should" verwenden
- ❌ "He **shoulds** work harder." (Falsch!)
- ✅ "He **should** work harder." (Richtig!)

**Fehler 3:** "Don't should" verwenden
- ❌ "You don\'t should smoke." (Falsch!)
- ✅ "You **shouldn\'t** smoke." (Richtig!)

---

### 🎮 Trainings-Arena

**🏎️ Grammar Racer: Should**
Wähle die richtige Form!
<GamePlaceholder id="grammarRacer" />

### 🎯 Praktische Übung

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border-2 border-green-300">
  <h3 className="font-bold text-green-800 dark:text-green-200 mb-4">📝 Ratschläge und Empfehlungen</h3>
  <p className="mb-4">Schreibe Sätze, die Ratschläge mit should geben:</p>
  <ol className="list-decimal list-inside space-y-2">
    <li>Ein Ratschlag mit "You should..."</li>
    <li>Eine Empfehlung mit "I think you should..."</li>
    <li>Ein Satz mit "shouldn\'t" (Ratschlag, etwas NICHT zu tun)</li>
    <li>Eine Frage, die nach Ratschlag fragt mit "Should I...?"</li>
  </ol>
</div>
`
  },
  task: {
    de: {
      title: 'Should - Ratschläge',
      description: 'Schreibe Sätze mit should, die Ratschläge geben.',
      checklist: [
        { text: 'Ratschlag mit "You should..."', checked: false },
        { text: 'Empfehlung mit "I think you should..."', checked: false },
        { text: 'Satz mit "shouldn\'t"', checked: false },
        { text: 'Frage mit "Should I...?"', checked: false }
      ]
    },
    en: {
      title: 'Should - Advice',
      description: 'Write sentences with should giving advice.',
      checklist: [
        { text: 'Advice with "You should..."', checked: false },
        { text: 'Recommendation with "I think you should..."', checked: false },
        { text: 'Sentence with "shouldn\'t"', checked: false },
        { text: 'Question with "Should I...?"', checked: false }
      ]
    }
  },
  quiz: { de: [], en: [] }
};


