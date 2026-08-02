import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowLeft, Users, Play, Eye, EyeOff, RotateCcw, Trophy,
  UserPlus, Trash2, ChevronRight, ChevronLeft, Timer, Vote,
  HelpCircle, X, Shuffle, Check, AlertTriangle, Crown, Skull,
  MessageCircle, ThumbsUp, Sparkles, Settings, Volume2, VolumeX
} from 'lucide-react';
import confetti from 'canvas-confetti';

// ═══════════════════════════════════════════════════
// WORD CATEGORIES
// ═══════════════════════════════════════════════════

const WORD_CATEGORIES = {
  animals: {
    name: { de: 'Tiere', en: 'Animals' },
    emoji: '🐾',
    pairs: [
      // [normal word, imposter word] - similar enough to cause confusion
      ['Hund', 'Katze'], ['Löwe', 'Tiger'], ['Adler', 'Falke'], ['Hai', 'Delfin'],
      ['Pferd', 'Esel'], ['Frosch', 'Kröte'], ['Biene', 'Wespe'], ['Krokodil', 'Alligator'],
      ['Papagei', 'Wellensittich'], ['Wolf', 'Fuchs'], ['Pinguin', 'Robbe'], ['Schmetterling', 'Motte'],
      ['Hamster', 'Meerschweinchen'], ['Rabe', 'Krähe'], ['Gepard', 'Leopard'], ['Kamel', 'Lama'],
      ['Otter', 'Biber'], ['Eichhörnchen', 'Streifenhörnchen'], ['Flamingo', 'Reiher'],
      ['Wal', 'Seekuh'], ['Gorilla', 'Schimpanse'], ['Elefant', 'Nashorn'],
    ]
  },
  food: {
    name: { de: 'Essen', en: 'Food' },
    emoji: '🍕',
    pairs: [
      ['Pizza', 'Flammkuchen'], ['Burger', 'Sandwich'], ['Sushi', 'Sashimi'], ['Pommes', 'Kroketten'],
      ['Kuchen', 'Torte'], ['Brezel', 'Croissant'], ['Nudeln', 'Reis'], ['Suppe', 'Eintopf'],
      ['Eis', 'Sorbet'], ['Käse', 'Butter'], ['Schokolade', 'Karamell'], ['Brot', 'Brötchen'],
      ['Steak', 'Schnitzel'], ['Salat', 'Bowle'], ['Waffel', 'Pfannkuchen'], ['Döner', 'Burrito'],
      ['Bratwurst', 'Currywurst'], ['Müsli', 'Cornflakes'], ['Lasagne', 'Cannelloni'],
      ['Muffin', 'Cupcake'], ['Marmelade', 'Honig'], ['Joghurt', 'Quark'],
    ]
  },
  cities: {
    name: { de: 'Städte', en: 'Cities' },
    emoji: '🏙️',
    pairs: [
      ['Berlin', 'Hamburg'], ['Paris', 'London'], ['Rom', 'Mailand'], ['Tokyo', 'Osaka'],
      ['New York', 'Los Angeles'], ['Wien', 'Zürich'], ['Barcelona', 'Madrid'],
      ['München', 'Stuttgart'], ['Amsterdam', 'Brüssel'], ['Dubai', 'Abu Dhabi'],
      ['Köln', 'Düsseldorf'], ['Sydney', 'Melbourne'], ['Istanbul', 'Athen'],
      ['Prag', 'Budapest'], ['Lissabon', 'Porto'], ['Stockholm', 'Oslo'],
      ['Bangkok', 'Singapur'], ['Kairo', 'Marrakesch'], ['Seoul', 'Taipeh'],
      ['Vancouver', 'Toronto'], ['Rio de Janeiro', 'Buenos Aires'], ['Moskau', 'Sankt Petersburg'],
    ]
  },
  movies: {
    name: { de: 'Filme', en: 'Movies' },
    emoji: '🎬',
    pairs: [
      ['Star Wars', 'Star Trek'], ['Batman', 'Superman'], ['Harry Potter', 'Herr der Ringe'],
      ['Titanic', 'Poseidon'], ['Matrix', 'Inception'], ['Shrek', 'Madagascar'],
      ['Frozen', 'Vaiana'], ['Avengers', 'Justice League'], ['Jurassic Park', 'King Kong'],
      ['Findet Nemo', 'Arielle'], ['Toy Story', 'Cars'], ['Spider-Man', 'Ant-Man'],
      ['James Bond', 'Mission Impossible'], ['Rocky', 'Rambo'], ['Alien', 'Predator'],
      ['Transformers', 'Pacific Rim'], ['Die Hard', 'Speed'], ['Ghostbusters', 'Men in Black'],
      ['Fast & Furious', 'Need for Speed'], ['Gladiator', 'Troja'],
    ]
  },
  sports: {
    name: { de: 'Sport', en: 'Sports' },
    emoji: '⚽',
    pairs: [
      ['Fußball', 'Handball'], ['Tennis', 'Badminton'], ['Basketball', 'Volleyball'],
      ['Schwimmen', 'Tauchen'], ['Ski fahren', 'Snowboarden'], ['Boxen', 'MMA'],
      ['Golf', 'Minigolf'], ['Yoga', 'Pilates'], ['Surfen', 'Wakeboarden'],
      ['Eishockey', 'Feldhockey'], ['Bowling', 'Kegeln'], ['Fechten', 'Bogenschießen'],
      ['Rugby', 'American Football'], ['Klettern', 'Bouldern'], ['Marathon', 'Triathlon'],
      ['Turnen', 'Akrobatik'], ['Segeln', 'Rudern'], ['Judo', 'Karate'],
      ['Tischtennis', 'Squash'], ['Skateboarden', 'Inlineskaten'],
    ]
  },
  jobs: {
    name: { de: 'Berufe', en: 'Jobs' },
    emoji: '💼',
    pairs: [
      ['Arzt', 'Apotheker'], ['Lehrer', 'Professor'], ['Koch', 'Bäcker'], ['Polizist', 'Detektiv'],
      ['Pilot', 'Kapitän'], ['Anwalt', 'Richter'], ['Architekt', 'Ingenieur'],
      ['Fotograf', 'Kameramann'], ['Friseur', 'Kosmetiker'], ['Gärtner', 'Landwirt'],
      ['Elektriker', 'Mechaniker'], ['Journalist', 'Autor'], ['Programmierer', 'Webdesigner'],
      ['Maler', 'Bildhauer'], ['Tierarzt', 'Tierpfleger'], ['Musiker', 'DJ'],
      ['Astronaut', 'Taucher'], ['Zahnarzt', 'Kieferorthopäde'], ['Schauspieler', 'Regisseur'],
      ['Biologe', 'Chemiker'],
    ]
  },
  places: {
    name: { de: 'Orte', en: 'Places' },
    emoji: '📍',
    pairs: [
      ['Strand', 'Pool'], ['Bibliothek', 'Buchhandlung'], ['Restaurant', 'Café'],
      ['Kino', 'Theater'], ['Park', 'Garten'], ['Supermarkt', 'Markt'],
      ['Fitnessstudio', 'Sportplatz'], ['Museum', 'Galerie'], ['Schule', 'Universität'],
      ['Krankenhaus', 'Arztpraxis'], ['Flughafen', 'Bahnhof'], ['Zoo', 'Aquarium'],
      ['Kirche', 'Moschee'], ['Bäckerei', 'Konditorei'], ['Disco', 'Bar'],
      ['Bauernhof', 'Reiterhof'], ['Spielplatz', 'Freizeitpark'], ['Tankstelle', 'Waschanlage'],
      ['Freibad', 'Hallenbad'], ['Camping', 'Hotel'],
    ]
  },
  activities: {
    name: { de: 'Aktivitäten', en: 'Activities' },
    emoji: '🎯',
    pairs: [
      ['Kochen', 'Backen'], ['Lesen', 'Schreiben'], ['Malen', 'Zeichnen'],
      ['Singen', 'Pfeifen'], ['Tanzen', 'Turnen'], ['Wandern', 'Spazieren'],
      ['Angeln', 'Jagen'], ['Stricken', 'Häkeln'], ['Fotografieren', 'Filmen'],
      ['Puzzeln', 'Basteln'], ['Meditieren', 'Beten'], ['Zelten', 'Grillen'],
      ['Reiten', 'Radfahren'], ['Tauchen', 'Schnorcheln'], ['Klettern', 'Abseilen'],
      ['Segeln', 'Kanufahren'], ['Schach', 'Dame'], ['Darten', 'Billard'],
      ['Jonglieren', 'Zaubern'], ['Trampolin', 'Hüpfburg'],
    ]
  },
};

// ═══════════════════════════════════════════════════
// PLAYER AVATARS & COLORS
// ═══════════════════════════════════════════════════

const AVATARS = ['🕵️', '🦊', '🐺', '🦁', '🐯', '🦅', '🐉', '🤠', '🥷', '🧙', '👻', '💀', '🤖', '👽', '🦹', '🎭', '🐙', '🦇', '🐸', '🦉'];

const PLAYER_COLORS = [
  { bg: 'from-blue-500 to-cyan-500', ring: 'ring-blue-400', text: 'text-blue-400', card: 'bg-blue-500/20 border-blue-500/40' },
  { bg: 'from-rose-500 to-pink-500', ring: 'ring-rose-400', text: 'text-rose-400', card: 'bg-rose-500/20 border-rose-500/40' },
  { bg: 'from-emerald-500 to-green-500', ring: 'ring-emerald-400', text: 'text-emerald-400', card: 'bg-emerald-500/20 border-emerald-500/40' },
  { bg: 'from-amber-500 to-yellow-500', ring: 'ring-amber-400', text: 'text-amber-400', card: 'bg-amber-500/20 border-amber-500/40' },
  { bg: 'from-violet-500 to-purple-500', ring: 'ring-violet-400', text: 'text-violet-400', card: 'bg-violet-500/20 border-violet-500/40' },
  { bg: 'from-orange-500 to-red-500', ring: 'ring-orange-400', text: 'text-orange-400', card: 'bg-orange-500/20 border-orange-500/40' },
  { bg: 'from-teal-500 to-cyan-500', ring: 'ring-teal-400', text: 'text-teal-400', card: 'bg-teal-500/20 border-teal-500/40' },
  { bg: 'from-fuchsia-500 to-pink-500', ring: 'ring-fuchsia-400', text: 'text-fuchsia-400', card: 'bg-fuchsia-500/20 border-fuchsia-500/40' },
  { bg: 'from-lime-500 to-green-500', ring: 'ring-lime-400', text: 'text-lime-400', card: 'bg-lime-500/20 border-lime-500/40' },
  { bg: 'from-sky-500 to-blue-500', ring: 'ring-sky-400', text: 'text-sky-400', card: 'bg-sky-500/20 border-sky-500/40' },
];

// ═══════════════════════════════════════════════════
// TRANSLATIONS
// ═══════════════════════════════════════════════════

const T = {
  de: {
    title: 'Wort-Imposter',
    subtitle: 'Finde den Spion unter euch!',
    backToTools: 'Zurück zu Tools',
    players: 'Spieler',
    addPlayer: 'Spieler hinzufügen',
    playerName: 'Name...',
    minPlayers: 'Mindestens 3 Spieler nötig',
    maxPlayers: 'Maximal 10 Spieler',
    start: 'Spiel starten!',
    categories: 'Kategorien',
    selectCategories: 'Wähle Kategorien',
    allCategories: 'Alle',
    settings: 'Einstellungen',
    numImposters: 'Anzahl Imposter',
    discussionTime: 'Diskussionszeit',
    seconds: 'Sek.',
    minutes: 'Min.',
    unlimited: 'Unbegrenzt',
    rules: 'Spielregeln',
    rulesText: [
      'Jeder Spieler bekommt geheim ein Wort gezeigt.',
      'Die Imposter bekommen ein anderes, ähnliches Wort!',
      'In der Diskussion beschreibt jeder reihum sein Wort — seid kreativ, aber nicht zu offensichtlich!',
      'Danach stimmt ihr ab: Wer ist der Imposter?',
      'Der Imposter gewinnt, wenn er nicht erkannt wird!',
    ],
    gotIt: 'Verstanden!',
    passDevice: 'Gerät weitergeben an:',
    tapToReveal: 'Tippe um dein Wort zu sehen',
    yourWord: 'Dein Wort:',
    hideAndPass: 'Verstecken & Weitergeben',
    allSeen: 'Alle haben ihr Wort gesehen!',
    startDiscussion: 'Diskussion starten',
    discussion: 'Diskussion',
    discussionHint: 'Beschreibt euer Wort reihum — seid kreativ aber nicht zu deutlich!',
    timeUp: 'Zeit ist um!',
    startVoting: 'Zur Abstimmung',
    voting: 'Abstimmung',
    votingHint: 'Wer ist der Imposter? Stimmt ab!',
    voteFor: 'Stimme für:',
    confirmVotes: 'Abstimmung beenden',
    everyoneMustVote: 'Jeder Spieler muss abstimmen!',
    results: 'Ergebnis',
    imposterWas: 'Der Imposter war:',
    impostersWere: 'Die Imposter waren:',
    theWord: 'Das Wort war:',
    imposterWord: 'Imposter-Wort:',
    imposterWins: 'Imposter gewinnt! 🕵️',
    crewWins: 'Crew gewinnt! 🎉',
    playAgain: 'Nochmal spielen',
    newGame: 'Neues Spiel',
    round: 'Runde',
    score: 'Punkte',
    skipTimer: 'Timer überspringen',
    youAreImposter: 'DU BIST DER IMPOSTER!',
    youAreNormal: 'Du bist in der Crew!',
    ready: 'Bereit!',
    votes: 'Stimmen',
    eliminated: 'Eliminiert',
    safe: 'Sicher',
    tie: 'Gleichstand! Nochmal diskutieren!',
    noOneVoted: 'Niemand wurde eliminiert.',
  },
  en: {
    title: 'Word Imposter',
    subtitle: 'Find the spy among you!',
    backToTools: 'Back to Tools',
    players: 'Players',
    addPlayer: 'Add Player',
    playerName: 'Name...',
    minPlayers: 'At least 3 players needed',
    maxPlayers: 'Maximum 10 players',
    start: 'Start Game!',
    categories: 'Categories',
    selectCategories: 'Select Categories',
    allCategories: 'All',
    settings: 'Settings',
    numImposters: 'Number of Imposters',
    discussionTime: 'Discussion Time',
    seconds: 'sec',
    minutes: 'min',
    unlimited: 'Unlimited',
    rules: 'How to Play',
    rulesText: [
      'Each player secretly sees a word on the screen.',
      'The imposter(s) get a different but similar word!',
      'During discussion, each player describes their word — be creative, but not too obvious!',
      'Then vote: Who is the imposter?',
      'The imposter wins if they stay undetected!',
    ],
    gotIt: 'Got it!',
    passDevice: 'Pass the device to:',
    tapToReveal: 'Tap to reveal your word',
    yourWord: 'Your word:',
    hideAndPass: 'Hide & Pass On',
    allSeen: 'Everyone has seen their word!',
    startDiscussion: 'Start Discussion',
    discussion: 'Discussion',
    discussionHint: 'Describe your word one by one — be creative but not too obvious!',
    timeUp: "Time's up!",
    startVoting: 'Start Voting',
    voting: 'Voting',
    votingHint: 'Who is the imposter? Cast your votes!',
    voteFor: 'Vote for:',
    confirmVotes: 'Confirm Votes',
    everyoneMustVote: 'Every player must vote!',
    results: 'Results',
    imposterWas: 'The imposter was:',
    impostersWere: 'The imposters were:',
    theWord: 'The word was:',
    imposterWord: 'Imposter word:',
    imposterWins: 'Imposter wins! 🕵️',
    crewWins: 'Crew wins! 🎉',
    playAgain: 'Play Again',
    newGame: 'New Game',
    round: 'Round',
    score: 'Score',
    skipTimer: 'Skip Timer',
    youAreImposter: 'YOU ARE THE IMPOSTER!',
    youAreNormal: "You're in the crew!",
    ready: 'Ready!',
    votes: 'Votes',
    eliminated: 'Eliminated',
    safe: 'Safe',
    tie: 'Tie! Discuss again!',
    noOneVoted: 'Nobody was eliminated.',
  }
};

// ═══════════════════════════════════════════════════
// HELPER FUNCTIONS
// ═══════════════════════════════════════════════════

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function pickRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function fireConfetti() {
  const count = 200;
  const defaults = { origin: { y: 0.7 }, zIndex: 9999 };
  confetti({ ...defaults, particleCount: count * 0.25, spread: 26, startVelocity: 55 });
  confetti({ ...defaults, particleCount: count * 0.2, spread: 60 });
  confetti({ ...defaults, particleCount: count * 0.35, spread: 100, decay: 0.91, scalar: 0.8 });
  confetti({ ...defaults, particleCount: count * 0.1, spread: 120, startVelocity: 25, decay: 0.92, scalar: 1.2 });
  confetti({ ...defaults, particleCount: count * 0.1, spread: 120, startVelocity: 45 });
}

// ═══════════════════════════════════════════════════
// MAIN COMPONENT
// ═══════════════════════════════════════════════════

export default function Imposter() {
  const [lang, setLang] = useState(() => {
    try { return localStorage.getItem('imposter-lang') || 'de'; } catch { return 'de'; }
  });
  const t = T[lang];

  // Game phases: 'setup' | 'reveal' | 'discussion' | 'voting' | 'results'
  const [phase, setPhase] = useState('setup');
  const [showRules, setShowRules] = useState(false);

  // Setup state
  const [players, setPlayers] = useState(() => {
    try {
      const saved = localStorage.getItem('imposter-players');
      if (saved) return JSON.parse(saved);
    } catch {}
    return [
      { id: 1, name: '', avatar: AVATARS[0] },
      { id: 2, name: '', avatar: AVATARS[1] },
      { id: 3, name: '', avatar: AVATARS[2] },
    ];
  });
  const [selectedCategories, setSelectedCategories] = useState(() => {
    try {
      const saved = localStorage.getItem('imposter-categories');
      if (saved) return JSON.parse(saved);
    } catch {}
    return Object.keys(WORD_CATEGORIES);
  });
  const [numImposters, setNumImposters] = useState(1);
  const [discussionSeconds, setDiscussionSeconds] = useState(120);

  // Game state
  const [currentRevealIndex, setCurrentRevealIndex] = useState(0);
  const [wordRevealed, setWordRevealed] = useState(false);
  const [gameWords, setGameWords] = useState({ normal: '', imposter: '' });
  const [imposterIndices, setImposterIndices] = useState([]);
  const [timer, setTimer] = useState(0);
  const [timerRunning, setTimerRunning] = useState(false);
  const [votes, setVotes] = useState({});
  const [round, setRound] = useState(1);
  const [scores, setScores] = useState({});
  const [revealOrder, setRevealOrder] = useState([]);

  const timerRef = useRef(null);
  const nameInputRef = useRef(null);
  const nextId = useRef(4);

  // Persist settings
  useEffect(() => {
    try {
      localStorage.setItem('imposter-lang', lang);
      localStorage.setItem('imposter-players', JSON.stringify(players));
      localStorage.setItem('imposter-categories', JSON.stringify(selectedCategories));
    } catch {}
  }, [lang, players, selectedCategories]);

  // Timer logic
  useEffect(() => {
    if (timerRunning && timer > 0) {
      timerRef.current = setInterval(() => {
        setTimer(prev => {
          if (prev <= 1) {
            setTimerRunning(false);
            clearInterval(timerRef.current);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(timerRef.current);
  }, [timerRunning, timer]);

  const formatTime = (sec) => {
    const m = Math.floor(sec / 60);
    const s = sec % 60;
    return `${m}:${s.toString().padStart(2, '0')}`;
  };

  // ─── SETUP HANDLERS ───

  const addPlayer = useCallback(() => {
    if (players.length >= 10) return;
    const usedAvatars = players.map(p => p.avatar);
    const available = AVATARS.filter(a => !usedAvatars.includes(a));
    const avatar = available.length > 0 ? available[0] : pickRandom(AVATARS);
    setPlayers(prev => [...prev, { id: nextId.current++, name: '', avatar }]);
  }, [players]);

  const removePlayer = useCallback((id) => {
    setPlayers(prev => prev.filter(p => p.id !== id));
  }, []);

  const updatePlayerName = useCallback((id, name) => {
    setPlayers(prev => prev.map(p => p.id === id ? { ...p, name } : p));
  }, []);

  const cycleAvatar = useCallback((id) => {
    setPlayers(prev => prev.map(p => {
      if (p.id !== id) return p;
      const idx = AVATARS.indexOf(p.avatar);
      return { ...p, avatar: AVATARS[(idx + 1) % AVATARS.length] };
    }));
  }, []);

  const toggleCategory = useCallback((cat) => {
    setSelectedCategories(prev => {
      if (prev.includes(cat)) {
        return prev.length > 1 ? prev.filter(c => c !== cat) : prev;
      }
      return [...prev, cat];
    });
  }, []);

  const selectAllCategories = useCallback(() => {
    setSelectedCategories(Object.keys(WORD_CATEGORIES));
  }, []);

  // ─── GAME START ───

  const startGame = useCallback(() => {
    // Validate
    const validPlayers = players.filter(p => p.name.trim());
    if (validPlayers.length < 3) return;

    // Pick word pair from selected categories
    const availablePairs = selectedCategories.flatMap(cat => WORD_CATEGORIES[cat].pairs);
    const [normalWord, imposterWord] = pickRandom(availablePairs);

    // Randomly assign imposters
    const indices = Array.from({ length: validPlayers.length }, (_, i) => i);
    const shuffledIndices = shuffle(indices);
    const imposters = shuffledIndices.slice(0, Math.min(numImposters, validPlayers.length - 1));

    // Random reveal order
    const order = shuffle(indices);

    setPlayers(validPlayers);
    setGameWords({ normal: normalWord, imposter: imposterWord });
    setImposterIndices(imposters);
    setRevealOrder(order);
    setCurrentRevealIndex(0);
    setWordRevealed(false);
    setVotes({});
    setPhase('reveal');

    // Init scores if needed
    setScores(prev => {
      const s = { ...prev };
      validPlayers.forEach(p => {
        if (!(p.id in s)) s[p.id] = 0;
      });
      return s;
    });
  }, [players, selectedCategories, numImposters]);

  // ─── REVEAL HANDLERS ───

  const revealWord = useCallback(() => {
    setWordRevealed(true);
  }, []);

  const hideAndNext = useCallback(() => {
    setWordRevealed(false);
    if (currentRevealIndex < players.length - 1) {
      setCurrentRevealIndex(prev => prev + 1);
    } else {
      // All revealed, transition
      setCurrentRevealIndex(-1);
    }
  }, [currentRevealIndex, players.length]);

  const startDiscussion = useCallback(() => {
    setPhase('discussion');
    if (discussionSeconds > 0) {
      setTimer(discussionSeconds);
      setTimerRunning(true);
    }
  }, [discussionSeconds]);

  // ─── VOTING ───

  const castVote = useCallback((voterIdx, targetIdx) => {
    setVotes(prev => ({ ...prev, [voterIdx]: targetIdx }));
  }, []);

  const confirmVotes = useCallback(() => {
    // Count votes
    const voteCounts = {};
    Object.values(votes).forEach(target => {
      voteCounts[target] = (voteCounts[target] || 0) + 1;
    });

    // Find max votes
    const maxVotes = Math.max(...Object.values(voteCounts), 0);
    const eliminated = Object.entries(voteCounts)
      .filter(([, count]) => count === maxVotes)
      .map(([idx]) => parseInt(idx));

    // Check if imposters were found
    const impostersFound = imposterIndices.every(i => eliminated.includes(i));
    const crewWins = impostersFound && eliminated.length === imposterIndices.length;

    // Update scores
    setScores(prev => {
      const s = { ...prev };
      if (crewWins) {
        // Crew members get points
        players.forEach((p, i) => {
          if (!imposterIndices.includes(i)) {
            s[p.id] = (s[p.id] || 0) + 1;
          }
        });
      } else {
        // Imposters get points
        imposterIndices.forEach(i => {
          s[players[i].id] = (s[players[i].id] || 0) + 1;
        });
      }
      return s;
    });

    if (crewWins) {
      setTimeout(fireConfetti, 300);
    }

    setPhase('results');
  }, [votes, imposterIndices, players]);

  // ─── PLAY AGAIN ───

  const playAgain = useCallback(() => {
    setRound(prev => prev + 1);
    setPhase('setup');
    setWordRevealed(false);
    setCurrentRevealIndex(0);
    setVotes({});
    setTimer(0);
    setTimerRunning(false);
  }, []);

  const newGame = useCallback(() => {
    setRound(1);
    setScores({});
    playAgain();
  }, [playAgain]);

  // ─── Current reveal player ───
  const currentPlayerIdx = phase === 'reveal' && currentRevealIndex >= 0
    ? revealOrder[currentRevealIndex]
    : -1;
  const currentPlayer = currentPlayerIdx >= 0 ? players[currentPlayerIdx] : null;
  const isCurrentImposter = currentPlayerIdx >= 0 && imposterIndices.includes(currentPlayerIdx);

  // ═══════════════════════════════════════════════════
  // RENDER
  // ═══════════════════════════════════════════════════

  return (
    <div className="min-h-screen bg-gradient-to-b from-stone-950 via-stone-900 to-stone-950 text-white overflow-x-hidden">
      {/* Header */}
      <div className="sticky top-0 z-50 bg-stone-950/80 backdrop-blur-lg border-b border-white/10">
        <div className="max-w-2xl mx-auto px-4 py-3 flex items-center justify-between">
          <a href="/tools" className="flex items-center gap-2 text-stone-400 hover:text-white transition-colors text-sm">
            <ArrowLeft size={16} />
            <span className="hidden sm:inline">{t.backToTools}</span>
          </a>
          <div className="flex items-center gap-2">
            <span className="text-2xl">🕵️</span>
            <h1 className="text-lg font-bold bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
              {t.title}
            </h1>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setShowRules(true)}
              className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
            >
              <HelpCircle size={18} />
            </button>
            <button
              onClick={() => setLang(l => l === 'de' ? 'en' : 'de')}
              className="px-2 py-1 text-xs rounded-lg bg-white/5 hover:bg-white/10 transition-colors font-bold"
            >
              {lang === 'de' ? 'EN' : 'DE'}
            </button>
          </div>
        </div>
      </div>

      {/* Score bar */}
      {phase !== 'setup' && (
        <div className="bg-stone-900/50 border-b border-white/5">
          <div className="max-w-2xl mx-auto px-4 py-2 flex items-center justify-between text-sm">
            <span className="text-stone-400">{t.round} {round}</span>
            <div className="flex items-center gap-3">
              {players.map((p, i) => (
                <div key={p.id} className="flex items-center gap-1">
                  <span className="text-xs">{p.avatar}</span>
                  <span className={`text-xs font-mono ${PLAYER_COLORS[i % PLAYER_COLORS.length].text}`}>
                    {scores[p.id] || 0}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Main content */}
      <div className="max-w-2xl mx-auto px-4 py-6">
        <AnimatePresence mode="wait">
          {/* ── SETUP PHASE ── */}
          {phase === 'setup' && (
            <motion.div
              key="setup"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-6"
            >
              {/* Subtitle */}
              <div className="text-center">
                <p className="text-stone-400">{t.subtitle}</p>
              </div>

              {/* Players section */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h2 className="text-lg font-bold flex items-center gap-2">
                    <Users size={20} />
                    {t.players} ({players.length})
                  </h2>
                  {players.length < 10 && (
                    <button
                      onClick={addPlayer}
                      className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-emerald-500/20 text-emerald-400 hover:bg-emerald-500/30 transition-colors text-sm font-medium"
                    >
                      <UserPlus size={14} />
                      {t.addPlayer}
                    </button>
                  )}
                </div>

                <div className="space-y-2">
                  {players.map((player, idx) => (
                    <motion.div
                      key={player.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 20 }}
                      className={`flex items-center gap-3 p-3 rounded-xl border ${PLAYER_COLORS[idx % PLAYER_COLORS.length].card} backdrop-blur-sm`}
                    >
                      <button
                        onClick={() => cycleAvatar(player.id)}
                        className="text-2xl hover:scale-125 transition-transform flex-shrink-0"
                        title="Change avatar"
                      >
                        {player.avatar}
                      </button>
                      <input
                        type="text"
                        value={player.name}
                        onChange={(e) => updatePlayerName(player.id, e.target.value)}
                        placeholder={`${t.playerName}`}
                        maxLength={15}
                        className="flex-1 bg-transparent border-b border-white/20 focus:border-white/50 outline-none py-1 text-white placeholder-stone-500 text-sm"
                      />
                      {players.length > 3 && (
                        <button
                          onClick={() => removePlayer(player.id)}
                          className="p-1.5 rounded-lg text-stone-500 hover:text-red-400 hover:bg-red-500/10 transition-colors"
                        >
                          <Trash2 size={14} />
                        </button>
                      )}
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Categories */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h2 className="text-lg font-bold flex items-center gap-2">
                    <Shuffle size={20} />
                    {t.categories}
                  </h2>
                  <button
                    onClick={selectAllCategories}
                    className="text-xs text-stone-400 hover:text-white transition-colors"
                  >
                    {t.allCategories}
                  </button>
                </div>
                <div className="flex flex-wrap gap-2">
                  {Object.entries(WORD_CATEGORIES).map(([key, cat]) => {
                    const selected = selectedCategories.includes(key);
                    return (
                      <button
                        key={key}
                        onClick={() => toggleCategory(key)}
                        className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all ${
                          selected
                            ? 'bg-white/15 text-white ring-1 ring-white/30'
                            : 'bg-white/5 text-stone-500 hover:bg-white/10 hover:text-stone-300'
                        }`}
                      >
                        {cat.emoji} {cat.name[lang]}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Settings */}
              <div className="space-y-3">
                <h2 className="text-lg font-bold flex items-center gap-2">
                  <Settings size={20} />
                  {t.settings}
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {/* Num imposters */}
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10 space-y-2">
                    <label className="text-sm text-stone-400 flex items-center gap-2">
                      <Skull size={14} />
                      {t.numImposters}
                    </label>
                    <div className="flex items-center gap-2">
                      {[1, 2, 3].map(n => (
                        <button
                          key={n}
                          onClick={() => setNumImposters(n)}
                          disabled={n >= players.filter(p => p.name.trim()).length}
                          className={`px-4 py-2 rounded-lg text-sm font-bold transition-all ${
                            numImposters === n
                              ? 'bg-red-500/30 text-red-300 ring-1 ring-red-500/50'
                              : 'bg-white/5 text-stone-400 hover:bg-white/10 disabled:opacity-30 disabled:cursor-not-allowed'
                          }`}
                        >
                          {n}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Discussion time */}
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10 space-y-2">
                    <label className="text-sm text-stone-400 flex items-center gap-2">
                      <Timer size={14} />
                      {t.discussionTime}
                    </label>
                    <div className="flex items-center gap-2 flex-wrap">
                      {[60, 120, 180, 300, 0].map(sec => (
                        <button
                          key={sec}
                          onClick={() => setDiscussionSeconds(sec)}
                          className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                            discussionSeconds === sec
                              ? 'bg-blue-500/30 text-blue-300 ring-1 ring-blue-500/50'
                              : 'bg-white/5 text-stone-400 hover:bg-white/10'
                          }`}
                        >
                          {sec === 0 ? t.unlimited : sec < 120 ? `${sec} ${t.seconds}` : `${sec / 60} ${t.minutes}`}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Start button */}
              <div className="pt-2">
                {players.filter(p => p.name.trim()).length < 3 ? (
                  <p className="text-center text-stone-500 text-sm flex items-center justify-center gap-2">
                    <AlertTriangle size={14} />
                    {t.minPlayers}
                  </p>
                ) : (
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={startGame}
                    className="w-full py-4 rounded-2xl bg-gradient-to-r from-red-500 to-orange-500 text-white font-bold text-lg shadow-lg shadow-red-500/25 hover:shadow-red-500/40 transition-shadow flex items-center justify-center gap-3"
                  >
                    <Play size={22} />
                    {t.start}
                  </motion.button>
                )}
              </div>
            </motion.div>
          )}

          {/* ── REVEAL PHASE ── */}
          {phase === 'reveal' && (
            <motion.div
              key="reveal"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-6"
            >
              {currentRevealIndex >= 0 && currentPlayer ? (
                <>
                  {/* Progress */}
                  <div className="flex items-center gap-2 justify-center">
                    {players.map((_, i) => (
                      <div
                        key={i}
                        className={`h-1.5 flex-1 max-w-[40px] rounded-full transition-colors ${
                          i < currentRevealIndex ? 'bg-emerald-500'
                            : i === currentRevealIndex ? 'bg-white'
                            : 'bg-white/10'
                        }`}
                      />
                    ))}
                  </div>

                  {/* Pass device message */}
                  {!wordRevealed && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center space-y-6 py-8"
                    >
                      <p className="text-stone-400 text-lg">{t.passDevice}</p>
                      <div className="flex flex-col items-center gap-4">
                        <div className={`text-6xl`}>
                          {currentPlayer.avatar}
                        </div>
                        <h2 className={`text-2xl font-bold ${PLAYER_COLORS[currentPlayerIdx % PLAYER_COLORS.length].text}`}>
                          {currentPlayer.name}
                        </h2>
                      </div>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={revealWord}
                        className="mx-auto flex items-center gap-3 px-8 py-4 rounded-2xl bg-white/10 hover:bg-white/15 border border-white/20 transition-all text-lg"
                      >
                        <Eye size={24} />
                        {t.tapToReveal}
                      </motion.button>
                    </motion.div>
                  )}

                  {/* Word reveal */}
                  {wordRevealed && (
                    <motion.div
                      initial={{ opacity: 0, rotateY: 90 }}
                      animate={{ opacity: 1, rotateY: 0 }}
                      transition={{ type: 'spring', duration: 0.5 }}
                      className="text-center space-y-6 py-4"
                    >
                      <div className={`p-8 rounded-3xl border-2 ${
                        isCurrentImposter
                          ? 'bg-red-500/10 border-red-500/40'
                          : 'bg-emerald-500/10 border-emerald-500/40'
                      }`}>
                        <p className={`text-sm font-bold mb-1 ${isCurrentImposter ? 'text-red-400' : 'text-emerald-400'}`}>
                          {isCurrentImposter ? t.youAreImposter : t.youAreNormal}
                        </p>
                        <p className="text-stone-400 text-sm mb-4">{t.yourWord}</p>
                        <motion.p
                          initial={{ scale: 0.5 }}
                          animate={{ scale: 1 }}
                          className="text-4xl sm:text-5xl font-black"
                        >
                          {isCurrentImposter ? gameWords.imposter : gameWords.normal}
                        </motion.p>
                        {isCurrentImposter && (
                          <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.3 }}
                            className="mt-4 flex items-center justify-center gap-2 text-red-400/70 text-xs"
                          >
                            <Skull size={14} />
                            <span>{lang === 'de' ? 'Verrate dich nicht!' : "Don't blow your cover!"}</span>
                          </motion.div>
                        )}
                      </div>
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={hideAndNext}
                        className="w-full py-4 rounded-2xl bg-white/10 hover:bg-white/15 border border-white/20 transition-all font-bold flex items-center justify-center gap-3"
                      >
                        <EyeOff size={20} />
                        {t.hideAndPass}
                      </motion.button>
                    </motion.div>
                  )}
                </>
              ) : (
                /* All players have seen their word */
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center space-y-8 py-12"
                >
                  <div className="space-y-2">
                    <div className="text-5xl">✅</div>
                    <h2 className="text-2xl font-bold">{t.allSeen}</h2>
                  </div>
                  <div className="flex flex-wrap justify-center gap-3">
                    {players.map((p, i) => (
                      <div key={p.id} className="flex flex-col items-center gap-1">
                        <span className="text-2xl">{p.avatar}</span>
                        <span className={`text-xs ${PLAYER_COLORS[i % PLAYER_COLORS.length].text}`}>{p.name}</span>
                      </div>
                    ))}
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={startDiscussion}
                    className="w-full py-4 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold text-lg shadow-lg shadow-blue-500/25 flex items-center justify-center gap-3"
                  >
                    <MessageCircle size={22} />
                    {t.startDiscussion}
                  </motion.button>
                </motion.div>
              )}
            </motion.div>
          )}

          {/* ── DISCUSSION PHASE ── */}
          {phase === 'discussion' && (
            <motion.div
              key="discussion"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-6"
            >
              <div className="text-center space-y-2">
                <h2 className="text-2xl font-bold flex items-center justify-center gap-3">
                  <MessageCircle size={24} />
                  {t.discussion}
                </h2>
                <p className="text-stone-400 text-sm max-w-md mx-auto">{t.discussionHint}</p>
              </div>

              {/* Timer */}
              {discussionSeconds > 0 && (
                <div className="text-center space-y-3">
                  <motion.div
                    className={`text-6xl font-mono font-black ${timer <= 10 && timer > 0 ? 'text-red-400' : 'text-white'}`}
                    animate={timer <= 10 && timer > 0 ? { scale: [1, 1.1, 1] } : {}}
                    transition={{ repeat: Infinity, duration: 1 }}
                  >
                    {timer === 0 ? t.timeUp : formatTime(timer)}
                  </motion.div>

                  {/* Progress bar */}
                  <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                      initial={{ width: '100%' }}
                      animate={{ width: `${(timer / discussionSeconds) * 100}%` }}
                      transition={{ duration: 0.5 }}
                    />
                  </div>

                  {timer > 0 && (
                    <button
                      onClick={() => { setTimer(0); setTimerRunning(false); }}
                      className="text-sm text-stone-500 hover:text-stone-300 transition-colors"
                    >
                      {t.skipTimer}
                    </button>
                  )}
                </div>
              )}

              {/* Player order reminder */}
              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <div className="flex flex-wrap justify-center gap-4">
                  {revealOrder.map((playerIdx, i) => {
                    const p = players[playerIdx];
                    return (
                      <div key={p.id} className="flex items-center gap-2">
                        <span className="text-stone-600 text-xs font-mono">{i + 1}.</span>
                        <span className="text-xl">{p.avatar}</span>
                        <span className={`text-sm ${PLAYER_COLORS[playerIdx % PLAYER_COLORS.length].text}`}>{p.name}</span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Vote button */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => { setTimerRunning(false); setPhase('voting'); }}
                className="w-full py-4 rounded-2xl bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold text-lg shadow-lg shadow-orange-500/25 flex items-center justify-center gap-3"
              >
                <Vote size={22} />
                {t.startVoting}
              </motion.button>
            </motion.div>
          )}

          {/* ── VOTING PHASE ── */}
          {phase === 'voting' && (
            <motion.div
              key="voting"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-6"
            >
              <div className="text-center space-y-2">
                <h2 className="text-2xl font-bold flex items-center justify-center gap-3">
                  <Vote size={24} />
                  {t.voting}
                </h2>
                <p className="text-stone-400 text-sm">{t.votingHint}</p>
              </div>

              {/* Voting grid */}
              <div className="space-y-4">
                {players.map((voter, voterIdx) => (
                  <div key={voter.id} className={`p-4 rounded-xl border ${PLAYER_COLORS[voterIdx % PLAYER_COLORS.length].card} space-y-2`}>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xl">{voter.avatar}</span>
                      <span className={`font-bold ${PLAYER_COLORS[voterIdx % PLAYER_COLORS.length].text}`}>
                        {voter.name}
                      </span>
                      <span className="text-stone-500 text-sm ml-auto">{t.voteFor}</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {players.map((target, targetIdx) => {
                        if (targetIdx === voterIdx) return null;
                        const selected = votes[voterIdx] === targetIdx;
                        return (
                          <button
                            key={target.id}
                            onClick={() => castVote(voterIdx, targetIdx)}
                            className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm transition-all ${
                              selected
                                ? 'bg-red-500/30 text-red-300 ring-1 ring-red-500/50 scale-105'
                                : 'bg-white/5 text-stone-400 hover:bg-white/10 hover:text-white'
                            }`}
                          >
                            <span>{target.avatar}</span>
                            <span>{target.name}</span>
                            {selected && <Check size={14} />}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>

              {/* Confirm button */}
              <div className="pt-2">
                {Object.keys(votes).length < players.length ? (
                  <p className="text-center text-stone-500 text-sm flex items-center justify-center gap-2">
                    <AlertTriangle size={14} />
                    {t.everyoneMustVote} ({Object.keys(votes).length}/{players.length})
                  </p>
                ) : null}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={confirmVotes}
                  disabled={Object.keys(votes).length < players.length}
                  className="w-full py-4 rounded-2xl bg-gradient-to-r from-red-500 to-pink-500 text-white font-bold text-lg shadow-lg shadow-red-500/25 flex items-center justify-center gap-3 disabled:opacity-40 disabled:cursor-not-allowed mt-3"
                >
                  <Check size={22} />
                  {t.confirmVotes}
                </motion.button>
              </div>
            </motion.div>
          )}

          {/* ── RESULTS PHASE ── */}
          {phase === 'results' && (
            <motion.div
              key="results"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-6"
            >
              {/* Win/Lose announcement */}
              {(() => {
                const voteCounts = {};
                Object.values(votes).forEach(target => {
                  voteCounts[target] = (voteCounts[target] || 0) + 1;
                });
                const maxVotes = Math.max(...Object.values(voteCounts), 0);
                const eliminated = Object.entries(voteCounts)
                  .filter(([, count]) => count === maxVotes)
                  .map(([idx]) => parseInt(idx));
                const impostersFound = imposterIndices.every(i => eliminated.includes(i));
                const crewWins = impostersFound && eliminated.length === imposterIndices.length;

                return (
                  <>
                    <motion.div
                      initial={{ scale: 0.5, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ type: 'spring', duration: 0.6 }}
                      className={`text-center p-8 rounded-3xl border-2 ${
                        crewWins
                          ? 'bg-emerald-500/10 border-emerald-500/40'
                          : 'bg-red-500/10 border-red-500/40'
                      }`}
                    >
                      <div className="text-5xl mb-3">{crewWins ? '🎉' : '🕵️'}</div>
                      <h2 className={`text-3xl font-black mb-2 ${crewWins ? 'text-emerald-400' : 'text-red-400'}`}>
                        {crewWins ? t.crewWins : t.imposterWins}
                      </h2>
                    </motion.div>

                    {/* The imposters */}
                    <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/30 space-y-3">
                      <h3 className="text-sm text-red-400 font-bold">
                        {imposterIndices.length > 1 ? t.impostersWere : t.imposterWas}
                      </h3>
                      <div className="flex flex-wrap gap-3 justify-center">
                        {imposterIndices.map(i => (
                          <motion.div
                            key={players[i].id}
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.3, type: 'spring' }}
                            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-red-500/20 border border-red-500/30"
                          >
                            <span className="text-2xl">{players[i].avatar}</span>
                            <span className="font-bold text-red-300">{players[i].name}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* Words reveal */}
                    <div className="grid grid-cols-2 gap-3">
                      <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-center">
                        <p className="text-xs text-emerald-400 mb-1">{t.theWord}</p>
                        <p className="text-xl font-black text-emerald-300">{gameWords.normal}</p>
                      </div>
                      <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-center">
                        <p className="text-xs text-red-400 mb-1">{t.imposterWord}</p>
                        <p className="text-xl font-black text-red-300">{gameWords.imposter}</p>
                      </div>
                    </div>

                    {/* Vote breakdown */}
                    <div className="space-y-2">
                      <h3 className="text-sm text-stone-400 font-bold">{t.votes}:</h3>
                      <div className="space-y-2">
                        {players.map((p, i) => {
                          const voteCount = Object.values(votes).filter(v => v === i).length;
                          const isImposter = imposterIndices.includes(i);
                          const isEliminated = eliminated.includes(i);
                          return (
                            <div
                              key={p.id}
                              className={`flex items-center gap-3 p-3 rounded-xl border ${
                                isImposter
                                  ? 'bg-red-500/10 border-red-500/30'
                                  : 'bg-white/5 border-white/10'
                              }`}
                            >
                              <span className="text-xl">{p.avatar}</span>
                              <span className={`font-bold flex-1 ${PLAYER_COLORS[i % PLAYER_COLORS.length].text}`}>
                                {p.name}
                              </span>
                              {isImposter && <Skull size={14} className="text-red-400" />}
                              <div className="flex items-center gap-1">
                                {Array.from({ length: voteCount }).map((_, vi) => (
                                  <div key={vi} className="w-3 h-3 rounded-full bg-red-500" />
                                ))}
                                {voteCount === 0 && <span className="text-xs text-stone-600">0</span>}
                              </div>
                              <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${
                                isEliminated
                                  ? 'bg-red-500/20 text-red-400'
                                  : 'bg-emerald-500/20 text-emerald-400'
                              }`}>
                                {isEliminated ? t.eliminated : t.safe}
                              </span>
                            </div>
                          );
                        })}
                      </div>
                    </div>

                    {/* Scores */}
                    <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                      <h3 className="text-sm text-stone-400 font-bold mb-3 flex items-center gap-2">
                        <Trophy size={14} />
                        {t.score}
                      </h3>
                      <div className="flex flex-wrap justify-center gap-4">
                        {[...players]
                          .sort((a, b) => (scores[b.id] || 0) - (scores[a.id] || 0))
                          .map((p, rank) => {
                            const idx = players.findIndex(pl => pl.id === p.id);
                            return (
                              <div key={p.id} className="flex flex-col items-center gap-1">
                                {rank === 0 && <Crown size={14} className="text-amber-400" />}
                                <span className="text-2xl">{p.avatar}</span>
                                <span className={`text-xs ${PLAYER_COLORS[idx % PLAYER_COLORS.length].text}`}>{p.name}</span>
                                <span className="text-lg font-black">{scores[p.id] || 0}</span>
                              </div>
                            );
                          })}
                      </div>
                    </div>
                  </>
                );
              })()}

              {/* Action buttons */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={playAgain}
                  className="py-4 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold shadow-lg shadow-blue-500/25 flex items-center justify-center gap-2"
                >
                  <RotateCcw size={18} />
                  {t.playAgain}
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={newGame}
                  className="py-4 rounded-2xl bg-white/10 hover:bg-white/15 border border-white/20 text-white font-bold flex items-center justify-center gap-2"
                >
                  <Sparkles size={18} />
                  {t.newGame}
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* ── RULES MODAL ── */}
      <AnimatePresence>
        {showRules && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/70 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setShowRules(false)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={e => e.stopPropagation()}
              className="bg-stone-900 rounded-3xl border border-white/10 p-6 max-w-md w-full space-y-4 max-h-[80vh] overflow-y-auto"
            >
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold flex items-center gap-2">
                  <HelpCircle size={20} />
                  {t.rules}
                </h2>
                <button
                  onClick={() => setShowRules(false)}
                  className="p-2 rounded-lg hover:bg-white/10 transition-colors"
                >
                  <X size={18} />
                </button>
              </div>
              <div className="space-y-3">
                {t.rulesText.map((rule, i) => (
                  <div key={i} className="flex gap-3 items-start">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-r from-red-500 to-orange-500 flex items-center justify-center text-xs font-bold">
                      {i + 1}
                    </span>
                    <p className="text-stone-300 text-sm">{rule}</p>
                  </div>
                ))}
              </div>
              <div className="pt-2">
                <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/30">
                  <p className="text-amber-300 text-xs text-center">
                    {lang === 'de'
                      ? '💡 Tipp: Die Wörter sind sich ähnlich — seid also vorsichtig mit euren Beschreibungen!'
                      : '💡 Tip: The words are similar — so be careful with your descriptions!'}
                  </p>
                </div>
              </div>
              <button
                onClick={() => setShowRules(false)}
                className="w-full py-3 rounded-xl bg-white/10 hover:bg-white/15 font-bold transition-colors"
              >
                {t.gotIt}
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
