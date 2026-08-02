import React from 'react';
import { Home, BookOpen, ListTodo } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { useBuddy } from '../../context/BuddyContext';

function BottomNavigation({ currentPage, setCurrentPage }) {
  const { language } = useLanguage();
  const { currentBuddyConfig } = useBuddy();

  // Build navigation items: shared tabs + buddy-specific tabs
  const navItems = [
    {
      id: 'home',
      icon: Home,
      label: language === 'en' ? 'Home' : 'Home'
    }
  ];

  // Add Lessons tab if buddy has lessons or doesn't explicitly hide it
  if (!currentBuddyConfig.hideLessonsTab) {
    navItems.push({
      id: 'lektionen',
      icon: BookOpen,
      label: currentBuddyConfig.lessonsTabName?.[language] || (language === 'en' ? 'Lessons' : 'Lektionen')
    });
  }

  // Add Plan tab unless buddy explicitly hides it
  if (!currentBuddyConfig.hidePlanTab) {
    navItems.push({
      id: 'plan',
      icon: ListTodo,
      label: language === 'en' ? 'Plan' : 'Plan'
    });
  }

  // Add buddy-specific custom tabs
  if (currentBuddyConfig.customTabs) {
    currentBuddyConfig.customTabs.forEach(tab => {
      navItems.push({
        id: `custom-${tab.id}`,
        icon: tab.icon,
        label: tab.name[language]
      });
    });
  }

  const hasOverflow = navItems.length > 5;

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white dark:bg-stone-900 border-t border-stone-200 dark:border-stone-700 shadow-lg z-50 safe-area-bottom">
      <div className={`flex items-center h-14 sm:h-16 max-w-2xl mx-auto px-1 sm:px-4 ${hasOverflow ? 'overflow-x-auto scrollbar-none justify-start sm:justify-center gap-1 sm:gap-4' : 'justify-around'}`}>
        {navItems.map(item => {
          const isActive = currentPage === item.id ||
            (item.id.startsWith('custom-') && currentPage === item.id);

          return (
            <button
              key={item.id}
              onClick={() => setCurrentPage(item.id)}
              className={`flex flex-col items-center justify-center ${hasOverflow ? 'min-w-[4rem] px-2' : 'w-full'} h-full transition-colors shrink-0 ${isActive
                ? 'text-teal-500 dark:text-teal-400'
                : 'text-stone-600 dark:text-stone-400'
                }`}
            >
              <item.icon size={hasOverflow ? 18 : 20} className="sm:w-6 sm:h-6" />
              <span className={`mt-0.5 sm:mt-1 truncate max-w-[4rem] sm:max-w-none ${hasOverflow ? 'text-[10px]' : 'text-[11px] sm:text-xs'}`}>{item.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}

export default BottomNavigation;

