import React, { FC } from 'react'
import { Text } from 'react-native'
import { CheckboxWrapper } from './Checkbox.styled'

import { CheckboxProps } from './Checkbox.types'

const Checkbox: FC<CheckboxProps> = () => {
  return (
    <CheckboxWrapper>
      <Text>Checkbox Component</Text>
    </CheckboxWrapper>
  )
}

export default Checkbox
