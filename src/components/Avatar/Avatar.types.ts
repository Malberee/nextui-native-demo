import { ReactNode } from 'react'
import { ImageSourcePropType } from 'react-native'
import { ColorName, RadiusName, SizeName } from '../../types'

export type Radius = RadiusName | number
export type Size = SizeName | number

export interface AvatarProps {
  source?: ImageSourcePropType
  color?: ColorName
  radius?: Radius
  size?: Size
  name?: string
  icon?: ReactNode
  fallback?: ReactNode
  isBordered?: boolean
  isDisabled?: boolean
  isGrid?: boolean
  index?: number
  isInGroup?: boolean
}

export interface AvatarWrapperProps
  extends Omit<AvatarProps, 'source' | 'name' | 'icon' | 'fallback'> {
  isInGroup: boolean
}
