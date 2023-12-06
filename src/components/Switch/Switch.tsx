import React, { FC, useState } from 'react'
import { Pressable } from 'react-native'
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
  const { color, size, defaultSelected, ...switchProps } = useSwitchProps({
    isSelected,
    ...props,
  })
  const [isChecked, setIsChecked] = useState<boolean>(defaultSelected || false)
  const { backgroundStyle, thumbStyle, endContentStyle, startContentStyle } =
    useSwitchAnimation(isSelected ?? isChecked, color, size)

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
      <Pressable onPress={handleToggle}>
        <SwitchWrapper
          isChecked={isSelected ?? isChecked}
          style={backgroundStyle}
        >
          <StartContentWrapper style={startContentStyle}>
            {startContent}
          </StartContentWrapper>
          <SwitchThumb isChecked={isSelected ?? isChecked} style={thumbStyle}>
            {thumbIcon}
          </SwitchThumb>
          <EndContentWrapper style={endContentStyle}>
            {endContent}
          </EndContentWrapper>
        </SwitchWrapper>
        <SwitchLabel>{children}</SwitchLabel>
      </Pressable>
    </SwitchContext.Provider>
  )
}

export default Switch
