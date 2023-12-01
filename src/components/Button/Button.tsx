import React, { FC, useState } from 'react'
import { Animated } from 'react-native'
import { ButtonWrapper, ButtonContent } from './Button.styled'

import { ButtonProps } from './Button.types'
import { ButtonContext } from './hooks/useButtonContext'
import { useButtonProps } from './hooks/useButtonProps'
import { getTextColor } from '../../utils'
import useColors from '../ThemeProvider/hooks/useColors'

const Button: FC<ButtonProps> = ({ children, onPress, ...props }) => {
  const [scaleValue, setScaleValue] = useState(new Animated.Value(1))
  const { startContent, endContent, isIconOnly, ...buttonProps } =
    useButtonProps(props)
  const { colors } = useColors()

  const animateButton = (action: 'pressIn' | 'pressOut') => {
    Animated.timing(scaleValue, {
      toValue: action === 'pressIn' ? 0.973 : 1,
      duration: 100,
      useNativeDriver: true,
    }).start()
  }

  return (
    <ButtonContext.Provider value={{ isIconOnly, ...buttonProps }}>
      <ButtonWrapper
        style={[{ transform: [{ scale: scaleValue }] }]}
        onPressIn={() => animateButton('pressIn')}
        onPressOut={() => animateButton('pressOut')}
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
