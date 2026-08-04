import React, { useState, useCallback, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Play, Volume2, Headphones, Layers, Check, Flame,
  BookOpen, Shuffle, Home, Eye, EyeOff, RefreshCw, Music,
  ArrowRight, Zap
} from 'lucide-react';

/* ═══ DATA ═══ */
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
  beginner:['maj','min'], intermediate:['maj','min','dim','aug'], expert:CHORDS.map(c=>c.id),
};

const INTERVALS = [
  { semitones:1,  de:'kl. Sekunde',  en:'Minor 2nd',   short:'m2', color:'#f87171' },
  { semitones:2,  de:'gr. Sekunde',  en:'Major 2nd',   short:'M2', color:'#fb923c' },
  { semitones:3,  de:'kl. Terz',     en:'Minor 3rd',   short:'m3', color:'#fbbf24' },
  { semitones:4,  de:'gr. Terz',     en:'Major 3rd',   short:'M3', color:'#34d399' },
  { semitones:5,  de:'Reine Quarte', en:'Perfect 4th', short:'P4', color:'#22d3ee' },
  { semitones:6,  de:'Tritonus',     en:'Tritone',     short:'TT', color:'#a78bfa' },
  { semitones:7,  de:'Reine Quinte', en:'Perfect 5th', short:'P5', color:'#60a5fa' },
  { semitones:8,  de:'kl. Sexte',    en:'Minor 6th',   short:'m6', color:'#818cf8' },
  { semitones:9,  de:'gr. Sexte',    en:'Major 6th',   short:'M6', color:'#c084fc' },
  { semitones:10, de:'kl. Septime',  en:'Minor 7th',   short:'m7', color:'#e879f9' },
  { semitones:11, de:'gr. Septime',  en:'Major 7th',   short:'M7', color:'#f472b6' },
  { semitones:12, de:'Oktave',       en:'Octave',      short:'P8', color:'#38bdf8' },
];
const INTERVAL_SETS = {
  beginner:     [3,4,7,12],
  intermediate: [1,2,3,4,5,7,12],
  expert:       INTERVALS.map(iv=>iv.semitones),
};

const getMidiInfo = (midi, lang='de') => {
  const pc = ((midi%12)+12)%12;
  const octave = Math.floor(midi/12)-1;
  const name = lang==='de' ? NOTE_NAMES_DE[pc] : NOTE_NAMES_EN[pc];
  const isSharp = [1,3,6,8,10].includes(pc);
  const abs = octave*7+DIATONIC[pc];
  return { midi, pc, octave, name, isSharp, trebleStep:abs-30, bassStep:abs-18 };
};

/* ═══ SESSION GENERATOR ═══ */
function generateSession(cfg) {
  const sessionClef = cfg.clef==='both' ? (Math.random()>0.5?'treble':'bass') : cfg.clef;
  const tasks = [];
  for (let i=0; i<cfg.notesPerRound; i++) {
    let mode = cfg.mode;
    if (mode==='mixed') mode=['note-reading','chord-training','ear-training','interval-training'][Math.floor(Math.random()*4)];

    if (mode==='interval-training') {
      const sets = INTERVAL_SETS[cfg.intervalLevel]||INTERVAL_SETS.beginner;
      const semitones = sets[Math.floor(Math.random()*sets.length)];
      const iv = INTERVALS.find(x=>x.semitones===semitones);
      const rootMidi = (sessionClef==='treble'?60:43)+Math.floor(Math.random()*8);
      const topMidi = rootMidi+semitones;
      tasks.push({
        type:'interval-training', interval:iv, rootMidi, topMidi, clef:sessionClef,
        midi:rootMidi,
        staffNotes:[{midi:rootMidi},{midi:topMidi}],
      });
    } else if (mode==='note-reading'||mode==='ear-training') {
      const exp = cfg.difficulty==='expert';
      const minM = sessionClef==='treble'?(exp?57:60):(exp?36:43);
      const maxM = sessionClef==='treble'?(exp?84:77):(exp?64:60);
      const cands=[];
      for(let m=minM;m<=maxM;m++){
        const info=getMidiInfo(m,cfg.lang);
        const step=sessionClef==='bass'?info.bassStep:info.trebleStep;
        if(cfg.difficulty==='lines'&&step%2!==0) continue;
        if(cfg.difficulty==='spaces'&&step%2===0) continue;
        if(cfg.difficulty!=='expert'&&info.isSharp) continue;
        cands.push(m);
      }
      if(!cands.length) [60,62,64,65,67].forEach(m=>cands.push(m));
      const midi=cands[Math.floor(Math.random()*cands.length)];
      const info=getMidiInfo(midi,cfg.lang);
      tasks.push({type:mode,midi,name:info.name,clef:sessionClef,staffNotes:[{midi}]});
    } else {
      const chordIds=CHORD_SETS[cfg.chordLevel]||CHORD_SETS.beginner;
      const chord=CHORDS.find(c=>c.id===chordIds[Math.floor(Math.random()*chordIds.length)]);
      const rootMidi=(sessionClef==='treble'?60:43)+Math.floor(Math.random()*7);
      const midis=chord.intervals.map(iv=>rootMidi+iv);
      tasks.push({type:'chord-training',chord,clef:sessionClef,midis,midi:midis[0],staffNotes:midis.map(m=>({midi:m,color:chord.color}))});
    }
  }
  return tasks;
}

/* ═══ THEME CONFIG ═══ */
const THEMES = {
  dark: {
    staffBg: 'linear-gradient(180deg,#0e1a2e 0%,#12233d 100%)',
    staffBorder: 'rgba(148,163,184,0.16)',
    lineOuter: '#8aa0bd', lineInner: '#3f5c80',
    barLine: '#35506f',
    clef: c => c==='treble'?'#7dd3fc':'#e0b3ff',
    highlightFill: 'rgba(124,58,237,0.16)', highlightStroke: '#a78bfa',
    note: { default:'#f1f5f9', correct:'#34d399', wrong:'#f87171', future:'#4a6a95' },
    resultOk:'#34d399', resultBad:'#f87171',
    arrow:'#a78bfa',
    labelColor:'#6882a2',
  },
  paper: {
    staffBg: '#fefefe',
    staffBorder: 'rgba(0,0,0,0.18)',
    lineOuter: '#111827', lineInner: '#374151',
    barLine: '#9ca3af',
    clef: () => '#111827',
    highlightFill: 'rgba(109,40,217,0.06)', highlightStroke: '#7c3aed',
    note: { default:'#0f172a', correct:'#15803d', wrong:'#dc2626', future:'#d1d5db' },
    resultOk:'#15803d', resultBad:'#dc2626',
    arrow:'#7c3aed',
    labelColor:'#6b7280',
  },
};

/* ═══ SCROLLING STAFF ═══ */
function ScrollingStaff({ tasks, currentIdx, results, clef, revealCurrent=true, theme='dark' }) {
  const outerRef = useRef(null);
  const [contW, setContW] = React.useState(640);
  const tc = THEMES[theme]||THEMES.dark;

  React.useEffect(()=>{
    const el=outerRef.current; if(!el) return;
    const obs=new ResizeObserver(([e])=>setContW(e.contentRect.width));
    obs.observe(el); setContW(el.offsetWidth);
    return ()=>obs.disconnect();
  },[]);

  const SP=84, LP=94, GAP=17, ST=46, NL=5, NRX=9.5, NRY=6.8;
  const svgW=Math.max(LP+tasks.length*SP+60,contW);
  const svgH=ST+(NL+5)*GAP+38;
  const getY=step=>ST+(NL-1)*GAP-step*(GAP/2);
  const currentNoteX=LP+currentIdx*SP;
  const panOffset=Math.max(0,currentNoteX-contW/2+SP/2);

  return (
    <div ref={outerRef} style={{
      overflow:'hidden',borderRadius:16,position:'relative',
      background:tc.staffBg,border:`1px solid ${tc.staffBorder}`,
      boxShadow: theme==='paper'?'0 4px 20px rgba(0,0,0,0.12)':'0 12px 40px rgba(0,0,0,0.5)',
    }}>
      <motion.div
        animate={{x:-panOffset}}
        transition={{type:'spring',stiffness:260,damping:34}}
        style={{willChange:'transform',display:'inline-block'}}
      >
        <svg width={svgW} height={svgH} style={{display:'block'}}>
          {/* Background fill */}
          <rect x={0} y={0} width={svgW} height={svgH} fill={theme==='paper'?'#fefefe':'#0f1d33'}/>

          {/* Staff lines */}
          {Array.from({length:NL},(_,i)=>{
            const y=ST+i*GAP; const isOuter=i===0||i===NL-1;
            return <line key={i} x1={LP-12} y1={y} x2={svgW-10} y2={y} stroke={isOuter?tc.lineOuter:tc.lineInner} strokeWidth={isOuter?1.7:1.1}/>;
          })}

          {/* Vertical bar at start */}
          <line x1={LP-12} y1={ST} x2={LP-12} y2={ST+(NL-1)*GAP} stroke={tc.lineOuter} strokeWidth="2.4"/>

          {/* Clef */}
          <text x="8" y={clef==='treble'?ST+GAP*3.5:ST+GAP*2.2} fontSize={clef==='treble'?GAP*6.8:GAP*5} fontFamily="Times New Roman,serif" fill={tc.clef(clef)} opacity="0.95">
            {clef==='treble'?'𝄞':'𝄢'}
          </text>

          {/* Bar lines every 4 notes */}
          {tasks.map((_,i)=>i>0&&i%4===0?(
            <line key={`b${i}`}
              x1={LP+i*SP-SP*0.42} y1={ST}
              x2={LP+i*SP-SP*0.42} y2={ST+(NL-1)*GAP}
              stroke={tc.barLine} strokeWidth="1.2"/>
          ):null)}

          {/* Current highlight */}
          {currentIdx<tasks.length&&(
            <rect
              x={LP+currentIdx*SP-SP*0.44} y={ST-11}
              width={SP*0.88} height={(NL-1)*GAP+22}
              rx={10} fill={tc.highlightFill}
              stroke={tc.highlightStroke} strokeWidth="1.5" strokeDasharray="5 3"
            />
          )}

          {/* Notes */}
          {tasks.map((task,i)=>{
            const answered=i<currentIdx;
            const isCurrent=i===currentIdx;
            const isFuture=i>currentIdx;
            const isEarHidden=task.type==='ear-training'&&isCurrent&&!revealCurrent&&!answered;
            const noteX=LP+i*SP;
            const isInterval=task.type==='interval-training';

            if(isEarHidden){
              return (
                <g key={i}>
                  <text x={noteX} y={ST+(NL-1)*GAP/2+5} textAnchor="middle" fontSize="24" fontWeight="bold"
                    fill={tc.highlightStroke} opacity="0.75" fontFamily="Inter,sans-serif">?</text>
                </g>
              );
            }
            if(task.type==='ear-training'&&isFuture){
              return (
                <g key={i} opacity="0.2">
                  <text x={noteX} y={ST+(NL-1)*GAP/2+5} textAnchor="middle" fontSize="18"
                    fill={theme==='paper'?'#9ca3af':'#1e3a5f'} fontFamily="Inter,sans-serif">?</text>
                </g>
              );
            }

            // Render staff notes
            return (
              <g key={i}>
                {task.staffNotes.map((noteObj,ni)=>{
                  const info=getMidiInfo(noteObj.midi);
                  const step=task.clef==='bass'?info.bassStep:info.trebleStep;
                  const y=getY(step);
                  // Interval: slightly offset notes horizontally for melodic feel
                  const xOff=noteX+(isInterval&&ni===1?SP*0.28:0);
                  let color;
                  if(answered) color=results[i]?tc.note.correct:tc.note.wrong;
                  else if(isCurrent) color=noteObj.color||tc.note.default;
                  else color=noteObj.color?(noteObj.color+'44'):tc.note.future;
                  const opacity=isFuture?0.3:1;
                  // Ledger lines
                  const ll=[];
                  if(step<=-2) for(let s=-2;s>=step;s-=2) ll.push(getY(s));
                  if(step>=10)  for(let s=10;s<=step;s+=2) ll.push(getY(s));
                  const stemUp=step<4;
                  return (
                    <g key={ni} opacity={opacity}>
                      {ni===0&&ll.map((ly,li)=>(
                        <line key={li} x1={xOff-NRX-5} y1={ly} x2={xOff+NRX+5} y2={ly} stroke={color} strokeWidth="1.9"/>
                      ))}
                      {info.isSharp&&ni===0&&(
                        <text x={xOff-NRX-15} y={y+5} fontSize="17" fontWeight="bold" fill={color} fontFamily="Times New Roman,serif">♯</text>
                      )}
                      <ellipse cx={xOff} cy={y} rx={NRX} ry={NRY} fill={color} transform={`rotate(-12 ${xOff} ${y})`}/>
                      {ni===task.staffNotes.length-1&&(
                        <line
                          x1={stemUp?xOff+NRX-1:xOff-NRX+1} y1={y}
                          x2={stemUp?xOff+NRX-1:xOff-NRX+1} y2={stemUp?y-GAP*2.8:y+GAP*2.8}
                          stroke={color} strokeWidth="2.2"
                        />
                      )}
                    </g>
                  );
                })}
                {/* Interval arc between notes */}
                {isInterval&&task.staffNotes.length===2&&!isFuture&&(()=>{
                  const i1=getMidiInfo(task.staffNotes[0].midi);
                  const i2=getMidiInfo(task.staffNotes[1].midi);
                  const s1=task.clef==='bass'?i1.bassStep:i1.trebleStep;
                  const s2=task.clef==='bass'?i2.bassStep:i2.trebleStep;
                  const y1=getY(s1); const y2=getY(s2);
                  const mx=noteX; const mx2=noteX+SP*0.28;
                  const color=answered?results[i]?tc.note.correct:tc.note.wrong:(task.interval?.color||tc.note.default);
                  return <line x1={mx} y1={y1} x2={mx2} y2={y2} stroke={color} strokeWidth="1.4" strokeDasharray="4 3" opacity="0.6"/>;
                })()}
              </g>
            );
          })}

          {/* Result/progress indicators */}
          {tasks.map((task,i)=>{
            const answered=i<currentIdx;
            const isCurrent=i===currentIdx;
            const noteX=LP+i*SP;
            if(answered){
              return <text key={`r${i}`} x={noteX} y={svgH-10} textAnchor="middle" fontSize="12" fontWeight="800"
                fill={results[i]?tc.resultOk:tc.resultBad} fontFamily="Inter,sans-serif">{results[i]?'✓':'✗'}</text>;
            }
            if(isCurrent){
              return <text key={`r${i}`} x={noteX} y={svgH-8} textAnchor="middle" fontSize="14" fill={tc.arrow} fontFamily="Inter,sans-serif">▲</text>;
            }
            return <text key={`r${i}`} x={noteX} y={svgH-11} textAnchor="middle" fontSize="7" fill={tc.labelColor} fontFamily="Inter,sans-serif">●</text>;
          })}
        </svg>
      </motion.div>
    </div>
  );
}

/* ═══ VIRTUAL PIANO ═══ */
function VirtualPiano({ startMidi=48,endMidi=72,correctKeys=new Set(),wrongKeys=new Set(),onKeyClick,disabled=false,showLabels=false,keyHeight=140,lang='de' }) {
  const whites=[], blacks=[];
  for(let m=startMidi;m<=endMidi;m++){
    if([1,3,6,8,10].includes(m%12)) blacks.push(m); else whites.push(m);
  }
  const wIdx={};
  whites.forEach((m,i)=>{wIdx[m]=i;});
  const tw=whites.length, ww=100/tw, bw=ww*0.6, bh=keyHeight*0.63;
  const bLeft=midi=>{const lw=wIdx[midi-1]; return lw===undefined?null:lw*ww+ww*0.63;};

  return (
    <div style={{position:'relative',width:'100%',height:keyHeight,background:'linear-gradient(180deg,#1a2035,#0a0f1e)',borderRadius:16,overflow:'hidden',border:'1px solid rgba(255,255,255,0.08)',boxShadow:'0 16px 48px rgba(0,0,0,0.6)',userSelect:'none'}}>
      {whites.map(midi=>{
        const info=getMidiInfo(midi,lang);
        const isCor=correctKeys.has(midi),isWrg=wrongKeys.has(midi);
        let bg='linear-gradient(180deg,#f8fafc,#dde4ef)',shadow='inset 0 -4px 0 #b2bec8,inset 0 1px 0 white',tc='#1e293b';
        if(isCor){bg='linear-gradient(180deg,#86efac,#22c55e)';shadow='inset 0 -4px 0 #15803d,0 0 20px #22c55e55';tc='#14532d';}
        else if(isWrg){bg='linear-gradient(180deg,#fca5a5,#ef4444)';shadow='inset 0 -4px 0 #b91c1c,0 0 20px #ef444455';tc='#fff';}
        return (
          <button key={midi} disabled={disabled} onClick={()=>!disabled&&onKeyClick&&onKeyClick(midi)} style={{position:'absolute',top:0,bottom:0,left:`${(wIdx[midi]/tw)*100}%`,width:`${ww}%`,background:bg,boxShadow:shadow,border:'1px solid rgba(148,163,184,0.25)',borderRadius:'0 0 10px 10px',cursor:disabled?'default':'pointer',zIndex:1,display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'flex-end',paddingBottom:7,transition:'filter 0.08s'}}
            onMouseDown={e=>{if(!disabled)e.currentTarget.style.filter='brightness(0.87)';}}
            onMouseUp={e=>e.currentTarget.style.filter='brightness(1)'}
            onMouseLeave={e=>e.currentTarget.style.filter='brightness(1)'}
          >
            {(showLabels||isCor||isWrg)&&<span style={{fontSize:10,fontWeight:700,color:tc,opacity:0.85,fontFamily:'Inter,sans-serif'}}>{info.pc===0?`${info.name}${info.octave}`:info.name}</span>}
          </button>
        );
      })}
      {blacks.map(midi=>{
        const info=getMidiInfo(midi,lang);
        const left=bLeft(midi); if(left===null) return null;
        const isCor=correctKeys.has(midi),isWrg=wrongKeys.has(midi);
        let bg='linear-gradient(180deg,#475569,#0a0f1e)',shadow='inset 0 -5px 0 #000,inset 0 1px 0 #64748b';
        if(isCor){bg='linear-gradient(180deg,#4ade80,#15803d)';shadow='inset 0 -5px 0 #14532d,0 0 18px #22c55e66';}
        else if(isWrg){bg='linear-gradient(180deg,#f87171,#b91c1c)';shadow='inset 0 -5px 0 #7f1d1d,0 0 18px #ef444466';}
        return (
          <button key={midi} disabled={disabled} onClick={e=>{e.stopPropagation();!disabled&&onKeyClick&&onKeyClick(midi);}} style={{position:'absolute',top:0,left:`${left}%`,width:`${bw}%`,height:bh,background:bg,boxShadow:shadow,border:'1px solid #0a0f1e',borderRadius:'0 0 8px 8px',cursor:disabled?'default':'pointer',zIndex:10,display:'flex',alignItems:'flex-end',justifyContent:'center',paddingBottom:4,transition:'filter 0.08s'}}
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

/* ═══ UI HELPERS ═══ */
function SLabel({children}){
  return <div style={{fontSize:10,fontWeight:700,color:'#4b5563',textTransform:'uppercase',letterSpacing:'0.1em',marginBottom:7,paddingLeft:2}}>{children}</div>;
}
function Pills({options,value,onChange,color='#7c3aed',small=false}){
  return (
    <div style={{display:'flex',flexWrap:'wrap',gap:6}}>
      {options.map(opt=>{
        const id=opt.id??opt; const label=opt.label??opt;
        const active=String(value)===String(id);
        return (
          <button key={String(id)} type="button" onClick={()=>onChange(id)} style={{
            padding:small?'5px 11px':'7px 15px',borderRadius:99,cursor:'pointer',
            fontSize:small?11:12,fontWeight:700,
            background:active?color:'rgba(255,255,255,0.07)',
            color:active?'white':'#64748b',border:'none',transition:'all 0.13s',
            boxShadow:active?`0 2px 12px ${color}55`:'none',
          }}>{label}</button>
        );
      })}
    </div>
  );
}
function SToggle({value,onChange,label,sub}){
  return (
    <div onClick={()=>onChange(!value)} style={{display:'flex',alignItems:'center',justifyContent:'space-between',cursor:'pointer',padding:'10px 14px',borderRadius:12,background:'rgba(255,255,255,0.04)',border:'1px solid rgba(255,255,255,0.07)',transition:'background 0.13s'}}>
      <div>
        <div style={{fontSize:13,fontWeight:600,color:'white'}}>{label}</div>
        {sub&&<div style={{fontSize:11,color:'#4b5563',marginTop:1}}>{sub}</div>}
      </div>
      <div style={{position:'relative',flexShrink:0,marginLeft:12,width:46,height:26,borderRadius:13,background:value?'linear-gradient(90deg,#7c3aed,#db2777)':'#1e293b',border:'1px solid rgba(255,255,255,0.1)',transition:'background 0.2s'}}>
        <div style={{position:'absolute',top:3,borderRadius:'50%',width:18,height:18,background:'white',boxShadow:'0 1px 4px rgba(0,0,0,0.4)',left:value?24:4,transition:'left 0.18s'}}/>
      </div>
    </div>
  );
}

/* ═══ NEXT NOTE PREVIEW ═══ */
function NotePreview({ task, clef, theme }) {
  if (!task) return null;
  const tc = THEMES[theme] || THEMES.dark;
  const GAP = 16, ST = 28, NL = 5;
  const NRX = 12, NRY = 8.5;
  const svgW = 126;

  // Collect all notes to render (chord = multiple, else single)
  const noteObjs = task.staffNotes || (task.midi ? [{midi:task.midi}] : []);
  // For ear-training preview: show "?" instead of the note (don't spoil)
  const isEar = task.type === 'ear-training';

  const getY = step => ST + (NL-1)*GAP - step*(GAP/2);

  // Compute height dynamically based on note positions
  let minStep = 0, maxStep = 8;
  if (!isEar) {
    noteObjs.forEach(n => {
      const info = getMidiInfo(n.midi);
      const step = clef==='bass' ? info.bassStep : info.trebleStep;
      if (step < minStep) minStep = step;
      if (step > maxStep) maxStep = step;
    });
  }
  const extraTop    = Math.max(0, maxStep - (NL-1)*2) * (GAP/2);
  const extraBottom = Math.max(0, -minStep) * (GAP/2);
  const svgH = ST + (NL-1)*GAP + extraTop + extraBottom + 32;
  const staffTopAdj = ST + extraTop;
  const getYadj = step => staffTopAdj + (NL-1)*GAP - step*(GAP/2);

  return (
    <svg width={svgW} height={svgH} style={{display:'block'}}>
      <rect x={0} y={0} width={svgW} height={svgH} fill={theme==='paper'?'#fefefe':'#0f1d33'} rx={10}/>
      {/* Staff lines */}
      {Array.from({length:NL},(_,i)=>{
        const y=staffTopAdj+i*GAP; const isOuter=i===0||i===NL-1;
        return <line key={i} x1={32} y1={y} x2={svgW-8} y2={y}
          stroke={isOuter?tc.lineOuter:tc.lineInner}
          strokeWidth={isOuter?1.5:1}/>;
      })}
      <line x1={32} y1={staffTopAdj} x2={32} y2={staffTopAdj+(NL-1)*GAP} stroke={tc.lineOuter} strokeWidth="2"/>
      {/* Clef */}
      <text x="4" y={clef==='treble'?staffTopAdj+GAP*3.4:staffTopAdj+GAP*2.1}
        fontSize={clef==='treble'?GAP*5.5:GAP*4.2}
        fontFamily="Times New Roman,serif" fill={tc.clef(clef)} opacity="0.85">
        {clef==='treble'?'𝄞':'𝄢'}
      </text>
      {/* Note or question mark */}
      {isEar ? (
        <text x={svgW/2} y={staffTopAdj+(NL-1)*GAP/2+6} textAnchor="middle"
          fontSize="28" fontWeight="bold" fill={tc.highlightStroke} opacity="0.7"
          fontFamily="Inter,sans-serif">?</text>
      ) : noteObjs.map((noteObj, ni) => {
        const info = getMidiInfo(noteObj.midi);
        const step = clef==='bass' ? info.bassStep : info.trebleStep;
        const y = getYadj(step);
        const nx = 82 + (noteObjs.length > 1 ? (ni-(noteObjs.length-1)/2)*5 : 0);
        const color = noteObj.color || tc.note.default;
        const stemUp = step < 4;
        const ll = [];
        if(step<=-2) for(let s=-2;s>=step;s-=2) ll.push(getYadj(s));
        if(step>=10)  for(let s=10;s<=step;s+=2) ll.push(getYadj(s));
        return (
          <g key={ni} opacity="0.82">
            {ni===0 && ll.map((ly,li)=>(
              <line key={li} x1={nx-NRX-6} y1={ly} x2={nx+NRX+6} y2={ly}
                stroke={color} strokeWidth="2"/>
            ))}
            {info.isSharp && ni===0 && (
              <text x={nx-NRX-18} y={y+6} fontSize="18" fontWeight="bold"
                fill={color} fontFamily="Times New Roman,serif">♯</text>
            )}
            <ellipse cx={nx} cy={y} rx={NRX} ry={NRY}
              fill={color} transform={`rotate(-12 ${nx} ${y})`}/>
            <line
              x1={stemUp?nx+NRX-1:nx-NRX+1} y1={y}
              x2={stemUp?nx+NRX-1:nx-NRX+1} y2={stemUp?y-GAP*2.6:y+GAP*2.6}
              stroke={color} strokeWidth="2.2"/>
          </g>
        );
      })}
    </svg>
  );
}

/* ═══ CONFIG ═══ */
const DEFAULT_CFG = {
  mode:'note-reading', clef:'treble', difficulty:'mixed', lang:'de',
  notesPerRound:12, keyboardSize:'medium', keyHeight:'medium',
  showLabels:false, inputMode:'both', soundType:'piano',
  autoPlaySound:true, autoAdvance:true, advanceSpeed:'fast',
  timedMode:false, timeLimit:10, chordLevel:'beginner',
  intervalLevel:'beginner', staffTheme:'dark',
  showNextPreview:false,  // preview of upcoming note (notes already visible in staff)
};
const ADVANCE_DELAYS={instant:[60,250],fast:[280,650],normal:[700,1400]};
const KEY_H={small:100,medium:140,large:180,xlarge:220};
const KEY_RANGE={
  small:{treble:[60,71],bass:[43,54]},
  medium:{treble:[55,79],bass:[36,60]},
  large:{treble:[48,83],bass:[29,64]},
  xlarge:{treble:[41,88],bass:[24,67]},
};

/* ═══ MAIN COMPONENT ═══ */
export default function PianoTrainer() {
  const [screen,setScreen]           = React.useState('home');
  const [cfg,setCfg]                 = React.useState(DEFAULT_CFG);
  const [sessionTasks,setSessionTasks] = React.useState([]);
  const [currentIdx,setCurrentIdx]   = React.useState(0);
  const [results,setResults]         = React.useState([]);
  const [flashFeedback,setFlashFeedback] = React.useState(null); // non-blocking badge
  const [isAnswered,setIsAnswered]   = React.useState(false);   // for UI highlights only
  const [revealEar,setRevealEar]     = React.useState(false);
  const [score,setScore]             = React.useState(0);
  const [streak,setStreak]           = React.useState(0);
  const [bestStreak,setBestStreak]   = React.useState(0);
  const [timeLeft,setTimeLeft]       = React.useState(10);

  const timerRef     = React.useRef(null);
  const advTimRef    = React.useRef(null);
  const flashTimRef  = React.useRef(null);
  const answeredRef  = React.useRef(false); // sync ref prevents double-answer
  const startRef     = React.useRef(0);
  const audioRef     = React.useRef(null);
  const gainRef      = React.useRef(null);
  const resultsRef   = React.useRef([]); // mirror of results for closures

  /* ── Audio: realistic piano with 8 harmonics + hammer noise ── */
  const getCtx=React.useCallback(()=>{
    if(!audioRef.current||audioRef.current.state==='closed'){
      audioRef.current=new(window.AudioContext||window.webkitAudioContext)();
      gainRef.current=audioRef.current.createGain();
      gainRef.current.connect(audioRef.current.destination);
    }
    if(audioRef.current.state==='suspended') audioRef.current.resume();
    gainRef.current.gain.setValueAtTime(0.72,audioRef.current.currentTime);
    return audioRef.current;
  },[]);

  const playNote=React.useCallback((midi,dur=1.4,vol=1.0)=>{
    try{
      const ctx=getCtx(),now=ctx.currentTime,f=440*Math.pow(2,(midi-69)/12),m=gainRef.current;
      if(cfg.soundType==='piano'){
        // 8-harmonic piano with slight detuning for richness
        const harmonics=[
          [1,0.48*vol,1.1,0],
          [2,0.20*vol,0.70,+1.2],
          [3,0.11*vol,0.50,-0.8],
          [4,0.055*vol,0.35,+0.6],
          [5,0.026*vol,0.24,-0.4],
          [6,0.013*vol,0.17,+0.3],
          [7,0.006*vol,0.12,0],
          [8,0.003*vol,0.09,0],
        ];
        harmonics.forEach(([mult,g,dm,detCents])=>{
          const osc=ctx.createOscillator(),gn=ctx.createGain();
          osc.type='sine';
          const detF=f*mult*Math.pow(2,detCents/1200);
          osc.frequency.setValueAtTime(detF,now);
          gn.gain.setValueAtTime(0,now);
          gn.gain.linearRampToValueAtTime(g,now+0.006);
          gn.gain.setValueAtTime(g,now+0.01);
          gn.gain.exponentialRampToValueAtTime(g*0.4,now+dur*0.15);
          gn.gain.exponentialRampToValueAtTime(0.0001,now+dur*dm);
          osc.connect(gn).connect(m);osc.start(now);osc.stop(now+dur*dm+0.05);
        });
        // Hammer noise transient
        try{
          const bSize=Math.floor(ctx.sampleRate*0.06);
          const nbuf=ctx.createBuffer(1,bSize,ctx.sampleRate);
          const data=nbuf.getChannelData(0);
          for(let k=0;k<bSize;k++) data[k]=(Math.random()*2-1)*Math.exp(-k/(bSize*0.08));
          const ns=ctx.createBufferSource(),nf=ctx.createBiquadFilter(),ng=ctx.createGain();
          ns.buffer=nbuf; nf.type='bandpass'; nf.frequency.value=f*1.5; nf.Q.value=0.8;
          ng.gain.setValueAtTime(0.018*vol,now); ng.gain.exponentialRampToValueAtTime(0.0001,now+0.05);
          ns.connect(nf).connect(ng).connect(m); ns.start(now); ns.stop(now+0.07);
        }catch(e){}
      }else if(cfg.soundType==='organ'){
        [1,2,3,4,6,8].forEach((mult,i)=>{
          const osc=ctx.createOscillator(),gn=ctx.createGain();
          osc.type='sine';osc.frequency.setValueAtTime(f*mult,now);
          const v=[0.28,0.16,0.09,0.05,0.02,0.01][i]*vol;
          gn.gain.setValueAtTime(0,now);gn.gain.linearRampToValueAtTime(v,now+0.012);
          gn.gain.setValueAtTime(v,now+dur*0.85);gn.gain.linearRampToValueAtTime(0,now+dur);
          osc.connect(gn).connect(m);osc.start(now);osc.stop(now+dur+0.02);
        });
      }else{
        const osc=ctx.createOscillator(),gn=ctx.createGain();
        osc.type='triangle';osc.frequency.setValueAtTime(f,now);
        gn.gain.setValueAtTime(0,now);gn.gain.linearRampToValueAtTime(0.3*vol,now+0.01);
        gn.gain.exponentialRampToValueAtTime(0.0001,now+dur);
        osc.connect(gn).connect(m);osc.start(now);osc.stop(now+dur+0.02);
      }
    }catch(e){console.warn('audio:',e);}
  },[cfg.soundType,getCtx]);

  const playChord=React.useCallback(midis=>{midis.forEach((m,i)=>setTimeout(()=>playNote(m,2),i*55));},[playNote]);

  /* ── Feedback sounds: correct replays note, wrong is gentle drop ── */
  const playFeedback=React.useCallback((ok,task)=>{
    if(ok){
      // Replay the correct note/chord beautifully
      if(task.type==='chord-training'&&task.midis) task.midis.forEach((m,i)=>setTimeout(()=>playNote(m,1.6),i*40));
      else if(task.type==='interval-training') {
        setTimeout(()=>playNote(task.rootMidi,1.2),0);
        setTimeout(()=>playNote(task.topMidi,1.2),120);
      }
      else playNote(task.midi,1.6);
    }else{
      // Gentle descending tone (no jarring sound)
      try{
        const ctx=getCtx(),now=ctx.currentTime,m=gainRef.current;
        [[330,0],[295,0.12],[260,0.24]].forEach(([freq,delay])=>{
          const osc=ctx.createOscillator(),gn=ctx.createGain();
          osc.type='sine'; osc.frequency.setValueAtTime(freq,now+delay);
          gn.gain.setValueAtTime(0.18,now+delay);
          gn.gain.exponentialRampToValueAtTime(0.0001,now+delay+0.28);
          osc.connect(gn).connect(m);osc.start(now+delay);osc.stop(now+delay+0.3);
        });
      }catch(e){}
    }
  },[playNote,getCtx]);

  /* ── Session ── */
  const startSession=React.useCallback(()=>{
    clearTimeout(advTimRef.current); clearInterval(timerRef.current);
    const tasks=generateSession(cfg);
    setSessionTasks(tasks); setCurrentIdx(0); setResults([]);
    setFlashFeedback(null); setIsAnswered(false); setRevealEar(false);
    setScore(0); setStreak(0); setBestStreak(0);
    setScreen('training');
    startRef.current=performance.now();
    if(cfg.autoPlaySound){
      const t=tasks[0];
      if(t.type==='chord-training') setTimeout(()=>playChord(t.midis),120);
      else if(t.type==='interval-training') { setTimeout(()=>playNote(t.rootMidi,1.3),120); setTimeout(()=>playNote(t.topMidi,1.3),360); }
      else if(t.type!=='ear-training') setTimeout(()=>playNote(t.midi,1.3),120);
    }
  },[cfg,playNote,playChord]);

  /* ── Advance to next note ── */
  const advanceToNext=React.useCallback((nextIdx,tasks,cfgSnap)=>{
    clearTimeout(advTimRef.current);
    answeredRef.current=false; // reset sync guard immediately
    if(nextIdx>=(tasks||sessionTasks).length){ setScreen('result'); return; }
    // Batch all resets together → single re-render, buttons instantly active
    setCurrentIdx(nextIdx);
    setIsAnswered(false);
    setRevealEar(false);
    resultsRef.current=[...resultsRef.current]; // keep in sync
    startRef.current=performance.now();
    const t=(tasks||sessionTasks)[nextIdx];
    if((cfgSnap||cfg).autoPlaySound){
      if(t.type==='chord-training') setTimeout(()=>playChord(t.midis),60);
      else if(t.type==='interval-training'){setTimeout(()=>playNote(t.rootMidi,1.3),60);setTimeout(()=>playNote(t.topMidi,1.3),300);}
      else if(t.type!=='ear-training') setTimeout(()=>playNote(t.midi,1.3),60);
    }
    if((cfgSnap||cfg).timedMode) setTimeLeft((cfgSnap||cfg).timeLimit);
  },[sessionTasks,cfg,playNote,playChord]);

  /* ── Submit answer — uses ref for sync blocking, advances immediately ── */
  const submitAnswer=React.useCallback((userAns,isTimeout=false)=>{
    // answeredRef prevents double-count even within the same render cycle
    if(answeredRef.current||currentIdx>=sessionTasks.length) return;
    answeredRef.current=true;
    clearInterval(timerRef.current); clearTimeout(advTimRef.current);
    setIsAnswered(true); setRevealEar(true);

    const task=sessionTasks[currentIdx];
    const elapsed=Math.round(performance.now()-startRef.current);
    let ok=false;
    if(!isTimeout){
      if(task.type==='interval-training') ok=Number(userAns)===task.interval.semitones;
      else if(task.type==='note-reading'||task.type==='ear-training')
        ok=typeof userAns==='number'?(userAns%12)===(task.midi%12):userAns===task.name;
      else if(task.type==='chord-training') ok=userAns===task.chord.id||userAns===task.chord.de;
    }

    const newStreak=ok?streak+1:0;
    if(ok) setScore(s=>s+1);
    setStreak(newStreak);
    if(newStreak>bestStreak) setBestStreak(newStreak);

    const correctText=task.type==='chord-training'?task.chord.de:task.type==='interval-training'?(cfg.lang==='de'?task.interval.de:task.interval.en):task.name;

    // Flash feedback: non-blocking overlay, auto-clears
    clearTimeout(flashTimRef.current);
    setFlashFeedback({ok,
      msg:isTimeout?`⏱ ${correctText}`:ok?'✓':('✗  '+correctText),
      elapsed});
    flashTimRef.current=setTimeout(()=>setFlashFeedback(null),ok?700:1100);

    // Store result in ref immediately for staff rendering, then sync state
    const newResults=[...resultsRef.current,ok];
    resultsRef.current=newResults;
    setResults(newResults);
    playFeedback(ok,task);

    // Advance: instant=50ms always, fast=180ms ok/500ms wrong, normal=700/1400
    const delays={instant:[50,50],fast:[180,500],normal:[700,1400]};
    const [cD,wD]=delays[cfg.advanceSpeed]||delays.fast;
    const advDelay=ok?cD:wD;
    if(cfg.autoAdvance){
      advTimRef.current=setTimeout(()=>advanceToNext(currentIdx+1,sessionTasks,cfg),advDelay);
    }
  },[currentIdx,sessionTasks,streak,bestStreak,cfg,playFeedback,advanceToNext]);

  /* ── Timer ── */
  React.useEffect(()=>{
    if(!cfg.timedMode||screen!=='training'||answeredRef.current||!sessionTasks.length) return;
    setTimeLeft(cfg.timeLimit);
    timerRef.current=setInterval(()=>{
      setTimeLeft(prev=>{
        if(prev<=1){clearInterval(timerRef.current);submitAnswer(null,true);return 0;}
        return prev-1;
      });
    },1000);
    return ()=>clearInterval(timerRef.current);
  // eslint-disable-next-line
  },[currentIdx,cfg.timedMode,screen]);

  /* ── Keyboard navigation: Space/Enter always usable ── */
  React.useEffect(()=>{
    const handler=e=>{
      if(screen!=='training') return;
      // Space/Enter: skip waiting, advance immediately
      if(answeredRef.current&&(e.key===' '||e.key==='ArrowRight'||e.key==='Enter')){
        e.preventDefault();
        clearTimeout(advTimRef.current);
        advanceToNext(currentIdx+1);
      }
    };
    window.addEventListener('keydown',handler);
    return ()=>window.removeEventListener('keydown',handler);
  },[screen,currentIdx,advanceToNext]);

  React.useEffect(()=>()=>{clearTimeout(advTimRef.current);clearInterval(timerRef.current);clearTimeout(flashTimRef.current);},[]);

  const goNext=React.useCallback(()=>{clearTimeout(advTimRef.current);advanceToNext(currentIdx+1);},[advanceToNext,currentIdx]);

  const currentTask=sessionTasks[currentIdx];
  const sessionClef=sessionTasks[0]?.clef||cfg.clef;
  const noteButtons=cfg.lang==='de'?['C','D','E','F','G','A','H']:['C','D','E','F','G','A','B'];
  const keyRange=KEY_RANGE[cfg.keyboardSize]?.[sessionClef==='bass'?'bass':'treble']||[55,79];
  const keyHeightPx=KEY_H[cfg.keyHeight]||140;

  const correctKeys=new Set(),wrongKeys=new Set();
  if(isAnswered&&currentTask){
    const midis=currentTask.type==='chord-training'?currentTask.midis:currentTask.type==='interval-training'?[currentTask.rootMidi,currentTask.topMidi]:[currentTask.midi];
    if(flashFeedback?.ok) midis.forEach(m=>correctKeys.add(m));
    else midis.forEach(m=>wrongKeys.add(m));
  }

  /* ════════ HOME ════════ */
  if(screen==='home'){
    const s=cfg; const set=k=>v=>setCfg(p=>({...p,[k]:v}));
    const setN=k=>v=>setCfg(p=>({...p,[k]:Number(v)}));
    const modes=[
      {id:'note-reading',   label:'🎼 Noten',     color:'#7c3aed'},
      {id:'chord-training', label:'🎹 Akkorde',   color:'#9333ea'},
      {id:'ear-training',   label:'👂 Gehör',     color:'#059669'},
      {id:'interval-training',label:'🎵 Intervalle',color:'#0891b2'},
      {id:'mixed',          label:'🔀 Mix',       color:'#d97706'},
    ];
    const activeMode=modes.find(m=>m.id===s.mode)||modes[0];

    return (
      <div style={{minHeight:'100vh',background:'linear-gradient(160deg,#05080f 0%,#0d0f1e 50%,#05080f 100%)',color:'white',fontFamily:'Inter,system-ui,sans-serif'}}>
        <div style={{position:'fixed',inset:0,pointerEvents:'none',overflow:'hidden'}}>
          <div style={{position:'absolute',top:-300,left:-200,width:700,height:700,background:'radial-gradient(circle,rgba(124,58,237,0.1) 0%,transparent 65%)',borderRadius:'50%'}}/>
          <div style={{position:'absolute',bottom:-200,right:-200,width:600,height:600,background:'radial-gradient(circle,rgba(16,185,129,0.06) 0%,transparent 65%)',borderRadius:'50%'}}/>
        </div>
        <div style={{position:'relative',zIndex:10,maxWidth:920,margin:'0 auto',padding:'26px 18px 52px'}}>
          {/* Header */}
          <div style={{display:'flex',alignItems:'center',gap:14,marginBottom:24}}>
            <div style={{width:52,height:52,borderRadius:15,flexShrink:0,background:'linear-gradient(135deg,#7c3aed,#db2777)',display:'flex',alignItems:'center',justifyContent:'center',boxShadow:'0 6px 28px rgba(124,58,237,0.4)'}}>
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><rect x="2" y="4" width="20" height="14" rx="2"/><path d="M8 4v14M12 4v14M16 4v14"/><path d="M5 14h1M10 10h1M14 14h1M19 10h1" strokeLinecap="round" strokeWidth="2.5"/></svg>
            </div>
            <div>
              <h1 style={{margin:0,fontSize:26,fontWeight:900,background:'linear-gradient(135deg,#fff,#c4b5fd 60%,#f9a8d4)',WebkitBackgroundClip:'text',WebkitTextFillColor:'transparent'}}>Piano Trainer</h1>
              <p style={{margin:'3px 0 0',fontSize:12,color:'#4b5563'}}>Notenlesen · Akkorde · Gehörtraining · Intervalle</p>
            </div>
          </div>

          <div style={{display:'grid',gridTemplateColumns:'1fr',gap:16}}>
            {/* Mode picker */}
            <div style={{background:'rgba(255,255,255,0.03)',border:'1px solid rgba(255,255,255,0.08)',borderRadius:18,padding:'16px 20px'}}>
              <SLabel>Training-Modus</SLabel>
              <div style={{display:'grid',gridTemplateColumns:'repeat(5,1fr)',gap:8}}>
                {modes.map(m=>{
                  const active=s.mode===m.id;
                  return <button key={m.id} onClick={()=>setCfg(p=>({...p,mode:m.id}))} style={{padding:'12px 6px',borderRadius:14,cursor:'pointer',fontWeight:700,fontSize:12,background:active?m.color:'rgba(255,255,255,0.05)',color:active?'white':'#4b5563',border:'none',boxShadow:active?`0 4px 18px ${m.color}55`:'none',transition:'all 0.15s'}}>{m.label}</button>;
                })}
              </div>
            </div>

            {/* Settings panels */}
            <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(280px,1fr))',gap:14}}>
              {/* Noten & Schlüssel */}
              <div style={{background:'rgba(255,255,255,0.03)',border:'1px solid rgba(255,255,255,0.08)',borderRadius:18,padding:'16px 20px',display:'flex',flexDirection:'column',gap:13}}>
                <SLabel>Noten & Schlüssel</SLabel>
                <div><div style={{fontSize:11,color:'#4b5563',marginBottom:5}}>Notenschlüssel</div><Pills options={[{id:'treble',label:'𝄞 Violin'},{id:'bass',label:'𝄢 Bass'},{id:'both',label:'⇄ Beide'}]} value={s.clef} onChange={set('clef')} color="#7c3aed"/></div>
                <div><div style={{fontSize:11,color:'#4b5563',marginBottom:5}}>Noten pro Runde</div><Pills options={[6,8,12,16,20,24,32].map(n=>({id:n,label:String(n)}))} value={s.notesPerRound} onChange={setN('notesPerRound')} color="#7c3aed" small/></div>
                <div><div style={{fontSize:11,color:'#4b5563',marginBottom:5}}>Schwierigkeit</div><Pills options={[{id:'lines',label:'Auf Linien'},{id:'spaces',label:'Zwischen'},{id:'mixed',label:'Gemischt'},{id:'expert',label:'# Vorzeichen'}]} value={s.difficulty} onChange={set('difficulty')} color="#9333ea"/></div>
                <div><div style={{fontSize:11,color:'#4b5563',marginBottom:5}}>Notation</div><Pills options={[{id:'de',label:'🇩🇪 Deutsch'},{id:'en',label:'🇬🇧 Englisch'}]} value={s.lang} onChange={set('lang')} color="#0891b2"/></div>
                {(s.mode==='chord-training'||s.mode==='mixed')&&<div><div style={{fontSize:11,color:'#4b5563',marginBottom:5}}>Akkord-Level</div><Pills options={[{id:'beginner',label:'Anfänger'},{id:'intermediate',label:'Mittel'},{id:'expert',label:'Experte'}]} value={s.chordLevel} onChange={set('chordLevel')} color="#9333ea"/></div>}
                {(s.mode==='interval-training'||s.mode==='mixed')&&<div><div style={{fontSize:11,color:'#4b5563',marginBottom:5}}>Intervall-Level</div><Pills options={[{id:'beginner',label:'Anfänger'},{id:'intermediate',label:'Mittel'},{id:'expert',label:'Experte'}]} value={s.intervalLevel} onChange={set('intervalLevel')} color="#0891b2"/></div>}
              </div>

              {/* Keyboard & Anzeige */}
              <div style={{background:'rgba(255,255,255,0.03)',border:'1px solid rgba(255,255,255,0.08)',borderRadius:18,padding:'16px 20px',display:'flex',flexDirection:'column',gap:13}}>
                <SLabel>Keyboard & Anzeige</SLabel>
                <div>
                  <div style={{fontSize:11,color:'#4b5563',marginBottom:5}}>Noten-Design</div>
                  <div style={{display:'flex',gap:10}}>
                    {[{id:'dark',label:'🌙 Dark'},{id:'paper',label:'📄 Paper (klassisch)'}].map(t=>{
                      const active=s.staffTheme===t.id;
                      return <button key={t.id} onClick={()=>setCfg(p=>({...p,staffTheme:t.id}))} style={{flex:1,padding:'10px 8px',borderRadius:12,cursor:'pointer',fontSize:12,fontWeight:700,background:active?'linear-gradient(135deg,#7c3aed,#9333ea)':'rgba(255,255,255,0.06)',color:active?'white':'#64748b',border:active?'none':'1px solid rgba(255,255,255,0.1)',transition:'all 0.15s'}}>{t.label}</button>;
                    })}
                  </div>
                </div>
                <div><div style={{fontSize:11,color:'#4b5563',marginBottom:5}}>Keyboard-Größe (Oktaven)</div><Pills options={[{id:'small',label:'1 Okt'},{id:'medium',label:'2 Okt'},{id:'large',label:'3 Okt'},{id:'xlarge',label:'4 Okt'}]} value={s.keyboardSize} onChange={set('keyboardSize')} color="#1d4ed8"/></div>
                <div><div style={{fontSize:11,color:'#4b5563',marginBottom:5}}>Keyboard-Höhe</div><Pills options={[{id:'small',label:'S'},{id:'medium',label:'M'},{id:'large',label:'L'},{id:'xlarge',label:'XL'}]} value={s.keyHeight} onChange={set('keyHeight')} color="#1d4ed8" small/></div>
                <div><div style={{fontSize:11,color:'#4b5563',marginBottom:5}}>Eingabe-Modus</div><Pills options={[{id:'piano',label:'🎹 Piano'},{id:'buttons',label:'🔤 Buttons'},{id:'both',label:'✨ Beides'}]} value={s.inputMode} onChange={set('inputMode')} color="#059669"/></div>
                <SToggle label="Tasten-Beschriftung" sub="Notennamen auf Keyboard anzeigen" value={s.showLabels} onChange={set('showLabels')}/>
              </div>

              {/* Tempo & Audio */}
              <div style={{background:'rgba(255,255,255,0.03)',border:'1px solid rgba(255,255,255,0.08)',borderRadius:18,padding:'16px 20px',display:'flex',flexDirection:'column',gap:13}}>
                <SLabel>Tempo & Audio</SLabel>
                <div>
                  <div style={{fontSize:11,color:'#4b5563',marginBottom:5}}>Fortschritts-Geschwindigkeit</div>
                  <Pills options={[{id:'instant',label:'⚡ Instant'},{id:'fast',label:'🚀 Schnell'},{id:'normal',label:'🐢 Normal'}]} value={s.advanceSpeed} onChange={set('advanceSpeed')} color="#7c3aed"/>
                  <div style={{fontSize:10,color:'#374151',marginTop:5,paddingLeft:2}}>
                    {s.advanceSpeed==='instant'?'60ms / 250ms':s.advanceSpeed==='fast'?'280ms / 650ms':'700ms / 1400ms'} (richtig / falsch)
                  </div>
                </div>
                <SToggle label="Auto-Weiter" sub="Nach Antwort automatisch nächste Note" value={s.autoAdvance} onChange={set('autoAdvance')}/>
                <SToggle label="Nächste Note Vorschau" sub="Zeigt die kommende Note als große Vorschau rechts vom Notensystem" value={s.showNextPreview} onChange={set('showNextPreview')}/>
                <div><div style={{fontSize:11,color:'#4b5563',marginBottom:5}}>Klangfarbe</div><Pills options={[{id:'piano',label:'🎹 Piano'},{id:'organ',label:'🎸 Orgel'},{id:'synth',label:'🌊 Synth'}]} value={s.soundType} onChange={set('soundType')} color="#d97706"/></div>
                <SToggle label="Auto-Play" sub="Ton sofort beim Erscheinen abspielen" value={s.autoPlaySound} onChange={set('autoPlaySound')}/>
                <SToggle label="Zeitmodus" sub="Countdown-Timer pro Note" value={s.timedMode} onChange={set('timedMode')}/>
                {s.timedMode&&<div><div style={{fontSize:11,color:'#4b5563',marginBottom:5}}>Zeit/Note</div><Pills options={[5,8,10,15].map(n=>({id:n,label:`${n}s`}))} value={s.timeLimit} onChange={setN('timeLimit')} color="#dc2626" small/></div>}
              </div>
            </div>

            {/* Start */}
            <motion.button
              whileHover={{scale:1.02}} whileTap={{scale:0.97}}
              onClick={startSession}
              style={{width:'100%',padding:'20px',borderRadius:18,cursor:'pointer',background:`linear-gradient(135deg,${activeMode.color}dd,${activeMode.color}aa)`,color:'white',fontWeight:900,fontSize:19,border:'none',display:'flex',alignItems:'center',justifyContent:'center',gap:14,boxShadow:`0 10px 36px ${activeMode.color}45`}}
            >
              <Play size={26}/>Training starten
              <span style={{fontSize:13,opacity:0.65,fontWeight:600}}>({cfg.notesPerRound} Noten)</span>
            </motion.button>
          </div>
        </div>
      </div>
    );
  }

  /* ════════ TRAINING ════════ */
  if(screen==='training'){
    if(!currentTask) return null;
    const progress=(currentIdx/sessionTasks.length)*100;
    const badgeColor={
      'note-reading':'#7c3aed','chord-training':'#9333ea',
      'ear-training':'#059669','interval-training':'#0891b2',
    }[currentTask.type]||'#7c3aed';
    const isPaper=cfg.staffTheme==='paper';

    return (
      <div style={{minHeight:'100vh',background:isPaper?'linear-gradient(160deg,#f8f8f5 0%,#f0f0ea 100%)':'linear-gradient(160deg,#05080f 0%,#0d0f1e 50%,#05080f 100%)',color:isPaper?'#111827':'white',fontFamily:'Inter,system-ui,sans-serif',display:'flex',flexDirection:'column'}}>

        {/* TOP BAR */}
        <div style={{position:'sticky',top:0,zIndex:20,background:isPaper?'rgba(248,248,245,0.95)':'rgba(5,8,15,0.92)',backdropFilter:'blur(20px)',borderBottom:`1px solid ${isPaper?'rgba(0,0,0,0.1)':'rgba(255,255,255,0.07)'}`,padding:'10px 16px'}}>
          <div style={{maxWidth:860,margin:'0 auto',display:'flex',alignItems:'center',gap:10}}>
            <button onClick={()=>{clearTimeout(advTimRef.current);clearInterval(timerRef.current);setScreen('home');}} style={{width:34,height:34,borderRadius:10,cursor:'pointer',background:isPaper?'rgba(0,0,0,0.06)':'rgba(255,255,255,0.07)',border:`1px solid ${isPaper?'rgba(0,0,0,0.1)':'rgba(255,255,255,0.1)'}`,display:'flex',alignItems:'center',justifyContent:'center',color:isPaper?'#374151':'#94a3b8',flexShrink:0}}><Home size={14}/></button>
            <div style={{flex:1,minWidth:0}}>
              <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:5}}>
                <span style={{fontSize:11,color:isPaper?'#6b7280':'#4b5563'}}>Note <strong style={{color:isPaper?'#111827':'white'}}>{currentIdx+1}</strong>/{sessionTasks.length}</span>
                <div style={{display:'flex',alignItems:'center',gap:10,fontSize:11}}>
                  <span style={{color:'#16a34a',fontWeight:700}}>✓ {score}</span>
                  <span style={{color:'#dc2626',fontWeight:700}}>✗ {currentIdx-score}</span>
                  {streak>1&&<span style={{color:'#d97706',fontWeight:700,display:'flex',alignItems:'center',gap:3}}><Flame size={11}/>{streak}</span>}
                  {cfg.timedMode&&<span style={{fontFamily:'monospace',fontWeight:900,color:timeLeft<=3?'#dc2626':'#d97706',fontSize:14}}>{timeLeft}s</span>}
                </div>
              </div>
              <div style={{width:'100%',height:3,background:isPaper?'rgba(0,0,0,0.1)':'rgba(255,255,255,0.08)',borderRadius:2,overflow:'hidden'}}>
                <div style={{height:'100%',width:`${progress}%`,background:'linear-gradient(90deg,#7c3aed,#db2777)',borderRadius:2,transition:'width 0.3s'}}/>
              </div>
            </div>
            <button onClick={()=>{
              if(currentTask.type==='chord-training') playChord(currentTask.midis);
              else if(currentTask.type==='interval-training'){playNote(currentTask.rootMidi,1.3);setTimeout(()=>playNote(currentTask.topMidi,1.3),250);}
              else playNote(currentTask.midi,1.3);
            }} style={{width:34,height:34,borderRadius:10,cursor:'pointer',background:`${badgeColor}20`,border:`1px solid ${badgeColor}40`,display:'flex',alignItems:'center',justifyContent:'center',color:badgeColor,flexShrink:0}}><Volume2 size={14}/></button>
          </div>
        </div>

        <div style={{flex:1,maxWidth:860,margin:'0 auto',width:'100%',padding:'14px 14px 28px',display:'flex',flexDirection:'column',gap:12,position:'relative',zIndex:10}}>

          {/* Badge + Reveal toggle */}
          <div style={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>
            <span style={{fontSize:11,fontWeight:700,textTransform:'uppercase',letterSpacing:'0.08em',padding:'4px 12px',borderRadius:99,background:`${badgeColor}20`,color:badgeColor,border:`1px solid ${badgeColor}40`}}>
              {currentTask.type==='note-reading'&&`Notenlesen · ${sessionClef==='treble'?'Violin':'Bass'}schlüssel`}
              {currentTask.type==='chord-training'&&'Akkord erkennen'}
              {currentTask.type==='ear-training'&&'Gehörtraining'}
              {currentTask.type==='interval-training'&&'Intervall erkennen'}
            </span>
            <div style={{display:'flex',alignItems:'center',gap:8}}>
              {currentTask.type==='ear-training'&&(
                <button onClick={()=>{setRevealEar(r=>!r);if(!revealEar)playNote(currentTask.midi);}} style={{background:'none',border:'none',color:isPaper?'#6b7280':'#4b5563',cursor:'pointer',fontSize:11,display:'flex',alignItems:'center',gap:4}}>
                  {revealEar?<EyeOff size={12}/>:<Eye size={12}/>}
                  {revealEar?'Ausblenden':'Note zeigen'}
                </button>
              )}
              {isAnswered&&!cfg.autoAdvance&&(
                <button onClick={goNext} style={{display:'flex',alignItems:'center',gap:5,padding:'5px 12px',borderRadius:99,background:badgeColor,border:'none',color:'white',fontWeight:700,fontSize:11,cursor:'pointer'}}>
                  <ArrowRight size={12}/>Weiter <span style={{opacity:0.65,fontSize:10}}>Space</span>
                </button>
              )}
            </div>
          </div>

          {/* Question */}
          <h2 style={{margin:0,fontSize:20,fontWeight:900,textAlign:'center',color:isPaper?'#111827':'white'}}>
            {currentTask.type==='note-reading'&&'Welche Note ist das?'}
            {currentTask.type==='chord-training'&&'Welcher Akkord?'}
            {currentTask.type==='ear-training'&&'Welchen Ton hörst du?'}
            {currentTask.type==='interval-training'&&'Welches Intervall?'}
          </h2>

          {/* STAFF ROW: scrolling staff + optional next-note preview */}
          <div style={{display:'flex',gap:10,alignItems:'stretch',position:'relative'}}>
            {/* Main scrolling staff */}
            <div style={{flex:1,minWidth:0}}>
              <ScrollingStaff
                tasks={sessionTasks} currentIdx={currentIdx} results={results}
                clef={sessionClef} revealCurrent={revealEar||currentTask.type!=='ear-training'}
                theme={cfg.staffTheme}
              />
            </div>

            {/* Next Note Preview panel */}
            {cfg.showNextPreview && currentIdx+1 < sessionTasks.length && (()=>{
              const nextTask = sessionTasks[currentIdx+1];
              const isPaperPreview = cfg.staffTheme==='paper';
              return (
                <div style={{
                  flexShrink:0, width:130,
                  background: isPaperPreview ? 'rgba(0,0,0,0.04)' : 'rgba(255,255,255,0.04)',
                  border: `1px dashed ${isPaperPreview?'rgba(0,0,0,0.18)':'rgba(255,255,255,0.14)'}`,
                  borderRadius:14,
                  display:'flex', flexDirection:'column', alignItems:'center',
                  padding:'8px 4px 6px',
                  gap:4,
                  overflow:'hidden',
                }}>
                  <div style={{
                    fontSize:9, fontWeight:700, letterSpacing:'0.1em',
                    textTransform:'uppercase',
                    color: isPaperPreview?'#9ca3af':'#374151',
                    display:'flex', alignItems:'center', gap:4,
                  }}>
                    <span>Nächste</span>
                    <span style={{fontSize:10, opacity:0.6}}>→</span>
                  </div>
                  <NotePreview task={nextTask} clef={sessionClef} theme={cfg.staffTheme}/>
                  {/* Note type badge */}
                  <div style={{
                    fontSize:8, fontWeight:600,
                    color: isPaperPreview?'#9ca3af':'#374151',
                    textAlign:'center', lineHeight:1.3,
                  }}>
                    {nextTask.type==='note-reading'&&'Notenlesen'}
                    {nextTask.type==='ear-training'&&'Gehör'}
                    {nextTask.type==='chord-training'&&nextTask.chord?.de}
                    {nextTask.type==='interval-training'&&nextTask.interval?.short}
                  </div>
                </div>
              );
            })()}

            {/* Floating flash feedback badge – absolutely positioned, never shifts layout */}
            <AnimatePresence>
              {flashFeedback && (
                <motion.div
                  initial={{opacity:0, scale:0.7, y:-10}}
                  animate={{opacity:1, scale:1, y:0}}
                  exit={{opacity:0, scale:0.8, y:-8}}
                  transition={{duration:0.12}}
                  style={{
                    position:'absolute', top:8, left:8, zIndex:30,
                    padding:'7px 16px', borderRadius:99,
                    fontWeight:900, fontSize:14,
                    background: flashFeedback.ok
                      ? (isPaper?'#16a34a':'#22c55e')
                      : (isPaper?'#dc2626':'#ef4444'),
                    color:'white',
                    boxShadow: flashFeedback.ok
                      ? '0 4px 20px rgba(34,197,94,0.5)'
                      : '0 4px 20px rgba(239,68,68,0.5)',
                    pointerEvents:'none',
                    display:'flex', alignItems:'center', gap:8,
                  }}
                >
                  <span>{flashFeedback.msg}</span>
                  <span style={{fontSize:10, opacity:0.65, fontFamily:'monospace'}}>{flashFeedback.elapsed}ms</span>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* ── ANSWER SECTION – stable height, no shifts ── */}
          <div>
            {/* Note buttons */}
            {(cfg.inputMode==='buttons'||cfg.inputMode==='both')&&(currentTask.type==='note-reading'||currentTask.type==='ear-training')&&(
              <div style={{marginBottom:12}}>
                <div style={{fontSize:10,fontWeight:700,color:isPaper?'#9ca3af':'#374151',textTransform:'uppercase',letterSpacing:'0.1em',marginBottom:8}}>Note eingeben</div>
                <div style={{display:'grid',gridTemplateColumns:'repeat(7,1fr)',gap:8}}>
                  {noteButtons.map(n=>{
                    const isCorrBtn=isAnswered&&n===currentTask.name;
                    return (
                      <motion.button key={n} whileHover={!isAnswered?{scale:1.07}:{}} whileTap={!isAnswered?{scale:0.92}:{}}
                        disabled={isAnswered} onClick={()=>submitAnswer(n)}
                        style={{padding:'14px 0',borderRadius:12,cursor:isAnswered?'default':'pointer',fontSize:17,fontWeight:900,transition:'all 0.12s',
                          background:isCorrBtn?'linear-gradient(135deg,#22c55e,#15803d)':isAnswered?(isPaper?'rgba(0,0,0,0.04)':'rgba(255,255,255,0.04)'):(isPaper?'rgba(0,0,0,0.06)':'rgba(255,255,255,0.08)'),
                          color:isAnswered&&!isCorrBtn?(isPaper?'#9ca3af':'#374151'):(isPaper?'#111827':'white'),
                          boxShadow:isCorrBtn?'0 4px 18px rgba(34,197,94,0.4)':'none',
                          border:isCorrBtn?'none':(isPaper?'1px solid rgba(0,0,0,0.1)':'none'),
                        }}>{n}</motion.button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Chord buttons */}
            {currentTask.type==='chord-training'&&(
              <div style={{marginBottom:12}}>
                <div style={{fontSize:10,fontWeight:700,color:isPaper?'#9ca3af':'#374151',textTransform:'uppercase',letterSpacing:'0.1em',marginBottom:8}}>Akkord wählen</div>
                <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(110px,1fr))',gap:8}}>
                  {CHORDS.filter(c=>CHORD_SETS[cfg.chordLevel]?.includes(c.id)).map(c=>{
                    const isCorrBtn=isAnswered&&c.id===currentTask.chord.id;
                    return (
                      <motion.button key={c.id} whileHover={!isAnswered?{scale:1.05}:{}} whileTap={!isAnswered?{scale:0.95}:{}}
                        disabled={isAnswered} onClick={()=>submitAnswer(c.id)}
                        style={{padding:'11px 6px',borderRadius:12,cursor:isAnswered?'default':'pointer',border:'none',
                          background:isCorrBtn?`${c.color}40`:isAnswered?(isPaper?'rgba(0,0,0,0.04)':'rgba(255,255,255,0.03)'):(isPaper?'rgba(0,0,0,0.06)':'rgba(255,255,255,0.07)'),
                          display:'flex',flexDirection:'column',alignItems:'center',gap:3,transition:'all 0.12s',
                          outline:isCorrBtn?`1.5px solid ${c.color}`:(isPaper?'1px solid rgba(0,0,0,0.1)':'1px solid rgba(255,255,255,0.08)'),
                        }}>
                        <span style={{fontSize:15,fontWeight:900,color:isCorrBtn?c.color:isAnswered?(isPaper?'#9ca3af':'#374151'):(isPaper?'#111827':'white')}}>{c.short||c.de}</span>
                        <span style={{fontSize:10,color:isPaper?'#6b7280':'#4b5563'}}>{c.de}</span>
                      </motion.button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Interval buttons */}
            {currentTask.type==='interval-training'&&(()=>{
              const availableIvs=INTERVALS.filter(iv=>INTERVAL_SETS[cfg.intervalLevel]?.includes(iv.semitones));
              return (
                <div style={{marginBottom:12}}>
                  <div style={{fontSize:10,fontWeight:700,color:isPaper?'#9ca3af':'#374151',textTransform:'uppercase',letterSpacing:'0.1em',marginBottom:8}}>Intervall wählen</div>
                  <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(100px,1fr))',gap:8}}>
                    {availableIvs.map(iv=>{
                      const isCorrBtn=isAnswered&&iv.semitones===currentTask.interval.semitones;
                      return (
                        <motion.button key={iv.semitones} whileHover={!isAnswered?{scale:1.05}:{}} whileTap={!isAnswered?{scale:0.95}:{}}
                          disabled={isAnswered} onClick={()=>submitAnswer(iv.semitones)}
                          style={{padding:'10px 6px',borderRadius:12,cursor:isAnswered?'default':'pointer',
                            background:isCorrBtn?`${iv.color}40`:isAnswered?(isPaper?'rgba(0,0,0,0.04)':'rgba(255,255,255,0.04)'):(isPaper?'rgba(0,0,0,0.06)':'rgba(255,255,255,0.07)'),
                            outline:isCorrBtn?`1.5px solid ${iv.color}`:(isPaper?'1px solid rgba(0,0,0,0.1)':'1px solid rgba(255,255,255,0.08)'),
                            display:'flex',flexDirection:'column',alignItems:'center',gap:2,transition:'all 0.12s',border:'none',
                          }}>
                          <span style={{fontSize:14,fontWeight:900,color:isCorrBtn?iv.color:isAnswered?(isPaper?'#9ca3af':'#374151'):(isPaper?'#111827':'white')}}>{iv.short}</span>
                          <span style={{fontSize:9,color:isPaper?'#6b7280':'#4b5563',textAlign:'center',lineHeight:1.2}}>{cfg.lang==='de'?iv.de:iv.en}</span>
                        </motion.button>
                      );
                    })}
                  </div>
                </div>
              );
            })()}

            {/* Piano keyboard */}
            {(cfg.inputMode==='piano'||cfg.inputMode==='both')&&(
              <div>
                <div style={{fontSize:10,fontWeight:700,color:isPaper?'#9ca3af':'#374151',textTransform:'uppercase',letterSpacing:'0.1em',marginBottom:8}}>Piano-Eingabe</div>
                <VirtualPiano startMidi={keyRange[0]} endMidi={keyRange[1]} disabled={isAnswered} lang={cfg.lang} showLabels={cfg.showLabels} keyHeight={keyHeightPx} onKeyClick={submitAnswer} correctKeys={correctKeys} wrongKeys={wrongKeys}/>
              </div>
            )}

            {/* Ear training play button */}
            {currentTask.type==='ear-training'&&!revealEar&&(
              <button onClick={()=>playNote(currentTask.midi)} style={{marginTop:8,width:'100%',display:'flex',alignItems:'center',justifyContent:'center',gap:10,padding:'14px',borderRadius:14,cursor:'pointer',background:isPaper?'rgba(5,150,105,0.08)':'rgba(5,150,105,0.1)',border:`1px solid ${isPaper?'rgba(5,150,105,0.25)':'rgba(5,150,105,0.3)'}`,color:'#059669',fontWeight:700,fontSize:14}}>
                <Volume2 size={18}/>Ton abspielen
              </button>
            )}
          </div>
        </div>
      </div>
    );
  }

  /* ════════ RESULT ════════ */
  if(screen==='result'){
    const total=sessionTasks.length, acc=Math.round((score/total)*100);
    let medal='😅';
    if(acc>=90) medal='🏆'; else if(acc>=70) medal='🥈'; else if(acc>=50) medal='🥉';
    return (
      <div style={{minHeight:'100vh',background:'linear-gradient(160deg,#05080f 0%,#0d0f1e 50%,#05080f 100%)',color:'white',fontFamily:'Inter,system-ui,sans-serif',display:'flex',alignItems:'center',justifyContent:'center',padding:20}}>
        <motion.div initial={{opacity:0,y:30,scale:0.95}} animate={{opacity:1,y:0,scale:1}}
          style={{width:'100%',maxWidth:520,background:'rgba(10,15,30,0.95)',border:'1px solid rgba(255,255,255,0.1)',borderRadius:24,overflow:'hidden',boxShadow:'0 40px 80px rgba(0,0,0,0.7)'}}>
          <div style={{padding:'34px 30px 20px',textAlign:'center',borderBottom:'1px solid rgba(255,255,255,0.07)'}}>
            <div style={{fontSize:56,marginBottom:8}}>{medal}</div>
            <h2 style={{margin:0,fontSize:24,fontWeight:900}}>Session abgeschlossen!</h2>
            <p style={{margin:'5px 0 0',fontSize:13,color:'#4b5563'}}>{total} Noten · {sessionClef==='treble'?'Violinschlüssel':'Bassschlüssel'}</p>
          </div>
          <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:10,padding:'20px 20px 0'}}>
            {[{label:'Richtig',value:`${score}/${total}`,color:'#34d399'},{label:'Genauigkeit',value:`${acc}%`,color:'#a78bfa'},{label:'Beste Serie 🔥',value:bestStreak,color:'#fbbf24'},{label:'Fehler',value:total-score,color:'#f87171'}].map(s=>(
              <div key={s.label} style={{padding:'14px',borderRadius:14,background:'rgba(255,255,255,0.04)',border:'1px solid rgba(255,255,255,0.07)'}}>
                <div style={{fontSize:24,fontWeight:900,color:s.color}}>{s.value}</div>
                <div style={{fontSize:11,color:'#4b5563',marginTop:2}}>{s.label}</div>
              </div>
            ))}
          </div>
          <div style={{padding:'14px 20px'}}>
            <div style={{fontSize:10,fontWeight:700,color:'#374151',textTransform:'uppercase',letterSpacing:'0.1em',marginBottom:8}}>Verlauf</div>
            <div style={{display:'flex',flexWrap:'wrap',gap:5}}>
              {sessionTasks.map((task,i)=>{
                const ok=results[i];
                const name=task.type==='chord-training'?task.chord.de:task.type==='interval-training'?(cfg.lang==='de'?task.interval.de:task.interval.en):task.name;
                return <div key={i} title={`${i+1}: ${name} ${ok?'✓':'✗'}`} style={{width:28,height:28,borderRadius:7,fontSize:11,fontWeight:700,display:'flex',alignItems:'center',justifyContent:'center',background:ok?'rgba(52,211,153,0.15)':'rgba(248,113,113,0.15)',border:`1px solid ${ok?'rgba(52,211,153,0.4)':'rgba(248,113,113,0.4)'}`,color:ok?'#34d399':'#f87171',cursor:'default'}}>{ok?'✓':'✗'}</div>;
              })}
            </div>
          </div>
          <div style={{display:'flex',gap:10,padding:'12px 20px 24px',borderTop:'1px solid rgba(255,255,255,0.07)'}}>
            <motion.button whileHover={{scale:1.03}} whileTap={{scale:0.97}} onClick={startSession}
              style={{flex:1,padding:'15px',borderRadius:14,cursor:'pointer',background:'linear-gradient(135deg,#7c3aed,#db2777)',color:'white',fontWeight:900,fontSize:15,border:'none',display:'flex',alignItems:'center',justifyContent:'center',gap:8,boxShadow:'0 6px 24px rgba(124,58,237,0.4)'}}>
              <RefreshCw size={16}/>Nochmal
            </motion.button>
            <motion.button whileHover={{scale:1.03}} whileTap={{scale:0.97}} onClick={()=>setScreen('home')}
              style={{padding:'15px 18px',borderRadius:14,cursor:'pointer',background:'rgba(255,255,255,0.07)',border:'1px solid rgba(255,255,255,0.1)',color:'white',fontWeight:700,fontSize:15,display:'flex',alignItems:'center',gap:8}}>
              <Home size={16}/>Menü
            </motion.button>
          </div>
        </motion.div>
      </div>
    );
  }

  return <div style={{minHeight:'100vh',background:'#05080f',display:'flex',alignItems:'center',justifyContent:'center',color:'white'}}><Music size={28} color="#7c3aed"/></div>;
}
