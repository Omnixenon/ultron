import { ULTRON_DEFAULT_THEME } from '@theme/default-theme'
import { ULTRON_THEME_COLORS } from '@theme/types/ultron-base-theme'
import { FNS_COLOR_PROPS } from '@theme/types/ultron-fns-functions'
import { StyledProps } from 'styled-components'

export const ultronColor =
  <T extends object>({
    key = ULTRON_DEFAULT_THEME.primary.color,
    shade = ULTRON_DEFAULT_THEME.primary.shade,
    prop,
  }: FNS_COLOR_PROPS<T>) =>
  <P extends unknown>(props: StyledProps<P>): string => {
    const propValue =
      prop &&
      (props[prop as keyof StyledProps<P>] as unknown as ULTRON_THEME_COLORS)
    return props.theme.fn.themeColor(propValue ?? key, shade)
  }
