import ULTRON_TYPOGRAPHY from '@theme/ultron-typography'
import { pathOr } from 'ramda'
import { ULTRON_BASE_THEME, ULTRON_DEFAULT_THEME } from '../../..'

type TYPOGRAPHY_KEYS = keyof typeof ULTRON_TYPOGRAPHY

export const typography =
  (theme: ULTRON_BASE_THEME) =>
  (key: TYPOGRAPHY_KEYS = ULTRON_DEFAULT_THEME.primary.typography) => {
    return pathOr<Record<string, string>>(
      theme.typography.body1,
      ['typography', key],
      theme
    )
  }
