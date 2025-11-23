import React, { useState, useRef, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Pencil, Eraser, Trash2, Copy, Check, Users, Play, 
  Clock, Star, ArrowLeft, Loader2, Wifi, WifiOff, MessageSquare, 
  Volume2, VolumeX, PaintBucket, ThumbsUp, ThumbsDown, Settings
} from 'lucide-react';
import Peer from 'peerjs';

// --- KONFIGURATION & DATA ---
const AVATARS = ['🐶', '🐱', '🐭', '🐹', '🐰', '🦊', '🐻', '🐼', '🐨', '🐯', '🦁', '🐮', '🐷', '🐸', '🐙', '🐵', '🦄', '🐝', '🤖', '👽', '👻', '💀', '💩', '🤡', '👹', '👺'];

const CATEGORIES = {
  'Random': ['Haus', 'Baum', 'Computer', 'Pizza', 'Sonne', 'Katze', 'Auto', 'Banane', 'Roboter', 'Geist', 'Schule', 'Feuer', 'Wasser', 'Mond', 'Fisch', 'Vogel', 'Buch', 'Stift', 'Lampe', 'Telefon', 'Brille', 'Uhr', 'Schuh', 'Hut', 'Ball', 'Tisch', 'Stuhl', 'Bett'],
  'Tiere': ['Elefant', 'Giraffe', 'Löwe', 'Zebra', 'Pinguin', 'Adler', 'Hai', 'Wal', 'Delfin', 'Känguru', 'Koala', 'Panda', 'Fledermaus', 'Spinne', 'Schlange', 'Schildkröte', 'Krokodil', 'Nashorn', 'Nilpferd', 'Gorilla'],
  'Essen': ['Hamburger', 'Pommes', 'Spaghetti', 'Sushi', 'Taco', 'Eis', 'Kuchen', 'Donut', 'Keks', 'Schokolade', 'Apfel', 'Erdbeere', 'Ananas', 'Melone', 'Kirsche', 'Pfirsich', 'Traube', 'Zitrone', 'Avocado', 'Tomate'],
  'Technik': ['Laptop', 'Smartphone', 'Tablet', 'Kopfhörer', 'Tastatur', 'Maus', 'Monitor', 'Drucker', 'Kamera', 'Mikrofon', 'Fernseher', 'Konsole', 'Controller', 'Kabel', 'Batterie', 'Roboter', 'Drohne', 'Satellit', 'Rakete']
};

const SOUNDS = {
  join: new Audio('https://assets.mixkit.co/active_storage/sfx/2578/2578-preview.mp3'),
  chat: new Audio('https://assets.mixkit.co/active_storage/sfx/2354/2354-preview.mp3'),
  correct: new Audio('https://assets.mixkit.co/active_storage/sfx/2000/2000-preview.mp3'),
  turn: new Audio('https://assets.mixkit.co/active_storage/sfx/2044/2044-preview.mp3'),
  win: new Audio('https://assets.mixkit.co/active_storage/sfx/2019/2019-preview.mp3'),
  tick: new Audio('https://assets.mixkit.co/active_storage/sfx/2043/2043-preview.mp3'),
  fill: new Audio('https://assets.mixkit.co/active_storage/sfx/2578/2578-preview.mp3') // Recycle join sound for fill pop
};

export default function DoodleDash() {
  // --- UI STATE ---
  const [gameState, setGameState] = useState('menu'); 
  const [connectionStatus, setConnectionStatus] = useState('disconnected');
  const [myName, setMyName] = useState('');
  const [myAvatar, setMyAvatar] = useState('🐶');
  const [myPeerId, setMyPeerId] = useState('');
  const [roomCode, setRoomCode] = useState('');
  const [isHost, setIsHost] = useState(false);
  const [players, setPlayers] = useState([]); // Array of { name, avatar, id }
  const [messages, setMessages] = useState([]);
  const [timeLeft, setTimeLeft] = useState(60);
  const [round, setRound] = useState(1);
  const [scores, setScores] = useState({});
  const [currentDrawer, setCurrentDrawer] = useState('');
  const [currentWord, setCurrentWord] = useState('');
  const [maskedWord, setMaskedWord] = useState('');
  const [winner, setWinner] = useState(null);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('Random');
  const [reactions, setReactions] = useState([]); // { id, type, x, y }

  // Drawing
  const [color, setColor] = useState('#000000');
  const [brushSize, setBrushSize] = useState(4);
  const [tool, setTool] = useState('pen'); // pen, eraser, bucket

  // --- REFS ---
  const gameRef = useRef({
    players: [], // { name, avatar, score, id }
    currentWord: '',
    currentDrawer: '',
    round: 1,
    isHost: false,
    connections: [], 
    hostConn: null, 
    myName: '',
    guessedPlayers: [] // Track who guessed correctly this round for scoring
  });

  const canvasRef = useRef(null);
  const isDrawing = useRef(false);
  const lastDrawPoint = useRef({ x: 0, y: 0 });
  const timerRef = useRef(null);
  const peerRef = useRef(null);

  // --- HELPERS ---
  const updateGameRef = (updates) => {
    Object.assign(gameRef.current, updates);
    if (updates.players) setPlayers([...updates.players]);
    if (updates.scores) setScores({...updates.scores}); // Deprecated in favor of players object having scores, but kept for compat
    if (updates.currentDrawer) setCurrentDrawer(updates.currentDrawer);
    if (updates.currentWord) setCurrentWord(updates.currentWord);
    if (updates.round !== undefined) setRound(updates.round);
  };

  const playSound = (type) => {
    if (!soundEnabled) return;
    try {
      const sound = SOUNDS[type];
      if (sound) {
        sound.currentTime = 0;
        sound.play().catch(e => {});
      }
    } catch (e) {}
  };

  const addSystemMessage = (text) => {
    setMessages(prev => [...prev, { type: 'system', text }]);
  };

  const triggerReaction = (type) => {
    const id = Date.now();
    const x = Math.random() * 80 + 10; // 10-90%
    setReactions(prev => [...prev, { id, type, x }]);
    setTimeout(() => {
      setReactions(prev => prev.filter(r => r.id !== id));
    }, 2000);

    // Send to others
    const data = { type: 'reaction', reactionType: type };
    if (isHost) broadcast(data); else sendToHost(data);
  };

  // --- PEERJS INIT ---
  useEffect(() => {
    return () => {
      if (peerRef.current) peerRef.current.destroy();
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  const initPeer = (id = null) => {
    return new Promise((resolve, reject) => {
      if (peerRef.current) peerRef.current.destroy();

      const cleanId = id || Math.random().toString(36).substring(2, 8).toUpperCase();
      
      const peer = new Peer(cleanId, {
        config: {
          iceServers: [
            { urls: 'stun:stun.l.google.com:19302' },
            { urls: 'stun:global.stun.twilio.com:3478' }
          ]
        },
        debug: 1
      });

      peer.on('open', (peerId) => {
        console.log('✅ My Peer ID:', peerId);
        setMyPeerId(peerId);
        setConnectionStatus('connected');
        resolve(peer);
      });

      peer.on('connection', (conn) => {
        conn.on('open', () => {
          console.log('👋 Neuer Spieler:', conn.metadata?.name);
          gameRef.current.connections.push(conn);
          setupDataListener(conn);
        });
      });

      peer.on('error', (err) => {
        console.error('Peer Error:', err);
        if (err.type === 'peer-unavailable') {
          alert('Raum nicht gefunden! Code prüfen.');
          setConnectionStatus('disconnected');
          setGameState('menu');
        } else if (err.type === 'unavailable-id') {
          initPeer();
        }
        reject(err);
      });

      peerRef.current = peer;
    });
  };

  const setupDataListener = (conn) => {
    conn.on('data', (data) => {
      handleIncomingData(data, conn);
    });

    conn.on('close', () => {
      gameRef.current.connections = gameRef.current.connections.filter(c => c.peer !== conn.peer);
      // Optional: Remove player from list (not implemented to keep scores)
    });
  };

  const broadcast = (data) => {
    if (!gameRef.current.isHost) return;
    gameRef.current.connections.forEach(conn => {
      if (conn.open) conn.send(data);
    });
  };

  const sendToHost = (data) => {
    const conn = gameRef.current.hostConn;
    if (conn && conn.open) conn.send(data);
  };

  // --- DATA HANDLER ---
  const handleIncomingData = (data, senderConn) => {
    const state = gameRef.current;

    switch (data.type) {
      case 'join_request': // HOST only
        const newPlayer = { name: data.name, avatar: data.avatar, score: 0, id: senderConn.peer };
        if (!state.players.find(p => p.name === data.name)) {
          const newPlayers = [...state.players, newPlayer];
          
          updateGameRef({ players: newPlayers });
          
          // Sync ALL
          broadcast({ 
            type: 'state_sync', 
            players: newPlayers, 
            category: selectedCategory,
            gameState: gameState 
          });
          
          // Sync specific new player
          senderConn.send({
            type: 'state_sync',
            players: newPlayers,
            category: selectedCategory,
            gameState: gameState
          });

          playSound('join');
          addSystemMessage(`${newPlayer.name} ist beigetreten!`);
        }
        break;

      case 'state_sync': // CLIENT only
        updateGameRef({ players: data.players });
        if (data.category) setSelectedCategory(data.category);
        if (data.gameState === 'playing' && gameState !== 'playing') {
           setGameState('playing');
        }
        break;

      case 'category_change':
        setSelectedCategory(data.category);
        break;

      case 'start_round':
        setGameState('playing');
        setRound(data.round);
        setTimeLeft(60);
        setMessages([]);
        clearCanvas();
        
        const isMeDrawer = data.drawer === state.myName;
        updateGameRef({ 
          currentDrawer: data.drawer,
          currentWord: isMeDrawer ? data.word : ''
        });
        
        if (isMeDrawer) {
          setCurrentWord(data.word);
          addSystemMessage(`Du bist dran! Zeichne: ${data.word}`);
        } else {
          setMaskedWord('_ '.repeat(data.wordLength));
          addSystemMessage(`${data.drawer} zeichnet jetzt!`);
        }
        playSound('turn');
        break;

      case 'timer_update':
        setTimeLeft(data.time);
        if (data.time <= 5) playSound('tick');
        break;

      case 'game_over':
        setWinner(data.winner);
        setGameState('gameover');
        playSound('win');
        break;

      case 'draw_line':
        drawLine(data.line, false);
        break;

      case 'fill_canvas':
        fillCanvas(data.x, data.y, data.color, false);
        break;

      case 'clear_canvas':
        clearCanvas(false);
        break;

      case 'chat_message':
        handleChatMessage(data.message, senderConn);
        break;

      case 'reaction':
        const id = Date.now() + Math.random();
        const x = Math.random() * 80 + 10;
        setReactions(prev => [...prev, { id, type: data.reactionType, x }]);
        setTimeout(() => setReactions(prev => prev.filter(r => r.id !== id)), 2000);
        if (isHost) broadcast(data); // Re-broadcast if host
        break;

      case 'correct_guess':
        addSystemMessage(`🎉 ${data.winner} hat das Wort erraten!`);
        updateGameRef({ players: data.players }); // Sync updated scores
        
        // Wenn ICH der Drawer war, reveal das Wort nicht komplett, aber zeige Fortschritt
        // Einfachheitshalber: Reveal Wort für alle wenn einer rät? Nein, erst am Ende oder individuelle Hints.
        // In diesem simplen Modus: Reveal word erst am Ende der Zeit.
        playSound('correct');
        break;
        
      case 'reveal_word':
        addSystemMessage(`Zeit um! Wort: ${data.word}`);
        setMaskedWord(data.word);
        break;

      default: break;
    }
  };

  const handleChatMessage = (msg, senderConn) => {
    const state = gameRef.current;
    
    // Fix: Nur hinzufügen wenn es nicht meine eigene Nachricht ist, die vom Server zurückkommt
    // Aber hier ist es P2P.
    setMessages(prev => [...prev, msg]);
    playSound('chat');

    // HOST LOGIC
    if (state.isHost) {
      // Weiterleiten an andere
      state.connections.forEach(c => {
        if (c.peer !== senderConn?.peer) c.send({ type: 'chat_message', message: msg });
      });

      // Guess Check
      if (msg.author !== state.currentDrawer) {
        const guess = msg.text.trim().toLowerCase();
        const target = state.currentWord.trim().toLowerCase();

        if (guess === target && !state.guessedPlayers.includes(msg.author)) {
          // Calculate Score
          const timeBonus = Math.ceil(30 * (timeLeft / 60));
          const rankBonus = Math.max(0, 20 - (state.guessedPlayers.length * 5)); // 20, 15, 10...
          const totalScore = 50 + timeBonus + rankBonus;
          const drawerScore = 25 + Math.ceil(timeBonus / 2);

          state.guessedPlayers.push(msg.author);

          // Update Scores in Player Array
          const updatedPlayers = state.players.map(p => {
            if (p.name === msg.author) return { ...p, score: p.score + totalScore };
            if (p.name === state.currentDrawer) return { ...p, score: p.score + drawerScore };
            return p;
          });

          updateGameRef({ players: updatedPlayers });

          broadcast({ type: 'correct_guess', winner: msg.author, players: updatedPlayers });
          addSystemMessage(`🎉 ${msg.author} hat das Wort erraten!`);
          playSound('correct');

          // Check if all players guessed
          const guessersCount = updatedPlayers.length - 1; // minus drawer
          if (state.guessedPlayers.length >= guessersCount && guessersCount > 0) {
             // All guessed, early next round
             setTimeout(() => startNextRound(), 2000);
          }
        }
      }
    }
  };

  // --- HOST LOGIC ---
  const startNextRound = () => {
    const state = gameRef.current;
    if (!state.isHost) return;

    if (timerRef.current) clearInterval(timerRef.current);

    // Clear guessed players
    state.guessedPlayers = [];

    const currentIdx = state.players.findIndex(p => p.name === state.currentDrawer);
    let nextIdx = currentIdx + 1;
    let nextRound = state.round;

    if (state.currentDrawer === '' || nextIdx >= state.players.length) {
      nextIdx = 0;
      if (state.currentDrawer !== '') nextRound++;
    }

    if (nextRound > 3) {
      const sorted = [...state.players].sort((a,b) => b.score - a.score);
      const winnerName = sorted[0].name;
      broadcast({ type: 'game_over', winner: winnerName });
      setWinner(winnerName);
      setGameState('gameover');
      return;
    }

    const nextDrawer = state.players[nextIdx].name;
    const wordList = CATEGORIES[selectedCategory] || CATEGORIES['Random'];
    const word = wordList[Math.floor(Math.random() * wordList.length)];

    updateGameRef({ currentDrawer: nextDrawer, currentWord: word, round: nextRound });
    
    if (nextDrawer === state.myName) {
      setCurrentWord(word);
      addSystemMessage(`Du bist dran! Zeichne: ${word}`);
    } else {
      setCurrentWord('');
      setMaskedWord('_ '.repeat(word.length));
      addSystemMessage(`${nextDrawer} zeichnet jetzt!`);
    }

    setGameState('playing');
    setMessages([]);
    clearCanvas();
    setTimeLeft(60);
    playSound('turn');

    state.connections.forEach(conn => {
      const isDrawer = conn.metadata.name === nextDrawer;
      conn.send({
        type: 'start_round',
        drawer: nextDrawer,
        round: nextRound,
        wordLength: word.length,
        word: isDrawer ? word : null
      });
    });

    let t = 60;
    timerRef.current = setInterval(() => {
      t--;
      broadcast({ type: 'timer_update', time: t });
      setTimeLeft(t);
      if (t === 0) {
        clearInterval(timerRef.current);
        broadcast({ type: 'reveal_word', word });
        addSystemMessage(`Zeit um! Wort: ${word}`);
        setMaskedWord(word);
        setTimeout(() => startNextRound(), 3000);
      }
    }, 1000);
  };

  // --- ACTIONS ---
  const createRoom = async () => {
    if (!myName.trim()) return alert('Name eingeben!');
    try {
      await initPeer();
      setIsHost(true);
      const me = { name: myName, avatar: myAvatar, score: 0, id: 'host' };
      updateGameRef({ 
        isHost: true, 
        players: [me],
        myName: myName 
      });
      setRoomCode(peerRef.current.id);
      setGameState('lobby');
    } catch (e) { console.error(e); }
  };

  const joinRoom = async () => {
    if (!myName.trim()) return alert('Name eingeben!');
    if (!roomCode.trim()) return alert('Code eingeben!');
    try {
      setConnectionStatus('connecting');
      await initPeer(); 
      const conn = peerRef.current.connect(roomCode.toUpperCase(), {
        metadata: { name: myName, avatar: myAvatar }
      });
      conn.on('open', () => {
        console.log("✅ Verbunden mit Host");
        updateGameRef({ hostConn: conn, myName: myName });
        setupDataListener(conn);
        conn.send({ type: 'join_request', name: myName, avatar: myAvatar });
        setGameState('lobby');
      });
      conn.on('error', () => {
        alert("Verbindung fehlgeschlagen");
        setConnectionStatus('disconnected');
      });
    } catch (e) { console.error(e); }
  };

  // --- CANVAS & FLOOD FILL ---
  const getCoordinates = (e) => {
    const canvas = canvasRef.current;
    if (!canvas) return { x: 0, y: 0 };
    const rect = canvas.getBoundingClientRect();
    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;
    return { x: Math.floor((clientX - rect.left) * scaleX), y: Math.floor((clientY - rect.top) * scaleY) };
  };

  const startDrawing = (e) => {
    if (currentDrawer !== myName) return;
    e.preventDefault();
    
    const { x, y } = getCoordinates(e);

    if (tool === 'bucket') {
      fillCanvas(x, y, color, true);
      return;
    }

    isDrawing.current = true;
    lastDrawPoint.current = { x, y };
  };

  const draw = (e) => {
    if (!isDrawing.current || currentDrawer !== myName || tool === 'bucket') return;
    e.preventDefault();
    const point = getCoordinates(e);
    const line = {
      start: lastDrawPoint.current,
      end: point,
      color: tool === 'eraser' ? '#FFFFFF' : color,
      size: tool === 'eraser' ? 20 : brushSize
    };
    drawLine(line, true);
    lastDrawPoint.current = point;
  };

  const stopDrawing = () => isDrawing.current = false;

  const drawLine = (line, emit) => {
    const ctx = canvasRef.current?.getContext('2d');
    if (!ctx) return;
    ctx.beginPath();
    ctx.moveTo(line.start.x, line.start.y);
    ctx.lineTo(line.end.x, line.end.y);
    ctx.strokeStyle = line.color;
    ctx.lineWidth = line.size;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    ctx.stroke();
    if (emit) {
      const data = { type: 'draw_line', line };
      if (isHost) broadcast(data); else sendToHost(data);
    }
  };

  // Optimized Flood Fill
  const fillCanvas = (startX, startY, fillColor, emit) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    
    // Farbe parsen (Hex to RGB)
    const hexToRgb = (hex) => {
      const bigint = parseInt(hex.slice(1), 16);
      return [(bigint >> 16) & 255, (bigint >> 8) & 255, bigint & 255];
    };
    const [r, g, b] = hexToRgb(fillColor);
    const fillR = r, fillG = g, fillB = b;

    const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const data = imgData.data;
    const width = canvas.width;
    const height = canvas.height;

    const getPixelPos = (x, y) => (y * width + x) * 4;
    const startPos = getPixelPos(startX, startY);
    
    const startR = data[startPos], startG = data[startPos + 1], startB = data[startPos + 2];

    if (startR === fillR && startG === fillG && startB === fillB) return;

    const stack = [[startX, startY]];
    
    while (stack.length) {
      const [x, y] = stack.pop();
      const pos = getPixelPos(x, y);

      if (x < 0 || x >= width || y < 0 || y >= height) continue;
      if (data[pos] !== startR || data[pos + 1] !== startG || data[pos + 2] !== startB) continue;

      data[pos] = fillR;
      data[pos + 1] = fillG;
      data[pos + 2] = fillB;
      data[pos + 3] = 255; // Alpha

      stack.push([x + 1, y]);
      stack.push([x - 1, y]);
      stack.push([x, y + 1]);
      stack.push([x, y - 1]);
    }

    ctx.putImageData(imgData, 0, 0);
    playSound('fill');

    if (emit) {
      const packet = { type: 'fill_canvas', x: startX, y: startY, color: fillColor };
      if (isHost) broadcast(packet); else sendToHost(packet);
    }
  };

  const clearCanvas = (emit = false) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = '#FFFFFF';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    if (emit) {
      const data = { type: 'clear_canvas' };
      if (isHost) broadcast(data); else sendToHost(data);
    }
  };

  const sendChat = (e) => {
    e.preventDefault();
    const input = e.target.msg.value.trim();
    if (!input) return;
    const msg = { author: myName, text: input, avatar: myAvatar };
    
    // Fix: Lokales Update NUR wenn ich NICHT Host bin ODER wenn Host Logik es nicht eh schon macht
    // In P2P senden wir die Nachricht ab.
    // Um Dopplungen beim Host zu vermeiden:
    // Host sendet Nachricht -> broadcast -> kommt nicht zurück -> Also Host muss manuell hinzufügen.
    // Client sendet an Host -> Host broadcastet -> Client bekommt zurück? Ja.
    // Logik: 
    // Host: Add local, broadcast.
    // Client: Send to Host. Host broadcasts back to everyone (incl sender).
    // Client: If receive own message via broadcast -> Add.
    // Wait, simple fix: Optimistic UI. Add local. Ignore if incoming author == me.
    
    setMessages(prev => [...prev, msg]);
    playSound('chat');
    
    if (isHost) {
      broadcast({ type: 'chat_message', message: msg });
      // Host check self
      if (msg.author !== gameRef.current.currentDrawer) {
         // Check Host Guess
         const guess = input.toLowerCase();
         const target = gameRef.current.currentWord.toLowerCase();
         if (guess === target) {
            // Host hat erraten logic trigger
            // Simuliere empfangene Nachricht für Logik
            handleChatMessage(msg, null); 
         }
      }
    } else {
      sendToHost({ type: 'chat_message', message: msg });
    }
    e.target.msg.value = '';
  };

  const handleCategoryChange = (cat) => {
    setSelectedCategory(cat);
    broadcast({ type: 'category_change', category: cat });
  };

  // --- RENDER ---
  const colors = ['#000000', '#EF4444', '#22C55E', '#3B82F6', '#EAB308', '#A855F7', '#EC4899', '#F97316', '#9CA3AF', '#FFFFFF'];

  return (
    <div className="min-h-screen bg-indigo-50 font-sans text-slate-800 flex flex-col h-screen overflow-hidden">
      
      {/* Reactions Overlay */}
      <div className="absolute inset-0 pointer-events-none z-50 overflow-hidden">
        <AnimatePresence>
          {reactions.map(r => (
            <motion.div
              key={r.id}
              initial={{ y: '100%', opacity: 1, x: `${r.x}%` }}
              animate={{ y: '0%', opacity: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 2, ease: "easeOut" }}
              className="absolute bottom-0 text-4xl"
            >
              {r.type === 'like' ? '👍' : '👎'}
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* HEADER */}
      <header className="bg-white border-b border-indigo-100 p-3 shadow-sm shrink-0 z-10">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="bg-gradient-to-br from-indigo-500 to-purple-600 text-white p-2 rounded-xl shadow-md rotate-3">
              <Pencil size={24} />
            </div>
            <h1 className="text-2xl font-black bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent hidden md:block tracking-tight">
              DoodleDash
            </h1>
          </div>
          <div className="flex items-center gap-3">
            <button onClick={() => setSoundEnabled(!soundEnabled)} className="p-2 hover:bg-indigo-50 rounded-full text-slate-400">
              {soundEnabled ? <Volume2 size={20}/> : <VolumeX size={20}/>}
            </button>
            <div className={`flex items-center gap-2 px-3 py-1 rounded-full text-sm font-bold ${connectionStatus === 'connected' ? 'bg-green-100 text-green-700' : 'bg-slate-100 text-slate-500'}`}>
               {connectionStatus === 'connected' ? <Wifi size={14}/> : <WifiOff size={14}/>}
               {connectionStatus === 'connected' ? 'Online' : 'Offline'}
            </div>
          </div>
        </div>
      </header>

      <main className="flex-1 relative overflow-hidden">
        <AnimatePresence mode="wait">
          
          {/* MENU */}
          {gameState === 'menu' && (
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }}
              className="absolute inset-0 flex items-center justify-center p-4 bg-white/50 backdrop-blur-sm"
            >
              <div className="bg-white p-8 rounded-3xl shadow-2xl max-w-md w-full border border-indigo-50">
                <div className="text-center mb-6">
                  <h2 className="text-4xl font-black text-slate-800 mb-2 tracking-tight">Start Game</h2>
                  <p className="text-slate-400 font-medium">Wähle deinen Style</p>
                </div>

                <div className="space-y-5">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-wider ml-1">Avatar</label>
                    <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
                      {AVATARS.map(a => (
                        <button 
                          key={a} 
                          onClick={() => setMyAvatar(a)}
                          className={`text-3xl p-2 rounded-2xl transition-all ${myAvatar === a ? 'bg-indigo-100 scale-110 ring-2 ring-indigo-500' : 'hover:bg-slate-50 grayscale hover:grayscale-0'}`}
                        >
                          {a}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="bg-slate-50 p-3 rounded-2xl border border-slate-200 focus-within:ring-2 focus-within:ring-indigo-500 transition-all flex items-center gap-3">
                    <span className="text-2xl">{myAvatar}</span>
                    <input 
                      type="text" 
                      value={myName}
                      onChange={e => setMyName(e.target.value)}
                      className="w-full bg-transparent font-bold text-lg outline-none text-slate-800 placeholder:text-slate-300"
                      placeholder="Dein Name"
                    />
                  </div>

                  <div className="pt-4 space-y-3">
                    <button 
                      onClick={createRoom}
                      className="w-full py-4 bg-indigo-600 text-white rounded-2xl font-bold text-lg shadow-lg hover:bg-indigo-700 hover:scale-[1.02] active:scale-[0.98] transition-all flex justify-center items-center gap-2"
                    >
                      <Play size={20} fill="currentColor" /> Raum erstellen
                    </button>
                    
                    <div className="flex gap-2">
                      <input 
                        type="text" 
                        value={roomCode}
                        onChange={e => setRoomCode(e.target.value)}
                        className="flex-1 bg-slate-100 border-0 rounded-2xl px-4 font-mono text-center uppercase placeholder:text-slate-400 outline-none focus:ring-2 focus:ring-indigo-500"
                        placeholder="CODE"
                      />
                      <button 
                        onClick={joinRoom}
                        className="px-6 bg-white border-2 border-slate-100 text-slate-700 font-bold rounded-2xl hover:bg-slate-50 hover:border-slate-200 transition-all"
                      >
                        Beitreten
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* LOBBY */}
          {gameState === 'lobby' && (
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="absolute inset-0 flex items-center justify-center p-4"
            >
              <div className="bg-white rounded-3xl shadow-2xl max-w-4xl w-full h-[600px] overflow-hidden border border-indigo-50 flex">
                {/* LEFT: Lobby Info */}
                <div className="w-2/3 p-8 flex flex-col">
                  <div className="flex justify-between items-start mb-8">
                    <div>
                      <h2 className="text-3xl font-black text-slate-800 mb-1">Lobby</h2>
                      <div className="flex items-center gap-2 text-slate-400 font-medium">
                        Code: 
                        <button onClick={() => { navigator.clipboard.writeText(roomCode); playSound('tick'); }} className="bg-slate-100 px-2 py-1 rounded-lg font-mono text-slate-800 hover:bg-indigo-100 hover:text-indigo-600 transition-colors flex items-center gap-2">
                          {roomCode} <Copy size={14}/>
                        </button>
                      </div>
                    </div>
                    {isHost && (
                      <div className="flex flex-col items-end gap-1">
                        <span className="text-xs font-bold text-slate-400 uppercase">Kategorie</span>
                        <select 
                          value={selectedCategory} 
                          onChange={(e) => handleCategoryChange(e.target.value)}
                          className="bg-indigo-50 border-0 text-indigo-700 font-bold rounded-xl p-2 text-sm outline-none cursor-pointer"
                        >
                          {Object.keys(CATEGORIES).map(c => <option key={c} value={c}>{c}</option>)}
                        </select>
                      </div>
                    )}
                  </div>

                  <div className="flex-1 overflow-y-auto pr-2">
                    <div className="grid grid-cols-2 gap-3">
                      {players.map((p, i) => (
                        <motion.div 
                          key={p.name}
                          initial={{ scale: 0.8, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          className="p-3 bg-slate-50 rounded-2xl border border-slate-100 flex items-center gap-3"
                        >
                          <div className="text-3xl">{p.avatar}</div>
                          <div className="flex flex-col">
                            <span className="font-bold text-slate-800 leading-tight">{p.name}</span>
                            {p.name === myName && <span className="text-[10px] text-indigo-500 font-bold uppercase">Du</span>}
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 pt-6 border-t border-slate-100">
                    {isHost ? (
                      <button 
                        onClick={startNextRound}
                        disabled={players.length < 2}
                        className="w-full py-4 bg-indigo-600 text-white rounded-2xl font-bold text-lg hover:bg-indigo-700 disabled:opacity-50 transition-all flex justify-center items-center gap-2 shadow-lg shadow-indigo-200"
                      >
                        {players.length < 2 ? <Loader2 className="animate-spin"/> : <Play fill="currentColor"/>} 
                        {players.length < 2 ? 'Warte auf Spieler...' : 'Spiel starten'}
                      </button>
                    ) : (
                      <div className="text-center p-4 bg-slate-50 rounded-2xl border border-slate-100 text-slate-500 font-medium flex items-center justify-center gap-2">
                        <Loader2 size={20} className="animate-spin text-indigo-500" /> Host wählt Einstellungen...
                      </div>
                    )}
                  </div>
                </div>

                {/* RIGHT: Lobby Chat */}
                <div className="w-1/3 bg-slate-50 border-l border-slate-100 flex flex-col">
                  <div className="p-4 border-b border-slate-200 font-bold text-slate-600 flex gap-2 items-center">
                    <MessageSquare size={18}/> Lobby Chat
                  </div>
                  <div className="flex-1 p-4 overflow-y-auto space-y-3 flex flex-col-reverse">
                    {[...messages].reverse().map((m, i) => (
                      <div key={i} className={`text-sm p-2 rounded-xl ${m.author === myName ? 'bg-indigo-100 self-end rounded-tr-none' : 'bg-white border border-slate-200 self-start rounded-tl-none'}`}>
                        <div className="text-[10px] font-bold opacity-50 mb-0.5">{m.author}</div>
                        {m.text}
                      </div>
                    ))}
                  </div>
                  <form onSubmit={sendChat} className="p-3 border-t border-slate-200">
                    <input name="msg" type="text" placeholder="Schreiben..." className="w-full p-2 rounded-xl border border-slate-200 focus:ring-2 focus:ring-indigo-500 outline-none text-sm" autoComplete="off"/>
                  </form>
                </div>
              </div>
            </motion.div>
          )}

          {/* GAME */}
          {gameState === 'playing' && (
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              className="flex flex-col md:flex-row h-full max-w-[1600px] mx-auto p-2 md:p-4 gap-4"
            >
              {/* LEFT: Sidebar */}
              <div className="w-full md:w-72 flex flex-col gap-4 shrink-0">
                {/* Timer & Round */}
                <div className="bg-white p-4 rounded-3xl shadow-sm border border-slate-100 flex flex-col gap-2">
                  <div className="flex justify-between items-center">
                    <div className={`flex items-center gap-2 font-black text-2xl ${timeLeft <= 10 ? 'text-red-500 animate-pulse' : 'text-indigo-600'}`}>
                      <Clock size={24} strokeWidth={3} /> {timeLeft}
                    </div>
                    <div className="text-xs font-bold bg-slate-100 px-3 py-1.5 rounded-lg text-slate-500 uppercase tracking-wider">
                      Runde {round}/3
                    </div>
                  </div>
                </div>

                {/* Leaderboard */}
                <div className="bg-white p-4 rounded-3xl shadow-sm border border-slate-100 flex-1 overflow-y-auto">
                  <h3 className="font-bold text-xs text-slate-400 uppercase tracking-wider mb-4 ml-1">Spieler</h3>
                  <div className="space-y-3">
                    {[...players].sort((a,b) => b.score - a.score).map((p, i) => (
                      <div key={p.name} className={`flex items-center justify-between p-2.5 rounded-2xl ${p.name === currentDrawer ? 'bg-indigo-50 ring-2 ring-indigo-100' : 'bg-slate-50'} transition-all`}>
                        <div className="flex items-center gap-3 overflow-hidden">
                           <span className="font-black text-slate-300 w-4 text-center">{i+1}</span>
                           <span className="text-xl">{p.avatar}</span>
                           <div className="flex flex-col">
                             <div className="truncate font-bold text-sm text-slate-700">{p.name}</div>
                             <div className="text-[10px] font-bold text-slate-400">{p.name === currentDrawer ? 'ZEICHNET' : p.name === myName ? 'DU' : ''}</div>
                           </div>
                        </div>
                        <span className="font-black text-indigo-600">{p.score}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* CENTER: Canvas */}
              <div className="flex-1 flex flex-col min-w-0">
                <div className="bg-white rounded-t-3xl p-4 border-b border-slate-100 flex justify-between items-center shadow-sm relative z-10">
                   <div className="flex gap-2">
                     <button onClick={() => triggerReaction('like')} className="p-2 hover:bg-green-50 rounded-xl text-green-500 transition-colors"><ThumbsUp size={20}/></button>
                     <button onClick={() => triggerReaction('dislike')} className="p-2 hover:bg-red-50 rounded-xl text-red-500 transition-colors"><ThumbsDown size={20}/></button>
                   </div>

                   {currentDrawer === myName ? (
                     <div className="text-center absolute left-1/2 -translate-x-1/2">
                        <span className="text-[10px] font-bold text-indigo-500 uppercase tracking-widest block mb-1">Zeichne</span>
                        <span className="text-2xl md:text-3xl font-black text-slate-800 tracking-wide">{currentWord}</span>
                     </div>
                   ) : (
                     <div className="text-center absolute left-1/2 -translate-x-1/2">
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-1">{currentDrawer} zeichnet</span>
                        <span className="text-2xl md:text-3xl font-black text-slate-800 tracking-[0.5em]">{maskedWord}</span>
                     </div>
                   )}
                   
                   <div className="w-20"></div> {/* Spacer */}
                </div>
                
                <div className="flex-1 bg-white shadow-sm border border-slate-100 relative touch-none overflow-hidden cursor-crosshair group">
                  <canvas
                    ref={canvasRef}
                    width={800}
                    height={600}
                    onMouseDown={startDrawing}
                    onMouseMove={draw}
                    onMouseUp={stopDrawing}
                    onMouseLeave={stopDrawing}
                    onTouchStart={startDrawing}
                    onTouchMove={draw}
                    onTouchEnd={stopDrawing}
                    className="w-full h-full object-contain group-active:cursor-none"
                  />
                </div>

                {/* Tools (Only for Drawer) */}
                {currentDrawer === myName && (
                   <div className="bg-white rounded-b-3xl p-4 border-t border-slate-100 shadow-sm flex items-center gap-6 overflow-x-auto">
                     <div className="flex gap-2">
                       {colors.map(c => (
                         <button 
                           key={c}
                           onClick={() => {setColor(c); if(tool==='eraser') setTool('pen'); playSound('tick');}}
                           className={`w-8 h-8 rounded-full border-4 transition-all ${color === c && tool !== 'eraser' ? 'border-indigo-200 scale-110' : 'border-transparent hover:scale-110'}`}
                           style={{ backgroundColor: c }}
                         />
                       ))}
                     </div>
                     <div className="w-px h-8 bg-slate-200"></div>
                     <div className="flex gap-2 bg-slate-100 p-1 rounded-xl">
                       <button onClick={() => setTool('pen')} className={`p-2 rounded-lg transition-all ${tool === 'pen' ? 'bg-white shadow-sm text-indigo-600' : 'text-slate-400'}`}><Pencil size={20}/></button>
                       <button onClick={() => setTool('bucket')} className={`p-2 rounded-lg transition-all ${tool === 'bucket' ? 'bg-white shadow-sm text-indigo-600' : 'text-slate-400'}`}><PaintBucket size={20}/></button>
                       <button onClick={() => setTool('eraser')} className={`p-2 rounded-lg transition-all ${tool === 'eraser' ? 'bg-white shadow-sm text-indigo-600' : 'text-slate-400'}`}><Eraser size={20}/></button>
                     </div>
                     <div className="w-px h-8 bg-slate-200"></div>
                     <button onClick={() => clearCanvas(true)} className="p-2 rounded-xl bg-red-50 text-red-500 hover:bg-red-100 transition-colors"><Trash2 size={20}/></button>
                     <div className="flex-1">
                        <input type="range" min="2" max="30" value={brushSize} onChange={e => setBrushSize(e.target.value)} className="w-full accent-indigo-600 h-2 bg-slate-100 rounded-lg appearance-none"/>
                     </div>
                   </div>
                )}
                {currentDrawer !== myName && (
                  <div className="bg-slate-50 rounded-b-3xl p-4 border-t border-slate-200 text-center text-sm text-slate-500 font-bold uppercase tracking-wide">
                    Rate das Wort im Chat!
                  </div>
                )}
              </div>

              {/* RIGHT: Chat */}
              <div className="w-full md:w-80 bg-white rounded-3xl shadow-sm border border-slate-100 flex flex-col shrink-0 h-64 md:h-auto">
                <div className="p-4 border-b border-slate-100 font-bold text-slate-700 flex items-center gap-2 bg-slate-50 rounded-t-3xl">
                  <MessageSquare size={18} /> Chat
                </div>
                
                <div className="flex-1 overflow-y-auto p-4 space-y-3 scroll-smooth">
                  {messages.map((m, i) => (
                    <div key={i} className={`text-sm p-3 rounded-2xl shadow-sm max-w-[90%] ${
                      m.type === 'system' 
                        ? 'bg-slate-100 text-slate-500 text-center font-bold text-xs mx-auto w-full shadow-none' 
                        : m.author === myName ? 'bg-indigo-600 text-white ml-auto rounded-tr-none' : 'bg-white border border-slate-100 text-slate-800 mr-auto rounded-tl-none'
                    }`}>
                      {m.type !== 'system' && (
                        <div className={`text-[10px] font-bold mb-0.5 ${m.author === myName ? 'text-indigo-200' : 'text-slate-400'}`}>{m.author}</div>
                      )}
                      {m.text}
                    </div>
                  ))}
                </div>

                <form onSubmit={sendChat} className="p-3 border-t border-slate-100">
                  {currentDrawer === myName ? (
                    <div className="text-center text-xs font-bold text-slate-400 py-3 bg-slate-50 rounded-xl border border-slate-100">
                      🤐 Du darfst nicht verraten!
                    </div>
                  ) : (
                    <input 
                      name="msg"
                      type="text" 
                      placeholder="Dein Tipp..."
                      autoComplete="off"
                      className="w-full p-3 rounded-xl outline-none border-2 border-slate-100 focus:border-indigo-500 transition-all font-medium bg-slate-50 focus:bg-white"
                    />
                  )}
                </form>
              </div>
            </motion.div>
          )}

          {/* GAME OVER */}
          {gameState === 'gameover' && (
             <motion.div 
               initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
               className="absolute inset-0 flex items-center justify-center p-4 bg-black/5 backdrop-blur-sm"
             >
               <div className="bg-white rounded-[2rem] shadow-2xl p-12 text-center max-w-md w-full border border-white/50">
                 <div className="w-24 h-24 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-6 text-white shadow-lg animate-bounce">
                   <Star size={48} fill="white" />
                 </div>
                 <h2 className="text-4xl font-black text-slate-800 mb-2">Spiel Vorbei!</h2>
                 <p className="text-slate-500 mb-8 font-medium">Der Gewinner ist</p>
                 
                 <div className="text-4xl font-black text-indigo-600 mb-10 py-4 px-8 bg-indigo-50 rounded-2xl border-2 border-indigo-100 inline-block transform -rotate-2">
                   {winner}
                 </div>
                 
                 <button 
                   onClick={() => window.location.reload()}
                   className="w-full py-4 bg-black text-white rounded-2xl font-bold text-lg hover:bg-slate-800 transition-all shadow-xl"
                 >
                   Zurück zum Menü
                 </button>
               </div>
             </motion.div>
          )}

        </AnimatePresence>
      </main>
    </div>
  );
}

