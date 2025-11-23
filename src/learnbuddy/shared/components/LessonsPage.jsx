import React, { useState, useEffect } from 'react';
import { BookOpen, CheckCircle2, Circle, Award, ChevronDown, ChevronRight, Folder } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { loadLessonProgress, getLessonProgressStats, markLessonComplete, markLessonIncomplete } from '../../utils/sessionStorage';
import { playCompletionSound } from '../../utils/sounds';

function LessonsPage({ lessons, onSelectLesson }) {
  const { language, t } = useLanguage();
  const [progress, setProgress] = useState({});
  const [expandedGroups, setExpandedGroups] = useState({});
  
  // Load initial progress on component mount
  useEffect(() => {
    setProgress(loadLessonProgress());
  }, []);

  // Helper to toggle group expansion
  const toggleGroup = (groupId) => {
    setExpandedGroups(prev => ({
      ...prev,
      [groupId]: !prev[groupId]
    }));
  };

  // Group lessons by category and then by sub-group (if any)
  const organizedLessons = lessons.reduce((acc, lesson) => {
    const category = lesson.category || 'uncategorized';
    
    if (!acc[category]) {
      acc[category] = {
        title: lesson.categoryTitle,
        lessons: [],
        groups: {}
      };
    }
    
    if (lesson.group) {
      const groupId = lesson.group.id;
      if (!acc[category].groups[groupId]) {
        acc[category].groups[groupId] = {
          title: lesson.group.title,
          lessons: []
        };
      }
      acc[category].groups[groupId].lessons.push(lesson);
    } else {
      acc[category].lessons.push(lesson);
    }
    
    return acc;
  }, {});
  
  // Calculate stats
  const validLessonIds = new Set(lessons.map(l => l.id));
  const completedCount = Object.entries(progress)
    .filter(([lessonId, data]) => data?.completed === true && validLessonIds.has(lessonId))
    .length;
  const stats = getLessonProgressStats(completedCount, lessons.length);

  const toggleLessonComplete = (e, lessonId) => {
    e.stopPropagation();
    
    let newProgress;
    if (progress[lessonId]?.completed) {
      newProgress = markLessonIncomplete(lessonId);
    } else {
      newProgress = markLessonComplete(lessonId);
      playCompletionSound();
    }
    
    setProgress(newProgress);
  };

  const renderLessonCard = (lesson) => {
    const isComplete = progress[lesson.id]?.completed || false;
    const lessonTitle = lesson.title?.[language] || lesson.title?.en || lesson.title;
    const isSpecial = lesson.isSpecial;
    
    return (
      <div
        key={lesson.id}
        className={`relative bg-white dark:bg-stone-800 rounded-lg shadow-sm transition-all ${
          isComplete ? 'opacity-75' : ''
        } ${
          isSpecial 
            ? 'border-2 border-amber-400 dark:border-amber-500 shadow-lg shadow-amber-100 dark:shadow-amber-900/20' 
            : 'border border-stone-200 dark:border-stone-700'
        }`}
      >
        {isSpecial && (
             <div className="absolute -top-2 -right-2 z-10 bg-gradient-to-r from-amber-500 to-orange-500 text-white text-[10px] tracking-widest uppercase font-bold px-2 py-0.5 rounded-full shadow-sm animate-pulse">
                Special
             </div>
        )}
        <button
          onClick={() => onSelectLesson(lesson)}
          className={`w-full p-4 hover:shadow-md transition-all text-left rounded-lg flex items-center gap-3 ${
             isSpecial ? 'bg-amber-50/30 dark:bg-amber-900/10 hover:bg-amber-50/60 dark:hover:bg-amber-900/20' : 'hover:bg-stone-50 dark:hover:bg-stone-700/50'
          }`}
        >
          <div className="flex-1">
            <h3 className={`font-bold mb-1 ${
              isComplete 
                ? 'text-stone-500 dark:text-stone-500 line-through' 
                : isSpecial 
                    ? 'text-amber-700 dark:text-amber-400' 
                    : 'text-stone-800 dark:text-stone-100'
            }`}>
              {lessonTitle} {isSpecial && <span className="inline-block ml-1 text-amber-500">✨</span>}
            </h3>
            {lesson.description && (
              <p className="text-sm text-stone-600 dark:text-stone-400 line-clamp-2">
                {lesson.description?.[language] || lesson.description?.en || lesson.description}
              </p>
            )}
          </div>
          
          <button
            onClick={(e) => toggleLessonComplete(e, lesson.id)}
            className="flex-shrink-0 hover:scale-110 transition-transform p-2"
            title={isComplete ? t('markAsIncomplete') : t('markAsComplete')}
          >
            {isComplete ? (
              <CheckCircle2 size={24} className="text-green-500 fill-current" />
            ) : (
              <Circle size={24} className="text-stone-300 dark:text-stone-600 hover:text-stone-400" />
            )}
          </button>
        </button>
      </div>
    );
  };

  return (
    <div className="pb-20">
      <h1 className="text-3xl font-bold text-stone-800 dark:text-stone-100 mb-6 flex items-center gap-2">
        <BookOpen className="text-teal-500" />
        {t('boulderLessons')}
      </h1>

      {/* Progress Card */}
      <div className="bg-gradient-to-br from-teal-500 to-teal-600 dark:from-teal-600 dark:to-teal-800 rounded-xl shadow-lg p-6 mb-8 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 p-4 opacity-10">
           <Award size={100} />
        </div>
        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-white/20 rounded-full">
              <Award size={24} />
            </div>
            <div>
              <h2 className="text-xl font-bold">
                {language === 'de' ? 'Dein Fortschritt' : 'Your Progress'}
              </h2>
              <p className="text-teal-100 text-sm">
                {stats.completed} / {stats.total} {language === 'de' ? 'abgeschlossen' : 'completed'}
              </p>
            </div>
          </div>
          
          <div className="w-full bg-black/20 rounded-full h-4 overflow-hidden backdrop-blur-sm">
            <div
              className="bg-white h-full rounded-full transition-all duration-1000 ease-out"
              style={{ width: `${stats.percentage}%` }}
            />
          </div>
          <div className="mt-2 text-right text-xs font-bold opacity-80">{Math.round(stats.percentage)}%</div>
        </div>
      </div>
      
      {Object.entries(organizedLessons).map(([categoryId, categoryData]) => {
        const categoryTitle = categoryData.title?.[language] || categoryData.title?.en || categoryId;
        const hasGroups = Object.keys(categoryData.groups).length > 0;
        const hasLooseLessons = categoryData.lessons.length > 0;

        return (
          <div key={categoryId} className="mb-10">
            <h2 className="text-xl font-bold text-stone-800 dark:text-stone-200 border-b-2 border-stone-200 dark:border-stone-700 pb-2 mb-4 flex items-center gap-2">
              <span className="bg-teal-100 dark:bg-teal-900 text-teal-700 dark:text-teal-300 px-2 py-1 rounded text-sm font-bold shadow-sm">
                {categoryId.split('_')[0].toUpperCase()}
              </span>
              <span className="capitalize">{categoryTitle}</span>
            </h2>
            
            <div className="space-y-4">
              {/* Render Groups first */}
              {hasGroups && Object.entries(categoryData.groups).map(([groupId, groupData]) => {
                 const isExpanded = expandedGroups[groupId] !== false; // Default to expanded? or collapsed? Let's default to collapsed if many, or expanded if few. Let's verify.
                 // Actually, let's default to false (collapsed) for cleaner view, or true? 
                 // Let's default to TRUE for better discoverability unless explicitly collapsed.
                 const isOpen = expandedGroups[groupId] === undefined ? true : expandedGroups[groupId];
                 
                 const groupCompletedCount = groupData.lessons.filter(l => progress[l.id]?.completed).length;
                 const groupTotalCount = groupData.lessons.length;
                 const isGroupComplete = groupCompletedCount === groupTotalCount && groupTotalCount > 0;

                 return (
                   <div key={groupId} className="border border-stone-200 dark:border-stone-700 rounded-xl overflow-hidden bg-stone-50/50 dark:bg-stone-900/50">
                     <button 
                       onClick={() => toggleGroup(groupId)}
                       className="w-full flex items-center justify-between p-4 hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors"
                     >
                       <div className="flex items-center gap-3">
                         <div className={`p-2 rounded-lg ${isGroupComplete ? 'bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400' : 'bg-stone-200 text-stone-600 dark:bg-stone-800 dark:text-stone-400'}`}>
                           <Folder size={20} />
                         </div>
                         <div className="text-left">
                           <h3 className="font-bold text-stone-700 dark:text-stone-200">
                             {groupData.title?.[language] || groupData.title?.en}
                           </h3>
                           <p className="text-xs text-stone-500">
                             {groupCompletedCount}/{groupTotalCount} {language === 'de' ? 'erledigt' : 'done'}
                           </p>
                         </div>
                       </div>
                       {isOpen ? <ChevronDown size={20} className="text-stone-400" /> : <ChevronRight size={20} className="text-stone-400" />}
                     </button>
                     
                     {isOpen && (
                       <div className="p-3 pt-0 space-y-3 border-t border-stone-200 dark:border-stone-700/50 mt-1">
                          <div className="h-2"></div> {/* Spacer */}
                          {groupData.lessons.map(renderLessonCard)}
                       </div>
                     )}
                   </div>
                 );
              })}

              {/* Render loose lessons */}
              {hasLooseLessons && (
                <div className="space-y-3 pl-1">
                  {categoryData.lessons.map(renderLessonCard)}
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default LessonsPage;
