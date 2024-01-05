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
import { GestureDetector } from 'react-native-gesture-handler'

const Radio: FC<RadioProps> = ({ label, description, styles, ...props }) => {
  const radioProps = useRadioProps(props)
  const { value, color, selectedRadio, isDisabled, isInvalid, isReadOnly } =
    radioProps
  const isSelected = selectedRadio === value
  const { selectRadio } = useRadioGroupContext()
  const { radioDotStyle, radioOutlineStyle, pan } = useRadioAnimation(
    isSelected,
    isInvalid ? 'danger' : color,
    isInvalid,
    isDisabled,
  )

  const handlePress = () => {
    selectRadio(value)
  }

  return (
    <RadioContext.Provider value={radioProps}>
      <GestureDetector gesture={pan}>
        <Pressable onPress={handlePress} disabled={isReadOnly || isDisabled}>
          <RadioWrapper css={styles?.wrapper as any}>
            <RadioOutline style={radioOutlineStyle}>
              <RadioDot style={radioDotStyle} />
            </RadioOutline>
            <RadioContent css={styles?.content as any}>
              <RadioLabel css={styles?.label as any}>{label}</RadioLabel>
              {description && (
                <RadioDescription css={styles?.description as any}>
                  {description}
                </RadioDescription>
              )}
            </RadioContent>
          </RadioWrapper>
        </Pressable>
      </GestureDetector>
    </RadioContext.Provider>
  )
}

export default Radio
