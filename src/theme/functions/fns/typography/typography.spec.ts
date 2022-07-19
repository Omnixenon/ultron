import { ULTRON_DEFAULT_THEME } from '@theme/default-theme'
import { typography } from './typography'

describe('@ultron/theme/fn/typography', () => {
  it('returns correct object of given typography key', () => {
    expect(typography(ULTRON_DEFAULT_THEME)('button2')).toBe(
      ULTRON_DEFAULT_THEME.typography.button2
    )
  })

  it('returns primary typography object if key was not provided', () => {
    expect(typography(ULTRON_DEFAULT_THEME)(undefined)).toBe(
      ULTRON_DEFAULT_THEME.typography[ULTRON_DEFAULT_THEME.primary.typography]
    )
  })
})
