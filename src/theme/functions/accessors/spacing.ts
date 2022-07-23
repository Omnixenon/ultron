import { ULTRON_THEME_SPACING } from '@theme/types/ultron-base-theme'
import { ULTRON_THEME } from '@theme/types/ultron-final-theme'
import { ThemedStyledProps } from 'styled-components'

export const ultronSpacing =
  (key: ULTRON_THEME_SPACING = 'sm') =>
  <P extends unknown>(props: ThemedStyledProps<P, ULTRON_THEME>): string => {
    return props.theme.fn.spacing(key)
  }
