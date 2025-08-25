import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Theme, ThemeContextType } from '@/types/theme';
import { lightTheme, darkTheme } from './themes';

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export interface ThemeProviderProps {
  children: ReactNode;
  theme?: Theme;
  defaultTheme?: 'light' | 'dark';
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ 
  children, 
  theme: initialTheme,
  defaultTheme = 'light'
}) => {
  const [theme, setTheme] = useState<Theme>(
    initialTheme || (defaultTheme === 'dark' ? darkTheme : lightTheme)
  );

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme.mode === 'light' ? darkTheme : lightTheme);
  };

  const value: ThemeContextType = {
    theme,
    toggleTheme,
    setTheme,
  };

  return (
    <ThemeContext.Provider value={value}>
      <div
        style={{
          backgroundColor: theme.mode === 'light' ? theme.colors.white : theme.colors.black,
          color: theme.mode === 'light' ? theme.colors.black : theme.colors.white,
          fontFamily: theme.typography.fontFamily.sans.join(', '),
          fontSize: theme.typography.fontSize.base,
          lineHeight: theme.typography.lineHeight.normal,
          minHeight: '100%',
        }}
      >
        {children}
      </div>
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
