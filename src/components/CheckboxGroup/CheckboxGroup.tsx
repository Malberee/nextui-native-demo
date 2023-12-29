import React, { FC } from 'react'
import {
  CheckboxGroupWrapper,
  Name,
  Description,
  ErrorMessage,
} from './CheckboxGroup.styled'

import { CheckboxGroupProps } from './CheckboxGroup.types'
import { CheckboxGroupContext } from './hooks/useCheckboxGroupContext'
import { useCheckboxGroupProps } from './hooks/useCheckboxGroupProps'

const CheckboxGroup: FC<CheckboxGroupProps> = ({
  children,
  name,
  description,
  errorMessage,
  ...props
}) => {
  const checkboxGroupProps = useCheckboxGroupProps(props)

  return (
    <CheckboxGroupContext.Provider value={checkboxGroupProps}>
      <Name>{name}</Name>
      <CheckboxGroupWrapper>{children}</CheckboxGroupWrapper>
      <Description>{description}</Description>
      <ErrorMessage>{errorMessage}</ErrorMessage>
    </CheckboxGroupContext.Provider>
  )
}

export default CheckboxGroup
