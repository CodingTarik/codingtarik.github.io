/**
 * OpenSubtitles API Integration
 * API Documentation: https://opensubtitles.stoplight.io/docs/opensubtitles-api
 */

const OPENSUBTITLES_API_BASE = 'https://api.opensubtitles.com/api/v1';
const API_KEY = 'YOUR_API_KEY_HERE'; // Users need to get their own free API key

/**
 * Calculate OpenSubtitles hash for a file
 * This hash is used to find exact subtitle matches
 */
export async function calculateOpenSubtitlesHash(file) {
  const chunkSize = 65536; // 64KB
  const fileSize = file.size;

  if (fileSize < chunkSize * 2) {
    throw new Error('File too small to calculate hash');
  }

  // Read first and last 64KB chunks
  const firstChunk = await file.slice(0, chunkSize).arrayBuffer();
  const lastChunk = await file.slice(fileSize - chunkSize, fileSize).arrayBuffer();

  // Convert to 64-bit integers and sum
  let hash = BigInt(fileSize);

  const addChunk = (buffer) => {
    const view = new DataView(buffer);
    for (let i = 0; i < buffer.byteLength; i += 8) {
      const value = view.getBigUint64(i, true); // little-endian
      hash += value;
      hash = hash & BigInt('0xFFFFFFFFFFFFFFFF'); // Keep only 64 bits
    }
  };

  addChunk(firstChunk);
  addChunk(lastChunk);

  return hash.toString(16).padStart(16, '0');
}

/**
 * Search for subtitles by video file hash (most accurate)
 */
export async function searchSubtitlesByHash(videoFile) {
  try {
    const movieHash = await calculateOpenSubtitlesHash(videoFile);
    
    const params = new URLSearchParams({
      moviehash: movieHash,
    });

    const response = await fetch(`${OPENSUBTITLES_API_BASE}/subtitles?${params}`, {
      headers: {
        'Api-Key': API_KEY,
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`API error: ${response.status}`);
    }

    const data = await response.json();
    return data.data || [];
  } catch (error) {
    console.error('Error searching by hash:', error);
    return [];
  }
}

/**
 * Search for subtitles by query (movie/show name)
 */
export async function searchSubtitlesByQuery(query, languages = ['en', 'de']) {
  try {
    const params = new URLSearchParams({
      query: query,
      languages: languages.join(','),
    });

    const response = await fetch(`${OPENSUBTITLES_API_BASE}/subtitles?${params}`, {
      headers: {
        'Api-Key': API_KEY,
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`API error: ${response.status}`);
    }

    const data = await response.json();
    return data.data || [];
  } catch (error) {
    console.error('Error searching by query:', error);
    return [];
  }
}

/**
 * Download subtitle file
 */
export async function downloadSubtitle(fileId) {
  try {
    const response = await fetch(`${OPENSUBTITLES_API_BASE}/download`, {
      method: 'POST',
      headers: {
        'Api-Key': API_KEY,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ file_id: fileId }),
    });

    if (!response.ok) {
      throw new Error(`Download error: ${response.status}`);
    }

    const data = await response.json();
    
    // Download the actual subtitle file
    const subtitleResponse = await fetch(data.link);
    const subtitleText = await subtitleResponse.text();
    
    return subtitleText;
  } catch (error) {
    console.error('Error downloading subtitle:', error);
    throw error;
  }
}

/**
 * Format subtitle search results for display
 */
export function formatSubtitleResults(results) {
  return results.map(result => ({
    id: result.attributes.files[0]?.file_id,
    language: result.attributes.language,
    name: result.attributes.release || result.attributes.feature_details?.movie_name || 'Unknown',
    movieName: result.attributes.feature_details?.movie_name,
    year: result.attributes.feature_details?.year,
    downloads: result.attributes.download_count,
    rating: result.attributes.ratings,
    uploader: result.attributes.uploader?.name,
    format: result.attributes.files[0]?.file_name?.split('.').pop()?.toUpperCase(),
    hearing_impaired: result.attributes.hearing_impaired,
    foreign_parts_only: result.attributes.foreign_parts_only,
  }));
}

/**
 * Check if API key is configured
 */
export function isAPIKeyConfigured() {
  return API_KEY !== 'YOUR_API_KEY_HERE';
}

/**
 * Get API setup instructions
 */
export function getAPISetupInstructions() {
  return {
    title: 'OpenSubtitles API Setup',
    steps: [
      '1. Go to https://www.opensubtitles.com/en/users/sign_up',
      '2. Create a free account',
      '3. Go to https://www.opensubtitles.com/en/consumers',
      '4. Create a new "Consumer" app',
      '5. Copy your API key',
      '6. Paste it in: src/learnbuddy/buddies/english/utils/openSubtitlesAPI.js',
      '   Replace: const API_KEY = "YOUR_API_KEY_HERE";',
      '   With: const API_KEY = "your-actual-api-key";',
    ],
    note: 'Free tier allows 200 downloads per day, which is more than enough for learning!',
  };
}

/**
 * Generate OpenSubtitles.org search URL for manual search
 * Opens in a new tab so user can manually download subtitles
 */
export function generateManualSearchURL(videoFileName, language = 'en') {
  // Extract movie name from filename (remove extension and common patterns)
  let searchQuery = videoFileName
    .replace(/\.(mp4|mkv|avi|mov|m4v|webm)$/i, '') // Remove extension
    .replace(/[._-]/g, ' ') // Replace separators with spaces
    .replace(/\b(1080p|720p|480p|2160p|4k|bluray|brrip|webrip|web-dl|hdtv|x264|x265|hevc|aac|ac3|5.1)\b/gi, '') // Remove quality tags
    .replace(/\b\d{4}\b/g, '') // Remove years (but keep in search if you want)
    .trim();
  
  const encodedQuery = encodeURIComponent(searchQuery);
  const langCode = language === 'de' ? 'de' : 'en';
  
  return `https://www.opensubtitles.org/en/search/sublanguageid-${langCode}/moviename-${encodedQuery}`;
}

/**
 * Open OpenSubtitles.org in new tab for manual download
 */
export function openManualSearch(videoFileName, language = 'en') {
  const url = generateManualSearchURL(videoFileName, language);
  window.open(url, '_blank', 'noopener,noreferrer');
}

/**
 * Alternative subtitle sources (no API required)
 */
export function getAlternativeSubtitleSources(videoFileName) {
  const cleanName = videoFileName
    .replace(/\.(mp4|mkv|avi|mov|m4v|webm)$/i, '')
    .replace(/[._-]/g, ' ')
    .trim();
  
  const encodedName = encodeURIComponent(cleanName);
  
  return [
    {
      name: 'OpenSubtitles.org',
      url: `https://www.opensubtitles.org/en/search/moviename-${encodedName}`,
      description: 'Largest subtitle database (75+ languages)',
      recommended: true
    },
    {
      name: 'Subscene',
      url: `https://subscene.com/subtitles/searchbytitle?query=${encodedName}`,
      description: 'High-quality subtitles, English focused'
    },
    {
      name: 'YIFY Subtitles',
      url: `https://yifysubtitles.ch/search?q=${encodedName}`,
      description: 'Best for movies (YIFY releases)'
    },
    {
      name: 'Podnapisi',
      url: `https://www.podnapisi.net/en/subtitles/search/?keywords=${encodedName}`,
      description: 'European subtitles, many languages'
    }
  ];
}

