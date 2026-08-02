# 🔑 OpenSubtitles API Setup Guide

## What is OpenSubtitles?

OpenSubtitles.com is the world's largest subtitle database with millions of subtitles in 75+ languages. The VideoPlayer now integrates with their API to automatically find and download subtitles for your videos!

## Features

### 🎯 Automatic Hash-Based Search
- Upload a video → System automatically searches for exact subtitle matches
- Uses file hash matching (most accurate method)
- Finds subtitles even if the file was renamed

### 🔍 Manual Search
- Search by movie/show name
- Filter by language (English, German, etc.)
- See ratings, download counts, and more

### 🎬 Embedded Subtitle Detection
- Automatically detects subtitles embedded in MKV/MP4 files
- One-click extraction (where browser permits)
- Fallback to manual upload or OpenSubtitles if extraction fails

## Setup Instructions

### Step 1: Create OpenSubtitles Account

1. Go to [OpenSubtitles.com](https://www.opensubtitles.com/en/users/sign_up)
2. Sign up for a **free account**
3. Verify your email address

### Step 2: Create API Consumer

1. Log in to your OpenSubtitles account
2. Go to [API Consumers Page](https://www.opensubtitles.com/en/consumers)
3. Click **"Create New Consumer"**
4. Fill in the details:
   - **Name**: `LearnBuddy VideoPlayer` (or any name you like)
   - **Description**: `Personal language learning video player`
   - **Type**: Select `Personal/Educational`
5. Click **"Create"**
6. **Copy your API Key** (looks like: `abc123xyz789...`)

### Step 3: Add API Key to Code

1. Open the file:
   ```
   src/learnbuddy/buddies/english/utils/openSubtitlesAPI.js
   ```

2. Find line 6:
   ```javascript
   const API_KEY = 'YOUR_API_KEY_HERE';
   ```

3. Replace it with your actual API key:
   ```javascript
   const API_KEY = 'your-actual-api-key-from-step-2';
   ```

4. Save the file

5. Restart your development server:
   ```bash
   npm run dev
   ```

### Step 4: Test It!

1. Go to **English Buddy** → **Listening** tab
2. Upload a video file
3. Click **"Search OpenSubtitles"** for either English or Translation subtitle
4. You should see automatic search results! 🎉

## API Limits (Free Tier)

The free tier includes:

- ✅ **200 downloads per day** (more than enough for learning!)
- ✅ **Unlimited searches**
- ✅ **Access to all subtitles**
- ✅ **No credit card required**

## How It Works

### Automatic Search (Hash-Based)

When you upload a video and click "Search OpenSubtitles":

1. System calculates a unique hash of your video file
2. Sends hash to OpenSubtitles API
3. Returns exact matches for your specific video version
4. Shows results with language, format, ratings, download count

### Manual Search (Query-Based)

If automatic search doesn't find results:

1. Enter movie/show name (e.g., "The Shawshank Redemption")
2. System searches OpenSubtitles database
3. Returns all matching subtitles
4. Filter by language, rating, downloads

### Embedded Subtitle Detection

For MKV/MP4 files with embedded subtitles:

1. System detects available subtitle tracks
2. Shows track language and label
3. Click button to extract and use
4. If extraction fails (browser limitations), use search or manual upload

## Troubleshooting

### "OpenSubtitles API key not configured"

❌ **Problem**: API key not set or invalid

✅ **Solution**: Follow Steps 1-3 above to get and set your API key

### "No automatic matches. Try searching by name."

❌ **Problem**: Hash-based search didn't find results

✅ **Solution**: 
- Use manual search by typing the movie/show name
- Try different search terms (original title, year, etc.)

### "Search failed" or "Download failed"

❌ **Problem**: Network error or API limit reached

✅ **Solution**:
- Check your internet connection
- Verify API key is correct
- Check if you've reached daily download limit (200/day)
- Wait a few minutes and try again

### "Could not extract subtitle" (Embedded)

❌ **Problem**: Browser security restrictions prevent extraction

✅ **Solution**:
- Use "Search OpenSubtitles" button instead
- Or manually download subtitles and upload them

## Privacy & Security

### Is my API key safe?

⚠️ **Important**: Your API key is stored in the source code. For a production deployment, you should:

1. Use environment variables
2. Add API key to `.env.local`:
   ```
   VITE_OPENSUBTITLES_API_KEY=your-key-here
   ```
3. Update `openSubtitlesAPI.js`:
   ```javascript
   const API_KEY = import.meta.env.VITE_OPENSUBTITLES_API_KEY;
   ```
4. Add `.env.local` to `.gitignore`

### What data is sent to OpenSubtitles?

When using the API:
- ✅ Video file hash (for search)
- ✅ Search queries
- ❌ **NOT** the actual video file
- ❌ **NOT** any personal data

All video files stay on your device!

## Alternative: Manual Subtitle Download

If you prefer not to use the API:

1. Go to [OpenSubtitles.com](https://www.opensubtitles.com/)
2. Search for your movie/show
3. Download subtitle files manually
4. Use the manual upload button in the VideoPlayer

## Tips for Best Results

### For Automatic Search
- Use well-known movies/shows (more subtitle options)
- Keep original filename (helps with hash matching)
- Try different releases if no results found

### For Manual Search
- Use original title in English
- Include year for disambiguation
- Check ratings and download counts
- Avoid "Hearing Impaired" (HI) versions unless needed

### For Embedded Subtitles
- MKV files most likely to have embedded subtitles
- Check subtitle language labels carefully
- Try extraction first (fastest), fallback to search if needed

## Additional Resources

- [OpenSubtitles API Docs](https://opensubtitles.stoplight.io/docs/opensubtitles-api)
- [OpenSubtitles Forum](https://forum.opensubtitles.org/)
- [Subtitle Edit Tool](https://www.nikse.dk/subtitleedit/) - For editing/fixing subtitles

## Need Help?

If you're having trouble:

1. Check browser console (F12) for error messages
2. Verify API key is correctly set
3. Try manual subtitle upload as alternative
4. Check OpenSubtitles status page for outages

---

**Happy Learning! 🎬📚**

