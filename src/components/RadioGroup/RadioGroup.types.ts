import { ReactNode } from 'react'
import { RadioProps } from '../Radio/Radio.types'

export interface RadioGroupProps extends Partial<RadioProps> {
  children: ReactNode | ReactNode[]
  orientation?: 'horizontal' | 'vertical'
  name?: string
  defaultValue?: string
  errorMessage?: ReactNode

  // events
  // onChange: ()
  onValueChange?: (value: string) => void
}
export interface RadioGroupContextProps
  extends Omit<RadioGroupProps, 'children' | 'value'> {
  selectedRadio?: string
  selectRadio: (value: string) => void
}
