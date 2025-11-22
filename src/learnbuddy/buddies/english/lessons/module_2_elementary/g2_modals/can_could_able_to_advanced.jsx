import React from 'react';
import GrammarGame from '../../../components/grammar-games/GrammarGame';

const sentenceBuilderData = [
  {
    prompt: { en: "I ___ (not speak) English when I was young.", de: "Ich ___ (nicht sprechen) Englisch, als ich jung war." },
    words: ["couldn\'t speak", "can\'t speak", "wasn\'t able to speak", "couldn\'t able to speak"],
    correct: "couldn\'t speak",
    explanation: { en: "Past ability: couldn\'t + verb", de: "Vergangene Fähigkeit: couldn\'t + Verb" }
  },
  {
    prompt: { en: "___ I ___ (help) you with that?", de: "___ ich dir dabei ___ (helfen)?" },
    words: ["Could help", "Can help", "Able to help", "Could to help"],
    correct: "Could help",
    explanation: { en: "Polite request: Could I help?", de: "Höfliche Bitte: Could I help?" }
  },
  {
    prompt: { en: "After months of practice, she ___ (finally swim).", de: "Nach Monaten Übung ___ sie (endlich schwimmen)." },
    words: ["was able to swim", "could swim", "can swim", "able to swim"],
    correct: "was able to swim",
    explanation: { en: "Specific past achievement: was able to", de: "Spezifische vergangene Leistung: was able to" }
  }
];

const fixTheMistakeData = [
  {
    sentence: "I could to speak French when I was younger.",
    mistakeIndex: 2,
    correction: "speak",
    explanation: { en: "Could + base verb (no 'to')", de: "Could + Grundform (kein 'to')" }
  },
  {
    sentence: "Could you to help me?",
    mistakeIndex: 2,
    correction: "help",
    explanation: { en: "Could + base verb (no 'to')", de: "Could + Grundform (kein 'to')" }
  },
  {
    sentence: "I could swim after I practiced.",
    mistakeIndex: 0,
    correction: "was able to",
    explanation: { en: "Specific achievement: was able to (not could)", de: "Spezifische Leistung: was able to (nicht could)" }
  }
];

const grammarRacerData = [
  {
    prompt: "I ___ speak three languages when I was a child.",
    options: ["could", "can", "am able to"],
    correct: "could",
    explanation: "Past ability: could"
  },
  {
    prompt: "___ you help me, please?",
    options: ["Could", "Can", "Are you able to"],
    correct: "Could",
    explanation: "Polite request: Could"
  },
  {
    prompt: "She ___ finish the marathon yesterday.",
    options: ["was able to", "could", "can"],
    correct: "was able to",
    explanation: "Specific past achievement: was able to"
  }
];

export const canCouldAbleToAdvanced = {
  id: 'a2_g26',
  title: {
    en: 'Can, Could and (be) able to (Advanced)',
    de: 'Can, Could und (be) able to (Erweitert)'
  },
  description: {
    en: "Advanced uses of can, could, and able to. Past ability, polite requests, and specific achievements.",
    de: "Erweiterte Verwendung von can, could und able to. Vergangene Fähigkeit, höfliche Bitten und spezifische Leistungen."
  },
  
  components: {
    sentenceBuilder: <GrammarGame type="sentenceBuilder" data={sentenceBuilderData} />,
    fixTheMistake: <GrammarGame type="fixTheMistake" data={fixTheMistakeData} />,
    grammarRacer: <GrammarGame type="grammarRacer" data={grammarRacerData} />
  },

  content: {
    en: `
## Can, Could and (be) able to: Advanced Uses 🎯

You already know **can** for present ability. Now let's explore **could** for past ability and polite requests, and **be able to** for specific achievements. These three structures help you express ability in different situations and with different nuances.

### Why Do We Need These?

Think about these situations:
- "I **could** speak French when I was young." (Past ability - general)
- "**Could** you help me?" (Polite request - more polite than "Can you?")
- "I **was able to** finish the race." (Specific achievement - something you managed to do)

Each has its own purpose and nuance!

### 1. Could: Past Ability (General) 📚

**Could** is used to talk about **general ability in the past** - things you were able to do regularly or in general.

**Structure:** Subject + **could** + base verb

**Examples:**
- "I **could** swim when I was five." (General ability in the past)
- "She **could** speak three languages." (General ability)
- "We **could** see the mountains from our window." (General ability)

**Important:** After "could", use the **base form** (no "to")!

<div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">💡 Remember:</h3>
  <p><strong>Could</strong> = General ability in the past</p>
  <p>It's like saying "I had the ability to..." in general, not about one specific time.</p>
</div>

<GamePlaceholder id="sentenceBuilder" />

### 2. Could: Polite Requests 🙏

**Could** is also used to make **polite requests** - it\'s more polite and formal than "can".

**Structure:** **Could** + subject + base verb?

**Examples:**
- "**Could** you help me?" (More polite than "Can you help me?")
- "**Could** I borrow your pen?" (Polite request)
- "**Could** you please close the window?" (Very polite)

**Compare:**
- "Can you help me?" (Informal, friendly)
- "**Could** you help me?" (More polite, formal)

<div className="bg-amber-50 dark:bg-amber-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">⚠️ Important:</h3>
  <p>When asking for permission or making requests, <strong>could</strong> is more polite than <strong>can</strong>.</p>
  <p>Use <strong>could</strong> in formal situations or when you want to be extra polite!</p>
</div>

### 3. (Be) Able To: Specific Achievements 🏆

**Be able to** is used for **specific achievements** - things you managed to do on a particular occasion, especially when it was difficult.

**Structure:** Subject + **was/were able to** + base verb

**Examples:**
- "I **was able to** finish the marathon." (Specific achievement - I managed to do it)
- "She **was able to** solve the problem." (Specific achievement)
- "We **were able to** find the house." (Specific achievement - we managed)

**Why use "be able to" instead of "could"?**
- **Could** = General ability (I could swim = I had the ability in general)
- **Was able to** = Specific achievement (I was able to finish = I managed to do it this time)

<div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">🎯 Key Difference:</h3>
  <p><strong>Could</strong> = General past ability</p>
  <p><strong>Was able to</strong> = Specific achievement (managed to do something)</p>
  <p>Example: "I could swim" (general) vs "I was able to swim across the lake" (specific achievement)</p>
</div>

<GamePlaceholder id="fixTheMistake" />

### 4. Negative Forms ❌

**Couldn't** (could not) is used for both general inability and specific failures:

**Examples:**
- "I **couldn\'t** speak English when I was young." (General inability)
- "I **couldn\'t** find my keys yesterday." (Specific failure)
- "She **couldn\'t** come to the party." (Specific failure)

**Wasn't/weren\'t able to** is also possible:
- "I **wasn\'t able to** finish the race." (Specific failure)

**Note:** For specific failures, both "couldn\'t" and "wasn\'t able to" are common.

### 5. Questions ❓

**Could** in questions:
- "**Could** you help me?" (Polite request)
- "**Could** she speak French?" (Past ability question)

**Was/were able to** in questions:
- "**Were** you **able to** finish?" (Specific achievement question)
- "**Was** she **able to** solve it?" (Specific achievement question)

### 6. Present and Future Forms 🔮

**Can** = Present ability
- "I **can** swim." (Now)

**Will be able to** = Future ability
- "I **will be able to** swim after lessons." (Future)

**Be able to** (present) = Alternative to "can"
- "I **am able to** swim." (Same as "I can swim")

<div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">💡 Summary:</h3>
  <ul className="list-disc list-inside space-y-1">
    <li><strong>Can</strong> = Present ability</li>
    <li><strong>Could</strong> = Past ability (general) OR polite request</li>
    <li><strong>Was able to</strong> = Specific past achievement</li>
    <li><strong>Will be able to</strong> = Future ability</li>
  </ul>
</div>

---

### 🎮 Practice Arena

**🏎️ Grammar Racer: Can, Could, Able To**
Choose the correct form! Remember: could for past ability/polite requests, was able to for specific achievements!
<GamePlaceholder id="grammarRacer" />

### 🎯 Practical Exercise

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border-2 border-green-300">
  <h3 className="font-bold text-green-800 dark:text-green-200 mb-4">📝 Your Abilities</h3>
  <p className="mb-4">Write sentences about abilities using can, could, and able to:</p>
  <ol className="list-decimal list-inside space-y-2">
    <li>One thing you could do when you were younger (general past ability)</li>
    <li>One specific achievement you managed to do (use "was able to")</li>
    <li>One polite request (use "Could you...?")</li>
    <li>One thing you can do now (present ability)</li>
  </ol>
</div>
`,
    de: `
## Can, Could und (be) able to: Erweiterte Verwendung 🎯

Du kennst bereits **can** für gegenwärtige Fähigkeit. Jetzt erkunden wir **could** für vergangene Fähigkeit und höfliche Bitten sowie **be able to** für spezifische Leistungen. Diese drei Strukturen helfen dir, Fähigkeiten in verschiedenen Situationen und mit unterschiedlichen Nuancen auszudrücken.

### Warum brauchen wir diese?

Denk an diese Situationen:
- "I **could** speak French when I was young." (Vergangene Fähigkeit - allgemein)
- "**Could** you help me?" (Höfliche Bitte - höflicher als "Can you?")
- "I **was able to** finish the race." (Spezifische Leistung - etwas, das du geschafft hast)

Jede hat ihren eigenen Zweck und ihre eigene Nuance!

### 1. Could: Vergangene Fähigkeit (Allgemein) 📚

**Could** wird verwendet, um über **allgemeine Fähigkeit in der Vergangenheit** zu sprechen - Dinge, die du regelmäßig oder im Allgemeinen tun konntest.

**Struktur:** Subjekt + **could** + Grundform

**Beispiele:**
- "I **could** swim when I was five." (Allgemeine Fähigkeit in der Vergangenheit)
- "She **could** speak three languages." (Allgemeine Fähigkeit)
- "We **could** see the mountains from our window." (Allgemeine Fähigkeit)

**Wichtig:** Nach "could" verwende die **Grundform** (kein "to")!

<div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">💡 Merke dir:</h3>
  <p><strong>Could</strong> = Allgemeine Fähigkeit in der Vergangenheit</p>
  <p>Es ist wie zu sagen "Ich hatte die Fähigkeit zu..." im Allgemeinen, nicht über eine bestimmte Zeit.</p>
</div>

<GamePlaceholder id="sentenceBuilder" />

### 2. Could: Höfliche Bitten 🙏

**Could** wird auch verwendet, um **höfliche Bitten** zu machen - es ist höflicher und formeller als "can".

**Struktur:** **Could** + Subjekt + Grundform?

**Beispiele:**
- "**Could** you help me?" (Höflicher als "Can you help me?")
- "**Could** I borrow your pen?" (Höfliche Bitte)
- "**Could** you please close the window?" (Sehr höflich)

**Vergleiche:**
- "Can you help me?" (Informell, freundlich)
- "**Could** you help me?" (Höflicher, formeller)

<div className="bg-amber-50 dark:bg-amber-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">⚠️ Wichtig:</h3>
  <p>Wenn du um Erlaubnis bittest oder Bitten machst, ist <strong>could</strong> höflicher als <strong>can</strong>.</p>
  <p>Verwende <strong>could</strong> in formellen Situationen oder wenn du besonders höflich sein willst!</p>
</div>

### 3. (Be) Able To: Spezifische Leistungen 🏆

**Be able to** wird für **spezifische Leistungen** verwendet - Dinge, die du bei einer bestimmten Gelegenheit geschafft hast, besonders wenn es schwierig war.

**Struktur:** Subjekt + **was/were able to** + Grundform

**Beispiele:**
- "I **was able to** finish the marathon." (Spezifische Leistung - ich habe es geschafft)
- "She **was able to** solve the problem." (Spezifische Leistung)
- "We **were able to** find the house." (Spezifische Leistung - wir haben es geschafft)

**Warum "be able to" statt "could"?**
- **Could** = Allgemeine Fähigkeit (I could swim = Ich hatte die Fähigkeit im Allgemeinen)
- **Was able to** = Spezifische Leistung (I was able to finish = Ich habe es diesmal geschafft)

<div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">🎯 Wichtiger Unterschied:</h3>
  <p><strong>Could</strong> = Allgemeine vergangene Fähigkeit</p>
  <p><strong>Was able to</strong> = Spezifische Leistung (etwas geschafft)</p>
  <p>Beispiel: "I could swim" (allgemein) vs "I was able to swim across the lake" (spezifische Leistung)</p>
</div>

<GamePlaceholder id="fixTheMistake" />

### 4. Verneinungsformen ❌

**Couldn't** (could not) wird sowohl für allgemeine Unfähigkeit als auch für spezifische Misserfolge verwendet:

**Beispiele:**
- "I **couldn\'t** speak English when I was young." (Allgemeine Unfähigkeit)
- "I **couldn\'t** find my keys yesterday." (Spezifischer Misserfolg)
- "She **couldn\'t** come to the party." (Spezifischer Misserfolg)

**Wasn't/weren\'t able to** ist auch möglich:
- "I **wasn\'t able to** finish the race." (Spezifischer Misserfolg)

**Hinweis:** Für spezifische Misserfolge sind sowohl "couldn\'t" als auch "wasn\'t able to" üblich.

### 5. Fragen ❓

**Could** in Fragen:
- "**Could** you help me?" (Höfliche Bitte)
- "**Could** she speak French?" (Frage nach vergangener Fähigkeit)

**Was/were able to** in Fragen:
- "**Were** you **able to** finish?" (Frage nach spezifischer Leistung)
- "**Was** she **able to** solve it?" (Frage nach spezifischer Leistung)

### 6. Gegenwarts- und Zukunftsformen 🔮

**Can** = Gegenwärtige Fähigkeit
- "I **can** swim." (Jetzt)

**Will be able to** = Zukünftige Fähigkeit
- "I **will be able to** swim after lessons." (Zukunft)

**Be able to** (Gegenwart) = Alternative zu "can"
- "I **am able to** swim." (Gleich wie "I can swim")

<div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">💡 Zusammenfassung:</h3>
  <ul className="list-disc list-inside space-y-1">
    <li><strong>Can</strong> = Gegenwärtige Fähigkeit</li>
    <li><strong>Could</strong> = Vergangene Fähigkeit (allgemein) ODER höfliche Bitte</li>
    <li><strong>Was able to</strong> = Spezifische vergangene Leistung</li>
    <li><strong>Will be able to</strong> = Zukünftige Fähigkeit</li>
  </ul>
</div>

---

### 🎮 Trainings-Arena

**🏎️ Grammar Racer: Can, Could, Able To**
Wähle die richtige Form! Denk daran: could für vergangene Fähigkeit/höfliche Bitten, was able to für spezifische Leistungen!
<GamePlaceholder id="grammarRacer" />

### 🎯 Praktische Übung

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border-2 border-green-300">
  <h3 className="font-bold text-green-800 dark:text-green-200 mb-4">📝 Deine Fähigkeiten</h3>
  <p className="mb-4">Schreibe Sätze über Fähigkeiten mit can, could und able to:</p>
  <ol className="list-decimal list-inside space-y-2">
    <li>Eine Sache, die du tun konntest, als du jünger warst (allgemeine vergangene Fähigkeit)</li>
    <li>Eine spezifische Leistung, die du geschafft hast (verwende "was able to")</li>
    <li>Eine höfliche Bitte (verwende "Could you...?")</li>
    <li>Eine Sache, die du jetzt tun kannst (gegenwärtige Fähigkeit)</li>
  </ol>
</div>
`
  },
  task: {
    de: {
      title: 'Can, Could, Able To - Fähigkeiten',
      description: 'Schreibe Sätze über Fähigkeiten mit can, could und able to.',
      checklist: [
        { text: 'Satz über etwas, das du tun konntest, als du jünger warst (could)', checked: false },
        { text: 'Satz über eine spezifische Leistung (was able to)', checked: false },
        { text: 'Höfliche Bitte (Could you...?)', checked: false },
        { text: 'Satz über etwas, das du jetzt tun kannst (can)', checked: false }
      ]
    },
    en: {
      title: 'Can, Could, Able To - Abilities',
      description: 'Write sentences about abilities using can, could, and able to.',
      checklist: [
        { text: 'Sentence about something you could do when younger (could)', checked: false },
        { text: 'Sentence about a specific achievement (was able to)', checked: false },
        { text: 'Polite request (Could you...?)', checked: false },
        { text: 'Sentence about something you can do now (can)', checked: false }
      ]
    }
  },
  quiz: { de: [], en: [] }
};

