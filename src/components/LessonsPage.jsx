import React, { useState, useEffect } from 'react';
import { BookOpen, CheckCircle, Circle, Award } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { getTranslatedLesson } from '../data/lessonTranslations';
import { loadLessonProgress, getLessonProgressStats, markLessonComplete, markLessonIncomplete } from '../utils/sessionStorage';

function LessonsPage({ lessons, onSelectLesson }) {
  const { language, t } = useLanguage();
  const [progress, setProgress] = useState({});
  
  useEffect(() => {
    setProgress(loadLessonProgress());
  }, []);
  
  // Translate lessons
  const translatedLessons = lessons.map(lesson => getTranslatedLesson(lesson, language));
  const categories = [...new Set(translatedLessons.map(l => l.category))];
  
  // Get progress stats
  const stats = getLessonProgressStats(translatedLessons.length);

  const toggleLessonComplete = (e, lessonId) => {
    e.stopPropagation();
    
    if (progress[lessonId]?.completed) {
      const newProgress = markLessonIncomplete(lessonId);
      setProgress(newProgress);
    } else {
      const newProgress = markLessonComplete(lessonId);
      setProgress(newProgress);
    }
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-stone-800 dark:text-stone-100 mb-6 flex items-center gap-2">
        <BookOpen className="text-teal-500" />
        {t('boulderLessons')}
      </h1>

      {/* Progress Card */}
      <div className="bg-gradient-to-br from-teal-500 to-orange-500 rounded-lg shadow-md p-6 mb-8 text-white">
        <div className="flex items-center gap-3 mb-4">
          <Award size={32} />
          <div>
            <h2 className="text-2xl font-bold">
              {language === 'de' ? 'Dein Fortschritt' : 'Your Progress'}
            </h2>
            <p className="text-teal-100 text-sm">
              {stats.completed} {language === 'de' ? 'von' : 'of'} {stats.total} {language === 'de' ? 'Lektionen abgeschlossen' : 'lessons completed'}
            </p>
          </div>
        </div>
        
        {/* Progress Bar */}
        <div className="w-full bg-white/20 rounded-full h-6 overflow-hidden">
          <div
            className="bg-white h-6 flex items-center justify-center font-bold text-teal-600 transition-all duration-500"
            style={{ width: `${stats.percentage}%` }}
          >
            {stats.percentage > 10 && <span>{stats.percentage}%</span>}
          </div>
        </div>
        
        {stats.percentage === 100 && (
          <div className="mt-4 text-center text-xl font-bold animate-bounce">
            🎉 {language === 'de' ? 'Alle Lektionen abgeschlossen!' : 'All lessons completed!'} 🎉
          </div>
        )}
      </div>
      
      {categories.map(category => {
        const categoryLessons = translatedLessons.filter(l => l.category === category);
        const categoryCompleted = categoryLessons.filter(l => progress[l.id]?.completed).length;
        
        return (
          <div key={category} className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold text-stone-700 dark:text-stone-300 border-b-2 border-teal-500 pb-2">
                {category}
              </h2>
              <span className="text-sm text-stone-600 dark:text-stone-400 font-semibold">
                {categoryCompleted}/{categoryLessons.length}
              </span>
            </div>
            <div className="space-y-3">
              {categoryLessons.map(lesson => {
                const isComplete = progress[lesson.id]?.completed || false;
                
                return (
                  <div
                    key={lesson.id}
                    className={`relative bg-white dark:bg-stone-800 rounded-lg shadow-md transition-all ${
                      isComplete ? 'opacity-75' : ''
                    }`}
                  >
                    <button
                      onClick={() => onSelectLesson(lesson)}
                      className="w-full p-4 hover:shadow-lg transition-all text-left hover:bg-stone-50 dark:hover:bg-stone-700 hover:scale-[1.02] rounded-lg"
                    >
                      <div className="flex items-start gap-3">
                        <lesson.icon className="text-teal-500 flex-shrink-0 mt-1" size={24} />
                        <div className="flex-1">
                          <h3 className={`font-bold mb-1 ${
                            isComplete 
                              ? 'text-stone-600 dark:text-stone-400 line-through' 
                              : 'text-stone-800 dark:text-stone-100'
                          }`}>
                            {lesson.title}
                          </h3>
                          <p className="text-sm text-stone-600 dark:text-stone-400">{lesson.description}</p>
                        </div>
                        
                        {/* Checkbox */}
                        <button
                          onClick={(e) => toggleLessonComplete(e, lesson.id)}
                          className="flex-shrink-0 hover:scale-110 transition-transform"
                          title={isComplete 
                            ? (language === 'de' ? 'Als unvollständig markieren' : 'Mark as incomplete')
                            : (language === 'de' ? 'Als abgeschlossen markieren' : 'Mark as complete')
                          }
                        >
                          {isComplete ? (
                            <CheckCircle size={28} className="text-green-500" />
                          ) : (
                            <Circle size={28} className="text-stone-400 dark:text-stone-600" />
                          )}
                        </button>
                      </div>
                    </button>
                    
                    {isComplete && (
                      <div className="absolute top-2 right-2">
                        <span className="text-xs bg-green-500 text-white px-2 py-1 rounded font-semibold">
                          ✓
                        </span>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default LessonsPage;

