import { createContext, useContext } from 'react'
import { ButtonContextProps } from '../Button.types'

export const ButtonContext = createContext<ButtonContextProps>({})

export const useButtonContext = () => {
  return useContext<ButtonContextProps>(ButtonContext)
}
