import { createContext, useContext } from 'react'
import { CheckboxGroupContextProps } from '../CheckboxGroup.types'
import { defaultProps } from './useCheckboxGroupProps'

export const CheckboxGroupContext =
  createContext<CheckboxGroupContextProps>(defaultProps)

export const useCheckboxGroupContextGroupContext = () => {
  return useContext<CheckboxGroupContextProps>(CheckboxGroupContext)
}
