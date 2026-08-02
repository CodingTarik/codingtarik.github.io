/**
 * DrawingCanvas — Freehand drawing / handwriting component.
 * Supports pen, highlighter, eraser with pressure sensitivity.
 */

import { useRef, useState, useEffect, useCallback } from 'react';
import {
  Pen,
  Highlighter,
  Eraser,
  Undo2,
  Redo2,
  Trash2,
  Palette,
  Minus,
  Plus,
} from 'lucide-react';
import type { DrawingStroke } from '../types';

const COLORS = [
  '#000000', '#ffffff', '#ef4444', '#f97316', '#eab308',
  '#22c55e', '#3b82f6', '#8b5cf6', '#ec4899', '#6b7280',
];

interface Props {
  width: number;
  height: number;
  strokes: DrawingStroke[];
  onChange: (strokes: DrawingStroke[]) => void;
  className?: string;
  background?: 'white' | 'transparent' | 'lined' | 'grid';
}

export default function DrawingCanvas({
  width,
  height,
  strokes,
  onChange,
  className = '',
  background = 'white',
}: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [tool, setTool] = useState<'pen' | 'highlighter' | 'eraser'>('pen');
  const [color, setColor] = useState('#000000');
  const [lineWidth, setLineWidth] = useState(3);
  const [isDrawing, setIsDrawing] = useState(false);
  const [currentStroke, setCurrentStroke] = useState<DrawingStroke | null>(null);
  const [undoStack, setUndoStack] = useState<DrawingStroke[][]>([]);
  const [showColorPicker, setShowColorPicker] = useState(false);

  // Redraw all strokes
  const redraw = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.clearRect(0, 0, width, height);

    // Background
    if (background === 'white') {
      ctx.fillStyle = '#ffffff';
      ctx.fillRect(0, 0, width, height);
    } else if (background === 'lined') {
      ctx.fillStyle = '#ffffff';
      ctx.fillRect(0, 0, width, height);
      ctx.strokeStyle = '#e2e8f0';
      ctx.lineWidth = 0.5;
      for (let y = 30; y < height; y += 30) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }
    } else if (background === 'grid') {
      ctx.fillStyle = '#ffffff';
      ctx.fillRect(0, 0, width, height);
      ctx.strokeStyle = '#e2e8f0';
      ctx.lineWidth = 0.5;
      for (let y = 0; y < height; y += 25) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }
      for (let x = 0; x < width; x += 25) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
    }

    // Draw all saved strokes
    const allStrokes = currentStroke ? [...strokes, currentStroke] : strokes;
    for (const stroke of allStrokes) {
      if (stroke.points.length < 2) continue;
      ctx.beginPath();
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';

      if (stroke.tool === 'highlighter') {
        ctx.globalAlpha = 0.35;
        ctx.strokeStyle = stroke.color;
        ctx.lineWidth = stroke.width * 3;
      } else if (stroke.tool === 'eraser') {
        ctx.globalCompositeOperation = 'destination-out';
        ctx.strokeStyle = 'rgba(0,0,0,1)';
        ctx.lineWidth = stroke.width * 4;
      } else {
        ctx.globalAlpha = 1;
        ctx.strokeStyle = stroke.color;
        ctx.lineWidth = stroke.width;
      }

      ctx.moveTo(stroke.points[0].x, stroke.points[0].y);
      for (let i = 1; i < stroke.points.length; i++) {
        const p = stroke.points[i];
        ctx.lineTo(p.x, p.y);
      }
      ctx.stroke();
      ctx.globalAlpha = 1;
      ctx.globalCompositeOperation = 'source-over';
    }
  }, [strokes, currentStroke, width, height, background]);

  useEffect(() => { redraw(); }, [redraw]);

  const getPos = (e: React.PointerEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current!;
    const rect = canvas.getBoundingClientRect();
    const scaleX = width / rect.width;
    const scaleY = height / rect.height;
    return {
      x: (e.clientX - rect.left) * scaleX,
      y: (e.clientY - rect.top) * scaleY,
      pressure: e.pressure || 0.5,
    };
  };

  const handlePointerDown = (e: React.PointerEvent<HTMLCanvasElement>) => {
    e.preventDefault();
    (e.target as HTMLCanvasElement).setPointerCapture(e.pointerId);
    setIsDrawing(true);
    const pos = getPos(e);
    const stroke: DrawingStroke = {
      points: [pos],
      color: tool === 'eraser' ? '#000000' : color,
      width: lineWidth,
      tool,
    };
    setCurrentStroke(stroke);
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLCanvasElement>) => {
    if (!isDrawing || !currentStroke) return;
    e.preventDefault();
    const pos = getPos(e);
    setCurrentStroke(prev => prev ? {
      ...prev,
      points: [...prev.points, pos],
    } : null);
  };

  const handlePointerUp = () => {
    if (!isDrawing || !currentStroke) return;
    setIsDrawing(false);
    const newStrokes = [...strokes, currentStroke];
    setCurrentStroke(null);
    setUndoStack([]);
    onChange(newStrokes);
  };

  const handleUndo = () => {
    if (strokes.length === 0) return;
    const last = strokes[strokes.length - 1];
    setUndoStack(prev => [...prev, [last]]);
    onChange(strokes.slice(0, -1));
  };

  const handleRedo = () => {
    if (undoStack.length === 0) return;
    const restored = undoStack[undoStack.length - 1];
    setUndoStack(prev => prev.slice(0, -1));
    onChange([...strokes, ...restored]);
  };

  const handleClear = () => {
    setUndoStack([strokes]);
    onChange([]);
  };

  return (
    <div className={`flex flex-col ${className}`}>
      {/* Toolbar */}
      <div className="flex items-center gap-1.5 px-3 py-2 bg-slate-800/80 rounded-t-xl border border-slate-700/40 flex-wrap">
        {/* Tools */}
        <div className="flex gap-1">
          {([
            { id: 'pen' as const, icon: Pen, label: 'Pen' },
            { id: 'highlighter' as const, icon: Highlighter, label: 'Highlighter' },
            { id: 'eraser' as const, icon: Eraser, label: 'Eraser' },
          ]).map(t => (
            <button
              key={t.id}
              onClick={() => setTool(t.id)}
              className={`w-8 h-8 rounded-lg flex items-center justify-center transition-all ${
                tool === t.id
                  ? 'bg-primary-500/20 text-primary-400 ring-1 ring-primary-500/40'
                  : 'text-slate-400 hover:text-white hover:bg-slate-700/50'
              }`}
              title={t.label}
            >
              <t.icon size={15} />
            </button>
          ))}
        </div>

        <div className="w-px h-6 bg-slate-700/50" />

        {/* Color picker */}
        <div className="relative">
          <button
            onClick={() => setShowColorPicker(p => !p)}
            className="w-8 h-8 rounded-lg flex items-center justify-center hover:bg-slate-700/50"
            title="Color"
          >
            <div className="w-5 h-5 rounded-full border-2 border-slate-600" style={{ backgroundColor: color }} />
          </button>
          {showColorPicker && (
            <div className="absolute top-full left-0 mt-1 p-2 bg-slate-800 border border-slate-700/50 rounded-lg grid grid-cols-5 gap-1 z-20 shadow-xl">
              {COLORS.map(c => (
                <button
                  key={c}
                  onClick={() => { setColor(c); setShowColorPicker(false); }}
                  className={`w-7 h-7 rounded-full border-2 transition-transform hover:scale-110 ${
                    c === color ? 'border-primary-400 scale-110' : 'border-slate-600'
                  }`}
                  style={{ backgroundColor: c }}
                />
              ))}
            </div>
          )}
        </div>

        <div className="w-px h-6 bg-slate-700/50" />

        {/* Line width */}
        <div className="flex items-center gap-1">
          <button
            onClick={() => setLineWidth(w => Math.max(1, w - 1))}
            className="w-7 h-7 rounded flex items-center justify-center text-slate-400 hover:text-white"
          >
            <Minus size={12} />
          </button>
          <span className="text-[10px] text-slate-400 w-5 text-center tabular-nums">{lineWidth}</span>
          <button
            onClick={() => setLineWidth(w => Math.min(20, w + 1))}
            className="w-7 h-7 rounded flex items-center justify-center text-slate-400 hover:text-white"
          >
            <Plus size={12} />
          </button>
        </div>

        <div className="flex-1" />

        {/* Undo / Redo / Clear */}
        <div className="flex gap-1">
          <button
            onClick={handleUndo}
            disabled={strokes.length === 0}
            className="w-8 h-8 rounded-lg flex items-center justify-center text-slate-400 hover:text-white disabled:opacity-30"
            title="Undo"
          >
            <Undo2 size={14} />
          </button>
          <button
            onClick={handleRedo}
            disabled={undoStack.length === 0}
            className="w-8 h-8 rounded-lg flex items-center justify-center text-slate-400 hover:text-white disabled:opacity-30"
            title="Redo"
          >
            <Redo2 size={14} />
          </button>
          <button
            onClick={handleClear}
            disabled={strokes.length === 0}
            className="w-8 h-8 rounded-lg flex items-center justify-center text-red-400 hover:text-red-300 disabled:opacity-30"
            title="Clear all"
          >
            <Trash2 size={14} />
          </button>
        </div>
      </div>

      {/* Canvas */}
      <canvas
        ref={canvasRef}
        width={width}
        height={height}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerLeave={handlePointerUp}
        className="touch-none cursor-crosshair rounded-b-xl border border-t-0 border-slate-700/40"
        style={{ width: '100%', height: 'auto', aspectRatio: `${width}/${height}` }}
      />
    </div>
  );
}
