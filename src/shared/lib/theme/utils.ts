import { Theme } from './types';
import { THEME_STORAGE_KEY, DEFAULT_THEME } from './constants';

export const getStoredTheme = (): Theme => {
  if (typeof window === 'undefined') {
    return DEFAULT_THEME;
  }

  const stored = localStorage.getItem(THEME_STORAGE_KEY);
  return (stored as Theme) || DEFAULT_THEME;
};

export const setStoredTheme = (theme: Theme): void => {
  if (typeof window === 'undefined') {
    return;
  }

  localStorage.setItem(THEME_STORAGE_KEY, theme);
};

export const applyTheme = (theme: Theme): void => {
  if (typeof window === 'undefined') {
    return;
  }

  const root = document.documentElement;
  
  if (theme === 'dark') {
    root.classList.add('dark');
  } else {
    root.classList.remove('dark');
  }
};