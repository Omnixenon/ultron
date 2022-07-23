import {
  ULTRON_BASE_THEME,
  ULTRON_THEME_RADIUS,
} from '@theme/types/ultron-base-theme'
import { pathOr } from 'ramda'

export const radius =
  (theme: ULTRON_BASE_THEME) =>
  (key: ULTRON_THEME_RADIUS = 'sm') => {
    const value = pathOr<number>(theme.radius.sm, ['radius', key], theme)

    return `${value}px`
  }
