import React, { useState, useEffect } from 'react';
import { List, ChevronRight, ChevronDown } from 'lucide-react';

export default function TableOfContents({ content }) {
  const [headings, setHeadings] = useState([]);
  const [activeId, setActiveId] = useState('');
  const [expandedH2, setExpandedH2] = useState(new Set());

  useEffect(() => {
    // Extract headings from markdown content
    const headingRegex = /^(#{2,3})\s+(.+)$/gm;
    const extractedHeadings = [];
    let match;

    while ((match = headingRegex.exec(content)) !== null) {
      const level = match[1].length; // ## = 2, ### = 3
      const text = match[2].trim();
      const id = text
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)/g, '');
      
      extractedHeadings.push({ level, text, id });
    }

    setHeadings(extractedHeadings);
  }, [content]);

  useEffect(() => {
    // Track scroll position to highlight active heading
    const handleScroll = () => {
      const headingElements = headings.map(h => ({
        id: h.id,
        element: document.getElementById(h.id),
        level: h.level
      })).filter(h => h.element);

      // Find the heading that's currently in view
      let currentId = '';
      let currentH2Parent = null;
      
      for (let i = headingElements.length - 1; i >= 0; i--) {
        const element = headingElements[i].element;
        if (element.getBoundingClientRect().top <= 100) {
          currentId = headingElements[i].id;
          
          // Find parent H2 if this is H3
          if (headingElements[i].level === 3) {
            for (let j = i - 1; j >= 0; j--) {
              if (headingElements[j].level === 2) {
                currentH2Parent = headingElements[j].id;
                break;
              }
            }
          } else if (headingElements[i].level === 2) {
            currentH2Parent = headingElements[i].id;
          }
          break;
        }
      }

      setActiveId(currentId);
      
      // Auto-expand the parent H2 when its child is active
      if (currentH2Parent) {
        setExpandedH2(prev => new Set(prev).add(currentH2Parent));
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, [headings]);

  const scrollToHeading = (id, e) => {
    e?.stopPropagation();
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -80; // Offset for fixed header
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const toggleH2 = (h2Id, e) => {
    e.stopPropagation();
    setExpandedH2(prev => {
      const newSet = new Set(prev);
      if (newSet.has(h2Id)) {
        newSet.delete(h2Id);
      } else {
        newSet.add(h2Id);
      }
      return newSet;
    });
  };

  if (headings.length === 0) {
    return null;
  }

  // Group headings by H2 parents
  const groupedHeadings = [];
  let currentH2 = null;
  
  headings.forEach(heading => {
    if (heading.level === 2) {
      currentH2 = { ...heading, children: [] };
      groupedHeadings.push(currentH2);
    } else if (heading.level === 3 && currentH2) {
      currentH2.children.push(heading);
    }
  });

  return (
    <nav className="sticky top-8">
      <div className="bg-white dark:bg-stone-800 rounded-lg shadow-sm border border-stone-200 dark:border-stone-700 p-4 max-h-[calc(100vh-6rem)] overflow-y-auto scrollbar-thin">
        <h3 className="text-sm font-semibold text-stone-600 dark:text-stone-400 mb-3 flex items-center gap-2 uppercase tracking-wide">
          <List size={14} />
          <span>Contents</span>
        </h3>
        
        <ul className="space-y-1">
          {groupedHeadings.map((h2, index) => {
            const isExpanded = expandedH2.has(h2.id);
            const hasChildren = h2.children.length > 0;
            
            return (
              <li key={`${h2.id}-${index}`}>
                {/* H2 Heading */}
                <div className="flex items-stretch gap-1">
                  {hasChildren && (
                    <button
                      type="button"
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        toggleH2(h2.id, e);
                      }}
                      className="flex-shrink-0 px-1 hover:bg-stone-100 dark:hover:bg-stone-700/50 rounded transition-colors cursor-pointer"
                      aria-label={isExpanded ? 'Collapse' : 'Expand'}
                    >
                      {isExpanded ? (
                        <ChevronDown size={14} className="text-stone-600 dark:text-stone-400 pointer-events-none" />
                      ) : (
                        <ChevronRight size={14} className="text-stone-600 dark:text-stone-400 pointer-events-none" />
                      )}
                    </button>
                  )}
                  <button
                    type="button"
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      scrollToHeading(h2.id, e);
                    }}
                    className={`flex-1 text-left text-sm py-1.5 px-2 rounded transition-all flex items-start gap-2 group cursor-pointer ${
                      !hasChildren ? 'ml-5' : ''
                    } ${
                      activeId === h2.id
                        ? 'bg-stone-900 dark:bg-stone-100 text-white dark:text-stone-900 font-medium'
                        : 'text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100 hover:bg-stone-100 dark:hover:bg-stone-700/50'
                    }`}
                  >
                    <span className="line-clamp-2 pointer-events-none">{h2.text}</span>
                  </button>
                </div>
                
                {/* H3 Children */}
                {hasChildren && isExpanded && (
                  <ul className="ml-6 mt-1 space-y-1 relative z-10">
                    {h2.children.map((h3, h3Index) => (
                      <li key={`${h3.id}-${h3Index}`} className="relative">
                        <button
                          type="button"
                          onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            scrollToHeading(h3.id, e);
                          }}
                          className={`w-full text-left text-sm py-1.5 px-2 rounded transition-all flex items-start gap-2 group cursor-pointer ${
                            activeId === h3.id
                              ? 'bg-stone-900 dark:bg-stone-100 text-white dark:text-stone-900 font-medium'
                              : 'text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100 hover:bg-stone-100 dark:hover:bg-stone-700/50'
                          }`}
                        >
                          <ChevronRight 
                            size={12} 
                            className="mt-0.5 flex-shrink-0 pointer-events-none"
                          />
                          <span className="line-clamp-2 text-xs pointer-events-none">{h3.text}</span>
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}

