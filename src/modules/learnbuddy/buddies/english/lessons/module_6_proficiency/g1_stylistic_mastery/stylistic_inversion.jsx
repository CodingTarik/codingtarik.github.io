import React from 'react';
import GrammarGame from '../../../components/grammar-games/GrammarGame';

const sentenceBuilderData = [
  {
    prompt: { en: "Not only ___ she speak five languages, but she also writes poetry in all of them.", de: "Nicht nur spricht sie fünf Sprachen, sie schreibt auch Gedichte in allen." },
    words: ["does", "did", "has", "is"],
    correct: "does",
    explanation: { en: "'Not only + auxiliary + subject' triggers subject-auxiliary inversion for rhetorical emphasis.", de: "'Not only + Hilfsverb + Subjekt' löst eine Subjekt-Hilfsverb-Inversion zur rhetorischen Betonung aus." }
  },
  {
    prompt: { en: "Rarely ___ one encounter such eloquence in modern political discourse.", de: "Selten begegnet man solcher Eloquenz im modernen politischen Diskurs." },
    words: ["does", "has", "is", "was"],
    correct: "does",
    explanation: { en: "Negative adverbs like 'rarely' at the start of a sentence trigger inversion: 'Rarely + does + subject + verb'.", de: "Negative Adverbien wie 'rarely' am Satzanfang lösen Inversion aus: 'Rarely + does + Subjekt + Verb'." }
  },
  {
    prompt: { en: "Had I ___ about the consequences, I would never have agreed to the proposal.", de: "Hätte ich von den Konsequenzen gewusst, hätte ich dem Vorschlag nie zugestimmt." },
    words: ["known", "knew", "know", "knowing"],
    correct: "known",
    explanation: { en: "Conditional inversion: 'Had I known' replaces 'If I had known' for a more formal, literary register.", de: "Konditionale Inversion: 'Had I known' ersetzt 'If I had known' für ein formelleres, literarisches Register." }
  },
  {
    prompt: { en: "So profound ___ the impact of the discovery that it reshaped the entire field.", de: "So tiefgreifend war der Einfluss der Entdeckung, dass sie das gesamte Fachgebiet umgestaltete." },
    words: ["was", "is", "had", "has"],
    correct: "was",
    explanation: { en: "'So + adjective + auxiliary + subject' is a common pattern for emphatic inversion in literary writing.", de: "'So + Adjektiv + Hilfsverb + Subjekt' ist ein gängiges Muster für emphatische Inversion in literarischer Sprache." }
  },
  {
    prompt: { en: "Under no circumstances ___ the committee to override the decision of the tribunal.", de: "Unter keinen Umständen darf das Komitee die Entscheidung des Tribunals aufheben." },
    words: ["is", "was", "has", "does"],
    correct: "is",
    explanation: { en: "'Under no circumstances' is a negative adverbial that demands inversion for formal emphasis.", de: "'Under no circumstances' ist eine negative Adverbialbestimmung, die Inversion für formale Betonung verlangt." }
  },
  {
    prompt: { en: "Little ___ they realize that their seemingly minor decision would alter history.", de: "Kaum war ihnen bewusst, dass ihre scheinbar unbedeutende Entscheidung die Geschichte verändern würde." },
    words: ["did", "do", "had", "were"],
    correct: "did",
    explanation: { en: "'Little did + subject + verb' is a classic literary inversion expressing that someone was unaware of something significant.", de: "'Little did + Subjekt + Verb' ist eine klassische literarische Inversion, die ausdrückt, dass jemand sich einer bedeutsamen Sache nicht bewusst war." }
  }
];

const fixTheMistakeData = [
  {
    sentence: "Not only he passed the exam, but he also received the highest score.",
    mistakeIndex: 2,
    correction: "did he pass",
    explanation: { en: "'Not only' requires subject-auxiliary inversion: 'Not only did he pass…', not 'Not only he passed…'.", de: "'Not only' erfordert Subjekt-Hilfsverb-Inversion: 'Not only did he pass…', nicht 'Not only he passed…'." }
  },
  {
    sentence: "Seldom I have seen such a breathtaking performance on stage.",
    mistakeIndex: 1,
    correction: "have I",
    explanation: { en: "After negative adverbs like 'seldom', the auxiliary must come before the subject: 'Seldom have I seen…'.", de: "Nach negativen Adverbien wie 'seldom' muss das Hilfsverb vor dem Subjekt stehen: 'Seldom have I seen…'." }
  },
  {
    sentence: "Were I know the answer, I would have told you immediately.",
    mistakeIndex: 2,
    correction: "to know",
    explanation: { en: "Subjunctive inversion with 'were' requires the infinitive: 'Were I to know…', not 'Were I know…'.", de: "Konjunktiv-Inversion mit 'were' erfordert den Infinitiv: 'Were I to know…', nicht 'Were I know…'." }
  },
  {
    sentence: "No sooner the rain had stopped than the sun broke through the clouds.",
    mistakeIndex: 2,
    correction: "had the rain stopped",
    explanation: { en: "'No sooner' triggers inversion: 'No sooner had the rain stopped than…'. The auxiliary precedes the subject.", de: "'No sooner' löst Inversion aus: 'No sooner had the rain stopped than…'. Das Hilfsverb steht vor dem Subjekt." }
  },
  {
    sentence: "Only after he had left did he realized his mistake.",
    mistakeIndex: 7,
    correction: "realize",
    explanation: { en: "After 'did' in an inverted structure, use the bare infinitive: 'did he realize', not 'did he realized'.", de: "Nach 'did' in einer invertierten Struktur wird der bloße Infinitiv verwendet: 'did he realize', nicht 'did he realized'." }
  }
];

const grammarRacerData = [
  {
    prompt: "Never before ___ such chaos erupted in the parliament.",
    options: ["had", "has", "did"],
    correct: "had",
    explanation: "'Never before had + subject + past participle' is the standard inverted pattern for past perfect."
  },
  {
    prompt: "Only when the lights went out ___ we appreciate the silence.",
    options: ["did", "do", "had"],
    correct: "did",
    explanation: "'Only when…' triggers inversion in the main clause: 'did we appreciate'."
  },
  {
    prompt: "Scarcely ___ he finished speaking when the audience erupted in applause.",
    options: ["had", "has", "did"],
    correct: "had",
    explanation: "'Scarcely had + subject + past participle…when' is the standard pattern for near-simultaneous past events."
  },
  {
    prompt: "___ it not been for your help, we would have failed.",
    options: ["Had", "Has", "Was"],
    correct: "Had",
    explanation: "'Had it not been for…' is formal conditional inversion replacing 'If it had not been for…'."
  },
  {
    prompt: "At no point ___ the defendant show any remorse during the trial.",
    options: ["did", "does", "has"],
    correct: "did",
    explanation: "'At no point' is a negative adverbial triggering inversion: 'At no point did + subject + verb'."
  }
];

export const stylisticInversion = {
  id: 'c2_g1',
  title: {
    en: 'Stylistic Inversion & Literary Devices',
    de: 'Stilistische Inversion & Literarische Mittel'
  },
  description: {
    en: "Master inversion for rhetorical effect, literary writing, and poetic style at the highest level of English proficiency.",
    de: "Meistere Inversion für rhetorische Wirkung, literarisches Schreiben und poetischen Stil auf höchstem Sprachniveau."
  },
  components: {
    sentenceBuilder: <GrammarGame type="sentenceBuilder" data={sentenceBuilderData} />,
    fixTheMistake: <GrammarGame type="fixTheMistake" data={fixTheMistakeData} />,
    grammarRacer: <GrammarGame type="grammarRacer" data={grammarRacerData} />
  },
  content: {
    en: `
## Stylistic Inversion & Literary Devices 🎭

At the C2 level, you move beyond simply understanding inversion to **wielding it as a rhetorical tool**. Inversion — the reversal of normal subject-verb order — is one of the most powerful devices for achieving emphasis, creating rhythm, and elevating the register of your writing.

### 1. Why Inversion Matters at C2 📖

In standard English, the canonical word order is Subject-Verb-Object (SVO). Inversion deliberately disrupts this order to achieve specific effects:

- **Emphasis:** Drawing attention to a particular element
- **Formality:** Elevating the register of a text
- **Rhythm:** Creating a cadence reminiscent of oratory or poetry
- **Cohesion:** Linking ideas more tightly across sentences

Consider the difference:
- Standard: "I have never seen such beauty." (Neutral, everyday)
- Inverted: "**Never have I seen** such beauty." (Dramatic, emphatic, literary)

### 2. Negative Adverbial Inversion 🚫

When a **negative or restrictive adverbial** is fronted (placed at the beginning of a sentence), subject-auxiliary inversion is triggered.

**Common triggers:**

| Adverbial | Example |
|-----------|---------|
| Never (before) | "Never before **had** the world **witnessed** such a spectacle." |
| Rarely / Seldom | "Rarely **does** one **find** such honesty in politics." |
| Hardly / Scarcely | "Hardly **had** she **sat down** when the phone rang." |
| Little | "Little **did** they **know** what awaited them." |
| Not only… but also | "Not only **did** he **win**, but he also broke the record." |
| At no point / Under no circumstances | "At no point **was** the safety of passengers **compromised**." |
| On no account / In no way | "On no account **should** you **reveal** this information." |
| No sooner… than | "No sooner **had** we **arrived** than it began to rain." |

<div className="bg-amber-50 dark:bg-amber-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">⚠️ Key Nuance</h3>
  <p>'Hardly/Scarcely…when' and 'No sooner…than' describe two events in rapid succession. The inversion goes in the <strong>first</strong> clause (past perfect), while the second clause uses simple past:</p>
  <ul className="list-disc list-inside space-y-1">
    <li>"Hardly <strong>had</strong> I <strong>closed</strong> my eyes <strong>when</strong> the alarm went off."</li>
    <li>"No sooner <strong>had</strong> we <strong>left</strong> <strong>than</strong> it started raining."</li>
  </ul>
</div>

<GamePlaceholder id="sentenceBuilder" />

### 3. Conditional Inversion (Without 'If') 🔄

In formal and literary English, the word **'if'** can be omitted from conditional sentences by inverting the subject and auxiliary:

| Standard Conditional | Inverted Form |
|---------------------|---------------|
| If I had known… | **Had** I known… |
| If she were here… | **Were** she here… |
| If it should happen… | **Should** it happen… |

This pattern is especially common in:
- Legal documents: "**Should** the parties fail to agree…"
- Literary prose: "**Had** he but known what fate had in store…"
- Formal speeches: "**Were** we to abandon this principle, the consequences would be dire."

### 4. 'So/Such…that' Inversion ✨

When **'so' + adjective** or **'such' + noun** is fronted for emphasis:

- "**So severe was** the storm that all flights were cancelled."
- "**Such was** the confusion that nobody knew what to do."
- "**So eloquently did** she speak that the entire hall fell silent."

### 5. Place Adverbial Inversion 🗺️

In literary and descriptive writing, place adverbials can trigger **full inversion** (the entire verb comes before the subject — not just the auxiliary):

- "**Down the hill rolled** the enormous boulder." (Not: "Down the hill the enormous boulder rolled.")
- "**Through the fog emerged** a ghostly figure."
- "**In the corner of the room sat** an old man with a pipe."

<div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">💡 Literary Effect</h3>
  <p>This type of inversion is a hallmark of descriptive prose, journalism, and storytelling. It creates a cinematic quality — the reader's eye follows the spatial cue before discovering the subject.</p>
</div>

### 6. Poetic & Archaic Inversion 📜

In poetry and elevated prose, inversion can be used purely for **aesthetic or metrical reasons**:

- "**Deep into** that darkness peering, long I stood there wondering, fearing." (Poe)
- "**With this ring** I thee wed." (ceremonial)
- "**Blessed are** the meek, for they shall inherit the earth." (biblical)

### 7. Common Mistakes ❌

**Mistake 1:** Inverting when the negative element is not fronted.
- ❌ "I never have seen such beauty." (Inversion without fronting — ungrammatical in this register)
- ✅ "Never have I seen such beauty." OR "I have never seen such beauty."

**Mistake 2:** Double inversion or forgetting to use the bare infinitive after 'did'.
- ❌ "Not only did she passed the exam…"
- ✅ "Not only did she pass the exam…"

**Mistake 3:** Using inversion in informal speech (where it sounds awkward or pretentious).
- ❌ (at a coffee shop) "Rarely do I order a latte."
- ✅ "I rarely order a latte." (Save inversion for formal or literary contexts.)

<GamePlaceholder id="fixTheMistake" />

<div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">🎯 Summary</h3>
  <ul className="list-disc list-inside space-y-1">
    <li><strong>Negative adverbial inversion</strong> — Never, Rarely, Seldom, Hardly, No sooner…</li>
    <li><strong>Conditional inversion</strong> — Had I known, Were she here, Should it happen…</li>
    <li><strong>So/Such inversion</strong> — So great was…, Such was the impact…</li>
    <li><strong>Place adverbial inversion</strong> — Down the road came…, In the corner sat…</li>
    <li><strong>Poetic inversion</strong> — For rhythm, emphasis, and beauty in elevated prose.</li>
  </ul>
</div>

---

### 🎮 Practice Arena

**🏎️ Grammar Racer: Inversion Mastery**
<GamePlaceholder id="grammarRacer" />

### 🎯 Practical Exercise

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border-2 border-green-300">
  <h3 className="font-bold text-green-800 dark:text-green-200 mb-4">📝 Transform these sentences using inversion:</h3>
  <ol className="list-decimal list-inside space-y-2">
    <li>"I have never witnessed such a remarkable display of courage." → Never…</li>
    <li>"If the government were to intervene, the crisis might be averted." → Were…</li>
    <li>"The damage was so extensive that the building had to be demolished." → So…</li>
    <li>"She had hardly begun her speech when the fire alarm went off." → Hardly…</li>
    <li>"A lone figure stood at the end of the pier." → At the end of the pier…</li>
  </ol>
</div>
`,
    de: `
## Stilistische Inversion & Literarische Mittel 🎭

Auf C2-Niveau geht es nicht mehr nur darum, Inversionen zu verstehen — Sie lernen, sie als **rhetorisches Werkzeug einzusetzen**. Inversion — die Umkehrung der normalen Subjekt-Verb-Reihenfolge — ist eines der mächtigsten Stilmittel, um Betonung zu erzeugen, Rhythmus zu schaffen und das Register Ihres Schreibens zu erhöhen.

### 1. Warum Inversion auf C2-Niveau wichtig ist 📖

Im Standardenglischen ist die kanonische Wortstellung Subjekt-Verb-Objekt (SVO). Inversion durchbricht diese Reihenfolge bewusst, um bestimmte Effekte zu erzielen:

- **Betonung:** Die Aufmerksamkeit auf ein bestimmtes Element lenken
- **Formalität:** Das Register eines Textes erhöhen
- **Rhythmus:** Einen Klang erzeugen, der an Redekunst oder Poesie erinnert
- **Kohäsion:** Ideen über Satzgrenzen hinweg enger verknüpfen

Beachten Sie den Unterschied:
- Standard: "I have never seen such beauty." (Neutral, alltäglich)
- Invertiert: "**Never have I seen** such beauty." (Dramatisch, emphatisch, literarisch)

### 2. Negative Adverbialinversion 🚫

Wenn ein **negatives oder einschränkendes Adverbial** vorangestellt wird, wird eine Subjekt-Hilfsverb-Inversion ausgelöst.

**Häufige Auslöser:**

| Adverbial | Beispiel |
|-----------|----------|
| Never (before) | "Never before **had** the world **witnessed** such a spectacle." |
| Rarely / Seldom | "Rarely **does** one **find** such honesty in politics." |
| Hardly / Scarcely | "Hardly **had** she **sat down** when the phone rang." |
| Little | "Little **did** they **know** what awaited them." |
| Not only… but also | "Not only **did** he **win**, but he also broke the record." |
| At no point | "At no point **was** the safety of passengers **compromised**." |
| No sooner… than | "No sooner **had** we **arrived** than it began to rain." |

<div className="bg-amber-50 dark:bg-amber-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">⚠️ Wichtige Nuance</h3>
  <p>'Hardly/Scarcely…when' und 'No sooner…than' beschreiben zwei Ereignisse in rascher Folge. Die Inversion steht im <strong>ersten</strong> Teilsatz (Past Perfect), während der zweite Teilsatz Simple Past verwendet:</p>
  <ul className="list-disc list-inside space-y-1">
    <li>"Hardly <strong>had</strong> I <strong>closed</strong> my eyes <strong>when</strong> the alarm went off."</li>
    <li>"No sooner <strong>had</strong> we <strong>left</strong> <strong>than</strong> it started raining."</li>
  </ul>
</div>

<GamePlaceholder id="sentenceBuilder" />

### 3. Konditionale Inversion (ohne 'If') 🔄

Im formellen und literarischen Englisch kann das Wort **'if'** durch Inversion von Subjekt und Hilfsverb ersetzt werden:

| Standard-Konditionalsatz | Invertierte Form |
|--------------------------|------------------|
| If I had known… | **Had** I known… |
| If she were here… | **Were** she here… |
| If it should happen… | **Should** it happen… |

Dieses Muster ist besonders häufig in:
- Rechtsdokumenten: "**Should** the parties fail to agree…"
- Literarischer Prosa: "**Had** he but known what fate had in store…"
- Formellen Reden: "**Were** we to abandon this principle, the consequences would be dire."

### 4. 'So/Such…that'-Inversion ✨

Wenn **'so' + Adjektiv** oder **'such' + Substantiv** zur Betonung vorangestellt wird:

- "**So severe was** the storm that all flights were cancelled."
- "**Such was** the confusion that nobody knew what to do."
- "**So eloquently did** she speak that the entire hall fell silent."

### 5. Ortsadverbial-Inversion 🗺️

In literarischem und beschreibendem Schreiben können Ortsadverbiale eine **vollständige Inversion** auslösen:

- "**Down the hill rolled** the enormous boulder."
- "**Through the fog emerged** a ghostly figure."
- "**In the corner of the room sat** an old man with a pipe."

<div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">💡 Literarischer Effekt</h3>
  <p>Diese Art der Inversion ist ein Markenzeichen beschreibender Prosa, des Journalismus und des Geschichtenerzählens. Sie erzeugt eine filmische Qualität — das Auge des Lesers folgt dem räumlichen Hinweis, bevor es das Subjekt entdeckt.</p>
</div>

### 6. Poetische & archaische Inversion 📜

In der Poesie und gehobenen Prosa kann Inversion rein aus **ästhetischen oder metrischen Gründen** verwendet werden:

- "**Deep into** that darkness peering, long I stood there wondering, fearing." (Poe)
- "**With this ring** I thee wed." (zeremoniell)
- "**Blessed are** the meek, for they shall inherit the earth." (biblisch)

### 7. Häufige Fehler ❌

**Fehler 1:** Inversion anwenden, wenn das negative Element nicht vorangestellt ist.
- ❌ "I never have seen such beauty." (Inversion ohne Voranstellung — ungrammatisch in diesem Register)
- ✅ "Never have I seen such beauty." ODER "I have never seen such beauty."

**Fehler 2:** Doppelte Inversion oder Vergessen des Infinitivs nach 'did'.
- ❌ "Not only did she passed the exam…"
- ✅ "Not only did she pass the exam…"

**Fehler 3:** Inversion in informeller Sprache verwenden (wo es unbeholfen oder prätentiös klingt).
- ❌ (im Café) "Rarely do I order a latte."
- ✅ "I rarely order a latte." (Inversion für formelle oder literarische Kontexte aufsparen.)

<GamePlaceholder id="fixTheMistake" />

<div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">🎯 Zusammenfassung</h3>
  <ul className="list-disc list-inside space-y-1">
    <li><strong>Negative Adverbialinversion</strong> — Never, Rarely, Seldom, Hardly, No sooner…</li>
    <li><strong>Konditionale Inversion</strong> — Had I known, Were she here, Should it happen…</li>
    <li><strong>So/Such-Inversion</strong> — So great was…, Such was the impact…</li>
    <li><strong>Ortsadverbial-Inversion</strong> — Down the road came…, In the corner sat…</li>
    <li><strong>Poetische Inversion</strong> — Für Rhythmus, Betonung und Schönheit in gehobener Prosa.</li>
  </ul>
</div>

---

### 🎮 Trainings-Arena

**🏎️ Grammar Racer: Inversions-Meisterschaft**
<GamePlaceholder id="grammarRacer" />

### 🎯 Praktische Übung

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border-2 border-green-300">
  <h3 className="font-bold text-green-800 dark:text-green-200 mb-4">📝 Wandeln Sie diese Sätze mit Inversion um:</h3>
  <ol className="list-decimal list-inside space-y-2">
    <li>"I have never witnessed such a remarkable display of courage." → Never…</li>
    <li>"If the government were to intervene, the crisis might be averted." → Were…</li>
    <li>"The damage was so extensive that the building had to be demolished." → So…</li>
    <li>"She had hardly begun her speech when the fire alarm went off." → Hardly…</li>
    <li>"A lone figure stood at the end of the pier." → At the end of the pier…</li>
  </ol>
</div>
`
  }
};
