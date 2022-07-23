import { BUTTON_SIZES } from './constants'
import { ULTRON_BUTTON_PROPS } from './types'

export const getSizeStyles = ({
  compact,
  size = 'sm',
}: ULTRON_BUTTON_PROPS) => {
  if (compact) {
    return BUTTON_SIZES[size].compact
  }

  return {
    height: BUTTON_SIZES[size].height,
    padding: BUTTON_SIZES[size].padding,
  }
}
