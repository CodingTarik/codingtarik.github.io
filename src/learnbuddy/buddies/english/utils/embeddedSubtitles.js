/**
 * Embedded Subtitle Detection and Extraction
 * Detects subtitle tracks embedded in video files
 */

/**
 * Detect embedded subtitle tracks in a video file
 * Uses the HTML5 video element to detect available text tracks
 */
export async function detectEmbeddedSubtitles(videoFile) {
  return new Promise((resolve) => {
    // Create a temporary video element
    const video = document.createElement('video');
    const objectURL = URL.createObjectURL(videoFile);
    
    video.src = objectURL;
    video.preload = 'metadata';

    const tracks = [];
    let loadTimeout;

    const cleanup = () => {
      clearTimeout(loadTimeout);
      URL.revokeObjectURL(objectURL);
      video.remove();
    };

    video.onloadedmetadata = () => {
      // Check for text tracks
      const textTracks = video.textTracks;
      
      for (let i = 0; i < textTracks.length; i++) {
        const track = textTracks[i];
        tracks.push({
          index: i,
          kind: track.kind,
          label: track.label || `Track ${i + 1}`,
          language: track.language || 'unknown',
          mode: track.mode,
        });
      }

      cleanup();
      resolve(tracks);
    };

    video.onerror = () => {
      cleanup();
      resolve([]); // Return empty array on error
    };

    // Timeout after 5 seconds
    loadTimeout = setTimeout(() => {
      cleanup();
      resolve([]);
    }, 5000);

    video.load();
  });
}

/**
 * Extract subtitle content from embedded track
 * Note: Browser restrictions prevent direct extraction in most cases
 * This function attempts to extract, but may not work for all formats
 */
export async function extractEmbeddedSubtitle(videoFile, trackIndex) {
  return new Promise((resolve, reject) => {
    const video = document.createElement('video');
    const objectURL = URL.createObjectURL(videoFile);
    
    video.src = objectURL;
    video.preload = 'metadata';

    const cleanup = () => {
      URL.revokeObjectURL(objectURL);
      video.remove();
    };

    video.onloadedmetadata = () => {
      const textTracks = video.textTracks;
      
      if (trackIndex >= textTracks.length) {
        cleanup();
        reject(new Error('Track index out of range'));
        return;
      }

      const track = textTracks[trackIndex];
      track.mode = 'hidden'; // Enable track to load cues

      // Collect cues when loaded
      const cues = [];
      
      track.oncuechange = () => {
        if (track.cues) {
          for (let i = 0; i < track.cues.length; i++) {
            const cue = track.cues[i];
            cues.push({
              startTime: cue.startTime,
              endTime: cue.endTime,
              text: cue.text,
            });
          }
        }
      };

      // Wait a bit for cues to load
      setTimeout(() => {
        cleanup();
        
        if (cues.length === 0) {
          // Try to get all cues at once
          if (track.cues && track.cues.length > 0) {
            for (let i = 0; i < track.cues.length; i++) {
              const cue = track.cues[i];
              cues.push({
                startTime: cue.startTime,
                endTime: cue.endTime,
                text: cue.text,
              });
            }
          }
        }

        resolve(cues);
      }, 2000);
    };

    video.onerror = () => {
      cleanup();
      reject(new Error('Failed to load video'));
    };

    video.load();
  });
}

/**
 * Convert extracted cues to SRT format
 */
export function cuesToSRT(cues) {
  let srt = '';
  
  cues.forEach((cue, index) => {
    const startTime = formatSRTTime(cue.startTime);
    const endTime = formatSRTTime(cue.endTime);
    
    srt += `${index + 1}\n`;
    srt += `${startTime} --> ${endTime}\n`;
    srt += `${cue.text}\n\n`;
  });
  
  return srt;
}

/**
 * Format seconds to SRT time format (00:00:00,000)
 */
function formatSRTTime(seconds) {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const secs = Math.floor(seconds % 60);
  const ms = Math.floor((seconds % 1) * 1000);
  
  return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')},${ms.toString().padStart(3, '0')}`;
}

/**
 * Check if a video file might contain embedded subtitles
 * Based on file extension (MKV, MP4 containers can have them)
 */
export function mightHaveEmbeddedSubtitles(fileName) {
  const ext = fileName.toLowerCase().split('.').pop();
  return ['mkv', 'mp4', 'm4v', 'mov', 'webm'].includes(ext);
}

/**
 * Get language name from language code
 */
export function getLanguageName(langCode) {
  const languages = {
    'en': 'English',
    'de': 'Deutsch',
    'es': 'Español',
    'fr': 'Français',
    'it': 'Italiano',
    'pt': 'Português',
    'ru': 'Русский',
    'zh': '中文',
    'ja': '日本語',
    'ko': '한국어',
    'ar': 'العربية',
    'tr': 'Türkçe',
    'nl': 'Nederlands',
    'pl': 'Polski',
    'sv': 'Svenska',
    'da': 'Dansk',
    'no': 'Norsk',
    'fi': 'Suomi',
    'cs': 'Čeština',
    'hu': 'Magyar',
    'ro': 'Română',
    'und': 'Unknown',
    'unknown': 'Unknown',
  };
  
  return languages[langCode] || langCode.toUpperCase();
}

