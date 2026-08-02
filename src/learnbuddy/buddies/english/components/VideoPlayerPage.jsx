import React, { useState, useEffect, useRef } from 'react';
import { Upload, Play, Pause, Volume2, VolumeX, Maximize, Star, Copy, Trash2, ArrowLeft, FileVideo, Subtitles, Check, Search, Download, Film, Globe, X, AlertCircle, ExternalLink, Plus, Film as FilmIcon } from 'lucide-react';
import toast from 'react-hot-toast';
import { useLanguage } from '../../../context/LanguageContext';
import { parseSubtitle, findCurrentSubtitle, formatTime, mergeSubtitles } from '../utils/subtitleParser';
import { getDecks } from '../utils/deckStorage';
import { addCardLocally, getCachedCards, setCachedCards } from '../utils/vocabularyCache';
import { 
  saveVideo, 
  getAllVideos, 
  getVideo, 
  deleteVideo, 
  saveFavorite, 
  getFavorites, 
  deleteFavorite,
  isFavorited 
} from '../utils/videoStorage';
import { 
  searchSubtitlesByHash, 
  searchSubtitlesByQuery, 
  downloadSubtitle, 
  formatSubtitleResults,
  isAPIKeyConfigured,
  getAPISetupInstructions,
  openManualSearch,
  getAlternativeSubtitleSources
} from '../utils/openSubtitlesAPI';
import { 
  detectEmbeddedSubtitles, 
  extractEmbeddedSubtitle, 
  cuesToSRT, 
  mightHaveEmbeddedSubtitles,
  getLanguageName
} from '../utils/embeddedSubtitles';

function VideoPlayerPage() {
  const { language } = useLanguage();
  const [view, setView] = useState('library'); // 'library' or 'player'
  const [videos, setVideos] = useState([]);
  const [currentVideo, setCurrentVideo] = useState(null);
  const [loading, setLoading] = useState(false);

  // Video upload state
  const [uploadingVideo, setUploadingVideo] = useState(null);
  const [uploadingPrimarySub, setUploadingPrimarySub] = useState(null);
  const [uploadingSecondarySub, setUploadingSecondarySub] = useState(null);
  
  // Embedded subtitles
  const [embeddedTracks, setEmbeddedTracks] = useState([]);
  const [selectedPrimaryTrack, setSelectedPrimaryTrack] = useState(null);
  const [selectedSecondaryTrack, setSelectedSecondaryTrack] = useState(null);
  const [detectingEmbedded, setDetectingEmbedded] = useState(false);
  
  // OpenSubtitles search
  const [showSubtitleSearch, setShowSubtitleSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [searching, setSearching] = useState(false);
  const [searchingFor, setSearchingFor] = useState(null); // 'primary' or 'secondary'
  const [showManualSources, setShowManualSources] = useState(false);

  // Player state
  const videoRef = useRef(null);
  const videoContainerRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);
  const [isMuted, setIsMuted] = useState(false);

  // Subtitle state
  const [primarySubtitles, setPrimarySubtitles] = useState([]);
  const [secondarySubtitles, setSecondarySubtitles] = useState([]);
  const [mergedSubtitles, setMergedSubtitles] = useState([]);
  const [currentSubtitle, setCurrentSubtitle] = useState(null);

  // Favorites
  const [favorites, setFavorites] = useState([]);
  const [favoritedIds, setFavoritedIds] = useState(new Set());

  // Deck management
  const [decks, setDecks] = useState([]);
  const [showDeckSelector, setShowDeckSelector] = useState(null); // favorite id for which to show selector
  const [addedToDecks, setAddedToDecks] = useState(new Map()); // Map of favorite id -> array of deck ids
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isCinemaMode, setIsCinemaMode] = useState(false);

  // Subtitle position (draggable)
  const [subtitlePosition, setSubtitlePosition] = useState(() => {
    const saved = localStorage.getItem('video_subtitle_position');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        return { x: 0, y: 0, bottom: 40 };
      }
    }
    return { x: 0, y: 0, bottom: 40 };
  });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const subtitleRef = useRef(null);

  useEffect(() => {
    loadVideos();
    loadDecks();
    
    // Refresh decks periodically (in case decks are added in another tab)
    const interval = setInterval(loadDecks, 2000);
    
    // Listen for fullscreen changes
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    
    return () => {
      clearInterval(interval);
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
    };
  }, []);

  // Toggle cinema mode - hide/show header and bottom navigation directly
  useEffect(() => {
    const hideElements = () => {
      // Find header (GlobalHeader) - it's a div with fixed top-0
      const header = Array.from(document.querySelectorAll('div')).find(
        el => el.classList.contains('fixed') && 
              el.classList.contains('top-0') && 
              el.classList.contains('left-0') &&
              el.classList.contains('right-0') &&
              (el.classList.contains('bg-white') || el.classList.contains('bg-stone-900'))
      );
      
      // Find bottom navigation - it's a nav with fixed bottom-0
      const bottomNav = Array.from(document.querySelectorAll('nav')).find(
        el => el.classList.contains('fixed') && 
              el.classList.contains('bottom-0') && 
              el.classList.contains('left-0') &&
              el.classList.contains('right-0') &&
              (el.classList.contains('bg-white') || el.classList.contains('bg-stone-900'))
      );

      if (header) {
        if (isCinemaMode) {
          header.style.display = 'none';
          header.setAttribute('data-cinema-hidden', 'true');
        } else {
          header.style.display = '';
          header.removeAttribute('data-cinema-hidden');
        }
      }

      if (bottomNav) {
        if (isCinemaMode) {
          bottomNav.style.display = 'none';
          bottomNav.setAttribute('data-cinema-hidden', 'true');
        } else {
          bottomNav.style.display = '';
          bottomNav.removeAttribute('data-cinema-hidden');
        }
      }

      // Adjust main content padding
      const mainContent = document.querySelector('.flex-1.pt-16.pb-20');
      if (mainContent) {
        if (isCinemaMode) {
          mainContent.style.paddingTop = '0';
          mainContent.style.paddingBottom = '0';
        } else {
          mainContent.style.paddingTop = '';
          mainContent.style.paddingBottom = '';
        }
      }
    };

    // Call immediately and also after a short delay
    hideElements();
    const timeoutId = setTimeout(hideElements, 100);
    
    // Also watch for DOM changes
    const observer = new MutationObserver(hideElements);
    observer.observe(document.body, {
      childList: true,
      subtree: true,
      attributes: false
    });
    
    return () => {
      clearTimeout(timeoutId);
      observer.disconnect();
      // Restore elements on cleanup
      document.querySelectorAll('[data-cinema-hidden="true"]').forEach(el => {
        el.style.display = '';
        el.removeAttribute('data-cinema-hidden');
      });
      const mainContent = document.querySelector('.flex-1.pt-16.pb-20');
      if (mainContent) {
        mainContent.style.paddingTop = '';
        mainContent.style.paddingBottom = '';
      }
    };
  }, [isCinemaMode]);

  const loadDecks = () => {
    const loadedDecks = getDecks();
    setDecks(loadedDecks);
  };

  // Save subtitle position to localStorage
  const saveSubtitlePosition = (position) => {
    localStorage.setItem('video_subtitle_position', JSON.stringify(position));
    setSubtitlePosition(position);
  };

  // Handle drag start
  const handleDragStart = (e) => {
    // Don't drag if clicking on button or its children
    if (e.target.closest('button') || e.target.tagName === 'BUTTON') {
      return;
    }
    e.preventDefault();
    setIsDragging(true);
    const rect = subtitleRef.current?.getBoundingClientRect();
    const containerRect = videoContainerRef.current?.getBoundingClientRect();
    if (rect && containerRect) {
      setDragStart({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      });
    }
  };

  // Handle drag
  const handleDrag = (e) => {
    if (!isDragging || !videoContainerRef.current || !subtitleRef.current) return;
    
    const containerRect = videoContainerRef.current.getBoundingClientRect();
    const subtitleRect = subtitleRef.current.getBoundingClientRect();
    
    // Calculate new position
    let x = e.clientX - containerRect.left - dragStart.x;
    let y = e.clientY - containerRect.top - dragStart.y;
    
    // Constrain to container bounds
    const maxX = containerRect.width - subtitleRect.width;
    const maxY = containerRect.height - subtitleRect.height;
    
    const constrainedX = Math.max(0, Math.min(x, maxX));
    const constrainedY = Math.max(0, Math.min(y, maxY));
    
    saveSubtitlePosition({
      x: constrainedX,
      y: constrainedY,
      bottom: null // Clear bottom when using x/y positioning
    });
  };

  // Handle drag end
  const handleDragEnd = () => {
    setIsDragging(false);
  };

  // Add mouse event listeners for dragging
  useEffect(() => {
    if (isDragging) {
      const handleMouseMove = (e) => {
        if (!videoContainerRef.current || !subtitleRef.current) return;
        
        const containerRect = videoContainerRef.current.getBoundingClientRect();
        const subtitleRect = subtitleRef.current.getBoundingClientRect();
        
        // Calculate new position
        let x = e.clientX - containerRect.left - dragStart.x;
        let y = e.clientY - containerRect.top - dragStart.y;
        
        // Constrain to container bounds
        const maxX = containerRect.width - subtitleRect.width;
        const maxY = containerRect.height - subtitleRect.height;
        
        const constrainedX = Math.max(0, Math.min(x, maxX));
        const constrainedY = Math.max(0, Math.min(y, maxY));
        
        saveSubtitlePosition({
          x: constrainedX,
          y: constrainedY,
          bottom: null
        });
      };
      const handleMouseUp = () => {
        setIsDragging(false);
      };
      
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      
      return () => {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
      };
    }
  }, [isDragging, dragStart]);

  const loadVideos = async () => {
    try {
      const loadedVideos = await getAllVideos();
      setVideos(loadedVideos);
    } catch (error) {
      console.error('Error loading videos:', error);
      toast.error(language === 'en' ? 'Failed to load videos' : 'Videos konnten nicht geladen werden');
    }
  };

  // Handle video file selection - detect embedded subtitles
  const handleVideoFileChange = async (file) => {
    setUploadingVideo(file);
    setEmbeddedTracks([]);
    setSelectedPrimaryTrack(null);
    setSelectedSecondaryTrack(null);

    // Check if file might have embedded subtitles
    if (mightHaveEmbeddedSubtitles(file.name)) {
      setDetectingEmbedded(true);
      toast.loading(language === 'en' ? 'Detecting embedded subtitles...' : 'Erkenne eingebettete Untertitel...', { id: 'detect-subs' });
      
      try {
        const tracks = await detectEmbeddedSubtitles(file);
        if (tracks.length > 0) {
          setEmbeddedTracks(tracks);
          toast.success(
            language === 'en' 
              ? `Found ${tracks.length} embedded subtitle${tracks.length > 1 ? 's' : ''}!` 
              : `${tracks.length} eingebettete Untertitel gefunden!`,
            { id: 'detect-subs', icon: '🎬' }
          );
        } else {
          toast.dismiss('detect-subs');
        }
      } catch (error) {
        console.error('Error detecting embedded subtitles:', error);
        toast.dismiss('detect-subs');
      } finally {
        setDetectingEmbedded(false);
      }
    }
  };

  // OpenSubtitles search (with or without API)
  const handleSearchSubtitles = async (forTrack) => {
    setSearchingFor(forTrack);
    
    // If no API key, show manual sources instead
    if (!isAPIKeyConfigured()) {
      setShowManualSources(true);
      return;
    }

    // API key configured - use automatic search
    setShowSubtitleSearch(true);
    setSearchResults([]);

    // Auto-search by video hash if available
    if (uploadingVideo) {
      setSearching(true);
      try {
        const hashResults = await searchSubtitlesByHash(uploadingVideo);
        if (hashResults.length > 0) {
          setSearchResults(formatSubtitleResults(hashResults));
          toast.success(
            language === 'en' 
              ? `Found ${hashResults.length} matching subtitles!` 
              : `${hashResults.length} passende Untertitel gefunden!`,
            { icon: '🔍' }
          );
        } else {
          toast(language === 'en' ? 'No automatic matches. Try searching by name.' : 'Keine automatischen Treffer. Versuche Suche nach Name.');
        }
      } catch (error) {
        console.error('Error searching subtitles:', error);
        toast.error(language === 'en' ? 'Search failed' : 'Suche fehlgeschlagen');
      } finally {
        setSearching(false);
      }
    }
  };

  const handleManualSearch = async () => {
    if (!searchQuery.trim()) {
      toast.error(language === 'en' ? 'Please enter a search query' : 'Bitte gib einen Suchbegriff ein');
      return;
    }

    setSearching(true);
    try {
      const results = await searchSubtitlesByQuery(searchQuery);
      setSearchResults(formatSubtitleResults(results));
      
      if (results.length === 0) {
        toast(language === 'en' ? 'No results found' : 'Keine Ergebnisse gefunden', { icon: '😔' });
      } else {
        toast.success(
          language === 'en' 
            ? `Found ${results.length} subtitles!` 
            : `${results.length} Untertitel gefunden!`,
          { icon: '🔍' }
        );
      }
    } catch (error) {
      console.error('Error searching subtitles:', error);
      toast.error(language === 'en' ? 'Search failed' : 'Suche fehlgeschlagen');
    } finally {
      setSearching(false);
    }
  };

  const handleSelectSearchResult = async (result) => {
    toast.loading(language === 'en' ? 'Downloading subtitle...' : 'Lade Untertitel herunter...', { id: 'download-sub' });
    
    try {
      const subtitleContent = await downloadSubtitle(result.id);
      
      // Create a File object from the content
      const blob = new Blob([subtitleContent], { type: 'text/plain' });
      const file = new File([blob], `${result.name}.srt`, { type: 'text/plain' });
      
      if (searchingFor === 'primary') {
        setUploadingPrimarySub(file);
      } else {
        setUploadingSecondarySub(file);
      }
      
      toast.success(language === 'en' ? 'Subtitle downloaded!' : 'Untertitel heruntergeladen!', { id: 'download-sub', icon: '✅' });
      setShowSubtitleSearch(false);
    } catch (error) {
      console.error('Error downloading subtitle:', error);
      toast.error(language === 'en' ? 'Download failed' : 'Download fehlgeschlagen', { id: 'download-sub' });
    }
  };

  const handleUseEmbeddedTrack = async (trackIndex, forTrack) => {
    if (!uploadingVideo) return;

    toast.loading(language === 'en' ? 'Extracting subtitle...' : 'Extrahiere Untertitel...', { id: 'extract-sub' });
    
    try {
      const cues = await extractEmbeddedSubtitle(uploadingVideo, trackIndex);
      
      if (cues.length === 0) {
        toast.error(
          language === 'en' 
            ? 'Could not extract subtitle. Browser limitations may prevent extraction. Try manual upload.' 
            : 'Konnte Untertitel nicht extrahieren. Browser-Einschränkungen verhindern möglicherweise die Extraktion. Versuche manuellen Upload.',
          { id: 'extract-sub', duration: 5000 }
        );
        return;
      }

      // Convert cues to SRT format
      const srtContent = cuesToSRT(cues);
      const blob = new Blob([srtContent], { type: 'text/plain' });
      const file = new File([blob], `embedded_${trackIndex}.srt`, { type: 'text/plain' });
      
      if (forTrack === 'primary') {
        setUploadingPrimarySub(file);
        setSelectedPrimaryTrack(trackIndex);
      } else {
        setUploadingSecondarySub(file);
        setSelectedSecondaryTrack(trackIndex);
      }
      
      toast.success(language === 'en' ? 'Subtitle extracted!' : 'Untertitel extrahiert!', { id: 'extract-sub', icon: '✅' });
    } catch (error) {
      console.error('Error extracting subtitle:', error);
      toast.error(
        language === 'en' 
          ? 'Extraction failed. Try manual upload or OpenSubtitles search.' 
          : 'Extraktion fehlgeschlagen. Versuche manuellen Upload oder OpenSubtitles-Suche.',
        { id: 'extract-sub', duration: 5000 }
      );
    }
  };

  const handleVideoUpload = async () => {
    if (!uploadingVideo) {
      toast.error(language === 'en' ? 'Please select a video file' : 'Bitte wähle eine Video-Datei');
      return;
    }

    if (!uploadingPrimarySub || !uploadingSecondarySub) {
      toast.error(language === 'en' ? 'Please select both subtitle files' : 'Bitte wähle beide Untertitel-Dateien');
      return;
    }

    setLoading(true);
    try {
      const videoId = await saveVideo(
        uploadingVideo,
        uploadingPrimarySub,
        uploadingSecondarySub,
        { title: uploadingVideo.name }
      );

      toast.success(
        language === 'en' ? 'Video uploaded successfully!' : 'Video erfolgreich hochgeladen!',
        { icon: '🎬' }
      );

      // Reset form
      setUploadingVideo(null);
      setUploadingPrimarySub(null);
      setUploadingSecondarySub(null);

      // Reload library
      await loadVideos();
    } catch (error) {
      console.error('Error uploading video:', error);
      toast.error(language === 'en' ? 'Failed to upload video' : 'Video konnte nicht hochgeladen werden');
    } finally {
      setLoading(false);
    }
  };

  const handleSelectVideo = async (videoId) => {
    setLoading(true);
    try {
      const video = await getVideo(videoId);
      
      // Parse subtitles
      const primarySubs = parseSubtitle(video.primarySubtitle);
      const secondarySubs = parseSubtitle(video.secondarySubtitle);
      const merged = mergeSubtitles(primarySubs, secondarySubs);

      setPrimarySubtitles(primarySubs);
      setSecondarySubtitles(secondarySubs);
      setMergedSubtitles(merged);
      setCurrentVideo(video);

      // Load favorites
      const favs = await getFavorites(videoId);
      setFavorites(favs);
      setFavoritedIds(new Set(favs.map(f => f.subtitleId)));

      setView('player');
    } catch (error) {
      console.error('Error loading video:', error);
      toast.error(language === 'en' ? 'Failed to load video' : 'Video konnte nicht geladen werden');
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteVideo = async (videoId, e) => {
    e.stopPropagation();
    
    if (!window.confirm(
      language === 'en' 
        ? 'Are you sure you want to delete this video?' 
        : 'Möchtest du dieses Video wirklich löschen?'
    )) {
      return;
    }

    try {
      await deleteVideo(videoId);
      toast.success(language === 'en' ? 'Video deleted!' : 'Video gelöscht!', { icon: '🗑️' });
      await loadVideos();
    } catch (error) {
      console.error('Error deleting video:', error);
      toast.error(language === 'en' ? 'Failed to delete video' : 'Video konnte nicht gelöscht werden');
    }
  };

  // Video player controls
  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      const time = videoRef.current.currentTime;
      setCurrentTime(time);

      // Find current subtitle
      const current = findCurrentSubtitle(mergedSubtitles, time);
      setCurrentSubtitle(current);
    }
  };

  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      setDuration(videoRef.current.duration);
    }
  };

  const handleSeek = (e) => {
    const seekTime = parseFloat(e.target.value);
    if (videoRef.current) {
      videoRef.current.currentTime = seekTime;
      setCurrentTime(seekTime);
    }
  };

  const handleVolumeChange = (e) => {
    const vol = parseFloat(e.target.value);
    setVolume(vol);
    if (videoRef.current) {
      videoRef.current.volume = vol;
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const toggleFullscreen = () => {
    if (videoContainerRef.current) {
      if (document.fullscreenElement) {
        document.exitFullscreen();
      } else {
        videoContainerRef.current.requestFullscreen();
      }
    }
  };

  const jumpToTime = (time) => {
    if (videoRef.current) {
      videoRef.current.currentTime = time;
      setCurrentTime(time);
      if (!isPlaying) {
        videoRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  // Favorite management
  const toggleFavorite = async () => {
    if (!currentSubtitle) return;

    try {
      if (favoritedIds.has(currentSubtitle.id)) {
        // Remove favorite
        const fav = favorites.find(f => f.subtitleId === currentSubtitle.id);
        if (fav) {
          await deleteFavorite(fav.id);
          setFavorites(favorites.filter(f => f.id !== fav.id));
          setFavoritedIds(prev => {
            const newSet = new Set(prev);
            newSet.delete(currentSubtitle.id);
            return newSet;
          });
          toast.success(language === 'en' ? 'Removed from favorites' : 'Von Favoriten entfernt', { icon: '⭐' });
        }
      } else {
        // Add favorite
        const favId = await saveFavorite(
          currentVideo.id,
          currentSubtitle.id,
          currentSubtitle.primaryText,
          currentSubtitle.secondaryText,
          currentTime
        );
        
        const newFav = {
          id: favId,
          videoId: currentVideo.id,
          subtitleId: currentSubtitle.id,
          primaryText: currentSubtitle.primaryText,
          secondaryText: currentSubtitle.secondaryText,
          timestamp: currentTime
        };
        
        setFavorites([...favorites, newFav]);
        setFavoritedIds(prev => new Set([...prev, currentSubtitle.id]));
        toast.success(language === 'en' ? 'Added to favorites!' : 'Zu Favoriten hinzugefügt!', { icon: '⭐' });
      }
    } catch (error) {
      console.error('Error toggling favorite:', error);
      toast.error(language === 'en' ? 'Failed to save favorite' : 'Favorit konnte nicht gespeichert werden');
    }
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    toast.success(language === 'en' ? 'Copied to clipboard!' : 'In Zwischenablage kopiert!', { icon: '📋' });
  };

  const handleAddToDeck = async (fav, deckId) => {
    const deck = decks.find(d => d.id === deckId);
    if (!deck) return;

    // Ensure deck has cached cards
    let cached = getCachedCards(deckId);
    if (!cached) {
      // Initialize empty cache if needed
      setCachedCards(deckId, []);
      cached = getCachedCards(deckId);
    }

    const newCard = {
      word: fav.primaryText,
      translation: fav.secondaryText || '',
      explanation: '',
      ratingGeneral: 0
    };

    const success = addCardLocally(deckId, newCard);
    
    if (success) {
      // Update addedToDecks map
      const currentDecks = addedToDecks.get(fav.id) || [];
      if (!currentDecks.includes(deckId)) {
        setAddedToDecks(new Map(addedToDecks.set(fav.id, [...currentDecks, deckId])));
      }
      
      toast.success(
        language === 'de' 
          ? `"${fav.primaryText}" zu "${deck.name}" hinzugefügt!` 
          : `"${fav.primaryText}" added to "${deck.name}"!`,
        { icon: '✅', duration: 2000 }
      );
      setShowDeckSelector(null);
    } else {
      toast.error(
        language === 'de' 
          ? 'Fehler beim Hinzufügen' 
          : 'Error adding to deck',
        { duration: 2000 }
      );
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-4 border-rose-500 border-t-transparent"></div>
      </div>
    );
  }

  if (view === 'player' && currentVideo) {
    return (
      <div className="flex h-screen bg-stone-900 text-white">
        {/* Favorites Sidebar */}
        <div className="w-80 bg-stone-800 border-r border-stone-700 flex flex-col">
          <div className="p-4 border-b border-stone-700">
            <button
              onClick={() => setView('library')}
              className="flex items-center gap-2 text-stone-300 hover:text-white transition-colors mb-4"
            >
              <ArrowLeft size={20} />
              {language === 'en' ? 'Back to Library' : 'Zurück zur Bibliothek'}
            </button>
            <h2 className="text-xl font-bold flex items-center gap-2">
              <Star size={20} className="text-yellow-500" />
              {language === 'en' ? 'Favorites' : 'Favoriten'}
            </h2>
            <p className="text-sm text-stone-400 mt-1">
              {favorites.length} {language === 'en' ? 'sentences' : 'Sätze'}
            </p>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {favorites.length === 0 ? (
              <div className="text-center text-stone-400 mt-8">
                <Star size={48} className="mx-auto mb-4 opacity-20" />
                <p className="text-sm">
                  {language === 'en' 
                    ? 'No favorites yet. Click the star while watching!'
                    : 'Noch keine Favoriten. Klicke beim Schauen auf den Stern!'}
                </p>
              </div>
            ) : (
              favorites.map((fav) => (
                <div
                  key={fav.id}
                  className="bg-stone-700 rounded-lg p-3 hover:bg-stone-600 transition-colors"
                >
                  <div className="flex items-start justify-between mb-2">
                    <span 
                      className="text-xs text-stone-400 cursor-pointer hover:text-stone-300"
                      onClick={() => jumpToTime(fav.timestamp)}
                    >
                      {formatTime(fav.timestamp)}
                    </span>
                    <div className="flex items-center gap-1">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          if (decks.length > 0) {
                            setShowDeckSelector(showDeckSelector === fav.id ? null : fav.id);
                          } else {
                            toast.error(
                              language === 'de' 
                                ? 'Keine Decks vorhanden. Erstelle zuerst ein Deck in der Vokabel-Seite.' 
                                : 'No decks available. Please create a deck in the Vocabulary page first.',
                              { duration: 4000 }
                            );
                          }
                        }}
                        className="text-rose-500 hover:text-rose-600 transition-colors relative"
                        title={language === 'de' ? 'Zu Deck hinzufügen' : 'Add to deck'}
                      >
                        {addedToDecks.has(fav.id) && addedToDecks.get(fav.id).length > 0 ? (
                          <Check size={14} className="text-green-500" />
                        ) : (
                          <Plus size={14} />
                        )}
                      </button>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          deleteFavorite(fav.id).then(() => {
                            setFavorites(favorites.filter(f => f.id !== fav.id));
                            setFavoritedIds(prev => {
                              const newSet = new Set(prev);
                              newSet.delete(fav.subtitleId);
                              return newSet;
                            });
                          });
                        }}
                        className="text-stone-400 hover:text-red-400 transition-colors"
                      >
                        <Trash2 size={14} />
                      </button>
                    </div>
                  </div>
                  
                  <div 
                    className="space-y-2 cursor-pointer"
                    onClick={() => jumpToTime(fav.timestamp)}
                  >
                    <div className="flex items-start gap-2">
                      <p className="text-sm flex-1">{fav.primaryText}</p>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          copyToClipboard(fav.primaryText);
                        }}
                        className="text-stone-400 hover:text-white transition-colors"
                      >
                        <Copy size={14} />
                      </button>
                    </div>
                    
                    {fav.secondaryText && (
                      <div className="flex items-start gap-2 border-t border-stone-600 pt-2">
                        <p className="text-sm text-stone-300 flex-1">{fav.secondaryText}</p>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            copyToClipboard(fav.secondaryText);
                          }}
                          className="text-stone-400 hover:text-white transition-colors"
                        >
                          <Copy size={14} />
                        </button>
                      </div>
                    )}
                  </div>
                  
                  {showDeckSelector === fav.id && decks.length > 0 && (
                    <div className="mt-2 pt-2 border-t border-stone-600" onClick={(e) => e.stopPropagation()}>
                      <p className="text-xs text-stone-400 mb-2">
                        {language === 'de' ? 'Zu Deck hinzufügen:' : 'Add to deck:'}
                      </p>
                      <div className="flex flex-col gap-1 max-h-40 overflow-y-auto">
                        {decks.map(deck => {
                          const isAdded = addedToDecks.get(fav.id)?.includes(deck.id);
                          return (
                            <button
                              key={deck.id}
                              onClick={(e) => {
                                e.stopPropagation();
                                handleAddToDeck(fav, deck.id);
                              }}
                              className={`text-left px-2 py-1 text-xs rounded transition-colors flex items-center justify-between ${
                                isAdded 
                                  ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300' 
                                  : 'bg-stone-600 hover:bg-stone-500'
                              }`}
                            >
                              <span>{deck.name}</span>
                              {isAdded && <Check size={12} />}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>
              ))
            )}
          </div>
        </div>

        {/* Video Player */}
        <div className="flex-1 flex flex-col">
          {/* Video Container - this will be fullscreened */}
          <div 
            ref={videoContainerRef}
            className="relative flex-1 bg-black flex items-center justify-center video-container-fullscreen"
          >
            <video
              ref={videoRef}
              src={currentVideo.videoUrl}
              className="max-w-full max-h-full w-full h-full object-contain"
              onTimeUpdate={handleTimeUpdate}
              onLoadedMetadata={handleLoadedMetadata}
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
            />

            {/* Subtitle Overlay */}
            {currentSubtitle && (
              <div 
                ref={subtitleRef}
                className={`absolute flex flex-col items-center gap-2 px-4 z-10 pointer-events-none cursor-move ${
                  isDragging ? 'select-none' : ''
                }`}
                style={{
                  left: subtitlePosition.bottom === null ? `${subtitlePosition.x}px` : '50%',
                  top: subtitlePosition.bottom === null ? `${subtitlePosition.y}px` : 'auto',
                  bottom: subtitlePosition.bottom !== null ? `${subtitlePosition.bottom}px` : 'auto',
                  transform: subtitlePosition.bottom === null ? 'none' : 'translateX(-50%)',
                  transition: isDragging ? 'none' : 'none'
                }}
                onMouseDown={handleDragStart}
              >
                {/* Primary Subtitle (English) */}
                <div className={`${isFullscreen ? 'bg-black/60' : 'bg-black/80'} text-white px-6 py-3 rounded-lg text-xl font-semibold text-center max-w-4xl pointer-events-auto`}>
                  {currentSubtitle.primaryText}
                </div>
                
                {/* Secondary Subtitle (Translation) */}
                {currentSubtitle.secondaryText && (
                  <div className={`${isFullscreen ? 'bg-stone-800/60' : 'bg-stone-800/80'} text-stone-200 px-6 py-2 rounded-lg text-lg text-center max-w-4xl pointer-events-auto`}>
                    {currentSubtitle.secondaryText}
                  </div>
                )}

                {/* Favorite Button */}
                <button
                  onClick={toggleFavorite}
                  className={`p-2 rounded-full transition-all pointer-events-auto ${
                    favoritedIds.has(currentSubtitle.id)
                      ? 'bg-yellow-500 text-white'
                      : `${isFullscreen ? 'bg-stone-700/60' : 'bg-stone-700/80'} text-stone-300 hover:bg-stone-600/80`
                  }`}
                  title={language === 'en' ? 'Add to favorites' : 'Zu Favoriten hinzufügen'}
                >
                  <Star size={20} fill={favoritedIds.has(currentSubtitle.id) ? 'currentColor' : 'none'} />
                </button>
              </div>
            )}
          </div>

          {/* Controls */}
          <div className="bg-stone-800 p-4 space-y-3">
            {/* Progress Bar */}
            <input
              type="range"
              min="0"
              max={duration}
              value={currentTime}
              onChange={handleSeek}
              className="w-full h-2 bg-stone-600 rounded-lg appearance-none cursor-pointer accent-rose-500"
            />

            {/* Control Buttons */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <button
                  onClick={togglePlay}
                  className="p-3 bg-rose-500 hover:bg-rose-600 rounded-full transition-colors"
                >
                  {isPlaying ? <Pause size={24} /> : <Play size={24} />}
                </button>

                <span className="text-sm text-stone-300">
                  {formatTime(currentTime)} / {formatTime(duration)}
                </span>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <button onClick={toggleMute} className="text-stone-300 hover:text-white transition-colors">
                    {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
                  </button>
                  <input
                    type="range"
                    min="0"
                    max="1"
                    step="0.1"
                    value={volume}
                    onChange={handleVolumeChange}
                    className="w-24 h-1 bg-stone-600 rounded-lg appearance-none cursor-pointer accent-rose-500"
                  />
                </div>

                <button
                  onClick={toggleFullscreen}
                  className="text-stone-300 hover:text-white transition-colors"
                  title={language === 'en' ? 'Fullscreen' : 'Vollbild'}
                >
                  <Maximize size={20} />
                </button>

                <button
                  onClick={() => setIsCinemaMode(!isCinemaMode)}
                  className={`transition-colors ${
                    isCinemaMode 
                      ? 'text-rose-500 hover:text-rose-400' 
                      : 'text-stone-300 hover:text-white'
                  }`}
                  title={language === 'en' ? 'Cinema Mode' : 'Kino-Modus'}
                >
                  <FilmIcon size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Library View
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <div className="flex items-center justify-center gap-3 mb-4">
          <FileVideo size={48} className="text-rose-500" />
          <h1 className="text-4xl font-bold bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent">
            {language === 'en' ? 'Video Library' : 'Video-Bibliothek'}
          </h1>
        </div>
        <p className="text-xl text-stone-600 dark:text-stone-400">
          {language === 'en' 
            ? 'Learn with dual subtitles and save your favorite sentences'
            : 'Lerne mit doppelten Untertiteln und speichere deine Lieblingssätze'}
        </p>
      </div>

      {/* Upload Section */}
      <div className="bg-gradient-to-br from-rose-50 to-pink-50 dark:from-rose-900/20 dark:to-pink-900/20 rounded-2xl p-6 border-2 border-rose-200 dark:border-rose-800 mb-8">
        <h2 className="text-2xl font-bold text-stone-800 dark:text-stone-100 mb-4 flex items-center gap-2">
          <Upload size={24} className="text-rose-500" />
          {language === 'en' ? 'Upload Video' : 'Video hochladen'}
        </h2>

        {/* Video File */}
        <div className="mb-6">
          <label className="block text-sm font-semibold text-stone-700 dark:text-stone-300 mb-2">
            {language === 'en' ? 'Video File (MP4, MKV)' : 'Video-Datei (MP4, MKV)'}
          </label>
          <input
            type="file"
            accept="video/mp4,video/x-matroska"
            onChange={(e) => handleVideoFileChange(e.target.files[0])}
            className="w-full text-sm text-stone-600 dark:text-stone-400 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-rose-500 file:text-white file:cursor-pointer hover:file:bg-rose-600"
          />
          {uploadingVideo && (
            <p className="text-xs text-stone-600 dark:text-stone-400 mt-1 flex items-center gap-1">
              <Check size={12} className="text-green-500" /> {uploadingVideo.name}
            </p>
          )}
        </div>

        {/* Embedded Subtitles Alert */}
        {embeddedTracks.length > 0 && (
          <div className="bg-blue-50 dark:bg-blue-900/20 border-2 border-blue-300 dark:border-blue-700 rounded-lg p-4 mb-6">
            <div className="flex items-start gap-3">
              <Film size={20} className="text-blue-600 dark:text-blue-400 mt-0.5" />
              <div className="flex-1">
                <h3 className="font-bold text-blue-900 dark:text-blue-100 mb-2">
                  {language === 'en' ? '🎉 Embedded Subtitles Detected!' : '🎉 Eingebettete Untertitel gefunden!'}
                </h3>
                <p className="text-sm text-blue-800 dark:text-blue-200 mb-3">
                  {language === 'en' 
                    ? `Found ${embeddedTracks.length} subtitle track(s). Click to use them:` 
                    : `${embeddedTracks.length} Untertitel-Spur(en) gefunden. Klicke um sie zu nutzen:`}
                </p>
                <div className="space-y-2">
                  {embeddedTracks.map((track, index) => (
                    <div key={index} className="flex items-center gap-2 flex-wrap">
                      <span className="text-xs bg-blue-100 dark:bg-blue-800 px-2 py-1 rounded">
                        {track.label} {track.language && `(${getLanguageName(track.language)})`}
                      </span>
                      <button
                        onClick={() => handleUseEmbeddedTrack(index, 'primary')}
                        className={`text-xs px-3 py-1 rounded transition-colors ${
                          selectedPrimaryTrack === index
                            ? 'bg-green-500 text-white'
                            : 'bg-blue-500 text-white hover:bg-blue-600'
                        }`}
                      >
                        {language === 'en' ? 'Use as English' : 'Als Englisch nutzen'}
                      </button>
                      <button
                        onClick={() => handleUseEmbeddedTrack(index, 'secondary')}
                        className={`text-xs px-3 py-1 rounded transition-colors ${
                          selectedSecondaryTrack === index
                            ? 'bg-green-500 text-white'
                            : 'bg-purple-500 text-white hover:bg-purple-600'
                        }`}
                      >
                        {language === 'en' ? 'Use as Translation' : 'Als Übersetzung nutzen'}
                      </button>
                    </div>
                  ))}
                </div>
                <p className="text-xs text-blue-700 dark:text-blue-300 mt-3">
                  {language === 'en' 
                    ? 'Note: Browser limitations may prevent extraction. If it fails, use manual upload or OpenSubtitles search below.' 
                    : 'Hinweis: Browser-Einschränkungen können Extraktion verhindern. Bei Fehlschlag nutze manuellen Upload oder OpenSubtitles-Suche.'}
                </p>
              </div>
            </div>
          </div>
        )}

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          {/* Primary Subtitle */}
          <div>
            <label className="block text-sm font-semibold text-stone-700 dark:text-stone-300 mb-2">
              {language === 'en' ? 'English Subtitle' : 'Englischer Untertitel'}
            </label>
            
            <div className="space-y-2">
              {/* Manual Upload */}
              <input
                type="file"
                accept=".srt,.vtt"
                onChange={(e) => setUploadingPrimarySub(e.target.files[0])}
                className="w-full text-sm text-stone-600 dark:text-stone-400 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-blue-500 file:text-white file:cursor-pointer hover:file:bg-blue-600"
              />
              
              {/* OpenSubtitles Search Button */}
              <button
                onClick={() => handleSearchSubtitles('primary')}
                disabled={!uploadingVideo}
                className="w-full flex items-center justify-center gap-2 py-2 px-4 bg-green-500 hover:bg-green-600 text-white rounded-lg text-sm font-semibold transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Search size={16} />
                {language === 'en' ? 'Search OpenSubtitles' : 'OpenSubtitles durchsuchen'}
              </button>
              
              {uploadingPrimarySub && (
                <p className="text-xs text-stone-600 dark:text-stone-400 flex items-center gap-1">
                  <Check size={12} className="text-green-500" /> {uploadingPrimarySub.name}
                </p>
              )}
            </div>
          </div>

          {/* Secondary Subtitle */}
          <div>
            <label className="block text-sm font-semibold text-stone-700 dark:text-stone-300 mb-2">
              {language === 'en' ? 'Translation Subtitle' : 'Übersetzungs-Untertitel'}
            </label>
            
            <div className="space-y-2">
              {/* Manual Upload */}
              <input
                type="file"
                accept=".srt,.vtt"
                onChange={(e) => setUploadingSecondarySub(e.target.files[0])}
                className="w-full text-sm text-stone-600 dark:text-stone-400 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-purple-500 file:text-white file:cursor-pointer hover:file:bg-purple-600"
              />
              
              {/* OpenSubtitles Search Button */}
              <button
                onClick={() => handleSearchSubtitles('secondary')}
                disabled={!uploadingVideo}
                className="w-full flex items-center justify-center gap-2 py-2 px-4 bg-green-500 hover:bg-green-600 text-white rounded-lg text-sm font-semibold transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Search size={16} />
                {language === 'en' ? 'Search OpenSubtitles' : 'OpenSubtitles durchsuchen'}
              </button>
              
              {uploadingSecondarySub && (
                <p className="text-xs text-stone-600 dark:text-stone-400 flex items-center gap-1">
                  <Check size={12} className="text-green-500" /> {uploadingSecondarySub.name}
                </p>
              )}
            </div>
          </div>
        </div>

        <button
          onClick={handleVideoUpload}
          disabled={!uploadingVideo || !uploadingPrimarySub || !uploadingSecondarySub || loading}
          className="w-full py-3 bg-gradient-to-r from-rose-500 to-pink-500 text-white font-bold rounded-xl hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading 
            ? (language === 'en' ? 'Uploading...' : 'Lädt hoch...')
            : (language === 'en' ? 'Upload Video' : 'Video hochladen')}
        </button>
      </div>

      {/* OpenSubtitles Search Modal */}
      {showSubtitleSearch && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white dark:bg-stone-800 rounded-2xl shadow-2xl max-w-4xl w-full max-h-[80vh] overflow-hidden flex flex-col">
            {/* Header */}
            <div className="p-6 border-b border-stone-200 dark:border-stone-700 flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold text-stone-800 dark:text-stone-100 flex items-center gap-2">
                  <Globe size={24} className="text-green-500" />
                  {language === 'en' ? 'Search Subtitles' : 'Untertitel suchen'}
                </h2>
                <p className="text-sm text-stone-600 dark:text-stone-400 mt-1">
                  {searchingFor === 'primary' 
                    ? (language === 'en' ? 'English Subtitle' : 'Englischer Untertitel')
                    : (language === 'en' ? 'Translation Subtitle' : 'Übersetzungs-Untertitel')}
                </p>
              </div>
              <button
                onClick={() => setShowSubtitleSearch(false)}
                className="p-2 hover:bg-stone-100 dark:hover:bg-stone-700 rounded-lg transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            {/* Search Bar */}
            <div className="p-6 border-b border-stone-200 dark:border-stone-700">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleManualSearch()}
                  placeholder={language === 'en' ? 'Search by movie/show name...' : 'Nach Film/Serie suchen...'}
                  className="flex-1 px-4 py-2 border-2 border-stone-300 dark:border-stone-600 rounded-lg bg-white dark:bg-stone-700 text-stone-800 dark:text-stone-100"
                />
                <button
                  onClick={handleManualSearch}
                  disabled={searching}
                  className="px-6 py-2 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg transition-colors disabled:opacity-50"
                >
                  {searching ? '...' : <Search size={20} />}
                </button>
              </div>
              <p className="text-xs text-stone-600 dark:text-stone-400 mt-2">
                {language === 'en' 
                  ? 'Automatic search by video file already performed. Use manual search for specific titles.' 
                  : 'Automatische Suche nach Video-Datei bereits durchgeführt. Nutze manuelle Suche für spezifische Titel.'}
              </p>
            </div>

            {/* Results */}
            <div className="flex-1 overflow-y-auto p-6">
              {searchResults.length === 0 ? (
                <div className="text-center py-12 text-stone-600 dark:text-stone-400">
                  {searching ? (
                    <div className="flex flex-col items-center gap-3">
                      <div className="animate-spin rounded-full h-12 w-12 border-4 border-green-500 border-t-transparent"></div>
                      <p>{language === 'en' ? 'Searching...' : 'Suche läuft...'}</p>
                    </div>
                  ) : (
                    <p>{language === 'en' ? 'No results yet. Try searching!' : 'Noch keine Ergebnisse. Starte eine Suche!'}</p>
                  )}
                </div>
              ) : (
                <div className="space-y-3">
                  {searchResults.map((result) => (
                    <div
                      key={result.id}
                      className="bg-stone-50 dark:bg-stone-700 rounded-lg p-4 hover:shadow-md transition-shadow cursor-pointer"
                      onClick={() => handleSelectSearchResult(result)}
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                          <h3 className="font-bold text-stone-800 dark:text-stone-100 mb-1">
                            {result.name}
                          </h3>
                          {result.movieName && result.movieName !== result.name && (
                            <p className="text-sm text-stone-600 dark:text-stone-400 mb-2">
                              {result.movieName} {result.year && `(${result.year})`}
                            </p>
                          )}
                          <div className="flex items-center gap-2 flex-wrap text-xs">
                            <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded">
                              {result.language.toUpperCase()}
                            </span>
                            <span className="bg-stone-200 dark:bg-stone-600 text-stone-700 dark:text-stone-300 px-2 py-1 rounded">
                              {result.format}
                            </span>
                            <span className="text-stone-600 dark:text-stone-400">
                              ⬇️ {result.downloads || 0}
                            </span>
                            {result.hearing_impaired && (
                              <span className="bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 px-2 py-1 rounded">
                                HI
                              </span>
                            )}
                          </div>
                        </div>
                        <Download size={20} className="text-green-500" />
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Manual Sources Modal (No API Key Required) */}
      {showManualSources && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white dark:bg-stone-800 rounded-2xl shadow-2xl max-w-lg w-full max-h-[85vh] overflow-y-auto">
            {/* Header */}
            <div className="p-4 border-b border-stone-200 dark:border-stone-700 flex items-center justify-between sticky top-0 bg-white dark:bg-stone-800 z-10">
              <div>
                <h2 className="text-xl font-bold text-stone-800 dark:text-stone-100 flex items-center gap-2">
                  <Globe size={20} className="text-blue-500" />
                  {language === 'en' ? 'Find Subtitles' : 'Untertitel finden'}
                </h2>
              </div>
              <button
                onClick={() => setShowManualSources(false)}
                className="p-2 hover:bg-stone-100 dark:hover:bg-stone-700 rounded-lg transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            <div className="p-4 space-y-3">
              {/* Quick Search Button */}
              {uploadingVideo && (
                <button
                  onClick={() => {
                    const lang = searchingFor === 'primary' ? 'en' : 'de';
                    openManualSearch(uploadingVideo.name, lang);
                    toast.success(
                      language === 'en' 
                        ? 'Opened OpenSubtitles!' 
                        : 'OpenSubtitles geöffnet!',
                      { icon: '🔍' }
                    );
                    setShowManualSources(false);
                  }}
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white font-bold rounded-lg shadow-lg transition-all"
                >
                  <Search size={20} />
                  <span>{language === 'en' ? 'Search OpenSubtitles' : 'OpenSubtitles durchsuchen'}</span>
                  <ExternalLink size={16} />
                </button>
              )}

              {/* Alternative Sources (Compact) */}
              <div>
                <p className="text-xs text-stone-600 dark:text-stone-400 mb-2">
                  {language === 'en' ? 'Or try these alternatives:' : 'Oder probiere Alternativen:'}
                </p>
                <div className="space-y-1.5">
                  {uploadingVideo && getAlternativeSubtitleSources(uploadingVideo.name).slice(1, 3).map((source, index) => (
                    <a
                      key={index}
                      href={source.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => {
                        toast.success(language === 'en' ? 'Opened in new tab!' : 'In neuem Tab geöffnet!', { icon: '🔗' });
                        setShowManualSources(false);
                      }}
                      className="block p-2.5 rounded-lg border border-stone-200 dark:border-stone-700 bg-white dark:bg-stone-800 hover:border-stone-300 dark:hover:border-stone-600 transition-all"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-semibold text-stone-800 dark:text-stone-100">
                          {source.name}
                        </span>
                        <ExternalLink size={14} className="text-stone-400" />
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Compact Instructions */}
              <div className="p-3 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg">
                <p className="text-xs text-blue-800 dark:text-blue-200">
                  {language === 'en' 
                    ? '💡 Download subtitle file (.srt/.vtt), then upload it above' 
                    : '💡 Lade die Untertitel-Datei (.srt/.vtt) herunter und lade sie dann oben hoch'}
                </p>
              </div>

              {/* API Key Info (Collapsed) */}
              <button
                onClick={() => {
                  const instructions = getAPISetupInstructions();
                  console.log('\n' + instructions.title);
                  instructions.steps.forEach(step => console.log(step));
                  console.log('\n' + instructions.note);
                  toast.success(
                    language === 'en' 
                      ? 'Setup instructions in console (F12)' 
                      : 'Setup-Anleitung in Konsole (F12)',
                    { icon: '📝', duration: 4000 }
                  );
                }}
                className="w-full text-left p-3 bg-stone-50 dark:bg-stone-900/50 border border-stone-200 dark:border-stone-700 rounded-lg hover:border-stone-300 dark:hover:border-stone-600 transition-colors"
              >
                <p className="text-xs font-semibold text-stone-700 dark:text-stone-300 mb-1">
                  {language === 'en' ? '⚡ Want automatic downloads?' : '⚡ Automatische Downloads?'}
                </p>
                <p className="text-xs text-stone-600 dark:text-stone-400">
                  {language === 'en' 
                    ? 'Click for free API setup guide' 
                    : 'Klick für kostenlose API-Anleitung'}
                </p>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Video Grid */}
      {videos.length === 0 ? (
        <div className="text-center py-12">
          <Subtitles size={64} className="mx-auto text-stone-300 dark:text-stone-600 mb-4" />
          <p className="text-xl text-stone-600 dark:text-stone-400">
            {language === 'en' ? 'No videos yet. Upload your first video!' : 'Noch keine Videos. Lade dein erstes Video hoch!'}
          </p>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((video) => (
            <div
              key={video.id}
              className="group bg-white dark:bg-stone-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all border-2 border-stone-200 dark:border-stone-700 overflow-hidden cursor-pointer"
              onClick={() => handleSelectVideo(video.id)}
            >
              <div className="aspect-video bg-gradient-to-br from-rose-100 to-pink-100 dark:from-rose-900/20 dark:to-pink-900/20 flex items-center justify-center">
                <FileVideo size={64} className="text-rose-500" />
              </div>
              
              <div className="p-4">
                <h3 className="font-bold text-lg text-stone-800 dark:text-stone-100 mb-2 truncate">
                  {video.name}
                </h3>
                
                <div className="flex items-center justify-between text-sm text-stone-600 dark:text-stone-400">
                  <span>{(video.size / 1024 / 1024).toFixed(2)} MB</span>
                  <button
                    onClick={(e) => handleDeleteVideo(video.id, e)}
                    className="p-2 text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Fullscreen Video CSS */}
      <style>{`
        .video-container-fullscreen:fullscreen {
          width: 100vw;
          height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background: black;
        }
        
        .video-container-fullscreen:fullscreen video {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }
        
        .video-container-fullscreen:fullscreen::backdrop {
          background: black;
        }

        /* Cinema Mode - Hide Header and Bottom Navigation */
        body.cinema-mode div.fixed.top-0,
        body.cinema-mode nav.fixed.bottom-0,
        body.cinema-mode .cinema-mode-active > div:first-child,
        body.cinema-mode .cinema-mode-active > nav:last-child {
          display: none !important;
          visibility: hidden !important;
          opacity: 0 !important;
          height: 0 !important;
          overflow: hidden !important;
        }

        /* Adjust padding when cinema mode is active */
        body.cinema-mode .flex-1.pt-16.pb-20,
        body.cinema-mode .cinema-mode-active > .flex-1 {
          padding-top: 0 !important;
          padding-bottom: 0 !important;
        }

        /* Make video player take full height in cinema mode */
        body.cinema-mode .flex.h-screen {
          height: 100vh !important;
          margin-top: 0 !important;
        }

        /* Ensure video container uses full viewport in cinema mode */
        body.cinema-mode .flex.h-screen.bg-stone-900 {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: 40;
        }
      `}</style>
    </div>
  );
}

export default VideoPlayerPage;

