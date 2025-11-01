import React from 'react';
import { BookOpen } from 'lucide-react';

function LessonsPage({ lessons, onSelectLesson }) {
  const categories = [...new Set(lessons.map(l => l.category))];

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-stone-800 mb-6 flex items-center gap-2">
        <BookOpen className="text-teal-500" />
        Boulder-Lektionen
      </h1>
      
      {categories.map(category => (
        <div key={category} className="mb-8">
          <h2 className="text-xl font-bold text-stone-700 mb-4 border-b-2 border-teal-500 pb-2">
            {category}
          </h2>
          <div className="space-y-3">
            {lessons.filter(l => l.category === category).map(lesson => (
              <button
                key={lesson.id}
                onClick={() => onSelectLesson(lesson)}
                className="w-full bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-all text-left hover:bg-stone-50 hover:scale-[1.02]"
              >
                <div className="flex items-start gap-3">
                  <lesson.icon className="text-teal-500 flex-shrink-0 mt-1" size={24} />
                  <div className="flex-1">
                    <h3 className="font-bold text-stone-800 mb-1">{lesson.title}</h3>
                    <p className="text-sm text-stone-600">{lesson.description}</p>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default LessonsPage;

