import React, { useState, useEffect } from 'react';
import { ArrowUp, ArrowDown, ArrowLeft, ArrowRight, Play, SkipForward } from 'lucide-react';

export default function MotionChallenge({ onComplete, duration }) {
    const [gameState, setGameState] = useState('intro');
    const [level, setLevel] = useState(1);
    const [moves, setMoves] = useState(0);
    const [grid, setGrid] = useState([]); // 5x5 or similar
    const [playerPos, setPlayerPos] = useState({ r: 0, c: 0 });
    const [score, setScore] = useState(0);
    const [timeLeft, setTimeLeft] = useState(duration || 360);

    // AON Colors
    const COLORS = {
        wall: ['bg-emerald-500', 'bg-purple-600'], // Green and Purple obstacles
        player: 'bg-black',
        target: 'bg-red-500',
        empty: 'bg-slate-100'
    };

    const generateLevel = () => {
        // 4x6 grid based on image (tall rectangle)
        const rows = 6;
        const cols = 4;

        const newGrid = Array(rows).fill().map(() => Array(cols).fill(0));

        // Generate Path
        let r = rows - 1;
        let c = Math.floor(cols / 2); // Start bottom center
        const startPos = { r, c };

        newGrid[r][c] = 'start'; // Logically start

        // Random walk to find goal
        let curr = { r, c };
        let steps = 0;
        while (steps < 8 || curr.r > 1) { // Force some length/height
            const moves = [[0, 1], [0, -1], [-1, 0]]; // Bias upwards
            const move = moves[Math.floor(Math.random() * moves.length)];
            const nr = curr.r + move[0];
            const nc = curr.c + move[1];

            if (nr >= 0 && nr < rows && nc >= 0 && nc < cols) {
                curr = { r: nr, c: nc };
                steps++;
            }
        }

        newGrid[curr.r][curr.c] = 'goal';
        const goalPos = { r: curr.r, c: curr.c };

        // Fill random walls (Green/Purple blocks)
        // Some blocks are 1x2 or 1x1
        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < cols; j++) {
                if ((i === startPos.r && j === startPos.c) || (i === goalPos.r && j === goalPos.c)) continue;

                if (Math.random() > 0.7) {
                    const color = Math.random() > 0.5 ? 1 : 2; // 1=Green, 2=Purple
                    newGrid[i][j] = color;
                }
            }
        }

        setGrid(newGrid);
        setPlayerPos(startPos);
        setMoves(0);
    };

    const startGame = () => {
        setGameState('playing');
        generateLevel();
    };

    const movePlayer = (dr, dc) => {
        const nr = playerPos.r + dr;
        const nc = playerPos.c + dc;

        if (nr >= 0 && nr < grid.length && nc >= 0 && nc < grid[0].length) {
            const cell = grid[nr][nc];
            if (cell === 1 || cell === 2) return; // Wall

            setPlayerPos({ r: nr, c: nc });
            setMoves(m => m + 1);

            if (cell === 'goal') {
                handleGoal();
            }
        }
    };

    const handleGoal = () => {
        setScore(s => s + 100);
        setLevel(l => l + 1);
        setTimeout(generateLevel, 200);
    };

    useEffect(() => {
        if (gameState === 'playing' && timeLeft > 0) {
            const t = setInterval(() => setTimeLeft(prev => prev - 1), 1000);
            return () => clearInterval(t);
        } else if (timeLeft <= 0 && gameState === 'playing') {
            onComplete(score, 1000, { level });
        }
    }, [timeLeft, gameState]);

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (gameState !== 'playing') return;
            if (e.key === 'ArrowUp') movePlayer(-1, 0);
            if (e.key === 'ArrowDown') movePlayer(1, 0);
            if (e.key === 'ArrowLeft') movePlayer(0, -1);
            if (e.key === 'ArrowRight') movePlayer(0, 1);
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [playerPos, gameState]);

    if (gameState === 'intro') {
        return (
            <div className="flex flex-col items-center justify-center h-full p-8 text-center bg-white dark:bg-slate-900 rounded-lg">
                {/* AON Header Style Clone */}
                <div className="w-full bg-[#004b87] text-white p-3 flex justify-between items-center absolute top-0 left-0 rounded-t-lg">
                    <div className="text-sm font-semibold tracking-wide ml-4">Aon // motionChallenge</div>
                    <div className="mr-4 text-xs font-mono">INTRO</div>
                </div>

                <h2 className="text-2xl font-bold mb-4 mt-12 text-slate-800 dark:text-white">Motion Challenge</h2>
                <p className="mb-8 max-w-md text-slate-600 dark:text-slate-300">
                    Move the black dot to the red target. Avoid the green and purple obstacles.
                </p>
                <button onClick={startGame} className="bg-[#004b87] hover:bg-[#003865] text-white px-12 py-3 rounded text-sm font-bold uppercase tracking-wider transition-all shadow-md">
                    Start Level 1
                </button>
            </div>
        );
    }

    return (
        <div className="flex flex-col h-full bg-slate-50 relative overflow-hidden">
            {/* AON Header */}
            <div className="w-full bg-[#004b87] text-white h-12 flex justify-between items-center px-6 shadow-md z-10 shrink-0">
                <div className="text-sm font-semibold tracking-wide opacity-90">Aon // motionChallenge</div>
                <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2 bg-[#003865] px-3 py-1 rounded text-xs font-bold">
                        <span>★ Level {level}</span>
                    </div>
                    <div className="text-xs font-mono opacity-80">
                        {Math.floor(timeLeft / 60)}:{(timeLeft % 60).toString().padStart(2, '0')}
                    </div>
                </div>
            </div>

            {/* Progress Bar (Mock) */}
            <div className="w-full h-1.5 bg-slate-200">
                <div className="h-full bg-slate-400" style={{ width: `${(timeLeft / duration) * 100}%` }}></div>
            </div>

            <div className="flex-1 flex flex-col items-center justify-center p-4">

                {/* Grid Container */}
                <div className="bg-white p-1 shadow-sm border border-slate-200" style={{ width: 'min(90vw, 300px)' }}>
                    <div
                        className="grid gap-[2px] bg-slate-200"
                        style={{
                            gridTemplateColumns: `repeat(${grid[0]?.length || 4}, 1fr)`,
                            aspectRatio: '2/3'
                        }}
                    >
                        {grid.map((row, r) => row.map((cell, c) => {
                            const isPlayer = r === playerPos.r && c === playerPos.c;
                            return (
                                <div
                                    key={`${r}-${c}`}
                                    className={`
                                    relative w-full h-full bg-slate-100 flex items-center justify-center
                                    ${cell === 1 ? 'bg-emerald-500 rounded-sm' : ''}
                                    ${cell === 2 ? 'bg-purple-600 rounded-sm' : ''}
                                `}
                                >
                                    {cell === 'goal' && (
                                        <div className="w-4/5 h-4/5 bg-red-500 rounded-full shadow-sm"></div>
                                    )}
                                    {isPlayer && (
                                        <div className="absolute inset-0 flex items-center justify-center z-10">
                                            <div className="w-4/5 h-4/5 bg-black rounded-full shadow-lg transition-all duration-200"></div>
                                        </div>
                                    )}
                                </div>
                            );
                        }))}
                    </div>
                </div>

                {/* Controls mockup */}
                <div className="flex gap-4 mt-8">
                    <div className="bg-[#004b87] text-white w-12 h-10 rounded flex items-center justify-center font-bold text-sm shadow-md">
                        {moves}
                    </div>
                    <button
                        onClick={generateLevel}
                        className="bg-[#004b87] hover:bg-[#003865] text-white px-6 h-10 rounded flex items-center gap-2 text-sm font-bold shadow-md transition-all"
                    >
                        Skip <SkipForward size={14} fill="currentColor" />
                    </button>
                </div>

            </div>
        </div>
    );
}

