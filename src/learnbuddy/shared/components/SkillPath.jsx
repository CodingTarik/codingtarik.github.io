import React, { useState, useEffect } from 'react';
import { CheckCircle, Circle, ChevronDown, ChevronUp, Map, Trophy, Lock, Unlock, Award, ArrowRight, CheckSquare, Square, Info, Maximize2, Minimize2 } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';

const SkillPath = ({ title, description, phases, buddyTheme, buddyId }) => {
  const { isDarkMode } = useTheme();
  const [expandedPhases, setExpandedPhases] = useState({}); // Track multiple expanded phases
  const [expandedModules, setExpandedModules] = useState({}); // Track expanded modules
  const [expandedTopics, setExpandedTopics] = useState({}); // Track expanded topic details
  const [completedTopics, setCompletedTopics] = useState({}); // Track completed topics
  const [isAllExpanded, setIsAllExpanded] = useState(false); // Global expand state

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
      // Expand everything
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
      // Collapse everything
      setExpandedPhases({});
      setExpandedModules({});
      setExpandedTopics({});
    }
  };

  const togglePhase = (index) => {
    setExpandedPhases(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const toggleModule = (phaseIndex, moduleIndex) => {
    const key = `${phaseIndex}-${moduleIndex}`;
    setExpandedModules(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const toggleTopicDetails = (e, phaseIndex, moduleIndex, topicIndex) => {
    e.stopPropagation();
    const key = `${phaseIndex}-${moduleIndex}-${topicIndex}`;
    setExpandedTopics(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const toggleTopic = (phaseIndex, moduleIndex, topicIndex) => {
    const key = `${phaseIndex}-${moduleIndex}-${topicIndex}`;
    const isCompleting = !completedTopics[key];
    
    setCompletedTopics(prev => ({
      ...prev,
      [key]: isCompleting
    }));

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
    e.stopPropagation(); // Prevent toggling expansion
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

  // Helper to get theme colors
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
  const hoverColor = getThemeColor(0.2);

  // Calculate progress
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
    <div className="max-w-5xl mx-auto px-4 py-12 pb-32">
      {/* Hero Section */}
      <div className="text-center mb-12 relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-gradient-to-b from-current to-transparent opacity-5 rounded-full blur-3xl pointer-events-none" style={{ color: primaryColor }}></div>
        
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="inline-flex items-center justify-center p-4 rounded-2xl mb-6 bg-white dark:bg-stone-800 shadow-xl transform hover:rotate-3 transition-transform duration-300 border border-stone-100 dark:border-stone-700"
        >
          <Map size={40} style={{ color: primaryColor }} strokeWidth={1.5} />
        </motion.div>
        
        <h1 className="text-4xl md:text-5xl font-bold text-stone-800 dark:text-stone-100 mb-4 tracking-tight">
          {title}
        </h1>
        <p className="text-lg text-stone-600 dark:text-stone-400 max-w-2xl mx-auto leading-relaxed mb-8">
          {description}
        </p>

        {/* Expand All Button */}
        <button
          onClick={toggleAll}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all shadow-sm hover:shadow-md bg-white dark:bg-stone-800 border border-stone-200 dark:border-stone-700 hover:border-stone-300 dark:hover:border-stone-600 text-stone-700 dark:text-stone-200"
        >
          {isAllExpanded ? (
            <>
              <Minimize2 size={16} /> Collapse All Details
            </>
          ) : (
            <>
              <Maximize2 size={16} /> Expand All Details
            </>
          )}
        </button>
      </div>

      {/* Timeline Container */}
      <div className="relative">
        {/* Central Line */}
        <div 
          className="absolute left-6 md:left-1/2 top-0 bottom-0 w-1 transform md:-translate-x-1/2 rounded-full z-0"
          style={{ 
            background: `linear-gradient(to bottom, ${primaryColor} 0%, ${isDarkMode ? '#44403c' : '#e7e5e4'} 100%)` 
          }}
        ></div>

        {phases.map((phase, index) => {
          const isExpanded = expandedPhases[index];
          const progress = calculateProgress(index);
          const isComplete = progress === 100;
          const isLocked = index > 0 && !isPhaseCompleted(index - 1);

          return (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative mb-12 md:mb-24 grid md:grid-cols-2 gap-8 items-start group ${isLocked ? 'opacity-70 grayscale-[0.5]' : ''}`}
            >
              
              {/* Timeline Node (Mobile: Left, Desktop: Center) */}
              <div className="absolute left-6 md:left-1/2 transform -translate-x-1/2 flex flex-col items-center z-10">
                <div 
                  className={`w-12 h-12 rounded-full border-4 flex items-center justify-center transition-all duration-500 shadow-lg ${isExpanded ? 'scale-110' : 'scale-100 group-hover:scale-110'}`}
                  style={{ 
                    backgroundColor: isComplete ? primaryColor : (isDarkMode ? '#292524' : '#ffffff'),
                    borderColor: primaryColor,
                    color: isComplete ? '#ffffff' : primaryColor
                  }}
                >
                  {isComplete ? (
                    <CheckCircle size={24} strokeWidth={3} />
                  ) : (
                    <span className="font-bold text-lg">{index + 1}</span>
                  )}
                </div>
              </div>

              {/* Content Card Wrapper - Alternating Sides */}
              <div className={`pl-16 md:pl-0 ${index % 2 === 0 ? 'md:text-right md:pr-16 order-1' : 'md:order-2 md:pl-16 md:text-left'}`}>
                
                <div 
                  className={`relative bg-white dark:bg-stone-800 rounded-2xl shadow-lg transition-all duration-300 hover:shadow-xl border border-stone-100 dark:border-stone-700 overflow-hidden ${isExpanded ? 'ring-2' : ''}`}
                  style={{ ringColor: primaryColor }}
                >
                  {/* Progress Bar Top */}
                  <div className="h-1.5 w-full bg-stone-100 dark:bg-stone-700">
                    <div 
                      className="h-full transition-all duration-1000 ease-out"
                      style={{ width: `${progress}%`, backgroundColor: primaryColor }}
                    ></div>
                  </div>

                  {/* Card Header */}
                  <div 
                    className="p-6 cursor-pointer"
                    onClick={() => togglePhase(index)}
                  >
                    <div className={`flex items-center justify-between mb-3 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                      <div className={`flex items-center gap-3 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                        <span 
                          className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full"
                          style={{ backgroundColor: lightColor, color: primaryColor }}
                        >
                          Phase {index + 1}
                        </span>
                        {isComplete && (
                          <span className="flex items-center gap-1 text-xs font-medium text-emerald-500 bg-emerald-50 dark:bg-emerald-900/20 px-2 py-1 rounded-full">
                            <Award size={12} /> Completed
                          </span>
                        )}
                      </div>

                      {/* Phase Checkbox */}
                      <button
                        onClick={(e) => togglePhaseCompletion(e, index)}
                        className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
                          isComplete 
                            ? 'bg-emerald-100 text-emerald-700 hover:bg-emerald-200 dark:bg-emerald-900/30 dark:text-emerald-400' 
                            : 'bg-stone-100 text-stone-600 hover:bg-stone-200 dark:bg-stone-700 dark:text-stone-300'
                        }`}
                      >
                        {isComplete ? (
                          <>
                            <CheckSquare size={16} />
                            <span>Done</span>
                          </>
                        ) : (
                          <>
                            <Square size={16} />
                            <span>Mark All</span>
                          </>
                        )}
                      </button>
                    </div>
                    
                    <h3 className="text-xl font-bold text-stone-800 dark:text-stone-100 mb-2 group-hover:text-opacity-80 transition-colors">
                      {phase.title}
                    </h3>
                    <p className="text-stone-600 dark:text-stone-400 text-sm leading-relaxed">
                      {phase.description}
                    </p>

                    <div className={`flex items-center mt-5 text-sm font-medium transition-colors ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`} style={{ color: primaryColor }}>
                      <span className="flex items-center gap-1 hover:underline">
                        {isExpanded ? (
                          <>Hide Modules <ChevronUp size={16} /></>
                        ) : (
                          <>Explore {phase.modules.length} Modules <ChevronDown size={16} /></>
                        )}
                      </span>
                      <span className="mx-3 text-stone-300 dark:text-stone-600">|</span>
                      <span className="text-stone-500 dark:text-stone-400">
                        {progress}% Done
                      </span>
                    </div>
                  </div>

                  {/* Expanded Content (Modules) */}
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="border-t border-stone-100 dark:border-stone-700 bg-stone-50/50 dark:bg-stone-900/30"
                      >
                        <div className="p-4 space-y-3">
                          {phase.modules.map((module, mIndex) => {
                            const isModuleExpanded = expandedModules[`${index}-${mIndex}`];
                            const moduleTopics = module.topics;
                            const completedModuleTopics = moduleTopics.filter((_, tIndex) => completedTopics[`${index}-${mIndex}-${tIndex}`]).length;
                            const isModuleComplete = completedModuleTopics === moduleTopics.length;

                            return (
                              <div key={mIndex} className="bg-white dark:bg-stone-800 rounded-xl border border-stone-200 dark:border-stone-700 overflow-hidden">
                                {/* Module Header */}
                                <div 
                                  className="p-4 flex items-center justify-between cursor-pointer hover:bg-stone-50 dark:hover:bg-stone-700/50 transition-colors"
                                  onClick={() => toggleModule(index, mIndex)}
                                >
                                  <div className="flex items-center gap-3">
                                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors ${isModuleComplete ? 'bg-emerald-100 text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-400' : 'bg-stone-100 text-stone-500 dark:bg-stone-700 dark:text-stone-400'}`}>
                                      {isModuleComplete ? <CheckCircle size={18} /> : <Lock size={18} />}
                                    </div>
                                    <div className="text-left">
                                      <h4 className={`font-bold text-sm md:text-base ${isModuleComplete ? 'text-stone-400 line-through' : 'text-stone-800 dark:text-stone-200'}`}>
                                        {module.title}
                                      </h4>
                                      <div className="text-xs text-stone-500 dark:text-stone-400 mt-0.5">
                                        {completedModuleTopics} / {moduleTopics.length} steps
                                      </div>
                                    </div>
                                  </div>
                                  <ChevronDown 
                                    size={16} 
                                    className={`text-stone-400 transition-transform duration-300 ${isModuleExpanded ? 'rotate-180' : ''}`}
                                  />
                                </div>

                                {/* Module Topics (Accordion) */}
                                <AnimatePresence>
                                  {isModuleExpanded && (
                                    <motion.div
                                      initial={{ height: 0 }}
                                      animate={{ height: 'auto' }}
                                      exit={{ height: 0 }}
                                      className="border-t border-stone-100 dark:border-stone-700 bg-stone-50 dark:bg-stone-900/20"
                                    >
                                      <div className="p-3 space-y-2">
                                        {moduleTopics.map((topic, tIndex) => {
                                          const topicKey = `${index}-${mIndex}-${tIndex}`;
                                          const isChecked = !!completedTopics[topicKey];
                                          const isTopicObject = typeof topic === 'object';
                                          const topicTitle = isTopicObject ? topic.title : topic;
                                          const topicDetails = isTopicObject ? topic.details : null;
                                          const isTopicExpanded = expandedTopics[topicKey];

                                          return (
                                            <div key={tIndex} className="group/topic">
                                              <div 
                                                className="flex items-start gap-3 p-2 rounded-lg hover:bg-white dark:hover:bg-stone-800 transition-colors cursor-pointer"
                                              >
                                                {/* Checkbox */}
                                                <div 
                                                  onClick={(e) => {
                                                    e.stopPropagation();
                                                    toggleTopic(index, mIndex, tIndex);
                                                  }}
                                                  className={`mt-0.5 w-5 h-5 rounded border-2 flex items-center justify-center flex-shrink-0 transition-all ${isChecked ? 'bg-emerald-500 border-emerald-500' : 'border-stone-300 dark:border-stone-600 group-hover/topic:border-stone-400'}`}
                                                >
                                                  {isChecked && <CheckCircle size={14} className="text-white" />}
                                                </div>

                                                {/* Topic Content */}
                                                <div className="flex-1" onClick={() => isTopicObject && toggleTopicDetails(null, index, mIndex, tIndex)}>
                                                  <div className="flex items-center justify-between">
                                                    <span className={`text-sm transition-colors font-medium ${isChecked ? 'text-stone-400 line-through' : 'text-stone-700 dark:text-stone-300'}`}>
                                                      {topicTitle}
                                                    </span>
                                                    {isTopicObject && (
                                                      <button 
                                                        onClick={(e) => toggleTopicDetails(e, index, mIndex, tIndex)}
                                                        className="p-1 rounded-full hover:bg-stone-100 dark:hover:bg-stone-700 text-stone-400 hover:text-stone-600 dark:hover:text-stone-200"
                                                      >
                                                        <Info size={14} />
                                                      </button>
                                                    )}
                                                  </div>

                                                  {/* Topic Details (Expandable) */}
                                                  {isTopicObject && isTopicExpanded && (
                                                    <motion.div
                                                      initial={{ height: 0, opacity: 0 }}
                                                      animate={{ height: 'auto', opacity: 1 }}
                                                      className="mt-2 ml-0 text-sm text-stone-600 dark:text-stone-400"
                                                    >
                                                      <ul className="list-disc list-inside space-y-1 pl-1">
                                                        {topicDetails.map((detail, dIndex) => (
                                                          <li key={dIndex} className="text-xs leading-relaxed">
                                                            {detail}
                                                          </li>
                                                        ))}
                                                      </ul>
                                                    </motion.div>
                                                  )}
                                                </div>
                                              </div>
                                            </div>
                                          );
                                        })}
                                      </div>
                                    </motion.div>
                                  )}
                                </AnimatePresence>
                              </div>
                            );
                          })}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
              
              {/* Empty placeholder for grid layout balance */}
              <div className={`hidden md:block ${index % 2 === 0 ? 'order-2' : 'order-1'}`}></div>
            </motion.div>
          );
        })}

        {/* Finish Line */}
        <div className="absolute -bottom-8 left-6 md:left-1/2 transform -translate-x-1/2">
          <motion.div 
            whileHover={{ scale: 1.2, rotate: 360 }}
            transition={{ duration: 0.5 }}
            className="w-16 h-16 rounded-full flex items-center justify-center shadow-xl border-4 border-white dark:border-stone-900 z-20 relative"
            style={{ backgroundColor: '#FCD34D' }}
          >
            <Trophy size={32} className="text-yellow-900" />
            <div className="absolute inset-0 rounded-full bg-white opacity-20 animate-ping"></div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default SkillPath;
