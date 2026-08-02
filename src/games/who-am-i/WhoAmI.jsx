import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import Peer from 'peerjs';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';

/* ═══════════════════════════════════════════════════
   CONSTANTS
   ═══════════════════════════════════════════════════ */
const PREFIX = 'whoami-';
const ICE = [{ urls: 'stun:stun.l.google.com:19302' }];
const MIN_PLAYERS = 2;
const MAX_PLAYERS = 12;
const COLORS = [
  '#F59E0B', '#8B5CF6', '#EC4899', '#10B981',
  '#3B82F6', '#EF4444', '#06B6D4', '#F97316',
  '#84CC16', '#E879F9', '#14B8A6', '#FB923C',
];
const makeCode = () => {
  const c = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  return Array.from({ length: 5 }, () => c[Math.floor(Math.random() * c.length)]).join('');
};

const CATEGORIES = {
  celebrities: {
    name: 'Celebrities', emoji: '⭐',
    items: ['Taylor Swift', 'Elon Musk', 'Beyoncé', 'Leonardo DiCaprio', 'Oprah Winfrey', 'Cristiano Ronaldo', 'Rihanna', 'Brad Pitt', 'Lady Gaga', 'Dwayne Johnson', 'Ariana Grande', 'Tom Hanks', 'Shakira', 'Keanu Reeves', 'Adele', 'Drake', 'Scarlett Johansson', 'Morgan Freeman', 'Emma Watson', 'Will Smith'],
  },
  fictional: {
    name: 'Fictional Characters', emoji: '🧙',
    items: ['Harry Potter', 'Darth Vader', 'SpongeBob', 'Batman', 'Sherlock Holmes', 'Super Mario', 'Mickey Mouse', 'Pikachu', 'Spider-Man', 'Gandalf', 'Homer Simpson', 'Elsa', 'Shrek', 'Gollum', 'Hermione Granger', 'Iron Man', 'Bugs Bunny', 'Yoda', 'Wonder Woman', 'The Joker'],
  },
  historical: {
    name: 'Historical Figures', emoji: '📜',
    items: ['Albert Einstein', 'Cleopatra', 'Napoleon', 'Leonardo da Vinci', 'Queen Elizabeth I', 'Julius Caesar', 'Nikola Tesla', 'Marie Curie', 'Alexander the Great', 'Mozart', 'Gandhi', 'Joan of Arc', 'Genghis Khan', 'Shakespeare', 'Beethoven', 'Frida Kahlo', 'Aristotle', 'Marco Polo', 'Tutankhamun', 'Charles Darwin'],
  },
  animals: {
    name: 'Animals', emoji: '🦁',
    items: ['Lion', 'Bald Eagle', 'Dolphin', 'Elephant', 'Emperor Penguin', 'Octopus', 'Bengal Tiger', 'Monarch Butterfly', 'Arctic Wolf', 'Snowy Owl', 'Great White Shark', 'Giant Panda', 'Chameleon', 'Gorilla', 'Flamingo', 'Koala', 'Peacock', 'Seahorse', 'Red Fox', 'Snow Leopard'],
  },
  movies: {
    name: 'Movies & Shows', emoji: '🎬',
    items: ['The Matrix', 'Titanic', 'Star Wars', 'Game of Thrones', 'Friends', 'The Godfather', 'Breaking Bad', 'Jurassic Park', 'Stranger Things', 'Forrest Gump', 'The Office', 'Lord of the Rings', 'Back to the Future', 'The Lion King', 'Inception', 'The Simpsons', 'The Avengers', 'Fight Club', 'Pulp Fiction', 'Shawshank Redemption'],
  },
  professions: {
    name: 'Professions', emoji: '💼',
    items: ['Astronaut', 'Chef', 'Detective', 'Firefighter', 'Pilot', 'Surgeon', 'Archaeologist', 'Marine Biologist', 'Magician', 'Stunt Double', 'Voice Actor', 'Sommelier', 'Beekeeper', 'Lighthouse Keeper', 'Cryptographer', 'Storm Chaser', 'Puppeteer', 'Cartographer', 'Blacksmith', 'Glassblower'],
  },
};

/* ═══════════════════════════════════════════════════
   ANIMATED BACKGROUND — warm enigma theme
   ═══════════════════════════════════════════════════ */
const BG = () => (
  <div className="fixed inset-0 overflow-hidden" style={{ background: 'linear-gradient(145deg, #0f0a1a 0%, #1a0f2e 40%, #170d22 100%)' }}>
    <div className="absolute w-[600px] h-[600px] rounded-full opacity-[0.06]"
      style={{ top: '-12%', left: '-8%', background: 'radial-gradient(circle, #F59E0B, transparent 70%)', animation: 'wf1 24s ease-in-out infinite' }} />
    <div className="absolute w-[500px] h-[500px] rounded-full opacity-[0.05]"
      style={{ bottom: '-8%', right: '-6%', background: 'radial-gradient(circle, #8B5CF6, transparent 70%)', animation: 'wf2 28s ease-in-out infinite' }} />
    <div className="absolute w-[350px] h-[350px] rounded-full opacity-[0.04]"
      style={{ top: '45%', left: '55%', background: 'radial-gradient(circle, #EC4899, transparent 70%)', animation: 'wf3 20s ease-in-out infinite' }} />
    <div className="absolute inset-0 opacity-[0.025]"
      style={{ backgroundImage: 'radial-gradient(rgba(245,158,11,0.25) 1px, transparent 1px)', backgroundSize: '36px 36px' }} />
    {[...Array(6)].map((_, i) => (
      <div key={i} className="absolute font-bold select-none pointer-events-none"
        style={{ color: 'rgba(245,158,11,0.03)', fontSize: 50 + i * 18, left: `${8 + i * 15}%`, top: `${10 + (i * 17) % 70}%`, animation: `wfl${i % 3} ${16 + i * 4}s ease-in-out infinite` }}>?</div>
    ))}
    <style>{`
      @keyframes wf1{0%,100%{transform:translate(0,0) scale(1)}50%{transform:translate(50px,35px) scale(1.08)}}
      @keyframes wf2{0%,100%{transform:translate(0,0)}50%{transform:translate(-40px,-30px)}}
      @keyframes wf3{0%,100%{transform:translate(0,0)}50%{transform:translate(35px,-45px)}}
      @keyframes wfl0{0%,100%{transform:translateY(0) rotate(0deg)}50%{transform:translateY(-25px) rotate(8deg)}}
      @keyframes wfl1{0%,100%{transform:translateY(0) rotate(0deg)}50%{transform:translateY(-18px) rotate(-6deg)}}
      @keyframes wfl2{0%,100%{transform:translateY(0) rotate(0deg)}50%{transform:translateY(-30px) rotate(5deg)}}
      .wai-input:focus{border-color:rgba(245,158,11,0.5)!important;box-shadow:0 0 0 2px rgba(245,158,11,0.08)!important}
      .wai-input::placeholder{color:#6b7280}
      .wai-scroll::-webkit-scrollbar{width:5px}
      .wai-scroll::-webkit-scrollbar-track{background:transparent}
      .wai-scroll::-webkit-scrollbar-thumb{background:rgba(255,255,255,0.08);border-radius:4px}
    `}</style>
  </div>
);

/* ═══════════════════════════════════════════════════
   REUSABLE COMPONENTS
   ═══════════════════════════════════════════════════ */
const Glass = ({ children, className = '', style = {}, ...props }) => (
  <div className={className} style={{
    background: 'rgba(255,255,255,0.03)', backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)',
    border: '1px solid rgba(255,255,255,0.06)', borderRadius: 20, ...style,
  }} {...props}>{children}</div>
);

const Btn = ({ children, color = '#F59E0B', disabled, onClick, big, small, className = '', style: s = {} }) => (
  <motion.button
    whileHover={disabled ? {} : { scale: 1.03, boxShadow: `0 0 20px ${color}30` }}
    whileTap={disabled ? {} : { scale: 0.97 }}
    disabled={disabled} onClick={onClick} className={className}
    style={{
      padding: big ? '14px 32px' : small ? '7px 14px' : '10px 22px', borderRadius: big ? 14 : 12,
      background: disabled ? 'rgba(255,255,255,0.04)' : `linear-gradient(135deg, ${color}20, ${color}08)`,
      border: `1.5px solid ${disabled ? 'rgba(255,255,255,0.06)' : color + '50'}`,
      color: disabled ? '#475569' : '#fef3c7', fontWeight: 700,
      fontSize: big ? 16 : small ? 12 : 14, letterSpacing: '0.02em',
      cursor: disabled ? 'not-allowed' : 'pointer', transition: 'all 0.15s',
      whiteSpace: 'nowrap', flexShrink: 0, ...s,
    }}
  >{children}</motion.button>
);

const inputStyle = {
  width: '100%', padding: '10px 14px', borderRadius: 12,
  background: 'rgba(255,255,255,0.05)', border: '1.5px solid rgba(255,255,255,0.1)',
  color: '#fef3c7', fontSize: 14, outline: 'none', transition: 'all 0.15s',
};

/* ═══════════════════════════════════════════════════
   CHAT MESSAGE
   ═══════════════════════════════════════════════════ */
const ChatMsg = ({ msg }) => {
  if (msg.type === 'system') return (
    <motion.div initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }}
      style={{ textAlign: 'center', fontSize: 12, color: msg.color || '#71717a', padding: '5px 0', fontStyle: 'italic' }}>
      {msg.text}
    </motion.div>
  );
  if (msg.type === 'question') return (
    <motion.div initial={{ opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }}
      style={{ background: 'rgba(245,158,11,0.07)', border: '1px solid rgba(245,158,11,0.18)', borderRadius: 14, padding: '10px 14px', margin: '4px 0' }}>
      <div style={{ fontSize: 11, fontWeight: 700, color: msg.color || '#F59E0B', marginBottom: 3 }}>{msg.senderName} asks:</div>
      <div style={{ fontSize: 14, color: '#fef3c7', fontWeight: 600 }}>{msg.text}</div>
    </motion.div>
  );
  if (msg.type === 'answer') return (
    <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
      style={{ textAlign: 'center', padding: '4px 0' }}>
      <span style={{
        display: 'inline-block', padding: '5px 18px', borderRadius: 20, fontSize: 13, fontWeight: 700,
        background: msg.color === '#10B981' ? 'rgba(16,185,129,0.1)' : 'rgba(239,68,68,0.1)',
        border: `1px solid ${msg.color}30`, color: msg.color,
      }}>{msg.text}</span>
    </motion.div>
  );
  if (msg.type === 'guess') return (
    <motion.div initial={{ opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }}
      style={{ background: 'rgba(236,72,153,0.07)', border: '1px solid rgba(236,72,153,0.18)', borderRadius: 14, padding: '10px 14px', margin: '4px 0' }}>
      <div style={{ fontSize: 11, fontWeight: 700, color: '#EC4899', marginBottom: 3 }}>🎯 {msg.senderName} guesses:</div>
      <div style={{ fontSize: 14, color: '#fef3c7', fontWeight: 600 }}>{msg.text}</div>
    </motion.div>
  );
  return (
    <motion.div initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }} style={{ padding: '3px 0' }}>
      <span style={{ fontSize: 12, fontWeight: 700, color: msg.color || '#a1a1aa' }}>{msg.senderName}:</span>{' '}
      <span style={{ fontSize: 13, color: '#d4d4d8' }}>{msg.text}</span>
    </motion.div>
  );
};

/* ═══════════════════════════════════════════════════
   RULES MODAL
   ═══════════════════════════════════════════════════ */
const Rules = ({ onClose }) => (
  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
    style={{ position: 'fixed', inset: 0, zIndex: 100, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 16 }} onClick={onClose}>
    <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.7)', backdropFilter: 'blur(4px)' }} />
    <motion.div initial={{ scale: 0.9, y: 20 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.9 }}
      onClick={e => e.stopPropagation()}
      style={{ position: 'relative', maxWidth: 480, width: '100%', maxHeight: '80vh', overflowY: 'auto', background: 'linear-gradient(145deg, #1a1033, #0f0a1a)', border: '1px solid rgba(245,158,11,0.12)', borderRadius: 20, padding: '28px 24px' }}>
      <h2 style={{ fontSize: 22, fontWeight: 800, color: '#fef3c7', marginBottom: 16 }}>🎭 How to Play</h2>
      <div style={{ fontSize: 14, lineHeight: 1.8, color: '#a1a1aa' }}>
        <p style={{ marginBottom: 12 }}>Each player gets a secret <b style={{ color: '#F59E0B' }}>identity</b> — but you can&apos;t see your own!</p>
        <p style={{ fontWeight: 700, color: '#fef3c7', marginBottom: 6 }}>On your turn:</p>
        <ul style={{ paddingLeft: 20, marginBottom: 12 }}>
          <li style={{ marginBottom: 6 }}><b style={{ color: '#F59E0B' }}>Ask a yes/no question</b> — e.g. &quot;Am I a real person?&quot;</li>
          <li style={{ marginBottom: 6 }}>Others vote <b style={{ color: '#10B981' }}>Yes</b> or <b style={{ color: '#EF4444' }}>No</b></li>
          <li style={{ marginBottom: 6 }}>If <b style={{ color: '#10B981' }}>Yes</b> → ask another question!</li>
          <li style={{ marginBottom: 6 }}>If <b style={{ color: '#EF4444' }}>No</b> → your turn ends</li>
          <li><b style={{ color: '#EC4899' }}>Guess your identity</b> any time — wrong guess ends your turn!</li>
        </ul>
        <p><b style={{ color: '#F59E0B' }}>First to guess wins!</b> Game continues until everyone guesses.</p>
      </div>
      <button onClick={onClose} style={{ marginTop: 20, width: '100%', padding: 12, borderRadius: 12, background: 'rgba(245,158,11,0.1)', border: '1px solid rgba(245,158,11,0.3)', color: '#F59E0B', fontWeight: 700, cursor: 'pointer', fontSize: 14 }}>Got it!</button>
    </motion.div>
  </motion.div>
);

/* ═══════════════════════════════════════════════════
   MAIN COMPONENT
   ═══════════════════════════════════════════════════ */
export default function WhoAmI() {
  /* ── state ── */
  const [phase, setPhase] = useState('menu');
  const [name, setName] = useState(() => localStorage.getItem('wai-name') || '');
  const [roomCode, setRoomCode] = useState('');
  const [joinCode, setJoinCode] = useState('');
  const [isHost, setIsHost] = useState(false);
  const [error, setError] = useState('');
  const [connecting, setConnecting] = useState(false);
  const [copied, setCopied] = useState(false);
  const [showRules, setShowRules] = useState(false);

  const [players, setPlayers] = useState([]);
  const [settings, setSettings] = useState({ assignMode: 'manual', categories: ['celebrities', 'fictional'], customNames: [] });
  const [currentTurn, setCurrentTurn] = useState('');
  const [chat, setChat] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [assignTarget, setAssignTarget] = useState(null);
  const [assignProgress, setAssignProgress] = useState({ done: 0, total: 0 });
  const [rankings, setRankings] = useState([]);

  const [assignInput, setAssignInput] = useState('');
  const [assignSubmitted, setAssignSubmitted] = useState(false);
  const [myAssignment, setMyAssignment] = useState('');
  const [questionInput, setQuestionInput] = useState('');
  const [guessInput, setGuessInput] = useState('');
  const [chatInput, setChatInput] = useState('');
  const [isGuessing, setIsGuessing] = useState(false);
  const [customNameInput, setCustomNameInput] = useState('');

  /* ── refs ── */
  const peerRef = useRef(null);
  const connsRef = useRef([]);
  const hostConnRef = useRef(null);
  const myIdRef = useRef('');
  const gsRef = useRef({});
  const isHostRef = useRef(false);
  const chatEndRef = useRef(null);

  /* ── computed ── */
  const myId = myIdRef.current;
  const isMyTurn = currentTurn === myId && phase === 'playing';
  const myPlayer = players.find(p => p.id === myId);
  const currentPlayer = players.find(p => p.id === currentTurn);
  const totalPool = useMemo(() =>
    settings.categories.reduce((s, c) => s + (CATEGORIES[c]?.items.length || 0), 0) + (settings.customNames?.length || 0),
    [settings.categories, settings.customNames]);
  const canStart = players.length >= MIN_PLAYERS && (settings.assignMode === 'manual' || totalPool >= players.length);

  /* ── effects ── */
  useEffect(() => {
    const m = window.location.pathname.match(/\/games\/who-am-i\/([A-Z0-9]+)/i);
    if (m) setJoinCode(m[1].toUpperCase());
  }, []);
  useEffect(() => { if (name) localStorage.setItem('wai-name', name); }, [name]);
  useEffect(() => { chatEndRef.current?.scrollIntoView({ behavior: 'smooth' }); }, [chat]);
  useEffect(() => { if (phase !== 'assigning') { setAssignSubmitted(false); setMyAssignment(''); } }, [phase]);
  useEffect(() => { setIsGuessing(false); }, [currentTurn]);
  useEffect(() => () => { if (peerRef.current) { try { peerRef.current.destroy(); } catch (_) { /* */ } } }, []);

  /* ═══════════════════════════════════════════════════
     SYNC HELPERS (host)
     ═══════════════════════════════════════════════════ */
  const addChatMsg = useCallback((type, text, senderName, color) => {
    const gs = gsRef.current;
    if (!gs.chat) gs.chat = [];
    gs.chat.push({ id: Date.now() + Math.random(), type, text, senderName, color, ts: Date.now() });
  }, []);

  const syncState = useCallback(() => {
    const gs = gsRef.current;
    if (!gs.players) return;
    // Host local
    setPlayers(gs.players.map(p => ({ ...p, identity: p.id === myIdRef.current ? null : p.identity })));
    setPhase(gs.phase);
    setSettings({ ...gs.settings });
    setCurrentTurn(gs.currentTurn || '');
    setChat([...gs.chat]);
    setCurrentQuestion(gs.currentQuestion ? {
      id: gs.currentQuestion.id, text: gs.currentQuestion.text,
      voteCount: Object.keys(gs.currentQuestion.votes || {}).length,
      voteTotal: gs.players.filter(p => !p.guessed && p.id !== gs.currentTurn).length,
      resolved: gs.currentQuestion.resolved, result: gs.currentQuestion.result,
      myVote: gs.currentQuestion.votes?.[myIdRef.current],
    } : null);
    const mt = gs.assignTargets?.[myIdRef.current];
    setAssignTarget(mt ? gs.players.find(p => p.id === mt)?.name : null);
    setAssignProgress({ done: Object.keys(gs.assignments || {}).length, total: gs.players.length });
    setRankings(gs.rankings || []);
    // Clients
    connsRef.current.forEach(conn => {
      try {
        const tid = gs.assignTargets?.[conn.peer];
        conn.send({
          type: 'game-state', phase: gs.phase,
          players: gs.players.map(p => ({ id: p.id, name: p.name, color: p.color, identity: p.id === conn.peer ? null : p.identity, guessed: p.guessed, rank: p.rank })),
          settings: gs.settings, currentTurn: gs.currentTurn, chat: gs.chat.slice(-100),
          currentQuestion: gs.currentQuestion ? {
            id: gs.currentQuestion.id, text: gs.currentQuestion.text,
            voteCount: Object.keys(gs.currentQuestion.votes || {}).length,
            voteTotal: gs.players.filter(p => !p.guessed && p.id !== gs.currentTurn).length,
            resolved: gs.currentQuestion.resolved, result: gs.currentQuestion.result,
            myVote: gs.currentQuestion.votes?.[conn.peer],
          } : null,
          assignTarget: tid ? gs.players.find(p => p.id === tid)?.name : null,
          assignProgress: { done: Object.keys(gs.assignments || {}).length, total: gs.players.length },
          rankings: gs.rankings || [],
        });
      } catch (_) { /* */ }
    });
  }, []);

  const syncLobby = useCallback(() => {
    const gs = gsRef.current;
    const pls = gs.players.map(p => ({ id: p.id, name: p.name, color: p.color }));
    setPlayers(pls);
    setSettings({ ...gs.settings });
    connsRef.current.forEach(conn => {
      try { conn.send({ type: 'lobby-update', players: pls, settings: gs.settings }); } catch (_) { /* */ }
    });
  }, []);

  /* ═══════════════════════════════════════════════════
     GAME LOGIC (host)
     ═══════════════════════════════════════════════════ */
  const advanceTurn = useCallback(() => {
    const gs = gsRef.current;
    const remaining = gs.players.filter(p => !p.guessed);
    if (remaining.length <= 1) {
      if (remaining.length === 1) {
        remaining[0].guessed = true;
        remaining[0].rank = gs.nextRank++;
        gs.rankings.push({ id: remaining[0].id, name: remaining[0].name, rank: remaining[0].rank, identity: remaining[0].identity });
        addChatMsg('system', `${remaining[0].name} is revealed as ${remaining[0].identity}!`, null, '#F59E0B');
      }
      gs.phase = 'results';
      addChatMsg('system', '🎉 Game over!', null, '#F59E0B');
      syncState();
      confetti({ particleCount: 200, spread: 90, origin: { y: 0.6 } });
      return;
    }
    const ci = gs.players.findIndex(p => p.id === gs.currentTurn);
    let ni = (ci + 1) % gs.players.length;
    let safe = 0;
    while (gs.players[ni].guessed && safe++ < gs.players.length) ni = (ni + 1) % gs.players.length;
    gs.currentTurn = gs.players[ni].id;
    gs.currentQuestion = null;
    addChatMsg('system', `It's ${gs.players[ni].name}'s turn!`, null, gs.players[ni].color);
    syncState();
  }, [addChatMsg, syncState]);

  const processAction = useCallback((playerId, data) => {
    const gs = gsRef.current;

    if (data.type === 'chat') {
      const pl = gs.players.find(p => p.id === playerId);
      addChatMsg('chat', data.text, pl?.name, pl?.color);
      syncState();
      return;
    }

    if (data.type === 'assign') {
      if (gs.phase !== 'assigning') return;
      if (!gs.assignments) gs.assignments = {};
      gs.assignments[playerId] = data.identity;
      const targetId = gs.assignTargets?.[playerId];
      if (targetId) { const t = gs.players.find(p => p.id === targetId); if (t) t.identity = data.identity; }
      addChatMsg('system', `${gs.players.find(p => p.id === playerId)?.name} submitted their assignment`, null, null);
      if (Object.keys(gs.assignments).length >= gs.players.length) {
        gs.phase = 'playing';
        gs.currentTurn = gs.players[0].id;
        gs.currentQuestion = null;
        addChatMsg('system', '🎭 All identities assigned! The game begins!', null, '#F59E0B');
        addChatMsg('system', `It's ${gs.players[0].name}'s turn!`, null, gs.players[0].color);
      }
      syncState();
      return;
    }

    if (data.type === 'question') {
      if (gs.phase !== 'playing' || gs.currentTurn !== playerId) return;
      if (gs.currentQuestion && !gs.currentQuestion.resolved) return;
      const pl = gs.players.find(p => p.id === playerId);
      gs.currentQuestion = { id: Date.now(), text: data.text, votes: {}, resolved: false, result: null };
      addChatMsg('question', data.text, pl?.name, pl?.color);
      syncState();
      return;
    }

    if (data.type === 'vote') {
      if (!gs.currentQuestion || gs.currentQuestion.resolved) return;
      if (playerId === gs.currentTurn) return;
      const pl = gs.players.find(p => p.id === playerId);
      if (!pl || pl.guessed) return;
      gs.currentQuestion.votes[playerId] = data.vote;
      const voters = gs.players.filter(p => !p.guessed && p.id !== gs.currentTurn);
      const vc = Object.keys(gs.currentQuestion.votes).length;
      if (vc >= voters.length) {
        const yc = Object.values(gs.currentQuestion.votes).filter(v => v).length;
        const nc = vc - yc;
        const result = yc >= nc;
        gs.currentQuestion.resolved = true;
        gs.currentQuestion.result = result;
        addChatMsg('answer', result ? `Yes! (${yc}–${nc})` : `No! (${yc}–${nc})`, null, result ? '#10B981' : '#EF4444');
        if (!result) { gs.currentQuestion = null; advanceTurn(); return; }
        gs.currentQuestion = null;
      }
      syncState();
      return;
    }

    if (data.type === 'guess') {
      if (gs.phase !== 'playing' || gs.currentTurn !== playerId) return;
      if (gs.currentQuestion && !gs.currentQuestion.resolved) return;
      const pl = gs.players.find(p => p.id === playerId);
      if (!pl || pl.guessed) return;
      const correct = data.text.toLowerCase().trim() === pl.identity.toLowerCase().trim();
      addChatMsg('guess', `"${data.text}"`, pl.name, pl.color);
      if (correct) {
        pl.guessed = true;
        pl.rank = gs.nextRank++;
        if (!gs.rankings) gs.rankings = [];
        gs.rankings.push({ id: pl.id, name: pl.name, rank: pl.rank, identity: pl.identity });
        addChatMsg('system', `🎉 Correct! ${pl.name} is ${pl.identity}! (#${pl.rank})`, null, '#10B981');
        gs.currentQuestion = null;
        confetti({ particleCount: 80, spread: 50, origin: { y: 0.7 } });
        advanceTurn();
      } else {
        addChatMsg('system', `❌ Wrong! ${pl.name}'s turn is over.`, null, '#EF4444');
        gs.currentQuestion = null;
        advanceTurn();
      }
      return;
    }
  }, [addChatMsg, syncState, advanceTurn]);

  /* ═══════════════════════════════════════════════════
     CLIENT MESSAGE HANDLER
     ═══════════════════════════════════════════════════ */
  const handleClientMsg = useCallback((data) => {
    if (data.type === 'lobby-update') {
      setPlayers(data.players); setSettings(data.settings); setPhase('lobby');
    } else if (data.type === 'game-state') {
      setPhase(data.phase); setPlayers(data.players); setSettings(data.settings);
      setCurrentTurn(data.currentTurn || ''); setChat(data.chat || []);
      setCurrentQuestion(data.currentQuestion || null);
      setAssignTarget(data.assignTarget || null);
      setAssignProgress(data.assignProgress || { done: 0, total: 0 });
      setRankings(data.rankings || []);
    } else if (data.type === 'kicked') {
      setPhase('menu'); setError('You were removed from the game.');
    }
  }, []);

  /* ═══════════════════════════════════════════════════
     CONNECTION MANAGEMENT
     ═══════════════════════════════════════════════════ */
  const cleanup = useCallback(() => {
    connsRef.current = []; hostConnRef.current = null;
    if (peerRef.current) { try { peerRef.current.destroy(); } catch (_) { /* */ } peerRef.current = null; }
    myIdRef.current = ''; gsRef.current = {};
  }, []);

  const send = useCallback((data) => {
    if (isHostRef.current) processAction(myIdRef.current, data);
    else hostConnRef.current?.send(data);
  }, [processAction]);

  const createRoom = useCallback(() => {
    if (!name.trim()) { setError('Please enter your name'); return; }
    setError(''); setConnecting(true);
    const code = makeCode();
    const peer = new Peer(PREFIX + code, { debug: 0, config: { iceServers: ICE } });
    peer.on('open', (id) => {
      peerRef.current = peer; myIdRef.current = id; setRoomCode(code);
      setIsHost(true); isHostRef.current = true;
      const me = { id, name: name.trim(), color: COLORS[0], identity: null, guessed: false, rank: null };
      gsRef.current = { players: [me], phase: 'lobby', settings: { assignMode: 'manual', categories: ['celebrities', 'fictional'], customNames: [] }, currentTurn: '', chat: [], currentQuestion: null, assignTargets: {}, assignments: {}, rankings: [], nextRank: 1 };
      setPlayers([me]); setSettings(gsRef.current.settings); setPhase('lobby'); setConnecting(false);
      window.history.replaceState(null, '', '/games/who-am-i/' + code);
    });
    peer.on('connection', (conn) => {
      conn.on('open', () => {
        conn.on('data', (data) => {
          if (data.type === 'join') {
            const gs = gsRef.current;
            if (gs.players.length >= MAX_PLAYERS || gs.phase !== 'lobby') { conn.send({ type: 'kicked' }); conn.close(); return; }
            gs.players.push({ id: conn.peer, name: data.name, color: COLORS[gs.players.length % COLORS.length], identity: null, guessed: false, rank: null });
            connsRef.current.push(conn);
            syncLobby();
          } else { processAction(conn.peer, data); }
        });
        conn.on('close', () => {
          const gs = gsRef.current;
          const pl = gs.players.find(p => p.id === conn.peer);
          connsRef.current = connsRef.current.filter(c => c.peer !== conn.peer);
          if (!pl) return;
          if (gs.phase === 'lobby' || gs.phase === 'assigning') {
            gs.players = gs.players.filter(p => p.id !== conn.peer);
            if (gs.phase === 'assigning') { gs.phase = 'lobby'; gs.assignments = {}; gs.assignTargets = {}; gs.chat = []; }
            syncLobby(); return;
          }
          pl.guessed = true;
          addChatMsg('system', `${pl.name} disconnected`, null, '#EF4444');
          if (gs.currentQuestion && !gs.currentQuestion.resolved) { gs.currentQuestion = null; }
          const rem = gs.players.filter(p => !p.guessed);
          if (rem.length <= 1) {
            if (rem.length === 1) { rem[0].guessed = true; rem[0].rank = gs.nextRank++; gs.rankings.push({ id: rem[0].id, name: rem[0].name, rank: rem[0].rank, identity: rem[0].identity }); }
            gs.phase = 'results'; addChatMsg('system', '🎉 Game over!', null, '#F59E0B'); syncState(); return;
          }
          if (gs.currentTurn === pl.id) { advanceTurn(); return; }
          syncState();
        });
      });
    });
    peer.on('error', (err) => { setConnecting(false); setError('Connection error: ' + err.type); });
  }, [name, syncLobby, processAction, syncState, addChatMsg, advanceTurn]);

  const joinRoom = useCallback(() => {
    if (!name.trim()) { setError('Please enter your name'); return; }
    if (!joinCode.trim()) { setError('Please enter a room code'); return; }
    setError(''); setConnecting(true);
    const peer = new Peer(undefined, { debug: 0, config: { iceServers: ICE } });
    peer.on('open', (id) => {
      peerRef.current = peer; myIdRef.current = id;
      const conn = peer.connect(PREFIX + joinCode.trim().toUpperCase());
      conn.on('open', () => {
        hostConnRef.current = conn; conn.send({ type: 'join', name: name.trim() });
        setRoomCode(joinCode.trim().toUpperCase()); setIsHost(false); isHostRef.current = false; setConnecting(false);
      });
      conn.on('data', handleClientMsg);
      conn.on('close', () => { setError('Lost connection to host'); setPhase('menu'); cleanup(); });
      conn.on('error', () => { setConnecting(false); setError('Could not connect'); cleanup(); });
    });
    peer.on('error', (err) => {
      setConnecting(false);
      setError(err.type === 'peer-unavailable' ? 'Room not found — check the code' : 'Connection error: ' + err.type);
      cleanup();
    });
  }, [name, joinCode, handleClientMsg, cleanup]);

  /* ═══════════════════════════════════════════════════
     GAME ACTIONS
     ═══════════════════════════════════════════════════ */
  const startGame = () => {
    const gs = gsRef.current;
    if (gs.players.length < MIN_PLAYERS) return;
    gs.chat = []; gs.rankings = []; gs.nextRank = 1;
    gs.players.forEach(p => { p.identity = null; p.guessed = false; p.rank = null; });

    if (gs.settings.assignMode === 'random') {
      const pool = [];
      gs.settings.categories.forEach(c => { if (CATEGORIES[c]) pool.push(...CATEGORIES[c].items); });
      if (gs.settings.customNames?.length) pool.push(...gs.settings.customNames);
      if (pool.length < gs.players.length) { setError('Not enough names! Add more categories or custom names.'); return; }
      const shuffled = [...pool].sort(() => Math.random() - 0.5);
      gs.players.forEach((p, i) => { p.identity = shuffled[i]; });
      gs.phase = 'playing'; gs.currentTurn = gs.players[0].id; gs.currentQuestion = null;
      addChatMsg('system', '🎲 Identities randomly assigned! The game begins!', null, '#F59E0B');
      addChatMsg('system', `It's ${gs.players[0].name}'s turn!`, null, gs.players[0].color);
    } else {
      gs.phase = 'assigning'; gs.assignments = {}; gs.assignTargets = {};
      gs.players.forEach((p, i) => { gs.assignTargets[p.id] = gs.players[(i + 1) % gs.players.length].id; });
      addChatMsg('system', '✍️ Assignment phase! Give someone an identity to guess!', null, '#F59E0B');
    }
    syncState();
  };

  const submitAssignment = () => {
    if (!assignInput.trim()) return;
    setMyAssignment(assignInput.trim()); setAssignSubmitted(true);
    send({ type: 'assign', identity: assignInput.trim() });
    setAssignInput('');
  };
  const askQuestion = () => { if (!questionInput.trim()) return; send({ type: 'question', text: questionInput.trim() }); setQuestionInput(''); };
  const submitVote = (vote) => { send({ type: 'vote', vote }); };
  const makeGuessAction = () => { if (!guessInput.trim()) return; send({ type: 'guess', text: guessInput.trim() }); setGuessInput(''); setIsGuessing(false); };
  const sendChat = () => { if (!chatInput.trim()) return; send({ type: 'chat', text: chatInput.trim() }); setChatInput(''); };

  const updateSettings = (ns) => {
    if (!isHostRef.current) return;
    gsRef.current.settings = { ...gsRef.current.settings, ...ns };
    syncLobby();
  };

  const leaveGame = () => {
    cleanup(); setPhase('menu'); setIsHost(false); isHostRef.current = false;
    setPlayers([]); setChat([]); setRoomCode(''); setError(''); setCurrentTurn('');
    setCurrentQuestion(null); setRankings([]);
    window.history.replaceState(null, '', '/games/who-am-i');
  };

  const playAgain = () => {
    if (!isHostRef.current) return;
    const gs = gsRef.current;
    gs.phase = 'lobby'; gs.players.forEach(p => { p.identity = null; p.guessed = false; p.rank = null; });
    gs.currentTurn = ''; gs.currentQuestion = null; gs.chat = []; gs.rankings = []; gs.nextRank = 1; gs.assignments = {}; gs.assignTargets = {};
    setPhase('lobby');
    syncLobby();
  };

  const copyCode = () => {
    navigator.clipboard.writeText(window.location.origin + '/games/who-am-i/' + roomCode);
    setCopied(true); setTimeout(() => setCopied(false), 2000);
  };

  /* ═══════════════════════════════════════════════════
     RENDER — MENU
     ═══════════════════════════════════════════════════ */
  const renderMenu = () => (
    <motion.div key="menu" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}
      style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', padding: 20 }}>
      <div style={{ textAlign: 'center', marginBottom: 32 }}>
        <motion.div animate={{ scale: [1, 1.06, 1], rotate: [0, 3, -3, 0] }} transition={{ duration: 4, repeat: Infinity }}
          style={{ fontSize: 72, marginBottom: 8, filter: 'drop-shadow(0 0 30px rgba(245,158,11,0.3))' }}>🎭</motion.div>
        <h1 style={{ fontSize: 40, fontWeight: 900, background: 'linear-gradient(135deg, #F59E0B, #EC4899)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', letterSpacing: '-0.02em' }}>WHO AM I?</h1>
        <p style={{ color: '#71717a', fontSize: 14, marginTop: 6 }}>The classic guessing game — now online with friends</p>
      </div>
      <Glass style={{ maxWidth: 400, width: '100%', padding: 28 }}>
        <div style={{ marginBottom: 16 }}>
          <label style={{ fontSize: 12, fontWeight: 700, color: '#a1a1aa', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Your Name</label>
          <input className="wai-input" style={{ ...inputStyle, marginTop: 6 }} placeholder="Enter your name..." value={name} onChange={e => setName(e.target.value)} maxLength={20} />
        </div>
        <div style={{ display: 'flex', gap: 10, marginBottom: 16 }}>
          <Btn big color="#F59E0B" onClick={createRoom} disabled={connecting || !name.trim()} style={{ flex: 1 }}>
            {connecting ? '...' : '✨ Create Room'}
          </Btn>
        </div>
        <div style={{ height: 1, background: 'rgba(255,255,255,0.06)', margin: '8px 0 16px' }} />
        <label style={{ fontSize: 12, fontWeight: 700, color: '#a1a1aa', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Join a Room</label>
        <div style={{ display: 'flex', gap: 8, marginTop: 6 }}>
          <input className="wai-input" style={inputStyle} placeholder="Room code..." value={joinCode}
            onChange={e => setJoinCode(e.target.value.toUpperCase())} maxLength={5}
            onKeyDown={e => e.key === 'Enter' && joinRoom()} />
          <Btn color="#8B5CF6" onClick={joinRoom} disabled={connecting || !name.trim() || !joinCode.trim()}>Join</Btn>
        </div>
        {error && <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ color: '#EF4444', fontSize: 13, marginTop: 10, textAlign: 'center' }}>{error}</motion.p>}
      </Glass>
      <div style={{ display: 'flex', gap: 12, marginTop: 20 }}>
        <button onClick={() => setShowRules(true)} style={{ color: '#71717a', fontSize: 13, cursor: 'pointer', background: 'none', border: 'none', textDecoration: 'underline' }}>How to Play</button>
        <button onClick={() => { window.history.replaceState(null, '', '/tools'); window.location.reload(); }}
          style={{ color: '#71717a', fontSize: 13, cursor: 'pointer', background: 'none', border: 'none', textDecoration: 'underline' }}>← Back to Tools</button>
      </div>
    </motion.div>
  );

  /* ═══════════════════════════════════════════════════
     RENDER — LOBBY
     ═══════════════════════════════════════════════════ */
  const renderLobby = () => (
    <motion.div key="lobby" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}
      style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', minHeight: '100vh', padding: 20, paddingTop: 40 }}>
      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: 24 }}>
        <div style={{ fontSize: 36, marginBottom: 4 }}>🎭</div>
        <h2 style={{ fontSize: 24, fontWeight: 800, color: '#fef3c7' }}>Lobby</h2>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, marginTop: 8 }}>
          <span style={{ fontSize: 13, color: '#71717a' }}>Room:</span>
          <span style={{ fontSize: 18, fontWeight: 800, color: '#F59E0B', letterSpacing: '0.1em' }}>{roomCode}</span>
          <button onClick={copyCode} style={{ fontSize: 12, color: copied ? '#10B981' : '#8B5CF6', background: 'none', border: '1px solid currentColor', borderRadius: 8, padding: '3px 10px', cursor: 'pointer', fontWeight: 600 }}>
            {copied ? '✓ Copied!' : '📋 Copy Link'}
          </button>
        </div>
      </div>

      <div style={{ display: 'flex', gap: 16, maxWidth: 800, width: '100%', flexWrap: 'wrap', justifyContent: 'center' }}>
        {/* Players */}
        <Glass style={{ flex: '1 1 320px', padding: 20, minWidth: 280 }}>
          <h3 style={{ fontSize: 14, fontWeight: 700, color: '#a1a1aa', marginBottom: 12, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
            Players ({players.length}/{MAX_PLAYERS})
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {players.map(p => (
              <div key={p.id} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '8px 12px', borderRadius: 12, background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)' }}>
                <div style={{ width: 36, height: 36, borderRadius: '50%', background: `linear-gradient(135deg, ${p.color}, ${p.color}80)`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 14, fontWeight: 800, color: '#0f0a1a', flexShrink: 0 }}>
                  {p.name.charAt(0).toUpperCase()}
                </div>
                <span style={{ fontSize: 14, fontWeight: 600, color: '#fef3c7' }}>{p.name}</span>
                {p.id === myId && <span style={{ fontSize: 11, color: '#71717a' }}>(you)</span>}
                {p.id === players[0]?.id && <span style={{ fontSize: 10, background: 'rgba(245,158,11,0.15)', color: '#F59E0B', padding: '2px 8px', borderRadius: 6, fontWeight: 700 }}>HOST</span>}
              </div>
            ))}
            {players.length < MIN_PLAYERS && (
              <p style={{ fontSize: 12, color: '#71717a', textAlign: 'center', padding: 8 }}>Need at least {MIN_PLAYERS} players to start...</p>
            )}
          </div>
        </Glass>

        {/* Settings */}
        {isHost && (
          <Glass style={{ flex: '1 1 320px', padding: 20, minWidth: 280 }}>
            <h3 style={{ fontSize: 14, fontWeight: 700, color: '#a1a1aa', marginBottom: 12, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Settings</h3>
            {/* Assignment Mode */}
            <div style={{ marginBottom: 16 }}>
              <label style={{ fontSize: 12, color: '#71717a', marginBottom: 6, display: 'block' }}>Assignment Mode</label>
              <div style={{ display: 'flex', gap: 8 }}>
                {[{ k: 'manual', l: '🤝 Manual', d: 'Players assign to each other' }, { k: 'random', l: '🎲 Random', d: 'From selected categories' }].map(m => (
                  <button key={m.k} onClick={() => updateSettings({ assignMode: m.k })}
                    style={{ flex: 1, padding: '10px 12px', borderRadius: 12, background: settings.assignMode === m.k ? 'rgba(245,158,11,0.1)' : 'rgba(255,255,255,0.02)', border: `1.5px solid ${settings.assignMode === m.k ? 'rgba(245,158,11,0.4)' : 'rgba(255,255,255,0.06)'}`, color: settings.assignMode === m.k ? '#fef3c7' : '#71717a', fontSize: 13, fontWeight: 600, cursor: 'pointer', textAlign: 'left', transition: 'all 0.15s' }}>
                    <div>{m.l}</div>
                    <div style={{ fontSize: 10, marginTop: 2, opacity: 0.7 }}>{m.d}</div>
                  </button>
                ))}
              </div>
            </div>
            {/* Categories (for random mode) */}
            {settings.assignMode === 'random' && (
              <>
                <label style={{ fontSize: 12, color: '#71717a', marginBottom: 6, display: 'block' }}>Categories</label>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 12 }}>
                  {Object.entries(CATEGORIES).map(([k, c]) => {
                    const sel = settings.categories.includes(k);
                    return (
                      <button key={k} onClick={() => {
                        const cats = sel ? settings.categories.filter(x => x !== k) : [...settings.categories, k];
                        updateSettings({ categories: cats });
                      }}
                        style={{ padding: '6px 12px', borderRadius: 10, background: sel ? 'rgba(139,92,246,0.12)' : 'rgba(255,255,255,0.02)', border: `1.5px solid ${sel ? 'rgba(139,92,246,0.4)' : 'rgba(255,255,255,0.06)'}`, color: sel ? '#c4b5fd' : '#6b7280', fontSize: 12, fontWeight: 600, cursor: 'pointer', transition: 'all 0.15s' }}>
                        {c.emoji} {c.name} ({c.items.length})
                      </button>
                    );
                  })}
                </div>
                {/* Custom Names */}
                <label style={{ fontSize: 12, color: '#71717a', marginBottom: 6, display: 'block' }}>Custom Names</label>
                <div style={{ display: 'flex', gap: 6, marginBottom: 8 }}>
                  <input className="wai-input" style={{ ...inputStyle, fontSize: 12, padding: '7px 10px' }} placeholder="Add a name..."
                    value={customNameInput} onChange={e => setCustomNameInput(e.target.value)}
                    onKeyDown={e => { if (e.key === 'Enter' && customNameInput.trim()) { updateSettings({ customNames: [...(settings.customNames || []), customNameInput.trim()] }); setCustomNameInput(''); } }} />
                  <Btn small color="#8B5CF6" onClick={() => { if (customNameInput.trim()) { updateSettings({ customNames: [...(settings.customNames || []), customNameInput.trim()] }); setCustomNameInput(''); } }}>+</Btn>
                </div>
                {settings.customNames?.length > 0 && (
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 4, marginBottom: 8 }}>
                    {settings.customNames.map((n, i) => (
                      <span key={i} style={{ display: 'inline-flex', alignItems: 'center', gap: 4, padding: '3px 10px', borderRadius: 8, background: 'rgba(236,72,153,0.1)', border: '1px solid rgba(236,72,153,0.2)', color: '#f9a8d4', fontSize: 11, fontWeight: 600 }}>
                        {n}
                        <button onClick={() => updateSettings({ customNames: settings.customNames.filter((_, j) => j !== i) })}
                          style={{ background: 'none', border: 'none', color: '#f9a8d4', cursor: 'pointer', fontSize: 12, padding: 0, lineHeight: 1 }}>×</button>
                      </span>
                    ))}
                  </div>
                )}
                <p style={{ fontSize: 11, color: totalPool >= players.length ? '#71717a' : '#EF4444' }}>
                  Pool: {totalPool} names available {totalPool < players.length ? `(need ${players.length})` : ''}
                </p>
              </>
            )}
          </Glass>
        )}
        {!isHost && (
          <Glass style={{ flex: '1 1 320px', padding: 20, minWidth: 280 }}>
            <h3 style={{ fontSize: 14, fontWeight: 700, color: '#a1a1aa', marginBottom: 12, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Settings</h3>
            <p style={{ fontSize: 13, color: '#71717a' }}>Mode: <b style={{ color: '#fef3c7' }}>{settings.assignMode === 'manual' ? '🤝 Manual' : '🎲 Random'}</b></p>
            {settings.assignMode === 'random' && (
              <p style={{ fontSize: 13, color: '#71717a', marginTop: 4 }}>Categories: {settings.categories.map(c => CATEGORIES[c]?.emoji || c).join(' ')}</p>
            )}
            <p style={{ fontSize: 12, color: '#71717a', marginTop: 12, fontStyle: 'italic' }}>Waiting for the host to start...</p>
          </Glass>
        )}
      </div>

      {/* Actions */}
      <div style={{ display: 'flex', gap: 10, marginTop: 20 }}>
        {isHost && <Btn big color="#F59E0B" onClick={startGame} disabled={!canStart}>
          {settings.assignMode === 'random' ? '🎲 Start Game' : '✍️ Start Assigning'}
        </Btn>}
        <Btn color="#6b7280" onClick={leaveGame}>Leave</Btn>
        <button onClick={() => setShowRules(true)} style={{ color: '#71717a', fontSize: 13, cursor: 'pointer', background: 'none', border: 'none', textDecoration: 'underline' }}>Rules</button>
      </div>
      {error && <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ color: '#EF4444', fontSize: 13, marginTop: 10 }}>{error}</motion.p>}
    </motion.div>
  );

  /* ═══════════════════════════════════════════════════
     RENDER — ASSIGNING
     ═══════════════════════════════════════════════════ */
  const renderAssigning = () => (
    <motion.div key="assign" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}
      style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', padding: 20 }}>
      <Glass style={{ maxWidth: 440, width: '100%', padding: 28, textAlign: 'center' }}>
        <div style={{ fontSize: 48, marginBottom: 8 }}>✍️</div>
        {assignSubmitted ? (
          <>
            <h2 style={{ fontSize: 20, fontWeight: 800, color: '#10B981', marginBottom: 12 }}>Submitted!</h2>
            <p style={{ color: '#a1a1aa', fontSize: 14 }}>You assigned <b style={{ color: '#fef3c7' }}>&quot;{myAssignment}&quot;</b> to <b style={{ color: '#F59E0B' }}>{assignTarget}</b></p>
            <p style={{ color: '#71717a', fontSize: 13, marginTop: 16 }}>Waiting for others...</p>
          </>
        ) : (
          <>
            <h2 style={{ fontSize: 20, fontWeight: 800, color: '#fef3c7', marginBottom: 8 }}>Give an Identity!</h2>
            <p style={{ color: '#a1a1aa', fontSize: 14, marginBottom: 20 }}>
              Choose who <b style={{ color: '#F59E0B' }}>{assignTarget}</b> will be!<br />
              <span style={{ fontSize: 12, color: '#71717a' }}>Pick a person, character, animal, or anything!</span>
            </p>
            <div style={{ display: 'flex', gap: 8 }}>
              <input className="wai-input" style={inputStyle} placeholder="e.g. Batman, Einstein, a Penguin..."
                value={assignInput} onChange={e => setAssignInput(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && submitAssignment()} autoFocus />
              <Btn color="#F59E0B" onClick={submitAssignment} disabled={!assignInput.trim()}>✓</Btn>
            </div>
          </>
        )}
        <div style={{ marginTop: 20, padding: '8px 16px', borderRadius: 10, background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)' }}>
          <div style={{ fontSize: 12, color: '#71717a' }}>Progress</div>
          <div style={{ display: 'flex', gap: 4, marginTop: 6, justifyContent: 'center' }}>
            {Array.from({ length: assignProgress.total }).map((_, i) => (
              <div key={i} style={{ width: 24, height: 6, borderRadius: 3, background: i < assignProgress.done ? '#F59E0B' : 'rgba(255,255,255,0.06)', transition: 'background 0.3s' }} />
            ))}
          </div>
          <div style={{ fontSize: 11, color: '#71717a', marginTop: 4 }}>{assignProgress.done}/{assignProgress.total}</div>
        </div>
      </Glass>
    </motion.div>
  );

  /* ═══════════════════════════════════════════════════
     RENDER — PLAYING
     ═══════════════════════════════════════════════════ */
  const renderInputArea = () => {
    if (myPlayer?.guessed) return (
      <div style={{ display: 'flex', gap: 8 }}>
        <input className="wai-input" style={inputStyle} placeholder="Send a message..." value={chatInput}
          onChange={e => setChatInput(e.target.value)} onKeyDown={e => e.key === 'Enter' && sendChat()} />
        <Btn color="#6b7280" onClick={sendChat} disabled={!chatInput.trim()}>Send</Btn>
      </div>
    );
    if (isMyTurn) {
      if (currentQuestion && !currentQuestion.resolved) return (
        <div style={{ textAlign: 'center', padding: 10, color: '#a1a1aa', fontSize: 13 }}>
          <motion.span animate={{ opacity: [0.5, 1, 0.5] }} transition={{ duration: 1.5, repeat: Infinity }}>
            ⏳ Waiting for answers... ({currentQuestion.voteCount}/{currentQuestion.voteTotal})
          </motion.span>
        </div>
      );
      if (isGuessing) return (
        <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
          <input className="wai-input" style={{ ...inputStyle, borderColor: 'rgba(236,72,153,0.3)' }} placeholder="Who do you think you are?"
            value={guessInput} onChange={e => setGuessInput(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && makeGuessAction()} autoFocus />
          <Btn color="#EC4899" onClick={makeGuessAction} disabled={!guessInput.trim()}>Guess!</Btn>
          <Btn color="#6b7280" small onClick={() => setIsGuessing(false)}>Back</Btn>
        </div>
      );
      return (
        <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
          <input className="wai-input" style={inputStyle} placeholder="Ask a yes/no question..."
            value={questionInput} onChange={e => setQuestionInput(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && askQuestion()} autoFocus />
          <Btn color="#F59E0B" onClick={askQuestion} disabled={!questionInput.trim()}>Ask</Btn>
          <Btn color="#EC4899" small onClick={() => setIsGuessing(true)} style={{ fontSize: 11 }}>🎯 Guess</Btn>
        </div>
      );
    }
    // Not my turn
    if (currentQuestion && !currentQuestion.resolved && currentQuestion.myVote === undefined && !myPlayer?.guessed) return (
      <div>
        <div style={{ fontSize: 12, color: '#a1a1aa', textAlign: 'center', marginBottom: 8 }}>
          {currentPlayer?.name} asks: <b style={{ color: '#fef3c7' }}>{currentQuestion.text}</b>
        </div>
        <div style={{ display: 'flex', gap: 10, justifyContent: 'center' }}>
          <Btn big color="#10B981" onClick={() => submitVote(true)}>👍 Yes</Btn>
          <Btn big color="#EF4444" onClick={() => submitVote(false)}>👎 No</Btn>
        </div>
      </div>
    );
    if (currentQuestion && !currentQuestion.resolved && currentQuestion.myVote !== undefined) return (
      <div style={{ textAlign: 'center', padding: 10, color: '#71717a', fontSize: 13 }}>
        ✓ Vote submitted ({currentQuestion.voteCount}/{currentQuestion.voteTotal})
      </div>
    );
    return (
      <div style={{ display: 'flex', gap: 8 }}>
        <input className="wai-input" style={inputStyle} placeholder="Send a message..." value={chatInput}
          onChange={e => setChatInput(e.target.value)} onKeyDown={e => e.key === 'Enter' && sendChat()} />
        <Btn color="#6b7280" onClick={sendChat} disabled={!chatInput.trim()}>Send</Btn>
      </div>
    );
  };

  const renderPlaying = () => (
    <motion.div key="playing" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      style={{ display: 'flex', flexDirection: 'column', height: '100vh', position: 'relative', zIndex: 1 }}>
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px 16px', flexShrink: 0 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <span style={{ fontSize: 20 }}>🎭</span>
          <span style={{ fontSize: 12, color: '#71717a' }}>Room:</span>
          <span style={{ fontSize: 14, fontWeight: 700, color: '#F59E0B', letterSpacing: '0.08em' }}>{roomCode}</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          {currentPlayer && (
            <div style={{ fontSize: 12, color: '#a1a1aa' }}>
              Turn: <b style={{ color: currentPlayer.color }}>{currentPlayer.id === myId ? 'You!' : currentPlayer.name}</b>
            </div>
          )}
          <button onClick={() => setShowRules(true)} style={{ color: '#71717a', fontSize: 12, cursor: 'pointer', background: 'none', border: 'none' }}>?</button>
          <Btn small color="#6b7280" onClick={leaveGame}>Leave</Btn>
        </div>
      </div>

      {/* Player strip */}
      <div className="wai-scroll" style={{ display: 'flex', gap: 6, padding: '0 12px 8px', overflowX: 'auto', flexShrink: 0 }}>
        {players.map(p => (
          <div key={p.id} style={{
            display: 'flex', alignItems: 'center', gap: 6, padding: '6px 10px', borderRadius: 12, flexShrink: 0,
            background: p.id === currentTurn ? `${p.color}0a` : 'rgba(255,255,255,0.02)',
            border: `1.5px solid ${p.id === currentTurn ? p.color + '40' : 'rgba(255,255,255,0.05)'}`,
            opacity: p.guessed ? 0.45 : 1, position: 'relative',
          }}>
            {p.id === currentTurn && !p.guessed && (
              <motion.div animate={{ opacity: [0.2, 0.5, 0.2] }} transition={{ duration: 2, repeat: Infinity }}
                style={{ position: 'absolute', inset: -1, borderRadius: 12, border: `2px solid ${p.color}`, pointerEvents: 'none' }} />
            )}
            <div style={{ width: 28, height: 28, borderRadius: '50%', background: `linear-gradient(135deg, ${p.color}, ${p.color}80)`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 11, fontWeight: 800, color: '#0f0a1a', flexShrink: 0 }}>
              {p.name.charAt(0).toUpperCase()}
            </div>
            <div style={{ minWidth: 0 }}>
              <div style={{ fontSize: 11, fontWeight: 700, color: p.guessed ? '#6b7280' : '#fef3c7', whiteSpace: 'nowrap' }}>
                {p.name}{p.id === myId ? ' (you)' : ''}{p.guessed ? ' ✓' : ''}
              </div>
              <div style={{ fontSize: 10, fontWeight: 600, color: p.id === myId ? '#8B5CF6' : p.color, whiteSpace: 'nowrap' }}>
                {p.id === myId ? '???' : (p.identity || '...')}
              </div>
            </div>
            {p.rank && (
              <div style={{ width: 18, height: 18, borderRadius: '50%', background: p.rank === 1 ? '#F59E0B' : p.rank === 2 ? '#94a3b8' : '#CD7F32', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 10, fontWeight: 800, color: '#0f0a1a', flexShrink: 0 }}>
                {p.rank}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Chat area */}
      <Glass style={{ flex: 1, display: 'flex', flexDirection: 'column', margin: '0 12px 12px', overflow: 'hidden', borderRadius: 16 }}>
        <div className="wai-scroll" style={{ flex: 1, overflowY: 'auto', padding: '12px 16px' }}>
          {chat.map(msg => <ChatMsg key={msg.id} msg={msg} />)}
          <div ref={chatEndRef} />
        </div>
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', padding: 12 }}>
          {renderInputArea()}
        </div>
      </Glass>
    </motion.div>
  );

  /* ═══════════════════════════════════════════════════
     RENDER — RESULTS
     ═══════════════════════════════════════════════════ */
  const renderResults = () => (
    <motion.div key="results" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
      style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', padding: 20 }}>
      <motion.div animate={{ scale: [1, 1.08, 1] }} transition={{ duration: 2, repeat: Infinity }}
        style={{ fontSize: 64, marginBottom: 8 }}>🏆</motion.div>
      <h2 style={{ fontSize: 28, fontWeight: 900, color: '#fef3c7', marginBottom: 24 }}>Game Over!</h2>

      <Glass style={{ maxWidth: 440, width: '100%', padding: 24 }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          {rankings.map((r, i) => (
            <motion.div key={r.id} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.15 }}
              style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '10px 14px', borderRadius: 14, background: i === 0 ? 'rgba(245,158,11,0.08)' : 'rgba(255,255,255,0.02)', border: `1.5px solid ${i === 0 ? 'rgba(245,158,11,0.25)' : 'rgba(255,255,255,0.05)'}` }}>
              <div style={{ width: 32, height: 32, borderRadius: '50%', background: i === 0 ? '#F59E0B' : i === 1 ? '#94a3b8' : i === 2 ? '#CD7F32' : 'rgba(255,255,255,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 14, fontWeight: 800, color: i < 3 ? '#0f0a1a' : '#a1a1aa', flexShrink: 0 }}>
                {r.rank}
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 14, fontWeight: 700, color: '#fef3c7' }}>{r.name}</div>
                <div style={{ fontSize: 12, color: '#a1a1aa' }}>was <b style={{ color: '#F59E0B' }}>{r.identity}</b></div>
              </div>
              {i === 0 && <span style={{ fontSize: 20 }}>👑</span>}
            </motion.div>
          ))}
          {/* Show unguessed players */}
          {players.filter(p => !rankings.find(r => r.id === p.id)).map(p => (
            <div key={p.id} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '8px 14px', borderRadius: 14, background: 'rgba(255,255,255,0.01)', border: '1px solid rgba(255,255,255,0.04)', opacity: 0.5 }}>
              <div style={{ width: 32, height: 32, borderRadius: '50%', background: 'rgba(255,255,255,0.06)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 12, color: '#6b7280' }}>—</div>
              <div>
                <div style={{ fontSize: 13, color: '#6b7280' }}>{p.name}</div>
                <div style={{ fontSize: 11, color: '#52525b' }}>disconnected</div>
              </div>
            </div>
          ))}
        </div>
      </Glass>

      <div style={{ display: 'flex', gap: 10, marginTop: 20 }}>
        {isHost && <Btn big color="#F59E0B" onClick={playAgain}>🔄 Play Again</Btn>}
        <Btn color="#6b7280" onClick={leaveGame}>Leave</Btn>
      </div>
    </motion.div>
  );

  /* ═══════════════════════════════════════════════════
     MAIN RETURN
     ═══════════════════════════════════════════════════ */
  return (
    <div className="fixed inset-0 overflow-hidden" style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" }}>
      <BG />
      <AnimatePresence>{showRules && <Rules onClose={() => setShowRules(false)} />}</AnimatePresence>
      <div className="relative z-10" style={{ height: '100vh' }}>
        <AnimatePresence mode="wait">
          {phase === 'menu' && renderMenu()}
          {phase === 'lobby' && renderLobby()}
          {phase === 'assigning' && renderAssigning()}
          {phase === 'playing' && renderPlaying()}
          {phase === 'results' && renderResults()}
        </AnimatePresence>
      </div>
    </div>
  );
}
