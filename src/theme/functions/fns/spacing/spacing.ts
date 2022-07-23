import {
  ULTRON_BASE_THEME,
  ULTRON_THEME_SPACING,
} from '@theme/types/ultron-base-theme'
import { pathOr } from 'ramda'

export const spacing =
  (theme: ULTRON_BASE_THEME) =>
  (key: ULTRON_THEME_SPACING = 'sm') => {
    const value = pathOr<number>(theme.spacing.sm, ['spacing', key], theme)

    return `${value}px`
  }
