import { ULTRON_FINAL_THEME } from '..'
import { DeepPartial } from './ultron-theme-funcs'

export type ULTRON_THEME_OVERRIDE = DeepPartial<Omit<ULTRON_THEME, 'fn'>>
export type ULTRON_THEME = typeof ULTRON_FINAL_THEME
