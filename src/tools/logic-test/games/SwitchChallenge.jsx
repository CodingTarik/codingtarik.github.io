import React, { useState, useEffect, useRef } from 'react';
import { ArrowDown, RefreshCw, Play, RotateCw } from 'lucide-react';

// SVG Shapes
const ShapeCircle = ({ color }) => <circle cx="24" cy="24" r="14" fill={color} />;
const ShapeSquare = ({ color }) => <rect x="10" y="10" width="28" height="28" rx="4" fill={color} />;
const ShapeTriangle = ({ color }) => <polygon points="24,10 38,38 10,38" fill={color} />;
const ShapeCross = ({ color }) => (
    <path
        d="M18 10h12v8h8v12h-8v8h-12v-8h-8v-12h8z"
        fill={color}
        stroke={color}
        strokeWidth="2"
        strokeLinejoin="round"
    />
);

// Config
const SHAPES = [
    { id: 0, Component: ShapeCircle, name: 'circle' },
    { id: 1, Component: ShapeTriangle, name: 'triangle' },
    { id: 2, Component: ShapeSquare, name: 'square' },
    { id: 3, Component: ShapeCross, name: 'cross' }
];

// Reference colors from image: Green, Yellow, Red, Blue
const COLORS = [
    '#84cc16', // Lime/Green
    '#eab308', // Yellow
    '#ef4444', // Red
    '#0ea5e9', // Sky Blue
];

export default function SwitchChallenge({ onComplete, duration }) {
    const [gameState, setGameState] = useState('intro');
    const [timeLeft, setTimeLeft] = useState(duration);
    const [score, setScore] = useState(0);
    const [level, setLevel] = useState(1);

    // AON sx usually deals with positions 1..4
    // State: Array of indices pointing to SHAPES/COLORS
    // For simplicity, let's keep shapes fixed colors like the image?
    // Image shows: Green Circle, Yellow Triangle, Red Square, Blue Cross.
    // It seems the objects themselves are unique (Shape+Color combo is the identity).
    // So we just track the Permutation of the 4 items.

    const [initialSequence, setInitialSequence] = useState([]);
    const [operators, setOperators] = useState([]); // Array of permutations [ [3,2,1,0], ... ]
    const [options, setOptions] = useState([]);
    const [feedback, setFeedback] = useState(null);

    const startGame = () => {
        setGameState('playing');
        generatePuzzle();
    };

    const generatePuzzle = () => {
        // Items are always the distinct 4 items for this specific style?
        // Let's stick to the 4 distinct items as base for now to match the "identity" tracking.
        // 0: Green Circle, 1: Yellow Triangle, 2: Red Square, 3: Blue Cross
        const baseItems = [0, 1, 2, 3];

        // Initial state: Random permutation of base items
        const shuffledStart = [...baseItems].sort(() => Math.random() - 0.5);

        // Generate Operators (Permutations)
        // Level 1: 1 Operator
        // Level 2-3: 2 Operators
        // Level 4+: 3 Operators
        const numOps = Math.min(1 + Math.floor((level - 1) / 3), 3);

        const newOperators = [];
        for (let i = 0; i < numOps; i++) {
            // Generate a random permutation e.g. [1, 0, 3, 2] (swap pairs) or [3, 2, 1, 0] (reverse)
            // Avoid Identity [0,1,2,3]
            let p;
            do {
                p = [0, 1, 2, 3].sort(() => Math.random() - 0.5);
            } while (p.every((val, idx) => val === idx));
            newOperators.push(p);
        }

        // Calculate Goal
        // Apply operators sequentially
        // If op is [3, 2, 1, 0] it means:
        // Output[0] comes from Input[3]
        // Output[1] comes from Input[2]
        // ...
        // So newPos[i] = oldPos[op[i]]

        let current = [...shuffledStart];
        newOperators.forEach(op => {
            const next = Array(4).fill(0);
            for (let i = 0; i < 4; i++) {
                // op[i] tells us WHICH index from 'current' goes to index 'i' in 'next'
                // Wait, standard notation "4 3 2 1" usually means:
                // Position 1 takes the value that was at Position 4
                // Position 2 takes val at 3...
                // So yes: next[i] = current[op[i]] usually (using 0-based op values)

                // Let's verify standard notation. If I write "2 1 4 3" under 1 2 3 4
                // It usually means 1->2, 2->1, 3->4, 4->3 (Swap pairs).
                // So at pos 0 we want what was at pos 1.
                // map[0] = 1.

                // Let's use the mental model: "The item at position X moves to position Y"??
                // Or "Position X is now occupied by the item from Position Z"?

                // In AON: The numbers displayed "4 3 2 1" usually mean:
                // The 1st tube is connected to the 4th input.
                // The 2nd tube is connected to the 3rd input.
                // So: next[0] = current[3] (index 3 is "4")

                // If the operator display says "4 3 2 1" (using 1-based indexing)
                // It means Output Index 0 takes from Input Index 3.
                next[i] = current[op[i]];
            }
            current = next;
        });

        // Generate Options
        const correct = current;
        const choices = [correct];

        while (choices.length < 4) {
            // Random permutation
            const rnd = [...baseItems].sort(() => Math.random() - 0.5);
            if (!choices.some(c => JSON.stringify(c) === JSON.stringify(rnd))) {
                choices.push(rnd);
            }
        }

        setInitialSequence(shuffledStart);
        setOperators(newOperators);
        // Shuffle options visual order
        setOptions(choices.sort(() => Math.random() - 0.5));
        setFeedback(null);
    };

    // Timer
    useEffect(() => {
        if (gameState !== 'playing') return;
        if (timeLeft <= 0) {
            setGameState('finished');
            onComplete(score * 150, 3000, { level });
            return;
        }
        const t = setInterval(() => setTimeLeft(prev => prev - 1), 1000);
        return () => clearInterval(t);
    }, [timeLeft, gameState]);

    const handleChoice = (choice) => {
        if (feedback) return;

        // Verify
        let current = [...initialSequence];
        operators.forEach(op => {
            const next = Array(4).fill(0);
            for (let i = 0; i < 4; i++) {
                next[i] = current[op[i]];
            }
            current = next;
        });

        const isCorrect = JSON.stringify(choice) === JSON.stringify(current);

        if (isCorrect) {
            setScore(s => s + 1);
            setLevel(l => l + 1);
            setFeedback('correct');
        } else {
            setFeedback('wrong');
        }

        setTimeout(() => {
            generatePuzzle();
        }, 600);
    };

    const renderShape = (id, size = 48) => {
        // 0: Green Circle
        // 1: Yellow Triangle
        // 2: Red Square (Image has square as 3rd usually? matches red)
        // 3: Blue Cross

        const config = SHAPES[id]; // map id to shape type
        // Color map: 0->Green, 1->Yellow, 2->Red, 3->Blue
        // Let's hardcode the identity map from the image for consistency
        // The image shows: Green Circle, Yellow Triangle, Red Square, Blue Cross

        // If our id is 0..3, we map it directly to those combos

        let Color = COLORS[id];
        let Component = config.Component;

        return (
            <svg width={size} height={size} viewBox="0 0 48 48">
                <Component color={Color} />
            </svg>
        );
    };

    if (gameState === 'intro') {
        return (
            <div className="flex flex-col items-center justify-center h-full p-8 text-center bg-slate-50 dark:bg-slate-900 rounded-lg">
                <h2 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">Switch Challenge (sx)</h2>
                <div className="max-w-md text-left bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm mb-8">
                    <h3 className="font-bold mb-4 text-sm uppercase tracking-wider text-slate-500">Instructions</h3>
                    <p className="text-slate-600 dark:text-slate-300 mb-4">
                        Follow the path of the shapes through the permutation tubes. The numbers indicate which input position connects to which output position.
                    </p>
                    <div className="flex items-center gap-4 bg-slate-100 dark:bg-slate-700/50 p-2 rounded justify-center">
                        <span className="font-mono font-bold text-lg tracking-widest text-slate-700 dark:text-slate-200">4 3 2 1</span>
                        <span className="text-xs text-slate-400">= Reverse Order</span>
                    </div>
                </div>
                <button onClick={startGame} className="bg-slate-800 hover:bg-slate-700 text-white px-12 py-3.5 rounded-lg font-bold transition-all shadow-lg">
                    Start Test
                </button>
            </div>
        );
    }

    return (
        <div className="flex flex-col h-full bg-slate-50 dark:bg-slate-900 select-none items-center p-6">

            {/* HUD */}
            <div className="w-full max-w-2xl flex justify-between items-center mb-8 px-4">
                <div>
                    <div className="text-xs uppercase font-bold text-slate-400">Level</div>
                    <div className="text-xl font-bold text-slate-700 dark:text-slate-200">{level}</div>
                </div>

                <div className={`font-mono text-2xl font-bold ${timeLeft < 10 ? 'text-red-500' : 'text-slate-700 dark:text-slate-200'}`}>
                    00:{timeLeft.toString().padStart(2, '0')}
                </div>

                <div className="text-right">
                    <div className="text-xs uppercase font-bold text-slate-400">Score</div>
                    <div className="text-xl font-bold text-indigo-600 dark:text-indigo-400">{score}</div>
                </div>
            </div>

            {/* GAME AREA */}
            <div className="flex flex-col items-center gap-0 w-full max-w-lg">

                {/* INITIAL SEQUENCE */}
                <div className="flex gap-4 p-4 bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 mb-2">
                    {initialSequence.map((id, i) => (
                        <div key={i} className="w-16 h-16 bg-slate-100 dark:bg-slate-700 rounded-lg flex items-center justify-center shadow-inner">
                            {renderShape(id)}
                        </div>
                    ))}
                </div>

                {/* FUNNEL / PIPE SYSTEM */}
                <div className="flex flex-col items-center relative z-10">
                    {/* Top Funnel Cap */}
                    <div className="w-32 h-8 bg-slate-600 rounded-b-xl mb-4 relative flex justify-center items-center">
                        <div className="flex gap-2">
                            <div className="w-1.5 h-1.5 bg-slate-400 rounded-full"></div>
                            <div className="w-1.5 h-1.5 bg-slate-400 rounded-full"></div>
                            <div className="w-1.5 h-1.5 bg-slate-400 rounded-full"></div>
                        </div>
                    </div>

                    {/* Operators */}
                    <div className="flex flex-col gap-4 relative">
                        {/* Vertical Line through */}
                        <div className="absolute inset-0 flex justify-center -z-10">
                            <div className="w-2 bg-slate-200 dark:bg-slate-700 h-full"></div>
                        </div>

                        {operators.map((op, idx) => (
                            <div key={idx} className="bg-white dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-600 rounded-xl px-6 py-3 shadow-sm flex items-center justify-center min-w-[200px]">
                                <div className="font-mono text-2xl font-bold tracking-[0.5em] text-slate-700 dark:text-slate-200">
                                    {op.map(n => n + 1).join('')}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Bottom Funnel Cap */}
                    <div className="w-32 h-8 bg-slate-600 rounded-t-xl mt-4 relative flex justify-center items-center">
                        <div className="flex gap-2">
                            <div className="w-1.5 h-1.5 bg-slate-400 rounded-full"></div>
                            <div className="w-1.5 h-1.5 bg-slate-400 rounded-full"></div>
                            <div className="w-1.5 h-1.5 bg-slate-400 rounded-full"></div>
                        </div>
                    </div>
                </div>

                {/* OPTIONS */}
                <div className="grid grid-cols-2 gap-4 mt-8 w-full">
                    {options.map((opt, idx) => (
                        <button
                            key={idx}
                            onClick={() => handleChoice(opt)}
                            disabled={!!feedback}
                            className={`
                           p-4 rounded-xl flex justify-center gap-2 border-2 transition-all group
                           ${feedback
                                    ? 'border-slate-200 opacity-50'
                                    : 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-600 hover:border-indigo-400 hover:shadow-md'
                                }
                       `}
                        >
                            {opt.map((id, i) => (
                                <div key={i} className="w-12 h-12 bg-slate-100 dark:bg-slate-700 rounded-md flex items-center justify-center scale-90 group-hover:scale-100 transition-transform">
                                    {renderShape(id, 32)}
                                </div>
                            ))}
                        </button>
                    ))}
                </div>
            </div>

            {/* FEEDBACK OVERLAY */}
            {feedback && (
                <div className="absolute inset-0 z-50 flex items-center justify-center pointer-events-none">
                    <div className={`
                    px-8 py-4 rounded-full font-bold text-2xl shadow-2xl animate-in zoom-in duration-300
                    ${feedback === 'correct' ? 'bg-emerald-500 text-white' : 'bg-rose-500 text-white'}
                 `}>
                        {feedback === 'correct' ? 'CORRECT' : 'INCORRECT'}
                    </div>
                </div>
            )}

        </div>
    );
}

