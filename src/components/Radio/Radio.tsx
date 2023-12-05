import React, { FC } from 'react'
import { Pressable } from 'react-native'
import {
  RadioWrapper,
  RadioLabel,
  RadioContent,
  RadioDescription,
  RadioOutline,
  RadioDot,
} from './Radio.styled'

import { RadioProps } from './Radio.types'
import { RadioContext } from './hooks/useRadioContext'
import { useRadioProps } from './hooks/useRadioProps'
import { useRadioGroupContext } from '../RadioGroup/hooks/useRadioGroupContext'
import { useRadioAnimation } from './hooks/useRadioAnimation'

const Radio: FC<RadioProps> = ({ label, description, ...props }) => {
  const radioProps = useRadioProps(props)
  const { value, color, selectedRadio, isDisabled } = radioProps
  const { selectRadio } = useRadioGroupContext()
  const { radioDotStyle, radioOutlineStyle } = useRadioAnimation(
    selectedRadio === value,
    color,
  )

  const handlePress = () => {
    !isDisabled && selectRadio(value)
  }

  return (
    <RadioContext.Provider value={radioProps}>
      <Pressable onPress={handlePress}>
        <RadioWrapper>
          <RadioOutline style={radioOutlineStyle}>
            <RadioDot style={radioDotStyle} />
          </RadioOutline>
          <RadioContent>
            <RadioLabel>{label}</RadioLabel>
            {description && <RadioDescription>{description}</RadioDescription>}
          </RadioContent>
        </RadioWrapper>
      </Pressable>
    </RadioContext.Provider>
  )
}

export default Radio
