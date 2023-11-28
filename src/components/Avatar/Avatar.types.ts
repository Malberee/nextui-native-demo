import { ReactNode } from 'react'
import { ImageSourcePropType } from 'react-native'
import { ColorName, RadiusName, SizeName } from '../../types'

export interface AvatarProps {
  source?: ImageSourcePropType
  color?: ColorName
  radius?: RadiusName | number
  size?: SizeName | number
  name?: string
  icon?: ReactNode
  fallback?: ReactNode
  isBordered?: boolean
  isDisabled?: boolean
  isGrid?: boolean
  index?: number
  isInGroup?: boolean
}
