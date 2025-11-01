import React from 'react';

// Markdown-ähnlicher Content Renderer mit korrekter Formatierung
function LessonContent({ content }) {
  const renderParagraph = (text, idx) => {
    // Ersetze **text** mit <strong>
    const parts = text.split(/(\*\*.*?\*\*)/g);
    return (
      <span key={idx}>
        {parts.map((part, i) => {
          if (part.startsWith('**') && part.endsWith('**')) {
            return <strong key={i} className="font-bold text-stone-900">{part.slice(2, -2)}</strong>;
          }
          return part;
        })}
      </span>
    );
  };

  return (
    <div className="prose prose-stone max-w-none">
      {content.split('\n').map((paragraph, idx) => {
        const trimmed = paragraph.trim();
        
        if (!trimmed) return null;
        
        // Überschriften (mit **)
        if (trimmed.startsWith('**') && trimmed.endsWith('**') && !trimmed.includes(':')) {
          return (
            <h3 key={idx} className="text-xl font-bold text-stone-800 mt-6 mb-3">
              {trimmed.replace(/\*\*/g, '')}
            </h3>
          );
        }
        
        // Warnungen (mit ⚠️)
        if (trimmed.startsWith('⚠️')) {
          return (
            <div key={idx} className="bg-orange-50 border-l-4 border-orange-500 p-4 my-4 rounded">
              <p className="text-stone-700 font-semibold">
                {renderParagraph(trimmed, `warn-${idx}`)}
              </p>
            </div>
          );
        }
        
        // Listen-Elemente (mit -)
        if (trimmed.startsWith('-') || trimmed.startsWith('•')) {
          const text = trimmed.substring(1).trim();
          return (
            <li key={idx} className="ml-6 text-stone-700 my-2 list-disc">
              {renderParagraph(text, `li-${idx}`)}
            </li>
          );
        }
        
        // Nummerierte Listen
        if (/^\d+\./.test(trimmed)) {
          const text = trimmed.replace(/^\d+\.\s*/, '');
          return (
            <li key={idx} className="ml-6 text-stone-700 my-2 list-decimal">
              {renderParagraph(text, `num-${idx}`)}
            </li>
          );
        }
        
        // Normaler Paragraph
        return (
          <p key={idx} className="text-stone-700 mb-4 leading-relaxed">
            {renderParagraph(trimmed, `p-${idx}`)}
          </p>
        );
      })}
    </div>
  );
}

export default LessonContent;

