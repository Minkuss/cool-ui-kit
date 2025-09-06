import React, {forwardRef, useState} from "react";
import {useTheme} from "@/theme/ThemeProvider";
import {getBorderRadiusValue, getColorValue, getSpacingValue} from "@/utils/themeUtils";
import '../../styles/animations.css';

export type TextInputSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export type TextInputColor = 'primary' | 'secondary' | 'success' | 'error' | 'warning';

export interface TextInputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
    label?: string;
    fullWidth?: boolean;
    loading?: boolean;
    inlineIcon?: React.ReactNode;
    icon?: React.ReactNode;
    error?: boolean;
    errorText?: string;
    helperText?: string;
    size?: TextInputSize,
    color?: TextInputColor,
}

export const TextInput = forwardRef<HTMLInputElement, TextInputProps>(({
    label,
    fullWidth = false,
    loading = false,
    inlineIcon,
    icon,
    error = false,
    errorText = 'Incorrect entry.',
    helperText,
    disabled,
    className,
    style,
    size = 'sm',
    children,
    color = 'primary',
    ...rest
}, ref) => {
    const { theme } = useTheme();

    const [isHovered, setIsHovered] = useState(false);
    const [isFocused, setIsFocused] = useState(false);

    const resetInputStyles: React.CSSProperties = {
        border: 'none',
        backgroundColor: 'transparent',
        outline: 'none',
    };

    const inputStyle = {
        ...resetInputStyles,
        border: isFocused ? 'none' : 'none',
        backgroundColor: isHovered ? 'transparent' : 'transparent',
        outline: isFocused ? 'none' : 'none',
    };

    const getTextInputStyles = (): React.CSSProperties => {
        const baseStyles: React.CSSProperties = {
            display: 'inline-flex',
            alignItems: 'center',
            cursor: disabled ? 'not-allowed' : 'text',
            fontFamily: theme.typography.fontFamily.sans.join(', '),
            fontWeight: theme.typography.fontWeight.normal,
            width: fullWidth ? '100%' : 'auto',
            padding: '0 5px',
            opacity: disabled ? 0.6 : 1,
            transition: 'all 0.2s ease-in-out',
            position: 'relative',
            ...style,
        }

        const sizeStyles: Record<TextInputSize, React.CSSProperties> = {
            xs: {
                fontSize: theme.typography.fontSize.xs,
                borderRadius: getBorderRadiusValue(theme, 'md'),
                minHeight: '24px',
            },
            sm: {
                fontSize: theme.typography.fontSize.sm,
                borderRadius: getBorderRadiusValue(theme, 'md'),
                minHeight: '32px',
            },
            md: {
                fontSize: theme.typography.fontSize.base,
                borderRadius: getBorderRadiusValue(theme, 'md'),
                minHeight: '40px',
            },
            lg: {
                fontSize: theme.typography.fontSize.lg,
                borderRadius: getBorderRadiusValue(theme, 'lg'),
                minHeight: '48px',
            },
            xl: {
                fontSize: theme.typography.fontSize.xl,
                borderRadius: getBorderRadiusValue(theme, 'xl'),
                minHeight: '56px',
            },
        };

        const getVariantStyles = (): React.CSSProperties => {
            switch (color) {
                case 'primary':
                    return {
                        border: `1px solid ${theme.colors.primary["500"]}`,
                    };
                case 'secondary':
                    return {
                        border: `1px solid ${theme.colors.secondary["900"]}`,
                    };
                case 'error':
                    return {
                        border: `1px solid ${theme.colors.error["700"]}`,
                    };
                case 'warning':
                    return {
                        border: `1px solid ${theme.colors.warning["500"]}`,
                    };
                case 'success':
                    return {
                        border: `1px solid ${theme.colors.success["700"]}`,
                    }
                default:
                    return {};
            }
        }

        return {
            ...baseStyles,
            ...sizeStyles[size],
            ...getVariantStyles(),
        }
    }

    const handleMouseEnter = (e: React.MouseEvent<HTMLInputElement>) => {
        const target = e.currentTarget;

        switch (color) {
            case 'primary':
                target.style.border = `1px solid ${theme.colors.primary["400"]}`;
                break;
            case 'secondary':
                target.style.border = `1px solid ${theme.colors.secondary["500"]}`;
                break;
            case 'error':
                target.style.border = `1px solid ${theme.colors.error["500"]}`;
                break;
            case 'warning':
                target.style.border = `1px solid ${theme.colors.warning["700"]}`;
                break;
            case 'success':
                target.style.border = `1px solid ${theme.colors.success["500"]}`;
                break;
        }
    };

    const handleMouseLeave = (e: React.MouseEvent<HTMLInputElement>) => {
        const target = e.currentTarget;

        switch (color) {
            case 'primary':
                target.style.border = `1px solid ${theme.colors.primary["500"]}`;
                break;
            case 'secondary':
                target.style.border = `1px solid ${theme.colors.secondary["900"]}`;
                break;
            case 'error':
                target.style.border = `1px solid ${theme.colors.error["700"]}`;
                break;
            case 'warning':
                target.style.border = `1px solid ${theme.colors.warning["500"]}`;
                break;
            case 'success':
                target.style.border = `1px solid ${theme.colors.success["700"]}`;
                break;
        }
    };

    const handleInputFocused = (e: React.FocusEvent<HTMLInputElement>)=> {
        const target = e.currentTarget;

        switch (color) {
            case 'primary':
                target.style.border = `2px solid ${theme.colors.primary["500"]}`;
                break;
            case 'secondary':
                target.style.border = `2px solid ${theme.colors.secondary["900"]}`;
                break;
            case 'error':
                target.style.border = `2px solid ${theme.colors.error["700"]}`;
                break;
            case 'warning':
                target.style.border = `2px solid ${theme.colors.warning["500"]}`;
                break;
            case 'success':
                target.style.border = `2px solid ${theme.colors.success["700"]}`;
                break;
        }
    }

    const handleInputBlurred = (e: React.FocusEvent<HTMLInputElement>)=> {
        const target = e.currentTarget;

        switch (color) {
            case 'primary':
                target.style.border = `1px solid ${theme.colors.primary["500"]}`;
                break;
            case 'secondary':
                target.style.border = `1px solid ${theme.colors.secondary["900"]}`;
                break;
            case 'error':
                target.style.border = `1px solid ${theme.colors.error["700"]}`;
                break;
            case 'warning':
                target.style.border = `1px solid ${theme.colors.warning["500"]}`;
                break;
            case 'success':
                target.style.border = `1px solid ${theme.colors.success["700"]}`;
                break;
        }
    }

    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
            }}
            className={className}
        >
            <div
                style={getTextInputStyles()}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onFocus={handleInputFocused}
                onBlur={handleInputBlurred}
            >
                {
                    label &&
                    <label
                        style={{
                            position: 'absolute',
                            fontSize: '12px',
                            top: '-10px',
                            backgroundColor: theme.colors.white,
                            color: theme.colors.black,
                        }}
                    >
                        {label}
                    </label>
                }
                <input
                    style={inputStyle}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                    ref={ref}
                    {...rest}
                />
                {loading && (
                    <div
                        style={{
                            width: '16px',
                            height: '16px',
                            border: `2px solid ${theme.colors.black}`,
                            borderTop: '2px solid transparent',
                            borderRadius: '50%',
                            animation: 'spin 1s linear infinite',
                        }}
                    />
                )}
            </div>
            {
                error &&
                <span
                    style={{
                        color: theme.colors.error["700"],
                        fontSize: theme.typography.fontSize.xs,
                    }}
                >
                    {errorText}
                </span>
            }
            {
                helperText && !error &&
                <span
                    style={{
                        color: theme.colors.secondary["700"],
                        fontSize: theme.typography.fontSize.xs,
                    }}
                >
                    {helperText}
                </span>
            }
        </div>
    )
})
