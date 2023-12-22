import { createContext, useContext } from 'react'
import { AccordionContextProps } from '../Accordion.types'

export const AccordionContext = createContext<AccordionContextProps>({})

export const useAccordionContext = () => {
  return useContext<AccordionContextProps>(AccordionContext)
}
