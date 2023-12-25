import { Key, ReactNode } from 'react'
import { DividerProps } from '../Divider/Divider.types'

type Variants = 'light' | 'shadow' | 'bordered' | 'splitted'

type SelectionMode = 'multiple' | 'single'

export interface AccordionProps {
  children: ReactNode | ReactNode[]
  variant?: Variants
  selectionMode?: SelectionMode
  // selectionBehavior?: // Decide what to do with it
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
  onSelectionChange?: (keys: 'all' | Set<Key>) => any
}

export interface AccordionContextProps
  extends Pick<
    AccordionProps,
    | 'variant'
    | 'selectionMode'
    | 'isCompact'
    | 'isDisabled'
    | 'hideIndicator'
    | 'showDivider'
    | 'fullWidth'
    | 'disableIndicatorAnimation'
  > {
  selectedKeys?: 'all' | Key[]
  toggleAccordionItem?: (key: Key) => void
}
