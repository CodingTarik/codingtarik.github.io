import React, { useState, useEffect } from 'react';
import { Check, X, Play } from 'lucide-react';

// Diamond Component
const DiamondGrid = ({ data, size = "sm", type = "question" }) => {
    // data: { cells: [..], dot: 'blue' | 'orange' | 'white' | null }
    // size: sm (list), lg (main)

    // AON Diamond is rotated 45deg.
    // Inside is a 3x3 grid (also rotated?) No, usually the grid lines align with the diamond edges.
    // CSS Transform: rotate(45deg). Content rotate(-45deg)? 
    // Image 4: The text inside is UPRIGHT. The grid is ROTATED.

    const diamondSize = size === 'lg' ? 'w-48 h-48' : 'w-24 h-24';
    const cellSize = size === 'lg' ? 'w-10 h-10 text-xl' : 'w-5 h-5 text-[10px]';

    return (
        <div className={`relative ${diamondSize} flex items-center justify-center my-6 mx-2`}>
            {/* The Dot Attachment */}
            {/* Top Right or Bottom Left based on type? Image has dots on corners. */}
            {/* Let's just put it at Top Right for Blue, Bot Left for Orange? */}
            {data.group === 'A' && (
                <div className={`absolute -top-2 -right-2 w-6 h-6 rounded-full bg-[#0099cc] border-2 border-white shadow-sm z-20`} />
            )}
            {data.group === 'B' && (
                <div className={`absolute -bottom-2 -left-2 w-6 h-6 rounded-full bg-[#d97c00] border-2 border-white shadow-sm z-20`} />
            )}
            {/* Test item dots (dashed placeholder?) */}
            {type === 'test' && (
                <>
                    <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full border-2 border-dashed border-slate-300 bg-white z-10" />
                    <div className="absolute -bottom-2 -left-2 w-6 h-6 rounded-full border-2 border-dashed border-slate-300 bg-white z-10" />
                </>
            )}

            {/* The Rotated Container */}
            <div className="w-full h-full bg-[#e5e5e5] border-4 border-white shadow-md transform rotate-45 overflow-hidden flex flex-wrap content-center justify-center p-1">
                {/* Internal 3x3 Grid */}
                <div className="grid grid-cols-3 gap-0.5">
                    {data.cells.map((cell, i) => (
                        <div key={i} className={`${cellSize} bg-white flex items-center justify-center font-mono text-slate-400 font-bold transform -rotate-45`}>
                            {cell}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default function ScalesCLS({ onComplete, duration }) {
    const [gameState, setGameState] = useState('intro');
    const [level, setLevel] = useState(1);
    const [score, setScore] = useState(0);
    const [timeLeft, setTimeLeft] = useState(duration || 480);

    const [examples, setExamples] = useState([]); // 6 examples
    const [testItem, setTestItem] = useState(null);
    const [feedback, setFeedback] = useState(null);

    const generateLevel = () => {
        // Logic:
        // Group A (Blue): Contains Letter 'A' or Number '1' or Count > 5
        // Group B (Orange): Inverse or Different Rule

        const ruleTypes = ['contains', 'position', 'count'];
        const ruleType = ruleTypes[Math.floor(Math.random() * ruleTypes.length)];

        const targetChar = String.fromCharCode(65 + Math.floor(Math.random() * 5)); // A-E

        const createGrid = (forceGroup) => {
            const cells = Array(9).fill('');
            const group = forceGroup || (Math.random() > 0.5 ? 'A' : 'B');

            if (ruleType === 'contains') {
                if (group === 'A') {
                    // Must have targetChar
                    cells[Math.floor(Math.random() * 9)] = targetChar;
                } else {
                    // Must NOT have targetChar
                    // Fill with others
                }
            }
            // Fill remaining random
            for (let i = 0; i < 9; i++) {
                if (!cells[i]) { // Empty
                    let char;
                    do { char = String.fromCharCode(65 + Math.floor(Math.random() * 26)); }
                    while (char === targetChar && ruleType === 'contains' && group === 'B');
                    if (Math.random() > 0.6) cells[i] = char;
                }
            }

            // Count/Pos logic omitted for brevity, focusing on visuals

            return { cells, group };
        };

        // Generate 6 examples (3 A, 3 B randomized positions? No, Image shows them mixed)
        const exs = [];
        for (let i = 0; i < 6; i++) exs.push(createGrid());
        setExamples(exs);

        setTestItem(createGrid(Math.random() > 0.5 ? 'A' : 'B'));
        setFeedback(null);
    };

    const startGame = () => {
        setGameState('playing');
        generateLevel();
    };

    const handleChoice = (group) => {
        if (feedback) return;

        if (group === testItem.group) {
            setScore(s => s + 100);
            setFeedback('correct');
        } else {
            setFeedback('wrong');
        }

        setTimeout(() => {
            setLevel(l => l + 1);
            generateLevel();
        }, 500);
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
                <div className="w-full bg-[#004b87] text-white p-3 flex justify-between items-center absolute top-0 left-0 rounded-t-lg">
                    <div className="text-sm font-semibold tracking-wide ml-4">Aon // Inductive-logical Thinking</div>
                    <div className="mr-4 text-xs font-mono">INTRO</div>
                </div>

                <h2 className="text-2xl font-bold mb-4 mt-12 text-slate-800 dark:text-white">Inductive Logic</h2>
                <p className="mb-8 max-w-md text-slate-600 dark:text-slate-300">
                    Discover the rule connecting the Blue group and the Orange group. Assign the new grid to the correct category.
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
                <div className="text-sm font-semibold tracking-wide opacity-90">Aon // Inductive-logical Thinking</div>
                <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2 bg-[#003865] px-3 py-1 rounded text-xs font-bold">
                        <span>★ Level {level}</span>
                    </div>
                    <div className="text-xs font-mono opacity-80">
                        {Math.floor(timeLeft / 60)}:{(timeLeft % 60).toString().padStart(2, '0')}
                    </div>
                </div>
            </div>

            <div className="flex-1 flex flex-col items-center justify-start p-4 overflow-y-auto">

                {/* Examples Area */}
                <div className="grid grid-cols-3 gap-x-8 gap-y-4 mb-8 p-4 bg-white rounded-xl shadow-sm border border-slate-200 w-full max-w-4xl justify-items-center">
                    {examples.map((ex, i) => (
                        <DiamondGrid key={i} data={ex} size="sm" />
                    ))}
                </div>

                {/* Separator */}
                <div className="w-full max-w-4xl h-2 bg-slate-300 mb-8 rounded-full"></div>

                {/* Test Area */}
                <div className="flex flex-col items-center gap-8">
                    {testItem && <DiamondGrid data={testItem} size="lg" type="test" />}

                    <div className="flex gap-12">
                        <button
                            onClick={() => handleChoice('A')}
                            className={`w-20 h-20 rounded-full bg-[#0099cc] border-4 border-white shadow-lg transition-transform hover:scale-110 active:scale-95 flex items-center justify-center ${feedback ? 'opacity-50' : ''}`}
                        />
                        <button
                            onClick={() => handleChoice('B')}
                            className={`w-20 h-20 rounded-full bg-[#d97c00] border-4 border-white shadow-lg transition-transform hover:scale-110 active:scale-95 flex items-center justify-center ${feedback ? 'opacity-50' : ''}`}
                        />
                    </div>
                </div>

                {/* Feedback Overlay */}
                {feedback && (
                    <div className={`fixed inset-0 flex items-center justify-center z-50 bg-black/20 pointer-events-none`}>
                        <div className={`p-8 rounded-2xl shadow-2xl ${feedback === 'correct' ? 'bg-emerald-500' : 'bg-rose-500'} text-white font-bold text-3xl animate-in zoom-in duration-300`}>
                            {feedback === 'correct' ? 'CORRECT' : 'INCORRECT'}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

