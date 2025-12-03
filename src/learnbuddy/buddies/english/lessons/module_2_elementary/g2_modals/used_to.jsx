import React from 'react';
import GrammarGame from '../../../components/grammar-games/GrammarGame';

const sentenceBuilderData = [
  {
    prompt: { en: "I ___ (play) football when I was a child.", de: "Ich ___ (spielen) Fußball, als ich ein Kind war." },
    words: ["used to play", "played", "play", "was playing"],
    correct: "used to play",
    explanation: { en: "Past habit → used to + verb", de: "Vergangene Gewohnheit → used to + Verb" }
  },
  {
    prompt: { en: "She ___ (not like) coffee, but now she loves it.", de: "Sie ___ (nicht mögen) Kaffee, aber jetzt liebt sie ihn." },
    words: ["didn't use to like", "didn't used to like", "used not to like", "didn't like"],
    correct: "didn't use to like",
    explanation: { en: "Negative: didn't use to + verb (not 'used')", de: "Verneinung: didn't use to + Verb (nicht 'used')" }
  },
  {
    prompt: { en: "___ you ___ (live) in London?", de: "___ du in London ___ (wohnen)?" },
    words: ["Did use to live", "Did used to live", "Used to live", "Did live"],
    correct: "Did use to live",
    explanation: { en: "Question: Did + subject + use to + verb", de: "Frage: Did + Subjekt + use to + Verb" }
  }
];

const fixTheMistakeData = [
  {
    sentence: "I used to went to the gym every day.",
    mistakeIndex: 3,
    correction: "go",
    explanation: { en: "Used to + base form (not past): used to go", de: "Used to + Grundform (nicht Vergangenheit): used to go" }
  },
  {
    sentence: "She didn't used to smoke.",
    mistakeIndex: 2,
    correction: "use",
    explanation: { en: "Negative: didn't use to (not 'used')", de: "Verneinung: didn't use to (nicht 'used')" }
  },
  {
    sentence: "Did you used to live here?",
    mistakeIndex: 2,
    correction: "use",
    explanation: { en: "Question: Did you use to (not 'used')", de: "Frage: Did you use to (nicht 'used')" }
  }
];

const grammarRacerData = [
  {
    prompt: "I ___ smoke, but I quit last year.",
    options: ["used to", "use to", "was used to"],
    correct: "used to",
    explanation: "Past habit: used to"
  },
  {
    prompt: "She ___ like vegetables.",
    options: ["didn't use to", "didn't used to", "used not to"],
    correct: "didn't use to",
    explanation: "Negative: didn't use to"
  },
  {
    prompt: "___ you ___ play tennis?",
    options: ["Did use to", "Used to", "Did used to"],
    correct: "Did use to",
    explanation: "Question: Did use to"
  }
];

export const usedTo = {
  id: 'a2_g18',
  title: {
    en: 'Used to (do)',
    de: 'Used to (tun)'
  },
  description: {
    en: "Talking about past habits and states that are no longer true. 'I used to play football', 'She used to live here'.",
    de: "Über vergangene Gewohnheiten und Zustände sprechen, die nicht mehr wahr sind. 'Ich spielte früher Fußball', 'Sie wohnte früher hier'."
  },
  
  components: {
    sentenceBuilder: <GrammarGame type="sentenceBuilder" data={sentenceBuilderData} />,
    fixTheMistake: <GrammarGame type="fixTheMistake" data={fixTheMistakeData} />,
    grammarRacer: <GrammarGame type="grammarRacer" data={grammarRacerData} />
  },

  content: {
    en: `
## Used To: Past Habits and States 📚

**Used to** is a special structure that talks about things that happened **regularly in the past** but **don't happen anymore**. It's perfect for talking about past habits, routines, or states that have changed.

### Why "Used To"?

Think about these situations:
- "I **used to play** football every weekend." (I did it regularly, but I don't now)
- "She **used to live** in London." (She lived there before, but not now)
- "We **used to be** friends." (We were friends before, but not now)

The key idea: **Regular in the past** + **Not true now** = **Used to**

### 1. Form: Used To + Base Verb 📝

**Structure:** Subject + **used to** + base form of verb

**Important:** After "used to", you use the **base form** (infinitive without "to"), NOT the past tense!

**Examples:**
- "I **used to play** football." (Not "used to played")
- "She **used to live** in Paris." (Not "used to lived")
- "We **used to go** to the cinema every Friday." (Not "used to went")

**Common verbs:**
- used to **be**, used to **have**, used to **live**, used to **work**
- used to **play**, used to **go**, used to **like**, used to **smoke**

<div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-4 my-4">
  <strong className="text-red-800 dark:text-red-200">⚠️ Common Mistake!</strong>
  <br/>
  <p className="mt-2">After "used to", use the <strong>base form</strong> (play, go, live), NOT the past tense!</p>
  <p>❌ "I used to **went**" (Wrong!)</p>
  <p>✅ "I used to **go**" (Correct!)</p>
</div>

<GamePlaceholder id="sentenceBuilder" />

### 2. When to Use Used To 🎯

Use **used to** for:

#### A) Past Habits (Things You Did Regularly)
- "I **used to smoke**." (I smoked regularly, but I don't now)
- "She **used to exercise** every morning." (She did it regularly, but not now)
- "We **used to visit** our grandparents every summer." (Regular habit in the past)

#### B) Past States (Things That Were True)
- "I **used to live** in London." (I lived there before, but not now)
- "She **used to have** long hair." (She had it before, but not now)
- "We **used to be** best friends." (We were friends before, but not now)

**Key point:** Both show something that was **true/regular in the past** but is **not true now**.

<div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">💡 Remember:</h3>
  <p><strong>Used to</strong> = Regular/true in the past + Not true now</p>
  <p>If something still happens, don't use "used to"!</p>
</div>

### 3. Negative: Didn't Use To ❌

**Structure:** Subject + **didn't use to** + base verb

**Important:** In negative, it's **"didn't use to"** (NOT "didn't used to")!

**Examples:**
- "I **didn't use to like** coffee." (I didn't like it before, but I do now)
- "She **didn't use to smoke**." (She didn't smoke before)
- "We **didn't use to live** in the city." (We didn't live there before)

<div className="bg-amber-50 dark:bg-amber-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">⚠️ Important:</h3>
  <p>Negative form: <strong>didn't use to</strong> (not "didn't used to")</p>
  <p>❌ "I didn't **used** to like it." (Wrong!)</p>
  <p>✅ "I didn't **use** to like it." (Correct!)</p>
</div>

<GamePlaceholder id="fixTheMistake" />

### 4. Questions: Did ... Use To? ❓

**Structure:** **Did** + subject + **use to** + base verb?

**Important:** In questions, it's **"Did ... use to"** (NOT "Did ... used to")!

**Examples:**
- "**Did** you **use to play** football?" (Did you play it regularly before?)
- "**Did** she **use to live** here?" (Did she live here before?)
- "Where **did** you **use to go** on holiday?" (Where did you go regularly before?)

**Short answers:**
- "Yes, I **did**." / "No, I **didn't**."

### 5. Used To vs Past Simple 🔄

Both talk about the past, but differently:

| Used To | Past Simple |
|---------|-------------|
| Regular/repeated in the past | One-time action or specific time |
| "I **used to play** football." (Regular habit) | "I **played** football **yesterday**." (One time) |
| Shows contrast (then vs now) | Just states what happened |
| No specific time needed | Often has specific time |

**Compare:**
- "I **used to play** football." (Regular habit - I don't now)
- "I **played** football **last week**." (One specific time)

**When to use which:**
- **Used to** = Regular habit/routine in the past (contrast with now)
- **Past Simple** = One action at a specific time

### 6. Common Mistakes ❌

**Mistake 1:** Using past tense after "used to"
- ❌ "I used to **went** to the gym." (Wrong!)
- ✅ "I used to **go** to the gym." (Correct!)

**Mistake 2:** Using "used to" for things that still happen
- ❌ "I used to live here." (If you still live here - wrong!)
- ✅ "I **live** here." (If you still live here)

**Mistake 3:** "Didn't used to" or "Did used to"
- ❌ "I didn't **used** to like it." (Wrong!)
- ✅ "I didn't **use** to like it." (Correct!)

---

### 🎮 Practice Arena

**🏎️ Grammar Racer: Used To**
Choose the correct form! Remember: base form after "used to"!
<GamePlaceholder id="grammarRacer" />

### 🎯 Practical Exercise

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border-2 border-green-300">
  <h3 className="font-bold text-green-800 dark:text-green-200 mb-4">📝 Your Past Habits</h3>
  <p className="mb-4">Write sentences about your past habits using "used to":</p>
  <ol className="list-decimal list-inside space-y-2">
    <li>One thing you used to do regularly (but don't now)</li>
    <li>One place you used to live or go to (but don't now)</li>
    <li>One thing you didn't use to like (but do now)</li>
    <li>One question asking someone about their past habits</li>
  </ol>
</div>
`,
    de: `
## Used To: Vergangene Gewohnheiten und Zustände 📚

**Used to** ist eine spezielle Struktur, die über Dinge spricht, die **regelmäßig in der Vergangenheit** passiert sind, aber **nicht mehr passieren**. Es ist perfekt, um über vergangene Gewohnheiten, Routinen oder Zustände zu sprechen, die sich geändert haben.

### Warum "Used To"?

Denk an diese Situationen:
- "I **used to play** football every weekend." (Ich habe es regelmäßig gemacht, aber jetzt nicht mehr)
- "She **used to live** in London." (Sie hat dort vorher gewohnt, aber jetzt nicht mehr)
- "We **used to be** friends." (Wir waren vorher Freunde, aber jetzt nicht mehr)

Die Schlüsselidee: **Regelmäßig in der Vergangenheit** + **Nicht mehr wahr jetzt** = **Used to**

### 1. Form: Used To + Grundform 📝

**Struktur:** Subjekt + **used to** + Grundform des Verbs

**Wichtig:** Nach "used to" verwendest du die **Grundform** (Infinitiv ohne "to"), NICHT die Vergangenheitsform!

**Beispiele:**
- "I **used to play** football." (Nicht "used to played")
- "She **used to live** in Paris." (Nicht "used to lived")
- "We **used to go** to the cinema every Friday." (Nicht "used to went")

**Häufige Verben:**
- used to **be**, used to **have**, used to **live**, used to **work**
- used to **play**, used to **go**, used to **like**, used to **smoke**

<div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-4 my-4">
  <strong className="text-red-800 dark:text-red-200">⚠️ Häufiger Fehler!</strong>
  <br/>
  <p className="mt-2">Nach "used to" verwende die <strong>Grundform</strong> (play, go, live), NICHT die Vergangenheitsform!</p>
  <p>❌ "I used to **went**" (Falsch!)</p>
  <p>✅ "I used to **go**" (Richtig!)</p>
</div>

<GamePlaceholder id="sentenceBuilder" />

### 2. Wann Used To verwenden 🎯

Verwende **used to** für:

#### A) Vergangene Gewohnheiten (Dinge, die du regelmäßig gemacht hast)
- "I **used to smoke**." (Ich habe regelmäßig geraucht, aber jetzt nicht mehr)
- "She **used to exercise** every morning." (Sie hat es regelmäßig gemacht, aber jetzt nicht mehr)
- "We **used to visit** our grandparents every summer." (Regelmäßige Gewohnheit in der Vergangenheit)

#### B) Vergangene Zustände (Dinge, die wahr waren)
- "I **used to live** in London." (Ich habe dort vorher gewohnt, aber jetzt nicht mehr)
- "She **used to have** long hair." (Sie hatte es vorher, aber jetzt nicht mehr)
- "We **used to be** best friends." (Wir waren vorher Freunde, aber jetzt nicht mehr)

**Schlüsselpunkt:** Beide zeigen etwas, das **wahr/regelmäßig in der Vergangenheit** war, aber **jetzt nicht mehr wahr ist**.

<div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">💡 Merke dir:</h3>
  <p><strong>Used to</strong> = Regelmäßig/wahr in der Vergangenheit + Nicht mehr wahr jetzt</p>
  <p>Wenn etwas noch passiert, verwende kein "used to"!</p>
</div>

### 3. Verneinung: Didn't Use To ❌

**Struktur:** Subjekt + **didn't use to** + Grundform

**Wichtig:** In der Verneinung ist es **"didn't use to"** (NICHT "didn't used to")!

**Beispiele:**
- "I **didn't use to like** coffee." (Ich mochte es vorher nicht, aber jetzt schon)
- "She **didn't use to smoke**." (Sie hat vorher nicht geraucht)
- "We **didn't use to live** in the city." (Wir haben vorher nicht in der Stadt gewohnt)

<div className="bg-amber-50 dark:bg-amber-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">⚠️ Wichtig:</h3>
  <p>Verneinungsform: <strong>didn't use to</strong> (nicht "didn't used to")</p>
  <p>❌ "I didn't **used** to like it." (Falsch!)</p>
  <p>✅ "I didn't **use** to like it." (Richtig!)</p>
</div>

<GamePlaceholder id="fixTheMistake" />

### 4. Fragen: Did ... Use To? ❓

**Struktur:** **Did** + Subjekt + **use to** + Grundform?

**Wichtig:** In Fragen ist es **"Did ... use to"** (NICHT "Did ... used to")!

**Beispiele:**
- "**Did** you **use to play** football?" (Hast du es regelmäßig vorher gespielt?)
- "**Did** she **use to live** here?" (Hat sie hier vorher gewohnt?)
- "Where **did** you **use to go** on holiday?" (Wo bist du regelmäßig vorher in den Urlaub gefahren?)

**Kurze Antworten:**
- "Yes, I **did**." / "No, I **didn't**."

### 5. Used To vs Past Simple 🔄

Beide sprechen über die Vergangenheit, aber unterschiedlich:

| Used To | Past Simple |
|---------|-------------|
| Regelmäßig/wiederholt in der Vergangenheit | Einmalige Handlung oder spezifische Zeit |
| "I **used to play** football." (Regelmäßige Gewohnheit) | "I **played** football **yesterday**." (Einmal) |
| Zeigt Kontrast (damals vs jetzt) | Stellt nur dar, was passiert ist |
| Keine spezifische Zeit nötig | Hat oft spezifische Zeit |

**Vergleiche:**
- "I **used to play** football." (Regelmäßige Gewohnheit - ich spiele jetzt nicht mehr)
- "I **played** football **last week**." (Einmalige spezifische Zeit)

**Wann welches verwenden:**
- **Used to** = Regelmäßige Gewohnheit/Routine in der Vergangenheit (Kontrast mit jetzt)
- **Past Simple** = Eine Handlung zu einer spezifischen Zeit

### 6. Häufige Fehler ❌

**Fehler 1:** Vergangenheitsform nach "used to" verwenden
- ❌ "I used to **went** to the gym." (Falsch!)
- ✅ "I used to **go** to the gym." (Richtig!)

**Fehler 2:** "Used to" für Dinge verwenden, die noch passieren
- ❌ "I used to live here." (Wenn du hier noch wohnst - falsch!)
- ✅ "I **live** here." (Wenn du hier noch wohnst)

**Fehler 3:** "Didn't used to" oder "Did used to"
- ❌ "I didn't **used** to like it." (Falsch!)
- ✅ "I didn't **use** to like it." (Richtig!)

---

### 🎮 Trainings-Arena

**🏎️ Grammar Racer: Used To**
Wähle die richtige Form! Denk daran: Grundform nach "used to"!
<GamePlaceholder id="grammarRacer" />

### 🎯 Praktische Übung

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border-2 border-green-300">
  <h3 className="font-bold text-green-800 dark:text-green-200 mb-4">📝 Deine vergangenen Gewohnheiten</h3>
  <p className="mb-4">Schreibe Sätze über deine vergangenen Gewohnheiten mit "used to":</p>
  <ol className="list-decimal list-inside space-y-2">
    <li>Eine Sache, die du regelmäßig gemacht hast (aber jetzt nicht mehr)</li>
    <li>Ein Ort, an dem du gewohnt oder hingegangen bist (aber jetzt nicht mehr)</li>
    <li>Eine Sache, die du nicht gemocht hast (aber jetzt schon)</li>
    <li>Eine Frage, die jemanden nach seinen vergangenen Gewohnheiten fragt</li>
  </ol>
</div>
`
  },
  task: {
    de: {
      title: 'Used To - Vergangene Gewohnheiten',
      description: 'Schreibe Sätze über vergangene Gewohnheiten mit used to.',
      checklist: [
        { text: 'Satz über etwas, das du regelmäßig gemacht hast (aber jetzt nicht mehr)', checked: false },
        { text: 'Satz über einen Ort, an dem du gewohnt/hingegangen bist (aber jetzt nicht mehr)', checked: false },
        { text: 'Satz über etwas, das du nicht gemocht hast (aber jetzt schon)', checked: false },
        { text: 'Frage über vergangene Gewohnheiten', checked: false }
      ]
    },
    en: {
      title: 'Used To - Past Habits',
      description: 'Write sentences about past habits using used to.',
      checklist: [
        { text: 'Sentence about something you did regularly (but don\'t now)', checked: false },
        { text: 'Sentence about a place you lived/went to (but don\'t now)', checked: false },
        { text: 'Sentence about something you didn\'t like (but do now)', checked: false },
        { text: 'Question about past habits', checked: false }
      ]
    }
  },
  quiz: { de: [], en: [] }
};


