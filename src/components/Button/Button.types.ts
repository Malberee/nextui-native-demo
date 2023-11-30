import { ReactNode } from 'react'
import { ColorName, RadiusName, SizeName, VariantName } from '../../types'

export interface ButtonProps {
  children: ReactNode
  variant?: VariantName
  color?: ColorName
  size?: Extract<SizeName, 'sm' | 'md' | 'lg'>
  radius?: RadiusName
  startContent?: ReactNode
  endContent?: ReactNode
  spinner?: ReactNode
  spinnerPlacement?: 'start' | 'end'
  fullWidth?: boolean
  isIconOnly?: boolean
  isDisabled?: boolean
  isLoading?: boolean
  disableRipple?: boolean
  disableAnimation?: boolean

    // events
    
}
