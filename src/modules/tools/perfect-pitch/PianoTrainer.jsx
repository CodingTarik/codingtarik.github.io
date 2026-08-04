import React, { useState, useCallback, useEffect, useRef, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Play, Volume2, Headphones, Layers, Check, Flame, BookOpen, Shuffle,
  Home, Eye, EyeOff, RefreshCw, Music, Trophy, SkipForward, ChevronRight
} from 'lucide-react';

/* ══════════════════════════════════════════════════════════
   DATA & MUSIC THEORY
══════════════════════════════════════════════════════════ */
const NOTE_NAMES_DE = ['C','C#','D','D#','E','F','F#','G','G#','A','B','H'];
const NOTE_NAMES_EN = ['C','C#','D','D#','E','F','F#','G','G#','A','A#','B'];
const DIATONIC = [0,0,1,1,2,3,3,4,4,5,5,6];

const CHORDS = [
  { id:'maj',  de:'Dur',        en:'Major',        short:'dur',  intervals:[0,4,7],    color:'#34d399'},
  { id:'min',  de:'Moll',       en:'Minor',        short:'moll', intervals:[0,3,7],    color:'#60a5fa'},
  { id:'dim',  de:'Vermindert', en:'Diminished',   short:'dim',  intervals:[0,3,6],    color:'#f87171'},
  { id:'aug',  de:'Übermäßig',  en:'Augmented',    short:'aug',  intervals:[0,4,8],    color:'#fb923c'},
  { id:'maj7', de:'Maj7',       en:'Major 7th',    short:'Δ7',   intervals:[0,4,7,11], color:'#a78bfa'},
  { id:'min7', de:'m7',         en:'Minor 7th',    short:'m7',   intervals:[0,3,7,10], color:'#22d3ee'},
  { id:'dom7', de:'Dom7',       en:'Dominant 7th', short:'7',    intervals:[0,4,7,10], color:'#facc15'},
];
const CHORD_SETS = {
  beginner:     ['maj','min'],
  intermediate: ['maj','min','dim','aug'],
  expert:       CHORDS.map(c => c.id),
};

const getMidiInfo = (midi, lang='de') => {
  const pc = ((midi%12)+12)%12;
  const octave = Math.floor(midi/12)-1;
  const name = lang==='de' ? NOTE_NAMES_DE[pc] : NOTE_NAMES_EN[pc];
  const isSharp = [1,3,6,8,10].includes(pc);
  const abs = octave*7 + DIATONIC[pc];
  return { midi, pc, octave, name, isSharp, trebleStep: abs-30, bassStep: abs-18 };
};

/* ══════════════════════════════════════════════════════════
   SESSION GENERATOR — pre-generates all notes for a session
══════════════════════════════════════════════════════════ */
function generateSession(cfg) {
  const sessionClef = cfg.clef === 'both'
    ? (Math.random() > 0.5 ? 'treble' : 'bass')
    : cfg.clef;

  const tasks = [];
  for (let i = 0; i < cfg.notesPerRound; i++) {
    let mode = cfg.mode;
    if (mode === 'mixed') mode = ['note-reading','chord-training','ear-training'][Math.floor(Math.random()*3)];

    if (mode === 'note-reading' || mode === 'ear-training') {
      const isExpert = cfg.difficulty === 'expert';
      const minM = sessionClef==='treble' ? (isExpert?57:60) : (isExpert?36:43);
      const maxM = sessionClef==='treble' ? (isExpert?84:77) : (isExpert?64:60);
      const candidates = [];
      for (let m = minM; m <= maxM; m++) {
        const info = getMidiInfo(m, cfg.lang);
        const step = sessionClef==='bass' ? info.bassStep : info.trebleStep;
        if (cfg.difficulty==='lines'  && step%2!==0) continue;
        if (cfg.difficulty==='spaces' && step%2===0) continue;
        if (cfg.difficulty!=='expert' && info.isSharp) continue;
        candidates.push(m);
      }
      if (!candidates.length) [60,62,64,65,67,69,71].forEach(m => candidates.push(m));
      const midi = candidates[Math.floor(Math.random()*candidates.length)];
      const info = getMidiInfo(midi, cfg.lang);
      tasks.push({ type: mode, midi, name: info.name, clef: sessionClef, staffNotes:[{midi}] });

    } else {
      // chord-training
      const chordIds = CHORD_SETS[cfg.chordLevel] || CHORD_SETS.beginner;
      const chord = CHORDS.find(c => c.id===chordIds[Math.floor(Math.random()*chordIds.length)]);
      const rootMidi = (sessionClef==='treble'?60:43)+Math.floor(Math.random()*7);
      const midis = chord.intervals.map(iv => rootMidi+iv);
      tasks.push({ type:'chord', chord, clef:sessionClef, midis, midi:midis[0], staffNotes:midis.map(m=>({midi:m, color:chord.color})) });
    }
  }
  return tasks;
}

/* ══════════════════════════════════════════════════════════
   SCROLLING STAFF — core visual component
══════════════════════════════════════════════════════════ */
function ScrollingStaff({ tasks, currentIdx, results, clef, revealCurrent = false }) {
  const outerRef  = useRef(null);
  const [contW, setContW] = useState(640);

  useEffect(() => {
    const el = outerRef.current;
    if (!el) return;
    const obs = new ResizeObserver(([e]) => setContW(e.contentRect.width));
    obs.observe(el);
    setContW(el.offsetWidth);
    return () => obs.disconnect();
  }, []);

  const NOTE_SPACING = 82;
  const LEFT_PAD     = 96;
  const GAP          = 17;
  const STAFF_TOP    = 46;
  const NUM_LINES    = 5;
  const NOTE_RX      = 9.5;
  const NOTE_RY      = 6.8;
  const svgW = Math.max(LEFT_PAD + tasks.length * NOTE_SPACING + 60, contW);
  const svgH = STAFF_TOP + (NUM_LINES + 5) * GAP + 38;

  const getY = step => STAFF_TOP + (NUM_LINES-1)*GAP - step*(GAP/2);

  // Smooth pan to keep current note centered
  const currentNoteX = LEFT_PAD + currentIdx * NOTE_SPACING;
  const panOffset = Math.max(0, currentNoteX - contW/2 + NOTE_SPACING/2);

  return (
    <div ref={outerRef} style={{
      overflow: 'hidden', borderRadius: 18, position: 'relative',
      background: 'linear-gradient(180deg, #080d1a 0%, #0a1020 100%)',
      border: '1px solid rgba(148,163,184,0.12)',
      boxShadow: '0 12px 40px rgba(0,0,0,0.5)',
    }}>
      <motion.div
        animate={{ x: -panOffset }}
        transition={{ type:'spring', stiffness:240, damping:32 }}
        style={{ willChange:'transform', display:'inline-block' }}
      >
        <svg width={svgW} height={svgH} style={{ display:'block' }}>
          {/* Subtle background lines */}
          {Array.from({length:NUM_LINES*2-1},(_,i)=>{
            if (i%2!==0) return null;
            return <line key={`bg${i}`} x1={8} y1={STAFF_TOP+i*GAP/2} x2={svgW-8} y2={STAFF_TOP+i*GAP/2} stroke="#1e2a40" strokeWidth="0.5"/>;
          })}

          {/* Staff lines */}
          {Array.from({length:NUM_LINES},(_,i)=>{
            const y = STAFF_TOP + i*GAP;
            const isOuter = i===0||i===NUM_LINES-1;
            return <line key={`sl${i}`} x1={LEFT_PAD-14} y1={y} x2={svgW-8} y2={y} stroke={isOuter?'#64748b':'#334155'} strokeWidth={isOuter?1.6:1.1}/>;
          })}

          {/* Clef vertical bar */}
          <line x1={LEFT_PAD-14} y1={STAFF_TOP} x2={LEFT_PAD-14} y2={STAFF_TOP+(NUM_LINES-1)*GAP} stroke="#64748b" strokeWidth="2.5"/>

          {/* Clef symbol */}
          <text
            x="10" y={clef==='treble' ? STAFF_TOP+GAP*3.5 : STAFF_TOP+GAP*2.2}
            fontSize={clef==='treble' ? GAP*6.8 : GAP*5}
            fontFamily="Times New Roman, serif"
            fill={clef==='treble'?'#38bdf8':'#c084fc'} opacity="0.92"
          >{clef==='treble'?'𝄞':'𝄢'}</text>

          {/* Bar lines every 4 notes */}
          {tasks.map((_,i)=> i>0&&i%4===0 ? (
            <line key={`bar${i}`}
              x1={LEFT_PAD+i*NOTE_SPACING-NOTE_SPACING*0.42}
              y1={STAFF_TOP}
              x2={LEFT_PAD+i*NOTE_SPACING-NOTE_SPACING*0.42}
              y2={STAFF_TOP+(NUM_LINES-1)*GAP}
              stroke="#293548" strokeWidth="1.2"
            />
          ) : null)}

          {/* Current note highlight box */}
          {currentIdx < tasks.length && (
            <rect
              x={LEFT_PAD+currentIdx*NOTE_SPACING-NOTE_SPACING*0.44}
              y={STAFF_TOP-10}
              width={NOTE_SPACING*0.88}
              height={(NUM_LINES-1)*GAP+20}
              rx={10}
              fill="rgba(124,58,237,0.1)"
              stroke="#7c3aed"
              strokeWidth="1.6"
              strokeDasharray="5 3"
            />
          )}

          {/* NOTES */}
          {tasks.map((task, i) => {
            const answered = i < currentIdx;
            const isCurrent = i === currentIdx;
            const isFuture = i > currentIdx;
            const isEarHidden = (task.type==='ear-training') && isCurrent && !revealCurrent && !answered;

            const noteX = LEFT_PAD + i * NOTE_SPACING;

            // For ear-training hidden notes: show question mark placeholder
            if (isEarHidden) {
              return (
                <g key={i}>
                  <text x={noteX} y={STAFF_TOP+(NUM_LINES-1)*GAP/2+4} textAnchor="middle"
                    fontSize="22" fontWeight="bold" fill="#7c3aed" opacity="0.8"
                    fontFamily="Inter, sans-serif">?</text>
                  {/* Ear icon hint */}
                  <text x={noteX} y={svgH-10} textAnchor="middle" fontSize="11" fill="#475569" fontFamily="Inter, sans-serif">Gehör</text>
                </g>
              );
            }

            // Future ear-training notes
            if (task.type==='ear-training' && isFuture) {
              return (
                <g key={i} opacity="0.25">
                  <text x={noteX} y={STAFF_TOP+(NUM_LINES-1)*GAP/2+4} textAnchor="middle"
                    fontSize="18" fill="#334155" fontFamily="Inter, sans-serif">?</text>
                </g>
              );
            }

            // Render each note in the chord / single note
            return task.staffNotes.map((noteObj, ni) => {
              const info = getMidiInfo(noteObj.midi);
              const step = task.clef==='bass' ? info.bassStep : info.trebleStep;
              const y = getY(step);
              const xOff = noteX + (task.staffNotes.length>1 ? (ni-(task.staffNotes.length-1)/2)*5 : 0);

              let color;
              if (answered) color = results[i] ? '#34d399' : '#f87171';
              else if (isCurrent) color = noteObj.color || '#f1f5f9';
              else color = noteObj.color ? noteObj.color+'44' : '#1e3a5f';

              const opacity = isFuture ? 0.32 : 1;

              // Ledger lines
              const ledgerLines = [];
              if (step<=-2) for(let s=-2;s>=step;s-=2) ledgerLines.push(getY(s));
              if (step>=10)  for(let s=10;s<=step;s+=2) ledgerLines.push(getY(s));

              const stemUp = step < 4;

              return (
                <g key={`${i}-${ni}`} opacity={opacity}>
                  {ni===0 && ledgerLines.map((ly,li)=>(
                    <line key={li} x1={xOff-NOTE_RX-5} y1={ly} x2={xOff+NOTE_RX+5} y2={ly} stroke={color} strokeWidth="1.8"/>
                  ))}
                  {info.isSharp && ni===0 && (
                    <text x={xOff-NOTE_RX-15} y={y+5} fontSize="17" fontWeight="bold" fill={color} fontFamily="Times New Roman, serif">♯</text>
                  )}
                  <ellipse cx={xOff} cy={y} rx={NOTE_RX} ry={NOTE_RY} fill={color} transform={`rotate(-12 ${xOff} ${y})`}/>
                  {ni===task.staffNotes.length-1 && (
                    <line
                      x1={stemUp?xOff+NOTE_RX-1:xOff-NOTE_RX+1} y1={y}
                      x2={stemUp?xOff+NOTE_RX-1:xOff-NOTE_RX+1} y2={stemUp?y-GAP*2.8:y+GAP*2.8}
                      stroke={color} strokeWidth="2.2"
                    />
                  )}
                </g>
              );
            });
          })}

          {/* Result indicators below staff */}
          {tasks.map((task, i) => {
            const answered = i < currentIdx;
            const isCurrent = i === currentIdx;
            const noteX = LEFT_PAD + i * NOTE_SPACING;
            if (answered) {
              const res = results[i];
              return (
                <g key={`res${i}`}>
                  <text x={noteX} y={svgH-10} textAnchor="middle" fontSize="12" fontWeight="800"
                    fill={res?'#34d399':'#f87171'} fontFamily="Inter, sans-serif">
                    {res?'✓':'✗'}
                  </text>
                </g>
              );
            }
            if (isCurrent) {
              return (
                <text key={`cur${i}`} x={noteX} y={svgH-8} textAnchor="middle" fontSize="14" fill="#7c3aed" fontFamily="Inter, sans-serif">▲</text>
              );
            }
            return (
              <text key={`dot${i}`} x={noteX} y={svgH-10} textAnchor="middle" fontSize="8" fill="#1e3a5f" fontFamily="Inter, sans-serif">●</text>
            );
          })}
        </svg>
      </motion.div>
    </div>
  );
}

/* ══════════════════════════════════════════════════════════
   VIRTUAL PIANO
══════════════════════════════════════════════════════════ */
function VirtualPiano({ startMidi=48, endMidi=72, correctKeys=new Set(), wrongKeys=new Set(), onKeyClick, disabled=false, showLabels=false, keyHeight=140, lang='de' }) {
  const whites = [], blacks = [];
  for (let m = startMidi; m <= endMidi; m++) {
    if ([1,3,6,8,10].includes(m%12)) blacks.push(m); else whites.push(m);
  }
  const wIdx = {};
  whites.forEach((m,i) => { wIdx[m]=i; });
  const totalW = whites.length;
  const ww = 100/totalW;
  const bw = ww*0.6;
  const bh = keyHeight*0.63;

  const getBlackLeft = midi => {
    const lw = wIdx[midi-1];
    return lw===undefined ? null : lw*ww + ww*0.63;
  };

  return (
    <div style={{
      position:'relative', width:'100%', height:keyHeight,
      background:'linear-gradient(180deg,#1a2035 0%,#0a0f1e 100%)',
      borderRadius:16, overflow:'hidden',
      border:'1px solid rgba(255,255,255,0.08)',
      boxShadow:'0 16px 48px rgba(0,0,0,0.6)',
      userSelect:'none',
    }}>
      {whites.map(midi => {
        const info = getMidiInfo(midi, lang);
        const isCor = correctKeys.has(midi);
        const isWrg = wrongKeys.has(midi);
        let bg='linear-gradient(180deg,#f8fafc,#dde4ef)';
        let shadow='inset 0 -4px 0 #b2bec8, inset 0 1px 0 white';
        let tc='#1e293b';
        if (isCor) { bg='linear-gradient(180deg,#86efac,#22c55e)'; shadow='inset 0 -4px 0 #15803d, 0 0 20px #22c55e55'; tc='#14532d'; }
        else if (isWrg) { bg='linear-gradient(180deg,#fca5a5,#ef4444)'; shadow='inset 0 -4px 0 #b91c1c, 0 0 20px #ef444455'; tc='#fff'; }
        return (
          <button key={midi} disabled={disabled} onClick={()=>!disabled&&onKeyClick&&onKeyClick(midi)} style={{
            position:'absolute', top:0, bottom:0,
            left:`${(wIdx[midi]/totalW)*100}%`, width:`${ww}%`,
            background:bg, boxShadow:shadow,
            border:'1px solid rgba(148,163,184,0.25)',
            borderRadius:'0 0 10px 10px',
            cursor:disabled?'default':'pointer',
            zIndex:1, display:'flex', flexDirection:'column',
            alignItems:'center', justifyContent:'flex-end', paddingBottom:7,
            transition:'filter 0.08s',
          }}
            onMouseDown={e=>{if(!disabled)e.currentTarget.style.filter='brightness(0.87)';}}
            onMouseUp={e=>e.currentTarget.style.filter='brightness(1)'}
            onMouseLeave={e=>e.currentTarget.style.filter='brightness(1)'}
          >
            {(showLabels||isCor||isWrg)&&(
              <span style={{fontSize:10,fontWeight:700,color:tc,opacity:0.85,fontFamily:'Inter,sans-serif'}}>
                {info.pc===0?`${info.name}${info.octave}`:info.name}
              </span>
            )}
          </button>
        );
      })}
      {blacks.map(midi => {
        const info = getMidiInfo(midi, lang);
        const left = getBlackLeft(midi);
        if (left===null) return null;
        const isCor = correctKeys.has(midi);
        const isWrg = wrongKeys.has(midi);
        let bg='linear-gradient(180deg,#475569,#0a0f1e)';
        let shadow='inset 0 -5px 0 #000, inset 0 1px 0 #64748b';
        if (isCor){bg='linear-gradient(180deg,#4ade80,#15803d)';shadow='inset 0 -5px 0 #14532d,0 0 18px #22c55e66';}
        else if(isWrg){bg='linear-gradient(180deg,#f87171,#b91c1c)';shadow='inset 0 -5px 0 #7f1d1d,0 0 18px #ef444466';}
        return (
          <button key={midi} disabled={disabled} onClick={e=>{e.stopPropagation();!disabled&&onKeyClick&&onKeyClick(midi);}} style={{
            position:'absolute', top:0, left:`${left}%`, width:`${bw}%`, height:bh,
            background:bg, boxShadow:shadow,
            border:'1px solid #0a0f1e',
            borderRadius:'0 0 8px 8px',
            cursor:disabled?'default':'pointer', zIndex:10,
            display:'flex', alignItems:'flex-end', justifyContent:'center', paddingBottom:4,
            transition:'filter 0.08s',
          }}
            onMouseDown={e=>{if(!disabled)e.currentTarget.style.filter='brightness(0.8)';}}
            onMouseUp={e=>e.currentTarget.style.filter='brightness(1)'}
            onMouseLeave={e=>e.currentTarget.style.filter='brightness(1)'}
          >
            {(showLabels||isCor||isWrg)&&<span style={{fontSize:8,fontWeight:700,color:'white',opacity:0.85}}>{info.name}</span>}
          </button>
        );
      })}
    </div>
  );
}

/* ══════════════════════════════════════════════════════════
   SETTINGS UI HELPERS
══════════════════════════════════════════════════════════ */
function SLabel({ children }) {
  return <div style={{fontSize:10,fontWeight:700,color:'#4b5563',textTransform:'uppercase',letterSpacing:'0.1em',marginBottom:8,paddingLeft:2}}>{children}</div>;
}

function Pills({ options, value, onChange, color='#7c3aed', small=false }) {
  return (
    <div style={{display:'flex',flexWrap:'wrap',gap:6}}>
      {options.map(opt => {
        const id = opt.id??opt; const label = opt.label??opt;
        const active = value===id || (typeof value==='number'&&value===Number(id));
        return (
          <button key={String(id)} type="button" onClick={()=>onChange(id)} style={{
            padding: small ? '5px 11px' : '7px 15px',
            borderRadius:99, cursor:'pointer',
            fontSize: small ? 11 : 12, fontWeight:700,
            background: active ? color : 'rgba(255,255,255,0.07)',
            color: active ? 'white' : '#64748b',
            border:'none', transition:'all 0.13s',
            boxShadow: active ? `0 2px 12px ${color}55` : 'none',
          }}>{label}</button>
        );
      })}
    </div>
  );
}

function SToggle({ value, onChange, label, sub }) {
  return (
    <div onClick={()=>onChange(!value)} style={{
      display:'flex',alignItems:'center',justifyContent:'space-between',cursor:'pointer',
      padding:'10px 14px',borderRadius:12,
      background:'rgba(255,255,255,0.04)',border:'1px solid rgba(255,255,255,0.07)',
      marginBottom:0,transition:'background 0.13s',
    }}>
      <div>
        <div style={{fontSize:13,fontWeight:600,color:'white'}}>{label}</div>
        {sub&&<div style={{fontSize:11,color:'#4b5563',marginTop:1}}>{sub}</div>}
      </div>
      <div style={{
        position:'relative',flexShrink:0,marginLeft:12,
        width:46,height:26,borderRadius:13,
        background:value?'linear-gradient(90deg,#7c3aed,#db2777)':'#1e293b',
        border:'1px solid rgba(255,255,255,0.1)',transition:'background 0.2s',
      }}>
        <div style={{
          position:'absolute',top:3,borderRadius:'50%',
          width:18,height:18,background:'white',
          boxShadow:'0 1px 4px rgba(0,0,0,0.4)',
          left:value?24:4,transition:'left 0.18s',
        }}/>
      </div>
    </div>
  );
}

/* ══════════════════════════════════════════════════════════
   CONFIG DEFAULTS
══════════════════════════════════════════════════════════ */
const DEFAULT_CFG = {
  clef:'treble', difficulty:'mixed', lang:'de',
  notesPerRound:12, keyboardSize:'medium', keyHeight:'medium',
  showLabels:false, inputMode:'both', soundType:'piano',
  autoPlaySound:true, autoAdvance:true,
  timedMode:false, timeLimit:10, chordLevel:'beginner',
};
const KEY_H = {small:100,medium:140,large:180,xlarge:220};
const KEY_RANGE = {
  small:{treble:[60,71],bass:[43,54]},
  medium:{treble:[55,79],bass:[36,60]},
  large:{treble:[48,83],bass:[29,64]},
  xlarge:{treble:[41,88],bass:[24,67]},
};

/* ══════════════════════════════════════════════════════════
   MAIN COMPONENT
══════════════════════════════════════════════════════════ */
export default function PianoTrainer() {
  const [screen, setScreen]         = useState('home');
  const [cfg, setCfg]               = useState(DEFAULT_CFG);
  const [sessionTasks, setSessionTasks] = useState([]);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [results, setResults]       = useState([]);    // true/false per note
  const [feedback, setFeedback]     = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [revealEar, setRevealEar]   = useState(false);
  const [score, setScore]           = useState(0);
  const [streak, setStreak]         = useState(0);
  const [bestStreak, setBestStreak] = useState(0);
  const [timeLeft, setTimeLeft]     = useState(10);

  const timerRef = useRef(null);
  const startRef = useRef(0);
  const audioRef = useRef(null);
  const gainRef  = useRef(null);

  /* ── Audio ── */
  const getCtx = useCallback(()=>{
    if(!audioRef.current||audioRef.current.state==='closed'){
      audioRef.current = new (window.AudioContext||window.webkitAudioContext)();
      gainRef.current = audioRef.current.createGain();
      gainRef.current.connect(audioRef.current.destination);
    }
    if(audioRef.current.state==='suspended') audioRef.current.resume();
    gainRef.current.gain.setValueAtTime(0.7,audioRef.current.currentTime);
    return audioRef.current;
  },[]);

  const playNote = useCallback((midi, dur=1.3)=>{
    try{
      const ctx=getCtx(), now=ctx.currentTime, f=440*Math.pow(2,(midi-69)/12), m=gainRef.current;
      if(cfg.soundType==='piano'){
        [[1,0.44,1],[2,0.17,0.58],[3,0.08,0.38],[4,0.03,0.22]].forEach(([mul,g,dm])=>{
          const o=ctx.createOscillator(),gn=ctx.createGain();
          o.type='sine';o.frequency.setValueAtTime(f*mul,now);
          gn.gain.setValueAtTime(0,now);gn.gain.linearRampToValueAtTime(g,now+0.008);
          gn.gain.exponentialRampToValueAtTime(0.0001,now+dur*dm);
          o.connect(gn).connect(m);o.start(now);o.stop(now+dur*dm+0.05);
        });
      }else if(cfg.soundType==='organ'){
        [1,2,3,4].forEach((mul,i)=>{
          const o=ctx.createOscillator(),gn=ctx.createGain();
          o.type='sine';o.frequency.setValueAtTime(f*mul,now);
          const v=[0.3,0.17,0.09,0.04][i];
          gn.gain.setValueAtTime(0,now);gn.gain.linearRampToValueAtTime(v,now+0.015);
          gn.gain.linearRampToValueAtTime(0,now+dur);
          o.connect(gn).connect(m);o.start(now);o.stop(now+dur+0.02);
        });
      }else{
        const o=ctx.createOscillator(),gn=ctx.createGain();
        o.type='triangle';o.frequency.setValueAtTime(f,now);
        gn.gain.setValueAtTime(0,now);gn.gain.linearRampToValueAtTime(0.32,now+0.01);
        gn.gain.exponentialRampToValueAtTime(0.0001,now+dur);
        o.connect(gn).connect(m);o.start(now);o.stop(now+dur+0.02);
      }
    }catch(e){console.warn('audio:',e);}
  },[cfg.soundType,getCtx]);

  const playChord = useCallback(midis=>{midis.forEach((m,i)=>setTimeout(()=>playNote(m,2),i*55));},[playNote]);

  const playFeedback = useCallback(ok=>{
    if(ok)[72,76,79].forEach((m,i)=>setTimeout(()=>playNote(m,0.28),i*75));
    else [60,59].forEach((m,i)=>setTimeout(()=>playNote(m,0.4),i*110));
  },[playNote]);

  /* ── Start session ── */
  const startSession = useCallback(()=>{
    const tasks = generateSession(cfg);
    setSessionTasks(tasks);
    setCurrentIdx(0);
    setResults([]);
    setFeedback(null);
    setIsAnswered(false);
    setRevealEar(false);
    setScore(0); setStreak(0); setBestStreak(0);
    setScreen('training');
    startRef.current = performance.now();
    if(cfg.autoPlaySound){
      const first = tasks[0];
      if(first.type==='chord') setTimeout(()=>playChord(first.midis),100);
      else if(first.type!=='ear-training') setTimeout(()=>playNote(first.midi),100);
    }
  },[cfg,playNote,playChord]);

  /* ── Answer submit ── */
  const submitAnswer = useCallback((userAns, isTimeout=false)=>{
    if(isAnswered||currentIdx>=sessionTasks.length) return;
    clearInterval(timerRef.current);
    setIsAnswered(true);
    setRevealEar(true);

    const task = sessionTasks[currentIdx];
    const elapsed = Math.round(performance.now()-startRef.current);
    let ok = false;
    if(!isTimeout){
      if(task.type==='note'||task.type==='note-reading'||task.type==='ear-training'){
        ok = typeof userAns==='number' ? (userAns%12)===(task.midi%12) : userAns===task.name;
      }else if(task.type==='chord'){
        ok = userAns===task.chord.id||userAns===task.chord.de;
      }
    }

    const newStreak = ok ? streak+1 : 0;
    if(ok) setScore(s=>s+1);
    setStreak(newStreak);
    if(newStreak>bestStreak) setBestStreak(newStreak);

    const correctText = task.type==='chord' ? task.chord.de : task.name;
    setFeedback({ok, msg: isTimeout ? `⏱ Zeit! → ${correctText}` : ok ? '✓ Richtig!' : `✗ → ${correctText}`, elapsed});
    setResults(prev=>[...prev,ok]);
    playFeedback(ok);

    if(cfg.autoAdvance){
      setTimeout(()=>advanceToNext(currentIdx+1),[ok?1000:1600]);
    }
  },[isAnswered,currentIdx,sessionTasks,streak,bestStreak,cfg.autoAdvance,playFeedback]);

  const advanceToNext = useCallback((nextIdx)=>{
    if(nextIdx>=sessionTasks.length){ setScreen('result'); return; }
    setCurrentIdx(nextIdx);
    setFeedback(null);
    setIsAnswered(false);
    setRevealEar(false);
    startRef.current = performance.now();
    const task = sessionTasks[nextIdx];
    if(cfg.autoPlaySound){
      if(task.type==='chord') setTimeout(()=>playChord(task.midis),80);
      else if(task.type!=='ear-training') setTimeout(()=>playNote(task.midi),80);
    }
    if(cfg.timedMode) setTimeLeft(cfg.timeLimit);
  },[sessionTasks,cfg.autoPlaySound,cfg.timedMode,cfg.timeLimit,playNote,playChord]);

  /* ── Timer ── */
  useEffect(()=>{
    if(!cfg.timedMode||screen!=='training'||isAnswered||!sessionTasks.length) return;
    setTimeLeft(cfg.timeLimit);
    timerRef.current = setInterval(()=>{
      setTimeLeft(prev=>{
        if(prev<=1){ clearInterval(timerRef.current); submitAnswer(null,true); return 0; }
        return prev-1;
      });
    },1000);
    return ()=>clearInterval(timerRef.current);
  // eslint-disable-next-line
  },[currentIdx,cfg.timedMode,isAnswered,screen]);

  const goNext = useCallback(()=>advanceToNext(currentIdx+1),[advanceToNext,currentIdx]);

  const currentTask = sessionTasks[currentIdx];
  const sessionClef = sessionTasks[0]?.clef || cfg.clef;
  const noteButtons = cfg.lang==='de' ? ['C','D','E','F','G','A','H'] : ['C','D','E','F','G','A','B'];
  const keyRange = KEY_RANGE[cfg.keyboardSize]?.[sessionClef==='bass'?'bass':'treble'] || [55,79];
  const keyHeightPx = KEY_H[cfg.keyHeight] || 140;

  const correctKeys = new Set(), wrongKeys = new Set();
  if(isAnswered&&currentTask){
    const midis = currentTask.type==='chord' ? currentTask.midis : [currentTask.midi];
    if(feedback?.ok) midis.forEach(m=>correctKeys.add(m));
    else midis.forEach(m=>wrongKeys.add(m));
  }

  /* ════════════════════════════════════════════
     HOME SCREEN
  ════════════════════════════════════════════ */
  if(screen==='home'){
    const s = cfg; const set = k => v => setCfg(p=>({...p,[k]:v}));
    const setN = k => v => setCfg(p=>({...p,[k]:Number(v)}));

    const modes = [
      {id:'note-reading',   label:'🎼 Noten',    color:'#7c3aed'},
      {id:'chord-training', label:'🎹 Akkorde',  color:'#9333ea'},
      {id:'ear-training',   label:'👂 Gehör',    color:'#059669'},
      {id:'mixed',          label:'🔀 Mix',      color:'#d97706'},
    ];
    const activeMode = modes.find(m=>m.id===s.mode)||modes[0];

    return (
      <div style={{minHeight:'100vh',background:'linear-gradient(160deg,#05080f 0%,#0d0f1e 50%,#05080f 100%)',color:'white',fontFamily:'Inter,system-ui,sans-serif'}}>
        {/* BG glow */}
        <div style={{position:'fixed',inset:0,pointerEvents:'none',overflow:'hidden'}}>
          <div style={{position:'absolute',top:-300,left:-200,width:700,height:700,background:'radial-gradient(circle,rgba(124,58,237,0.1) 0%,transparent 65%)',borderRadius:'50%'}}/>
          <div style={{position:'absolute',bottom:-200,right:-200,width:600,height:600,background:'radial-gradient(circle,rgba(16,185,129,0.06) 0%,transparent 65%)',borderRadius:'50%'}}/>
        </div>

        <div style={{position:'relative',zIndex:10,maxWidth:900,margin:'0 auto',padding:'28px 18px 52px'}}>

          {/* Header */}
          <div style={{display:'flex',alignItems:'center',gap:14,marginBottom:28}}>
            <div style={{width:52,height:52,borderRadius:15,flexShrink:0,background:'linear-gradient(135deg,#7c3aed,#db2777)',display:'flex',alignItems:'center',justifyContent:'center',boxShadow:'0 6px 28px rgba(124,58,237,0.4)'}}>
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><rect x="2" y="4" width="20" height="14" rx="2"/><path d="M8 4v14M12 4v14M16 4v14"/><path d="M5 14h1M10 10h1M14 14h1M19 10h1" strokeLinecap="round" strokeWidth="2.5"/></svg>
            </div>
            <div>
              <h1 style={{margin:0,fontSize:26,fontWeight:900,background:'linear-gradient(135deg,#fff,#c4b5fd 60%,#f9a8d4)',WebkitBackgroundClip:'text',WebkitTextFillColor:'transparent'}}>Piano Trainer</h1>
              <p style={{margin:'3px 0 0',fontSize:12,color:'#4b5563'}}>Notenlesen · Akkorde · Gehörtraining</p>
            </div>
          </div>

          <div style={{display:'grid',gridTemplateColumns:'1fr',gap:18}}>

            {/* ── MODE PICKER ── */}
            <div style={{background:'rgba(255,255,255,0.03)',border:'1px solid rgba(255,255,255,0.08)',borderRadius:18,padding:'18px 20px'}}>
              <SLabel>Training-Modus</SLabel>
              <div style={{display:'grid',gridTemplateColumns:'repeat(4,1fr)',gap:8}}>
                {modes.map(m=>{
                  const active = s.mode===m.id;
                  return (
                    <button key={m.id} onClick={()=>setCfg(p=>({...p,mode:m.id}))} style={{
                      padding:'12px 8px',borderRadius:14,cursor:'pointer',fontWeight:700,fontSize:13,
                      background:active?m.color:'rgba(255,255,255,0.05)',
                      color:active?'white':'#4b5563',border:'none',
                      boxShadow:active?`0 4px 18px ${m.color}55`:'none',
                      transition:'all 0.15s',
                    }}>{m.label}</button>
                  );
                })}
              </div>
            </div>

            {/* ── SETTINGS GRID ── */}
            <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(300px,1fr))',gap:12}}>

              {/* Noten-Einstellungen */}
              <div style={{background:'rgba(255,255,255,0.03)',border:'1px solid rgba(255,255,255,0.08)',borderRadius:18,padding:'18px 20px',display:'flex',flexDirection:'column',gap:14}}>
                <SLabel>Noten & Schlüssel</SLabel>
                <div>
                  <div style={{fontSize:11,color:'#4b5563',marginBottom:6}}>Notenschlüssel</div>
                  <Pills options={[{id:'treble',label:'𝄞 Violin'},{id:'bass',label:'𝄢 Bass'},{id:'both',label:'⇄ Beide'}]} value={s.clef} onChange={set('clef')} color="#7c3aed"/>
                </div>
                <div>
                  <div style={{fontSize:11,color:'#4b5563',marginBottom:6}}>Noten pro Runde</div>
                  <Pills options={[{id:6,label:'6'},{id:8,label:'8'},{id:12,label:'12'},{id:16,label:'16'},{id:24,label:'24'},{id:32,label:'32'}]} value={s.notesPerRound} onChange={setN('notesPerRound')} color="#7c3aed" small/>
                </div>
                <div>
                  <div style={{fontSize:11,color:'#4b5563',marginBottom:6}}>Schwierigkeit</div>
                  <Pills options={[{id:'lines',label:'Auf Linien'},{id:'spaces',label:'Zwischen'},{id:'mixed',label:'Gemischt'},{id:'expert',label:'# Vorzeichen'}]} value={s.difficulty} onChange={set('difficulty')} color="#9333ea"/>
                </div>
                <div>
                  <div style={{fontSize:11,color:'#4b5563',marginBottom:6}}>Notation</div>
                  <Pills options={[{id:'de',label:'🇩🇪 Deutsch (H)'},{id:'en',label:'🇬🇧 Englisch (B)'}]} value={s.lang} onChange={set('lang')} color="#0891b2"/>
                </div>
                {(s.mode==='chord-training'||s.mode==='mixed')&&(
                  <div>
                    <div style={{fontSize:11,color:'#4b5563',marginBottom:6}}>Akkord-Level</div>
                    <Pills options={[{id:'beginner',label:'Anfänger'},{id:'intermediate',label:'Mittel'},{id:'expert',label:'Experte'}]} value={s.chordLevel} onChange={set('chordLevel')} color="#9333ea"/>
                  </div>
                )}
              </div>

              {/* Keyboard & Eingabe */}
              <div style={{background:'rgba(255,255,255,0.03)',border:'1px solid rgba(255,255,255,0.08)',borderRadius:18,padding:'18px 20px',display:'flex',flexDirection:'column',gap:14}}>
                <SLabel>Keyboard & Eingabe</SLabel>
                <div>
                  <div style={{fontSize:11,color:'#4b5563',marginBottom:6}}>Keyboard-Größe (Oktaven)</div>
                  <Pills options={[{id:'small',label:'1 Okt'},{id:'medium',label:'2 Okt'},{id:'large',label:'3 Okt'},{id:'xlarge',label:'4 Okt'}]} value={s.keyboardSize} onChange={set('keyboardSize')} color="#1d4ed8"/>
                </div>
                <div>
                  <div style={{fontSize:11,color:'#4b5563',marginBottom:6}}>Keyboard-Höhe</div>
                  <Pills options={[{id:'small',label:'S (100px)'},{id:'medium',label:'M (140px)'},{id:'large',label:'L (180px)'},{id:'xlarge',label:'XL (220px)'}]} value={s.keyHeight} onChange={set('keyHeight')} color="#1d4ed8" small/>
                </div>
                <div>
                  <div style={{fontSize:11,color:'#4b5563',marginBottom:6}}>Eingabe-Modus</div>
                  <Pills options={[{id:'piano',label:'🎹 Piano'},{id:'buttons',label:'🔤 Buttons'},{id:'both',label:'✨ Beides'}]} value={s.inputMode} onChange={set('inputMode')} color="#059669"/>
                </div>
                <SToggle label="Tasten-Beschriftung" sub="Notennamen auf Keyboard anzeigen" value={s.showLabels} onChange={set('showLabels')}/>
                <SToggle label="Auto-Weiter" sub="Automatisch nach Antwort zur nächsten Note" value={s.autoAdvance} onChange={set('autoAdvance')}/>
              </div>

              {/* Audio & Zeit */}
              <div style={{background:'rgba(255,255,255,0.03)',border:'1px solid rgba(255,255,255,0.08)',borderRadius:18,padding:'18px 20px',display:'flex',flexDirection:'column',gap:14}}>
                <SLabel>Audio & Zeit</SLabel>
                <div>
                  <div style={{fontSize:11,color:'#4b5563',marginBottom:6}}>Klangfarbe</div>
                  <Pills options={[{id:'piano',label:'🎹 Piano'},{id:'organ',label:'🎸 Orgel'},{id:'synth',label:'🌊 Synth'}]} value={s.soundType} onChange={set('soundType')} color="#d97706"/>
                </div>
                <SToggle label="Auto-Play" sub="Ton sofort beim Erscheinen abspielen" value={s.autoPlaySound} onChange={set('autoPlaySound')}/>
                <SToggle label="Zeitmodus" sub="Countdown-Timer pro Note aktivieren" value={s.timedMode} onChange={set('timedMode')}/>
                {s.timedMode&&(
                  <div>
                    <div style={{fontSize:11,color:'#4b5563',marginBottom:6}}>Zeit pro Note</div>
                    <Pills options={[{id:5,label:'5s'},{id:8,label:'8s'},{id:10,label:'10s'},{id:15,label:'15s'}]} value={s.timeLimit} onChange={setN('timeLimit')} color="#dc2626" small/>
                  </div>
                )}
              </div>
            </div>

            {/* ── START BUTTON ── */}
            <motion.button
              whileHover={{scale:1.02}} whileTap={{scale:0.97}}
              onClick={startSession}
              style={{
                width:'100%',padding:'22px',borderRadius:18,cursor:'pointer',
                background:`linear-gradient(135deg, ${activeMode.color}, ${activeMode.color}cc)`,
                color:'white',fontWeight:900,fontSize:19,border:'none',
                display:'flex',alignItems:'center',justifyContent:'center',gap:14,
                boxShadow:`0 12px 40px ${activeMode.color}50`,
              }}
            >
              <Play size={26}/>
              Training starten
              <span style={{fontSize:13,opacity:0.7,fontWeight:600}}>({cfg.notesPerRound} Noten)</span>
            </motion.button>
          </div>
        </div>
      </div>
    );
  }

  /* ════════════════════════════════════════════
     TRAINING SCREEN
  ════════════════════════════════════════════ */
  if(screen==='training'){
    if(!currentTask) return null;
    const progress = (currentIdx/sessionTasks.length)*100;
    const badgeColor = {note:'#7c3aed','note-reading':'#7c3aed',chord:'#9333ea','chord-training':'#9333ea',ear:'#059669','ear-training':'#059669'}[currentTask.type]||'#7c3aed';

    return (
      <div style={{minHeight:'100vh',background:'linear-gradient(160deg,#05080f 0%,#0d0f1e 50%,#05080f 100%)',color:'white',fontFamily:'Inter,system-ui,sans-serif',display:'flex',flexDirection:'column'}}>
        {/* BG glow */}
        <div style={{position:'fixed',inset:0,pointerEvents:'none'}}>
          <div style={{position:'absolute',top:-200,left:-100,width:600,height:600,background:'radial-gradient(circle,rgba(124,58,237,0.08) 0%,transparent 65%)',borderRadius:'50%'}}/>
        </div>

        {/* TOP BAR */}
        <div style={{position:'sticky',top:0,zIndex:20,background:'rgba(5,8,15,0.92)',backdropFilter:'blur(20px)',borderBottom:'1px solid rgba(255,255,255,0.07)',padding:'10px 16px'}}>
          <div style={{maxWidth:860,margin:'0 auto',display:'flex',alignItems:'center',gap:10}}>
            <button onClick={()=>{clearInterval(timerRef.current);setScreen('home');}} style={{width:34,height:34,borderRadius:10,cursor:'pointer',background:'rgba(255,255,255,0.07)',border:'1px solid rgba(255,255,255,0.1)',display:'flex',alignItems:'center',justifyContent:'center',color:'#94a3b8',flexShrink:0}}><Home size={14}/></button>

            <div style={{flex:1,minWidth:0}}>
              <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:5}}>
                <span style={{fontSize:11,color:'#4b5563'}}>Note <strong style={{color:'white'}}>{currentIdx+1}</strong> von {sessionTasks.length}</span>
                <div style={{display:'flex',alignItems:'center',gap:10,fontSize:11}}>
                  <span style={{color:'#34d399',fontWeight:700}}>✓ {score}</span>
                  <span style={{color:'#f87171',fontWeight:700}}>✗ {currentIdx-score}</span>
                  {streak>1&&<span style={{color:'#fbbf24',fontWeight:700,display:'flex',alignItems:'center',gap:3}}><Flame size={11}/>{streak}</span>}
                  {cfg.timedMode&&<span style={{fontFamily:'monospace',fontWeight:900,color:timeLeft<=3?'#f87171':'#fbbf24',fontSize:14}}>{timeLeft}s</span>}
                </div>
              </div>
              <div style={{width:'100%',height:3,background:'rgba(255,255,255,0.08)',borderRadius:2,overflow:'hidden'}}>
                <div style={{height:'100%',width:`${progress}%`,background:'linear-gradient(90deg,#7c3aed,#db2777)',borderRadius:2,transition:'width 0.3s'}}/>
              </div>
            </div>

            <button
              onClick={()=>{currentTask.type==='chord'||currentTask.type==='chord-training'?playChord(currentTask.midis):playNote(currentTask.midi);}}
              style={{width:34,height:34,borderRadius:10,cursor:'pointer',background:`${badgeColor}20`,border:`1px solid ${badgeColor}40`,display:'flex',alignItems:'center',justifyContent:'center',color:badgeColor,flexShrink:0}}
            ><Volume2 size={14}/></button>
          </div>
        </div>

        {/* MAIN CONTENT */}
        <div style={{flex:1,maxWidth:860,margin:'0 auto',width:'100%',padding:'14px 14px 28px',display:'flex',flexDirection:'column',gap:12,position:'relative',zIndex:10}}>

          {/* Question */}
          <div style={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>
            <span style={{fontSize:11,fontWeight:700,textTransform:'uppercase',letterSpacing:'0.08em',padding:'4px 12px',borderRadius:99,background:`${badgeColor}20`,color:badgeColor,border:`1px solid ${badgeColor}40`}}>
              {(currentTask.type==='note'||currentTask.type==='note-reading')&&`Notenlesen · ${sessionClef==='treble'?'Violinschlüssel':'Bassschlüssel'}`}
              {(currentTask.type==='chord'||currentTask.type==='chord-training')&&'Akkord erkennen'}
              {currentTask.type==='ear-training'&&'Gehörtraining'}
            </span>
            {currentTask.type==='ear-training'&&(
              <button onClick={()=>{setRevealEar(r=>!r);if(!revealEar)playNote(currentTask.midi);}} style={{background:'none',border:'none',color:'#4b5563',cursor:'pointer',fontSize:11,display:'flex',alignItems:'center',gap:4}}>
                {revealEar?<EyeOff size={12}/>:<Eye size={12}/>}
                {revealEar?'Ausblenden':'Note zeigen'}
              </button>
            )}
          </div>

          <h2 style={{margin:0,fontSize:22,fontWeight:900,textAlign:'center',color:'white'}}>
            {(currentTask.type==='note'||currentTask.type==='note-reading')&&'Welche Note ist das?'}
            {(currentTask.type==='chord'||currentTask.type==='chord-training')&&'Welcher Akkord?'}
            {currentTask.type==='ear-training'&&'Welchen Ton hörst du?'}
          </h2>

          {/* SCROLLING STAFF */}
          <ScrollingStaff
            tasks={sessionTasks}
            currentIdx={currentIdx}
            results={results}
            clef={sessionClef}
            revealCurrent={revealEar||currentTask.type!=='ear-training'}
          />

          {/* Feedback */}
          <AnimatePresence>
            {feedback&&(
              <motion.div initial={{opacity:0,y:-8}} animate={{opacity:1,y:0}} exit={{opacity:0}}
                style={{padding:'12px 18px',borderRadius:14,fontWeight:700,fontSize:14,display:'flex',alignItems:'center',justifyContent:'space-between',background:feedback.ok?'rgba(52,211,153,0.1)':'rgba(248,113,113,0.1)',border:`1px solid ${feedback.ok?'rgba(52,211,153,0.35)':'rgba(248,113,113,0.35)'}`,color:feedback.ok?'#34d399':'#f87171'}}>
                <span>{feedback.msg}</span>
                <div style={{display:'flex',alignItems:'center',gap:10}}>
                  <span style={{fontSize:10,opacity:0.5,fontFamily:'monospace'}}>{feedback.elapsed}ms</span>
                  {!cfg.autoAdvance&&<button onClick={goNext} style={{padding:'5px 12px',borderRadius:8,cursor:'pointer',fontSize:11,fontWeight:700,background:'rgba(255,255,255,0.1)',border:'1px solid rgba(255,255,255,0.12)',color:'white'}}>Weiter →</button>}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* ANSWER AREA */}
          {/* Note name buttons */}
          {(cfg.inputMode==='buttons'||cfg.inputMode==='both')&&(currentTask.type!=='chord'&&currentTask.type!=='chord-training')&&(
            <div>
              <div style={{fontSize:10,fontWeight:700,color:'#374151',textTransform:'uppercase',letterSpacing:'0.1em',marginBottom:8}}>Note eingeben</div>
              <div style={{display:'grid',gridTemplateColumns:'repeat(7,1fr)',gap:8}}>
                {noteButtons.map(n=>{
                  const isCorrBtn = isAnswered&&n===currentTask.name;
                  return (
                    <motion.button key={n} whileHover={!isAnswered?{scale:1.07}:{}} whileTap={!isAnswered?{scale:0.92}:{}}
                      disabled={isAnswered} onClick={()=>submitAnswer(n)}
                      style={{padding:'14px 0',borderRadius:12,cursor:isAnswered?'default':'pointer',fontSize:18,fontWeight:900,border:'none',transition:'all 0.12s',
                        background:isCorrBtn?'linear-gradient(135deg,#34d399,#059669)':isAnswered?'rgba(255,255,255,0.04)':'rgba(255,255,255,0.08)',
                        color:isAnswered&&!isCorrBtn?'#374151':'white',
                        boxShadow:isCorrBtn?'0 4px 18px rgba(52,211,153,0.4)':'none',
                      }}>{n}</motion.button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Chord buttons */}
          {(currentTask.type==='chord'||currentTask.type==='chord-training')&&(
            <div>
              <div style={{fontSize:10,fontWeight:700,color:'#374151',textTransform:'uppercase',letterSpacing:'0.1em',marginBottom:8}}>Akkord wählen</div>
              <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(110px,1fr))',gap:8}}>
                {CHORDS.filter(c=>CHORD_SETS[cfg.chordLevel]?.includes(c.id)).map(c=>{
                  const isCorrBtn = isAnswered&&c.id===currentTask.chord.id;
                  return (
                    <motion.button key={c.id} whileHover={!isAnswered?{scale:1.05}:{}} whileTap={!isAnswered?{scale:0.95}:{}}
                      disabled={isAnswered} onClick={()=>submitAnswer(c.id)}
                      style={{padding:'11px 6px',borderRadius:12,cursor:isAnswered?'default':'pointer',border:'none',
                        background:isCorrBtn?`${c.color}40`:isAnswered?'rgba(255,255,255,0.03)':'rgba(255,255,255,0.07)',
                        display:'flex',flexDirection:'column',alignItems:'center',gap:3,transition:'all 0.12s',
                        boxShadow:isCorrBtn?`0 4px 16px ${c.color}55`:'none',
                        outline:isCorrBtn?`1.5px solid ${c.color}`:'1px solid rgba(255,255,255,0.08)',
                      }}
                    >
                      <span style={{fontSize:15,fontWeight:900,color:isCorrBtn?c.color:isAnswered?'#374151':'white'}}>{c.short||c.de}</span>
                      <span style={{fontSize:10,color:'#4b5563'}}>{c.de}</span>
                    </motion.button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Virtual Piano */}
          {(cfg.inputMode==='piano'||cfg.inputMode==='both')&&(
            <div>
              <div style={{fontSize:10,fontWeight:700,color:'#374151',textTransform:'uppercase',letterSpacing:'0.1em',marginBottom:8}}>Piano-Eingabe</div>
              <VirtualPiano
                startMidi={keyRange[0]} endMidi={keyRange[1]}
                disabled={isAnswered}
                lang={cfg.lang}
                showLabels={cfg.showLabels}
                keyHeight={keyHeightPx}
                onKeyClick={submitAnswer}
                correctKeys={correctKeys}
                wrongKeys={wrongKeys}
              />
            </div>
          )}

          {/* Ear training play button when hidden */}
          {currentTask.type==='ear-training'&&!revealEar&&(
            <button onClick={()=>playNote(currentTask.midi)} style={{
              display:'flex',alignItems:'center',justifyContent:'center',gap:10,
              padding:'14px',borderRadius:14,cursor:'pointer',
              background:'rgba(5,150,105,0.1)',border:'1px solid rgba(5,150,105,0.3)',
              color:'#34d399',fontWeight:700,fontSize:14,
            }}><Volume2 size={18}/> Ton nochmals abspielen</button>
          )}
        </div>
      </div>
    );
  }

  /* ════════════════════════════════════════════
     RESULT SCREEN
  ════════════════════════════════════════════ */
  if(screen==='result'){
    const total = sessionTasks.length;
    const acc = Math.round((score/total)*100);
    const avgT = results.length>0 ? '—' : '—'; // simplified
    let medal='😅';
    if(acc>=90) medal='🏆';
    else if(acc>=70) medal='🥈';
    else if(acc>=50) medal='🥉';

    return (
      <div style={{minHeight:'100vh',background:'linear-gradient(160deg,#05080f 0%,#0d0f1e 50%,#05080f 100%)',color:'white',fontFamily:'Inter,system-ui,sans-serif',display:'flex',alignItems:'center',justifyContent:'center',padding:20}}>
        <motion.div initial={{opacity:0,y:30,scale:0.95}} animate={{opacity:1,y:0,scale:1}}
          style={{width:'100%',maxWidth:520,background:'rgba(10,15,30,0.95)',border:'1px solid rgba(255,255,255,0.1)',borderRadius:24,overflow:'hidden',boxShadow:'0 40px 80px rgba(0,0,0,0.7)'}}>

          <div style={{padding:'36px 32px 22px',textAlign:'center',borderBottom:'1px solid rgba(255,255,255,0.07)'}}>
            <div style={{fontSize:60,marginBottom:10}}>{medal}</div>
            <h2 style={{margin:0,fontSize:26,fontWeight:900}}>Session abgeschlossen!</h2>
            <p style={{margin:'6px 0 0',fontSize:13,color:'#4b5563'}}>{total} Noten · {sessionTasks[0]?.clef==='treble'?'Violinschlüssel':'Bassschlüssel'}</p>
          </div>

          <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:10,padding:'22px 22px 0'}}>
            {[
              {label:'Richtig',value:`${score}/${total}`,color:'#34d399'},
              {label:'Genauigkeit',value:`${acc}%`,color:'#a78bfa'},
              {label:'Beste Serie 🔥',value:bestStreak,color:'#fbbf24'},
              {label:'Gespielte Noten',value:total,color:'#38bdf8'},
            ].map(s=>(
              <div key={s.label} style={{padding:'14px',borderRadius:14,background:'rgba(255,255,255,0.04)',border:'1px solid rgba(255,255,255,0.07)'}}>
                <div style={{fontSize:24,fontWeight:900,color:s.color}}>{s.value}</div>
                <div style={{fontSize:11,color:'#4b5563',marginTop:2}}>{s.label}</div>
              </div>
            ))}
          </div>

          {/* Per-note result grid */}
          <div style={{padding:'16px 22px'}}>
            <div style={{fontSize:10,fontWeight:700,color:'#374151',textTransform:'uppercase',letterSpacing:'0.1em',marginBottom:8}}>Verlauf aller Noten</div>
            <div style={{display:'flex',flexWrap:'wrap',gap:5}}>
              {sessionTasks.map((task,i)=>{
                const ok = results[i];
                const name = task.type==='chord' ? task.chord.de : task.name;
                return (
                  <div key={i} title={`${i+1}: ${name} ${ok?'✓':'✗'}`} style={{
                    width:30,height:30,borderRadius:8,fontSize:11,fontWeight:700,display:'flex',alignItems:'center',justifyContent:'center',
                    background:ok?'rgba(52,211,153,0.15)':'rgba(248,113,113,0.15)',
                    border:`1px solid ${ok?'rgba(52,211,153,0.4)':'rgba(248,113,113,0.4)'}`,
                    color:ok?'#34d399':'#f87171',cursor:'default',
                  }}>{ok?'✓':'✗'}</div>
                );
              })}
            </div>
          </div>

          <div style={{display:'flex',gap:10,padding:'14px 22px 26px',borderTop:'1px solid rgba(255,255,255,0.07)'}}>
            <motion.button whileHover={{scale:1.03}} whileTap={{scale:0.97}}
              onClick={startSession}
              style={{flex:1,padding:'16px',borderRadius:14,cursor:'pointer',background:'linear-gradient(135deg,#7c3aed,#db2777)',color:'white',fontWeight:900,fontSize:15,border:'none',display:'flex',alignItems:'center',justifyContent:'center',gap:8,boxShadow:'0 6px 24px rgba(124,58,237,0.4)'}}>
              <RefreshCw size={16}/>Nochmal
            </motion.button>
            <motion.button whileHover={{scale:1.03}} whileTap={{scale:0.97}}
              onClick={()=>setScreen('home')}
              style={{padding:'16px 18px',borderRadius:14,cursor:'pointer',background:'rgba(255,255,255,0.07)',border:'1px solid rgba(255,255,255,0.1)',color:'white',fontWeight:700,fontSize:15,display:'flex',alignItems:'center',gap:8}}>
              <Home size={16}/>Menü
            </motion.button>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div style={{minHeight:'100vh',background:'#05080f',display:'flex',alignItems:'center',justifyContent:'center',color:'white'}}>
      <div style={{textAlign:'center'}}>
        <div style={{width:52,height:52,borderRadius:15,background:'#7c3aed',display:'flex',alignItems:'center',justifyContent:'center',margin:'0 auto 14px'}}><Music size={24} color="white"/></div>
        <p style={{color:'#4b5563'}}>Piano Trainer wird geladen…</p>
      </div>
    </div>
  );
}
