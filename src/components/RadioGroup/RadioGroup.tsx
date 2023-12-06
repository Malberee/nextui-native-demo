import React, { FC, useState } from 'react'
import {
  RadioGroupWrapper,
  RadioGroupLabel,
  RadioList,
  ErrorMessage,
  Asterisk,
} from './RadioGroup.styled'

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
  isInvalid,
  isRequired,
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
      value={{
        selectedRadio: value || selectedRadio,
        isInvalid,
        selectRadio,
        ...props,
      }}
    >
      <RadioGroupWrapper>
        <RadioGroupLabel>
          {label}
          {isRequired && <Asterisk>*</Asterisk>}
        </RadioGroupLabel>
        <RadioList orientation={orientation}>{children}</RadioList>
        {isInvalid && <ErrorMessage>{errorMessage}</ErrorMessage>}
      </RadioGroupWrapper>
    </RadioGroupContext.Provider>
  )
}

export default RadioGroup
