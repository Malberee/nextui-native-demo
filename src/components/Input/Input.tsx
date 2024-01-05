import React, { FC } from 'react'
import {
  InputWrapper,
  InputInner,
  StyledTextInput,
  Placeholder,
} from './Input.styled'

import { InputProps } from './Input.types'
import { InputContext } from './hooks/useInputContext'
import useInputProps from './hooks/useInputProps'
import useColors from '../ThemeProvider/hooks/useColors'

const Input: FC<InputProps> = ({ placeholder, ...props }) => {
  const inputProps = useInputProps(props)
  const { color } = inputProps
  const { colors } = useColors()

  return (
    <InputContext.Provider value={inputProps}>
      <InputWrapper>
        <InputInner>
          <StyledTextInput cursorColor={colors[color]} {...props} />
          <Placeholder>{placeholder}</Placeholder>
        </InputInner>
      </InputWrapper>
    </InputContext.Provider>
  )
}

export default Input
