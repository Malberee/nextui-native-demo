import { ReactNode } from 'react'
import { ColorName, SizeName, VariantName } from '../../types'

export type Shape = 'circle' | 'rectangle'
export type Placement =
  | 'top-right'
  | 'top-left'
  | 'bottom-right'
  | 'bottom-left'

export interface BadgeProps {
  children: ReactNode
  content?: string | number | ReactNode
  variant?: VariantName
  color?: ColorName
  size?: Extract<SizeName, 'sm' | 'md' | 'lg'> | number
  shape?: Shape
  placement?: Placement
  showOutline?: boolean
  disableAnimation?: boolean
  isInvisible?: boolean
  isOneChar?: boolean
  isDot?: boolean
}

export interface BadgeContextProps
  extends Omit<BadgeProps, 'children' | 'content'> {
  isDisabled?: boolean
  width?: number
}
