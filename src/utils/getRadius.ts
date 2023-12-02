import { Radii, RadiusName } from '../types'

export const getRadius = (radii: Radii, radius: RadiusName | number) => {
  if (typeof radius === 'string') {
    return radii[radius]
  }
  return radius
}
