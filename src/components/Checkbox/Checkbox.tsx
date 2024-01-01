import React, { FC, useEffect, useState } from 'react'
import {
  CheckboxWrapper,
  CheckboxOutline,
  CheckboxFiller,
  Label,
  MinusIcon,
} from './Checkbox.styled'

import { CheckboxProps } from './Checkbox.types'
import { CheckboxContext } from './hooks/useCheckboxContext'
import { useCheckboxProps } from './hooks/useCheckboxProps'
import { Pressable } from 'react-native'
import useCheckboxAnimation from './hooks/useCheckboxAnimation'
import { Checkmark } from 'nextui-native-icons'
import { useTextColor } from '../../hooks/useTextColor'
import { useCheckboxGroupContext } from '../CheckboxGroup/hooks/useCheckboxGroupContext'

const Checkbox: FC<CheckboxProps> = ({
  label,
  value,
  icon,
  onValueChange,
  ...props
}) => {
  const checkboxProps = useCheckboxProps(props)
  const { isSelected, defaultSelected, isIndeterminate } = checkboxProps

  const [isChecked, setIsChecked] = useState(
    (isIndeterminate || defaultSelected) ?? isSelected ?? false,
  )
  const { animatedCheckboxStyles } = useCheckboxAnimation(isChecked)
  const iconColor = useTextColor(checkboxProps.color)
  const { selectCheckbox } = useCheckboxGroupContext()

  const handlePress = () => {
    if (isIndeterminate) {
      return
    }

    if (selectCheckbox) {
      selectCheckbox(value)
    }
    setIsChecked((prevState) => !prevState)
  }

  useEffect(() => {
    if (onValueChange) {
      onValueChange(isChecked)
    }
  }, [isChecked, onValueChange])

  return (
    <CheckboxContext.Provider
      value={{ ...checkboxProps, isSelected: isChecked }}
    >
      <Pressable onPress={handlePress}>
        <CheckboxWrapper>
          <CheckboxOutline>
            <CheckboxFiller style={animatedCheckboxStyles}>
              {checkboxProps.isIndeterminate ? (
                <MinusIcon />
              ) : (
                icon ?? <Checkmark color={iconColor} width="60%" height="60%" />
              )}
            </CheckboxFiller>
          </CheckboxOutline>
          <Label>{label}</Label>
        </CheckboxWrapper>
      </Pressable>
    </CheckboxContext.Provider>
  )
}

export default Checkbox
