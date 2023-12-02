import useColors from '../components/ThemeProvider/hooks/useColors'
import { ColorName } from '../types'

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
