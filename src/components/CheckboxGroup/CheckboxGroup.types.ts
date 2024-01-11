import { ReactNode } from 'react'
import { CheckboxProps } from '../Checkbox/Checkbox.types'
import { StylesProp } from '../../types'

export type CheckboxGroupStyles = StylesProp<
  'wrapper' | 'label' | 'description' | 'errorMessage'
>

export interface CheckboxGroupProps
  extends Omit<
    CheckboxProps,
    | 'value'
    | 'isSelected'
    | 'defaultSelected'
    | 'onValueChange'
    | 'name'
    | 'styles'
  > {
  children?: ReactNode | ReactNode[]
  label?: string
  orientation?: 'vertical' | 'horizontal'
  value?: string[]
  defaultValue?: string[]
  description?: ReactNode
  errorMessage?: ReactNode
  styles?: Partial<CheckboxGroupStyles>

  // events
  onValueChange?: (value: string[]) => void
}

export interface CheckboxGroupContextProps
  extends Required<
    Omit<
      CheckboxProps,
      | 'children'
      | 'value'
      | 'icon'
      | 'name'
      | 'isSelected'
      | 'defaultSelected'
      | 'onValueChange'
      | 'styles'
    >
  > {
  selectCheckbox?: (value: string) => void
}
