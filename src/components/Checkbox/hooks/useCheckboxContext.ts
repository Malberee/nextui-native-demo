import { createContext, useContext } from 'react'
import { CheckboxContextProps } from '../Checkbox.types'
import { defaultProps } from './useCheckboxProps'

export const CheckboxContext =
  createContext<Required<CheckboxContextProps>>(defaultProps)

export const useCheckboxContext = () => {
  return useContext<Required<CheckboxContextProps>>(CheckboxContext)
}
