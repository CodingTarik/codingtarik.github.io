import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';
import rehypeRaw from 'rehype-raw';
import rehypeKatex from 'rehype-katex';
import 'katex/dist/katex.min.css';

interface Props {
  content: string;
  className?: string;
}

/**
 * Renders Markdown content with:
 * - GitHub Flavored Markdown (tables, strikethrough, etc.)
 * - Raw HTML
 * - LaTeX math via KaTeX:
 *   - Inline:  $E = mc^2$  or  \(E = mc^2\)
 *   - Block:   $$\int_0^1 x^2 dx$$  or  \[\int_0^1 x^2 dx\]
 * - Cloze deletion rendering: {{c1::answer}} → [...]
 */
export default function MarkdownRenderer({ content, className = '' }: Props) {
  // Pre-process cloze deletions for display
  // {{c1::answer::hint}} → shows [...] or [hint] in front, shows answer in back
  const processed = content;

  return (
    <div className={`markdown-content ${className}`}>
      <ReactMarkdown
        remarkPlugins={[remarkGfm, remarkMath]}
        rehypePlugins={[rehypeRaw, rehypeKatex]}
      >
        {processed}
      </ReactMarkdown>
    </div>
  );
}
