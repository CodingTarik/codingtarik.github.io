/**
 * Document Extractor
 *
 * Extracts text from uploaded files:
 * - TXT/MD/CSV: read as UTF-8 text
 * - PDF: extract text via pdf.js, then OCR image-heavy pages via OpenAI Vision
 *
 * OCR Strategy: If a PDF page yields very little text (< 50 chars),
 * it's likely a scanned/image page. We render it to a canvas and
 * send the image to GPT-4o vision for OCR.
 */

import { getOpenAIKey, getOpenAIModel } from './openai';

// ── PDF.js setup ──

let pdfjsLib: typeof import('pdfjs-dist') | null = null;

async function getPdfjs() {
  if (pdfjsLib) return pdfjsLib;
  pdfjsLib = await import('pdfjs-dist');
  // Use the bundled worker
  pdfjsLib.GlobalWorkerOptions.workerSrc = new URL(
    'pdfjs-dist/build/pdf.worker.min.mjs',
    import.meta.url
  ).toString();
  return pdfjsLib;
}

// ── Types ──

export interface ExtractionResult {
  filename: string;
  text: string;
  pages: number;
  ocrPages: number; // pages that needed OCR
}

export interface ExtractionProgress {
  filename: string;
  step: 'reading' | 'extracting' | 'ocr' | 'done';
  currentPage?: number;
  totalPages?: number;
  message: string;
}

type ProgressCallback = (progress: ExtractionProgress) => void;

// ── Main Entry ──

export async function extractFromFiles(
  files: File[],
  onProgress?: ProgressCallback
): Promise<ExtractionResult[]> {
  const results: ExtractionResult[] = [];

  for (const file of files) {
    const ext = file.name.split('.').pop()?.toLowerCase() || '';

    if (['txt', 'md', 'csv', 'log', 'json', 'xml', 'yaml', 'yml'].includes(ext)) {
      onProgress?.({ filename: file.name, step: 'reading', message: `Reading ${file.name}...` });
      const text = await file.text();
      results.push({ filename: file.name, text, pages: 1, ocrPages: 0 });
      onProgress?.({ filename: file.name, step: 'done', message: `Done: ${file.name}` });
    } else if (ext === 'pdf') {
      const result = await extractFromPdf(file, onProgress);
      results.push(result);
    } else {
      // Try reading as text
      try {
        onProgress?.({ filename: file.name, step: 'reading', message: `Reading ${file.name}...` });
        const text = await file.text();
        results.push({ filename: file.name, text, pages: 1, ocrPages: 0 });
        onProgress?.({ filename: file.name, step: 'done', message: `Done: ${file.name}` });
      } catch {
        // Skip unsupported files
      }
    }
  }

  return results;
}

// ── PDF Extraction ──

async function extractFromPdf(
  file: File,
  onProgress?: ProgressCallback
): Promise<ExtractionResult> {
  onProgress?.({ filename: file.name, step: 'reading', message: `Loading ${file.name}...` });

  const pdfjs = await getPdfjs();
  const arrayBuffer = await file.arrayBuffer();
  const pdf = await pdfjs.getDocument({ data: arrayBuffer }).promise;

  const totalPages = pdf.numPages;
  const pageTexts: string[] = [];
  let ocrPages = 0;

  for (let i = 1; i <= totalPages; i++) {
    onProgress?.({
      filename: file.name,
      step: 'extracting',
      currentPage: i,
      totalPages,
      message: `Extracting text from page ${i}/${totalPages}...`,
    });

    const page = await pdf.getPage(i);
    const textContent = await page.getTextContent();
    const text = textContent.items
      .map((item: any) => item.str)
      .join(' ')
      .trim();

    if (text.length < 50) {
      // Likely an image/scanned page — try OCR via OpenAI Vision
      if (getOpenAIKey()) {
        onProgress?.({
          filename: file.name,
          step: 'ocr',
          currentPage: i,
          totalPages,
          message: `OCR page ${i}/${totalPages} via AI Vision...`,
        });

        try {
          const ocrText = await ocrPageWithVision(page);
          if (ocrText.trim()) {
            pageTexts.push(ocrText.trim());
            ocrPages++;
            continue;
          }
        } catch (err) {
          console.warn(`OCR failed for page ${i}:`, err);
        }
      }
      // If OCR failed or no key, include whatever text we got
      if (text) pageTexts.push(text);
    } else {
      pageTexts.push(text);
    }
  }

  const fullText = pageTexts.join('\n\n---\n\n');

  onProgress?.({ filename: file.name, step: 'done', message: `Done: ${file.name} (${totalPages} pages)` });

  return {
    filename: file.name,
    text: fullText,
    pages: totalPages,
    ocrPages,
  };
}

// ── OCR via OpenAI Vision ──

async function ocrPageWithVision(page: any): Promise<string> {
  const apiKey = getOpenAIKey();
  if (!apiKey) throw new Error('No API key');

  // Render page to canvas at 2x scale for better OCR
  const viewport = page.getViewport({ scale: 2.0 });
  const canvas = document.createElement('canvas');
  canvas.width = viewport.width;
  canvas.height = viewport.height;
  const ctx = canvas.getContext('2d')!;

  await page.render({ canvasContext: ctx, viewport }).promise;

  // Convert to JPEG (smaller than PNG for API call)
  const dataUrl = canvas.toDataURL('image/jpeg', 0.85);

  // Send to OpenAI Vision
  const response = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model: 'gpt-4o-mini',
      messages: [
        {
          role: 'user',
          content: [
            {
              type: 'text',
              text: 'Extract ALL text from this document page. Return the raw text content only, preserving the structure (headings, paragraphs, lists, tables). Do not add any commentary.',
            },
            {
              type: 'image_url',
              image_url: { url: dataUrl, detail: 'high' },
            },
          ],
        },
      ],
      max_tokens: 4096,
    }),
  });

  if (!response.ok) {
    throw new Error(`Vision API error: ${response.status}`);
  }

  const data = await response.json();
  return data.choices?.[0]?.message?.content || '';
}

// ── Utilities ──

/**
 * Estimate total tokens (rough: ~4 chars per token).
 */
export function estimateTokens(text: string): number {
  return Math.ceil(text.length / 4);
}

/**
 * Chunk text into segments that fit within a token limit.
 */
export function chunkText(text: string, maxCharsPerChunk: number = 12000): string[] {
  if (text.length <= maxCharsPerChunk) return [text];

  const chunks: string[] = [];
  const paragraphs = text.split(/\n\n+/);
  let current = '';

  for (const para of paragraphs) {
    if (current.length + para.length + 2 > maxCharsPerChunk) {
      if (current) chunks.push(current.trim());
      // If a single paragraph is too long, split by sentences
      if (para.length > maxCharsPerChunk) {
        const sentences = para.match(/[^.!?]+[.!?]+/g) || [para];
        let sentenceChunk = '';
        for (const s of sentences) {
          if (sentenceChunk.length + s.length > maxCharsPerChunk) {
            if (sentenceChunk) chunks.push(sentenceChunk.trim());
            sentenceChunk = s;
          } else {
            sentenceChunk += ' ' + s;
          }
        }
        current = sentenceChunk;
      } else {
        current = para;
      }
    } else {
      current += (current ? '\n\n' : '') + para;
    }
  }

  if (current.trim()) chunks.push(current.trim());
  return chunks;
}
