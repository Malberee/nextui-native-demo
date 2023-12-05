import React, { FC, useState } from 'react'
import { RadioGroupWrapper, RadioGroupLabel } from './RadioGroup.styled'

import { RadioGroupProps } from './RadioGroup.types'
import { RadioGroupContext } from './hooks/useRadioGroupContext'

const RadioGroup: FC<RadioGroupProps> = ({
  children,
  label,
  orientation,
  name,
  value,
  defaultValue,
  errorMessage,
  onValueChange,
  ...props
}) => {
  const [selectedRadio, setSelectedRadio] = useState(defaultValue)

  const selectRadio = (newValue: string) => {
    if (onValueChange) {
      onValueChange(newValue)
    } else {
      setSelectedRadio(newValue)
    }
  }

  

  return (
    <RadioGroupContext.Provider
      value={{ selectedRadio: value || selectedRadio, selectRadio, ...props }}
    >
      <RadioGroupWrapper orientation={orientation}>
        <RadioGroupLabel>{label}</RadioGroupLabel>
        {children}
      </RadioGroupWrapper>
    </RadioGroupContext.Provider>
  )
}

export default RadioGroup
