import { ReactNode } from 'react'
import { CheckboxProps } from '../Checkbox/Checkbox.types'

export interface CheckboxGroupProps
  extends Omit<CheckboxProps, 'value' | 'isSelected' | 'defaultSelected'> {
  children?: ReactNode | ReactNode[]
  orientation?: 'vertical' | 'horizontal'
  value?: string[]
  defaultValue?: string[]
  description?: ReactNode
  errorMessage?: ReactNode
}

export interface CheckboxGroupContextProps
  extends Omit<
    CheckboxProps,
    | 'children'
    | 'value'
    | 'name'
    | 'isSelected'
    | 'defaultSelected'
    | 'onValueChange'
  > {}
