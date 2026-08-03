import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowLeft, Printer, BookOpen, CheckCircle2, 
  Circle, ChevronRight, FileText, Sparkles 
} from 'lucide-react';
import confetti from 'canvas-confetti';
import BlogPostContent from '../../blog/components/BlogPostContent';

export default function PagedBookViewer({
  course,
  onBackToOverview,
  isLessonCompleted,
  toggleLessonCompleted,
  getCourseStats
}) {
  const [activeChapterId, setActiveChapterId] = useState(course.chapters?.[0]?.id || null);
  const chapters = course.chapters || [];
  const stats = getCourseStats(course);

  const activeChapter = chapters.find((ch) => ch.id === activeChapterId) || chapters[0];

  const handlePrintPdf = () => {
    window.print();
  };

  const handleToggleChapter = (chId) => {
    const isDone = isLessonCompleted(course.id, chId);
    toggleLessonCompleted(course.id, chId);
    if (!isDone && stats.completedCount + 1 >= chapters.length) {
      confetti({
        particleCount: 90,
        spread: 80,
        origin: { y: 0.6 }
      });
    }
  };

  return (
    <div className="min-h-screen bg-background text-text flex flex-col">
      {/* Printable Book CSS Rules */}
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
      <header className="no-print sticky top-0 z-30 bg-background/80 backdrop-blur-xl border-b border-border/80 px-4 sm:px-8 py-3.5 flex items-center justify-between shadow-xs">
        <div className="flex items-center gap-3 min-w-0">
          <button
            onClick={onBackToOverview}
            className="p-2 rounded-xl bg-card border border-border text-muted hover:text-text hover:border-primary transition-all cursor-pointer shrink-0"
            title="Zurück zum Learning Hub"
          >
            <ArrowLeft size={18} />
          </button>
          <div className="min-w-0">
            <span className="text-[10px] font-extrabold uppercase text-amber-500 tracking-wider">
              Paged.js Buch Format
            </span>
            <h1 className="text-sm sm:text-base font-extrabold text-text truncate">
              {course.title}
            </h1>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={handlePrintPdf}
            className="px-4 py-2.5 rounded-xl text-xs font-bold bg-gradient-to-r from-amber-500 to-amber-600 text-white hover:opacity-95 transition-all flex items-center gap-2 shadow-lg shadow-amber-500/20 cursor-pointer"
            title="Buch als PDF speichern oder drucken"
          >
            <Printer size={15} />
            <span className="hidden sm:inline">PDF Exportieren / Drucken</span>
          </button>
        </div>
      </header>

      <div className="flex-1 flex flex-col lg:flex-row">
        {/* TOC Sidebar */}
        <aside className="no-print w-full lg:w-80 bg-card/95 backdrop-blur-md border-r border-border p-5 flex flex-col gap-5">
          <div>
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-xs font-extrabold text-muted uppercase tracking-wider">
                Inhaltsverzeichnis
              </h2>
              <span className="text-xs font-bold text-amber-500">{stats.percentage}% Gelesen</span>
            </div>

            <div className="w-full h-1.5 bg-border/60 rounded-full overflow-hidden mb-4">
              <div
                className="h-full bg-amber-500 transition-all duration-300 rounded-full"
                style={{ width: `${stats.percentage}%` }}
              />
            </div>

            <div className="space-y-1.5">
              {chapters.map((ch, idx) => {
                const isActive = ch.id === activeChapter?.id;
                const isDone = isLessonCompleted(course.id, ch.id);

                return (
                  <button
                    key={ch.id}
                    onClick={() => setActiveChapterId(ch.id)}
                    className={`
                      w-full text-left p-3 rounded-xl text-xs transition-all flex items-center justify-between group cursor-pointer border
                      ${isActive
                        ? 'bg-amber-500/10 border-amber-500/40 text-amber-500 font-bold shadow-xs'
                        : isDone
                        ? 'text-text hover:bg-border/30 font-medium border-border/40'
                        : 'text-muted hover:text-text hover:bg-border/30 border-transparent'
                      }
                    `}
                  >
                    <div className="flex items-center gap-2.5 min-w-0 pr-2">
                      <span className="text-[10px] px-1.5 py-0.5 rounded bg-border/50 text-muted font-mono font-bold shrink-0">
                        K{idx + 1}
                      </span>
                      <span className="truncate">{ch.title}</span>
                    </div>

                    <div
                      onClick={(e) => {
                        e.stopPropagation();
                        handleToggleChapter(ch.id);
                      }}
                      className="shrink-0 cursor-pointer hover:scale-110 transition-transform"
                    >
                      {isDone ? (
                        <CheckCircle2 size={16} className="text-emerald-500 fill-emerald-500/20" />
                      ) : (
                        <Circle size={16} className="text-muted/40 group-hover:text-amber-500" />
                      )}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="mt-auto pt-4 border-t border-border text-[11px] text-muted space-y-2">
            <div className="p-3.5 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-600 dark:text-amber-400">
              <p className="font-bold mb-1">📖 PDF Export Hinweis</p>
              <p className="leading-relaxed">
                Klicke oben auf **PDF Exportieren**, um das Buch inklusive aller Kapitel als DIN-A4 Dokument zu drucken.
              </p>
            </div>
          </div>
        </aside>

        {/* Main Book Content Container */}
        <main className="flex-1 p-4 sm:p-10 max-w-4xl mx-auto w-full">
          <div className="space-y-12">
            {activeChapter && (
              <article className="bg-card border border-border/80 rounded-3xl p-6 sm:p-10 shadow-xs relative">
                {/* Chapter Header */}
                <div className="mb-8 pb-5 border-b border-border/60 flex items-center justify-between flex-wrap gap-4">
                  <div>
                    <span className="text-xs font-bold text-amber-500 uppercase tracking-widest">
                      Kapitel {activeChapter.chapterNumber || 1}
                    </span>
                    <h2 className="text-xl sm:text-3xl font-extrabold text-text mt-1">
                      {activeChapter.title}
                    </h2>
                  </div>

                  <button
                    onClick={() => handleToggleChapter(activeChapter.id)}
                    className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 cursor-pointer shadow-xs ${
                      isLessonCompleted(course.id, activeChapter.id)
                        ? 'bg-emerald-500/15 border border-emerald-500/40 text-emerald-500'
                        : 'bg-card border border-border text-muted hover:text-amber-500'
                    }`}
                  >
                    <CheckCircle2 size={16} />
                    <span>
                      {isLessonCompleted(course.id, activeChapter.id)
                        ? 'Kapitel gelesen'
                        : 'Als gelesen markieren'}
                    </span>
                  </button>
                </div>

                {/* Chapter Content */}
                <div className="prose dark:prose-invert max-w-none">
                  <BlogPostContent post={{ content: activeChapter.content }} />
                </div>
              </article>
            )}

            {/* Hidden Printable Container for window.print() */}
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
