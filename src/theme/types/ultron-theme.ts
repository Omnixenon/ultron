import { fns } from '@theme/funcs/accessors'
import { ULTRON_DEFAULT_THEME, ULTRON_FINAL_THEME } from '..'
import { DeepPartial } from './ultron-theme-funcs'

export type ULTRON_BASE_THEME = Omit<typeof ULTRON_DEFAULT_THEME, 'fn'>
export type ULTRON_THEME_FUNCTIONS = typeof fns
export type ULTRON_THEME_OVERRIDE = DeepPartial<Omit<ULTRON_THEME, 'fn'>>
export type ULTRON_THEME = typeof ULTRON_FINAL_THEME
