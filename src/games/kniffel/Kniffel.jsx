import React, { useState, useRef, useEffect, useCallback, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowLeft, Copy, Check, Users, Play, Loader2,
  HelpCircle, X, Send, MessageSquare, Star, Eye
} from 'lucide-react';
import Peer from 'peerjs';
import confetti from 'canvas-confetti';

// ════════════════════════════════════════════════════════════
// CONSTANTS
// ════════════════════════════════════════════════════════════

const AVATARS = ['🦊', '🐼', '🦁', '🐸', '🦉', '🐙', '🦄', '🐲', '🐨', '🦋', '🐧', '🦀', '🐳', '🦜', '🐺', '🦝'];

const PLAYER_COLORS = [
  { gradient: 'from-violet-500 to-purple-600', bg: 'bg-violet-500', light: 'bg-violet-100', text: 'text-violet-600', ring: 'ring-violet-400', badge: 'bg-violet-100 text-violet-700' },
  { gradient: 'from-orange-400 to-rose-500', bg: 'bg-orange-500', light: 'bg-orange-100', text: 'text-orange-600', ring: 'ring-orange-400', badge: 'bg-orange-100 text-orange-700' },
  { gradient: 'from-teal-400 to-cyan-500', bg: 'bg-teal-500', light: 'bg-teal-100', text: 'text-teal-600', ring: 'ring-teal-400', badge: 'bg-teal-100 text-teal-700' },
  { gradient: 'from-rose-400 to-pink-500', bg: 'bg-rose-500', light: 'bg-rose-100', text: 'text-rose-600', ring: 'ring-rose-400', badge: 'bg-rose-100 text-rose-700' },
  { gradient: 'from-emerald-400 to-green-500', bg: 'bg-emerald-500', light: 'bg-emerald-100', text: 'text-emerald-600', ring: 'ring-emerald-400', badge: 'bg-emerald-100 text-emerald-700' },
  { gradient: 'from-blue-400 to-indigo-500', bg: 'bg-blue-500', light: 'bg-blue-100', text: 'text-blue-600', ring: 'ring-blue-400', badge: 'bg-blue-100 text-blue-700' },
];

const UPPER_CATS = [
  { id: 'ones', name: { en: 'Ones', de: 'Einser' }, icon: '1', val: 1 },
  { id: 'twos', name: { en: 'Twos', de: 'Zweier' }, icon: '2', val: 2 },
  { id: 'threes', name: { en: 'Threes', de: 'Dreier' }, icon: '3', val: 3 },
  { id: 'fours', name: { en: 'Fours', de: 'Vierer' }, icon: '4', val: 4 },
  { id: 'fives', name: { en: 'Fives', de: 'Fünfer' }, icon: '5', val: 5 },
  { id: 'sixes', name: { en: 'Sixes', de: 'Sechser' }, icon: '6', val: 6 },
];

const LOWER_CATS = [
  { id: 'threeOfKind', name: { en: 'Three of a Kind', de: 'Dreierpasch' }, icon: '🎲' },
  { id: 'fourOfKind', name: { en: 'Four of a Kind', de: 'Viererpasch' }, icon: '🎲' },
  { id: 'fullHouse', name: { en: 'Full House', de: 'Full House' }, icon: '🏠' },
  { id: 'smallStraight', name: { en: 'Sm. Straight', de: 'Kl. Strasse' }, icon: '📈' },
  { id: 'largeStraight', name: { en: 'Lg. Straight', de: 'Gr. Strasse' }, icon: '📊' },
  { id: 'kniffel', name: { en: 'Kniffel!', de: 'Kniffel!' }, icon: '⭐' },
  { id: 'chance', name: { en: 'Chance', de: 'Chance' }, icon: '🎯' },
];

const ALL_CATS = [...UPPER_CATS, ...LOWER_CATS];
const INITIAL_SCORES = Object.fromEntries(ALL_CATS.map(c => [c.id, null]));
const MAX_PLAYERS = 6;
const TOTAL_ROUNDS = 13;
const MAX_ROLLS = 3;

// ════════════════════════════════════════════════════════════
// TRANSLATIONS
// ════════════════════════════════════════════════════════════

const T = {
  en: {
    subtitle: 'The dice game with friends',
    yourName: 'Your Name',
    enterName: 'Enter name...',
    yourAvatar: 'Your Avatar',
    createRoom: 'Create Room',
    join: 'Join',
    or: 'OR',
    gameRules: 'Rules',
    rules: 'Rules',
    back: 'Back',
    waitingRoom: 'Waiting Room',
    roomCode: 'Room Code',
    shareCode: 'Share this code with friends!',
    players: 'Players',
    waiting: 'Waiting...',
    you: 'YOU',
    startGame: "Let's go!",
    minPlayers: 'At least 2 players',
    waitingForHost: 'Waiting for host...',
    leave: 'Leave',
    round: 'Round',
    yourTurn: 'Your turn! 🎲',
    playerTurn: '{name} is playing...',
    hold: 'HOLD',
    rollsLeft1: '1 roll left',
    rollsLeftN: '{n} rolls left',
    noRolls: 'No rolls left — pick a category!',
    rollAgain: 'Roll again!',
    roll: 'Roll!',
    waitingFor: 'Waiting for {name}...',
    pickCategory: 'Pick a category now!',
    upperSection: 'Upper Section',
    lowerSection: 'Lower Section',
    sum: 'Sum',
    bonus: '+35 Bonus!',
    remaining: '{n} more needed',
    total: 'TOTAL',
    pts: 'pts.',
    gameOver: 'Game Over!',
    afterRounds: 'After 13 rounds',
    viewScores: 'View all scores',
    playAgain: 'Play again!',
    backToMenu: 'Back to menu',
    scoreboard: 'Scoreboard',
    category: 'Category',
    noMessages: 'No messages yet...',
    message: 'Message...',
    youSuffix: '(You)',
    rulesTitle: 'How to play Kniffel!',
    rulesGoal: 'Goal',
    rulesGoalText: 'Score the most points! Each player has 13 rounds with 3 rolls each.',
    rulesHow: 'How to play',
    rulesStep1: 'Roll all 5 dice',
    rulesStep2: 'Hold good dice (tap) and re-roll (up to 2x)',
    rulesStep3: 'Choose a category to score',
    rulesCategories: 'Categories',
    rulesCatUpper: 'Upper: Ones through Sixes (sum of matching dice). Bonus +35 if sum ≥ 63!',
    rulesCatLower: 'Lower: Three/Four of a Kind, Full House (25), Sm./Lg. Straight (30/40), Chance, Kniffel (50)!',
    rulesTip: 'Tip',
    rulesTipText: 'You can also score 0 in a category if nothing fits!',
    enterNameError: 'Please enter a name!',
    enterCodeError: 'Please enter a code!',
    connectionError: 'Connection error.',
    roomNotFound: 'Room not found.',
    connectionLost: 'Connection lost.',
  },
  de: {
    subtitle: 'Das Würfelspiel mit Freunden',
    yourName: 'Dein Name',
    enterName: 'Name eingeben...',
    yourAvatar: 'Dein Avatar',
    createRoom: 'Raum erstellen',
    join: 'Beitreten',
    or: 'ODER',
    gameRules: 'Spielregeln',
    rules: 'Regeln',
    back: 'Zurück',
    waitingRoom: 'Warteraum',
    roomCode: 'Raumcode',
    shareCode: 'Teile diesen Code mit deinen Freunden!',
    players: 'Spieler',
    waiting: 'Warte...',
    you: 'DU',
    startGame: 'Los gehts!',
    minPlayers: 'Mindestens 2 Spieler',
    waitingForHost: 'Warte auf den Host...',
    leave: 'Verlassen',
    round: 'Runde',
    yourTurn: 'Dein Zug! 🎲',
    playerTurn: '{name} ist dran...',
    hold: 'HALTEN',
    rollsLeft1: 'Noch 1 Wurf übrig',
    rollsLeftN: 'Noch {n} Würfe übrig',
    noRolls: 'Keine Würfe mehr — wähle eine Kategorie!',
    rollAgain: 'Nochmal würfeln!',
    roll: 'Würfeln!',
    waitingFor: 'Warte auf {name}...',
    pickCategory: 'Wähle jetzt eine Kategorie!',
    upperSection: 'Oberer Bereich',
    lowerSection: 'Unterer Bereich',
    sum: 'Summe',
    bonus: '+35 Bonus!',
    remaining: 'noch {n}',
    total: 'GESAMT',
    pts: 'Pkt.',
    gameOver: 'Spiel vorbei!',
    afterRounds: 'Nach 13 Runden',
    viewScores: 'Alle Punkte ansehen',
    playAgain: 'Nochmal spielen!',
    backToMenu: 'Zurück zum Menü',
    scoreboard: 'Punktestand',
    category: 'Kategorie',
    noMessages: 'Noch keine Nachrichten...',
    message: 'Nachricht...',
    youSuffix: '(Du)',
    rulesTitle: 'So geht Kniffel!',
    rulesGoal: 'Ziel',
    rulesGoalText: 'Erziele die meisten Punkte! Jeder hat 13 Runden mit je 3 Würfen.',
    rulesHow: 'Ablauf',
    rulesStep1: 'Würfle alle 5 Würfel',
    rulesStep2: 'Halte gute Würfel fest (antippen) und würfle erneut (bis zu 2x)',
    rulesStep3: 'Wähle eine Kategorie zum Punkten',
    rulesCategories: 'Kategorien',
    rulesCatUpper: 'Oben: Einser bis Sechser (Summe passender Würfel). Bonus +35 bei Summe ≥ 63!',
    rulesCatLower: 'Unten: Dreier/Viererpasch, Full House (25), Kl./Gr. Straße (30/40), Chance, Kniffel (50)!',
    rulesTip: 'Tipp',
    rulesTipText: 'Du kannst auch 0 Punkte in einer Kategorie eintragen, wenn nichts passt!',
    enterNameError: 'Bitte gib einen Namen ein!',
    enterCodeError: 'Bitte Code eingeben!',
    connectionError: 'Verbindungsfehler.',
    roomNotFound: 'Raum nicht gefunden.',
    connectionLost: 'Verbindung verloren.',
  },
};

// ════════════════════════════════════════════════════════════
// SCORING LOGIC
// ════════════════════════════════════════════════════════════

function calcScore(dice, catId) {
  const counts = new Array(7).fill(0);
  dice.forEach(d => counts[d]++);
  const sum = dice.reduce((a, b) => a + b, 0);
  const unique = [...new Set(dice)].sort((a, b) => a - b).join('');

  switch (catId) {
    case 'ones': return counts[1];
    case 'twos': return counts[2] * 2;
    case 'threes': return counts[3] * 3;
    case 'fours': return counts[4] * 4;
    case 'fives': return counts[5] * 5;
    case 'sixes': return counts[6] * 6;
    case 'threeOfKind': return counts.some(c => c >= 3) ? sum : 0;
    case 'fourOfKind': return counts.some(c => c >= 4) ? sum : 0;
    case 'fullHouse': return (counts.includes(3) && counts.includes(2)) ? 25 : 0;
    case 'smallStraight': return (unique.includes('1234') || unique.includes('2345') || unique.includes('3456')) ? 30 : 0;
    case 'largeStraight': return (unique === '12345' || unique === '23456') ? 40 : 0;
    case 'kniffel': return counts.includes(5) ? 50 : 0;
    case 'chance': return sum;
    default: return 0;
  }
}

function calcTotals(scores) {
  const upIds = UPPER_CATS.map(c => c.id);
  const loIds = LOWER_CATS.map(c => c.id);
  const upperSum = upIds.reduce((s, id) => s + (scores[id] ?? 0), 0);
  const bonus = upperSum >= 63 ? 35 : 0;
  const lowerSum = loIds.reduce((s, id) => s + (scores[id] ?? 0), 0);
  return { upperSum, bonus, lowerSum, total: upperSum + bonus + lowerSum };
}

function filledCount(scores) {
  return Object.values(scores).filter(v => v !== null).length;
}

function generateCode() {
  const c = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  let r = '';
  for (let i = 0; i < 5; i++) r += c[Math.floor(Math.random() * c.length)];
  return r;
}

// ════════════════════════════════════════════════════════════
// DICE FACE COMPONENT
// ════════════════════════════════════════════════════════════

const PP = {
  tl: { top: '20%', left: '20%' }, tr: { top: '20%', left: '80%' },
  ml: { top: '50%', left: '20%' }, mc: { top: '50%', left: '50%' }, mr: { top: '50%', left: '80%' },
  bl: { top: '80%', left: '20%' }, br: { top: '80%', left: '80%' },
};
const PL = {
  1: ['mc'], 2: ['tr', 'bl'], 3: ['tr', 'mc', 'bl'],
  4: ['tl', 'tr', 'bl', 'br'], 5: ['tl', 'tr', 'mc', 'bl', 'br'],
  6: ['tl', 'tr', 'ml', 'mr', 'bl', 'br'],
};

function DiceFace({ value, size = 56 }) {
  const ps = Math.max(size * 0.16, 3);
  if (!value || value < 1) {
    return (
      <div className="bg-gray-100 rounded-2xl border-2 border-dashed border-gray-200 flex items-center justify-center"
        style={{ width: size, height: size }}>
        <span className="text-gray-300 font-bold" style={{ fontSize: size * 0.35 }}>?</span>
      </div>
    );
  }
  return (
    <div className="bg-white rounded-2xl relative shadow-md border border-gray-100" style={{ width: size, height: size }}>
      {PL[value]?.map((pos, i) => (
        <div key={i} className="absolute rounded-full bg-gray-800"
          style={{ width: ps, height: ps, ...PP[pos], transform: 'translate(-50%,-50%)' }} />
      ))}
    </div>
  );
}

// ════════════════════════════════════════════════════════════
// RULES MODAL
// ════════════════════════════════════════════════════════════

function RulesModal({ onClose, lang }) {
  const t = T[lang];
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4" onClick={onClose}>
      <motion.div initial={{ scale: 0.9, y: 20 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.9 }}
        className="bg-white rounded-3xl p-5 sm:p-6 max-w-lg w-full max-h-[80vh] overflow-y-auto shadow-2xl"
        onClick={e => e.stopPropagation()}>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-black text-gray-800">{t.rulesTitle}</h2>
          <button onClick={onClose} className="p-1.5 rounded-xl hover:bg-gray-100 transition"><X size={20} /></button>
        </div>
        <div className="space-y-3 text-sm text-gray-600">
          <div className="bg-violet-50 rounded-2xl p-4">
            <h3 className="font-bold text-violet-700 mb-1">{t.rulesGoal}</h3>
            <p>{t.rulesGoalText}</p>
          </div>
          <div className="bg-orange-50 rounded-2xl p-4">
            <h3 className="font-bold text-orange-700 mb-1">{t.rulesHow}</h3>
            <ol className="list-decimal list-inside space-y-1">
              <li>{t.rulesStep1}</li>
              <li>{t.rulesStep2}</li>
              <li>{t.rulesStep3}</li>
            </ol>
          </div>
          <div className="bg-teal-50 rounded-2xl p-4">
            <h3 className="font-bold text-teal-700 mb-1">{t.rulesCategories}</h3>
            <p className="mb-1">{t.rulesCatUpper}</p>
            <p className="mb-1">{t.rulesCatLower}</p>
          </div>
          <div className="bg-rose-50 rounded-2xl p-4">
            <h3 className="font-bold text-rose-700 mb-1">{t.rulesTip}</h3>
            <p>{t.rulesTipText}</p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

// ════════════════════════════════════════════════════════════
// SCOREBOARD MODAL (view all players' scores)
// ════════════════════════════════════════════════════════════

function ScoreboardModal({ players, onClose, lang }) {
  const t = T[lang];
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/40 backdrop-blur-sm" onClick={onClose}>
      <motion.div initial={{ y: 100 }} animate={{ y: 0 }} exit={{ y: 100 }}
        className="bg-white rounded-t-3xl sm:rounded-3xl p-4 sm:p-6 w-full sm:max-w-2xl max-h-[85vh] overflow-auto shadow-2xl"
        onClick={e => e.stopPropagation()}>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-black text-gray-800">{t.scoreboard}</h2>
          <button onClick={onClose} className="p-1.5 rounded-xl hover:bg-gray-100"><X size={20} /></button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-xs">
            <thead>
              <tr>
                <th className="text-left py-1.5 px-2 text-gray-400 font-medium">{t.category}</th>
                {players.map((p, i) => (
                  <th key={p.id} className="py-1.5 px-2 text-center">
                    <span className="text-lg">{p.avatar}</span>
                    <div className={`text-[10px] font-bold ${PLAYER_COLORS[i % 6].text}`}>{p.name}</div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {ALL_CATS.map(cat => (
                <tr key={cat.id} className="border-t border-gray-50">
                  <td className="py-1.5 px-2 font-medium text-gray-600">{cat.icon} {cat.name[lang]}</td>
                  {players.map(p => (
                    <td key={p.id} className="py-1.5 px-2 text-center font-bold text-gray-700">
                      {p.scores[cat.id] !== null ? p.scores[cat.id] : '—'}
                    </td>
                  ))}
                </tr>
              ))}
              <tr className="border-t-2 border-violet-200 bg-violet-50">
                <td className="py-2 px-2 font-black text-violet-700">{t.total}</td>
                {players.map(p => (
                  <td key={p.id} className="py-2 px-2 text-center font-black text-violet-700 text-base">
                    {calcTotals(p.scores).total}
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      </motion.div>
    </motion.div>
  );
}

// ════════════════════════════════════════════════════════════
// MAIN COMPONENT
// ════════════════════════════════════════════════════════════

export default function Kniffel() {
  // ── UI State ──
  const [screen, setScreen] = useState('menu');
  const [lang, setLang] = useState('en');
  const [myName, setMyName] = useState('');
  const [myAvatar, setMyAvatar] = useState(AVATARS[Math.floor(Math.random() * AVATARS.length)]);
  const [roomCode, setRoomCode] = useState('');
  const [joinCode, setJoinCode] = useState('');
  const [isHost, setIsHost] = useState(false);
  const [connStatus, setConnStatus] = useState('disconnected');
  const [error, setError] = useState('');
  const [copied, setCopied] = useState(false);
  const [showRules, setShowRules] = useState(false);
  const [showScoreboard, setShowScoreboard] = useState(false);
  const [showChat, setShowChat] = useState(false);
  const [chatMessages, setChatMessages] = useState([]);
  const [chatInput, setChatInput] = useState('');
  const [rollingAnim, setRollingAnim] = useState(false);
  const [rollKey, setRollKey] = useState(0);
  const [scoreFlash, setScoreFlash] = useState(null);

  // ── Game State ──
  const [players, setPlayers] = useState([]);
  const [currentPlayerIndex, setCurrentPlayerIndex] = useState(0);
  const [dice, setDice] = useState([0, 0, 0, 0, 0]);
  const [heldDice, setHeldDice] = useState([false, false, false, false, false]);
  const [rollsLeft, setRollsLeft] = useState(MAX_ROLLS);
  const [hasRolled, setHasRolled] = useState(false);
  const [roundNumber, setRoundNumber] = useState(1);
  const [phase, setPhase] = useState('lobby');
  const [winner, setWinner] = useState(null);

  // ── Refs ──
  const peerRef = useRef(null);
  const connsRef = useRef([]);
  const hostConnRef = useRef(null);
  const myIdRef = useRef('');
  const gsRef = useRef({
    phase: 'lobby', players: [], currentPlayerIndex: 0,
    dice: [0, 0, 0, 0, 0], heldDice: [false, false, false, false, false],
    rollsLeft: MAX_ROLLS, hasRolled: false, roundNumber: 1,
  });

  useEffect(() => { return () => { if (peerRef.current) peerRef.current.destroy(); }; }, []);

  // ── Derived State ──
  const myPlayer = players.find(p => p.id === myIdRef.current);
  const currentPlayer = players[currentPlayerIndex];
  const isMyTurn = currentPlayer?.id === myIdRef.current;
  const canRoll = isMyTurn && rollsLeft > 0 && phase === 'playing';
  const canHold = isMyTurn && hasRolled && rollsLeft > 0 && phase === 'playing';
  const canScore = isMyTurn && hasRolled && phase === 'playing';
  const t = T[lang];

  const potentials = useMemo(() => {
    if (!hasRolled || !dice.some(d => d > 0)) return {};
    const r = {};
    ALL_CATS.forEach(c => { r[c.id] = calcScore(dice, c.id); });
    return r;
  }, [dice, hasRolled]);

  // ════════════════════════════════════════════════════════
  // NETWORKING HELPERS
  // ════════════════════════════════════════════════════════

  const syncLocal = useCallback((gs) => {
    setPlayers(gs.players.map(p => ({ ...p, scores: { ...p.scores } })));
    setCurrentPlayerIndex(gs.currentPlayerIndex);
    setDice([...gs.dice]);
    setHeldDice([...gs.heldDice]);
    setRollsLeft(gs.rollsLeft);
    setHasRolled(gs.hasRolled);
    setRoundNumber(gs.roundNumber);
    setPhase(gs.phase);
  }, []);

  const broadcast = useCallback((overrideType) => {
    const gs = gsRef.current;
    const msg = {
      type: overrideType || 'game-state',
      phase: gs.phase, players: gs.players.map(p => ({ ...p, scores: { ...p.scores } })),
      currentPlayerIndex: gs.currentPlayerIndex, dice: [...gs.dice],
      heldDice: [...gs.heldDice], rollsLeft: gs.rollsLeft,
      hasRolled: gs.hasRolled, roundNumber: gs.roundNumber,
    };
    connsRef.current.forEach(c => { try { c.send(msg); } catch (_) { } });
    syncLocal(gs);
  }, [syncLocal]);

  const sendToHost = useCallback((data) => {
    if (isHost) {
      handleAction(myIdRef.current, data);
    } else if (hostConnRef.current) {
      try { hostConnRef.current.send(data); } catch (_) { }
    }
  }, [isHost]);

  const broadcastChat = useCallback((from, avatar, text) => {
    const msg = { type: 'chat-msg', from, avatar, text, id: Date.now() };
    connsRef.current.forEach(c => { try { c.send(msg); } catch (_) { } });
    setChatMessages(prev => [...prev.slice(-40), msg]);
  }, []);

  // ── Apply state from host (client) ──
  const applyState = useCallback((data) => {
    setPlayers(data.players);
    setCurrentPlayerIndex(data.currentPlayerIndex);
    setDice(data.dice);
    setHeldDice(data.heldDice);
    setRollsLeft(data.rollsLeft);
    setHasRolled(data.hasRolled);
    setRoundNumber(data.roundNumber);
    setPhase(data.phase);
    if (data.phase === 'playing' && screen !== 'game') setScreen('game');
    if (data.phase === 'gameover') {
      const sorted = [...data.players].sort((a, b) => calcTotals(b.scores).total - calcTotals(a.scores).total);
      setWinner(sorted[0] || null);
      setScreen('gameover');
      if (sorted[0]?.id === myIdRef.current) confetti({ particleCount: 200, spread: 100, origin: { y: 0.6 } });
    }
  }, [screen]);

  const handleHostMsg = useCallback((data) => {
    if (data.type === 'game-state' || data.type === 'lobby-update') {
      applyState(data);
      if (data.type === 'lobby-update') setPlayers(data.players);
    } else if (data.type === 'chat-msg') {
      setChatMessages(prev => [...prev.slice(-40), data]);
    } else if (data.type === 'roll-anim') {
      setRollingAnim(true);
      setTimeout(() => setRollingAnim(false), 500);
      setRollKey(k => k + 1);
    } else if (data.type === 'kniffel-alert') {
      confetti({ particleCount: 80, spread: 60, origin: { y: 0.5 } });
    }
  }, [applyState]);

  // ── Game Logic (Host) ──
  const handleAction = useCallback((playerId, data) => {
    const gs = gsRef.current;

    if (data.type === 'chat') {
      const p = gs.players.find(pl => pl.id === playerId);
      if (p) broadcastChat(p.name, p.avatar, data.text);
      return;
    }
    if (data.type !== 'action') return;
    const cp = gs.players[gs.currentPlayerIndex];
    if (!cp || cp.id !== playerId) return;

    switch (data.action) {
      case 'roll': {
        if (gs.rollsLeft <= 0 || gs.phase !== 'playing') return;
        const nd = [...gs.dice];
        for (let i = 0; i < 5; i++) {
          if (!gs.heldDice[i]) nd[i] = Math.floor(Math.random() * 6) + 1;
        }
        gs.dice = nd;
        gs.rollsLeft--;
        gs.hasRolled = true;
        // Trigger roll animation on all clients
        connsRef.current.forEach(c => { try { c.send({ type: 'roll-anim' }); } catch (_) { } });
        setRollingAnim(true);
        setTimeout(() => setRollingAnim(false), 500);
        setRollKey(k => k + 1);
        // Check for Kniffel
        if (new Set(nd).size === 1) {
          connsRef.current.forEach(c => { try { c.send({ type: 'kniffel-alert' }); } catch (_) { } });
          confetti({ particleCount: 80, spread: 60, origin: { y: 0.5 } });
        }
        broadcast();
        break;
      }
      case 'hold': {
        if (!gs.hasRolled || gs.rollsLeft <= 0 || gs.phase !== 'playing') return;
        const idx = data.index;
        if (idx < 0 || idx >= 5) return;
        gs.heldDice[idx] = !gs.heldDice[idx];
        broadcast();
        break;
      }
      case 'score': {
        if (!gs.hasRolled || gs.phase !== 'playing') return;
        const catId = data.category;
        if (cp.scores[catId] !== null) return;
        cp.scores[catId] = calcScore(gs.dice, catId);
        // Advance turn
        gs.currentPlayerIndex = (gs.currentPlayerIndex + 1) % gs.players.length;
        if (gs.currentPlayerIndex === 0) gs.roundNumber++;
        gs.dice = [0, 0, 0, 0, 0];
        gs.heldDice = [false, false, false, false, false];
        gs.rollsLeft = MAX_ROLLS;
        gs.hasRolled = false;
        if (gs.roundNumber > TOTAL_ROUNDS) gs.phase = 'gameover';
        broadcast();
        break;
      }
    }
  }, [broadcast, broadcastChat]);

  // ════════════════════════════════════════════════════════
  // PEER JS SETUP
  // ════════════════════════════════════════════════════════

  const createRoom = useCallback(() => {
    if (!myName.trim()) { setError('enterNameError'); return; }
    setError('');
    setConnStatus('connecting');
    const code = generateCode();
    const peer = new Peer('knfl-' + code, { debug: 0, config: { iceServers: [{ urls: 'stun:stun.l.google.com:19302' }] } });

    peer.on('open', (id) => {
      peerRef.current = peer;
      myIdRef.current = id;
      setRoomCode(code);
      setIsHost(true);
      setConnStatus('connected');
      const me = { id, name: myName.trim(), avatar: myAvatar, scores: { ...INITIAL_SCORES } };
      gsRef.current.players = [me];
      setPlayers([me]);
      setScreen('lobby');
    });

    peer.on('connection', (conn) => {
      conn.on('data', (data) => {
        if (data.type === 'join') {
          if (gsRef.current.players.length >= MAX_PLAYERS) { conn.send({ type: 'full' }); return; }
          gsRef.current.players.push({ id: conn.peer, name: data.name, avatar: data.avatar, scores: { ...INITIAL_SCORES } });
          connsRef.current.push(conn);
          broadcast('lobby-update');
        } else {
          handleAction(conn.peer, data);
        }
      });
      conn.on('close', () => {
        connsRef.current = connsRef.current.filter(c => c !== conn);
        const gs = gsRef.current;
        const idx = gs.players.findIndex(p => p.id === conn.peer);
        if (idx === -1) return;
        if (gs.phase === 'lobby') {
          gs.players.splice(idx, 1);
        } else {
          // Fill all remaining scores with 0
          const p = gs.players[idx];
          Object.keys(p.scores).forEach(k => { if (p.scores[k] === null) p.scores[k] = 0; });
          if (gs.currentPlayerIndex === idx) {
            gs.currentPlayerIndex = gs.currentPlayerIndex % gs.players.length;
            gs.dice = [0, 0, 0, 0, 0];
            gs.heldDice = [false, false, false, false, false];
            gs.rollsLeft = MAX_ROLLS;
            gs.hasRolled = false;
          }
          // Check gameover
          const allDone = gs.players.every(pl => filledCount(pl.scores) === 13);
          if (allDone) gs.phase = 'gameover';
        }
        broadcast(gs.phase === 'lobby' ? 'lobby-update' : undefined);
      });
    });
    peer.on('error', () => { setConnStatus('error'); setError('connectionError'); });
  }, [myName, myAvatar, broadcast, handleAction]);

  const joinRoom = useCallback(() => {
    if (!myName.trim()) { setError('enterNameError'); return; }
    if (!joinCode.trim()) { setError('enterCodeError'); return; }
    setError('');
    setConnStatus('connecting');
    const peer = new Peer(undefined, { debug: 0, config: { iceServers: [{ urls: 'stun:stun.l.google.com:19302' }] } });

    peer.on('open', (id) => {
      peerRef.current = peer;
      myIdRef.current = id;
      setIsHost(false);
      const conn = peer.connect('knfl-' + joinCode.trim().toUpperCase());
      let connected = false;
      const timer = setTimeout(() => { if (!connected) { setError('roomNotFound'); setConnStatus('error'); peer.destroy(); } }, 10000);
      conn.on('open', () => {
        connected = true;
        clearTimeout(timer);
        hostConnRef.current = conn;
        setRoomCode(joinCode.trim().toUpperCase());
        setConnStatus('connected');
        setScreen('lobby');
        conn.send({ type: 'join', name: myName.trim(), avatar: myAvatar });
      });
      conn.on('data', handleHostMsg);
      conn.on('close', () => { setError('connectionLost'); setScreen('menu'); setConnStatus('disconnected'); });
    });
    peer.on('error', () => { setConnStatus('error'); setError('connectionError'); });
  }, [myName, myAvatar, joinCode, handleHostMsg]);

  const startGame = useCallback(() => {
    if (!isHost || gsRef.current.players.length < 2) return;
    const gs = gsRef.current;
    // Shuffle order
    for (let i = gs.players.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [gs.players[i], gs.players[j]] = [gs.players[j], gs.players[i]];
    }
    gs.currentPlayerIndex = 0;
    gs.dice = [0, 0, 0, 0, 0];
    gs.heldDice = [false, false, false, false, false];
    gs.rollsLeft = MAX_ROLLS;
    gs.hasRolled = false;
    gs.roundNumber = 1;
    gs.phase = 'playing';
    broadcast();
    setScreen('game');
  }, [isHost, broadcast]);

  const leave = useCallback(() => {
    if (peerRef.current) peerRef.current.destroy();
    peerRef.current = null;
    connsRef.current = [];
    hostConnRef.current = null;
    gsRef.current = { phase: 'lobby', players: [], currentPlayerIndex: 0, dice: [0, 0, 0, 0, 0], heldDice: [false, false, false, false, false], rollsLeft: MAX_ROLLS, hasRolled: false, roundNumber: 1 };
    setScreen('menu');
    setConnStatus('disconnected');
    setPlayers([]);
    setDice([0, 0, 0, 0, 0]);
    setHeldDice([false, false, false, false, false]);
    setRollsLeft(MAX_ROLLS);
    setHasRolled(false);
    setPhase('lobby');
    setWinner(null);
    setError('');
    setChatMessages([]);
    setRollingAnim(false);
    setScoreFlash(null);
  }, []);

  const restart = useCallback(() => {
    if (!isHost) return;
    const gs = gsRef.current;
    gs.players.forEach(p => { p.scores = { ...INITIAL_SCORES }; });
    gs.currentPlayerIndex = 0;
    gs.dice = [0, 0, 0, 0, 0];
    gs.heldDice = [false, false, false, false, false];
    gs.rollsLeft = MAX_ROLLS;
    gs.hasRolled = false;
    gs.roundNumber = 1;
    gs.phase = 'playing';
    setWinner(null);
    setScreen('game');
    broadcast();
  }, [isHost, broadcast]);

  const doChat = useCallback((text) => {
    const txt = text || chatInput.trim();
    if (!txt) return;
    sendToHost({ type: 'chat', text: txt });
    if (isHost) broadcastChat(myName, myAvatar, txt);
    setChatInput('');
  }, [chatInput, sendToHost, isHost, myName, myAvatar, broadcastChat]);

  const copyCode = () => { navigator.clipboard.writeText(roomCode).then(() => { setCopied(true); setTimeout(() => setCopied(false), 2000); }); };

  const shareLink = () => {
    const url = `${window.location.origin}/games/kniffel/${roomCode}`;
    if (navigator.share) {
      navigator.share({ title: 'Kniffel', text: 'Join my Kniffel game!', url }).catch(() => {});
    } else {
      navigator.clipboard.writeText(url).then(() => { setCopied(true); setTimeout(() => setCopied(false), 2000); });
    }
  };

  // Auto-detect join code from URL
  useEffect(() => {
    const m = window.location.pathname.match(/\/games\/kniffel\/([A-Z0-9]+)/i);
    if (m) setJoinCode(m[1].toUpperCase());
  }, []);

  // ════════════════════════════════════════════════════════
  // RENDER: MENU
  // ════════════════════════════════════════════════════════

  if (screen === 'menu') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-violet-100 via-purple-50 to-indigo-100 flex items-center justify-center p-4">
        <AnimatePresence>{showRules && <RulesModal onClose={() => setShowRules(false)} lang={lang} />}</AnimatePresence>
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="w-full max-w-md">
          {/* Branding */}
          <div className="text-center mb-6">
            <motion.div className="flex justify-center gap-1.5 mb-3"
              animate={{ y: [0, -6, 0] }} transition={{ repeat: Infinity, duration: 2.5, ease: 'easeInOut' }}>
              {[1, 2, 3, 4, 5].map(v => <DiceFace key={v} value={v} size={36} />)}
            </motion.div>
            <h1 className="text-5xl sm:text-6xl font-black bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent tracking-tight">
              KNIFFEL
            </h1>
            <p className="text-gray-500 text-sm mt-1 font-medium">{t.subtitle}</p>
          </div>

          {/* Card */}
          <div className="bg-white rounded-3xl shadow-xl shadow-purple-200/30 p-5 sm:p-6 space-y-4">
            <div>
              <label className="text-xs font-bold text-gray-400 mb-1 block uppercase tracking-wider">{t.yourName}</label>
              <input type="text" value={myName} onChange={e => setMyName(e.target.value.slice(0, 12))}
                placeholder={t.enterName} maxLength={12}
                className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-100 rounded-2xl text-gray-800 placeholder-gray-300 focus:outline-none focus:border-violet-300 focus:bg-white transition font-medium" />
            </div>

            <div>
              <label className="text-xs font-bold text-gray-400 mb-1.5 block uppercase tracking-wider">{t.yourAvatar}</label>
              <div className="flex flex-wrap gap-1.5">
                {AVATARS.map(av => (
                  <button key={av} onClick={() => setMyAvatar(av)}
                    className={`w-10 h-10 rounded-xl flex items-center justify-center text-xl transition-all ${myAvatar === av ? 'bg-violet-100 ring-2 ring-violet-400 scale-110' : 'bg-gray-50 hover:bg-gray-100'}`}>
                    {av}
                  </button>
                ))}
              </div>
            </div>

            <AnimatePresence>
              {error && <motion.p initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="text-sm text-rose-500 bg-rose-50 rounded-2xl px-4 py-2 font-medium">{t[error] || error}</motion.p>}
            </AnimatePresence>

            <div className="space-y-2.5 pt-1">
              <button onClick={createRoom} disabled={connStatus === 'connecting'}
                className="w-full py-3.5 bg-gradient-to-r from-violet-500 to-purple-600 hover:from-violet-400 hover:to-purple-500 text-white font-bold rounded-2xl shadow-lg shadow-violet-300/30 transition-all disabled:opacity-50 flex items-center justify-center gap-2 text-base">
                {connStatus === 'connecting' ? <Loader2 size={18} className="animate-spin" /> : <Play size={18} />}
                {t.createRoom}
              </button>

              <div className="flex items-center gap-2">
                <div className="flex-1 h-px bg-gray-100" />
                <span className="text-gray-300 text-xs font-bold">{t.or}</span>
                <div className="flex-1 h-px bg-gray-100" />
              </div>

              <div className="flex gap-2">
                <input type="text" value={joinCode} onChange={e => setJoinCode(e.target.value.toUpperCase().slice(0, 5))}
                  placeholder="CODE" maxLength={5}
                  className="flex-1 px-4 py-3 bg-gray-50 border-2 border-gray-100 rounded-2xl text-gray-800 text-center font-mono text-lg tracking-[0.2em] placeholder-gray-300 focus:outline-none focus:border-orange-300 transition font-bold" />
                <button onClick={joinRoom} disabled={connStatus === 'connecting'}
                  className="px-6 py-3 bg-gradient-to-r from-orange-400 to-rose-500 hover:from-orange-300 hover:to-rose-400 text-white font-bold rounded-2xl shadow-lg shadow-orange-200/30 transition-all disabled:opacity-50 flex items-center gap-2">
                  {connStatus === 'connecting' ? <Loader2 size={18} className="animate-spin" /> : <Users size={18} />}
                  {t.join}
                </button>
              </div>
            </div>
          </div>

          <div className="flex justify-center items-center gap-4 mt-5">
            <button onClick={() => setShowRules(true)} className="flex items-center gap-1.5 text-gray-400 hover:text-violet-500 text-sm font-medium transition">
              <HelpCircle size={15} /> {t.gameRules}
            </button>
            <button onClick={() => setLang(l => l === 'en' ? 'de' : 'en')}
              className="px-2.5 py-1 rounded-xl bg-gray-100 hover:bg-violet-100 text-xs font-bold text-gray-500 hover:text-violet-600 transition">
              {lang === 'en' ? '🇬🇧 EN' : '🇩🇪 DE'}
            </button>
            <a href="/tools" className="flex items-center gap-1.5 text-gray-400 hover:text-gray-600 text-sm font-medium transition">
              <ArrowLeft size={15} /> {t.back}
            </a>
          </div>
        </motion.div>
      </div>
    );
  }

  // ════════════════════════════════════════════════════════
  // RENDER: LOBBY
  // ════════════════════════════════════════════════════════

  if (screen === 'lobby') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-violet-100 via-purple-50 to-indigo-100 flex items-center justify-center p-4">
        <AnimatePresence>{showRules && <RulesModal onClose={() => setShowRules(false)} lang={lang} />}</AnimatePresence>
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="w-full max-w-md">
          <div className="text-center mb-5">
            <motion.div className="text-4xl mb-2" animate={{ rotate: [0, 10, -10, 0] }} transition={{ repeat: Infinity, duration: 3 }}>🎲</motion.div>
            <h2 className="text-2xl font-black text-gray-800">{t.waitingRoom}</h2>
          </div>

          <div className="bg-white rounded-3xl shadow-xl shadow-purple-200/30 p-5 sm:p-6 space-y-4">
            <div className="text-center">
              <div className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1">{t.roomCode}</div>
              <button onClick={copyCode}
                className="inline-flex items-center gap-2.5 px-6 py-3 bg-violet-50 rounded-2xl hover:bg-violet-100 transition group">
                <span className="font-mono text-2xl font-black text-violet-600 tracking-[0.2em]">{roomCode}</span>
                {copied ? <Check size={18} className="text-emerald-500" /> : <Copy size={18} className="text-violet-300 group-hover:text-violet-500" />}
              </button>
              <p className="text-[11px] text-gray-400 mt-1">{t.shareCode}</p>
              <button onClick={shareLink}
                className="mt-2 inline-flex items-center gap-1.5 px-4 py-2 bg-violet-100 hover:bg-violet-200 text-violet-600 font-semibold rounded-xl text-xs transition">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 12v8a2 2 0 002 2h12a2 2 0 002-2v-8"/><polyline points="16 6 12 2 8 6"/><line x1="12" y1="2" x2="12" y2="15"/>
                </svg>
                {copied ? (lang === 'de' ? 'Link kopiert!' : 'Link copied!') : (lang === 'de' ? 'Einladungslink teilen' : 'Share invite link')}
              </button>
            </div>

            <div>
              <div className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-2">
                {t.players} ({players.length}/{MAX_PLAYERS})
              </div>
              <div className="grid grid-cols-3 gap-2">
                {players.map((p, i) => {
                  const col = PLAYER_COLORS[i % 6];
                  return (
                    <motion.div key={p.id} initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }}
                      className="flex flex-col items-center p-3 rounded-2xl bg-gray-50 border-2 border-gray-100">
                      <div className={`w-12 h-12 rounded-full ${col.light} flex items-center justify-center text-2xl mb-1`}>{p.avatar}</div>
                      <div className="text-xs font-bold text-gray-700 truncate max-w-full">{p.name}</div>
                      {p.id === myIdRef.current && <div className={`text-[9px] font-bold ${col.text}`}>{t.you}</div>}
                    </motion.div>
                  );
                })}
                {players.length < 2 && (
                  <div className="flex flex-col items-center p-3 rounded-2xl bg-gray-50 border-2 border-dashed border-gray-200">
                    <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center text-2xl mb-1 opacity-30">👤</div>
                    <div className="text-xs text-gray-300 font-medium">{t.waiting}</div>
                  </div>
                )}
              </div>
            </div>

            {isHost ? (
              <button onClick={startGame} disabled={players.length < 2}
                className="w-full py-3.5 bg-gradient-to-r from-emerald-400 to-green-500 hover:from-emerald-300 hover:to-green-400 text-white font-bold rounded-2xl shadow-lg shadow-emerald-200/30 transition-all disabled:opacity-40 disabled:cursor-not-allowed flex items-center justify-center gap-2 text-base">
                <Play size={18} />
                {players.length < 2 ? t.minPlayers : t.startGame}
              </button>
            ) : (
              <div className="text-center py-3 text-gray-400 text-sm flex items-center justify-center gap-2 font-medium">
                <Loader2 size={16} className="animate-spin" /> {t.waitingForHost}
              </div>
            )}

            <div className="flex justify-between pt-1">
              <button onClick={leave} className="text-gray-400 hover:text-rose-500 text-sm font-medium flex items-center gap-1 transition">
                <ArrowLeft size={14} /> {t.leave}
              </button>
              <button onClick={() => setShowRules(true)} className="text-gray-400 hover:text-violet-500 text-sm font-medium flex items-center gap-1 transition">
                <HelpCircle size={14} /> {t.rules}
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    );
  }

  // ════════════════════════════════════════════════════════
  // RENDER: GAME OVER
  // ════════════════════════════════════════════════════════

  if (screen === 'gameover') {
    const sorted = [...players].sort((a, b) => calcTotals(b.scores).total - calcTotals(a.scores).total);
    const podium = sorted.slice(0, 3);
    return (
      <div className="min-h-screen bg-gradient-to-br from-violet-100 via-purple-50 to-indigo-100 flex items-center justify-center p-4">
        <AnimatePresence>{showScoreboard && <ScoreboardModal players={players} onClose={() => setShowScoreboard(false)} lang={lang} />}</AnimatePresence>
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="w-full max-w-md text-center">
          <motion.div animate={{ y: [0, -8, 0] }} transition={{ repeat: Infinity, duration: 2 }} className="text-6xl mb-3">🏆</motion.div>
          <h2 className="text-3xl font-black text-gray-800 mb-1">{t.gameOver}</h2>
          <p className="text-gray-400 text-sm mb-6">{t.afterRounds}</p>

          {/* Podium */}
          <div className="flex justify-center items-end gap-3 mb-6">
            {podium.length > 1 && (
              <motion.div initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.4 }}
                className="text-center">
                <div className="text-3xl mb-1">{podium[1].avatar}</div>
                <div className="bg-gray-100 rounded-2xl px-4 py-3 min-w-[70px]">
                  <div className="text-xs font-bold text-gray-500">2.</div>
                  <div className="text-sm font-bold text-gray-700 truncate">{podium[1].name}</div>
                  <div className="text-base font-black text-gray-600">{calcTotals(podium[1].scores).total}</div>
                </div>
              </motion.div>
            )}
            <motion.div initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2 }}
              className="text-center -mt-4">
              <div className="text-xl mb-0.5">👑</div>
              <div className="text-4xl mb-1">{podium[0]?.avatar}</div>
              <div className="bg-gradient-to-b from-amber-50 to-yellow-100 rounded-2xl px-5 py-4 min-w-[80px] ring-2 ring-amber-300 shadow-lg shadow-amber-200/30">
                <div className="text-xs font-bold text-amber-600">1.</div>
                <div className="text-sm font-bold text-amber-800 truncate">{podium[0]?.name}</div>
                <div className="text-xl font-black text-amber-700">{calcTotals(podium[0]?.scores || {}).total}</div>
              </div>
            </motion.div>
            {podium.length > 2 && (
              <motion.div initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.6 }}
                className="text-center">
                <div className="text-3xl mb-1">{podium[2].avatar}</div>
                <div className="bg-orange-50 rounded-2xl px-4 py-3 min-w-[70px]">
                  <div className="text-xs font-bold text-orange-400">3.</div>
                  <div className="text-sm font-bold text-orange-700 truncate">{podium[2].name}</div>
                  <div className="text-base font-black text-orange-600">{calcTotals(podium[2].scores).total}</div>
                </div>
              </motion.div>
            )}
          </div>

          {/* Actions */}
          <div className="space-y-2.5">
            <button onClick={() => setShowScoreboard(true)}
              className="w-full py-3 bg-white text-violet-600 font-bold rounded-2xl shadow-md hover:shadow-lg transition flex items-center justify-center gap-2">
              <Eye size={16} /> {t.viewScores}
            </button>
            {isHost && (
              <button onClick={restart}
                className="w-full py-3.5 bg-gradient-to-r from-violet-500 to-purple-600 text-white font-bold rounded-2xl shadow-lg shadow-violet-300/30 transition-all hover:from-violet-400 hover:to-purple-500">
                {t.playAgain}
              </button>
            )}
            <button onClick={leave} className="w-full py-3 bg-gray-100 text-gray-600 font-bold rounded-2xl hover:bg-gray-200 transition">
              {t.backToMenu}
            </button>
          </div>
        </motion.div>
      </div>
    );
  }

  // ════════════════════════════════════════════════════════
  // RENDER: GAME
  // ════════════════════════════════════════════════════════

  const myScores = myPlayer?.scores || INITIAL_SCORES;
  const myTotals = calcTotals(myScores);

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 via-purple-50 to-indigo-50 flex flex-col">
      <AnimatePresence>
        {showRules && <RulesModal onClose={() => setShowRules(false)} lang={lang} />}
        {showScoreboard && <ScoreboardModal players={players} onClose={() => setShowScoreboard(false)} lang={lang} />}
      </AnimatePresence>

      {/* ── Header ── */}
      <div className="flex items-center justify-between px-3 sm:px-4 py-2.5 bg-white/70 backdrop-blur-md border-b border-purple-100/50 sticky top-0 z-20">
        <button onClick={leave} className="flex items-center gap-1 text-gray-400 hover:text-gray-600 transition text-sm font-medium">
          <ArrowLeft size={16} />
        </button>
        <div className="text-center">
          <div className="text-sm font-black text-violet-600 tracking-tight">KNIFFEL</div>
          <div className="text-[10px] text-gray-400 font-medium">{t.round} {Math.min(roundNumber, TOTAL_ROUNDS)}/{TOTAL_ROUNDS}</div>
        </div>
        <div className="flex items-center gap-1">
          <button onClick={() => setShowScoreboard(true)} className="p-1.5 rounded-xl hover:bg-violet-50 text-gray-400 hover:text-violet-500 transition">
            <Star size={16} />
          </button>
          <button onClick={() => setShowRules(true)} className="p-1.5 rounded-xl hover:bg-violet-50 text-gray-400 hover:text-violet-500 transition">
            <HelpCircle size={16} />
          </button>
          <button onClick={() => setLang(l => l === 'en' ? 'de' : 'en')}
            className="px-2.5 py-1 rounded-xl bg-gray-100 hover:bg-violet-100 text-xs font-bold text-gray-500 hover:text-violet-600 transition">
            {lang === 'en' ? '🇬🇧 EN' : '🇩🇪 DE'}
          </button>
          <button onClick={() => setShowChat(!showChat)} className="p-1.5 rounded-xl hover:bg-violet-50 text-gray-400 hover:text-violet-500 transition relative">
            <MessageSquare size={16} />
          </button>
        </div>
      </div>

      {/* ── Player Bar ── */}
      <div className="px-2 py-2 overflow-x-auto bg-white/40">
        <div className="flex gap-1.5 justify-center min-w-min mx-auto">
          {players.map((p, i) => {
            const col = PLAYER_COLORS[i % 6];
            const isCurrent = i === currentPlayerIndex;
            const isMe = p.id === myIdRef.current;
            const tot = calcTotals(p.scores).total;
            return (
              <motion.div key={p.id} animate={{ scale: isCurrent ? 1.05 : 1, y: isCurrent ? -2 : 0 }}
                className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-2xl transition-all ${isCurrent ? `bg-white shadow-md ring-2 ${col.ring}` : 'bg-white/60'}`}>
                <div className={`w-8 h-8 rounded-full ${col.light} flex items-center justify-center text-base`}>{p.avatar}</div>
                <div>
                  <div className="text-[11px] font-bold text-gray-700 leading-tight">{p.name}{isMe ? ` ${t.youSuffix}` : ''}</div>
                  <div className={`text-[10px] font-black ${col.text}`}>{tot} {t.pts}</div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* ── Turn Indicator ── */}
      <div className="text-center py-2">
        <AnimatePresence mode="wait">
          <motion.div key={currentPlayer?.id || ''} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }}>
            {isMyTurn ? (
              <span className="text-base font-black text-violet-600">{t.yourTurn}</span>
            ) : (
              <span className="text-sm font-medium text-gray-400">
                {currentPlayer?.avatar} {t.playerTurn.replace('{name}', currentPlayer?.name || '')}
              </span>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* ── Dice Area ── */}
      <div className="px-3 sm:px-4 pb-2">
        <div className="bg-white rounded-3xl shadow-lg shadow-purple-200/20 p-4 sm:p-5 max-w-md mx-auto">
          {/* Dice */}
          <div className="flex justify-center gap-2 sm:gap-3 mb-3">
            {dice.map((d, i) => {
              const held = heldDice[i];
              return (
                <motion.button
                  key={i}
                  onClick={() => canHold && sendToHost({ type: 'action', action: 'hold', index: i })}
                  disabled={!canHold}
                  animate={{
                    y: held ? -10 : 0,
                    scale: rollingAnim && !held ? [1, 0.7, 1.1, 1] : held ? 1.05 : 1,
                    rotate: rollingAnim && !held ? [0, 90 * (i + 1), 360] : 0,
                  }}
                  transition={{ type: rollingAnim ? 'tween' : 'spring', duration: rollingAnim ? 0.45 : 0.3, delay: rollingAnim ? i * 0.06 : 0 }}
                  whileHover={canHold ? { scale: 1.1 } : {}}
                  whileTap={canHold ? { scale: 0.9 } : {}}
                  className={`relative rounded-2xl transition-shadow ${canHold ? 'cursor-pointer' : 'cursor-default'} ${held ? 'ring-3 ring-violet-400 shadow-lg shadow-violet-200/40' : ''}`}
                >
                  <DiceFace value={d} size={window.innerWidth < 400 ? 48 : 56} />
                  {held && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                      className="absolute -bottom-4 left-1/2 -translate-x-1/2 text-[8px] font-black text-violet-500 bg-violet-100 px-1.5 py-0.5 rounded-full whitespace-nowrap">
                      {t.hold}
                    </motion.div>
                  )}
                </motion.button>
              );
            })}
          </div>

          {/* Roll Info + Button */}
          <div className="text-center mt-1">
            {hasRolled && (
              <div className="text-xs text-gray-400 mb-2 font-medium">
                {rollsLeft > 0 ? (rollsLeft === 1 ? t.rollsLeft1 : t.rollsLeftN.replace('{n}', rollsLeft)) : t.noRolls}
              </div>
            )}
            {canRoll ? (
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => { sendToHost({ type: 'action', action: 'roll' }); }}
                className="px-8 py-3 bg-gradient-to-r from-violet-500 to-purple-600 text-white font-bold rounded-2xl shadow-lg shadow-violet-300/30 transition-all hover:from-violet-400 hover:to-purple-500 text-base">
                🎲 {hasRolled ? t.rollAgain : t.roll}
              </motion.button>
            ) : !isMyTurn ? (
              <div className="text-xs text-gray-300 font-medium py-2">{t.waitingFor.replace('{name}', currentPlayer?.name || '')}</div>
            ) : rollsLeft === 0 ? (
              <div className="text-xs text-violet-500 font-bold py-1 animate-pulse">{t.pickCategory}</div>
            ) : null}
          </div>
        </div>
      </div>

      {/* ── Score Sheet ── */}
      <div className="flex-1 px-3 sm:px-4 pb-4 overflow-y-auto">
        <div className="bg-white rounded-3xl shadow-lg shadow-purple-200/20 p-3 sm:p-4 max-w-md mx-auto">
          {/* Upper Section */}
          <div className="mb-3">
            <div className="text-[10px] font-black text-violet-500 uppercase tracking-widest mb-1.5 px-1">{t.upperSection}</div>
            <div className="space-y-1">
              {UPPER_CATS.map(cat => {
                const scored = myScores[cat.id] !== null;
                const pot = potentials[cat.id];
                const canSelect = canScore && !scored;
                return (
                  <button key={cat.id} disabled={!canSelect}
                    onClick={() => {
                      if (!canSelect) return;
                      setScoreFlash(cat.id);
                      setTimeout(() => setScoreFlash(null), 600);
                      sendToHost({ type: 'action', action: 'score', category: cat.id });
                    }}
                    className={`w-full flex items-center py-2 px-3 rounded-xl transition-all text-left ${scored ? 'bg-gray-50' : canSelect ? (pot > 0 ? 'bg-violet-50 hover:bg-violet-100 hover:ring-2 hover:ring-violet-200 cursor-pointer' : 'bg-rose-50/50 hover:bg-rose-100/50 hover:ring-2 hover:ring-rose-200 cursor-pointer') : 'bg-white'} ${scoreFlash === cat.id ? 'ring-2 ring-emerald-400 bg-emerald-50' : ''}`}>
                    <span className="w-7 h-7 rounded-lg bg-gray-100 flex items-center justify-center text-xs font-black text-gray-600 mr-2.5">{cat.icon}</span>
                    <span className="flex-1 text-sm font-semibold text-gray-600">{cat.name[lang]}</span>
                    <span className={`text-sm font-bold min-w-[24px] text-right ${scored ? 'text-gray-800' : canSelect ? (pot > 0 ? 'text-violet-500' : 'text-rose-300') : 'text-gray-200'}`}>
                      {scored ? myScores[cat.id] : canSelect ? (pot ?? '—') : '—'}
                    </span>
                  </button>
                );
              })}
            </div>
            {/* Upper sum + bonus */}
            <div className="flex items-center mt-1.5 py-2 px-3 rounded-xl bg-violet-50/50">
              <span className="flex-1 text-xs font-bold text-violet-600">{t.sum} {myTotals.upperSum}/63</span>
              <span className={`text-xs font-black ${myTotals.bonus > 0 ? 'text-emerald-500' : 'text-gray-300'}`}>
                {myTotals.bonus > 0 ? t.bonus : t.remaining.replace('{n}', Math.max(0, 63 - myTotals.upperSum))}
              </span>
            </div>
          </div>

          {/* Lower Section */}
          <div className="mb-2">
            <div className="text-[10px] font-black text-orange-500 uppercase tracking-widest mb-1.5 px-1">{t.lowerSection}</div>
            <div className="space-y-1">
              {LOWER_CATS.map(cat => {
                const scored = myScores[cat.id] !== null;
                const pot = potentials[cat.id];
                const canSelect = canScore && !scored;
                const isKniffel = cat.id === 'kniffel';
                return (
                  <button key={cat.id} disabled={!canSelect}
                    onClick={() => {
                      if (!canSelect) return;
                      setScoreFlash(cat.id);
                      setTimeout(() => setScoreFlash(null), 600);
                      sendToHost({ type: 'action', action: 'score', category: cat.id });
                    }}
                    className={`w-full flex items-center py-2 px-3 rounded-xl transition-all text-left ${scored ? (isKniffel && myScores[cat.id] === 50 ? 'bg-amber-50 ring-1 ring-amber-200' : 'bg-gray-50') : canSelect ? (pot > 0 ? 'bg-violet-50 hover:bg-violet-100 hover:ring-2 hover:ring-violet-200 cursor-pointer' : 'bg-rose-50/50 hover:bg-rose-100/50 hover:ring-2 hover:ring-rose-200 cursor-pointer') : 'bg-white'} ${scoreFlash === cat.id ? 'ring-2 ring-emerald-400 bg-emerald-50' : ''}`}>
                    <span className="w-7 text-center text-sm mr-2.5">{cat.icon}</span>
                    <span className={`flex-1 text-sm font-semibold ${isKniffel && scored && myScores[cat.id] === 50 ? 'text-amber-700' : 'text-gray-600'}`}>{cat.name[lang]}</span>
                    <span className={`text-sm font-bold min-w-[24px] text-right ${scored ? (isKniffel && myScores[cat.id] === 50 ? 'text-amber-600' : 'text-gray-800') : canSelect ? (pot > 0 ? 'text-violet-500' : 'text-rose-300') : 'text-gray-200'}`}>
                      {scored ? myScores[cat.id] : canSelect ? (pot ?? '—') : '—'}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Total */}
          <div className="flex items-center py-3 px-4 bg-gradient-to-r from-violet-500 to-purple-600 rounded-2xl text-white">
            <span className="flex-1 text-sm font-bold">{t.total}</span>
            <span className="text-xl font-black">{myTotals.total}</span>
          </div>
        </div>
      </div>

      {/* ── Chat ── */}
      <AnimatePresence>
        {showChat && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }}
            className="border-t border-purple-100 bg-white/80 backdrop-blur-sm overflow-hidden">
            <div className="max-w-md mx-auto p-3">
              <div className="h-24 overflow-y-auto space-y-0.5 mb-2">
                {chatMessages.length === 0 && <div className="text-gray-300 text-xs text-center py-4">{t.noMessages}</div>}
                {chatMessages.map(msg => (
                  <div key={msg.id} className="text-xs">
                    <span className="mr-1">{msg.avatar}</span>
                    <span className="font-bold text-violet-600">{msg.from}:</span>
                    <span className="text-gray-600 ml-1">{msg.text}</span>
                  </div>
                ))}
              </div>
              <div className="flex gap-2">
                <input type="text" value={chatInput} onChange={e => setChatInput(e.target.value.slice(0, 100))}
                  onKeyDown={e => e.key === 'Enter' && doChat()} placeholder={t.message}
                  className="flex-1 px-3 py-2 bg-gray-50 border border-gray-100 rounded-xl text-gray-700 text-xs placeholder-gray-300 focus:outline-none focus:border-violet-300" />
                <button onClick={() => doChat()} className="px-3 py-2 bg-violet-100 rounded-xl text-violet-500 hover:bg-violet-200 transition">
                  <Send size={14} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
