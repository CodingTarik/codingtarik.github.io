import React, { useState, useEffect } from 'react';
import { ChevronLeft, Save, Target, CheckCircle, ArrowRight } from 'lucide-react';
import LessonContent from './LessonContent';
import Quiz from './Quiz';
import { useLanguage } from '../../context/LanguageContext';
import { isLessonComplete, markLessonComplete, markLessonIncomplete } from '../../utils/sessionStorage';

function LessonDetailPage({ lesson, onBack, onSaveTask, onGoToNextLesson }) {
  const { language, t } = useLanguage();
  
  // Get translated content
  const title = lesson.title?.[language] || lesson.title?.en || lesson.title;
  const description = lesson.description?.[language] || lesson.description?.en || lesson.description;
  const content = lesson.content?.[language] || lesson.content?.en || lesson.content;
  const task = lesson.task?.[language] || lesson.task?.en || lesson.task;
  const quiz = lesson.quiz?.[language] || lesson.quiz?.en || lesson.quiz;
  const categoryTitle = lesson.categoryTitle?.[language] || lesson.categoryTitle?.en || lesson.category;
  
  const [isComplete, setIsComplete] = useState(false);

  // Scroll to top when lesson changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [lesson.id]);

  useEffect(() => {
    setIsComplete(isLessonComplete(lesson.id));
  }, [lesson.id]);

  const toggleComplete = () => {
    if (isComplete) {
      markLessonIncomplete(lesson.id);
      setIsComplete(false);
    } else {
      markLessonComplete(lesson.id);
      setIsComplete(true);
    }
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      {/* Back Button */}
      <button
        onClick={onBack}
        className="flex items-center gap-2 text-teal-500 hover:text-teal-600 mb-6 transition-colors"
      >
        <ChevronLeft size={20} />
        <span>{t('backToLessons')}</span>
      </button>

      {/* Lesson Header */}
      <div className="bg-white dark:bg-stone-800 rounded-lg shadow-md p-6 mb-6">
        <div className="text-sm text-stone-500 dark:text-stone-400 mb-1">{categoryTitle}</div>
        <h1 className="text-2xl font-bold text-stone-800 dark:text-stone-100">{title}</h1>
      </div>

      {/* Lesson Content */}
      <div className="bg-white dark:bg-stone-800 rounded-lg shadow-md p-6 mb-6">
        <LessonContent 
          content={content} 
          components={lesson.components} 
        />
        
        {/* Interactive Section (if exists) */}
        {lesson.interactiveSection && (
          <div className="mt-8">
            <h2 className="text-2xl font-bold text-stone-800 dark:text-stone-100 mb-6">
              🎮 {language === 'de' ? 'Interaktive Übungen: Lass uns spielen!' : 'Interactive Practice: Let\'s Play!'}
            </h2>
            <lesson.interactiveSection />
          </div>
        )}
        
        {/* Content after games (if exists) */}
        {lesson.contentAfterGames && (
          <div className="mt-8">
            <LessonContent content={lesson.contentAfterGames} />
          </div>
        )}
      </div>

      {/* Practical Task */}
      {task && (
        <div className="bg-gradient-to-br from-teal-50 to-orange-50 dark:from-teal-900/20 dark:to-orange-900/20 rounded-lg shadow-md p-6 border-2 border-teal-500 dark:border-teal-700">
          <h2 className="text-xl font-bold text-stone-800 dark:text-stone-100 mb-2 flex items-center gap-2">
            <Target className="text-teal-500" />
            {task.title}
          </h2>
          <p className="text-stone-700 dark:text-stone-300 mb-4 leading-relaxed">{task.description}</p>
          
          <div className="bg-white dark:bg-stone-800 rounded-lg p-4 mb-4">
            <h3 className="font-semibold text-stone-800 dark:text-stone-100 mb-3">{t('whatToWatch')}</h3>
            <ul className="space-y-2">
              {task.checklist.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2 text-stone-700 dark:text-stone-300">
                  <span className="text-teal-500 mt-1 font-bold">□</span>
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>
          </div>

          <button
            onClick={() => onSaveTask({
              lessonTitle: title,
              taskTitle: task.title,
              description: task.description,
              checklist: task.checklist.map(item => ({ ...item, checked: false }))
            })}
            className="w-full bg-teal-500 hover:bg-teal-600 text-white font-bold py-3 px-6 rounded-lg shadow-md transition-all transform hover:scale-[1.02] flex items-center justify-center gap-2"
          >
            <Save size={20} />
            {t('saveForTraining')}
          </button>
        </div>
      )}

      {/* Quiz Section */}
      {quiz && <Quiz questions={quiz} />}

      {/* Mark as Complete Button */}
      <div className="mt-8">
        <button
          onClick={toggleComplete}
          className={`w-full flex items-center justify-center gap-2 px-6 py-4 rounded-lg font-bold text-lg shadow-md transition-all transform hover:scale-[1.02] ${
            isComplete
              ? 'bg-green-500 hover:bg-green-600 text-white'
              : 'bg-stone-200 dark:bg-stone-700 hover:bg-stone-300 dark:hover:bg-stone-600 text-stone-800 dark:text-stone-100'
          }`}
        >
          <CheckCircle size={24} />
          {isComplete 
            ? (language === 'de' ? '✓ Lektion abgeschlossen' : '✓ Lesson completed')
            : (language === 'de' ? 'Als gelesen markieren' : 'Mark as read')
          }
        </button>
      </div>

      {/* Go to Next Lesson Button */}
      {onGoToNextLesson && (
        <div className="mt-4 text-center">
          <button
            onClick={onGoToNextLesson}
            className="w-full md:w-auto bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-lg shadow-md transition-all transform hover:scale-105 flex items-center justify-center gap-2"
          >
            <span>{t('nextLesson')}</span>
            <ArrowRight size={20} />
          </button>
        </div>
      )}
    </div>
  );
}

export default LessonDetailPage;

