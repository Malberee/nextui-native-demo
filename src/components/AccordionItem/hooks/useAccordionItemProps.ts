import { Key } from 'react'
import { useAccordionContext } from '../../Accordion/hooks/useAccordionContext'
import { AccordionItemContextProps } from '../AccordionItem.types'

export const defaultProps: Required<AccordionItemContextProps> = {
  variant: 'light',
  isCompact: false,
  isDisabled: false,
  disableIndicatorAnimation: false,
  hideIndicator: false,
}

export const useAccordionItemProps = (
  props: AccordionItemContextProps,
  index: Key,
) => {
  const accordionContext = useAccordionContext()

  const isDisabled =
    props.isDisabled || accordionContext?.disabledKeys?.includes(index)

  return { ...defaultProps, ...accordionContext, ...props, isDisabled }
}
