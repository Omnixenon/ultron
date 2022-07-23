import React from 'react'
import S from './button.styles'
import { ULTRON_BUTTON_PROPS } from './utils/types'

const Button = React.forwardRef<HTMLButtonElement, ULTRON_BUTTON_PROPS>(
  ({ leadingIcon, trailingIcon, children, ...props }, ref) => {
    const buttonProps = {
      ref,
      ...props,
    }

    return (
      <S.ButtonRoot {...buttonProps}>
        <S.ButtonInner>
          {leadingIcon && <S.LeadingIcon>{leadingIcon}</S.LeadingIcon>}
          <S.ButtonChild>{children}</S.ButtonChild>
          {trailingIcon && <S.TrailingIcon>{trailingIcon}</S.TrailingIcon>}
        </S.ButtonInner>
      </S.ButtonRoot>
    )
  }
)

Button.displayName = 'Button'

Button.defaultProps = {
  type: 'button',
  uppercase: true,
  variant: 'filled',
  onClick: event => console.log({ event }),
}

export default Button
