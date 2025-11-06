import React, { useState, useEffect } from 'react';
import { ListTodo, Trash2 } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { useBuddy } from '../../context/BuddyContext';

function PlanPage({ savedItems, onUpdateItem, onDeleteItem }) {
  const { language } = useLanguage();
  const { currentBuddyConfig } = useBuddy();
  
  // Guard against undefined prop and initialize state
  const [items, setItems] = useState(savedItems || []);

  useEffect(() => {
    setItems(savedItems || []);
  }, [savedItems]);

  const handleToggle = (itemId, checklistIndex) => {
    const updatedItems = items.map(item => {
      if (item.id === itemId) {
        const updatedChecklist = item.checklist.map((checkItem, index) => {
          if (index === checklistIndex) {
            return { ...checkItem, checked: !checkItem.checked };
          }
          return checkItem;
        });
        return { ...item, checklist: updatedChecklist };
      }
      return item;
    });
    setItems(updatedItems);
    const modifiedItem = updatedItems.find(i => i.id === itemId);
    if(modifiedItem) {
        onUpdateItem(itemId, modifiedItem);
    }
  };

  const translations = currentBuddyConfig.planTranslations[language];

  if (!items || items.length === 0) {
    return (
      <div>{/* Padding handled by App.jsx */}
        <h1 className="text-3xl font-bold text-stone-800 dark:text-stone-100 mb-6 flex items-center gap-2">
          <ListTodo className="text-teal-500" />
          {translations.title}
        </h1>
        <div className="bg-white dark:bg-stone-800 rounded-lg shadow-md p-12 text-center">
          <ListTodo size={64} className="mx-auto mb-4 text-stone-300 dark:text-stone-600" />
          <p className="text-stone-600 dark:text-stone-400 text-lg mb-4">
            {translations.emptyMessage}
          </p>
          <p className="text-sm text-stone-500 dark:text-stone-500 bg-stone-100 dark:bg-stone-900/50 rounded-lg p-3 inline-block">
            {translations.emptyTip}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div>{/* Padding handled by App.jsx */}
      <h1 className="text-3xl font-bold text-stone-800 dark:text-stone-100 mb-6 flex items-center gap-2">
        <ListTodo className="text-teal-500" />
        {translations.title}
      </h1>

      <div className="space-y-4">
        {items.map((item) => {
          const totalChecks = item.checklist?.length || 0;
          const completedChecks = item.checklist?.filter(checkItem => checkItem.checked).length || 0;
          const progress = totalChecks > 0 ? (completedChecks / totalChecks) * 100 : 0;

          return (
            <div key={item.id} className="bg-white dark:bg-stone-800 rounded-lg shadow-md p-5">
              <div className="flex justify-between items-start">
                <div>
                  <div className="text-xs text-stone-500 dark:text-stone-400 mb-1">
                    {language === 'en' ? 'From lesson' : 'Aus Lektion'}: {item.lessonTitle}
                  </div>
                  <h3 className="text-lg font-bold text-stone-800 dark:text-stone-100 mb-2">
                    {item.taskTitle}
                  </h3>
                </div>
                <button
                  onClick={() => onDeleteItem(item.id)}
                  className="text-stone-400 hover:text-red-500 p-2 rounded-full transition-colors"
                  title={language === 'en' ? 'Delete' : 'Löschen'}
                >
                  <Trash2 size={20} />
                </button>
              </div>
              <p className="text-stone-600 dark:text-stone-400 mb-4">{item.description}</p>
              
              {item.checklist && item.checklist.length > 0 && (
                <>
                  <div className="bg-stone-50 dark:bg-stone-900 rounded-lg p-4 mb-4">
                    <h4 className="font-semibold text-stone-800 dark:text-stone-100 mb-2">
                      {language === 'en' ? 'Watch for' : 'Worauf du achten musst'}:
                    </h4>
                    <ul className="space-y-2">
                      {item.checklist.map((checkItem, index) => (
                        <li key={index} className="flex items-center gap-3">
                          <input
                            type="checkbox"
                            checked={checkItem.checked || false}
                            onChange={() => handleToggle(item.id, index)}
                            className="w-5 h-5 text-teal-500 rounded focus:ring-teal-500 cursor-pointer"
                          />
                          <span className={`text-stone-700 dark:text-stone-300 ${checkItem.checked ? 'line-through text-stone-500' : ''}`}>
                            {checkItem.text}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Progress Bar */}
                  <div>
                    <div className="flex justify-between items-center text-sm mb-1">
                      <span className="font-semibold text-stone-600 dark:text-stone-400">
                        {language === 'en' ? 'Progress' : 'Fortschritt'}
                      </span>
                      <span className="text-stone-500 dark:text-stone-500">
                        {completedChecks} / {totalChecks} {language === 'en' ? 'tasks' : 'Aufgaben'}
                      </span>
                    </div>
                    <div className="w-full bg-stone-200 dark:bg-stone-700 rounded-full h-4">
                      <div 
                        className="bg-teal-500 h-4 rounded-full transition-all duration-500"
                        style={{width: `${progress}%`}}
                      />
                    </div>
                  </div>
                </>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default PlanPage;

