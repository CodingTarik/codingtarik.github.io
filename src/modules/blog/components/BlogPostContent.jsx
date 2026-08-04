import React, { useState, useEffect, useRef, useMemo } from 'react';
import Markdown from 'markdown-to-jsx';
import { useTheme } from '../../learnbuddy/context/ThemeContext';
import { 
  Copy, Check, Code2, Eye, 
  Info as InfoIcon,
  AlertTriangle as AlertTriangleIcon,
  XCircle as XCircleIcon,
  Lightbulb as LightbulbIcon,
  StickyNote as StickyNoteIcon,
  CheckCircle2 as CheckCircle2Icon,
  Flame as FlameIcon,
  Quote as QuoteIcon,
  ChevronDown, Youtube, ArrowUpDown 
} from 'lucide-react';
import { oneDark, oneLight } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import mermaid from 'mermaid';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';
import { Bar, Line, Pie, Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

import 'katex/dist/katex.min.css';
import { InlineMath, BlockMath } from 'react-katex';

import { 
  useReactTable, 
  getCoreRowModel, 
  getSortedRowModel, 
  flexRender 
} from '@tanstack/react-table';

import { themes } from 'prism-react-renderer';

import ts from 'react-syntax-highlighter/dist/esm/languages/prism/typescript';
import js from 'react-syntax-highlighter/dist/esm/languages/prism/javascript';
import jsx from 'react-syntax-highlighter/dist/esm/languages/prism/jsx';
import bash from 'react-syntax-highlighter/dist/esm/languages/prism/bash';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

SyntaxHighlighter.registerLanguage('ts', ts);
SyntaxHighlighter.registerLanguage('typescript', ts);
SyntaxHighlighter.registerLanguage('tsx', ts);
SyntaxHighlighter.registerLanguage('js', js);
SyntaxHighlighter.registerLanguage('jsx', jsx);
SyntaxHighlighter.registerLanguage('bash', bash);
SyntaxHighlighter.registerLanguage('sh', bash);

const modifyTheme = (theme) => {
  const newTheme = { ...theme };
  const preKey = 'pre[class*="language-"]';
  const codeKey = 'code[class*="language-"]';
  newTheme[preKey] = { ...(newTheme[preKey] || {}), background: 'transparent' };
  newTheme[codeKey] = { ...(newTheme[codeKey] || {}), background: 'transparent' };
  return newTheme;
};

const modifiedOneDark = modifyTheme(oneDark);
const modifiedOneLight = modifyTheme(oneLight);

const languageNames = {
  js: 'JavaScript',
  jsx: 'JSX',
  ts: 'TypeScript',
  tsx: 'TSX',
  py: 'Python',
  java: 'Java',
  cpp: 'C++',
  c: 'C',
  cs: 'C#',
  php: 'PHP',
  rb: 'Ruby',
  go: 'Go',
  rs: 'Rust',
  swift: 'Swift',
  kt: 'Kotlin',
  sh: 'Shell',
  bash: 'Bash',
  sql: 'SQL',
  html: 'HTML',
  css: 'CSS',
  json: 'JSON',
  xml: 'XML',
  yaml: 'YAML',
  yml: 'YAML',
  md: 'Markdown',
  dockerfile: 'Dockerfile',
  diff: 'Diff',
  live: 'Live Sandbox',
  'react-live': 'Live Sandbox',
  'chart-bar': 'Bar Chart',
  'chart-line': 'Line Chart',
  'chart-pie': 'Pie Chart',
  'table-data': 'Interactive Table',
};

function extractCodeString(children) {
  if (typeof children === 'string') {
    return children;
  }
  if (Array.isArray(children)) {
    return children.map(child => extractCodeString(child)).join('');
  }
  if (React.isValidElement(children)) {
    return extractCodeString(children.props?.children || '');
  }
  return String(children || '');
}

const MarkdownCode = ({ className, children }) => {
  const isCodeBlock = className && /(?:language|lang)-/.test(className);
  if (isCodeBlock) {
    return <code className={className}>{children}</code>;
  }
  return (
    <code className="not-prose bg-secondary/10 text-secondary px-2 py-1 rounded-md font-mono text-sm">
      {children}
    </code>
  );
};

const findCodeElement = (node) => {
  if (!node) return null;
  if (React.isValidElement(node) && node.type === MarkdownCode) {
    return node;
  }
  if (Array.isArray(node)) {
    for (const child of node) {
      const found = findCodeElement(child);
      if (found) return found;
    }
  }
  if (React.isValidElement(node) && node.props?.children) {
    return findCodeElement(node.props.children);
  }
  return null;
};

const Callout = ({ children, type = 'info', title }) => {
  const configs = {
    info: {
      icon: <InfoIcon size={20} />,
      label: 'Info',
      wrapper: 'border-blue-500/40 bg-gradient-to-br from-blue-500/10 via-blue-500/5 to-transparent dark:from-blue-500/15 dark:via-blue-500/5',
      iconBox: 'bg-blue-500/15 text-blue-600 dark:text-blue-400 border-blue-500/30',
      labelClasses: 'text-blue-700 dark:text-blue-300',
      bar: 'bg-blue-500',
    },
    note: {
      icon: <StickyNoteIcon size={20} />,
      label: 'Note',
      wrapper: 'border-violet-500/40 bg-gradient-to-br from-violet-500/10 via-violet-500/5 to-transparent dark:from-violet-500/15 dark:via-violet-500/5',
      iconBox: 'bg-violet-500/15 text-violet-600 dark:text-violet-400 border-violet-500/30',
      labelClasses: 'text-violet-700 dark:text-violet-300',
      bar: 'bg-violet-500',
    },
    tip: {
      icon: <LightbulbIcon size={20} />,
      label: 'Tip',
      wrapper: 'border-emerald-500/40 bg-gradient-to-br from-emerald-500/10 via-emerald-500/5 to-transparent dark:from-emerald-500/15 dark:via-emerald-500/5',
      iconBox: 'bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border-emerald-500/30',
      labelClasses: 'text-emerald-700 dark:text-emerald-300',
      bar: 'bg-emerald-500',
    },
    success: {
      icon: <CheckCircle2Icon size={20} />,
      label: 'Success',
      wrapper: 'border-teal-500/40 bg-gradient-to-br from-teal-500/10 via-teal-500/5 to-transparent dark:from-teal-500/15 dark:via-teal-500/5',
      iconBox: 'bg-teal-500/15 text-teal-600 dark:text-teal-400 border-teal-500/30',
      labelClasses: 'text-teal-700 dark:text-teal-300',
      bar: 'bg-teal-500',
    },
    warning: {
      icon: <AlertTriangleIcon size={22} className="text-amber-500 animate-pulse" />,
      label: 'Warning',
      wrapper: 'border-amber-500/60 bg-gradient-to-br from-amber-500/20 via-orange-500/10 to-amber-950/30 dark:from-amber-500/25 dark:via-orange-950/30 dark:to-slate-900/50 shadow-xl shadow-amber-500/10 border-l-4 border-l-amber-500 backdrop-blur-sm',
      iconBox: 'bg-gradient-to-br from-amber-500 to-orange-500 text-white border-amber-400/50 shadow-md shadow-amber-500/25',
      labelClasses: 'text-amber-700 dark:text-amber-300 font-extrabold tracking-widest text-xs uppercase',
      bar: 'bg-gradient-to-b from-amber-400 via-amber-500 to-orange-500',
    },
    alert: {
      icon: <XCircleIcon size={20} />,
      label: 'Alert',
      wrapper: 'border-red-500/40 bg-gradient-to-br from-red-500/10 via-red-500/5 to-transparent dark:from-red-500/15 dark:via-red-500/5',
      iconBox: 'bg-red-500/15 text-red-600 dark:text-red-400 border-red-500/30',
      labelClasses: 'text-red-700 dark:text-red-300',
      bar: 'bg-red-500',
    },
    danger: {
      icon: <FlameIcon size={20} />,
      label: 'Danger',
      wrapper: 'border-rose-500/50 bg-gradient-to-br from-rose-500/15 via-rose-500/5 to-transparent dark:from-rose-500/20 dark:via-rose-500/5',
      iconBox: 'bg-rose-500/15 text-rose-600 dark:text-rose-400 border-rose-500/30',
      labelClasses: 'text-rose-700 dark:text-rose-300',
      bar: 'bg-rose-500',
    },
    quote: {
      icon: <QuoteIcon size={20} />,
      label: 'Quote',
      wrapper: 'border-slate-400/40 bg-gradient-to-br from-slate-500/10 via-slate-500/5 to-transparent dark:from-slate-400/10 dark:via-slate-400/5',
      iconBox: 'bg-slate-500/15 text-slate-600 dark:text-slate-300 border-slate-400/30',
      labelClasses: 'text-slate-700 dark:text-slate-300',
      bar: 'bg-slate-400',
    },
  };
  const cfg = configs[type] || configs.info;
  return (
    <div className={`not-prose my-6 relative rounded-2xl border p-5 pl-6 shadow-sm overflow-hidden ${cfg.wrapper}`}>
      <div className={`absolute left-0 top-0 bottom-0 w-1.5 ${cfg.bar}`} />
      <div className="flex items-center gap-3 mb-2">
        <span className={`flex-shrink-0 w-9 h-9 rounded-xl border flex items-center justify-center ${cfg.iconBox}`}>
          {cfg.icon}
        </span>
        <span className={`text-sm font-bold uppercase tracking-wider ${cfg.labelClasses}`}>
          {title || cfg.label}
        </span>
      </div>
      <div className="text-text [&>p]:last:mb-0 [&>p]:text-base [&_strong]:font-extrabold [&_strong]:text-text dark:[&_strong]:text-white [&_b]:font-extrabold">{children}</div>
    </div>
  );
};

const Info = (props) => <Callout {...props} type="info" />;
const Note = (props) => <Callout {...props} type="note" />;
const Tip = (props) => <Callout {...props} type="tip" />;
const Success = (props) => <Callout {...props} type="success" />;
const Warning = (props) => <Callout {...props} type="warning" />;
const Alert = (props) => <Callout {...props} type="alert" />;
const Danger = (props) => <Callout {...props} type="danger" />;

const YouTube = ({ videoId, title = 'Embedded YouTube Video' }) => {
  if (!videoId) return <Callout type="alert">Missing 'videoId' for YouTube component.</Callout>;
  
  return (
    <div className="not-prose my-6 rounded-lg border border-border shadow-lg overflow-hidden aspect-video">
      <iframe
        width="100%"
        height="100%"
        src={`https://www.youtube.com/embed/${videoId}`}
        title={title}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="w-full h-full"
      ></iframe>
    </div>
  );
};

const GeoGebra = ({ materialId, title = 'GeoGebra Applet' }) => {
  if (!materialId) return <Callout type="alert">Missing 'materialId' for GeoGebra component.</Callout>;
  
  return (
    <div className="not-prose my-6 rounded-lg border border-border shadow-lg overflow-hidden" style={{ aspectRatio: '16/10' }}>
      <iframe
        scrolling="no"
        title={title}
        src={`https://www.geogebra.org/material/iframe/id/${materialId}`}
        frameBorder="0"
        allowFullScreen
        className="w-full h-full"
        style={{ border: 0, minHeight: '500px' }}
      ></iframe>
    </div>
  );
};

const Katex = ({ children, block }) => {
  const codeString = extractCodeString(children);
  if (block) {
    return (
      <div className="not-prose my-6 text-xl flex justify-center overflow-x-auto p-4">
        <BlockMath math={codeString} />
      </div>
    );
  }
  return <InlineMath math={codeString} />;
};

const Spoiler = ({ children }) => {
  const summary = React.Children.toArray(children).find(c => c.type.name === 'MarkdownSummary');
  const content = React.Children.toArray(children).filter(c => c.type.name !== 'MarkdownSummary');
  
  return (
    <details className="not-prose bg-card border border-border rounded-lg my-6 shadow-sm group">
      {summary}
      <div className="p-4 pt-0 border-t border-border">
        {content}
      </div>
    </details>
  );
};

const MarkdownSummary = (props) => (
   <summary className="flex items-center justify-between font-semibold p-4 cursor-pointer hover:bg-background/50 rounded-t-lg list-none [&::-webkit-details-marker]:hidden">
    <span>{props.children}</span>
    <ChevronDown size={18} className="transition-transform duration-200 group-open:rotate-180" />
  </summary>
);

const Tabs = ({ children }) => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const childrenArray = React.Children.toArray(children);

  return (
    <div className="not-prose bg-card text-text rounded-lg border border-border my-6 shadow-lg overflow-hidden">
      <div className="flex border-b border-border bg-card/80">
        {childrenArray.map((child, index) => (
          <button
            key={index}
            className={`px-4 py-2.5 text-sm font-medium ${
              index === activeTabIndex
                ? 'text-primary border-b-2 border-primary'
                : 'text-text/60 hover:text-text'
            }`}
            onClick={() => setActiveTabIndex(index)}
          >
            {child.props.title || `Tab ${index + 1}`}
          </button>
        ))}
      </div>
      <div className="relative">
        {childrenArray[activeTabIndex]}
      </div>
    </div>
  );
};

function unindentMarkdown(str) {
  if (typeof str !== 'string') return str;
  const lines = str.split('\n');
  let minIndent = Infinity;
  for (const line of lines) {
    if (line.trim().length > 0) {
      const match = line.match(/^(\s*)/);
      if (match && match[1].length < minIndent) {
        minIndent = match[1].length;
      }
    }
  }
  if (minIndent > 0 && minIndent !== Infinity) {
    return lines.map(line => (line.trim().length > 0 ? line.slice(minIndent) : '')).join('\n');
  }
  return str;
}

// Custom Tab Component for Markdown Tabbed Code Blocks
const Tab = ({ children }) => {
  const childrenArray = React.Children.toArray(children);
  
  // Check if child content is a syntax-highlighted CodeBlock
  const isSingleCodeBlock = 
      childrenArray.length > 0 &&
      React.isValidElement(childrenArray[0]) &&
      childrenArray[0].type.name === 'MarkdownCodeBlock';

  if (isSingleCodeBlock) {
    const child = childrenArray[0];
    return React.cloneElement(child, {
      ...child.props,
      className: 'shadow-none border-none my-0 rounded-none overflow-hidden', 
      isTabbed: true 
    });
  }
  
  return (
    <div className="p-5 text-text leading-relaxed [&_strong]:font-extrabold [&_strong]:text-text dark:[&_strong]:text-white">
      {childrenArray.map((child, index) => {
        if (typeof child === 'string') {
          return <BlogPostContent key={index} content={unindentMarkdown(child)} />;
        }
        return child;
      })}
    </div>
  );
};

// Interactive Live Code Sandbox Component
const LiveCodeBlock = ({ codeString }) => {
  const { isDark } = useTheme();
  const theme = isDark ? themes.dracula : themes.github;

  return (
    <LiveProvider code={codeString} theme={theme} noInline={false}>
      <div 
        className="not-prose relative text-text rounded-lg border border-border my-6 shadow-lg overflow-hidden"
        style={{ backgroundColor: theme.plain.backgroundColor }} 
      >
        <div className="p-4 border-b border-border min-h-[100px]">
          <LivePreview />
        </div>
        <div className="relative text-sm">
          <LiveEditor 
            style={{ 
              fontFamily: 'var(--font-mono)', 
              fontSize: '0.875rem',
              lineHeight: '1.6',
              padding: '1rem', 
              outline: 'none',
            }} 
          />
        </div>
        <LiveError className="text-red-500 bg-red-900/10 p-4 text-xs font-mono" />
      </div>
    </LiveProvider>
  );
};

const ChartBlock = ({ codeString, type = 'bar' }) => {
  const { isDark } = useTheme();
  let data;
  try {
    data = JSON.parse(codeString);
  } catch (e) {
    return <Callout type="alert">Error parsing chart JSON: {e.message}</Callout>;
  }
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
        labels: { color: isDark ? '#e5e7eb' : '#374151' }
      },
      title: {
        display: !!data.title,
        text: data.title,
        color: isDark ? '#f9fafb' : '#111827'
      },
    },
    scales: {
      x: {
        ticks: { color: isDark ? '#9ca3af' : '#6b7280' },
        grid: { color: isDark ? '#374151' : '#e5e7eb' }
      },
      y: {
        ticks: { color: isDark ? '#9ca3af' : '#6b7280' },
        grid: { color: isDark ? '#374151' : '#e5e7eb' }
      }
    }
  };

  const components = {
    bar: Bar,
    line: Line,
    pie: Pie,
    doughnut: Doughnut,
  };
  const ChartComponent = components[type] || Bar;

  return (
    <div className="not-prose bg-card p-4 rounded-lg border border-border my-6 shadow-lg flex justify-center">
      <div className="relative max-w-full w-full h-[400px]">
        <ChartComponent options={options} data={data} />
      </div>
    </div>
  );
};

const InteractiveTable = ({ codeString }) => {
  const [sorting, setSorting] = useState([]);
  
  const data = useMemo(() => {
    try {
      return JSON.parse(codeString);
    } catch (e) {
      return null;
    }
  }, [codeString]);
  
  const columns = useMemo(() => {
    if (!data || data.length === 0) return [];
    
    return Object.keys(data[0]).map(key => ({
      accessorKey: key,
      header: ({ column }) => (
        <button 
          className="flex items-center gap-1.5 font-semibold text-left"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          {key.charAt(0).toUpperCase() + key.slice(1)}
          <ArrowUpDown size={14} className="opacity-50" />
        </button>
      ),
    }));
  }, [data]);

  const table = useReactTable({
    data: data || [],
    columns,
    state: { sorting },
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
  });

  if (!data) {
    return <Callout type="alert">Error parsing table JSON data.</Callout>;
  }

  return (
    <div className="not-prose my-6 border border-border rounded-lg shadow-lg overflow-hidden">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-border">
          <thead className="bg-card">
            {table.getHeaderGroups().map(headerGroup => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map(header => (
                  <th key={header.id} className="px-6 py-3 text-left text-xs font-semibold text-text uppercase tracking-wider">
                    {flexRender(header.column.columnDef.header, header.getContext())}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody className="divide-y divide-border bg-background">
            {table.getRowModel().rows.map(row => (
              <tr key={row.id} className="hover:bg-card/50 transition-colors">
                {row.getVisibleCells().map(cell => (
                  <td key={cell.id} className="px-6 py-4 text-sm text-text">
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const MermaidBlock = ({ codeString }) => {
  const { isDark } = useTheme();
  const [viewMode, setViewMode] = useState('diagram');
  const [isCopied, setIsCopied] = useState(false);
  const [renderError, setRenderError] = useState(null);
  const mermaidRef = useRef(null);
  const renderCounter = useRef(0);
  const [baseId] = useState(() => `mermaid-${Math.random().toString(36).slice(2, 10)}`);

  useEffect(() => {
    if (viewMode !== 'diagram' || !codeString) return;

    let cancelled = false;
    // Unique ID per render attempt — prevents races when React StrictMode
    // double-invokes effects or when the theme/view toggles quickly.
    renderCounter.current += 1;
    const renderId = `${baseId}-${renderCounter.current}`;

    const renderDiagram = async () => {
      try {
        mermaid.initialize({
          startOnLoad: false,
          theme: isDark ? 'dark' : 'default',
          securityLevel: 'loose',
        });
        const { svg } = await mermaid.render(renderId, codeString);
        if (!cancelled && mermaidRef.current) {
          mermaidRef.current.innerHTML = svg;
          setRenderError(null);
        }
      } catch (err) {
        // Mermaid leaves a stale temp element in the DOM on parse errors.
        const stale = document.getElementById(renderId);
        if (stale && stale.parentNode) stale.parentNode.removeChild(stale);
        const staleD = document.getElementById(`d${renderId}`);
        if (staleD && staleD.parentNode) staleD.parentNode.removeChild(staleD);
        if (!cancelled) {
          console.error('Mermaid rendering error:', err);
          setRenderError(err?.message || 'Failed to render diagram');
        }
      }
    };

    // Defer one frame so the container is laid out and measurable before
    // mermaid calculates SVG dimensions — this fixes the "empty until you
    // toggle Code and back" bug.
    const raf = requestAnimationFrame(() => {
      renderDiagram();
    });

    return () => {
      cancelled = true;
      cancelAnimationFrame(raf);
    };
  }, [codeString, viewMode, isDark, baseId]);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(codeString);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy code:', err);
    }
  };

  return (
    <div className="not-prose relative group bg-card text-text rounded-lg border border-border my-6 shadow-lg overflow-hidden">
      <div className="flex items-center justify-between px-4 py-2.5 bg-card/80 border-b border-border">
        <div className="flex items-center gap-2">
          <span className="text-xs font-semibold text-text/70 uppercase tracking-wide">
            Mermaid
          </span>
          <div className="flex items-center gap-1 bg-background/50 rounded-md p-0.5">
            <button
              onClick={() => setViewMode('diagram')}
              className={`flex items-center gap-1 px-2 py-1 text-xs font-medium rounded transition-colors ${
                viewMode === 'diagram'
                  ? 'bg-primary text-white'
                  : 'text-text/70 hover:text-text'
              }`}
              title="Diagram view"
            >
              <Eye size={12} />
              <span>Diagram</span>
            </button>
            <button
              onClick={() => setViewMode('code')}
              className={`flex items-center gap-1 px-2 py-1 text-xs font-medium rounded transition-colors ${
                viewMode === 'code'
                  ? 'bg-primary text-white'
                  : 'text-text/70 hover:text-text'
              }`}
              title="Code view"
            >
              <Code2 size={12} />
              <span>Code</span>
            </button>
          </div>
        </div>
        <button
          onClick={handleCopy}
          className="flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium text-text/70 hover:text-text hover:bg-background/50 rounded transition-colors"
          title="Copy code"
          aria-label="Copy code"
        >
          {isCopied ? (
            <><Check size={14} /><span>Copied!</span></>
          ) : (
            <><Copy size={14} /><span>Copy</span></>
          )}
        </button>
      </div>

      <div className="relative">
        {viewMode === 'diagram' ? (
          <div className="p-4 flex items-center justify-center min-h-[200px] bg-background/30">
            {renderError ? (
              <div className="text-red-500 p-4 text-sm">Error rendering diagram: {renderError}</div>
            ) : (
              <div ref={mermaidRef} className="w-full flex items-center justify-center [&>svg]:max-w-full [&>svg]:h-auto" />
            )}
          </div>
        ) : (
          <div className="overflow-x-auto">
            <SyntaxHighlighter
              language="mermaid"
              style={isDark ? modifiedOneDark : modifiedOneLight}
              customStyle={{ margin: 0, padding: '1rem', fontSize: '0.875rem', lineHeight: '1.6' }}
              showLineNumbers={false}
              PreTag="div"
            >
              {codeString}
            </SyntaxHighlighter>
          </div>
        )}
      </div>
    </div>
  );
};

const MarkdownCodeBlock = ({ children, className, isTabbed }) => {
  const { isDark } = useTheme();
  const [isCopied, setIsCopied] = useState(false);

  let codeString = '';
  let language = 'text';

  const codeElement = findCodeElement(children);

  if (codeElement) {
    const className = codeElement.props?.className || '';
    const languageMatch = /(?:language|lang)-(\w+(?:-\w+)?)/.exec(className);
    language = languageMatch ? languageMatch[1] : 'text';
    codeString = extractCodeString(codeElement.props?.children || '').trim();
  } else {
    codeString = extractCodeString(children).trim();
  }

  if (language === 'mermaid') {
    return <MermaidBlock codeString={codeString} />;
  }

  if (language === 'react-live' || language === 'live') {
    return <LiveCodeBlock codeString={codeString} />;
  }
  
  const chartMatch = /chart-(bar|line|pie|doughnut)/.exec(language);
  if (chartMatch) {
    const chartType = chartMatch[1];
    return <ChartBlock codeString={codeString} type={chartType} />;
  }

  if (language === 'table-data') {
    return <InteractiveTable codeString={codeString} />;
  }

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(codeString);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy code:', err);
    }
  };

  const displayLanguage = languageNames[language] || (language ? language.charAt(0).toUpperCase() + language.slice(1) : null);

  return (
    <div className={`not-prose relative group bg-card text-text rounded-lg border border-border my-6 shadow-lg overflow-hidden ${className}`}>
      {!isTabbed && (
        <div className="flex items-center justify-between px-4 py-2.5 bg-card/80 border-b border-border">
          {displayLanguage && (
            <span className="text-xs font-semibold text-text/70 uppercase tracking-wide">
              {displayLanguage}
            </span>
          )}
          <button
            onClick={handleCopy}
            className="flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium text-text/70 hover:text-text hover:bg-background/50 rounded transition-colors ml-auto"
            title="Copy code"
            aria-label="Copy code"
          >
            {isCopied ? (
              <><Check size={14} /><span>Copied!</span></>
            ) : (
              <><Copy size={14} /><span>Copy</span></>
            )}
          </button>
        </div>
      )}

      <div className={`relative overflow-x-auto ${isTabbed ? 'pt-4' : ''}`}>
        <SyntaxHighlighter
          language={language.toLowerCase()}
          style={isDark ? modifiedOneDark : modifiedOneLight}
          customStyle={{ 
            margin: 0, 
            padding: '1rem', 
            fontSize: '0.875rem', 
            lineHeight: '1.6',
            background: isTabbed ? 'transparent' : undefined,
          }}
          showLineNumbers={false}
          PreTag="div"
        >
          {codeString}
        </SyntaxHighlighter>
        {isTabbed && (
          <button
            onClick={handleCopy}
            className="absolute top-4 right-4 flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium text-text/70 hover:text-text hover:bg-background/50 rounded transition-colors opacity-0 group-hover:opacity-100"
            title="Copy code"
            aria-label="Copy code"
          >
            {isCopied ? (
              <><Check size={14} /><span>Copied!</span></>
            ) : (
              <><Copy size={14} /><span>Copy</span></>
            )}
          </button>
        )}
      </div>
    </div>
  );
};
// --- Reusable content components (usable in any post/lesson) ---

// Elegant pull-quote card: <Quote author="Dale Carnegie" source="How to Win Friends...">Text</Quote>
const Quote = ({ children, author, source }) => (
  <figure className="not-prose my-8 relative rounded-2xl border border-border bg-gradient-to-br from-primary/5 via-card to-card p-6 sm:p-8 shadow-sm overflow-hidden">
    <QuoteIcon size={80} className="absolute -top-2 -left-2 text-primary/10 pointer-events-none" />
    <blockquote className="relative text-lg sm:text-xl font-medium italic text-text leading-relaxed m-0">
      {children}
    </blockquote>
    {(author || source) && (
      <figcaption className="relative mt-4 flex items-center gap-3">
        <span className="h-px w-8 bg-primary/50" />
        <span className="text-sm font-bold text-text">{author}</span>
        {source && <span className="text-sm text-text/60">· {source}</span>}
      </figcaption>
    )}
  </figure>
);

// Big-number stat row: <StatGrid><Stat value="85%" label="Soft skills" /></StatGrid>
const StatGrid = ({ children }) => (
  <div className="not-prose my-8 grid grid-cols-2 md:grid-cols-4 gap-3">{children}</div>
);

const Stat = ({ value, label, sub, color = 'indigo' }) => {
  const palette = {
    indigo: 'from-indigo-500/15 to-indigo-500/5 border-indigo-500/30 text-indigo-600 dark:text-indigo-400',
    emerald: 'from-emerald-500/15 to-emerald-500/5 border-emerald-500/30 text-emerald-600 dark:text-emerald-400',
    amber: 'from-amber-500/15 to-amber-500/5 border-amber-500/30 text-amber-600 dark:text-amber-400',
    rose: 'from-rose-500/15 to-rose-500/5 border-rose-500/30 text-rose-600 dark:text-rose-400',
    sky: 'from-sky-500/15 to-sky-500/5 border-sky-500/30 text-sky-600 dark:text-sky-400',
    violet: 'from-violet-500/15 to-violet-500/5 border-violet-500/30 text-violet-600 dark:text-violet-400',
  };
  const classes = palette[color] || palette.indigo;
  return (
    <div className={`rounded-2xl border bg-gradient-to-b p-4 text-center ${classes}`}>
      <div className="text-2xl sm:text-3xl font-black tracking-tight">{value}</div>
      <div className="text-xs font-bold uppercase tracking-wider mt-1 text-text/80">{label}</div>
      {sub && <div className="text-[11px] text-text/50 mt-1">{sub}</div>}
    </div>
  );
};

// Highlighted key-takeaway strip: <KeyTakeaway>One sentence to remember.</KeyTakeaway>
const KeyTakeaway = ({ children, label = 'Key Takeaway' }) => (
  <div className="not-prose my-8 relative rounded-2xl border border-amber-500/40 bg-gradient-to-r from-amber-500/15 via-amber-500/5 to-transparent p-5 pl-6 shadow-sm overflow-hidden">
    <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-amber-500" />
    <div className="flex items-center gap-2 mb-2">
      <LightbulbIcon size={16} className="text-amber-500" />
      <span className="text-xs font-black uppercase tracking-widest text-amber-600 dark:text-amber-400">{label}</span>
    </div>
    <div className="text-base sm:text-lg font-semibold text-text leading-relaxed [&>p]:mb-0 [&>p]:text-base [&>p]:sm:text-lg">
      {children}
    </div>
  </div>
);

// Styled accordion: <Accordion title="...">content</Accordion>
const Accordion = ({ title, children, badge }) => (
  <details className="not-prose group my-3 bg-card border border-border rounded-2xl shadow-sm overflow-hidden">
    <summary className="flex items-center gap-3 font-semibold p-4 cursor-pointer hover:bg-background/60 list-none [&::-webkit-details-marker]:hidden select-none">
      <ChevronDown size={18} className="text-text/40 transition-transform duration-200 group-open:rotate-180 shrink-0" />
      <span className="flex-1 text-text">{title}</span>
      {badge && (
        <span className="text-[11px] font-bold uppercase tracking-wider text-text/50 bg-background border border-border rounded-full px-2.5 py-0.5 shrink-0">
          {badge}
        </span>
      )}
    </summary>
    <div className="px-4 pb-4 pt-1 pl-11 text-text/90 border-t border-border/60 [&>p]:text-base [&>p]:mb-3">
      {children}
    </div>
  </details>
);


class ContentErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('BlogPostContent rendering error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="p-6 my-6 border border-red-500/30 bg-red-500/10 text-red-400 rounded-2xl not-prose">
          <h3 className="text-lg font-bold text-red-500 mb-2">Content Render Notice</h3>
          <p className="text-sm opacity-90 mb-2">
            A rendering issue occurred with a component in this post. The full details have been logged to the console.
          </p>
          <pre className="text-xs bg-black/40 p-3 rounded overflow-x-auto font-mono text-red-300">
            {this.state.error?.toString()}
          </pre>
        </div>
      );
    }
    return this.props.children;
  }
}

export default function BlogPostContent({ content }) {
  const cleanedContent = useMemo(() => unindentMarkdown(content || ''), [content]);

  return (
    <article className="prose prose-lg dark:prose-invert max-w-none">
      <ContentErrorBoundary>
        <Markdown
          options={{
            overrides: {
              code: { component: MarkdownCode },
              pre: { component: MarkdownCodeBlock },
              h1: { component: 'h1', props: { className: 'text-4xl font-extrabold text-text mt-12 mb-6 scroll-mt-20' } },
              h2: { component: 'h2', props: { className: 'text-3xl font-bold text-text mt-10 mb-4 scroll-mt-20 border-b border-border pb-2' } },
              h3: { component: 'h3', props: { className: 'text-2xl font-bold text-text mt-8 mb-3 scroll-mt-20' } },
              h4: { component: 'h4', props: { className: 'text-xl font-semibold text-text mt-6 mb-2' } },
              h5: { component: 'h5', props: { className: 'text-lg font-semibold text-text mt-4 mb-2' } },
              h6: { component: 'h6', props: { className: 'text-base font-semibold text-text mt-4 mb-2' } },
              p: { component: 'p', props: { className: 'text-text mb-6 leading-relaxed text-lg' } },
              a: { component: 'a', props: { className: 'text-primary hover:text-secondary underline decoration-2 underline-offset-2 transition-colors font-medium', target: '_blank', rel: 'noopener noreferrer' } },
              ul: { component: 'ul', props: { className: 'list-disc list-outside ml-6 text-text mb-6 space-y-2' } },
              ol: { component: 'ol', props: { className: 'list-decimal list-outside ml-6 text-text mb-6 space-y-2' } },
              li: { component: 'li', props: { className: 'text-text leading-relaxed' } },
              img: { component: 'img', props: { className: 'rounded-xl my-8 w-full shadow-lg' } },
              table: { component: 'table', props: { className: 'min-w-full divide-y divide-border my-6 border border-border rounded-lg overflow-hidden' } },
              thead: { component: 'thead', props: { className: 'bg-card' } },
              tbody: { component: 'tbody', props: { className: 'divide-y divide-border bg-background' } },
              tr: { component: 'tr', props: { className: 'hover:bg-card/50 transition-colors' } },
              th: { component: 'th', props: { className: 'px-6 py-3 text-left text-xs font-semibold text-text uppercase tracking-wider' } },
              td: { component: 'td', props: { className: 'px-6 py-4 text-sm text-text' } },
              hr: { component: 'hr', props: { className: 'my-8 border-border' } },
              strong: { component: 'strong', props: { className: 'font-extrabold text-text dark:text-white' } },
              em: { component: 'em', props: { className: 'italic text-text' } },
              del: { component: 'del', props: { className: 'line-through text-muted' } },

              blockquote: {
                component: (props) => {
                  const children = React.Children.toArray(props.children);
                  let calloutType = null;
                  
                  const inspectTextNode = (val) => {
                    if (typeof val !== 'string') return null;
                    const match = /^(?:\[!|#+\s*|\b)(INFO|NOTE|TIP|SUCCESS|WARNING|ALERT|DANGER|QUOTE)(?:\]|:|\b)\s*/i.exec(val.trim());
                    return match ? match[1].toLowerCase() : null;
                  };

                  if (children.length > 0) {
                    const first = children[0];
                    if (React.isValidElement(first) && first.props?.children) {
                      const pChildren = React.Children.toArray(first.props.children);
                      if (pChildren.length > 0) {
                        const firstSub = pChildren[0];
                        const textToTest = typeof firstSub === 'string' ? firstSub : (React.isValidElement(firstSub) ? firstSub.props?.children : null);
                        const foundType = inspectTextNode(textToTest);

                        if (foundType) {
                          calloutType = foundType;
                          const fullMatch = /^(?:\[!|#+\s*|\b)(INFO|NOTE|TIP|SUCCESS|WARNING|ALERT|DANGER|QUOTE)(?:\]|:|\b)\s*/i.exec((typeof textToTest === 'string' ? textToTest : '').trim());
                          const matchLen = fullMatch ? fullMatch[0].length : 0;

                          if (typeof firstSub === 'string') {
                            const remaining = firstSub.trim().substring(matchLen);
                            if (remaining) {
                              pChildren[0] = remaining;
                            } else {
                              pChildren.shift();
                            }
                          } else if (React.isValidElement(firstSub)) {
                            const strVal = typeof firstSub.props?.children === 'string' ? firstSub.props.children : '';
                            const remaining = strVal.trim().substring(matchLen);
                            if (remaining) {
                              pChildren[0] = React.cloneElement(firstSub, {}, remaining);
                            } else {
                              pChildren.shift();
                            }
                          }
                          children[0] = React.cloneElement(first, {}, pChildren);
                        }
                      }
                    } else if (typeof first === 'string') {
                      const foundType = inspectTextNode(first);
                      if (foundType) {
                        calloutType = foundType;
                        const fullMatch = /^(?:\[!|#+\s*|\b)(INFO|NOTE|TIP|SUCCESS|WARNING|ALERT|DANGER|QUOTE)(?:\]|:|\b)\s*/i.exec(first.trim());
                        const remaining = first.trim().substring(fullMatch ? fullMatch[0].length : 0);
                        if (remaining) {
                          children[0] = remaining;
                        } else {
                          children.shift();
                        }
                      }
                    }
                  }

                  if (calloutType) {
                    return <Callout type={calloutType}>{children}</Callout>;
                  }
                  return (
                    <blockquote className="border-l-4 border-amber-500/80 bg-amber-500/10 pl-6 pr-4 py-4 my-6 text-text rounded-r-2xl font-medium [&_strong]:font-extrabold [&_strong]:text-text dark:[&_strong]:text-white">
                      {children}
                    </blockquote>
                  );
                },
              },
              
              Info: { component: Info },
              Note: { component: Note },
              Tip: { component: Tip },
              Success: { component: Success },
              Warning: { component: Warning },
              Alert: { component: Alert },
              Danger: { component: Danger },
              YouTube: { component: YouTube },
              GeoGebra: { component: GeoGebra },
              Katex: { component: Katex },
              details: { component: Spoiler },
              summary: { component: MarkdownSummary },
              Tabs: { component: Tabs },
              Tab: { component: Tab },
              Quote: { component: Quote },
              StatGrid: { component: StatGrid },
              Stat: { component: Stat },
              KeyTakeaway: { component: KeyTakeaway },
              Accordion: { component: Accordion },
            },
          }}
        >
          {cleanedContent || '*No content*'}
        </Markdown>
      </ContentErrorBoundary>
    </article>
  );
}