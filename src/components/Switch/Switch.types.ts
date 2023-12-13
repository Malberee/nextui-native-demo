import { ReactNode } from 'react'
import { GestureResponderEvent } from 'react-native'
import { ColorName, SizeName } from '../../types'

export interface SwitchProps {
  children?: ReactNode
  value?: string
  name?: string
  size?: Extract<SizeName, 'sm' | 'md' | 'lg'>
  color?: ColorName
  thumbIcon?: ReactNode
  startContent?: ReactNode
  endContent?: ReactNode
  isSelected?: boolean
  defaultSelected?: boolean
  isRequired?: boolean
  isReadOnly?: boolean
  isDisabled?: boolean
  disableAnimation?: boolean

  // events
  onChange?: (event: GestureResponderEvent) => void
  onValueChange?: (isSelected: boolean) => void
}

export interface SwitchContextProps
  extends Required<
    Pick<
      SwitchProps,
      | 'size'
      | 'color'
      | 'isSelected'
      | 'isRequired'
      | 'isDisabled'
      | 'disableAnimation'
      | 'defaultSelected'
    >
  > {}
