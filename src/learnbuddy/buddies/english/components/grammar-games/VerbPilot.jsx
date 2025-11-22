import React, { useState, useEffect, useRef } from 'react';
import { Plane, Cloud, Check, X, Zap, Wind, Sun, Mountain, Award, RotateCcw, Play } from 'lucide-react';

/**
 * VerbPilot - Ace Pilot Edition
 * A stunning side-scrolling flight game with parallax backgrounds, smooth physics, and visual flair.
 */
const VerbPilot = ({ exercises, language = 'en' }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [gameState, setGameState] = useState('start'); // start, playing, levelSummary, finished, crash
  const [planeY, setPlaneY] = useState(50); // 0-100 percentage
  const [clouds, setClouds] = useState([]); // { id, text, type, x, y }
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [levelProgress, setLevelProgress] = useState(0);
  const [backgroundOffset, setBackgroundOffset] = useState(0);
  
  const requestRef = useRef();
  const lastSpawnTime = useRef(0);
  const cloudIdCounter = useRef(0);
  const speedRef = useRef(0.4);
  const playAreaRef = useRef(null);

  const currentExercise = exercises[currentIndex];

  // --- Game Logic ---

  const animate = (time) => {
    if (gameState === 'playing') {
      // Scroll Background
      setBackgroundOffset(prev => (prev + 1) % 1000);

      // Update clouds
      setClouds(prevClouds => {
        // Move clouds
        const newClouds = prevClouds
          .map(cloud => ({ ...cloud, x: cloud.x - speedRef.current }))
          .filter(cloud => cloud.x > -30);

        // Collision Detection (Simple AABB) - Larger hitboxes for easier gameplay
        const planeHitbox = { x: 20, y: planeY, width: 22, height: 18 }; // Much larger hitbox for easier hits
        
        const activeClouds = [];
        
        for (const cloud of newClouds) {
          // Convert cloud position to hit box - Larger hitbox for clouds too
          const cloudHitbox = { 
            x: cloud.x, 
            y: cloud.y, 
            width: 28, // Increased from 18
            height: 20  // Increased from 12
          };
          
          // Check overlap
          const isColliding = (
            planeHitbox.x < cloudHitbox.x + cloudHitbox.width &&
            planeHitbox.x + planeHitbox.width > cloudHitbox.x &&
            planeHitbox.y < cloudHitbox.y + cloudHitbox.height &&
            planeHitbox.y + planeHitbox.height > cloudHitbox.y
          );

          if (isColliding) {
            handleCollision(cloud);
            // Cloud disappears on hit
          } else {
            activeClouds.push(cloud);
          }
        }
        return activeClouds;
      });

      // Spawn Logic
      if (time - lastSpawnTime.current > 1800) { // Spawn frequency
        spawnCloud();
        lastSpawnTime.current = time;
      }

      requestRef.current = requestAnimationFrame(animate);
    }
  };

  const spawnCloud = () => {
    const isTarget = Math.random() > 0.6; // 40% Target chance
    let text = '';
    
    if (isTarget) {
      text = currentExercise.correct || (Array.isArray(currentExercise.targets) ? currentExercise.targets[Math.floor(Math.random() * currentExercise.targets.length)] : "TARGET");
    } else {
      const distractors = currentExercise.distractors || currentExercise.options?.filter(o => o !== currentExercise.correct) || ["WRONG", "FALSE", "NOPE"];
      text = distractors[Math.floor(Math.random() * distractors.length)];
    }

    const newCloud = {
      id: cloudIdCounter.current++,
      text: text,
      isTarget: isTarget,
      x: 110, 
      y: Math.random() * 50 + 35, // Safe zone 35% - 85% (Below HUD area)
      type: Math.floor(Math.random() * 3)
    };

    setClouds(prev => [...prev, newCloud]);
  };

  const handleCollision = (cloud) => {
    if (cloud.isTarget) {
      // GOOD HIT
      setScore(s => s + 100 + (streak * 20));
      setStreak(s => s + 1);
      
      // Flash effect or sound here
      
      setLevelProgress(p => {
        const newP = p + 1;
        if (newP >= 5) { // Require 5 hits to pass level now!
           levelComplete();
        }
        return newP;
      });
    } else {
      // BAD HIT
      setStreak(0);
      setScore(s => Math.max(0, s - 50));
      // Shake screen effect?
    }
  };

  const levelComplete = () => {
    setGameState('levelSummary');
    cancelAnimationFrame(requestRef.current);
  };

  useEffect(() => {
    if (gameState === 'playing') {
      requestRef.current = requestAnimationFrame(animate);
    }
    return () => cancelAnimationFrame(requestRef.current);
  }, [gameState, currentExercise]);

  // --- Controls ---

  const handleMove = (clientY) => {
    if (gameState !== 'playing' || !playAreaRef.current) return;
    const rect = playAreaRef.current.getBoundingClientRect();
    const relativeY = clientY - rect.top;
    // Smooth clamping
    const percentage = Math.max(5, Math.min(95, (relativeY / rect.height) * 100));
    setPlaneY(percentage);
  };

  const handleMouseMove = (e) => handleMove(e.clientY);
  const handleTouchMove = (e) => {
    e.preventDefault();
    handleMove(e.touches[0].clientY);
  };

  const nextLevel = () => {
    if (currentIndex < exercises.length - 1) {
      setCurrentIndex(prev => prev + 1);
      resetLevel();
    } else {
      setGameState('finished');
    }
  };

  const resetLevel = () => {
    setClouds([]);
    setLevelProgress(0);
    setGameState('playing');
    lastSpawnTime.current = performance.now();
  };

  const restartGame = () => {
    setCurrentIndex(0);
    setScore(0);
    setStreak(0);
    resetLevel();
  };

  // --- Render Components ---

  if (gameState === 'start') {
    return (
      <div className="bg-sky-900 rounded-xl overflow-hidden shadow-2xl text-white h-96 relative flex flex-col items-center justify-center group">
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-40 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] animate-slide"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-sky-400/20 to-indigo-900/80"></div>
        
        <div className="relative z-10 text-center transform transition-transform duration-500 group-hover:scale-105">
          <div className="bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/20 shadow-xl">
            <Plane size={80} className="text-yellow-400 mx-auto mb-4 animate-bounce drop-shadow-lg" />
            <h2 className="text-5xl font-black mb-2 tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 to-orange-500">
              VERB PILOT
            </h2>
            <p className="text-sky-200 mb-8 text-lg font-medium tracking-wide">Ace Academy Edition</p>
            <button 
              onClick={resetLevel}
              className="bg-yellow-500 hover:bg-yellow-400 text-indigo-900 font-black text-xl py-4 px-12 rounded-full transition-all transform hover:scale-110 shadow-[0_0_20px_rgba(234,179,8,0.5)] flex items-center gap-3 mx-auto"
            >
              <Play fill="currentColor" /> TAKEOFF
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (gameState === 'finished') {
    return (
      <div className="bg-indigo-900 rounded-xl overflow-hidden shadow-2xl text-white h-96 flex flex-col items-center justify-center text-center p-8">
         <Award size={80} className="text-yellow-400 mb-6 animate-pulse" />
         <h2 className="text-4xl font-black mb-2">MISSION COMPLETE!</h2>
         <p className="text-indigo-200 mb-8">You represent the elite of grammar pilots.</p>
         <div className="bg-white/10 px-10 py-4 rounded-2xl mb-8">
            <p className="text-sm text-indigo-300 uppercase tracking-widest">Final Score</p>
            <p className="text-5xl font-mono font-bold text-yellow-400">{score}</p>
         </div>
         <button onClick={restartGame} className="text-white hover:text-yellow-300 flex items-center gap-2 transition-colors font-bold">
           <RotateCcw size={20} /> Fly Again
         </button>
      </div>
    );
  }

  if (gameState === 'levelSummary') {
    return (
      <div className="bg-sky-800 rounded-xl overflow-hidden shadow-2xl text-white h-96 flex flex-col items-center justify-center relative">
         <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/diagmonds-light.png')] opacity-10"></div>
         <div className="relative z-10 text-center">
            <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg animate-bounce">
               <Check size={40} className="text-white" strokeWidth={4} />
            </div>
            <h2 className="text-3xl font-bold mb-2">Sector Cleared!</h2>
            <p className="mb-8 text-sky-200">Target Acquired: <span className="text-white font-bold bg-sky-700 px-2 py-1 rounded">{currentExercise.correct}</span></p>
            <button 
              onClick={nextLevel}
              className="bg-white text-sky-900 font-bold py-3 px-10 rounded-full hover:bg-sky-100 transition-transform transform hover:scale-105 shadow-lg"
            >
              Next Sector ➡️
            </button>
         </div>
      </div>
    );
  }

  // --- Main Game View ---

  return (
    <div 
      className="relative rounded-xl overflow-hidden shadow-2xl h-[650px] cursor-none select-none touch-none border-4 border-sky-900 bg-sky-300"
      ref={playAreaRef}
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouchMove}
    >
       {/* Parallax Background Layers */}
       
       {/* Layer 1: Sky Gradient */}
       <div className="absolute inset-0 bg-gradient-to-b from-sky-400 to-sky-200"></div>
       
       {/* Layer 2: Sun */}
       <div className="absolute top-10 right-20 text-yellow-300 opacity-80 animate-pulse-slow">
          <Sun size={80} fill="currentColor" />
       </div>

       {/* Layer 3: Distant Mountains (Slow Scroll) */}
       <div 
         className="absolute bottom-0 left-0 w-[200%] h-40 opacity-40 flex items-end"
         style={{ 
           transform: `translateX(-${backgroundOffset * 0.2}px)`,
           transition: 'transform 0.1s linear'
         }}
       >
          {Array(10).fill(0).map((_, i) => (
             <Mountain key={i} size={150} className="text-indigo-900 -mr-10" fill="currentColor" />
          ))}
       </div>

       {/* Layer 4: Closer Hills (Medium Scroll) */}
       <div 
         className="absolute bottom-[-20px] left-0 w-[200%] h-32 opacity-60 flex items-end"
         style={{ 
           transform: `translateX(-${backgroundOffset * 0.5}px)`,
           transition: 'transform 0.1s linear'
         }}
       >
          {Array(10).fill(0).map((_, i) => (
             <Mountain key={i} size={100} className="text-green-800 -mr-8" fill="currentColor" />
          ))}
       </div>

       {/* Layer 5: Moving Clouds (Fast Scroll effect via CSS animation) */}
       <div className="absolute inset-0 opacity-30 pointer-events-none">
          <Cloud size={120} className="absolute top-20 left-[10%] animate-drift-slow" />
          <Cloud size={180} className="absolute top-40 left-[60%] animate-drift-medium" />
          <Cloud size={90} className="absolute top-10 left-[80%] animate-drift-fast" />
       </div>

       {/* HUD - Fixed at top, takes ~15% of height */}
       <div className="absolute top-0 left-0 w-full p-4 flex justify-between z-30 pointer-events-none bg-gradient-to-b from-sky-300/95 to-transparent pb-6">
          {/* Target Box */}
          <div className="bg-white/95 backdrop-blur-md px-5 py-2 rounded-xl border-2 border-sky-500 shadow-lg flex flex-col items-start max-w-md">
             <p className="text-xs font-bold text-sky-500 uppercase tracking-widest">MISSION TARGET</p>
             <p className="text-lg font-black text-sky-900 leading-tight">{currentExercise.prompt}</p>
             {/* Progress Bar */}
             <div className="w-full bg-gray-200 h-1.5 rounded-full mt-1.5 overflow-hidden">
                <div className="bg-green-500 h-full transition-all duration-300" style={{width: `${(levelProgress / 5) * 100}%`}}></div>
             </div>
          </div>

          {/* Score Box */}
          <div className="bg-indigo-900/95 backdrop-blur-md px-5 py-2 rounded-xl border-2 border-indigo-500 shadow-lg text-white text-right">
             <p className="text-xs font-bold text-indigo-300 uppercase tracking-widest">SCORE</p>
             <p className="text-2xl font-mono font-bold">{score}</p>
             {streak > 1 && (
               <div className="text-yellow-400 text-xs font-bold animate-bounce mt-0.5">
                 COMBO x{streak}!
               </div>
             )}
          </div>
       </div>

       {/* Game Entities: Words (Clouds) */}
       {clouds.map(cloud => (
         <div
           key={cloud.id}
           className={`absolute px-6 py-3 rounded-full font-bold text-lg shadow-xl transition-transform flex items-center gap-2 border-4 transform hover:scale-110
             ${cloud.isTarget 
                ? 'bg-white text-sky-700 border-sky-300 z-20' 
                : 'bg-stone-800 text-stone-300 border-stone-600 z-10 opacity-90'
             }`}
           style={{
             left: `${cloud.x}%`,
             top: `${cloud.y}%`,
             transform: 'translate(-50%, -50%)'
           }}
         >
            {cloud.isTarget && <Zap size={16} className="text-yellow-500 fill-current animate-pulse" />}
            {cloud.text}
         </div>
       ))}

       {/* Player Plane */}
       <div 
         className="absolute left-[20%] transition-all duration-100 ease-out z-30 drop-shadow-2xl"
         style={{ 
           top: `${planeY}%`, 
           transform: `translate(-50%, -50%) rotate(${(planeY - 50) * 0.2}deg)` // Slight tilt based on height
         }}
       >
          <div className="relative">
             {/* Propeller Blur */}
             <div className="absolute right-[-15px] top-1/2 -translate-y-1/2 w-8 h-16 bg-white/20 blur-sm rounded-full animate-spin"></div>
             
             {/* Plane Icon replaced with nicer construction if possible, keeping simple for now but styled */}
             <div className="bg-red-600 w-16 h-8 rounded-full relative shadow-inner border-b-4 border-red-800">
                <div className="absolute top-[-10px] left-6 w-8 h-6 bg-sky-300 rounded-t-full border-4 border-red-600 opacity-80"></div> {/* Cockpit */}
                <div className="absolute top-2 left-[-5px] w-4 h-8 bg-red-700 rounded-sm skew-x-12"></div> {/* Tail */}
                <div className="absolute bottom-[-5px] left-4 w-10 h-2 bg-gray-800 rounded-full"></div> {/* Gear */}
                <div className="absolute top-1 right-0 w-2 h-6 bg-yellow-400 rounded-r-full animate-pulse"></div> {/* Nose */}
             </div>
             
             {/* Trail */}
             <div className="absolute top-1/2 left-[-40px] flex gap-2">
                <div className="w-6 h-2 bg-white/60 rounded-full animate-pulse"></div>
                <div className="w-4 h-2 bg-white/40 rounded-full animate-pulse delay-75"></div>
             </div>
          </div>
       </div>
       
       {/* Mobile Guide */}
       <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/70 text-sm md:hidden pointer-events-none font-bold bg-black/30 px-4 py-2 rounded-full backdrop-blur-sm">
         Slide to Fly
       </div>
    </div>
  );
};

export default VerbPilot;
