import { Radii, Sizes } from '../../types'

export const sizes: Pick<Sizes, 'sm' | 'md' | 'lg'> = {
  sm: 24,
  md: 28,
  lg: 32,
}

export const radii: Radii = {
  none: 0,
  sm: 8,
  md: 12,
  lg: 14,
  full: 9999,
}
