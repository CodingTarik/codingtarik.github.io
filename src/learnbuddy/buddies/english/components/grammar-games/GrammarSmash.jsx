import React, { useState, useEffect, useRef } from 'react';
import { RefreshCw, Star, Bomb } from 'lucide-react';

/**
 * GrammarSmash - Angry Birds style physics game.
 * Launch a projectile to hit the correct answer blocks while avoiding wrong ones.
 * Now with drag-to-shoot mechanic!
 */
const GrammarSmash = ({ exercises }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [gameState, setGameState] = useState('start'); // start, aiming, flying, hit, miss, levelSummary
  const [score, setScore] = useState(0);
  const [feedback, setFeedback] = useState('');
  
  // Physics State
  const [projectile, setProjectile] = useState({ x: 150, y: 300, vx: 0, vy: 0 });
  const [targets, setTargets] = useState([]); 
  
  // Slingshot State
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [dragCurrent, setDragCurrent] = useState({ x: 0, y: 0 });
  
  const requestRef = useRef();
  const containerRef = useRef(null);
  const currentExercise = exercises[currentIndex];
  
  const SLINGSHOT_POS = { x: 150, y: 300 };
  const MAX_DRAG_DIST = 100;

  // Initialize Level
  useEffect(() => {
    if (gameState === 'start' || gameState === 'nextLevel') {
      // Setup targets
      const options = currentExercise.options || ["A", "B", "C"];
      const correct = currentExercise.correct;
      
      const newTargets = options.map((opt, idx) => ({
        id: idx,
        text: opt,
        isCorrect: opt === correct,
        x: 0,
        y: 0,
        width: 90, // Slightly wider
        height: 70,
        hit: false,
        rotation: 0
      }));
      
      // Arrange targets in a structure on the right side
      // Avoid overlapping and ensure visibility
      const structureBaseX = 600;
      const structureBaseY = 350;
      
      newTargets.forEach((t, i) => {
        // Simple stacking logic or scattered piles
        if (i === 0) {
            t.x = structureBaseX;
            t.y = structureBaseY - t.height;
        } else if (i === 1) {
            t.x = structureBaseX + 100; // Next to it
            t.y = structureBaseY - t.height;
        } else {
            // Stacked on top or in between
            t.x = structureBaseX + 50;
            t.y = structureBaseY - t.height * 2 - 10;
        }
        // Add some randomness to rotation for "loose" look
        t.rotation = (Math.random() * 4) - 2; 
      });

      setTargets(newTargets);
      setProjectile({ x: SLINGSHOT_POS.x, y: SLINGSHOT_POS.y, vx: 0, vy: 0 });
      setGameState('aiming');
      setFeedback('');
      setIsDragging(false);
      setDragCurrent({ x: SLINGSHOT_POS.x, y: SLINGSHOT_POS.y });
    }
  }, [currentIndex, gameState, currentExercise]);

  // Mouse / Touch Handlers for Slingshot
  const handleMouseDown = (e) => {
    if (gameState !== 'aiming') return;
    const rect = containerRef.current.getBoundingClientRect();
    const clientX = e.clientX || e.touches?.[0].clientX;
    const clientY = e.clientY || e.touches?.[0].clientY;
    
    // Check if close to slingshot
    const mouseX = clientX - rect.left;
    const mouseY = clientY - rect.top;
    
    const dist = Math.hypot(mouseX - SLINGSHOT_POS.x, mouseY - SLINGSHOT_POS.y);
    
    if (dist < 50) {
      setIsDragging(true);
      setDragStart({ x: SLINGSHOT_POS.x, y: SLINGSHOT_POS.y });
      setDragCurrent({ x: mouseX, y: mouseY });
    }
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const rect = containerRef.current.getBoundingClientRect();
    const clientX = e.clientX || e.touches?.[0].clientX;
    const clientY = e.clientY || e.touches?.[0].clientY;
    
    let mouseX = clientX - rect.left;
    let mouseY = clientY - rect.top;
    
    // Limit drag distance
    const dx = mouseX - SLINGSHOT_POS.x;
    const dy = mouseY - SLINGSHOT_POS.y;
    const dist = Math.hypot(dx, dy);
    
    if (dist > MAX_DRAG_DIST) {
        const ratio = MAX_DRAG_DIST / dist;
        mouseX = SLINGSHOT_POS.x + dx * ratio;
        mouseY = SLINGSHOT_POS.y + dy * ratio;
    }
    
    setDragCurrent({ x: mouseX, y: mouseY });
    
    // Update projectile position visually while dragging
    setProjectile(p => ({ ...p, x: mouseX, y: mouseY }));
  };

  const handleMouseUp = () => {
    if (!isDragging) return;
    setIsDragging(false);
    
    // Calculate velocity based on pull back
    const dx = SLINGSHOT_POS.x - dragCurrent.x;
    const dy = SLINGSHOT_POS.y - dragCurrent.y;
    
    const powerMultiplier = 0.25; // Adjust for game feel
    
    setProjectile({
        x: dragCurrent.x, // Start flight from pulled position
        y: dragCurrent.y,
        vx: dx * powerMultiplier,
        vy: dy * powerMultiplier
    });
    
    setGameState('flying');
  };

  // Physics Loop
  const updatePhysics = () => {
    if (gameState === 'flying') {
      setProjectile(prev => {
        const dt = 1.0; // Time step unit
        const gravity = 0.5;
        
        let newX = prev.x + prev.vx * dt;
        let newY = prev.y + prev.vy * dt + 0.5 * gravity * dt * dt;
        let newVy = prev.vy + gravity * dt;

        // Floor collision
        if (newY > 380) {
          newY = 380;
          newVy = -newVy * 0.5; // Bounce
          
          // Stop if slow
          if (Math.abs(newVy) < 2 && Math.abs(prev.vx) < 1) {
            handleMiss();
            return prev;
          }
          
          // Friction
          prev.vx *= 0.9;
        }

        // Wall collision
        if (newX > 780 || newX < 0) {
          newX = Math.max(0, Math.min(780, newX));
          prev.vx = -prev.vx * 0.6;
        }

        // Target Collision Check
        const projRect = { x: newX, y: newY, r: 15 };
        
        let hitOccurred = false;
        
        const updatedTargets = targets.map(t => {
          if (t.hit) return t; // Already hit
          
          // Simple Circle-Rect collision approximation
          if (
            projRect.x > t.x - 20 && 
            projRect.x < t.x + t.width + 20 &&
            projRect.y > t.y - 20 &&
            projRect.y < t.y + t.height + 20
          ) {
             handleHit(t);
             hitOccurred = true;
             return { ...t, hit: true };
          }
          return t;
        });

        if (hitOccurred) {
          setTargets(updatedTargets);
        }
        
        // Check out of bounds (fell off world)
        if (newY > 600) {
            handleMiss();
        }

        return { x: newX, y: newY, vx: prev.vx, vy: newVy };
      });

      if (gameState === 'flying') {
        requestRef.current = requestAnimationFrame(updatePhysics);
      }
    }
  };

  useEffect(() => {
    if (gameState === 'flying') {
      requestRef.current = requestAnimationFrame(updatePhysics);
    }
    return () => cancelAnimationFrame(requestRef.current);
  }, [gameState, targets]);

  const handleHit = (target) => {
    if (target.isCorrect) {
      setGameState('hit');
      setScore(s => s + 100);
      setFeedback('SMASH! Correct!');
      cancelAnimationFrame(requestRef.current);
    } else {
      setGameState('miss');
      setFeedback(`Oops! You hit "${target.text}". Wrong answer.`);
      cancelAnimationFrame(requestRef.current);
    }
  };

  const handleMiss = () => {
    setGameState('miss');
    setFeedback('Missed! Try again.');
  };

  const nextLevel = () => {
    if (currentIndex < exercises.length - 1) {
      setCurrentIndex(prev => prev + 1);
      setGameState('nextLevel');
    } else {
      setGameState('finished');
    }
  };

  const restartLevel = () => {
    setGameState('nextLevel'); // Triggers reset
  };

  // --- UI Rendering ---

  if (gameState === 'finished') {
    return (
      <div className="h-[400px] bg-stone-900 rounded-xl flex flex-col items-center justify-center text-white">
        <Star size={64} className="text-yellow-400 mb-4 animate-spin-slow" />
        <h2 className="text-3xl font-bold">All Levels Cleared!</h2>
        <p className="text-xl mb-6">Score: {score}</p>
        <button onClick={() => window.location.reload()} className="bg-white text-black px-6 py-2 rounded-full font-bold">
          Play Again
        </button>
      </div>
    );
  }

  return (
    <div 
        className="bg-sky-300 relative rounded-xl overflow-hidden shadow-2xl h-[450px] select-none border-b-8 border-stone-700 touch-none" 
        ref={containerRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchStart={handleMouseDown}
        onTouchMove={handleMouseMove}
        onTouchEnd={handleMouseUp}
    >
      
      {/* HUD */}
      <div className="absolute top-0 left-0 w-full p-4 flex justify-between z-20 pointer-events-none">
        <div className="bg-white/90 px-4 py-2 rounded-lg font-bold text-stone-800 shadow-lg border border-stone-200">
          {currentExercise.prompt}
        </div>
        <div className="bg-white/90 px-4 py-2 rounded-lg font-bold text-stone-800 shadow-lg border border-stone-200">
          Score: {score}
        </div>
      </div>

      {/* Clouds */}
      <div className="absolute top-10 left-20 text-white/40 animate-pulse scale-150"><CloudIcon size={60} /></div>
      <div className="absolute top-20 right-40 text-white/30 scale-125"><CloudIcon size={50} /></div>

      {/* Background Scenery */}
      <div className="absolute bottom-0 w-full h-16 bg-gradient-to-b from-green-500 to-green-700 border-t-4 border-green-800 z-10"></div>
      
      {/* Slingshot */}
      <div className="absolute z-10" style={{ left: SLINGSHOT_POS.x - 5, top: SLINGSHOT_POS.y }}>
          {/* Back Band */}
          {isDragging && (
              <svg className="absolute top-0 left-0 overflow-visible pointer-events-none" style={{ zIndex: -1 }}>
                  <line 
                      x1={0} y1={0} 
                      x2={projectile.x - SLINGSHOT_POS.x} y2={projectile.y - SLINGSHOT_POS.y} 
                      stroke="#3f2e00" strokeWidth="6" strokeLinecap="round" 
                  />
              </svg>
          )}
          
          {/* Slingshot Fork */}
          <div className="w-4 h-20 bg-amber-800 absolute top-0 left-0 rounded-full"></div>
          <div className="w-4 h-12 bg-amber-800 absolute -top-2 -left-4 -rotate-12 rounded-full"></div>
          <div className="w-4 h-12 bg-amber-800 absolute -top-2 left-4 rotate-12 rounded-full"></div>
          
          {/* Front Band */}
          {isDragging && (
               <svg className="absolute top-0 left-0 overflow-visible pointer-events-none" style={{ zIndex: 20 }}>
                  <line 
                      x1={0} y1={0} 
                      x2={projectile.x - SLINGSHOT_POS.x} y2={projectile.y - SLINGSHOT_POS.y} 
                      stroke="#5c4033" strokeWidth="6" strokeLinecap="round" 
                  />
              </svg>
          )}
      </div>

      {/* Targets (Blocks) */}
      {targets.map(t => !t.hit && (
        <div 
          key={t.id}
          className="absolute flex items-center justify-center font-bold text-stone-900 shadow-md rounded-sm z-10 overflow-hidden"
          style={{
            left: t.x,
            top: t.y,
            width: t.width,
            height: t.height,
            transform: `rotate(${t.rotation}deg)`,
            backgroundImage: 'linear-gradient(to bottom right, #e7e5e4, #d6d3d1)',
            border: '3px solid #a8a29e'
          }}
        >
          {/* Wood texture effect */}
          <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/wood-pattern.png')]"></div>
          <span className="z-10 text-center leading-tight px-1 break-words">{t.text}</span>
        </div>
      ))}

      {/* Projectile (Bird) */}
      <div 
        className="absolute w-10 h-10 z-30 shadow-xl"
        style={{
          left: projectile.x - 20,
          top: projectile.y - 20,
          transition: gameState === 'aiming' && !isDragging ? 'all 0.2s' : 'none',
          transform: `rotate(${Math.atan2(projectile.vy, projectile.vx) * (180/Math.PI)}deg)`
        }}
      >
        <div className="w-full h-full bg-red-600 rounded-full border-2 border-red-800 overflow-hidden relative">
            <div className="absolute top-2 right-2 w-3 h-3 bg-white rounded-full">
                <div className="absolute top-1 right-1 w-1 h-1 bg-black rounded-full"></div>
            </div>
            <div className="absolute top-5 right-0 w-4 h-2 bg-yellow-400 rounded-l-lg border border-yellow-600"></div>
        </div>
      </div>
      
      {/* Trajectory Line (Prediction) */}
      {isDragging && (
        <svg className="absolute inset-0 pointer-events-none opacity-50 z-0">
           {/* Simple parabolic prediction based on drag */}
           <path 
            d={calculateTrajectory(SLINGSHOT_POS, dragCurrent)}
            fill="none" 
            stroke="white" 
            strokeWidth="3" 
            strokeDasharray="6 6"
          />
        </svg>
      )}

      {/* Result Overlay */}
      {(gameState === 'hit' || gameState === 'miss') && (
        <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center z-50 animate-in fade-in duration-300">
           <div className={`text-5xl font-black mb-6 ${gameState === 'hit' ? 'text-green-400' : 'text-red-400'} drop-shadow-2xl transform scale-110`}>
             {feedback}
           </div>
           <div className="flex gap-4">
             <button onClick={restartLevel} className="bg-stone-600 hover:bg-stone-500 text-white px-6 py-3 rounded-full font-bold flex items-center gap-2 transition-transform hover:scale-105">
               <RefreshCw size={20} /> Retry
             </button>
             {gameState === 'hit' && (
               <button onClick={nextLevel} className="bg-green-600 hover:bg-green-500 text-white px-8 py-3 rounded-full font-bold shadow-lg transition-transform hover:scale-105">
                 Next Level
               </button>
             )}
           </div>
        </div>
      )}
      
      {/* Tutorial Hint */}
      {gameState === 'aiming' && !isDragging && (
          <div className="absolute bottom-20 left-20 text-white/80 font-bold animate-bounce pointer-events-none z-20 text-center">
              Drag back to aim! <br/> ↓
          </div>
      )}

    </div>
  );
};

// Helper for cloud icon
const CloudIcon = ({ size }) => (
    <svg width={size} height={size * 0.6} viewBox="0 0 24 24" fill="currentColor">
        <path d="M25,15 h-5 c-1,0-2-0.5-2.5-1.5 c-0.5-1-0.5-2.5,0.5-3.5 c 1-1, 2.5-1, 3.5,0 c 0.5,0.5, 1,0.5, 1.5,0 c 1-1, 2-2.5, 1-4 c -1-1.5-3-1.5-4-0.5 c -1,1-2.5,1-3.5,0 c -0.5-0.5-1-1.5-0.5-2.5 c 1-2, 3.5-2, 5-0.5 c 1.5,1.5, 1.5,3.5, 0.5,5 c 0.5,0, 1,0, 1.5,0 c 2,0, 3.5,1.5, 3.5,3.5 S 27,15, 25,15 z" />
        <path d="M17.5,19c-0.83,0-1.5-0.67-1.5-1.5c0-0.83,0.67-1.5,1.5-1.5c0.83,0,1.5,0.67,1.5,1.5C19,18.33,18.33,19,17.5,19z M17.5,12c-2.48,0-4.5,2.02-4.5,4.5c0,2.48,2.02,4.5,4.5,4.5c2.48,0,4.5-2.02,4.5-4.5C22,14.02,19.98,12,17.5,12z M7.5,13C5.57,13,4,14.57,4,16.5S5.57,20,7.5,20c0.55,0,1.07-0.13,1.54-0.35C9.36,19.86,9.67,20,10,20c2.21,0,4-1.79,4-4c0-2.21-1.79-4-4-4c-0.33,0-0.64,0.04-0.94,0.11C8.64,12.43,8.09,13,7.5,13z"/>
    </svg>
);

// Helper to calculate path d string for trajectory
function calculateTrajectory(start, current) {
    // Inverse pull
    const dx = start.x - current.x;
    const dy = start.y - current.y;
    const power = 0.25;
    
    const vx = dx * power;
    const vy = dy * power;
    
    let path = `M ${start.x} ${start.y}`;
    let x = start.x;
    let y = start.y;
    let localVy = vy;
    
    // Simulate a few steps
    for (let i = 0; i < 15; i++) {
        x += vx * 3; // Larger steps for drawing
        y += localVy * 3 + 0.5 * 0.5 * 9; // gravity approx
        localVy += 0.5 * 3;
        path += ` L ${x} ${y}`;
    }
    
    return path;
}

export default GrammarSmash;
