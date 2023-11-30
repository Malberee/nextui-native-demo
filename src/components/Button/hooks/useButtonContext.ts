import { createContext, useContext } from 'react'
import { ButtonProps } from '../Button.types'

export const ButtonContext = createContext<Omit<ButtonProps, 'children'>>({})

export const useButtonContext = () => {
  return useContext<Omit<ButtonProps, 'children'>>(ButtonContext)
}
