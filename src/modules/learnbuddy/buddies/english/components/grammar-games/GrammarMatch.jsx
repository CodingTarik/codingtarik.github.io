import React, { useState, useEffect, useRef } from 'react';
import { Layers, RotateCcw, Trophy, Clock, Zap } from 'lucide-react';

/**
 * GrammarMatch - Memory Card Matching Game
 * Players flip cards to find matching grammar pairs.
 * e.g. "I go" matches "Present Simple", or "have been" matches "Present Perfect Continuous"
 *
 * exercises prop: [{ prompt, match, explanation }]
 *   - prompt: one side of the pair (e.g. "I have eaten")
 *   - match: the other side (e.g. "Present Perfect")
 *   - explanation: shown after a correct match
 */
const GrammarMatch = ({ exercises = [], language = 'en' }) => {
  const [gameState, setGameState] = useState('intro'); // intro | playing | results
  const [cards, setCards] = useState([]);
  const [flipped, setFlipped] = useState([]); // indices of currently flipped cards
  const [matched, setMatched] = useState([]); // indices of matched cards
  const [score, setScore] = useState(0);
  const [mistakes, setMistakes] = useState(0);
  const [elapsed, setElapsed] = useState(0);
  const [lastMatch, setLastMatch] = useState(null); // explanation to show briefly
  const [shakeCards, setShakeCards] = useState([]); // indices to shake on mismatch

  const lockRef = useRef(false); // prevent rapid clicks during flip-back
  const timerRef = useRef(null);

  // Pick up to 6 pairs (12 cards) to keep the grid manageable
  const activePairs = exercises.slice(0, 6);

  // Build shuffled card deck
  const buildDeck = () => {
    const deck = [];
    activePairs.forEach((ex, pairIndex) => {
      deck.push({ id: `p-${pairIndex}`, pairIndex, text: ex.prompt, side: 'prompt' });
      deck.push({ id: `m-${pairIndex}`, pairIndex, text: ex.match, side: 'match' });
    });
    // Fisher-Yates shuffle
    for (let i = deck.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [deck[i], deck[j]] = [deck[j], deck[i]];
    }
    return deck;
  };

  const startGame = () => {
    setCards(buildDeck());
    setFlipped([]);
    setMatched([]);
    setScore(0);
    setMistakes(0);
    setElapsed(0);
    setLastMatch(null);
    setShakeCards([]);
    lockRef.current = false;
    setGameState('playing');
  };

  // Timer
  useEffect(() => {
    if (gameState === 'playing') {
      timerRef.current = setInterval(() => {
        setElapsed(prev => prev + 1);
      }, 1000);
    }
    return () => clearInterval(timerRef.current);
  }, [gameState]);

  // Check for game completion
  useEffect(() => {
    if (gameState === 'playing' && cards.length > 0 && matched.length === cards.length) {
      clearInterval(timerRef.current);
      // Small delay so the last match animation plays
      setTimeout(() => setGameState('results'), 800);
    }
  }, [matched, cards, gameState]);

  const handleCardClick = (index) => {
    if (lockRef.current) return;
    if (flipped.includes(index) || matched.includes(index)) return;

    const newFlipped = [...flipped, index];
    setFlipped(newFlipped);

    if (newFlipped.length === 2) {
      lockRef.current = true;
      const [first, second] = newFlipped;
      const cardA = cards[first];
      const cardB = cards[second];

      if (cardA.pairIndex === cardB.pairIndex && cardA.side !== cardB.side) {
        // Match found!
        const pairExercise = activePairs[cardA.pairIndex];
        setScore(prev => prev + 100);
        setLastMatch(pairExercise.explanation || null);

        setTimeout(() => {
          setMatched(prev => [...prev, first, second]);
          setFlipped([]);
          lockRef.current = false;
          // Clear explanation after a while
          setTimeout(() => setLastMatch(null), 2000);
        }, 600);
      } else {
        // No match
        setMistakes(prev => prev + 1);
        setShakeCards([first, second]);

        setTimeout(() => {
          setFlipped([]);
          setShakeCards([]);
          lockRef.current = false;
        }, 1000);
      }
    }
  };

  const formatTime = (seconds) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}:${s.toString().padStart(2, '0')}`;
  };

  const totalPairs = activePairs.length;
  const matchedPairs = matched.length / 2;
  const accuracy = mistakes + matchedPairs > 0
    ? Math.round((matchedPairs / (mistakes + matchedPairs)) * 100)
    : 100;

  // Compute grid columns based on card count
  const cardCount = activePairs.length * 2;
  const gridCols = cardCount <= 8 ? 'grid-cols-4' : cardCount <= 12 ? 'grid-cols-4 sm:grid-cols-6' : 'grid-cols-4';

  // --- INTRO ---
  if (gameState === 'intro') {
    return (
      <div className="bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl p-8 text-center text-white shadow-xl">
        <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-2xl mb-5 animate-bounce">
          <Layers size={44} className="text-yellow-300" />
        </div>
        <h2 className="text-3xl sm:text-4xl font-black mb-2 drop-shadow">
          {language === 'de' ? 'Grammatik-Memory' : 'Grammar Match'}
        </h2>
        <p className="text-indigo-100 text-lg mb-6 max-w-md mx-auto">
          {language === 'de'
            ? 'Finde die zusammengehörenden Paare! Drehe zwei Karten um und finde die passende Grammatik-Zuordnung.'
            : 'Find the matching pairs! Flip two cards and match each grammar expression to its category.'}
        </p>

        <div className="bg-white/10 backdrop-blur rounded-xl p-4 mb-6 max-w-sm mx-auto text-left space-y-2 text-sm">
          <div className="flex items-center gap-2">
            <span className="w-6 h-6 rounded bg-yellow-400 text-indigo-900 font-bold flex items-center justify-center text-xs">1</span>
            <span>{language === 'de' ? 'Klicke auf eine Karte, um sie umzudrehen' : 'Click a card to flip it'}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-6 h-6 rounded bg-yellow-400 text-indigo-900 font-bold flex items-center justify-center text-xs">2</span>
            <span>{language === 'de' ? 'Finde das passende Paar' : 'Find the matching pair'}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-6 h-6 rounded bg-yellow-400 text-indigo-900 font-bold flex items-center justify-center text-xs">3</span>
            <span>{language === 'de' ? 'Weniger Fehler = bessere Punktzahl!' : 'Fewer mistakes = higher score!'}</span>
          </div>
        </div>

        <button
          onClick={startGame}
          className="bg-yellow-400 hover:bg-yellow-300 text-indigo-900 font-black text-lg px-10 py-3 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105 active:scale-95"
        >
          {language === 'de' ? 'Spiel starten' : 'Start Game'}
        </button>
      </div>
    );
  }

  // --- RESULTS ---
  if (gameState === 'results') {
    const stars = mistakes === 0 ? 3 : mistakes <= 3 ? 2 : 1;
    return (
      <div className="bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl p-8 text-center text-white shadow-xl">
        <div className="flex justify-center gap-2 mb-4">
          {[1, 2, 3].map(i => (
            <Trophy
              key={i}
              size={40}
              className={`transition-all duration-500 ${i <= stars ? 'text-yellow-400 scale-110' : 'text-white/20'}`}
              style={{ transitionDelay: `${i * 200}ms` }}
            />
          ))}
        </div>
        <h2 className="text-3xl font-black mb-4 drop-shadow">
          {language === 'de' ? 'Geschafft!' : 'Complete!'}
        </h2>

        <div className="grid grid-cols-3 gap-4 max-w-sm mx-auto mb-6">
          <div className="bg-white/10 backdrop-blur rounded-xl p-3">
            <div className="text-2xl font-black text-yellow-300">{score}</div>
            <div className="text-xs text-indigo-200 uppercase tracking-wide">{language === 'de' ? 'Punkte' : 'Score'}</div>
          </div>
          <div className="bg-white/10 backdrop-blur rounded-xl p-3">
            <div className="text-2xl font-black text-yellow-300">{formatTime(elapsed)}</div>
            <div className="text-xs text-indigo-200 uppercase tracking-wide">{language === 'de' ? 'Zeit' : 'Time'}</div>
          </div>
          <div className="bg-white/10 backdrop-blur rounded-xl p-3">
            <div className="text-2xl font-black text-yellow-300">{accuracy}%</div>
            <div className="text-xs text-indigo-200 uppercase tracking-wide">{language === 'de' ? 'Genauigkeit' : 'Accuracy'}</div>
          </div>
        </div>

        <div className="text-sm text-indigo-200 mb-6">
          {language === 'de'
            ? `${matchedPairs} Paare gefunden mit ${mistakes} ${mistakes === 1 ? 'Fehler' : 'Fehlern'}`
            : `${matchedPairs} pairs found with ${mistakes} ${mistakes === 1 ? 'mistake' : 'mistakes'}`}
        </div>

        <button
          onClick={startGame}
          className="bg-yellow-400 hover:bg-yellow-300 text-indigo-900 font-black text-lg px-10 py-3 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105 active:scale-95 inline-flex items-center gap-2"
        >
          <RotateCcw size={20} />
          {language === 'de' ? 'Nochmal spielen' : 'Play Again'}
        </button>
      </div>
    );
  }

  // --- PLAYING ---
  return (
    <div className="bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-950/40 dark:to-purple-950/40 rounded-xl p-4 sm:p-6 border-2 border-indigo-200 dark:border-indigo-800 shadow-lg">
      {/* HUD */}
      <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5 bg-indigo-100 dark:bg-indigo-900/60 px-3 py-1.5 rounded-lg">
            <Zap size={16} className="text-yellow-500" />
            <span className="font-bold text-indigo-800 dark:text-indigo-200 text-sm">{score}</span>
          </div>
          <div className="flex items-center gap-1.5 bg-indigo-100 dark:bg-indigo-900/60 px-3 py-1.5 rounded-lg">
            <Clock size={16} className="text-indigo-500 dark:text-indigo-400" />
            <span className="font-bold text-indigo-800 dark:text-indigo-200 text-sm">{formatTime(elapsed)}</span>
          </div>
        </div>
        <div className="text-sm font-semibold text-indigo-700 dark:text-indigo-300">
          {matchedPairs}/{totalPairs} {language === 'de' ? 'Paare' : 'pairs'}
        </div>
      </div>

      {/* Progress Bar */}
      <div className="w-full h-2 bg-indigo-200 dark:bg-indigo-900 rounded-full mb-4 overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full transition-all duration-500 ease-out"
          style={{ width: `${(matchedPairs / totalPairs) * 100}%` }}
        />
      </div>

      {/* Explanation Toast */}
      {lastMatch && (
        <div className="mb-3 bg-green-100 dark:bg-green-900/40 text-green-800 dark:text-green-200 text-sm px-4 py-2 rounded-lg text-center animate-pulse font-medium border border-green-300 dark:border-green-700">
          {lastMatch}
        </div>
      )}

      {/* Card Grid */}
      <div className={`grid ${gridCols} gap-2 sm:gap-3`}>
        {cards.map((card, index) => {
          const isFlipped = flipped.includes(index);
          const isMatched = matched.includes(index);
          const isShaking = shakeCards.includes(index);
          const faceUp = isFlipped || isMatched;

          return (
            <button
              key={card.id}
              onClick={() => handleCardClick(index)}
              disabled={faceUp || lockRef.current}
              className={`
                relative aspect-[3/4] rounded-xl font-semibold text-sm transition-all duration-300 cursor-pointer
                ${isShaking ? 'animate-[shake_0.4s_ease-in-out]' : ''}
                ${isMatched
                  ? 'bg-green-100 dark:bg-green-900/50 border-2 border-green-400 dark:border-green-600 text-green-800 dark:text-green-200 scale-95 opacity-80'
                  : faceUp
                    ? 'bg-white dark:bg-stone-800 border-2 border-indigo-400 dark:border-indigo-500 text-indigo-800 dark:text-indigo-200 shadow-md scale-105'
                    : 'bg-gradient-to-br from-indigo-500 to-purple-600 border-2 border-indigo-400 dark:border-indigo-600 text-transparent hover:from-indigo-400 hover:to-purple-500 hover:scale-105 hover:shadow-lg active:scale-95 shadow'
                }
              `}
            >
              {faceUp ? (
                <span className="absolute inset-0 flex items-center justify-center p-2 text-center leading-tight">
                  {isMatched && <span className="absolute top-1 right-1 text-green-500 text-xs">&#10003;</span>}
                  {card.text}
                </span>
              ) : (
                <span className="absolute inset-0 flex items-center justify-center">
                  <span className="text-2xl text-white/80 font-black">?</span>
                </span>
              )}
            </button>
          );
        })}
      </div>

      {/* Mistakes counter */}
      <div className="mt-3 text-center text-xs text-stone-500 dark:text-stone-400">
        {language === 'de' ? 'Fehler' : 'Mistakes'}: {mistakes}
      </div>

      {/* Shake animation keyframe (injected once) */}
      <style>{`
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          20% { transform: translateX(-6px); }
          40% { transform: translateX(6px); }
          60% { transform: translateX(-4px); }
          80% { transform: translateX(4px); }
        }
      `}</style>
    </div>
  );
};

export default GrammarMatch;
