import { SwitchContextProps } from '../Switch.types'

export const defaultProps: SwitchContextProps = {
  size: 'md',
  color: 'primary',
  isSelected: false,
  isRequired: false,
  isDisabled: false,
  disableAnimation: false,
  defaultSelected: false,
}

export const useSwitchProps = (
  props: Partial<SwitchContextProps>,
): SwitchContextProps => {
  return {
    ...defaultProps,
    ...props,
  }
}
