import { AccordionContextProps, AccordionProps } from '../Accordion.types'

export const defaultProps: AccordionContextProps = {
  variant: 'light',
  selectionMode: 'single',
  isCompact: false,
  isDisabled: false,
  showDivider: true,
  hideIndicator: false,
  fullWidth: true,
  disableIndicatorAnimation: false,
}

const useProps = (props: Partial<AccordionProps>) => {
  return { ...defaultProps, ...props }
}

export default useProps
