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
}

export const useCheckboxGroupProps = (
  props: CheckboxGroupContextProps,
): Required<CheckboxGroupContextProps> => {
  return { ...defaultProps, ...props }
}
