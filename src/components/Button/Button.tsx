import React, { forwardRef } from 'react';
import { useTheme } from '@/theme/ThemeProvider';
import { getColorValue, getSpacingValue, getBorderRadiusValue } from '@/utils/themeUtils';
import clsx from 'clsx';

export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'link';
export type ButtonSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export type ButtonColor = 'primary' | 'secondary' | 'success' | 'error' | 'warning' | 'info';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  color?: ButtonColor;
  fullWidth?: boolean;
  loading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  children: React.ReactNode;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(({
  variant = 'primary',
  size = 'md',
  color = 'primary',
  fullWidth = false,
  loading = false,
  leftIcon,
  rightIcon,
  children,
  className,
  disabled,
  style,
  ...rest
}, ref) => {
  const { theme } = useTheme();

  const getButtonStyles = (): React.CSSProperties => {
    const baseStyles: React.CSSProperties = {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      border: 'none',
      cursor: disabled || loading ? 'not-allowed' : 'pointer',
      fontFamily: theme.typography.fontFamily.sans.join(', '),
      fontWeight: theme.typography.fontWeight.medium,
      transition: 'all 0.2s ease-in-out',
      position: 'relative',
      textDecoration: 'none',
      gap: getSpacingValue(theme, '2'),
      width: fullWidth ? '100%' : 'auto',
      opacity: disabled || loading ? 0.6 : 1,
    };

    // Size styles
    const sizeStyles: Record<ButtonSize, React.CSSProperties> = {
      xs: {
        padding: `${getSpacingValue(theme, '1')} ${getSpacingValue(theme, '2')}`,
        fontSize: theme.typography.fontSize.xs,
        borderRadius: getBorderRadiusValue(theme, 'sm'),
        minHeight: '24px',
      },
      sm: {
        padding: `${getSpacingValue(theme, '2')} ${getSpacingValue(theme, '3')}`,
        fontSize: theme.typography.fontSize.sm,
        borderRadius: getBorderRadiusValue(theme, 'md'),
        minHeight: '32px',
      },
      md: {
        padding: `${getSpacingValue(theme, '3')} ${getSpacingValue(theme, '4')}`,
        fontSize: theme.typography.fontSize.base,
        borderRadius: getBorderRadiusValue(theme, 'md'),
        minHeight: '40px',
      },
      lg: {
        padding: `${getSpacingValue(theme, '4')} ${getSpacingValue(theme, '6')}`,
        fontSize: theme.typography.fontSize.lg,
        borderRadius: getBorderRadiusValue(theme, 'lg'),
        minHeight: '48px',
      },
      xl: {
        padding: `${getSpacingValue(theme, '5')} ${getSpacingValue(theme, '8')}`,
        fontSize: theme.typography.fontSize.xl,
        borderRadius: getBorderRadiusValue(theme, 'xl'),
        minHeight: '56px',
      },
    };

    // Color and variant styles
    const getVariantStyles = (): React.CSSProperties => {
      const colorValue = getColorValue(theme, `${color}.500`);
      const colorHover = getColorValue(theme, `${color}.600`);
      const colorLight = getColorValue(theme, `${color}.50`);
      const colorDark = getColorValue(theme, `${color}.700`);

      switch (variant) {
        case 'primary':
          return {
            backgroundColor: colorValue,
            color: theme.colors.white,
            border: `1px solid ${colorValue}`,
          };
        case 'secondary':
          return {
            backgroundColor: theme.colors.secondary[100],
            color: theme.colors.secondary[900],
            border: `1px solid ${theme.colors.secondary[200]}`,
          };
        case 'outline':
          return {
            backgroundColor: 'transparent',
            color: colorValue,
            border: `1px solid ${colorValue}`,
          };
        case 'ghost':
          return {
            backgroundColor: 'transparent',
            color: colorValue,
            border: '1px solid transparent',
          };
        case 'link':
          return {
            backgroundColor: 'transparent',
            color: colorValue,
            border: 'none',
            textDecoration: 'underline',
            padding: '0',
            minHeight: 'auto',
          };
        default:
          return {};
      }
    };

    return {
      ...baseStyles,
      ...sizeStyles[size],
      ...getVariantStyles(),
      ...style,
    };
  };

  const handleMouseEnter = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (disabled || loading) return;

    const target = e.currentTarget;
    const colorValue = getColorValue(theme, `${color}.500`);
    const colorHover = getColorValue(theme, `${color}.600`);
    const colorLight = getColorValue(theme, `${color}.50`);

    switch (variant) {
      case 'primary':
        target.style.backgroundColor = colorHover;
        break;
      case 'secondary':
        target.style.backgroundColor = theme.colors.secondary[200];
        break;
      case 'outline':
        target.style.backgroundColor = colorLight;
        break;
      case 'ghost':
        target.style.backgroundColor = colorLight;
        break;
      case 'link':
        target.style.opacity = '0.8';
        break;
    }
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (disabled || loading) return;

    const target = e.currentTarget;
    const colorValue = getColorValue(theme, `${color}.500`);

    switch (variant) {
      case 'primary':
        target.style.backgroundColor = colorValue;
        break;
      case 'secondary':
        target.style.backgroundColor = theme.colors.secondary[100];
        break;
      case 'outline':
      case 'ghost':
        target.style.backgroundColor = 'transparent';
        break;
      case 'link':
        target.style.opacity = '1';
        break;
    }
  };

  return (
    <button
      ref={ref}
      className={clsx('ui-button', className)}
      style={getButtonStyles()}
      disabled={disabled || loading}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...rest}
    >
      {loading && (
        <div
          style={{
            width: '16px',
            height: '16px',
            border: `2px solid ${theme.colors.white}`,
            borderTop: '2px solid transparent',
            borderRadius: '50%',
            animation: 'spin 1s linear infinite',
          }}
        />
      )}
      {!loading && leftIcon && <span>{leftIcon}</span>}
      {children}
      {!loading && rightIcon && <span>{rightIcon}</span>}
    </button>
  );
});

Button.displayName = 'Button';
