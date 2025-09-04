import React, {forwardRef} from "react";
import {useTheme} from "@/theme/ThemeProvider";
import {getBorderRadiusValue, getColorValue, getSpacingValue} from "@/utils/themeUtils";

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

    const getTextInputStyles = (): React.CSSProperties => {
        const baseStyles: React.CSSProperties = {
            display: 'inline-flex',
            // border: 'none',
            cursor: disabled || loading ? 'not-allowed' : 'text',
            fontFamily: theme.typography.fontFamily.sans.join(', '),
            fontWeight: theme.typography.fontWeight.normal,
            width: fullWidth ? '100%' : 'auto',
            opacity: disabled || loading ? 0.6 : 1,
            padding: `${getSpacingValue(theme, '1')} ${getSpacingValue(theme, '2')}`,
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
            const colorValue = getColorValue(theme, `${color}.500`);
            const colorHover = getColorValue(theme, `${color}.600`);
            const colorLight = getColorValue(theme, `${color}.50`);
            const colorDark = getColorValue(theme, `${color}.700`);

            switch (color) {
                case 'primary':
                    return {
                        border: `1px solid ${colorValue}`,
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

    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
            }}
        >
            {label && <label>{label}</label>}
            <input
                ref={ref}
                style={getTextInputStyles()}
                {...rest}
            />
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
        </div>
    )
})
