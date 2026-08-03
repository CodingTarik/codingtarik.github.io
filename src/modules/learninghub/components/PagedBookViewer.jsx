import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowLeft, Printer, Download, BookOpen, CheckCircle2, 
  Circle, List, FileText, ChevronRight, Share2, Sparkles 
} from 'lucide-react';
import BlogPostContent from '../../blog/components/BlogPostContent';

export default function PagedBookViewer({
  course,
  onBackToOverview,
  isLessonCompleted,
  toggleLessonCompleted,
  getCourseStats
}) {
  const [activeChapterId, setActiveChapterId] = useState(course.chapters?.[0]?.id || null);
  const [isRenderingPaged, setIsRenderingPaged] = useState(false);
  const chapters = course.chapters || [];
  const stats = getCourseStats(course);

  const activeChapter = chapters.find((ch) => ch.id === activeChapterId) || chapters[0];

  // Print handle
  const handlePrintPdf = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Printable Book Stylesheet injection */}
      <style>{`
        @media print {
          body {
            background: white !important;
            color: black !important;
          }
          .no-print {
            display: none !important;
          }
          .book-page-break {
            page-break-before: always !important;
            break-before: page !important;
          }
          .prose {
            max-width: 100% !important;
            color: black !important;
          }
          @page {
            size: ${course.pagedOptions?.pageSize || 'A4'};
            margin: ${course.pagedOptions?.margin || '20mm'};
            @top-right {
              content: "${course.title}";
              font-size: 9pt;
              color: #666;
            }
            @bottom-center {
              content: counter(page);
              font-size: 10pt;
              font-weight: bold;
            }
          }
        }
      `}</style>

      {/* Top Header / Control Bar (Hidden on print) */}
      <header className="no-print sticky top-0 z-30 bg-background/90 backdrop-blur-md border-b border-border px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button
            onClick={onBackToOverview}
            className="p-2 rounded-xl bg-card border border-border text-muted hover:text-text hover:border-primary transition-all cursor-pointer"
            title="Zurück zur Kurse-Übersicht"
          >
            <ArrowLeft size={18} />
          </button>
          <div>
            <span className="text-[11px] font-bold text-amber-500 uppercase tracking-wider">
              Paged.js Buch Format
            </span>
            <h1 className="text-sm sm:text-base font-bold text-text line-clamp-1">
              {course.title}
            </h1>
          </div>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-2">
          <button
            onClick={handlePrintPdf}
            className="px-4 py-2 rounded-xl text-xs font-bold bg-amber-500 text-white hover:bg-amber-600 transition-all flex items-center gap-2 shadow-md shadow-amber-500/20 cursor-pointer"
            title="Buch als PDF speichern oder drucken"
          >
            <Printer size={15} />
            <span className="hidden sm:inline">PDF Exportieren / Drucken</span>
          </button>
        </div>
      </header>

      <div className="flex-1 flex flex-col lg:flex-row">
        {/* TOC Sidebar (Hidden on print) */}
        <aside className="no-print w-full lg:w-72 bg-card border-r border-border p-4 flex flex-col gap-4">
          <div>
            <h2 className="text-xs font-bold text-muted uppercase tracking-wider mb-2">
              Inhaltsverzeichnis
            </h2>
            <p className="text-xs text-muted mb-3">
              {stats.completedCount} von {stats.totalCount} Kapitel gelesen ({stats.percentage}%)
            </p>

            <div className="space-y-1">
              {chapters.map((ch, idx) => {
                const isActive = ch.id === activeChapter?.id;
                const isDone = isLessonCompleted(course.id, ch.id);

                return (
                  <button
                    key={ch.id}
                    onClick={() => setActiveChapterId(ch.id)}
                    className={`
                      w-full text-left p-2.5 rounded-xl text-xs transition-all flex items-center justify-between group cursor-pointer
                      ${isActive
                        ? 'bg-amber-500/10 border border-amber-500/40 text-amber-500 font-bold'
                        : isDone
                        ? 'text-text hover:bg-border/30 font-medium'
                        : 'text-muted hover:text-text hover:bg-border/30'
                      }
                    `}
                  >
                    <div className="flex items-center gap-2.5 line-clamp-1">
                      <span className="text-[10px] px-1.5 py-0.5 rounded bg-border/50 text-muted font-mono">
                        K{idx + 1}
                      </span>
                      <span className="line-clamp-1">{ch.title}</span>
                    </div>

                    <div
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleLessonCompleted(course.id, ch.id);
                      }}
                      className="shrink-0 cursor-pointer hover:scale-110 transition-transform"
                    >
                      {isDone ? (
                        <CheckCircle2 size={15} className="text-emerald-500 fill-emerald-500/20" />
                      ) : (
                        <Circle size={15} className="text-muted/40 group-hover:text-amber-500" />
                      )}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="mt-auto pt-4 border-t border-border text-[11px] text-muted space-y-2">
            <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-600 dark:text-amber-400">
              <p className="font-semibold mb-1">📖 PDF Export Hinweis</p>
              <p>
                Klicke oben auf **PDF Exportieren**, um das gesamte Buch inklusive Deckblatt & Kapiteln als saubere A4-PDF auszudrucken.
              </p>
            </div>
          </div>
        </aside>

        {/* Book View Container */}
        <main className="flex-1 p-4 sm:p-10 max-w-4xl mx-auto w-full">
          {/* Printable Full Book View / Interactive Active Chapter View */}
          <div className="space-y-12">
            {/* Display Active Chapter in Interactive Mode */}
            {activeChapter && (
              <article className="bg-card border border-border/80 rounded-2xl p-6 sm:p-10 shadow-sm relative">
                {/* Chapter Header */}
                <div className="mb-6 pb-4 border-b border-border/60 flex items-center justify-between">
                  <div>
                    <span className="text-xs font-bold text-amber-500 uppercase tracking-widest">
                      Kapitel {activeChapter.chapterNumber || 1}
                    </span>
                    <h2 className="text-xl sm:text-2xl font-bold text-text mt-1">
                      {activeChapter.title}
                    </h2>
                  </div>

                  <button
                    onClick={() => toggleLessonCompleted(course.id, activeChapter.id)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                      isLessonCompleted(course.id, activeChapter.id)
                        ? 'bg-emerald-500/10 border border-emerald-500/40 text-emerald-500'
                        : 'bg-card border border-border text-muted hover:text-amber-500'
                    }`}
                  >
                    <CheckCircle2 size={15} />
                    <span>
                      {isLessonCompleted(course.id, activeChapter.id)
                        ? 'Gelesen'
                        : 'Als gelesen markieren'}
                    </span>
                  </button>
                </div>

                {/* Chapter Markdown Content */}
                <div className="prose dark:prose-invert max-w-none">
                  <BlogPostContent post={{ content: activeChapter.content }} />
                </div>
              </article>
            )}

            {/* Hidden Printable Container: Renders ALL chapters for window.print() */}
            <div className="hidden print:block space-y-12">
              <div className="text-center py-20 border-b border-black">
                <h1 className="text-4xl font-extrabold text-black mb-4">{course.title}</h1>
                <p className="text-lg text-gray-700 mb-8">{course.description}</p>
                <p className="text-sm text-gray-500">Autor: {course.author || 'Tarik Azzouzi'}</p>
              </div>

              {chapters.map((ch, idx) => (
                <div key={ch.id} className="book-page-break pt-8">
                  <h2 className="text-2xl font-bold text-black border-b border-gray-300 pb-2 mb-6">
                    Kapitel {idx + 1}: {ch.title}
                  </h2>
                  <div className="prose text-black max-w-none">
                    <BlogPostContent post={{ content: ch.content }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
