import { ULTRON_THEME } from '@theme/types/ultron-final-theme'
import { FNS_TRANSITIONS_PROPS } from '@theme/types/ultron-fns-functions'
import { ThemedStyledProps } from 'styled-components'

export const ultronTransition =
  (options: FNS_TRANSITIONS_PROPS = {}) =>
  <P extends unknown>(props: ThemedStyledProps<P, ULTRON_THEME>): string => {
    return props.theme.fn.transitions(options)
  }
