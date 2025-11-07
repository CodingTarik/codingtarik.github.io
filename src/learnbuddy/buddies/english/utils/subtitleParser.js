/**
 * Subtitle Parser for SRT and VTT files
 */

/**
 * Parse SRT (SubRip) format
 */
export function parseSRT(content) {
  const subtitles = [];
  const blocks = content.trim().split(/\n\s*\n/);

  for (const block of blocks) {
    const lines = block.trim().split('\n');
    if (lines.length < 3) continue;

    // Line 0: Index (skip)
    // Line 1: Timestamps
    const timeMatch = lines[1].match(/(\d{2}:\d{2}:\d{2},\d{3})\s*-->\s*(\d{2}:\d{2}:\d{2},\d{3})/);
    if (!timeMatch) continue;

    const startTime = srtTimeToSeconds(timeMatch[1]);
    const endTime = srtTimeToSeconds(timeMatch[2]);

    // Lines 2+: Text
    const text = lines.slice(2).join('\n').trim();

    subtitles.push({
      id: subtitles.length,
      startTime,
      endTime,
      text
    });
  }

  return subtitles;
}

/**
 * Parse VTT (WebVTT) format
 */
export function parseVTT(content) {
  const subtitles = [];
  const lines = content.split('\n');
  
  let currentSubtitle = null;
  let textLines = [];

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();

    // Skip WEBVTT header and empty lines
    if (line.startsWith('WEBVTT') || line === '' || line.startsWith('NOTE')) {
      continue;
    }

    // Check for timestamp line
    const timeMatch = line.match(/(\d{2}:\d{2}:\d{2}\.\d{3})\s*-->\s*(\d{2}:\d{2}:\d{2}\.\d{3})/);
    
    if (timeMatch) {
      // Save previous subtitle if exists
      if (currentSubtitle && textLines.length > 0) {
        currentSubtitle.text = textLines.join('\n').trim();
        subtitles.push(currentSubtitle);
        textLines = [];
      }

      // Start new subtitle
      currentSubtitle = {
        id: subtitles.length,
        startTime: vttTimeToSeconds(timeMatch[1]),
        endTime: vttTimeToSeconds(timeMatch[2]),
        text: ''
      };
    } else if (currentSubtitle && line !== '') {
      // Add text line
      textLines.push(line);
    }
  }

  // Add last subtitle
  if (currentSubtitle && textLines.length > 0) {
    currentSubtitle.text = textLines.join('\n').trim();
    subtitles.push(currentSubtitle);
  }

  return subtitles;
}

/**
 * Convert SRT time format to seconds
 * Format: 00:00:20,000
 */
function srtTimeToSeconds(timeString) {
  const [time, ms] = timeString.split(',');
  const [hours, minutes, seconds] = time.split(':').map(Number);
  return hours * 3600 + minutes * 60 + seconds + Number(ms) / 1000;
}

/**
 * Convert VTT time format to seconds
 * Format: 00:00:20.000
 */
function vttTimeToSeconds(timeString) {
  const [time, ms] = timeString.split('.');
  const [hours, minutes, seconds] = time.split(':').map(Number);
  return hours * 3600 + minutes * 60 + seconds + Number(ms) / 1000;
}

/**
 * Auto-detect subtitle format and parse
 */
export function parseSubtitle(content) {
  const trimmed = content.trim();
  
  if (trimmed.startsWith('WEBVTT')) {
    return parseVTT(content);
  } else if (trimmed.match(/^\d+\s*\n/)) {
    return parseSRT(content);
  }
  
  throw new Error('Unknown subtitle format. Please use SRT or VTT files.');
}

/**
 * Convert seconds to display time
 */
export function formatTime(seconds) {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const secs = Math.floor(seconds % 60);
  
  if (hours > 0) {
    return `${hours}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  }
  return `${minutes}:${secs.toString().padStart(2, '0')}`;
}

/**
 * Find current subtitle at given time
 */
export function findCurrentSubtitle(subtitles, currentTime) {
  return subtitles.find(sub => 
    currentTime >= sub.startTime && currentTime <= sub.endTime
  );
}

/**
 * Merge two subtitle tracks (for dual display)
 */
export function mergeSubtitles(primarySubs, secondarySubs) {
  const merged = [];
  
  for (const primarySub of primarySubs) {
    // Find corresponding secondary subtitle (by time overlap)
    const secondarySub = secondarySubs.find(sub =>
      (sub.startTime <= primarySub.startTime && sub.endTime >= primarySub.startTime) ||
      (sub.startTime <= primarySub.endTime && sub.endTime >= primarySub.endTime) ||
      (sub.startTime >= primarySub.startTime && sub.endTime <= primarySub.endTime)
    );
    
    merged.push({
      id: primarySub.id,
      startTime: primarySub.startTime,
      endTime: primarySub.endTime,
      primaryText: primarySub.text,
      secondaryText: secondarySub ? secondarySub.text : ''
    });
  }
  
  return merged;
}

