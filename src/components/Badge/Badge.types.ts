import { ReactNode } from 'react'
import { ColorName, SizeName, VariantName } from '../../types'

export type Placement =
  | 'top-right'
  | 'top-left'
  | 'bottom-right'
  | 'bottom-left'
export type Shape = 'circle' | 'rectangle'

export interface BadgeProps {
  children: ReactNode
  content?: string | number | ReactNode
  variant?: VariantName
  color?: ColorName
  size?: SizeName | number
  shape?: Shape
  placement?: Placement
  showOutline?: boolean
  disableAnimation?: boolean
  isInvisible?: boolean
  isOneChar?: boolean
  isDot?: boolean
}
