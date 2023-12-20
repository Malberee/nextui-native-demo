import { ReactNode } from 'react'
import { ColorName, RadiusName, SizeName } from '../../types'

export type FormatOptions = {
  locale: string
  options?: Intl.NumberFormatOptions
}

export interface ProgressProps {
  label?: ReactNode
  size?: Extract<SizeName, 'sm' | 'md' | 'lg'>
  color?: ColorName
  radius?: RadiusName
  value?: number
  valueLabel?: ReactNode
  minValue?: number
  maxValue?: number
  formatOptions?: FormatOptions
  isIndeterminate?: boolean
  isStriped?: boolean
  showValueLabel?: boolean
  isDisabled?: boolean
  disableAnimation?: boolean
}

export interface ProgressContextProps
  extends Required<
    Pick<
      ProgressProps,
      | 'size'
      | 'color'
      | 'radius'
      | 'isDisabled'
      | 'value'
      | 'minValue'
      | 'maxValue'
      | 'showValueLabel'
      | 'isIndeterminate'
      | 'isStriped'
    >
  > {}
