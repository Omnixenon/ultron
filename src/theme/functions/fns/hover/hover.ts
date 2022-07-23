import { css } from 'styled-components'

export const hover = (
  first: TemplateStringsArray,
  ...interpolations: any[]
) => css`
  ${({ theme }) => theme.fn.transitions()}

  @media (hover: hover) {
    &:hover {
      ${css(first, ...interpolations)}
    }
  }

  @media (hover: none) {
    &:active {
      ${css(first, ...interpolations)}
    }
  }
`
