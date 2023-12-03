import React, { FC, useState, useEffect } from 'react'
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
  ...props
}) => {
  const { color, size, defaultSelected, ...switchProps } = useSwitchProps(props)
  const [isChecked, setIsChecked] = useState<boolean>(defaultSelected || false)
  const { backgroundColorStyle, thumbStyle } = useSwitchAnimation(
    isChecked,
    color,
    size,
  )

  return (
    <SwitchContext.Provider
      value={{ color, size, defaultSelected, ...switchProps }}
    >
      <Pressable onPress={() => setIsChecked((prevState) => !prevState)}>
        <SwitchWrapper isChecked={isChecked} style={backgroundColorStyle}>
          <StartContentWrapper>{startContent}</StartContentWrapper>
          <SwitchThumb isChecked={isChecked} style={thumbStyle}>
            {thumbIcon}
          </SwitchThumb>
          <EndContentWrapper>{endContent}</EndContentWrapper>
        </SwitchWrapper>
        <SwitchLabel>{children}</SwitchLabel>
      </Pressable>
    </SwitchContext.Provider>
  )
}

export default Switch
