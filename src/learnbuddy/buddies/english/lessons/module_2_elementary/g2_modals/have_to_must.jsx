import React from 'react';
import GrammarGame from '../../../components/grammar-games/GrammarGame';

const sentenceBuilderData = [
  {
    prompt: { en: "I ___ (go) to work tomorrow.", de: "Ich ___ (gehen) morgen zur Arbeit." },
    words: ["have to go", "must go", "can go", "will go"],
    correct: "have to go",
    explanation: { en: "External obligation: have to + verb", de: "Äußere Verpflichtung: have to + Verb" }
  },
  {
    prompt: { en: "You ___ (not smoke) here.", de: "Du ___ (nicht rauchen) hier." },
    words: ["must not smoke", "don\'t have to smoke", "can\'t smoke", "shouldn\'t smoke"],
    correct: "must not smoke",
    explanation: { en: "Prohibition: must not", de: "Verbot: must not" }
  },
  {
    prompt: { en: "Do I ___ (wear) a tie?", de: "___ ich eine Krawatte ___ (tragen)?" },
    words: ["have to wear", "must wear", "can wear", "should wear"],
    correct: "have to wear",
    explanation: { en: "Question about obligation: Do I have to...?", de: "Frage nach Verpflichtung: Do I have to...?" }
  }
];

const fixTheMistakeData = [
  {
    sentence: "I must to go now.",
    mistakeIndex: 2,
    correction: "go",
    explanation: { en: "Must + base verb (no 'to')", de: "Must + Grundform (kein 'to')" }
  },
  {
    sentence: "You have not smoke here.",
    mistakeIndex: 2,
    correction: "must not",
    explanation: { en: "Prohibition: must not (not have not)", de: "Verbot: must not (nicht have not)" }
  },
  {
    sentence: "I don\'t must go.",
    mistakeIndex: 1,
    correction: "have to",
    explanation: { en: "Negative: don\'t have to (not don\'t must)", de: "Verneinung: don\'t have to (nicht don\'t must)" }
  }
];

const grammarRacerData = [
  {
    prompt: "I ___ work tomorrow.",
    options: ["have to", "must", "can"],
    correct: "have to",
    explanation: "External obligation: have to"
  },
  {
    prompt: "You ___ smoke here.",
    options: ["must not", "don\'t have to", "can\'t"],
    correct: "must not",
    explanation: "Prohibition: must not"
  },
  {
    prompt: "She ___ study tonight.",
    options: ["has to", "must", "can"],
    correct: "has to",
    explanation: "External obligation: has to"
  }
];

export const haveToMust = {
  id: 'a2_g31',
  title: {
    en: 'Have to and Must (Obligation)',
    de: 'Have to und Must (Verpflichtung)'
  },
  description: {
    en: "Expressing obligation and necessity. 'I have to go', 'You must not smoke'. Understanding the difference between have to and must.",
    de: "Verpflichtung und Notwendigkeit ausdrücken. 'Ich muss gehen', 'Du darfst hier nicht rauchen'. Den Unterschied zwischen have to und must verstehen."
  },
  
  components: {
    sentenceBuilder: <GrammarGame type="sentenceBuilder" data={sentenceBuilderData} />,
    fixTheMistake: <GrammarGame type="fixTheMistake" data={fixTheMistakeData} />,
    grammarRacer: <GrammarGame type="grammarRacer" data={grammarRacerData} />
  },

  content: {
    en: `
## Have To and Must: Obligation and Necessity ⚖️

**Have to** and **must** both express **obligation** (something you need to do), but they have important differences. Understanding these differences helps you express obligation correctly in different situations.

### Why Do We Need Both?

Think about these situations:
- "I **have to** go to work." (External obligation - my job requires it)
- "I **must** finish this today." (Personal obligation - I feel it\'s necessary)
- "You **must not** smoke here." (Prohibition - it\'s forbidden)

Each expresses obligation, but from different perspectives!

### 1. Have To: External Obligation 📋

**Have to** expresses **external obligation** - something that is required by rules, laws, or other people.

**Structure:** Subject + **have/has to** + base verb

**Examples:**
- "I **have to** go to work." (My job requires it)
- "She **has to** wear a uniform." (The rules require it)
- "We **have to** pay taxes." (The law requires it)
- "You **have to** be 18 to vote." (The law requires it)

**Key idea:** **Have to** = External requirement (from outside)

<div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">💡 Remember:</h3>
  <p><strong>Have to</strong> = External obligation (rules, laws, other people)</p>
  <p>It's like saying "The situation requires me to..."</p>
</div>

<GamePlaceholder id="sentenceBuilder" />

### 2. Must: Personal Obligation or Strong Necessity 💪

**Must** expresses **personal obligation** or **strong necessity** - something you feel is necessary or very important.

**Structure:** Subject + **must** + base verb

**Examples:**
- "I **must** finish this today." (I feel it\'s necessary)
- "You **must** see this film!" (Strong recommendation)
- "We **must** be careful." (Strong necessity)

**Key idea:** **Must** = Personal feeling of necessity or strong recommendation

**Note:** In American English, "have to" is often used instead of "must" in many situations.

<div className="bg-amber-50 dark:bg-amber-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">⚠️ Important:</h3>
  <p><strong>Must</strong> = Personal obligation or strong necessity</p>
  <p>In modern English, <strong>have to</strong> is often preferred for obligation.</p>
  <p><strong>Must</strong> is still common for strong recommendations or personal feelings.</p>
</div>

### 3. Must Not: Prohibition 🚫

**Must not** (mustn't) expresses **prohibition** - something that is forbidden or not allowed.

**Structure:** Subject + **must not** + base verb

**Examples:**
- "You **must not** smoke here." (It's forbidden)
- "Students **must not** cheat." (It's forbidden)
- "You **mustn't** park here." (It's forbidden)

**Key idea:** **Must not** = Prohibition (it\'s forbidden)

**Important:** "Must not" is different from "don\'t have to"!

<div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-4 my-4">
  <strong className="text-red-800 dark:text-red-200">⚠️ Common Mistake!</strong>
  <br/>
  <p className="mt-2"><strong>Must not</strong> = Prohibition (it\'s forbidden)</p>
  <p><strong>Don't have to</strong> = No obligation (it\'s not necessary)</p>
  <p>❌ "You must not come" (means "You are forbidden to come")</p>
  <p>✅ "You don\'t have to come" (means "It's not necessary for you to come")</p>
</div>

<GamePlaceholder id="fixTheMistake" />

### 4. Don't Have To: No Obligation ✅

**Don't have to** (or "doesn't have to") expresses **no obligation** - something is not necessary.

**Structure:** Subject + **don\'t/doesn't have to** + base verb

**Examples:**
- "You **don\'t have to** come." (It's not necessary)
- "She **doesn't have to** work tomorrow." (It's not necessary)
- "We **don\'t have to** pay now." (It's not necessary)

**Key idea:** **Don't have to** = No obligation (it\'s optional)

**Compare:**
- "You **must not** smoke." (Prohibition - it\'s forbidden)
- "You **don\'t have to** smoke." (No obligation - it\'s optional)

### 5. Negative Forms ❌

**Have to** negative:
- "I **don\'t have to** go." (No obligation)
- "She **doesn't have to** work." (No obligation)

**Must** negative:
- "You **must not** smoke." (Prohibition)
- "You **mustn't** park here." (Prohibition)

**Important:** "Must" doesn't have a negative form for "no obligation" - use "don\'t have to" instead!

### 6. Questions ❓

**Have to** in questions:
- "**Do** I **have to** go?" (Question about obligation)
- "**Does** she **have to** work?" (Question about obligation)
- "**Do** we **have to** pay?" (Question about obligation)

**Must** in questions:
- "**Must** I go?" (Less common - usually "Do I have to go?")
- "**Must** we wait?" (Less common)

**Note:** Questions with "have to" are more common than questions with "must".

### 7. Have To vs Must: Summary 🔄

| Have To | Must |
|---------|------|
| External obligation | Personal obligation |
| Rules, laws, other people | Personal feeling |
| More common in modern English | Less common, more formal |
| "I have to go." | "I must go." |
| Negative: don\'t have to (no obligation) | Negative: must not (prohibition) |

**In practice:**
- Use **have to** for most situations (more common)
- Use **must** for strong personal feelings or formal situations
- Use **must not** for prohibition

<div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">🎯 Summary:</h3>
  <ul className="list-disc list-inside space-y-1">
    <li><strong>Have to</strong> = External obligation (more common)</li>
    <li><strong>Must</strong> = Personal obligation or strong necessity</li>
    <li><strong>Must not</strong> = Prohibition (forbidden)</li>
    <li><strong>Don't have to</strong> = No obligation (optional)</li>
  </ul>
</div>

### 8. Common Mistakes ❌

**Mistake 1:** Using "must" with "to"
- ❌ "I must **to** go." (Wrong!)
- ✅ "I must **go**." (Correct!)

**Mistake 2:** Confusing "must not" with "don\'t have to"
- ❌ "You must not come" (means forbidden!)
- ✅ "You don\'t have to come" (means optional)

**Mistake 3:** Wrong form of "have to"
- ❌ "I have **to go**" (Correct, but check the verb form)
- ✅ "I **have to** go." (Correct!)

---

### 🎮 Practice Arena

**🏎️ Grammar Racer: Have To and Must**
Choose the correct form! Remember: have to for external obligation, must not for prohibition!
<GamePlaceholder id="grammarRacer" />

### 🎯 Practical Exercise

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border-2 border-green-300">
  <h3 className="font-bold text-green-800 dark:text-green-200 mb-4">📝 Obligation and Necessity</h3>
  <p className="mb-4">Write sentences about obligation using have to and must:</p>
  <ol className="list-decimal list-inside space-y-2">
    <li>One sentence about external obligation (use "have to")</li>
    <li>One sentence about personal obligation (use "must")</li>
    <li>One sentence about prohibition (use "must not")</li>
    <li>One sentence about no obligation (use "don\'t have to")</li>
  </ol>
</div>
`,
    de: `
## Have To und Must: Verpflichtung und Notwendigkeit ⚖️

**Have to** und **must** drücken beide **Verpflichtung** aus (etwas, das du tun musst), aber sie haben wichtige Unterschiede. Diese Unterschiede zu verstehen hilft dir, Verpflichtung in verschiedenen Situationen korrekt auszudrücken.

### Warum brauchen wir beide?

Denk an diese Situationen:
- "I **have to** go to work." (Äußere Verpflichtung - meine Arbeit erfordert es)
- "I **must** finish this today." (Persönliche Verpflichtung - ich fühle, dass es notwendig ist)
- "You **must not** smoke here." (Verbot - es ist verboten)

Jede drückt Verpflichtung aus, aber aus verschiedenen Perspektiven!

### 1. Have To: Äußere Verpflichtung 📋

**Have to** drückt **äußere Verpflichtung** aus - etwas, das von Regeln, Gesetzen oder anderen Menschen gefordert wird.

**Struktur:** Subjekt + **have/has to** + Grundform

**Beispiele:**
- "I **have to** go to work." (Meine Arbeit erfordert es)
- "She **has to** wear a uniform." (Die Regeln erfordern es)
- "We **have to** pay taxes." (Das Gesetz erfordert es)
- "You **have to** be 18 to vote." (Das Gesetz erfordert es)

**Schlüsselidee:** **Have to** = Äußere Anforderung (von außen)

<div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">💡 Merke dir:</h3>
  <p><strong>Have to</strong> = Äußere Verpflichtung (Regeln, Gesetze, andere Menschen)</p>
  <p>Es ist wie zu sagen "Die Situation erfordert, dass ich..."</p>
</div>

<GamePlaceholder id="sentenceBuilder" />

### 2. Must: Persönliche Verpflichtung oder starke Notwendigkeit 💪

**Must** drückt **persönliche Verpflichtung** oder **starke Notwendigkeit** aus - etwas, das du als notwendig oder sehr wichtig empfindest.

**Struktur:** Subjekt + **must** + Grundform

**Beispiele:**
- "I **must** finish this today." (Ich fühle, dass es notwendig ist)
- "You **must** see this film!" (Starke Empfehlung)
- "We **must** be careful." (Starke Notwendigkeit)

**Schlüsselidee:** **Must** = Persönliches Gefühl der Notwendigkeit oder starke Empfehlung

**Hinweis:** Im amerikanischen Englisch wird "have to" oft statt "must" in vielen Situationen verwendet.

<div className="bg-amber-50 dark:bg-amber-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">⚠️ Wichtig:</h3>
  <p><strong>Must</strong> = Persönliche Verpflichtung oder starke Notwendigkeit</p>
  <p>Im modernen Englisch wird <strong>have to</strong> oft für Verpflichtung bevorzugt.</p>
  <p><strong>Must</strong> ist immer noch üblich für starke Empfehlungen oder persönliche Gefühle.</p>
</div>

### 3. Must Not: Verbot 🚫

**Must not** (mustn't) drückt **Verbot** aus - etwas, das verboten oder nicht erlaubt ist.

**Struktur:** Subjekt + **must not** + Grundform

**Beispiele:**
- "You **must not** smoke here." (Es ist verboten)
- "Students **must not** cheat." (Es ist verboten)
- "You **mustn't** park here." (Es ist verboten)

**Schlüsselidee:** **Must not** = Verbot (es ist verboten)

**Wichtig:** "Must not" ist anders als "don\'t have to"!

<div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-4 my-4">
  <strong className="text-red-800 dark:text-red-200">⚠️ Häufiger Fehler!</strong>
  <br/>
  <p className="mt-2"><strong>Must not</strong> = Verbot (es ist verboten)</p>
  <p><strong>Don't have to</strong> = Keine Verpflichtung (es ist nicht notwendig)</p>
  <p>❌ "You must not come" (bedeutet "Du darfst nicht kommen")</p>
  <p>✅ "You don\'t have to come" (bedeutet "Es ist nicht notwendig, dass du kommst")</p>
</div>

<GamePlaceholder id="fixTheMistake" />

### 4. Don't Have To: Keine Verpflichtung ✅

**Don't have to** (oder "doesn't have to") drückt **keine Verpflichtung** aus - etwas ist nicht notwendig.

**Struktur:** Subjekt + **don\'t/doesn't have to** + Grundform

**Beispiele:**
- "You **don\'t have to** come." (Es ist nicht notwendig)
- "She **doesn't have to** work tomorrow." (Es ist nicht notwendig)
- "We **don\'t have to** pay now." (Es ist nicht notwendig)

**Schlüsselidee:** **Don't have to** = Keine Verpflichtung (es ist optional)

**Vergleiche:**
- "You **must not** smoke." (Verbot - es ist verboten)
- "You **don\'t have to** smoke." (Keine Verpflichtung - es ist optional)

### 5. Verneinungsformen ❌

**Have to** Verneinung:
- "I **don\'t have to** go." (Keine Verpflichtung)
- "She **doesn't have to** work." (Keine Verpflichtung)

**Must** Verneinung:
- "You **must not** smoke." (Verbot)
- "You **mustn't** park here." (Verbot)

**Wichtig:** "Must" hat keine Verneinungsform für "keine Verpflichtung" - verwende stattdessen "don\'t have to"!

### 6. Fragen ❓

**Have to** in Fragen:
- "**Do** I **have to** go?" (Frage nach Verpflichtung)
- "**Does** she **have to** work?" (Frage nach Verpflichtung)
- "**Do** we **have to** pay?" (Frage nach Verpflichtung)

**Must** in Fragen:
- "**Must** I go?" (Weniger üblich - normalerweise "Do I have to go?")
- "**Must** we wait?" (Weniger üblich)

**Hinweis:** Fragen mit "have to" sind üblicher als Fragen mit "must".

### 7. Have To vs Must: Zusammenfassung 🔄

| Have To | Must |
|---------|------|
| Äußere Verpflichtung | Persönliche Verpflichtung |
| Regeln, Gesetze, andere Menschen | Persönliches Gefühl |
| Häufiger im modernen Englisch | Weniger häufig, formeller |
| "I have to go." | "I must go." |
| Verneinung: don\'t have to (keine Verpflichtung) | Verneinung: must not (Verbot) |

**In der Praxis:**
- Verwende **have to** für die meisten Situationen (häufiger)
- Verwende **must** für starke persönliche Gefühle oder formelle Situationen
- Verwende **must not** für Verbote

<div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">🎯 Zusammenfassung:</h3>
  <ul className="list-disc list-inside space-y-1">
    <li><strong>Have to</strong> = Äußere Verpflichtung (häufiger)</li>
    <li><strong>Must</strong> = Persönliche Verpflichtung oder starke Notwendigkeit</li>
    <li><strong>Must not</strong> = Verbot (verboten)</li>
    <li><strong>Don't have to</strong> = Keine Verpflichtung (optional)</li>
  </ul>
</div>

### 8. Häufige Fehler ❌

**Fehler 1:** "Must" mit "to" verwenden
- ❌ "I must **to** go." (Falsch!)
- ✅ "I must **go**." (Richtig!)

**Fehler 2:** "Must not" mit "don\'t have to" verwechseln
- ❌ "You must not come" (bedeutet verboten!)
- ✅ "You don\'t have to come" (bedeutet optional)

**Fehler 3:** Falsche Form von "have to"
- ❌ "I have **to go**" (Richtig, aber überprüfe die Verbform)
- ✅ "I **have to** go." (Richtig!)

---

### 🎮 Trainings-Arena

**🏎️ Grammar Racer: Have To und Must**
Wähle die richtige Form! Denk daran: have to für äußere Verpflichtung, must not für Verbot!
<GamePlaceholder id="grammarRacer" />

### 🎯 Praktische Übung

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border-2 border-green-300">
  <h3 className="font-bold text-green-800 dark:text-green-200 mb-4">📝 Verpflichtung und Notwendigkeit</h3>
  <p className="mb-4">Schreibe Sätze über Verpflichtung mit have to und must:</p>
  <ol className="list-decimal list-inside space-y-2">
    <li>Ein Satz über äußere Verpflichtung (verwende "have to")</li>
    <li>Ein Satz über persönliche Verpflichtung (verwende "must")</li>
    <li>Ein Satz über Verbot (verwende "must not")</li>
    <li>Ein Satz über keine Verpflichtung (verwende "don\'t have to")</li>
  </ol>
</div>
`
  },
  task: {
    de: {
      title: 'Have To und Must - Verpflichtung',
      description: 'Schreibe Sätze über Verpflichtung mit have to und must.',
      checklist: [
        { text: 'Satz über äußere Verpflichtung (have to)', checked: false },
        { text: 'Satz über persönliche Verpflichtung (must)', checked: false },
        { text: 'Satz über Verbot (must not)', checked: false },
        { text: 'Satz über keine Verpflichtung (don\'t have to)', checked: false }
      ]
    },
    en: {
      title: 'Have To and Must - Obligation',
      description: 'Write sentences about obligation using have to and must.',
      checklist: [
        { text: 'Sentence about external obligation (have to)', checked: false },
        { text: 'Sentence about personal obligation (must)', checked: false },
        { text: 'Sentence about prohibition (must not)', checked: false },
        { text: 'Sentence about no obligation (don\'t have to)', checked: false }
      ]
    }
  },
  quiz: { de: [], en: [] }
};

