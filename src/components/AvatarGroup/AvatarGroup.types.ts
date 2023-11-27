import { ReactNode } from 'react'
import { AvatarProps } from '../Avatar/Avatar.types'

export interface AvatarGroupProps
  extends Omit<AvatarProps, 'source' | 'icon' | 'fallback'> {
  children: ReactNode[] | ReactNode
  max?: number
  total?: number
  isGrid?: boolean
  renderCount?: (count: number) => ReactNode
}
