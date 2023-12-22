import { AccordionProps } from '../Accordion.types'

const defaultProps: Omit<AccordionProps, 'children'> = {
  variant: 'light',
  selectionMode: 'single',
  isCompact: false,
  isDisabled: false,
  showDivider: true,
  hideIndicator: false,
  fullWidth: true,
}

const useProps = (props: Partial<AccordionProps>) => {
  return { ...defaultProps, ...props }
}

export default useProps
