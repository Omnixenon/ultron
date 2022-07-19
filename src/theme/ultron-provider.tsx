import GlobalStyles from '@theme/global-styles'

import filterProps from '@theme/utils/filter-props'
import mergeTheme from '@theme/utils/merge-theme'
import { createContext, useContext } from 'react'
import { ThemeProvider } from 'styled-components'
import {
  ULTRON_DEFAULT_THEME,
  ULTRON_FINAL_THEME,
  ULTRON_PROVIDER_CONTEXT_TYPE,
  ULTRON_PROVIDER_PROPS,
} from '.'

const UltronProviderContext = createContext<ULTRON_PROVIDER_CONTEXT_TYPE>({
  theme: ULTRON_FINAL_THEME,
  defaultProps: {},
})

export const useUltronTheme = () => {
  return useContext(UltronProviderContext)?.theme || ULTRON_DEFAULT_THEME
}

export const useUltronDefaultProps = <T extends Record<string, any>>(
  component: string,
  defaultProps: Partial<T>,
  props: T
): T => {
  const contextProps =
    useContext(UltronProviderContext)?.defaultProps?.[component] || {}
  return { ...defaultProps, ...contextProps, ...filterProps(props) }
}

export const UltronProvider = ({
  theme,
  defaultProps = {},
  withGlobalStyles = false,
  inherit = false,
  children,
}: ULTRON_PROVIDER_PROPS) => {
  const ctx = useContext(UltronProviderContext)
  const overrides = {
    themeOverride: inherit ? { ...ctx.theme, ...theme } : theme,
    defaultProps: inherit
      ? { ...ctx.defaultProps, ...defaultProps }
      : defaultProps,
  }

  const finalTheme = mergeTheme(ULTRON_FINAL_THEME, overrides.themeOverride)

  return (
    <UltronProviderContext.Provider
      value={{
        theme: finalTheme,
        defaultProps: overrides.defaultProps,
      }}
    >
      <ThemeProvider theme={finalTheme}>
        {withGlobalStyles && <GlobalStyles />}
        {children}
      </ThemeProvider>
    </UltronProviderContext.Provider>
  )
}

UltronProvider.displayName = 'UltronProvider'
