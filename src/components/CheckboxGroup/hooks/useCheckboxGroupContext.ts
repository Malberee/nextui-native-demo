import { createContext, useContext } from 'react'
import { CheckboxGroupContextProps } from '../CheckboxGroup.types'
import { defaultProps } from './useCheckboxGroupProps'

export const CheckboxGroupContext =
  createContext<CheckboxGroupContextProps>(defaultProps)

export const useCheckboxGroupContext = () => {
  return useContext<CheckboxGroupContextProps>(CheckboxGroupContext)
}
