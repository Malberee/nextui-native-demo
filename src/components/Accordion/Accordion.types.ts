import { Key, ReactNode } from 'react'
import { DividerProps } from '../Divider/Divider.types'

type Variants = 'light' | 'shadow' | 'bordered' | 'splitted'

type SelectionMode = 'none' | 'multiple' | 'single'

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
  //   keepContentMounted?: boolean // And this
  fullWidth?: boolean
  disabledKeys?: Key[]
  selectedKeys?: 'all' | Key[]
  defaultSelectedKeys?: 'all' | Key[]

  // events
  onSelectionChange?: (keys: 'all' | Set<Key>) => any
}
