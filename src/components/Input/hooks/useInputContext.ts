import { createContext, useContext } from 'react'
import { InputContextProps } from '../Input.types'
import { defaultProps } from './useInputProps'

export const InputContext =
  createContext<Required<InputContextProps>>(defaultProps)

export const useInputContext = () => {
  return useContext<Required<InputContextProps>>(InputContext)
}
