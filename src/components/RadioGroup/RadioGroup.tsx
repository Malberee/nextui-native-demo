import React, { FC, useState } from 'react'
import {
  RadioGroupWrapper,
  RadioGroupLabel,
  RadioList,
  RadioGroupDescription,
  ErrorMessage,
  Asterisk,
} from './RadioGroup.styled'

import { RadioGroupProps, RadioGroupStyles } from './RadioGroup.types'
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

  const {
    wrapper: { default: wrapperDefault } = {},
    label: { default: labelDefault } = {},
    description: { default: descriptionDefault } = {},
  }: RadioGroupStyles = (styles as RadioGroupStyles) || {}

  return (
    <RadioGroupContext.Provider
      value={{
        selectedRadio: value || selectedRadio,
        isInvalid,
        selectRadio,
        ...props,
      }}
    >
      <RadioGroupWrapper
        css={`
          ${wrapperDefault}
        `}
      >
        <RadioGroupLabel
          css={`
            ${labelDefault}
          `}
        >
          {label}
          {isRequired && <Asterisk>*</Asterisk>}
        </RadioGroupLabel>
        <RadioList orientation={orientation}>{children}</RadioList>
        <RadioGroupDescription
          css={`
            ${descriptionDefault}
          `}
        >
          {description}
        </RadioGroupDescription>
        {isInvalid && <ErrorMessage>{errorMessage}</ErrorMessage>}
      </RadioGroupWrapper>
    </RadioGroupContext.Provider>
  )
}

export default RadioGroup
