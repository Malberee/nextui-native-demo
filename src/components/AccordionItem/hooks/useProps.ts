import { useAccordionContext } from '../../Accordion/hooks/useContext'
import { AccordionItemContextProps } from '../AccordionItem.types'

const defaultProps: Required<AccordionItemContextProps> = {
  isCompact: false,
  isDisabled: false,
  disableIndicatorAnimation: false,
  hideIndicator: false,
}

export const useAccordionItemProps = (props: AccordionItemContextProps) => {
  const accordionContext = useAccordionContext()

  return { ...defaultProps, ...accordionContext, ...props }
}
