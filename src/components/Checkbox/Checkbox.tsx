import React, { FC } from 'react'
import { CheckboxWrapper, CheckboxPressable } from './Checkbox.styled'

import { CheckboxProps } from './Checkbox.types'
import { Text } from 'react-native-svg'
import { CheckboxContext } from './hooks/useCheckboxContext'
import { useCheckboxProps } from './hooks/useCheckboxProps'

const Checkbox: FC<CheckboxProps> = ({
  children,
  isSelected,
  onValueChange,
  value,
  ...props
}) => {
  const checkboxProps = useCheckboxProps(props)

  return (
    <CheckboxContext.Provider value={checkboxProps}>
      <CheckboxWrapper>
        <CheckboxPressable>{isSelected && <Text>√</Text>}</CheckboxPressable>
        {children}
      </CheckboxWrapper>
    </CheckboxContext.Provider>
  )
}

export default Checkbox
