import React, { FC, useState } from 'react'
import { Animated, GestureResponderEvent } from 'react-native'
import { ButtonWrapper, ButtonContent } from './Button.styled'

import { ButtonProps, PressEventType } from './Button.types'
import { ButtonContext } from './hooks/useButtonContext'
import { useButtonProps } from './hooks/useButtonProps'
import { getTextColor } from '../../utils'
import useColors from '../ThemeProvider/hooks/useColors'

const Button: FC<ButtonProps> = ({
  children,
  disableRipple,
  startContent,
  endContent,
  onPress,
  onPressIn,
  onPressOut,
  ...props
}) => {
  const [scaleValue, setScaleValue] = useState(new Animated.Value(1))
  const { isIconOnly, ...buttonProps } = useButtonProps(props)
  const { colors } = useColors()

  const animateButton = (action: Omit<PressEventType, 'press'>) => {
    Animated.timing(scaleValue, {
      toValue: action === 'pressIn' ? 0.973 : 1,
      duration: 100,
      useNativeDriver: true,
    }).start()
  }

  const handlePress = (
    eventType: PressEventType,
    event?: GestureResponderEvent,
    callback?: (event?: GestureResponderEvent) => void,
  ) => {
    animateButton(eventType)
    if (callback) {
      callback(event)
    }
  }

  const androidRipple = {
    color: `${
      buttonProps.variant === 'solid' || buttonProps.variant === 'shadow'
        ? `${getTextColor(buttonProps.color)}40`
        : `${colors[buttonProps.color]}30`
    }`,
    foreground: true,
  }

  return (
    <ButtonContext.Provider value={{isIconOnly, ...buttonProps}}>
      <ButtonWrapper
        style={[{ transform: [{ scale: scaleValue }] }]}
        onPressIn={(event) => handlePress('pressIn', event, onPressIn)}
        onPressOut={(event) => handlePress('pressOut', event, onPressOut)}
        onPress={(event) => handlePress('press', event, onPress)}
        android_ripple={!disableRipple ? androidRipple : undefined}
      >
        {!isIconOnly && startContent}
        <ButtonContent>{children}</ButtonContent>
        {!isIconOnly && endContent}
      </ButtonWrapper>
    </ButtonContext.Provider>
  )
}

export default Button
