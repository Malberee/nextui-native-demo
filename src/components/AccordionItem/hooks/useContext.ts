import { createContext, useContext } from 'react'
import { AccordionItemContextProps } from '../AccordionItem.types'
import { defaultProps } from './useProps'

export const AccordionItemContext =
  createContext<AccordionItemContextProps>(defaultProps)

export const useAccordionItemContext = () => {
  return useContext<AccordionItemContextProps>(AccordionItemContext)
}
