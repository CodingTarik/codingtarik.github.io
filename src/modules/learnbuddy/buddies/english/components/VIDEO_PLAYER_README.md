# 🎬 Video Player with Dual Subtitles

## Overview

The **Listening** tab features an advanced video player designed specifically for language learning. Watch videos with **dual subtitles** (English + Translation) displayed simultaneously, and save your favorite sentences for later review.

## Features

### 🎥 Video Support
- Upload MP4 and MKV video files
- Videos stored locally using IndexedDB (no file size limits like localStorage)
- Full playback controls (play/pause, seek, volume, fullscreen)

### 📝 Dual Subtitle Display
- Display two subtitle tracks simultaneously:
  - **Primary subtitle** (English) - shown at the bottom
  - **Secondary subtitle** (Translation) - shown below the English subtitle
- Supports SRT and VTT subtitle formats
- Automatic subtitle synchronization with video playback
- Subtitles overlay on the video with semi-transparent backgrounds

### ⭐ Favorite Sentences
- Click the star button during playback to save the current sentence
- Favorites sidebar shows all saved sentences with translations
- Click any favorite to jump to that moment in the video
- Copy sentences to clipboard (like the PDF reader)
- Delete favorites you no longer need

### 📚 Video Library
- Grid view of all uploaded videos
- Easy access to your entire video collection
- Delete videos you no longer need

## How to Use

### Step 1: Get Subtitle Files

#### Option A: Download from OpenSubtitles
1. Go to [OpenSubtitles.org](https://www.opensubtitles.org/)
2. Search for your movie/show
3. Download **two subtitle files**:
   - English (`.srt` or `.vtt`)
   - Your native language (e.g., German `.srt` or `.vtt`)

#### Option B: Extract from MKV files
If your MKV file already contains subtitles:

```bash
# Install MKVToolNix
brew install mkvtoolnix  # macOS
# or: sudo apt install mkvtoolnix  # Ubuntu/Debian

# List available subtitles
mkvmerge -i your_video.mkv

# Extract English subtitle (track 2 in this example)
mkvextract tracks your_video.mkv 2:english.srt

# Extract German subtitle (track 3 in this example)
mkvextract tracks your_video.mkv 3:german.srt
```

#### Option C: Generate subtitles with AI
Use [Whisper](https://github.com/openai/whisper) to auto-generate English subtitles:

```bash
# Install Whisper
pip install openai-whisper

# Generate English subtitles
whisper your_video.mp4 --language en --model medium --output_format srt

# Then translate to your language using:
# - Google Translate (copy/paste)
# - DeepL
# - ChatGPT
```

### Step 2: Upload Video

1. Go to **English Buddy** → **Listening** tab
2. Click the upload section at the top
3. Select your files:
   - **Video File**: Choose your MP4 or MKV file
   - **English Subtitle**: Upload the English .srt or .vtt file
   - **Translation**: Upload your native language subtitle file
4. Click **Upload Video**
5. Wait for the upload to complete (may take a moment for large files)

### Step 3: Watch and Learn

1. Click on any video in the library to start watching
2. Both subtitles will appear at the bottom of the video
3. **Save favorites**:
   - When you see an interesting sentence, click the ⭐ star button
   - The sentence (with translation) is saved to the sidebar
4. **Review favorites**:
   - Browse your saved sentences in the left sidebar
   - Click any sentence to jump to that moment
   - Click the copy icon 📋 to copy text to clipboard

### Step 4: Manage Your Collection

- **Delete videos**: Click the trash icon on any video card
- **Favorites**: Favorites are saved per video and persist between sessions
- **Storage**: Videos are stored locally using IndexedDB (efficient for large files)

## Tips for Best Results

### Subtitle Timing
- Ensure your subtitle files match the video version
- If subtitles are out of sync, you may need to find better subtitle files
- Some subtitle editors can help you adjust timing:
  - [Subtitle Edit](https://www.nikse.dk/subtitleedit/) (Windows)
  - [Aegisub](https://aegisub.org/) (Cross-platform)
  - [Jubler](https://www.jubler.org/) (Cross-platform)

### Subtitle Quality
- Look for subtitles with good ratings on OpenSubtitles
- "Hearing Impaired" (HI) subtitles include sound descriptions - avoid these if you want cleaner text
- Check that both subtitle files are for the same version of the content

### Learning Strategy
1. **First watch**: Watch with both subtitles visible
2. **Save new vocabulary**: Star sentences with unknown words
3. **Review**: Go through favorites and practice the sentences
4. **Second watch**: Try watching with only English subtitles
5. **Challenge**: Eventually try without subtitles

### Popular Sources for Learning Content
- **YouTube**: Download videos with subtitles using `youtube-dl` or `yt-dlp`
- **Netflix/Disney+**: Screen record with OBS (ensure you have legal rights)
- **Language learning channels**: Many provide free videos with subtitles
- **Ted Talks**: Available with subtitles in many languages

## Supported Formats

### Video Formats
- ✅ MP4 (H.264, H.265)
- ✅ MKV (Matroska)
- ⚠️ AVI (may work but not officially supported)
- ❌ FLV (not supported)

### Subtitle Formats
- ✅ SRT (SubRip) - most common
- ✅ VTT (WebVTT) - web standard
- ❌ ASS/SSA (not supported)
- ❌ SUB (not supported)

## Troubleshooting

### Video won't play
- Try converting to MP4 with H.264 codec using [HandBrake](https://handbrake.fr/)
- Check that the video file is not corrupted

### Subtitles not appearing
- Verify the subtitle files are valid SRT or VTT format
- Open the subtitle file in a text editor to check format
- Try re-uploading the subtitle files

### Subtitles out of sync
- Find better subtitle files that match your video version
- Use a subtitle editor to adjust timing before uploading

### Storage running low
- Delete videos you no longer need from the library
- Each video stores the full file locally in IndexedDB
- Check browser storage settings if you run into limits

## Privacy & Storage

- **All data stays local**: Videos and favorites are stored in your browser using IndexedDB
- **No cloud uploads**: Nothing is sent to external servers
- **Clear data**: You can delete all data by:
  - Clearing browser data for the site
  - Opening DevTools → Application → IndexedDB → Delete database

## Technical Details

- **Storage**: IndexedDB (handles large video files efficiently)
- **Parser**: Custom SRT/VTT parser with millisecond precision
- **Sync algorithm**: Time-based subtitle matching with overlap detection
- **Format support**: Auto-detects SRT vs VTT based on file structure

---

**Enjoy learning English through immersive video content! 🎥📚**

