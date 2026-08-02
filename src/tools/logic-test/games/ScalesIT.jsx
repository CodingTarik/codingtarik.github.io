import React, { useState } from 'react';
import { Languages, Check, X } from 'lucide-react';

const QUESTIONS = [
    {
        q: "Which protocol is primarily used for secure communication over a computer network?",
        options: ["HTTP", "FTP", "HTTPS", "SMTP"],
        correct: 2
    },
    {
        q: "In Object-Oriented Programming, 'inheritance' allows a class to _______ properties from another class.",
        options: ["hide", "delete", "acquire", "distribute"],
        correct: 2
    },
    {
        q: "A function that calls itself is known as a _______ function.",
        options: ["recursive", "looping", "circular", "repeating"],
        correct: 0
    },
    {
        q: "SQL injection is a code injection technique used to _______ data-driven applications.",
        options: ["optimize", "attack", "debug", "compile"],
        correct: 1
    },
    {
        q: "The process of converting readable data into unreadable characters to prevent unauthorized access is called _______.",
        options: ["decryption", "hashing", "encryption", "zipping"],
        correct: 2
    }
];

export default function ScalesIT({ onComplete }) {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState(null);
  const [feedback, setFeedback] = useState(null);

  const handleOption = (idx) => {
      if (selected !== null) return;
      setSelected(idx);
      
      const isCorrect = idx === QUESTIONS[currentIdx].correct;
      if (isCorrect) setScore(s => s + 1);
      setFeedback(isCorrect ? 'correct' : 'wrong');

      setTimeout(() => {
          if (currentIdx < QUESTIONS.length - 1) {
              setCurrentIdx(prev => prev + 1);
              setSelected(null);
              setFeedback(null);
          } else {
              onComplete((score + (isCorrect ? 1 : 0)) * 20, 100, { level: 'Advanced' });
          }
      }, 1000);
  };

  const q = QUESTIONS[currentIdx];

  return (
    <div className="flex flex-col h-full max-w-2xl mx-auto p-8 justify-center">
        <div className="flex justify-between items-center mb-8">
            <h2 className="text-xl font-bold flex items-center gap-2">
                <Languages className="text-blue-600"/> Scales IT
            </h2>
            <div className="text-slate-500 font-mono">
                {currentIdx + 1}/{QUESTIONS.length}
            </div>
        </div>

        <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-md border border-slate-200 dark:border-slate-700 min-h-[300px] flex flex-col">
            <h3 className="text-xl font-medium mb-8 leading-relaxed text-slate-800 dark:text-slate-100">
                {q.q}
            </h3>

            <div className="grid gap-3">
                {q.options.map((opt, i) => {
                    let statusClass = "border-slate-200 hover:bg-slate-50 dark:border-slate-600 dark:hover:bg-slate-700";
                    if (selected !== null) {
                        if (i === q.correct) statusClass = "bg-green-100 border-green-500 text-green-800 dark:bg-green-900/30 dark:border-green-500 dark:text-green-300";
                        else if (i === selected) statusClass = "bg-red-100 border-red-500 text-red-800 dark:bg-red-900/30 dark:border-red-500 dark:text-red-300";
                        else statusClass = "opacity-50";
                    }

                    return (
                        <button
                            key={i}
                            onClick={() => handleOption(i)}
                            disabled={selected !== null}
                            className={`text-left p-4 rounded-xl border-2 font-medium transition-all ${statusClass} flex justify-between items-center`}
                        >
                            {opt}
                            {selected !== null && i === q.correct && <Check size={20}/>}
                            {selected !== null && i === selected && i !== q.correct && <X size={20}/>}
                        </button>
                    );
                })}
            </div>
        </div>
    </div>
  );
}

