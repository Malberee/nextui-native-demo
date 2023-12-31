import React, { FC } from 'react'
import { CheckboxWrapper, CheckboxPressable } from './Checkbox.styled'

import { CheckboxProps } from './Checkbox.types'
import { Text } from 'react-native-svg'
import { CheckboxContext } from './hooks/useCheckboxContext'
import { useCheckboxProps } from './hooks/useCheckboxProps'
import { Pressable } from 'react-native'

const Checkbox: FC<CheckboxProps> = ({
  children,
  value,
  onValueChange,
  ...props
}) => {
  const checkboxProps = useCheckboxProps(props)

  const handlePress = () => {
    if (onValueChange) {
      onValueChange(value)
    }
  }

  return (
    <CheckboxContext.Provider value={checkboxProps}>
      <Pressable onPress={handlePress}>
        <CheckboxWrapper>
          <CheckboxPressable>
            {checkboxProps.isSelected && <Text>√</Text>}
          </CheckboxPressable>
          {children}
        </CheckboxWrapper>
      </Pressable>
    </CheckboxContext.Provider>
  )
}

export default Checkbox
