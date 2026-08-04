import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Mic, Camera, ArrowLeft, X, MonitorSmartphone, ShieldCheck, Activity,
  Sparkles, ChevronDown, Check, Gauge, Video, RefreshCw, Shapes
} from 'lucide-react';

/* ─── Shared UI helpers ──────────────────────────────────────────── */
const GlassCard = ({ children, className = '' }) => (
  <div className={`relative rounded-3xl bg-white/[0.045] backdrop-blur-xl border border-white/10 shadow-2xl shadow-black/20 overflow-hidden ${className}`}>
    {children}
  </div>
);

const gradientRing = 'from-cyan-400 via-sky-500 to-indigo-600';

const StatusChip = ({ tone, children }) => {
  const tones = {
    active: 'bg-emerald-500/15 text-emerald-300 border-emerald-400/30',
    idle: 'bg-white/5 text-slate-400 border-white/10',
    error: 'bg-rose-500/15 text-rose-300 border-rose-400/30',
  };
  return (
    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border ${tones[tone]}`}>
      <span className={`w-1.5 h-1.5 rounded-full ${tone === 'active' ? 'bg-emerald-400 animate-pulse' : tone === 'error' ? 'bg-rose-400' : 'bg-slate-500'}`} />
      {children}
    </span>
  );
};

const PillButton = ({ onClick, children, variant = 'ghost', className = '' }) => {
  const base = 'inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 active:scale-95';
  const styles = {
    primary: 'bg-gradient-to-r from-cyan-500 to-indigo-600 text-white shadow-lg shadow-cyan-500/30 hover:brightness-110',
    danger: 'bg-rose-500/90 text-white shadow-lg shadow-rose-500/30 hover:bg-rose-600',
    ghost: 'bg-white/5 text-slate-200 border border-white/10 hover:bg-white/10 hover:border-white/20',
    subtle: 'bg-white/10 text-white border border-white/10 hover:bg-white/20',
  };
  return (
    <button onClick={onClick} className={`${base} ${styles[variant]} ${className}`}>
      {children}
    </button>
  );
};

const DeviceSelect = ({ devices, value, onChange, kind }) => (
  <div className="relative">
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="appearance-none pl-10 pr-9 py-2.5 bg-white/5 border border-white/10 text-slate-200 rounded-xl text-sm font-medium outline-none focus:border-cyan-400/50 focus:ring-2 focus:ring-cyan-500/20 transition-all w-full sm:w-64 cursor-pointer"
    >
      {devices.map((d, i) => (
        <option key={d.deviceId} value={d.deviceId} className="bg-slate-900">
          {d.label || `${kind} ${i + 1}`}
        </option>
      ))}
    </select>
    {kind === 'microphone' ? (
      <Mic size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
    ) : (
      <Video size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
    )}
    <ChevronDown size={15} className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
  </div>
);

/* ─── Animated EQ bars behind the hero visual ────────────────────── */
const EqualizerBars = ({ active }) => (
  <div className="flex items-end gap-1.5 h-16">
    {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((i) => (
      <motion.div
        key={i}
        className={`w-2.5 rounded-full ${gradientRing} bg-gradient-to-t`}
        animate={
          active
            ? { height: [12, 40 + (i % 5) * 10, 18, 50 + (i % 4) * 8, 24] }
            : { height: 10 }
        }
        transition={active ? { duration: 0.6 + (i % 4) * 0.12, repeat: Infinity, repeatType: 'mirror', ease: 'easeInOut' } : {}}
        style={{ height: active ? 24 : 10 }}
      />
    ))}
  </div>
);

/* ─── Microphone Test Panel ─────────────────────────────────────── */
function MicTestPanel() {
  const streamRef = useRef(null);
  const analyserRef = useRef(null);
  const animRef = useRef(null);
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState('');
  const [devices, setDevices] = useState([]);
  const [selectedDevice, setSelectedDevice] = useState('');
  const [micInfo, setMicInfo] = useState(null);
  const [volume, setVolume] = useState(0);
  const [peakVolume, setPeakVolume] = useState(0);
  const [visualMode, setVisualMode] = useState('bars');
  const dataArrayRef = useRef(null);

  const enumerateDevices = useCallback(async () => {
    try {
      const allDevices = await navigator.mediaDevices.enumerateDevices();
      const audioDevices = allDevices.filter((d) => d.kind === 'audioinput');
      setDevices(audioDevices);
      if (audioDevices.length > 0 && !selectedDevice) {
        setSelectedDevice(audioDevices[0].deviceId);
      }
    } catch { /* ignore */ }
  }, [selectedDevice]);

  const startMic = useCallback(async (deviceId) => {
    setStatus('requesting');
    setError('');
    setPeakVolume(0);
    if (streamRef.current) streamRef.current.getTracks().forEach((t) => t.stop());
    if (animRef.current) cancelAnimationFrame(animRef.current);

    try {
      const constraints = {
        audio: deviceId
          ? { deviceId: { exact: deviceId }, echoCancellation: false, noiseSuppression: false, autoGainControl: false }
          : { echoCancellation: false, noiseSuppression: false, autoGainControl: false },
        video: false,
      };
      const stream = await navigator.mediaDevices.getUserMedia(constraints);
      streamRef.current = stream;

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

      const draw = () => {
        analyser.getByteFrequencyData(dataArray);
        let sum = 0;
        for (let i = 0; i < bufferLength; i++) sum += dataArray[i];
        const avg = sum / bufferLength;
        const normalised = Math.min(100, Math.round((avg / 255) * 100 * 2.5));
        setVolume(normalised);
        setPeakVolume((prev) => Math.max(prev, normalised));

        const canvas = canvasRef.current;
        if (canvas) {
          const ctx = canvas.getContext('2d');
          const width = canvas.width;
          const height = canvas.height;
          ctx.clearRect(0, 0, width, height);

          const grad = ctx.createLinearGradient(0, height, 0, 0);
          grad.addColorStop(0, '#22d3ee');
          grad.addColorStop(0.5, '#3b82f6');
          grad.addColorStop(1, '#a855f7');

          if (visualMode === 'bars') {
            const barWidth = (width / bufferLength) * 2;
            let x = 0;
            for (let i = 0; i < bufferLength; i++) {
              const barHeight = (dataArray[i] / 255) * height;
              ctx.fillStyle = grad;
              ctx.globalAlpha = 0.55 + (dataArray[i] / 255) * 0.45;
              ctx.fillRect(x, height - barHeight, barWidth - 1, barHeight);
              x += barWidth;
            }
            ctx.globalAlpha = 1;
          } else {
            analyser.getByteTimeDomainData(dataArray);
            ctx.lineWidth = 2.5;
            ctx.strokeStyle = grad;
            ctx.lineJoin = 'round';
            ctx.shadowBlur = 12;
            ctx.shadowColor = '#22d3ee';
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
            ctx.shadowBlur = 0;
          }
        }
        animRef.current = requestAnimationFrame(draw);
      };
      draw();
    } catch (err) {
      setStatus('error');
      if (err.name === 'NotAllowedError') setError('Microphone access denied. Please allow microphone permission in your browser.');
      else if (err.name === 'NotFoundError') setError('No microphone found. Please connect a microphone.');
      else setError(`Microphone error: ${err.message}`);
    }
  }, [enumerateDevices, visualMode]);

  const stopMic = useCallback(() => {
    if (animRef.current) { cancelAnimationFrame(animRef.current); animRef.current = null; }
    if (streamRef.current) { streamRef.current.getTracks().forEach((t) => t.stop()); streamRef.current = null; }
    setStatus('idle');
    setMicInfo(null);
    setVolume(0);
  }, []);

  const switchMic = useCallback((deviceId) => {
    setSelectedDevice(deviceId);
    if (status === 'active') startMic(deviceId);
  }, [status, startMic]);

  useEffect(() => {
    return () => {
      if (animRef.current) cancelAnimationFrame(animRef.current);
      if (streamRef.current) streamRef.current.getTracks().forEach((t) => t.stop());
    };
  }, []);

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

  const getVolumeColor = (vol) => (vol < 30 ? 'from-cyan-400 to-emerald-400' : vol < 65 ? 'from-emerald-400 to-yellow-400' : 'from-yellow-400 to-rose-500');
  const getVolumeLabel = (vol) => (vol === 0 ? 'Silent' : vol < 15 ? 'Very Quiet' : vol < 30 ? 'Quiet' : vol < 50 ? 'Normal' : vol < 70 ? 'Loud' : 'Very Loud');

  return (
    <div className="space-y-6">
      {/* Header row */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex flex-wrap items-center gap-3">
          {status !== 'active' ? (
            <PillButton onClick={() => startMic(selectedDevice)} variant="primary" className={status === 'requesting' ? 'opacity-70' : ''}>
              <Mic size={18} /> {status === 'requesting' ? 'Starting...' : 'Start Microphone'}
            </PillButton>
          ) : (
            <div className="flex flex-wrap items-center gap-2">
              <PillButton onClick={stopMic} variant="danger"><X size={18} /> Stop</PillButton>
              <PillButton onClick={() => setVisualMode((m) => (m === 'bars' ? 'waveform' : 'bars'))} variant="subtle">
                <Shapes size={16} /> {visualMode === 'bars' ? 'Waveform' : 'Frequency'}
              </PillButton>
            </div>
          )}
          {devices.length > 1 && (
            <DeviceSelect devices={devices} value={selectedDevice} onChange={switchMic} kind="microphone" />
          )}
        </div>
        <StatusChip tone={status === 'active' ? 'active' : status === 'error' ? 'error' : 'idle'}>
          {status === 'active' ? 'Live' : status === 'error' ? 'Error' : 'Ready'}
        </StatusChip>
      </div>

      {status === 'error' && (
        <div className="p-4 rounded-2xl bg-rose-500/10 border border-rose-400/30 text-rose-200 text-sm flex items-start gap-3">
          <X size={18} className="mt-0.5 shrink-0" /> {error}
        </div>
      )}

      {/* Visualization */}
      <GlassCard>
        <div ref={containerRef} className="relative h-60 flex items-center justify-center">
          <canvas ref={canvasRef} className={status === 'active' ? 'block absolute inset-0 w-full h-full' : 'hidden'} />

          {status === 'idle' && (
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 text-slate-400">
              <motion.div animate={{ y: [0, -8, 0] }} transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }} className="relative">
                <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-cyan-500/20 to-indigo-600/20 border border-white/10 flex items-center justify-center">
                  <Mic size={36} className="text-cyan-300" />
                </div>
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2"><EqualizerBars active={false} /></div>
              </motion.div>
              <div className="text-center">
                <p className="text-lg font-semibold text-white">Microphone ready</p>
                <p className="text-sm text-slate-400 mt-1">100% lokal – nichts wird aufgezeichnet oder übertragen</p>
              </div>
            </div>
          )}

          {status === 'requesting' && (
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 text-slate-300">
              <motion.div animate={{ scale: [1, 1.15, 1] }} transition={{ repeat: Infinity, duration: 1.1 }} className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500 to-indigo-600 flex items-center justify-center shadow-lg shadow-cyan-500/30">
                <Mic size={28} className="text-white" />
              </motion.div>
              <EqualizerBars active />
              <p className="text-sm text-slate-300">Access wird angefordert…</p>
            </div>
          )}
        </div>
      </GlassCard>

      {/* Volume + Info */}
      {status === 'active' && (
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {/* Volume meter */}
          <GlassCard className="p-6">
            <div className="flex items-center justify-between mb-5">
              <h4 className="text-sm font-bold text-slate-200 flex items-center gap-2"><Gauge size={16} className="text-cyan-400" /> Lautstärke</h4>
              <span className={`text-lg font-black font-mono ${volume < 30 ? 'text-cyan-300' : volume < 65 ? 'text-yellow-300' : 'text-rose-400'}`}>
                {volume}<span className="text-sm opacity-60">%</span>
              </span>
            </div>

            <div className="relative h-8 bg-white/5 rounded-2xl overflow-hidden mb-5">
              <div className="absolute inset-0 flex gap-0.5" />
              <motion.div
                className={`h-full bg-gradient-to-r ${getVolumeColor(volume)} rounded-2xl`}
                animate={{ width: `${volume}%` }}
                transition={{ duration: 0.05 }}
              />
              {peakVolume > 0 && (
                <div className="absolute top-0 bottom-0 w-1 bg-white/90 shadow-[0_0_10px_rgba(255,255,255,0.8)]" style={{ left: `${peakVolume}%` }} />
              )}
            </div>

            <div className="flex items-center justify-between text-sm mb-5">
              <span className="text-slate-400">{getVolumeLabel(volume)}</span>
              <span className="text-xs text-slate-500">Peak: {peakVolume}%</span>
            </div>

            <div className="flex gap-1">
              {Array.from({ length: 30 }).map((_, i) => {
                const threshold = (i / 30) * 100;
                const active = volume >= threshold;
                return (
                  <motion.div
                    key={i}
                    animate={{ scaleY: active ? 1 : 0.35, opacity: active ? 1 : 0.25 }}
                    transition={{ duration: 0.05 }}
                    className={`flex-1 h-5 rounded-md bg-gradient-to-t ${i < 10 ? 'from-cyan-500 to-emerald-400' : i < 20 ? 'from-yellow-500 to-yellow-300' : 'from-rose-500 to-rose-400'}`}
                    style={{ opacity: active ? 1 : 0.2 }}
                  />
                );
              })}
            </div>
          </GlassCard>

          {/* Mic info */}
          <GlassCard className="p-6">
            <h4 className="text-sm font-bold text-slate-200 flex items-center gap-2 mb-5"><Activity size={16} className="text-cyan-400" /> Mikrofon-Info</h4>
            {micInfo && (
              <div className="space-y-3 text-sm">
                <InfoRow label="Gerät" value={micInfo.deviceLabel} />
                <InfoRow label="Abtastrate" value={`${micInfo.sampleRate} Hz`} mono />
                <InfoRow label="Kanäle" value={`${micInfo.channelCount}`} mono />
                <InfoRow label="Echo-Löschung" value={micInfo.echoCancellation ? 'An' : 'Aus'} tone={micInfo.echoCancellation ? 'warn' : 'ok'} />
                <InfoRow label="Rauschunterdr." value={micInfo.noiseSuppression ? 'An' : 'Aus'} tone={micInfo.noiseSuppression ? 'warn' : 'ok'} />
              </div>
            )}
            <div className="mt-5 p-3 rounded-2xl bg-gradient-to-r from-cyan-500/10 to-indigo-500/10 border border-cyan-400/20 text-xs text-cyan-200/90 flex items-start gap-2">
              <Sparkles size={14} className="mt-0.5 shrink-0" /> Sprich, klatsch oder schnipp – Echo-Löschung & Rauschunterdrückung sind für präzises Testen deaktiviert.
            </div>
          </GlassCard>
        </motion.div>
      )}
    </div>
  );
}

const InfoRow = ({ label, value, mono, tone }) => (
  <div className="flex justify-between items-center gap-4 py-1">
    <span className="text-slate-400">{label}</span>
    <span className={`${mono ? 'font-mono' : ''} font-medium text-slate-100 text-right max-w-[60%] truncate ${tone === 'warn' ? 'text-yellow-300' : tone === 'ok' ? 'text-cyan-300' : ''}`}>
      {value}
    </span>
  </div>
);

/* ─── Webcam Test Panel ─────────────────────────────────────────── */
function WebcamTestPanel() {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const streamRef = useRef(null);
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState('');
  const [devices, setDevices] = useState([]);
  const [selectedDevice, setSelectedDevice] = useState('');
  const [videoInfo, setVideoInfo] = useState(null);
  const [mirrored, setMirrored] = useState(true);
  const [screenshot, setScreenshot] = useState(null);
  const [fps, setFps] = useState(0);
  const fpsRef = useRef({ frames: 0, last: Date.now() });

  const enumerateDevices = useCallback(async () => {
    try {
      const allDevices = await navigator.mediaDevices.enumerateDevices();
      const videoDevices = allDevices.filter((d) => d.kind === 'videoinput');
      setDevices(videoDevices);
      if (videoDevices.length > 0 && !selectedDevice) setSelectedDevice(videoDevices[0].deviceId);
    } catch { /* ignore */ }
  }, [selectedDevice]);

  const startWebcam = useCallback(async (deviceId) => {
    setStatus('requesting');
    setError('');
    setScreenshot(null);
    if (streamRef.current) streamRef.current.getTracks().forEach((t) => t.stop());
    try {
      const constraints = {
        video: deviceId ? { deviceId: { exact: deviceId }, width: { ideal: 1920 }, height: { ideal: 1080 } } : { width: { ideal: 1920 }, height: { ideal: 1080 } },
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
      if (err.name === 'NotAllowedError') setError('Camera access denied. Please allow camera permission in your browser.');
      else if (err.name === 'NotFoundError') setError('No camera found. Please connect a webcam.');
      else setError(`Camera error: ${err.message}`);
    }
  }, [enumerateDevices]);

  const stopWebcam = useCallback(() => {
    if (streamRef.current) { streamRef.current.getTracks().forEach((t) => t.stop()); streamRef.current = null; }
    if (videoRef.current) videoRef.current.srcObject = null;
    setStatus('idle');
    setVideoInfo(null);
    setFps(0);
  }, []);

  const switchCamera = useCallback((deviceId) => {
    setSelectedDevice(deviceId);
    if (status === 'active') startWebcam(deviceId);
  }, [status, startWebcam]);

  const takeScreenshot = useCallback(() => {
    if (!videoRef.current || !canvasRef.current) return;
    const video = videoRef.current;
    const canvas = canvasRef.current;
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    const ctx = canvas.getContext('2d');
    if (mirrored) { ctx.translate(canvas.width, 0); ctx.scale(-1, 1); }
    ctx.drawImage(video, 0, 0);
    setScreenshot(canvas.toDataURL('image/png'));
  }, [mirrored]);

  useEffect(() => {
    if (status !== 'active') return;
    let animId;
    const countFrame = () => {
      fpsRef.current.frames++;
      const now = Date.now();
      if (now - fpsRef.current.last >= 1000) { setFps(fpsRef.current.frames); fpsRef.current.frames = 0; fpsRef.current.last = now; }
      animId = requestAnimationFrame(countFrame);
    };
    animId = requestAnimationFrame(countFrame);
    return () => cancelAnimationFrame(animId);
  }, [status]);

  useEffect(() => {
    return () => { if (streamRef.current) streamRef.current.getTracks().forEach((t) => t.stop()); };
  }, []);

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex flex-wrap items-center gap-3">
          {status !== 'active' ? (
            <PillButton onClick={() => startWebcam(selectedDevice)} variant="primary" className={status === 'requesting' ? 'opacity-70' : ''}>
              <Camera size={18} /> {status === 'requesting' ? 'Starting...' : 'Start Webcam'}
            </PillButton>
          ) : (
            <div className="flex flex-wrap items-center gap-2">
              <PillButton onClick={stopWebcam} variant="danger"><X size={18} /> Stop</PillButton>
              <PillButton onClick={takeScreenshot} variant="subtle"><Camera size={16} /> Screenshot</PillButton>
              <PillButton onClick={() => setMirrored((m) => !m)} variant={mirrored ? 'subtle' : 'ghost'}>
                <RefreshCw size={16} /> Spiegeln {mirrored ? 'An' : 'Aus'}
              </PillButton>
            </div>
          )}
          {devices.length > 1 && <DeviceSelect devices={devices} value={selectedDevice} onChange={switchCamera} kind="camera" />}
        </div>
        <StatusChip tone={status === 'active' ? 'active' : status === 'error' ? 'error' : 'idle'}>
          {status === 'active' ? 'Live' : status === 'error' ? 'Error' : 'Ready'}
        </StatusChip>
      </div>

      {status === 'error' && (
        <div className="p-4 rounded-2xl bg-rose-500/10 border border-rose-400/30 text-rose-200 text-sm flex items-start gap-3">
          <X size={18} className="mt-0.5 shrink-0" /> {error}
        </div>
      )}

      {/* Video */}
      <GlassCard>
        <div className="relative aspect-video bg-black/60 flex items-center justify-center overflow-hidden">
          <video
            ref={videoRef}
            autoPlay
            playsInline
            muted
            className={`w-full h-full object-contain ${status === 'active' ? 'block' : 'hidden'}`}
            style={{ transform: mirrored ? 'scaleX(-1)' : 'none' }}
          />
          <canvas ref={canvasRef} className="hidden" />

          {status === 'idle' && (
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 text-slate-400">
              <motion.div animate={{ y: [0, -8, 0] }} transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }} className="relative">
                <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-indigo-500/20 to-fuchsia-600/20 border border-white/10 flex items-center justify-center">
                  <Video size={36} className="text-indigo-300" />
                </div>
              </motion.div>
              <div className="text-center">
                <p className="text-lg font-semibold text-white">Webcam bereit</p>
                <p className="text-sm text-slate-400 mt-1">Dein Kamerafeed bleibt 100% lokal</p>
              </div>
            </div>
          )}

          {status === 'requesting' && (
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 text-slate-300">
              <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1.2, ease: 'linear' }} className="w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-500 to-fuchsia-600 flex items-center justify-center shadow-lg shadow-indigo-500/30">
                <Camera size={28} className="text-white" />
              </motion.div>
              <p className="text-sm">Kamera-Zugriff wird angefordert…</p>
            </div>
          )}

          {/* Overlay info chips */}
          {status === 'active' && videoInfo && (
            <div className="absolute bottom-3 left-3 right-3 flex flex-wrap gap-2">
              <span className="px-2.5 py-1 bg-black/60 backdrop-blur-md text-white text-xs rounded-lg font-mono border border-white/10">{videoInfo.width}x{videoInfo.height}</span>
              {videoInfo.frameRate && <span className="px-2.5 py-1 bg-black/60 backdrop-blur-md text-white text-xs rounded-lg font-mono border border-white/10">{videoInfo.frameRate} fps (settings)</span>}
              <span className="px-2.5 py-1 bg-black/60 backdrop-blur-md text-cyan-300 text-xs rounded-lg font-mono border border-white/10">{fps} fps (rendered)</span>
              <span className="px-2.5 py-1 bg-black/60 backdrop-blur-md text-white text-xs rounded-lg font-mono border border-white/10 truncate max-w-[200px]">{videoInfo.deviceLabel}</span>
            </div>
          )}

          {/* LIVE badge */}
          {status === 'active' && (
            <div className="absolute top-3 left-3 flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-500/20 border border-rose-400/30 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-rose-400 animate-pulse" />
              <span className="text-[11px] font-bold text-rose-200 uppercase tracking-wider">LIVE</span>
            </div>
          )}
        </div>
      </GlassCard>

      {/* Screenshot preview */}
      <AnimatePresence>
        {screenshot && (
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 12 }} className="mt-5">
            <GlassCard className="p-4">
              <div className="flex items-center justify-between mb-3">
                <h4 className="text-sm font-bold text-slate-200 flex items-center gap-2"><Check size={16} className="text-emerald-400" /> Screenshot</h4>
                <div className="flex gap-2">
                  <a href={screenshot} download={`webcam-screenshot-${Date.now()}.png`} className="px-3 py-1.5 bg-gradient-to-r from-cyan-500 to-indigo-600 text-white rounded-lg text-xs font-semibold hover:brightness-110 transition-all">
                    Download
                  </a>
                  <button onClick={() => setScreenshot(null)} className="px-3 py-1.5 bg-white/5 border border-white/10 text-slate-300 rounded-lg text-xs font-semibold hover:bg-white/10 transition-all">
                    Schließen
                  </button>
                </div>
              </div>
              <img src={screenshot} alt="Screenshot" className="w-full max-w-md rounded-xl mx-auto border border-white/10" />
            </GlassCard>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ─── Main Device Test Component ────────────────────────────────── */
export default function DeviceTest() {
  const [activeTab, setActiveTab] = useState('mic');

  const tabs = [
    { id: 'mic', label: 'Mikrofon', icon: Mic },
    { id: 'webcam', label: 'Webcam', icon: Camera },
  ];

  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-950">
      {/* ambient background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 -left-24 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 -right-24 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-3xl" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-fuchsia-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 py-10 md:py-14">
        {/* Header */}
        <div className="mb-9">
          <a href="/tools" className="inline-flex items-center gap-1.5 text-sm text-slate-400 hover:text-white transition-colors mb-6 group">
            <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-0.5" /> Tools
          </a>

          <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-6">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-400 via-sky-500 to-indigo-600 flex items-center justify-center shadow-xl shadow-indigo-500/30 relative">
              <MonitorSmartphone size={26} className="text-white" />
              <span className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-emerald-400 border-2 border-slate-950" />
            </div>
            <div>
              <h1 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight">Mic & Webcam Test</h1>
              <p className="text-sm text-slate-400 mt-1 flex items-center gap-1.5">
                <ShieldCheck size={14} className="text-emerald-400" /> 100% lokal – nichts wird aufgezeichnet, gespeichert oder übertragen.
              </p>
            </div>
          </div>

          {/* Tab switcher */}
          <div className="flex gap-1.5 p-1.5 bg-white/5 border border-white/10 rounded-2xl w-fit">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`relative flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm transition-all ${
                    isActive ? 'text-white' : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  {isActive && (
                    <motion.div layoutId="dtab" className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 shadow-lg shadow-indigo-500/30" />
                  )}
                  <Icon size={17} className="relative z-10" />
                  <span className="relative z-10">{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
          >
            {activeTab === 'mic' ? <MicTestPanel /> : <WebcamTestPanel />}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
