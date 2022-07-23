import { ULTRON_THEME, ULTRON_THEME_OVERRIDE } from './ultron-final-theme'

export type ULTRON_DEFAULT_PROPS = Record<string, Record<string, any>>

export type ULTRON_PROVIDER_CONTEXT_TYPE = {
  theme: ULTRON_THEME
  defaultProps: ULTRON_DEFAULT_PROPS
}

export interface ULTRON_PROVIDER_PROPS {
  theme?: ULTRON_THEME_OVERRIDE
  defaultProps?: ULTRON_DEFAULT_PROPS
  withGlobalStyles?: boolean
  inherit?: boolean
  children: React.ReactNode
}
