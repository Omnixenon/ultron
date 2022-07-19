import { ULTRON_THEME } from '@theme/types/ultron-theme'
import ULTRON_TYPOGRAPHY from '@theme/ultron-typography'
import { ThemedStyledProps } from 'styled-components'

export const ultronTypography =
  (key: keyof typeof ULTRON_TYPOGRAPHY) =>
  <P extends unknown>(
    props: ThemedStyledProps<P, ULTRON_THEME>
  ): Record<string, string> => {
    return props.theme.fn.typography(key)
  }
