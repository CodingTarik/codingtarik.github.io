/**
 * Theme System - Dark / Light mode
 */

export type Theme = 'dark' | 'light';

const THEME_KEY = 'flashmaster-theme';

export function getTheme(): Theme {
  const saved = localStorage.getItem(THEME_KEY);
  if (saved === 'light' || saved === 'dark') return saved;
  // Check system preference
  if (window.matchMedia('(prefers-color-scheme: light)').matches) return 'light';
  return 'dark';
}

export function setTheme(theme: Theme): void {
  localStorage.setItem(THEME_KEY, theme);
  applyTheme(theme);
}

export function applyTheme(theme: Theme): void {
  const root = document.documentElement;
  if (theme === 'light') {
    root.classList.add('light');
    root.classList.remove('dark');
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', '#f8fafc');
  } else {
    root.classList.add('dark');
    root.classList.remove('light');
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', '#6366f1');
  }
}

export function toggleTheme(): Theme {
  const current = getTheme();
  const next: Theme = current === 'dark' ? 'light' : 'dark';
  setTheme(next);
  return next;
}
