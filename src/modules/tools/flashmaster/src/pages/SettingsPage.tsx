import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useT, LOCALES } from '../lib/i18n';
import {
  ArrowLeft,
  Download,
  Upload,
  FolderSync,
  Cloud,
  Trash2,
  FileDown,
  FileUp,
  RefreshCw,
  CheckCircle2,
  AlertTriangle,
  HardDrive,
  Smartphone,
  Info,
  Target,
  Volume2,
  VolumeX,
  Sun,
  Moon,
  Palette,
  Film,
  Speech,
  Play,
  Heart,
  Coffee,
  Mic,
  Key,
  Eye,
  EyeOff,
  Youtube,
  Languages,
  BookOpen,
  FileText,
  Table,
  FileJson,
  ChevronDown,
} from 'lucide-react';
import toast from 'react-hot-toast';
import { useLiveQuery } from 'dexie-react-hooks';
import { db } from '../lib/db';
import {
  importAnkiDeck, exportToAnki, exportAllData,
  importCSV, exportDeckCSV, exportDeckJSON, importDeckJSON,
} from '../lib/anki';
import { downloadBackup, uploadBackup, isFSAccessSupported, selectSyncFolder, performSync } from '../lib/sync';
import { getOrCreateStats } from '../lib/gamification';
import { getTheme, toggleTheme, type Theme } from '../lib/theme';
import { isSoundEnabled, setSoundEnabled } from '../lib/sounds';
import {
  isAutoOpenEnabled,
  setAutoOpenEnabled,
  getPlayPhraseLang,
  setPlayPhraseLang,
  PLAYPHRASE_LANGUAGES,
} from '../lib/playphrase';
import { isYouTubeAutoplay, setYouTubeAutoplay } from '../components/YouTubeEmbed';
import {
  isTTSEnabled,
  setTTSEnabled,
  isTTSAutoPlay,
  setTTSAutoPlay,
  getTTSLang,
  setTTSLang,
  getTTSRate,
  setTTSRate,
  POPULAR_LANGUAGES,
  speak,
  isTTSSupported,
} from '../lib/tts';
import { saveAs } from 'file-saver';
import {
  getOpenAIKey,
  setOpenAIKey,
  getOpenAIModel,
  setOpenAIModel,
  getOpenAIVoice,
  setOpenAIVoice,
  OPENAI_MODELS,
  OPENAI_VOICES,
  type OpenAIVoice,
} from '../lib/openai';
import { getTranslationLang, setTranslationLang } from './BookReader';

interface Props {
  onRefresh: () => void;
}

export default function SettingsPage({ onRefresh }: Props) {
  const navigate = useNavigate();
  const { t, locale, setLocale } = useT();
  const [syncFolder, setSyncFolder] = useState<string | null>(null);
  const [syncing, setSyncing] = useState(false);
  const [importing, setImporting] = useState(false);
  const [soundOn, setSoundOn] = useState(isSoundEnabled());
  const [currentTheme, setCurrentTheme] = useState<Theme>(getTheme());
  const [autoOpenPlayPhrase, setAutoOpenPlayPhrase] = useState(isAutoOpenEnabled());
  const [ppLang, setPpLang] = useState(getPlayPhraseLang());
  // YouTube
  const [ytAutoplay, setYtAutoplay] = useState(isYouTubeAutoplay());
  // Translation language
  const [translationLang, setTranslationLangState] = useState(getTranslationLang());
  // TTS
  const [ttsOn, setTtsOn] = useState(isTTSEnabled());
  const [ttsAutoPlay, setTtsAutoPlay] = useState(isTTSAutoPlay());
  const [ttsLang, setTtsLang] = useState(getTTSLang());
  const [ttsRate, setTtsRate] = useState(getTTSRate());
  // OpenAI / Voice Mode
  const [openaiKey, setOpenaiKey] = useState(getOpenAIKey());
  const [showKey, setShowKey] = useState(false);
  const [openaiModel, setOpenaiModel] = useState(getOpenAIModel());
  const [openaiVoice, setOpenaiVoice] = useState(getOpenAIVoice());
  const ankiImportRef = useRef<HTMLInputElement>(null);
  const jsonImportRef = useRef<HTMLInputElement>(null);
  const csvImportRef = useRef<HTMLInputElement>(null);
  const tsvImportRef = useRef<HTMLInputElement>(null);
  const deckJsonImportRef = useRef<HTMLInputElement>(null);
  const [exportFormat, setExportFormat] = useState<'apkg' | 'csv' | 'tsv' | 'json'>('apkg');
  const [csvImportDeckId, setCsvImportDeckId] = useState('');
  const [showCsvDeckPicker, setShowCsvDeckPicker] = useState<'csv' | 'tsv' | null>(null);

  const decks = useLiveQuery(() => db.decks.toArray());
  const stats = useLiveQuery(() => db.userStats.get('main'));

  // ── Anki Import ──
  const handleAnkiImport = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setImporting(true);
    try {
      const result = await importAnkiDeck(file);
      toast.success(`Imported "${result.deckName}" with ${result.cardCount} cards!`);
      onRefresh();
    } catch (err: any) {
      console.error(err);
      toast.error(`Import failed: ${err.message}`);
    } finally {
      setImporting(false);
      if (ankiImportRef.current) ankiImportRef.current.value = '';
    }
  };

  // ── Anki Export ──
  const handleAnkiExport = async (deckId: string, deckName: string) => {
    try {
      const blob = await exportToAnki(deckId);
      saveAs(blob, `${deckName.replace(/[^a-zA-Z0-9]/g, '_')}.apkg`);
      toast.success('Anki deck exported!');
    } catch (err: any) {
      console.error(err);
      toast.error(`Export failed: ${err.message}`);
    }
  };

  // ── Multi-format Export ──
  const handleExportDeck = async (deckId: string, deckName: string) => {
    const safeName = deckName.replace(/[^a-zA-Z0-9]/g, '_');
    try {
      switch (exportFormat) {
        case 'apkg': {
          const blob = await exportToAnki(deckId);
          saveAs(blob, `${safeName}.apkg`);
          break;
        }
        case 'csv': {
          const csv = await exportDeckCSV(deckId, ',');
          const blob = new Blob([csv], { type: 'text/csv;charset=utf-8' });
          saveAs(blob, `${safeName}.csv`);
          break;
        }
        case 'tsv': {
          const tsv = await exportDeckCSV(deckId, '\t');
          const blob = new Blob([tsv], { type: 'text/tab-separated-values;charset=utf-8' });
          saveAs(blob, `${safeName}.tsv`);
          break;
        }
        case 'json': {
          const json = await exportDeckJSON(deckId);
          const blob = new Blob([JSON.stringify(json, null, 2)], { type: 'application/json;charset=utf-8' });
          saveAs(blob, `${safeName}.json`);
          break;
        }
      }
      toast.success(`Deck exported as .${exportFormat}!`);
    } catch (err: any) {
      console.error(err);
      toast.error(`Export failed: ${err.message}`);
    }
  };

  // ── CSV / TSV Import ──
  const handleCsvTsvImport = async (e: React.ChangeEvent<HTMLInputElement>, sep: ',' | '\t') => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!csvImportDeckId) {
      toast.error('Please select a deck to import into');
      return;
    }

    setImporting(true);
    try {
      const text = await file.text();
      const count = await importCSV(text, csvImportDeckId, sep);
      toast.success(`Imported ${count} cards!`);
      onRefresh();
    } catch (err: any) {
      console.error(err);
      toast.error(`Import failed: ${err.message}`);
    } finally {
      setImporting(false);
      setShowCsvDeckPicker(null);
      if (csvImportRef.current) csvImportRef.current.value = '';
      if (tsvImportRef.current) tsvImportRef.current.value = '';
    }
  };

  // ── JSON Deck Import ──
  const handleDeckJsonImport = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setImporting(true);
    try {
      const text = await file.text();
      const data = JSON.parse(text);
      const result = await importDeckJSON(data);
      toast.success(`Imported "${result.deckName}" with ${result.cardCount} cards!`);
      onRefresh();
    } catch (err: any) {
      console.error(err);
      toast.error(`Import failed: ${err.message}`);
    } finally {
      setImporting(false);
      if (deckJsonImportRef.current) deckJsonImportRef.current.value = '';
    }
  };

  // ── JSON Backup ──
  const handleJsonExport = async () => {
    try {
      await downloadBackup();
      toast.success('Backup downloaded!');
    } catch (err: any) {
      toast.error(`Backup failed: ${err.message}`);
    }
  };

  const handleJsonImport = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const merge = confirm('Merge with existing data? (Cancel to replace all data)');
    try {
      await uploadBackup(file, merge);
      toast.success('Backup restored!');
      onRefresh();
    } catch (err: any) {
      toast.error(`Restore failed: ${err.message}`);
    } finally {
      if (jsonImportRef.current) jsonImportRef.current.value = '';
    }
  };

  // ── Folder Sync ──
  const handleSelectSync = async () => {
    try {
      const name = await selectSyncFolder();
      setSyncFolder(name);
      toast.success(`Sync folder set: ${name}`);
    } catch (err: any) {
      if (err.name !== 'AbortError') {
        toast.error(`Could not select folder: ${err.message}`);
      }
    }
  };

  const handleSync = async () => {
    setSyncing(true);
    try {
      const result = await performSync();
      switch (result) {
        case 'pushed':
          toast.success('Data pushed to sync folder');
          break;
        case 'pulled':
          toast.success('New data pulled from sync folder');
          onRefresh();
          break;
        case 'up-to-date':
          toast.success('Already up to date');
          break;
      }
    } catch (err: any) {
      toast.error(`Sync failed: ${err.message}`);
    } finally {
      setSyncing(false);
    }
  };

  // ── Reset ──
  const handleReset = async () => {
    if (!confirm('This will DELETE ALL your data. This cannot be undone. Continue?')) return;
    if (!confirm('Are you REALLY sure? All decks, cards, and progress will be lost!')) return;

    await db.delete();
    window.location.reload();
  };

  // ── Daily Goal ──
  const handleDailyGoal = async (goal: number) => {
    const s = await getOrCreateStats();
    s.dailyGoal = goal;
    await db.userStats.put(s);
    onRefresh();
    toast.success(`Daily goal set to ${goal} cards`);
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-6">
      <input ref={ankiImportRef} type="file" accept=".apkg,.colpkg" className="hidden" onChange={handleAnkiImport} />
      <input ref={jsonImportRef} type="file" accept=".json" className="hidden" onChange={handleJsonImport} />
      <input ref={csvImportRef} type="file" accept=".csv,.txt" className="hidden" onChange={(e) => handleCsvTsvImport(e, ',')} />
      <input ref={tsvImportRef} type="file" accept=".tsv,.txt" className="hidden" onChange={(e) => handleCsvTsvImport(e, '\t')} />
      <input ref={deckJsonImportRef} type="file" accept=".json" className="hidden" onChange={handleDeckJsonImport} />

      {/* Header */}
      <div className="flex items-center gap-3 mb-8">
        <button
          onClick={() => navigate('/')}
          className="w-10 h-10 rounded-xl bg-slate-800/50 flex items-center justify-center hover:bg-slate-700/50 transition-colors"
        >
          <ArrowLeft size={20} />
        </button>
        <div>
          <h1 className="text-2xl font-bold">{t('settings.title')}</h1>
          <p className="text-sm text-slate-400">{t('settings.subtitle')}</p>
        </div>
      </div>

      <div className="space-y-6">
        {/* Appearance & Sound */}
        <Section title={t('settings.appearance')} icon={<Palette size={18} />}>
          <div className="space-y-3">
            {/* Theme Toggle */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                {currentTheme === 'dark' ? <Moon size={18} className="text-primary-400" /> : <Sun size={18} className="text-amber-400" />}
                <div>
                  <p className="text-sm font-medium">{t('settings.theme')}</p>
                  <p className="text-xs text-slate-500">{currentTheme === 'dark' ? t('theme.dark') : t('theme.light')}</p>
                </div>
              </div>
              <button
                onClick={() => {
                  const next = toggleTheme();
                  setCurrentTheme(next);
                }}
                className={`relative w-14 h-7 rounded-full transition-colors ${
                  currentTheme === 'light' ? 'bg-primary-500' : 'bg-slate-700'
                }`}
              >
                <div className={`absolute top-0.5 w-6 h-6 rounded-full bg-white shadow-md transition-transform ${
                  currentTheme === 'light' ? 'translate-x-7' : 'translate-x-0.5'
                }`} />
              </button>
            </div>

            {/* Sound Toggle */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                {soundOn ? <Volume2 size={18} className="text-emerald-400" /> : <VolumeX size={18} className="text-slate-400" />}
                <div>
                  <p className="text-sm font-medium">{t('settings.soundEffects')}</p>
                  <p className="text-xs text-slate-500">{t('settings.soundDesc')}</p>
                </div>
              </div>
              <button
                onClick={() => {
                  const next = !soundOn;
                  setSoundEnabled(next);
                  setSoundOn(next);
                }}
                className={`relative w-14 h-7 rounded-full transition-colors ${
                  soundOn ? 'bg-emerald-500' : 'bg-slate-700'
                }`}
              >
                <div className={`absolute top-0.5 w-6 h-6 rounded-full bg-white shadow-md transition-transform ${
                  soundOn ? 'translate-x-7' : 'translate-x-0.5'
                }`} />
              </button>
            </div>

            {/* Language */}
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium">{t('settings.language')}</p>
                <p className="text-xs text-slate-500">{t('settings.languageDesc')}</p>
              </div>
              <select
                value={locale}
                onChange={e => setLocale(e.target.value as any)}
                className="px-3 py-2 rounded-lg bg-slate-800/50 border border-slate-700/50 text-sm text-white focus:border-primary-500/50 focus:outline-none transition-colors"
              >
                {LOCALES.map(l => (
                  <option key={l.code} value={l.code}>{l.nativeLabel} ({l.label})</option>
                ))}
              </select>
            </div>
          </div>
        </Section>

        {/* PlayPhrase.me */}
        <Section title={t('settings.playPhrase')} icon={<Film size={18} />}>
          <p className="text-sm text-slate-400 mb-4">
            Search real movie &amp; TV show clips for words on your flashcards via
            <a href="https://playphrase.me" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300 ml-1">playphrase.me</a>.
            Enable per card in the card editor.
          </p>

          <div className="space-y-4">
            {/* Auto-open toggle */}
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium">{t('settings.autoOpen')}</p>
                <p className="text-xs text-slate-500">
                  Automatically open the embedded PlayPhrase panel when a card is displayed.
                  When off, you must click the PlayPhrase button.
                </p>
              </div>
              <button
                onClick={() => {
                  const next = !autoOpenPlayPhrase;
                  setAutoOpenEnabled(next);
                  setAutoOpenPlayPhrase(next);
                }}
                className={`relative w-14 h-7 rounded-full transition-colors flex-shrink-0 ${
                  autoOpenPlayPhrase ? 'bg-purple-500' : 'bg-slate-700'
                }`}
              >
                <div className={`absolute top-0.5 w-6 h-6 rounded-full bg-white shadow-md transition-transform ${
                  autoOpenPlayPhrase ? 'translate-x-7' : 'translate-x-0.5'
                }`} />
              </button>
            </div>

            {/* Language */}
            <div>
              <label className="text-sm font-medium mb-2 block">{t('settings.searchLanguage')}</label>
              <select
                value={ppLang}
                onChange={e => { setPlayPhraseLang(e.target.value); setPpLang(e.target.value); }}
                className="w-full px-3 py-2 rounded-lg bg-slate-800/50 border border-slate-700/50 text-sm text-white focus:border-primary-500/50 focus:outline-none transition-colors"
              >
                {PLAYPHRASE_LANGUAGES.map(l => (
                  <option key={l.code} value={l.code}>{l.label}</option>
                ))}
              </select>
              <p className="text-xs text-slate-500 mt-1">
                Language for PlayPhrase.me movie clip searches.
              </p>
            </div>
          </div>
        </Section>

        {/* YouTube Embed */}
        <Section title={t('settings.youtube')} icon={<Youtube size={18} />}>
          <p className="text-sm text-slate-400 mb-4">
            Embed YouTube videos directly into your flashcards. Add a YouTube URL
            to the front or back side of any card in the card editor.
          </p>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium">{t('settings.autoplay')}</p>
              <p className="text-xs text-slate-500">
                Automatically start playing embedded YouTube videos when a card is shown.
                Videos will start muted (browser requirement).
              </p>
            </div>
            <button
              onClick={() => {
                const next = !ytAutoplay;
                setYouTubeAutoplay(next);
                setYtAutoplay(next);
              }}
              className={`relative w-14 h-7 rounded-full transition-colors flex-shrink-0 ${
                ytAutoplay ? 'bg-red-500' : 'bg-slate-700'
              }`}
            >
              <div className={`absolute top-0.5 w-6 h-6 rounded-full bg-white shadow-md transition-transform ${
                ytAutoplay ? 'translate-x-7' : 'translate-x-0.5'
              }`} />
            </button>
          </div>
        </Section>

        {/* Reading & Translation */}
        <Section title="Reading & Translation" icon={<BookOpen size={18} />}>
          <p className="text-sm text-slate-400 mb-4">
            Select text in the book reader to translate. Cards are AI-generated with explanations, synonyms, and examples.
          </p>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium">Translation Language</p>
              <p className="text-xs text-slate-500">Target language for translations in the reader</p>
            </div>
            <select
              value={translationLang}
              onChange={e => { setTranslationLangState(e.target.value); setTranslationLang(e.target.value); }}
              className="px-3 py-1.5 rounded-lg bg-slate-800/50 border border-slate-700/50 text-sm focus:outline-none focus:border-primary-500/50"
            >
              {['English', 'German', 'Spanish', 'French', 'Italian', 'Portuguese', 'Russian', 'Chinese', 'Japanese', 'Korean', 'Arabic', 'Hindi', 'Turkish', 'Dutch', 'Polish', 'Swedish'].map(lang => (
                <option key={lang} value={lang}>{lang}</option>
              ))}
            </select>
          </div>
        </Section>

        {/* Text-to-Speech */}
        <Section title={t('settings.tts')} icon={<Speech size={18} />}>
          <p className="text-sm text-slate-400 mb-4">
            Read card text aloud using natural-sounding voices.
            {!isTTSSupported() && (
              <span className="text-amber-400 ml-1">(Not supported in this browser)</span>
            )}
          </p>

          <div className="space-y-4">
            {/* Enable TTS */}
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium">{t('settings.enableTts')}</p>
                <p className="text-xs text-slate-500">
                  Show a speaker button on cards during study.
                </p>
              </div>
              <button
                onClick={() => {
                  const next = !ttsOn;
                  setTTSEnabled(next);
                  setTtsOn(next);
                }}
                className={`relative w-14 h-7 rounded-full transition-colors flex-shrink-0 ${
                  ttsOn ? 'bg-emerald-500' : 'bg-slate-700'
                }`}
              >
                <div className={`absolute top-0.5 w-6 h-6 rounded-full bg-white shadow-md transition-transform ${
                  ttsOn ? 'translate-x-7' : 'translate-x-0.5'
                }`} />
              </button>
            </div>

            {ttsOn && (
              <>
                {/* Auto-play */}
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium">{t('settings.ttsAutoPlay')}</p>
                    <p className="text-xs text-slate-500">
                      Automatically read aloud when a card is shown.
                    </p>
                  </div>
                  <button
                    onClick={() => {
                      const next = !ttsAutoPlay;
                      setTTSAutoPlay(next);
                      setTtsAutoPlay(next);
                    }}
                    className={`relative w-14 h-7 rounded-full transition-colors flex-shrink-0 ${
                      ttsAutoPlay ? 'bg-emerald-500' : 'bg-slate-700'
                    }`}
                  >
                    <div className={`absolute top-0.5 w-6 h-6 rounded-full bg-white shadow-md transition-transform ${
                      ttsAutoPlay ? 'translate-x-7' : 'translate-x-0.5'
                    }`} />
                  </button>
                </div>

                {/* Language */}
                <div>
                  <label className="text-sm font-medium mb-2 block">Language</label>
                  <select
                    value={ttsLang}
                    onChange={e => { setTTSLang(e.target.value); setTtsLang(e.target.value); }}
                    className="w-full px-3 py-2 rounded-lg bg-slate-800/50 border border-slate-700/50 text-sm text-white focus:border-primary-500/50 focus:outline-none transition-colors"
                  >
                    {POPULAR_LANGUAGES.map(l => (
                      <option key={l.code} value={l.code}>{l.label}</option>
                    ))}
                  </select>
                  <p className="text-xs text-slate-500 mt-1">
                    Best voice for the language is picked automatically.
                  </p>
                </div>

                {/* Speed */}
                <div>
                  <label className="text-sm font-medium mb-2 block">
                    Speed: {ttsRate.toFixed(1)}x
                  </label>
                  <input
                    type="range"
                    min="0.5"
                    max="2.0"
                    step="0.1"
                    value={ttsRate}
                    onChange={e => { const v = parseFloat(e.target.value); setTTSRate(v); setTtsRate(v); }}
                    className="w-full accent-emerald-500"
                  />
                  <div className="flex justify-between text-xs text-slate-500">
                    <span>0.5x</span>
                    <span>1.0x</span>
                    <span>2.0x</span>
                  </div>
                </div>

                {/* Test */}
                <button
                  onClick={() => speak('This is a test of the text to speech system. Hello!')}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-emerald-500/20 text-emerald-400 hover:bg-emerald-500/30 text-sm font-medium transition-colors"
                >
                  <Play size={14} />
                  Test Voice
                </button>
              </>
            )}
          </div>
        </Section>

        {/* Daily Goal */}
        <Section title={t('settings.studyGoal')} icon={<Target size={18} />}>
          <p className="text-sm text-slate-400 mb-3">Set your daily card review goal</p>
          <div className="flex gap-2">
            {[10, 20, 30, 50, 100].map(goal => (
              <button
                key={goal}
                onClick={() => handleDailyGoal(goal)}
                className={`flex-1 py-2 rounded-lg text-sm font-medium transition-all
                  ${stats?.dailyGoal === goal
                    ? 'bg-primary-500/20 text-primary-400 ring-1 ring-primary-500/50'
                    : 'bg-slate-800/50 text-slate-400 hover:text-white'
                  }`}
              >
                {goal}
              </button>
            ))}
          </div>
        </Section>

        {/* Anki Import/Export */}
        <Section title={t('settings.anki')} icon={<FileDown size={18} />}>
          <p className="text-sm text-slate-400 mb-4">
            Import and export decks in multiple formats
          </p>

          {/* ── Import Section ── */}
          <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Import</h4>
          <div className="space-y-2 mb-5">
            {/* Anki .apkg */}
            <button
              onClick={() => ankiImportRef.current?.click()}
              disabled={importing}
              className="w-full flex items-center gap-3 px-4 py-3 rounded-xl bg-slate-800/50 hover:bg-slate-700/50 transition-colors"
            >
              <FileDown size={18} className="text-blue-400" />
              <div className="text-left flex-1">
                <p className="text-sm font-medium">Anki Deck (.apkg)</p>
                <p className="text-xs text-slate-500">Supports old &amp; new Anki formats</p>
              </div>
              {importing && <RefreshCw size={16} className="animate-spin text-slate-400" />}
            </button>

            {/* FlashMaster JSON */}
            <button
              onClick={() => deckJsonImportRef.current?.click()}
              disabled={importing}
              className="w-full flex items-center gap-3 px-4 py-3 rounded-xl bg-slate-800/50 hover:bg-slate-700/50 transition-colors"
            >
              <FileJson size={18} className="text-emerald-400" />
              <div className="text-left flex-1">
                <p className="text-sm font-medium">FlashMaster Deck (.json)</p>
                <p className="text-xs text-slate-500">Full deck with all card data &amp; settings</p>
              </div>
              {importing && <RefreshCw size={16} className="animate-spin text-slate-400" />}
            </button>

            {/* CSV Import */}
            <div>
              <button
                onClick={() => {
                  if (showCsvDeckPicker === 'csv') { setShowCsvDeckPicker(null); return; }
                  setShowCsvDeckPicker('csv');
                  if (decks && decks.length > 0 && !csvImportDeckId) setCsvImportDeckId(decks[0].id);
                }}
                className="w-full flex items-center gap-3 px-4 py-3 rounded-xl bg-slate-800/50 hover:bg-slate-700/50 transition-colors"
              >
                <Table size={18} className="text-amber-400" />
                <div className="text-left flex-1">
                  <p className="text-sm font-medium">CSV (.csv)</p>
                  <p className="text-xs text-slate-500">Comma-separated: front, back, tags</p>
                </div>
                <ChevronDown size={14} className={`text-slate-400 transition-transform ${showCsvDeckPicker === 'csv' ? 'rotate-180' : ''}`} />
              </button>
              {showCsvDeckPicker === 'csv' && (
                <div className="mt-2 p-3 rounded-xl bg-slate-800/30 border border-slate-700/30 space-y-2">
                  <label className="text-xs text-slate-400">Import into deck:</label>
                  <select
                    value={csvImportDeckId}
                    onChange={e => setCsvImportDeckId(e.target.value)}
                    className="w-full px-3 py-2 rounded-lg bg-slate-800/50 border border-slate-700/50 text-sm text-white"
                  >
                    {decks?.map(d => <option key={d.id} value={d.id}>{d.icon} {d.name}</option>)}
                  </select>
                  <button
                    onClick={() => csvImportRef.current?.click()}
                    disabled={importing || !csvImportDeckId}
                    className="w-full py-2 rounded-lg bg-amber-500/20 hover:bg-amber-500/30 text-amber-400 text-sm font-medium transition-colors"
                  >
                    {importing ? 'Importing...' : 'Choose CSV File'}
                  </button>
                </div>
              )}
            </div>

            {/* TSV Import */}
            <div>
              <button
                onClick={() => {
                  if (showCsvDeckPicker === 'tsv') { setShowCsvDeckPicker(null); return; }
                  setShowCsvDeckPicker('tsv');
                  if (decks && decks.length > 0 && !csvImportDeckId) setCsvImportDeckId(decks[0].id);
                }}
                className="w-full flex items-center gap-3 px-4 py-3 rounded-xl bg-slate-800/50 hover:bg-slate-700/50 transition-colors"
              >
                <FileText size={18} className="text-teal-400" />
                <div className="text-left flex-1">
                  <p className="text-sm font-medium">TSV (.tsv / .txt)</p>
                  <p className="text-xs text-slate-500">Tab-separated (Anki text export format)</p>
                </div>
                <ChevronDown size={14} className={`text-slate-400 transition-transform ${showCsvDeckPicker === 'tsv' ? 'rotate-180' : ''}`} />
              </button>
              {showCsvDeckPicker === 'tsv' && (
                <div className="mt-2 p-3 rounded-xl bg-slate-800/30 border border-slate-700/30 space-y-2">
                  <label className="text-xs text-slate-400">Import into deck:</label>
                  <select
                    value={csvImportDeckId}
                    onChange={e => setCsvImportDeckId(e.target.value)}
                    className="w-full px-3 py-2 rounded-lg bg-slate-800/50 border border-slate-700/50 text-sm text-white"
                  >
                    {decks?.map(d => <option key={d.id} value={d.id}>{d.icon} {d.name}</option>)}
                  </select>
                  <button
                    onClick={() => tsvImportRef.current?.click()}
                    disabled={importing || !csvImportDeckId}
                    className="w-full py-2 rounded-lg bg-teal-500/20 hover:bg-teal-500/30 text-teal-400 text-sm font-medium transition-colors"
                  >
                    {importing ? 'Importing...' : 'Choose TSV File'}
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* ── Export Section ── */}
          {decks && decks.length > 0 && (
            <>
              <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Export</h4>

              {/* Format picker */}
              <div className="flex gap-1.5 mb-3 p-1 rounded-xl bg-slate-800/30">
                {([
                  { id: 'apkg' as const, label: '.apkg', active: 'bg-blue-500/20 text-blue-400 ring-1 ring-blue-500/30' },
                  { id: 'json' as const, label: '.json', active: 'bg-emerald-500/20 text-emerald-400 ring-1 ring-emerald-500/30' },
                  { id: 'csv' as const, label: '.csv', active: 'bg-amber-500/20 text-amber-400 ring-1 ring-amber-500/30' },
                  { id: 'tsv' as const, label: '.tsv', active: 'bg-teal-500/20 text-teal-400 ring-1 ring-teal-500/30' },
                ]).map(fmt => (
                  <button
                    key={fmt.id}
                    onClick={() => setExportFormat(fmt.id)}
                    className={`flex-1 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                      exportFormat === fmt.id ? fmt.active : 'text-slate-500 hover:text-slate-300'
                    }`}
                  >
                    {fmt.label}
                  </button>
                ))}
              </div>

              <div className="space-y-2">
                {decks.map(deck => (
                  <button
                    key={deck.id}
                    onClick={() => handleExportDeck(deck.id, deck.name)}
                    className="w-full flex items-center gap-3 px-4 py-2.5 rounded-xl bg-slate-800/50 hover:bg-slate-700/50 transition-colors"
                  >
                    <span className="text-lg">{deck.icon}</span>
                    <span className="text-sm flex-1 text-left">{deck.name}</span>
                    <span className="text-[10px] text-slate-500 bg-slate-800 px-1.5 py-0.5 rounded">.{exportFormat}</span>
                    <Download size={14} className="text-slate-400" />
                  </button>
                ))}
              </div>
            </>
          )}
        </Section>

        {/* JSON Backup */}
        <Section title={t('settings.backup')} icon={<HardDrive size={18} />}>
          <p className="text-sm text-slate-400 mb-4">
            Full backup of all decks, cards, progress, and settings
          </p>

          <div className="grid grid-cols-2 gap-3">
            <button
              onClick={handleJsonExport}
              className="flex flex-col items-center gap-2 px-4 py-4 rounded-xl bg-slate-800/50 hover:bg-slate-700/50 transition-colors"
            >
              <Download size={20} className="text-emerald-400" />
              <span className="text-sm font-medium">{t('settings.downloadBackup')}</span>
            </button>
            <button
              onClick={() => jsonImportRef.current?.click()}
              className="flex flex-col items-center gap-2 px-4 py-4 rounded-xl bg-slate-800/50 hover:bg-slate-700/50 transition-colors"
            >
              <Upload size={20} className="text-blue-400" />
              <span className="text-sm font-medium">{t('settings.restoreBackup')}</span>
            </button>
          </div>
        </Section>

        {/* Cloud Sync */}
        <Section title={t('settings.cloudSync')} icon={<Cloud size={18} />}>
          <div className="flex items-start gap-2 mb-4 p-3 rounded-lg bg-blue-500/10 border border-blue-500/20">
            <Info size={16} className="text-blue-400 mt-0.5 flex-shrink-0" />
            <p className="text-xs text-blue-300">
              Sync your data through iCloud Drive, Google Drive, Dropbox, or any cloud-synced folder.
              Select a folder that is synced across your devices.
            </p>
          </div>

          {!isFSAccessSupported() ? (
            <div className="flex items-start gap-2 p-3 rounded-lg bg-amber-500/10 border border-amber-500/20">
              <AlertTriangle size={16} className="text-amber-400 mt-0.5 flex-shrink-0" />
              <p className="text-xs text-amber-300">
                File System Access API not available in this browser. Use Chrome, Edge, or Brave for folder sync.
                You can still use manual backup/restore above.
              </p>
            </div>
          ) : (
            <>
              <button
                onClick={handleSelectSync}
                className="w-full flex items-center gap-3 px-4 py-3 rounded-xl bg-slate-800/50 hover:bg-slate-700/50 transition-colors mb-3"
              >
                <FolderSync size={18} className="text-purple-400" />
                <div className="text-left flex-1">
                  <p className="text-sm font-medium">
                    {syncFolder ? `Folder: ${syncFolder}` : 'Select Sync Folder'}
                  </p>
                  <p className="text-xs text-slate-500">Choose your iCloud/Drive folder</p>
                </div>
                {syncFolder && <CheckCircle2 size={16} className="text-green-400" />}
              </button>

              {syncFolder && (
                <button
                  onClick={handleSync}
                  disabled={syncing}
                  className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-gradient-to-r from-primary-600 to-purple-600 hover:from-primary-500 hover:to-purple-500 font-medium transition-all"
                >
                  <RefreshCw size={16} className={syncing ? 'animate-spin' : ''} />
                  {syncing ? 'Syncing...' : 'Sync Now'}
                </button>
              )}
            </>
          )}
        </Section>

        {/* App Info */}
        <Section title={t('settings.about')} icon={<Smartphone size={18} />}>
          <div className="space-y-2 text-sm text-slate-400">
            <p><strong className="text-slate-300">FlashMaster</strong> v1.0.0</p>
            <p>Offline-first PWA flashcard app with spaced repetition.</p>
            <p>Built with React, TypeScript, Dexie.js, and Tailwind CSS.</p>
            <p className="text-xs text-slate-500">
              Install as PWA for the best experience: use your browser's "Add to Home Screen" or "Install App" option.
            </p>
          </div>
        </Section>

        {/* Voice Mode / OpenAI */}
        <Section title={t('settings.voiceMode')} icon={<Mic size={18} />}>
          <p className="text-xs text-slate-500 mb-4">
            Voice Mode lets you study flashcards through conversation with an AI study partner.
            Requires an OpenAI API key.
          </p>

          {/* API Key */}
          <div className="mb-4">
            <label className="text-xs text-slate-400 mb-1.5 block flex items-center gap-1.5">
              <Key size={12} />
              OpenAI API Key
            </label>
            <div className="flex gap-2">
              <div className="flex-1 relative">
                <input
                  type={showKey ? 'text' : 'password'}
                  value={openaiKey}
                  onChange={e => {
                    setOpenaiKey(e.target.value);
                    setOpenAIKey(e.target.value);
                  }}
                  placeholder="sk-..."
                  className="w-full px-3 py-2.5 rounded-xl bg-slate-800/50 border border-slate-700/50 focus:border-purple-500/50 focus:outline-none text-sm font-mono transition-colors pr-10"
                />
                <button
                  onClick={() => setShowKey(!showKey)}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-500 hover:text-white transition-colors"
                >
                  {showKey ? <EyeOff size={14} /> : <Eye size={14} />}
                </button>
              </div>
            </div>
            <p className="text-[10px] text-slate-600 mt-1.5">
              Your key is stored locally and never sent anywhere except OpenAI's API.
            </p>
          </div>

          {/* Model */}
          <div className="mb-4">
            <label className="text-xs text-slate-400 mb-1.5 block">AI Model</label>
            <select
              value={openaiModel}
              onChange={e => {
                setOpenaiModel(e.target.value);
                setOpenAIModel(e.target.value);
              }}
              className="w-full px-3 py-2.5 rounded-xl bg-slate-800/50 border border-slate-700/50 text-sm focus:border-purple-500/50 focus:outline-none transition-colors"
            >
              {OPENAI_MODELS.map(m => (
                <option key={m.id} value={m.id}>{m.label}</option>
              ))}
            </select>
          </div>

          {/* Voice */}
          <div className="mb-4">
            <label className="text-xs text-slate-400 mb-1.5 block">AI Voice</label>
            <div className="grid grid-cols-2 gap-2">
              {OPENAI_VOICES.map(v => (
                <button
                  key={v.id}
                  onClick={() => {
                    setOpenaiVoice(v.id);
                    setOpenAIVoice(v.id);
                  }}
                  className={`px-3 py-2 rounded-xl text-left transition-all text-sm ${
                    openaiVoice === v.id
                      ? 'bg-purple-500/20 text-purple-300 ring-1 ring-purple-500/40'
                      : 'bg-slate-800/50 text-slate-400 hover:text-white hover:bg-slate-700/50'
                  }`}
                >
                  <p className="font-medium text-xs">{v.label}</p>
                  <p className="text-[10px] text-slate-500">{v.desc}</p>
                </button>
              ))}
            </div>
          </div>

          {openaiKey && (
            <div className="flex items-center gap-2 p-2.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20">
              <div className="w-2 h-2 rounded-full bg-emerald-400" />
              <p className="text-xs text-emerald-400">API key configured — Voice Mode is ready!</p>
            </div>
          )}
        </Section>

        {/* Support / Donate */}
        <Section title={t('settings.support')} icon={<Heart size={18} />}>
          <p className="text-sm text-slate-400 mb-4">
            {t('settings.supportDesc')}
          </p>
          <a
            href="https://buymeacoffee.com/codingtarik?l=de"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-3 px-5 py-3.5 rounded-xl bg-[#FFDD00]/15 hover:bg-[#FFDD00]/25 text-[#FFDD00] font-bold text-sm transition-all border border-[#FFDD00]/20 hover:border-[#FFDD00]/40"
          >
            <Coffee size={18} />
            {t('settings.buyMeCoffee')}
          </a>
        </Section>

        {/* Danger Zone */}
        <Section title={t('settings.dangerZone')} icon={<AlertTriangle size={18} />} danger>
          <p className="text-sm text-slate-400 mb-4">
            Irreversible actions. Make a backup first!
          </p>
          <button
            onClick={handleReset}
            className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-red-500/10 hover:bg-red-500/20 text-red-400 font-medium transition-colors border border-red-500/20"
          >
            <Trash2 size={16} />
            {t('settings.deleteAll')}
          </button>
        </Section>
      </div>
    </div>
  );
}

function Section({ title, icon, children, danger }: {
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
  danger?: boolean;
}) {
  return (
    <div className={`glass-card rounded-2xl p-5 ${danger ? 'border-red-500/20' : ''}`}>
      <h2 className={`text-lg font-bold mb-3 flex items-center gap-2 ${danger ? 'text-red-400' : ''}`}>
        <span className={danger ? 'text-red-400' : 'text-primary-400'}>{icon}</span>
        {title}
      </h2>
      {children}
    </div>
  );
}
