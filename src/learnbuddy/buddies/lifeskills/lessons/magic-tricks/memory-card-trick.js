export const memoryCardTrick = {
  id: 'magic-trick-1-memory-card',
  category: 'Card Tricks',
  categoryTitle: {
    en: 'Magic Tricks: Card Tricks',
    de: 'Zaubertricks: Kartentricks'
  },
  title: {
    en: 'The Memory Card Trick',
    de: 'Der Gedächtnis-Kartentrick'
  },
  difficulty: 'beginner',
  duration: 15,
  description: {
    en: 'Learn to "read minds" by using a simple memory technique to identify a card that was selected and placed back in the deck.',
    de: 'Lerne "Gedanken zu lesen" durch eine einfache Gedächtnistechnik, um eine Karte zu identifizieren, die ausgewählt und zurück ins Deck gelegt wurde.'
  },
  content: {
    en: `## The Memory Card Trick

This trick makes it appear as if you can read someone's mind by identifying a card they selected. The secret lies in a simple memory technique.

### Preparation

1. Before performing, secretly memorize the **bottom card** of the deck.
2. This is your "key card" - you'll use it to identify the selected card.

<div className="my-6 flex justify-center">
  <svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-md">
    <!-- Deck of cards -->
    <rect x="150" y="50" width="100" height="140" rx="5" fill="#1e40af" stroke="#1e3a8a" strokeWidth="2"/>
    <rect x="155" y="55" width="90" height="130" rx="3" fill="#ffffff"/>
    <text x="200" y="120" textAnchor="middle" fontSize="12" fill="#1e40af">DECK</text>
    
    <!-- Bottom card highlighted -->
    <rect x="150" y="180" width="100" height="20" rx="3" fill="#fbbf24" stroke="#f59e0b" strokeWidth="2" opacity="0.8"/>
    <text x="200" y="193" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#1e40af">MEMORIZE THIS!</text>
    
    <!-- Arrow pointing to bottom card -->
    <path d="M 200 210 L 200 200" stroke="#f59e0b" strokeWidth="2" fill="none" markerEnd="url(#arrowhead)"/>
    <text x="210" y="215" fontSize="10" fill="#f59e0b">Key Card</text>
    
    <defs>
      <marker id="arrowhead" markerWidth="10" markerHeight="10" refX="5" refY="5" orient="auto">
        <polygon points="0 0, 10 5, 0 10" fill="#f59e0b"/>
      </marker>
    </defs>
  </svg>
</div>

### Performance Steps

1. **Show the deck:** Hold the deck face down and let the spectator see that it's a normal deck.
2. **Have them select a card:** Ask them to say "STOP" at any point while you deal cards face up.
3. **The selection:** When they say stop, show them the card at that position.
4. **Place it back:** Have them place the card back into the deck (face down).
5. **The reveal:** Shuffle the deck, then find and reveal their card!

<div className="my-6 flex justify-center">
  <svg viewBox="0 0 500 400" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-lg">
    <!-- Step 1: Dealing cards -->
    <g id="step1">
      <rect x="50" y="50" width="80" height="120" rx="5" fill="#1e40af" stroke="#1e3a8a" strokeWidth="2"/>
      <rect x="55" y="55" width="70" height="110" rx="3" fill="#ffffff"/>
      <text x="90" y="110" textAnchor="middle" fontSize="10" fill="#1e40af">DECK</text>
      
      <!-- Cards being dealt -->
      <rect x="150" y="80" width="60" height="90" rx="3" fill="#ffffff" stroke="#1e40af" strokeWidth="2"/>
      <text x="180" y="125" textAnchor="middle" fontSize="14" fill="#dc2626">A♠</text>
      
      <rect x="220" y="80" width="60" height="90" rx="3" fill="#ffffff" stroke="#1e40af" strokeWidth="2"/>
      <text x="250" y="125" textAnchor="middle" fontSize="14" fill="#dc2626">7♥</text>
      
      <rect x="290" y="80" width="60" height="90" rx="3" fill="#fbbf24" stroke="#f59e0b" strokeWidth="3"/>
      <text x="320" y="125" textAnchor="middle" fontSize="14" fill="#dc2626">K♦</text>
      <text x="320" y="145" textAnchor="middle" fontSize="8" fill="#f59e0b">STOP!</text>
      
      <text x="200" y="200" textAnchor="middle" fontSize="12" fill="#374151">Step 1: Deal cards face up until they say "STOP"</text>
    </g>
    
    <!-- Step 2: Card placed back -->
    <g id="step2" transform="translate(0, 220)">
      <rect x="50" y="50" width="80" height="120" rx="5" fill="#1e40af" stroke="#1e3a8a" strokeWidth="2"/>
      <rect x="55" y="55" width="70" height="110" rx="3" fill="#ffffff"/>
      <text x="90" y="110" textAnchor="middle" fontSize="10" fill="#1e40af">DECK</text>
      
      <!-- Selected card going back -->
      <rect x="200" y="80" width="60" height="90" rx="3" fill="#fbbf24" stroke="#f59e0b" strokeWidth="3" opacity="0.7"/>
      <text x="230" y="125" textAnchor="middle" fontSize="14" fill="#dc2626">K♦</text>
      
      <path d="M 230 170 L 230 140" stroke="#f59e0b" strokeWidth="2" fill="none" markerEnd="url(#arrowdown)"/>
      
      <text x="200" y="200" textAnchor="middle" fontSize="12" fill="#374151">Step 2: They place the card back (face down)</text>
    </g>
    
    <defs>
      <marker id="arrowdown" markerWidth="10" markerHeight="10" refX="5" refY="5" orient="auto">
        <polygon points="0 0, 10 5, 0 10" fill="#f59e0b"/>
      </marker>
    </defs>
  </svg>
</div>

### The Secret

The trick works because:

1. You memorized the **bottom card** before starting.
2. When they place their selected card back into the deck, you secretly place it **directly on top** of your memorized key card.
3. After shuffling (but keeping the bottom card in place), you can find their card by looking for the card **directly above** your key card.
4. The key card acts as a "marker" to locate their selection!

<div className="my-6 flex justify-center">
  <svg viewBox="0 0 400 350" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-md">
    <!-- Deck structure showing the secret -->
    <rect x="150" y="50" width="100" height="250" rx="5" fill="#1e40af" stroke="#1e3a8a" strokeWidth="2"/>
    
    <!-- Top cards (normal) -->
    <rect x="155" y="55" width="90" height="15" rx="2" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1"/>
    <rect x="155" y="70" width="90" height="15" rx="2" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1"/>
    
    <!-- Selected card (highlighted) -->
    <rect x="155" y="85" width="90" height="15" rx="2" fill="#fbbf24" stroke="#f59e0b" strokeWidth="2"/>
    <text x="200" y="96" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#1e40af">Selected Card</text>
    
    <!-- Key card (memorized bottom card) -->
    <rect x="155" y="100" width="90" height="15" rx="2" fill="#10b981" stroke="#059669" strokeWidth="2"/>
    <text x="200" y="111" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#ffffff">Key Card</text>
    
    <!-- More cards below -->
    <rect x="155" y="115" width="90" height="15" rx="2" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1"/>
    <rect x="155" y="130" width="90" height="15" rx="2" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1"/>
    
    <!-- Bottom card (the one you memorized) -->
    <rect x="155" y="280" width="90" height="15" rx="2" fill="#3b82f6" stroke="#2563eb" strokeWidth="2"/>
    <text x="200" y="291" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#ffffff">Memorized Bottom</text>
    
    <!-- Arrow showing relationship -->
    <path d="M 200 115 L 200 105" stroke="#f59e0b" strokeWidth="2" fill="none" markerEnd="url(#arrowup)"/>
    <text x="210" y="108" fontSize="9" fill="#f59e0b">Above key card</text>
    
    <path d="M 200 295 L 200 285" stroke="#3b82f6" strokeWidth="2" fill="none" markerEnd="url(#arrowup2)"/>
    <text x="120" y="290" fontSize="9" fill="#3b82f6">You memorized this!</text>
    
    <text x="200" y="320" textAnchor="middle" fontSize="11" fill="#374151">The selected card is always directly above your key card!</text>
    
    <defs>
      <marker id="arrowup" markerWidth="10" markerHeight="10" refX="5" refY="5" orient="auto">
        <polygon points="0 0, 10 5, 0 10" fill="#f59e0b"/>
      </marker>
      <marker id="arrowup2" markerWidth="10" markerHeight="10" refX="5" refY="5" orient="auto">
        <polygon points="0 0, 10 5, 0 10" fill="#3b82f6"/>
      </marker>
    </defs>
  </svg>
</div>

### Tips for Success

- **Practice the placement:** Make sure you can smoothly place their card on top of your key card without them noticing.
- **Control the bottom:** When shuffling, keep the bottom card in place (or cut the deck so your key card stays at the bottom).
- **Misdirection:** While "finding" their card, act as if you're reading their mind or using intuition.
- **Practice:** The smoother your handling, the more magical it will appear!`,
    de: `## Der Gedächtnis-Kartentrick

Dieser Trick lässt es so aussehen, als könntest du jemandes Gedanken lesen, indem du eine von ihm ausgewählte Karte identifizierst. Das Geheimnis liegt in einer einfachen Gedächtnistechnik.

### Vorbereitung

1. Vor dem Vorführen merkst du dir heimlich die **unterste Karte** des Decks.
2. Dies ist deine "Schlüsselkarte" - du wirst sie verwenden, um die ausgewählte Karte zu identifizieren.

<div className="my-6 flex justify-center">
  <svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-md">
    <!-- Deck of cards -->
    <rect x="150" y="50" width="100" height="140" rx="5" fill="#1e40af" stroke="#1e3a8a" strokeWidth="2"/>
    <rect x="155" y="55" width="90" height="130" rx="3" fill="#ffffff"/>
    <text x="200" y="120" textAnchor="middle" fontSize="12" fill="#1e40af">DECK</text>
    
    <!-- Bottom card highlighted -->
    <rect x="150" y="180" width="100" height="20" rx="3" fill="#fbbf24" stroke="#f59e0b" strokeWidth="2" opacity="0.8"/>
    <text x="200" y="193" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#1e40af">MERK DIR DIESE!</text>
    
    <!-- Arrow pointing to bottom card -->
    <path d="M 200 210 L 200 200" stroke="#f59e0b" strokeWidth="2" fill="none" markerEnd="url(#arrowhead)"/>
    <text x="210" y="215" fontSize="10" fill="#f59e0b">Schlüsselkarte</text>
    
    <defs>
      <marker id="arrowhead" markerWidth="10" markerHeight="10" refX="5" refY="5" orient="auto">
        <polygon points="0 0, 10 5, 0 10" fill="#f59e0b"/>
      </marker>
    </defs>
  </svg>
</div>

### Vorführungsschritte

1. **Zeige das Deck:** Halte das Deck mit der Rückseite nach oben und lass den Zuschauer sehen, dass es ein normales Deck ist.
2. **Lass sie eine Karte wählen:** Bitte sie, "STOPP" zu sagen, während du Karten mit der Vorderseite nach oben ausgibst.
3. **Die Auswahl:** Wenn sie Stopp sagen, zeige ihnen die Karte an dieser Position.
4. **Zurücklegen:** Lass sie die Karte zurück ins Deck legen (mit der Rückseite nach oben).
5. **Die Enthüllung:** Mische das Deck, dann finde und enthülle ihre Karte!

<div className="my-6 flex justify-center">
  <svg viewBox="0 0 500 400" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-lg">
    <!-- Step 1: Dealing cards -->
    <g id="step1">
      <rect x="50" y="50" width="80" height="120" rx="5" fill="#1e40af" stroke="#1e3a8a" strokeWidth="2"/>
      <rect x="55" y="55" width="70" height="110" rx="3" fill="#ffffff"/>
      <text x="90" y="110" textAnchor="middle" fontSize="10" fill="#1e40af">DECK</text>
      
      <!-- Cards being dealt -->
      <rect x="150" y="80" width="60" height="90" rx="3" fill="#ffffff" stroke="#1e40af" strokeWidth="2"/>
      <text x="180" y="125" textAnchor="middle" fontSize="14" fill="#dc2626">A♠</text>
      
      <rect x="220" y="80" width="60" height="90" rx="3" fill="#ffffff" stroke="#1e40af" strokeWidth="2"/>
      <text x="250" y="125" textAnchor="middle" fontSize="14" fill="#dc2626">7♥</text>
      
      <rect x="290" y="80" width="60" height="90" rx="3" fill="#fbbf24" stroke="#f59e0b" strokeWidth="3"/>
      <text x="320" y="125" textAnchor="middle" fontSize="14" fill="#dc2626">K♦</text>
      <text x="320" y="145" textAnchor="middle" fontSize="8" fill="#f59e0b">STOPP!</text>
      
      <text x="200" y="200" textAnchor="middle" fontSize="12" fill="#374151">Schritt 1: Karten mit Vorderseite ausgeben bis sie "STOPP" sagen</text>
    </g>
    
    <!-- Step 2: Card placed back -->
    <g id="step2" transform="translate(0, 220)">
      <rect x="50" y="50" width="80" height="120" rx="5" fill="#1e40af" stroke="#1e3a8a" strokeWidth="2"/>
      <rect x="55" y="55" width="70" height="110" rx="3" fill="#ffffff"/>
      <text x="90" y="110" textAnchor="middle" fontSize="10" fill="#1e40af">DECK</text>
      
      <!-- Selected card going back -->
      <rect x="200" y="80" width="60" height="90" rx="3" fill="#fbbf24" stroke="#f59e0b" strokeWidth="3" opacity="0.7"/>
      <text x="230" y="125" textAnchor="middle" fontSize="14" fill="#dc2626">K♦</text>
      
      <path d="M 230 170 L 230 140" stroke="#f59e0b" strokeWidth="2" fill="none" markerEnd="url(#arrowdown)"/>
      
      <text x="200" y="200" textAnchor="middle" fontSize="12" fill="#374151">Schritt 2: Sie legen die Karte zurück (Rückseite nach oben)</text>
    </g>
    
    <defs>
      <marker id="arrowdown" markerWidth="10" markerHeight="10" refX="5" refY="5" orient="auto">
        <polygon points="0 0, 10 5, 0 10" fill="#f59e0b"/>
      </marker>
    </defs>
  </svg>
</div>

### Das Geheimnis

Der Trick funktioniert, weil:

1. Du dir vorher die **unterste Karte** gemerkt hast.
2. Wenn sie ihre ausgewählte Karte zurück ins Deck legen, platzierst du sie heimlich **direkt auf** deine gemerkte Schlüsselkarte.
3. Nach dem Mischen (aber die unterste Karte bleibt an Ort und Stelle) kannst du ihre Karte finden, indem du nach der Karte **direkt über** deiner Schlüsselkarte suchst.
4. Die Schlüsselkarte fungiert als "Marker", um ihre Auswahl zu lokalisieren!

<div className="my-6 flex justify-center">
  <svg viewBox="0 0 400 350" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-md">
    <!-- Deck structure showing the secret -->
    <rect x="150" y="50" width="100" height="250" rx="5" fill="#1e40af" stroke="#1e3a8a" strokeWidth="2"/>
    
    <!-- Top cards (normal) -->
    <rect x="155" y="55" width="90" height="15" rx="2" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1"/>
    <rect x="155" y="70" width="90" height="15" rx="2" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1"/>
    
    <!-- Selected card (highlighted) -->
    <rect x="155" y="85" width="90" height="15" rx="2" fill="#fbbf24" stroke="#f59e0b" strokeWidth="2"/>
    <text x="200" y="96" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#1e40af">Ausgewählte Karte</text>
    
    <!-- Key card (memorized bottom card) -->
    <rect x="155" y="100" width="90" height="15" rx="2" fill="#10b981" stroke="#059669" strokeWidth="2"/>
    <text x="200" y="111" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#ffffff">Schlüsselkarte</text>
    
    <!-- More cards below -->
    <rect x="155" y="115" width="90" height="15" rx="2" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1"/>
    <rect x="155" y="130" width="90" height="15" rx="2" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1"/>
    
    <!-- Bottom card (the one you memorized) -->
    <rect x="155" y="280" width="90" height="15" rx="2" fill="#3b82f6" stroke="#2563eb" strokeWidth="2"/>
    <text x="200" y="291" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#ffffff">Gemerkte Unterseite</text>
    
    <!-- Arrow showing relationship -->
    <path d="M 200 115 L 200 105" stroke="#f59e0b" strokeWidth="2" fill="none" markerEnd="url(#arrowup)"/>
    <text x="210" y="108" fontSize="9" fill="#f59e0b">Über Schlüsselkarte</text>
    
    <path d="M 200 295 L 200 285" stroke="#3b82f6" strokeWidth="2" fill="none" markerEnd="url(#arrowup2)"/>
    <text x="120" y="290" fontSize="9" fill="#3b82f6">Die hast du dir gemerkt!</text>
    
    <text x="200" y="320" textAnchor="middle" fontSize="11" fill="#374151">Die ausgewählte Karte ist immer direkt über deiner Schlüsselkarte!</text>
    
    <defs>
      <marker id="arrowup" markerWidth="10" markerHeight="10" refX="5" refY="5" orient="auto">
        <polygon points="0 0, 10 5, 0 10" fill="#f59e0b"/>
      </marker>
      <marker id="arrowup2" markerWidth="10" markerHeight="10" refX="5" refY="5" orient="auto">
        <polygon points="0 0, 10 5, 0 10" fill="#3b82f6"/>
      </marker>
    </defs>
  </svg>
</div>

### Tipps für den Erfolg

- **Übe die Platzierung:** Stelle sicher, dass du ihre Karte reibungslos auf deine Schlüsselkarte platzieren kannst, ohne dass sie es bemerken.
- **Kontrolliere die Unterseite:** Beim Mischen halte die unterste Karte an Ort und Stelle (oder teile das Deck so, dass deine Schlüsselkarte unten bleibt).
- **Ablenkung:** Während du ihre Karte "findest", tue so, als würdest du ihre Gedanken lesen oder Intuition verwenden.
- **Übung:** Je reibungsloser deine Handhabung, desto magischer wird es erscheinen!`
  },
  exercises: [
    {
      id: 'practice-memory-trick',
      title: {
        en: 'Practice the Memory Card Trick',
        de: 'Übe den Gedächtnis-Kartentrick'
      },
      description: {
        en: 'Practice this trick 10 times. Focus on smoothly placing the selected card on top of your key card.',
        de: 'Übe diesen Trick 10 Mal. Konzentriere dich darauf, die ausgewählte Karte reibungslos auf deine Schlüsselkarte zu platzieren.'
      }
    }
  ]
};

