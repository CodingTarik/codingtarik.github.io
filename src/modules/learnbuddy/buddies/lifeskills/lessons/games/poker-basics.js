export const pokerBasics = {
  id: 'games-1-poker',
  category: 'Games',
  categoryTitle: {
    en: 'Board Games & Strategy',
    de: 'Gesellschaftsspiele & Strategie'
  },
  title: {
    en: 'Poker Basics: Texas Hold\'em Rules & Strategy',
    de: 'Poker Grundlagen: Texas Hold\'em Regeln & Strategie'
  },
  difficulty: 'beginner',
  duration: 40,
  description: {
    en: 'Learn Texas Hold\'em poker — hand rankings, betting rounds, position play, and beginner strategy to hold your own at the table.',
    de: 'Lerne Texas Hold\'em Poker — Blatt-Rangfolge, Setzrunden, Positionsspiel und Anfänger-Strategie, um am Tisch zu bestehen.'
  },
  content: {
    en: `## 🃏 Poker Basics: Texas Hold'em

### Why This Matters
Poker is more than a card game — it's a game of strategy, psychology, and risk management. The skills you learn at the poker table transfer directly to life: reading people, managing risk, making decisions with incomplete information, and knowing when to fold a losing position.

---

### PART 1: Hand Rankings
*From Highest to Lowest*

| Rank | Hand | Example | Description |
|------|------|---------|-------------|
| 1 | **Royal Flush** | A K Q J 10 (same suit) | The best possible hand |
| 2 | **Straight Flush** | 5 6 7 8 9 (same suit) | Five consecutive cards, same suit |
| 3 | **Four of a Kind** | K K K K 3 | Four cards of the same rank |
| 4 | **Full House** | Q Q Q 7 7 | Three of a kind + a pair |
| 5 | **Flush** | 2 5 8 J A (all hearts) | Five cards of the same suit |
| 6 | **Straight** | 4 5 6 7 8 (mixed suits) | Five consecutive cards |
| 7 | **Three of a Kind** | 9 9 9 K 2 | Three cards of the same rank |
| 8 | **Two Pair** | J J 5 5 A | Two different pairs |
| 9 | **One Pair** | 8 8 A K 3 | Two cards of the same rank |
| 10 | **High Card** | A K 9 5 2 | No combination — highest card wins |

<div className="bg-blue-50 dark:bg-blue-900/40 p-4 rounded-lg my-4">
<strong>💡 Memory Tip:</strong> A Royal Flush is incredibly rare (1 in 649,740). Most hands are won with a pair, two pair, or high card. Don't wait for the perfect hand — learn to play good hands well.
</div>

---

### PART 2: How Texas Hold'em Works
*The Flow of a Hand*

1. **Blinds:** Two forced bets — Small Blind and Big Blind (posted by the two players left of the dealer)
2. **Hole Cards:** Each player receives 2 private cards face down
3. **Pre-Flop:** First betting round (based on your 2 cards only)
4. **The Flop:** 3 community cards dealt face up → second betting round
5. **The Turn:** 1 more community card → third betting round
6. **The River:** 1 final community card → last betting round
7. **Showdown:** Remaining players show their cards — best 5-card hand wins

**Your hand = best 5 cards from your 2 hole cards + 5 community cards**

**Betting options each round:**
- **Check:** Pass (only if no one has bet)
- **Bet/Raise:** Put money in / increase the bet
- **Call:** Match the current bet
- **Fold:** Give up your hand (lose what you've already put in)

---

### PART 3: Position — Your Biggest Advantage
*Where You Sit Matters More Than What You Hold*

Position determines when you act. Acting later is a massive advantage because you see what others do first.

| Position | Description | Advantage |
|----------|------------|-----------|
| **Early (UTG)** | First to act after blinds | Worst — play only strong hands |
| **Middle** | Between early and late | Moderate — slightly wider range |
| **Late (Button/CO)** | Last to act | Best — you see everyone else first |
| **Blinds (SB/BB)** | Forced bets, act first post-flop | Worst post-flop position |

<div className="bg-green-50 dark:bg-green-900/40 p-4 rounded-lg my-4">
<strong>🎯 Beginner Rule:</strong> Play tight (few hands) in early position and loose (more hands) in late position. You can profitably play 20-30% of hands on the button, but only 10-15% under the gun (UTG). Position is the single biggest factor in profitable poker.
</div>

---

### PART 4: Beginner Strategy

**1. Starting Hand Selection (Tight is Right for Beginners)**
Play these hands from any position:
- **Premium:** AA, KK, QQ, AK suited
- **Strong:** JJ, 10-10, AQ, AK offsuit, AJ suited
- **Playable from late position:** Any pair, suited connectors (89s, 78s), suited aces

**2. The Fundamental Theorem: Bet When You Have It, Fold When You Don't**
- If you have a strong hand → bet for value (you want others to pay you)
- If you have a weak hand → fold (don't throw good money after bad)
- If you have a drawing hand → calculate if it's worth continuing

**3. Pot Odds (Simple Version)**
If you need one more card to complete your hand (e.g., a flush draw):
- Count your "outs" (cards that complete your hand)
- Flush draw = 9 outs → ~36% chance on flop, ~18% on turn
- If the pot offers you better odds than your chance of hitting, call. Otherwise, fold.

**4. Read the Table, Not Just Your Cards**
- How much are others betting? (Strong bets usually mean strong hands)
- Who's been playing a lot of hands? (They're likely weaker on average)
- Who's been playing very few? (Their bets likely mean something strong)

---

### PART 5: Common Beginner Mistakes

<div className="bg-red-50 dark:bg-red-900/40 p-4 rounded-lg my-4">
<strong>🚨 Avoid These:</strong>
<ul className="list-disc list-inside mt-2 space-y-1">
<li><strong>Playing too many hands</strong> — fold more! Patience is profitable</li>
<li><strong>Calling too much</strong> — "calling stations" lose money. Be decisive: raise or fold</li>
<li><strong>Ignoring position</strong> — the same hand is great on the button and terrible UTG</li>
<li><strong>Going on "tilt"</strong> — playing emotionally after a bad beat leads to more losses</li>
<li><strong>Playing stakes you can't afford</strong> — only play with money you can lose comfortably</li>
</ul>
</div>

---

### Key Takeaways
1. **Learn hand rankings** by heart — it takes 10 minutes and is essential
2. **Position is power** — play tight early, wider late
3. **Tight is right** for beginners — fold more than you think you should
4. **Bet with strong hands, fold weak ones** — avoid "hope calling"
5. **Manage your emotions** — tilt is your biggest enemy at the table`,

    de: `## 🃏 Poker Grundlagen: Texas Hold'em

### Warum das wichtig ist
Poker ist mehr als ein Kartenspiel — es ist ein Spiel der Strategie, Psychologie und des Risikomanagements. Die Fähigkeiten vom Pokertisch lassen sich direkt aufs Leben übertragen: Menschen lesen, Risiko managen, Entscheidungen bei unvollständiger Information treffen und wissen, wann man eine verlorene Position aufgibt.

---

### TEIL 1: Blatt-Rangfolge
*Vom höchsten zum niedrigsten*

| Rang | Blatt | Beispiel | Beschreibung |
|------|-------|---------|--------------|
| 1 | **Royal Flush** | A K D B 10 (gleiche Farbe) | Das bestmögliche Blatt |
| 2 | **Straight Flush** | 5 6 7 8 9 (gleiche Farbe) | Fünf aufeinander folgende Karten, gleiche Farbe |
| 3 | **Vierling** | K K K K 3 | Vier Karten gleichen Rangs |
| 4 | **Full House** | D D D 7 7 | Drilling + Paar |
| 5 | **Flush** | 2 5 8 B A (alles Herz) | Fünf Karten gleicher Farbe |
| 6 | **Straße** | 4 5 6 7 8 (gemischte Farben) | Fünf aufeinander folgende Karten |
| 7 | **Drilling** | 9 9 9 K 2 | Drei Karten gleichen Rangs |
| 8 | **Zwei Paare** | B B 5 5 A | Zwei verschiedene Paare |
| 9 | **Ein Paar** | 8 8 A K 3 | Zwei Karten gleichen Rangs |
| 10 | **Höchste Karte** | A K 9 5 2 | Keine Kombination — höchste Karte gewinnt |

<div className="bg-blue-50 dark:bg-blue-900/40 p-4 rounded-lg my-4">
<strong>💡 Merkhilfe:</strong> Ein Royal Flush ist unglaublich selten (1 zu 649.740). Die meisten Hände werden mit einem Paar, zwei Paaren oder hoher Karte gewonnen. Warte nicht auf das perfekte Blatt — lerne, gute Blätter gut zu spielen.
</div>

---

### TEIL 2: So funktioniert Texas Hold'em
*Der Ablauf einer Hand*

1. **Blinds:** Zwei Pflichteinsätze — Small Blind und Big Blind (von den zwei Spielern links vom Dealer)
2. **Hole Cards:** Jeder Spieler bekommt 2 private Karten verdeckt
3. **Pre-Flop:** Erste Setzrunde (nur basierend auf deinen 2 Karten)
4. **Der Flop:** 3 Gemeinschaftskarten offen gelegt → zweite Setzrunde
5. **Der Turn:** 1 weitere Gemeinschaftskarte → dritte Setzrunde
6. **Der River:** 1 letzte Gemeinschaftskarte → letzte Setzrunde
7. **Showdown:** Verbliebene Spieler zeigen ihre Karten — bestes 5-Karten-Blatt gewinnt

**Dein Blatt = beste 5 Karten aus deinen 2 Hole Cards + 5 Gemeinschaftskarten**

**Setzoptionen pro Runde:**
- **Check:** Passen (nur wenn niemand gesetzt hat)
- **Bet/Raise:** Setzen / erhöhen
- **Call:** Den aktuellen Einsatz mitgehen
- **Fold:** Aufgeben (Einsatz verloren)

---

### TEIL 3: Position — Dein größter Vorteil
*Wo du sitzt, ist wichtiger als was du hältst*

Position bestimmt, wann du agierst. Später zu agieren ist ein riesiger Vorteil, weil du siehst, was andere tun.

| Position | Beschreibung | Vorteil |
|----------|-------------|---------|
| **Früh (UTG)** | Erster nach den Blinds | Schlechteste — nur starke Hände |
| **Mitte** | Zwischen früh und spät | Moderat — etwas breitere Range |
| **Spät (Button/CO)** | Letzter der agiert | Beste — du siehst alle zuerst |
| **Blinds (SB/BB)** | Pflichteinsätze, agiert nach Flop zuerst | Schlechteste Post-Flop Position |

<div className="bg-green-50 dark:bg-green-900/40 p-4 rounded-lg my-4">
<strong>🎯 Anfänger-Regel:</strong> Spiele tight (wenige Hände) in früher Position und loose (mehr Hände) in später Position. Du kannst auf dem Button profitabel 20-30% der Hände spielen, aber unter the Gun (UTG) nur 10-15%. Position ist der wichtigste Einzelfaktor für profitables Poker.
</div>

---

### TEIL 4: Anfänger-Strategie

**1. Starthand-Auswahl (Tight is Right für Anfänger)**
Diese Hände von jeder Position spielen:
- **Premium:** AA, KK, QQ, AK suited
- **Stark:** JJ, 10-10, AQ, AK offsuit, AJ suited
- **Spielbar von später Position:** Jedes Paar, Suited Connectors (89s, 78s), Suited Aces

**2. Das Grundprinzip: Setze wenn du was hast, passe wenn nicht**
- Starkes Blatt → setze für Value (andere sollen dich bezahlen)
- Schwaches Blatt → passen (wirf gutes Geld nicht schlechtem hinterher)
- Draw-Hand → berechne, ob es sich lohnt weiterzumachen

**3. Pot Odds (Einfache Version)**
Wenn du noch eine Karte brauchst (z.B. Flush-Draw):
- Zähle deine "Outs" (Karten, die dein Blatt vervollständigen)
- Flush-Draw = 9 Outs → ~36% Chance am Flop, ~18% am Turn
- Wenn der Pot dir bessere Odds bietet als deine Trefferwahrscheinlichkeit, call. Sonst fold.

**4. Lies den Tisch, nicht nur deine Karten**
- Wie viel setzen andere? (Starke Einsätze = meist starke Hände)
- Wer spielt viele Hände? (Wahrscheinlich im Schnitt schwächer)
- Wer spielt sehr wenige? (Deren Einsätze bedeuten wahrscheinlich etwas Starkes)

---

### TEIL 5: Häufige Anfängerfehler

<div className="bg-red-50 dark:bg-red-900/40 p-4 rounded-lg my-4">
<strong>🚨 Vermeide diese:</strong>
<ul className="list-disc list-inside mt-2 space-y-1">
<li><strong>Zu viele Hände spielen</strong> — fold mehr! Geduld ist profitabel</li>
<li><strong>Zu viel callen</strong> — "Calling Stations" verlieren Geld. Sei entschieden: raise oder fold</li>
<li><strong>Position ignorieren</strong> — die gleiche Hand ist auf dem Button toll und UTG furchtbar</li>
<li><strong>"Tilt" gehen</strong> — emotional spielen nach einem Bad Beat führt zu mehr Verlusten</li>
<li><strong>Limits spielen, die du dir nicht leisten kannst</strong> — spiele nur mit Geld, das du bequem verlieren könntest</li>
</ul>
</div>

---

### Die wichtigsten Erkenntnisse
1. **Lerne die Blatt-Rangfolge** auswendig — dauert 10 Minuten und ist essentiell
2. **Position ist Macht** — tight spielen früh, breiter spät
3. **Tight is Right** für Anfänger — folde mehr als du denkst
4. **Setze mit starken Händen, folde schwache** — vermeide "Hoffnungs-Calls"
5. **Manage deine Emotionen** — Tilt ist dein größter Feind am Tisch`
  },
  task: {
    en: {
      title: 'Learn Poker Fundamentals',
      description: 'Memorize hand rankings and practice playing with correct strategy.',
      checklist: [
        { text: 'Memorize all 10 hand rankings from Royal Flush to High Card' },
        { text: 'Play 50 hands of free online poker focusing only on hand selection and position' },
        { text: 'Track how many hands you fold vs. play — aim for folding 70-80% pre-flop' },
        { text: 'Practice calculating pot odds for a flush draw (9 outs) and a straight draw (8 outs)' }
      ]
    },
    de: {
      title: 'Lerne Poker-Grundlagen',
      description: 'Präge dir die Blatt-Rangfolge ein und übe mit korrekter Strategie zu spielen.',
      checklist: [
        { text: 'Lerne alle 10 Blatt-Rangfolgen auswendig, vom Royal Flush bis zur Höchsten Karte' },
        { text: 'Spiele 50 Hände kostenloses Online-Poker mit Fokus auf Handauswahl und Position' },
        { text: 'Tracke, wie viele Hände du foldest vs. spielst — Ziel: 70-80% Pre-Flop folden' },
        { text: 'Übe Pot Odds zu berechnen für einen Flush-Draw (9 Outs) und einen Straight-Draw (8 Outs)' }
      ]
    }
  },
  quiz: {
    de: [
      { question: "Welches Blatt schlägt welches: Full House, Flush oder Straße?", answer: "Full House > Flush > Straße. Ein Full House (Drilling + Paar) schlägt einen Flush (5 Karten gleicher Farbe), und ein Flush schlägt eine Straße (5 aufeinander folgende Karten)." },
      { question: "Warum ist Position beim Poker so wichtig?", answer: "In später Position (Button/CO) agierst du zuletzt und siehst, was alle anderen vor dir tun. Das gibt dir mehr Information für bessere Entscheidungen. Du kannst 20-30% der Hände am Button spielen, aber nur 10-15% in früher Position." },
      { question: "Was ist 'Tilt' und warum ist es gefährlich?", answer: "Tilt ist emotionales Spielen, meist nach einem Bad Beat (unglücklicher Verlust). Man spielt dann zu viele Hände, setzt zu viel und trifft schlechte Entscheidungen. Gegenmittel: Pause machen, Emotionen beruhigen, nur mit klarem Kopf zurückkehren." }
    ],
    en: [
      { question: "Which hand beats which: Full House, Flush, or Straight?", answer: "Full House > Flush > Straight. A Full House (three of a kind + pair) beats a Flush (5 cards same suit), and a Flush beats a Straight (5 consecutive cards)." },
      { question: "Why is position so important in poker?", answer: "In late position (Button/CO) you act last and see what everyone else does before you. This gives you more information for better decisions. You can play 20-30% of hands on the button but only 10-15% in early position." },
      { question: "What is 'tilt' and why is it dangerous?", answer: "Tilt is emotional play, usually after a bad beat (unlucky loss). You then play too many hands, bet too much, and make poor decisions. Antidote: take a break, calm emotions, only return with a clear head." }
    ]
  }
};
