import { ULTRON_THEME } from '@theme/types/ultron-final-theme'
import { ThemedStyledProps } from 'styled-components'

export const ultronHover =
  (first: TemplateStringsArray, ...interpolations: any[]) =>
  <P extends unknown>(props: ThemedStyledProps<P, ULTRON_THEME>) => {
    return props.theme.fn.hover(first, ...interpolations)
  }
