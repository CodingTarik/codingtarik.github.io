import React from 'react';
import { ListTodo, Target, X } from 'lucide-react';

function TrainingPlanPage({ tasks, onRemoveTask, onToggleChecklistItem }) {
  if (tasks.length === 0) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-stone-800 mb-6 flex items-center gap-2">
          <ListTodo className="text-teal-500" />
          Mein nächstes Training
        </h1>
        <div className="bg-white rounded-lg shadow-md p-12 text-center">
          <Target size={64} className="mx-auto mb-4 text-stone-300" />
          <p className="text-stone-600 text-lg mb-4">
            Speichere Aufgaben aus den Lektionen, um dein Training zu planen!
          </p>
          <p className="text-stone-500 text-sm">
            💡 Tipp: Jede Lektion enthält praktische Übungen, die du speichern kannst.
          </p>
        </div>
      </div>
    );
  }

  const completedCount = tasks.reduce((sum, task) => 
    sum + task.checklist.filter(item => item.checked).length, 0
  );
  const totalCount = tasks.reduce((sum, task) => sum + task.checklist.length, 0);
  const overallProgress = Math.round((completedCount / totalCount) * 100);

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-stone-800 mb-6 flex items-center gap-2">
        <ListTodo className="text-teal-500" />
        Mein nächstes Training
      </h1>

      {/* Stats Card */}
      <div className="mb-6 bg-gradient-to-br from-teal-50 to-orange-50 rounded-lg p-6 border-2 border-teal-300 shadow-md">
        <div className="grid grid-cols-3 gap-4 text-center">
          <div>
            <div className="text-3xl font-bold text-teal-600">{tasks.length}</div>
            <div className="text-sm text-stone-600">Aufgaben</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-orange-600">{completedCount}/{totalCount}</div>
            <div className="text-sm text-stone-600">Checkboxen</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-teal-600">{overallProgress}%</div>
            <div className="text-sm text-stone-600">Fortschritt</div>
          </div>
        </div>
        <div className="mt-4">
          <div className="w-full bg-white rounded-full h-3 shadow-inner">
            <div
              className="bg-gradient-to-r from-teal-500 to-orange-500 h-3 rounded-full transition-all duration-500"
              style={{ width: `${overallProgress}%` }}
            />
          </div>
        </div>
      </div>

      {/* Task Cards */}
      <div className="space-y-4">
        {tasks.map(task => {
          const taskProgress = (task.checklist.filter(i => i.checked).length / task.checklist.length) * 100;
          
          return (
            <div key={task.id} className="bg-white rounded-lg shadow-md p-5 relative hover:shadow-lg transition-shadow">
              {/* Remove Button */}
              <button
                onClick={() => onRemoveTask(task.id)}
                className="absolute top-3 right-3 text-stone-400 hover:text-red-500 hover:bg-red-50 p-2 rounded-full transition-all"
                title="Aufgabe löschen"
              >
                <X size={20} />
              </button>

              {/* Task Header */}
              <div className="mb-3 pr-10">
                <div className="text-xs text-teal-600 font-semibold mb-1 uppercase tracking-wide">
                  📚 Aus Lektion: {task.lessonTitle}
                </div>
                <h3 className="text-lg font-bold text-stone-800">{task.taskTitle}</h3>
                <p className="text-sm text-stone-600 mt-1">{task.description}</p>
              </div>

              {/* Checklist */}
              <div className="bg-stone-50 rounded-lg p-4 mb-3">
                <h4 className="font-semibold text-stone-700 mb-3 text-sm flex items-center gap-2">
                  <Target size={16} className="text-teal-500" />
                  Worauf achten:
                </h4>
                <div className="space-y-2">
                  {task.checklist.map((item, idx) => (
                    <label key={idx} className="flex items-start gap-3 cursor-pointer group hover:bg-white p-2 rounded transition-colors">
                      <input
                        type="checkbox"
                        checked={item.checked || false}
                        onChange={() => onToggleChecklistItem(task.id, idx)}
                        className="mt-1 w-5 h-5 text-teal-500 rounded focus:ring-teal-500 cursor-pointer"
                      />
                      <span className={`text-sm transition-all ${
                        item.checked 
                          ? 'line-through text-stone-400' 
                          : 'text-stone-700 group-hover:text-stone-900'
                      }`}>
                        {item.text}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Progress Bar */}
              <div className="flex items-center gap-3">
                <div className="flex-1 bg-stone-200 rounded-full h-2 shadow-inner">
                  <div
                    className="bg-gradient-to-r from-teal-500 to-orange-500 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${taskProgress}%` }}
                  />
                </div>
                <span className="text-sm text-stone-600 font-semibold min-w-[50px] text-right">
                  {task.checklist.filter(i => i.checked).length}/{task.checklist.length}
                </span>
              </div>

              {/* Completion Badge */}
              {taskProgress === 100 && (
                <div className="mt-3 bg-teal-100 border border-teal-300 rounded-lg p-2 text-center">
                  <span className="text-teal-700 font-semibold text-sm">
                    ✅ Aufgabe abgeschlossen! Klicke auf X zum Entfernen.
                  </span>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default TrainingPlanPage;

