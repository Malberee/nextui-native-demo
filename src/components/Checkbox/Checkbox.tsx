import React, { FC, useEffect, useState } from 'react'
import {
  CheckboxWrapper,
  CheckboxOutline,
  CheckboxFiller,
  LabelText,
  Line,
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
import { PanGestureHandler } from 'react-native-gesture-handler'
import { View } from 'react-native'

const Checkbox: FC<CheckboxProps> = ({
  label,
  value,
  icon,
  onValueChange,
  ...props
}) => {
  const checkboxProps = useCheckboxProps(props)
  const {
    isSelected,
    defaultSelected,
    isIndeterminate,
    isReadOnly,
    lineThrough,
  } = checkboxProps

  const [isChecked, setIsChecked] = useState(
    (isIndeterminate || defaultSelected) ?? isSelected ?? false,
  )
  const {
    animatedFillerStyles,
    animatedCheckboxStyles,
    animatedLineStyles,
    animatedOpacityStyles,
    gestureHandler,
  } = useCheckboxAnimation(isChecked, lineThrough)
  const iconColor = useTextColor(checkboxProps.color)
  const { selectCheckbox } = useCheckboxGroupContext()

  const handlePress = () => {
    if (isIndeterminate || isReadOnly) {
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
        <PanGestureHandler onGestureEvent={gestureHandler}>
          <CheckboxWrapper>
            <CheckboxOutline style={animatedCheckboxStyles}>
              <CheckboxFiller style={animatedFillerStyles}>
                {checkboxProps.isIndeterminate ? (
                  <MinusIcon />
                ) : (
                  icon ?? (
                    <Checkmark color={iconColor} width="60%" height="60%" />
                  )
                )}
              </CheckboxFiller>
            </CheckboxOutline>
            <View>
              <LabelText style={animatedOpacityStyles}>{label}</LabelText>
              <Line
                style={{ ...animatedOpacityStyles, ...animatedLineStyles }}
              />
            </View>
          </CheckboxWrapper>
        </PanGestureHandler>
      </Pressable>
    </CheckboxContext.Provider>
  )
}

export default Checkbox
