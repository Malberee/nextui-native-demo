import React, { FC, useEffect } from 'react'
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
  onValueChange,
  ...props
}) => {
  const checkboxProps = useCheckboxProps(props)
  const { isSelected } = checkboxProps
  const { animatedCheckboxStyles } = useCheckboxAnimation(
    checkboxProps.isSelected,
  )
  const iconColor = useTextColor(checkboxProps.color)
  const { selectCheckbox } = useCheckboxGroupContext()

  const handlePress = () => {
    if (!onValueChange) {
      selectCheckbox(value)
    }
  }

  useEffect(() => {
    if (onValueChange) {
      onValueChange(isSelected)
    }
  }, [isSelected, onValueChange])

  return (
    <CheckboxContext.Provider value={checkboxProps}>
      <Pressable onPress={handlePress}>
        <CheckboxWrapper>
          <CheckboxOutline>
            <CheckboxFiller style={animatedCheckboxStyles}>
              {checkboxProps.isIndeterminate ? (
                <MinusIcon />
              ) : (
                <Checkmark color={iconColor} width="60%" height="60%" />
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
