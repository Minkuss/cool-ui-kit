import { Theme } from '../types/theme';
import { colors, spacing, typography, borders } from './baseTheme';

export const lightTheme: Theme = {
  colors,
  spacing,
  typography,
  borders,
  mode: 'light',
};

export const darkTheme: Theme = {
  colors: {
    ...colors,
    primary: {
      50: '#0c4a6e',
      100: '#075985',
      200: '#0369a1',
      300: '#0284c7',
      400: '#0ea5e9',
      500: '#38bdf8',
      600: '#7dd3fc',
      700: '#bae6fd',
      800: '#e0f2fe',
      900: '#f0f9ff',
    },
    secondary: {
      50: '#1c1917',
      100: '#292524',
      200: '#44403c',
      300: '#57534e',
      400: '#78716c',
      500: '#a8a29e',
      600: '#d6d3d1',
      700: '#e7e5e4',
      800: '#f5f5f4',
      900: '#fafaf9',
    },
    white: '#000000',
    black: '#ffffff',
  },
  spacing,
  typography,
  borders,
  mode: 'dark',
};