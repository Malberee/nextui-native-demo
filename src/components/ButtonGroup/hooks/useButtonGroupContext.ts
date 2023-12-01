import { createContext, useContext } from 'react'
import { ButtonGroupProps } from '../ButtonGroup.types'

export const ButtonGroupContext = createContext<
  Omit<ButtonGroupProps, 'children'>
>({})

export const useButtonGroupContext = () => {
  return useContext<Omit<ButtonGroupProps, 'children'>>(ButtonGroupContext)
}
