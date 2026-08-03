import React from 'react';
import { Settings, X, Sparkles, Layers, Sun, Moon, ScrollText, Check } from 'lucide-react';

export default function ReaderSettingsModal({
  isOpen,
  onClose,
  settings,
  onUpdateSettings
}) {
  if (!isOpen) return null;

  const themes = [
    { id: 'white', label: 'Classic White', bg: 'bg-white', text: 'text-gray-900', border: 'border-gray-300' },
    { id: 'sepia', label: 'Warm Sepia', bg: 'bg-[#fbf0d9]', text: 'text-[#433422]', border: 'border-[#e6d5b8]' },
    { id: 'dark', label: 'Midnight Slate', bg: 'bg-[#181a1f]', text: 'text-gray-100', border: 'border-gray-700' }
  ];

  const transitions = [
    { id: 'slide', label: 'Smooth Slide' },
    { id: 'flip', label: '3D Book Flip' },
    { id: 'fade', label: 'Fade' }
  ];

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-md animate-fadeIn">
      <div className="absolute inset-0" onClick={onClose}></div>

      <div className="relative w-full max-w-md bg-card border border-border shadow-2xl rounded-3xl overflow-hidden z-10 p-6 space-y-6 animate-scaleUp">
        
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-border/80">
          <div className="flex items-center gap-2">
            <Settings size={18} className="text-amber-500" />
            <h3 className="text-base font-extrabold text-text">Reader & Aesthetic Settings</h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 text-muted hover:text-text rounded-full hover:bg-border/60 transition-colors cursor-pointer"
          >
            <X size={18} />
          </button>
        </div>

        {/* 1. Paper Theme */}
        <div className="space-y-2">
          <label className="text-xs font-bold text-muted uppercase tracking-wider block">
            Paper Sheet Theme
          </label>
          <div className="grid grid-cols-3 gap-2.5">
            {themes.map((t) => (
              <button
                key={t.id}
                onClick={() => onUpdateSettings({ theme: t.id })}
                className={`p-3 rounded-2xl border ${t.bg} ${t.border} flex flex-col items-center justify-center gap-1.5 transition-all cursor-pointer ${
                  settings.theme === t.id ? 'ring-2 ring-amber-500 shadow-md scale-102' : 'opacity-80 hover:opacity-100'
                }`}
              >
                <span className={`text-xs font-bold ${t.text}`}>{t.label}</span>
                {settings.theme === t.id && <Check size={14} className="text-amber-500" />}
              </button>
            ))}
          </div>
        </div>

        {/* 2. Paper Texture Grain */}
        <div className="flex items-center justify-between p-3.5 rounded-2xl bg-background/60 border border-border/70">
          <div className="flex items-center gap-2.5">
            <ScrollText size={18} className="text-amber-500" />
            <div>
              <p className="text-xs font-bold text-text">Subtle Paper Grain</p>
              <p className="text-[11px] text-muted">Authentic SVG noise texture on A4 pages</p>
            </div>
          </div>
          <button
            onClick={() => onUpdateSettings({ paperTexture: !settings.paperTexture })}
            className={`w-12 h-6 rounded-full transition-colors relative p-0.5 cursor-pointer ${
              settings.paperTexture ? 'bg-amber-500' : 'bg-border'
            }`}
          >
            <div
              className={`w-5 h-5 rounded-full bg-white transition-transform ${
                settings.paperTexture ? 'translate-x-6' : 'translate-x-0'
              }`}
            />
          </button>
        </div>

        {/* 3. 3D Hover & Mesh Glow */}
        <div className="flex items-center justify-between p-3.5 rounded-2xl bg-background/60 border border-border/70">
          <div className="flex items-center gap-2.5">
            <Sparkles size={18} className="text-amber-500" />
            <div>
              <p className="text-xs font-bold text-text">3D Cover Mesh Glow</p>
              <p className="text-[11px] text-muted">3D tilt perspective on cover hover</p>
            </div>
          </div>
          <button
            onClick={() => onUpdateSettings({ meshGlow: !settings.meshGlow })}
            className={`w-12 h-6 rounded-full transition-colors relative p-0.5 cursor-pointer ${
              settings.meshGlow ? 'bg-amber-500' : 'bg-border'
            }`}
          >
            <div
              className={`w-5 h-5 rounded-full bg-white transition-transform ${
                settings.meshGlow ? 'translate-x-6' : 'translate-x-0'
              }`}
            />
          </button>
        </div>

        {/* 4. Page Transition Animation */}
        <div className="space-y-2">
          <label className="text-xs font-bold text-muted uppercase tracking-wider block">
            Page Turn Animation
          </label>
          <div className="grid grid-cols-3 gap-2">
            {transitions.map((tr) => (
              <button
                key={tr.id}
                onClick={() => onUpdateSettings({ transition: tr.id })}
                className={`py-2 px-3 rounded-xl border text-xs font-bold transition-all cursor-pointer ${
                  settings.transition === tr.id
                    ? 'bg-amber-500 text-white border-amber-500 shadow-sm'
                    : 'bg-card border-border text-muted hover:text-text'
                }`}
              >
                {tr.label}
              </button>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
