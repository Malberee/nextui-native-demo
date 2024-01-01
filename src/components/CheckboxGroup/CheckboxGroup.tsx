import React, { FC, useState } from 'react'
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
  defaultValue,
  value,
  onValueChange,
  ...props
}) => {
  const [selectedCheckboxes, setSelectedCheckboxes] = useState<string[]>(
    value ?? defaultValue ?? [],
  )
  const checkboxGroupProps = useCheckboxGroupProps(props)

  const selectCheckbox = (checkboxValue: string) => {
    if (!selectedCheckboxes.includes(checkboxValue)) {
      if (onValueChange) {
        onValueChange([...selectedCheckboxes, checkboxValue])
      }
      setSelectedCheckboxes([...selectedCheckboxes, checkboxValue])

      return
    }

    if (onValueChange) {
      onValueChange(selectedCheckboxes.filter((item) => item !== checkboxValue))
    }
    setSelectedCheckboxes(
      selectedCheckboxes.filter((item) => item !== checkboxValue),
    )
  }

  return (
    <CheckboxGroupContext.Provider
      value={{ ...checkboxGroupProps, selectCheckbox }}
    >
      <Name>{name}</Name>
      <CheckboxGroupWrapper>{children}</CheckboxGroupWrapper>
      <Description>{description}</Description>
      <ErrorMessage>{errorMessage}</ErrorMessage>
    </CheckboxGroupContext.Provider>
  )
}

export default CheckboxGroup
