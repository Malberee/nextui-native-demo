import React, { FC, useEffect, useRef, useState } from 'react'
import {
  InputWrapper,
  InputInner,
  StyledTextInput,
  Label,
  Description,
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
  onValueChange,
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

  useEffect(() => {
    onValueChange?.(inputValue)
  }, [inputValue, onValueChange])

  const placeholderColor =
    color === 'default' ? colors.default500 : colors[color]

  return (
    <InputContext.Provider value={inputProps}>
      <InputWrapper onPress={() => inputRef.current?.focus()}>
        <InputInner>
          {label && <Label style={animatedLabelStyles}>{label}</Label>}
          <StyledTextInput
            cursorColor={colors[color]}
            placeholder={placeholder}
            placeholderTextColor={placeholderColor}
            defaultValue={defaultValue}
            value={value}
            onChangeText={setInputValue}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            // @ts-ignore
            ref={inputRef}
            {...props}
          />
        </InputInner>

        {description && <Description>{description}</Description>}
      </InputWrapper>
    </InputContext.Provider>
  )
}

export default Input
