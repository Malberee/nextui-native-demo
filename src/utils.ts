import useColors from './components/ThemeProvider/hooks/useColors'
import { Sizes, Radii, RadiusName, SizeName, ColorName } from './types'

export const getRadius = (radii: Radii, radius: RadiusName | number) => {
  if (typeof radius === 'string') {
    return radii[radius]
  }
  return radius
}

export const getTextColor = (color: ColorName) => {
  const { colors } = useColors()
  if (color === 'success' || color === 'warning') {
    return colors.black
  }
  if (color === 'default') {
    if (colors.background === '#FFFFFF') return '#000000'
    return '#FFFFFF'
  }
  return colors.white
}

export const getSize = (sizes: Sizes, size: keyof Sizes | number) => {
  if (typeof size === 'string') {
    return sizes[size]
  }
  return size
}
