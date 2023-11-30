import React, { FC } from 'react'
import { ButtonWrapper, ButtonText } from './Button.styled'

import { ButtonProps } from './Button.types'
import { useAvatarProps } from '../Avatar/hooks/useAvatarProps'
import { ButtonContext } from './hooks/useButtonContext'

const Button: FC<ButtonProps> = ({ children, ...props }) => {
  const buttonProps = useAvatarProps(props)

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
