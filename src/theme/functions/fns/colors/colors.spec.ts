import { ULTRON_DEFAULT_THEME } from '@theme/default-theme'
import { themeColor } from './colors'

describe('@ultron/theme/fn/themeColors', () => {
  it('returns correct string of given color and shade key', () => {
    expect(themeColor(ULTRON_DEFAULT_THEME)('indigo', 200)).toBe(
      ULTRON_DEFAULT_THEME.colors.indigo[200]
    )
  })

  it('returns primary color shade if color was not provided', () => {
    expect(themeColor(ULTRON_DEFAULT_THEME)(undefined, undefined)).toBe(
      ULTRON_DEFAULT_THEME.colors[ULTRON_DEFAULT_THEME.primary.color][
        ULTRON_DEFAULT_THEME.primary.shade
      ]
    )
  })
})
