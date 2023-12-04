import React, { FC, useState, useEffect } from 'react'
import { Pressable } from 'react-native'
import IconFeather from 'react-native-vector-icons/Feather'
import {
  GestureDetector,
  GestureHandlerRootView,
} from 'react-native-gesture-handler'
import {
  SwitchWrapper,
  SwitchThumb,
  SwitchLabel,
  StartContentWrapper,
  EndContentWrapper,
} from './Switch.styled'

import { useSwitchProps } from './hooks/useSwitchProps'
import { SwitchProps } from './Switch.types'
import { SwitchContext } from './hooks/useSwitchContext'
import { useSwitchAnimation } from './hooks/useSwitchAnimation'

const Switch: FC<SwitchProps> = ({
  children,
  startContent,
  endContent,
  thumbIcon,
  isSelected,
  onValueChange,
  ...props
}) => {
  const { color, size, defaultSelected, ...switchProps } =
    useSwitchProps({isSelected, ...props})
  const [isChecked, setIsChecked] = useState<boolean>(defaultSelected || false)
  const {
    backgroundStyle,
    thumbStyle,
    endContentStyle,
    startContentStyle,
    pan,
  } = useSwitchAnimation(isSelected ?? isChecked, color, size)

  const handleToggle = () => {
    if (onValueChange) {
      onValueChange(!!isSelected)
    } else {
      setIsChecked((prevState) => !prevState)
    }
  }

  return (
    <SwitchContext.Provider
      value={{ color, size, defaultSelected, ...switchProps }}
    >
        <GestureDetector gesture={pan}>
          <Pressable onPress={handleToggle}>
            <SwitchWrapper
              isChecked={isSelected ?? isChecked}
              style={backgroundStyle}
            >
              <StartContentWrapper style={startContentStyle}>
                {startContent}
              </StartContentWrapper>
              <SwitchThumb
                isChecked={isSelected ?? isChecked}
                style={thumbStyle}
              >
                {thumbIcon}
              </SwitchThumb>
              <EndContentWrapper style={endContentStyle}>
                {endContent}
              </EndContentWrapper>
            </SwitchWrapper>
            <SwitchLabel>{children}</SwitchLabel>
          </Pressable>
        </GestureDetector>
    </SwitchContext.Provider>
  )
}

export default Switch
