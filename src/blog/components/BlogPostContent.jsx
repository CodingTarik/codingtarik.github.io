import React, { useState, useEffect, useRef } from 'react';
import Markdown from 'markdown-to-jsx';
import { useTheme } from '../../learnbuddy/context/ThemeContext';
import { Copy, Check, Code2, Eye } from 'lucide-react';
import { oneDark, oneLight } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import mermaid from 'mermaid';

import ts from 'react-syntax-highlighter/dist/esm/languages/prism/typescript';
import js from 'react-syntax-highlighter/dist/esm/languages/prism/javascript';
import jsx from 'react-syntax-highlighter/dist/esm/languages/prism/jsx';
import bash from 'react-syntax-highlighter/dist/esm/languages/prism/bash';


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

const MermaidBlock = ({ codeString }) => {
  const { isDark } = useTheme();
  const [viewMode, setViewMode] = useState('diagram'); // 'diagram' or 'code'
  const [isCopied, setIsCopied] = useState(false);
  const mermaidRef = useRef(null);
  // Stelle sicher, dass die ID für mermaid.render() gültig ist (keine Zahlen am Anfang)
  const [mermaidId] = useState(() => `mermaid-svg-${Math.random().toString(36).substr(2, 9)}`);

  // Initialize and render Mermaid diagram
  useEffect(() => {
    // Nur rendern, wenn wir im Diagramm-Modus sind und der Ref existiert
    if (viewMode === 'diagram' && mermaidRef.current && codeString) {
      
      // 1. Mermaid mit dem richtigen Theme initialisieren
      mermaid.initialize({
        startOnLoad: false,
        theme: isDark ? 'dark' : 'default',
        securityLevel: 'loose',
      });

      // 2. mermaid.render() verwenden. 
      // Dies ist eine asynchrone Funktion, die { svg, bindFunctions } zurückgibt.
      // Sie rendert den SVG-Code im Speicher, ohne DOM-Hacks.
      mermaid.render(mermaidId, codeString)
        .then(({ svg }) => {
          // 3. Den gerenderten SVG-String sicher in den ref einfügen
          if (mermaidRef.current) {
            mermaidRef.current.innerHTML = svg;
          }
        })
        .catch((err) => {
          // 4. Fehler abfangen und anzeigen
          console.error('Mermaid rendering error:', err);
          if (mermaidRef.current) {
            mermaidRef.current.innerHTML = `<div class="text-red-500 p-4 text-sm">Error rendering diagram: ${err.message}</div>`;
          }
        });
        
    } else if (mermaidRef.current) {
      // Aufräumen: Wenn wir zur Code-Ansicht wechseln, den SVG leeren
      mermaidRef.current.innerHTML = '';
    }
    
    // Die Abhängigkeiten sind korrekt
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
            <>
              <Check size={14} />
              <span>Copied!</span>
            </>
          ) : (
            <>
              <Copy size={14} />
              <span>Copy</span>
            </>
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
              customStyle={{
                margin: 0,
                padding: '1rem',
                fontSize: '0.875rem',
                lineHeight: '1.6',
              }}
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

const MarkdownCodeBlock = ({ children }) => {
  const { isDark } = useTheme();
  const [isCopied, setIsCopied] = useState(false);

  let codeString = '';
  let language = 'text';

  const codeElement = findCodeElement(children);

  if (codeElement) {
    const className = codeElement.props?.className || '';
    const languageMatch = /(?:language|lang)-(\w+)/.exec(className);
    language = languageMatch ? languageMatch[1] : 'text';
    codeString = extractCodeString(codeElement.props?.children || '').trim();
  } else {
    codeString = extractCodeString(children).trim();
  }

  // Special handling for Mermaid diagrams
  if (language === 'mermaid') {
    return <MermaidBlock codeString={codeString} />;
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
    <div className="not-prose relative group bg-card text-text rounded-lg border border-border my-6 shadow-lg overflow-hidden">
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
            <>
              <Check size={14} />
              <span>Copied!</span>
            </>
          ) : (
            <>
              <Copy size={14} />
              <span>Copy</span>
            </>
          )}
        </button>
      </div>

      <div className="relative overflow-x-auto">
        <SyntaxHighlighter
          language={language.toLowerCase()}
          style={isDark ? modifiedOneDark : modifiedOneLight}
          customStyle={{
            margin: 0,
            padding: '1rem',
            fontSize: '0.875rem',
            lineHeight: '1.6',
          }}
          showLineNumbers={false}
          PreTag="div"
        >
          {codeString}
        </SyntaxHighlighter>
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
            code: {
              component: MarkdownCode,
            },
            pre: {
              component: MarkdownCodeBlock,
            },
            h1: {
              component: 'h1',
              props: {
                className: 'text-4xl font-extrabold text-text mt-12 mb-6 scroll-mt-20',
              },
            },
            h2: {
              component: 'h2',
              props: {
                className: 'text-3xl font-bold text-text mt-10 mb-4 scroll-mt-20 border-b border-border pb-2',
              },
            },
            h3: {
              component: 'h3',
              props: {
                className: 'text-2xl font-bold text-text mt-8 mb-3 scroll-mt-20',
              },
            },
            h4: {
              component: 'h4',
              props: {
                className: 'text-xl font-semibold text-text mt-6 mb-2',
              },
            },
            h5: {
              component: 'h5',
              props: {
                className: 'text-lg font-semibold text-text mt-4 mb-2',
              },
            },
            h6: {
              component: 'h6',
              props: {
                className: 'text-base font-semibold text-text mt-4 mb-2',
              },
            },
            p: {
              component: 'p',
              props: {
                className: 'text-text mb-6 leading-relaxed text-lg',
              },
            },
            a: {
              component: 'a',
              props: {
                className: 'text-primary hover:text-secondary underline decoration-2 underline-offset-2 transition-colors font-medium',
                target: '_blank',
                rel: 'noopener noreferrer',
              },
            },
            ul: {
              component: 'ul',
              props: {
                className: 'list-disc list-outside ml-6 text-text mb-6 space-y-2',
              },
            },
            ol: {
              component: 'ol',
              props: {
                className: 'list-decimal list-outside ml-6 text-text mb-6 space-y-2',
              },
            },
            li: {
              component: 'li',
              props: {
                className: 'text-text leading-relaxed',
              },
            },
            blockquote: {
              component: 'blockquote',
              props: {
                className: 'border-l-4 border-primary bg-primary/5 pl-6 pr-4 py-4 my-6 italic text-text rounded-r-lg',
              },
            },
            img: {
              component: 'img',
              props: {
                className: 'rounded-xl my-8 w-full shadow-lg',
              },
            },
            table: {
              component: 'table',
              props: {
                className: 'min-w-full divide-y divide-border my-6 border border-border rounded-lg overflow-hidden',
              },
            },
            thead: {
              component: 'thead',
              props: {
                className: 'bg-card',
              },
            },
            tbody: {
              component: 'tbody',
              props: {
                className: 'divide-y divide-border bg-background',
              },
            },
            tr: {
              component: 'tr',
              props: {
                className: 'hover:bg-card/50 transition-colors',
              },
            },
            th: {
              component: 'th',
              props: {
                className: 'px-6 py-3 text-left text-xs font-semibold text-text uppercase tracking-wider',
              },
            },
            td: {
              component: 'td',
              props: {
                className: 'px-6 py-4 text-sm text-text',
              },
            },
            hr: {
              component: 'hr',
              props: {
                className: 'my-8 border-border',
              },
            },
            strong: {
              component: 'strong',
              props: {
                className: 'font-bold text-text',
              },
            },
            em: {
              component: 'em',
              props: {
                className: 'italic text-text',
              },
            },
            del: {
              component: 'del',
              props: {
                className: 'line-through text-muted',
              },
            },
          },
        }}
      >
        {content || '*No content*'}
      </Markdown>
    </article>
  );
}