// @ts-nocheck
import { ULTRON_THEME, ULTRON_THEME_OVERRIDE } from '@theme/types/ultron-theme'

const mergeTheme = (
  currentTheme: ULTRON_THEME,
  themeOverride?: ULTRON_THEME_OVERRIDE
): ULTRON_THEME => {
  if (!themeOverride) {
    return currentTheme
  }

  return Object.keys(currentTheme).reduce((acc, key) => {
    acc[key] =
      typeof themeOverride[key] === 'object'
        ? { ...currentTheme[key], ...themeOverride[key] }
        : typeof themeOverride[key] === 'number'
        ? themeOverride[key]
        : themeOverride[key] || currentTheme[key]
    return acc
  }, {} as ULTRON_THEME)
}

export default mergeTheme
