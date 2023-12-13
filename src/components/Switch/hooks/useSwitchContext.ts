import { createContext, useContext } from 'react'
import { defaultProps } from './useSwitchProps'
import { SwitchContextProps } from '../Switch.types'

export const SwitchContext = createContext<SwitchContextProps>(defaultProps)

export const useSwitchContext = () => {
  return useContext<SwitchContextProps>(SwitchContext)
}
