import React, { useState } from 'react';
import { Type, FileText, Mail, Info } from 'lucide-react';

const DATA = [
    {
        tabs: [
            { id: 'email', title: 'Email', icon: <Mail size={16}/>, content: "From: CEO\nTo: All Staff\nSubject: Remote Work Policy\n\nEffective next month, we are moving to a hybrid model. Employees must be in the office at least 3 days a week. Exceptions can be granted by HR for medical reasons." },
            { id: 'policy', title: 'Policy Doc', icon: <FileText size={16}/>, content: "Appendix A: Remote Work\n\nCore hours are 10:00 to 15:00. Employees are expected to be available during these times regardless of location." }
        ],
        statements: [
            { text: "Employees can choose any 2 days to work remotely.", answer: "True" },
            { text: "The new policy starts next week.", answer: "False" }, // "next month"
            { text: "HR can grant exceptions for travel reasons.", answer: "Cannot Say" } // "medical reasons" stated, travel not mentioned
        ]
    },
    {
        tabs: [
            { id: 'report', title: 'Q3 Report', icon: <Info size={16}/>, content: "Q3 revenue increased by 15% compared to Q2. However, operational costs rose by 20% due to supply chain issues. Net profit margin decreased slightly." },
        ],
        statements: [
            { text: "The company made less money in Q3 than Q2.", answer: "False" }, // Revenue increased
            { text: "Supply chain issues caused cost increases.", answer: "True" },
            { text: "Q4 will be better.", answer: "Cannot Say" }
        ]
    }
];

export default function ScalesVerbal({ onComplete }) {
  const [caseIdx, setCaseIdx] = useState(0);
  const [statementIdx, setStatementIdx] = useState(0);
  const [activeTab, setActiveTab] = useState(0);
  const [score, setScore] = useState(0);
  const [feedback, setFeedback] = useState(null);

  const currentCase = DATA[caseIdx];
  const currentStatement = currentCase.statements[statementIdx];

  const handleAnswer = (ans) => {
      if (feedback) return;
      
      const isCorrect = ans === currentStatement.answer;
      if (isCorrect) setScore(s => s + 1);
      setFeedback(isCorrect ? 'correct' : 'wrong');

      setTimeout(() => {
          setFeedback(null);
          // Next Statement or Next Case
          if (statementIdx < currentCase.statements.length - 1) {
              setStatementIdx(prev => prev + 1);
          } else if (caseIdx < DATA.length - 1) {
              setCaseIdx(prev => prev + 1);
              setStatementIdx(0);
              setActiveTab(0);
          } else {
              onComplete(score * 10, 100, { level: 'Standard' });
          }
      }, 800);
  };

  return (
    <div className="flex flex-col h-full p-4 gap-6">
        {/* Tabs */}
        <div className="flex gap-2 border-b border-slate-200 dark:border-slate-700">
            {currentCase.tabs.map((tab, i) => (
                <button
                    key={tab.id}
                    onClick={() => setActiveTab(i)}
                    className={`flex items-center gap-2 px-4 py-3 text-sm font-medium rounded-t-lg transition-colors
                        ${activeTab === i 
                            ? 'bg-blue-600 text-white' 
                            : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700'}
                    `}
                >
                    {tab.icon} {tab.title}
                </button>
            ))}
        </div>

        {/* Content */}
        <div className="flex-1 bg-white dark:bg-slate-800 p-6 rounded-lg shadow-inner border border-slate-200 dark:border-slate-700 overflow-y-auto font-serif leading-relaxed whitespace-pre-wrap text-slate-800 dark:text-slate-200">
            {currentCase.tabs[activeTab].content}
        </div>

        {/* Statement & Answers */}
        <div className="bg-slate-50 dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800">
            <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Statement:</p>
            <h3 className="text-lg font-bold mb-6 min-h-[3rem]">{currentStatement.text}</h3>

            <div className="grid grid-cols-3 gap-4">
                {['True', 'False', 'Cannot Say'].map(opt => {
                    let btnClass = "bg-white dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-700 hover:border-blue-400 dark:hover:border-blue-500";
                    if (feedback) {
                        if (opt === currentStatement.answer) btnClass = "bg-green-100 border-green-500 text-green-800";
                        else if (opt !== currentStatement.answer && feedback === 'wrong') btnClass = "opacity-50"; 
                    }

                    return (
                        <button
                            key={opt}
                            onClick={() => handleAnswer(opt)}
                            className={`p-3 rounded-lg font-bold transition-all ${btnClass}`}
                        >
                            {opt}
                        </button>
                    );
                })}
            </div>
        </div>
    </div>
  );
}

