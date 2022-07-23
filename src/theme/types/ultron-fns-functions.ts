import ULTRON_TRANSITIONS from '@theme/ultron-transitions'
import { CSSProperties } from 'react'
import {
  ULTRON_THEME_COLORS,
  ULTRON_THEME_COLORS_SHADES,
} from './ultron-base-theme'
import { ULTRON_THEME_SIZES } from './ultron-sizes'

export type FNS_TRANSITIONS_PROPS = {
  property?: keyof typeof ULTRON_TRANSITIONS.property
  duration?: keyof typeof ULTRON_TRANSITIONS.duration
  timing?: CSSProperties['transitionTimingFunction']
  delay?: CSSProperties['transitionDelay']
}

export type FNS_SIZE_PROPS = {
  size?: ULTRON_THEME_SIZES | number
  sizes: Record<ULTRON_THEME_SIZES, any>
  fallback?: ULTRON_THEME_SIZES
}

export type FNS_COLOR_PROPS<T> = {
  key?: ULTRON_THEME_COLORS
  shade?: ULTRON_THEME_COLORS_SHADES
  prop?: keyof T
}
