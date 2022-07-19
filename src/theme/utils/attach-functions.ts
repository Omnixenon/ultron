import * as fns from '@theme/functions/fns'
import { ULTRON_BASE_THEME } from '@theme/types/ultron-theme'

const attachFunctions = (themeBase: ULTRON_BASE_THEME) => {
  return {
    ...themeBase,
    fn: {
      typography: fns.typography(themeBase),
      themeColor: fns.themeColor(themeBase),
    },
  }
}

export default attachFunctions
