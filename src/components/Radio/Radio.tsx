import React, { FC } from 'react'
import { Pressable, StyleProp } from 'react-native'
import {
  RadioWrapper,
  RadioLabel,
  RadioContent,
  RadioDescription,
  RadioOutline,
  RadioDot,
} from './Radio.styled'

import { RadioProps, Styles } from './Radio.types'
import { RadioContext } from './hooks/useRadioContext'
import { useRadioProps } from './hooks/useRadioProps'
import { useRadioGroupContext } from '../RadioGroup/hooks/useRadioGroupContext'
import { useRadioAnimation } from './hooks/useRadioAnimation'
import { GestureDetector } from 'react-native-gesture-handler'

const Radio: FC<RadioProps> = ({ label, description, styles, ...props }) => {
  const radioProps = useRadioProps(props)
  const { value, color, selectedRadio, isDisabled, isInvalid } = radioProps
  const isSelected = selectedRadio === value
  const { selectRadio } = useRadioGroupContext()
  const { radioDotStyle, radioOutlineStyle, pan } = useRadioAnimation(
    isSelected,
    isInvalid ? 'danger' : color,
    isInvalid,
    isDisabled,
  )

  const handlePress = () => {
    if (!isDisabled) {
      selectRadio(value)
    }
  }

  const StylesKeys = Object.keys(styles)

  const getCustomStyles = (): StyleProp<Styles> | null => {
    if (!styles) return null

    console.log(!styles)

    return styles
  }

  console.log(!!getCustomStyles()?.wrapper)

  return (
    <RadioContext.Provider value={radioProps}>
      <GestureDetector gesture={pan}>
        <Pressable onPress={handlePress}>
          <RadioWrapper style={getCustomStyles()?.wrapper || null}>
            <RadioOutline style={radioOutlineStyle}>
              <RadioDot style={radioDotStyle} />
            </RadioOutline>
            <RadioContent>
              <RadioLabel>{label}</RadioLabel>
              {description && (
                <RadioDescription>{description}</RadioDescription>
              )}
            </RadioContent>
          </RadioWrapper>
        </Pressable>
      </GestureDetector>
    </RadioContext.Provider>
  )
}

export default Radio
