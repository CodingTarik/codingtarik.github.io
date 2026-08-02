import React, { useState, useEffect, useRef } from 'react';
import { CheckCircle, Circle, ChevronDown, ChevronUp, Map as MapIcon, Trophy, Lock, Unlock, Award, ArrowRight, CheckSquare, Square, Info, Maximize2, Minimize2, BookOpen, Video, FileText, Edit3, X } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';

const HoverTooltip = ({ content, children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  
  const handleMouseMove = (e) => {
    setPosition({ x: e.clientX, y: e.clientY });
  };

  return (
    <div 
      className="relative inline-block"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
      onMouseMove={handleMouseMove}
    >
      {children}
      <AnimatePresence>
        {isVisible && content && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="fixed z-50 pointer-events-none bg-white dark:bg-stone-800 rounded-lg shadow-2xl p-2 border border-stone-200 dark:border-stone-700 max-w-xs"
            style={{ 
              top: position.y + 20, 
              left: Math.min(position.x - 100, window.innerWidth - 340) // Prevent overflow
            }}
          >
            {content.type === 'image' && (
              <img src={content.url} alt={content.alt} className="w-full h-auto rounded-md" />
            )}
            {content.type === 'gif' && (
              <img src={content.url} alt={content.alt} className="w-full h-auto rounded-md" />
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const TopicNotes = ({ topicKey, buddyId }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [note, setNote] = useState('');
  const storageKey = `${buddyId}_note_${topicKey}`;

  useEffect(() => {
    const savedNote = localStorage.getItem(storageKey);
    if (savedNote) setNote(savedNote);
  }, [storageKey]);

  const handleSave = (newNote) => {
    setNote(newNote);
    localStorage.setItem(storageKey, newNote);
  };

  return (
    <div className="mt-2">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1 text-xs text-stone-500 hover:text-stone-800 dark:hover:text-stone-200 transition-colors"
      >
        <Edit3 size={12} />
        {note ? 'Edit Note' : 'Add Note'}
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="mt-2 overflow-hidden"
          >
            <textarea
              value={note}
              onChange={(e) => handleSave(e.target.value)}
              placeholder="My personal notes for this topic..."
              className="w-full p-2 text-sm border rounded-md bg-yellow-50 dark:bg-yellow-900/20 border-yellow-200 dark:border-yellow-700/30 focus:outline-none focus:ring-1 focus:ring-yellow-400 text-stone-700 dark:text-stone-300"
              rows={3}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const TopicTasks = ({ tasks, topicKey, buddyId }) => {
  const [completedTasks, setCompletedTasks] = useState({});
  const storageKey = `${buddyId}_tasks_${topicKey}`;

  useEffect(() => {
    const savedTasks = localStorage.getItem(storageKey);
    if (savedTasks) setCompletedTasks(JSON.parse(savedTasks));
  }, [storageKey]);

  const toggleTask = (index) => {
    const newState = { ...completedTasks, [index]: !completedTasks[index] };
    setCompletedTasks(newState);
    localStorage.setItem(storageKey, JSON.stringify(newState));
  };

  if (!tasks || tasks.length === 0) return null;

  return (
    <div className="mt-3 pl-1 border-l-2 border-stone-200 dark:border-stone-700 ml-1">
      <h5 className="text-xs font-bold uppercase text-stone-500 mb-2 ml-2">Practice Tasks</h5>
      <div className="space-y-2">
        {tasks.map((task, index) => (
          <div key={index} className="flex items-start gap-2 ml-2">
            <button
              onClick={() => toggleTask(index)}
              className={`mt-0.5 w-4 h-4 rounded border flex items-center justify-center flex-shrink-0 transition-colors ${
                completedTasks[index] 
                  ? 'bg-emerald-500 border-emerald-500 text-white' 
                  : 'border-stone-300 dark:border-stone-600'
              }`}
            >
              {completedTasks[index] && <CheckCircle size={10} />}
            </button>
            <span className={`text-sm ${completedTasks[index] ? 'text-stone-400 line-through' : 'text-stone-600 dark:text-stone-300'}`}>
              {task}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

const SkillPath = ({ title, description, phases, buddyTheme, buddyId }) => {
  const { isDarkMode } = useTheme();
  const [expandedPhases, setExpandedPhases] = useState({});
  const [expandedModules, setExpandedModules] = useState({});
  const [expandedTopics, setExpandedTopics] = useState({});
  const [completedTopics, setCompletedTopics] = useState({});
  const [isAllExpanded, setIsAllExpanded] = useState(false);

  // Initialize tracking from localStorage
  useEffect(() => {
    const savedProgress = localStorage.getItem(`${buddyId}_skillpath_progress`);
    if (savedProgress) {
      setCompletedTopics(JSON.parse(savedProgress));
    }
  }, [buddyId]);

  // Save tracking to localStorage
  useEffect(() => {
    if (Object.keys(completedTopics).length > 0) {
      localStorage.setItem(`${buddyId}_skillpath_progress`, JSON.stringify(completedTopics));
    }
  }, [completedTopics, buddyId]);

  const toggleAll = () => {
    const newState = !isAllExpanded;
    setIsAllExpanded(newState);

    if (newState) {
      const allPhases = {};
      const allModules = {};
      const allTopics = {};

      phases.forEach((phase, pIndex) => {
        allPhases[pIndex] = true;
        phase.modules.forEach((module, mIndex) => {
          allModules[`${pIndex}-${mIndex}`] = true;
          module.topics.forEach((topic, tIndex) => {
            if (typeof topic === 'object') {
              allTopics[`${pIndex}-${mIndex}-${tIndex}`] = true;
            }
          });
        });
      });

      setExpandedPhases(allPhases);
      setExpandedModules(allModules);
      setExpandedTopics(allTopics);
    } else {
      setExpandedPhases({});
      setExpandedModules({});
      setExpandedTopics({});
    }
  };

  const togglePhase = (index) => {
    setExpandedPhases(prev => ({ ...prev, [index]: !prev[index] }));
  };

  const toggleModule = (phaseIndex, moduleIndex) => {
    const key = `${phaseIndex}-${moduleIndex}`;
    setExpandedModules(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const toggleTopicDetails = (e, phaseIndex, moduleIndex, topicIndex) => {
    e?.stopPropagation();
    const key = `${phaseIndex}-${moduleIndex}-${topicIndex}`;
    setExpandedTopics(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const toggleTopic = (phaseIndex, moduleIndex, topicIndex) => {
    const key = `${phaseIndex}-${moduleIndex}-${topicIndex}`;
    const isCompleting = !completedTopics[key];
    
    setCompletedTopics(prev => ({ ...prev, [key]: isCompleting }));

    if (isCompleting) {
      confetti({
        particleCount: 30,
        spread: 50,
        origin: { y: 0.7 },
        colors: [getThemeColor(1), '#FFD700', '#ffffff']
      });
    }
  };

  const togglePhaseCompletion = (e, phaseIndex) => {
    e.stopPropagation();
    const phase = phases[phaseIndex];
    const isPhaseCurrentlyComplete = calculateProgress(phaseIndex) === 100;
    const shouldComplete = !isPhaseCurrentlyComplete;

    const newCompletedTopics = { ...completedTopics };

    phase.modules.forEach((module, mIndex) => {
      module.topics.forEach((_, tIndex) => {
        const key = `${phaseIndex}-${mIndex}-${tIndex}`;
        newCompletedTopics[key] = shouldComplete;
      });
    });

    setCompletedTopics(newCompletedTopics);

    if (shouldComplete) {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: [getThemeColor(1), '#FFD700', '#ffffff']
      });
    }
  };

  const getThemeColor = (opacity = 1) => {
    const colors = {
      teal: `rgba(20, 184, 166, ${opacity})`, // Boulder
      amber: `rgba(245, 158, 11, ${opacity})`, // Cook
      sky: `rgba(14, 165, 233, ${opacity})`,
      rose: `rgba(244, 63, 94, ${opacity})`,
      indigo: `rgba(99, 102, 241, ${opacity})`,
      emerald: `rgba(16, 185, 129, ${opacity})`,
    };
    return colors[buddyTheme] || colors.teal;
  };

  const primaryColor = getThemeColor(1);
  const lightColor = getThemeColor(0.1);

  const calculateProgress = (phaseIndex) => {
    const phase = phases[phaseIndex];
    let totalTopics = 0;
    let completedPhaseTopics = 0;

    phase.modules.forEach((module, mIndex) => {
      module.topics.forEach((_, tIndex) => {
        totalTopics++;
        if (completedTopics[`${phaseIndex}-${mIndex}-${tIndex}`]) {
          completedPhaseTopics++;
        }
      });
    });

    return totalTopics === 0 ? 0 : Math.round((completedPhaseTopics / totalTopics) * 100);
  };

  const isPhaseCompleted = (phaseIndex) => calculateProgress(phaseIndex) === 100;

  return (
    <div className="max-w-6xl mx-auto px-4 py-12 pb-32 font-sans">
      {/* Header */}
      <div className="text-center mb-16 relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-gradient-to-b from-current to-transparent opacity-5 rounded-full blur-3xl pointer-events-none" style={{ color: primaryColor }}></div>
        
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="inline-flex items-center justify-center p-6 rounded-3xl mb-6 bg-white dark:bg-stone-800 shadow-2xl transform hover:rotate-3 transition-transform duration-300 border border-stone-100 dark:border-stone-700"
        >
          <MapIcon size={48} style={{ color: primaryColor }} strokeWidth={1.5} />
        </motion.div>
        
        <h1 className="text-5xl md:text-6xl font-black text-stone-800 dark:text-stone-100 mb-6 tracking-tight">
          {title}
        </h1>
        <p className="text-xl text-stone-600 dark:text-stone-400 max-w-3xl mx-auto leading-relaxed mb-8 font-light">
          {description}
        </p>

        <div className="flex justify-center gap-4">
          <button
            onClick={toggleAll}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all shadow-sm hover:shadow-md bg-white dark:bg-stone-800 border border-stone-200 dark:border-stone-700 hover:border-stone-300 dark:hover:border-stone-600 text-stone-700 dark:text-stone-200"
          >
            {isAllExpanded ? <><Minimize2 size={16} /> Collapse All Details</> : <><Maximize2 size={16} /> Expand All Details</>}
          </button>
        </div>
      </div>

      {/* Map Container */}
      <div className="relative space-y-24">
        
        {phases.map((phase, phaseIndex) => {
          const isExpanded = expandedPhases[phaseIndex];
          const progress = calculateProgress(phaseIndex);
          const isComplete = progress === 100;
          const isLocked = phaseIndex > 0 && !isPhaseCompleted(phaseIndex - 1);

          return (
            <div key={phaseIndex} className="relative">
              {/* Phase Header / Region */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                className={`relative z-10 bg-white dark:bg-stone-800 rounded-3xl shadow-xl border-2 overflow-hidden transition-all duration-500 ${isComplete ? 'border-emerald-500 dark:border-emerald-500' : 'border-stone-100 dark:border-stone-700'}`}
                style={{ borderColor: isExpanded ? primaryColor : '' }}
              >
                {/* Phase Background Theme */}
                <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ 
                  backgroundImage: phase.backgroundImage || `linear-gradient(to bottom right, ${primaryColor}, transparent)`,
                  backgroundSize: 'cover' 
                }}></div>

                <div className="p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center gap-6 cursor-pointer" onClick={() => togglePhase(phaseIndex)}>
                  {/* Progress Circle */}
                  <div className="relative flex-shrink-0">
                    <svg className="w-20 h-20 transform -rotate-90">
                      <circle cx="40" cy="40" r="36" fill="transparent" stroke="currentColor" strokeWidth="8" className="text-stone-100 dark:text-stone-700" />
                      <circle cx="40" cy="40" r="36" fill="transparent" stroke={primaryColor} strokeWidth="8" strokeDasharray={226} strokeDashoffset={226 - (226 * progress) / 100} className="transition-all duration-1000 ease-out" />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center text-sm font-bold text-stone-700 dark:text-stone-200">
                      {progress}%
                    </div>
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-stone-100 dark:bg-stone-700 text-stone-500 dark:text-stone-300">
                        Region {phaseIndex + 1}
                      </span>
                      {isLocked && <Lock size={14} className="text-stone-400" />}
                      {isComplete && <CheckCircle size={16} className="text-emerald-500" />}
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-stone-800 dark:text-stone-100 mb-2">{phase.title}</h2>
                    <p className="text-stone-600 dark:text-stone-400">{phase.description}</p>
                  </div>

                  <div className="flex items-center gap-3">
                    <button
                      onClick={(e) => togglePhaseCompletion(e, phaseIndex)}
                      className="p-3 rounded-xl bg-stone-50 dark:bg-stone-700/50 hover:bg-stone-100 dark:hover:bg-stone-700 transition-colors text-stone-600 dark:text-stone-300"
                      title={isComplete ? "Unmark Phase" : "Mark Phase Complete"}
                    >
                      {isComplete ? <CheckSquare size={20} className="text-emerald-500" /> : <Square size={20} />}
                    </button>
                    <div className={`transform transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}>
                      <ChevronDown size={24} className="text-stone-400" />
                    </div>
                  </div>
                </div>

                {/* Modules Path (Expanded) */}
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="border-t border-stone-100 dark:border-stone-700 bg-stone-50/30 dark:bg-stone-900/10"
                    >
                      <div className="p-6 md:p-12 relative">
                        {/* Winding Path Line (SVG) */}
                        <div className="absolute top-0 bottom-0 left-1/2 w-1 -translate-x-1/2 hidden md:block pointer-events-none">
                           <svg height="100%" width="200" style={{ overflow: 'visible', position: 'absolute', left: '-100px' }}>
                             <path 
                               d={`M 100,0 ${phase.modules.map((_, i) => `Q ${i % 2 === 0 ? 0 : 200},${(i * 150) + 75} 100,${(i + 1) * 150}`).join(' ')}`}
                               fill="none"
                               stroke={lightColor}
                               strokeWidth="4"
                               strokeDasharray="8 8"
                             />
                           </svg>
                        </div>

                        <div className="space-y-12 md:space-y-24 relative z-10">
                          {phase.modules.map((module, mIndex) => {
                            const isModuleExpanded = expandedModules[`${phaseIndex}-${mIndex}`];
                            const moduleTopics = module.topics;
                            const completedModuleTopics = moduleTopics.filter((_, tIndex) => completedTopics[`${phaseIndex}-${mIndex}-${tIndex}`]).length;
                            const isModuleComplete = completedModuleTopics === moduleTopics.length;
                            const isOdd = mIndex % 2 !== 0;

                            return (
                              <div key={mIndex} className={`md:flex items-center ${isOdd ? 'flex-row-reverse' : ''}`}>
                                {/* Illustration or Empty Space */}
                                <div className={`hidden md:flex md:w-1/2 items-center justify-center p-8 ${isOdd ? 'order-2' : 'order-1'}`}>
                                  {module.illustration && (
                                    React.isValidElement(module.illustration) ? (
                                      <motion.div
                                        className="w-full max-w-xs transform hover:scale-105 transition-transform duration-500"
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        animate={{ y: [0, -8, 0] }}
                                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                      >
                                        {module.illustration}
                                      </motion.div>
                                    ) : (
                                     <motion.img
                                      src={module.illustration.url}
                                      alt={module.illustration.alt || "Illustration"}
                                      className="max-w-[80%] max-h-64 object-contain drop-shadow-xl transform hover:scale-105 transition-transform duration-500"
                                      initial={{ opacity: 0, y: 20 }}
                                      whileInView={{ opacity: 1, y: 0 }}
                                      viewport={{ once: true }}
                                      animate={{ y: [0, -8, 0] }}
                                      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                    />
                                    )
                                  )}
                                </div>

                                {/* Module Node (The "Dot" on the map) */}
                                <div className="md:w-auto absolute left-1/2 transform -translate-x-1/2 flex justify-center z-20">
                                  <motion.button
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={() => toggleModule(phaseIndex, mIndex)}
                                    className={`w-20 h-20 rounded-full flex items-center justify-center shadow-lg border-4 transition-colors duration-300 ${
                                      isModuleComplete 
                                        ? 'bg-emerald-500 border-white dark:border-stone-800 text-white' 
                                        : isModuleExpanded 
                                          ? 'bg-white dark:bg-stone-800 text-stone-800 dark:text-stone-100' 
                                          : 'bg-white dark:bg-stone-800 text-stone-400'
                                    }`}
                                    style={{ borderColor: isModuleComplete ? '#fff' : (isModuleExpanded ? primaryColor : '') }}
                                  >
                                    {module.customIcon ? (
                                      <img src={module.customIcon} alt="icon" className="w-10 h-10 object-contain" />
                                    ) : isModuleComplete ? (
                                      <Award size={32} />
                                    ) : (
                                      <span className="text-2xl font-bold">{mIndex + 1}</span>
                                    )}
                                    {/* Ripple effect for incomplete current modules */}
                                    {!isModuleComplete && !isLocked && (
                                      <div className="absolute inset-0 rounded-full animate-ping opacity-20" style={{ backgroundColor: primaryColor }}></div>
                                    )}
                                  </motion.button>
                                </div>

                                {/* Module Content Card */}
                                <div className={`md:w-1/2 px-4 ${isOdd ? 'order-1 md:pr-16 text-right' : 'order-2 md:pl-16 text-left'}`}>
                                  <motion.div
                                    layout
                                    className={`bg-white dark:bg-stone-800 rounded-2xl p-6 shadow-lg border transition-all duration-300 relative ${
                                      isModuleExpanded ? 'border-2 shadow-xl' : 'border-stone-200 dark:border-stone-700'
                                    }`}
                                    style={{ borderColor: isModuleExpanded ? primaryColor : '' }}
                                  >
                                    <div className="cursor-pointer" onClick={() => toggleModule(phaseIndex, mIndex)}>
                                      <div className="flex items-center justify-between mb-2">
                                        <h4 className="text-lg font-bold text-stone-800 dark:text-stone-100">{module.title}</h4>
                                        <ChevronDown size={20} className={`text-stone-400 transition-transform duration-300 ${isModuleExpanded ? 'rotate-180' : ''}`} />
                                      </div>
                                      <div className="w-full bg-stone-100 dark:bg-stone-700 h-1.5 rounded-full overflow-hidden">
                                        <div className="h-full transition-all duration-500" style={{ width: `${(completedModuleTopics / moduleTopics.length) * 100}%`, backgroundColor: primaryColor }}></div>
                                      </div>
                                    </div>

                                    <AnimatePresence>
                                      {isModuleExpanded && (
                                        <motion.div
                                          initial={{ height: 0, opacity: 0 }}
                                          animate={{ height: 'auto', opacity: 1 }}
                                          exit={{ height: 0, opacity: 0 }}
                                          className="mt-6 space-y-4"
                                        >
                                          {moduleTopics.map((topic, tIndex) => {
                                            const topicKey = `${phaseIndex}-${mIndex}-${tIndex}`;
                                            const isChecked = !!completedTopics[topicKey];
                                            const isTopicObject = typeof topic === 'object';
                                            const topicTitle = isTopicObject ? topic.title : topic;
                                            const topicDetails = isTopicObject ? topic.details : null;
                                            const topicMedia = isTopicObject ? topic.media : null;
                                            const topicResources = isTopicObject ? topic.resources : null;
                                            const topicTasks = isTopicObject ? topic.tasks : null;
                                            const isTopicExpanded = expandedTopics[topicKey];

                                            return (
                                              <div key={tIndex} className="group/topic">
                                                <div className="flex items-start gap-3">
                                                  <div 
                                                    onClick={() => toggleTopic(phaseIndex, mIndex, tIndex)}
                                                    className={`mt-1 w-5 h-5 rounded-md border-2 flex items-center justify-center flex-shrink-0 cursor-pointer transition-all ${isChecked ? 'bg-emerald-500 border-emerald-500' : 'border-stone-300 dark:border-stone-600 hover:border-emerald-400'}`}
                                                  >
                                                    {isChecked && <CheckCircle size={14} className="text-white" />}
                                                  </div>
                                                  
                                                  <div className="flex-1">
                                                    <div 
                                                      className="flex items-center justify-between cursor-pointer"
                                                      onClick={(e) => isTopicObject && toggleTopicDetails(e, phaseIndex, mIndex, tIndex)}
                                                    >
                                                      <HoverTooltip content={topicMedia}>
                                                        <span className={`text-sm font-medium transition-colors ${isChecked ? 'text-stone-400 line-through' : 'text-stone-700 dark:text-stone-200 hover:text-stone-900 dark:hover:text-white'}`}>
                                                          {topicTitle}
                                                        </span>
                                                      </HoverTooltip>
                                                      {isTopicObject && (
                                                        <Info size={14} className="text-stone-400 hover:text-stone-600 dark:hover:text-stone-200" />
                                                      )}
                                                    </div>

                                                    <AnimatePresence>
                                                      {isTopicObject && isTopicExpanded && (
                                                        <motion.div
                                                          initial={{ height: 0, opacity: 0 }}
                                                          animate={{ height: 'auto', opacity: 1 }}
                                                          exit={{ height: 0, opacity: 0 }}
                                                          className="mt-3 space-y-3"
                                                        >
                                                          {/* Details List */}
                                                          <div className="text-sm text-stone-600 dark:text-stone-400 pl-2 border-l-2 border-stone-100 dark:border-stone-700">
                                                            <ul className="list-none space-y-1.5">
                                                              {topicDetails.map((detail, dIndex) => (
                                                                <li key={dIndex} className="leading-relaxed text-xs md:text-sm">
                                                                  {detail}
                                                                </li>
                                                              ))}
                                                            </ul>
                                                          </div>

                                                          {/* Resources Buttons */}
                                                          {topicResources && (
                                                            <div className="flex gap-2 flex-wrap">
                                                              {topicResources.map((res, rIndex) => (
                                                                <a 
                                                                  key={rIndex} 
                                                                  href={res.url} 
                                                                  target="_blank" 
                                                                  rel="noopener noreferrer"
                                                                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-stone-100 dark:bg-stone-700 text-xs font-medium text-stone-600 dark:text-stone-300 hover:bg-stone-200 dark:hover:bg-stone-600 transition-colors"
                                                                >
                                                                  {res.type === 'video' ? <Video size={12} /> : <BookOpen size={12} />}
                                                                  {res.title}
                                                                </a>
                                                              ))}
                                                            </div>
                                                          )}

                                                          {/* Tasks */}
                                                          <TopicTasks tasks={topicTasks} topicKey={topicKey} buddyId={buddyId} />

                                                          {/* Notes */}
                                                          <TopicNotes topicKey={topicKey} buddyId={buddyId} />
                                                        </motion.div>
                                                      )}
                                                    </AnimatePresence>
                                                  </div>
                                                </div>
                                              </div>
                                            );
                                          })}
                                        </motion.div>
                                      )}
                                    </AnimatePresence>
                                  </motion.div>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
              
              {/* Connecting Line to next phase */}
              {!isComplete && phaseIndex < phases.length - 1 && (
                 <div className="absolute left-1/2 bottom-0 transform translate-y-full w-1 h-24 bg-stone-200 dark:bg-stone-700 -translate-x-1/2 -z-10"></div>
              )}
            </div>
          );
        })}

        {/* Final Trophy */}
        <div className="flex justify-center pb-20">
           <motion.div 
            whileHover={{ scale: 1.1, rotate: 10 }}
            className="w-24 h-24 bg-yellow-400 rounded-full flex items-center justify-center shadow-2xl border-4 border-white dark:border-stone-800"
           >
             <Trophy size={48} className="text-yellow-900" />
           </motion.div>
        </div>
      </div>
    </div>
  );
};

export default SkillPath;
