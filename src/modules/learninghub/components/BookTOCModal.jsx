import React from 'react';
import { List, X, BookOpen, Hash } from 'lucide-react';

export default function BookTOCModal({ isOpen, onClose, chapters, allPages, onJumpToChapter, onJumpToPage }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-md animate-fadeIn">
      <div className="absolute inset-0" onClick={onClose}></div>

      <div className="relative w-full max-w-lg bg-card border border-border shadow-2xl rounded-3xl overflow-hidden z-10 animate-scaleUp flex flex-col max-h-[80vh]">
        {/* Header */}
        <div className="flex items-center justify-between p-5 pb-4 border-b border-border/80">
          <div className="flex items-center gap-2">
            <span
              className="w-8 h-8 rounded-lg flex items-center justify-center text-emerald-300 font-black font-mono"
              style={{ background: '#052e16', boxShadow: '3px 3px 0 rgba(34,197,94,0.3)' }}
            >
              <List size={15} />
            </span>
            <div>
              <h3 className="text-base font-extrabold text-text leading-tight">Inhaltsverzeichnis</h3>
              <p className="text-[11px] text-muted">Automatisch aus dem Buch generiert</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1 text-muted hover:text-text rounded-full hover:bg-border/60 transition-colors cursor-pointer"
          >
            <X size={18} />
          </button>
        </div>

        {/* TOC Body */}
        <div className="overflow-y-auto flex-1 p-3 space-y-1.5">
          {(chapters || []).map((ch, idx) => {
            const pages = (allPages || []).filter((p) => p.chapterId === ch.id);
            return (
              <div
                key={ch.id}
                className="rounded-xl border border-border/70 bg-background/50 overflow-hidden"
              >
                <button
                  onClick={() => onJumpToChapter && onJumpToChapter(ch.id)}
                  className="w-full flex items-center justify-between gap-3 px-4 py-3 hover:bg-amber-500/8 transition-colors cursor-pointer text-left"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <span
                      className="flex-none w-7 h-7 rounded-lg flex items-center justify-center text-emerald-300 font-black font-mono text-xs"
                      style={{ background: '#052e16' }}
                    >
                      {ch.chapterNumber || idx + 1}
                    </span>
                    <span className="text-sm font-bold text-text truncate">{ch.title}</span>
                  </div>
                  <span className="flex-none flex items-center gap-1 text-[11px] font-mono text-muted">
                    <BookOpen size={12} />
                    {pages.length} Seite{pages.length === 1 ? '' : 'n'}
                  </span>
                </button>

                {pages.length > 1 && (
                  <div className="flex flex-wrap gap-1.5 px-4 pb-3">
                    {pages.map((pg) => (
                      <button
                        key={pg.globalPageNum}
                        onClick={() => onJumpToPage && onJumpToPage(pg.globalPageNum)}
                        className="flex items-center gap-1 px-2 py-1 rounded-md border border-border/70 bg-card text-[11px] font-mono text-muted hover:text-amber-500 hover:border-amber-500/60 transition-colors cursor-pointer"
                      >
                        <Hash size={10} />
                        {pg.globalPageNum}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            );
          })}

          {(!chapters || chapters.length === 0) && (
            <p className="text-sm text-muted text-center py-8">Keine Kapitel vorhanden.</p>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-border/70 bg-background/40">
          <p className="text-center text-[11px] font-mono text-muted">
            <span className="text-emerald-300">✔</span> {allPages?.length || 0} Seiten &bull; automatisches Inhaltsverzeichnis
          </p>
        </div>
      </div>
    </div>
  );
}
