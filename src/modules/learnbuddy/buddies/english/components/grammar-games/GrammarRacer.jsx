import React, { useState, useEffect, useRef } from 'react';
import { Car, Trophy, AlertTriangle, CheckCircle, Play, RotateCcw, Gauge } from 'lucide-react';

/**
 * GrammarRacer - Enhanced Edition
 * A high-speed lane racing game with improved visuals and fixed speed logic.
 */
const GrammarRacer = ({ exercises, language = 'en' }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [gameState, setGameState] = useState('start'); // start, playing, correct, wrong, finished
  const [carLane, setCarLane] = useState(1); // 0, 1, 2
  const [score, setScore] = useState(0);
  const [feedback, setFeedback] = useState('');
  const [options, setOptions] = useState([]);
  const [answerY, setAnswerY] = useState(-20); 
  const [roadOffset, setRoadOffset] = useState(0); // For scrolling effect

  const requestRef = useRef();
  const speedRef = useRef(0.4); // Start slower
  const currentExercise = exercises[currentIndex];

  // --- Game Setup & Reset ---

  const initializeRound = () => {
    if (!currentExercise) return;

    let currentOptions = [];
    let correctVal = '';

    if (currentExercise.options) {
      currentOptions = [...currentExercise.options];
      correctVal = currentExercise.correct;
    } else {
      // Fallback
      currentOptions = ["Option A", "Option B", "Option C"];
      correctVal = "Option A";
    }

    // Pad to 3 options if needed
    while(currentOptions.length < 3) currentOptions.push("???");
    // Shuffle logic could be added here if options aren't pre-shuffled

    setOptions(currentOptions.slice(0, 3));
    
    // RESET POSITION & SPEED
    setAnswerY(-30); 
    speedRef.current = 0.4 + (currentIndex * 0.05); // Slight increase per level, NOT per score accumulation bug
  };

  useEffect(() => {
    if (gameState === 'playing') {
      initializeRound();
    }
  }, [currentIndex, gameState]);

  // --- Animation Loop ---

  const animate = () => {
    if (gameState === 'playing') {
      // 1. Move Answers Down
      setAnswerY(prev => {
        // Collision check
        if (prev > 82 && prev < 90) {
           // Trigger collision handling in effect to keep render loop clean? 
           // Or check here? Let's check in effect for React purity.
        }
        return prev + speedRef.current;
      });

      // 2. Scroll Road (Visual only)
      setRoadOffset(prev => (prev + 2) % 20);

      requestRef.current = requestAnimationFrame(animate);
    }
  };

  useEffect(() => {
    if (gameState === 'playing') {
      requestRef.current = requestAnimationFrame(animate);
    }
    return () => cancelAnimationFrame(requestRef.current);
  }, [gameState]);

  // --- Collision Logic ---

  useEffect(() => {
    if (gameState === 'playing' && answerY > 85) {
      const selectedOption = options[carLane];
      const isCorrect = selectedOption === currentExercise.correct;

      cancelAnimationFrame(requestRef.current); // Stop immediately

      if (isCorrect) {
        setGameState('correct');
        setScore(s => s + 100 + (Math.floor(speedRef.current * 100)));
        setFeedback('Perfect Drift! 🏎️💨');
      } else {
        setGameState('wrong');
        setFeedback(currentExercise.explanation || 'Crash! Wrong answer.');
      }
    }
  }, [answerY, gameState, carLane, options, currentExercise]);

  // --- Controls ---

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (gameState !== 'playing') return;
      if (e.key === 'ArrowLeft') setCarLane(prev => Math.max(0, prev - 1));
      if (e.key === 'ArrowRight') setCarLane(prev => Math.min(2, prev + 1));
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [gameState]);

  const nextLevel = () => {
    if (currentIndex < exercises.length - 1) {
      setAnswerY(-30); // Force reset before state change
      setCurrentIndex(prev => prev + 1);
      setGameState('playing');
      setCarLane(1);
    } else {
      setGameState('finished');
    }
  };

  const restart = () => {
    setCurrentIndex(0);
    setScore(0);
    setGameState('start');
    setCarLane(1);
  };

  // --- Visual Styles ---

  const perspectiveStyle = { perspective: '800px' };
  const roadTransform = { 
    transform: 'rotateX(50deg) scale(1.5)',
    transformOrigin: 'bottom center' 
  };

  // --- Render ---

  if (gameState === 'start') {
    return (
      <div className="bg-zinc-900 rounded-xl overflow-hidden shadow-2xl text-white p-8 text-center relative h-96 flex flex-col items-center justify-center group">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-900 via-zinc-900 to-black opacity-80"></div>
        
        {/* Neon grid background */}
        <div className="absolute inset-0 opacity-20" 
             style={{
               backgroundImage: 'linear-gradient(transparent 95%, #a855f7 95%), linear-gradient(90deg, transparent 95%, #a855f7 95%)',
               backgroundSize: '40px 40px',
               transform: 'perspective(500px) rotateX(60deg) translateY(-100px) scale(2)'
             }}>
        </div>

        <div className="relative z-10 transform transition-all duration-500 group-hover:scale-105">
          <div className="bg-gradient-to-br from-yellow-400 to-orange-600 w-24 h-24 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-[0_0_30px_rgba(234,179,8,0.6)] border-4 border-white/20 rotate-3">
            <Car size={48} className="text-white" />
          </div>
          <h2 className="text-5xl font-black mb-2 italic tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 filter drop-shadow-lg">
            GRAMMAR RACER
          </h2>
          <p className="text-zinc-400 mb-8 text-lg font-mono uppercase tracking-widest">Nitro Edition</p>
          
          <button 
            onClick={() => setGameState('playing')}
            className="bg-white text-black font-black text-xl py-4 px-12 rounded-full hover:bg-yellow-400 transition-all transform hover:scale-110 hover:-rotate-1 shadow-[0_0_20px_rgba(255,255,255,0.5)] flex items-center gap-3 mx-auto"
          >
            <Play fill="currentColor" /> START RACE
          </button>
        </div>
      </div>
    );
  }

  if (gameState === 'finished') {
    return (
      <div className="bg-zinc-900 rounded-xl overflow-hidden shadow-2xl text-white p-8 text-center h-96 flex flex-col items-center justify-center">
        <Trophy size={80} className="text-yellow-400 mb-6 animate-bounce drop-shadow-[0_0_15px_rgba(250,204,21,0.5)]" />
        <h2 className="text-4xl font-black mb-4">CHAMPION! 🏁</h2>
        <div className="bg-white/10 px-8 py-4 rounded-2xl mb-8 border border-white/10">
          <p className="text-sm text-zinc-400 uppercase tracking-widest mb-1">Final Score</p>
          <p className="text-4xl font-mono font-bold text-green-400">{score}</p>
        </div>
        <button onClick={restart} className="text-zinc-400 hover:text-white flex items-center gap-2 transition-colors">
          <RotateCcw size={18} /> Play Again
        </button>
      </div>
    );
  }

  return (
    <div className="bg-zinc-950 rounded-xl overflow-hidden shadow-2xl relative h-[500px] flex flex-col select-none border-4 border-zinc-800">
      
      {/* HUD Top */}
      <div className="absolute top-0 left-0 w-full p-4 flex justify-between items-start z-30 pointer-events-none">
        <div className="bg-black/80 backdrop-blur-md px-4 py-2 rounded-lg border border-zinc-700 shadow-lg">
          <p className="text-[10px] text-zinc-500 uppercase font-bold tracking-widest">LAP</p>
          <p className="text-xl font-black text-white font-mono leading-none">{currentIndex + 1}<span className="text-zinc-600 text-sm">/{exercises.length}</span></p>
        </div>
        
        {/* Question Box */}
        <div className="bg-gradient-to-b from-zinc-800 to-black/90 backdrop-blur-md px-8 py-4 rounded-2xl border-b-4 border-yellow-500 shadow-[0_10px_30px_rgba(0,0,0,0.5)] max-w-md mx-4">
          <p className="text-xs text-yellow-500 uppercase font-bold tracking-widest mb-2 text-center flex items-center justify-center gap-2">
            <Gauge size={14} /> Current Objective
          </p>
          <p className="text-2xl font-bold text-white text-center whitespace-normal leading-tight">
             {currentExercise.prompt.replace('___', '_____')}
          </p>
        </div>

        <div className="bg-black/80 backdrop-blur-md px-4 py-2 rounded-lg border border-zinc-700 shadow-lg text-right">
          <p className="text-[10px] text-zinc-500 uppercase font-bold tracking-widest">SCORE</p>
          <p className="text-xl font-black text-green-400 font-mono leading-none">{score}</p>
        </div>
      </div>

      {/* Game World (3D) */}
      <div className="flex-1 relative overflow-hidden bg-gradient-to-b from-indigo-950 via-purple-900 to-zinc-900" style={perspectiveStyle}>
        
        {/* Retro Grid Sky */}
        <div className="absolute inset-0 opacity-30" 
             style={{
               backgroundImage: 'linear-gradient(0deg, transparent 24%, rgba(255, 255, 255, .3) 25%, rgba(255, 255, 255, .3) 26%, transparent 27%, transparent 74%, rgba(255, 255, 255, .3) 75%, rgba(255, 255, 255, .3) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(255, 255, 255, .3) 25%, rgba(255, 255, 255, .3) 26%, transparent 27%, transparent 74%, rgba(255, 255, 255, .3) 75%, rgba(255, 255, 255, .3) 76%, transparent 77%, transparent)',
               backgroundSize: '50px 50px',
               transform: 'perspective(500px) rotateX(60deg) translateY(-100px) scale(3)'
             }}>
        </div>

        {/* Moving Road */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-full flex justify-center items-end" style={roadTransform}>
          <div className="w-[800px] h-[200%] bg-zinc-800 relative border-l-[20px] border-r-[20px] border-zinc-700 shadow-2xl flex overflow-hidden">
             {/* Moving texture on road */}
             <div className="absolute inset-0 opacity-10" 
                  style={{
                    backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 40px, #000 40px, #000 80px)',
                    backgroundPosition: `0 ${roadOffset}px`
                  }}>
             </div>

             {/* Lane Dividers */}
             <div className="flex-1 border-r-4 border-dashed border-yellow-500/30 h-full"></div>
             <div className="flex-1 border-r-4 border-dashed border-yellow-500/30 h-full"></div>
             <div className="flex-1 h-full"></div>
          </div>
        </div>

        {/* Options (Enemies/Gates) */}
        {gameState === 'playing' && options.map((opt, idx) => (
           <div 
             key={idx}
             className="absolute transform -translate-x-1/2 bg-white/90 backdrop-blur text-black font-black px-6 py-4 rounded-xl shadow-[0_0_30px_rgba(255,255,255,0.4)] border-b-8 border-zinc-300 z-10 text-center min-w-[140px] flex flex-col items-center justify-center"
             style={{
               left: `${25 + (idx * 25)}%`, 
               top: `${answerY}%`,
               scale: `${0.4 + (answerY/150)}`, // Smoother scaling
               opacity: answerY > -10 ? 1 : 0,
               zIndex: Math.floor(answerY)
             }}
           >
             <span className="text-xs uppercase tracking-widest text-zinc-500 mb-1">GATE {idx + 1}</span>
             <span className="text-xl">{opt}</span>
           </div>
        ))}

        {/* Player Car */}
        <div 
          className="absolute bottom-8 transition-all duration-200 ease-out z-50"
          style={{
            left: `${25 + (carLane * 25)}%`,
            transform: 'translateX(-50%)'
          }}
        >
           <div className="relative group">
             {/* Neon Underglow */}
             <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-20 h-10 bg-purple-500 blur-xl opacity-80 rounded-full animate-pulse"></div>
             
             {/* Car Model (CSS Art) */}
             <div className="w-20 h-32 relative transform transition-transform group-hover:scale-105">
                {/* Spoiler */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-24 h-4 bg-black rounded-full z-20"></div>
                {/* Body */}
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-16 h-28 bg-gradient-to-b from-red-500 to-red-700 rounded-3xl shadow-inner z-10">
                  {/* Stripe */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-full bg-white/90"></div>
                  {/* Windshield */}
                  <div className="absolute top-6 left-1/2 -translate-x-1/2 w-12 h-8 bg-sky-400/50 rounded-sm border-t-2 border-white/30"></div>
                  {/* Roof */}
                  <div className="absolute top-16 left-1/2 -translate-x-1/2 w-12 h-8 bg-red-800 rounded-sm"></div>
                </div>
                {/* Wheels */}
                <div className="absolute bottom-4 -left-2 w-4 h-6 bg-black rounded-lg"></div>
                <div className="absolute bottom-4 -right-2 w-4 h-6 bg-black rounded-lg"></div>
                <div className="absolute top-8 -left-2 w-4 h-6 bg-black rounded-lg"></div>
                <div className="absolute top-8 -right-2 w-4 h-6 bg-black rounded-lg"></div>
             </div>
             
             {/* Exhaust Flames */}
             <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 flex gap-6">
                <div className="w-2 h-8 bg-orange-400 rounded-full blur-sm animate-pulse"></div>
                <div className="w-2 h-8 bg-orange-400 rounded-full blur-sm animate-pulse delay-75"></div>
             </div>
           </div>
        </div>
        
        {/* Mobile Controls */}
        <div className="absolute inset-0 flex z-50 md:hidden">
          <div className="flex-1 active:bg-white/5" onClick={() => setCarLane(Math.max(0, carLane - 1))}></div>
          <div className="flex-1 active:bg-white/5" onClick={() => setCarLane(1)}></div>
          <div className="flex-1 active:bg-white/5" onClick={() => setCarLane(Math.min(2, carLane + 1))}></div>
        </div>

      </div>

      {/* Feedback Overlay */}
      {(gameState === 'correct' || gameState === 'wrong') && (
        <div className="absolute inset-0 bg-black/80 z-[60] flex flex-col items-center justify-center p-6 text-center backdrop-blur-md animate-in fade-in duration-200">
          {gameState === 'correct' ? (
            <div className="relative">
               <div className="absolute inset-0 bg-green-500 blur-3xl opacity-20 animate-pulse"></div>
               <CheckCircle size={100} className="text-green-400 mb-4 relative z-10 animate-bounce" />
            </div>
          ) : (
            <div className="relative">
               <div className="absolute inset-0 bg-red-500 blur-3xl opacity-20 animate-pulse"></div>
               <AlertTriangle size={100} className="text-red-500 mb-4 relative z-10 animate-pulse" />
            </div>
          )}
          
          <h3 className={`text-4xl font-black mb-2 tracking-tight ${gameState === 'correct' ? 'text-green-400' : 'text-red-400'}`}>
            {gameState === 'correct' ? 'EXCELLENT!' : 'CRASHED!'}
          </h3>
          
          <p className="text-zinc-300 text-xl mb-8 max-w-md font-medium leading-relaxed">{feedback}</p>
          
          <button 
            onClick={nextLevel}
            className="bg-white text-black font-black text-lg py-4 px-12 rounded-full hover:scale-105 transition-transform shadow-[0_0_30px_rgba(255,255,255,0.3)] flex items-center gap-2"
          >
            {currentIndex < exercises.length - 1 ? 'NEXT LEVEL ➡️' : 'FINISH RACE 🏁'}
          </button>
        </div>
      )}
    </div>
  );
};

export default GrammarRacer;
