import { useAccordionContext } from '../../Accordion/hooks/useContext'
import { AccordionItemContextProps } from '../AccordionItem.types'

const defaultProps: AccordionItemContextProps = {
  isCompact: false,
  isDisabled: false,
}

export const useAccordionItemProps = (props: AccordionItemContextProps) => {
  const accordionContext = useAccordionContext()

  return { ...defaultProps, ...accordionContext, props }
}
