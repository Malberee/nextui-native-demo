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
import { useRadioAnimation } from './hooks/useRadioAnimation'

const Radio: FC<RadioProps> = ({ label, ...props }) => {
  const radioProps = useRadioProps(props)
  const { value, color, selectedRadio, isDisabled } = radioProps
  const { setSelectedRadio } = useRadioGroupContext()
  const { radioDotStyle, radioOutlineStyle } = useRadioAnimation(
    selectedRadio === value,
    color,
  )

  const handlePress = () => {
    !isDisabled && setSelectedRadio(value)
  }

  return (
    <RadioContext.Provider value={radioProps}>
      <Pressable onPress={handlePress}>
        <RadioWrapper>
          <RadioOutline style={radioOutlineStyle}>
            <RadioDot style={radioDotStyle} />
          </RadioOutline>
          <RadioLabel>{label}</RadioLabel>
        </RadioWrapper>
      </Pressable>
    </RadioContext.Provider>
  )
}

export default Radio
