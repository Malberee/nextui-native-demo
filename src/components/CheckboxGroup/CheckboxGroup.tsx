import React, { FC } from 'react'
import { Text } from 'react-native'
import { CheckboxGroupWrapper } from './CheckboxGroup.styled'

import { CheckboxGroupProps } from './CheckboxGroup.types'

const CheckboxGroup: FC<CheckboxGroupProps> = () => {
  return (
    <CheckboxGroupWrapper>
      <Text>CheckboxGroup Component</Text>
    </CheckboxGroupWrapper>
  )
}

export default CheckboxGroup
