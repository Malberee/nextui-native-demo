import { Sizes, Radii, RadiusName, SizeName } from './types'

export const getRadius = (radii: Radii, radius: RadiusName | number) => {
  if (typeof radius === 'string') {
    return radii[radius]
  }
  return radius
}

export const getSize = (sizes: Sizes, size: SizeName | number) => {
  if (typeof size === 'string') {
    return sizes[size]
  }
  return size
}
