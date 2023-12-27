import { AccordionContextProps, AccordionProps } from '../Accordion.types'

export const defaultProps: AccordionContextProps = {
  variant: 'light',
  selectionMode: 'single',
  isCompact: false,
  isDisabled: false,
  hideIndicator: false,
  fullWidth: true,
  disableIndicatorAnimation: false,
}

const useAccordionProps = (
  props: Partial<AccordionProps>,
): AccordionContextProps => {
  return { ...defaultProps, ...props }
}

export default useAccordionProps
