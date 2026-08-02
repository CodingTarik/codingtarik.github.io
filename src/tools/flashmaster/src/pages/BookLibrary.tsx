/**
 * BookLibrary — Browse and manage your book collection.
 * Upload EPUB/PDF files, see covers, reading progress, and bookmarks.
 */

import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLiveQuery } from 'dexie-react-hooks';
import {
  ArrowLeft, Plus, BookOpen, Search, Trash2, Clock, BookmarkIcon,
  Upload, FileText, MoreVertical, X, Loader, Percent, Eye,
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import toast from 'react-hot-toast';
import { v4 as uuidv4 } from 'uuid';
import { db } from '../lib/db';
import { useT } from '../lib/i18n';
import type { Book } from '../types';

function formatSize(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

function formatDate(ts: number): string {
  return new Date(ts).toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' });
}

/** Try to extract cover from EPUB file */
async function extractEpubCover(arrayBuffer: ArrayBuffer): Promise<string | undefined> {
  try {
    const ePub = (await import('epubjs')).default;
    const book = ePub(arrayBuffer);
    await book.ready;
    const coverUrl = await book.coverUrl();
    if (coverUrl) {
      // Convert blob URL to data URL
      const response = await fetch(coverUrl);
      const blob = await response.blob();
      return await new Promise<string>((resolve) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result as string);
        reader.readAsDataURL(blob);
      });
    }
    // Try metadata image
    const meta = book.packaging?.metadata;
    if (meta) return undefined;
    return undefined;
  } catch {
    return undefined;
  }
}

/** Render PDF first page to a thumbnail data URL */
async function extractPdfCover(arrayBuffer: ArrayBuffer): Promise<string | undefined> {
  try {
    const pdfjsLib = await import('pdfjs-dist');
    pdfjsLib.GlobalWorkerOptions.workerSrc = new URL('pdfjs-dist/build/pdf.worker.mjs', import.meta.url).href;

    const pdf = await pdfjsLib.getDocument({ data: new Uint8Array(arrayBuffer) }).promise;
    const page = await pdf.getPage(1);

    // Render at a reasonable thumbnail size (max ~400px wide)
    const unscaledViewport = page.getViewport({ scale: 1 });
    const scale = Math.min(400 / unscaledViewport.width, 600 / unscaledViewport.height);
    const viewport = page.getViewport({ scale });

    const canvas = document.createElement('canvas');
    canvas.width = viewport.width;
    canvas.height = viewport.height;
    const ctx = canvas.getContext('2d')!;

    await page.render({ canvasContext: ctx, viewport }).promise;

    // Convert canvas to JPEG data URL (good quality, smaller than PNG)
    const dataUrl = canvas.toDataURL('image/jpeg', 0.85);
    pdf.destroy();
    return dataUrl;
  } catch (err) {
    console.warn('PDF cover extraction failed:', err);
    return undefined;
  }
}

/** Try to extract title/author from EPUB */
async function extractEpubMetadata(arrayBuffer: ArrayBuffer): Promise<{ title: string; author: string }> {
  try {
    const ePub = (await import('epubjs')).default;
    const book = ePub(arrayBuffer);
    await book.ready;
    const meta = book.packaging?.metadata;
    return {
      title: meta?.title || 'Untitled',
      author: meta?.creator || 'Unknown Author',
    };
  } catch {
    return { title: 'Untitled', author: 'Unknown Author' };
  }
}

export default function BookLibrary() {
  const navigate = useNavigate();
  const { t } = useT();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [uploading, setUploading] = useState(false);
  const [menuBookId, setMenuBookId] = useState<string | null>(null);

  const books = useLiveQuery(() =>
    db.books.orderBy('addedAt').reverse().toArray().then(all =>
      all.sort((a, b) => (b.lastReadAt || 0) - (a.lastReadAt || 0))
    )
  );

  const filtered = (books || []).filter(b => {
    if (!searchQuery) return true;
    const q = searchQuery.toLowerCase();
    return b.title.toLowerCase().includes(q) || b.author.toLowerCase().includes(q);
  });

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    setUploading(true);
    let added = 0;

    for (const file of Array.from(files)) {
      const isEpub = file.name.toLowerCase().endsWith('.epub');
      const isPdf = file.name.toLowerCase().endsWith('.pdf');
      if (!isEpub && !isPdf) {
        toast.error(`${file.name}: Only EPUB and PDF files supported`);
        continue;
      }
      if (file.size > 200 * 1024 * 1024) {
        toast.error(`${file.name}: File too large (max 200 MB)`);
        continue;
      }

      try {
        const arrayBuffer = await file.arrayBuffer();
        const base64 = await new Promise<string>((resolve) => {
          const reader = new FileReader();
          reader.onload = () => resolve(reader.result as string);
          reader.readAsDataURL(file);
        });

        let title = file.name.replace(/\.(epub|pdf)$/i, '');
        let author = 'Unknown Author';
        let coverUrl: string | undefined;

        if (isEpub) {
          const meta = await extractEpubMetadata(arrayBuffer);
          title = meta.title || title;
          author = meta.author;
          coverUrl = await extractEpubCover(arrayBuffer);
        } else if (isPdf) {
          coverUrl = await extractPdfCover(arrayBuffer);
        }

        const book: Book = {
          id: uuidv4(),
          title,
          author,
          coverUrl,
          format: isEpub ? 'epub' : 'pdf',
          fileData: base64,
          fileSize: file.size,
          addedAt: Date.now(),
          progress: 0,
          bookmarks: [],
          savedWords: [],
        };

        await db.books.put(book);
        added++;
      } catch (err) {
        toast.error(`Failed to import ${file.name}`);
        console.error(err);
      }
    }

    if (added > 0) {
      toast.success(`${added} book(s) added to library`);
    }
    setUploading(false);
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  const handleDelete = async (bookId: string) => {
    if (!confirm('Remove this book from your library?')) return;
    await db.books.delete(bookId);
    setMenuBookId(null);
    toast.success('Book removed');
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-6">
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <button
          onClick={() => navigate('/')}
          className="w-10 h-10 rounded-xl bg-slate-800/50 flex items-center justify-center hover:bg-slate-700/50 transition-colors"
        >
          <ArrowLeft size={20} />
        </button>
        <div className="flex-1">
          <h1 className="text-2xl font-bold flex items-center gap-2">
            <BookOpen size={24} className="text-primary-400" />
            Library
          </h1>
          <p className="text-sm text-slate-400">
            {(books || []).length} book{(books || []).length !== 1 ? 's' : ''}
          </p>
        </div>
        <button
          onClick={() => fileInputRef.current?.click()}
          disabled={uploading}
          className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-primary-500 to-purple-500 font-medium text-sm hover:from-primary-400 hover:to-purple-400 transition-all shadow-lg disabled:opacity-50"
        >
          {uploading ? <Loader size={16} className="animate-spin" /> : <Upload size={16} />}
          Add Book
        </button>
        <input
          ref={fileInputRef}
          type="file"
          accept=".epub,.pdf"
          multiple
          onChange={handleUpload}
          className="hidden"
        />
      </div>

      {/* Search */}
      {(books || []).length > 0 && (
        <div className="relative mb-5">
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
          <input
            type="text"
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            placeholder="Search books..."
            className="w-full pl-9 pr-4 py-2.5 rounded-xl bg-slate-800/50 border border-slate-700/50 focus:border-primary-500/50 focus:outline-none text-sm transition-colors"
          />
        </div>
      )}

      {/* Book Grid */}
      {filtered.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-20 text-center">
          <BookOpen size={48} className="text-slate-700 mb-4" />
          <p className="text-lg font-medium text-slate-400 mb-2">
            {searchQuery ? 'No books found' : 'Your library is empty'}
          </p>
          <p className="text-sm text-slate-500 mb-6 max-w-md">
            {searchQuery
              ? 'Try a different search term.'
              : 'Add EPUB or PDF books and read them right here. Highlight words to translate and create flashcards instantly!'}
          </p>
          {!searchQuery && (
            <button
              onClick={() => fileInputRef.current?.click()}
              className="flex items-center gap-2 px-5 py-3 rounded-xl bg-primary-500/20 text-primary-400 font-medium hover:bg-primary-500/30 transition-colors"
            >
              <Plus size={18} />
              Add Your First Book
            </button>
          )}
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {filtered.map(book => (
            <motion.div
              key={book.id}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="group relative"
            >
              <button
                onClick={() => navigate(`/library/${book.id}`)}
                className="w-full text-left transition-all hover:scale-[1.03] hover:shadow-xl"
              >
                {/* Cover */}
                <div className="aspect-[2/3] rounded-xl overflow-hidden mb-2 bg-slate-800/60 border border-slate-700/30 relative">
                  {book.coverUrl ? (
                    <img src={book.coverUrl} alt={book.title} className="w-full h-full object-cover" />
                  ) : (
                    <div className={`w-full h-full flex flex-col items-center justify-center p-3 bg-gradient-to-br ${
                      book.format === 'epub'
                        ? 'from-indigo-900/80 to-purple-900/80'
                        : 'from-red-900/80 to-orange-900/80'
                    }`}>
                      <FileText size={32} className="text-white/40 mb-2" />
                      <p className="text-[10px] text-white/60 text-center line-clamp-3 font-medium">{book.title}</p>
                      <span className="mt-auto text-[9px] text-white/30 uppercase">{book.format}</span>
                    </div>
                  )}

                  {/* Progress overlay */}
                  {book.progress > 0 && (
                    <div className="absolute bottom-0 left-0 right-0">
                      <div className="h-1 bg-black/40">
                        <div
                          className="h-full bg-primary-500 transition-all"
                          style={{ width: `${book.progress}%` }}
                        />
                      </div>
                    </div>
                  )}

                  {/* Format badge */}
                  <span className={`absolute top-2 right-2 px-1.5 py-0.5 rounded text-[8px] font-bold uppercase ${
                    book.format === 'epub'
                      ? 'bg-indigo-500/80 text-white'
                      : 'bg-red-500/80 text-white'
                  }`}>
                    {book.format}
                  </span>
                </div>

                {/* Info */}
                <div className="px-0.5">
                  <p className="text-sm font-medium truncate">{book.title}</p>
                  <p className="text-[11px] text-slate-500 truncate">{book.author}</p>
                  <div className="flex items-center gap-2 mt-1 text-[10px] text-slate-600">
                    {book.progress > 0 && (
                      <span className="flex items-center gap-0.5">
                        <Percent size={9} />
                        {Math.round(book.progress)}%
                      </span>
                    )}
                    {book.bookmarks.length > 0 && (
                      <span className="flex items-center gap-0.5">
                        <BookmarkIcon size={9} />
                        {book.bookmarks.length}
                      </span>
                    )}
                    {book.savedWords.length > 0 && (
                      <span className="flex items-center gap-0.5">
                        <Eye size={9} />
                        {book.savedWords.length}
                      </span>
                    )}
                    <span>{formatSize(book.fileSize)}</span>
                  </div>
                </div>
              </button>

              {/* Context menu button */}
              <button
                onClick={(e) => { e.stopPropagation(); setMenuBookId(menuBookId === book.id ? null : book.id); }}
                className="absolute top-2 left-2 w-6 h-6 rounded-md bg-black/50 backdrop-blur-sm flex items-center justify-center text-white/70 hover:text-white opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <MoreVertical size={12} />
              </button>

              <AnimatePresence>
                {menuBookId === book.id && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="absolute top-10 left-2 z-10 bg-slate-800 border border-slate-700/50 rounded-xl shadow-xl overflow-hidden"
                  >
                    <button
                      onClick={() => navigate(`/library/${book.id}`)}
                      className="flex items-center gap-2 px-4 py-2 text-xs hover:bg-slate-700/50 w-full text-left"
                    >
                      <BookOpen size={12} /> Read
                    </button>
                    <button
                      onClick={() => handleDelete(book.id)}
                      className="flex items-center gap-2 px-4 py-2 text-xs text-red-400 hover:bg-red-500/10 w-full text-left"
                    >
                      <Trash2 size={12} /> Remove
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
}
