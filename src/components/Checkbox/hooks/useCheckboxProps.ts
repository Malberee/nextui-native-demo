import { useCheckboxGroupContext } from '../../CheckboxGroup/hooks/useCheckboxGroupContext'
import { CheckboxContextProps } from '../Checkbox.types'

export const defaultProps: Required<CheckboxContextProps> = {
  color: 'primary',
  size: 'md',
  radius: 'md',
  isDisabled: false,
  isIndeterminate: false,
  isInvalid: false,
  isReadOnly: false,
  isRequired: false,
  isSelected: false,
  lineThrough: false,
}

export const useCheckboxProps = (
  props: CheckboxContextProps,
): Required<CheckboxContextProps> => {
  const checkboxGroupContext = useCheckboxGroupContext()

  return { ...defaultProps, ...checkboxGroupContext, ...props }
}
