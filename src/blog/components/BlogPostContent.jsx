import React from 'react';
import Markdown from 'markdown-to-jsx';

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
              component: 'pre',
              props: {
                className: 'bg-card text-text p-4 rounded-lg overflow-x-auto scrollbar-thin border border-border',
              },
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

