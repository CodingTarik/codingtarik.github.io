export const chessBasics = {
  id: 'games-2-chess',
  category: 'Games',
  categoryTitle: {
    en: 'Board Games & Strategy',
    de: 'Gesellschaftsspiele & Strategie'
  },
  title: {
    en: 'Chess Basics: Pieces, Openings & Tactics',
    de: 'Schach Grundlagen: Figuren, Eröffnungen & Taktik'
  },
  difficulty: 'beginner',
  duration: 45,
  description: {
    en: 'Learn chess from scratch — how each piece moves, fundamental opening principles, basic tactics like forks and pins, and tips to improve quickly.',
    de: 'Lerne Schach von Grund auf — wie jede Figur zieht, grundlegende Eröffnungsprinzipien, Basistaktiken wie Gabeln und Fesselungen, und Tipps zum schnellen Verbessern.'
  },
  content: {
    en: `## ♟️ Chess Basics: The Royal Game

### Why This Matters
Chess is the ultimate game of strategy, pattern recognition, and planning ahead. It teaches patience, calculation, and the ability to see consequences before they happen. Plus, it's played worldwide, free to learn, and provides a lifetime of intellectual challenge.

---

### PART 1: The Pieces
*How Each One Moves*

| Piece | Symbol | Movement | Value |
|-------|--------|----------|-------|
| **King** | ♔ | One square in any direction | Priceless (game over if captured) |
| **Queen** | ♕ | Any number of squares in any direction | 9 points |
| **Rook** | ♖ | Any number of squares horizontally or vertically | 5 points |
| **Bishop** | ♗ | Any number of squares diagonally | 3 points |
| **Knight** | ♘ | L-shape: 2 squares + 1 to the side (jumps over pieces!) | 3 points |
| **Pawn** | ♙ | Forward 1 square (2 on first move), captures diagonally | 1 point |

**Special Moves:**
- **Castling:** King moves 2 squares toward a rook, rook jumps to the other side. Protects the king and activates the rook (only if neither has moved, no pieces between, not in/through check)
- **En Passant:** A pawn that advances 2 squares can be captured as if it moved only 1 (special capture, only on the immediate next move)
- **Promotion:** A pawn reaching the opposite end becomes any piece (usually a queen)

<div className="bg-blue-50 dark:bg-blue-900/40 p-4 rounded-lg my-4">
<strong>💡 Piece Value Guide:</strong> Use point values to evaluate trades. Trading a bishop (3) for a rook (5) is good (+2). Trading a queen (9) for two bishops (6) is usually bad (-3). But value depends on the position — sometimes a well-placed knight is worth more than a passive rook.
</div>

---

### PART 2: Opening Principles
*The First 10 Moves That Set Up Your Game*

You don't need to memorize opening theory. Just follow these principles:

1. **Control the center** — Place pawns and pieces to control e4, d4, e5, d5 (the four central squares)
2. **Develop your pieces** — Get knights and bishops out early (toward the center)
3. **Castle early** — Protect your king (usually kingside castling within the first 10 moves)
4. **Don't move the same piece twice** — unless there's a good reason
5. **Don't bring the queen out too early** — she'll get chased around by developing pieces

**A solid beginner opening for White:**
1. e4 (control center)
2. Nf3 (develop knight, attack center)
3. Bc4 or Bb5 (develop bishop)
4. Castle kingside (protect king)
5. d3 or d4 (strengthen center, develop queenside)

<div className="bg-green-50 dark:bg-green-900/40 p-4 rounded-lg my-4">
<strong>🎯 The "Castle by Move 10" Rule:</strong> If you're not castled by move 10, your king is likely in danger. Make castling a priority in every game. An uncastled king in the center is one of the most common reasons beginners lose games.
</div>

---

### PART 3: Basic Tactics
*Winning Material Through Patterns*

#### Fork
One piece attacks two (or more) enemy pieces simultaneously. The opponent can only save one.
- Knight forks are especially powerful (knights jump over pieces)
- Example: A knight on e6 attacking both the queen on d8 and rook on f8

#### Pin
A piece attacks an enemy piece that cannot move because a more valuable piece is behind it.
- Example: A bishop on b5 pins a knight on c6 to the king on e8 — the knight can't move without exposing the king

#### Skewer
Like a reverse pin: the more valuable piece is in front and must move, exposing the piece behind it.
- Example: A rook attacks the queen, the queen moves, and the rook captures the piece behind it

#### Discovered Attack
Moving one piece reveals an attack from another piece behind it.
- Extremely powerful because you effectively make two attacks in one move

<div className="bg-amber-50 dark:bg-amber-900/40 p-4 rounded-lg my-4">
<strong>⚠️ The #1 Tactic Rule:</strong> Before every move, check if your opponent's last move created any threats (checks, captures, attacks). Then check if YOUR intended move leaves any piece undefended. This simple habit — "checks, captures, threats" — prevents 90% of blunders.
</div>

---

### PART 4: Endgame Basics

**King and Queen vs. King:** Always winnable — use the queen to push the enemy king to the edge, then deliver checkmate with your king helping.

**Key endgame principles:**
- **Activate your king** — in the endgame, the king becomes a strong attacking piece
- **Push passed pawns** — a pawn with no opposing pawn in its path is powerful
- **Rook behind passed pawns** — rooks support pawns best from behind

---

### PART 5: How to Improve Quickly

1. **Solve tactics puzzles daily** — Chess.com and Lichess have free puzzle trainers. 15 minutes/day is enough
2. **Play longer games** — play 10-15 minute games minimum (bullet chess teaches bad habits)
3. **Analyze your losses** — use the engine to see where you went wrong
4. **Learn one opening well** — rather than dabbling in many
5. **Watch instructional content** — GothamChess, Daniel Naroditsky on YouTube are excellent for beginners

<div className="bg-blue-50 dark:bg-blue-900/40 p-4 rounded-lg my-4">
<strong>💡 The 80/20 of Chess Improvement:</strong> Solving tactics puzzles accounts for ~80% of rating improvement for beginners. Openings and endgames matter, but pattern recognition through tactics is by far the fastest way to get better.
</div>

---

### Key Takeaways
1. **Learn how pieces move** and their relative values (Queen=9, Rook=5, Bishop/Knight=3, Pawn=1)
2. **Opening principles** > memorized openings — control center, develop pieces, castle early
3. **Check for tactics every move** — forks, pins, skewers win free material
4. **"Checks, captures, threats"** — scan for these before every move to avoid blunders
5. **Solve puzzles daily** — 15 minutes of tactics training is the fastest way to improve`,

    de: `## ♟️ Schach Grundlagen: Das königliche Spiel

### Warum das wichtig ist
Schach ist das ultimative Spiel der Strategie, Mustererkennung und Vorausplanung. Es lehrt Geduld, Berechnung und die Fähigkeit, Konsequenzen zu sehen, bevor sie eintreten. Dazu ist es weltweit gespielt, kostenlos zu lernen und bietet eine lebenslange intellektuelle Herausforderung.

---

### TEIL 1: Die Figuren
*Wie jede Figur zieht*

| Figur | Symbol | Bewegung | Wert |
|-------|--------|----------|------|
| **König** | ♔ | Ein Feld in jede Richtung | Unbezahlbar (Spiel vorbei bei Eroberung) |
| **Dame** | ♕ | Beliebig viele Felder in jede Richtung | 9 Punkte |
| **Turm** | ♖ | Beliebig viele Felder horizontal oder vertikal | 5 Punkte |
| **Läufer** | ♗ | Beliebig viele Felder diagonal | 3 Punkte |
| **Springer** | ♘ | L-förmig: 2 Felder + 1 zur Seite (springt über Figuren!) | 3 Punkte |
| **Bauer** | ♙ | 1 Feld vorwärts (2 beim ersten Zug), schlägt diagonal | 1 Punkt |

**Spezialzüge:**
- **Rochade:** König zieht 2 Felder Richtung Turm, Turm springt auf die andere Seite. Schützt den König und aktiviert den Turm (nur wenn beide noch nicht gezogen haben, keine Figuren dazwischen, nicht im/durch Schach)
- **En Passant:** Ein Bauer, der 2 Felder vorrückt, kann so geschlagen werden, als hätte er nur 1 gezogen (nur sofort im nächsten Zug)
- **Umwandlung:** Ein Bauer, der die gegnerische Grundlinie erreicht, wird zu einer beliebigen Figur (meist Dame)

<div className="bg-blue-50 dark:bg-blue-900/40 p-4 rounded-lg my-4">
<strong>💡 Figuren-Werte:</strong> Nutze Punktwerte um Tausch zu bewerten. Läufer (3) gegen Turm (5) tauschen ist gut (+2). Dame (9) gegen zwei Läufer (6) ist meist schlecht (-3). Aber der Wert hängt von der Stellung ab — manchmal ist ein gut platzierter Springer mehr wert als ein passiver Turm.
</div>

---

### TEIL 2: Eröffnungsprinzipien
*Die ersten 10 Züge, die dein Spiel aufbauen*

Du musst keine Eröffnungstheorie auswendig lernen. Folge einfach diesen Prinzipien:

1. **Kontrolliere das Zentrum** — Platziere Bauern und Figuren zur Kontrolle von e4, d4, e5, d5
2. **Entwickle deine Figuren** — Bringe Springer und Läufer früh raus (Richtung Zentrum)
3. **Rochiere früh** — Schütze deinen König (meist Königsseite innerhalb der ersten 10 Züge)
4. **Ziehe nicht dieselbe Figur zweimal** — es sei denn, es gibt einen guten Grund
5. **Bringe die Dame nicht zu früh raus** — sie wird von sich entwickelnden Figuren gejagt

**Eine solide Anfänger-Eröffnung für Weiß:**
1. e4 (Zentrum kontrollieren)
2. Sf3 (Springer entwickeln, Zentrum angreifen)
3. Lc4 oder Lb5 (Läufer entwickeln)
4. Königsseite rochieren (König schützen)
5. d3 oder d4 (Zentrum stärken, Damenseite entwickeln)

<div className="bg-green-50 dark:bg-green-900/40 p-4 rounded-lg my-4">
<strong>🎯 Die "Rochade bis Zug 10"-Regel:</strong> Wenn du bis Zug 10 nicht rochiert hast, ist dein König wahrscheinlich in Gefahr. Mache Rochade zur Priorität in jedem Spiel. Ein nicht-rochierter König im Zentrum ist einer der häufigsten Gründe, warum Anfänger verlieren.
</div>

---

### TEIL 3: Basistaktiken
*Material gewinnen durch Muster*

#### Gabel
Eine Figur greift zwei (oder mehr) gegnerische Figuren gleichzeitig an. Der Gegner kann nur eine retten.
- Springergabeln sind besonders stark (Springer springen über Figuren)
- Beispiel: Springer auf e6 greift gleichzeitig Dame auf d8 und Turm auf f8 an

#### Fesselung
Eine Figur greift eine gegnerische an, die nicht ziehen kann, weil eine wertvollere dahinter steht.
- Beispiel: Läufer auf b5 fesselt Springer auf c6 an den König auf e8 — der Springer kann nicht ziehen, ohne den König freizulegen

#### Spieß
Wie eine umgekehrte Fesselung: die wertvollere Figur steht vorne und muss ziehen, was die dahinter freilegt.
- Beispiel: Turm greift die Dame an, Dame weicht, Turm schlägt die Figur dahinter

#### Abzugsangriff
Eine Figur ziehen enthüllt einen Angriff einer dahinter stehenden Figur.
- Extrem stark, weil man effektiv zwei Angriffe in einem Zug macht

<div className="bg-amber-50 dark:bg-amber-900/40 p-4 rounded-lg my-4">
<strong>⚠️ Die #1 Taktik-Regel:</strong> Prüfe vor jedem Zug, ob der letzte Zug deines Gegners Drohungen erzeugt hat (Schach, Schlagen, Angriffe). Dann prüfe, ob DEIN geplanter Zug eine Figur ungedeckt lässt. Diese einfache Gewohnheit — "Schach, Schlagen, Drohungen" — verhindert 90% aller Patzer.
</div>

---

### TEIL 4: Endspiel-Basics

**König und Dame gegen König:** Immer gewinnbar — nutze die Dame um den gegnerischen König an den Rand zu drängen, dann Matt mit Königshilfe.

**Wichtige Endspiel-Prinzipien:**
- **Aktiviere deinen König** — im Endspiel wird der König eine starke Angriffsfigur
- **Freibauern vorschieben** — ein Bauer ohne gegnerischen Bauer auf seinem Weg ist mächtig
- **Turm hinter Freibauern** — Türme unterstützen Bauern am besten von hinten

---

### TEIL 5: Schnell besser werden

1. **Täglich Taktik-Puzzles lösen** — Chess.com und Lichess haben kostenlose Puzzle-Trainer. 15 Min/Tag reichen
2. **Längere Partien spielen** — mindestens 10-15 Minuten (Bullet-Schach lehrt schlechte Gewohnheiten)
3. **Niederlagen analysieren** — nutze die Engine um zu sehen, wo du falsch lagst
4. **Eine Eröffnung gut lernen** — statt in vielen herumzuprobieren
5. **Lehr-Content schauen** — GothamChess, Daniel Naroditsky auf YouTube sind exzellent für Anfänger

<div className="bg-blue-50 dark:bg-blue-900/40 p-4 rounded-lg my-4">
<strong>💡 Das 80/20 der Schachverbesserung:</strong> Taktik-Puzzles machen ~80% der Rating-Verbesserung bei Anfängern aus. Eröffnungen und Endspiele sind wichtig, aber Mustererkennung durch Taktik ist bei weitem der schnellste Weg, besser zu werden.
</div>

---

### Die wichtigsten Erkenntnisse
1. **Lerne wie Figuren ziehen** und ihre relativen Werte (Dame=9, Turm=5, Läufer/Springer=3, Bauer=1)
2. **Eröffnungsprinzipien** > auswendig gelernte Eröffnungen — Zentrum kontrollieren, Figuren entwickeln, früh rochieren
3. **Prüfe jeden Zug auf Taktiken** — Gabeln, Fesselungen, Spieße gewinnen freies Material
4. **"Schach, Schlagen, Drohungen"** — vor jedem Zug scannen, um Patzer zu vermeiden
5. **Täglich Puzzles lösen** — 15 Minuten Taktik-Training ist der schnellste Weg zum Verbessern`
  },
  task: {
    en: {
      title: 'Start Your Chess Journey',
      description: 'Learn the basics and start practicing with puzzles and games.',
      checklist: [
        { text: 'Learn how all 6 pieces move (including special moves: castling, en passant, promotion)' },
        { text: 'Create a free account on Lichess.org or Chess.com and solve 10 beginner puzzles' },
        { text: 'Play 3 games (10+ minutes each) focusing on the opening principles: center, develop, castle' },
        { text: 'After each game, analyze it with the engine to see your biggest mistakes' }
      ]
    },
    de: {
      title: 'Starte deine Schach-Reise',
      description: 'Lerne die Grundlagen und beginne mit Puzzles und Partien zu üben.',
      checklist: [
        { text: 'Lerne wie alle 6 Figuren ziehen (inkl. Spezialzüge: Rochade, En Passant, Umwandlung)' },
        { text: 'Erstelle ein kostenloses Konto auf Lichess.org oder Chess.com und löse 10 Anfänger-Puzzles' },
        { text: 'Spiele 3 Partien (je 10+ Minuten) mit Fokus auf Eröffnungsprinzipien: Zentrum, Entwicklung, Rochade' },
        { text: 'Analysiere nach jeder Partie mit der Engine um deine größten Fehler zu sehen' }
      ]
    }
  },
  quiz: {
    de: [
      { question: "Welche Figur ist am wertvollsten und warum?", answer: "Die Dame (9 Punkte) ist die wertvollste spielbare Figur, weil sie beliebig viele Felder in jede Richtung ziehen kann (horizontal, vertikal, diagonal). Der König ist 'unbezahlbar', weil sein Verlust das Spiel beendet." },
      { question: "Was sind die drei wichtigsten Eröffnungsprinzipien?", answer: "1. Zentrum kontrollieren (Bauern und Figuren auf/zu e4, d4, e5, d5), 2. Figuren entwickeln (Springer und Läufer früh rausbringen, Richtung Zentrum), 3. Früh rochieren (König schützen, idealerweise bis Zug 10)." },
      { question: "Was ist eine 'Gabel' im Schach?", answer: "Eine Figur greift gleichzeitig zwei oder mehr gegnerische Figuren an, sodass der Gegner nur eine retten kann. Besonders stark mit dem Springer, da er über Figuren springen kann. Beispiel: Springer auf e6 greift Dame auf d8 und Turm auf f8 an." }
    ],
    en: [
      { question: "Which piece is most valuable and why?", answer: "The Queen (9 points) is the most valuable playable piece because it can move any number of squares in any direction (horizontal, vertical, diagonal). The King is 'priceless' because losing it ends the game." },
      { question: "What are the three most important opening principles?", answer: "1. Control the center (pawns and pieces on/toward e4, d4, e5, d5), 2. Develop pieces (get knights and bishops out early, toward center), 3. Castle early (protect king, ideally by move 10)." },
      { question: "What is a 'fork' in chess?", answer: "One piece attacks two or more enemy pieces simultaneously, so the opponent can only save one. Especially powerful with knights since they jump over pieces. Example: Knight on e6 attacking queen on d8 and rook on f8." }
    ]
  }
};
