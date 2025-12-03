import React, { useState, useEffect } from 'react';
import { Ghost, Flashlight, Zap } from 'lucide-react';

/**
 * GrammarGhost - Memory/Matching game with a spooky twist.
 * Find pairs of words (e.g., Go -> Went) in the dark using a flashlight.
 */
const GrammarGhost = ({ exercises }) => {
  const [cards, setCards] = useState([]);
  const [flipped, setFlipped] = useState([]);
  const [matched, setMatched] = useState([]);
  const [score, setScore] = useState(0);
  
  // Mouse position for flashlight effect
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Setup cards (Pair: Prompt + Correct)
    // Or assume exercises have pair data?
    // Let's just use prompt + correct as pairs.
    const newCards = exercises.flatMap((ex, i) => [
      { id: `p-${i}`, text: ex.prompt, type: 'prompt', matchId: i },
      { id: `a-${i}`, text: ex.correct, type: 'answer', matchId: i }
    ]);
    
    // Shuffle
    for (let i = newCards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newCards[i], newCards[j]] = [newCards[j], newCards[i]];
    }
    
    setCards(newCards);
  }, [exercises]);

  const handleCardClick = (id) => {
    if (flipped.length === 2 || flipped.includes(id) || matched.includes(id)) return;
    
    const newFlipped = [...flipped, id];
    setFlipped(newFlipped);
    
    if (newFlipped.length === 2) {
      const card1 = cards.find(c => c.id === newFlipped[0]);
      const card2 = cards.find(c => c.id === newFlipped[1]);
      
      if (card1.matchId === card2.matchId) {
        setMatched([...matched, ...newFlipped]);
        setFlipped([]);
        setScore(s => s + 100);
      } else {
        setTimeout(() => setFlipped([]), 1000);
      }
    }
  };

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };

  if (matched.length === cards.length && cards.length > 0) {
    return (
      <div className="bg-slate-900 h-96 rounded-xl flex flex-col items-center justify-center text-white">
        <Ghost size={64} className="text-purple-400 animate-bounce mb-4" />
        <h2 className="text-3xl font-bold">Ghost Busted!</h2>
        <p>Score: {score}</p>
        <button onClick={() => window.location.reload()} className="mt-4 bg-purple-600 px-6 py-2 rounded-full">Play Again</button>
      </div>
    );
  }

  return (
    <div 
      className="bg-black h-[500px] rounded-xl relative overflow-hidden cursor-none"
      onMouseMove={handleMouseMove}
    >
      {/* Flashlight Effect */}
      <div 
        className="absolute pointer-events-none inset-0 z-20"
        style={{
          background: `radial-gradient(circle 150px at ${mousePos.x}px ${mousePos.y}px, transparent 0%, rgba(0,0,0,0.95) 100%)`
        }}
      ></div>

      {/* Content */}
      <div className="grid grid-cols-4 gap-4 p-8 h-full z-10 relative">
         {cards.map(card => {
           const isFlipped = flipped.includes(card.id) || matched.includes(card.id);
           return (
             <div 
               key={card.id}
               onClick={() => handleCardClick(card.id)}
               className={`rounded-lg flex items-center justify-center text-center p-2 cursor-pointer transition-all duration-500 transform ${
                 isFlipped ? 'bg-white text-black rotate-0' : 'bg-slate-800 text-slate-800 rotate-y-180'
               }`}
             >
               {isFlipped ? (
                 <span className="font-bold">{card.text}</span>
               ) : (
                 <Ghost size={24} className="opacity-20" />
               )}
             </div>
           );
         })}
      </div>

      <div className="absolute bottom-4 right-4 text-white z-30 flex items-center gap-2">
         <Flashlight size={20} /> Move mouse to find cards
      </div>
    </div>
  );
};

export default GrammarGhost;


