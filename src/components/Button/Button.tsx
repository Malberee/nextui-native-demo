import React, { FC, useState } from 'react'
import { ButtonWrapper, ButtonContent, Ripple } from './Button.styled'

import { ButtonProps } from './Button.types'
import { ButtonContext } from './hooks/useButtonContext'
import { useButtonProps } from './hooks/useButtonProps'
import { getShadow } from '../../utils/getShadow'
import useColors from '../ThemeProvider/hooks/useColors'
import { useButtonAnimation } from './hooks/useButtonAnimation'
import { PanGestureHandler } from 'react-native-gesture-handler'
import { LayoutChangeEvent, View } from 'react-native'

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
  const { gestureHandler, ref, animatedButtonStyle, animatedRippleStyle } =
    useButtonAnimation()
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
          // @ts-ignore
          ref={ref}
          collapsable={false}
        >
          {!isIconOnly && startContent}
          <ButtonContent>{children}</ButtonContent>
          {!isIconOnly && endContent}
          {!disableRipple && <Ripple style={animatedRippleStyle} />}
        </ButtonWrapper>
      </PanGestureHandler>
    </ButtonContext.Provider>
  )
}

export default Button
