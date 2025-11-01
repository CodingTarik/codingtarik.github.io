import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, RotateCcw, Gauge, X } from 'lucide-react';

function VideoPlayer({ videoUrl, onClose }) {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [playbackSpeed, setPlaybackSpeed] = useState(1.0);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const speeds = [0.25, 0.5, 0.75, 1.0, 1.5, 2.0];

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const updateTime = () => setCurrentTime(video.currentTime);
    const updateDuration = () => setDuration(video.duration);

    video.addEventListener('timeupdate', updateTime);
    video.addEventListener('loadedmetadata', updateDuration);

    return () => {
      video.removeEventListener('timeupdate', updateTime);
      video.removeEventListener('loadedmetadata', updateDuration);
    };
  }, []);

  const togglePlay = () => {
    const video = videoRef.current;
    if (isPlaying) {
      video.pause();
    } else {
      video.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleSpeedChange = (speed) => {
    setPlaybackSpeed(speed);
    if (videoRef.current) {
      videoRef.current.playbackRate = speed;
    }
  };

  const handleSeek = (e) => {
    const video = videoRef.current;
    if (video) {
      const percent = e.target.value / 100;
      video.currentTime = percent * duration;
      setCurrentTime(video.currentTime);
    }
  };

  const resetVideo = () => {
    const video = videoRef.current;
    if (video) {
      video.currentTime = 0;
      setCurrentTime(0);
    }
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const progress = duration > 0 ? (currentTime / duration) * 100 : 0;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4">
      <div className="bg-stone-900 rounded-lg shadow-xl max-w-4xl w-full">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-stone-700">
          <h3 className="text-xl font-bold text-white">
            📹 Video Playback
          </h3>
          <button
            onClick={onClose}
            className="text-stone-400 hover:text-white transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        {/* Video */}
        <div className="p-4">
          <video
            ref={videoRef}
            src={videoUrl}
            className="w-full rounded-lg"
            onEnded={() => setIsPlaying(false)}
          />
        </div>

        {/* Controls */}
        <div className="p-4 border-t border-stone-700">
          {/* Progress Bar */}
          <div className="mb-4">
            <input
              type="range"
              min="0"
              max="100"
              value={progress}
              onChange={handleSeek}
              className="w-full h-2 bg-stone-700 rounded-lg appearance-none cursor-pointer accent-teal-500"
            />
            <div className="flex justify-between text-sm text-stone-400 mt-1">
              <span>{formatTime(currentTime)}</span>
              <span>{formatTime(duration)}</span>
            </div>
          </div>

          {/* Playback Controls */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <button
                onClick={togglePlay}
                className="bg-teal-500 hover:bg-teal-600 text-white font-semibold py-2 px-6 rounded-lg transition-colors flex items-center gap-2"
              >
                {isPlaying ? <Pause size={20} /> : <Play size={20} />}
                {isPlaying ? 'Pause' : 'Play'}
              </button>

              <button
                onClick={resetVideo}
                className="bg-stone-700 hover:bg-stone-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors"
                title="Restart"
              >
                <RotateCcw size={20} />
              </button>
            </div>

            {/* Speed Controls */}
            <div className="flex items-center gap-2">
              <Gauge size={20} className="text-stone-400" />
              <span className="text-sm text-stone-400 mr-2">Speed:</span>
              {speeds.map(speed => (
                <button
                  key={speed}
                  onClick={() => handleSpeedChange(speed)}
                  className={`px-3 py-1 rounded-lg font-semibold text-sm transition-all ${
                    playbackSpeed === speed
                      ? 'bg-orange-500 text-white'
                      : 'bg-stone-700 text-stone-300 hover:bg-stone-600'
                  }`}
                >
                  {speed}x
                </button>
              ))}
            </div>
          </div>

          {/* Speed Info */}
          <div className="mt-4 text-center">
            {playbackSpeed < 1 && (
              <div className="text-orange-400 text-sm font-semibold">
                🐌 Slow Motion: {playbackSpeed}x
              </div>
            )}
            {playbackSpeed > 1 && (
              <div className="text-teal-400 text-sm font-semibold">
                ⚡ Fast Forward: {playbackSpeed}x
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default VideoPlayer;

