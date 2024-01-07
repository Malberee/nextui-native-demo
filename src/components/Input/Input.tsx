import React, { FC, useEffect, useRef, useState } from 'react'
import { CloseCircle } from 'nextui-native-icons'
import {
  InputContainer,
  InputWrapper,
  InputInner,
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
  const { color, isClearable } = inputProps
  const { colors } = useColors()
  const shouldChangeLabelPosition = !!isFocused || !!placeholder || !!inputValue
  const { animatedLabelStyles } = useInputAnimation(shouldChangeLabelPosition)
  const inputRef = useRef<TextInput>(null)

  console.log(isClearable && inputValue)

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
    console.log(inputValue)
  }, [inputValue, onValueChange])

  const accentColor = color === 'default' ? colors.default500 : colors[color]

  return (
    <InputContext.Provider value={inputProps}>
      <InputContainer>
        {label && <Label>{label}</Label>}
        <InputWrapper>
          {startContent}
          <StyledTextInput
            cursorColor={accentColor}
            onChangeText={(_value) => setInputValue(_value)}
            value={inputValue}
            defaultValue={defaultValue}
            // @ts-ignore
            ref={inputRef}
          />
          {endContent}
          {isClearable && inputValue && (
            <ClearPressable onPress={handleClear}>
              <CloseCircle color={accentColor} />
            </ClearPressable>
          )}
        </InputWrapper>
        {description && <Description>{description}</Description>}
      </InputContainer>
    </InputContext.Provider>
  )
}

export default Input
