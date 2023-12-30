import { ReactNode } from 'react'
import { ColorName, RadiusName, SizeName } from '../../types'

export interface CheckboxProps {
  children?: ReactNode
  // icon
  value: string
  name?: string
  size?: Extract<SizeName, 'sm' | 'md' | 'lg'>
  color?: ColorName
  radius?: RadiusName
  lineThrough?: boolean
  isSelected?: boolean
  defaultSelected?: boolean
  isRequired?: boolean
  isReadOnly?: boolean
  isDisabled?: boolean
  isIndeterminate?: boolean
  isInvalid?: boolean

  // events
  onValueChange?: (checkboxValue: string) => void
}

export interface CheckboxContextProps
  extends Omit<
    CheckboxProps,
    'children' | 'name' | 'value' | 'defaultSelected' | 'onValueChange'
  > {}
