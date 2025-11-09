import React, { useState } from 'react';
import Markdown from 'markdown-to-jsx';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism'; 

const MarkdownCodeBlock = ({ children }) => {
    // --- 1. Code und Sprache extrahieren ---
    
    // 'children' ist normalerweise ein 'code'-Element, wenn es von Markdown kommt
    const codeElement = React.Children.only(children);
    const codeString = codeElement.props.children.toString().trim();
    
    // Sprache aus dem className extrahieren (z.B. "language-js" -> "js")
    const className = codeElement.props.className || '';
    const languageMatch = /language-(\w+)/.exec(className);
    const language = languageMatch ? languageMatch[1] : '';
  
    // --- 2. Kopier-Status verwalten ---
    const [isCopied, setIsCopied] = useState(false);
  
    const handleCopy = () => {
      navigator.clipboard.writeText(codeString).then(() => {
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 2000); // Status nach 2s zurücksetzen
      }).catch(err => {
        console.error("Fehler beim Kopieren des Codes: ", err);
      });
    };
  
    return (
      <div className="relative group bg-card text-text rounded-lg border border-border my-6 shadow-lg">
        
        {/* --- 4. Obere Leiste (Sprache + Kopier-Button) --- */}
        <div className="absolute top-2.5 right-2.5 z-10 flex items-center gap-2">
          
          {/* Sprach-Anzeige (wird nur angezeigt, wenn Sprache vorhanden) */}
          {language && (
            <span className="text-xs font-mono text-text/60 bg-border/50 px-2 py-0.5 rounded-md select-none">
              {language.toUpperCase()}
            </span>
          )}
  
          {/* Kopier-Button */}
          <button
            onClick={handleCopy}
            className="flex items-center justify-center p-1.5 rounded-md bg-border text-text opacity-0 group-hover:opacity-100 transition-all duration-200
                       hover:bg-border/70 focus:opacity-100 outline-none focus:ring-2 focus:ring-primary"
            aria-label="Code kopieren"
          >
            {isCopied ? (
              // Haken-Icon (Kopiert)
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425z"/>
              </svg>
            ) : (
              // Kopier-Icon (Standard)
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1z"/>
                <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5zM8 2h1v1H8zM7 1.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5z"/>
              </svg>
            )}
          </button>
        </div>
  
        {/* --- 5. Der Syntax Highlighter --- */}
        <SyntaxHighlighter
          language={language.toLowerCase()}
          style={vscDarkPlus}
          customStyle={{
            background: 'transparent',
          }}
          PreTag="pre"
          className="!p-4 !pt-10 !m-0 overflow-x-auto scrollbar-thin"
        >
          {codeString}
        </SyntaxHighlighter>
      </div>
    );
  };

/**
 * Shared component for rendering blog post markdown content
 * Used in both PostDetail and Admin Preview to ensure consistent styling
 */
export default function BlogPostContent({ content }) {
  return (
    <article className="prose prose-lg dark:prose-invert max-w-none">
      <Markdown
        options={{
          overrides: {
            // Code blocks - inline code
            code: {
              component: 'code',
              props: {
                className: 'bg-secondary/10 text-secondary px-2 py-1 rounded-md font-mono text-sm',
              },
            },
            
            // Pre blocks - code blocks
            pre: {
              component: MarkdownCodeBlock,
            },
            
            // Headings
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
            
            // Paragraphs
            p: {
              component: 'p',
              props: {
                className: 'text-text mb-6 leading-relaxed text-lg',
              },
            },
            
            // Links
            a: {
              component: 'a',
              props: {
                className: 'text-primary hover:text-secondary underline decoration-2 underline-offset-2 transition-colors font-medium',
                target: '_blank',
                rel: 'noopener noreferrer',
              },
            },
            
            // Lists
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
            
            // Blockquotes
            blockquote: {
              component: 'blockquote',
              props: {
                className: 'border-l-4 border-primary bg-primary/5 pl-6 pr-4 py-4 my-6 italic text-text rounded-r-lg',
              },
            },
            
            // Images
            img: {
              component: 'img',
              props: {
                className: 'rounded-xl my-8 w-full shadow-lg',
              },
            },
            
            // Tables
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
            
            // Horizontal rule
            hr: {
              component: 'hr',
              props: {
                className: 'my-8 border-border',
              },
            },
            
            // Strong/Bold
            strong: {
              component: 'strong',
              props: {
                className: 'font-bold text-text',
              },
            },
            
            // Emphasis/Italic
            em: {
              component: 'em',
              props: {
                className: 'italic text-text',
              },
            },
            
            // Delete/Strikethrough
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

