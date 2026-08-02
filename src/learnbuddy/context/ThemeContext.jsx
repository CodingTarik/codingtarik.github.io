import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [isDark, setIsDark] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    // Check localStorage on mount
    try {
      const saved = localStorage.getItem('boulderBuddyTheme');
      if (saved === 'dark') {
        setIsDark(true);
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    } catch (e) {
      console.warn('LocalStorage not available:', e);
    }
    setIsInitialized(true);
  }, []);

  const toggleTheme = () => {
    const newIsDark = !isDark;
    setIsDark(newIsDark);

    try {
      if (newIsDark) {
        document.documentElement.classList.add('dark');
        localStorage.setItem('boulderBuddyTheme', 'dark');
      } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('boulderBuddyTheme', 'light');
      }
    } catch (e) {
      console.warn('Could not save theme to localStorage:', e);
      // Still apply class even if saving fails
      if (newIsDark) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    }
  };

  // Don't render until initialized to prevent flash
  if (!isInitialized) {
    return null;
  }

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
}

