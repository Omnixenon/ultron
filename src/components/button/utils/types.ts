import { ULTRON_THEME_COLORS, ULTRON_THEME_SIZES } from '@theme/index'
import { ULTRON_THEME_VARIANTS } from '@theme/types/ultron-variants'

export type BUTTON_SIZES_TYPE = {
  height: string
  padding: string
  compact: {
    height: string
    padding: string
  }
}

type BASE_PROPS = {
  as?: React.ElementType
  children?: React.ReactNode
  size?: ULTRON_THEME_SIZES
  variant?: ULTRON_THEME_VARIANTS
  color?: ULTRON_THEME_COLORS
  disabled?: boolean
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
  compact?: boolean
  uppercase?: boolean
  fullWidth?: boolean
  leadingIcon?: React.ReactNode
  trailingIcon?: React.ReactNode
}

export type ULTRON_BUTTON_PROPS = BASE_PROPS &
  React.ComponentPropsWithoutRef<'button'>
