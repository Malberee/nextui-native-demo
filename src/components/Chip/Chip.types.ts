import { ReactNode } from 'react'
import { GestureResponderEvent } from 'react-native'
import { ColorName, RadiusName, SizeName, VariantName } from '../../types'

export interface ChipProps {
  children: string
  variant?: VariantName
  color?: ColorName
  size?: Extract<SizeName, 'sm' | 'md' | 'lg'>
  radius?: RadiusName
  avatar?: ReactNode
  startContent?: ReactNode
  endContent?: ReactNode
  isDisabled?: boolean

  onClose?: (event?: GestureResponderEvent) => void
}

export interface UseChipProps
  extends Omit<
    ChipProps,
    'children' | 'avatar' | 'startContent' | 'endContent' | 'onClose'
  > {}
