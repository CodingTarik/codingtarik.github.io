import React from 'react';
import GrammarGame from '../../../components/grammar-games/GrammarGame';

const sentenceBuilderData = [
  {
    prompt: { en: "So there I was, sitting in the cafe, when this guy ___ up to me and starts talking.", de: "Da saß ich also im Café, als dieser Typ auf mich zukommt und anfängt zu reden." },
    words: ["comes", "came", "has come", "was coming"],
    correct: "comes",
    explanation: { en: "Historical present: using present tense to narrate past events makes the story more vivid and immediate.", de: "Historisches Präsens: Die Verwendung der Gegenwart für vergangene Ereignisse macht die Geschichte lebendiger." }
  },
  {
    prompt: { en: "She ___ going to tell him the truth, but she changed her mind at the last moment.", de: "Sie hatte vorgehabt, ihm die Wahrheit zu sagen, aber sie änderte ihre Meinung im letzten Moment." },
    words: ["was", "is", "had been", "would be"],
    correct: "was",
    explanation: { en: "'Was going to' = future in the past. It describes an intention that existed in the past but wasn't fulfilled.", de: "'Was going to' = Zukunft in der Vergangenheit. Es beschreibt eine Absicht, die in der Vergangenheit bestand." }
  },
  {
    prompt: { en: "When I was a child, my grandmother ___ tell us stories every evening before bed.", de: "Als ich ein Kind war, pflegte meine Großmutter uns jeden Abend vor dem Schlafengehen Geschichten zu erzählen." },
    words: ["would", "used to", "will", "was"],
    correct: "would",
    explanation: { en: "'Would + verb' for repeated past habits — emphasizes the habitual/nostalgic nature of the action. Similar to 'used to' but more literary.", de: "'Would + Verb' für wiederholte vergangene Gewohnheiten — betont die gewohnheitsmäßige/nostalgische Natur." }
  },
  {
    prompt: { en: "Scientists ___ discovered a new species of deep-sea fish in the Pacific Ocean.", de: "Wissenschaftler haben eine neue Art von Tiefseefischen im Pazifischen Ozean entdeckt." },
    words: ["have", "had", "are", "were"],
    correct: "have",
    explanation: { en: "Present perfect in news: 'Scientists have discovered...' reports a recent event with current relevance — standard in news headlines and reports.", de: "Perfekt in Nachrichten: 'Scientists have discovered...' berichtet ein aktuelles Ereignis mit gegenwärtiger Relevanz." }
  },
  {
    prompt: { en: "The company ___ to announce the merger the following week, but the deal fell through.", de: "Das Unternehmen sollte die Fusion in der folgenden Woche bekanntgeben, aber der Deal scheiterte." },
    words: ["was", "is", "has been", "will be"],
    correct: "was",
    explanation: { en: "'Was to announce' = formal future in the past, indicating a planned/scheduled event that didn't happen.", de: "'Was to announce' = formelle Zukunft in der Vergangenheit, zeigt ein geplantes Ereignis an." }
  }
];

const fixTheMistakeData = [
  {
    sentence: "When I was young, I would live in a small village near the coast.",
    mistakeIndex: 5,
    correction: "used to live",
    explanation: { en: "'Would' is only for repeated actions/habits, NOT for states. For states (live, be, know, like), use 'used to': 'I used to live...'", de: "'Would' ist nur für wiederholte Handlungen, NICHT für Zustände. Für Zustände verwende 'used to': 'I used to live...'" }
  },
  {
    sentence: "Breaking news: A major earthquake struck central Italy this morning.",
    mistakeIndex: 5,
    correction: "has struck",
    explanation: { en: "In news reporting, use present perfect for recent events: 'has struck' (not past simple 'struck') to emphasize current relevance.", de: "In Nachrichtenberichten verwendet man Perfekt für aktuelle Ereignisse: 'has struck' statt 'struck'." }
  },
  {
    sentence: "She was about to leaving when the phone rang.",
    mistakeIndex: 4,
    correction: "leave",
    explanation: { en: "'Be about to' + base verb (not -ing): 'She was about to leave...' This structure describes an imminent action in the past.", de: "'Be about to' + Grundform (nicht -ing): 'She was about to leave...'" }
  },
  {
    sentence: "Every summer as children, we would be happy and would know all the neighbors.",
    mistakeIndex: 6,
    correction: "were",
    explanation: { en: "'Would' cannot be used for past states (be, know, have). Use past simple: 'we were happy and knew all the neighbors'.", de: "'Would' kann nicht für vergangene Zustände verwendet werden (be, know, have). Verwende Past Simple." }
  }
];

const grammarRacerData = [
  {
    prompt: "So I'm walking down the street and suddenly this dog ___ right at me!",
    options: ["runs", "ran", "was running"],
    correct: "runs",
    explanation: "Historical present: 'runs' makes the narration vivid, as if happening now."
  },
  {
    prompt: "They ___ going to move to Spain, but then the pandemic started.",
    options: ["were", "are", "had been"],
    correct: "were",
    explanation: "'Were going to' = unfulfilled future intention viewed from the past."
  },
  {
    prompt: "On Sundays, my father ___ take us fishing at the lake.",
    options: ["would", "will", "should"],
    correct: "would",
    explanation: "'Would' for repeated past habits — nostalgic, literary tone."
  },
  {
    prompt: "The president ___ arrived in Berlin for the summit.",
    options: ["has", "had", "is"],
    correct: "has",
    explanation: "Present perfect in news: 'has arrived' reports a recent, currently relevant event."
  }
];

export const tenseAspectNuances = {
  id: 'c1_g12',
  title: {
    en: 'Advanced Tense & Aspect Nuances',
    de: 'Fortgeschrittene Tempus- & Aspekt-Nuancen'
  },
  description: {
    en: "Master historical present, future in the past, habitual would vs used to, and present perfect in news.",
    de: "Historisches Präsens, Zukunft in der Vergangenheit, habituelles would vs used to und Perfekt in Nachrichten meistern."
  },
  components: {
    sentenceBuilder: <GrammarGame type="sentenceBuilder" data={sentenceBuilderData} />,
    fixTheMistake: <GrammarGame type="fixTheMistake" data={fixTheMistakeData} />,
    grammarRacer: <GrammarGame type="grammarRacer" data={grammarRacerData} />,
  },
  content: {
    en: `
## Advanced Tense & Aspect Nuances ⏰🔮

At C1 level, tense choice isn't just about "when" something happened — it's about **perspective, narrative style, and pragmatic effect**. Master these nuances to sound truly advanced.

### 1. The Historical Present 📖

Using **present tense to narrate past events** makes storytelling vivid and engaging:

- "So I'm sitting in the cafe, right? And this guy **comes** up to me and **says**, 'Excuse me, aren't you...?'"
- "In 1969, Armstrong **steps** onto the lunar surface and **declares**: 'One small step for man...'"
- "Shakespeare **writes** Hamlet around 1600, exploring themes of revenge and mortality."

<div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">💡 When to use the historical present:</h3>
  <p>• <strong>Informal storytelling:</strong> "So then he goes... and she says..."</p>
  <p>• <strong>Academic writing:</strong> "Chomsky (1957) argues that..." (for citing scholars)</p>
  <p>• <strong>News headlines:</strong> "Prime Minister visits flood-affected areas"</p>
  <p>• <strong>Sports commentary:</strong> "He passes to Rodriguez, who shoots... GOAL!"</p>
</div>

### 2. Future in the Past 🔙➡️

Describing **future plans/intentions as they were seen from a past moment**:

| Structure | Example | Meaning |
|---|---|---|
| **was going to** | She **was going to** call you. | She intended to call (but didn't) |
| **was about to** | I **was about to** leave when... | I was on the verge of leaving |
| **was to** | The meeting **was to** take place... | It was scheduled/planned |
| **would** (reported) | He said he **would** help. | He expressed future intention |

- "They **were going to** announce the merger, but negotiations collapsed."
- "She **was about to** reveal the truth when the power went out."
- "The event **was to** be held outdoors, but rain forced a change of venue."

### 3. Habitual "Would" vs "Used to" 🔄

Both describe past habits, but with important differences:

| | Would | Used to |
|---|---|---|
| **Repeated actions** | ✅ "She **would** always sing..." | ✅ "She **used to** sing..." |
| **Past states** | ❌ "She would be tall..." | ✅ "She **used to** be tall..." |
| **Tone** | Nostalgic, literary | Neutral, factual |
| **First mention** | ❌ (needs context first) | ✅ Can introduce the topic |

<div className="bg-amber-50 dark:bg-amber-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">⚠️ Critical rule:</h3>
  <p><strong>"Would"</strong> can ONLY be used for <strong>repeated actions</strong>, NOT for states.</p>
  <p>❌ "I <strong>would</strong> live in London." (state)</p>
  <p>✅ "I <strong>used to</strong> live in London." (state)</p>
  <p>✅ "I <strong>would</strong> walk to school every day." (repeated action)</p>
  <p>Also, "would" needs a past time context already established. "Used to" can introduce new information.</p>
</div>

<GamePlaceholder id="sentenceBuilder" />

### 4. Present Perfect in News 📰

News English uses the present perfect to report **recent events with current relevance**:

- "**A massive earthquake has struck** central Turkey." (just happened, still relevant)
- "**The president has arrived** in Tokyo for the G7 summit." (recent, important now)
- "**Scientists have discovered** a new treatment for malaria." (recent finding, current impact)

After the headline/lead, news reports typically **switch to past simple** for details:
- "A massive earthquake **has struck** central Turkey. The quake **hit** at 4:17 a.m. local time and **measured** 7.8 on the Richter scale."

### 5. Other Nuances 🎭

**Present continuous for annoying habits:**
- "He's **always** leaving his dirty dishes in the sink!" (irritation)

**Past continuous for atmosphere/setting:**
- "The sun **was setting**, birds **were singing**, and she **was sitting** on the porch..." (scene-setting)

**Future perfect for looking back from a future point:**
- "By 2030, the company **will have** expanded into 50 countries."

### 6. Common Mistakes ❌

**Mistake 1:** Using "would" for past states.
- ❌ "I **would** know all my neighbors when I was young."
- ✅ "I **used to** know all my neighbors when I was young."

**Mistake 2:** Past simple instead of present perfect in news.
- ❌ "Breaking: A fire **destroyed** the factory." (sounds finished, less urgent)
- ✅ "Breaking: A fire **has destroyed** the factory." (current relevance)

**Mistake 3:** "Was about to" + -ing.
- ❌ "She was about to **leaving**."
- ✅ "She was about to **leave**." (base verb after "to")

<GamePlaceholder id="fixTheMistake" />

<div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">🎯 Summary:</h3>
  <ul className="list-disc list-inside space-y-1">
    <li><strong>Historical present:</strong> Present tense for vivid past narration</li>
    <li><strong>Future in the past:</strong> was going to / was about to / was to</li>
    <li><strong>"Would" vs "used to":</strong> "Would" for actions only; "used to" for states + actions</li>
    <li><strong>Present perfect in news:</strong> "has struck" for recent, relevant events</li>
  </ul>
</div>

---

### 🎮 Practice Arena
<GamePlaceholder id="grammarRacer" />
`,
    de: `
## Fortgeschrittene Tempus- & Aspekt-Nuancen ⏰🔮

Auf C1-Niveau geht die Tempuswahl über die Frage "wann" hinaus — es geht um **Perspektive, Erzählstil und pragmatische Wirkung**. Beherrsche diese Nuancen, um wirklich fortgeschritten zu klingen.

### 1. Das Historische Präsens 📖

Die Verwendung der **Gegenwartsform für vergangene Ereignisse** macht Geschichten lebendig:

- "So I'm sitting in the cafe, right? And this guy **comes** up to me and **says**, 'Excuse me...'"
- "In 1969, Armstrong **steps** onto the lunar surface and **declares**: 'One small step for man...'"
- "Shakespeare **writes** Hamlet around 1600, exploring themes of revenge."

<div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">💡 Wann das historische Präsens verwenden:</h3>
  <p>• <strong>Informelles Erzählen:</strong> "So then he goes... and she says..."</p>
  <p>• <strong>Akademische Schrift:</strong> "Chomsky (1957) argues that..." (beim Zitieren)</p>
  <p>• <strong>Nachrichtenschlagzeilen:</strong> "Prime Minister visits flood-affected areas"</p>
  <p>• <strong>Sportkommentar:</strong> "He passes to Rodriguez, who shoots... GOAL!"</p>
</div>

### 2. Zukunft in der Vergangenheit 🔙➡️

**Zukunftspläne/Absichten beschreiben, wie sie aus einem vergangenen Moment gesehen wurden**:

| Struktur | Beispiel | Bedeutung |
|---|---|---|
| **was going to** | She **was going to** call you. | Sie hatte vor anzurufen (tat es aber nicht) |
| **was about to** | I **was about to** leave when... | Ich war kurz davor zu gehen |
| **was to** | The meeting **was to** take place... | Es war geplant |
| **would** (berichtet) | He said he **would** help. | Er drückte Zukunftsabsicht aus |

- "They **were going to** announce the merger, but negotiations collapsed."
- "She **was about to** reveal the truth when the power went out."
- "The event **was to** be held outdoors, but rain forced a change."

### 3. Habituelles "Would" vs "Used to" 🔄

Beide beschreiben vergangene Gewohnheiten, aber mit wichtigen Unterschieden:

| | Would | Used to |
|---|---|---|
| **Wiederholte Handlungen** | ✅ "She **would** always sing..." | ✅ "She **used to** sing..." |
| **Vergangene Zustände** | ❌ "She would be tall..." | ✅ "She **used to** be tall..." |
| **Ton** | Nostalgisch, literarisch | Neutral, sachlich |
| **Erste Erwähnung** | ❌ (braucht vorher Kontext) | ✅ Kann das Thema einführen |

<div className="bg-amber-50 dark:bg-amber-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">⚠️ Kritische Regel:</h3>
  <p><strong>"Would"</strong> kann NUR für <strong>wiederholte Handlungen</strong> verwendet werden, NICHT für Zustände.</p>
  <p>❌ "I <strong>would</strong> live in London." (Zustand)</p>
  <p>✅ "I <strong>used to</strong> live in London." (Zustand)</p>
  <p>✅ "I <strong>would</strong> walk to school every day." (wiederholte Handlung)</p>
  <p>"Would" braucht einen bereits etablierten Vergangenheitskontext.</p>
</div>

<GamePlaceholder id="sentenceBuilder" />

### 4. Perfekt in Nachrichten 📰

Nachrichtenenglisch verwendet das Present Perfect für **aktuelle Ereignisse mit gegenwärtiger Relevanz**:

- "**A massive earthquake has struck** central Turkey." (gerade passiert, noch relevant)
- "**The president has arrived** in Tokyo for the G7 summit." (kürzlich, jetzt wichtig)
- "**Scientists have discovered** a new treatment for malaria." (aktuelle Auswirkung)

Nach der Schlagzeile wechseln Nachrichtenberichte typischerweise zum **Past Simple** für Details:
- "A massive earthquake **has struck** Turkey. The quake **hit** at 4:17 a.m. and **measured** 7.8..."

### 5. Weitere Nuancen 🎭

**Present Continuous für nervige Gewohnheiten:**
- "He's **always** leaving his dirty dishes in the sink!" (Irritation)

**Past Continuous für Atmosphäre/Szene:**
- "The sun **was setting**, birds **were singing**, and she **was sitting** on the porch..."

**Future Perfect für Rückblick aus der Zukunft:**
- "By 2030, the company **will have** expanded into 50 countries."

### 6. Häufige Fehler ❌

**Fehler 1:** "Would" für vergangene Zustände verwenden.
- ❌ "I **would** know all my neighbors when I was young."
- ✅ "I **used to** know all my neighbors when I was young."

**Fehler 2:** Past Simple statt Present Perfect in Nachrichten.
- ❌ "Breaking: A fire **destroyed** the factory." (klingt abgeschlossen)
- ✅ "Breaking: A fire **has destroyed** the factory." (gegenwärtige Relevanz)

**Fehler 3:** "Was about to" + -ing.
- ❌ "She was about to **leaving**."
- ✅ "She was about to **leave**." (Grundform nach "to")

<GamePlaceholder id="fixTheMistake" />

<div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">🎯 Zusammenfassung:</h3>
  <ul className="list-disc list-inside space-y-1">
    <li><strong>Historisches Präsens:</strong> Gegenwartsform für lebendige Vergangenheitserzählung</li>
    <li><strong>Zukunft in der Vergangenheit:</strong> was going to / was about to / was to</li>
    <li><strong>"Would" vs "used to":</strong> "Would" nur für Handlungen; "used to" für Zustände + Handlungen</li>
    <li><strong>Perfekt in Nachrichten:</strong> "has struck" für aktuelle, relevante Ereignisse</li>
  </ul>
</div>

---

### 🎮 Trainings-Arena
<GamePlaceholder id="grammarRacer" />
`
  },
  task: {
    en: {
      title: 'Advanced Tense & Aspect Nuances',
      description: 'Practice choosing tenses for perspective, style, and pragmatic effect.',
      checklist: [
        { text: 'Tell a personal anecdote using the historical present', checked: false },
        { text: 'Write 4 sentences using different future-in-the-past structures', checked: false },
        { text: 'Write 5 pairs contrasting "would" and "used to" (actions vs states)', checked: false }
      ]
    },
    de: {
      title: 'Fortgeschrittene Tempus- & Aspekt-Nuancen',
      description: 'Übe die Tempuswahl für Perspektive, Stil und pragmatische Wirkung.',
      checklist: [
        { text: 'Erzähle eine persönliche Anekdote im historischen Präsens', checked: false },
        { text: 'Schreibe 4 Sätze mit verschiedenen Zukunft-in-der-Vergangenheit-Strukturen', checked: false },
        { text: 'Schreibe 5 Paare, die "would" und "used to" kontrastieren (Handlungen vs. Zustände)', checked: false }
      ]
    }
  },
  quiz: { en: [], de: [] }
};
