import { FNS_TRANSITIONS_PROPS } from '@theme/types/ultron-fns-functions'
import ULTRON_TRANSITIONS from '@theme/ultron-transitions'

export const transitions = ({
  property = 'all',
  duration = 'md',
  timing = 'in-out',
  delay = 'initial',
}: FNS_TRANSITIONS_PROPS = {}) => `transition-property: ${ULTRON_TRANSITIONS.property[property]};
      transition-timing-function: ${timing};
      transition-duration: ${ULTRON_TRANSITIONS.duration[duration]};
      transition-delay: ${delay};`
