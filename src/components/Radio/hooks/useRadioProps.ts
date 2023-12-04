import { useRadioGroupContext } from '../../RadioGroup/hooks/useRadioGroupContext'
import { RadioContextProps } from '../Radio.types'

export const defaultProps: RadioContextProps = {
  size: 'md',
  color: 'primary',
  isDisabled: false,
}

export const useRadioProps = (props: Partial<RadioContextProps>) => {
    const radioContext = useRadioGroupContext()
    
    console.log({ ...defaultProps, ...radioContext, ...props })
    

  return {
    ...defaultProps,
    ...radioContext,
    ...props,
  }
}
