import { createTheme } from '@mui/material/styles';
import designTokens from './designTokens';

const theme = createTheme({
    palette: {
        primary: {
            main: designTokens.colors.primary_base,
            light: designTokens.colors.primary_foreground,
            dark: designTokens.colors.primary_background,
        },
        secondary: {
            main: designTokens.colors.secondary_foreground,
            light: designTokens.colors.tertiary_background,
            dark: designTokens.colors.secondary_background,
        },
        error: {
            main: designTokens.colors.destructive_base,
            light: designTokens.colors.destructive_background,
            dark: designTokens.colors.destructive_foreground,
        },
        success: {
            main: designTokens.colors.positive_base,
            light: designTokens.colors.positive_background,
            dark: designTokens.colors.positive_foreground,
        },
        warning: {
            main: designTokens.colors.warning_base,
            light: designTokens.colors.warning_background,
            dark: designTokens.colors.warning_foreground,
        },
        background: {
            default: designTokens.colors.primary_background,
            paper: designTokens.colors.secondary_background,
        },
        text: {
            primary: designTokens.colors.primary_foreground,
            secondary: designTokens.colors.secondary_foreground,
        },
    },
    typography: {
        fontFamily: designTokens.typography.fontFamily,
        h1: {
            fontSize: designTokens.typography.fontSize.display_1,
            fontWeight: designTokens.typography.fontWeight.bold,
        },
        body1: {
            fontSize: designTokens.typography.fontSize.medium,
            fontWeight: designTokens.typography.fontWeight.regular,
        },
        body2: {
            fontSize: designTokens.typography.fontSize.small,
        },
        button: {
            textTransform: 'none',
            fontWeight: designTokens.fontWeight.bold,
        },
    },
    shape: {
        borderRadius: parseInt(designTokens.borderRadius, 10),
    },
    spacing: designTokens.spacing,
});

export default theme;
