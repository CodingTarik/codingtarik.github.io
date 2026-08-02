/**
 * AIChat — ChatGPT-style learning assistant with:
 * - Multiple chat sessions (create, rename, delete)
 * - AI responses optimized for learning with auto-generated flashcards
 * - Voice/call mode with speech recognition + TTS
 * - One-click card saving to any deck
 * - SVG illustrations on cards when useful
 */

import { useState, useEffect, useCallback, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLiveQuery } from 'dexie-react-hooks';
import {
  ArrowLeft, Plus, Send, Trash2, Loader, Mic, MicOff, Phone,
  PhoneOff, MessageSquare, ChevronDown, Check, X, Layers,
  Sparkles, Bot, User, Volume2, VolumeX, Edit3, BookOpen,
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import toast from 'react-hot-toast';
import { v4 as uuidv4 } from 'uuid';
import { db } from '../lib/db';
import {
  chatCompletion, hasOpenAIKey, speakWithOpenAI, stopOpenAISpeech,
  createSpeechRecognition, isSpeechRecognitionSupported,
  type ChatMessage as APIChatMessage,
} from '../lib/openai';
import MarkdownRenderer from '../components/MarkdownRenderer';
import { useT } from '../lib/i18n';
import type { ChatSession, ChatSessionMessage, SuggestedCard, Card, Deck } from '../types';
import { DEFAULT_DECK_SETTINGS } from '../types';

const SYSTEM_PROMPT = `You are FlashMaster AI — a brilliant, friendly learning assistant inside a flashcard app.

Your goals:
1. Help the user LEARN and UNDERSTAND topics deeply
2. Explain concepts clearly with examples and analogies
3. When you teach something, ALWAYS generate relevant flashcards

FLASHCARD GENERATION RULES:
- After explaining a concept, generate 1-5 flashcards in a special JSON block
- The JSON block MUST be wrapped in \`\`\`flashcards ... \`\`\` code fence
- Each card has: front (question), back (answer), and optionally frontImageSvg (a simple inline SVG illustration, max 200x150px, with viewBox, using simple shapes and text, dark theme friendly with light colors)
- Only include SVG when it genuinely aids understanding (diagrams, simple charts, visual mnemonics)
- Make cards concise but complete — front is a clear question, back is a precise answer
- Cards should test understanding, not just recall

Example format after your explanation:
\`\`\`flashcards
[
  {"front": "What is photosynthesis?", "back": "The process by which plants convert sunlight, water, and CO₂ into glucose and oxygen."},
  {"front": "What is the chemical equation for photosynthesis?", "back": "6CO₂ + 6H₂O + light → C₆H₁₂O₆ + 6O₂", "frontImageSvg": "<svg viewBox='0 0 200 80' xmlns='http://www.w3.org/2000/svg'><text x='10' y='40' fill='#a78bfa' font-size='14'>6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂</text><text x='85' y='60' fill='#fbbf24' font-size='10'>☀️ light</text></svg>"}
]
\`\`\`

IMPORTANT:
- Be conversational, warm, and encouraging
- Use markdown formatting (bold, lists, code blocks) for clarity
- If the user asks a question, answer it AND generate cards
- If the user says something vague like "teach me X", give a great explanation + cards
- Generate cards in the user's language when possible
- Keep SVGs minimal — simple shapes, arrows, labels. Use colors like #a78bfa (purple), #34d399 (green), #fbbf24 (yellow), #60a5fa (blue)`;

// ── Parse flashcards from AI response ──

function parseFlashcards(content: string): { cleanContent: string; cards: SuggestedCard[] } {
  const cards: SuggestedCard[] = [];
  const cleanContent = content.replace(/```flashcards\s*([\s\S]*?)```/g, (_, jsonBlock) => {
    try {
      const parsed = JSON.parse(jsonBlock.trim());
      if (Array.isArray(parsed)) {
        for (const c of parsed) {
          if (c.front && c.back) {
            cards.push({
              id: uuidv4(),
              front: c.front,
              back: c.back,
              frontImageSvg: c.frontImageSvg || undefined,
              added: false,
            });
          }
        }
      }
    } catch {
      // Try line-by-line parsing if full JSON fails
      try {
        const lines = jsonBlock.trim();
        const arr = JSON.parse(`[${lines}]`);
        for (const c of arr) {
          if (c.front && c.back) {
            cards.push({ id: uuidv4(), front: c.front, back: c.back, frontImageSvg: c.frontImageSvg, added: false });
          }
        }
      } catch { /* ignore */ }
    }
    return ''; // Remove the flashcard block from display
  }).trim();

  return { cleanContent, cards };
}

export default function AIChat() {
  const navigate = useNavigate();
  const { t } = useT();

  const sessions = useLiveQuery(() => db.chatSessions.orderBy('updatedAt').reverse().toArray());
  const decks = useLiveQuery(() => db.decks.orderBy('name').toArray());

  // Active session
  const [activeSessionId, setActiveSessionId] = useState<string | null>(null);
  const [messages, setMessages] = useState<ChatSessionMessage[]>([]);

  // Input
  const [input, setInput] = useState('');
  const [sending, setSending] = useState(false);

  // Sidebar
  const [showSidebar, setShowSidebar] = useState(true);
  const [editingTitle, setEditingTitle] = useState<string | null>(null);
  const [editTitle, setEditTitle] = useState('');

  // Voice mode
  const [voiceMode, setVoiceMode] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [voiceMuted, setVoiceMuted] = useState(false);
  const recognitionRef = useRef<SpeechRecognition | null>(null);
  const [transcript, setTranscript] = useState('');

  // Save card
  const [savingCardId, setSavingCardId] = useState<string | null>(null);
  const [selectedDeckId, setSelectedDeckId] = useState('');

  // Refs
  const chatEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  // ── Load session messages ──
  useEffect(() => {
    if (activeSessionId) {
      db.chatSessions.get(activeSessionId).then(s => {
        if (s) setMessages(s.messages);
      });
    } else {
      setMessages([]);
    }
  }, [activeSessionId]);

  // Auto-scroll
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, sending]);

  // ── Create new session ──
  const createSession = useCallback(async () => {
    const session: ChatSession = {
      id: uuidv4(),
      title: 'New Chat',
      messages: [],
      createdAt: Date.now(),
      updatedAt: Date.now(),
    };
    await db.chatSessions.put(session);
    setActiveSessionId(session.id);
    setMessages([]);
    inputRef.current?.focus();
  }, []);

  // Auto-create first session
  useEffect(() => {
    if (sessions && sessions.length === 0 && !activeSessionId) {
      createSession();
    } else if (sessions && sessions.length > 0 && !activeSessionId) {
      setActiveSessionId(sessions[0].id);
    }
  }, [sessions, activeSessionId, createSession]);

  // ── Delete session ──
  const deleteSession = async (id: string) => {
    await db.chatSessions.delete(id);
    if (activeSessionId === id) {
      const remaining = (sessions || []).filter(s => s.id !== id);
      if (remaining.length > 0) {
        setActiveSessionId(remaining[0].id);
      } else {
        setActiveSessionId(null);
        createSession();
      }
    }
  };

  // ── Rename session ──
  const renameSession = async (id: string) => {
    if (!editTitle.trim()) return;
    await db.chatSessions.update(id, { title: editTitle.trim() });
    setEditingTitle(null);
  };

  // ── Send message ──
  const sendMessage = useCallback(async (text?: string) => {
    const content = (text || input).trim();
    if (!content || !activeSessionId) return;
    if (!hasOpenAIKey()) {
      toast.error('Set your OpenAI API key in Settings first');
      return;
    }

    setInput('');
    setSending(true);

    // Add user message
    const userMsg: ChatSessionMessage = {
      id: uuidv4(),
      role: 'user',
      content,
      timestamp: Date.now(),
    };
    const newMessages = [...messages, userMsg];
    setMessages(newMessages);

    // Update title from first message
    const session = await db.chatSessions.get(activeSessionId);
    if (session && session.messages.length === 0) {
      const autoTitle = content.slice(0, 40) + (content.length > 40 ? '...' : '');
      await db.chatSessions.update(activeSessionId, { title: autoTitle });
    }

    try {
      // Build API messages
      const apiMessages: APIChatMessage[] = [
        { role: 'system', content: SYSTEM_PROMPT },
        ...newMessages.map(m => ({ role: m.role as 'user' | 'assistant', content: m.content })),
      ];

      const response = await chatCompletion(apiMessages, { temperature: 0.7, maxTokens: 1500 });

      // Parse flashcards from response
      const { cleanContent, cards } = parseFlashcards(response);

      const assistantMsg: ChatSessionMessage = {
        id: uuidv4(),
        role: 'assistant',
        content: cleanContent || response,
        timestamp: Date.now(),
        suggestedCards: cards.length > 0 ? cards : undefined,
      };

      const allMessages = [...newMessages, assistantMsg];
      setMessages(allMessages);

      // Save to DB
      await db.chatSessions.update(activeSessionId, {
        messages: allMessages,
        updatedAt: Date.now(),
      });

      // Voice mode: speak the response
      if (voiceMode && !voiceMuted) {
        setIsSpeaking(true);
        try {
          // Strip markdown for cleaner TTS
          const ttsText = cleanContent.replace(/[*_#`>\[\]]/g, '').replace(/\n+/g, '. ').slice(0, 2000);
          await speakWithOpenAI(ttsText);
        } catch { /* ignore */ }
        setIsSpeaking(false);

        // Auto-listen after speaking
        if (voiceMode) startListening();
      }
    } catch (err: any) {
      toast.error(err.message || 'AI response failed');
    } finally {
      setSending(false);
    }
  }, [input, activeSessionId, messages, voiceMode, voiceMuted]);

  // ── Voice mode ──

  const startListening = useCallback(() => {
    if (!isSpeechRecognitionSupported()) {
      toast.error('Speech recognition not supported in this browser');
      return;
    }
    stopOpenAISpeech();
    setIsSpeaking(false);

    const recognition = createSpeechRecognition('en-US');
    if (!recognition) return;

    recognition.continuous = false;
    recognition.interimResults = true;

    recognition.onresult = (event: SpeechRecognitionEvent) => {
      let final = '';
      let interim = '';
      for (let i = 0; i < event.results.length; i++) {
        if (event.results[i].isFinal) {
          final += event.results[i][0].transcript;
        } else {
          interim += event.results[i][0].transcript;
        }
      }
      setTranscript(final || interim);
    };

    recognition.onend = () => {
      setIsListening(false);
      const text = transcript.trim();
      if (text) {
        sendMessage(text);
        setTranscript('');
      }
    };

    recognition.onerror = () => {
      setIsListening(false);
    };

    recognitionRef.current = recognition;
    recognition.start();
    setIsListening(true);
    setTranscript('');
  }, [transcript, sendMessage]);

  const stopListening = useCallback(() => {
    recognitionRef.current?.stop();
    setIsListening(false);
  }, []);

  const toggleVoiceMode = () => {
    if (voiceMode) {
      setVoiceMode(false);
      stopListening();
      stopOpenAISpeech();
      setIsSpeaking(false);
    } else {
      setVoiceMode(true);
      toast.success('Voice mode activated — speak to chat!');
      startListening();
    }
  };

  // ── Save card to deck ──

  const saveCardToDeck = async (card: SuggestedCard, msgId: string) => {
    if (!selectedDeckId) {
      toast.error('Select a deck first');
      return;
    }

    try {
      const deck = await db.decks.get(selectedDeckId);
      const settings = deck?.settings || DEFAULT_DECK_SETTINGS;

      const newCard: Card = {
        id: uuidv4(),
        deckId: selectedDeckId,
        front: card.frontImageSvg
          ? `${card.front}\n\n${card.frontImageSvg}`
          : card.front,
        back: card.back,
        tags: ['ai-chat'],
        noteType: 'basic',
        createdAt: Date.now(),
        updatedAt: Date.now(),
        status: 'new',
        ease: settings.startingEase,
        interval: 0,
        dueDate: Date.now(),
        lapses: 0,
        reps: 0,
        learningStep: 0,
      };
      await db.cards.put(newCard);

      // Mark as added in messages
      const updated = messages.map(m => {
        if (m.id !== msgId || !m.suggestedCards) return m;
        return {
          ...m,
          suggestedCards: m.suggestedCards.map(c =>
            c.id === card.id ? { ...c, added: true, addedDeckId: selectedDeckId } : c
          ),
        };
      });
      setMessages(updated);
      await db.chatSessions.update(activeSessionId!, { messages: updated, updatedAt: Date.now() });

      toast.success(`Card added to "${deck?.name}"!`);
      setSavingCardId(null);
    } catch (err: any) {
      toast.error(err.message || 'Failed to save card');
    }
  };

  const saveAllCards = async (msg: ChatSessionMessage) => {
    if (!selectedDeckId || !msg.suggestedCards) return;
    const deck = await db.decks.get(selectedDeckId);
    const settings = deck?.settings || DEFAULT_DECK_SETTINGS;
    let count = 0;

    for (const card of msg.suggestedCards) {
      if (card.added) continue;
      const newCard: Card = {
        id: uuidv4(),
        deckId: selectedDeckId,
        front: card.frontImageSvg ? `${card.front}\n\n${card.frontImageSvg}` : card.front,
        back: card.back,
        tags: ['ai-chat'],
        noteType: 'basic',
        createdAt: Date.now(),
        updatedAt: Date.now(),
        status: 'new',
        ease: settings.startingEase,
        interval: 0,
        dueDate: Date.now(),
        lapses: 0,
        reps: 0,
        learningStep: 0,
      };
      await db.cards.put(newCard);
      count++;
    }

    // Mark all as added
    const updated = messages.map(m => {
      if (m.id !== msg.id || !m.suggestedCards) return m;
      return {
        ...m,
        suggestedCards: m.suggestedCards.map(c => ({ ...c, added: true, addedDeckId: selectedDeckId })),
      };
    });
    setMessages(updated);
    await db.chatSessions.update(activeSessionId!, { messages: updated, updatedAt: Date.now() });
    toast.success(`${count} cards added to "${deck?.name}"!`);
  };

  // Handle Enter key
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const activeSession = (sessions || []).find(s => s.id === activeSessionId);

  return (
    <div className="h-screen flex bg-slate-950">
      {/* Sidebar - Chat list */}
      <AnimatePresence>
        {showSidebar && (
          <motion.div
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: 260, opacity: 1 }}
            exit={{ width: 0, opacity: 0 }}
            className="flex flex-col bg-slate-900/80 border-r border-slate-800/50 overflow-hidden flex-shrink-0"
          >
            <div className="p-3 border-b border-slate-800/50">
              <button
                onClick={createSession}
                className="w-full flex items-center gap-2 px-3 py-2.5 rounded-xl bg-primary-500/15 text-primary-400 text-sm font-medium hover:bg-primary-500/25 transition-colors"
              >
                <Plus size={16} /> New Chat
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-2 space-y-0.5">
              {(sessions || []).map(s => (
                <div
                  key={s.id}
                  className={`group flex items-center gap-2 px-3 py-2 rounded-xl cursor-pointer transition-colors ${
                    s.id === activeSessionId
                      ? 'bg-primary-500/10 text-white'
                      : 'text-slate-400 hover:bg-slate-800/50 hover:text-white'
                  }`}
                  onClick={() => setActiveSessionId(s.id)}
                >
                  <MessageSquare size={14} className="flex-shrink-0" />
                  {editingTitle === s.id ? (
                    <input
                      value={editTitle}
                      onChange={e => setEditTitle(e.target.value)}
                      onKeyDown={e => { if (e.key === 'Enter') renameSession(s.id); if (e.key === 'Escape') setEditingTitle(null); }}
                      onBlur={() => renameSession(s.id)}
                      className="flex-1 bg-transparent text-xs focus:outline-none border-b border-primary-500/50"
                      autoFocus
                      onClick={e => e.stopPropagation()}
                    />
                  ) : (
                    <span className="flex-1 text-xs truncate">{s.title}</span>
                  )}
                  <div className="flex items-center gap-0.5 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button
                      onClick={e => { e.stopPropagation(); setEditingTitle(s.id); setEditTitle(s.title); }}
                      className="p-1 rounded hover:bg-slate-700/50 text-slate-500 hover:text-white"
                    >
                      <Edit3 size={10} />
                    </button>
                    <button
                      onClick={e => { e.stopPropagation(); deleteSession(s.id); }}
                      className="p-1 rounded hover:bg-red-500/20 text-slate-500 hover:text-red-400"
                    >
                      <Trash2 size={10} />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-3 border-t border-slate-800/50">
              <button
                onClick={() => navigate('/')}
                className="w-full flex items-center gap-2 px-3 py-2 rounded-lg text-xs text-slate-500 hover:text-white hover:bg-slate-800/50 transition-colors"
              >
                <ArrowLeft size={12} /> Back to Dashboard
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Header */}
        <div className="flex items-center gap-2 px-4 py-3 border-b border-slate-800/50 bg-slate-900/40">
          <button
            onClick={() => setShowSidebar(!showSidebar)}
            className="w-8 h-8 rounded-lg bg-slate-800/50 flex items-center justify-center text-slate-400 hover:text-white transition-colors md:hidden"
          >
            <MessageSquare size={14} />
          </button>
          <button
            onClick={() => setShowSidebar(!showSidebar)}
            className="hidden md:flex w-8 h-8 rounded-lg bg-slate-800/50 items-center justify-center text-slate-400 hover:text-white transition-colors"
          >
            <MessageSquare size={14} />
          </button>

          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium truncate flex items-center gap-2">
              <Sparkles size={14} className="text-purple-400 flex-shrink-0" />
              {activeSession?.title || 'AI Chat'}
            </p>
          </div>

          {/* Voice Mode Toggle */}
          <button
            onClick={toggleVoiceMode}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
              voiceMode
                ? 'bg-violet-500/20 text-violet-400 ring-1 ring-violet-500/30'
                : 'bg-slate-800/50 text-slate-400 hover:text-white'
            }`}
          >
            {voiceMode ? <PhoneOff size={14} /> : <Phone size={14} />}
            {voiceMode ? 'End Call' : 'Voice Mode'}
          </button>

          {voiceMode && (
            <button
              onClick={() => setVoiceMuted(!voiceMuted)}
              className={`w-8 h-8 rounded-lg flex items-center justify-center transition-colors ${
                voiceMuted ? 'bg-red-500/20 text-red-400' : 'bg-slate-800/50 text-slate-400 hover:text-white'
              }`}
            >
              {voiceMuted ? <VolumeX size={14} /> : <Volume2 size={14} />}
            </button>
          )}
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4">
          {messages.length === 0 && (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-purple-500/20 to-indigo-500/20 flex items-center justify-center mb-4">
                <Sparkles size={36} className="text-purple-400" />
              </div>
              <p className="text-lg font-bold mb-1">FlashMaster AI</p>
              <p className="text-sm text-slate-500 max-w-md">
                Ask me anything! I'll explain concepts and automatically generate flashcards you can save to your decks.
              </p>
              <div className="grid grid-cols-2 gap-2 mt-6 max-w-md">
                {[
                  'Teach me about photosynthesis',
                  'Explain the French Revolution',
                  'Help me learn React hooks',
                  'What are the planets in our solar system?',
                ].map(suggestion => (
                  <button
                    key={suggestion}
                    onClick={() => { setInput(suggestion); setTimeout(() => sendMessage(suggestion), 50); }}
                    className="px-3 py-2.5 rounded-xl bg-slate-800/40 border border-slate-700/30 text-xs text-slate-400 hover:text-white hover:border-primary-500/30 transition-all text-left"
                  >
                    {suggestion}
                  </button>
                ))}
              </div>
            </div>
          )}

          {messages.map(msg => (
            <div key={msg.id} className={`flex gap-3 ${msg.role === 'user' ? 'justify-end' : ''}`}>
              {msg.role === 'assistant' && (
                <div className="w-8 h-8 rounded-lg bg-purple-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Bot size={16} className="text-purple-400" />
                </div>
              )}

              <div className={`max-w-[80%] ${msg.role === 'user' ? 'order-first' : ''}`}>
                <div className={`rounded-2xl px-4 py-3 ${
                  msg.role === 'user'
                    ? 'bg-primary-500/20 border border-primary-500/20'
                    : 'bg-slate-800/40 border border-slate-700/20'
                }`}>
                  {msg.role === 'assistant' ? (
                    <div className="prose-sm prose-invert">
                      <MarkdownRenderer content={msg.content} />
                    </div>
                  ) : (
                    <p className="text-sm whitespace-pre-wrap">{msg.content}</p>
                  )}
                </div>

                {/* Suggested Flashcards */}
                {msg.suggestedCards && msg.suggestedCards.length > 0 && (
                  <div className="mt-3 space-y-2">
                    <div className="flex items-center justify-between">
                      <p className="text-[10px] text-purple-400 font-medium uppercase tracking-wider flex items-center gap-1">
                        <Sparkles size={10} /> {msg.suggestedCards.length} Flashcard{msg.suggestedCards.length > 1 ? 's' : ''} Generated
                      </p>
                      {msg.suggestedCards.some(c => !c.added) && (
                        <div className="flex items-center gap-2">
                          <select
                            value={selectedDeckId}
                            onChange={e => setSelectedDeckId(e.target.value)}
                            className="px-2 py-1 rounded-md bg-slate-800/60 border border-slate-700/40 text-[10px] focus:outline-none"
                          >
                            <option value="">Select deck...</option>
                            {(decks || []).map(d => (
                              <option key={d.id} value={d.id}>{d.icon} {d.name}</option>
                            ))}
                          </select>
                          {selectedDeckId && (
                            <button
                              onClick={() => saveAllCards(msg)}
                              className="px-2 py-1 rounded-md bg-primary-500/20 text-primary-400 text-[10px] font-medium hover:bg-primary-500/30 transition-colors"
                            >
                              Add All
                            </button>
                          )}
                        </div>
                      )}
                    </div>

                    {msg.suggestedCards.map(card => (
                      <motion.div
                        key={card.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className={`rounded-xl border p-3 transition-all ${
                          card.added
                            ? 'bg-emerald-500/5 border-emerald-500/20'
                            : 'bg-slate-800/30 border-slate-700/30 hover:border-purple-500/30'
                        }`}
                      >
                        <div className="flex gap-3">
                          {/* SVG illustration */}
                          {card.frontImageSvg && (
                            <div
                              className="w-16 h-12 flex-shrink-0 rounded-md overflow-hidden bg-slate-900/60 flex items-center justify-center"
                              dangerouslySetInnerHTML={{ __html: card.frontImageSvg }}
                            />
                          )}
                          <div className="flex-1 min-w-0">
                            <p className="text-xs font-medium mb-0.5">{card.front}</p>
                            <p className="text-[11px] text-slate-400 line-clamp-2">{card.back}</p>
                          </div>
                          {card.added ? (
                            <div className="flex items-center gap-1 text-emerald-400 flex-shrink-0">
                              <Check size={14} />
                              <span className="text-[9px]">Added</span>
                            </div>
                          ) : (
                            <button
                              onClick={() => {
                                if (!selectedDeckId) {
                                  setSavingCardId(card.id);
                                  return;
                                }
                                saveCardToDeck(card, msg.id);
                              }}
                              className="flex items-center gap-1 px-2 py-1 rounded-lg bg-primary-500/15 text-primary-400 text-[10px] font-medium hover:bg-primary-500/25 transition-colors flex-shrink-0 self-center"
                            >
                              <Plus size={10} /> Add
                            </button>
                          )}
                        </div>

                        {/* Inline deck picker for single card */}
                        {savingCardId === card.id && !selectedDeckId && (
                          <div className="mt-2 flex items-center gap-2">
                            <select
                              value={selectedDeckId}
                              onChange={e => setSelectedDeckId(e.target.value)}
                              className="flex-1 px-2 py-1.5 rounded-lg bg-slate-800/60 border border-slate-700/40 text-xs focus:outline-none"
                            >
                              <option value="">Pick a deck...</option>
                              {(decks || []).map(d => (
                                <option key={d.id} value={d.id}>{d.icon} {d.name}</option>
                              ))}
                            </select>
                            <button
                              onClick={() => setSavingCardId(null)}
                              className="text-slate-500 hover:text-white"
                            >
                              <X size={12} />
                            </button>
                          </div>
                        )}
                      </motion.div>
                    ))}
                  </div>
                )}
              </div>

              {msg.role === 'user' && (
                <div className="w-8 h-8 rounded-lg bg-slate-700/50 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <User size={16} className="text-slate-400" />
                </div>
              )}
            </div>
          ))}

          {/* Typing indicator */}
          {sending && (
            <div className="flex gap-3">
              <div className="w-8 h-8 rounded-lg bg-purple-500/20 flex items-center justify-center flex-shrink-0">
                <Bot size={16} className="text-purple-400" />
              </div>
              <div className="bg-slate-800/40 border border-slate-700/20 rounded-2xl px-4 py-3">
                <div className="flex gap-1">
                  <div className="w-2 h-2 rounded-full bg-slate-500 animate-bounce" style={{ animationDelay: '0ms' }} />
                  <div className="w-2 h-2 rounded-full bg-slate-500 animate-bounce" style={{ animationDelay: '150ms' }} />
                  <div className="w-2 h-2 rounded-full bg-slate-500 animate-bounce" style={{ animationDelay: '300ms' }} />
                </div>
              </div>
            </div>
          )}

          <div ref={chatEndRef} />
        </div>

        {/* Voice mode indicator */}
        <AnimatePresence>
          {voiceMode && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="px-4 overflow-hidden"
            >
              <div className={`rounded-xl p-3 mb-2 text-center transition-all ${
                isListening
                  ? 'bg-violet-500/10 border border-violet-500/30'
                  : isSpeaking
                  ? 'bg-purple-500/10 border border-purple-500/30'
                  : 'bg-slate-800/40 border border-slate-700/30'
              }`}>
                <div className="flex items-center justify-center gap-3">
                  {isListening ? (
                    <>
                      <div className="relative">
                        <Mic size={20} className="text-violet-400" />
                        <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse" />
                      </div>
                      <p className="text-xs text-violet-300">
                        {transcript || 'Listening...'}
                      </p>
                      <button onClick={stopListening} className="px-2 py-1 rounded-md bg-slate-700/50 text-[10px] text-slate-400 hover:text-white">
                        Stop
                      </button>
                    </>
                  ) : isSpeaking ? (
                    <>
                      <Volume2 size={20} className="text-purple-400 animate-pulse" />
                      <p className="text-xs text-purple-300">AI is speaking...</p>
                      <button onClick={() => { stopOpenAISpeech(); setIsSpeaking(false); }} className="px-2 py-1 rounded-md bg-slate-700/50 text-[10px] text-slate-400 hover:text-white">
                        Stop
                      </button>
                    </>
                  ) : (
                    <>
                      <MicOff size={16} className="text-slate-500" />
                      <p className="text-xs text-slate-500">Voice mode active — click mic or speak</p>
                      <button onClick={startListening} className="px-2 py-1 rounded-md bg-violet-500/20 text-violet-400 text-[10px] hover:bg-violet-500/30">
                        <Mic size={12} className="inline mr-1" /> Listen
                      </button>
                    </>
                  )}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Input */}
        <div className="px-4 pb-4 pt-2">
          <div className="flex items-end gap-2 bg-slate-800/40 border border-slate-700/30 rounded-2xl px-3 py-2 focus-within:border-primary-500/40 transition-colors">
            {voiceMode && (
              <button
                onClick={isListening ? stopListening : startListening}
                className={`w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 transition-all ${
                  isListening
                    ? 'bg-red-500/20 text-red-400 animate-pulse'
                    : 'bg-violet-500/15 text-violet-400 hover:bg-violet-500/25'
                }`}
              >
                {isListening ? <MicOff size={16} /> : <Mic size={16} />}
              </button>
            )}
            <textarea
              ref={inputRef}
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder={voiceMode ? 'Type or speak...' : 'Ask me anything...'}
              rows={1}
              className="flex-1 bg-transparent focus:outline-none text-sm resize-none max-h-32 py-1.5 placeholder-slate-600"
              style={{ minHeight: '36px' }}
            />
            <button
              onClick={() => sendMessage()}
              disabled={sending || !input.trim()}
              className="w-9 h-9 rounded-xl bg-primary-500/20 text-primary-400 flex items-center justify-center hover:bg-primary-500/30 disabled:opacity-30 transition-all flex-shrink-0"
            >
              {sending ? <Loader size={16} className="animate-spin" /> : <Send size={16} />}
            </button>
          </div>
          <p className="text-[9px] text-slate-700 mt-1 text-center">
            Enter to send · Shift+Enter for new line · AI generates flashcards automatically
          </p>
        </div>
      </div>
    </div>
  );
}
