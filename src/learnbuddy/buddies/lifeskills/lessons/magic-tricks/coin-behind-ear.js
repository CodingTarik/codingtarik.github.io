export const coinBehindEar = {
  id: 'magic-trick-3-coin-behind-ear',
  category: 'Coin Tricks',
  categoryTitle: {
    en: 'Magic Tricks: Coin Tricks',
    de: 'Zaubertricks: Münztricks'
  },
  title: {
    en: 'Coin Behind the Ear',
    de: 'Münze hinter dem Ohr'
  },
  difficulty: 'beginner',
  duration: 15,
  description: {
    en: 'Learn the classic magic trick of making a coin disappear and reappear behind someone\'s ear. Perfect for close-up magic!',
    de: 'Lerne den klassischen Zaubertrick, eine Münze verschwinden zu lassen und hinter dem Ohr wieder erscheinen zu lassen. Perfekt für Close-up-Magie!'
  },
  content: {
    en: `## Coin Behind the Ear

This is one of the most classic and beloved magic tricks. You make a coin disappear and then magically produce it from behind someone's ear!

### The Secret

The trick uses a simple technique called the "French Drop" or "Palm Transfer". You don't actually make the coin disappear - you secretly transfer it to your other hand while making it look like it vanished.

### Step-by-Step Instructions

#### Step 1: The Setup

1. Hold a coin between your **thumb and index finger** of your right hand (or left if you're left-handed).
2. Show the coin clearly to your audience.
3. Position your hand so the coin is visible and your palm faces the audience.

<div className="my-6 flex justify-center">
  <svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-md">
    <!-- Hand holding coin -->
    <ellipse cx="200" cy="150" rx="80" ry="100" fill="#fbbf24" stroke="#f59e0b" strokeWidth="2" opacity="0.3"/>
    <circle cx="200" cy="120" r="15" fill="#eab308" stroke="#d97706" strokeWidth="2"/>
    <text x="200" y="125" textAnchor="middle" fontSize="10" fill="#1e40af">COIN</text>
    
    <!-- Fingers -->
    <ellipse cx="180" cy="100" rx="8" ry="25" fill="#fbbf24" stroke="#f59e0b" strokeWidth="2"/>
    <ellipse cx="200" cy="95" rx="8" ry="25" fill="#fbbf24" stroke="#f59e0b" strokeWidth="2"/>
    
    <text x="200" y="250" textAnchor="middle" fontSize="12" fill="#374151">Step 1: Hold coin between thumb and index finger</text>
  </svg>
</div>

#### Step 2: The "Disappearing" Motion

1. Move your right hand (with the coin) **toward your left hand**.
2. As your hands come together, **secretly drop the coin** into your left palm.
3. Continue moving your right hand upward in a "throwing" motion, as if you're throwing the coin into the air.
4. **Keep your left hand closed** around the coin (but don't make it obvious).

<div className="my-6 flex justify-center">
  <svg viewBox="0 0 500 400" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-lg">
    <!-- Left hand (receiving coin) -->
    <ellipse cx="150" cy="200" rx="70" ry="90" fill="#3b82f6" stroke="#2563eb" strokeWidth="2" opacity="0.3"/>
    <circle cx="150" cy="180" r="12" fill="#eab308" stroke="#d97706" strokeWidth="2" opacity="0.7"/>
    <text x="150" y="185" textAnchor="middle" fontSize="8" fill="#1e40af">COIN</text>
    
    <!-- Right hand (moving up) -->
    <ellipse cx="300" cy="100" rx="70" ry="90" fill="#fbbf24" stroke="#f59e0b" strokeWidth="2" opacity="0.3"/>
    
    <!-- Arrow showing transfer -->
    <path d="M 220 120 L 180 170" stroke="#f59e0b" strokeWidth="3" fill="none" markerEnd="url(#arrowtransfer)"/>
    <text x="200" y="140" textAnchor="middle" fontSize="10" fill="#f59e0b">Secret Transfer!</text>
    
    <text x="250" y="350" textAnchor="middle" fontSize="12" fill="#374151">Step 2: Secretly drop coin into left hand</text>
    
    <defs>
      <marker id="arrowtransfer" markerWidth="10" markerHeight="10" refX="5" refY="5" orient="auto">
        <polygon points="0 0, 10 5, 0 10" fill="#f59e0b"/>
      </marker>
    </defs>
  </svg>
</div>

#### Step 3: The "Vanish"

1. After "throwing" the coin upward, **open your right hand** to show it's empty.
2. Look up as if following the coin that "flew away".
3. **Keep your left hand naturally closed** (don't draw attention to it).

<div className="my-6 flex justify-center">
  <svg viewBox="0 0 400 350" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-md">
    <!-- Right hand (empty, open) -->
    <ellipse cx="250" cy="100" rx="70" ry="90" fill="#fbbf24" stroke="#f59e0b" strokeWidth="2" opacity="0.3"/>
    <text x="250" y="110" textAnchor="middle" fontSize="12" fill="#dc2626">EMPTY!</text>
    
    <!-- Left hand (closed, hiding coin) -->
    <ellipse cx="150" cy="200" rx="70" ry="90" fill="#3b82f6" stroke="#2563eb" strokeWidth="2" opacity="0.3"/>
    <circle cx="150" cy="180" r="12" fill="#eab308" stroke="#d97706" strokeWidth="2"/>
    <text x="150" y="185" textAnchor="middle" fontSize="8" fill="#1e40af">COIN</text>
    
    <!-- Question mark above -->
    <text x="250" y="50" textAnchor="middle" fontSize="24" fill="#f59e0b">?</text>
    
    <text x="200" y="320" textAnchor="middle" fontSize="12" fill="#374151">Step 3: Show empty right hand, coin is hidden in left</text>
  </svg>
</div>

#### Step 4: The Reveal

1. Approach your spectator and say something like "Wait, I think I see something behind your ear!"
2. **Reach behind their ear** with your **left hand** (the one holding the coin).
3. As you reach, **secretly position the coin** between your thumb and fingers.
4. **Pull the coin out** from behind their ear, making it look like you found it there!

<div className="my-6 flex justify-center">
  <svg viewBox="0 0 500 450" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-lg">
    <!-- Head -->
    <circle cx="250" cy="150" r="80" fill="#fbbf24" stroke="#f59e0b" strokeWidth="2" opacity="0.3"/>
    <circle cx="230" cy="140" r="5" fill="#1e40af"/>
    <circle cx="270" cy="140" r="5" fill="#1e40af"/>
    <path d="M 220 170 Q 250 180 280 170" stroke="#1e40af" strokeWidth="2" fill="none"/>
    
    <!-- Ear -->
    <ellipse cx="180" cy="150" rx="15" ry="25" fill="#fbbf24" stroke="#f59e0b" strokeWidth="2" opacity="0.5"/>
    
    <!-- Hand reaching behind ear -->
    <ellipse cx="160" cy="160" rx="50" ry="60" fill="#3b82f6" stroke="#2563eb" strokeWidth="2" opacity="0.4"/>
    <circle cx="160" cy="150" r="15" fill="#eab308" stroke="#d97706" strokeWidth="2"/>
    <text x="160" y="155" textAnchor="middle" fontSize="10" fill="#1e40af">COIN</text>
    
    <!-- Arrow showing reveal -->
    <path d="M 160 130 L 160 100" stroke="#f59e0b" strokeWidth="3" fill="none" markerEnd="url(#arrowreveal)"/>
    
    <!-- Sparkles -->
    <circle cx="140" cy="90" r="4" fill="#fbbf24" opacity="0.8">
      <animate attributeName="opacity" values="0.8;0.2;0.8" dur="1s" repeatCount="indefinite"/>
    </circle>
    <circle cx="180" cy="85" r="3" fill="#fbbf24" opacity="0.8">
      <animate attributeName="opacity" values="0.8;0.2;0.8" dur="1.2s" repeatCount="indefinite"/>
    </circle>
    
    <text x="250" y="400" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#f59e0b">✨ MAGIC! The coin appears from behind the ear! ✨</text>
    
    <defs>
      <marker id="arrowreveal" markerWidth="10" markerHeight="10" refX="5" refY="5" orient="auto">
        <polygon points="0 0, 10 5, 0 10" fill="#f59e0b"/>
      </marker>
    </defs>
  </svg>
</div>

### Key Techniques

#### The French Drop

- **Timing is everything:** The transfer must happen smoothly during the "throwing" motion.
- **Natural movement:** Don't make the transfer obvious - let your hands come together naturally.
- **Misdirection:** Your eyes and the "throwing" motion should draw attention away from the transfer.

#### The Palm

- **Keep it relaxed:** Your left hand should look natural, not suspiciously closed.
- **Position matters:** Hold the coin in your palm, not between your fingers.
- **Practice the grip:** Make sure you can easily retrieve the coin when needed.

### Tips for Success

- **Practice the transfer:** The French Drop is the most important part. Practice until it's smooth and invisible.
- **Use misdirection:** Talk while performing - "Watch closely, I'm going to make this coin disappear!"
- **Natural movements:** Don't rush. Slow, deliberate movements look more magical.
- **Confidence:** Act as if you're genuinely surprised when you "find" the coin behind their ear!
- **Practice with a mirror:** Watch yourself perform to see how it looks from the audience's perspective.

### Common Mistakes to Avoid

- **Rushing the transfer:** Take your time - the transfer should be smooth, not hurried.
- **Obvious left hand:** Don't make your left hand look like it's hiding something.
- **Looking at your hands:** Keep eye contact with your audience, not your hands.
- **Telling the secret:** Never reveal how the trick works to your audience!`,
    de: `## Münze hinter dem Ohr

Dies ist einer der klassischsten und beliebtesten Zaubertricks. Du lässt eine Münze verschwinden und lässt sie dann magisch hinter dem Ohr erscheinen!

### Das Geheimnis

Der Trick verwendet eine einfache Technik namens "French Drop" oder "Palm Transfer". Du lässt die Münze nicht wirklich verschwinden - du überträgst sie heimlich in deine andere Hand, während es so aussieht, als wäre sie verschwunden.

### Schritt-für-Schritt-Anleitung

#### Schritt 1: Das Setup

1. Halte eine Münze zwischen **Daumen und Zeigefinger** deiner rechten Hand (oder links, wenn du Linkshänder bist).
2. Zeige die Münze deutlich deinem Publikum.
3. Positioniere deine Hand so, dass die Münze sichtbar ist und deine Handfläche zum Publikum zeigt.

<div className="my-6 flex justify-center">
  <svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-md">
    <!-- Hand holding coin -->
    <ellipse cx="200" cy="150" rx="80" ry="100" fill="#fbbf24" stroke="#f59e0b" strokeWidth="2" opacity="0.3"/>
    <circle cx="200" cy="120" r="15" fill="#eab308" stroke="#d97706" strokeWidth="2"/>
    <text x="200" y="125" textAnchor="middle" fontSize="10" fill="#1e40af">MÜNZE</text>
    
    <!-- Fingers -->
    <ellipse cx="180" cy="100" rx="8" ry="25" fill="#fbbf24" stroke="#f59e0b" strokeWidth="2"/>
    <ellipse cx="200" cy="95" rx="8" ry="25" fill="#fbbf24" stroke="#f59e0b" strokeWidth="2"/>
    
    <text x="200" y="250" textAnchor="middle" fontSize="12" fill="#374151">Schritt 1: Münze zwischen Daumen und Zeigefinger halten</text>
  </svg>
</div>

#### Schritt 2: Die "Verschwinden"-Bewegung

1. Bewege deine rechte Hand (mit der Münze) **in Richtung deiner linken Hand**.
2. Während deine Hände zusammenkommen, **lasse die Münze heimlich** in deine linke Handfläche fallen.
3. Fahre fort, deine rechte Hand nach oben in einer "Wurf"-Bewegung zu bewegen, als würdest du die Münze in die Luft werfen.
4. **Halte deine linke Hand geschlossen** um die Münze (aber mache es nicht offensichtlich).

<div className="my-6 flex justify-center">
  <svg viewBox="0 0 500 400" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-lg">
    <!-- Left hand (receiving coin) -->
    <ellipse cx="150" cy="200" rx="70" ry="90" fill="#3b82f6" stroke="#2563eb" strokeWidth="2" opacity="0.3"/>
    <circle cx="150" cy="180" r="12" fill="#eab308" stroke="#d97706" strokeWidth="2" opacity="0.7"/>
    <text x="150" y="185" textAnchor="middle" fontSize="8" fill="#1e40af">MÜNZE</text>
    
    <!-- Right hand (moving up) -->
    <ellipse cx="300" cy="100" rx="70" ry="90" fill="#fbbf24" stroke="#f59e0b" strokeWidth="2" opacity="0.3"/>
    
    <!-- Arrow showing transfer -->
    <path d="M 220 120 L 180 170" stroke="#f59e0b" strokeWidth="3" fill="none" markerEnd="url(#arrowtransfer)"/>
    <text x="200" y="140" textAnchor="middle" fontSize="10" fill="#f59e0b">Heimliche Übertragung!</text>
    
    <text x="250" y="350" textAnchor="middle" fontSize="12" fill="#374151">Schritt 2: Münze heimlich in linke Hand fallen lassen</text>
    
    <defs>
      <marker id="arrowtransfer" markerWidth="10" markerHeight="10" refX="5" refY="5" orient="auto">
        <polygon points="0 0, 10 5, 0 10" fill="#f59e0b"/>
      </marker>
    </defs>
  </svg>
</div>

#### Schritt 3: Das "Verschwinden"

1. Nachdem du die Münze nach oben "geworfen" hast, **öffne deine rechte Hand**, um zu zeigen, dass sie leer ist.
2. Schaue nach oben, als würdest du der Münze folgen, die "weggeflogen" ist.
3. **Halte deine linke Hand natürlich geschlossen** (lenke keine Aufmerksamkeit darauf).

<div className="my-6 flex justify-center">
  <svg viewBox="0 0 400 350" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-md">
    <!-- Right hand (empty, open) -->
    <ellipse cx="250" cy="100" rx="70" ry="90" fill="#fbbf24" stroke="#f59e0b" strokeWidth="2" opacity="0.3"/>
    <text x="250" y="110" textAnchor="middle" fontSize="12" fill="#dc2626">LEER!</text>
    
    <!-- Left hand (closed, hiding coin) -->
    <ellipse cx="150" cy="200" rx="70" ry="90" fill="#3b82f6" stroke="#2563eb" strokeWidth="2" opacity="0.3"/>
    <circle cx="150" cy="180" r="12" fill="#eab308" stroke="#d97706" strokeWidth="2"/>
    <text x="150" y="185" textAnchor="middle" fontSize="8" fill="#1e40af">MÜNZE</text>
    
    <!-- Question mark above -->
    <text x="250" y="50" textAnchor="middle" fontSize="24" fill="#f59e0b">?</text>
    
    <text x="200" y="320" textAnchor="middle" fontSize="12" fill="#374151">Schritt 3: Leere rechte Hand zeigen, Münze in linker Hand versteckt</text>
  </svg>
</div>

#### Schritt 4: Die Enthüllung

1. Nähere dich deinem Zuschauer und sage etwas wie "Warte, ich glaube, ich sehe etwas hinter deinem Ohr!"
2. **Greife hinter sein Ohr** mit deiner **linken Hand** (der, die die Münze hält).
3. Während du greifst, **positioniere die Münze heimlich** zwischen deinem Daumen und deinen Fingern.
4. **Ziehe die Münze heraus** von hinter seinem Ohr, als hättest du sie dort gefunden!

<div className="my-6 flex justify-center">
  <svg viewBox="0 0 500 450" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-lg">
    <!-- Head -->
    <circle cx="250" cy="150" r="80" fill="#fbbf24" stroke="#f59e0b" strokeWidth="2" opacity="0.3"/>
    <circle cx="230" cy="140" r="5" fill="#1e40af"/>
    <circle cx="270" cy="140" r="5" fill="#1e40af"/>
    <path d="M 220 170 Q 250 180 280 170" stroke="#1e40af" strokeWidth="2" fill="none"/>
    
    <!-- Ear -->
    <ellipse cx="180" cy="150" rx="15" ry="25" fill="#fbbf24" stroke="#f59e0b" strokeWidth="2" opacity="0.5"/>
    
    <!-- Hand reaching behind ear -->
    <ellipse cx="160" cy="160" rx="50" ry="60" fill="#3b82f6" stroke="#2563eb" strokeWidth="2" opacity="0.4"/>
    <circle cx="160" cy="150" r="15" fill="#eab308" stroke="#d97706" strokeWidth="2"/>
    <text x="160" y="155" textAnchor="middle" fontSize="10" fill="#1e40af">MÜNZE</text>
    
    <!-- Arrow showing reveal -->
    <path d="M 160 130 L 160 100" stroke="#f59e0b" strokeWidth="3" fill="none" markerEnd="url(#arrowreveal)"/>
    
    <!-- Sparkles -->
    <circle cx="140" cy="90" r="4" fill="#fbbf24" opacity="0.8">
      <animate attributeName="opacity" values="0.8;0.2;0.8" dur="1s" repeatCount="indefinite"/>
    </circle>
    <circle cx="180" cy="85" r="3" fill="#fbbf24" opacity="0.8">
      <animate attributeName="opacity" values="0.8;0.2;0.8" dur="1.2s" repeatCount="indefinite"/>
    </circle>
    
    <text x="250" y="400" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#f59e0b">✨ MAGIE! Die Münze erscheint hinter dem Ohr! ✨</text>
    
    <defs>
      <marker id="arrowreveal" markerWidth="10" markerHeight="10" refX="5" refY="5" orient="auto">
        <polygon points="0 0, 10 5, 0 10" fill="#f59e0b"/>
      </marker>
    </defs>
  </svg>
</div>

### Schlüsseltechniken

#### Der French Drop

- **Timing ist alles:** Die Übertragung muss während der "Wurf"-Bewegung reibungslos erfolgen.
- **Natürliche Bewegung:** Mache die Übertragung nicht offensichtlich - lass deine Hände natürlich zusammenkommen.
- **Ablenkung:** Deine Augen und die "Wurf"-Bewegung sollten die Aufmerksamkeit von der Übertragung ablenken.

#### Der Palm

- **Halte es entspannt:** Deine linke Hand sollte natürlich aussehen, nicht verdächtig geschlossen.
- **Position ist wichtig:** Halte die Münze in deiner Handfläche, nicht zwischen deinen Fingern.
- **Übe den Griff:** Stelle sicher, dass du die Münze leicht abrufen kannst, wenn nötig.

### Tipps für den Erfolg

- **Übe die Übertragung:** Der French Drop ist der wichtigste Teil. Übe, bis er reibungslos und unsichtbar ist.
- **Verwende Ablenkung:** Sprich während der Vorführung - "Schaue genau hin, ich werde diese Münze verschwinden lassen!"
- **Natürliche Bewegungen:** Beeile dich nicht. Langsame, bewusste Bewegungen wirken magischer.
- **Selbstvertrauen:** Tu so, als wärst du wirklich überrascht, wenn du die Münze "hinter seinem Ohr findest"!
- **Übe mit einem Spiegel:** Schaue dir selbst zu, um zu sehen, wie es aus der Sicht des Publikums aussieht.

### Häufige Fehler, die du vermeiden solltest

- **Überstürzte Übertragung:** Nimm dir Zeit - die Übertragung sollte reibungslos sein, nicht überstürzt.
- **Offensichtliche linke Hand:** Lass deine linke Hand nicht so aussehen, als würde sie etwas verstecken.
- **Auf die Hände schauen:** Halte Augenkontakt mit deinem Publikum, nicht mit deinen Händen.
- **Das Geheimnis verraten:** Verrate niemals, wie der Trick funktioniert!`
  },
  task: {
    en: {
      title: 'Practice the Coin Behind the Ear Trick',
      description: 'Master the French Drop technique and perform the complete trick smoothly.',
      checklist: [
        { text: 'Practice the French Drop transfer 20 times until it\'s smooth' },
        { text: 'Practice keeping the coin hidden in your palm naturally' },
        { text: 'Practice the reveal motion behind the ear' },
        { text: 'Perform the complete trick 5 times with a practice partner' },
        { text: 'Record yourself performing to check for any obvious movements' }
      ]
    },
    de: {
      title: 'Übe den Münze-hinter-dem-Ohr Trick',
      description: 'Meistere die French-Drop-Technik und führe den kompletten Trick reibungslos durch.',
      checklist: [
        { text: 'Übe die French-Drop-Übertragung 20 Mal, bis sie reibungslos ist' },
        { text: 'Übe, die Münze natürlich in deiner Handfläche versteckt zu halten' },
        { text: 'Übe die Enthüllungsbewegung hinter dem Ohr' },
        { text: 'Führe den kompletten Trick 5 Mal mit einem Übungspartner durch' },
        { text: 'Nimm dich selbst auf, um nach offensichtlichen Bewegungen zu suchen' }
      ]
    }
  },
  exercises: [
    {
      id: 'practice-french-drop',
      title: {
        en: 'Practice the French Drop',
        de: 'Übe den French Drop'
      },
      description: {
        en: 'Practice the French Drop transfer technique 20 times. Focus on making it invisible.',
        de: 'Übe die French-Drop-Übertragungstechnik 20 Mal. Konzentriere dich darauf, sie unsichtbar zu machen.'
      }
    },
    {
      id: 'practice-coin-trick',
      title: {
        en: 'Practice the Complete Trick',
        de: 'Übe den kompletten Trick'
      },
      description: {
        en: 'Perform the complete "Coin Behind the Ear" trick 5 times with a practice partner.',
        de: 'Führe den kompletten "Münze hinter dem Ohr" Trick 5 Mal mit einem Übungspartner durch.'
      }
    }
  ],
  notes: {
    en: [
      {
        front: 'What is the French Drop?',
        back: 'A technique where you secretly transfer a coin from one hand to another while making it look like the coin disappeared.'
      },
      {
        front: 'Which hand holds the coin during the transfer?',
        back: 'The coin is transferred from your right hand (or dominant hand) to your left hand during the "throwing" motion.'
      },
      {
        front: 'Where do you hide the coin after the transfer?',
        back: 'You hide it in your left palm, keeping your hand naturally closed (not obviously hiding something).'
      },
      {
        front: 'How do you reveal the coin?',
        back: 'You reach behind the spectator\'s ear with your left hand (holding the coin) and pull it out, making it look like you found it there!'
      },
      {
        front: 'What is misdirection in this trick?',
        back: 'Looking up as if following the coin that "flew away" and talking to distract attention from the real method.'
      }
    ],
    de: [
      {
        front: 'Was ist der French Drop?',
        back: 'Eine Technik, bei der du eine Münze heimlich von einer Hand in die andere überträgst, während es so aussieht, als wäre die Münze verschwunden.'
      },
      {
        front: 'Welche Hand hält die Münze während der Übertragung?',
        back: 'Die Münze wird von deiner rechten Hand (oder dominanten Hand) in deine linke Hand während der "Wurf"-Bewegung übertragen.'
      },
      {
        front: 'Wo versteckst du die Münze nach der Übertragung?',
        back: 'Du versteckst sie in deiner linken Handfläche und hältst deine Hand natürlich geschlossen (nicht offensichtlich versteckend).'
      },
      {
        front: 'Wie enthüllst du die Münze?',
        back: 'Du greifst hinter das Ohr des Zuschauers mit deiner linken Hand (die die Münze hält) und ziehst sie heraus, als hättest du sie dort gefunden!'
      },
      {
        front: 'Was ist Ablenkung bei diesem Trick?',
        back: 'Nach oben schauen, als würdest du der Münze folgen, die "weggeflogen" ist, und sprechen, um die Aufmerksamkeit von der echten Methode abzulenken.'
      }
    ]
  }
};

