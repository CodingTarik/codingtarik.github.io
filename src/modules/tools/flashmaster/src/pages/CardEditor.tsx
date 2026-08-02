import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import {
  ArrowLeft,
  Save,
  Eye,
  EyeOff,
  Image,
  Code,
  Tag,
  Plus,
  X,
  Film,
  Play,
  Search,
  Loader,
  ImagePlus,
  Check,
  Paperclip,
  Trash2,
  FileText,
  FileCode,
  Flag,
  Youtube,
  ListChecks,
  Sparkles,
  Keyboard,
  Layers,
  ArrowUpDown,
  GripVertical,
  ChevronUp,
  ChevronDown,
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import toast from 'react-hot-toast';
import { v4 as uuidv4 } from 'uuid';
import { db } from '../lib/db';
import type { Card, CardAttachment, CardFlag, CardNoteType, IORegion } from '../types';
import { DEFAULT_DECK_SETTINGS, CARD_FLAGS } from '../types';
import MarkdownRenderer from '../components/MarkdownRenderer';
import YouTubeEmbed, { isValidYouTubeUrl } from '../components/YouTubeEmbed';
import { getPlayPhraseUrl, openPlayPhrasePopup } from '../lib/playphrase';
import { searchImages, type SearchResult } from '../lib/imageSearch';
import { useT } from '../lib/i18n';

export default function CardEditor() {
  const { id: deckId, cardId } = useParams<{ id: string; cardId: string }>();
  const navigate = useNavigate();
  const { t } = useT();
  const isNew = !cardId || cardId === 'new';

  const [front, setFront] = useState('');
  const [back, setBack] = useState('');
  const [frontImageUrl, setFrontImageUrl] = useState('');
  const [backImageUrl, setBackImageUrl] = useState('');
  const [tags, setTags] = useState<string[]>([]);
  const [tagInput, setTagInput] = useState('');
  const [noteType, setNoteType] = useState<CardNoteType>('basic');
  const [showPreview, setShowPreview] = useState(false);
  const [activeTab, setActiveTab] = useState<'front' | 'back'>('front');
  // Multiple Choice
  const [mcChoices, setMcChoices] = useState<string[]>(['', '', '', '']);
  const [mcCorrectIndex, setMcCorrectIndex] = useState(0);
  const [mcShuffle, setMcShuffle] = useState(true);
  // AI Dynamic
  const [aiPrompt, setAiPrompt] = useState('');
  const [aiTopic, setAiTopic] = useState('');
  const [aiDifficulty, setAiDifficulty] = useState<'easy' | 'medium' | 'hard'>('medium');
  // Type-In
  const [typeInAnswer, setTypeInAnswer] = useState('');
  const [typeInCaseSensitive, setTypeInCaseSensitive] = useState(false);
  const [typeInAlternatives, setTypeInAlternatives] = useState<string[]>([]);
  const [altInput, setAltInput] = useState('');
  // Image Occlusion
  const [ioImageUrl, setIoImageUrl] = useState('');
  const [ioRegions, setIoRegions] = useState<IORegion[]>([]);
  const [ioDrawing, setIoDrawing] = useState(false);
  const [ioCurrentRegion, setIoCurrentRegion] = useState<{ startX: number; startY: number } | null>(null);
  // Ordering
  const [orderItems, setOrderItems] = useState<string[]>(['', '', '']);
  const [orderItemInput, setOrderItemInput] = useState('');
  // PlayPhrase (playphrase.me)
  const [playPhraseEnabled, setPlayPhraseEnabled] = useState(false);
  const [playPhraseCustom, setPlayPhraseCustom] = useState('');
  const [playPhraseSide, setPlayPhraseSide] = useState<'front' | 'back'>('front');
  // File attachments
  const [attachments, setAttachments] = useState<CardAttachment[]>([]);
  // Flag
  const [flag, setFlag] = useState<CardFlag>(0);
  // YouTube
  const [frontYoutubeUrl, setFrontYoutubeUrl] = useState('');
  const [backYoutubeUrl, setBackYoutubeUrl] = useState('');
  // Image search
  const [imageSearching, setImageSearching] = useState(false);
  const [imageResults, setImageResults] = useState<SearchResult[]>([]);
  const [showImagePicker, setShowImagePicker] = useState(false);
  const [imageSearchQuery, setImageSearchQuery] = useState('');
  const [imageSearchSide, setImageSearchSide] = useState<'front' | 'back'>('back');

  const handleAutoImage = async (side: 'front' | 'back' = 'back') => {
    // Use front text as search query by default
    const query = (side === 'front' ? front : back || front).trim().replace(/[#*_>\[\]`<>/]/g, '').slice(0, 80);
    if (!query) {
      toast.error('Enter some text first');
      return;
    }
    setImageSearchSide(side);
    setImageSearchQuery(query);
    setImageSearching(true);
    setShowImagePicker(true);
    setImageResults([]);
    try {
      const results = await searchImages(query);
      setImageResults(results);
      if (results.length === 0) {
        toast('No images found. Try editing the search term.', { icon: '🔍' });
      }
    } catch {
      toast.error('Image search failed');
    } finally {
      setImageSearching(false);
    }
  };

  const handleImageSearchCustom = async () => {
    if (!imageSearchQuery.trim()) return;
    setImageSearching(true);
    setImageResults([]);
    try {
      const results = await searchImages(imageSearchQuery.trim());
      setImageResults(results);
      if (results.length === 0) {
        toast('No images found. Try a different term.', { icon: '🔍' });
      }
    } catch {
      toast.error('Image search failed');
    } finally {
      setImageSearching(false);
    }
  };

  const selectSearchImage = (result: SearchResult) => {
    if (imageSearchSide === 'front') {
      setFrontImageUrl(result.thumb);
    } else {
      setBackImageUrl(result.thumb);
    }
    setShowImagePicker(false);
    toast.success(`Image added to ${imageSearchSide}!`);
  };

  useEffect(() => {
    if (!isNew && cardId) {
      db.cards.get(cardId).then(card => {
        if (card) {
          setFront(card.front);
          setBack(card.back);
          setFrontImageUrl(card.frontImageUrl || '');
          setBackImageUrl(card.backImageUrl || '');
          setTags(card.tags);
          setNoteType(card.noteType);
          // PlayPhrase
          setPlayPhraseEnabled(card.playPhraseEnabled || false);
          setPlayPhraseCustom(card.playPhraseCustom || '');
          setPlayPhraseSide(card.playPhraseSide || 'front');
          // Attachments
          setAttachments(card.attachments || []);
          // Flag
          setFlag(card.flag || 0);
          // YouTube
          setFrontYoutubeUrl(card.frontYoutubeUrl || '');
          setBackYoutubeUrl(card.backYoutubeUrl || '');
          // Multiple Choice
          if (card.mcChoices) setMcChoices(card.mcChoices);
          if (card.mcCorrectIndex !== undefined) setMcCorrectIndex(card.mcCorrectIndex);
          if (card.mcShuffle !== undefined) setMcShuffle(card.mcShuffle);
          // AI Dynamic
          if (card.aiPrompt) setAiPrompt(card.aiPrompt);
          if (card.aiTopic) setAiTopic(card.aiTopic);
          if (card.aiDifficulty) setAiDifficulty(card.aiDifficulty);
          // Type-In
          if (card.typeInAnswer) setTypeInAnswer(card.typeInAnswer);
          if (card.typeInCaseSensitive !== undefined) setTypeInCaseSensitive(card.typeInCaseSensitive);
          if (card.typeInAcceptAlternatives) setTypeInAlternatives(card.typeInAcceptAlternatives);
          // Image Occlusion
          if (card.ioImageUrl) setIoImageUrl(card.ioImageUrl);
          if (card.ioRegions) setIoRegions(card.ioRegions);
          // Ordering
          if (card.orderItems) setOrderItems(card.orderItems);
        }
      });
    }
  }, [cardId, isNew]);

  const handleSave = async () => {
    // Validate based on card type
    if (noteType === 'multipleChoice') {
      if (!front.trim()) { toast.error('Question is required'); return; }
      const filledChoices = mcChoices.filter(c => c.trim());
      if (filledChoices.length < 2) { toast.error('At least 2 answer choices required'); return; }
      if (mcCorrectIndex >= filledChoices.length) { toast.error('Select a valid correct answer'); return; }
    } else if (noteType === 'aiDynamic') {
      if (!aiPrompt.trim()) { toast.error('AI prompt template is required'); return; }
    } else if (noteType === 'typeIn') {
      if (!front.trim() || !typeInAnswer.trim()) { toast.error('Question and expected answer are required'); return; }
    } else if (noteType === 'imageOcclusion') {
      if (!ioImageUrl) { toast.error('An image is required for Image Occlusion'); return; }
      if (ioRegions.length === 0) { toast.error('Draw at least one mask region on the image'); return; }
    } else if (noteType === 'ordering') {
      const filledItems = orderItems.filter(i => i.trim());
      if (filledItems.length < 2) { toast.error('At least 2 items required for ordering'); return; }
    } else {
      if (!front.trim() || !back.trim()) {
        toast.error(t('cardEditor.toast.bothRequired'));
        return;
      }
    }

    const deck = await db.decks.get(deckId!);
    const settings = deck?.settings || DEFAULT_DECK_SETTINGS;

    // Build auto front/back for special types
    let saveFront = front.trim();
    let saveBack = back.trim();
    if (noteType === 'multipleChoice') {
      saveBack = mcChoices.filter(c => c.trim())[mcCorrectIndex] || '';
    } else if (noteType === 'aiDynamic') {
      saveFront = aiPrompt.trim();
      saveBack = `[AI Dynamic] Topic: ${aiTopic || 'General'}, Difficulty: ${aiDifficulty}`;
    } else if (noteType === 'typeIn') {
      saveBack = typeInAnswer.trim();
    } else if (noteType === 'imageOcclusion') {
      saveFront = front.trim() || 'Image Occlusion';
      saveBack = ioRegions.map(r => r.label || 'Region').join(', ');
    } else if (noteType === 'ordering') {
      const items = orderItems.filter(i => i.trim());
      saveFront = front.trim() || 'Put these in the correct order:';
      saveBack = items.join(' → ');
    }

    const card: Card = {
      id: isNew ? uuidv4() : cardId!,
      deckId: deckId!,
      front: saveFront,
      back: saveBack,
      frontImageUrl: frontImageUrl || undefined,
      backImageUrl: backImageUrl || undefined,
      tags,
      noteType,
      createdAt: Date.now(),
      updatedAt: Date.now(),
      status: 'new',
      ease: settings.startingEase,
      interval: 0,
      dueDate: Date.now(),
      lapses: 0,
      reps: 0,
      learningStep: 0,
      // PlayPhrase (playphrase.me)
      playPhraseEnabled,
      playPhraseCustom: playPhraseCustom.trim() || undefined,
      playPhraseSide,
      // Attachments
      attachments: attachments.length > 0 ? attachments : undefined,
      // Flag
      flag,
      // YouTube
      frontYoutubeUrl: frontYoutubeUrl.trim() || undefined,
      backYoutubeUrl: backYoutubeUrl.trim() || undefined,
      // Multiple Choice
      ...(noteType === 'multipleChoice' && {
        mcChoices: mcChoices.filter(c => c.trim()),
        mcCorrectIndex,
        mcShuffle,
      }),
      // AI Dynamic
      ...(noteType === 'aiDynamic' && {
        aiPrompt: aiPrompt.trim(),
        aiTopic: aiTopic.trim() || undefined,
        aiDifficulty,
      }),
      // Type-In
      ...(noteType === 'typeIn' && {
        typeInAnswer: typeInAnswer.trim(),
        typeInCaseSensitive,
        typeInAcceptAlternatives: typeInAlternatives.filter(a => a.trim()),
      }),
      // Image Occlusion
      ...(noteType === 'imageOcclusion' && {
        ioImageUrl,
        ioRegions,
      }),
      // Ordering
      ...(noteType === 'ordering' && {
        orderItems: orderItems.filter(i => i.trim()),
      }),
    };

    if (!isNew) {
      const existing = await db.cards.get(cardId!);
      if (existing) {
        card.createdAt = existing.createdAt;
        card.status = existing.status;
        card.ease = existing.ease;
        card.interval = existing.interval;
        card.dueDate = existing.dueDate;
        card.lapses = existing.lapses;
        card.reps = existing.reps;
        card.learningStep = existing.learningStep;
        card.starRating = existing.starRating;
        card.isLeech = existing.isLeech;
        card.confidenceLog = existing.confidenceLog;
      }
    }

    await db.cards.put(card);

    // If reversed, also create the reverse card
    if (noteType === 'reversed' && isNew) {
      const reverseCard: Card = {
        ...card,
        id: uuidv4(),
        front: back.trim(),
        back: front.trim(),
        frontImageUrl: backImageUrl || undefined,
        backImageUrl: frontImageUrl || undefined,
        // Flip the PlayPhrase side for reversed card
        playPhraseSide: playPhraseSide === 'front' ? 'back' : 'front',
        // Swap YouTube URLs for reversed card
        frontYoutubeUrl: backYoutubeUrl.trim() || undefined,
        backYoutubeUrl: frontYoutubeUrl.trim() || undefined,
      };
      await db.cards.put(reverseCard);
      toast.success('Card and reverse card created!');
    } else {
      toast.success(isNew ? t('cardEditor.toast.created') : t('cardEditor.toast.updated'));
    }

    navigate(`/deck/${deckId}`);
  };

  const handleSaveAndNew = async () => {
    if (!front.trim() || !back.trim()) {
      toast.error(t('cardEditor.toast.bothRequired'));
      return;
    }
    await handleSave();
    // Reset form but stay on page
    setFront('');
    setBack('');
    setFrontImageUrl('');
    setBackImageUrl('');
    setTags([]);
    setActiveTab('front');
    // Keep PlayPhrase settings for next card (useful for batch entry of same type)
    navigate(`/deck/${deckId}/card/new`, { replace: true });
  };

  const handleAddTag = () => {
    const tag = tagInput.trim().toLowerCase();
    if (tag && !tags.includes(tag)) {
      setTags([...tags, tag]);
    }
    setTagInput('');
  };

  const handleImageUpload = async (side: 'front' | 'back') => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.onchange = async (e) => {
      const file = (e.target as HTMLInputElement).files?.[0];
      if (!file) return;

      // Convert to data URL for offline storage
      const reader = new FileReader();
      reader.onload = (ev) => {
        const dataUrl = ev.target?.result as string;
        if (side === 'front') setFrontImageUrl(dataUrl);
        else setBackImageUrl(dataUrl);
      };
      reader.readAsDataURL(file);
    };
    input.click();
  };

  const handleAddAttachment = () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.multiple = true;
    input.accept = '.pdf,.txt,.md,.csv,.json,.xml,.yaml,.yml,.html,.css,.js,.ts,.tsx,.jsx,.py,.java,.c,.cpp,.h,.go,.rs,.rb,.php,.swift,.kt,.cs,.sql,.sh,.r,.lua,.dart,.log,.ini,.conf,.cfg,.toml,.dockerfile,.makefile,image/*';
    input.onchange = async (e) => {
      const files = (e.target as HTMLInputElement).files;
      if (!files || files.length === 0) return;

      const maxSize = 10 * 1024 * 1024; // 10 MB per file
      const newAttachments: CardAttachment[] = [];

      for (const file of Array.from(files)) {
        if (file.size > maxSize) {
          toast.error(`${file.name} is too large (max 10 MB)`);
          continue;
        }
        try {
          const dataUrl = await new Promise<string>((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = (ev) => resolve(ev.target?.result as string);
            reader.onerror = () => reject(new Error('Read failed'));
            reader.readAsDataURL(file);
          });
          newAttachments.push({
            id: uuidv4(),
            name: file.name,
            type: file.type || 'application/octet-stream',
            dataUrl,
            size: file.size,
          });
        } catch {
          toast.error(`Failed to read ${file.name}`);
        }
      }

      if (newAttachments.length > 0) {
        setAttachments(prev => [...prev, ...newAttachments]);
        toast.success(`${newAttachments.length} file(s) attached`);
      }
    };
    input.click();
  };

  const handleRemoveAttachment = (id: string) => {
    setAttachments(prev => prev.filter(a => a.id !== id));
  };

  const formatFileSize = (bytes: number): string => {
    if (bytes < 1024) return `${bytes} B`;
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
    return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <button
            onClick={() => navigate(`/deck/${deckId}`)}
            className="w-10 h-10 rounded-xl bg-slate-800/50 flex items-center justify-center hover:bg-slate-700/50 transition-colors"
          >
            <ArrowLeft size={20} />
          </button>
          <h1 className="text-2xl font-bold">{isNew ? t('cardEditor.newCard') : t('cardEditor.editCard')}</h1>
        </div>
        <button
          onClick={() => setShowPreview(!showPreview)}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium transition-colors
            ${showPreview ? 'bg-primary-500/20 text-primary-400' : 'bg-slate-800/50 text-slate-400 hover:text-white'}`}
        >
          {showPreview ? <EyeOff size={14} /> : <Eye size={14} />}
          {t('cardEditor.preview')}
        </button>
      </div>

      <div className="space-y-6">
        {/* Card Type */}
        <div className="glass-card rounded-2xl p-5">
          <label className="text-sm font-medium text-slate-300 mb-3 block">{t('cardEditor.cardType')}</label>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {([
              { value: 'basic', label: 'Basic', desc: 'Front → Back', icon: FileText },
              { value: 'reversed', label: 'Reversed', desc: 'Both directions', icon: ArrowUpDown },
              { value: 'cloze', label: 'Cloze', desc: 'Fill in blanks', icon: Code },
              { value: 'multipleChoice', label: 'Multiple Choice', desc: 'Pick the answer', icon: ListChecks },
              { value: 'typeIn', label: 'Type Answer', desc: 'Type to check', icon: Keyboard },
              { value: 'aiDynamic', label: 'AI Dynamic', desc: 'AI-generated', icon: Sparkles },
              { value: 'imageOcclusion', label: 'Img Occlusion', desc: 'Mask image parts', icon: Layers },
              { value: 'ordering', label: 'Ordering', desc: 'Sort items', icon: GripVertical },
            ] as const).map(ct => {
              const Icon = ct.icon;
              return (
                <button
                  key={ct.value}
                  onClick={() => setNoteType(ct.value as CardNoteType)}
                  className={`py-3 px-3 rounded-xl text-sm font-medium transition-all text-left
                    ${noteType === ct.value
                      ? 'bg-primary-500/20 text-primary-400 ring-1 ring-primary-500/50'
                      : 'bg-slate-800/50 text-slate-400 hover:text-white'
                    }`}
                >
                  <Icon size={16} className="mb-1" />
                  <p className="font-medium text-xs">{ct.label}</p>
                  <p className="text-[10px] opacity-50 mt-0.5">{ct.desc}</p>
                </button>
              );
            })}
          </div>
        </div>

        {/* ═══ Multiple Choice Editor ═══ */}
        {noteType === 'multipleChoice' && (
          <div className="glass-card rounded-2xl p-5 space-y-4">
            <label className="text-sm font-medium text-slate-300 flex items-center gap-2">
              <ListChecks size={16} />
              Multiple Choice
            </label>
            <div>
              <label className="text-xs text-slate-400 mb-1.5 block">Question</label>
              <textarea
                value={front}
                onChange={e => setFront(e.target.value)}
                placeholder="Enter your question..."
                rows={3}
                className="w-full px-4 py-3 rounded-xl bg-slate-800/50 border border-slate-700/50 focus:border-primary-500/50 focus:outline-none text-white resize-none text-sm transition-colors"
              />
            </div>
            <div>
              <label className="text-xs text-slate-400 mb-2 block">Answer Choices (click the check to mark correct)</label>
              <div className="space-y-2">
                {mcChoices.map((choice, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <button
                      onClick={() => setMcCorrectIndex(i)}
                      className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 transition-all ${
                        mcCorrectIndex === i
                          ? 'bg-emerald-500/20 text-emerald-400 ring-1 ring-emerald-500/50'
                          : 'bg-slate-800/50 text-slate-600 hover:text-slate-400'
                      }`}
                      title={mcCorrectIndex === i ? 'Correct answer' : 'Mark as correct'}
                    >
                      <Check size={14} />
                    </button>
                    <input
                      type="text"
                      value={choice}
                      onChange={e => {
                        const next = [...mcChoices];
                        next[i] = e.target.value;
                        setMcChoices(next);
                      }}
                      placeholder={`Choice ${i + 1}...`}
                      className={`flex-1 px-3 py-2 rounded-lg border text-sm transition-colors focus:outline-none ${
                        mcCorrectIndex === i
                          ? 'bg-emerald-500/10 border-emerald-500/30 focus:border-emerald-500/50'
                          : 'bg-slate-800/50 border-slate-700/50 focus:border-primary-500/50'
                      }`}
                    />
                    {mcChoices.length > 2 && (
                      <button
                        onClick={() => {
                          const next = mcChoices.filter((_, j) => j !== i);
                          setMcChoices(next);
                          if (mcCorrectIndex >= next.length) setMcCorrectIndex(0);
                          else if (mcCorrectIndex > i) setMcCorrectIndex(mcCorrectIndex - 1);
                        }}
                        className="text-slate-600 hover:text-red-400 transition-colors"
                      >
                        <X size={14} />
                      </button>
                    )}
                  </div>
                ))}
              </div>
              {mcChoices.length < 8 && (
                <button
                  onClick={() => setMcChoices([...mcChoices, ''])}
                  className="mt-2 flex items-center gap-1 px-3 py-1.5 rounded-lg bg-slate-800/50 text-xs text-slate-400 hover:text-white transition-colors"
                >
                  <Plus size={12} /> Add Choice
                </button>
              )}
            </div>
            <label className="flex items-center gap-2 text-xs text-slate-400 cursor-pointer">
              <input type="checkbox" checked={mcShuffle} onChange={e => setMcShuffle(e.target.checked)} className="rounded" />
              Shuffle choices when studying
            </label>
          </div>
        )}

        {/* ═══ AI Dynamic Editor ═══ */}
        {noteType === 'aiDynamic' && (
          <div className="glass-card rounded-2xl p-5 space-y-4">
            <label className="text-sm font-medium text-slate-300 flex items-center gap-2">
              <Sparkles size={16} />
              AI Dynamic Card
            </label>
            <p className="text-xs text-slate-500">
              Define a prompt template. Each time you study, the AI generates a fresh question. Requires OpenAI API key in Settings.
            </p>
            <div>
              <label className="text-xs text-slate-400 mb-1.5 block">Topic / Subject</label>
              <input
                type="text"
                value={aiTopic}
                onChange={e => setAiTopic(e.target.value)}
                placeholder="e.g. German vocabulary, Organic Chemistry, JavaScript..."
                className="w-full px-3 py-2 rounded-lg bg-slate-800/50 border border-slate-700/50 focus:border-primary-500/50 focus:outline-none text-sm transition-colors"
              />
            </div>
            <div>
              <label className="text-xs text-slate-400 mb-1.5 block">Prompt Template</label>
              <textarea
                value={aiPrompt}
                onChange={e => setAiPrompt(e.target.value)}
                placeholder={"e.g. Generate a question about German irregular verbs. Include the infinitive and ask for the past tense form. Provide the correct answer."}
                rows={5}
                className="w-full px-4 py-3 rounded-xl bg-slate-800/50 border border-slate-700/50 focus:border-purple-500/50 focus:outline-none text-white resize-none font-mono text-sm transition-colors"
              />
              <p className="text-[10px] text-slate-600 mt-1">Tip: Be specific about the format you want (question, then answer). The AI will generate a new question + answer each study session.</p>
            </div>
            <div>
              <label className="text-xs text-slate-400 mb-1.5 block">Difficulty</label>
              <div className="flex gap-2">
                {(['easy', 'medium', 'hard'] as const).map(d => (
                  <button
                    key={d}
                    onClick={() => setAiDifficulty(d)}
                    className={`flex-1 py-2 px-3 rounded-lg text-sm capitalize transition-all ${
                      aiDifficulty === d
                        ? d === 'easy' ? 'bg-emerald-500/20 text-emerald-400 ring-1 ring-emerald-500/50'
                          : d === 'medium' ? 'bg-amber-500/20 text-amber-400 ring-1 ring-amber-500/50'
                          : 'bg-red-500/20 text-red-400 ring-1 ring-red-500/50'
                        : 'bg-slate-800/50 text-slate-400 hover:text-white'
                    }`}
                  >
                    {d}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ═══ Type-In Editor ═══ */}
        {noteType === 'typeIn' && (
          <div className="glass-card rounded-2xl p-5 space-y-4">
            <label className="text-sm font-medium text-slate-300 flex items-center gap-2">
              <Keyboard size={16} />
              Type Answer Card
            </label>
            <p className="text-xs text-slate-500">The learner must type the exact answer. Great for spelling, vocabulary, and definitions.</p>
            <div>
              <label className="text-xs text-slate-400 mb-1.5 block">Question / Prompt</label>
              <textarea
                value={front}
                onChange={e => setFront(e.target.value)}
                placeholder="Enter the question..."
                rows={3}
                className="w-full px-4 py-3 rounded-xl bg-slate-800/50 border border-slate-700/50 focus:border-primary-500/50 focus:outline-none text-white resize-none text-sm transition-colors"
              />
            </div>
            <div>
              <label className="text-xs text-slate-400 mb-1.5 block">Expected Answer</label>
              <input
                type="text"
                value={typeInAnswer}
                onChange={e => setTypeInAnswer(e.target.value)}
                placeholder="The correct answer..."
                className="w-full px-3 py-2 rounded-lg bg-emerald-500/10 border border-emerald-500/30 focus:border-emerald-500/50 focus:outline-none text-sm transition-colors"
              />
            </div>
            <label className="flex items-center gap-2 text-xs text-slate-400 cursor-pointer">
              <input type="checkbox" checked={typeInCaseSensitive} onChange={e => setTypeInCaseSensitive(e.target.checked)} className="rounded" />
              Case-sensitive comparison
            </label>
            <div>
              <label className="text-xs text-slate-400 mb-1.5 block">Alternative Accepted Answers</label>
              <div className="flex flex-wrap gap-1.5 mb-2">
                {typeInAlternatives.map((alt, i) => (
                  <span key={i} className="flex items-center gap-1 px-2 py-0.5 rounded-md bg-slate-800/50 text-xs text-slate-300">
                    {alt}
                    <button onClick={() => setTypeInAlternatives(typeInAlternatives.filter((_, j) => j !== i))} className="text-slate-600 hover:text-red-400"><X size={10} /></button>
                  </span>
                ))}
              </div>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={altInput}
                  onChange={e => setAltInput(e.target.value)}
                  onKeyDown={e => { if (e.key === 'Enter') { e.preventDefault(); if (altInput.trim()) { setTypeInAlternatives([...typeInAlternatives, altInput.trim()]); setAltInput(''); } } }}
                  placeholder="Add alternative answer..."
                  className="flex-1 px-3 py-1.5 rounded-lg bg-slate-800/50 border border-slate-700/50 focus:border-primary-500/50 focus:outline-none text-xs transition-colors"
                />
                <button
                  onClick={() => { if (altInput.trim()) { setTypeInAlternatives([...typeInAlternatives, altInput.trim()]); setAltInput(''); } }}
                  className="px-2 py-1.5 rounded-lg bg-primary-500/20 text-primary-400 text-xs"
                >
                  <Plus size={12} />
                </button>
              </div>
            </div>
          </div>
        )}

        {/* ═══ Image Occlusion Editor ═══ */}
        {noteType === 'imageOcclusion' && (
          <div className="glass-card rounded-2xl p-5 space-y-4">
            <label className="text-sm font-medium text-slate-300 flex items-center gap-2">
              <Layers size={16} />
              Image Occlusion
            </label>
            <p className="text-xs text-slate-500">Upload an image, then draw rectangles over the parts to hide. When studying, masked areas are revealed on flip.</p>
            <div>
              <label className="text-xs text-slate-400 mb-1.5 block">Title / Label (optional)</label>
              <input
                type="text"
                value={front}
                onChange={e => setFront(e.target.value)}
                placeholder="e.g. Anatomy Diagram, Circuit Board..."
                className="w-full px-3 py-2 rounded-lg bg-slate-800/50 border border-slate-700/50 focus:border-primary-500/50 focus:outline-none text-sm transition-colors"
              />
            </div>
            {!ioImageUrl ? (
              <button
                onClick={() => {
                  const input = document.createElement('input');
                  input.type = 'file'; input.accept = 'image/*';
                  input.onchange = (e) => {
                    const file = (e.target as HTMLInputElement).files?.[0];
                    if (!file) return;
                    const reader = new FileReader();
                    reader.onload = (ev) => setIoImageUrl(ev.target?.result as string);
                    reader.readAsDataURL(file);
                  };
                  input.click();
                }}
                className="w-full py-8 rounded-xl border-2 border-dashed border-slate-700/50 hover:border-primary-500/30 text-sm text-slate-400 hover:text-primary-400 transition-colors flex flex-col items-center gap-2"
              >
                <Image size={24} />
                Upload Image
              </button>
            ) : (
              <div className="space-y-2">
                <div className="flex items-center justify-between mb-2">
                  <button
                    onClick={() => setIoDrawing(!ioDrawing)}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                      ioDrawing ? 'bg-red-500/20 text-red-400 ring-1 ring-red-500/50' : 'bg-primary-500/20 text-primary-400'
                    }`}
                  >
                    {ioDrawing ? <><X size={12} /> Done Drawing</> : <><Plus size={12} /> Draw Mask Regions</>}
                  </button>
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-slate-500">{ioRegions.length} region(s)</span>
                    <button
                      onClick={() => { setIoImageUrl(''); setIoRegions([]); }}
                      className="text-xs text-red-400/60 hover:text-red-400"
                    >
                      Remove Image
                    </button>
                  </div>
                </div>
                <div
                  className="relative rounded-xl overflow-hidden border border-slate-700/30 select-none"
                  style={{ cursor: ioDrawing ? 'crosshair' : 'default' }}
                  onMouseDown={e => {
                    if (!ioDrawing) return;
                    const rect = e.currentTarget.getBoundingClientRect();
                    const x = ((e.clientX - rect.left) / rect.width) * 100;
                    const y = ((e.clientY - rect.top) / rect.height) * 100;
                    setIoCurrentRegion({ startX: x, startY: y });
                  }}
                  onMouseMove={e => {
                    if (!ioDrawing || !ioCurrentRegion) return;
                    // Preview handled by temp element or on mouseUp
                  }}
                  onMouseUp={e => {
                    if (!ioDrawing || !ioCurrentRegion) return;
                    const rect = e.currentTarget.getBoundingClientRect();
                    const endX = ((e.clientX - rect.left) / rect.width) * 100;
                    const endY = ((e.clientY - rect.top) / rect.height) * 100;
                    const x = Math.min(ioCurrentRegion.startX, endX);
                    const y = Math.min(ioCurrentRegion.startY, endY);
                    const w = Math.abs(endX - ioCurrentRegion.startX);
                    const h = Math.abs(endY - ioCurrentRegion.startY);
                    if (w > 1 && h > 1) {
                      const region: IORegion = { id: uuidv4(), x, y, width: w, height: h };
                      setIoRegions([...ioRegions, region]);
                    }
                    setIoCurrentRegion(null);
                  }}
                >
                  <img src={ioImageUrl} alt="Occlusion base" className="w-full" draggable={false} />
                  {/* Render mask regions */}
                  {ioRegions.map((region, i) => (
                    <div
                      key={region.id}
                      className="absolute bg-red-500/40 border-2 border-red-400/60 rounded-sm flex items-center justify-center group"
                      style={{ left: `${region.x}%`, top: `${region.y}%`, width: `${region.width}%`, height: `${region.height}%` }}
                    >
                      <span className="text-[10px] text-white font-bold drop-shadow">{i + 1}</span>
                      <button
                        onClick={(e) => { e.stopPropagation(); setIoRegions(ioRegions.filter(r => r.id !== region.id)); }}
                        className="absolute -top-2 -right-2 w-4 h-4 rounded-full bg-red-500 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        <X size={8} />
                      </button>
                    </div>
                  ))}
                </div>
                {/* Region labels */}
                {ioRegions.length > 0 && (
                  <div className="space-y-1.5 mt-2">
                    <p className="text-xs text-slate-400">Region Labels (optional, shown on reveal):</p>
                    {ioRegions.map((region, i) => (
                      <div key={region.id} className="flex items-center gap-2">
                        <span className="text-xs text-red-400 font-bold w-5">{i + 1}</span>
                        <input
                          type="text"
                          value={region.label || ''}
                          onChange={e => {
                            const next = [...ioRegions];
                            next[i] = { ...next[i], label: e.target.value };
                            setIoRegions(next);
                          }}
                          placeholder={`Label for region ${i + 1}...`}
                          className="flex-1 px-2 py-1 rounded-md bg-slate-800/50 border border-slate-700/50 text-xs focus:border-primary-500/50 focus:outline-none transition-colors"
                        />
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        )}

        {/* ═══ Ordering Editor ═══ */}
        {noteType === 'ordering' && (
          <div className="glass-card rounded-2xl p-5 space-y-4">
            <label className="text-sm font-medium text-slate-300 flex items-center gap-2">
              <GripVertical size={16} />
              Ordering Card
            </label>
            <p className="text-xs text-slate-500">Enter items in the correct order. When studying, items are shuffled and the learner must reorder them.</p>
            <div>
              <label className="text-xs text-slate-400 mb-1.5 block">Question / Instruction (optional)</label>
              <input
                type="text"
                value={front}
                onChange={e => setFront(e.target.value)}
                placeholder="e.g. Sort these events chronologically..."
                className="w-full px-3 py-2 rounded-lg bg-slate-800/50 border border-slate-700/50 focus:border-primary-500/50 focus:outline-none text-sm transition-colors"
              />
            </div>
            <div>
              <label className="text-xs text-slate-400 mb-2 block">Items (in correct order, top = first)</label>
              <div className="space-y-2">
                {orderItems.map((item, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <span className="text-xs text-slate-600 w-5 text-right font-mono">{i + 1}.</span>
                    <div className="flex flex-col gap-0.5">
                      <button onClick={() => { if (i > 0) { const next = [...orderItems]; [next[i-1], next[i]] = [next[i], next[i-1]]; setOrderItems(next); } }} disabled={i === 0} className="text-slate-600 hover:text-white disabled:opacity-20"><ChevronUp size={10} /></button>
                      <button onClick={() => { if (i < orderItems.length - 1) { const next = [...orderItems]; [next[i], next[i+1]] = [next[i+1], next[i]]; setOrderItems(next); } }} disabled={i === orderItems.length - 1} className="text-slate-600 hover:text-white disabled:opacity-20"><ChevronDown size={10} /></button>
                    </div>
                    <input
                      type="text"
                      value={item}
                      onChange={e => { const next = [...orderItems]; next[i] = e.target.value; setOrderItems(next); }}
                      placeholder={`Item ${i + 1}...`}
                      className="flex-1 px-3 py-2 rounded-lg bg-slate-800/50 border border-slate-700/50 focus:border-primary-500/50 focus:outline-none text-sm transition-colors"
                    />
                    {orderItems.length > 2 && (
                      <button onClick={() => setOrderItems(orderItems.filter((_, j) => j !== i))} className="text-slate-600 hover:text-red-400"><X size={14} /></button>
                    )}
                  </div>
                ))}
              </div>
              {orderItems.length < 12 && (
                <button
                  onClick={() => setOrderItems([...orderItems, ''])}
                  className="mt-2 flex items-center gap-1 px-3 py-1.5 rounded-lg bg-slate-800/50 text-xs text-slate-400 hover:text-white transition-colors"
                >
                  <Plus size={12} /> Add Item
                </button>
              )}
            </div>
          </div>
        )}

        {/* Front/Back Tabs (only for basic, reversed, cloze) */}
        {(['basic', 'reversed', 'cloze'] as CardNoteType[]).includes(noteType) && (
        <div className="glass-card rounded-2xl overflow-hidden">
          <div className="flex border-b border-slate-700/50">
            <button
              onClick={() => setActiveTab('front')}
              className={`flex-1 py-3 text-sm font-medium transition-colors
                ${activeTab === 'front' ? 'text-primary-400 bg-primary-500/10 border-b-2 border-primary-500' : 'text-slate-400'}`}
            >
              {t('cardEditor.front')}
            </button>
            <button
              onClick={() => setActiveTab('back')}
              className={`flex-1 py-3 text-sm font-medium transition-colors
                ${activeTab === 'back' ? 'text-primary-400 bg-primary-500/10 border-b-2 border-primary-500' : 'text-slate-400'}`}
            >
              {t('cardEditor.back')}
            </button>
          </div>

          <div className="p-5">
            {activeTab === 'front' ? (
              <div className="space-y-3">
                {showPreview ? (
                  <div className="min-h-[200px] p-4 rounded-xl bg-slate-900/50">
                    <MarkdownRenderer content={front || '*Start typing on the front...*'} />
                    {frontImageUrl && (
                      <img src={frontImageUrl} alt="Front" className="max-h-48 mt-3 rounded-lg" />
                    )}
                  </div>
                ) : (
                  <>
                    <textarea
                      value={front}
                      onChange={(e) => setFront(e.target.value)}
                      placeholder={t('cardEditor.frontPlaceholder')}
                      rows={8}
                      className="w-full px-4 py-3 rounded-xl bg-slate-800/50 border border-slate-700/50 focus:border-primary-500/50 focus:outline-none text-white resize-none font-mono text-sm transition-colors"
                      autoFocus
                    />
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => handleImageUpload('front')}
                        className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800/50 text-xs text-slate-400 hover:text-white transition-colors"
                      >
                        <Image size={14} />
                        {t('cardEditor.addImage')}
                      </button>
                      <button
                        onClick={() => handleAutoImage('front')}
                        disabled={imageSearching}
                        className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-500/15 text-xs text-emerald-400 hover:bg-emerald-500/25 transition-colors disabled:opacity-50"
                      >
                        {imageSearching && imageSearchSide === 'front' ? <Loader size={14} className="animate-spin" /> : <ImagePlus size={14} />}
                        {t('cardEditor.autoImage')}
                      </button>
                      <button
                        onClick={() => setFront(front + '\n```\n// code here\n```')}
                        className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800/50 text-xs text-slate-400 hover:text-white transition-colors"
                      >
                        <Code size={14} />
                        {t('cardEditor.codeBlock')}
                      </button>
                      {frontImageUrl && (
                        <button
                          onClick={() => setFrontImageUrl('')}
                          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-red-500/10 text-xs text-red-400 hover:bg-red-500/20 transition-colors"
                        >
                          <X size={14} />
                          {t('cardEditor.removeImage')}
                        </button>
                      )}
                    </div>
                    {frontImageUrl && (
                      <img src={frontImageUrl} alt="Front preview" className="max-h-32 rounded-lg" />
                    )}

                    {/* Image Search Picker (front) */}
                    <AnimatePresence>
                      {showImagePicker && imageSearchSide === 'front' && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden"
                        >
                          <div className="rounded-xl border border-slate-700/40 bg-slate-900/60 p-3 space-y-3">
                            <div className="flex items-center justify-between">
                              <p className="text-xs font-medium text-slate-300 flex items-center gap-1.5">
                                <Search size={12} /> Image Search (Front)
                              </p>
                              <button onClick={() => setShowImagePicker(false)} className="text-slate-500 hover:text-white"><X size={14} /></button>
                            </div>
                            <div className="flex gap-2">
                              <input
                                type="text"
                                value={imageSearchQuery}
                                onChange={e => setImageSearchQuery(e.target.value)}
                                onKeyDown={e => e.key === 'Enter' && (e.preventDefault(), handleImageSearchCustom())}
                                placeholder="Search term..."
                                className="flex-1 px-3 py-1.5 rounded-lg bg-slate-800/60 border border-slate-700/40 text-xs focus:border-emerald-500/50 focus:outline-none transition-colors"
                              />
                              <button onClick={handleImageSearchCustom} disabled={imageSearching} className="px-3 py-1.5 rounded-lg bg-emerald-500/20 text-emerald-400 text-xs hover:bg-emerald-500/30 transition-colors disabled:opacity-50">
                                {imageSearching ? <Loader size={12} className="animate-spin" /> : <Search size={12} />}
                              </button>
                            </div>
                            {imageSearching && imageResults.length === 0 && (
                              <div className="flex items-center justify-center py-6"><Loader size={20} className="animate-spin text-slate-500" /></div>
                            )}
                            {imageResults.length > 0 && (
                              <div className="grid grid-cols-3 gap-2">
                                {imageResults.map((r, i) => (
                                  <button
                                    key={i}
                                    onClick={() => selectSearchImage(r)}
                                    className="group relative aspect-square rounded-lg overflow-hidden border border-slate-700/30 hover:border-emerald-500/50 transition-all"
                                  >
                                    <img src={r.thumb} alt={r.title} className="w-full h-full object-cover" loading="lazy" />
                                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                      <Check size={20} className="text-emerald-400" />
                                    </div>
                                  </button>
                                ))}
                              </div>
                            )}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* YouTube front */}
                    <div className="flex items-center gap-2">
                      <Youtube size={14} className="text-red-400 flex-shrink-0" />
                      <input
                        type="text"
                        value={frontYoutubeUrl}
                        onChange={e => setFrontYoutubeUrl(e.target.value)}
                        placeholder="YouTube URL (front side)..."
                        className="flex-1 px-3 py-1.5 rounded-lg bg-slate-800/50 border border-slate-700/50 focus:border-red-500/50 focus:outline-none text-xs transition-colors"
                      />
                      {frontYoutubeUrl && (
                        <button onClick={() => setFrontYoutubeUrl('')} className="text-slate-500 hover:text-red-400"><X size={14} /></button>
                      )}
                    </div>
                    {frontYoutubeUrl && isValidYouTubeUrl(frontYoutubeUrl) && (
                      <YouTubeEmbed url={frontYoutubeUrl} />
                    )}
                    {frontYoutubeUrl && !isValidYouTubeUrl(frontYoutubeUrl) && (
                      <p className="text-[10px] text-red-400">Invalid YouTube URL</p>
                    )}
                  </>
                )}
              </div>
            ) : (
              <div className="space-y-3">
                {showPreview ? (
                  <div className="min-h-[200px] p-4 rounded-xl bg-slate-900/50">
                    <MarkdownRenderer content={back || '*Start typing on the back...*'} />
                    {backImageUrl && (
                      <img src={backImageUrl} alt="Back" className="max-h-48 mt-3 rounded-lg" />
                    )}
                  </div>
                ) : (
                  <>
                    <textarea
                      value={back}
                      onChange={(e) => setBack(e.target.value)}
                      placeholder={t('cardEditor.backPlaceholder')}
                      rows={8}
                      className="w-full px-4 py-3 rounded-xl bg-slate-800/50 border border-slate-700/50 focus:border-primary-500/50 focus:outline-none text-white resize-none font-mono text-sm transition-colors"
                    />
                    <div className="flex items-center gap-2 flex-wrap">
                      <button
                        onClick={() => handleImageUpload('back')}
                        className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800/50 text-xs text-slate-400 hover:text-white transition-colors"
                      >
                        <Image size={14} />
                        {t('cardEditor.upload')}
                      </button>
                      <button
                        onClick={() => handleAutoImage('back')}
                        disabled={imageSearching}
                        className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-500/15 text-xs text-emerald-400 hover:bg-emerald-500/25 transition-colors disabled:opacity-50"
                      >
                        {imageSearching && imageSearchSide === 'back' ? <Loader size={14} className="animate-spin" /> : <ImagePlus size={14} />}
                        {t('cardEditor.autoImage')}
                      </button>
                      <button
                        onClick={() => setBack(back + '\n```\n// code here\n```')}
                        className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800/50 text-xs text-slate-400 hover:text-white transition-colors"
                      >
                        <Code size={14} />
                        {t('cardEditor.codeBlock')}
                      </button>
                      {backImageUrl && (
                        <button
                          onClick={() => setBackImageUrl('')}
                          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-red-500/10 text-xs text-red-400 hover:bg-red-500/20 transition-colors"
                        >
                          <X size={14} />
                          {t('cardEditor.removeImage')}
                        </button>
                      )}
                    </div>

                    {/* YouTube back */}
                    <div className="flex items-center gap-2">
                      <Youtube size={14} className="text-red-400 flex-shrink-0" />
                      <input
                        type="text"
                        value={backYoutubeUrl}
                        onChange={e => setBackYoutubeUrl(e.target.value)}
                        placeholder="YouTube URL (back side)..."
                        className="flex-1 px-3 py-1.5 rounded-lg bg-slate-800/50 border border-slate-700/50 focus:border-red-500/50 focus:outline-none text-xs transition-colors"
                      />
                      {backYoutubeUrl && (
                        <button onClick={() => setBackYoutubeUrl('')} className="text-slate-500 hover:text-red-400"><X size={14} /></button>
                      )}
                    </div>
                    {backYoutubeUrl && isValidYouTubeUrl(backYoutubeUrl) && (
                      <YouTubeEmbed url={backYoutubeUrl} />
                    )}
                    {backYoutubeUrl && !isValidYouTubeUrl(backYoutubeUrl) && (
                      <p className="text-[10px] text-red-400">Invalid YouTube URL</p>
                    )}

                    {/* Image Search Picker (back) */}
                    <AnimatePresence>
                      {showImagePicker && imageSearchSide === 'back' && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden"
                        >
                          <div className="rounded-xl border border-slate-700/40 bg-slate-900/60 p-3 space-y-3">
                            <div className="flex items-center justify-between">
                              <p className="text-xs font-medium text-slate-300 flex items-center gap-1.5">
                                <Search size={12} /> Image Search (Back)
                              </p>
                              <button
                                onClick={() => setShowImagePicker(false)}
                                className="text-slate-500 hover:text-white"
                              >
                                <X size={14} />
                              </button>
                            </div>

                            {/* Custom search input */}
                            <div className="flex gap-2">
                              <input
                                type="text"
                                value={imageSearchQuery}
                                onChange={e => setImageSearchQuery(e.target.value)}
                                onKeyDown={e => e.key === 'Enter' && (e.preventDefault(), handleImageSearchCustom())}
                                placeholder="Search term..."
                                className="flex-1 px-3 py-1.5 rounded-lg bg-slate-800/60 border border-slate-700/40 text-xs focus:border-emerald-500/50 focus:outline-none transition-colors"
                              />
                              <button
                                onClick={handleImageSearchCustom}
                                disabled={imageSearching}
                                className="px-3 py-1.5 rounded-lg bg-emerald-500/20 text-emerald-400 text-xs hover:bg-emerald-500/30 transition-colors disabled:opacity-50"
                              >
                                {imageSearching ? <Loader size={12} className="animate-spin" /> : <Search size={12} />}
                              </button>
                            </div>

                            {/* Results grid */}
                            {imageSearching && imageResults.length === 0 && (
                              <div className="flex items-center justify-center py-6">
                                <Loader size={20} className="animate-spin text-slate-500" />
                              </div>
                            )}
                            {imageResults.length > 0 && (
                              <div className="grid grid-cols-3 gap-2">
                                {imageResults.map((r, i) => (
                                  <button
                                    key={i}
                                    onClick={() => selectSearchImage(r)}
                                    className="group relative aspect-square rounded-lg overflow-hidden border border-slate-700/30 hover:border-emerald-500/50 transition-all"
                                  >
                                    <img
                                      src={r.thumb}
                                      alt={r.title}
                                      className="w-full h-full object-cover"
                                      loading="lazy"
                                    />
                                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                                      <Check size={20} className="text-white opacity-0 group-hover:opacity-100 transition-opacity drop-shadow-lg" />
                                    </div>
                                    <span className="absolute bottom-0 left-0 right-0 text-[8px] text-white/70 bg-black/50 px-1 py-0.5 truncate">
                                      {r.title}
                                    </span>
                                  </button>
                                ))}
                              </div>
                            )}
                            <p className="text-[9px] text-slate-600 text-center">
                              Images from Wikimedia Commons &amp; Wikipedia (free license)
                            </p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {backImageUrl && (
                      <img src={backImageUrl} alt="Back preview" className="max-h-32 rounded-lg" />
                    )}
                  </>
                )}
              </div>
            )}
          </div>
        </div>
        )}

        {/* Tags */}
        <div className="glass-card rounded-2xl p-5">
          <label className="text-sm font-medium text-slate-300 mb-3 flex items-center gap-2">
            <Tag size={16} />
            {t('common.tags')}
          </label>
          <div className="flex flex-wrap gap-2 mb-3">
            {tags.map(tag => (
              <span
                key={tag}
                className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-primary-500/20 text-primary-400 text-sm"
              >
                {tag}
                <button
                  onClick={() => setTags(tags.filter(t => t !== tag))}
                  className="hover:text-red-400 transition-colors"
                >
                  <X size={12} />
                </button>
              </span>
            ))}
          </div>
          <div className="flex gap-2">
            <input
              type="text"
              value={tagInput}
              onChange={(e) => setTagInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && (e.preventDefault(), handleAddTag())}
              placeholder={t('cardEditor.addTag')}
              className="flex-1 px-3 py-2 rounded-lg bg-slate-800/50 border border-slate-700/50 focus:border-primary-500/50 focus:outline-none text-sm transition-colors"
            />
            <button
              onClick={handleAddTag}
              className="px-3 py-2 rounded-lg bg-primary-500/20 text-primary-400 hover:bg-primary-500/30 transition-colors"
            >
              <Plus size={16} />
            </button>
          </div>
        </div>

        {/* PlayPhrase (playphrase.me) */}
        <div className="glass-card rounded-2xl p-5">
          <div className="flex items-center justify-between mb-3">
            <label className="text-sm font-medium text-slate-300 flex items-center gap-2">
              <Film size={16} />
              PlayPhrase.me
            </label>
            <button
              onClick={() => setPlayPhraseEnabled(!playPhraseEnabled)}
              className={`relative w-12 h-6 rounded-full transition-colors ${
                playPhraseEnabled ? 'bg-purple-500' : 'bg-slate-700'
              }`}
            >
              <div className={`absolute top-0.5 w-5 h-5 rounded-full bg-white shadow-md transition-transform ${
                playPhraseEnabled ? 'translate-x-6' : 'translate-x-0.5'
              }`} />
            </button>
          </div>

          <p className="text-xs text-slate-500 mb-2">
            Search real movie &amp; TV clips for the phrase on playphrase.me
          </p>

          {playPhraseEnabled && (
            <div className="space-y-4 mt-3 pt-3 border-t border-slate-700/50">
              {/* Show on which side */}
              <div>
                <label className="text-xs text-slate-400 mb-2 block">Show button on which side?</label>
                <div className="flex gap-2">
                  {[
                    { value: 'front', label: 'Front side' },
                    { value: 'back', label: 'Back side' },
                  ].map(opt => (
                    <button
                      key={opt.value}
                      onClick={() => setPlayPhraseSide(opt.value as 'front' | 'back')}
                      className={`flex-1 py-2 px-3 rounded-lg text-sm transition-all ${
                        playPhraseSide === opt.value
                          ? 'bg-purple-500/20 text-purple-400 ring-1 ring-purple-500/50'
                          : 'bg-slate-800/50 text-slate-400 hover:text-white'
                      }`}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Custom phrase */}
              <div>
                <label className="text-xs text-slate-400 mb-1.5 block">
                  Custom phrase <span className="text-slate-500">(leave empty to use front text)</span>
                </label>
                <input
                  type="text"
                  value={playPhraseCustom}
                  onChange={(e) => setPlayPhraseCustom(e.target.value)}
                  placeholder={front ? `Default: "${front.replace(/[#*_>\[\]`]/g, '').slice(0, 40)}..."` : 'e.g. hello world'}
                  className="w-full px-3 py-2 rounded-lg bg-slate-800/50 border border-slate-700/50 focus:border-primary-500/50 focus:outline-none text-sm transition-colors"
                />
              </div>

              {/* Test button */}
              <button
                onClick={() => {
                  const testPhrase = playPhraseCustom.trim() || (front ? front.replace(/[#*_>\[\]`<>/]/g, '').slice(0, 100) : 'hello world');
                  openPlayPhrasePopup(testPhrase);
                }}
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-purple-500/20 text-purple-400 hover:bg-purple-500/30 text-sm font-medium transition-colors"
              >
                <Play size={14} />
                Test on PlayPhrase.me
              </button>
            </div>
          )}
        </div>

        {/* Flag / Priority */}
        <div className="glass-card rounded-2xl p-5">
          <label className="text-sm font-medium text-slate-300 mb-3 flex items-center gap-2">
            <Flag size={16} />
            {t('cardEditor.flagPriority')}
          </label>
          <p className="text-xs text-slate-500 mb-3">
            Color-flag this card to mark its importance or category.
          </p>
          <div className="flex flex-wrap gap-2">
            {CARD_FLAGS.map(f => (
              <button
                key={f.id}
                type="button"
                onClick={() => setFlag(f.id)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all border ${
                  flag === f.id
                    ? `${f.bg} ${f.color} border-current ring-1 ring-current/30`
                    : 'bg-slate-800/50 text-slate-400 border-slate-700/50 hover:bg-slate-700/50'
                }`}
              >
                <Flag size={12} fill={f.id > 0 && flag === f.id ? 'currentColor' : 'none'} />
                {f.label}
              </button>
            ))}
          </div>
        </div>

        {/* File Attachments */}
        <div className="glass-card rounded-2xl p-5">
          <label className="text-sm font-medium text-slate-300 mb-3 flex items-center gap-2">
            <Paperclip size={16} />
            File Attachments
          </label>
          <p className="text-xs text-slate-500 mb-3">
            Attach PDFs, code files, or documents. Click them during study to view embedded.
          </p>

          {/* Existing attachments */}
          {attachments.length > 0 && (
            <div className="space-y-2 mb-3">
              {attachments.map(att => (
                <div
                  key={att.id}
                  className="flex items-center gap-2 px-3 py-2 rounded-lg bg-slate-800/50 border border-slate-700/30"
                >
                  {att.type === 'application/pdf' ? (
                    <FileText size={16} className="text-red-400 flex-shrink-0" />
                  ) : att.type.startsWith('text/') || att.name.match(/\.(js|ts|py|java|c|cpp|go|rs|rb|php|html|css|json|xml|yaml|yml|sql|sh|md)$/i) ? (
                    <FileCode size={16} className="text-emerald-400 flex-shrink-0" />
                  ) : (
                    <Paperclip size={16} className="text-slate-400 flex-shrink-0" />
                  )}
                  <span className="flex-1 text-sm truncate">{att.name}</span>
                  <span className="text-xs text-slate-500">{formatFileSize(att.size)}</span>
                  <button
                    onClick={() => handleRemoveAttachment(att.id)}
                    className="p-1 rounded-md hover:bg-red-500/10 text-slate-500 hover:text-red-400 transition-colors"
                    title="Remove"
                  >
                    <Trash2 size={14} />
                  </button>
                </div>
              ))}
            </div>
          )}

          <button
            onClick={handleAddAttachment}
            className="w-full flex items-center justify-center gap-2 py-3 rounded-xl border-2 border-dashed border-slate-700/50 hover:border-primary-500/30 text-sm text-slate-400 hover:text-primary-400 transition-colors"
          >
            <Plus size={16} />
            Add Files (PDF, Code, Docs)
          </button>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3">
          {isNew && (
            <button
              onClick={handleSaveAndNew}
              className="flex-1 py-4 rounded-2xl bg-slate-800 hover:bg-slate-700 font-medium flex items-center justify-center gap-2 transition-colors"
            >
              <Plus size={18} />
              {t('cardEditor.saveAndNew')}
            </button>
          )}
          <button
            onClick={handleSave}
            className="flex-1 py-4 rounded-2xl bg-gradient-to-r from-primary-600 to-purple-600 hover:from-primary-500 hover:to-purple-500 font-bold text-lg flex items-center justify-center gap-2 transition-all shadow-lg glow-sm"
          >
            <Save size={20} />
            {isNew ? t('cardEditor.saveCard') : t('cardEditor.updateCard')}
          </button>
        </div>
      </div>
    </div>
  );
}
