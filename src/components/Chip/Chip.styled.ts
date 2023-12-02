import styled, { css } from 'styled-components/native'
import useColors from '../ThemeProvider/hooks/useColors'
import { useChipContext } from './hooks/useChipContext'
import { getRadius } from '../../utils/getRadius'
import { getSize } from '../../utils/getSize'
import { getTextColor } from '../../utils/getTextColor'
import { radii, sizes } from './Chip.constants'
import { getVariantStyles } from '../../utils/getVariantStyles'

export const ChipWrapper = styled.View(() => {
  const { size, radius, color, variant, isDisabled } = useChipContext()
  const { colors } = useColors()

  return css`
    display: flex;
    justify-content: center;

    height: ${getSize(sizes, size)}px;
    padding: 0 ${size === 'lg' ? 8 : 4}px;

    border-radius: ${getRadius(radii, radius)}px;
    ${getVariantStyles(variant, color)}

    opacity: ${isDisabled ? 0.5 : 1};
  `
})

export const ChipContent = styled.Text(() => {
  const { size, color, variant } = useChipContext()
  const { colors } = useColors()

  return css`
    padding: 0 ${size === 'lg' ? 8 : 4}px;
    font-size: ${size === 'lg' ? 16 : size === 'md' ? 14 : 12}px;
    color: ${variant === 'solid' || variant === 'shadow'
      ? getTextColor(color)
      : colors[color]};
  `
})
