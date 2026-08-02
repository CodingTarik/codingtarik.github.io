/**
 * File Attachment Viewer
 * Supports: PDF (embedded), code files (syntax highlighted), images, text.
 * Files are stored as data URLs in IndexedDB for full offline support.
 */

import { useState } from 'react';
import {
  Paperclip,
  FileText,
  FileCode,
  Image as ImageIcon,
  File,
  X,
  Maximize2,
  Download,
  ChevronDown,
  ChevronUp,
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import type { CardAttachment } from '../types';

interface Props {
  attachments: CardAttachment[];
  compact?: boolean;
}

function getFileIcon(type: string, name: string) {
  if (type.startsWith('image/')) return <ImageIcon size={14} />;
  if (type === 'application/pdf') return <FileText size={14} className="text-red-400" />;
  if (isCodeFile(name, type)) return <FileCode size={14} className="text-emerald-400" />;
  return <File size={14} />;
}

function isCodeFile(name: string, type: string): boolean {
  const codeExtensions = ['.js', '.ts', '.tsx', '.jsx', '.py', '.java', '.c', '.cpp', '.h', '.go', '.rs',
    '.rb', '.php', '.swift', '.kt', '.cs', '.html', '.css', '.scss', '.json', '.xml', '.yaml', '.yml',
    '.toml', '.sql', '.sh', '.bash', '.zsh', '.ps1', '.r', '.lua', '.dart', '.ex', '.exs', '.hs',
    '.ml', '.vim', '.dockerfile', '.makefile', '.md', '.txt', '.csv', '.log', '.ini', '.conf', '.cfg'];
  const lower = name.toLowerCase();
  return codeExtensions.some(ext => lower.endsWith(ext)) || type.startsWith('text/');
}

function isPdf(type: string): boolean {
  return type === 'application/pdf';
}

function isImage(type: string): boolean {
  return type.startsWith('image/');
}

function formatSize(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

function getLanguageFromName(name: string): string {
  const ext = name.split('.').pop()?.toLowerCase() || '';
  const map: Record<string, string> = {
    js: 'javascript', ts: 'typescript', tsx: 'tsx', jsx: 'jsx', py: 'python',
    java: 'java', c: 'c', cpp: 'cpp', h: 'c', go: 'go', rs: 'rust',
    rb: 'ruby', php: 'php', swift: 'swift', kt: 'kotlin', cs: 'csharp',
    html: 'html', css: 'css', scss: 'scss', json: 'json', xml: 'xml',
    yaml: 'yaml', yml: 'yaml', sql: 'sql', sh: 'bash', md: 'markdown',
  };
  return map[ext] || 'text';
}

/**
 * Decode base64 data URL to text content.
 */
function dataUrlToText(dataUrl: string): string {
  try {
    const base64 = dataUrl.split(',')[1];
    return atob(base64);
  } catch {
    return '(Unable to decode file)';
  }
}

function AttachmentPreview({ attachment, onClose }: { attachment: CardAttachment; onClose: () => void }) {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = attachment.dataUrl;
    link.download = attachment.name;
    link.click();
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] bg-black/70 backdrop-blur-sm flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="bg-slate-900 border border-slate-700/50 rounded-2xl shadow-2xl max-w-4xl w-full max-h-[85vh] flex flex-col overflow-hidden"
        onClick={e => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-slate-700/50">
          <div className="flex items-center gap-2 min-w-0">
            {getFileIcon(attachment.type, attachment.name)}
            <span className="text-sm font-medium truncate">{attachment.name}</span>
            <span className="text-xs text-slate-500">{formatSize(attachment.size)}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <button
              onClick={handleDownload}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-700/50 transition-colors"
              title="Download"
            >
              <Download size={16} />
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-700/50 transition-colors"
            >
              <X size={16} />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-auto">
          {isPdf(attachment.type) ? (
            <iframe
              src={attachment.dataUrl}
              className="w-full h-full min-h-[60vh]"
              title={attachment.name}
            />
          ) : isImage(attachment.type) ? (
            <div className="flex items-center justify-center p-4">
              <img
                src={attachment.dataUrl}
                alt={attachment.name}
                className="max-w-full max-h-[70vh] rounded-lg"
              />
            </div>
          ) : isCodeFile(attachment.name, attachment.type) ? (
            <div className="p-4">
              <pre className="bg-slate-800/60 rounded-xl p-4 overflow-x-auto text-sm font-mono text-slate-300 leading-relaxed">
                <code>{dataUrlToText(attachment.dataUrl)}</code>
              </pre>
            </div>
          ) : (
            <div className="p-4">
              <pre className="bg-slate-800/60 rounded-xl p-4 overflow-x-auto text-sm text-slate-300 whitespace-pre-wrap">
                {dataUrlToText(attachment.dataUrl)}
              </pre>
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function AttachmentViewer({ attachments, compact = false }: Props) {
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [previewAttachment, setPreviewAttachment] = useState<CardAttachment | null>(null);

  if (!attachments || attachments.length === 0) return null;

  return (
    <>
      <div className={`flex flex-wrap gap-1.5 ${compact ? 'mt-2' : 'mt-3'}`}>
        {attachments.map(att => (
          <button
            key={att.id}
            onClick={(e) => {
              e.stopPropagation();
              setPreviewAttachment(att);
            }}
            className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-slate-700/40 hover:bg-slate-700/70 text-xs text-slate-300 hover:text-white transition-all border border-slate-600/30 hover:border-primary-500/30"
            title={`${att.name} (${formatSize(att.size)}) — Click to open`}
          >
            {getFileIcon(att.type, att.name)}
            <span className="max-w-[120px] truncate">{att.name}</span>
          </button>
        ))}
      </div>

      <AnimatePresence>
        {previewAttachment && (
          <AttachmentPreview
            attachment={previewAttachment}
            onClose={() => setPreviewAttachment(null)}
          />
        )}
      </AnimatePresence>
    </>
  );
}
