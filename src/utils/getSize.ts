import { Sizes } from '../types'

export const getSize = (sizes: Sizes, size: keyof Sizes | number) => {
  if (typeof size === 'string') {
    return sizes[size]
  }
  return size
}
