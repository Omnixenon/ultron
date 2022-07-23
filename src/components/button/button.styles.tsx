import {
  ultronColor,
  ultronHover,
  ultronRadius,
  ultronSpacing,
  ultronTheme,
  ultronTypography,
} from '@theme/index'
import styled, { css } from 'styled-components'
import { getSizeStyles } from './utils/funcs'
import { ULTRON_BUTTON_PROPS } from './utils/types'

namespace S {
  export const ButtonRoot = styled.button<ULTRON_BUTTON_PROPS>`
    ${ultronTypography('button1')};
    ${props => getSizeStyles(props)};
    display: inline-block;
    text-transform: ${({ uppercase }) => (uppercase ? 'uppercase' : 'none')};
    border-radius: ${ultronRadius('sm')};
    cursor: pointer;
    line-height: 1;
    user-select: none;
    box-sizing: border-box;
    text-decoration: none;
    appearance: none;
    font-weight: 600;
    background-color: ${ultronColor<ULTRON_BUTTON_PROPS>({
      prop: 'color',
      shade: 500,
    })};
    border: 2px solid
      ${ultronColor<ULTRON_BUTTON_PROPS>({ prop: 'color', shade: 700 })};
    color: ${ultronTheme('white')};
    font-size: ${({ theme, size }) =>
      theme.fn.size({ size, sizes: theme.fontSizes })};

    ${ultronHover`
      background-color: ${ultronColor<ULTRON_BUTTON_PROPS>({
        prop: 'color',
        shade: 600,
      })};
    `}

    ${({ disabled }) =>
      disabled &&
      css`
        background-color: ${ultronColor({ key: 'gray', shade: 500 })};
        color: ${ultronColor({ key: 'gray', shade: 600 })};
        border-color: ${ultronColor({ key: 'gray', shade: 600 })};
        cursor: 'not-allowed';
        pointer-events: none;
      `}
  `

  export const ButtonInner = styled.span`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    height: 100%;
  `

  export const LeadingIcon = styled.span`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-width: 1rem;
    margin-right: ${ultronSpacing('xxs')};
  `

  export const TrailingIcon = styled.span`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-width: 1rem;
    margin-left: ${ultronSpacing('xxs')};
  `

  export const ButtonChild = styled.span`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    height: 100%;
  `
}

export default S
