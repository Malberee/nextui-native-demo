import React, { FC } from 'react'
import { InputWrapper, StyledTextInput, Placeholder } from './Input.styled'

import { InputProps } from './Input.types'

const Input: FC<InputProps> = () => {
  return (
    <InputWrapper>
      <StyledTextInput style={{ backgroundColor: '#ccc' }}>
        <Placeholder>Input Component</Placeholder>
      </StyledTextInput>
    </InputWrapper>
  )
}

export default Input
