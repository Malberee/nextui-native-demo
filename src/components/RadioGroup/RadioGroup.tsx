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
  const [selectedRadio, setSelectedRadio] = useState(value)

  return (
    <RadioGroupContext.Provider
      value={{ selectedRadio, setSelectedRadio, ...props }}
    >
      <RadioGroupWrapper orientation={orientation}>
        {children}
        <RadioGroupLabel>{label}</RadioGroupLabel>
      </RadioGroupWrapper>
    </RadioGroupContext.Provider>
  )
}

export default RadioGroup
