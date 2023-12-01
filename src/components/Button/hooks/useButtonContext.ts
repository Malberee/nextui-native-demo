import { createContext, useContext } from 'react'
import { ButtonContextProps } from '../Button.types'
import { defaultProps } from './useButtonProps'

export const ButtonContext = createContext<ButtonContextProps>(defaultProps)

export const useButtonContext = () => {
  return useContext<ButtonContextProps>(ButtonContext)
}
