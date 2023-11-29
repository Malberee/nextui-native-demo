import { ReactNode } from 'react'
import { ImageSourcePropType } from 'react-native'
import { ColorName, RadiusName, SizeName } from '../../types'

export interface AvatarProps {
  source?: ImageSourcePropType
  color?: ColorName
  radius?: RadiusName | number
  size?: Extract<SizeName, 'sm' | 'md' | 'lg'> | number
  name?: string
  icon?: ReactNode
  fallback?: ReactNode
  isBordered?: boolean
  isDisabled?: boolean
  showFallback?: boolean
  isInGroup?: boolean
}
