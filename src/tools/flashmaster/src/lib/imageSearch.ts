/**
 * Image Search Module
 * Uses free APIs (Wikimedia Commons, Wikipedia) - no API key needed.
 * Falls back gracefully if requests fail.
 */

export interface SearchResult {
  url: string;
  thumb: string;
  title: string;
  source: 'wikimedia' | 'wikipedia';
}

/**
 * Search for images using Wikimedia Commons.
 * Returns thumbnail URLs suitable for flashcards.
 */
async function searchWikimediaCommons(query: string, limit: number = 6): Promise<SearchResult[]> {
  const params = new URLSearchParams({
    action: 'query',
    generator: 'search',
    gsrsearch: query,
    gsrnamespace: '6', // File namespace
    gsrlimit: String(limit),
    prop: 'imageinfo',
    iiprop: 'url|extmetadata',
    iiurlwidth: '400',
    format: 'json',
    origin: '*',
  });

  const resp = await fetch(`https://commons.wikimedia.org/w/api.php?${params}`);
  if (!resp.ok) return [];
  const data = await resp.json();
  if (!data.query?.pages) return [];

  const results: SearchResult[] = [];
  for (const page of Object.values(data.query.pages) as any[]) {
    const info = page.imageinfo?.[0];
    if (!info) continue;
    // Skip SVGs & tiny images
    if (info.url?.endsWith('.svg')) continue;

    const thumb = info.thumburl || info.url;
    if (thumb) {
      results.push({
        url: info.url,
        thumb,
        title: page.title?.replace('File:', '') || query,
        source: 'wikimedia',
      });
    }
  }
  return results;
}

/**
 * Search Wikipedia for a term and get its page image/thumbnail.
 */
async function searchWikipedia(query: string, lang: string = 'en', limit: number = 4): Promise<SearchResult[]> {
  const params = new URLSearchParams({
    action: 'query',
    generator: 'search',
    gsrsearch: query,
    gsrlimit: String(limit),
    prop: 'pageimages',
    piprop: 'thumbnail',
    pithumbsize: '400',
    format: 'json',
    origin: '*',
  });

  const resp = await fetch(`https://${lang}.wikipedia.org/w/api.php?${params}`);
  if (!resp.ok) return [];
  const data = await resp.json();
  if (!data.query?.pages) return [];

  const results: SearchResult[] = [];
  for (const page of Object.values(data.query.pages) as any[]) {
    const thumb = page.thumbnail?.source;
    if (thumb) {
      results.push({
        url: thumb,
        thumb,
        title: page.title || query,
        source: 'wikipedia',
      });
    }
  }
  return results;
}

/**
 * Search for images across multiple sources.
 * Tries Wikimedia Commons first, then Wikipedia in multiple languages.
 */
export async function searchImages(query: string): Promise<SearchResult[]> {
  if (!query.trim()) return [];

  const cleaned = query
    .replace(/[#*_>\[\]`<>/]/g, '')
    .replace(/\s+/g, ' ')
    .trim();

  // Run searches in parallel
  const [wikimedia, wikiEn, wikiDe] = await Promise.allSettled([
    searchWikimediaCommons(cleaned, 6),
    searchWikipedia(cleaned, 'en', 4),
    searchWikipedia(cleaned, 'de', 3),
  ]);

  const results: SearchResult[] = [];
  const seen = new Set<string>();

  // Collect results, deduplicate by thumb URL
  for (const settled of [wikiEn, wikimedia, wikiDe]) {
    if (settled.status === 'fulfilled') {
      for (const r of settled.value) {
        if (!seen.has(r.thumb)) {
          seen.add(r.thumb);
          results.push(r);
        }
      }
    }
  }

  return results;
}
