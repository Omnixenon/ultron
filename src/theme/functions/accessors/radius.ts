import { ULTRON_THEME_RADIUS } from '@theme/types/ultron-base-theme'
import { ULTRON_THEME } from '@theme/types/ultron-final-theme'
import { ThemedStyledProps } from 'styled-components'

export const ultronRadius =
  (key: ULTRON_THEME_RADIUS = 'sm') =>
  <P extends unknown>(props: ThemedStyledProps<P, ULTRON_THEME>): string => {
    return props.theme.fn.radius(key)
  }
