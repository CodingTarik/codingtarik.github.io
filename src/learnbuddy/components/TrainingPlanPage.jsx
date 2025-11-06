import React, { useState, useEffect } from 'react';
import { ListTodo, Trash2, Check, X } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

function TrainingPlanPage({ savedTasks, onUpdateTask, onDeleteTask }) {
  const { t } = useLanguage();
  
  // Guard against undefined prop and initialize state
  const [tasks, setTasks] = useState(savedTasks || []);

  useEffect(() => {
    setTasks(savedTasks || []);
  }, [savedTasks]);

  const handleToggle = (taskId, checklistIndex) => {
    const updatedTasks = tasks.map(task => {
      if (task.id === taskId) {
        const updatedChecklist = task.checklist.map((item, index) => {
          if (index === checklistIndex) {
            return { ...item, checked: !item.checked };
          }
          return item;
        });
        return { ...task, checklist: updatedChecklist };
      }
      return task;
    });
    setTasks(updatedTasks);
    // We call onUpdateTask with the original task id and the modified task
    const modifiedTask = updatedTasks.find(t => t.id === taskId);
    if(modifiedTask) {
        onUpdateTask(taskId, modifiedTask);
    }
  };

  if (!tasks || tasks.length === 0) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-stone-800 dark:text-stone-100 mb-6 flex items-center gap-2">
          <ListTodo className="text-teal-500" />
          {t('myNextTraining')}
        </h1>
        <div className="bg-white dark:bg-stone-800 rounded-lg shadow-md p-12 text-center">
          <ListTodo size={64} className="mx-auto mb-4 text-stone-300 dark:text-stone-600" />
          <p className="text-stone-600 dark:text-stone-400 text-lg mb-4">
            {t('noTasksSaved')}
          </p>
          <p className="text-sm text-stone-500 dark:text-stone-500 bg-stone-100 dark:bg-stone-900/50 rounded-lg p-3 inline-block">
            💡 {t('trainingPlanTip')}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-stone-800 dark:text-stone-100 mb-6 flex items-center gap-2">
        <ListTodo className="text-teal-500" />
        {t('myNextTraining')}
      </h1>

      <div className="space-y-4">
        {tasks.map((task) => {
          const totalChecks = task.checklist.length;
          const completedChecks = task.checklist.filter(item => item.checked).length;
          const progress = totalChecks > 0 ? (completedChecks / totalChecks) * 100 : 0;

          return (
            <div key={task.id} className="bg-white dark:bg-stone-800 rounded-lg shadow-md p-5">
              <div className="flex justify-between items-start">
                <div>
                  <div className="text-xs text-stone-500 dark:text-stone-400 mb-1">
                    {t('fromLesson')}: {task.lessonTitle}
                  </div>
                  <h3 className="text-lg font-bold text-stone-800 dark:text-stone-100 mb-2">
                    {task.taskTitle}
                  </h3>
                </div>
                <button
                  onClick={() => onDeleteTask(task.id)}
                  className="text-stone-400 hover:text-red-500 p-2 rounded-full transition-colors"
                  title={t('delete')}
                >
                  <Trash2 size={20} />
                </button>
              </div>
              <p className="text-stone-600 dark:text-stone-400 mb-4">{task.description}</p>
              
              <div className="bg-stone-50 dark:bg-stone-900 rounded-lg p-4 mb-4">
                <h4 className="font-semibold text-stone-800 dark:text-stone-100 mb-2">{t('watchFor')}:</h4>
                <ul className="space-y-2">
                  {task.checklist.map((item, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <input
                        type="checkbox"
                        checked={item.checked || false}
                        onChange={() => handleToggle(task.id, index)}
                        className="w-5 h-5 text-teal-500 rounded focus:ring-teal-500 cursor-pointer"
                      />
                      <span className={`text-stone-700 dark:text-stone-300 ${item.checked ? 'line-through text-stone-500' : ''}`}>
                        {item.text}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Progress Bar */}
              <div>
                <div className="flex justify-between items-center text-sm mb-1">
                  <span className="font-semibold text-stone-600 dark:text-stone-400">{t('progress')}</span>
                  <span className="text-stone-500 dark:text-stone-500">{completedChecks} / {totalChecks} {t('tasks')}</span>
                </div>
                <div className="w-full bg-stone-200 dark:bg-stone-700 rounded-full h-4">
                  <div 
                    className="bg-teal-500 h-4 rounded-full transition-all duration-500"
                    style={{width: `${progress}%`}}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default TrainingPlanPage;

