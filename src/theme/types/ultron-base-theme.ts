import * as fns from '@theme/functions/fns'
import ULTRON_COLORS from '@theme/ultron-colors'
import { ULTRON_DEFAULT_THEME } from '..'

export type ULTRON_BASE_THEME = typeof ULTRON_DEFAULT_THEME
export type ULTRON_THEME_FUNCTIONS = typeof fns

export type ULTRON_THEME_SPACING = keyof ULTRON_BASE_THEME['spacing']

export type ULTRON_THEME_COLORS = keyof ULTRON_BASE_THEME['colors']
export type ULTRON_THEME_COLORS_SHADES = keyof typeof ULTRON_COLORS.blue

export type ULTRON_THEME_RADIUS = keyof ULTRON_BASE_THEME['radius']

export type ULTRON_THEME_TYPOGRAPHY = keyof ULTRON_BASE_THEME['typography']

export type ULTRON_THEME_SHADOWS = keyof ULTRON_BASE_THEME['shadows']

export type ULTRON_THEME_FONT_SIZES = keyof ULTRON_BASE_THEME['fontSizes']
