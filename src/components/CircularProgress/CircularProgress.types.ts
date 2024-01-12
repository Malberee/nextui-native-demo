import React, { ReactNode } from 'react'
import { ColorName, FormatOptions, SizeName } from '../../types'

export interface CircularProgressProps {
  label?: ReactNode
  size?: Extract<SizeName, 'sm' | 'md' | 'lg'> | number
  color?: ColorName
  value?: number
  valueLabel?: ReactNode
  minValue?: number
  maxValue?: number
  formatOptions?: FormatOptions
  isIndeterminate?: boolean
  showValueLabel?: boolean
  strokeWidth?: boolean
  isDisabled?: boolean
}
