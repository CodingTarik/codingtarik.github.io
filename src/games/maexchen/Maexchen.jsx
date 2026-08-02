import React, { useState, useRef, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowLeft, Copy, Check, Users, Play, Loader2,
  Heart, Volume2, VolumeX, MessageSquare, Eye,
  Star, Clock, X, HelpCircle, Send, Shield
} from 'lucide-react';
import Peer from 'peerjs';
import confetti from 'canvas-confetti';

// ═══════════════════════════════════════════════════
// CONSTANTS
// ═══════════════════════════════════════════════════

const AVATARS = ['🎲', '🃏', '🎯', '🦊', '🐺', '🦁', '🐯', '🦅', '🐉', '🤠', '🥷', '🧙', '👻', '💀', '🤖', '👽', '🦹', '🎪', '🎭', '🐙'];

const PLAYER_COLORS = [
  { bg: 'from-amber-400 to-orange-500', ring: 'ring-amber-400', text: 'text-amber-400', glow: 'shadow-amber-500/30' },
  { bg: 'from-cyan-400 to-blue-500', ring: 'ring-cyan-400', text: 'text-cyan-400', glow: 'shadow-cyan-500/30' },
  { bg: 'from-emerald-400 to-green-500', ring: 'ring-emerald-400', text: 'text-emerald-400', glow: 'shadow-emerald-500/30' },
  { bg: 'from-pink-400 to-rose-500', ring: 'ring-pink-400', text: 'text-pink-400', glow: 'shadow-pink-500/30' },
  { bg: 'from-violet-400 to-purple-500', ring: 'ring-violet-400', text: 'text-violet-400', glow: 'shadow-violet-500/30' },
  { bg: 'from-red-400 to-orange-500', ring: 'ring-red-400', text: 'text-red-400', glow: 'shadow-red-500/30' },
];

// Maexchen dice value ranking (lowest → highest)
const DICE_ORDER = [31, 32, 41, 42, 43, 51, 52, 53, 54, 61, 62, 63, 64, 65, 11, 22, 33, 44, 55, 66, 21];

const MAX_LIVES = 3;
const REVEAL_DELAY = 4500;
const MAX_PLAYERS = 6;

const getQuickChats = (lang) => lang === 'de'
  ? ['Lügner! 🤥', 'Glaub ich dir! 🤝', 'Niemals! 😂', 'Uff... 😰', 'GG! 🎉', 'Haha! 😈']
  : ['Liar! 🤥', 'I believe you! 🤝', 'No way! 😂', 'Oof... 😰', 'GG! 🎉', 'Haha! 😈'];

// ═══════════════════════════════════════════════════
// TRANSLATIONS
// ═══════════════════════════════════════════════════

const T = {
  en: {
    subtitle: 'The legendary bluffing dice game',
    yourName: 'Your Name',
    enterName: 'Enter name...',
    yourAvatar: 'Your Avatar',
    createRoom: 'Create Room',
    or: 'OR',
    join: 'Join',
    rules: 'Game Rules',
    rulesShort: 'Rules',
    backToTools: 'Back to Tools',
    waitingRoom: 'Waiting Room',
    roomCode: 'Room Code',
    shareCode: 'Share this code with your friends!',
    players: 'Players',
    you: 'YOU',
    waiting: 'Waiting...',
    minPlayers: 'At least 2 players needed',
    startGame: 'Start Game!',
    waitingForHost: 'Waiting for the host...',
    leave: 'Leave',
    round: 'Round',
    yourTurn: "It's your turn!",
    isPlaying: 'is playing...',
    toBeat: 'To beat:',
    roll: 'Roll!',
    rolling: 'Rolling...',
    waitingFor: 'Waiting for',
    yourDicePrivate: 'Your dice (only you can see them!)',
    value: 'Value:',
    claimHigherThan: 'Claim higher than',
    chooseValue: 'Choose your value:',
    maex: 'MÄX!',
    doubles: 'Pair',
    claimValue: 'claim!',
    selectValue: 'Select a value...',
    lookingAtDice: 'is looking at the dice...',
    claims: 'claims:',
    believe: 'Believe',
    reveal: 'Reveal!',
    deciding: 'is deciding...',
    reveals: 'reveals!',
    claimed: 'Claimed',
    actual: 'Actual',
    honest: "didn't lie!",
    caught: 'lied!',
    honestPrefix: 'Honest!',
    caughtPrefix: 'Caught!',
    losesLives: 'loses',
    life: 'life',
    lives: 'lives',
    gameOver: 'Game Over!',
    wins: 'wins!',
    thatsYou: "That's YOU! 🎉",
    finalStanding: 'Final standing after',
    rounds: 'rounds',
    playAgain: 'Play Again!',
    backToMenu: 'Back to Menu',
    eliminated: "You're out. Watch the others! 👀",
    noMessages: 'No messages yet...',
    message: 'Message...',
    enterNameError: 'Please enter a name!',
    enterCodeError: 'Please enter a room code!',
    connectionError: 'Connection error. Please try again.',
    connectionFailed: 'Connection failed. Is the room code correct?',
    hostLost: 'Connection to host lost.',
    kicked: 'You were removed from the game.',
    // Rules modal
    rulesTitle: 'Game Rules',
    rulesGoalTitle: 'Goal',
    rulesGoalText: `Be the last player alive! Everyone starts with ${MAX_LIVES} hearts.`,
    rulesFlowTitle: 'How it works',
    rulesFlow1: 'You roll 2 dice (only you can see them)',
    rulesFlow2: 'You claim a value (AT LEAST as high as the previous one)',
    rulesFlow3: 'You may lie and claim higher!',
    rulesFlow4: 'The next player decides:',
    rulesFlow4Believe: 'Believe',
    rulesFlow4Reveal: 'Reveal',
    rulesRankingTitle: 'Value Ranking',
    rulesRankingNote: 'Higher digit always first. Pairs beat normal rolls. Mäxchen is the highest value!',
    rulesRevealTitle: 'Reveal',
    rulesReveal1: 'Dice result ≥ Claim → Revealer loses 1 life',
    rulesReveal2: 'Dice result < Claim → Liar loses 1 life',
    rulesRevealMaex: 'With Mäxchen: Loser loses 2 lives!',
  },
  de: {
    subtitle: 'Das legendäre Bluff-Würfelspiel',
    yourName: 'Dein Name',
    enterName: 'Name eingeben...',
    yourAvatar: 'Dein Avatar',
    createRoom: 'Raum erstellen',
    or: 'ODER',
    join: 'Beitreten',
    rules: 'Spielregeln',
    rulesShort: 'Regeln',
    backToTools: 'Zurück zu Tools',
    waitingRoom: 'Warteraum',
    roomCode: 'Raumcode',
    shareCode: 'Teile diesen Code mit deinen Freunden!',
    players: 'Spieler',
    you: 'DU',
    waiting: 'Warte...',
    minPlayers: 'Mindestens 2 Spieler benötigt',
    startGame: 'Spiel starten!',
    waitingForHost: 'Warte auf den Host...',
    leave: 'Verlassen',
    round: 'Runde',
    yourTurn: 'Du bist dran!',
    isPlaying: 'ist dran...',
    toBeat: 'Zu schlagen:',
    roll: 'Würfeln!',
    rolling: 'Würfeln...',
    waitingFor: 'Warte auf',
    yourDicePrivate: 'Deine Würfel (nur du siehst sie!)',
    value: 'Wert:',
    claimHigherThan: 'Behaupte höher als',
    chooseValue: 'Wähle deinen Wert:',
    maex: 'MÄX!',
    doubles: 'Pasch',
    claimValue: 'behaupten!',
    selectValue: 'Wert auswählen...',
    lookingAtDice: 'schaut sich die Würfel an...',
    claims: 'behauptet:',
    believe: 'Glauben',
    reveal: 'Aufdecken!',
    deciding: 'entscheidet...',
    reveals: 'deckt auf!',
    claimed: 'Behauptet',
    actual: 'Tatsächlich',
    honest: 'hat nicht gelogen!',
    caught: 'hat gelogen!',
    honestPrefix: 'Ehrlich!',
    caughtPrefix: 'Erwischt!',
    losesLives: 'verliert',
    life: 'Leben',
    lives: 'Leben',
    gameOver: 'Spiel vorbei!',
    wins: 'gewinnt!',
    thatsYou: 'Das bist DU! 🎉',
    finalStanding: 'Endstand nach',
    rounds: 'Runden',
    playAgain: 'Nochmal spielen!',
    backToMenu: 'Zurück zum Menü',
    eliminated: 'Du bist ausgeschieden. Schau den anderen zu! 👀',
    noMessages: 'Noch keine Nachrichten...',
    message: 'Nachricht...',
    enterNameError: 'Bitte gib einen Namen ein!',
    enterCodeError: 'Bitte gib einen Raumcode ein!',
    connectionError: 'Verbindungsfehler. Bitte versuche es erneut.',
    connectionFailed: 'Verbindung fehlgeschlagen. Ist der Raumcode korrekt?',
    hostLost: 'Verbindung zum Host verloren.',
    kicked: 'Du wurdest aus dem Spiel entfernt.',
    // Rules modal
    rulesTitle: 'Spielregeln',
    rulesGoalTitle: 'Ziel',
    rulesGoalText: `Sei der letzte Spieler mit Leben! Alle starten mit ${MAX_LIVES} Herzen.`,
    rulesFlowTitle: 'Ablauf',
    rulesFlow1: 'Du wirfst 2 Würfel (nur du siehst sie)',
    rulesFlow2: 'Du behauptest einen Wert (MINDESTENS so hoch wie der vorherige)',
    rulesFlow3: 'Du darfst lügen und höher behaupten!',
    rulesFlow4: 'Der nächste Spieler entscheidet:',
    rulesFlow4Believe: 'Glauben',
    rulesFlow4Reveal: 'Aufdecken',
    rulesRankingTitle: 'Werte-Rangfolge',
    rulesRankingNote: 'Höhere Ziffer immer zuerst. Pasche schlagen normale Würfe. Mäxchen ist der höchste Wert!',
    rulesRevealTitle: 'Aufdecken',
    rulesReveal1: 'Würfelergebnis ≥ Behauptung → Aufdeckender verliert 1 Leben',
    rulesReveal2: 'Würfelergebnis < Behauptung → Lügner verliert 1 Leben',
    rulesRevealMaex: 'Bei Mäxchen: Verlierer verliert 2 Leben!',
  },
};

// ═══════════════════════════════════════════════════
// UTILITY FUNCTIONS
// ═══════════════════════════════════════════════════

function getDiceRank(value) {
  return DICE_ORDER.indexOf(value);
}

function computeDiceValue(d1, d2) {
  if ((d1 === 2 && d2 === 1) || (d1 === 1 && d2 === 2)) return 21;
  return Math.max(d1, d2) * 10 + Math.min(d1, d2);
}

function diceToDigits(value) {
  if (value === 21) return [2, 1];
  return [Math.floor(value / 10), value % 10];
}

function isDouble(value) {
  if (value === 21) return false;
  const [a, b] = diceToDigits(value);
  return a === b;
}

function formatDiceLabel(value, lang) {
  if (value === 21) return 'MÄXCHEN!';
  if (isDouble(value)) {
    const names = lang === 'de'
      ? { 11: 'Einser', 22: 'Zweier', 33: 'Dreier', 44: 'Vierer', 55: 'Fünfer', 66: 'Sechser' }
      : { 11: 'Ones', 22: 'Twos', 33: 'Threes', 44: 'Fours', 55: 'Fives', 66: 'Sixes' };
    return `${names[value]}${lang === 'de' ? '-Pasch' : ' Pair'}`;
  }
  return String(value);
}

function generateRoomCode() {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  let code = '';
  for (let i = 0; i < 5; i++) code += chars[Math.floor(Math.random() * chars.length)];
  return code;
}

function getNextAliveIndex(players, currentIndex) {
  const n = players.length;
  let next = (currentIndex + 1) % n;
  let safety = 0;
  while (!players[next].isAlive && safety < n) {
    next = (next + 1) % n;
    safety++;
  }
  return next;
}

// ═══════════════════════════════════════════════════
// SUB-COMPONENTS
// ═══════════════════════════════════════════════════

const PIP_POS = {
  tl: { top: '20%', left: '20%' }, tr: { top: '20%', left: '80%' },
  ml: { top: '50%', left: '20%' }, mc: { top: '50%', left: '50%' }, mr: { top: '50%', left: '80%' },
  bl: { top: '80%', left: '20%' }, br: { top: '80%', left: '80%' },
};

const PIP_LAYOUTS = {
  1: ['mc'], 2: ['tr', 'bl'], 3: ['tr', 'mc', 'bl'],
  4: ['tl', 'tr', 'bl', 'br'], 5: ['tl', 'tr', 'mc', 'bl', 'br'],
  6: ['tl', 'tr', 'ml', 'mr', 'bl', 'br'],
};

function DiceFace({ value, size = 48, hidden = false, className = '', animate = false }) {
  const pipSize = Math.max(size * 0.16, 3);

  if (hidden) {
    return (
      <motion.div
        animate={animate ? { rotate: [0, 10, -10, 5, -5, 0] } : {}}
        transition={{ duration: 0.5, repeat: animate ? Infinity : 0 }}
        className={`rounded-xl flex items-center justify-center bg-gradient-to-br from-red-500 to-red-700 shadow-lg shadow-red-500/20 ${className}`}
        style={{ width: size, height: size, minWidth: size }}
      >
        <span className="text-white font-black" style={{ fontSize: size * 0.4 }}>?</span>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={animate ? { rotateY: 180, scale: 0.3 } : false}
      animate={{ rotateY: 0, scale: 1 }}
      transition={{ type: 'spring', stiffness: 200, damping: 15 }}
      className={`rounded-xl relative bg-white shadow-lg shadow-black/20 ${className}`}
      style={{ width: size, height: size, minWidth: size }}
    >
      {PIP_LAYOUTS[value]?.map((pos, i) => (
        <div
          key={i}
          className="absolute bg-gray-900 rounded-full"
          style={{
            width: pipSize, height: pipSize,
            ...PIP_POS[pos],
            transform: 'translate(-50%, -50%)',
          }}
        />
      ))}
    </motion.div>
  );
}

function Hearts({ lives, maxLives = MAX_LIVES, size = 14 }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: maxLives }).map((_, i) => (
        <motion.div key={i} animate={i >= lives ? { scale: [1, 0.5], opacity: 0.3 } : { scale: 1, opacity: 1 }}>
          <Heart
            size={size}
            className={i < lives ? 'text-red-500 fill-red-500' : 'text-gray-700 fill-gray-700'}
          />
        </motion.div>
      ))}
    </div>
  );
}

function PlayerCard({ player, colorIndex, isCurrentTurn, isMe, size = 'normal', youLabel = 'YOU' }) {
  const color = PLAYER_COLORS[colorIndex % PLAYER_COLORS.length];
  const isSmall = size === 'small';

  return (
    <motion.div
      layout
      animate={{
        scale: isCurrentTurn ? 1.08 : 1,
        y: isCurrentTurn ? -4 : 0,
      }}
      className={`
        flex flex-col items-center ${isSmall ? 'p-1.5' : 'p-2 sm:p-3'} rounded-2xl transition-all relative
        ${isCurrentTurn ? `ring-2 ${color.ring} bg-white/10 shadow-lg ${color.glow}` : 'bg-white/5'}
        ${!player.isAlive ? 'opacity-30 grayscale' : ''}
      `}
    >
      {isCurrentTurn && (
        <motion.div
          className="absolute -top-2 left-1/2 -translate-x-1/2"
          animate={{ y: [0, -3, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${color.bg}`} />
        </motion.div>
      )}
      <div className={`${isSmall ? 'text-xl' : 'text-2xl sm:text-3xl'} mb-0.5`}>{player.avatar}</div>
      <div className={`${isSmall ? 'text-[10px]' : 'text-xs'} font-bold text-white truncate ${isSmall ? 'max-w-12' : 'max-w-16'}`}>
        {player.name}{isMe ? '' : ''}
      </div>
      {isMe && <div className="text-[9px] text-amber-400 font-semibold">{youLabel}</div>}
      <div className="mt-0.5">
        <Hearts lives={player.lives} size={isSmall ? 10 : 12} />
      </div>
    </motion.div>
  );
}

function LanguageToggle({ lang, setLang }) {
  return (
    <button
      onClick={() => setLang(l => l === 'en' ? 'de' : 'en')}
      className="px-2 py-1 rounded-lg bg-white/10 hover:bg-white/20 text-xs font-bold text-gray-300 transition"
    >
      {lang === 'en' ? '🇬🇧 EN' : '🇩🇪 DE'}
    </button>
  );
}

function RulesModal({ onClose, t }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.8, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.8, y: 20 }}
        className="bg-gradient-to-br from-indigo-900 to-purple-900 rounded-2xl p-5 sm:p-6 max-w-lg w-full max-h-[80vh] overflow-y-auto border border-white/10 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-black text-white">{t.rulesTitle}</h2>
          <button onClick={onClose} className="p-1 rounded-lg hover:bg-white/10"><X size={20} className="text-white" /></button>
        </div>
        <div className="space-y-3 text-sm text-gray-200">
          <div className="bg-white/5 rounded-xl p-3">
            <h3 className="font-bold text-amber-400 mb-1">{t.rulesGoalTitle}</h3>
            <p>{t.rulesGoalText}</p>
          </div>
          <div className="bg-white/5 rounded-xl p-3">
            <h3 className="font-bold text-amber-400 mb-1">{t.rulesFlowTitle}</h3>
            <ol className="list-decimal list-inside space-y-1">
              <li>{t.rulesFlow1}</li>
              <li>{t.rulesFlow2}</li>
              <li>{t.rulesFlow3}</li>
              <li>{t.rulesFlow4} <b>{t.rulesFlow4Believe}</b> / <b>{t.rulesFlow4Reveal}</b></li>
            </ol>
          </div>
          <div className="bg-white/5 rounded-xl p-3">
            <h3 className="font-bold text-amber-400 mb-1">{t.rulesRankingTitle}</h3>
            <p className="mb-1">31 → 32 → 41 → ... → 65 → 11 → 22 → ... → 66 → <span className="text-yellow-400 font-bold">21 (MÄXCHEN!)</span></p>
            <p className="text-xs text-gray-400">{t.rulesRankingNote}</p>
          </div>
          <div className="bg-white/5 rounded-xl p-3">
            <h3 className="font-bold text-red-400 mb-1">{t.rulesRevealTitle}</h3>
            <ul className="space-y-1">
              <li>{t.rulesReveal1}</li>
              <li>{t.rulesReveal2}</li>
              <li className="text-yellow-300">{t.rulesRevealMaex}</li>
            </ul>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

// ═══════════════════════════════════════════════════
// MAIN COMPONENT
// ═══════════════════════════════════════════════════

export default function Maexchen() {
  // --- Language ---
  const [lang, setLang] = useState('en');
  const t = T[lang];

  // --- UI State ---
  const [screen, setScreen] = useState('menu'); // menu, lobby, game, gameover
  const [myName, setMyName] = useState('');
  const [myAvatar, setMyAvatar] = useState(AVATARS[Math.floor(Math.random() * AVATARS.length)]);
  const [roomCode, setRoomCode] = useState('');
  const [joinCode, setJoinCode] = useState('');
  const [isHost, setIsHost] = useState(false);
  const [connectionStatus, setConnectionStatus] = useState('disconnected');
  const [error, setError] = useState('');
  const [copied, setCopied] = useState(false);
  const [showRules, setShowRules] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(true);

  // --- Game State ---
  const [gamePhase, setGamePhase] = useState('waiting');
  const [players, setPlayers] = useState([]);
  const [currentPlayerIndex, setCurrentPlayerIndex] = useState(0);
  const [previousClaim, setPreviousClaim] = useState(null);
  const [previousClaimerName, setPreviousClaimerName] = useState(null);
  const [myDice, setMyDice] = useState(null);
  const [myDiceValue, setMyDiceValue] = useState(null);
  const [selectedClaim, setSelectedClaim] = useState(null);
  const [revealResult, setRevealResult] = useState(null);
  const [round, setRound] = useState(1);
  const [winner, setWinner] = useState(null);
  const [isRolling, setIsRolling] = useState(false);
  const [chatMessages, setChatMessages] = useState([]);
  const [chatInput, setChatInput] = useState('');
  const [showChat, setShowChat] = useState(false);

  // --- Refs ---
  const peerRef = useRef(null);
  const connectionsRef = useRef([]);
  const hostConnRef = useRef(null);
  const myIdRef = useRef('');
  const revealTimeoutRef = useRef(null);
  const gameRef = useRef({
    phase: 'waiting',
    players: [],
    currentPlayerIndex: 0,
    previousClaim: null,
    previousClaimerName: null,
    actualDice: null,
    round: 1,
    revealResult: null,
  });

  // --- Cleanup ---
  useEffect(() => {
    return () => {
      if (peerRef.current) peerRef.current.destroy();
      if (revealTimeoutRef.current) clearTimeout(revealTimeoutRef.current);
    };
  }, []);

  // ═══════════════════════════════════════════════════
  // NETWORKING
  // ═══════════════════════════════════════════════════

  const broadcastState = useCallback((extraType) => {
    const gs = gameRef.current;
    const msg = {
      type: extraType || 'game-state',
      phase: gs.phase,
      players: gs.players.map(p => ({ ...p })),
      currentPlayerIndex: gs.currentPlayerIndex,
      previousClaim: gs.previousClaim,
      previousClaimerName: gs.previousClaimerName,
      round: gs.round,
      revealResult: gs.revealResult,
    };
    connectionsRef.current.forEach(conn => {
      try { conn.send(msg); } catch (e) { /* ignore */ }
    });
    // Sync local state
    setGamePhase(gs.phase);
    setPlayers(gs.players.map(p => ({ ...p })));
    setCurrentPlayerIndex(gs.currentPlayerIndex);
    setPreviousClaim(gs.previousClaim);
    setPreviousClaimerName(gs.previousClaimerName);
    setRound(gs.round);
    setRevealResult(gs.revealResult);
  }, []);

  const sendToHost = useCallback((data) => {
    if (isHost) {
      handlePlayerAction(myIdRef.current, data);
    } else if (hostConnRef.current) {
      try { hostConnRef.current.send(data); } catch (e) { /* ignore */ }
    }
  }, [isHost]);

  const sendPrivateToPlayer = useCallback((playerId, data) => {
    if (playerId === myIdRef.current) {
      // It's me (host)
      if (data.type === 'your-dice') {
        setMyDice([data.d1, data.d2]);
        setMyDiceValue(data.value);
      }
    } else {
      const conn = connectionsRef.current.find(c => c.peer === playerId);
      if (conn) {
        try { conn.send(data); } catch (e) { /* ignore */ }
      }
    }
  }, []);

  const broadcastChat = useCallback((from, avatar, text) => {
    const msg = { type: 'chat-message', from, avatar, text, id: Date.now() };
    connectionsRef.current.forEach(conn => {
      try { conn.send(msg); } catch (e) { /* ignore */ }
    });
    setChatMessages(prev => [...prev.slice(-50), msg]);
  }, []);

  // --- Apply state from host (client side) ---
  const applyGameState = useCallback((data) => {
    setGamePhase(data.phase);
    setPlayers(data.players);
    setCurrentPlayerIndex(data.currentPlayerIndex);
    setPreviousClaim(data.previousClaim);
    setPreviousClaimerName(data.previousClaimerName);
    setRound(data.round);
    setRevealResult(data.revealResult);

    if (data.phase === 'gameover') {
      const aliveP = data.players.find(p => p.isAlive);
      setWinner(aliveP || null);
      setScreen('gameover');
      if (aliveP?.id === myIdRef.current) {
        confetti({ particleCount: 200, spread: 100, origin: { y: 0.6 } });
      }
    } else if (data.phase !== 'claiming' || data.players[data.currentPlayerIndex]?.id !== myIdRef.current) {
      // Clear my dice if not my claiming turn
      if (data.phase !== 'claiming' && data.phase !== 'peeking') {
        setMyDice(null);
        setMyDiceValue(null);
        setSelectedClaim(null);
      }
    }
  }, []);

  // --- Handle messages from host (client side) ---
  const handleHostMessage = useCallback((data) => {
    if (data.type === 'game-state' || data.type === 'lobby-update') {
      applyGameState(data);
      if (data.type === 'lobby-update' && screen !== 'game' && screen !== 'gameover') {
        setPlayers(data.players);
      }
      if (data.phase && data.phase !== 'waiting') {
        setScreen('game');
      }
    } else if (data.type === 'your-dice') {
      setMyDice([data.d1, data.d2]);
      setMyDiceValue(data.value);
      setIsRolling(false);
    } else if (data.type === 'chat-message') {
      setChatMessages(prev => [...prev.slice(-50), data]);
    } else if (data.type === 'kicked') {
      setError(t.kicked);
      setScreen('menu');
      if (peerRef.current) peerRef.current.destroy();
    }
  }, [screen, applyGameState, t]);

  // --- Handle player actions (host side) ---
  const handlePlayerAction = useCallback((playerId, data) => {
    const gs = gameRef.current;

    if (data.type === 'chat') {
      const player = gs.players.find(p => p.id === playerId);
      if (player) broadcastChat(player.name, player.avatar, data.text);
      return;
    }

    if (data.type !== 'action') return;

    const currentPlayer = gs.players[gs.currentPlayerIndex];
    if (!currentPlayer) return;

    switch (data.action) {
      case 'roll': {
        if (gs.phase !== 'rolling' || currentPlayer.id !== playerId) return;
        const d1 = Math.floor(Math.random() * 6) + 1;
        const d2 = Math.floor(Math.random() * 6) + 1;
        const value = computeDiceValue(d1, d2);
        gs.actualDice = { d1, d2, value };
        gs.phase = 'claiming';
        sendPrivateToPlayer(playerId, { type: 'your-dice', d1, d2, value });
        broadcastState();
        break;
      }

      case 'claim': {
        if (gs.phase !== 'claiming' || currentPlayer.id !== playerId) return;
        const claimValue = data.value;
        if (!DICE_ORDER.includes(claimValue)) return;
        // Validate: must be higher than previous claim
        if (gs.previousClaim !== null && getDiceRank(claimValue) <= getDiceRank(gs.previousClaim)) return;
        gs.previousClaim = claimValue;
        gs.previousClaimerName = currentPlayer.name;
        gs.previousClaimerId = currentPlayer.id;
        gs.currentPlayerIndex = getNextAliveIndex(gs.players, gs.currentPlayerIndex);
        gs.phase = 'deciding';
        broadcastState();
        break;
      }

      case 'believe': {
        if (gs.phase !== 'deciding' || currentPlayer.id !== playerId) return;
        // Reset minimum if previous claim was Mäxchen
        if (gs.previousClaim === 21) {
          gs.previousClaim = null;
          gs.previousClaimerName = null;
        }
        gs.actualDice = null;
        gs.phase = 'rolling';
        broadcastState();
        break;
      }

      case 'reveal': {
        if (gs.phase !== 'deciding' || currentPlayer.id !== playerId) return;
        const claimed = gs.previousClaim;
        const actual = gs.actualDice?.value;
        if (actual === undefined) return;
        const wasMaexchen = claimed === 21;
        const livesLost = wasMaexchen ? 2 : 1;

        let loserId;
        if (getDiceRank(actual) >= getDiceRank(claimed)) {
          // Dice were good enough → revealer (current player) loses
          loserId = playerId;
        } else {
          // Dice were worse → claimer loses
          loserId = gs.previousClaimerId;
        }

        const loser = gs.players.find(p => p.id === loserId);
        if (loser) {
          loser.lives = Math.max(0, loser.lives - livesLost);
          if (loser.lives <= 0) loser.isAlive = false;
        }

        gs.revealResult = {
          actualDice: gs.actualDice,
          claimed,
          loserId,
          loserName: loser?.name,
          livesLost,
          revealerName: currentPlayer.name,
          claimerName: gs.previousClaimerName,
        };
        gs.phase = 'revealing';
        broadcastState();

        // After delay, advance
        revealTimeoutRef.current = setTimeout(() => {
          const alivePlayers = gs.players.filter(p => p.isAlive);
          if (alivePlayers.length <= 1) {
            gs.phase = 'gameover';
            gs.revealResult = null;
            broadcastState();
          } else {
            const loserIndex = gs.players.findIndex(p => p.id === loserId);
            gs.currentPlayerIndex = loser && loser.isAlive
              ? loserIndex
              : getNextAliveIndex(gs.players, loserIndex);
            gs.previousClaim = null;
            gs.previousClaimerName = null;
            gs.previousClaimerId = null;
            gs.actualDice = null;
            gs.revealResult = null;
            gs.round++;
            gs.phase = 'rolling';
            broadcastState();
          }
        }, REVEAL_DELAY);
        break;
      }
    }
  }, [broadcastState, sendPrivateToPlayer, broadcastChat]);

  // --- Create Room (Host) ---
  const createRoom = useCallback(() => {
    if (!myName.trim()) { setError(t.enterNameError); return; }
    setError('');
    setConnectionStatus('connecting');
    const code = generateRoomCode();

    const peer = new Peer('maex-' + code, {
      debug: 0,
      config: { iceServers: [{ urls: 'stun:stun.l.google.com:19302' }] }
    });

    peer.on('open', (id) => {
      peerRef.current = peer;
      myIdRef.current = id;
      setRoomCode(code);
      setIsHost(true);
      setConnectionStatus('connected');

      const me = { id, name: myName.trim(), avatar: myAvatar, lives: MAX_LIVES, isAlive: true };
      gameRef.current.players = [me];
      setPlayers([me]);
      setScreen('lobby');
    });

    peer.on('connection', (conn) => {
      conn.on('open', () => {
        // Wait for join message
      });
      conn.on('data', (data) => {
        if (data.type === 'join') {
          if (gameRef.current.players.length >= MAX_PLAYERS) {
            conn.send({ type: 'kicked' });
            return;
          }
          const newPlayer = {
            id: conn.peer,
            name: data.name,
            avatar: data.avatar,
            lives: MAX_LIVES,
            isAlive: true,
          };
          gameRef.current.players.push(newPlayer);
          connectionsRef.current.push(conn);
          broadcastState('lobby-update');
        } else {
          handlePlayerAction(conn.peer, data);
        }
      });
      conn.on('close', () => {
        connectionsRef.current = connectionsRef.current.filter(c => c !== conn);
        const gs = gameRef.current;
        const player = gs.players.find(p => p.id === conn.peer);
        if (player) {
          player.isAlive = false;
          player.lives = 0;
          if (gs.phase !== 'waiting') {
            // If it was their turn, advance
            if (gs.players[gs.currentPlayerIndex]?.id === conn.peer) {
              gs.currentPlayerIndex = getNextAliveIndex(gs.players, gs.currentPlayerIndex);
              const alivePlayers = gs.players.filter(p => p.isAlive);
              if (alivePlayers.length <= 1) {
                gs.phase = 'gameover';
              } else {
                gs.phase = 'rolling';
                gs.previousClaim = null;
              }
            }
            broadcastState();
          } else {
            gs.players = gs.players.filter(p => p.id !== conn.peer);
            broadcastState('lobby-update');
          }
        }
      });
    });

    peer.on('error', (err) => {
      console.error('Peer error:', err);
      setConnectionStatus('error');
      setError(t.connectionError);
    });
  }, [myName, myAvatar, broadcastState, handlePlayerAction, t]);

  // --- Join Room (Client) ---
  const joinRoom = useCallback(() => {
    if (!myName.trim()) { setError(t.enterNameError); return; }
    if (!joinCode.trim()) { setError(t.enterCodeError); return; }
    setError('');
    setConnectionStatus('connecting');

    const peer = new Peer(undefined, {
      debug: 0,
      config: { iceServers: [{ urls: 'stun:stun.l.google.com:19302' }] }
    });

    peer.on('open', (id) => {
      peerRef.current = peer;
      myIdRef.current = id;
      setIsHost(false);

      const conn = peer.connect('maex-' + joinCode.trim().toUpperCase());
      let connected = false;

      const timeout = setTimeout(() => {
        if (!connected) {
          setError(t.connectionFailed);
          setConnectionStatus('error');
          peer.destroy();
        }
      }, 10000);

      conn.on('open', () => {
        connected = true;
        clearTimeout(timeout);
        hostConnRef.current = conn;
        setRoomCode(joinCode.trim().toUpperCase());
        setConnectionStatus('connected');
        setScreen('lobby');
        conn.send({ type: 'join', name: myName.trim(), avatar: myAvatar });
      });

      conn.on('data', (data) => {
        handleHostMessage(data);
      });

      conn.on('close', () => {
        setError(t.hostLost);
        setScreen('menu');
        setConnectionStatus('disconnected');
      });
    });

    peer.on('error', (err) => {
      console.error('Peer error:', err);
      setConnectionStatus('error');
      setError(t.connectionError);
    });
  }, [myName, myAvatar, joinCode, handleHostMessage, t]);

  // --- Start Game (Host only) ---
  const startGame = useCallback(() => {
    if (!isHost || gameRef.current.players.length < 2) return;
    const gs = gameRef.current;
    // Shuffle player order
    for (let i = gs.players.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [gs.players[i], gs.players[j]] = [gs.players[j], gs.players[i]];
    }
    gs.currentPlayerIndex = 0;
    gs.previousClaim = null;
    gs.previousClaimerName = null;
    gs.round = 1;
    gs.phase = 'rolling';
    gs.revealResult = null;
    broadcastState();
    setScreen('game');
  }, [isHost, broadcastState]);

  // --- Player Actions ---
  const doRoll = useCallback(() => {
    setIsRolling(true);
    setSelectedClaim(null);
    setTimeout(() => {
      sendToHost({ type: 'action', action: 'roll' });
    }, 600);
  }, [sendToHost]);

  const doClaim = useCallback(() => {
    if (selectedClaim === null) return;
    sendToHost({ type: 'action', action: 'claim', value: selectedClaim });
    setMyDice(null);
    setMyDiceValue(null);
    setSelectedClaim(null);
  }, [selectedClaim, sendToHost]);

  const doBelieve = useCallback(() => {
    sendToHost({ type: 'action', action: 'believe' });
  }, [sendToHost]);

  const doReveal = useCallback(() => {
    sendToHost({ type: 'action', action: 'reveal' });
  }, [sendToHost]);

  const doChat = useCallback((text) => {
    const msg = text || chatInput.trim();
    if (!msg) return;
    sendToHost({ type: 'chat', text: msg });
    if (isHost) {
      broadcastChat(myName, myAvatar, msg);
    }
    setChatInput('');
  }, [chatInput, sendToHost, isHost, myName, myAvatar, broadcastChat]);

  const copyRoomCode = useCallback(() => {
    navigator.clipboard.writeText(roomCode).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }, [roomCode]);

  const shareLink = useCallback(() => {
    const url = `${window.location.origin}/games/maexchen/${roomCode}`;
    if (navigator.share) {
      navigator.share({ title: 'Mäxchen', text: 'Komm in meine Mäxchen-Runde!', url }).catch(() => {});
    } else {
      navigator.clipboard.writeText(url).then(() => { setCopied(true); setTimeout(() => setCopied(false), 2000); });
    }
  }, [roomCode]);

  // Auto-detect join code from URL
  useEffect(() => {
    const m = window.location.pathname.match(/\/games\/maexchen\/([A-Z0-9]+)/i);
    if (m) setJoinCode(m[1].toUpperCase());
  }, []);

  const leaveGame = useCallback(() => {
    if (peerRef.current) peerRef.current.destroy();
    peerRef.current = null;
    connectionsRef.current = [];
    hostConnRef.current = null;
    gameRef.current = { phase: 'waiting', players: [], currentPlayerIndex: 0, previousClaim: null, previousClaimerName: null, actualDice: null, round: 1, revealResult: null };
    setScreen('menu');
    setConnectionStatus('disconnected');
    setPlayers([]);
    setGamePhase('waiting');
    setMyDice(null);
    setMyDiceValue(null);
    setSelectedClaim(null);
    setRevealResult(null);
    setRound(1);
    setWinner(null);
    setError('');
    setChatMessages([]);
  }, []);

  const restartGame = useCallback(() => {
    if (!isHost) return;
    const gs = gameRef.current;
    gs.players.forEach(p => { p.lives = MAX_LIVES; p.isAlive = true; });
    gs.currentPlayerIndex = 0;
    gs.previousClaim = null;
    gs.previousClaimerName = null;
    gs.round = 1;
    gs.phase = 'rolling';
    gs.revealResult = null;
    gs.actualDice = null;
    setWinner(null);
    setScreen('game');
    broadcastState();
  }, [isHost, broadcastState]);

  // ═══════════════════════════════════════════════════
  // DERIVED STATE
  // ═══════════════════════════════════════════════════

  const myPlayer = players.find(p => p.id === myIdRef.current);
  const currentPlayer = players[currentPlayerIndex];
  const isMyTurn = currentPlayer?.id === myIdRef.current;
  const amAlive = myPlayer?.isAlive ?? true;

  // Valid claims for the picker
  const validClaims = previousClaim !== null
    ? DICE_ORDER.filter(v => getDiceRank(v) > getDiceRank(previousClaim))
    : [...DICE_ORDER];

  // ═══════════════════════════════════════════════════
  // RENDER: MENU
  // ═══════════════════════════════════════════════════

  if (screen === 'menu') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 flex items-center justify-center p-4">
        <AnimatePresence>{showRules && <RulesModal onClose={() => setShowRules(false)} t={t} />}</AnimatePresence>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-md"
        >
          {/* Header */}
          <div className="text-center mb-6">
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
              className="text-6xl mb-3"
            >
              🎲
            </motion.div>
            <h1 className="text-4xl sm:text-5xl font-black bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-400 bg-clip-text text-transparent">
              MÄXCHEN
            </h1>
            <p className="text-gray-400 text-sm mt-1">{t.subtitle}</p>
          </div>

          {/* Card */}
          <div className="bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 p-5 sm:p-6 space-y-4">
            {/* Name Input */}
            <div>
              <label className="text-xs font-semibold text-gray-400 mb-1 block">{t.yourName}</label>
              <input
                type="text"
                value={myName}
                onChange={(e) => setMyName(e.target.value.slice(0, 12))}
                placeholder={t.enterName}
                maxLength={12}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-amber-400/50 transition"
              />
            </div>

            {/* Avatar Picker */}
            <div>
              <label className="text-xs font-semibold text-gray-400 mb-1 block">{t.yourAvatar}</label>
              <div className="flex flex-wrap gap-2">
                {AVATARS.map((av) => (
                  <button
                    key={av}
                    onClick={() => setMyAvatar(av)}
                    className={`w-10 h-10 rounded-xl flex items-center justify-center text-xl transition-all ${
                      myAvatar === av ? 'bg-amber-500/30 ring-2 ring-amber-400 scale-110' : 'bg-white/5 hover:bg-white/10'
                    }`}
                  >
                    {av}
                  </button>
                ))}
              </div>
            </div>

            {/* Error */}
            <AnimatePresence>
              {error && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="bg-red-500/20 border border-red-500/30 rounded-xl px-4 py-2 text-red-300 text-sm"
                >
                  {error}
                </motion.div>
              )}
            </AnimatePresence>

            {/* Buttons */}
            <div className="space-y-3 pt-2">
              <button
                onClick={createRoom}
                disabled={connectionStatus === 'connecting'}
                className="w-full py-3.5 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-white font-bold rounded-xl transition-all shadow-lg shadow-amber-500/20 hover:shadow-amber-500/40 disabled:opacity-50 flex items-center justify-center gap-2"
              >
                {connectionStatus === 'connecting' ? <Loader2 size={18} className="animate-spin" /> : <Play size={18} />}
                {t.createRoom}
              </button>

              <div className="flex items-center gap-2">
                <div className="flex-1 h-px bg-white/10" />
                <span className="text-gray-500 text-xs">{t.or}</span>
                <div className="flex-1 h-px bg-white/10" />
              </div>

              <div className="flex gap-2">
                <input
                  type="text"
                  value={joinCode}
                  onChange={(e) => setJoinCode(e.target.value.toUpperCase().slice(0, 5))}
                  placeholder="CODE"
                  maxLength={5}
                  className="flex-1 px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 text-center font-mono text-lg tracking-widest focus:outline-none focus:ring-2 focus:ring-cyan-400/50 transition"
                />
                <button
                  onClick={joinRoom}
                  disabled={connectionStatus === 'connecting'}
                  className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white font-bold rounded-xl transition-all shadow-lg shadow-cyan-500/20 disabled:opacity-50 flex items-center gap-2"
                >
                  {connectionStatus === 'connecting' ? <Loader2 size={18} className="animate-spin" /> : <Users size={18} />}
                  {t.join}
                </button>
              </div>
            </div>
          </div>

          {/* Rules & Language Toggle */}
          <div className="flex items-center justify-center gap-3 mt-4">
            <button
              onClick={() => setShowRules(true)}
              className="flex items-center gap-2 text-gray-400 hover:text-amber-400 transition text-sm"
            >
              <HelpCircle size={16} /> {t.rules}
            </button>
            <LanguageToggle lang={lang} setLang={setLang} />
          </div>

          {/* Back to Tools */}
          <div className="text-center mt-4">
            <a href="/tools" className="inline-flex items-center gap-1 text-gray-500 hover:text-gray-300 text-xs transition">
              <ArrowLeft size={14} /> {t.backToTools}
            </a>
          </div>
        </motion.div>
      </div>
    );
  }

  // ═══════════════════════════════════════════════════
  // RENDER: LOBBY
  // ═══════════════════════════════════════════════════

  if (screen === 'lobby') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 flex items-center justify-center p-4">
        <AnimatePresence>{showRules && <RulesModal onClose={() => setShowRules(false)} t={t} />}</AnimatePresence>
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="w-full max-w-md">
          <div className="text-center mb-6">
            <div className="text-4xl mb-2">🎲</div>
            <h2 className="text-2xl font-black text-white">{t.waitingRoom}</h2>
          </div>

          <div className="bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 p-5 sm:p-6 space-y-4">
            {/* Room Code */}
            <div className="text-center">
              <div className="text-xs text-gray-400 mb-1">{t.roomCode}</div>
              <button
                onClick={copyRoomCode}
                className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 rounded-xl hover:bg-white/15 transition group"
              >
                <span className="font-mono text-2xl font-black text-amber-400 tracking-[0.2em]">{roomCode}</span>
                {copied ? <Check size={18} className="text-green-400" /> : <Copy size={18} className="text-gray-400 group-hover:text-white" />}
              </button>
              <div className="text-xs text-gray-500 mt-1">{t.shareCode}</div>
              <button onClick={shareLink}
                className="mt-2 inline-flex items-center gap-1.5 px-4 py-2 bg-amber-500/15 hover:bg-amber-500/25 text-amber-400 font-semibold rounded-xl text-xs transition border border-amber-500/20">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 12v8a2 2 0 002 2h12a2 2 0 002-2v-8"/><polyline points="16 6 12 2 8 6"/><line x1="12" y1="2" x2="12" y2="15"/>
                </svg>
                {copied ? (lang === 'de' ? 'Link kopiert!' : 'Link copied!') : (lang === 'de' ? 'Einladungslink teilen' : 'Share invite link')}
              </button>
            </div>

            {/* Players */}
            <div>
              <div className="text-xs font-semibold text-gray-400 mb-2 flex items-center gap-1">
                <Users size={14} /> {t.players} ({players.length}/{MAX_PLAYERS})
              </div>
              <div className="grid grid-cols-3 gap-2">
                {players.map((p, i) => (
                  <motion.div
                    key={p.id}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className={`flex flex-col items-center p-3 rounded-xl bg-gradient-to-br ${PLAYER_COLORS[i % PLAYER_COLORS.length].bg} bg-opacity-10`}
                    style={{ background: `linear-gradient(135deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02))` }}
                  >
                    <div className="text-3xl mb-1">{p.avatar}</div>
                    <div className="text-xs font-bold text-white truncate max-w-full">{p.name}</div>
                    {p.id === myIdRef.current && <div className="text-[10px] text-amber-400">{t.you}</div>}
                  </motion.div>
                ))}
                {Array.from({ length: Math.max(0, 2 - players.length) }).map((_, i) => (
                  <div key={`empty-${i}`} className="flex flex-col items-center p-3 rounded-xl bg-white/5 border border-dashed border-white/10">
                    <div className="text-3xl mb-1 opacity-20">👤</div>
                    <div className="text-xs text-gray-600">{t.waiting}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Start Button (Host only) */}
            {isHost ? (
              <button
                onClick={startGame}
                disabled={players.length < 2}
                className="w-full py-3.5 bg-gradient-to-r from-emerald-500 to-green-500 hover:from-emerald-400 hover:to-green-400 text-white font-bold rounded-xl transition-all shadow-lg shadow-emerald-500/20 disabled:opacity-40 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                <Play size={18} />
                {players.length < 2 ? t.minPlayers : t.startGame}
              </button>
            ) : (
              <div className="text-center py-3 text-gray-400 text-sm flex items-center justify-center gap-2">
                <Loader2 size={16} className="animate-spin" />
                {t.waitingForHost}
              </div>
            )}

            {/* Actions */}
            <div className="flex justify-between items-center pt-2">
              <button onClick={leaveGame} className="flex items-center gap-1 text-gray-400 hover:text-red-400 text-sm transition">
                <ArrowLeft size={14} /> {t.leave}
              </button>
              <div className="flex items-center gap-2">
                <button onClick={() => setShowRules(true)} className="flex items-center gap-1 text-gray-400 hover:text-amber-400 text-sm transition">
                  <HelpCircle size={14} /> {t.rulesShort}
                </button>
                <LanguageToggle lang={lang} setLang={setLang} />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    );
  }

  // ═══════════════════════════════════════════════════
  // RENDER: GAME OVER
  // ═══════════════════════════════════════════════════

  if (screen === 'gameover') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 flex items-center justify-center p-4">
        <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} className="w-full max-w-md text-center">
          <motion.div
            animate={{ rotate: [0, 10, -10, 0], y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="text-7xl mb-4"
          >
            👑
          </motion.div>
          <h2 className="text-3xl font-black text-white mb-2">{t.gameOver}</h2>
          {winner && (
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="mb-6"
            >
              <div className="text-5xl mb-2">{winner.avatar}</div>
              <div className="text-2xl font-black bg-gradient-to-r from-amber-400 to-yellow-300 bg-clip-text text-transparent">
                {winner.name} {t.wins}
              </div>
              {winner.id === myIdRef.current && (
                <div className="text-emerald-400 text-sm mt-1">{t.thatsYou}</div>
              )}
            </motion.div>
          )}

          {/* Final standings */}
          <div className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-4 mb-6">
            <div className="text-sm text-gray-400 mb-3">{t.finalStanding} {round} {t.rounds}</div>
            <div className="space-y-2">
              {[...players].sort((a, b) => b.lives - a.lives).map((p, i) => (
                <div key={p.id} className="flex items-center gap-3 py-2 px-3 rounded-xl bg-white/5">
                  <div className="text-sm font-bold text-gray-500 w-5">{i + 1}.</div>
                  <div className="text-xl">{p.avatar}</div>
                  <div className="flex-1 text-left">
                    <div className="text-sm font-bold text-white">{p.name}{p.id === myIdRef.current ? ` (${t.you})` : ''}</div>
                  </div>
                  <Hearts lives={p.lives} />
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            {isHost && (
              <button
                onClick={restartGame}
                className="w-full py-3 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-bold rounded-xl transition-all hover:from-amber-400 hover:to-orange-400 shadow-lg shadow-amber-500/20"
              >
                {t.playAgain}
              </button>
            )}
            <button
              onClick={leaveGame}
              className="w-full py-3 bg-white/10 text-white font-bold rounded-xl transition-all hover:bg-white/20"
            >
              {t.backToMenu}
            </button>
          </div>
        </motion.div>
      </div>
    );
  }

  // ═══════════════════════════════════════════════════
  // RENDER: GAME
  // ═══════════════════════════════════════════════════

  const renderGameCenter = () => {
    // --- ROLLING ---
    if (gamePhase === 'rolling') {
      return (
        <motion.div key="rolling" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="text-center space-y-4">
          <div className="text-gray-400 text-sm">{t.round} {round}</div>
          <div className="text-white text-lg font-bold">
            {isMyTurn ? t.yourTurn : `${currentPlayer?.name} ${t.isPlaying}`}
          </div>
          {previousClaim && (
            <div className="text-sm text-gray-400">
              {t.toBeat} <span className="text-amber-400 font-bold">{formatDiceLabel(previousClaim, lang)}</span>
            </div>
          )}
          {isMyTurn && amAlive ? (
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={doRoll}
              disabled={isRolling}
              className="mx-auto px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-black text-lg rounded-2xl shadow-lg shadow-amber-500/30 hover:shadow-amber-500/50 transition-all disabled:opacity-50 flex items-center gap-3"
            >
              {isRolling ? (
                <>
                  <motion.span animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 0.3 }}>🎲</motion.span>
                  {t.rolling}
                </>
              ) : (
                <><span className="text-2xl">🎲</span> {t.roll}</>
              )}
            </motion.button>
          ) : (
            <div className="flex items-center justify-center gap-2 text-gray-500">
              <Loader2 size={16} className="animate-spin" />
              {t.waitingFor} {currentPlayer?.name}...
            </div>
          )}
        </motion.div>
      );
    }

    // --- CLAIMING ---
    if (gamePhase === 'claiming') {
      if (isMyTurn && myDice) {
        return (
          <motion.div key="claiming" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="space-y-4">
            <div className="text-center text-gray-400 text-sm">{t.yourDicePrivate}</div>
            <div className="flex justify-center gap-4">
              <DiceFace value={myDice[0]} size={56} animate />
              <DiceFace value={myDice[1]} size={56} animate />
            </div>
            <div className="text-center text-sm">
              <span className="text-gray-400">{t.value} </span>
              <span className={`font-black ${myDiceValue === 21 ? 'text-yellow-400 text-lg' : 'text-white'}`}>
                {formatDiceLabel(myDiceValue, lang)}
              </span>
            </div>

            {/* Claim Picker */}
            <div>
              <div className="text-xs text-gray-400 mb-2 text-center">
                {previousClaim ? `${t.claimHigherThan} ${formatDiceLabel(previousClaim, lang)}:` : `${t.chooseValue}`}
              </div>
              <div className="grid grid-cols-4 sm:grid-cols-5 gap-1.5 max-h-52 overflow-y-auto p-1">
                {DICE_ORDER.map((val) => {
                  const isValid = previousClaim !== null ? getDiceRank(val) > getDiceRank(previousClaim) : true;
                  const isSelected = selectedClaim === val;
                  const isMx = val === 21;
                  const isDbl = isDouble(val);
                  const [d1, d2] = diceToDigits(val);
                  return (
                    <button
                      key={val}
                      disabled={!isValid}
                      onClick={() => setSelectedClaim(val)}
                      className={`
                        p-1.5 rounded-xl flex flex-col items-center gap-0.5 transition-all text-[10px] font-bold
                        ${!isValid ? 'opacity-20 cursor-not-allowed bg-white/5' : ''}
                        ${isValid && !isSelected ? 'bg-white/10 hover:bg-white/20 cursor-pointer' : ''}
                        ${isSelected ? 'bg-amber-500/30 ring-2 ring-amber-400 scale-105' : ''}
                        ${isMx ? 'col-span-2 bg-gradient-to-r from-yellow-500/20 to-amber-500/20' : ''}
                      `}
                    >
                      <div className="flex gap-0.5">
                        <DiceFace value={d1} size={20} />
                        <DiceFace value={d2} size={20} />
                      </div>
                      <span className={`${isMx ? 'text-yellow-400' : isDbl ? 'text-purple-300' : 'text-gray-300'}`}>
                        {isMx ? t.maex : isDbl ? t.doubles : val}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Confirm Button */}
            <button
              onClick={doClaim}
              disabled={selectedClaim === null}
              className="w-full py-3 bg-gradient-to-r from-emerald-500 to-green-500 text-white font-bold rounded-xl shadow-lg shadow-emerald-500/20 transition-all hover:from-emerald-400 hover:to-green-400 disabled:opacity-30 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              <Shield size={16} />
              {selectedClaim !== null
                ? `${formatDiceLabel(selectedClaim, lang)} ${t.claimValue}`
                : t.selectValue}
            </button>
          </motion.div>
        );
      } else {
        return (
          <motion.div key="claiming-wait" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center space-y-4">
            <div className="text-white text-lg font-bold">{currentPlayer?.name} {t.lookingAtDice}</div>
            <motion.div animate={{ rotate: [0, 15, -15, 0] }} transition={{ repeat: Infinity, duration: 2 }} className="text-5xl">
              🤔
            </motion.div>
            <div className="flex justify-center gap-3">
              <DiceFace value={1} size={48} hidden animate />
              <DiceFace value={1} size={48} hidden animate />
            </div>
          </motion.div>
        );
      }
    }

    // --- DECIDING ---
    if (gamePhase === 'deciding') {
      const claimDigits = previousClaim ? diceToDigits(previousClaim) : [1, 1];
      return (
        <motion.div key="deciding" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} className="text-center space-y-4">
          <div className="text-gray-400 text-sm">{previousClaimerName} {t.claims}</div>
          <motion.div
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', stiffness: 300 }}
            className="flex justify-center gap-4"
          >
            <DiceFace value={claimDigits[0]} size={64} animate />
            <DiceFace value={claimDigits[1]} size={64} animate />
          </motion.div>
          <div className={`text-2xl font-black ${previousClaim === 21 ? 'text-yellow-400' : isDouble(previousClaim) ? 'text-purple-400' : 'text-white'}`}>
            {formatDiceLabel(previousClaim, lang)}
            {previousClaim === 21 && <span className="text-yellow-500 ml-1">⭐</span>}
          </div>

          {isMyTurn && amAlive ? (
            <div className="flex gap-3 justify-center pt-2">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={doBelieve}
                className="flex-1 max-w-40 py-3.5 bg-gradient-to-r from-emerald-500 to-green-500 text-white font-bold rounded-xl shadow-lg shadow-emerald-500/20 transition-all flex items-center justify-center gap-2"
              >
                <Check size={18} /> {t.believe}
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={doReveal}
                className="flex-1 max-w-40 py-3.5 bg-gradient-to-r from-red-500 to-rose-500 text-white font-bold rounded-xl shadow-lg shadow-red-500/20 transition-all flex items-center justify-center gap-2"
              >
                <Eye size={18} /> {t.reveal}
              </motion.button>
            </div>
          ) : (
            <div className="flex items-center justify-center gap-2 text-gray-500 pt-2">
              <Loader2 size={16} className="animate-spin" />
              {currentPlayer?.name} {t.deciding}
            </div>
          )}
        </motion.div>
      );
    }

    // --- REVEALING ---
    if (gamePhase === 'revealing' && revealResult) {
      const actualDigits = diceToDigits(revealResult.actualDice.value);
      const claimedDigits = diceToDigits(revealResult.claimed);
      const wasHonest = getDiceRank(revealResult.actualDice.value) >= getDiceRank(revealResult.claimed);
      const loserIsMe = revealResult.loserId === myIdRef.current;

      return (
        <motion.div key="revealing" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center space-y-3">
          <motion.div
            initial={{ scale: 2, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3, type: 'spring' }}
            className="text-sm text-gray-400"
          >
            {revealResult.revealerName} {t.reveals}
          </motion.div>

          {/* Claimed vs Actual */}
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <div className="text-center">
              <div className="text-xs text-gray-500 mb-1">{t.claimed}</div>
              <div className="flex gap-2 justify-center">
                <DiceFace value={claimedDigits[0]} size={40} />
                <DiceFace value={claimedDigits[1]} size={40} />
              </div>
              <div className="text-sm font-bold text-white mt-1">{formatDiceLabel(revealResult.claimed, lang)}</div>
            </div>
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.8, type: 'spring' }}
              className="text-3xl"
            >
              →
            </motion.div>
            <motion.div
              initial={{ rotateY: 180, opacity: 0 }}
              animate={{ rotateY: 0, opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.5, type: 'spring' }}
              className="text-center"
            >
              <div className="text-xs text-gray-500 mb-1">{t.actual}</div>
              <div className="flex gap-2 justify-center">
                <DiceFace value={actualDigits[0]} size={40} animate />
                <DiceFace value={actualDigits[1]} size={40} animate />
              </div>
              <div className="text-sm font-bold text-white mt-1">{formatDiceLabel(revealResult.actualDice.value, lang)}</div>
            </motion.div>
          </div>

          {/* Result */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.8 }}
            className={`py-3 px-4 rounded-xl ${wasHonest ? 'bg-emerald-500/20 border border-emerald-500/30' : 'bg-red-500/20 border border-red-500/30'}`}
          >
            {wasHonest ? (
              <div className="text-emerald-300 font-bold">
                {t.honestPrefix} {revealResult.claimerName} {t.honest}
              </div>
            ) : (
              <div className="text-red-300 font-bold">
                {t.caughtPrefix} {revealResult.claimerName} {t.caught}
              </div>
            )}
            <div className={`text-sm mt-1 ${loserIsMe ? 'text-red-400 font-bold' : 'text-gray-300'}`}>
              {revealResult.loserName} {t.losesLives} {revealResult.livesLost} {revealResult.livesLost > 1 ? t.lives : t.life}!
              {loserIsMe && ' 💔'}
            </div>
          </motion.div>

          {/* Dramatic emoji */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: 2.2, type: 'spring' }}
            className="text-5xl"
          >
            {wasHonest ? '😎' : '🤥'}
          </motion.div>
        </motion.div>
      );
    }

    // --- GAMEOVER (handled in screen === 'gameover') ---
    if (gamePhase === 'gameover') {
      const aliveP = players.find(p => p.isAlive);
      if (aliveP && !winner) {
        setWinner(aliveP);
        setScreen('gameover');
        if (aliveP.id === myIdRef.current) {
          confetti({ particleCount: 200, spread: 100, origin: { y: 0.6 } });
        }
      }
      return null;
    }

    return null;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 flex flex-col">
      <AnimatePresence>{showRules && <RulesModal onClose={() => setShowRules(false)} t={t} />}</AnimatePresence>

      {/* Header */}
      <div className="flex items-center justify-between px-3 sm:px-4 py-3 bg-black/20 border-b border-white/5">
        <button onClick={leaveGame} className="flex items-center gap-1 text-gray-400 hover:text-white transition text-sm">
          <ArrowLeft size={16} /> {t.leave}
        </button>
        <div className="text-center">
          <div className="text-sm font-black text-amber-400">MÄXCHEN</div>
          <div className="text-[10px] text-gray-500">{t.round} {round} · Code: {roomCode}</div>
        </div>
        <div className="flex items-center gap-2">
          <LanguageToggle lang={lang} setLang={setLang} />
          <button onClick={() => setShowRules(true)} className="p-1.5 rounded-lg hover:bg-white/10 text-gray-400 hover:text-white transition">
            <HelpCircle size={16} />
          </button>
          <button
            onClick={() => setShowChat(!showChat)}
            className="p-1.5 rounded-lg hover:bg-white/10 text-gray-400 hover:text-white transition relative"
          >
            <MessageSquare size={16} />
          </button>
        </div>
      </div>

      {/* Players Row */}
      <div className="px-2 py-2 sm:py-3 overflow-x-auto">
        <div className="flex gap-1.5 sm:gap-2 justify-center min-w-min mx-auto">
          {players.map((p, i) => (
            <PlayerCard
              key={p.id}
              player={p}
              colorIndex={i}
              isCurrentTurn={i === currentPlayerIndex && gamePhase !== 'revealing'}
              isMe={p.id === myIdRef.current}
              size={players.length > 4 ? 'small' : 'normal'}
              youLabel={t.you}
            />
          ))}
        </div>
      </div>

      {/* Game Center */}
      <div className="flex-1 flex items-center justify-center px-4 py-2 sm:py-4">
        <div className="w-full max-w-md">
          <div className="bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10 p-4 sm:p-6 min-h-[280px] flex flex-col justify-center">
            <AnimatePresence mode="wait">
              {renderGameCenter()}
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Spectator Notice */}
      {!amAlive && (
        <div className="text-center text-gray-500 text-sm pb-2">
          {t.eliminated}
        </div>
      )}

      {/* Chat Panel */}
      <AnimatePresence>
        {showChat && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="border-t border-white/10 bg-black/30 backdrop-blur-sm overflow-hidden"
          >
            <div className="max-w-md mx-auto p-3">
              {/* Messages */}
              <div className="h-28 overflow-y-auto space-y-1 mb-2 scrollbar-thin">
                {chatMessages.length === 0 && (
                  <div className="text-gray-600 text-xs text-center py-4">{t.noMessages}</div>
                )}
                {chatMessages.map((msg) => (
                  <div key={msg.id} className="text-xs">
                    <span className="mr-1">{msg.avatar}</span>
                    <span className="font-bold text-amber-400">{msg.from}:</span>
                    <span className="text-gray-300 ml-1">{msg.text}</span>
                  </div>
                ))}
              </div>
              {/* Quick Chats */}
              <div className="flex gap-1 mb-2 overflow-x-auto">
                {getQuickChats(lang).map((qc) => (
                  <button
                    key={qc}
                    onClick={() => doChat(qc)}
                    className="px-2 py-1 bg-white/10 rounded-lg text-[10px] text-gray-300 hover:bg-white/20 transition whitespace-nowrap"
                  >
                    {qc}
                  </button>
                ))}
              </div>
              {/* Input */}
              <div className="flex gap-2">
                <input
                  type="text"
                  value={chatInput}
                  onChange={(e) => setChatInput(e.target.value.slice(0, 100))}
                  onKeyDown={(e) => e.key === 'Enter' && doChat()}
                  placeholder={t.message}
                  className="flex-1 px-3 py-2 bg-white/5 border border-white/10 rounded-xl text-white text-xs placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-amber-400/50"
                />
                <button
                  onClick={() => doChat()}
                  className="px-3 py-2 bg-amber-500/20 rounded-xl text-amber-400 hover:bg-amber-500/30 transition"
                >
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
