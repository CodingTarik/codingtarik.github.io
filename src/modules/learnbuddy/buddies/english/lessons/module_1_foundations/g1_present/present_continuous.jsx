import React from 'react';
import GrammarGame from '../../../components/grammar-games/GrammarGame';

const sentenceBuilderData = [
  {
    prompt: { en: "I ___ (eat) an apple now.", de: "Ich ___ (essen) gerade einen Apfel." },
    words: ["am", "eating", "eat", "is"],
    correct: "am eating",
    explanation: { en: "I am eating (happening now)", de: "I am eating (passiert jetzt)" }
  },
  {
    prompt: { en: "She ___ (watch) TV.", de: "Sie ___ (schauen) fern." },
    words: ["is", "watching", "watch", "are"],
    correct: "is watching",
    explanation: { en: "She is watching", de: "Sie schaut gerade" }
  },
  {
    prompt: { en: "They ___ (play) football.", de: "Sie ___ (spielen) Fußball." },
    words: ["are", "playing", "play", "is"],
    correct: "are playing",
    explanation: { en: "They are playing", de: "Sie spielen gerade" }
  }
];

const fixTheMistakeData = [
  {
    sentence: "I am play football now.",
    mistakeIndex: 2,
    correction: "playing",
    explanation: { en: "Don't forget -ing! 'I am playing'.", de: "Vergiss nicht -ing! 'I am playing'." }
  },
  {
    sentence: "She watching TV.",
    mistakeIndex: 1,
    correction: "is watching",
    explanation: { en: "You need 'is'. 'She is watching'.", de: "Du brauchst 'is'. 'She is watching'." }
  },
  {
    sentence: "We is running.",
    mistakeIndex: 1,
    correction: "are",
    explanation: { en: "We are running.", de: "We are running." }
  }
];

const grammarRacerData = [
  {
    prompt: "Look! He ___ fast.",
    options: ["run", "is running", "runs"],
    correct: "is running",
    explanation: "Happening now (Look!)"
  },
  {
    prompt: "Where is Tom? He ___ a shower.",
    options: ["has", "is having", "having"],
    correct: "is having",
    explanation: "Happening now"
  },
  {
    prompt: "Listen! The birds ___.",
    options: ["sing", "are singing", "singing"],
    correct: "are singing",
    explanation: "Happening now (Listen!)"
  },
  {
    prompt: "I ___ my homework at the moment.",
    options: ["do", "am doing", "doing"],
    correct: "am doing",
    explanation: "At the moment"
  }
];

export const presentContinuous = {
  id: 'a1_g1',
  title: {
    en: 'Present Continuous (I am doing)',
    de: 'Present Continuous (Verlaufsform)'
  },
  description: {
    en: "Talking about what is happening right now.",
    de: "Über Dinge sprechen, die genau jetzt passieren."
  },
  
  components: {
    sentenceBuilder: <GrammarGame type="sentenceBuilder" data={sentenceBuilderData} />,
    fixTheMistake: <GrammarGame type="fixTheMistake" data={fixTheMistakeData} />,
    grammarRacer: <GrammarGame type="grammarRacer" data={grammarRacerData} />
  },

  content: {
    en: `
## Present Continuous: What is happening NOW? ⏱️

The **Present Continuous** (also called "Present Progressive") is one of the most important tenses in English. It describes an action that is **in progress at this very moment** or around the current time. The action has started but is not finished yet.

### Understanding the Concept

Think of it like a video camera recording what's happening right now. If you could point a camera at someone and see them actively doing something, that's Present Continuous.

**Real-life scenario:** Imagine you are on the phone with a friend. They ask: "What are you doing?"
You answer:
- "I **am reading** a book." (Right now, as we speak, I have the book open and I'm reading it)
- "I **am cooking** dinner." (The food is on the stove right now, I'm actively cooking)

Compare this to Present Simple:
- "I **read** books every day." (This is a habit, not happening right now)
- "I **cook** dinner every evening." (This is a routine, not happening right now)

### 1. How to form it 🏗️

The Present Continuous is formed with two essential parts:

**Part 1:** The verb **"to be"** (am/is/are) - this changes based on the subject
**Part 2:** The main verb with **"-ing"** ending

| Subject | to be | Verb + -ing | Example | Meaning |
|---------|-------|-------------|---------|---------|
| I | **am** | do**ing** | I am doing my homework. | I'm actively working on it now |
| He/She/It | **is** | work**ing** | She is working late. | She's at work right now |
| We/You/They | **are** | play**ing** | They are playing football. | They're on the field right now |

**Important:** Both parts are necessary! You cannot have one without the other.

<GamePlaceholder id="sentenceBuilder" />

### 2. When to use Present Continuous 📍

The Present Continuous has several important uses:

#### A. Actions happening right now (Most Common)
- "Look! It **is raining**." (You can see the rain falling right now)
- "Shh! The baby **is sleeping**." (The baby is asleep at this moment)
- "I **am writing** an email." (I'm typing it right now)

#### B. Temporary situations (not permanent)
- "I **am staying** at a hotel this week." (Temporary - I don't live there)
- "She **is working** in London this month." (Temporary job, not permanent)
- Compare: "I **live** in Berlin." (Permanent - use Present Simple)

#### C. Changing situations
- "The weather **is getting** worse." (It's changing right now)
- "Your English **is improving**." (It's getting better over time)
- "The population **is growing**." (It's increasing)

#### D. Future plans (arranged/definite)
- "I **am meeting** John tomorrow." (We've arranged it)
- "We **are flying** to Paris next week." (The tickets are booked)
- Note: This is different from "going to" - here the plan is already arranged

### 3. Signal Words 🚦

These words and phrases often indicate that you should use Present Continuous:

**Time indicators:**
- **now** (jetzt) - "I am studying now."
- **at the moment** (im Moment) - "She is busy at the moment."
- **right now** (gerade jetzt) - "I am working right now."
- **currently** (derzeit) - "He is currently learning Spanish."
- **at present** (derzeit) - "At present, we are renovating the house."

**Attention-getters:**
- **Look!** (Schau mal!) - "Look! The bus is coming!"
- **Listen!** (Hör mal!) - "Listen! Someone is singing."
- **Watch out!** (Pass auf!) - "Watch out! That car is moving!"

**These signal words help you identify when an action is happening right now.**

### 4. Spelling Rules for -ing 📝

Adding **-ing** seems simple, but there are important spelling rules to remember:

#### Rule 1: Most verbs - just add -ing
- play → play**ing**
- work → work**ing**
- read → read**ing**
- eat → eat**ing**

#### Rule 2: Silent 'e' at the end - drop the 'e' and add -ing
- come → com**ing** (not "comeing")
- make → mak**ing**
- write → writ**ing**
- take → tak**ing**
- dance → danc**ing**

**Exception:** If the verb ends in -ee, keep both e's:
- see → see**ing**
- agree → agree**ing**
- flee → flee**ing**

#### Rule 3: One-syllable verbs with short vowel + single consonant - double the consonant
- sit → sit**t**ing (not "siting")
- run → run**n**ing
- swim → swim**m**ing
- stop → stop**p**ing
- get → get**t**ing

**Why?** This keeps the vowel sound short. Compare:
- "siting" would sound like "sighting" (long i)
- "sitting" keeps the short i sound

#### Rule 4: Two-syllable verbs - double if stress is on last syllable
- begin → begin**n**ing (stress on "gin")
- prefer → prefer**r**ing (stress on "fer")
- admit → admit**t**ing (stress on "mit")

**But:** If stress is on first syllable, don't double:
- visit → visit**ing** (stress on "vis")
- open → open**ing** (stress on "o")
- happen → happen**ing** (stress on "hap")

#### Rule 5: Verbs ending in -ie - change to -y
- lie → ly**ing** (not "lieing")
- die → dy**ing**
- tie → ty**ing**

#### Rule 6: Verbs ending in -y - just add -ing (no change)
- play → play**ing**
- enjoy → enjoy**ing**
- study → study**ing** (not "studying" - the y stays)

**Note:** This is different from Present Simple where "study" becomes "studies"!

### 5. Common Mistakes and How to Avoid Them ⚠️

#### Mistake 1: Forgetting "to be"
- ❌ "I playing football." (Wrong - missing "am")
- ✅ "I **am** playing football." (Correct)

**Why this happens:** In many languages, you don't need an auxiliary verb. But in English, "am/is/are" is essential!

#### Mistake 2: Using Present Continuous for permanent facts
- ❌ "I am living in Berlin." (Wrong if you permanently live there)
- ✅ "I **live** in Berlin." (Correct - use Present Simple for permanent situations)

**Exception:** "I am living in Berlin" is correct if you're temporarily staying there (e.g., for work).

#### Mistake 3: Using Present Continuous with stative verbs
- ❌ "I am knowing him." (Wrong - "know" is a stative verb)
- ✅ "I **know** him." (Correct - use Present Simple)

**Stative verbs** (like know, like, want, understand) describe states, not actions. They generally don't use -ing.

#### Mistake 4: Wrong spelling of -ing
- ❌ "I am comming." (Wrong - should be "coming")
- ✅ "I am com**ing**." (Correct - drop the e)

- ❌ "She is runing." (Wrong - should double the n)
- ✅ "She is run**n**ing." (Correct - double consonant after short vowel)

<div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-4 my-4">
  <strong className="text-red-800 dark:text-red-200">⚠️ Most Common Mistake!</strong>
  <br/>
  Don't forget the "to be" (am/is/are)!
  <br/>
  - ❌ "I playing football." (Wrong!)
  <br/>
  - ✅ "I **am** playing football." (Correct!)
  <br/>
  <br/>
  Remember: Present Continuous = am/is/are + verb-ing
  <br/>
  Both parts are essential!
</div>

<GamePlaceholder id="fixTheMistake" />

### 6. Questions and Negatives ❓

#### Questions
To make questions, put **am/is/are** before the subject:

- "**Are** you listening?" (Not "Do you listening?")
- "**Is** she working?" (Not "Does she working?")
- "**Am** I doing this correctly?"
- "What **are** you doing?" (Question word + are + subject + verb-ing)

#### Negatives
Add **not** after am/is/are:

- "I **am not** sleeping." (I'm not sleeping)
- "She **is not** working." (She isn't working / She's not working)
- "They **are not** coming." (They aren't coming / They're not coming)

**Short forms:**
- am not → **'m not** (I'm not)
- is not → **isn't** (She isn't)
- are not → **aren't** (They aren't)

**Note:** "I amn't" doesn't exist! Always use "I'm not."

### 7. Pronunciation Tips 🗣️

When speaking, native speakers often use contractions:
- "I'm reading" (not "I am reading" in casual speech)
- "She's working" (not "She is working")
- "They're playing" (not "They are playing")

The **-ing** ending is pronounced as a single syllable: /ɪŋ/
- "working" sounds like "work-ing" (one syllable for -ing)

---

### 🎮 Practice Arena

**🏎️ Grammar Racer: Action Mode!**
What is happening right now? Choose the correct form fast!
<GamePlaceholder id="grammarRacer" />
`,
    de: `
## Present Continuous: Was passiert JETZT? ⏱️

Das **Present Continuous** (auch "Present Progressive" genannt) ist eine der wichtigsten Zeitformen im Englischen. Es beschreibt eine Handlung, die **genau in diesem Moment** oder um die aktuelle Zeit herum stattfindet. Die Handlung hat begonnen, ist aber noch nicht abgeschlossen.

### Das Konzept verstehen

Stell es dir vor wie eine Videokamera, die aufzeichnet, was gerade passiert. Wenn du eine Kamera auf jemanden richten könntest und sehen würdest, wie er aktiv etwas tut, dann ist das Present Continuous.

**Aus dem echten Leben:** Stell dir vor, du telefonierst mit einem Freund. Er fragt: "Was machst du gerade?"
Du antwortest:
- "Ich **lese** (gerade) ein Buch." -> "I **am reading** a book." (Genau jetzt, während wir sprechen, habe ich das Buch offen und lese es)
- "Ich **koche** (gerade) Abendessen." -> "I **am cooking** dinner." (Das Essen steht gerade auf dem Herd, ich koche aktiv)

Vergleiche das mit Present Simple:
- "Ich **lese** jeden Tag Bücher." -> "I **read** books every day." (Das ist eine Gewohnheit, passiert nicht gerade jetzt)
- "Ich **koche** jeden Abend Abendessen." -> "I **cook** dinner every evening." (Das ist eine Routine, passiert nicht gerade jetzt)

Im Deutschen benutzen wir oft Wörter wie "gerade", "momentan" oder "jetzt", um das auszudrücken. Im Englischen benutzen wir diese spezielle Zeitform.

### 1. Die Bildung 🏗️

Das Present Continuous wird mit zwei essentiellen Teilen gebildet:

**Teil 1:** Das Verb **"to be"** (am/is/are) - das ändert sich je nach Subjekt
**Teil 2:** Das Hauptverb mit der Endung **"-ing"**

| Subjekt | to be | Verb + -ing | Beispiel | Bedeutung |
|---------|-------|-------------|----------|-----------|
| I | **am** | do**ing** | I am doing my homework. | Ich arbeite gerade aktiv daran |
| He/She/It | **is** | work**ing** | She is working late. | Sie ist gerade bei der Arbeit |
| We/You/They | **are** | play**ing** | They are playing football. | Sie sind gerade auf dem Platz |

**Wichtig:** Beide Teile sind notwendig! Du kannst nicht den einen ohne den anderen haben.

<GamePlaceholder id="sentenceBuilder" />

### 2. Wann man Present Continuous benutzt 📍

Das Present Continuous hat mehrere wichtige Verwendungen:

#### A. Handlungen, die gerade jetzt passieren (Häufigste Verwendung)
- "Schau! Es **regnet** gerade." -> "Look! It **is raining**." (Du kannst sehen, wie der Regen gerade fällt)
- "Psst! Das Baby **schläft** gerade." -> "Shh! The baby **is sleeping**." (Das Baby schläft in diesem Moment)
- "Ich **schreibe** gerade eine E-Mail." -> "I **am writing** an email." (Ich tippe sie gerade)

#### B. Vorübergehende Situationen (nicht dauerhaft)
- "Ich **wohne** diese Woche in einem Hotel." -> "I **am staying** at a hotel this week." (Vorübergehend - ich wohne nicht dauerhaft dort)
- "Sie **arbeitet** diesen Monat in London." -> "She **is working** in London this month." (Vorübergehender Job, nicht dauerhaft)
- Vergleich: "Ich **wohne** in Berlin." -> "I **live** in Berlin." (Dauerhaft - benutze Present Simple)

#### C. Sich verändernde Situationen
- "Das Wetter **wird** schlechter." -> "The weather **is getting** worse." (Es ändert sich gerade)
- "Dein Englisch **wird** besser." -> "Your English **is improving**." (Es wird mit der Zeit besser)
- "Die Bevölkerung **wächst**." -> "The population **is growing**." (Sie nimmt zu)

#### D. Zukunftspläne (bereits vereinbart/definitiv)
- "Ich **treffe** mich morgen mit John." -> "I **am meeting** John tomorrow." (Wir haben es bereits vereinbart)
- "Wir **fliegen** nächste Woche nach Paris." -> "We **are flying** to Paris next week." (Die Tickets sind gebucht)
- Hinweis: Das ist anders als "going to" - hier ist der Plan bereits vereinbart

### 3. Signalwörter 🚦

Diese Wörter und Phrasen zeigen oft an, dass du Present Continuous benutzen solltest:

**Zeitangaben:**
- **now** (jetzt) - "I am studying now." (Ich lerne gerade.)
- **at the moment** (im Moment) - "She is busy at the moment." (Sie ist gerade beschäftigt.)
- **right now** (gerade jetzt) - "I am working right now." (Ich arbeite gerade jetzt.)
- **currently** (derzeit) - "He is currently learning Spanish." (Er lernt derzeit Spanisch.)
- **at present** (derzeit) - "At present, we are renovating the house." (Derzeit renovieren wir das Haus.)

**Aufmerksamkeitswörter:**
- **Look!** (Schau mal!) - "Look! The bus is coming!" (Schau! Der Bus kommt!)
- **Listen!** (Hör mal!) - "Listen! Someone is singing." (Hör! Jemand singt.)
- **Watch out!** (Pass auf!) - "Watch out! That car is moving!" (Pass auf! Das Auto bewegt sich!)

**Diese Signalwörter helfen dir zu erkennen, wann eine Handlung gerade jetzt passiert.**

### 4. Schreibregeln für -ing 📝

Das Anhängen von **-ing** scheint einfach, aber es gibt wichtige Schreibregeln zu beachten:

#### Regel 1: Die meisten Verben - einfach -ing anhängen
- play → play**ing**
- work → work**ing**
- read → read**ing**
- eat → eat**ing**

#### Regel 2: Stummes 'e' am Ende - das 'e' weglassen und -ing anhängen
- come → com**ing** (nicht "comeing")
- make → mak**ing**
- write → writ**ing**
- take → tak**ing**
- dance → danc**ing**

**Ausnahme:** Wenn das Verb auf -ee endet, behalte beide e's:
- see → see**ing**
- agree → agree**ing**
- flee → flee**ing**

#### Regel 3: Ein-silbige Verben mit kurzem Vokal + einfachem Konsonant - Konsonant verdoppeln
- sit → sit**t**ing (nicht "siting")
- run → run**n**ing
- swim → swim**m**ing
- stop → stop**p**ing
- get → get**t**ing

**Warum?** Das behält den kurzen Vokallaut. Vergleiche:
- "siting" würde klingen wie "sighting" (langes i)
- "sitting" behält den kurzen i-Laut

#### Regel 4: Zwei-silbige Verben - verdoppeln, wenn die Betonung auf der letzten Silbe liegt
- begin → begin**n**ing (Betonung auf "gin")
- prefer → prefer**r**ing (Betonung auf "fer")
- admit → admit**t**ing (Betonung auf "mit")

**Aber:** Wenn die Betonung auf der ersten Silbe liegt, nicht verdoppeln:
- visit → visit**ing** (Betonung auf "vis")
- open → open**ing** (Betonung auf "o")
- happen → happen**ing** (Betonung auf "hap")

#### Regel 5: Verben, die auf -ie enden - ändern zu -y
- lie → ly**ing** (nicht "lieing")
- die → dy**ing**
- tie → ty**ing**

#### Regel 6: Verben, die auf -y enden - einfach -ing anhängen (keine Änderung)
- play → play**ing**
- enjoy → enjoy**ing**
- study → study**ing** (nicht "studying" - das y bleibt)

**Hinweis:** Das ist anders als beim Present Simple, wo "study" zu "studies" wird!

### 5. Häufige Fehler und wie man sie vermeidet ⚠️

#### Fehler 1: "to be" vergessen
- ❌ "I playing football." (Falsch - "am" fehlt)
- ✅ "I **am** playing football." (Richtig)

**Warum das passiert:** In vielen Sprachen braucht man kein Hilfsverb. Aber im Englischen ist "am/is/are" essentiell!

#### Fehler 2: Present Continuous für dauerhafte Fakten benutzen
- ❌ "I am living in Berlin." (Falsch, wenn du dauerhaft dort wohnst)
- ✅ "I **live** in Berlin." (Richtig - benutze Present Simple für dauerhafte Situationen)

**Ausnahme:** "I am living in Berlin" ist richtig, wenn du vorübergehend dort bist (z.B. für die Arbeit).

#### Fehler 3: Present Continuous mit Zustandsverben benutzen
- ❌ "I am knowing him." (Falsch - "know" ist ein Zustandsverb)
- ✅ "I **know** him." (Richtig - benutze Present Simple)

**Zustandsverben** (wie know, like, want, understand) beschreiben Zustände, keine Handlungen. Sie benutzen normalerweise kein -ing.

#### Fehler 4: Falsche Schreibung von -ing
- ❌ "I am comming." (Falsch - sollte "coming" sein)
- ✅ "I am com**ing**." (Richtig - das e weglassen)

- ❌ "She is runing." (Falsch - sollte das n verdoppeln)
- ✅ "She is run**n**ing." (Richtig - Konsonant nach kurzem Vokal verdoppeln)

<div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-4 my-4">
  <strong className="text-red-800 dark:text-red-200">⚠️ Häufigster Fehler!</strong>
  <br/>
  Vergiss nicht das "to be" (am/is/are)!
  <br/>
  - ❌ "I playing football." (Falsch!)
  <br/>
  - ✅ "I **am** playing football." (Richtig!)
  <br/>
  <br/>
  Merke: Present Continuous = am/is/are + Verb-ing
  <br/>
  Beide Teile sind essentiell!
</div>

<GamePlaceholder id="fixTheMistake" />

### 6. Fragen und Verneinungen ❓

#### Fragen
Um Fragen zu bilden, stelle **am/is/are** vor das Subjekt:

- "**Are** you listening?" (Nicht "Do you listening?")
- "**Is** she working?" (Nicht "Does she working?")
- "**Am** I doing this correctly?"
- "What **are** you doing?" (Fragewort + are + Subjekt + Verb-ing)

#### Verneinungen
Füge **not** nach am/is/are hinzu:

- "I **am not** sleeping." (Ich schlafe nicht)
- "She **is not** working." (She isn't working / She's not working)
- "They **are not** coming." (They aren't coming / They're not coming)

**Kurzformen:**
- am not → **'m not** (I'm not)
- is not → **isn't** (She isn't)
- are not → **aren't** (They aren't)

**Hinweis:** "I amn't" existiert nicht! Benutze immer "I'm not."

### 7. Aussprache-Tipps 🗣️

Beim Sprechen verwenden Muttersprachler oft Kontraktionen:
- "I'm reading" (nicht "I am reading" in lockerer Sprache)
- "She's working" (nicht "She is working")
- "They're playing" (nicht "They are playing")

Die **-ing** Endung wird als eine Silbe ausgesprochen: /ɪŋ/
- "working" klingt wie "work-ing" (eine Silbe für -ing)

---

### 🎮 Trainings-Arena

**🏎️ Grammar Racer: Action-Modus!**
Was passiert genau jetzt? Wähle blitzschnell die richtige Form!
<GamePlaceholder id="grammarRacer" />
`
  },
  task: {
    de: {
      title: 'Was passiert um dich herum?',
      description: 'Schau dich um. Was machen die Leute? Was passiert? Schreibe 3 Sätze im Present Continuous.',
      checklist: [
        { text: 'Ein Satz mit "I am..."', checked: false },
        { text: 'Ein Satz mit "He/She is..."', checked: false },
        { text: 'Ein Satz mit "They are..."', checked: false }
      ]
    },
    en: {
      title: 'What is happening around you?',
      description: 'Look around. What are people doing? What is happening? Write 3 sentences in Present Continuous.',
      checklist: [
        { text: 'One sentence with "I am..."', checked: false },
        { text: 'One sentence with "He/She is..."', checked: false },
        { text: 'One sentence with "They are..."', checked: false }
      ]
    }
  },
  quiz: {
    de: [
      { question: 'Welches Hilfsverb brauchen wir für Present Continuous?', answer: 'to be (am/is/are)' },
      { question: 'Was ist die Endung für das Hauptverb?', answer: '-ing' }
    ],
    en: [
      { question: 'Which auxiliary verb do we need for Present Continuous?', answer: 'to be (am/is/are)' },
      { question: 'What is the ending for the main verb?', answer: '-ing' }
    ]
  }
};
