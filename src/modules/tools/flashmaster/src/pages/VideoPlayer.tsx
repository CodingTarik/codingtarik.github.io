/**
 * DualSubtitlePlayer — Video player with dual subtitle tracks,
 * AI translation, and flashcard creation.
 *
 * Features:
 * - Upload video files (mp4, webm, mkv etc.)
 * - Load 1-2 subtitle files (SRT/VTT)
 * - Draggable subtitle overlay positioning
 * - Select subtitle text → AI translate → save as flashcard
 * - Translation sidebar with saved words
 * - Full video controls (play/pause, seek, volume, speed, fullscreen)
 * - Sidebar toggle (always show / hide)
 */

import { useState, useRef, useCallback, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLiveQuery } from 'dexie-react-hooks';
import {
  ArrowLeft, Upload, Play, Pause, Volume2, VolumeX, Maximize,
  Minimize, SkipBack, SkipForward, Languages, Plus, Check, X,
  Loader, ChevronLeft, ChevronRight, Save, Copy, Sparkles,
  Layers, FileText, Settings2, GripVertical, Eye, EyeOff, Trash2,
  Subtitles, Search, Download, ExternalLink, Star, Globe,
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import toast from 'react-hot-toast';
import { v4 as uuidv4 } from 'uuid';
import { db } from '../lib/db';
import { chatCompletion, hasOpenAIKey } from '../lib/openai';
import { getTranslationLang } from './BookReader';
import {
  searchSubtitles, downloadSubtitle,
  SUBTITLE_LANGUAGES,
  type SubtitleResult,
} from '../lib/subtitleSearch';
import { useT } from '../lib/i18n';
import type { SubtitleCue, VideoSavedTranslation, Card, Deck } from '../types';
import { DEFAULT_DECK_SETTINGS } from '../types';

// ═══════════════════════════════════════════
// SRT / VTT Parser
// ═══════════════════════════════════════════

function parseTime(str: string): number {
  // Handles both SRT (00:01:23,456) and VTT (00:01:23.456) formats
  const clean = str.trim().replace(',', '.');
  const parts = clean.split(':');
  if (parts.length === 3) {
    const h = parseFloat(parts[0]);
    const m = parseFloat(parts[1]);
    const s = parseFloat(parts[2]);
    return h * 3600 + m * 60 + s;
  }
  if (parts.length === 2) {
    const m = parseFloat(parts[0]);
    const s = parseFloat(parts[1]);
    return m * 60 + s;
  }
  return parseFloat(clean) || 0;
}

function parseSubtitles(content: string): SubtitleCue[] {
  const cues: SubtitleCue[] = [];
  // Remove BOM and normalize line endings
  const text = content.replace(/^\uFEFF/, '').replace(/\r\n/g, '\n').replace(/\r/g, '\n');

  // Detect VTT
  const isVTT = text.trimStart().startsWith('WEBVTT');

  // Split into blocks
  const blocks = text.split(/\n\n+/).filter(b => b.trim());
  const startIdx = isVTT ? 1 : 0; // skip WEBVTT header

  for (let i = startIdx; i < blocks.length; i++) {
    const lines = blocks[i].trim().split('\n');
    // Find the timestamp line
    let timeLineIdx = -1;
    for (let j = 0; j < lines.length; j++) {
      if (lines[j].includes('-->')) { timeLineIdx = j; break; }
    }
    if (timeLineIdx === -1) continue;

    const timeParts = lines[timeLineIdx].split('-->');
    if (timeParts.length < 2) continue;

    const startTime = parseTime(timeParts[0]);
    const endTime = parseTime(timeParts[1].split(/\s/)[0]); // strip position info
    const textLines = lines.slice(timeLineIdx + 1).filter(l => l.trim());
    const cueText = textLines.join('\n').replace(/<[^>]+>/g, ''); // strip HTML tags

    if (cueText) {
      cues.push({ id: uuidv4(), startTime, endTime, text: cueText });
    }
  }

  return cues;
}

// ═══════════════════════════════════════════
// Time formatting
// ═══════════════════════════════════════════

function formatTime(seconds: number): string {
  const h = Math.floor(seconds / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = Math.floor(seconds % 60);
  if (h > 0) return `${h}:${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
  return `${m}:${String(s).padStart(2, '0')}`;
}

// ═══════════════════════════════════════════
// Component
// ═══════════════════════════════════════════

export default function VideoPlayer() {
  const navigate = useNavigate();
  const { t } = useT();
  const decks = useLiveQuery(() => db.decks.orderBy('name').toArray());

  // Video
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [videoSrc, setVideoSrc] = useState<string | null>(null);
  const [videoName, setVideoName] = useState('');
  const [playing, setPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);
  const [muted, setMuted] = useState(false);
  const [playbackRate, setPlaybackRate] = useState(1);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showControls, setShowControls] = useState(true);
  const controlsTimeoutRef = useRef<ReturnType<typeof setTimeout>>();

  // Subtitles
  const [sub1, setSub1] = useState<SubtitleCue[]>([]);
  const [sub2, setSub2] = useState<SubtitleCue[]>([]);
  const [sub1Name, setSub1Name] = useState('');
  const [sub2Name, setSub2Name] = useState('');
  const [sub1Visible, setSub1Visible] = useState(true);
  const [sub2Visible, setSub2Visible] = useState(true);
  const [sub1Y, setSub1Y] = useState(85); // percentage from top
  const [sub2Y, setSub2Y] = useState(75);
  const [draggingSub, setDraggingSub] = useState<1 | 2 | null>(null);

  // Current cues
  const [activeCue1, setActiveCue1] = useState<SubtitleCue | null>(null);
  const [activeCue2, setActiveCue2] = useState<SubtitleCue | null>(null);

  // Translation
  const [selectedText, setSelectedText] = useState('');
  const [translating, setTranslating] = useState(false);
  const [translationResult, setTranslationResult] = useState<{ translation: string; explanation: string } | null>(null);

  // Sidebar
  const [showSidebar, setShowSidebar] = useState(true);
  const [savedTranslations, setSavedTranslations] = useState<VideoSavedTranslation[]>([]);

  // Save to deck
  const [selectedDeckId, setSelectedDeckId] = useState('');
  const [saving, setSaving] = useState(false);

  // MKV remux
  const [remuxing, setRemuxing] = useState(false);
  const [remuxProgress, setRemuxProgress] = useState('');

  // Subtitle search
  const [showSubSearch, setShowSubSearch] = useState(false);
  const [subSearchQuery, setSubSearchQuery] = useState('');
  const [subSearchLangs, setSubSearchLangs] = useState<string[]>(['en']);
  const [subSearchResults, setSubSearchResults] = useState<SubtitleResult[]>([]);
  const [subSearching, setSubSearching] = useState(false);
  const [subSearchTotal, setSubSearchTotal] = useState(0);
  const [subDownloading, setSubDownloading] = useState<string | null>(null);
  const [subLoadTarget, setSubLoadTarget] = useState<1 | 2>(1);

  // ── Video file upload (with MKV remux support) ──

  const handleVideoUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (videoSrc) URL.revokeObjectURL(videoSrc);

    const ext = file.name.split('.').pop()?.toLowerCase() || '';
    const needsRemux = ['mkv', 'avi', 'flv', 'ts', 'mov'].includes(ext);

    if (needsRemux) {
      setRemuxing(true);
      setRemuxProgress('Loading converter...');
      try {
        const { FFmpeg } = await import('@ffmpeg/ffmpeg');
        const { fetchFile, toBlobURL } = await import('@ffmpeg/util');

        const ffmpeg = new FFmpeg();

        ffmpeg.on('progress', ({ progress }) => {
          setRemuxProgress(`Converting... ${Math.round(progress * 100)}%`);
        });

        // Load ffmpeg WASM from CDN
        setRemuxProgress('Downloading converter (one-time)...');
        const baseURL = 'https://unpkg.com/@ffmpeg/core@0.12.6/dist/umd';
        await ffmpeg.load({
          coreURL: await toBlobURL(`${baseURL}/ffmpeg-core.js`, 'text/javascript'),
          wasmURL: await toBlobURL(`${baseURL}/ffmpeg-core.wasm`, 'application/wasm'),
        });

        setRemuxProgress('Converting video...');
        const inputName = `input.${ext}`;
        await ffmpeg.writeFile(inputName, await fetchFile(file));

        // Remux (copy streams, no re-encoding — fast!)
        await ffmpeg.exec(['-i', inputName, '-c', 'copy', '-movflags', '+faststart', 'output.mp4']);

        const data = await ffmpeg.readFile('output.mp4');
        const blob = new Blob([data], { type: 'video/mp4' });
        const url = URL.createObjectURL(blob);

        // Cleanup ffmpeg memory
        await ffmpeg.deleteFile(inputName);
        await ffmpeg.deleteFile('output.mp4');
        ffmpeg.terminate();

        setVideoSrc(url);
        setVideoName(file.name);
        setPlaying(false);
        setCurrentTime(0);
        toast.success(`Video converted & loaded: ${file.name}`);
      } catch (err: any) {
        console.error('Remux failed:', err);
        // Fallback: try playing the original file directly
        const url = URL.createObjectURL(file);
        setVideoSrc(url);
        setVideoName(file.name);
        setPlaying(false);
        setCurrentTime(0);
        toast.error('Conversion failed — trying direct playback');
      } finally {
        setRemuxing(false);
        setRemuxProgress('');
      }
    } else {
      // Directly playable formats (mp4, webm, ogg)
      const url = URL.createObjectURL(file);
      setVideoSrc(url);
      setVideoName(file.name);
      setPlaying(false);
      setCurrentTime(0);
      toast.success(`Video loaded: ${file.name}`);
    }
  };

  // ── Subtitle file upload ──

  const handleSubUpload = async (e: React.ChangeEvent<HTMLInputElement>, track: 1 | 2) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const text = await file.text();
    const cues = parseSubtitles(text);
    if (cues.length === 0) {
      toast.error('No subtitles found in file');
      return;
    }
    if (track === 1) { setSub1(cues); setSub1Name(file.name); }
    else { setSub2(cues); setSub2Name(file.name); }
    toast.success(`${cues.length} cues loaded from ${file.name}`);
  };

  // ── Video controls ──

  const togglePlay = useCallback(() => {
    if (!videoRef.current) return;
    if (playing) videoRef.current.pause();
    else videoRef.current.play();
    setPlaying(!playing);
  }, [playing]);

  const seek = useCallback((time: number) => {
    if (!videoRef.current) return;
    videoRef.current.currentTime = Math.max(0, Math.min(time, duration));
  }, [duration]);

  const skip = useCallback((delta: number) => {
    seek(currentTime + delta);
  }, [currentTime, seek]);

  // Time update
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const onTime = () => setCurrentTime(video.currentTime);
    const onDuration = () => setDuration(video.duration || 0);
    const onPlay = () => setPlaying(true);
    const onPause = () => setPlaying(false);
    const onEnded = () => setPlaying(false);
    video.addEventListener('timeupdate', onTime);
    video.addEventListener('loadedmetadata', onDuration);
    video.addEventListener('play', onPlay);
    video.addEventListener('pause', onPause);
    video.addEventListener('ended', onEnded);
    return () => {
      video.removeEventListener('timeupdate', onTime);
      video.removeEventListener('loadedmetadata', onDuration);
      video.removeEventListener('play', onPlay);
      video.removeEventListener('pause', onPause);
      video.removeEventListener('ended', onEnded);
    };
  }, [videoSrc]);

  // Volume
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.volume = volume;
      videoRef.current.muted = muted;
    }
  }, [volume, muted]);

  // Playback rate
  useEffect(() => {
    if (videoRef.current) videoRef.current.playbackRate = playbackRate;
  }, [playbackRate]);

  // Fullscreen
  const toggleFullscreen = useCallback(() => {
    if (!containerRef.current) return;
    if (!document.fullscreenElement) {
      containerRef.current.requestFullscreen?.();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen?.();
      setIsFullscreen(false);
    }
  }, []);

  useEffect(() => {
    const onFS = () => setIsFullscreen(!!document.fullscreenElement);
    document.addEventListener('fullscreenchange', onFS);
    return () => document.removeEventListener('fullscreenchange', onFS);
  }, []);

  // Auto-hide controls
  const resetControlsTimeout = useCallback(() => {
    setShowControls(true);
    if (controlsTimeoutRef.current) clearTimeout(controlsTimeoutRef.current);
    if (playing) {
      controlsTimeoutRef.current = setTimeout(() => setShowControls(false), 3000);
    }
  }, [playing]);

  // Keyboard shortcuts
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return;
      switch (e.key) {
        case ' ': case 'k': e.preventDefault(); togglePlay(); break;
        case 'ArrowLeft': e.preventDefault(); skip(-5); break;
        case 'ArrowRight': e.preventDefault(); skip(5); break;
        case 'f': e.preventDefault(); toggleFullscreen(); break;
        case 'm': e.preventDefault(); setMuted(m => !m); break;
        case 'ArrowUp': e.preventDefault(); setVolume(v => Math.min(1, v + 0.1)); break;
        case 'ArrowDown': e.preventDefault(); setVolume(v => Math.max(0, v - 0.1)); break;
      }
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [togglePlay, skip, toggleFullscreen]);

  // ── Active subtitle cues ──

  useEffect(() => {
    const c1 = sub1.find(c => currentTime >= c.startTime && currentTime <= c.endTime);
    const c2 = sub2.find(c => currentTime >= c.startTime && currentTime <= c.endTime);
    setActiveCue1(c1 || null);
    setActiveCue2(c2 || null);
  }, [currentTime, sub1, sub2]);

  // ── Subtitle dragging ──

  const handleSubDrag = useCallback((e: React.PointerEvent, track: 1 | 2) => {
    e.preventDefault();
    e.stopPropagation();
    setDraggingSub(track);
    const container = containerRef.current;
    if (!container) return;

    const onMove = (ev: PointerEvent) => {
      const rect = container.getBoundingClientRect();
      const pct = Math.max(10, Math.min(95, ((ev.clientY - rect.top) / rect.height) * 100));
      if (track === 1) setSub1Y(pct);
      else setSub2Y(pct);
    };
    const onUp = () => {
      setDraggingSub(null);
      window.removeEventListener('pointermove', onMove);
      window.removeEventListener('pointerup', onUp);
    };
    window.addEventListener('pointermove', onMove);
    window.addEventListener('pointerup', onUp);
  }, []);

  // ── Translation ──

  const handleTranslate = useCallback(async (text: string) => {
    if (!text.trim()) return;
    if (!hasOpenAIKey()) { toast.error('Set OpenAI API key in Settings'); return; }

    // Pause video while translating
    videoRef.current?.pause();
    setPlaying(false);
    setSelectedText(text);
    setTranslating(true);
    setTranslationResult(null);

    try {
      const targetLang = getTranslationLang();
      const prompt = `Translate to ${targetLang}. Return JSON: {"translation":"...","explanation":"brief explanation with synonyms and example sentence"}

Text: "${text}"`;
      const resp = await chatCompletion([{ role: 'user', content: prompt }], { temperature: 0.3, maxTokens: 300 });
      const match = resp.match(/\{[\s\S]*\}/);
      if (match) {
        const parsed = JSON.parse(match[0]);
        setTranslationResult({ translation: parsed.translation || resp, explanation: parsed.explanation || '' });
      } else {
        setTranslationResult({ translation: resp, explanation: '' });
      }
    } catch (err: any) {
      toast.error(err.message || 'Translation failed');
    } finally {
      setTranslating(false);
    }
  }, []);

  // ── Save translation ──

  const saveTranslation = useCallback(() => {
    if (!translationResult || !selectedText) return;
    const entry: VideoSavedTranslation = {
      id: uuidv4(),
      original: selectedText,
      translation: translationResult.translation,
      explanation: translationResult.explanation,
      timestamp: currentTime,
      createdAt: Date.now(),
    };
    setSavedTranslations(prev => [entry, ...prev]);
    toast.success('Translation saved');
    setSelectedText('');
    setTranslationResult(null);
  }, [translationResult, selectedText, currentTime]);

  // ── Import translations to deck ──

  const importToDeck = useCallback(async () => {
    if (!selectedDeckId || savedTranslations.length === 0) return;
    setSaving(true);
    try {
      const deck = await db.decks.get(selectedDeckId);
      const settings = deck?.settings || DEFAULT_DECK_SETTINGS;
      let count = 0;

      for (const st of savedTranslations) {
        if (st.addedToDeck) continue;
        const card: Card = {
          id: uuidv4(),
          deckId: selectedDeckId,
          front: st.original,
          back: `**${st.translation}**${st.explanation ? `\n\n${st.explanation}` : ''}`,
          tags: ['video', 'subtitle'],
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
        await db.cards.put(card);
        count++;
      }

      setSavedTranslations(prev => prev.map(st => ({ ...st, addedToDeck: selectedDeckId })));
      toast.success(`${count} cards added to "${deck?.name}"`);
    } catch (err: any) {
      toast.error(err.message || 'Import failed');
    } finally {
      setSaving(false);
    }
  }, [selectedDeckId, savedTranslations]);

  // ── Subtitle Search ──

  const handleSubSearch = useCallback(async () => {
    if (!subSearchQuery.trim()) return;
    setSubSearching(true);
    try {
      const { results, totalCount } = await searchSubtitles(subSearchQuery, subSearchLangs);
      setSubSearchResults(results);
      setSubSearchTotal(totalCount);
    } catch (err: any) {
      toast.error(err.message || 'Search failed');
    } finally {
      setSubSearching(false);
    }
  }, [subSearchQuery, subSearchLangs]);

  const handleSubDownload = useCallback(async (result: SubtitleResult, track: 1 | 2) => {
    setSubDownloading(result.id);
    try {
      const content = await downloadSubtitle(result.downloadUrl);

      const cues = parseSubtitles(content);
      if (cues.length === 0) {
        toast.error('No subtitle cues found in file');
        return;
      }

      if (track === 1) { setSub1(cues); setSub1Name(result.fileName); }
      else { setSub2(cues); setSub2Name(result.fileName); }
      toast.success(`${cues.length} cues loaded as Track ${track}`);
      setShowSubSearch(false);
    } catch (err: any) {
      // Fallback: open the OpenSubtitles page
      if (result.pageUrl) {
        window.open(result.pageUrl, '_blank');
        toast.error('Auto-download failed — opened subtitle page');
      } else {
        toast.error(err.message || 'Download failed');
      }
    } finally {
      setSubDownloading(null);
    }
  }, []);

  const toggleSubSearchLang = useCallback((code: string) => {
    setSubSearchLangs(prev =>
      prev.includes(code) ? prev.filter(l => l !== code) : [...prev, code]
    );
  }, []);

  // ── Seek bar click ──

  const handleSeekClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const pct = (e.clientX - rect.left) / rect.width;
    seek(pct * duration);
  };

  // Progress percentage
  const progress = duration > 0 ? (currentTime / duration) * 100 : 0;

  // ═══ Upload Screen ═══
  if (!videoSrc) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-6">
        <div className="flex items-center gap-3 mb-8">
          <button onClick={() => navigate('/')} className="w-10 h-10 rounded-xl bg-slate-800/50 flex items-center justify-center hover:bg-slate-700/50 transition-colors">
            <ArrowLeft size={20} />
          </button>
          <div>
            <h1 className="text-2xl font-bold flex items-center gap-2">
              <Subtitles size={24} className="text-cyan-400" />
              Dual Subtitle Player
            </h1>
            <p className="text-xs text-slate-500">Watch videos with dual subtitles, translate & create flashcards</p>
          </div>
        </div>

        <div className="glass-card rounded-2xl p-8 text-center space-y-6">
          {remuxing ? (
            <>
              <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center mx-auto">
                <Loader size={40} className="text-cyan-400 animate-spin" />
              </div>
              <div>
                <p className="text-lg font-bold mb-1">Converting Video...</p>
                <p className="text-sm text-slate-400">{remuxProgress}</p>
                <p className="text-[10px] text-slate-600 mt-2">MKV/AVI files are remuxed to MP4 for browser playback.<br />This uses copy mode (no re-encoding) and is usually fast.</p>
              </div>
            </>
          ) : (
            <>
              <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center mx-auto">
                <Play size={40} className="text-cyan-400" />
              </div>
              <div>
                <p className="text-lg font-bold mb-1">Upload a Video</p>
                <p className="text-sm text-slate-500 max-w-sm mx-auto">
                  Load a video file and up to 2 subtitle tracks (SRT/VTT). Select subtitle text to translate and create flashcards.
                </p>
              </div>
              <label className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 font-medium text-sm cursor-pointer hover:from-cyan-400 hover:to-blue-400 transition-all shadow-lg">
                <Upload size={18} />
                Choose Video
                <input type="file" accept="video/*,.mkv,.avi,.flv,.ts" onChange={handleVideoUpload} className="hidden" />
              </label>
              <p className="text-[10px] text-slate-600">Supports MP4, WebM, MKV, AVI, FLV, MOV and more</p>
            </>
          )}

          <div className="text-left pt-4 border-t border-slate-800/50 space-y-2">
            <p className="text-xs font-medium text-slate-400">Keyboard shortcuts</p>
            <div className="grid grid-cols-2 gap-1 text-[10px] text-slate-600">
              <span><kbd className="px-1 bg-slate-800 rounded">Space</kbd> / <kbd className="px-1 bg-slate-800 rounded">K</kbd> Play/Pause</span>
              <span><kbd className="px-1 bg-slate-800 rounded">←</kbd> / <kbd className="px-1 bg-slate-800 rounded">→</kbd> ±5 seconds</span>
              <span><kbd className="px-1 bg-slate-800 rounded">F</kbd> Fullscreen</span>
              <span><kbd className="px-1 bg-slate-800 rounded">M</kbd> Mute</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ═══ Player Screen ═══
  return (
    <div className="h-screen flex bg-slate-950">
      {/* Main player area */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Video container */}
        <div
          ref={containerRef}
          className="relative flex-1 bg-black flex items-center justify-center overflow-hidden cursor-pointer select-none"
          onClick={(e) => { if ((e.target as HTMLElement).tagName !== 'BUTTON') togglePlay(); }}
          onMouseMove={resetControlsTimeout}
          onTouchStart={resetControlsTimeout}
        >
          <video
            ref={videoRef}
            src={videoSrc}
            className="max-w-full max-h-full"
            playsInline
          />

          {/* Remuxing overlay */}
          {remuxing && (
            <div className="absolute inset-0 bg-black/80 flex flex-col items-center justify-center z-50 backdrop-blur-sm">
              <Loader size={40} className="text-cyan-400 animate-spin mb-4" />
              <p className="text-sm font-medium">{remuxProgress}</p>
              <p className="text-[10px] text-slate-500 mt-1">Remuxing to MP4 (no re-encoding)</p>
            </div>
          )}

          {/* Subtitle overlays */}
          {sub1Visible && activeCue1 && (
            <div
              className="absolute left-0 right-0 text-center px-4 z-10"
              style={{ top: `${sub1Y}%`, transform: 'translateY(-50%)' }}
            >
              <div className="inline-flex items-center gap-1">
                <button
                  onPointerDown={e => handleSubDrag(e, 1)}
                  className="opacity-0 hover:opacity-60 cursor-grab text-white/40 p-0.5"
                  title="Drag to move"
                >
                  <GripVertical size={10} />
                </button>
                <span
                  className="inline-block px-3 py-1.5 rounded-lg bg-black/70 text-white text-sm md:text-base font-medium backdrop-blur-sm cursor-text select-text"
                  onMouseUp={() => {
                    const sel = window.getSelection()?.toString().trim();
                    if (sel && sel.length > 0) setSelectedText(sel);
                  }}
                  onClick={e => { e.stopPropagation(); handleTranslate(activeCue1.text); }}
                >
                  {activeCue1.text}
                </span>
              </div>
            </div>
          )}

          {sub2Visible && activeCue2 && (
            <div
              className="absolute left-0 right-0 text-center px-4 z-10"
              style={{ top: `${sub2Y}%`, transform: 'translateY(-50%)' }}
            >
              <div className="inline-flex items-center gap-1">
                <button
                  onPointerDown={e => handleSubDrag(e, 2)}
                  className="opacity-0 hover:opacity-60 cursor-grab text-white/40 p-0.5"
                  title="Drag to move"
                >
                  <GripVertical size={10} />
                </button>
                <span
                  className="inline-block px-3 py-1.5 rounded-lg bg-black/50 text-yellow-200/90 text-xs md:text-sm italic backdrop-blur-sm cursor-text select-text"
                  onMouseUp={() => {
                    const sel = window.getSelection()?.toString().trim();
                    if (sel && sel.length > 0) setSelectedText(sel);
                  }}
                  onClick={e => { e.stopPropagation(); handleTranslate(activeCue2.text); }}
                >
                  {activeCue2.text}
                </span>
              </div>
            </div>
          )}

          {/* Translation popup */}
          <AnimatePresence>
            {(translating || translationResult) && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                className="absolute bottom-20 left-1/2 -translate-x-1/2 w-[90%] max-w-md bg-slate-900/95 backdrop-blur-md border border-slate-700/50 rounded-2xl p-4 z-20 shadow-2xl"
                onClick={e => e.stopPropagation()}
              >
                {translating ? (
                  <div className="flex items-center justify-center gap-2 py-4">
                    <Loader size={16} className="animate-spin text-purple-400" />
                    <span className="text-sm text-slate-400">Translating...</span>
                  </div>
                ) : translationResult && (
                  <div className="space-y-3">
                    <div className="flex items-start justify-between">
                      <div>
                        <p className="text-[10px] text-slate-500 mb-0.5">Original</p>
                        <p className="text-sm font-medium">{selectedText}</p>
                      </div>
                      <button onClick={() => { setSelectedText(''); setTranslationResult(null); }} className="text-slate-500 hover:text-white p-1">
                        <X size={14} />
                      </button>
                    </div>
                    <div className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20">
                      <p className="text-[10px] text-emerald-400/70 mb-0.5">Translation</p>
                      <p className="text-sm font-semibold text-emerald-400">{translationResult.translation}</p>
                    </div>
                    {translationResult.explanation && (
                      <p className="text-[11px] text-slate-400">{translationResult.explanation}</p>
                    )}
                    <div className="flex gap-2">
                      <button onClick={saveTranslation} className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-lg bg-primary-500/20 text-primary-400 text-xs font-medium hover:bg-primary-500/30 transition-colors">
                        <Save size={12} /> Save
                      </button>
                      <button onClick={() => { navigator.clipboard.writeText(translationResult.translation); toast.success('Copied'); }} className="px-3 py-2 rounded-lg bg-slate-800/50 text-xs text-slate-400 hover:text-white transition-colors">
                        <Copy size={12} />
                      </button>
                    </div>
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>

          {/* Play/Pause overlay */}
          {!playing && showControls && (
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center">
                <Play size={28} className="text-white ml-1" />
              </div>
            </div>
          )}

          {/* Controls overlay */}
          <div className={`absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent transition-opacity duration-300 ${showControls ? 'opacity-100' : 'opacity-0'}`} onClick={e => e.stopPropagation()}>
            {/* Progress bar */}
            <div className="px-4 pt-8 pb-1">
              <div
                className="h-1.5 bg-white/20 rounded-full cursor-pointer group hover:h-2.5 transition-all"
                onClick={handleSeekClick}
              >
                <div
                  className="h-full bg-cyan-500 rounded-full relative transition-all"
                  style={{ width: `${progress}%` }}
                >
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3.5 h-3.5 bg-white rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
            </div>

            {/* Control buttons */}
            <div className="flex items-center gap-2 px-4 pb-3 pt-1">
              <button onClick={togglePlay} className="w-9 h-9 rounded-lg flex items-center justify-center text-white hover:bg-white/10 transition-colors">
                {playing ? <Pause size={18} /> : <Play size={18} className="ml-0.5" />}
              </button>
              <button onClick={() => skip(-10)} className="w-8 h-8 rounded-lg flex items-center justify-center text-white/70 hover:text-white hover:bg-white/10 transition-colors">
                <SkipBack size={14} />
              </button>
              <button onClick={() => skip(10)} className="w-8 h-8 rounded-lg flex items-center justify-center text-white/70 hover:text-white hover:bg-white/10 transition-colors">
                <SkipForward size={14} />
              </button>

              {/* Time */}
              <span className="text-xs text-white/70 font-mono tabular-nums">
                {formatTime(currentTime)} / {formatTime(duration)}
              </span>

              <div className="flex-1" />

              {/* Speed */}
              <select
                value={playbackRate}
                onChange={e => setPlaybackRate(parseFloat(e.target.value))}
                className="bg-transparent text-xs text-white/70 cursor-pointer focus:outline-none"
              >
                {[0.5, 0.75, 1, 1.25, 1.5, 2].map(r => (
                  <option key={r} value={r} className="bg-slate-900">{r}×</option>
                ))}
              </select>

              {/* Volume */}
              <button onClick={() => setMuted(!muted)} className="w-8 h-8 rounded-lg flex items-center justify-center text-white/70 hover:text-white hover:bg-white/10">
                {muted || volume === 0 ? <VolumeX size={14} /> : <Volume2 size={14} />}
              </button>
              <input
                type="range"
                min={0} max={1} step={0.05}
                value={muted ? 0 : volume}
                onChange={e => { setVolume(parseFloat(e.target.value)); setMuted(false); }}
                className="w-16 h-1 accent-white"
              />

              {/* Subtitle toggles */}
              {sub1.length > 0 && (
                <button onClick={() => setSub1Visible(!sub1Visible)} className={`w-8 h-8 rounded-lg flex items-center justify-center transition-colors ${sub1Visible ? 'text-cyan-400 bg-cyan-500/10' : 'text-white/40'}`} title="Subtitle 1">
                  <Subtitles size={14} />
                </button>
              )}
              {sub2.length > 0 && (
                <button onClick={() => setSub2Visible(!sub2Visible)} className={`w-8 h-8 rounded-lg flex items-center justify-center transition-colors ${sub2Visible ? 'text-yellow-400 bg-yellow-500/10' : 'text-white/40'}`} title="Subtitle 2">
                  <Subtitles size={14} />
                </button>
              )}

              {/* Sidebar toggle */}
              <button onClick={() => setShowSidebar(!showSidebar)} className={`w-8 h-8 rounded-lg flex items-center justify-center transition-colors ${showSidebar ? 'text-purple-400 bg-purple-500/10' : 'text-white/40'}`}>
                {showSidebar ? <ChevronRight size={14} /> : <ChevronLeft size={14} />}
              </button>

              {/* Fullscreen */}
              <button onClick={toggleFullscreen} className="w-8 h-8 rounded-lg flex items-center justify-center text-white/70 hover:text-white hover:bg-white/10">
                {isFullscreen ? <Minimize size={14} /> : <Maximize size={14} />}
              </button>
            </div>
          </div>
        </div>

        {/* Subtitle upload bar */}
        <div className="flex items-center gap-2 px-4 py-2 bg-slate-900/80 border-t border-slate-800/50 flex-wrap">
          {sub1.length === 0 && (
            <label className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-cyan-500/15 text-cyan-400 text-xs font-medium cursor-pointer hover:bg-cyan-500/25 transition-colors">
              <FileText size={12} /> Sub 1 (SRT/VTT)
              <input type="file" accept=".srt,.vtt,.sub" onChange={e => handleSubUpload(e, 1)} className="hidden" />
            </label>
          )}
          {sub2.length === 0 && (
            <label className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-yellow-500/15 text-yellow-400 text-xs font-medium cursor-pointer hover:bg-yellow-500/25 transition-colors">
              <FileText size={12} /> Sub 2 (SRT/VTT)
              <input type="file" accept=".srt,.vtt,.sub" onChange={e => handleSubUpload(e, 2)} className="hidden" />
            </label>
          )}
          {sub1.length > 0 && <span className="text-[10px] text-cyan-400/60">Sub 1: {sub1Name} ({sub1.length} cues)</span>}
          {sub2.length > 0 && <span className="text-[10px] text-yellow-400/60">Sub 2: {sub2Name} ({sub2.length} cues)</span>}

          {/* Search subtitles online */}
          <button
            onClick={() => { setShowSubSearch(true); if (videoName) setSubSearchQuery(videoName.replace(/\.[^.]+$/, '').replace(/[._-]/g, ' ')); }}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-500/15 text-emerald-400 text-xs font-medium hover:bg-emerald-500/25 transition-colors"
          >
            <Search size={12} /> Search Online
          </button>

          <div className="flex-1" />
          <label className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800/50 text-slate-400 text-xs cursor-pointer hover:text-white transition-colors">
            <Upload size={12} /> Change Video
            <input type="file" accept="video/*,.mkv,.avi,.flv,.ts" onChange={handleVideoUpload} className="hidden" />
          </label>
        </div>
      </div>

      {/* Sidebar — Translations */}
      <AnimatePresence>
        {showSidebar && (
          <motion.div
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: 300, opacity: 1 }}
            exit={{ width: 0, opacity: 0 }}
            className="bg-slate-900/90 border-l border-slate-800/50 flex flex-col overflow-hidden flex-shrink-0"
          >
            {/* Sidebar header */}
            <div className="p-3 border-b border-slate-800/50">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-sm font-bold flex items-center gap-2">
                  <Languages size={14} className="text-purple-400" />
                  Translations ({savedTranslations.length})
                </h3>
                <button onClick={() => setShowSidebar(false)} className="text-slate-600 hover:text-white"><X size={14} /></button>
              </div>
              <p className="text-[10px] text-slate-600">Click subtitles to translate • Select text for custom translation</p>
            </div>

            {/* Translate selected text */}
            {(activeCue1 || activeCue2) && (
              <div className="p-3 border-b border-slate-800/40 space-y-2">
                <p className="text-[10px] text-slate-500 font-medium">Quick Translate</p>
                {activeCue1 && sub1Visible && (
                  <button
                    onClick={() => handleTranslate(activeCue1.text)}
                    className="w-full text-left px-2.5 py-1.5 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-xs text-cyan-300 hover:bg-cyan-500/15 transition-colors truncate"
                  >
                    {activeCue1.text}
                  </button>
                )}
                {activeCue2 && sub2Visible && (
                  <button
                    onClick={() => handleTranslate(activeCue2.text)}
                    className="w-full text-left px-2.5 py-1.5 rounded-lg bg-yellow-500/10 border border-yellow-500/20 text-xs text-yellow-300 hover:bg-yellow-500/15 transition-colors truncate"
                  >
                    {activeCue2.text}
                  </button>
                )}
              </div>
            )}

            {/* Import to deck */}
            {savedTranslations.length > 0 && (
              <div className="p-3 border-b border-slate-800/40 space-y-2">
                <p className="text-[10px] text-slate-500 font-medium">Import to Deck</p>
                <select
                  value={selectedDeckId}
                  onChange={e => setSelectedDeckId(e.target.value)}
                  className="w-full px-2.5 py-1.5 rounded-lg bg-slate-800/60 border border-slate-700/40 text-xs focus:outline-none"
                >
                  <option value="">Select deck...</option>
                  {(decks || []).map(d => (
                    <option key={d.id} value={d.id}>{d.icon} {d.name}</option>
                  ))}
                </select>
                {selectedDeckId && (
                  <button
                    onClick={importToDeck}
                    disabled={saving}
                    className="w-full py-2 rounded-lg bg-primary-500/20 text-primary-400 text-xs font-medium hover:bg-primary-500/30 disabled:opacity-40 transition-colors flex items-center justify-center gap-1.5"
                  >
                    {saving ? <Loader size={12} className="animate-spin" /> : <Layers size={12} />}
                    Import All ({savedTranslations.filter(s => !s.addedToDeck).length} cards)
                  </button>
                )}
              </div>
            )}

            {/* Saved translations list */}
            <div className="flex-1 overflow-y-auto p-2 space-y-1">
              {savedTranslations.length === 0 ? (
                <div className="text-center py-8">
                  <Languages size={24} className="text-slate-700 mx-auto mb-2" />
                  <p className="text-xs text-slate-600">Click subtitles or select text to translate</p>
                </div>
              ) : (
                savedTranslations.map(st => (
                  <div
                    key={st.id}
                    className={`px-2.5 py-2 rounded-xl transition-colors ${
                      st.addedToDeck ? 'bg-emerald-500/5 border border-emerald-500/10' : 'bg-slate-800/30 border border-slate-700/20 hover:bg-slate-800/50'
                    }`}
                  >
                    <div className="flex items-start gap-2">
                      <div className="flex-1 min-w-0">
                        <p className="text-xs font-medium truncate">{st.original}</p>
                        <p className="text-[11px] text-emerald-400 truncate">{st.translation}</p>
                        {st.explanation && <p className="text-[9px] text-slate-600 truncate">{st.explanation}</p>}
                      </div>
                      <div className="flex items-center gap-0.5 flex-shrink-0">
                        <button
                          onClick={() => seek(st.timestamp)}
                          className="text-[9px] text-slate-600 hover:text-cyan-400 transition-colors"
                          title="Jump to timestamp"
                        >
                          {formatTime(st.timestamp)}
                        </button>
                        {st.addedToDeck && <Check size={10} className="text-emerald-400" />}
                        <button
                          onClick={() => setSavedTranslations(prev => prev.filter(s => s.id !== st.id))}
                          className="text-slate-700 hover:text-red-400 p-0.5"
                        >
                          <X size={8} />
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ═══ Subtitle Search Modal ═══ */}
      <AnimatePresence>
        {showSubSearch && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[200] flex items-center justify-center p-4"
            onClick={e => { if (e.target === e.currentTarget) setShowSubSearch(false); }}
          >
            <motion.div
              initial={{ scale: 0.92, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.92, y: 20 }}
              className="bg-slate-900 border border-slate-700/50 rounded-2xl shadow-2xl w-full max-w-2xl max-h-[85vh] flex flex-col overflow-hidden"
            >
              {/* Header */}
              <div className="p-4 border-b border-slate-800/50 flex-shrink-0">
                <div className="flex items-center justify-between mb-3">
                  <h2 className="text-base font-bold flex items-center gap-2">
                    <Globe size={18} className="text-emerald-400" />
                    Search Subtitles
                  </h2>
                  <button onClick={() => setShowSubSearch(false)} className="text-slate-500 hover:text-white transition-colors">
                    <X size={18} />
                  </button>
                </div>

                {/* Search form */}
                <form
                  onSubmit={e => { e.preventDefault(); handleSubSearch(); }}
                  className="flex gap-2"
                >
                  <input
                    type="text"
                    value={subSearchQuery}
                    onChange={e => setSubSearchQuery(e.target.value)}
                    placeholder="Movie or TV show name..."
                    className="flex-1 px-3 py-2 rounded-lg bg-slate-800/60 border border-slate-700/50 text-sm focus:outline-none focus:border-emerald-500/50"
                    autoFocus
                  />
                  <button
                    type="submit"
                    disabled={subSearching || !subSearchQuery.trim()}
                    className="px-4 py-2 rounded-lg bg-gradient-to-r from-emerald-500 to-cyan-500 text-sm font-medium disabled:opacity-40 transition-all flex items-center gap-1.5"
                  >
                    {subSearching ? <Loader size={14} className="animate-spin" /> : <Search size={14} />}
                    Search
                  </button>
                </form>

                {/* Language filter */}
                <div className="mt-3">
                  <p className="text-[10px] text-slate-500 mb-1.5">Languages:</p>
                  <div className="flex flex-wrap gap-1 max-h-20 overflow-y-auto">
                    {SUBTITLE_LANGUAGES.map(lang => (
                      <button
                        key={lang.code}
                        onClick={() => toggleSubSearchLang(lang.code)}
                        className={`px-2 py-0.5 rounded-md text-[10px] font-medium transition-colors ${
                          subSearchLangs.includes(lang.code)
                            ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                            : 'bg-slate-800/40 text-slate-500 border border-slate-700/30 hover:text-slate-300'
                        }`}
                      >
                        {lang.flag} {lang.name}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Load target selector */}
                <div className="mt-2 flex items-center gap-2">
                  <span className="text-[10px] text-slate-500">Load as:</span>
                  <button
                    onClick={() => setSubLoadTarget(1)}
                    className={`px-2 py-0.5 rounded-md text-[10px] font-medium transition-colors ${
                      subLoadTarget === 1 ? 'bg-cyan-500/20 text-cyan-400' : 'bg-slate-800/40 text-slate-500'
                    }`}
                  >
                    Track 1
                  </button>
                  <button
                    onClick={() => setSubLoadTarget(2)}
                    className={`px-2 py-0.5 rounded-md text-[10px] font-medium transition-colors ${
                      subLoadTarget === 2 ? 'bg-yellow-500/20 text-yellow-400' : 'bg-slate-800/40 text-slate-500'
                    }`}
                  >
                    Track 2
                  </button>
                </div>
              </div>

              {/* Results */}
              <div className="flex-1 overflow-y-auto p-3">
                {subSearchResults.length === 0 && !subSearching ? (
                  <div className="flex flex-col items-center justify-center py-12 text-center">
                    <Search size={32} className="text-slate-700 mb-3" />
                    <p className="text-xs text-slate-500 mb-1">Search for movie subtitles</p>
                    <p className="text-[10px] text-slate-600 max-w-xs">
                      Enter a movie or TV show name and select languages to find matching subtitles from OpenSubtitles.
                    </p>
                  </div>
                ) : subSearching ? (
                  <div className="flex flex-col items-center justify-center py-12">
                    <Loader size={28} className="text-emerald-400 animate-spin mb-3" />
                    <p className="text-xs text-slate-400">Searching...</p>
                  </div>
                ) : (
                  <>
                    <p className="text-[10px] text-slate-500 mb-2">{subSearchTotal} results found</p>
                    <div className="space-y-1.5">
                      {subSearchResults.map(result => {
                        const langInfo = SUBTITLE_LANGUAGES.find(l => l.osCode === result.languageCode || l.code === result.languageCode);
                        return (
                          <div
                            key={result.id}
                            className="rounded-xl bg-slate-800/40 border border-slate-700/20 p-3 hover:border-emerald-500/20 transition-colors group"
                          >
                            <div className="flex items-start gap-3">
                              <div className="flex-1 min-w-0">
                                {/* Language + badges */}
                                <div className="flex items-center gap-2 mb-1 flex-wrap">
                                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-emerald-500/15 text-emerald-400 font-medium flex-shrink-0">
                                    {langInfo ? `${langInfo.flag} ${result.language}` : result.language}
                                  </span>
                                  <span className="text-[9px] px-1 py-0.5 rounded bg-slate-700/40 text-slate-400 uppercase">{result.format}</span>
                                  {result.hearingImpaired && (
                                    <span className="text-[9px] px-1 py-0.5 rounded bg-purple-500/15 text-purple-400">HI</span>
                                  )}
                                </div>

                                {/* Release name */}
                                <p className="text-xs font-medium truncate mb-0.5" title={result.release}>
                                  {result.release || result.fileName}
                                </p>

                                {/* Meta info */}
                                <div className="flex items-center gap-3 text-[9px] text-slate-500 flex-wrap">
                                  <span className="flex items-center gap-0.5">
                                    <Download size={8} /> {result.downloadCount.toLocaleString()}
                                  </span>
                                  {parseFloat(result.rating) > 0 && (
                                    <span className="flex items-center gap-0.5">
                                      <Star size={8} /> {result.rating}
                                    </span>
                                  )}
                                  {result.movieYear && (
                                    <span>{result.movieTitle} ({result.movieYear})</span>
                                  )}
                                  {result.fps && result.fps !== '0.000' && <span>{result.fps} fps</span>}
                                </div>
                              </div>

                              {/* Actions */}
                              <div className="flex flex-col gap-1 flex-shrink-0">
                                <button
                                  onClick={() => handleSubDownload(result, subLoadTarget)}
                                  disabled={subDownloading === result.id}
                                  className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-emerald-500/15 text-emerald-400 text-[10px] font-medium hover:bg-emerald-500/25 disabled:opacity-40 transition-colors"
                                >
                                  {subDownloading === result.id
                                    ? <Loader size={10} className="animate-spin" />
                                    : <Download size={10} />
                                  }
                                  Track {subLoadTarget}
                                </button>
                                {result.pageUrl && (
                                  <a
                                    href={result.pageUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-slate-700/30 text-slate-500 text-[9px] hover:text-slate-300 transition-colors text-center justify-center"
                                  >
                                    <ExternalLink size={8} /> Open
                                  </a>
                                )}
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </>
                )}
              </div>

              {/* Footer */}
              <div className="p-3 border-t border-slate-800/50 flex-shrink-0 flex items-center gap-2">
                <span className="text-[9px] text-slate-600">
                  Powered by OpenSubtitles.org — no account needed
                </span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
