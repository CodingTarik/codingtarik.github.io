import React from 'react';
import GrammarGame from '../../../components/grammar-games/GrammarGame';

const sentenceBuilderData = [
  {
    prompt: { en: "I enjoy ___ (read) books in the evening.", de: "Ich genieße es, ___ (lesen) abends Bücher." },
    words: ["reading", "to read", "read", "reads"],
    correct: "reading",
    explanation: { en: "Enjoy + -ing form (gerund)", de: "Enjoy + -ing-Form (Gerundium)" }
  },
  {
    prompt: { en: "She avoids ___ (eat) junk food.", de: "Sie vermeidet, ___ (essen) Junkfood." },
    words: ["eating", "to eat", "eat", "eats"],
    correct: "eating",
    explanation: { en: "Avoid + -ing form", de: "Avoid + -ing-Form" }
  },
  {
    prompt: { en: "They finished ___ (watch) the movie.", de: "Sie haben fertig ___ (schauen) den Film." },
    words: ["watching", "to watch", "watch", "watches"],
    correct: "watching",
    explanation: { en: "Finish + -ing form", de: "Finish + -ing-Form" }
  }
];

const fixTheMistakeData = [
  {
    sentence: "I enjoy to read books.",
    mistakeIndex: 2,
    correction: "reading",
    explanation: { en: "Enjoy + -ing (not 'to read')", de: "Enjoy + -ing (nicht 'to read')" }
  },
  {
    sentence: "He stopped smoke.",
    mistakeIndex: 1,
    correction: "smoking",
    explanation: { en: "Stop + -ing form", de: "Stop + -ing-Form" }
  },
  {
    sentence: "She can't imagine live abroad.",
    mistakeIndex: 3,
    correction: "living",
    explanation: { en: "Imagine + -ing", de: "Imagine + -ing" }
  }
];

const grammarRacerData = [
  {
    prompt: "I enjoy ___ books.",
    options: ["reading", "to read", "read"],
    correct: "reading",
    explanation: "Enjoy + -ing"
  },
  {
    prompt: "She avoids ___ junk food.",
    options: ["eating", "to eat", "eat"],
    correct: "eating",
    explanation: "Avoid + -ing"
  },
  {
    prompt: "They finished ___ the movie.",
    options: ["watching", "to watch", "watch"],
    correct: "watching",
    explanation: "Finish + -ing"
  }
];

export const verbPlusIng = {
  id: 'a2_g53',
  title: {
    en: 'Verb + -ing (enjoy doing / stop doing etc.)',
    de: 'Verb + -ing (genießen zu tun / aufhören zu tun etc.)'
  },
  description: {
    en: "Using the -ing form (gerund) after certain verbs like enjoy, avoid, finish. 'I enjoy reading', 'She stopped smoking'.",
    de: "Die -ing-Form (Gerundium) nach bestimmten Verben wie enjoy, avoid, finish verwenden. 'Ich genieße Lesen', 'Sie hat mit Rauchen aufgehört'."
  },
  
  components: {
    sentenceBuilder: <GrammarGame type="sentenceBuilder" data={sentenceBuilderData} />,
    fixTheMistake: <GrammarGame type="fixTheMistake" data={fixTheMistakeData} />,
    grammarRacer: <GrammarGame type="grammarRacer" data={grammarRacerData} />
  },

  content: {
    en: `
## Verb + -ing: The Gerund Form After Verbs 📖

Many English verbs are followed by the **-ing form** (also called **gerund**). This is different from infinitives (to + verb). Understanding which verbs take -ing helps you express actions, habits, and feelings correctly.

### Why Do We Use Verb + -ing?

The -ing form turns a verb into a noun-like structure. It's used after certain verbs to talk about activities, processes, or ongoing actions.

Think about these situations:
- "I **enjoy reading** books." (Reading is the activity I like)
- "She **stopped smoking**." (Smoking is the action she quit)
- "He **finished writing** the letter." (Writing is the completed activity)

**Key idea:** Verb + -ing = Talking about the activity itself as a noun.

<div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">💡 Remember:</h3>
  <p>The -ing form acts like a noun after these verbs.</p>
  <p>It's NOT "enjoy to read" – always check the verb!</p>
</div>

<GamePlaceholder id="sentenceBuilder" />

### 1. Common Verbs + -ing: Enjoy, Avoid, Finish 🌟

These verbs express **positive/negative attitudes** toward activities or **completion**.

**Structure:** Subject + verb + -ing form

**Enjoy** (like doing something):
- "I **enjoy reading** novels." (I like the activity of reading)
- "They **enjoy playing** football." (They like playing)

**Avoid** (try not to do something):
- "She **avoids eating** meat." (She tries not to eat meat)
- "We **avoid driving** in traffic." (We try not to drive in traffic)

**Finish** (complete an activity):
- "He **finished writing** the report." (He completed the writing)
- "Did you **finish eating**?" (Did you complete eating?)

<div className="bg-amber-50 dark:bg-amber-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">⚠️ Important:</h3>
  <p>These verbs ALWAYS take -ing, not "to + verb".</p>
  <p>Enjoy = positive feeling about an activity</p>
  <p>Avoid = negative, trying to prevent something</p>
  <p>Finish = completing the whole action</p>
</div>

### 2. More Verbs: Stop, Start, Continue 🚀

**Stop** (quit an activity or pause):
- "He **stopped smoking** last year." (He quit the habit)
- "I **stopped reading** to answer the phone." (I paused the activity)

**Start** (begin an activity):
- "It **started raining** suddenly." (The activity began)
- "She **started learning** English." (She began the process)

**Continue** (keep doing something):
- "They **continued working** late." (They kept working)
- "The meeting **continued going** well." (It kept going well)

**Note:** "Stop" can mean "quit" (habit) or "pause" (temporary).

### 3. Verbs of Feelings and Actions: Mind, Suggest, Admit 💭

**Mind** (be bothered by something – often in questions):
- "Do you **mind waiting**?" (Are you bothered by waiting?)
- "I don't **mind helping** you." (I'm not bothered)

**Suggest** (recommend an activity):
- "She **suggested going** to the cinema." (She recommended the activity)
- "He **suggested trying** sushi." (He recommended trying it)

**Admit** (confess to doing something):
- "He **admitted making** a mistake." (He confessed to the action)
- "She **admitted lying** about it." (She confessed)

<GamePlaceholder id="fixTheMistake" />

### 4. Negative Forms and Questions ❓

**Negative:** Add "not" before -ing
- "I **enjoy not cooking** on weekends." (I like not doing it)
- "She **avoids not exercising**." (Rare, but possible)

**Questions:**
- "Do you **enjoy swimming**?" (Yes/No question)
- "What do you **avoid doing**?" (Wh-question)

### 5. Verb + -ing vs. Verb + to + Verb: Quick Comparison 🔄

Some verbs take -ing, others take "to + verb". Here's a simple table:

| Verb       | Takes -ing? | Example with -ing          | Example with to (if applicable) |
|------------|-------------|----------------------------|---------------------------------|
| Enjoy     | Yes        | Enjoy reading             | ❌ Not "enjoy to read"         |
| Avoid     | Yes        | Avoid eating              | ❌ Not "avoid to eat"          |
| Finish    | Yes        | Finish working            | ❌ Not "finish to work"        |
| Want      | No         | ❌ Not "want reading"      | Want to read                   |
| Decide    | No         | ❌ Not "decide reading"    | Decide to read                 |

**Key:** Always learn verbs in pairs – check if they take -ing or "to"!

<div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">🎯 Summary:</h3>
  <ul className="list-disc list-inside space-y-1">
    <li><strong>Verb + -ing</strong> = Gerund for activities (enjoy, avoid, finish, stop, start, continue, mind, suggest, admit)</li>
    <li>Use -ing to talk about the <strong>activity itself</strong> as a noun</li>
    <li>Never use "to" after these verbs!</li>
    <li>Practice: Enjoy + -ing = positive; Avoid + -ing = negative</li>
  </ul>
</div>

### 6. Common Mistakes ❌

**Mistake 1:** Using "to" instead of -ing
- ❌ "I enjoy **to read**." (Wrong!)
- ✅ "I enjoy **reading**." (Correct!)

**Mistake 2:** Forgetting -ing after finish/stop
- ❌ "She finished **eat**." (Wrong!)
- ✅ "She finished **eating**." (Correct!)

**Mistake 3:** Confusing with verbs that take "to"
- ❌ "I avoided **to go**." (Wrong – avoid takes -ing)
- ✅ "I decided **to go**." (Decide takes "to")

---

### 🎮 Practice Arena

**🏎️ Grammar Racer: Verb + -ing**
Choose the correct -ing form! Remember: enjoy, avoid, finish all take -ing!

<GamePlaceholder id="grammarRacer" />

### 🎯 Practical Exercise

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border-2 border-green-300">
  <h3 className="font-bold text-green-800 dark:text-green-200 mb-4">📝 Verb + -ing Practice</h3>
  <p className="mb-4">Write sentences using verb + -ing:</p>
  <ol className="list-decimal list-inside space-y-2">
    <li>One sentence with "enjoy" (something you like doing)</li>
    <li>One sentence with "avoid" (something you try not to do)</li>
    <li>One sentence with "finish" or "stop" (an action you completed or quit)</li>
    <li>One question with "mind" (asking if someone is okay with an activity)</li>
  </ol>
</div>
    `,
    de: `
## Verb + -ing: Die Gerund-Form nach Verben 📖

Viele englische Verben werden von der **-ing-Form** (auch **Gerundium** genannt) gefolgt. Das unterscheidet sich von Infinitiven (to + Verb). Zu verstehen, welche Verben -ing nehmen, hilft dir, Handlungen, Gewohnheiten und Gefühle korrekt auszudrücken.

### Warum verwenden wir Verb + -ing?

Die -ing-Form macht ein Verb zu einer noun-ähnlichen Struktur. Sie wird nach bestimmten Verben verwendet, um über Aktivitäten, Prozesse oder laufende Handlungen zu sprechen.

Denk an diese Situationen:
- "I **enjoy reading** books." (Lesen ist die Aktivität, die ich mag)
- "She **stopped smoking**." (Rauchen ist die Handlung, die sie aufgegeben hat)
- "He **finished writing** the letter." (Schreiben ist die abgeschlossene Aktivität)

**Schlüsselidee:** Verb + -ing = Sprechen über die Aktivität selbst als Nomen.

<div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">💡 Merke dir:</h3>
  <p>Die -ing-Form wirkt wie ein Nomen nach diesen Verben.</p>
  <p>Es ist NICHT "enjoy to read" – prüfe immer das Verb!</p>
</div>

<GamePlaceholder id="sentenceBuilder" />

### 1. Häufige Verben + -ing: Enjoy, Avoid, Finish 🌟

Diese Verben drücken **positive/negative Einstellungen** zu Aktivitäten oder **Vollendung** aus.

**Struktur:** Subjekt + Verb + -ing-Form

**Enjoy** (etwas tun mögen):
- "I **enjoy reading** novels." (Ich mag die Aktivität Lesen)
- "They **enjoy playing** football." (Sie mögen Spielen)

**Avoid** (etwas vermeiden):
- "She **avoids eating** meat." (Sie versucht, kein Fleisch zu essen)
- "We **avoid driving** in traffic." (Wir versuchen, nicht im Stau zu fahren)

**Finish** (eine Aktivität beenden):
- "He **finished writing** the report." (Er hat das Schreiben beendet)
- "Did you **finish eating**?" (Hast du Essen beendet?)

<div className="bg-amber-50 dark:bg-amber-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">⚠️ Wichtig:</h3>
  <p>Diese Verben NEHMEN IMMER -ing, nicht "to + Verb".</p>
  <p>Enjoy = positives Gefühl zu einer Aktivität</p>
  <p>Avoid = negativ, etwas verhindern</p>
  <p>Finish = die ganze Handlung abschließen</p>
</div>

### 2. Weitere Verben: Stop, Start, Continue 🚀

**Stop** (eine Aktivität aufhören oder pausieren):
- "He **stopped smoking** last year." (Er hat die Gewohnheit aufgegeben)
- "I **stopped reading** to answer the phone." (Ich habe pausiert)

**Start** (eine Aktivität beginnen):
- "It **started raining** suddenly." (Die Aktivität begann)
- "She **started learning** English." (Sie hat den Prozess begonnen)

**Continue** (etwas fortsetzen):
- "They **continued working** late." (Sie haben weitergemacht)
- "The meeting **continued going** well." (Es ging weiter gut)

**Hinweis:** "Stop" kann "aufgeben" (Gewohnheit) oder "pausieren" (vorübergehend) bedeuten.

### 3. Verben für Gefühle und Handlungen: Mind, Suggest, Admit 💭

**Mind** (sich stören lassen – oft in Fragen):
- "Do you **mind waiting**?" (Stört es dich zu warten?)
- "I don't **mind helping** you." (Es stört mich nicht zu helfen)

**Suggest** (vorschlagen, eine Aktivität zu machen):
- "She **suggested going** to the cinema." (Sie hat das Gehen vorgeschlagen)
- "He **suggested trying** sushi." (Er hat Ausprobieren empfohlen)

**Admit** (zugeben, etwas getan zu haben):
- "He **admitted making** a mistake." (Er hat das Machen eines Fehlers zugegeben)
- "She **admitted lying** about it." (Sie hat Lügen zugegeben)

<GamePlaceholder id="fixTheMistake" />

### 4. Verneinungsformen und Fragen ❓

**Verneinung:** "Not" vor -ing setzen
- "I **enjoy not cooking** on weekends." (Ich mag Nicht-Kochen)
- "She **avoids not exercising**." (Selten, aber möglich)

**Fragen:**
- "Do you **enjoy swimming**?" (Ja/Nein-Frage)
- "What do you **avoid doing**?" (W-Frage)

### 5. Verb + -ing vs. Verb + to + Verb: Schneller Vergleich 🔄

Manche Verben nehmen -ing, andere "to + Verb". Hier eine einfache Tabelle:

| Verb       | Nimmt -ing? | Beispiel mit -ing          | Beispiel mit to (falls zutreffend) |
|------------|-------------|----------------------------|------------------------------------|
| Enjoy     | Ja         | Enjoy reading             | ❌ Nicht "enjoy to read"          |
| Avoid     | Ja         | Avoid eating              | ❌ Nicht "avoid to eat"           |
| Finish    | Ja         | Finish working            | ❌ Nicht "finish to work"         |
| Want      | Nein       | ❌ Nicht "want reading"    | Want to read                      |
| Decide    | Nein       | ❌ Nicht "decide reading"  | Decide to read                    |

**Schlüssel:** Lerne Verben paarweise – prüfe, ob sie -ing oder "to" nehmen!

<div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">🎯 Zusammenfassung:</h3>
  <ul className="list-disc list-inside space-y-1">
    <li><strong>Verb + -ing</strong> = Gerundium für Aktivitäten (enjoy, avoid, finish, stop, start, continue, mind, suggest, admit)</li>
    <li>Verwende -ing, um über die <strong>Aktivität selbst</strong> als Nomen zu sprechen</li>
    <li>Verwende NIE "to" nach diesen Verben!</li>
    <li>Übung: Enjoy + -ing = positiv; Avoid + -ing = negativ</li>
  </ul>
</div>

### 6. Häufige Fehler ❌

**Fehler 1:** "To" statt -ing verwenden
- ❌ "I enjoy **to read**." (Falsch!)
- ✅ "I enjoy **reading**." (Richtig!)

**Fehler 2:** -ing nach finish/stop vergessen
- ❌ "She finished **eat**." (Falsch!)
- ✅ "She finished **eating**." (Richtig!)

**Fehler 3:** Verwechslung mit Verben, die "to" nehmen
- ❌ "I avoided **to go**." (Falsch – avoid nimmt -ing)
- ✅ "I decided **to go**." (Decide nimmt "to")

---

### 🎮 Trainings-Arena

**🏎️ Grammar Racer: Verb + -ing**
Wähle die richtige -ing-Form! Denk dran: enjoy, avoid, finish nehmen alle -ing!

<GamePlaceholder id="grammarRacer" />

### 🎯 Praktische Übung

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border-2 border-green-300">
  <h3 className="font-bold text-green-800 dark:text-green-200 mb-4">📝 Verb + -ing Übung</h3>
  <p className="mb-4">Schreibe Sätze mit Verb + -ing:</p>
  <ol className="list-decimal list-inside space-y-2">
    <li>Ein Satz mit "enjoy" (etwas Angenehmes)', checked: false },
    <li>Ein Satz mit "avoid" (etwas zu Vermeidens)', checked: false },
    <li>Ein Satz mit "finish" oder "stop"', checked: false },
    <li>Eine Frage mit "mind"', checked: false }
  </ol>
</div>
    `
  },
  task: {
    de: {
      title: 'Verb + -ing - Gerundium',
      description: 'Schreibe Sätze mit Verb + -ing.',
      checklist: [
        { text: 'Satz mit "enjoy" (etwas Angenehmes)', checked: false },
        { text: 'Satz mit "avoid" (etwas zu Vermeidens)', checked: false },
        { text: 'Satz mit "finish" oder "stop"', checked: false },
        { text: 'Frage mit "mind"', checked: false }
      ]
    },
    en: {
      title: 'Verb + -ing - Gerund',
      description: 'Write sentences with verb + -ing.',
      checklist: [
        { text: 'Sentence with "enjoy" (something you like)', checked: false },
        { text: 'Sentence with "avoid" (something to avoid)', checked: false },
        { text: 'Sentence with "finish" or "stop"', checked: false },
        { text: 'Question with "mind"', checked: false }
      ]
    }
  },
  quiz: { de: [], en: [] }
};
