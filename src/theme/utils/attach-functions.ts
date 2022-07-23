import {
  hover,
  radius,
  size,
  spacing,
  themeColor,
  transitions,
  typography,
} from '@theme/functions/fns'
import { ULTRON_BASE_THEME } from '@theme/types/ultron-base-theme'

const attachFunctions = (themeBase: ULTRON_BASE_THEME) => {
  return {
    ...themeBase,
    fn: {
      typography: typography(themeBase),
      themeColor: themeColor(themeBase),
      transitions,
      hover,
      spacing: spacing(themeBase),
      radius: radius(themeBase),
      size,
    },
  }
}

export default attachFunctions
