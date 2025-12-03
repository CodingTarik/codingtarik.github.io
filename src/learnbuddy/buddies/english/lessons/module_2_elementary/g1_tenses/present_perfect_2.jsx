import React from 'react';
import GrammarGame from '../../../components/grammar-games/GrammarGame';

const sentenceBuilderData = [
  {
    prompt: { en: "I ___ (just finish) my homework.", de: "Ich ___ (gerade fertig) meine Hausaufgaben." },
    words: ["have just finished", "just finished", "am just finishing", "just finish"],
    correct: "have just finished",
    explanation: { en: "Present perfect with 'just': have/has just + past participle", de: "Present perfect mit 'just': have/has just + Past Participle" }
  },
  {
    prompt: { en: "She ___ (already see) that movie.", de: "Sie ___ (schon sehen) diesen Film." },
    words: ["has already seen", "already saw", "already sees", "is already seeing"],
    correct: "has already seen",
    explanation: { en: "Present perfect with 'already': has already + past participle", de: "Present perfect mit 'already': has already + Past Participle" }
  },
  {
    prompt: { en: "Have you ___ (do) your homework yet?", de: "Hast du deine Hausaufgaben schon ___ (machen)?" },
    words: ["done", "did", "do", "doing"],
    correct: "done",
    explanation: { en: "Present perfect with 'yet': have/has + past participle + yet", de: "Present perfect mit 'yet': have/has + Past Participle + yet" }
  }
];

const fixTheMistakeData = [
  {
    sentence: "I just finish my breakfast.",
    mistakeIndex: 2,
    correction: "finished",
    explanation: { en: "Present perfect: I have just finished (need 'have' and past participle)", de: "Present perfect: I have just finished (brauchst 'have' und Past Participle)" }
  },
  {
    sentence: "She already went home.",
    mistakeIndex: 1,
    correction: "has already gone",
    explanation: { en: "With 'already', use present perfect: has already gone", de: "Mit 'already' verwende Present perfect: has already gone" }
  },
  {
    sentence: "Did you eat lunch yet?",
    mistakeIndex: 0,
    correction: "Have you eaten",
    explanation: { en: "With 'yet' in questions, use present perfect: Have you eaten", de: "Mit 'yet' in Fragen verwende Present perfect: Have you eaten" }
  }
];

const grammarRacerData = [
  {
    prompt: "I ___ just ___ the door.",
    options: ["have opened", "opened", "am opening"],
    correct: "have opened",
    explanation: "Present perfect with 'just': have opened"
  },
  {
    prompt: "She ___ already ___ her keys.",
    options: ["has found", "found", "finds"],
    correct: "has found",
    explanation: "Present perfect with 'already': has found"
  },
  {
    prompt: "Have you ___ your coffee yet?",
    options: ["drunk", "drank", "drink"],
    correct: "drunk",
    explanation: "Past participle: drunk"
  }
];

export const presentPerfect2 = {
  id: 'a2_g8',
  title: {
    en: 'Present Perfect 2 (I have done) - Just, Already, Yet',
    de: 'Present Perfect 2 (Ich habe gemacht) - Just, Already, Yet'
  },
  description: {
    en: "Using Present Perfect with 'just', 'already', and 'yet' to talk about recent actions and completion.",
    de: "Present Perfect mit 'just', 'already' und 'yet' verwenden, um über kürzliche Handlungen und Vollendung zu sprechen."
  },
  
  components: {
    sentenceBuilder: <GrammarGame type="sentenceBuilder" data={sentenceBuilderData} />,
    fixTheMistake: <GrammarGame type="fixTheMistake" data={fixTheMistakeData} />,
    grammarRacer: <GrammarGame type="grammarRacer" data={grammarRacerData} />
  },

  content: {
    en: `
## Present Perfect 2: Just, Already, Yet ⏰

In the first Present Perfect lesson, we learned about life experiences. Now we're going deeper! Present Perfect also helps us talk about **recent actions** and **completion** - things that happened very recently or things that are finished (or not finished yet).

### Why These Words Matter

Think about these situations:
- You finish your homework 2 minutes ago → "I **have just finished** it!"
- Your friend asks if you've done something → "Yes, I **have already done** it."
- Someone asks if you've eaten → "No, I **haven't eaten yet**."

These words (**just**, **already**, **yet**) are like time markers that tell us **when** something happened relative to now.

### 1. JUST = Very Recently (Gerade eben) 🕐

**Just** means "a very short time ago" - maybe a few minutes or seconds ago. It always goes **between** have/has and the past participle.

**Position:** have/has + **just** + past participle

**Examples:**
- "I **have just finished** my homework." (I finished it 2 minutes ago)
- "She **has just arrived**." (She arrived a moment ago)
- "We **have just seen** that movie." (We saw it recently)

**Negative:**
- "I **haven't just finished**." (This is rare - we usually use "I haven't finished yet")

**Question:**
- "**Have** you **just arrived**?" (Did you arrive a moment ago?)

<div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">💡 Remember:</h3>
  <p><strong>Just</strong> always goes AFTER have/has and BEFORE the past participle!</p>
  <p>✅ "I have **just** finished"</p>
  <p>❌ "I just have finished" (Wrong order!)</p>
</div>

<GamePlaceholder id="sentenceBuilder" />

### 2. ALREADY = Before Now (Bereits) ✅

**Already** means "before now" or "sooner than expected." It shows that something is **finished** or **completed**.

**Position:** have/has + **already** + past participle (or: have/has + past participle + **already**)

**Examples:**
- "I **have already done** my homework." (I did it earlier - it's finished)
- "She **has already left**." (She left before now)
- "We **have already seen** that movie." (We saw it before)

**In questions:** "Have you **already finished**?" (Did you finish before I expected?)

<div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">✅ Already = Done!</h3>
  <p>When you use <strong>already</strong>, you're saying: "This is finished. I don't need to do it again."</p>
</div>

### 3. YET = Not Before Now (Noch nicht) ❌

**Yet** means "until now" or "not before now." We use it in **questions** and **negatives** to ask if something has happened or to say it hasn't happened.

**Position:** 
- **Negative:** haven't/hasn't + past participle + **yet**
- **Question:** Have/Has + subject + past participle + **yet**?

**Examples:**
- "I **haven't finished** my homework **yet**." (I haven't finished it - but I will)
- "She **hasn't arrived yet**." (She hasn't arrived - but she will)
- "**Have** you **eaten** lunch **yet**?" (Have you eaten? - asking if it's happened)

**Important:** We DON'T use "yet" in positive sentences!
- ❌ "I have finished yet." (Wrong!)
- ✅ "I **have already finished**." (Use "already" for positive!)

<div className="bg-amber-50 dark:bg-amber-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">⚠️ Remember:</h3>
  <p><strong>Yet</strong> is ONLY for questions and negatives!</p>
  <p>✅ "I haven't done it **yet**."</p>
  <p>✅ "Have you done it **yet**?"</p>
  <p>❌ "I have done it yet." (Wrong!)</p>
</div>

<GamePlaceholder id="fixTheMistake" />

### 4. Comparing Just, Already, and Yet 🔄

Let's see how they work together:

| Word | Meaning | Position | Use |
|------|---------|----------|-----|
| **Just** | Very recently | have/has + **just** + past participle | Positive |
| **Already** | Before now | have/has + **already** + past participle | Positive, Questions |
| **Yet** | Not before now | haven't/hasn't + past participle + **yet** | Negative, Questions |

**Example conversation:**
- A: "Have you finished your homework **yet**?"
- B: "Yes, I **have already finished** it. I **have just finished** it 5 minutes ago!"
- A: "Wow! I **haven't started yet**."

### 5. Present Perfect vs Past Simple (Again!) 🔄

Remember: When you mention a **specific time** (yesterday, last week, at 3pm), use **Past Simple**!

- ❌ "I have just finished **yesterday**." (Wrong! Don't mix specific time with present perfect)
- ✅ "I **finished** it **yesterday**." (Past Simple with specific time)
- ✅ "I **have just finished** it." (Present Perfect - no specific time, just "recently")

**Compare:**
- "I **have just seen** Tom." (Very recently - maybe 2 minutes ago)
- "I **saw** Tom **yesterday**." (Specific time - use Past Simple)

---

### 🎮 Practice Arena

**🏎️ Grammar Racer: Just, Already, Yet**
Choose the correct form! Remember the positions!
<GamePlaceholder id="grammarRacer" />

### 🎯 Practical Exercise

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border-2 border-green-300">
  <h3 className="font-bold text-green-800 dark:text-green-200 mb-4">📝 Your Day</h3>
  <p className="mb-4">Write sentences about what you have done today using 'just', 'already', and 'yet':</p>
  <ol className="list-decimal list-inside space-y-2">
    <li>One thing you have just done (use "I have just...")</li>
    <li>One thing you have already done (use "I have already...")</li>
    <li>One thing you haven't done yet (use "I haven't... yet")</li>
    <li>One question asking someone if they have done something (use "Have you... yet?")</li>
  </ol>
</div>
`,
    de: `
## Present Perfect 2: Just, Already, Yet ⏰

In der ersten Present Perfect Lektion haben wir über Lebenserfahrungen gelernt. Jetzt gehen wir tiefer! Present Perfect hilft uns auch, über **kürzliche Handlungen** und **Vollendung** zu sprechen - Dinge, die vor kurzem passiert sind oder Dinge, die fertig sind (oder noch nicht fertig).

### Warum diese Wörter wichtig sind

Denk an diese Situationen:
- Du hast deine Hausaufgaben vor 2 Minuten fertig gemacht → "I **have just finished** it!" (Ich habe sie gerade fertig gemacht!)
- Dein Freund fragt, ob du etwas gemacht hast → "Yes, I **have already done** it." (Ja, ich habe es bereits gemacht.)
- Jemand fragt, ob du gegessen hast → "No, I **haven't eaten yet**." (Nein, ich habe noch nicht gegessen.)

Diese Wörter (**just**, **already**, **yet**) sind wie Zeitmarker, die uns sagen, **wann** etwas relativ zu jetzt passiert ist.

### 1. JUST = Gerade eben 🕐

**Just** bedeutet "vor sehr kurzer Zeit" - vielleicht vor ein paar Minuten oder Sekunden. Es steht immer **zwischen** have/has und dem Past Participle.

**Position:** have/has + **just** + Past Participle

**Beispiele:**
- "I **have just finished** my homework." (Ich habe meine Hausaufgaben gerade fertig gemacht - vor 2 Minuten)
- "She **has just arrived**." (Sie ist gerade angekommen - vor einem Moment)
- "We **have just seen** that movie." (Wir haben diesen Film gerade gesehen - kürzlich)

**Verneinung:**
- "I **haven't just finished**." (Das ist selten - wir verwenden normalerweise "I haven't finished yet")

**Frage:**
- "**Have** you **just arrived**?" (Bist du gerade angekommen?)

<div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">💡 Merke dir:</h3>
  <p><strong>Just</strong> steht immer NACH have/has und VOR dem Past Participle!</p>
  <p>✅ "I have **just** finished"</p>
  <p>❌ "I just have finished" (Falsche Reihenfolge!)</p>
</div>

<GamePlaceholder id="sentenceBuilder" />

### 2. ALREADY = Bereits ✅

**Already** bedeutet "vor jetzt" oder "früher als erwartet". Es zeigt, dass etwas **fertig** oder **abgeschlossen** ist.

**Position:** have/has + **already** + Past Participle (oder: have/has + Past Participle + **already**)

**Beispiele:**
- "I **have already done** my homework." (Ich habe meine Hausaufgaben bereits gemacht - früher, es ist fertig)
- "She **has already left**." (Sie ist bereits gegangen - vor jetzt)
- "We **have already seen** that movie." (Wir haben diesen Film bereits gesehen - vorher)

**In Fragen:** "Have you **already finished**?" (Hast du bereits fertig gemacht - früher als ich erwartet habe?)

<div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">✅ Already = Fertig!</h3>
  <p>Wenn du <strong>already</strong> verwendest, sagst du: "Das ist fertig. Ich muss es nicht nochmal machen."</p>
</div>

### 3. YET = Noch nicht ❌

**Yet** bedeutet "bis jetzt" oder "nicht vor jetzt". Wir verwenden es in **Fragen** und **Verneinungen**, um zu fragen, ob etwas passiert ist, oder um zu sagen, dass es nicht passiert ist.

**Position:** 
- **Verneinung:** haven't/hasn't + Past Participle + **yet**
- **Frage:** Have/Has + Subjekt + Past Participle + **yet**?

**Beispiele:**
- "I **haven't finished** my homework **yet**." (Ich habe meine Hausaufgaben noch nicht fertig gemacht - aber ich werde es tun)
- "She **hasn't arrived yet**." (Sie ist noch nicht angekommen - aber sie wird kommen)
- "**Have** you **eaten** lunch **yet**?" (Hast du schon zu Mittag gegessen? - fragt, ob es passiert ist)

**Wichtig:** Wir verwenden "yet" NICHT in positiven Sätzen!
- ❌ "I have finished yet." (Falsch!)
- ✅ "I **have already finished**." (Verwende "already" für positiv!)

<div className="bg-amber-50 dark:bg-amber-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">⚠️ Merke dir:</h3>
  <p><strong>Yet</strong> ist NUR für Fragen und Verneinungen!</p>
  <p>✅ "I haven't done it **yet**."</p>
  <p>✅ "Have you done it **yet**?"</p>
  <p>❌ "I have done it yet." (Falsch!)</p>
</div>

<GamePlaceholder id="fixTheMistake" />

### 4. Just, Already und Yet vergleichen 🔄

Lass uns sehen, wie sie zusammenarbeiten:

| Wort | Bedeutung | Position | Verwendung |
|------|-----------|----------|------------|
| **Just** | Gerade eben | have/has + **just** + Past Participle | Positiv |
| **Already** | Bereits | have/has + **already** + Past Participle | Positiv, Fragen |
| **Yet** | Noch nicht | haven't/hasn't + Past Participle + **yet** | Verneinung, Fragen |

**Beispielgespräch:**
- A: "Have you finished your homework **yet**?" (Hast du deine Hausaufgaben schon fertig gemacht?)
- B: "Yes, I **have already finished** it. I **have just finished** it 5 minutes ago!" (Ja, ich habe sie bereits fertig gemacht. Ich habe sie gerade vor 5 Minuten fertig gemacht!)
- A: "Wow! I **haven't started yet**." (Wow! Ich habe noch nicht angefangen.)

### 5. Present Perfect vs Past Simple (Nochmal!) 🔄

Denk daran: Wenn du eine **spezifische Zeit** erwähnst (gestern, letzte Woche, um 15 Uhr), verwende **Past Simple**!

- ❌ "I have just finished **yesterday**." (Falsch! Mische keine spezifische Zeit mit Present Perfect)
- ✅ "I **finished** it **yesterday**." (Past Simple mit spezifischer Zeit)
- ✅ "I **have just finished** it." (Present Perfect - keine spezifische Zeit, nur "kürzlich")

**Vergleiche:**
- "I **have just seen** Tom." (Gerade eben - vielleicht vor 2 Minuten)
- "I **saw** Tom **yesterday**." (Spezifische Zeit - verwende Past Simple)

---

### 🎮 Trainings-Arena

**🏎️ Grammar Racer: Just, Already, Yet**
Wähle die richtige Form! Denk an die Positionen!
<GamePlaceholder id="grammarRacer" />

### 🎯 Praktische Übung

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border-2 border-green-300">
  <h3 className="font-bold text-green-800 dark:text-green-200 mb-4">📝 Dein Tag</h3>
  <p className="mb-4">Schreibe Sätze darüber, was du heute gemacht hast, mit 'just', 'already' und 'yet':</p>
  <ol className="list-decimal list-inside space-y-2">
    <li>Eine Sache, die du gerade gemacht hast (verwende "I have just...")</li>
    <li>Eine Sache, die du bereits gemacht hast (verwende "I have already...")</li>
    <li>Eine Sache, die du noch nicht gemacht hast (verwende "I haven't... yet")</li>
    <li>Eine Frage, die jemanden fragt, ob er/sie etwas gemacht hat (verwende "Have you... yet?")</li>
  </ol>
</div>
`
  },
  task: {
    de: {
      title: 'Dein Tag mit Just, Already, Yet',
      description: 'Schreibe Sätze über deinen Tag mit just, already und yet.',
      checklist: [
        { text: 'Satz mit "I have just..." (etwas, das du gerade gemacht hast)', checked: false },
        { text: 'Satz mit "I have already..." (etwas, das du bereits gemacht hast)', checked: false },
        { text: 'Satz mit "I haven\'t... yet" (etwas, das du noch nicht gemacht hast)', checked: false },
        { text: 'Frage mit "Have you... yet?"', checked: false }
      ]
    },
    en: {
      title: 'Your Day with Just, Already, Yet',
      description: 'Write sentences about your day using just, already, and yet.',
      checklist: [
        { text: 'Sentence with "I have just..." (something you just did)', checked: false },
        { text: 'Sentence with "I have already..." (something you already did)', checked: false },
        { text: 'Sentence with "I haven\'t... yet" (something you haven\'t done yet)', checked: false },
        { text: 'Question with "Have you... yet?"', checked: false }
      ]
    }
  },
  quiz: { de: [], en: [] }
};


