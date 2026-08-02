import React, { useState, useEffect, useRef, useMemo } from 'react';
import Markdown from 'markdown-to-jsx';
import { useTheme } from '../../learnbuddy/context/ThemeContext';
import { 
  Copy, Check, Code2, Eye, 
  Info as InfoIcon,
  AlertTriangle as AlertTriangleIcon,
  XCircle as XCircleIcon,
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

const Callout = ({ children, type = 'info' }) => {
  const icons = {
    info: <InfoIcon size={18} />,
    warning: <AlertTriangleIcon size={18} />,
    alert: <XCircleIcon size={18} />,
  };
  const styles = {
    info: 'border-l-primary bg-primary/5 text-text',
    warning: 'border-l-yellow-500 bg-yellow-500/5 text-text',
    alert: 'border-l-red-500 bg-red-500/5 text-text',
  };
  return (
    <div className={`not-prose my-6 flex items-start gap-4 rounded-lg border-l-4 p-4 ${styles[type]}`}>
      <div className="flex-shrink-0 pt-0.5 text-inherit opacity-80">{icons[type]}</div>
      <div className="flex-1 [&>p]:last:mb-0">{children}</div>
    </div>
  );
};

const Info = (props) => <Callout {...props} type="info" />;
const Warning = (props) => <Callout {...props} type="warning" />;
const Alert = (props) => <Callout {...props} type="alert" />;

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

// =========================================================================
// HIER IST FIX 1 (Tab)
// =========================================================================
const Tab = ({ children }) => {
  // Entferne React.Children.only, da es zu streng ist.
  const childrenArray = React.Children.toArray(children);
  
  // Prüfe, ob das erste (und hoffentlich einzige) Kind ein CodeBlock ist.
  const isSingleCodeBlock = 
      childrenArray.length > 0 && // Sicherstellen, dass Kinder vorhanden sind
      React.isValidElement(childrenArray[0]) &&
      childrenArray[0].type.name === 'MarkdownCodeBlock';

  if (isSingleCodeBlock) {
    const child = childrenArray[0];
    // Klone nur das CodeBlock-Element und entferne seine Ränder/Schatten
    return React.cloneElement(child, {
      ...child.props,
      className: 'shadow-none border-none my-0 rounded-none overflow-hidden', 
      isTabbed: true 
    });
  }
  
  // Fallback für normalen Text oder gemischten Inhalt
  return <div className="p-4">{children}</div>;
};

// =========================================================================
// HIER IST FIX 2 (LiveCodeBlock)
// =========================================================================
const LiveCodeBlock = ({ codeString }) => {
  const { isDark } = useTheme();
  const theme = isDark ? themes.dracula : themes.github;

  return (
    <LiveProvider code={codeString} theme={theme} noInline={false}>
      <div 
        className="not-prose relative text-text rounded-lg border border-border my-6 shadow-lg overflow-hidden"
        // Wende die Hintergrundfarbe des Themes manuell auf den Container an
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
              // Der Hintergrund wird vom 'theme' auf dem Provider geerbt
            }} 
          />
        </div>
        <LiveError className="text-red-500 bg-red-900/10 p-4 text-xs font-mono" />
      </div>
    </LiveProvider>
  );
};

const ChartBlock = ({ codeString, type = 'bar' }) => {
  let data;
  try {
    data = JSON.parse(codeString);
  } catch (e) {
    return <Callout type="alert">Error parsing chart JSON: {e.message}</Callout>;
  }

  const { isDark } = useTheme();
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
  const mermaidRef = useRef(null);
  const [mermaidId] = useState(() => `mermaid-svg-${Math.random().toString(36).substr(2, 9)}`);

  useEffect(() => {
    if (viewMode === 'diagram' && mermaidRef.current && codeString) {
      mermaid.initialize({
        startOnLoad: false,
        theme: isDark ? 'dark' : 'default',
        securityLevel: 'loose',
      });
      mermaid.render(mermaidId, codeString)
        .then(({ svg }) => {
          if (mermaidRef.current) {
            mermaidRef.current.innerHTML = svg;
          }
        })
        .catch((err) => {
          console.error('Mermaid rendering error:', err);
          if (mermaidRef.current) {
            mermaidRef.current.innerHTML = `<div class="text-red-500 p-4 text-sm">Error rendering diagram: ${err.message}</div>`;
          }
        });
    } else if (mermaidRef.current) {
      mermaidRef.current.innerHTML = '';
    }
  }, [codeString, viewMode, isDark, mermaidId]);

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
          <div
            ref={mermaidRef}
            className="p-4 flex items-center justify-center min-h-[200px] bg-background/30"
          />
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


export default function BlogPostContent({ content }) {
  return (
    <article className="prose prose-lg dark:prose-invert max-w-none">
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
            strong: { component: 'strong', props: { className: 'font-bold text-text' } },
            em: { component: 'em', props: { className: 'italic text-text' } },
            del: { component: 'del', props: { className: 'line-through text-muted' } },

            blockquote: {
              component: (props) => {
                let children = React.Children.toArray(props.children);
                let calloutType = null;
                
                if (children.length > 0 && children[0].type === 'p') {
                  const firstP = children[0];
                  const pChildren = React.Children.toArray(firstP.props.children);
                  if (pChildren.length > 0 && typeof pChildren[0] === 'string') {
                    let firstChildText = pChildren[0];
                    let matched = true;

                    if (firstChildText.startsWith('[!INFO]')) {
                      calloutType = 'info';
                      pChildren[0] = firstChildText.substring(7).trimStart();
                    } else if (firstChildText.startsWith('[!WARNING]')) {
                      calloutType = 'warning';
                      pChildren[0] = firstChildText.substring(10).trimStart();
                    } else if (firstChildText.startsWith('[!ALERT]')) {
                      calloutType = 'alert';
                      pChildren[0] = firstChildText.substring(8).trimStart();
                    } else {
                      matched = false;
                    }
                    
                    if (matched) {
                      children[0] = React.cloneElement(firstP, {}, pChildren);
                    }
                  }
                }
                
                if (calloutType) {
                  return <Callout type={calloutType}>{children}</Callout>;
                }
                return (
                  <blockquote className="border-l-4 border-primary bg-primary/5 pl-6 pr-4 py-4 my-6 italic text-text rounded-r-lg">
                    {children}
                  </blockquote>
                );
              },
            },
            
            Info: { component: Info },
            Warning: { component: Warning },
            Alert: { component: Alert },
            YouTube: { component: YouTube },
            GeoGebra: { component: GeoGebra },
            Katex: { component: Katex },
            details: { component: Spoiler },
            summary: { component: MarkdownSummary },
            Tabs: { component: Tabs },
            Tab: { component: Tab },
          },
        }}
      >
        {content || '*No content*'}
      </Markdown>
    </article>
  );
}