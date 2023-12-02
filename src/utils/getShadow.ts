import { TColors } from '../colors'
import { ColorName, VariantName } from '../types'

export const getShadow = (
  variant: VariantName,
  colors: TColors,
  color: ColorName,
) => {
  return {
    shadowColor: variant === 'shadow' ? colors[color] : 'none',
    shadowOffset: {
      width: 0,
      height: 11,
    },
    shadowOpacity: 0.23,
    shadowRadius: 11.78,
    elevation: 12,
  }
}
