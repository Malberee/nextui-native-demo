import { Key, ReactNode } from 'react'
import { DividerProps } from '../Divider/Divider.types'

export type Variant = 'light' | 'shadow' | 'bordered' | 'splitted'

type SelectionMode = 'multiple' | 'single'

export interface AccordionProps {
  children: ReactNode | ReactNode[]
  variant?: Variant
  selectionMode?: SelectionMode
  isCompact?: boolean
  isDisabled?: boolean
  showDivider?: boolean
  DividerProps?: DividerProps
  hideIndicator?: boolean
  disableIndicatorAnimation?: boolean
  fullWidth?: boolean
  disabledKeys?: Key[]
  selectedKeys?: 'all' | Key[]
  defaultSelectedKeys?: 'all' | Key[]

  // events
  onSelectionChange?: (keys: 'all' | Key[]) => any
}

export interface AccordionContextProps
  extends Required<
    Pick<
      AccordionProps,
      | 'variant'
      | 'selectionMode'
      | 'isCompact'
      | 'isDisabled'
      | 'hideIndicator'
      | 'fullWidth'
      | 'disableIndicatorAnimation'
      | 'disabledKeys'
    >
  > {
  selectedKeys?: 'all' | Key[]
  toggleAccordionItem?: (key: Key) => void
}
