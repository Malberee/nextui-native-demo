import { ReactNode } from 'react'
import { ColorName, RadiusName, SizeName } from '../../types'

export interface CheckboxProps {
  label?: ReactNode | string
  // icon
  value: string
  name?: string
  size?: Extract<SizeName, 'sm' | 'md' | 'lg'> | number
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
  onValueChange?: (isSelected: boolean) => void
}

export interface CheckboxContextProps
  extends Omit<
    CheckboxProps,
    'children' | 'name' | 'value' | 'defaultSelected' | 'onValueChange'
  > {}
