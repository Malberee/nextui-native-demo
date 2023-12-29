import { createContext, useContext } from 'react'
import { CheckboxContextProps } from '../Checkbox.types'
import { defaultProps } from './useCheckboxProps'

export const CheckboxContext = createContext<CheckboxContextProps>(defaultProps)

export const useCheckboxContextContext = () => {
  return useContext<CheckboxContextProps>(CheckboxContext)
}
