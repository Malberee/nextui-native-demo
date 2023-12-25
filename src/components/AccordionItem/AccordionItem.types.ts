import { Key, ReactNode } from 'react'
import { Variant } from '../Accordion/Accordion.types'

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
  index?: Key

  // events
  // onPress:
}

export interface AccordionItemContextProps
  extends Pick<
    AccordionItemProps,
    'isCompact' | 'isDisabled' | 'disableIndicatorAnimation' | 'hideIndicator'
  > {
  variant?: Variant
}
