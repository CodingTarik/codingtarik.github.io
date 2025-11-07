import React, { useState, useEffect, useRef } from 'react';
import { Upload, Play, Pause, Volume2, VolumeX, Maximize, Star, Copy, Trash2, ArrowLeft, FileVideo, Subtitles, Check } from 'lucide-react';
import toast from 'react-hot-toast';
import { useLanguage } from '../../../context/LanguageContext';
import { parseSubtitle, findCurrentSubtitle, formatTime, mergeSubtitles } from '../utils/subtitleParser';
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

  // Player state
  const videoRef = useRef(null);
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

  useEffect(() => {
    loadVideos();
  }, []);

  const loadVideos = async () => {
    try {
      const loadedVideos = await getAllVideos();
      setVideos(loadedVideos);
    } catch (error) {
      console.error('Error loading videos:', error);
      toast.error(language === 'en' ? 'Failed to load videos' : 'Videos konnten nicht geladen werden');
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
    if (videoRef.current) {
      if (document.fullscreenElement) {
        document.exitFullscreen();
      } else {
        videoRef.current.requestFullscreen();
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
                  className="bg-stone-700 rounded-lg p-3 hover:bg-stone-600 transition-colors cursor-pointer"
                  onClick={() => jumpToTime(fav.timestamp)}
                >
                  <div className="flex items-start justify-between mb-2">
                    <span className="text-xs text-stone-400">{formatTime(fav.timestamp)}</span>
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
                  
                  <div className="space-y-2">
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
                </div>
              ))
            )}
          </div>
        </div>

        {/* Video Player */}
        <div className="flex-1 flex flex-col">
          {/* Video */}
          <div className="relative flex-1 bg-black flex items-center justify-center">
            <video
              ref={videoRef}
              src={currentVideo.videoUrl}
              className="max-w-full max-h-full"
              onTimeUpdate={handleTimeUpdate}
              onLoadedMetadata={handleLoadedMetadata}
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
            />

            {/* Subtitle Overlay */}
            {currentSubtitle && (
              <div className="absolute bottom-32 left-0 right-0 flex flex-col items-center gap-2 px-4">
                {/* Primary Subtitle (English) */}
                <div className="bg-black/80 text-white px-6 py-3 rounded-lg text-xl font-semibold text-center max-w-4xl">
                  {currentSubtitle.primaryText}
                </div>
                
                {/* Secondary Subtitle (Translation) */}
                {currentSubtitle.secondaryText && (
                  <div className="bg-stone-800/80 text-stone-200 px-6 py-2 rounded-lg text-lg text-center max-w-4xl">
                    {currentSubtitle.secondaryText}
                  </div>
                )}

                {/* Favorite Button */}
                <button
                  onClick={toggleFavorite}
                  className={`p-2 rounded-full transition-all ${
                    favoritedIds.has(currentSubtitle.id)
                      ? 'bg-yellow-500 text-white'
                      : 'bg-stone-700/80 text-stone-300 hover:bg-stone-600/80'
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
                >
                  <Maximize size={20} />
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

        <div className="grid md:grid-cols-3 gap-4 mb-4">
          {/* Video File */}
          <div>
            <label className="block text-sm font-semibold text-stone-700 dark:text-stone-300 mb-2">
              {language === 'en' ? 'Video File (MP4, MKV)' : 'Video-Datei (MP4, MKV)'}
            </label>
            <input
              type="file"
              accept="video/mp4,video/x-matroska"
              onChange={(e) => setUploadingVideo(e.target.files[0])}
              className="w-full text-sm text-stone-600 dark:text-stone-400 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-rose-500 file:text-white file:cursor-pointer hover:file:bg-rose-600"
            />
            {uploadingVideo && (
              <p className="text-xs text-stone-600 dark:text-stone-400 mt-1 flex items-center gap-1">
                <Check size={12} className="text-green-500" /> {uploadingVideo.name}
              </p>
            )}
          </div>

          {/* Primary Subtitle */}
          <div>
            <label className="block text-sm font-semibold text-stone-700 dark:text-stone-300 mb-2">
              {language === 'en' ? 'English Subtitle (SRT/VTT)' : 'Englischer Untertitel (SRT/VTT)'}
            </label>
            <input
              type="file"
              accept=".srt,.vtt"
              onChange={(e) => setUploadingPrimarySub(e.target.files[0])}
              className="w-full text-sm text-stone-600 dark:text-stone-400 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-blue-500 file:text-white file:cursor-pointer hover:file:bg-blue-600"
            />
            {uploadingPrimarySub && (
              <p className="text-xs text-stone-600 dark:text-stone-400 mt-1 flex items-center gap-1">
                <Check size={12} className="text-green-500" /> {uploadingPrimarySub.name}
              </p>
            )}
          </div>

          {/* Secondary Subtitle */}
          <div>
            <label className="block text-sm font-semibold text-stone-700 dark:text-stone-300 mb-2">
              {language === 'en' ? 'Translation (SRT/VTT)' : 'Übersetzung (SRT/VTT)'}
            </label>
            <input
              type="file"
              accept=".srt,.vtt"
              onChange={(e) => setUploadingSecondarySub(e.target.files[0])}
              className="w-full text-sm text-stone-600 dark:text-stone-400 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-purple-500 file:text-white file:cursor-pointer hover:file:bg-purple-600"
            />
            {uploadingSecondarySub && (
              <p className="text-xs text-stone-600 dark:text-stone-400 mt-1 flex items-center gap-1">
                <Check size={12} className="text-green-500" /> {uploadingSecondarySub.name}
              </p>
            )}
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
    </div>
  );
}

export default VideoPlayerPage;

