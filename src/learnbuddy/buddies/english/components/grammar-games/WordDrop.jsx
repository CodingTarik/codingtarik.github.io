import React, { useState, useEffect, useRef } from 'react';
import { CloudRain, Star, ShieldAlert } from 'lucide-react';

/**
 * WordDrop - Catch the correct falling words!
 * Words fall from the sky. Catch the target words in your basket.
 */
const WordDrop = ({ exercises }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [gameState, setGameState] = useState('intro'); // intro, playing, finished, gameover
  const [score, setScore] = useState(0);
  const [lives, setLives] = useState(3);
  
  // Falling items: { id, text, isCorrect, x, y, speed, width }
  const [items, setItems] = useState([]);
  
  // Player position (x percent 0-100)
  const [playerX, setPlayerX] = useState(50);
  
  const containerRef = useRef(null);
  const requestRef = useRef();
  const lastSpawnTime = useRef(0);
  const currentExercise = exercises[currentIndex];
  
  const PLAYER_WIDTH = 15; // Percentage width of basket
  const SPAWN_RATE = 1500; // ms

  // Game Loop
  const updateGame = (time) => {
    if (gameState !== 'playing') return;

    // Spawn new items
    if (time - lastSpawnTime.current > SPAWN_RATE) {
        spawnItem();
        lastSpawnTime.current = time;
    }

    setItems(prevItems => {
        const newItems = [];
        let hitOccurred = false;
        let lifeLost = false;

        prevItems.forEach(item => {
            // Move item down
            const newY = item.y + item.speed;
            
            // Check collision with player
            // Player is at bottom (approx 85% to 95% height)
            if (newY > 85 && newY < 95) {
                // Check X overlap
                // item.x is left %, item width is approx 10%
                // playerX is center %
                const playerLeft = playerX - (PLAYER_WIDTH / 2);
                const playerRight = playerX + (PLAYER_WIDTH / 2);
                const itemCenter = item.x + 5; // approx center

                if (itemCenter > playerLeft && itemCenter < playerRight) {
                    // Caught!
                    if (item.isCorrect) {
                        setScore(s => s + 50);
                        hitOccurred = true; // Play sound/effect
                    } else {
                        setLives(l => l - 1);
                        lifeLost = true;
                    }
                    return; // Remove item
                }
            }

            // Missed item (hit floor)
            if (newY > 100) {
                if (item.isCorrect) {
                    setLives(l => l - 1); // Missed a correct one
                    lifeLost = true;
                }
                return; // Remove item
            }

            newItems.push({ ...item, y: newY });
        });
        
        if (lifeLost && lives <= 1) {
            setGameState('gameover');
        }

        return newItems;
    });

    requestRef.current = requestAnimationFrame(updateGame);
  };

  const spawnItem = () => {
     const isCorrect = Math.random() > 0.6; // 40% chance of correct
     let text = "";
     
     if (isCorrect) {
         text = currentExercise.correct;
     } else {
         const distractors = currentExercise.options?.filter(o => o !== currentExercise.correct) || ["Wrong"];
         text = distractors[Math.floor(Math.random() * distractors.length)];
     }

     const newItem = {
         id: Date.now(),
         text,
         isCorrect,
         x: Math.random() * 80 + 5, // 5% to 85%
         y: -10,
         speed: 0.3 + (Math.random() * 0.3), // Random speed
     };
     
     setItems(prev => [...prev, newItem]);
  };

  useEffect(() => {
      if (gameState === 'playing') {
          requestRef.current = requestAnimationFrame(updateGame);
      }
      return () => cancelAnimationFrame(requestRef.current);
  }, [gameState, lives]); // Restart loop on state change if needed, but ref handles it mostly

  // Controls
  const handleMouseMove = (e) => {
      if (gameState !== 'playing' || !containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const percent = (x / rect.width) * 100;
      setPlayerX(Math.max(PLAYER_WIDTH/2, Math.min(100 - PLAYER_WIDTH/2, percent)));
  };

  const handleTouchMove = (e) => {
      if (gameState !== 'playing' || !containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = e.touches[0].clientX - rect.left;
      const percent = (x / rect.width) * 100;
      setPlayerX(Math.max(PLAYER_WIDTH/2, Math.min(100 - PLAYER_WIDTH/2, percent)));
  };
  
  const nextLevel = () => {
      if (currentIndex < exercises.length - 1) {
          setCurrentIndex(prev => prev + 1);
          setGameState('intro');
          setItems([]);
          setLives(3);
      } else {
          setGameState('finished');
      }
  };

  // --- UI ---

  if (gameState === 'intro') {
      return (
          <div className="bg-sky-900 h-[500px] rounded-xl flex flex-col items-center justify-center text-white p-8 text-center border-4 border-sky-700">
              <CloudRain size={64} className="text-sky-300 mb-4 animate-bounce" />
              <h2 className="text-4xl font-bold mb-2">Word Rain</h2>
              <p className="text-lg mb-8 text-sky-200">Catch the <span className="text-yellow-400 font-bold">correct</span> words. Avoid the wrong ones!</p>
              
              <div className="bg-white/10 p-6 rounded-xl mb-8 border border-white/20">
                  <p className="uppercase text-xs font-bold text-sky-300 mb-2">Current Target</p>
                  <p className="text-2xl font-bold">{currentExercise.prompt}</p>
                  <p className="text-yellow-400 font-bold mt-2">Catch: {currentExercise.correct}</p>
              </div>

              <button onClick={() => setGameState('playing')} className="bg-sky-500 hover:bg-sky-400 text-white font-bold px-8 py-3 rounded-full shadow-lg transition-transform hover:scale-105">
                  Start Catching
              </button>
          </div>
      );
  }

  if (gameState === 'finished' || gameState === 'gameover') {
      return (
          <div className="bg-slate-800 h-[500px] rounded-xl flex flex-col items-center justify-center text-white p-8 text-center">
              {gameState === 'finished' ? <Star size={64} className="text-yellow-400 mb-4" /> : <ShieldAlert size={64} className="text-red-400 mb-4" />}
              <h2 className="text-3xl font-bold mb-2">{gameState === 'finished' ? 'Level Complete!' : 'Game Over!'}</h2>
              <p className="text-2xl font-mono mb-6">Score: {score}</p>
              <button onClick={() => window.location.reload()} className="bg-white text-slate-900 font-bold px-6 py-2 rounded-full">
                  Play Again
              </button>
          </div>
      );
  }

  return (
      <div 
        ref={containerRef}
        className="bg-gradient-to-b from-slate-800 to-slate-900 h-[500px] rounded-xl relative overflow-hidden select-none touch-none cursor-none border-b-8 border-slate-950 shadow-2xl"
        onMouseMove={handleMouseMove}
        onTouchMove={handleTouchMove}
      >
          {/* Stars/Rain background effect */}
          <div className="absolute inset-0 opacity-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjZmZmIi8+Cjwvc3ZnPg==')] [mask-image:linear-gradient(to_bottom,transparent,black)]"></div>

          {/* HUD */}
          <div className="absolute top-0 left-0 w-full p-4 flex justify-between z-20 pointer-events-none">
              <div className="text-white font-bold bg-black/50 px-3 py-1 rounded border border-white/20">
                  Target: <span className="text-yellow-400">{currentExercise.correct}</span>
              </div>
              <div className="flex gap-4 text-white font-bold">
                  <div className="bg-black/50 px-3 py-1 rounded border border-white/20">Score: {score}</div>
                  <div className="flex gap-1 bg-black/50 px-3 py-1 rounded border border-white/20 text-red-400">
                      {[...Array(lives)].map((_, i) => <span key={i}>❤️</span>)}
                  </div>
              </div>
          </div>

          {/* Falling Items */}
          {items.map(item => (
              <div 
                key={item.id}
                className={`absolute px-3 py-2 rounded-lg font-bold text-sm shadow-lg border-2 transform -translate-x-1/2
                    ${item.isCorrect ? 'bg-green-500 border-green-300 text-white' : 'bg-red-500 border-red-300 text-white'}
                `}
                style={{
                    left: `${item.x}%`,
                    top: `${item.y}%`,
                }}
              >
                  {item.text}
              </div>
          ))}

          {/* Player Basket */}
          <div 
            className="absolute bottom-4 h-12 bg-amber-600 rounded-b-xl border-4 border-amber-800 flex items-center justify-center z-20 shadow-xl"
            style={{
                left: `${playerX}%`,
                width: `${PLAYER_WIDTH}%`,
                transform: 'translateX(-50%)'
            }}
          >
              <div className="absolute -top-1 w-[110%] h-2 bg-amber-900/50 rounded-full"></div>
              <span className="text-xs text-amber-200 font-bold uppercase tracking-widest opacity-50">Basket</span>
          </div>

          {/* Floor */}
          <div className="absolute bottom-0 w-full h-4 bg-emerald-600 border-t-4 border-emerald-400 opacity-50"></div>

      </div>
  );
};

export default WordDrop;


