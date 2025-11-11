export const cardToTop = {
  id: 'magic-trick-2-card-to-top',
  category: 'Card Tricks',
  categoryTitle: {
    en: 'Magic Tricks: Card Tricks',
    de: 'Zaubertricks: Kartentricks'
  },
  title: {
    en: 'Card to the Top',
    de: 'Karte nach oben zaubern'
  },
  difficulty: 'beginner',
  duration: 20,
  description: {
    en: 'Learn to make a selected card magically appear at the top of the deck using a simple double lift technique.',
    de: 'Lerne, eine ausgewählte Karte mit einer einfachen Doppelhebe-Technik magisch oben im Deck erscheinen zu lassen.'
  },
  content: {
    en: `## Card to the Top

This trick makes a selected card magically appear at the top of the deck. The secret is a technique called the "double lift".

### Preparation

1. Have a spectator select a card from the deck.
2. While they look at their card, secretly take **two cards** from the top of the deck and hold them together as one.
3. Place their selected card on top of these two cards (so it's actually the second card from the top).

<div className="my-6 flex justify-center">
  <svg viewBox="0 0 500 400" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-lg">
    <!-- Deck -->
    <rect x="200" y="50" width="100" height="140" rx="5" fill="#1e40af" stroke="#1e3a8a" strokeWidth="2"/>
    <rect x="205" y="55" width="90" height="130" rx="3" fill="#ffffff"/>
    <text x="250" y="120" textAnchor="middle" fontSize="12" fill="#1e40af">DECK</text>
    
    <!-- Two cards held together (secret) -->
    <rect x="100" y="220" width="80" height="120" rx="5" fill="#3b82f6" stroke="#2563eb" strokeWidth="3" opacity="0.9"/>
    <rect x="105" y="225" width="70" height="110" rx="3" fill="#ffffff"/>
    <text x="140" y="280" textAnchor="middle" fontSize="10" fill="#3b82f6">2 CARDS</text>
    <text x="140" y="295" textAnchor="middle" fontSize="8" fill="#3b82f6">(as one)</text>
    
    <!-- Selected card -->
    <rect x="220" y="220" width="80" height="120" rx="5" fill="#fbbf24" stroke="#f59e0b" strokeWidth="3"/>
    <rect x="225" y="225" width="70" height="110" rx="3" fill="#ffffff"/>
    <text x="260" y="280" textAnchor="middle" fontSize="14" fill="#dc2626">K♦</text>
    <text x="260" y="300" textAnchor="middle" fontSize="10" fill="#f59e0b">Selected</text>
    
    <!-- Arrow showing placement -->
    <path d="M 260 210 L 260 200" stroke="#f59e0b" strokeWidth="2" fill="none" markerEnd="url(#arrowup)"/>
    <text x="270" y="205" fontSize="9" fill="#f59e0b">Place on top</text>
    
    <text x="250" y="360" textAnchor="middle" fontSize="11" fill="#374151">Step 1: Hold 2 cards as one, place selected card on top</text>
    
    <defs>
      <marker id="arrowup" markerWidth="10" markerHeight="10" refX="5" refY="5" orient="auto">
        <polygon points="0 0, 10 5, 0 10" fill="#f59e0b"/>
      </marker>
    </defs>
  </svg>
</div>

### The Double Lift

The double lift is the key technique:

1. **Grip:** Hold the deck in your left hand. Use your right thumb to grip the **top two cards** together from the right edge.
2. **Lift:** Lift both cards as if they were one single card.
3. **Show:** Turn them over to show the "top card" (which is actually the second card - their selection!).
4. **Replace:** Place them back on the deck face down.

<div className="my-6 flex justify-center">
  <svg viewBox="0 0 500 450" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-lg">
    <!-- Step 1: Grip two cards -->
    <g id="grip">
      <rect x="200" y="50" width="100" height="140" rx="5" fill="#1e40af" stroke="#1e3a8a" strokeWidth="2"/>
      <rect x="205" y="55" width="90" height="130" rx="3" fill="#ffffff"/>
      <text x="250" y="120" textAnchor="middle" fontSize="12" fill="#1e40af">DECK</text>
      
      <!-- Top two cards highlighted -->
      <rect x="205" y="55" width="90" height="20" rx="2" fill="#fbbf24" stroke="#f59e0b" strokeWidth="2" opacity="0.8"/>
      <text x="250" y="68" textAnchor="middle" fontSize="9" fill="#1e40af">2 CARDS</text>
      
      <!-- Thumb grip -->
      <circle cx="295" cy="65" r="8" fill="#f59e0b" opacity="0.6"/>
      <text x="310" y="70" fontSize="9" fill="#f59e0b">Thumb</text>
      
      <text x="250" y="220" textAnchor="middle" fontSize="11" fill="#374151">Step 1: Grip top 2 cards together</text>
    </g>
    
    <!-- Step 2: Lift and show -->
    <g id="lift" transform="translate(0, 250)">
      <!-- Deck (missing top 2) -->
      <rect x="200" y="50" width="100" height="120" rx="5" fill="#1e40af" stroke="#1e3a8a" strokeWidth="2"/>
      <rect x="205" y="55" width="90" height="110" rx="3" fill="#ffffff"/>
      
      <!-- Two cards lifted together -->
      <rect x="220" y="20" width="60" height="90" rx="3" fill="#ffffff" stroke="#f59e0b" strokeWidth="3"/>
      <text x="250" y="65" textAnchor="middle" fontSize="14" fill="#dc2626">K♦</text>
      <text x="250" y="80" textAnchor="middle" fontSize="8" fill="#f59e0b">(2 cards)</text>
      
      <!-- Arrow showing lift -->
      <path d="M 250 50 L 250 40" stroke="#f59e0b" strokeWidth="2" fill="none" markerEnd="url(#arrowup2)"/>
      
      <text x="250" y="180" textAnchor="middle" fontSize="11" fill="#374151">Step 2: Lift and show (looks like 1 card!)</text>
    </g>
    
    <defs>
      <marker id="arrowup2" markerWidth="10" markerHeight="10" refX="5" refY="5" orient="auto">
        <polygon points="0 0, 10 5, 0 10" fill="#f59e0b"/>
      </marker>
    </defs>
  </svg>
</div>

### Performance Steps

1. **Have them select a card:** Let them pick any card and remember it.
2. **Secret setup:** While they look at their card, take two cards from the top and hold them as one.
3. **Place their card:** Have them place their card back on the deck (on top of your two-card stack).
4. **The reveal:** Do a double lift to show the "top card" - it's their selection!
5. **Magical moment:** Act surprised that their card is on top!

<div className="my-6 flex justify-center">
  <svg viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-lg">
    <!-- Final reveal -->
    <rect x="200" y="50" width="100" height="140" rx="5" fill="#1e40af" stroke="#1e3a8a" strokeWidth="2"/>
    <rect x="205" y="55" width="90" height="130" rx="3" fill="#ffffff"/>
    <text x="250" y="120" textAnchor="middle" fontSize="12" fill="#1e40af">DECK</text>
    
    <!-- Top card revealed (their selection) -->
    <rect x="220" y="20" width="60" height="90" rx="3" fill="#fbbf24" stroke="#f59e0b" strokeWidth="3"/>
    <rect x="225" y="25" width="50" height="80" rx="2" fill="#ffffff"/>
    <text x="250" y="65" textAnchor="middle" fontSize="16" fontWeight="bold" fill="#dc2626">K♦</text>
    <text x="250" y="80" textAnchor="middle" fontSize="10" fill="#f59e0b">THEIR CARD!</text>
    
    <!-- Sparkles for magic effect -->
    <circle cx="180" cy="30" r="3" fill="#fbbf24" opacity="0.8">
      <animate attributeName="opacity" values="0.8;0.2;0.8" dur="1s" repeatCount="indefinite"/>
    </circle>
    <circle cx="320" cy="40" r="2" fill="#fbbf24" opacity="0.8">
      <animate attributeName="opacity" values="0.8;0.2;0.8" dur="1.2s" repeatCount="indefinite"/>
    </circle>
    <circle cx="290" cy="25" r="2.5" fill="#fbbf24" opacity="0.8">
      <animate attributeName="opacity" values="0.8;0.2;0.8" dur="0.8s" repeatCount="indefinite"/>
    </circle>
    
    <text x="250" y="200" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#f59e0b">✨ MAGIC! Their card is on top! ✨</text>
    
    <!-- Structure explanation -->
    <rect x="50" y="250" width="400" height="200" rx="5" fill="#f3f4f6" stroke="#d1d5db" strokeWidth="2"/>
    <text x="250" y="275" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#374151">Deck Structure (from top):</text>
    
    <!-- Card 1 (top - their selection) -->
    <rect x="100" y="290" width="80" height="30" rx="3" fill="#fbbf24" stroke="#f59e0b" strokeWidth="2"/>
    <text x="140" y="310" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#1e40af">1. Selected Card</text>
    
    <!-- Card 2 (the extra card) -->
    <rect x="100" y="325" width="80" height="30" rx="3" fill="#cbd5e1" stroke="#94a3b8" strokeWidth="1"/>
    <text x="140" y="345" textAnchor="middle" fontSize="10" fill="#64748b">2. Extra Card</text>
    
    <!-- Card 3 -->
    <rect x="100" y="360" width="80" height="30" rx="3" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1"/>
    <text x="140" y="380" textAnchor="middle" fontSize="10" fill="#64748b">3. Rest of deck...</text>
    
    <text x="250" y="420" textAnchor="middle" fontSize="10" fill="#6b7280">When you do double lift, you show card #1 (their selection)!</text>
  </svg>
</div>

### Tips for Success

- **Practice the double lift:** This is the most important technique. Practice until you can lift two cards as one smoothly.
- **Natural handling:** Make the double lift look like a normal single card lift.
- **Timing:** Do the double lift after they've placed their card back, when their attention is elsewhere.
- **Misdirection:** Talk while performing the double lift to distract from your hand movements.
- **Confidence:** Act as if you're genuinely surprised when their card appears on top!`,
    de: `## Karte nach oben zaubern

Dieser Trick lässt eine ausgewählte Karte magisch oben im Deck erscheinen. Das Geheimnis ist eine Technik namens "Doppelhebe".

### Vorbereitung

1. Lass einen Zuschauer eine Karte aus dem Deck wählen.
2. Während sie ihre Karte ansehen, nimm heimlich **zwei Karten** von oben aus dem Deck und halte sie zusammen als eine.
3. Platziere ihre ausgewählte Karte auf diese zwei Karten (sie ist also tatsächlich die zweite Karte von oben).

<div className="my-6 flex justify-center">
  <svg viewBox="0 0 500 400" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-lg">
    <!-- Deck -->
    <rect x="200" y="50" width="100" height="140" rx="5" fill="#1e40af" stroke="#1e3a8a" strokeWidth="2"/>
    <rect x="205" y="55" width="90" height="130" rx="3" fill="#ffffff"/>
    <text x="250" y="120" textAnchor="middle" fontSize="12" fill="#1e40af">DECK</text>
    
    <!-- Two cards held together (secret) -->
    <rect x="100" y="220" width="80" height="120" rx="5" fill="#3b82f6" stroke="#2563eb" strokeWidth="3" opacity="0.9"/>
    <rect x="105" y="225" width="70" height="110" rx="3" fill="#ffffff"/>
    <text x="140" y="280" textAnchor="middle" fontSize="10" fill="#3b82f6">2 KARTEN</text>
    <text x="140" y="295" textAnchor="middle" fontSize="8" fill="#3b82f6">(als eine)</text>
    
    <!-- Selected card -->
    <rect x="220" y="220" width="80" height="120" rx="5" fill="#fbbf24" stroke="#f59e0b" strokeWidth="3"/>
    <rect x="225" y="225" width="70" height="110" rx="3" fill="#ffffff"/>
    <text x="260" y="280" textAnchor="middle" fontSize="14" fill="#dc2626">K♦</text>
    <text x="260" y="300" textAnchor="middle" fontSize="10" fill="#f59e0b">Ausgewählt</text>
    
    <!-- Arrow showing placement -->
    <path d="M 260 210 L 260 200" stroke="#f59e0b" strokeWidth="2" fill="none" markerEnd="url(#arrowup)"/>
    <text x="270" y="205" fontSize="9" fill="#f59e0b">Oben platzieren</text>
    
    <text x="250" y="360" textAnchor="middle" fontSize="11" fill="#374151">Schritt 1: Halte 2 Karten als eine, platziere ausgewählte Karte oben</text>
    
    <defs>
      <marker id="arrowup" markerWidth="10" markerHeight="10" refX="5" refY="5" orient="auto">
        <polygon points="0 0, 10 5, 0 10" fill="#f59e0b"/>
      </marker>
    </defs>
  </svg>
</div>

### Die Doppelhebe

Die Doppelhebe ist die Schlüsseltechnik:

1. **Griff:** Halte das Deck in der linken Hand. Verwende deinen rechten Daumen, um die **oberen zwei Karten** zusammen vom rechten Rand zu greifen.
2. **Heben:** Hebe beide Karten, als wären sie eine einzige Karte.
3. **Zeigen:** Drehe sie um, um die "oberste Karte" zu zeigen (die tatsächlich die zweite Karte ist - ihre Auswahl!).
4. **Zurücklegen:** Lege sie mit der Rückseite nach oben zurück auf das Deck.

<div className="my-6 flex justify-center">
  <svg viewBox="0 0 500 450" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-lg">
    <!-- Step 1: Grip two cards -->
    <g id="grip">
      <rect x="200" y="50" width="100" height="140" rx="5" fill="#1e40af" stroke="#1e3a8a" strokeWidth="2"/>
      <rect x="205" y="55" width="90" height="130" rx="3" fill="#ffffff"/>
      <text x="250" y="120" textAnchor="middle" fontSize="12" fill="#1e40af">DECK</text>
      
      <!-- Top two cards highlighted -->
      <rect x="205" y="55" width="90" height="20" rx="2" fill="#fbbf24" stroke="#f59e0b" strokeWidth="2" opacity="0.8"/>
      <text x="250" y="68" textAnchor="middle" fontSize="9" fill="#1e40af">2 KARTEN</text>
      
      <!-- Thumb grip -->
      <circle cx="295" cy="65" r="8" fill="#f59e0b" opacity="0.6"/>
      <text x="310" y="70" fontSize="9" fill="#f59e0b">Daumen</text>
      
      <text x="250" y="220" textAnchor="middle" fontSize="11" fill="#374151">Schritt 1: Greife obere 2 Karten zusammen</text>
    </g>
    
    <!-- Step 2: Lift and show -->
    <g id="lift" transform="translate(0, 250)">
      <!-- Deck (missing top 2) -->
      <rect x="200" y="50" width="100" height="120" rx="5" fill="#1e40af" stroke="#1e3a8a" strokeWidth="2"/>
      <rect x="205" y="55" width="90" height="110" rx="3" fill="#ffffff"/>
      
      <!-- Two cards lifted together -->
      <rect x="220" y="20" width="60" height="90" rx="3" fill="#ffffff" stroke="#f59e0b" strokeWidth="3"/>
      <text x="250" y="65" textAnchor="middle" fontSize="14" fill="#dc2626">K♦</text>
      <text x="250" y="80" textAnchor="middle" fontSize="8" fill="#f59e0b">(2 Karten)</text>
      
      <!-- Arrow showing lift -->
      <path d="M 250 50 L 250 40" stroke="#f59e0b" strokeWidth="2" fill="none" markerEnd="url(#arrowup2)"/>
      
      <text x="250" y="180" textAnchor="middle" fontSize="11" fill="#374151">Schritt 2: Heben und zeigen (sieht aus wie 1 Karte!)</text>
    </g>
    
    <defs>
      <marker id="arrowup2" markerWidth="10" markerHeight="10" refX="5" refY="5" orient="auto">
        <polygon points="0 0, 10 5, 0 10" fill="#f59e0b"/>
      </marker>
    </defs>
  </svg>
</div>

### Vorführungsschritte

1. **Lass sie eine Karte wählen:** Lass sie eine beliebige Karte wählen und sich merken.
2. **Heimliches Setup:** Während sie ihre Karte ansehen, nimm zwei Karten von oben und halte sie als eine.
3. **Platziere ihre Karte:** Lass sie ihre Karte zurück auf das Deck legen (auf deinen Zwei-Karten-Stapel).
4. **Die Enthüllung:** Mache eine Doppelhebe, um die "oberste Karte" zu zeigen - es ist ihre Auswahl!
5. **Magischer Moment:** Tu überrascht, dass ihre Karte oben ist!

<div className="my-6 flex justify-center">
  <svg viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-lg">
    <!-- Final reveal -->
    <rect x="200" y="50" width="100" height="140" rx="5" fill="#1e40af" stroke="#1e3a8a" strokeWidth="2"/>
    <rect x="205" y="55" width="90" height="130" rx="3" fill="#ffffff"/>
    <text x="250" y="120" textAnchor="middle" fontSize="12" fill="#1e40af">DECK</text>
    
    <!-- Top card revealed (their selection) -->
    <rect x="220" y="20" width="60" height="90" rx="3" fill="#fbbf24" stroke="#f59e0b" strokeWidth="3"/>
    <rect x="225" y="25" width="50" height="80" rx="2" fill="#ffffff"/>
    <text x="250" y="65" textAnchor="middle" fontSize="16" fontWeight="bold" fill="#dc2626">K♦</text>
    <text x="250" y="80" textAnchor="middle" fontSize="10" fill="#f59e0b">IHRE KARTE!</text>
    
    <!-- Sparkles for magic effect -->
    <circle cx="180" cy="30" r="3" fill="#fbbf24" opacity="0.8">
      <animate attributeName="opacity" values="0.8;0.2;0.8" dur="1s" repeatCount="indefinite"/>
    </circle>
    <circle cx="320" cy="40" r="2" fill="#fbbf24" opacity="0.8">
      <animate attributeName="opacity" values="0.8;0.2;0.8" dur="1.2s" repeatCount="indefinite"/>
    </circle>
    <circle cx="290" cy="25" r="2.5" fill="#fbbf24" opacity="0.8">
      <animate attributeName="opacity" values="0.8;0.2;0.8" dur="0.8s" repeatCount="indefinite"/>
    </circle>
    
    <text x="250" y="200" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#f59e0b">✨ MAGIE! Ihre Karte ist oben! ✨</text>
    
    <!-- Structure explanation -->
    <rect x="50" y="250" width="400" height="200" rx="5" fill="#f3f4f6" stroke="#d1d5db" strokeWidth="2"/>
    <text x="250" y="275" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#374151">Deck-Struktur (von oben):</text>
    
    <!-- Card 1 (top - their selection) -->
    <rect x="100" y="290" width="80" height="30" rx="3" fill="#fbbf24" stroke="#f59e0b" strokeWidth="2"/>
    <text x="140" y="310" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#1e40af">1. Ausgewählte Karte</text>
    
    <!-- Card 2 (the extra card) -->
    <rect x="100" y="325" width="80" height="30" rx="3" fill="#cbd5e1" stroke="#94a3b8" strokeWidth="1"/>
    <text x="140" y="345" textAnchor="middle" fontSize="10" fill="#64748b">2. Extra-Karte</text>
    
    <!-- Card 3 -->
    <rect x="100" y="360" width="80" height="30" rx="3" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1"/>
    <text x="140" y="380" textAnchor="middle" fontSize="10" fill="#64748b">3. Rest des Decks...</text>
    
    <text x="250" y="420" textAnchor="middle" fontSize="10" fill="#6b7280">Bei der Doppelhebe zeigst du Karte #1 (ihre Auswahl)!</text>
  </svg>
</div>

### Tipps für den Erfolg

- **Übe die Doppelhebe:** Dies ist die wichtigste Technik. Übe, bis du zwei Karten als eine reibungslos heben kannst.
- **Natürliche Handhabung:** Lass die Doppelhebe wie eine normale Einzelkartenhebung aussehen.
- **Timing:** Mache die Doppelhebe, nachdem sie ihre Karte zurückgelegt haben, wenn ihre Aufmerksamkeit woanders ist.
- **Ablenkung:** Sprich während der Doppelhebe, um von deinen Handbewegungen abzulenken.
- **Selbstvertrauen:** Tu so, als wärst du wirklich überrascht, wenn ihre Karte oben erscheint!`
  },
  exercises: [
    {
      id: 'practice-double-lift',
      title: {
        en: 'Practice the Double Lift',
        de: 'Übe die Doppelhebe'
      },
      description: {
        en: 'Practice the double lift technique 20 times. Focus on making it look like you\'re lifting a single card.',
        de: 'Übe die Doppelhebe-Technik 20 Mal. Konzentriere dich darauf, dass es aussieht, als würdest du eine einzelne Karte heben.'
      }
    },
    {
      id: 'practice-card-to-top',
      title: {
        en: 'Practice the Complete Trick',
        de: 'Übe den kompletten Trick'
      },
      description: {
        en: 'Perform the complete "Card to the Top" trick 5 times with a practice partner.',
        de: 'Führe den kompletten "Karte nach oben" Trick 5 Mal mit einem Übungspartner durch.'
      }
    }
  ]
};

