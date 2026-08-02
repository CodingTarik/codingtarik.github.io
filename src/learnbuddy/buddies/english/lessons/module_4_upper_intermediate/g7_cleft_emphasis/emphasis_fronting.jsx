import React from 'react';
import GrammarGame from '../../../components/grammar-games/GrammarGame';

const sentenceBuilderData = [
  {
    prompt: { en: "I ___ like your new haircut — it looks fantastic!", de: "Ich mag deine neue Frisur WIRKLICH — sie sieht fantastisch aus!" },
    words: ["DO", "does", "did", "am"],
    correct: "DO",
    explanation: { en: "Emphatic 'DO' + base verb in present simple: 'I DO like it' = I really like it.", de: "Emphatisches 'DO' + Grundform im Present Simple: 'I DO like it' = Ich mag es wirklich." }
  },
  {
    prompt: { en: "He ___ try to call you, but your phone was off.", de: "Er HAT versucht, dich anzurufen, aber dein Handy war aus." },
    words: ["DID", "does", "do", "was"],
    correct: "DID",
    explanation: { en: "Emphatic 'DID' + base verb in past simple: 'He DID try' = He really tried.", de: "Emphatisches 'DID' + Grundform im Past Simple: 'He DID try' = Er hat es wirklich versucht." }
  },
  {
    prompt: { en: "This I ___ accept — it goes against everything we stand for.", de: "Das kann ich NICHT akzeptieren — es widerspricht allem, wofür wir stehen." },
    words: ["cannot", "can", "do not", "will"],
    correct: "cannot",
    explanation: { en: "Fronting for emphasis: 'This I cannot accept' moves the object to the front for dramatic effect.", de: "Voranstellung zur Betonung: 'This I cannot accept' stellt das Objekt für dramatischen Effekt nach vorne." }
  },
  {
    prompt: { en: "She ___ enjoy the concert, despite what everyone thinks.", de: "Sie HAT das Konzert genossen, trotz dem, was alle denken." },
    words: ["DID", "does", "do", "was"],
    correct: "DID",
    explanation: { en: "'She DID enjoy it' contradicts the assumption she didn't. Emphatic DID stresses truth.", de: "'She DID enjoy it' widerspricht der Annahme, sie hätte es nicht genossen." }
  },
  {
    prompt: { en: "More important ___ the fact that nobody was hurt.", de: "Wichtiger war die Tatsache, dass niemand verletzt wurde." },
    words: ["was", "is", "were", "did"],
    correct: "was",
    explanation: { en: "Fronting the complement: 'More important was the fact...' moves emphasis to the front.", de: "Voranstellung des Prädikativs: 'More important was the fact...' verschiebt die Betonung nach vorne." }
  },
  {
    prompt: { en: "They ___ want to help — please don't doubt their intentions.", de: "Sie WOLLEN wirklich helfen — bitte zweifle nicht an ihren Absichten." },
    words: ["DO", "does", "did", "are"],
    correct: "DO",
    explanation: { en: "Emphatic 'DO' in present tense: 'They DO want to help' = They really want to.", de: "Emphatisches 'DO' in der Gegenwart: 'They DO want to help' = Sie wollen wirklich." }
  }
];

const fixTheMistakeData = [
  {
    sentence: "I does like chocolate, I promise!",
    mistakeIndex: 1,
    correction: "DO",
    explanation: { en: "With 'I/you/we/they', use 'DO' for emphasis, not 'does': 'I DO like chocolate!'", de: "Bei 'I/you/we/they' verwende 'DO' zur Betonung, nicht 'does': 'I DO like chocolate!'" }
  },
  {
    sentence: "She did liked the present very much.",
    mistakeIndex: 2,
    correction: "like",
    explanation: { en: "After emphatic 'DID', use the BASE form: 'She DID like' (not 'liked').", de: "Nach emphatischem 'DID' die GRUNDFORM verwenden: 'She DID like' (nicht 'liked')." }
  },
  {
    sentence: "That I cannot to accept under any circumstances.",
    mistakeIndex: 3,
    correction: "accept",
    explanation: { en: "No 'to' after modal verbs: 'cannot accept' (not 'cannot to accept').", de: "Kein 'to' nach Modalverben: 'cannot accept' (nicht 'cannot to accept')." }
  },
  {
    sentence: "He do tries his best every day.",
    mistakeIndex: 2,
    correction: "try",
    explanation: { en: "With 'he/she/it' use 'DOES' + base form: 'He DOES try' (not 'do tries').", de: "Bei 'he/she/it' verwende 'DOES' + Grundform: 'He DOES try' (nicht 'do tries')." }
  },
  {
    sentence: "Away the bird flied into the sky.",
    mistakeIndex: 3,
    correction: "flew",
    explanation: { en: "Irregular past tense: fly → flew (not 'flied'). 'Away flew the bird...'", de: "Unregelmäßige Vergangenheit: fly → flew (nicht 'flied')." }
  }
];

const grammarRacerData = [
  {
    prompt: "I ___ apologise — I was completely wrong.",
    options: ["DO", "does", "am"],
    correct: "DO",
    explanation: "Emphatic DO with 'I' in present: 'I DO apologise' = I sincerely apologise."
  },
  {
    prompt: "She ___ send the email, but it went to your spam folder.",
    options: ["DID", "does", "has"],
    correct: "DID",
    explanation: "Emphatic DID + base verb: 'She DID send' = She really sent it."
  },
  {
    prompt: "Gone ___ the days of cheap travel.",
    options: ["are", "is", "were"],
    correct: "are",
    explanation: "Fronted complement: 'Gone are the days...' = The days are gone (emphatic/literary)."
  },
  {
    prompt: "Please ___ sit down — you're making me nervous.",
    options: ["DO", "does", "did"],
    correct: "DO",
    explanation: "Emphatic DO in imperatives: 'DO sit down' adds urgency/politeness."
  },
  {
    prompt: "He ___ finish the project on time, contrary to what you believe.",
    options: ["DID", "do", "has"],
    correct: "DID",
    explanation: "Emphatic DID contradicting a belief: 'He DID finish' = He really did finish."
  }
];

export const emphasisFronting = {
  id: 'b2_g15',
  title: {
    en: 'Emphasis with Do/Did & Fronting',
    de: 'Betonung mit Do/Did & Voranstellung'
  },
  description: {
    en: "Add emphasis: 'I DO like it', 'He DID try', 'This I cannot accept.'",
    de: "Betonung hinzufügen: 'I DO like it', 'He DID try', 'This I cannot accept.'"
  },
  components: {
    sentenceBuilder: <GrammarGame type="sentenceBuilder" data={sentenceBuilderData} />,
    fixTheMistake: <GrammarGame type="fixTheMistake" data={fixTheMistakeData} />,
    grammarRacer: <GrammarGame type="grammarRacer" data={grammarRacerData} />
  },
  content: {
    en: `
## Emphasis with Do/Did & Fronting 💪🔊

In English, we have several powerful ways to add **emphasis** to a sentence — to stress that something IS true, to contradict, or to highlight important information. Two key techniques are **emphatic do/did** and **fronting**.

### 1. Emphatic DO / DOES / DID ⚡

Normally, we don't use "do/does/did" in positive sentences. But when we **want to emphasise** that something is true — especially to contradict doubt or denial — we add DO/DOES/DID before the base verb.

| Normal | Emphatic |
|--------|----------|
| "I like your dress." | "I **DO** like your dress!" |
| "She speaks French." | "She **DOES** speak French!" |
| "He tried to help." | "He **DID** try to help!" |

### 2. When to Use Emphatic Do/Did 🎯

**To contradict or correct:**
- "You don't care about me!" — "I **DO** care about you!"
- "She never studies." — "She **DOES** study, actually."
- "He didn't call." — "He **DID** call, but you were asleep."

**To add strong feeling:**
- "I **DO** hope you feel better soon."
- "We **DO** appreciate your help."
- "I **DID** enjoy the party — thank you so much!"

**In polite requests and invitations (imperatives):**
- "**DO** come in!" (= Please come in!)
- "**DO** sit down." (= Please sit down.)
- "**DO** help yourself to some cake."

<div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">📐 Formation Rules</h3>
  <p><strong>Present:</strong> I/you/we/they + <strong>DO</strong> + base verb → "I <strong>DO</strong> like it."</p>
  <p><strong>Present:</strong> he/she/it + <strong>DOES</strong> + base verb → "She <strong>DOES</strong> know."</p>
  <p><strong>Past:</strong> all subjects + <strong>DID</strong> + base verb → "He <strong>DID</strong> try."</p>
  <p>⚠️ The main verb is ALWAYS in its <strong>base form</strong> (no -s, no -ed)!</p>
</div>

<GamePlaceholder id="sentenceBuilder" />

### 3. Fronting for Emphasis 🔄

**Fronting** means moving an element to the **front of the sentence** that normally comes later. This puts strong focus on that element.

**Object fronting (literary/dramatic):**
- Normal: "I cannot accept **this**." → Fronted: "**This** I cannot accept."
- Normal: "I will never forget **that day**." → Fronted: "**That day** I will never forget."
- Normal: "We have seen **much worse**." → Fronted: "**Much worse** we have seen."

**Complement fronting:**
- Normal: "The days of cheap travel **are gone**." → Fronted: "**Gone are** the days of cheap travel."
- Normal: "A tall figure **stood** in the doorway." → Fronted: "**In the doorway stood** a tall figure."
- Normal: "The answer to our problems **lies here**." → Fronted: "**Here lies** the answer to our problems."

**Adjective/adverb fronting:**
- "**More important** was the question of safety."
- "**Equally significant** is the impact on the environment."
- "**Particularly interesting** was his approach to the problem."

### 4. Negative Fronting ➖

When you front a negative expression, **inversion** follows (auxiliary before subject):

| Normal | Fronted + Inverted |
|--------|--------------------|
| "I have **never** seen anything like it." | "**Never have I** seen anything like it." |
| "She **not once** complained." | "**Not once did she** complain." |
| "You should **on no account** open this." | "**On no account should you** open this." |

<div className="bg-amber-50 dark:bg-amber-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">⚠️ Fronting vs. Normal English</h3>
  <p>Fronting is used for <strong>special effect</strong> — in speeches, literature, formal writing, or dramatic conversation. Don't overuse it in everyday speech, or it sounds unnatural!</p>
  <p>✅ Essay: "Particularly noteworthy was the team's dedication."</p>
  <p>❌ Chat with friends: "Particularly noteworthy was the pizza last night." (too formal!)</p>
</div>

### 5. Common Mistakes ❌

- ❌ "I **does** like it." → ✅ "I **DO** like it." (I/you/we/they = DO)
- ❌ "She DID **liked** the film." → ✅ "She DID **like** the film." (base form after DID!)
- ❌ "He **do tries** hard." → ✅ "He **DOES try** hard." (he = DOES + base form)
- ❌ Using fronting in casual texts → ✅ Save fronting for formal/literary contexts

<GamePlaceholder id="fixTheMistake" />

---

### 🎮 Practice Arena
<GamePlaceholder id="grammarRacer" />
`,
    de: `
## Betonung mit Do/Did & Voranstellung 💪🔊

Im Englischen gibt es mehrere wirkungsvolle Wege, einem Satz **Betonung** zu verleihen — um zu betonen, dass etwas WAHR ist, um zu widersprechen oder um wichtige Informationen hervorzuheben. Zwei Schlüsseltechniken sind **emphatisches do/did** und **Voranstellung (Fronting)**.

### 1. Emphatisches DO / DOES / DID ⚡

Normalerweise verwenden wir "do/does/did" nicht in positiven Sätzen. Aber wenn wir **betonen wollen**, dass etwas wahr ist — besonders um Zweifel oder Leugnung zu widersprechen — fügen wir DO/DOES/DID vor das Grundverb ein.

| Normal | Emphatisch |
|--------|------------|
| "I like your dress." | "I **DO** like your dress!" |
| "She speaks French." | "She **DOES** speak French!" |
| "He tried to help." | "He **DID** try to help!" |

### 2. Wann verwendet man emphatisches Do/Did? 🎯

**Um zu widersprechen oder zu korrigieren:**
- "You don't care about me!" — "I **DO** care about you!"
- "She never studies." — "She **DOES** study, actually."
- "He didn't call." — "He **DID** call, but you were asleep."

**Um starke Gefühle auszudrücken:**
- "I **DO** hope you feel better soon."
- "We **DO** appreciate your help."
- "I **DID** enjoy the party — thank you so much!"

**In höflichen Bitten und Einladungen (Imperative):**
- "**DO** come in!" (= Bitte komm herein!)
- "**DO** sit down." (= Bitte setz dich.)
- "**DO** help yourself to some cake."

<div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">📐 Bildungsregeln</h3>
  <p><strong>Gegenwart:</strong> I/you/we/they + <strong>DO</strong> + Grundform → "I <strong>DO</strong> like it."</p>
  <p><strong>Gegenwart:</strong> he/she/it + <strong>DOES</strong> + Grundform → "She <strong>DOES</strong> know."</p>
  <p><strong>Vergangenheit:</strong> alle Subjekte + <strong>DID</strong> + Grundform → "He <strong>DID</strong> try."</p>
  <p>⚠️ Das Hauptverb steht IMMER in der <strong>Grundform</strong> (kein -s, kein -ed)!</p>
</div>

<GamePlaceholder id="sentenceBuilder" />

### 3. Voranstellung (Fronting) zur Betonung 🔄

**Voranstellung** bedeutet, ein Element an den **Satzanfang** zu verschieben, das normalerweise später kommt. Dadurch wird dieses Element stark fokussiert.

**Objekt-Voranstellung (literarisch/dramatisch):**
- Normal: "I cannot accept **this**." → Vorangestellt: "**This** I cannot accept."
- Normal: "I will never forget **that day**." → Vorangestellt: "**That day** I will never forget."
- Normal: "We have seen **much worse**." → Vorangestellt: "**Much worse** we have seen."

**Prädikativ-Voranstellung:**
- Normal: "The days of cheap travel **are gone**." → Vorangestellt: "**Gone are** the days of cheap travel."
- Normal: "A tall figure **stood** in the doorway." → Vorangestellt: "**In the doorway stood** a tall figure."
- Normal: "The answer to our problems **lies here**." → Vorangestellt: "**Here lies** the answer to our problems."

**Adjektiv/Adverb-Voranstellung:**
- "**More important** was the question of safety."
- "**Equally significant** is the impact on the environment."
- "**Particularly interesting** was his approach to the problem."

### 4. Negative Voranstellung ➖

Wenn du einen negativen Ausdruck voranstellst, folgt **Inversion** (Hilfsverb vor Subjekt):

| Normal | Vorangestellt + Invertiert |
|--------|----------------------------|
| "I have **never** seen anything like it." | "**Never have I** seen anything like it." |
| "She **not once** complained." | "**Not once did she** complain." |
| "You should **on no account** open this." | "**On no account should you** open this." |

<div className="bg-amber-50 dark:bg-amber-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">⚠️ Voranstellung vs. normales Englisch</h3>
  <p>Voranstellung wird für <strong>besondere Wirkung</strong> verwendet — in Reden, Literatur, formeller Schriftsprache oder dramatischer Konversation. Verwende es nicht zu oft in der Alltagssprache, sonst klingt es unnatürlich!</p>
  <p>✅ Aufsatz: "Particularly noteworthy was the team's dedication."</p>
  <p>❌ Chat mit Freunden: "Particularly noteworthy was the pizza last night." (zu formell!)</p>
</div>

### 5. Häufige Fehler ❌

- ❌ "I **does** like it." → ✅ "I **DO** like it." (I/you/we/they = DO)
- ❌ "She DID **liked** the film." → ✅ "She DID **like** the film." (Grundform nach DID!)
- ❌ "He **do tries** hard." → ✅ "He **DOES try** hard." (he = DOES + Grundform)
- ❌ Voranstellung in lockeren Textnachrichten → ✅ Voranstellung für formelle/literarische Kontexte aufheben

<GamePlaceholder id="fixTheMistake" />

---

### 🎮 Trainings-Arena
<GamePlaceholder id="grammarRacer" />
`
  }
};
