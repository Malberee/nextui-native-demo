import { ColorName, RadiusName, SizeName } from '../../types'

export interface CodeProps {
  content: string
  size?: Extract<SizeName, 'sm' | 'md' | 'lg'>
  color?: ColorName
  radius?: RadiusName
}
