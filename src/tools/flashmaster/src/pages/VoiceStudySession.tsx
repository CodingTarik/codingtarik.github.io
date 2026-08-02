/**
 * Voice Study Mode — AI-powered conversational flashcard review.
 *
 * Flow:
 * 1. AI presents a flashcard question via voice (OpenAI TTS)
 * 2. User answers by speaking (Web Speech API)
 * 3. AI evaluates, gives feedback, and rates the card
 * 4. Card is updated via the SRS engine
 * 5. Repeat until all cards are done
 */

import { useState, useEffect, useCallback, useRef } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useLiveQuery } from 'dexie-react-hooks';
import {
  X,
  Mic,
  MicOff,
  Volume2,
  VolumeX,
  Zap,
  Clock,
  MessageSquare,
  Send,
  SkipForward,
  ChevronDown,
  Settings,
  Loader,
  Sparkles,
  User,
  Bot,
  Library,
  Search,
  ArrowLeft,
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { db } from '../lib/db';
import { reviewCard, getDueCards } from '../lib/srs';
import { recordStudySession } from '../lib/gamification';
import type { Card, Deck, Rating } from '../types';
import { v4 as uuidv4 } from 'uuid';
import toast from 'react-hot-toast';
import VoiceWaveform from '../components/VoiceWaveform';
import {
  hasOpenAIKey,
  chatCompletion,
  speakWithOpenAI,
  stopOpenAISpeech,
  isOpenAISpeaking,
  buildSystemPrompt,
  buildCardContext,
  parseRating,
  parseNextCard,
  isDone,
  cleanResponseForDisplay,
  transcribeWithWhisper,
  VOICE_STYLES,
  type ChatMessage,
  type VoiceStyle,
} from '../lib/openai';
import { playRatingSound, playComplete, playAchievement } from '../lib/sounds';

interface Props {
  onRefresh: () => void;
}

interface ConversationMessage {
  role: 'user' | 'assistant';
  text: string;
  rating?: Rating;
  ratedCardIdx?: number;   // index in queue — allows retroactive adjustment
  timestamp: number;
}

/* ── Deck Picker ── */

function DeckPicker() {
  const navigate = useNavigate();
  const decks = useLiveQuery(() => db.decks.toArray());
  const [search, setSearch] = useState('');
  const [cardCounts, setCardCounts] = useState<Record<string, number>>({});

  useEffect(() => {
    if (!decks) return;
    (async () => {
      const counts: Record<string, number> = {};
      for (const d of decks) {
        counts[d.id] = await db.cards.where('deckId').equals(d.id).count();
      }
      setCardCounts(counts);
    })();
  }, [decks]);

  const filtered = (decks ?? []).filter((d) =>
    d.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950/30 to-slate-950 flex flex-col">
      {/* Header */}
      <div className="flex items-center gap-3 px-4 py-4 border-b border-white/5">
        <button
          onClick={() => navigate(-1)}
          className="p-2 rounded-xl hover:bg-white/5 transition-colors"
        >
          <ArrowLeft size={20} />
        </button>
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-fuchsia-500 flex items-center justify-center">
          <Mic size={20} />
        </div>
        <div>
          <h1 className="text-lg font-bold">Voice Study Mode</h1>
          <p className="text-xs text-slate-400">Choose a deck to practice with AI</p>
        </div>
      </div>

      {/* Search */}
      <div className="px-4 pt-4">
        <div className="relative">
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search decks..."
            className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500/50 placeholder:text-slate-500"
          />
        </div>
      </div>

      {/* Deck list */}
      <div className="flex-1 overflow-y-auto px-4 py-4 space-y-2">
        {!decks ? (
          <div className="flex items-center justify-center py-20">
            <Loader size={24} className="animate-spin text-purple-400" />
          </div>
        ) : filtered.length === 0 ? (
          <div className="text-center py-20 text-slate-500">
            <Library size={40} className="mx-auto mb-3 opacity-40" />
            <p className="text-sm">{search ? 'No decks match your search' : 'No decks yet'}</p>
          </div>
        ) : (
          filtered.map((deck) => {
            const count = cardCounts[deck.id] ?? 0;
            return (
              <button
                key={deck.id}
                onClick={() => navigate(`/voice/${deck.id}`)}
                className="w-full text-left p-4 rounded-2xl bg-white/[0.03] border border-white/[0.06] hover:bg-white/[0.07] hover:border-purple-500/30 transition-all group"
              >
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center text-lg shrink-0"
                    style={{ backgroundColor: deck.color + '22', color: deck.color }}
                  >
                    {deck.icon || '📚'}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-semibold text-sm truncate group-hover:text-purple-300 transition-colors">
                      {deck.name}
                    </div>
                    {deck.description && (
                      <div className="text-xs text-slate-500 truncate mt-0.5">
                        {deck.description}
                      </div>
                    )}
                    <div className="text-xs text-slate-500 mt-1">
                      {count} {count === 1 ? 'card' : 'cards'}
                    </div>
                  </div>
                  <div className="shrink-0 p-2 rounded-lg bg-purple-500/10 text-purple-400 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Mic size={16} />
                  </div>
                </div>
              </button>
            );
          })
        )}
      </div>
    </div>
  );
}

/* ── Main Export ── */

export default function VoiceStudySession({ onRefresh }: Props) {
  const { id } = useParams<{ id: string }>();

  // If no deck ID, show deck picker
  if (!id) {
    return <DeckPicker />;
  }

  return <VoiceSession id={id} onRefresh={onRefresh} />;
}

function VoiceSession({ id, onRefresh }: { id: string; onRefresh: () => void }) {
  const navigate = useNavigate();

  // Data
  const deck = useLiveQuery(() => db.decks.get(id), [id]);
  const allCards = useLiveQuery(() => db.cards.where('deckId').equals(id).toArray(), [id]);

  // Session state
  const [queue, setQueue] = useState<Card[]>([]);
  const [currentCardIdx, setCurrentCardIdx] = useState(-1);
  const [sessionStarted, setSessionStarted] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const [sessionCards, setSessionCards] = useState(0);
  const [sessionXp, setSessionXp] = useState(0);
  const [startTime] = useState(Date.now());

  // Conversation
  const [conversation, setConversation] = useState<ConversationMessage[]>([]);
  const [chatHistory, setChatHistory] = useState<ChatMessage[]>([]);

  // Voice / UI state
  const [isListening, setIsListening] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isThinking, setIsThinking] = useState(false);
  const [transcript, setTranscript] = useState('');
  const [textInput, setTextInput] = useState('');
  const [showTextInput, setShowTextInput] = useState(false);
  const [muted, setMuted] = useState(false);
  const [showAchievement, setShowAchievement] = useState<string | null>(null);
  const [language, setLanguage] = useState('en');
  const [voiceStyle, setVoiceStyle] = useState<VoiceStyle>('buddy');
  const [editingRatingIdx, setEditingRatingIdx] = useState<number | null>(null);

  // Refs
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioChunksRef = useRef<Blob[]>([]);
  const chatContainerRef = useRef<HTMLDivElement>(null);
  const queueRef = useRef<Card[]>([]);

  // Keep queueRef in sync
  useEffect(() => { queueRef.current = queue; }, [queue]);

  // Scroll chat to bottom
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [conversation, transcript, isThinking]);

  // Initialize queue
  useEffect(() => {
    if (allCards && allCards.length > 0 && deck && queue.length === 0 && !sessionStarted) {
      const { allDue: dueCards } = getDueCards(allCards, deck.settings);
      // Use due cards if available, otherwise fall back to all cards (shuffled)
      let selectedCards: Card[];
      if (dueCards.length > 0) {
        selectedCards = dueCards;
      } else {
        // Shuffle all cards for practice when nothing is due
        selectedCards = [...allCards].sort(() => Math.random() - 0.5);
        toast('No due cards — practicing with all cards', { icon: '🎤' });
      }
      setQueue(selectedCards.slice(0, 30)); // Limit to 30 for voice mode

      // Detect language from deck name or first card
      const sampleText = selectedCards[0]?.front || deck.name;
      if (/[äöüßÄÖÜ]/.test(sampleText) || /^(der|die|das|und|oder|ist|ein|eine)\b/i.test(sampleText)) {
        setLanguage('de');
      }
    }
  }, [allCards, deck, sessionStarted]);

  // Start session
  const startSession = useCallback(async () => {
    if (queue.length === 0 || !deck) return;

    setSessionStarted(true);

    const systemPrompt = buildSystemPrompt(queue, language, voiceStyle);
    const cardContext = buildCardContext(queue);

    const initialMessages: ChatMessage[] = [
      { role: 'system', content: systemPrompt },
      { role: 'system', content: `Here are the flashcards for this session:\n${cardContext}` },
      { role: 'user', content: 'Let\'s start studying! Present the first card.' },
    ];

    setChatHistory(initialMessages);
    setIsThinking(true);

    try {
      const response = await chatCompletion(initialMessages, { temperature: 0.7 });
      const displayText = cleanResponseForDisplay(response);
      const nextCard = parseNextCard(response);

      if (nextCard !== null) setCurrentCardIdx(nextCard);
      else setCurrentCardIdx(0);

      const assistantMsg: ConversationMessage = {
        role: 'assistant',
        text: displayText,
        timestamp: Date.now(),
      };
      setConversation([assistantMsg]);
      setChatHistory(prev => [...prev, { role: 'assistant', content: response }]);

      if (!muted) {
        setIsSpeaking(true);
        try {
          await speakWithOpenAI(displayText);
        } catch {
          // TTS failed, continue silently
        }
        setIsSpeaking(false);
      }
    } catch (err: any) {
      toast.error(`AI Error: ${err.message}`);
    } finally {
      setIsThinking(false);
    }
  }, [queue, deck, language, muted, voiceStyle]);

  // Send message to AI (text or voice)
  const sendMessage = useCallback(async (userText: string) => {
    if (!userText.trim() || isThinking || !deck) return;

    // Add user message to conversation
    const userMsg: ConversationMessage = {
      role: 'user',
      text: userText.trim(),
      timestamp: Date.now(),
    };
    setConversation(prev => [...prev, userMsg]);

    const newHistory: ChatMessage[] = [...chatHistory, { role: 'user', content: userText.trim() }];
    setChatHistory(newHistory);
    setTranscript('');
    setTextInput('');
    setIsThinking(true);

    try {
      const response = await chatCompletion(newHistory, { temperature: 0.7 });
      const displayText = cleanResponseForDisplay(response);
      const rating = parseRating(response);
      const nextCard = parseNextCard(response);
      const done = isDone(response);

      // Handle rating — update card via SRS
      const ratedIdx = (rating && currentCardIdx >= 0 && currentCardIdx < queueRef.current.length) ? currentCardIdx : undefined;
      if (ratedIdx !== undefined) {
        const card = queueRef.current[ratedIdx];
        await processRating(card, rating!);
      }

      if (nextCard !== null) setCurrentCardIdx(nextCard);

      const assistantMsg: ConversationMessage = {
        role: 'assistant',
        text: displayText,
        rating: rating || undefined,
        ratedCardIdx: ratedIdx,
        timestamp: Date.now(),
      };
      setConversation(prev => [...prev, assistantMsg]);
      setChatHistory(prev => [...prev, { role: 'assistant', content: response }]);

      if (done) {
        setIsFinished(true);
        playComplete();
        onRefresh();
      } else if (!muted) {
        setIsSpeaking(true);
        try {
          await speakWithOpenAI(displayText);
        } catch {
          // TTS failed silently
        }
        setIsSpeaking(false);
      }
    } catch (err: any) {
      toast.error(`AI Error: ${err.message}`);
    } finally {
      setIsThinking(false);
    }
  }, [chatHistory, currentCardIdx, deck, muted, isThinking, onRefresh]);

  // Process a card rating through the SRS engine
  const processRating = async (card: Card, rating: Rating) => {
    if (!deck) return;

    playRatingSound(rating);

    const { card: updatedCard, xpEarned } = reviewCard(card, rating, deck.settings);
    await db.cards.put(updatedCard);
    await db.reviewLogs.put({
      id: uuidv4(),
      cardId: card.id,
      deckId: deck.id,
      rating,
      ease: updatedCard.ease,
      interval: updatedCard.interval,
      timeTaken: 0,
      reviewedAt: Date.now(),
    });

    const { newAchievements } = await recordStudySession(rating, xpEarned, 0);
    if (newAchievements.length > 0) {
      playAchievement();
      setShowAchievement(`${newAchievements[0].icon} ${newAchievements[0].name}`);
      setTimeout(() => setShowAchievement(null), 3000);
    }

    setSessionCards(prev => prev + 1);
    setSessionXp(prev => prev + xpEarned);
  };

  // Adjust an already-applied rating retroactively
  const adjustRating = async (msgIndex: number, newRating: Rating) => {
    if (!deck) return;
    const msg = conversation[msgIndex];
    if (!msg || msg.ratedCardIdx === undefined) return;
    const card = queue[msg.ratedCardIdx];
    if (!card) return;

    // Re-fetch the latest card from DB
    const freshCard = await db.cards.get(card.id);
    if (!freshCard) return;

    // Re-review with the new rating
    playRatingSound(newRating);
    const { card: updatedCard } = reviewCard(freshCard, newRating, deck.settings);
    await db.cards.put(updatedCard);

    // Update the review log (replace the most recent log for this card)
    const logs = await db.reviewLogs
      .where('cardId').equals(card.id)
      .reverse().sortBy('reviewedAt');
    if (logs.length > 0) {
      await db.reviewLogs.update(logs[0].id, {
        rating: newRating,
        ease: updatedCard.ease,
        interval: updatedCard.interval,
      });
    }

    // Update conversation message
    setConversation(prev =>
      prev.map((m, i) => i === msgIndex ? { ...m, rating: newRating } : m)
    );
    toast.success(`Rating updated to ${newRating}`);
  };

  // ── Voice Recognition (OpenAI Whisper) ──

  const startListening = useCallback(async () => {
    stopOpenAISpeech();
    setIsSpeaking(false);

    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      audioChunksRef.current = [];
      setTranscript('');
      setIsListening(true);

      // Prefer webm/opus, fall back to whatever the browser supports
      const mimeType = MediaRecorder.isTypeSupported('audio/webm;codecs=opus')
        ? 'audio/webm;codecs=opus'
        : MediaRecorder.isTypeSupported('audio/webm')
          ? 'audio/webm'
          : 'audio/mp4';

      const recorder = new MediaRecorder(stream, { mimeType });

      recorder.ondataavailable = (e) => {
        if (e.data.size > 0) audioChunksRef.current.push(e.data);
      };

      recorder.onstop = async () => {
        // Stop all tracks to release the microphone
        stream.getTracks().forEach(t => t.stop());

        const audioBlob = new Blob(audioChunksRef.current, { type: mimeType });
        if (audioBlob.size < 1000) {
          // Too short / empty recording
          setIsListening(false);
          setTranscript('');
          return;
        }

        // Transcribe with Whisper
        setTranscript('...');
        try {
          const langCode = language === 'de' ? 'de' : language === 'en' ? 'en' : undefined;
          const text = await transcribeWithWhisper(audioBlob, langCode);
          setTranscript(text);
          if (text.trim()) {
            sendMessage(text.trim());
          }
        } catch (err: any) {
          console.error('Whisper transcription error:', err);
          toast.error(err.message || 'Transcription failed');
        } finally {
          setIsListening(false);
        }
      };

      // Collect data in 250ms chunks for faster processing
      recorder.start(250);
      mediaRecorderRef.current = recorder;
    } catch (err: any) {
      console.error('Microphone access error:', err);
      toast.error('Microphone access denied. Use text input instead.');
      setShowTextInput(true);
      setIsListening(false);
    }
  }, [language, sendMessage]);

  const stopListening = useCallback(() => {
    if (mediaRecorderRef.current && mediaRecorderRef.current.state !== 'inactive') {
      mediaRecorderRef.current.stop();
      mediaRecorderRef.current = null;
    }
    // Note: isListening will be set to false in recorder.onstop after Whisper completes
  }, []);

  // Send transcript when user stops recording
  const handleSendTranscript = useCallback(() => {
    // Stop recording — the onstop handler will transcribe and send
    stopListening();
  }, [stopListening]);

  // Toggle mic
  const toggleMic = useCallback(() => {
    if (isListening) {
      handleSendTranscript();
    } else {
      startListening();
    }
  }, [isListening, handleSendTranscript, startListening]);

  // Cleanup
  useEffect(() => {
    return () => {
      stopOpenAISpeech();
      if (mediaRecorderRef.current && mediaRecorderRef.current.state !== 'inactive') {
        mediaRecorderRef.current.stop();
      }
    };
  }, []);

  // ── Render ──

  if (!deck || !allCards) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader size={24} className="animate-spin text-primary-400" />
      </div>
    );
  }

  if (!hasOpenAIKey()) {
    return (
      <div className="min-h-screen flex items-center justify-center p-6">
        <div className="max-w-md w-full text-center glass-card rounded-2xl p-8">
          <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-purple-500/20 flex items-center justify-center">
            <Sparkles size={32} className="text-purple-400" />
          </div>
          <h2 className="text-xl font-bold mb-2">Voice Mode Setup</h2>
          <p className="text-sm text-slate-400 mb-6">
            Voice Mode requires an OpenAI API key. Add your key in Settings to get started.
          </p>
          <div className="flex gap-3">
            <button
              onClick={() => navigate(-1)}
              className="flex-1 py-3 rounded-xl bg-slate-800/50 hover:bg-slate-700/50 text-sm font-medium transition-colors"
            >
              Go Back
            </button>
            <button
              onClick={() => navigate('/settings')}
              className="flex-1 py-3 rounded-xl bg-gradient-to-r from-primary-600 to-purple-600 hover:from-primary-500 hover:to-purple-500 text-sm font-medium transition-all"
            >
              <Settings size={16} className="inline mr-1.5" />
              Open Settings
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Finished screen
  if (isFinished) {
    const elapsed = Math.round((Date.now() - startTime) / 1000);
    const minutes = Math.floor(elapsed / 60);
    const seconds = elapsed % 60;

    return (
      <div className="min-h-screen flex items-center justify-center p-6">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="max-w-md w-full glass-card rounded-2xl p-8 text-center"
        >
          <div className="text-6xl mb-4">🎉</div>
          <h2 className="text-2xl font-bold mb-2">Voice Session Complete!</h2>
          <p className="text-slate-400 mb-6">Great conversation practice!</p>

          <div className="grid grid-cols-3 gap-4 mb-6">
            <div className="glass rounded-xl p-3">
              <p className="text-2xl font-bold text-primary-400">{sessionCards}</p>
              <p className="text-xs text-slate-400">Cards</p>
            </div>
            <div className="glass rounded-xl p-3">
              <p className="text-2xl font-bold text-amber-400">{sessionXp}</p>
              <p className="text-xs text-slate-400">XP</p>
            </div>
            <div className="glass rounded-xl p-3">
              <p className="text-2xl font-bold text-emerald-400">{minutes}:{seconds.toString().padStart(2, '0')}</p>
              <p className="text-xs text-slate-400">Time</p>
            </div>
          </div>

          <button
            onClick={() => navigate(`/deck/${id}`)}
            className="w-full py-3 rounded-xl bg-gradient-to-r from-primary-600 to-purple-600 hover:from-primary-500 hover:to-purple-500 font-medium transition-all"
          >
            Done
          </button>
        </motion.div>
      </div>
    );
  }

  // Pre-session screen
  if (!sessionStarted) {
    return (
      <div className="min-h-screen flex items-center justify-center p-6">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="max-w-md w-full glass-card rounded-2xl p-8 text-center"
        >
          <div className="w-20 h-20 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-purple-500/30 to-primary-500/30 flex items-center justify-center">
            <Mic size={36} className="text-purple-400" />
          </div>
          <h2 className="text-2xl font-bold mb-2">Voice Study Mode</h2>
          <p className="text-sm text-slate-400 mb-2">
            <span className="text-2xl mr-2">{deck.icon}</span>
            {deck.name} — {queue.length} cards
          </p>
          <p className="text-xs text-slate-500 mb-6">
            An AI study partner will quiz you. Speak your answers and have a real conversation about your flashcards.
          </p>

          {/* Conversation Style */}
          <div className="mb-5">
            <p className="text-xs text-slate-400 mb-2.5">Conversation style:</p>
            <div className="grid grid-cols-3 gap-2">
              {(Object.entries(VOICE_STYLES) as [VoiceStyle, typeof VOICE_STYLES[VoiceStyle]][]).map(([key, s]) => (
                <button
                  key={key}
                  onClick={() => setVoiceStyle(key)}
                  className={`relative p-2.5 rounded-xl text-center transition-all ${
                    voiceStyle === key
                      ? 'bg-purple-500/20 ring-1 ring-purple-500/50 text-purple-200'
                      : 'bg-slate-800/40 text-slate-400 hover:bg-slate-800/60 hover:text-slate-200'
                  }`}
                >
                  <div className="text-lg mb-0.5">{s.icon}</div>
                  <div className="text-[11px] font-medium leading-tight">{s.label}</div>
                </button>
              ))}
            </div>
            <p className="text-[11px] text-slate-500 mt-2 italic">
              {VOICE_STYLES[voiceStyle].desc}
            </p>
          </div>

          {/* Language select */}
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="text-xs text-slate-400">Language:</span>
            <div className="flex gap-1.5">
              {[
                { code: 'en', flag: '🇬🇧', label: 'English' },
                { code: 'de', flag: '🇩🇪', label: 'Deutsch' },
                { code: 'fr', flag: '🇫🇷', label: 'Français' },
                { code: 'es', flag: '🇪🇸', label: 'Español' },
              ].map(l => (
                <button
                  key={l.code}
                  onClick={() => setLanguage(l.code)}
                  className={`px-3 py-1.5 rounded-lg text-sm transition-all ${
                    language === l.code
                      ? 'bg-purple-500/20 text-purple-300 ring-1 ring-purple-500/40'
                      : 'bg-slate-800/50 text-slate-400 hover:text-white'
                  }`}
                  title={l.label}
                >
                  {l.flag}
                </button>
              ))}
            </div>
          </div>

          <div className="flex gap-3">
            <button
              onClick={() => navigate(-1)}
              className="flex-1 py-3 rounded-xl bg-slate-800/50 hover:bg-slate-700/50 text-sm font-medium transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={startSession}
              className="flex-1 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-primary-600 hover:from-purple-500 hover:to-primary-500 text-sm font-bold transition-all shadow-lg glow-sm"
            >
              <Mic size={16} className="inline mr-1.5" />
              Start Voice Session
            </button>
          </div>
        </motion.div>
      </div>
    );
  }

  // Main session UI
  return (
    <div className="min-h-screen flex flex-col bg-slate-950">
      {/* Header */}
      <div className="flex items-center gap-3 px-4 py-3 glass-card border-b border-slate-800/50">
        <button
          onClick={() => {
            stopOpenAISpeech();
            stopListening();
            navigate(`/deck/${id}`);
          }}
          className="w-9 h-9 rounded-xl bg-slate-800/50 flex items-center justify-center hover:bg-slate-700/50 transition-colors"
        >
          <X size={18} />
        </button>

        <div className="flex-1 min-w-0">
          <p className="text-sm font-medium truncate flex items-center gap-2">
            <Mic size={14} className="text-purple-400" />
            Voice Mode — {deck.name}
          </p>
          <p className="text-xs text-slate-500">
            {VOICE_STYLES[voiceStyle].icon} {sessionCards} cards · {sessionXp} XP
            {currentCardIdx >= 0 && ` · Card ${currentCardIdx + 1}/${queue.length}`}
          </p>
        </div>

        <button
          onClick={() => setMuted(!muted)}
          className={`w-9 h-9 rounded-xl flex items-center justify-center transition-colors ${
            muted ? 'bg-red-500/15 text-red-400' : 'bg-slate-800/50 text-slate-400 hover:text-white'
          }`}
          title={muted ? 'Unmute AI voice' : 'Mute AI voice'}
        >
          {muted ? <VolumeX size={16} /> : <Volume2 size={16} />}
        </button>
      </div>

      {/* Conversation area */}
      <div ref={chatContainerRef} className="flex-1 overflow-y-auto px-4 py-4 space-y-3">
        <AnimatePresence initial={false}>
          {conversation.map((msg, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2 }}
              className={`flex gap-2.5 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              {msg.role === 'assistant' && (
                <div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Bot size={16} className="text-purple-400" />
                </div>
              )}
              <div className={`max-w-[80%] rounded-2xl px-4 py-2.5 ${
                msg.role === 'user'
                  ? 'bg-primary-600/20 text-white rounded-tr-md'
                  : 'bg-slate-800/60 text-slate-200 rounded-tl-md'
              }`}>
                <p className="text-sm leading-relaxed whitespace-pre-wrap">{msg.text}</p>
                {msg.rating && (
                  <div className="mt-1.5 relative">
                    <button
                      onClick={() => setEditingRatingIdx(editingRatingIdx === i ? null : i)}
                      className={`flex items-center gap-1.5 text-xs font-medium transition-all hover:opacity-80 cursor-pointer ${
                        msg.rating === 'easy' ? 'text-blue-400' :
                        msg.rating === 'good' ? 'text-emerald-400' :
                        msg.rating === 'hard' ? 'text-orange-400' :
                        'text-red-400'
                      }`}
                      title="Click to change rating"
                    >
                      <Zap size={10} />
                      Rated: {msg.rating.charAt(0).toUpperCase() + msg.rating.slice(1)}
                      <ChevronDown size={10} className={`transition-transform ${editingRatingIdx === i ? 'rotate-180' : ''}`} />
                    </button>
                    {editingRatingIdx === i && (
                      <div className="mt-1.5 flex gap-1 flex-wrap">
                        {(['again', 'hard', 'good', 'easy'] as Rating[]).map(r => (
                          <button
                            key={r}
                            onClick={() => { adjustRating(i, r); setEditingRatingIdx(null); }}
                            className={`px-2.5 py-1 rounded-lg text-[11px] font-semibold transition-all ${
                              msg.rating === r
                                ? r === 'easy' ? 'bg-blue-500/25 text-blue-300 ring-1 ring-blue-500/40'
                                : r === 'good' ? 'bg-emerald-500/25 text-emerald-300 ring-1 ring-emerald-500/40'
                                : r === 'hard' ? 'bg-orange-500/25 text-orange-300 ring-1 ring-orange-500/40'
                                : 'bg-red-500/25 text-red-300 ring-1 ring-red-500/40'
                                : 'bg-slate-700/50 text-slate-400 hover:text-white hover:bg-slate-600/50'
                            }`}
                          >
                            {r === 'again' ? '❌ Again' : r === 'hard' ? '🟠 Hard' : r === 'good' ? '✅ Good' : '⚡ Easy'}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>
              {msg.role === 'user' && (
                <div className="w-8 h-8 rounded-full bg-primary-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <User size={16} className="text-primary-400" />
                </div>
              )}
            </motion.div>
          ))}
        </AnimatePresence>

        {/* Thinking indicator */}
        {isThinking && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex gap-2.5"
          >
            <div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center flex-shrink-0">
              <Bot size={16} className="text-purple-400" />
            </div>
            <div className="bg-slate-800/60 rounded-2xl rounded-tl-md px-4 py-3 flex items-center gap-2">
              <div className="flex gap-1">
                <div className="w-2 h-2 rounded-full bg-slate-500 animate-bounce" style={{ animationDelay: '0ms' }} />
                <div className="w-2 h-2 rounded-full bg-slate-500 animate-bounce" style={{ animationDelay: '150ms' }} />
                <div className="w-2 h-2 rounded-full bg-slate-500 animate-bounce" style={{ animationDelay: '300ms' }} />
              </div>
            </div>
          </motion.div>
        )}

        {/* Live transcript */}
        {isListening && transcript && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex gap-2.5 justify-end"
          >
            <div className="max-w-[80%] rounded-2xl rounded-tr-md px-4 py-2.5 bg-primary-600/10 border border-primary-500/20">
              <p className="text-sm text-primary-300 italic">{transcript}</p>
            </div>
            <div className="w-8 h-8 rounded-full bg-primary-500/20 flex items-center justify-center flex-shrink-0">
              <User size={16} className="text-primary-400" />
            </div>
          </motion.div>
        )}
      </div>

      {/* Current card info */}
      {currentCardIdx >= 0 && currentCardIdx < queue.length && (
        <div className="px-4 py-2 border-t border-slate-800/30">
          <div className="max-w-2xl mx-auto flex items-center gap-2 text-xs text-slate-500">
            <MessageSquare size={12} />
            <span className="truncate">
              Card {currentCardIdx + 1}: {queue[currentCardIdx].front.replace(/[#*_>\[\]`<>]/g, '').slice(0, 60)}
              {queue[currentCardIdx].front.length > 60 ? '...' : ''}
            </span>
          </div>
        </div>
      )}

      {/* AI speaking indicator */}
      {isSpeaking && (
        <div className="px-4 py-2 flex items-center justify-center gap-3">
          <VoiceWaveform active={true} color="bg-purple-400" bars={7} size="sm" />
          <span className="text-xs text-purple-400 font-medium">AI is speaking...</span>
          <button
            onClick={() => { stopOpenAISpeech(); setIsSpeaking(false); }}
            className="text-xs text-slate-500 hover:text-white px-2 py-1 rounded-lg bg-slate-800/50 transition-colors"
          >
            Stop
          </button>
        </div>
      )}

      {/* Input area */}
      <div className="px-4 py-4 glass-card border-t border-slate-800/50 safe-bottom">
        <div className="max-w-2xl mx-auto">
          {/* Text input mode */}
          {showTextInput && (
            <div className="flex gap-2 mb-3">
              <input
                type="text"
                value={textInput}
                onChange={e => setTextInput(e.target.value)}
                onKeyDown={e => {
                  if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault();
                    sendMessage(textInput);
                  }
                }}
                placeholder="Type your answer..."
                className="flex-1 px-4 py-2.5 rounded-xl bg-slate-800/50 border border-slate-700/50 focus:border-primary-500/50 focus:outline-none text-sm transition-colors"
                disabled={isThinking}
                autoFocus
              />
              <button
                onClick={() => sendMessage(textInput)}
                disabled={!textInput.trim() || isThinking}
                className="w-10 h-10 rounded-xl bg-primary-600 hover:bg-primary-500 flex items-center justify-center disabled:opacity-30 transition-colors"
              >
                <Send size={16} />
              </button>
            </div>
          )}

          <div className="flex items-center justify-center gap-3">
            {/* Toggle text input */}
            <button
              onClick={() => setShowTextInput(!showTextInput)}
              className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${
                showTextInput
                  ? 'bg-primary-500/20 text-primary-400'
                  : 'bg-slate-800/50 text-slate-400 hover:text-white'
              }`}
              title="Toggle text input"
            >
              <MessageSquare size={16} />
            </button>

            {/* Main mic button */}
            <button
              onClick={toggleMic}
              disabled={isThinking || isSpeaking}
              className={`w-16 h-16 rounded-full flex items-center justify-center transition-all shadow-lg ${
                isListening
                  ? 'bg-red-500 hover:bg-red-400 scale-110 glow-md animate-pulse'
                  : isThinking
                    ? 'bg-slate-700 cursor-not-allowed'
                    : 'bg-gradient-to-br from-purple-500 to-primary-500 hover:from-purple-400 hover:to-primary-400 hover:scale-105'
              }`}
              title={isListening ? 'Stop & send' : 'Press to speak'}
            >
              {isThinking ? (
                <Loader size={24} className="animate-spin" />
              ) : isListening ? (
                <MicOff size={24} />
              ) : (
                <Mic size={24} />
              )}
            </button>

            {/* Skip */}
            <button
              onClick={() => sendMessage('Skip this card, move to the next one.')}
              disabled={isThinking}
              className="w-10 h-10 rounded-xl bg-slate-800/50 flex items-center justify-center text-slate-400 hover:text-white disabled:opacity-30 transition-colors"
              title="Skip card"
            >
              <SkipForward size={16} />
            </button>
          </div>

          {/* Status */}
          <div className="flex items-center justify-center gap-4 mt-3 text-[10px] text-slate-500">
            {isListening && (
              <span className="flex items-center gap-1 text-red-400">
                <VoiceWaveform active={true} color="bg-red-400" bars={3} size="sm" />
                Listening...
              </span>
            )}
            {!isListening && !isThinking && !isSpeaking && (
              <span>Tap the mic to speak or use text input</span>
            )}
          </div>
        </div>
      </div>

      {/* Achievement overlay */}
      <AnimatePresence>
        {showAchievement && (
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -50, opacity: 0 }}
            className="fixed top-20 left-1/2 -translate-x-1/2 z-50"
          >
            <div className="px-6 py-3 rounded-2xl bg-gradient-to-r from-amber-500 to-orange-500 shadow-xl text-sm font-bold">
              {showAchievement}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
