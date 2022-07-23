import { ULTRON_THEME } from '@theme/types/ultron-final-theme'
import { Paths } from '@theme/types/ultron-theme-funcs'
import { path } from 'ramda'
import { ThemedStyledProps } from 'styled-components'

export const ultronTheme =
  (key: Paths<ULTRON_THEME>) =>
  <P extends unknown>(props: ThemedStyledProps<P, ULTRON_THEME>): any => {
    const pathKeys = key.split('.')
    return path(['theme', ...pathKeys], props)
  }
