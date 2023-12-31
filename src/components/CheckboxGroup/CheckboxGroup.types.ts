import { ReactNode } from 'react'
import { CheckboxProps } from '../Checkbox/Checkbox.types'

export interface CheckboxGroupProps
  extends Omit<
    CheckboxProps,
    'value' | 'isSelected' | 'defaultSelected' | 'onValueChange'
  > {
  children?: ReactNode | ReactNode[]
  orientation?: 'vertical' | 'horizontal'
  value?: string[]
  defaultValue?: string[]
  description?: ReactNode
  errorMessage?: ReactNode

  // events
  onValueChange?: (value: string[]) => void
}

export interface CheckboxGroupContextProps
  extends Omit<
    CheckboxProps,
    | 'label'
    | 'value'
    | 'name'
    | 'isSelected'
    | 'defaultSelected'
    | 'onValueChange'
  > {
  selectCheckbox: (value: string) => void
}
