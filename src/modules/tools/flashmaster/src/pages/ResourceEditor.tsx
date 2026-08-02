/**
 * ResourceEditor — View/edit individual resources.
 * Handles: notes (rich text + drawing), PDFs (viewer + annotation),
 * YouTube embeds, images, and generic files.
 */

import { useState, useEffect, useRef, useCallback } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useLiveQuery } from 'dexie-react-hooks';
import {
  ArrowLeft,
  Save,
  PenTool,
  Type,
  Image,
  Bold,
  Italic,
  Underline,
  List,
  ListOrdered,
  Heading1,
  Heading2,
  Link2,
  Code,
  Trash2,
  Download,
  Sparkles,
  ChevronLeft,
  ChevronRight,
  Plus,
  Scissors,
  FileText,
  AlignLeft,
  AlignCenter,
  Undo2,
  Redo2,
  Youtube,
  Globe,
  Table2,
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import toast from 'react-hot-toast';
import { db } from '../lib/db';
import { useT } from '../lib/i18n';
import DrawingCanvas from '../components/DrawingCanvas';
import YouTubeEmbed, { isValidYouTubeUrl } from '../components/YouTubeEmbed';
import type { DeckResource, DrawingStroke } from '../types';
import { hasOpenAIKey, getOpenAIKey } from '../lib/openai';

type EditorMode = 'text' | 'draw';

export default function ResourceEditor() {
  const { id: deckId, resourceId } = useParams<{ id: string; resourceId: string }>();
  const navigate = useNavigate();
  const { t } = useT();

  const resource = useLiveQuery(() => db.resources.get(resourceId!), [resourceId]);
  const deck = useLiveQuery(() => db.decks.get(deckId!), [deckId]);

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [drawings, setDrawings] = useState<DrawingStroke[][]>([[]]);
  const [currentPage, setCurrentPage] = useState(0);
  const [mode, setMode] = useState<EditorMode>('text');
  const [hasChanges, setHasChanges] = useState(false);
  const [saving, setSaving] = useState(false);
  const [aiGenerating, setAiGenerating] = useState(false);
  const [showTableDialog, setShowTableDialog] = useState(false);
  const [tableRows, setTableRows] = useState(3);
  const [tableCols, setTableCols] = useState(3);
  const [tableHasHeader, setTableHasHeader] = useState(true);
  const editorRef = useRef<HTMLDivElement>(null);
  const imageInputRef = useRef<HTMLInputElement>(null);

  // Load resource
  useEffect(() => {
    if (resource) {
      setTitle(resource.title);
      setContent(resource.content || '');
      setDrawings(resource.drawings || [[]]);
    }
  }, [resource?.id]);

  // Auto-save
  const save = useCallback(async () => {
    if (!resource) return;
    setSaving(true);
    await db.resources.update(resource.id, {
      title,
      content,
      drawings,
      updatedAt: Date.now(),
    });
    setHasChanges(false);
    setSaving(false);
  }, [resource, title, content, drawings]);

  // Auto-save on changes (debounced)
  useEffect(() => {
    if (!hasChanges) return;
    const timer = setTimeout(save, 2000);
    return () => clearTimeout(timer);
  }, [hasChanges, save]);

  // Mark changes
  const markChanged = () => setHasChanges(true);

  // Rich text commands
  const execCmd = (cmd: string, value?: string) => {
    document.execCommand(cmd, false, value);
    editorRef.current?.focus();
    // Sync content
    if (editorRef.current) {
      setContent(editorRef.current.innerHTML);
      markChanged();
    }
  };

  const handleEditorInput = () => {
    if (editorRef.current) {
      setContent(editorRef.current.innerHTML);
      markChanged();
    }
  };

  const handleImageInsert = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      execCmd('insertImage', reader.result as string);
    };
    reader.readAsDataURL(file);
    e.target.value = '';
  };

  /** Insert an HTML table with specified dimensions */
  const insertTable = () => {
    const rows = Math.max(1, Math.min(50, tableRows));
    const cols = Math.max(1, Math.min(20, tableCols));

    let html = '<table>';
    for (let r = 0; r < rows; r++) {
      html += '<tr>';
      for (let c = 0; c < cols; c++) {
        if (r === 0 && tableHasHeader) {
          html += `<th>Header ${c + 1}</th>`;
        } else {
          html += '<td><br></td>';
        }
      }
      html += '</tr>';
    }
    html += '</table><p><br></p>';

    // Insert at cursor position
    const sel = window.getSelection();
    if (sel && sel.rangeCount > 0) {
      const range = sel.getRangeAt(0);
      range.deleteContents();
      const temp = document.createElement('div');
      temp.innerHTML = html;
      const frag = document.createDocumentFragment();
      while (temp.firstChild) frag.appendChild(temp.firstChild);
      range.insertNode(frag);
      // Move cursor after table
      range.collapse(false);
      sel.removeAllRanges();
      sel.addRange(range);
    } else {
      // Fallback: append
      if (editorRef.current) {
        editorRef.current.innerHTML += html;
      }
    }

    // Sync
    if (editorRef.current) {
      setContent(editorRef.current.innerHTML);
      markChanged();
    }
    setShowTableDialog(false);
  };

  /** Handle paste — preserve Excel/Word table HTML, clean up if needed */
  const handlePaste = (e: React.ClipboardEvent<HTMLDivElement>) => {
    const html = e.clipboardData.getData('text/html');

    // If HTML contains a table, let the browser paste it natively (it preserves tables)
    if (html && /<table[\s>]/i.test(html)) {
      // Let default paste happen — browser handles table HTML well
      // After paste, sync content
      setTimeout(() => {
        if (editorRef.current) {
          setContent(editorRef.current.innerHTML);
          markChanged();
        }
      }, 50);
      return;
    }

    // Check if plain text looks like tab-separated data (Excel/Google Sheets copy)
    const text = e.clipboardData.getData('text/plain');
    if (text && text.includes('\t') && text.includes('\n')) {
      e.preventDefault();

      const lines = text.split('\n').filter(l => l.trim());
      if (lines.length > 0) {
        let tableHtml = '<table>';
        lines.forEach((line, rowIdx) => {
          const cells = line.split('\t');
          tableHtml += '<tr>';
          cells.forEach(cell => {
            const tag = rowIdx === 0 ? 'th' : 'td';
            tableHtml += `<${tag}>${cell.trim()}</${tag}>`;
          });
          tableHtml += '</tr>';
        });
        tableHtml += '</table><p><br></p>';

        // Insert at cursor
        const sel = window.getSelection();
        if (sel && sel.rangeCount > 0) {
          const range = sel.getRangeAt(0);
          range.deleteContents();
          const temp = document.createElement('div');
          temp.innerHTML = tableHtml;
          const frag = document.createDocumentFragment();
          while (temp.firstChild) frag.appendChild(temp.firstChild);
          range.insertNode(frag);
          range.collapse(false);
          sel.removeAllRanges();
          sel.addRange(range);
        }

        if (editorRef.current) {
          setContent(editorRef.current.innerHTML);
          markChanged();
        }
        return;
      }
    }

    // Default: let browser handle the paste
    setTimeout(() => {
      if (editorRef.current) {
        setContent(editorRef.current.innerHTML);
        markChanged();
      }
    }, 50);
  };

  // Drawing page management
  const addDrawingPage = () => {
    setDrawings(prev => [...prev, []]);
    setCurrentPage(drawings.length);
    markChanged();
  };

  const updateCurrentDrawing = (strokes: DrawingStroke[]) => {
    setDrawings(prev => {
      const next = [...prev];
      next[currentPage] = strokes;
      return next;
    });
    markChanged();
  };

  // AI: Generate flashcards from selected text
  const handleAIGenerate = async () => {
    if (!hasOpenAIKey()) {
      toast.error('Add an OpenAI API key in Settings to use AI features');
      return;
    }

    const selection = window.getSelection();
    const selectedText = selection?.toString()?.trim();
    if (!selectedText || selectedText.length < 10) {
      toast.error('Select some text first (at least 10 characters)');
      return;
    }

    setAiGenerating(true);
    try {
      const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${getOpenAIKey()}`,
        },
        body: JSON.stringify({
          model: 'gpt-4o-mini',
          messages: [
            {
              role: 'system',
              content: 'Generate flashcards from the provided text. Return a JSON array of objects with "front" and "back" fields. Create concise, effective flashcards. Return ONLY valid JSON, no markdown.',
            },
            {
              role: 'user',
              content: `Create flashcards from this text:\n\n${selectedText}`,
            },
          ],
          temperature: 0.5,
          max_tokens: 2000,
        }),
      });

      const data = await response.json();
      const text = data.choices?.[0]?.message?.content || '';
      const cards = JSON.parse(text);

      if (Array.isArray(cards) && cards.length > 0) {
        const { v4: uuidv4 } = await import('uuid');
        const deckObj = await db.decks.get(deckId!);
        const settings = deckObj?.settings || (await import('../types')).DEFAULT_DECK_SETTINGS;

        for (const card of cards) {
          await db.cards.put({
            id: uuidv4(),
            deckId: deckId!,
            front: card.front,
            back: card.back,
            tags: ['ai-generated', 'from-notes'],
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
          });
        }
        toast.success(`${cards.length} flashcards created from selection!`);
      }
    } catch (err: any) {
      toast.error('AI generation failed: ' + (err.message || 'Unknown error'));
    } finally {
      setAiGenerating(false);
    }
  };

  if (!resource || !deck) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="animate-pulse text-slate-500">Loading...</div>
      </div>
    );
  }

  // ── Render based on resource type ──

  // YouTube viewer
  if (resource.type === 'youtube') {
    return (
      <div className="max-w-3xl mx-auto px-4 py-6">
        <div className="flex items-center gap-3 mb-6">
          <button onClick={() => navigate(`/deck/${deckId}/resources`)} className="w-10 h-10 rounded-xl bg-slate-800/50 flex items-center justify-center hover:bg-slate-700/50">
            <ArrowLeft size={20} />
          </button>
          <input
            type="text"
            value={title}
            onChange={e => { setTitle(e.target.value); markChanged(); }}
            className="flex-1 text-xl font-bold bg-transparent focus:outline-none"
          />
          <button onClick={save} className="px-3 py-1.5 rounded-lg bg-primary-500/20 text-primary-400 text-sm font-medium flex items-center gap-1.5">
            <Save size={14} />
            {saving ? 'Saving...' : 'Save'}
          </button>
        </div>
        {resource.youtubeUrl && isValidYouTubeUrl(resource.youtubeUrl) && (
          <YouTubeEmbed url={resource.youtubeUrl} />
        )}
      </div>
    );
  }

  // Link viewer
  if (resource.type === 'link') {
    return (
      <div className="max-w-3xl mx-auto px-4 py-6">
        <div className="flex items-center gap-3 mb-6">
          <button onClick={() => navigate(`/deck/${deckId}/resources`)} className="w-10 h-10 rounded-xl bg-slate-800/50 flex items-center justify-center hover:bg-slate-700/50">
            <ArrowLeft size={20} />
          </button>
          <div className="flex-1">
            <h1 className="text-xl font-bold">{resource.title}</h1>
            {resource.url && (
              <a href={resource.url} target="_blank" rel="noopener noreferrer" className="text-sm text-blue-400 hover:text-blue-300">
                {resource.url}
              </a>
            )}
          </div>
        </div>
        {resource.url && (
          <div className="glass-card rounded-2xl overflow-hidden" style={{ height: '80vh' }}>
            <iframe src={resource.url} className="w-full h-full border-0" sandbox="allow-scripts allow-same-origin allow-popups" title={resource.title} />
          </div>
        )}
      </div>
    );
  }

  // Image viewer
  if (resource.type === 'image') {
    return (
      <div className="max-w-4xl mx-auto px-4 py-6">
        <div className="flex items-center gap-3 mb-6">
          <button onClick={() => navigate(`/deck/${deckId}/resources`)} className="w-10 h-10 rounded-xl bg-slate-800/50 flex items-center justify-center hover:bg-slate-700/50">
            <ArrowLeft size={20} />
          </button>
          <h1 className="flex-1 text-xl font-bold truncate">{resource.title}</h1>
          {resource.fileData && (
            <a href={resource.fileData} download={resource.fileName} className="px-3 py-1.5 rounded-lg bg-slate-800/50 text-sm text-slate-400 hover:text-white flex items-center gap-1.5">
              <Download size={14} />
              Download
            </a>
          )}
        </div>
        {resource.fileData && (
          <div className="flex items-center justify-center">
            <img src={resource.fileData} alt={resource.title} className="max-w-full rounded-xl shadow-lg" />
          </div>
        )}
      </div>
    );
  }

  // PDF viewer
  if (resource.type === 'pdf') {
    return (
      <div className="max-w-4xl mx-auto px-4 py-6">
        <div className="flex items-center gap-3 mb-6">
          <button onClick={() => navigate(`/deck/${deckId}/resources`)} className="w-10 h-10 rounded-xl bg-slate-800/50 flex items-center justify-center hover:bg-slate-700/50">
            <ArrowLeft size={20} />
          </button>
          <h1 className="flex-1 text-xl font-bold truncate">{resource.title}</h1>
          {resource.fileData && (
            <a href={resource.fileData} download={resource.fileName} className="px-3 py-1.5 rounded-lg bg-slate-800/50 text-sm text-slate-400 hover:text-white flex items-center gap-1.5">
              <Download size={14} />
              Download
            </a>
          )}
        </div>
        {resource.fileData && (
          <div className="glass-card rounded-2xl overflow-hidden" style={{ height: '85vh' }}>
            <iframe src={resource.fileData} className="w-full h-full border-0" title={resource.title} />
          </div>
        )}
        {/* Drawing annotation overlay */}
        <div className="mt-4">
          <h3 className="text-sm font-medium mb-2 flex items-center gap-2">
            <PenTool size={14} className="text-primary-400" />
            Annotations
          </h3>
          <DrawingCanvas
            width={800}
            height={400}
            strokes={drawings[0] || []}
            onChange={strokes => updateCurrentDrawing(strokes)}
            background="lined"
          />
        </div>
        {/* AI generate from PDF */}
        {hasOpenAIKey() && (
          <button
            onClick={handleAIGenerate}
            disabled={aiGenerating}
            className="mt-4 px-4 py-2.5 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm font-medium flex items-center gap-2 disabled:opacity-50"
          >
            <Sparkles size={16} />
            {aiGenerating ? 'Generating...' : 'Select text → AI Flashcards'}
          </button>
        )}
      </div>
    );
  }

  // File viewer (generic)
  if (resource.type === 'file') {
    const isText = resource.fileType?.startsWith('text/') || ['md', 'csv', 'json', 'js', 'ts', 'py', 'html', 'css'].some(ext => resource.fileName?.endsWith('.' + ext));
    return (
      <div className="max-w-4xl mx-auto px-4 py-6">
        <div className="flex items-center gap-3 mb-6">
          <button onClick={() => navigate(`/deck/${deckId}/resources`)} className="w-10 h-10 rounded-xl bg-slate-800/50 flex items-center justify-center hover:bg-slate-700/50">
            <ArrowLeft size={20} />
          </button>
          <h1 className="flex-1 text-xl font-bold truncate">{resource.title}</h1>
          {resource.fileData && (
            <a href={resource.fileData} download={resource.fileName} className="px-3 py-1.5 rounded-lg bg-slate-800/50 text-sm text-slate-400 hover:text-white flex items-center gap-1.5">
              <Download size={14} />
              Download
            </a>
          )}
        </div>
        {isText && resource.fileData && (
          <div className="glass-card rounded-2xl p-6">
            <pre className="text-sm whitespace-pre-wrap font-mono text-slate-300 overflow-x-auto">
              {atob(resource.fileData.split(',')[1] || '')}
            </pre>
          </div>
        )}
        {!isText && resource.fileData?.startsWith('data:video') && (
          <video src={resource.fileData} controls className="w-full rounded-xl" />
        )}
        {!isText && !resource.fileData?.startsWith('data:video') && (
          <div className="glass-card rounded-2xl p-8 text-center">
            <FileText size={48} className="mx-auto text-slate-600 mb-4" />
            <p className="text-slate-400 mb-2">{resource.fileName}</p>
            <p className="text-xs text-slate-600">This file type cannot be previewed. Use the download button above.</p>
          </div>
        )}
      </div>
    );
  }

  // ── Note Editor (main editor with rich text + drawing) ──
  return (
    <div className="max-w-4xl mx-auto px-4 py-6">
      {/* Header */}
      <div className="flex items-center gap-3 mb-4">
        <button
          onClick={async () => {
            if (hasChanges) await save();
            navigate(`/deck/${deckId}/resources`);
          }}
          className="w-10 h-10 rounded-xl bg-slate-800/50 flex items-center justify-center hover:bg-slate-700/50 transition-colors"
        >
          <ArrowLeft size={20} />
        </button>
        <input
          type="text"
          value={title}
          onChange={e => { setTitle(e.target.value); markChanged(); }}
          placeholder="Note title..."
          className="flex-1 text-xl font-bold bg-transparent focus:outline-none placeholder:text-slate-600"
        />
        <div className="flex items-center gap-2">
          {hasChanges && (
            <span className="text-[10px] text-amber-400">Unsaved</span>
          )}
          <button
            onClick={save}
            className={`px-3 py-1.5 rounded-lg text-sm font-medium flex items-center gap-1.5 transition-all ${
              saving ? 'bg-emerald-500/20 text-emerald-400' : 'bg-primary-500/20 text-primary-400 hover:bg-primary-500/30'
            }`}
          >
            <Save size={14} />
            {saving ? 'Saving...' : 'Save'}
          </button>
        </div>
      </div>

      {/* Mode tabs */}
      <div className="flex items-center gap-1 mb-3 border-b border-slate-800/50 pb-2">
        <button
          onClick={() => setMode('text')}
          className={`px-3 py-1.5 rounded-lg text-xs font-medium flex items-center gap-1.5 transition-all ${
            mode === 'text' ? 'bg-primary-500/15 text-primary-400' : 'text-slate-400 hover:text-white'
          }`}
        >
          <Type size={13} />
          Text Editor
        </button>
        <button
          onClick={() => setMode('draw')}
          className={`px-3 py-1.5 rounded-lg text-xs font-medium flex items-center gap-1.5 transition-all ${
            mode === 'draw' ? 'bg-purple-500/15 text-purple-400' : 'text-slate-400 hover:text-white'
          }`}
        >
          <PenTool size={13} />
          Drawing
        </button>
        <div className="flex-1" />
        {/* AI generate */}
        {hasOpenAIKey() && (
          <button
            onClick={handleAIGenerate}
            disabled={aiGenerating}
            className="px-3 py-1.5 rounded-lg bg-purple-500/15 text-purple-400 text-xs font-medium flex items-center gap-1.5 hover:bg-purple-500/25 disabled:opacity-50"
          >
            <Sparkles size={13} />
            {aiGenerating ? 'Generating...' : 'Selection → Flashcards'}
          </button>
        )}
      </div>

      {/* Text Editor Mode */}
      {mode === 'text' && (
        <div className="space-y-2">
          {/* Formatting Toolbar */}
          <div className="flex items-center gap-0.5 flex-wrap p-2 bg-slate-800/60 rounded-xl border border-slate-700/40">
            {[
              { cmd: 'bold', icon: Bold, label: 'Bold' },
              { cmd: 'italic', icon: Italic, label: 'Italic' },
              { cmd: 'underline', icon: Underline, label: 'Underline' },
            ].map(b => (
              <button
                key={b.cmd}
                onClick={() => execCmd(b.cmd)}
                className="w-8 h-8 rounded-lg flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-700/50"
                title={b.label}
              >
                <b.icon size={15} />
              </button>
            ))}

            <div className="w-px h-6 bg-slate-700/50 mx-1" />

            <button onClick={() => execCmd('formatBlock', '<h1>')} className="w-8 h-8 rounded-lg flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-700/50" title="Heading 1">
              <Heading1 size={15} />
            </button>
            <button onClick={() => execCmd('formatBlock', '<h2>')} className="w-8 h-8 rounded-lg flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-700/50" title="Heading 2">
              <Heading2 size={15} />
            </button>

            <div className="w-px h-6 bg-slate-700/50 mx-1" />

            <button onClick={() => execCmd('insertUnorderedList')} className="w-8 h-8 rounded-lg flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-700/50" title="Bullet List">
              <List size={15} />
            </button>
            <button onClick={() => execCmd('insertOrderedList')} className="w-8 h-8 rounded-lg flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-700/50" title="Numbered List">
              <ListOrdered size={15} />
            </button>

            <div className="w-px h-6 bg-slate-700/50 mx-1" />

            <button onClick={() => { const url = prompt('Enter link URL:'); if (url) execCmd('createLink', url); }} className="w-8 h-8 rounded-lg flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-700/50" title="Insert Link">
              <Link2 size={15} />
            </button>
            <button onClick={() => imageInputRef.current?.click()} className="w-8 h-8 rounded-lg flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-700/50" title="Insert Image">
              <Image size={15} />
            </button>
            <button onClick={() => execCmd('formatBlock', '<pre>')} className="w-8 h-8 rounded-lg flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-700/50" title="Code Block">
              <Code size={15} />
            </button>
            <button onClick={() => setShowTableDialog(true)} className="w-8 h-8 rounded-lg flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-700/50" title="Insert Table">
              <Table2 size={15} />
            </button>

            <div className="w-px h-6 bg-slate-700/50 mx-1" />

            <button onClick={() => execCmd('justifyLeft')} className="w-8 h-8 rounded-lg flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-700/50" title="Align Left">
              <AlignLeft size={15} />
            </button>
            <button onClick={() => execCmd('justifyCenter')} className="w-8 h-8 rounded-lg flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-700/50" title="Align Center">
              <AlignCenter size={15} />
            </button>

            <div className="w-px h-6 bg-slate-700/50 mx-1" />

            <button onClick={() => execCmd('undo')} className="w-8 h-8 rounded-lg flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-700/50" title="Undo">
              <Undo2 size={14} />
            </button>
            <button onClick={() => execCmd('redo')} className="w-8 h-8 rounded-lg flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-700/50" title="Redo">
              <Redo2 size={14} />
            </button>
          </div>

          {/* ContentEditable Editor */}
          <div
            ref={editorRef}
            contentEditable
            suppressContentEditableWarning
            onInput={handleEditorInput}
            onPaste={handlePaste}
            className="min-h-[500px] p-6 glass-card rounded-xl focus:outline-none focus:ring-1 focus:ring-primary-500/30 text-sm leading-relaxed prose prose-invert max-w-none
              [&_h1]:text-2xl [&_h1]:font-bold [&_h1]:mb-3
              [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:mb-2
              [&_h3]:text-lg [&_h3]:font-medium [&_h3]:mb-2
              [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:my-2
              [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:my-2
              [&_li]:my-1
              [&_a]:text-primary-400 [&_a]:underline
              [&_img]:max-w-full [&_img]:rounded-lg [&_img]:my-3
              [&_pre]:bg-slate-800/80 [&_pre]:p-4 [&_pre]:rounded-lg [&_pre]:font-mono [&_pre]:text-xs [&_pre]:my-3
              [&_blockquote]:border-l-2 [&_blockquote]:border-primary-500/50 [&_blockquote]:pl-4 [&_blockquote]:italic [&_blockquote]:text-slate-400
              [&_table]:w-full [&_table]:border-collapse [&_table]:my-3 [&_table]:rounded-lg [&_table]:overflow-hidden
              [&_th]:bg-slate-700/50 [&_th]:px-3 [&_th]:py-2 [&_th]:text-left [&_th]:text-xs [&_th]:font-semibold [&_th]:border [&_th]:border-slate-600/40
              [&_td]:px-3 [&_td]:py-2 [&_td]:text-sm [&_td]:border [&_td]:border-slate-700/40 [&_td]:min-w-[60px]
              [&_tr:hover]:bg-slate-800/30
            "
            dangerouslySetInnerHTML={{ __html: content }}
            data-placeholder="Start writing your notes... Use the toolbar for formatting, or just type."
          />

          <input
            ref={imageInputRef}
            type="file"
            accept="image/*"
            onChange={handleImageInsert}
            className="hidden"
          />

          {/* Table Insert Dialog */}
          <AnimatePresence>
            {showTableDialog && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                onClick={() => setShowTableDialog(false)}
              >
                <motion.div
                  initial={{ scale: 0.95, y: 10 }}
                  animate={{ scale: 1, y: 0 }}
                  exit={{ scale: 0.95, y: 10 }}
                  className="glass-card rounded-2xl p-6 w-full max-w-sm"
                  onClick={e => e.stopPropagation()}
                >
                  <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                    <Table2 size={18} className="text-primary-400" />
                    Insert Table
                  </h3>
                  <div className="space-y-4">
                    {/* Visual grid picker */}
                    <div className="flex justify-center">
                      <div className="inline-grid gap-1" style={{ gridTemplateColumns: `repeat(8, 1fr)` }}>
                        {Array.from({ length: 48 }, (_, i) => {
                          const r = Math.floor(i / 8) + 1;
                          const c = (i % 8) + 1;
                          const isActive = r <= tableRows && c <= tableCols;
                          return (
                            <button
                              key={i}
                              onMouseEnter={() => { setTableRows(r); setTableCols(c); }}
                              onClick={insertTable}
                              className={`w-6 h-6 rounded-sm border transition-all ${
                                isActive
                                  ? 'bg-primary-500/30 border-primary-500/50'
                                  : 'bg-slate-800/30 border-slate-700/30 hover:bg-slate-700/30'
                              }`}
                            />
                          );
                        })}
                      </div>
                    </div>
                    <p className="text-center text-xs text-slate-400">
                      {tableRows} × {tableCols} table
                    </p>

                    {/* Manual input */}
                    <div className="flex items-center gap-3">
                      <div className="flex-1">
                        <label className="text-[10px] text-slate-500 uppercase tracking-wider mb-1 block">Rows</label>
                        <input
                          type="number"
                          min={1}
                          max={50}
                          value={tableRows}
                          onChange={e => setTableRows(Number(e.target.value))}
                          className="w-full px-3 py-2 rounded-lg bg-slate-800/50 border border-slate-700/50 text-sm focus:outline-none focus:border-primary-500/50"
                        />
                      </div>
                      <span className="text-slate-500 mt-4">×</span>
                      <div className="flex-1">
                        <label className="text-[10px] text-slate-500 uppercase tracking-wider mb-1 block">Columns</label>
                        <input
                          type="number"
                          min={1}
                          max={20}
                          value={tableCols}
                          onChange={e => setTableCols(Number(e.target.value))}
                          className="w-full px-3 py-2 rounded-lg bg-slate-800/50 border border-slate-700/50 text-sm focus:outline-none focus:border-primary-500/50"
                        />
                      </div>
                    </div>

                    {/* Header row toggle */}
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={tableHasHeader}
                        onChange={e => setTableHasHeader(e.target.checked)}
                        className="rounded border-slate-600 bg-slate-800 text-primary-500 focus:ring-primary-500/30"
                      />
                      <span className="text-sm text-slate-300">Include header row</span>
                    </label>

                    <p className="text-[10px] text-slate-500">
                      Tip: You can also paste tables directly from Excel, Google Sheets, or Word — they'll be automatically formatted.
                    </p>

                    <div className="flex gap-2 justify-end">
                      <button onClick={() => setShowTableDialog(false)} className="px-4 py-2 rounded-lg text-sm text-slate-400 hover:text-white">
                        Cancel
                      </button>
                      <button
                        onClick={insertTable}
                        className="px-4 py-2 rounded-lg bg-primary-500 text-white text-sm font-medium hover:bg-primary-400"
                      >
                        Insert Table
                      </button>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      )}

      {/* Drawing Mode */}
      {mode === 'draw' && (
        <div className="space-y-3">
          {/* Page navigation */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <button
                onClick={() => setCurrentPage(Math.max(0, currentPage - 1))}
                disabled={currentPage === 0}
                className="w-8 h-8 rounded-lg bg-slate-800/50 flex items-center justify-center text-slate-400 hover:text-white disabled:opacity-30"
              >
                <ChevronLeft size={16} />
              </button>
              <span className="text-sm text-slate-400 tabular-nums">
                Page {currentPage + 1} / {drawings.length}
              </span>
              <button
                onClick={() => setCurrentPage(Math.min(drawings.length - 1, currentPage + 1))}
                disabled={currentPage >= drawings.length - 1}
                className="w-8 h-8 rounded-lg bg-slate-800/50 flex items-center justify-center text-slate-400 hover:text-white disabled:opacity-30"
              >
                <ChevronRight size={16} />
              </button>
            </div>
            <button
              onClick={addDrawingPage}
              className="px-3 py-1.5 rounded-lg bg-slate-800/50 text-sm text-slate-400 hover:text-white flex items-center gap-1.5"
            >
              <Plus size={14} />
              New Page
            </button>
          </div>

          {/* Drawing canvas */}
          <DrawingCanvas
            width={1200}
            height={850}
            strokes={drawings[currentPage] || []}
            onChange={updateCurrentDrawing}
            background="lined"
          />
        </div>
      )}

      <style>{`
        [contenteditable]:empty:before {
          content: attr(data-placeholder);
          color: #475569;
          pointer-events: none;
        }
      `}</style>
    </div>
  );
}
