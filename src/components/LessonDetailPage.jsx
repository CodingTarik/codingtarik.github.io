import React from 'react';
import { ChevronLeft, Save, Target } from 'lucide-react';
import LessonContent from './LessonContent';

function LessonDetailPage({ lesson, onBack, onSaveTask }) {
  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      {/* Back Button */}
      <button
        onClick={onBack}
        className="flex items-center gap-2 text-teal-500 hover:text-teal-600 mb-6 transition-colors"
      >
        <ChevronLeft size={20} />
        <span>Zurück zu Lektionen</span>
      </button>

      {/* Lesson Header */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <div className="flex items-start gap-4 mb-4">
          <lesson.icon className="text-teal-500 flex-shrink-0" size={32} />
          <div>
            <div className="text-sm text-stone-500 mb-1">{lesson.category}</div>
            <h1 className="text-2xl font-bold text-stone-800">{lesson.title}</h1>
          </div>
        </div>
      </div>

      {/* Lesson Content */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <LessonContent content={lesson.content} />
      </div>

      {/* Practical Task */}
      {lesson.task && (
        <div className="bg-gradient-to-br from-teal-50 to-orange-50 rounded-lg shadow-md p-6 border-2 border-teal-500">
          <h2 className="text-xl font-bold text-stone-800 mb-2 flex items-center gap-2">
            <Target className="text-teal-500" />
            {lesson.task.title}
          </h2>
          <p className="text-stone-700 mb-4 leading-relaxed">{lesson.task.description}</p>
          
          <div className="bg-white rounded-lg p-4 mb-4">
            <h3 className="font-semibold text-stone-800 mb-3">Worauf du achten musst:</h3>
            <ul className="space-y-2">
              {lesson.task.checklist.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2 text-stone-700">
                  <span className="text-teal-500 mt-1 font-bold">□</span>
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>
          </div>

          <button
            onClick={() => onSaveTask({
              lessonTitle: lesson.title,
              taskTitle: lesson.task.title,
              description: lesson.task.description,
              checklist: lesson.task.checklist.map(item => ({ ...item, checked: false }))
            })}
            className="w-full bg-teal-500 hover:bg-teal-600 text-white font-bold py-3 px-6 rounded-lg shadow-md transition-all transform hover:scale-[1.02] flex items-center justify-center gap-2"
          >
            <Save size={20} />
            Fürs Training speichern
          </button>
        </div>
      )}
    </div>
  );
}

export default LessonDetailPage;

