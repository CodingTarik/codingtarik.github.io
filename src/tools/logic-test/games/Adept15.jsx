import React, { useState } from 'react';
import { User, ArrowRight, CheckCircle } from 'lucide-react';

const QUESTIONS = [
    { left: "I prefer working alone.", right: "I thrive in team environments." },
    { left: "I focus on details.", right: "I see the big picture." },
    { left: "I stick to proven methods.", right: "I like to experiment with new ways." },
    { left: "I avoid conflict.", right: "I address issues directly." },
    { left: "I plan everything ahead.", right: "I adapt spontaneously." },
    { left: "I am competitive.", right: "I am cooperative." },
    { left: "I trust my intuition.", right: "I rely on data." },
    { left: "I work fast.", right: "I work thoroughly." }
];

export default function Adept15({ onComplete }) {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [value, setValue] = useState(50); // 0 = Left, 100 = Right
  const [answers, setAnswers] = useState([]);

  const handleNext = () => {
      const newAnswers = [...answers, value];
      setAnswers(newAnswers);
      
      if (currentIdx < QUESTIONS.length - 1) {
          setCurrentIdx(prev => prev + 1);
          setValue(50); // Reset to neutral
      } else {
          // Calculate "Culture Fit" score (Dummy calculation)
          // Assume ideal profile is: Team(>60), BigPicture(>60), Experiment(>70), Direct(>50)
          let score = 0;
          newAnswers.forEach(v => score += v); // Just sum for demo
          const normalizedScore = Math.min(100, Math.round(score / QUESTIONS.length));
          
          onComplete(normalizedScore, 100, { trait: 'Adaptable' });
      }
  };

  const q = QUESTIONS[currentIdx];

  return (
    <div className="flex flex-col h-full max-w-2xl mx-auto p-8 justify-center">
        <div className="text-center mb-12">
            <h2 className="text-2xl font-bold mb-2">Adept-15 Simulation</h2>
            <p className="text-slate-500">Statement {currentIdx + 1} of {QUESTIONS.length}</p>
            <div className="w-full bg-slate-200 h-2 rounded-full mt-4">
                <div 
                    className="bg-blue-600 h-2 rounded-full transition-all duration-300" 
                    style={{ width: `${((currentIdx + 1) / QUESTIONS.length) * 100}%` }}
                />
            </div>
        </div>

        <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-700">
            <div className="flex justify-between items-center mb-12 gap-8">
                <div className="flex-1 text-right font-medium text-slate-700 dark:text-slate-300">
                    {q.left}
                </div>
                
                <div className="flex-1 text-left font-medium text-slate-700 dark:text-slate-300">
                    {q.right}
                </div>
            </div>

            <div className="relative mb-12 px-4">
                <input 
                    type="range" 
                    min="0" 
                    max="100" 
                    value={value} 
                    onChange={(e) => setValue(parseInt(e.target.value))}
                    className="w-full h-3 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                />
                <div className="flex justify-between text-xs text-slate-400 mt-2 font-mono">
                    <span>Strongly Agree</span>
                    <span>Neutral</span>
                    <span>Strongly Agree</span>
                </div>
            </div>

            <div className="text-center">
                <button 
                    onClick={handleNext}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-bold flex items-center gap-2 mx-auto transition-all"
                >
                    Next <ArrowRight size={18} />
                </button>
            </div>
        </div>
    </div>
  );
}

