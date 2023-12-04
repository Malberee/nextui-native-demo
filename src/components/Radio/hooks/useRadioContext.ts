import { createContext, useContext } from 'react'
import { RadioContextProps } from '../Radio.types'
import { defaultProps } from './useRadioProps'

export const RadioContext = createContext<RadioContextProps>(defaultProps)

export const useRadioContext = () => {
  return useContext<RadioContextProps>(RadioContext)
}
