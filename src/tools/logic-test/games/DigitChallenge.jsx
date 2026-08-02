import React, { useState, useEffect } from 'react';
import { Delete, Lock } from 'lucide-react';

export default function DigitChallenge({ onComplete, duration }) {
    const [gameState, setGameState] = useState('intro');
    const [level, setLevel] = useState(1);
    const [equation, setEquation] = useState({ parts: [], answer: 0, missingIdx: 0 });
    const [input, setInput] = useState('');
    const [score, setScore] = useState(0);
    const [timeLeft, setTimeLeft] = useState(duration || 300);

    const generateEquation = () => {
        // AON style: "1 + 8 = 9". 
        // Often 3 numbers on LHS? Or just 2?
        // Level 1: A + B = C
        // Level 3: A + B + C = D ?

        const numParts = 2 + Math.floor((level - 1) / 3);
        const parts = [];
        let sum = 0;

        for (let i = 0; i < numParts; i++) {
            const val = Math.floor(Math.random() * (level * 2 + 5)) + 1;
            parts.push(val);
            sum += val;
        }

        // Operator is always + for basic numeracy? Or +/-?
        // Let's stick to + for visual simplicity matching image for now, maybe add - later.
        const ops = Array(numParts - 1).fill('+');

        // Identify missing part. Could be a number or result.
        // Image 3 shows "8" highlighted in the middle. "1 + [8] = 9".
        // So missing is one of the addends.
        const missingIdx = Math.floor(Math.random() * numParts); // Only hide addends for now? Or result too?
        // Image shows dark box for 8.

        setEquation({ parts, ops, answer: sum, missingIdx }); // missingIdx relative to parts
        setInput('');
    };

    const startGame = () => {
        setGameState('playing');
        generateEquation();
    };

    const handleInput = (char) => {
        if (input.length < 3) setInput(prev => prev + char);
    };

    const handleDelete = () => {
        setInput(prev => prev.slice(0, -1));
    };

    const handleSubmit = () => {
        const correctVal = equation.parts[equation.missingIdx];
        if (parseInt(input) === correctVal) {
            setScore(s => s + 100);
            setLevel(l => l + 1);
            generateEquation();
        } else {
            // Penalty?
            setInput(''); // Just clear
        }
    };

    useEffect(() => {
        if (gameState === 'playing' && timeLeft > 0) {
            const t = setInterval(() => setTimeLeft(prev => prev - 1), 1000);
            return () => clearInterval(t);
        } else if (timeLeft <= 0 && gameState === 'playing') {
            onComplete(score, 1000, { level });
        }
    }, [timeLeft, gameState]);


    if (gameState === 'intro') {
        return (
            <div className="flex flex-col items-center justify-center h-full p-8 text-center bg-white dark:bg-slate-900 rounded-lg relative overflow-hidden">
                {/* AON Header */}
                <div className="w-full bg-[#004b87] text-white p-3 flex justify-between items-center absolute top-0 left-0 rounded-t-lg">
                    <div className="text-sm font-semibold tracking-wide ml-4">Aon // digitChallenge</div>
                    <div className="mr-4 text-xs font-mono">INTRO</div>
                </div>

                <h2 className="text-2xl font-bold mb-4 mt-12 text-slate-800 dark:text-white">Numeracy Challenge</h2>
                <p className="mb-8 max-w-md text-slate-600 dark:text-slate-300">
                    Solve the equations by filling in the missing number.
                </p>
                <button onClick={startGame} className="bg-[#004b87] hover:bg-[#003865] text-white px-12 py-3 rounded text-sm font-bold uppercase tracking-wider transition-all shadow-md">
                    Start Level 1
                </button>
            </div>
        );
    }

    return (
        <div className="flex flex-col h-full bg-slate-50 relative select-none">
            {/* AON Header */}
            <div className="w-full bg-[#004b87] text-white h-12 flex justify-between items-center px-6 shadow-md z-10 shrink-0">
                <div className="text-sm font-semibold tracking-wide opacity-90">Aon // digitChallenge</div>
                <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2 bg-[#003865] px-3 py-1 rounded text-xs font-bold">
                        <span>★ Level {level}</span>
                    </div>
                    <div className="text-xs font-mono opacity-80">
                        {Math.floor(timeLeft / 60)}:{(timeLeft % 60).toString().padStart(2, '0')}
                    </div>
                </div>
            </div>
            {/* Progress Bar */}
            <div className="w-full h-1.5 bg-slate-200">
                <div className="h-full bg-slate-500" style={{ width: `${(timeLeft / duration) * 100}%` }}></div>
            </div>

            <div className="flex-1 flex flex-col items-center justify-start pt-12 pb-4 px-4 bg-[#f0f0f0]">

                {/* Equation Display */}
                <div className="bg-[#e5e5e5] p-2 rounded-xl mb-8 flex items-center justify-center gap-2 shadow-inner min-w-[300px]">
                    {equation.parts.map((part, i) => (
                        <React.Fragment key={i}>
                            {i > 0 && <span className="text-slate-500 text-2xl font-light">+</span>}
                            <div className={`
                             h-14 min-w-[3.5rem] px-2 rounded-lg flex items-center justify-center text-3xl font-light
                             ${i === equation.missingIdx
                                    ? 'bg-[#666666] text-white shadow-inner ring-2 ring-slate-400'
                                    : 'bg-transparent text-slate-600'}
                         `}>
                                {i === equation.missingIdx ? (input || '') : part}
                                {i === equation.missingIdx && !input && <span className="animate-pulse opacity-50">|</span>}
                            </div>
                        </React.Fragment>
                    ))}
                    <span className="text-slate-500 text-2xl font-light">=</span>
                    <div className="text-slate-600 text-3xl font-light mx-2">{equation.answer}</div>
                </div>

                {/* Keypad */}
                <div className="grid grid-cols-3 gap-3 w-64 mb-8">
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(n => (
                        <button
                            key={n}
                            onClick={() => handleInput(n.toString())}
                            className="h-16 bg-[#e0e0e0] hover:bg-white text-slate-600 text-2xl font-light rounded-lg shadow-sm border-b-2 border-slate-300 active:border-b-0 active:translate-y-[2px] transition-all"
                        >
                            {n}
                        </button>
                    ))}

                    <div className="col-start-2">
                        <button
                            onClick={() => handleInput('0')}
                            className="w-full h-16 bg-[#e0e0e0] hover:bg-white text-slate-600 text-2xl font-light rounded-lg shadow-sm border-b-2 border-slate-300 active:border-b-0 active:translate-y-[2px] transition-all"
                        >
                            0
                        </button>
                    </div>
                </div>

                {/* Actions: Delete & Submit */}
                <div className="flex flex-col items-center gap-6 w-64">
                    <button
                        onClick={handleDelete}
                        className="w-full h-12 bg-[#f5f5f5] text-slate-400 hover:text-slate-600 rounded-lg flex items-center justify-center border border-slate-200"
                    >
                        <Delete size={24} />
                    </button>

                    <button
                        onClick={handleSubmit}
                        className="w-16 h-16 bg-[#004b87] hover:bg-[#003865] rounded-full flex items-center justify-center text-white shadow-lg transition-transform hover:scale-105 active:scale-95"
                    >
                        <Lock size={24} strokeWidth={2.5} />
                    </button>
                </div>

            </div>
        </div>
    );
}

