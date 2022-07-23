import { ULTRON_THEME_TYPOGRAPHY } from '@theme/types/ultron-base-theme'
import { ULTRON_THEME } from '@theme/types/ultron-final-theme'
import { ThemedStyledProps } from 'styled-components'

export const ultronTypography =
  (key: ULTRON_THEME_TYPOGRAPHY) =>
  <P extends unknown>(
    props: ThemedStyledProps<P, ULTRON_THEME>
  ): Record<string, string> => {
    return props.theme.fn.typography(key)
  }
