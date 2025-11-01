import React from 'react';
import { Home, BookOpen, ListTodo, Dumbbell, Settings } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

function BottomNavigation({ currentPage, setCurrentPage }) {
  const { t } = useLanguage();
  
  const navItems = [
    { id: 'home', icon: Home, label: t('home') },
    { id: 'lektionen', icon: BookOpen, label: t('lessons') },
    { id: 'training', icon: Dumbbell, label: t('training') },
    { id: 'plan', icon: ListTodo, label: t('plan') },
    { id: 'settings', icon: Settings, label: '⚙️' },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white dark:bg-stone-900 border-t border-stone-200 dark:border-stone-700 shadow-lg z-50">
      <div className="flex justify-around items-center h-16 max-w-2xl mx-auto">
        {navItems.map(item => (
          <button
            key={item.id}
            onClick={() => setCurrentPage(item.id)}
            className={`flex flex-col items-center justify-center w-full h-full transition-colors ${
              currentPage === item.id 
                ? 'text-teal-500 dark:text-teal-400' 
                : 'text-stone-600 dark:text-stone-400'
            }`}
          >
            <item.icon size={24} />
            <span className="text-xs mt-1">{item.label}</span>
          </button>
        ))}
      </div>
    </nav>
  );
}

export default BottomNavigation;

