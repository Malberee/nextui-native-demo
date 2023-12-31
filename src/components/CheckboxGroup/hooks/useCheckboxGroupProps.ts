import { CheckboxGroupContextProps } from '../CheckboxGroup.types'

export const defaultProps: Required<CheckboxGroupContextProps> = {
  color: 'primary',
  size: 'md',
  radius: 'md',
  isDisabled: false,
  isIndeterminate: false,
  lineThrough: false,
  isRequired: false,
  isInvalid: false,
  isReadOnly: false,
  selectCheckbox: () => {},
}

export const useCheckboxGroupProps = (
  props: Partial<CheckboxGroupContextProps>,
): Required<CheckboxGroupContextProps> => {
  return { ...defaultProps, ...props }
}
