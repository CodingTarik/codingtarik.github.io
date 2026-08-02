import React, { useState, useEffect } from 'react';
import { Check, X } from 'lucide-react';

export default function GridChallenge({ onComplete, duration }) {
    const [phase, setPhase] = useState('intro');
    const [level, setLevel] = useState(1);
    const [pattern, setPattern] = useState([]);
    const [userPattern, setUserPattern] = useState([]);
    const [gridSize, setGridSize] = useState(3); // AON image uses widely spaced dots, maybe larger grid but sparse?
    // Image 1: "gridChallenge". Grey bg. Grey dots. One dark dot.
    // We'll stick to a 4x4 or 5x5 concept but render visually as just 'dots' in space? 
    // Let's stick to grid for logic.

    const [score, setScore] = useState(0);
    const [distractorTask, setDistractorTask] = useState(null);
    const [timeLeft, setTimeLeft] = useState(duration);

    // AON Header Color
    const HEADER_COLOR = "#004b87";

    const getDifficulty = (lvl) => {
        // Scale up
        return { size: 5, dots: Math.min(3 + lvl, 9), distractSize: 4 };
    };

    const startLevel = () => {
        const config = getDifficulty(level);
        setGridSize(config.size);

        // Generate Pattern
        const newPattern = [];
        while (newPattern.length < config.dots) {
            const idx = Math.floor(Math.random() * (config.size * config.size));
            if (!newPattern.includes(idx)) newPattern.push(idx);
        }
        setPattern(newPattern);
        setUserPattern([]);
        setPhase('memorize');

        // Memorize Time
        setTimeout(() => {
            generateDistractor(config.distractSize);
        }, 2000);
    };

    const generateDistractor = (size) => {
        // AON Image 2: "Is it symmetrical?"
        // Split vertical line. Square blocks.
        // 4x4 on each side? Or one 8x8 split?
        // Image shows a roughly 6x6 grid split in half.
        // Left side: Random squares. Right side: Mirror or not.

        const rows = 6;
        const cols = 6; // Split at 3
        const isSymmetric = Math.random() > 0.5;

        // Generate Left Side
        const leftSide = []; // Coordinates
        for (let r = 0; r < rows; r++) {
            for (let c = 0; c < cols / 2; c++) {
                if (Math.random() > 0.6) {
                    leftSide.push({ r, c });
                }
            }
        }

        // Generate Right Side
        let rightSide = [];
        if (isSymmetric) {
            rightSide = leftSide.map(p => ({
                r: p.r,
                c: cols - 1 - p.c
            }));
        } else {
            // Random Right Side or Perturbed Mirror
            // Let's do perturbed mirror for difficulty
            const tempMap = leftSide.map(p => ({
                r: p.r,
                c: cols - 1 - p.c
            }));

            // Move one block
            if (tempMap.length > 0) {
                tempMap[0].r = (tempMap[0].r + 1) % rows;
            } else {
                tempMap.push({ r: 0, c: cols - 1 });
            }
            rightSide = tempMap;
        }

        const allBlocks = [...leftSide, ...rightSide];

        setDistractorTask({ blocks: allBlocks, isSymmetric, rows, cols });
        setPhase('distract');
    };

    const handleDistractor = (answer) => {
        if (answer === distractorTask.isSymmetric) {
            setPhase('recall');
        } else {
            // AON usually doesn't fail you immediately, just affects score?
            // Let's proceed to recall
            setPhase('recall');
        }
    };

    const handleCellClick = (index) => {
        if (phase !== 'recall') return;

        const newPattern = userPattern.includes(index)
            ? userPattern.filter(i => i !== index)
            : [...userPattern, index];

        setUserPattern(newPattern);

        if (newPattern.length === pattern.length) {
            setTimeout(() => checkResult(newPattern), 200);
        }
    };

    const checkResult = (attempt) => {
        const p1 = [...pattern].sort();
        const p2 = [...attempt].sort();

        if (JSON.stringify(p1) === JSON.stringify(p2)) {
            setScore(s => s + 100);
            setLevel(l => l + 1);
            setTimeout(startLevel, 500);
        } else {
            // Retry or Fail? AON: usually continues but simpler? 
            // Let's restart level
            setTimeout(startLevel, 500);
        }
    };

    useEffect(() => {
        if (phase !== 'intro' && timeLeft > 0) {
            const t = setInterval(() => setTimeLeft(prev => prev - 1), 1000);
            return () => clearInterval(t);
        } else if (timeLeft <= 0 && phase !== 'intro') {
            onComplete(score, 1000, { level });
        }
    }, [timeLeft, phase]);


    if (phase === 'intro') {
        return (
            <div className="flex flex-col items-center justify-center h-full p-8 text-center bg-white dark:bg-slate-900 rounded-lg relative overflow-hidden">
                {/* AON Header */}
                <div className="w-full bg-[#004b87] text-white p-3 flex justify-between items-center absolute top-0 left-0 rounded-t-lg">
                    <div className="text-sm font-semibold tracking-wide ml-4">Aon // gridChallenge</div>
                    <div className="mr-4 text-xs font-mono">INTRO</div>
                </div>

                <h2 className="text-2xl font-bold mb-4 mt-12 text-slate-800 dark:text-white">Grid Challenge</h2>
                <p className="mb-8 max-w-md text-slate-600 dark:text-slate-300">
                    Memorize the dot pattern. Solve the symmetry puzzle. Recall the pattern.
                </p>
                <button onClick={startLevel} className="bg-[#004b87] hover:bg-[#003865] text-white px-12 py-3 rounded text-sm font-bold uppercase tracking-wider transition-all shadow-md">
                    Start Level 1
                </button>
            </div>
        );
    }

    return (
        <div className="flex flex-col h-full bg-slate-50 relative">
            {/* AON Header */}
            <div className="w-full bg-[#004b87] text-white h-12 flex justify-between items-center px-6 shadow-md z-10 shrink-0">
                <div className="text-sm font-semibold tracking-wide opacity-90">Aon // gridChallenge</div>
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

            <div className="flex-1 flex flex-col items-center justify-center p-4 bg-[#e5e5e5]">

                {phase === 'distract' ? (
                    <div className="flex flex-col items-center animate-in zoom-in duration-300">
                        <h3 className="text-xl text-slate-600 mb-6 font-medium">Is it symmetrical?</h3>

                        {/* Symmetry Grid */}
                        <div className="relative bg-[#eeeeee] p-8 rounded shadow-sm mb-8">
                            {/* Divider Line */}
                            <div className="absolute left-1/2 top-4 bottom-4 w-px bg-slate-400"></div>

                            <div
                                className="grid gap-2"
                                style={{
                                    gridTemplateColumns: `repeat(${distractorTask.cols}, 32px)`,
                                    gridTemplateRows: `repeat(${distractorTask.rows}, 32px)`,
                                }}
                            >
                                {Array(distractorTask.rows * distractorTask.cols).fill(0).map((_, i) => {
                                    const r = Math.floor(i / distractorTask.cols);
                                    const c = i % distractorTask.cols;
                                    const isBlock = distractorTask.blocks.some(b => b.r === r && b.c === c);

                                    // Gap in middle? No, line is enough.
                                    return (
                                        <div
                                            key={i}
                                            className={`w-full h-full rounded-sm ${isBlock ? 'bg-slate-600' : ''}`} // Blocks are dark grey squares
                                        />
                                    );
                                })}
                            </div>
                        </div>

                        <div className="flex gap-4 w-64">
                            <button onClick={() => handleDistractor(true)} className="flex-1 bg-[#285f8f] hover:bg-[#1f4a70] text-white py-3 rounded text-sm font-bold uppercase shadow-sm">
                                Yes
                            </button>
                            <button onClick={() => handleDistractor(false)} className="flex-1 bg-[#285f8f] hover:bg-[#1f4a70] text-white py-3 rounded text-sm font-bold uppercase shadow-sm">
                                No
                            </button>
                        </div>
                    </div>
                ) : (
                    <div className="flex flex-col items-center w-full max-w-2xl relative">
                        {/* Instructions Overlay if Recalling? No, clean like image */}

                        {/* Grid Container */}
                        <div
                            className="relative bg-[#e5e5e5] p-4" // Image shows light grey background, no border?
                            style={{
                                width: 'min(90vw, 500px)',
                                aspectRatio: '2/1' // Wide like image
                            }}
                        >
                            {/* We need to distribute dots in a 'wide' space. 
                             Let's just map the 5x5 logical grid to the wide space strictly?
                             Or use flex/absolute positioning?
                             Let's use a wide grid.
                         */}
                            <div
                                className="grid w-full h-full"
                                style={{
                                    gridTemplateColumns: `repeat(${gridSize}, 1fr)`,
                                }}
                            >
                                {Array(gridSize * gridSize).fill(0).map((_, i) => {
                                    const isActive = phase === 'memorize' && pattern.includes(i);
                                    const isSelected = phase === 'recall' && userPattern.includes(i);
                                    const showDot = isActive || isSelected;

                                    return (
                                        <div
                                            key={i}
                                            onClick={() => handleCellClick(i)}
                                            className="flex items-center justify-center cursor-pointer"
                                        >
                                            <div
                                                className={`
                                                message-transition rounded-full transition-all duration-300
                                                ${showDot ? (phase === 'memorize' ? 'w-8 h-8 bg-slate-500' : 'w-8 h-8 bg-slate-700') : 'w-4 h-4 bg-slate-300 opacity-50'} 
                                            `}
                                            />
                                            {/* Image 1 shows some large grey dots (active) and maybe no inactive dots? 
                                            Actually Image 1 shows ONLY grey dots. 
                                            It seems like a random scatter.
                                            Let's stick to showing inactive dots as faint markers for implementation usability.
                                        */}
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

