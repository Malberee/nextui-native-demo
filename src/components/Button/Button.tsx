import React, { FC } from 'react'
import { ButtonWrapper, ButtonText } from './Button.styled'

import { ButtonProps } from './Button.types'
import { ButtonContext } from './hooks/useButtonContext'
import { useButtonProps } from './hooks/useButtonProps'

const Button: FC<ButtonProps> = ({ children, ...props }) => {
  const buttonProps = useButtonProps(props)

  return (
    <ButtonContext.Provider value={buttonProps}>
      <ButtonWrapper>
        {typeof children === 'string' ? (
          <ButtonText>{children}</ButtonText>
        ) : (
          children
        )}
      </ButtonWrapper>
    </ButtonContext.Provider>
  )
}

export default Button
