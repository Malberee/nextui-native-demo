import React, { FC, useEffect, useState } from 'react'
import {
  CheckboxWrapper,
  CheckboxOutline,
  CheckboxFiller,
  LabelWrapper,
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

const Checkbox: FC<CheckboxProps> = ({
  children,
  value,
  icon,
  styles,
  onValueChange,
  ...props
}) => {
  const checkboxProps = useCheckboxProps(props)
  const {
    isSelected,
    defaultSelected,
    isIndeterminate,
    isReadOnly,
    isDisabled,
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

  const getChildren = () => {
    if (typeof children === 'string') {
      return (
        <LabelText style={animatedOpacityStyles} css={styles?.label as any}>
          {children}
        </LabelText>
      )
    }
    return children
  }

  return (
    <CheckboxContext.Provider
      value={{ ...checkboxProps, isSelected: isChecked }}
    >
      <Pressable
        onPress={handlePress}
        disabled={isIndeterminate || isReadOnly || isDisabled}
      >
        <PanGestureHandler onGestureEvent={gestureHandler}>
          <CheckboxWrapper css={styles?.wrapper as any}>
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
            <LabelWrapper css={styles?.content as any}>
              {getChildren()}
              <Line style={[animatedOpacityStyles, animatedLineStyles]} />
            </LabelWrapper>
          </CheckboxWrapper>
        </PanGestureHandler>
      </Pressable>
    </CheckboxContext.Provider>
  )
}

export default Checkbox
