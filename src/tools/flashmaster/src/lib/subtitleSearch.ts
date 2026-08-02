/**
 * Subtitle Search — OpenSubtitles (no API key required)
 *
 * Uses the public OpenSubtitles REST endpoint via CORS proxy.
 * No registration or API key needed.
 */

// ── Types ──

export interface SubtitleResult {
  id: string;
  language: string;
  languageCode: string;
  release: string;
  downloadCount: number;
  hearingImpaired: boolean;
  fps: string;
  rating: string;
  fileName: string;
  downloadUrl: string;
  pageUrl: string;
  movieTitle: string;
  movieYear: string;
  format: string;
}

// ── Subtitle Languages ──
// Map 2-letter display codes to 3-letter OpenSubtitles codes

export const SUBTITLE_LANGUAGES: { code: string; osCode: string; name: string; flag: string }[] = [
  { code: 'en', osCode: 'eng', name: 'English', flag: '🇬🇧' },
  { code: 'de', osCode: 'ger', name: 'Deutsch', flag: '🇩🇪' },
  { code: 'es', osCode: 'spa', name: 'Español', flag: '🇪🇸' },
  { code: 'fr', osCode: 'fre', name: 'Français', flag: '🇫🇷' },
  { code: 'it', osCode: 'ita', name: 'Italiano', flag: '🇮🇹' },
  { code: 'pt', osCode: 'por', name: 'Português', flag: '🇵🇹' },
  { code: 'pb', osCode: 'pob', name: 'Português (BR)', flag: '🇧🇷' },
  { code: 'ru', osCode: 'rus', name: 'Русский', flag: '🇷🇺' },
  { code: 'zh', osCode: 'chi', name: '中文', flag: '🇨🇳' },
  { code: 'ja', osCode: 'jpn', name: '日本語', flag: '🇯🇵' },
  { code: 'ko', osCode: 'kor', name: '한국어', flag: '🇰🇷' },
  { code: 'ar', osCode: 'ara', name: 'العربية', flag: '🇸🇦' },
  { code: 'hi', osCode: 'hin', name: 'हिन्दी', flag: '🇮🇳' },
  { code: 'tr', osCode: 'tur', name: 'Türkçe', flag: '🇹🇷' },
  { code: 'nl', osCode: 'dut', name: 'Nederlands', flag: '🇳🇱' },
  { code: 'pl', osCode: 'pol', name: 'Polski', flag: '🇵🇱' },
  { code: 'sv', osCode: 'swe', name: 'Svenska', flag: '🇸🇪' },
  { code: 'da', osCode: 'dan', name: 'Dansk', flag: '🇩🇰' },
  { code: 'fi', osCode: 'fin', name: 'Suomi', flag: '🇫🇮' },
  { code: 'no', osCode: 'nor', name: 'Norsk', flag: '🇳🇴' },
  { code: 'cs', osCode: 'cze', name: 'Čeština', flag: '🇨🇿' },
  { code: 'ro', osCode: 'rum', name: 'Română', flag: '🇷🇴' },
  { code: 'el', osCode: 'ell', name: 'Ελληνικά', flag: '🇬🇷' },
  { code: 'hu', osCode: 'hun', name: 'Magyar', flag: '🇭🇺' },
  { code: 'th', osCode: 'tha', name: 'ไทย', flag: '🇹🇭' },
  { code: 'vi', osCode: 'vie', name: 'Tiếng Việt', flag: '🇻🇳' },
  { code: 'id', osCode: 'ind', name: 'Bahasa Indonesia', flag: '🇮🇩' },
  { code: 'uk', osCode: 'ukr', name: 'Українська', flag: '🇺🇦' },
  { code: 'bg', osCode: 'bul', name: 'Български', flag: '🇧🇬' },
  { code: 'hr', osCode: 'hrv', name: 'Hrvatski', flag: '🇭🇷' },
  { code: 'sk', osCode: 'slo', name: 'Slovenčina', flag: '🇸🇰' },
  { code: 'he', osCode: 'heb', name: 'עברית', flag: '🇮🇱' },
  { code: 'ms', osCode: 'may', name: 'Bahasa Melayu', flag: '🇲🇾' },
  { code: 'sr', osCode: 'scc', name: 'Srpski', flag: '🇷🇸' },
];

// ── CORS Proxies (fallback chain) ──

const CORS_PROXIES = [
  (url: string) => `https://api.allorigins.win/raw?url=${encodeURIComponent(url)}`,
  (url: string) => `https://corsproxy.io/?${encodeURIComponent(url)}`,
  (url: string) => `https://api.codetabs.com/v1/proxy?quest=${encodeURIComponent(url)}`,
];

async function fetchViaCorsProxy(url: string, headers?: Record<string, string>): Promise<Response> {
  // Try direct first
  try {
    const resp = await fetch(url, { headers });
    if (resp.ok) return resp;
  } catch {
    // CORS blocked — try proxies
  }

  // Try each CORS proxy
  for (const makeProxy of CORS_PROXIES) {
    try {
      const proxyUrl = makeProxy(url);
      const resp = await fetch(proxyUrl);
      if (resp.ok) return resp;
    } catch {
      continue;
    }
  }

  throw new Error('All fetch attempts failed (CORS blocked)');
}

// ── Search ──

const OS_REST_BASE = 'https://rest.opensubtitles.org/search';

export async function searchSubtitles(
  query: string,
  languageCodes: string[] = [],
): Promise<{ results: SubtitleResult[]; totalCount: number }> {
  if (!query.trim()) throw new Error('Search query required');

  // Build the REST path
  // Format: /search/query-{query}/sublanguageid-{lang1,lang2}
  const cleanQuery = query.trim().replace(/\s+/g, '+');
  let path = `${OS_REST_BASE}/query-${encodeURIComponent(cleanQuery)}`;

  if (languageCodes.length > 0) {
    // Convert 2-letter codes to 3-letter OpenSubtitles codes
    const osCodes = languageCodes.map(code => {
      const lang = SUBTITLE_LANGUAGES.find(l => l.code === code);
      return lang ? lang.osCode : code;
    });
    path += `/sublanguageid-${osCodes.join(',')}`;
  }

  const response = await fetchViaCorsProxy(path, {
    'User-Agent': 'FlashMaster v1.0',
  });

  const text = await response.text();

  let data: any[];
  try {
    data = JSON.parse(text);
  } catch {
    throw new Error('Invalid response from subtitle server');
  }

  if (!Array.isArray(data)) {
    throw new Error(typeof data === 'object' && data.message ? data.message : 'Unexpected response');
  }

  const results: SubtitleResult[] = data.map((item: any) => ({
    id: item.IDSubtitleFile || item.IDSubtitle || String(Math.random()),
    language: item.LanguageName || '',
    languageCode: item.SubLanguageID || '',
    release: item.MovieReleaseName || '',
    downloadCount: parseInt(item.SubDownloadsCnt) || 0,
    hearingImpaired: item.SubHearingImpaired === '1',
    fps: item.MovieFPS || '',
    rating: item.SubRating || '0.0',
    fileName: item.SubFileName || 'subtitle.srt',
    downloadUrl: item.SubDownloadLink || '',
    pageUrl: item.SubtitlesLink || '',
    movieTitle: item.MovieName || query,
    movieYear: item.MovieYear || '',
    format: item.SubFormat || item.InfoFormat || 'srt',
  }));

  // Sort by download count (most popular first)
  results.sort((a, b) => b.downloadCount - a.downloadCount);

  return {
    results,
    totalCount: results.length,
  };
}

// ── Download Subtitle ──

export async function downloadSubtitle(downloadUrl: string): Promise<string> {
  if (!downloadUrl) throw new Error('No download URL provided');

  const response = await fetchViaCorsProxy(downloadUrl);
  const buffer = await response.arrayBuffer();
  const bytes = new Uint8Array(buffer);

  // The download is typically gzipped — check magic bytes
  if (bytes[0] === 0x1f && bytes[1] === 0x8b) {
    // Gzip compressed
    return decompressGzip(bytes);
  }

  // Plain text (SRT/VTT)
  return new TextDecoder('utf-8').decode(bytes);
}

// ── Gzip Decompression ──

async function decompressGzip(compressed: Uint8Array): Promise<string> {
  // Use the DecompressionStream API (modern browsers)
  if (typeof DecompressionStream !== 'undefined') {
    const ds = new DecompressionStream('gzip');
    const writer = ds.writable.getWriter();
    writer.write(compressed);
    writer.close();

    const reader = ds.readable.getReader();
    const chunks: Uint8Array[] = [];
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      chunks.push(value);
    }

    const totalLength = chunks.reduce((sum, c) => sum + c.length, 0);
    const result = new Uint8Array(totalLength);
    let offset = 0;
    for (const chunk of chunks) {
      result.set(chunk, offset);
      offset += chunk.length;
    }
    return new TextDecoder('utf-8').decode(result);
  }

  // Fallback: try reading as-is (might be plain text disguised with gz extension)
  return new TextDecoder('utf-8').decode(compressed);
}
