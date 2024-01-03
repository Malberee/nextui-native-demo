import React, { FC, useState } from 'react'
import { View } from 'react-native'
import {
  CheckboxGroupWrapper,
  Label,
  Description,
  ErrorMessage,
} from './CheckboxGroup.styled'

import { CheckboxGroupProps } from './CheckboxGroup.types'
import { CheckboxGroupContext } from './hooks/useCheckboxGroupContext'
import { useCheckboxGroupProps } from './hooks/useCheckboxGroupProps'

const CheckboxGroup: FC<CheckboxGroupProps> = ({
  children,
  label,
  description,
  errorMessage,
  defaultValue,
  value,
  styles,
  onValueChange,
  ...props
}) => {
  const [selectedCheckboxes, setSelectedCheckboxes] = useState<string[]>(
    value ?? defaultValue ?? [],
  )
  const checkboxGroupProps = useCheckboxGroupProps(props)
  const { isInvalid } = checkboxGroupProps

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
      <View>
        {label && <Label css={styles?.label as any}>{label}</Label>}
        <CheckboxGroupWrapper css={styles?.wrapper as any}>
          {React.Children.map(children, (child: any, index) =>
            React.cloneElement(child, {
              key: index,
              isSelected:
                child.props.isIndeterminate ??
                child.props.isSelected ??
                selectedCheckboxes.includes(child.props.value),
            }),
          )}
        </CheckboxGroupWrapper>
        {description && (
          <Description css={styles?.description as any}>
            {description}
          </Description>
        )}
        {isInvalid && errorMessage && (
          <ErrorMessage css={styles?.errorMessage as any}>
            {errorMessage}
          </ErrorMessage>
        )}
      </View>
    </CheckboxGroupContext.Provider>
  )
}

export default CheckboxGroup
