import { createContext, useContext } from 'react'
import { RadioGroupContextProps } from '../RadioGroup.types'

export const RadioGroupContext = createContext<RadioGroupContextProps>({selectRadio: () => ''})

export const useRadioGroupContext = () => {
  return useContext<RadioGroupContextProps>(RadioGroupContext)
}
