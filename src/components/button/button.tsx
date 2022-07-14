import React from 'react'
import S from './button.styles'
import { ButtonProps } from './utils/types'

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, ...props }, ref) => {
    const buttonProps = {
      ref,
      ...props,
    }

    return <S.ButtonRoot {...buttonProps}>{children}</S.ButtonRoot>
  }
)

Button.displayName = 'Button'

Button.defaultProps = {
  type: 'button',
  onClick: event => console.log({ event }),
}

export default Button
