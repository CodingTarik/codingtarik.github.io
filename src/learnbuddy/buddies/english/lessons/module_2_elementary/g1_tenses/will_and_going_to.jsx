import React from 'react';
import GrammarGame from '../../../components/grammar-games/GrammarGame';

const sentenceBuilderData = [
  {
    prompt: { en: "I ___ (study) harder next semester.", de: "Ich ___ (lernen) nächstes Semester härter." },
    words: ["am going to study", "will study", "study", "am studying"],
    correct: "am going to study",
    explanation: { en: "Plan/intention → going to", de: "Plan/Absicht → going to" }
  },
  {
    prompt: { en: "Look at those clouds! It ___ (rain).", de: "Schau dir diese Wolken an! Es ___ (regnen)." },
    words: ["is going to rain", "will rain", "rains", "is raining"],
    correct: "is going to rain",
    explanation: { en: "Evidence/prediction based on present → going to", de: "Beweis/Vorhersage basierend auf Gegenwart → going to" }
  },
  {
    prompt: { en: "I think it ___ (be) sunny tomorrow.", de: "Ich denke, es ___ (sein) morgen sonnig." },
    words: ["will be", "is going to be", "is", "be"],
    correct: "will be",
    explanation: { en: "Opinion/prediction → will", de: "Meinung/Vorhersage → will" }
  }
];

const fixTheMistakeData = [
  {
    sentence: "I will buy a new car next year. I've saved enough money.",
    mistakeIndex: 1,
    correction: "am going to buy",
    explanation: { en: "Plan with evidence (saved money) → going to", de: "Plan mit Beweis (Geld gespart) → going to" }
  },
  {
    sentence: "I'm going to think you'll like this movie.",
    mistakeIndex: 1,
    correction: "think",
    explanation: { en: "'Think' with opinion → will (not going to)", de: "'Think' mit Meinung → will (nicht going to)" }
  },
  {
    sentence: "Watch out! That glass will fall!",
    mistakeIndex: 3,
    correction: "is going to fall",
    explanation: { en: "Immediate prediction with evidence → going to", de: "Sofortige Vorhersage mit Beweis → going to" }
  }
];

const grammarRacerData = [
  {
    prompt: "I ___ a new phone next month.",
    options: ["am going to buy", "will buy", "buy"],
    correct: "am going to buy",
    explanation: "Plan: am going to buy"
  },
  {
    prompt: "I think she ___ happy about this.",
    options: ["will be", "is going to be", "is"],
    correct: "will be",
    explanation: "Opinion: will be"
  },
  {
    prompt: "Look! It ___ rain!",
    options: ["is going to", "will", "is"],
    correct: "is going to",
    explanation: "Evidence: is going to"
  }
];

export const willAndGoingTo = {
  id: 'a2_g23',
  title: {
    en: 'I will and I\'m going to - Plans vs Predictions',
    de: 'I will und I\'m going to - Pläne vs Vorhersagen'
  },
  description: {
    en: "Understanding the difference between 'will' and 'going to' - when to use each for plans, predictions, and intentions.",
    de: "Den Unterschied zwischen 'will' und 'going to' verstehen - wann man welches für Pläne, Vorhersagen und Absichten verwendet."
  },
  
  components: {
    sentenceBuilder: <GrammarGame type="sentenceBuilder" data={sentenceBuilderData} />,
    fixTheMistake: <GrammarGame type="fixTheMistake" data={fixTheMistakeData} />,
    grammarRacer: <GrammarGame type="grammarRacer" data={grammarRacerData} />
  },

  content: {
    en: `
## Will vs Going To: Plans vs Predictions 🎯

Both **will** and **going to** talk about the future, but they're used differently! The key is understanding **when** you decided something and **what evidence** you have.

### The Core Difference

**GOING TO** = Plan/intention (you decided before) OR prediction with evidence (you can see it coming)
**WILL** = Spontaneous decision (you decide now) OR opinion/prediction (no evidence)

### 1. GOING TO = Plans & Intentions 📋

Use **going to** when you've **already decided** to do something - you made the plan before now.

**Examples:**
- "I **am going to study** harder next semester." (I already decided this)
- "We **are going to visit** Paris next summer." (We already planned this)
- "She **is going to buy** a new car." (She already decided)

**Pattern:** Subject + am/is/are + going to + verb

<div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">💡 Remember:</h3>
  <p><strong>Going to</strong> = You already decided before now!</p>
  <p>Think: plans, intentions, things you've already thought about</p>
</div>

<GamePlaceholder id="sentenceBuilder" />

### 2. GOING TO = Predictions with Evidence 👁️

Use **going to** when you can **see evidence** that something will happen - you can see it coming!

**Examples:**
- "Look at those clouds! It **is going to rain**." (You can see the clouds - evidence!)
- "Watch out! That glass **is going to fall**!" (You can see it's about to fall)
- "She **is going to be** late. She's still at home." (Evidence: she's still at home)

**The key:** You can **see** or **know** something that shows what will happen.

### 3. WILL = Spontaneous Decisions ⚡

Use **will** when you **decide something right now** - spontaneous decisions made at the moment of speaking.

**Examples:**
- "I'll help you!" (I decide now, right now)
- "I'll call you later." (I decide now)
- "I think I'll have a coffee." (I decide now)

**Pattern:** Subject + will + verb (or: I'll, you'll, he'll, etc.)

<div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">✅ Remember:</h3>
  <p><strong>Will</strong> = You decide NOW, at this moment!</p>
  <p>Think: spontaneous, immediate decisions</p>
</div>

### 4. WILL = Opinions & Predictions 💭

Use **will** for **opinions** and **predictions** when you don't have clear evidence - you're just guessing or giving your opinion.

**Common phrases:** I think, I hope, I'm sure, probably, maybe

**Examples:**
- "I **think** it **will be** sunny tomorrow." (My opinion - no evidence)
- "I'm sure she **will like** this present." (My opinion)
- "It **will probably** rain later." (Prediction - no clear evidence)
- "I hope you **will enjoy** the party." (Hope/opinion)

**The key:** You're giving your **opinion** or making a **prediction** without clear evidence.

<GamePlaceholder id="fixTheMistake" />

### 5. Comparing Will and Going To 🔄

| Situation | Use | Example |
|-----------|-----|---------|
| **Plan** (decided before) | **Going to** | "I'm going to study tonight." |
| **Spontaneous decision** (decide now) | **Will** | "I'll help you!" |
| **Prediction with evidence** (you can see it) | **Going to** | "It's going to rain!" (clouds) |
| **Prediction/opinion** (no evidence) | **Will** | "I think it will rain." |

**Compare:**
- "I **am going to study** tonight." (Plan - I decided before)
- "I **will study** tonight." (Spontaneous - I decide now)

- "Look! It **is going to rain**!" (Evidence - you see clouds)
- "I think it **will rain**." (Opinion - no evidence)

### 6. Common Mistakes ❌

**Mistake 1:** Using "will" for plans
- ❌ "I will study harder next semester." (If you already decided → going to)
- ✅ "I **am going to study** harder next semester." (Plan)

**Mistake 2:** Using "going to" for spontaneous decisions
- ❌ "I'm going to help you!" (If you decide now → will)
- ✅ "I **will help** you!" (Spontaneous)

**Mistake 3:** Using "will" when you have evidence
- ❌ "Watch out! That will fall!" (You can see it → going to)
- ✅ "Watch out! That **is going to fall**!" (Evidence)

### 7. Questions ❓

**Going to questions:**
- "What **are** you **going to do** tonight?" (Asking about plans)
- "**Are** you **going to come** to the party?" (Asking about intention)

**Will questions:**
- "**Will** you help me?" (Asking for spontaneous decision)
- "Do you think it **will rain**?" (Asking for opinion/prediction)

---

### 🎮 Practice Arena

**🏎️ Grammar Racer: Will or Going To?**
Choose correctly! Plan or spontaneous? Evidence or opinion?
<GamePlaceholder id="grammarRacer" />

### 🎯 Practical Exercise

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border-2 border-green-300">
  <h3 className="font-bold text-green-800 dark:text-green-200 mb-4">📝 Future Decisions</h3>
  <p className="mb-4">Write sentences showing you understand will vs going to:</p>
  <ol className="list-decimal list-inside space-y-2">
    <li>One sentence with "going to" about a plan you've already made</li>
    <li>One sentence with "will" about a spontaneous decision</li>
    <li>One sentence with "going to" about a prediction with evidence</li>
    <li>One sentence with "will" about an opinion/prediction</li>
  </ol>
</div>
`,
    de: `
## Will vs Going To: Pläne vs Vorhersagen 🎯

Sowohl **will** als auch **going to** sprechen über die Zukunft, aber sie werden unterschiedlich verwendet! Der Schlüssel ist zu verstehen, **wann** du etwas entschieden hast und **welche Beweise** du hast.

### Der Kernunterschied

**GOING TO** = Plan/Absicht (du hast vorher entschieden) ODER Vorhersage mit Beweis (du kannst es kommen sehen)
**WILL** = Spontane Entscheidung (du entscheidest jetzt) ODER Meinung/Vorhersage (kein Beweis)

### 1. GOING TO = Pläne & Absichten 📋

Verwende **going to**, wenn du **bereits entschieden** hast, etwas zu tun - du hast den Plan vor jetzt gemacht.

**Beispiele:**
- "I **am going to study** harder next semester." (Ich habe das bereits entschieden)
- "We **are going to visit** Paris next summer." (Wir haben das bereits geplant)
- "She **is going to buy** a new car." (Sie hat bereits entschieden)

**Muster:** Subjekt + am/is/are + going to + Verb

<div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">💡 Merke dir:</h3>
  <p><strong>Going to</strong> = Du hast bereits vor jetzt entschieden!</p>
  <p>Denk: Pläne, Absichten, Dinge, über die du bereits nachgedacht hast</p>
</div>

<GamePlaceholder id="sentenceBuilder" />

### 2. GOING TO = Vorhersagen mit Beweis 👁️

Verwende **going to**, wenn du **Beweise sehen** kannst, dass etwas passieren wird - du kannst es kommen sehen!

**Beispiele:**
- "Look at those clouds! It **is going to rain**." (Du kannst die Wolken sehen - Beweis!)
- "Watch out! That glass **is going to fall**!" (Du kannst sehen, dass es gleich fällt)
- "She **is going to be** late. She's still at home." (Beweis: sie ist noch zu Hause)

**Der Schlüssel:** Du kannst etwas **sehen** oder **wissen**, das zeigt, was passieren wird.

### 3. WILL = Spontane Entscheidungen ⚡

Verwende **will**, wenn du **etwas gerade jetzt entscheidest** - spontane Entscheidungen, die im Moment des Sprechens gemacht werden.

**Beispiele:**
- "I'll help you!" (Ich entscheide jetzt, gerade jetzt)
- "I'll call you later." (Ich entscheide jetzt)
- "I think I'll have a coffee." (Ich entscheide jetzt)

**Muster:** Subjekt + will + Verb (oder: I'll, you'll, he'll, etc.)

<div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">✅ Merke dir:</h3>
  <p><strong>Will</strong> = Du entscheidest JETZT, in diesem Moment!</p>
  <p>Denk: spontan, sofortige Entscheidungen</p>
</div>

### 4. WILL = Meinungen & Vorhersagen 💭

Verwende **will** für **Meinungen** und **Vorhersagen**, wenn du keine klaren Beweise hast - du rätst nur oder gibst deine Meinung.

**Häufige Phrasen:** I think, I hope, I'm sure, probably, maybe

**Beispiele:**
- "I **think** it **will be** sunny tomorrow." (Meine Meinung - kein Beweis)
- "I'm sure she **will like** this present." (Meine Meinung)
- "It **will probably** rain later." (Vorhersage - keine klaren Beweise)
- "I hope you **will enjoy** the party." (Hoffnung/Meinung)

**Der Schlüssel:** Du gibst deine **Meinung** oder machst eine **Vorhersage** ohne klare Beweise.

<GamePlaceholder id="fixTheMistake" />

### 5. Will und Going To vergleichen 🔄

| Situation | Verwendung | Beispiel |
|-----------|------------|----------|
| **Plan** (vorher entschieden) | **Going to** | "I'm going to study tonight." |
| **Spontane Entscheidung** (jetzt entscheiden) | **Will** | "I'll help you!" |
| **Vorhersage mit Beweis** (du kannst es sehen) | **Going to** | "It's going to rain!" (Wolken) |
| **Vorhersage/Meinung** (kein Beweis) | **Will** | "I think it will rain." |

**Vergleiche:**
- "I **am going to study** tonight." (Plan - ich habe vorher entschieden)
- "I **will study** tonight." (Spontan - ich entscheide jetzt)

- "Look! It **is going to rain**!" (Beweis - du siehst Wolken)
- "I think it **will rain**." (Meinung - kein Beweis)

### 6. Häufige Fehler ❌

**Fehler 1:** "Will" für Pläne verwenden
- ❌ "I will study harder next semester." (Wenn du bereits entschieden hast → going to)
- ✅ "I **am going to study** harder next semester." (Plan)

**Fehler 2:** "Going to" für spontane Entscheidungen verwenden
- ❌ "I'm going to help you!" (Wenn du jetzt entscheidest → will)
- ✅ "I **will help** you!" (Spontan)

**Fehler 3:** "Will" verwenden, wenn du Beweise hast
- ❌ "Watch out! That will fall!" (Du kannst es sehen → going to)
- ✅ "Watch out! That **is going to fall**!" (Beweis)

### 7. Fragen ❓

**Going to Fragen:**
- "What **are** you **going to do** tonight?" (Nach Plänen fragen)
- "**Are** you **going to come** to the party?" (Nach Absicht fragen)

**Will Fragen:**
- "**Will** you help me?" (Nach spontaner Entscheidung fragen)
- "Do you think it **will rain**?" (Nach Meinung/Vorhersage fragen)

---

### 🎮 Trainings-Arena

**🏎️ Grammar Racer: Will oder Going To?**
Wähle richtig! Plan oder spontan? Beweis oder Meinung?
<GamePlaceholder id="grammarRacer" />

### 🎯 Praktische Übung

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border-2 border-green-300">
  <h3 className="font-bold text-green-800 dark:text-green-200 mb-4">📝 Zukünftige Entscheidungen</h3>
  <p className="mb-4">Schreibe Sätze, die zeigen, dass du will vs going to verstehst:</p>
  <ol className="list-decimal list-inside space-y-2">
    <li>Ein Satz mit "going to" über einen Plan, den du bereits gemacht hast</li>
    <li>Ein Satz mit "will" über eine spontane Entscheidung</li>
    <li>Ein Satz mit "going to" über eine Vorhersage mit Beweis</li>
    <li>Ein Satz mit "will" über eine Meinung/Vorhersage</li>
  </ol>
</div>
`
  },
  task: {
    de: {
      title: 'Will vs Going To',
      description: 'Zeige, dass du den Unterschied verstehst.',
      checklist: [
        { text: 'Satz mit "going to" über einen Plan', checked: false },
        { text: 'Satz mit "will" über spontane Entscheidung', checked: false },
        { text: 'Satz mit "going to" über Vorhersage mit Beweis', checked: false },
        { text: 'Satz mit "will" über Meinung/Vorhersage', checked: false }
      ]
    },
    en: {
      title: 'Will vs Going To',
      description: 'Show you understand the difference.',
      checklist: [
        { text: 'Sentence with "going to" about a plan', checked: false },
        { text: 'Sentence with "will" about spontaneous decision', checked: false },
        { text: 'Sentence with "going to" about prediction with evidence', checked: false },
        { text: 'Sentence with "will" about opinion/prediction', checked: false }
      ]
    }
  },
  quiz: { de: [], en: [] }
};


