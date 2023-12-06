import { Radii, Sizes } from '../../types'

export const thumbSizes: Pick<Sizes, 'sm' | 'md' | 'lg'> = {
  sm: 20,
  md: 24,
  lg: 28,
}

export const trackSizes: Pick<Sizes, 'sm' | 'md' | 'lg'> = {
  sm: 4,
  md: 12,
  lg: 28,
}

export const radii: Radii = {
  none: 0,
  sm: 4,
  md: 6,
  lg: 9.3,
  full: 9999,
}
