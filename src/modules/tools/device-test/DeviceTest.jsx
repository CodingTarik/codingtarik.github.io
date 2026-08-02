import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mic, Camera, ArrowLeft, X, MonitorSmartphone } from 'lucide-react';

// ─── Microphone Test Panel ───────────────────────────────────────────
function MicTestPanel() {
  const streamRef = useRef(null);
  const analyserRef = useRef(null);
  const animRef = useRef(null);
  const canvasRef = useRef(null);
  const [status, setStatus] = useState('idle'); // idle, requesting, active, error
  const [error, setError] = useState('');
  const [devices, setDevices] = useState([]);
  const [selectedDevice, setSelectedDevice] = useState('');
  const [micInfo, setMicInfo] = useState(null);
  const [volume, setVolume] = useState(0);
  const [peakVolume, setPeakVolume] = useState(0);
  const [visualMode, setVisualMode] = useState('bars'); // bars, waveform
  const dataArrayRef = useRef(null);

  // Enumerate audio devices
  const enumerateDevices = useCallback(async () => {
    try {
      const allDevices = await navigator.mediaDevices.enumerateDevices();
      const audioDevices = allDevices.filter((d) => d.kind === 'audioinput');
      setDevices(audioDevices);
      if (audioDevices.length > 0 && !selectedDevice) {
        setSelectedDevice(audioDevices[0].deviceId);
      }
    } catch {
      // ignore
    }
  }, [selectedDevice]);

  // Start microphone
  const startMic = useCallback(async (deviceId) => {
    setStatus('requesting');
    setError('');
    setPeakVolume(0);

    // Stop existing stream
    if (streamRef.current) {
      streamRef.current.getTracks().forEach((t) => t.stop());
    }
    if (animRef.current) {
      cancelAnimationFrame(animRef.current);
    }

    try {
      const constraints = {
        audio: deviceId
          ? { deviceId: { exact: deviceId }, echoCancellation: false, noiseSuppression: false, autoGainControl: false }
          : { echoCancellation: false, noiseSuppression: false, autoGainControl: false },
        video: false,
      };
      const stream = await navigator.mediaDevices.getUserMedia(constraints);
      streamRef.current = stream;

      // Set up Web Audio analyser
      const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      const source = audioCtx.createMediaStreamSource(stream);
      const analyser = audioCtx.createAnalyser();
      analyser.fftSize = 256;
      analyser.smoothingTimeConstant = 0.6;
      source.connect(analyser);
      analyserRef.current = analyser;

      const bufferLength = analyser.frequencyBinCount;
      const dataArray = new Uint8Array(bufferLength);
      dataArrayRef.current = dataArray;

      // Get mic info
      const track = stream.getAudioTracks()[0];
      const settings = track.getSettings();
      setMicInfo({
        deviceLabel: track.label,
        sampleRate: settings.sampleRate || audioCtx.sampleRate,
        channelCount: settings.channelCount || 1,
        echoCancellation: settings.echoCancellation,
        noiseSuppression: settings.noiseSuppression,
      });

      await enumerateDevices();
      setStatus('active');

      // Start visualization loop
      const draw = () => {
        analyser.getByteFrequencyData(dataArray);

        // Calculate volume (RMS-like)
        let sum = 0;
        for (let i = 0; i < bufferLength; i++) {
          sum += dataArray[i];
        }
        const avg = sum / bufferLength;
        const normalised = Math.min(100, Math.round((avg / 255) * 100 * 2.5));
        setVolume(normalised);
        setPeakVolume((prev) => Math.max(prev, normalised));

        // Draw on canvas
        const canvas = canvasRef.current;
        if (canvas) {
          const ctx = canvas.getContext('2d');
          const width = canvas.width;
          const height = canvas.height;
          ctx.clearRect(0, 0, width, height);

          if (visualMode === 'bars') {
            // Frequency bars
            const barWidth = (width / bufferLength) * 2;
            let x = 0;
            for (let i = 0; i < bufferLength; i++) {
              const barHeight = (dataArray[i] / 255) * height;
              const hue = 160 + (dataArray[i] / 255) * 40; // teal range
              const lightness = 40 + (dataArray[i] / 255) * 20;
              ctx.fillStyle = `hsl(${hue}, 70%, ${lightness}%)`;
              ctx.fillRect(x, height - barHeight, barWidth - 1, barHeight);
              x += barWidth;
            }
          } else {
            // Waveform
            analyser.getByteTimeDomainData(dataArray);
            ctx.lineWidth = 2;
            ctx.strokeStyle = '#14b8a6';
            ctx.beginPath();
            const sliceWidth = width / bufferLength;
            let x = 0;
            for (let i = 0; i < bufferLength; i++) {
              const v = dataArray[i] / 128.0;
              const y = (v * height) / 2;
              if (i === 0) ctx.moveTo(x, y);
              else ctx.lineTo(x, y);
              x += sliceWidth;
            }
            ctx.lineTo(width, height / 2);
            ctx.stroke();
          }
        }

        animRef.current = requestAnimationFrame(draw);
      };
      draw();
    } catch (err) {
      setStatus('error');
      if (err.name === 'NotAllowedError') {
        setError('Microphone access denied. Please allow microphone permission in your browser.');
      } else if (err.name === 'NotFoundError') {
        setError('No microphone found. Please connect a microphone.');
      } else {
        setError(`Microphone error: ${err.message}`);
      }
    }
  }, [enumerateDevices, visualMode]);

  // Stop mic
  const stopMic = useCallback(() => {
    if (animRef.current) {
      cancelAnimationFrame(animRef.current);
      animRef.current = null;
    }
    if (streamRef.current) {
      streamRef.current.getTracks().forEach((t) => t.stop());
      streamRef.current = null;
    }
    setStatus('idle');
    setMicInfo(null);
    setVolume(0);
  }, []);

  // Switch mic
  const switchMic = useCallback(
    (deviceId) => {
      setSelectedDevice(deviceId);
      if (status === 'active') {
        startMic(deviceId);
      }
    },
    [status, startMic]
  );

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (animRef.current) cancelAnimationFrame(animRef.current);
      if (streamRef.current) {
        streamRef.current.getTracks().forEach((t) => t.stop());
      }
    };
  }, []);

  // Resize canvas to container
  const containerRef = useRef(null);
  useEffect(() => {
    const resize = () => {
      if (canvasRef.current && containerRef.current) {
        canvasRef.current.width = containerRef.current.clientWidth;
        canvasRef.current.height = containerRef.current.clientHeight;
      }
    };
    resize();
    window.addEventListener('resize', resize);
    return () => window.removeEventListener('resize', resize);
  }, [status]);

  const getVolumeColor = (vol) => {
    if (vol < 30) return 'from-teal-500 to-emerald-500';
    if (vol < 65) return 'from-emerald-500 to-yellow-500';
    return 'from-yellow-500 to-red-500';
  };

  const getVolumeLabel = (vol) => {
    if (vol === 0) return 'Silent';
    if (vol < 15) return 'Very Quiet';
    if (vol < 30) return 'Quiet';
    if (vol < 50) return 'Normal';
    if (vol < 70) return 'Loud';
    return 'Very Loud';
  };

  return (
    <div className="space-y-6">
      {/* Controls */}
      <div className="flex flex-wrap items-center gap-3">
        {status !== 'active' ? (
          <button
            onClick={() => startMic(selectedDevice)}
            disabled={status === 'requesting'}
            className="flex items-center gap-2 px-5 py-2.5 bg-teal-600 hover:bg-teal-700 disabled:bg-stone-400 text-white rounded-xl font-medium transition-colors"
          >
            <Mic size={18} />
            {status === 'requesting' ? 'Starting...' : 'Start Microphone'}
          </button>
        ) : (
          <>
            <button
              onClick={stopMic}
              className="flex items-center gap-2 px-5 py-2.5 bg-red-500 hover:bg-red-600 text-white rounded-xl font-medium transition-colors"
            >
              <X size={18} /> Stop
            </button>
            <button
              onClick={() => setVisualMode((m) => (m === 'bars' ? 'waveform' : 'bars'))}
              className="flex items-center gap-2 px-4 py-2.5 bg-stone-200 dark:bg-stone-700 hover:bg-stone-300 dark:hover:bg-stone-600 text-stone-700 dark:text-stone-200 rounded-xl font-medium text-sm transition-colors"
            >
              {visualMode === 'bars' ? 'Waveform' : 'Bars'}
            </button>
          </>
        )}

        {/* Device selector */}
        {devices.length > 1 && (
          <select
            value={selectedDevice}
            onChange={(e) => switchMic(e.target.value)}
            className="px-3 py-2.5 bg-stone-200 dark:bg-stone-700 text-stone-700 dark:text-stone-200 rounded-xl text-sm font-medium border-none outline-none"
          >
            {devices.map((d, i) => (
              <option key={d.deviceId} value={d.deviceId}>
                {d.label || `Microphone ${i + 1}`}
              </option>
            ))}
          </select>
        )}
      </div>

      {/* Error */}
      {status === 'error' && (
        <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl p-4 text-red-700 dark:text-red-300 text-sm">
          {error}
        </div>
      )}

      {/* Visualization */}
      <div
        ref={containerRef}
        className="relative bg-stone-900 rounded-2xl overflow-hidden"
        style={{ height: 240 }}
      >
        <canvas ref={canvasRef} className={status === 'active' ? 'block' : 'hidden'} />

        {status === 'idle' && (
          <div className="absolute inset-0 flex flex-col items-center justify-center text-stone-400">
            <Mic size={64} className="mb-4 opacity-30" />
            <p className="text-lg font-medium">Click "Start Microphone" to begin</p>
            <p className="text-sm mt-1 opacity-60">Your audio stays 100% local — nothing is recorded or sent</p>
          </div>
        )}

        {status === 'requesting' && (
          <div className="absolute inset-0 flex flex-col items-center justify-center text-stone-400">
            <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ repeat: Infinity, duration: 1 }}>
              <Mic size={48} />
            </motion.div>
            <p className="mt-4 text-sm">Requesting microphone access...</p>
          </div>
        )}
      </div>

      {/* Volume meter + info */}
      {status === 'active' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Volume meter */}
          <div className="bg-stone-50 dark:bg-stone-800/50 rounded-2xl border border-stone-200 dark:border-stone-700 p-6">
            <h4 className="text-sm font-semibold text-stone-600 dark:text-stone-300 mb-4">Volume Level</h4>

            {/* Main bar */}
            <div className="h-6 bg-stone-200 dark:bg-stone-700 rounded-full overflow-hidden mb-3 relative">
              <motion.div
                className={`h-full bg-gradient-to-r ${getVolumeColor(volume)} rounded-full`}
                animate={{ width: `${volume}%` }}
                transition={{ duration: 0.05 }}
              />
              {/* Peak marker */}
              {peakVolume > 0 && (
                <div
                  className="absolute top-0 bottom-0 w-0.5 bg-red-500"
                  style={{ left: `${peakVolume}%` }}
                />
              )}
            </div>

            <div className="flex items-center justify-between text-sm">
              <span className="font-mono text-stone-600 dark:text-stone-400">{volume}%</span>
              <span className={`font-medium ${
                volume < 30 ? 'text-teal-600 dark:text-teal-400' :
                volume < 65 ? 'text-yellow-600 dark:text-yellow-400' :
                'text-red-600 dark:text-red-400'
              }`}>
                {getVolumeLabel(volume)}
              </span>
              <span className="text-xs text-stone-400 dark:text-stone-500">Peak: {peakVolume}%</span>
            </div>

            {/* Visual indicator dots */}
            <div className="flex gap-1 mt-4">
              {Array.from({ length: 30 }).map((_, i) => {
                const threshold = (i / 30) * 100;
                const active = volume >= threshold;
                return (
                  <div
                    key={i}
                    className={`flex-1 h-3 rounded-sm transition-colors duration-75 ${
                      active
                        ? i < 10 ? 'bg-teal-500' : i < 20 ? 'bg-yellow-500' : 'bg-red-500'
                        : 'bg-stone-200 dark:bg-stone-700'
                    }`}
                  />
                );
              })}
            </div>
          </div>

          {/* Mic info */}
          <div className="bg-stone-50 dark:bg-stone-800/50 rounded-2xl border border-stone-200 dark:border-stone-700 p-6">
            <h4 className="text-sm font-semibold text-stone-600 dark:text-stone-300 mb-4">Microphone Info</h4>
            {micInfo && (
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-stone-500 dark:text-stone-400">Device</span>
                  <span className="font-medium text-stone-800 dark:text-stone-100 text-right max-w-[60%] truncate">{micInfo.deviceLabel}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-stone-500 dark:text-stone-400">Sample Rate</span>
                  <span className="font-mono font-medium text-stone-800 dark:text-stone-100">{micInfo.sampleRate} Hz</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-stone-500 dark:text-stone-400">Channels</span>
                  <span className="font-mono font-medium text-stone-800 dark:text-stone-100">{micInfo.channelCount}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-stone-500 dark:text-stone-400">Echo Cancellation</span>
                  <span className={`font-medium ${micInfo.echoCancellation ? 'text-yellow-600' : 'text-teal-600 dark:text-teal-400'}`}>
                    {micInfo.echoCancellation ? 'On' : 'Off'}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-stone-500 dark:text-stone-400">Noise Suppression</span>
                  <span className={`font-medium ${micInfo.noiseSuppression ? 'text-yellow-600' : 'text-teal-600 dark:text-teal-400'}`}>
                    {micInfo.noiseSuppression ? 'On' : 'Off'}
                  </span>
                </div>
              </div>
            )}

            <div className="mt-4 p-3 bg-teal-50 dark:bg-teal-900/20 rounded-lg text-xs text-teal-700 dark:text-teal-300">
              Tip: Speak, clap, or snap your fingers to test. The echo cancellation and noise suppression are disabled for accurate testing.
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// ─── Webcam Test Panel ───────────────────────────────────────────────
function WebcamTestPanel() {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const streamRef = useRef(null);
  const [status, setStatus] = useState('idle'); // idle, requesting, active, error
  const [error, setError] = useState('');
  const [devices, setDevices] = useState([]);
  const [selectedDevice, setSelectedDevice] = useState('');
  const [videoInfo, setVideoInfo] = useState(null);
  const [mirrored, setMirrored] = useState(true);
  const [screenshot, setScreenshot] = useState(null);
  const [fps, setFps] = useState(0);
  const fpsRef = useRef({ frames: 0, last: Date.now() });

  // Enumerate devices
  const enumerateDevices = useCallback(async () => {
    try {
      const allDevices = await navigator.mediaDevices.enumerateDevices();
      const videoDevices = allDevices.filter((d) => d.kind === 'videoinput');
      setDevices(videoDevices);
      if (videoDevices.length > 0 && !selectedDevice) {
        setSelectedDevice(videoDevices[0].deviceId);
      }
    } catch {
      // ignore
    }
  }, [selectedDevice]);

  // Start webcam
  const startWebcam = useCallback(async (deviceId) => {
    setStatus('requesting');
    setError('');
    setScreenshot(null);

    // Stop existing stream
    if (streamRef.current) {
      streamRef.current.getTracks().forEach((t) => t.stop());
    }

    try {
      const constraints = {
        video: deviceId
          ? { deviceId: { exact: deviceId }, width: { ideal: 1920 }, height: { ideal: 1080 } }
          : { width: { ideal: 1920 }, height: { ideal: 1080 } },
        audio: false,
      };
      const stream = await navigator.mediaDevices.getUserMedia(constraints);
      streamRef.current = stream;

      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        videoRef.current.onloadedmetadata = () => {
          const track = stream.getVideoTracks()[0];
          const settings = track.getSettings();
          setVideoInfo({
            width: settings.width || videoRef.current.videoWidth,
            height: settings.height || videoRef.current.videoHeight,
            frameRate: settings.frameRate ? Math.round(settings.frameRate) : null,
            deviceLabel: track.label,
          });
        };
      }

      await enumerateDevices();
      setStatus('active');
    } catch (err) {
      setStatus('error');
      if (err.name === 'NotAllowedError') {
        setError('Camera access denied. Please allow camera permission in your browser.');
      } else if (err.name === 'NotFoundError') {
        setError('No camera found. Please connect a webcam.');
      } else {
        setError(`Camera error: ${err.message}`);
      }
    }
  }, [enumerateDevices]);

  // Stop webcam
  const stopWebcam = useCallback(() => {
    if (streamRef.current) {
      streamRef.current.getTracks().forEach((t) => t.stop());
      streamRef.current = null;
    }
    if (videoRef.current) {
      videoRef.current.srcObject = null;
    }
    setStatus('idle');
    setVideoInfo(null);
    setFps(0);
  }, []);

  // Switch camera
  const switchCamera = useCallback(
    (deviceId) => {
      setSelectedDevice(deviceId);
      if (status === 'active') {
        startWebcam(deviceId);
      }
    },
    [status, startWebcam]
  );

  // Take screenshot
  const takeScreenshot = useCallback(() => {
    if (!videoRef.current || !canvasRef.current) return;
    const video = videoRef.current;
    const canvas = canvasRef.current;
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    const ctx = canvas.getContext('2d');
    if (mirrored) {
      ctx.translate(canvas.width, 0);
      ctx.scale(-1, 1);
    }
    ctx.drawImage(video, 0, 0);
    setScreenshot(canvas.toDataURL('image/png'));
  }, [mirrored]);

  // FPS counter
  useEffect(() => {
    if (status !== 'active') return;
    let animId;
    const countFrame = () => {
      fpsRef.current.frames++;
      const now = Date.now();
      if (now - fpsRef.current.last >= 1000) {
        setFps(fpsRef.current.frames);
        fpsRef.current.frames = 0;
        fpsRef.current.last = now;
      }
      animId = requestAnimationFrame(countFrame);
    };
    animId = requestAnimationFrame(countFrame);
    return () => cancelAnimationFrame(animId);
  }, [status]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (streamRef.current) {
        streamRef.current.getTracks().forEach((t) => t.stop());
      }
    };
  }, []);

  return (
    <div className="space-y-6">
      {/* Controls */}
      <div className="flex flex-wrap items-center gap-3">
        {status !== 'active' ? (
          <button
            onClick={() => startWebcam(selectedDevice)}
            disabled={status === 'requesting'}
            className="flex items-center gap-2 px-5 py-2.5 bg-teal-600 hover:bg-teal-700 disabled:bg-stone-400 text-white rounded-xl font-medium transition-colors"
          >
            <Camera size={18} />
            {status === 'requesting' ? 'Starting...' : 'Start Webcam'}
          </button>
        ) : (
          <>
            <button
              onClick={stopWebcam}
              className="flex items-center gap-2 px-5 py-2.5 bg-red-500 hover:bg-red-600 text-white rounded-xl font-medium transition-colors"
            >
              <X size={18} /> Stop
            </button>
            <button
              onClick={takeScreenshot}
              className="flex items-center gap-2 px-5 py-2.5 bg-stone-200 dark:bg-stone-700 hover:bg-stone-300 dark:hover:bg-stone-600 text-stone-700 dark:text-stone-200 rounded-xl font-medium transition-colors"
            >
              Screenshot
            </button>
            <button
              onClick={() => setMirrored((m) => !m)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-medium transition-colors ${
                mirrored
                  ? 'bg-teal-100 dark:bg-teal-900/30 text-teal-700 dark:text-teal-300'
                  : 'bg-stone-200 dark:bg-stone-700 text-stone-600 dark:text-stone-300'
              }`}
            >
              Mirror {mirrored ? 'On' : 'Off'}
            </button>
          </>
        )}

        {/* Device selector */}
        {devices.length > 1 && (
          <select
            value={selectedDevice}
            onChange={(e) => switchCamera(e.target.value)}
            className="px-3 py-2.5 bg-stone-200 dark:bg-stone-700 text-stone-700 dark:text-stone-200 rounded-xl text-sm font-medium border-none outline-none"
          >
            {devices.map((d, i) => (
              <option key={d.deviceId} value={d.deviceId}>
                {d.label || `Camera ${i + 1}`}
              </option>
            ))}
          </select>
        )}
      </div>

      {/* Error */}
      {status === 'error' && (
        <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl p-4 text-red-700 dark:text-red-300 text-sm">
          {error}
        </div>
      )}

      {/* Video */}
      <div className="relative bg-black rounded-2xl overflow-hidden" style={{ minHeight: 300 }}>
        <video
          ref={videoRef}
          autoPlay
          playsInline
          muted
          className={`w-full h-auto ${status === 'active' ? 'block' : 'hidden'}`}
          style={{ transform: mirrored ? 'scaleX(-1)' : 'none' }}
        />
        <canvas ref={canvasRef} className="hidden" />

        {status === 'idle' && (
          <div className="absolute inset-0 flex flex-col items-center justify-center text-stone-400">
            <Camera size={64} className="mb-4 opacity-30" />
            <p className="text-lg font-medium">Click "Start Webcam" to begin</p>
            <p className="text-sm mt-1 opacity-60">Your camera feed stays 100% local</p>
          </div>
        )}

        {status === 'requesting' && (
          <div className="absolute inset-0 flex flex-col items-center justify-center text-stone-400">
            <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}>
              <Camera size={48} />
            </motion.div>
            <p className="mt-4 text-sm">Requesting camera access...</p>
          </div>
        )}

        {/* Info overlay */}
        {status === 'active' && videoInfo && (
          <div className="absolute bottom-3 left-3 right-3 flex flex-wrap gap-2">
            <span className="px-2.5 py-1 bg-black/60 backdrop-blur-sm text-white text-xs rounded-lg font-mono">
              {videoInfo.width}x{videoInfo.height}
            </span>
            {videoInfo.frameRate && (
              <span className="px-2.5 py-1 bg-black/60 backdrop-blur-sm text-white text-xs rounded-lg font-mono">
                {videoInfo.frameRate} fps (settings)
              </span>
            )}
            <span className="px-2.5 py-1 bg-black/60 backdrop-blur-sm text-white text-xs rounded-lg font-mono">
              {fps} fps (rendered)
            </span>
            <span className="px-2.5 py-1 bg-black/60 backdrop-blur-sm text-white text-xs rounded-lg font-mono truncate max-w-[200px]">
              {videoInfo.deviceLabel}
            </span>
          </div>
        )}
      </div>

      {/* Screenshot preview */}
      <AnimatePresence>
        {screenshot && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="bg-stone-50 dark:bg-stone-800/50 rounded-2xl border border-stone-200 dark:border-stone-700 p-4"
          >
            <div className="flex items-center justify-between mb-3">
              <h4 className="text-sm font-semibold text-stone-600 dark:text-stone-300">Screenshot</h4>
              <div className="flex gap-2">
                <a
                  href={screenshot}
                  download={`webcam-screenshot-${Date.now()}.png`}
                  className="text-xs px-3 py-1.5 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors"
                >
                  Download
                </a>
                <button
                  onClick={() => setScreenshot(null)}
                  className="text-xs px-3 py-1.5 bg-stone-200 dark:bg-stone-700 text-stone-600 dark:text-stone-300 rounded-lg hover:bg-stone-300 dark:hover:bg-stone-600 transition-colors"
                >
                  Dismiss
                </button>
              </div>
            </div>
            <img src={screenshot} alt="Screenshot" className="w-full max-w-md rounded-lg mx-auto" />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ─── Main Device Test Component ──────────────────────────────────────
export default function DeviceTest() {
  const [activeTab, setActiveTab] = useState('mic');

  const tabs = [
    { id: 'mic', label: 'Microphone Test', icon: Mic },
    { id: 'webcam', label: 'Webcam Test', icon: Camera },
  ];

  return (
    <div className="min-h-[calc(100vh-64px)] w-full bg-stone-50 dark:bg-stone-900">
      <div className="max-w-5xl mx-auto px-4 py-8 md:py-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <a
            href="/tools"
            className="inline-flex items-center gap-1.5 text-sm text-stone-500 hover:text-stone-700 dark:text-stone-400 dark:hover:text-stone-200 transition-colors mb-4"
          >
            <ArrowLeft size={16} /> Back to Tools
          </a>

          <div className="flex items-center gap-3 mb-2">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-sky-500 to-indigo-600 flex items-center justify-center">
              <MonitorSmartphone size={24} className="text-white" />
            </div>
            <div>
              <h1 className="text-2xl md:text-3xl font-extrabold text-stone-900 dark:text-stone-100">
                Mic & Webcam Test
              </h1>
              <p className="text-sm text-stone-500 dark:text-stone-400">
                Test your microphone and webcam — everything runs 100% locally, nothing is recorded or sent.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Tab Switcher */}
        <div className="flex gap-2 mb-8">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-medium text-sm transition-all ${
                  isActive
                    ? 'bg-gradient-to-r from-sky-500 to-indigo-600 text-white shadow-lg shadow-indigo-500/20'
                    : 'bg-stone-200 dark:bg-stone-800 text-stone-600 dark:text-stone-400 hover:bg-stone-300 dark:hover:bg-stone-700'
                }`}
              >
                <Icon size={18} />
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            {activeTab === 'mic' && <MicTestPanel />}
            {activeTab === 'webcam' && <WebcamTestPanel />}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
