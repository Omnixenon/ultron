import { ULTRON_DEFAULT_THEME } from '@theme/default-theme'
import {
  ULTRON_BASE_THEME,
  ULTRON_THEME_COLORS,
  ULTRON_THEME_COLORS_SHADES,
} from '@theme/types/ultron-base-theme'
import ULTRON_COLORS from '@theme/ultron-colors'
import { pathOr } from 'ramda'

export const themeColor =
  (theme: ULTRON_BASE_THEME) =>
  (
    key: ULTRON_THEME_COLORS = ULTRON_DEFAULT_THEME.primary.color,
    shade: ULTRON_THEME_COLORS_SHADES = ULTRON_DEFAULT_THEME.primary.shade
  ) => {
    const value = pathOr<string>(
      ULTRON_COLORS[ULTRON_DEFAULT_THEME.primary.color][
        ULTRON_DEFAULT_THEME.primary.shade
      ],
      ['colors', key, shade],
      theme
    )

    return value
  }
