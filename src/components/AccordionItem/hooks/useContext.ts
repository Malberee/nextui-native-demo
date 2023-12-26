import { createContext, useContext } from 'react'
import { AccordionItemContextProps } from '../AccordionItem.types'
import { defaultProps } from './useProps'

export const AccordionItemContext =
  createContext<Required<AccordionItemContextProps>>(defaultProps)

export const useAccordionItemContext = () => {
  return useContext<Required<AccordionItemContextProps>>(AccordionItemContext)
}
