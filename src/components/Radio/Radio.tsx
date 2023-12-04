import React, { FC } from 'react'
import { Pressable } from 'react-native'
import {
  RadioWrapper,
  RadioLabel,
  RadioOutline,
  RadioDot,
} from './Radio.styled'

import { RadioProps } from './Radio.types'
import { RadioContext } from './hooks/useRadioContext'
import { useRadioProps } from './hooks/useRadioProps'
import { useRadioGroupContext } from '../RadioGroup/hooks/useRadioGroupContext'

const Radio: FC<RadioProps> = ({ label, ...props }) => {
  const { value, selectedRadio, ...radioProps } = useRadioProps(props)
  const { setSelectedRadio } = useRadioGroupContext()

  return (
    <RadioContext.Provider value={{ value, selectedRadio, ...radioProps }}>
      <Pressable onPress={() => setSelectedRadio(value)}>
        <RadioWrapper>
          <RadioOutline>{selectedRadio === value && <RadioDot />}</RadioOutline>
          <RadioLabel>{label}</RadioLabel>
        </RadioWrapper>
      </Pressable>
    </RadioContext.Provider>
  )
}

export default Radio
