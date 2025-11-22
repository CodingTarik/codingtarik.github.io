import React from 'react';
import GrammarGame from '../../../components/grammar-games/GrammarGame';

const sentenceBuilderData = [
  {
    prompt: { en: "___ you like some coffee?", de: "___ du etwas Kaffee?" },
    words: ["Would", "you", "like", "some", "coffee"],
    correct: "Would you like some coffee",
    explanation: { en: "Would you like...? (Polite offer)", de: "Would you like...? (Höfliches Angebot)" }
  },
  {
    prompt: { en: "___ I have a glass of water?", de: "___ ich ein Glas Wasser haben?" },
    words: ["Can", "I", "have", "a", "glass", "of", "water"],
    correct: "Can I have a glass of water",
    explanation: { en: "Can I have...? (Polite request)", de: "Can I have...? (Höfliche Bitte)" }
  },
  {
    prompt: { en: "___ you help me, please?", de: "___ du mir bitte helfen?" },
    words: ["Could", "you", "help", "me", "please"],
    correct: "Could you help me please",
    explanation: { en: "Could you...? (Very polite)", de: "Could you...? (Sehr höflich)" }
  }
];

const fixTheMistakeData = [
  {
    sentence: "Do you like some tea?",
    mistakeIndex: 0,
    correction: "Would",
    explanation: { en: "Offers use 'Would you like...?', not 'Do you like...?'", de: "Angebote verwenden 'Would you like...?', nicht 'Do you like...?'" }
  },
  {
    sentence: "Can I to have a cookie?",
    mistakeIndex: 2,
    correction: "have",
    explanation: { en: "No 'to' after modal verbs! Can I have...", de: "Kein 'to' nach Modalverben! Can I have..." }
  },
  {
    sentence: "Would you like drink something?",
    mistakeIndex: 2,
    correction: "to drink",
    explanation: { en: "Would you like + to + verb", de: "Would you like + to + Verb" }
  }
];

const grammarMoleData = [
  {
    prompt: "___ you like a sandwich?",
    options: ["Would", "Do", "Are"],
    correct: "Would",
    explanation: "Polite offer"
  },
  {
    prompt: "___ I have the menu, please?",
    options: ["Can", "Do", "Am"],
    correct: "Can",
    explanation: "Polite request"
  },
  {
    prompt: "___ you pass me the salt?",
    options: ["Could", "Do", "Are"],
    correct: "Could",
    explanation: "Very polite request"
  },
  {
    prompt: "Would you like ___ go to the cinema?",
    options: ["to", "go", "going"],
    correct: "to",
    explanation: "Would you like + to + verb"
  }
];

export const politeRequests = {
  id: 'a1_g37',
  title: {
    en: 'Polite Requests: Can/Could/Would you...?',
    de: 'Höfliche Bitten: Can/Could/Would you...?'
  },
  description: {
    en: "Being polite in English: 'Would you like...?' and 'Can I have...?'",
    de: "Höflich sein auf Englisch: 'Would you like...?' und 'Can I have...?'"
  },
  
  components: {
    sentenceBuilder: <GrammarGame type="sentenceBuilder" data={sentenceBuilderData} />,
    fixTheMistake: <GrammarGame type="fixTheMistake" data={fixTheMistakeData} />,
    grammarMole: <GrammarGame type="grammarMole" data={grammarMoleData} />
  },

  content: {
    en: `
## Being Polite in English: The Magic Words 🎩

In English, being polite is very important! We use special phrases to ask for things nicely, make offers, and show respect. This lesson teaches you the most common polite expressions you'll need every day.

### 1. Why Be Polite? 🤝

Politeness shows respect and makes people want to help you. In English-speaking countries, being polite is expected in shops, restaurants, and when asking for help.

**Compare:**
- ❌ "Give me water." (Rude!)
- ✅ "**Can I have** some water, please?" (Polite!)

### 2. "Would you like...?" - Making Offers 🎁

**Would you like...?** is the most polite way to offer something to someone.

**Structure:** Would you like + noun / Would you like + to + verb

**Examples:**
- "**Would you like** some coffee?" (Offering coffee)
- "**Would you like** to go to the cinema?" (Offering an activity)
- "**Would you like** a sandwich?" (Offering food)

**Important:** This is different from "Do you like...?" 
- "**Do you like** coffee?" = Asking about preference (Do you enjoy coffee in general?)
- "**Would you like** coffee?" = Making an offer (Do you want coffee now?)

<GamePlaceholder id="sentenceBuilder" />

### 3. "Can I have...?" - Asking for Things 🛒

**Can I have...?** is perfect for ordering food, asking for items, or requesting something.

**Structure:** Can I have + noun (+ please)?

**Examples:**
- "**Can I have** a glass of water, please?" (In a restaurant)
- "**Can I have** the menu?" (Asking for menu)
- "**Can I have** two tickets?" (Buying tickets)

**Note:** "Can I have...?" is more natural than "May I have...?" in everyday English, though both are correct.

### 4. "Could you...?" - Asking for Help 🙏

**Could you...?** is very polite when asking someone to do something for you.

**Structure:** Could you + verb (+ please)?

**Examples:**
- "**Could you** help me, please?" (Asking for help)
- "**Could you** pass me the salt?" (Asking someone to pass something)
- "**Could you** open the window?" (Asking someone to do something)

**Note:** "Could" is more polite than "Can" in requests, but both are acceptable.

### 5. The Power of "Please" ✨

**Please** makes any request more polite! You can put it at the beginning or end.

- "**Please** help me." or "Help me, **please**."
- "**Can I have** a coffee, **please**?"
- "**Could you** open the door, **please**?"

**Remember:** Always use "please" when asking for something!

<GamePlaceholder id="fixTheMistake" />

### 6. Common Situations 🎯

#### In a Restaurant 🍽️
- "**Can I have** the menu, please?"
- "**Would you like** dessert?"
- "**Could you** bring me the bill, please?"

#### In a Shop 🛍️
- "**Can I have** this shirt in size M, please?"
- "**Could you** help me find...?"

#### Asking for Help 🆘
- "**Could you** help me, please?"
- "**Can you** tell me where...?"

#### Making Offers 🎁
- "**Would you like** some tea?"
- "**Would you like** to come with us?"

<GamePlaceholder id="grammarMole" />

### 7. Responding to Polite Requests 💬

**When someone asks "Would you like...?"**
- ✅ "Yes, please!" (Accepting)
- ✅ "No, thank you." (Declining politely)
- ✅ "Yes, I'd love to!" (Enthusiastic)

**When someone asks "Can I have...?"**
- ✅ "Of course!" (Yes)
- ✅ "Sure, here you are." (Yes, giving it)
- ✅ "I'm sorry, we don't have that." (No, apologizing)

**When someone asks "Could you...?"**
- ✅ "Of course!" (Yes)
- ✅ "Sure, no problem!" (Yes)
- ✅ "I'm sorry, I can't right now." (No, apologizing)

### 8. Common Mistakes ❌

1. **Don't confuse "Would you like" with "Do you like"**
   - ❌ "Do you like some coffee?" (Wrong for offers)
   - ✅ "Would you like some coffee?" (Correct for offers)

2. **Don't forget "to" after "Would you like"**
   - ❌ "Would you like go?" (Wrong)
   - ✅ "Would you like **to** go?" (Correct)

3. **Don't add "to" after "Can I have"**
   - ❌ "Can I have to a coffee?" (Wrong)
   - ✅ "Can I have a coffee?" (Correct)

### 9. Practice Makes Perfect! 🎓

Try using these phrases in your daily life:
- When ordering food: "Can I have..."
- When offering something: "Would you like..."
- When asking for help: "Could you..."

**Remember:** Being polite opens doors! These phrases will help you in every English-speaking situation.
`,
    de: `
## Höflich sein auf Englisch: Die Zauberwörter 🎩

Im Englischen ist Höflichkeit sehr wichtig! Wir verwenden spezielle Phrasen, um höflich um etwas zu bitten, Angebote zu machen und Respekt zu zeigen. Diese Lektion lehrt dich die häufigsten höflichen Ausdrücke, die du jeden Tag brauchst.

### 1. Warum höflich sein? 🤝

Höflichkeit zeigt Respekt und macht Menschen bereit, dir zu helfen. In englischsprachigen Ländern wird Höflichkeit in Geschäften, Restaurants und beim Bitten um Hilfe erwartet.

**Vergleiche:**
- ❌ "Give me water." (Unhöflich!)
- ✅ "**Can I have** some water, please?" (Höflich!)

### 2. "Would you like...?" - Angebote machen 🎁

**Would you like...?** ist die höflichste Art, jemandem etwas anzubieten.

**Struktur:** Would you like + Nomen / Would you like + to + Verb

**Beispiele:**
- "**Would you like** some coffee?" (Kaffee anbieten)
- "**Would you like** to go to the cinema?" (Aktivität anbieten)
- "**Would you like** a sandwich?" (Essen anbieten)

**Wichtig:** Das ist anders als "Do you like...?"
- "**Do you like** coffee?" = Nach Präferenz fragen (Magst du Kaffee generell?)
- "**Would you like** coffee?" = Ein Angebot machen (Möchtest du jetzt Kaffee?)

<GamePlaceholder id="sentenceBuilder" />

### 3. "Can I have...?" - Um etwas bitten 🛒

**Can I have...?** ist perfekt zum Bestellen von Essen, um Gegenstände zu bitten oder etwas zu erbitten.

**Struktur:** Can I have + Nomen (+ please)?

**Beispiele:**
- "**Can I have** a glass of water, please?" (Im Restaurant)
- "**Can I have** the menu?" (Nach der Speisekarte fragen)
- "**Can I have** two tickets?" (Tickets kaufen)

**Hinweis:** "Can I have...?" ist im Alltagsenglisch natürlicher als "May I have...?", obwohl beide richtig sind.

### 4. "Could you...?" - Um Hilfe bitten 🙏

**Could you...?** ist sehr höflich, wenn du jemanden bittest, etwas für dich zu tun.

**Struktur:** Could you + Verb (+ please)?

**Beispiele:**
- "**Could you** help me, please?" (Um Hilfe bitten)
- "**Could you** pass me the salt?" (Jemanden bitten, etwas zu reichen)
- "**Could you** open the window?" (Jemanden bitten, etwas zu tun)

**Hinweis:** "Could" ist bei Bitten höflicher als "Can", aber beide sind akzeptabel.

### 5. Die Macht von "Please" ✨

**Please** macht jede Bitte höflicher! Du kannst es am Anfang oder Ende setzen.

- "**Please** help me." oder "Help me, **please**."
- "**Can I have** a coffee, **please**?"
- "**Could you** open the door, **please**?"

**Denk daran:** Verwende immer "please", wenn du um etwas bittest!

<GamePlaceholder id="fixTheMistake" />

### 6. Häufige Situationen 🎯

#### Im Restaurant 🍽️
- "**Can I have** the menu, please?"
- "**Would you like** dessert?"
- "**Could you** bring me the bill, please?"

#### Im Geschäft 🛍️
- "**Can I have** this shirt in size M, please?"
- "**Could you** help me find...?"

#### Um Hilfe bitten 🆘
- "**Could you** help me, please?"
- "**Can you** tell me where...?"

#### Angebote machen 🎁
- "**Would you like** some tea?"
- "**Would you like** to come with us?"

<GamePlaceholder id="grammarMole" />

### 7. Auf höfliche Bitten antworten 💬

**Wenn jemand fragt "Would you like...?"**
- ✅ "Yes, please!" (Annehmen)
- ✅ "No, thank you." (Höflich ablehnen)
- ✅ "Yes, I'd love to!" (Begeistert)

**Wenn jemand fragt "Can I have...?"**
- ✅ "Of course!" (Ja)
- ✅ "Sure, here you are." (Ja, hier ist es)
- ✅ "I'm sorry, we don't have that." (Nein, entschuldigend)

**Wenn jemand fragt "Could you...?"**
- ✅ "Of course!" (Ja)
- ✅ "Sure, no problem!" (Ja)
- ✅ "I'm sorry, I can't right now." (Nein, entschuldigend)

### 8. Häufige Fehler ❌

1. **Verwechsle nicht "Would you like" mit "Do you like"**
   - ❌ "Do you like some coffee?" (Falsch für Angebote)
   - ✅ "Would you like some coffee?" (Richtig für Angebote)

2. **Vergiss nicht "to" nach "Would you like"**
   - ❌ "Would you like go?" (Falsch)
   - ✅ "Would you like **to** go?" (Richtig)

3. **Füge kein "to" nach "Can I have" hinzu**
   - ❌ "Can I have to a coffee?" (Falsch)
   - ✅ "Can I have a coffee?" (Richtig)

### 9. Übung macht den Meister! 🎓

Versuche, diese Phrasen in deinem täglichen Leben zu verwenden:
- Beim Bestellen von Essen: "Can I have..."
- Beim Anbieten von etwas: "Would you like..."
- Beim Bitten um Hilfe: "Could you..."

**Denk daran:** Höflichkeit öffnet Türen! Diese Phrasen helfen dir in jeder englischsprachigen Situation.
`
  },
  task: {
    de: {
      title: 'Höfliche Bitten üben',
      description: 'Schreibe drei höfliche Sätze: einen für ein Angebot, einen für eine Bitte und einen für Hilfe.',
      checklist: [
        { text: 'Angebot: Would you like...?', checked: false },
        { text: 'Bitte: Can I have...?', checked: false },
        { text: 'Hilfe: Could you...?', checked: false }
      ]
    },
    en: {
      title: 'Practicing Polite Requests',
      description: 'Write three polite sentences: one for an offer, one for a request, and one for help.',
      checklist: [
        { text: 'Offer: Would you like...?', checked: false },
        { text: 'Request: Can I have...?', checked: false },
        { text: 'Help: Could you...?', checked: false }
      ]
    }
  },
  quiz: { de: [], en: [] }
};

