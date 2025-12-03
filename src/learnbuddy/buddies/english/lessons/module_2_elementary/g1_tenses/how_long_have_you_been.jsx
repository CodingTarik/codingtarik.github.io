import React from 'react';
import GrammarGame from '../../../components/grammar-games/GrammarGame';

const sentenceBuilderData = [
  {
    prompt: { en: "How long ___ you ___ (live) here?", de: "Wie lange ___ du hier ___ (wohnen)?" },
    words: ["have been living", "are living", "do live", "live"],
    correct: "have been living",
    explanation: { en: "How long + present perfect continuous: have/has + been + verb-ing", de: "How long + Present Perfect Continuous: have/has + been + Verb-ing" }
  },
  {
    prompt: { en: "How long ___ she ___ (work) here?", de: "Wie lange ___ sie hier ___ (arbeiten)?" },
    words: ["has been working", "is working", "does work", "works"],
    correct: "has been working",
    explanation: { en: "How long + present perfect continuous: has been + verb-ing", de: "How long + Present Perfect Continuous: has been + Verb-ing" }
  },
  {
    prompt: { en: "How long ___ you ___ (know) him?", de: "Wie lange ___ du ihn ___ (kennen)?" },
    words: ["have known", "know", "are knowing", "do know"],
    correct: "have known",
    explanation: { en: "With state verbs (know), use present perfect simple: have/has + past participle", de: "Mit Zustandsverben (know) verwende Present Perfect Simple: have/has + Past Participle" }
  }
];

const fixTheMistakeData = [
  {
    sentence: "How long do you live here?",
    mistakeIndex: 1,
    correction: "have you been living",
    explanation: { en: "For duration (how long), use present perfect: have you been living", de: "Für Dauer (how long) verwende Present Perfect: have you been living" }
  },
  {
    sentence: "How long are you working here?",
    mistakeIndex: 2,
    correction: "have you been working",
    explanation: { en: "Present continuous is for NOW. For duration, use present perfect continuous", de: "Present Continuous ist für JETZT. Für Dauer verwende Present Perfect Continuous" }
  },
  {
    sentence: "How long have you been knowing him?",
    mistakeIndex: 3,
    correction: "known",
    explanation: { en: "'Know' is a state verb - use present perfect simple, not continuous", de: "'Know' ist ein Zustandsverb - verwende Present Perfect Simple, nicht Continuous" }
  }
];

const grammarRacerData = [
  {
    prompt: "How long ___ you ___ English?",
    options: ["have been studying", "are studying", "study"],
    correct: "have been studying",
    explanation: "Duration: have been studying"
  },
  {
    prompt: "How long ___ she ___ in London?",
    options: ["has lived", "lives", "is living"],
    correct: "has lived",
    explanation: "Duration with state verb: has lived"
  },
  {
    prompt: "How long ___ they ___ here?",
    options: ["have been waiting", "are waiting", "wait"],
    correct: "have been waiting",
    explanation: "Duration: have been waiting"
  }
];

export const howLongHaveYouBeen = {
  id: 'a2_g11',
  title: {
    en: 'How long have you (been) ... ?',
    de: 'Wie lange hast du (schon) ... ?'
  },
  description: {
    en: "Asking about duration - how long something has been happening or how long you've had something.",
    de: "Nach Dauer fragen - wie lange etwas schon passiert oder wie lange du etwas schon hast."
  },
  
  components: {
    sentenceBuilder: <GrammarGame type="sentenceBuilder" data={sentenceBuilderData} />,
    fixTheMistake: <GrammarGame type="fixTheMistake" data={fixTheMistakeData} />,
    grammarRacer: <GrammarGame type="grammarRacer" data={grammarRacerData} />
  },

  content: {
    en: `
## How Long Have You Been...? ⏱️

When you want to ask **how long** something has been happening, or **how long** you've had something, you need a special structure. This is different from asking "when did you start?" - here, we're asking about the **duration** (the length of time).

### Why This Structure?

Think about these questions:
- "How long have you been living here?" (Not "How long do you live here?")
- "How long have you been studying English?" (Not "How long are you studying English?")
- "How long have you known him?" (Not "How long do you know him?")

The key is: when asking about **duration** (how long something has been happening), we use **Present Perfect** (or Present Perfect Continuous), NOT Present Simple or Present Continuous!

### 1. How Long + Present Perfect Continuous 🔄

For **actions** that started in the past and are still happening now, we use **Present Perfect Continuous**.

**Structure:** How long + have/has + been + verb-ing?

**Examples:**
- "How long **have you been living** here?" (You started living here in the past, and you still live here now)
- "How long **has she been working** at that company?" (She started working there in the past, and she still works there)
- "How long **have they been waiting**?" (They started waiting in the past, and they're still waiting)

**Answers:**
- "I **have been living** here **for 5 years**." (Duration: 5 years)
- "She **has been working** there **since 2020**." (Starting point: 2020)
- "They **have been waiting** **for 2 hours**." (Duration: 2 hours)

<div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">💡 Remember:</h3>
  <p>Present Perfect Continuous shows an action that <strong>started in the past</strong> and is <strong>still happening now</strong>.</p>
  <p>It's like saying: "This action began in the past and continues up to now."</p>
</div>

<GamePlaceholder id="sentenceBuilder" />

### 2. How Long + Present Perfect Simple (State Verbs) 🧠

Some verbs describe **states** (not actions). With these verbs, we use **Present Perfect Simple**, not Continuous.

**Common state verbs:** know, have, like, love, want, need, understand, believe, own

**Structure:** How long + have/has + past participle?

**Examples:**
- "How long **have you known** him?" (Not "have you been knowing" - know is a state!)
- "How long **has she had** that car?" (Not "has she been having")
- "How long **have you wanted** to visit Japan?" (Not "have you been wanting")

**Why?** These verbs describe a state or condition, not an ongoing action. You can't "be knowing" something - you either know it or you don't!

**Answers:**
- "I **have known** him **for 10 years**."
- "She **has had** that car **since 2019**."
- "I **have wanted** to visit Japan **for a long time**."

<div className="bg-amber-50 dark:bg-amber-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">⚠️ Important:</h3>
  <p>State verbs (know, have, like, etc.) don't use continuous forms!</p>
  <p>❌ "How long have you been knowing him?" (Wrong!)</p>
  <p>✅ "How long have you known him?" (Correct!)</p>
</div>

### 3. For vs Since 📅

When answering "How long...?" questions, you'll use **for** or **since**:

| Word | Use | Example |
|------|-----|---------|
| **For** | Duration (length of time) | for 5 years, for 2 hours, for a long time |
| **Since** | Starting point (when it began) | since 2020, since Monday, since I was a child |

**Examples:**
- "I have been living here **for 5 years**." (Duration: 5 years)
- "I have been living here **since 2019**." (Starting point: 2019)
- "She has been working there **for 3 months**." (Duration: 3 months)
- "She has been working there **since January**." (Starting point: January)

**Remember:**
- **For** + period of time (for 2 years, for a week, for 5 minutes)
- **Since** + point in time (since 2020, since Monday, since last year)

<GamePlaceholder id="fixTheMistake" />

### 4. Common Mistakes ❌

**Mistake 1:** Using Present Simple
- ❌ "How long **do you live** here?" (Wrong! This asks about habit, not duration)
- ✅ "How long **have you been living** here?" (Correct! Duration)

**Mistake 2:** Using Present Continuous
- ❌ "How long **are you studying** English?" (Wrong! This asks about NOW, not duration)
- ✅ "How long **have you been studying** English?" (Correct! Duration)

**Mistake 3:** Using Continuous with State Verbs
- ❌ "How long **have you been knowing** him?" (Wrong! Know is a state verb)
- ✅ "How long **have you known** him?" (Correct!)

### 5. Questions and Answers 💬

**Questions:**
- "How long **have you been** living here?"
- "How long **has she been** working there?"
- "How long **have you known** him?"
- "How long **has he had** that car?"

**Answers:**
- "I **have been living** here **for 2 years**."
- "She **has been working** there **since 2020**."
- "I **have known** him **for 10 years**."
- "He **has had** that car **since last month**."

---

### 🎮 Practice Arena

**🏎️ Grammar Racer: How Long?**
Choose the correct form! Remember: duration = present perfect!
<GamePlaceholder id="grammarRacer" />

### 🎯 Practical Exercise

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border-2 border-green-300">
  <h3 className="font-bold text-green-800 dark:text-green-200 mb-4">📝 Your Life Duration</h3>
  <p className="mb-4">Write questions and answers about duration using "How long...?":</p>
  <ol className="list-decimal list-inside space-y-2">
    <li>One question with "How long have you been..." (an action) + your answer with "for"</li>
    <li>One question with "How long have you..." (a state verb) + your answer with "since"</li>
    <li>One question asking someone about their job/studies + their answer</li>
  </ol>
</div>
`,
    de: `
## How Long Have You Been...? ⏱️

Wenn du fragen willst, **wie lange** etwas schon passiert oder **wie lange** du etwas schon hast, brauchst du eine spezielle Struktur. Das ist anders als "Wann hast du angefangen?" - hier fragen wir nach der **Dauer** (der Zeitspanne).

### Warum diese Struktur?

Denk an diese Fragen:
- "How long have you been living here?" (Nicht "How long do you live here?")
- "How long have you been studying English?" (Nicht "How long are you studying English?")
- "How long have you known him?" (Nicht "How long do you know him?")

Der Schlüssel ist: Wenn wir nach **Dauer** fragen (wie lange etwas schon passiert), verwenden wir **Present Perfect** (oder Present Perfect Continuous), NICHT Present Simple oder Present Continuous!

### 1. How Long + Present Perfect Continuous 🔄

Für **Handlungen**, die in der Vergangenheit begonnen haben und jetzt noch passieren, verwenden wir **Present Perfect Continuous**.

**Struktur:** How long + have/has + been + Verb-ing?

**Beispiele:**
- "How long **have you been living** here?" (Du hast hier in der Vergangenheit zu wohnen begonnen, und du wohnst hier noch)
- "How long **has she been working** at that company?" (Sie hat dort in der Vergangenheit zu arbeiten begonnen, und sie arbeitet dort noch)
- "How long **have they been waiting**?" (Sie haben in der Vergangenheit zu warten begonnen, und sie warten noch)

**Antworten:**
- "I **have been living** here **for 5 years**." (Dauer: 5 Jahre)
- "She **has been working** there **since 2020**." (Ausgangspunkt: 2020)
- "They **have been waiting** **for 2 hours**." (Dauer: 2 Stunden)

<div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">💡 Merke dir:</h3>
  <p>Present Perfect Continuous zeigt eine Handlung, die <strong>in der Vergangenheit begonnen hat</strong> und <strong>jetzt noch passiert</strong>.</p>
  <p>Es ist wie zu sagen: "Diese Handlung begann in der Vergangenheit und dauert bis jetzt an."</p>
</div>

<GamePlaceholder id="sentenceBuilder" />

### 2. How Long + Present Perfect Simple (Zustandsverben) 🧠

Einige Verben beschreiben **Zustände** (nicht Handlungen). Mit diesen Verben verwenden wir **Present Perfect Simple**, nicht Continuous.

**Häufige Zustandsverben:** know, have, like, love, want, need, understand, believe, own

**Struktur:** How long + have/has + Past Participle?

**Beispiele:**
- "How long **have you known** him?" (Nicht "have you been knowing" - know ist ein Zustand!)
- "How long **has she had** that car?" (Nicht "has she been having")
- "How long **have you wanted** to visit Japan?" (Nicht "have you been wanting")

**Warum?** Diese Verben beschreiben einen Zustand oder eine Bedingung, keine andauernde Handlung. Du kannst nicht "am Kennen" sein - du kennst es oder nicht!

**Antworten:**
- "I **have known** him **for 10 years**."
- "She **has had** that car **since 2019**."
- "I **have wanted** to visit Japan **for a long time**."

<div className="bg-amber-50 dark:bg-amber-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">⚠️ Wichtig:</h3>
  <p>Zustandsverben (know, have, like, etc.) verwenden keine Continuous-Formen!</p>
  <p>❌ "How long have you been knowing him?" (Falsch!)</p>
  <p>✅ "How long have you known him?" (Richtig!)</p>
</div>

### 3. For vs Since 📅

Wenn du "How long...?" Fragen beantwortest, verwendest du **for** oder **since**:

| Wort | Verwendung | Beispiel |
|------|------------|----------|
| **For** | Dauer (Zeitspanne) | for 5 years, for 2 hours, for a long time |
| **Since** | Ausgangspunkt (wann es begann) | since 2020, since Monday, since I was a child |

**Beispiele:**
- "I have been living here **for 5 years**." (Dauer: 5 Jahre)
- "I have been living here **since 2019**." (Ausgangspunkt: 2019)
- "She has been working there **for 3 months**." (Dauer: 3 Monate)
- "She has been working there **since January**." (Ausgangspunkt: Januar)

**Merke dir:**
- **For** + Zeitspanne (for 2 years, for a week, for 5 minutes)
- **Since** + Zeitpunkt (since 2020, since Monday, since last year)

<GamePlaceholder id="fixTheMistake" />

### 4. Häufige Fehler ❌

**Fehler 1:** Present Simple verwenden
- ❌ "How long **do you live** here?" (Falsch! Das fragt nach Gewohnheit, nicht Dauer)
- ✅ "How long **have you been living** here?" (Richtig! Dauer)

**Fehler 2:** Present Continuous verwenden
- ❌ "How long **are you studying** English?" (Falsch! Das fragt nach JETZT, nicht Dauer)
- ✅ "How long **have you been studying** English?" (Richtig! Dauer)

**Fehler 3:** Continuous mit Zustandsverben verwenden
- ❌ "How long **have you been knowing** him?" (Falsch! Know ist ein Zustandsverb)
- ✅ "How long **have you known** him?" (Richtig!)

### 5. Fragen und Antworten 💬

**Fragen:**
- "How long **have you been** living here?"
- "How long **has she been** working there?"
- "How long **have you known** him?"
- "How long **has he had** that car?"

**Antworten:**
- "I **have been living** here **for 2 years**."
- "She **has been working** there **since 2020**."
- "I **have known** him **for 10 years**."
- "He **has had** that car **since last month**."

---

### 🎮 Trainings-Arena

**🏎️ Grammar Racer: How Long?**
Wähle die richtige Form! Denk daran: Dauer = Present Perfect!
<GamePlaceholder id="grammarRacer" />

### 🎯 Praktische Übung

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border-2 border-green-300">
  <h3 className="font-bold text-green-800 dark:text-green-200 mb-4">📝 Deine Lebensdauer</h3>
  <p className="mb-4">Schreibe Fragen und Antworten über Dauer mit "How long...?":</p>
  <ol className="list-decimal list-inside space-y-2">
    <li>Eine Frage mit "How long have you been..." (eine Handlung) + deine Antwort mit "for"</li>
    <li>Eine Frage mit "How long have you..." (ein Zustandsverb) + deine Antwort mit "since"</li>
    <li>Eine Frage, die jemanden über seinen Job/sein Studium fragt + seine Antwort</li>
  </ol>
</div>
`
  },
  task: {
    de: {
      title: 'Wie lange schon?',
      description: 'Schreibe Fragen und Antworten über Dauer mit "How long...?".',
      checklist: [
        { text: 'Frage mit "How long have you been..." (Handlung) + Antwort mit "for"', checked: false },
        { text: 'Frage mit "How long have you..." (Zustandsverb) + Antwort mit "since"', checked: false },
        { text: 'Frage über Job/Studium + Antwort', checked: false }
      ]
    },
    en: {
      title: 'How Long?',
      description: 'Write questions and answers about duration using "How long...?".',
      checklist: [
        { text: 'Question with "How long have you been..." (action) + answer with "for"', checked: false },
        { text: 'Question with "How long have you..." (state verb) + answer with "since"', checked: false },
        { text: 'Question about job/studies + answer', checked: false }
      ]
    }
  },
  quiz: { de: [], en: [] }
};


