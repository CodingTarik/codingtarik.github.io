import React, { useState, useRef, useCallback, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FileText, Merge, Scissors, Minimize2, Image, RotateCw,
  FileOutput, Trash2, Droplets, Hash, Lock, ArrowLeft,
  Upload, X, Download, GripVertical, ChevronDown, ChevronUp,
  Check, AlertCircle, Loader2, Plus, Eye, Settings2, Sparkles,
  LayoutGrid, Copy, ZoomIn, RotateCcw
} from 'lucide-react';
import { PDFDocument, rgb, StandardFonts, degrees } from 'pdf-lib';

// ─── Utility: format file size ───────────────────────────────────────────────
const formatSize = (bytes) => {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
};

// ─── Utility: get PDF page count ─────────────────────────────────────────────
const getPdfPageCount = async (arrayBuffer) => {
  try {
    const pdf = await PDFDocument.load(arrayBuffer, { ignoreEncryption: true });
    return pdf.getPageCount();
  } catch {
    return 0;
  }
};

// ─── Utility: generate thumbnail via canvas ──────────────────────────────────
const generateThumbnail = async (file) => {
  try {
    const arrayBuffer = await file.arrayBuffer();
    const loadingTask = window.pdfjsLib?.getDocument({ data: arrayBuffer });
    if (!loadingTask) return null;
    const pdf = await loadingTask.promise;
    const page = await pdf.getPage(1);
    const viewport = page.getViewport({ scale: 0.3 });
    const canvas = document.createElement('canvas');
    canvas.width = viewport.width;
    canvas.height = viewport.height;
    const ctx = canvas.getContext('2d');
    await page.render({ canvasContext: ctx, viewport }).promise;
    return canvas.toDataURL('image/png');
  } catch {
    return null;
  }
};

// ─── DropZone Component ──────────────────────────────────────────────────────
function DropZone({ onFiles, multiple = false, accept = '.pdf', label, sublabel, gradient = 'from-rose-500 to-orange-500' }) {
  const [isDragging, setIsDragging] = useState(false);
  const inputRef = useRef(null);

  const handleDrag = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
  }, []);

  const handleDragIn = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  }, []);

  const handleDragOut = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  }, []);

  const handleDrop = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
    const files = Array.from(e.dataTransfer.files);
    if (files.length) onFiles(multiple ? files : [files[0]]);
  }, [onFiles, multiple]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      onClick={() => inputRef.current?.click()}
      onDragEnter={handleDragIn}
      onDragLeave={handleDragOut}
      onDragOver={handleDrag}
      onDrop={handleDrop}
      className={`
        relative cursor-pointer rounded-3xl border-2 border-dashed p-12 text-center
        transition-all duration-300 overflow-hidden
        ${isDragging
          ? `border-transparent bg-gradient-to-br ${gradient} scale-[1.02] shadow-2xl`
          : 'border-border hover:border-rose-400/60 hover:bg-rose-500/[0.03]'
        }
      `}
    >
      {/* subtle glow when dragging */}
      {isDragging && (
        <div className="absolute inset-0 bg-white/10 pointer-events-none" />
      )}
      <input
        ref={inputRef}
        type="file"
        accept={accept}
        multiple={multiple}
        className="hidden"
        onChange={(e) => {
          const files = Array.from(e.target.files);
          if (files.length) onFiles(files);
          e.target.value = '';
        }}
      />
      <motion.div
        animate={isDragging ? { scale: 1.1, y: -4 } : { scale: 1, y: 0 }}
        transition={{ type: 'spring', stiffness: 300 }}
      >
        <div className={`mx-auto mb-5 relative w-20 h-20 rounded-3xl bg-gradient-to-br ${gradient} flex items-center justify-center shadow-xl`}>
          <Upload size={30} className="text-white" />
          <span className="absolute -right-1 -top-1 w-5 h-5 rounded-full bg-emerald-400 border-2 border-background flex items-center justify-center">
            <Check size={10} className="text-white" />
          </span>
        </div>
        <p className={`text-lg font-bold mb-1 ${isDragging ? 'text-white' : 'text-text'}`}>
          {isDragging ? 'Drop it to add!' : (label || 'Drop your PDF here')}
        </p>
        <p className={`text-sm ${isDragging ? 'text-white/80' : 'text-muted'}`}>
          {sublabel || 'Klicken oder Dateien hierher ziehen'}
        </p>
      </motion.div>
    </motion.div>
  );
}

// ─── FileChip Component ──────────────────────────────────────────────────────
function FileChip({ file, onRemove, index, pageCount, thumbnail, gradient = 'from-rose-500 to-orange-500' }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      className="group flex items-center gap-3 bg-card border border-border rounded-2xl p-3 hover:shadow-lg hover:shadow-black/5 dark:hover:shadow-black/20 hover:border-rose-400/30 transition-all"
    >
      {thumbnail ? (
        <img src={thumbnail} alt="" className="w-11 h-13 rounded-xl object-cover border border-border" />
      ) : (
        <div className={`w-11 h-14 rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center flex-shrink-0 shadow-md`}>
          <FileText size={18} className="text-white" />
        </div>
      )}
      <div className="flex-1 min-w-0">
        <p className="text-sm font-medium text-text truncate">{file.name}</p>
        <p className="text-xs text-muted">
          {formatSize(file.size)}
          {pageCount > 0 && ` · ${pageCount} page${pageCount !== 1 ? 's' : ''}`}
        </p>
      </div>
      {onRemove && (
        <button
          onClick={(e) => { e.stopPropagation(); onRemove(index); }}
          className="opacity-0 group-hover:opacity-100 p-1.5 rounded-lg hover:bg-red-100 dark:hover:bg-red-900/30 text-muted hover:text-red-600 transition-all"
        >
          <X size={14} />
        </button>
      )}
    </motion.div>
  );
}

// ─── ProgressBar Component ───────────────────────────────────────────────────
function ProgressBar({ progress, label, gradient = 'from-rose-500 to-orange-500' }) {
  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-2">
        {label && <p className="text-sm text-muted">{label}</p>}
        <span className="text-xs font-mono text-muted">{Math.round(progress)}%</span>
      </div>
      <div className="h-2.5 bg-border rounded-full overflow-hidden relative">
        <motion.div
          animate={{ width: `${progress}%` }}
          className={`h-full bg-gradient-to-r ${gradient} rounded-full`}
          transition={{ duration: 0.3 }}
        />
        <div className="absolute inset-0 rounded-full shadow-[inset_0_1px_2px_rgba(0,0,0,0.2)] pointer-events-none" />
      </div>
    </div>
  );
}

// ─── StatusMessage Component ─────────────────────────────────────────────────
function StatusMessage({ type, children }) {
  const styles = {
    success: 'bg-emerald-500/10 border-emerald-500/30 text-emerald-700 dark:text-emerald-300',
    error: 'bg-red-500/10 border-red-500/30 text-red-700 dark:text-red-300',
    info: 'bg-blue-500/10 border-blue-500/30 text-blue-700 dark:text-blue-300',
  };
  const icons = {
    success: <div className="w-6 h-6 rounded-full bg-emerald-500/15 flex items-center justify-center"><Check size={14} className="text-emerald-400" /></div>,
    error: <div className="w-6 h-6 rounded-full bg-red-500/15 flex items-center justify-center"><AlertCircle size={14} className="text-red-400" /></div>,
    info: <Loader2 size={16} className="animate-spin text-blue-400" />,
  };
  return (
    <motion.div
      initial={{ opacity: 0, y: -8, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      className={`flex items-center gap-2.5 px-4 py-3 rounded-2xl border text-sm font-medium backdrop-blur-sm ${styles[type]}`}
    >
      {icons[type]}
      {children}
    </motion.div>
  );
}

// ─── ActionButton Component ──────────────────────────────────────────────────
function ActionButton({ onClick, disabled, loading, children, variant = 'primary', gradient = null }) {
  const base = 'inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg';
  const variants = {
    primary: `${gradient || 'from-rose-500 to-orange-500'} text-white bg-gradient-to-r hover:shadow-xl active:scale-[0.98] shadow-black/10 dark:shadow-black/30`,
    secondary: 'bg-card border border-border text-text hover:bg-border/50 shadow-none',
  };
  return (
    <motion.button
      whileHover={!disabled ? { scale: 1.02 } : {}}
      whileTap={!disabled ? { scale: 0.98 } : {}}
      onClick={onClick}
      disabled={disabled || loading}
      className={`${base} ${variants[variant]}`}
    >
      {loading && <Loader2 size={16} className="animate-spin" />}
      {children}
    </motion.button>
  );
}

// ─── Download helper ─────────────────────────────────────────────────────────
const downloadBlob = (blob, filename) => {
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
};

// ═══════════════════════════════════════════════════════════════════════════════
//  TOOL: Merge PDFs
// ═══════════════════════════════════════════════════════════════════════════════
function MergePdfTool() {
  const [files, setFiles] = useState([]);
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);
  const [pageCounts, setPageCounts] = useState({});
  const [thumbnails, setThumbnails] = useState({});

  const addFiles = async (newFiles) => {
    const pdfFiles = newFiles.filter(f => f.type === 'application/pdf');
    setFiles(prev => [...prev, ...pdfFiles]);
    for (const f of pdfFiles) {
      const ab = await f.arrayBuffer();
      const count = await getPdfPageCount(ab);
      setPageCounts(prev => ({ ...prev, [f.name + f.size]: count }));
      const thumb = await generateThumbnail(f);
      if (thumb) setThumbnails(prev => ({ ...prev, [f.name + f.size]: thumb }));
    }
  };

  const removeFile = (idx) => setFiles(prev => prev.filter((_, i) => i !== idx));

  const moveFile = (from, to) => {
    setFiles(prev => {
      const arr = [...prev];
      const [item] = arr.splice(from, 1);
      arr.splice(to, 0, item);
      return arr;
    });
  };

  const merge = async () => {
    if (files.length < 2) return;
    setLoading(true);
    setStatus({ type: 'info', msg: 'Merging PDFs...' });
    try {
      const merged = await PDFDocument.create();
      for (const file of files) {
        const ab = await file.arrayBuffer();
        const doc = await PDFDocument.load(ab);
        const pages = await merged.copyPages(doc, doc.getPageIndices());
        pages.forEach(p => merged.addPage(p));
      }
      const bytes = await merged.save();
      downloadBlob(new Blob([bytes], { type: 'application/pdf' }), 'merged.pdf');
      setStatus({ type: 'success', msg: 'PDFs merged successfully!' });
    } catch (err) {
      setStatus({ type: 'error', msg: `Error: ${err.message}` });
    }
    setLoading(false);
  };

  return (
    <div className="space-y-6">
      <DropZone
        onFiles={addFiles}
        multiple
        label="Drop PDFs to merge"
        sublabel="Add multiple files and arrange their order"
      />
      {files.length > 0 && (
        <div className="space-y-2">
          <p className="text-sm font-medium text-muted mb-3">
            {files.length} file{files.length !== 1 ? 's' : ''} · Drag to reorder
          </p>
          <AnimatePresence>
            {files.map((f, i) => (
              <div key={f.name + f.size + i} className="flex items-center gap-2">
                <div className="flex flex-col gap-1">
                  <button
                    disabled={i === 0}
                    onClick={() => moveFile(i, i - 1)}
                    className="p-1 rounded hover:bg-border disabled:opacity-20 text-muted"
                  >
                    <ChevronUp size={14} />
                  </button>
                  <button
                    disabled={i === files.length - 1}
                    onClick={() => moveFile(i, i + 1)}
                    className="p-1 rounded hover:bg-border disabled:opacity-20 text-muted"
                  >
                    <ChevronDown size={14} />
                  </button>
                </div>
                <div className="flex-1">
                  <FileChip
                    file={f}
                    index={i}
                    onRemove={removeFile}
                    pageCount={pageCounts[f.name + f.size] || 0}
                    thumbnail={thumbnails[f.name + f.size]}
                  />
                </div>
              </div>
            ))}
          </AnimatePresence>
        </div>
      )}
      {status && <StatusMessage type={status.type}>{status.msg}</StatusMessage>}
      <div className="flex gap-3">
        <ActionButton onClick={merge} disabled={files.length < 2} loading={loading}>
          <Merge size={16} /> Merge {files.length} PDF{files.length !== 1 ? 's' : ''}
        </ActionButton>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
//  TOOL: Split PDF
// ═══════════════════════════════════════════════════════════════════════════════
function SplitPdfTool() {
  const [file, setFile] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  const [mode, setMode] = useState('all'); // 'all' | 'range'
  const [rangeStart, setRangeStart] = useState(1);
  const [rangeEnd, setRangeEnd] = useState(1);
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleFile = async (files) => {
    const f = files[0];
    setFile(f);
    const ab = await f.arrayBuffer();
    const count = await getPdfPageCount(ab);
    setPageCount(count);
    setRangeEnd(count);
    setStatus(null);
  };

  const split = async () => {
    if (!file) return;
    setLoading(true);
    setStatus({ type: 'info', msg: 'Splitting PDF...' });
    try {
      const ab = await file.arrayBuffer();
      const srcDoc = await PDFDocument.load(ab);

      if (mode === 'all') {
        for (let i = 0; i < srcDoc.getPageCount(); i++) {
          const newDoc = await PDFDocument.create();
          const [page] = await newDoc.copyPages(srcDoc, [i]);
          newDoc.addPage(page);
          const bytes = await newDoc.save();
          downloadBlob(new Blob([bytes], { type: 'application/pdf' }), `page-${i + 1}.pdf`);
        }
      } else {
        const start = Math.max(1, rangeStart) - 1;
        const end = Math.min(pageCount, rangeEnd);
        const newDoc = await PDFDocument.create();
        const indices = [];
        for (let i = start; i < end; i++) indices.push(i);
        const pages = await newDoc.copyPages(srcDoc, indices);
        pages.forEach(p => newDoc.addPage(p));
        const bytes = await newDoc.save();
        downloadBlob(new Blob([bytes], { type: 'application/pdf' }), `pages-${rangeStart}-${rangeEnd}.pdf`);
      }

      setStatus({ type: 'success', msg: 'PDF split successfully!' });
    } catch (err) {
      setStatus({ type: 'error', msg: `Error: ${err.message}` });
    }
    setLoading(false);
  };

  return (
    <div className="space-y-6">
      {!file ? (
        <DropZone onFiles={handleFile} label="Drop a PDF to split" sublabel="Split into individual pages or page ranges" />
      ) : (
        <>
          <FileChip file={file} pageCount={pageCount} onRemove={() => { setFile(null); setPageCount(0); }} index={0} />

          <div className="bg-card border border-border rounded-xl p-5 space-y-4">
            <p className="font-semibold text-text text-sm">Split Mode</p>
            <div className="flex gap-3">
              <button
                onClick={() => setMode('all')}
                className={`flex-1 py-3 px-4 rounded-xl text-sm font-medium transition-all border ${
                  mode === 'all'
                    ? 'border-rose-500 bg-rose-500/10 text-rose-600 dark:text-rose-400'
                    : 'border-border text-muted hover:border-rose-300'
                }`}
              >
                Every page as separate PDF
              </button>
              <button
                onClick={() => setMode('range')}
                className={`flex-1 py-3 px-4 rounded-xl text-sm font-medium transition-all border ${
                  mode === 'range'
                    ? 'border-rose-500 bg-rose-500/10 text-rose-600 dark:text-rose-400'
                    : 'border-border text-muted hover:border-rose-300'
                }`}
              >
                Extract page range
              </button>
            </div>

            {mode === 'range' && (
              <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} className="flex items-center gap-3">
                <div>
                  <label className="text-xs text-muted block mb-1">From page</label>
                  <input
                    type="number"
                    min={1}
                    max={pageCount}
                    value={rangeStart}
                    onChange={(e) => setRangeStart(Number(e.target.value))}
                    className="w-20 px-3 py-2 rounded-lg border border-border bg-background text-text text-sm"
                  />
                </div>
                <span className="text-muted mt-4">—</span>
                <div>
                  <label className="text-xs text-muted block mb-1">To page</label>
                  <input
                    type="number"
                    min={1}
                    max={pageCount}
                    value={rangeEnd}
                    onChange={(e) => setRangeEnd(Number(e.target.value))}
                    className="w-20 px-3 py-2 rounded-lg border border-border bg-background text-text text-sm"
                  />
                </div>
                <span className="text-xs text-muted mt-4">of {pageCount}</span>
              </motion.div>
            )}
          </div>

          {status && <StatusMessage type={status.type}>{status.msg}</StatusMessage>}
          <ActionButton onClick={split} loading={loading}>
            <Scissors size={16} /> Split PDF
          </ActionButton>
        </>
      )}
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
//  TOOL: Compress PDF
// ═══════════════════════════════════════════════════════════════════════════════
function CompressPdfTool() {
  const [file, setFile] = useState(null);
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  const handleFile = (files) => {
    setFile(files[0]);
    setStatus(null);
    setResult(null);
  };

  const compress = async () => {
    if (!file) return;
    setLoading(true);
    setStatus({ type: 'info', msg: 'Compressing PDF...' });
    try {
      const ab = await file.arrayBuffer();
      const doc = await PDFDocument.load(ab);
      // Rebuild the document to strip unused objects
      const newDoc = await PDFDocument.create();
      const pages = await newDoc.copyPages(doc, doc.getPageIndices());
      pages.forEach(p => newDoc.addPage(p));
      // Copy metadata
      newDoc.setTitle(doc.getTitle() || '');
      newDoc.setAuthor(doc.getAuthor() || '');
      const bytes = await newDoc.save();
      const saved = file.size - bytes.length;
      const pct = ((saved / file.size) * 100).toFixed(1);
      setResult({
        originalSize: file.size,
        newSize: bytes.length,
        saved,
        percentage: pct,
        blob: new Blob([bytes], { type: 'application/pdf' }),
      });
      setStatus({
        type: saved > 0 ? 'success' : 'info',
        msg: saved > 0
          ? `Compressed! Saved ${formatSize(saved)} (${pct}%)`
          : 'PDF is already optimized — minimal savings possible.'
      });
    } catch (err) {
      setStatus({ type: 'error', msg: `Error: ${err.message}` });
    }
    setLoading(false);
  };

  return (
    <div className="space-y-6">
      {!file ? (
        <DropZone onFiles={handleFile} label="Drop a PDF to compress" sublabel="Reduce file size by rebuilding the document" />
      ) : (
        <>
          <FileChip file={file} onRemove={() => { setFile(null); setResult(null); setStatus(null); }} index={0} />

          {result && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-card border border-border rounded-xl p-5"
            >
              <div className="flex items-center justify-between mb-4">
                <div>
                  <p className="text-xs text-muted">Original</p>
                  <p className="text-lg font-bold text-text">{formatSize(result.originalSize)}</p>
                </div>
                <div className="text-2xl text-muted">→</div>
                <div className="text-right">
                  <p className="text-xs text-muted">Compressed</p>
                  <p className="text-lg font-bold text-emerald-600 dark:text-emerald-400">{formatSize(result.newSize)}</p>
                </div>
              </div>
              <div className="h-3 bg-border rounded-full overflow-hidden mb-3">
                <motion.div
                  initial={{ width: '100%' }}
                  animate={{ width: `${(result.newSize / result.originalSize) * 100}%` }}
                  transition={{ duration: 0.8, ease: 'easeOut' }}
                  className="h-full bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full"
                />
              </div>
              <p className="text-xs text-center text-muted">
                {result.saved > 0 ? `${result.percentage}% smaller` : 'Already optimized'}
              </p>
            </motion.div>
          )}

          {status && <StatusMessage type={status.type}>{status.msg}</StatusMessage>}

          <div className="flex gap-3">
            {!result && (
              <ActionButton onClick={compress} loading={loading}>
                <Minimize2 size={16} /> Compress PDF
              </ActionButton>
            )}
            {result && result.saved > 0 && (
              <ActionButton
                onClick={() => downloadBlob(result.blob, `compressed-${file.name}`)}
              >
                <Download size={16} /> Download Compressed PDF
              </ActionButton>
            )}
          </div>
        </>
      )}
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
//  TOOL: Images to PDF
// ═══════════════════════════════════════════════════════════════════════════════
function ImagesToPdfTool() {
  const [images, setImages] = useState([]);
  const [previews, setPreviews] = useState([]);
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  const addImages = (files) => {
    const imgFiles = files.filter(f => f.type.startsWith('image/'));
    setImages(prev => [...prev, ...imgFiles]);
    imgFiles.forEach(f => {
      const reader = new FileReader();
      reader.onload = (e) => setPreviews(prev => [...prev, { name: f.name, url: e.target.result }]);
      reader.readAsDataURL(f);
    });
  };

  const removeImage = (idx) => {
    setImages(prev => prev.filter((_, i) => i !== idx));
    setPreviews(prev => prev.filter((_, i) => i !== idx));
  };

  const convert = async () => {
    if (!images.length) return;
    setLoading(true);
    setStatus({ type: 'info', msg: 'Creating PDF from images...' });
    try {
      const doc = await PDFDocument.create();
      for (const img of images) {
        const ab = await img.arrayBuffer();
        let embeddedImg;
        if (img.type === 'image/png') {
          embeddedImg = await doc.embedPng(ab);
        } else {
          embeddedImg = await doc.embedJpg(ab);
        }
        const page = doc.addPage([embeddedImg.width, embeddedImg.height]);
        page.drawImage(embeddedImg, {
          x: 0, y: 0,
          width: embeddedImg.width,
          height: embeddedImg.height,
        });
      }
      const bytes = await doc.save();
      downloadBlob(new Blob([bytes], { type: 'application/pdf' }), 'images.pdf');
      setStatus({ type: 'success', msg: 'PDF created successfully!' });
    } catch (err) {
      setStatus({ type: 'error', msg: `Error: ${err.message}` });
    }
    setLoading(false);
  };

  return (
    <div className="space-y-6">
      <DropZone
        onFiles={addImages}
        multiple
        accept="image/png,image/jpeg,image/jpg"
        label="Drop images here"
        sublabel="PNG or JPG images will be converted to PDF"
      />
      {previews.length > 0 && (
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3">
          <AnimatePresence>
            {previews.map((p, i) => (
              <motion.div
                key={p.name + i}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                className="group relative aspect-[3/4] rounded-xl overflow-hidden border border-border bg-card"
              >
                <img src={p.url} alt="" className="w-full h-full object-cover" />
                <button
                  onClick={() => removeImage(i)}
                  className="absolute top-1 right-1 p-1 bg-black/60 rounded-lg text-white opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <X size={12} />
                </button>
                <div className="absolute bottom-0 left-0 right-0 px-2 py-1 bg-black/50 text-white text-[10px] truncate">
                  {i + 1}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      )}
      {status && <StatusMessage type={status.type}>{status.msg}</StatusMessage>}
      <ActionButton onClick={convert} disabled={images.length === 0} loading={loading}>
        <Image size={16} /> Create PDF from {images.length} image{images.length !== 1 ? 's' : ''}
      </ActionButton>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
//  TOOL: PDF to Images
// ═══════════════════════════════════════════════════════════════════════════════
function PdfToImagesTool() {
  const [file, setFile] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  const [renderedImages, setRenderedImages] = useState([]);
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);
  const [scale, setScale] = useState(2);

  const handleFile = async (files) => {
    const f = files[0];
    setFile(f);
    setRenderedImages([]);
    const ab = await f.arrayBuffer();
    const count = await getPdfPageCount(ab);
    setPageCount(count);
    setStatus(null);
  };

  const convert = async () => {
    if (!file) return;
    setLoading(true);
    setStatus({ type: 'info', msg: 'Rendering pages...' });
    try {
      const ab = await file.arrayBuffer();
      const loadingTask = window.pdfjsLib.getDocument({ data: ab });
      const pdf = await loadingTask.promise;
      const imgs = [];
      for (let i = 1; i <= pdf.numPages; i++) {
        const page = await pdf.getPage(i);
        const viewport = page.getViewport({ scale });
        const canvas = document.createElement('canvas');
        canvas.width = viewport.width;
        canvas.height = viewport.height;
        const ctx = canvas.getContext('2d');
        await page.render({ canvasContext: ctx, viewport }).promise;
        imgs.push({ dataUrl: canvas.toDataURL('image/png'), pageNum: i });
        setRenderedImages([...imgs]);
      }
      setStatus({ type: 'success', msg: `Rendered ${pdf.numPages} pages!` });
    } catch (err) {
      setStatus({ type: 'error', msg: `Error: ${err.message}` });
    }
    setLoading(false);
  };

  const downloadImage = (img) => {
    const a = document.createElement('a');
    a.href = img.dataUrl;
    a.download = `page-${img.pageNum}.png`;
    a.click();
  };

  const downloadAll = () => {
    renderedImages.forEach(img => downloadImage(img));
  };

  return (
    <div className="space-y-6">
      {!file ? (
        <DropZone onFiles={handleFile} label="Drop a PDF to convert" sublabel="Each page will be converted to a PNG image" />
      ) : (
        <>
          <FileChip file={file} pageCount={pageCount} onRemove={() => { setFile(null); setRenderedImages([]); setStatus(null); }} index={0} />

          <div className="bg-card border border-border rounded-xl p-4 flex items-center gap-4">
            <label className="text-sm font-medium text-text">Quality:</label>
            <select
              value={scale}
              onChange={(e) => setScale(Number(e.target.value))}
              className="px-3 py-2 rounded-lg border border-border bg-background text-text text-sm"
            >
              <option value={1}>Low (1x)</option>
              <option value={2}>Medium (2x)</option>
              <option value={3}>High (3x)</option>
            </select>
          </div>

          {renderedImages.length > 0 && (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
              {renderedImages.map((img) => (
                <motion.div
                  key={img.pageNum}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="group relative aspect-[3/4] rounded-xl overflow-hidden border border-border bg-white cursor-pointer"
                  onClick={() => downloadImage(img)}
                >
                  <img src={img.dataUrl} alt={`Page ${img.pageNum}`} className="w-full h-full object-contain" />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                    <Download size={24} className="text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 px-2 py-1 bg-black/50 text-white text-xs text-center">
                    Page {img.pageNum}
                  </div>
                </motion.div>
              ))}
            </div>
          )}

          {status && <StatusMessage type={status.type}>{status.msg}</StatusMessage>}

          <div className="flex gap-3">
            {renderedImages.length === 0 && (
              <ActionButton onClick={convert} loading={loading}>
                <Image size={16} /> Convert to Images
              </ActionButton>
            )}
            {renderedImages.length > 0 && (
              <ActionButton onClick={downloadAll}>
                <Download size={16} /> Download All Images
              </ActionButton>
            )}
          </div>
        </>
      )}
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
//  TOOL: Rotate Pages
// ═══════════════════════════════════════════════════════════════════════════════
function RotatePagesTool() {
  const [file, setFile] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  const [rotations, setRotations] = useState({});
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleFile = async (files) => {
    const f = files[0];
    setFile(f);
    const ab = await f.arrayBuffer();
    const count = await getPdfPageCount(ab);
    setPageCount(count);
    const rots = {};
    for (let i = 0; i < count; i++) rots[i] = 0;
    setRotations(rots);
    setStatus(null);
  };

  const rotate = (idx, deg) => {
    setRotations(prev => ({ ...prev, [idx]: ((prev[idx] || 0) + deg) % 360 }));
  };

  const rotateAll = (deg) => {
    setRotations(prev => {
      const newRots = {};
      Object.keys(prev).forEach(k => { newRots[k] = ((prev[k] || 0) + deg) % 360; });
      return newRots;
    });
  };

  const apply = async () => {
    if (!file) return;
    setLoading(true);
    setStatus({ type: 'info', msg: 'Applying rotations...' });
    try {
      const ab = await file.arrayBuffer();
      const doc = await PDFDocument.load(ab);
      doc.getPages().forEach((page, i) => {
        if (rotations[i]) {
          page.setRotation(degrees(page.getRotation().angle + rotations[i]));
        }
      });
      const bytes = await doc.save();
      downloadBlob(new Blob([bytes], { type: 'application/pdf' }), `rotated-${file.name}`);
      setStatus({ type: 'success', msg: 'Pages rotated successfully!' });
    } catch (err) {
      setStatus({ type: 'error', msg: `Error: ${err.message}` });
    }
    setLoading(false);
  };

  return (
    <div className="space-y-6">
      {!file ? (
        <DropZone onFiles={handleFile} label="Drop a PDF to rotate pages" sublabel="Rotate individual pages or all at once" />
      ) : (
        <>
          <FileChip file={file} pageCount={pageCount} onRemove={() => { setFile(null); setRotations({}); setStatus(null); }} index={0} />

          <div className="flex gap-3 flex-wrap">
            <ActionButton variant="secondary" onClick={() => rotateAll(90)}>
              <RotateCw size={14} /> Rotate All 90°
            </ActionButton>
            <ActionButton variant="secondary" onClick={() => rotateAll(180)}>
              <RotateCw size={14} /> Rotate All 180°
            </ActionButton>
          </div>

          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3">
            {Array.from({ length: pageCount }, (_, i) => (
              <motion.div
                key={i}
                className="relative bg-card border border-border rounded-xl p-3 text-center"
              >
                <div
                  className="w-full aspect-[3/4] rounded-lg bg-gradient-to-br from-rose-50 to-orange-50 dark:from-rose-900/20 dark:to-orange-900/20 flex items-center justify-center mb-2"
                  style={{ transform: `rotate(${rotations[i] || 0}deg)`, transition: 'transform 0.3s' }}
                >
                  <FileText size={20} className="text-rose-400" />
                </div>
                <p className="text-xs text-muted mb-2">Page {i + 1}</p>
                <div className="flex justify-center gap-1">
                  <button
                    onClick={() => rotate(i, 90)}
                    className="p-1.5 rounded-lg hover:bg-border text-muted hover:text-text transition-colors"
                    title="Rotate 90°"
                  >
                    <RotateCw size={12} />
                  </button>
                  <button
                    onClick={() => rotate(i, -90)}
                    className="p-1.5 rounded-lg hover:bg-border text-muted hover:text-text transition-colors"
                    title="Rotate -90°"
                  >
                    <RotateCw size={12} className="scale-x-[-1]" />
                  </button>
                </div>
                {rotations[i] !== 0 && (
                  <div className="absolute -top-1 -right-1 w-5 h-5 bg-rose-500 rounded-full text-white text-[10px] flex items-center justify-center font-bold">
                    {rotations[i]}°
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          {status && <StatusMessage type={status.type}>{status.msg}</StatusMessage>}
          <ActionButton onClick={apply} loading={loading} disabled={!Object.values(rotations).some(r => r !== 0)}>
            <RotateCw size={16} /> Apply Rotations
          </ActionButton>
        </>
      )}
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
//  TOOL: Extract Pages
// ═══════════════════════════════════════════════════════════════════════════════
function ExtractPagesTool() {
  const [file, setFile] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  const [selected, setSelected] = useState(new Set());
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleFile = async (files) => {
    const f = files[0];
    setFile(f);
    const ab = await f.arrayBuffer();
    const count = await getPdfPageCount(ab);
    setPageCount(count);
    setSelected(new Set());
    setStatus(null);
  };

  const togglePage = (i) => {
    setSelected(prev => {
      const next = new Set(prev);
      next.has(i) ? next.delete(i) : next.add(i);
      return next;
    });
  };

  const selectAll = () => {
    const all = new Set();
    for (let i = 0; i < pageCount; i++) all.add(i);
    setSelected(all);
  };

  const extract = async () => {
    if (!file || selected.size === 0) return;
    setLoading(true);
    setStatus({ type: 'info', msg: 'Extracting pages...' });
    try {
      const ab = await file.arrayBuffer();
      const srcDoc = await PDFDocument.load(ab);
      const newDoc = await PDFDocument.create();
      const indices = Array.from(selected).sort((a, b) => a - b);
      const pages = await newDoc.copyPages(srcDoc, indices);
      pages.forEach(p => newDoc.addPage(p));
      const bytes = await newDoc.save();
      downloadBlob(new Blob([bytes], { type: 'application/pdf' }), `extracted-${file.name}`);
      setStatus({ type: 'success', msg: `Extracted ${selected.size} page${selected.size !== 1 ? 's' : ''}!` });
    } catch (err) {
      setStatus({ type: 'error', msg: `Error: ${err.message}` });
    }
    setLoading(false);
  };

  return (
    <div className="space-y-6">
      {!file ? (
        <DropZone onFiles={handleFile} label="Drop a PDF to extract pages" sublabel="Select which pages to keep" />
      ) : (
        <>
          <FileChip file={file} pageCount={pageCount} onRemove={() => { setFile(null); setSelected(new Set()); setStatus(null); }} index={0} />

          <div className="flex items-center justify-between">
            <p className="text-sm text-muted">{selected.size} of {pageCount} pages selected</p>
            <div className="flex gap-2">
              <button onClick={selectAll} className="text-xs text-rose-600 dark:text-rose-400 hover:underline">Select all</button>
              <button onClick={() => setSelected(new Set())} className="text-xs text-muted hover:underline">Clear</button>
            </div>
          </div>

          <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-2">
            {Array.from({ length: pageCount }, (_, i) => (
              <motion.button
                key={i}
                whileTap={{ scale: 0.95 }}
                onClick={() => togglePage(i)}
                className={`aspect-[3/4] rounded-xl border-2 flex flex-col items-center justify-center gap-1 transition-all ${
                  selected.has(i)
                    ? 'border-rose-500 bg-rose-500/10'
                    : 'border-border hover:border-rose-300'
                }`}
              >
                <FileText size={16} className={selected.has(i) ? 'text-rose-500' : 'text-muted'} />
                <span className={`text-xs font-medium ${selected.has(i) ? 'text-rose-600 dark:text-rose-400' : 'text-muted'}`}>
                  {i + 1}
                </span>
              </motion.button>
            ))}
          </div>

          {status && <StatusMessage type={status.type}>{status.msg}</StatusMessage>}
          <ActionButton onClick={extract} disabled={selected.size === 0} loading={loading}>
            <FileOutput size={16} /> Extract {selected.size} Page{selected.size !== 1 ? 's' : ''}
          </ActionButton>
        </>
      )}
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
//  TOOL: Delete Pages
// ═══════════════════════════════════════════════════════════════════════════════
function DeletePagesTool() {
  const [file, setFile] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  const [toDelete, setToDelete] = useState(new Set());
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleFile = async (files) => {
    const f = files[0];
    setFile(f);
    const ab = await f.arrayBuffer();
    const count = await getPdfPageCount(ab);
    setPageCount(count);
    setToDelete(new Set());
    setStatus(null);
  };

  const togglePage = (i) => {
    setToDelete(prev => {
      const next = new Set(prev);
      next.has(i) ? next.delete(i) : next.add(i);
      return next;
    });
  };

  const apply = async () => {
    if (!file || toDelete.size === 0) return;
    setLoading(true);
    setStatus({ type: 'info', msg: 'Removing pages...' });
    try {
      const ab = await file.arrayBuffer();
      const srcDoc = await PDFDocument.load(ab);
      const newDoc = await PDFDocument.create();
      const keep = [];
      for (let i = 0; i < srcDoc.getPageCount(); i++) {
        if (!toDelete.has(i)) keep.push(i);
      }
      const pages = await newDoc.copyPages(srcDoc, keep);
      pages.forEach(p => newDoc.addPage(p));
      const bytes = await newDoc.save();
      downloadBlob(new Blob([bytes], { type: 'application/pdf' }), `trimmed-${file.name}`);
      setStatus({ type: 'success', msg: `Removed ${toDelete.size} page${toDelete.size !== 1 ? 's' : ''}!` });
    } catch (err) {
      setStatus({ type: 'error', msg: `Error: ${err.message}` });
    }
    setLoading(false);
  };

  return (
    <div className="space-y-6">
      {!file ? (
        <DropZone onFiles={handleFile} label="Drop a PDF to delete pages" sublabel="Select pages to remove" />
      ) : (
        <>
          <FileChip file={file} pageCount={pageCount} onRemove={() => { setFile(null); setToDelete(new Set()); setStatus(null); }} index={0} />

          <p className="text-sm text-muted">Click pages to mark for deletion ({toDelete.size} selected)</p>

          <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-2">
            {Array.from({ length: pageCount }, (_, i) => (
              <motion.button
                key={i}
                whileTap={{ scale: 0.95 }}
                onClick={() => togglePage(i)}
                className={`aspect-[3/4] rounded-xl border-2 flex flex-col items-center justify-center gap-1 transition-all relative ${
                  toDelete.has(i)
                    ? 'border-red-500 bg-red-500/10'
                    : 'border-border hover:border-red-300'
                }`}
              >
                {toDelete.has(i) && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Trash2 size={20} className="text-red-500" />
                  </div>
                )}
                <FileText size={16} className={`${toDelete.has(i) ? 'text-red-300 dark:text-red-800' : 'text-muted'}`} />
                <span className={`text-xs font-medium ${toDelete.has(i) ? 'text-red-400' : 'text-muted'}`}>
                  {i + 1}
                </span>
              </motion.button>
            ))}
          </div>

          {status && <StatusMessage type={status.type}>{status.msg}</StatusMessage>}
          <ActionButton onClick={apply} disabled={toDelete.size === 0 || toDelete.size >= pageCount} loading={loading}>
            <Trash2 size={16} /> Delete {toDelete.size} Page{toDelete.size !== 1 ? 's' : ''}
          </ActionButton>
          {toDelete.size >= pageCount && (
            <p className="text-xs text-red-500">You can't delete all pages.</p>
          )}
        </>
      )}
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
//  TOOL: Add Watermark
// ═══════════════════════════════════════════════════════════════════════════════
function WatermarkTool() {
  const [file, setFile] = useState(null);
  const [text, setText] = useState('CONFIDENTIAL');
  const [fontSize, setFontSize] = useState(48);
  const [opacity, setOpacity] = useState(0.15);
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  const apply = async () => {
    if (!file || !text) return;
    setLoading(true);
    setStatus({ type: 'info', msg: 'Adding watermark...' });
    try {
      const ab = await file.arrayBuffer();
      const doc = await PDFDocument.load(ab);
      const font = await doc.embedFont(StandardFonts.HelveticaBold);
      const pages = doc.getPages();
      pages.forEach(page => {
        const { width, height } = page.getSize();
        const textWidth = font.widthOfTextAtSize(text, fontSize);
        page.drawText(text, {
          x: (width - textWidth) / 2,
          y: height / 2,
          size: fontSize,
          font,
          color: rgb(0.5, 0.5, 0.5),
          opacity,
          rotate: degrees(-45),
        });
      });
      const bytes = await doc.save();
      downloadBlob(new Blob([bytes], { type: 'application/pdf' }), `watermarked-${file.name}`);
      setStatus({ type: 'success', msg: 'Watermark added!' });
    } catch (err) {
      setStatus({ type: 'error', msg: `Error: ${err.message}` });
    }
    setLoading(false);
  };

  return (
    <div className="space-y-6">
      {!file ? (
        <DropZone onFiles={(f) => { setFile(f[0]); setStatus(null); }} label="Drop a PDF to watermark" sublabel="Add a text watermark to every page" />
      ) : (
        <>
          <FileChip file={file} onRemove={() => { setFile(null); setStatus(null); }} index={0} />

          <div className="bg-card border border-border rounded-xl p-5 space-y-4">
            <div>
              <label className="text-sm font-medium text-text block mb-2">Watermark Text</label>
              <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl border border-border bg-background text-text"
                placeholder="e.g. CONFIDENTIAL, DRAFT, SAMPLE"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium text-text block mb-2">Font Size: {fontSize}px</label>
                <input
                  type="range"
                  min={12}
                  max={120}
                  value={fontSize}
                  onChange={(e) => setFontSize(Number(e.target.value))}
                  className="w-full accent-rose-500"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-text block mb-2">Opacity: {Math.round(opacity * 100)}%</label>
                <input
                  type="range"
                  min={5}
                  max={80}
                  value={opacity * 100}
                  onChange={(e) => setOpacity(Number(e.target.value) / 100)}
                  className="w-full accent-rose-500"
                />
              </div>
            </div>
            {/* Preview */}
            <div className="relative w-full h-40 bg-white dark:bg-stone-900 rounded-xl border border-border overflow-hidden flex items-center justify-center">
              <span
                style={{
                  fontSize: `${fontSize * 0.4}px`,
                  opacity,
                  transform: 'rotate(-45deg)',
                  color: '#888',
                  fontWeight: 'bold',
                  userSelect: 'none',
                }}
              >
                {text}
              </span>
              <div className="absolute bottom-2 right-3 text-[10px] text-muted">Preview</div>
            </div>
          </div>

          {status && <StatusMessage type={status.type}>{status.msg}</StatusMessage>}
          <ActionButton onClick={apply} disabled={!text} loading={loading}>
            <Droplets size={16} /> Add Watermark
          </ActionButton>
        </>
      )}
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
//  TOOL: Add Page Numbers
// ═══════════════════════════════════════════════════════════════════════════════
function PageNumbersTool() {
  const [file, setFile] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  const [position, setPosition] = useState('bottom-center');
  const [startNum, setStartNum] = useState(1);
  const [fontSize, setFontSize] = useState(12);
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleFile = async (files) => {
    const f = files[0];
    setFile(f);
    const ab = await f.arrayBuffer();
    const count = await getPdfPageCount(ab);
    setPageCount(count);
    setStatus(null);
  };

  const positions = [
    { id: 'top-left', label: 'Top Left' },
    { id: 'top-center', label: 'Top Center' },
    { id: 'top-right', label: 'Top Right' },
    { id: 'bottom-left', label: 'Bottom Left' },
    { id: 'bottom-center', label: 'Bottom Center' },
    { id: 'bottom-right', label: 'Bottom Right' },
  ];

  const apply = async () => {
    if (!file) return;
    setLoading(true);
    setStatus({ type: 'info', msg: 'Adding page numbers...' });
    try {
      const ab = await file.arrayBuffer();
      const doc = await PDFDocument.load(ab);
      const font = await doc.embedFont(StandardFonts.Helvetica);
      const pages = doc.getPages();
      pages.forEach((page, i) => {
        const { width, height } = page.getSize();
        const num = String(i + startNum);
        const tw = font.widthOfTextAtSize(num, fontSize);
        let x, y;
        if (position.includes('left')) x = 40;
        else if (position.includes('right')) x = width - 40 - tw;
        else x = (width - tw) / 2;
        if (position.includes('top')) y = height - 30;
        else y = 20;
        page.drawText(num, { x, y, size: fontSize, font, color: rgb(0.3, 0.3, 0.3) });
      });
      const bytes = await doc.save();
      downloadBlob(new Blob([bytes], { type: 'application/pdf' }), `numbered-${file.name}`);
      setStatus({ type: 'success', msg: 'Page numbers added!' });
    } catch (err) {
      setStatus({ type: 'error', msg: `Error: ${err.message}` });
    }
    setLoading(false);
  };

  return (
    <div className="space-y-6">
      {!file ? (
        <DropZone onFiles={handleFile} label="Drop a PDF to add page numbers" sublabel="Number every page automatically" />
      ) : (
        <>
          <FileChip file={file} pageCount={pageCount} onRemove={() => { setFile(null); setStatus(null); }} index={0} />

          <div className="bg-card border border-border rounded-xl p-5 space-y-4">
            <div>
              <label className="text-sm font-medium text-text block mb-2">Position</label>
              <div className="grid grid-cols-3 gap-2">
                {positions.map(p => (
                  <button
                    key={p.id}
                    onClick={() => setPosition(p.id)}
                    className={`py-2.5 px-3 rounded-xl text-xs font-medium border transition-all ${
                      position === p.id
                        ? 'border-rose-500 bg-rose-500/10 text-rose-600 dark:text-rose-400'
                        : 'border-border text-muted hover:border-rose-300'
                    }`}
                  >
                    {p.label}
                  </button>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium text-text block mb-1">Start number</label>
                <input
                  type="number"
                  min={1}
                  value={startNum}
                  onChange={(e) => setStartNum(Number(e.target.value))}
                  className="w-full px-3 py-2 rounded-lg border border-border bg-background text-text text-sm"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-text block mb-1">Font size</label>
                <input
                  type="number"
                  min={8}
                  max={36}
                  value={fontSize}
                  onChange={(e) => setFontSize(Number(e.target.value))}
                  className="w-full px-3 py-2 rounded-lg border border-border bg-background text-text text-sm"
                />
              </div>
            </div>
          </div>

          {status && <StatusMessage type={status.type}>{status.msg}</StatusMessage>}
          <ActionButton onClick={apply} loading={loading}>
            <Hash size={16} /> Add Page Numbers
          </ActionButton>
        </>
      )}
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
//  TOOL: Protect PDF
// ═══════════════════════════════════════════════════════════════════════════════
function ProtectPdfTool() {
  const [file, setFile] = useState(null);
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleFile = (files) => {
    setFile(files[0]);
    setStatus(null);
  };

  // Note: pdf-lib doesn't natively support encrypting with passwords.
  // We rebuild the document to strip metadata, as a "light protection".
  const protect = async () => {
    if (!file) return;
    setLoading(true);
    setStatus({ type: 'info', msg: 'Processing PDF...' });
    try {
      const ab = await file.arrayBuffer();
      const srcDoc = await PDFDocument.load(ab);
      const newDoc = await PDFDocument.create();
      const pages = await newDoc.copyPages(srcDoc, srcDoc.getPageIndices());
      pages.forEach(p => newDoc.addPage(p));
      // Strip metadata for privacy
      newDoc.setTitle('');
      newDoc.setAuthor('');
      newDoc.setSubject('');
      newDoc.setKeywords([]);
      newDoc.setProducer('');
      newDoc.setCreator('');
      const bytes = await newDoc.save();
      downloadBlob(new Blob([bytes], { type: 'application/pdf' }), `protected-${file.name}`);
      setStatus({ type: 'success', msg: 'Metadata stripped and PDF rebuilt! For full password protection, use a dedicated tool like Adobe Acrobat.' });
    } catch (err) {
      setStatus({ type: 'error', msg: `Error: ${err.message}` });
    }
    setLoading(false);
  };

  return (
    <div className="space-y-6">
      {!file ? (
        <DropZone onFiles={handleFile} label="Drop a PDF to protect" sublabel="Strip metadata and rebuild the document" />
      ) : (
        <>
          <FileChip file={file} onRemove={() => { setFile(null); setStatus(null); }} index={0} />

          <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-xl p-4 text-sm text-amber-700 dark:text-amber-300">
            <p className="font-medium mb-1">Note</p>
            <p>This tool removes all metadata (author, title, etc.) and rebuilds the PDF. Full password encryption requires native PDF encryption which is not available in the browser.</p>
          </div>

          {status && <StatusMessage type={status.type}>{status.msg}</StatusMessage>}
          <ActionButton onClick={protect} loading={loading}>
            <Lock size={16} /> Strip Metadata & Rebuild
          </ActionButton>
        </>
      )}
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
//  TOOL: Page Organizer (Multi-document workspace)
// ═══════════════════════════════════════════════════════════════════════════════

const renderPageThumbnail = async (arrayBuffer, pageIndex, scale = 0.4) => {
  try {
    const loadingTask = window.pdfjsLib?.getDocument({ data: new Uint8Array(arrayBuffer) });
    if (!loadingTask) return null;
    const pdf = await loadingTask.promise;
    const page = await pdf.getPage(pageIndex + 1);
    const viewport = page.getViewport({ scale });
    const canvas = document.createElement('canvas');
    canvas.width = viewport.width;
    canvas.height = viewport.height;
    const ctx = canvas.getContext('2d');
    await page.render({ canvasContext: ctx, viewport }).promise;
    return canvas.toDataURL('image/png');
  } catch {
    return null;
  }
};

// Color palette for source-file color coding
const DOC_COLORS = [
  { bg: 'bg-blue-500', light: 'bg-blue-100 dark:bg-blue-900/30', text: 'text-blue-700 dark:text-blue-300', border: 'border-blue-500', ring: 'ring-blue-500/40' },
  { bg: 'bg-emerald-500', light: 'bg-emerald-100 dark:bg-emerald-900/30', text: 'text-emerald-700 dark:text-emerald-300', border: 'border-emerald-500', ring: 'ring-emerald-500/40' },
  { bg: 'bg-violet-500', light: 'bg-violet-100 dark:bg-violet-900/30', text: 'text-violet-700 dark:text-violet-300', border: 'border-violet-500', ring: 'ring-violet-500/40' },
  { bg: 'bg-amber-500', light: 'bg-amber-100 dark:bg-amber-900/30', text: 'text-amber-700 dark:text-amber-300', border: 'border-amber-500', ring: 'ring-amber-500/40' },
  { bg: 'bg-rose-500', light: 'bg-rose-100 dark:bg-rose-900/30', text: 'text-rose-700 dark:text-rose-300', border: 'border-rose-500', ring: 'ring-rose-500/40' },
  { bg: 'bg-cyan-500', light: 'bg-cyan-100 dark:bg-cyan-900/30', text: 'text-cyan-700 dark:text-cyan-300', border: 'border-cyan-500', ring: 'ring-cyan-500/40' },
  { bg: 'bg-pink-500', light: 'bg-pink-100 dark:bg-pink-900/30', text: 'text-pink-700 dark:text-pink-300', border: 'border-pink-500', ring: 'ring-pink-500/40' },
  { bg: 'bg-stone-500', light: 'bg-stone-100 dark:bg-stone-800/30', text: 'text-stone-700 dark:text-stone-300', border: 'border-stone-500', ring: 'ring-stone-500/40' },
];

function PageOrganizerTool() {
  /*
   * documents: Array of { id, name, color, pages: [{ id, thumbnail, sourceFile, sourcePageIndex, rotation }], collapsed }
   * Each document is a separate "lane" that can be exported individually.
   */
  const [documents, setDocuments] = useState([]);
  const [sourceBuffers, setSourceBuffers] = useState({});
  const [loading, setLoading] = useState(false);
  const [loadingProgress, setLoadingProgress] = useState({ current: 0, total: 0 });
  const [status, setStatus] = useState(null);
  const [activeDocId, setActiveDocId] = useState(null);

  // Selection & clipboard
  const [selectedPages, setSelectedPages] = useState(new Set()); // Set of page ids
  const [clipboard, setClipboard] = useState([]); // Array of page data (copies)
  const [lastSelectedPage, setLastSelectedPage] = useState(null);

  // Drag state
  const [dragData, setDragData] = useState(null); // { pageId, fromDocId }
  const [dragOverTarget, setDragOverTarget] = useState(null); // { pageId, side } | { docId, empty }

  // Preview
  const [previewPage, setPreviewPage] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [previewLoading, setPreviewLoading] = useState(false);

  // Zoom
  const [thumbSize, setThumbSize] = useState(2); // 1=small, 2=medium, 3=large

  const fileInputRef = useRef(null);
  const addToDocRef = useRef(null); // which doc to add files to
  const idCounter = useRef(0);
  const containerRef = useRef(null);

  const nextId = (prefix = 'p') => {
    idCounter.current += 1;
    return `${prefix}-${idCounter.current}-${Date.now()}`;
  };

  const colorForIndex = (i) => DOC_COLORS[i % DOC_COLORS.length];

  // ── Thumbnail grid columns by zoom ──
  const gridCols = {
    1: 'grid-cols-5 sm:grid-cols-7 md:grid-cols-9 lg:grid-cols-11',
    2: 'grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8',
    3: 'grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5',
  };

  // ── Create empty document ──
  const addEmptyDocument = () => {
    const idx = documents.length;
    const newDoc = {
      id: nextId('doc'),
      name: `Document ${idx + 1}`,
      color: colorForIndex(idx),
      pages: [],
      collapsed: false,
    };
    setDocuments(prev => [...prev, newDoc]);
    setActiveDocId(newDoc.id);
    setStatus({ type: 'success', msg: 'Empty document created — drag pages here or add a PDF' });
  };

  // ── Load PDF files into a document ──
  const addFilesToDocument = async (files, targetDocId) => {
    const pdfFiles = Array.from(files).filter(f => f.type === 'application/pdf');
    if (!pdfFiles.length) return;

    setLoading(true);
    setStatus(null);
    let totalPages = 0;
    const fileBuffers = {};

    for (const file of pdfFiles) {
      const ab = await file.arrayBuffer();
      fileBuffers[file.name + file.size] = ab;
      const count = await getPdfPageCount(ab);
      totalPages += count;
    }

    setLoadingProgress({ current: 0, total: totalPages });
    let processed = 0;

    // If we have a target doc, add pages there. Otherwise create new docs per file.
    if (targetDocId) {
      const newPages = [];
      for (const file of pdfFiles) {
        const ab = fileBuffers[file.name + file.size];
        const count = await getPdfPageCount(ab);
        for (let i = 0; i < count; i++) {
          const thumb = await renderPageThumbnail(ab, i, 0.35);
          newPages.push({
            id: nextId('p'),
            thumbnail: thumb,
            sourceFile: file.name + file.size,
            sourceFileName: file.name,
            sourcePageIndex: i,
            rotation: 0,
          });
          processed++;
          setLoadingProgress({ current: processed, total: totalPages });
        }
      }
      setDocuments(prev => prev.map(d =>
        d.id === targetDocId ? { ...d, pages: [...d.pages, ...newPages] } : d
      ));
    } else {
      // Create a new document for each file
      const newDocs = [];
      for (const file of pdfFiles) {
        const ab = fileBuffers[file.name + file.size];
        const count = await getPdfPageCount(ab);
        const pages = [];
        for (let i = 0; i < count; i++) {
          const thumb = await renderPageThumbnail(ab, i, 0.35);
          pages.push({
            id: nextId('p'),
            thumbnail: thumb,
            sourceFile: file.name + file.size,
            sourceFileName: file.name,
            sourcePageIndex: i,
            rotation: 0,
          });
          processed++;
          setLoadingProgress({ current: processed, total: totalPages });
        }
        const idx = documents.length + newDocs.length;
        newDocs.push({
          id: nextId('doc'),
          name: file.name.replace(/\.pdf$/i, ''),
          color: colorForIndex(idx),
          pages,
          collapsed: false,
        });
      }
      setDocuments(prev => [...prev, ...newDocs]);
      if (newDocs.length) setActiveDocId(newDocs[0].id);
    }

    setSourceBuffers(prev => ({ ...prev, ...fileBuffers }));
    setLoading(false);
    setStatus({ type: 'success', msg: `Added ${totalPages} page${totalPages !== 1 ? 's' : ''}` });
  };

  const handleFileInput = (e) => {
    const files = e.target.files;
    addFilesToDocument(files, addToDocRef.current);
    e.target.value = '';
    addToDocRef.current = null;
  };

  const openFilePicker = (docId = null) => {
    addToDocRef.current = docId;
    fileInputRef.current?.click();
  };

  // ── Page Selection ──
  const handlePageClick = (e, pageId, docId) => {
    setActiveDocId(docId);
    if (e.ctrlKey || e.metaKey) {
      setSelectedPages(prev => {
        const next = new Set(prev);
        next.has(pageId) ? next.delete(pageId) : next.add(pageId);
        return next;
      });
      setLastSelectedPage(pageId);
    } else if (e.shiftKey && lastSelectedPage) {
      // Range select within same document
      const doc = documents.find(d => d.id === docId);
      if (doc) {
        const ids = doc.pages.map(p => p.id);
        const startIdx = ids.indexOf(lastSelectedPage);
        const endIdx = ids.indexOf(pageId);
        if (startIdx !== -1 && endIdx !== -1) {
          const from = Math.min(startIdx, endIdx);
          const to = Math.max(startIdx, endIdx);
          const rangeIds = ids.slice(from, to + 1);
          setSelectedPages(prev => {
            const next = new Set(prev);
            rangeIds.forEach(id => next.add(id));
            return next;
          });
        }
      }
    } else {
      setSelectedPages(new Set([pageId]));
      setLastSelectedPage(pageId);
    }
  };

  const clearSelection = () => {
    setSelectedPages(new Set());
    setLastSelectedPage(null);
  };

  // ── Keyboard shortcuts ──
  useEffect(() => {
    const handler = (e) => {
      // Ctrl+C — copy selected pages
      if ((e.ctrlKey || e.metaKey) && e.key === 'c' && selectedPages.size > 0) {
        e.preventDefault();
        const allPages = documents.flatMap(d => d.pages);
        const copied = allPages.filter(p => selectedPages.has(p.id)).map(p => ({ ...p }));
        setClipboard(copied);
        setStatus({ type: 'success', msg: `Copied ${copied.length} page${copied.length !== 1 ? 's' : ''} to clipboard` });
      }
      // Ctrl+V — paste into active document
      if ((e.ctrlKey || e.metaKey) && e.key === 'v' && clipboard.length > 0 && activeDocId) {
        e.preventDefault();
        const pasted = clipboard.map(p => ({ ...p, id: nextId('p') }));
        setDocuments(prev => prev.map(d =>
          d.id === activeDocId ? { ...d, pages: [...d.pages, ...pasted] } : d
        ));
        setStatus({ type: 'success', msg: `Pasted ${pasted.length} page${pasted.length !== 1 ? 's' : ''}` });
      }
      // Ctrl+A — select all pages in active document
      if ((e.ctrlKey || e.metaKey) && e.key === 'a' && activeDocId) {
        const doc = documents.find(d => d.id === activeDocId);
        if (doc && doc.pages.length > 0) {
          e.preventDefault();
          setSelectedPages(new Set(doc.pages.map(p => p.id)));
        }
      }
      // Delete / Backspace — delete selected pages
      if ((e.key === 'Delete' || e.key === 'Backspace') && selectedPages.size > 0) {
        // Don't intercept if user is typing in an input
        if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
        e.preventDefault();
        setDocuments(prev => prev.map(d => ({
          ...d,
          pages: d.pages.filter(p => !selectedPages.has(p.id)),
        })));
        setSelectedPages(new Set());
        setStatus({ type: 'success', msg: 'Deleted selected pages' });
      }
      // Escape — clear selection
      if (e.key === 'Escape') {
        clearSelection();
      }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [selectedPages, clipboard, activeDocId, documents]);

  // ── Drag & Drop (cross-document) ──
  const handleDragStart = (e, pageId, fromDocId) => {
    // If dragging a selected page, drag all selected
    setDragData({ pageId, fromDocId, isMulti: selectedPages.has(pageId) && selectedPages.size > 1 });
    e.dataTransfer.effectAllowed = 'move';
  };

  const handlePageDragOver = (e, targetPageId, targetDocId) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
    if (!dragData) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const midX = rect.left + rect.width / 2;
    setDragOverTarget({ pageId: targetPageId, docId: targetDocId, side: e.clientX < midX ? 'left' : 'right' });
  };

  const handleEmptyDocDragOver = (e, docId) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
    setDragOverTarget({ docId, empty: true });
  };

  const handleDrop = (e) => {
    e.preventDefault();
    if (!dragData || !dragOverTarget) { resetDrag(); return; }

    const { fromDocId, isMulti, pageId: draggedId } = dragData;
    const { docId: targetDocId, pageId: targetPageId, side, empty } = dragOverTarget;

    setDocuments(prev => {
      let docs = prev.map(d => ({ ...d, pages: [...d.pages] }));

      // Determine which pages to move
      let movingIds;
      if (isMulti) {
        movingIds = new Set(selectedPages);
      } else {
        movingIds = new Set([draggedId]);
      }

      // Collect the moving pages (preserve order from source doc)
      const fromDoc = docs.find(d => d.id === fromDocId);
      if (!fromDoc) return prev;
      const movingPages = fromDoc.pages.filter(p => movingIds.has(p.id));

      // Remove from all documents
      docs = docs.map(d => ({
        ...d,
        pages: d.pages.filter(p => !movingIds.has(p.id)),
      }));

      // Insert into target document
      const toDoc = docs.find(d => d.id === targetDocId);
      if (!toDoc) return prev;

      if (empty) {
        toDoc.pages.push(...movingPages);
      } else {
        const targetIdx = toDoc.pages.findIndex(p => p.id === targetPageId);
        const insertAt = side === 'left' ? targetIdx : targetIdx + 1;
        toDoc.pages.splice(insertAt < 0 ? 0 : insertAt, 0, ...movingPages);
      }

      return docs;
    });

    resetDrag();
  };

  const resetDrag = () => {
    setDragData(null);
    setDragOverTarget(null);
  };

  // ── Page actions ──
  const rotatePage = (docId, pageId, deg) => {
    setDocuments(prev => prev.map(d =>
      d.id === docId ? {
        ...d,
        pages: d.pages.map(p => p.id === pageId ? { ...p, rotation: (p.rotation + deg + 360) % 360 } : p),
      } : d
    ));
  };

  const duplicatePage = (docId, pageId) => {
    setDocuments(prev => prev.map(d => {
      if (d.id !== docId) return d;
      const idx = d.pages.findIndex(p => p.id === pageId);
      if (idx === -1) return d;
      const copy = { ...d.pages[idx], id: nextId('p') };
      const pages = [...d.pages];
      pages.splice(idx + 1, 0, copy);
      return { ...d, pages };
    }));
  };

  const deletePage = (docId, pageId) => {
    setDocuments(prev => prev.map(d =>
      d.id === docId ? { ...d, pages: d.pages.filter(p => p.id !== pageId) } : d
    ));
    setSelectedPages(prev => { const next = new Set(prev); next.delete(pageId); return next; });
  };

  const deleteDocument = (docId) => {
    setDocuments(prev => prev.filter(d => d.id !== docId));
    if (activeDocId === docId) setActiveDocId(null);
  };

  const renameDocument = (docId, name) => {
    setDocuments(prev => prev.map(d => d.id === docId ? { ...d, name } : d));
  };

  const toggleCollapse = (docId) => {
    setDocuments(prev => prev.map(d => d.id === docId ? { ...d, collapsed: !d.collapsed } : d));
  };

  // ── Export single document ──
  const exportDocument = async (docId) => {
    const doc = documents.find(d => d.id === docId);
    if (!doc || doc.pages.length === 0) return;
    setStatus({ type: 'info', msg: `Exporting "${doc.name}"...` });
    try {
      const newDoc = await PDFDocument.create();
      for (const page of doc.pages) {
        if (page.sourceFile === '__blank__') {
          // Blank page
          newDoc.addPage();
        } else {
          const ab = sourceBuffers[page.sourceFile];
          if (!ab) continue;
          const srcDoc = await PDFDocument.load(ab);
          const [copiedPage] = await newDoc.copyPages(srcDoc, [page.sourcePageIndex]);
          if (page.rotation !== 0) {
            copiedPage.setRotation(degrees(copiedPage.getRotation().angle + page.rotation));
          }
          newDoc.addPage(copiedPage);
        }
      }
      const bytes = await newDoc.save();
      downloadBlob(new Blob([bytes], { type: 'application/pdf' }), `${doc.name}.pdf`);
      setStatus({ type: 'success', msg: `Exported "${doc.name}" with ${doc.pages.length} pages` });
    } catch (err) {
      setStatus({ type: 'error', msg: `Export error: ${err.message}` });
    }
  };

  // ── Export all documents ──
  const exportAll = async () => {
    for (const doc of documents) {
      if (doc.pages.length > 0) await exportDocument(doc.id);
    }
  };

  // ── Add blank page to document ──
  const addBlankPage = (docId) => {
    const blankPage = {
      id: nextId('p'),
      thumbnail: null,
      sourceFile: '__blank__',
      sourceFileName: 'Blank Page',
      sourcePageIndex: 0,
      rotation: 0,
    };
    setDocuments(prev => prev.map(d =>
      d.id === docId ? { ...d, pages: [...d.pages, blankPage] } : d
    ));
  };

  // ── Preview ──
  const openPreview = async (page) => {
    setPreviewPage(page);
    setPreviewLoading(true);
    setPreviewUrl(null);
    if (page.sourceFile === '__blank__') {
      setPreviewUrl(null);
      setPreviewLoading(false);
      return;
    }
    const ab = sourceBuffers[page.sourceFile];
    if (ab) {
      const url = await renderPageThumbnail(ab, page.sourcePageIndex, 2.5);
      setPreviewUrl(url);
    }
    setPreviewLoading(false);
  };

  const totalPages = documents.reduce((s, d) => s + d.pages.length, 0);

  // ─────────────────────────────────────────────────────────────────────────
  return (
    <div className="space-y-4" ref={containerRef} onClick={(e) => { if (e.target === e.currentTarget) clearSelection(); }}>
      {/* ── Global Toolbar ── */}
      <div className="bg-card border border-border rounded-2xl p-3">
        <div className="flex flex-wrap items-center gap-2">
          <input ref={fileInputRef} type="file" accept=".pdf" multiple className="hidden" onChange={handleFileInput} />

          <button onClick={() => openFilePicker(null)} disabled={loading}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold bg-gradient-to-r from-indigo-500 to-violet-500 text-white hover:shadow-lg hover:shadow-indigo-500/25 transition-all disabled:opacity-50">
            <Plus size={14} /> Add PDF
          </button>
          <button onClick={addEmptyDocument}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold border border-border text-text hover:bg-border/50 transition-all">
            <FileText size={14} /> Empty Document
          </button>

          <div className="h-5 w-px bg-border mx-1" />

          {/* Zoom */}
          <div className="inline-flex items-center gap-1 bg-background rounded-lg border border-border px-1">
            {[1, 2, 3].map(z => (
              <button key={z} onClick={() => setThumbSize(z)}
                className={`px-2 py-1.5 rounded-md text-[10px] font-bold transition-all ${thumbSize === z ? 'bg-indigo-500 text-white' : 'text-muted hover:text-text'}`}>
                {z === 1 ? 'S' : z === 2 ? 'M' : 'L'}
              </button>
            ))}
          </div>

          <div className="flex-1" />

          {/* Selection info */}
          {selectedPages.size > 0 && (
            <span className="text-xs text-indigo-600 dark:text-indigo-400 font-medium">
              {selectedPages.size} selected
            </span>
          )}
          {clipboard.length > 0 && (
            <span className="text-[10px] text-muted bg-border/50 px-2 py-1 rounded-md">
              Clipboard: {clipboard.length}
            </span>
          )}

          {documents.length > 1 && (
            <button onClick={exportAll}
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold border border-border text-text hover:bg-border/50 transition-all">
              <Download size={13} /> Export All
            </button>
          )}

          <span className="text-xs text-muted tabular-nums">{documents.length} doc{documents.length !== 1 ? 's' : ''} · {totalPages} pg{totalPages !== 1 ? 's' : ''}</span>
        </div>

        {/* Keyboard hints */}
        {documents.length > 0 && (
          <div className="flex flex-wrap gap-x-4 gap-y-1 mt-2.5 pt-2.5 border-t border-border/50">
            {[
              ['Click', 'Select'],
              ['Ctrl+Click', 'Multi-select'],
              ['Shift+Click', 'Range'],
              ['Ctrl+C', 'Copy'],
              ['Ctrl+V', 'Paste'],
              ['Ctrl+A', 'Select all'],
              ['Del', 'Delete'],
              ['Drag', 'Reorder / Move'],
            ].map(([key, label]) => (
              <span key={key} className="text-[10px] text-muted">
                <kbd className="px-1 py-0.5 rounded bg-border/70 text-text font-mono text-[9px] mr-0.5">{key}</kbd> {label}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* ── Loading ── */}
      {loading && (
        <ProgressBar
          progress={(loadingProgress.current / (loadingProgress.total || 1)) * 100}
          label={`Loading page ${loadingProgress.current} of ${loadingProgress.total}...`}
        />
      )}

      {/* ── Empty state ── */}
      {documents.length === 0 && !loading && (
        <div className="space-y-4">
          <DropZone
            onFiles={(files) => addFilesToDocument(files, null)}
            multiple
            label="Drop PDFs to get started"
            sublabel="Each file becomes a separate document — or create an empty one first"
          />
          <div className="flex justify-center">
            <button onClick={addEmptyDocument}
              className="inline-flex items-center gap-2 text-sm text-muted hover:text-text transition-colors">
              <FileText size={16} /> Or start with an empty document
            </button>
          </div>
        </div>
      )}

      {/* ── Documents ── */}
      {documents.map((doc) => {
        const isActive = activeDocId === doc.id;
        const color = doc.color;
        return (
          <motion.div
            key={doc.id}
            layout
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            className={`rounded-2xl border-2 transition-all duration-200 ${isActive ? `${color.border} shadow-lg shadow-black/5 dark:shadow-black/20` : 'border-border'}`}
            onClick={() => setActiveDocId(doc.id)}
          >
            {/* ── Document Header ── */}
            <div className={`flex items-center gap-2 px-4 py-2.5 ${color.light} rounded-t-[14px] border-b ${isActive ? color.border : 'border-border'}`}>
              {/* Color dot */}
              <div className={`w-2.5 h-2.5 rounded-full ${color.bg} flex-shrink-0`} />

              {/* Editable name */}
              <input
                type="text"
                value={doc.name}
                onChange={(e) => renameDocument(doc.id, e.target.value)}
                className={`bg-transparent border-none outline-none text-sm font-bold ${color.text} min-w-0 flex-1`}
                onClick={(e) => e.stopPropagation()}
              />

              <span className="text-[10px] text-muted tabular-nums flex-shrink-0">{doc.pages.length} pg</span>

              <div className="flex items-center gap-0.5 flex-shrink-0">
                {/* Add blank page */}
                <button onClick={(e) => { e.stopPropagation(); addBlankPage(doc.id); }}
                  className="p-1.5 rounded-lg text-muted hover:text-text hover:bg-white/50 dark:hover:bg-white/10 transition-colors" title="Add blank page">
                  <Plus size={13} />
                </button>
                {/* Add PDF to this doc */}
                <button onClick={(e) => { e.stopPropagation(); openFilePicker(doc.id); }}
                  className="p-1.5 rounded-lg text-muted hover:text-text hover:bg-white/50 dark:hover:bg-white/10 transition-colors" title="Add PDF pages">
                  <Upload size={13} />
                </button>
                {/* Export */}
                <button onClick={(e) => { e.stopPropagation(); exportDocument(doc.id); }}
                  disabled={doc.pages.length === 0}
                  className="p-1.5 rounded-lg text-muted hover:text-text hover:bg-white/50 dark:hover:bg-white/10 transition-colors disabled:opacity-30" title="Export as PDF">
                  <Download size={13} />
                </button>
                {/* Collapse */}
                <button onClick={(e) => { e.stopPropagation(); toggleCollapse(doc.id); }}
                  className="p-1.5 rounded-lg text-muted hover:text-text hover:bg-white/50 dark:hover:bg-white/10 transition-colors" title={doc.collapsed ? 'Expand' : 'Collapse'}>
                  {doc.collapsed ? <ChevronDown size={13} /> : <ChevronUp size={13} />}
                </button>
                {/* Delete document */}
                <button onClick={(e) => { e.stopPropagation(); deleteDocument(doc.id); }}
                  className="p-1.5 rounded-lg text-muted hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors" title="Remove document">
                  <X size={13} />
                </button>
              </div>
            </div>

            {/* ── Document Pages Grid ── */}
            <AnimatePresence>
              {!doc.collapsed && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="overflow-hidden"
                >
                  <div
                    className="p-3 min-h-[80px]"
                    onDragOver={(e) => { if (doc.pages.length === 0) handleEmptyDocDragOver(e, doc.id); }}
                    onDrop={(e) => { if (doc.pages.length === 0) handleDrop(e); }}
                  >
                    {doc.pages.length === 0 ? (
                      <div className={`flex items-center justify-center h-24 rounded-xl border-2 border-dashed transition-colors ${dragOverTarget?.docId === doc.id && dragOverTarget?.empty ? 'border-indigo-500 bg-indigo-500/5' : 'border-border'}`}>
                        <p className="text-xs text-muted">Drop pages here, add a PDF, or add a blank page</p>
                      </div>
                    ) : (
                      <div className={`grid ${gridCols[thumbSize]} gap-2`}>
                        {doc.pages.map((page, idx) => {
                          const isSelected = selectedPages.has(page.id);
                          const isDragging = dragData?.pageId === page.id || (dragData?.isMulti && selectedPages.has(page.id));
                          const isDropLeft = dragOverTarget?.pageId === page.id && dragOverTarget?.side === 'left';
                          const isDropRight = dragOverTarget?.pageId === page.id && dragOverTarget?.side === 'right';

                          return (
                            <div
                              key={page.id}
                              draggable
                              onDragStart={(e) => handleDragStart(e, page.id, doc.id)}
                              onDragOver={(e) => handlePageDragOver(e, page.id, doc.id)}
                              onDragLeave={(e) => { if (!e.currentTarget.contains(e.relatedTarget)) setDragOverTarget(null); }}
                              onDrop={handleDrop}
                              onDragEnd={resetDrag}
                              onClick={(e) => handlePageClick(e, page.id, doc.id)}
                              className={`relative group select-none ${isDragging ? 'opacity-30' : 'opacity-100'}`}
                            >
                              {/* Drop indicators */}
                              {isDropLeft && !isDragging && <div className="absolute left-[-4px] top-0 bottom-0 w-[3px] bg-indigo-500 rounded-full z-20" />}
                              {isDropRight && !isDragging && <div className="absolute right-[-4px] top-0 bottom-0 w-[3px] bg-indigo-500 rounded-full z-20" />}

                              <div className={`
                                rounded-lg overflow-hidden transition-all duration-150 cursor-grab active:cursor-grabbing
                                ${isSelected
                                  ? `ring-2 ${color.ring} shadow-md`
                                  : 'ring-0 hover:shadow-md hover:shadow-black/5 dark:hover:shadow-black/20'
                                }
                                bg-card border ${isSelected ? color.border : 'border-border'}
                              `}>
                                {/* Thumbnail */}
                                <div className="relative aspect-[3/4] bg-white dark:bg-stone-900 overflow-hidden">
                                  {page.sourceFile === '__blank__' ? (
                                    <div className="w-full h-full flex items-center justify-center bg-stone-50 dark:bg-stone-800">
                                      <span className="text-[10px] text-muted">Blank</span>
                                    </div>
                                  ) : page.thumbnail ? (
                                    <img src={page.thumbnail} alt="" className="w-full h-full object-contain" draggable={false}
                                      style={{ transform: `rotate(${page.rotation}deg)`, transition: 'transform 0.2s' }} />
                                  ) : (
                                    <div className="w-full h-full flex items-center justify-center">
                                      <FileText size={16} className="text-muted" />
                                    </div>
                                  )}

                                  {/* Selection check */}
                                  {isSelected && (
                                    <div className={`absolute top-1 left-1 w-5 h-5 rounded-md ${color.bg} flex items-center justify-center`}>
                                      <Check size={11} className="text-white" strokeWidth={3} />
                                    </div>
                                  )}

                                  {/* Hover overlay */}
                                  <div className="absolute inset-x-0 bottom-0 p-1 flex justify-center gap-0.5 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-t from-black/60 to-transparent pt-5">
                                    {page.sourceFile !== '__blank__' && (
                                      <button onClick={(e) => { e.stopPropagation(); openPreview(page); }}
                                        className="p-1 bg-white/80 dark:bg-stone-800/80 rounded-md hover:bg-white transition-colors" title="Preview">
                                        <ZoomIn size={10} className="text-stone-700 dark:text-stone-200" />
                                      </button>
                                    )}
                                    <button onClick={(e) => { e.stopPropagation(); rotatePage(doc.id, page.id, 90); }}
                                      className="p-1 bg-white/80 dark:bg-stone-800/80 rounded-md hover:bg-white transition-colors" title="Rotate">
                                      <RotateCw size={10} className="text-stone-700 dark:text-stone-200" />
                                    </button>
                                    <button onClick={(e) => { e.stopPropagation(); duplicatePage(doc.id, page.id); }}
                                      className="p-1 bg-white/80 dark:bg-stone-800/80 rounded-md hover:bg-white transition-colors" title="Duplicate">
                                      <Copy size={10} className="text-stone-700 dark:text-stone-200" />
                                    </button>
                                    <button onClick={(e) => { e.stopPropagation(); deletePage(doc.id, page.id); }}
                                      className="p-1 bg-red-500/80 rounded-md hover:bg-red-600 transition-colors" title="Delete">
                                      <Trash2 size={10} className="text-white" />
                                    </button>
                                  </div>

                                  {page.rotation !== 0 && (
                                    <div className="absolute top-1 right-1 px-1 py-0.5 bg-indigo-500 text-white text-[8px] font-bold rounded">{page.rotation}°</div>
                                  )}
                                </div>

                                {/* Footer */}
                                <div className={`px-1 py-1 text-center border-t ${isSelected ? color.border : 'border-border'}`}>
                                  <p className="text-[10px] font-bold text-text leading-none">{idx + 1}</p>
                                </div>
                              </div>
                            </div>
                          );
                        })}

                        {/* Add card */}
                        <button
                          onClick={() => openFilePicker(doc.id)}
                          className="aspect-[3/4] rounded-lg border-2 border-dashed border-border hover:border-indigo-400 bg-card/30 hover:bg-indigo-500/5 flex flex-col items-center justify-center gap-1 transition-all cursor-pointer"
                        >
                          <Plus size={14} className="text-muted" />
                          <span className="text-[9px] text-muted">Add</span>
                        </button>
                      </div>
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        );
      })}

      {/* ── Preview Modal ── */}
      <AnimatePresence>
        {previewPage && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/70 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => { setPreviewPage(null); setPreviewUrl(null); }}
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.92, opacity: 0 }}
              className="relative max-w-4xl max-h-[90vh] w-full bg-card rounded-2xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between px-5 py-3 border-b border-border">
                <h3 className="text-sm font-semibold text-text">Page Preview</h3>
                <button onClick={() => { setPreviewPage(null); setPreviewUrl(null); }}
                  className="p-2 rounded-lg hover:bg-border text-muted hover:text-text transition-colors">
                  <X size={16} />
                </button>
              </div>
              <div className="p-6 flex items-center justify-center min-h-[300px] max-h-[calc(90vh-64px)] overflow-auto bg-stone-100 dark:bg-stone-900">
                {previewLoading ? (
                  <Loader2 size={32} className="animate-spin text-muted" />
                ) : previewUrl ? (
                  <img src={previewUrl} alt="Preview"
                    className="max-w-full max-h-[calc(90vh-120px)] object-contain rounded-lg shadow-xl"
                    style={{ transform: `rotate(${previewPage?.rotation || 0}deg)` }} />
                ) : previewPage?.sourceFile === '__blank__' ? (
                  <div className="w-[400px] h-[560px] bg-white dark:bg-stone-800 rounded-lg shadow-xl flex items-center justify-center">
                    <span className="text-muted text-sm">Blank Page</span>
                  </div>
                ) : (
                  <p className="text-muted text-sm">Preview not available</p>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Status ── */}
      {status && !loading && <StatusMessage type={status.type}>{status.msg}</StatusMessage>}
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
//  TOOLS CONFIG
// ═══════════════════════════════════════════════════════════════════════════════
const pdfToolsList = [
  {
    id: 'organizer',
    name: 'Page Organizer',
    description: 'Visual drag & drop to reorder, delete & combine pages',
    icon: LayoutGrid,
    gradient: 'from-indigo-500 to-violet-500',
    component: PageOrganizerTool,
    featured: true,
  },
  {
    id: 'merge',
    name: 'Merge PDFs',
    description: 'Combine multiple PDFs into one document',
    icon: Merge,
    gradient: 'from-rose-500 to-pink-500',
    component: MergePdfTool,
  },
  {
    id: 'split',
    name: 'Split PDF',
    description: 'Split PDF into individual pages or ranges',
    icon: Scissors,
    gradient: 'from-orange-500 to-amber-500',
    component: SplitPdfTool,
  },
  {
    id: 'compress',
    name: 'Compress PDF',
    description: 'Reduce PDF file size by rebuilding',
    icon: Minimize2,
    gradient: 'from-emerald-500 to-teal-500',
    component: CompressPdfTool,
  },
  {
    id: 'images-to-pdf',
    name: 'Images to PDF',
    description: 'Convert images into a PDF document',
    icon: Image,
    gradient: 'from-blue-500 to-indigo-500',
    component: ImagesToPdfTool,
  },
  {
    id: 'pdf-to-images',
    name: 'PDF to Images',
    description: 'Convert PDF pages to PNG images',
    icon: Image,
    gradient: 'from-violet-500 to-purple-500',
    component: PdfToImagesTool,
  },
  {
    id: 'rotate',
    name: 'Rotate Pages',
    description: 'Rotate individual or all pages',
    icon: RotateCw,
    gradient: 'from-cyan-500 to-blue-500',
    component: RotatePagesTool,
  },
  {
    id: 'extract',
    name: 'Extract Pages',
    description: 'Pick and save specific pages',
    icon: FileOutput,
    gradient: 'from-fuchsia-500 to-pink-500',
    component: ExtractPagesTool,
  },
  {
    id: 'delete',
    name: 'Delete Pages',
    description: 'Remove unwanted pages from PDF',
    icon: Trash2,
    gradient: 'from-red-500 to-rose-500',
    component: DeletePagesTool,
  },
  {
    id: 'watermark',
    name: 'Add Watermark',
    description: 'Overlay text watermark on every page',
    icon: Droplets,
    gradient: 'from-sky-500 to-cyan-500',
    component: WatermarkTool,
  },
  {
    id: 'page-numbers',
    name: 'Page Numbers',
    description: 'Add page numbers to your PDF',
    icon: Hash,
    gradient: 'from-amber-500 to-yellow-500',
    component: PageNumbersTool,
  },
  {
    id: 'protect',
    name: 'Protect PDF',
    description: 'Strip metadata and rebuild for privacy',
    icon: Lock,
    gradient: 'from-stone-500 to-stone-700',
    component: ProtectPdfTool,
  },
];

// ═══════════════════════════════════════════════════════════════════════════════
//  MAIN COMPONENT
// ═══════════════════════════════════════════════════════════════════════════════
export default function PdfTools() {
  const [activeTool, setActiveTool] = useState(null);

  const ActiveComponent = activeTool ? pdfToolsList.find(t => t.id === activeTool)?.component : null;
  const activeToolData = activeTool ? pdfToolsList.find(t => t.id === activeTool) : null;

  // Categorize tools
  const featured = pdfToolsList.filter(t => t.featured);
  const manipulate = pdfToolsList.filter(t => ['merge', 'split', 'compress'].includes(t.id));
  const convert = pdfToolsList.filter(t => ['images-to-pdf', 'pdf-to-images'].includes(t.id));
  const pageOps = pdfToolsList.filter(t => ['rotate', 'extract', 'delete'].includes(t.id));
  const enhance = pdfToolsList.filter(t => ['watermark', 'page-numbers', 'protect'].includes(t.id));

  const toolSections = [
    { label: 'File Operations', tools: manipulate },
    { label: 'Convert', tools: convert },
    { label: 'Page Operations', tools: pageOps },
    { label: 'Enhance & Protect', tools: enhance },
  ];

  return (
    <div className="relative min-h-screen bg-background overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 -right-24 w-[500px] h-[500px] bg-rose-500/[0.06] rounded-full blur-3xl" />
        <div className="absolute bottom-0 -left-24 w-[500px] h-[500px] bg-orange-500/[0.05] rounded-full blur-3xl" />
      </div>

      {/* Header */}
      <div className="sticky top-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center gap-3">
          {activeTool ? (
            <motion.button
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              onClick={() => setActiveTool(null)}
              className="p-2 rounded-xl hover:bg-border text-muted hover:text-text transition-all"
            >
              <ArrowLeft size={20} />
            </motion.button>
          ) : (
            <a href="/tools" className="p-2 rounded-xl hover:bg-border text-muted hover:text-text transition-all">
              <ArrowLeft size={20} />
            </a>
          )}
          <div className="flex items-center gap-3 flex-1 min-w-0">
            <div className={`w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg ${
              activeToolData ? `bg-gradient-to-br ${activeToolData.gradient}` : 'bg-gradient-to-br from-rose-500 to-orange-500'
            }`}>
              {activeToolData ? <activeToolData.icon size={18} className="text-white" /> : <FileText size={18} className="text-white" />}
            </div>
            <div className="min-w-0">
              <h1 className="text-base font-bold text-text leading-tight truncate">
                {activeToolData ? activeToolData.name : 'PDF Tools'}
              </h1>
              {!activeTool && <p className="text-[11px] text-muted hidden sm:block">Kostenlos &middot; Privat &middot; Nur im Browser</p>}
            </div>
          </div>
          {!activeTool && (
            <div className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 bg-emerald-500/10 border border-emerald-500/20 rounded-full">
              <Lock size={12} className="text-emerald-600 dark:text-emerald-400" />
              <span className="text-[11px] font-medium text-emerald-700 dark:text-emerald-300">Dateien bleiben auf deinem Gerät</span>
            </div>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto px-4 py-6 ${activeTool === 'organizer' ? 'max-w-6xl' : 'max-w-5xl'}">
        <AnimatePresence mode="wait">
          {!activeTool ? (
            <motion.div key="hub" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0, y: -20 }}>

              {/* Hero strip */}
              <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
                className="relative mb-8 rounded-3xl overflow-hidden bg-gradient-to-br from-rose-500/[0.07] via-transparent to-orange-500/[0.07] border border-border p-6 sm:p-8">
                <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                  <div className="flex-1">
                    <h1 className="text-2xl sm:text-3xl font-black text-text tracking-tight">PDF Tools</h1>
                    <p className="text-sm text-muted mt-1">Alle Bearbeitung läuft lokal in deinem Browser – nichts wird hochgeladen.</p>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-muted">
                    <Sparkles size={14} className="text-rose-400" />
                    <span>9 Tools · 100% kostenlos</span>
                  </div>
                </div>
              </motion.div>

              {/* Featured Tool — Page Organizer */}
              {featured.map((tool) => {
                const Icon = tool.icon;
                return (
                  <motion.button
                    key={tool.id}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    whileHover={{ y: -3 }}
                    whileTap={{ scale: 0.995 }}
                    onClick={() => setActiveTool(tool.id)}
                    className="group relative w-full bg-gradient-to-br from-indigo-500/[0.04] via-card to-violet-500/[0.04] border border-border rounded-3xl p-5 sm:p-6 text-left hover:shadow-xl shadow-black/5 hover:border-indigo-500/30 transition-all duration-300 overflow-hidden mb-8"
                  >
                    <div className="relative flex items-center gap-4 sm:gap-5">
                      <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${tool.gradient} flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg`}>
                        <Icon size={26} className="text-white" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1 flex-wrap">
                          <h3 className="font-bold text-text text-base sm:text-lg">{tool.name}</h3>
                          <span className="px-2 py-0.5 bg-gradient-to-r from-indigo-500 to-violet-500 text-white text-[10px] font-bold rounded-full leading-tight">PRO</span>
                        </div>
                        <p className="text-sm text-muted leading-relaxed">{tool.description}</p>
                        <p className="text-[11px] text-muted/70 mt-1 hidden sm:block">Multi-Dokument-Arbeitsbereich &middot; Drag &amp; drop &middot; Ctrl+C/V &middot; Export pro Dokument</p>
                      </div>
                      <ArrowLeft size={20} className="text-muted rotate-180 group-hover:translate-x-1 transition-transform flex-shrink-0 hidden sm:block" />
                    </div>
                  </motion.button>
                );
              })}

              {/* Tool Sections */}
              {toolSections.map((section, si) => (
                <div key={section.label} className="mb-5">
                  <motion.h2
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + si * 0.05 }}
                    className="text-xs font-bold text-muted uppercase tracking-wider mb-3 px-1"
                  >
                    {section.label}
                  </motion.h2>
                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
                    {section.tools.map((tool, i) => {
                      const Icon = tool.icon;
                      return (
                        <motion.button
                          key={tool.id}
                          initial={{ opacity: 0, y: 16 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.15 + si * 0.05 + i * 0.03 }}
                          whileHover={{ y: -4, scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          onClick={() => setActiveTool(tool.id)}
                          className="group relative bg-card border border-border rounded-2xl p-4 text-left hover:shadow-xl shadow-black/5 hover:border-border transition-all duration-200 overflow-hidden"
                        >
                          <div className={`absolute inset-0 bg-gradient-to-br ${tool.gradient} opacity-0 group-hover:opacity-[0.06] transition-opacity duration-200`} />
                          <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${tool.gradient} flex items-center justify-center mb-2.5 group-hover:scale-110 transition-transform duration-200 shadow-md`}>
                            <Icon size={18} className="text-white" />
                          </div>
                          <h3 className="font-semibold text-text text-[13px] mb-0.5">{tool.name}</h3>
                          <p className="text-[11px] text-muted leading-relaxed">{tool.description}</p>
                        </motion.button>
                      );
                    })}
                  </div>
                </div>
              ))}

              {/* Footer */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="flex items-center justify-center gap-3 mt-10 pt-6 border-t border-border/50"
              >
                <Lock size={12} className="text-muted" />
                <p className="text-[11px] text-muted">
                  Alle Verarbeitung erfolgt lokal. Keine Dateien werden auf einen Server hochgeladen. Erstellt mit pdf-lib &amp; pdf.js.
                </p>
              </motion.div>
            </motion.div>
          ) : (
            <motion.div
              key={activeTool}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              className={activeTool === 'organizer' ? '' : 'max-w-3xl mx-auto'}
            >
              {ActiveComponent && <ActiveComponent />}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
