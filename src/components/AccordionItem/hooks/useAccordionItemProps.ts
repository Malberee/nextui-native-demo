import { useAccordionContext } from '../../Accordion/hooks/useAccordionContext'
import { AccordionItemContextProps } from '../AccordionItem.types'

export const defaultProps: Required<AccordionItemContextProps> = {
  variant: 'light',
  isCompact: false,
  isDisabled: false,
  disableIndicatorAnimation: false,
  hideIndicator: false,
}

export const useAccordionItemProps = (props: AccordionItemContextProps) => {
  const accordionContext = useAccordionContext()

  return { ...defaultProps, ...accordionContext, ...props }
}