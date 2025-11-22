import React, { useState, useEffect, useRef } from 'react';
import { Star, Hammer, Timer } from 'lucide-react';

/**
 * GrammarMole - Whack-a-Mole style game.
 * Moles pop up with words. Whack the correct ones!
 * Polished version with better animations and gameplay.
 */
const GrammarMole = ({ exercises }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(45);
  const [gameState, setGameState] = useState('intro'); // intro, playing, finished
  
  // Moles state: Array of objects or null
  // { id, text, isTarget, status: 'up'|'hit'|'miss'|'hiding', popTime }
  const [moles, setMoles] = useState(Array(9).fill(null)); 
  
  const currentExercise = exercises[currentIndex];
  const timerRef = useRef(null);
  const gameLoopRef = useRef(null);

  // Timer Logic
  useEffect(() => {
    if (gameState === 'playing') {
      timerRef.current = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            clearInterval(timerRef.current);
            setGameState('finished');
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(timerRef.current);
  }, [gameState]);

  // Game Loop Logic
  useEffect(() => {
    if (gameState !== 'playing') return;

    const spawnInterval = 900; // Spawn speed
    
    const spawnMole = () => {
      setMoles(prev => {
        const newMoles = [...prev];
        
        // Clear old moles that should be hiding
        const now = Date.now();
        for (let i = 0; i < 9; i++) {
            if (newMoles[i] && newMoles[i].status === 'up' && now - newMoles[i].popTime > 2000) {
                newMoles[i] = null; // Natural despawn
            }
        }

        // Find empty holes
        const emptyIndices = newMoles.map((m, i) => m === null ? i : -1).filter(i => i !== -1);
        
        if (emptyIndices.length > 0 && Math.random() > 0.2) {
           const randomIndex = emptyIndices[Math.floor(Math.random() * emptyIndices.length)];
           
           // Decide content
           const isTarget = Math.random() > 0.4; 
           let text = "";
           
           if (isTarget) {
              text = currentExercise.correct;
           } else {
              const distractors = currentExercise.options?.filter(o => o !== currentExercise.correct) || ["Wrong"];
              text = distractors[Math.floor(Math.random() * distractors.length)];
           }

           newMoles[randomIndex] = {
             id: Date.now(),
             text,
             isTarget,
             status: 'up',
             popTime: Date.now()
           };
        }
        return newMoles;
      });
    };

    gameLoopRef.current = setInterval(spawnMole, spawnInterval);
    return () => clearInterval(gameLoopRef.current);
  }, [gameState, currentExercise]);

  const whack = (index) => {
    const mole = moles[index];
    if (!mole || mole.status !== 'up') return;

    setMoles(prev => {
      const newMoles = [...prev];
      if (newMoles[index]) {
          if (mole.isTarget) {
            newMoles[index] = { ...mole, status: 'hit' };
            setScore(s => s + 50);
            // Play sound if we had one
          } else {
            newMoles[index] = { ...mole, status: 'miss' };
            setScore(s => Math.max(0, s - 20));
          }
      }
      return newMoles;
    });

    // Clear after animation
    setTimeout(() => {
        setMoles(prev => {
            const newMoles = [...prev];
            if (newMoles[index] && newMoles[index].id === mole.id) {
                newMoles[index] = null;
            }
            return newMoles;
        });
    }, 500);
  };

  const nextLevel = () => {
      if (currentIndex < exercises.length - 1) {
          setCurrentIndex(prev => prev + 1);
          setTimeLeft(45);
          setGameState('intro');
          setMoles(Array(9).fill(null));
      } else {
          window.location.reload();
      }
  };

  // --- UI ---

  if (gameState === 'intro') {
    return (
      <div className="bg-gradient-to-b from-emerald-800 to-emerald-900 h-[500px] rounded-xl flex flex-col items-center justify-center text-white p-8 text-center shadow-2xl border-4 border-emerald-700">
         <div className="bg-white/10 p-6 rounded-full mb-4 animate-bounce">
             <Hammer size={64} className="text-yellow-400" />
         </div>
         <h2 className="text-5xl font-black mb-2 text-yellow-400 drop-shadow-md font-serif">Grammar Mole</h2>
         <p className="text-xl mb-8 text-emerald-100">Whack the correct words!</p>
         
         <div className="bg-black/30 p-6 rounded-2xl mb-8 border border-white/10 w-full max-w-md">
           <p className="text-sm text-emerald-200 uppercase tracking-wider font-bold mb-2">Mission Target</p>
           <p className="font-bold text-3xl text-white">{currentExercise.prompt || "The Correct Word"}</p>
           <div className="mt-4 text-sm text-emerald-300">
               Target: <span className="text-yellow-300 font-bold">{currentExercise.correct}</span>
           </div>
         </div>

         <button 
            onClick={() => setGameState('playing')} 
            className="bg-yellow-500 hover:bg-yellow-400 text-emerald-900 font-black text-xl px-10 py-4 rounded-full shadow-[0_6px_0_rgb(161,98,7)] active:shadow-none active:translate-y-1 transition-all"
         >
           START GAME
         </button>
      </div>
    );
  }

  if (gameState === 'finished') {
    return (
      <div className="bg-gradient-to-b from-emerald-800 to-emerald-900 h-[500px] rounded-xl flex flex-col items-center justify-center text-white p-8 text-center">
         <Star size={80} className="text-yellow-400 mb-6 animate-spin-slow" />
         <h2 className="text-4xl font-bold mb-2">Time's Up!</h2>
         <p className="text-3xl font-mono text-yellow-300 mb-8 bg-black/30 px-6 py-2 rounded-lg">Score: {score}</p>
         <button onClick={nextLevel} className="bg-white hover:bg-emerald-50 text-emerald-900 font-bold text-lg px-8 py-3 rounded-full shadow-lg transition-transform hover:scale-105">
            {currentIndex < exercises.length - 1 ? 'Next Round' : 'Play Again'}
         </button>
      </div>
    );
  }

  return (
    <div className="bg-[#5D4037] h-[500px] rounded-xl relative overflow-hidden select-none cursor-[url('https://cdn-icons-png.flaticon.com/512/587/587356.png'),_pointer] shadow-2xl border-b-8 border-[#3E2723]">
       
       {/* Lawn Background Pattern */}
       <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#8D6E63 2px, transparent 2px)', backgroundSize: '20px 20px' }}></div>

       {/* HUD */}
       <div className="absolute top-0 left-0 w-full p-4 flex justify-between z-20 pointer-events-none">
         <div className="bg-black/60 backdrop-blur-md text-white px-4 py-2 rounded-xl font-bold border border-white/10 shadow-lg flex items-center gap-2">
           <span className="text-emerald-400 text-xs uppercase">Target</span>
           <span className="text-yellow-400 text-lg">{currentExercise.correct}</span>
         </div>
         <div className="flex gap-3">
            <div className="bg-black/60 backdrop-blur-md text-white px-4 py-2 rounded-xl font-bold border border-white/10 shadow-lg min-w-[100px]">
               Score: <span className="text-yellow-400">{score}</span>
            </div>
            <div className={`px-4 py-2 rounded-xl font-bold border border-black/10 shadow-lg flex items-center gap-2 ${timeLeft < 10 ? 'bg-red-500 text-white animate-pulse' : 'bg-white text-stone-800'}`}>
               <Timer size={18} /> {timeLeft}s
            </div>
         </div>
       </div>

       {/* Holes Grid */}
       <div className="grid grid-cols-3 gap-4 p-6 pt-20 h-full max-w-2xl mx-auto">
          {moles.map((mole, i) => (
            <div key={i} className="relative flex items-end justify-center group perspective-1000">
               {/* Hole Graphic */}
               <div className="absolute bottom-2 w-24 h-8 bg-black/40 rounded-[50%] blur-sm z-0"></div>
               <div className="absolute bottom-0 w-32 h-12 bg-[#3E2723] rounded-[50%] border-b-4 border-[#281815] z-10 shadow-inner"></div>
               
               {/* Mole Container (masks the mole movement) */}
               <div className="absolute bottom-4 w-28 h-28 overflow-hidden z-0 rounded-b-3xl flex justify-center">
                   {mole && (
                     <div 
                       onClick={() => whack(i)}
                       className={`
                         absolute w-24 h-24 bg-[#8D6E63] rounded-t-full border-4 border-[#5D4037] 
                         flex flex-col items-center justify-start pt-2
                         cursor-pointer shadow-inner transition-all duration-200 ease-out
                         hover:brightness-110
                         ${mole.status === 'up' ? 'translate-y-0' : 'translate-y-full'}
                         ${mole.status === 'hit' ? 'bg-green-500 border-green-700 scale-95' : ''}
                         ${mole.status === 'miss' ? 'bg-red-500 border-red-700 rotate-12' : ''}
                       `}
                     >
                        {/* Mole Face */}
                        <div className="relative w-full h-full flex flex-col items-center">
                            {/* Eyes */}
                            <div className="flex gap-2 mt-2">
                                <div className="w-2 h-2 bg-black rounded-full relative">
                                    <div className="w-0.5 h-0.5 bg-white absolute top-0.5 right-0.5 rounded-full"></div>
                                </div>
                                <div className="w-2 h-2 bg-black rounded-full relative">
                                    <div className="w-0.5 h-0.5 bg-white absolute top-0.5 right-0.5 rounded-full"></div>
                                </div>
                            </div>
                            {/* Nose */}
                            <div className="w-3 h-2 bg-pink-300 rounded-full mt-1"></div>
                            
                            {/* Text Sign */}
                            <div className="mt-2 bg-white/90 px-2 py-1 rounded text-xs font-bold text-stone-900 shadow-sm max-w-[90%] break-words leading-tight text-center">
                                {mole.status === 'hit' ? '✅' : mole.status === 'miss' ? '❌' : mole.text}
                            </div>
                        </div>
                     </div>
                   )}
               </div>
               
               {/* Grass Patch Overlay (bottom of hole) */}
               <div className="absolute bottom-[-5px] w-36 h-6 z-20 overflow-hidden">
                    <svg viewBox="0 0 100 20" preserveAspectRatio="none" className="w-full h-full text-[#7CB342] fill-current">
                        <path d="M0 20 L0 10 Q5 0 10 10 T20 10 T30 10 T40 10 T50 10 T60 10 T70 10 T80 10 T90 10 T100 10 L100 20 Z" />
                    </svg>
               </div>
            </div>
          ))}
       </div>
    </div>
  );
};

export default GrammarMole;
