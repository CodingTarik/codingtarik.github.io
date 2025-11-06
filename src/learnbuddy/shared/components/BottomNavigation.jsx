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

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white dark:bg-stone-900 border-t border-stone-200 dark:border-stone-700 shadow-lg z-50">
      <div className="flex justify-around items-center h-16 max-w-2xl mx-auto">
        {navItems.map(item => {
          const isActive = currentPage === item.id || 
                          (item.id.startsWith('custom-') && currentPage === item.id);
          
          return (
            <button
              key={item.id}
              onClick={() => setCurrentPage(item.id)}
              className={`flex flex-col items-center justify-center w-full h-full transition-colors ${
                isActive
                  ? 'text-teal-500 dark:text-teal-400' 
                  : 'text-stone-600 dark:text-stone-400'
              }`}
            >
              <item.icon size={24} />
              <span className="text-xs mt-1">{item.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}

export default BottomNavigation;

