import { ULTRON_DEFAULT_THEME } from '@theme/default-theme'
import { ULTRON_BASE_THEME } from '@theme/types/ultron-base-theme'
import ULTRON_TYPOGRAPHY from '@theme/ultron-typography'
import { pathOr } from 'ramda'

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
