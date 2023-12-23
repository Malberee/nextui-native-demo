import { ReactNode } from 'react'

export interface AccordionItemProps {
  children: ReactNode | string
  title?: ReactNode | string
  subtitle?: ReactNode | string
  indicator?: ReactNode
  startContent?: ReactNode
  isCompact?: boolean
  isDisabled?: boolean
  //   keepContentMounted?: boolean
  hideIndicator?: boolean
  disableIndicatorAnimation?: boolean

  // events
  // onPress:
}

export interface AccordionItemContextProps
  extends Pick<AccordionItemProps, 'isCompact' | 'isDisabled'> {}
