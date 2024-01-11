import React, { FC, useState } from 'react'
import {
  RadioGroupWrapper,
  RadioGroupLabel,
  RadioList,
  RadioGroupDescription,
  ErrorMessage,
  Asterisk,
} from './RadioGroup.styled'

import { RadioGroupProps } from './RadioGroup.types'
import { RadioGroupContext } from './hooks/useRadioGroupContext'

const RadioGroup: FC<RadioGroupProps> = ({
  children,
  label,
  description,
  orientation,
  name,
  value,
  defaultValue,
  errorMessage,
  isInvalid,
  isRequired,
  styles,
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
      <RadioGroupWrapper css={styles?.wrapper as any}>
        <RadioGroupLabel css={styles?.label as any}>
          {label}
          {isRequired && <Asterisk>*</Asterisk>}
        </RadioGroupLabel>
        <RadioList orientation={orientation}>{children}</RadioList>
        <RadioGroupDescription css={styles?.description as any}>
          {description}
        </RadioGroupDescription>
        {isInvalid && <ErrorMessage>{errorMessage}</ErrorMessage>}
      </RadioGroupWrapper>
    </RadioGroupContext.Provider>
  )
}

export default RadioGroup
