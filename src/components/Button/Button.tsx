import React, { FC } from 'react'
import { ButtonWrapper, ButtonContent } from './Button.styled'

import { ButtonProps } from './Button.types'
import { ButtonContext } from './hooks/useButtonContext'
import { useButtonProps } from './hooks/useButtonProps'
import { getTextColor } from '../../utils'
import useColors from '../ThemeProvider/hooks/useColors'

const Button: FC<ButtonProps> = ({ children, onPress, ...props }) => {
  const { startContent, endContent, isIconOnly, ...buttonProps } =
    useButtonProps(props)
  const { colors } = useColors()

  return (
    <ButtonContext.Provider value={{ isIconOnly, ...buttonProps }}>
      <ButtonWrapper
        onPress={onPress}
        android_ripple={{
          color: `${
            buttonProps.variant === 'solid' || buttonProps.variant === 'shadow'
              ? `${getTextColor(buttonProps.color)}40`
              : `${colors[buttonProps.color]}30`
          }`,
          foreground: true,
        }}
      >
        {!isIconOnly && startContent}
        <ButtonContent>{children}</ButtonContent>
        {!isIconOnly && endContent}
      </ButtonWrapper>
    </ButtonContext.Provider>
  )
}

export default Button
