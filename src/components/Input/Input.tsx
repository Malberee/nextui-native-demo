import React, { FC, useEffect, useRef, useState } from 'react'
import { CloseCircle } from 'nextui-native-icons'
import {
  InputContainer,
  InputWrapper,
  InputInner,
  TextFieldWrapper,
  StyledTextInput,
  Label,
  Placeholder,
  Description,
  ClearPressable,
} from './Input.styled'

import { InputProps } from './Input.types'
import { InputContext } from './hooks/useInputContext'
import useInputProps from './hooks/useInputProps'
import useColors from '../ThemeProvider/hooks/useColors'
import useInputAnimation from './hooks/useInputAnimation'
import { TextInput } from 'react-native'
import { View } from 'react-native'
import Animated from 'react-native-reanimated'

const Input: FC<InputProps> = ({
  placeholder,
  label,
  description,
  value,
  defaultValue,
  startContent,
  endContent,
  onValueChange,
  onClear,
  ...props
}) => {
  const [inputValue, setInputValue] = useState(value || defaultValue || '')
  const [isFocused, setIsFocused] = useState(false)
  const inputProps = useInputProps(props)
  const { color, isClearable, labelPlacement } = inputProps
  const { colors } = useColors()
  const shouldChangeLabelPosition = !!isFocused || !!placeholder || !!inputValue
  const { animatedLabelStyles } = useInputAnimation(shouldChangeLabelPosition)
  const inputRef = useRef<TextInput>(null)

  const handleClear = () => {
    if (onClear) {
      onClear()
      return
    }
    setInputValue('')
    inputRef.current?.clear()
  }

  useEffect(() => {
    onValueChange?.(inputValue)
  }, [inputValue, onValueChange])

  const accentColor = color === 'default' ? colors.default500 : colors[color]

  return (
    <InputContext.Provider value={inputProps}>
      <InputContainer>
        {label && labelPlacement !== 'inside' && <Label>{label}</Label>}
        <InputWrapper>
          {label && labelPlacement === 'inside' && <Label>{label}</Label>}
          <InputInner>
            {startContent}
            <TextFieldWrapper>
              {placeholder && <Placeholder>{placeholder}</Placeholder>}
              <StyledTextInput />
            </TextFieldWrapper>
            {endContent}
          </InputInner>
        </InputWrapper>
      </InputContainer>
      {description && <Description>{description}</Description>}
    </InputContext.Provider>
  )
}

export default Input
