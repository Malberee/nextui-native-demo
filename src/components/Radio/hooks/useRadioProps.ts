import { useRadioGroupContext } from '../../RadioGroup/hooks/useRadioGroupContext'
import { RadioContextProps } from '../Radio.types'

export const defaultProps: RadioContextProps = {
  size: 'md',
  color: 'primary',
  isDisabled: false,
  isInvalid: false,
  value: '',
}

export const useRadioProps = (
  props: Partial<RadioContextProps>,
): RadioContextProps => {
  const radioContext = useRadioGroupContext()

  return {
    ...defaultProps,
    ...radioContext,
    ...props,
  }
}
