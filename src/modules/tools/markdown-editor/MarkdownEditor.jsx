import React, { useState, useEffect, useRef, useCallback, useMemo, useDeferredValue } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import rehypeRaw from 'rehype-raw';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark, oneLight } from 'react-syntax-highlighter/dist/esm/styles/prism';
import mermaid from 'mermaid';
import 'katex/dist/katex.min.css';
import {
  FileText, Plus, Trash2, Download, Printer, Search,
  Bold, Italic, Code, List, ListOrdered,
  Link2, Image, Eye, Edit3, Copy, Clock,
  ArrowLeft, BookOpen, Check, X,
  Type, Minus, MoreHorizontal, Upload, Table,
  Sun, Moon
} from 'lucide-react';

// ─── Mermaid & Plugin Init ─────────────────────────────────
mermaid.initialize({ startOnLoad: false, theme: 'default', securityLevel: 'loose' });

const REMARK_PLUGINS = [remarkGfm, remarkMath];
const REHYPE_PLUGINS = [rehypeKatex, rehypeRaw];

// ─── MermaidBlock ───────────────────────────────────────────
const MermaidBlock = React.memo(function MermaidBlock({ code }) {
  const containerRef = useRef(null);
  const [svg, setSvg] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelled = false;
    const id = `mermaid-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
    mermaid.render(id, code)
      .then(({ svg: renderedSvg }) => {
        if (!cancelled) {
          setSvg(renderedSvg);
          setError(null);
        }
      })
      .catch((err) => {
        if (!cancelled) setError(String(err));
      });
    return () => { cancelled = true; };
  }, [code]);

  if (error) {
    return (
      <div className="text-red-400 bg-red-950/30 border border-red-800/50 rounded-lg p-3 text-sm font-mono my-2">
        Mermaid Error: {error}
      </div>
    );
  }
  return <div ref={containerRef} dangerouslySetInnerHTML={{ __html: svg }} className="flex justify-center my-4" />;
});

// ─── Toolbar Components ─────────────────────────────────────
const ToolbarButton = React.memo(function ToolbarButton({ icon: Icon, label, onClick, className = '' }) {
  return (
    <button
      onClick={onClick}
      title={label}
      className={`p-1.5 rounded-md hover:bg-stone-200 dark:hover:bg-stone-600 text-stone-600 dark:text-stone-300 transition-colors ${className}`}
    >
      {typeof Icon === 'string' ? (
        <span className="text-xs font-bold w-5 h-5 flex items-center justify-center">{Icon}</span>
      ) : (
        <Icon size={16} />
      )}
    </button>
  );
});

const ToolbarSep = React.memo(function ToolbarSep() {
  return <div className="w-px h-6 bg-stone-300 dark:bg-stone-600 mx-1" />;
});

// ─── Constants ──────────────────────────────────────────────
const STORAGE_KEY = 'markdownpad_documents';
const WELCOME_CONTENT = `# Welcome to MarkdownPad

Your **local**, privacy-first Markdown editor with live preview.

## Features

- **Live Preview** — See rendered markdown in real-time
- **LaTeX Math** — Beautiful equations with KaTeX
- **Syntax Highlighting** — 100+ languages
- **Mermaid Diagrams** — Flowcharts, sequence diagrams & more
- **Image Paste** — Paste images from clipboard
- **Document Library** — Manage multiple documents
- **Print & Export** — Download or print your work

---

## Math

Inline: $E = mc^2$ — Block:

$$
\\int_{-\\infty}^{\\infty} e^{-x^2}\\,dx = \\sqrt{\\pi}
$$

## Code

\`\`\`javascript
function greet(name) {
  return \`Hello, \${name}!\`;
}
\`\`\`

## Mermaid

\`\`\`mermaid
graph LR
    A[Write] --> B[Preview]
    B --> C{Happy?}
    C -->|Yes| D[Export]
    C -->|No| A
\`\`\`

## Table

| Feature | Status |
|---------|--------|
| Markdown | ✅ |
| LaTeX | ✅ |
| Mermaid | ✅ |
| Dark Mode | ✅ |
| Image Paste | ✅ |

## Task List

- [x] Build the editor
- [x] Add LaTeX support
- [x] Add Mermaid diagrams
- [ ] Write something amazing

---

`;

// ─── Storage Helpers ────────────────────────────────────────
function loadDocuments() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) return JSON.parse(raw);
  } catch { /* ignore */ }
  return null;
}

function saveDocuments(docs) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(docs));
}

function createDocument(title = 'Untitled', content = '') {
  return {
    id: `doc-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
    title,
    content,
    createdAt: Date.now(),
    updatedAt: Date.now(),
  };
}

// ─── Main Component ─────────────────────────────────────────
export default function MarkdownEditor() {
  // --- Dark mode detection & toggle ---
  const [isDark, setIsDark] = useState(() => document.documentElement.classList.contains('dark'));
  useEffect(() => {
    const obs = new MutationObserver(() => setIsDark(document.documentElement.classList.contains('dark')));
    obs.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
    return () => obs.disconnect();
  }, []);

  const toggleDarkMode = () => {
    document.documentElement.classList.toggle('dark');
  };

  // --- Print styles injection ---
  useEffect(() => {
    const style = document.createElement('style');
    style.setAttribute('data-mdpad-print', '');
    style.textContent = `
      @media print {
        .mdpad-no-print { display: none !important; }
        .mdpad-root {
          position: static !important;
          inset: auto !important;
          overflow: visible !important;
          height: auto !important;
        }
        .mdpad-main {
          overflow: visible !important;
          display: block !important;
        }
        .mdpad-editor-pane { display: none !important; }
        .mdpad-preview-pane {
          width: 100% !important;
          overflow: visible !important;
          position: static !important;
          left: auto !important;
        }
        .mdpad-preview-content {
          max-width: 100% !important;
        }
      }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  // --- State ---
  const [documents, setDocuments] = useState(() => {
    const saved = loadDocuments();
    if (saved && saved.length > 0) return saved;
    const welcome = createDocument('Welcome', WELCOME_CONTENT);
    return [welcome];
  });
  const [activeDocId, setActiveDocId] = useState(() => {
    const saved = loadDocuments();
    return saved && saved.length > 0 ? saved[0].id : documents[0]?.id;
  });
  const [viewMode, setViewMode] = useState('split'); // 'edit', 'split', 'preview'
  const [showLibrary, setShowLibrary] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [editorContent, setEditorContent] = useState('');
  // Deferred + debounced preview: prevents the heavy markdown/katex/mermaid
  // renderer from reflowing the layout on every keystroke, which caused the
  // panes to "wobble" while typing.
  const deferredEditorContent = useDeferredValue(editorContent);
  const [previewContent, setPreviewContent] = useState(editorContent);
  const [docTitle, setDocTitle] = useState('');
  const [editingTitle, setEditingTitle] = useState(false);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(null);
  const [copied, setCopied] = useState(false);
  const [saved, setSaved] = useState(true);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const editorRef = useRef(null);
  const previewRef = useRef(null);
  const titleInputRef = useRef(null);
  const saveTimeoutRef = useRef(null);
  const previewDebounceRef = useRef(null);
  const scrollSyncRef = useRef(false);
  const activeScrollPaneRef = useRef(null);

  // Debounce the preview value (usually ~150ms after you stop typing) so the
  // expensive renderer and the scroll-sync don't fight the layout on each keystroke.
  useEffect(() => {
    if (previewDebounceRef.current) clearTimeout(previewDebounceRef.current);
    previewDebounceRef.current = setTimeout(() => {
      setPreviewContent(deferredEditorContent);
      if (viewMode !== 'split') { scrollSyncRef.current = false; }
    }, 120);
    return () => { if (previewDebounceRef.current) clearTimeout(previewDebounceRef.current); };
  }, [deferredEditorContent]);

  // Active document
  const activeDoc = documents.find((d) => d.id === activeDocId);

  // --- Load active doc content ---
  useEffect(() => {
    if (activeDoc) {
      setEditorContent(activeDoc.content);
      setDocTitle(activeDoc.title);
    }
  }, [activeDocId]);

  // --- Auto-save with debounce ---
  useEffect(() => {
    if (!activeDocId) return;
    setSaved(false);
    if (saveTimeoutRef.current) clearTimeout(saveTimeoutRef.current);
    saveTimeoutRef.current = setTimeout(() => {
      setDocuments((prev) => {
        const updated = prev.map((d) =>
          d.id === activeDocId ? { ...d, content: editorContent, title: docTitle, updatedAt: Date.now() } : d
        );
        saveDocuments(updated);
        return updated;
      });
      setSaved(true);
    }, 600);
    return () => { if (saveTimeoutRef.current) clearTimeout(saveTimeoutRef.current); };
  }, [editorContent, docTitle, activeDocId]);

  // --- Document management ---
  const handleNewDocument = () => {
    const doc = createDocument();
    setDocuments((prev) => {
      const next = [doc, ...prev];
      saveDocuments(next);
      return next;
    });
    setActiveDocId(doc.id);
    setShowLibrary(false);
  };

  const handleDeleteDocument = (docId) => {
    setDocuments((prev) => {
      const next = prev.filter((d) => d.id !== docId);
      if (docId === activeDocId) {
        if (next.length > 0) setActiveDocId(next[0].id);
        else {
          const newDoc = createDocument();
          next.push(newDoc);
          setActiveDocId(newDoc.id);
        }
      }
      saveDocuments(next);
      return next;
    });
    setShowDeleteConfirm(null);
  };

  const handleSelectDocument = (docId) => {
    // Save current doc before switching
    if (activeDocId) {
      setDocuments((prev) => {
        const updated = prev.map((d) =>
          d.id === activeDocId ? { ...d, content: editorContent, title: docTitle, updatedAt: Date.now() } : d
        );
        saveDocuments(updated);
        return updated;
      });
    }
    setActiveDocId(docId);
    setShowLibrary(false);
  };

  const handleDuplicateDocument = (doc) => {
    const newDoc = createDocument(`${doc.title} (Copy)`, doc.content);
    setDocuments((prev) => {
      const next = [newDoc, ...prev];
      saveDocuments(next);
      return next;
    });
    setActiveDocId(newDoc.id);
  };

  // --- Editor helpers ---
  const wrapSelection = useCallback((before, after = before) => {
    const ta = editorRef.current;
    if (!ta) return;
    const start = ta.selectionStart;
    const end = ta.selectionEnd;
    const selected = editorContent.substring(start, end);
    const newContent = editorContent.substring(0, start) + before + selected + after + editorContent.substring(end);
    setEditorContent(newContent);
    requestAnimationFrame(() => {
      ta.focus();
      if (selected) {
        ta.selectionStart = start + before.length;
        ta.selectionEnd = end + before.length;
      } else {
        ta.selectionStart = ta.selectionEnd = start + before.length;
      }
    });
  }, [editorContent]);

  const insertAtCursor = useCallback((text, cursorOffset = text.length) => {
    const ta = editorRef.current;
    if (!ta) return;
    const start = ta.selectionStart;
    const newContent = editorContent.substring(0, start) + text + editorContent.substring(ta.selectionEnd);
    setEditorContent(newContent);
    requestAnimationFrame(() => {
      ta.focus();
      ta.selectionStart = ta.selectionEnd = start + cursorOffset;
    });
  }, [editorContent]);

  const prefixLines = useCallback((prefix) => {
    const ta = editorRef.current;
    if (!ta) return;
    const start = ta.selectionStart;
    const end = ta.selectionEnd;
    const text = editorContent;
    const lineStart = text.lastIndexOf('\n', start - 1) + 1;
    const lineEnd = text.indexOf('\n', end);
    const actualEnd = lineEnd === -1 ? text.length : lineEnd;
    const selectedLines = text.substring(lineStart, actualEnd);
    const lines = selectedLines.split('\n');
    const prefixed = lines.map((line) => {
      if (line.startsWith(prefix)) return line.substring(prefix.length);
      return prefix + line;
    }).join('\n');
    const newContent = text.substring(0, lineStart) + prefixed + text.substring(actualEnd);
    setEditorContent(newContent);
    requestAnimationFrame(() => {
      ta.focus();
      ta.selectionStart = lineStart;
      ta.selectionEnd = lineStart + prefixed.length;
    });
  }, [editorContent]);

  // Toolbar actions
  const toolbarActions = {
    h1: () => prefixLines('# '),
    h2: () => prefixLines('## '),
    h3: () => prefixLines('### '),
    bold: () => wrapSelection('**'),
    italic: () => wrapSelection('*'),
    strikethrough: () => wrapSelection('~~'),
    inlineCode: () => wrapSelection('`'),
    codeBlock: () => insertAtCursor('\n```\n\n```\n', 5),
    link: () => wrapSelection('[', '](url)'),
    image: () => insertAtCursor('![alt](url)', 2),
    ul: () => prefixLines('- '),
    ol: () => prefixLines('1. '),
    taskList: () => prefixLines('- [ ] '),
    blockquote: () => prefixLines('> '),
    hr: () => insertAtCursor('\n---\n'),
    table: () => insertAtCursor('\n| Column 1 | Column 2 | Column 3 |\n|----------|----------|----------|\n| Cell 1   | Cell 2   | Cell 3   |\n| Cell 4   | Cell 5   | Cell 6   |\n', 3),
    mathInline: () => wrapSelection('$'),
    mathBlock: () => insertAtCursor('\n$$\n\n$$\n', 4),
    mermaid: () => insertAtCursor('\n```mermaid\ngraph LR\n    A[Start] --> B[End]\n```\n', 15),
  };

  // --- Keyboard shortcuts ---
  const handleKeyDown = useCallback((e) => {
    if (e.ctrlKey || e.metaKey) {
      switch (e.key.toLowerCase()) {
        case 'b': e.preventDefault(); toolbarActions.bold(); break;
        case 'i': e.preventDefault(); toolbarActions.italic(); break;
        case 'k': e.preventDefault(); toolbarActions.link(); break;
        case 's': e.preventDefault(); break; // Prevent browser save, auto-save handles it
        case 'd': e.preventDefault(); toolbarActions.strikethrough(); break;
        default: break;
      }
    }
    // Tab handling
    if (e.key === 'Tab') {
      e.preventDefault();
      const ta = editorRef.current;
      if (!ta) return;
      const start = ta.selectionStart;
      const end = ta.selectionEnd;
      if (e.shiftKey) {
        // Dedent
        const lineStart = editorContent.lastIndexOf('\n', start - 1) + 1;
        const line = editorContent.substring(lineStart);
        if (line.startsWith('  ')) {
          const newContent = editorContent.substring(0, lineStart) + editorContent.substring(lineStart + 2);
          setEditorContent(newContent);
          requestAnimationFrame(() => {
            ta.selectionStart = Math.max(lineStart, start - 2);
            ta.selectionEnd = Math.max(lineStart, end - 2);
          });
        }
      } else {
        // Indent
        const newContent = editorContent.substring(0, start) + '  ' + editorContent.substring(end);
        setEditorContent(newContent);
        requestAnimationFrame(() => {
          ta.selectionStart = ta.selectionEnd = start + 2;
        });
      }
    }
  }, [editorContent, toolbarActions]);

  // --- Image paste handler ---
  const handlePaste = useCallback((e) => {
    const items = e.clipboardData?.items;
    if (!items) return;
    for (const item of items) {
      if (item.type.startsWith('image/')) {
        e.preventDefault();
        const file = item.getAsFile();
        if (!file) return;
        const reader = new FileReader();
        reader.onload = (ev) => {
          const dataUrl = ev.target.result;
          insertAtCursor(`![image](${dataUrl})`);
        };
        reader.readAsDataURL(file);
        return;
      }
    }
  }, [insertAtCursor]);

  // --- Image drop handler ---
  const handleDrop = useCallback((e) => {
    e.preventDefault();
    const files = e.dataTransfer?.files;
    if (!files) return;
    for (const file of files) {
      if (file.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onload = (ev) => {
          insertAtCursor(`![${file.name}](${ev.target.result})`);
        };
        reader.readAsDataURL(file);
      }
    }
  }, [insertAtCursor]);

  // --- Import .md file ---
  const handleImportFile = () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.md,.markdown,.txt';
    input.onchange = (e) => {
      const file = e.target.files[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = (ev) => {
        const doc = createDocument(file.name.replace(/\.(md|markdown|txt)$/, ''), ev.target.result);
        setDocuments((prev) => {
          const next = [doc, ...prev];
          saveDocuments(next);
          return next;
        });
        setActiveDocId(doc.id);
        setShowLibrary(false);
      };
      reader.readAsText(file);
    };
    input.click();
  };

  // --- Export ---
  const handleExport = () => {
    const blob = new Blob([editorContent], { type: 'text/markdown;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${docTitle || 'document'}.md`;
    a.click();
    URL.revokeObjectURL(url);
  };

  // --- Copy to clipboard ---
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(editorContent);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* fallback */
      const ta = document.createElement('textarea');
      ta.value = editorContent;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand('copy');
      document.body.removeChild(ta);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  // --- Print ---
  const handlePrint = () => {
    const previewEl = previewRef.current;
    if (!previewEl) return;
    const win = window.open('', '_blank');
    if (!win) return;
    win.document.write(`<!DOCTYPE html><html><head>
      <title>${docTitle}</title>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.25/dist/katex.min.css">
      <style>
        body{font-family:system-ui,-apple-system,sans-serif;max-width:800px;margin:0 auto;padding:2rem;color:#1a1a1a;line-height:1.7}
        h1{border-bottom:2px solid #e5e7eb;padding-bottom:.5rem}
        pre{background:#f3f4f6;padding:1rem;border-radius:.5rem;overflow-x:auto;font-size:.875rem}
        code{font-family:'JetBrains Mono',monospace;font-size:.875em}
        table{border-collapse:collapse;width:100%}
        th,td{border:1px solid #d1d5db;padding:.5rem .75rem;text-align:left}
        th{background:#f9fafb;font-weight:600}
        blockquote{border-left:4px solid #6366f1;margin:1rem 0;padding:.5rem 1rem;background:#f5f3ff;color:#4338ca}
        img{max-width:100%;border-radius:.5rem}
        hr{border:none;border-top:2px solid #e5e7eb;margin:2rem 0}
        .task-list-item{list-style:none}
        .task-list-item input{margin-right:.5rem}
        @media print{body{padding:0}}
      </style>
    </head><body>${previewEl.innerHTML}</body></html>`);
    win.document.close();
    win.focus();
    setTimeout(() => { win.print(); }, 300);
  };

  // --- Scroll sync ---
  const handleEditorScroll = useCallback(() => {
    if (scrollSyncRef.current || viewMode !== 'split' || activeScrollPaneRef.current !== 'editor') return;
    const editor = editorRef.current;
    const preview = previewRef.current;
    if (!editor || !preview) return;
    scrollSyncRef.current = true;
    const pct = editor.scrollTop / (editor.scrollHeight - editor.clientHeight || 1);
    preview.scrollTop = pct * (preview.scrollHeight - preview.clientHeight || 1);
    requestAnimationFrame(() => { scrollSyncRef.current = false; });
  }, [viewMode]);

  const handlePreviewScroll = useCallback(() => {
    if (scrollSyncRef.current || viewMode !== 'split' || activeScrollPaneRef.current !== 'preview') return;
    const editor = editorRef.current;
    const preview = previewRef.current;
    if (!editor || !preview) return;
    scrollSyncRef.current = true;
    const pct = preview.scrollTop / (preview.scrollHeight - preview.clientHeight || 1);
    editor.scrollTop = pct * (editor.scrollHeight - editor.clientHeight || 1);
    requestAnimationFrame(() => { scrollSyncRef.current = false; });
  }, [viewMode]);

  // --- Word & char count ---
  const wordCount = editorContent.trim() ? editorContent.trim().split(/\s+/).length : 0;
  const charCount = editorContent.length;

  // --- Filtered documents ---
  const filteredDocs = searchQuery
    ? documents.filter(
        (d) =>
          d.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          d.content.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : documents;

  // --- Format date ---
  const formatDate = (ts) => {
    const d = new Date(ts);
    const now = new Date();
    const diffMs = now - d;
    const diffMin = Math.floor(diffMs / 60000);
    if (diffMin < 1) return 'just now';
    if (diffMin < 60) return `${diffMin}m ago`;
    const diffH = Math.floor(diffMin / 60);
    if (diffH < 24) return `${diffH}h ago`;
    const diffD = Math.floor(diffH / 24);
    if (diffD < 7) return `${diffD}d ago`;
    return d.toLocaleDateString('de-DE', { day: '2-digit', month: '2-digit', year: '2-digit' });
  };

  // --- Focus title input when editing ---
  useEffect(() => {
    if (editingTitle && titleInputRef.current) titleInputRef.current.focus();
  }, [editingTitle]);

  // --- ReactMarkdown components ---
  const markdownComponents = useMemo(() => ({
    pre({ children }) {
      return <div className="not-prose my-4">{children}</div>;
    },
    code({ className, children, ...props }) {
      const match = /language-(\w+)/.exec(className || '');
      if (match) {
        const code = String(children).replace(/\n$/, '');
        if (match[1] === 'mermaid') return <MermaidBlock code={code} />;
        return (
          <SyntaxHighlighter
            style={isDark ? oneDark : oneLight}
            language={match[1]}
            customStyle={{ borderRadius: '0.5rem', fontSize: '0.875rem', margin: 0 }}
          >
            {code}
          </SyntaxHighlighter>
        );
      }
      // Inline code
      return (
        <code
          className="bg-stone-200 dark:bg-stone-700 px-1.5 py-0.5 rounded text-[0.875em] font-mono"
          {...props}
        >
          {children}
        </code>
      );
    },
    table({ children }) {
      return (
        <div className="overflow-x-auto my-4">
          <table className="min-w-full border-collapse border border-stone-300 dark:border-stone-600 rounded-lg overflow-hidden">
            {children}
          </table>
        </div>
      );
    },
    th({ children }) {
      return (
        <th className="border border-stone-300 dark:border-stone-600 px-4 py-2 bg-stone-100 dark:bg-stone-800 font-semibold text-left">
          {children}
        </th>
      );
    },
    td({ children }) {
      return (
        <td className="border border-stone-300 dark:border-stone-600 px-4 py-2">
          {children}
        </td>
      );
    },
    blockquote({ children }) {
      return (
        <blockquote className="border-l-4 border-indigo-500 bg-indigo-50 dark:bg-indigo-950/30 pl-4 py-2 my-4 italic text-stone-700 dark:text-stone-300">
          {children}
        </blockquote>
      );
    },
    a({ href, children }) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" className="text-indigo-600 dark:text-indigo-400 underline hover:text-indigo-800 dark:hover:text-indigo-300">
          {children}
        </a>
      );
    },
    img({ src, alt }) {
      return <img src={src} alt={alt} className="max-w-full rounded-lg shadow-sm my-4" loading="lazy" />;
    },
    hr() {
      return <hr className="border-stone-300 dark:border-stone-600 my-8" />;
    },
    input({ type, checked, ...props }) {
      if (type === 'checkbox') {
        return <input type="checkbox" checked={checked} readOnly className="mr-2 accent-indigo-600" />;
      }
      return <input type={type} {...props} />;
    },
  }), [isDark]);

  // ─── RENDER ────────────────────────────────────────────────
  return (
    <div className="mdpad-root fixed inset-0 z-50 flex flex-col bg-white dark:bg-stone-900 text-stone-900 dark:text-stone-100">
      {/* ── TOP BAR ──────────────────────────────────────── */}
      <div className="mdpad-no-print flex items-center gap-2 px-2 sm:px-4 h-12 border-b border-stone-200 dark:border-stone-700 bg-stone-50 dark:bg-stone-800 shrink-0">
        {/* Back */}
        <a
          href="/tools"
          className="p-2 rounded-lg hover:bg-stone-200 dark:hover:bg-stone-700 transition-colors"
          title="Back to Tools"
        >
          <ArrowLeft size={18} />
        </a>

        {/* Library toggle */}
        <button
          onClick={() => setShowLibrary(!showLibrary)}
          className={`p-2 rounded-lg transition-colors ${showLibrary ? 'bg-indigo-100 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-400' : 'hover:bg-stone-200 dark:hover:bg-stone-700'}`}
          title="Document Library"
        >
          <BookOpen size={18} />
        </button>

        <div className="w-px h-6 bg-stone-300 dark:bg-stone-600 mx-1 hidden sm:block" />

        {/* Document title */}
        <div className="flex-1 min-w-0">
          {editingTitle ? (
            <input
              ref={titleInputRef}
              value={docTitle}
              onChange={(e) => setDocTitle(e.target.value)}
              onBlur={() => setEditingTitle(false)}
              onKeyDown={(e) => { if (e.key === 'Enter') setEditingTitle(false); }}
              className="w-full bg-white dark:bg-stone-700 border border-indigo-400 rounded px-2 py-1 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          ) : (
            <button
              onClick={() => setEditingTitle(true)}
              className="flex items-center gap-1.5 text-sm font-medium truncate max-w-xs hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
            >
              <FileText size={14} className="shrink-0 text-stone-400" />
              <span className="truncate">{docTitle || 'Untitled'}</span>
              <Edit3 size={12} className="shrink-0 text-stone-400" />
            </button>
          )}
        </div>

        {/* Save status */}
        <span className="hidden sm:flex items-center gap-1 text-xs text-stone-400">
          {saved ? <Check size={12} className="text-green-500" /> : <Clock size={12} />}
          {saved ? 'Saved' : 'Saving...'}
        </span>

        {/* Dark/Light mode toggle */}
        <button
          onClick={toggleDarkMode}
          className="p-2 rounded-lg hover:bg-stone-200 dark:hover:bg-stone-700 transition-colors"
          title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
        >
          {isDark ? <Sun size={16} /> : <Moon size={16} />}
        </button>

        {/* View mode toggle */}
        <div className="hidden sm:flex items-center bg-stone-200 dark:bg-stone-700 rounded-lg p-0.5">
          <button
            onClick={() => setViewMode('edit')}
            className={`px-2.5 py-1 rounded-md text-xs font-medium transition-all ${viewMode === 'edit' ? 'bg-white dark:bg-stone-600 shadow-sm text-stone-900 dark:text-stone-100' : 'text-stone-500 dark:text-stone-400 hover:text-stone-700 dark:hover:text-stone-200'}`}
          >
            <Edit3 size={14} />
          </button>
          <button
            onClick={() => setViewMode('split')}
            className={`px-2.5 py-1 rounded-md text-xs font-medium transition-all ${viewMode === 'split' ? 'bg-white dark:bg-stone-600 shadow-sm text-stone-900 dark:text-stone-100' : 'text-stone-500 dark:text-stone-400 hover:text-stone-700 dark:hover:text-stone-200'}`}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" /><line x1="12" y1="3" x2="12" y2="21" /></svg>
          </button>
          <button
            onClick={() => setViewMode('preview')}
            className={`px-2.5 py-1 rounded-md text-xs font-medium transition-all ${viewMode === 'preview' ? 'bg-white dark:bg-stone-600 shadow-sm text-stone-900 dark:text-stone-100' : 'text-stone-500 dark:text-stone-400 hover:text-stone-700 dark:hover:text-stone-200'}`}
          >
            <Eye size={14} />
          </button>
        </div>

        {/* Actions */}
        <div className="hidden sm:flex items-center gap-0.5">
          <button onClick={handleCopy} className="p-2 rounded-lg hover:bg-stone-200 dark:hover:bg-stone-700 transition-colors" title="Copy Markdown">
            {copied ? <Check size={16} className="text-green-500" /> : <Copy size={16} />}
          </button>
          <button onClick={handleExport} className="p-2 rounded-lg hover:bg-stone-200 dark:hover:bg-stone-700 transition-colors" title="Export .md">
            <Download size={16} />
          </button>
          <button onClick={handlePrint} className="p-2 rounded-lg hover:bg-stone-200 dark:hover:bg-stone-700 transition-colors" title="Print">
            <Printer size={16} />
          </button>
        </div>

        {/* Mobile menu */}
        <div className="sm:hidden relative">
          <button
            onClick={() => setShowMobileMenu(!showMobileMenu)}
            className="p-2 rounded-lg hover:bg-stone-200 dark:hover:bg-stone-700"
          >
            <MoreHorizontal size={18} />
          </button>
          {showMobileMenu && (
            <>
              <div className="fixed inset-0 z-40" onClick={() => setShowMobileMenu(false)} />
              <div className="absolute right-0 top-full mt-1 bg-white dark:bg-stone-800 border border-stone-200 dark:border-stone-700 rounded-xl shadow-xl z-50 py-2 w-56">
                {/* View modes */}
                <div className="px-3 py-1.5 text-xs font-semibold text-stone-400 uppercase">View</div>
                {[
                  { mode: 'edit', label: 'Editor', icon: Edit3 },
                  { mode: 'split', label: 'Split View', icon: Type },
                  { mode: 'preview', label: 'Preview', icon: Eye },
                ].map(({ mode, label, icon: I }) => (
                  <button
                    key={mode}
                    onClick={() => { setViewMode(mode); setShowMobileMenu(false); }}
                    className={`w-full flex items-center gap-3 px-4 py-2.5 text-sm hover:bg-stone-100 dark:hover:bg-stone-700 ${viewMode === mode ? 'text-indigo-600 dark:text-indigo-400 font-medium' : ''}`}
                  >
                    <I size={16} /> {label}
                  </button>
                ))}
                <div className="border-t border-stone-200 dark:border-stone-700 my-1" />
                <div className="px-3 py-1.5 text-xs font-semibold text-stone-400 uppercase">Actions</div>
                <button onClick={() => { handleCopy(); setShowMobileMenu(false); }} className="w-full flex items-center gap-3 px-4 py-2.5 text-sm hover:bg-stone-100 dark:hover:bg-stone-700">
                  <Copy size={16} /> Copy Markdown
                </button>
                <button onClick={() => { handleExport(); setShowMobileMenu(false); }} className="w-full flex items-center gap-3 px-4 py-2.5 text-sm hover:bg-stone-100 dark:hover:bg-stone-700">
                  <Download size={16} /> Export .md
                </button>
                <button onClick={() => { handleImportFile(); setShowMobileMenu(false); }} className="w-full flex items-center gap-3 px-4 py-2.5 text-sm hover:bg-stone-100 dark:hover:bg-stone-700">
                  <Upload size={16} /> Import .md
                </button>
                <button onClick={() => { handlePrint(); setShowMobileMenu(false); }} className="w-full flex items-center gap-3 px-4 py-2.5 text-sm hover:bg-stone-100 dark:hover:bg-stone-700">
                  <Printer size={16} /> Print
                </button>
                <div className="border-t border-stone-200 dark:border-stone-700 my-1" />
                <button onClick={() => { toggleDarkMode(); setShowMobileMenu(false); }} className="w-full flex items-center gap-3 px-4 py-2.5 text-sm hover:bg-stone-100 dark:hover:bg-stone-700">
                  {isDark ? <Sun size={16} /> : <Moon size={16} />} {isDark ? 'Light Mode' : 'Dark Mode'}
                </button>
              </div>
            </>
          )}
        </div>
      </div>

      {/* ── TOOLBAR (visible in edit/split mode) ─────────── */}
      {viewMode !== 'preview' && (
        <div className="mdpad-no-print flex items-center gap-0.5 px-2 sm:px-4 h-10 border-b border-stone-200 dark:border-stone-700 bg-stone-50/50 dark:bg-stone-800/50 overflow-x-auto shrink-0 scrollbar-none">
          <ToolbarButton icon="H1" label="Heading 1" onClick={toolbarActions.h1} />
          <ToolbarButton icon="H2" label="Heading 2" onClick={toolbarActions.h2} />
          <ToolbarButton icon="H3" label="Heading 3" onClick={toolbarActions.h3} />
          <ToolbarSep />
          <ToolbarButton icon={Bold} label="Bold (Ctrl+B)" onClick={toolbarActions.bold} />
          <ToolbarButton icon={Italic} label="Italic (Ctrl+I)" onClick={toolbarActions.italic} />
          <ToolbarButton icon="S" label="Strikethrough (Ctrl+D)" onClick={toolbarActions.strikethrough} />
          <ToolbarSep />
          <ToolbarButton icon={Code} label="Inline Code" onClick={toolbarActions.inlineCode} />
          <ToolbarButton icon="{ }" label="Code Block" onClick={toolbarActions.codeBlock} />
          <ToolbarSep />
          <ToolbarButton icon={Link2} label="Link (Ctrl+K)" onClick={toolbarActions.link} />
          <ToolbarButton icon={Image} label="Image" onClick={toolbarActions.image} />
          <ToolbarSep />
          <ToolbarButton icon={List} label="Bullet List" onClick={toolbarActions.ul} />
          <ToolbarButton icon={ListOrdered} label="Numbered List" onClick={toolbarActions.ol} />
          <ToolbarButton icon={Check} label="Task List" onClick={toolbarActions.taskList} />
          <ToolbarSep />
          <ToolbarButton icon="❝" label="Blockquote" onClick={toolbarActions.blockquote} />
          <ToolbarButton icon={Minus} label="Horizontal Rule" onClick={toolbarActions.hr} />
          <ToolbarButton icon={Table} label="Table" onClick={toolbarActions.table} />
          <ToolbarSep />
          <ToolbarButton icon="∑" label="Inline Math" onClick={toolbarActions.mathInline} />
          <ToolbarButton icon="∫" label="Math Block" onClick={toolbarActions.mathBlock} />
          <ToolbarSep />
          <ToolbarButton icon="◇" label="Mermaid Diagram" onClick={toolbarActions.mermaid} />
          <div className="flex-1" />
          <span className="hidden md:inline text-xs text-stone-400 whitespace-nowrap">
            {wordCount} words · {charCount} chars
          </span>
        </div>
      )}

      {/* ── MAIN CONTENT ─────────────────────────────────── */}
      <div className="mdpad-main flex-1 flex overflow-hidden relative">
        {/* ── LIBRARY SIDEBAR ──────────────────────────────── */}
        {showLibrary && (
          <>
            <div className="mdpad-no-print fixed inset-0 bg-black/30 z-30 sm:hidden" onClick={() => setShowLibrary(false)} />
            <div className="mdpad-no-print absolute sm:relative z-40 w-72 sm:w-72 h-full border-r border-stone-200 dark:border-stone-700 bg-white dark:bg-stone-850 dark:bg-stone-900 flex flex-col shrink-0 shadow-xl sm:shadow-none">
              {/* Library header */}
              <div className="flex items-center justify-between px-4 h-12 border-b border-stone-200 dark:border-stone-700">
                <span className="font-semibold text-sm">Documents</span>
                <div className="flex items-center gap-1">
                  <button
                    onClick={handleImportFile}
                    className="p-1.5 rounded-md hover:bg-stone-100 dark:hover:bg-stone-700 text-stone-500"
                    title="Import .md file"
                  >
                    <Upload size={15} />
                  </button>
                  <button
                    onClick={handleNewDocument}
                    className="p-1.5 rounded-md bg-indigo-600 hover:bg-indigo-700 text-white"
                    title="New Document"
                  >
                    <Plus size={15} />
                  </button>
                  <button
                    onClick={() => setShowLibrary(false)}
                    className="p-1.5 rounded-md hover:bg-stone-100 dark:hover:bg-stone-700 text-stone-500 sm:hidden"
                  >
                    <X size={15} />
                  </button>
                </div>
              </div>

              {/* Search */}
              <div className="px-3 py-2">
                <div className="relative">
                  <Search size={14} className="absolute left-2.5 top-1/2 -translate-y-1/2 text-stone-400" />
                  <input
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search documents..."
                    className="w-full bg-stone-100 dark:bg-stone-800 rounded-lg pl-8 pr-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 placeholder-stone-400"
                  />
                  {searchQuery && (
                    <button onClick={() => setSearchQuery('')} className="absolute right-2 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-600">
                      <X size={12} />
                    </button>
                  )}
                </div>
              </div>

              {/* Document list */}
              <div className="flex-1 overflow-y-auto px-2 pb-2">
                {filteredDocs.length === 0 ? (
                  <div className="text-center py-8 text-stone-400 text-sm">
                    {searchQuery ? 'No documents found' : 'No documents yet'}
                  </div>
                ) : (
                  filteredDocs
                    .sort((a, b) => b.updatedAt - a.updatedAt)
                    .map((doc) => (
                      <div
                        key={doc.id}
                        className={`group relative rounded-lg p-3 mb-1 cursor-pointer transition-colors ${
                          doc.id === activeDocId
                            ? 'bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-800'
                            : 'hover:bg-stone-100 dark:hover:bg-stone-800 border border-transparent'
                        }`}
                        onClick={() => handleSelectDocument(doc.id)}
                      >
                        <div className="flex items-start justify-between gap-2">
                          <div className="min-w-0 flex-1">
                            <div className="font-medium text-sm truncate">{doc.title || 'Untitled'}</div>
                            <div className="text-xs text-stone-400 mt-0.5 flex items-center gap-1">
                              <Clock size={10} />
                              {formatDate(doc.updatedAt)}
                            </div>
                            <div className="text-xs text-stone-400 mt-1 line-clamp-2 leading-relaxed">
                              {doc.content.replace(/[#*`\[\]()>_~|\\-]/g, '').substring(0, 100)}
                            </div>
                          </div>
                          <div className="flex items-center gap-0.5 opacity-0 group-hover:opacity-100 transition-opacity shrink-0">
                            <button
                              onClick={(e) => { e.stopPropagation(); handleDuplicateDocument(doc); }}
                              className="p-1 rounded hover:bg-stone-200 dark:hover:bg-stone-600 text-stone-400 hover:text-stone-600 dark:hover:text-stone-200"
                              title="Duplicate"
                            >
                              <Copy size={13} />
                            </button>
                            <button
                              onClick={(e) => { e.stopPropagation(); setShowDeleteConfirm(doc.id); }}
                              className="p-1 rounded hover:bg-red-100 dark:hover:bg-red-900/30 text-stone-400 hover:text-red-600 dark:hover:text-red-400"
                              title="Delete"
                            >
                              <Trash2 size={13} />
                            </button>
                          </div>
                        </div>

                        {/* Delete confirmation */}
                        {showDeleteConfirm === doc.id && (
                          <div
                            className="absolute inset-0 bg-white dark:bg-stone-800 rounded-lg border border-red-300 dark:border-red-800 flex items-center justify-center gap-2 p-2 z-10"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <span className="text-xs text-red-600 dark:text-red-400 font-medium">Delete?</span>
                            <button
                              onClick={(e) => { e.stopPropagation(); handleDeleteDocument(doc.id); }}
                              className="px-2.5 py-1 bg-red-600 text-white rounded-md text-xs font-medium hover:bg-red-700"
                            >
                              Yes
                            </button>
                            <button
                              onClick={(e) => { e.stopPropagation(); setShowDeleteConfirm(null); }}
                              className="px-2.5 py-1 bg-stone-200 dark:bg-stone-600 rounded-md text-xs font-medium hover:bg-stone-300 dark:hover:bg-stone-500"
                            >
                              No
                            </button>
                          </div>
                        )}
                      </div>
                    ))
                )}
              </div>

              {/* Library footer */}
              <div className="px-4 py-2 border-t border-stone-200 dark:border-stone-700 text-xs text-stone-400 text-center">
                {documents.length} document{documents.length !== 1 ? 's' : ''} · Stored locally
              </div>
            </div>
          </>
        )}

        {/* ── EDITOR PANE ─────────────────────────────────── */}
        {(viewMode === 'edit' || viewMode === 'split') && (
          <div
            className={`mdpad-editor-pane flex flex-col ${viewMode === 'split' ? 'w-1/2' : 'flex-1'} ${viewMode === 'split' ? 'border-r border-stone-200 dark:border-stone-700' : ''}`}
            onMouseEnter={() => { activeScrollPaneRef.current = 'editor'; }}
            onTouchStart={() => { activeScrollPaneRef.current = 'editor'; }}
          >
            <textarea
              ref={editorRef}
              value={editorContent}
              onChange={(e) => setEditorContent(e.target.value)}
              onKeyDown={handleKeyDown}
              onPaste={handlePaste}
              onDrop={handleDrop}
              onDragOver={(e) => e.preventDefault()}
              onScroll={handleEditorScroll}
              className="flex-1 w-full resize-none p-4 sm:p-6 bg-white dark:bg-stone-900 text-stone-800 dark:text-stone-200 font-mono text-sm leading-relaxed focus:outline-none placeholder-stone-400"
              placeholder="Start writing markdown..."
              spellCheck={false}
              style={{ tabSize: 2, MozTabSize: 2, scrollbarGutter: 'stable both-edges' }}
            />
          </div>
        )}

        {/* ── PREVIEW PANE ────────────────────────────────── */}
          <div
            ref={previewRef}
            onScroll={handlePreviewScroll}
            onMouseEnter={() => { activeScrollPaneRef.current = 'preview'; }}
            onTouchStart={() => { activeScrollPaneRef.current = 'preview'; }}
            style={{ scrollbarGutter: 'stable' }}
            className={`mdpad-preview-pane overflow-y-auto ${
              viewMode === 'preview' ? 'flex-1' : viewMode === 'split' ? 'w-1/2' : 'absolute -left-[9999px] w-[800px]'
            } bg-white dark:bg-stone-900`}
          >
          <div className="mdpad-preview-content max-w-3xl mx-auto p-4 sm:p-8 prose prose-stone dark:prose-invert prose-headings:font-bold prose-a:text-indigo-600 dark:prose-a:text-indigo-400 prose-img:rounded-lg prose-pre:bg-transparent prose-pre:p-0">
            {previewContent ? (
              <ReactMarkdown
                remarkPlugins={REMARK_PLUGINS}
                rehypePlugins={REHYPE_PLUGINS}
                components={markdownComponents}
              >
                {previewContent}
              </ReactMarkdown>
            ) : (
              <div className="text-stone-400 dark:text-stone-500 text-center py-20">
                <Eye size={48} className="mx-auto mb-4 opacity-30" />
                <p className="text-lg">Nothing to preview</p>
                <p className="text-sm">Start writing in the editor</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* ── BOTTOM STATUS BAR ────────────────────────────── */}
      <div className="mdpad-no-print flex items-center justify-between px-3 sm:px-4 h-7 border-t border-stone-200 dark:border-stone-700 bg-stone-50 dark:bg-stone-800 text-[11px] text-stone-400 shrink-0">
        <div className="flex items-center gap-3">
          <span>Markdown</span>
          <span className="hidden sm:inline">{wordCount} words</span>
          <span className="hidden sm:inline">{charCount} characters</span>
          <span className="hidden sm:inline">{editorContent.split('\n').length} lines</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="sm:hidden">{wordCount}w · {charCount}c</span>
          <span className="hidden sm:inline">UTF-8</span>
          <span className="hidden sm:inline">
            {viewMode === 'edit' ? 'Editor' : viewMode === 'split' ? 'Split' : 'Preview'}
          </span>
          <span className={`flex items-center gap-1 ${saved ? 'text-green-500' : 'text-amber-500'}`}>
            {saved ? <Check size={10} /> : <Clock size={10} />}
            {saved ? 'Saved' : 'Unsaved'}
          </span>
        </div>
      </div>
    </div>
  );
}
