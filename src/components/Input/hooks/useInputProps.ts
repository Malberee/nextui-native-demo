import { InputContextProps } from '../Input.types'

export const defaultProps: InputContextProps = {
  variant: 'flat',
  color: 'default',
  size: 'md',
  radius: 'md',
  labelPlacement: 'inside',
  isDisabled: false,
  isInvalid: false,
  isClearable: false,
}

const useInputProps = (
  props: Partial<InputContextProps>,
): InputContextProps => {
  return { ...defaultProps, ...props }
}

export default useInputProps
