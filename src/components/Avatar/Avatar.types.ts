import { ReactNode } from 'react'
import { ColorName, RadiusName, SizeName } from '../../types'

export interface AvatarProps {
  source?: string
  color?: ColorName
  radius?: RadiusName
  size?: Pick<SizeName, 'sm' | 'md' | 'lg'>
  icon?: ReactNode
  fallback?: ReactNode
  isBordered?: boolean
  isDisabled?: boolean
  showFallback?: boolean
}
