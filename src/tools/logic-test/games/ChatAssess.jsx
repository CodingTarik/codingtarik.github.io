import React, { useState, useEffect, useRef } from 'react';
import { Send, User, MoreHorizontal } from 'lucide-react';

const SCENARIOS = [
  {
    id: 1,
    messages: [
      { sender: 'Manager', text: 'Hi! We have a critical bug in production. Customer data might be leaking.' },
      { sender: 'Manager', text: 'Sarah (Lead Dev) is on vacation. You are the only senior dev available.' },
      { sender: 'Manager', text: 'What should we do first?' }
    ],
    options: [
      { text: 'Shut down the server immediately to stop the leak.', score: 5, feedback: 'Correct. Safety first.' },
      { text: 'Try to reproduce the bug locally.', score: 2, feedback: 'Too slow given the risk.' },
      { text: 'Call Sarah on her vacation.', score: 1, feedback: 'Respect work-life balance unless absolute catastrophe.' },
      { text: 'Ignore it, it is probably a false alarm.', score: 0, feedback: 'Dangerous negligence.' }
    ]
  },
  {
    id: 2,
    messages: [
        { sender: 'Junior Dev', text: 'Hey, I am stuck on this Ticket #402. I have spent 4 hours on it.' },
        { sender: 'Junior Dev', text: 'I know you are busy with the deadline, but can you help?' }
    ],
    options: [
        { text: 'Guide them to resources/documentation so they learn.', score: 5, feedback: 'Good coaching approach.' },
        { text: 'Do it for them quickly to save time.', score: 2, feedback: 'Does not help them learn.' },
        { text: 'Tell them to figure it out themselves.', score: 0, feedback: 'Poor teamwork.' }
    ]
  },
  {
    id: 3,
    messages: [
        { sender: 'Product Owner', text: 'We need to add feature X before launch tomorrow.' },
        { sender: 'Product Owner', text: 'It was not in the scope, but the CEO wants it.' },
        { sender: 'Product Owner', text: 'It will likely introduce bugs because we cannot test it.' }
    ],
    options: [
        { text: 'Explain the risks clearly and suggest a post-launch patch.', score: 5, feedback: 'Professional risk management.' },
        { text: 'Refuse to do it.', score: 1, feedback: 'Could be seen as uncooperative.' },
        { text: 'Just do it and hope for the best.', score: 0, feedback: 'Unprofessional.' }
    ]
  }
];

export default function ChatAssess({ onComplete }) {
  const [currentScenarioIdx, setCurrentScenarioIdx] = useState(0);
  const [messages, setMessages] = useState([]);
  const [isTyping, setIsTyping] = useState(false);
  const [totalScore, setTotalScore] = useState(0);
  const [showOptions, setShowOptions] = useState(false);
  const messagesEndRef = useRef(null);

  const scenario = SCENARIOS[currentScenarioIdx];

  useEffect(() => {
    startScenario();
  }, [currentScenarioIdx]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [messages, isTyping]);

  const startScenario = async () => {
    setMessages([]);
    setShowOptions(false);
    
    for (let i = 0; i < scenario.messages.length; i++) {
        setIsTyping(true);
        await new Promise(r => setTimeout(r, 1000 + Math.random() * 500));
        setIsTyping(false);
        setMessages(prev => [...prev, { ...scenario.messages[i], type: 'incoming' }]);
    }
    setShowOptions(true);
  };

  const handleResponse = async (option) => {
    // Add user message
    setMessages(prev => [...prev, { sender: 'You', text: option.text, type: 'outgoing' }]);
    setShowOptions(false);
    
    // Update score
    setTotalScore(s => s + option.score);

    // Wait a bit
    await new Promise(r => setTimeout(r, 1000));

    if (currentScenarioIdx < SCENARIOS.length - 1) {
        setCurrentScenarioIdx(prev => prev + 1);
    } else {
        // Calculate final score based on max possible
        const max = SCENARIOS.reduce((acc, s) => acc + Math.max(...s.options.map(o => o.score)), 0);
        const finalScore = (totalScore + option.score); // Add current answer score
        onComplete(finalScore, max, { completed: true });
    }
  };

  return (
    <div className="flex flex-col h-[600px] max-w-2xl mx-auto bg-slate-50 dark:bg-slate-900 border-x border-slate-200 dark:border-slate-800">
      
      {/* Chat Header */}
      <div className="bg-white dark:bg-slate-800 p-4 border-b border-slate-200 dark:border-slate-700 flex items-center gap-3 sticky top-0 z-10">
        <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold">
            TE
        </div>
        <div>
            <h3 className="font-bold">Team Engineering</h3>
            <p className="text-xs text-green-500 flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span> Active now
            </p>
        </div>
      </div>

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((msg, i) => (
            <div 
                key={i} 
                className={`flex ${msg.type === 'outgoing' ? 'justify-end' : 'justify-start'}`}
            >
                {msg.type === 'incoming' && (
                    <div className="w-8 h-8 rounded-full bg-slate-200 dark:bg-slate-700 flex-shrink-0 flex items-center justify-center mr-2 text-xs font-bold">
                        {msg.sender[0]}
                    </div>
                )}
                <div 
                    className={`max-w-[70%] p-3 rounded-2xl text-sm ${
                        msg.type === 'outgoing' 
                        ? 'bg-blue-600 text-white rounded-tr-sm' 
                        : 'bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-tl-sm shadow-sm'
                    }`}
                >
                    {msg.type === 'incoming' && <p className="text-xs font-bold mb-1 opacity-50">{msg.sender}</p>}
                    {msg.text}
                </div>
            </div>
        ))}
        {isTyping && (
            <div className="flex justify-start">
                <div className="bg-slate-200 dark:bg-slate-800 p-3 rounded-full flex gap-1 items-center">
                    <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce"></span>
                    <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></span>
                    <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></span>
                </div>
            </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Area / Options */}
      <div className="bg-white dark:bg-slate-800 p-4 border-t border-slate-200 dark:border-slate-700">
        {showOptions ? (
            <div className="space-y-2 animate-in slide-in-from-bottom-4">
                <p className="text-xs font-bold text-slate-500 mb-2 uppercase">Choose your response:</p>
                {scenario.options.map((opt, i) => (
                    <button
                        key={i}
                        onClick={() => handleResponse(opt)}
                        className="w-full text-left p-3 rounded-lg border border-slate-200 dark:border-slate-700 hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:border-blue-300 transition-all text-sm group"
                    >
                        <span className="font-medium group-hover:text-blue-600 dark:group-hover:text-blue-400">{opt.text}</span>
                    </button>
                ))}
            </div>
        ) : (
            <div className="h-12 bg-slate-100 dark:bg-slate-900 rounded-lg flex items-center px-4 text-slate-400 text-sm">
                Wait for the conversation...
            </div>
        )}
      </div>
    </div>
  );
}

