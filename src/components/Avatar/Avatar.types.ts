import { ReactNode } from 'react'
import { ImageSourcePropType } from 'react-native'
import { ColorName, RadiusName, SizeName } from '../../types'

export interface AvatarProps {
  source?: ImageSourcePropType | null
  color?: ColorName
  radius?: RadiusName | number
  size?: Extract<SizeName, 'sm' | 'md' | 'lg'> | number
  name?: string
  icon?: ReactNode
  fallback?: ReactNode
  isBordered?: boolean
  isDisabled?: boolean
  showFallback?: boolean
}

export interface AvatarContextProps extends Required<Omit<AvatarProps, 'name' | 'icon' | 'fallback' | 'showFallback'>> {}
