import React, { useState, useEffect } from 'react';
import {
  Play, Clock, CheckCircle, Brain,
  LayoutGrid, MessageSquare, ArrowRight,
  BarChart, Shield, Terminal, Move, Calculator,
  User, Languages, Type
} from 'lucide-react';
import SwitchChallenge from './games/SwitchChallenge';
import GridChallenge from './games/GridChallenge';
import ChatAssess from './games/ChatAssess';
import MotionChallenge from './games/MotionChallenge';
import DigitChallenge from './games/DigitChallenge';
import ScalesCLS from './games/ScalesCLS';
import Adept15 from './games/Adept15';
import ScalesIT from './games/ScalesIT';
import ScalesVerbal from './games/ScalesVerbal';

// Configuration of available tests
const TESTS = [
  {
    id: 'switch',
    title: 'Switch Challenge (sx)',
    type: 'Deductive Reasoning',
    description: 'Analyze the sequence of operators to determine the final state of the symbols.',
    icon: <ArrowRight className="w-6 h-6" />,
    duration: 60,
    component: SwitchChallenge,
    status: 'active'
  },
  {
    id: 'grid',
    title: 'Grid Challenge',
    type: 'Working Memory',
    description: 'Memorize the pattern of dots and replicate it after a distraction task.',
    icon: <LayoutGrid className="w-6 h-6" />,
    duration: 60,
    component: GridChallenge,
    status: 'active'
  },
  {
    id: 'motion',
    title: 'Motion Challenge',
    type: 'Planning Capability',
    description: 'Move the objects to their target positions with the fewest moves possible.',
    icon: <Move className="w-6 h-6" />,
    duration: 60,
    component: MotionChallenge,
    status: 'active'
  },
  {
    id: 'digit',
    title: 'Digit Challenge (eql)',
    type: 'Numeracy',
    description: 'Solve the equation by finding the missing number.',
    icon: <Calculator className="w-6 h-6" />,
    duration: 60,
    component: DigitChallenge,
    status: 'active'
  },
  {
    id: 'scales_cls',
    title: 'Scales CLS',
    type: 'Inductive Logic',
    description: 'Discover the rules defining two categories and assign new items correctly.',
    icon: <Brain className="w-6 h-6" />,
    duration: 60,
    component: ScalesCLS,
    status: 'active'
  },
  {
    id: 'adept_15',
    title: 'Adept-15',
    type: 'Personality',
    description: 'Work-related behavioral style assessment.',
    icon: <User className="w-6 h-6" />,
    duration: 0,
    component: Adept15,
    status: 'active'
  },
  {
    id: 'chat',
    title: 'ChatAssess (SJT)',
    type: 'Situational Judgement',
    description: 'Respond to work-related scenarios in a simulated team chat environment.',
    icon: <MessageSquare className="w-6 h-6" />,
    duration: 90,
    component: ChatAssess,
    status: 'active'
  },
  {
    id: 'scales_it',
    title: 'Scales IT',
    type: 'English Proficiency',
    description: 'Test your English skills in an IT-specific context.',
    icon: <Languages className="w-6 h-6" />,
    duration: 0,
    component: ScalesIT,
    status: 'active'
  },
  {
    id: 'scales_verbal',
    title: 'Scales Verbal',
    type: 'Verbal Reasoning',
    description: 'Analyze complex text passages and answer true/false/cannot say.',
    icon: <Type className="w-6 h-6" />,
    duration: 0,
    component: ScalesVerbal,
    status: 'active'
  }
];

export default function LogicTest() {
  const [currentView, setCurrentView] = useState('lobby'); // lobby, test, result
  const [activeTestIndex, setActiveTestIndex] = useState(0);
  const [results, setResults] = useState({});
  const [totalScore, setTotalScore] = useState(0);

  const [practiceMode, setPracticeMode] = useState(false);

  // Filter only active tests for the actual run sequence
  const activeTests = TESTS.filter(t => t.status === 'active');

  const startAssessment = () => {
    setResults({});
    setActiveTestIndex(0);
    setPracticeMode(false);
    setCurrentView('test');
  };

  const startPractice = (index) => {
    // For practice, we find the index in the activeTests array that matches the clicked test
    // Actually, TESTS map index 'i' might not match activeTests index if some are inactive
    // But currently we map TESTS in lobby. 
    // Let's rely on finding the test in activeTests.
    const testId = TESTS[index].id;
    const activeIndex = activeTests.findIndex(t => t.id === testId);

    if (activeIndex !== -1) {
      setActiveTestIndex(activeIndex);
      setPracticeMode(true);
      setCurrentView('test');
    }
  };

  const handleTestComplete = (testId, score, maxScore, details) => {
    const newResults = {
      ...results,
      [testId]: { score, maxScore, details, timestamp: new Date() }
    };
    setResults(newResults);

    if (practiceMode) {
      // In practice mode, return to lobby after one test
      setCurrentView('result'); // Or lobby? User probably wants to see result of practice.
      // Let's show result but maybe adjust result view to show only that one?
      // Actually, let's just show the standard result view but with just that one result populated?
      // Or simpler: Go back to lobby with a toast/check? 
      // Let's go to 'result' view which handles partial results gracefully already (by mapping activeTests). 
      // Is it fine? Yes, effectively it shows "0%" for others.
      // Better: customized result title for practice.
      setTotalScore(score); // Just current score
      setCurrentView('result');
      return;
    }

    if (activeTestIndex < activeTests.length - 1) {
      setActiveTestIndex(prev => prev + 1);
    } else {
      // Calculate total score
      const total = Object.values(newResults).reduce((acc, r) => acc + r.score, 0);
      setTotalScore(total);
      setCurrentView('result');
    }
  };

  // Render the currently active test
  const ActiveTestComponent = activeTests[activeTestIndex]?.component;

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 font-sans">

      {/* Header */}
      <header className="bg-white dark:bg-slate-800 shadow-sm border-b border-slate-200 dark:border-slate-700 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-indigo-600 p-2 rounded-lg shadow-sm">
              <Shield className="w-5 h-5 text-white" />
            </div>
            <div>
              <h1 className="text-lg font-bold tracking-tight text-slate-800 dark:text-white">A.O.N. Assessment Suite</h1>
              <p className="text-[10px] uppercase tracking-wider text-slate-500 dark:text-slate-400 font-semibold">Candidate Evaluation Protocol</p>
            </div>
          </div>
          <div className="flex items-center gap-6 text-sm">
            <div className="hidden md:flex flex-col items-end">
              <span className="font-medium text-slate-700 dark:text-slate-200">Candidate ID: <span className="font-mono text-indigo-600 dark:text-indigo-400">8F2A-99X</span></span>
              <span className="text-xs text-slate-400">Session Active</span>
            </div>
            <div className="h-8 w-px bg-slate-200 dark:bg-slate-700 hidden md:block"></div>
            <div className="flex items-center gap-2 text-slate-500">
              <Clock className="w-4 h-4" />
              <span>{new Date().toLocaleDateString()}</span>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-8">

        {/* VIEW: LOBBY */}
        {currentView === 'lobby' && (
          <div className="space-y-8 animate-in fade-in slide-in-from-bottom-2 duration-500">

            {/* Context Card */}
            <div className="bg-white dark:bg-slate-800 rounded-xl p-8 shadow-sm border border-slate-200 dark:border-slate-700 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-5 pointer-events-none">
                <LayoutGrid className="w-64 h-64 text-indigo-900 dark:text-white" />
              </div>

              <div className="relative z-10 max-w-2xl">
                <h2 className="text-3xl font-bold mb-4 text-slate-900 dark:text-white">Assessment Center Welcome</h2>
                <div className="h-1 w-20 bg-indigo-500 mb-6 rounded-full"></div>
                <p className="text-lg text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                  You have been invited to complete a series of cognitive ability assessments. These modules are compliant with international psychometric standards and are designed to evaluate specific mental competencies required for the role.
                </p>
                <div className="bg-blue-50 dark:bg-blue-900/10 border-l-4 border-blue-500 p-4 rounded-r-lg mb-8">
                  <p className="text-sm text-blue-800 dark:text-blue-200 font-medium">
                    <strong>Instructions:</strong> Ensure you are in a quiet environment. Once a test begins, the timer cannot be paused. Completion of all modules is mandatory.
                  </p>
                </div>

                <div className="flex items-center gap-4">
                  <button
                    onClick={startAssessment}
                    className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-lg bg-indigo-600 px-8 font-medium text-white transition-all duration-300 hover:bg-indigo-700 hover:shadow-lg hover:shadow-indigo-500/20 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2"
                  >
                    <span className="mr-2">Start Assessment</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </button>
                  <div className="text-sm text-slate-500 font-medium px-4">
                    Est. Duration: <span className="text-slate-800 dark:text-slate-200">~15 Minutes</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Modules Grid */}
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500 mb-4 px-1">Assessment Modules</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {TESTS.map((test, i) => (
                  <div
                    key={test.id}
                    onClick={() => test.status === 'active' && startPractice(i)}
                    className={`bg-white dark:bg-slate-800 p-5 rounded-xl border transition-all relative overflow-hidden group
                      ${test.status === 'active'
                        ? 'border-slate-200 dark:border-slate-700 hover:border-indigo-400 dark:hover:border-indigo-500 hover:shadow-md cursor-pointer'
                        : 'border-slate-100 dark:border-slate-800 opacity-60 cursor-not-allowed'}
                    `}
                  >
                    {/* Status Dot */}
                    <div className={`absolute top-4 right-4 w-2 h-2 rounded-full ${test.status === 'active' ? 'bg-emerald-500' : 'bg-slate-300'}`}></div>

                    <div className="flex items-start gap-4 mb-3">
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 ${test.status === 'active' ? 'bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400' : 'bg-slate-100 text-slate-400'}`}>
                        {test.icon}
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 transition-colors">{test.title}</h4>
                        <span className="text-xs font-mono text-slate-500">{test.type}</span>
                      </div>
                    </div>

                    <p className="text-sm text-slate-500 dark:text-slate-400 line-clamp-2 mb-4 h-10 leading-snug">
                      {test.description}
                    </p>

                    <div className="flex items-center justify-between pt-3 border-t border-slate-100 dark:border-slate-700/50">
                      <span className="text-xs font-medium text-slate-400 flex items-center gap-1">
                        <Clock className="w-3 h-3" /> {test.duration > 0 ? `${test.duration}s` : 'Untimed'}
                      </span>
                      {test.status === 'active' && (
                        <span className="text-xs font-bold text-indigo-600 dark:text-indigo-400 opacity-0 group-hover:opacity-100 transition-opacity flex items-center">
                          Practice <ArrowRight className="w-3 h-3 ml-1" />
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* VIEW: TEST RUNNER */}
        {currentView === 'test' && activeTests[activeTestIndex] && (
          <div className="animate-in fade-in duration-300 max-w-4xl mx-auto">
            {/* Progress Header */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-2 text-sm font-medium">
                <span className="text-slate-600 dark:text-slate-300">Module {activeTestIndex + 1} of {activeTests.length}</span>
                <span className="text-indigo-600 dark:text-indigo-400">{activeTests[activeTestIndex].title}</span>
              </div>
              <div className="h-2 w-full bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                <div
                  className="h-full bg-indigo-600 transition-all duration-500 ease-out"
                  style={{ width: `${((activeTestIndex) / activeTests.length) * 100}%` }}
                ></div>
              </div>
            </div>

            <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg border border-slate-200 dark:border-slate-700 overflow-hidden min-h-[600px] flex flex-col">
              <ActiveTestComponent
                onComplete={(score, max, details) => handleTestComplete(activeTests[activeTestIndex].id, score, max, details)}
                duration={activeTests[activeTestIndex].duration}
              />
            </div>
          </div>
        )}

        {/* VIEW: RESULT */}
        {currentView === 'result' && (
          <div className="max-w-3xl mx-auto animate-in zoom-in-95 duration-500">
            <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-xl border border-slate-200 dark:border-slate-700">

              <div className="text-center mb-12 relative">
                <div className="absolute left-1/2 -translate-x-1/2 -top-16">
                  <div className="w-24 h-24 bg-emerald-500 rounded-full flex items-center justify-center border-8 border-slate-50 dark:border-slate-900 shadow-xl">
                    <CheckCircle className="w-10 h-10 text-white" />
                  </div>
                </div>
                <div className="mt-8">
                  <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                    {practiceMode ? 'Practice Module Complete' : 'Assessment Passed'}
                  </h2>
                  <p className="text-slate-500">
                    {practiceMode ? 'Session data recorded.' : 'Your profile has been updated.'}
                  </p>
                </div>
              </div>

              <div className="grid gap-4 mb-8">
                {activeTests.map((test) => {
                  const result = results[test.id];
                  const percentage = result ? Math.round((result.score / result.maxScore) * 100) : 0;

                  return (
                    <div key={test.id} className="group flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-700/30 rounded-lg border border-slate-100 dark:border-slate-700 hover:border-indigo-200 transition-colors">
                      <div className="flex items-center gap-4">
                        <div className="bg-white dark:bg-slate-800 p-2 rounded-md shadow-sm text-indigo-600 dark:text-indigo-400">
                          {test.icon}
                        </div>
                        <div>
                          <h4 className="font-bold text-sm text-slate-900 dark:text-white">{test.title}</h4>
                          <p className="text-xs text-slate-500">{test.type}</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-6">
                        <div className="flex flex-col items-end">
                          <span className="text-sm font-bold text-slate-700 dark:text-slate-200">{percentage}%</span>
                          <div className="w-24 h-1.5 bg-slate-200 dark:bg-slate-600 rounded-full overflow-hidden mt-1">
                            <div className="h-full bg-indigo-500" style={{ width: `${percentage}%` }}></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="bg-slate-900 text-slate-200 p-6 rounded-xl relative overflow-hidden">
                <div className="relative z-10">
                  <h3 className="font-bold flex items-center gap-2 mb-2 text-white">
                    <Brain className="w-4 h-4" /> Cognitive Profile Analysis
                  </h3>
                  <p className="text-sm leading-relaxed text-slate-300">
                    The candidate shows adequate performance in working memory and deductive reasoning tasks.
                    Response times indicate a methodical approach to problem solving.
                    Recommended for roles involving complex system analysis.
                  </p>
                </div>
                {/* Decorative Pattern */}
                <div className="absolute right-0 bottom-0 opacity-10">
                  <svg width="100" height="100" viewBox="0 0 100 100">
                    <circle cx="80" cy="80" r="40" fill="currentColor" />
                  </svg>
                </div>
              </div>

              <div className="mt-8 text-center">
                <button
                  onClick={() => setCurrentView('lobby')}
                  className="px-6 py-2 text-sm font-medium text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors"
                >
                  Return to Dashboard
                </button>
              </div>
            </div>
          </div>
        )}

      </main>
    </div>
  );
}

