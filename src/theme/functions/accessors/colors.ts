import { ULTRON_DEFAULT_THEME } from '@theme/default-theme'
import {
  ULTRON_THEME_COLORS,
  ULTRON_THEME_COLORS_SHADES,
} from '@theme/types/ultron-colors'
import { StyledProps } from 'styled-components'

export const ultronColor =
  <T extends object>(
    key: ULTRON_THEME_COLORS = ULTRON_DEFAULT_THEME.primary.color,
    shade: ULTRON_THEME_COLORS_SHADES = ULTRON_DEFAULT_THEME.primary.shade,
    prop?: keyof T
  ) =>
  <P extends unknown>(props: StyledProps<P>): string => {
    const propValue =
      prop &&
      (props[prop as keyof StyledProps<P>] as unknown as ULTRON_THEME_COLORS)
    return props.theme.fn.themeColor(propValue ?? key, shade)
  }
