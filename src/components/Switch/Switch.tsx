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

const Switch: FC<SwitchProps> = ({
  children,
  startContent,
  endContent,
  thumbIcon,
  defaultSelected,
  ...props
}) => {
  const [isChecked, setIsChecked] = useState<boolean>(defaultSelected || false)
  const switchProps = useSwitchProps(props)

  return (
    <SwitchContext.Provider value={switchProps}>
      <Pressable onPress={() => setIsChecked((prevValue) => !prevValue)}>
        <SwitchWrapper isChecked={isChecked}>
          <StartContentWrapper>{startContent}</StartContentWrapper>
          <SwitchThumb isChecked={isChecked}>{thumbIcon}</SwitchThumb>
          <EndContentWrapper>{endContent}</EndContentWrapper>
        </SwitchWrapper>
        <SwitchLabel>{children}</SwitchLabel>
      </Pressable>
    </SwitchContext.Provider>
  )
}

export default Switch
