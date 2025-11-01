import React, { useState, useEffect } from 'react';
import { ChevronLeft, Save, Target, CheckCircle } from 'lucide-react';
import LessonContent from './LessonContent';
import { useLanguage } from '../context/LanguageContext';
import { getTranslatedLesson, categoryTranslations } from '../data/lessonTranslations';
import { isLessonComplete, markLessonComplete, markLessonIncomplete } from '../utils/sessionStorage';

function LessonDetailPage({ lesson, onBack, onSaveTask }) {
  const { language, t } = useLanguage();
  const translatedLesson = getTranslatedLesson(lesson, language);
  const categoryTitle = categoryTranslations[lesson.category]?.[language] || categoryTranslations[lesson.category]?.en;
  const [isComplete, setIsComplete] = useState(false);

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
        <div className="flex items-start justify-between gap-4 mb-4">
          <div className="flex items-start gap-4">
            {/* Icon removed */}
            <div>
              <div className="text-sm text-stone-500 dark:text-stone-400 mb-1">{categoryTitle}</div>
              <h1 className="text-2xl font-bold text-stone-800 dark:text-stone-100">{translatedLesson.title}</h1>
            </div>
          </div>
          
          {/* Complete Button */}
          <button
            onClick={toggleComplete}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg font-semibold transition-all ${
              isComplete
                ? 'bg-green-500 hover:bg-green-600 text-white'
                : 'bg-stone-200 dark:bg-stone-700 hover:bg-stone-300 dark:hover:bg-stone-600 text-stone-800 dark:text-stone-100'
            }`}
          >
            <CheckCircle size={20} />
            {isComplete 
              ? (language === 'de' ? 'Abgeschlossen' : 'Completed')
              : (language === 'de' ? 'Als gelesen markieren' : 'Mark as read')
            }
          </button>
        </div>
      </div>

      {/* Lesson Content */}
      <div className="bg-white dark:bg-stone-800 rounded-lg shadow-md p-6 mb-6">
        <LessonContent content={translatedLesson.content} />
      </div>

      {/* Practical Task */}
      {translatedLesson.task && (
        <div className="bg-gradient-to-br from-teal-50 to-orange-50 dark:from-teal-900/20 dark:to-orange-900/20 rounded-lg shadow-md p-6 border-2 border-teal-500 dark:border-teal-700">
          <h2 className="text-xl font-bold text-stone-800 dark:text-stone-100 mb-2 flex items-center gap-2">
            <Target className="text-teal-500" />
            {translatedLesson.task.title}
          </h2>
          <p className="text-stone-700 dark:text-stone-300 mb-4 leading-relaxed">{translatedLesson.task.description}</p>
          
          <div className="bg-white dark:bg-stone-800 rounded-lg p-4 mb-4">
            <h3 className="font-semibold text-stone-800 dark:text-stone-100 mb-3">{t('whatToWatch')}</h3>
            <ul className="space-y-2">
              {translatedLesson.task.checklist.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2 text-stone-700 dark:text-stone-300">
                  <span className="text-teal-500 mt-1 font-bold">□</span>
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>
          </div>

          <button
            onClick={() => onSaveTask({
              lessonTitle: translatedLesson.title,
              taskTitle: translatedLesson.task.title,
              description: translatedLesson.task.description,
              checklist: translatedLesson.task.checklist.map(item => ({ ...item, checked: false }))
            })}
            className="w-full bg-teal-500 hover:bg-teal-600 text-white font-bold py-3 px-6 rounded-lg shadow-md transition-all transform hover:scale-[1.02] flex items-center justify-center gap-2"
          >
            <Save size={20} />
            {t('saveForTraining')}
          </button>
        </div>
      )}
    </div>
  );
}

export default LessonDetailPage;

