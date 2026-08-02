/**
 * ResourceManager — Browse and manage all resources within a deck.
 * Supports: notes, PDFs, links, YouTube videos, images, and files.
 */

import { useState, useRef } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useLiveQuery } from 'dexie-react-hooks';
import {
  ArrowLeft,
  Plus,
  FileText,
  Image,
  Link2,
  Youtube,
  File,
  FileUp,
  Trash2,
  Edit3,
  Search,
  MoreVertical,
  StickyNote,
  Globe,
  Film,
  X,
  FileImage,
  Video,
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import toast from 'react-hot-toast';
import { v4 as uuidv4 } from 'uuid';
import { db } from '../lib/db';
import { useT } from '../lib/i18n';
import type { DeckResource, ResourceType } from '../types';

const RESOURCE_ICONS: Record<ResourceType, typeof FileText> = {
  note: StickyNote,
  pdf: FileText,
  link: Globe,
  youtube: Youtube,
  image: FileImage,
  file: File,
};

const RESOURCE_COLORS: Record<ResourceType, string> = {
  note: 'text-amber-400 bg-amber-500/15',
  pdf: 'text-red-400 bg-red-500/15',
  link: 'text-blue-400 bg-blue-500/15',
  youtube: 'text-red-400 bg-red-500/15',
  image: 'text-emerald-400 bg-emerald-500/15',
  file: 'text-slate-400 bg-slate-500/15',
};

const RESOURCE_LABELS: Record<ResourceType, string> = {
  note: 'Note',
  pdf: 'PDF',
  link: 'Web Link',
  youtube: 'YouTube',
  image: 'Image',
  file: 'File',
};

function formatSize(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1048576) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / 1048576).toFixed(1)} MB`;
}

function formatDate(ts: number): string {
  return new Date(ts).toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' });
}

export default function ResourceManager() {
  const { id: deckId } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { t } = useT();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const deck = useLiveQuery(() => db.decks.get(deckId!), [deckId]);
  const resources = useLiveQuery(
    () => db.resources.where('deckId').equals(deckId!).reverse().sortBy('updatedAt'),
    [deckId]
  );

  const [searchQuery, setSearchQuery] = useState('');
  const [filterType, setFilterType] = useState<ResourceType | 'all'>('all');
  const [showAddMenu, setShowAddMenu] = useState(false);
  const [linkUrl, setLinkUrl] = useState('');
  const [linkTitle, setLinkTitle] = useState('');
  const [showLinkDialog, setShowLinkDialog] = useState(false);
  const [showYoutubeDialog, setShowYoutubeDialog] = useState(false);
  const [youtubeUrl, setYoutubeUrl] = useState('');
  const [youtubeTitle, setYoutubeTitle] = useState('');

  const filtered = (resources || []).filter(r => {
    if (filterType !== 'all' && r.type !== filterType) return false;
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      return r.title.toLowerCase().includes(q) || r.type.includes(q);
    }
    return true;
  });

  // ── Create Handlers ──

  const createNote = async () => {
    const resource: DeckResource = {
      id: uuidv4(),
      deckId: deckId!,
      type: 'note',
      title: 'Untitled Note',
      createdAt: Date.now(),
      updatedAt: Date.now(),
      content: '',
      drawings: [[]],
    };
    await db.resources.put(resource);
    navigate(`/deck/${deckId}/resource/${resource.id}`);
  };

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    for (const file of Array.from(files)) {
      const reader = new FileReader();
      reader.onload = async () => {
        const dataUrl = reader.result as string;

        // Determine type
        let type: ResourceType = 'file';
        if (file.type === 'application/pdf') type = 'pdf';
        else if (file.type.startsWith('image/')) type = 'image';
        else if (file.type.startsWith('video/')) type = 'file';
        else if (file.type.startsWith('text/')) type = 'file';

        // Create thumbnail for images
        let thumbnail: string | undefined;
        if (type === 'image') {
          try {
            thumbnail = await createImageThumbnail(dataUrl);
          } catch {}
        }

        const resource: DeckResource = {
          id: uuidv4(),
          deckId: deckId!,
          type,
          title: file.name,
          createdAt: Date.now(),
          updatedAt: Date.now(),
          fileName: file.name,
          fileType: file.type,
          fileData: dataUrl,
          fileSize: file.size,
          thumbnail,
          ...(type === 'pdf' ? { pdfData: dataUrl, pdfAnnotations: [] } : {}),
        };
        await db.resources.put(resource);
      };
      reader.readAsDataURL(file);
    }

    toast.success(`${files.length} file(s) added`);
    e.target.value = '';
    setShowAddMenu(false);
  };

  const addLink = async () => {
    if (!linkUrl.trim()) return;
    let url = linkUrl.trim();
    if (!url.startsWith('http')) url = 'https://' + url;
    const resource: DeckResource = {
      id: uuidv4(),
      deckId: deckId!,
      type: 'link',
      title: linkTitle.trim() || url,
      createdAt: Date.now(),
      updatedAt: Date.now(),
      url,
    };
    await db.resources.put(resource);
    toast.success('Link added');
    setLinkUrl('');
    setLinkTitle('');
    setShowLinkDialog(false);
  };

  const addYoutube = async () => {
    if (!youtubeUrl.trim()) return;
    const resource: DeckResource = {
      id: uuidv4(),
      deckId: deckId!,
      type: 'youtube',
      title: youtubeTitle.trim() || 'YouTube Video',
      createdAt: Date.now(),
      updatedAt: Date.now(),
      youtubeUrl: youtubeUrl.trim(),
    };
    await db.resources.put(resource);
    toast.success('YouTube video added');
    setYoutubeUrl('');
    setYoutubeTitle('');
    setShowYoutubeDialog(false);
  };

  const deleteResource = async (id: string) => {
    if (!confirm('Delete this resource?')) return;
    await db.resources.delete(id);
    toast.success('Resource deleted');
  };

  if (!deck) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="animate-pulse text-slate-500">Loading...</div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-6">
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <button
          onClick={() => navigate(`/deck/${deckId}`)}
          className="w-10 h-10 rounded-xl bg-slate-800/50 flex items-center justify-center hover:bg-slate-700/50 transition-colors"
        >
          <ArrowLeft size={20} />
        </button>
        <div className="flex-1 min-w-0">
          <h1 className="text-xl md:text-2xl font-bold truncate">
            {deck.icon} {deck.name} — Resources
          </h1>
          <p className="text-xs text-slate-500">
            {resources?.length || 0} resources · Notes, PDFs, links, files & more
          </p>
        </div>
      </div>

      {/* Search + Filter + Add */}
      <div className="flex flex-col sm:flex-row gap-2 mb-5">
        <div className="relative flex-1">
          <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
          <input
            type="text"
            placeholder="Search resources..."
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-4 py-2.5 rounded-xl bg-slate-800/50 border border-slate-700/50 text-sm focus:border-primary-500/50 focus:outline-none transition-colors"
          />
        </div>

        <select
          value={filterType}
          onChange={e => setFilterType(e.target.value as ResourceType | 'all')}
          className="px-3 py-2.5 rounded-xl bg-slate-800/50 border border-slate-700/50 text-sm focus:outline-none"
        >
          <option value="all">All Types</option>
          <option value="note">📝 Notes</option>
          <option value="pdf">📄 PDFs</option>
          <option value="link">🔗 Links</option>
          <option value="youtube">▶️ YouTube</option>
          <option value="image">🖼️ Images</option>
          <option value="file">📎 Files</option>
        </select>

        {/* Add button */}
        <div className="relative">
          <button
            onClick={() => setShowAddMenu(a => !a)}
            className="w-full sm:w-auto px-4 py-2.5 rounded-xl bg-gradient-to-r from-primary-500 to-purple-500 text-white text-sm font-medium flex items-center justify-center gap-2 hover:shadow-lg transition-all"
          >
            <Plus size={16} />
            Add Resource
          </button>

          {/* Add Menu Dropdown */}
          <AnimatePresence>
            {showAddMenu && (
              <motion.div
                initial={{ opacity: 0, y: -5, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -5, scale: 0.95 }}
                className="absolute right-0 top-full mt-2 w-56 rounded-xl bg-slate-800/95 border border-slate-700/50 shadow-2xl backdrop-blur-xl z-50 overflow-hidden"
              >
                <button
                  onClick={createNote}
                  className="w-full flex items-center gap-3 px-4 py-3 hover:bg-slate-700/40 transition-colors text-left"
                >
                  <div className="w-8 h-8 rounded-lg bg-amber-500/15 flex items-center justify-center">
                    <StickyNote size={16} className="text-amber-400" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">New Note</p>
                    <p className="text-[10px] text-slate-500">Write & draw</p>
                  </div>
                </button>

                <button
                  onClick={() => { fileInputRef.current?.click(); }}
                  className="w-full flex items-center gap-3 px-4 py-3 hover:bg-slate-700/40 transition-colors text-left"
                >
                  <div className="w-8 h-8 rounded-lg bg-blue-500/15 flex items-center justify-center">
                    <FileUp size={16} className="text-blue-400" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Upload Files</p>
                    <p className="text-[10px] text-slate-500">PDF, images, videos, docs</p>
                  </div>
                </button>

                <button
                  onClick={() => { setShowLinkDialog(true); setShowAddMenu(false); }}
                  className="w-full flex items-center gap-3 px-4 py-3 hover:bg-slate-700/40 transition-colors text-left"
                >
                  <div className="w-8 h-8 rounded-lg bg-blue-500/15 flex items-center justify-center">
                    <Globe size={16} className="text-blue-400" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Web Link</p>
                    <p className="text-[10px] text-slate-500">Bookmark a website</p>
                  </div>
                </button>

                <button
                  onClick={() => { setShowYoutubeDialog(true); setShowAddMenu(false); }}
                  className="w-full flex items-center gap-3 px-4 py-3 hover:bg-slate-700/40 transition-colors text-left"
                >
                  <div className="w-8 h-8 rounded-lg bg-red-500/15 flex items-center justify-center">
                    <Youtube size={16} className="text-red-400" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">YouTube Video</p>
                    <p className="text-[10px] text-slate-500">Embed & watch</p>
                  </div>
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Hidden file input */}
      <input
        ref={fileInputRef}
        type="file"
        multiple
        accept=".pdf,.txt,.md,.csv,.png,.jpg,.jpeg,.gif,.webp,.svg,.mp4,.webm,.doc,.docx,.pptx,.xlsx"
        onChange={handleFileUpload}
        className="hidden"
      />

      {/* Resource Grid */}
      {filtered.length === 0 ? (
        <div className="text-center py-16">
          <FileText size={48} className="mx-auto text-slate-700 mb-4" />
          <p className="text-slate-500 text-sm mb-2">
            {resources?.length === 0 ? 'No resources yet' : 'No resources match your search'}
          </p>
          <p className="text-slate-600 text-xs">
            Add notes, PDFs, links, YouTube videos, images, and files to your deck.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {filtered.map(resource => {
            const Icon = RESOURCE_ICONS[resource.type];
            const colorClass = RESOURCE_COLORS[resource.type];
            return (
              <motion.div
                key={resource.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="group"
              >
                <button
                  onClick={() => {
                    if (resource.type === 'link' && resource.url) {
                      window.open(resource.url, '_blank');
                    } else if (resource.type === 'youtube' && resource.youtubeUrl) {
                      navigate(`/deck/${deckId}/resource/${resource.id}`);
                    } else if (resource.type === 'image' && resource.fileData) {
                      navigate(`/deck/${deckId}/resource/${resource.id}`);
                    } else {
                      navigate(`/deck/${deckId}/resource/${resource.id}`);
                    }
                  }}
                  className="w-full text-left glass-card rounded-xl p-4 hover:border-primary-500/30 transition-all group"
                >
                  {/* Thumbnail */}
                  {resource.thumbnail && (
                    <div className="mb-3 rounded-lg overflow-hidden bg-slate-800/50 aspect-video">
                      <img src={resource.thumbnail} alt="" className="w-full h-full object-cover" />
                    </div>
                  )}
                  {resource.type === 'youtube' && resource.youtubeUrl && !resource.thumbnail && (
                    <div className="mb-3 rounded-lg overflow-hidden bg-slate-800/50 aspect-video flex items-center justify-center">
                      <Youtube size={32} className="text-red-400" />
                    </div>
                  )}

                  <div className="flex items-start gap-3">
                    <div className={`w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 ${colorClass}`}>
                      <Icon size={17} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium truncate">{resource.title}</p>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-[10px] text-slate-500 uppercase tracking-wider">
                          {RESOURCE_LABELS[resource.type]}
                        </span>
                        {resource.fileSize && (
                          <span className="text-[10px] text-slate-600">{formatSize(resource.fileSize)}</span>
                        )}
                        <span className="text-[10px] text-slate-600">{formatDate(resource.updatedAt)}</span>
                      </div>
                      {resource.type === 'note' && resource.content && (
                        <p className="text-xs text-slate-500 mt-1 line-clamp-2">
                          {resource.content.replace(/<[^>]*>/g, '').slice(0, 100)}
                        </p>
                      )}
                      {resource.type === 'link' && resource.url && (
                        <p className="text-xs text-blue-400/70 mt-1 truncate">{resource.url}</p>
                      )}
                    </div>
                  </div>
                </button>
                {/* Quick actions */}
                <div className="flex justify-end gap-1 -mt-2 mr-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button
                    onClick={(e) => { e.stopPropagation(); deleteResource(resource.id); }}
                    className="w-7 h-7 rounded-lg bg-slate-800/80 flex items-center justify-center text-red-400 hover:bg-red-500/20 transition-colors"
                    title="Delete"
                  >
                    <Trash2 size={13} />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      )}

      {/* Link Dialog */}
      <AnimatePresence>
        {showLinkDialog && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setShowLinkDialog(false)}
          >
            <motion.div
              initial={{ scale: 0.95, y: 10 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 10 }}
              className="glass-card rounded-2xl p-6 w-full max-w-md"
              onClick={e => e.stopPropagation()}
            >
              <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                <Globe size={18} className="text-blue-400" />
                Add Web Link
              </h3>
              <div className="space-y-3">
                <input
                  type="url"
                  placeholder="https://example.com"
                  value={linkUrl}
                  onChange={e => setLinkUrl(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-800/50 border border-slate-700/50 text-sm focus:border-blue-500/50 focus:outline-none"
                  autoFocus
                />
                <input
                  type="text"
                  placeholder="Title (optional)"
                  value={linkTitle}
                  onChange={e => setLinkTitle(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-800/50 border border-slate-700/50 text-sm focus:border-blue-500/50 focus:outline-none"
                />
                <div className="flex gap-2 justify-end">
                  <button onClick={() => setShowLinkDialog(false)} className="px-4 py-2 rounded-lg text-sm text-slate-400 hover:text-white">
                    Cancel
                  </button>
                  <button
                    onClick={addLink}
                    disabled={!linkUrl.trim()}
                    className="px-4 py-2 rounded-lg bg-blue-500 text-white text-sm font-medium disabled:opacity-40"
                  >
                    Add Link
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* YouTube Dialog */}
      <AnimatePresence>
        {showYoutubeDialog && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setShowYoutubeDialog(false)}
          >
            <motion.div
              initial={{ scale: 0.95, y: 10 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 10 }}
              className="glass-card rounded-2xl p-6 w-full max-w-md"
              onClick={e => e.stopPropagation()}
            >
              <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                <Youtube size={18} className="text-red-400" />
                Add YouTube Video
              </h3>
              <div className="space-y-3">
                <input
                  type="url"
                  placeholder="https://youtube.com/watch?v=..."
                  value={youtubeUrl}
                  onChange={e => setYoutubeUrl(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-800/50 border border-slate-700/50 text-sm focus:border-red-500/50 focus:outline-none"
                  autoFocus
                />
                <input
                  type="text"
                  placeholder="Title (optional)"
                  value={youtubeTitle}
                  onChange={e => setYoutubeTitle(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-800/50 border border-slate-700/50 text-sm focus:border-red-500/50 focus:outline-none"
                />
                <div className="flex gap-2 justify-end">
                  <button onClick={() => setShowYoutubeDialog(false)} className="px-4 py-2 rounded-lg text-sm text-slate-400 hover:text-white">
                    Cancel
                  </button>
                  <button
                    onClick={addYoutube}
                    disabled={!youtubeUrl.trim()}
                    className="px-4 py-2 rounded-lg bg-red-500 text-white text-sm font-medium disabled:opacity-40"
                  >
                    Add Video
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/** Create a small thumbnail from an image data URL */
async function createImageThumbnail(dataUrl: string, maxSize = 200): Promise<string> {
  return new Promise((resolve, reject) => {
    const img = new window.Image();
    img.onload = () => {
      const canvas = document.createElement('canvas');
      const scale = Math.min(maxSize / img.width, maxSize / img.height, 1);
      canvas.width = img.width * scale;
      canvas.height = img.height * scale;
      const ctx = canvas.getContext('2d');
      ctx?.drawImage(img, 0, 0, canvas.width, canvas.height);
      resolve(canvas.toDataURL('image/jpeg', 0.7));
    };
    img.onerror = reject;
    img.src = dataUrl;
  });
}
