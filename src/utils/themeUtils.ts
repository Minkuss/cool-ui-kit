import { Theme } from '../types/theme';

export const getColorValue = (theme: Theme, color: string): string => {
  const colorParts = color.split('.');
  let value: any = theme.colors;

  for (const part of colorParts) {
    if (value && typeof value === 'object' && part in value) {
      value = value[part];
    } else {
      return color; // Возвращаем исходное значение, если путь не найден
    }
  }

  return typeof value === 'string' ? value : color;
};

export const getSpacingValue = (theme: Theme, spacing: string): string => {
  if (spacing in theme.spacing) {
    return theme.spacing[spacing as keyof typeof theme.spacing];
  }
  return spacing;
};

export const getFontSizeValue = (theme: Theme, fontSize: string): string => {
  if (fontSize in theme.typography.fontSize) {
    return theme.typography.fontSize[fontSize as keyof typeof theme.typography.fontSize];
  }
  return fontSize;
};

export const getBorderRadiusValue = (theme: Theme, borderRadius: string): string => {
  if (borderRadius in theme.borders.borderRadius) {
    return theme.borders.borderRadius[borderRadius as keyof typeof theme.borders.borderRadius];
  }
  return borderRadius;
};