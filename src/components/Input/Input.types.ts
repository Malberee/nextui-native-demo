import { ReactNode } from 'react'
import { ColorName, RadiusName, SizeName, VariantName } from '../../types'

type LabelPlacement = 'inside' | 'outside' | 'outside-left'

export interface InputProps {
  variant?: Extract<VariantName, 'flat' | 'bordered' | 'faded'> | 'underlined'
  color?: ColorName
  size?: Extract<SizeName, 'sm' | 'md' | 'lg'>
  radius?: RadiusName
  label?: ReactNode | string
  value?: string
  defaultValue?: string
  placeholder?: string
  description?: string
  errorMessage?: string
  startContent?: ReactNode
  endContent?: ReactNode
  labelPlacement?: LabelPlacement
  // fullWidth?: boolean
  isClearable?: boolean
  isRequired?: boolean
  isReadOnly?: boolean
  isDisabled?: boolean
  isInvalid?: boolean

  // events
  onValueChange?: (value: string) => void
  onClear?: () => void
}

export interface InputContextProps
  extends Required<
    Pick<
      InputProps,
      | 'variant'
      | 'color'
      | 'size'
      | 'radius'
      | 'labelPlacement'
      | 'isDisabled'
      | 'isInvalid'
    >
  > {}
