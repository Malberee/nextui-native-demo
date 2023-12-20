import { ReactNode } from 'react'
import { ColorName, FormatOptions, RadiusName, SizeName } from '../../types'

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
    Omit<
      ProgressProps,
      'valueLabel' | 'formatOptions' | 'disableAnimation' | 'label'
    >
  > {}
