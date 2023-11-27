import { ReactNode } from 'react'
import { AvatarProps, Radius, Size } from '../Avatar/Avatar.types'
import { ColorName } from '../../types'

export interface AvatarGroupProps
  extends Omit<AvatarProps, 'source' | 'icon' | 'fallback'> {
  children: ReactNode
  max?: number
  total?: number
  isGrid?: boolean
  renderCount?: (count: number) => ReactNode
}
