import { ULTRON_THEME } from '@theme/types/ultron-theme'
import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme extends ULTRON_THEME {}
}
