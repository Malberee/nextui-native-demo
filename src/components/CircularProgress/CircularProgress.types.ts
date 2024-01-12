import { ColorName, SizeName } from '../../types'

export interface CircularProgressProps {
  size?: Extract<SizeName, 'sm' | 'md' | 'lg'> | number
  color?: ColorName
}
