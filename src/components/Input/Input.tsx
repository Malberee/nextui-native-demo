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

const Input: FC<InputProps> = ({ placeholder, ...props }) => {
  const inputProps = useInputProps(props)

  return (
    <InputContext.Provider value={inputProps}>
      <InputWrapper>
        <InputInner>
          <StyledTextInput style={{ backgroundColor: '#ccc' }} />
          <Placeholder>{placeholder}</Placeholder>
        </InputInner>
      </InputWrapper>
    </InputContext.Provider>
  )
}

export default Input
