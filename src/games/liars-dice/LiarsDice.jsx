import React, { useState, useEffect, useRef, useCallback } from 'react';
import Peer from 'peerjs';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';

/* ═══════════════════════════════════════════════════
   CONSTANTS
   ═══════════════════════════════════════════════════ */
const PREFIX = 'liar-';
const ICE = [{ urls: 'stun:stun.l.google.com:19302' }];
const START_DICE = 5;
const MIN_PLAYERS = 2;
const MAX_PLAYERS = 8;
const PLAYER_COLORS = [
  '#22d3ee', '#a855f7', '#f97316', '#34d399',
  '#facc15', '#ec4899', '#818cf8', '#fb923c',
];

const makeCode = () => {
  const c = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  return Array.from({ length: 5 }, () => c[Math.floor(Math.random() * c.length)]).join('');
};
const roll = (n) => Array.from({ length: n }, () => Math.floor(Math.random() * 6) + 1);
const getNext = (players, currentId) => {
  const a = players.filter(p => !p.eliminated);
  const i = a.findIndex(p => p.id === currentId);
  return a[(i + 1) % a.length].id;
};
const isValidBid = (q, v, cur) => {
  if (q < 1 || v < 1 || v > 6) return false;
  if (!cur) return true;
  if (q > cur.quantity) return true;
  if (q === cur.quantity && v > cur.value) return true;
  return false;
};

/* ═══════════════════════════════════════════════════
   ANIMATED BACKGROUND
   ═══════════════════════════════════════════════════ */
const BG = () => (
  <div className="fixed inset-0 overflow-hidden" style={{ background: '#07080F' }}>
    <div className="absolute w-[700px] h-[700px] rounded-full opacity-[0.07]"
      style={{ top: '-15%', left: '-10%', background: 'radial-gradient(circle, #22d3ee, transparent 70%)', animation: 'bgf1 22s ease-in-out infinite' }} />
    <div className="absolute w-[500px] h-[500px] rounded-full opacity-[0.06]"
      style={{ bottom: '-10%', right: '-5%', background: 'radial-gradient(circle, #a855f7, transparent 70%)', animation: 'bgf2 28s ease-in-out infinite' }} />
    <div className="absolute w-[350px] h-[350px] rounded-full opacity-[0.05]"
      style={{ top: '50%', left: '60%', background: 'radial-gradient(circle, #ec4899, transparent 70%)', animation: 'bgf3 18s ease-in-out infinite' }} />
    <div className="absolute inset-0 opacity-[0.03]"
      style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,0.15) 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
    <style>{`
      @keyframes bgf1{0%,100%{transform:translate(0,0)}50%{transform:translate(60px,40px)}}
      @keyframes bgf2{0%,100%{transform:translate(0,0)}50%{transform:translate(-50px,-30px)}}
      @keyframes bgf3{0%,100%{transform:translate(0,0)}50%{transform:translate(40px,-50px)}}
    `}</style>
  </div>
);

/* ═══════════════════════════════════════════════════
   DICE COMPONENT
   ═══════════════════════════════════════════════════ */
const DOT_POS = {
  1: [[1, 1]],
  2: [[0, 2], [2, 0]],
  3: [[0, 2], [1, 1], [2, 0]],
  4: [[0, 0], [0, 2], [2, 0], [2, 2]],
  5: [[0, 0], [0, 2], [1, 1], [2, 0], [2, 2]],
  6: [[0, 0], [0, 2], [1, 0], [1, 2], [2, 0], [2, 2]],
};

const Die = ({ value, size = 52, glow = false, color = '#22d3ee', delay = 0 }) => (
  <motion.div
    initial={{ scale: 0, rotateZ: -90 }}
    animate={{ scale: 1, rotateZ: 0 }}
    transition={{ type: 'spring', stiffness: 400, damping: 20, delay }}
    style={{
      width: size, height: size, borderRadius: size * 0.2,
      background: 'linear-gradient(145deg, #1a1a2e, #0f0f23)',
      border: `2px solid ${glow ? color + '90' : 'rgba(255,255,255,0.08)'}`,
      boxShadow: glow ? `0 0 20px ${color}30, inset 0 1px 0 rgba(255,255,255,0.05)` : 'inset 0 1px 0 rgba(255,255,255,0.05)',
      display: 'grid', gridTemplateRows: '1fr 1fr 1fr', gridTemplateColumns: '1fr 1fr 1fr',
      padding: size * 0.12, flexShrink: 0,
    }}
  >
    {[0, 1, 2].map(r => [0, 1, 2].map(c => {
      const has = DOT_POS[value]?.some(([dr, dc]) => dr === r && dc === c);
      return (
        <div key={`${r}${c}`} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          {has && <div style={{
            width: size * 0.17, height: size * 0.17, borderRadius: '50%',
            background: glow ? color : '#e2e8f0',
            boxShadow: glow ? `0 0 6px ${color}` : '0 0 2px rgba(255,255,255,0.3)',
          }} />}
        </div>
      );
    }))}
  </motion.div>
);

/* small die for value selector */
const MiniDie = ({ value, size = 36, selected, onClick }) => (
  <button onClick={onClick} style={{
    width: size, height: size, borderRadius: size * 0.2,
    background: selected ? 'linear-gradient(145deg, #164e63, #0e7490)' : 'linear-gradient(145deg, #1a1a2e, #0f0f23)',
    border: `2px solid ${selected ? '#22d3ee' : 'rgba(255,255,255,0.08)'}`,
    boxShadow: selected ? '0 0 12px rgba(34,211,238,0.3)' : 'none',
    display: 'grid', gridTemplateRows: '1fr 1fr 1fr', gridTemplateColumns: '1fr 1fr 1fr',
    padding: size * 0.1, cursor: 'pointer', transition: 'all 0.15s',
  }}>
    {[0, 1, 2].map(r => [0, 1, 2].map(c => {
      const has = DOT_POS[value]?.some(([dr, dc]) => dr === r && dc === c);
      return (
        <div key={`${r}${c}`} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          {has && <div style={{
            width: size * 0.16, height: size * 0.16, borderRadius: '50%',
            background: selected ? '#22d3ee' : '#94a3b8',
          }} />}
        </div>
      );
    }))}
  </button>
);

/* ═══════════════════════════════════════════════════
   GLASS CARD
   ═══════════════════════════════════════════════════ */
const Glass = ({ children, className = '', style = {}, ...props }) => (
  <div className={className} style={{
    background: 'rgba(255,255,255,0.03)',
    backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)',
    border: '1px solid rgba(255,255,255,0.06)',
    borderRadius: 16, ...style,
  }} {...props}>{children}</div>
);

/* ═══════════════════════════════════════════════════
   NEON BUTTON
   ═══════════════════════════════════════════════════ */
const Btn = ({ children, color = '#22d3ee', disabled, onClick, big, className = '', style: s = {} }) => (
  <motion.button
    whileHover={disabled ? {} : { scale: 1.03, boxShadow: `0 0 24px ${color}40` }}
    whileTap={disabled ? {} : { scale: 0.97 }}
    disabled={disabled}
    onClick={onClick}
    className={className}
    style={{
      padding: big ? '14px 36px' : '10px 24px',
      borderRadius: 12,
      background: disabled ? 'rgba(255,255,255,0.04)' : `linear-gradient(135deg, ${color}20, ${color}10)`,
      border: `1.5px solid ${disabled ? 'rgba(255,255,255,0.06)' : color + '60'}`,
      color: disabled ? '#475569' : '#f1f5f9',
      fontWeight: 700,
      fontSize: big ? 16 : 14,
      letterSpacing: '0.03em',
      cursor: disabled ? 'not-allowed' : 'pointer',
      transition: 'all 0.15s',
      textTransform: 'uppercase',
      ...s,
    }}
  >{children}</motion.button>
);

/* ═══════════════════════════════════════════════════
   PLAYER BADGE
   ═══════════════════════════════════════════════════ */
const Badge = ({ player, isCurrent, isMe, small }) => {
  const sz = small ? 32 : 40;
  return (
    <div style={{
      display: 'flex', alignItems: 'center', gap: small ? 8 : 10,
      padding: small ? '6px 10px' : '8px 14px',
      borderRadius: 12,
      background: isCurrent ? `${player.color}10` : 'rgba(255,255,255,0.02)',
      border: `1.5px solid ${isCurrent ? player.color + '50' : 'rgba(255,255,255,0.05)'}`,
      opacity: player.eliminated ? 0.35 : 1,
      position: 'relative',
    }}>
      {isCurrent && !player.eliminated && (
        <motion.div
          animate={{ opacity: [0.3, 0.7, 0.3] }}
          transition={{ duration: 2, repeat: Infinity }}
          style={{
            position: 'absolute', inset: -1, borderRadius: 12,
            border: `2px solid ${player.color}`,
            pointerEvents: 'none',
          }}
        />
      )}
      <div style={{
        width: sz, height: sz, borderRadius: '50%',
        background: `linear-gradient(135deg, ${player.color}, ${player.color}80)`,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontSize: small ? 13 : 15, fontWeight: 800, color: '#0a0e1a',
        flexShrink: 0,
      }}>
        {player.name.charAt(0).toUpperCase()}
      </div>
      <div style={{ minWidth: 0 }}>
        <div style={{
          fontSize: small ? 12 : 13, fontWeight: 700,
          color: player.eliminated ? '#475569' : '#f1f5f9',
          textDecoration: player.eliminated ? 'line-through' : 'none',
          whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis',
        }}>
          {player.name}{isMe ? ' (you)' : ''}
        </div>
        <div style={{ display: 'flex', gap: 3, marginTop: 2 }}>
          {Array.from({ length: START_DICE }).map((_, i) => (
            <div key={i} style={{
              width: small ? 6 : 7, height: small ? 6 : 7, borderRadius: '50%',
              background: i < player.diceCount ? player.color : 'rgba(255,255,255,0.08)',
              transition: 'background 0.3s',
            }} />
          ))}
        </div>
      </div>
    </div>
  );
};

/* ═══════════════════════════════════════════════════
   RULES MODAL
   ═══════════════════════════════════════════════════ */
const Rules = ({ onClose }) => (
  <motion.div
    initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
    style={{ position: 'fixed', inset: 0, zIndex: 100, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 16 }}
    onClick={onClose}
  >
    <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.7)', backdropFilter: 'blur(4px)' }} />
    <motion.div
      initial={{ scale: 0.9, y: 20 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.9 }}
      onClick={e => e.stopPropagation()}
      style={{
        position: 'relative', maxWidth: 460, width: '100%', maxHeight: '80vh', overflowY: 'auto',
        background: '#12141f', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 20, padding: '28px 24px',
      }}
    >
      <h2 style={{ fontSize: 22, fontWeight: 800, color: '#f1f5f9', marginBottom: 16 }}>How to Play</h2>
      <div style={{ fontSize: 14, lineHeight: 1.7, color: '#94a3b8' }}>
        <p style={{ marginBottom: 12 }}>Each player starts with <b style={{ color: '#22d3ee' }}>5 dice</b>. At the start of each round, everyone rolls secretly — you can only see your own!</p>
        <p style={{ fontWeight: 700, color: '#f1f5f9', marginBottom: 6 }}>On your turn:</p>
        <ul style={{ paddingLeft: 20, marginBottom: 12 }}>
          <li style={{ marginBottom: 4 }}><b style={{ color: '#22d3ee' }}>Raise the bid</b> — claim there are at least X dice showing a certain face value among ALL players</li>
          <li><b style={{ color: '#ef4444' }}>Call LIAR!</b> — challenge the previous player's bid</li>
        </ul>
        <p style={{ fontWeight: 700, color: '#f1f5f9', marginBottom: 6 }}>When LIAR is called:</p>
        <ul style={{ paddingLeft: 20, marginBottom: 12 }}>
          <li style={{ marginBottom: 4 }}>All dice are revealed</li>
          <li style={{ marginBottom: 4 }}>If the bid was <b style={{ color: '#34d399' }}>correct</b> (or even more): the <b>challenger</b> loses a die</li>
          <li>If the bid was <b style={{ color: '#ef4444' }}>wrong</b>: the <b>bidder</b> loses a die</li>
        </ul>
        <p style={{ marginBottom: 12 }}>Lose all your dice = you're out! <b style={{ color: '#facc15' }}>Last player standing wins!</b></p>
        <p style={{ fontWeight: 700, color: '#f1f5f9', marginBottom: 6 }}>Bidding rules:</p>
        <ul style={{ paddingLeft: 20 }}>
          <li style={{ marginBottom: 4 }}>Each new bid must be <b>higher</b> than the last</li>
          <li>Higher = more dice, OR same amount with a higher face value</li>
        </ul>
      </div>
      <button onClick={onClose} style={{
        marginTop: 20, width: '100%', padding: '10px', borderRadius: 10,
        background: 'rgba(34,211,238,0.1)', border: '1px solid rgba(34,211,238,0.3)',
        color: '#22d3ee', fontWeight: 700, cursor: 'pointer', fontSize: 14,
      }}>Got it!</button>
    </motion.div>
  </motion.div>
);

/* ═══════════════════════════════════════════════════
   MAIN COMPONENT
   ═══════════════════════════════════════════════════ */
export default function LiarsDice() {
  /* ── state ── */
  const [screen, setScreen] = useState('menu');
  const [name, setName] = useState(() => localStorage.getItem('ld-name') || '');
  const [roomCode, setRoomCode] = useState('');
  const [joinCode, setJoinCode] = useState('');
  const [isHost, setIsHost] = useState(false);
  const [error, setError] = useState('');
  const [connecting, setConnecting] = useState(false);
  const [copied, setCopied] = useState(false);
  const [showRules, setShowRules] = useState(false);

  const [players, setPlayers] = useState([]);
  const [myDice, setMyDice] = useState([]);
  const [displayDice, setDisplayDice] = useState([]);
  const [isRolling, setIsRolling] = useState(false);
  const [currentBid, setCurrentBid] = useState(null);
  const [currentPlayerId, setCurrentPlayerId] = useState('');
  const [roundResult, setRoundResult] = useState(null);
  const [gameWinner, setGameWinner] = useState(null);
  const [bidQty, setBidQty] = useState(1);
  const [bidVal, setBidVal] = useState(2);
  const [log, setLog] = useState([]);

  const peerRef = useRef(null);
  const connsRef = useRef([]);
  const hostConnRef = useRef(null);
  const myIdRef = useRef('');
  const gsRef = useRef({});
  const resultTimerRef = useRef(null);

  /* ── helpers ── */
  const myId = myIdRef.current;
  const totalDice = players.filter(p => !p.eliminated).reduce((s, p) => s + p.diceCount, 0);
  const isMyTurn = currentPlayerId === myId && screen === 'game';
  const canChallenge = isMyTurn && currentBid !== null;

  const addLog = useCallback((msg) => {
    setLog(prev => [...prev.slice(-30), { id: Date.now() + Math.random(), msg }]);
  }, []);

  /* ── auto-detect join code from URL ── */
  useEffect(() => {
    const m = window.location.pathname.match(/\/games\/liars-dice\/([A-Z0-9]+)/i);
    if (m) setJoinCode(m[1].toUpperCase());
  }, []);

  /* ── save name ── */
  useEffect(() => { if (name) localStorage.setItem('ld-name', name); }, [name]);

  /* ── dice roll animation ── */
  useEffect(() => {
    if (!myDice.length) { setDisplayDice([]); return; }
    setIsRolling(true);
    const iv = setInterval(() => {
      setDisplayDice(myDice.map(() => Math.floor(Math.random() * 6) + 1));
    }, 70);
    const t = setTimeout(() => { clearInterval(iv); setDisplayDice([...myDice]); setIsRolling(false); }, 900);
    return () => { clearInterval(iv); clearTimeout(t); };
  }, [myDice]);

  /* ── cleanup on unmount ── */
  useEffect(() => {
    return () => {
      if (resultTimerRef.current) clearTimeout(resultTimerRef.current);
      if (peerRef.current) { try { peerRef.current.destroy(); } catch (_) { } }
    };
  }, []);

  /* ═══════════════════════════════════════════════════
     PEER JS — SYNC FUNCTIONS (host only)
     ═══════════════════════════════════════════════════ */
  const syncState = useCallback(() => {
    const gs = gsRef.current;
    const me = gs.players.find(p => p.id === myIdRef.current);
    setMyDice(me && !me.eliminated ? [...me.dice] : []);
    setPlayers(gs.players.map(p => ({ ...p, dice: undefined })));
    setCurrentBid(gs.currentBid || null);
    setCurrentPlayerId(gs.currentPlayerId || '');
    setScreen('game');

    connsRef.current.forEach(conn => {
      const pl = gs.players.find(p => p.id === conn.peer);
      try {
        conn.send({
          type: 'game-state',
          players: gs.players.map(p => ({ id: p.id, name: p.name, diceCount: p.diceCount, eliminated: p.eliminated, color: p.color })),
          currentBid: gs.currentBid,
          currentPlayerId: gs.currentPlayerId,
          yourDice: pl && !pl.eliminated ? pl.dice : [],
        });
      } catch (_) { }
    });
  }, []);

  const syncRoundResult = useCallback((result) => {
    const gs = gsRef.current;
    const pls = gs.players.map(p => ({ id: p.id, name: p.name, diceCount: p.diceCount, eliminated: p.eliminated, color: p.color }));
    setRoundResult(result);
    setPlayers(pls);
    setScreen('result');

    connsRef.current.forEach(conn => {
      try { conn.send({ type: 'round-result', ...result, players: pls }); } catch (_) { }
    });
  }, []);

  const syncGameOver = useCallback((winner) => {
    setGameWinner(winner);
    setScreen('gameover');
    connsRef.current.forEach(conn => {
      try { conn.send({ type: 'game-over', winner }); } catch (_) { }
    });
    confetti({ particleCount: 200, spread: 90, origin: { y: 0.6 } });
  }, []);

  const syncLobby = useCallback(() => {
    const gs = gsRef.current;
    const pls = gs.players.map(p => ({ id: p.id, name: p.name, color: p.color, diceCount: START_DICE, eliminated: false }));
    setPlayers(pls);
    connsRef.current.forEach(conn => {
      try { conn.send({ type: 'lobby-update', players: pls }); } catch (_) { }
    });
  }, []);

  /* ═══════════════════════════════════════════════════
     GAME LOGIC (host)
     ═══════════════════════════════════════════════════ */
  const startNewRound = useCallback((startId) => {
    const gs = gsRef.current;
    gs.players.forEach(p => { if (!p.eliminated) p.dice = roll(p.diceCount); });
    gs.currentBid = null;

    const active = gs.players.filter(p => !p.eliminated);
    let starter = active.find(p => p.id === startId);
    if (!starter) {
      const oi = gs.players.findIndex(p => p.id === startId);
      for (let i = 1; i < gs.players.length; i++) {
        const np = gs.players[(oi + i) % gs.players.length];
        if (!np.eliminated) { starter = np; break; }
      }
    }
    gs.currentPlayerId = starter.id;
    syncState();
    addLog('New round — ' + starter.name + ' goes first');
  }, [syncState, addLog]);

  const processAction = useCallback((playerId, data) => {
    const gs = gsRef.current;
    const active = gs.players.filter(p => !p.eliminated);
    if (gs.currentPlayerId !== playerId) return;
    const playerName = gs.players.find(p => p.id === playerId)?.name || '?';

    if (data.type === 'bid') {
      if (!isValidBid(data.quantity, data.value, gs.currentBid)) return;
      gs.currentBid = { quantity: data.quantity, value: data.value, playerId };
      gs.currentPlayerId = getNext(gs.players, playerId);
      addLog(playerName + ' bids ' + data.quantity + '× ' + data.value + "'s");
      syncState();
    }

    if (data.type === 'challenge') {
      if (!gs.currentBid) return;
      const roundDice = {};
      gs.players.filter(p => !p.eliminated).forEach(p => { roundDice[p.id] = [...p.dice]; });
      const all = Object.values(roundDice).flat();
      const actualCount = all.filter(d => d === gs.currentBid.value).length;
      const bidOk = actualCount >= gs.currentBid.quantity;
      const loserId = bidOk ? playerId : gs.currentBid.playerId;

      const loser = gs.players.find(p => p.id === loserId);
      loser.diceCount -= 1;
      if (loser.diceCount <= 0) loser.eliminated = true;

      const bidder = gs.players.find(p => p.id === gs.currentBid.playerId);
      addLog(playerName + ' calls LIAR! — ' + (bidOk ? bidder.name + "'s bid was correct!" : bidder.name + "'s bid was WRONG!") + ' ' + loser.name + ' loses a die.');

      syncRoundResult({
        allDice: roundDice,
        bid: { ...gs.currentBid },
        actualCount,
        bidOk,
        challengerId: playerId,
        bidderId: gs.currentBid.playerId,
        loserId,
      });

      resultTimerRef.current = setTimeout(() => {
        const remaining = gs.players.filter(p => !p.eliminated);
        if (remaining.length <= 1) {
          syncGameOver(remaining[0] || null);
        } else {
          startNewRound(loserId);
        }
      }, 5500);
    }
  }, [syncState, syncRoundResult, syncGameOver, startNewRound, addLog]);

  /* ═══════════════════════════════════════════════════
     PEER JS — CONNECTION
     ═══════════════════════════════════════════════════ */
  const handleClientMsg = useCallback((data) => {
    if (data.type === 'lobby-update') {
      setPlayers(data.players);
      setScreen('lobby');
    } else if (data.type === 'game-state') {
      setPlayers(data.players);
      setMyDice(data.yourDice);
      setCurrentBid(data.currentBid);
      setCurrentPlayerId(data.currentPlayerId);
      setScreen('game');
    } else if (data.type === 'round-result') {
      setRoundResult(data);
      setPlayers(data.players);
      setScreen('result');
    } else if (data.type === 'game-over') {
      setGameWinner(data.winner);
      setScreen('gameover');
      confetti({ particleCount: 200, spread: 90, origin: { y: 0.6 } });
    } else if (data.type === 'kicked') {
      cleanup();
      setScreen('menu');
      setError('You were removed from the game.');
    }
  }, []);

  const cleanup = useCallback(() => {
    if (resultTimerRef.current) clearTimeout(resultTimerRef.current);
    connsRef.current = [];
    hostConnRef.current = null;
    if (peerRef.current) { try { peerRef.current.destroy(); } catch (_) { } peerRef.current = null; }
    myIdRef.current = '';
    gsRef.current = {};
  }, []);

  const createRoom = useCallback(() => {
    if (!name.trim()) { setError('Please enter your name'); return; }
    setError('');
    setConnecting(true);
    const code = makeCode();
    const peer = new Peer(PREFIX + code, { debug: 0, config: { iceServers: ICE } });

    peer.on('open', (id) => {
      peerRef.current = peer;
      myIdRef.current = id;
      setRoomCode(code);
      setIsHost(true);
      const me = { id, name: name.trim(), color: PLAYER_COLORS[0], diceCount: START_DICE, eliminated: false, dice: [] };
      gsRef.current = { players: [me], currentBid: null, currentPlayerId: '' };
      setPlayers([me]);
      setScreen('lobby');
      setConnecting(false);
    });

    peer.on('connection', (conn) => {
      conn.on('open', () => {
        conn.on('data', (data) => {
          if (data.type === 'join') {
            const gs = gsRef.current;
            if (gs.players.length >= MAX_PLAYERS) { conn.send({ type: 'kicked', reason: 'full' }); conn.close(); return; }
            if (gs.currentPlayerId) { conn.send({ type: 'kicked', reason: 'in-progress' }); conn.close(); return; }
            const color = PLAYER_COLORS[gs.players.length % PLAYER_COLORS.length];
            gs.players.push({ id: conn.peer, name: data.name, color, diceCount: START_DICE, eliminated: false, dice: [] });
            connsRef.current.push(conn);
            syncLobby();
          } else {
            processAction(conn.peer, data);
          }
        });
        conn.on('close', () => {
          const gs = gsRef.current;
          const pl = gs.players.find(p => p.id === conn.peer);
          connsRef.current = connsRef.current.filter(c => c.peer !== conn.peer);
          if (pl) {
            if (!gs.currentPlayerId) {
              gs.players = gs.players.filter(p => p.id !== conn.peer);
              syncLobby();
            } else {
              pl.eliminated = true;
              pl.diceCount = 0;
              addLog(pl.name + ' disconnected');
              if (gs.currentPlayerId === pl.id) {
                gs.currentPlayerId = getNext(gs.players, pl.id);
              }
              const remaining = gs.players.filter(p => !p.eliminated);
              if (remaining.length <= 1) {
                syncGameOver(remaining[0] || null);
              } else {
                syncState();
              }
            }
          }
        });
      });
    });

    peer.on('error', (err) => {
      setConnecting(false);
      setError('Connection error: ' + err.type);
    });
  }, [name, syncLobby, processAction, syncState, syncGameOver, addLog]);

  const joinRoom = useCallback(() => {
    if (!name.trim()) { setError('Please enter your name'); return; }
    if (!joinCode.trim()) { setError('Please enter a room code'); return; }
    setError('');
    setConnecting(true);

    const peer = new Peer(undefined, { debug: 0, config: { iceServers: ICE } });
    peer.on('open', (id) => {
      peerRef.current = peer;
      myIdRef.current = id;
      const conn = peer.connect(PREFIX + joinCode.trim().toUpperCase());

      conn.on('open', () => {
        hostConnRef.current = conn;
        conn.send({ type: 'join', name: name.trim() });
        setRoomCode(joinCode.trim().toUpperCase());
        setIsHost(false);
        setConnecting(false);
      });
      conn.on('data', handleClientMsg);
      conn.on('close', () => {
        if (screen !== 'menu') {
          setError('Lost connection to host');
          setScreen('menu');
          cleanup();
        }
      });
      conn.on('error', () => {
        setConnecting(false);
        setError('Could not connect — check the room code');
        cleanup();
      });
    });

    peer.on('error', (err) => {
      setConnecting(false);
      if (err.type === 'peer-unavailable') {
        setError('Room not found — check the code and try again');
      } else {
        setError('Connection error: ' + err.type);
      }
      cleanup();
    });
  }, [name, joinCode, handleClientMsg, cleanup, screen]);

  /* ═══════════════════════════════════════════════════
     GAME ACTIONS
     ═══════════════════════════════════════════════════ */
  const startGame = () => {
    const gs = gsRef.current;
    gs.players.forEach(p => { p.diceCount = START_DICE; p.eliminated = false; p.dice = roll(START_DICE); });
    gs.currentBid = null;
    gs.currentPlayerId = gs.players[0].id;
    setLog([]);
    addLog('Game started! ' + gs.players[0].name + ' goes first.');
    syncState();
  };

  const handleBid = () => {
    if (!isValidBid(bidQty, bidVal, currentBid)) return;
    if (isHost) {
      processAction(myId, { type: 'bid', quantity: bidQty, value: bidVal });
    } else {
      hostConnRef.current?.send({ type: 'bid', quantity: bidQty, value: bidVal });
    }
  };

  const handleChallenge = () => {
    if (isHost) {
      processAction(myId, { type: 'challenge' });
    } else {
      hostConnRef.current?.send({ type: 'challenge' });
    }
  };

  const handleLeave = () => {
    cleanup();
    setScreen('menu');
    setPlayers([]);
    setMyDice([]);
    setCurrentBid(null);
    setRoomCode('');
    setError('');
    setLog([]);
  };

  const handlePlayAgain = () => {
    if (isHost) {
      gsRef.current.currentPlayerId = '';
      gsRef.current.currentBid = null;
      gsRef.current.players.forEach(p => { p.diceCount = START_DICE; p.eliminated = false; p.dice = []; });
      setGameWinner(null);
      setRoundResult(null);
      setCurrentBid(null);
      setLog([]);
      syncLobby();
      setScreen('lobby');
    }
  };

  /* auto-set min valid bid */
  useEffect(() => {
    if (!currentBid) { setBidQty(1); setBidVal(1); return; }
    if (currentBid.value < 6) {
      setBidQty(currentBid.quantity);
      setBidVal(currentBid.value + 1);
    } else {
      setBidQty(currentBid.quantity + 1);
      setBidVal(1);
    }
  }, [currentBid]);

  const shareLink = () => {
    const url = `${window.location.origin}/games/liars-dice/${roomCode}`;
    if (navigator.share) {
      navigator.share({ title: "Liar's Dice", text: 'Join my game!', url }).catch(() => { });
    } else {
      navigator.clipboard.writeText(url).then(() => { setCopied(true); setTimeout(() => setCopied(false), 2000); });
    }
  };

  /* ═══════════════════════════════════════════════════
     RENDER — MENU
     ═══════════════════════════════════════════════════ */
  const renderMenu = () => (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-col items-center justify-center min-h-screen px-4 py-8">
      {/* Title */}
      <motion.div initial={{ y: -30 }} animate={{ y: 0 }} transition={{ type: 'spring', stiffness: 200 }} className="text-center mb-10">
        <div className="flex items-center justify-center gap-3 mb-3">
          {[3, 5, 2].map((v, i) => <Die key={i} value={v} size={40} glow color={PLAYER_COLORS[i]} delay={0.1 * i} />)}
        </div>
        <h1 style={{ fontSize: 42, fontWeight: 900, letterSpacing: '-0.03em', color: '#f1f5f9', lineHeight: 1.1 }}>
          LIAR'S<br /><span style={{ background: 'linear-gradient(90deg, #22d3ee, #a855f7)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>DICE</span>
        </h1>
        <p style={{ color: '#64748b', marginTop: 8, fontSize: 14 }}>Bluff your way to victory</p>
      </motion.div>

      <Glass style={{ padding: 24, width: '100%', maxWidth: 360 }}>
        {/* Name */}
        <label style={{ fontSize: 11, fontWeight: 700, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Your Name</label>
        <input
          value={name}
          onChange={e => setName(e.target.value)}
          maxLength={16}
          placeholder="Enter name..."
          style={{
            width: '100%', marginTop: 6, marginBottom: 18, padding: '10px 14px', borderRadius: 10,
            background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)',
            color: '#f1f5f9', fontSize: 15, outline: 'none',
          }}
          onFocus={e => e.target.style.borderColor = '#22d3ee50'}
          onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.08)'}
        />

        <Btn big color="#22d3ee" onClick={createRoom} disabled={connecting} style={{ width: '100%', marginBottom: 10 }}>
          {connecting ? 'Connecting...' : 'Create Game'}
        </Btn>

        <div style={{ display: 'flex', alignItems: 'center', gap: 12, margin: '14px 0', color: '#334155' }}>
          <div style={{ flex: 1, height: 1, background: 'rgba(255,255,255,0.06)' }} />
          <span style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em' }}>or join</span>
          <div style={{ flex: 1, height: 1, background: 'rgba(255,255,255,0.06)' }} />
        </div>

        <div style={{ display: 'flex', gap: 8 }}>
          <input
            value={joinCode}
            onChange={e => setJoinCode(e.target.value.toUpperCase())}
            maxLength={5}
            placeholder="CODE"
            style={{
              flex: 1, padding: '10px 14px', borderRadius: 10,
              background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)',
              color: '#f1f5f9', fontSize: 15, fontWeight: 700, letterSpacing: '0.15em',
              textAlign: 'center', outline: 'none', textTransform: 'uppercase',
            }}
            onFocus={e => e.target.style.borderColor = '#a855f750'}
            onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.08)'}
          />
          <Btn color="#a855f7" onClick={joinRoom} disabled={connecting}>Join</Btn>
        </div>
      </Glass>

      {error && (
        <motion.p initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }}
          style={{ color: '#f87171', fontSize: 13, marginTop: 14, textAlign: 'center' }}>{error}</motion.p>
      )}

      <div style={{ marginTop: 24, display: 'flex', gap: 16, alignItems: 'center' }}>
        <button onClick={() => setShowRules(true)}
          style={{ color: '#64748b', fontSize: 13, cursor: 'pointer', background: 'none', border: 'none', textDecoration: 'underline', textUnderlineOffset: 3 }}>
          How to play
        </button>
        <button onClick={() => {
          import('../../utils/navigation').then(({ navigate }) => navigate('/tools'));
        }}
          style={{ color: '#64748b', fontSize: 13, cursor: 'pointer', background: 'none', border: 'none', textDecoration: 'underline', textUnderlineOffset: 3 }}>
          Back
        </button>
      </div>
    </motion.div>
  );

  /* ═══════════════════════════════════════════════════
     RENDER — LOBBY
     ═══════════════════════════════════════════════════ */
  const renderLobby = () => (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-col items-center min-h-screen px-4 py-8">
      <div style={{ width: '100%', maxWidth: 420 }}>
        {/* Header */}
        <div className="text-center mb-6">
          <h2 style={{ fontSize: 26, fontWeight: 800, color: '#f1f5f9' }}>Game Lobby</h2>
          <div style={{ marginTop: 8, display: 'inline-flex', alignItems: 'center', gap: 8, padding: '6px 16px', borderRadius: 99, background: 'rgba(34,211,238,0.08)', border: '1px solid rgba(34,211,238,0.2)' }}>
            <span style={{ fontSize: 11, color: '#64748b', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em' }}>Room</span>
            <span style={{ fontSize: 20, fontWeight: 800, color: '#22d3ee', letterSpacing: '0.2em' }}>{roomCode}</span>
          </div>
        </div>

        {/* Share */}
        <Btn color="#22d3ee" onClick={shareLink} style={{ width: '100%', marginBottom: 20, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8 }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 12v8a2 2 0 002 2h12a2 2 0 002-2v-8" /><polyline points="16 6 12 2 8 6" /><line x1="12" y1="2" x2="12" y2="15" />
          </svg>
          {copied ? 'Link copied!' : 'Share invite link'}
        </Btn>

        {/* Players */}
        <Glass style={{ padding: 16, marginBottom: 20 }}>
          <div style={{ fontSize: 11, fontWeight: 700, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 12 }}>
            Players ({players.length}/{MAX_PLAYERS})
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {players.map((p, i) => (
              <motion.div key={p.id} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.05 }}>
                <Badge player={p} isMe={p.id === myId} />
              </motion.div>
            ))}
            {Array.from({ length: Math.max(0, MIN_PLAYERS - players.length) }).map((_, i) => (
              <div key={`w${i}`} style={{
                padding: '12px 14px', borderRadius: 12, border: '1.5px dashed rgba(255,255,255,0.06)',
                color: '#334155', fontSize: 13, fontStyle: 'italic',
              }}>Waiting for player...</div>
            ))}
          </div>
        </Glass>

        {/* Actions */}
        <div style={{ display: 'flex', gap: 10 }}>
          {isHost && (
            <Btn big color="#34d399" onClick={startGame} disabled={players.length < MIN_PLAYERS} style={{ flex: 1 }}>
              Start Game ({players.length}/{MIN_PLAYERS}+)
            </Btn>
          )}
          <Btn color="#64748b" onClick={handleLeave} style={{ flex: isHost ? 'none' : 1 }}>Leave</Btn>
        </div>
        {!isHost && <p style={{ textAlign: 'center', color: '#475569', fontSize: 13, marginTop: 14 }}>Waiting for host to start...</p>}
      </div>
    </motion.div>
  );

  /* ═══════════════════════════════════════════════════
     RENDER — GAME
     ═══════════════════════════════════════════════════ */
  const renderGame = () => {
    const activePlayers = players.filter(p => !p.eliminated);
    const currentPlayer = players.find(p => p.id === currentPlayerId);
    const validBid = isValidBid(bidQty, bidVal, currentBid);

    return (
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-col min-h-screen px-3 py-4 md:px-6 md:py-6">
        {/* Top bar */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: '#475569', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
              Room {roomCode}
            </div>
            <div style={{ width: 1, height: 14, background: 'rgba(255,255,255,0.08)' }} />
            <div style={{ fontSize: 11, color: '#475569' }}>{totalDice} dice in play</div>
          </div>
          <button onClick={() => setShowRules(true)} style={{ color: '#475569', fontSize: 12, cursor: 'pointer', background: 'none', border: 'none' }}>Rules</button>
        </div>

        {/* Players row */}
        <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginBottom: 16 }}>
          {players.map(p => (
            <Badge key={p.id} player={p} isCurrent={p.id === currentPlayerId} isMe={p.id === myId} small />
          ))}
        </div>

        {/* Current bid */}
        <Glass style={{ padding: '16px 20px', marginBottom: 16, textAlign: 'center' }}>
          {currentBid ? (
            <>
              <div style={{ fontSize: 11, fontWeight: 700, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 8 }}>Current Bid</div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12 }}>
                <span style={{ fontSize: 36, fontWeight: 900, color: '#f1f5f9' }}>{currentBid.quantity}×</span>
                <Die value={currentBid.value} size={48} glow color={players.find(p => p.id === currentBid.playerId)?.color || '#22d3ee'} />
              </div>
              <div style={{ fontSize: 12, color: '#64748b', marginTop: 6 }}>
                by <span style={{ color: players.find(p => p.id === currentBid.playerId)?.color || '#94a3b8', fontWeight: 700 }}>
                  {players.find(p => p.id === currentBid.playerId)?.name || '?'}
                </span>
              </div>
            </>
          ) : (
            <div style={{ color: '#475569', fontSize: 14 }}>No bid yet — first player opens!</div>
          )}
        </Glass>

        {/* Turn indicator */}
        <div style={{ textAlign: 'center', marginBottom: 14 }}>
          {isMyTurn ? (
            <motion.div animate={{ opacity: [0.6, 1, 0.6] }} transition={{ duration: 2, repeat: Infinity }}
              style={{ fontSize: 15, fontWeight: 800, color: '#22d3ee', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
              Your turn!
            </motion.div>
          ) : (
            <div style={{ fontSize: 13, color: '#64748b' }}>
              Waiting for <span style={{ color: currentPlayer?.color || '#94a3b8', fontWeight: 700 }}>{currentPlayer?.name || '...'}</span>
            </div>
          )}
        </div>

        {/* My dice */}
        <Glass style={{ padding: 16, marginBottom: 16 }}>
          <div style={{ fontSize: 11, fontWeight: 700, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 10 }}>Your Dice</div>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', justifyContent: 'center' }}>
            {displayDice.length ? displayDice.map((v, i) => (
              <Die key={i} value={v} size={52} glow={!isRolling} color={players.find(p => p.id === myId)?.color || '#22d3ee'} delay={isRolling ? 0 : i * 0.05} />
            )) : (
              <div style={{ color: '#334155', fontSize: 13, padding: 20 }}>You're out of dice — spectating</div>
            )}
          </div>
        </Glass>

        {/* Bid controls */}
        {isMyTurn && displayDice.length > 0 && (
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
            <Glass style={{ padding: 16, marginBottom: 16 }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                {/* Quantity selector */}
                <div>
                  <div style={{ fontSize: 11, fontWeight: 700, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 6 }}>How many?</div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                    <button onClick={() => setBidQty(q => Math.max(1, q - 1))}
                      style={{ width: 36, height: 36, borderRadius: 8, background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', color: '#94a3b8', fontSize: 18, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>−</button>
                    <span style={{ fontSize: 28, fontWeight: 900, color: '#f1f5f9', minWidth: 40, textAlign: 'center' }}>{bidQty}</span>
                    <button onClick={() => setBidQty(q => Math.min(totalDice, q + 1))}
                      style={{ width: 36, height: 36, borderRadius: 8, background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', color: '#94a3b8', fontSize: 18, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>+</button>
                  </div>
                </div>
                {/* Value selector */}
                <div>
                  <div style={{ fontSize: 11, fontWeight: 700, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 6 }}>Which face?</div>
                  <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                    {[1, 2, 3, 4, 5, 6].map(v => (
                      <MiniDie key={v} value={v} selected={bidVal === v} onClick={() => setBidVal(v)} />
                    ))}
                  </div>
                </div>
                {/* Preview */}
                <div style={{ textAlign: 'center', fontSize: 13, color: validBid ? '#94a3b8' : '#ef4444', fontWeight: 600 }}>
                  {validBid ? `"${bidQty}× ${bidVal}'s"` : currentBid ? 'Bid must be higher' : 'Select a bid'}
                </div>
                {/* Buttons */}
                <div style={{ display: 'flex', gap: 10 }}>
                  <Btn big color="#22d3ee" onClick={handleBid} disabled={!validBid} style={{ flex: 1 }}>
                    Place Bid
                  </Btn>
                  {canChallenge && (
                    <Btn big color="#ef4444" onClick={handleChallenge} style={{ flex: 1 }}>
                      LIAR!
                    </Btn>
                  )}
                </div>
              </div>
            </Glass>
          </motion.div>
        )}

        {/* Game log */}
        <Glass style={{ padding: '10px 14px', marginTop: 'auto', maxHeight: 140, overflowY: 'auto' }}>
          <div style={{ fontSize: 11, fontWeight: 700, color: '#475569', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 6 }}>Game Log</div>
          {log.slice().reverse().map(l => (
            <div key={l.id} style={{ fontSize: 12, color: '#64748b', lineHeight: 1.6 }}>{l.msg}</div>
          ))}
        </Glass>

        <button onClick={handleLeave}
          style={{ margin: '14px auto 0', color: '#475569', fontSize: 12, cursor: 'pointer', background: 'none', border: 'none', textDecoration: 'underline', textUnderlineOffset: 3 }}>
          Leave game
        </button>
      </motion.div>
    );
  };

  /* ═══════════════════════════════════════════════════
     RENDER — RESULT (between rounds)
     ═══════════════════════════════════════════════════ */
  const renderResult = () => {
    if (!roundResult) return null;
    const { allDice, bid, actualCount, bidOk, challengerId, bidderId, loserId } = roundResult;
    const challenger = players.find(p => p.id === challengerId);
    const bidder = players.find(p => p.id === bidderId);
    const loser = players.find(p => p.id === loserId);

    return (
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-col items-center justify-center min-h-screen px-4 py-8">
        <div style={{ width: '100%', maxWidth: 500 }}>
          {/* Outcome */}
          <motion.div initial={{ scale: 0.8 }} animate={{ scale: 1 }} transition={{ type: 'spring', stiffness: 300 }}
            className="text-center mb-8">
            <div style={{
              fontSize: 48, fontWeight: 900,
              background: bidOk ? 'linear-gradient(90deg, #34d399, #22d3ee)' : 'linear-gradient(90deg, #ef4444, #f97316)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
            }}>
              {bidOk ? 'HONEST!' : 'LIAR!'}
            </div>
            <p style={{ color: '#94a3b8', fontSize: 14, marginTop: 4 }}>
              <span style={{ color: challenger?.color, fontWeight: 700 }}>{challenger?.name}</span> called liar on{' '}
              <span style={{ color: bidder?.color, fontWeight: 700 }}>{bidder?.name}</span>'s bid
            </p>
          </motion.div>

          {/* Bid vs Actual */}
          <Glass style={{ padding: 20, marginBottom: 16, textAlign: 'center' }}>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 20, flexWrap: 'wrap' }}>
              <div>
                <div style={{ fontSize: 11, fontWeight: 700, color: '#64748b', textTransform: 'uppercase', marginBottom: 4 }}>Bid</div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                  <span style={{ fontSize: 28, fontWeight: 900, color: '#f1f5f9' }}>{bid.quantity}×</span>
                  <Die value={bid.value} size={36} />
                </div>
              </div>
              <div style={{ fontSize: 24, color: '#334155' }}>vs</div>
              <div>
                <div style={{ fontSize: 11, fontWeight: 700, color: '#64748b', textTransform: 'uppercase', marginBottom: 4 }}>Actual</div>
                <span style={{
                  fontSize: 32, fontWeight: 900,
                  color: bidOk ? '#34d399' : '#ef4444',
                }}>{actualCount}×</span>
              </div>
            </div>
          </Glass>

          {/* All dice revealed */}
          <Glass style={{ padding: 16, marginBottom: 16 }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 12 }}>All Dice Revealed</div>
            {Object.entries(allDice).map(([pid, dice]) => {
              const p = players.find(pl => pl.id === pid);
              if (!p) return null;
              return (
                <div key={pid} style={{ marginBottom: 12 }}>
                  <div style={{ fontSize: 12, fontWeight: 700, color: p.color, marginBottom: 4 }}>
                    {p.name}{p.id === myId ? ' (you)' : ''}
                  </div>
                  <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                    {dice.map((v, i) => (
                      <Die key={i} value={v} size={40} glow={v === bid.value} color={v === bid.value ? '#facc15' : p.color} delay={i * 0.08} />
                    ))}
                  </div>
                </div>
              );
            })}
          </Glass>

          {/* Loser announcement */}
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
            style={{ textAlign: 'center', padding: '12px 20px', borderRadius: 12, background: 'rgba(239,68,68,0.08)', border: '1px solid rgba(239,68,68,0.2)' }}>
            <span style={{ color: loser?.color, fontWeight: 800 }}>{loser?.name}</span>
            <span style={{ color: '#f87171', fontWeight: 600 }}> loses a die!</span>
            {loser?.diceCount <= 0 && <span style={{ color: '#ef4444', fontWeight: 800 }}> — ELIMINATED!</span>}
          </motion.div>

          <p style={{ textAlign: 'center', color: '#334155', fontSize: 12, marginTop: 16 }}>Next round starting soon...</p>
        </div>
      </motion.div>
    );
  };

  /* ═══════════════════════════════════════════════════
     RENDER — GAME OVER
     ═══════════════════════════════════════════════════ */
  const renderGameOver = () => (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-col items-center justify-center min-h-screen px-4 py-8">
      <motion.div initial={{ scale: 0.5 }} animate={{ scale: 1 }} transition={{ type: 'spring', stiffness: 200 }} className="text-center">
        <div style={{ fontSize: 56, marginBottom: 8 }}>
          <motion.span animate={{ rotate: [0, 10, -10, 0] }} transition={{ duration: 0.5, repeat: 3 }} style={{ display: 'inline-block' }}>
            🏆
          </motion.span>
        </div>
        <h2 style={{
          fontSize: 36, fontWeight: 900,
          background: 'linear-gradient(90deg, #facc15, #f97316)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
        }}>WINNER!</h2>
        {gameWinner && (
          <div style={{ marginTop: 12, display: 'flex', justifyContent: 'center' }}>
            <div style={{
              padding: '12px 28px', borderRadius: 16,
              background: `${gameWinner.color}15`, border: `2px solid ${gameWinner.color}40`,
              display: 'flex', alignItems: 'center', gap: 12,
            }}>
              <div style={{
                width: 48, height: 48, borderRadius: '50%',
                background: `linear-gradient(135deg, ${gameWinner.color}, ${gameWinner.color}80)`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 20, fontWeight: 900, color: '#0a0e1a',
              }}>{gameWinner.name.charAt(0).toUpperCase()}</div>
              <span style={{ fontSize: 22, fontWeight: 800, color: '#f1f5f9' }}>{gameWinner.name}</span>
            </div>
          </div>
        )}

        {/* Scoreboard */}
        <Glass style={{ padding: 16, marginTop: 24, maxWidth: 360, width: '100%', marginLeft: 'auto', marginRight: 'auto' }}>
          <div style={{ fontSize: 11, fontWeight: 700, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 12 }}>Final Standings</div>
          {[...players].sort((a, b) => b.diceCount - a.diceCount || (a.eliminated ? 1 : -1)).map((p, i) => (
            <div key={p.id} style={{
              display: 'flex', alignItems: 'center', gap: 10, padding: '6px 0',
              borderBottom: i < players.length - 1 ? '1px solid rgba(255,255,255,0.04)' : 'none',
            }}>
              <span style={{ fontSize: 14, fontWeight: 800, color: i === 0 ? '#facc15' : '#475569', width: 24 }}>#{i + 1}</span>
              <div style={{ width: 28, height: 28, borderRadius: '50%', background: p.color, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 12, fontWeight: 800, color: '#0a0e1a' }}>
                {p.name.charAt(0).toUpperCase()}
              </div>
              <span style={{ fontSize: 14, fontWeight: 600, color: '#94a3b8', flex: 1 }}>{p.name}{p.id === myId ? ' (you)' : ''}</span>
            </div>
          ))}
        </Glass>

        <div style={{ display: 'flex', gap: 10, justifyContent: 'center', marginTop: 24 }}>
          {isHost && <Btn big color="#34d399" onClick={handlePlayAgain}>Play Again</Btn>}
          <Btn color="#64748b" onClick={handleLeave}>Leave</Btn>
        </div>
        {!isHost && <p style={{ color: '#475569', fontSize: 12, marginTop: 12 }}>Waiting for host...</p>}
      </motion.div>
    </motion.div>
  );

  /* ═══════════════════════════════════════════════════
     MAIN RENDER
     ═══════════════════════════════════════════════════ */
  return (
    <div style={{ minHeight: '100vh', color: '#f1f5f9', fontFamily: "'Inter', system-ui, -apple-system, sans-serif", position: 'relative' }}>
      <BG />
      <div style={{ position: 'relative', zIndex: 1 }}>
        <AnimatePresence mode="wait">
          {screen === 'menu' && <motion.div key="menu" exit={{ opacity: 0, x: -30 }}>{renderMenu()}</motion.div>}
          {screen === 'lobby' && <motion.div key="lobby" exit={{ opacity: 0, x: -30 }}>{renderLobby()}</motion.div>}
          {screen === 'game' && <motion.div key="game" exit={{ opacity: 0 }}>{renderGame()}</motion.div>}
          {screen === 'result' && <motion.div key="result" exit={{ opacity: 0 }}>{renderResult()}</motion.div>}
          {screen === 'gameover' && <motion.div key="gameover" exit={{ opacity: 0 }}>{renderGameOver()}</motion.div>}
        </AnimatePresence>
      </div>
      <AnimatePresence>{showRules && <Rules onClose={() => setShowRules(false)} />}</AnimatePresence>
    </div>
  );
}
