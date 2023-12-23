import { createContext, useContext } from 'react'
import { AccordionItemContextProps } from '../AccordionItem.types'

export const AccordionItemContext = createContext<AccordionItemContextProps>({})

export const useAccordionItemContext = () => {
  return useContext<AccordionItemContextProps>(AccordionItemContext)
}
