import { ReactNode } from 'react'
import { RadioProps } from '../Radio/Radio.types'
import { StylesProp } from '../../types'

export type RadioGroupStyles = StylesProp<'wrapper' | 'label' | 'description'>

export interface RadioGroupProps extends Partial<RadioProps> {
  children: ReactNode | ReactNode[]
  orientation?: 'horizontal' | 'vertical'
  name?: string
  defaultValue?: string
  errorMessage?: ReactNode
  value?: string
  styles?: Partial<RadioGroupStyles>

  // events
  onValueChange?: (value: string) => void
}
export interface RadioGroupContextProps
  extends Omit<RadioGroupProps, 'children' | 'value' | 'styles'> {
  selectedRadio?: string
  selectRadio: (value: string) => void
}
