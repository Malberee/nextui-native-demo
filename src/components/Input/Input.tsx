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
} from './Input.styled'

import { InputProps } from './Input.types'
import { InputContext } from './hooks/useInputContext'
import useInputProps from './hooks/useInputProps'
import useColors from '../ThemeProvider/hooks/useColors'
import useInputAnimation from './hooks/useInputAnimation'
import { LayoutChangeEvent, Pressable, TextInput, View } from 'react-native'
import { getSize } from '../../utils/getSize'
import { paddings } from './Input.constants'

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
  const [labelHeight, setLabelHeight] = useState(0)
  const inputProps = useInputProps(props)
  const { color, isClearable, labelPlacement, size } = inputProps
  const { colors } = useColors()
  const shouldChangeLabelPosition =
    (!!isFocused || !!placeholder || !!inputValue || !!startContent) &&
    labelPlacement === 'inside'

  const { animatedLabelStyles } = useInputAnimation(
    shouldChangeLabelPosition,
    size,
  )
  const inputRef = useRef<TextInput>(null)

  const handleClear = () => {
    if (onClear) {
      onClear()
      return
    }
    setInputValue('')
    inputRef.current?.clear()
  }

  const handleLayout = (event: LayoutChangeEvent) => {
    if (!labelHeight) {
      setLabelHeight(event.nativeEvent.layout.height)
    }
    return
  }

  useEffect(() => {
    onValueChange?.(inputValue)
  }, [inputValue, onValueChange])

  const accentColor = color === 'default' ? colors.default500 : colors[color]

  return (
    <InputContext.Provider value={inputProps}>
      <InputContainer>
        {label && labelPlacement !== 'inside' && <Label>{label}</Label>}
        <InputWrapper onPress={() => inputRef.current?.focus()}>
          {label && labelPlacement === 'inside' && (
            <>
              <Label onLayout={handleLayout} style={animatedLabelStyles}>
                {label}
              </Label>
              <View
                style={{
                  height: labelHeight - getSize(paddings, size),
                  zIndex: 10,
                  width: 100,
                }}
              ></View>
            </>
          )}
          <InputInner>
            {startContent}
            <TextFieldWrapper>
              {placeholder && !inputValue && (
                <Placeholder>{placeholder}</Placeholder>
              )}
              <StyledTextInput
                cursorColor={accentColor}
                onChangeText={(_value) => setInputValue(_value)}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                // @ts-ignore
                ref={inputRef}
              />
            </TextFieldWrapper>
            {endContent}
            {isClearable && inputValue && (
              <Pressable onPress={handleClear}>
                <CloseCircle color={accentColor} />
              </Pressable>
            )}
          </InputInner>
        </InputWrapper>
      </InputContainer>
      {description && <Description>{description}</Description>}
    </InputContext.Provider>
  )
}

export default Input
