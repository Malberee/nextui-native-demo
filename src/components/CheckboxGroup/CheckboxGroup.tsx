import React, { FC, useEffect, useState } from 'react'
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
      setSelectedCheckboxes([...selectedCheckboxes, checkboxValue])
      return
    }
    setSelectedCheckboxes(
      selectedCheckboxes.filter((item) => item !== checkboxValue),
    )
  }

  return (
    <CheckboxGroupContext.Provider value={checkboxGroupProps}>
      <Name>{name}</Name>
      <CheckboxGroupWrapper>
        {React.Children.map(children, (child: any, index) =>
          React.cloneElement(child, {
            key: index,
            isSelected:
              child.props.isSelected ??
              selectedCheckboxes.includes(child.props.value),
            onValueChange: child.props.onValueChange ?? selectCheckbox,
          }),
        )}
      </CheckboxGroupWrapper>
      <Description>{description}</Description>
      <ErrorMessage>{errorMessage}</ErrorMessage>
    </CheckboxGroupContext.Provider>
  )
}

export default CheckboxGroup
