import { useState, useEffect } from 'react';
import { Theme } from '@/types/theme';
import { lightTheme, darkTheme } from '@/theme/themes';

const THEME_STORAGE_KEY = 'ui-kit-theme';

export const useThemeStorage = () => {
  const [storedTheme, setStoredTheme] = useState<Theme | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(THEME_STORAGE_KEY);
      if (saved) {
        const themeMode = JSON.parse(saved);
        setStoredTheme(themeMode === 'dark' ? darkTheme : lightTheme);
      }
    } catch (error) {
      console.warn('Failed to load theme from localStorage:', error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const saveTheme = (theme: Theme) => {
    try {
      localStorage.setItem(THEME_STORAGE_KEY, JSON.stringify(theme.mode));
      setStoredTheme(theme);
    } catch (error) {
      console.warn('Failed to save theme to localStorage:', error);
    }
  };

  return {
    storedTheme,
    saveTheme,
    isLoading,
  };
};
