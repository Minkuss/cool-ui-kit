export interface ColorPalette {
  50: string;
  100: string;
  200: string;
  300: string;
  400: string;
  500: string;
  600: string;
  700: string;
  800: string;
  900: string;
}

export interface SimpleColorPalette {
  50: string;
  500: string;
  700: string;
}

export interface Colors {
  primary: ColorPalette;
  secondary: ColorPalette;
  success: SimpleColorPalette;
  error: SimpleColorPalette;
  warning: SimpleColorPalette;
  info: SimpleColorPalette;
  white: string;
  black: string;
  transparent: string;
}

export interface Spacing {
  0: string;
  1: string;
  2: string;
  3: string;
  4: string;
  5: string;
  6: string;
  7: string;
  8: string;
  9: string;
  10: string;
  12: string;
  16: string;
  20: string;
  24: string;
  32: string;
}

export interface Typography {
  fontSize: {
    xs: string;
    sm: string;
    base: string;
    lg: string;
    xl: string;
    '2xl': string;
    '3xl': string;
    '4xl': string;
    '5xl': string;
    '6xl': string;
  };
  fontWeight: {
    thin: string;
    light: string;
    normal: string;
    medium: string;
    semibold: string;
    bold: string;
    extrabold: string;
    black: string;
  };
  lineHeight: {
    none: string;
    tight: string;
    snug: string;
    normal: string;
    relaxed: string;
    loose: string;
  };
  fontFamily: {
    sans: string[];
    mono: string[];
  };
}

export interface Borders {
  borderRadius: {
    none: string;
    sm: string;
    base: string;
    md: string;
    lg: string;
    xl: string;
    '2xl': string;
    '3xl': string;
    full: string;
  };
  borderWidth: {
    0: string;
    1: string;
    2: string;
    4: string;
    8: string;
  };
}

export interface Theme {
  colors: Colors;
  spacing: Spacing;
  typography: Typography;
  borders: Borders;
  mode: 'light' | 'dark';
}

export interface ThemeContextType {
  theme: Theme;
  toggleTheme?: () => void;
  setTheme?: (theme: Theme) => void;
}