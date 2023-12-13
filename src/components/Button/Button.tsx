import React, { FC } from 'react'
import { ButtonWrapper, ButtonContent } from './Button.styled'

import { ButtonProps } from './Button.types'
import { ButtonContext } from './hooks/useButtonContext'
import { useButtonProps } from './hooks/useButtonProps'
import { getShadow } from '../../utils/getShadow'
import useColors from '../ThemeProvider/hooks/useColors'
import { useButtonAnimation } from './hooks/useButtonAnimation'
import { PanGestureHandler } from 'react-native-gesture-handler'

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
  const { isIconOnly, isDisabled, variant, color, ...buttonProps } =
    useButtonProps(props)
  const { gestureHandler, animatedButtonStyle } = useButtonAnimation()
  const { colors } = useColors()

  return (
    <ButtonContext.Provider
      value={{ isIconOnly, isDisabled, variant, color, ...buttonProps }}
    >
      <PanGestureHandler onGestureEvent={gestureHandler}>
        <ButtonWrapper
          style={[
            { ...animatedButtonStyle, ...getShadow(variant, colors, color) },
          ]}
        >
          {!isIconOnly && startContent}
          <ButtonContent>{children}</ButtonContent>
          {!isIconOnly && endContent}
        </ButtonWrapper>
      </PanGestureHandler>
    </ButtonContext.Provider>
  )
}

export default Button
