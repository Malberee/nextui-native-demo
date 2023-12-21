import { ReactNode } from 'react'
import { ColorName, RadiusName, SizeName, VariantName } from '../../types'
import { GestureResponderEvent } from 'react-native'

export type OnPressType = (event?: GestureResponderEvent) => void
export interface ButtonProps {
  children: ReactNode
  variant?: VariantName
  color?: ColorName
  size?: Extract<SizeName, 'sm' | 'md' | 'lg'>
  radius?: RadiusName
  startContent?: ReactNode
  endContent?: ReactNode
  spinner?: ReactNode
  spinnerPlacement?: 'start' | 'end'
  fullWidth?: boolean
  isIconOnly?: boolean
  isDisabled?: boolean
  isLoading?: boolean
  disableRipple?: boolean
  disableAnimation?: boolean

  // events
  onPress?: OnPressType
  onPressIn?: OnPressType
  onPressOut?: OnPressType
}

export interface ButtonContextProps
  extends Required<
    Pick<
      ButtonProps,
      | 'variant'
      | 'color'
      | 'size'
      | 'radius'
      | 'fullWidth'
      | 'isIconOnly'
      | 'isDisabled'
    >
  > {
  isInGroup: boolean
  isFirst: boolean
  isLast: boolean
}
