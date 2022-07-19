import ULTRON_COLORS from './ultron-colors'
import ULTRON_TYPOGRAPHY from './ultron-typography'

const DEFAULT_THEME = {
  scheme: 'light',

  colors: ULTRON_COLORS,

  white: '#FFFFFF',
  black: '#000000',

  typography: ULTRON_TYPOGRAPHY,

  primary: {
    color: 'blue',
    radius: 'sm',
    shadow: 'xs',
    shade: 600,
    typography: 'body1',
  },

  shadows: {
    xs: '0 1px 3px rgba(0, 0, 0, 0.05), 0 1px 2px rgba(0, 0, 0, 0.1)',
    sm: '0 1px 3px rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0px 10px 15px -5px, rgba(0, 0, 0, 0.04) 0px 7px 7px -5px',
    md: '0 1px 3px rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px',
    lg: '0 1px 3px rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0px 28px 23px -7px, rgba(0, 0, 0, 0.04) 0px 12px 12px -7px',
    xl: '0 1px 3px rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0px 36px 28px -7px, rgba(0, 0, 0, 0.04) 0px 17px 17px -7px',
  },

  fontSizes: {
    xxs: 8,
    xs: 12,
    sm: 14,
    md: 16,
    lg: 18,
    xl: 20,
    xxl: 24,
  },

  radius: {
    xxs: 1,
    xs: 2,
    sm: 4,
    md: 8,
    lg: 16,
    xl: 24,
    xxl: 32,
  },

  spacing: {
    xxs: 6,
    xs: 10,
    sm: 12,
    md: 16,
    lg: 20,
    xl: 24,
    xxl: 28,
  },
} as const

export const ULTRON_DEFAULT_THEME = DEFAULT_THEME
