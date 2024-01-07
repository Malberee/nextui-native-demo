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
  isClearable,
  onValueChange,
  onClear,
  ...props
}) => {
  const [inputValue, setInputValue] = useState('')
  const [isFocused, setIsFocused] = useState(false)
  const inputProps = useInputProps(props)
  const { color } = inputProps
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
    console.log(inputValue)
  }, [inputValue, onValueChange])

  const clearIconColor = color === 'default' ? colors.default500 : colors[color]

  return (
    <InputContext.Provider value={inputProps}>
      <InputContainer>
        <InputWrapper onPress={() => inputRef.current?.focus()}>
          {label && <Label style={animatedLabelStyles}>{label}</Label>}
          <InputInner>
            {placeholder && !inputValue && (
              <Placeholder>{placeholder}</Placeholder>
            )}
            <StyledTextInput
              cursorColor={colors[color]}
              // placeholder={placeholder}
              // placeholderTextColor={placeholderColor}
              defaultValue={defaultValue}
              value={value}
              onChangeText={setInputValue}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              // @ts-ignore
              ref={inputRef}
              {...props}
            />
            {inputValue && (
              <ClearPressable onPress={handleClear}>
                <CloseCircle color={clearIconColor} />
              </ClearPressable>
            )}
          </InputInner>
        </InputWrapper>
        {description && <Description>{description}</Description>}
      </InputContainer>
    </InputContext.Provider>
  )
}

export default Input
