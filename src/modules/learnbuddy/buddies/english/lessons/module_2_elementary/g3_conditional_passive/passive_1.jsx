import React from 'react';
import GrammarGame from '../../../components/grammar-games/GrammarGame';

const sentenceBuilderData = [
  {
    prompt: { en: "English ___ (speak) all over the world.", de: "Englisch ___ (sprechen) auf der ganzen Welt." },
    words: ["is spoken", "speaks", "is speaking", "speak"],
    correct: "is spoken",
    explanation: { en: "Passive: is + past participle (present passive)", de: "Passiv: is + Past Participle (Present Passiv)" }
  },
  {
    prompt: { en: "The house ___ (build) in 1990.", de: "Das Haus ___ (bauen) 1990." },
    words: ["was built", "built", "is built", "was building"],
    correct: "was built",
    explanation: { en: "Passive: was + past participle (past passive)", de: "Passiv: was + Past Participle (Past Passiv)" }
  },
  {
    prompt: { en: "The window ___ (break) yesterday.", de: "Das Fenster ___ (zerbrechen) gestern." },
    words: ["was broken", "broke", "is broken", "was breaking"],
    correct: "was broken",
    explanation: { en: "Past passive: was + past participle", de: "Past Passiv: was + Past Participle" }
  }
];

const fixTheMistakeData = [
  {
    sentence: "The car is repair by a mechanic.",
    mistakeIndex: 2,
    correction: "repaired",
    explanation: { en: "Passive needs past participle: is repaired (not 'repair')", de: "Passiv braucht Past Participle: is repaired (nicht 'repair')" }
  },
  {
    sentence: "The book was wrote by Shakespeare.",
    mistakeIndex: 2,
    correction: "written",
    explanation: { en: "Past participle: write -> written (not 'wrote')", de: "Past Participle: write -> written (nicht 'wrote')" }
  },
  {
    sentence: "English is speak everywhere.",
    mistakeIndex: 2,
    correction: "spoken",
    explanation: { en: "Passive: is + past participle (speak -> spoken)", de: "Passiv: is + Past Participle (speak -> spoken)" }
  }
];

const grammarRacerData = [
  {
    prompt: "The letter ___ yesterday.",
    options: ["was sent", "sent", "was send"],
    correct: "was sent",
    explanation: "Past passive: was sent"
  },
  {
    prompt: "Coffee ___ in Brazil.",
    options: ["is grown", "grows", "is grow"],
    correct: "is grown",
    explanation: "Present passive: is grown"
  },
  {
    prompt: "The door ___ by Tom.",
    options: ["was opened", "opened", "was open"],
    correct: "was opened",
    explanation: "Past passive: was opened"
  }
];

export const passive1 = {
  id: 'a2_g42',
  title: {
    en: 'Passive 1 (is done / was done)',
    de: 'Passiv 1 (wird gemacht / wurde gemacht)'
  },
  description: {
    en: "Understanding the passive voice: when the action is more important than who does it. 'English is spoken everywhere', 'The house was built in 1990'.",
    de: "Das Passiv verstehen: wenn die Handlung wichtiger ist als wer sie tut. 'Englisch wird überall gesprochen', 'Das Haus wurde 1990 gebaut'."
  },
  
  components: {
    sentenceBuilder: <GrammarGame type="sentenceBuilder" data={sentenceBuilderData} />,
    fixTheMistake: <GrammarGame type="fixTheMistake" data={fixTheMistakeData} />,
    grammarRacer: <GrammarGame type="grammarRacer" data={grammarRacerData} />
  },

  content: {
    en: `
## Passive Voice: When the Action Matters More 🎭

The **Passive Voice** is used when the **action** or **result** is more important than **who does it**. Instead of saying "Someone does something," we say "Something is done."

### Why Use Passive?

Think about these:
- "English **is spoken** everywhere." (The fact that English is spoken is important, not who speaks it)
- "The house **was built** in 1990." (When it was built matters, not who built it)
- "The window **was broken**." (The broken window is important, not who broke it)

**Key idea:** When **what happens** is more important than **who does it** → Use Passive!

### 1. Form: Be + Past Participle 📝

**Structure:** Subject + **be** (am/is/are/was/were) + **past participle**

**Important:** You need the **past participle** (3rd form) of the verb!

**Present Passive:**
- "English **is spoken** everywhere." (is + spoken)
- "The car **is repaired**." (is + repaired)
- "Coffee **is grown** in Brazil." (is + grown)

**Past Passive:**
- "The house **was built** in 1990." (was + built)
- "The letter **was sent** yesterday." (was + sent)
- "The window **was broken**." (was + broken)

<div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">💡 Remember:</h3>
  <p>Passive = <strong>Be</strong> (am/is/are/was/were) + <strong>Past Participle</strong></p>
  <p>You need the past participle (3rd form) of the verb!</p>
</div>

<GamePlaceholder id="sentenceBuilder" />

### 2. Active vs Passive 🔄

**Active Voice:** Subject does the action
- "Shakespeare **wrote** Hamlet." (Shakespeare did the action)
- "A mechanic **repaired** the car." (Mechanic did the action)

**Passive Voice:** Subject receives the action
- "Hamlet **was written** by Shakespeare." (Hamlet receives the action)
- "The car **was repaired** by a mechanic." (Car receives the action)

**The difference:**
- **Active:** Focus on WHO does it
- **Passive:** Focus on WHAT happens

### 3. When to Use Passive 🎯

Use Passive when:

#### A) The Doer is Unknown or Unimportant
- "My bike **was stolen**." (I don't know who stole it)
- "English **is spoken** everywhere." (Who speaks it doesn't matter)

#### B) The Action/Result is More Important
- "The house **was built** in 1990." (When it was built matters more than who built it)
- "The window **was broken**." (The broken window matters, not who broke it)

#### C) In Formal/Technical Writing
- "The experiment **was conducted** carefully." (Formal)
- "The data **was analyzed**." (Technical)

<GamePlaceholder id="fixTheMistake" />

### 4. By + Agent (Who Does It) 👤

If you want to say **who** does the action, use **by**:

**Structure:** Subject + be + past participle + **by** + agent

**Examples:**
- "Hamlet **was written by** Shakespeare." (Shakespeare wrote it)
- "The car **was repaired by** a mechanic." (Mechanic repaired it)
- "The letter **was sent by** my friend." (My friend sent it)

**Note:** Often, we don't mention "by..." because the doer is unknown or unimportant!

### 5. Present Passive vs Past Passive ⏰

**Present Passive:** am/is/are + past participle
- "Coffee **is grown** in Brazil." (Happens now/generally)
- "English **is spoken** everywhere." (Generally true)

**Past Passive:** was/were + past participle
- "The house **was built** in 1990." (Happened in the past)
- "The letter **was sent** yesterday." (Happened in the past)

### 6. Common Past Participles 📋

**Regular verbs:** add -ed
- build → **built**
- repair → **repaired**
- send → **sent**

**Irregular verbs:** different forms
- write → **written**
- break → **broken**
- speak → **spoken**
- grow → **grown**
- steal → **stolen**

### 7. Common Mistakes ❌

**Mistake 1:** Using base form instead of past participle
- ❌ "English is **speak** everywhere." (Wrong!)
- ✅ "English **is spoken** everywhere." (Correct!)

**Mistake 2:** Using past simple instead of past participle
- ❌ "The house was **built**." (Actually correct!)
- ❌ "The house was **build**." (Wrong - need past participle!)

**Mistake 3:** Forgetting "be"
- ❌ "English spoken everywhere." (Wrong - need 'is'!)
- ✅ "English **is spoken** everywhere." (Correct!)

---

### 🎮 Practice Arena

**🏎️ Grammar Racer: Passive Voice**
Choose the correct passive form!
<GamePlaceholder id="grammarRacer" />

### 🎯 Practical Exercise

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border-2 border-green-300">
  <h3 className="font-bold text-green-800 dark:text-green-200 mb-4">📝 Passive Sentences</h3>
  <p className="mb-4">Write sentences using passive voice:</p>
  <ol className="list-decimal list-inside space-y-2">
    <li>One sentence in present passive (is/are + past participle)</li>
    <li>One sentence in past passive (was/were + past participle)</li>
    <li>One sentence with "by" to show who did it</li>
    <li>Convert one active sentence to passive</li>
  </ol>
</div>
`,
    de: `
## Passiv: Wenn die Handlung wichtiger ist 🎭

Das **Passiv** wird verwendet, wenn die **Handlung** oder das **Ergebnis** wichtiger ist als **wer sie tut**. Anstatt zu sagen "Jemand tut etwas", sagen wir "Etwas wird getan."

### Warum Passiv verwenden?

Denk an diese:
- "English **is spoken** everywhere." (Die Tatsache, dass Englisch gesprochen wird, ist wichtig, nicht wer es spricht)
- "The house **was built** in 1990." (Wann es gebaut wurde, ist wichtig, nicht wer es gebaut hat)
- "The window **was broken**." (Das zerbrochene Fenster ist wichtig, nicht wer es zerbrochen hat)

**Schlüsselidee:** Wenn **was passiert** wichtiger ist als **wer es tut** → Verwende Passiv!

### 1. Form: Be + Past Participle 📝

**Struktur:** Subjekt + **be** (am/is/are/was/were) + **Past Participle**

**Wichtig:** Du brauchst das **Past Participle** (3. Form) des Verbs!

**Present Passiv:**
- "English **is spoken** everywhere." (is + spoken)
- "The car **is repaired**." (is + repaired)
- "Coffee **is grown** in Brazil." (is + grown)

**Past Passiv:**
- "The house **was built** in 1990." (was + built)
- "The letter **was sent** yesterday." (was + sent)
- "The window **was broken**." (was + broken)

<div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">💡 Merke dir:</h3>
  <p>Passiv = <strong>Be</strong> (am/is/are/was/were) + <strong>Past Participle</strong></p>
  <p>Du brauchst das Past Participle (3. Form) des Verbs!</p>
</div>

<GamePlaceholder id="sentenceBuilder" />

### 2. Aktiv vs Passiv 🔄

**Aktiv:** Subjekt tut die Handlung
- "Shakespeare **wrote** Hamlet." (Shakespeare hat die Handlung getan)
- "A mechanic **repaired** the car." (Mechaniker hat die Handlung getan)

**Passiv:** Subjekt empfängt die Handlung
- "Hamlet **was written** by Shakespeare." (Hamlet empfängt die Handlung)
- "The car **was repaired** by a mechanic." (Auto empfängt die Handlung)

**Der Unterschied:**
- **Aktiv:** Fokus auf WER es tut
- **Passiv:** Fokus auf WAS passiert

### 3. Wann Passiv verwenden 🎯

Verwende Passiv, wenn:

#### A) Der Handelnde unbekannt oder unwichtig ist
- "My bike **was stolen**." (Ich weiß nicht, wer es gestohlen hat)
- "English **is spoken** everywhere." (Wer es spricht, ist unwichtig)

#### B) Die Handlung/Ergebnis wichtiger ist
- "The house **was built** in 1990." (Wann es gebaut wurde, ist wichtiger als wer es gebaut hat)
- "The window **was broken**." (Das zerbrochene Fenster ist wichtig, nicht wer es zerbrochen hat)

#### C) In formellem/technischem Schreiben
- "The experiment **was conducted** carefully." (Formell)
- "The data **was analyzed**." (Technisch)

<GamePlaceholder id="fixTheMistake" />

### 4. By + Handelnder (Wer es tut) 👤

Wenn du sagen willst, **wer** die Handlung tut, verwende **by**:

**Struktur:** Subjekt + be + Past Participle + **by** + Handelnder

**Beispiele:**
- "Hamlet **was written by** Shakespeare." (Shakespeare hat es geschrieben)
- "The car **was repaired by** a mechanic." (Mechaniker hat es repariert)
- "The letter **was sent by** my friend." (Mein Freund hat es geschickt)

**Hinweis:** Oft erwähnen wir "by..." nicht, weil der Handelnde unbekannt oder unwichtig ist!

### 5. Present Passiv vs Past Passiv ⏰

**Present Passiv:** am/is/are + Past Participle
- "Coffee **is grown** in Brazil." (Passiert jetzt/allgemein)
- "English **is spoken** everywhere." (Allgemein wahr)

**Past Passiv:** was/were + Past Participle
- "The house **was built** in 1990." (Passierte in der Vergangenheit)
- "The letter **was sent** yesterday." (Passierte in der Vergangenheit)

### 6. Häufige Past Participles 📋

**Regelmäßige Verben:** füge -ed hinzu
- build → **built**
- repair → **repaired**
- send → **sent**

**Unregelmäßige Verben:** verschiedene Formen
- write → **written**
- break → **broken**
- speak → **spoken**
- grow → **grown**
- steal → **stolen**

### 7. Häufige Fehler ❌

**Fehler 1:** Grundform statt Past Participle verwenden
- ❌ "English is **speak** everywhere." (Falsch!)
- ✅ "English **is spoken** everywhere." (Richtig!)

**Fehler 2:** Past Simple statt Past Participle verwenden
- ❌ "The house was **build**." (Falsch - brauchst Past Participle!)

**Fehler 3:** "Be" vergessen
- ❌ "English spoken everywhere." (Falsch - brauchst 'is'!)
- ✅ "English **is spoken** everywhere." (Richtig!)

---

### 🎮 Trainings-Arena

**🏎️ Grammar Racer: Passiv**
Wähle die richtige Passivform!
<GamePlaceholder id="grammarRacer" />

### 🎯 Praktische Übung

<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border-2 border-green-300">
  <h3 className="font-bold text-green-800 dark:text-green-200 mb-4">📝 Passivsätze</h3>
  <p className="mb-4">Schreibe Sätze mit Passiv:</p>
  <ol className="list-decimal list-inside space-y-2">
    <li>Ein Satz im Present Passiv (is/are + Past Participle)</li>
    <li>Ein Satz im Past Passiv (was/were + Past Participle)</li>
    <li>Ein Satz mit "by", um zu zeigen, wer es getan hat</li>
    <li>Wandle einen Aktivsatz in Passiv um</li>
  </ol>
</div>
`
  },
  task: {
    de: {
      title: 'Passiv 1',
      description: 'Schreibe Sätze mit Passiv.',
      checklist: [
        { text: 'Satz im Present Passiv (is/are + Past Participle)', checked: false },
        { text: 'Satz im Past Passiv (was/were + Past Participle)', checked: false },
        { text: 'Satz mit "by" (wer es getan hat)', checked: false },
        { text: 'Aktivsatz in Passiv umwandeln', checked: false }
      ]
    },
    en: {
      title: 'Passive 1',
      description: 'Write sentences using passive voice.',
      checklist: [
        { text: 'Sentence in present passive (is/are + past participle)', checked: false },
        { text: 'Sentence in past passive (was/were + past participle)', checked: false },
        { text: 'Sentence with "by" (who did it)', checked: false },
        { text: 'Convert active sentence to passive', checked: false }
      ]
    }
  },
  quiz: { de: [], en: [] }
};


