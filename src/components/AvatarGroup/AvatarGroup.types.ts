import { ReactNode } from 'react'
import { AvatarProps } from '../Avatar/Avatar.types'

export interface AvatarGroupProps
  extends Pick<
    AvatarProps,
    'size' | 'color' | 'radius' | 'isDisabled' | 'isBordered'
  > {
  children: ReactNode
  max?: number
  total?: number
  isGrid?: boolean
  renderCount?: (count: number) => ReactNode
}

export interface AvatarGroupContextProps
  extends Pick<
    AvatarProps,
    'size' | 'color' | 'radius' | 'isDisabled' | 'isBordered'
  > {}

export interface AvatarGroupWrapperProps {
  isGrid?: boolean
}

export interface AvatarWrapperProps {
  index: number
  isGrid?: boolean
}
