import { ULTRON_THEME_SIZES } from '@theme/index'
import { BUTTON_SIZES_TYPE } from './types'

export const BUTTON_SIZES: Record<ULTRON_THEME_SIZES, BUTTON_SIZES_TYPE> = {
  xxs: {
    height: '24px',
    padding: '0 10px',
    compact: {
      height: '18px',
      padding: '0 6px',
    },
  },
  xs: {
    height: '30px',
    padding: '0 14px',
    compact: {
      height: '22px',
      padding: '0 7px',
    },
  },
  sm: {
    height: '36px',
    padding: '0 18px',
    compact: {
      height: '26px',
      padding: '0 8px',
    },
  },
  md: {
    height: '42px',
    padding: '0 22px',
    compact: {
      height: '30px',
      padding: '0 10px',
    },
  },
  lg: {
    height: '50px',
    padding: '0 26px',
    compact: { height: '34px', padding: '0 12px' },
  },
  xl: {
    height: '60px',
    padding: '0 32px',
    compact: {
      height: '40px',
      padding: '0 14px',
    },
  },
  xxl: {
    height: '72px',
    padding: '0 32px',
    compact: {
      height: '46px',
      padding: '0 16px',
    },
  },
}
