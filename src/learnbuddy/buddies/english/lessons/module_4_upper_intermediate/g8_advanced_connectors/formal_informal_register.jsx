import React from 'react';
import GrammarGame from '../../../components/grammar-games/GrammarGame';

const sentenceBuilderData = [
  {
    prompt: { en: "I am writing to ___ about the delay in delivery. (formal email)", de: "Ich schreibe, um mich über die Lieferverzögerung zu beschweren. (formelle E-Mail)" },
    words: ["complain", "moan", "whinge", "gripe"],
    correct: "complain",
    explanation: { en: "'Complain' is the appropriate formal register. 'Moan', 'whinge', 'gripe' are informal/colloquial.", de: "'Complain' ist das passende formelle Register. 'Moan', 'whinge', 'gripe' sind informell/umgangssprachlich." }
  },
  {
    prompt: { en: "We would like to ___ our sincere apologies for the inconvenience. (formal)", de: "Wir möchten unsere aufrichtigen Entschuldigungen für die Unannehmlichkeiten aussprechen. (formell)" },
    words: ["extend", "give", "say", "tell"],
    correct: "extend",
    explanation: { en: "'Extend our apologies' is formal business English. 'Give/say/tell' are too informal for this context.", de: "'Extend our apologies' ist formelles Geschäftsenglisch. 'Give/say/tell' sind hier zu informell." }
  },
  {
    prompt: { en: "The meeting has been ___ until further notice. (formal)", de: "Das Meeting wurde bis auf Weiteres verschoben. (formell)" },
    words: ["postponed", "put off", "pushed back", "delayed"],
    correct: "postponed",
    explanation: { en: "'Postponed' is the formal equivalent of informal 'put off' or 'pushed back'.", de: "'Postponed' ist die formelle Entsprechung von informellem 'put off' oder 'pushed back'." }
  },
  {
    prompt: { en: "Could you ___ clarify this point? (polite formal)", de: "Könnten Sie diesen Punkt bitte klären? (höflich formell)" },
    words: ["kindly", "just", "quickly", "maybe"],
    correct: "kindly",
    explanation: { en: "'Kindly' is formal polite English: 'Could you kindly...' is used in professional correspondence.", de: "'Kindly' ist formelles höfliches Englisch: 'Could you kindly...' wird in professioneller Korrespondenz verwendet." }
  },
  {
    prompt: { en: "I would be ___ if you could send me the report. (very formal)", de: "Ich wäre Ihnen dankbar, wenn Sie mir den Bericht schicken könnten. (sehr formell)" },
    words: ["grateful", "happy", "glad", "cool"],
    correct: "grateful",
    explanation: { en: "'I would be grateful if...' is a very formal request formula. 'Happy/glad' are slightly less formal; 'cool' is very informal.", de: "'I would be grateful if...' ist eine sehr formelle Bittformel." }
  },
  {
    prompt: { en: "We need to ___ this issue at the next board meeting. (formal)", de: "Wir müssen dieses Problem in der nächsten Vorstandssitzung ansprechen. (formell)" },
    words: ["address", "deal with", "sort out", "fix"],
    correct: "address",
    explanation: { en: "'Address an issue' is formal. 'Deal with' is neutral, 'sort out' and 'fix' are informal.", de: "'Address an issue' ist formell. 'Deal with' ist neutral, 'sort out' und 'fix' sind informell." }
  }
];

const fixTheMistakeData = [
  {
    sentence: "Dear Sir, I wanna complain about your service.",
    mistakeIndex: 3,
    correction: "would like to",
    explanation: { en: "'Wanna' (= want to) is extremely informal/slang. In formal letters use 'would like to' or 'wish to'.", de: "'Wanna' (= want to) ist extrem informell/Slang. In formellen Briefen verwende 'would like to' oder 'wish to'." }
  },
  {
    sentence: "Please find attached the stuff you asked for.",
    mistakeIndex: 4,
    correction: "documents",
    explanation: { en: "'Stuff' is too informal for professional emails. Use 'documents', 'materials', or 'information'.", de: "'Stuff' ist zu informell für professionelle E-Mails. Verwende 'documents', 'materials' oder 'information'." }
  },
  {
    sentence: "The CEO reckons profits will go up next quarter.",
    mistakeIndex: 2,
    correction: "anticipates that",
    explanation: { en: "'Reckons' is informal British English. In formal/business context: 'anticipates', 'expects', 'projects'.", de: "'Reckons' ist informelles britisches Englisch. Im formellen/geschäftlichen Kontext: 'anticipates', 'expects', 'projects'." }
  },
  {
    sentence: "Hey Prof. Smith, just checking if you got my essay.",
    mistakeIndex: 0,
    correction: "Dear",
    explanation: { en: "'Hey' is far too casual for writing to a professor. Use 'Dear Professor Smith' as a formal greeting.", de: "'Hey' ist viel zu salopp für einen Professor. Verwende 'Dear Professor Smith' als formelle Anrede." }
  }
];

const grammarRacerData = [
  {
    prompt: "Formal for 'I'm sorry': 'I ___.'",
    options: ["apologise", "am sorry", "feel bad"],
    correct: "apologise",
    explanation: "'I apologise' is more formal than 'I'm sorry' in professional contexts."
  },
  {
    prompt: "Formal word for 'get': 'Please ___ the documents.'",
    options: ["obtain", "get", "grab"],
    correct: "obtain",
    explanation: "'Obtain' is formal; 'get' is neutral; 'grab' is very informal."
  },
  {
    prompt: "Formal for 'help': 'We are happy to ___ you.'",
    options: ["assist", "help out", "give a hand"],
    correct: "assist",
    explanation: "'Assist' is the formal equivalent of 'help' in professional contexts."
  },
  {
    prompt: "Formal email ending: '___.'",
    options: ["Yours faithfully", "Cheers", "Later"],
    correct: "Yours faithfully",
    explanation: "'Yours faithfully' (when you don't know the name) is the most formal closing."
  },
  {
    prompt: "Formal for 'ask for': 'I would like to ___ a refund.'",
    options: ["request", "ask for", "demand"],
    correct: "request",
    explanation: "'Request' is the formal equivalent of 'ask for'."
  }
];

export const formalInformalRegister = {
  id: 'b2_g17',
  title: {
    en: 'Formal vs Informal Register',
    de: 'Formelles vs. Informelles Register'
  },
  description: {
    en: "Know when to use formal or informal language: business emails, academic writing, casual conversation.",
    de: "Wissen, wann formelle oder informelle Sprache verwendet wird: Geschäfts-E-Mails, akademisches Schreiben, lockere Konversation."
  },
  components: {
    sentenceBuilder: <GrammarGame type="sentenceBuilder" data={sentenceBuilderData} />,
    fixTheMistake: <GrammarGame type="fixTheMistake" data={fixTheMistakeData} />,
    grammarRacer: <GrammarGame type="grammarRacer" data={grammarRacerData} />
  },
  content: {
    en: `
## Formal vs Informal Register 🎩👕

**Register** refers to the level of formality in language. Choosing the right register is crucial — using slang in a job application or overly formal language with friends both sound wrong. At B2 level, you need to **recognise** and **switch between** registers confidently.

### 1. What Determines Register? 🤔

| Factor | Formal | Informal |
|--------|--------|----------|
| **Who you're writing to** | Boss, professor, client | Friend, family, colleague |
| **What format** | Report, essay, business letter | Text message, chat, personal email |
| **Purpose** | Persuade, inform officially | Chat, share news, joke |
| **Relationship** | Professional, distant | Close, familiar |

### 2. Key Formal vs. Informal Word Pairs 🔄

| Informal | Formal | Example (Formal) |
|----------|--------|------------------|
| ask for | **request** | "I would like to **request** a meeting." |
| get | **obtain / receive** | "Please **obtain** the necessary documents." |
| help | **assist** | "We are happy to **assist** you." |
| need | **require** | "We **require** further information." |
| start | **commence** | "The ceremony will **commence** at 10am." |
| end | **conclude / terminate** | "We wish to **terminate** the agreement." |
| buy | **purchase** | "You may **purchase** tickets online." |
| give | **provide** | "Please **provide** your contact details." |
| about | **regarding / concerning** | "I am writing **regarding** your complaint." |
| sorry | **apologise** | "We sincerely **apologise** for the delay." |
| tell | **inform / notify** | "We wish to **inform** you that..." |
| put off | **postpone** | "The meeting has been **postponed**." |
| fix | **resolve / rectify** | "We will **rectify** the error immediately." |
| go up | **increase** | "Prices have **increased** significantly." |
| go down | **decrease / decline** | "Sales have **declined** this quarter." |

### 3. Formal Email Phrases 📧

**Opening:**
- "Dear Mr/Mrs/Ms [Name]," (know the name)
- "Dear Sir/Madam," (don't know the name)
- "To Whom It May Concern," (very formal, generic)

**Requesting:**
- "I would be grateful if you could..."
- "Could you kindly..."
- "I would like to request..."

**Giving information:**
- "Please find attached..."
- "I am writing to inform you that..."
- "Further to our conversation..."

**Closing:**
- "Yours sincerely," (you know the name)
- "Yours faithfully," (you don't know the name)
- "I look forward to hearing from you."

<div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">💡 The Formality Spectrum</h3>
  <p>Very informal: "Hey! Gonna need that ASAP lol"</p>
  <p>Informal: "Hi! Can you send it over when you get a chance?"</p>
  <p>Neutral: "Hello, could you please send the file at your earliest convenience?"</p>
  <p>Formal: "Dear Ms Smith, I would be grateful if you could forward the document."</p>
  <p>Very formal: "Dear Madam, I am writing to respectfully request the aforementioned documentation."</p>
</div>

<GamePlaceholder id="sentenceBuilder" />

### 4. Informal Language Features 👕

**Contractions:** "I'm, you're, can't, won't, gonna, wanna"
**Phrasal verbs:** "put off, sort out, come up with, get rid of"
**Slang & fillers:** "cool, awesome, stuff, like, you know, kinda"
**Short sentences:** "Sure. No worries. Sounds good."
**Emojis & abbreviations:** "thx, btw, lol, brb"

### 5. Formal Language Features 🎩

**No contractions:** "I am, you are, cannot, will not"
**Latin/French-origin words:** "obtain, require, commence, terminate"
**Passive voice:** "The decision was made..." (not "We decided...")
**Complex sentences:** "Should you require any further assistance, please do not hesitate to contact us."
**Hedging:** "It would appear that...", "It is suggested that..."

### 6. Common Mistakes ❌

- ❌ Using "wanna/gonna" in formal writing → ✅ "would like to / going to"
- ❌ "Hey Prof. Smith" → ✅ "Dear Professor Smith"
- ❌ "The stuff you asked for" (in business email) → ✅ "The documents you requested"
- ❌ "I would be most grateful if you could pass me the salt" (too formal for dinner!) → ✅ "Could you pass the salt?"
- ❌ Mixing registers in the same text (formal opening, slang body)

<GamePlaceholder id="fixTheMistake" />

---

### 🎮 Practice Arena
<GamePlaceholder id="grammarRacer" />
`,
    de: `
## Formelles vs. Informelles Register 🎩👕

**Register** bezieht sich auf den Formalitätsgrad in der Sprache. Die Wahl des richtigen Registers ist entscheidend — Slang in einer Bewerbung oder übermäßig formelle Sprache mit Freunden klingt beides falsch. Auf B2-Niveau musst du Register **erkennen** und sicher **zwischen ihnen wechseln** können.

### 1. Was bestimmt das Register? 🤔

| Faktor | Formell | Informell |
|--------|---------|-----------|
| **An wen du schreibst** | Chef, Professor, Kunde | Freund, Familie, Kollege |
| **Welches Format** | Bericht, Aufsatz, Geschäftsbrief | Textnachricht, Chat, persönliche E-Mail |
| **Zweck** | Überzeugen, offiziell informieren | Plaudern, Neuigkeiten teilen, scherzen |
| **Beziehung** | Professionell, distanziert | Eng, vertraut |

### 2. Wichtige formelle vs. informelle Wortpaare 🔄

| Informell | Formell | Beispiel (Formell) |
|-----------|---------|---------------------|
| ask for | **request** | "I would like to **request** a meeting." |
| get | **obtain / receive** | "Please **obtain** the necessary documents." |
| help | **assist** | "We are happy to **assist** you." |
| need | **require** | "We **require** further information." |
| start | **commence** | "The ceremony will **commence** at 10am." |
| end | **conclude / terminate** | "We wish to **terminate** the agreement." |
| buy | **purchase** | "You may **purchase** tickets online." |
| give | **provide** | "Please **provide** your contact details." |
| about | **regarding / concerning** | "I am writing **regarding** your complaint." |
| sorry | **apologise** | "We sincerely **apologise** for the delay." |
| tell | **inform / notify** | "We wish to **inform** you that..." |
| put off | **postpone** | "The meeting has been **postponed**." |
| fix | **resolve / rectify** | "We will **rectify** the error immediately." |
| go up | **increase** | "Prices have **increased** significantly." |
| go down | **decrease / decline** | "Sales have **declined** this quarter." |

### 3. Formelle E-Mail-Phrasen 📧

**Eröffnung:**
- "Dear Mr/Mrs/Ms [Name]," (Name bekannt)
- "Dear Sir/Madam," (Name nicht bekannt)
- "To Whom It May Concern," (sehr formell, allgemein)

**Bitten:**
- "I would be grateful if you could..."
- "Could you kindly..."
- "I would like to request..."

**Informationen geben:**
- "Please find attached..."
- "I am writing to inform you that..."
- "Further to our conversation..."

**Schluss:**
- "Yours sincerely," (Name bekannt)
- "Yours faithfully," (Name nicht bekannt)
- "I look forward to hearing from you."

<div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg my-4">
  <h3 className="font-bold mb-2">💡 Das Formalitätsspektrum</h3>
  <p>Sehr informell: "Hey! Gonna need that ASAP lol"</p>
  <p>Informell: "Hi! Can you send it over when you get a chance?"</p>
  <p>Neutral: "Hello, could you please send the file at your earliest convenience?"</p>
  <p>Formell: "Dear Ms Smith, I would be grateful if you could forward the document."</p>
  <p>Sehr formell: "Dear Madam, I am writing to respectfully request the aforementioned documentation."</p>
</div>

<GamePlaceholder id="sentenceBuilder" />

### 4. Informelle Sprachmerkmale 👕

**Kurzformen:** "I'm, you're, can't, won't, gonna, wanna"
**Phrasal Verbs:** "put off, sort out, come up with, get rid of"
**Slang & Füllwörter:** "cool, awesome, stuff, like, you know, kinda"
**Kurze Sätze:** "Sure. No worries. Sounds good."
**Emojis & Abkürzungen:** "thx, btw, lol, brb"

### 5. Formelle Sprachmerkmale 🎩

**Keine Kurzformen:** "I am, you are, cannot, will not"
**Lateinisch/französische Wörter:** "obtain, require, commence, terminate"
**Passiv:** "The decision was made..." (nicht "We decided...")
**Komplexe Sätze:** "Should you require any further assistance, please do not hesitate to contact us."
**Abschwächung:** "It would appear that...", "It is suggested that..."

### 6. Häufige Fehler ❌

- ❌ "Wanna/gonna" in formeller Schriftsprache → ✅ "would like to / going to"
- ❌ "Hey Prof. Smith" → ✅ "Dear Professor Smith"
- ❌ "The stuff you asked for" (in Geschäfts-E-Mail) → ✅ "The documents you requested"
- ❌ "I would be most grateful if you could pass me the salt" (zu formell fürs Abendessen!) → ✅ "Could you pass the salt?"
- ❌ Register in demselben Text mischen (formelle Eröffnung, Slang im Hauptteil)

<GamePlaceholder id="fixTheMistake" />

---

### 🎮 Trainings-Arena
<GamePlaceholder id="grammarRacer" />
`
  }
};
