import React, { FC } from 'react'
import {
  CheckboxWrapper,
  CheckboxOutline,
  CheckboxFiller,
} from './Checkbox.styled'

import { CheckboxProps } from './Checkbox.types'
import { CheckboxContext } from './hooks/useCheckboxContext'
import { useCheckboxProps } from './hooks/useCheckboxProps'
import { Pressable } from 'react-native'
import useCheckboxAnimation from './hooks/useCheckboxAnimation'
import { Checkmark } from 'nextui-native-icons'

const Checkbox: FC<CheckboxProps> = ({
  children,
  value,
  onValueChange,
  ...props
}) => {
  const checkboxProps = useCheckboxProps(props)
  const { animatedCheckboxStyles } = useCheckboxAnimation(
    checkboxProps.isSelected,
  )

  const handlePress = () => {
    if (onValueChange) {
      onValueChange(value)
    }
  }

  return (
    <CheckboxContext.Provider value={checkboxProps}>
      <Pressable onPress={handlePress}>
        <CheckboxWrapper>
          <CheckboxOutline>
            <CheckboxFiller style={animatedCheckboxStyles}>
              <Checkmark color="white" width="60%" height="60%" />
            </CheckboxFiller>
          </CheckboxOutline>
          {children}
        </CheckboxWrapper>
      </Pressable>
    </CheckboxContext.Provider>
  )
}

export default Checkbox
