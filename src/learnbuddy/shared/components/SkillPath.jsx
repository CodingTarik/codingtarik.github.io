import React, { useState } from 'react';
import { CheckCircle, Circle, ChevronDown, ChevronUp, Map, Trophy, Star, BookOpen } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

const SkillPath = ({ title, description, phases, buddyTheme }) => {
  const { isDarkMode } = useTheme();
  const [expandedPhase, setExpandedPhase] = useState(null);
  
  const togglePhase = (index) => {
    if (expandedPhase === index) {
      setExpandedPhase(null);
    } else {
      setExpandedPhase(index);
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

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 pb-24">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center justify-center p-3 rounded-full mb-4 bg-white dark:bg-stone-800 shadow-lg transform hover:scale-105 transition-transform">
          <Map size={32} style={{ color: primaryColor }} />
        </div>
        <h1 className="text-3xl font-bold text-stone-800 dark:text-stone-100 mb-2">
          {title}
        </h1>
        <p className="text-stone-600 dark:text-stone-400 max-w-2xl mx-auto">
          {description}
        </p>
      </div>

      {/* Timeline */}
      <div className="relative">
        {/* Vertical Line */}
        <div 
          className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 transform md:-translate-x-1/2 rounded-full"
          style={{ backgroundColor: isDarkMode ? '#44403c' : '#e7e5e4' }}
        ></div>

        {phases.map((phase, index) => {
          const isExpanded = expandedPhase === index;
          const isEven = index % 2 === 0;

          return (
            <div key={index} className={`relative mb-12 md:mb-24 ${isEven ? 'md:text-right' : 'md:text-left'}`}>
              
              {/* Timeline Node (Circle) */}
              <div 
                className="absolute left-4 md:left-1/2 w-8 h-8 rounded-full border-4 border-white dark:border-stone-900 transform -translate-x-1/2 flex items-center justify-center z-10 cursor-pointer transition-transform hover:scale-125"
                style={{ backgroundColor: primaryColor }}
                onClick={() => togglePhase(index)}
              >
                <span className="text-white font-bold text-xs">{index + 1}</span>
              </div>

              {/* Content Card */}
              <div 
                className={`ml-12 md:ml-0 md:w-[calc(50%-2rem)] ${isEven ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'}`}
              >
                <div 
                  className={`bg-white dark:bg-stone-800 rounded-xl shadow-lg border-l-4 overflow-hidden transition-all duration-300 hover:shadow-xl ${isExpanded ? 'ring-2' : ''}`}
                  style={{ 
                    borderLeftColor: primaryColor,
                    ringColor: primaryColor
                  }}
                >
                  {/* Phase Header */}
                  <div 
                    className="p-6 cursor-pointer"
                    onClick={() => togglePhase(index)}
                  >
                    <div className={`flex items-center gap-2 mb-2 ${isEven ? 'md:justify-end' : ''}`}>
                      <span 
                        className="text-xs font-bold uppercase tracking-wider px-2 py-1 rounded"
                        style={{ backgroundColor: lightColor, color: primaryColor }}
                      >
                        Phase {index + 1}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-stone-800 dark:text-stone-100 mb-2">
                      {phase.title}
                    </h3>
                    <p className="text-stone-600 dark:text-stone-400 text-sm line-clamp-2">
                      {phase.description}
                    </p>
                    
                    <div className={`flex items-center mt-4 text-sm font-medium ${isEven ? 'md:justify-end' : ''}`} style={{ color: primaryColor }}>
                      {isExpanded ? (
                        <>
                          <ChevronUp size={16} className="mr-1" /> Less details
                        </>
                      ) : (
                        <>
                          <ChevronDown size={16} className="mr-1" /> {phase.modules.length} Modules
                        </>
                      )}
                    </div>
                  </div>

                  {/* Phase Details (Expanded) */}
                  {isExpanded && (
                    <div className="bg-stone-50 dark:bg-stone-900/50 border-t border-stone-100 dark:border-stone-700 p-6 animate-fade-in">
                      <div className="space-y-6">
                        {phase.modules.map((module, mIndex) => (
                          <div key={mIndex} className="relative">
                            <div className="flex items-start gap-3">
                              <div className="mt-1 min-w-[20px]">
                                <Star size={18} className="text-yellow-500 fill-yellow-500" />
                              </div>
                              <div>
                                <h4 className="font-bold text-stone-800 dark:text-stone-200 mb-2">
                                  {module.title}
                                </h4>
                                <ul className="space-y-2">
                                  {module.topics.map((topic, tIndex) => (
                                    <li key={tIndex} className="flex items-start gap-2 text-sm text-stone-600 dark:text-stone-400">
                                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-stone-400 flex-shrink-0"></span>
                                      <span>{topic}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                            {mIndex < phase.modules.length - 1 && (
                              <div className="absolute left-2.5 top-7 bottom-[-1.5rem] w-px bg-stone-200 dark:bg-stone-700"></div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}

        {/* Finish Line */}
        <div className="absolute bottom-0 left-4 md:left-1/2 transform -translate-x-1/2 translate-y-1/2">
          <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg border-4 border-white dark:border-stone-900">
            <Trophy size={24} className="text-yellow-900" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillPath;

