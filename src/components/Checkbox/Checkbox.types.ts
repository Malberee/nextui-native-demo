import { ReactNode } from 'react'
import { ColorName, RadiusName, SizeName, StylesProp } from '../../types'

export type CheckboxStyles = StylesProp<'wrapper' | 'content' | 'label'>

export interface CheckboxProps {
  children?: ReactNode
  icon?: ReactNode
  value: string
  name?: string
  size?: Extract<SizeName, 'sm' | 'md' | 'lg'> | number
  color?: ColorName
  radius?: RadiusName
  /** Children must be a string for lineThrough to work correctly */
  lineThrough?: boolean
  isSelected?: boolean
  defaultSelected?: boolean
  isRequired?: boolean
  isReadOnly?: boolean
  isDisabled?: boolean
  isIndeterminate?: boolean
  isInvalid?: boolean
  styles?: CheckboxStyles

  // events
  onValueChange?: (isSelected: boolean) => void
}

export interface CheckboxContextProps
  extends Required<
      Omit<
        CheckboxProps,
        | 'children'
        | 'icon'
        | 'name'
        | 'value'
        | 'onValueChange'
        | 'defaultSelected'
        | 'isSelected'
      >
    >,
    Pick<CheckboxProps, 'isSelected' | 'defaultSelected'> {
  isSelected?: boolean
  defaultSelected?: boolean
}
