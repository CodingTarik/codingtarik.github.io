import { useEffect, useState, useRef } from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import {
  LayoutDashboard,
  BookOpen,
  BarChart3,
  Settings,
  Plus,
  Trophy,
  Sun,
  Moon,
  Volume2,
  VolumeX,
  Layers,
  Library,
  Languages,
  MessageCircle,
  Film,
  Wrench,
  X,
  MoreHorizontal,
  Download,
  Mic,
} from 'lucide-react';
import { useT } from './lib/i18n';
import { seedDefaultDeck } from './lib/seed';
import { getOrCreateStats } from './lib/gamification';
import { getTheme, applyTheme, toggleTheme, type Theme } from './lib/theme';
import { isSoundEnabled, setSoundEnabled } from './lib/sounds';
import { startActivityTracking } from './lib/activityTracker';
import { useInstallPrompt } from './lib/useInstallPrompt';
import type { UserStats } from './types';

// Pages
import Dashboard from './pages/Dashboard';
import DeckView from './pages/DeckView';
import StudySession from './pages/StudySession';
import PracticeSession from './pages/PracticeSession';
import Analytics from './pages/Analytics';
import SettingsPage from './pages/SettingsPage';
import DeckEditor from './pages/DeckEditor';
import CardEditor from './pages/CardEditor';
import InterleavingSession from './pages/InterleavingSession';
import VoiceStudySession from './pages/VoiceStudySession';
import AutoGenerateCards from './pages/AutoGenerateCards';
import AIDeckGenerator from './pages/AIDeckGenerator';
import CardBrowser from './pages/CardBrowser';
import ResourceManager from './pages/ResourceManager';
import ResourceEditor from './pages/ResourceEditor';
import BookLibrary from './pages/BookLibrary';
import BookReader from './pages/BookReader';
import QuickAdd from './pages/QuickAdd';
import Translator from './pages/Translator';
import AIChat from './pages/AIChat';
import VideoPlayer from './pages/VideoPlayer';

function App() {
  const [stats, setStats] = useState<UserStats | null>(null);
  const [initialized, setInitialized] = useState(false);
  const [theme, setThemeState] = useState<Theme>('dark');
  const [soundOn, setSoundOn] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();
  const { t } = useT();
  const install = useInstallPrompt();

  useEffect(() => {
    async function init() {
      // Apply saved theme
      const t = getTheme();
      setThemeState(t);
      applyTheme(t);
      setSoundOn(isSoundEnabled());

      await seedDefaultDeck();
      const s = await getOrCreateStats();
      setStats(s);
      setInitialized(true);
      startActivityTracking();
    }
    init();
  }, []);

  const refreshStats = async () => {
    const s = await getOrCreateStats();
    setStats(s);
  };

  const handleToggleTheme = () => {
    const next = toggleTheme();
    setThemeState(next);
  };

  const handleToggleSound = () => {
    const next = !soundOn;
    setSoundEnabled(next);
    setSoundOn(next);
  };

  if (!initialized) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-primary-500 border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <p className="text-slate-400 text-lg">{t('common.loading')}</p>
        </div>
      </div>
    );
  }

  const isStudying = location.pathname.startsWith('/study') || location.pathname.startsWith('/practice') || location.pathname.startsWith('/interleave') || location.pathname.startsWith('/voice');
  const isReading = /^\/library\/[^/]+$/.test(location.pathname); // book reader is full-screen
  const isFullscreen = location.pathname === '/chat' || location.pathname === '/video'; // full-screen pages

  return (
    <div className="min-h-screen bg-slate-950 text-white flex flex-col">
      <Toaster
        position="top-center"
        toastOptions={{
          style: {
            background: theme === 'dark' ? '#1e293b' : '#ffffff',
            color: theme === 'dark' ? '#e2e8f0' : '#0f172a',
            border: `1px solid ${theme === 'dark' ? 'rgba(99, 102, 241, 0.2)' : 'rgba(99, 102, 241, 0.15)'}`,
            borderRadius: '12px',
          },
        }}
      />

      {/* Main Content */}
      <main className={`flex-1 ${(isStudying || isReading || isFullscreen) ? '' : 'pb-20 md:pb-0 md:pl-20'}`}>
        <Routes>
          <Route path="/" element={<Dashboard stats={stats} onRefresh={refreshStats} />} />
          <Route path="/deck/:id" element={<DeckView />} />
          <Route path="/deck/:id/edit" element={<DeckEditor />} />
          <Route path="/deck/:id/card/new" element={<CardEditor />} />
          <Route path="/deck/:id/card/:cardId" element={<CardEditor />} />
          <Route path="/deck/:id/generate" element={<AutoGenerateCards />} />
          <Route path="/study/interleave" element={<InterleavingSession onRefresh={refreshStats} />} />
          <Route path="/voice" element={<VoiceStudySession onRefresh={refreshStats} />} />
          <Route path="/voice/:id" element={<VoiceStudySession onRefresh={refreshStats} />} />
          <Route path="/study/:id" element={<StudySession onRefresh={refreshStats} />} />
          <Route path="/practice/:id" element={<PracticeSession />} />
          <Route path="/deck/:id/resources" element={<ResourceManager />} />
          <Route path="/deck/:id/resource/:resourceId" element={<ResourceEditor />} />
          <Route path="/cards" element={<CardBrowser />} />
          <Route path="/library" element={<BookLibrary />} />
          <Route path="/library/:bookId" element={<BookReader />} />
          <Route path="/add" element={<QuickAdd />} />
          <Route path="/translate" element={<Translator />} />
          <Route path="/chat" element={<AIChat />} />
          <Route path="/video" element={<VideoPlayer />} />
          <Route path="/analytics" element={<Analytics stats={stats} />} />
          <Route path="/settings" element={<SettingsPage onRefresh={refreshStats} />} />
          <Route path="/new-deck" element={<DeckEditor />} />
          <Route path="/generate-deck" element={<AIDeckGenerator />} />
        </Routes>
      </main>

      {/* Navigation - Desktop Sidebar */}
      {!isStudying && !isReading && !isFullscreen && (
        <DesktopSidebar
          theme={theme}
          soundOn={soundOn}
          onToggleTheme={handleToggleTheme}
          onToggleSound={handleToggleSound}
          t={t}
          install={install}
        />
      )}

      {/* Navigation - Mobile Bottom Bar */}
      {!isStudying && !isReading && !isFullscreen && (
        <MobileBottomBar t={t} install={install} />
      )}

      {/* Install App Banner (shown at the top if app is installable and not dismissed) */}
      {install.canInstall && !install.dismissed && !isStudying && !isReading && !isFullscreen && (
        <div className="fixed top-0 left-0 right-0 z-[60] md:left-20">
          <div className="bg-gradient-to-r from-primary-600 to-purple-600 px-4 py-2.5 flex items-center gap-3">
            <Download size={18} className="text-white flex-shrink-0" />
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-white truncate">{t('install.bannerTitle')}</p>
              <p className="text-[11px] text-white/70 truncate hidden sm:block">{t('install.bannerDesc')}</p>
            </div>
            <button
              onClick={install.promptInstall}
              className="px-4 py-1.5 rounded-lg bg-white/20 hover:bg-white/30 text-white text-xs font-bold transition-all flex-shrink-0 backdrop-blur-sm"
            >
              {t('install.button')}
            </button>
            <button
              onClick={install.dismiss}
              className="w-7 h-7 rounded-full flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 transition-all flex-shrink-0"
            >
              <X size={14} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

/* ── Desktop Sidebar ── */

const TOOL_ITEMS = [
  { path: '/library', icon: <Library size={18} />, label: 'Library' },
  { path: '/translate', icon: <Languages size={18} />, label: 'Translate' },
  { path: '/chat', icon: <MessageCircle size={18} />, label: 'AI Chat' },
  { path: '/voice', icon: <Mic size={18} />, label: 'Voice Mode' },
  { path: '/video', icon: <Film size={18} />, label: 'Video' },
];

function DesktopSidebar({ theme, soundOn, onToggleTheme, onToggleSound, t, install }: {
  theme: Theme;
  soundOn: boolean;
  onToggleTheme: () => void;
  onToggleSound: () => void;
  t: (key: string) => string;
  install: ReturnType<typeof useInstallPrompt>;
}) {
  const navigate = useNavigate();
  const location = useLocation();
  const [toolsOpen, setToolsOpen] = useState(false);
  const toolsRef = useRef<HTMLDivElement>(null);

  const isToolActive = TOOL_ITEMS.some(ti => location.pathname.startsWith(ti.path));

  // Close flyout on click outside
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (toolsRef.current && !toolsRef.current.contains(e.target as Node)) {
        setToolsOpen(false);
      }
    };
    if (toolsOpen) document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [toolsOpen]);

  return (
    <nav className="hidden md:flex fixed left-0 top-0 bottom-0 w-20 flex-col items-center py-6 glass z-50">
      {/* Logo */}
      <div className="mb-8">
        <button
          onClick={() => navigate('/')}
          className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-500 to-purple-500 flex items-center justify-center text-xl font-bold text-white hover:scale-110 hover:shadow-lg hover:shadow-primary-500/30 transition-all cursor-pointer"
          title={t('nav.home')}
        >
          F
        </button>
      </div>

      {/* Primary nav */}
      <div className="flex flex-col items-center gap-1.5 flex-1">
        <NavButton icon={<LayoutDashboard size={22} />} label={t('nav.home')} active={location.pathname === '/'} onClick={() => navigate('/')} />
        <NavButton icon={<Layers size={22} />} label={t('nav.cards')} active={location.pathname === '/cards'} onClick={() => navigate('/cards')} />

        {/* Tools flyout */}
        <div ref={toolsRef} className="relative">
          <button
            onClick={() => setToolsOpen(!toolsOpen)}
            className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all relative
              ${isToolActive || toolsOpen
                ? 'bg-primary-500/20 text-primary-400'
                : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
              }`}
            title="Tools"
          >
            <Wrench size={22} />
            {isToolActive && (
              <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 bg-primary-500 rounded-r-full" />
            )}
          </button>

          {/* Flyout */}
          {toolsOpen && (
            <div className="absolute left-full top-0 ml-2 w-48 bg-slate-900 border border-slate-700/50 rounded-xl shadow-2xl py-2 z-50 animate-in fade-in slide-in-from-left-2 duration-150">
              <p className="px-3 py-1 text-[10px] font-semibold text-slate-500 uppercase tracking-wider">Tools</p>
              {TOOL_ITEMS.map(item => (
                <button
                  key={item.path}
                  onClick={() => { navigate(item.path); setToolsOpen(false); }}
                  className={`w-full flex items-center gap-3 px-3 py-2.5 text-sm transition-colors ${
                    location.pathname.startsWith(item.path)
                      ? 'text-primary-400 bg-primary-500/10'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
                  }`}
                >
                  {item.icon}
                  <span className="font-medium">{item.label}</span>
                </button>
              ))}
              <div className="mx-3 my-1.5 h-px bg-slate-700/50" />
              <a
                href="https://codingtarik.github.io/#/blog"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setToolsOpen(false)}
                className="w-full flex items-center gap-3 px-3 py-2.5 text-sm text-slate-300 hover:text-white hover:bg-slate-800/50 transition-colors"
              >
                <BookOpen size={18} />
                <span className="font-medium">Blog</span>
              </a>
            </div>
          )}
        </div>

        <NavButton icon={<Trophy size={22} />} label={t('nav.stats')} active={location.pathname === '/analytics'} onClick={() => navigate('/analytics')} />
        <NavButton icon={<Settings size={22} />} label={t('nav.settings')} active={location.pathname === '/settings'} onClick={() => navigate('/settings')} />
      </div>

      {/* Bottom controls */}
      <div className="flex flex-col items-center gap-2 mb-4">
        {install.canInstall && (
          <button
            onClick={install.promptInstall}
            className="w-10 h-10 rounded-xl bg-primary-500/20 flex items-center justify-center text-primary-400 hover:text-white hover:bg-primary-500/30 transition-all animate-pulse hover:animate-none"
            title={t('install.button')}
          >
            <Download size={18} />
          </button>
        )}
        <button
          onClick={onToggleTheme}
          className="w-10 h-10 rounded-xl bg-slate-800/50 flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-700/50 transition-all"
          title={theme === 'dark' ? t('theme.light') : t('theme.dark')}
        >
          {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
        </button>
        <button
          onClick={onToggleSound}
          className="w-10 h-10 rounded-xl bg-slate-800/50 flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-700/50 transition-all"
          title={soundOn ? t('sound.mute') : t('sound.enable')}
        >
          {soundOn ? <Volume2 size={18} /> : <VolumeX size={18} />}
        </button>
      </div>

      <button
        onClick={() => navigate('/new-deck')}
        className="w-12 h-12 rounded-xl bg-gradient-to-r from-primary-500 to-purple-500 flex items-center justify-center hover:scale-110 transition-transform shadow-lg text-white"
      >
        <Plus size={24} />
      </button>
    </nav>
  );
}

/* ── Mobile Bottom Bar ── */

function MobileBottomBar({ t, install }: { t: (key: string) => string; install: ReturnType<typeof useInstallPrompt> }) {
  const navigate = useNavigate();
  const location = useLocation();
  const [moreOpen, setMoreOpen] = useState(false);

  const isToolActive = TOOL_ITEMS.some(ti => location.pathname.startsWith(ti.path));

  return (
    <>
      {/* More menu overlay */}
      {moreOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
          onClick={() => setMoreOpen(false)}
        />
      )}

      {/* More menu popup */}
      {moreOpen && (
        <div className="md:hidden fixed bottom-20 left-4 right-4 bg-slate-900 border border-slate-700/50 rounded-2xl shadow-2xl z-50 p-3 safe-bottom">
          <div className="flex items-center justify-between mb-2 px-1">
            <p className="text-xs font-bold text-slate-400">Tools</p>
            <button onClick={() => setMoreOpen(false)} className="text-slate-500 hover:text-white">
              <X size={16} />
            </button>
          </div>
          <div className="grid grid-cols-4 gap-2">
            {TOOL_ITEMS.map(item => (
              <button
                key={item.path}
                onClick={() => { navigate(item.path); setMoreOpen(false); }}
                className={`flex flex-col items-center gap-1.5 py-3 rounded-xl transition-all ${
                  location.pathname.startsWith(item.path)
                    ? 'bg-primary-500/15 text-primary-400'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
                }`}
              >
                {item.icon}
                <span className="text-[10px] font-medium">{item.label}</span>
              </button>
            ))}
          </div>
          {install.canInstall && (
            <button
              onClick={() => { install.promptInstall(); setMoreOpen(false); }}
              className="mt-2 w-full flex items-center gap-3 px-4 py-3 rounded-xl bg-gradient-to-r from-primary-500/20 to-purple-500/20 border border-primary-500/30 text-primary-400 transition-all"
            >
              <Download size={18} />
              <div className="text-left">
                <p className="text-sm font-semibold">{t('install.button')}</p>
                <p className="text-[10px] text-slate-400">{t('install.bannerDesc')}</p>
              </div>
            </button>
          )}
        </div>
      )}

      <nav className="md:hidden fixed bottom-0 left-0 right-0 glass safe-bottom z-50">
        <div className="flex items-center justify-around px-2 py-2">
          <MobileNavButton
            icon={<LayoutDashboard size={20} />}
            label={t('nav.home')}
            active={location.pathname === '/'}
            onClick={() => navigate('/')}
          />
          <MobileNavButton
            icon={<Layers size={20} />}
            label={t('nav.cards')}
            active={location.pathname === '/cards'}
            onClick={() => navigate('/cards')}
          />
          <button
            onClick={() => navigate('/new-deck')}
            className="w-12 h-12 -mt-4 rounded-full bg-gradient-to-r from-primary-500 to-purple-500 flex items-center justify-center shadow-lg glow-md text-white"
          >
            <Plus size={24} />
          </button>
          <MobileNavButton
            icon={<Wrench size={20} />}
            label="Tools"
            active={isToolActive || moreOpen}
            onClick={() => setMoreOpen(!moreOpen)}
          />
          <MobileNavButton
            icon={<Settings size={20} />}
            label={t('nav.settings')}
            active={location.pathname === '/settings'}
            onClick={() => navigate('/settings')}
          />
        </div>
      </nav>
    </>
  );
}

/* ── Shared nav button components ── */

function NavButton({ icon, label, active, onClick }: {
  icon: React.ReactNode;
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all group relative
        ${active
          ? 'bg-primary-500/20 text-primary-400'
          : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
        }`}
      title={label}
    >
      {icon}
      {active && (
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 bg-primary-500 rounded-r-full" />
      )}
    </button>
  );
}

function MobileNavButton({ icon, label, active, onClick }: {
  icon: React.ReactNode;
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`flex flex-col items-center gap-0.5 px-3 py-1.5 rounded-xl transition-all
        ${active ? 'text-primary-400' : 'text-slate-400'}`}
    >
      {icon}
      <span className="text-[10px] font-medium">{label}</span>
    </button>
  );
}

export default App;
