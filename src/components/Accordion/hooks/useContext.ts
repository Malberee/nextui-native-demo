import { createContext, useContext } from 'react'
import { AccordionContextProps } from '../Accordion.types'
import { defaultProps } from './useProps'

export const AccordionContext =
  createContext<AccordionContextProps>(defaultProps)

export const useAccordionContext = () => {
  return useContext<AccordionContextProps>(AccordionContext)
}
