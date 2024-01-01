import { CheckboxGroupContextProps } from '../CheckboxGroup.types'

export const defaultProps: CheckboxGroupContextProps = {
  color: 'primary',
  size: 'md',
  radius: 'md',
  isDisabled: false,
  isIndeterminate: false,
  lineThrough: false,
  isRequired: false,
  isInvalid: false,
  isReadOnly: false,
  selectCheckbox: undefined,
}

export const useCheckboxGroupProps = (
  props: Partial<CheckboxGroupContextProps>,
): CheckboxGroupContextProps => {
  return { ...defaultProps, ...props }
}
