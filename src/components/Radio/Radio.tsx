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

const Radio: FC<RadioProps> = ({ label, ...props }) => {
  const radioProps = useRadioProps(props)

  return (
    <RadioContext.Provider value={radioProps}>
      <Pressable>
        <RadioWrapper>
          <RadioOutline>
            <RadioDot />
          </RadioOutline>
          <RadioLabel>{label}</RadioLabel>
        </RadioWrapper>
      </Pressable>
    </RadioContext.Provider>
  )
}

export default Radio
