import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowLeft, Plus, Search, Copy, Check, Trash2, Edit3, Tag, Star, StarOff,
  Download, Upload, Filter, X, ChevronDown, Folder, Clock, Sparkles, Code,
  FileText, Palette, MessageSquare, Briefcase, Zap, BookOpen, Hash, Eye,
  MoreVertical, Archive, RotateCcw
} from 'lucide-react';
import { navigate } from '../../utils/navigation';

// ── Default Categories ──
const DEFAULT_CATEGORIES = [
  { id: 'coding', name: 'Coding', icon: 'Code', color: 'bg-blue-500' },
  { id: 'writing', name: 'Writing', icon: 'FileText', color: 'bg-emerald-500' },
  { id: 'creative', name: 'Creative', icon: 'Palette', color: 'bg-purple-500' },
  { id: 'business', name: 'Business', icon: 'Briefcase', color: 'bg-amber-500' },
  { id: 'analysis', name: 'Analysis', icon: 'Zap', color: 'bg-rose-500' },
  { id: 'learning', name: 'Learning', icon: 'BookOpen', color: 'bg-cyan-500' },
  { id: 'chat', name: 'Chat', icon: 'MessageSquare', color: 'bg-indigo-500' },
  { id: 'other', name: 'Other', icon: 'Folder', color: 'bg-stone-500' }
];

const ICON_MAP = { Code, FileText, Palette, Briefcase, Zap, BookOpen, MessageSquare, Folder };

// ── Sample Prompts ──
const SAMPLE_PROMPTS = [
  {
    id: 'sample-1',
    title: 'Code Review Expert',
    description: 'Thorough code reviewer that catches bugs, suggests improvements and follows best practices.',
    content: `You are an expert code reviewer. Analyze the following {{language}} code and provide:

1. **Bugs & Issues**: Any bugs, potential runtime errors, or logic flaws
2. **Performance**: Opportunities for optimization
3. **Readability**: Suggestions for clearer naming, structure, or comments
4. **Best Practices**: Violations of {{language}} conventions or design patterns
5. **Security**: Any security vulnerabilities

Code to review:
\`\`\`{{language}}
{{code}}
\`\`\`

Be specific with line references and provide corrected code snippets.`,
    category: 'coding',
    tags: ['code-review', 'best-practices', 'debugging'],
    variables: ['language', 'code'],
    isFavorite: true,
    usageCount: 0,
    createdAt: Date.now() - 86400000 * 5,
    updatedAt: Date.now() - 86400000 * 5
  },
  {
    id: 'sample-2',
    title: 'Blog Post Writer',
    description: 'Creates engaging, SEO-optimized blog posts on any topic.',
    content: `Write a comprehensive blog post about "{{topic}}".

Target audience: {{audience}}
Tone: {{tone}}
Word count: approximately {{wordCount}} words

Structure:
- Catchy title with SEO keywords
- Hook introduction that draws readers in
- 3-5 main sections with H2 headers
- Practical examples or tips in each section
- Conclusion with a call to action

Include relevant statistics or data points where appropriate. Use short paragraphs and bullet points for readability.`,
    category: 'writing',
    tags: ['blog', 'seo', 'content'],
    variables: ['topic', 'audience', 'tone', 'wordCount'],
    isFavorite: false,
    usageCount: 0,
    createdAt: Date.now() - 86400000 * 3,
    updatedAt: Date.now() - 86400000 * 3
  },
  {
    id: 'sample-3',
    title: 'Explain Like I\'m 5',
    description: 'Simplifies complex concepts into easy-to-understand explanations.',
    content: `Explain {{concept}} in simple terms that a 5-year-old could understand.

Rules:
- Use everyday analogies and comparisons
- Avoid jargon or technical terms
- Use short sentences
- Include a fun metaphor or story
- End with a simple summary

Make it engaging and fun!`,
    category: 'learning',
    tags: ['explain', 'simple', 'education'],
    variables: ['concept'],
    isFavorite: true,
    usageCount: 0,
    createdAt: Date.now() - 86400000,
    updatedAt: Date.now() - 86400000
  }
];

// ── Utility: extract {{variables}} from prompt content ──
function extractVariables(content) {
  const matches = content.match(/\{\{(\w+)\}\}/g);
  if (!matches) return [];
  return [...new Set(matches.map(m => m.replace(/\{\{|\}\}/g, '')))];
}

// ── Storage helpers ──
const STORAGE_KEY = 'prompt-library-data';

function loadData() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const data = JSON.parse(raw);
      return {
        prompts: data.prompts || [],
        categories: data.categories || DEFAULT_CATEGORIES
      };
    }
  } catch { /* ignore */ }
  return { prompts: SAMPLE_PROMPTS, categories: DEFAULT_CATEGORIES };
}

function saveData(data) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

// ════════════════════════════════════════
// PromptLibrary Main Component
// ════════════════════════════════════════
export default function PromptLibrary() {
  const [prompts, setPrompts] = useState([]);
  const [categories, setCategories] = useState(DEFAULT_CATEGORIES);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [showFavoritesOnly, setShowFavoritesOnly] = useState(false);
  const [sortBy, setSortBy] = useState('newest'); // newest, oldest, alpha, usage
  const [editingPrompt, setEditingPrompt] = useState(null);
  const [showEditor, setShowEditor] = useState(false);
  const [previewPrompt, setPreviewPrompt] = useState(null);
  const [variableValues, setVariableValues] = useState({});
  const [copiedId, setCopiedId] = useState(null);
  const [showImportExport, setShowImportExport] = useState(false);
  const [showFilterMenu, setShowFilterMenu] = useState(false);
  const fileInputRef = useRef(null);

  // Load on mount
  useEffect(() => {
    const data = loadData();
    setPrompts(data.prompts);
    setCategories(data.categories);
  }, []);

  // Auto-save
  useEffect(() => {
    if (prompts.length > 0 || localStorage.getItem(STORAGE_KEY)) {
      saveData({ prompts, categories });
    }
  }, [prompts, categories]);

  // ── Prompt CRUD ──
  const handleSavePrompt = (prompt) => {
    const vars = extractVariables(prompt.content);
    const now = Date.now();

    if (prompt.id && prompts.find(p => p.id === prompt.id)) {
      setPrompts(prev => prev.map(p => p.id === prompt.id ? { ...prompt, variables: vars, updatedAt: now } : p));
    } else {
      const newPrompt = {
        ...prompt,
        id: `prompt-${now}-${Math.random().toString(36).slice(2, 8)}`,
        variables: vars,
        isFavorite: false,
        usageCount: 0,
        createdAt: now,
        updatedAt: now
      };
      setPrompts(prev => [newPrompt, ...prev]);
    }
    setShowEditor(false);
    setEditingPrompt(null);
  };

  const handleDeletePrompt = (id) => {
    setPrompts(prev => prev.filter(p => p.id !== id));
    if (previewPrompt?.id === id) setPreviewPrompt(null);
  };

  const handleToggleFavorite = (id) => {
    setPrompts(prev => prev.map(p => p.id === id ? { ...p, isFavorite: !p.isFavorite } : p));
  };

  const handleDuplicate = (prompt) => {
    const now = Date.now();
    const dup = {
      ...prompt,
      id: `prompt-${now}-${Math.random().toString(36).slice(2, 8)}`,
      title: `${prompt.title} (Copy)`,
      isFavorite: false,
      usageCount: 0,
      createdAt: now,
      updatedAt: now
    };
    setPrompts(prev => [dup, ...prev]);
  };

  // ── Copy with variable replacement ──
  const handleCopy = (prompt) => {
    let content = prompt.content;
    const vars = extractVariables(content);
    vars.forEach(v => {
      const val = variableValues[`${prompt.id}-${v}`] || `{{${v}}}`;
      content = content.replace(new RegExp(`\\{\\{${v}\\}\\}`, 'g'), val);
    });
    navigator.clipboard.writeText(content);
    setCopiedId(prompt.id);
    setPrompts(prev => prev.map(p => p.id === prompt.id ? { ...p, usageCount: (p.usageCount || 0) + 1 } : p));
    setTimeout(() => setCopiedId(null), 2000);
  };

  // ── Import / Export ──
  const handleExport = () => {
    const data = JSON.stringify({ prompts, categories, exportedAt: new Date().toISOString() }, null, 2);
    const blob = new Blob([data], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `prompt-library-${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleImport = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => {
      try {
        const data = JSON.parse(ev.target.result);
        if (data.prompts && Array.isArray(data.prompts)) {
          const existingIds = new Set(prompts.map(p => p.id));
          const newPrompts = data.prompts.filter(p => !existingIds.has(p.id));
          setPrompts(prev => [...newPrompts, ...prev]);
        }
        if (data.categories && Array.isArray(data.categories)) {
          const existingCatIds = new Set(categories.map(c => c.id));
          const newCats = data.categories.filter(c => !existingCatIds.has(c.id));
          setCategories(prev => [...prev, ...newCats]);
        }
      } catch {
        alert('Invalid JSON file');
      }
    };
    reader.readAsText(file);
    e.target.value = '';
  };

  // ── Filtering & Sorting ──
  const filtered = prompts
    .filter(p => {
      if (showFavoritesOnly && !p.isFavorite) return false;
      if (selectedCategory !== 'all' && p.category !== selectedCategory) return false;
      if (searchQuery) {
        const q = searchQuery.toLowerCase();
        return (
          p.title.toLowerCase().includes(q) ||
          p.description?.toLowerCase().includes(q) ||
          p.content.toLowerCase().includes(q) ||
          p.tags?.some(t => t.toLowerCase().includes(q))
        );
      }
      return true;
    })
    .sort((a, b) => {
      if (sortBy === 'newest') return b.createdAt - a.createdAt;
      if (sortBy === 'oldest') return a.createdAt - b.createdAt;
      if (sortBy === 'alpha') return a.title.localeCompare(b.title);
      if (sortBy === 'usage') return (b.usageCount || 0) - (a.usageCount || 0);
      return 0;
    });

  // ── Category stats ──
  const categoryStats = categories.map(c => ({
    ...c,
    count: prompts.filter(p => p.category === c.id).length
  }));

  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-50 via-white to-stone-100 dark:from-stone-950 dark:via-stone-900 dark:to-stone-950">
      {/* ═══ Header ═══ */}
      <header className="sticky top-0 z-40 bg-white/80 dark:bg-stone-900/80 backdrop-blur-xl border-b border-stone-200 dark:border-stone-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <button
              onClick={() => navigate('/tools')}
              className="p-2 rounded-xl hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors"
            >
              <ArrowLeft size={20} className="text-stone-600 dark:text-stone-400" />
            </button>
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center">
                <Sparkles size={18} className="text-white" />
              </div>
              <div>
                <h1 className="text-lg font-bold text-stone-900 dark:text-stone-100 leading-tight">Prompt Library</h1>
                <p className="text-xs text-stone-500 dark:text-stone-400 hidden sm:block">{prompts.length} prompts saved</p>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setShowImportExport(!showImportExport)}
              className="p-2 rounded-xl hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors text-stone-600 dark:text-stone-400"
              title="Import / Export"
            >
              <Archive size={18} />
            </button>
            <button
              onClick={() => { setEditingPrompt(null); setShowEditor(true); }}
              className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-violet-500 to-purple-600 text-white rounded-xl font-medium text-sm hover:shadow-lg hover:shadow-violet-500/25 transition-all"
            >
              <Plus size={16} />
              <span className="hidden sm:inline">New Prompt</span>
            </button>
          </div>
        </div>

        {/* Import/Export dropdown */}
        <AnimatePresence>
          {showImportExport && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="border-t border-stone-200 dark:border-stone-700 overflow-hidden"
            >
              <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex gap-3">
                <button onClick={handleExport} className="flex items-center gap-2 px-4 py-2 bg-stone-100 dark:bg-stone-800 rounded-lg text-sm font-medium text-stone-700 dark:text-stone-300 hover:bg-stone-200 dark:hover:bg-stone-700 transition-colors">
                  <Download size={16} /> Export All ({prompts.length})
                </button>
                <button onClick={() => fileInputRef.current?.click()} className="flex items-center gap-2 px-4 py-2 bg-stone-100 dark:bg-stone-800 rounded-lg text-sm font-medium text-stone-700 dark:text-stone-300 hover:bg-stone-200 dark:hover:bg-stone-700 transition-colors">
                  <Upload size={16} /> Import
                </button>
                <input ref={fileInputRef} type="file" accept=".json" onChange={handleImport} className="hidden" />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
        {/* ═══ Search & Filters ═══ */}
        <div className="flex flex-col sm:flex-row gap-3 mb-6">
          <div className="relative flex-1">
            <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              placeholder="Search prompts, tags, content..."
              className="w-full pl-10 pr-4 py-2.5 bg-white dark:bg-stone-800 border border-stone-200 dark:border-stone-700 rounded-xl text-sm text-stone-900 dark:text-stone-100 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-violet-500/50 focus:border-violet-500"
            />
            {searchQuery && (
              <button onClick={() => setSearchQuery('')} className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-600">
                <X size={16} />
              </button>
            )}
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => setShowFavoritesOnly(!showFavoritesOnly)}
              className={`flex items-center gap-1.5 px-3 py-2.5 rounded-xl text-sm font-medium border transition-colors ${showFavoritesOnly ? 'bg-amber-50 dark:bg-amber-900/30 border-amber-300 dark:border-amber-700 text-amber-700 dark:text-amber-300' : 'bg-white dark:bg-stone-800 border-stone-200 dark:border-stone-700 text-stone-600 dark:text-stone-400 hover:bg-stone-50 dark:hover:bg-stone-700'}`}
            >
              <Star size={16} className={showFavoritesOnly ? 'fill-amber-400' : ''} />
              <span className="hidden sm:inline">Favorites</span>
            </button>

            <div className="relative">
              <button
                onClick={() => setShowFilterMenu(!showFilterMenu)}
                className="flex items-center gap-1.5 px-3 py-2.5 bg-white dark:bg-stone-800 border border-stone-200 dark:border-stone-700 rounded-xl text-sm font-medium text-stone-600 dark:text-stone-400 hover:bg-stone-50 dark:hover:bg-stone-700 transition-colors"
              >
                <Filter size={16} />
                <span className="hidden sm:inline">Sort</span>
                <ChevronDown size={14} />
              </button>
              <AnimatePresence>
                {showFilterMenu && (
                  <motion.div
                    initial={{ opacity: 0, y: -4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -4 }}
                    className="absolute right-0 top-full mt-1 w-44 bg-white dark:bg-stone-800 border border-stone-200 dark:border-stone-700 rounded-xl shadow-xl z-50 overflow-hidden"
                  >
                    {[
                      { val: 'newest', label: 'Newest first' },
                      { val: 'oldest', label: 'Oldest first' },
                      { val: 'alpha', label: 'A → Z' },
                      { val: 'usage', label: 'Most used' }
                    ].map(opt => (
                      <button
                        key={opt.val}
                        onClick={() => { setSortBy(opt.val); setShowFilterMenu(false); }}
                        className={`w-full text-left px-4 py-2.5 text-sm transition-colors ${sortBy === opt.val ? 'bg-violet-50 dark:bg-violet-900/30 text-violet-700 dark:text-violet-300 font-medium' : 'text-stone-700 dark:text-stone-300 hover:bg-stone-50 dark:hover:bg-stone-700'}`}
                      >
                        {opt.label}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* ═══ Category Tabs ═══ */}
        <div className="flex gap-2 overflow-x-auto pb-2 mb-6 scrollbar-none">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`flex-shrink-0 px-4 py-2 rounded-xl text-sm font-medium transition-colors ${selectedCategory === 'all' ? 'bg-violet-100 dark:bg-violet-900/40 text-violet-700 dark:text-violet-300 border border-violet-300 dark:border-violet-700' : 'bg-white dark:bg-stone-800 border border-stone-200 dark:border-stone-700 text-stone-600 dark:text-stone-400 hover:bg-stone-50 dark:hover:bg-stone-700'}`}
          >
            All ({prompts.length})
          </button>
          {categoryStats.map(cat => {
            const CatIcon = ICON_MAP[cat.icon] || Folder;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`flex-shrink-0 flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-medium transition-colors ${selectedCategory === cat.id ? 'bg-violet-100 dark:bg-violet-900/40 text-violet-700 dark:text-violet-300 border border-violet-300 dark:border-violet-700' : 'bg-white dark:bg-stone-800 border border-stone-200 dark:border-stone-700 text-stone-600 dark:text-stone-400 hover:bg-stone-50 dark:hover:bg-stone-700'}`}
              >
                <CatIcon size={14} />
                {cat.name} ({cat.count})
              </button>
            );
          })}
        </div>

        {/* ═══ Prompt Grid ═══ */}
        {filtered.length === 0 ? (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-20">
            <div className="w-20 h-20 mx-auto mb-4 rounded-2xl bg-stone-100 dark:bg-stone-800 flex items-center justify-center">
              <Sparkles size={32} className="text-stone-400" />
            </div>
            <h3 className="text-lg font-bold text-stone-800 dark:text-stone-200 mb-2">
              {searchQuery ? 'No prompts found' : 'Your library is empty'}
            </h3>
            <p className="text-stone-500 dark:text-stone-400 mb-6 max-w-md mx-auto">
              {searchQuery ? 'Try a different search term or category.' : 'Start by creating your first prompt or import an existing collection.'}
            </p>
            {!searchQuery && (
              <button
                onClick={() => { setEditingPrompt(null); setShowEditor(true); }}
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-violet-500 to-purple-600 text-white rounded-xl font-medium hover:shadow-lg hover:shadow-violet-500/25 transition-all"
              >
                <Plus size={18} /> Create First Prompt
              </button>
            )}
          </motion.div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <AnimatePresence mode="popLayout">
              {filtered.map((prompt, i) => (
                <PromptCard
                  key={prompt.id}
                  prompt={prompt}
                  index={i}
                  categories={categories}
                  copiedId={copiedId}
                  variableValues={variableValues}
                  setVariableValues={setVariableValues}
                  onCopy={() => handleCopy(prompt)}
                  onEdit={() => { setEditingPrompt(prompt); setShowEditor(true); }}
                  onDelete={() => handleDeletePrompt(prompt.id)}
                  onToggleFavorite={() => handleToggleFavorite(prompt.id)}
                  onDuplicate={() => handleDuplicate(prompt)}
                  onPreview={() => setPreviewPrompt(prompt)}
                />
              ))}
            </AnimatePresence>
          </div>
        )}
      </div>

      {/* ═══ Editor Modal ═══ */}
      <AnimatePresence>
        {showEditor && (
          <PromptEditor
            prompt={editingPrompt}
            categories={categories}
            onSave={handleSavePrompt}
            onClose={() => { setShowEditor(false); setEditingPrompt(null); }}
          />
        )}
      </AnimatePresence>

      {/* ═══ Preview Modal ═══ */}
      <AnimatePresence>
        {previewPrompt && (
          <PromptPreview
            prompt={previewPrompt}
            categories={categories}
            variableValues={variableValues}
            setVariableValues={setVariableValues}
            onCopy={() => handleCopy(previewPrompt)}
            copiedId={copiedId}
            onClose={() => setPreviewPrompt(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

// ════════════════════════════════════════
// PromptCard Component
// ════════════════════════════════════════
function PromptCard({ prompt, index, categories, copiedId, variableValues, setVariableValues, onCopy, onEdit, onDelete, onToggleFavorite, onDuplicate, onPreview }) {
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef(null);
  const cat = categories.find(c => c.id === prompt.category);
  const CatIcon = cat ? (ICON_MAP[cat.icon] || Folder) : Folder;

  useEffect(() => {
    const handler = (e) => { if (menuRef.current && !menuRef.current.contains(e.target)) setShowMenu(false); };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ delay: index * 0.03 }}
      className="group relative bg-white dark:bg-stone-800 border border-stone-200 dark:border-stone-700 rounded-2xl p-5 hover:shadow-lg hover:border-violet-300 dark:hover:border-violet-700 transition-all"
    >
      {/* Top row */}
      <div className="flex items-start justify-between gap-2 mb-3">
        <div className="flex items-center gap-2 min-w-0">
          <div className={`w-8 h-8 flex-shrink-0 rounded-lg ${cat?.color || 'bg-stone-500'} flex items-center justify-center`}>
            <CatIcon size={14} className="text-white" />
          </div>
          <h3 className="font-bold text-stone-900 dark:text-stone-100 text-sm truncate">{prompt.title}</h3>
        </div>
        <div className="flex items-center gap-1 flex-shrink-0">
          <button onClick={onToggleFavorite} className="p-1 rounded-lg hover:bg-stone-100 dark:hover:bg-stone-700 transition-colors">
            {prompt.isFavorite
              ? <Star size={16} className="text-amber-400 fill-amber-400" />
              : <StarOff size={16} className="text-stone-400" />
            }
          </button>
          <div className="relative" ref={menuRef}>
            <button onClick={() => setShowMenu(!showMenu)} className="p-1 rounded-lg hover:bg-stone-100 dark:hover:bg-stone-700 transition-colors">
              <MoreVertical size={16} className="text-stone-400" />
            </button>
            {showMenu && (
              <div className="absolute right-0 top-full mt-1 w-40 bg-white dark:bg-stone-800 border border-stone-200 dark:border-stone-700 rounded-xl shadow-xl z-30 overflow-hidden">
                <button onClick={() => { onEdit(); setShowMenu(false); }} className="w-full flex items-center gap-2 px-3 py-2 text-sm text-stone-700 dark:text-stone-300 hover:bg-stone-50 dark:hover:bg-stone-700">
                  <Edit3 size={14} /> Edit
                </button>
                <button onClick={() => { onDuplicate(); setShowMenu(false); }} className="w-full flex items-center gap-2 px-3 py-2 text-sm text-stone-700 dark:text-stone-300 hover:bg-stone-50 dark:hover:bg-stone-700">
                  <Copy size={14} /> Duplicate
                </button>
                <button onClick={() => { onDelete(); setShowMenu(false); }} className="w-full flex items-center gap-2 px-3 py-2 text-sm text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20">
                  <Trash2 size={14} /> Delete
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Description */}
      {prompt.description && (
        <p className="text-xs text-stone-500 dark:text-stone-400 mb-3 line-clamp-2">{prompt.description}</p>
      )}

      {/* Content Preview */}
      <div
        onClick={onPreview}
        className="bg-stone-50 dark:bg-stone-900 rounded-lg p-3 mb-3 cursor-pointer hover:bg-stone-100 dark:hover:bg-stone-800/80 transition-colors"
      >
        <pre className="text-xs text-stone-600 dark:text-stone-400 font-mono whitespace-pre-wrap line-clamp-4 leading-relaxed">
          {prompt.content.slice(0, 200)}{prompt.content.length > 200 ? '...' : ''}
        </pre>
      </div>

      {/* Variables */}
      {prompt.variables?.length > 0 && (
        <div className="flex flex-wrap gap-1.5 mb-3">
          {prompt.variables.map(v => (
            <span key={v} className="inline-flex items-center gap-1 px-2 py-0.5 bg-violet-50 dark:bg-violet-900/30 text-violet-600 dark:text-violet-400 rounded-md text-xs font-mono">
              <Hash size={10} />{v}
            </span>
          ))}
        </div>
      )}

      {/* Tags */}
      {prompt.tags?.length > 0 && (
        <div className="flex flex-wrap gap-1.5 mb-3">
          {prompt.tags.map(tag => (
            <span key={tag} className="px-2 py-0.5 bg-stone-100 dark:bg-stone-700 text-stone-600 dark:text-stone-400 rounded-md text-xs">
              {tag}
            </span>
          ))}
        </div>
      )}

      {/* Bottom */}
      <div className="flex items-center justify-between pt-2 border-t border-stone-100 dark:border-stone-700">
        <div className="flex items-center gap-3 text-xs text-stone-400">
          <span className="flex items-center gap-1"><Clock size={12} /> {new Date(prompt.updatedAt).toLocaleDateString()}</span>
          {prompt.usageCount > 0 && <span className="flex items-center gap-1"><Copy size={12} /> {prompt.usageCount}x</span>}
        </div>
        <button
          onClick={onCopy}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${copiedId === prompt.id ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300' : 'bg-violet-50 dark:bg-violet-900/30 text-violet-600 dark:text-violet-400 hover:bg-violet-100 dark:hover:bg-violet-900/50'}`}
        >
          {copiedId === prompt.id ? <><Check size={14} /> Copied</> : <><Copy size={14} /> Copy</>}
        </button>
      </div>
    </motion.div>
  );
}

// ════════════════════════════════════════
// PromptEditor Modal
// ════════════════════════════════════════
function PromptEditor({ prompt, categories, onSave, onClose }) {
  const [title, setTitle] = useState(prompt?.title || '');
  const [description, setDescription] = useState(prompt?.description || '');
  const [content, setContent] = useState(prompt?.content || '');
  const [category, setCategory] = useState(prompt?.category || 'coding');
  const [tagsStr, setTagsStr] = useState(prompt?.tags?.join(', ') || '');

  const detectedVars = extractVariables(content);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !content.trim()) return;
    onSave({
      ...(prompt || {}),
      title: title.trim(),
      description: description.trim(),
      content: content.trim(),
      category,
      tags: tagsStr.split(',').map(t => t.trim()).filter(Boolean)
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        onClick={e => e.stopPropagation()}
        className="w-full max-w-2xl max-h-[90vh] bg-white dark:bg-stone-900 rounded-2xl shadow-2xl overflow-hidden flex flex-col"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-stone-200 dark:border-stone-700">
          <h2 className="text-lg font-bold text-stone-900 dark:text-stone-100">
            {prompt ? 'Edit Prompt' : 'New Prompt'}
          </h2>
          <button onClick={onClose} className="p-2 rounded-xl hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors">
            <X size={20} className="text-stone-500" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="flex-1 overflow-y-auto p-6 space-y-4">
          {/* Title */}
          <div>
            <label className="block text-sm font-medium text-stone-700 dark:text-stone-300 mb-1">Title *</label>
            <input
              type="text"
              value={title}
              onChange={e => setTitle(e.target.value)}
              placeholder="e.g. Code Review Expert"
              className="w-full px-4 py-2.5 bg-stone-50 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 rounded-xl text-sm text-stone-900 dark:text-stone-100 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-violet-500/50"
              required
            />
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-medium text-stone-700 dark:text-stone-300 mb-1">Description</label>
            <input
              type="text"
              value={description}
              onChange={e => setDescription(e.target.value)}
              placeholder="Short description of what this prompt does"
              className="w-full px-4 py-2.5 bg-stone-50 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 rounded-xl text-sm text-stone-900 dark:text-stone-100 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-violet-500/50"
            />
          </div>

          {/* Category + Tags */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-stone-700 dark:text-stone-300 mb-1">Category</label>
              <select
                value={category}
                onChange={e => setCategory(e.target.value)}
                className="w-full px-4 py-2.5 bg-stone-50 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 rounded-xl text-sm text-stone-900 dark:text-stone-100 focus:outline-none focus:ring-2 focus:ring-violet-500/50"
              >
                {categories.map(c => <option key={c.id} value={c.id}>{c.name}</option>)}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-stone-700 dark:text-stone-300 mb-1">Tags (comma-separated)</label>
              <input
                type="text"
                value={tagsStr}
                onChange={e => setTagsStr(e.target.value)}
                placeholder="react, hooks, performance"
                className="w-full px-4 py-2.5 bg-stone-50 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 rounded-xl text-sm text-stone-900 dark:text-stone-100 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-violet-500/50"
              />
            </div>
          </div>

          {/* Prompt Content */}
          <div>
            <div className="flex items-center justify-between mb-1">
              <label className="text-sm font-medium text-stone-700 dark:text-stone-300">Prompt Content *</label>
              <span className="text-xs text-stone-400">Use {'{{variable}}'} for placeholders</span>
            </div>
            <textarea
              value={content}
              onChange={e => setContent(e.target.value)}
              placeholder={`You are an expert at {{task}}...\n\nGiven the following {{input_type}}:\n{{input}}\n\nPlease provide...`}
              rows={12}
              className="w-full px-4 py-3 bg-stone-50 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 rounded-xl text-sm font-mono text-stone-900 dark:text-stone-100 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-violet-500/50 resize-y leading-relaxed"
              required
            />
          </div>

          {/* Detected Variables */}
          {detectedVars.length > 0 && (
            <div className="bg-violet-50 dark:bg-violet-900/20 border border-violet-200 dark:border-violet-800 rounded-xl p-3">
              <p className="text-xs font-medium text-violet-700 dark:text-violet-300 mb-2">Detected Variables:</p>
              <div className="flex flex-wrap gap-1.5">
                {detectedVars.map(v => (
                  <span key={v} className="inline-flex items-center gap-1 px-2 py-0.5 bg-white dark:bg-violet-900/40 text-violet-600 dark:text-violet-400 rounded-md text-xs font-mono">
                    <Hash size={10} />{v}
                  </span>
                ))}
              </div>
            </div>
          )}
        </form>

        {/* Footer */}
        <div className="flex items-center justify-end gap-3 px-6 py-4 border-t border-stone-200 dark:border-stone-700">
          <button onClick={onClose} className="px-4 py-2 text-sm font-medium text-stone-600 dark:text-stone-400 hover:bg-stone-100 dark:hover:bg-stone-800 rounded-xl transition-colors">
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            disabled={!title.trim() || !content.trim()}
            className="px-6 py-2 bg-gradient-to-r from-violet-500 to-purple-600 text-white rounded-xl text-sm font-medium hover:shadow-lg hover:shadow-violet-500/25 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {prompt ? 'Save Changes' : 'Create Prompt'}
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}

// ════════════════════════════════════════
// PromptPreview Modal
// ════════════════════════════════════════
function PromptPreview({ prompt, categories, variableValues, setVariableValues, onCopy, copiedId, onClose }) {
  const cat = categories.find(c => c.id === prompt.category);
  const vars = prompt.variables || [];

  let renderedContent = prompt.content;
  vars.forEach(v => {
    const val = variableValues[`${prompt.id}-${v}`];
    if (val) {
      renderedContent = renderedContent.replace(new RegExp(`\\{\\{${v}\\}\\}`, 'g'), val);
    }
  });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        onClick={e => e.stopPropagation()}
        className="w-full max-w-2xl max-h-[90vh] bg-white dark:bg-stone-900 rounded-2xl shadow-2xl overflow-hidden flex flex-col"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-stone-200 dark:border-stone-700">
          <div className="flex items-center gap-3">
            <div className={`w-10 h-10 rounded-xl ${cat?.color || 'bg-stone-500'} flex items-center justify-center`}>
              {(() => { const I = ICON_MAP[cat?.icon] || Folder; return <I size={18} className="text-white" />; })()}
            </div>
            <div>
              <h2 className="text-lg font-bold text-stone-900 dark:text-stone-100">{prompt.title}</h2>
              {prompt.description && <p className="text-xs text-stone-500 dark:text-stone-400">{prompt.description}</p>}
            </div>
          </div>
          <button onClick={onClose} className="p-2 rounded-xl hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors">
            <X size={20} className="text-stone-500" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {/* Variable Inputs */}
          {vars.length > 0 && (
            <div className="bg-violet-50 dark:bg-violet-900/20 border border-violet-200 dark:border-violet-800 rounded-xl p-4 space-y-3">
              <p className="text-sm font-semibold text-violet-700 dark:text-violet-300">Fill in variables:</p>
              {vars.map(v => (
                <div key={v}>
                  <label className="block text-xs font-mono text-violet-600 dark:text-violet-400 mb-1">{`{{${v}}}`}</label>
                  <input
                    type="text"
                    value={variableValues[`${prompt.id}-${v}`] || ''}
                    onChange={e => setVariableValues(prev => ({ ...prev, [`${prompt.id}-${v}`]: e.target.value }))}
                    placeholder={`Enter ${v}...`}
                    className="w-full px-3 py-2 bg-white dark:bg-stone-800 border border-violet-200 dark:border-violet-700 rounded-lg text-sm text-stone-900 dark:text-stone-100 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-violet-500/50"
                  />
                </div>
              ))}
            </div>
          )}

          {/* Rendered Content */}
          <div className="bg-stone-50 dark:bg-stone-800 rounded-xl p-4">
            <pre className="text-sm text-stone-700 dark:text-stone-300 font-mono whitespace-pre-wrap leading-relaxed">
              {renderedContent}
            </pre>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-end gap-3 px-6 py-4 border-t border-stone-200 dark:border-stone-700">
          <button onClick={onClose} className="px-4 py-2 text-sm font-medium text-stone-600 dark:text-stone-400 hover:bg-stone-100 dark:hover:bg-stone-800 rounded-xl transition-colors">
            Close
          </button>
          <button
            onClick={onCopy}
            className={`flex items-center gap-2 px-6 py-2 rounded-xl text-sm font-medium transition-all ${copiedId === prompt.id ? 'bg-green-500 text-white' : 'bg-gradient-to-r from-violet-500 to-purple-600 text-white hover:shadow-lg hover:shadow-violet-500/25'}`}
          >
            {copiedId === prompt.id ? <><Check size={16} /> Copied!</> : <><Copy size={16} /> Copy Prompt</>}
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}
