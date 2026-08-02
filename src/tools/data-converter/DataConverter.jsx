import React, { useState, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowLeft, ArrowRight, Copy, Check, Trash2, Download, Upload, RefreshCw,
  AlertTriangle, ChevronDown, Minimize2, Maximize2, FileJson, X, Braces,
  ArrowLeftRight, Sparkles
} from 'lucide-react';
import { navigate } from '../../utils/navigation';
import yaml from 'js-yaml';
import { parse as tomlParse, stringify as tomlStringify } from 'smol-toml';

// ── Formats ──
const FORMATS = [
  { id: 'json', name: 'JSON', ext: '.json', mime: 'application/json', color: 'from-amber-500 to-orange-500' },
  { id: 'yaml', name: 'YAML', ext: '.yaml', mime: 'text/yaml', color: 'from-rose-500 to-pink-500' },
  { id: 'toml', name: 'TOML', ext: '.toml', mime: 'text/plain', color: 'from-cyan-500 to-blue-500' },
];

// ── Auto-detect format ──
function detectFormat(text) {
  const trimmed = text.trim();
  if (!trimmed) return null;

  // JSON: starts with { or [
  if (/^[\[{]/.test(trimmed)) {
    try { JSON.parse(trimmed); return 'json'; } catch { /* not valid JSON */ }
  }

  // TOML: has [section] headers or key = value pairs
  if (/^\[[\w.-]+\]/m.test(trimmed) || /^[\w.-]+\s*=\s*/m.test(trimmed)) {
    try { tomlParse(trimmed); return 'toml'; } catch { /* not valid TOML */ }
  }

  // YAML: try parsing (YAML is flexible, so check last)
  try {
    const parsed = yaml.load(trimmed);
    if (typeof parsed === 'object' && parsed !== null) return 'yaml';
  } catch { /* not valid YAML */ }

  return null;
}

// ── Parse any format to JS object ──
function parseInput(text, format) {
  const trimmed = text.trim();
  if (!trimmed) throw new Error('Input is empty');

  switch (format) {
    case 'json':
      return JSON.parse(trimmed);
    case 'yaml':
      return yaml.load(trimmed);
    case 'toml':
      return tomlParse(trimmed);
    default:
      throw new Error(`Unknown format: ${format}`);
  }
}

// ── Stringify JS object to any format ──
function stringifyOutput(data, format, options = {}) {
  switch (format) {
    case 'json':
      return options.minify
        ? JSON.stringify(data)
        : JSON.stringify(data, null, options.indent || 2);
    case 'yaml':
      return yaml.dump(data, {
        indent: options.indent || 2,
        lineWidth: options.lineWidth || 120,
        noRefs: true,
        sortKeys: options.sortKeys || false
      });
    case 'toml':
      return tomlStringify(data);
    default:
      throw new Error(`Unknown format: ${format}`);
  }
}

// ── Sample data for "Try it" ──
const SAMPLE_DATA = {
  json: `{
  "database": {
    "host": "localhost",
    "port": 5432,
    "name": "myapp_production",
    "credentials": {
      "username": "admin",
      "password": "s3cret"
    }
  },
  "server": {
    "host": "0.0.0.0",
    "port": 8080,
    "debug": false,
    "allowed_origins": [
      "https://example.com",
      "https://api.example.com"
    ]
  },
  "features": {
    "enable_cache": true,
    "cache_ttl": 3600,
    "max_connections": 100
  }
}`,
  yaml: `database:
  host: localhost
  port: 5432
  name: myapp_production
  credentials:
    username: admin
    password: s3cret

server:
  host: 0.0.0.0
  port: 8080
  debug: false
  allowed_origins:
    - https://example.com
    - https://api.example.com

features:
  enable_cache: true
  cache_ttl: 3600
  max_connections: 100`,
  toml: `[database]
host = "localhost"
port = 5432
name = "myapp_production"

[database.credentials]
username = "admin"
password = "s3cret"

[server]
host = "0.0.0.0"
port = 8080
debug = false
allowed_origins = ["https://example.com", "https://api.example.com"]

[features]
enable_cache = true
cache_ttl = 3600
max_connections = 100`
};

// ════════════════════════════════════════
// DataConverter Main Component
// ════════════════════════════════════════
export default function DataConverter() {
  const [inputText, setInputText] = useState('');
  const [outputText, setOutputText] = useState('');
  const [inputFormat, setInputFormat] = useState('json');
  const [outputFormat, setOutputFormat] = useState('yaml');
  const [error, setError] = useState(null);
  const [copied, setCopied] = useState(false);
  const [indent, setIndent] = useState(2);
  const [minify, setMinify] = useState(false);
  const [sortKeys, setSortKeys] = useState(false);
  const [autoDetected, setAutoDetected] = useState(null);
  const [showOptions, setShowOptions] = useState(false);
  const [conversionCount, setConversionCount] = useState(0);
  const fileInputRef = useRef(null);

  // ── Convert ──
  const convert = useCallback((text = inputText, fromFormat = inputFormat, toFormat = outputFormat) => {
    setError(null);
    setOutputText('');
    if (!text.trim()) return;

    try {
      const parsed = parseInput(text, fromFormat);
      const result = stringifyOutput(parsed, toFormat, { indent, minify, sortKeys });
      setOutputText(result);
      setConversionCount(c => c + 1);
    } catch (err) {
      setError(err.message);
    }
  }, [inputText, inputFormat, outputFormat, indent, minify, sortKeys]);

  // ── Auto-detect on paste / input change ──
  const handleInputChange = (text) => {
    setInputText(text);
    setError(null);
    setOutputText('');

    const detected = detectFormat(text);
    if (detected) {
      setAutoDetected(detected);
      if (detected !== inputFormat) {
        setInputFormat(detected);
        // Auto-set output format to something different
        if (detected === outputFormat) {
          const otherFormats = FORMATS.filter(f => f.id !== detected);
          setOutputFormat(otherFormats[0].id);
        }
      }
    } else {
      setAutoDetected(null);
    }
  };

  // ── Swap ──
  const handleSwap = () => {
    const oldInput = inputFormat;
    const oldOutput = outputFormat;
    setInputFormat(oldOutput);
    setOutputFormat(oldInput);
    if (outputText) {
      setInputText(outputText);
      setOutputText('');
      // Auto-convert after swap
      setTimeout(() => {
        try {
          const parsed = parseInput(outputText, oldOutput);
          const result = stringifyOutput(parsed, oldInput, { indent, minify, sortKeys });
          setOutputText(result);
        } catch (err) {
          setError(err.message);
        }
      }, 0);
    }
  };

  // ── Copy ──
  const handleCopy = () => {
    if (!outputText) return;
    navigator.clipboard.writeText(outputText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // ── Download ──
  const handleDownload = () => {
    if (!outputText) return;
    const fmt = FORMATS.find(f => f.id === outputFormat);
    const blob = new Blob([outputText], { type: fmt?.mime || 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `converted${fmt?.ext || '.txt'}`;
    a.click();
    URL.revokeObjectURL(url);
  };

  // ── File upload ──
  const handleFileUpload = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => {
      const text = ev.target.result;
      handleInputChange(text);
    };
    reader.readAsText(file);
    e.target.value = '';
  };

  // ── Load sample ──
  const handleLoadSample = (fmt) => {
    setInputFormat(fmt);
    setInputText(SAMPLE_DATA[fmt]);
    setAutoDetected(fmt);
    setError(null);
    setOutputText('');
    // Set output to a different format
    const otherFormats = FORMATS.filter(f => f.id !== fmt);
    setOutputFormat(otherFormats[0].id);
  };

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
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-teal-500 to-cyan-600 flex items-center justify-center">
                <ArrowLeftRight size={18} className="text-white" />
              </div>
              <div>
                <h1 className="text-lg font-bold text-stone-900 dark:text-stone-100 leading-tight">Data Converter</h1>
                <p className="text-xs text-stone-500 dark:text-stone-400 hidden sm:block">
                  JSON ↔ YAML ↔ TOML{conversionCount > 0 && ` • ${conversionCount} conversions`}
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setShowOptions(!showOptions)}
              className="flex items-center gap-1.5 px-3 py-2 bg-stone-100 dark:bg-stone-800 rounded-xl text-sm font-medium text-stone-600 dark:text-stone-400 hover:bg-stone-200 dark:hover:bg-stone-700 transition-colors"
            >
              <Braces size={16} />
              <span className="hidden sm:inline">Options</span>
              <ChevronDown size={14} className={`transition-transform ${showOptions ? 'rotate-180' : ''}`} />
            </button>
          </div>
        </div>

        {/* Options Panel */}
        <AnimatePresence>
          {showOptions && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="border-t border-stone-200 dark:border-stone-700 overflow-hidden"
            >
              <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex flex-wrap gap-4 items-center">
                <div className="flex items-center gap-2">
                  <label className="text-xs font-medium text-stone-500 dark:text-stone-400">Indent:</label>
                  <select
                    value={indent}
                    onChange={e => setIndent(Number(e.target.value))}
                    className="px-2 py-1 bg-stone-50 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 rounded-lg text-sm text-stone-700 dark:text-stone-300 focus:outline-none"
                  >
                    <option value={2}>2 spaces</option>
                    <option value={4}>4 spaces</option>
                    <option value={8}>8 spaces</option>
                  </select>
                </div>
                <label className="flex items-center gap-2 text-sm text-stone-600 dark:text-stone-400 cursor-pointer">
                  <input type="checkbox" checked={minify} onChange={e => setMinify(e.target.checked)} className="rounded border-stone-300 text-teal-600 focus:ring-teal-500" />
                  Minify JSON
                </label>
                <label className="flex items-center gap-2 text-sm text-stone-600 dark:text-stone-400 cursor-pointer">
                  <input type="checkbox" checked={sortKeys} onChange={e => setSortKeys(e.target.checked)} className="rounded border-stone-300 text-teal-600 focus:ring-teal-500" />
                  Sort keys (YAML)
                </label>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
        {/* ═══ Quick samples ═══ */}
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="text-xs font-medium text-stone-500 dark:text-stone-400 self-center">Try it:</span>
          {FORMATS.map(fmt => (
            <button
              key={fmt.id}
              onClick={() => handleLoadSample(fmt.id)}
              className="px-3 py-1.5 bg-white dark:bg-stone-800 border border-stone-200 dark:border-stone-700 rounded-lg text-xs font-medium text-stone-600 dark:text-stone-400 hover:bg-stone-50 dark:hover:bg-stone-700 transition-colors"
            >
              Sample {fmt.name}
            </button>
          ))}
          <button
            onClick={() => fileInputRef.current?.click()}
            className="flex items-center gap-1 px-3 py-1.5 bg-white dark:bg-stone-800 border border-stone-200 dark:border-stone-700 rounded-lg text-xs font-medium text-stone-600 dark:text-stone-400 hover:bg-stone-50 dark:hover:bg-stone-700 transition-colors"
          >
            <Upload size={12} /> Upload File
          </button>
          <input ref={fileInputRef} type="file" accept=".json,.yaml,.yml,.toml,.txt" onChange={handleFileUpload} className="hidden" />
        </div>

        {/* ═══ Format Selectors + Swap ═══ */}
        <div className="flex items-center justify-center gap-3 mb-4">
          <FormatSelector
            value={inputFormat}
            onChange={v => { setInputFormat(v); setError(null); setOutputText(''); }}
            label="From"
          />

          <button
            onClick={handleSwap}
            className="p-2.5 bg-white dark:bg-stone-800 border border-stone-200 dark:border-stone-700 rounded-xl hover:bg-stone-50 dark:hover:bg-stone-700 transition-all hover:scale-110 group"
            title="Swap formats"
          >
            <ArrowLeftRight size={18} className="text-stone-500 group-hover:text-teal-600 transition-colors" />
          </button>

          <FormatSelector
            value={outputFormat}
            onChange={v => { setOutputFormat(v); setError(null); setOutputText(''); }}
            label="To"
          />
        </div>

        {/* ═══ Auto-detect badge ═══ */}
        <AnimatePresence>
          {autoDetected && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              className="flex justify-center mb-4"
            >
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-teal-50 dark:bg-teal-900/30 border border-teal-200 dark:border-teal-800 rounded-full text-xs font-medium text-teal-700 dark:text-teal-300">
                <Sparkles size={12} />
                Auto-detected: {FORMATS.find(f => f.id === autoDetected)?.name}
              </span>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ═══ Editor Panels ═══ */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
          {/* Input Panel */}
          <div className="flex flex-col">
            <div className="flex items-center justify-between px-4 py-2 bg-stone-100 dark:bg-stone-800 rounded-t-xl border border-b-0 border-stone-200 dark:border-stone-700">
              <div className="flex items-center gap-2">
                <div className={`w-2.5 h-2.5 rounded-full bg-gradient-to-r ${FORMATS.find(f => f.id === inputFormat)?.color}`} />
                <span className="text-sm font-medium text-stone-700 dark:text-stone-300">Input</span>
                <span className="text-xs text-stone-400">{FORMATS.find(f => f.id === inputFormat)?.name}</span>
              </div>
              <div className="flex items-center gap-1">
                {inputText && (
                  <span className="text-xs text-stone-400 mr-2">{inputText.length} chars</span>
                )}
                <button
                  onClick={() => { setInputText(''); setOutputText(''); setError(null); setAutoDetected(null); }}
                  className="p-1 rounded-lg hover:bg-stone-200 dark:hover:bg-stone-700 transition-colors text-stone-400"
                  title="Clear"
                >
                  <Trash2 size={14} />
                </button>
              </div>
            </div>
            <textarea
              value={inputText}
              onChange={e => handleInputChange(e.target.value)}
              placeholder={`Paste your ${FORMATS.find(f => f.id === inputFormat)?.name} here...\n\nOr click "Try it" above to load sample data.`}
              spellCheck={false}
              className="flex-1 min-h-[300px] lg:min-h-[450px] w-full px-4 py-3 bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-700 rounded-b-xl text-sm font-mono text-stone-900 dark:text-stone-100 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-teal-500/50 focus:border-teal-500 resize-y leading-relaxed"
            />
          </div>

          {/* Output Panel */}
          <div className="flex flex-col">
            <div className="flex items-center justify-between px-4 py-2 bg-stone-100 dark:bg-stone-800 rounded-t-xl border border-b-0 border-stone-200 dark:border-stone-700">
              <div className="flex items-center gap-2">
                <div className={`w-2.5 h-2.5 rounded-full bg-gradient-to-r ${FORMATS.find(f => f.id === outputFormat)?.color}`} />
                <span className="text-sm font-medium text-stone-700 dark:text-stone-300">Output</span>
                <span className="text-xs text-stone-400">{FORMATS.find(f => f.id === outputFormat)?.name}</span>
              </div>
              <div className="flex items-center gap-1">
                {outputText && (
                  <span className="text-xs text-stone-400 mr-2">{outputText.length} chars</span>
                )}
                <button onClick={handleDownload} disabled={!outputText} className="p-1 rounded-lg hover:bg-stone-200 dark:hover:bg-stone-700 transition-colors text-stone-400 disabled:opacity-30" title="Download">
                  <Download size={14} />
                </button>
                <button
                  onClick={handleCopy}
                  disabled={!outputText}
                  className={`p-1 rounded-lg transition-colors disabled:opacity-30 ${copied ? 'text-green-500' : 'text-stone-400 hover:bg-stone-200 dark:hover:bg-stone-700'}`}
                  title="Copy"
                >
                  {copied ? <Check size={14} /> : <Copy size={14} />}
                </button>
              </div>
            </div>
            <div className="flex-1 min-h-[300px] lg:min-h-[450px] relative">
              <pre className="absolute inset-0 w-full h-full px-4 py-3 bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-700 rounded-b-xl text-sm font-mono text-stone-900 dark:text-stone-100 overflow-auto leading-relaxed whitespace-pre-wrap">
                {outputText || <span className="text-stone-400">Converted output will appear here...</span>}
              </pre>
            </div>
          </div>
        </div>

        {/* ═══ Error Banner ═══ */}
        <AnimatePresence>
          {error && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              className="mb-4 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl flex items-start gap-3"
            >
              <AlertTriangle size={18} className="text-red-500 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-medium text-red-700 dark:text-red-300">Conversion Error</p>
                <p className="text-xs text-red-600 dark:text-red-400 mt-1 font-mono">{error}</p>
              </div>
              <button onClick={() => setError(null)} className="ml-auto p-1 hover:bg-red-100 dark:hover:bg-red-900/30 rounded-lg transition-colors">
                <X size={14} className="text-red-400" />
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ═══ Convert Button ═══ */}
        <div className="flex justify-center">
          <button
            onClick={() => convert()}
            disabled={!inputText.trim()}
            className="flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-teal-500 to-cyan-600 text-white rounded-xl font-semibold text-sm hover:shadow-lg hover:shadow-teal-500/25 transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:shadow-none"
          >
            <RefreshCw size={18} />
            Convert {FORMATS.find(f => f.id === inputFormat)?.name} → {FORMATS.find(f => f.id === outputFormat)?.name}
          </button>
        </div>

        {/* ═══ Info Cards ═══ */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
          {FORMATS.map(fmt => (
            <div key={fmt.id} className="bg-white dark:bg-stone-800 border border-stone-200 dark:border-stone-700 rounded-xl p-4">
              <div className="flex items-center gap-2 mb-2">
                <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${fmt.color} flex items-center justify-center`}>
                  <FileJson size={16} className="text-white" />
                </div>
                <h3 className="font-bold text-stone-900 dark:text-stone-100">{fmt.name}</h3>
              </div>
              <p className="text-xs text-stone-500 dark:text-stone-400 leading-relaxed">
                {fmt.id === 'json' && 'JavaScript Object Notation. The most common data format for APIs and config files. Human-readable and widely supported.'}
                {fmt.id === 'yaml' && 'YAML Ain\'t Markup Language. Popular for config files (Docker, Kubernetes, CI/CD). Indentation-based, very readable.'}
                {fmt.id === 'toml' && 'Tom\'s Obvious Minimal Language. Used in Rust (Cargo.toml), Python (pyproject.toml), and more. Simple and unambiguous.'}
              </p>
            </div>
          ))}
        </div>

        {/* ═══ Privacy Note ═══ */}
        <div className="mt-6 text-center">
          <p className="text-xs text-stone-400 dark:text-stone-500">
            100% client-side — your data never leaves your browser.
          </p>
        </div>
      </div>
    </div>
  );
}

// ════════════════════════════════════════
// FormatSelector Component
// ════════════════════════════════════════
function FormatSelector({ value, onChange, label }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  const selected = FORMATS.find(f => f.id === value);

  React.useEffect(() => {
    const handler = (e) => { if (ref.current && !ref.current.contains(e.target)) setOpen(false); };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 px-4 py-2.5 bg-white dark:bg-stone-800 border border-stone-200 dark:border-stone-700 rounded-xl hover:bg-stone-50 dark:hover:bg-stone-700 transition-colors min-w-[120px]"
      >
        <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${selected?.color}`} />
        <div className="text-left">
          <p className="text-[10px] text-stone-400 leading-none">{label}</p>
          <p className="text-sm font-bold text-stone-900 dark:text-stone-100">{selected?.name}</p>
        </div>
        <ChevronDown size={14} className={`text-stone-400 ml-auto transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            className="absolute top-full mt-1 left-0 right-0 bg-white dark:bg-stone-800 border border-stone-200 dark:border-stone-700 rounded-xl shadow-xl z-50 overflow-hidden"
          >
            {FORMATS.map(fmt => (
              <button
                key={fmt.id}
                onClick={() => { onChange(fmt.id); setOpen(false); }}
                className={`w-full flex items-center gap-2 px-4 py-2.5 text-sm transition-colors ${value === fmt.id ? 'bg-teal-50 dark:bg-teal-900/30 text-teal-700 dark:text-teal-300 font-medium' : 'text-stone-700 dark:text-stone-300 hover:bg-stone-50 dark:hover:bg-stone-700'}`}
              >
                <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${fmt.color}`} />
                {fmt.name}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
